// procurement-epc-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "procurement-epc-overview--w01",
  "unit": {
    "audience": "epc-procurement",
    "slug": "procurement-epc-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Chọn nhà thầu EPC: hồ sơ thầu biến thành hợp đồng thế nào?",
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
            "fit": [
              "a-pg",
              "a-l2"
            ],
            "zoom": 1.25,
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
            "id": "a-pg",
            "t": "illus",
            "name": "page-facing-up",
            "x": 60,
            "y": 90,
            "size": 150,
            "at": "l1:paper"
          },
          {
            "id": "a-l1",
            "t": "text",
            "text": "Biên bản thương thảo",
            "x": 230,
            "y": 100,
            "size": 64,
            "at": "l1:paper"
          },
          {
            "id": "a-l2",
            "t": "text",
            "text": "Bảo lãnh: thêm [ ] ngày",
            "x": 230,
            "y": 200,
            "size": 56,
            "at": "l2:extend",
            "color": "coral",
            "hl": [
              {
                "text": "thêm [ ] ngày",
                "at": "l2:days"
              }
            ]
          },
          {
            "id": "a-l3",
            "t": "text",
            "text": "sau bàn giao",
            "x": 300,
            "y": 280,
            "size": 44,
            "at": "l2:handover"
          },
          {
            "id": "a-l4",
            "t": "text",
            "text": "Hai bên đã ký ✓",
            "x": 230,
            "y": 360,
            "size": 50,
            "at": "l3:signed",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One sheet of paper, from the last negotiation round.",
          "sub": "Một tờ giấy, từ vòng thương thảo cuối.",
          "keys": [
            "vòng thương thảo cuối"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The contractor agrees to extend the performance guarantee by so many days after handover.",
          "sub": "Nhà thầu đồng ý kéo dài bảo lãnh thực hiện thêm [ ] ngày sau bàn giao.",
          "keys": [
            "kéo dài bảo lãnh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Both sides signed it. Remember this sheet.",
          "sub": "Hai bên đã ký. Nhớ tờ giấy này nhé.",
          "keys": [
            "Nhớ tờ giấy này"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
      "ref": "intro,p11"
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
                  "face": "happy",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "page-facing-up",
                "clipboard"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · ban mua sắm",
            "icon": "page-facing-up"
          },
          {
            "id": "a-t",
            "t": "text",
            "text": "Thảo: trưởng ban mua sắm",
            "x": 60,
            "y": 470,
            "size": 40,
            "at": "l1:procurement"
          },
          {
            "id": "a-d",
            "t": "text",
            "text": "Dũng: chuyên viên trẻ",
            "x": 60,
            "y": 530,
            "size": 40,
            "at": "l3:Dũng"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Nói như đinh đóng cột”",
            "x": 60,
            "y": 620,
            "size": 54,
            "at": "l5:nail",
            "color": "accent",
            "hl": [
              {
                "text": "đinh đóng cột",
                "at": "l5:nail"
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
          "say": "Meet Thảo, head of procurement at a power plant owner. Her first EPC tender.",
          "sub": "Đây là Thảo, trưởng ban mua sắm của một chủ đầu tư nhà máy điện. Gói EPC đầu tiên.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Signed minutes! The guarantee is longer now. Done, right?",
          "sub": "Biên bản ký rồi! Bảo lãnh đã dài thêm. Xong rồi nhỉ?",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Dũng, her young officer, always one click from send.",
          "sub": "Còn đây là Dũng, chuyên viên trẻ, luôn sẵn tay bấm gửi.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Done! They promised it at the table, like a nail in a post.",
          "sub": "Xong! Họ hứa ngay tại bàn, chắc như đinh đóng cột.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A promise like a nail in a post. But which post? The signed contract.",
          "sub": "“Nói như đinh đóng cột.” Nhưng đóng vào cột nào? Cột ấy là bản hợp đồng ký.",
          "keys": [
            "Nói như đinh đóng cột"
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
            "text": "Thầu → hợp đồng thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:become",
            "hl": [
              {
                "text": "hợp đồng",
                "at": "l1:contract"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: chỉ chọn ai",
            "x": 2028,
            "y": 180,
            "size": 48,
            "at": "l2:who",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:but"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: có vào bản ký?",
            "x": 2028,
            "y": 270,
            "size": 48,
            "at": "l3:signed",
            "color": "accent",
            "hl": [
              {
                "text": "vào bản ký",
                "at": "l3:signed"
              }
            ]
          },
          {
            "id": "b-fish",
            "t": "text",
            "text": "Chưa thành chữ = cá chưa vào giỏ",
            "x": 2028,
            "y": 370,
            "size": 40,
            "at": "l4:fish",
            "color": "coral",
            "hl": [
              {
                "text": "cá chưa vào giỏ",
                "at": "l4:basket"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Một tuần thương thảo, sáu chặng",
            "x": 2028,
            "y": 480,
            "size": 44,
            "at": "l5:week"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 570,
            "w": 240,
            "h": 90,
            "at": "l5:week+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 570,
            "w": 240,
            "h": 90,
            "at": "l5:week+750",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 570,
            "w": 240,
            "h": 90,
            "at": "l5:week+1000",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 570,
            "w": 240,
            "h": 90,
            "at": "l5:week+1250",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 570,
            "w": 240,
            "h": 90,
            "at": "l5:week+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 570,
            "w": 240,
            "h": 90,
            "at": "l5:week+1750",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2",
            "x": 2068,
            "y": 585,
            "size": 46,
            "at": "l5:week+620"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3",
            "x": 2338,
            "y": 585,
            "size": 46,
            "at": "l5:week+870"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T4",
            "x": 2608,
            "y": 585,
            "size": 46,
            "at": "l5:week+1120"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T5",
            "x": 2878,
            "y": 585,
            "size": 46,
            "at": "l5:week+1370"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T6",
            "x": 3148,
            "y": 585,
            "size": 46,
            "at": "l5:week+1620"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T2 sau",
            "x": 3418,
            "y": 585,
            "size": 46,
            "at": "l5:week+1870"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how does a bid really become the contract you sign?",
          "sub": "Vậy hồ sơ thầu thật sự biến thành hợp đồng ký như thế nào?",
          "keys": [
            "biến thành hợp đồng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not only who wins.",
          "sub": "Không chỉ là chọn ai."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But whether what you agreed is really in the signed contract.",
          "sub": "Mà là điều đã chốt có thật sự nằm trong bản ký không.",
          "keys": [
            "bản ký"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Until then, it's a fish that's not in the basket yet.",
          "sub": "Chưa thành câu chữ thì vẫn là cá chưa vào giỏ.",
          "keys": [
            "cá chưa vào giỏ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Follow Thảo's final negotiation week.",
          "sub": "Theo Thảo qua tuần thương thảo cuối."
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
            "text": "① Thứ Hai · Chọn mô hình",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "c-epc",
            "t": "text",
            "text": "EPC: thiết kế → bàn giao",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l2:design",
            "color": "accent",
            "hl": [
              {
                "text": "EPC",
                "at": "l2:EPC"
              }
            ]
          },
          {
            "id": "c-ep",
            "t": "text",
            "text": "EP · EC · PC: từng phần",
            "x": 3996,
            "y": 250,
            "size": 46,
            "at": "l2:handover"
          },
          {
            "id": "c-tk",
            "t": "text",
            "text": "Chìa khoá trao tay: + khả thi",
            "x": 3996,
            "y": 330,
            "size": 44,
            "at": "l4:turnkey",
            "hl": [
              {
                "text": "+ khả thi",
                "at": "l4:feasibility"
              }
            ]
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "Thực chất: ai gánh rủi ro?",
            "x": 3996,
            "y": 430,
            "size": 52,
            "at": "l5:really",
            "color": "coral",
            "hl": [
              {
                "text": "ai gánh rủi ro",
                "at": "l5:carries"
              }
            ]
          },
          {
            "id": "c-r1",
            "t": "text",
            "text": "EPC: nhà thầu một đầu mối",
            "x": 4896,
            "y": 170,
            "size": 40,
            "at": "l6:EPC"
          },
          {
            "id": "c-r2",
            "t": "text",
            "text": "EC: chủ đầu tư gánh giao diện",
            "x": 4896,
            "y": 240,
            "size": 40,
            "at": "l6:EC"
          },
          {
            "id": "c-r3",
            "t": "text",
            "text": "PC: rủi ro thiết kế ở lại",
            "x": 4896,
            "y": 310,
            "size": 40,
            "at": "l7:PC"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Điều 6 NĐ 210/2026/NĐ-CP",
            "x": 3996,
            "y": 720,
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
          "say": "First stop: Monday. Before any price, pick the contract model.",
          "sub": "Chặng một: thứ Hai. Trước khi bàn giá, chọn mô hình hợp đồng.",
          "keys": [
            "mô hình hợp đồng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Under Article six of Decree two ten, EPC runs from design and equipment to building, testing and handover.",
          "sub": "Theo Điều 6 Nghị định 210/2026, EPC đi từ thiết kế, cung cấp thiết bị đến thi công, chạy thử, nghiệm thu, bàn giao.",
          "keys": [
            "Điều 6 Nghị định 210/2026"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Turnkey is wider: it adds the feasibility study.",
          "sub": "Chìa khoá trao tay rộng hơn: gồm cả báo cáo nghiên cứu khả thi.",
          "keys": [
            "Chìa khoá trao tay"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Choosing a model really means choosing who carries design and interface risk.",
          "sub": "Chọn mô hình thực chất là chọn ai gánh rủi ro thiết kế và rủi ro giao diện.",
          "keys": [
            "ai gánh rủi ro"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "So EPC: one contractor answers for all. EC: we buy equipment, and we own the gaps.",
          "sub": "Vậy EPC: một đầu mối chịu hết. EC: mình tự mua thiết bị thì mình gánh chỗ giao nhau.",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "thao",
          "say": "And PC: they build to our design, so design risk stays with us.",
          "sub": "Còn PC: họ làm theo thiết kế của mình, rủi ro thiết kế ở lại phía mình."
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
          }
        ],
        "items": [
          {
            "id": "c-off",
            "t": "box",
            "x": 4896,
            "y": 440,
            "w": 280,
            "h": 90,
            "at": "l1:offshore",
            "stroke": 4
          },
          {
            "id": "c-offt",
            "t": "text",
            "text": "Offshore",
            "x": 4926,
            "y": 455,
            "size": 44,
            "at": "l1:offshore+200"
          },
          {
            "id": "c-on",
            "t": "box",
            "x": 5276,
            "y": 440,
            "w": 280,
            "h": 90,
            "at": "l1:onshore",
            "stroke": 4
          },
          {
            "id": "c-ont",
            "t": "text",
            "text": "Onshore",
            "x": 5306,
            "y": 455,
            "size": 44,
            "at": "l1:onshore+200"
          },
          {
            "id": "c-wrap",
            "t": "text",
            "text": "wrap: một bên lo khoảng giữa",
            "x": 4896,
            "y": 560,
            "size": 40,
            "at": "l2:wrap",
            "color": "accent",
            "hl": [
              {
                "text": "wrap",
                "at": "l2:wrap"
              }
            ]
          },
          {
            "id": "c-gap",
            "t": "text",
            "text": "thiếu wrap → chủ đầu tư gánh",
            "x": 4896,
            "y": 630,
            "size": 40,
            "at": "l2:Without",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Split EPC: offshore supply, onshore construction.",
          "sub": "EPC tách: gói cung cấp nước ngoài, gói xây lắp trong nước.",
          "keys": [
            "EPC tách"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A wrap agreement makes one side answer for the gap. Without it, the owner holds the gap.",
          "sub": "Thoả thuận bảo đảm chung, wrap, buộc một bên chịu khoảng giữa. Thiếu nó, chủ đầu tư ôm khoảng hở.",
          "keys": [
            "wrap"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s05",
      "module": "BRK-04",
      "data": {
        "title": "Một chủ đầu tư điện mặt trời",
        "labels": [
          "Cách A: EC",
          "Cách B: EPC"
        ],
        "wrong": "Tự mua pin rẻ; pin chậm, cãi lỗi ở đâu",
        "right": "Giá cao hơn; pin chậm là việc nhà thầu",
        "wrongIllus": "crossed-swords",
        "rightIllus": "handshake"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Option A: buy panels yourself. Late, then blame.",
          "sub": "Cách A: tự mua pin. Pin chậm, rồi đổ lỗi.",
          "keys": [
            "đổ lỗi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B: full EPC. Late is their problem.",
          "sub": "Cách B: EPC trọn gói. Chậm là việc nhà thầu.",
          "keys": [
            "việc nhà thầu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p4"
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
            "id": "c-sol",
            "t": "text",
            "text": "Chuyện chủ đầu tư điện mặt trời",
            "x": 3996,
            "y": 490,
            "size": 30,
            "at": "l0:solar",
            "color": "muted"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Rẻ gói thiết bị, đắt chỗ giao",
            "x": 3996,
            "y": 560,
            "size": 50,
            "at": "l1:cheap",
            "color": "accent",
            "hl": [
              {
                "text": "đắt chỗ giao",
                "at": "l1:meet"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l0",
          "lang": "en",
          "who": "det",
          "say": "That was another owner, with a solar plant. Lenders liked option B: one point of contact.",
          "sub": "Đó là chuyện một chủ đầu tư điện mặt trời. Bên cho vay thích cách B: một đầu mối chịu trách nhiệm.",
          "keys": [
            "một đầu mối"
          ]
        },
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The lesson: cheap on the equipment package can be expensive where the packages meet.",
          "sub": "Rút ra: rẻ ở gói thiết bị có thể đắt ở chỗ giao nhau.",
          "keys": [
            "đắt ở chỗ giao nhau"
          ]
        }
      ],
      "ref": "p4,p5"
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
            "at": "l5",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Ba · Tiền từ đâu?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday",
            "hl": [
              {
                "text": "Tiền từ đâu",
                "at": "l1:money"
              }
            ]
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 130,
            "w": 720,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "binh",
                  "side": "center",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "balance-scale",
                "open-book"
              ]
            },
            "at": "l2:Bình",
            "caption": "Thứ Ba · gọi pháp chế",
            "icon": "balance-scale"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Luật Đấu thầu 22/2023",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l3:Bidding"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Bắt buộc: vốn nhà nước",
            "x": 5964,
            "y": 250,
            "size": 48,
            "at": "l4:state",
            "color": "accent",
            "hl": [
              {
                "text": "vốn nhà nước",
                "at": "l4:state"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Tư nhân: tự chọn áp dụng",
            "x": 5964,
            "y": 330,
            "size": 46,
            "at": "l5:private"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "toàn bộ, hay một số điều",
            "x": 6004,
            "y": 400,
            "size": 40,
            "at": "l5:some"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: VBHN 74/VBHN-VPQH Luật Đấu thầu, Điều 2",
            "x": 5964,
            "y": 452,
            "size": 26,
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
          "say": "Second stop: Tuesday. Must we follow the Bidding Law? First, where does the money come from?",
          "sub": "Chặng hai: thứ Ba. Có phải theo Luật Đấu thầu? Trước hết, tiền từ đâu?",
          "keys": [
            "tiền từ đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo calls Mr. Bình, the head of legal. Slow, warm, red pencil always ready.",
          "sub": "Thảo gọi Bác Bình, trưởng pháp chế. Chậm rãi, ấm áp, bút chì đỏ luôn sẵn tay.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. The Bidding Law, twenty two of twenty twenty three, as amended.",
          "sub": "Từ từ đã. Luật Đấu thầu 22/2023, đã sửa đổi năm 2024 và 2025.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "It is compulsory when state budget money, or lawful revenue of state bodies, pays.",
          "sub": "Luật bắt buộc khi dùng vốn ngân sách nhà nước, nguồn thu hợp pháp của cơ quan nhà nước, đơn vị sự nghiệp công lập.",
          "keys": [
            "vốn ngân sách nhà nước"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "Private companies may choose to apply the whole law, or only some articles.",
          "sub": "Doanh nghiệp tư nhân được tự chọn áp dụng toàn bộ, hoặc một số điều, khoản.",
          "keys": [
            "tự chọn áp dụng"
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
          }
        ],
        "items": [
          {
            "id": "d-m",
            "t": "text",
            "text": "Dự án điện = theo Luật Đấu thầu",
            "x": 5964,
            "y": 490,
            "size": 40,
            "at": "l1:power",
            "color": "muted"
          },
          {
            "id": "d-mx",
            "t": "strike",
            "over": "d-m",
            "at": "l2:repealed"
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "Riêng DN nhà nước: đã bãi bỏ",
            "x": 5964,
            "y": 550,
            "size": 40,
            "at": "l2:repealed"
          },
          {
            "id": "d-6",
            "t": "text",
            "text": "Một phần → ghi rõ phần nào",
            "x": 5964,
            "y": 610,
            "size": 40,
            "at": "l3:which"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Hỏi tiền trước, quy trình sau",
            "x": 5964,
            "y": 680,
            "size": 46,
            "at": "l4:first",
            "color": "accent",
            "hl": [
              {
                "text": "quy trình sau",
                "at": "l4:procedure"
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
          "say": "A common myth: every power project must follow the Bidding Law.",
          "sub": "Hiểu lầm hay gặp: cứ dự án điện là phải chọn thầu theo Luật Đấu thầu.",
          "keys": [
            "Hiểu lầm hay gặp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In fact, the clause for state firms was repealed. Scope now follows state money.",
          "sub": "Thực ra, khoản riêng cho doanh nghiệp nhà nước đã bị bãi bỏ; phạm vi nay theo vốn nhà nước.",
          "keys": [
            "bị bãi bỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Private projects follow internal rules and the lenders. Using part of the law? Write which part in the bid documents.",
          "sub": "Dự án tư nhân theo quy chế nội bộ, yêu cầu bên cho vay. Áp dụng một phần Luật thì ghi rõ phần nào trong hồ sơ mời thầu.",
          "keys": [
            "ghi rõ phần nào"
          ],
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So: ask where the money comes from first, then which procedure.",
          "sub": "Vậy: hỏi tiền từ đâu trước, rồi mới hỏi quy trình nào.",
          "keys": [
            "hỏi tiền từ đâu trước"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Biên bản có chữ ký hai bên là đủ?",
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
          "say": "Signed by both sides. Isn't that enough?",
          "sub": "Biên bản có chữ ký hai bên. Vậy chưa đủ sao?",
          "keys": [
            "chưa đủ sao"
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
            "text": "③ Thứ Tư · Ba lớp giấy",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday"
          },
          {
            "id": "e-b0",
            "t": "box",
            "x": 7932,
            "y": 170,
            "w": 620,
            "h": 80,
            "at": "l2:invitation",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "e-b1",
            "t": "box",
            "x": 7972,
            "y": 265,
            "w": 620,
            "h": 80,
            "at": "l2:proposal",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "e-b2",
            "t": "box",
            "x": 8012,
            "y": 360,
            "w": 620,
            "h": 80,
            "at": "l2:minutes",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "e-bt0",
            "t": "text",
            "text": "Hồ sơ mời thầu",
            "x": 7962,
            "y": 182,
            "size": 44,
            "at": "l2:invitation+200"
          },
          {
            "id": "e-bt1",
            "t": "text",
            "text": "Hồ sơ dự thầu",
            "x": 8002,
            "y": 277,
            "size": 44,
            "at": "l2:proposal+200"
          },
          {
            "id": "e-bt2",
            "t": "text",
            "text": "Biên bản thương thảo",
            "x": 8042,
            "y": 372,
            "size": 44,
            "at": "l2:minutes+200"
          },
          {
            "id": "e-list",
            "t": "text",
            "text": "Chỉ tài liệu có trong danh mục",
            "x": 7932,
            "y": 500,
            "size": 44,
            "at": "l3:listed",
            "color": "accent",
            "hl": [
              {
                "text": "danh mục",
                "at": "l3:listed"
              }
            ]
          },
          {
            "id": "e-list2",
            "t": "text",
            "text": "mới chắc chắn ràng buộc",
            "x": 7972,
            "y": 570,
            "size": 44,
            "at": "l3:binding"
          },
          {
            "id": "e-er",
            "t": "illus",
            "name": "wastebasket",
            "x": 8832,
            "y": 170,
            "size": 110,
            "at": "l4:eraser"
          },
          {
            "id": "e-ea",
            "t": "text",
            "text": "Điều toàn bộ thoả thuận",
            "x": 8962,
            "y": 180,
            "size": 44,
            "at": "l4:entire",
            "color": "coral",
            "hl": [
              {
                "text": "toàn bộ thoả thuận",
                "at": "l4:entire"
              }
            ]
          },
          {
            "id": "e-ea2",
            "t": "text",
            "text": "= cục tẩy to nhất",
            "x": 8962,
            "y": 250,
            "size": 44,
            "at": "l4:eraser"
          },
          {
            "id": "e-ea3",
            "t": "text",
            "text": "xoá mọi trao đổi trước ký",
            "x": 8832,
            "y": 330,
            "size": 40,
            "at": "l5:replaces"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Wednesday. Three layers of paper on Thảo's desk.",
          "sub": "Chặng ba: thứ Tư. Ba lớp giấy trên bàn Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The invitation to bid, with the owner's requirements. The contractor's proposal. And the negotiation minutes.",
          "sub": "Hồ sơ mời thầu, có Yêu cầu của chủ đầu tư. Hồ sơ dự thầu của nhà thầu. Và biên bản thương thảo.",
          "keys": [
            "biên bản thương thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Once signed, only documents listed among the contract documents are surely binding.",
          "sub": "Khi ký, chỉ tài liệu nằm trong danh mục tài liệu hợp đồng mới chắc chắn ràng buộc.",
          "keys": [
            "danh mục tài liệu hợp đồng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Why? The entire agreement clause, the biggest eraser in the contract.",
          "sub": "Vì sao? Vì điều toàn bộ thoả thuận, cục tẩy to nhất trong hợp đồng.",
          "keys": [
            "cục tẩy to nhất"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "It replaces everything said before signing. Left outside? No longer binding, says the contractor.",
          "sub": "Nó thay thế mọi trao đổi trước khi ký. Cam kết bị bỏ ngoài? Nhà thầu nói hết ràng buộc.",
          "keys": [
            "thay thế mọi trao đổi"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Tư · bản cuối nhà thầu",
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
          "label": "Gửi ký bản cuối, không đối chiếu",
          "why": "Bản cuối vẫn giữ thời hạn bảo lãnh cũ; có điều toàn bộ thoả thuận, biên bản bị gạt.",
          "rule": "Đã chốt ở bàn thương thảo thì phải có chỗ trong bản ký"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "The contractor's final draft just arrived. I'll send it up for signing now!",
          "sub": "Bản hợp đồng cuối của nhà thầu vừa tới. Em gửi trình ký luôn nhé!",
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
          "say": "It still has the old guarantee period. After handover, they'll want the guarantee back, as signed.",
          "sub": "Bản đó vẫn giữ thời hạn bảo lãnh cũ. Bàn giao xong, họ đòi trả bảo lãnh đúng bản đã ký.",
          "keys": [
            "thời hạn bảo lãnh cũ"
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
          "who": "thao",
          "say": "Dũng, minutes next to the draft. Check every agreed point.",
          "sub": "Dũng, đặt biên bản cạnh dự thảo. Đối chiếu từng điểm đã chốt.",
          "phase": "redo",
          "pose": "explain"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "id": "e-k",
            "t": "text",
            "text": "Đã chốt → có chỗ trong bản ký",
            "x": 8832,
            "y": 450,
            "size": 42,
            "at": "l1:table",
            "color": "accent",
            "hl": [
              {
                "text": "có chỗ trong bản ký",
                "at": "l1:place"
              }
            ]
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "Thứ tự ưu tiên: ai thắng",
            "x": 8832,
            "y": 560,
            "size": 42,
            "at": "l2:precedence"
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "Yêu cầu CĐT trên đề xuất NT",
            "x": 8832,
            "y": 630,
            "size": 42,
            "at": "l3:above",
            "hl": [
              {
                "text": "trên",
                "at": "l3:above"
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
          "say": "The rule: whatever you agree at the table needs a place in the signed contract.",
          "sub": "Luật là: đã chốt ở bàn thương thảo thì phải có chỗ trong bản ký.",
          "keys": [
            "có chỗ trong bản ký"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then the order of precedence decides which document wins when they clash.",
          "sub": "Rồi thứ tự ưu tiên quyết định tài liệu nào thắng khi vênh nhau.",
          "keys": [
            "thứ tự ưu tiên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Many contracts put the owner's requirements above the contractor's proposal. More in lesson two.",
          "sub": "Nhiều hợp đồng để Yêu cầu của chủ đầu tư đứng trên đề xuất kỹ thuật của nhà thầu. Chi tiết ở bài hai."
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Năm · Ai đủ sức?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:plant"
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
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "handshake",
                "busts-in-silhouette"
              ]
            },
            "at": "l2:Sam",
            "caption": "Thứ Năm · phòng thương thảo",
            "icon": "handshake"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Liên danh: ba người khiêng tủ",
            "x": 60,
            "y": 1250,
            "size": 44,
            "at": "l4:cabinet",
            "hl": [
              {
                "text": "khiêng tủ",
                "at": "l4:cabinet"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Liên đới, có người đứng đầu",
            "x": 60,
            "y": 1320,
            "size": 44,
            "at": "l5:jointly",
            "color": "accent",
            "hl": [
              {
                "text": "Liên đới",
                "at": "l5:jointly"
              }
            ]
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Đổi thành phần: cần đồng ý",
            "x": 60,
            "y": 1390,
            "size": 44,
            "at": "l6:change",
            "color": "coral"
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "Công ty con mỏng → công ty mẹ",
            "x": 60,
            "y": 1460,
            "size": 40,
            "at": "l7:parent",
            "hl": [
              {
                "text": "công ty mẹ",
                "at": "l7:parent"
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
          "say": "Fourth stop: Thursday. Who can carry this plant?",
          "sub": "Chặng bốn: thứ Năm. Ai gánh nổi nhà máy này?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Sam, lead negotiator for the consortium's lead member. Polite, direct.",
          "sub": "Đây là Sam, trưởng nhóm đàm phán của thành viên đứng đầu liên danh. Lịch sự, thẳng thắn.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Our consortium has three members. Each member does its own share.",
          "sub": "Liên danh chúng tôi có ba thành viên. Ai làm phần nấy.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A consortium is three people carrying one cabinet. Who pays if it falls?",
          "sub": "Liên danh như ba người khiêng một cái tủ. Rơi thì ai đền?",
          "keys": [
            "ba người khiêng một cái tủ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The contract should say: all members jointly and severally liable, with a named lead member.",
          "sub": "Hợp đồng cần chốt: các thành viên chịu trách nhiệm liên đới trước chủ đầu tư, có thành viên đứng đầu.",
          "keys": [
            "liên đới"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "No change of members without the owner's written consent.",
          "sub": "Không đổi thành phần khi chưa có đồng ý bằng văn bản của chủ đầu tư.",
          "keys": [
            "đồng ý bằng văn bản"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "And a subsidiary with few assets? Consider a parent company guarantee.",
          "sub": "Nhà thầu là công ty con ít tài sản? Cân nhắc bảo lãnh công ty mẹ.",
          "keys": [
            "bảo lãnh công ty mẹ"
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
      "ref": "p14"
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
            "id": "f-ck-c0",
            "t": "box",
            "x": 60,
            "y": 1560,
            "w": 40,
            "h": 40,
            "at": "l1:experience",
            "stroke": 5
          },
          {
            "id": "f-ck-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1544,
            "size": 50,
            "at": "l1:experience+600",
            "color": "accent"
          },
          {
            "id": "f-ck-l0",
            "t": "text",
            "text": "Kinh nghiệm tương tự, có chứng minh",
            "x": 122,
            "y": 1550,
            "size": 36,
            "at": "l1:experience+200"
          },
          {
            "id": "f-ck-c1",
            "t": "box",
            "x": 60,
            "y": 1626,
            "w": 40,
            "h": 40,
            "at": "l1:finance",
            "stroke": 5
          },
          {
            "id": "f-ck-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1610,
            "size": 50,
            "at": "l1:finance+600",
            "color": "accent"
          },
          {
            "id": "f-ck-l1",
            "t": "text",
            "text": "Tài chính gánh được bảo lãnh",
            "x": 122,
            "y": 1616,
            "size": 36,
            "at": "l1:finance+200"
          },
          {
            "id": "f-ck-c2",
            "t": "box",
            "x": 60,
            "y": 1692,
            "w": 40,
            "h": 40,
            "at": "l2:agreement",
            "stroke": 5
          },
          {
            "id": "f-ck-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1676,
            "size": 50,
            "at": "l2:agreement+600",
            "color": "accent"
          },
          {
            "id": "f-ck-l2",
            "t": "text",
            "text": "Liên danh: đứng đầu, phần việc",
            "x": 122,
            "y": 1682,
            "size": 36,
            "at": "l2:agreement+200"
          },
          {
            "id": "f-ck-c3",
            "t": "box",
            "x": 60,
            "y": 1758,
            "w": 40,
            "h": 40,
            "at": "l3:authority",
            "stroke": 5
          },
          {
            "id": "f-ck-k3",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1742,
            "size": 50,
            "at": "l3:authority+600",
            "color": "accent"
          },
          {
            "id": "f-ck-l3",
            "t": "text",
            "text": "Cam đoan: thẩm quyền, trả nợ",
            "x": 122,
            "y": 1748,
            "size": 36,
            "at": "l3:authority+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "My shortlist: similar experience with proof, and finance strong enough for schedule and guarantees.",
          "sub": "Danh sách của tôi: kinh nghiệm tương tự có hồ sơ chứng minh, tài chính đủ gánh tiến độ và bảo lãnh.",
          "pose": "hold"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "A consortium agreement naming the lead member and each work share.",
          "sub": "Thoả thuận liên danh ghi rõ thành viên đứng đầu và phần việc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Promises on signing authority, paying debts, no threatening disputes.",
          "sub": "Cam đoan về thẩm quyền ký, khả năng trả nợ, không tranh chấp đe doạ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And construction capacity conditions: legal checks the current rules. All of it is lesson one.",
          "sub": "Còn điều kiện năng lực hoạt động xây dựng: pháp chế kiểm văn bản hiện hành. Tất cả ở bài một.",
          "keys": [
            "pháp chế kiểm"
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
            "text": "⑤ Thứ Sáu · Mua sắm cầm gì?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Chọn thầu · bảo lãnh · thầu phụ",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l2:selection",
            "color": "accent",
            "hl": [
              {
                "text": "bảo lãnh",
                "at": "l2:guarantees"
              }
            ]
          },
          {
            "id": "g-1b",
            "t": "text",
            "text": "mua sắm soạn, chốt cuối",
            "x": 2068,
            "y": 1335,
            "size": 40,
            "at": "l2:owns"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Phạt chậm: mua sắm bàn con số",
            "x": 2028,
            "y": 1410,
            "size": 42,
            "at": "l3:numbers"
          },
          {
            "id": "g-2b",
            "t": "text",
            "text": "câu chữ: pháp chế",
            "x": 2068,
            "y": 1480,
            "size": 40,
            "at": "l3:wording",
            "color": "muted"
          },
          {
            "id": "g-um",
            "t": "illus",
            "name": "umbrella",
            "x": 2028,
            "y": 1560,
            "size": 90,
            "at": "l4:spare"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Bảo lãnh = tiền dự phòng",
            "x": 2138,
            "y": 1570,
            "size": 44,
            "at": "l4:spare",
            "hl": [
              {
                "text": "dự phòng",
                "at": "l4:spare"
              }
            ]
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "trả ngay khi yêu cầu",
            "x": 2138,
            "y": 1640,
            "size": 40,
            "at": "l5:demand",
            "color": "accent"
          },
          {
            "id": "g-4b",
            "t": "text",
            "text": "không huỷ ngang, vô điều kiện",
            "x": 2138,
            "y": 1700,
            "size": 36,
            "at": "l5:unconditional"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Friday. Which clauses does procurement hold?",
          "sub": "Chặng năm: thứ Sáu. Mua sắm cầm những điều khoản nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Selection, guarantees, subcontractors: procurement drafts and owns them.",
          "sub": "Chọn nhà thầu, bảo lãnh, thầu phụ: mua sắm soạn và chịu trách nhiệm cuối.",
          "keys": [
            "chịu trách nhiệm cuối"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Delay damages: procurement negotiates the numbers, legal owns the wording.",
          "sub": "Phạt chậm: mua sắm thương thảo con số, còn câu chữ do pháp chế soạn và chốt."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A guarantee is spare money for the day the contractor breaks down.",
          "sub": "Bảo lãnh là tiền dự phòng cho ngày nhà thầu vỡ.",
          "keys": [
            "tiền dự phòng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Owners want it on first demand, irrevocable, unconditional: the bank pays first, disputes later.",
          "sub": "Chủ đầu tư đòi bảo lãnh trả ngay khi yêu cầu, không huỷ ngang, vô điều kiện: ngân hàng trả trước, tranh chấp sau.",
          "keys": [
            "trả ngay khi yêu cầu"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s16",
      "module": "BRK-03",
      "data": {
        "value": 12,
        "suffix": "%",
        "label": "trần phạt chỉ cho đầu tư công, PPP",
        "illus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Twelve percent.",
          "sub": "Mười hai phần trăm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The penalty cap, only for public investment and PPP.",
          "sub": "Trần phạt, chỉ cho đầu tư công, PPP.",
          "keys": [
            "chỉ cho đầu tư công, PPP"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
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
          }
        ],
        "items": [
          {
            "id": "g-0",
            "t": "text",
            "text": "Tính từ thiệt hại thật",
            "x": 2928,
            "y": 1260,
            "size": 42,
            "at": "l0:real",
            "hl": [
              {
                "text": "thiệt hại thật",
                "at": "l0:loss"
              }
            ]
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Đ86 LXD: thiệt hại định trước",
            "x": 2928,
            "y": 1330,
            "size": 40,
            "at": "l1:eighty",
            "hl": [
              {
                "text": "định trước",
                "at": "l1:advance"
              }
            ]
          },
          {
            "id": "g-6",
            "t": "text",
            "text": "Tư nhân: dễ bị cắt về 8%",
            "x": 2928,
            "y": 1400,
            "size": 42,
            "at": "l2:eight",
            "color": "coral",
            "hl": [
              {
                "text": "8%",
                "at": "l2:eight"
              }
            ]
          },
          {
            "id": "g-7",
            "t": "text",
            "text": "Luật sửa đang trình → kiểm",
            "x": 2928,
            "y": 1470,
            "size": 38,
            "at": "l2:draft",
            "color": "muted"
          },
          {
            "id": "g-8",
            "t": "text",
            "text": "Thầu phụ, liên quan: bài 5, 6",
            "x": 2928,
            "y": 1550,
            "size": 38,
            "at": "l3:subcontractors"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Điều 86 Luật Xây dựng 135/2025/QH15",
            "x": 2928,
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
          "id": "l0",
          "lang": "en",
          "who": "det",
          "say": "Set delay damages from real loss: lost power income each day, plus the cost of money.",
          "sub": "Phạt chậm nên tính từ thiệt hại thật: doanh thu điện mất mỗi ngày và chi phí vốn.",
          "keys": [
            "thiệt hại thật"
          ]
        },
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Article eighty six of the 2025 Construction Law allows damages fixed in advance.",
          "sub": "Điều 86 Luật Xây dựng 2025 cho phép bồi thường theo mức thiệt hại định trước.",
          "keys": [
            "thiệt hại định trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Private projects risk a cut to the eight percent Commercial Law cap. A draft change is pending, so check.",
          "sub": "Dự án tư nhân có rủi ro bị cắt về trần 8% Luật Thương mại; dự án sửa luật đang trình, nên kiểm văn bản hiện hành.",
          "keys": [
            "trần 8%"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Subcontractors, and a contractor from your own group, get their own lessons.",
          "sub": "Thầu phụ chính, nhà thầu cùng tập đoàn: mỗi chuyện một bài riêng."
        }
      ],
      "ref": "p18,p19"
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
            "text": "⑥ Chiều thứ Sáu · Ai chốt?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:afternoon"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "meeting",
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
                "clipboard",
                "memo"
              ]
            },
            "at": "l5",
            "caption": "Chiều thứ Sáu · họp các phòng",
            "icon": "clipboard"
          },
          {
            "id": "h-r",
            "t": "text",
            "text": "R soạn · A chốt · C · I",
            "x": 3996,
            "y": 1260,
            "size": 40,
            "at": "l2:drafts",
            "hl": [
              {
                "text": "A chốt",
                "at": "l2:accountable"
              }
            ]
          },
          {
            "id": "h-a0",
            "t": "text",
            "text": "Chọn thầu, bảo lãnh",
            "x": 3996,
            "y": 1350,
            "size": 40,
            "at": "l3:Selection"
          },
          {
            "id": "h-b0",
            "t": "text",
            "text": "A: Mua sắm",
            "x": 4456,
            "y": 1350,
            "size": 40,
            "at": "l3:Selection+300",
            "color": "accent"
          },
          {
            "id": "h-a1",
            "t": "text",
            "text": "Giá, thanh toán",
            "x": 3996,
            "y": 1430,
            "size": 40,
            "at": "l4:Price"
          },
          {
            "id": "h-b1",
            "t": "text",
            "text": "A: Tài chính",
            "x": 4456,
            "y": 1430,
            "size": 40,
            "at": "l4:Price+300",
            "color": "accent"
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "Phạt, hiệu suất",
            "x": 3996,
            "y": 1510,
            "size": 40,
            "at": "l4:Penalties"
          },
          {
            "id": "h-b2",
            "t": "text",
            "text": "A: Pháp chế",
            "x": 4456,
            "y": 1510,
            "size": 40,
            "at": "l4:Penalties+300",
            "color": "accent"
          },
          {
            "id": "h-one",
            "t": "text",
            "text": "Mỗi dòng một chữ A",
            "x": 3996,
            "y": 1610,
            "size": 52,
            "at": "l5:one",
            "color": "coral",
            "hl": [
              {
                "text": "một chữ A",
                "at": "l5:one"
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
          "say": "Sixth stop: Friday afternoon. Too many cooks? Draw a RACI table.",
          "sub": "Chặng sáu: chiều thứ Sáu. Lắm thầy thối ma? Vẽ ma trận RACI.",
          "keys": [
            "ma trận RACI"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "R drafts, A is accountable and decides, C comments, I is informed.",
          "sub": "R là người soạn, A chịu trách nhiệm cuối và quyết định, C góp ý, I được thông báo.",
          "keys": [
            "A chịu trách nhiệm cuối"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Selection, guarantees, subcontractors: we are R and A. Legal, project, technical, finance comment.",
          "sub": "Chọn thầu, bảo lãnh, thầu phụ: mua sắm là R và A; pháp chế, dự án, kỹ thuật, tài chính góp ý.",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Price and payment: finance is R and A. Penalties and performance: legal. We comment.",
          "sub": "Giá, thanh toán: tài chính là R và A. Phạt, hiệu suất: pháp chế. Mua sắm góp ý."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "One A per row, child. Nobody is co-responsible.",
          "sub": "Mỗi dòng một chữ A thôi cháu. Không ai “cùng lo”.",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Plus a comment deadline and one template per row.",
          "sub": "Mỗi dòng thêm hạn góp ý và một mẫu ý kiến chung."
        }
      ],
      "ref": "p20,p21,p22"
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
            "id": "h-il",
            "t": "illus",
            "name": "card-index",
            "x": 3996,
            "y": 1690,
            "size": 80,
            "at": "l1:issues"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Danh sách vấn đề",
            "x": 4096,
            "y": 1700,
            "size": 46,
            "at": "l1:issues",
            "color": "accent",
            "hl": [
              {
                "text": "vấn đề",
                "at": "l1:issues"
              }
            ]
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "vị trí · trạng thái · ai quyết",
            "x": 4096,
            "y": 1780,
            "size": 34,
            "at": "l2:status"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "In parallel, Thảo keeps an issues list.",
          "sub": "Song song, Thảo giữ một danh sách vấn đề.",
          "keys": [
            "danh sách vấn đề"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Clause, issue, who raised it, both positions, status: open, agreed or escalated. And who decides.",
          "sub": "Điều nào, vấn đề gì, bên đề xuất, vị trí hai bên, trạng thái mở, đã chốt hay chuyển cấp trên. Và ai quyết.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wrap-up meetings close open points, with minutes. So you know which version counts.",
          "sub": "Họp gom chỉ chốt vấn đề đang mở, có biên bản, để biết bản nào là bản dùng.",
          "keys": [
            "bản nào là bản dùng"
          ]
        }
      ],
      "ref": "p23"
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Thứ Hai sau · Trước ngày ký",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
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
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "fountain-pen"
              ]
            },
            "at": "l1:Monday",
            "caption": "Thứ Hai sau · bàn Thảo",
            "icon": "fountain-pen"
          },
          {
            "id": "i-pg",
            "t": "illus",
            "name": "page-facing-up",
            "x": 5964,
            "y": 1250,
            "size": 110,
            "at": "l1:sheet"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Bảo lãnh: thêm [ ] ngày",
            "x": 6094,
            "y": 1260,
            "size": 48,
            "at": "l2:guarantee"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "→ đã vào Phụ lục bảo lãnh",
            "x": 6094,
            "y": 1340,
            "size": 44,
            "at": "l3:appendix",
            "color": "accent",
            "hl": [
              {
                "text": "Phụ lục",
                "at": "l3:appendix"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "“…đinh đóng vào bản ký”",
            "x": 5964,
            "y": 1490,
            "size": 52,
            "at": "l4:nail",
            "color": "accent",
            "hl": [
              {
                "text": "bản ký",
                "at": "l4:signed"
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
          "say": "Monday again, before signing. Same desk, same sheet.",
          "sub": "Lại thứ Hai, trước ngày ký. Vẫn bàn ấy, tờ giấy ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The guarantee extension from the minutes? I traced it into the draft.",
          "sub": "Phần kéo dài bảo lãnh trong biên bản? Em lần theo vào tận bản dự thảo rồi.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Now it sits in the guarantee appendix, with the right number of days.",
          "sub": "Giờ nó nằm trong phụ lục bảo lãnh, đúng số ngày đã chốt.",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A promise like a nail in a post. This time, nailed into the signed contract.",
          "sub": "“Nói như đinh đóng cột”, lần này đinh đóng thẳng vào bản ký.",
          "keys": [
            "đinh đóng thẳng vào bản ký"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s21",
      "module": "BRK-08",
      "data": {
        "title": "Đọc sáu bài tiếp",
        "points": [
          {
            "label": "Bài 1",
            "sub": "Năng lực, liên danh",
            "illus": "busts-in-silhouette"
          },
          {
            "label": "Bài 2",
            "sub": "Hồ sơ thầu, thứ tự",
            "illus": "bookmark-tabs"
          },
          {
            "label": "Bài 3",
            "sub": "Mẫu bảo lãnh",
            "illus": "bank"
          },
          {
            "label": "Bài 4",
            "sub": "Phạt chậm, trần",
            "illus": "stopwatch"
          },
          {
            "label": "Bài 5",
            "sub": "Thầu phụ, thiết bị",
            "illus": "nut-and-bolt"
          },
          {
            "label": "Bài 6",
            "sub": "Người có liên quan",
            "illus": "link"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The next six lessons follow the work: capacity, bid documents, guarantees.",
          "sub": "Sáu bài tiếp theo đi theo công việc: năng lực, hồ sơ thầu, bảo lãnh.",
          "keys": [
            "Sáu bài tiếp theo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then delay damages, subcontractors, and a contractor from your own group.",
          "sub": "Rồi phạt chậm, thầu phụ, và nhà thầu là người có liên quan."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
          },
          {
            "at": 150,
            "fit": "J",
            "ms": 900
          },
          {
            "at": "l1:moves",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2",
            "fit": "C",
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
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Ba việc · làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l5"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5496,
            "y": 40,
            "at": "l2:model"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 40,
            "at": "l3:place"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5496,
            "y": 1130,
            "at": "l4:decides"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Ghi: mô hình · nguồn vốn",
            "x": 7932,
            "y": 1270,
            "size": 46,
            "at": "l5:model",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Ba cam kết thương thảo lớn nhất",
            "x": 7932,
            "y": 1350,
            "size": 44,
            "at": "l5:three"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Đánh dấu: có chỗ trong dự thảo?",
            "x": 7932,
            "y": 1430,
            "size": 40,
            "at": "l5:mark",
            "hl": [
              {
                "text": "có chỗ",
                "at": "l5:place"
              }
            ]
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: năng lực và liên danh",
            "x": 7932,
            "y": 1540,
            "size": 38,
            "at": "l6:Next",
            "color": "muted"
          },
          {
            "id": "j-src1",
            "t": "text",
            "text": "Bài để tham khảo chung; tình huống là minh hoạ, không lấy từ hợp đồng, dự án hay pháp nhân cụ thể nào.",
            "x": 7932,
            "y": 1730,
            "size": 26,
            "at": "l6",
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
          "say": "So, three moves.",
          "sub": "Tóm lại, ba bước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: the model decides who carries design and interface risk. Then ask where the money comes from.",
          "sub": "Một: mô hình quyết định ai gánh rủi ro thiết kế, giao diện. Rồi hỏi tiền từ đâu.",
          "keys": [
            "ai gánh rủi ro"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: every agreed point needs a place in the signed contract.",
          "sub": "Hai: mỗi điểm đã chốt phải có chỗ trong bản ký.",
          "keys": [
            "có chỗ trong bản ký"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: one person decides each group of clauses.",
          "sub": "Ba: mỗi nhóm điều khoản một người chốt."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Today: note your model, money source, top three promises. Mark which have a place in the draft.",
          "sub": "Việc làm ngay: ghi mô hình, nguồn vốn, ba cam kết lớn; đánh dấu cái nào có chỗ trong dự thảo.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: capacity and consortia. General information only, not advice on any real contract.",
          "sub": "Bài tiếp: năng lực và liên danh. Đây là thông tin chung, không phải tư vấn cho hợp đồng cụ thể nào."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s23",
      "module": "QUIZ-01",
      "data": {
        "q": "In the guarantee extension story, why could the contractor ask for the guarantee back?",
        "options": [
          "The bank had closed, so every guarantee it issued became void at handover",
          "The final contract kept the old period, and the entire agreement clause applied",
          "The owner had forgotten to pay the last invoice before the handover day"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "page-facing-up",
        "why": "Bản ký giữ thời hạn cũ, điều toàn bộ thoả thuận gạt biên bản."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In the guarantee extension story, why could the contractor ask for the guarantee back?",
          "sub": "Trong chuyện kéo dài bảo lãnh, vì sao nhà thầu đề nghị trả bảo lãnh được?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The final contract kept the old period, and the entire agreement clause applied.",
          "sub": "Bản hợp đồng cuối giữ thời hạn cũ, và điều toàn bộ thoả thuận gạt biên bản ra ngoài."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Agreed at the table means a place in the signed contract.",
          "sub": "Đã chốt ở bàn thương thảo thì phải có chỗ trong bản ký."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[17]"
    },
    {
      "id": "s24",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Hồ sơ thầu thành hợp đồng EPC"
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
  "hook": "HOOK-23",
  "notes": "#145 bài MỚI (bài tổng chuỗi epc-procurement) theo hạt nhân (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): cận tờ biên bản thương thảo “kéo dài bảo lãnh thêm [ ] ngày sau bàn giao” (p11) → kéo ra thấy Thảo, Dũng → tờ giấy trở lại ở khép vòng s20. Dòng thời gian: TUẦN THƯƠNG THẢO CUỐI của Thảo (trưởng ban mua sắm): T2 chọn mô hình (p1–p3; BRK-04 Cách A/B p4; p5) → T3 tiền từ đâu, gọi Bác Bình (p6–p8) → BRK-07 rehook → T4 ba lớp giấy, điều toàn bộ thoả thuận (p9, p10), “Khoan đã!” Dũng gửi trình ký bản cuối của nhà thầu (p11), p12–p13 → T5 Sam, liên danh (p14, p15) → T6 điều khoản của mua sắm (p16, p17; BRK-03 12% p18; p18, p19) → chiều T6 RACI với Bác Bình (p20–p23) → T2 sau: biên bản đã vào phụ lục bảo lãnh (khép vòng) → BRK-08 sáu bài (p24) → tóm tắt + lưu ý #133. Nhân vật (w145/_series/epc-procurement.md): Thảo, Dũng, Bác Bình, Sam. Ca dao neo: “Nói như đinh đóng cột” → đinh đóng vào bản ký. Số chỉ từ bài: NĐ 210/2026 Đ6, Luật Đấu thầu 22/2023 (VBHN 74), Đ86 LXD 2025, 12%, 8%, [ ] ngày. Câu đố questions[17].",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
