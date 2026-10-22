// contractor-capacity-consortium--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "contractor-capacity-consortium--w01",
  "unit": {
    "audience": "epc-procurement",
    "slug": "contractor-capacity-consortium",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Đánh giá năng lực và liên danh nhà thầu: trách nhiệm liên đới nghĩa là gì?",
    "series": "Từ chọn thầu đến điều khoản EPC — cho mua sắm đấu thầu, biến kết quả thương thảo thành câu chữ đòi được tiền"
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
            "text": "Thành viên xây lắp làm hỏng.",
            "x": 60,
            "y": 80,
            "size": 60,
            "at": "l2:fails"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "Chủ đầu tư đòi ai?",
            "x": 60,
            "y": 170,
            "size": 72,
            "at": "l2:claim",
            "color": "coral",
            "hl": [
              {
                "text": "đòi ai",
                "at": "l2:claim"
              }
            ]
          },
          {
            "id": "a-ba",
            "t": "box",
            "x": 60,
            "y": 320,
            "w": 760,
            "h": 130,
            "at": "l3:Only",
            "stroke": 5
          },
          {
            "id": "a-ta",
            "t": "text",
            "text": "A. Chỉ thành viên đó",
            "x": 100,
            "y": 350,
            "size": 52,
            "at": "l3:Only+200"
          },
          {
            "id": "a-bb",
            "t": "box",
            "x": 900,
            "y": 320,
            "w": 760,
            "h": 130,
            "at": "l3:any",
            "stroke": 5
          },
          {
            "id": "a-tb",
            "t": "text",
            "text": "B. Bất kỳ ai, cả phần",
            "x": 940,
            "y": 350,
            "size": 52,
            "at": "l3:any+200"
          },
          {
            "id": "a-s",
            "t": "text",
            "text": "Thoả thuận liên danh: chia phần rõ",
            "x": 60,
            "y": 520,
            "size": 40,
            "at": "l1:clearly",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "You're the owner. A three-member consortium splits the work clearly in its agreement.",
          "sub": "Bạn là chủ đầu tư. Liên danh ba thành viên chia phần việc rõ ràng trong thoả thuận.",
          "keys": [
            "chia phần việc rõ ràng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The building member fails. Who can you claim from?",
          "sub": "Thành viên xây lắp làm hỏng. Bạn đòi được ai?",
          "keys": [
            "đòi được ai"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Only that member? Or any member, for everything?",
          "sub": "Chỉ thành viên đó? Hay bất kỳ ai, cho cả phần?"
        }
      ],
      "beats": {
        "after": 1500
      },
      "ref": "p10"
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
            "at": "l4",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "A",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "a-ax",
            "t": "strike",
            "over": "a-ta",
            "at": "l2:contract"
          },
          {
            "id": "a-k",
            "t": "text",
            "text": "Tuỳ câu chữ hợp đồng EPC",
            "x": 60,
            "y": 585,
            "size": 40,
            "at": "l2:contract",
            "color": "accent",
            "hl": [
              {
                "text": "hợp đồng EPC",
                "at": "l2:contract"
              }
            ]
          },
          {
            "id": "a-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 130,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l3"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "happy",
                  "enter": "pop",
                  "at": "l5"
                }
              ],
              "props": [
                "clipboard",
                "busts-in-silhouette"
              ]
            },
            "at": "l3",
            "caption": "Ngày chấm thầu · ban mua sắm",
            "icon": "clipboard"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Ba cây chụm lại…”",
            "x": 60,
            "y": 660,
            "size": 48,
            "at": "l7:mountain",
            "color": "accent",
            "hl": [
              {
                "text": "chụm lại",
                "at": "l7:together"
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
          "say": "Picked A? Most people do.",
          "sub": "Chọn A? Phần đông cũng vậy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But the answer lives in one sentence of the EPC contract, not in the consortium agreement.",
          "sub": "Nhưng đáp án nằm ở một câu trong hợp đồng EPC, không phải trong thoả thuận liên danh.",
          "keys": [
            "một câu trong hợp đồng EPC"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo again, head of procurement. Today is scoring day.",
          "sub": "Gặp lại Thảo, trưởng ban mua sắm. Hôm nay là ngày chấm thầu.",
          "keys": [
            "ngày chấm thầu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Three consortia passed the technical round. Prices are close.",
          "sub": "Ba liên danh qua vòng kỹ thuật. Giá chênh nhau không nhiều.",
          "pose": "hold"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And Dũng, her young officer, already has a favourite.",
          "sub": "Còn Dũng, chuyên viên trẻ, đã có ứng viên ruột.",
          "keys": [
            "ứng viên ruột"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Easy! Pick the biggest name. Big name, big shoulders.",
          "sub": "Dễ mà! Chọn tên tuổi lớn nhất. Tên to thì vai cũng to.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "One tree is no forest, three trees together make a mountain. But who carries the mountain?",
          "sub": "“Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao.” Nhưng núi ấy ai gánh?",
          "keys": [
            "ba cây chụm lại"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "intro,p10"
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
            "text": "Liên danh nào đủ sức?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:enough",
            "hl": [
              {
                "text": "đủ sức",
                "at": "l1:strong"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Chấm theo phần việc",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:share",
            "color": "accent",
            "hl": [
              {
                "text": "phần việc",
                "at": "l2:share"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Liên đới ghi trong hợp đồng",
            "x": 2028,
            "y": 250,
            "size": 50,
            "at": "l2:joint"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Cấm đổi thành viên",
            "x": 2028,
            "y": 330,
            "size": 50,
            "at": "l3:changes",
            "color": "coral"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Mỏng vốn → công ty mẹ",
            "x": 2028,
            "y": 410,
            "size": 50,
            "at": "l3:parent",
            "hl": [
              {
                "text": "công ty mẹ",
                "at": "l3:parent"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l4:stops+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l4:stops+650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l4:stops+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l4:stops+1150",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l4:stops+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l4:stops+1650",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Chấm",
            "x": 2048,
            "y": 580,
            "size": 36,
            "at": "l4:stops+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Hồ sơ",
            "x": 2318,
            "y": 580,
            "size": 36,
            "at": "l4:stops+770"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Liên đới",
            "x": 2588,
            "y": 580,
            "size": 36,
            "at": "l4:stops+1020"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Cam đoan",
            "x": 2858,
            "y": 580,
            "size": 36,
            "at": "l4:stops+1270"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Công ty mẹ",
            "x": 3128,
            "y": 580,
            "size": 36,
            "at": "l4:stops+1520"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Giữa dự án",
            "x": 3398,
            "y": 580,
            "size": 36,
            "at": "l4:stops+1770"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So which consortium is truly strong enough? And if one member breaks mid-way, who do you claim from?",
          "sub": "Vậy liên danh nào thật sự đủ sức? Và nếu một thành viên vỡ giữa chừng, chủ đầu tư đòi ai?",
          "keys": [
            "đủ sức"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Short answer: score each member's work share, and write joint liability into the EPC contract.",
          "sub": "Đáp ngắn: chấm năng lực theo phần việc từng thành viên, ghi trách nhiệm liên đới ngay trong hợp đồng EPC.",
          "keys": [
            "theo phần việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Forbid member changes without consent, and bring the parent company when the contractor is thin.",
          "sub": "Cấm đổi thành viên khi chưa đồng ý, và đòi công ty mẹ đứng sau khi nhà thầu mỏng vốn.",
          "keys": [
            "công ty mẹ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Six stops, from scoring day to the middle of the project.",
          "sub": "Sáu chặng, từ ngày chấm thầu đến giữa dự án."
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Ngày chấm · Ba nhóm",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:groups"
          },
          {
            "id": "c-i1",
            "t": "illus",
            "name": "gear",
            "x": 3996,
            "y": 160,
            "size": 80,
            "at": "l2:technical"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Kỹ thuật: cùng loại nguồn",
            "x": 4096,
            "y": 170,
            "size": 48,
            "at": "l2:technical",
            "hl": [
              {
                "text": "cùng loại nguồn",
                "at": "l2:same"
              }
            ]
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "công nghệ đã kiểm chứng",
            "x": 4136,
            "y": 240,
            "size": 40,
            "at": "l2:proven",
            "color": "muted"
          },
          {
            "id": "c-i2",
            "t": "illus",
            "name": "money-bag",
            "x": 3996,
            "y": 310,
            "size": 80,
            "at": "l3:financial"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Tài chính: gánh dòng tiền",
            "x": 4096,
            "y": 320,
            "size": 48,
            "at": "l3:financial"
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "phát hành được bảo lãnh",
            "x": 4136,
            "y": 390,
            "size": 40,
            "at": "l3:guarantees",
            "color": "muted"
          },
          {
            "id": "c-i3",
            "t": "illus",
            "name": "factory",
            "x": 3996,
            "y": 460,
            "size": 80,
            "at": "l4:experience"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Kinh nghiệm: quy mô, công trường",
            "x": 4096,
            "y": 470,
            "size": 44,
            "at": "l4:experience"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Luật mới từ 01/7/2026",
            "x": 4896,
            "y": 170,
            "size": 48,
            "at": "l5:July",
            "color": "coral",
            "hl": [
              {
                "text": "01/7/2026",
                "at": "l5:July"
              }
            ]
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Tiêu chí năng lực: pháp chế kiểm",
            "x": 4896,
            "y": 250,
            "size": 40,
            "at": "l6:check"
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "trước khi phát hành",
            "x": 4936,
            "y": 320,
            "size": 40,
            "at": "l6:issue",
            "color": "muted"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: hệ thống văn bản xây dựng có hiệu lực từ 01/7/2026",
            "x": 4896,
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
          "say": "First stop: scoring day. Three groups to score.",
          "sub": "Chặng một: ngày chấm thầu. Ba nhóm cần chấm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Technical: plants of the same source, with proven technology.",
          "sub": "Kỹ thuật: đã làm nhà máy cùng loại nguồn, công nghệ đã kiểm chứng.",
          "keys": [
            "cùng loại nguồn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Financial: enough cash between payment milestones, and guarantees from acceptable banks.",
          "sub": "Tài chính: đủ gánh dòng tiền giữa các mốc thanh toán, phát hành được bảo lãnh ở ngân hàng đạt chuẩn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Experience: similar size, source and site conditions to your plant.",
          "sub": "Kinh nghiệm: quy mô, loại nguồn, điều kiện công trường gần với dự án của mình."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Careful: the 2025 Construction Law and its decrees apply from the first of July, twenty twenty six.",
          "sub": "Cẩn thận: Luật Xây dựng 2025 và loạt nghị định hướng dẫn có hiệu lực từ 01/7/2026.",
          "keys": [
            "01/7/2026"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "One decree covers capacity, so legal must check your criteria before you issue the bid documents.",
          "sub": "Có nghị định riêng về năng lực, nên pháp chế phải kiểm tiêu chí trước khi phát hành hồ sơ mời thầu.",
          "keys": [
            "pháp chế phải kiểm"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "text": "② Chiều · Hai liên danh",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:afternoon"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 130,
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
                  "face": "thinking"
                }
              ],
              "props": [
                "bar-chart",
                "clipboard"
              ]
            },
            "at": "l1:afternoon",
            "caption": "Chiều ngày chấm · bảng điểm",
            "icon": "bar-chart"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Liên danh 1: đầu tàu mạnh",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "l2:first"
          },
          {
            "id": "d-1b",
            "t": "text",
            "text": "xây lắp: chưa làm ven biển",
            "x": 6004,
            "y": 240,
            "size": 40,
            "at": "l2:coast",
            "color": "coral"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Liên danh 2: đều tay",
            "x": 5964,
            "y": 320,
            "size": 46,
            "at": "l3:second"
          },
          {
            "id": "d-2b",
            "t": "text",
            "text": "nhưng tài chính mỏng",
            "x": 6004,
            "y": 390,
            "size": 40,
            "at": "l3:thin",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: that afternoon. Two consortia, almost the same price.",
          "sub": "Chặng hai: chiều hôm ấy. Hai liên danh, giá gần bằng nhau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The first has a lead member with many similar plants. But its building member has never worked on the coast.",
          "sub": "Liên danh một có thành viên đứng đầu làm nhiều nhà máy cùng loại, nhưng thành viên xây lắp chưa từng làm ven biển.",
          "keys": [
            "chưa từng làm ven biển"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The second has even experience, but thin finances.",
          "sub": "Liên danh hai kinh nghiệm đều hơn, nhưng tài chính mỏng.",
          "keys": [
            "tài chính mỏng"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s05",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Chiều ngày chấm · cộng điểm",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "thao",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Cộng gộp kinh nghiệm cả liên danh",
          "why": "Phần xây lắp ven biển do thành viên chưa từng làm gánh.",
          "rule": "Chấm theo phần việc, không theo tên liên danh"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Add up the whole consortium's plants. Consortium one wins easily!",
          "sub": "Cộng hết nhà máy của cả liên danh. Liên danh một thắng dễ!",
          "pose": "explain",
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
          "say": "The lead member's plants won't pour the coastal foundations. Its building member will.",
          "sub": "Nhà máy của thành viên đứng đầu đâu có đổ móng ven biển. Thành viên xây lắp mới đổ.",
          "keys": [
            "Thành viên xây lắp mới đổ"
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
          "say": "Score each member on the work it signed up for, with its own experience.",
          "sub": "Chấm từng thành viên theo phần việc nó nhận, bằng kinh nghiệm của chính nó.",
          "phase": "redo",
          "pose": "explain"
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
      "id": "s06",
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
            "id": "d-3",
            "t": "text",
            "text": "Kinh nghiệm: của chính người nhận",
            "x": 5964,
            "y": 480,
            "size": 40,
            "at": "l1:own",
            "hl": [
              {
                "text": "của chính người nhận",
                "at": "l1:own"
              }
            ]
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Mỏng vốn → hỏi thêm bảo đảm",
            "x": 5964,
            "y": 550,
            "size": 40,
            "at": "l2:thin"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Chấm theo phần việc, không theo tên",
            "x": 5964,
            "y": 640,
            "size": 44,
            "at": "l3:share",
            "color": "accent",
            "hl": [
              {
                "text": "không theo tên",
                "at": "l3:name"
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
          "say": "Whoever takes a share brings their own experience for that share.",
          "sub": "Thành viên nhận phần nào thì kinh nghiệm phần đó phải là của chính thành viên ấy.",
          "keys": [
            "của chính thành viên ấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thin finances? Ask for extra security, like a parent company guarantee.",
          "sub": "Tài chính mỏng thì hỏi thêm biện pháp bảo đảm, như bảo lãnh công ty mẹ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Score capacity by work share, not by the consortium's name.",
          "sub": "Chấm năng lực theo phần việc, không theo tên liên danh.",
          "keys": [
            "không theo tên liên danh"
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
            "text": "③ Hôm sau · Mở thoả thuận",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:agreement"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Ai là thành viên, ai làm gì",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:who"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Ai là thành viên đứng đầu",
            "x": 7932,
            "y": 240,
            "size": 46,
            "at": "l2:lead",
            "color": "accent",
            "hl": [
              {
                "text": "đứng đầu",
                "at": "l2:lead"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Bảng giá, đồng tiền: tách",
            "x": 7932,
            "y": 310,
            "size": 44,
            "at": "l3:currency"
          },
          {
            "id": "e-e",
            "t": "text",
            "text": "Lỗi hay gặp:",
            "x": 8832,
            "y": 160,
            "size": 48,
            "at": "l4:mistakes",
            "color": "coral"
          },
          {
            "id": "e-e1",
            "t": "text",
            "text": "• bìa bản dịch sai tên",
            "x": 8832,
            "y": 225,
            "size": 38,
            "at": "l4:cover"
          },
          {
            "id": "e-e2",
            "t": "text",
            "text": "• thông báo gửi công ty ngoài",
            "x": 8832,
            "y": 280,
            "size": 38,
            "at": "l5:notices"
          },
          {
            "id": "e-e3",
            "t": "text",
            "text": "• sửa đổi thiếu một chữ ký",
            "x": 8832,
            "y": 335,
            "size": 38,
            "at": "l5:signature"
          },
          {
            "id": "e-e4",
            "t": "text",
            "text": "• báo đứng đầu trong [ ] ngày",
            "x": 8832,
            "y": 390,
            "size": 38,
            "at": "l6:days",
            "hl": [
              {
                "text": "[ ] ngày",
                "at": "l6:days"
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
          "say": "Third stop: the next morning. Thảo opens the consortium agreement.",
          "sub": "Chặng ba: sáng hôm sau. Thảo mở thoả thuận liên danh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It says who the members are, who does what, and who is the lead member.",
          "sub": "Nó cho biết ai là thành viên, ai làm phần nào, ai là thành viên đứng đầu.",
          "keys": [
            "thành viên đứng đầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The EPC contract names every member in full. Price schedules and currency often split by member.",
          "sub": "Hợp đồng EPC ghi tên đầy đủ từng thành viên; bảng giá và đồng tiền thanh toán thường tách theo thành viên."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Common mistakes: a translated cover page with another member's name.",
          "sub": "Lỗi hay gặp: trang bìa bản dịch ghi tên khác bản gốc.",
          "keys": [
            "Lỗi hay gặp"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Notices sent to a group company that isn't a member. An amendment missing one member's signature.",
          "sub": "Mục thông báo ghi một công ty cùng tập đoàn không phải thành viên. Văn bản sửa đổi thiếu chữ ký của một thành viên."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And one-time duties, like naming the lead member within so many days, that nobody tracks.",
          "sub": "Và nghĩa vụ một lần sau ký, như thông báo thành viên đứng đầu trong [ ] ngày, không ai theo dõi.",
          "keys": [
            "không ai theo dõi"
          ]
        }
      ],
      "ref": "p5,p6"
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
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8992,
            "y": 460,
            "w": 440,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "surprised"
                }
              ],
              "props": [
                "page-facing-up",
                "magnifying-glass-tilted-left"
              ]
            },
            "at": "l1",
            "caption": "Sáng hôm sau · bàn Dũng",
            "icon": "magnifying-glass-tilted-left"
          },
          {
            "id": "e-ck-c0",
            "t": "box",
            "x": 7932,
            "y": 430,
            "w": 40,
            "h": 40,
            "at": "l2:signed",
            "stroke": 5
          },
          {
            "id": "e-ck-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 414,
            "size": 50,
            "at": "l2:signed+600",
            "color": "accent"
          },
          {
            "id": "e-ck-l0",
            "t": "text",
            "text": "Đủ chữ ký mọi thành viên",
            "x": 7994,
            "y": 420,
            "size": 38,
            "at": "l2:signed+200"
          },
          {
            "id": "e-ck-c1",
            "t": "box",
            "x": 7932,
            "y": 510,
            "w": 40,
            "h": 40,
            "at": "l2:match",
            "stroke": 5
          },
          {
            "id": "e-ck-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 494,
            "size": 50,
            "at": "l2:match+600",
            "color": "accent"
          },
          {
            "id": "e-ck-l1",
            "t": "text",
            "text": "Phần việc khớp hồ sơ năng lực",
            "x": 7994,
            "y": 500,
            "size": 38,
            "at": "l2:match+200"
          },
          {
            "id": "e-ck-c2",
            "t": "box",
            "x": 7932,
            "y": 590,
            "w": 40,
            "h": 40,
            "at": "l3:names",
            "stroke": 5
          },
          {
            "id": "e-ck-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 574,
            "size": 50,
            "at": "l3:names+600",
            "color": "accent"
          },
          {
            "id": "e-ck-l2",
            "t": "text",
            "text": "Tên khớp: bìa, các bên, ký",
            "x": 7994,
            "y": 580,
            "size": 38,
            "at": "l3:names+200"
          },
          {
            "id": "e-ck-c3",
            "t": "box",
            "x": 7932,
            "y": 670,
            "w": 40,
            "h": 40,
            "at": "l3:tracks",
            "stroke": 5
          },
          {
            "id": "e-ck-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 654,
            "size": 50,
            "at": "l3:tracks+600",
            "color": "accent"
          },
          {
            "id": "e-ck-l3",
            "t": "text",
            "text": "Có người theo dõi sau ký",
            "x": 7994,
            "y": 660,
            "size": 38,
            "at": "l3:tracks+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Found one! The cover page says a different company name.",
          "sub": "Thấy một lỗi! Trang bìa ghi tên công ty khác.",
          "face": "surprised",
          "pose": "hold"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Good catch. Thảo's checklist: signed by every member, work shares match the scored capacity.",
          "sub": "Bắt tốt đấy. Danh sách của Thảo: có chữ ký mọi thành viên, phần việc khớp hồ sơ năng lực đã chấm.",
          "keys": [
            "khớp hồ sơ năng lực"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Same names on cover, parties, notices and signature page. And someone who tracks the one-time duties.",
          "sub": "Tên giống nhau ở bìa, phần các bên, mục thông báo, trang ký. Và có người theo dõi nghĩa vụ một lần."
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Thoả thuận đã chia phần, chủ đầu tư phải theo?",
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
          "who": "det",
          "say": "If the members split the work, must the owner follow the split?",
          "sub": "Thoả thuận đã chia phần, chủ đầu tư phải theo?",
          "keys": [
            "phải theo"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p10"
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
          },
          {
            "at": "l3",
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
            "text": "④ Thương thảo · Liên đới",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:round"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l4"
                }
              ],
              "props": [
                "handshake",
                "balance-scale"
              ]
            },
            "at": "l2:Sam",
            "caption": "Vòng thương thảo · phòng họp",
            "icon": "handshake"
          },
          {
            "id": "f-s",
            "t": "text",
            "text": "Sam: “ai lo phần nấy”",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l3:share",
            "color": "muted"
          },
          {
            "id": "f-sx",
            "t": "strike",
            "over": "f-s",
            "at": "l6:whole"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Liên đới = đòi bất kỳ ai",
            "x": 60,
            "y": 1350,
            "size": 48,
            "at": "l6:any",
            "color": "accent",
            "hl": [
              {
                "text": "bất kỳ ai",
                "at": "l6:any"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "cho toàn bộ nghĩa vụ",
            "x": 100,
            "y": 1420,
            "size": 44,
            "at": "l6:whole"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Chia nhau: việc nội bộ",
            "x": 60,
            "y": 1500,
            "size": 44,
            "at": "l7:internal"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "BLDS 2015: số điều, pháp chế kiểm",
            "x": 60,
            "y": 1580,
            "size": 34,
            "at": "l7:Civil",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: the negotiation round.",
          "sub": "Chặng bốn: vòng thương thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sam is back, for the lead member. Polite, as always.",
          "sub": "Sam trở lại, thay mặt thành viên đứng đầu. Lịch sự như mọi khi.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Our agreement is clear. Each member answers for its own share.",
          "sub": "Thoả thuận của chúng tôi rõ rồi. Thành viên nào chịu phần nấy.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Mr. Bình, head of legal, puts down his red pencil.",
          "sub": "Bác Bình, trưởng pháp chế, đặt cây bút chì đỏ xuống.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. To the owner, the EPC contract decides. Not your agreement.",
          "sub": "Từ từ đã. Với chủ đầu tư, hợp đồng EPC mới quyết định. Không phải thoả thuận của các bạn.",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Jointly and severally liable means the owner can claim the whole obligation from any one member.",
          "sub": "Liên đới nghĩa là chủ đầu tư có quyền đòi bất kỳ thành viên nào thực hiện toàn bộ nghĩa vụ.",
          "keys": [
            "bất kỳ thành viên nào"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "How members share it is their internal business. The Civil Code covers it; legal checks the article.",
          "sub": "Các thành viên chia nhau thế nào là việc nội bộ. Bộ luật Dân sự 2015 có quy định; số điều, pháp chế kiểm.",
          "keys": [
            "việc nội bộ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p8,p10"
    },
    {
      "id": "s11",
      "module": "BRK-10",
      "data": {
        "quote": "Mỗi người chịu trách nhiệm liên đới đối với toàn bộ nghĩa vụ của Nhà thầu",
        "mark": "liên đới",
        "by": "Câu mẫu chung",
        "illus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Each member, jointly and severally liable for all obligations.",
          "sub": "Mỗi người chịu liên đới toàn bộ nghĩa vụ.",
          "keys": [
            "liên đới"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A common sample clause.",
          "sub": "Một câu mẫu chung."
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
            "id": "f-5",
            "t": "text",
            "text": "Không ghi rõ → cãi ở chỗ giao",
            "x": 60,
            "y": 1660,
            "size": 42,
            "at": "l1:unclear",
            "color": "coral",
            "hl": [
              {
                "text": "chỗ giao",
                "at": "l1:meets"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Liên đới: trong hợp đồng EPC",
            "x": 60,
            "y": 1740,
            "size": 44,
            "at": "l2:inside",
            "color": "accent",
            "hl": [
              {
                "text": "hợp đồng EPC",
                "at": "l2:contract"
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
          "say": "If the contract is unclear, the fight starts where equipment meets construction.",
          "sub": "Hợp đồng không ghi rõ thì hai bên cãi nhau mỗi thành viên chịu đến đâu, nhất là ở chỗ giao giữa thiết bị và xây lắp.",
          "keys": [
            "chỗ giao"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So joint liability must sit inside the EPC contract, not only the consortium agreement.",
          "sub": "Vậy liên đới phải nằm trong hợp đồng EPC, không chỉ trong thoả thuận liên danh.",
          "keys": [
            "nằm trong hợp đồng EPC"
          ]
        }
      ],
      "ref": "p10,p11"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thương thảo · Cam đoan",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:promises"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Thành lập hợp pháp · có thẩm quyền",
            "x": 2028,
            "y": 1260,
            "size": 40,
            "at": "l2:formed"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Giấy phép · không vi phạm luật",
            "x": 2028,
            "y": 1330,
            "size": 40,
            "at": "l2:licences"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Không tranh chấp đe doạ",
            "x": 2028,
            "y": 1400,
            "size": 40,
            "at": "l3:disputes"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Trả được nợ · không xung đột",
            "x": 2028,
            "y": 1470,
            "size": 40,
            "at": "l3:debts"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Liên danh: mỗi người tự cam đoan",
            "x": 2028,
            "y": 1550,
            "size": 40,
            "at": "l4:own",
            "color": "accent",
            "hl": [
              {
                "text": "tự cam đoan",
                "at": "l4:own"
              }
            ]
          },
          {
            "id": "g-6",
            "t": "text",
            "text": "Cam đoan sai: vi phạm ngay",
            "x": 2928,
            "y": 1260,
            "size": 46,
            "at": "l5:moment",
            "color": "coral",
            "hl": [
              {
                "text": "vi phạm ngay",
                "at": "l5:moment"
              }
            ]
          },
          {
            "id": "g-7",
            "t": "text",
            "text": "≠ cam kết thực hiện",
            "x": 2928,
            "y": 1340,
            "size": 44,
            "at": "l5:perform"
          },
          {
            "id": "g-8",
            "t": "text",
            "text": "Sự kiện đổi → báo ngay",
            "x": 2928,
            "y": 1420,
            "size": 44,
            "at": "l6:promptly"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: same round, the general promises, called representations.",
          "sub": "Chặng năm: cùng vòng ấy, phần cam đoan chung.",
          "keys": [
            "cam đoan chung"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Validly formed, with authority to sign, licences in place, no breach of law.",
          "sub": "Thành lập hợp pháp, có thẩm quyền ký, có giấy phép cần thiết, không vi phạm pháp luật."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No threatening disputes, able to pay debts, capable, no conflict of interest.",
          "sub": "Không có tranh chấp đe doạ, có khả năng trả nợ, có năng lực, không xung đột lợi ích."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "With a consortium, each member gives its own.",
          "sub": "Với liên danh, mỗi thành viên tự đưa ra cam đoan của mình.",
          "keys": [
            "tự đưa ra cam đoan"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A representation is not a promise to perform. If false, it's a breach the moment it's given.",
          "sub": "Cam đoan khác cam kết thực hiện: cam đoan sai là vi phạm ngay lúc đưa ra, vì chủ đầu tư dựa vào đó để ký.",
          "keys": [
            "vi phạm ngay lúc đưa ra"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And the contractor must report promptly when an event makes one untrue.",
          "sub": "Hợp đồng nên buộc nhà thầu báo ngay khi có sự kiện làm cam đoan không còn đúng."
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s14",
      "module": "BRK-04",
      "data": {
        "title": "Câu cam đoan",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Nhà thầu có đủ năng lực thực hiện Hợp đồng",
        "right": "Mỗi thành viên, tại Ngày Ký: hợp pháp, có thẩm quyền",
        "wrongIllus": "cloud",
        "rightIllus": "magnifying-glass-tilted-left"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before: capable. Too vague to prove false.",
          "sub": "Trước: đủ năng lực. Quá chung, khó bắt sai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: each member, at signing, checkable.",
          "sub": "Sau: từng thành viên, tại Ngày Ký, kiểm được.",
          "keys": [
            "kiểm được"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-k",
            "t": "text",
            "text": "Càng cụ thể, càng dễ viện dẫn",
            "x": 2928,
            "y": 1540,
            "size": 44,
            "at": "l1:specific",
            "color": "accent",
            "hl": [
              {
                "text": "dễ viện dẫn",
                "at": "l1:rely"
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
          "say": "The more specific the representation, the easier it is to rely on when it turns out false.",
          "sub": "Cam đoan càng cụ thể, càng dễ viện dẫn khi sai.",
          "keys": [
            "càng dễ viện dẫn"
          ]
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
            "at": "l5",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Cuối tuần · Công ty mẹ",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:weekend"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "binh",
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
                "hot-beverage",
                "office-building"
              ]
            },
            "at": "l1:weekend",
            "caption": "Cuối tuần · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Công ty dự án mới lập",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l2:new"
          },
          {
            "id": "h-1b",
            "t": "text",
            "text": "ít tài sản",
            "x": 4036,
            "y": 1330,
            "size": 42,
            "at": "l2:assets",
            "color": "coral"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Bảo lãnh: bên thứ ba làm thay",
            "x": 3996,
            "y": 1410,
            "size": 42,
            "at": "l3:third",
            "hl": [
              {
                "text": "bên thứ ba",
                "at": "l3:third"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "1 trong 9 biện pháp bảo đảm",
            "x": 3996,
            "y": 1480,
            "size": 40,
            "at": "l4:nine"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Điều 83 LXD: được đòi bảo đảm",
            "x": 3996,
            "y": 1550,
            "size": 40,
            "at": "l5:eighty",
            "color": "accent"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Điều 83 Luật Xây dựng 135/2025/QH15; BLDS 2015",
            "x": 3996,
            "y": 1620,
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
          "say": "Sixth stop: the weekend. Thảo meets Mr. Bình for coffee, with one worry.",
          "sub": "Chặng sáu: cuối tuần. Thảo hẹn Bác Bình uống cà phê, mang theo một nỗi lo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The best bidder is a brand new project company. Almost no assets.",
          "sub": "Nhà thầu tốt nhất là công ty dự án mới lập của một tập đoàn. Gần như không có tài sản.",
          "pose": "hold",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Then ask the parent. A guarantee means a third party performs if the obligor doesn't.",
          "sub": "Thì đòi công ty mẹ. Bảo lãnh là bên thứ ba cam kết thực hiện thay khi bên có nghĩa vụ không làm.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "It's one of nine security measures in the Civil Code. Legal checks the article.",
          "sub": "Đó là một trong chín biện pháp bảo đảm của Bộ luật Dân sự; số điều, pháp chế kiểm.",
          "keys": [
            "chín biện pháp bảo đảm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "And Article eighty three of the Construction Law lets the owner ask for security.",
          "sub": "Còn Điều 83 Luật Xây dựng 2025 cho bên giao thầu quyền yêu cầu biện pháp bảo đảm.",
          "keys": [
            "Điều 83"
          ]
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s17",
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
            "id": "h-a",
            "t": "text",
            "text": "A: chỉ bảo lãnh ngân hàng",
            "x": 3996,
            "y": 1680,
            "size": 40,
            "at": "l1:only",
            "color": "muted"
          },
          {
            "id": "h-ax",
            "t": "strike",
            "over": "h-a",
            "at": "l2:parent"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: + công ty mẹ, toàn bộ",
            "x": 3996,
            "y": 1740,
            "size": 44,
            "at": "l2:parent",
            "color": "accent",
            "hl": [
              {
                "text": "công ty mẹ",
                "at": "l2:parent"
              }
            ]
          },
          {
            "id": "h-c",
            "t": "text",
            "text": "Chốt: phạm vi · giới hạn [ ] · thời hạn",
            "x": 4836,
            "y": 1765,
            "size": 32,
            "at": "l3:scope"
          },
          {
            "id": "h-d",
            "t": "text",
            "text": "Sửa phụ lục → xin xác nhận",
            "x": 4836,
            "y": 1812,
            "size": 32,
            "at": "l4:amendment",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Option A: only a bank guarantee. Repairs cost more? You chase an empty subsidiary.",
          "sub": "Cách A: chỉ bảo lãnh ngân hàng. Chi phí sửa lỗi vượt bảo lãnh? Đòi một công ty con gần như rỗng.",
          "keys": [
            "gần như rỗng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B: add a parent guarantee for all obligations, with the parent's approval. Longer talks, but group assets stand behind.",
          "sub": "Cách B: thêm bảo lãnh công ty mẹ cho toàn bộ nghĩa vụ, kèm nghị quyết phê duyệt. Thương thảo lâu hơn, nhưng tài sản tập đoàn đứng sau.",
          "keys": [
            "tài sản tập đoàn đứng sau"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Settle the scope, the limit, a term that runs until obligations end, and a legal opinion on authority.",
          "sub": "Chốt: phạm vi, giới hạn [ ], thời hạn kéo tới khi hết nghĩa vụ, giấy phê duyệt và ý kiến pháp lý về thẩm quyền ký."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And every amendment needs the guarantor's confirmation.",
          "sub": "Mỗi lần ký phụ lục sửa đổi, lấy xác nhận của bên bảo lãnh.",
          "keys": [
            "xác nhận của bên bảo lãnh"
          ]
        }
      ],
      "ref": "p20,p21,p22"
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
            "text": "Giữa dự án · Một lá thư",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:letter"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1220,
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
                  "face": "worried"
                }
              ],
              "props": [
                "envelope",
                "clipboard"
              ]
            },
            "at": "l1:project",
            "caption": "Giữa dự án · ban mua sắm",
            "icon": "envelope"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Xây lắp gặp khó tài chính",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l1:trouble",
            "color": "coral"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Đứng đầu: “đã mời công ty khác”",
            "x": 5964,
            "y": 1335,
            "size": 40,
            "at": "l2:replace"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Cấm đổi khi chưa đồng ý",
            "x": 5964,
            "y": 1420,
            "size": 44,
            "at": "l4:consent",
            "hl": [
              {
                "text": "Cấm đổi",
                "at": "l4:forbids"
              }
            ]
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "1. Chưa đồng ý",
            "x": 5964,
            "y": 1500,
            "size": 44,
            "at": "l5:not",
            "color": "accent"
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "2. Xin hồ sơ năng lực mới",
            "x": 5964,
            "y": 1570,
            "size": 44,
            "at": "l5:capacity"
          },
          {
            "id": "i-6",
            "t": "text",
            "text": "3. Thành viên cũ vẫn liên đới",
            "x": 5964,
            "y": 1640,
            "size": 44,
            "at": "l5:still",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn liên đới",
                "at": "l5:still"
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
          "say": "Last stop: the middle of the project. The building member is in financial trouble, and a letter arrives.",
          "sub": "Chặng cuối: giữa dự án. Thành viên xây lắp gặp khó khăn tài chính, và một lá thư đến.",
          "keys": [
            "một lá thư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The lead member says they've invited another company to replace it. Just say yes?",
          "sub": "Thành viên đứng đầu báo đã mời công ty khác vào thay. Mình đồng ý luôn nhé chị?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Not yet. Let me open the contract.",
          "sub": "Chưa. Để chị mở hợp đồng.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "The contract forbids changing members without written consent, and forbids assigning the contract.",
          "sub": "Hợp đồng cấm đổi thành phần khi chưa có đồng ý bằng văn bản, và cấm chuyển nhượng hợp đồng.",
          "keys": [
            "cấm đổi thành phần"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Reply: not consented. Send the new company's capacity file. The old member is still jointly liable.",
          "sub": "Trả lời: chưa đồng ý. Gửi hồ sơ năng lực công ty mới. Thành viên cũ vẫn chịu liên đới.",
          "pose": "explain",
          "face": "happy"
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s19",
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
            "id": "i-k",
            "t": "text",
            "text": "Thành viên mới: chấm như cũ",
            "x": 5964,
            "y": 1730,
            "size": 46,
            "at": "l1:same",
            "color": "accent",
            "hl": [
              {
                "text": "chấm như cũ",
                "at": "l1:check"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Chụm lại” thì cùng gánh núi",
            "x": 6864,
            "y": 1780,
            "size": 40,
            "at": "l2:together",
            "color": "accent",
            "hl": [
              {
                "text": "cùng gánh",
                "at": "l2:carry"
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
          "say": "Without those two sentences, a weak member could be swapped for a company nobody scored. A newcomer passes the same capacity check.",
          "sub": "Thiếu hai câu ấy, liên danh có thể thay thành viên yếu bằng công ty chưa từng được chấm. Thành viên mới phải qua cửa chấm năng lực như cũ.",
          "keys": [
            "qua cửa chấm năng lực"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three trees together make a mountain. In an EPC contract, together they also carry it.",
          "sub": "“Ba cây chụm lại nên hòn núi cao.” Trong hợp đồng EPC, chụm lại thì cùng gánh núi.",
          "keys": [
            "cùng gánh núi"
          ]
        }
      ],
      "ref": "p12,p14"
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
            "at": "l1:steps",
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
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l6",
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7464,
            "y": 40,
            "at": "l2:One"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1560,
            "y": 1130,
            "at": "l3:Two"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 7464,
            "y": 1130,
            "at": "l4:Three"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 5496,
            "y": 1130,
            "at": "l5:Four"
          },
          {
            "id": "j-t",
            "t": "text",
            "text": "Bốn việc · làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l6:consortium"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Lấy thoả thuận liên danh",
            "x": 7932,
            "y": 1270,
            "size": 46,
            "at": "l6:agreement",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Đối chiếu phần việc ↔ năng lực",
            "x": 7932,
            "y": 1350,
            "size": 44,
            "at": "l6:match"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Dự thảo: có câu liên đới?",
            "x": 7932,
            "y": 1430,
            "size": 44,
            "at": "l6:joint",
            "hl": [
              {
                "text": "liên đới",
                "at": "l6:joint"
              }
            ]
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "Có câu cấm đổi thành viên?",
            "x": 7932,
            "y": 1510,
            "size": 44,
            "at": "l6:changes"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: thứ tự ưu tiên",
            "x": 7932,
            "y": 1610,
            "size": 38,
            "at": "l7:Next",
            "color": "muted"
          },
          {
            "id": "j-src1",
            "t": "text",
            "text": "Bài để tham khảo chung; tình huống là minh hoạ, không lấy từ hợp đồng, dự án hay pháp nhân cụ thể nào.",
            "x": 7932,
            "y": 1730,
            "size": 26,
            "at": "l7",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-src2",
            "t": "text",
            "text": "Việc cụ thể, đối chiếu văn bản hiện hành và hỏi pháp chế.",
            "x": 7932,
            "y": 1770,
            "size": 26,
            "at": "l7",
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
          "say": "So, four steps.",
          "sub": "Tóm lại, bốn bước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: score capacity by each member's share.",
          "sub": "Một: chấm năng lực theo phần việc từng thành viên.",
          "keys": [
            "theo phần việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: joint liability inside the EPC contract.",
          "sub": "Hai: liên đới nằm trong hợp đồng EPC."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: no new members without consent and a capacity check.",
          "sub": "Ba: không thêm thành viên mới khi chưa đồng ý và chưa chấm năng lực."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Four: thin subsidiary, call in the parent.",
          "sub": "Bốn: công ty con mỏng vốn, đòi công ty mẹ đứng sau.",
          "keys": [
            "công ty mẹ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Today: take the consortium agreement, match shares with capacity, check the draft for joint liability and no member changes.",
          "sub": "Việc làm ngay: lấy thoả thuận liên danh, đối chiếu phần việc với năng lực, kiểm dự thảo có câu liên đới và cấm đổi thành viên chưa.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Next: where bid documents sit in the order of precedence. General information only, not advice on any real contract.",
          "sub": "Bài tiếp: hồ sơ thầu đứng đâu trong thứ tự ưu tiên. Đây là thông tin chung, không phải tư vấn cho hợp đồng cụ thể."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s21",
      "module": "QUIZ-01",
      "data": {
        "q": "What does joint and several liability allow the owner to do?",
        "options": [
          "Claim from each member only the exact percentage written in their own agreement",
          "Claim only from the lead member, and never from any other member of the group",
          "Claim the whole obligation from any single member, not only that member's share"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "busts-in-silhouette",
        "why": "Liên đới: đòi bất kỳ thành viên nào cho toàn bộ nghĩa vụ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What does joint and several liability allow the owner to do?",
          "sub": "Trách nhiệm liên đới cho phép chủ đầu tư làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Claim the whole obligation from any single member, not only that member's share.",
          "sub": "Đòi bất kỳ thành viên nào thực hiện toàn bộ nghĩa vụ, không chỉ phần của thành viên đó."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "How members share it is their internal business.",
          "sub": "Các thành viên chia nhau thế nào là việc nội bộ."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[13]"
    },
    {
      "id": "s22",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Năng lực và liên danh nhà thầu"
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
  "notes": "#145 bài MỚI (bài 1 chuỗi epc-procurement) theo hạt nhân (#136) + biến thể edit (#144). HOOK-21 (đoán sai, p10): liên danh chia phần rõ, thành viên xây lắp làm hỏng → đòi ai? A/B, lặng 1,5 s → lật: tuỳ một câu trong hợp đồng EPC. Dòng thời gian (sự kiện): ngày chấm thầu (p1, p2) → chiều: hai liên danh (p3), “Khoan đã!” Dũng cộng gộp kinh nghiệm (p3, p4) → sáng hôm sau mở thoả thuận liên danh, Dũng bắt lỗi trang bìa (p5–p7) → BRK-07 → vòng thương thảo: Sam “ai lo phần nấy”, Bác Bình: liên đới (p8, p10; BRK-10 câu mẫu p9; p11) → cam đoan (p15, p16; BRK-04 Trước/Sau p17; p18) → cuối tuần cà phê với Bác Bình: bảo lãnh công ty mẹ, Cách A/B (p19–p22) → giữa dự án: thư đổi thành viên, Thảo trả lời đúng nguồn p13 (p12–p14) → khép vòng với ca dao “Ba cây chụm lại nên hòn núi cao” → chụm lại thì cùng gánh. Nhân vật: Thảo, Dũng, Sam, Bác Bình. Số chỉ từ bài: 01/7/2026, Đ83 LXD 2025, chín biện pháp BLDS 2015, [ ] ngày, [ ]. Câu đố questions[13].",
  "loop": {
    "open": "s01",
    "close": "s18"
  }
};
