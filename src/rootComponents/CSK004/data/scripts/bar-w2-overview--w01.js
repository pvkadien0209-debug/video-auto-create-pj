// bar-w2-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-w2-overview--w01",
  "unit": {
    "audience": "bar-exam-written2-ethics",
    "slug": "bar-w2-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Bài viết 2 hỏi những gì và vì sao không thể chỉ học thuộc?",
    "series": "Bài viết 2 trong 90 phút — pháp luật về luật sư và Bộ Quy tắc đạo đức cho người ôn kiểm tra tập sự"
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
            "id": "a-n",
            "t": "text",
            "text": "50 / 100",
            "x": 60,
            "y": 110,
            "size": 170,
            "at": "l1:Fifty",
            "color": "accent",
            "hl": [
              {
                "text": "50",
                "at": "l1:Fifty"
              }
            ]
          },
          {
            "id": "a-s",
            "t": "text",
            "text": "Hụt ở bài 2 = trượt cả kỳ",
            "x": 70,
            "y": 340,
            "size": 52,
            "at": "l1:paper two",
            "hl": [
              {
                "text": "trượt cả kỳ",
                "at": "l1:fail"
              }
            ]
          },
          {
            "id": "a-x",
            "t": "text",
            "text": "Ta tưởng: bài ngắn = bài dễ?",
            "x": 70,
            "y": 450,
            "size": 54,
            "at": "l2:easy",
            "color": "muted"
          },
          {
            "id": "a-xx",
            "t": "strike",
            "over": "a-x",
            "at": "l2:memorise"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: khoản 6 Điều 25 Thông tư 10/2021/TT-BTP",
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
          "say": "Fifty out of a hundred. Miss it on paper two, and the whole exam is a fail.",
          "sub": "Năm mươi trên một trăm. Hụt mốc ấy ở bài viết 2 là chưa đạt cả kỳ.",
          "keys": [
            "chưa đạt cả kỳ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet many call paper two the easy one. Just memorise, they say.",
          "sub": "Vậy mà nhiều người gọi bài viết 2 là bài “dễ”: cứ học thuộc là xong."
        }
      ],
      "ref": "intro,p3"
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
            "at": "l5",
            "fit": "A",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "a-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 130,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "books",
                "hot-beverage"
              ]
            },
            "at": "l1",
            "caption": "Tối · quán cà phê nhóm ôn",
            "icon": "hot-beverage"
          },
          {
            "id": "a-d",
            "t": "text",
            "text": "“Bài 2 dễ, thuộc là xong!”",
            "x": 920,
            "y": 690,
            "size": 44,
            "at": "l3:Easy",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Học đi đôi với hành”",
            "x": 60,
            "y": 580,
            "size": 56,
            "at": "l5:hand in hand",
            "color": "accent",
            "hl": [
              {
                "text": "đi đôi với hành",
                "at": "l5:practice"
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
          "say": "Meet Thảo, a trainee lawyer in Hanoi, preparing for the probation exam.",
          "sub": "Đây là Thảo, luật sư tập sự ở Hà Nội, đang ôn kỳ kiểm tra kết quả tập sự.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And her study buddy Dũng, king of the highlighter.",
          "sub": "Còn đây là Dũng, bạn cùng nhóm ôn, vua bút dạ quang."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Paper two? Ninety minutes, pure memory. Easy!",
          "sub": "Bài 2 á? Chín mươi phút, thuần trí nhớ. Dễ ợt!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Easy? Then why do people fail it?",
          "sub": "Dễ à? Thế sao vẫn có người trượt?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: learning goes hand in hand with practice. Dũng's version: with a highlighter.",
          "sub": "Ông bà dặn: “Học đi đôi với hành.” Bản của Dũng: học đi đôi với… bút dạ quang.",
          "keys": [
            "Học đi đôi với hành"
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
            "text": "Bài 2 hỏi gì, chấm ra sao?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:test",
            "hl": [
              {
                "text": "hỏi gì",
                "at": "l1:test"
              }
            ]
          },
          {
            "id": "b-n",
            "t": "text",
            "text": "Thi trí nhớ số điều",
            "x": 2028,
            "y": 180,
            "size": 54,
            "at": "l2:memory",
            "color": "muted"
          },
          {
            "id": "b-nx",
            "t": "strike",
            "over": "b-n",
            "at": "l2:contest"
          },
          {
            "id": "b-y",
            "t": "text",
            "text": "Chỉ đúng quy tắc → áp vào việc",
            "x": 2028,
            "y": 280,
            "size": 56,
            "at": "l2:right rule",
            "color": "accent",
            "hl": [
              {
                "text": "Chỉ đúng quy tắc",
                "at": "l2:right rule"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "2 mảng: Luật LS + Bộ Quy tắc",
            "x": 2028,
            "y": 390,
            "size": 50,
            "at": "l3:Two blocks"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 600,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+300",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2260,
            "y": 600,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+520",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2492,
            "y": 600,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+740",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2724,
            "y": 600,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+960",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2956,
            "y": 600,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+1180",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3188,
            "y": 600,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+1400",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3420,
            "y": 600,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+1620",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Kỳ thi",
            "x": 2040,
            "y": 622,
            "size": 34,
            "at": "l3:seven stops+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "50 điểm",
            "x": 2272,
            "y": 622,
            "size": 34,
            "at": "l3:seven stops+640"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Luật LS",
            "x": 2504,
            "y": 622,
            "size": 34,
            "at": "l3:seven stops+860"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Bộ Quy tắc",
            "x": 2736,
            "y": 622,
            "size": 34,
            "at": "l3:seven stops+1080"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Tình huống",
            "x": 2968,
            "y": 622,
            "size": 34,
            "at": "l3:seven stops+1300"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Điều cấm",
            "x": 3200,
            "y": 622,
            "size": 34,
            "at": "l3:seven stops+1520"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "90 phút",
            "x": 3432,
            "y": 622,
            "size": 34,
            "at": "l3:seven stops+1740"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what does paper two really test, and how is it marked?",
          "sub": "Vậy bài viết 2 thật ra hỏi gì, và chấm thế nào?",
          "keys": [
            "hỏi gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a memory contest. It tests pointing to the right rule, then applying it to the facts.",
          "sub": "Không phải thi nhớ số điều. Mà là chỉ đúng quy tắc, rồi áp vào sự việc.",
          "keys": [
            "chỉ đúng quy tắc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two blocks. Now follow Thảo's study month, in seven stops.",
          "sub": "Hai mảng: pháp luật về luật sư và Bộ Quy tắc đạo đức. Giờ theo Thảo qua tháng ôn thi, bảy chặng.",
          "keys": [
            "bảy chặng"
          ]
        }
      ],
      "ref": "intro,p11"
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
            "text": "① Kỳ kiểm tra gồm gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 130,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l2:Uncle",
            "caption": "Thứ Hai · bàn Bác Bình",
            "icon": "office-building"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Bài 1: kỹ năng · 180 phút",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l4:one hundred and eighty",
            "hl": [
              {
                "text": "180 phút",
                "at": "l4:one hundred and eighty"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Bài 2: Luật LS + Bộ Quy tắc",
            "x": 3996,
            "y": 250,
            "size": 50,
            "at": "l4:Paper two",
            "color": "accent"
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "→ 90 phút",
            "x": 4056,
            "y": 320,
            "size": 50,
            "at": "l4:ninety",
            "color": "accent",
            "hl": [
              {
                "text": "90 phút",
                "at": "l4:ninety"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Thực hành: vụ việc tự chọn",
            "x": 3996,
            "y": 410,
            "size": 50,
            "at": "l5:practical",
            "hl": [
              {
                "text": "tự chọn",
                "at": "l5:case"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Điều 17 Thông tư 10/2021/TT-BTP",
            "x": 3996,
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
          "say": "First stop: Monday, at the law firm.",
          "sub": "Chặng một: thứ Hai, ở công ty luật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Uncle Bình, Thảo's supervisor. Slow voice, sharp questions.",
          "sub": "Đây là Bác Bình, luật sư hướng dẫn tập sự của Thảo. Nói chậm, hỏi sắc.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Thảo, where does paper two sit in the exam?",
          "sub": "Thảo này, bài 2 nằm ở đâu trong kỳ kiểm tra?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Paper one, skills, one hundred and eighty minutes. Paper two, lawyers' law and the code, ninety.",
          "sub": "Bài 1 về kỹ năng, 180 phút. Bài 2 về pháp luật luật sư và Bộ Quy tắc, 90 phút.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then a practical part: defend a case you joined as a trainee.",
          "sub": "Rồi phần thực hành: trình bày, bảo vệ quan điểm về một vụ việc tự chọn đã tham gia khi tập sự."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s04",
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
            "id": "c-d",
            "t": "text",
            "text": "Đợt 2/2026, dự kiến: 20–22/11",
            "x": 4856,
            "y": 650,
            "size": 42,
            "at": "l1:twentieth",
            "hl": [
              {
                "text": "20–22/11",
                "at": "l1:twentieth"
              }
            ]
          },
          {
            "id": "c-am",
            "t": "text",
            "text": "Bài 1: sáng 21/11 · 6h50",
            "x": 3996,
            "y": 500,
            "size": 46,
            "at": "l2:twenty first"
          },
          {
            "id": "c-pm",
            "t": "text",
            "text": "Bài 2: chiều 21/11 · 13h30",
            "x": 3996,
            "y": 570,
            "size": 50,
            "at": "l2:afternoon",
            "color": "coral",
            "hl": [
              {
                "text": "chiều 21/11",
                "at": "l2:afternoon"
              }
            ]
          },
          {
            "id": "c-rg",
            "t": "text",
            "text": "Bắc: Hà Nội · Nam: TP.HCM",
            "x": 3996,
            "y": 645,
            "size": 44,
            "at": "l3:North"
          },
          {
            "id": "c-src2",
            "t": "text",
            "text": "Theo Tạp chí Luật sư Việt Nam; địa điểm theo thông báo",
            "x": 4856,
            "y": 715,
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
          "say": "The bar journal reports round two of 2026 is planned for November twentieth to twenty second.",
          "sub": "Đợt 2/2026, Tạp chí Luật sư Việt Nam đưa tin kỳ kiểm tra dự kiến các ngày 20, 21, 22/11.",
          "keys": [
            "20, 21, 22/11"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Paper one on the twenty first, from six fifty. Paper two that afternoon, from one thirty.",
          "sub": "Bài 1 sáng 21/11 từ 6 giờ 50. Bài 2 chiều cùng ngày, từ 13 giờ 30.",
          "keys": [
            "chiều cùng ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "North in Hanoi, south in Ho Chi Minh City. One day, two papers.",
          "sub": "Phía Bắc thi ở Hà Nội, phía Nam ở TP.HCM. Hai bài một ngày: sức bền buổi chiều cũng phải tính.",
          "keys": [
            "sức bền buổi chiều"
          ]
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s05",
      "module": "BRK-03",
      "data": {
        "value": 50,
        "suffix": " điểm",
        "label": "mỗi bài, trên thang 100",
        "illus": "hundred-points"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now, the magic number.",
          "sub": "Giờ đến con số thần kỳ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fifty points, on each paper, out of a hundred.",
          "sub": "Năm mươi điểm, cho từng bài, trên thang một trăm.",
          "keys": [
            "cho từng bài"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
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
            "text": "② Ngưỡng 50 điểm",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 130,
            "w": 720,
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
                "hundred-points"
              ]
            },
            "at": "l1:Dũng",
            "caption": "Tối thứ Ba · Dũng tính điểm",
            "icon": "hundred-points"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Mỗi bài ≥ 50 / 100",
            "x": 5964,
            "y": 170,
            "size": 64,
            "at": "l3:each paper",
            "color": "accent",
            "hl": [
              {
                "text": "Mỗi bài",
                "at": "l3:each paper"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Bài 1 cao ≠ bù bài 2",
            "x": 5964,
            "y": 290,
            "size": 56,
            "at": "l4:cover",
            "color": "coral",
            "hl": [
              {
                "text": "≠ bù",
                "at": "l4:cover"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Bài 2 < 50 → chưa đạt cả kỳ",
            "x": 5964,
            "y": 390,
            "size": 52,
            "at": "l4:under fifty"
          },
          {
            "id": "d-key",
            "t": "illus",
            "name": "key",
            "x": 5964,
            "y": 520,
            "size": 110,
            "at": "l5:key"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Bài ngắn nhất giữ chìa khoá",
            "x": 6104,
            "y": 545,
            "size": 54,
            "at": "l5:key",
            "color": "accent",
            "hl": [
              {
                "text": "chìa khoá",
                "at": "l5:key"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: khoản 6 Điều 25 Thông tư 10/2021/TT-BTP",
            "x": 5964,
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
          "say": "Second stop: Tuesday. Dũng does creative maths.",
          "sub": "Chặng hai: tối thứ Ba. Dũng làm toán sáng tạo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My skills paper will be great. It will carry paper two!",
          "sub": "Bài kỹ năng của mình chắc chắn cao. Nó sẽ gánh bài 2!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sorry, Dũng. Each paper must reach fifty on its own.",
          "sub": "Xin lỗi Dũng. Mỗi bài phải tự đạt từ năm mươi điểm.",
          "keys": [
            "Mỗi bài"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A great skills score cannot cover an ethics paper under fifty.",
          "sub": "Điểm cao ở bài kỹ năng không bù được bài 2 dưới năm mươi.",
          "keys": [
            "không bù được"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The shortest paper holds the key to the whole exam.",
          "sub": "Bài ngắn nhất vẫn giữ chìa khoá của cả kỳ.",
          "keys": [
            "chìa khoá"
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
            "text": "③ Mảng 1 · Luật Luật sư",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Đọc: VBHN 03 + Thông tư 10/2021",
            "x": 7932,
            "y": 160,
            "size": 46,
            "at": "l1:Consolidated",
            "hl": [
              {
                "text": "VBHN 03",
                "at": "l1:Consolidated"
              }
            ]
          },
          {
            "id": "e-b0",
            "t": "box",
            "x": 7932,
            "y": 250,
            "w": 250,
            "h": 120,
            "at": "l2:five",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "e-n0",
            "t": "text",
            "text": "Đ5",
            "x": 7948,
            "y": 256,
            "size": 50,
            "at": "l2:five+150",
            "color": "accent"
          },
          {
            "id": "e-w0",
            "t": "text",
            "text": "nguyên tắc",
            "x": 7948,
            "y": 314,
            "size": 34,
            "at": "l2:five+300"
          },
          {
            "id": "e-b1",
            "t": "box",
            "x": 8202,
            "y": 250,
            "w": 250,
            "h": 120,
            "at": "l2:nine",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "e-n1",
            "t": "text",
            "text": "Đ9",
            "x": 8218,
            "y": 256,
            "size": 50,
            "at": "l2:nine+150",
            "color": "accent"
          },
          {
            "id": "e-w1",
            "t": "text",
            "text": "điều cấm",
            "x": 8218,
            "y": 314,
            "size": 34,
            "at": "l2:nine+300"
          },
          {
            "id": "e-b2",
            "t": "box",
            "x": 8472,
            "y": 250,
            "w": 250,
            "h": 120,
            "at": "l2:ten",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "e-n2",
            "t": "text",
            "text": "Đ10",
            "x": 8488,
            "y": 256,
            "size": 50,
            "at": "l2:ten+150",
            "color": "accent"
          },
          {
            "id": "e-w2",
            "t": "text",
            "text": "tiêu chuẩn",
            "x": 8488,
            "y": 314,
            "size": 34,
            "at": "l2:ten+300"
          },
          {
            "id": "e-b3",
            "t": "box",
            "x": 7932,
            "y": 390,
            "w": 250,
            "h": 120,
            "at": "l2:fourteen",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "e-n3",
            "t": "text",
            "text": "Đ14",
            "x": 7948,
            "y": 396,
            "size": 50,
            "at": "l2:fourteen+150",
            "color": "accent"
          },
          {
            "id": "e-w3",
            "t": "text",
            "text": "tập sự",
            "x": 7948,
            "y": 454,
            "size": 34,
            "at": "l2:fourteen+300"
          },
          {
            "id": "e-b4",
            "t": "box",
            "x": 8202,
            "y": 390,
            "w": 250,
            "h": 120,
            "at": "l3:twenty three",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "e-n4",
            "t": "text",
            "text": "Đ23",
            "x": 8218,
            "y": 396,
            "size": 50,
            "at": "l3:twenty three+150",
            "color": "accent"
          },
          {
            "id": "e-w4",
            "t": "text",
            "text": "hình thức",
            "x": 8218,
            "y": 454,
            "size": 34,
            "at": "l3:twenty three+300"
          },
          {
            "id": "e-b5",
            "t": "box",
            "x": 8472,
            "y": 390,
            "w": 250,
            "h": 120,
            "at": "l3:twenty five",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "e-n5",
            "t": "text",
            "text": "Đ25",
            "x": 8488,
            "y": 396,
            "size": 50,
            "at": "l3:twenty five+150",
            "color": "accent"
          },
          {
            "id": "e-w5",
            "t": "text",
            "text": "bí mật",
            "x": 8488,
            "y": 454,
            "size": 34,
            "at": "l3:twenty five+300"
          },
          {
            "id": "e-b6",
            "t": "box",
            "x": 7932,
            "y": 530,
            "w": 250,
            "h": 120,
            "at": "l3:twenty six",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "e-n6",
            "t": "text",
            "text": "Đ26",
            "x": 7948,
            "y": 536,
            "size": 50,
            "at": "l3:twenty six+150",
            "color": "accent"
          },
          {
            "id": "e-w6",
            "t": "text",
            "text": "hợp đồng",
            "x": 7948,
            "y": 594,
            "size": 34,
            "at": "l3:twenty six+300"
          },
          {
            "id": "e-b7",
            "t": "box",
            "x": 8202,
            "y": 530,
            "w": 250,
            "h": 120,
            "at": "l3:fifty five",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "e-n7",
            "t": "text",
            "text": "Đ55",
            "x": 8218,
            "y": 536,
            "size": 50,
            "at": "l3:fifty five+150",
            "color": "accent"
          },
          {
            "id": "e-w7",
            "t": "text",
            "text": "thù lao",
            "x": 8218,
            "y": 594,
            "size": 34,
            "at": "l3:fifty five+300"
          },
          {
            "id": "e-b8",
            "t": "box",
            "x": 8472,
            "y": 530,
            "w": 250,
            "h": 120,
            "at": "l3:eighty five",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "e-n8",
            "t": "text",
            "text": "Đ85",
            "x": 8488,
            "y": 536,
            "size": 50,
            "at": "l3:eighty five+150",
            "color": "accent"
          },
          {
            "id": "e-w8",
            "t": "text",
            "text": "kỷ luật",
            "x": 8488,
            "y": 594,
            "size": 34,
            "at": "l3:eighty five+300"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 130,
            "w": 720,
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
                "books",
                "page-facing-up"
              ]
            },
            "at": "l1:home",
            "caption": "Tối thứ Tư · Thảo ôn ở nhà",
            "icon": "books"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Wednesday, at home. Block one, the Law on Lawyers, read through Consolidated Document zero three.",
          "sub": "Chặng ba: tối thứ Tư, ở nhà. Mảng một, Luật Luật sư, đọc theo Văn bản hợp nhất 03 và văn bản hướng dẫn như Thông tư 10.",
          "keys": [
            "Văn bản hợp nhất 03"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The usual suspects: Article five on principles, nine on bans, ten on standards, fourteen on probation.",
          "sub": "Những “gương mặt quen”: Điều 5 nguyên tắc, Điều 9 điều cấm, Điều 10 tiêu chuẩn, Điều 14 tập sự.",
          "keys": [
            "gương mặt quen"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then twenty three, twenty five, twenty six, fifty five on fees, and eighty five on discipline.",
          "sub": "Rồi Điều 23 hình thức hành nghề, 25 bí mật, 26 hợp đồng, 55 thù lao, và 85 xử lý kỷ luật."
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
            "fit": "E",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": [
              "e-v",
              "e-u"
            ],
            "zoom": 1.15,
            "ms": 700
          },
          {
            "at": "l2:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-u",
            "t": "text",
            "text": "01/7/2025: Chủ tịch UBND tỉnh cấp",
            "x": 8792,
            "y": 650,
            "size": 40,
            "at": "l1:July",
            "color": "accent",
            "hl": [
              {
                "text": "Chủ tịch UBND tỉnh",
                "at": "l1:provincial"
              }
            ]
          },
          {
            "id": "e-o",
            "t": "text",
            "text": "VBHN có thể ghi thẩm quyền cũ",
            "x": 8792,
            "y": 705,
            "size": 38,
            "at": "l2:old authority",
            "color": "coral"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Theo Tạp chí Luật sư Việt Nam về Nghị định 121/2025/NĐ-CP",
            "x": 7932,
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
          "say": "One update: from July first 2025, under Decree one twenty one, the provincial chairman issues practising certificates.",
          "sub": "Một điểm cập nhật: từ 01/7/2025, theo Nghị định 121/2025, Chủ tịch UBND cấp tỉnh cấp, cấp lại chứng chỉ hành nghề luật sư.",
          "keys": [
            "Chủ tịch UBND cấp tỉnh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The consolidated text may still show the old authority.",
          "sub": "Văn bản hợp nhất có thể vẫn ghi thẩm quyền cũ."
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
            "text": "④ Mảng 2 · Bộ Quy tắc",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "QĐ 201/QĐ-HĐLSTQ · 13/12/2019",
            "x": 60,
            "y": 1240,
            "size": 44,
            "at": "l1:two oh one",
            "hl": [
              {
                "text": "13/12/2019",
                "at": "l1:December"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "6 chương · 32 quy tắc",
            "x": 60,
            "y": 1305,
            "size": 50,
            "at": "l2:six chapters",
            "color": "accent",
            "hl": [
              {
                "text": "32 quy tắc",
                "at": "l2:thirty two"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "(bản 2011: 27 quy tắc)",
            "x": 520,
            "y": 1315,
            "size": 36,
            "at": "l2:twenty seven",
            "color": "muted"
          },
          {
            "id": "f-b0",
            "t": "box",
            "x": 60,
            "y": 1420,
            "w": 30,
            "h": 30,
            "at": "l3:general",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "f-c0",
            "t": "text",
            "text": "Chung · QT 1–4",
            "x": 110,
            "y": 1404,
            "size": 44,
            "at": "l3:general+150"
          },
          {
            "id": "f-b1",
            "t": "box",
            "x": 60,
            "y": 1484,
            "w": 30,
            "h": 30,
            "at": "l3:clients",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "f-c1",
            "t": "text",
            "text": "Khách hàng · QT 5–16",
            "x": 110,
            "y": 1468,
            "size": 44,
            "at": "l3:clients+150",
            "color": "coral"
          },
          {
            "id": "f-b2",
            "t": "box",
            "x": 60,
            "y": 1548,
            "w": 30,
            "h": 30,
            "at": "l3:colleagues",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "f-c2",
            "t": "text",
            "text": "Đồng nghiệp · QT 17–25",
            "x": 110,
            "y": 1532,
            "size": 44,
            "at": "l3:colleagues+150"
          },
          {
            "id": "f-b3",
            "t": "box",
            "x": 60,
            "y": 1612,
            "w": 30,
            "h": 30,
            "at": "l4:courts",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "f-c3",
            "t": "text",
            "text": "Tố tụng · QT 26–28",
            "x": 110,
            "y": 1596,
            "size": 44,
            "at": "l4:courts+150"
          },
          {
            "id": "f-b4",
            "t": "box",
            "x": 60,
            "y": 1676,
            "w": 30,
            "h": 30,
            "at": "l4:other",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "f-c4",
            "t": "text",
            "text": "Cơ quan khác · QT 29–30",
            "x": 110,
            "y": 1660,
            "size": 44,
            "at": "l4:other+150"
          },
          {
            "id": "f-b5",
            "t": "box",
            "x": 60,
            "y": 1740,
            "w": 30,
            "h": 30,
            "at": "l4:media",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "f-c5",
            "t": "text",
            "text": "Truyền thông · QT 31–32",
            "x": 110,
            "y": 1724,
            "size": 44,
            "at": "l4:media+150"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: the code of ethics, Decision two oh one, December 2019.",
          "sub": "Chặng bốn: mảng hai, Bộ Quy tắc. Ban hành kèm Quyết định 201/QĐ-HĐLSTQ ngày 13/12/2019.",
          "keys": [
            "Quyết định 201"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A preamble, six chapters, thirty two rules. Up from twenty seven in 2011.",
          "sub": "Lời nói đầu, 6 chương, 32 quy tắc. Tăng từ 27 quy tắc của bản 2011.",
          "keys": [
            "32 quy tắc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Chapters follow relationships: general rules, clients, colleagues,",
          "sub": "Sáu chương chia theo quan hệ: quy tắc chung, khách hàng, đồng nghiệp,",
          "keys": [
            "theo quan hệ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "courts, other agencies and people, and finally media and advertising. Six hooks for thirty two rules.",
          "sub": "cơ quan tố tụng, cơ quan khác và cá nhân, cuối cùng là truyền thông, quảng cáo. Sáu cái móc treo 32 quy tắc.",
          "keys": [
            "Sáu cái móc"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s10",
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
          }
        ],
        "items": [
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "shrug"
                }
              ],
              "props": [
                "scroll"
              ]
            },
            "at": "l1:Dũng",
            "caption": "Tối thứ Năm · Dũng xua tay",
            "icon": "scroll"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday, Dũng waves the code away.",
          "sub": "Tối thứ Năm, Dũng xua tay với Bộ Quy tắc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Ethics? That's moral advice. Knowing the gist is enough.",
          "sub": "Đạo đức á? Lời khuyên thôi mà. Thuộc đại ý là đủ.",
          "pose": "shrug"
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s11",
      "module": "BRK-04",
      "data": {
        "title": "Bộ Quy tắc là gì?",
        "wrong": "Lời khuyên đạo đức, thuộc đại ý là đủ",
        "right": "Căn cứ giám sát, giải quyết khiếu nại, xử lý kỷ luật",
        "wrongIllus": "thinking-face",
        "rightIllus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Moral advice?",
          "sub": "Chỉ là lời khuyên đạo đức?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. A basis for discipline.",
          "sub": "Không. Điều 2 QĐ 201: căn cứ để xử lý kỷ luật.",
          "keys": [
            "xử lý kỷ luật"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-153",
            "t": "text",
            "text": "15.3: từng trường hợp phải từ chối",
            "x": 920,
            "y": 1740,
            "size": 38,
            "at": "l1:fifteen point three",
            "color": "coral",
            "hl": [
              {
                "text": "phải từ chối",
                "at": "l1:must refuse"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Chuẩn để chấm, không phải khẩu hiệu",
            "x": 920,
            "y": 1795,
            "size": 38,
            "at": "l2:slogan",
            "color": "accent",
            "hl": [
              {
                "text": "không phải khẩu hiệu",
                "at": "l2:slogan"
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
          "say": "And clauses get very precise. Clause fifteen point three lists each conflict where you must refuse.",
          "sub": "Nhiều khoản viết rất cụ thể. Khoản 15.3 liệt kê từng trường hợp phải từ chối vì xung đột lợi ích.",
          "keys": [
            "Khoản 15.3"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ethics rules are a marking standard, not a slogan.",
          "sub": "Quy tắc đạo đức là chuẩn để chấm và để xử lý, không phải câu khẩu hiệu.",
          "keys": [
            "không phải câu khẩu hiệu"
          ]
        }
      ],
      "ref": "p9,p10"
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
            "at": "l3",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tình huống · Bác Bình hỏi",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2888,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "handshake"
              ]
            },
            "at": "l1:Uncle",
            "caption": "Thứ Sáu · Bác Bình ra đề",
            "icon": "page-facing-up"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Đề kèm đáp án, thang điểm",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l1:marking guide"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "2 giám khảo chấm độc lập",
            "x": 2028,
            "y": 1330,
            "size": 46,
            "at": "l2:examiners",
            "hl": [
              {
                "text": "độc lập",
                "at": "l2:independent"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Ôn cả: trình bày + tình huống",
            "x": 2028,
            "y": 1420,
            "size": 46,
            "at": "l2:prepare",
            "color": "accent",
            "hl": [
              {
                "text": "tình huống",
                "at": "l2:cases"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Điều 21 Thông tư 10/2021/TT-BTP",
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
          "say": "Fifth stop: Friday. Uncle Bình plays examiner, with a marking guide.",
          "sub": "Chặng năm: thứ Sáu. Bác Bình đóng vai giám khảo. Đề thật có kèm đáp án, thang điểm.",
          "keys": [
            "đáp án, thang điểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two independent examiners, no fixed format. So prepare rules and cases.",
          "sub": "Hai giám khảo chấm độc lập, dạng câu hỏi không cố định. Nên ôn cả hai: trình bày quy định, và giải tình huống.",
          "keys": [
            "ôn cả hai"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "A lawyer once advised the seller in a contract. Now the buyer wants to sue that seller over it.",
          "sub": "Một luật sư từng tư vấn cho bên bán trong một hợp đồng. Nay bên mua nhờ kiện chính bên bán về hợp đồng đó.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "The seller will sign a written consent. Can the lawyer take it?",
          "sub": "Bên bán sẵn sàng ký giấy đồng ý. Luật sư có nhận được không?",
          "pose": "explain"
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Sáu · Bác Bình ra đề",
        "actors": [
          {
            "id": "binh",
            "side": "left"
          },
          {
            "id": "thao",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Có giấy đồng ý là nhận được",
          "why": "Khoản 15.4 cho nhận khi khách hàng đồng ý bằng văn bản, nhưng điểm 15.4.2 loại trừ vụ án, vụ việc tố tụng.",
          "rule": "Ngoại lệ của ngoại lệ mới quyết định điểm"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Written consent? Then yes, the lawyer can take it!",
          "sub": "Có giấy đồng ý rồi? Vậy là nhận được!",
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
          "say": "Clause fifteen point three point three: a conflict with a former client, in the same matter.",
          "sub": "Khoản 15.3.3: xung đột với khách hàng cũ trong cùng vụ việc.",
          "keys": [
            "Khoản 15.3.3"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Trả lời lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Consent works under fifteen point four. But fifteen point four point two excludes lawsuits. He must refuse.",
          "sub": "Khoản 15.4 cho nhận khi có đồng ý bằng văn bản, nhưng điểm 15.4.2 loại trừ vụ việc tố tụng. Phải từ chối.",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "binh",
          "say": "Good. This one goes to court.",
          "sub": "Đúng. Vụ này ra toà mà.",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p12,p13"
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
            "id": "g-a",
            "t": "text",
            "text": "15.3.3: khách cũ, cùng vụ việc",
            "x": 2028,
            "y": 1520,
            "size": 44,
            "at": "l1:former client"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "15.4: đồng ý bằng văn bản → nhận",
            "x": 2028,
            "y": 1590,
            "size": 44,
            "at": "l1:consent"
          },
          {
            "id": "g-c",
            "t": "text",
            "text": "15.4.2: trừ vụ việc tố tụng",
            "x": 2028,
            "y": 1660,
            "size": 46,
            "at": "l1:lawsuits",
            "color": "coral",
            "hl": [
              {
                "text": "trừ vụ việc tố tụng",
                "at": "l1:lawsuits"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Ngoại lệ của ngoại lệ",
            "x": 2888,
            "y": 1740,
            "size": 50,
            "at": "l2:exception",
            "color": "accent",
            "hl": [
              {
                "text": "Ngoại lệ của ngoại lệ",
                "at": "l2:exception"
              }
            ]
          },
          {
            "id": "g-n",
            "t": "text",
            "text": "Bài sau: xung đột lợi ích và bảo mật",
            "x": 2888,
            "y": 1810,
            "size": 30,
            "at": "l3:conflicts",
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
          "say": "Former client, same matter. Consent opens the door, but lawsuits stay shut.",
          "sub": "Khách hàng cũ, cùng vụ việc. Giấy đồng ý mở được cửa, trừ cửa tố tụng.",
          "keys": [
            "trừ cửa tố tụng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The main rule is not enough. The exception to the exception decides the score.",
          "sub": "Thuộc quy tắc chính chưa đủ; ngoại lệ của ngoại lệ mới quyết định điểm.",
          "keys": [
            "ngoại lệ của ngoại lệ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The conflicts lesson trains exactly this.",
          "sub": "Bài về xung đột lợi ích và bảo mật luyện đúng việc này: nhận diện, chọn quy tắc, viết đoạn lập luận gọn."
        }
      ],
      "ref": "p12,p13,p14"
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
            "text": "⑥ Điều cấm hay ra đề",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth stop"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "give",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "stop"
                }
              ],
              "props": [
                "money-bag",
                "page-facing-up"
              ]
            },
            "at": "l1:Cô Hoa",
            "caption": "Thứ Bảy · khách của Bác Bình",
            "icon": "money-bag"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Đ9.1đ: cấm đòi, nhận thêm tiền",
            "x": 3996,
            "y": 1260,
            "size": 44,
            "at": "l4:point",
            "color": "coral",
            "hl": [
              {
                "text": "cấm đòi, nhận thêm",
                "at": "l4:extra money"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "QT 8: ghi rõ thù lao",
            "x": 3996,
            "y": 1335,
            "size": 44,
            "at": "l5:eight"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "21.4: cấm trả tiền môi giới",
            "x": 3996,
            "y": 1410,
            "size": 44,
            "at": "l5:twenty one"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "QT 32: cấm quảng cáo sai",
            "x": 3996,
            "y": 1485,
            "size": 44,
            "at": "l5:thirty two",
            "hl": [
              {
                "text": "quảng cáo sai",
                "at": "l5:misleading"
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
          "say": "Sixth stop: money. Meet Cô Hoa, Uncle Bình's client, grateful in advance.",
          "sub": "Chặng sáu: tiền và khách hàng. Đây là cô Hoa, khách của Bác Bình, biết ơn… trước.",
          "keys": [
            "biết ơn… trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Win this for me, and I'll add a little envelope on top.",
          "sub": "Thắng vụ này, cô gửi thêm phong bì nhé.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Thank you, but only the fee in our contract.",
          "sub": "Cảm ơn cô, nhưng chỉ đúng thù lao trong hợp đồng thôi.",
          "pose": "stop"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article nine, point đ: no extra money beyond the agreed fee.",
          "sub": "Điểm đ khoản 1 Điều 9: cấm nhận, đòi thêm tiền ngoài thù lao và chi phí đã thoả thuận.",
          "keys": [
            "cấm nhận, đòi thêm tiền"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rule eight: fees in writing. Twenty one point four: no paid brokers. Thirty two: no misleading ads.",
          "sub": "Quy tắc 8: giải thích, ghi rõ thù lao và chi phí. Khoản 21.4: cấm trả tiền môi giới khách. Quy tắc 32: cấm quảng cáo sai, gây hiểu nhầm.",
          "keys": [
            "cấm trả tiền môi giới"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1200
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s17",
      "module": "BRK-11",
      "data": {
        "title": "Điều 85: 4 hình thức kỷ luật",
        "items": [
          "Xoá tên khỏi danh sách Đoàn",
          "Tạm đình chỉ 6–24 tháng",
          "Cảnh cáo",
          "Khiển trách"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Four: reprimand.",
          "sub": "Bốn: khiển trách."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three: warning.",
          "sub": "Ba: cảnh cáo."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: suspension.",
          "sub": "Hai: tạm đình chỉ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One: removal from the bar.",
          "sub": "Một: xoá tên khỏi danh sách.",
          "keys": [
            "xoá tên"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
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
          }
        ],
        "items": [
          {
            "id": "h-5",
            "t": "text",
            "text": "Tạm đình chỉ: 6–24 tháng",
            "x": 3996,
            "y": 1570,
            "size": 44,
            "at": "l1:six"
          },
          {
            "id": "h-6",
            "t": "text",
            "text": "Ban chủ nhiệm Đoàn quyết định",
            "x": 3996,
            "y": 1640,
            "size": 44,
            "at": "l1:Executive",
            "hl": [
              {
                "text": "Ban chủ nhiệm Đoàn",
                "at": "l1:Executive"
              }
            ]
          },
          {
            "id": "h-7",
            "t": "text",
            "text": "Đ89: hành chính · hình sự · bồi thường",
            "x": 3996,
            "y": 1715,
            "size": 42,
            "at": "l2:eighty nine",
            "color": "coral",
            "hl": [
              {
                "text": "hình sự",
                "at": "l2:criminal"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Điều 9, 85, 89 Luật Luật sư · Quy tắc 8, 21, 32",
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
          "say": "Suspension: six to twenty four months. The bar's Executive Board decides, on its council's proposal.",
          "sub": "Tạm đình chỉ từ sáu đến hai mươi bốn tháng. Ban chủ nhiệm Đoàn quyết định, theo đề nghị của Hội đồng khen thưởng, kỷ luật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article eighty nine adds fines, criminal liability and damages.",
          "sub": "Điều 89 còn có xử phạt hành chính, truy cứu hình sự, bồi thường thiệt hại. Hai bài sau đào sâu: thù lao, quảng cáo và xử lý kỷ luật.",
          "keys": [
            "Điều 89"
          ]
        }
      ],
      "ref": "p17,p18,p16"
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
            "text": "⑦ 90 phút · Luật phòng thi",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh stop"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Điểm = trung bình 2 giám khảo",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l1:average",
            "hl": [
              {
                "text": "trung bình",
                "at": "l1:average"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Lập luận sáng tạo: có thể thưởng",
            "x": 5964,
            "y": 1335,
            "size": 44,
            "at": "l2:bonus",
            "color": "accent"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Đ23.2: văn bản → bài kỹ năng",
            "x": 5964,
            "y": 1420,
            "size": 44,
            "at": "l3:skills paper"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Bài 2: làm theo trí nhớ",
            "x": 5964,
            "y": 1490,
            "size": 50,
            "at": "l3:memory",
            "color": "coral",
            "hl": [
              {
                "text": "theo trí nhớ",
                "at": "l3:memory"
              }
            ]
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Trễ quá 15 phút → bị đình chỉ",
            "x": 5964,
            "y": 1580,
            "size": 46,
            "at": "l4:fifteen",
            "color": "coral",
            "hl": [
              {
                "text": "15 phút",
                "at": "l4:fifteen"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: Điều 23–25 Thông tư 10/2021/TT-BTP",
            "x": 5964,
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
          "say": "Seventh stop: room rules. Your score is the average of two examiners.",
          "sub": "Chặng bảy: luật phòng thi. Điểm là trung bình của hai giám khảo.",
          "keys": [
            "trung bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Creative reasoning can earn bonus points.",
          "sub": "Lập luận sáng tạo khác đáp án có thể được thưởng điểm.",
          "keys": [
            "thưởng điểm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Texts are allowed for the skills paper. For paper two, prepare from memory.",
          "sub": "Khoản 2 Điều 23 cho mang văn bản vào với bài kỹ năng; bài 2 nên chuẩn bị làm theo trí nhớ, đọc kỹ nội quy.",
          "keys": [
            "làm theo trí nhớ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Over fifteen minutes late after the questions? You are out.",
          "sub": "Còn vào phòng sau 15 phút kể từ khi công bố đề? Bị đình chỉ.",
          "keys": [
            "Bị đình chỉ"
          ]
        }
      ],
      "ref": "p19"
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
            "at": "l2:Two",
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
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-calendar",
                "stopwatch"
              ]
            },
            "at": "l2",
            "caption": "Chủ nhật · kế hoạch của Thảo",
            "icon": "spiral-calendar"
          },
          {
            "id": "p-1",
            "t": "text",
            "text": "1 · Bản đồ luật",
            "x": 5964,
            "y": 1660,
            "size": 38,
            "at": "l2:map"
          },
          {
            "id": "p-2",
            "t": "text",
            "text": "2 · 6 nhóm quy tắc",
            "x": 6364,
            "y": 1660,
            "size": 38,
            "at": "l2:six groups"
          },
          {
            "id": "p-3",
            "t": "text",
            "text": "3 · Tối: 1 tình huống",
            "x": 5964,
            "y": 1720,
            "size": 38,
            "at": "l3:night"
          },
          {
            "id": "p-4",
            "t": "text",
            "text": "4 · Cuối tuần: đề 90'",
            "x": 6364,
            "y": 1720,
            "size": 38,
            "at": "l3:weekend",
            "color": "accent"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Ôn cách lập luận",
            "x": 6824,
            "y": 1760,
            "size": 52,
            "at": "l4:reasoning",
            "color": "accent",
            "hl": [
              {
                "text": "cách lập luận",
                "at": "l4:reasoning"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One: a map of the Law on Lawyers. Two: thirty two rules in six groups.",
          "sub": "Một: vẽ bản đồ Luật Luật sư. Hai: xếp 32 quy tắc vào sáu nhóm.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Three: a case every night, on paper. Four: a timed ninety minute paper each weekend, marked out of a hundred.",
          "sub": "Ba: mỗi tối giải một tình huống xung đột hoặc thù lao, viết ra giấy. Bốn: cuối tuần làm một đề trọn 90 phút, tự chấm thang 100, ghi lỗi vào sổ.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Paper two trains your reasoning, not just your memory.",
          "sub": "Ôn bài 2 là ôn cách lập luận, không chỉ ôn trí nhớ. Bài luyện đề có mẫu trả lời, cách chia giờ và tự chấm so với ngưỡng 50.",
          "keys": [
            "ôn cách lập luận"
          ]
        }
      ],
      "ref": "p20,p21,p22"
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
            "text": "Vài tuần sau · vẫn quán ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Weeks later"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "books",
                "hot-beverage"
              ]
            },
            "at": "l1:café",
            "caption": "Vài tuần sau · cùng quán, cùng bàn",
            "icon": "hot-beverage"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1265,
            "w": 40,
            "h": 40,
            "at": "l5:timing",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1249,
            "size": 50,
            "at": "l5:timing+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "90 phút · mỗi bài ≥ 50",
            "x": 7994,
            "y": 1255,
            "size": 38,
            "at": "l5:timing+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1337,
            "w": 40,
            "h": 40,
            "at": "l5:texts",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1321,
            "size": 50,
            "at": "l5:texts+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "VBHN + văn bản mới",
            "x": 7994,
            "y": 1327,
            "size": 38,
            "at": "l5:texts+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1409,
            "w": 40,
            "h": 40,
            "at": "l5:chapters",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1393,
            "size": 50,
            "at": "l5:chapters+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "6 chương Bộ Quy tắc",
            "x": 7994,
            "y": 1399,
            "size": 38,
            "at": "l5:chapters+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1481,
            "w": 40,
            "h": 40,
            "at": "l5:cases",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1465,
            "size": 50,
            "at": "l5:cases+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Tình huống xung đột, thù lao",
            "x": 7994,
            "y": 1471,
            "size": 38,
            "at": "l5:cases+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1553,
            "w": 40,
            "h": 40,
            "at": "l5:discipline",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1537,
            "size": 50,
            "at": "l5:discipline+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "4 hình thức kỷ luật",
            "x": 7994,
            "y": 1543,
            "size": 38,
            "at": "l5:discipline+200"
          },
          {
            "id": "j-c5",
            "t": "box",
            "x": 7932,
            "y": 1625,
            "w": 40,
            "h": 40,
            "at": "l5:full paper",
            "stroke": 5
          },
          {
            "id": "j-k5",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1609,
            "size": 50,
            "at": "l5:full paper+600",
            "color": "accent"
          },
          {
            "id": "j-l5",
            "t": "text",
            "text": "1 đề trọn 90 phút",
            "x": 7994,
            "y": 1615,
            "size": 38,
            "at": "l5:full paper+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Học đi đôi với hành”",
            "x": 7932,
            "y": 1690,
            "size": 50,
            "at": "l4:hand in hand",
            "color": "accent",
            "hl": [
              {
                "text": "hành",
                "at": "l4:practice"
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
          "say": "Weeks later. Same café, same table.",
          "sub": "Vài tuần sau. Vẫn quán ấy, vẫn bàn ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I tried Uncle Bình's case. With my highlighter, I took that lawsuit.",
          "sub": "Mình thử tình huống của Bác Bình rồi. Với cây bút dạ quang, mình đã nhận vụ kiện đó.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Paper two isn't easy. It's just short.",
          "sub": "Bài 2 không dễ. Chỉ là ngắn thôi.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Learning goes hand in hand with practice. This time, Dũng practises.",
          "sub": "“Học đi đôi với hành.” Lần này Dũng hành thật.",
          "keys": [
            "Học đi đôi với hành"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Her checklist: timing, texts, chapters, cases, discipline, a full paper.",
          "sub": "Danh sách của Thảo: 90 phút và 50 điểm; văn bản mới; sáu chương; tình huống xung đột, thù lao; bốn hình thức kỷ luật; một đề trọn 90 phút."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "to": "l1",
          "key": "tich-tac-dai"
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
            "fit": "J",
            "move": "cut"
          },
          {
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7464,
            "y": 40,
            "at": "l1:fifty"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1560,
            "y": 1130,
            "at": "l2:six"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3528,
            "y": 1130,
            "at": "l3:cases"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "g-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:cases+400"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức nghề để ôn thi, không phải tư vấn vụ việc cụ thể. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1770,
            "size": 26,
            "at": "l4",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "z-note2",
            "t": "text",
            "text": "Luật Luật sư đang sửa đổi (kỳ họp 17/10–21/11/2026): kiểm lại văn bản mới.",
            "x": 7932,
            "y": 1808,
            "size": 26,
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
          "say": "So: two blocks, ninety minutes, and fifty points on each paper.",
          "sub": "Tóm lại: hai mảng, chín mươi phút, và năm mươi điểm cho từng bài.",
          "keys": [
            "năm mươi điểm cho từng bài"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Hang the thirty two rules on six chapters.",
          "sub": "Treo 32 quy tắc lên sáu chương.",
          "keys": [
            "sáu chương"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And train cases, not just articles.",
          "sub": "Và luyện tình huống, không chỉ thuộc điều.",
          "keys": [
            "luyện tình huống"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Today: stick the six chapters by your desk. And check the latest texts: the law is being amended.",
          "sub": "Việc làm ngay: in sáu chương của Bộ Quy tắc, dán cạnh bàn học. Luật Luật sư đang sửa đổi, hãy kiểm lại văn bản mới.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next: the map of the Law on Lawyers.",
          "sub": "Bài tiếp theo: bản đồ Luật Luật sư, những chương, điều hay ra đề."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s23",
      "module": "QUIZ-01",
      "data": {
        "q": "Thao scores very well on skills but below half on ethics, does she pass?",
        "options": [
          "No, each paper needs its own pass mark, and one score cannot offset another",
          "Yes, the strong skills score is averaged with ethics and lifts the total",
          "Yes, as long as her supervising lawyer signs a letter supporting her"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "hundred-points",
        "why": "Mỗi bài phải từ 50 điểm; bài kỹ năng cao không bù được."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Thao scores very well on skills but below half on ethics, does she pass?",
          "sub": "Thảo đạt điểm cao ở bài kỹ năng nhưng bài đạo đức dưới một nửa, Thảo có đạt không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No, each paper needs its own pass mark, and one score cannot offset another.",
          "sub": "Chưa đạt: mỗi bài phải tự đạt từ 50 điểm."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A high skills score cannot make up for an ethics paper under fifty.",
          "sub": "Điểm cao ở bài kỹ năng không bù được bài 2 dưới 50 điểm."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[6]"
    },
    {
      "id": "s24",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Bài viết 2: hỏi gì, chấm ra sao"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ ngay bên dưới.",
          "face": "happy"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-24 neo số “50 / 100” (khoản 6 Điều 25 TT 10/2021). Đét đứng trái + bảng trắng 10 ô (5 × 2) theo THÁNG ÔN BÀI VIẾT 2 của Thảo: tối ở quán (Dũng: “bài 2 dễ, thuộc là xong”) → thứ Hai Bác Bình hỏi cấu trúc kỳ thi (p1, p2) → BRK-03 50 điểm → Dũng muốn bài 1 gánh bài 2 (p3) → Luật Luật sư (p5, p6) → Bộ Quy tắc (p7, p8; BRK-04 Sai/Đúng p9) → Bác Bình ra tình huống 15.3.3/15.4.2 (“Khoan đã!” DLG, p12) → điều cấm tiền & khách với cô Hoa làm khách (p15; BRK-11 bốn hình thức kỷ luật p17) → luật phòng thi + kế hoạch bốn bước của Thảo (p19, p20) → vài tuần sau cùng quán (khép vòng “Học đi đôi với hành”, checklist p23). Nhân vật (w145/_series/bar-exam-written2-ethics.md): Thảo, Dũng, Bác Bình, cô Hoa (khách). Mọi điều, khoản, mốc lấy từ bài; lưu ý chung #133 ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
