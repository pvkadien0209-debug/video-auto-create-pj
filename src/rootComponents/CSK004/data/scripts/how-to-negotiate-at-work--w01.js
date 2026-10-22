// Kịch bản video W lần 3 (#110, #112) — "Thương lượng ở chỗ làm: từ hỏi nhu cầu đến chốt bằng văn bản" · bài tổng chuỗi "Thương lượng ở chỗ làm"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-negotiate-at-work--w01",
  "hook": "HOOK-14",
  "unit": {
    "audience": "everyday-negotiators",
    "slug": "how-to-negotiate-at-work",
    "door": "ky-nang",
    "level": "B1",
    "title": "Thương lượng ở chỗ làm: từ hỏi nhu cầu đến chốt bằng văn bản",
    "series": "Thương lượng ở chỗ làm"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN LÀM VIỆC của Thảo (mua hàng cho quán của Cô Hoa). Mở: 7:00 thứ Hai tuần sau, kệ bánh trống (“đầu tuần sau”) → tua lại 7 ngày: ① T2 9:00 Bác Bình báo tăng giá (lập trường/lợi ích, p1–p5) → ② T2 tối viết 3 điều (BATNA, điểm dừng, p6–p10) → BRK-07 → ③ T3 Dũng xin tăng lương + “Khoan đã!” im lặng (p11–p15) → ④ T4 đổi có điều kiện + BRK-04 Tâm may rèm (p16–p20) → ⑤ T5 bị giục + BRK-02 im lặng (p21–p25) → ⑥ T6 sáng chốt + tin nhắn 5 phần (p26, p27, p30) → ⑦ T6 16:00 Cô Hoa đặt bánh, Thảo nhắc nhắn lại (p28–p29) → khép: 7:00 thứ Hai, 40 bánh. Nhân vật: Thảo, Bác Bình (bao bì), Dũng, Cô Hoa (xem w145/_series/everyday-negotiators.md). Giang (p8), Tâm (p18), Thư (p23), Quyên (p22) chỉ kể. Bản cũ (W lần 3): w145/bak/how-to-negotiate-at-work--w01.js.",
  "narrator": "det",
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
            "fit": "A",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "a-q",
            "t": "text",
            "text": "“Đầu tuần sau”",
            "x": 60,
            "y": 110,
            "size": 120,
            "at": "l2:early next week",
            "color": "accent",
            "hl": [
              {
                "text": "Đầu tuần sau",
                "at": "l2:early next week"
              }
            ]
          },
          {
            "id": "a-d",
            "t": "text",
            "text": "= thứ Hai? hay thứ Ba?",
            "x": 70,
            "y": 330,
            "size": 58,
            "at": "l2:words"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday, seven a.m. The café opens soon, and the cake shelf is empty.",
          "sub": "Thứ Hai, bảy giờ sáng. Quán sắp mở cửa, mà kệ bánh trống trơn.",
          "keys": [
            "kệ bánh trống trơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Last Friday's order ended with three words: early next week.",
          "sub": "Cuộc gọi đặt bánh thứ Sáu trước chốt bằng ba chữ: đầu tuần sau.",
          "keys": [
            "đầu tuần sau"
          ]
        }
      ],
      "ref": "intro,p28"
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
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "face": "worried",
                  "pose": "phone"
                }
              ],
              "props": [
                "hot-beverage",
                "shortcake"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1",
            "caption": "Thứ Hai tuần sau · 7:00",
            "icon": "shortcake"
          },
          {
            "id": "a-fee",
            "t": "text",
            "text": "Tiệm bánh: thứ Ba + phí giao",
            "x": 70,
            "y": 450,
            "size": 50,
            "at": "l3:delivery fee",
            "color": "coral",
            "hl": [
              {
                "text": "phí giao",
                "at": "l3:delivery fee"
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
          "say": "Meet Cô Hoa, the owner, staring at her phone.",
          "sub": "Đây là Cô Hoa, chủ quán, đang nhìn chằm chằm vào điện thoại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Seven already. Where are my cakes?",
          "sub": "Bảy giờ rồi. Bánh của tôi đâu?",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The baker heard Tuesday. And his bill adds a delivery fee.",
          "sub": "Tiệm bánh hiểu là thứ Ba. Hoá đơn còn cộng thêm phí giao.",
          "keys": [
            "phí giao"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Let's rewind seven days.",
          "sub": "Tua lại bảy ngày nhé."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "intro,p28"
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
            "text": "Thương lượng: cãi hay gật?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:negotiate",
            "hl": [
              {
                "text": "cãi hay gật",
                "at": "l2:argue"
              }
            ]
          },
          {
            "id": "b-p",
            "t": "text",
            "text": "Đối tác: “Phải tăng giá”",
            "x": 2028,
            "y": 150,
            "size": 50,
            "at": "l1:partner"
          },
          {
            "id": "b-s",
            "t": "text",
            "text": "Sếp: “Không có ngân sách”",
            "x": 2028,
            "y": 225,
            "size": 50,
            "at": "l1:budget"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Chỉ có: cãi, hoặc gật",
            "x": 2028,
            "y": 330,
            "size": 54,
            "at": "l2:two roads",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:third"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Đường thứ ba: 5 bước →",
            "x": 2028,
            "y": 420,
            "size": 62,
            "at": "l2:five steps",
            "color": "accent",
            "hl": [
              {
                "text": "5 bước",
                "at": "l2:five steps"
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
          "say": "So how do you negotiate at work? A partner raises prices. The boss has no budget.",
          "sub": "Vậy thương lượng ở chỗ làm thế nào? Đối tác đòi tăng giá. Sếp bảo không có ngân sách.",
          "keys": [
            "thương lượng ở chỗ làm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "We see two roads: argue, or nod. But there's a third road: five steps.",
          "sub": "Ta chỉ thấy hai đường: cãi, hoặc gật. Nhưng còn đường thứ ba: năm bước.",
          "keys": [
            "năm bước"
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
            "id": "b-c0",
            "t": "box",
            "x": 2868,
            "y": 175,
            "w": 46,
            "h": 46,
            "at": "l1:why",
            "stroke": 5
          },
          {
            "id": "b-k0",
            "t": "text",
            "text": "✓",
            "x": 2873,
            "y": 157,
            "size": 58,
            "at": "l1:why+600",
            "color": "accent"
          },
          {
            "id": "b-l0",
            "t": "text",
            "text": "Hỏi “vì sao” trước",
            "x": 2938,
            "y": 165,
            "size": 46,
            "at": "l1:why+200"
          },
          {
            "id": "b-c1",
            "t": "box",
            "x": 2868,
            "y": 247,
            "w": 46,
            "h": 46,
            "at": "l1:home",
            "stroke": 5
          },
          {
            "id": "b-k1",
            "t": "text",
            "text": "✓",
            "x": 2873,
            "y": 229,
            "size": 58,
            "at": "l1:home+600",
            "color": "accent"
          },
          {
            "id": "b-l1",
            "t": "text",
            "text": "Điểm dừng đặt ở nhà",
            "x": 2938,
            "y": 237,
            "size": 46,
            "at": "l1:home+200"
          },
          {
            "id": "b-c2",
            "t": "box",
            "x": 2868,
            "y": 319,
            "w": 46,
            "h": 46,
            "at": "l1:trade",
            "stroke": 5
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "✓",
            "x": 2873,
            "y": 301,
            "size": 58,
            "at": "l1:trade+600",
            "color": "accent"
          },
          {
            "id": "b-l2",
            "t": "text",
            "text": "Đổi có điều kiện",
            "x": 2938,
            "y": 309,
            "size": 46,
            "at": "l1:trade+200"
          },
          {
            "id": "b-c3",
            "t": "box",
            "x": 2868,
            "y": 391,
            "w": 46,
            "h": 46,
            "at": "l2:pushed",
            "stroke": 5
          },
          {
            "id": "b-k3",
            "t": "text",
            "text": "✓",
            "x": 2873,
            "y": 373,
            "size": 58,
            "at": "l2:pushed+600",
            "color": "accent"
          },
          {
            "id": "b-l3",
            "t": "text",
            "text": "Không gật khi bị giục",
            "x": 2938,
            "y": 381,
            "size": 46,
            "at": "l2:pushed+200"
          },
          {
            "id": "b-c4",
            "t": "box",
            "x": 2868,
            "y": 463,
            "w": 46,
            "h": 46,
            "at": "l2:writing",
            "stroke": 5
          },
          {
            "id": "b-k4",
            "t": "text",
            "text": "✓",
            "x": 2873,
            "y": 445,
            "size": 58,
            "at": "l2:writing+600",
            "color": "accent"
          },
          {
            "id": "b-l4",
            "t": "text",
            "text": "Chốt bằng tin nhắn",
            "x": 2938,
            "y": 453,
            "size": 46,
            "at": "l2:writing+200"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2260,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2492,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+600",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2724,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2956,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3188,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+1200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3420,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l3:seven stops+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 9:00",
            "x": 2048,
            "y": 628,
            "size": 40,
            "at": "l3:seven stops+300"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T2 tối",
            "x": 2280,
            "y": 628,
            "size": 40,
            "at": "l3:seven stops+500"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T3",
            "x": 2512,
            "y": 628,
            "size": 40,
            "at": "l3:seven stops+700"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T4",
            "x": 2744,
            "y": 628,
            "size": 40,
            "at": "l3:seven stops+900"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T5",
            "x": 2976,
            "y": 628,
            "size": 40,
            "at": "l3:seven stops+1100"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T6 sáng",
            "x": 3208,
            "y": 628,
            "size": 40,
            "at": "l3:seven stops+1300"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T6 chiều",
            "x": 3440,
            "y": 628,
            "size": 40,
            "at": "l3:seven stops+1500"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Ask why. Set your limit at home. Trade with if-then.",
          "sub": "Hỏi vì sao. Đặt điểm dừng từ ở nhà. Đổi theo kiểu nếu… thì…",
          "keys": [
            "Hỏi vì sao"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Don't nod when pushed. And close it in writing.",
          "sub": "Không gật khi bị giục. Và chốt bằng chữ.",
          "keys": [
            "chốt bằng chữ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo through one week, in seven stops.",
          "sub": "Cùng theo Thảo qua một tuần, bảy chặng.",
          "keys": [
            "bảy chặng"
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
            "at": "l3",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "C",
            "ms": 700
          },
          {
            "at": "l6",
            "fit": [
              "c-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l8",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai 9:00 · Báo tăng giá",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Thảo"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "package",
                "memo"
              ]
            },
            "at": "l1:Thảo",
            "caption": "Thứ Hai 9:00 · ký lại hợp đồng",
            "icon": "package"
          },
          {
            "id": "c-bad",
            "t": "text",
            "text": "“Tăng thì em chuyển!”",
            "x": 3996,
            "y": 160,
            "size": 50,
            "at": "l5:bridge",
            "color": "coral"
          },
          {
            "id": "c-dê",
            "t": "text",
            "text": "Hai con dê qua cầu",
            "x": 3996,
            "y": 240,
            "size": 50,
            "at": "l5:go ahead",
            "color": "muted",
            "hl": [
              {
                "text": "dê",
                "at": "l5:go ahead"
              }
            ]
          },
          {
            "id": "c-badx",
            "t": "strike",
            "over": "c-bad",
            "at": "l8:door"
          },
          {
            "id": "c-why",
            "t": "text",
            "text": "“Vì sao bác tăng ạ?”",
            "x": 3996,
            "y": 330,
            "size": 56,
            "at": "l8:door",
            "color": "accent",
            "hl": [
              {
                "text": "Vì sao",
                "at": "l8:door"
              }
            ]
          },
          {
            "id": "c-int",
            "t": "text",
            "text": "Sợ mất khách → ký 2 năm",
            "x": 3996,
            "y": 420,
            "size": 48,
            "at": "l8:two years",
            "hl": [
              {
                "text": "ký 2 năm",
                "at": "l8:two years"
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
          "say": "Stop one, Monday. This is Thảo, who buys supplies for Cô Hoa's café.",
          "sub": "Chặng một, thứ Hai. Đây là Thảo, phụ trách mua hàng cho quán của Cô Hoa.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Bác Bình, her packaging supplier, punctual as a rooster.",
          "sub": "Còn đây là Bác Bình, nhà cung cấp bao bì, giao hàng đúng hẹn như gà gáy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Renewal time, Thảo. The price has to go up.",
          "sub": "Đến kỳ ký lại rồi cháu. Phải tăng giá thôi.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Then we'll move to another supplier!",
          "sub": "Tăng thì bên em chuyển chỗ khác!",
          "face": "stern",
          "pose": "cross"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two goats on a log bridge. He can only say: go ahead.",
          "sub": "Hai con dê gặp nhau trên cầu độc mộc. Bác chỉ còn đáp: cứ chuyển đi.",
          "keys": [
            "Hai con dê"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Sorry. Why does the price need to go up?",
          "sub": "Em xin lỗi. Bác tăng giá vì lý do gì ạ?",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "binh",
          "say": "A big client left me last year. I fear that again.",
          "sub": "Năm ngoái một khách lớn bỏ ngang. Bác sợ lại bị thế.",
          "face": "sad"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Now there's a door: sign two years, same price.",
          "sub": "Giờ mới có lối ra: ký hai năm để giữ giá.",
          "keys": [
            "ký hai năm để giữ giá"
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
      "ref": "p1,p2,p3"
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
            "id": "c-pos",
            "t": "text",
            "text": "Đòi gì → lập trường",
            "x": 3996,
            "y": 510,
            "size": 48,
            "at": "l1:position",
            "hl": [
              {
                "text": "lập trường",
                "at": "l1:position"
              }
            ]
          },
          {
            "id": "c-lo",
            "t": "text",
            "text": "Vì sao đòi → lợi ích",
            "x": 3996,
            "y": 580,
            "size": 48,
            "at": "l1:interest",
            "color": "accent",
            "hl": [
              {
                "text": "lợi ích",
                "at": "l1:interest"
              }
            ]
          },
          {
            "id": "c-ask",
            "t": "text",
            "text": "Nghe · nhắc lại · hỏi vì sao",
            "x": 3996,
            "y": 655,
            "size": 42,
            "at": "l3:repeat"
          },
          {
            "id": "c-rule",
            "t": "text",
            "text": "Hỏi “vì sao” trước, “không” sau",
            "x": 4816,
            "y": 705,
            "size": 40,
            "at": "l4:say no later",
            "color": "accent",
            "hl": [
              {
                "text": "“không” sau",
                "at": "l4:no later"
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
          "say": "What they ask for is a position. Why they ask is the interest.",
          "sub": "Điều người ta đòi là lập trường. Lý do họ đòi là lợi ích.",
          "keys": [
            "lập trường",
            "lợi ích"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Positions clash. Interests rarely clash completely.",
          "sub": "Lập trường hay chọi nhau. Lợi ích hiếm khi chọi hẳn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Listen, repeat it, then ask why softly. No answer? Offer two or three options.",
          "sub": "Nghe hết, nhắc lại, rồi hỏi lý do nhẹ nhàng. Không chịu nói? Đưa hai ba phương án.",
          "keys": [
            "hỏi lý do nhẹ nhàng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ask why first, say no later.",
          "sub": "Rút ra: hỏi vì sao trước, nói không sau.",
          "keys": [
            "hỏi vì sao trước, nói không sau"
          ]
        }
      ],
      "ref": "p1,p2,p4"
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
              "c-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-key",
            "t": "text",
            "text": "Giữ kín giới hạn cuối",
            "x": 3996,
            "y": 715,
            "size": 40,
            "at": "l2:to yourself",
            "color": "coral",
            "hl": [
              {
                "text": "giới hạn cuối",
                "at": "l2:lowest level"
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
          "say": "For us, long-term stability matters more than the lowest price.",
          "sub": "Bên em cần ổn định lâu dài hơn là giá rẻ nhất.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Share your priority. Keep your lowest level and plan B to yourself.",
          "sub": "Nói ra điều mình ưu tiên, nhưng mức thấp nhất và phương án B thì giữ cho riêng mình.",
          "keys": [
            "giữ cho riêng mình"
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
            "text": "② Thứ Hai tối · Điểm dừng",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:homework"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone",
                "memo"
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
            "at": "l1:night",
            "caption": "Thứ Hai 21:00 · ở nhà",
            "icon": "mobile-phone"
          },
          {
            "id": "d-b",
            "t": "text",
            "text": "BATNA = phương án B",
            "x": 5964,
            "y": 160,
            "size": 58,
            "at": "l2:BATNA",
            "color": "accent",
            "hl": [
              {
                "text": "phương án B",
                "at": "l2:Plan B"
              }
            ]
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 280,
            "w": 46,
            "h": 46,
            "at": "l4:target",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 262,
            "size": 58,
            "at": "l4:target+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Mục tiêu: theo giá thị trường",
            "x": 6034,
            "y": 270,
            "size": 42,
            "at": "l4:target+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 355,
            "w": 46,
            "h": 46,
            "at": "l5:walk-away",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 337,
            "size": 58,
            "at": "l5:walk-away+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Điểm dừng: mức kém nhất",
            "x": 6034,
            "y": 345,
            "size": 42,
            "at": "l5:walk-away+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 430,
            "w": 46,
            "h": 46,
            "at": "l5:plan B",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 412,
            "size": 58,
            "at": "l5:plan B+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Phương án B: nếu bỏ đi",
            "x": 6034,
            "y": 420,
            "size": 42,
            "at": "l5:plan B+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, Monday night. Thảo does homework before Wednesday.",
          "sub": "Chặng hai, tối thứ Hai. Thảo làm bài tập trước buổi gặp thứ Tư.",
          "keys": [
            "tối thứ Hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "First, her BATNA: the best alternative to no deal. Plan B, for short.",
          "sub": "Trước hết là BATNA: phương án tốt nhất nếu không đạt thoả thuận. Gọn lại: phương án B.",
          "keys": [
            "phương án B"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "If this fails, what will I actually do?",
          "sub": "Nếu lần này không thành, mình sẽ làm gì?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "While calm, she writes three things. A target, ambitious but based on market prices.",
          "sub": "Lúc còn bình tĩnh, cô ghi ba điều. Mục tiêu: hơi tham, nhưng dựa trên giá thị trường.",
          "keys": [
            "ba điều"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A walk-away point, the worst she'll accept. And plan B, if it's not reached.",
          "sub": "Điểm dừng: mức kém nhất còn nhận. Và phương án B nếu không đạt điểm dừng.",
          "keys": [
            "Điểm dừng"
          ]
        }
      ],
      "ref": "p6,p7"
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
            "at": "l3",
            "fit": [
              "d-g1",
              "d-g2"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l5",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-real",
            "t": "text",
            "text": "Phương án B phải có thật",
            "x": 6784,
            "y": 705,
            "size": 40,
            "at": "l1:real",
            "color": "accent",
            "hl": [
              {
                "text": "có thật",
                "at": "l1:real"
              }
            ]
          },
          {
            "id": "d-quote",
            "t": "text",
            "text": "→ báo giá 2–3 nơi",
            "x": 5964,
            "y": 510,
            "size": 46,
            "at": "l2:quotes",
            "hl": [
              {
                "text": "2–3 nơi",
                "at": "l2:three places"
              }
            ]
          },
          {
            "id": "d-g1",
            "t": "text",
            "text": "Giang: vải + công + lãi",
            "x": 5964,
            "y": 590,
            "size": 46,
            "at": "l3:Giang",
            "color": "muted"
          },
          {
            "id": "d-g2",
            "t": "text",
            "text": "“Mức này là hết rồi”",
            "x": 5964,
            "y": 670,
            "size": 46,
            "at": "l4:my limit",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Plan B only if it's real. A fake buyer? They say: sell to them!",
          "sub": "Chỉ nhắc phương án B khi nó có thật. Bịa ra người trả cao, bên kia bảo: bán cho họ đi!",
          "keys": [
            "có thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "To make it stronger, Thảo gets quotes from two or three places.",
          "sub": "Muốn phương án B mạnh hơn, Thảo xin báo giá hai ba nơi.",
          "keys": [
            "hai ba nơi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Giang, who sews uniforms, adds cloth, labour and minimum profit: her walk-away point.",
          "sub": "Như Giang may đồng phục: tiền vải, tiền công, lãi tối thiểu. Tổng đó là điểm dừng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "At the third discount request, she says: this price is my limit.",
          "sub": "Lần xin bớt thứ ba chạm số đã ghi, Giang nói: mức này là hết rồi chị ạ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Set your limit at home, not at the table.",
          "sub": "Rút ra: điểm dừng đặt ở nhà, không đặt giữa bàn.",
          "keys": [
            "đặt ở nhà"
          ]
        }
      ],
      "ref": "p8,p9,p10"
    },
    {
      "id": "s10",
      "module": "BRK-07",
      "data": {
        "question": "Nếu người cần thương lượng là mình, trước mặt sếp?",
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
          "say": "What if the one asking is you, facing your boss?",
          "sub": "Nếu người cần thương lượng là chính mình, trước mặt sếp?",
          "keys": [
            "trước mặt sếp"
          ]
        }
      ]
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
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Ba · Xin tăng lương",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Dũng"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "memo",
                "chart-increasing"
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
            "at": "l1:Dũng",
            "caption": "Thứ Ba · trước giờ gặp sếp",
            "icon": "chart-increasing"
          },
          {
            "id": "e-v1",
            "t": "text",
            "text": "Nói về giá trị ≠ tham",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l3:value",
            "color": "accent",
            "hl": [
              {
                "text": "giá trị",
                "at": "l3:value"
              }
            ]
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 270,
            "w": 46,
            "h": 46,
            "at": "l3:results",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 252,
            "size": 58,
            "at": "l3:results+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "3–5 kết quả, có số",
            "x": 8002,
            "y": 260,
            "size": 44,
            "at": "l3:results+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 342,
            "w": 46,
            "h": 46,
            "at": "l4:market",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 324,
            "size": 58,
            "at": "l4:market+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Lương thị trường",
            "x": 8002,
            "y": 332,
            "size": 44,
            "at": "l4:market+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 414,
            "w": 46,
            "h": 46,
            "at": "l4:target",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 396,
            "size": 58,
            "at": "l4:target+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Mục tiêu + điểm dừng",
            "x": 8002,
            "y": 404,
            "size": 44,
            "at": "l4:target+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 486,
            "w": 46,
            "h": 46,
            "at": "l4:extras",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 468,
            "size": 58,
            "at": "l4:extras+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "2 thứ ngoài lương",
            "x": 8002,
            "y": 476,
            "size": 44,
            "at": "l4:extras+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, Tuesday. Meet Dũng, Thảo's barista colleague. He wants a raise.",
          "sub": "Chặng ba, thứ Ba. Đây là Dũng, đồng nghiệp pha chế của Thảo. Hôm nay cậu xin tăng lương.",
          "keys": [
            "xin tăng lương"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Is that greedy? My hands shake like a milk frother.",
          "sub": "Xin thế có tham không? Tay em run như máy đánh sữa.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not if you talk about value. Bring three to five results, with numbers.",
          "sub": "Không tham, nếu bạn nói về giá trị. Mang theo ba đến năm kết quả, có con số.",
          "keys": [
            "giá trị"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The market salary, a target, a walk-away point, and two extras besides pay.",
          "sub": "Mức lương thị trường, một mục tiêu, một điểm dừng, và hai thứ ngoài lương."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
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
          }
        ],
        "items": [
          {
            "id": "e-mkt",
            "t": "text",
            "text": "Lý do: kết quả, thị trường",
            "x": 7932,
            "y": 570,
            "size": 46,
            "at": "l2:market",
            "color": "accent",
            "hl": [
              {
                "text": "kết quả, thị trường",
                "at": "l2:market"
              }
            ]
          },
          {
            "id": "e-rent",
            "t": "text",
            "text": "Tiền nhà tăng",
            "x": 7932,
            "y": 640,
            "size": 46,
            "at": "l2:rent",
            "color": "muted"
          },
          {
            "id": "e-rentx",
            "t": "strike",
            "over": "e-rent",
            "at": "l2:use"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Ask for a short private meeting, after a success or near reviews.",
          "sub": "Xin một buổi gặp riêng ngắn, sau một thành công hoặc quanh kỳ đánh giá."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Give results and market reasons. Rising rent is true, but bosses can't use it.",
          "sub": "Lý do là kết quả và mặt bằng thị trường. Tiền nhà tăng là thật, nhưng sếp khó dùng để đề xuất.",
          "keys": [
            "kết quả và mặt bằng thị trường"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s13",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Ba · phòng sếp",
        "actors": [
          {
            "id": "dung",
            "side": "left",
            "pose": "hold"
          },
          {
            "id": "hoa",
            "side": "right",
            "pose": "cross"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Tự hạ giá để lấp im lặng",
          "why": "Sếp gật ngay mức thấp hơn, dù ngân sách đủ cho mức ban đầu.",
          "rule": "Nói xong con số, để im lặng làm việc"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Based on my results, I'd like this salary level.",
          "sub": "Dựa trên kết quả, em đề xuất mức lương này ạ.",
          "pose": "give"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Or... a little lower is fine too!",
          "sub": "Hoặc… thấp hơn một chút cũng được ạ!",
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
          "say": "Three seconds of silence, and Dũng cut his own price. The budget was enough.",
          "sub": "Ba giây im lặng, Dũng tự cắt giá mình. Mà ngân sách vốn đủ.",
          "keys": [
            "tự cắt giá mình"
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
          "say": "Based on my results, I'd like this salary level.",
          "sub": "Dựa trên kết quả, em đề xuất mức lương này ạ.",
          "phase": "redo",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Then silence. Let it do the work.",
          "sub": "Rồi im. Để sự im lặng làm việc.",
          "phase": "redo",
          "keys": [
            "Để sự im lặng làm việc"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p13,p14"
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
          }
        ],
        "items": [
          {
            "id": "e-nb",
            "t": "text",
            "text": "“Hết ngân sách” → hỏi kỳ tới",
            "x": 7932,
            "y": 715,
            "size": 40,
            "at": "l1:budget",
            "color": "coral",
            "hl": [
              {
                "text": "hỏi kỳ tới",
                "at": "l1:next time"
              }
            ]
          },
          {
            "id": "e-mail",
            "t": "text",
            "text": "Hẹn ngày, email trong ngày",
            "x": 8772,
            "y": 705,
            "size": 40,
            "at": "l2:email",
            "color": "accent",
            "hl": [
              {
                "text": "email trong ngày",
                "at": "l2:same day"
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
          "say": "No budget this year? Ask which results you need for next time.",
          "sub": "Năm nay hết ngân sách? Hỏi cần đạt kết quả nào để được xem xét kỳ tới.",
          "keys": [
            "kỳ tới"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Agree on a review date, and email it the same day.",
          "sub": "Hẹn ngày xem lại, và gửi email ghi lại ngay trong ngày."
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
            "fit": "E",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "F",
            "ms": 900
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
            "at": "l6:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Tư · Đổi có điều kiện",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:again"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "package",
                "handshake"
              ]
            },
            "at": "l1:again",
            "caption": "Thứ Tư · xưởng bao bì",
            "icon": "handshake"
          },
          {
            "id": "f-no",
            "t": "text",
            "text": "≠ nhường cho êm, ≠ chia đôi",
            "x": 60,
            "y": 1250,
            "size": 46,
            "at": "l2:splitting",
            "color": "muted"
          },
          {
            "id": "f-yes",
            "t": "text",
            "text": "Mình tốn ít, họ coi trọng",
            "x": 60,
            "y": 1330,
            "size": 46,
            "at": "l3:cheap",
            "color": "accent",
            "hl": [
              {
                "text": "tốn ít",
                "at": "l3:cheap"
              }
            ]
          },
          {
            "id": "f-more",
            "t": "text",
            "text": "+ giao hàng, số lượng, thanh toán",
            "x": 60,
            "y": 1420,
            "size": 40,
            "at": "l4:delivery"
          },
          {
            "id": "f-if",
            "t": "text",
            "text": "“Nếu… thì…”",
            "x": 60,
            "y": 1510,
            "size": 80,
            "at": "l5:If",
            "color": "accent",
            "hl": [
              {
                "text": "Nếu… thì…",
                "at": "l5:If"
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
          "say": "Stop four, Wednesday. Thảo meets Bác Bình again, for win-win.",
          "sub": "Chặng bốn, thứ Tư. Thảo gặp lại Bác Bình, đến lúc win-win.",
          "keys": [
            "win-win"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Win-win isn't giving in, or splitting the difference.",
          "sub": "Win-win không phải nhường cho êm, cũng không phải chia đôi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Each side gives what's cheap for them, but valuable for the other.",
          "sub": "Mỗi bên đưa thứ mình tốn ít mà bên kia coi trọng nhiều.",
          "keys": [
            "tốn ít",
            "coi trọng nhiều"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So put more than price on the table: delivery, quantity, payment, warranty.",
          "sub": "Nên đưa thêm lên bàn ngoài giá: thời gian giao, số lượng, cách thanh toán, bảo hành."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "If you keep this year's price, we'll sign for two years.",
          "sub": "Nếu bác giữ giá như năm nay, bên em ký hai năm.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "binh",
          "say": "Two years? Then I can sleep well.",
          "sub": "Hai năm à? Vậy bác ngủ ngon rồi.",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "ref": "p16,p17,p3"
    },
    {
      "id": "s16",
      "module": "BRK-04",
      "data": {
        "title": "Tâm may rèm, khách xin giao sớm",
        "wrong": "“Dạ được, em làm kịp” — cho không",
        "right": "“Được ạ, nếu chị chuyển trước phần còn lại”",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrongIllus": "weary-face",
        "rightIllus": "handshake"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tâm says yes to early curtains, for free.",
          "sub": "Tâm nhận giao rèm sớm, cho không.",
          "keys": [
            "cho không"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Better: early is fine, if you pay first.",
          "sub": "Tốt hơn: giao sớm được, nếu chị chuyển trước phần còn lại.",
          "keys": [
            "nếu chị chuyển trước"
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-free",
            "t": "text",
            "text": "Cho không → bị đòi thêm",
            "x": 60,
            "y": 1630,
            "size": 50,
            "at": "l1:free",
            "color": "coral"
          },
          {
            "id": "f-cond",
            "t": "text",
            "text": "Có điều kiện → được tôn trọng",
            "x": 60,
            "y": 1710,
            "size": 50,
            "at": "l1:respect",
            "color": "accent",
            "hl": [
              {
                "text": "được tôn trọng",
                "at": "l1:respect"
              }
            ]
          },
          {
            "id": "f-col",
            "t": "text",
            "text": "Đồng nghiệp: mỗi người một phần",
            "x": 900,
            "y": 1795,
            "size": 38,
            "at": "l3:colleagues"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Free gifts invite more demands. Conditions earn respect.",
          "sub": "Cho không thì bị đòi thêm. Cho có điều kiện thì được tôn trọng.",
          "keys": [
            "được tôn trọng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Free means worthless to them. Give an inch, they take a mile.",
          "sub": "Cho không, họ nghĩ thứ đó chẳng đáng gì với bạn. Được đằng chân, lân đằng đầu.",
          "keys": [
            "Được đằng chân, lân đằng đầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Colleagues too: two people wanting one task often want different parts.",
          "sub": "Với đồng nghiệp cũng vậy: hai người muốn một việc thường muốn hai phần khác nhau của nó."
        }
      ],
      "ref": "p19,p20"
    },
    {
      "id": "s18",
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
            "text": "⑤ Thứ Năm · Bị giục gật ngay",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:calls"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "thinking",
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone",
                "hourglass-not-done"
              ]
            },
            "at": "l1:calls",
            "caption": "Thứ Năm · điện thoại reo",
            "icon": "hourglass-not-done"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "“Chỉ đến hết hôm nay”",
            "x": 2028,
            "y": 1250,
            "size": 50,
            "at": "l5:today",
            "color": "coral"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "“Còn một suất cuối”",
            "x": 2028,
            "y": 1325,
            "size": 50,
            "at": "l5:last place",
            "color": "coral"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "“Cấp trên chưa đồng ý”",
            "x": 2028,
            "y": 1400,
            "size": 50,
            "at": "l5:boss",
            "color": "coral"
          },
          {
            "id": "g-name",
            "t": "text",
            "text": "Gọi tên chiêu → nửa bình tĩnh",
            "x": 2028,
            "y": 1490,
            "size": 44,
            "at": "l6:half",
            "color": "accent",
            "hl": [
              {
                "text": "nửa bình tĩnh",
                "at": "l6:half calm"
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
          "say": "Stop five, Thursday. Bác Bình calls.",
          "sub": "Chặng năm, thứ Năm. Bác Bình gọi điện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "This two-year price is only until the end of today.",
          "sub": "Giá hai năm này chỉ đến hết hôm nay thôi nhé.",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I need to check the terms. I'll tell you tomorrow.",
          "sub": "Em cần xem lại điều khoản, mai em báo lại bác nhé.",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And if I sign tomorrow, how much more is it?",
          "sub": "Nếu mai em ký thì chênh bao nhiêu ạ?",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Only today, last place, boss not approved: classic pressure tricks.",
          "sub": "Chỉ đến hết hôm nay, còn một suất cuối, cấp trên chưa đồng ý: chiêu gây áp lực quen mặt."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Name the trick, and you're half calm.",
          "sub": "Gọi được tên chiêu là đã bình tĩnh được một nửa.",
          "keys": [
            "bình tĩnh được một nửa"
          ]
        }
      ],
      "ref": "p21,p22"
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
          }
        ],
        "items": [
          {
            "id": "g-wait",
            "t": "text",
            "text": "Hỏi giá của việc chờ",
            "x": 2028,
            "y": 1580,
            "size": 48,
            "at": "l1:waiting",
            "color": "accent",
            "hl": [
              {
                "text": "giá của việc chờ",
                "at": "l1:waiting"
              }
            ]
          },
          {
            "id": "g-one",
            "t": "text",
            "text": "Chờ một buổi, không mất",
            "x": 2868,
            "y": 1795,
            "size": 40,
            "at": "l2:rarely",
            "hl": [
              {
                "text": "không mất",
                "at": "l2:dies"
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
          "say": "Ask for a specific time, and the price of waiting, like Quyên. Compare with plan B.",
          "sub": "Xin thời gian cụ thể, hỏi giá của việc chờ như chị Quyên. Rồi so với phương án B.",
          "keys": [
            "giá của việc chờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A good offer rarely dies in one day.",
          "sub": "Lời đề nghị tốt hiếm khi mất chỉ vì bạn xin một buổi."
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s21",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Ai sợ im lặng, người đó nhường trước",
        "hl": "nhường trước",
        "sub": "Đi theo nhóm: thống nhất trước ai nói con số"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Whoever can't stand silence gives in first.",
          "sub": "Ai không chịu được im lặng, người đó nhường trước.",
          "keys": [
            "nhường trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In a team, agree first on who says the numbers.",
          "sub": "Đi theo nhóm thì thống nhất trước ai nói con số."
        }
      ],
      "ref": "p24,p25"
    },
    {
      "id": "s22",
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
          },
          {
            "at": "l4",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Sáu sáng · Chốt lại",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:agrees"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "spiral-calendar"
              ]
            },
            "at": "l1:agrees",
            "caption": "Thứ Sáu 10:00 · đồng ý ký",
            "icon": "spiral-calendar"
          },
          {
            "id": "h-sig",
            "t": "text",
            "text": "Hết đòi mới, hỏi ngày giao",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l3:demands"
          },
          {
            "id": "h-now",
            "t": "text",
            "text": "→ lúc chốt",
            "x": 3996,
            "y": 1325,
            "size": 56,
            "at": "l3:close",
            "color": "accent",
            "hl": [
              {
                "text": "lúc chốt",
                "at": "l3:close"
              }
            ]
          },
          {
            "id": "h-sum",
            "t": "text",
            "text": "“Để em chốt lại…”",
            "x": 3996,
            "y": 1420,
            "size": 52,
            "at": "l4:sum up+300"
          },
          {
            "id": "h-ok",
            "t": "text",
            "text": "“Đúng và đủ chưa ạ?”",
            "x": 3996,
            "y": 1500,
            "size": 52,
            "at": "l4:complete",
            "hl": [
              {
                "text": "Đúng và đủ",
                "at": "l4:complete"
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
          "say": "Stop six, Friday morning. Thảo agrees to sign.",
          "sub": "Chặng sáu, sáng thứ Sáu. Thảo đồng ý ký."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "So when do we start, and how will you pay?",
          "sub": "Vậy khi nào bắt đầu, bên cháu trả tiền thế nào?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No new demands, questions about delivery and payment: time to close.",
          "sub": "Không còn đòi thêm, bắt đầu hỏi ngày giao, cách trả tiền: đó là lúc chốt.",
          "keys": [
            "lúc chốt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Let me sum up what we agreed. Is that right and complete?",
          "sub": "Để em chốt lại những gì mình đã thống nhất nhé. Như vậy đã đúng và đủ chưa ạ?",
          "pose": "explain"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p26"
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
          }
        ],
        "items": [
          {
            "id": "h-msg",
            "t": "text",
            "text": "Tin nhắn trong ngày: 5 phần",
            "x": 3996,
            "y": 1600,
            "size": 46,
            "at": "l1:message",
            "color": "accent",
            "hl": [
              {
                "text": "trong ngày",
                "at": "l1:same day"
              }
            ]
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "cảm ơn · số · mốc · việc · xác nhận",
            "x": 3996,
            "y": 1680,
            "size": 36,
            "at": "l2:Thanks",
            "font": "base"
          },
          {
            "id": "h-law",
            "t": "text",
            "text": "Việc lớn → hợp đồng, chuyên gia",
            "x": 4836,
            "y": 1795,
            "size": 38,
            "at": "l3:contract",
            "color": "coral",
            "hl": [
              {
                "text": "hợp đồng",
                "at": "l3:contract"
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
          "say": "The same day, she sends a message in five parts.",
          "sub": "Ngay trong ngày, cô gửi tin nhắn xác nhận năm phần.",
          "keys": [
            "năm phần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thanks, key numbers, timeline, each side's tasks, and a request to confirm.",
          "sub": "Lời cảm ơn, các con số chính, mốc thời gian, việc của từng bên, lời đề nghị xác nhận."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But two years is a big deal. Make a contract, and ask an expert.",
          "sub": "Nhưng hai năm là việc lớn: tin nhắn chỉ là bước đầu. Làm hợp đồng, hỏi người có chuyên môn.",
          "keys": [
            "Làm hợp đồng"
          ]
        }
      ],
      "ref": "p27,p30"
    },
    {
      "id": "s24",
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
            "text": "⑦ Thứ Sáu 16:00 · Đặt bánh",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:cakes"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "shortcake",
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:cakes",
            "caption": "Thứ Sáu 16:00 · quầy quán",
            "icon": "shortcake"
          },
          {
            "id": "i-bad",
            "t": "text",
            "text": "“Đầu tuần sau anh giao”",
            "x": 5964,
            "y": 1250,
            "size": 48,
            "at": "l5:not a day",
            "color": "coral"
          },
          {
            "id": "i-badx",
            "t": "strike",
            "over": "i-bad",
            "at": "l5:written"
          },
          {
            "id": "i-msg",
            "t": "text",
            "text": "40 bánh · trước 7:00 thứ Hai",
            "x": 5964,
            "y": 1350,
            "size": 50,
            "at": "l5:fly",
            "color": "accent",
            "hl": [
              {
                "text": "trước 7:00 thứ Hai",
                "at": "l5:stay"
              }
            ]
          },
          {
            "id": "i-fee",
            "t": "text",
            "text": "Đã gồm phí giao · xác nhận",
            "x": 5964,
            "y": 1430,
            "size": 44,
            "at": "l5:stay"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, Friday afternoon. Cô Hoa orders cakes. Sound familiar?",
          "sub": "Chặng bảy, chiều thứ Sáu. Cô Hoa gọi đặt bánh. Nghe quen không?",
          "keys": [
            "Nghe quen không"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Great. So, deliver early next week, okay?",
          "sub": "Được rồi. Vậy đầu tuần sau anh giao nhé.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Cô Hoa, maybe confirm it in a message too?",
          "sub": "Cô ơi, cô nhắn lại một tin cho chắc ạ?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Confirming: forty cakes, before seven on Monday morning, delivery included. Please confirm.",
          "sub": "Em chốt: bốn mươi bánh, giao trước 7 giờ sáng thứ Hai, giá đã gồm phí giao. Anh xác nhận giúp em nhé.",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Early next week is not a day. Spoken words fly, written words stay.",
          "sub": "“Đầu tuần” không phải là một ngày. Lời nói gió bay, chữ viết ở lại.",
          "keys": [
            "không phải là một ngày"
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
      "ref": "p28,p29"
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
            "text": "Thứ Hai tuần sau · 7:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:same"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "face": "happy",
                  "pose": "thumb"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "shortcake",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
            "at": "l1:same",
            "caption": "Thứ Hai · 6:50",
            "icon": "shortcake"
          },
          {
            "id": "j-ok",
            "t": "text",
            "text": "Kệ bánh đầy ✓",
            "x": 7932,
            "y": 1270,
            "size": 64,
            "at": "l3:proof",
            "color": "accent",
            "hl": [
              {
                "text": "đầy",
                "at": "l3:proof"
              }
            ]
          },
          {
            "id": "j-wk",
            "t": "text",
            "text": "Không cãi, không gật vội",
            "x": 7932,
            "y": 1390,
            "size": 50,
            "at": "l3:nodded",
            "hl": [
              {
                "text": "không gật vội",
                "at": "l3:nodded"
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
          "say": "Monday again. Same café, same seven a.m.",
          "sub": "Lại thứ Hai. Vẫn quán ấy, vẫn bảy giờ sáng ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Forty cakes, before seven, no surprise fee. Lovely Monday!",
          "sub": "Bốn mươi bánh, trước bảy giờ, không phí bất ngờ. Thứ Hai đẹp quá!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Nobody argued, nobody nodded too fast. The cakes are proof.",
          "sub": "Chẳng ai cãi, chẳng ai gật vội. Kệ bánh là bằng chứng.",
          "keys": [
            "chẳng ai gật vội"
          ]
        }
      ],
      "ref": "p29"
    },
    {
      "id": "s26",
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
            "at": "l1:why",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:home",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:conditions",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:writing",
            "fit": "J",
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
            "x": 4636,
            "y": 340,
            "at": "l1:why+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6604,
            "y": 170,
            "at": "l2:home+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 600,
            "y": 1530,
            "at": "l2:conditions+400"
          },
          {
            "id": "z-s1",
            "t": "text",
            "text": "Chuỗi: nhu cầu thật → BATNA → lương",
            "x": 7932,
            "y": 1560,
            "size": 34,
            "at": "l3:stop",
            "font": "base"
          },
          {
            "id": "z-s2",
            "t": "text",
            "text": "→ win-win → bị ép → chốt bằng chữ",
            "x": 7932,
            "y": 1610,
            "size": 34,
            "at": "l3:lesson",
            "font": "base"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; hợp đồng lớn hoặc có yếu tố pháp lý, hỏi người có chuyên môn.",
            "x": 7932,
            "y": 1810,
            "size": 28,
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
          "say": "So: negotiating needs no silver tongue. Ask why first.",
          "sub": "Tóm lại: thương lượng không cần giỏi ăn nói. Hỏi vì sao trước.",
          "keys": [
            "Hỏi vì sao trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Set your limit at home, and trade with conditions.",
          "sub": "Đặt điểm dừng từ ở nhà, đổi có điều kiện.",
          "keys": [
            "đổi có điều kiện"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Don't nod in a hurry, and close it in writing. Each stop has its own lesson in this series.",
          "sub": "Đừng gật vội, và chốt bằng chữ. Mỗi chặng có một bài riêng trong chuỗi này.",
          "keys": [
            "chốt bằng chữ"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p31"
    },
    {
      "id": "s42",
      "module": "QUIZ-01",
      "ref": "questions[18]",
      "data": {
        "q": "Your boss says there is no budget this year, what is a good reply?",
        "options": [
          "Ask which results you need for next time and agree on a date to review",
          "Say you will leave the company if the answer does not change by tomorrow",
          "Thank the boss and never talk about your salary again in the future"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "money-bag",
        "why": "Lời từ chối hôm nay có thể là điểm bắt đầu của một kế hoạch có ngày hẹn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your boss says there is no budget this year, what is a good reply?",
          "sub": "Sếp nói năm nay không có ngân sách, bạn nên đáp thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Ask which results you need for next time and agree on a date to review.",
          "sub": "Hỏi cần đạt kết quả nào cho kỳ tới, và hẹn ngày xem lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Today's no can start a plan. Ask the goals, set a date, and email it the same day.",
          "sub": "Lời từ chối hôm nay có thể là khởi đầu một kế hoạch: hỏi mục tiêu, hẹn mốc, gửi email trong ngày."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s43",
      "module": "END-05",
      "data": {
        "text": "Hỏi trước, chốt bằng chữ",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Write one 'why' question for your next negotiation. Then try the forty questions below!",
          "sub": "Viết một câu hỏi “vì sao” cho lần thương lượng tới. Rồi thử bốn mươi câu bên dưới nhé!"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s25"
  }
};
