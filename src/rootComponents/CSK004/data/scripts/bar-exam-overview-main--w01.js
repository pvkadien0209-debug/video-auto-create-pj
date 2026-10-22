// bar-exam-overview-main--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-exam-overview-main--w01",
  "unit": {
    "audience": "bar-exam-overview",
    "slug": "bar-exam-overview-main",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Kỳ kiểm tra kết quả tập sự gồm những phần nào và chấm thế nào?",
    "series": "Kỳ kiểm tra kết quả tập sự từ A đến Z — cấu trúc, điều kiện, lịch và cách chấm"
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
            "text": "72 · 85 · 46",
            "x": 60,
            "y": 120,
            "size": 150,
            "at": "l1:seventy",
            "color": "accent",
            "hl": [
              {
                "text": "46",
                "at": "l1:forty"
              }
            ]
          },
          {
            "id": "a-lab",
            "t": "text",
            "text": "Viết 1 · Vấn đáp · Viết 2",
            "x": 70,
            "y": 330,
            "size": 46,
            "at": "l1:scores"
          },
          {
            "id": "a-tot",
            "t": "text",
            "text": "Tổng vượt xa 150 → đạt?",
            "x": 70,
            "y": 420,
            "size": 56,
            "at": "l2:total",
            "hl": [
              {
                "text": "đạt?",
                "at": "l2:pass"
              }
            ]
          },
          {
            "id": "a-no",
            "t": "text",
            "text": "Không!",
            "x": 70,
            "y": 520,
            "size": 90,
            "at": "l3:no",
            "color": "coral"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Tình huống “Thử nghĩ xem” trong bài · khoản 6 Điều 25 Thông tư 10/2021/TT-BTP",
            "x": 60,
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
          "say": "Seventy two, eighty five, forty six. Three scores from one trainee lawyer's assessment.",
          "sub": "72, 85, 46. Ba điểm số trong kỳ kiểm tra kết quả tập sự hành nghề luật sư.",
          "keys": [
            "Ba điểm số"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Well over one hundred fifty in total. Pass or fail? Make your guess.",
          "sub": "Tổng ba phần vượt xa 150 điểm. Đạt hay trượt? Bạn đoán thử.",
          "keys": [
            "Đạt hay trượt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Most say pass. The answer is no. Why? Hold that thought.",
          "sub": "Đa số đoán đạt. Đáp án: không. Vì sao? Giữ câu hỏi đó lại.",
          "keys": [
            "Đáp án: không"
          ],
          "wait": 1500
        }
      ],
      "ref": "p15"
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
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "spiral-calendar",
                "page-facing-up"
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
            "caption": "Tối tháng 8 · đọc thông báo đợt 2",
            "icon": "spiral-calendar"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 900,
            "y": 640,
            "size": 54,
            "at": "l4:careful",
            "color": "accent",
            "hl": [
              {
                "text": "Cẩn tắc",
                "at": "l4:careful"
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
          "say": "Meet Thảo, a trainee lawyer. Her training ends soon, and rumours are flying.",
          "sub": "Đây là Thảo, luật sư tập sự. Sắp hết tập sự, tin đồn bay khắp nơi.",
          "keys": [
            "tin đồn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Enough. Tonight each rumour goes next to the original text.",
          "sub": "Thôi nghe đồn. Tối nay mình đặt từng tin đồn cạnh văn bản gốc.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: careful now, no regrets later. Thảo picks careful.",
          "sub": "Ông bà dặn: “Cẩn tắc vô áy náy.” Thảo chọn cẩn tắc.",
          "keys": [
            "Cẩn tắc vô áy náy"
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
            "text": "Gồm phần nào, chấm thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:include",
            "hl": [
              {
                "text": "chấm thế nào",
                "at": "l1:marked"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "2 bài viết + 1 vấn đáp",
            "x": 2028,
            "y": 170,
            "size": 60,
            "at": "l2:two written",
            "color": "accent",
            "hl": [
              {
                "text": "1 vấn đáp",
                "at": "l2:oral"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: tin nhóm chat",
            "x": 2028,
            "y": 360,
            "size": 52,
            "at": "l4:group chat",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:reading"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: đọc văn bản gốc",
            "x": 2028,
            "y": 440,
            "size": 58,
            "at": "l4:reading",
            "color": "accent",
            "hl": [
              {
                "text": "văn bản gốc",
                "at": "l4:original"
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
          "say": "So what does the trainee assessment include, and how is it marked?",
          "sub": "Vậy kỳ kiểm tra kết quả tập sự gồm những phần nào, chấm thế nào?",
          "keys": [
            "gồm những phần nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two written papers and one oral part. Three doors.",
          "sub": "Hai bài viết và một phần vấn đáp. Ba cánh cửa.",
          "keys": [
            "Hai bài viết và một phần vấn đáp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So, not trusting the group chat. Reading the original text.",
          "sub": "Vậy không phải tin nhóm chat, mà là đọc văn bản gốc.",
          "keys": [
            "đọc văn bản gốc"
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
            "id": "b-wk",
            "t": "text",
            "text": "7 chặng · đường vào nghề của Thảo",
            "x": 2028,
            "y": 530,
            "size": 50,
            "at": "l1:seven stops",
            "hl": [
              {
                "text": "đường vào nghề",
                "at": "l1:road"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+0",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+260",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+520",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+780",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+1040",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+1560",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "12 tháng",
            "x": 2048,
            "y": 630,
            "size": 40,
            "at": "l1:seven+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Ba phần",
            "x": 2283,
            "y": 630,
            "size": 40,
            "at": "l1:seven+380"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Hồ sơ",
            "x": 2518,
            "y": 630,
            "size": 40,
            "at": "l1:seven+640"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "21/11",
            "x": 2753,
            "y": 630,
            "size": 40,
            "at": "l1:seven+900"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Chấm",
            "x": 2988,
            "y": 630,
            "size": 40,
            "at": "l1:seven+1160"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Kết quả",
            "x": 3223,
            "y": 630,
            "size": 40,
            "at": "l1:seven+1420"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "5 năm",
            "x": 3458,
            "y": 630,
            "size": 40,
            "at": "l1:seven+1680"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's walk Thảo's road into the profession, in seven stops. Pens ready.",
          "sub": "Mình đi cùng Thảo trên đường vào nghề, bảy chặng. Chuẩn bị bút nhé.",
          "keys": [
            "bảy chặng"
          ]
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
            "text": "① 12 tháng tập sự",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first stop"
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
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "balance-scale",
                "books"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:traineeship",
            "caption": "Văn phòng · luật sư hướng dẫn",
            "icon": "balance-scale"
          },
          {
            "id": "c-12",
            "t": "text",
            "text": "Tập sự 12 tháng (Điều 14)",
            "x": 3996,
            "y": 170,
            "size": 52,
            "at": "l1:twelve",
            "hl": [
              {
                "text": "12 tháng",
                "at": "l1:twelve"
              }
            ]
          },
          {
            "id": "c-reg",
            "t": "text",
            "text": "Đăng ký tại Đoàn luật sư",
            "x": 3996,
            "y": 250,
            "size": 48,
            "at": "l3:registration"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Đoàn lập danh sách →",
            "x": 3996,
            "y": 340,
            "size": 46,
            "at": "l4:lists",
            "hl": [
              {
                "text": "danh sách",
                "at": "l4:lists"
              }
            ]
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Liên đoàn → Hội đồng kiểm tra",
            "x": 3996,
            "y": 410,
            "size": 46,
            "at": "l4:federation"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "→ Giấy chứng nhận",
            "x": 3996,
            "y": 480,
            "size": 46,
            "at": "l5:certificates",
            "color": "accent"
          },
          {
            "id": "c-btp",
            "t": "text",
            "text": "Bộ Tư pháp: hướng dẫn, giám sát",
            "x": 3996,
            "y": 550,
            "size": 42,
            "at": "l5:ministry",
            "color": "muted"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Luật Luật sư (VBHN 03/VBHN-VPQH), Điều 14, 15",
            "x": 4816,
            "y": 690,
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
          "say": "First stop: twelve months. That is the traineeship under Article fourteen of the Law on Lawyers.",
          "sub": "Chặng một: mười hai tháng. Đó là thời gian tập sự theo Điều 14 Luật Luật sư.",
          "keys": [
            "mười hai tháng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Cô Hoa, Thảo's supervising lawyer. One favourite sentence.",
          "sub": "Còn đây là cô Hoa, luật sư hướng dẫn của Thảo, nổi tiếng với đúng một câu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Read the original text, Thảo. Registration is at your local bar association.",
          "sub": "Đọc nguyên văn đi em. Người tập sự đăng ký tại Đoàn luật sư ở địa phương.",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article fifteen: the bar lists eligible trainees for the Vietnam Bar Federation.",
          "sub": "Điều 15: Ban chủ nhiệm Đoàn lập danh sách, gửi Liên đoàn Luật sư Việt Nam.",
          "keys": [
            "lập danh sách"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Its council runs the assessment and issues certificates. The Ministry of Justice supervises.",
          "sub": "Hội đồng của Liên đoàn kiểm tra, cấp Giấy chứng nhận; Bộ Tư pháp giám sát.",
          "keys": [
            "cấp Giấy chứng nhận"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p1"
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
            "id": "c-tt",
            "t": "text",
            "text": "Chi tiết: Thông tư 10/2021, Điều 15–27",
            "x": 3996,
            "y": 620,
            "size": 44,
            "at": "l1:details",
            "color": "accent",
            "hl": [
              {
                "text": "Điều 15–27",
                "at": "l1:fifteen"
              }
            ]
          },
          {
            "id": "c-tt2",
            "t": "text",
            "text": "ai dự · nội quy · chấm · phúc tra",
            "x": 3996,
            "y": 690,
            "size": 36,
            "at": "l1:details",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The details: Circular ten, Articles fifteen to twenty seven. Who sits, rules, marking, appeals.",
          "sub": "Chi tiết: Thông tư 10/2021/TT-BTP ngày 10/12/2021, Điều 15 đến Điều 27: ai được dự, nội quy, chấm điểm, phúc tra.",
          "keys": [
            "Điều 15 đến Điều 27"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then Dũng calls, Thảo's training classmate, with breaking news.",
          "sub": "Rồi Dũng gọi tới, bạn cùng khoá tập sự với Thảo, mang “tin nóng”."
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Giờ nghỉ trưa · quán cà phê",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đã đổi sang thi quốc gia, khỏi ôn Thông tư",
          "why": "Mới là đề xuất trong dự thảo Luật Luật sư sửa đổi; Chủ tịch Liên đoàn đề nghị giữ cơ chế hiện hành.",
          "rule": "Ôn theo luật đang có hiệu lực"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "The assessment is gone! It's a national exam now. Skip that circular!",
          "sub": "Bỏ kiểm tra tập sự rồi! Giờ thi quốc gia. Khỏi ôn Thông tư!",
          "pose": "phone",
          "face": "happy",
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
          "say": "Only a proposal in the draft amended law: one national exam for both steps.",
          "sub": "Mới là đề xuất trong dự thảo Luật Luật sư sửa đổi: gộp hai bước thành một kỳ thi quốc gia.",
          "keys": [
            "Mới là đề xuất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Study the law in force. Follow the draft through official sources.",
          "sub": "Ôn theo luật đang có hiệu lực. Theo dõi dự thảo qua nguồn chính thức.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Rumours run fast. Laws must pass through parliament.",
          "sub": "Tin đồn chạy nhanh. Luật thì phải đi qua Quốc hội.",
          "phase": "redo",
          "keys": [
            "phải đi qua Quốc hội"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "at": "l7",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Ba phần thi",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:three parts"
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "file-folder",
                "open-book"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "medium",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:writing",
            "caption": "Văn phòng · chọn vụ việc",
            "icon": "file-folder"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Bài 1 · Kỹ năng · 180 phút",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l2:paper one",
            "hl": [
              {
                "text": "180 phút",
                "at": "l2:eighty"
              }
            ]
          },
          {
            "id": "d-1s",
            "t": "text",
            "text": "tố tụng · tư vấn · đại diện",
            "x": 5964,
            "y": 245,
            "size": 38,
            "at": "l2:litigation",
            "color": "muted"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Bài 2 · Nghề + đạo đức · 90 phút",
            "x": 5964,
            "y": 310,
            "size": 46,
            "at": "l3:paper two",
            "hl": [
              {
                "text": "90 phút",
                "at": "l3:ninety"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Vấn đáp · vụ việc tự chọn",
            "x": 5964,
            "y": 400,
            "size": 50,
            "at": "l4:oral"
          },
          {
            "id": "d-pick",
            "t": "text",
            "text": "Chọn vụ ngay từ lúc tập sự",
            "x": 5964,
            "y": 480,
            "size": 48,
            "at": "l7:during",
            "color": "accent",
            "hl": [
              {
                "text": "từ lúc tập sự",
                "at": "l7:during"
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
          "say": "Second stop: three parts, writing and practice, under Article seventeen.",
          "sub": "Chặng hai: ba phần thi, gồm phần viết và phần thực hành, theo Điều 17.",
          "keys": [
            "phần viết và phần thực hành"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Paper one: practical skills, from litigation to legal advice. One hundred eighty minutes.",
          "sub": "Bài viết thứ nhất: kỹ năng tố tụng, tư vấn, đại diện ngoài tố tụng. 180 phút.",
          "keys": [
            "180 phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Paper two: the law on lawyers and the code of ethics. Ninety minutes.",
          "sub": "Bài viết thứ hai: pháp luật về luật sư và Bộ Quy tắc Đạo đức nghề nghiệp. 90 phút.",
          "keys": [
            "90 phút"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "And the oral? You defend a case you worked on under me. Pick it now.",
          "sub": "Còn vấn đáp? Em bảo vệ một vụ việc đã làm theo phân công của cô. Chọn ngay đi.",
          "face": "stern"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Now? The exam is months away!",
          "sub": "Bây giờ á? Còn mấy tháng nữa mới thi mà!",
          "face": "surprised"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Yes. You defend it before examiners, so choose during training, not the week before.",
          "sub": "Đúng. Trình bày, bảo vệ trước giám khảo: chọn vụ từ lúc tập sự, không phải tuần trước ngày thi.",
          "keys": [
            "từ lúc còn tập sự"
          ]
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s09",
      "module": "BRK-04",
      "data": {
        "title": "Khoản 2 Điều 23",
        "wrong": "Bài nào cũng được mang văn bản",
        "right": "Chỉ bài kỹ năng được mang văn bản",
        "wrongIllus": "books",
        "rightIllus": "open-book"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Law texts allowed in every paper?",
          "sub": "Bài nào cũng được mang văn bản?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Only in the skills paper. Paper two, know it well.",
          "sub": "Chỉ bài kỹ năng. Bài hai phải nắm chắc.",
          "keys": [
            "Chỉ bài kỹ năng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p7"
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
          }
        ],
        "items": [
          {
            "id": "d-ok",
            "t": "text",
            "text": "Mang: bút, thước, văn bản (bài 1)",
            "x": 5964,
            "y": 570,
            "size": 40,
            "at": "l1:pens",
            "hl": [
              {
                "text": "bút, thước",
                "at": "l1:ruler"
              }
            ]
          },
          {
            "id": "d-ban",
            "t": "text",
            "text": "Cấm: điện thoại, máy tính, ghi âm",
            "x": 5964,
            "y": 640,
            "size": 38,
            "at": "l2:phones",
            "color": "coral"
          },
          {
            "id": "d-rut",
            "t": "text",
            "text": "Bài 2 phải nắm chắc",
            "x": 6804,
            "y": 680,
            "size": 46,
            "at": "l3:applies",
            "color": "accent",
            "hl": [
              {
                "text": "nắm chắc",
                "at": "l3:solid"
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
          "say": "Article twenty three, clause two: only pens and a ruler, plus legal texts for the skills paper.",
          "sub": "Khoản 2 Điều 23: chỉ mang bút viết, thước kẻ; riêng bài kỹ năng được mang văn bản quy phạm pháp luật.",
          "keys": [
            "bút viết, thước kẻ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Phones, computers, recorders, cameras: banned. Check each round's own rules too.",
          "sub": "Cấm điện thoại, máy tính, thiết bị ghi âm, ghi hình. Nội quy riêng từng đợt vẫn phải kiểm lại.",
          "keys": [
            "Nội quy riêng từng đợt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Paper one applies texts. Paper two must be solid.",
          "sub": "Rút ra: bài một vận dụng văn bản, bài hai phải nắm chắc.",
          "keys": [
            "bài hai phải nắm chắc"
          ]
        }
      ],
      "ref": "p7,p8"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Ai được dự · hồ sơ",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third stop"
          },
          {
            "id": "e-g1",
            "t": "text",
            "text": "1. Đã hết thời gian tập sự",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:finished"
          },
          {
            "id": "e-g2",
            "t": "text",
            "text": "2. Không đạt kỳ trước",
            "x": 7932,
            "y": 240,
            "size": 46,
            "at": "l2:failed"
          },
          {
            "id": "e-g3",
            "t": "text",
            "text": "3. Giấy chứng nhận hết hiệu lực",
            "x": 7932,
            "y": 310,
            "size": 46,
            "at": "l2:expired"
          },
          {
            "id": "e-g4",
            "t": "text",
            "text": "+ đã được cho hoãn (đợt 2/2026)",
            "x": 7932,
            "y": 380,
            "size": 40,
            "at": "l3:postpone",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: who may sit? Clause one, Article fifteen of the circular names three groups.",
          "sub": "Chặng ba: ai được dự? Khoản 1 Điều 15 Thông tư nêu ba nhóm.",
          "keys": [
            "ba nhóm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Finished training. Failed an earlier round. Or holding an expired certificate.",
          "sub": "Người đã hết thời gian tập sự. Người không đạt kỳ trước. Người có Giấy chứng nhận đã hết hiệu lực."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The round two notice adds people the council allowed to postpone earlier.",
          "sub": "Thông báo đợt 2/2026 thêm: người đủ điều kiện đã được Hội đồng cho hoãn ở các kỳ trước."
        }
      ],
      "ref": "p9"
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
            "at": "l2",
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
                  "id": "thao",
                  "side": "left",
                  "pose": "give"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "notebook",
                "fountain-pen"
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
                  "shot": "medium",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:file",
            "caption": "Cuối kỳ tập sự · ký xác nhận",
            "icon": "notebook"
          },
          {
            "id": "e-so",
            "t": "text",
            "text": "Sổ nhật ký: 2 xác nhận",
            "x": 7932,
            "y": 470,
            "size": 50,
            "at": "l2:logbook",
            "hl": [
              {
                "text": "2 xác nhận",
                "at": "l2:confirmation"
              }
            ]
          },
          {
            "id": "e-bc",
            "t": "text",
            "text": "Báo cáo: ba bên cùng xem",
            "x": 7932,
            "y": 550,
            "size": 44,
            "at": "l3:report"
          },
          {
            "id": "e-fl",
            "t": "text",
            "text": "Đoàn → danh sách → Liên đoàn",
            "x": 8772,
            "y": 680,
            "size": 46,
            "at": "l4:list",
            "color": "accent",
            "hl": [
              {
                "text": "danh sách",
                "at": "l4:list"
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
          "say": "For fresh trainees, the real condition is the file, under Articles seven and eighteen.",
          "sub": "Với người vừa hết tập sự, điều kiện chính là bộ hồ sơ theo Điều 7 và Điều 18.",
          "keys": [
            "bộ hồ sơ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "My logbook needs your confirmation, Cô Hoa, and the firm's.",
          "sub": "Sổ nhật ký cần cô xác nhận, cả tổ chức nhận tập sự nữa, cô ạ.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Your report gets my comments. Then the bar assesses your ethics and respect for law.",
          "sub": "Báo cáo có nhận xét của cô, xác nhận của công ty, rồi Đoàn đánh giá đạo đức, ý thức pháp luật."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then the bar sends its list up to the Federation.",
          "sub": "Rồi Ban chủ nhiệm Đoàn gửi danh sách lên Liên đoàn.",
          "keys": [
            "gửi danh sách lên Liên đoàn"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Hồ sơ xong rồi: thi ngày nào, ở đâu?",
        "illus": "spiral-calendar"
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
          "say": "File done. So when, and where, is the exam?",
          "sub": "Hồ sơ xong rồi. Vậy thi ngày nào, ở đâu?",
          "keys": [
            "ngày nào, ở đâu"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Sáng 21/11 · cổng điểm thi",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:fourth stop"
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "Ít nhất 6 tháng một lần",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l1:six months",
            "hl": [
              {
                "text": "6 tháng",
                "at": "l1:six"
              }
            ]
          },
          {
            "id": "f-d2",
            "t": "text",
            "text": "Đợt 2 (dự kiến): 20–22/11",
            "x": 60,
            "y": 1405,
            "size": 48,
            "at": "l3:planned",
            "color": "accent",
            "hl": [
              {
                "text": "dự kiến",
                "at": "l3:planned"
              }
            ]
          },
          {
            "id": "f-hn",
            "t": "text",
            "text": "Hà Nội: từ Huế trở ra",
            "x": 60,
            "y": 1490,
            "size": 44,
            "at": "l4:hanoi"
          },
          {
            "id": "f-hcm",
            "t": "text",
            "text": "TP.HCM: từ Đà Nẵng trở vào",
            "x": 60,
            "y": 1555,
            "size": 44,
            "at": "l4:southward"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Thông báo 01/TB-HĐKT ngày 12/8/2026 của Hội đồng kiểm tra",
            "x": 60,
            "y": 1810,
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
          "say": "Fourth stop: dates. Article eighteen: at least one round every six months.",
          "sub": "Chặng bốn: lịch thi. Khoản 1 Điều 18: ít nhất 6 tháng tổ chức một lần.",
          "keys": [
            "ít nhất 6 tháng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Round two is planned for November twentieth to twenty second, by the notice of August twelfth.",
          "sub": "Đợt 2 dự kiến các ngày 20, 21, 22/11, theo Thông báo 01/TB-HĐKT ngày 12/8/2026.",
          "keys": [
            "dự kiến"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "From Hue northward, you sit in Hanoi. From Da Nang southward, in Ho Chi Minh City.",
          "sub": "Từ Huế trở ra thi ở Hà Nội; từ Đà Nẵng trở vào thi ở Thành phố Hồ Chí Minh."
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s14b",
      "module": "BRK-08",
      "data": {
        "title": "Đợt 2/2026 (dự kiến)",
        "current": 1,
        "points": [
          {
            "label": "12/8",
            "sub": "Thông báo 01/TB-HĐKT",
            "illus": "newspaper"
          },
          {
            "label": "Sáng 21/11",
            "sub": "Bài viết 1 · 180 phút",
            "illus": "fountain-pen"
          },
          {
            "label": "Chiều 21/11",
            "sub": "Bài viết 2 · 90 phút",
            "illus": "memo"
          },
          {
            "label": "22/11",
            "sub": "Vấn đáp",
            "illus": "speaking-head"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Two papers on November twenty first, morning and afternoon.",
          "sub": "Ngày 21/11: bài viết thứ nhất buổi sáng, thứ hai buổi chiều."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The oral on the twenty second.",
          "sub": "Ngày 22/11: vấn đáp.",
          "keys": [
            "vấn đáp"
          ]
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
            "at": "l3",
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
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "automobile",
                "alarm-clock"
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
            "at": "l1",
            "caption": "Sáng 21/11 · kẹt xe",
            "icon": "alarm-clock"
          },
          {
            "id": "f-15",
            "t": "text",
            "text": "Muộn quá 15 phút → đình chỉ",
            "x": 60,
            "y": 1635,
            "size": 44,
            "at": "l3:fifteen",
            "color": "coral",
            "hl": [
              {
                "text": "đình chỉ",
                "at": "l3:suspended"
              }
            ]
          },
          {
            "id": "f-kt",
            "t": "text",
            "text": "Khiển trách −25% · Cảnh cáo −50%",
            "x": 900,
            "y": 1770,
            "size": 44,
            "at": "l5:reprimand",
            "hl": [
              {
                "text": "−50%",
                "at": "l5:half"
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
          "say": "Morning of the twenty first. Dũng, stuck in traffic.",
          "sub": "Sáng 21/11. Dũng kẹt xe."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Fifteen minutes late is fine, right? They'll wait for me.",
          "sub": "Trễ mười lăm phút chắc không sao nhỉ? Người ta chờ mà.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No. Enter fifteen minutes after the written questions are announced, and you're suspended.",
          "sub": "Không. Vào phòng sau 15 phút kể từ khi công bố đề là bị đình chỉ.",
          "keys": [
            "bị đình chỉ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A reprimand costs a quarter of that paper's score. A warning costs half.",
          "sub": "Khiển trách bị trừ 25% điểm, cảnh cáo bị trừ 50% điểm của bài đó.",
          "keys": [
            "trừ 25%",
            "trừ 50%"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Chấm: thang 100",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:marking"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "2 giám khảo chấm độc lập",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l1:two examiners",
            "hl": [
              {
                "text": "độc lập",
                "at": "l1:independently"
              }
            ]
          },
          {
            "id": "g-avg",
            "t": "text",
            "text": "Bài viết = trung bình 2 điểm",
            "x": 2028,
            "y": 1340,
            "size": 46,
            "at": "l2:average"
          },
          {
            "id": "g-diff",
            "t": "text",
            "text": "Chênh nhiều → trao đổi, rồi cấp trên",
            "x": 2028,
            "y": 1420,
            "size": 38,
            "at": "l3:ten points",
            "color": "muted"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Điều 25 Thông tư 10/2021/TT-BTP",
            "x": 2968,
            "y": 1150,
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
          "say": "Fifth stop: marking. Article twenty five: two examiners mark each paper independently, out of one hundred.",
          "sub": "Chặng năm: chấm điểm. Điều 25: mỗi bài do hai giám khảo chấm độc lập, thang điểm 100.",
          "keys": [
            "thang điểm 100"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A written paper's score is the average of the two.",
          "sub": "Điểm bài viết là trung bình cộng điểm của hai giám khảo.",
          "keys": [
            "trung bình cộng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ten points apart, or five at the pass line? They talk; if stuck, the head of marking, then the chair, decides.",
          "sub": "Chênh từ 10 điểm, hoặc 5 điểm ở ranh giới đạt? Hai giám khảo trao đổi; không xong thì Trưởng Ban Chấm thi, sau cùng là Chủ tịch Hội đồng."
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s16b",
      "module": "BRK-03",
      "data": {
        "value": 50,
        "suffix": " điểm",
        "label": "trở lên, cho từng bài — khoản 6 Điều 25",
        "illus": "hundred-points"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Now the key number, from clause six.",
          "sub": "Giờ đến con số quan trọng nhất, khoản 6."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Fifty points or more, on every single paper.",
          "sub": "Từ 50 điểm trở lên, cho từng bài.",
          "keys": [
            "cho từng bài"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p14"
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
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "hundred-points",
                "page-facing-up"
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
            "at": "l1:riddle",
            "caption": "Giả sử · Dũng nhẩm điểm",
            "icon": "hundred-points"
          },
          {
            "id": "g-sc",
            "t": "text",
            "text": "72 · 85 · 46",
            "x": 2028,
            "y": 1560,
            "size": 64,
            "at": "l2:seventy"
          },
          {
            "id": "g-sum",
            "t": "text",
            "text": "Cộng dồn > 150 → đỗ",
            "x": 2028,
            "y": 1650,
            "size": 46,
            "at": "l2:way over",
            "color": "muted"
          },
          {
            "id": "g-sumx",
            "t": "strike",
            "over": "g-sum",
            "at": "l3:sorry"
          },
          {
            "id": "g-46",
            "t": "text",
            "text": "46 < 50 → chưa đạt",
            "x": 2028,
            "y": 1740,
            "size": 52,
            "at": "l3:forty",
            "color": "coral",
            "hl": [
              {
                "text": "chưa đạt",
                "at": "l3:not passed"
              }
            ]
          },
          {
            "id": "g-gate",
            "t": "text",
            "text": "Mỗi bài = một cửa riêng",
            "x": 2868,
            "y": 1770,
            "size": 50,
            "at": "l4:gate",
            "color": "accent",
            "hl": [
              {
                "text": "cửa riêng",
                "at": "l4:own gate"
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
          "say": "Back to our riddle, and Dũng's three scores.",
          "sub": "Quay lại câu đố đầu bài. Hình dung Dũng với ba điểm số ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Seventy two, eighty five, forty six. Way over one fifty. I'm in!",
          "sub": "Bảy mươi hai, tám mươi lăm, bốn mươi sáu. Vượt xa 150. Đỗ chắc!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sorry, Dũng. One paper at forty six means not passed.",
          "sub": "Tiếc quá Dũng. Chỉ một bài 46 điểm là chưa đạt, dù hai phần kia cao.",
          "keys": [
            "chưa đạt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Scores don't pool. Each paper is its own gate, like three bridges on one road.",
          "sub": "Điểm không cộng dồn: mỗi bài là một cửa riêng, như ba cây cầu trên cùng một con đường.",
          "keys": [
            "mỗi bài là một cửa riêng"
          ]
        }
      ],
      "ref": "p14,p15,p16"
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
            "text": "⑥ Kết quả · phúc tra",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:results"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "newspaper"
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
            "at": "l1:sixth",
            "caption": "Sau ngày thi · chờ kết quả",
            "icon": "laptop"
          },
          {
            "id": "h-15",
            "t": "text",
            "text": "Công bố: trong 15 ngày sau chấm",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l1:fifteen",
            "hl": [
              {
                "text": "15 ngày",
                "at": "l1:fifteen"
              }
            ]
          },
          {
            "id": "h-d1",
            "t": "text",
            "text": "Đợt 1/2026: đăng 22/6, 2 tệp",
            "x": 3996,
            "y": 1350,
            "size": 40,
            "at": "l3:june"
          },
          {
            "id": "h-pt",
            "t": "text",
            "text": "Phúc tra bài viết: 15 ngày",
            "x": 3996,
            "y": 1500,
            "size": 50,
            "at": "l4:review",
            "color": "accent",
            "hl": [
              {
                "text": "15 ngày",
                "at": "l4:fifteen"
              }
            ]
          },
          {
            "id": "h-vd",
            "t": "text",
            "text": "Vấn đáp: không phúc tra",
            "x": 3996,
            "y": 1585,
            "size": 48,
            "at": "l5:oral",
            "color": "coral"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Điều 25, 27 Thông tư 10/2021 · Thông báo 54/TB-HĐKT",
            "x": 4816,
            "y": 1780,
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
          "say": "Sixth stop: results, announced within fifteen days after marking ends, and sent to the bar.",
          "sub": "Chặng sáu: kết quả, công bố trong 15 ngày kể từ ngày kết thúc chấm, gửi Sở Tư pháp và Đoàn luật sư.",
          "keys": [
            "15 ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Round one results were in the bar journal on June twenty second. Two files.",
          "sub": "Kết quả đợt 1/2026 đăng trên Tạp chí Luật sư Việt Nam ngày 22/6, hai tệp Bắc và Nam.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Disagree with a written score? Request a review within fifteen days of receiving it.",
          "sub": "Không đồng ý điểm bài viết? Làm đơn phúc tra trong 15 ngày kể từ ngày nhận kết quả, theo Điều 27.",
          "keys": [
            "đơn phúc tra"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The oral part cannot be reviewed.",
          "sub": "Phần vấn đáp không được phúc tra.",
          "keys": [
            "không được phúc tra"
          ]
        }
      ],
      "ref": "p17"
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
            "text": "⑦ Giấy chứng nhận · 5 năm",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:seventh"
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Hiệu lực 5 năm từ ngày cấp",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l1:five years",
            "hl": [
              {
                "text": "5 năm",
                "at": "l1:five"
              }
            ]
          },
          {
            "id": "i-ex",
            "t": "text",
            "text": "Quá hạn → kiểm tra lại",
            "x": 5964,
            "y": 1340,
            "size": 44,
            "at": "l2:expired",
            "color": "coral"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Không đạt 3 kỳ → tập sự lại",
            "x": 5964,
            "y": 1410,
            "size": 44,
            "at": "l3:three rounds",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: pass, and you get a certificate, valid for five years.",
          "sub": "Chặng bảy: Giấy chứng nhận. Người đạt được Chủ tịch Hội đồng cấp, hiệu lực 5 năm kể từ ngày cấp.",
          "keys": [
            "5 năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Expired before you apply for a practising certificate? Then you sit the assessment again.",
          "sub": "Quá hạn mà chưa xin cấp Chứng chỉ hành nghề luật sư thì phải kiểm tra lại.",
          "keys": [
            "kiểm tra lại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fail three rounds, and you must register for a new traineeship.",
          "sub": "Không đạt trong 3 kỳ thì không được dự nữa, phải đăng ký tập sự lại."
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
            "fit": "I",
            "move": "cut"
          },
          {
            "at": "a1",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center"
                }
              ],
              "left": {
                "label": "Cất giấy, để sau",
                "ok": false
              },
              "right": {
                "label": "Ghi hạn vào lịch",
                "ok": true
              }
            },
            "at": "l1:project",
            "caption": "Thảo đạt · đang bận dự án lớn",
            "icon": "spiral-calendar"
          },
          {
            "id": "i-a",
            "t": "text",
            "text": "A: cất giấy, đợi rảnh",
            "x": 5964,
            "y": 1510,
            "size": 44,
            "at": "a1:file",
            "color": "muted"
          },
          {
            "id": "i-ax",
            "t": "strike",
            "over": "i-a",
            "at": "l5:again"
          },
          {
            "id": "i-b",
            "t": "text",
            "text": "B: ghi hạn vào lịch ngay",
            "x": 5964,
            "y": 1590,
            "size": 48,
            "at": "b1:calendar",
            "color": "accent",
            "hl": [
              {
                "text": "ghi hạn",
                "at": "b1:expiry"
              }
            ]
          },
          {
            "id": "i-hs",
            "t": "text",
            "text": "lý lịch tư pháp · khám sức khoẻ",
            "x": 5964,
            "y": 1670,
            "size": 36,
            "at": "b1:record",
            "color": "muted"
          },
          {
            "id": "i-rut",
            "t": "text",
            "text": "Giấy có hạn dùng",
            "x": 6804,
            "y": 1770,
            "size": 52,
            "at": "l6:expiry date",
            "color": "accent",
            "hl": [
              {
                "text": "hạn dùng",
                "at": "l6:expiry date"
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
          "say": "Now Thảo passes, but a big project eats her days.",
          "sub": "Giờ Thảo đạt, nhưng đang bận một dự án lớn."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "thao",
          "say": "I'll file this away. Licence papers when I'm free.",
          "sub": "Cất giấy đã. Khi nào rảnh mới làm hồ sơ cấp chứng chỉ.",
          "phase": "a"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Months drift by. Five years can arrive first, and she sits it again.",
          "sub": "Năm tháng trôi, mốc 5 năm đến trước, Thảo phải kiểm tra lại."
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "Expiry date in my calendar today. Then the record and health papers, via the bar.",
          "sub": "Ghi hạn vào lịch ngay hôm nay. Rồi lý lịch tư pháp, giấy khám sức khoẻ, nộp qua Đoàn.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Still busy, but no surprise. Write the expiry date on day one.",
          "sub": "Vẫn bận, nhưng hết bất ngờ. Ghi hạn vào lịch ngay ngày nhận.",
          "keys": [
            "Ghi hạn vào lịch ngay ngày nhận"
          ]
        }
      ],
      "ref": "p19,p20"
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
            "text": "Tối nhận giấy · cùng chiếc bàn",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:same desk"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-calendar",
                "scroll"
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
            "at": "l1:same desk",
            "caption": "Tối nhận giấy · cùng tờ lịch",
            "icon": "spiral-calendar"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 7932,
            "y": 1695,
            "size": 54,
            "at": "l3:careful",
            "color": "accent",
            "hl": [
              {
                "text": "vô áy náy",
                "at": "l3:regrets"
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
          "say": "Back to the same desk, months later. Same calendar, one new date on it.",
          "sub": "Trở lại chiếc bàn ấy, vài tháng sau. Vẫn tờ lịch ấy, thêm một ngày mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Certificate expiry, in red. Five years from today.",
          "sub": "Ngày hết hạn Giấy chứng nhận, ghi đỏ. Năm năm kể từ hôm nay.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Careful now, no regrets later. And Thảo's checklist ran in this order.",
          "sub": "“Cẩn tắc vô áy náy.” Còn việc của Thảo, đi theo đúng thứ tự này.",
          "keys": [
            "Cẩn tắc vô áy náy"
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
      "ref": "p20"
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
          }
        ],
        "items": [
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1240,
            "w": 46,
            "h": 46,
            "at": "l1:count",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1222,
            "size": 58,
            "at": "l1:count+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Đếm ngày hết tập sự",
            "x": 8002,
            "y": 1232,
            "size": 40,
            "at": "l1:count+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1318,
            "w": 46,
            "h": 46,
            "at": "l1:logbook",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1300,
            "size": 58,
            "at": "l1:logbook+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Sổ, báo cáo đủ chữ ký",
            "x": 8002,
            "y": 1310,
            "size": 40,
            "at": "l1:logbook+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1396,
            "w": 46,
            "h": 46,
            "at": "l1:ask",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1378,
            "size": 58,
            "at": "l1:ask+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Hỏi Đoàn: có tên chưa?",
            "x": 8002,
            "y": 1388,
            "size": 40,
            "at": "l1:ask+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1474,
            "w": 46,
            "h": 46,
            "at": "l2:rules",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1456,
            "size": 58,
            "at": "l2:rules+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Nội quy · ôn đủ 3 phần",
            "x": 8002,
            "y": 1466,
            "size": 40,
            "at": "l2:rules+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1552,
            "w": 46,
            "h": 46,
            "at": "l2:results",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1534,
            "size": 58,
            "at": "l2:results+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Kết quả · hạn phúc tra",
            "x": 8002,
            "y": 1544,
            "size": 40,
            "at": "l2:results+200"
          },
          {
            "id": "j-c5",
            "t": "box",
            "x": 7932,
            "y": 1630,
            "w": 46,
            "h": 46,
            "at": "l2:calendar",
            "stroke": 5
          },
          {
            "id": "j-k5",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1612,
            "size": 58,
            "at": "l2:calendar+600",
            "color": "accent"
          },
          {
            "id": "j-l5",
            "t": "text",
            "text": "Ghi hạn 5 năm vào lịch",
            "x": 8002,
            "y": 1622,
            "size": 40,
            "at": "l2:calendar+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Count your days, complete the logbook and report, and ask the bar if you're listed.",
          "sub": "Đếm ngày hết tập sự, hoàn thiện sổ nhật ký, báo cáo, hỏi Đoàn đã đưa tên vào danh sách chưa.",
          "keys": [
            "hỏi Đoàn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read the rules, revise all three parts, watch the results, and calendar the five year date.",
          "sub": "Đọc nội quy, ôn đủ ba phần, theo dõi kết quả, hạn phúc tra, ghi hạn 5 năm vào lịch.",
          "keys": [
            "ôn đủ ba phần"
          ]
        }
      ],
      "ref": "p21"
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
          },
          {
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:three parts",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:fifty",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:notice",
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
            "x": 6664,
            "y": 170,
            "at": "l1:three parts"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 2728,
            "y": 1740,
            "at": "l2:fifty"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 760,
            "y": 1405,
            "at": "l3:notice"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "g-gate"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l2:pooling"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài là kiến thức nghề, không phải tư vấn cho vụ việc cụ thể. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 30,
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
          "say": "So: three parts. Two written papers and an oral, each marked out of one hundred.",
          "sub": "Tóm lại: ba phần, hai bài viết và một vấn đáp, chấm thang 100.",
          "keys": [
            "ba phần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fifty or more on every paper. No pooling.",
          "sub": "Mỗi bài từ 50 điểm trở lên. Không cộng dồn.",
          "keys": [
            "Không cộng dồn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And follow each round's notice. Open the latest one, mark your end date.",
          "sub": "Đi theo lịch Hội đồng công bố từng đợt. Mở thông báo đợt gần nhất, đánh dấu ngày hết tập sự.",
          "keys": [
            "thông báo đợt gần nhất"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "This is professional knowledge, not advice on any specific case.",
          "sub": "Bài là kiến thức nghề, không phải tư vấn cho vụ việc cụ thể."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s30",
      "module": "QUIZ-01",
      "data": {
        "q": "You received your certificate today, how long will it stay valid?",
        "options": [
          "Only six months, after which it turns into a full practising licence",
          "Five years from the date of issue, then you must sit it again",
          "Forever, so you may apply for a practising licence whenever you like"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Hiệu lực 5 năm kể từ ngày cấp; quá hạn chưa xin chứng chỉ thì phải kiểm tra lại."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You received your certificate today, how long will it stay valid?",
          "sub": "Bạn vừa nhận giấy chứng nhận hôm nay, giấy có hiệu lực bao lâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Five years from the date of issue, then you must sit it again.",
          "sub": "Năm năm kể từ ngày cấp, quá hạn thì phải kiểm tra lại."
        }
      ],
      "beats": {
        "after": 500
      },
      "ref": "questions[34]"
    },
    {
      "id": "s31",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu về kỳ kiểm tra tập sự",
        "sub": "Mỗi bài là một cửa riêng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Forty questions are waiting below. Every paper is its own gate.",
          "sub": "Bốn mươi câu hỏi đang chờ bên dưới. Mỗi bài là một cửa riêng."
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-21",
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21 (câu hỏi để đoán sai): 72 · 85 · 46 (tình huống ❓ p15) — đáp án lật ngay, lý do giải ở ô G. Dòng thời gian: đường vào nghề của Thảo qua đợt 2/2026 (tối tháng 8 đọc thông báo → 12 tháng → ba phần → hồ sơ → sáng 21/11 → chấm → kết quả → giấy 5 năm → tối nhận giấy, cùng chiếc bàn, cùng tờ lịch). Nhân vật (w145/_series/bar-exam-overview.md): Thảo (chính; lựa chọn A/B p19), Dũng (bạn cùng khoá; tin đồn thi quốc gia p3 ở DLG; điểm 72/85/46 p15; đến muộn minh hoạ p12), Cô Hoa (luật sư hướng dẫn: chọn vụ việc p6, ký sổ p10). Cảnh ngắt nhịp: BRK-04 Sai/Đúng (p7), BRK-07 rehook (p11), BRK-08 lịch đợt 2 (p11), BRK-03 “50 điểm” (p14). Mọi số, mốc lấy từ bài; đợt 2/2026 luôn ghi “dự kiến”. Lưu ý chung #133 ở cảnh tóm tắt. Tục ngữ mở/khép vòng: “Cẩn tắc vô áy náy”.",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
