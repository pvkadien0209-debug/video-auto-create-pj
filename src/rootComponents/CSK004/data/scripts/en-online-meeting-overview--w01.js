// en-online-meeting-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-online-meeting-overview--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "en-online-meeting-staff",
    "slug": "en-online-meeting-overview",
    "door": "ky-nang",
    "level": "B1",
    "title": "Họp online bằng tiếng Anh: từ lúc vào phòng đến lúc chốt việc cần làm gì?",
    "series": "Họp online bằng tiếng Anh — cho người đi làm, dám lên tiếng và chốt được việc"
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
            "text": "60–80%",
            "x": 60,
            "y": 90,
            "size": 170,
            "at": "l1:Sixty",
            "color": "accent",
            "hl": [
              {
                "text": "60–80%",
                "at": "l1:eighty"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "cuộc họp bạn hiểu được",
            "x": 70,
            "y": 330,
            "size": 54,
            "at": "l1:meeting"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "A. hỏi lại chỗ chưa rõ",
            "x": 70,
            "y": 430,
            "size": 50,
            "at": "l2:ask"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "B. cứ tham gia",
            "x": 70,
            "y": 510,
            "size": 50,
            "at": "l2:join"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "C. im lặng đến hết",
            "x": 70,
            "y": 590,
            "size": 50,
            "at": "l2:silent",
            "color": "muted"
          },
          {
            "id": "a-3x",
            "t": "strike",
            "over": "a-3",
            "at": "l3:first two"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: British Council TeachingEnglish — Meetings 2: Getting involved in meetings (phiếu bài tập)",
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
          "say": "Sixty to eighty percent. Say you understand that much of an English meeting.",
          "sub": "Sáu mươi đến tám mươi phần trăm. Giả sử bạn hiểu ngần ấy một cuộc họp tiếng Anh.",
          "keys": [
            "Sáu mươi đến tám mươi phần trăm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A British Council worksheet asks: do you ask, join in, or stay silent?",
          "sub": "Phiếu bài tập của British Council hỏi: hỏi lại, cứ tham gia, hay im lặng?",
          "keys": [
            "im lặng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "This series picks the first two.",
          "sub": "Chuỗi bài này chọn hai cách đầu.",
          "keys": [
            "hai cách đầu"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
      "ref": "intro,p2"
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
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "caption": "Thứ Năm 14:00 · họp Teams",
            "icon": "laptop"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Học ăn, học nói,",
            "x": 880,
            "y": 670,
            "size": 42,
            "at": "l4:eat",
            "color": "accent",
            "hl": [
              {
                "text": "học nói",
                "at": "l4:speak"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "học gói, học mở”",
            "x": 1260,
            "y": 670,
            "size": 42,
            "at": "l4:wrap",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo, a project specialist in Hà Nội, and a bit of a perfectionist.",
          "sub": "Đây là Thảo, chuyên viên dự án ở Hà Nội, hơi cầu toàn.",
          "keys": [
            "hơi cầu toàn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Every Thursday at two, she has a Teams call with Sam, the project manager in Singapore.",
          "sub": "Chiều thứ Năm nào cũng vậy, hai giờ, Thảo họp Teams với chị Sam, quản lý dự án ở Singapore.",
          "keys": [
            "chị Sam"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I follow most of it. But when my sentence is ready, they've moved on.",
          "sub": "Em hiểu gần hết. Nhưng câu em soạn xong thì mọi người đã sang chuyện khác.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents said: learn to eat, learn to speak, learn to wrap, learn to open.",
          "sub": "Ông bà dạy: “Học ăn, học nói, học gói, học mở.”",
          "keys": [
            "Học ăn, học nói, học gói, học mở"
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
            "text": "Hiểu mà sao vẫn im?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:silent",
            "hl": [
              {
                "text": "vẫn im",
                "at": "l1:silent"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Lo lỗi sai → thiếu tự tin",
            "x": 2028,
            "y": 165,
            "size": 52,
            "at": "l2:mistakes",
            "hl": [
              {
                "text": "thiếu tự tin",
                "at": "l2:confidence"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Ngược lại: quá tự tin, nói lấn",
            "x": 2028,
            "y": 255,
            "size": 50,
            "at": "l3:opposite",
            "color": "coral"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Rào cản: tự mình vượt",
            "x": 2028,
            "y": 345,
            "size": 50,
            "at": "l4:barrier",
            "hl": [
              {
                "text": "tự mình",
                "at": "l4:themselves"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: British Council TeachingEnglish — Meetings 2 (Jeremy Day)",
            "x": 2028,
            "y": 720,
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
          "say": "So why do we understand, yet stay silent?",
          "sub": "Vậy vì sao hiểu mà ta vẫn im lặng?",
          "keys": [
            "vẫn im lặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The British Council lesson says: learners worry about mistakes, and low confidence holds them back.",
          "sub": "Giáo án British Council nói: người học lo lỗi sai, và sự thiếu tự tin cản họ tham gia trọn vẹn.",
          "keys": [
            "thiếu tự tin"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The opposite exists too: too confident, talking over everyone.",
          "sub": "Kiểu ngược lại cũng có: quá tự tin, nói lấn át người khác."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Either way, learners must break that barrier themselves.",
          "sub": "Kiểu nào thì rào cản ấy cũng phải tự mình vượt qua.",
          "keys": [
            "tự mình vượt qua"
          ]
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
            "id": "b-no",
            "t": "text",
            "text": "Không phải: nói chuẩn mới nói",
            "x": 2928,
            "y": 165,
            "size": 48,
            "at": "l1:perfect",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:Instead"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: câu mẫu có sẵn",
            "x": 2928,
            "y": 250,
            "size": 58,
            "at": "l2:ready",
            "color": "accent",
            "hl": [
              {
                "text": "câu mẫu có sẵn",
                "at": "l2:ready"
              }
            ]
          },
          {
            "id": "b-y1",
            "t": "text",
            "text": "câu chen lời → thêm giờ nghĩ",
            "x": 2968,
            "y": 345,
            "size": 42,
            "at": "l2:interrupt"
          },
          {
            "id": "b-y2",
            "t": "text",
            "text": "câu kiểm tra hiểu đúng",
            "x": 2968,
            "y": 410,
            "size": 42,
            "at": "l2:check"
          },
          {
            "id": "b-y3",
            "t": "text",
            "text": "cứ nói: càng nói càng dễ",
            "x": 2968,
            "y": 475,
            "size": 42,
            "at": "l3:easier",
            "hl": [
              {
                "text": "càng nói càng dễ",
                "at": "l3:easier"
              }
            ]
          },
          {
            "id": "b-y4",
            "t": "text",
            "text": "hỏi đồng nghiệp lỗi quen",
            "x": 2968,
            "y": 540,
            "size": 40,
            "at": "l3:colleagues",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Many think their English must be perfect before they speak.",
          "sub": "Nhiều người nghĩ phải nói thật chuẩn rồi mới được lên tiếng.",
          "keys": [
            "thật chuẩn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Instead, the lesson gives ready phrases: to interrupt and buy thinking time, and to check you understood.",
          "sub": "Thay vào đó, giáo án cho câu mẫu có sẵn: câu chen lời để thêm thời gian nghĩ, câu kiểm tra mình hiểu đúng.",
          "keys": [
            "câu mẫu có sẵn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then just start. It gets easier. And ask colleagues about your usual slips.",
          "sub": "Rồi cứ bắt đầu nói, càng nói càng dễ. Và hỏi đồng nghiệp về lỗi quen của mình để sửa dần.",
          "keys": [
            "càng nói càng dễ"
          ]
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Một cuộc họp, sáu chặng",
        "points": [
          {
            "label": "13:58",
            "sub": "Vào phòng",
            "illus": "waving-hand"
          },
          {
            "label": "14:10",
            "sub": "Micro trục trặc",
            "illus": "muted-speaker"
          },
          {
            "label": "14:20",
            "sub": "Chen lời",
            "illus": "raised-hand"
          },
          {
            "label": "14:30",
            "sub": "Không đồng ý",
            "illus": "balance-scale"
          },
          {
            "label": "14:40",
            "sub": "Nghe không kịp",
            "illus": "ear"
          },
          {
            "label": "14:55",
            "sub": "Chốt việc",
            "illus": "clipboard"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One meeting, six stops. Camera on.",
          "sub": "Một cuộc họp, sáu chặng. Bật camera nào.",
          "keys": [
            "sáu chặng"
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
            "text": "① 13:58 · Vào phòng",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:join"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "wave",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "hot-beverage"
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
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:join",
            "caption": "13:58 · hai người vào sớm",
            "icon": "waving-hand"
          },
          {
            "id": "c-st",
            "t": "text",
            "text": "small talk: chuyện ngoài lề",
            "x": 3996,
            "y": 165,
            "size": 46,
            "at": "l4:small talk",
            "hl": [
              {
                "text": "small talk",
                "at": "l4:small talk"
              }
            ]
          },
          {
            "id": "c-st2",
            "t": "text",
            "text": "thời tiết · tin tức · gia đình",
            "x": 4036,
            "y": 240,
            "size": 44,
            "at": "l4:weather",
            "color": "muted"
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "“What are you working on",
            "x": 3996,
            "y": 330,
            "size": 48,
            "at": "l2:What are you",
            "color": "accent"
          },
          {
            "id": "c-q2",
            "t": "text",
            "text": "at the moment?”",
            "x": 4036,
            "y": 400,
            "size": 48,
            "at": "l2:moment",
            "color": "accent",
            "hl": [
              {
                "text": "at the moment",
                "at": "l4:easiest"
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
          "say": "Stop one: two minutes to two. Thảo and Sam join early. Awkward silence.",
          "sub": "Chặng một: hai giờ kém hai. Thảo và chị Sam vào sớm. Im lặng đến ngượng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Hi Thảo! So, what are you working on at the moment?",
          "sub": "Chào Thảo! Dạo này em đang làm việc gì thế?",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "The supplier report. Almost done!",
          "sub": "Báo cáo nhà cung cấp ạ. Sắp xong rồi!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That's small talk: weather, news, family, not the task itself. And Sam's question is the easiest opener.",
          "sub": "Đó là small talk: thời tiết, tin tức, gia đình, chưa vào việc. Câu của chị Sam là câu mở dễ nhất.",
          "keys": [
            "small talk"
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
            "id": "c-o",
            "t": "text",
            "text": "Mở họp: chú ý → chương trình",
            "x": 3996,
            "y": 480,
            "size": 46,
            "at": "l1:attention",
            "hl": [
              {
                "text": "chương trình",
                "at": "l1:agenda"
              }
            ]
          },
          {
            "id": "c-o2",
            "t": "text",
            "text": "→ mục đích → giờ → mục 1",
            "x": 4036,
            "y": 545,
            "size": 42,
            "at": "l1:purpose",
            "color": "muted"
          },
          {
            "id": "c-ag",
            "t": "text",
            "text": "“Did everyone get a copy",
            "x": 3996,
            "y": 615,
            "size": 40,
            "at": "l2:copy",
            "color": "accent"
          },
          {
            "id": "c-ag2",
            "t": "text",
            "text": "of the agenda?”",
            "x": 4036,
            "y": 665,
            "size": 40,
            "at": "l2:agenda",
            "color": "accent"
          },
          {
            "id": "c-2h",
            "t": "text",
            "text": "“I've set aside two hours.”",
            "x": 4836,
            "y": 695,
            "size": 36,
            "at": "l3:two hours",
            "color": "accent",
            "hl": [
              {
                "text": "set aside",
                "at": "l3:set aside"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: British Council — Meetings 1: Getting down to business",
            "x": 3996,
            "y": 725,
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
          "say": "Then the chair opens: get attention, check the agenda, give the purpose and timing, then item one.",
          "sub": "Rồi người chủ trì mở họp: gọi chú ý, kiểm tra chương trình họp, nói mục đích, thời lượng, rồi vào mục đầu.",
          "keys": [
            "kiểm tra chương trình họp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Right. Did everyone get a copy of the agenda I sent round?",
          "sub": "Nào. Mọi người đã nhận chương trình họp chị gửi chưa?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "I've set aside two hours for this meeting.",
          "sub": "Chị dành hai tiếng cho buổi họp này.",
          "pose": "explain"
        }
      ],
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
            "at": "l1",
            "fit": [
              "c-p1",
              "c-p4"
            ],
            "zoom": 1.15,
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
            "id": "c-p1",
            "t": "text",
            "text": "get the ball rolling",
            "x": 4906,
            "y": 40,
            "size": 40,
            "at": "l1:ball",
            "hl": [
              {
                "text": "ball rolling",
                "at": "l1:rolling"
              }
            ]
          },
          {
            "id": "c-p2",
            "t": "text",
            "text": "stick to the agenda",
            "x": 5276,
            "y": 40,
            "size": 40,
            "at": "l1:stick"
          },
          {
            "id": "c-p3",
            "t": "text",
            "text": "run over",
            "x": 4906,
            "y": 90,
            "size": 36,
            "at": "l2:run over",
            "color": "coral"
          },
          {
            "id": "c-p4",
            "t": "text",
            "text": "tie up loose ends",
            "x": 5276,
            "y": 90,
            "size": 36,
            "at": "l2:loose ends"
          },
          {
            "id": "c-in",
            "t": "text",
            "text": "tên · vai trò · lý do",
            "x": 5326,
            "y": 695,
            "size": 36,
            "at": "l3:name",
            "hl": [
              {
                "text": "lý do",
                "at": "l3:reason"
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
          "say": "Listen for: get the ball rolling, start. Stick to the agenda, stay on topic.",
          "sub": "Để ý: get the ball rolling là vào việc, stick to the agenda là bám chương trình.",
          "keys": [
            "vào việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Run over, go past time. Tie up loose ends, finish the small leftovers.",
          "sub": "Run over là lố giờ. Tie up loose ends là giải quyết nốt việc nhỏ còn sót."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Asked to introduce yourself? Name, role, reason you're here.",
          "sub": "Được mời giới thiệu? Tên, vai trò, lý do có mặt.",
          "keys": [
            "Tên, vai trò, lý do có mặt"
          ]
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
            "at": "l5",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 14:10 · Micro trục trặc",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:report"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "props": [
                "muted-speaker",
                "laptop"
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
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:report",
            "caption": "14:10 · đến lượt Thảo báo cáo",
            "icon": "muted-speaker"
          },
          {
            "id": "d-mic",
            "t": "illus",
            "name": "muted-speaker",
            "x": 5964,
            "y": 160,
            "size": 100,
            "at": "l3:minute"
          },
          {
            "id": "d-1m",
            "t": "text",
            "text": "hơn 1 phút… kịch câm",
            "x": 6084,
            "y": 185,
            "size": 50,
            "at": "l3:minute",
            "color": "coral",
            "hl": [
              {
                "text": "kịch câm",
                "at": "l3:mime"
              }
            ]
          },
          {
            "id": "d-chat",
            "t": "text",
            "text": "Chat: “Thao, I think",
            "x": 5964,
            "y": 300,
            "size": 48,
            "at": "l4:chat"
          },
          {
            "id": "d-chat2",
            "t": "text",
            "text": "you're on mute.”",
            "x": 6004,
            "y": 370,
            "size": 48,
            "at": "l4:mute",
            "color": "accent",
            "hl": [
              {
                "text": "on mute",
                "at": "l4:mute"
              }
            ]
          },
          {
            "id": "d-cut",
            "t": "text",
            "text": "Nói lại → báo cáo bị cắt",
            "x": 5964,
            "y": 470,
            "size": 46,
            "at": "l5:again",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: ten past two. Thảo's turn to report.",
          "sub": "Chặng hai: hai giờ mười. Đến lượt Thảo báo cáo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Okay, progress update. First, the supplier delays…",
          "sub": "Vâng, em cập nhật tiến độ. Trước hết, việc nhà cung cấp giao chậm…",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Over a minute of talking. The screen stays silent, like a mime show.",
          "sub": "Nói một mạch hơn một phút. Màn hình im phăng phắc, như diễn kịch câm.",
          "keys": [
            "diễn kịch câm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then a colleague types in the chat: Thao, I think you're on mute.",
          "sub": "Rồi một đồng nghiệp gõ vào khung chat: “Thao, I think you're on mute.”",
          "keys": [
            "on mute"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "She starts again, and her report gets cut short.",
          "sub": "Thảo bật micro, nói lại từ đầu, và phần báo cáo bị cắt ngắn.",
          "keys": [
            "bị cắt ngắn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "online",
        "label": "14:10 · trước khi báo cáo",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Vào là báo cáo luôn",
          "why": "Micro tắt thì một phút nói vào khoảng không, rồi phải nói lại và bị cắt ngắn.",
          "rule": "Hỏi nghe rõ chưa trước, báo cáo sau"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "My turn. I'll just start my report right away.",
          "sub": "Đến lượt mình. Báo cáo luôn cho nhanh.",
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
          "say": "One tiny question first saves a minute of talking to nobody.",
          "sub": "Một câu hỏi nhỏ trước tiết kiệm cả phút nói với… không ai.",
          "keys": [
            "Một câu hỏi nhỏ trước"
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
          "say": "Can you hear me okay? Great. Here's my update.",
          "sub": "Mọi người nghe em rõ không ạ? Tốt quá. Em báo cáo đây.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Ask first, report after.",
          "sub": "Đúng. Hỏi trước, báo cáo sau.",
          "phase": "redo",
          "keys": [
            "Hỏi trước, báo cáo sau"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p10,p11"
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
            "id": "d-p1",
            "t": "text",
            "text": "Can you hear me okay?",
            "x": 5964,
            "y": 550,
            "size": 46,
            "at": "l1:hear me",
            "color": "accent",
            "hl": [
              {
                "text": "hear me",
                "at": "l1:hear me"
              }
            ]
          },
          {
            "id": "d-p2",
            "t": "text",
            "text": "I think you're on mute.",
            "x": 5964,
            "y": 615,
            "size": 40,
            "at": "l1:mute"
          },
          {
            "id": "d-p3",
            "t": "text",
            "text": "I have a problem with my microphone.",
            "x": 5964,
            "y": 670,
            "size": 38,
            "at": "l2:problem"
          },
          {
            "id": "d-p4",
            "t": "text",
            "text": "Could you repeat that, please?",
            "x": 6804,
            "y": 700,
            "size": 40,
            "at": "l2:repeat",
            "hl": [
              {
                "text": "repeat",
                "at": "l2:repeat"
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
          "say": "Learn these: can you hear me okay? And for others: I think you're on mute.",
          "sub": "Thuộc mấy câu này: “Can you hear me okay?” Nhắc người khác: “I think you're on mute.”",
          "keys": [
            "Can you hear me okay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "I have a problem with my microphone. Could you repeat that, please? Details in the next lesson.",
          "sub": "“I have a problem with my microphone.” “Could you repeat that, please?” Chi tiết ở bài kế tiếp.",
          "keys": [
            "bài kế tiếp"
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
            "at": "l6",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 14:20 · Chen lời",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:idea"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "laptop"
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
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:idea",
            "caption": "14:20 · Dũng đang trình bày",
            "icon": "raised-hand"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Chen: “Can I just say",
            "x": 7932,
            "y": 165,
            "size": 44,
            "at": "l4:say something"
          },
          {
            "id": "e-1b",
            "t": "text",
            "text": "something?”",
            "x": 7972,
            "y": 225,
            "size": 44,
            "at": "l4:something",
            "hl": [
              {
                "text": "something?”",
                "at": "l4:something"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "“Sorry to interrupt, but…”",
            "x": 7972,
            "y": 290,
            "size": 44,
            "at": "l4:Sorry to interrupt",
            "color": "accent"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Giữ lượt: “Can I just",
            "x": 7932,
            "y": 370,
            "size": 42,
            "at": "l5:finish"
          },
          {
            "id": "e-3b",
            "t": "text",
            "text": "finish my point?”",
            "x": 7972,
            "y": 430,
            "size": 42,
            "at": "l5:point"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Nhường: “Go on.” · “After you.”",
            "x": 7932,
            "y": 510,
            "size": 42,
            "at": "l6:Go on",
            "hl": [
              {
                "text": "“After you.”",
                "at": "l6:After you"
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
          "say": "Stop three: twenty past two. Thảo has an idea.",
          "sub": "Chặng ba: hai giờ hai mươi. Thảo nảy ra một ý."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But Dũng is talking. Meet Dũng, the team's software engineer, who talks like a waterfall.",
          "sub": "Nhưng Dũng đang nói. Đây là Dũng, kỹ sư phần mềm của nhóm, nói như thác đổ.",
          "keys": [
            "nói như thác đổ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "And the test plan has three parts, and the first part is…",
          "sub": "Và kế hoạch thử nghiệm có ba phần, phần đầu tiên là…",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "To interrupt: can I just say something? Or: sorry to interrupt, but…",
          "sub": "Chen lời: “Can I just say something?” Hoặc: “Sorry to interrupt, but…”",
          "keys": [
            "Chen lời"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "To keep your turn: can I just finish my point?",
          "sub": "Giữ lượt: “Can I just finish my point?”",
          "keys": [
            "Giữ lượt"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "To give way: go on, or after you.",
          "sub": "Nhường lời: “Go on.” hoặc “After you.”",
          "keys": [
            "Nhường lời"
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
      "ref": "p12"
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
            "id": "e-hand",
            "t": "illus",
            "name": "raised-hand",
            "x": 7932,
            "y": 580,
            "size": 80,
            "at": "l1:raise"
          },
          {
            "id": "e-h1",
            "t": "text",
            "text": "Teams: người trình bày nhận báo",
            "x": 8032,
            "y": 590,
            "size": 40,
            "at": "l1:notification"
          },
          {
            "id": "e-h2",
            "t": "text",
            "text": "nhiều tay → đánh số",
            "x": 8032,
            "y": 650,
            "size": 40,
            "at": "l2:numbered",
            "hl": [
              {
                "text": "đánh số",
                "at": "l2:numbered"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Giơ tay + câu chen lịch sự",
            "x": 8772,
            "y": 690,
            "size": 44,
            "at": "l3:polite",
            "color": "accent",
            "hl": [
              {
                "text": "câu chen lịch sự",
                "at": "l3:polite"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Microsoft Support — Raise your hand in Teams meetings",
            "x": 7932,
            "y": 725,
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
          "say": "Teams also has a raise hand button. The presenter gets a notification.",
          "sub": "Teams còn có nút giơ tay. Người trình bày nhận được thông báo.",
          "keys": [
            "nút giơ tay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Several hands? Names are numbered in order, like a queue at the bank.",
          "sub": "Nhiều người cùng giơ? Tên được đánh số theo thứ tự, như bốc số ở ngân hàng.",
          "keys": [
            "đánh số theo thứ tự"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Raise your hand, then open with a polite phrase.",
          "sub": "Giơ tay, rồi mở lời bằng một câu chen lịch sự.",
          "keys": [
            "câu chen lịch sự"
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 14:30 · Không đồng ý",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:design"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "point",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "artist-palette"
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
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:design",
            "caption": "14:30 · bản thiết kế cho khách",
            "icon": "artist-palette"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "“I think you're right.”",
            "x": 60,
            "y": 1255,
            "size": 44,
            "at": "l4:right"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "“I see what you mean, but…”",
            "x": 60,
            "y": 1330,
            "size": 42,
            "at": "l5:see what",
            "color": "accent",
            "hl": [
              {
                "text": "I see what you mean",
                "at": "l5:see what"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "“I'm not so sure.”",
            "x": 60,
            "y": 1410,
            "size": 44,
            "at": "l5:not so sure"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "“I'm not convinced",
            "x": 60,
            "y": 1485,
            "size": 44,
            "at": "l5:convinced"
          },
          {
            "id": "f-4b",
            "t": "text",
            "text": "by that idea.”",
            "x": 100,
            "y": 1545,
            "size": 44,
            "at": "l5:idea"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: LearnEnglish (British Council) — Speaking B1",
            "x": 60,
            "y": 1820,
            "size": 28,
            "at": "l4:colleagues",
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
          "say": "Stop four: half past two. A client design is on screen.",
          "sub": "Chặng bốn: hai rưỡi. Bản thiết kế cho khách đang trên màn hình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Looks great. Let's send it to the client today!",
          "sub": "Đẹp rồi. Gửi khách luôn hôm nay đi!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Today? The colours still look wrong to me…",
          "sub": "Hôm nay á? Em thấy màu vẫn chưa ổn…",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A British Council B1 lesson has two colleagues arguing over a design too. Agree: I think you're right.",
          "sub": "Bài B1 của British Council cũng có hai đồng nghiệp cãi về một bản thiết kế. Đồng ý: “I think you're right.”"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Partly: I see what you mean, but… Softly no: I'm not so sure. Firmer: I'm not convinced by that idea.",
          "sub": "Đồng ý một phần: “I see what you mean, but…” Không nhẹ: “I'm not so sure.” Rõ hơn: “I'm not convinced by that idea.”",
          "keys": [
            "Đồng ý một phần"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s14",
      "module": "BRK-04",
      "data": {
        "title": "Gửi khách ngay hôm nay?",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“No. That's wrong.”",
        "right": "“I see what you mean, but I'm not so sure it's ready.”",
        "wrongIllus": "cross-mark",
        "rightIllus": "handshake"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: no, that's wrong. Dũng gets defensive.",
          "sub": "Trước: “No. That's wrong.” Dũng phải tự vệ.",
          "keys": [
            "tự vệ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: I see what you mean, but…",
          "sub": "Sau: ghi nhận ý anh ấy trước.",
          "keys": [
            "ghi nhận"
          ]
        }
      ],
      "ref": "p15"
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
            "id": "f-w",
            "t": "text",
            "text": "+ “Why don't we check",
            "x": 60,
            "y": 1595,
            "size": 42,
            "at": "l1:Why don't we",
            "color": "muted"
          },
          {
            "id": "f-w2",
            "t": "text",
            "text": "the colours first?”",
            "x": 100,
            "y": 1645,
            "size": 42,
            "at": "l1:colours",
            "color": "muted"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Ghi nhận trước, rồi mới “but”",
            "x": 60,
            "y": 1705,
            "size": 46,
            "at": "l2:first",
            "color": "accent",
            "hl": [
              {
                "text": "rồi mới “but”",
                "at": "l2:but"
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
          "say": "Then open a next step: why don't we check the colours first?",
          "sub": "Rồi mở hướng làm tiếp: “Why don't we check the colours first?”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: acknowledge the other idea first, then say but. Reasons and options come in the disagreeing lesson.",
          "sub": "Rút ra: ghi nhận ý người khác trước, rồi mới nói “but”. Lý do, phương án khác có ở bài “không đồng ý”.",
          "keys": [
            "rồi mới nói “but”"
          ]
        }
      ],
      "ref": "p15,p16,p17"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 14:40 · Nghe không kịp",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:speeds"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "props": [
                "laptop",
                "spiral-calendar"
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
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:speeds",
            "caption": "14:40 · chị Sam nói nhanh",
            "icon": "spiral-calendar"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "“Sorry – I didn't catch",
            "x": 2028,
            "y": 1255,
            "size": 46,
            "at": "l4:catch"
          },
          {
            "id": "g-1b",
            "t": "text",
            "text": "that last word.”",
            "x": 2068,
            "y": 1320,
            "size": 46,
            "at": "l4:last word",
            "hl": [
              {
                "text": "last word",
                "at": "l4:last word"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "“What exactly do you",
            "x": 2028,
            "y": 1400,
            "size": 42,
            "at": "l4:exactly"
          },
          {
            "id": "g-2b",
            "t": "text",
            "text": "mean by…?”",
            "x": 2068,
            "y": 1455,
            "size": 42,
            "at": "l4:mean"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "“Would you mind speaking",
            "x": 2028,
            "y": 1530,
            "size": 44,
            "at": "l3:mind"
          },
          {
            "id": "g-3b",
            "t": "text",
            "text": "a bit more slowly?”",
            "x": 2068,
            "y": 1590,
            "size": 44,
            "at": "l3:slowly",
            "color": "accent",
            "hl": [
              {
                "text": "more slowly",
                "at": "l3:slowly"
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
          "say": "Stop five: two forty. Sam speeds up, like a train late for the station.",
          "sub": "Chặng năm: hai giờ bốn mươi. Chị Sam nói nhanh dần, như tàu sắp lỡ ga."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "So the files move to the new system, and the deadline shifts to Friday, unless…",
          "sub": "Vậy hồ sơ chuyển sang hệ thống mới, hạn chót dời sang thứ Sáu, trừ khi…",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Sorry, would you mind speaking a bit more slowly, please? I'm having trouble keeping up.",
          "sub": "Xin lỗi chị, chị nói chậm hơn chút được không ạ? Em đang theo không kịp.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The lesson's longest group: checking you understood. Sorry, I didn't catch that last word. What exactly do you mean by…?",
          "sub": "Nhóm câu dài nhất giáo án: kiểm tra mình hiểu đúng. “Sorry – I didn't catch that last word.” “What exactly do you mean by…?”",
          "keys": [
            "kiểm tra mình hiểu đúng"
          ]
        }
      ],
      "ref": "p18"
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
            "id": "g-sw",
            "t": "text",
            "text": "“So what you're saying is…”",
            "x": 2028,
            "y": 1670,
            "size": 50,
            "at": "l1:saying",
            "color": "accent",
            "hl": [
              {
                "text": "what you're saying",
                "at": "l1:saying"
              }
            ]
          },
          {
            "id": "g-sw2",
            "t": "text",
            "text": "Số liệu, hạn chót: nhắc lại",
            "x": 2028,
            "y": 1750,
            "size": 42,
            "at": "l3:numbers",
            "hl": [
              {
                "text": "hạn chót",
                "at": "l3:deadlines"
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
          "say": "Heard it, not sure? Say it back in your own words: so what you're saying is…",
          "sub": "Nghe được mà chưa chắc? Nhắc lại bằng lời mình: “So what you're saying is…”",
          "keys": [
            "Nhắc lại bằng lời mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "So what you're saying is, the deadline moves to Friday?",
          "sub": "Vậy ý chị là hạn chót dời sang thứ Sáu ạ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Gold for numbers and deadlines: the speaker confirms or corrects you on the spot.",
          "sub": "Đặc biệt quý với số liệu và hạn chót: người nói xác nhận hoặc sửa ngay.",
          "keys": [
            "số liệu và hạn chót"
          ]
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s18",
      "module": "BRK-07",
      "data": {
        "question": "Họp vui cả tiếng mà chẳng ai biết ai làm gì?",
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
          "say": "A whole hour of good talk, and nobody knows who does what?",
          "sub": "Họp vui cả tiếng mà chẳng ai biết ai làm gì?",
          "keys": [
            "ai làm gì"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
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
            "at": "l6",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 14:55 · Chốt việc",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:chair"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "center"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "clipboard",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:chair",
            "caption": "14:55 · Thảo chủ trì phần cuối",
            "icon": "clipboard"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "1. “Let's wrap things up.”",
            "x": 3996,
            "y": 1255,
            "size": 44,
            "at": "l2:wrap",
            "hl": [
              {
                "text": "wrap things up",
                "at": "l2:wrap"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "2. “So, to sum up…”",
            "x": 3996,
            "y": 1335,
            "size": 46,
            "at": "l3:sum up"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "3. Tên + việc + hạn",
            "x": 3996,
            "y": 1415,
            "size": 50,
            "at": "l4:Dung",
            "color": "accent",
            "hl": [
              {
                "text": "Tên + việc + hạn",
                "at": "l4:Friday"
              }
            ]
          },
          {
            "id": "h-3b",
            "t": "text",
            "text": "“Dung, you're going to",
            "x": 4036,
            "y": 1490,
            "size": 38,
            "at": "l4:going"
          },
          {
            "id": "h-3c",
            "t": "text",
            "text": "send out the minutes",
            "x": 4036,
            "y": 1540,
            "size": 38,
            "at": "l4:minutes"
          },
          {
            "id": "h-3d",
            "t": "text",
            "text": "by Friday.”",
            "x": 4036,
            "y": 1590,
            "size": 38,
            "at": "l4:Friday"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "“Would anyone like to",
            "x": 3996,
            "y": 1660,
            "size": 38,
            "at": "l6:anyone"
          },
          {
            "id": "h-4b",
            "t": "text",
            "text": "add anything?”",
            "x": 4036,
            "y": 1710,
            "size": 38,
            "at": "l6:add anything"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: five to three. Today Sam lets Thảo chair the last part.",
          "sub": "Chặng sáu: ba giờ kém năm. Hôm nay chị Sam để Thảo chủ trì phần cuối."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "We're running out of time. Let's try to wrap things up.",
          "sub": "Sắp hết giờ rồi. Mình chốt lại nhé.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "So, to sum up, we've decided to check the colours first.",
          "sub": "Tóm lại, mình đã quyết định kiểm tra màu trước."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Dung, you're going to send out the minutes by Friday.",
          "sub": "Dũng, anh sẽ gửi biên bản họp trước thứ Sáu nhé.",
          "pose": "point"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Got it. Minutes by Friday.",
          "sub": "Rõ. Biên bản trước thứ Sáu.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Would anyone like to add anything before we finish the call?",
          "sub": "Có ai muốn thêm gì trước khi kết thúc không ạ?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
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
          }
        ],
        "items": [
          {
            "id": "h-ap",
            "t": "text",
            "text": "action points: việc sau họp",
            "x": 3996,
            "y": 1770,
            "size": 40,
            "at": "l1:action points",
            "hl": [
              {
                "text": "action points",
                "at": "l1:action points"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Một cái tên, một cái hạn",
            "x": 4836,
            "y": 1780,
            "size": 46,
            "at": "l3:name",
            "color": "accent",
            "hl": [
              {
                "text": "một cái hạn",
                "at": "l3:deadline"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: EF English Live; Business English Pod — BEP 81",
            "x": 3996,
            "y": 1825,
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
          "say": "EF English Live: action points are tasks people must do after the meeting, usually in the minutes.",
          "sub": "Theo EF English Live, action points là việc người dự phải làm sau họp, thường ghi trong biên bản.",
          "keys": [
            "action points"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Business English Pod: unclear action points are a top reason meetings fail.",
          "sub": "Business English Pod: thiếu action points rõ ràng là lý do hàng đầu khiến họp kém hiệu quả.",
          "keys": [
            "lý do hàng đầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So every task needs a name and a deadline. The summary email is in the wrap-up lesson.",
          "sub": "Vậy mỗi việc cần một cái tên và một cái hạn. Email tóm tắt sau họp có ở bài chốt việc.",
          "keys": [
            "một cái tên và một cái hạn"
          ]
        }
      ],
      "ref": "p20,p22,p23"
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
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "21:00 · Giấy nhớ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:maps"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
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
                "memo",
                "pencil",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:maps",
            "caption": "Tối thứ Năm · ở nhà",
            "icon": "memo"
          },
          {
            "id": "i-o",
            "t": "text",
            "text": "Âm thanh → chen lời",
            "x": 5964,
            "y": 1255,
            "size": 42,
            "at": "l1:Sound"
          },
          {
            "id": "i-o2",
            "t": "text",
            "text": "→ phản đối → hỏi lại → chốt",
            "x": 6004,
            "y": 1315,
            "size": 40,
            "at": "l1:action points"
          },
          {
            "id": "i-bk",
            "t": "text",
            "text": "Sách: English for Meetings (OUP)",
            "x": 5964,
            "y": 1385,
            "size": 38,
            "at": "l1:English for Meetings",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Evening. Thảo maps the series like a meeting: sound, interrupting, disagreeing, asking again, action points. Plus Oxford's English for Meetings.",
          "sub": "Buổi tối. Thảo xếp chuỗi theo nhịp cuộc họp: âm thanh, chen lời, không đồng ý, hỏi lại, chốt việc. Thêm sách English for Meetings của Oxford.",
          "keys": [
            "theo nhịp cuộc họp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Five lines on a sticky note, right next to my screen.",
          "sub": "Năm câu, một tờ giấy nhớ, dán ngay cạnh màn hình.",
          "face": "happy",
          "pose": "hold"
        }
      ],
      "ref": "p24"
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
            "id": "i-n",
            "t": "box",
            "x": 5934,
            "y": 1450,
            "w": 820,
            "h": 390,
            "at": "l1",
            "fill": "#fff3a6",
            "stroke": 4
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1490,
            "w": 44,
            "h": 44,
            "at": "l1:hear",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1472,
            "size": 56,
            "at": "l1:hear+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Can you hear me okay?",
            "x": 6029,
            "y": 1482,
            "size": 38,
            "at": "l1:hear+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1560,
            "w": 44,
            "h": 44,
            "at": "l1:say",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1542,
            "size": 56,
            "at": "l1:say+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Can I just say something?",
            "x": 6029,
            "y": 1552,
            "size": 38,
            "at": "l1:say+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1630,
            "w": 44,
            "h": 44,
            "at": "l1:mean",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1612,
            "size": 56,
            "at": "l1:mean+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "I see what you mean, but…",
            "x": 6029,
            "y": 1622,
            "size": 38,
            "at": "l1:mean+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1700,
            "w": 44,
            "h": 44,
            "at": "l2:catch",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1682,
            "size": 56,
            "at": "l2:catch+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Sorry, I didn't catch that.",
            "x": 6029,
            "y": 1692,
            "size": 38,
            "at": "l2:catch+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1770,
            "w": 44,
            "h": 44,
            "at": "l2:sum",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1752,
            "size": 56,
            "at": "l2:sum+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "So, to sum up…",
            "x": 6029,
            "y": 1762,
            "size": 38,
            "at": "l2:sum+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Can you hear me okay? Can I just say something? I see what you mean, but…",
          "sub": "“Can you hear me okay?” “Can I just say something?” “I see what you mean, but…”",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Sorry, I didn't catch that last word. So, to sum up…",
          "sub": "“Sorry, I didn't catch that last word.” “So, to sum up…”",
          "face": "happy"
        }
      ],
      "ref": "p25"
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
            "text": "Thứ Năm sau · 13:58",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:quiet"
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
                  "id": "thao",
                  "side": "left",
                  "face": "happy",
                  "pose": "wave"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "memo"
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
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Thursday",
            "caption": "Thứ Năm sau · cùng phòng họp",
            "icon": "laptop"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Nói trước: “Can you",
            "x": 7932,
            "y": 1270,
            "size": 42,
            "at": "l2:hear me",
            "color": "accent"
          },
          {
            "id": "j-1b",
            "t": "text",
            "text": "hear me okay?” ✓",
            "x": 7972,
            "y": 1330,
            "size": 42,
            "at": "l2:okay",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Học nói, học gói”",
            "x": 7932,
            "y": 1420,
            "size": 58,
            "at": "l4:wrap",
            "color": "accent",
            "hl": [
              {
                "text": "học gói",
                "at": "l4:wrap"
              }
            ]
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "gói = wrap things up",
            "x": 7972,
            "y": 1510,
            "size": 44,
            "at": "l4:wrap things up",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next Thursday, two minutes to two. Same call, same quiet minute. Not the same Thảo.",
          "sub": "Thứ Năm tuần sau, hai giờ kém hai. Vẫn cuộc họp ấy, vẫn phút im lặng ấy. Nhưng Thảo đã khác."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Hi Sam! Can you hear me okay? And what are you working on at the moment?",
          "sub": "Chào chị Sam! Chị nghe em rõ không ạ? Dạo này chị đang làm gì thế?",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Loud and clear, Thảo! Let's get the ball rolling.",
          "sub": "Rõ lắm Thảo! Vào việc thôi.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Learn to speak, learn to wrap. Now Thảo can open the call, and wrap things up too.",
          "sub": "“Học nói, học gói”: giờ Thảo biết mở lời, và biết cả “gói” cuộc họp lại.",
          "keys": [
            "biết cả “gói” cuộc họp lại"
          ]
        }
      ],
      "ref": "p5,p9"
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
            "fit": "H",
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
            "id": "j-s",
            "t": "text",
            "text": "Đúng câu cho đúng chặng",
            "x": 7932,
            "y": 1610,
            "size": 56,
            "at": "l1:right phrase",
            "hl": [
              {
                "text": "đúng chặng",
                "at": "l1:right stage"
              }
            ]
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 6664,
            "y": 540,
            "at": "l2"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8632,
            "y": 160,
            "at": "l3"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1410,
            "at": "l4"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Câu mẫu theo các nguồn đã ghi; quy định ghi âm, họp trực tuyến tuỳ công ty. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
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
          "say": "So: an English meeting doesn't need great English. Just the right phrase for the right stage.",
          "sub": "Tóm lại: họp tiếng Anh không đòi bạn nói hay. Chỉ cần đúng câu cho đúng chặng.",
          "keys": [
            "đúng câu cho đúng chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Check the sound first.",
          "sub": "Kiểm tra âm thanh trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Get your turn politely.",
          "sub": "Vào lượt bằng câu lịch sự."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "End with names and deadlines.",
          "sub": "Kết thúc bằng tên người, hạn việc."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: copy the five lines onto a sticky note, then open the sound lesson.",
          "sub": "Làm ngay: chép năm câu lên giấy nhớ cạnh màn hình, rồi mở bài “mất tiếng, rớt mạng”.",
          "keys": [
            "chép năm câu"
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
        "q": "In the story, why did Thao have to give her report again?",
        "options": [
          "She spoke for over a minute while her microphone was still on mute",
          "The chair said her report was too short and needed many more details",
          "Her colleagues in Singapore asked her to repeat it in another language"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "muted-speaker",
        "why": "Thảo nói một mạch khi micro vẫn tắt nên không ai nghe được. Khi bật micro, cô phải nói lại và phần báo cáo bị cắt ngắn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In the story, why did Thao have to give her report again?",
          "sub": "Trong câu chuyện, vì sao Thảo phải báo cáo lại?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "She spoke for over a minute while her microphone was still on mute.",
          "sub": "Thảo nói hơn một phút trong khi micro vẫn tắt."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "That's why we ask: can you hear me okay?",
          "sub": "Vì thế mới cần hỏi: “Can you hear me okay?”"
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[15]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Năm câu, một tờ giấy nhớ. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five lines, one sticky note. Then try the forty questions below.",
          "sub": "Năm câu, một tờ giấy nhớ. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-24: vật neo con số “60–80%” (phiếu bài tập Meetings 2: hiểu ngần ấy thì hỏi lại, tham gia hay im lặng?). Dòng thời gian: MỘT CUỘC HỌP Teams thứ Năm của Thảo với văn phòng Singapore (13:58 small talk → mở họp → 14:10 nói khi micro tắt + “Khoan đã!” → 14:20 Dũng nói, chen lời, giơ tay → 14:30 bản thiết kế, đồng ý/không → 14:40 chị Sam nói nhanh, hỏi lại → 14:55 Thảo chủ trì chốt việc → tối giấy nhớ năm câu → Thứ Năm sau 13:58 khép vòng). Nhân vật: Thảo, chị Sam, Dũng. Tục ngữ: “Học ăn, học nói, học gói, học mở” → “học gói” = wrap things up. Cảnh ngắt nhịp: BRK-08 (sáu chặng), BRK-04 (Trước/Sau p15), BRK-07 (rehook trước chốt việc). Câu đố questions[15].",
  "loop": {
    "open": "s01",
    "close": "s23"
  }
};
