// en-email-subject-greeting-closing--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-email-subject-greeting-closing--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "en-email-office-workers",
    "slug": "en-email-subject-greeting-closing",
    "door": "ky-nang",
    "level": "B1",
    "title": "Mở đầu và kết thúc email tiếng Anh thế nào cho đúng mực?",
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
            "id": "a-dear",
            "t": "text",
            "text": "“Dear Tim,”",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l1:dear",
            "color": "accent"
          },
          {
            "id": "a-b1",
            "t": "box",
            "x": 60,
            "y": 360,
            "w": 420,
            "h": 110,
            "at": "l1:formal",
            "stroke": 5
          },
          {
            "id": "a-o1",
            "t": "text",
            "text": "Trang trọng?",
            "x": 90,
            "y": 378,
            "size": 60,
            "at": "l1:formal+200"
          },
          {
            "id": "a-b2",
            "t": "box",
            "x": 540,
            "y": 360,
            "w": 380,
            "h": 110,
            "at": "l1:informal",
            "stroke": 5
          },
          {
            "id": "a-o2",
            "t": "text",
            "text": "Thân mật?",
            "x": 570,
            "y": 378,
            "size": 60,
            "at": "l1:informal+200"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Đoán thử!",
            "x": 980,
            "y": 380,
            "size": 72,
            "at": "l2:guess",
            "color": "coral",
            "hl": [
              {
                "text": "Đoán",
                "at": "l2:guess"
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
          "say": "Dear Tim. Is that greeting formal, or informal?",
          "sub": "“Dear Tim,”. Lời chào này trang trọng, hay thân mật?",
          "keys": [
            "trang trọng, hay thân mật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Take a guess. Hold on to it.",
          "sub": "Đoán thử đi. Giữ lấy đáp án nhé.",
          "keys": [
            "Đoán thử"
          ]
        }
      ],
      "beats": {
        "after": 1500
      },
      "ref": "p7"
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
                "hot-beverage"
              ]
            },
            "at": "l1",
            "caption": "8:00 · sáu email chờ viết",
            "icon": "e-mail"
          },
          {
            "id": "a-6",
            "t": "text",
            "text": "1 ngày · 6 email",
            "x": 60,
            "y": 540,
            "size": 60,
            "at": "l2:six",
            "hl": [
              {
                "text": "6 email",
                "at": "l2:six emails"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đầu xuôi đuôi lọt”",
            "x": 60,
            "y": 640,
            "size": 60,
            "at": "l4:start",
            "color": "accent",
            "hl": [
              {
                "text": "Đầu xuôi",
                "at": "l4:smoothly"
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
          "say": "Meet Lan, new in purchasing.",
          "sub": "Đây là Lan, nhân viên mua hàng mới vào."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Today: six emails in English, morning to evening.",
          "sub": "Hôm nay: sáu email tiếng Anh, từ sáng tới chiều."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "The middle is fine. It's the first line and the last line that scare me.",
          "sub": "Phần giữa thì ổn. Câu đầu với câu cuối mới đáng sợ.",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: if the start goes smoothly, the end slides through.",
          "sub": "Ông bà nói: “Đầu xuôi đuôi lọt.”",
          "keys": [
            "Đầu xuôi đuôi lọt"
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
            "text": "Mở đầu, kết thúc: sao cho đúng?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:finish",
            "hl": [
              {
                "text": "Mở đầu, kết thúc",
                "at": "l1:finish"
              }
            ]
          },
          {
            "id": "b-wr",
            "t": "text",
            "text": "Sai mức → cộc lốc / khách sáo",
            "x": 2028,
            "y": 170,
            "size": 48,
            "at": "l2:wrong",
            "color": "coral"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: thêm chữ lịch sự",
            "x": 2028,
            "y": 255,
            "size": 48,
            "at": "l3:polite",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:frame"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: một khung 6 ô",
            "x": 2028,
            "y": 340,
            "size": 56,
            "at": "l3:frame",
            "color": "accent",
            "hl": [
              {
                "text": "khung 6 ô",
                "at": "l3:six boxes"
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
          "say": "So how do you start and finish a work email in English?",
          "sub": "Vậy mở đầu và kết thúc email tiếng Anh thế nào cho đúng mực?",
          "keys": [
            "mở đầu và kết thúc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Get the level wrong, and you sound rude, or stiff.",
          "sub": "Chào sai mức thì hoặc cộc lốc, hoặc khách sáo.",
          "keys": [
            "cộc lốc",
            "khách sáo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not more polite words. A fixed frame of six boxes.",
          "sub": "Không phải thêm chữ lịch sự. Mà là một khung sáu ô cố định.",
          "keys": [
            "khung sáu ô"
          ]
        }
      ],
      "ref": "intro"
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
            "id": "b-f0",
            "t": "text",
            "text": "① Tiêu đề nói việc",
            "x": 2968,
            "y": 150,
            "size": 44,
            "at": "l1:subject"
          },
          {
            "id": "b-f1",
            "t": "text",
            "text": "② Lời chào đúng mức",
            "x": 2968,
            "y": 216,
            "size": 44,
            "at": "l1:greeting"
          },
          {
            "id": "b-f2",
            "t": "text",
            "text": "③ Giới thiệu nếu lạ",
            "x": 2968,
            "y": 282,
            "size": 44,
            "at": "l1:who"
          },
          {
            "id": "b-f3",
            "t": "text",
            "text": "④ Câu nêu lý do",
            "x": 2968,
            "y": 348,
            "size": 44,
            "at": "l1:reason"
          },
          {
            "id": "b-f4",
            "t": "text",
            "text": "⑤ Câu kết: bước tiếp",
            "x": 2968,
            "y": 414,
            "size": 44,
            "at": "l2:next"
          },
          {
            "id": "b-f5",
            "t": "text",
            "text": "⑥ Chào cuối cùng giọng",
            "x": 2968,
            "y": 480,
            "size": 44,
            "at": "l2:sign"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "1 ngày · 6 chặng",
            "x": 2028,
            "y": 470,
            "size": 50,
            "at": "l3:six emails",
            "hl": [
              {
                "text": "6 chặng",
                "at": "l3:six emails"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l3:day+300",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2303,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l3:day+550",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2578,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l3:day+800",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2853,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l3:day+1050",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3128,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l3:day+1300",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3403,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l3:day+1550",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "8:30",
            "x": 2068,
            "y": 575,
            "size": 46,
            "at": "l3:day+400"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "9:30",
            "x": 2343,
            "y": 575,
            "size": 46,
            "at": "l3:day+650"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "10:30",
            "x": 2618,
            "y": 575,
            "size": 46,
            "at": "l3:day+900"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "11:00",
            "x": 2893,
            "y": 575,
            "size": 46,
            "at": "l3:day+1150"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "14:00",
            "x": 3168,
            "y": 575,
            "size": 46,
            "at": "l3:day+1400"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "16:00",
            "x": 3443,
            "y": 575,
            "size": 46,
            "at": "l3:day+1650"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Subject. Greeting. Who you are, if they don't know you. Your reason.",
          "sub": "Tiêu đề. Lời chào. Bạn là ai, nếu người đọc chưa biết. Lý do viết."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A next step. And a sign off in the same tone.",
          "sub": "Câu kết nêu bước tiếp theo. Và lời chào cuối cùng giọng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then only the middle is left. Six emails, one day. Go!",
          "sub": "Nắm khung rồi, mỗi thư chỉ còn phải nghĩ phần giữa. Sáu email, một ngày. Đi nào!",
          "keys": [
            "chỉ còn phải nghĩ phần giữa"
          ]
        }
      ],
      "ref": "intro,p22"
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
            "text": "① 8:30 · Dòng tiêu đề",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:thirty"
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
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l1:thảo",
            "caption": "8:30 · nhờ đối tác gửi lại báo giá",
            "icon": "page-facing-up"
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "Tiêu đề: “Quotation”",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "l2:quotation",
            "color": "coral"
          },
          {
            "id": "c-w",
            "t": "text",
            "text": "Làm gì? Trước khi nào?",
            "x": 3996,
            "y": 255,
            "size": 48,
            "at": "l3:what",
            "color": "muted",
            "hl": [
              {
                "text": "Trước khi nào",
                "at": "l3:by when"
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
          "say": "Stop one: eight thirty. This is Thảo, Lan's senior, who needs an updated quote by Friday.",
          "sub": "Chặng một: tám rưỡi. Đây là Thảo, chị khoá trên của Lan, cần đối tác gửi lại báo giá trước thứ Sáu.",
          "keys": [
            "trước thứ Sáu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Subject: Quotation. Short and neat.",
          "sub": "Tiêu đề: “Quotation”. Gọn gàng.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Neat, but it only names the topic. What should they do? By when?",
          "sub": "Gọn, nhưng chỉ nêu chủ đề. Người nhận cần làm gì? Trước khi nào?",
          "keys": [
            "chỉ nêu chủ đề"
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
      "ref": "p3"
    },
    {
      "id": "s05",
      "module": "BRK-04",
      "data": {
        "title": "Tiêu đề của Thảo",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Chỉ ghi: Quotation",
        "right": "Updated quotation needed by this Friday",
        "wrongIllus": "envelope",
        "rightIllus": "incoming-envelope"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: Quotation.",
          "sub": "Trước: “Quotation”."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: Updated quotation needed by this Friday.",
          "sub": "Sau: “Updated quotation needed by this Friday.” (Cần báo giá cập nhật trước thứ Sáu này)",
          "keys": [
            "trước thứ Sáu này"
          ]
        }
      ],
      "ref": "p3"
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
            "id": "c-qx",
            "t": "strike",
            "over": "c-q",
            "at": "l1:main point"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "việc gì + về cái gì",
            "x": 3996,
            "y": 340,
            "size": 56,
            "at": "l2:two parts",
            "color": "accent",
            "hl": [
              {
                "text": "việc gì",
                "at": "l2:task"
              }
            ]
          },
          {
            "id": "c-e1",
            "t": "text",
            "text": "Request for the signed contract",
            "x": 3996,
            "y": 420,
            "size": 38,
            "at": "l3:request"
          },
          {
            "id": "c-e2",
            "t": "text",
            "text": "Question about the March invoice",
            "x": 3996,
            "y": 480,
            "size": 38,
            "at": "l3:march"
          },
          {
            "id": "c-date",
            "t": "text",
            "text": "Có hạn → ghi ngày",
            "x": 4816,
            "y": 685,
            "size": 48,
            "at": "l4:date",
            "hl": [
              {
                "text": "ghi ngày",
                "at": "l4:date"
              }
            ]
          },
          {
            "id": "c-key",
            "t": "text",
            "text": "“Thư này cần tôi làm gì?”",
            "x": 3996,
            "y": 580,
            "size": 54,
            "at": "l5:what do you need",
            "color": "accent",
            "hl": [
              {
                "text": "cần tôi làm gì",
                "at": "l5:need me"
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
          "say": "UNC's Writing Center: give the main point. Hi, Question or FYI say nothing.",
          "sub": "Đại học North Carolina khuyên: tiêu đề nêu ý chính. “Hi”, “Question”, “FYI” chẳng nói gì."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A clear subject has two parts: the task, and the topic.",
          "sub": "Tiêu đề rõ có hai phần: việc gì, và về cái gì.",
          "keys": [
            "việc gì, và về cái gì"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Request for the signed contract. Question about the March invoice.",
          "sub": "“Request for the signed contract.” (Xin hợp đồng đã ký) “Question about the March invoice.” (Hỏi về hoá đơn tháng Ba)"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "UNC Charlotte adds: a deadline? Put the date in the subject.",
          "sub": "Đại học North Carolina tại Charlotte thêm: việc có hạn thì ghi ngày vào tiêu đề.",
          "keys": [
            "ghi ngày vào tiêu đề"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A good subject answers: what do you need me to do?",
          "sub": "Tiêu đề tốt trả lời luôn: “Thư này cần tôi làm gì?”",
          "keys": [
            "Thư này cần tôi làm gì?"
          ]
        }
      ],
      "ref": "p1,p2,p4"
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
            "at": "l3:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 9:30 · Dear hay Hi?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:thirty"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "globe-showing-europe-africa"
              ]
            },
            "at": "l1:tim",
            "caption": "9:30 · đồng nghiệp mới ở chi nhánh Anh",
            "icon": "globe-showing-europe-africa"
          },
          {
            "id": "d-guess",
            "t": "text",
            "text": "“Dear Tim,” = ?",
            "x": 5964,
            "y": 170,
            "size": 56,
            "at": "l2:guess",
            "color": "muted"
          },
          {
            "id": "d-hey",
            "t": "text",
            "text": "“Hey Tim!”",
            "x": 5964,
            "y": 260,
            "size": 64,
            "at": "l3:hey",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: nine thirty. Lan writes to Tim, a new colleague at the UK branch.",
          "sub": "Chặng hai: chín rưỡi. Lan viết cho Tim, đồng nghiệp mới ở chi nhánh bên Anh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Remember our guess? Dear Tim: formal or informal?",
          "sub": "Nhớ câu đố đầu bài chứ? “Dear Tim,”: trang trọng hay thân mật?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Dear is for very formal letters. A colleague? Hey Tim!",
          "sub": "“Dear” chỉ dành cho thư rất trang trọng. Đồng nghiệp thì… “Hey Tim!”",
          "face": "happy",
          "pose": "phone"
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thư cho đồng nghiệp mới",
        "actors": [
          {
            "id": "lan",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Tưởng “Dear” chỉ dành cho thư rất trang trọng",
          "why": "Trong bảng của British Council, “Dear Tim,” dùng được cho cả hai giọng; “Hey” không có trong danh sách.",
          "rule": "“Dear” cộng tên gọi: lịch sự mà không xa cách"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Hey Tim! And... send.",
          "sub": "“Hey Tim!” Và... gửi.",
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
          "say": "Here's the answer to our guess. Dear Tim works for both, formal and informal.",
          "sub": "Đáp án câu đố đây: “Dear Tim,” dùng được cho cả hai, trang trọng lẫn thân mật.",
          "keys": [
            "cả hai"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And Hey isn't on British Council's list of email greetings at all.",
          "sub": "Còn “Hey” không có trong danh sách lời chào email của British Council."
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
          "who": "lan",
          "say": "Dear Tim, or Hi Tim. Safe either way.",
          "sub": "“Dear Tim,” hoặc “Hi Tim,”. Kiểu nào cũng chắc ăn.",
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
      "ref": "p7"
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
            "id": "d-heyx",
            "t": "strike",
            "over": "d-hey",
            "at": "l1:sorts"
          },
          {
            "id": "d-f",
            "t": "text",
            "text": "Trang trọng: Dear Mr Piper",
            "x": 5964,
            "y": 360,
            "size": 44,
            "at": "l1:formal",
            "hl": [
              {
                "text": "Trang trọng",
                "at": "l1:formal"
              }
            ]
          },
          {
            "id": "d-i",
            "t": "text",
            "text": "Thân mật: Hi Tim · Morning Tim",
            "x": 5964,
            "y": 430,
            "size": 42,
            "at": "l2:informal"
          },
          {
            "id": "d-b",
            "t": "text",
            "text": "Cả hai: Dear Tim",
            "x": 5964,
            "y": 505,
            "size": 54,
            "at": "l3:both",
            "color": "accent",
            "hl": [
              {
                "text": "Cả hai",
                "at": "l3:both"
              }
            ]
          },
          {
            "id": "d-ti",
            "t": "text",
            "text": "Mr + họ · hay chỉ tên gọi",
            "x": 5964,
            "y": 590,
            "size": 44,
            "at": "l4:title"
          },
          {
            "id": "d-key",
            "t": "text",
            "text": "Dear + tên: lịch sự, không xa",
            "x": 6784,
            "y": 685,
            "size": 44,
            "at": "l6:polite",
            "color": "accent",
            "hl": [
              {
                "text": "không xa",
                "at": "l6:distant"
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
          "say": "British Council sorts greetings by tone. Formal only: Dear Mr Piper, Dear Sir or Madam.",
          "sub": "British Council chia lời chào theo mức. Chỉ trang trọng: “Dear Mr Piper,”, “Dear Sir or Madam,”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Informal only: Hi Tim, Morning Tim, Hello again Tim.",
          "sub": "Chỉ thân mật: “Hi Tim,”, “Morning Tim,”, “Hello again Tim,”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Both: Dear Tim, and Good morning Tim.",
          "sub": "Cả hai: “Dear Tim,”, “Good morning Tim,”.",
          "keys": [
            "Cả hai"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Formal uses a title plus surname, Mr Piper. Informal, just the first name.",
          "sub": "Trang trọng dùng danh xưng kèm họ: “Mr Piper”. Thân mật dùng tên gọi: “Tim”."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not sure? Go more formal. Habits also differ between countries.",
          "sub": "Phân vân thì chọn trang trọng hơn. Thói quen mỗi nước cũng khác nhau.",
          "keys": [
            "chọn trang trọng hơn"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Dear plus a first name: polite, but not distant.",
          "sub": "“Dear” cộng tên gọi: lịch sự mà không xa cách.",
          "keys": [
            "lịch sự mà không xa cách"
          ]
        }
      ],
      "ref": "p5,p6,p8"
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
            "at": "l2",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
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
            "id": "e-t",
            "t": "text",
            "text": "③ 10:30 · Không biết tên",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:thirty"
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
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "inbox-tray"
              ]
            },
            "at": "l1:shipping",
            "caption": "10:30 · hộp thư chung hãng vận chuyển",
            "icon": "inbox-tray"
          },
          {
            "id": "e-who",
            "t": "text",
            "text": "Dear… ai?",
            "x": 7932,
            "y": 170,
            "size": 64,
            "at": "l2:who",
            "color": "coral"
          },
          {
            "id": "e-sir",
            "t": "text",
            "text": "Dear Sir or Madam,",
            "x": 7932,
            "y": 270,
            "size": 50,
            "at": "l3:sir"
          },
          {
            "id": "e-team",
            "t": "text",
            "text": "Dear Customer Service Team,",
            "x": 7932,
            "y": 350,
            "size": 44,
            "at": "l4:team",
            "color": "accent",
            "hl": [
              {
                "text": "Team",
                "at": "l4:team"
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
          "say": "Stop three: ten thirty. Lan writes to a shipping company's shared inbox. No name anywhere.",
          "sub": "Chặng ba: mười rưỡi. Lan viết vào hộp thư chung của một hãng vận chuyển. Chẳng thấy tên ai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Dear... who? Dear Nobody?",
          "sub": "“Dear”... ai đây? “Dear Không Ai”?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "British Council lists Dear Sir or Madam as a formal greeting.",
          "sub": "British Council xếp “Dear Sir or Madam,” vào nhóm lời chào trang trọng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Friendlier: greet the team or the job title. Dear Customer Service Team.",
          "sub": "Thân thiện hơn: chào theo bộ phận, chức danh. “Dear Customer Service Team,”.",
          "keys": [
            "chào theo bộ phận"
          ]
        }
      ],
      "ref": "p9"
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
            "id": "e-name",
            "t": "text",
            "text": "Tìm được tên? Dùng tên",
            "x": 7932,
            "y": 440,
            "size": 48,
            "at": "l1:find",
            "hl": [
              {
                "text": "Dùng tên",
                "at": "l1:name"
              }
            ]
          },
          {
            "id": "e-uk",
            "t": "text",
            "text": "Anh: Hi Tim,",
            "x": 7932,
            "y": 520,
            "size": 50,
            "at": "l2:british"
          },
          {
            "id": "e-us",
            "t": "text",
            "text": "Mỹ: Hi, Tim,",
            "x": 8292,
            "y": 520,
            "size": 50,
            "at": "l2:american"
          },
          {
            "id": "e-cons",
            "t": "text",
            "text": "Phẩy sau tên · thống nhất",
            "x": 8752,
            "y": 685,
            "size": 44,
            "at": "l3:consistent",
            "color": "accent",
            "hl": [
              {
                "text": "thống nhất",
                "at": "l3:consistent"
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
          "say": "Better still, find a name on the company website, or in an old signature. A name feels closer.",
          "sub": "Tốt hơn nữa: tìm tên trên trang web công ty, hay chữ ký thư trước. Có tên thì gần gũi hơn.",
          "keys": [
            "tìm tên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Commas? British style: Hi Tim, no comma after Hi. American style: Hi, Tim.",
          "sub": "Dấu phẩy? Kiểu Anh: “Hi Tim,”, không phẩy sau “Hi”. Kiểu Mỹ: “Hi, Tim,”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Both put a comma after the name, then a new line. Just stay consistent.",
          "sub": "Cả hai đều phẩy sau tên rồi xuống dòng. Quan trọng là thống nhất cả thư.",
          "keys": [
            "thống nhất"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Thư gửi Hàn Quốc rất lịch sự. Sao lại nhận về toàn câu hỏi?",
        "illus": "red-question-mark"
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
          "say": "A polite email to Korea. So why did it come back full of questions?",
          "sub": "Thư gửi Hàn Quốc rất lịch sự. Sao lại nhận về toàn câu hỏi?",
          "keys": [
            "toàn câu hỏi"
          ]
        }
      ],
      "ref": "p13"
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
            "text": "④ 11:00 · Câu mở đầu",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:eleven"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "globe-showing-asia-australia",
                "page-with-curl"
              ]
            },
            "at": "l1:korea",
            "caption": "11:00 · nhà cung cấp mới ở Hàn Quốc",
            "icon": "globe-showing-asia-australia"
          },
          {
            "id": "f-mail",
            "t": "text",
            "text": "“Please send me your catalogue…”",
            "x": 60,
            "y": 1260,
            "size": 42,
            "at": "l2:catalogue"
          },
          {
            "id": "f-2d",
            "t": "text",
            "text": "2 ngày sau: “Chị là ai?”",
            "x": 60,
            "y": 1340,
            "size": 52,
            "at": "l3:two days",
            "color": "coral",
            "hl": [
              {
                "text": "Chị là ai?",
                "at": "l3:which company"
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
          "say": "Stop four: eleven a.m. Lan's first email to Mr Kim, a new supplier in Korea.",
          "sub": "Chặng bốn: mười một giờ. Lan viết thư đầu tiên cho anh Kim, nhà cung cấp mới ở Hàn Quốc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Dear Mr Kim, please send me your catalogue and price list. Regards, Lan.",
          "sub": "“Dear Mr Kim, please send me your catalogue and price list. Regards, Lan.”",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two days later: which company are you from? Which project? Only then, the documents.",
          "sub": "Hai ngày sau, thư trả lời hỏi lại: Lan làm ở công ty nào, cần cho dự án gì. Rồi họ mới gửi tài liệu.",
          "keys": [
            "công ty nào"
          ]
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-key",
            "t": "text",
            "text": "Bạn là ai → rồi bạn cần gì",
            "x": 60,
            "y": 1430,
            "size": 50,
            "at": "l1:who you are",
            "color": "accent",
            "hl": [
              {
                "text": "Bạn là ai",
                "at": "l1:who you are"
              }
            ]
          },
          {
            "id": "f-intro",
            "t": "text",
            "text": "My name is… I am a…",
            "x": 60,
            "y": 1510,
            "size": 46,
            "at": "l2:name"
          },
          {
            "id": "f-hope",
            "t": "text",
            "text": "I hope this email finds you well.",
            "x": 60,
            "y": 1590,
            "size": 36,
            "at": "l3:hope",
            "color": "muted"
          },
          {
            "id": "f-opt",
            "t": "text",
            "text": "= tuỳ chọn",
            "x": 620,
            "y": 1590,
            "size": 40,
            "at": "l3:optional",
            "color": "coral",
            "hl": [
              {
                "text": "tuỳ chọn",
                "at": "l3:optional"
              }
            ]
          },
          {
            "id": "f-thx",
            "t": "text",
            "text": "Many thanks for your help.",
            "x": 880,
            "y": 1775,
            "size": 42,
            "at": "l4:many thanks",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A stranger needs to know who you are before what you need.",
          "sub": "Người lạ cần biết bạn là ai trước khi biết bạn cần gì.",
          "keys": [
            "bạn là ai trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So: My name is Lan, and I am a buyer at… I am writing to…",
          "sub": "Vậy: “My name is Lan, and I am a buyer at… I am writing to…” (Tôi tên Lan, tôi là… Tôi viết thư để…)"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "I hope this email finds you well? LearnEnglish says it's optional. Going straight to I am writing to is fine.",
          "sub": "“I hope this email finds you well.”? LearnEnglish: tuỳ chọn. Vào thẳng “I am writing to…” hoàn toàn ổn.",
          "keys": [
            "tuỳ chọn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Replying to someone who helped? Open with thanks: Many thanks for your help.",
          "sub": "Trả lời người đã giúp mình? Mở bằng lời cảm ơn: “Many thanks for your help.”"
        }
      ],
      "ref": "p11,p12,p14"
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
            "at": "l3",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 14:00 · Câu kết",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:two"
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
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "envelope-with-arrow"
              ]
            },
            "at": "l1:dũng",
            "caption": "14:00 · bàn bên, phòng kinh doanh",
            "icon": "envelope-with-arrow"
          },
          {
            "id": "g-wait",
            "t": "text",
            "text": "I'm waiting for your response.",
            "x": 2028,
            "y": 1260,
            "size": 40,
            "at": "l2:waiting",
            "color": "coral"
          },
          {
            "id": "g-waitx",
            "t": "strike",
            "over": "g-wait",
            "at": "l3:pushing"
          },
          {
            "id": "g-look",
            "t": "text",
            "text": "I look forward to hearing…",
            "x": 2028,
            "y": 1340,
            "size": 44,
            "at": "l3:look forward",
            "color": "accent",
            "hl": [
              {
                "text": "look forward",
                "at": "l3:look forward"
              }
            ]
          },
          {
            "id": "g-next",
            "t": "text",
            "text": "Câu kết = bước tiếp theo",
            "x": 2028,
            "y": 1420,
            "size": 48,
            "at": "l4:next step",
            "hl": [
              {
                "text": "bước tiếp theo",
                "at": "l4:next step"
              }
            ]
          },
          {
            "id": "g-fri",
            "t": "text",
            "text": "Let me know by Friday?",
            "x": 2028,
            "y": 1495,
            "size": 44,
            "at": "l4:friday"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: two p.m. And this is Dũng, from sales, at the next desk.",
          "sub": "Chặng năm: hai giờ chiều. Còn đây là Dũng, phòng kinh doanh, bàn bên cạnh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I always end with: I'm waiting for your response. Professional, right?",
          "sub": "Thư nào em cũng kết: “I'm waiting for your response.” Chuyên nghiệp chứ nhỉ?",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Break Into English says it sounds like pushing. Use: I look forward to hearing from you.",
          "sub": "Break Into English: câu ấy nghe như đang giục. Thay bằng “I look forward to hearing from you.”",
          "keys": [
            "nghe như đang giục"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "UNC Charlotte: end with the next step. Could you please let me know by Friday?",
          "sub": "Đại học North Carolina tại Charlotte: kết bằng bước tiếp theo. “Could you please let me know by Friday?”",
          "keys": [
            "bước tiếp theo"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Or: Please let me know if you need any further information.",
          "sub": "Hoặc: “Please let me know if you need any further information.”"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p15,p16"
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
            "at": "l2",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
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
            "id": "g-box",
            "t": "box",
            "x": 2018,
            "y": 1560,
            "w": 800,
            "h": 250,
            "at": "l1:model",
            "stroke": 4
          },
          {
            "id": "g-m1",
            "t": "text",
            "text": "Dear Mr Piper,",
            "x": 2048,
            "y": 1570,
            "size": 38,
            "at": "l1:dear"
          },
          {
            "id": "g-m2",
            "t": "text",
            "text": "I am writing to thank you…",
            "x": 2048,
            "y": 1620,
            "size": 38,
            "at": "l2:thank"
          },
          {
            "id": "g-m3",
            "t": "text",
            "text": "I will send our feedback…",
            "x": 2048,
            "y": 1670,
            "size": 38,
            "at": "l3:feedback"
          },
          {
            "id": "g-m4",
            "t": "text",
            "text": "With best wishes,",
            "x": 2048,
            "y": 1720,
            "size": 38,
            "at": "l3:wishes"
          },
          {
            "id": "g-key",
            "t": "text",
            "text": "Bước tiếp + giữ giọng",
            "x": 2848,
            "y": 1775,
            "size": 48,
            "at": "l4:next step",
            "color": "accent",
            "hl": [
              {
                "text": "giữ giọng",
                "at": "l4:tone"
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
          "say": "Dũng's model, a formal thank you. Dear Mr Piper, comma, new line.",
          "sub": "Mẫu của Dũng, thư cảm ơn trang trọng. “Dear Mr Piper,” rồi xuống dòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I am writing to thank you for all your help with the training materials.",
          "sub": "“I am writing to thank you for all your help with the training materials.”",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I will send you our feedback next week. With best wishes, and my full name.",
          "sub": "“I will send you our feedback next week.” “With best wishes,” rồi họ tên đầy đủ.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four lines, full frame. The last line gives the next step, the sign off keeps the tone.",
          "sub": "Bốn dòng, đủ khung. Câu cuối nói bước tiếp theo, lời chào cuối giữ giọng.",
          "keys": [
            "lời chào cuối giữ giọng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "With colleagues, lighter: Thanks for your help, let me know if you need anything.",
          "sub": "Với đồng nghiệp đã quen, nhẹ hơn: “Thanks for your help, let me know if you need anything from me.”"
        }
      ],
      "ref": "p16,p17,p18"
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
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 16:00 · Lời chào cuối",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:four"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "necktie"
              ]
            },
            "at": "l1:manager",
            "caption": "16:00 · sếp mới người Anh, chưa gặp",
            "icon": "necktie"
          },
          {
            "id": "h-b1",
            "t": "box",
            "x": 3996,
            "y": 1270,
            "w": 240,
            "h": 100,
            "at": "l2:cheers",
            "stroke": 5
          },
          {
            "id": "h-o1",
            "t": "text",
            "text": "Cheers,",
            "x": 4021,
            "y": 1285,
            "size": 54,
            "at": "l2:cheers+150"
          },
          {
            "id": "h-b2",
            "t": "box",
            "x": 4256,
            "y": 1270,
            "w": 210,
            "h": 100,
            "at": "l2:rgds",
            "stroke": 5
          },
          {
            "id": "h-o2",
            "t": "text",
            "text": "Rgds,",
            "x": 4286,
            "y": 1285,
            "size": 54,
            "at": "l2:rgds+150"
          },
          {
            "id": "h-b3",
            "t": "box",
            "x": 4486,
            "y": 1270,
            "w": 290,
            "h": 100,
            "at": "l2:regards",
            "stroke": 5
          },
          {
            "id": "h-o3",
            "t": "text",
            "text": "Regards,",
            "x": 4511,
            "y": 1285,
            "size": 54,
            "at": "l2:regards+150"
          },
          {
            "id": "h-you",
            "t": "text",
            "text": "Bạn chọn?",
            "x": 3996,
            "y": 1410,
            "size": 56,
            "at": "l3:your turn",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: four p.m. Lan's first email to her new British manager. They've never met.",
          "sub": "Chặng sáu: bốn giờ chiều. Thư đầu tiên Lan gửi sếp mới người Anh, chưa gặp lần nào."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Cheers, Rgds, or Regards?",
          "sub": "“Cheers,”, “Rgds,” hay “Regards,”?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Pick one before Lan does.",
          "sub": "Đến lượt bạn. Chọn trước Lan đi.",
          "keys": [
            "Chọn trước Lan"
          ]
        }
      ],
      "beats": {
        "after": 1200
      },
      "ref": "p20"
    },
    {
      "id": "s18",
      "module": "BRK-12",
      "data": {
        "word": "Regards,",
        "sub": "Dùng được cả trang trọng lẫn thân mật",
        "from": [
          1300,
          420
        ],
        "others": [
          "Cheers,",
          "Rgds,"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Regards.",
          "sub": "“Regards,”."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Safe for both tones, and right for a manager.",
          "sub": "Dùng được cả hai giọng, lại hợp với thư gửi quản lý.",
          "keys": [
            "cả hai giọng"
          ]
        }
      ],
      "ref": "p20"
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
            "id": "h-x1",
            "t": "strike",
            "over": "h-o1",
            "at": "l1:cheers"
          },
          {
            "id": "h-x2",
            "t": "strike",
            "over": "h-o2",
            "at": "l1:rgds"
          },
          {
            "id": "h-r",
            "t": "ring",
            "around": [
              "h-b3"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l1:regards"
          },
          {
            "id": "h-f",
            "t": "text",
            "text": "Trang trọng: Yours sincerely,",
            "x": 3996,
            "y": 1500,
            "size": 42,
            "at": "l2:sincerely"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "Cả hai: With best wishes,",
            "x": 3996,
            "y": 1570,
            "size": 42,
            "at": "l3:both"
          },
          {
            "id": "h-i",
            "t": "text",
            "text": "Thân mật: See you soon,",
            "x": 3996,
            "y": 1640,
            "size": 42,
            "at": "l4:informal"
          },
          {
            "id": "h-key",
            "t": "text",
            "text": "Chưa chắc: Regards · thân: Cheers",
            "x": 4816,
            "y": 1775,
            "size": 40,
            "at": "l5:not sure",
            "color": "accent",
            "hl": [
              {
                "text": "Regards",
                "at": "l5:regards"
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
          "say": "Cheers and Rgds are informal only. Regards suits both tones.",
          "sub": "“Cheers,” và “Rgds,” chỉ dùng cho thư thân mật. “Regards,” dùng được cả hai giọng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Formal only, says British Council: Yours sincerely, Yours faithfully, Yours truly.",
          "sub": "Chỉ trang trọng, theo British Council: “Yours sincerely,”, “Yours faithfully,”, “Yours truly,”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Both: Regards, With best wishes, With many thanks and best wishes.",
          "sub": "Cả hai: “Regards,”, “With best wishes,”, “With many thanks and best wishes,”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Informal only: Rgds, Cheers, Bye for now, See you soon. Then a comma, and your name below.",
          "sub": "Chỉ thân mật: “Rgds,”, “Cheers,”, “Bye for now,”, “See you soon,”. Sau đó dấu phẩy, tên ở dòng mới."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not sure? Regards. Close already? Then Cheers.",
          "sub": "Chưa chắc thì “Regards”, thân rồi hãy “Cheers”.",
          "keys": [
            "Chưa chắc thì “Regards”"
          ]
        }
      ],
      "ref": "p19,p21"
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
            "at": "l5",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "17:30 · Hai thư cuối ngày",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:five thirty"
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
                  "enter": "pop",
                  "at": "l3",
                  "face": "happy",
                  "pose": "wave"
                }
              ],
              "props": [
                "sunset"
              ]
            },
            "at": "l1:last",
            "caption": "17:30 · thư cho Tim, thư cho Sam",
            "icon": "sunset"
          },
          {
            "id": "j-tim",
            "t": "text",
            "text": "Tim: Dear Tim, … Regards,",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l2:tim"
          },
          {
            "id": "j-sam",
            "t": "text",
            "text": "Sam: Hi Sam, … Cheers,",
            "x": 7932,
            "y": 1340,
            "size": 46,
            "at": "l2:sam",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Đầu xuôi đuôi lọt” ✓",
            "x": 7932,
            "y": 1410,
            "size": 50,
            "at": "l5:start",
            "color": "accent",
            "hl": [
              {
                "text": "đuôi lọt",
                "at": "l5:end"
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
          "say": "Five thirty. Same Lan, the last two emails of the day.",
          "sub": "Năm rưỡi chiều. Vẫn Lan ấy, hai thư cuối ngày."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "To Tim: Dear Tim, I am writing to... Regards. To Sam: Hi Sam, many thanks... Cheers!",
          "sub": "Gửi Tim: “Dear Tim, I am writing to… Regards,”. Gửi Sam: “Hi Sam, Many thanks… Cheers,”!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Sam, Lan's partner in Melbourne. Close enough for Cheers.",
          "sub": "Còn đây là Sam, đối tác ở Melbourne, đã đủ thân để “Cheers”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Cheers, Lan! Have a lovely evening.",
          "sub": "Cheers, Lan! Chúc em buổi tối vui nhé.",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "If the start goes smoothly, the end slides through. Today, both ends did.",
          "sub": "“Đầu xuôi đuôi lọt.” Hôm nay cả đầu lẫn đuôi đều xuôi.",
          "keys": [
            "cả đầu lẫn đuôi đều xuôi"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "outro,p21"
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
          }
        ],
        "items": [
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1515,
            "w": 40,
            "h": 40,
            "at": "l1:subject",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1499,
            "size": 50,
            "at": "l1:subject+500",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Tiêu đề nói việc, có ngày",
            "x": 7994,
            "y": 1507,
            "size": 36,
            "at": "l1:subject+150"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1571,
            "w": 40,
            "h": 40,
            "at": "l1:greeting",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1555,
            "size": 50,
            "at": "l1:greeting+500",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Lời chào đúng mức thân",
            "x": 7994,
            "y": 1563,
            "size": 36,
            "at": "l1:greeting+150"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1627,
            "w": 40,
            "h": 40,
            "at": "l2:introduce",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1611,
            "size": 50,
            "at": "l2:introduce+500",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Giới thiệu nếu người lạ",
            "x": 7994,
            "y": 1619,
            "size": 36,
            "at": "l2:introduce+150"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1683,
            "w": 40,
            "h": 40,
            "at": "l2:reason",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1667,
            "size": 50,
            "at": "l2:reason+500",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Một câu nêu lý do",
            "x": 7994,
            "y": 1675,
            "size": 36,
            "at": "l2:reason+150"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1739,
            "w": 40,
            "h": 40,
            "at": "l3:next",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1723,
            "size": 50,
            "at": "l3:next+500",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Câu kết: bước tiếp theo",
            "x": 7994,
            "y": 1731,
            "size": 36,
            "at": "l3:next+150"
          },
          {
            "id": "j-c5",
            "t": "box",
            "x": 7932,
            "y": 1795,
            "w": 40,
            "h": 40,
            "at": "l3:sign",
            "stroke": 5
          },
          {
            "id": "j-k5",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1779,
            "size": 50,
            "at": "l3:sign+500",
            "color": "accent"
          },
          {
            "id": "j-l5",
            "t": "text",
            "text": "Chào cuối cùng giọng",
            "x": 7994,
            "y": 1787,
            "size": 36,
            "at": "l3:sign+150"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Lan's checklist before every send: a subject with the task, and a date if urgent. The right greeting.",
          "sub": "Danh sách Lan soát trước khi gửi: tiêu đề nói việc, có ngày nếu gấp. Lời chào đúng mức thân."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Introduce yourself to strangers. One line with your reason.",
          "sub": "Giới thiệu bản thân nếu người đọc chưa biết bạn. Một câu nêu lý do."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A next step. And a sign off that matches the greeting.",
          "sub": "Câu kết nêu bước tiếp theo. Lời chào cuối cùng giọng với lời chào đầu.",
          "keys": [
            "cùng giọng"
          ]
        }
      ],
      "ref": "p22"
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
            "at": "l1:subject",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:dear",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:strangers",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4:regards",
            "fit": "H",
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
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 580,
            "at": "l1:subject+900"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6704,
            "y": 600,
            "at": "l2:dear+900"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 780,
            "y": 1430,
            "at": "l3:strangers+900"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 4736,
            "y": 1690,
            "at": "l4:regards+900"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Nhân vật trong bài là minh hoạ.",
            "x": 8752,
            "y": 1812,
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
          "say": "So: the subject answers, what do you need me to do?",
          "sub": "Tóm lại: tiêu đề trả lời “thư này cần tôi làm gì?”.",
          "keys": [
            "cần tôi làm gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dear plus a first name: polite, not distant.",
          "sub": "“Dear” cộng tên gọi: lịch sự mà không xa cách."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Strangers need to know who you are first.",
          "sub": "Người lạ cần biết bạn là ai trước."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The last line gives the next step. Not sure? Regards.",
          "sub": "Câu cuối nói bước tiếp theo. Chưa chắc thì “Regards”."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: save two frames, one formal, one informal. Next up: arranging meetings by email.",
          "sub": "Làm ngay: soạn sẵn hai khung, một trang trọng (“Dear…, I am writing to… I look forward to hearing from you. Regards,”), một thân mật (“Hi…, Many thanks for… Cheers,”). Bài tiếp: hẹn lịch họp.",
          "keys": [
            "soạn sẵn hai khung"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p4,p8,p14,p18"
    },
    {
      "id": "s23",
      "module": "QUIZ-01",
      "data": {
        "q": "You are emailing a new colleague for the first time, which greeting is a safe choice?",
        "options": [
          "Hi Tim or Dear Tim, which are friendly but still polite",
          "Hey Tim, which sounds relaxed and is the usual way in work emails",
          "Dear Sir or Madam, even though you already know his name"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "e-mail",
        "why": "Với đồng nghiệp mới, “Hi Tim” hay “Dear Tim” vừa thân thiện vừa lịch sự. “Hey” không có trong danh sách lời chào email của bài British Council."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You are emailing a new colleague for the first time, which greeting is a safe choice?",
          "sub": "Bạn email cho đồng nghiệp mới lần đầu, lời chào nào an toàn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Hi Tim or Dear Tim, which are friendly but still polite.",
          "sub": "“Dear” cộng tên gọi dùng được cả hai giọng, chắc ăn với đồng nghiệp mới."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[12]"
    },
    {
      "id": "s24",
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
          "say": "Save your two frames today. Then try the forty questions below.",
          "sub": "Hôm nay lưu sẵn hai khung. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi en-email-office-workers, bài 1) dựng theo hạt nhân (#136) + biến thể #144: Đét trái + bảng 10 ô theo MỘT NGÀY sáu email của Lan (8:00 sợ câu đầu câu cuối → 8:30 Thảo “Quotation” → 9:30 Lan “Hey Tim!”, “Khoan đã!” lật câu đố → 10:30 hộp thư chung → 11:00 anh Kim hỏi ngược → 14:00 Dũng câu kết, mẫu cảm ơn anh Piper → 16:00 sếp mới người Anh: Cheers/Rgds/Regards → 17:30 thư cho Tim và Sam, khép vòng). HOOK-21: câu đố “Dear Tim,” trang trọng hay thân mật (lặng 1,5 s), lật ở DLG chặng ②. Nhân vật: Lan (Lan p13, người viết p20), Thảo (Thảo p3), Dũng (Dũng p17), Sam (đối tác đã thân) — w145/_series/en-email-office-workers.md; Tim, Mr Piper, Mr Kim chỉ được nhắc. Ngắt nhịp: BRK-04 tiêu đề (p3), BRK-07 rehook (trước p13), BRK-12 “Regards,” (p20). Tục ngữ mở/khép: “Đầu xuôi đuôi lọt”. Câu đố questions[12].",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
