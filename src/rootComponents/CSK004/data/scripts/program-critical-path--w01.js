// program-critical-path--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "program-critical-path--w01",
  "unit": {
    "audience": "epc-project-manager",
    "slug": "program-critical-path",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Đọc và duyệt tiến độ, đường găng của nhà thầu thế nào?",
    "series": "Giữ quyền chủ đầu tư ngoài công trường EPC — cho quản lý dự án và tư vấn giám sát, đúng thủ tục mỗi ngày và có chứng cứ khi cần"
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
              "a-A",
              "a-B"
            ],
            "zoom": 1.2,
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
            "id": "a-q",
            "t": "text",
            "text": "Việc nào đẩy lùi mốc?",
            "x": 60,
            "y": 90,
            "size": 80,
            "at": "l1:Which",
            "color": "accent",
            "hl": [
              {
                "text": "đẩy lùi mốc",
                "at": "l1:pushes"
              }
            ]
          },
          {
            "id": "a-gt",
            "t": "illus",
            "name": "bar-chart",
            "x": 1240,
            "y": 70,
            "size": 180,
            "at": "l1:completion"
          },
          {
            "id": "a-A",
            "t": "text",
            "text": "A. Việc trễ vài tuần",
            "x": 60,
            "y": 260,
            "size": 60,
            "at": "l2:weeks"
          },
          {
            "id": "a-B",
            "t": "text",
            "text": "B. Việc trễ ít ngày",
            "x": 60,
            "y": 360,
            "size": 60,
            "at": "l3:days"
          },
          {
            "id": "a-gs",
            "t": "text",
            "text": "Đoán đi…",
            "x": 60,
            "y": 480,
            "size": 52,
            "at": "l4:Guess",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Quick guess. Which task pushes back completion?",
          "sub": "Đoán nhanh. Việc nào đẩy lùi mốc hoàn thành?",
          "keys": [
            "đẩy lùi mốc hoàn thành"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A: a task that is several weeks late?",
          "sub": "A: một việc trễ vài tuần?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Or B: a task just a few days late?",
          "sub": "Hay B: một việc chỉ trễ ít ngày?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Guess before you read on.",
          "sub": "Đoán đi đã."
        }
      ],
      "beats": {
        "after": 1500
      },
      "sfx": [
        {
          "at": "l4",
          "key": "cau-hoi"
        }
      ],
      "ref": "intro,p5"
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
            "at": "l6",
            "fit": "A",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "a-ring",
            "t": "ring",
            "around": [
              "a-A"
            ],
            "color": "coral",
            "stroke": 8,
            "at": "l1:Most"
          },
          {
            "id": "a-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 960,
            "y": 270,
            "w": 700,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4",
                  "pose": "give"
                }
              ],
              "props": [
                "bar-chart",
                "page-facing-up"
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
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2",
            "caption": "Tuần 2 sau khởi công · lán Ban QLDA",
            "icon": "bar-chart"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Im lặng là đồng ý”",
            "x": 60,
            "y": 590,
            "size": 54,
            "at": "l7:Silence",
            "color": "accent",
            "hl": [
              {
                "text": "đồng ý",
                "at": "l7:yes"
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
          "say": "Most people pick A. Hold that thought.",
          "sub": "Đa số chọn A. Giữ câu trả lời đó lại.",
          "keys": [
            "Đa số chọn A"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo, owner's project team. Week two after commencement.",
          "sub": "Đây là Thảo, Ban quản lý dự án. Tuần thứ hai sau khởi công.",
          "keys": [
            "Tuần thứ hai sau khởi công"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "A bar chart, page after page. Do I really read all of it?",
          "sub": "Sơ đồ ngang dài cả tập. Em phải đọc hết thật ạ?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And Sam, the EPC contractor's project manager, who sent it.",
          "sub": "Và Sam, quản lý dự án phía nhà thầu EPC, người gửi bản này.",
          "keys": [
            "phía nhà thầu EPC"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "Our first programme. We keep working while you review.",
          "sub": "Bản tiến độ đầu tiên. Bên chị duyệt, chúng tôi vẫn làm.",
          "pose": "give"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "This chart becomes the ruler for every extension and every delay day.",
          "sub": "Bản này sẽ là thước đo cho mọi lần gia hạn, mọi ngày chậm.",
          "keys": [
            "thước đo"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "And remember the saying: silence means yes.",
          "sub": "Và nhớ câu: “Im lặng là đồng ý.”",
          "keys": [
            "Im lặng là đồng ý"
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
      "ref": "intro,p7"
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
            "text": "Đọc, duyệt tiến độ thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:review",
            "hl": [
              {
                "text": "duyệt tiến độ",
                "at": "l1:review"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: liếc qua rồi cất",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:glance",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:drawer"
          },
          {
            "id": "b-s0b",
            "t": "box",
            "x": 2028,
            "y": 280,
            "w": 780,
            "h": 105,
            "at": "l3:logic",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s1b",
            "t": "box",
            "x": 2858,
            "y": 280,
            "w": 780,
            "h": 105,
            "at": "l3:writing",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s2b",
            "t": "box",
            "x": 2028,
            "y": 410,
            "w": 780,
            "h": 105,
            "at": "l4:notes",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s3b",
            "t": "box",
            "x": 2858,
            "y": 410,
            "w": 780,
            "h": 105,
            "at": "l4:acceleration",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-s0",
            "t": "text",
            "text": "① Đường găng, logic",
            "x": 2058,
            "y": 305,
            "size": 46,
            "at": "l3:logic+200"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "② Trả lời đúng hạn",
            "x": 2888,
            "y": 305,
            "size": 46,
            "at": "l3:writing+200"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "③ Gạch ghi chú",
            "x": 2058,
            "y": 435,
            "size": 46,
            "at": "l4:notes+200"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "④ Đẩy nhanh ≠ tăng tốc",
            "x": 2888,
            "y": 435,
            "size": 46,
            "at": "l4:acceleration+200"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "3 tháng · 6 chặng",
            "x": 2028,
            "y": 580,
            "size": 56,
            "at": "l5:three",
            "hl": [
              {
                "text": "6 chặng",
                "at": "l5:six"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn (theo bài học): Điều 12 Luật Điện lực 2024 · mẫu hợp đồng quốc tế 2017 và bài phân tích về nó",
            "x": 2028,
            "y": 700,
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
          "say": "So how do you read and review the contractor's programme?",
          "sub": "Vậy đọc và duyệt tiến độ, đường găng của nhà thầu thế nào?",
          "keys": [
            "đường găng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a quick glance, then into the drawer.",
          "sub": "Không phải liếc qua rồi cất ngăn kéo."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Check the critical path and logic. Reply on time, in writing.",
          "sub": "Kiểm đường găng và logic. Trả lời đúng hạn, bằng văn bản.",
          "keys": [
            "bằng văn bản"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Strike out notes that open extension doors. And tell catch-up from paid acceleration.",
          "sub": "Gạch ghi chú mở cửa gia hạn. Và phân biệt đẩy nhanh với tăng tốc được trả tiền.",
          "keys": [
            "tăng tốc được trả tiền"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Three months of Thảo's, six stops.",
          "sub": "Ba tháng đầu của Thảo, sáu chặng.",
          "keys": [
            "sáu chặng"
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tuần 2 · Bản đạt có gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:week"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4896,
            "y": 130,
            "w": 700,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "point"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "clipboard",
                "bar-chart"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:week",
            "caption": "Tuần 2 · bàn Thảo",
            "icon": "clipboard"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Đường găng · trình tự · logic",
            "x": 3996,
            "y": 160,
            "size": 44,
            "at": "l4:critical",
            "color": "accent",
            "hl": [
              {
                "text": "Đường găng",
                "at": "l4:critical"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "khớp tiến độ sơ bộ (phụ lục)",
            "x": 3996,
            "y": 225,
            "size": 38,
            "at": "l4:outline"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Mẫu quốc tế 2017, Điều 8.3: ngày khởi công,",
            "x": 3996,
            "y": 285,
            "size": 28,
            "at": "l5:commencement",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-src2",
            "t": "text",
            "text": "hoàn thành, giao quyền vào công trường;",
            "x": 3996,
            "y": 322,
            "size": 28,
            "at": "l5:access",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-src3",
            "t": "text",
            "text": "liên kết logic, thời gian dự trữ, đường găng",
            "x": 3996,
            "y": 359,
            "size": 28,
            "at": "l5:float",
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
          "say": "Week two. Ms Hoa stops by Thảo's desk.",
          "sub": "Tuần hai. Cô Hoa ghé bàn Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ms Hoa heads the project team, and is the Employer's Representative.",
          "sub": "Cô Hoa là trưởng Ban quản lý dự án, kiêm Đại diện Chủ đầu tư.",
          "keys": [
            "Đại diện Chủ đầu tư"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Don't read every bar. Check five things. Right, go!",
          "sub": "Đừng đọc từng thanh. Kiểm năm thứ. Rồi, làm nha!",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A good programme: critical path, sequence, logic, matching the outline programme.",
          "sub": "Tiến độ đạt: đường găng, trình tự, logic, khớp tiến độ sơ bộ.",
          "keys": [
            "khớp tiến độ sơ bộ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The twenty seventeen international form asks for more: commencement, completion, site access, linked tasks, float.",
          "sub": "Mẫu quốc tế 2017 đòi chi tiết hơn: ngày khởi công, hoàn thành, giao quyền vào công trường, liên kết logic, thời gian dự trữ."
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
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 430,
            "w": 40,
            "h": 40,
            "at": "l1:completion",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 3999,
            "y": 412,
            "size": 52,
            "at": "l1:completion+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Khởi công, hoàn thành khớp HĐ",
            "x": 4060,
            "y": 422,
            "size": 34,
            "at": "l1:completion+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 494,
            "w": 40,
            "h": 40,
            "at": "l2:energisation",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 3999,
            "y": 476,
            "size": 52,
            "at": "l2:energisation+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Mốc CĐT: mặt bằng, đóng điện",
            "x": 4060,
            "y": 486,
            "size": 34,
            "at": "l2:energisation+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 558,
            "w": 40,
            "h": 40,
            "at": "l3:before",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 3999,
            "y": 540,
            "size": 52,
            "at": "l3:before+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Mỗi việc có trước, có sau",
            "x": 4060,
            "y": 550,
            "size": 34,
            "at": "l3:before+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 622,
            "w": 40,
            "h": 40,
            "at": "l3:float",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 3999,
            "y": 604,
            "size": 52,
            "at": "l3:float+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Thấy đường găng, dự trữ",
            "x": 4060,
            "y": 614,
            "size": 34,
            "at": "l3:float+200"
          },
          {
            "id": "c-c4",
            "t": "box",
            "x": 3996,
            "y": 686,
            "w": 40,
            "h": 40,
            "at": "l4:legal",
            "stroke": 5
          },
          {
            "id": "c-k4",
            "t": "text",
            "text": "✓",
            "x": 3999,
            "y": 668,
            "size": 52,
            "at": "l4:legal+600",
            "color": "accent"
          },
          {
            "id": "c-l4",
            "t": "text",
            "text": "Có các mốc pháp lý",
            "x": 4060,
            "y": 678,
            "size": 34,
            "at": "l4:legal+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Checklist. Commencement and completion match the contract.",
          "sub": "Bảng kiểm. Ngày khởi công, thời hạn hoàn thành khớp hợp đồng.",
          "keys": [
            "Bảng kiểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Owner milestones, like site handover and energisation, on the dates we committed.",
          "sub": "Mốc của chủ đầu tư như giao mặt bằng, đóng điện ghi đúng ngày đã cam kết."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Every task linked before and after. Critical path and float visible.",
          "sub": "Mỗi việc có liên kết trước, sau. Thấy rõ đường găng và thời gian dự trữ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the project's legal milestones are inside.",
          "sub": "Và các mốc pháp lý của dự án nằm trong tiến độ.",
          "keys": [
            "mốc pháp lý"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "This energisation date differs from ours. I'll flag it in writing.",
          "sub": "Ngày đóng điện này khác ngày mình cam kết. Em ghi ý kiến bằng văn bản.",
          "face": "thinking"
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
            "fit": "C",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "D",
            "ms": 900
          },
          {
            "at": "l5",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tuần 3 · Đường găng",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:side"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6864,
            "y": 130,
            "w": 700,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "point",
                  "face": "thinking"
                }
              ],
              "props": [
                "round-pushpin",
                "bar-chart"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "close",
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
            "at": "l1:three",
            "caption": "Tuần 3 · đặt hai tiến độ cạnh nhau",
            "icon": "round-pushpin"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Điều 12 Luật Điện lực 2024: mốc giai đoạn ghi trong",
            "x": 5964,
            "y": 140,
            "size": 28,
            "at": "l2:Article",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-src2",
            "t": "text",
            "text": "GCN đăng ký đầu tư / văn bản chấp thuận chủ trương",
            "x": 5964,
            "y": 177,
            "size": 28,
            "at": "l2:investment",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-leg",
            "t": "text",
            "text": "Đặt cạnh EPC → thấy sớm chỗ vượt",
            "x": 5964,
            "y": 222,
            "size": 36,
            "at": "l3:early"
          },
          {
            "id": "d-cp",
            "t": "text",
            "text": "Đường găng: chậm 1 ngày →",
            "x": 5964,
            "y": 290,
            "size": 46,
            "at": "l4:chain",
            "color": "accent",
            "hl": [
              {
                "text": "Đường găng",
                "at": "l4:critical"
              }
            ]
          },
          {
            "id": "d-cp2",
            "t": "text",
            "text": "hoàn thành chậm 1 ngày",
            "x": 5964,
            "y": 355,
            "size": 46,
            "at": "l4:completion"
          },
          {
            "id": "d-q",
            "t": "text",
            "text": "Xếp hàng một: một người dừng, cả hàng dừng",
            "x": 5964,
            "y": 440,
            "size": 30,
            "at": "l6:queue",
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
          "say": "Week three. Thảo puts two documents side by side.",
          "sub": "Tuần ba. Thảo đặt hai tài liệu cạnh nhau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article twelve, Electricity Law: stage milestones sit in the investment documents.",
          "sub": "Điều 12 Luật Điện lực 2024: mốc từng giai đoạn ghi trong giấy tờ đầu tư."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Beside the EPC programme, you spot overruns early. Check the consequences.",
          "sub": "Đặt cạnh tiến độ EPC, thấy sớm chỗ vượt mốc. Hậu quả: kiểm văn bản hiện hành."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Now, the critical path: the chain where one day late means completion one day late.",
          "sub": "Giờ là đường găng: chuỗi việc chậm một ngày thì hoàn thành chậm theo.",
          "keys": [
            "chậm một ngày"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "So only events on that chain earn an extension?",
          "sub": "Vậy chỉ sự kiện trên chuỗi đó mới được gia hạn ạ?",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Usually, yes. Picture a single-file queue: one stops, everyone stops.",
          "sub": "Thường là vậy. Như hàng người xếp hàng một: một người dừng, cả hàng dừng.",
          "keys": [
            "cả hàng dừng"
          ]
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
            "fit": "D",
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": [
              "d-b1",
              "d-b2"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l3:end",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-b1",
            "t": "text",
            "text": "Tiến độ gốc: duyệt, cập nhật",
            "x": 5964,
            "y": 530,
            "size": 38,
            "at": "l1:baseline",
            "hl": [
              {
                "text": "Tiến độ gốc",
                "at": "l1:baseline"
              }
            ]
          },
          {
            "id": "d-b2",
            "t": "text",
            "text": "Đường găng đổi theo thời gian",
            "x": 5964,
            "y": 595,
            "size": 38,
            "at": "l2:changes",
            "color": "coral"
          },
          {
            "id": "d-b3",
            "t": "text",
            "text": "→ xác lập lại ở mỗi mốc",
            "x": 5964,
            "y": 655,
            "size": 34,
            "at": "l3:again"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "To check that, the owner needs an approved, updated baseline programme.",
          "sub": "Muốn kiểm, chủ đầu tư cần tiến độ gốc đã duyệt và được cập nhật.",
          "keys": [
            "tiến độ gốc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One analysis stresses it: the critical path changes as work moves.",
          "sub": "Một bài phân tích nhấn mạnh: đường găng thay đổi theo tiến trình."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So set it at the start, and again at every key point.",
          "sub": "Nên xác lập từ đầu, và lại ở mỗi thời điểm quan trọng.",
          "keys": [
            "mỗi thời điểm quan trọng"
          ]
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s07",
      "module": "BRK-04",
      "data": {
        "title": "Việc trễ bao lâu, gia hạn bấy lâu?",
        "wrong": "Việc nào trễ cũng được gia hạn ngần ấy ngày",
        "right": "Ngoài đường găng còn dự trữ, trên đường găng mới đẩy mốc",
        "wrongIllus": "snail",
        "rightIllus": "chains"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Any late task earns the same days?",
          "sub": "Việc nào trễ cũng được gia hạn ngần ấy ngày?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. Only the critical path moves completion.",
          "sub": "Không. Chỉ đường găng mới đẩy mốc hoàn thành.",
          "keys": [
            "Chỉ đường găng"
          ]
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
            "fit": "A",
            "move": "cut"
          },
          {
            "at": "l2",
            "fit": [
              "a-B"
            ],
            "zoom": 1.4,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "D",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "a-ok",
            "t": "ring",
            "around": [
              "a-B"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l2:often"
          },
          {
            "id": "a-fl",
            "t": "text",
            "text": "A: còn dự trữ → mốc không đổi",
            "x": 60,
            "y": 690,
            "size": 40,
            "at": "l1:float",
            "color": "muted"
          },
          {
            "id": "d-own",
            "t": "text",
            "text": "Không có tiến độ gốc: nhà thầu tự vẽ đường găng",
            "x": 5964,
            "y": 715,
            "size": 30,
            "at": "l3:draws",
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
          "say": "Back to our guess. Task A, weeks late but off the critical path, still has float.",
          "sub": "Quay lại câu đoán. Việc A trễ vài tuần nhưng ngoài đường găng, còn thời gian dự trữ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Completion may not move at all. B, a few days late on the path, often does.",
          "sub": "Mốc hoàn thành có thể không đổi. Còn B, trễ ít ngày trên đường găng, thường đẩy lùi mốc.",
          "keys": [
            "thường đẩy lùi mốc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No updated baseline? The contractor draws its own critical path, the way that suits its claim.",
          "sub": "Không có tiến độ gốc cập nhật? Nhà thầu tự vẽ đường găng theo cách có lợi cho mình.",
          "keys": [
            "tự vẽ đường găng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lesson: no critical path, no way to measure delay.",
          "sub": "Rút ra: không có đường găng, không đo được ngày chậm.",
          "keys": [
            "không đo được ngày chậm"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "text": "③ Tháng 2 · Tiến độ sửa đổi",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:programme"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8832,
            "y": 130,
            "w": 700,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "give"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "bar-chart",
                "high-voltage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:two",
            "caption": "Tháng 2 · họp tiến độ",
            "icon": "bar-chart"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Chờ duyệt: vẫn phải làm",
            "x": 7932,
            "y": 160,
            "size": 40,
            "at": "l3:keeps"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Xem, chấp thuận: không miễn trách nhiệm",
            "x": 7932,
            "y": 220,
            "size": 34,
            "at": "l3:relieves"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Quá hạn = “không bị phản đối”",
            "x": 7932,
            "y": 290,
            "size": 38,
            "at": "l4:objection",
            "color": "coral",
            "hl": [
              {
                "text": "không bị phản đối",
                "at": "l4:objection"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "theo một bài phân tích mẫu 2017 · đối chiếu",
            "x": 7932,
            "y": 345,
            "size": 28,
            "at": "l4:Check",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-src2",
            "t": "text",
            "text": "bản chính thức và hợp đồng của mình",
            "x": 7932,
            "y": 382,
            "size": 28,
            "at": "l4:contract",
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
          "say": "Month two. Sam sends a revised programme.",
          "sub": "Tháng hai. Sam gửi tiến độ sửa đổi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "We've moved installation after the expected energisation date.",
          "sub": "Chúng tôi dời lắp đặt ra sau ngày đóng điện dự kiến.",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The contractor keeps working meanwhile. And review rarely relieves it of duties.",
          "sub": "Trong lúc chờ duyệt nhà thầu vẫn làm. Xem xét, chấp thuận cũng thường không miễn trách nhiệm cho nhà thầu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The worry is silence: miss the deadline, and it may count as no objection. Check your contract.",
          "sub": "Điều đáng lo là im lặng: quá hạn, tiến độ có thể bị coi là “không bị phản đối”. Đối chiếu hợp đồng của mình.",
          "keys": [
            "không bị phản đối"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s10",
      "module": "BRK-08",
      "data": {
        "title": "Hai cách, cùng một bản tiến độ",
        "points": [
          {
            "label": "Cách A",
            "sub": "Để trên bàn quá hạn",
            "illus": "hourglass-done"
          },
          {
            "label": "Vài tháng sau",
            "sub": "Nhà thầu dùng làm nền",
            "illus": "envelope"
          },
          {
            "label": "Cách B",
            "sub": "Văn bản trong hạn",
            "illus": "writing-hand"
          },
          {
            "label": "Khi xét gia hạn",
            "sub": "Có giấy: chưa từng nhận",
            "illus": "shield"
          }
        ],
        "current": 3
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Option A: the file sits past the deadline. Months later, it's the base of a claim.",
          "sub": "Cách A: tiến độ nằm trên bàn quá hạn. Vài tháng sau, thành nền để xin gia hạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Option B: a letter in time. Later, proof we never accepted it.",
          "sub": "Cách B: văn bản trong hạn. Về sau, có giấy chứng minh chưa từng chấp nhận.",
          "keys": [
            "chưa từng chấp nhận"
          ]
        }
      ],
      "ref": "p8"
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
            "at": "l1",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
            "ms": 600
          },
          {
            "at": "l2",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-A",
            "t": "text",
            "text": "A: bận nghiệm thu → quá hạn",
            "x": 7932,
            "y": 430,
            "size": 36,
            "at": "l2:busy",
            "color": "muted"
          },
          {
            "id": "e-Ax",
            "t": "strike",
            "over": "e-A",
            "at": "l2:objected"
          },
          {
            "id": "e-B",
            "t": "text",
            "text": "B: nêu chỗ lệch, đòi nộp lại",
            "x": 7932,
            "y": 495,
            "size": 34,
            "at": "l3:mismatch",
            "color": "accent"
          },
          {
            "id": "e-ca",
            "t": "text",
            "text": "Không đồng ý thì phải nói,",
            "x": 7932,
            "y": 590,
            "size": 54,
            "at": "l5:disagree",
            "color": "accent"
          },
          {
            "id": "e-ca2",
            "t": "text",
            "text": "và nói bằng văn bản",
            "x": 7932,
            "y": 670,
            "size": 54,
            "at": "l5:writing",
            "color": "accent",
            "hl": [
              {
                "text": "bằng văn bản",
                "at": "l5:writing"
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
          "say": "The team is busy with acceptance tests. Can it wait?",
          "sub": "Đội đang bận nghiệm thu. Để sau được không ạ?",
          "face": "worried"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Busy is how Option A happens. Later Sam says: nobody objected.",
          "sub": "Bận chính là cách Cách A xảy ra. Về sau Sam sẽ nói: có ai phản đối đâu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Option B: within the deadline, list each mismatch with the outline, ask for resubmission.",
          "sub": "Cách B: trong hạn, nêu từng chỗ chưa khớp tiến độ sơ bộ, yêu cầu nộp lại.",
          "keys": [
            "yêu cầu nộp lại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Silence means yes, they say. On site, that's literally true.",
          "sub": "Ông bà bảo “Im lặng là đồng ý”. Ở công trường, đúng theo nghĩa đen.",
          "keys": [
            "Im lặng là đồng ý"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So if you disagree, say it, and say it in writing.",
          "sub": "Nên không đồng ý thì phải nói, và nói bằng văn bản.",
          "keys": [
            "nói bằng văn bản"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Một dòng ghi chú nhỏ nguy hiểm đến đâu?",
        "illus": "page-facing-up"
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
          "say": "How dangerous can one small note be?",
          "sub": "Một dòng ghi chú nhỏ nguy hiểm đến đâu?",
          "keys": [
            "nguy hiểm đến đâu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p10"
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
            "text": "④ Tháng 2 · Ghi chú mốc tạm",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:appendix"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 960,
            "y": 1220,
            "w": 700,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "surprised"
                }
              ],
              "props": [
                "magnifying-glass-tilted-left",
                "page-facing-up"
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
            "at": "l1:appendix",
            "caption": "Tháng 2 · phụ lục tiến độ",
            "icon": "magnifying-glass-tilted-left"
          },
          {
            "id": "f-n1",
            "t": "text",
            "text": "“…dựa trên mốc tạm của chủ đầu tư;",
            "x": 60,
            "y": 1250,
            "size": 32,
            "at": "l2:provisional",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "f-n2",
            "t": "text",
            "text": "nếu khác sẽ điều chỉnh tương ứng”",
            "x": 60,
            "y": 1295,
            "size": 32,
            "at": "l2:adjusted",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "f-pl",
            "t": "text",
            "text": "+ điều “chậm mốc CĐT được gia hạn”",
            "x": 60,
            "y": 1360,
            "size": 38,
            "at": "l3:clause"
          },
          {
            "id": "f-eq",
            "t": "text",
            "text": "= gia hạn không cần đường găng",
            "x": 60,
            "y": 1425,
            "size": 44,
            "at": "l4:proof",
            "color": "coral",
            "hl": [
              {
                "text": "không cần đường găng",
                "at": "l4:critical"
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
          "say": "Same month, in the programme appendix, Thảo finds a note.",
          "sub": "Cùng tháng, trong phụ lục tiến độ, Thảo thấy một dòng ghi chú."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Based on the owner's provisional dates; if different, adjusted accordingly.",
          "sub": "“Tiến độ dựa trên mốc tạm của chủ đầu tư; nếu khác sẽ điều chỉnh tương ứng.”",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Next to the clause giving time for late owner milestones...",
          "sub": "Đặt cạnh điều “chậm mốc của chủ đầu tư được gia hạn”…"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It can become extension rights, with no critical path proof.",
          "sub": "Câu này có thể thành quyền gia hạn mà không cần chứng minh đường găng.",
          "keys": [
            "không cần chứng minh đường găng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Found in a submitted programme? Comment right away.",
          "sub": "Gặp trong tiến độ nộp duyệt? Ghi ý kiến ngay.",
          "keys": [
            "Ghi ý kiến ngay"
          ]
        }
      ],
      "ref": "p10"
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
            "at": "l2",
            "fit": [
              "f-a1",
              "f-a2",
              "f-a3"
            ],
            "zoom": 1.15,
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
            "id": "f-bf",
            "t": "text",
            "text": "Trước: “Đã xem, đề nghị lưu ý.”",
            "x": 60,
            "y": 1510,
            "size": 38,
            "at": "l1:Before",
            "color": "muted"
          },
          {
            "id": "f-bfx",
            "t": "strike",
            "over": "f-bf",
            "at": "l1:objects"
          },
          {
            "id": "f-a1",
            "t": "text",
            "text": "Sau: “CĐT không chấp nhận ghi chú mốc tạm.",
            "x": 60,
            "y": 1580,
            "size": 32,
            "at": "l2:After",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "f-a2",
            "t": "text",
            "text": "Điều chỉnh thời hạn chỉ theo Điều [ ] về gia hạn,",
            "x": 60,
            "y": 1622,
            "size": 32,
            "at": "l2:clause",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "f-a2b",
            "t": "text",
            "text": "khi đáp ứng Điều [ ].",
            "x": 60,
            "y": 1660,
            "size": 32,
            "at": "l2:conditions",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "f-a3",
            "t": "text",
            "text": "Không phản đối phần khác không làm thay đổi điều này.”",
            "x": 60,
            "y": 1698,
            "size": 32,
            "at": "l3:rest",
            "font": "base",
            "color": "accent",
            "hl": [
              {
                "text": "không làm thay đổi",
                "at": "l3:changes"
              }
            ]
          },
          {
            "id": "f-take",
            "t": "text",
            "text": "Gạch hôm nay, đỡ cãi ngày mai",
            "x": 60,
            "y": 1765,
            "size": 50,
            "at": "l4:Strike",
            "color": "accent",
            "hl": [
              {
                "text": "đỡ cãi ngày mai",
                "at": "l4:tomorrow"
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
          "say": "Before: noted, contractor to take note. That says nothing about what the owner objects to.",
          "sub": "Trước: “Đã xem, đề nghị nhà thầu lưu ý.” Câu này không nói chủ đầu tư phản đối gì."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: the owner rejects the note. Time changes only under the extension clause, when its conditions are met.",
          "sub": "Sau: chủ đầu tư không chấp nhận ghi chú. Điều chỉnh thời hạn chỉ theo Điều [ ] về gia hạn, khi đáp ứng điều kiện.",
          "keys": [
            "chỉ theo Điều [ ] về gia hạn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And not objecting to the rest changes nothing. That blocks: approved, note and all.",
          "sub": "Và không phản đối phần khác cũng không làm thay đổi điều này. Chặn cách hiểu “đã duyệt cả ghi chú”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Strike the note today, skip the extension fight tomorrow.",
          "sub": "Gạch ghi chú hôm nay, đỡ cãi gia hạn ngày mai.",
          "keys": [
            "đỡ cãi gia hạn ngày mai"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s15a",
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
            "at": "l2:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tháng 3 · Cẩu hỏng",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:slows"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2928,
            "y": 1220,
            "w": 700,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "building-construction",
                "crescent-moon"
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
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:crane",
            "caption": "Tháng 3 · họp tiến độ",
            "icon": "building-construction"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Month three. The contractor's main crane breaks down. Installation slows.",
          "sub": "Tháng ba. Cẩu chính của nhà thầu hỏng, lắp đặt chậm lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, a young site supervisor on the owner's side. Keen as ever.",
          "sub": "Đây là Dũng, kỹ sư tư vấn giám sát trẻ phía chủ đầu tư. Hăng hái như mọi khi.",
          "keys": [
            "tư vấn giám sát"
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
      "ref": "p15"
    },
    {
      "id": "s15",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "Tháng 3 · họp tiến độ",
        "actors": [
          {
            "id": "dung",
            "side": "left",
            "pose": "point"
          },
          {
            "id": "sam",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Biên bản ghi “phải tăng tốc”",
          "why": "Cẩu hỏng là lỗi nhà thầu, nhưng câu trong biên bản thành căn cứ đòi tiền tăng tốc theo yêu cầu chủ đầu tư.",
          "rule": "Yêu cầu tiến độ sửa đổi, chi phí nhà thầu"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "You must accelerate! Add night shifts. Put that in the minutes!",
          "sub": "Phải tăng tốc! Thêm ca đêm. Ghi vào biên bản luôn!",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Noted, word for word.",
          "sub": "Đã ghi, đúng từng chữ.",
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
          "say": "End of quarter: night shifts billed as owner-requested acceleration. Minutes attached.",
          "sub": "Cuối quý: ca đêm đòi trả như tăng tốc theo yêu cầu chủ đầu tư, kèm biên bản.",
          "keys": [
            "tăng tốc theo yêu cầu chủ đầu tư"
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
          "who": "dung",
          "say": "Your crane, your delay. Revised programme with catch-up, at your cost.",
          "sub": "Cẩu của anh, chậm của anh. Nộp tiến độ sửa đổi, đẩy nhanh, chi phí bên anh.",
          "phase": "redo",
          "pose": "explain"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "at": "l5",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-c",
            "t": "text",
            "text": "Nhà thầu tự chậm:",
            "x": 2028,
            "y": 1250,
            "size": 44,
            "at": "l1:own"
          },
          {
            "id": "g-c1",
            "t": "text",
            "text": "báo trong [ ] ngày · tiến độ sửa đổi",
            "x": 2028,
            "y": 1310,
            "size": 36,
            "at": "l1:notifies"
          },
          {
            "id": "g-c2",
            "t": "text",
            "text": "đẩy nhanh, chi phí nhà thầu",
            "x": 2028,
            "y": 1365,
            "size": 40,
            "at": "l2:cost",
            "color": "accent",
            "hl": [
              {
                "text": "chi phí nhà thầu",
                "at": "l2:cost"
              }
            ]
          },
          {
            "id": "g-c3",
            "t": "text",
            "text": "Không đổi mốc · không tự gia hạn",
            "x": 2028,
            "y": 1430,
            "size": 36,
            "at": "l3:move"
          },
          {
            "id": "g-acc",
            "t": "text",
            "text": "Tăng tốc = CĐT trả, thay gia hạn",
            "x": 2028,
            "y": 1510,
            "size": 38,
            "at": "l4:Acceleration",
            "color": "coral"
          },
          {
            "id": "g-acc2",
            "t": "text",
            "text": "phải có chỉ thị bằng văn bản",
            "x": 2028,
            "y": 1570,
            "size": 38,
            "at": "l4:written",
            "hl": [
              {
                "text": "bằng văn bản",
                "at": "l4:written"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Mẫu 2017, Điều 8.7: chậm do sự kiện CĐT",
            "x": 2028,
            "y": 1630,
            "size": 28,
            "at": "l6:variation",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-src2",
            "t": "text",
            "text": "→ tăng tốc theo thủ tục Thay đổi",
            "x": 2028,
            "y": 1665,
            "size": 28,
            "at": "l6:procedure",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-ngam",
            "t": "text",
            "text": "Tăng tốc ngầm: được gia hạn mà bị ép mốc cũ",
            "x": 2028,
            "y": 1715,
            "size": 32,
            "at": "l7:constructive",
            "font": "base",
            "color": "coral"
          },
          {
            "id": "g-take",
            "t": "text",
            "text": "Tự chậm thì tự đẩy nhanh",
            "x": 2028,
            "y": 1770,
            "size": 46,
            "at": "l8:catches",
            "color": "accent",
            "hl": [
              {
                "text": "tự đẩy nhanh",
                "at": "l8:catches"
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
          "say": "Late by its own fault? The contractor notifies within blank days, with a revised programme.",
          "sub": "Nhà thầu chậm do mình thì phải báo trong [ ] ngày, nộp tiến độ sửa đổi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "With catch-up measures, at its own cost.",
          "sub": "Kèm biện pháp đẩy nhanh, bằng chi phí của mình.",
          "keys": [
            "chi phí của mình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A revised programme doesn't move completion, or grant time by itself.",
          "sub": "Sửa tiến độ không làm đổi mốc hoàn thành, không tự cho gia hạn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Acceleration differs: the owner pays for speed instead of time, by written instruction.",
          "sub": "Tăng tốc thì khác: chủ đầu tư trả tiền làm nhanh thay vì gia hạn, phải có chỉ thị bằng văn bản.",
          "keys": [
            "chỉ thị bằng văn bản"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "And if the delay was ours?",
          "sub": "Thế nếu chậm do bên mình?",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Then, under the twenty seventeen form, acceleration goes through the variation procedure.",
          "sub": "Khi đó, theo mẫu 2017, tăng tốc đi theo thủ tục Thay đổi."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "No instruction? It may claim constructive acceleration: time was due, the old date forced.",
          "sub": "Không chỉ thị? Nhà thầu có thể đòi “tăng tốc ngầm”: đáng gia hạn mà bị ép mốc cũ.",
          "keys": [
            "tăng tốc ngầm"
          ]
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Rule: a late contractor catches up itself. The owner pays only for written instructions.",
          "sub": "Rút ra: nhà thầu tự chậm thì tự đẩy nhanh; chủ đầu tư chỉ trả khi đã chỉ thị bằng văn bản.",
          "keys": [
            "tự đẩy nhanh"
          ]
        }
      ],
      "ref": "p13,p14,p16"
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
            "text": "⑥ Họp tiến độ · Cảnh báo sớm",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:meeting"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4896,
            "y": 1220,
            "w": 700,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
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
                "memo",
                "warning"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:meeting",
            "caption": "Họp tiến độ hằng tuần",
            "icon": "memo"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Báo cáo, họp = công cụ theo dõi",
            "x": 3996,
            "y": 1250,
            "size": 40,
            "at": "l3:tools"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "không thay thông báo chính thức",
            "x": 3996,
            "y": 1310,
            "size": 40,
            "at": "l3:notice",
            "color": "coral",
            "hl": [
              {
                "text": "thông báo chính thức",
                "at": "l3:formal"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Mẫu 2017, Điều 8.4: mỗi bên cảnh báo sớm",
            "x": 3996,
            "y": 1375,
            "size": 28,
            "at": "l4:warn",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "h-src2",
            "t": "text",
            "text": "việc đã biết hoặc có thể xảy ra",
            "x": 3996,
            "y": 1412,
            "size": 28,
            "at": "l4:events",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "h-bb",
            "t": "text",
            "text": "Biên bản: cảnh báo · ai nói · ngày",
            "x": 3996,
            "y": 1470,
            "size": 38,
            "at": "l5:who",
            "color": "accent",
            "hl": [
              {
                "text": "ai nói",
                "at": "l5:who"
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
          "say": "Every week, a progress meeting. Today, Sam has news.",
          "sub": "Tuần nào cũng họp tiến độ. Hôm nay Sam có tin."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "The turbine parts may arrive late. It was in our monthly report.",
          "sub": "Linh kiện tua-bin có thể về trễ. Báo cáo tháng của chúng tôi đã nhắc rồi.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Reports and meetings are tracking tools. A report cannot replace a formal notice.",
          "sub": "Báo cáo, họp là công cụ theo dõi. Báo cáo không thay được thông báo chính thức.",
          "keys": [
            "không thay được thông báo chính thức"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The twenty seventeen form also asks each side to warn early of harmful events.",
          "sub": "Mẫu 2017 còn yêu cầu mỗi bên cảnh báo sớm sự việc có thể ảnh hưởng xấu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Into the minutes: the warning, who said it, and the date.",
          "sub": "Ghi vào biên bản: lời cảnh báo, ai nói, ngày nào.",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s18",
      "module": "BRK-08",
      "data": {
        "title": "Tiến độ trên một trang",
        "points": [
          {
            "label": "Ký",
            "sub": "hợp đồng",
            "illus": "writing-hand"
          },
          {
            "label": "Điều kiện",
            "sub": "tiên quyết",
            "illus": "check-box-with-check"
          },
          {
            "label": "Khởi công",
            "sub": "thông báo",
            "illus": "loudspeaker"
          },
          {
            "label": "Mốc chính",
            "sub": "trên đường găng",
            "illus": "round-pushpin"
          },
          {
            "label": "COD",
            "sub": "vận hành thương mại",
            "illus": "electric-plug"
          },
          {
            "label": "Bàn giao",
            "sub": "cho chủ đầu tư",
            "illus": "key"
          }
        ],
        "current": 3
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A fast way to read it: draw one timeline.",
          "sub": "Cách đọc nhanh: vẽ một dòng thời gian."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Signing, conditions, notice to proceed, milestones, commercial operation, handover.",
          "sub": "Ký, điều kiện tiên quyết, thông báo khởi công, các mốc chính, vận hành thương mại, bàn giao.",
          "keys": [
            "vận hành thương mại"
          ]
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
            "text": "Một trang, một dòng thời gian",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:page"
          },
          {
            "id": "i-ar",
            "t": "arrow",
            "from": [
              5984,
              1350
            ],
            "to": [
              7544,
              1350
            ],
            "at": "l1:page"
          },
          {
            "id": "i-m0",
            "t": "text",
            "text": "Ký",
            "x": 5984,
            "y": 1280,
            "size": 40,
            "at": "l1:page+200"
          },
          {
            "id": "i-m1",
            "t": "text",
            "text": "CP",
            "x": 6264,
            "y": 1280,
            "size": 40,
            "at": "l1:page+350"
          },
          {
            "id": "i-m2",
            "t": "text",
            "text": "NTP",
            "x": 6544,
            "y": 1280,
            "size": 40,
            "at": "l1:page+500"
          },
          {
            "id": "i-m3",
            "t": "text",
            "text": "Mốc",
            "x": 6824,
            "y": 1280,
            "size": 40,
            "at": "l1:page+650"
          },
          {
            "id": "i-m4",
            "t": "text",
            "text": "COD",
            "x": 7104,
            "y": 1280,
            "size": 40,
            "at": "l1:page+800"
          },
          {
            "id": "i-m5",
            "t": "text",
            "text": "Bàn giao",
            "x": 7384,
            "y": 1280,
            "size": 40,
            "at": "l1:page+950"
          },
          {
            "id": "i-mo",
            "t": "text",
            "text": "Mỗi mốc ghi kèm:",
            "x": 5964,
            "y": 1440,
            "size": 46,
            "at": "l2:money"
          },
          {
            "id": "i-mo2",
            "t": "text",
            "text": "tiền · bảo lãnh · phạt bắt đầu, dừng",
            "x": 5964,
            "y": 1510,
            "size": 42,
            "at": "l2:penalties",
            "color": "accent",
            "hl": [
              {
                "text": "bảo lãnh",
                "at": "l2:guarantees"
              }
            ]
          },
          {
            "id": "i-wk",
            "t": "text",
            "text": "Tuần này: việc ai trên đường găng?",
            "x": 5964,
            "y": 1610,
            "size": 38,
            "at": "l3:whose",
            "hl": [
              {
                "text": "việc ai",
                "at": "l3:whose"
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
          "say": "Thảo puts it on one page.",
          "sub": "Thảo dồn cả vào một trang."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each milestone carries its money, guarantees, and penalties that start or stop.",
          "sub": "Mỗi mốc ghi kèm khoản tiền, bảo lãnh, phạt bắt đầu hoặc dừng.",
          "keys": [
            "phạt bắt đầu hoặc dừng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One glance, and she knows whose work is on the critical path this week.",
          "sub": "Nhìn một trang, biết tuần này việc của ai đang nằm trên đường găng.",
          "keys": [
            "việc của ai"
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
            "text": "Cuối quý · cùng lán ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:quarter"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8832,
            "y": 1220,
            "w": 700,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "bar-chart",
                "envelope"
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
            "at": "l1:quarter",
            "caption": "Cuối quý · lán Ban QLDA",
            "icon": "envelope"
          },
          {
            "id": "j-env",
            "t": "illus",
            "name": "envelope",
            "x": 7932,
            "y": 1250,
            "size": 110,
            "at": "l2:letter"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Ý kiến đúng hạn, bằng văn bản",
            "x": 8072,
            "y": 1260,
            "size": 40,
            "at": "l2:deadline",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Đường găng: đã đánh dấu",
            "x": 8072,
            "y": 1325,
            "size": 40,
            "at": "l2:marked"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Im lặng là đồng ý…",
            "x": 7932,
            "y": 1450,
            "size": 52,
            "at": "l5:Silence",
            "color": "muted"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "…nên Thảo không im lặng",
            "x": 7932,
            "y": 1525,
            "size": 52,
            "at": "l5:silent",
            "color": "accent",
            "hl": [
              {
                "text": "không im lặng",
                "at": "l5:silent"
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
          "say": "End of the quarter. Same office, another revised programme.",
          "sub": "Cuối quý. Vẫn lán ấy, lại một bản tiến độ sửa đổi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Critical path marked. My letter goes out before the deadline.",
          "sub": "Đường găng đã đánh dấu. Ý kiến của em gửi trước hạn.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Good. Clause numbers in it? Right, that's it!",
          "sub": "Tốt. Có ghi số điều chưa? Rồi, vậy nha!",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Yes. Every mismatch, with the clause beside it.",
          "sub": "Dạ có. Từng chỗ chưa khớp, kèm số điều bên cạnh.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Silence means yes. So this time, Thảo was not silent.",
          "sub": "Im lặng là đồng ý. Nên lần này, Thảo không im lặng.",
          "keys": [
            "không im lặng"
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
      "ref": "p9,outro"
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
          },
          {
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:critical",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:writing",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:note",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4:catches",
            "fit": "G",
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
            "x": 7504,
            "y": 20,
            "at": "l1:critical+900"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 20,
            "at": "l2:writing+900"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1600,
            "y": 1110,
            "at": "l3:note+900"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 3568,
            "y": 1110,
            "at": "l4:catches+900"
          },
          {
            "id": "z-src1",
            "t": "text",
            "text": "Bài để tham khảo chung; tình huống là minh hoạ, không lấy từ hợp đồng hay dự án cụ thể nào.",
            "x": 7932,
            "y": 1790,
            "size": 24,
            "at": "l5:case",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "z-src2",
            "t": "text",
            "text": "Việc cụ thể, đọc chính hợp đồng của bạn và hỏi pháp chế.",
            "x": 7932,
            "y": 1825,
            "size": 24,
            "at": "l5:legal",
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
          "say": "So: no critical path, no way to measure delay.",
          "sub": "Tóm lại: không có đường găng, không đo được ngày chậm.",
          "keys": [
            "không có đường găng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Disagree? Say it, in writing, on time.",
          "sub": "Không đồng ý? Nói, bằng văn bản, đúng hạn.",
          "keys": [
            "bằng văn bản"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Strike the provisional dates note early.",
          "sub": "Gạch ghi chú mốc tạm thật sớm.",
          "keys": [
            "ghi chú mốc tạm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A late contractor catches up itself. Paid acceleration needs a written instruction.",
          "sub": "Nhà thầu tự chậm thì tự đẩy nhanh. Tăng tốc được trả tiền phải có chỉ thị bằng văn bản."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "General information, made-up examples. For your case, ask legal.",
          "sub": "Bài tham khảo chung, tình huống minh hoạ. Việc cụ thể, hỏi pháp chế."
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
        "q": "An activity outside the critical path is late by several weeks, what usually happens to completion?",
        "options": [
          "The completion date may stay the same, because the activity still has float",
          "The whole contract ends, because any late activity is a serious breach",
          "The completion date always moves by exactly the same number of weeks"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "bar-chart",
        "why": "Công việc ngoài đường găng còn thời gian dự trữ nên có thể trễ mà không đẩy lùi ngày hoàn thành. Ngược lại, công việc trên đường găng chỉ trễ ít ngày cũng đủ lùi mốc."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "An activity outside the critical path is late by several weeks, what usually happens to completion?",
          "sub": "Một công việc ngoài đường găng trễ vài tuần, ngày hoàn thành thường ra sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Off the critical path, there's float. Completion may not move.",
          "sub": "Ngoài đường găng còn dự trữ. Mốc hoàn thành có thể không đổi."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[10]"
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
          "say": "Right now: open your programme, mark the critical path, find every owner-date note.",
          "sub": "Việc làm ngay: mở tiến độ đang dùng, đánh dấu đường găng, tìm mọi ghi chú về mốc của chủ đầu tư.",
          "keys": [
            "đánh dấu đường găng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next: when a site request becomes a paid variation. Now, forty questions below!",
          "sub": "Bài sau: khi nào yêu cầu ngoài công trường thành thay đổi phải trả tiền? Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-21",
  "notes": "#145 bài MỚI theo hạt nhân (#136) + biến thể edit (#144). HOOK-21 (đoán sai): “Việc trễ vài tuần (A) hay việc trễ ít ngày (B) đẩy lùi mốc?” → đa số chọn A → lật ở s08 sau đường găng (p5). Dòng thời gian: BA THÁNG ĐẦU sau khởi công (tuần 2 tiến độ đầu p1–p2 → tuần 3 mốc pháp lý + đường găng p3–p6 → tháng 2 tiến độ sửa đổi, Cách A/B p7–p9 → ghi chú mốc tạm, trước/sau p10–p12 → tháng 3 cẩu hỏng, “Khoan đã!” Dũng “phải tăng tốc, thêm ca đêm” p13–p16 → họp tiến độ, cảnh báo sớm p17 → một trang dòng thời gian p18 → cuối quý khép vòng). Nhân vật (w145/_series/epc-project-manager.md): Thảo, Sam, cô Hoa, Dũng. Ca dao neo: “Im lặng là đồng ý” (lật: không đồng ý thì nói bằng văn bản). BRK: 04 (p5), 08 (Cách A/B p8), 07 (rehook ghi chú), 08 (dòng thời gian p18). Không nêu tên hãng luật / tạp chí: “một bài phân tích”, mẫu FIDIC = “mẫu hợp đồng quốc tế 2017” (Điều 8.3, 8.4, 8.7). Số chỉ từ bài: Đ12 Luật Điện lực 2024, [ ] ngày. Câu đố questions[10]. Lưu ý chung (#133) ở s21.",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
