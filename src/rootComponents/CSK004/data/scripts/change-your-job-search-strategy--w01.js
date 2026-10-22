// change-your-job-search-strategy--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "change-your-job-search-strategy--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "graduates-still-job-hunting",
    "slug": "change-your-job-search-strategy",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Nộp nhiều hồ sơ mà không ai gọi: sửa cách tìm việc thế nào?",
    "series": "Chưa có việc không phải dấu chấm hết — kế hoạch 90 ngày cho người mới tốt nghiệp"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "presenter": {
    "side": "left"
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
              "a-cv",
              "a-obj"
            ],
            "zoom": 1.5,
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-cv",
            "t": "illus",
            "name": "page-facing-up",
            "x": 80,
            "y": 120,
            "size": 200,
            "at": "l1"
          },
          {
            "id": "a-obj",
            "t": "text",
            "text": "Mục tiêu: “mong muốn làm việc",
            "x": 320,
            "y": 130,
            "size": 50,
            "at": "l1:goal",
            "color": "ink"
          },
          {
            "id": "a-obj2",
            "t": "text",
            "text": "trong môi trường chuyên nghiệp”",
            "x": 320,
            "y": 205,
            "size": 50,
            "at": "l1:professional",
            "hl": [
              {
                "text": "chuyên nghiệp",
                "at": "l1:professional"
              }
            ]
          },
          {
            "id": "a-x",
            "t": "text",
            "text": "× vài chục tin",
            "x": 320,
            "y": 300,
            "size": 56,
            "at": "l2:dozens",
            "color": "coral",
            "hl": [
              {
                "text": "vài chục",
                "at": "l2:dozens"
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
          "say": "One page. Career goal: to work in a professional environment.",
          "sub": "Một tờ giấy. Mục tiêu nghề nghiệp: “mong muốn làm việc trong môi trường chuyên nghiệp”.",
          "keys": [
            "môi trường chuyên nghiệp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Copied, unchanged, to dozens of job ads in two weeks.",
          "sub": "Gửi y nguyên tới vài chục tin tuyển dụng trong hai tuần.",
          "keys": [
            "vài chục tin"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Its owner is about to check his inbox.",
          "sub": "Chủ nhân của nó sắp mở hộp thư."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "lat-the",
          "offsetMs": 0
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
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "A",
            "ms": 600
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
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "laptop",
                "e-mail"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "at": "l1",
            "caption": "Cuối tuần 2 · hộp thư",
            "icon": "e-mail"
          },
          {
            "id": "a-r",
            "t": "text",
            "text": "Lập trình · kiểm thử · hỗ trợ",
            "x": 60,
            "y": 430,
            "size": 40,
            "at": "l2:tester",
            "color": "muted"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "1 email từ chối tự động",
            "x": 60,
            "y": 500,
            "size": 44,
            "at": "l3:automatic",
            "color": "coral"
          },
          {
            "id": "a-0",
            "t": "text",
            "text": "0 cuộc gọi",
            "x": 60,
            "y": 570,
            "size": 56,
            "at": "l3:calls",
            "color": "coral",
            "hl": [
              {
                "text": "0 cuộc gọi",
                "at": "l3:calls"
              }
            ]
          },
          {
            "id": "a-fly",
            "t": "text",
            "text": "= phát tờ rơi dưới mưa",
            "x": 60,
            "y": 660,
            "size": 46,
            "at": "l4:flyers",
            "hl": [
              {
                "text": "tờ rơi",
                "at": "l4:flyers"
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
          "say": "Meet Dũng again. IT graduate, four months, king of “ok, let's do it”.",
          "sub": "Gặp lại Dũng. Cử nhân công nghệ thông tin, ra trường bốn tháng, vua câu “Ok, làm luôn!”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Programmer, software tester, tech support: same CV for all.",
          "sub": "Lập trình viên, kiểm thử phần mềm, hỗ trợ kỹ thuật: cùng một CV cho tất cả."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Two weeks. One automatic rejection. Zero calls. Is my phone broken?",
          "sub": "Hai tuần. Một email từ chối tự động. Không cuộc gọi nào. Điện thoại mình hỏng à?",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Your phone is fine, Dũng. You were handing out flyers in the rain.",
          "sub": "Điện thoại không hỏng đâu Dũng. Cậu đang phát tờ rơi dưới mưa thôi.",
          "keys": [
            "phát tờ rơi dưới mưa"
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
      "ref": "p3,p4"
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
            "text": "Không ai gọi: sửa ở đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:fix",
            "hl": [
              {
                "text": "sửa ở đâu",
                "at": "l1:fix"
              }
            ]
          },
          {
            "id": "b-gen",
            "t": "text",
            "text": "CV chung chung → không nói với ai",
            "x": 2028,
            "y": 160,
            "size": 44,
            "at": "l2:everyone"
          },
          {
            "id": "b-fit",
            "t": "text",
            "text": "Người đọc tìm: mình hợp ở đâu",
            "x": 2028,
            "y": 235,
            "size": 44,
            "at": "l3:fit",
            "hl": [
              {
                "text": "hợp ở đâu",
                "at": "l3:fit"
              }
            ]
          },
          {
            "id": "b-c0",
            "t": "box",
            "x": 2028,
            "y": 350,
            "w": 44,
            "h": 44,
            "at": "l4:requirements",
            "stroke": 5
          },
          {
            "id": "b-k0",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 336,
            "size": 56,
            "at": "l4:requirements+600",
            "color": "accent"
          },
          {
            "id": "b-l0",
            "t": "text",
            "text": "Đọc hết phần yêu cầu?",
            "x": 2094,
            "y": 340,
            "size": 44,
            "at": "l4:requirements+200"
          },
          {
            "id": "b-c1",
            "t": "box",
            "x": 2028,
            "y": 430,
            "w": 44,
            "h": 44,
            "at": "l4:words",
            "stroke": 5
          },
          {
            "id": "b-k1",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 416,
            "size": 56,
            "at": "l4:words+600",
            "color": "accent"
          },
          {
            "id": "b-l1",
            "t": "text",
            "text": "CV dùng đúng chữ của tin?",
            "x": 2094,
            "y": 420,
            "size": 44,
            "at": "l4:words+200"
          },
          {
            "id": "b-c2",
            "t": "box",
            "x": 2028,
            "y": 510,
            "w": 44,
            "h": 44,
            "at": "l5:record",
            "stroke": 5
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 496,
            "size": 56,
            "at": "l5:record+600",
            "color": "accent"
          },
          {
            "id": "b-l2",
            "t": "text",
            "text": "Ghi lại nộp đâu, ngày nào?",
            "x": 2094,
            "y": 500,
            "size": 44,
            "at": "l5:record+200"
          },
          {
            "id": "b-m",
            "t": "text",
            "text": "Một CV cho mọi tin",
            "x": 2868,
            "y": 600,
            "size": 52,
            "at": "l6:every",
            "color": "muted"
          },
          {
            "id": "b-m2",
            "t": "text",
            "text": "= CV không dành cho tin nào",
            "x": 2868,
            "y": 680,
            "size": 50,
            "at": "l6:none",
            "color": "accent",
            "hl": [
              {
                "text": "không dành cho tin nào",
                "at": "l6:none"
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
          "say": "So, many applications and no calls. Where do you fix things?",
          "sub": "Vậy nộp nhiều mà không ai gọi thì sửa ở đâu?",
          "keys": [
            "sửa ở đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One CV for every ad speaks to everyone in general, so it says nothing to anyone.",
          "sub": "Một CV cho mọi tin nói chung chung với tất cả, nên chẳng nói đúng điều gì với ai."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Readers want to see, fast, where you fit their role.",
          "sub": "Người đọc hồ sơ muốn thấy ngay bạn hợp với vị trí của họ ở chỗ nào.",
          "keys": [
            "hợp với vị trí"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Before sending more, ask: did I read all the requirements? Does my CV use the ad's skill words?",
          "sub": "Trước khi nộp thêm, tự hỏi: đã đọc hết phần yêu cầu chưa? CV có dùng đúng chữ chỉ kỹ năng của tin không?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And did I record where and when I applied?",
          "sub": "Và mình có ghi lại đã nộp chỗ nào, ngày nào không?"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A CV for every job is a CV for none.",
          "sub": "Một CV cho mọi tin là CV không dành cho tin nào.",
          "keys": [
            "không dành cho tin nào"
          ]
        }
      ],
      "ref": "p1,p2,p4"
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
            "text": "① Tuần 3 · Ít mà chuẩn",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Week three",
            "hl": [
              {
                "text": "Ít mà chuẩn",
                "at": "l1:better"
              }
            ]
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
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "clipboard"
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
            "at": "l1:Week",
            "caption": "Tuần 3 · bảng theo dõi hồ sơ",
            "icon": "clipboard"
          },
          {
            "id": "c-23",
            "t": "text",
            "text": "Chọn 2–3 loại vị trí",
            "x": 3996,
            "y": 160,
            "size": 50,
            "at": "l1:two or three",
            "color": "accent",
            "hl": [
              {
                "text": "2–3",
                "at": "l1:two or three"
              }
            ]
          },
          {
            "id": "c-wk",
            "t": "text",
            "text": "mỗi tuần ít hơn, sửa đúng tin",
            "x": 3996,
            "y": 240,
            "size": 40,
            "at": "l1:each week"
          },
          {
            "id": "c-b0",
            "t": "box",
            "x": 3996,
            "y": 330,
            "w": 145,
            "h": 70,
            "at": "l3:table+0",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "c-b1",
            "t": "box",
            "x": 4151,
            "y": 330,
            "w": 145,
            "h": 70,
            "at": "l3:table+250",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "c-b2",
            "t": "box",
            "x": 4306,
            "y": 330,
            "w": 145,
            "h": 70,
            "at": "l3:table+500",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "c-b3",
            "t": "box",
            "x": 4461,
            "y": 330,
            "w": 145,
            "h": 70,
            "at": "l3:table+750",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "c-b4",
            "t": "box",
            "x": 4616,
            "y": 330,
            "w": 145,
            "h": 70,
            "at": "l3:table+1000",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "c-bt0",
            "t": "text",
            "text": "Công ty",
            "x": 4004,
            "y": 345,
            "size": 28,
            "at": "l3:table+150"
          },
          {
            "id": "c-bt1",
            "t": "text",
            "text": "Vị trí",
            "x": 4159,
            "y": 345,
            "size": 28,
            "at": "l3:table+400"
          },
          {
            "id": "c-bt2",
            "t": "text",
            "text": "Ngày nộp",
            "x": 4314,
            "y": 345,
            "size": 28,
            "at": "l3:table+650"
          },
          {
            "id": "c-bt3",
            "t": "text",
            "text": "Người liên hệ",
            "x": 4469,
            "y": 345,
            "size": 28,
            "at": "l3:table+900"
          },
          {
            "id": "c-bt4",
            "t": "text",
            "text": "Bước tiếp",
            "x": 4624,
            "y": 345,
            "size": 28,
            "at": "l3:table+1150"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Week three. Apply less, but better: pick two or three kinds of roles, and send fewer each week.",
          "sub": "Tuần ba. Nộp ít mà chuẩn: chọn hai, ba loại vị trí thật sự nhắm tới, mỗi tuần nộp ít hơn.",
          "keys": [
            "Nộp ít mà chuẩn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Fewer? Ok. Software tester first. Each CV fixed for its own ad.",
          "sub": "Ít hơn à? Ok. Ưu tiên kiểm thử phần mềm. Mỗi CV sửa cho đúng tin của nó.",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And log each one in a table: company, role, date, contact person, next step.",
          "sub": "Và ghi mỗi lần nộp vào một bảng: công ty, vị trí, ngày nộp, người liên hệ, bước tiếp theo.",
          "keys": [
            "bước tiếp theo"
          ]
        }
      ],
      "ref": "p5"
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
            "id": "c-ch",
            "t": "text",
            "text": "Kênh chính thức:",
            "x": 3996,
            "y": 460,
            "size": 46,
            "at": "l1:official",
            "color": "accent",
            "hl": [
              {
                "text": "chính thức",
                "at": "l1:official"
              }
            ]
          },
          {
            "id": "c-c1",
            "t": "text",
            "text": "trang tuyển dụng của công ty",
            "x": 3996,
            "y": 530,
            "size": 38,
            "at": "l1:own"
          },
          {
            "id": "c-c2",
            "t": "text",
            "text": "trung tâm dịch vụ việc làm",
            "x": 3996,
            "y": 590,
            "size": 38,
            "at": "l1:employment"
          },
          {
            "id": "c-c3",
            "t": "text",
            "text": "phiên giao dịch việc làm",
            "x": 3996,
            "y": 650,
            "size": 38,
            "at": "l1:fairs"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Prefer official channels: the company's own careers page, the public employment centre, and job fairs.",
          "sub": "Ưu tiên kênh chính thức: trang tuyển dụng của chính doanh nghiệp, trung tâm dịch vụ việc làm, phiên giao dịch việc làm.",
          "keys": [
            "kênh chính thức"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s05",
      "module": "BRK-06",
      "data": {
        "title": "Dấu hiệu lừa đảo thường gặp",
        "items": [
          {
            "illus": "money-with-wings",
            "text": "Đóng phí trước"
          },
          {
            "illus": "money-bag",
            "text": "Việc nhẹ lương cao"
          },
          {
            "illus": "alarm-clock",
            "text": "Thúc nộp tiền gấp"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Pay a fee first? Easy work, huge pay? Sign and pay right now?",
          "sub": "Đóng phí trước? Việc nhẹ lương cao? Thúc ký, nộp tiền gấp?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Common scam signs, says Hà Tĩnh's provincial portal.",
          "sub": "Dấu hiệu lừa đảo thường gặp, theo Cổng thông tin tỉnh Hà Tĩnh.",
          "keys": [
            "Dấu hiệu lừa đảo"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p6"
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
            "text": "② Tuần 4 · CV theo từng tin",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Week four",
            "hl": [
              {
                "text": "theo từng tin",
                "at": "l1:each ad"
              }
            ]
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
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
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:cafe",
            "caption": "Tuần 4 · quán cà phê đầu ngõ",
            "icon": "pencil"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Đặt tin cạnh CV",
            "x": 5964,
            "y": 165,
            "size": 46,
            "at": "l3:next to"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Gạch chân kỹ năng nhắc nhiều",
            "x": 5964,
            "y": 240,
            "size": 46,
            "at": "l3:underline",
            "hl": [
              {
                "text": "Gạch chân",
                "at": "l3:underline"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Tìm bằng chứng cho từng ý",
            "x": 5964,
            "y": 315,
            "size": 46,
            "at": "l3:evidence",
            "color": "accent"
          },
          {
            "id": "d-ev",
            "t": "text",
            "text": "môn học · đồ án · thực tập · CLB",
            "x": 5964,
            "y": 395,
            "size": 34,
            "at": "l3:projects",
            "color": "muted"
          },
          {
            "id": "d-top",
            "t": "text",
            "text": "+ mục “Kỹ năng liên quan” gần đầu",
            "x": 5964,
            "y": 470,
            "size": 40,
            "at": "l5:Relevant",
            "hl": [
              {
                "text": "Kỹ năng liên quan",
                "at": "l5:Relevant"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Northeastern University; NACE (qua Michigan State University)",
            "x": 6804,
            "y": 720,
            "size": 26,
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
          "say": "Week four, the corner cafe. Time to fit each CV to each ad.",
          "sub": "Tuần bốn, quán cà phê đầu ngõ. Đến lúc sửa từng CV theo từng tin."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Ok, let's do it. But what do I even change?",
          "sub": "Ok, làm luôn. Mà sửa cái gì bây giờ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Put the ad next to your CV. Underline repeated skills, then find evidence in courses, projects, internships, part-time jobs, clubs.",
          "sub": "Đặt tin cạnh CV. Gạch chân kỹ năng nhắc nhiều, rồi tìm bằng chứng trong môn học, đồ án, thực tập, việc làm thêm, câu lạc bộ.",
          "keys": [
            "tìm bằng chứng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thảo joins with her laptop. Same table, same mission.",
          "sub": "Thảo ghé, ôm laptop. Chung bàn, chung nhiệm vụ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Northeastern suggests a Relevant Skills section near the top, so readers see your strengths at once.",
          "sub": "Đại học Northeastern gợi ý thêm mục “Kỹ năng liên quan” gần đầu CV, để người đọc thấy ngay điểm mạnh.",
          "keys": [
            "Kỹ năng liên quan"
          ]
        }
      ],
      "ref": "p7"
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
          }
        ],
        "items": [
          {
            "id": "d-8",
            "t": "text",
            "text": "NACE: 8 năng lực",
            "x": 5964,
            "y": 560,
            "size": 50,
            "at": "l1:eight",
            "color": "accent",
            "hl": [
              {
                "text": "8 năng lực",
                "at": "l1:eight"
              }
            ]
          },
          {
            "id": "d-8s",
            "t": "text",
            "text": "phản biện · giao tiếp · nhóm",
            "x": 5964,
            "y": 628,
            "size": 38,
            "at": "l1:critical"
          },
          {
            "id": "d-show",
            "t": "text",
            "text": "Mỗi dòng = một việc đã làm",
            "x": 5964,
            "y": 695,
            "size": 42,
            "at": "l2:line",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The US association NACE lists eight competencies employers want in new graduates: critical thinking, communication, teamwork, technology and more.",
          "sub": "Hiệp hội NACE của Hoa Kỳ liệt kê tám năng lực nhà tuyển dụng tìm ở sinh viên mới ra trường: tư duy phản biện, giao tiếp, làm việc nhóm, công nghệ…",
          "keys": [
            "tám năng lực"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each CV line should show one competency through something you actually did. Not just its name.",
          "sub": "Mỗi dòng CV nên cho thấy một năng lực bằng việc cụ thể đã làm, không chỉ ghi tên năng lực.",
          "keys": [
            "việc cụ thể đã làm"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s08",
      "module": "BRK-04",
      "data": {
        "title": "CV của Thảo · kế toán công nợ",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Kỹ năng: chăm chỉ, cẩn thận, làm việc nhóm tốt",
        "right": "Đối chiếu công nợ trên Excel trong đồ án tốt nghiệp",
        "wrongIllus": "sleeping-face",
        "rightIllus": "bar-chart"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before: hardworking, careful, good team player.",
          "sub": "Trước: chăm chỉ, cẩn thận, làm việc nhóm tốt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: reconciled debts in Excel for her thesis.",
          "sub": "Sau: đối chiếu công nợ trên Excel trong đồ án tốt nghiệp.",
          "keys": [
            "đối chiếu công nợ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
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
          },
          {
            "at": 150,
            "fit": "E",
            "ms": 900
          },
          {
            "at": "l1",
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
            "text": "③ Kế toán công nợ · bản sau",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:accounts"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "receipt"
              ],
              "camera": [
                {
                  "at": "l1",
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
            "at": "l1",
            "caption": "Tuần 4 · Thảo đọc to bản sửa",
            "icon": "receipt"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Đối chiếu công nợ trên Excel",
            "x": 7932,
            "y": 165,
            "size": 44,
            "at": "l1:Excel",
            "hl": [
              {
                "text": "Excel",
                "at": "l1:Excel"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Kiểm tra hoá đơn khi thực tập",
            "x": 7932,
            "y": 240,
            "size": 40,
            "at": "l2:invoices"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Thủ quỹ CLB: báo cáo thu chi",
            "x": 7932,
            "y": 310,
            "size": 40,
            "at": "l2:treasurer"
          },
          {
            "id": "e-any",
            "t": "text",
            "text": "Bản trước: ai cũng viết được",
            "x": 7932,
            "y": 410,
            "size": 42,
            "at": "l3:anyone",
            "color": "muted"
          },
          {
            "id": "e-q",
            "t": "text",
            "text": "Bản sau: đúng chữ, có việc",
            "x": 7932,
            "y": 480,
            "size": 42,
            "at": "l3:follow"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Đừng kể mình tốt thế nào",
            "x": 7932,
            "y": 580,
            "size": 48,
            "at": "l4:good",
            "color": "muted"
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "Kể mình đã làm gì",
            "x": 7932,
            "y": 660,
            "size": 58,
            "at": "l4:did",
            "color": "accent",
            "hl": [
              {
                "text": "đã làm gì",
                "at": "l4:did"
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
          "say": "For accounts receivable: reconciled debts in Excel for my thesis.",
          "sub": "Kế toán công nợ: đối chiếu công nợ trên Excel trong đồ án tốt nghiệp.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Entered and checked invoices during my internship. Club treasurer, monthly reports.",
          "sub": "Nhập và kiểm tra hoá đơn trong kỳ thực tập. Thủ quỹ câu lạc bộ, báo cáo thu chi hằng tháng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Anyone can write the first. The second uses the ad's own words, and gives interviewers something to follow up on.",
          "sub": "Bản trước ai cũng viết được. Bản sau dùng đúng chữ trong tin, có việc cụ thể để người phỏng vấn hỏi tiếp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Don't tell them how good you are. Tell them what you did.",
          "sub": "Đừng kể mình tốt thế nào, hãy kể mình đã làm gì.",
          "keys": [
            "kể mình đã làm gì"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s10",
      "module": "BRK-07",
      "data": {
        "question": "Không quen ai “có chức có quyền” thì tìm qua người quen kiểu gì?",
        "illus": "thinking-face"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "But wait.",
          "sub": "Nhưng khoan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I don't know anyone important. So networking is out, right?",
          "sub": "Mình đâu quen ai “có chức có quyền”. Vậy tìm qua người quen là hết cửa nhỉ?",
          "face": "worried"
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
      "id": "s11",
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
            "text": "④ Tuần 5 · Bắt đầu từ người gần",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Week five",
            "hl": [
              {
                "text": "người gần",
                "at": "l4:closest"
              }
            ]
          },
          {
            "id": "f-bd",
            "t": "text",
            "text": "“Đi cửa sau”",
            "x": 60,
            "y": 1255,
            "size": 54,
            "at": "l1:back door",
            "color": "muted"
          },
          {
            "id": "f-bdx",
            "t": "strike",
            "over": "f-bd",
            "at": "l2:information"
          },
          {
            "id": "f-ok",
            "t": "text",
            "text": "hỏi tin · xin khuyên · giới thiệu",
            "x": 60,
            "y": 1345,
            "size": 36,
            "at": "l2:information",
            "color": "accent"
          },
          {
            "id": "f-self",
            "t": "text",
            "text": "vẫn tự ứng tuyển, tự qua vòng",
            "x": 60,
            "y": 1410,
            "size": 40,
            "at": "l3:yourself",
            "hl": [
              {
                "text": "tự ứng tuyển",
                "at": "l3:apply yourself"
              }
            ]
          },
          {
            "id": "f-house",
            "t": "illus",
            "name": "houses",
            "x": 1000,
            "y": 1260,
            "size": 150,
            "at": "l5:neighbour"
          },
          {
            "id": "f-ca",
            "t": "text",
            "text": "“Bán anh em xa,",
            "x": 1180,
            "y": 1270,
            "size": 52,
            "at": "l5:far",
            "color": "accent"
          },
          {
            "id": "f-ca2",
            "t": "text",
            "text": "mua láng giềng gần”",
            "x": 1180,
            "y": 1345,
            "size": 52,
            "at": "l5:neighbour",
            "color": "accent",
            "hl": [
              {
                "text": "láng giềng gần",
                "at": "l5:neighbour"
              }
            ]
          },
          {
            "id": "f-near",
            "t": "text",
            "text": "bạn lớp · thầy cô · nơi thực tập",
            "x": 60,
            "y": 1530,
            "size": 38,
            "at": "l4:classmates"
          },
          {
            "id": "f-job",
            "t": "text",
            "text": "Họ không cần tuyển bạn",
            "x": 60,
            "y": 1610,
            "size": 48,
            "at": "l6:hire"
          },
          {
            "id": "f-job2",
            "t": "text",
            "text": "chỉ cần kể một ngày thật",
            "x": 60,
            "y": 1685,
            "size": 40,
            "at": "l6:real",
            "color": "accent"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Bắt đầu từ người gần",
            "x": 60,
            "y": 1770,
            "size": 50,
            "at": "l7:near",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Week five. Is finding work through people you know a back door?",
          "sub": "Tuần năm. Tìm việc qua người quen có phải là “đi cửa sau”?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. It means asking for information, advice, and an introduction to the right person.",
          "sub": "Không. Đó là hỏi thông tin, xin lời khuyên và được giới thiệu tới đúng người.",
          "keys": [
            "được giới thiệu tới đúng người"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "You still apply yourself, and pass the selection yourself.",
          "sub": "Bạn vẫn tự ứng tuyển, và tự vượt qua vòng tuyển chọn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And MIT's list starts with the closest people: classmates at work, tutors, internship seniors, club friends.",
          "sub": "Danh sách MIT bắt đầu từ người gần nhất: bạn cùng lớp đã đi làm, thầy cô hướng dẫn, anh chị nơi thực tập, người trong câu lạc bộ.",
          "keys": [
            "người gần nhất"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: sell your far-off relatives, buy your near neighbour.",
          "sub": "Ông bà dạy: “Bán anh em xa, mua láng giềng gần.”",
          "keys": [
            "láng giềng gần"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "They don't need to hire you. Just tell you about a real working day, or introduce someone else.",
          "sub": "Họ không cần tuyển bạn. Chỉ cần kể một ngày làm việc thật, hoặc giới thiệu bạn với người khác."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "No need to know anyone powerful. Start near.",
          "sub": "Không cần quen người quyền cao, chỉ cần bắt đầu từ người gần.",
          "keys": [
            "bắt đầu từ người gần"
          ]
        }
      ],
      "ref": "p11,p14,p15"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Năm nhóm người quen",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:five",
            "hl": [
              {
                "text": "Năm nhóm",
                "at": "l1:five groups"
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
                  "pose": "explain",
                  "face": "surprised"
                }
              ],
              "props": [
                "notebook",
                "pencil"
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
            "at": "l1:Dũng",
            "caption": "Tuần 5 · tối · cuốn sổ",
            "icon": "notebook"
          },
          {
            "id": "g-i0",
            "t": "illus",
            "name": "school",
            "x": 2028,
            "y": 1250,
            "size": 64,
            "at": "l2:school"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Trường học",
            "x": 2113,
            "y": 1260,
            "size": 40,
            "at": "l2:school+200"
          },
          {
            "id": "g-i1",
            "t": "illus",
            "name": "office-building",
            "x": 2028,
            "y": 1328,
            "size": 64,
            "at": "l2:internship"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Thực tập, làm thêm",
            "x": 2113,
            "y": 1338,
            "size": 40,
            "at": "l2:internship+200"
          },
          {
            "id": "g-i2",
            "t": "illus",
            "name": "house",
            "x": 2028,
            "y": 1406,
            "size": 64,
            "at": "l2:family"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Gia đình, bạn bè",
            "x": 2113,
            "y": 1416,
            "size": 40,
            "at": "l2:family+200"
          },
          {
            "id": "g-i3",
            "t": "illus",
            "name": "guitar",
            "x": 2028,
            "y": 1484,
            "size": 64,
            "at": "l2:hobbies"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Hoạt động, sở thích",
            "x": 2113,
            "y": 1494,
            "size": 40,
            "at": "l2:hobbies+200"
          },
          {
            "id": "g-i4",
            "t": "illus",
            "name": "busts-in-silhouette",
            "x": 2028,
            "y": 1562,
            "size": 64,
            "at": "l2:other"
          },
          {
            "id": "g-l4",
            "t": "text",
            "text": "Nhóm khác",
            "x": 2113,
            "y": 1572,
            "size": 40,
            "at": "l2:other+200"
          },
          {
            "id": "g-out",
            "t": "text",
            "text": "→ hội thảo · hội chợ · nhóm nghề",
            "x": 2028,
            "y": 1650,
            "size": 32,
            "at": "l5:fairs",
            "color": "muted"
          },
          {
            "id": "g-30",
            "t": "text",
            "text": "Giới thiệu 30 giây",
            "x": 2028,
            "y": 1720,
            "size": 44,
            "at": "l6:thirty",
            "hl": [
              {
                "text": "30 giây",
                "at": "l6:thirty"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: MIT CAPD, How to network",
            "x": 2868,
            "y": 1810,
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
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "That night, Dũng lists people he already knows, in MIT's five groups.",
          "sub": "Tối đó, Dũng liệt kê người đã quen theo năm nhóm của MIT.",
          "keys": [
            "năm nhóm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "School, work or internship, family and friends, activities and hobbies, and other.",
          "sub": "Trường học, nơi làm việc hoặc thực tập, gia đình bạn bè, hoạt động và sở thích, và nhóm khác."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Wait. My old internship lead tests software. And my cousin's friend too!",
          "sub": "Ủa. Anh hướng dẫn thực tập cũ làm kiểm thử phần mềm. Bạn của anh họ mình cũng vậy!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "See? The network was there all along. Like glasses on your own head.",
          "sub": "Thấy chưa? Mạng lưới vẫn ở đó từ lâu. Như cái kính đang đội trên đầu mà đi tìm."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then widen it through talks, job fairs, professional groups, online groups, and introductions. It takes time.",
          "sub": "Rồi mở rộng qua hội thảo, hội chợ việc làm, hội nghề nghiệp, nhóm trực tuyến, nhờ giới thiệu tiếp. Việc này cần thời gian."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Before messaging, prepare a thirty-second intro: who you are, what you studied, what field you're exploring.",
          "sub": "Trước khi nhắn, chuẩn bị lời giới thiệu khoảng 30 giây: bạn là ai, học gì, đang tìm hiểu nghề gì.",
          "keys": [
            "30 giây"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "And log who you talked to, when, with a reminder to follow up.",
          "sub": "Và ghi lại đã nói chuyện với ai, ngày nào, đặt nhắc hẹn để hỏi thăm lại."
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s13",
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
            "at": "l4",
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
            "text": "⑥ Tuần 6 · 20 phút với chị Lan",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l3:Lan",
            "hl": [
              {
                "text": "20 phút",
                "at": "l3:twenty"
              }
            ]
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "hot-beverage",
                "notebook"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3:Lan",
            "caption": "Sáng thứ Bảy · 20 phút đúng hẹn",
            "icon": "hot-beverage"
          },
          {
            "id": "h-def",
            "t": "text",
            "text": "Phỏng vấn thông tin: 20–30 phút",
            "x": 3996,
            "y": 1255,
            "size": 44,
            "at": "l1:informational",
            "color": "accent",
            "hl": [
              {
                "text": "20–30 phút",
                "at": "l1:thirty"
              }
            ]
          },
          {
            "id": "h-no",
            "t": "text",
            "text": "Không phải phỏng vấn xin việc",
            "x": 3996,
            "y": 1330,
            "size": 40,
            "at": "l1:not"
          },
          {
            "id": "h-q",
            "t": "text",
            "text": "4 câu hỏi:",
            "x": 3996,
            "y": 1420,
            "size": 46,
            "at": "l4:day"
          },
          {
            "id": "h-q1",
            "t": "text",
            "text": "Một ngày của chị?",
            "x": 3996,
            "y": 1490,
            "size": 38,
            "at": "l4:day"
          },
          {
            "id": "h-q2",
            "t": "text",
            "text": "Kỹ năng cần nhất năm đầu?",
            "x": 3996,
            "y": 1545,
            "size": 38,
            "at": "l4:skill"
          },
          {
            "id": "h-q3",
            "t": "text",
            "text": "Người mới hay thiếu gì?",
            "x": 3996,
            "y": 1600,
            "size": 38,
            "at": "l5:lack"
          },
          {
            "id": "h-q4",
            "t": "text",
            "text": "Em nên gặp thêm ai?",
            "x": 3996,
            "y": 1655,
            "size": 38,
            "at": "l5:else",
            "color": "accent"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: UC Berkeley Career Engagement, Informational interviews",
            "x": 3996,
            "y": 1810,
            "size": 26,
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
          "say": "Week six. Berkeley calls it an informational interview: a relaxed twenty to thirty minutes to learn about a field. Not a job interview.",
          "sub": "Tuần sáu. Berkeley gọi là phỏng vấn thông tin: 20 đến 30 phút thân mật để tìm hiểu nghề, không phải phỏng vấn xin việc.",
          "keys": [
            "phỏng vấn thông tin"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "When asking, say where you got their name, and that you want information, not a job.",
          "sub": "Khi nhắn, nói bạn biết tên họ từ đâu, và nói rõ bạn xin thông tin, không xin việc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo's tutor introduced her to Lan, an auditor and older student from her faculty. Twenty minutes, Saturday.",
          "sub": "Cô hướng dẫn giới thiệu Thảo với chị Lan, chị khoá trên làm kiểm toán. Hai mươi phút, sáng thứ Bảy.",
          "keys": [
            "chị Lan"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "What's a normal day like for you? Which skill matters most in year one?",
          "sub": "Một ngày làm việc của chị thế nào ạ? Năm đầu cần kỹ năng nào nhất?",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "What do newcomers usually lack? And who else should I talk to?",
          "sub": "Người mới thường thiếu gì? Và chị nghĩ em nên nói chuyện thêm với ai?"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "lan",
          "say": "Busy season is long, so accuracy with Excel matters. Talk to my colleague Quân, too.",
          "sub": "Mùa cao điểm dài lắm, nên Excel phải chính xác. Em hỏi thêm anh Quân bên chị nhé.",
          "face": "happy"
        }
      ],
      "ref": "p16,p17,p18"
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
          }
        ],
        "items": [
          {
            "id": "h-r1",
            "t": "text",
            "text": "Không rút CV ra ngay",
            "x": 3996,
            "y": 1715,
            "size": 40,
            "at": "l1:CV",
            "color": "coral"
          },
          {
            "id": "h-r2",
            "t": "text",
            "text": "Giữ đúng giờ · để họ nói",
            "x": 3996,
            "y": 1765,
            "size": 36,
            "at": "l1:talk"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Berkeley's rules: don't pull out your CV, don't run over time, let them talk more than you.",
          "sub": "Luật của Berkeley: không rút CV ra ngay, không kéo quá giờ, để người kia nói nhiều hơn mình.",
          "keys": [
            "không rút CV ra ngay"
          ]
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s15",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Sắp hết giờ hẹn",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "lan",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Rút CV ra giữa buổi hỏi nghề",
          "why": "Buổi hẹn xin để hỏi thông tin; đưa CV giữa chừng dễ khiến người kia thấy mình bị “gài”.",
          "rule": "Giữ đúng lời hẹn trước, cơ hội vẫn còn sau"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "By the way, our firm will hire interns soon.",
          "sub": "À, công ty chị sắp tuyển thực tập sinh đấy.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Really? Here's my CV, right now!",
          "sub": "Thật ạ? Em gửi chị CV luôn đây ạ!",
          "face": "surprised",
          "pose": "give",
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
          "say": "She asked for information. A CV now feels like a trap.",
          "sub": "Hẹn để hỏi thông tin. Rút CV lúc này, chị Lan dễ thấy bị “gài”.",
          "keys": [
            "bị “gài”"
          ]
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
          "who": "thao",
          "say": "Thank you! How do I apply officially? May I send my CV in my thank-you note tonight?",
          "sub": "Em cảm ơn chị! Em ứng tuyển chính thức qua đâu ạ? Tối nay em xin phép gửi CV kèm lời cảm ơn nhé?",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Promise kept, chance still open.",
          "sub": "Giữ được lời hẹn, mà cơ hội vẫn còn.",
          "phase": "redo",
          "keys": [
            "cơ hội vẫn còn"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p22,p23"
    },
    {
      "id": "s16",
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
            "at": "l2",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Tối đó · Cảm ơn",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:thank",
            "hl": [
              {
                "text": "Cảm ơn",
                "at": "l1:thank"
              }
            ]
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "label": "Tin cảm ơn tối đó",
              "actor": {
                "id": "thao",
                "side": "left"
              },
              "contact": {
                "name": "Chị Lan (kiểm toán)",
                "illus": "woman-office-worker"
              },
              "messages": [
                {
                  "from": "me",
                  "text": "Em cảm ơn chị đã dành 20 phút. Em nhớ nhất chuyện mùa cao điểm và Excel. Em xin phép gửi CV qua kênh tuyển thực tập của công ty ạ.",
                  "at": "l1"
                },
                {
                  "from": "them",
                  "text": "Ừ em gửi đi. Chị nhắn anh Quân rồi nhé!",
                  "at": "l3"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Bảy · 21:00",
            "icon": "mobile-phone"
          },
          {
            "id": "i-12",
            "t": "text",
            "text": "Cảm ơn trong 1–2 ngày",
            "x": 5964,
            "y": 1255,
            "size": 46,
            "at": "l2:two days",
            "hl": [
              {
                "text": "1–2 ngày",
                "at": "l2:two days"
              }
            ]
          },
          {
            "id": "i-one",
            "t": "text",
            "text": "+ một điều mình học được",
            "x": 5964,
            "y": 1330,
            "size": 40,
            "at": "l2:learned"
          },
          {
            "id": "i-next",
            "t": "text",
            "text": "Xin tên người tiếp theo",
            "x": 5964,
            "y": 1420,
            "size": 46,
            "at": "l4:name",
            "color": "accent",
            "hl": [
              {
                "text": "người tiếp theo",
                "at": "l4:name"
              }
            ]
          },
          {
            "id": "i-1to2",
            "t": "text",
            "text": "1 người → thêm người mới",
            "x": 5964,
            "y": 1495,
            "size": 40,
            "at": "l4:one"
          },
          {
            "id": "i-keep",
            "t": "text",
            "text": "Báo lại khi làm theo lời khuyên",
            "x": 5964,
            "y": 1580,
            "size": 40,
            "at": "l5:advice"
          },
          {
            "id": "i-help",
            "t": "text",
            "text": "Đề nghị giúp lại khi có dịp",
            "x": 5964,
            "y": 1645,
            "size": 40,
            "at": "l5:help",
            "color": "accent"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Cảm ơn để còn gặp lại",
            "x": 5964,
            "y": 1740,
            "size": 48,
            "at": "l6:meet again",
            "color": "accent",
            "hl": [
              {
                "text": "còn gặp lại",
                "at": "l6:meet again"
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
          "say": "That evening, Thảo writes the thank-you.",
          "sub": "Tối đó, Thảo viết tin cảm ơn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Berkeley: thank them within one to two days, and mention one thing you learned.",
          "sub": "Berkeley khuyên: gửi lời cảm ơn trong 1–2 ngày, kể lại một điều mình học được.",
          "keys": [
            "trong 1–2 ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Go ahead and send it. I've messaged Quân for you!",
          "sub": "Ừ em gửi đi. Chị nhắn anh Quân rồi nhé!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "MIT: end each chat by asking for another name. One person leads to new people.",
          "sub": "MIT gợi ý: cuối mỗi cuộc nói chuyện, xin thêm tên người nên gặp. Từ một người, có thêm người mới.",
          "keys": [
            "xin thêm tên người nên gặp"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Keep in touch gently: tell them when you use their advice, and offer help back when you can.",
          "sub": "Giữ liên lạc nhẹ nhàng: báo cho họ khi làm theo lời khuyên, và đề nghị giúp lại khi có dịp."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Ask to understand the job. Thank them, so you'll meet again.",
          "sub": "Hỏi để hiểu nghề, cảm ơn để còn gặp lại.",
          "keys": [
            "cảm ơn để còn gặp lại"
          ]
        }
      ],
      "ref": "p18,p19,p20,p21"
    },
    {
      "id": "s17",
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
            "at": "l3",
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
            "text": "Cuối tuần 6 · cùng tờ giấy ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:six"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "at": "l1:page",
            "caption": "Cuối tuần 6 · bàn của Dũng",
            "icon": "page-facing-up"
          },
          {
            "id": "j-cv",
            "t": "illus",
            "name": "page-facing-up",
            "x": 7932,
            "y": 1250,
            "size": 130,
            "at": "l1:page"
          },
          {
            "id": "j-old",
            "t": "text",
            "text": "“môi trường chuyên nghiệp”",
            "x": 8082,
            "y": 1265,
            "size": 44,
            "at": "l2:professional",
            "color": "muted"
          },
          {
            "id": "j-oldx",
            "t": "strike",
            "over": "j-old",
            "at": "l2:gone"
          },
          {
            "id": "j-new",
            "t": "text",
            "text": "Kỹ năng liên quan: kiểm thử",
            "x": 8082,
            "y": 1350,
            "size": 46,
            "at": "l2:Relevant",
            "color": "accent",
            "hl": [
              {
                "text": "Kỹ năng liên quan",
                "at": "l2:Relevant"
              }
            ]
          },
          {
            "id": "j-row",
            "t": "text",
            "text": "Ít hồ sơ · có hẹn hỏi nghề",
            "x": 7932,
            "y": 1470,
            "size": 44,
            "at": "l3:Fewer"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Láng giềng gần: anh hướng dẫn cũ",
            "x": 7932,
            "y": 1560,
            "size": 42,
            "at": "l4:neighbour",
            "color": "accent",
            "hl": [
              {
                "text": "Láng giềng gần",
                "at": "l4:neighbour"
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
          "say": "End of week six. Same page, same desk.",
          "sub": "Cuối tuần sáu. Vẫn tờ giấy ấy, vẫn cái bàn ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The professional environment line is gone. In its place: Relevant Skills, for software testing.",
          "sub": "Dòng “môi trường chuyên nghiệp” đã biến mất. Thay vào đó: “Kỹ năng liên quan” cho vị trí kiểm thử.",
          "keys": [
            "Kỹ năng liên quan"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Fewer applications this week, each one fitted. And chats booked with real testers.",
          "sub": "Tuần này nộp ít hơn, hồ sơ nào cũng sửa đúng tin. Và có hẹn hỏi nghề với người làm kiểm thử thật.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sell the far relatives, buy the near neighbour. His near neighbour was his old internship lead.",
          "sub": "“Bán anh em xa, mua láng giềng gần.” Láng giềng gần của Dũng hoá ra là anh hướng dẫn thực tập cũ.",
          "keys": [
            "anh hướng dẫn thực tập cũ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "lat-the",
          "offsetMs": 400
        }
      ],
      "ref": "outro"
    },
    {
      "id": "s18",
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
            "ms": 1200
          },
          {
            "at": "l1",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "I",
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
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4636,
            "y": 170,
            "at": "l1+900"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8652,
            "y": 650,
            "at": "l2+900"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 820,
            "y": 1610,
            "at": "l3+900"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 6664,
            "y": 1420,
            "at": "l4+900"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo; gặp tin đòi phí, thúc nộp tiền: dừng lại, hỏi trung tâm dịch vụ việc làm.",
            "x": 7932,
            "y": 1805,
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
          "say": "So: apply less, but better, and keep a table.",
          "sub": "Tóm lại: nộp ít mà chuẩn, và có bảng theo dõi.",
          "keys": [
            "nộp ít mà chuẩn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tell them what you did, in the ad's own words.",
          "sub": "Kể mình đã làm gì, bằng đúng chữ của tin.",
          "keys": [
            "đã làm gì"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Start with the people nearest you.",
          "sub": "Bắt đầu từ người gần nhất.",
          "keys": [
            "người gần nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ask for information, keep the promise, say thank you.",
          "sub": "Xin thông tin, giữ lời hẹn, nhớ cảm ơn.",
          "keys": [
            "giữ lời hẹn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Better results rarely come from applying more. They come from applying right, and talking to real people.",
          "sub": "Tìm việc hiệu quả hơn ít khi đến từ nộp nhiều hơn, mà từ nộp đúng hơn và nói chuyện với người thật.",
          "keys": [
            "nộp đúng hơn"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s19",
      "module": "QUIZ-01",
      "data": {
        "q": "Which takeaway follows the CV before and after example?",
        "options": [
          "Keep your CV vague, so it can fit every kind of employer",
          "Do not tell them how good you are, tell them what you did",
          "Use as many strong adjectives as you can to impress the reader"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "writing-hand",
        "why": "Việc cụ thể đã làm, viết bằng chữ của tin tuyển dụng, thuyết phục hơn mọi tính từ tự khen."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which takeaway follows the CV before and after example?",
          "sub": "Câu rút ra nào đi sau ví dụ CV trước – sau?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Facts beat adjectives.",
          "sub": "Việc đã làm thắng tính từ tự khen."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Show what you did.",
          "sub": "Hãy kể mình đã làm gì."
        }
      ],
      "ref": "questions[19]"
    },
    {
      "id": "s20",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi viết danh sách mười người quen"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, list ten people you know in MIT's five groups. Pick one to ask for twenty minutes.",
          "sub": "Hôm nay, viết danh sách mười người quen theo năm nhóm của MIT, chọn một người để xin 20 phút."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi graduates-still-job-hunting, bài 2) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): cận tờ CV của Dũng với dòng mục tiêu “môi trường chuyên nghiệp” gửi vài chục tin, máy kéo ra thấy Dũng và hộp thư (📌 p3); tờ CV trở lại ở kết với mục “Kỹ năng liên quan”. Dòng thời gian: SÁU TUẦN — cuối tuần 2 hộp thư im → tuần 3 nộp ít mà chuẩn, bảng theo dõi, kênh chính thức, dấu hiệu lừa → tuần 4 chỉnh CV ở quán cà phê (Thảo ✍️ p9) → tuần 5 người quen ≠ cửa sau, năm nhóm MIT, 30 giây → tuần 6 Thảo phỏng vấn thông tin 20 phút với chị Lan (🧪 p18; “chị làm kiểm toán” = chị Lan theo dàn nhân vật chuỗi) → “Khoan đã!” chị Lan nhắc tuyển thực tập (❓ p22) → tối đó tin cảm ơn, xin tên người tiếp (p19–p21) → cuối tuần 6, tờ CV mới. Nhân vật (w145/_series/graduates-still-job-hunting.md): Dũng, Thảo, chị Lan; “anh Quân” và anh hướng dẫn thực tập cũ chỉ được nhắc tên, không lên hình. Chi tiết minh hoạ tự đặt (không phải số liệu): “5 hồ sơ, 2 cuộc hẹn” tuần 6, “phút thứ 19”, câu trả lời của chị Lan về mùa cao điểm. Số chỉ từ bài: hai tuần, vài chục tin, 2–3 loại vị trí, 8 năng lực NACE, 5 nhóm MIT, 30 giây, 20–30 phút, 20 phút, 4 câu hỏi, 1–2 ngày, mười người. Ngắt nhịp: BRK-06 s05 (dấu hiệu lừa, Hà Tĩnh 1/2/2025), BRK-04 s08 (Trước/Sau dòng kỹ năng), BRK-07 s10 (rehook “không quen ai có chức có quyền”), DLG-01 s15. Tục ngữ: “Bán anh em xa, mua láng giềng gần”. Câu đố questions[19].",
  "loop": {
    "open": "s00",
    "close": "s17"
  }
};
