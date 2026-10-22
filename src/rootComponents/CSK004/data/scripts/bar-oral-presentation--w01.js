// bar-oral-presentation--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-oral-presentation--w01",
  "unit": {
    "audience": "bar-exam-oral",
    "slug": "bar-oral-presentation",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Chuẩn bị phần trình bày 5–7 phút về vụ việc",
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
              "a-v"
            ],
            "move": "cut",
            "zoom": 1.35
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 900
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
                  "pose": "explain"
                }
              ],
              "props": [
                "stopwatch",
                "page-facing-up"
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
            "at": 0,
            "caption": "Lần tập 1 · tối thứ Hai",
            "icon": "stopwatch"
          },
          {
            "id": "a-cut",
            "t": "text",
            "text": "“The legal issue in my case is…”",
            "x": 60,
            "y": 170,
            "size": 46,
            "at": "l2:cut",
            "color": "muted"
          },
          {
            "id": "a-x",
            "t": "text",
            "text": "✂",
            "x": 760,
            "y": 160,
            "size": 70,
            "at": "l2:cut",
            "color": "coral"
          },
          {
            "id": "a-sw",
            "t": "illus",
            "name": "stopwatch",
            "x": 70,
            "y": 300,
            "size": 140,
            "at": "l3:timed"
          },
          {
            "id": "a-12",
            "t": "text",
            "text": "12 phút",
            "x": 240,
            "y": 310,
            "size": 110,
            "at": "l3:twelve",
            "color": "coral",
            "hl": [
              {
                "text": "12 phút",
                "at": "l3:twelve"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Okay, timer on. The legal issue in my case is...",
          "sub": "Rồi, bấm giờ. Vấn đề pháp lý trong vụ của em là...",
          "face": "neutral"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Cut! Hold that sentence. We'll come back for it.",
          "sub": "Cắt! Giữ câu đó lại. Lát nữa ta quay lại.",
          "keys": [
            "Giữ câu đó lại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Because Thảo's first timed rehearsal ran twelve minutes, nearly half of it facts. That sentence waited a long time.",
          "sub": "Vì lần tập bấm giờ đầu tiên của Thảo dài mười hai phút, gần nửa là kể sự kiện. Câu ấy phải xếp hàng rất lâu.",
          "keys": [
            "mười hai phút"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 0
        }
      ],
      "ref": "p16"
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
            "id": "a-who",
            "t": "text",
            "text": "Thảo · người tập sự",
            "x": 60,
            "y": 480,
            "size": 48,
            "at": "l1:trainee"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Nói dài, nói dai thành nói dại”",
            "x": 60,
            "y": 580,
            "size": 50,
            "at": "l2:long",
            "color": "accent",
            "hl": [
              {
                "text": "nói dại",
                "at": "l2:foolish"
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
          "say": "Meet Thảo, our trainee. Her case is chosen. Now she needs a talk.",
          "sub": "Đây là Thảo, cô tập sự của chúng ta. Vụ đã chọn xong. Giờ cần một bài nói.",
          "keys": [
            "một bài nói"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "As the saying goes: talk long, talk on, and you end up talking foolish.",
          "sub": "Ông bà dặn: “Nói dài, nói dai thành nói dại.”",
          "keys": [
            "Nói dài, nói dai thành nói dại"
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
            "text": "Bài nói ngắn dựng thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:build",
            "hl": [
              {
                "text": "ngắn",
                "at": "l1:short"
              }
            ]
          },
          {
            "id": "b-17",
            "t": "text",
            "text": "Đ17: không ghi thời lượng, cấu trúc",
            "x": 2028,
            "y": 150,
            "size": 44,
            "at": "l2:length",
            "hl": [
              {
                "text": "không ghi",
                "at": "l2:no"
              }
            ]
          },
          {
            "id": "b-pan",
            "t": "text",
            "text": "→ thời gian do Ban chấm điều hành",
            "x": 2028,
            "y": 220,
            "size": 38,
            "at": "l2:panel",
            "color": "muted"
          },
          {
            "id": "b-57",
            "t": "text",
            "text": "5–7 phút: mốc tự tập",
            "x": 2028,
            "y": 300,
            "size": 56,
            "at": "l3:five",
            "color": "accent",
            "hl": [
              {
                "text": "mốc tự tập",
                "at": "l3:practice"
              }
            ]
          },
          {
            "id": "b-57b",
            "t": "text",
            "text": "đủ 4 phần · khỏi bị dừng · chừa giờ hỏi đáp",
            "x": 2028,
            "y": 375,
            "size": 30,
            "at": "l4:enough",
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
          "say": "So how do you build a short talk about your case?",
          "sub": "Vậy dựng một bài nói ngắn về vụ việc thế nào?",
          "keys": [
            "bài nói ngắn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article seventeen sets no length and no structure. The panel runs the time, so listen in the room.",
          "sub": "Điều 17 không ghi thời lượng, không quy định cấu trúc. Thời gian do Ban chấm điều hành, nghe hướng dẫn tại phòng thi.",
          "keys": [
            "Ban chấm điều hành"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Five to seven minutes is a practice target we set ourselves.",
          "sub": "Năm đến bảy phút là mốc tự đặt để tập.",
          "keys": [
            "mốc tự đặt để tập"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Enough for four parts, short enough not to be stopped, and time left for questions.",
          "sub": "Đủ kể bốn phần, đủ ngắn để khỏi bị dừng, còn chừa giờ cho hỏi đáp."
        }
      ],
      "ref": "p1"
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
            "id": "b-p0b",
            "t": "box",
            "x": 2028,
            "y": 450,
            "w": 370,
            "h": 110,
            "at": "l1:happened",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-p1b",
            "t": "box",
            "x": 2438,
            "y": 450,
            "w": 370,
            "h": 110,
            "at": "l1:question",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-p2b",
            "t": "box",
            "x": 2848,
            "y": 450,
            "w": 370,
            "h": 110,
            "at": "l1:think",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-p3b",
            "t": "box",
            "x": 3258,
            "y": 450,
            "w": 370,
            "h": 110,
            "at": "l1:ended",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-p0",
            "t": "text",
            "text": "① Sự kiện",
            "x": 2053,
            "y": 470,
            "size": 52,
            "at": "l1:happened+200"
          },
          {
            "id": "b-p1",
            "t": "text",
            "text": "② Vấn đề",
            "x": 2463,
            "y": 470,
            "size": 52,
            "at": "l1:question+200"
          },
          {
            "id": "b-p2",
            "t": "text",
            "text": "③ Quan điểm",
            "x": 2873,
            "y": 470,
            "size": 52,
            "at": "l1:think+200"
          },
          {
            "id": "b-p3",
            "t": "text",
            "text": "④ Kết quả",
            "x": 3283,
            "y": 470,
            "size": 52,
            "at": "l1:ended+200"
          },
          {
            "id": "b-not",
            "t": "text",
            "text": "điểm xuất phát, không phải khuôn bắt buộc (LS Lê Minh Trường: chọn cách hợp từng vụ)",
            "x": 2028,
            "y": 590,
            "size": 28,
            "at": "l2:starting",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "b-full",
            "t": "text",
            "text": "“…Bên mua còn thời hiệu?”",
            "x": 2028,
            "y": 670,
            "size": 44,
            "at": "l3:within",
            "color": "accent",
            "hl": [
              {
                "text": "thời hiệu",
                "at": "l3:time limit"
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
          "say": "Four parts, in the order listeners need: what happened, the legal question, what you think and why, how it ended.",
          "sub": "Bốn phần theo trật tự người nghe cần: chuyện gì xảy ra, câu hỏi pháp lý, mình nghĩ gì và dựa vào đâu, vụ kết thúc ra sao.",
          "keys": [
            "Bốn phần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A starting point, not a mould. Adapt it to each case.",
          "sub": "Đây là điểm xuất phát, không phải khuôn bắt buộc. Tuỳ vụ mà chỉnh.",
          "keys": [
            "điểm xuất phát"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "The legal issue in my case is whether the Buyer is still within the time limit to sue for damages.",
          "sub": "Vấn đề pháp lý trong vụ của em là: Bên mua còn trong thời hiệu khởi kiện đòi bồi thường hay không.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "There it is, after a long queue. Let's fix it, one day at a time.",
          "sub": "Đó, câu ấy đây, sau một hồi xếp hàng. Giờ sửa dần, mỗi ngày một phần.",
          "keys": [
            "sửa dần"
          ]
        }
      ],
      "ref": "p2,p7"
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
            "text": "① Thứ Ba · Phần sự kiện",
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
                "page-facing-up",
                "pencil"
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
            "at": "l1:tuesday",
            "caption": "Thứ Ba · ở nhà",
            "icon": "pencil"
          },
          {
            "id": "c-rain",
            "t": "text",
            "text": "“Một buổi chiều mưa, khách rất lo…”",
            "x": 3996,
            "y": 170,
            "size": 40,
            "at": "l2:rainy",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tuesday. Thảo reads her opening paragraph.",
          "sub": "Thứ Ba. Thảo đọc lại đoạn mở đầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The client came on a rainy afternoon, very worried, told us about her family, then last year...",
          "sub": "Khách đến vào một buổi chiều mưa, rất lo lắng, kể chuyện gia đình, rồi chuyện năm ngoái...",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A rainy afternoon. Lovely for a novel. Useless for the panel.",
          "sub": "Chiều mưa. Hay cho tiểu thuyết. Vô ích với Ban chấm.",
          "keys": [
            "Vô ích với Ban chấm"
          ]
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s05",
      "module": "BRK-04",
      "data": {
        "title": "Phần sự kiện",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Chiều mưa, khách lo lắng, chuyện gia đình, chuyện năm ngoái…",
        "right": "Ký hợp đồng · giao chậm · đòi bồi thường · từ chối",
        "wrongIllus": "cloud-with-rain",
        "rightIllus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: weather, worries, family.",
          "sub": "Trước: thời tiết, nỗi lo, chuyện nhà."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: four sentences that lead to the issue.",
          "sub": "Sau: bốn câu dẫn thẳng tới vấn đề.",
          "keys": [
            "bốn câu"
          ]
        }
      ],
      "ref": "p4"
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
            "id": "c-1",
            "t": "text",
            "text": "Bên mua, Bên bán ký hợp đồng",
            "x": 3996,
            "y": 260,
            "size": 42,
            "at": "l1:sign"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Bên bán giao hàng chậm",
            "x": 3996,
            "y": 320,
            "size": 42,
            "at": "l1:late"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Đòi bồi thường ↔ từ chối",
            "x": 3996,
            "y": 380,
            "size": 42,
            "at": "l2:claims"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Tôi giúp LS hướng dẫn nghiên cứu, soạn dự thảo",
            "x": 3996,
            "y": 440,
            "size": 30,
            "at": "l2:helped",
            "font": "base",
            "color": "accent"
          },
          {
            "id": "c-keep",
            "t": "text",
            "text": "Giữ: sự kiện cần cho vấn đề · theo mốc",
            "x": 3996,
            "y": 510,
            "size": 30,
            "at": "l3:only",
            "font": "base"
          },
          {
            "id": "c-role",
            "t": "text",
            "text": "Tên, số hợp đồng → thay bằng vai",
            "x": 3996,
            "y": 560,
            "size": 30,
            "at": "l4:names",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "c-take",
            "t": "text",
            "text": "Kể để dẫn tới vấn đề",
            "x": 3996,
            "y": 650,
            "size": 56,
            "at": "l5:lead",
            "color": "accent",
            "hl": [
              {
                "text": "dẫn tới vấn đề",
                "at": "l5:lead"
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
          "say": "Buyer and Seller sign a sales contract. The Seller delivers late.",
          "sub": "Bên mua và Bên bán ký hợp đồng mua bán hàng hoá. Bên bán giao hàng chậm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The Buyer claims damages; the Seller refuses. I helped my supervisor research and draft.",
          "sub": "Bên mua đòi bồi thường; Bên bán từ chối. Tôi giúp luật sư hướng dẫn nghiên cứu hồ sơ, soạn dự thảo."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Keep only facts needed for the issue, in date order, as lawyer Lê Minh Trường advises.",
          "sub": "Chỉ giữ sự kiện cần cho vấn đề, kể theo mốc thời gian, như lời khuyên của luật sư Lê Minh Trường.",
          "keys": [
            "chỉ giữ sự kiện cần cho vấn đề"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Your role within a trainee's scope; names become roles.",
          "sub": "Vai của mình đúng phạm vi người tập sự; tên người, số hợp đồng thay bằng vai."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Tell the facts to lead to the issue, not to tell the whole story.",
          "sub": "Kể sự kiện để dẫn tới vấn đề, không để kể hết câu chuyện.",
          "keys": [
            "dẫn tới vấn đề"
          ]
        }
      ],
      "ref": "p3,p4,p5"
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
            "text": "② Thứ Tư · Vấn đề = câu hỏi",
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
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think"
                }
              ],
              "props": [
                "balance-scale"
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
            "at": "l1:wednesday",
            "caption": "Thứ Tư · văn phòng",
            "icon": "balance-scale"
          },
          {
            "id": "d-gt",
            "t": "text",
            "text": "Giáo trình HVTP: hiệu lực, chủ thể…",
            "x": 5964,
            "y": 170,
            "size": 40,
            "at": "l3:textbook",
            "color": "muted"
          },
          {
            "id": "d-gt2",
            "t": "text",
            "text": "…thời hiệu, điều kiện khởi kiện",
            "x": 5964,
            "y": 230,
            "size": 40,
            "at": "l3:time limits",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wednesday. Dũng, Thảo's study buddy, drops by with a puzzled face.",
          "sub": "Thứ Tư. Dũng, bạn ôn cùng Thảo, ghé qua với vẻ mặt khó hiểu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "So what is the legal issue? I heard a story, but no question.",
          "sub": "Vậy vấn đề pháp lý là gì? Tôi nghe được chuyện, chưa nghe câu hỏi.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The Judicial Academy textbook lists the points: validity, parties, duties, performance, jurisdiction, time limits.",
          "sub": "Giáo trình Học viện Tư pháp liệt kê điểm cần xác định: hiệu lực, chủ thể, nghĩa vụ, thực hiện, thẩm quyền, thời hiệu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Pick one or two disputed points and say them as a question.",
          "sub": "Chọn một, hai điểm đang tranh cãi và nói thành câu hỏi.",
          "keys": [
            "nói thành câu hỏi"
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
      "ref": "p6"
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
            "id": "d-s1",
            "t": "text",
            "text": "1 · Chỗ hai bên nói khác nhau",
            "x": 5964,
            "y": 330,
            "size": 42,
            "at": "l1:differ"
          },
          {
            "id": "d-s2",
            "t": "text",
            "text": "2 · Gọi tên: thời hiệu khởi kiện",
            "x": 5964,
            "y": 395,
            "size": 42,
            "at": "l2:name",
            "hl": [
              {
                "text": "thời hiệu khởi kiện",
                "at": "l2:time limit"
              }
            ]
          },
          {
            "id": "d-s3",
            "t": "text",
            "text": "3 · Nói thành câu hỏi",
            "x": 5964,
            "y": 460,
            "size": 42,
            "at": "l3:question"
          },
          {
            "id": "d-s4",
            "t": "text",
            "text": "4 · Báo trước: “còn, ba lý do”",
            "x": 5964,
            "y": 525,
            "size": 42,
            "at": "l4:three reasons",
            "color": "accent"
          },
          {
            "id": "d-take",
            "t": "text",
            "text": "Một vấn đề = một câu hỏi",
            "x": 5964,
            "y": 650,
            "size": 58,
            "at": "l5:one issue",
            "color": "accent",
            "hl": [
              {
                "text": "một câu hỏi",
                "at": "l5:one question"
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
          "say": "Step one: find where the parties differ. The Buyer says it can still sue; the Seller says time ran out.",
          "sub": "Bước một: tìm chỗ hai bên nói khác nhau. Bên mua cho rằng còn quyền khởi kiện, Bên bán cho rằng đã hết thời hiệu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Step two: name it from the textbook list. The time limit to sue.",
          "sub": "Bước hai: gọi tên theo danh mục giáo trình: thời hiệu khởi kiện.",
          "keys": [
            "thời hiệu khởi kiện"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Step three: turn it into a question. As of the filing date, is the Buyer still in time?",
          "sub": "Bước ba: nói thành câu hỏi. Tính đến ngày nộp đơn, Bên mua còn trong thời hiệu hay không?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Step four: signal your answer. I believe it is, for three reasons.",
          "sub": "Bước bốn: báo trước hướng trả lời. “Tôi cho rằng còn, vì ba lý do.”",
          "keys": [
            "vì ba lý do"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One issue, one question, and listeners follow you to the end like ducklings.",
          "sub": "Một vấn đề, một câu hỏi, người nghe theo tới cuối như vịt con theo mẹ.",
          "keys": [
            "Một vấn đề, một câu hỏi"
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
            "text": "③ Thứ Năm · Căn cứ",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "give",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "books"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:thursday",
            "caption": "Thứ Năm · quán nước",
            "icon": "books"
          },
          {
            "id": "e-lmt",
            "t": "text",
            "text": "Luôn lấy văn bản pháp luật làm căn cứ",
            "x": 7932,
            "y": 170,
            "size": 34,
            "at": "l1:always",
            "font": "base",
            "hl": [
              {
                "text": "làm căn cứ",
                "at": "l1:basis"
              }
            ]
          },
          {
            "id": "e-acc",
            "t": "text",
            "text": "Nói điều người xét xử chấp nhận được",
            "x": 7932,
            "y": 220,
            "size": 34,
            "at": "l2:accept",
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
          "say": "Thursday, the heart of the talk. Lawyer Lê Minh Trường: always use legal texts as the basis.",
          "sub": "Thứ Năm, phần lõi. Luật sư Lê Minh Trường: luôn dùng văn bản pháp luật làm căn cứ cho nhận định.",
          "keys": [
            "làm căn cứ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And say what the judges can accept, not what you like.",
          "sub": "Và nói điều người xét xử chấp nhận được, không phải điều mình thích."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Easy! I've listed ten articles. The more you cite, the higher the marks!",
          "sub": "Dễ! Tôi liệt kê mười điều luật. Trích càng nhiều càng điểm cao!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ten articles. Let's see what the panel does with that.",
          "sub": "Mười điều luật. Xem Ban chấm làm gì với chúng."
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "Dũng tập thử căn cứ",
        "actors": [
          {
            "id": "dung",
            "side": "left",
            "pose": "explain"
          },
          {
            "id": "thao",
            "side": "right",
            "pose": "point"
          }
        ],
        "props": [
          "books"
        ],
        "verdict": {
          "ok": false,
          "label": "Trích thật nhiều điều luật cho oai",
          "why": "Mỗi điều nêu ra là một cửa để hỏi tiếp; một câu không trả lời được, phần đó không có phúc tra.",
          "rule": "Ít căn cứ mà chắc hơn nhiều căn cứ mà hở"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Your seventh article: which clause, and is it still in force?",
          "sub": "Điều thứ bảy anh nêu: khoản nào, còn hiệu lực không?",
          "pose": "point"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Uh... I just copied that one in.",
          "sub": "Ờ... cái đó tôi chép thêm vào thôi.",
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
          "say": "Every article you cite is a door for the next question. And no review afterwards.",
          "sub": "Mỗi điều luật nêu ra là một cửa để Ban chấm hỏi tiếp. Mà phần này không có phúc tra.",
          "keys": [
            "một cửa để Ban chấm hỏi tiếp"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Three grounds you really know.",
          "sub": "Tua lại! Ba căn cứ mình nắm chắc.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Three grounds, each with document, article, clause. Checked in force.",
          "sub": "Ba căn cứ, mỗi căn cứ ghi văn bản, điều, khoản. Đã kiểm còn hiệu lực.",
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
      "ref": "p11"
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
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 330,
            "w": 44,
            "h": 44,
            "at": "l1:reason",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 312,
            "size": 56,
            "at": "l1:reason+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Mỗi lý do: văn bản, điều, khoản",
            "x": 8002,
            "y": 322,
            "size": 40,
            "at": "l1:reason+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 402,
            "w": 44,
            "h": 44,
            "at": "l1:force",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 384,
            "size": 56,
            "at": "l1:force+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Còn hiệu lực: lúc vụ, lúc thi",
            "x": 8002,
            "y": 394,
            "size": 40,
            "at": "l1:force+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 474,
            "w": 44,
            "h": 44,
            "at": "l2:other side",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 456,
            "size": 56,
            "at": "l2:other side+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Một câu về lập luận phía kia",
            "x": 8002,
            "y": 466,
            "size": 40,
            "at": "l2:other side+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 546,
            "w": 44,
            "h": 44,
            "at": "l3:unsure",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 528,
            "size": 56,
            "at": "l3:unsure+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Chỗ chưa chắc: nói thận trọng",
            "x": 8002,
            "y": 538,
            "size": 40,
            "at": "l3:unsure+200"
          },
          {
            "id": "e-take",
            "t": "text",
            "text": "Ít mà chắc > nhiều mà hở",
            "x": 7932,
            "y": 660,
            "size": 58,
            "at": "l4:few",
            "color": "accent",
            "hl": [
              {
                "text": "Ít mà chắc",
                "at": "l4:few"
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
          "say": "Checklist: each reason, one ground, with document, article, clause. In force for the case, and at exam time.",
          "sub": "Danh sách kiểm: mỗi lý do một căn cứ, ghi văn bản, điều, khoản. Còn hiệu lực lúc xảy ra vụ và lúc thi.",
          "keys": [
            "Còn hiệu lực"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One sentence on the other side's argument, before you say why you disagree.",
          "sub": "Một câu về lập luận phía bên kia, trước khi nói vì sao mình không đồng ý."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And know where your view is still unsure, so you say it carefully.",
          "sub": "Và biết chỗ nào quan điểm mình còn chưa chắc, để nói thận trọng.",
          "keys": [
            "nói thận trọng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A few solid grounds beat many grounds with gaps. A fence with holes keeps nothing in.",
          "sub": "Ít căn cứ mà chắc hơn nhiều căn cứ mà hở. Hàng rào thủng thì giữ được gì.",
          "keys": [
            "Ít căn cứ mà chắc"
          ]
        }
      ],
      "ref": "p10,p12"
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
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Sáu · Kết quả",
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
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up"
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
            "caption": "Thứ Sáu sáng · văn phòng",
            "icon": "page-facing-up"
          },
          {
            "id": "f-end",
            "t": "text",
            "text": "Kết thúc thế nào / đang ở đâu",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l3:ended"
          },
          {
            "id": "f-pro",
            "t": "text",
            "text": "+ đề xuất có căn cứ chứng cứ, pháp luật",
            "x": 60,
            "y": 1330,
            "size": 34,
            "at": "l3:evidence",
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
          "say": "Friday morning. Ms Hoa, Thảo's supervising lawyer, reads the ending.",
          "sub": "Thứ Sáu sáng. Cô Hoa, luật sư hướng dẫn của Thảo, đọc phần kết."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Your ending just stops. Tie it back to your question.",
          "sub": "Phần kết của em dừng cụt. Nối lại với câu hỏi ban đầu.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Say how the case ended or where it stands, and propose measures backed by evidence and law.",
          "sub": "Nói vụ đã kết thúc thế nào hoặc đang ở giai đoạn nào, rồi đề xuất biện pháp có căn cứ chứng cứ và pháp luật.",
          "keys": [
            "có căn cứ chứng cứ và pháp luật"
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-tpl",
            "t": "text",
            "text": "“Vì vậy, với câu hỏi [vấn đề],",
            "x": 60,
            "y": 1470,
            "size": 44,
            "at": "l1:therefore"
          },
          {
            "id": "f-tpl2",
            "t": "text",
            "text": "tôi cho rằng [kết luận],",
            "x": 60,
            "y": 1535,
            "size": 44,
            "at": "l1:believe",
            "hl": [
              {
                "text": "[kết luận]",
                "at": "l1:conclusion"
              }
            ]
          },
          {
            "id": "f-tpl3",
            "t": "text",
            "text": "hướng xử lý là [đề xuất].”",
            "x": 60,
            "y": 1600,
            "size": 44,
            "at": "l1:proposal"
          },
          {
            "id": "f-diff",
            "t": "text",
            "text": "Kết quả khác ý mình? Nói thẳng, giải thích ngắn",
            "x": 60,
            "y": 1690,
            "size": 30,
            "at": "l2:differs",
            "font": "base",
            "color": "coral"
          },
          {
            "id": "f-loop",
            "t": "text",
            "text": "Câu kết = câu hỏi phần hai",
            "x": 60,
            "y": 1760,
            "size": 52,
            "at": "l3:loop",
            "color": "accent",
            "hl": [
              {
                "text": "câu hỏi phần hai",
                "at": "l3:part two"
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
          "say": "A good closing line: therefore, on the question of the issue, I believe the conclusion, and the way forward is the proposal.",
          "sub": "Câu kết tốt: “Vì vậy, với câu hỏi [vấn đề], tôi cho rằng [kết luận], và hướng xử lý là [đề xuất].”",
          "keys": [
            "Vì vậy, với câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "If the real outcome differs from your view, say so plainly and explain briefly.",
          "sub": "Nếu kết quả thực tế khác quan điểm của mình, hãy nói thẳng và giải thích ngắn vì sao."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Close the loop: the last sentence answers the question from part two.",
          "sub": "Khép vòng: câu cuối trả lời đúng câu hỏi ở phần hai.",
          "keys": [
            "câu hỏi ở phần hai"
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
            "zoom": 1.3,
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
            "text": "⑤ Tối thứ Sáu · Dàn ý",
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
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "stopwatch"
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
            "at": "l1:friday night",
            "caption": "Tối thứ Sáu · ở nhà",
            "icon": "memo"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Viết đủ một lần để nghĩ",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l2:once"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "→ rút thành 1 trang từ khoá",
            "x": 2028,
            "y": 1330,
            "size": 44,
            "at": "l2:page",
            "hl": [
              {
                "text": "1 trang",
                "at": "l2:page"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Nhìn người nghe, không nhìn giấy",
            "x": 2028,
            "y": 1400,
            "size": 42,
            "at": "l3:listeners",
            "color": "accent"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "cử chỉ, điệu bộ cũng là lời",
            "x": 2028,
            "y": 1470,
            "size": 38,
            "at": "l3:gestures",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday night: from essay to outline.",
          "sub": "Tối thứ Sáu: từ bài viết sang dàn ý."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write it out fully once, to think clearly. Then shrink it to one page of key words and main grounds.",
          "sub": "Viết đầy đủ một lần để nghĩ cho rõ, rồi rút thành một trang dàn ý: từ khoá và căn cứ chính.",
          "keys": [
            "một trang dàn ý"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Speak rather than read, look at your listeners, and remember gestures speak too.",
          "sub": "Nói hơn là đọc, nhìn người nghe, và nhớ cử chỉ, điệu bộ cũng truyền đạt.",
          "keys": [
            "Nói hơn là đọc"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s15",
      "module": "BRK-08",
      "data": {
        "title": "Chia giờ để tập (không phải quy định)",
        "points": [
          {
            "label": "1–2 phút",
            "sub": "Sự kiện",
            "illus": "page-facing-up"
          },
          {
            "label": "~1 phút",
            "sub": "Vấn đề",
            "illus": "red-question-mark"
          },
          {
            "label": "2–3 phút",
            "sub": "Quan điểm, căn cứ",
            "illus": "balance-scale"
          },
          {
            "label": "~1 phút",
            "sub": "Kết quả",
            "illus": "check-mark-button"
          }
        ],
        "current": 2
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Facts, issue, view, outcome, by the minute.",
          "sub": "Sự kiện, vấn đề, quan điểm, kết quả: chia theo phút."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The view is longest: your defence.",
          "sub": "Quan điểm dài nhất: chỗ bảo vệ.",
          "keys": [
            "bảo vệ"
          ]
        }
      ],
      "ref": "p15"
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
            "at": "l2:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Lần tập 3 · Bấm giờ",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:third"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "stopwatch"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:third",
            "caption": "Lần tập 3 · cuối tuần",
            "icon": "stopwatch"
          },
          {
            "id": "h-12",
            "t": "text",
            "text": "Lần 1: 12 phút",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l1:twelve",
            "color": "muted"
          },
          {
            "id": "h-cut",
            "t": "text",
            "text": "Gạch chi tiết thừa",
            "x": 3996,
            "y": 1330,
            "size": 44,
            "at": "l1:cut",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third rehearsal. After twelve minutes, she cut each detail that didn't lead to the issue.",
          "sub": "Lần tập thứ ba. Sau mười hai phút lần đầu, Thảo gạch bớt chi tiết không dẫn tới vấn đề."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Four sentences of facts. Timer...",
          "sub": "Bốn câu sự kiện. Bấm giờ...",
          "face": "happy"
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s17",
      "module": "BRK-03",
      "data": {
        "value": 6,
        "from": 12,
        "suffix": " phút",
        "label": "lần tập 3, phần quan điểm chiếm phần lớn",
        "illus": "stopwatch"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "From twelve minutes down to...",
          "sub": "Từ mười hai phút xuống còn..."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Six. And the view takes most of it.",
          "sub": "Sáu phút. Phần quan điểm chiếm phần lớn.",
          "keys": [
            "Sáu phút"
          ]
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
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-6",
            "t": "text",
            "text": "Lần 3: 6 phút",
            "x": 3996,
            "y": 1420,
            "size": 52,
            "at": "l1:half",
            "color": "accent",
            "hl": [
              {
                "text": "6 phút",
                "at": "l1:half"
              }
            ]
          },
          {
            "id": "h-take",
            "t": "text",
            "text": "Thừa ở phần kể,",
            "x": 3996,
            "y": 1560,
            "size": 56,
            "at": "l2:story",
            "color": "coral"
          },
          {
            "id": "h-take2",
            "t": "text",
            "text": "không thừa ở lập luận",
            "x": 3996,
            "y": 1640,
            "size": 56,
            "at": "l2:reasoning",
            "color": "accent",
            "hl": [
              {
                "text": "lập luận",
                "at": "l2:reasoning"
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
          "say": "Same case, same grounds, half the time.",
          "sub": "Cùng vụ, cùng căn cứ, nửa thời gian."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A long talk is usually padded in the story, not in the reasoning.",
          "sub": "Bài nói dài thường thừa ở phần kể, không thừa ở phần lập luận.",
          "keys": [
            "thừa ở phần kể"
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
          },
          {
            "at": "l1",
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
            "text": "⑦ Mang gì vào phòng thi?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:bring"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "pen",
                "straight-ruler"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:bring",
            "caption": "Đầu tuần sau · văn phòng",
            "icon": "pen"
          },
          {
            "id": "i-ok",
            "t": "text",
            "text": "Đ23: bút viết, thước kẻ",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l3:pens",
            "color": "accent"
          },
          {
            "id": "i-ok2",
            "t": "text",
            "text": "bài kỹ năng: văn bản quy phạm pháp luật",
            "x": 5964,
            "y": 1330,
            "size": 30,
            "at": "l3:legal texts",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "i-no",
            "t": "text",
            "text": "✗ điện thoại, máy tính, thiết bị thu phát",
            "x": 5964,
            "y": 1380,
            "size": 30,
            "at": "l4:phones",
            "font": "base",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Ms Hoa, may I bring my outline into the oral room?",
          "sub": "Cô ơi, em được mang dàn ý vào phòng thi thực hành không ạ?",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Check the rules for that session, or ask the bar association. Don't guess.",
          "sub": "Đọc nội quy, hướng dẫn của Hội đồng kỳ đó, hoặc hỏi Đoàn luật sư. Đừng đoán.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article twenty-three allows pens and rulers, and legal texts for the skills paper.",
          "sub": "Điều 23 cho mang bút viết, thước kẻ; bài kiểm tra kỹ năng được mang văn bản quy phạm pháp luật."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Phones, computers and transmitters are banned. No separate list for the oral part.",
          "sub": "Cấm điện thoại, máy tính, thiết bị thu phát. Thông tư không tách danh mục riêng cho phần thực hành.",
          "keys": [
            "không tách danh mục riêng"
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
            "fit": "I",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "i-take",
            "t": "text",
            "text": "Nói trọn bài, không cần giấy",
            "x": 5964,
            "y": 1650,
            "size": 50,
            "at": "l1:without paper",
            "color": "accent",
            "hl": [
              {
                "text": "không cần giấy",
                "at": "l1:without paper"
              }
            ]
          },
          {
            "id": "i-why",
            "t": "text",
            "text": "dàn ý bị cấm, hay lạc chỗ, vẫn nói được",
            "x": 5964,
            "y": 1740,
            "size": 30,
            "at": "l2:lose",
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
          "say": "Either way, practise until you can give the whole talk without paper.",
          "sub": "Dù được mang dàn ý hay không, hãy tập để nói trọn bài mà không cần giấy.",
          "keys": [
            "không cần giấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Notes banned, or you lose your place? Your head still has the map.",
          "sub": "Dàn ý bị cấm, hay lạc mất chỗ? Tấm bản đồ vẫn nằm trong đầu.",
          "keys": [
            "vẫn nằm trong đầu"
          ]
        }
      ],
      "ref": "p18"
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
            "text": "Lần tập cuối · Không giấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:paper"
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
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "stopwatch"
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
            "at": "l1:last",
            "caption": "Lần tập cuối · phòng họp",
            "icon": "stopwatch"
          },
          {
            "id": "j-q",
            "t": "text",
            "text": "“The legal issue in my case is…”",
            "x": 7932,
            "y": 1270,
            "size": 44,
            "at": "l2:legal issue",
            "color": "accent"
          },
          {
            "id": "j-t1",
            "t": "text",
            "text": "phút thứ nhất ✓",
            "x": 7932,
            "y": 1350,
            "size": 50,
            "at": "l3:first minute",
            "hl": [
              {
                "text": "phút thứ nhất",
                "at": "l3:first minute"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Nói dài, nói dai thành nói dại…",
            "x": 7932,
            "y": 1540,
            "size": 42,
            "at": "l4:long",
            "color": "muted"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "…nói gọn thì thành ghi điểm",
            "x": 7932,
            "y": 1610,
            "size": 48,
            "at": "l4:short",
            "color": "accent",
            "hl": [
              {
                "text": "ghi điểm",
                "at": "l4:marks"
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
          "say": "The last rehearsal. No paper. Same sentence as the start.",
          "sub": "Lần tập cuối. Không cầm giấy. Vẫn câu mở đầu ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The legal issue in my case is whether the Buyer is still within the time limit to sue. I believe it is, for three reasons.",
          "sub": "Vấn đề pháp lý trong vụ của em là Bên mua còn trong thời hiệu khởi kiện hay không. Em cho rằng còn, vì ba lý do.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "This time it arrives in the first minute.",
          "sub": "Lần này câu ấy đến ngay phút thứ nhất.",
          "keys": [
            "phút thứ nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Talk long and you talk foolish. Talk short, and you score marks.",
          "sub": "“Nói dài, nói dai thành nói dại.” Nói gọn thì thành ghi điểm.",
          "keys": [
            "Nói gọn thì thành ghi điểm"
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
      "ref": "p7,p8"
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
            "at": "l1:facts",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l1:question",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:grounds",
            "fit": "E",
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
            "at": "l1:facts"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7464,
            "y": 690,
            "at": "l1:question"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 9432,
            "y": 690,
            "at": "l2:grounds+700"
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
          "say": "So: facts that lead to the issue, and the issue as one question.",
          "sub": "Tóm lại: sự kiện dẫn tới vấn đề, vấn đề nói thành một câu hỏi.",
          "keys": [
            "một câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your view on a few solid grounds.",
          "sub": "Quan điểm dựa trên ít căn cứ mà chắc.",
          "keys": [
            "ít căn cứ mà chắc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And an outcome that answers the question. Then, the questions.",
          "sub": "Và kết quả trả lời đúng câu hỏi. Rồi đến phần hỏi đáp.",
          "keys": [
            "trả lời đúng câu hỏi"
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
        "q": "What is the lesson about the number of legal grounds?",
        "options": [
          "Many grounds are always better, whatever your understanding of them",
          "No grounds are needed, because the panel only checks your manner",
          "A few solid grounds are better than many grounds with gaps"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "balance-scale",
        "why": "Dòng Rút ra nói ít căn cứ mà chắc thì hơn nhiều căn cứ mà hở. Ba căn cứ nắm chắc giúp trả lời trọn vẹn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the lesson about the number of legal grounds?",
          "sub": "Bài học về số lượng căn cứ pháp lý là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A few solid grounds are better than many grounds with gaps.",
          "sub": "Ít căn cứ mà chắc hơn nhiều căn cứ mà hở."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[26]"
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
          "say": "Now: write your case's legal question as one sentence, then time one try.",
          "sub": "Việc làm ngay: viết câu hỏi pháp lý của vụ mình thành một câu, rồi bấm giờ nói thử một lần.",
          "keys": [
            "một câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: the panel's questions. Then, forty questions below!",
          "sub": "Bài sau: dự đoán câu hỏi của Ban chấm. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-22",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-22 (câu thoại bị cắt): “The legal issue in my case is…” cắt ở s00, nói trọn ở cuối ô B (s03, ~80 s), nói gọn ngay phút đầu ở cảnh khép vòng s21. Dòng thời gian: MỘT TUẦN TẬP NÓI của Thảo (lần tập 1 tối thứ Hai, 12 phút p16 → thứ Ba cắt sự kiện p3–p5 → thứ Tư Dũng hỏi “vấn đề là gì”, làm mẫu 4 bước p6–p8 → thứ Năm căn cứ, “Khoan đã!” Dũng mười điều luật p9–p12 → thứ Sáu sáng cô Hoa: phần kết p13 → tối thứ Sáu dàn ý, chia giờ p14–p15 → lần tập 3, 6 phút p16–p17 → hỏi cô Hoa mang gì vào phòng thi p18 → lần tập cuối không giấy, khép vòng). Tục ngữ mở/khép: “Nói dài, nói dai thành nói dại”. Nhân vật: Thảo, Dũng, cô Hoa (w145/_series/bar-exam-oral.md); “một người bạn liệt kê mười điều luật” (questions[24]) gán cho Dũng. BRK: 04 (Trước/Sau phần sự kiện p4), 08 (chia giờ tập p15, ghi rõ không phải quy định), 03 (12 → 6 phút p16). Mốc chỉ lấy từ bài: 5–7 phút tự đặt, chia 1–2/1/2–3/1 phút, 12 → 6 phút, Đ17, Đ14, Đ23 TT10. Câu đố questions[26].",
  "loop": {
    "open": "s00",
    "close": "s21"
  }
};
