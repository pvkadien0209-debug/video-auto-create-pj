// Kịch bản video W lần 3 (#110) — "Bắt đầu bán hàng online cần chuẩn bị những gì?" · chuỗi "Bán hàng online cho người mới"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "start-selling-online--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "online-sellers",
    "slug": "start-selling-online",
    "door": "ky-nang",
    "level": "B1",
    "title": "Bắt đầu bán hàng online cần chuẩn bị những gì?",
    "series": "Bán hàng online cho người mới"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo THÁNG ĐẦU của Tiệm Nhà Lan (tối thứ Sáu → sáng thứ Bảy chợ đầu mối → Chủ nhật đặt giá → tuần 1 trang bán hàng → tuần 2 tin nhắn, đóng gói → tuần 3 bị chê → tối thứ Sáu một tháng sau). Nhân vật (w145/_series/online-sellers.md): Lan (chính: “bạn” p1, p5, p15, p29), Cô Hoa (chủ sạp mời lô lớn, dựng cho p5), Dũng (đặt giá theo shop khác p8; Bảo đơn đồng hồ p21), Thảo (trang áo len p13; Thư bị chê p25). Số liệu chỉ lấy từ bài (năm chiếc túi, hai tuần, mười chiếc đồng hồ, một tuần, 500 triệu đồng/năm, Nghị định 68/2026/NĐ-CP). Ngắt nhịp: BRK-04 (p5), BRK-09 nguồn thuế (p9), BRK-07 rehook (p15), BRK-02 (p22), BRK-01 (p24), BRK-08 lộ trình chuỗi (p30). Khoan đã: đơn đồng hồ của Dũng (p21). Khép vòng: “Một vốn bốn lời” → nhỏ, có ghi chép, vẫn còn bán. Lưu ý chung cuối bài (thuế). Bản cũ: w145/bak/start-selling-online--w01.js.",
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
            "id": "a-num",
            "t": "text",
            "text": "5 chiếc túi",
            "x": 60,
            "y": 130,
            "size": 150,
            "at": "l1:Five",
            "color": "accent",
            "hl": [
              {
                "text": "5 chiếc túi",
                "at": "l1:handbags"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "nhập thử, chưa nhập cả kho",
            "x": 70,
            "y": 350,
            "size": 56,
            "at": "l1:warehouse"
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: một vốn bốn lời?",
            "x": 70,
            "y": 460,
            "size": 52,
            "at": "l2:dream",
            "color": "muted"
          },
          {
            "id": "a-mx",
            "t": "strike",
            "over": "a-myth",
            "at": "l2:four"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five handbags, not a warehouse. That's how a smart little online shop begins.",
          "sub": "Năm chiếc túi, không phải cả kho. Shop online nhỏ mà khôn bắt đầu từ đó.",
          "keys": [
            "Năm chiếc túi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So forget the old dream: invest one, earn four.",
          "sub": "Nên quên giấc mơ “một vốn bốn lời” đi.",
          "keys": [
            "một vốn bốn lời"
          ]
        }
      ],
      "ref": "intro"
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
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "handbag",
                "mobile-phone"
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Sáu · phòng trọ của Lan",
            "icon": "handbag"
          },
          {
            "id": "a-wish",
            "t": "text",
            "text": "Không lỗ, không bom, không chê",
            "x": 70,
            "y": 580,
            "size": 44,
            "at": "l4:losses",
            "color": "coral"
          },
          {
            "id": "a-big",
            "t": "text",
            "text": "Ước to ghê!",
            "x": 70,
            "y": 660,
            "size": 50,
            "at": "l4:wish",
            "color": "accent",
            "hl": [
              {
                "text": "to ghê",
                "at": "l4:Big"
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
          "say": "Meet Lan.",
          "sub": "Đây là Lan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Office worker by day, dreamer by night, with a phone and free evenings.",
          "sub": "Ngày làm văn phòng, tối mơ mộng, có điện thoại và vài buổi tối rảnh.",
          "keys": [
            "vài buổi tối rảnh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "I want to sell online. But where do I start, without losing money?",
          "sub": "Em muốn bán online. Mà bắt đầu từ đâu để không lỗ đây?",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No losses, no fake orders, no bad reviews. Big wish list.",
          "sub": "Không lỗ, không bị bom hàng, không bị chê. Ước to ghê, Lan.",
          "keys": [
            "không bị bom hàng"
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
            "text": "Bắt đầu từ đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:start",
            "hl": [
              {
                "text": "từ đâu",
                "at": "l1:start"
              }
            ]
          },
          {
            "id": "b-c0",
            "t": "box",
            "x": 2028,
            "y": 270,
            "w": 50,
            "h": 50,
            "at": "l3:testing",
            "stroke": 5
          },
          {
            "id": "b-k0",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 252,
            "size": 62,
            "at": "l3:testing+600",
            "color": "accent"
          },
          {
            "id": "b-l0",
            "t": "text",
            "text": "Bán thử ít hàng trước",
            "x": 2103,
            "y": 262,
            "size": 44,
            "at": "l3:testing+200"
          },
          {
            "id": "b-c1",
            "t": "box",
            "x": 2028,
            "y": 345,
            "w": 50,
            "h": 50,
            "at": "l3:counting",
            "stroke": 5
          },
          {
            "id": "b-k1",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 327,
            "size": 62,
            "at": "l3:counting+600",
            "color": "accent"
          },
          {
            "id": "b-l1",
            "t": "text",
            "text": "Tính đủ phí rồi đặt giá",
            "x": 2103,
            "y": 337,
            "size": 44,
            "at": "l3:counting+200"
          },
          {
            "id": "b-c2",
            "t": "box",
            "x": 2028,
            "y": 420,
            "w": 50,
            "h": 50,
            "at": "l4:photos",
            "stroke": 5
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 402,
            "size": 62,
            "at": "l4:photos+600",
            "color": "accent"
          },
          {
            "id": "b-l2",
            "t": "text",
            "text": "Ảnh thật, câu trả lời mẫu",
            "x": 2103,
            "y": 412,
            "size": 44,
            "at": "l4:photos+200"
          },
          {
            "id": "b-c3",
            "t": "box",
            "x": 2028,
            "y": 495,
            "w": 50,
            "h": 50,
            "at": "l4:packing",
            "stroke": 5
          },
          {
            "id": "b-k3",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 477,
            "size": 62,
            "at": "l4:packing+600",
            "color": "accent"
          },
          {
            "id": "b-l3",
            "t": "text",
            "text": "Gói kỹ, ghi chép mọi đơn",
            "x": 2103,
            "y": 487,
            "size": 44,
            "at": "l4:packing+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So where does a new seller start?",
          "sub": "Vậy người mới bán online bắt đầu từ đâu?",
          "keys": [
            "bắt đầu từ đâu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But by testing a few items, and counting every cost before pricing,",
          "sub": "Mà là bán thử ít hàng, tính đủ chi phí rồi mới đặt giá,",
          "keys": [
            "bán thử ít hàng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "real photos, ready replies, careful packing, and notes on every order.",
          "sub": "ảnh hàng thật, câu trả lời mẫu, đóng gói kỹ, và ghi chép mọi đơn.",
          "keys": [
            "ghi chép mọi đơn"
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
            "id": "b-wk",
            "t": "text",
            "text": "Tháng đầu của Tiệm Nhà Lan",
            "x": 2028,
            "y": 545,
            "size": 52,
            "at": "l1:month",
            "hl": [
              {
                "text": "Tháng đầu",
                "at": "l1:first"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2008,
            "y": 620,
            "w": 225,
            "h": 90,
            "at": "l1:follow+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2248,
            "y": 620,
            "w": 225,
            "h": 90,
            "at": "l1:follow+480",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2488,
            "y": 620,
            "w": 225,
            "h": 90,
            "at": "l1:follow+660",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2728,
            "y": 620,
            "w": 225,
            "h": 90,
            "at": "l1:follow+840",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 620,
            "w": 225,
            "h": 90,
            "at": "l1:follow+1020",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3208,
            "y": 620,
            "w": 225,
            "h": 90,
            "at": "l1:follow+1200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3448,
            "y": 620,
            "w": 225,
            "h": 90,
            "at": "l1:follow+1380",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Thứ Sáu",
            "x": 2023,
            "y": 638,
            "size": 36,
            "at": "l1:follow+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Thứ Bảy",
            "x": 2263,
            "y": 638,
            "size": 36,
            "at": "l1:follow+600"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Chủ nhật",
            "x": 2503,
            "y": 638,
            "size": 36,
            "at": "l1:follow+780"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Tuần 1",
            "x": 2743,
            "y": 638,
            "size": 36,
            "at": "l1:follow+960"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Tuần 2",
            "x": 2983,
            "y": 638,
            "size": 36,
            "at": "l1:follow+1140"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Tuần 3",
            "x": 3223,
            "y": 638,
            "size": 36,
            "at": "l1:follow+1320"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Cuối tháng",
            "x": 3463,
            "y": 638,
            "size": 36,
            "at": "l1:follow+1500"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Lan's first month, stop by stop.",
          "sub": "Ta theo tháng đầu tiên của Lan, từng chặng một.",
          "keys": [
            "tháng đầu tiên"
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
            "at": "l3",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Sáu · Ba câu hỏi",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "notebook",
                "handbag"
              ]
            },
            "at": "l1:notebook",
            "caption": "Tối thứ Sáu · cuốn sổ mới",
            "icon": "notebook"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 180,
            "w": 50,
            "h": 50,
            "at": "l2:Who",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 162,
            "size": 62,
            "at": "l2:Who+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Bán cho ai?",
            "x": 4071,
            "y": 172,
            "size": 46,
            "at": "l2:Who+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 260,
            "w": 50,
            "h": 50,
            "at": "l2:What",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 242,
            "size": 62,
            "at": "l2:What+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Bán món gì?",
            "x": 4071,
            "y": 252,
            "size": 46,
            "at": "l2:What+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 340,
            "w": 50,
            "h": 50,
            "at": "l2:hours",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 322,
            "size": 62,
            "at": "l2:hours+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Mỗi tuần có mấy giờ?",
            "x": 4071,
            "y": 332,
            "size": 46,
            "at": "l2:hours+200"
          },
          {
            "id": "c-hot",
            "t": "text",
            "text": "→ chọn tỉnh táo, không theo “hot”",
            "x": 3996,
            "y": 430,
            "size": 42,
            "at": "l3:clear",
            "color": "accent",
            "hl": [
              {
                "text": "chọn tỉnh táo",
                "at": "l3:clear"
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
          "say": "First stop: Friday night. Before buying anything, Lan opens a notebook.",
          "sub": "Chặng một: tối thứ Sáu. Trước khi nhập gì, Lan mở sổ.",
          "keys": [
            "Lan mở sổ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Who do I sell to? What do I sell? How many hours a week do I have?",
          "sub": "Bán cho ai? Bán món gì? Mỗi tuần mình có mấy giờ?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Answer these, and you choose with a clear head, not by chasing what's hot.",
          "sub": "Trả lời được ba câu này, bạn chọn hàng tỉnh táo, không chạy theo món “hot”.",
          "keys": [
            "tỉnh táo"
          ]
        }
      ],
      "ref": "p1"
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
            "at": "l3",
            "fit": [
              "c-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-easy",
            "t": "text",
            "text": "Món dễ bắt đầu:",
            "x": 3996,
            "y": 520,
            "size": 46,
            "at": "l1:easy",
            "color": "accent"
          },
          {
            "id": "c-e1",
            "t": "text",
            "text": "hiểu rõ · thử được · khó vỡ",
            "x": 3996,
            "y": 590,
            "size": 40,
            "at": "l1:know",
            "hl": [
              {
                "text": "hiểu rõ",
                "at": "l1:know"
              }
            ]
          },
          {
            "id": "c-e2",
            "t": "text",
            "text": "nguồn gốc rõ · để lâu không hỏng",
            "x": 3996,
            "y": 660,
            "size": 40,
            "at": "l2:origin",
            "hl": [
              {
                "text": "nguồn gốc rõ",
                "at": "l2:origin"
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
          "say": "An easy first product: one you know, can test, won't break, and needs no licence.",
          "sub": "Món dễ bắt đầu: thứ bạn hiểu rõ, dùng thử được, không dễ vỡ, không cần giấy phép đặc biệt.",
          "keys": [
            "hiểu rõ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Clear origin with receipts, easy to pack, and it keeps if sales are slow.",
          "sub": "Nguồn gốc rõ, có hoá đơn, dễ gói, và bán chậm thì để lâu không hỏng.",
          "keys": [
            "Nguồn gốc rõ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Handbags, then. I know them, and they keep.",
          "sub": "Vậy là túi xách. Em hiểu nó, mà để lâu không hỏng.",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "ref": "p2,p3"
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
            "at": "l4:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Bảy · Chợ đầu mối",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "handbag",
                "package"
              ]
            },
            "at": "l1:market",
            "caption": "Sáng thứ Bảy · sạp Cô Hoa",
            "icon": "shopping-bags"
          },
          {
            "id": "d-big",
            "t": "text",
            "text": "Lô lớn = giá sỉ tốt?",
            "x": 5964,
            "y": 170,
            "size": 54,
            "at": "l3:wholesale",
            "color": "coral"
          },
          {
            "id": "d-sav",
            "t": "text",
            "text": "… mà hết tiền tiết kiệm",
            "x": 5964,
            "y": 260,
            "size": 44,
            "at": "l4:savings",
            "color": "muted",
            "hl": [
              {
                "text": "hết tiền tiết kiệm",
                "at": "l4:savings"
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
          "say": "Second stop: Saturday morning, the wholesale market.",
          "sub": "Chặng hai: sáng thứ Bảy, chợ đầu mối."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Cô Hoa, who has seen every trend come and go.",
          "sub": "Đây là Cô Hoa, chủ sạp đã thấy đủ mọi mốt đến rồi đi.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Everyone's posting this bag. Take a big lot, wholesale price!",
          "sub": "Mẫu túi này trên mạng đăng rần rần. Lấy nguyên lô đi, cô để giá sỉ!",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "A big lot? That's all my savings…",
          "sub": "Nguyên lô ạ? Vậy là hết sạch tiền tiết kiệm…",
          "face": "worried"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s09",
      "module": "BRK-04",
      "data": {
        "title": "Hai tuần sau, mẫu túi hết mốt",
        "wrong": "Dồn hết tiền nhập lô lớn: túi đầy phòng, vốn kẹt",
        "right": "Nhập năm chiếc, đăng thử, đếm người đặt thật",
        "wrongIllus": "money-with-wings",
        "rightIllus": "handbag"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Big lot, style dies: money stuck.",
          "sub": "Lô lớn, mẫu hết mốt: vốn kẹt, túi đầy phòng.",
          "keys": [
            "vốn kẹt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five bags: only a few to sell cheap.",
          "sub": "Năm chiếc: chỉ vài chiếc phải bán rẻ.",
          "keys": [
            "vài chiếc"
          ]
        }
      ],
      "ref": "p5"
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
            "at": 150,
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-five",
            "t": "text",
            "text": "Nhập 5 chiếc · đăng thử · đếm đơn",
            "x": 5964,
            "y": 360,
            "size": 44,
            "at": "l1:five",
            "color": "accent"
          },
          {
            "id": "d-loss",
            "t": "text",
            "text": "Ế → chỉ mất khoản nhỏ",
            "x": 5964,
            "y": 450,
            "size": 44,
            "at": "l2:flops",
            "hl": [
              {
                "text": "khoản nhỏ",
                "at": "l2:small"
              }
            ]
          },
          {
            "id": "d-rule",
            "t": "text",
            "text": "Bán thử trước, nhập nhiều sau",
            "x": 5964,
            "y": 570,
            "size": 58,
            "at": "l3:Test",
            "color": "accent",
            "hl": [
              {
                "text": "nhập nhiều sau",
                "at": "l3:later"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Just five bags for now, Cô Hoa. I'll post them and count real orders.",
          "sub": "Giờ con lấy năm chiếc thôi cô. Đăng thử rồi đếm người đặt thật.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Less profit per bag, but if it flops, you lose a small sum, not a room full of stock.",
          "sub": "Lời mỗi chiếc thấp hơn, nhưng nếu ế, chỉ mất khoản nhỏ thay vì cả kho hàng góc nhà.",
          "keys": [
            "chỉ mất khoản nhỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Test first, stock up later.",
          "sub": "Bán thử trước, nhập nhiều sau.",
          "keys": [
            "Bán thử trước"
          ]
        }
      ],
      "ref": "p4,p6"
    },
    {
      "id": "s12",
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
            "text": "③ Chủ nhật · Đặt giá",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "walk",
                  "at": "l2"
                }
              ],
              "props": [
                "handbag",
                "receipt"
              ]
            },
            "at": "l1:Sunday",
            "caption": "Chủ nhật · năm chiếc túi trên bàn",
            "icon": "receipt"
          },
          {
            "id": "e-copy",
            "t": "text",
            "text": "Nhìn shop khác, để rẻ hơn",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l3:cheaper",
            "color": "coral"
          },
          {
            "id": "e-why",
            "t": "text",
            "text": "họ vốn rẻ, chịu lỗ lâu",
            "x": 7932,
            "y": 255,
            "size": 40,
            "at": "l4:buy",
            "color": "muted"
          },
          {
            "id": "e-cx",
            "t": "strike",
            "over": "e-copy",
            "at": "l4:Copy"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Sunday. Now, what price?",
          "sub": "Chặng ba: Chủ nhật. Giờ đặt giá bao nhiêu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Enter Dũng, Lan's neighbour and fellow seller. Motto: send now, think later.",
          "sub": "Đây là Dũng, hàng xóm trọ, cũng bán online. Phương châm: gửi luôn, tính sau.",
          "keys": [
            "gửi luôn, tính sau"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Easy! Look at other shops, go a bit cheaper. Done!",
          "sub": "Dễ ợt! Nhìn shop khác, để rẻ hơn chút. Xong!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That shop may buy cheaper, or survive losses longer. Copy them, and you lose more.",
          "sub": "Shop kia có thể nhập rẻ hơn, chịu lỗ lâu hơn. Bắt chước họ, bạn bán càng nhiều càng lỗ.",
          "keys": [
            "càng nhiều càng lỗ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p8"
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
          }
        ],
        "items": [
          {
            "id": "e-carry",
            "t": "text",
            "text": "Giá bán phải gánh:",
            "x": 7932,
            "y": 345,
            "size": 48,
            "at": "l1:carry",
            "color": "accent",
            "hl": [
              {
                "text": "phải gánh",
                "at": "l1:carry"
              }
            ]
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 430,
            "w": 50,
            "h": 50,
            "at": "l1:goods",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 412,
            "size": 62,
            "at": "l1:goods+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Tiền hàng",
            "x": 8007,
            "y": 422,
            "size": 38,
            "at": "l1:goods+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 496,
            "w": 50,
            "h": 50,
            "at": "l2:packaging",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 478,
            "size": 62,
            "at": "l2:packaging+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Bao bì, băng keo, tem",
            "x": 8007,
            "y": 488,
            "size": 38,
            "at": "l2:packaging+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 562,
            "w": 50,
            "h": 50,
            "at": "l2:fees",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 544,
            "size": 62,
            "at": "l2:fees+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Phí sàn, quảng cáo",
            "x": 8007,
            "y": 554,
            "size": 38,
            "at": "l2:fees+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 628,
            "w": 50,
            "h": 50,
            "at": "l2:shipping",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 610,
            "size": 62,
            "at": "l2:shipping+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Phí giao mình chịu",
            "x": 8007,
            "y": 620,
            "size": 38,
            "at": "l2:shipping+200"
          },
          {
            "id": "e-c4",
            "t": "box",
            "x": 7932,
            "y": 694,
            "w": 50,
            "h": 50,
            "at": "l2:faulty",
            "stroke": 5
          },
          {
            "id": "e-k4",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 676,
            "size": 62,
            "at": "l2:faulty+600",
            "color": "accent"
          },
          {
            "id": "e-l4",
            "t": "text",
            "text": "Hàng lỗi, hàng hoàn",
            "x": 8007,
            "y": 686,
            "size": 38,
            "at": "l2:faulty+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your price must carry more than the goods.",
          "sub": "Giá bán phải gánh nhiều thứ hơn tiền hàng.",
          "keys": [
            "phải gánh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Packaging, tape, labels, platform or ad fees, shipping you pay, and faulty or returned items.",
          "sub": "Bao bì, băng keo, tem, phí sàn hoặc quảng cáo, phí giao mình chịu, phần hàng lỗi, hàng hoàn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Add it all up. Only then do you know what one bag really costs.",
          "sub": "Cộng hết lại, mới biết một chiếc túi thật sự tốn bao nhiêu.",
          "keys": [
            "thật sự tốn bao nhiêu"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s14",
      "module": "BRK-09",
      "data": {
        "kind": "Nguồn",
        "title": "Nghị định 68/2026/NĐ-CP",
        "detail": "Doanh thu năm ≤ 500 triệu: không thuế GTGT, TNCN",
        "illus": "receipt",
        "around": [
          "ledger",
          "spiral-calendar"
        ],
        "icon": "book-open"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tax: from twenty twenty-six, you declare it.",
          "sub": "Thuế: từ năm 2026, người bán tự kê khai.",
          "keys": [
            "tự kê khai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Under five hundred million a year? No VAT, no income tax.",
          "sub": "Doanh thu năm tới 500 triệu đồng: không thuế GTGT, TNCN.",
          "keys": [
            "500 triệu đồng"
          ]
        }
      ],
      "ref": "p9"
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
          }
        ],
        "items": [
          {
            "id": "e-tax1",
            "t": "text",
            "text": "Vẫn báo doanh thu · sàn khấu trừ",
            "x": 8752,
            "y": 710,
            "size": 32,
            "at": "l1:report",
            "font": "base",
            "hl": [
              {
                "text": "báo doanh thu",
                "at": "l1:report"
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
          "say": "You still report your income, and platforms with payment deduct tax for you. Rules may change, so check official guidance.",
          "sub": "Vẫn phải thông báo doanh thu thực tế; sàn có thanh toán thì khấu trừ, nộp thay. Quy định có thể đổi, hãy xem hướng dẫn chính thức.",
          "keys": [
            "thông báo doanh thu"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s16",
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
            "at": "l3:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Tuần 1 · Trang bán hàng",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "phone",
                  "face": "sad"
                },
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "walk",
                  "at": "l2"
                }
              ],
              "props": [
                "coat",
                "camera-with-flash"
              ]
            },
            "at": "l1:week",
            "caption": "Tuần đầu · nhà Thảo",
            "icon": "coat"
          },
          {
            "id": "f-trust",
            "t": "text",
            "text": "Khách tin ảnh, mô tả",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l1:photos",
            "hl": [
              {
                "text": "ảnh, mô tả",
                "at": "l1:words"
              }
            ]
          },
          {
            "id": "f-old",
            "t": "text",
            "text": "“Dày dặn, màu kem sang trọng”",
            "x": 60,
            "y": 1345,
            "size": 44,
            "at": "l3:thick",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: week one. Buyers can't touch the bag. They trust photos and words.",
          "sub": "Chặng bốn: tuần đầu. Khách không cầm được món hàng, nên họ tin vào ảnh và mô tả.",
          "keys": [
            "ảnh và mô tả"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lan visits Thảo, a friend who sells sweaters after her shift.",
          "sub": "Lan ghé Thảo, cô bạn bán áo len sau ca làm.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I used the supplier's photos: thick, elegant cream. Buyers found them paler, thinner, and sent them back.",
          "sub": "Mình dùng ảnh mẫu: “dày dặn, màu kem sang trọng”. Khách thấy nhạt hơn, mỏng hơn, gửi trả.",
          "face": "sad",
          "pose": "phone"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p10,p13"
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
            "at": "l2",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
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
            "id": "f-ox",
            "t": "strike",
            "over": "f-old",
            "at": "l1:Now"
          },
          {
            "id": "f-new",
            "t": "text",
            "text": "“Len mỏng vừa, kem nhạt”",
            "x": 60,
            "y": 1425,
            "size": 44,
            "at": "l1:wool",
            "color": "accent",
            "hl": [
              {
                "text": "kem nhạt",
                "at": "l1:cream"
              }
            ]
          },
          {
            "id": "f-real",
            "t": "text",
            "text": "Ảnh thật, đủ góc, có kích thước",
            "x": 60,
            "y": 1510,
            "size": 42,
            "at": "l3:angle"
          },
          {
            "id": "f-r1",
            "t": "text",
            "text": "Ảnh đẹp kéo khách vào,",
            "x": 60,
            "y": 1590,
            "size": 50,
            "at": "l3:pull"
          },
          {
            "id": "f-r2",
            "t": "text",
            "text": "ảnh thật giữ khách lại",
            "x": 60,
            "y": 1660,
            "size": 50,
            "at": "l3:keep",
            "color": "accent",
            "hl": [
              {
                "text": "giữ khách lại",
                "at": "l3:keep"
              }
            ]
          },
          {
            "id": "f-page",
            "t": "text",
            "text": "Tên shop · cách đặt · đổi trả · giờ trả lời",
            "x": 60,
            "y": 1770,
            "size": 32,
            "at": "l4:name",
            "font": "base"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now: her own photo by the window. Medium-thin wool, light cream.",
          "sub": "Giờ: ảnh tự chụp cạnh cửa sổ. “Len mỏng vừa, kem nhạt, màu có thể lệch chút theo màn hình”.",
          "keys": [
            "cạnh cửa sổ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Less shiny, but buyers get exactly what they saw.",
          "sub": "Kém lung linh hơn, nhưng khách nhận đúng thứ đã thấy.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Real photos from every angle, with sizes. Nice photos pull buyers in, real photos keep them.",
          "sub": "Ảnh thật, đủ góc, có kích thước. Ảnh đẹp kéo khách vào, ảnh thật giữ khách lại.",
          "keys": [
            "ảnh thật giữ khách lại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lan's page: shop name, how to order, shipping, returns, and reply hours.",
          "sub": "Trang của Lan: tên shop, cách đặt, phí giao, đổi trả, và giờ trả lời tin nhắn.",
          "keys": [
            "giờ trả lời tin nhắn"
          ]
        }
      ],
      "ref": "p11,p12,p13,p14"
    },
    {
      "id": "s19",
      "module": "BRK-07",
      "data": {
        "question": "Tin nhắn đầu tiên đến: trả lời sao để khách không bỏ đi?",
        "illus": "speech-balloon"
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
          "say": "The first message arrives. How do you keep that buyer?",
          "sub": "Tin nhắn đầu tiên đến. Trả lời sao để khách không bỏ đi?",
          "keys": [
            "không bỏ đi"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s20",
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
            "text": "⑤ Tuần 2 · Tin nhắn đầu tiên",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "mobile-phone",
                "speech-balloon"
              ]
            },
            "at": "l1:Ping",
            "caption": "Tuần 2 · giờ nghỉ trưa",
            "icon": "speech-balloon"
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "“Còn size M không shop?”",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l1:size"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "Đúng câu hỏi + bước tiếp theo",
            "x": 2028,
            "y": 1345,
            "size": 46,
            "at": "l3:exact",
            "color": "accent",
            "hl": [
              {
                "text": "bước tiếp theo",
                "at": "l3:next"
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
          "say": "Fifth stop: week two. Ping! Is this bag still in size M?",
          "sub": "Chặng năm: tuần hai. Ting! “Mẫu này còn size M không shop?”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Yes, we have size M. Could you send your address, so I can tell you the shipping fee?",
          "sub": "Dạ mẫu này còn size M ạ, chị cho em xin địa chỉ để em báo phí ship nhé?",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Most orders are won or lost in messages. Answer the exact question, then offer a next step.",
          "sub": "Phần lớn đơn được chốt hoặc bị bỏ ở tin nhắn. Trả lời đúng câu hỏi, rồi gợi ý bước tiếp theo.",
          "keys": [
            "bước tiếp theo"
          ]
        }
      ],
      "ref": "p15"
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
          }
        ],
        "items": [
          {
            "id": "g-tpl",
            "t": "text",
            "text": "Câu mẫu: giá, size, ship, đổi trả",
            "x": 2028,
            "y": 1435,
            "size": 40,
            "at": "l1:sample",
            "hl": [
              {
                "text": "Câu mẫu",
                "at": "l1:sample"
              }
            ]
          },
          {
            "id": "g-exp",
            "t": "text",
            "text": "Chê đắt: đừng vội giảm",
            "x": 2028,
            "y": 1515,
            "size": 42,
            "at": "l2:expensive"
          },
          {
            "id": "g-scam",
            "t": "text",
            "text": "Không đọc mã xác nhận",
            "x": 2028,
            "y": 1615,
            "size": 48,
            "at": "l3:code",
            "color": "coral"
          },
          {
            "id": "g-money",
            "t": "text",
            "text": "Tiền vào? Tự kiểm tài khoản",
            "x": 2028,
            "y": 1705,
            "size": 46,
            "at": "l3:Money",
            "color": "accent",
            "hl": [
              {
                "text": "Tự kiểm tài khoản",
                "at": "l3:own"
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
          "say": "Keep sample replies for price, size, shipping and returns.",
          "sub": "Chuẩn bị câu mẫu cho giá, size, chất liệu, phí giao, đổi trả, rồi chỉnh theo từng khách.",
          "keys": [
            "câu mẫu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Too expensive? Don't rush to cut. Ask back, explain the value.",
          "sub": "Khách chê đắt? Đừng vội giảm. Hỏi lại, nói rõ giá trị.",
          "keys": [
            "Đừng vội giảm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Strange links, codes, overpayments? Never read a code out. Money is real only in your own account.",
          "sub": "Link lạ, xin mã, “chuyển dư, trả lại giúp”? Không đọc mã cho ai. Tiền chỉ thật khi tự mở tài khoản kiểm tra.",
          "keys": [
            "Không đọc mã cho ai"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s23",
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
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Sáu · Đóng gói",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "package",
                "video-camera"
              ]
            },
            "at": "l1:orders",
            "caption": "Tối thứ Sáu · những đơn đầu tiên",
            "icon": "package"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1270,
            "w": 50,
            "h": 50,
            "at": "l2:Check",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1252,
            "size": 62,
            "at": "l2:Check+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Kiểm hàng trước khi gói",
            "x": 4071,
            "y": 1262,
            "size": 40,
            "at": "l2:Check+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1342,
            "w": 50,
            "h": 50,
            "at": "l2:fill",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1324,
            "size": 62,
            "at": "l2:fill+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Hộp vừa, chèn kín",
            "x": 4071,
            "y": 1334,
            "size": 40,
            "at": "l2:fill+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1414,
            "w": 50,
            "h": 50,
            "at": "l2:address",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1396,
            "size": 62,
            "at": "l2:address+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Tên, số điện thoại, địa chỉ",
            "x": 4071,
            "y": 1406,
            "size": 40,
            "at": "l2:address+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1486,
            "w": 50,
            "h": 50,
            "at": "l3:film",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1468,
            "size": 62,
            "at": "l3:film+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Quay video lúc gói",
            "x": 4071,
            "y": 1478,
            "size": 40,
            "at": "l3:film+200"
          },
          {
            "id": "h-c4",
            "t": "box",
            "x": 3996,
            "y": 1558,
            "w": 50,
            "h": 50,
            "at": "l4:tracking",
            "stroke": 5
          },
          {
            "id": "h-k4",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1540,
            "size": 62,
            "at": "l4:tracking+600",
            "color": "accent"
          },
          {
            "id": "h-l4",
            "t": "text",
            "text": "Lưu mã vận đơn, nhắn khách",
            "x": 4071,
            "y": 1550,
            "size": 40,
            "at": "l4:tracking+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: Friday night, week two. Lan's first orders!",
          "sub": "Chặng sáu: tối thứ Sáu tuần hai. Những đơn đầu tiên của Lan!",
          "keys": [
            "Những đơn đầu tiên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Check the item, fill the box, write the address clearly.",
          "sub": "Kiểm hàng trước khi gói. Hộp vừa, chèn kín. Tên, số điện thoại, địa chỉ ghi rõ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "And I film myself packing. It costs nothing.",
          "sub": "Và em quay video lúc đóng gói. Chẳng tốn đồng nào.",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It saves you if something's missing. Then send the tracking code.",
          "sub": "Video cứu bạn khi khách báo thiếu, báo lỗi. Rồi nhắn mã vận đơn cho khách.",
          "keys": [
            "báo thiếu, báo lỗi"
          ]
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s24",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Phòng bên · cùng tối",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Gửi đơn lớn mà không gọi xác nhận",
          "why": "Một tuần sau hàng quay về, không ai nghe máy, chịu phí giao hai chiều, hộp móp.",
          "rule": "Đơn càng lớn, càng phải gọi trước khi gói"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Next door, Dũng gets ten watches ordered, from a brand-new account.",
          "sub": "Phòng bên, Dũng nhận đơn mười chiếc đồng hồ, từ một tài khoản mới tạo.",
          "keys": [
            "tài khoản mới tạo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "They want them today! No need to call. I'll send it now!",
          "sub": "Khách giục gửi gấp hôm nay! Khỏi gọi. Gửi luôn!",
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
          "say": "A week later it comes back. Nobody answers. Two-way shipping, and a dented box.",
          "sub": "Một tuần sau, hàng quay về. Không ai nghe máy. Chịu phí hai chiều, hộp còn móp.",
          "keys": [
            "phí hai chiều"
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
          "say": "Big order, new account. I'll call to confirm first.",
          "sub": "Đơn lớn, tài khoản mới. Gọi xác nhận trước đã.",
          "phase": "redo",
          "face": "thinking",
          "pose": "phone"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p21"
    },
    {
      "id": "s25",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Gọi trước khi gói",
        "hl": "Gọi trước",
        "sub": "Đơn càng lớn, khách càng mới, càng phải gọi"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The bigger the order,",
          "sub": "Đơn càng lớn,"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "the more you must call before you pack.",
          "sub": "càng phải gọi trước khi gói.",
          "keys": [
            "gọi trước khi gói"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s26",
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
            "id": "h-bom",
            "t": "text",
            "text": "Bom hàng: đặt rồi không nhận",
            "x": 3996,
            "y": 1650,
            "size": 42,
            "at": "l1:fake",
            "color": "coral"
          },
          {
            "id": "h-cost",
            "t": "text",
            "text": "→ mất ship hai chiều, bao bì",
            "x": 3996,
            "y": 1720,
            "size": 38,
            "at": "l1:shipping"
          },
          {
            "id": "h-call",
            "t": "text",
            "text": "Đơn lớn, khách mới: gọi trước",
            "x": 3996,
            "y": 1790,
            "size": 40,
            "at": "l2:call",
            "color": "accent",
            "hl": [
              {
                "text": "gọi trước",
                "at": "l2:call"
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
          "say": "A fake order: ordered, then refused. You lose two-way shipping, time and packaging.",
          "sub": "Bom hàng: đặt rồi không nhận. Bạn mất phí giao hai chiều, thời gian và bao bì.",
          "keys": [
            "Bom hàng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A quick call before shipping filters many out.",
          "sub": "Gọi xác nhận trước khi gửi lọc bớt đơn ảo.",
          "keys": [
            "lọc bớt đơn ảo"
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
            "at": "l3",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Tuần 3 · Bị chê công khai",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh"
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
                  "pose": "phone",
                  "face": "stern"
                }
              ],
              "props": [
                "mobile-phone",
                "hot-face"
              ]
            },
            "at": "l1:Thảo",
            "caption": "Tuần 3 · tối muộn sau ca làm",
            "icon": "hot-face"
          },
          {
            "id": "i-bad",
            "t": "text",
            "text": "“Hàng như hàng chợ”",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l1:cheap",
            "color": "coral"
          },
          {
            "id": "i-reply",
            "t": "text",
            "text": "“Không biết dùng thì đừng chê!”",
            "x": 5964,
            "y": 1350,
            "size": 44,
            "at": "l2:complain"
          },
          {
            "id": "i-rx",
            "t": "strike",
            "over": "i-reply",
            "at": "l3:reply"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: week three. Tired Thảo gets a review: like cheap market goods.",
          "sub": "Chặng bảy: tuần ba. Thảo mệt rã sau ca làm thì nhận đánh giá: “hàng như hàng chợ”.",
          "keys": [
            "hàng như hàng chợ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'm exhausted. Answering now: if you can't use it, don't complain!",
          "sub": "Mệt quá. Trả lời luôn: chị không biết dùng thì đừng chê!",
          "face": "stern",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Screenshotted, shared. Soon nobody remembers the complaint, only the shop's reply.",
          "sub": "Bị chụp lại, lan đi. Ít hôm sau chẳng ai nhắc lời chê, chỉ nhắc câu trả lời của shop.",
          "keys": [
            "câu trả lời của shop"
          ]
        }
      ],
      "ref": "p25"
    },
    {
      "id": "s28",
      "module": "BRK-01",
      "data": {
        "illus": "mobile-phone",
        "around": [
          "hot-face",
          "speech-balloon"
        ],
        "label": "Sai ở đây!",
        "note": "Trả lời lời chê ngay lúc đang mệt, đang nóng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop right there.",
          "sub": "Dừng lại đã."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Readers watch your reply more than the complaint.",
          "sub": "Người đọc nhìn cách bạn trả lời nhiều hơn lời chê.",
          "keys": [
            "cách bạn trả lời"
          ]
        }
      ],
      "ref": "p24"
    },
    {
      "id": "s29",
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
            "at": "l2",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
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
            "id": "i-c1",
            "t": "text",
            "text": "Bình tĩnh → cảm ơn → hỏi rõ",
            "x": 5964,
            "y": 1440,
            "size": 42,
            "at": "l1:calm"
          },
          {
            "id": "i-c2",
            "t": "text",
            "text": "→ mời nhắn riêng",
            "x": 6004,
            "y": 1500,
            "size": 42,
            "at": "l1:privately"
          },
          {
            "id": "i-rule",
            "t": "text",
            "text": "Nóng thì đợi, nguội mới đáp",
            "x": 5964,
            "y": 1575,
            "size": 50,
            "at": "l3:hot",
            "color": "accent",
            "hl": [
              {
                "text": "nguội mới đáp",
                "at": "l3:cooled"
              }
            ]
          },
          {
            "id": "i-ret",
            "t": "text",
            "text": "Đổi trả: chuyện bình thường",
            "x": 5964,
            "y": 1670,
            "size": 42,
            "at": "l4:Returns"
          },
          {
            "id": "i-pol",
            "t": "text",
            "text": "Chính sách: thời hạn, điều kiện, phí",
            "x": 5964,
            "y": 1740,
            "size": 38,
            "at": "l4:policy",
            "hl": [
              {
                "text": "thời hạn, điều kiện, phí",
                "at": "l4:pays"
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
          "say": "Wait till you're calm. Thank them, ask what happened, invite them to message privately.",
          "sub": "Chờ bình tĩnh. Cảm ơn, hỏi rõ chuyện, mời khách nhắn riêng.",
          "keys": [
            "mời khách nhắn riêng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Thank you for telling us. Could you message us, so we can sort it out?",
          "sub": "Cảm ơn chị đã góp ý. Chị nhắn riêng giúp em để em xem lại nhé?",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "When you're hot, wait. Reply once you've cooled down.",
          "sub": "Nóng thì đợi, nguội rồi mới trả lời.",
          "keys": [
            "Nóng thì đợi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Returns are normal. Write a policy: how long, what conditions, who pays shipping.",
          "sub": "Đổi trả cũng là chuyện bình thường. Ghi sẵn chính sách: đổi bao lâu, điều kiện gì, ai trả phí giao.",
          "keys": [
            "chính sách"
          ]
        }
      ],
      "ref": "p24,p26,p23"
    },
    {
      "id": "s31",
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
            "text": "Một tháng sau · Ít đơn?",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:month"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "sad"
                }
              ],
              "props": [
                "notebook",
                "handbag"
              ]
            },
            "at": "l1:Friday",
            "caption": "Tối thứ Sáu · một tháng sau",
            "icon": "notebook"
          },
          {
            "id": "j-ok",
            "t": "text",
            "text": "Tháng đầu ít đơn: bình thường",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l3:normal"
          },
          {
            "id": "j-measure",
            "t": "text",
            "text": "Đo bằng: hiểu khách thêm gì",
            "x": 7932,
            "y": 1340,
            "size": 42,
            "at": "l3:learned",
            "color": "accent",
            "hl": [
              {
                "text": "hiểu khách thêm gì",
                "at": "l3:buyers"
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
          "say": "Last stop: Friday night, a month later.",
          "sub": "Chặng cuối: tối thứ Sáu, một tháng sau. Lại phòng trọ của Lan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "So few orders. The big shops sell so much more…",
          "sub": "Ít đơn quá. Shop lớn bán nhiều hơn hẳn…",
          "face": "sad",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Few orders in month one is normal. Measure what you learned about buyers.",
          "sub": "Tháng đầu ít đơn là bình thường. Đừng đo bằng shop lâu năm. Hãy đo bằng việc hiểu thêm gì về khách.",
          "keys": [
            "hiểu thêm gì về khách"
          ]
        }
      ],
      "ref": "p27"
    },
    {
      "id": "s32",
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
            "at": "l2",
            "fit": [
              "j-v"
            ],
            "zoom": 1.3,
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
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1425,
            "w": 50,
            "h": 50,
            "at": "l1:profit",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1407,
            "size": 62,
            "at": "l1:profit+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Mỗi đơn: ngày, món, giá, lời",
            "x": 8007,
            "y": 1417,
            "size": 34,
            "at": "l1:profit+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1497,
            "w": 50,
            "h": 50,
            "at": "l1:questions",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1479,
            "size": 62,
            "at": "l1:questions+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Câu khách hay hỏi",
            "x": 8007,
            "y": 1489,
            "size": 34,
            "at": "l1:questions+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1569,
            "w": 50,
            "h": 50,
            "at": "l1:returns",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1551,
            "size": 62,
            "at": "l1:returns+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Đơn hoàn và lý do",
            "x": 8007,
            "y": 1561,
            "size": 34,
            "at": "l1:returns+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1641,
            "w": 50,
            "h": 50,
            "at": "l1:week",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1623,
            "size": 62,
            "at": "l1:week+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Mỗi tuần xem lại",
            "x": 8007,
            "y": 1633,
            "size": 34,
            "at": "l1:week+200"
          },
          {
            "id": "j-hours",
            "t": "text",
            "text": "Đặt giờ trả lời cố định",
            "x": 7932,
            "y": 1710,
            "size": 42,
            "at": "l2:fixed",
            "color": "accent",
            "hl": [
              {
                "text": "cố định",
                "at": "l2:fixed"
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
          "say": "Her notebook: each order's profit, common questions, returns and why. Reviewed every week.",
          "sub": "Sổ của Lan: ngày, món, giá, phí, lời. Câu khách hay hỏi, đơn hoàn và lý do. Mỗi tuần xem lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "I sell after work, so I set fixed reply hours, and show them on my page.",
          "sub": "Em bán ngoài giờ làm, nên đặt giờ trả lời cố định, ghi rõ trên trang.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Buyers wait if they're told. And Lan isn't glued to her phone all day.",
          "sub": "Khách chịu chờ nếu được báo trước. Còn Lan khỏi dính điện thoại cả ngày.",
          "keys": [
            "được báo trước"
          ]
        }
      ],
      "ref": "p28,p29"
    },
    {
      "id": "s33",
      "module": "BRK-08",
      "data": {
        "title": "Các bài tiếp theo trong chuỗi",
        "points": [
          {
            "label": "Chọn hàng",
            "sub": "và nguồn hàng",
            "illus": "package"
          },
          {
            "label": "Lãi thật",
            "sub": "trước khi đăng bán",
            "illus": "money-bag"
          },
          {
            "label": "Ảnh, mô tả",
            "sub": "trung thực",
            "illus": "camera-with-flash"
          },
          {
            "label": "Tin nhắn",
            "sub": "khách chê đắt",
            "illus": "speech-balloon"
          },
          {
            "label": "Gói, đổi trả",
            "sub": "bom hàng, lời chê",
            "illus": "delivery-truck"
          },
          {
            "label": "Chiêu lừa",
            "sub": "bài cuối chuỗi",
            "illus": "warning"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Each stop has a deeper lesson.",
          "sub": "Mỗi chặng có một bài đào sâu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next up: choosing products, then real profit.",
          "sub": "Tiếp theo: chọn hàng, rồi lãi thật mỗi đơn.",
          "keys": [
            "chọn hàng"
          ]
        }
      ],
      "ref": "p30"
    },
    {
      "id": "s34",
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
            "at": "l2",
            "fit": [
              "j-v"
            ],
            "zoom": 1.3,
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
            "id": "j-ca",
            "t": "text",
            "text": "“Một vốn bốn lời”?",
            "x": 8752,
            "y": 1770,
            "size": 44,
            "at": "l1:dream",
            "color": "muted"
          },
          {
            "id": "j-cax",
            "t": "strike",
            "over": "j-ca",
            "at": "l2:yet"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "→ nhỏ, có ghi chép, còn bán",
            "x": 7932,
            "y": 1790,
            "size": 40,
            "at": "l3:Small",
            "color": "accent",
            "hl": [
              {
                "text": "còn bán",
                "at": "l3:business"
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
          "say": "And the dream: invest one, earn four?",
          "sub": "Còn giấc mơ “một vốn bốn lời”?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Not yet. But I know where every coin went.",
          "sub": "Chưa đâu. Nhưng em biết từng đồng đi đâu.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A real start: small, written down, still in business.",
          "sub": "Vậy là khởi đầu thật: nhỏ, có ghi chép, và vẫn còn bán.",
          "keys": [
            "khởi đầu thật"
          ]
        }
      ],
      "ref": "outro"
    },
    {
      "id": "s35",
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
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l3",
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
            "x": 6604,
            "y": 450,
            "at": "l1:stock"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 4636,
            "y": 1650,
            "at": "l2:call"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6604,
            "y": 1500,
            "at": "l3:wait"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "d-rule"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l1:later"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; quy định thuế có thể thay đổi, xem hướng dẫn chính thức.",
            "x": 7932,
            "y": 1845,
            "size": 22,
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
          "say": "So: test first, stock up later.",
          "sub": "Tóm lại: bán thử trước, nhập nhiều sau.",
          "keys": [
            "bán thử trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The bigger the order, the more you call before packing.",
          "sub": "Đơn càng lớn, càng phải gọi trước khi gói.",
          "keys": [
            "gọi trước khi gói"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And when you're hot, wait.",
          "sub": "Và nóng thì đợi.",
          "keys": [
            "nóng thì đợi"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p6,p22,p26"
    },
    {
      "id": "s39",
      "module": "QUIZ-01",
      "ref": "questions[24]",
      "data": {
        "q": "Someone posts a public complaint about your shop, what should you do first?",
        "options": [
          "Delete the comment right away and block the person so nobody else sees it",
          "Reply at once and explain in detail why the buyer is wrong about everything",
          "Wait until you are calm, thank them, ask what happened, and move to private messages"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "speech-balloon",
        "why": "Người khác nhìn cách bạn trả lời hơn là lời chê. Xoá hay cãi lại dễ làm chuyện nhỏ lan to."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Someone posts a public complaint about your shop, what should you do first?",
          "sub": "Có người đăng lời chê công khai về shop, bạn nên làm gì trước?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Wait until you are calm, thank them, ask what happened, and move to private messages.",
          "sub": "Đợi bình tĩnh, cảm ơn, hỏi rõ chuyện, rồi mời nhắn riêng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "People watch your reply more than the complaint. Deleting or arguing makes it bigger.",
          "sub": "Người xem nhìn cách bạn trả lời. Xoá hay cãi lại dễ làm chuyện lan to."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s40",
      "module": "END-05",
      "data": {
        "text": "Bắt đầu nhỏ, có ghi chép",
        "sub": "Bốn mươi câu hỏi đang chờ bạn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Write your answers: who, what, how many hours. Then try the forty questions below!",
          "sub": "Viết ra: bán cho ai, món gì, bao nhiêu giờ. Rồi thử bốn mươi câu bên dưới nhé!"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s31"
  }
};
