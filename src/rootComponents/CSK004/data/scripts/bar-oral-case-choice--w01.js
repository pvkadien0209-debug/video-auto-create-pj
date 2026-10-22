// bar-oral-case-choice--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-oral-case-choice--w01",
  "unit": {
    "audience": "bar-exam-oral",
    "slug": "bar-oral-case-choice",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Chọn vụ việc mang vào phòng thi: vụ nào giúp mình ghi điểm?",
    "series": "Phần vấn đáp không run — trình bày và bảo vệ vụ việc tự chọn trước Ban chấm"
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
              "a-book"
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
            "id": "a-book",
            "t": "illus",
            "name": "notebook",
            "x": 120,
            "y": 150,
            "size": 300,
            "at": 0
          },
          {
            "id": "a-bt",
            "t": "text",
            "text": "Sổ nhật ký tập sự",
            "x": 60,
            "y": 480,
            "size": 52,
            "at": "l1:logbook",
            "hl": [
              {
                "text": "Sổ nhật ký",
                "at": "l1:logbook"
              }
            ]
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "① ✓",
            "x": 520,
            "y": 160,
            "size": 64,
            "at": "l2:three",
            "color": "coral"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "② ✓",
            "x": 520,
            "y": 260,
            "size": 64,
            "at": "l2:three+300",
            "color": "coral"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "③ ✓",
            "x": 520,
            "y": 360,
            "size": 64,
            "at": "l2:three+600",
            "color": "coral"
          },
          {
            "id": "a-one",
            "t": "text",
            "text": "→ chỉ 1 vụ vào phòng thi",
            "x": 60,
            "y": 580,
            "size": 50,
            "at": "l3:only one",
            "color": "accent",
            "hl": [
              {
                "text": "chỉ 1 vụ",
                "at": "l3:only one"
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
          "say": "One small book: a trainee's logbook, signed page by page.",
          "sub": "Một cuốn sổ nhỏ: Sổ nhật ký tập sự, có chữ ký xác nhận.",
          "keys": [
            "Sổ nhật ký tập sự"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Inside, three cases marked in red ink.",
          "sub": "Bên trong, ba vụ được đánh dấu mực đỏ.",
          "keys": [
            "ba vụ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But only one of them goes into the exam room.",
          "sub": "Nhưng chỉ một vụ được mang vào phòng thi.",
          "keys": [
            "chỉ một vụ"
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
            "x": 900,
            "y": 150,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "notebook",
                "crescent-moon"
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
            "caption": "Tối thứ Hai · ở nhà",
            "icon": "notebook"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Chọn mặt gửi vàng”",
            "x": 60,
            "y": 680,
            "size": 50,
            "at": "l3:gold",
            "color": "accent",
            "hl": [
              {
                "text": "gửi vàng",
                "at": "l3:gold"
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
          "say": "Monday night. Thảo, our trainee, stares at the three cases.",
          "sub": "Tối thứ Hai. Thảo, cô tập sự của chúng ta, nhìn ba vụ đã đánh dấu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The biggest dispute in the office. That will impress them, surely.",
          "sub": "Vụ tranh chấp lớn nhất văn phòng. Chắc chắn gây ấn tượng.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The old saying: pick the right face before you trust it with gold.",
          "sub": "Ông bà dặn: “Chọn mặt gửi vàng.”",
          "keys": [
            "Chọn mặt gửi vàng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Here, the gold is your marks. Is the biggest face the right one?",
          "sub": "Ở đây, vàng là điểm số. Mặt to nhất đã chắc là mặt đúng?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "intro,p4"
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
            "text": "Vụ nào giúp mình ghi điểm?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:marks",
            "hl": [
              {
                "text": "ghi điểm",
                "at": "l1:marks"
              }
            ]
          },
          {
            "id": "b-17",
            "t": "text",
            "text": "Đ17 k2: thí sinh TỰ chọn vụ",
            "x": 2028,
            "y": 150,
            "size": 48,
            "at": "l2:chooses",
            "hl": [
              {
                "text": "TỰ chọn",
                "at": "l2:chooses"
              }
            ]
          },
          {
            "id": "b-qs",
            "t": "text",
            "text": "Câu hỏi đi ra từ vụ",
            "x": 2028,
            "y": 230,
            "size": 48,
            "at": "l2:questions"
          },
          {
            "id": "b-san",
            "t": "text",
            "text": "Chọn vụ = chọn sân thi",
            "x": 2028,
            "y": 320,
            "size": 64,
            "at": "l3:pitch",
            "color": "accent",
            "hl": [
              {
                "text": "chọn sân",
                "at": "l3:pitch"
              }
            ]
          },
          {
            "id": "b-out",
            "t": "text",
            "text": "Sợ hỏi ngoài vụ?",
            "x": 2968,
            "y": 160,
            "size": 48,
            "at": "l4:outside",
            "color": "muted"
          },
          {
            "id": "b-out2",
            "t": "text",
            "text": "→ thường bám vào điểm trong vụ",
            "x": 2968,
            "y": 230,
            "size": 40,
            "at": "l5:points"
          },
          {
            "id": "b-out3",
            "t": "text",
            "text": "điều luật · thủ tục · thông tin",
            "x": 2968,
            "y": 290,
            "size": 36,
            "at": "l5:procedure",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So which case actually earns marks?",
          "sub": "Vậy vụ nào mới giúp mình ghi điểm?",
          "keys": [
            "ghi điểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article seventeen, clause two: the candidate chooses. And the panel's questions come from that case.",
          "sub": "Khoản 2 Điều 17: thí sinh tự chọn vụ. Và câu hỏi của Ban chấm đi ra từ chính vụ ấy.",
          "keys": [
            "tự chọn vụ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Choosing a case means choosing your pitch. Play at home, not away.",
          "sub": "Chọn vụ là chọn sân thi. Đá sân nhà, đừng đá sân khách.",
          "keys": [
            "chọn sân thi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Afraid of questions outside your case? Nobody forbids them.",
          "sub": "Sợ bị hỏi ngoài vụ? Không ai cấm Ban chấm hỏi rộng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "But they usually build on points inside it: the articles, the procedure, how you handled information.",
          "sub": "Nhưng thường bám vào điểm trong vụ: điều luật, thủ tục, cách mình xử lý thông tin."
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
            "id": "b-4",
            "t": "text",
            "text": "4 tiêu chí:",
            "x": 2028,
            "y": 430,
            "size": 52,
            "at": "l1:four"
          },
          {
            "id": "b-c1",
            "t": "text",
            "text": "① làm thật",
            "x": 2328,
            "y": 430,
            "size": 48,
            "at": "l1:really"
          },
          {
            "id": "b-c2",
            "t": "text",
            "text": "② có điểm tranh cãi",
            "x": 2608,
            "y": 430,
            "size": 48,
            "at": "l1:issue"
          },
          {
            "id": "b-c3",
            "t": "text",
            "text": "③ đủ tài liệu",
            "x": 3088,
            "y": 430,
            "size": 48,
            "at": "l1:documents"
          },
          {
            "id": "b-c4",
            "t": "text",
            "text": "④ ẩn khách hàng",
            "x": 3368,
            "y": 430,
            "size": 44,
            "at": "l1:hidden",
            "hl": [
              {
                "text": "ẩn khách hàng",
                "at": "l1:hidden"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Một tuần chọn vụ của Thảo",
            "x": 2028,
            "y": 545,
            "size": 40,
            "at": "l2:week",
            "font": "base",
            "color": "accent"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l2:week+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l2:week+450",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l2:week+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l2:week+750",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l2:week+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l2:week+1050",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Thứ Ba",
            "x": 2056,
            "y": 630,
            "size": 46,
            "at": "l2:week+400"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Thứ Tư",
            "x": 2326,
            "y": 630,
            "size": 46,
            "at": "l2:week+550"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Thứ Năm",
            "x": 2596,
            "y": 630,
            "size": 46,
            "at": "l2:week+700"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Thứ Sáu",
            "x": 2866,
            "y": 630,
            "size": 46,
            "at": "l2:week+850"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Thứ Bảy",
            "x": 3136,
            "y": 630,
            "size": 46,
            "at": "l2:week+1000"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Thứ Hai",
            "x": 3406,
            "y": 630,
            "size": 46,
            "at": "l2:week+1150"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Four criteria: a case you really worked on, a clear legal issue, enough documents, and client details hidden.",
          "sub": "Bốn tiêu chí: vụ mình làm thật, có vấn đề pháp lý rõ, đủ tài liệu, đã ẩn thông tin khách hàng.",
          "keys": [
            "Bốn tiêu chí"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "We follow Thảo through one week of choosing.",
          "sub": "Ta theo Thảo qua một tuần chọn vụ.",
          "keys": [
            "một tuần chọn vụ"
          ]
        }
      ],
      "ref": "intro,p18"
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
            "at": "l5",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Ba · Tập thử vụ lớn",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 150,
            "w": 780,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "cross"
                }
              ],
              "props": [
                "page-facing-up",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "dung",
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:tuesday",
            "caption": "Thứ Ba · quán nước",
            "icon": "hot-beverage"
          },
          {
            "id": "c-big",
            "t": "text",
            "text": "Vụ lớn nhất văn phòng",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l1:biggest",
            "color": "muted"
          },
          {
            "id": "c-did",
            "t": "text",
            "text": "Đã làm: sao chụp, sắp tài liệu",
            "x": 3996,
            "y": 250,
            "size": 42,
            "at": "l4:copied",
            "color": "coral",
            "hl": [
              {
                "text": "sao chụp",
                "at": "l4:copied"
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
          "say": "Tuesday. Thảo rehearses with the biggest case.",
          "sub": "Thứ Ba. Thảo tập thử với vụ lớn nhất."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dũng, her study buddy, plays the examiner, arms crossed, very serious.",
          "sub": "Dũng, bạn ôn cùng, đóng vai giám khảo, khoanh tay, nghiêm như thật.",
          "keys": [
            "đóng vai giám khảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "In this case, what did you do?",
          "sub": "Trong vụ này, chị đã làm gì?",
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I... copied and sorted the documents. The strategy was my supervisor's idea.",
          "sub": "Em... sao chụp và sắp xếp tài liệu. Còn hướng giải quyết là của luật sư hướng dẫn.",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Every question about the solution, she answers in someone else's words.",
          "sub": "Hỏi gì về hướng giải quyết, Thảo cũng trả lời bằng lời người khác.",
          "keys": [
            "bằng lời người khác"
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
          }
        ],
        "items": [
          {
            "id": "c-14",
            "t": "text",
            "text": "Đ14 Luật Luật sư: người tập sự",
            "x": 3996,
            "y": 360,
            "size": 44,
            "at": "l1:fourteen",
            "hl": [
              {
                "text": "người tập sự",
                "at": "l1:trainee"
              }
            ]
          },
          {
            "id": "c-help",
            "t": "text",
            "text": "✓ giúp luật sư hướng dẫn",
            "x": 3996,
            "y": 420,
            "size": 42,
            "at": "l1:helps",
            "color": "accent"
          },
          {
            "id": "c-no",
            "t": "text",
            "text": "✗ không đại diện tại phiên tòa",
            "x": 3996,
            "y": 475,
            "size": 42,
            "at": "l2:represent",
            "color": "coral"
          },
          {
            "id": "c-no2",
            "t": "text",
            "text": "✗ không ký văn bản tư vấn",
            "x": 3996,
            "y": 530,
            "size": 42,
            "at": "l2:sign",
            "color": "coral"
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "Đ6: nghiên cứu, thu thập, đề xuất",
            "x": 3996,
            "y": 600,
            "size": 40,
            "at": "l3:research",
            "hl": [
              {
                "text": "đề xuất",
                "at": "l3:propose"
              }
            ]
          },
          {
            "id": "c-take",
            "t": "text",
            "text": "Vụ nhỏ làm thật > vụ lớn",
            "x": 3996,
            "y": 680,
            "size": 50,
            "at": "l4:small",
            "color": "accent",
            "hl": [
              {
                "text": "làm thật",
                "at": "l4:really"
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
          "say": "Article fourteen, Law on Lawyers: a trainee helps the supervising lawyer.",
          "sub": "Điều 14 Luật Luật sư: người tập sự giúp luật sư hướng dẫn.",
          "keys": [
            "giúp luật sư hướng dẫn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But may not represent clients at trial, and may not sign legal advice.",
          "sub": "Nhưng không được đại diện, bảo vệ khách hàng tại phiên tòa, không được ký văn bản tư vấn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article six of the circular: research the file, collect documents, propose a solution. That's your real stage.",
          "sub": "Điều 6 Thông tư 10: nghiên cứu, thu thập tài liệu, đề xuất hướng giải quyết. Đó mới là sân thật của mình.",
          "keys": [
            "đề xuất hướng giải quyết"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So, a small case you really worked on beats a big one you watched.",
          "sub": "Vậy: vụ nhỏ mà mình làm thật hơn vụ lớn mà mình đứng ngoài.",
          "keys": [
            "vụ nhỏ mà mình làm thật"
          ]
        }
      ],
      "ref": "p3,p5"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Thứ Ba · đến lượt Dũng tập",
        "actors": [
          {
            "id": "dung",
            "side": "left",
            "pose": "explain"
          },
          {
            "id": "thao",
            "side": "right",
            "pose": "cross"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nhận mình đã tranh luận tại tòa",
          "why": "Điều 14 không cho người tập sự đại diện tại phiên tòa; Ban chấm hỏi một câu là lộ.",
          "rule": "Kể đúng việc mình được làm theo luật"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "My turn. In my case, I argued for the client in court!",
          "sub": "Đến lượt tôi. Vụ của tôi, tôi đã tranh luận cho khách tại tòa!",
          "face": "happy",
          "pose": "explain",
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
          "say": "Article fourteen says trainees can't do that. One question and the story collapses.",
          "sub": "Điều 14 không cho người tập sự làm việc đó. Hỏi một câu là sập.",
          "keys": [
            "Hỏi một câu là sập"
          ]
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
          "say": "I helped my supervisor research the file, find the applicable texts, and draft papers for review.",
          "sub": "Tôi giúp luật sư hướng dẫn nghiên cứu hồ sơ, tìm văn bản áp dụng, soạn dự thảo để luật sư xem lại.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Honest, and still impressive. Tell what the law let you do.",
          "sub": "Trung thực mà vẫn ra dáng. Kể đúng việc luật cho mình làm.",
          "phase": "redo",
          "keys": [
            "Kể đúng việc luật cho mình làm"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "at": "l3",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Tư · Có gì để cãi?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:wednesday"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
            "w": 780,
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
                "file-folder",
                "balance-scale"
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
            "at": "l1:wednesday",
            "caption": "Thứ Tư · văn phòng của Dũng",
            "icon": "file-folder"
          },
          {
            "id": "d-a",
            "t": "text",
            "text": "A: hồ sơ thủ tục theo mẫu",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "l2:form"
          },
          {
            "id": "d-b",
            "t": "text",
            "text": "B: tranh chấp hợp đồng, thời hiệu",
            "x": 5964,
            "y": 250,
            "size": 40,
            "at": "l2:contract",
            "hl": [
              {
                "text": "thời hiệu",
                "at": "l2:time limit"
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
          "say": "Wednesday. Dũng, chastened, weighs his own two cases.",
          "sub": "Thứ Tư. Dũng, sau cú tua lại, cân hai vụ của mình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "A routine filing from a form, or a contract dispute over the time limit to sue?",
          "sub": "Một hồ sơ thủ tục theo mẫu, hay vụ tranh chấp hợp đồng cãi nhau về thời hiệu khởi kiện?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The circular says defend a view. That needs a point people can argue about.",
          "sub": "Thông tư nói “bảo vệ quan điểm”. Muốn vậy phải có một điểm để tranh cãi.",
          "keys": [
            "một điểm để tranh cãi"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s08",
      "module": "BRK-04",
      "data": {
        "title": "Hai vụ của Dũng khi tập nói",
        "labels": [
          "Vụ A",
          "Vụ B"
        ],
        "wrong": "Kể hết trong hai phút, không có gì để bảo vệ",
        "right": "Có câu hỏi pháp lý, lập luận hai phía, quan điểm",
        "wrongIllus": "page-facing-up",
        "rightIllus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Case A: two minutes, nothing to defend.",
          "sub": "Vụ A: hai phút là hết, chẳng có gì để bảo vệ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Case B: a question, two sides, his view.",
          "sub": "Vụ B: câu hỏi pháp lý, hai phía, quan điểm của mình.",
          "keys": [
            "quan điểm của mình"
          ]
        }
      ],
      "ref": "p8"
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
            "id": "d-gt",
            "t": "text",
            "text": "Giáo trình HVTP: điểm cần xác định",
            "x": 5964,
            "y": 360,
            "size": 40,
            "at": "l1:textbook",
            "color": "muted"
          },
          {
            "id": "d-g1",
            "t": "text",
            "text": "hiệu lực · chủ thể · quyền, nghĩa vụ",
            "x": 5964,
            "y": 420,
            "size": 42,
            "at": "l1:validity"
          },
          {
            "id": "d-g2",
            "t": "text",
            "text": "thực hiện · thẩm quyền",
            "x": 5964,
            "y": 480,
            "size": 42,
            "at": "l2:performance"
          },
          {
            "id": "d-g3",
            "t": "text",
            "text": "thời hiệu · điều kiện khởi kiện",
            "x": 5964,
            "y": 540,
            "size": 42,
            "at": "l2:time limits",
            "hl": [
              {
                "text": "thời hiệu",
                "at": "l2:time limits"
              }
            ]
          },
          {
            "id": "d-take",
            "t": "text",
            "text": "Không điểm cãi → không quan điểm",
            "x": 5964,
            "y": 650,
            "size": 46,
            "at": "l3:nothing",
            "color": "accent",
            "hl": [
              {
                "text": "không quan điểm",
                "at": "l3:no view"
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
          "say": "The Judicial Academy textbook lists what to check in a contract dispute: validity, parties, rights and duties,",
          "sub": "Giáo trình của Học viện Tư pháp liệt kê điểm cần xác định trong tranh chấp hợp đồng: hiệu lực, chủ thể, quyền và nghĩa vụ,"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "performance, jurisdiction, time limits and conditions to sue. One disputed point is enough.",
          "sub": "quá trình thực hiện, thẩm quyền, thời hiệu, điều kiện khởi kiện. Có một điểm đang tranh cãi là đủ.",
          "keys": [
            "một điểm đang tranh cãi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Nothing to argue about, no view to defend. A debate with no opponent is just a speech.",
          "sub": "Không có điểm để tranh cãi thì không có quan điểm để bảo vệ. Tranh luận không đối thủ thì chỉ là đọc diễn văn.",
          "keys": [
            "không có quan điểm để bảo vệ"
          ]
        }
      ],
      "ref": "p7,p9"
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
            "text": "③ Thứ Năm · Đủ tài liệu chưa?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:thursday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 150,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "file-folder",
                "hourglass-done"
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
            "at": "l1:thursday",
            "caption": "Thứ Năm · bàn làm việc",
            "icon": "file-folder"
          },
          {
            "id": "e-7",
            "t": "text",
            "text": "Đ7: sổ ghi việc mình làm",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l1:logbook",
            "hl": [
              {
                "text": "việc mình làm",
                "at": "l1:tasks"
              }
            ]
          },
          {
            "id": "e-7b",
            "t": "text",
            "text": "có xác nhận của LS hướng dẫn và tổ chức nhận tập sự",
            "x": 7932,
            "y": 235,
            "size": 26,
            "at": "l1:confirmed",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-unf",
            "t": "text",
            "text": "Vụ chắc nhất: chưa có kết quả",
            "x": 7932,
            "y": 300,
            "size": 42,
            "at": "l3:result",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday: paperwork. Article seven: the logbook records the tasks you did, confirmed by your supervisor.",
          "sub": "Thứ Năm: tài liệu. Điều 7: Sổ nhật ký ghi việc mình làm, có xác nhận của luật sư hướng dẫn.",
          "keys": [
            "có xác nhận"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The bar association sends each practical dossier to the council. Its contents? Ask your association.",
          "sub": "Đoàn luật sư gửi hồ sơ thực hành về Hội đồng kiểm tra. Gồm gì? Hỏi Đoàn luật sư nơi mình đăng ký."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "My best case still has no final result. Should I drop it?",
          "sub": "Vụ em nắm chắc nhất vẫn chưa có kết quả cuối cùng. Có nên bỏ không?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The circular sets no rule that the case must be finished.",
          "sub": "Thông tư không đặt điều kiện vụ phải kết thúc.",
          "keys": [
            "không đặt điều kiện"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p10,p12"
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
            "id": "e-keep",
            "t": "text",
            "text": "Giữ vụ, nói rõ: giai đoạn · việc mình · quan điểm",
            "x": 7932,
            "y": 370,
            "size": 30,
            "at": "l1:stage",
            "font": "base",
            "color": "accent"
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 430,
            "w": 44,
            "h": 44,
            "at": "l2:logbook",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 412,
            "size": 56,
            "at": "l2:logbook+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Sổ ghi vụ, việc cụ thể",
            "x": 8002,
            "y": 422,
            "size": 38,
            "at": "l2:logbook+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 492,
            "w": 44,
            "h": 44,
            "at": "l2:page",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 474,
            "size": 56,
            "at": "l2:page+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Một trang diễn biến theo mốc",
            "x": 8002,
            "y": 484,
            "size": 38,
            "at": "l2:page+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 554,
            "w": 44,
            "h": 44,
            "at": "l3:laws",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 536,
            "size": 56,
            "at": "l3:laws+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Văn bản áp dụng, còn hiệu lực",
            "x": 8002,
            "y": 546,
            "size": 38,
            "at": "l3:laws+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 616,
            "w": 44,
            "h": 44,
            "at": "l3:drafts",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 598,
            "size": 56,
            "at": "l3:drafts+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Bản nháp đã bỏ thông tin khách",
            "x": 8002,
            "y": 608,
            "size": 38,
            "at": "l3:drafts+200"
          },
          {
            "id": "e-c4",
            "t": "box",
            "x": 7932,
            "y": 678,
            "w": 44,
            "h": 44,
            "at": "l4:status",
            "stroke": 5
          },
          {
            "id": "e-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 660,
            "size": 56,
            "at": "l4:status+600",
            "color": "accent"
          },
          {
            "id": "e-l4",
            "t": "text",
            "text": "Kết quả hoặc tình trạng hiện tại",
            "x": 8002,
            "y": 670,
            "size": 38,
            "at": "l4:status+200"
          },
          {
            "id": "e-take",
            "t": "text",
            "text": "Chưa xong vẫn dùng được",
            "x": 8872,
            "y": 690,
            "size": 46,
            "at": "l5:unfinished",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn dùng được",
                "at": "l5:still works"
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
          "say": "Keep it. Just say which stage it's at, what you did, and your view on the way forward.",
          "sub": "Cứ giữ. Chỉ cần nói rõ vụ đang ở giai đoạn nào, mình đã làm gì, quan điểm của mình ra sao.",
          "keys": [
            "giai đoạn nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then a checklist. The logbook entry, with real tasks. A one page timeline by dates.",
          "sub": "Rồi một danh sách kiểm. Sổ có ghi vụ, việc cụ thể. Một trang diễn biến theo mốc ngày."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Applicable laws, checked as still in force. Your own drafts, client details removed.",
          "sub": "Văn bản áp dụng, đã kiểm còn hiệu lực. Bản nháp mình soạn, đã bỏ thông tin khách hàng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the result, or the current status.",
          "sub": "Và kết quả, hoặc tình trạng hiện tại."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "An unfinished case still works, if you say where it stands. Not sure? Ask your bar association.",
          "sub": "Vụ chưa xong vẫn dùng được nếu mình nói rõ nó đang ở đâu. Không chắc thì hỏi Đoàn luật sư.",
          "keys": [
            "vẫn dùng được"
          ]
        }
      ],
      "ref": "p11,p12,p13"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Vụ thật thì tên khách là thật. Kể sao đây?",
        "illus": "shushing-face"
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
          "say": "A real case has a real client. How do you tell it in public?",
          "sub": "Vụ thật thì khách hàng cũng thật. Kể trước Ban chấm thế nào?",
          "keys": [
            "khách hàng cũng thật"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
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
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Sáu · Ẩn khách hàng",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 900,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "stop"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "locked"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:friday",
            "caption": "Thứ Sáu · văn phòng cô Hoa",
            "icon": "locked"
          },
          {
            "id": "f-25",
            "t": "text",
            "text": "Đ25: cấm tiết lộ thông tin khách",
            "x": 60,
            "y": 1260,
            "size": 42,
            "at": "l3:twenty-five",
            "color": "coral",
            "hl": [
              {
                "text": "cấm tiết lộ",
                "at": "l3:forbids"
              }
            ]
          },
          {
            "id": "f-25b",
            "t": "text",
            "text": "trừ khi khách đồng ý bằng văn bản, hoặc luật khác quy định",
            "x": 60,
            "y": 1325,
            "size": 26,
            "at": "l3:writing",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "f-9",
            "t": "text",
            "text": "Đ9: hành vi nghiêm cấm",
            "x": 60,
            "y": 1380,
            "size": 40,
            "at": "l4:nine",
            "hl": [
              {
                "text": "nghiêm cấm",
                "at": "l4:banned"
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
          "say": "Friday. Thảo shows Ms Hoa, her supervising lawyer, the case she picked.",
          "sub": "Thứ Sáu. Thảo đưa cô Hoa, luật sư hướng dẫn, xem vụ mình chọn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Good case. But not one name, one address, or one number leaves this office.",
          "sub": "Vụ tốt. Nhưng không một cái tên, địa chỉ hay con số nào ra khỏi văn phòng này.",
          "pose": "stop"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article twenty-five forbids disclosing client information, unless the client agrees in writing or another law says otherwise.",
          "sub": "Điều 25 cấm tiết lộ thông tin khách hàng, trừ khi khách đồng ý bằng văn bản hoặc luật khác quy định.",
          "keys": [
            "cấm tiết lộ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article nine lists it among banned acts. Zip it like a pawn shop safe.",
          "sub": "Điều 9 xếp vào hành vi bị nghiêm cấm. Khoá kín như két hiệu cầm đồ.",
          "keys": [
            "hành vi bị nghiêm cấm"
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-71",
            "t": "text",
            "text": "Quy tắc 7.1: cả sau dịch vụ",
            "x": 60,
            "y": 1490,
            "size": 42,
            "at": "l1:after",
            "hl": [
              {
                "text": "cả sau dịch vụ",
                "at": "l1:after"
              }
            ]
          },
          {
            "id": "f-72",
            "t": "text",
            "text": "Quy tắc 7.2: đồng nghiệp cam kết",
            "x": 60,
            "y": 1560,
            "size": 40,
            "at": "l2:colleagues"
          },
          {
            "id": "f-ask",
            "t": "text",
            "text": "→ hỏi LS hướng dẫn cách trình bày",
            "x": 60,
            "y": 1630,
            "size": 42,
            "at": "l3:ask",
            "color": "accent"
          },
          {
            "id": "f-rm",
            "t": "text",
            "text": "Thay tên bằng vai; bỏ địa chỉ, số giấy tờ,",
            "x": 60,
            "y": 1710,
            "size": 28,
            "at": "l4:roles",
            "font": "base"
          },
          {
            "id": "f-rm2",
            "t": "text",
            "text": "số hợp đồng, số tài khoản",
            "x": 60,
            "y": 1750,
            "size": 28,
            "at": "l4:contract",
            "font": "base"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Rule seven point one of the 2019 Code: the duty lasts even after the service ends.",
          "sub": "Quy tắc 7.1 Bộ Quy tắc 2019: giữ bí mật kéo dài cả sau khi kết thúc dịch vụ.",
          "keys": [
            "cả sau khi kết thúc dịch vụ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Rule seven point two: lawyers ask colleagues and staff to commit to it too. Trainees included.",
          "sub": "Quy tắc 7.2: luật sư đề nghị đồng nghiệp, nhân viên liên quan cam kết không tiết lộ. Người tập sự cũng vậy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So ask your supervisor how to present it safely.",
          "sub": "Nên hỏi luật sư hướng dẫn cách trình bày cho an toàn.",
          "keys": [
            "cách trình bày cho an toàn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Usually: names become roles. Drop addresses, ID numbers, contract and account numbers.",
          "sub": "Cách thường dùng: thay tên bằng vai, bỏ địa chỉ, số giấy tờ, số hợp đồng, số tài khoản."
        }
      ],
      "ref": "p14,p15"
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
            "at": "l1",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tối thứ Sáu · Viết lại",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:friday night"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "home",
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
                  "at": "l1",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:friday night",
            "caption": "Tối thứ Sáu · ở nhà",
            "icon": "memo"
          },
          {
            "id": "g-be",
            "t": "text",
            "text": "Trước: Ông [họ tên], [địa chỉ], HĐ số [số]…",
            "x": 2028,
            "y": 1260,
            "size": 30,
            "at": "l2:address",
            "font": "base",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday night. Thảo rewrites her opening line.",
          "sub": "Tối thứ Sáu. Thảo viết lại câu mở đầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before: Mister so-and-so, at such address, director of such company, contract number such.",
          "sub": "Trước: “Ông [họ tên] ở [địa chỉ], giám đốc [tên công ty], ký hợp đồng số [số hợp đồng]…”"
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s16",
      "module": "BRK-04",
      "data": {
        "title": "Đoạn mở đầu của Thảo",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Ông [họ tên], giám đốc [công ty], hợp đồng số […]",
        "right": "Bên mua, một doanh nghiệp thương mại, và Bên bán",
        "wrongIllus": "identification-card",
        "rightIllus": "handshake"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: a name, a company, a number.",
          "sub": "Trước: tên người, tên công ty, số hợp đồng."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: the Buyer, a trading firm, and the Seller.",
          "sub": "Sau: Bên mua, một doanh nghiệp thương mại, và Bên bán.",
          "keys": [
            "Bên mua",
            "Bên bán"
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
            "id": "g-af",
            "t": "text",
            "text": "Sau: Bên mua ↔ Bên bán, giao chậm",
            "x": 2028,
            "y": 1340,
            "size": 44,
            "at": "l1:version",
            "color": "accent",
            "hl": [
              {
                "text": "giao chậm",
                "at": "l1:late delivery"
              }
            ]
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "Vẫn đủ vấn đề pháp lý",
            "x": 2028,
            "y": 1420,
            "size": 44,
            "at": "l1:legal issue"
          },
          {
            "id": "g-ok2",
            "t": "text",
            "text": "Không còn chỉ ra khách là ai",
            "x": 2028,
            "y": 1490,
            "size": 44,
            "at": "l1:who"
          },
          {
            "id": "g-take",
            "t": "text",
            "text": "Cần VẤN ĐỀ, không cần TÊN",
            "x": 2028,
            "y": 1690,
            "size": 52,
            "at": "l2:issue",
            "color": "accent",
            "hl": [
              {
                "text": "VẤN ĐỀ",
                "at": "l2:issue"
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
          "say": "The new version, a dispute over late delivery, still shows the legal issue. Nothing points to who the client is.",
          "sub": "Bản sau, tranh chấp vì giao hàng chậm, vẫn đủ nêu vấn đề pháp lý, mà không chi tiết nào chỉ ra khách là ai.",
          "keys": [
            "không chi tiết nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The panel needs the legal issue, not the client's identity.",
          "sub": "Ban chấm cần vấn đề pháp lý, không cần biết khách hàng là ai.",
          "keys": [
            "vấn đề pháp lý"
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
            "text": "⑥ Thứ Bảy · Chấm nhanh 3 vụ",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:saturday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "notebook",
                "check-mark-button"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:saturday",
            "caption": "Thứ Bảy · quán nước",
            "icon": "check-mark-button"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l2:tasks",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1242,
            "size": 56,
            "at": "l2:tasks+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Làm việc cụ thể?",
            "x": 4066,
            "y": 1252,
            "size": 42,
            "at": "l2:tasks+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1332,
            "w": 44,
            "h": 44,
            "at": "l2:disputed",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1314,
            "size": 56,
            "at": "l2:disputed+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Có điểm đang tranh cãi?",
            "x": 4066,
            "y": 1324,
            "size": 42,
            "at": "l2:disputed+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1404,
            "w": 44,
            "h": 44,
            "at": "l3:records",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1386,
            "size": 56,
            "at": "l3:records+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Đủ tài liệu, ghi chép?",
            "x": 4066,
            "y": 1396,
            "size": 42,
            "at": "l3:records+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1476,
            "w": 44,
            "h": 44,
            "at": "l3:client",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1458,
            "size": 56,
            "at": "l3:client+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Nói được, không lộ khách?",
            "x": 4066,
            "y": 1468,
            "size": 42,
            "at": "l3:client+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Saturday. Thảo scores all three cases with four yes or no questions.",
          "sub": "Thứ Bảy. Thảo chấm cả ba vụ bằng bốn câu có hoặc không.",
          "keys": [
            "bốn câu có hoặc không"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Did I do real tasks? Is a legal point disputed?",
          "sub": "Mình có làm việc cụ thể không? Có điểm pháp lý đang tranh cãi không?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Enough records? Can I tell it without exposing the client?",
          "sub": "Đủ tài liệu, ghi chép chưa? Kể được mà không lộ khách hàng không?"
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s19",
      "module": "BRK-11",
      "data": {
        "title": "Kết quả chấm 3 vụ",
        "items": [
          "Đủ 4 câu: ứng viên chính",
          "Đủ 3 câu: phương án dự phòng",
          "Vụ lớn đứng ngoài: loại"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three: the big one. Out.",
          "sub": "Ba: vụ lớn đứng ngoài. Loại."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two: three yeses. Backup.",
          "sub": "Hai: đủ ba câu. Dự phòng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "One: four yeses. Main case.",
          "sub": "Một: đủ bốn câu. Vụ chính.",
          "keys": [
            "Vụ chính"
          ]
        }
      ],
      "ref": "p18"
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
            "text": "⑦ Thứ Hai · Cô Hoa xem lại",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "give"
                }
              ],
              "props": [
                "notebook",
                "pen"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:monday",
            "caption": "Thứ Hai tuần sau · văn phòng",
            "icon": "notebook"
          },
          {
            "id": "i-13",
            "t": "text",
            "text": "Đ13: LS hướng dẫn xác nhận sổ",
            "x": 5964,
            "y": 1260,
            "size": 42,
            "at": "l3:thirteen",
            "hl": [
              {
                "text": "xác nhận sổ",
                "at": "l3:confirms"
              }
            ]
          },
          {
            "id": "i-13b",
            "t": "text",
            "text": "→ biết rõ nhất mình đã làm gì",
            "x": 5964,
            "y": 1330,
            "size": 40,
            "at": "l3:knows",
            "color": "muted"
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Đ5: trung thực, sự thật khách quan",
            "x": 5964,
            "y": 1420,
            "size": 38,
            "at": "l4:honesty",
            "color": "accent",
            "hl": [
              {
                "text": "trung thực",
                "at": "l4:honesty"
              }
            ]
          },
          {
            "id": "i-5b",
            "t": "text",
            "text": "Không thêm việc mình chưa làm",
            "x": 5964,
            "y": 1490,
            "size": 42,
            "at": "l4:add",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday. Thảo hands her choice to Ms Hoa.",
          "sub": "Thứ Hai tuần sau. Thảo đưa lựa chọn cho cô Hoa xem."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "This one. You drafted the research memo yourself, it's in your logbook.",
          "sub": "Vụ này. Em tự soạn bản nghiên cứu, sổ có ghi rõ.",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article thirteen: the supervisor confirms the logbook, so she knows best what you did.",
          "sub": "Điều 13: luật sư hướng dẫn theo dõi, xác nhận sổ, nên biết rõ nhất mình đã làm gì.",
          "keys": [
            "biết rõ nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And keep to article five: honesty, respect for objective truth. Don't add tasks you never did.",
          "sub": "Và giữ khoản 3 Điều 5: trung thực, tôn trọng sự thật khách quan. Không thêm việc mình chưa làm.",
          "keys": [
            "Không thêm việc mình chưa làm"
          ]
        }
      ],
      "ref": "p19"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tối thứ Hai · Lại cuốn sổ",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:monday night"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "notebook",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
            "at": "l1:monday night",
            "caption": "Tối thứ Hai · ở nhà",
            "icon": "notebook"
          },
          {
            "id": "j-book",
            "t": "illus",
            "name": "notebook",
            "x": 7952,
            "y": 1270,
            "size": 200,
            "at": "l1:logbook"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "② ◯ vụ chính",
            "x": 8192,
            "y": 1290,
            "size": 56,
            "at": "l2:circled",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "③ dự phòng",
            "x": 8192,
            "y": 1380,
            "size": 48,
            "at": "l2:backup",
            "color": "muted"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Chọn mặt gửi vàng”",
            "x": 7932,
            "y": 1560,
            "size": 50,
            "at": "l3:gold"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "…mặt quen mới gửi điểm",
            "x": 7932,
            "y": 1635,
            "size": 50,
            "at": "l4:familiar",
            "color": "accent",
            "hl": [
              {
                "text": "mặt quen",
                "at": "l4:familiar"
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
          "say": "Monday night again. The same logbook, the same three red marks.",
          "sub": "Lại tối thứ Hai. Vẫn cuốn sổ ấy, vẫn ba dấu mực đỏ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Not the biggest. The one I really worked on: circled. And one backup.",
          "sub": "Không phải vụ lớn nhất. Vụ em làm thật: khoanh lại. Thêm một vụ dự phòng.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pick the right face before trusting it with gold.",
          "sub": "“Chọn mặt gửi vàng.”",
          "keys": [
            "Chọn mặt gửi vàng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And for the exam, the right face is a familiar one.",
          "sub": "Còn đi thi, mặt quen mới là mặt đáng gửi điểm.",
          "keys": [
            "mặt quen"
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
      "ref": "p18,p5"
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
            "at": "l1:worked",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:argue",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:hidden",
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
            "x": 5496,
            "y": 690,
            "at": "l1:worked"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7464,
            "y": 690,
            "at": "l2:argue"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3528,
            "y": 1780,
            "at": "l3:hidden"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức nghề để tham khảo, không phải tư vấn vụ việc cụ thể; quy định có thể thay đổi, kiểm văn bản hiện hành. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1780,
            "size": 26,
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
          "say": "So: a case you really worked on, told within a trainee's role.",
          "sub": "Tóm lại: vụ mình làm thật, kể đúng vai người tập sự.",
          "keys": [
            "vụ mình làm thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A point to argue, and enough documents to back you.",
          "sub": "Có điểm để tranh cãi, đủ tài liệu để đỡ lưng.",
          "keys": [
            "điểm để tranh cãi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the client hidden behind a role.",
          "sub": "Và khách hàng ẩn sau một vai.",
          "keys": [
            "ẩn sau một vai"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "data": {
        "q": "What is the lesson from Thao's choice of case?",
        "options": [
          "A big case is always better, whatever role you played in it",
          "Any case works, because examiners never ask about your own role",
          "A small case you really worked on beats a big one you watched"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "notebook",
        "why": "Dòng Rút ra nói vụ lớn mà mình đứng ngoài thì nhỏ hơn vụ nhỏ mà mình làm thật. Ban chấm hỏi việc mình đã làm, không hỏi độ lớn của vụ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the lesson from Thao's choice of case?",
          "sub": "Bài học từ cách chọn vụ của Thảo là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A small case you really worked on beats a big one you watched.",
          "sub": "Vụ nhỏ mình làm thật hơn vụ lớn mình đứng ngoài."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[8]"
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now: score your three cases with four yes or no questions, then ask your supervisor.",
          "sub": "Việc làm ngay: chấm ba vụ theo bốn câu có hoặc không, rồi hỏi luật sư hướng dẫn.",
          "keys": [
            "bốn câu có hoặc không"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson turns that case into a short talk. Then, forty questions below!",
          "sub": "Bài sau biến vụ đã chọn thành một bài nói gọn. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-23",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): cuốn Sổ nhật ký tập sự có ba vụ đánh dấu (nối việc làm ngay của bài tổng) → kết lại đúng cuốn sổ, một vụ được khoanh. Dòng thời gian: MỘT TUẦN CHỌN VỤ của Thảo (tối thứ Hai mở sổ → thứ Ba tập thử vụ lớn với Dũng p4 + “Khoan đã!” Dũng nhận đã tranh luận tại tòa p6 → thứ Tư hai vụ của Dũng p7–p9 → thứ Năm tài liệu, vụ chưa xong p10–p13 → thứ Sáu cô Hoa: bí mật khách hàng p14–p15 → tối thứ Sáu viết lại đoạn mở p16–p17 → thứ Bảy chấm nhanh ba vụ p18 → thứ Hai cô Hoa xem p19 → tối thứ Hai khép vòng). Tục ngữ mở/khép: “Chọn mặt gửi vàng”. Nhân vật: Thảo, Dũng, cô Hoa (w145/_series/bar-exam-oral.md); câu “một người bạn nhận đã tranh luận tại tòa” (questions[10]) gán cho Dũng. BRK: 04 (vụ A/vụ B p8), 07 (rehook bí mật khách hàng), 04 (Trước/Sau p16), 11 (kết quả chấm 3 vụ p18). Điều khoản chỉ lấy từ bài: TT10 Đ6, Đ7, Đ13, Đ17 k2; Luật Luật sư Đ5 k3, Đ9 k1 c, Đ14, Đ25; Quy tắc 7.1, 7.2 (2019). Câu đố questions[8].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
