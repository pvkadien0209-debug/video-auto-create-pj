// bar-oral-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-oral-overview--w01",
  "unit": {
    "audience": "bar-exam-oral",
    "slug": "bar-oral-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Phần thực hành vấn đáp diễn ra thế nào và chấm điều gì?",
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
            "fit": "A",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "a-ans",
            "t": "text",
            "text": "Hai việc · Một lần chấm",
            "x": 60,
            "y": 100,
            "size": 96,
            "at": "l1:two jobs",
            "color": "accent",
            "hl": [
              {
                "text": "Một lần chấm",
                "at": "l1:one marking"
              }
            ]
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "① Trình bày, bảo vệ quan điểm",
            "x": 70,
            "y": 250,
            "size": 50,
            "at": "l2:present"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "② Trả lời câu hỏi Ban chấm",
            "x": 70,
            "y": 330,
            "size": 50,
            "at": "l2:answer"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "Không phúc tra",
            "x": 70,
            "y": 420,
            "size": 60,
            "at": "l2:second",
            "color": "coral",
            "hl": [
              {
                "text": "Không phúc tra",
                "at": "l2:second marking"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Nghe dễ? 3 chỗ hay vấp",
            "x": 70,
            "y": 515,
            "size": 48,
            "at": "l3:three",
            "color": "muted"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Thông tư 10/2021/TT-BTP, Điều 17, 25",
            "x": 60,
            "y": 600,
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
          "say": "The whole oral part, in short: two jobs, one marking.",
          "sub": "Cả phần vấn đáp, gói gọn: hai việc, một lần chấm.",
          "keys": [
            "hai việc, một lần chấm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Present your own case, answer the panel. And no second marking afterwards.",
          "sub": "Trình bày vụ của mình, trả lời Ban chấm. Và không có phúc tra.",
          "keys": [
            "không có phúc tra"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sounds easy. Yet people trip in three places.",
          "sub": "Nghe dễ. Vậy mà người ta hay vấp ở ba chỗ.",
          "keys": [
            "ba chỗ"
          ]
        }
      ],
      "ref": "intro,p3,p13"
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
            "x": 1010,
            "y": 250,
            "w": 680,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "worried"
                }
              ],
              "props": [
                "page-facing-up",
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
            "caption": "Tối đầu tiên ôn · ở nhà",
            "icon": "crescent-moon"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Lời nói chẳng mất tiền mua”",
            "x": 60,
            "y": 650,
            "size": 42,
            "at": "l4:cost",
            "color": "accent"
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "…nhưng chỉ chấm một lần",
            "x": 60,
            "y": 712,
            "size": 42,
            "at": "l5:once",
            "color": "coral",
            "hl": [
              {
                "text": "một lần",
                "at": "l5:once"
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
          "say": "Meet Thảo.",
          "sub": "Đây là Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A trainee lawyer. Her writing is solid. Her knees, less so.",
          "sub": "Người tập sự hành nghề luật sư. Viết thì chắc tay. Đầu gối thì không.",
          "keys": [
            "Viết thì chắc tay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Writing is fine. But facing the panel? My hands shake already.",
          "sub": "Viết thì ổn. Nhưng ngồi trước Ban chấm à? Tay run rồi.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: words cost nothing to buy.",
          "sub": "Ông bà dặn: “Lời nói chẳng mất tiền mua.”",
          "keys": [
            "Lời nói chẳng mất tiền mua"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "True. But in that room, your words are marked only once.",
          "sub": "Đúng. Nhưng trong phòng thi ấy, lời nói chỉ được chấm một lần.",
          "keys": [
            "chỉ được chấm một lần"
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
            "text": "Thi gì, ai chấm, chấm ra sao?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:practical",
            "hl": [
              {
                "text": "chấm ra sao",
                "at": "l1:marked"
              }
            ]
          },
          {
            "id": "b-w1b",
            "t": "box",
            "x": 2028,
            "y": 170,
            "w": 500,
            "h": 230,
            "at": "l2:paper",
            "stroke": 5
          },
          {
            "id": "b-w1",
            "t": "text",
            "text": "Viết 1 · 180 phút",
            "x": 2058,
            "y": 190,
            "size": 50,
            "at": "l2:paper+200",
            "hl": [
              {
                "text": "180 phút",
                "at": "l2:hundred"
              }
            ]
          },
          {
            "id": "b-w1s",
            "t": "text",
            "text": "tố tụng, tư vấn, đại diện…",
            "x": 2058,
            "y": 270,
            "size": 38,
            "at": "l2:advice",
            "color": "muted"
          },
          {
            "id": "b-w2b",
            "t": "box",
            "x": 2568,
            "y": 170,
            "w": 500,
            "h": 230,
            "at": "l3:paper",
            "stroke": 5
          },
          {
            "id": "b-w2",
            "t": "text",
            "text": "Viết 2 · 90 phút",
            "x": 2598,
            "y": 190,
            "size": 50,
            "at": "l3:paper+200",
            "hl": [
              {
                "text": "90 phút",
                "at": "l3:ninety"
              }
            ]
          },
          {
            "id": "b-w2s",
            "t": "text",
            "text": "luật về luật sư, đạo đức",
            "x": 2598,
            "y": 270,
            "size": 38,
            "at": "l3:ethics",
            "color": "muted"
          },
          {
            "id": "b-pb",
            "t": "box",
            "x": 3108,
            "y": 170,
            "w": 520,
            "h": 230,
            "at": "l4:practical",
            "stroke": 7,
            "color": "coral"
          },
          {
            "id": "b-p",
            "t": "text",
            "text": "Thực hành",
            "x": 3138,
            "y": 190,
            "size": 56,
            "at": "l4:practical+200",
            "color": "coral",
            "hl": [
              {
                "text": "Thực hành",
                "at": "l4:practical"
              }
            ]
          },
          {
            "id": "b-ps",
            "t": "text",
            "text": "← video này",
            "x": 3138,
            "y": 280,
            "size": 42,
            "at": "l4:today",
            "color": "accent"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Thông tư 10/2021/TT-BTP, Điều 17",
            "x": 2028,
            "y": 430,
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
          "say": "So how does the oral practical part work, and what is marked?",
          "sub": "Vậy phần thực hành vấn đáp diễn ra thế nào, chấm điều gì?",
          "keys": [
            "chấm điều gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article seventeen: paper one, litigation and legal advice skills, one hundred and eighty minutes.",
          "sub": "Điều 17: bài viết một, kỹ năng tố tụng, tư vấn, đại diện: 180 phút.",
          "keys": [
            "180 phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Paper two, the law on lawyers and ethics, ninety minutes.",
          "sub": "Bài viết hai, pháp luật luật sư và đạo đức nghề: 90 phút.",
          "keys": [
            "90 phút"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then the practical part. Today's topic.",
          "sub": "Rồi đến phần thực hành. Chủ đề hôm nay.",
          "keys": [
            "phần thực hành"
          ]
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Đợt 2/2026 (dự kiến)",
        "points": [
          {
            "label": "20/11",
            "sub": "Ngày đầu đợt",
            "illus": "spiral-calendar"
          },
          {
            "label": "21/11",
            "sub": "Hai bài viết",
            "illus": "writing-hand"
          },
          {
            "label": "22/11 · 7:00",
            "sub": "Thực hành buổi sáng",
            "illus": "sunrise"
          },
          {
            "label": "22/11 · 13:30",
            "sub": "Thực hành buổi chiều",
            "illus": "speaking-head"
          }
        ],
        "current": 2
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Session two: planned for November twentieth to twenty-second.",
          "sub": "Đợt 2/2026: dự kiến 20 đến 22/11.",
          "keys": [
            "20 đến 22/11"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Oral part: the twenty-second, from seven or one thirty.",
          "sub": "Thực hành: 22/11, từ 7 giờ hoặc 13 giờ 30.",
          "keys": [
            "22/11"
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
          }
        ],
        "items": [
          {
            "id": "b-n",
            "t": "text",
            "text": "Huế trở ra → Hà Nội",
            "x": 2028,
            "y": 470,
            "size": 46,
            "at": "l1:north",
            "hl": [
              {
                "text": "Hà Nội",
                "at": "l1:hanoi"
              }
            ]
          },
          {
            "id": "b-s",
            "t": "text",
            "text": "Đà Nẵng trở vào → TP.HCM",
            "x": 2668,
            "y": 470,
            "size": 46,
            "at": "l1:south",
            "hl": [
              {
                "text": "TP.HCM",
                "at": "l1:ho chi minh"
              }
            ]
          },
          {
            "id": "b-tb",
            "t": "text",
            "text": "Bài viết 21/11 · địa điểm: chờ thông báo kế tiếp",
            "x": 2028,
            "y": 540,
            "size": 34,
            "at": "l2:next notice",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Mùa ôn của Thảo, 6 chặng",
            "x": 3048,
            "y": 540,
            "size": 34,
            "at": "l3:six",
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
            "at": "l3:six+300",
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
            "at": "l3:six+450",
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
            "at": "l3:six+600",
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
            "at": "l3:six+750",
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
            "at": "l3:six+900",
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
            "at": "l3:six+1050",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Tuần 1",
            "x": 2050,
            "y": 632,
            "size": 44,
            "at": "l3:six+400"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Tuần 2",
            "x": 2320,
            "y": 632,
            "size": 44,
            "at": "l3:six+550"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Tuần 3",
            "x": 2590,
            "y": 632,
            "size": 44,
            "at": "l3:six+700"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Tuần 4",
            "x": 2860,
            "y": 632,
            "size": 44,
            "at": "l3:six+850"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Thi thử",
            "x": 3130,
            "y": 632,
            "size": 44,
            "at": "l3:six+1000"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "22/11",
            "x": 3418,
            "y": 632,
            "size": 44,
            "at": "l3:six+1150"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Written papers the day before. From Huế north, you sit in Hanoi; from Đà Nẵng south, Ho Chi Minh City.",
          "sub": "Bài viết ngày 21/11. Từ Huế trở ra thi ở Hà Nội, từ Đà Nẵng trở vào ở TP.HCM.",
          "keys": [
            "Hà Nội",
            "TP.HCM"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Exact rooms? Wait for the council's next notice.",
          "sub": "Địa điểm cụ thể: chờ thông báo kế tiếp của Hội đồng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Now, Thảo's study season, in six stops.",
          "sub": "Giờ theo Thảo qua mùa ôn, sáu chặng.",
          "keys": [
            "sáu chặng"
          ]
        }
      ],
      "ref": "p2"
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
            "at": "l3",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tuần 1 · Vụ nào để thi?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first stop"
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
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "thumb"
                }
              ],
              "props": [
                "newspaper",
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
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:cafe",
            "caption": "Tuần ôn 1 · quán nước",
            "icon": "hot-beverage"
          },
          {
            "id": "c-news",
            "t": "text",
            "text": "Vụ nổi tiếng trên báo?",
            "x": 3996,
            "y": 170,
            "size": 52,
            "at": "l3:famous",
            "color": "muted"
          },
          {
            "id": "c-np",
            "t": "illus",
            "name": "rolled-up-newspaper",
            "x": 4576,
            "y": 160,
            "size": 90,
            "at": "l3:news"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: week one, at a cafe. Which case to bring?",
          "sub": "Chặng một: tuần ôn đầu, ở quán nước. Mang vụ nào vào thi?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, Thảo's study buddy, confident enough for two.",
          "sub": "Đây là Dũng, bạn ôn cùng Thảo, tự tin bằng hai người.",
          "keys": [
            "tự tin bằng hai người"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Easy! A famous case from the news. Read the judgement, done!",
          "sub": "Dễ! Chọn vụ nổi tiếng trên báo, đọc kỹ bản án, xong!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "But we never worked on it.",
          "sub": "Nhưng mình đâu có làm vụ đó.",
          "face": "thinking"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 600
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
          }
        ],
        "items": [
          {
            "id": "c-rule",
            "t": "text",
            "text": "Đ17 k2: vụ, việc tự chọn",
            "x": 3996,
            "y": 260,
            "size": 50,
            "at": "l1:clause",
            "hl": [
              {
                "text": "tự chọn",
                "at": "l1:chose"
              }
            ]
          },
          {
            "id": "c-rule2",
            "t": "text",
            "text": "mình tham gia khi tập sự",
            "x": 3996,
            "y": 330,
            "size": 50,
            "at": "l1:took part",
            "color": "accent",
            "hl": [
              {
                "text": "mình tham gia",
                "at": "l1:took part"
              }
            ]
          },
          {
            "id": "c-gd",
            "t": "text",
            "text": "có luật sư hướng dẫn (thông báo đợt 2/2026)",
            "x": 3996,
            "y": 400,
            "size": 28,
            "at": "l1:guidance",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "c-newsx",
            "t": "strike",
            "over": "c-news",
            "at": "l2:no trace"
          },
          {
            "id": "c-book",
            "t": "text",
            "text": "Sổ nhật ký (Đ7): việc đã làm",
            "x": 3996,
            "y": 470,
            "size": 42,
            "at": "l2:logbook",
            "hl": [
              {
                "text": "Sổ nhật ký",
                "at": "l2:logbook"
              }
            ]
          },
          {
            "id": "c-take",
            "t": "text",
            "text": "Vụ đã LÀM, không phải đã ĐỌC",
            "x": 3996,
            "y": 580,
            "size": 58,
            "at": "l3:worked",
            "color": "accent",
            "hl": [
              {
                "text": "đã LÀM",
                "at": "l3:worked"
              }
            ]
          },
          {
            "id": "c-next",
            "t": "text",
            "text": "4 tiêu chí chọn vụ → bài sau",
            "x": 3996,
            "y": 690,
            "size": 40,
            "at": "l4:four",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Article seventeen, clause two: a matter you chose and took part in during probation, under guidance.",
          "sub": "Khoản 2 Điều 17: vụ, việc tự chọn mà mình tham gia khi tập sự, có luật sư hướng dẫn.",
          "keys": [
            "mình tham gia"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your logbook records what you did. A news case leaves no trace there.",
          "sub": "Sổ nhật ký ghi việc mình đã làm. Vụ trên báo không để dấu vết nào trong đó.",
          "keys": [
            "không để dấu vết"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So: the case you worked on, not the case you read about.",
          "sub": "Vậy: vụ mình đã làm, không phải vụ mình đã đọc.",
          "keys": [
            "vụ mình đã làm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four criteria for choosing? Next lesson.",
          "sub": "Bốn tiêu chí chọn vụ? Để bài sau."
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
            "at": "l4:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tuần 2 · Nói gì, nói sao?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:second"
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
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "open-book",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:office",
            "caption": "Tuần ôn 2 · văn phòng",
            "icon": "office-building"
          },
          {
            "id": "d-only",
            "t": "text",
            "text": "Thông tư: chỉ 2 việc",
            "x": 5964,
            "y": 170,
            "size": 54,
            "at": "l3:two things",
            "hl": [
              {
                "text": "chỉ 2 việc",
                "at": "l3:two things"
              }
            ]
          },
          {
            "id": "d-nost",
            "t": "text",
            "text": "Cấu trúc bài nói: không quy định",
            "x": 5964,
            "y": 260,
            "size": 40,
            "at": "l3:structure",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: week two, the office.",
          "sub": "Chặng hai: tuần ôn thứ hai, ở văn phòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Ms Hoa, Thảo's supervising lawyer. She signs the logbook, and checks everything.",
          "sub": "Đây là cô Hoa, luật sư hướng dẫn của Thảo. Cô ký Sổ nhật ký, soi kỹ mọi thứ.",
          "keys": [
            "luật sư hướng dẫn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "The circular says two things: present and defend, then answer. No structure for the talk.",
          "sub": "Thông tư chỉ nói hai việc: trình bày, bảo vệ quan điểm, rồi trả lời. Không quy định cấu trúc.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "No structure? Then what do I build?",
          "sub": "Không có khung? Vậy em dựng bài thế nào?",
          "face": "surprised"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-lmt",
            "t": "text",
            "text": "LS Lê Minh Trường gợi ý:",
            "x": 5964,
            "y": 325,
            "size": 40,
            "at": "l1:lawyer",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "• tình tiết quan trọng",
            "x": 5964,
            "y": 380,
            "size": 46,
            "at": "l1:key facts"
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "• văn bản pháp luật làm căn cứ",
            "x": 5964,
            "y": 437,
            "size": 46,
            "at": "l1:legal texts",
            "hl": [
              {
                "text": "làm căn cứ",
                "at": "l1:basis"
              }
            ]
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "• nói, đừng đọc",
            "x": 5964,
            "y": 494,
            "size": 46,
            "at": "l2:speak",
            "color": "accent",
            "hl": [
              {
                "text": "nói, đừng đọc",
                "at": "l2:speak"
              }
            ]
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Sự kiện → Vấn đề",
            "x": 5964,
            "y": 560,
            "size": 48,
            "at": "l3:facts"
          },
          {
            "id": "d-4b",
            "t": "text",
            "text": "→ Quan điểm → Kết quả",
            "x": 6004,
            "y": 622,
            "size": 48,
            "at": "l3:view",
            "hl": [
              {
                "text": "Quan điểm",
                "at": "l3:view"
              }
            ]
          },
          {
            "id": "d-57",
            "t": "text",
            "text": "5–7 phút: mốc tự tập",
            "x": 5964,
            "y": 692,
            "size": 42,
            "at": "l4:five",
            "color": "coral",
            "hl": [
              {
                "text": "mốc tự tập",
                "at": "l4:practice"
              }
            ]
          },
          {
            "id": "d-57b",
            "t": "text",
            "text": "không phải con số trong thông tư; câu hỏi dự đoán: bài riêng",
            "x": 6464,
            "y": 705,
            "size": 26,
            "at": "l4:circular",
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
          "say": "Lawyer Lê Minh Trường suggests: key facts, with legal texts as your basis.",
          "sub": "Luật sư Lê Minh Trường gợi ý: nêu tình tiết quan trọng, lấy văn bản pháp luật làm căn cứ.",
          "keys": [
            "làm căn cứ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And speak rather than read.",
          "sub": "Và nói hơn là đọc.",
          "keys": [
            "nói hơn là đọc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The series builds a short talk: facts, issue, your view, outcome.",
          "sub": "Chuỗi bài dựng một bài nói ngắn: sự kiện, vấn đề, quan điểm của mình, kết quả.",
          "keys": [
            "quan điểm của mình"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Five to seven minutes is a practice target, not a number in the circular.",
          "sub": "Năm đến bảy phút là mốc tự đặt để tập, không phải con số trong thông tư.",
          "keys": [
            "mốc tự đặt để tập"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "text": "③ Tuần 2 · Lần tập đầu",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 150,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "cross"
                }
              ],
              "props": [
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:printed",
            "caption": "Lần tập đầu · phòng họp nhỏ",
            "icon": "page-facing-up"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "Cách A: in bài, đọc từng chữ",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:every word",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Thảo's first rehearsal. Her contract dispute talk, printed.",
          "sub": "Chặng ba: lần tập đầu. Bài về vụ tranh chấp hợp đồng, in sẵn.",
          "keys": [
            "lần tập đầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'll read every word. Safer that way.",
          "sub": "Em đọc từng chữ cho chắc.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Dũng plays the panel. Watch what happens when he interrupts.",
          "sub": "Dũng đóng vai Ban chấm. Xem chuyện gì xảy ra khi Dũng ngắt lời."
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "Lần tập đầu · bị ngắt lời",
        "actors": [
          {
            "id": "thao",
            "side": "left",
            "pose": "hold"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "props": [
          "page-facing-up"
        ],
        "verdict": {
          "ok": false,
          "label": "Đọc nguyên văn bài in sẵn",
          "why": "Cúi xuống giấy suốt; bị ngắt lời là lạc mất chỗ đang đọc.",
          "rule": "Dàn ý giữ được mạch, bài đọc thuộc lòng thì không"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Sorry, which article is that?",
          "sub": "Xin lỗi, chỗ đó điều nào?",
          "pose": "point"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Um... where was I on the page?",
          "sub": "Ờ... em đang đọc tới đâu rồi?",
          "face": "worried",
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
          "say": "Eyes glued to paper, and one question knocks it all over.",
          "sub": "Mắt dán vào giấy, một câu hỏi là đổ cả bài.",
          "keys": [
            "đổ cả bài"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Option B: one page of outline.",
          "sub": "Tua lại! Cách B: một tờ dàn ý.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Which article is that?",
          "sub": "Chỗ đó điều nào?",
          "phase": "redo",
          "pose": "point"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "thao",
          "say": "Answered. Now, back to my second point.",
          "sub": "Trả lời xong. Giờ em quay lại ý thứ hai.",
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
      "ref": "p9,p10"
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
            "id": "e-ax",
            "t": "strike",
            "over": "e-a",
            "at": "l1:outline"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "Cách B: một tờ dàn ý",
            "x": 7932,
            "y": 260,
            "size": 50,
            "at": "l1:outline",
            "color": "accent",
            "hl": [
              {
                "text": "dàn ý",
                "at": "l1:outline"
              }
            ]
          },
          {
            "id": "e-b2",
            "t": "text",
            "text": "bị hỏi → nhìn dàn ý → quay lại",
            "x": 7932,
            "y": 340,
            "size": 40,
            "at": "l1:return",
            "color": "muted"
          },
          {
            "id": "e-take",
            "t": "text",
            "text": "Dàn ý = sợi dây diều",
            "x": 7932,
            "y": 650,
            "size": 56,
            "at": "l2:thread",
            "color": "accent",
            "hl": [
              {
                "text": "sợi dây diều",
                "at": "l2:kite"
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
          "say": "Option B: an outline of a few lines. Interrupted? Answer, then return to the right section.",
          "sub": "Cách B: tờ dàn ý vài dòng. Bị ngắt lời? Trả lời, rồi quay về đúng mục.",
          "keys": [
            "dàn ý vài dòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "An outline keeps the thread, like a kite string. A memorised script does not.",
          "sub": "Dàn ý giữ được mạch, như sợi dây diều. Bài đọc thuộc lòng thì không.",
          "keys": [
            "Dàn ý giữ được mạch"
          ]
        }
      ],
      "ref": "p9,p10"
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
            "at": "l2",
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
            "id": "f-t",
            "t": "text",
            "text": "④ Tuần 3 · Ai chấm, chấm sao?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:fourth"
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
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "hundred-points"
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
                  "shot": "E-SHOT-05",
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
            "at": "l1:office",
            "caption": "Tuần ôn 3 · văn phòng",
            "icon": "hundred-points"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "2 người chấm độc lập",
            "x": 60,
            "y": 1260,
            "size": 52,
            "at": "l3:two",
            "hl": [
              {
                "text": "độc lập",
                "at": "l3:independently"
              }
            ]
          },
          {
            "id": "f-100",
            "t": "text",
            "text": "thang 100 → lấy trung bình",
            "x": 60,
            "y": 1340,
            "size": 46,
            "at": "l4:hundred",
            "hl": [
              {
                "text": "trung bình",
                "at": "l4:average"
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
          "say": "Fourth stop: week three. Back at the office.",
          "sub": "Chặng bốn: tuần ôn thứ ba. Lại ở văn phòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Who actually marks my talk, Ms Hoa?",
          "sub": "Cô ơi, ai chấm phần nói của em ạ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Article twenty-five. Two panel members, marking independently.",
          "sub": "Điều 25. Hai thành viên Ban chấm, chấm độc lập.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Each on a scale of one hundred. Your score is their average.",
          "sub": "Mỗi người cho điểm thang 100. Điểm bài là trung bình cộng của hai người.",
          "keys": [
            "trung bình cộng"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s13",
      "module": "BRK-03",
      "data": {
        "value": 50,
        "suffix": " điểm",
        "label": "mỗi bài, kể cả thực hành, để đạt yêu cầu",
        "illus": "hundred-points"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "To pass, every single paper needs at least...",
          "sub": "Muốn đạt, mỗi bài kiểm tra cần ít nhất..."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Fifty points. The oral part included.",
          "sub": "Năm mươi điểm. Kể cả phần thực hành.",
          "keys": [
            "Năm mươi điểm"
          ]
        }
      ],
      "ref": "p12"
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
            "id": "f-gap",
            "t": "text",
            "text": "Lệch ≥ 10 điểm → trao đổi",
            "x": 60,
            "y": 1450,
            "size": 48,
            "at": "l1:ten",
            "color": "coral",
            "hl": [
              {
                "text": "≥ 10 điểm",
                "at": "l1:apart"
              }
            ]
          },
          {
            "id": "f-talk",
            "t": "text",
            "text": "lệch 5 ở ranh giới đạt cũng vậy",
            "x": 60,
            "y": 1515,
            "size": 28,
            "at": "l1:five",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "f-talk2",
            "t": "text",
            "text": "trực tiếp, Trưởng Ban giám sát",
            "x": 60,
            "y": 1552,
            "size": 28,
            "at": "l1:directly",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "f-grid",
            "t": "text",
            "text": "Tiêu chí phần nói: không công bố",
            "x": 60,
            "y": 1600,
            "size": 46,
            "at": "l2:grid",
            "hl": [
              {
                "text": "không công bố",
                "at": "l2:published"
              }
            ]
          },
          {
            "id": "f-c",
            "t": "text",
            "text": "Gợi ý: Đ17 · Đ6 · Đ13",
            "x": 60,
            "y": 1680,
            "size": 48,
            "at": "l3:seventeen",
            "color": "accent"
          },
          {
            "id": "f-13",
            "t": "text",
            "text": "kỹ năng · tuân thủ · đạo đức",
            "x": 60,
            "y": 1760,
            "size": 44,
            "at": "l4:skills",
            "hl": [
              {
                "text": "đạo đức",
                "at": "l4:ethics"
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
          "say": "Ten points apart, or five at the pass line? They talk directly, the panel head watching.",
          "sub": "Lệch từ 10 điểm, hoặc 5 ở ranh giới đạt? Trao đổi trực tiếp, Trưởng Ban giám sát.",
          "keys": [
            "Lệch từ 10 điểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No published grid for the talk. So, clues?",
          "sub": "Không có bảng tiêu chí công bố cho phần nói. Gợi ý ở đâu?",
          "keys": [
            "Không có bảng tiêu chí"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article seventeen on content, six on probation, thirteen on the supervisor's review.",
          "sub": "Điều 17 nội dung kiểm tra, Điều 6 nội dung tập sự, Điều 13 nhận xét của luật sư hướng dẫn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ability, skills, legal compliance, ethics. That's your treasure map.",
          "sub": "Năng lực, kỹ năng, ý thức tuân thủ pháp luật, đạo đức nghề. Đó là bản đồ kho báu.",
          "keys": [
            "bản đồ kho báu"
          ]
        }
      ],
      "ref": "p11,p12"
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
            "text": "⑤ Giả sử… trượt phần nói",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:fifth"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "give",
                  "face": "sad"
                }
              ],
              "props": [
                "envelope",
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
            "at": "l1:imagine",
            "caption": "Giả sử · sau kỳ kiểm tra",
            "icon": "envelope"
          },
          {
            "id": "g-ap",
            "t": "text",
            "text": "Đơn xin chấm lại phần nói?",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:appeal",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop, a thought test. Imagine Dũng passes the written papers but fails the oral.",
          "sub": "Chặng năm, thử nghĩ xem: giả sử Dũng đạt bài viết nhưng trượt phần nói.",
          "keys": [
            "giả sử"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "No problem. I'll appeal and get the oral part marked again!",
          "sub": "Không sao. Tôi làm đơn xin chấm lại phần nói!",
          "face": "sad",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article twenty-five, clause five: no review of practical results. None.",
          "sub": "Khoản 5 Điều 25: không chấm phúc tra kết quả thực hành. Không có.",
          "keys": [
            "không chấm phúc tra"
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
      "id": "s16",
      "module": "BRK-04",
      "data": {
        "title": "Trượt phần nói thì sao?",
        "labels": [
          "Sai",
          "Đúng"
        ],
        "wrong": "Làm đơn xin chấm lại phần nói",
        "right": "Dồn sức cho kỳ kiểm tra sau",
        "wrongIllus": "envelope",
        "rightIllus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "An appeal for the oral part? It won't be accepted.",
          "sub": "Đơn phúc tra phần thực hành? Không được nhận."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Put the effort into the next session instead.",
          "sub": "Hãy dồn sức cho kỳ sau.",
          "keys": [
            "kỳ sau"
          ]
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
          }
        ],
        "items": [
          {
            "id": "g-apx",
            "t": "strike",
            "over": "g-ap",
            "at": "l1:only"
          },
          {
            "id": "g-27",
            "t": "text",
            "text": "Điều 27: chỉ phúc tra BÀI VIẾT",
            "x": 2028,
            "y": 1340,
            "size": 46,
            "at": "l1:written",
            "hl": [
              {
                "text": "BÀI VIẾT",
                "at": "l1:written"
              }
            ]
          },
          {
            "id": "g-54",
            "t": "text",
            "text": "trong 15 ngày · đợt 1/2026: gửi trước 13/7/2026",
            "x": 2028,
            "y": 1410,
            "size": 28,
            "at": "l1:fifteen",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "g-15",
            "t": "text",
            "text": "Không đạt → dự kỳ sau (Đ15)",
            "x": 2028,
            "y": 1490,
            "size": 48,
            "at": "l2:next",
            "hl": [
              {
                "text": "kỳ sau",
                "at": "l2:next"
              }
            ]
          },
          {
            "id": "g-18",
            "t": "text",
            "text": "ít nhất 6 tháng một kỳ (Đ18)",
            "x": 2028,
            "y": 1565,
            "size": 42,
            "at": "l2:six months",
            "color": "muted"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "3 kỳ không đạt → tập sự lại",
            "x": 2028,
            "y": 1645,
            "size": 48,
            "at": "l3:three",
            "color": "coral",
            "hl": [
              {
                "text": "tập sự lại",
                "at": "l3:again"
              }
            ]
          },
          {
            "id": "g-take",
            "t": "text",
            "text": "Một lần chấm → chắc từ lúc tập",
            "x": 2028,
            "y": 1750,
            "size": 54,
            "at": "l4:once",
            "color": "accent",
            "hl": [
              {
                "text": "chắc từ lúc tập",
                "at": "l4:rehearsal"
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
          "say": "Only written papers can be reviewed, within fifteen days. Session one's deadline was July thirteenth.",
          "sub": "Chỉ bài viết được phúc tra, trong 15 ngày. Đợt 1/2026 hạn gửi trước 13/7/2026.",
          "keys": [
            "Chỉ bài viết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Failed? Sit the next session. They come at least every six months.",
          "sub": "Không đạt? Dự kỳ tiếp theo, ít nhất sáu tháng có một kỳ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But fail three sessions, and you register for probation again.",
          "sub": "Nhưng không đạt ba kỳ thì phải đăng ký tập sự lại.",
          "keys": [
            "tập sự lại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Marked only once. So be solid from the first rehearsal. Unknown questions get their own lesson.",
          "sub": "Chỉ chấm một lần, nên phải chắc ngay từ lần tập. Câu không biết: có bài riêng.",
          "keys": [
            "chắc ngay từ lần tập"
          ]
        }
      ],
      "ref": "p13,p14,p15,p16"
    },
    {
      "id": "s18",
      "module": "BRK-07",
      "data": {
        "question": "Phần nói thì… lên đó nói là được?",
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
          "say": "Some people think the oral part needs no study at all. Just show up and talk.",
          "sub": "Có người nghĩ phần nói chẳng cần ôn: lên đó nói là được.",
          "keys": [
            "lên đó nói là được"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
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
            "text": "⑥ Tuần 4 · Nếu cứ thế…",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sixth"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "closed-book",
                "alarm-clock"
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
            "at": "l2:twenty-first",
            "caption": "Nếu cứ thế · tối 21/11",
            "icon": "alarm-clock"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Cả tháng: chỉ ôn bài viết",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l1:written",
            "color": "muted"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Tối 21/11 mới mở Sổ nhật ký",
            "x": 3996,
            "y": 1340,
            "size": 44,
            "at": "l2:logbook",
            "color": "coral",
            "hl": [
              {
                "text": "Tối 21/11",
                "at": "l2:twenty-first"
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
          "say": "Sixth stop: week four. Dũng spends the last month only on the written papers.",
          "sub": "Chặng sáu: tuần thứ tư. Dũng dồn cả tháng cuối cho hai bài viết.",
          "keys": [
            "hai bài viết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then, on the night of the twenty-first, he finally opens his logbook.",
          "sub": "Rồi tối 21/11 Dũng mới mở Sổ nhật ký chọn vụ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Which case did I write up properly? None!",
          "sub": "Vụ nào mình ghi đủ chi tiết? Chẳng vụ nào!",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Like going to market after the guests arrive.",
          "sub": "Như khách đến rồi mới đi chợ.",
          "keys": [
            "khách đến rồi mới đi chợ"
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
          }
        ],
        "items": [
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1430,
            "w": 44,
            "h": 44,
            "at": "l1:choose",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1412,
            "size": 56,
            "at": "l1:choose+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Chọn vụ khi còn tập sự",
            "x": 4066,
            "y": 1422,
            "size": 40,
            "at": "l1:choose+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1492,
            "w": 44,
            "h": 44,
            "at": "l2:outline",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1474,
            "size": 56,
            "at": "l2:outline+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Viết dàn ý, tập nói",
            "x": 4066,
            "y": 1484,
            "size": 40,
            "at": "l2:outline+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1554,
            "w": 44,
            "h": 44,
            "at": "l2:likely",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1536,
            "size": 56,
            "at": "l2:likely+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Câu hỏi dự đoán, điều luật",
            "x": 4066,
            "y": 1546,
            "size": 40,
            "at": "l2:likely+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1616,
            "w": 44,
            "h": 44,
            "at": "l3:unknown",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1598,
            "size": 56,
            "at": "l3:unknown+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Tập trả lời câu không biết",
            "x": 4066,
            "y": 1608,
            "size": 40,
            "at": "l3:unknown+200"
          },
          {
            "id": "h-c4",
            "t": "box",
            "x": 3996,
            "y": 1678,
            "w": 44,
            "h": 44,
            "at": "l3:mock",
            "stroke": 5
          },
          {
            "id": "h-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1660,
            "size": 56,
            "at": "l3:mock+600",
            "color": "accent"
          },
          {
            "id": "h-l4",
            "t": "text",
            "text": "Thi thử với “Ban chấm”",
            "x": 4066,
            "y": 1670,
            "size": 40,
            "at": "l3:mock+200"
          },
          {
            "id": "h-cut",
            "t": "text",
            "text": "Tập sự tính đến 20/11/2026",
            "x": 4936,
            "y": 1790,
            "size": 32,
            "at": "l4:twentieth",
            "font": "base",
            "color": "muted",
            "hl": [
              {
                "text": "20/11/2026",
                "at": "l4:twentieth"
              }
            ]
          },
          {
            "id": "h-take",
            "t": "text",
            "text": "Ôn phần nói sớm",
            "x": 3996,
            "y": 1755,
            "size": 52,
            "at": "l5:early",
            "color": "accent",
            "hl": [
              {
                "text": "sớm",
                "at": "l5:early"
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
          "say": "The better route. One: choose your case while still in probation, checked against the logbook.",
          "sub": "Lộ trình tốt hơn. Một: chọn vụ khi còn tập sự, đối chiếu Sổ nhật ký.",
          "keys": [
            "chọn vụ khi còn tập sự"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: an outline, out loud. Three: likely questions, with checked articles.",
          "sub": "Hai: dàn ý, tập nói thành tiếng. Ba: câu hỏi dự đoán, kèm điều luật đã kiểm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Four: the unknown question. Five: mock exams with a pretend panel.",
          "sub": "Bốn: tập câu không biết. Năm: thi thử với người đóng vai Ban chấm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "This session counts probation time until November twentieth.",
          "sub": "Đợt này, thời gian tập sự tính đến ngày 20/11/2026.",
          "keys": [
            "20/11/2026"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Moral: study the oral part early, like the written ones.",
          "sub": "Rút ra: ôn phần nói sớm như bài viết, đừng đợi đêm cuối.",
          "keys": [
            "ôn phần nói sớm"
          ]
        }
      ],
      "ref": "p17,p19"
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
            "at": "l3",
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
            "text": "⑦ Thi thử · 2 người chấm",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:mock exam"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "point"
                },
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "hundred-points"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "binh",
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
            "at": "l1:mock",
            "caption": "Buổi thi thử · phòng họp",
            "icon": "hundred-points"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Chấm độc lập rồi so điểm",
            "x": 5964,
            "y": 1260,
            "size": 48,
            "at": "l2:independently",
            "hl": [
              {
                "text": "so điểm",
                "at": "l2:compare"
              }
            ]
          },
          {
            "id": "i-ok",
            "t": "text",
            "text": "“Em cần kiểm lại điều này”",
            "x": 5964,
            "y": 1350,
            "size": 46,
            "at": "l4:check",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: a mock exam. Meet Mr Bình, a retired lawyer and Ms Hoa's friend.",
          "sub": "Chặng bảy: thi thử. Đây là bác Bình, luật sư đã nghỉ, bạn cô Hoa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two markers, independently, then compare. Like article twenty-five.",
          "sub": "Hai người chấm độc lập rồi so điểm, như Điều 25.",
          "keys": [
            "chấm độc lập rồi so điểm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Which clause exactly, and is it still in force?",
          "sub": "Khoản nào cụ thể, còn hiệu lực không?",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I'm not certain. I need to check that provision again.",
          "sub": "Em chưa chắc. Em cần kiểm lại điều luật này.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "No bluffing. Article five, Law on Lawyers: honesty, respect for objective truth.",
          "sub": "Không bịa. Điều 5 Luật Luật sư: trung thực, tôn trọng sự thật khách quan.",
          "keys": [
            "trung thực"
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
      "ref": "p20,p22"
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
          }
        ],
        "items": [
          {
            "id": "i-law",
            "t": "text",
            "text": "Luật Luật sư đang sửa đổi",
            "x": 5964,
            "y": 1490,
            "size": 50,
            "at": "l1:amended",
            "color": "coral",
            "hl": [
              {
                "text": "đang sửa đổi",
                "at": "l1:amended"
              }
            ]
          },
          {
            "id": "i-chk",
            "t": "text",
            "text": "→ kiểm lại sau kỳ họp Quốc hội kết thúc 21/11/2026",
            "x": 5964,
            "y": 1565,
            "size": 28,
            "at": "l1:check",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "i-tb",
            "t": "text",
            "text": "Thông báo đợt 2: như Điều 17",
            "x": 5964,
            "y": 1650,
            "size": 46,
            "at": "l2:notice",
            "hl": [
              {
                "text": "như Điều 17",
                "at": "l2:same"
              }
            ]
          },
          {
            "id": "i-skill",
            "t": "text",
            "text": "Kỹ năng thi = kỹ năng hành nghề",
            "x": 5964,
            "y": 1750,
            "size": 56,
            "at": "l3:practice",
            "color": "accent",
            "hl": [
              {
                "text": "kỹ năng hành nghề",
                "at": "l3:skills"
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
          "say": "Also: the Law on Lawyers is being amended. Check again after the session ends, November twenty-first.",
          "sub": "Thêm nữa: Luật Luật sư đang được sửa đổi. Kiểm lại sau kỳ họp kết thúc 21/11/2026.",
          "keys": [
            "đang được sửa đổi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For now, the notice describes the oral part the same as article seventeen.",
          "sub": "Hiện thông báo đợt 2/2026 vẫn mô tả phần thực hành như Điều 17.",
          "keys": [
            "như Điều 17"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Rules may change. These remain real practice skills.",
          "sub": "Quy trình có đổi, đây vẫn là kỹ năng hành nghề.",
          "keys": [
            "kỹ năng hành nghề"
          ]
        }
      ],
      "ref": "p21,p22"
    },
    {
      "id": "s23",
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
            "text": "22/11 · 7:00 · Trước phòng thi",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:seven"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "sunrise"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
            "at": "l1:seven",
            "caption": "Sáng 22/11 · 7:00",
            "icon": "sunrise"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Vụ mình đã làm ✓",
            "x": 7932,
            "y": 1270,
            "size": 52,
            "at": "l2:my case"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Một tờ dàn ý ✓",
            "x": 7932,
            "y": 1350,
            "size": 52,
            "at": "l2:outline"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Đã thi thử ✓",
            "x": 7932,
            "y": 1430,
            "size": 52,
            "at": "l2:mock"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Lời nói chẳng mất tiền mua…",
            "x": 7932,
            "y": 1560,
            "size": 44,
            "at": "l4:cost",
            "color": "muted"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "…nhưng đã tập thì không sợ chấm",
            "x": 7932,
            "y": 1630,
            "size": 48,
            "at": "l4:practised",
            "color": "accent",
            "hl": [
              {
                "text": "đã tập",
                "at": "l4:practised"
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
          "say": "Finally: the twenty-second, seven o'clock. Same Thảo, steadier knees.",
          "sub": "Và rồi: sáng 22/11, bảy giờ. Vẫn Thảo ấy, đầu gối vững hơn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "My case, my outline, a few mock exams. Two jobs, one marking. Ready.",
          "sub": "Vụ của mình, tờ dàn ý, vài lần thi thử. Hai việc, một lần chấm. Sẵn sàng.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Words cost nothing to buy. And practised words aren't afraid of the marking.",
          "sub": "“Lời nói chẳng mất tiền mua.” Mà lời đã tập thì chẳng sợ bị chấm.",
          "keys": [
            "lời đã tập"
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
      "ref": "p15,p19"
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
            "at": "l1:worked",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:outline",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:once",
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
            "x": 9432,
            "y": 690,
            "at": "l2:outline"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3528,
            "y": 1780,
            "at": "l3:once"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức nghề để tham khảo, không phải tư vấn vụ việc cụ thể; quy định có thể thay đổi, kiểm văn bản hiện hành.",
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
          "say": "So: bring a case you worked on, not one you read about.",
          "sub": "Tóm lại: mang vụ mình đã làm, không phải vụ mình đã đọc.",
          "keys": [
            "vụ mình đã làm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Speak from an outline, with legal texts as your basis.",
          "sub": "Nói theo dàn ý, lấy văn bản pháp luật làm căn cứ.",
          "keys": [
            "Nói theo dàn ý"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And practise early. The oral part is marked once, with no review.",
          "sub": "Và ôn sớm. Phần nói chấm một lần, không phúc tra.",
          "keys": [
            "ôn sớm"
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
        "q": "Can a candidate ask for the practical score to be reviewed?",
        "options": [
          "Yes, but only when both examiners agree that a review is useful",
          "Yes, within a week, by sending a recording of the presentation",
          "No, the circular states that practical results are not reviewed again"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "envelope",
        "why": "Khoản 5 Điều 25 ghi không chấm phúc tra đối với kết quả thực hành. Chỉ bài viết mới được làm đơn phúc tra theo Điều 27."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Can a candidate ask for the practical score to be reviewed?",
          "sub": "Thí sinh có được xin phúc tra điểm phần thực hành không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. Practical results are not reviewed again. Only written papers are.",
          "sub": "Không. Kết quả thực hành không phúc tra. Chỉ bài viết được phúc tra."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[23]"
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
          "say": "Tonight: open your logbook and mark the three cases you worked on most.",
          "sub": "Việc làm ngay: mở Sổ nhật ký, đánh dấu ba vụ mình đã tham gia nhiều nhất.",
          "keys": [
            "ba vụ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson, we pick one of the three. Then, forty questions below!",
          "sub": "Bài sau ta chọn một trong ba vụ ấy. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-20",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-20 (đáp án trước: “Hai việc, một lần chấm”). Dòng thời gian: MÙA ÔN ĐỢT 2/2026 của Thảo (tối đầu tiên ôn → tuần 1 quán nước: vụ nổi tiếng p3–p6 → tuần 2 văn phòng cô Hoa: thông tư không quy định cấu trúc p7–p8 → lần tập đầu, “Khoan đã!” đọc giấy / dàn ý p9–p10 → tuần 3 cách chấm p11–p12 → giả sử trượt phần nói p13–p16 → tuần 4 Dũng đêm 21/11 + lộ trình p17–p19 → thi thử với bác Bình p20–p22 → sáng 22/11 7:00 khép vòng). Ca dao mở/khép: “Lời nói chẳng mất tiền mua”. Nhân vật: Thảo, Dũng, cô Hoa (LS hướng dẫn), bác Bình (đóng vai Trưởng Ban chấm) — w145/_series/bar-exam-oral.md. Mọi mốc/điều kiện lấy từ bài: 180/90 phút, 20–22/11, 7:00/13:30, thang 100, lệch 10/5, ≥50, 15 ngày, 13/7/2026, 6 tháng, 3 kỳ, 20/11/2026, 21/11/2026. BRK: 08 (lịch đợt 2), 03 (50 điểm), 04 (đơn phúc tra/kỳ sau), 07 (rehook “lên đó nói là được”). Câu đố questions[23]. door “kien-thuc” như các chuỗi luật anh em.",
  "loop": {
    "open": "s01",
    "close": "s23"
  }
};
