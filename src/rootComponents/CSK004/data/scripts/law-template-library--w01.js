// law-template-library--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "law-template-library--w01",
  "unit": {
    "audience": "law-contract-playbook",
    "slug": "law-template-library",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Chọn những mẫu hợp đồng nào để chuẩn hoá trước?",
    "series": "Bộ mẫu và sổ tay rà hợp đồng — cho trưởng phòng pháp chế, cả đội rà như một người"
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
            "id": "a-q",
            "t": "text",
            "text": "Mẫu đầu tiên nên là…?",
            "x": 60,
            "y": 60,
            "size": 60,
            "at": "l1:first",
            "hl": [
              {
                "text": "Mẫu đầu tiên",
                "at": "l1:first template"
              }
            ]
          },
          {
            "id": "a-ba",
            "t": "box",
            "x": 60,
            "y": 190,
            "w": 820,
            "h": 130,
            "at": "l2:A",
            "stroke": 5
          },
          {
            "id": "a-a",
            "t": "text",
            "text": "A · Phân phối độc quyền",
            "x": 85,
            "y": 220,
            "size": 46,
            "at": "l2:A+200"
          },
          {
            "id": "a-bb",
            "t": "box",
            "x": 60,
            "y": 360,
            "w": 820,
            "h": 130,
            "at": "l3:B",
            "stroke": 5
          },
          {
            "id": "a-b",
            "t": "text",
            "text": "B · Thoả thuận bảo mật",
            "x": 85,
            "y": 390,
            "size": 46,
            "at": "l3:B+200"
          },
          {
            "id": "a-g",
            "t": "text",
            "text": "Bạn chọn…?",
            "x": 60,
            "y": 540,
            "size": 56,
            "at": "l4:Pick",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Quick question. Your legal team builds its first template. Which contract?",
          "sub": "Câu hỏi nhanh: phòng pháp chế dựng mẫu đầu tiên. Chọn hợp đồng nào?",
          "keys": [
            "mẫu đầu tiên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A: the exclusive distribution deal. Big money, big risk.",
          "sub": "A: hợp đồng phân phối độc quyền. Tiền to, rủi ro to."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "B: the plain confidentiality agreement, signed almost every day.",
          "sub": "B: thoả thuận bảo mật bình thường, gần như ngày nào cũng ký."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Pick one. Go on, I'll wait.",
          "sub": "Chọn đi. Đét chờ."
        }
      ],
      "beats": {
        "after": 1200
      },
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
            "x": 940,
            "y": 120,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "card-index-dividers"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
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
            "at": "l1",
            "caption": "Đầu tháng · phòng pháp chế",
            "icon": "card-index-dividers"
          },
          {
            "id": "a-xa",
            "t": "strike",
            "over": "a-a",
            "at": "l5:not"
          },
          {
            "id": "a-rb",
            "t": "ring",
            "around": [
              "a-b"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l5:B"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đầu xuôi đuôi lọt”",
            "x": 60,
            "y": 640,
            "size": 52,
            "at": "l6:head",
            "color": "accent",
            "hl": [
              {
                "text": "Đầu xuôi",
                "at": "l6:head"
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
          "say": "Meet Dũng, senior legal specialist. He picks A, without blinking.",
          "sub": "Đây là Dũng, chuyên viên pháp chế lâu năm. Dũng chọn A, không chớp mắt.",
          "keys": [
            "Dũng chọn A"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Thảo, his new head of legal, with one month to build the first template.",
          "sub": "Còn đây là Thảo, trưởng phòng pháp chế mới, có một tháng để dựng mẫu đầu tiên.",
          "keys": [
            "một tháng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Biggest risk first! That's where we lose money.",
          "sub": "Rủi ro to nhất làm trước! Mất tiền là ở đó.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "But we sign it once a year. We review the other one daily.",
          "sub": "Nhưng cái đó mỗi năm ký một lần. Cái kia ngày nào cũng rà.",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The answer is B, not A.",
          "sub": "Đáp án là B, không phải A.",
          "keys": [
            "Đáp án là B"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: if the head goes through smoothly, the tail follows.",
          "sub": "Ông bà dặn: “Đầu xuôi đuôi lọt.” Mẫu đầu tiên phải chọn cho trúng.",
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
      "ref": "p5,p6"
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
            "text": "Chuẩn hoá mẫu nào trước?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:standardise",
            "hl": [
              {
                "text": "mẫu nào trước",
                "at": "l1:first"
              }
            ]
          },
          {
            "id": "b-n",
            "t": "text",
            "text": "Làm hết mọi mẫu cùng lúc",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:everything",
            "color": "muted"
          },
          {
            "id": "b-nx",
            "t": "strike",
            "over": "b-n",
            "at": "l3:trusting"
          },
          {
            "id": "b-dd",
            "t": "text",
            "text": "→ mẫu nào cũng dở dang",
            "x": 2068,
            "y": 245,
            "size": 44,
            "at": "l3:half",
            "color": "coral"
          },
          {
            "id": "b-y",
            "t": "text",
            "text": "1–2 loại ký nhiều, làm tốt",
            "x": 2028,
            "y": 340,
            "size": 56,
            "at": "l4:one or two",
            "color": "accent",
            "hl": [
              {
                "text": "làm tốt",
                "at": "l4:well"
              }
            ]
          },
          {
            "id": "b-y2",
            "t": "text",
            "text": "rồi mới mở rộng",
            "x": 2068,
            "y": 420,
            "size": 44,
            "at": "l4:expand"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Một tháng dựng mẫu · 7 chặng",
            "x": 2028,
            "y": 500,
            "size": 44,
            "at": "l5:month"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 580,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+300",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2260,
            "y": 580,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+520",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2492,
            "y": 580,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+740",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2724,
            "y": 580,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+960",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2956,
            "y": 580,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+1180",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3188,
            "y": 580,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+1400",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3420,
            "y": 580,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+1620",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T1 · kho",
            "x": 2040,
            "y": 604,
            "size": 32,
            "at": "l5:seven stops+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T1 · 2 trục",
            "x": 2272,
            "y": 604,
            "size": 32,
            "at": "l5:seven stops+640"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T1 · chọn",
            "x": 2504,
            "y": 604,
            "size": 32,
            "at": "l5:seven stops+860"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T2 · khung",
            "x": 2736,
            "y": 604,
            "size": 32,
            "at": "l5:seven stops+1080"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T2 · quốc tế",
            "x": 2968,
            "y": 604,
            "size": 32,
            "at": "l5:seven stops+1300"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T3 · mã",
            "x": 3200,
            "y": 604,
            "size": 32,
            "at": "l5:seven stops+1520"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T4 · chủ",
            "x": 3432,
            "y": 604,
            "size": 32,
            "at": "l5:seven stops+1740"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So which templates should a legal team standardise first?",
          "sub": "Vậy phòng pháp chế nên chuẩn hoá những mẫu nào trước?",
          "keys": [
            "mẫu nào trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not everything in one quarter. No legal team can do that.",
          "sub": "Không phải làm hết trong một quý. Không phòng pháp chế nào làm nổi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Rushed templates stay half finished, and the team stops trusting the whole set.",
          "sub": "Mẫu làm vội thì cái nào cũng dở dang, và đội mất niềm tin vào cả bộ.",
          "keys": [
            "mất niềm tin"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Start with one or two high volume types, finish them well, then expand.",
          "sub": "Bắt đầu với một hai loại ký nhiều, làm cho tốt, rồi mới mở rộng.",
          "keys": [
            "làm cho tốt"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Follow Thảo's month, in seven stops.",
          "sub": "Theo Thảo qua một tháng dựng mẫu, bảy chặng.",
          "keys": [
            "bảy chặng"
          ]
        }
      ],
      "ref": "intro,p1"
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
            "text": "① Tuần 1 · Mở kho hợp đồng",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4876,
            "y": 120,
            "w": 720,
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
                "file-cabinet",
                "card-file-box"
              ]
            },
            "at": "l1:archive",
            "caption": "Tuần 1, thứ Hai · tủ hồ sơ",
            "icon": "file-cabinet"
          },
          {
            "id": "c-0",
            "t": "text",
            "text": "Dữ liệu nằm sẵn trong kho",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l3:already",
            "color": "accent",
            "hl": [
              {
                "text": "trong kho",
                "at": "l3:archive"
              }
            ]
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 280,
            "w": 40,
            "h": 40,
            "at": "l4:changed",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 264,
            "size": 50,
            "at": "l4:changed+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Điều hay bị sửa nhất",
            "x": 4058,
            "y": 270,
            "size": 44,
            "at": "l4:changed+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 375,
            "w": 40,
            "h": 40,
            "at": "l4:steps in",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 359,
            "size": 50,
            "at": "l4:steps in+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Chỗ pháp chế hay vào cuộc",
            "x": 4058,
            "y": 365,
            "size": 44,
            "at": "l4:steps in+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 470,
            "w": 40,
            "h": 40,
            "at": "l5:concessions",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 454,
            "size": 50,
            "at": "l5:concessions+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Nhượng bộ từng hiệu quả",
            "x": 4058,
            "y": 460,
            "size": 44,
            "at": "l5:concessions+200"
          },
          {
            "id": "c-n",
            "t": "text",
            "text": "→ nguyên liệu cho sổ tay",
            "x": 3996,
            "y": 580,
            "size": 44,
            "at": "l6:playbook",
            "color": "coral",
            "hl": [
              {
                "text": "sổ tay",
                "at": "l6:playbook"
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
          "say": "First stop: week one, Monday. Thảo opens the contract archive.",
          "sub": "Chặng một: thứ Hai tuần một. Thảo mở kho hợp đồng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "No guessing. Last year's redlines will tell me where to start.",
          "sub": "Không đoán. Các bản đã sửa năm ngoái sẽ chỉ chị bắt đầu từ đâu.",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Right. The data is already in the company's archive.",
          "sub": "Đúng. Dữ liệu để chọn nằm sẵn trong kho hợp đồng của công ty.",
          "keys": [
            "nằm sẵn trong kho"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Look for three things. The clauses changed most, and where legal often steps in.",
          "sub": "Tìm ba thứ: điều khoản hay bị sửa nhất, chỗ pháp chế hay phải vào cuộc,"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And the concessions that actually worked.",
          "sub": "và những nhượng bộ đã từng có hiệu quả.",
          "keys": [
            "từng có hiệu quả"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Keep those notes. They feed the playbook in the next lesson.",
          "sub": "Giữ lại ghi chép ấy: đó là nguyên liệu cho sổ tay ở bài sau.",
          "keys": [
            "nguyên liệu cho sổ tay"
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
            "text": "② Tuần 1 · Bảng hai trục",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-bhl",
            "t": "box",
            "x": 6014,
            "y": 170,
            "w": 370,
            "h": 220,
            "at": "l5:rare",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "d-hhl",
            "t": "text",
            "text": "Ít · rủi ro cao",
            "x": 6032,
            "y": 190,
            "size": 36,
            "at": "l5:rare+200"
          },
          {
            "id": "d-dhl",
            "t": "text",
            "text": "pháp chế rà từng bản",
            "x": 6032,
            "y": 270,
            "size": 32,
            "at": "l5:rare+500",
            "color": "muted"
          },
          {
            "id": "d-bhh",
            "t": "box",
            "x": 6404,
            "y": 170,
            "w": 370,
            "h": 220,
            "at": "l4:detailed",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "d-hhh",
            "t": "text",
            "text": "Nhiều · rủi ro cao",
            "x": 6422,
            "y": 190,
            "size": 36,
            "at": "l4:detailed+200"
          },
          {
            "id": "d-dhh",
            "t": "text",
            "text": "mẫu + sổ tay chi tiết",
            "x": 6422,
            "y": 270,
            "size": 32,
            "at": "l4:detailed+500",
            "color": "muted"
          },
          {
            "id": "d-bll",
            "t": "box",
            "x": 6014,
            "y": 420,
            "w": 370,
            "h": 220,
            "at": "l5:last",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "d-hll",
            "t": "text",
            "text": "Ít · rủi ro thấp",
            "x": 6032,
            "y": 440,
            "size": 36,
            "at": "l5:last+200"
          },
          {
            "id": "d-dll",
            "t": "text",
            "text": "để sau cùng",
            "x": 6032,
            "y": 520,
            "size": 32,
            "at": "l5:last+500",
            "color": "muted"
          },
          {
            "id": "d-blh",
            "t": "box",
            "x": 6404,
            "y": 420,
            "w": 370,
            "h": 220,
            "at": "l3:first",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "d-hlh",
            "t": "text",
            "text": "Nhiều · rủi ro thấp",
            "x": 6422,
            "y": 440,
            "size": 36,
            "at": "l3:first+200",
            "color": "accent"
          },
          {
            "id": "d-dlh",
            "t": "text",
            "text": "làm trước, giao kinh doanh",
            "x": 6422,
            "y": 520,
            "size": 32,
            "at": "l3:first+500",
            "color": "muted"
          },
          {
            "id": "d-x",
            "t": "text",
            "text": "Tần suất →",
            "x": 6404,
            "y": 660,
            "size": 40,
            "at": "l1:Across",
            "color": "coral"
          },
          {
            "id": "d-y",
            "t": "text",
            "text": "↑ Rủi ro",
            "x": 6014,
            "y": 660,
            "size": 40,
            "at": "l2:risk",
            "color": "coral"
          },
          {
            "id": "d-r",
            "t": "text",
            "text": "Rủi ro: mất bao nhiêu?",
            "x": 6844,
            "y": 160,
            "size": 44,
            "at": "l2:lose",
            "hl": [
              {
                "text": "mất bao nhiêu",
                "at": "l2:lose"
              }
            ]
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "dữ liệu cá nhân · SHTT",
            "x": 6844,
            "y": 240,
            "size": 40,
            "at": "l2:personal"
          },
          {
            "id": "d-r3",
            "t": "text",
            "text": "đối tác nước ngoài",
            "x": 6844,
            "y": 310,
            "size": 40,
            "at": "l2:foreign"
          },
          {
            "id": "d-sv",
            "t": "text",
            "text": "→ có thể cho tự phục vụ",
            "x": 6844,
            "y": 520,
            "size": 40,
            "at": "l3:self serve",
            "color": "accent",
            "hl": [
              {
                "text": "tự phục vụ",
                "at": "l3:self serve"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Theo các hướng dẫn công khai về mô hình tự phục vụ",
            "x": 6844,
            "y": 600,
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
          "say": "Second stop: Wednesday. Draw two axes. Across: how often the company signs this type.",
          "sub": "Chặng hai: thứ Tư. Kẻ bảng hai trục. Trục ngang: tần suất, loại này công ty ký nhiều hay ít."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Up: risk. How much could we lose? Personal data, intellectual property, a foreign partner?",
          "sub": "Trục dọc: rủi ro. Sai thì mất bao nhiêu, có dính dữ liệu cá nhân, sở hữu trí tuệ, đối tác nước ngoài?",
          "keys": [
            "mất bao nhiêu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "High volume, low risk: standardise first. Sales can even self serve.",
          "sub": "Nhiều mà rủi ro thấp: chuẩn hoá đầu tiên, có thể cho kinh doanh tự phục vụ.",
          "keys": [
            "chuẩn hoá đầu tiên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "High volume, high risk: a template plus a detailed playbook.",
          "sub": "Nhiều mà rủi ro cao: mẫu kèm sổ tay chi tiết."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rare and risky: legal reviews each one. Rare and low risk: last.",
          "sub": "Ít mà rủi ro cao: pháp chế rà từng bản. Ít mà rủi ro thấp: để sau cùng."
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s05",
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
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Tuần 1 · Điền bảng",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8812,
            "y": 120,
            "w": 720,
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
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "bar-chart",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Tuần 1, thứ Sáu · danh sách năm trước",
            "icon": "bar-chart"
          },
          {
            "id": "e-h",
            "t": "text",
            "text": "Số bản · cao/thấp · 1 dòng lý do",
            "x": 7932,
            "y": 170,
            "size": 40,
            "at": "l2:columns",
            "color": "muted"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Bảo mật: nhiều, thấp",
            "x": 7932,
            "y": 250,
            "size": 46,
            "at": "l3:confidentiality",
            "color": "accent"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Văn phòng phẩm: nhiều, thấp",
            "x": 7932,
            "y": 325,
            "size": 46,
            "at": "l3:stationery"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Phân phối độc quyền: ít, cao",
            "x": 7932,
            "y": 400,
            "size": 46,
            "at": "l3:exclusive",
            "color": "coral"
          },
          {
            "id": "e-r1",
            "t": "ring",
            "around": [
              "e-1"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l4:first"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Rà gần như mỗi ngày",
            "x": 7932,
            "y": 500,
            "size": 50,
            "at": "l5:every day",
            "color": "accent",
            "hl": [
              {
                "text": "mỗi ngày",
                "at": "l5:every day"
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
          "say": "Third stop: Friday. Thảo exports last year's signed contracts from the tracking log.",
          "sub": "Chặng ba: thứ Sáu. Thảo xuất danh sách hợp đồng đã ký năm trước từ sổ theo dõi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Two columns per type: copies signed, and high or low risk, plus a one line reason.",
          "sub": "Mỗi loại hai cột: số bản đã ký, rủi ro cao hay thấp, kèm một dòng lý do.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Confidentiality and stationery land in high volume, low risk. Exclusive distribution: rare, high risk.",
          "sub": "Bảo mật, văn phòng phẩm rơi vào ô nhiều, thấp. Phân phối độc quyền rơi vào ô ít, cao."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Fine. So the confidentiality agreement goes first.",
          "sub": "Được rồi. Vậy thoả thuận bảo mật làm trước.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Because the team reviews it almost every day.",
          "sub": "Vì đội rà nó gần như mỗi ngày.",
          "keys": [
            "gần như mỗi ngày"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s06",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Ký nhiều nhất, cãi ít nhất",
        "hl": "cãi ít nhất",
        "sub": "Đó là mẫu đầu tiên nên làm"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Signed most, argued least.",
          "sub": "Ký nhiều nhất, cãi ít nhất."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That's your first template.",
          "sub": "Đó là mẫu đầu tiên nên làm.",
          "keys": [
            "mẫu đầu tiên"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
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
            "text": "④ Tuần 2 · Khung + phụ lục",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-bk",
            "t": "box",
            "x": 60,
            "y": 1260,
            "w": 780,
            "h": 300,
            "at": "l2:general",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Hợp đồng khung · ít đổi",
            "x": 85,
            "y": 1280,
            "size": 46,
            "at": "l2:general+200",
            "color": "accent"
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "bảo mật · trách nhiệm · chấm dứt",
            "x": 85,
            "y": 1360,
            "size": 36,
            "at": "l2:liability"
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "giải quyết tranh chấp",
            "x": 85,
            "y": 1420,
            "size": 36,
            "at": "l2:disputes"
          },
          {
            "id": "f-k4",
            "t": "text",
            "text": "→ rà kỹ một lần",
            "x": 85,
            "y": 1490,
            "size": 40,
            "at": "l4:once",
            "color": "accent",
            "hl": [
              {
                "text": "một lần",
                "at": "l4:once"
              }
            ]
          },
          {
            "id": "f-bp",
            "t": "box",
            "x": 900,
            "y": 1260,
            "w": 760,
            "h": 300,
            "at": "l3:commercial",
            "stroke": 5
          },
          {
            "id": "f-p",
            "t": "text",
            "text": "Phụ lục · đổi mỗi lần",
            "x": 925,
            "y": 1280,
            "size": 46,
            "at": "l3:commercial+200"
          },
          {
            "id": "f-p2",
            "t": "text",
            "text": "hàng · giá · số lượng",
            "x": 925,
            "y": 1360,
            "size": 36,
            "at": "l3:price"
          },
          {
            "id": "f-p3",
            "t": "text",
            "text": "tiến độ, ngày giao",
            "x": 925,
            "y": 1420,
            "size": 36,
            "at": "l3:schedule"
          },
          {
            "id": "f-p4",
            "t": "text",
            "text": "→ chỉ xem có lệch khung",
            "x": 925,
            "y": 1490,
            "size": 40,
            "at": "l4:annex"
          },
          {
            "id": "f-o",
            "t": "text",
            "text": "Sổ tay: loại HĐ → điều khoản",
            "x": 60,
            "y": 1610,
            "size": 40,
            "at": "l5:type",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: week two. Many contracts have two parts that change at different speeds.",
          "sub": "Chặng bốn: tuần hai. Nhiều hợp đồng có hai phần đổi theo hai nhịp khác hẳn nhau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "General terms, like confidentiality, liability, termination and disputes, rarely change between deals.",
          "sub": "Điều khoản chung như bảo mật, trách nhiệm, chấm dứt, giải quyết tranh chấp ít khi đổi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Commercial terms, like goods, price, quantity and schedule, change every time.",
          "sub": "Phần thương mại như hàng hoá, giá, số lượng, tiến độ thì đổi mỗi lần."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So a framework contract is reviewed once. Each annex is only checked for shifting it.",
          "sub": "Nên rà kỹ hợp đồng khung một lần; các lần sau chỉ xem phụ lục có làm lệch điều khoản chung không.",
          "keys": [
            "rà kỹ hợp đồng khung một lần"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And sort the playbook by contract type first, then by clause.",
          "sub": "Sổ tay cũng sắp theo loại hợp đồng trước, rồi mới theo từng điều khoản."
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s08",
      "module": "BRK-04",
      "data": {
        "title": "Đơn hàng với nhà cung cấp quen",
        "wrong": "Mỗi đơn một hợp đồng đầy đủ, sửa từ bản cũ",
        "right": "Một hợp đồng khung, mỗi đơn một phụ lục",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrongIllus": "page-facing-up",
        "rightIllus": "linked-paperclips"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before: each order, a full contract, copied from the last.",
          "sub": "Trước: mỗi đơn một hợp đồng, sửa từ bản trước.",
          "keys": [
            "sửa từ bản trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: one framework, one short annex per order.",
          "sub": "Sau: một hợp đồng khung, mỗi đơn một phụ lục.",
          "keys": [
            "mỗi đơn một phụ lục"
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
      "id": "s09",
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
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 940,
            "y": 1570,
            "w": 520,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "linked-paperclips"
              ]
            },
            "at": "l1",
            "caption": "Tuần 2 · Lan bên kinh doanh",
            "icon": "linked-paperclips"
          },
          {
            "id": "f-ph",
            "t": "text",
            "text": "Phụ lục: hàng, giá, ngày giao",
            "x": 60,
            "y": 1690,
            "size": 40,
            "at": "l3:goods",
            "color": "accent"
          },
          {
            "id": "f-ph2",
            "t": "text",
            "text": "Tách phần ít đổi, hay đổi",
            "x": 60,
            "y": 1770,
            "size": 40,
            "at": "l5:Separate",
            "color": "accent",
            "hl": [
              {
                "text": "Tách",
                "at": "l5:Separate"
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
          "say": "Lan from sales handles that supplier. She hears the plan.",
          "sub": "Lan bên kinh doanh lo nhà cung cấp ấy, nghe Thảo trình bày."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "So next order, I only fill in one page?",
          "sub": "Vậy đơn sau em chỉ điền một trang thôi ạ?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Yes. Goods, price, quantity, delivery date. Nothing else.",
          "sub": "Ừ. Hàng hoá, giá, số lượng, ngày giao. Không gì khác.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Each old copy had a few different lines, and nobody remembered why. Now annexes may not change the general terms.",
          "sub": "Bản cũ nào cũng vài câu khác nhau, không ai nhớ vì sao. Giờ phụ lục không được sửa điều khoản chung.",
          "keys": [
            "không được sửa điều khoản chung"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Separate what rarely changes from what often changes. Review the stable part once.",
          "sub": "Tách phần ít đổi khỏi phần hay đổi, để chỉ rà kỹ một lần.",
          "keys": [
            "chỉ rà kỹ một lần"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p9,p10"
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
            "at": 150,
            "fit": "G",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Quốc tế cũng vậy",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-b0",
            "t": "box",
            "x": 2028,
            "y": 1260,
            "w": 380,
            "h": 90,
            "at": "l2:four+200",
            "stroke": 4
          },
          {
            "id": "g-b1",
            "t": "box",
            "x": 2438,
            "y": 1260,
            "w": 380,
            "h": 90,
            "at": "l2:four+450",
            "stroke": 4
          },
          {
            "id": "g-b2",
            "t": "box",
            "x": 2848,
            "y": 1260,
            "w": 380,
            "h": 90,
            "at": "l2:four+700",
            "stroke": 4
          },
          {
            "id": "g-b3",
            "t": "box",
            "x": 3258,
            "y": 1260,
            "w": 380,
            "h": 90,
            "at": "l2:four+950",
            "stroke": 4
          },
          {
            "id": "g-bt0",
            "t": "text",
            "text": "Bảo mật",
            "x": 2048,
            "y": 1280,
            "size": 38,
            "at": "l2:four+350"
          },
          {
            "id": "g-bt1",
            "t": "text",
            "text": "Chia sẻ dữ liệu",
            "x": 2458,
            "y": 1280,
            "size": 38,
            "at": "l2:four+600"
          },
          {
            "id": "g-bt2",
            "t": "text",
            "text": "Xử lý dữ liệu",
            "x": 2868,
            "y": 1280,
            "size": 38,
            "at": "l2:four+850"
          },
          {
            "id": "g-bt3",
            "t": "text",
            "text": "Khung dịch vụ",
            "x": 3278,
            "y": 1280,
            "size": 38,
            "at": "l2:four+1100"
          },
          {
            "id": "g-s0",
            "t": "text",
            "text": "1. Thu thập dữ liệu",
            "x": 2028,
            "y": 1410,
            "size": 42,
            "at": "l3:collect"
          },
          {
            "id": "g-s1",
            "t": "text",
            "text": "2. Phân tích",
            "x": 2848,
            "y": 1410,
            "size": 42,
            "at": "l3:analyse"
          },
          {
            "id": "g-s2",
            "t": "text",
            "text": "3. Chuyên gia rà",
            "x": 2028,
            "y": 1490,
            "size": 42,
            "at": "l3:experts"
          },
          {
            "id": "g-s3",
            "t": "text",
            "text": "4. Duy trì liên tục",
            "x": 2848,
            "y": 1490,
            "size": 42,
            "at": "l3:maintain"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Bắt đầu nơi lặp lại nhiều nhất",
            "x": 2028,
            "y": 1610,
            "size": 54,
            "at": "l4:repeat",
            "color": "accent",
            "hl": [
              {
                "text": "lặp lại nhiều nhất",
                "at": "l4:repeat"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: thư viện chuẩn điều khoản của một hiệp hội quốc tế về hợp đồng",
            "x": 2028,
            "y": 1805,
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
          "say": "Fifth stop: end of week two. Is this only a small company habit?",
          "sub": "Chặng năm: cuối tuần hai. Đây chỉ là mẹo của công ty nhỏ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "An international contracting association also picked four repeated agreement types first.",
          "sub": "Một hiệp hội quốc tế về hợp đồng cũng chọn đúng bốn loại thoả thuận hay lặp lại để làm trước.",
          "keys": [
            "bốn loại thoả thuận hay lặp lại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Their process: collect contract data, analyse it, experts review it against principles, then maintain it.",
          "sub": "Quy trình: thu thập dữ liệu hợp đồng, phân tích, chuyên gia rà theo bộ nguyên tắc, rồi duy trì liên tục."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Even at world level, standardising starts where contracts repeat most.",
          "sub": "Kể cả ở cấp quốc tế, chuẩn hoá bắt đầu từ chỗ lặp lại nhiều nhất.",
          "keys": [
            "chỗ lặp lại nhiều nhất"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s11",
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Tuần 3 · Mã phiên bản",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth stop"
          },
          {
            "id": "h-code",
            "t": "text",
            "text": "MB-2026-02",
            "x": 3996,
            "y": 1260,
            "size": 110,
            "at": "l2:M B",
            "color": "accent",
            "hl": [
              {
                "text": "MB-2026-02",
                "at": "l2:two"
              }
            ]
          },
          {
            "id": "h-a1",
            "t": "arrow",
            "from": [
              4056,
              1410
            ],
            "to": [
              4056,
              1480
            ],
            "at": "l3:type"
          },
          {
            "id": "h-c1",
            "t": "text",
            "text": "loại HĐ",
            "x": 3996,
            "y": 1490,
            "size": 38,
            "at": "l3:type"
          },
          {
            "id": "h-a2",
            "t": "arrow",
            "from": [
              4266,
              1410
            ],
            "to": [
              4266,
              1480
            ],
            "at": "l3:year"
          },
          {
            "id": "h-c2",
            "t": "text",
            "text": "năm",
            "x": 4236,
            "y": 1490,
            "size": 38,
            "at": "l3:year"
          },
          {
            "id": "h-a3",
            "t": "arrow",
            "from": [
              4496,
              1410
            ],
            "to": [
              4496,
              1480
            ],
            "at": "l3:revision"
          },
          {
            "id": "h-c3",
            "t": "text",
            "text": "lần sửa",
            "x": 4436,
            "y": 1490,
            "size": 38,
            "at": "l3:revision"
          },
          {
            "id": "h-ft",
            "t": "text",
            "text": "In ở chân mọi trang",
            "x": 3996,
            "y": 1580,
            "size": 46,
            "at": "l4:footer",
            "hl": [
              {
                "text": "chân mọi trang",
                "at": "l4:footer"
              }
            ]
          },
          {
            "id": "h-one",
            "t": "text",
            "text": "Một thư mục chung, chỉ dẫn link",
            "x": 3996,
            "y": 1660,
            "size": 36,
            "at": "l5:folder",
            "color": "muted"
          },
          {
            "id": "h-log",
            "t": "text",
            "text": "Nhật ký: gì, vì sao, ai duyệt",
            "x": 4876,
            "y": 1270,
            "size": 38,
            "at": "l6:log",
            "hl": [
              {
                "text": "Nhật ký",
                "at": "l6:log"
              }
            ]
          },
          {
            "id": "h-old",
            "t": "text",
            "text": "Bản cũ: lưu, không xoá",
            "x": 4876,
            "y": 1350,
            "size": 44,
            "at": "l7:archive",
            "color": "coral",
            "hl": [
              {
                "text": "không xoá",
                "at": "l7:delete"
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
          "say": "Sixth stop: week three. Every template gets a code.",
          "sub": "Chặng sáu: tuần ba. Mỗi mẫu cần một mã."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Like M B, twenty twenty six, oh two.",
          "sub": "Ví dụ “MB-2026-02”.",
          "keys": [
            "MB-2026-02"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Contract type, year, revision: the sales contract, second revision of 2026.",
          "sub": "Loại hợp đồng, năm, lần sửa: hợp đồng mua bán, sửa lần hai năm 2026."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Print it in the footer of every page, so even a photo shows the version.",
          "sub": "In ở chân trang của mọi trang, để bản in hay bản chụp vẫn biết là phiên bản nào.",
          "keys": [
            "chân trang của mọi trang"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Templates live in one shared folder. Everywhere else, just a link.",
          "sub": "Mẫu chỉ nằm ở một thư mục chung; nơi khác chỉ đặt đường dẫn tới đó."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Add a short change log: date, clause, reason, approver.",
          "sub": "Kèm nhật ký thay đổi: ngày sửa, điều nào đổi, vì sao đổi, ai duyệt.",
          "keys": [
            "nhật ký thay đổi"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "And archive old versions, never delete. Old contracts still live on them.",
          "sub": "Bản cũ thì lưu, đừng xoá: hợp đồng ký theo bản cũ vẫn còn hiệu lực.",
          "keys": [
            "đừng xoá"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Tuần 3 · bàn Dũng",
        "actors": [
          {
            "id": "lan",
            "side": "left"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nhìn qua giống nhau, duyệt luôn",
          "why": "Bản tải từ email năm ngoái: điều thanh toán đã được sửa từ lâu, đọc lướt không thấy.",
          "rule": "So mã chân trang với danh sách mẫu hiện hành"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "I used the template from last year's email. Quick approval?",
          "sub": "Em dùng mẫu tải từ email năm ngoái. Duyệt nhanh giúp em nha?",
          "pose": "give"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Looks the same to me. Ok, approved!",
          "sub": "Nhìn thì y chang. Ok, duyệt luôn!",
          "face": "happy",
          "pose": "thumb",
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
          "say": "Its payment clause was fixed long ago. At a glance, you can't tell.",
          "sub": "Điều thanh toán trong bản đó đã sửa từ lâu. Nhìn qua không thấy khác.",
          "keys": [
            "Nhìn qua không thấy khác"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Footer code first. Old code. Here's the current template, Lan.",
          "sub": "Xem mã chân trang trước. Mã cũ rồi. Lan dùng mẫu hiện hành nhé.",
          "phase": "redo",
          "face": "thinking",
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
      "id": "s13",
      "module": "BRK-12",
      "data": {
        "word": "Mã phiên bản",
        "sub": "So một dòng, thay cho so từng câu",
        "from": [
          700,
          300
        ],
        "others": [
          "chân trang",
          "nhật ký",
          "bản cũ"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A version code.",
          "sub": "Mã phiên bản."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It turns a sentence by sentence check into a one line check.",
          "sub": "Nó biến việc so từng câu thành việc so một dòng.",
          "keys": [
            "so một dòng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "at": "l2",
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
            "text": "⑦ Tuần 4 · Mỗi mẫu một chủ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh stop"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6844,
            "y": 1210,
            "w": 720,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "key"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
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
            "at": "l1:Hoa",
            "caption": "Tuần 4 · Ban giám đốc",
            "icon": "key"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1270,
            "w": 40,
            "h": 40,
            "at": "l5:collects",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1254,
            "size": 50,
            "at": "l5:collects+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Nhận góp ý",
            "x": 6026,
            "y": 1260,
            "size": 44,
            "at": "l5:collects+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1355,
            "w": 40,
            "h": 40,
            "at": "l5:proposes",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1339,
            "size": 50,
            "at": "l5:proposes+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Đề xuất sửa, trình duyệt",
            "x": 6026,
            "y": 1345,
            "size": 44,
            "at": "l5:proposes+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1440,
            "w": 40,
            "h": 40,
            "at": "l5:log",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1424,
            "size": 50,
            "at": "l5:log+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Cập nhật nhật ký",
            "x": 6026,
            "y": 1430,
            "size": 44,
            "at": "l5:log+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1525,
            "w": 40,
            "h": 40,
            "at": "l5:users",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1509,
            "size": 50,
            "at": "l5:users+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Báo người dùng",
            "x": 6026,
            "y": 1515,
            "size": 44,
            "at": "l5:users+200"
          },
          {
            "id": "i-x",
            "t": "text",
            "text": "Không chủ → mẫu cũ đi",
            "x": 5964,
            "y": 1630,
            "size": 42,
            "at": "l6:gap",
            "color": "coral",
            "hl": [
              {
                "text": "mẫu cũ đi",
                "at": "l6:ages"
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
          "say": "Seventh stop: week four. Thảo reports to Cô Hoa, now on the board of management.",
          "sub": "Chặng bảy: tuần bốn. Thảo báo cáo Cô Hoa, nay ở Ban giám đốc.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Good template. But who looks after it next year?",
          "sub": "Mẫu tốt đấy. Nhưng sang năm ai trông nó?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "One owner per template. Dũng holds this one.",
          "sub": "Mỗi mẫu một người giữ. Mẫu này Dũng giữ.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Right. Let's do it!",
          "sub": "Rồi, vậy nha!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The owner collects comments, proposes changes, gets approval, updates the log, and tells users.",
          "sub": "Người giữ mẫu nhận góp ý, đề xuất sửa, trình duyệt, cập nhật nhật ký, báo cho người dùng."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "No owner, and feedback falls into a gap while the template ages.",
          "sub": "Không có người giữ, góp ý rơi vào khoảng trống, mẫu cũ đi lúc nào không hay.",
          "keys": [
            "mẫu cũ đi"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1400
        }
      ],
      "ref": "p17"
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
          }
        ],
        "items": [
          {
            "id": "i-404",
            "t": "text",
            "text": "Điều 404: có lợi bên kia",
            "x": 6844,
            "y": 1740,
            "size": 38,
            "at": "l1:Article",
            "color": "coral",
            "hl": [
              {
                "text": "Điều 404",
                "at": "l1:Article"
              }
            ]
          },
          {
            "id": "i-56",
            "t": "text",
            "text": "NĐ 56/2024: DNNN soạn mẫu",
            "x": 5964,
            "y": 1710,
            "size": 40,
            "at": "l3:Decree",
            "hl": [
              {
                "text": "NĐ 56/2024",
                "at": "l3:Decree"
              }
            ]
          },
          {
            "id": "i-qc",
            "t": "text",
            "text": "DN khác: ghi vào quy chế",
            "x": 5964,
            "y": 1770,
            "size": 40,
            "at": "l4:rules",
            "color": "accent"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: Điều 404 BLDS 2015 (bài tổng hợp công khai); NĐ 56/2024/NĐ-CP",
            "x": 5964,
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
          "say": "The owner also guards clarity. Under Article four oh four, unfavourable drafter terms favour the other side.",
          "sub": "Người giữ mẫu còn lo độ rõ câu chữ. Theo Điều 404 Bộ luật Dân sự, nội dung bất lợi do bên soạn đưa vào được giải thích có lợi cho bên kia.",
          "keys": [
            "độ rõ câu chữ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your company drafts its own templates, so one vague line repeats in every contract.",
          "sub": "Công ty dùng mẫu của mình là bên soạn, nên một câu mơ hồ là rủi ro lặp lại ở mọi hợp đồng.",
          "keys": [
            "rủi ro lặp lại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In state enterprises, Decree fifty six of 2024 makes template drafting a legal unit task.",
          "sub": "Với doanh nghiệp nhà nước, Nghị định 56/2024 ghi “soạn thảo các loại mẫu hợp đồng” là nhiệm vụ của tổ chức pháp chế."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Other companies can write it into internal rules, with each template's keeper by name.",
          "sub": "Doanh nghiệp khác có thể ghi vào quy chế nội bộ, kèm tên người giữ từng mẫu.",
          "keys": [
            "quy chế nội bộ"
          ]
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s16",
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
            "text": "Cuối tháng · cùng bàn ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:month"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8812,
            "y": 1210,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "card-index-dividers",
                "check-mark-button"
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
                  "shot": "E-SHOT-05",
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
            "caption": "Cuối tháng · phòng pháp chế",
            "icon": "card-index-dividers"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1270,
            "w": 40,
            "h": 40,
            "at": "l1:done",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1254,
            "size": 50,
            "at": "l1:done+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Bảo mật: xong, có chủ",
            "x": 7994,
            "y": 1260,
            "size": 40,
            "at": "l1:done+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1370,
            "w": 40,
            "h": 40,
            "at": "l3:framework",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1354,
            "size": 50,
            "at": "l3:framework+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Tiếp: mua bán khung + phụ lục",
            "x": 7994,
            "y": 1360,
            "size": 40,
            "at": "l3:framework+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1470,
            "w": 40,
            "h": 40,
            "at": "l3:exclusive",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1454,
            "size": 50,
            "at": "l3:exclusive+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Phân phối độc quyền: rà từng bản",
            "x": 7994,
            "y": 1460,
            "size": 40,
            "at": "l3:exclusive+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Đầu xuôi đuôi lọt”",
            "x": 7932,
            "y": 1610,
            "size": 52,
            "at": "l4:head",
            "color": "accent",
            "hl": [
              {
                "text": "đuôi lọt",
                "at": "l4:tail"
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
          "say": "End of the month. Same desk. The confidentiality template is done, with an owner.",
          "sub": "Cuối tháng. Vẫn bàn ấy. Mẫu bảo mật đã xong, có người giữ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Next one? The exclusive distribution deal, surely!",
          "sub": "Mẫu tiếp theo? Chắc chắn là phân phối độc quyền!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Next is the purchase framework with annexes. The exclusive deal stays a case by case review.",
          "sub": "Tiếp theo là hợp đồng khung mua bán kèm phụ lục. Phân phối độc quyền vẫn rà từng bản.",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "If the head goes through smoothly, the tail follows.",
          "sub": "“Đầu xuôi đuôi lọt.” Chọn trúng mẫu đầu, cả bộ đi theo.",
          "keys": [
            "Đầu xuôi đuôi lọt"
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
      "ref": "p6,p10"
    },
    {
      "id": "s17",
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
            "fit": "H",
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
            "at": "l1:risk"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1560,
            "y": 1130,
            "at": "l2:annexes"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5496,
            "y": 1130,
            "at": "l3:owner"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "d-hlh"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l1:low"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức nghề tham khảo, không phải tư vấn cho hợp đồng cụ thể. Nhân vật là minh hoạ; đối chiếu văn bản mới nhất.",
            "x": 2028,
            "y": 715,
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
          "say": "So: sort by volume and risk. Start with high volume, low risk.",
          "sub": "Tóm lại: xếp theo tần suất và rủi ro. Bắt đầu từ ô nhiều, rủi ro thấp.",
          "keys": [
            "nhiều, rủi ro thấp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Split the framework from the annexes.",
          "sub": "Tách hợp đồng khung với phụ lục.",
          "keys": [
            "Tách hợp đồng khung"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Give each template a code, a log, and one owner.",
          "sub": "Gắn mã phiên bản, nhật ký, và giao mỗi mẫu cho một người.",
          "keys": [
            "một người"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "General professional knowledge only, not advice on a specific contract. Check the latest texts.",
          "sub": "Kiến thức nghề tham khảo, không phải tư vấn cho hợp đồng cụ thể. Đối chiếu văn bản mới nhất."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next: when partners push back, how far may your team move?",
          "sub": "Bài tiếp theo: đối tác đòi sửa thì đội được lùi tới đâu?"
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s18",
      "module": "QUIZ-01",
      "data": {
        "q": "Which quadrant should be standardised first?",
        "options": [
          "Low volume and high risk, because these deals are the most interesting",
          "High volume and low risk, which can also be handed to the business",
          "Low volume and low risk, because they are the easiest to draft"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "card-index-dividers",
        "why": "Ô nhiều mà rủi ro thấp: chuẩn hoá trước, có thể giao kinh doanh tự dùng."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which quadrant should be standardised first?",
          "sub": "Ô nào nên chuẩn hoá đầu tiên?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "High volume and low risk, which can also be handed to the business.",
          "sub": "Ô nhiều mà rủi ro thấp, có thể giao kinh doanh tự dùng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Signed most, argued least. That's where each hour saves the most review time.",
          "sub": "Ký nhiều nhất, cãi ít nhất: mỗi giờ công bỏ ra tiết kiệm nhiều giờ rà nhất."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[6]"
    },
    {
      "id": "s19",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Chọn mẫu đầu tiên cho trúng"
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
  "hook": "HOOK-21",
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21: câu hỏi để đoán sai (mẫu đầu tiên: A phân phối độc quyền / B thoả thuận bảo mật; đáp án B, p5, p6). Đét đứng trái + bảng trắng 10 ô theo THÁNG ĐẦU Thảo (trưởng phòng mới) dựng mẫu: tuần 1 kho hợp đồng (p2) → bảng hai trục (p3, p4) → điền bảng (p5; Thảo làm thay chị Ngọc) + BRK-02 (p6) → tuần 2 khung + phụ lục (p7, p8), BRK-04 Trước/Sau (p9), Lan bên kinh doanh (p9, p10) → quốc tế cũng vậy (p11, p12) → tuần 3 mã “MB-2026-02”, nhật ký (p13, p14) + “Khoan đã!” mẫu tải từ email cũ (p15; Lan đóng vai anh Khoa) + BRK-12 mã phiên bản (p16) → tuần 4 Cô Hoa (Ban giám đốc), chủ sở hữu (p17), Điều 404, NĐ 56/2024 (p18, p19) → cuối tháng cùng bàn (khép vòng “Đầu xuôi đuôi lọt”). Nhân vật: Thảo, Dũng, Lan, Cô Hoa. Không nêu tên doanh nghiệp/tổ chức tư nhân có thật (Ironclad, TermScout → hướng dẫn công khai; WorldCC → một hiệp hội quốc tế về hợp đồng). Lưu ý chung #133 ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s16"
  }
};
