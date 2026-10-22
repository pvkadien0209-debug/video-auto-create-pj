// en-work-email-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-work-email-overview--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "en-email-office-workers",
    "slug": "en-work-email-overview",
    "door": "ky-nang",
    "level": "B1",
    "title": "Viết email tiếng Anh cho công việc cần nắm những gì?",
    "series": "Email tiếng Anh đi làm — cho nhân viên văn phòng, viết đúng việc trong 10 phút"
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
            "text": "5 phần",
            "x": 60,
            "y": 110,
            "size": 160,
            "at": "l1:five",
            "color": "accent",
            "hl": [
              {
                "text": "5 phần",
                "at": "l1:five parts"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "khung của mọi email công việc",
            "x": 70,
            "y": 320,
            "size": 56,
            "at": "l1:every"
          },
          {
            "id": "a-fancy",
            "t": "text",
            "text": "Ta tưởng: phải văn hoa?",
            "x": 70,
            "y": 430,
            "size": 56,
            "at": "l2:fancy",
            "color": "muted"
          },
          {
            "id": "a-fx",
            "t": "strike",
            "over": "a-fancy",
            "at": "l3:frame"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five parts. Every work email in English is built from just five parts.",
          "sub": "Năm phần. Email công việc tiếng Anh nào cũng chỉ dựng từ năm phần.",
          "keys": [
            "năm phần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet we think it needs fancy words, like a letter to the Queen.",
          "sub": "Vậy mà ta cứ tưởng phải văn hoa, như viết thư gửi nữ hoàng.",
          "keys": [
            "phải văn hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No. Just a fixed frame.",
          "sub": "Không đâu. Chỉ cần một cái khung cố định.",
          "keys": [
            "khung cố định"
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
            "at": "l1",
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
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "e-mail",
                "hourglass-not-done"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · 8:00",
            "icon": "e-mail"
          },
          {
            "id": "a-h",
            "t": "text",
            "text": "3 câu · 1 tiếng",
            "x": 70,
            "y": 530,
            "size": 60,
            "at": "l3:hour",
            "color": "coral",
            "hl": [
              {
                "text": "1 tiếng",
                "at": "l3:one hour"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Lời chào cao hơn mâm cỗ”",
            "x": 60,
            "y": 640,
            "size": 56,
            "at": "l4:greeting",
            "color": "accent",
            "hl": [
              {
                "text": "mâm cỗ",
                "at": "l4:feast"
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
          "say": "Meet Lan.",
          "sub": "Đây là Lan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "New in purchasing. Reading English, fine. Writing, another story.",
          "sub": "Nhân viên mua hàng mới vào. Đọc email tiếng Anh thì ổn, tự viết lại là chuyện khác.",
          "keys": [
            "tự viết lại là chuyện khác"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Three sentences to our Australian partner. One hour already. Too rude?",
          "sub": "Ba câu gửi đối tác Úc. Mất một tiếng rồi. Có cộc quá không?",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: a greeting is worth more than a feast.",
          "sub": "Ông bà dặn: “Lời chào cao hơn mâm cỗ.”",
          "keys": [
            "Lời chào cao hơn mâm cỗ"
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
            "text": "Email tiếng Anh: nắm gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:english",
            "hl": [
              {
                "text": "nắm gì",
                "at": "l1:need to know"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: nghìn câu văn hoa",
            "x": 2028,
            "y": 170,
            "size": 48,
            "at": "l2:thousand",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:frame"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: đúng khung · giọng · việc",
            "x": 2028,
            "y": 260,
            "size": 50,
            "at": "l2:frame",
            "color": "accent",
            "hl": [
              {
                "text": "khung",
                "at": "l2:frame"
              },
              {
                "text": "giọng",
                "at": "l2:tone"
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
          "say": "So what do you need to know to write work emails in English?",
          "sub": "Vậy viết email tiếng Anh cho công việc cần nắm những gì?",
          "keys": [
            "cần nắm những gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a thousand fancy phrases. The right frame, the right tone, the right job.",
          "sub": "Không phải nghìn câu văn hoa. Mà là đúng khung, đúng giọng, đúng việc.",
          "keys": [
            "đúng khung, đúng giọng, đúng việc"
          ]
        }
      ],
      "ref": "intro,outro"
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
            "id": "b-p0",
            "t": "text",
            "text": "① Tiêu đề nói rõ việc",
            "x": 2908,
            "y": 150,
            "size": 44,
            "at": "l3:subject"
          },
          {
            "id": "b-p1",
            "t": "text",
            "text": "② Lời chào hợp mức thân",
            "x": 2908,
            "y": 220,
            "size": 44,
            "at": "l3:greeting"
          },
          {
            "id": "b-p2",
            "t": "text",
            "text": "③ Một câu nêu lý do",
            "x": 2908,
            "y": 290,
            "size": 44,
            "at": "l3:reason"
          },
          {
            "id": "b-p3",
            "t": "text",
            "text": "④ Nội dung, đoạn ngắn",
            "x": 2908,
            "y": 360,
            "size": 44,
            "at": "l4:paragraphs"
          },
          {
            "id": "b-p4",
            "t": "text",
            "text": "⑤ Câu kết + lời chào cuối",
            "x": 2908,
            "y": 430,
            "size": 44,
            "at": "l4:sign"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: British Council LearnEnglish, “Organising your writing”",
            "x": 2908,
            "y": 510,
            "size": 28,
            "at": "l1",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "b-ord",
            "t": "text",
            "text": "chào → lý do → nhờ → tin khác → kết",
            "x": 2028,
            "y": 360,
            "size": 40,
            "at": "l1:greeting",
            "color": "muted"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "1 tuần email · 7 chặng",
            "x": 2028,
            "y": 545,
            "size": 50,
            "at": "l5:week",
            "hl": [
              {
                "text": "7 chặng",
                "at": "l5:seven"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 215,
            "h": 86,
            "at": "l5:seven+500",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 615,
            "w": 215,
            "h": 86,
            "at": "l5:seven+750",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 615,
            "w": 215,
            "h": 86,
            "at": "l5:seven+1000",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 615,
            "w": 215,
            "h": 86,
            "at": "l5:seven+1250",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 615,
            "w": 215,
            "h": 86,
            "at": "l5:seven+1500",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 615,
            "w": 215,
            "h": 86,
            "at": "l5:seven+1750",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 615,
            "w": 215,
            "h": 86,
            "at": "l5:seven+2000",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 9:00",
            "x": 2046,
            "y": 632,
            "size": 38,
            "at": "l5:seven+600"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3 10:00",
            "x": 2281,
            "y": 632,
            "size": 38,
            "at": "l5:seven+850"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T3 15:00",
            "x": 2516,
            "y": 632,
            "size": 38,
            "at": "l5:seven+1100"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T4 9:00",
            "x": 2751,
            "y": 632,
            "size": 38,
            "at": "l5:seven+1350"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T4 14:00",
            "x": 2986,
            "y": 632,
            "size": 38,
            "at": "l5:seven+1600"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T5 10:00",
            "x": 3221,
            "y": 632,
            "size": 38,
            "at": "l5:seven+1850"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T6 16:00",
            "x": 3456,
            "y": 632,
            "size": 38,
            "at": "l5:seven+2100"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "British Council's sample: greeting, reason, request, other news, closing.",
          "sub": "British Council LearnEnglish xếp email mẫu: lời chào, lý do viết, điều muốn nhờ, tin khác, lời kết."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A subject that says the job. A greeting that fits. One line with your reason.",
          "sub": "Tiêu đề nói rõ việc. Lời chào hợp mức thân. Một câu nêu lý do viết."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Short paragraphs. A next step, and a sign off.",
          "sub": "Đoạn ngắn. Câu kết nêu bước tiếp theo, và lời chào cuối."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Lan's first week of emails, seven stops. Inbox open!",
          "sub": "Theo Lan qua tuần email đầu tiên, bảy chặng. Mở hộp thư nào!",
          "keys": [
            "bảy chặng"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "text": "① Thứ Hai 9:00 · Tiêu đề",
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
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "e-mail"
              ]
            },
            "at": "l1:partner",
            "caption": "Thứ Hai · 9:00 · thư xin bảng giá",
            "icon": "e-mail"
          },
          {
            "id": "c-hello",
            "t": "text",
            "text": "Tiêu đề: “Hello”",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "l2:hello",
            "color": "coral"
          },
          {
            "id": "c-send",
            "t": "text",
            "text": "“Send me the price list.”",
            "x": 3996,
            "y": 250,
            "size": 46,
            "at": "l2:send",
            "color": "coral"
          },
          {
            "id": "c-fyi",
            "t": "text",
            "text": "Hi · Question · FYI → ?",
            "x": 3996,
            "y": 330,
            "size": 46,
            "at": "l4:question",
            "color": "muted",
            "hl": [
              {
                "text": "?",
                "at": "l4:nothing"
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
          "say": "Stop one: Monday, nine a.m. Lan asks a foreign partner for the new price list.",
          "sub": "Chặng một: chín giờ sáng thứ Hai. Lan xin đối tác nước ngoài bảng giá mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Subject: Hello. First line: Send me the price list. Done!",
          "sub": "Tiêu đề: “Hello”. Câu đầu: “Send me the price list.” Xong!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hello what? The subject is the first thing they read.",
          "sub": "“Hello” gì cơ? Tiêu đề là thứ người nhận đọc đầu tiên.",
          "keys": [
            "đọc đầu tiên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One word subjects like Question or FYI tell them nothing.",
          "sub": "Tiêu đề một chữ như “Question”, “FYI” chẳng cho người đọc biết gì.",
          "keys": [
            "chẳng cho người đọc biết gì"
          ]
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s05",
      "module": "BRK-04",
      "data": {
        "title": "Thư xin bảng giá của Lan",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Hello — Send me the price list.",
        "right": "Request for the updated price list — Dear Ms Taylor, I am writing to ask…",
        "wrongIllus": "envelope",
        "rightIllus": "incoming-envelope"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: Hello.",
          "sub": "Trước: “Hello”."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: Request for the updated price list. I am writing to ask for it.",
          "sub": "Sau: “Request for the updated price list.” Kính gửi chị Taylor, tôi viết thư để xin bảng giá mới.",
          "keys": [
            "tôi viết thư để"
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
            "fit": "C",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "c-why",
            "t": "text",
            "text": "Câu đầu: I am writing to…",
            "x": 3996,
            "y": 420,
            "size": 50,
            "at": "l1:reason",
            "color": "accent",
            "hl": [
              {
                "text": "I am writing to…",
                "at": "l2:writing"
              }
            ]
          },
          {
            "id": "c-ex",
            "t": "text",
            "text": "…ask for further details about…",
            "x": 4016,
            "y": 495,
            "size": 40,
            "at": "l2:further",
            "color": "muted"
          },
          {
            "id": "c-june",
            "t": "text",
            "text": "Question about the June training schedule",
            "x": 4816,
            "y": 685,
            "size": 38,
            "at": "l3:june"
          },
          {
            "id": "c-hx",
            "t": "strike",
            "over": "c-hello",
            "at": "l3:main point"
          },
          {
            "id": "c-sx",
            "t": "strike",
            "over": "c-send",
            "at": "l5:first line"
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "Tiêu đề: nói việc",
            "x": 3996,
            "y": 580,
            "size": 54,
            "at": "l5:subject",
            "color": "accent",
            "hl": [
              {
                "text": "nói việc",
                "at": "l5:job"
              }
            ]
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "Câu đầu: nói lý do",
            "x": 3996,
            "y": 660,
            "size": 54,
            "at": "l5:first line",
            "color": "accent",
            "hl": [
              {
                "text": "nói lý do",
                "at": "l5:reason"
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
          "say": "The key line is the reason, right after the greeting.",
          "sub": "Câu quan trọng nhất: câu nêu lý do, ngay sau lời chào.",
          "keys": [
            "câu nêu lý do"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The easiest pattern: I am writing to ask for further details.",
          "sub": "Mẫu dễ nhất: “I am writing to…”, như “I am writing to ask for further details…”",
          "keys": [
            "I am writing to…"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And a subject with the main point: Question about the June training schedule.",
          "sub": "Còn tiêu đề nêu ý chính (Đại học North Carolina): “Question about the June training schedule”."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "No more bossy tone. The subject says the job, the first line says the reason.",
          "sub": "Hết giọng ra lệnh. Rút ra: tiêu đề nói việc, câu đầu nói lý do.",
          "keys": [
            "tiêu đề nói việc, câu đầu nói lý do"
          ]
        }
      ],
      "ref": "p3,p4,p5,p6"
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
            "text": "② Thứ Ba 10:00 · Giọng",
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
              "set": "office",
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
                "handshake"
              ]
            },
            "at": "l1:dũng",
            "caption": "Thứ Ba · 10:00 · khách chưa từng gặp",
            "icon": "handshake"
          },
          {
            "id": "d-msg",
            "t": "text",
            "text": "“Hi there! Can u…? Cheers!”",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l3:hi there",
            "color": "coral"
          },
          {
            "id": "d-f",
            "t": "text",
            "text": "Trang trọng: khách, đơn xin việc, sếp",
            "x": 5964,
            "y": 260,
            "size": 40,
            "at": "l5:formal",
            "hl": [
              {
                "text": "Trang trọng",
                "at": "l5:formal"
              }
            ]
          },
          {
            "id": "d-i",
            "t": "text",
            "text": "Thân mật: người đã quen",
            "x": 5964,
            "y": 330,
            "size": 44,
            "at": "l6:informal",
            "hl": [
              {
                "text": "Thân mật",
                "at": "l6:informal"
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
          "say": "Stop two: Tuesday. And this is Dũng, from sales, fastest thumbs in the office.",
          "sub": "Chặng hai: thứ Ba. Còn đây là Dũng, phòng kinh doanh, ngón tay nhanh nhất văn phòng.",
          "keys": [
            "ngón tay nhanh nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He needs a signed contract from a client he has never met.",
          "sub": "Dũng cần xin hợp đồng đã ký từ một khách chưa gặp bao giờ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Easy! Hi there! Can u send the file? Cheers!",
          "sub": "Dễ ợt! “Hi there! Can u send the file? Cheers!”",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "British Council splits email tone in two: formal and informal.",
          "sub": "British Council chia giọng email làm hai: trang trọng và thân mật.",
          "keys": [
            "trang trọng",
            "thân mật"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Formal for clients, job applications, managers, people you don't know.",
          "sub": "Trang trọng với khách hàng, đơn xin việc, quản lý, người chưa quen."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Informal for people you know. Choose before the first line.",
          "sub": "Thân mật khi đã quen, như chúc sinh nhật đồng nghiệp. Chọn giọng trước khi viết câu đầu.",
          "keys": [
            "Chọn giọng trước"
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
      "ref": "p7"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thư cho khách mới",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Viết cho khách lạ như nhắn đồng nghiệp",
          "why": "Khách vẫn gửi tệp nhưng trả lời cụt lủn; Dũng không chắc mình có bị coi là thiếu chuyên nghiệp.",
          "rule": "Chưa quen thì trang trọng"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Hi there! Can u send the file? Cheers! Send.",
          "sub": "“Hi there! Can u send the file? Cheers!” Gửi.",
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
          "say": "A curt reply. Unprofessional?",
          "sub": "Khách trả lời cụt lủn. Dũng có bị coi là thiếu chuyên nghiệp?",
          "keys": [
            "trả lời cụt lủn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Làm lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Dear Mr Piper, I am writing to ask for the signed contract.",
          "sub": "“Dear Mr Piper, I am writing to ask for the signed contract.”",
          "phase": "redo",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "I would be very grateful if you could send it this week.",
          "sub": "“I would be very grateful if you could send it this week.” (Tôi sẽ rất biết ơn nếu anh gửi trong tuần này.)",
          "phase": "redo",
          "face": "happy",
          "pose": "phone"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-tie",
            "t": "illus",
            "name": "necktie",
            "x": 5964,
            "y": 410,
            "size": 70,
            "at": "l2:formal"
          },
          {
            "id": "d-ft",
            "t": "text",
            "text": "Dear Mr Piper · Yours sincerely",
            "x": 6054,
            "y": 420,
            "size": 40,
            "at": "l2:formal+200"
          },
          {
            "id": "d-flip",
            "t": "illus",
            "name": "thong-sandal",
            "x": 5964,
            "y": 500,
            "size": 70,
            "at": "l2:informal"
          },
          {
            "id": "d-it",
            "t": "text",
            "text": "Hi Tim · Cheers",
            "x": 6054,
            "y": 510,
            "size": 44,
            "at": "l2:informal+200"
          },
          {
            "id": "d-both",
            "t": "text",
            "text": "Cả hai: Dear Tim · Regards",
            "x": 5964,
            "y": 595,
            "size": 44,
            "at": "l3:both",
            "hl": [
              {
                "text": "Cả hai",
                "at": "l3:both"
              }
            ]
          },
          {
            "id": "d-key",
            "t": "text",
            "text": "Chưa quen → trang trọng",
            "x": 6784,
            "y": 685,
            "size": 46,
            "at": "l5:strangers",
            "color": "accent",
            "hl": [
              {
                "text": "trang trọng",
                "at": "l5:formal"
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
          "say": "This time, a full and polite reply.",
          "sub": "Lần này khách trả lời đầy đủ, lịch sự lại.",
          "keys": [
            "trả lời đầy đủ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Formal: Dear Mr Piper, Yours sincerely. Informal: Hi Tim, Cheers.",
          "sub": "Trang trọng: “Dear Mr Piper,” và “Yours sincerely,”. Thân mật: “Hi Tim,” và “Cheers,”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For both: Dear Tim, Regards, With best wishes.",
          "sub": "Dùng được cả hai: “Dear Tim,”, “Regards,”, “With best wishes,”.",
          "keys": [
            "Dùng được cả hai"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Cheers is flip flops, Yours sincerely a suit. Not sure? Wear the suit.",
          "sub": "“Cheers” là dép lê, “Yours sincerely” là com-lê. Phân vân? Cứ mặc com-lê.",
          "keys": [
            "Cứ mặc com-lê"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "LearnEnglish says formal shows more respect. Strangers formal, friends informal.",
          "sub": "LearnEnglish: trang trọng thường tỏ ra tôn trọng hơn. Chưa quen thì trang trọng, quen rồi mới thân mật.",
          "keys": [
            "Chưa quen thì trang trọng"
          ]
        }
      ],
      "ref": "p8,p10"
    },
    {
      "id": "s10",
      "module": "BRK-07",
      "data": {
        "question": "Chưa ai trả lời. Ngón tay Lan gõ phím mỗi lúc một mạnh…",
        "illus": "face-with-steam-from-nose"
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
          "say": "No reply yet. Lan types harder and harder.",
          "sub": "Chưa ai trả lời. Ngón tay Lan gõ phím mỗi lúc một mạnh.",
          "keys": [
            "mỗi lúc một mạnh"
          ]
        }
      ],
      "ref": "p17"
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
          },
          {
            "at": "l3",
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
            "text": "③ Thứ Ba 15:00 · Nhắc việc",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "stern"
                }
              ],
              "props": [
                "globe-showing-asia-australia"
              ]
            },
            "at": "l1:singapore",
            "caption": "Thứ Ba · 15:00 · chờ văn phòng Singapore",
            "icon": "globe-showing-asia-australia"
          },
          {
            "id": "e-caps",
            "t": "text",
            "text": "VIẾT HOA CẢ CÂU",
            "x": 7932,
            "y": 170,
            "size": 60,
            "at": "l3:why",
            "color": "coral"
          },
          {
            "id": "e-trip",
            "t": "text",
            "text": "Họ vừa đi công tác về",
            "x": 7932,
            "y": 260,
            "size": 48,
            "at": "l4:trip"
          },
          {
            "id": "e-cold",
            "t": "text",
            "text": "→ từ đó, thư nào cũng lạnh",
            "x": 7932,
            "y": 330,
            "size": 44,
            "at": "l5:chilly",
            "color": "muted",
            "hl": [
              {
                "text": "lạnh",
                "at": "l5:chilly"
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
          "say": "Stop three: Tuesday afternoon. On Monday, Lan asked Singapore for sales figures.",
          "sub": "Chặng ba: chiều thứ Ba. Sáng thứ Hai, Lan đã xin số liệu bán hàng từ văn phòng Singapore."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No reply yet. So she types...",
          "sub": "Chưa thấy trả lời. Thế là Lan gõ..."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "WHY HAVE YOU NOT REPLIED? I NEED THE DATA TODAY.",
          "sub": "“SAO CHƯA TRẢ LỜI? TÔI CẦN SỐ LIỆU HÔM NAY.”",
          "face": "stern",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The data comes at once, with a short line: they just got back from a trip.",
          "sub": "Số liệu đến ngay, kèm một câu ngắn: họ vừa đi công tác về.",
          "keys": [
            "vừa đi công tác về"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Since then, every email between them feels chilly.",
          "sub": "Từ đó, thư qua lại giữa hai bên lúc nào cũng khá lạnh.",
          "keys": [
            "khá lạnh"
          ]
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s12",
      "module": "BRK-03",
      "data": {
        "value": 3,
        "prefix": "2–",
        "suffix": " ngày",
        "label": "làm việc: chờ đồng nghiệp trước khi nhắc",
        "illus": "hourglass-done"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "How long before a reminder?",
          "sub": "Vậy nên chờ bao lâu rồi mới nhắc?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Talaera says: two to three working days for colleagues.",
          "sub": "Với đồng nghiệp, Talaera gợi ý hai đến ba ngày làm việc.",
          "keys": [
            "hai đến ba ngày làm việc"
          ]
        }
      ],
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
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-d",
            "t": "text",
            "text": "Đồng nghiệp: 2–3 ngày · khách: 3–5",
            "x": 7932,
            "y": 410,
            "size": 40,
            "at": "l2:clients",
            "hl": [
              {
                "text": "3–5",
                "at": "l2:five"
              }
            ]
          },
          {
            "id": "e-good",
            "t": "text",
            "text": "Giả định thiện ý: họ bận",
            "x": 7932,
            "y": 475,
            "size": 46,
            "at": "l3:good faith",
            "color": "accent",
            "hl": [
              {
                "text": "thiện ý",
                "at": "l3:good faith"
              }
            ]
          },
          {
            "id": "e-fu",
            "t": "text",
            "text": "I wanted to follow up on…",
            "x": 7932,
            "y": 545,
            "size": 46,
            "at": "l4:follow up",
            "color": "accent"
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "I haven't heard back from you.",
            "x": 7932,
            "y": 615,
            "size": 40,
            "at": "l5:heard",
            "color": "muted"
          },
          {
            "id": "e-nox",
            "t": "strike",
            "over": "e-no",
            "at": "l5:capitals"
          },
          {
            "id": "e-capx",
            "t": "strike",
            "over": "e-caps",
            "at": "l5:capitals+400"
          },
          {
            "id": "e-key",
            "t": "text",
            "text": "Nhắc nhẹ được việc, gắt mất người",
            "x": 8752,
            "y": 685,
            "size": 42,
            "at": "l6:gentle",
            "color": "accent",
            "hl": [
              {
                "text": "mất người",
                "at": "l6:loses"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: UNC Charlotte; Talaera (trang dạy tiếng Anh công sở)",
            "x": 7932,
            "y": 722,
            "size": 26,
            "at": "l2",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "UNC Charlotte: expect a few days. Talaera: three to five with clients.",
          "sub": "Đại học North Carolina tại Charlotte: cứ giả định người ta cần vài ngày. Talaera: với khách, ba đến năm ngày."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then assume good faith. They're busy, not ignoring you.",
          "sub": "Khi nhắc, giả định thiện ý: họ bận, chứ không cố tình lờ đi.",
          "keys": [
            "giả định thiện ý"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Write: I wanted to follow up on my previous email.",
          "sub": "Viết: “I wanted to follow up on my previous email about…” (Tôi muốn hỏi lại về email trước…)."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Softer than: I haven't heard back from you. And no capitals.",
          "sub": "Nhẹ hơn hẳn “I haven't heard back from you.” Và đừng viết hoa cả câu."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A gentle reminder gets the job done. A harsh one loses the person.",
          "sub": "Nhắc nhẹ thì được việc, nhắc gắt thì mất người.",
          "keys": [
            "Nhắc nhẹ thì được việc"
          ]
        }
      ],
      "ref": "p15,p16,p18"
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
            "at": "l4:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Tư 9:00 · Hẹn lịch",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:call"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-calendar"
              ]
            },
            "at": "l1:melbourne",
            "caption": "Thứ Tư · 9:00 · hẹn gọi với chị Sam",
            "icon": "spiral-calendar"
          },
          {
            "id": "f-q1",
            "t": "text",
            "text": "Are you free next Tuesday afternoon?",
            "x": 60,
            "y": 1260,
            "size": 40,
            "at": "l2:free"
          },
          {
            "id": "f-q2",
            "t": "text",
            "text": "When would be convenient for you?",
            "x": 60,
            "y": 1330,
            "size": 40,
            "at": "l2:convenient",
            "hl": [
              {
                "text": "convenient",
                "at": "l2:convenient"
              }
            ]
          },
          {
            "id": "f-q3",
            "t": "text",
            "text": "Could you please let me know?",
            "x": 60,
            "y": 1400,
            "size": 42,
            "at": "l2:convenient+900",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: Wednesday. Lan needs a call with her partner, Sam Taylor, in Melbourne.",
          "sub": "Chặng bốn: thứ Tư. Lan cần hẹn gọi với đối tác, chị Sam Taylor ở Melbourne.",
          "keys": [
            "Sam Taylor"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ready made questions: Are you free next Tuesday afternoon? When would be convenient? Please let me know.",
          "sub": "Câu có sẵn của British Council: “Are you free next Tuesday afternoon?”, “When would be convenient for you?”, “Could you please let me know?”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Tuesday afternoon works. But whose afternoon, Lan? Yours or mine?",
          "sub": "Chiều thứ Ba được. Nhưng chiều của ai, Lan? Của em hay của chị?",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p11"
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
            "id": "f-on",
            "t": "text",
            "text": "on Monday",
            "x": 60,
            "y": 1490,
            "size": 56,
            "at": "l1:monday",
            "hl": [
              {
                "text": "on",
                "at": "l1:on"
              }
            ]
          },
          {
            "id": "f-in",
            "t": "text",
            "text": "in October",
            "x": 360,
            "y": 1490,
            "size": 56,
            "at": "l2:october",
            "hl": [
              {
                "text": "in",
                "at": "l2:in"
              }
            ]
          },
          {
            "id": "f-at",
            "t": "text",
            "text": "at 3pm",
            "x": 60,
            "y": 1570,
            "size": 56,
            "at": "l2:three",
            "hl": [
              {
                "text": "at",
                "at": "l2:at"
              }
            ]
          },
          {
            "id": "f-tz",
            "t": "text",
            "text": "Ngày · giờ · múi giờ",
            "x": 60,
            "y": 1670,
            "size": 56,
            "at": "l3:time zone",
            "color": "accent",
            "hl": [
              {
                "text": "múi giờ",
                "at": "l3:time zone"
              }
            ]
          },
          {
            "id": "f-why",
            "t": "text",
            "text": "Nhầm múi giờ → họp phải dời",
            "x": 880,
            "y": 1775,
            "size": 44,
            "at": "l4:wrong",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Mind the little words. On with days: on Monday.",
          "sub": "Để ý giới từ chỉ thời gian. “On” đi với thứ: “on Monday”.",
          "keys": [
            "“On” đi với thứ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In with months and years: in October. At with clock times: at three p.m.",
          "sub": "“In” đi với tháng, năm: “in October”. “At” đi với giờ: “at 3pm”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Working across countries? Write the day, the time, and the time zone.",
          "sub": "Làm việc với người nước khác? Ghi rõ ngày, giờ và múi giờ.",
          "keys": [
            "ngày, giờ và múi giờ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Wrong time zones often get meetings moved. Same number, two different suns.",
          "sub": "Nhầm múi giờ là lý do hay gặp khiến cuộc họp phải dời. Cùng một con số, hai mặt trời khác nhau.",
          "keys": [
            "hai mặt trời khác nhau"
          ]
        }
      ],
      "ref": "p12"
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
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Tư 14:00 · Nhờ gửi",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:wednesday"
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
                  "id": "lan",
                  "side": "left",
                  "pose": "phone",
                  "face": "thinking"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l1:report",
            "caption": "Thứ Tư · 14:00 · xin báo cáo từ khách",
            "icon": "page-facing-up"
          },
          {
            "id": "g-plz",
            "t": "text",
            "text": "Please send me the report.",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l2:please",
            "color": "coral"
          },
          {
            "id": "g-plzx",
            "t": "strike",
            "over": "g-plz",
            "at": "l4:order"
          },
          {
            "id": "g-ap",
            "t": "text",
            "text": "I would appreciate it if you could…",
            "x": 2028,
            "y": 1340,
            "size": 38,
            "at": "l4:appreciate",
            "color": "accent",
            "hl": [
              {
                "text": "appreciate",
                "at": "l4:appreciate"
              }
            ]
          },
          {
            "id": "g-gr",
            "t": "text",
            "text": "I would be very grateful…",
            "x": 2028,
            "y": 1410,
            "size": 40,
            "at": "l5:grateful",
            "color": "accent"
          },
          {
            "id": "g-can",
            "t": "text",
            "text": "Đã quen: Can you…, please?",
            "x": 2028,
            "y": 1480,
            "size": 42,
            "at": "l5:colleagues"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: Wednesday afternoon. Lan needs a report from a client.",
          "sub": "Chặng năm: chiều thứ Tư. Lan cần xin báo cáo từ một khách hàng ít liên lạc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Please send me the report. Correct grammar, right?",
          "sub": "“Please send me the report.” Đúng ngữ pháp mà, nhỉ?",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Thảo, Lan's senior, with an email frame taped to her screen.",
          "sub": "Còn đây là Thảo, chị khoá trên của Lan, dán sẵn khung email cạnh màn hình.",
          "keys": [
            "khung email"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Correct, but it sounds like an order. Try: I would appreciate it if you could send me…",
          "sub": "Đúng, nhưng nghe như ra lệnh. Thử: “I would appreciate it if you could send me…”",
          "pose": "explain",
          "keys": [
            "nghe như ra lệnh"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Or: I would be very grateful if you could. With colleagues you know: Can you…, please?",
          "sub": "Hoặc: “I would be very grateful if you could…”. Với đồng nghiệp đã quen: “Can you…, please?” cũng ổn."
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p13"
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
            "id": "g-do",
            "t": "text",
            "text": "Where do you want to meet?",
            "x": 2028,
            "y": 1570,
            "size": 46,
            "at": "l2:where",
            "color": "accent",
            "hl": [
              {
                "text": "do",
                "at": "l2:do"
              }
            ]
          },
          {
            "id": "g-dont",
            "t": "text",
            "text": "Where you want to meet?",
            "x": 2028,
            "y": 1645,
            "size": 42,
            "at": "l2:not",
            "color": "muted"
          },
          {
            "id": "g-dontx",
            "t": "strike",
            "over": "g-dont",
            "at": "l2:not+600"
          },
          {
            "id": "g-bul",
            "t": "text",
            "text": "Nhiều câu hỏi → mỗi câu một dòng",
            "x": 2848,
            "y": 1775,
            "size": 40,
            "at": "l3:bullet",
            "hl": [
              {
                "text": "mỗi câu một dòng",
                "at": "l3:one question"
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
          "say": "One more trap from British Council: a question needs a helper verb.",
          "sub": "Thêm một bẫy, bài “Enquiries” của British Council: câu hỏi phải có trợ động từ.",
          "keys": [
            "trợ động từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Where do you want to meet? Not: Where you want to meet?",
          "sub": "Viết “Where do you want to meet?”, không viết “Where you want to meet?”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Several questions? One question per sentence, as bullet points.",
          "sub": "Hỏi nhiều điều? Mỗi điều một câu, gạch đầu dòng cho dễ thấy.",
          "keys": [
            "gạch đầu dòng"
          ]
        }
      ],
      "ref": "p14"
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
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Năm 10:00 · Nhiều ý",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "package",
                "clipboard"
              ]
            },
            "at": "l1:warehouse",
            "caption": "Thứ Năm · 10:00 · sau chuyến khảo sát kho",
            "icon": "clipboard"
          },
          {
            "id": "h-blob",
            "t": "text",
            "text": "Gộp hết một đoạn to?",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l2:paragraph",
            "color": "coral"
          },
          {
            "id": "h-par",
            "t": "text",
            "text": "Đoạn 2–3 câu · ý mới, đoạn mới",
            "x": 3996,
            "y": 1345,
            "size": 42,
            "at": "l3:two or three",
            "hl": [
              {
                "text": "2–3 câu",
                "at": "l3:two or three"
              }
            ]
          },
          {
            "id": "h-bul",
            "t": "text",
            "text": "Chi tiết quan trọng: gạch đầu dòng",
            "x": 3996,
            "y": 1420,
            "size": 40,
            "at": "l4:bullet"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: Thursday. After a warehouse visit, Dũng must update his Australian boss on three things.",
          "sub": "Chặng sáu: thứ Năm. Sau chuyến khảo sát kho, Dũng phải báo sếp người Úc ba việc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Delivery, shipping costs, an approval... one big paragraph, right?",
          "sub": "Lịch giao, phí vận chuyển, việc cần duyệt... gộp một đoạn to nhé?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "British Council says: paragraphs of two or three sentences. New topic, new paragraph.",
          "sub": "British Council khuyên: mỗi đoạn hai ba câu. Sang chủ đề mới thì xuống đoạn mới.",
          "keys": [
            "mỗi đoạn hai ba câu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "UNC adds: bullet the key details.",
          "sub": "Đại học North Carolina thêm: gạch đầu dòng chi tiết quan trọng cho dễ nhặt."
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
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-blobx",
            "t": "strike",
            "over": "h-blob",
            "at": "l1:step one"
          },
          {
            "id": "h-s1",
            "t": "text",
            "text": "① I am writing to update you…",
            "x": 3996,
            "y": 1510,
            "size": 40,
            "at": "l1:writing"
          },
          {
            "id": "h-s2",
            "t": "text",
            "text": "② • lịch giao • vận chuyển • duyệt",
            "x": 3996,
            "y": 1580,
            "size": 40,
            "at": "l2:delivery"
          },
          {
            "id": "h-s3",
            "t": "text",
            "text": "③ Let me know by Friday?",
            "x": 3996,
            "y": 1650,
            "size": 42,
            "at": "l3:friday",
            "hl": [
              {
                "text": "by Friday",
                "at": "l3:friday"
              }
            ]
          },
          {
            "id": "h-key",
            "t": "text",
            "text": "Một ý một dòng, khỏi dò",
            "x": 4816,
            "y": 1775,
            "size": 48,
            "at": "l4:one point",
            "color": "accent",
            "hl": [
              {
                "text": "khỏi dò",
                "at": "l4:hunting"
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
          "say": "Step one, the reason: I am writing to update you on the site visit.",
          "sub": "Bước một, câu nêu lý do: “I am writing to update you on the site visit.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Step two, one bullet each: delivery, shipping costs, approval.",
          "sub": "Bước hai, mỗi việc một gạch đầu dòng: lịch giao hàng, chi phí vận chuyển, việc cần duyệt."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Step three: Could you let me know by Friday if you approve the new schedule?",
          "sub": "Bước ba, câu kết: “Could you let me know by Friday if you approve the new schedule?”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One point per line, and your reader stops hunting.",
          "sub": "Một ý một dòng, người đọc khỏi dò.",
          "keys": [
            "Một ý một dòng"
          ]
        }
      ],
      "ref": "p20,p21"
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
            "at": "l3",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Sáu 16:00 · Soát lỗi",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
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
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "magnifying-glass-tilted-left"
              ]
            },
            "at": "l1:important",
            "caption": "Thứ Sáu · 16:00 · đọc lại trước khi gửi",
            "icon": "magnifying-glass-tilted-left"
          },
          {
            "id": "i-e1",
            "t": "text",
            "text": "hte → the",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l2:hte",
            "color": "coral"
          },
          {
            "id": "i-e2",
            "t": "text",
            "text": "start → starts",
            "x": 6264,
            "y": 1260,
            "size": 50,
            "at": "l2:starts",
            "color": "coral"
          },
          {
            "id": "i-e3",
            "t": "text",
            "text": "monday → Monday",
            "x": 5964,
            "y": 1335,
            "size": 50,
            "at": "l2:monday",
            "color": "coral"
          },
          {
            "id": "i-warn",
            "t": "text",
            "text": "Lỗi chữ → “làm việc cũng sai?”",
            "x": 5964,
            "y": 1420,
            "size": 44,
            "at": "l3:mistakes",
            "hl": [
              {
                "text": "làm việc cũng sai",
                "at": "l3:work"
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
          "say": "Stop seven: Friday. Lan's most important email of the week. Thảo reads it first.",
          "sub": "Chặng bảy: chiều thứ Sáu. Thư quan trọng nhất tuần của Lan. Thảo đọc giúp trước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Hte should be the. The training starts, with an s. And Monday needs a capital M.",
          "sub": "“Hte” phải là “the”. “The training starts”, có “s”. Còn “Monday” phải viết hoa.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "British Council warns: email mistakes suggest mistakes in your work too.",
          "sub": "British Council nhắc: email có lỗi dễ khiến người đọc nghĩ bạn làm việc cũng hay sai.",
          "keys": [
            "làm việc cũng hay sai"
          ]
        }
      ],
      "ref": "p22"
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
            "at": "l4",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
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
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1510,
            "w": 40,
            "h": 40,
            "at": "l1:to",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1494,
            "size": 50,
            "at": "l1:to+500",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Đúng tên ở ô To",
            "x": 6026,
            "y": 1502,
            "size": 38,
            "at": "l1:to+150"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1566,
            "w": 40,
            "h": 40,
            "at": "l1:reply all",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1550,
            "size": 50,
            "at": "l1:reply all+500",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Reply all: cần thật?",
            "x": 6026,
            "y": 1558,
            "size": 38,
            "at": "l1:reply all+150"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1622,
            "w": 40,
            "h": 40,
            "at": "l2:attachment",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1606,
            "size": 50,
            "at": "l2:attachment+500",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Đã đính kèm tệp",
            "x": 6026,
            "y": 1614,
            "size": 38,
            "at": "l2:attachment+150"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1678,
            "w": 40,
            "h": 40,
            "at": "l2:capitals",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1662,
            "size": 50,
            "at": "l2:capitals+500",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Không viết hoa cả câu",
            "x": 6026,
            "y": 1670,
            "size": 38,
            "at": "l2:capitals+150"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1734,
            "w": 40,
            "h": 40,
            "at": "l3:short",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1718,
            "size": 50,
            "at": "l3:short+500",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Ngắn mà vẫn lịch sự",
            "x": 6026,
            "y": 1726,
            "size": 38,
            "at": "l3:short+150"
          },
          {
            "id": "i-c5",
            "t": "box",
            "x": 5964,
            "y": 1790,
            "w": 40,
            "h": 40,
            "at": "l4:colleague",
            "stroke": 5
          },
          {
            "id": "i-k5",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1774,
            "size": 50,
            "at": "l4:colleague+500",
            "color": "accent"
          },
          {
            "id": "i-l5",
            "t": "text",
            "text": "Thư quan trọng: nhờ đọc lại",
            "x": 6026,
            "y": 1782,
            "size": 38,
            "at": "l4:colleague+150"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before Send: the right name in To? Really need Reply all?",
          "sub": "Trước khi gửi: đúng tên ở ô To? Có thật cần “Reply all”?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Attachment there? No capitals: that's shouting.",
          "sub": "Đã đính kèm tệp chưa? Không viết hoa cả câu: thế là đang hét.",
          "keys": [
            "đang hét"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Short, but polite.",
          "sub": "Ngắn mà vẫn lịch sự, quá cụt nghe thô."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Important email? Ask a colleague to read it. Like now!",
          "sub": "Thư quan trọng thì nhờ đồng nghiệp đọc lại. Như lúc này đây!",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "ref": "p23"
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
            "text": "Thứ Hai sau · 8:00",
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
              "set": "online",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "e-mail",
                "sunrise"
              ]
            },
            "at": "l1:monday",
            "caption": "Thứ Hai sau · 8:00 · thư cho chị Sam",
            "icon": "e-mail"
          },
          {
            "id": "j-10",
            "t": "text",
            "text": "3 câu · 10 phút",
            "x": 7932,
            "y": 1255,
            "size": 80,
            "at": "l2:ten",
            "color": "accent",
            "hl": [
              {
                "text": "10 phút",
                "at": "l2:ten minutes"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Lời chào cao hơn mâm cỗ”",
            "x": 7932,
            "y": 1390,
            "size": 50,
            "at": "l4:greeting",
            "hl": [
              {
                "text": "Lời chào",
                "at": "l4:greeting"
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
          "say": "Monday again, eight a.m. Same partner, same three sentences.",
          "sub": "Lại thứ Hai, tám giờ sáng. Vẫn đối tác ấy, vẫn ba câu ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Clear subject. Dear Ms Taylor. I am writing to... Regards. Ten minutes!",
          "sub": "Tiêu đề rõ việc. “Dear Ms Taylor.” “I am writing to…” “Regards.” Mười phút!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Thanks, Lan! Clear as always.",
          "sub": "Cảm ơn Lan! Rõ ràng như mọi khi.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A greeting is worth more than a feast. Lan now serves both: greeting and subject.",
          "sub": "“Lời chào cao hơn mâm cỗ.” Giờ Lan dọn đủ cả lời chào lẫn dòng tiêu đề.",
          "keys": [
            "dọn đủ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "to": "l1",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "outro,p3"
    },
    {
      "id": "s23",
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
            "id": "j-r1",
            "t": "text",
            "text": "① Mở đầu · kết thúc",
            "x": 7932,
            "y": 1510,
            "size": 46,
            "at": "l1:starting",
            "hl": [
              {
                "text": "Mở đầu",
                "at": "l1:frame"
              }
            ]
          },
          {
            "id": "j-r2",
            "t": "text",
            "text": "② Hẹn lịch · hỏi · nhắc việc",
            "x": 7932,
            "y": 1585,
            "size": 46,
            "at": "l2:meetings"
          },
          {
            "id": "j-r3",
            "t": "text",
            "text": "③ Sắp ý · soát lỗi",
            "x": 7932,
            "y": 1660,
            "size": 46,
            "at": "l3:organising"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next in this series: starting and finishing, the frame for every email.",
          "sub": "Chuỗi bài đi theo công việc. Trước hết: mở đầu và kết thúc, khung cho mọi thư.",
          "keys": [
            "khung cho mọi thư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then meetings, questions, and reminders.",
          "sub": "Rồi ba loại thư hay viết nhất: hẹn lịch, hỏi thông tin, nhắc việc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then organising and proofreading. Or jump to what you need.",
          "sub": "Cuối cùng: sắp ý và soát lỗi. Đọc lần lượt, hoặc nhảy đến bài bạn cần."
        }
      ],
      "ref": "p24"
    },
    {
      "id": "s24",
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
            "at": "l1:subject",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:strangers",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:remind",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:check",
            "fit": "I",
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
            "x": 4696,
            "y": 590,
            "at": "l1:subject+900"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6704,
            "y": 600,
            "at": "l2:strangers+900"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 8672,
            "y": 480,
            "at": "l3:remind+900"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 6704,
            "y": 1510,
            "at": "l3:check+900"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "c-k1",
              "c-k2"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l1:job+300"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Nhân vật trong bài là minh hoạ.",
            "x": 7932,
            "y": 1810,
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
          "say": "So: five parts. The subject says the job, the first line says the reason.",
          "sub": "Tóm lại: năm phần. Tiêu đề nói việc, câu đầu nói lý do.",
          "keys": [
            "Tiêu đề nói việc, câu đầu nói lý do"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Strangers formal, friends informal.",
          "sub": "Chưa quen thì trang trọng, quen rồi mới thân mật."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Remind gently. And check before you send.",
          "sub": "Nhắc nhẹ nhàng. Và soát trước khi gửi.",
          "keys": [
            "soát trước khi gửi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Try now: rewrite the subject of your next email, and add I am writing to.",
          "sub": "Làm ngay: mở email sắp gửi, viết lại tiêu đề cho rõ việc, thêm “I am writing to…” sau lời chào.",
          "keys": [
            "viết lại tiêu đề"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p6,p10,p18"
    },
    {
      "id": "s25",
      "module": "QUIZ-01",
      "data": {
        "q": "You need details about the June training, which subject line works best?",
        "options": [
          "Urgent, because every email should look important to the person who reads it",
          "Hello, because a friendly word makes the reader open the email faster",
          "Question about the June training schedule, because it names the topic clearly"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "incoming-envelope",
        "why": "Tiêu đề “Question about the June training schedule” nói rõ chủ đề. Người nhận biết ngay thư về việc gì và dễ tìm lại sau."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You need details about the June training, which subject line works best?",
          "sub": "Bạn cần chi tiết về khoá đào tạo tháng Sáu, tiêu đề nào tốt nhất?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Question about the June training schedule, because it names the topic clearly.",
          "sub": "Tiêu đề nêu đúng việc: câu hỏi về lịch đào tạo tháng Sáu."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[5]"
    },
    {
      "id": "s26",
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
          "say": "Rewrite one subject line today. Then try the forty questions below.",
          "sub": "Hôm nay viết lại một dòng tiêu đề. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi en-email-office-workers, bài tổng) dựng theo hạt nhân (#136) + biến thể #144: Đét trái + bảng 10 ô theo MỘT TUẦN ĐẦU Lan phụ trách thư cho đối tác nước ngoài (Thứ Hai 8:00 ba câu mất một tiếng → 9:00 tiêu đề “Hello” → Thứ Ba 10:00 Dũng “Hi there… Cheers” cho khách mới, “Khoan đã!” → Thứ Ba 15:00 Lan viết hoa cả câu cho văn phòng Singapore → Thứ Tư 9:00 hẹn gọi với Sam → 14:00 Thảo sửa “Please send me…” → Thứ Năm 10:00 Dũng báo sếp người Úc ba việc → Thứ Sáu 16:00 soát lỗi → Thứ Hai sau 8:00 mười phút, khép vòng). HOOK-24 neo “5 phần”. Nhân vật: Lan (Lan p5, p17), Dũng (Dũng p9, p20), Thảo (người góp ý p13, p23), Sam (chị Taylor p5) — w145/_series/en-email-office-workers.md. Ngắt nhịp: BRK-04 trước–sau (p5), BRK-07 rehook (trước p17), BRK-03 2–3 ngày (p15, Talaera). Tục ngữ mở/khép: “Lời chào cao hơn mâm cỗ”. Câu đố questions[5].",
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
