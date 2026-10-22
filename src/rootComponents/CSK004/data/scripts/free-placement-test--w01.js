// free-placement-test--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "free-placement-test--w01",
  "hook": "HOOK-22",
  "unit": {
    "audience": "beginner-self-study-planners",
    "slug": "free-placement-test",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Làm bài kiểm tra trình độ miễn phí và đọc kết quả thế nào?",
    "series": "Biết mình ở đâu, đi tới đâu — tự đánh giá trình độ và lập lộ trình học ngoại ngữ theo Khung 6 bậc"
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-07",
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
            "caption": "Thứ Sáu 20:00 · hồ sơ xin việc",
            "icon": "page-facing-up"
          },
          {
            "id": "a-cv",
            "t": "text",
            "text": "Ngoại ngữ: B1,",
            "x": 60,
            "y": 130,
            "size": 100,
            "at": "l2:Languages",
            "color": "accent",
            "hl": [
              {
                "text": "B1",
                "at": "l2:B one"
              }
            ]
          },
          {
            "id": "a-cut",
            "t": "text",
            "text": "có hẳn một…",
            "x": 80,
            "y": 300,
            "size": 80,
            "at": "l2:real"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "một… gì?",
            "x": 80,
            "y": 450,
            "size": 64,
            "at": "l3:what",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo, Lan's cousin, writing her first job application in English.",
          "sub": "Đây là Thảo, em họ của Lan, đang viết hồ sơ xin việc đầu tiên bằng tiếng Anh.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Languages: English, B one. And I've got a real...",
          "sub": "Ngoại ngữ: tiếng Anh B1. Em còn có hẳn một…",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A real what? Hold on. We'll hear the rest very soon.",
          "sub": "Hẳn một cái gì? Khoan. Lát nữa ta nghe nốt.",
          "keys": [
            "nghe nốt"
          ],
          "wait": 600
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "intro,p7"
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
            "id": "a-ca",
            "t": "text",
            "text": "“Biết thì thưa thốt,",
            "x": 60,
            "y": 560,
            "size": 52,
            "at": "l2:know",
            "color": "accent",
            "hl": [
              {
                "text": "Biết thì thưa thốt",
                "at": "l2:speak up"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "không biết thì dựa cột mà nghe”",
            "x": 60,
            "y": 640,
            "size": 46,
            "at": "l2:pillar",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday, eight p.m., Lan's living room. An online quiz just told Thảo: B one.",
          "sub": "Tám giờ tối thứ Sáu, phòng khách nhà Lan. Một bài test trên mạng vừa báo Thảo: B1."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: if you know, speak up. If not, lean on the pillar and listen.",
          "sub": "Ông bà dặn: “Biết thì thưa thốt, không biết thì dựa cột mà nghe.”",
          "keys": [
            "Biết thì thưa thốt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So what does a free test really know about you? And what doesn't it?",
          "sub": "Vậy bài test miễn phí thật sự biết gì về bạn? Và không biết gì?"
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
          },
          {
            "at": "l2",
            "fit": [
              "b-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "B",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "b-q",
            "t": "text",
            "text": "Đọc kết quả thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:read",
            "hl": [
              {
                "text": "Đọc kết quả",
                "at": "l1:read the result"
              }
            ]
          },
          {
            "id": "b-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 150,
            "w": 800,
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
                "laptop"
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
            "at": "l1:test",
            "caption": "20:05 · câu nói trọn",
            "icon": "laptop"
          },
          {
            "id": "b-full",
            "t": "text",
            "text": "“… chứng chỉ!” (từ bài test mạng)",
            "x": 2028,
            "y": 180,
            "size": 44,
            "at": "l2:certificate",
            "color": "coral",
            "hl": [
              {
                "text": "chứng chỉ",
                "at": "l2:certificate"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: tấm bằng",
            "x": 2028,
            "y": 300,
            "size": 56,
            "at": "l4:certificate",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:starting"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: điểm xuất phát",
            "x": 2028,
            "y": 400,
            "size": 60,
            "at": "l4:starting",
            "color": "accent",
            "hl": [
              {
                "text": "điểm xuất phát",
                "at": "l4:starting point"
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
          "say": "So, how do you take a free level test, and how do you read the result?",
          "sub": "Vậy làm bài kiểm tra trình độ miễn phí thế nào, và đọc kết quả ra sao?",
          "keys": [
            "đọc kết quả"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "English, B one. And I've got a real certificate! Well... from an online quiz.",
          "sub": "Tiếng Anh B1. Em còn có hẳn chứng chỉ! À... từ bài test trên mạng.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "There it is. The rest of the sentence, and the whole problem.",
          "sub": "Đấy. Nửa sau của câu, và cũng là cả vấn đề."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So, not a certificate in your pocket. A starting point on your map.",
          "sub": "Vậy không phải tấm bằng trong túi, mà là điểm xuất phát trên bản đồ.",
          "keys": [
            "điểm xuất phát"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Ba tháng của Dũng và Thảo",
        "points": [
          {
            "label": "Thứ Sáu",
            "sub": "Hai bài test",
            "illus": "laptop"
          },
          {
            "label": "Thứ Bảy",
            "sub": "Ước lượng",
            "illus": "compass"
          },
          {
            "label": "Chủ nhật",
            "sub": "Bảng năm dòng",
            "illus": "memo"
          },
          {
            "label": "Thứ Hai",
            "sub": "Chọn sách",
            "illus": "books"
          },
          {
            "label": "Ba tháng sau",
            "sub": "Làm lại",
            "illus": "spiral-calendar"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Two tests, one table, one notebook.",
          "sub": "Hai bài test, một bảng, một cuốn sổ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "And three months later, a retest.",
          "sub": "Và ba tháng sau, làm lại.",
          "keys": [
            "làm lại"
          ]
        }
      ],
      "ref": "intro"
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
            "text": "① Thứ Sáu 20:00 · Hai bài test",
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
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "notebook"
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
            "at": "l1:Dũng",
            "caption": "Thứ Sáu 20:00 · phòng trọ Dũng",
            "icon": "laptop"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "① British Council",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "l3:British",
            "color": "accent"
          },
          {
            "id": "c-1a",
            "t": "text",
            "text": "3 lựa chọn · vài phút",
            "x": 4036,
            "y": 250,
            "size": 44,
            "at": "l3:three",
            "hl": [
              {
                "text": "3 lựa chọn",
                "at": "l3:three options"
              }
            ]
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "ngữ pháp, từ, cách diễn đạt",
            "x": 4036,
            "y": 315,
            "size": 40,
            "at": "l4:Grammar"
          },
          {
            "id": "c-1c",
            "t": "text",
            "text": "→ đăng nhập / đăng ký trước",
            "x": 4036,
            "y": 375,
            "size": 40,
            "at": "l4:register",
            "color": "coral"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "② Cambridge: 4 phiên bản",
            "x": 3996,
            "y": 470,
            "size": 50,
            "at": "l5:Cambridge",
            "color": "accent",
            "hl": [
              {
                "text": "4 phiên bản",
                "at": "l5:Four versions"
              }
            ]
          },
          {
            "id": "c-2a",
            "t": "text",
            "text": "điểm ngay · gợi ý kỳ thi",
            "x": 4036,
            "y": 550,
            "size": 44,
            "at": "l6:instant"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: British Council LearnEnglish; Cambridge English — Test your English",
            "x": 3996,
            "y": 735,
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
          "say": "Stop one, same Friday night. Meet Dũng, Lan's colleague, with one free evening and a mission.",
          "sub": "Chặng một, cũng tối thứ Sáu. Đây là Dũng, đồng nghiệp của Lan, có một buổi tối rảnh và một nhiệm vụ.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Before I buy any book, I want to know my level.",
          "sub": "Trước khi mua sách, anh muốn biết mình ở bậc nào.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Test one: British Council's LearnEnglish level test. Multiple choice, three options per question.",
          "sub": "Bài một: bài kiểm tra trình độ trên LearnEnglish của British Council. Trắc nghiệm, mỗi câu ba lựa chọn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Grammar, vocabulary and phrasing, in a few minutes. But log in or register first.",
          "sub": "Kiểm ngữ pháp, từ vựng, cách diễn đạt, làm trong vài phút. Nhưng phải đăng nhập hoặc đăng ký trước."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Test two: Cambridge's Test your English. Four versions: General English, Schools, Business, Young learners.",
          "sub": "Bài hai: Test your English của Cambridge. Bốn phiên bản: General English, Schools, Business, Young learners.",
          "keys": [
            "Bốn phiên bản"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Short, free, an instant score, and a hint about which Cambridge exam might suit you.",
          "sub": "Ngắn, miễn phí, có điểm ngay, và gợi ý kỳ thi Cambridge hợp với mình."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s05",
      "module": "BRK-04",
      "data": {
        "title": "Một buổi tối rảnh",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Một bài, mua sách ngay",
        "right": "Hai bài, so kết quả, đọc mô tả",
        "wrongIllus": "shopping-cart",
        "rightIllus": "memo"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Option A: one test, buy books now.",
          "sub": "Cách A: một bài, mua sách ngay."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Option B: both tests, then compare.",
          "sub": "Cách B: cả hai bài, rồi so.",
          "keys": [
            "Cách B"
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
          },
          {
            "at": 150,
            "fit": "D",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 21:00 · Cách B",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-r1",
            "t": "box",
            "x": 5964,
            "y": 180,
            "w": 700,
            "h": 140,
            "at": "l2:Two results",
            "stroke": 5
          },
          {
            "id": "d-r1t",
            "t": "text",
            "text": "Bài 1: kết quả …",
            "x": 5994,
            "y": 210,
            "size": 54,
            "at": "l2:Two results+200"
          },
          {
            "id": "d-r2",
            "t": "box",
            "x": 6764,
            "y": 180,
            "w": 700,
            "h": 140,
            "at": "l2:Two results+300",
            "stroke": 5
          },
          {
            "id": "d-r2t",
            "t": "text",
            "text": "Bài 2: kết quả …",
            "x": 6794,
            "y": 210,
            "size": 54,
            "at": "l2:Two results+500"
          },
          {
            "id": "d-vs",
            "t": "text",
            "text": "so với nhau",
            "x": 6544,
            "y": 360,
            "size": 50,
            "at": "l2:compare",
            "color": "coral"
          },
          {
            "id": "d-sc",
            "t": "illus",
            "name": "balance-scale",
            "x": 6664,
            "y": 420,
            "size": 150,
            "at": "l2:compare"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Hai bài test → đỡ lệch hơn",
            "x": 5964,
            "y": 640,
            "size": 58,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "đỡ lệch",
                "at": "l3:lopsided"
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
          "say": "Stop two, nine p.m. Dũng takes option B. A bit more time, but two points to compare.",
          "sub": "Chặng hai, chín giờ tối. Dũng chọn cách B. Tốn thêm chút thời gian, nhưng có hai điểm để so."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Two results in my notebook, side by side. I can compare them, not worship one number.",
          "sub": "Hai kết quả ghi cạnh nhau trong sổ. So được với nhau, khỏi thờ một con số.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: comparing two different tests gives a less lopsided estimate than trusting just one.",
          "sub": "Rút ra: làm hai bài test khác nhau rồi so giúp ước lượng đỡ lệch hơn chỉ dựa một bài.",
          "keys": [
            "đỡ lệch"
          ]
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
            "text": "③ Thứ Bảy · Chỉ là ước lượng",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three",
            "hl": [
              {
                "text": "ước lượng",
                "at": "l1:small print"
              }
            ]
          },
          {
            "id": "e-bc",
            "t": "text",
            "text": "British Council: “gần đúng”",
            "x": 7932,
            "y": 170,
            "size": 52,
            "at": "l2:approximate",
            "hl": [
              {
                "text": "gần đúng",
                "at": "l2:approximate"
              }
            ]
          },
          {
            "id": "e-bc2",
            "t": "text",
            "text": "đang hướng tới / đang hoàn thành",
            "x": 7972,
            "y": 250,
            "size": 42,
            "at": "l2:towards"
          },
          {
            "id": "e-cam",
            "t": "text",
            "text": "Cambridge: không phải kỳ thi chính thức",
            "x": 7932,
            "y": 340,
            "size": 44,
            "at": "l3:official"
          },
          {
            "id": "e-cam2",
            "t": "text",
            "text": "điểm ≠ bằng chứng năng lực",
            "x": 7972,
            "y": 410,
            "size": 44,
            "at": "l3:proof",
            "color": "coral",
            "hl": [
              {
                "text": "≠ bằng chứng",
                "at": "l3:proof"
              }
            ]
          },
          {
            "id": "e-ok",
            "t": "text",
            "text": "Hợp: chọn tài liệu, tự theo dõi",
            "x": 7932,
            "y": 510,
            "size": 46,
            "at": "l4:materials",
            "color": "accent"
          },
          {
            "id": "e-cert",
            "t": "text",
            "text": "Cần giấy tờ → thi có chứng chỉ",
            "x": 7932,
            "y": 590,
            "size": 46,
            "at": "l4:certified"
          },
          {
            "id": "e-cmp",
            "t": "illus",
            "name": "compass",
            "x": 9222,
            "y": 200,
            "size": 220,
            "at": "l2:approximate"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, Saturday morning. Time for the small print, which both sites state plainly.",
          "sub": "Chặng ba, sáng thứ Bảy. Đến lúc đọc dòng chữ nhỏ, mà cả hai trang đều nói thẳng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "British Council: an approximate indication of the level you're working towards or completing.",
          "sub": "British Council: chỉ báo gần đúng về trình độ bạn đang hướng tới hoặc đang hoàn thành.",
          "keys": [
            "gần đúng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Cambridge: not an official exam. The score is only a guide, not proof of language ability.",
          "sub": "Cambridge: không phải kỳ thi chính thức. Điểm chỉ để tham khảo, không phải bằng chứng năng lực.",
          "keys": [
            "không phải bằng chứng năng lực"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So free results help you choose materials and track yourself. For official papers, sit a certified exam.",
          "sub": "Vậy kết quả miễn phí hợp để chọn tài liệu, tự theo dõi. Cần giấy tờ chính thức thì thi kỳ thi có cấp chứng chỉ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Think of a kitchen scale for your English: handy at home, useless for an official weigh-in.",
          "sub": "Như cái cân nhà bếp cho tiếng Anh: cân ở nhà thì tiện, mang đi cân chính thức thì không.",
          "keys": [
            "cân nhà bếp"
          ]
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Bảy 11:00 · hồ sơ",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "explain"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Ghi điểm test mạng như chứng chỉ",
          "why": "Cambridge nói điểm test miễn phí không phải bằng chứng năng lực; British Council gọi là gần đúng.",
          "rule": "La bàn để tự học, không phải tấm bằng"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Done! Languages: English, B one certificate. Send!",
          "sub": "Xong! Ngoại ngữ: chứng chỉ tiếng Anh B1. Gửi!",
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
          "say": "That score isn't proof of ability, and it's certainly no certificate. Cambridge says so itself.",
          "sub": "Điểm ấy không phải bằng chứng năng lực, càng không phải chứng chỉ. Chính Cambridge nói thế.",
          "keys": [
            "không phải chứng chỉ"
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
          "say": "Fine. No certificate claim. That result stays in my notebook, for my own study.",
          "sub": "Thôi được. Không ghi chứng chỉ. Kết quả ấy để trong sổ, cho việc tự học của em.",
          "phase": "redo",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. A compass for self study, not a diploma for applications.",
          "sub": "Đúng. La bàn để tự học, không phải tấm bằng để nộp hồ sơ.",
          "phase": "redo",
          "keys": [
            "La bàn để tự học"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p7,p8"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Bài trắc nghiệm có đo được nói và viết không?",
        "illus": "speaking-head"
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
          "say": "Can a multiple choice quiz measure speaking and writing?",
          "sub": "Bài trắc nghiệm có đo được nói và viết không?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p9"
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
            "text": "④ Chủ nhật · Kỹ năng bỏ sót",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-in",
            "t": "text",
            "text": "Test: ngữ pháp, từ, diễn đạt",
            "x": 60,
            "y": 1260,
            "size": 48,
            "at": "l2:lists"
          },
          {
            "id": "f-out",
            "t": "text",
            "text": "Không nhắc: nghe, nói, viết",
            "x": 60,
            "y": 1340,
            "size": 48,
            "at": "l2:No listening",
            "color": "coral",
            "hl": [
              {
                "text": "nghe, nói, viết",
                "at": "l2:writing"
              }
            ]
          },
          {
            "id": "f-ace",
            "t": "text",
            "text": "trắc nghiệm giỏi ≠ nói giỏi",
            "x": 60,
            "y": 1430,
            "size": 46,
            "at": "l3:ace",
            "color": "muted"
          },
          {
            "id": "f-grid",
            "t": "text",
            "text": "Bảng tự đánh giá CEFR",
            "x": 960,
            "y": 1260,
            "size": 50,
            "at": "l4:grid",
            "color": "accent",
            "hl": [
              {
                "text": "tự đánh giá",
                "at": "l4:self assessment"
              }
            ]
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 960,
            "y": 1340,
            "w": 44,
            "h": 44,
            "at": "l5:listening",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 964,
            "y": 1322,
            "size": 56,
            "at": "l5:listening+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "nghe",
            "x": 1025,
            "y": 1332,
            "size": 42,
            "at": "l5:listening+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 960,
            "y": 1410,
            "w": 44,
            "h": 44,
            "at": "l5:reading",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 964,
            "y": 1392,
            "size": 56,
            "at": "l5:reading+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "đọc",
            "x": 1025,
            "y": 1402,
            "size": 42,
            "at": "l5:reading+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 960,
            "y": 1480,
            "w": 44,
            "h": 44,
            "at": "l5:interaction",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 964,
            "y": 1462,
            "size": 56,
            "at": "l5:interaction+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "nói tương tác",
            "x": 1025,
            "y": 1472,
            "size": 42,
            "at": "l5:interaction+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 960,
            "y": 1550,
            "w": 44,
            "h": 44,
            "at": "l5:production",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 964,
            "y": 1532,
            "size": 56,
            "at": "l5:production+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "nói độc thoại",
            "x": 1025,
            "y": 1542,
            "size": 42,
            "at": "l5:production+200"
          },
          {
            "id": "f-c4",
            "t": "box",
            "x": 960,
            "y": 1620,
            "w": 44,
            "h": 44,
            "at": "l5:writing",
            "stroke": 5
          },
          {
            "id": "f-k4",
            "t": "text",
            "text": "✓",
            "x": 964,
            "y": 1602,
            "size": 56,
            "at": "l5:writing+600",
            "color": "accent"
          },
          {
            "id": "f-l4",
            "t": "text",
            "text": "viết",
            "x": 1025,
            "y": 1612,
            "size": 42,
            "at": "l5:writing+200"
          },
          {
            "id": "f-w2",
            "t": "text",
            "text": "Viết bậc 2: nối “và, nhưng, vì”",
            "x": 60,
            "y": 1560,
            "size": 42,
            "at": "l6:level two",
            "hl": [
              {
                "text": "và, nhưng, vì",
                "at": "l6:because"
              }
            ]
          },
          {
            "id": "f-i2",
            "t": "text",
            "text": "Nói bậc 2: đơn giản, trực tiếp",
            "x": 60,
            "y": 1640,
            "size": 42,
            "at": "l7:simple"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Council of Europe — CEFR Table 2 (Self-assessment grid); Thông tư 01/2014/TT-BGDĐT",
            "x": 60,
            "y": 1825,
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
          "say": "Stop four, Sunday morning. What did those two tests actually check?",
          "sub": "Chặng bốn, sáng Chủ nhật. Hai bài test thật ra kiểm cái gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "British Council's page lists grammar, vocabulary, phrasing. No listening, speaking or writing. Cambridge doesn't say.",
          "sub": "Trang British Council chỉ nêu ngữ pháp, từ vựng, cách diễn đạt, không nhắc nghe, nói, viết. Trang Cambridge không nêu kỹ năng nào."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So you can ace the quiz and still freeze when you speak or write.",
          "sub": "Nên có thể làm tốt bài trắc nghiệm mà vẫn lúng túng khi nói, khi viết.",
          "keys": [
            "lúng túng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Enter the CEFR self assessment grid, an orientation tool from the Council of Europe.",
          "sub": "Gọi bảng tự đánh giá CEFR, công cụ định hướng của Hội đồng châu Âu.",
          "keys": [
            "công cụ định hướng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "It covers listening, reading, spoken interaction, spoken production and writing, to profile your main skills.",
          "sub": "Bảng gồm nghe, đọc, nói tương tác, nói độc thoại và viết, để vẽ hồ sơ kỹ năng chính của mình."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Add the circular's lines too: level two writing joins simple sentences with and, but, because.",
          "sub": "Thêm mô tả của Thông tư 01/2014: viết bậc 2 nối câu đơn giản bằng “và, nhưng, vì”."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "And level two interaction: simple, direct talk on familiar everyday topics.",
          "sub": "Còn nói tương tác bậc 2: giao tiếp đơn giản, trực tiếp về chủ đề quen thuộc hằng ngày."
        }
      ],
      "ref": "p9,p10,p11"
    },
    {
      "id": "s11",
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
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Chủ nhật tối · Bảng 5 dòng",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five",
            "hl": [
              {
                "text": "Bảng 5 dòng",
                "at": "l1:five rows"
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
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
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-07",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "Chủ nhật 21:00 · phòng trọ Dũng",
            "icon": "memo"
          },
          {
            "id": "g-r0",
            "t": "box",
            "x": 2028,
            "y": 1250,
            "w": 760,
            "h": 72,
            "at": "l2:row",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "g-rt0",
            "t": "text",
            "text": "Nghe: bậc …",
            "x": 2053,
            "y": 1258,
            "size": 42,
            "at": "l2:row+200"
          },
          {
            "id": "g-r1",
            "t": "box",
            "x": 2028,
            "y": 1335,
            "w": 760,
            "h": 72,
            "at": "l2:level",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "g-rt1",
            "t": "text",
            "text": "Đọc: bậc …",
            "x": 2053,
            "y": 1343,
            "size": 42,
            "at": "l2:level+200"
          },
          {
            "id": "g-r2",
            "t": "box",
            "x": 2028,
            "y": 1420,
            "w": 760,
            "h": 72,
            "at": "l2:plus",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "g-rt2",
            "t": "text",
            "text": "Nói tương tác: bậc …",
            "x": 2053,
            "y": 1428,
            "size": 42,
            "at": "l2:plus+200"
          },
          {
            "id": "g-r3",
            "t": "box",
            "x": 2028,
            "y": 1505,
            "w": 760,
            "h": 72,
            "at": "l4:down",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "g-rt3",
            "t": "text",
            "text": "Nói độc thoại ↓ 1 bậc",
            "x": 2053,
            "y": 1513,
            "size": 42,
            "at": "l4:down+200",
            "color": "coral",
            "hl": [
              {
                "text": "↓ 1 bậc",
                "at": "l4:down"
              }
            ]
          },
          {
            "id": "g-r4",
            "t": "box",
            "x": 2028,
            "y": 1590,
            "w": 760,
            "h": 72,
            "at": "l3:Writing",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "g-rt4",
            "t": "text",
            "text": "Viết: 5 câu, and, but",
            "x": 2053,
            "y": 1598,
            "size": 42,
            "at": "l3:Writing+200"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Thấy từng kỹ năng ở đâu",
            "x": 2028,
            "y": 1730,
            "size": 50,
            "at": "l6:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "từng kỹ năng",
                "at": "l6:each skill"
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
          "say": "Stop five, Sunday night. Dũng draws a table with five rows.",
          "sub": "Chặng năm, tối Chủ nhật. Dũng kẻ một bảng năm dòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Each row gets the level I think is right, plus one thing I can really do.",
          "sub": "Mỗi dòng: bậc anh nghĩ là đúng, kèm một việc cụ thể làm được.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Writing: five sentences about my work, joined with and, but. Good.",
          "sub": "Viết: năm câu về công việc, nối bằng and, but. Ổn.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Spoken production... no example at all. Then down one level.",
          "sub": "Nói độc thoại... chẳng có ví dụ nào. Vậy hạ xuống một bậc.",
          "face": "sad"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Honest, and a little painful. Like stepping on the scales after Tết.",
          "sub": "Thật thà, và hơi đau. Như bước lên cân sau Tết.",
          "keys": [
            "bước lên cân sau Tết"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: a test gives one overall number. The table shows where each skill stands.",
          "sub": "Rút ra: bài test cho một con số chung, còn bảng tự đánh giá cho biết từng kỹ năng đang ở đâu.",
          "keys": [
            "từng kỹ năng đang ở đâu"
          ]
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s12",
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
            "at": "l5",
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
            "text": "⑥ Thứ Hai trưa · Chọn sách",
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
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "worried"
                }
              ],
              "props": [
                "books",
                "open-book"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:book",
            "caption": "Thứ Hai 12:30 · hiệu sách",
            "icon": "books"
          },
          {
            "id": "h-tw",
            "t": "text",
            "text": "B1 = đang hướng tới B1?",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l2:towards",
            "hl": [
              {
                "text": "đang hướng tới",
                "at": "l2:working towards"
              }
            ]
          },
          {
            "id": "h-st",
            "t": "text",
            "text": "Bắt đầu ở bậc đó",
            "x": 3996,
            "y": 1350,
            "size": 50,
            "at": "l3:Start",
            "color": "accent"
          },
          {
            "id": "h-bk",
            "t": "text",
            "text": "quá khó → lùi 1 bậc",
            "x": 3996,
            "y": 1430,
            "size": 50,
            "at": "l3:back",
            "color": "coral",
            "hl": [
              {
                "text": "lùi 1 bậc",
                "at": "l3:Step back"
              }
            ]
          },
          {
            "id": "h-sp",
            "t": "text",
            "text": "Kết quả = điểm xuất phát",
            "x": 3996,
            "y": 1530,
            "size": 48,
            "at": "l4:starting",
            "hl": [
              {
                "text": "điểm xuất phát",
                "at": "l4:starting point"
              }
            ]
          },
          {
            "id": "h-n",
            "t": "text",
            "text": "Nation: ~2 từ lạ / 100 từ",
            "x": 3996,
            "y": 1650,
            "size": 50,
            "at": "l6:two",
            "color": "accent",
            "hl": [
              {
                "text": "~2 từ lạ / 100 từ",
                "at": "l6:hundred"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: British Council LearnEnglish; Paul Nation (2014)",
            "x": 3996,
            "y": 1825,
            "size": 28,
            "at": "l6",
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
          "say": "Stop six, Monday lunch. Dũng finally goes book shopping. Carefully, this time.",
          "sub": "Chặng sáu, trưa thứ Hai. Dũng cuối cùng cũng đi mua sách. Lần này cẩn thận."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Note British Council's words: working towards or completing. B one may mean heading there, not secure yet.",
          "sub": "Để ý chữ của British Council: “đang hướng tới hoặc đang hoàn thành”. B1 có thể là đang đi về phía B1, chưa vững.",
          "keys": [
            "đang hướng tới"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Start with materials at that level. Too hard? Step back one level.",
          "sub": "Bắt đầu với tài liệu ở bậc đó. Quá khó thì lùi một bậc.",
          "keys": [
            "lùi một bậc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "British Council suggests using the result to find free materials at your level. A starting point, not a finish line.",
          "sub": "British Council gợi ý dùng kết quả để tìm tài liệu miễn phí đúng bậc. Điểm xuất phát, không phải vạch đích."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "This book says B one. But page one is a jungle of new words.",
          "sub": "Sách ghi B1. Mà trang đầu toàn từ lạ, rậm như rừng.",
          "face": "worried"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Paul Nation's check: suitable reading or listening has about two unknown words in every hundred.",
          "sub": "Phép thử của Paul Nation: bài đọc, bài nghe vừa sức có khoảng 2 từ lạ trên 100 từ.",
          "keys": [
            "2 từ lạ trên 100 từ"
          ]
        }
      ],
      "ref": "p14,p15,p16"
    },
    {
      "id": "s13",
      "module": "BRK-03",
      "data": {
        "value": 2,
        "suffix": " từ lạ",
        "label": "trên 100 từ: tài liệu vừa sức",
        "illus": "open-book"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Two unknown words, per hundred.",
          "sub": "Hai từ lạ, trên một trăm từ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A page full of them? Probably still too hard, whatever the label says.",
          "sub": "Cả trang toàn từ lạ? Có lẽ vẫn quá sức, dù nhãn ghi gì.",
          "keys": [
            "vẫn quá sức"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s14",
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
            "text": "⑦ Thứ Hai tối · Cuốn sổ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop seven"
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
                  "face": "thinking"
                }
              ],
              "props": [
                "notebook",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "at": "l1:Thảo",
            "caption": "Thứ Hai 21:00 · sổ của Thảo",
            "icon": "notebook"
          },
          {
            "id": "i-bf",
            "t": "text",
            "text": "Trước: “B1?”",
            "x": 5964,
            "y": 1260,
            "size": 60,
            "at": "l2:Before",
            "color": "muted"
          },
          {
            "id": "i-bfx",
            "t": "strike",
            "over": "i-bf",
            "at": "l3:After"
          },
          {
            "id": "i-a1",
            "t": "text",
            "text": "Sau: ngày · tên bài test · B1",
            "x": 5964,
            "y": 1360,
            "size": 46,
            "at": "l3:After",
            "color": "accent"
          },
          {
            "id": "i-a2",
            "t": "text",
            "text": "nghe 2 · đọc 3",
            "x": 5964,
            "y": 1440,
            "size": 44,
            "at": "l4:Listening"
          },
          {
            "id": "i-a2b",
            "t": "text",
            "text": "nói 2 · viết 2",
            "x": 6324,
            "y": 1440,
            "size": 44,
            "at": "l4:interaction"
          },
          {
            "id": "i-a3",
            "t": "text",
            "text": "chưa kể được chuyện ngắn",
            "x": 5964,
            "y": 1520,
            "size": 44,
            "at": "l4:story",
            "color": "coral",
            "hl": [
              {
                "text": "chưa kể được",
                "at": "l4:can't"
              }
            ]
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Ghi kèm ngày + từng kỹ năng",
            "x": 5964,
            "y": 1630,
            "size": 50,
            "at": "l5:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "ngày",
                "at": "l5:date"
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
          "say": "Stop seven, Monday night. Nation advises weekly goals and recording progress. Thảo opens her notebook.",
          "sub": "Chặng bảy, tối thứ Hai. Nation khuyên đặt đích tuần và ghi lại tiến bộ. Thảo mở sổ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before: just B one, with a question mark, on page one.",
          "sub": "Trước: chỉ một dòng “B1?” ở trang đầu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "After: the date, the British Council test, result B one.",
          "sub": "Sau: ngày làm bài, bài test của British Council, kết quả B1.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Listening two, reading three, interaction two, writing two. And I still can't tell a short story.",
          "sub": "Nghe bậc 2, đọc bậc 3, nói tương tác bậc 2, viết bậc 2. Và chưa kể được một chuyện ngắn bằng tiếng Anh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Now a retest knows exactly what to compare. Takeaway: record each result with its date and every skill.",
          "sub": "Giờ lần làm lại biết chính xác phải so gì. Rút ra: ghi kết quả kèm ngày và từng kỹ năng.",
          "keys": [
            "kèm ngày và từng kỹ năng"
          ]
        }
      ],
      "ref": "p17,p19,p20"
    },
    {
      "id": "s15",
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
          },
          {
            "at": "l5",
            "fit": [
              "j-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Ba tháng sau · thứ Sáu 20:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Three months"
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
                  "side": "left",
                  "pose": "hold",
                  "face": "sad"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "notebook"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Friday",
            "caption": "Ba tháng sau · cùng phòng khách",
            "icon": "spiral-calendar"
          },
          {
            "id": "j-same",
            "t": "text",
            "text": "Làm lại đúng bài cũ",
            "x": 7932,
            "y": 1260,
            "size": 52,
            "at": "l1:Same tests"
          },
          {
            "id": "j-h",
            "t": "text",
            "text": "B1: ~350–400 giờ, tính từ đầu",
            "x": 7932,
            "y": 1350,
            "size": 44,
            "at": "l3:hundred",
            "hl": [
              {
                "text": "tính từ đầu",
                "at": "l3:from the start"
              }
            ]
          },
          {
            "id": "j-tick",
            "t": "text",
            "text": "Bảng: thêm dấu ✓",
            "x": 7932,
            "y": 1440,
            "size": 52,
            "at": "l4:ticks",
            "color": "accent",
            "hl": [
              {
                "text": "thêm dấu ✓",
                "at": "l4:more ticks"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Biết thì thưa thốt”",
            "x": 7932,
            "y": 1540,
            "size": 54,
            "at": "l6:know",
            "color": "accent",
            "hl": [
              {
                "text": "Biết thì thưa thốt",
                "at": "l6:speak up"
              }
            ]
          },
          {
            "id": "j-src",
            "t": "text",
            "text": "Nguồn: Cambridge — Guided learning hours",
            "x": 7932,
            "y": 1635,
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
          "say": "Three months later. Friday, eight p.m. Same tests, same notebooks.",
          "sub": "Ba tháng sau. Tám giờ tối thứ Sáu. Vẫn bài test ấy, vẫn cuốn sổ ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Same level as before. Should I just give up?",
          "sub": "Vẫn bậc cũ. Hay là bỏ quách?",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No. Cambridge estimates about three hundred fifty to four hundred guided hours to B one, counted from the start.",
          "sub": "Đừng. Cambridge ước tính khoảng 350–400 giờ học có hướng dẫn tới B1, tính từ đầu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A few months may not lift the level. But look: more ticks in your table.",
          "sub": "Vài tháng có thể chưa đủ lên bậc. Nhưng nhìn kìa: bảng có thêm dấu tích.",
          "keys": [
            "thêm dấu tích"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "dung",
          "say": "Okay, three new ticks. Not bad for a salesman. I'll keep going.",
          "sub": "Ừ nhỉ, thêm ba dấu tích. Dân kinh doanh thế là được. Đi tiếp thôi.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "And this time I told a short story in English. Slowly, but all of it.",
          "sub": "Còn em, lần này kể được một chuyện ngắn bằng tiếng Anh. Chậm, nhưng trọn vẹn.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "If you know, speak up. Now Thảo says exactly what she knows, with a date beside it.",
          "sub": "“Biết thì thưa thốt.” Giờ Thảo nói đúng điều mình biết, kèm cả ngày tháng.",
          "keys": [
            "Biết thì thưa thốt"
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
      "ref": "p18"
    },
    {
      "id": "s16",
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
            "at": "l1:compass",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2:table",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:date",
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
            "x": 9472,
            "y": 450,
            "at": "l1:compass"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 2728,
            "y": 1730,
            "at": "l2:table"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6664,
            "y": 1630,
            "at": "l3:date"
          },
          {
            "id": "z-do",
            "t": "text",
            "text": "Làm ngay: test, bảng 5 dòng",
            "x": 7932,
            "y": 1710,
            "size": 44,
            "at": "l4:Do it",
            "color": "accent",
            "hl": [
              {
                "text": "Làm ngay",
                "at": "l4:Do it"
              }
            ]
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; quy định có thể thay đổi — khi cần áp dụng, kiểm lại văn bản đang có hiệu lực. Nhân vật là minh hoạ.",
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
          "say": "So: a free test is a quick estimate. A compass, not a certificate.",
          "sub": "Tóm lại: test miễn phí cho một ước lượng nhanh. La bàn, không phải tấm bằng.",
          "keys": [
            "La bàn, không phải tấm bằng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Add a five row skills table for what the quiz can't see.",
          "sub": "Thêm bảng năm dòng cho những kỹ năng bài trắc nghiệm không thấy.",
          "keys": [
            "bảng năm dòng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And keep one notebook, with the date, so a retest shows real progress.",
          "sub": "Và giữ một cuốn sổ có ghi ngày, để lần làm lại thấy tiến bộ thật."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Do it now: one test, your result, the five row table. Then the weekly plan lesson.",
          "sub": "Làm ngay: một bài test, ghi kết quả và bảng năm kỹ năng, rồi sang bài lập kế hoạch tuần."
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
        "q": "What can a B one result from the British Council test mean?",
        "options": [
          "You have mastered B one completely and should start C two materials",
          "You may be working towards B one rather than being fully secure at it",
          "You have failed the test and must restart from the very first level"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "compass",
        "why": "British Council nói kết quả là bậc đang hướng tới hoặc đang hoàn thành. B1 có thể là đang đi về phía B1."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What can a B one result from the British Council test mean?",
          "sub": "Kết quả B1 từ bài test British Council có thể nghĩa là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "You may be working towards B one rather than being fully secure at it.",
          "sub": "Có thể bạn đang đi về phía B1, chưa hẳn đã vững B1."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Working towards, or completing. Start there, step back if it's too hard.",
          "sub": "Đang hướng tới hoặc đang hoàn thành. Bắt đầu ở đó, quá khó thì lùi một bậc."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[25]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Ghi ngày hôm nay. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Write today's date in your notebook. Then try the forty questions below.",
          "sub": "Ghi ngày hôm nay vào sổ. Rồi thử bốn mươi câu hỏi bên dưới nhé.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi beginner-self-study-planners, bài 2) dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo BA THÁNG của Dũng và Thảo (thứ Sáu 20:00 Thảo ghi “B1” vào hồ sơ → ① Dũng làm hai bài test → ② cách B → ③ thứ Bảy: chỉ là ước lượng + “Khoan đã!” hồ sơ của Thảo → ④ Chủ nhật sáng: kỹ năng bài test bỏ qua → ⑤ Chủ nhật tối: bảng năm dòng → ⑥ thứ Hai trưa: chọn sách → ⑦ thứ Hai tối: sổ trước–sau → ba tháng sau, thứ Sáu 20:00 làm lại đúng bài cũ). HOOK-22: câu Thảo bị cắt “Em còn có hẳn một…” → nói trọn ở s02 (“…chứng chỉ! À… từ bài test trên mạng”). Nhân vật: Thảo (chị Phương), Dũng (anh Tuấn) — w145/_series/beginner-self-study-planners.md. Cảnh ngắt nhịp: BRK-08 (ba tháng), BRK-04 (Cách A / Cách B), BRK-07 (rehook nói và viết), BRK-03 (2 từ lạ / 100 từ). Tục ngữ: “Biết thì thưa thốt, không biết thì dựa cột mà nghe”. Câu đố questions[25].",
  "loop": {
    "open": "s00",
    "close": "s15"
  }
};
