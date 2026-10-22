// ielts-speaking-part-1--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-speaking-part-1--w01",
  "hook": "HOOK-22",
  "unit": {
    "audience": "ielts-speaking-takers",
    "slug": "ielts-speaking-part-1",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Part 1: trả lời câu hỏi quen thuộc sao cho không quá ngắn?",
    "series": "IELTS Speaking tự nhiên — ba phần thi và bốn tiêu chí chấm cho thí sinh band 5.5–7"
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
            "x": 880,
            "y": 110,
            "w": 800,
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
                "mobile-phone",
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
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai 21:00 · tự ghi âm",
            "icon": "mobile-phone"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "“…because —”",
            "x": 60,
            "y": 140,
            "size": 96,
            "at": "l3:Because",
            "color": "accent",
            "hl": [
              {
                "text": "because",
                "at": "l3:Because"
              }
            ]
          },
          {
            "id": "a-h",
            "t": "text",
            "text": "Giữ câu ấy lại đã",
            "x": 70,
            "y": 300,
            "size": 50,
            "at": "l3:Hold",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday, nine p.m. Meet Thảo, twenty-seven, an office worker, recording IELTS part one on her phone.",
          "sub": "Thứ Hai, chín giờ tối. Đây là Thảo, hai mươi bảy tuổi, nhân viên văn phòng, đang ghi âm luyện Phần 1.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "How often do I meet my friends? Not as often as I'd like, maybe twice a month, because…",
          "sub": "Bao lâu gặp bạn bè một lần? Không nhiều như mình muốn, chừng hai lần một tháng, vì…",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Because what? Hold that thought. We'll hear the end soon.",
          "sub": "Vì sao? Giữ câu ấy lại đã. Lát nữa nghe nốt.",
          "keys": [
            "Giữ câu ấy lại"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "intro,p6"
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
            "id": "a-1",
            "t": "text",
            "text": "“Where do you live?”",
            "x": 60,
            "y": 420,
            "size": 52,
            "at": "l1:Where"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "“In Hanoi.” … im",
            "x": 60,
            "y": 510,
            "size": 56,
            "at": "l1:Hanoi",
            "color": "coral",
            "hl": [
              {
                "text": "im",
                "at": "l1:waits"
              }
            ]
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "4–5 phút, gần như chưa nói",
            "x": 60,
            "y": 610,
            "size": 46,
            "at": "l2:barely",
            "hl": [
              {
                "text": "chưa nói",
                "at": "l2:barely"
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
          "say": "Last week's problem: “Where do you live?” “In Hanoi.” Then she waits.",
          "sub": "Chuyện tuần trước: “Bạn sống ở đâu?” “Ở Hà Nội.” Rồi ngồi chờ.",
          "keys": [
            "Rồi ngồi chờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Question after question, four or five minutes pass, and the examiner has barely heard her English.",
          "sub": "Câu này rồi câu khác, bốn năm phút trôi qua, giám khảo gần như chưa nghe cô nói tiếng Anh.",
          "keys": [
            "chưa nghe cô nói"
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
            "text": "Trả lời dài bao nhiêu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:long",
            "hl": [
              {
                "text": "bao nhiêu",
                "at": "l1:long"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: một câu",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:word",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:word+300"
          },
          {
            "id": "b-no2",
            "t": "text",
            "text": "cũng không: cả phút",
            "x": 2028,
            "y": 245,
            "size": 50,
            "at": "l2:minute",
            "color": "muted"
          },
          {
            "id": "b-nox2",
            "t": "strike",
            "over": "b-no2",
            "at": "l2:minute+300"
          },
          {
            "id": "b-y1",
            "t": "text",
            "text": "Mà là: 2–3 câu",
            "x": 2028,
            "y": 335,
            "size": 58,
            "at": "l3:two",
            "color": "accent",
            "hl": [
              {
                "text": "2–3 câu",
                "at": "l3:two"
              }
            ]
          },
          {
            "id": "b-y2",
            "t": "text",
            "text": "đáp · lý do · chi tiết",
            "x": 2088,
            "y": 425,
            "size": 50,
            "at": "l3:reason"
          },
          {
            "id": "b-y3",
            "t": "text",
            "text": "đúng thì · câu để nghĩ",
            "x": 2088,
            "y": 500,
            "size": 50,
            "at": "l4:tense"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how long should a part one answer be?",
          "sub": "Vậy câu trả lời Phần 1 nên dài bao nhiêu?",
          "keys": [
            "dài bao nhiêu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not one word. And not a whole minute either.",
          "sub": "Không phải một câu cụt. Cũng không phải nói cả phút."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "About two or three sentences: a direct answer, one reason, one detail.",
          "sub": "Khoảng hai, ba câu: câu trả lời thẳng, một lý do, một chi tiết.",
          "keys": [
            "một lý do, một chi tiết"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "In the right tense, with a natural phrase when you need to think.",
          "sub": "Đúng thì của câu hỏi, và dùng một cụm câu tự nhiên khi cần nghĩ.",
          "keys": [
            "cụm câu tự nhiên"
          ]
        }
      ],
      "ref": "intro,p5"
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
            "id": "b-k1",
            "t": "text",
            "text": "4–5 phút",
            "x": 2928,
            "y": 170,
            "size": 64,
            "at": "l1:four",
            "color": "accent",
            "hl": [
              {
                "text": "4–5",
                "at": "l1:four"
              }
            ]
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "Chào, kiểm danh tính",
            "x": 2928,
            "y": 270,
            "size": 44,
            "at": "l1:ID"
          },
          {
            "id": "b-k3",
            "t": "text",
            "text": "Nhà, gia đình, việc làm, học",
            "x": 2928,
            "y": 340,
            "size": 40,
            "at": "l2:home"
          },
          {
            "id": "b-k4",
            "t": "text",
            "text": "Ý kiến về chuyện hằng ngày",
            "x": 2928,
            "y": 420,
            "size": 44,
            "at": "l3:everyday",
            "hl": [
              {
                "text": "hằng ngày",
                "at": "l3:everyday"
              }
            ]
          },
          {
            "id": "b-k5",
            "t": "text",
            "text": "Bài thuộc về thành phố?",
            "x": 2928,
            "y": 520,
            "size": 46,
            "at": "l4:speech",
            "color": "coral"
          },
          {
            "id": "b-k5x",
            "t": "strike",
            "over": "b-k5",
            "at": "l4:asked"
          },
          {
            "id": "b-k6",
            "t": "text",
            "text": "Lợi thế: chuyện của chính mình",
            "x": 2028,
            "y": 620,
            "size": 50,
            "at": "l5:own",
            "color": "accent",
            "hl": [
              {
                "text": "chính mình",
                "at": "l5:own"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: British Council; IELTS.org; IDP — Speaking Part 1",
            "x": 2028,
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
          "say": "Part one: four to five minutes, after introductions and an ID check.",
          "sub": "Phần 1: bốn đến năm phút, sau chào hỏi, kiểm tra danh tính.",
          "keys": [
            "bốn đến năm phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then familiar topics: home, family, work, studies, interests.",
          "sub": "Rồi những chủ đề quen: nhà ở, gia đình, công việc, việc học, sở thích."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It tests opinions and information on everyday topics and common experiences.",
          "sub": "Phần này kiểm tra việc nêu ý kiến, thông tin về chuyện hằng ngày, trải nghiệm phổ biến.",
          "keys": [
            "chuyện hằng ngày"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "IDP calls it the easiest part, but warns: no prepared city speech. That's not what was asked.",
          "sub": "IDP gọi đây là phần dễ nhất, nhưng dặn: đừng đọc bài giới thiệu thành phố soạn sẵn.",
          "keys": [
            "soạn sẵn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Your advantage here is your own life, not a model answer.",
          "sub": "Lợi thế ở đây là chuyện của chính mình, không phải bài mẫu.",
          "keys": [
            "chuyện của chính mình"
          ]
        }
      ],
      "ref": "p1,p3,p4"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Một tuần luyện Phần 1",
        "points": [
          {
            "label": "Thứ Hai",
            "sub": "Ba bước",
            "illus": "keycap-3"
          },
          {
            "label": "Thứ Ba",
            "sub": "Chủ đề, từ",
            "illus": "spiral-notepad"
          },
          {
            "label": "Thứ Tư",
            "sub": "Đúng thì",
            "illus": "hourglass-not-done"
          },
          {
            "label": "Thứ Năm",
            "sub": "Ừm à?",
            "illus": "thinking-face"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Lớp của Sam",
            "illus": "speech-balloon"
          },
          {
            "label": "Chủ nhật",
            "sub": "Nghe lại",
            "illus": "mobile-phone"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One week, one topic every evening.",
          "sub": "Một tuần, mỗi tối một chủ đề.",
          "keys": [
            "mỗi tối một chủ đề"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Back to Monday night.",
          "sub": "Quay lại tối thứ Hai."
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s05",
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai · Ba bước",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
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
            "at": "l1:Stop one",
            "caption": "Thứ Hai 21:10 · nói nốt câu",
            "icon": "mobile-phone"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "1 Đáp: hai lần một tháng",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l4:answer",
            "hl": [
              {
                "text": "Đáp",
                "at": "l4:answer"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "2 Lý do: so / because",
            "x": 3996,
            "y": 250,
            "size": 46,
            "at": "l4:reason",
            "hl": [
              {
                "text": "Lý do",
                "at": "l4:reason"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "3 Chi tiết: quán lẩu",
            "x": 3996,
            "y": 330,
            "size": 46,
            "at": "l4:detail",
            "hl": [
              {
                "text": "Chi tiết",
                "at": "l4:detail"
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
          "say": "Stop one, Monday. Thảo finishes the sentence.",
          "sub": "Chặng một, thứ Hai. Thảo nói nốt câu bỏ dở."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Most of my friends work on weekdays, so we usually meet on Saturday evenings.",
          "sub": "Phần lớn bạn mình đi làm ngày thường, nên tụi mình hay gặp tối thứ Bảy.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Last time we went to a small hotpot place near my house and talked for hours.",
          "sub": "Lần gần nhất tụi mình ăn lẩu ở quán nhỏ gần nhà, nói chuyện hàng giờ liền.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One answer, one reason, one detail. Rice, soup, and a plate of greens.",
          "sub": "Một câu đáp, một lý do, một chi tiết. Cơm có canh, thêm đĩa rau.",
          "keys": [
            "một lý do, một chi tiết"
          ]
        }
      ],
      "ref": "p5,p6,p7"
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
            "id": "c-4",
            "t": "text",
            "text": "Thêm ý trước khi bị hỏi “Why?”",
            "x": 3996,
            "y": 430,
            "size": 42,
            "at": "l1:Why",
            "hl": [
              {
                "text": "“Why?”",
                "at": "l1:Why"
              }
            ]
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Cụt → tưởng không bàn sâu được",
            "x": 3996,
            "y": 500,
            "size": 40,
            "at": "l2:depth",
            "color": "coral"
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "Đủ 3 bước, không cần hơn",
            "x": 3996,
            "y": 580,
            "size": 48,
            "at": "l3:enough",
            "color": "accent",
            "hl": [
              {
                "text": "không cần hơn",
                "at": "l3:enough"
              }
            ]
          },
          {
            "id": "c-7",
            "t": "text",
            "text": "Cả phút → lấn câu sau",
            "x": 3996,
            "y": 660,
            "size": 44,
            "at": "l4:minute",
            "color": "muted"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: British Council; IDP — Speaking Part 1",
            "x": 3996,
            "y": 128,
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
          "say": "IDP's advice: add reasons and examples before the examiner has to ask “why”.",
          "sub": "IDP khuyên: thêm lý do và ví dụ trước khi giám khảo phải hỏi “Why?”.",
          "keys": [
            "trước khi giám khảo phải hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Very short answers suggest you can't discuss the topic in any depth.",
          "sub": "Câu quá ngắn khiến giám khảo nghĩ bạn không bàn sâu được."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Answer, reason, detail is enough for one question. No more needed.",
          "sub": "Trả lời, lý do, chi tiết là đủ cho một câu hỏi. Không cần hơn.",
          "keys": [
            "Không cần hơn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Part one has many questions. A one-minute answer steals time from the next. Save long talk for part two.",
          "sub": "Phần 1 có nhiều câu hỏi. Đáp cả phút là lấn chỗ câu sau. Nói một mạch để dành cho Phần 2.",
          "keys": [
            "lấn chỗ câu sau"
          ]
        }
      ],
      "ref": "p5,p7,p8"
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
            "text": "② Thứ Ba · Chủ đề, từ",
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
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "spiral-notepad",
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l3",
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
            "at": "l1:Stop two",
            "caption": "Thứ Ba 21:00 · sổ chủ đề",
            "icon": "spiral-notepad"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "+ quê, chỗ ở, bạn bè, đồ ăn",
            "x": 5964,
            "y": 170,
            "size": 40,
            "at": "l1:hometown"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Sơ đồ ý, từ đã quen",
            "x": 5964,
            "y": 240,
            "size": 46,
            "at": "l2:mind",
            "hl": [
              {
                "text": "Sơ đồ ý",
                "at": "l2:mind"
              }
            ]
          },
          {
            "id": "d-b",
            "t": "text",
            "text": "“It is very good.”",
            "x": 5964,
            "y": 330,
            "size": 48,
            "at": "l4:good",
            "color": "coral"
          },
          {
            "id": "d-bx",
            "t": "strike",
            "over": "d-b",
            "at": "l6:Swap"
          },
          {
            "id": "d-a1",
            "t": "text",
            "text": "rent a small flat",
            "x": 5964,
            "y": 420,
            "size": 46,
            "at": "l5:rent",
            "hl": [
              {
                "text": "rent a small flat",
                "at": "l5:rent"
              }
            ]
          },
          {
            "id": "d-a2",
            "t": "text",
            "text": "walk to work",
            "x": 5964,
            "y": 490,
            "size": 46,
            "at": "l5:walk"
          },
          {
            "id": "d-a3",
            "t": "text",
            "text": "noisy · cheap places to eat",
            "x": 5964,
            "y": 560,
            "size": 42,
            "at": "l6:noisy"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "“good”, “nice” → chi tiết đời mình",
            "x": 5964,
            "y": 650,
            "size": 40,
            "at": "l6:Swap",
            "color": "accent",
            "hl": [
              {
                "text": "chi tiết đời mình",
                "at": "l6:life"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: IDP — Part 1; 10 tips for IELTS Speaking",
            "x": 5964,
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
          "say": "Stop two, Tuesday. IDP adds more topics: hometown, accommodation, friends, food and cooking.",
          "sub": "Chặng hai, thứ Ba. IDP nêu thêm: quê hương, chỗ ở, bạn bè, đồ ăn và nấu ăn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Prepare work or studies, plans, where you live. Make a word list or mind map, with words you know well.",
          "sub": "Chuẩn bị chuyện công việc, kế hoạch, nơi sống. Lập danh sách từ hoặc sơ đồ ý, dùng từ đã quen.",
          "keys": [
            "sơ đồ ý"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Practice question: do you like the area where you live? Her first try:",
          "sub": "Câu luyện: bạn có thích khu mình sống không? Thảo thử lần đầu:"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Yes. It is very good. I like it very much.",
          "sub": "Có. Nó rất tốt. Mình rất thích.",
          "face": "neutral"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Take two. Yes, mostly. I rent a small flat near my office, so I can walk to work.",
          "sub": "Lần hai. Phần lớn là thích. Mình thuê một căn hộ nhỏ gần công ty, nên đi bộ đi làm được.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Then: noisy at night, but lots of cheap places to eat. Swap “good” and “nice” for details of your life.",
          "sub": "Thêm: tối hơi ồn, nhưng nhiều chỗ ăn rẻ. Thay “good”, “nice” bằng chi tiết đời mình.",
          "keys": [
            "chi tiết đời mình"
          ]
        }
      ],
      "ref": "p9,p10,p11"
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
            "at": "l7",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Tư · Đúng thì",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "center",
                  "face": "thinking"
                }
              ],
              "props": [
                "open-book"
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
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "Thứ Tư 20:00 · quán nhóm",
            "icon": "hot-beverage"
          },
          {
            "id": "e-q",
            "t": "text",
            "text": "“Did you … as a child?”",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l2:Did",
            "hl": [
              {
                "text": "Did",
                "at": "l2:Did"
              }
            ]
          },
          {
            "id": "e-d",
            "t": "text",
            "text": "Dũng: “I enjoy reading.”",
            "x": 7932,
            "y": 260,
            "size": 44,
            "at": "l3:enjoy",
            "color": "coral"
          },
          {
            "id": "e-dx",
            "t": "strike",
            "over": "e-d",
            "at": "l7:present"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Lan: “Yes, I did.”",
            "x": 7932,
            "y": 340,
            "size": 46,
            "at": "l4:did",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Back when I was ten…",
            "x": 7972,
            "y": 410,
            "size": 42,
            "at": "l4:Back"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "These days I read less",
            "x": 7972,
            "y": 475,
            "size": 42,
            "at": "l6:These"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Xưa: quá khứ · Nay: hiện tại",
            "x": 7932,
            "y": 560,
            "size": 44,
            "at": "l7:childhood",
            "hl": [
              {
                "text": "quá khứ",
                "at": "l7:past"
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
          "say": "Stop three, Wednesday, at the group's café. Meet Dũng, Thảo's cousin, and Lan, a friend from the study group.",
          "sub": "Chặng ba, thứ Tư, ở quán nhóm tự học. Đây là Dũng, em họ Thảo, và Lan, bạn trong nhóm.",
          "keys": [
            "Dũng",
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Practice question: did you enjoy reading when you were a child?",
          "sub": "Câu luyện: hồi nhỏ bạn có thích đọc sách không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Yes, I enjoy reading. I read many books.",
          "sub": "Có, em thích đọc sách. Em đọc nhiều sách lắm.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Yes, I did. Back when I was about ten, my mum bought me a set of comic books.",
          "sub": "Có ạ. Hồi khoảng mười tuổi, mẹ mua cho em một bộ truyện tranh.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "I read them again and again.",
          "sub": "Em đọc đi đọc lại mãi."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "lan",
          "say": "These days I read less, mostly news on my phone.",
          "sub": "Giờ thì em đọc ít hơn, chủ yếu đọc tin trên điện thoại."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Dũng answered a childhood question in the present. Lan used past for childhood, present for now.",
          "sub": "Dũng đáp chuyện hồi nhỏ bằng thì hiện tại. Lan dùng quá khứ cho tuổi thơ, hiện tại cho bây giờ.",
          "keys": [
            "quá khứ cho tuổi thơ"
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
      "ref": "p13,p14"
    },
    {
      "id": "s09",
      "module": "BRK-04",
      "data": {
        "title": "Hồi nhỏ có thích đọc không?",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Yes, I enjoy reading. I read many books.",
        "right": "Yes, I did. Back when I was about ten…",
        "wrongIllus": "closed-book",
        "rightIllus": "books"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Present tense, no detail.",
          "sub": "Sai thì, không chi tiết.",
          "keys": [
            "Sai thì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Past tense, plus a real memory.",
          "sub": "Đúng thì quá khứ, thêm một kỷ niệm thật.",
          "keys": [
            "Đúng thì quá khứ"
          ]
        }
      ],
      "ref": "p14"
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
          }
        ],
        "items": [
          {
            "id": "e-r1",
            "t": "text",
            "text": "Do you…? → hiện tại",
            "x": 7932,
            "y": 640,
            "size": 40,
            "at": "l1:habits"
          },
          {
            "id": "e-r2",
            "t": "text",
            "text": "kế hoạch → tương lai",
            "x": 8392,
            "y": 640,
            "size": 40,
            "at": "l1:plans"
          },
          {
            "id": "e-o",
            "t": "text",
            "text": "I once… · I remember when…",
            "x": 7932,
            "y": 700,
            "size": 36,
            "at": "l3:once",
            "color": "accent"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: IDP — Part 1; British Council",
            "x": 7932,
            "y": 128,
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
          "say": "IDP says: match the question's tense. Habits, present. Childhood, past. Plans, future.",
          "sub": "IDP nhắc: trả lời đúng thì của câu hỏi. Thói quen, hiện tại. Tuổi thơ, quá khứ. Kế hoạch, tương lai.",
          "keys": [
            "đúng thì của câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A wrong tense is easy to notice under grammar, even when the idea is right.",
          "sub": "Lệch thì là lỗi dễ thấy ở tiêu chí ngữ pháp, dù ý đúng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For a story, vary the opening: I once, I remember when, back when I was, the other day.",
          "sub": "Kể chuyện thì đổi cách mở: “I once”, “I remember when”, “Back when I was”, “The other day”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "British Council: mix structures and tenses to show your range. Change tense on purpose.",
          "sub": "British Council khuyên trộn nhiều kiểu câu, nhiều thì để thấy độ đa dạng. Đổi thì có chủ ý.",
          "keys": [
            "Đổi thì có chủ ý"
          ]
        }
      ],
      "ref": "p12,p13,p15"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Im lặng hai giây có mất điểm trôi chảy?",
        "illus": "zipper-mouth-face"
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
          "say": "Does a two-second silence cost you fluency marks?",
          "sub": "Im lặng hai giây có bị trừ điểm trôi chảy không?",
          "keys": [
            "Im lặng hai giây"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p16"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Năm · Ừm à?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "Câu luyện: đổi gì ở khu phố?",
            "x": 60,
            "y": 1260,
            "size": 48,
            "at": "l2:change"
          },
          {
            "id": "f-u",
            "t": "text",
            "text": "umm… ahh… like… you know",
            "x": 60,
            "y": 1350,
            "size": 52,
            "at": "l3:Umm",
            "color": "coral",
            "hl": [
              {
                "text": "you know",
                "at": "l3:know"
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
          "say": "Stop four, Thursday. A harder question. Thảo panics.",
          "sub": "Chặng bốn, thứ Năm. Câu hỏi khó hơn. Thảo cuống."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Is there anything you would like to change about your neighbourhood?",
          "sub": "Có điều gì bạn muốn thay đổi ở khu phố mình không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Umm… ahh… like… you know… umm…",
          "sub": "Ừm… à… kiểu… bạn biết đó… ừm…",
          "face": "worried"
        }
      ],
      "ref": "p16,p20"
    },
    {
      "id": "s13",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Thứ Năm 21:00 · câu khó",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Sợ im, lấp bằng ừm à",
          "why": "Từ đệm cho thấy bạn đang thiếu từ hoặc thiếu ý; dừng ngắn để nghĩ thì bình thường.",
          "rule": "Dừng được; lấp bằng cụm có nghĩa"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "If I stop for two seconds, I lose fluency marks!",
          "sub": "Im hai giây là mất điểm trôi chảy!",
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
          "say": "IDP says a short pause to think is normal. Fillers like umm are what to avoid.",
          "sub": "IDP nói dừng ngắn để nghĩ là bình thường. Cái cần tránh là tiếng ừm à.",
          "keys": [
            "dừng ngắn để nghĩ là bình thường"
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
          "say": "Hmm, I've never really thought about that, but… more trees, I think, because it gets so hot.",
          "sub": "Hmm, mình chưa nghĩ kỹ chuyện này, nhưng… thêm cây xanh, vì trời nóng quá.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A pause, filled with a phrase that means something.",
          "sub": "Vẫn dừng, nhưng lấp bằng một cụm câu có nghĩa.",
          "phase": "redo",
          "keys": [
            "cụm câu có nghĩa"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p16,p17"
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
          }
        ],
        "items": [
          {
            "id": "f-p1",
            "t": "text",
            "text": "Let me think about that…",
            "x": 60,
            "y": 1450,
            "size": 40,
            "at": "l1:Let"
          },
          {
            "id": "f-p2",
            "t": "text",
            "text": "That's a good point",
            "x": 60,
            "y": 1515,
            "size": 40,
            "at": "l1:good point"
          },
          {
            "id": "f-p3",
            "t": "text",
            "text": "That's an interesting question",
            "x": 60,
            "y": 1580,
            "size": 40,
            "at": "l2:interesting"
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "Giữ 2–3 cụm, đổi lượt",
            "x": 900,
            "y": 1450,
            "size": 48,
            "at": "l2:rotate",
            "color": "accent",
            "hl": [
              {
                "text": "đổi lượt",
                "at": "l2:rotate"
              }
            ]
          },
          {
            "id": "f-ca",
            "t": "text",
            "text": "“Ăn có nhai, nói có nghĩ”",
            "x": 900,
            "y": 1550,
            "size": 46,
            "at": "l3:chew",
            "color": "accent",
            "hl": [
              {
                "text": "nói có nghĩ",
                "at": "l3:think"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: IDP — 10 tips for IELTS Speaking",
            "x": 60,
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
          "say": "IDP suggests: “let me think about that for a minute”, or “that's a good point”.",
          "sub": "IDP gợi ý: “Let me think about that for a minute” hay “That's a good point”.",
          "keys": [
            "Let me think about that"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Add one like “that's an interesting question”. Keep two or three, and rotate.",
          "sub": "Tự thêm vài cụm như “That's an interesting question”. Giữ hai, ba cụm và đổi lượt.",
          "keys": [
            "đổi lượt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "As our elders say: chew before you eat, think before you speak.",
          "sub": "Ông bà dặn: “Ăn có nhai, nói có nghĩ.”",
          "keys": [
            "Ăn có nhai, nói có nghĩ"
          ]
        }
      ],
      "ref": "p18"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Sáu · Lớp Sam",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
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
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sam",
            "caption": "Thứ Sáu 19:00 · thi thử Phần 1",
            "icon": "speech-balloon"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Đi làm hay đi học?",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:work"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "→ chọn một",
            "x": 2068,
            "y": 1345,
            "size": 56,
            "at": "l4:Choose",
            "color": "accent",
            "hl": [
              {
                "text": "chọn một",
                "at": "l4:Choose"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Câu sau dựa vào câu đáp",
            "x": 2028,
            "y": 1435,
            "size": 44,
            "at": "l4:follow"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Không cả hai: ở nhà chăm con",
            "x": 2028,
            "y": 1510,
            "size": 40,
            "at": "l5:children",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, Friday, mock test. Meet Sam, the group's native English teacher, playing examiner.",
          "sub": "Chặng năm, thứ Sáu, thi thử. Đây là Sam, cô giáo bản ngữ của nhóm, đóng vai giám khảo.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Do you work, or are you a student?",
          "sub": "Em đi làm hay đi học?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I work. I'm an office worker in a trading company.",
          "sub": "Em đi làm. Em là nhân viên văn phòng ở một công ty thương mại.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Good. IDP says choose one, even if you do both. The examiner picks follow-up questions from your answer.",
          "sub": "Tốt. IDP dặn: chọn một, dù bạn làm cả hai. Giám khảo chọn câu hỏi tiếp theo từ câu đáp của bạn.",
          "keys": [
            "chọn một"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Neither? You can say you stay at home to look after your children.",
          "sub": "Không làm, không học? Có thể nói mình ở nhà chăm con."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p2"
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
          },
          {
            "at": "l1",
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
            "id": "g-5",
            "t": "text",
            "text": "Không nghe rõ? Hỏi lại:",
            "x": 2028,
            "y": 1600,
            "size": 44,
            "at": "l3:repeat"
          },
          {
            "id": "g-6",
            "t": "text",
            "text": "Could you repeat that, please?",
            "x": 2028,
            "y": 1670,
            "size": 40,
            "at": "l3:repeat+300",
            "color": "accent",
            "hl": [
              {
                "text": "repeat",
                "at": "l3:repeat"
              }
            ]
          },
          {
            "id": "g-7",
            "t": "text",
            "text": "Hỏi lịch sự > đoán lạc đề",
            "x": 2028,
            "y": 1750,
            "size": 44,
            "at": "l4:guessing",
            "hl": [
              {
                "text": "lạc đề",
                "at": "l4:nobody"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: IDP — IELTS Speaking test Part 1",
            "x": 2028,
            "y": 1218,
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
          "who": "sam",
          "say": "Do you enjoy window shopping?",
          "sub": "Em có thích đi dạo ngắm hàng không?",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Sorry, what does window shopping mean?",
          "sub": "Xin lỗi cô, “window shopping” nghĩa là gì ạ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Allowed. IDP says you can ask “could you repeat that, please?” or what a word means.",
          "sub": "Được phép. IDP nói bạn có thể hỏi “Could you repeat that, please?” hoặc hỏi nghĩa một từ.",
          "keys": [
            "hỏi nghĩa một từ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A polite question beats guessing and answering something nobody asked.",
          "sub": "Hỏi lại lịch sự tốt hơn đoán bừa rồi trả lời lạc đề.",
          "keys": [
            "trả lời lạc đề"
          ]
        }
      ],
      "ref": "p19"
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
            "text": "⑥ Thứ Bảy · Tự luyện",
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
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone",
                "spiral-notepad"
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
            "at": "l1:Stop six",
            "caption": "Thứ Bảy 21:00 · ba câu, ghi âm",
            "icon": "mobile-phone"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "1 chủ đề · 3 câu hỏi",
            "x": 3996,
            "y": 1260,
            "size": 52,
            "at": "l1:three",
            "hl": [
              {
                "text": "3 câu hỏi",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "after work or class?",
            "x": 3996,
            "y": 1350,
            "size": 40,
            "at": "l2:after"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "change your neighbourhood?",
            "x": 3996,
            "y": 1410,
            "size": 40,
            "at": "l2:change"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "cooked for a large group?",
            "x": 3996,
            "y": 1470,
            "size": 40,
            "at": "l2:cooked"
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "Khung ba bước → ghi âm",
            "x": 3996,
            "y": 1550,
            "size": 46,
            "at": "l3:record",
            "color": "accent",
            "hl": [
              {
                "text": "ghi âm",
                "at": "l3:record"
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
          "say": "Stop six, Saturday. Each day: one topic, three questions to herself.",
          "sub": "Chặng sáu, thứ Bảy. Mỗi ngày một chủ đề, tự hỏi mình ba câu.",
          "keys": [
            "ba câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What do you do after work or class? Anything to change in your neighbourhood? Ever cooked for a large group?",
          "sub": "Sau giờ làm, giờ học bạn làm gì? Muốn đổi gì ở khu phố? Từng nấu cho nhiều người ăn chưa?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Answer each with the three steps, record, and listen back. IDP: when you hear a mistake, correct yourself.",
          "sub": "Đáp từng câu theo ba bước, ghi âm rồi nghe lại. IDP: nghe ra lỗi thì tự sửa.",
          "keys": [
            "tự sửa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "That one's present tense. I'll say it again.",
          "sub": "Câu này phải thì hiện tại. Nói lại nào.",
          "face": "happy"
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s18",
      "module": "BRK-11",
      "data": {
        "title": "Nghe lại, kiểm 3 điều",
        "items": [
          "Có lý do và chi tiết?",
          "Có đúng thì?",
          "Có ừm à kéo dài?"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three: any long umms?",
          "sub": "Ba: có ừm à kéo dài không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two: the right tense?",
          "sub": "Hai: có đúng thì không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "One: a reason and a detail?",
          "sub": "Một: có đủ lý do và chi tiết không?",
          "keys": [
            "lý do và chi tiết"
          ]
        }
      ],
      "ref": "p21"
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
            "id": "h-6",
            "t": "text",
            "text": "Rõ, tốc độ vừa · mỉm cười",
            "x": 3996,
            "y": 1650,
            "size": 44,
            "at": "l1:smile",
            "hl": [
              {
                "text": "mỉm cười",
                "at": "l1:smile"
              }
            ]
          },
          {
            "id": "h-7",
            "t": "text",
            "text": "Nhấn giọng ý tương phản",
            "x": 3996,
            "y": 1730,
            "size": 44,
            "at": "l2:contrast"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: IDP — 10 tips for IELTS Speaking",
            "x": 3996,
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
          "say": "IDP's delivery tips: speak clearly, at a good pace, and smile, so your mouth opens more.",
          "sub": "Mẹo của IDP: nói rõ, tốc độ vừa phải, mỉm cười để khẩu hình mở hơn.",
          "keys": [
            "mỉm cười"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And use stress and intonation to show contrast.",
          "sub": "Và dùng trọng âm, ngữ điệu để nhấn ý tương phản."
        }
      ],
      "ref": "p21"
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
            "text": "Chủ nhật · 21:00",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
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
                "mobile-phone",
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
            "at": "l1:Sunday",
            "caption": "Chủ nhật 21:00 · cùng bàn ấy",
            "icon": "mobile-phone"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Đáp · lý do · chi tiết ✓",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l4:Answer",
            "color": "accent",
            "hl": [
              {
                "text": "✓",
                "at": "l4:detail"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Đúng thì ✓",
            "x": 5964,
            "y": 1350,
            "size": 50,
            "at": "l4:tense"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Cụm để nghĩ, không ừm à ✓",
            "x": 5964,
            "y": 1440,
            "size": 44,
            "at": "l4:thinking"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Ăn có nhai, nói có nghĩ”",
            "x": 5964,
            "y": 1550,
            "size": 46,
            "at": "l5:chewed",
            "hl": [
              {
                "text": "nói có nghĩ",
                "at": "l5:thought"
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
          "say": "Sunday, nine p.m. Same desk, same phone, same question as Monday.",
          "sub": "Chủ nhật, chín giờ tối. Vẫn bàn ấy, điện thoại ấy, câu hỏi của tối thứ Hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "How often do I meet my friends? That's a good question. Not as often as I'd like.",
          "sub": "Bao lâu gặp bạn bè? Câu hỏi hay đấy. Không nhiều như mình muốn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Most of them work on weekdays, so it's Saturday evenings, usually at a hotpot place.",
          "sub": "Phần lớn bạn mình đi làm ngày thường, nên thường gặp tối thứ Bảy, ở quán lẩu.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Answer, reason, detail. Right tense, a thinking phrase, no umms.",
          "sub": "Đáp, lý do, chi tiết. Đúng thì, có cụm để nghĩ, không ừm à.",
          "keys": [
            "Đáp, lý do, chi tiết"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "She chewed, and she thought, before she spoke.",
          "sub": "Ăn có nhai, nói có nghĩ. Thảo làm được rồi.",
          "keys": [
            "nói có nghĩ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "I said it!",
          "sub": "Nói ra rồi!",
          "face": "happy"
        }
      ],
      "ref": "p6,p7"
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
            "text": "Tóm lại: 2–3 câu là đủ",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:So"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Làm ngay: 3 câu, ghi âm",
            "x": 7932,
            "y": 1290,
            "size": 52,
            "at": "l5:Try",
            "hl": [
              {
                "text": "ghi âm",
                "at": "l5:record"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "nghe lại, kiểm ba điều",
            "x": 7972,
            "y": 1375,
            "size": 46,
            "at": "l5:check"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: Phần 2 · 2 phút",
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
            "y": 30,
            "at": "l2:reason"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 30,
            "at": "l3:tense"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1600,
            "y": 1120,
            "at": "l4:phrase"
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
          "say": "So, part one is familiar questions, and two or three sentences each is enough.",
          "sub": "Tóm lại, Phần 1 là câu hỏi quen, mỗi câu đáp hai, ba câu là đủ.",
          "keys": [
            "hai, ba câu là đủ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: answer, reason, detail.",
          "sub": "Một: đáp, lý do, chi tiết."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: match the tense of the question.",
          "sub": "Hai: đúng thì của câu hỏi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: pause with a phrase, not with umm.",
          "sub": "Ba: dừng để nghĩ bằng một cụm câu, không bằng ừm à."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: three questions, record, then check reasons, tense and umms.",
          "sub": "Làm ngay: ba câu hỏi, ghi âm, rồi kiểm lý do, thì và ừm à.",
          "keys": [
            "ba câu hỏi, ghi âm"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next up: part two, two minutes from one minute of notes.",
          "sub": "Bài tiếp theo: Phần 2, nói đủ hai phút với một phút chuẩn bị.",
          "keys": [
            "Phần 2"
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
        "q": "What three steps make up the answer frame in this lesson?",
        "options": [
          "A memorised idiom, a definition of the topic, then a summary sentence",
          "A direct answer, a reason with because or so, then a detail or example",
          "A greeting, a long story about your childhood, then a polite question"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "speech-balloon",
        "why": "Khung gồm câu trả lời thẳng, một lý do, một chi tiết. Ba bước này thường vừa 2–3 câu."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What three steps make up the answer frame in this lesson?",
          "sub": "Khung trả lời trong bài gồm ba bước nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A direct answer, a reason with because or so, then a detail or example.",
          "sub": "Câu trả lời thẳng, một lý do với “because” hay “so”, rồi một chi tiết hoặc ví dụ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Three steps, two or three sentences.",
          "sub": "Ba bước, vừa hai, ba câu."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[9]"
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
          "say": "Answer, reason, detail. Then try the forty questions below.",
          "sub": "Đáp, lý do, chi tiết. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT TUẦN LUYỆN PHẦN 1 MỖI TỐI của Thảo (thứ Hai 21:00 câu bị cắt “…because—” → nói trọn ở ① khung ba bước → thứ Ba chủ đề, từ → thứ Tư đúng thì (Dũng vai Ngọc, Lan vai Phúc) → thứ Năm ừm à + “Khoan đã!” → thứ Sáu lớp Sam: đi làm hay đi học, hỏi lại → thứ Bảy tự luyện → Chủ nhật 21:00 cùng câu hỏi, khép vòng). Mở HOOK-22 (câu thoại bị cắt). Nhân vật: Thảo, Dũng, Lan, Sam — w145/_series/ielts-speaking-takers.md. Cảnh ngắt nhịp: BRK-08 (một tuần), BRK-04 (trước/sau đúng thì), BRK-07 (rehook im lặng hai giây), BRK-11 (kiểm ba điều). Ca dao: “Ăn có nhai, nói có nghĩ”. Câu đố questions[9].",
  "loop": {
    "open": "s00",
    "close": "s20"
  }
};
