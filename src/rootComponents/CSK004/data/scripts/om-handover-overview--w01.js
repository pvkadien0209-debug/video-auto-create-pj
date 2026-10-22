// om-handover-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "om-handover-overview--w01",
  "unit": {
    "audience": "epc-om-operator",
    "slug": "om-handover-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Đội vận hành nhận nhà máy từ nhà thầu EPC cần biết gì?",
    "series": "Nhận và vận hành nhà máy sau EPC — cho đội O&M, nhận đủ hồ sơ và bắt nhà thầu sửa đúng lỗi"
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
              "a-f",
              "a-h"
            ],
            "zoom": 1.3,
            "move": "cut"
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "a-f",
            "t": "illus",
            "name": "file-folder",
            "x": 70,
            "y": 110,
            "size": 190,
            "at": "l1:folder"
          },
          {
            "id": "a-h",
            "t": "text",
            "text": "Hồ sơ đề nghị bàn giao",
            "x": 290,
            "y": 150,
            "size": 58,
            "at": "l1:request",
            "hl": [
              {
                "text": "bàn giao",
                "at": "l1:handover"
              }
            ]
          },
          {
            "id": "a-d",
            "t": "text",
            "text": "Trả lời trong [ ] ngày",
            "x": 290,
            "y": 250,
            "size": 52,
            "at": "l2:reply",
            "color": "coral",
            "hl": [
              {
                "text": "[ ] ngày",
                "at": "l2:days"
              }
            ]
          },
          {
            "id": "a-t",
            "t": "text",
            "text": "Người ký: đang đi công tác",
            "x": 290,
            "y": 335,
            "size": 44,
            "at": "l2:trip",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A thick folder lands on a control room desk. The cover says: request for handover.",
          "sub": "Một tập hồ sơ dày đặt xuống bàn phòng điều khiển. Bìa ghi: đề nghị bàn giao.",
          "keys": [
            "đề nghị bàn giao"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Inside, one small line: reply within so many days. And the person who signs is on a business trip.",
          "sub": "Bên trong một dòng nhỏ: trả lời trong [ ] ngày. Mà người ký thì đang đi công tác.",
          "keys": [
            "trả lời trong [ ] ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hold on to this folder. It comes back later.",
          "sub": "Nhớ tập hồ sơ này. Lát nữa nó quay lại."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p15"
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
            "at": "l1",
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
            "x": 900,
            "y": 110,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "desktop-computer",
                "high-voltage"
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
            "caption": "Phòng điều khiển · mùa chạy thử",
            "icon": "high-voltage"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Ăn cây nào rào cây nấy”",
            "x": 60,
            "y": 560,
            "size": 54,
            "at": "l4:fence",
            "color": "accent",
            "hl": [
              {
                "text": "rào cây nấy",
                "at": "l4:fence"
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
          "say": "An electrical engineer, just moved from the technical team to lead a shift in operations.",
          "sub": "Kỹ sư điện, vừa từ ban kỹ thuật chuyển sang làm trưởng ca đội vận hành."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "In three months the contractor hands us this wind farm. What do we get, and when is it ours?",
          "sub": "Ba tháng nữa nhà thầu trao nhà máy gió này. Mình nhận những gì, từ ngày nào là việc của mình?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: eat from a tree, then fence that tree.",
          "sub": "Ông bà dặn: “Ăn cây nào rào cây nấy.”",
          "keys": [
            "Ăn cây nào rào cây nấy"
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
            "text": "Nhận nhà máy: cần biết gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:know",
            "hl": [
              {
                "text": "cần biết gì",
                "at": "l1:know"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Nhận những gì?",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:receive"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Từ ngày nào mình chịu?",
            "x": 2568,
            "y": 160,
            "size": 50,
            "at": "l2:which day"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Hỏng thì ai sửa?",
            "x": 3218,
            "y": 160,
            "size": 50,
            "at": "l2:fixes"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: lễ trao chìa khoá",
            "x": 2028,
            "y": 260,
            "size": 50,
            "at": "l3:ribbon",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:key"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: giấy tờ, mốc ngày, quyền",
            "x": 2028,
            "y": 345,
            "size": 58,
            "at": "l3:papers",
            "color": "accent",
            "hl": [
              {
                "text": "giấy tờ, mốc ngày, quyền",
                "at": "l3:rights"
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
          "say": "So what must an operations team know before taking over a plant from the EPC contractor?",
          "sub": "Vậy đội vận hành cần biết gì trước khi nhận nhà máy từ nhà thầu EPC?",
          "keys": [
            "cần biết gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three questions. What do we receive? From which day are we responsible? And who fixes what breaks?",
          "sub": "Ba câu hỏi. Nhận những gì? Từ ngày nào mình chịu trách nhiệm? Hỏng thì ai sửa?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not a ribbon and a giant key. Papers, dates and rights.",
          "sub": "Không phải dải băng và chiếc chìa khoá khổng lồ, mà là giấy tờ, mốc ngày và quyền.",
          "keys": [
            "giấy tờ, mốc ngày và quyền"
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
          }
        ],
        "items": [
          {
            "id": "b-s0b",
            "t": "box",
            "x": 2028,
            "y": 470,
            "w": 215,
            "h": 100,
            "at": "l1:season+300",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s1b",
            "t": "box",
            "x": 2263,
            "y": 470,
            "w": 215,
            "h": 100,
            "at": "l1:season+550",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s2b",
            "t": "box",
            "x": 2498,
            "y": 470,
            "w": 215,
            "h": 100,
            "at": "l1:season+800",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s3b",
            "t": "box",
            "x": 2733,
            "y": 470,
            "w": 215,
            "h": 100,
            "at": "l1:season+1050",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s4b",
            "t": "box",
            "x": 2968,
            "y": 470,
            "w": 215,
            "h": 100,
            "at": "l1:season+1300",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s5b",
            "t": "box",
            "x": 3203,
            "y": 470,
            "w": 215,
            "h": 100,
            "at": "l1:season+1550",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-s6b",
            "t": "box",
            "x": 3438,
            "y": 470,
            "w": 215,
            "h": 100,
            "at": "l1:season+1800",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s0",
            "t": "text",
            "text": "① Tuần 1",
            "x": 2043,
            "y": 495,
            "size": 38,
            "at": "l1:season+420"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "② Tuần 3",
            "x": 2278,
            "y": 495,
            "size": 38,
            "at": "l1:season+670"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "③ Đêm T4",
            "x": 2513,
            "y": 495,
            "size": 38,
            "at": "l1:season+920"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "④ Tuần 5",
            "x": 2748,
            "y": 495,
            "size": 38,
            "at": "l1:season+1170"
          },
          {
            "id": "b-s4",
            "t": "text",
            "text": "⑤ Tuần 8",
            "x": 2983,
            "y": 495,
            "size": 38,
            "at": "l1:season+1420"
          },
          {
            "id": "b-s5",
            "t": "text",
            "text": "⑥ Tuần 10",
            "x": 3218,
            "y": 495,
            "size": 38,
            "at": "l1:season+1670"
          },
          {
            "id": "b-s6",
            "t": "text",
            "text": "⑦ Sau BG",
            "x": 3453,
            "y": 495,
            "size": 38,
            "at": "l1:season+1920"
          },
          {
            "id": "b-tl",
            "t": "text",
            "text": "Một mùa chạy thử của Thảo",
            "x": 2028,
            "y": 610,
            "size": 52,
            "at": "l1:season",
            "hl": [
              {
                "text": "mùa chạy thử",
                "at": "l1:commissioning"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: NĐ 210/2026/NĐ-CP · Luật Xây dựng 135/2025/QH15 · mẫu hợp đồng quốc tế Silver Book 2017",
            "x": 2028,
            "y": 710,
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
          "say": "We follow Thảo through one commissioning season, seven stops. Hard hats on!",
          "sub": "Ta theo Thảo qua một mùa chạy thử, bảy chặng. Đội mũ bảo hộ vào!",
          "keys": [
            "một mùa chạy thử"
          ]
        }
      ],
      "ref": "p21"
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
            "text": "① Tuần 1 · Hợp đồng giao gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:week one"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 150,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "give"
                }
              ],
              "props": [
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:week one",
            "caption": "Tuần 1 · phòng điều khiển",
            "icon": "page-facing-up"
          },
          {
            "id": "c-epc",
            "t": "text",
            "text": "EPC: thiết kế → bàn giao",
            "x": 3996,
            "y": 160,
            "size": 52,
            "at": "l3:design",
            "hl": [
              {
                "text": "thiết kế → bàn giao",
                "at": "l3:handover"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Điều 6 NĐ 210/2026/NĐ-CP",
            "x": 3996,
            "y": 235,
            "size": 28,
            "at": "l3",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-kq",
            "t": "text",
            "text": "Mua 1 kết quả: nhà máy chạy",
            "x": 3996,
            "y": 300,
            "size": 50,
            "at": "l4:result",
            "color": "accent",
            "hl": [
              {
                "text": "1 kết quả",
                "at": "l4:result"
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
          "say": "Week one. Ms Hoa, the owner's representative and future plant director, brings the contract.",
          "sub": "Tuần đầu. Cô Hoa, Đại diện Chủ đầu tư, sắp làm giám đốc nhà máy, mang hợp đồng tới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Read the EPC contract, Thảo. From now on, it's your job too. Right, done!",
          "sub": "Đọc hợp đồng EPC đi Thảo. Từ giờ đây cũng là việc của em. Rồi, vậy nha!",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Under Decree two ten of twenty twenty six, EPC runs from design, procurement and building to testing and handover.",
          "sub": "Theo Nghị định 210/2026, EPC đi từ thiết kế, mua sắm, thi công tới chạy thử, nghiệm thu và bàn giao.",
          "keys": [
            "Nghị định 210/2026"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So the owner doesn't buy parts. It buys one result: a plant that runs.",
          "sub": "Nên Chủ đầu tư không mua từng hạng mục, mà mua một kết quả: nhà máy chạy được.",
          "keys": [
            "một kết quả"
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
      "ref": "p1"
    },
    {
      "id": "s05",
      "module": "BRK-10",
      "data": {
        "quote": "Bên nhận thầu chịu trách nhiệm về tính đầy đủ, đồng bộ của thiết kế, thiết bị và công nghệ",
        "mark": "đầy đủ, đồng bộ",
        "by": "NĐ 210/2026 · nguyên tắc riêng cho EPC",
        "illus": "gear"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The contractor answers for a complete, compatible design and equipment.",
          "sub": "Nhà thầu chịu trách nhiệm thiết kế, thiết bị đầy đủ, đồng bộ.",
          "keys": [
            "đầy đủ, đồng bộ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A rule just for EPC.",
          "sub": "Nguyên tắc riêng cho EPC."
        }
      ],
      "ref": "p2"
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
            "id": "c-ds",
            "t": "text",
            "text": "Thiếu đồng bộ ≠ lỗi đội bạn",
            "x": 3996,
            "y": 400,
            "size": 50,
            "at": "l1:mismatched"
          },
          {
            "id": "c-hs",
            "t": "text",
            "text": "…nhưng phải có hồ sơ",
            "x": 3996,
            "y": 480,
            "size": 56,
            "at": "l2:records",
            "color": "accent",
            "hl": [
              {
                "text": "hồ sơ",
                "at": "l2:records"
              }
            ]
          },
          {
            "id": "c-fo",
            "t": "illus",
            "name": "open-file-folder",
            "x": 4576,
            "y": 465,
            "size": 90,
            "at": "l2:records+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "For your team, that means mismatched equipment isn't your fault.",
          "sub": "Với đội vận hành, điều đó nghĩa là thiết bị thiếu đồng bộ không phải lỗi của bạn.",
          "keys": [
            "không phải lỗi của bạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But to make the contractor admit it, you need records. Paper beats a raised voice.",
          "sub": "Nhưng muốn nhà thầu nhận lỗi, bạn cần hồ sơ. Giấy tờ thắng to tiếng.",
          "keys": [
            "cần hồ sơ"
          ]
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s07",
      "module": "BRK-06",
      "data": {
        "title": "Điều khoản EPC chạm tới đội O&M",
        "items": [
          {
            "illus": "open-book",
            "text": "Sách vận hành"
          },
          {
            "illus": "teacher",
            "text": "Đào tạo"
          },
          {
            "illus": "page-with-curl",
            "text": "Bản vẽ hoàn công"
          },
          {
            "illus": "shield",
            "text": "Bảo hành của hãng"
          },
          {
            "illus": "eyes",
            "text": "Trông nom công trình"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Manuals and test results, training, as-built drawings, makers' warranties, care until handover.",
          "sub": "Sách vận hành, kết quả thử, đào tạo, bản vẽ hoàn công, bảo hành của hãng, trông nom tới bàn giao."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Plus cooperation with the O and M contractor, and defect duties after handover.",
          "sub": "Thêm: hợp tác với nhà thầu O&M, và bảo đảm khiếm khuyết sau bàn giao.",
          "keys": [
            "bảo đảm khiếm khuyết"
          ]
        }
      ],
      "ref": "p3"
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
            "at": "l2:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tuần 3 · Chuỗi mốc",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:week three"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l2:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:week three",
            "caption": "Tuần 3 · họp với nhà thầu",
            "icon": "spiral-calendar"
          },
          {
            "id": "d-r",
            "t": "text",
            "text": "Cơ khí → đóng điện → chạy thử",
            "x": 5964,
            "y": 160,
            "size": 40,
            "at": "l2:mechanical"
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "→ COD → bàn giao → hoàn thành cuối",
            "x": 5964,
            "y": 220,
            "size": 40,
            "at": "l2:final"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Week three. Meet Sam, the contractor's commissioning and handover manager.",
          "sub": "Tuần thứ ba. Đây là Sam, quản lý chạy thử và bàn giao của nhà thầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Here is the road map, from mechanical completion all the way to final completion.",
          "sub": "Đây là lộ trình: từ hoàn thành cơ khí tới tận hoàn thành cuối cùng.",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p4"
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
          },
          {
            "at": "l3",
            "fit": [
              "d-c0",
              "d-l2"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-each",
            "t": "text",
            "text": "Mỗi mốc: chứng nhận, hạn trả lời",
            "x": 5964,
            "y": 300,
            "size": 40,
            "at": "l1:conditions",
            "hl": [
              {
                "text": "hạn trả lời",
                "at": "l1:deadline"
              }
            ]
          },
          {
            "id": "d-bg",
            "t": "text",
            "text": "Bàn giao = mốc nặng nhất",
            "x": 5964,
            "y": 370,
            "size": 52,
            "at": "l2:handover",
            "color": "accent",
            "hl": [
              {
                "text": "nặng nhất",
                "at": "l2:heaviest"
              }
            ]
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 470,
            "w": 44,
            "h": 44,
            "at": "l3:warranty",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 452,
            "size": 56,
            "at": "l3:warranty+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Bảo hành bắt đầu",
            "x": 6034,
            "y": 462,
            "size": 40,
            "at": "l3:warranty+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 540,
            "w": 44,
            "h": 44,
            "at": "l3:risk",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 522,
            "size": 56,
            "at": "l3:risk+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Rủi ro → Chủ đầu tư",
            "x": 6034,
            "y": 532,
            "size": 40,
            "at": "l3:risk+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 610,
            "w": 44,
            "h": 44,
            "at": "l3:guarantee",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 592,
            "size": 56,
            "at": "l3:guarantee+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "BL thực hiện → BL bảo hành",
            "x": 6034,
            "y": 602,
            "size": 40,
            "at": "l3:guarantee+200"
          },
          {
            "id": "d-no",
            "t": "text",
            "text": "Bán điện ≠ bàn giao",
            "x": 6804,
            "y": 680,
            "size": 54,
            "at": "l4:selling",
            "color": "coral",
            "hl": [
              {
                "text": "≠ bàn giao",
                "at": "l4:not handover"
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
          "say": "In between: COD, punch list and tests. Each has conditions, a certificate and a reply deadline.",
          "sub": "Ở giữa: COD, danh mục tồn, các lần thử. Mốc nào cũng có điều kiện, chứng nhận, thời hạn trả lời.",
          "keys": [
            "thời hạn trả lời"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The heaviest one for operators? Handover. Three things flip that day.",
          "sub": "Mốc nặng nhất với đội vận hành? Bàn giao. Ba thứ đổi chủ trong ngày ấy.",
          "keys": [
            "Bàn giao"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Warranty starts. Risk passes to the owner. The performance guarantee is released for a warranty guarantee.",
          "sub": "Bảo hành bắt đầu. Rủi ro chuyển sang Chủ đầu tư. Bảo lãnh thực hiện được giải toả, thay bằng bảo lãnh bảo hành."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Careful: connecting, selling power, or the grid buyer's paperwork is not handover.",
          "sub": "Cẩn thận: đấu nối, bán điện, hay biên bản với Bên mua điện đều không phải bàn giao.",
          "keys": [
            "không phải bàn giao"
          ]
        }
      ],
      "ref": "p4,p5"
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
            "at": "l2",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Đêm thứ Tư · Ai đứng ca?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:night"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 150,
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
                  "id": "sam",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "crescent-moon",
                "telephone-receiver"
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
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l3:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:wednesday",
            "caption": "Đêm thứ Tư · phòng điều khiển",
            "icon": "crescent-moon"
          },
          {
            "id": "e-sell",
            "t": "text",
            "text": "Đã hoà lưới, bán điện",
            "x": 7932,
            "y": 160,
            "size": 48,
            "at": "l1:sells"
          },
          {
            "id": "e-q",
            "t": "text",
            "text": "Đứng ca thay nhà thầu?",
            "x": 7932,
            "y": 240,
            "size": 52,
            "at": "l2:night shifts",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A Wednesday night. The plant already sells power while testing.",
          "sub": "Một đêm thứ Tư. Nhà máy đã hoà lưới, bán điện trong lúc chạy thử."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Your crew could run the night shifts. Faster for everyone.",
          "sub": "Đội bên chị đứng ca đêm luôn nhé. Cho nhanh cả đôi bên.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Hmm. Two ways to say yes to that.",
          "sub": "Hừm. Nhận lời thì có hai cách.",
          "face": "thinking"
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s12",
      "module": "BRK-04",
      "data": {
        "title": "Đứng ca trước bàn giao",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Nhận lời miệng, ghi sổ như ca thường",
        "right": "Văn bản: đứng ca theo chỉ dẫn nhà thầu",
        "wrongIllus": "speaking-head",
        "rightIllus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Option A: a spoken yes.",
          "sub": "Cách A: nhận lời miệng."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Option B: a letter. Shifts follow the contractor's instructions.",
          "sub": "Cách B: có văn bản, đứng ca theo chỉ dẫn nhà thầu.",
          "keys": [
            "có văn bản"
          ]
        }
      ],
      "ref": "p6"
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
            "at": "l4",
            "fit": [
              "e-k1",
              "e-k2"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l4:end",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-mc",
            "t": "illus",
            "name": "high-voltage",
            "x": 7932,
            "y": 330,
            "size": 80,
            "at": "l1:breaker"
          },
          {
            "id": "e-mct",
            "t": "text",
            "text": "Máy cắt hỏng",
            "x": 8032,
            "y": 340,
            "size": 50,
            "at": "l1:breaker+200"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "A: lời miệng → cãi nhiều tuần",
            "x": 7932,
            "y": 430,
            "size": 46,
            "at": "l2:arguing",
            "color": "coral"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "B: văn bản → nhà thầu sửa",
            "x": 7932,
            "y": 510,
            "size": 46,
            "at": "l3:letter",
            "color": "accent",
            "hl": [
              {
                "text": "nhà thầu sửa",
                "at": "l3:repair"
              }
            ]
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "Chưa có chứng nhận bàn giao",
            "x": 7932,
            "y": 610,
            "size": 46,
            "at": "l4:certificate"
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "→ đứng ca phải có giấy",
            "x": 7932,
            "y": 680,
            "size": 58,
            "at": "l4:paper",
            "color": "accent",
            "hl": [
              {
                "text": "phải có giấy",
                "at": "l4:paper"
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
          "say": "Then one night, a circuit breaker fails.",
          "sub": "Rồi một đêm, một máy cắt hỏng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option A: the contractor says your crew ran it, so it's your problem. Weeks of arguing.",
          "sub": "Cách A: nhà thầu nói đội bạn đã vận hành thì tự chịu. Hai bên cãi nhau nhiều tuần.",
          "keys": [
            "cãi nhau nhiều tuần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Option B: the letter says the contractor still cares for the works. That is the basis to make it repair.",
          "sub": "Cách B: văn bản ghi nhà thầu vẫn trông nom công trình, là căn cứ để yêu cầu nhà thầu sửa.",
          "keys": [
            "căn cứ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lesson: no handover certificate yet? Then every shift needs paper.",
          "sub": "Rút ra: chưa có chứng nhận bàn giao, đứng ca phải có giấy.",
          "keys": [
            "đứng ca phải có giấy"
          ]
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s14",
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
            "text": "④ Tuần 5 · Ba hợp đồng",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:week five"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 900,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "leaf-fluttering-in-wind",
                "toolbox"
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
            "at": "l1:week five",
            "caption": "Tuần 5 · bãi tua-bin",
            "icon": "leaf-fluttering-in-wind"
          },
          {
            "id": "f-b1",
            "t": "box",
            "x": 60,
            "y": 1250,
            "w": 220,
            "h": 90,
            "at": "l3:alone",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "f-t1",
            "t": "text",
            "text": "EPC",
            "x": 120,
            "y": 1262,
            "size": 52,
            "at": "l3:alone+200"
          },
          {
            "id": "f-b2",
            "t": "box",
            "x": 330,
            "y": 1250,
            "w": 220,
            "h": 90,
            "at": "l3:three",
            "stroke": 5
          },
          {
            "id": "f-t2",
            "t": "text",
            "text": "O&M",
            "x": 380,
            "y": 1262,
            "size": 52,
            "at": "l3:three+200"
          },
          {
            "id": "f-b3",
            "t": "box",
            "x": 600,
            "y": 1250,
            "w": 220,
            "h": 90,
            "at": "l3:three+400",
            "stroke": 5
          },
          {
            "id": "f-t3",
            "t": "text",
            "text": "Bảo trì",
            "x": 615,
            "y": 1262,
            "size": 48,
            "at": "l3:three+600"
          },
          {
            "id": "f-g",
            "t": "illus",
            "name": "gear",
            "x": 380,
            "y": 1370,
            "size": 90,
            "at": "l3:gears"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Phải khớp như bánh răng",
            "x": 60,
            "y": 1490,
            "size": 50,
            "at": "l3:fit",
            "hl": [
              {
                "text": "khớp",
                "at": "l3:fit"
              }
            ]
          },
          {
            "id": "f-no",
            "t": "text",
            "text": "Không khớp: việc không ai chịu",
            "x": 60,
            "y": 1570,
            "size": 44,
            "at": "l4:nobody",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Week five, by the turbines. Meet Dũng, the team's young maintenance engineer.",
          "sub": "Tuần thứ năm, ngoài bãi tua-bin. Đây là Dũng, kỹ sư bảo dưỡng trẻ của đội."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Three contracts on my desk! EPC, O and M, and a long-term service deal with the turbine maker.",
          "sub": "Trên bàn em có ba hợp đồng! EPC, O&M, và bảo trì dài hạn với hãng thiết bị chính.",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The EPC contract never stands alone. All three must fit, like gears in one gearbox.",
          "sub": "Hợp đồng EPC không đứng một mình. Ba hợp đồng phải khớp nhau như bánh răng trong một hộp số.",
          "keys": [
            "khớp nhau"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "If not, some jobs belong to nobody, or everyone points at someone else.",
          "sub": "Nếu không, có việc chẳng ai chịu, hoặc bên nào cũng chỉ tay sang bên kia."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p8"
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
            "id": "f-w1",
            "t": "text",
            "text": "1 · Hãng: “khi hết bảo đảm”",
            "x": 60,
            "y": 1660,
            "size": 38,
            "at": "l1:passes",
            "hl": [
              {
                "text": "khi hết bảo đảm",
                "at": "l1:ends"
              }
            ]
          },
          {
            "id": "f-w1b",
            "t": "text",
            "text": "hết trước thì sao?",
            "x": 110,
            "y": 1720,
            "size": 36,
            "at": "l2:expires",
            "color": "coral"
          },
          {
            "id": "f-w2",
            "t": "text",
            "text": "2 · SCADA khi đổi O&M",
            "x": 60,
            "y": 1785,
            "size": 40,
            "at": "l3:scada",
            "hl": [
              {
                "text": "SCADA",
                "at": "l3:scada"
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
          "say": "Two usual snags. One: the maker's warranty passes to the owner only when the defects period ends.",
          "sub": "Hai chỗ hay vướng. Một: bảo hành của hãng chỉ chuyển cho Chủ đầu tư “khi hết thời hạn bảo đảm”.",
          "keys": [
            "khi hết thời hạn bảo đảm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And if that warranty expires first? The contract says nothing.",
          "sub": "Mà nếu bảo hành ấy hết trước thì sao? Hợp đồng im lặng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: rights to the control software and SCADA when you change O and M contractor.",
          "sub": "Hai: quyền dùng phần mềm điều khiển, SCADA khi đổi nhà thầu O&M.",
          "keys": [
            "SCADA"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s16",
      "module": "DLG-01",
      "data": {
        "set": "street",
        "label": "Tuần 5 · bãi tua-bin",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Có bảo hành của hãng thì cứ gọi thẳng hãng",
          "why": "Trong thời hạn bảo đảm EPC, bên trả lời Chủ đầu tư là nhà thầu EPC; thông báo chính thức gửi nhà thầu.",
          "rule": "Sửa nhanh gọi ai cũng được, báo lỗi phải báo nhà thầu"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "A turbine part just failed. It has a maker's warranty, so I'll call the maker. Done!",
          "sub": "Một bộ phận tua-bin vừa hỏng. Có bảo hành của hãng mà, em gọi thẳng hãng. Xong!",
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
          "say": "During the defects period, the EPC contractor answers to the owner. You signed with it, not its suppliers.",
          "sub": "Trong thời hạn bảo đảm, nhà thầu EPC trả lời Chủ đầu tư. Bạn ký với nhà thầu, không ký với nhà cung cấp của họ.",
          "keys": [
            "nhà thầu EPC"
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
          "say": "Call the maker for a quick fix, and send the formal notice to the EPC contractor.",
          "sub": "Gọi hãng để sửa nhanh, còn thông báo chính thức thì gửi nhà thầu EPC.",
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
      "ref": "p10"
    },
    {
      "id": "s17",
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
            "id": "g-t0",
            "t": "text",
            "text": "Báo lỗi: báo ai?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:breach"
          },
          {
            "id": "g-law",
            "t": "text",
            "text": "Lỗi bên thứ ba: vẫn chịu",
            "x": 2028,
            "y": 1250,
            "size": 50,
            "at": "l1:third party",
            "hl": [
              {
                "text": "vẫn chịu",
                "at": "l1:still"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Khoản 4 Điều 86 Luật Xây dựng 135/2025/QH15",
            "x": 2028,
            "y": 1320,
            "size": 28,
            "at": "l1",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-fix",
            "t": "text",
            "text": "Sửa nhanh: gọi ai cũng được",
            "x": 2028,
            "y": 1390,
            "size": 50,
            "at": "l2:repair"
          },
          {
            "id": "g-rep",
            "t": "text",
            "text": "Báo lỗi: đúng nhà thầu EPC",
            "x": 2028,
            "y": 1470,
            "size": 56,
            "at": "l2:reporting",
            "color": "accent",
            "hl": [
              {
                "text": "đúng nhà thầu EPC",
                "at": "l2:right contractor"
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
          "say": "The twenty twenty-five Construction Law agrees: a breach caused by a third party is still the breaching party's problem.",
          "sub": "Luật Xây dựng 2025 cũng nêu: vi phạm do bên thứ ba gây ra thì bên vi phạm vẫn chịu trách nhiệm với bên kia."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For a quick repair, call anyone. For reporting a defect, the right contractor, every time.",
          "sub": "Sửa nhanh thì gọi ai cũng được, báo lỗi thì phải báo đúng nhà thầu.",
          "keys": [
            "báo đúng nhà thầu"
          ]
        }
      ],
      "ref": "p10,p11"
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
            "at": "l3",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tuần 8 · Bảng kiểm",
            "x": 2028,
            "y": 1540,
            "size": 64,
            "at": "l1:week eight"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "clipboard",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:week eight",
            "caption": "Tuần 8 · phòng điều khiển",
            "icon": "clipboard"
          },
          {
            "id": "g-qv",
            "t": "text",
            "text": "Có mặt sớm: quyền + nghĩa vụ",
            "x": 2028,
            "y": 1650,
            "size": 44,
            "at": "l2:right",
            "hl": [
              {
                "text": "quyền + nghĩa vụ",
                "at": "l2:duty"
              }
            ]
          },
          {
            "id": "g-cp",
            "t": "text",
            "text": "Xin bản sao 5 nhóm điều khoản",
            "x": 2028,
            "y": 1790,
            "size": 36,
            "at": "l3:copies",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Week eight. Thảo doesn't wait for signing day to read the contract.",
          "sub": "Tuần thứ tám. Thảo không đợi tới ngày ký biên bản mới đọc hợp đồng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The owner must provide staff for training, so being there from commissioning is a right, and a duty.",
          "sub": "Chủ đầu tư phải cử người để nhà thầu đào tạo, nên có mặt từ lúc chạy thử là quyền, cũng là nghĩa vụ.",
          "keys": [
            "quyền, cũng là nghĩa vụ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I've got copies of the clauses: documents, training, handover, defects and notices.",
          "sub": "Em đã có bản sao các điều khoản: tài liệu, đào tạo, bàn giao, khiếm khuyết và thông báo.",
          "face": "happy"
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s19",
      "module": "BRK-05",
      "data": {
        "title": "Bảng kiểm trước bàn giao",
        "points": [
          "Tài liệu phải nhận, ngôn ngữ",
          "Đào tạo, phụ tùng, danh mục tồn",
          "Lịch theo dõi thời hạn trả lời"
        ],
        "illus": "clipboard"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Documents to receive, and their language.",
          "sub": "Tài liệu phải nhận, và ngôn ngữ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Approved training, spares, tools, punch list, notice address.",
          "sub": "Đào tạo đã duyệt, phụ tùng, dụng cụ, danh mục tồn, người nhận thông báo."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "And a calendar of every reply deadline.",
          "sub": "Và lịch theo dõi mọi thời hạn trả lời.",
          "keys": [
            "lịch theo dõi"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s21",
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
              "h-dc",
              "h-im"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l5",
            "fit": "H",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Tuần 10 · Hồ sơ đến",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:week ten"
          },
          {
            "id": "h-f",
            "t": "illus",
            "name": "file-folder",
            "x": 5436,
            "y": 1130,
            "size": 110,
            "at": "l1:folder"
          },
          {
            "id": "h-dc",
            "t": "text",
            "text": "“Coi như đã cấp” sau [ ] ngày",
            "x": 3996,
            "y": 1250,
            "size": 50,
            "at": "l2:deemed",
            "color": "coral",
            "hl": [
              {
                "text": "Coi như đã cấp",
                "at": "l2:deemed"
              }
            ]
          },
          {
            "id": "h-im",
            "t": "text",
            "text": "Im lặng → bàn giao",
            "x": 3996,
            "y": 1335,
            "size": 56,
            "at": "l3:silence",
            "hl": [
              {
                "text": "Im lặng",
                "at": "l3:silence"
              }
            ]
          },
          {
            "id": "h-r0b",
            "t": "box",
            "x": 3996,
            "y": 1450,
            "w": 240,
            "h": 90,
            "at": "l4:warranty",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "h-r0",
            "t": "text",
            "text": "Bảo hành tính",
            "x": 4011,
            "y": 1470,
            "size": 36,
            "at": "l4:warranty+200"
          },
          {
            "id": "h-r1b",
            "t": "box",
            "x": 4266,
            "y": 1450,
            "w": 240,
            "h": 90,
            "at": "l4:risk",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "h-r1",
            "t": "text",
            "text": "Rủi ro → CĐT",
            "x": 4281,
            "y": 1470,
            "size": 36,
            "at": "l4:risk+200"
          },
          {
            "id": "h-r2b",
            "t": "box",
            "x": 4536,
            "y": 1450,
            "w": 240,
            "h": 90,
            "at": "l4:guarantee",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "h-r2",
            "t": "text",
            "text": "Trả bảo lãnh",
            "x": 4551,
            "y": 1470,
            "size": 36,
            "at": "l4:guarantee+200"
          },
          {
            "id": "h-cap",
            "t": "text",
            "text": "Lỗi cáp: chỉ còn bảo đảm",
            "x": 3996,
            "y": 1590,
            "size": 48,
            "at": "l5:cable",
            "color": "coral",
            "hl": [
              {
                "text": "chỉ còn bảo đảm",
                "at": "l5:only"
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
          "say": "Week ten. The folder is back, and Ms Hoa is away on business.",
          "sub": "Tuần thứ mười. Tập hồ sơ quay lại, và cô Hoa đang đi công tác."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Many contracts say: no reply within so many days, and the handover certificate is deemed issued.",
          "sub": "Nhiều hợp đồng ghi: không trả lời trong [ ] ngày thì chứng nhận bàn giao “coi như đã cấp”.",
          "keys": [
            "coi như đã cấp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So silence can trigger handover before your team is ready.",
          "sub": "Im lặng có thể khiến bàn giao xảy ra khi đội bạn chưa sẵn sàng.",
          "keys": [
            "Im lặng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Nobody replies, the deadline passes. Warranty starts, risk moves, the guarantee goes back.",
          "sub": "Không ai trả lời, hết hạn. Bảo hành bắt đầu, rủi ro chuyển sang, bảo lãnh thực hiện được trả lại."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two months later, a cable fault. The owner has only defect rights left.",
          "sub": "Hai tháng sau lộ lỗi cáp. Chủ đầu tư chỉ còn quyền theo bảo đảm khiếm khuyết.",
          "keys": [
            "chỉ còn quyền"
          ]
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s22",
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
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1:calls",
            "caption": "Tuần 10 · gọi cô Hoa đi công tác",
            "icon": "telephone-receiver"
          },
          {
            "id": "h-ok",
            "t": "text",
            "text": "Im lặng là đồng ý",
            "x": 3996,
            "y": 1710,
            "size": 60,
            "at": "l4:silence",
            "color": "accent",
            "hl": [
              {
                "text": "Im lặng là đồng ý",
                "at": "l4:yes"
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
          "say": "But Thảo has her deadline calendar. On day one, she calls Ms Hoa.",
          "sub": "Nhưng Thảo có lịch theo dõi thời hạn. Ngay ngày đầu, Thảo gọi cô Hoa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The handover request came today. Two items are still missing. Can you reply before the deadline?",
          "sub": "Hồ sơ đề nghị bàn giao tới hôm nay. Còn thiếu hai mục. Cô trả lời trước hạn được không ạ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Draft it, name each item. I'll sign online tonight. Right, done!",
          "sub": "Em soạn đi, nêu rõ từng mục. Tối nay cô ký trực tuyến. Rồi, vậy nha!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lesson: when a handover file arrives, silence means yes.",
          "sub": "Rút ra: hồ sơ bàn giao tới, im lặng là đồng ý.",
          "keys": [
            "im lặng là đồng ý"
          ]
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s23",
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
            "text": "⑦ Sau bàn giao · Sửa lỗi",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:after"
          },
          {
            "id": "i-tb",
            "t": "text",
            "text": "Thiết bị chính ≠ phần còn lại",
            "x": 5964,
            "y": 1250,
            "size": 46,
            "at": "l2:main"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "1 năm",
            "x": 5964,
            "y": 1290,
            "size": 100,
            "at": "l3:one year",
            "color": "accent",
            "hl": [
              {
                "text": "1 năm",
                "at": "l3:one year"
              }
            ]
          },
          {
            "id": "i-1s",
            "t": "text",
            "text": "nếu hợp đồng không ghi khác",
            "x": 5964,
            "y": 1420,
            "size": 40,
            "at": "l3:says nothing"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "gia hạn không quá 2 năm",
            "x": 5964,
            "y": 1490,
            "size": 50,
            "at": "l4:two years",
            "hl": [
              {
                "text": "không quá 2 năm",
                "at": "l4:two years"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Silver Book 2017 (mẫu quốc tế)",
            "x": 5964,
            "y": 1565,
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
          "say": "Last stop: after handover. Now the defects period begins.",
          "sub": "Chặng cuối: sau bàn giao. Bắt đầu thời hạn sửa khiếm khuyết."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Often one for the main equipment, another for the rest.",
          "sub": "Thường khác nhau cho thiết bị chính và phần còn lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In the international Silver Book twenty seventeen: one year, if the contract data says nothing.",
          "sub": "Theo mẫu hợp đồng quốc tế Silver Book 2017: một năm, nếu phần dữ liệu hợp đồng không ghi khác.",
          "keys": [
            "một năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No extension beyond two years. Your contract may differ, so read its own number.",
          "sub": "Không gia hạn quá hai năm. Hợp đồng của bạn có thể ghi khác, nên đọc con số trong chính hợp đồng.",
          "keys": [
            "Không gia hạn quá hai năm"
          ]
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s24",
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
            "x": 6804,
            "y": 1240,
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
                  "pose": "think"
                }
              ],
              "props": [
                "notebook",
                "warning"
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
            "at": "l2:note",
            "caption": "Sau bàn giao · phòng điều khiển",
            "icon": "notebook"
          },
          {
            "id": "i-an",
            "t": "text",
            "text": "Lỗi ẩn: thời hạn dài hơn",
            "x": 5964,
            "y": 1630,
            "size": 44,
            "at": "l2:latent"
          },
          {
            "id": "i-hl",
            "t": "text",
            "text": "Hàng loạt: sửa cả chiếc chưa hỏng",
            "x": 5964,
            "y": 1690,
            "size": 40,
            "at": "l2:serial",
            "hl": [
              {
                "text": "chưa hỏng",
                "at": "l2:unbroken"
              }
            ]
          },
          {
            "id": "i-hd",
            "t": "text",
            "text": "Sổ ca, báo động = hộp đen",
            "x": 5964,
            "y": 1770,
            "size": 44,
            "at": "l4:log",
            "color": "accent",
            "hl": [
              {
                "text": "hộp đen",
                "at": "l4:black box"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo and Dũng note: latent defects often get longer. Serial defects can force fixes on every same-type unit, even unbroken ones.",
          "sub": "Thảo và Dũng ghi: lỗi ẩn thường có thời hạn dài hơn; lỗi hàng loạt có thể buộc sửa mọi thiết bị cùng loại, kể cả chiếc chưa hỏng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "And after a breakdown, the contractor always asks: did you run it by the manual?",
          "sub": "Mà hỏng máy là nhà thầu hỏi ngay: máy có được vận hành đúng sách hướng dẫn không?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Your answer lives in the shift log, alarms and maintenance schedule. The plant's black box.",
          "sub": "Câu trả lời nằm trong nhật ký vận hành, báo động, lịch bảo dưỡng. Hộp đen của nhà máy.",
          "keys": [
            "Hộp đen"
          ]
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s25",
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
            "text": "Luật XD 2025: từ 01/7/2026",
            "x": 6804,
            "y": 1795,
            "size": 36,
            "at": "l1:construction",
            "hl": [
              {
                "text": "01/7/2026",
                "at": "l1:july"
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
          "say": "Vietnamese law? The twenty twenty-five Construction Law applies from July first, twenty twenty-six, with a warranty article.",
          "sub": "Luật Việt Nam? Luật Xây dựng 2025 có hiệu lực chung từ 01/7/2026, có một điều riêng về bảo hành công trình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Its details weren't checked in this series. Contracts signed earlier mostly follow the twenty fourteen law.",
          "sub": "Nội dung điều này chưa được kiểm trong chuỗi. Hợp đồng ký trước đó nhìn chung theo Luật Xây dựng 2014."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Contract and law differ? Check the current text and ask legal first.",
          "sub": "Hợp đồng và luật khác nhau? Kiểm văn bản hiện hành, hỏi pháp chế trước khi kết luận.",
          "keys": [
            "hỏi pháp chế"
          ]
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s27",
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
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tuần 10 · tối hôm ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:back"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "file-folder",
                "check-mark-button"
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
            "at": "l1:back",
            "caption": "Tuần 10 · phòng điều khiển",
            "icon": "file-folder"
          },
          {
            "id": "j-f",
            "t": "illus",
            "name": "file-folder",
            "x": 7932,
            "y": 1240,
            "size": 110,
            "at": "l1:folder"
          },
          {
            "id": "j-ok",
            "t": "text",
            "text": "Đã trả lời trước hạn ✓",
            "x": 8062,
            "y": 1265,
            "size": 50,
            "at": "l2:sent",
            "color": "accent",
            "hl": [
              {
                "text": "trước hạn",
                "at": "l2:deadline"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Rào xong: giấy tờ, mốc, quyền",
            "x": 7932,
            "y": 1380,
            "size": 46,
            "at": "l3:fenced",
            "hl": [
              {
                "text": "Rào xong",
                "at": "l3:fenced"
              }
            ]
          },
          {
            "id": "j-s0",
            "t": "text",
            "text": "1. Hồ sơ, đào tạo, phụ tùng",
            "x": 7932,
            "y": 1470,
            "size": 30,
            "at": "l4:six+200",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-s1",
            "t": "text",
            "text": "2. Từ ngày nào chịu rủi ro",
            "x": 7932,
            "y": 1522,
            "size": 30,
            "at": "l4:six+450",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-s2",
            "t": "text",
            "text": "3. Báo lỗi trong bảo đảm",
            "x": 7932,
            "y": 1574,
            "size": 30,
            "at": "l4:six+700",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-s3",
            "t": "text",
            "text": "4. Lỗi ẩn, lỗi hàng loạt",
            "x": 7932,
            "y": 1626,
            "size": 30,
            "at": "l4:six+950",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-s4",
            "t": "text",
            "text": "5. Lỗi nhà thầu hay vận hành",
            "x": 7932,
            "y": 1678,
            "size": 30,
            "at": "l4:six+1200",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-s5",
            "t": "text",
            "text": "6. Hợp đồng O&M, bảo hành hãng",
            "x": 7932,
            "y": 1730,
            "size": 30,
            "at": "l4:six+1450",
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
          "say": "Back to that folder. Week ten, that evening.",
          "sub": "Trở lại tập hồ sơ ấy. Tuần thứ mười, tối hôm ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Reply sent before the deadline, with the two missing items named. No silent handover here.",
          "sub": "Đã gửi ý kiến trước hạn, nêu tên hai mục còn thiếu. Ở đây không có bàn giao trong im lặng.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Eat from a tree, fence that tree. Thảo fenced hers: papers, dates, rights.",
          "sub": "“Ăn cây nào rào cây nấy.” Thảo đã rào xong: giấy tờ, mốc ngày, quyền.",
          "keys": [
            "rào xong"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Six deeper lessons follow, in the order your team lives them.",
          "sub": "Sáu bài đào sâu tiếp theo, đúng thứ tự đội vận hành trải qua."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "to": "l1",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s28",
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
            "at": "l1:result",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:paper",
            "fit": "E",
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
            "x": 4756,
            "y": 300,
            "at": "l1:result"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8692,
            "y": 680,
            "at": "l2:paper"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4756,
            "y": 1710,
            "at": "l3:silence"
          },
          {
            "id": "z-src-note",
            "t": "text",
            "text": "Bài để tham khảo chung; tình huống là minh hoạ, không lấy từ hợp đồng hay dự án cụ thể nào. Việc cụ thể, đọc chính hợp đồng của bạn và hỏi pháp chế.",
            "x": 7932,
            "y": 1805,
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
          "say": "So: the owner buys one result, a working plant. Handover flips warranty, risk and guarantees.",
          "sub": "Tóm lại: Chủ đầu tư mua một kết quả là nhà máy chạy được; bàn giao làm đổi bảo hành, rủi ro, bảo lãnh.",
          "keys": [
            "một kết quả"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before handover, shifts need paper. Defect notices go to the EPC contractor.",
          "sub": "Trước bàn giao, đứng ca phải có giấy. Thông báo lỗi gửi nhà thầu EPC.",
          "keys": [
            "đứng ca phải có giấy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And never let a deadline pass in silence. This is general info: read your own contract, ask legal.",
          "sub": "Và đừng để thời hạn nào trôi qua trong im lặng. Bài là kiến thức chung: đọc chính hợp đồng của bạn, hỏi pháp chế.",
          "keys": [
            "trôi qua trong im lặng"
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
        "q": "The handover request arrives while your director travels, what should the team do?",
        "options": [
          "Sign it at once so the contractor does not feel ignored by the owner",
          "Check the reply deadline and make sure someone sends comments before it ends",
          "Leave it unopened until the director returns, whatever the contract deadline says"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "file-folder",
        "why": "Tình huống cho thấy im lặng quá hạn có thể làm bàn giao xảy ra. Người được giao phải xem thời hạn và gửi ý kiến kịp, kể cả khi lãnh đạo vắng."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The handover request arrives while your director travels, what should the team do?",
          "sub": "Hồ sơ đề nghị bàn giao tới khi giám đốc đi công tác, đội nên làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Answer before the deadline, in writing.",
          "sub": "Trả lời trước hạn, bằng văn bản."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[29]"
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
          "say": "Right now: ask for copies of the documents, training, handover and defects clauses.",
          "sub": "Việc làm ngay: xin bản sao các điều khoản tài liệu, đào tạo, bàn giao và khiếm khuyết.",
          "keys": [
            "xin bản sao"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: as-built records, manuals, training and spare parts. Now, forty questions below!",
          "sub": "Bài sau: hồ sơ hoàn công, sách vận hành, đào tạo, phụ tùng. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-23",
  "notes": "#145 bài MỚI (tổng) dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-23 (đồ vật): tập hồ sơ đề nghị bàn giao, trả lời trong [ ] ngày, người ký đi công tác (p15) → Thảo → trở lại ở ô H (tuần 10) và ô J (đã trả lời trước hạn). Dòng thời gian: MỘT MÙA CHẠY THỬ của Thảo (tuần 1 cô Hoa giao hợp đồng p1–p3 → tuần 3 Sam trình chuỗi mốc p4–p5 → đêm thứ Tư hai cách đứng ca p6–p7 → tuần 5 Dũng ba hợp đồng p8–p9, “Khoan đã!” gọi thẳng hãng p10–p11 → tuần 8 bảng kiểm p12–p13 → tuần 10 hồ sơ đến, coi như đã cấp p14–p16 → sau bàn giao p17–p20 → khép vòng tuần 10 tối, sáu bài p21). Nhân vật: w145/_series/epc-om-operator.md (Thảo trưởng ca, cô Hoa Đại diện CĐT/giám đốc nhà máy, Sam nhà thầu, Dũng kỹ sư bảo dưỡng). Tục ngữ mở/khép: “Ăn cây nào rào cây nấy”. BRK: 10 (NĐ 210 nguyên tắc EPC), 06 (điều khoản chạm O&M), 08 (chuỗi mốc), 04 (Cách A/B đứng ca), 05 (bảng kiểm), 07 (rehook), 09 (Luật XD 2025). Số chỉ lấy từ bài: NĐ 210/2026, Luật XD 135/2025 Đ86 k4, 01/7/2026, Luật XD 2014, Silver Book 2017 một năm / ≤ 2 năm, [ ] ngày giữ nguyên; “ba tháng”, “tuần 1…10”, “hai tháng sau” là mốc kể chuyện (hai tháng sau từ p15). Câu đố questions[29].",
  "loop": {
    "open": "s01",
    "close": "s27"
  }
};
