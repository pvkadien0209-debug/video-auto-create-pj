// pm-epc-daily--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "pm-epc-daily--w01",
  "unit": {
    "audience": "epc-project-manager",
    "slug": "pm-epc-daily",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Quản lý dự án EPC hằng ngày cần giữ những gì để không mất quyền?",
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
            "fit": [
              "a-q1",
              "a-q2"
            ],
            "move": "cut",
            "zoom": 1.25
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "a-q1",
            "t": "text",
            "text": "Hợp đồng viết ở văn phòng,",
            "x": 60,
            "y": 110,
            "size": 60,
            "at": "l1:written"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "quyền giữ ở công trường",
            "x": 60,
            "y": 195,
            "size": 60,
            "at": "l1:kept",
            "color": "accent",
            "hl": [
              {
                "text": "công trường",
                "at": "l1:site"
              }
            ]
          },
          {
            "id": "a-c1",
            "t": "text",
            "text": "tiến độ · hồ sơ xin duyệt",
            "x": 60,
            "y": 310,
            "size": 40,
            "at": "l2:programme"
          },
          {
            "id": "a-c2",
            "t": "text",
            "text": "thông báo chậm · câu nói miệng",
            "x": 60,
            "y": 365,
            "size": 40,
            "at": "l3:remark"
          },
          {
            "id": "a-but",
            "t": "text",
            "text": "Nhưng: việc nhỏ quyết định quyền",
            "x": 60,
            "y": 450,
            "size": 46,
            "at": "l4:detail",
            "color": "coral",
            "hl": [
              {
                "text": "quyết định quyền",
                "at": "l4:decide"
              }
            ]
          },
          {
            "id": "a-r1",
            "t": "text",
            "text": "→ đòi phạt · từ chối gia hạn",
            "x": 60,
            "y": 525,
            "size": 38,
            "at": "l5:damages"
          },
          {
            "id": "a-r2",
            "t": "text",
            "text": "→ không trả việc không chỉ thị",
            "x": 60,
            "y": 580,
            "size": 38,
            "at": "l5:ordered"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Contracts are written in offices. Rights are kept on site.",
          "sub": "Hợp đồng viết ở văn phòng, quyền giữ ở công trường.",
          "keys": [
            "quyền giữ ở công trường"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each day brings a programme update and approval files.",
          "sub": "Mỗi ngày có tiến độ cập nhật, hồ sơ xin duyệt."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Delay notices. And one quick remark: add more, to be safe.",
          "sub": "Thông báo chậm. Và một câu nói miệng: “làm thêm cho chắc”.",
          "keys": [
            "làm thêm cho chắc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But here's the detail: small things decide if the owner keeps its rights.",
          "sub": "Nhưng có một chi tiết: việc nhỏ quyết định chủ đầu tư còn giữ được quyền không.",
          "keys": [
            "còn giữ được quyền"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Delay damages, refusing extra time, refusing to pay for work nobody ordered.",
          "sub": "Quyền đòi phạt, từ chối gia hạn, không trả tiền việc không ai chỉ thị."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "intro,p4"
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
            "at": "l6",
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
            "y": 110,
            "w": 760,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4",
                  "pose": "explain"
                }
              ],
              "props": [
                "clipboard",
                "construction"
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
            "at": "l1",
            "caption": "7:00 · lán Ban quản lý dự án",
            "icon": "construction"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Năng nhặt chặt bị”",
            "x": 60,
            "y": 650,
            "size": 54,
            "at": "l6:bag",
            "color": "accent",
            "hl": [
              {
                "text": "chặt bị",
                "at": "l6:full"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "→ nhặt giấy mỗi ngày",
            "x": 900,
            "y": 680,
            "size": 44,
            "at": "l7:paper"
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
          "say": "An engineer, first day on the owner's project team, at a wind farm site.",
          "sub": "Kỹ sư, ngày đầu về Ban quản lý dự án, ở lán công trường điện gió.",
          "keys": [
            "Ban quản lý dự án"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I do schedules and drawings. Contract rights are for legal, right?",
          "sub": "Em lo tiến độ, bản vẽ. Quyền lợi hợp đồng là việc pháp chế ạ?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And this is Ms Hoa, team head and Employer's Representative.",
          "sub": "Còn đây là cô Hoa, trưởng ban, kiêm Đại diện Chủ đầu tư.",
          "keys": [
            "Đại diện Chủ đầu tư"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Legal can only use what the site leaves behind. Remember that!",
          "sub": "Pháp chế chỉ dùng được những gì công trường để lại. Nhớ nha!",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Our elders said: pick up a little daily, and the bag gets full.",
          "sub": "Ông bà dặn: “Năng nhặt chặt bị.”",
          "keys": [
            "Năng nhặt chặt bị"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Today, Thảo picks up paper.",
          "sub": "Hôm nay, Thảo nhặt giấy.",
          "keys": [
            "nhặt giấy"
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
      "ref": "intro,p3"
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
            "text": "Giữ gì để không mất quyền?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:keep",
            "hl": [
              {
                "text": "không mất quyền",
                "at": "l1:lose"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: chỉ lo kỹ thuật",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:engineering",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:schedule"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Câu trả lời ngắn, ba phần:",
            "x": 2028,
            "y": 270,
            "size": 50,
            "at": "l3:three",
            "color": "accent",
            "hl": [
              {
                "text": "ba phần",
                "at": "l3:three"
              }
            ]
          },
          {
            "id": "b-s0b",
            "t": "box",
            "x": 2028,
            "y": 380,
            "w": 500,
            "h": 120,
            "at": "l4:table",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s1b",
            "t": "box",
            "x": 2568,
            "y": 380,
            "w": 500,
            "h": 120,
            "at": "l4:paper",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s2b",
            "t": "box",
            "x": 3108,
            "y": 380,
            "w": 500,
            "h": 120,
            "at": "l5:authority",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-s0",
            "t": "text",
            "text": "① Bảng thời hạn",
            "x": 2058,
            "y": 410,
            "size": 48,
            "at": "l4:table+200"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "② Ba loại giấy",
            "x": 2598,
            "y": 410,
            "size": 48,
            "at": "l4:paper+200"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "③ Ranh giới quyền",
            "x": 3138,
            "y": 410,
            "size": 48,
            "at": "l5:authority+200"
          },
          {
            "id": "b-day",
            "t": "text",
            "text": "1 ngày · 7 chặng",
            "x": 2028,
            "y": 560,
            "size": 56,
            "at": "l6:seven",
            "hl": [
              {
                "text": "7 chặng",
                "at": "l6:stops"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn (theo bài học): NĐ 210/2026/NĐ-CP · Luật Xây dựng 135/2025/QH15 · Luật Điện lực 2024",
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
          "say": "So what must the project team keep daily, to not lose rights?",
          "sub": "Vậy Ban quản lý dự án giữ gì mỗi ngày để không mất quyền?",
          "keys": [
            "không mất quyền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not only engineering and the schedule.",
          "sub": "Không phải chỉ lo kỹ thuật và tiến độ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The short answer has three parts.",
          "sub": "Câu trả lời ngắn có ba phần."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The owner's deadline table. Three kinds of paper: notices, records, a diary.",
          "sub": "Giữ bảng thời hạn của chủ đầu tư. Ba loại giấy: thông báo, biên bản, nhật ký.",
          "keys": [
            "bảng thời hạn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And know exactly where your authority ends.",
          "sub": "Và biết rõ ranh giới quyền của mình.",
          "keys": [
            "ranh giới quyền"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "One day of Thảo's, seven stops. Hard hat on.",
          "sub": "Một ngày của Thảo, bảy chặng. Đội mũ bảo hộ vào.",
          "keys": [
            "bảy chặng"
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
            "text": "① 7:00 · Cửa đổi giá",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:seven"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "e-mail"
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
            "at": "l1:seven",
            "caption": "7:00 · bàn Thảo",
            "icon": "page-facing-up"
          },
          {
            "id": "c-nd1",
            "t": "text",
            "text": "NĐ 210/2026: thiết kế → mua sắm → thiết bị",
            "x": 3996,
            "y": 140,
            "size": 28,
            "at": "l2:procurement",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-nd2",
            "t": "text",
            "text": "→ thi công → chạy thử → nghiệm thu → bàn giao",
            "x": 3996,
            "y": 180,
            "size": 28,
            "at": "l2:handover",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-ts",
            "t": "text",
            "text": "Trọn gói: nhà thầu chịu rủi ro",
            "x": 3996,
            "y": 240,
            "size": 42,
            "at": "l4:carries",
            "hl": [
              {
                "text": "chịu rủi ro",
                "at": "l4:risk"
              }
            ]
          },
          {
            "id": "c-d0b",
            "t": "box",
            "x": 3996,
            "y": 310,
            "w": 760,
            "h": 56,
            "at": "l5:Variations",
            "stroke": 4
          },
          {
            "id": "c-d1b",
            "t": "box",
            "x": 3996,
            "y": 376,
            "w": 760,
            "h": 56,
            "at": "l5:law",
            "stroke": 4
          },
          {
            "id": "c-d2b",
            "t": "box",
            "x": 3996,
            "y": 442,
            "w": 760,
            "h": 56,
            "at": "l5:adjustment",
            "stroke": 4
          },
          {
            "id": "c-d0",
            "t": "text",
            "text": "Cửa 1: Thay đổi",
            "x": 4016,
            "y": 318,
            "size": 36,
            "at": "l5:Variations+200"
          },
          {
            "id": "c-d1",
            "t": "text",
            "text": "Cửa 2: Thay đổi pháp luật",
            "x": 4016,
            "y": 384,
            "size": 36,
            "at": "l5:law+200"
          },
          {
            "id": "c-d2",
            "t": "text",
            "text": "Cửa 3: Điều chỉnh giá thoả thuận",
            "x": 4016,
            "y": 450,
            "size": 36,
            "at": "l5:adjustment+200"
          },
          {
            "id": "c-guard",
            "t": "text",
            "text": "Ban QLDA giữ cửa",
            "x": 3996,
            "y": 520,
            "size": 52,
            "at": "l6:guards",
            "color": "accent",
            "hl": [
              {
                "text": "giữ cửa",
                "at": "l6:door"
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
          "say": "Seven a.m. The contract lands on Thảo's desk.",
          "sub": "Bảy giờ sáng. Bộ hợp đồng đặt trên bàn Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Decree two ten, twenty twenty-six: EPC runs from design and procurement to handover.",
          "sub": "Nghị định 210/2026: EPC đi từ thiết kế, mua sắm, thi công đến bàn giao."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "It's lump sum. So the price never moves?",
          "sub": "Trọn gói. Vậy giá không bao giờ đổi ạ?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The contractor carries quantity and material price risk. Price moves only through set doors.",
          "sub": "Nhà thầu chịu rủi ro khối lượng, giá vật tư. Giá chỉ đổi qua những cửa định sẵn.",
          "keys": [
            "những cửa định sẵn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Variations, change in law, or an agreed price adjustment.",
          "sub": "Thay đổi, thay đổi pháp luật, điều chỉnh giá đã thoả thuận."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "More money or time goes by procedure. The project team guards the door.",
          "sub": "Thêm tiền, thêm ngày phải qua thủ tục. Ban quản lý dự án giữ cửa.",
          "keys": [
            "giữ cửa"
          ]
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
          },
          {
            "at": "l5",
            "fit": [
              "c-hs"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l5:end",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-tb",
            "t": "text",
            "text": "Mọi quyền chạy bằng thông báo",
            "x": 3996,
            "y": 600,
            "size": 42,
            "at": "l1:notices",
            "hl": [
              {
                "text": "thông báo",
                "at": "l1:notices"
              }
            ]
          },
          {
            "id": "c-tb2",
            "t": "text",
            "text": "sai người · sai hạn → mất hiệu lực",
            "x": 3996,
            "y": 660,
            "size": 34,
            "at": "l2:effect",
            "color": "coral"
          },
          {
            "id": "c-law-src",
            "t": "text",
            "text": "Luật Xây dựng 135/2025/QH15, hiệu lực chung 01/7/2026: hợp đồng bằng văn bản · ký trước: nhìn chung theo Luật 2014",
            "x": 3996,
            "y": 720,
            "size": 26,
            "at": "l3:written",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-hs",
            "t": "text",
            "text": "“Hồ sơ đâu?”",
            "x": 4976,
            "y": 610,
            "size": 64,
            "at": "l5:files",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Almost every right runs on notices: extension, claims, force majeure, termination.",
          "sub": "Mọi quyền chạy bằng thông báo: gia hạn, khiếu nại, bất khả kháng, chấm dứt.",
          "keys": [
            "chạy bằng thông báo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wrong person, address, form, or late? It may have no effect.",
          "sub": "Sai người, địa chỉ, hình thức hay trễ hạn: có thể không có hiệu lực.",
          "keys": [
            "không có hiệu lực"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The new Construction Law, from July first twenty twenty-six, requires written contracts.",
          "sub": "Luật Xây dựng 2025, hiệu lực từ 01/7/2026: hợp đồng phải bằng văn bản."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Signed earlier? Mostly the twenty fourteen law. Ask legal which applies.",
          "sub": "Ký trước đó: nhìn chung theo Luật 2014. Hỏi pháp chế luật nào áp dụng.",
          "keys": [
            "Hỏi pháp chế"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "In a dispute, the lawyer's first question: where are the files?",
          "sub": "Tranh chấp nổ ra, luật sư hỏi đầu tiên: “Hồ sơ đâu?”",
          "keys": [
            "Hồ sơ đâu?"
          ]
        }
      ],
      "ref": "p2,p3"
    },
    {
      "id": "s05",
      "module": "BRK-04",
      "data": {
        "title": "Quyền lợi hợp đồng là việc của ai?",
        "wrong": "Công trường lo kỹ thuật, pháp chế lo quyền lợi",
        "right": "Pháp chế chỉ dùng được giấy công trường để lại",
        "wrongIllus": "construction-worker",
        "rightIllus": "file-folder"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Site does engineering, lawyers do rights?",
          "sub": "Công trường lo kỹ thuật, pháp chế lo quyền lợi?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. Lawyers only have what the site leaves.",
          "sub": "Không. Pháp chế chỉ có những gì công trường để lại.",
          "keys": [
            "công trường để lại"
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 8:00 · Bản tiến độ đầu",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:eight"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6864,
            "y": 130,
            "w": 700,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "give"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "spiral-calendar",
                "bar-chart"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
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
            "at": "l1:eight",
            "caption": "8:00 · giao ban với nhà thầu",
            "icon": "spiral-calendar"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Chờ duyệt: vẫn phải làm",
            "x": 5964,
            "y": 160,
            "size": 44,
            "at": "l4:continues"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Đường găng · trình tự · logic",
            "x": 5964,
            "y": 240,
            "size": 46,
            "at": "l5:critical",
            "color": "accent",
            "hl": [
              {
                "text": "Đường găng",
                "at": "l5:critical"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "khớp tiến độ sơ bộ (phụ lục)",
            "x": 5964,
            "y": 310,
            "size": 40,
            "at": "l5:outline"
          },
          {
            "id": "d-src1",
            "t": "text",
            "text": "Điều 12 Luật Điện lực 2024: mốc từng giai đoạn ghi trong",
            "x": 5964,
            "y": 385,
            "size": 28,
            "at": "l6:Article",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-src2",
            "t": "text",
            "text": "GCN đăng ký đầu tư / văn bản chấp thuận chủ trương",
            "x": 5964,
            "y": 425,
            "size": 28,
            "at": "l6:investment",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "→ tiến độ EPC bám mốc pháp lý",
            "x": 5964,
            "y": 480,
            "size": 40,
            "at": "l7:legal",
            "hl": [
              {
                "text": "mốc pháp lý",
                "at": "l7:legal"
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
          "say": "Eight o'clock. Morning meeting with the contractor.",
          "sub": "Tám giờ. Giao ban với nhà thầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Sam, project manager for the EPC contractor. Polite, neutral.",
          "sub": "Đây là Sam, quản lý dự án phía nhà thầu EPC. Lịch sự, trung lập.",
          "keys": [
            "phía nhà thầu EPC"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Our first programme. We keep working while you review.",
          "sub": "Bản tiến độ đầu tiên. Bên chị duyệt, chúng tôi vẫn làm.",
          "pose": "give"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "True, work continues during review. But read it from day one.",
          "sub": "Đúng, chờ duyệt vẫn phải làm. Nhưng đọc kỹ ngay từ bản đầu.",
          "keys": [
            "ngay từ bản đầu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "It needs a critical path, sequence and logic, matching the outline programme.",
          "sub": "Phải có đường găng, trình tự, logic, khớp tiến độ sơ bộ.",
          "keys": [
            "đường găng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Article twelve, Electricity Law: stage milestones sit in the investment documents.",
          "sub": "Điều 12 Luật Điện lực 2024: mốc từng giai đoạn ghi trong giấy tờ đầu tư."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "The EPC programme should follow those legal milestones.",
          "sub": "Tiến độ EPC cần bám các mốc pháp lý đó.",
          "keys": [
            "mốc pháp lý"
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
      "ref": "p5"
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
            "at": "l1",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
            "ms": 600
          },
          {
            "at": "l2",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-note",
            "t": "text",
            "text": "“…dựa trên mốc tạm của chủ đầu tư;",
            "x": 5964,
            "y": 545,
            "size": 30,
            "at": "l2:note",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "d-note2",
            "t": "text",
            "text": "nếu khác sẽ điều chỉnh tương ứng”",
            "x": 5964,
            "y": 585,
            "size": 30,
            "at": "l2:note+300",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "d-door",
            "t": "text",
            "text": "= cửa gia hạn",
            "x": 5964,
            "y": 630,
            "size": 50,
            "at": "l2:door",
            "color": "coral",
            "hl": [
              {
                "text": "cửa gia hạn",
                "at": "l2:door"
              }
            ]
          },
          {
            "id": "d-next",
            "t": "text",
            "text": "→ Bài 1: đọc, duyệt tiến độ · đẩy nhanh ≠ tăng tốc được trả tiền",
            "x": 5964,
            "y": 710,
            "size": 28,
            "at": "l2:door+700",
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
          "who": "thao",
          "say": "A tiny note: based on owner's provisional dates; if different, adjusted.",
          "sub": "Ghi chú nhỏ: “dựa trên mốc tạm của chủ đầu tư; nếu khác sẽ điều chỉnh”.",
          "face": "surprised"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One tiny note can become a door to extra time.",
          "sub": "Một dòng ghi chú nhỏ có thể thành cửa gia hạn.",
          "keys": [
            "cửa gia hạn"
          ]
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
            "text": "③ 9:00 · Câu nói hiện trường",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8832,
            "y": 130,
            "w": 700,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "point",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "construction",
                "paintbrush"
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
            "at": "l1:nine",
            "caption": "9:00 · móng tua-bin",
            "icon": "construction"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Thay đổi = chỉ thị bằng văn bản",
            "x": 7932,
            "y": 170,
            "size": 44,
            "at": "l3:written",
            "hl": [
              {
                "text": "văn bản",
                "at": "l3:written"
              }
            ]
          },
          {
            "id": "e-1s",
            "t": "text",
            "text": "của CĐT / Đại diện CĐT, trong phạm vi uỷ quyền",
            "x": 7932,
            "y": 235,
            "size": 28,
            "at": "l3:authority",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Chỉ thị miệng → phải xác nhận",
            "x": 7932,
            "y": 300,
            "size": 44,
            "at": "l4:confirmed"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Gặp nhau ở câu nói vội",
            "x": 7932,
            "y": 390,
            "size": 50,
            "at": "l5:remarks",
            "color": "coral",
            "hl": [
              {
                "text": "câu nói vội",
                "at": "l5:quick"
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
          "say": "Nine o'clock. Site walk at a turbine foundation.",
          "sub": "Chín giờ. Đi hiện trường ở móng tua-bin."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, a young site supervision engineer. Full of energy.",
          "sub": "Đây là Dũng, kỹ sư tư vấn giám sát trẻ. Hăng hái hết cỡ.",
          "keys": [
            "tư vấn giám sát"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Contracts say: a Variation needs a written instruction, within written authority.",
          "sub": "Hợp đồng ghi: Thay đổi phải có chỉ thị bằng văn bản, trong phạm vi uỷ quyền.",
          "keys": [
            "chỉ thị bằng văn bản"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "They also say: the Representative's oral instructions get confirmed in writing.",
          "sub": "Cũng ghi: chỉ thị miệng của Đại diện phải xác nhận bằng văn bản."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The two meet in quick remarks on site.",
          "sub": "Hai điều gặp nhau ở câu nói vội ngoài hiện trường.",
          "keys": [
            "câu nói vội"
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
      "ref": "p7"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "street",
        "label": "9:00 · móng tua-bin",
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
          "label": "Nói miệng “làm thêm cho chắc”",
          "why": "Nhà thầu làm ngay, tháng sau đề nghị trả như một Thay đổi, kèm biên bản có chữ ký tư vấn.",
          "rule": "Nói miệng một câu, ghi giấy ngay hôm đó"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Add an extra anti-corrosion coat, to be safe. Okay!",
          "sub": "Làm thêm lớp chống ăn mòn cho chắc. Ok!",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Noted. We'll start today.",
          "sub": "Ghi nhận. Bên tôi làm ngay hôm nay.",
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
          "say": "A month later, it's billed as a Variation, with a record Dũng signed.",
          "sub": "Tháng sau, nhà thầu đòi trả như một Thay đổi, kèm biên bản Dũng ký.",
          "keys": [
            "như một Thay đổi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The project team hears of it only then. Rewind!",
          "sub": "Ban quản lý lúc đó mới biết. Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Let me report this first. It goes in today's diary.",
          "sub": "Để tôi báo lại. Tôi ghi ngay vào nhật ký hôm nay.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "sam",
          "say": "Fine. We'll wait for it in writing.",
          "sub": "Được. Chờ chỉ thị bằng văn bản.",
          "phase": "redo"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p8"
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
            "at": "l1",
            "fit": [
              "e-take",
              "e-take2"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l1:end",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-take",
            "t": "text",
            "text": "Nói miệng một câu,",
            "x": 7932,
            "y": 520,
            "size": 56,
            "at": "l1:spoken",
            "color": "accent"
          },
          {
            "id": "e-take2",
            "t": "text",
            "text": "ghi giấy ngay hôm đó",
            "x": 7932,
            "y": 600,
            "size": 56,
            "at": "l1:paper",
            "color": "accent",
            "hl": [
              {
                "text": "ngay hôm đó",
                "at": "l1:same day"
              }
            ]
          },
          {
            "id": "e-next",
            "t": "text",
            "text": "→ Bài 2: chỉ thị · đề xuất · định giá · phát triển thiết kế ≠ Thay đổi",
            "x": 7932,
            "y": 710,
            "size": 28,
            "at": "l1:day+500",
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
          "say": "Lesson: one sentence spoken, on paper the same day.",
          "sub": "Rút ra: nói miệng một câu, ghi giấy ngay hôm đó.",
          "keys": [
            "ghi giấy ngay hôm đó"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Nhà thầu xin gia hạn: trong tay mình có gì?",
        "illus": "envelope"
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
          "say": "When the contractor asks for more time, what's in your hands?",
          "sub": "Nhà thầu xin gia hạn, chủ đầu tư cần gì trong tay?",
          "keys": [
            "cần gì trong tay"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p11"
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
          },
          {
            "at": "l5",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 11:00 · Thư xin gia hạn",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:eleven"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 960,
            "y": 1220,
            "w": 700,
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
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "envelope",
                "cloud-with-rain"
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
            "at": "l1:eleven",
            "caption": "11:00 · gọi trực tuyến với nhà thầu",
            "icon": "envelope"
          },
          {
            "id": "f-cp",
            "t": "text",
            "text": "Điều kiện tiên quyết:",
            "x": 60,
            "y": 1250,
            "size": 46,
            "at": "l3:conditions",
            "color": "accent",
            "hl": [
              {
                "text": "tiên quyết",
                "at": "l3:precedent"
              }
            ]
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1330,
            "w": 40,
            "h": 40,
            "at": "l4:Notice",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 63,
            "y": 1312,
            "size": 52,
            "at": "l4:Notice+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Thông báo đúng hạn",
            "x": 124,
            "y": 1322,
            "size": 38,
            "at": "l4:Notice+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1390,
            "w": 40,
            "h": 40,
            "at": "l4:Critical",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 63,
            "y": 1372,
            "size": 52,
            "at": "l4:Critical+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Chậm đường găng hiện hành",
            "x": 124,
            "y": 1382,
            "size": 38,
            "at": "l4:Critical+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1450,
            "w": 40,
            "h": 40,
            "at": "l4:Efforts",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 63,
            "y": 1432,
            "size": 52,
            "at": "l4:Efforts+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Đã nỗ lực giảm thiểu",
            "x": 124,
            "y": 1442,
            "size": 38,
            "at": "l4:Efforts+200"
          },
          {
            "id": "f-own",
            "t": "text",
            "text": "Hồ sơ của mình:",
            "x": 60,
            "y": 1515,
            "size": 44,
            "at": "l6:approved"
          },
          {
            "id": "f-own2",
            "t": "text",
            "text": "tiến độ duyệt · báo cáo tiến độ",
            "x": 60,
            "y": 1570,
            "size": 38,
            "at": "l6:reports"
          },
          {
            "id": "f-own3",
            "t": "text",
            "text": "nhật ký · dữ liệu thời tiết",
            "x": 60,
            "y": 1620,
            "size": 38,
            "at": "l6:weather",
            "hl": [
              {
                "text": "thời tiết",
                "at": "l6:weather"
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
          "say": "Eleven o'clock. Sam calls about his extension request.",
          "sub": "Mười một giờ. Sam gọi về thư đề nghị gia hạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Heavy rain delayed us. We request extra days.",
          "sub": "Mưa lớn làm chúng tôi chậm. Xin thêm ngày.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Extensions usually come with conditions precedent.",
          "sub": "Gia hạn thường có điều kiện tiên quyết.",
          "keys": [
            "điều kiện tiên quyết"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Notice on time. Critical path delayed. Efforts to mitigate.",
          "sub": "Thông báo đúng hạn. Chậm đường găng. Nỗ lực giảm thiểu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "To check them, which of our own files do I need?",
          "sub": "Muốn kiểm, em cần hồ sơ nào của mình ạ?",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Approved programme, progress reports, the diary, weather data.",
          "sub": "Tiến độ duyệt, báo cáo tiến độ, nhật ký, dữ liệu thời tiết.",
          "keys": [
            "dữ liệu thời tiết"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s13",
      "module": "BRK-02",
      "data": {
        "kicker": "Nguyên tắc ngăn cản",
        "title": "Không gia hạn, mốc bị bỏ ngỏ",
        "hl": "bỏ ngỏ",
        "sub": "Chủ đầu tư gây chậm mà không gia hạn: mất căn cứ phạt chậm"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Twist: extensions protect the owner too.",
          "sub": "Bất ngờ: gia hạn cũng bảo vệ chủ đầu tư.",
          "keys": [
            "bảo vệ chủ đầu tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Cause delay, grant nothing? Completion may fall away.",
          "sub": "Gây chậm mà không gia hạn? Mốc có thể bị “bỏ ngỏ”.",
          "keys": [
            "bỏ ngỏ"
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
            "id": "f-pp",
            "t": "text",
            "text": "Mất căn cứ tính phạt chậm",
            "x": 60,
            "y": 1700,
            "size": 40,
            "at": "l1:basis",
            "color": "coral"
          },
          {
            "id": "f-me",
            "t": "text",
            "text": "Việc bên mình: mặt bằng · giấy phép",
            "x": 60,
            "y": 1755,
            "size": 34,
            "at": "l2:access",
            "hl": [
              {
                "text": "Việc bên mình",
                "at": "l2:own"
              }
            ]
          },
          {
            "id": "f-me2",
            "t": "text",
            "text": "đóng điện trạm · xác nhận thanh toán",
            "x": 60,
            "y": 1802,
            "size": 34,
            "at": "l2:payment"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The prevention principle. Then the owner loses its basis for delay damages.",
          "sub": "Nguyên tắc ngăn cản: chủ đầu tư mất căn cứ tính phạt chậm.",
          "keys": [
            "mất căn cứ tính phạt chậm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So track your own side: site access, permits, substation energisation, payment approvals.",
          "sub": "Vậy theo dõi việc của bên mình: mặt bằng, giấy phép, đóng điện trạm, xác nhận thanh toán.",
          "keys": [
            "việc của bên mình"
          ]
        }
      ],
      "ref": "p12"
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
            "text": "⑤ 14:00 · Bảng thời hạn",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:two"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2928,
            "y": 1220,
            "w": 700,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "alarm-clock",
                "clipboard"
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
            "at": "l1:two",
            "caption": "14:00 · cô Hoa giao việc",
            "icon": "alarm-clock"
          },
          {
            "id": "g-h0b",
            "t": "box",
            "x": 2028,
            "y": 1240,
            "w": 160,
            "h": 64,
            "at": "l3:event",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "g-h1b",
            "t": "box",
            "x": 2200,
            "y": 1240,
            "w": 160,
            "h": 64,
            "at": "l3:deadline",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "g-h2b",
            "t": "box",
            "x": 2372,
            "y": 1240,
            "w": 160,
            "h": 64,
            "at": "l3:start",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "g-h3b",
            "t": "box",
            "x": 2544,
            "y": 1240,
            "w": 160,
            "h": 64,
            "at": "l3:acts",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "g-h4b",
            "t": "box",
            "x": 2716,
            "y": 1240,
            "w": 160,
            "h": 64,
            "at": "l3:consequence",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "g-h0",
            "t": "text",
            "text": "Sự kiện",
            "x": 2040,
            "y": 1250,
            "size": 30,
            "at": "l3:event+200"
          },
          {
            "id": "g-h1",
            "t": "text",
            "text": "Thời hạn",
            "x": 2212,
            "y": 1250,
            "size": 30,
            "at": "l3:deadline+200"
          },
          {
            "id": "g-h2",
            "t": "text",
            "text": "Từ đâu",
            "x": 2384,
            "y": 1250,
            "size": 30,
            "at": "l3:start+200"
          },
          {
            "id": "g-h3",
            "t": "text",
            "text": "Ai làm",
            "x": 2556,
            "y": 1250,
            "size": 30,
            "at": "l3:acts+200"
          },
          {
            "id": "g-h4",
            "t": "text",
            "text": "Trễ thì?",
            "x": 2728,
            "y": 1250,
            "size": 30,
            "at": "l3:consequence+200"
          },
          {
            "id": "g-al",
            "t": "illus",
            "name": "alarm-clock",
            "x": 2668,
            "y": 1340,
            "size": 120,
            "at": "l4:alarm"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1352,
            "w": 40,
            "h": 40,
            "at": "l6:approval",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2031,
            "y": 1334,
            "size": 52,
            "at": "l6:approval+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Trả lời hồ sơ xin duyệt",
            "x": 2092,
            "y": 1344,
            "size": 32,
            "at": "l6:approval+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1414,
            "w": 40,
            "h": 40,
            "at": "l6:payment",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2031,
            "y": 1396,
            "size": 52,
            "at": "l6:payment+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Xác nhận hồ sơ thanh toán",
            "x": 2092,
            "y": 1406,
            "size": 32,
            "at": "l6:payment+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1476,
            "w": 40,
            "h": 40,
            "at": "l7:extensions",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2031,
            "y": 1458,
            "size": 52,
            "at": "l7:extensions+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Quyết định về gia hạn",
            "x": 2092,
            "y": 1468,
            "size": 32,
            "at": "l7:extensions+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1538,
            "w": 40,
            "h": 40,
            "at": "l7:handover",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2031,
            "y": 1520,
            "size": 52,
            "at": "l7:handover+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Chứng nhận cơ khí · COD · bàn giao",
            "x": 2092,
            "y": 1530,
            "size": 32,
            "at": "l7:handover+200"
          },
          {
            "id": "g-c4",
            "t": "box",
            "x": 2028,
            "y": 1600,
            "w": 40,
            "h": 40,
            "at": "l7:punch",
            "stroke": 5
          },
          {
            "id": "g-k4",
            "t": "text",
            "text": "✓",
            "x": 2031,
            "y": 1582,
            "size": 52,
            "at": "l7:punch+600",
            "color": "accent"
          },
          {
            "id": "g-l4",
            "t": "text",
            "text": "Góp ý danh mục tồn",
            "x": 2092,
            "y": 1592,
            "size": 32,
            "at": "l7:punch+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two p.m. The owner's deadline table.",
          "sub": "Hai giờ chiều. Cô Hoa giao việc: lập bảng thời hạn.",
          "keys": [
            "bảng thời hạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "One row per event, every column filled. Go!",
          "sub": "Mỗi sự kiện một dòng, đủ các cột. Làm nha!",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Columns: event, deadline, start point, who acts, consequence if late.",
          "sub": "Các cột: sự kiện, thời hạn, tính từ đâu, ai làm, trễ thì sao."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The owner's alarm clock.",
          "sub": "Như đồng hồ báo thức của chủ đầu tư.",
          "keys": [
            "đồng hồ báo thức"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Key rows: the owner's own deadlines.",
          "sub": "Dòng quan trọng nhất: hạn của chính chủ đầu tư.",
          "keys": [
            "của chính chủ đầu tư"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Reply to approval files. Confirm payment applications, or give reasons.",
          "sub": "Trả lời hồ sơ xin duyệt. Xác nhận thanh toán, hoặc nêu lý do."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Decide extensions. Answer completion and handover requests. Comment on the punch list.",
          "sub": "Quyết định gia hạn. Trả lời đề nghị chứng nhận cơ khí, COD, bàn giao. Góp ý danh mục tồn."
        }
      ],
      "ref": "p13,p14"
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
            "at": "l4",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 600
          },
          {
            "at": "l5",
            "fit": "G",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "g-t1",
            "t": "text",
            "text": "Bẫy 1: ngày lịch ≠ ngày làm việc",
            "x": 2028,
            "y": 1675,
            "size": 38,
            "at": "l1:calendar",
            "hl": [
              {
                "text": "ngày lịch",
                "at": "l1:calendar"
              }
            ]
          },
          {
            "id": "g-t2",
            "t": "text",
            "text": "Bẫy 2: coi như chấp thuận",
            "x": 2028,
            "y": 1730,
            "size": 38,
            "at": "l3:deemed",
            "color": "coral",
            "hl": [
              {
                "text": "coi như chấp thuận",
                "at": "l3:deemed"
              }
            ]
          },
          {
            "id": "g-t3",
            "t": "text",
            "text": "nghỉ lễ + im lặng = đã duyệt",
            "x": 2028,
            "y": 1785,
            "size": 38,
            "at": "l5:approved",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two traps. One: calendar days versus working days.",
          "sub": "Có hai bẫy. Một: ngày lịch và ngày làm việc.",
          "keys": [
            "ngày lịch và ngày làm việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Neighbouring clauses may count differently.",
          "sub": "Hai điều liền nhau có thể đếm khác nhau."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: deemed approval, when the owner stays silent.",
          "sub": "Hai: điều “coi như chấp thuận” khi chủ đầu tư im lặng.",
          "keys": [
            "coi như chấp thuận"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "A file sent before a holiday, nobody answers...",
          "sub": "Hồ sơ gửi đúng dịp lễ, không ai trả lời…",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "May be treated as approved.",
          "sub": "Có thể bị coi là đã duyệt.",
          "keys": [
            "đã duyệt"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s17",
      "module": "BRK-10",
      "data": {
        "quote": "Im lặng cũng là một câu trả lời, thường là câu “đồng ý”",
        "mark": "đồng ý",
        "by": "Rút ra từ bài học",
        "illus": "zipper-mouth-face"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Silence is an answer too. Usually, the answer is yes.",
          "sub": "Im lặng cũng là một câu trả lời, thường là câu “đồng ý”.",
          "keys": [
            "đồng ý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Pin that above your desk.",
          "sub": "Ghim câu này trên bàn làm việc."
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
            "fit": "G",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "H",
            "ms": 900
          },
          {
            "at": "l6",
            "fit": [
              "h-v4",
              "h-l4"
            ],
            "zoom": 1.2,
            "ms": 700
          },
          {
            "at": "l6:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 15:30 · Một dòng mẫu",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:three"
          },
          {
            "id": "h-memo",
            "t": "illus",
            "name": "memo",
            "x": 5316,
            "y": 1240,
            "size": 260,
            "at": "l1:sample"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "(1) Sự kiện",
            "x": 3996,
            "y": 1250,
            "size": 40,
            "at": "l2:event",
            "color": "muted"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "(2) Thời hạn",
            "x": 3996,
            "y": 1335,
            "size": 40,
            "at": "l3:deadline",
            "color": "muted"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "(3) Từ đâu",
            "x": 3996,
            "y": 1420,
            "size": 40,
            "at": "l4:counted",
            "color": "muted"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "(4) Ai làm",
            "x": 3996,
            "y": 1505,
            "size": 40,
            "at": "l5:acts",
            "color": "muted"
          },
          {
            "id": "h-l4",
            "t": "text",
            "text": "(5) Trễ thì",
            "x": 3996,
            "y": 1590,
            "size": 40,
            "at": "l6:late",
            "color": "muted"
          },
          {
            "id": "h-v0",
            "t": "text",
            "text": "nhận hồ sơ đề nghị bàn giao",
            "x": 4316,
            "y": 1250,
            "size": 40,
            "at": "l2:event+300"
          },
          {
            "id": "h-v1",
            "t": "text",
            "text": "[ ] ngày · lịch hay làm việc?",
            "x": 4316,
            "y": 1335,
            "size": 40,
            "at": "l3:deadline+300"
          },
          {
            "id": "h-v2",
            "t": "text",
            "text": "đúng mốc hợp đồng ghi",
            "x": 4316,
            "y": 1420,
            "size": 40,
            "at": "l4:counted+300"
          },
          {
            "id": "h-v3",
            "t": "text",
            "text": "cán bộ phụ trách · người ký",
            "x": 4316,
            "y": 1505,
            "size": 40,
            "at": "l5:acts+300"
          },
          {
            "id": "h-v4",
            "t": "text",
            "text": "coi như đã cấp → rủi ro",
            "x": 4316,
            "y": 1590,
            "size": 40,
            "at": "l6:late+300",
            "color": "coral",
            "hl": [
              {
                "text": "coi như đã cấp",
                "at": "l6:deemed"
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
          "say": "Three thirty. One sample row: the handover request.",
          "sub": "Ba rưỡi. Điền thử một dòng: đề nghị bàn giao.",
          "keys": [
            "một dòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Event: the handover certificate request arrives.",
          "sub": "Sự kiện: nhận đề nghị cấp chứng nhận bàn giao."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Deadline: blank days. Calendar or working days, as defined.",
          "sub": "Thời hạn: [ ] ngày, ghi rõ ngày lịch hay làm việc."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Counted from: the contract's trigger. Some count from an earlier notice.",
          "sub": "Tính từ đâu: đúng mốc hợp đồng. Có khi tính từ thông báo trước.",
          "keys": [
            "thông báo trước"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Who acts: the officer, and the authorised signatory.",
          "sub": "Ai làm: cán bộ phụ trách, người ký được uỷ quyền."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "If late: deemed issued, and risk passes to the owner.",
          "sub": "Trễ: coi như đã cấp, rủi ro sang chủ đầu tư.",
          "keys": [
            "coi như đã cấp"
          ]
        }
      ],
      "ref": "p16"
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
            "id": "h-cal",
            "t": "illus",
            "name": "spiral-calendar",
            "x": 5116,
            "y": 1650,
            "size": 150,
            "at": "l1:holiday"
          },
          {
            "id": "h-fri",
            "t": "text",
            "text": "Thứ Sáu trước kỳ lễ:",
            "x": 3996,
            "y": 1690,
            "size": 46,
            "at": "l1:Friday",
            "color": "coral"
          },
          {
            "id": "h-fri2",
            "t": "text",
            "text": "đếm lại ngay · báo người ký",
            "x": 3996,
            "y": 1760,
            "size": 46,
            "at": "l1:recount",
            "color": "accent",
            "hl": [
              {
                "text": "đếm lại ngay",
                "at": "l1:recount"
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
          "say": "Friday before a holiday? Recount at once, tell the signatory.",
          "sub": "Đến thứ Sáu trước lễ? Đếm lại ngay, báo người ký.",
          "keys": [
            "Đếm lại ngay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The alarm rings before the holiday, not after.",
          "sub": "Chuông reo trước kỳ lễ, không phải sau.",
          "face": "happy"
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s20",
      "module": "BRK-06",
      "data": {
        "title": "Ba cái túi giấy mỗi ngày",
        "items": [
          {
            "illus": "envelope",
            "text": "Thông báo"
          },
          {
            "illus": "memo",
            "text": "Biên bản"
          },
          {
            "illus": "notebook",
            "text": "Nhật ký"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Notices. Records. A diary.",
          "sub": "Thông báo. Biên bản. Nhật ký."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Three bags of paper, filled every single day.",
          "sub": "Ba cái túi giấy, ngày nào cũng nhặt.",
          "keys": [
            "Ba cái túi giấy"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p18,p19"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 16:30 · Ba loại giấy",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:four"
          },
          {
            "id": "i-p0",
            "t": "illus",
            "name": "envelope",
            "x": 5964,
            "y": 1240,
            "size": 90,
            "at": "l2:Notices"
          },
          {
            "id": "i-p0t",
            "t": "text",
            "text": "Thông báo: tạo, giữ quyền",
            "x": 6074,
            "y": 1245,
            "size": 42,
            "at": "l2:Notices+200",
            "hl": [
              {
                "text": "tạo, giữ quyền",
                "at": "l2:create"
              }
            ]
          },
          {
            "id": "i-p0s",
            "t": "text",
            "text": "đúng người · địa chỉ · hạn",
            "x": 6074,
            "y": 1305,
            "size": 32,
            "at": "l3:address",
            "color": "muted"
          },
          {
            "id": "i-p1",
            "t": "illus",
            "name": "memo",
            "x": 5964,
            "y": 1380,
            "size": 90,
            "at": "l4:Records"
          },
          {
            "id": "i-p1t",
            "t": "text",
            "text": "Biên bản: cùng thấy, cùng chốt",
            "x": 6074,
            "y": 1385,
            "size": 42,
            "at": "l4:Records+200"
          },
          {
            "id": "i-p1s",
            "t": "text",
            "text": "họp · hiện trường · thử nghiệm",
            "x": 6074,
            "y": 1445,
            "size": 32,
            "at": "l4:meetings",
            "color": "muted"
          },
          {
            "id": "i-p2",
            "t": "illus",
            "name": "notebook",
            "x": 5964,
            "y": 1520,
            "size": 90,
            "at": "l5:diary"
          },
          {
            "id": "i-p2t",
            "t": "text",
            "text": "Nhật ký: từng ngày",
            "x": 6074,
            "y": 1525,
            "size": 42,
            "at": "l5:diary+200"
          },
          {
            "id": "i-p2s",
            "t": "text",
            "text": "nhân lực · thời tiết · chỉ thị",
            "x": 6074,
            "y": 1585,
            "size": 32,
            "at": "l5:instructions",
            "color": "muted"
          },
          {
            "id": "i-next",
            "t": "text",
            "text": "→ Bài cuối chuỗi: viết sao cho thành chứng cứ khi tranh chấp",
            "x": 5964,
            "y": 1810,
            "size": 28,
            "at": "l6:dispute",
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
          "say": "Four thirty. Sorting paper into three bags.",
          "sub": "Bốn rưỡi. Xếp giấy vào ba túi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Notices create or keep rights: delay, defects, penalties.",
          "sub": "Thông báo tạo hoặc giữ quyền: chậm, khiếm khuyết, phạt.",
          "keys": [
            "tạo hoặc giữ quyền"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Right form, recipient, contract address, on time.",
          "sub": "Đúng hình thức, người nhận, địa chỉ, đúng hạn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Records: what both sides saw or agreed, like meetings or tests.",
          "sub": "Biên bản: điều hai bên cùng thấy, cùng chốt: họp, thử nghiệm."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The diary: staff, equipment, weather, incidents, instructions.",
          "sub": "Nhật ký: nhân lực, thiết bị, thời tiết, sự cố, chỉ thị.",
          "keys": [
            "sự cố, chỉ thị"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Making them count in a dispute: the series' last lesson.",
          "sub": "Viết sao thành chứng cứ khi tranh chấp: bài cuối chuỗi."
        }
      ],
      "ref": "p18,p19"
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
            "x": 6864,
            "y": 1220,
            "w": 700,
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
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "key",
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:five",
            "caption": "17:00 · ai được quyết việc gì?",
            "icon": "key"
          },
          {
            "id": "i-sb",
            "t": "text",
            "text": "Silver Book: không Kỹ sư độc lập",
            "x": 5964,
            "y": 1680,
            "size": 38,
            "at": "l2:Engineer",
            "hl": [
              {
                "text": "không Kỹ sư độc lập",
                "at": "l2:independent"
              }
            ]
          },
          {
            "id": "i-no",
            "t": "text",
            "text": "Không sửa HĐ · không miễn nghĩa vụ",
            "x": 6864,
            "y": 1720,
            "size": 34,
            "at": "l4:amending",
            "color": "coral"
          },
          {
            "id": "i-lim",
            "t": "text",
            "text": "Vượt ngưỡng → trình lãnh đạo",
            "x": 6864,
            "y": 1775,
            "size": 40,
            "at": "l6:threshold",
            "color": "accent",
            "hl": [
              {
                "text": "trình lãnh đạo",
                "at": "l6:management"
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
          "say": "Five p.m. Last question: who decides what?",
          "sub": "Năm giờ chiều. Câu cuối: ai được quyết việc gì?",
          "keys": [
            "ai được quyết việc gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The Silver Book has no independent Engineer. The Representative acts for the owner.",
          "sub": "Mẫu Silver Book không có “Kỹ sư” độc lập. Đại diện thay mặt chủ đầu tư."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Within my remit, my words bind the owner. Careful!",
          "sub": "Trong phạm vi được giao, lời cô ràng buộc chủ đầu tư. Cẩn thận!",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Limits: no amending the contract, no waiving contractor duties.",
          "sub": "Ranh giới: không tự sửa hợp đồng, không miễn nghĩa vụ nhà thầu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "No Variations or extensions over the threshold, without clear written authority.",
          "sub": "Không duyệt Thay đổi, gia hạn quá ngưỡng, trừ khi được uỷ quyền rõ bằng văn bản.",
          "keys": [
            "uỷ quyền rõ bằng văn bản"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Above the threshold, I take it to management. That's it!",
          "sub": "Vượt ngưỡng thì cô trình lãnh đạo. Rồi, vậy nha!",
          "pose": "thumb"
        }
      ],
      "ref": "p20,p21"
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
            "text": "18:00 · Cùng lán ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:six"
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
                "clipboard",
                "notebook"
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
            "at": "l1:six",
            "caption": "18:00 · lán Ban quản lý dự án",
            "icon": "clipboard"
          },
          {
            "id": "j-cb",
            "t": "illus",
            "name": "clipboard",
            "x": 7932,
            "y": 1250,
            "size": 110,
            "at": "l1:quote"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Bảng thời hạn: 5 dòng",
            "x": 8072,
            "y": 1260,
            "size": 44,
            "at": "l2:five",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Nhật ký hôm nay: đã ghi",
            "x": 8072,
            "y": 1330,
            "size": 44,
            "at": "l2:diary"
          },
          {
            "id": "j-q1",
            "t": "text",
            "text": "Hợp đồng viết ở văn phòng,",
            "x": 7932,
            "y": 1450,
            "size": 46,
            "at": "l4:written",
            "color": "muted"
          },
          {
            "id": "j-q2",
            "t": "text",
            "text": "quyền giữ ở công trường",
            "x": 7932,
            "y": 1515,
            "size": 46,
            "at": "l4:kept",
            "color": "accent",
            "hl": [
              {
                "text": "công trường",
                "at": "l4:site"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Năng nhặt chặt bị”",
            "x": 7932,
            "y": 1590,
            "size": 46,
            "at": "l5:pick",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Six p.m. Same office, same quote.",
          "sub": "Sáu giờ chiều. Vẫn lán ấy, vẫn câu ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Five owner deadlines in one table. Diary done.",
          "sub": "Năm thời hạn trong một bảng. Nhật ký ghi xong.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Good. Tomorrow, mark the critical path. That's it!",
          "sub": "Tốt. Mai đánh dấu đường găng. Rồi, vậy nha!",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Contracts are written in offices. Today, Thảo kept rights on site.",
          "sub": "Hợp đồng viết ở văn phòng. Hôm nay Thảo giữ quyền ở công trường.",
          "keys": [
            "giữ quyền ở công trường"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Pick up a little daily. Her bag starts to fill.",
          "sub": "Năng nhặt chặt bị. Túi giấy bắt đầu đầy.",
          "keys": [
            "Năng nhặt chặt bị"
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
      "ref": "p4,outro"
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
            "at": "l1",
            "fit": [
              "j-r0b",
              "j-r5b"
            ],
            "zoom": 1.05,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-r0b",
            "t": "box",
            "x": 7932,
            "y": 1715,
            "w": 250,
            "h": 64,
            "at": "l1:programme",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "j-r1b",
            "t": "box",
            "x": 8207,
            "y": 1715,
            "w": 250,
            "h": 64,
            "at": "l1:variations",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "j-r2b",
            "t": "box",
            "x": 8482,
            "y": 1715,
            "w": 250,
            "h": 64,
            "at": "l1:extensions",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "j-r3b",
            "t": "box",
            "x": 8757,
            "y": 1715,
            "w": 250,
            "h": 64,
            "at": "l1:tasks",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "j-r4b",
            "t": "box",
            "x": 9032,
            "y": 1715,
            "w": 250,
            "h": 64,
            "at": "l1:powers",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "j-r5b",
            "t": "box",
            "x": 9307,
            "y": 1715,
            "w": 250,
            "h": 64,
            "at": "l1:evidence",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "j-r0",
            "t": "text",
            "text": "1. Tiến độ",
            "x": 7947,
            "y": 1725,
            "size": 32,
            "at": "l1:programme+200"
          },
          {
            "id": "j-r1",
            "t": "text",
            "text": "2. Thay đổi",
            "x": 8222,
            "y": 1725,
            "size": 32,
            "at": "l1:variations+200"
          },
          {
            "id": "j-r2",
            "t": "text",
            "text": "3. Gia hạn",
            "x": 8497,
            "y": 1725,
            "size": 32,
            "at": "l1:extensions+200"
          },
          {
            "id": "j-r3",
            "t": "text",
            "text": "4. Việc CĐT",
            "x": 8772,
            "y": 1725,
            "size": 32,
            "at": "l1:tasks+200"
          },
          {
            "id": "j-r4",
            "t": "text",
            "text": "5. Quyền ĐDCĐT",
            "x": 9047,
            "y": 1725,
            "size": 32,
            "at": "l1:powers+200"
          },
          {
            "id": "j-r5",
            "t": "text",
            "text": "6. Chứng cứ",
            "x": 9322,
            "y": 1725,
            "size": 32,
            "at": "l1:evidence+200"
          },
          {
            "id": "j-src",
            "t": "text",
            "text": "Số ngày, ngưỡng: để trống [ ] · luật: kiểm hiện hành",
            "x": 7932,
            "y": 1655,
            "size": 28,
            "at": "l2:blank",
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
          "say": "Six lessons: programme, variations, extensions, owner tasks, Representative powers, evidence.",
          "sub": "Sáu bài theo nhịp công việc: tiến độ, thay đổi, gia hạn, việc chủ đầu tư, quyền Đại diện, chứng cứ.",
          "keys": [
            "nhịp công việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Days and thresholds stay blank, and laws need checking. Each contract differs.",
          "sub": "Số ngày, ngưỡng tiền để trống [ ]; điều luật cần kiểm văn bản hiện hành."
        }
      ],
      "ref": "p22,p23"
    },
    {
      "id": "s25",
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
            "at": "l1:table",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l2:paper",
            "fit": "I",
            "zoom": 0.8
          },
          {
            "at": "l3:silence",
            "fit": "H",
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
            "x": 3568,
            "y": 1110,
            "at": "l1:table"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7504,
            "y": 1110,
            "at": "l2:paper"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5536,
            "y": 1110,
            "at": "l3:silence+900"
          },
          {
            "id": "z-src1",
            "t": "text",
            "text": "Bài để tham khảo chung; tình huống là minh hoạ, không lấy từ hợp đồng hay dự án cụ thể nào.",
            "x": 7932,
            "y": 1805,
            "size": 24,
            "at": "l4:general",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "z-src2",
            "t": "text",
            "text": "Việc cụ thể, đọc chính hợp đồng của bạn và hỏi pháp chế.",
            "x": 7932,
            "y": 1835,
            "size": 24,
            "at": "l4:legal",
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
          "say": "So: rights are kept on site, with a deadline table.",
          "sub": "Tóm lại: quyền giữ ở công trường, bằng bảng thời hạn.",
          "keys": [
            "bảng thời hạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three kinds of paper every day: notices, records, a diary.",
          "sub": "Ba loại giấy mỗi ngày: thông báo, biên bản, nhật ký.",
          "keys": [
            "Ba loại giấy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Know your limits. And silence is an answer too.",
          "sub": "Biết ranh giới quyền. Và im lặng cũng là một câu trả lời.",
          "keys": [
            "im lặng cũng là một câu trả lời"
          ]
        },
        {
          "id": "l4",
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
        "q": "The taking over request arrives on the Friday before a long holiday, what should you do that day?",
        "options": [
          "Leave it on the desk, because holiday days never count toward any deadline",
          "Send it back to the contractor and ask them to submit it next month",
          "Count the deadline again at once and tell the authorised signatory immediately"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Đếm lại thời hạn ngay hôm đó và báo người được uỷ quyền ký. Ngày nghỉ có thể vẫn được tính nếu hợp đồng đếm theo ngày lịch."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The taking over request arrives on the Friday before a long holiday, what should you do that day?",
          "sub": "Hồ sơ đề nghị bàn giao đến vào thứ Sáu trước kỳ nghỉ dài, ngay hôm đó nên làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Recount at once and tell the signatory.",
          "sub": "Đếm lại ngay và báo người ký."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[28]"
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
          "say": "Right now: copy the owner's five reply deadlines into one table.",
          "sub": "Việc làm ngay: chép năm thời hạn trả lời của chủ đầu tư vào một bảng.",
          "keys": [
            "năm thời hạn trả lời"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next: the programme and critical path. Now, forty questions below!",
          "sub": "Bài sau: tiến độ và đường găng. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 bài MỚI theo hạt nhân (#136) + biến thể edit (#144). HOOK-24 (vật neo = câu trích p4 “Hợp đồng viết ở văn phòng, quyền giữ ở công trường”) → bối cảnh 3 nhịp → “Nhưng có một chi tiết” → ba quyền; câu neo trở lại ở khép vòng s23 (18:00 cùng lán). Dòng thời gian: NGÀY ĐẦU của Thảo ở Ban QLDA (7:00 cửa giá + thông báo p1–p3 → 8:00 tiến độ đầu p5–p6 → 9:00 hiện trường, “Khoan đã!” Dũng nói “làm thêm lớp chống ăn mòn cho chắc” p7–p10 → 11:00 thư xin gia hạn p11–p12 → 14:00 bảng thời hạn p13–p15, p17 → 15:30 dòng mẫu bàn giao p16 → 16:30 ba loại giấy p18–p19 → 17:00 ranh giới quyền p20–p21 → 18:00 khép vòng, lộ trình p22–p23). Nhân vật (w145/_series/epc-project-manager.md): Thảo, cô Hoa (trưởng Ban QLDA, Đại diện CĐT), Sam (nhà thầu), Dũng (tư vấn giám sát). Ca dao: “Năng nhặt chặt bị”. BRK: 04 (p3), 07 (rehook gia hạn), 02 (nguyên tắc ngăn cản p12), 10 (im lặng p17), 06 (ba loại giấy). Không tên người/dự án/công ty/hợp đồng thật; mẫu FIDIC nói “Silver Book”, không nêu hãng luật. Số chỉ từ bài: NĐ 210/2026, Luật 135/2025/QH15, 01/7/2026, Luật 2014, Đ12 Luật Điện lực 2024. Câu đố questions[28]. Lưu ý chung (#133) ở s25.",
  "loop": {
    "open": "s01",
    "close": "s23"
  }
};
