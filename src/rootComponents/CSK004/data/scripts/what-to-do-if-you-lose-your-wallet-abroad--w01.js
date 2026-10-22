// Kịch bản video W lần 3 (#110) — "Mất ví, mất thẻ ngân hàng ở nước ngoài phải làm gì?" · chuỗi "Gặp sự cố ở nước ngoài: làm gì ngay"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); nhân vật hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "what-to-do-if-you-lose-your-wallet-abroad--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "travellers-in-trouble",
    "slug": "what-to-do-if-you-lose-your-wallet-abroad",
    "door": "ky-nang",
    "level": "B1",
    "title": "Mất ví, mất thẻ ngân hàng ở nước ngoài phải làm gì?",
    "series": "Gặp sự cố ở nước ngoài: làm gì ngay"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô đi theo MỘT NGÀY ĐÊM của Thảo (gần nửa đêm Ngày 4 thấy mất thẻ, “Khoan đã!” → 23:50 khoá thẻ → 23:55 xem giao dịch → Ngày 5 9:00 tìm lại → 10:30 trình báo → 11:00 cuộc gọi “ngân hàng” → trưa hết tiền → chiều Dũng chia ba lớp → gần nửa đêm Ngày 5, cùng phòng cùng giờ, khép vòng). Mạch chuỗi: w145/_series/travellers-in-trouble.md (sự cố Ngày 4 của bài tổng). Đổi tên: Hạ (p5) → Thảo; “bạn” (p1–p4, p7–p9, p14, p16) → Thảo; “bạn” bị giật túi (❓ p10) → Dũng (khung ảnh “thử nghĩ xem”); Định (p19) → Dũng; người cho vay cầm hộ chiếu (p17) → kể qua lời Dũng; nhân viên quầy dịch vụ → Sam. Cảnh ngắt nhịp: BRK-07 (s07 rehook trình báo), BRK-09 (s12 tổng đài bảo hộ công dân), BRK-04 Trước/Sau (s16 “mất tất cả” → “mất một phần”). Số liệu chỉ từ bài: năm phút, bốn số cuối, +84 981 84 84 84, ba lớp. Bản cũ (W lần 3): w145/bak/what-to-do-if-you-lose-your-wallet-abroad--w01.js.",
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
            "text": "Vài phút",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l1:minutes",
            "color": "accent",
            "hl": [
              {
                "text": "Vài phút",
                "at": "l1:minutes"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "tiền đi · ví: vài giờ vẫn kịp",
            "x": 70,
            "y": 320,
            "size": 48,
            "at": "l2:wallet",
            "hl": [
              {
                "text": "vài giờ",
                "at": "l2:hours"
              }
            ]
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: tìm ví trước?",
            "x": 70,
            "y": 430,
            "size": 52,
            "at": "l3:search",
            "color": "muted"
          },
          {
            "id": "a-mx",
            "t": "strike",
            "over": "a-myth",
            "at": "l3:wrong"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Lose a wallet abroad, and your money can go in minutes.",
          "sub": "Mất ví ở nước ngoài, tiền có thể đi trong vài phút.",
          "keys": [
            "vài phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The wallet itself? A few hours later is still fine.",
          "sub": "Còn chiếc ví? Vài giờ sau tìm vẫn kịp.",
          "keys": [
            "Vài giờ sau"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Yet we always search first. Wrong end of the buffalo.",
          "sub": "Vậy mà ta toàn đi tìm trước. Cầm nhầm đầu con trâu.",
          "keys": [
            "Cầm nhầm đầu"
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
            "at": "l3:end",
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
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "purse",
                "alarm-clock"
              ]
            },
            "at": "l1",
            "caption": "Ngày 4 · gần nửa đêm · về phòng",
            "icon": "purse"
          },
          {
            "id": "a-who",
            "t": "text",
            "text": "Người giữ danh sách",
            "x": 60,
            "y": 580,
            "size": 50,
            "at": "l2:list"
          },
          {
            "id": "a-gap",
            "t": "text",
            "text": "Ví còn, thẻ thì không",
            "x": 60,
            "y": 670,
            "size": 52,
            "at": "l3:card",
            "color": "coral",
            "hl": [
              {
                "text": "thẻ thì không",
                "at": "l3:not"
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
          "say": "Meet Thảo. Day four of the family trip, almost midnight, back at the hotel.",
          "sub": "Đây là Thảo. Ngày 4 của chuyến đi, gần nửa đêm, vừa về khách sạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The family list keeper. Tonight, the list has a hole.",
          "sub": "Người giữ danh sách của cả nhà. Tối nay, danh sách thủng một lỗ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "My card is not in my wallet!",
          "sub": "Thẻ không còn trong ví!",
          "face": "worried"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s02",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Ngày 4 · gần nửa đêm",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Để thẻ mở cả đêm, sáng mai mới gọi",
          "why": "Sáng ra, ứng dụng báo giao dịch lạ lúc rạng sáng; ngân hàng hỏi sao giờ mới báo.",
          "rule": "Khoá tạm thời, tìm lại được thì mở trên ứng dụng"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "It must be at the restaurant. Who answers now? I'll ask tomorrow, then call the bank.",
          "sub": "Chắc rơi ở quán. Giờ này ai trả lời? Mai hỏi, rồi mới gọi ngân hàng.",
          "pose": "shrug",
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
          "say": "By morning: online purchases at dawn. And the bank asks why you waited.",
          "sub": "Sáng ra: mấy giao dịch mua trên mạng lúc rạng sáng. Ngân hàng còn hỏi sao giờ mới báo."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Rewind. First, freeze every card in the bank app.",
          "sub": "Tua lại. Trước hết, khoá từng thẻ trên ứng dụng.",
          "phase": "redo",
          "pose": "phone",
          "face": "thinking"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Freeze first, search later.",
          "sub": "Khoá trước, tìm sau.",
          "phase": "redo",
          "keys": [
            "Khoá trước, tìm sau"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p5,p6"
    },
    {
      "id": "s03",
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
            "text": "Mất ví: khoá gì trước?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:first",
            "hl": [
              {
                "text": "khoá gì trước",
                "at": "l1:first"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Chạy đi tìm ngay",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:running",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:freeze"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Khoá thẻ trong vài phút",
            "x": 2028,
            "y": 260,
            "size": 60,
            "at": "l2:freeze",
            "color": "accent",
            "hl": [
              {
                "text": "vài phút",
                "at": "l2:minutes"
              }
            ]
          },
          {
            "id": "b-s0",
            "t": "box",
            "x": 2028,
            "y": 400,
            "w": 380,
            "h": 110,
            "at": "l3:freeze+0",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-s1",
            "t": "box",
            "x": 2438,
            "y": 400,
            "w": 380,
            "h": 110,
            "at": "l3:freeze+550",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s2",
            "t": "box",
            "x": 2848,
            "y": 400,
            "w": 380,
            "h": 110,
            "at": "l3:freeze+1100",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s3",
            "t": "box",
            "x": 3258,
            "y": 400,
            "w": 380,
            "h": 110,
            "at": "l3:freeze+1650",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "1. Khoá thẻ",
            "x": 2048,
            "y": 428,
            "size": 46,
            "at": "l3:freeze+150"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "2. Xem giao dịch",
            "x": 2458,
            "y": 428,
            "size": 46,
            "at": "l3:freeze+700"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "3. Tìm, trình báo",
            "x": 2868,
            "y": 428,
            "size": 46,
            "at": "l3:freeze+1250"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "4. Tiền dự phòng",
            "x": 3278,
            "y": 428,
            "size": 46,
            "at": "l3:freeze+1800"
          },
          {
            "id": "b-day",
            "t": "text",
            "text": "Theo Thảo: đêm nay → đêm mai",
            "x": 2028,
            "y": 620,
            "size": 48,
            "at": "l4:follow"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what do you lock first?",
          "sub": "Vậy khoá gì trước?",
          "keys": [
            "khoá gì trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not running off to search. Freeze your cards within minutes.",
          "sub": "Không phải chạy đi tìm. Mà khoá thẻ trong vài phút.",
          "keys": [
            "khoá thẻ trong vài phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then: freeze, check payments, search and report, use your backup money.",
          "sub": "Thứ tự: khoá thẻ, xem giao dịch, tìm lại và trình báo, lấy tiền dự phòng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "We follow Thảo from tonight to tomorrow night.",
          "sub": "Ta theo Thảo từ đêm nay tới đêm mai."
        }
      ],
      "ref": "intro,outro"
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
            "text": "① 23:50 · Năm phút đầu",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:five"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone",
                "locked"
              ]
            },
            "at": "l1:app",
            "caption": "Ngày 4 · khoá thẻ",
            "icon": "locked"
          },
          {
            "id": "c-app",
            "t": "text",
            "text": "Ứng dụng → khoá tạm thời",
            "x": 3996,
            "y": 160,
            "size": 48,
            "at": "l1:freeze",
            "hl": [
              {
                "text": "khoá tạm thời",
                "at": "l1:card"
              }
            ]
          },
          {
            "id": "c-hot",
            "t": "text",
            "text": "Không vào được? Đường dây nóng",
            "x": 3996,
            "y": 240,
            "size": 42,
            "at": "l3:hotline"
          },
          {
            "id": "c-web",
            "t": "text",
            "text": "số trên web chính thức, cả đêm",
            "x": 3996,
            "y": 310,
            "size": 40,
            "at": "l3:website",
            "color": "muted"
          },
          {
            "id": "c-not",
            "t": "text",
            "text": "Khoá tạm ≠ mất thẻ",
            "x": 3996,
            "y": 400,
            "size": 56,
            "at": "l4:forever",
            "color": "accent",
            "hl": [
              {
                "text": "≠ mất thẻ",
                "at": "l4:forever"
              }
            ]
          },
          {
            "id": "c-un",
            "t": "text",
            "text": "Tìm lại → mở khoá trên app",
            "x": 3996,
            "y": 490,
            "size": 44,
            "at": "l4:unfreeze"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Step one, the first five minutes. Open the bank app and freeze the card.",
          "sub": "Bước một, năm phút đầu. Mở ứng dụng ngân hàng, khoá thẻ tạm thời.",
          "keys": [
            "khoá thẻ tạm thời"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Credit card, frozen. Debit card, frozen too.",
          "sub": "Thẻ tín dụng, khoá. Thẻ ghi nợ, khoá luôn.",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Can't open the app? Call the card hotline from the bank's official website. It usually runs day and night.",
          "sub": "Không vào được ứng dụng? Gọi đường dây nóng thẻ trên trang web chính thức, thường mở cả ngày đêm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A temporary freeze isn't forever. Find it, and you unfreeze it in the app. Freezing early only helps.",
          "sub": "Khoá tạm thời không phải mất vĩnh viễn: tìm lại thì mở khoá trên ứng dụng. Khoá sớm chỉ có lợi.",
          "keys": [
            "Khoá sớm chỉ có lợi"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "text": "② 23:55 · Xem giao dịch",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:check"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "bank",
                "credit-card"
              ]
            },
            "at": "l1:payments",
            "caption": "Ngày 4 · lịch sử giao dịch",
            "icon": "bank"
          },
          {
            "id": "d-ck-c0",
            "t": "box",
            "x": 5964,
            "y": 175,
            "w": 44,
            "h": 44,
            "at": "l1:every card",
            "stroke": 5
          },
          {
            "id": "d-ck-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 159,
            "size": 56,
            "at": "l1:every card+500",
            "color": "accent"
          },
          {
            "id": "d-ck-l0",
            "t": "text",
            "text": "Khoá từng thẻ trong ví",
            "x": 6029,
            "y": 167,
            "size": 42,
            "at": "l1:every card+200"
          },
          {
            "id": "d-ck-c1",
            "t": "box",
            "x": 5964,
            "y": 260,
            "w": 44,
            "h": 44,
            "at": "l1:payments",
            "stroke": 5
          },
          {
            "id": "d-ck-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 244,
            "size": 56,
            "at": "l1:payments+500",
            "color": "accent"
          },
          {
            "id": "d-ck-l1",
            "t": "text",
            "text": "Xem giao dịch gần nhất",
            "x": 6029,
            "y": 252,
            "size": 42,
            "at": "l1:payments+200"
          },
          {
            "id": "d-ck-c2",
            "t": "box",
            "x": 5964,
            "y": 345,
            "w": 44,
            "h": 44,
            "at": "l2:digital",
            "stroke": 5
          },
          {
            "id": "d-ck-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 329,
            "size": 56,
            "at": "l2:digital+500",
            "color": "accent"
          },
          {
            "id": "d-ck-l2",
            "t": "text",
            "text": "Ví điện tử gắn thẻ",
            "x": 6029,
            "y": 337,
            "size": 42,
            "at": "l2:digital+200"
          },
          {
            "id": "d-ck-c3",
            "t": "box",
            "x": 5964,
            "y": 430,
            "w": 44,
            "h": 44,
            "at": "l2:password",
            "stroke": 5
          },
          {
            "id": "d-ck-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 414,
            "size": 56,
            "at": "l2:password+500",
            "color": "accent"
          },
          {
            "id": "d-ck-l3",
            "t": "text",
            "text": "Giấy ghi mật khẩu? Đổi ngay",
            "x": 6029,
            "y": 422,
            "size": 42,
            "at": "l2:password+200"
          },
          {
            "id": "d-say",
            "t": "text",
            "text": "“I did not make this payment.”",
            "x": 5964,
            "y": 540,
            "size": 42,
            "at": "l3:payment",
            "hl": [
              {
                "text": "did not make",
                "at": "l3:did not"
              }
            ]
          },
          {
            "id": "d-early",
            "t": "text",
            "text": "Báo càng sớm, càng có cơ sở",
            "x": 5964,
            "y": 620,
            "size": 46,
            "at": "l4:sooner",
            "color": "accent",
            "hl": [
              {
                "text": "càng sớm",
                "at": "l4:sooner"
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
          "say": "Step two. Every card in the wallet frozen? Now check your latest payments.",
          "sub": "Bước hai. Khoá đủ từng thẻ trong ví chưa? Giờ xem giao dịch gần nhất."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A digital wallet linked to the card? Check it too. A password note in the wallet? Change that password.",
          "sub": "Điện thoại có ví điện tử gắn thẻ? Kiểm tra luôn. Trong ví có giấy ghi mật khẩu? Đổi ngay."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "One strange payment. I did not make this payment.",
          "sub": "Có một khoản lạ. Tôi không thực hiện giao dịch này.",
          "pose": "phone",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Report it now. The sooner you tell the bank, the stronger your case.",
          "sub": "Báo ngay. Báo càng sớm, ngân hàng càng có cơ sở để xem xét.",
          "keys": [
            "Báo càng sớm"
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
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Ngày 5 · 9:00 · Tìm lại",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:frozen"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "purse",
                "left-luggage"
              ]
            },
            "at": "l1:places",
            "caption": "Ngày 5 · quầy dịch vụ",
            "icon": "purse"
          },
          {
            "id": "e-back",
            "t": "text",
            "text": "Quay lại nơi vừa ghé",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l1:visited"
          },
          {
            "id": "e-ask",
            "t": "text",
            "text": "Quầy dịch vụ · lễ tân · phục vụ",
            "x": 7932,
            "y": 240,
            "size": 40,
            "at": "l2:service desk",
            "color": "muted"
          },
          {
            "id": "e-q",
            "t": "text",
            "text": "“Has anyone handed in…?”",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "l3:handed",
            "color": "accent",
            "hl": [
              {
                "text": "handed in",
                "at": "l3:handed"
              }
            ]
          },
          {
            "id": "e-lp",
            "t": "text",
            "text": "Quầy đồ thất lạc",
            "x": 7932,
            "y": 420,
            "size": 52,
            "at": "l5:lost property",
            "hl": [
              {
                "text": "đồ thất lạc",
                "at": "l5:lost property"
              }
            ]
          },
          {
            "id": "e-ride",
            "t": "text",
            "text": "Xe ứng dụng → báo tài xế",
            "x": 7932,
            "y": 510,
            "size": 46,
            "at": "l6:driver"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Day five, nine a.m. Frozen and calm, Thảo goes back to the places she visited.",
          "sub": "Ngày 5, chín giờ sáng. Thẻ đã khoá, Thảo bình tĩnh quay lại những nơi vừa ghé."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask the service desk, reception, the staff. Meet Sam at the mall desk.",
          "sub": "Hỏi quầy dịch vụ, lễ tân, nhân viên phục vụ. Đây là Sam ở quầy trung tâm thương mại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Has anyone handed in a black wallet?",
          "sub": "Có ai gửi lại một chiếc ví màu đen không?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Not here. Try the lost property desk on the ground floor.",
          "sub": "Ở đây thì không. Chị thử quầy đồ thất lạc tầng trệt nhé.",
          "pose": "point"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Stations, airports and malls often have a lost property desk. Finders hand wallets in right there.",
          "sub": "Nhà ga, sân bay, trung tâm thương mại hay có quầy đồ thất lạc. Người nhặt được thường gửi ở đó."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Took a ride app car? Open your trip history and message the driver.",
          "sub": "Vừa đi xe qua ứng dụng? Mở lịch sử chuyến, báo tài xế."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s07",
      "module": "BRK-07",
      "data": {
        "question": "Thẻ khoá rồi, đồ khó tìm: có cần báo công an?",
        "illus": "police-officer"
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
          "say": "Cards frozen, wallet gone. Still need the police?",
          "sub": "Thẻ khoá rồi, ví khó tìm. Còn cần báo công an?"
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
            "text": "④ 10:30 · Có cần báo công an?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:snatched"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "face": "sad",
                  "pose": "shrug"
                }
              ],
              "props": [
                "handbag",
                "bus-stop"
              ]
            },
            "at": "l1:bag",
            "caption": "Thử nghĩ xem · bị giật túi",
            "icon": "handbag"
          },
          {
            "id": "f-myth",
            "t": "text",
            "text": "“Báo cũng chẳng tìm được”",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l2:find",
            "color": "muted"
          },
          {
            "id": "f-mx",
            "t": "strike",
            "over": "f-myth",
            "at": "l3:even"
          },
          {
            "id": "f-proof",
            "t": "text",
            "text": "Biên bản = bằng chứng",
            "x": 60,
            "y": 1360,
            "size": 60,
            "at": "l3:proof",
            "color": "accent",
            "hl": [
              {
                "text": "bằng chứng",
                "at": "l3:proof"
              }
            ]
          },
          {
            "id": "f-who",
            "t": "text",
            "text": "Ngân hàng, bảo hiểm sẽ hỏi",
            "x": 60,
            "y": 1450,
            "size": 46,
            "at": "l4:insurers"
          },
          {
            "id": "f-now",
            "t": "text",
            "text": "Đến đồn lúc còn ở đó",
            "x": 60,
            "y": 1540,
            "size": 50,
            "at": "l5:easier",
            "hl": [
              {
                "text": "lúc còn ở đó",
                "at": "l5:there"
              }
            ]
          },
          {
            "id": "f-rule",
            "t": "text",
            "text": "Mất gì cũng xin biên bản",
            "x": 60,
            "y": 1650,
            "size": 56,
            "at": "l6:report",
            "color": "accent",
            "hl": [
              {
                "text": "xin biên bản",
                "at": "l6:report"
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
          "say": "Think about it: Dũng's bag is snatched near the bus stop. Wallet and phone inside.",
          "sub": "Thử nghĩ xem: Dũng bị giật túi trên đường ra bến xe, trong có ví và điện thoại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Cards are frozen. I'm tired. The police won't find it anyway.",
          "sub": "Thẻ khoá rồi. Mệt lắm. Báo công an cũng chẳng tìm được.",
          "face": "sad",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Report it anyway. Even if nothing is found, the report is proof of what happened.",
          "sub": "Vẫn nên báo. Dù khó tìm lại, tờ biên bản là bằng chứng chuyện đã xảy ra.",
          "keys": [
            "bằng chứng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Banks and insurers often ask for it, for refunds and claims back home.",
          "sub": "Ngân hàng, bảo hiểm thường hỏi đúng tờ này khi hoàn tiền, bồi thường."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One trip to the station while you're there is easier than asking later.",
          "sub": "Đến đồn lúc còn ở đó dễ hơn nhiều so với xin lại sau."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Whatever you lose, get a report, or a case number.",
          "sub": "Mất gì cũng xin một tờ biên bản, hoặc số hồ sơ.",
          "keys": [
            "xin một tờ biên bản"
          ]
        }
      ],
      "ref": "p9,p10,p11"
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
            "at": 150,
            "fit": "G",
            "ms": 900
          },
          {
            "at": "a1",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 11:00 · Cuộc gọi “ngân hàng”",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:caller"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "left": {
                "label": "Trước: đọc mã",
                "ok": false
              },
              "right": {
                "label": "Sau: tự gọi lại",
                "ok": true
              }
            },
            "at": "l1:name",
            "caption": "Ngày 5 · số lạ gọi đến",
            "icon": "telephone-receiver"
          },
          {
            "id": "g-urg",
            "t": "text",
            "text": "Giọng gấp: “đọc mã để chặn!”",
            "x": 2028,
            "y": 1250,
            "size": 44,
            "at": "l1:code",
            "color": "coral"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "Trước: đọc mã → mất thêm",
            "x": 2028,
            "y": 1340,
            "size": 46,
            "at": "a2:more",
            "color": "muted"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "Sau: cúp máy, tự gọi lại",
            "x": 2028,
            "y": 1420,
            "size": 46,
            "at": "b2:website",
            "color": "accent",
            "hl": [
              {
                "text": "tự gọi lại",
                "at": "b2:calls"
              }
            ]
          },
          {
            "id": "g-sign",
            "t": "text",
            "text": "Biết tên, 4 số cuối ≠ thật",
            "x": 2028,
            "y": 1520,
            "size": 46,
            "at": "l2:proves",
            "hl": [
              {
                "text": "≠ thật",
                "at": "l2:nothing"
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
          "say": "Eleven a.m. A caller knows Thảo's name and her card's last four digits. Read the code, he says, to block it.",
          "sub": "Mười một giờ. Người gọi biết tên Thảo và bốn số cuối thẻ, giục đọc mã vừa gửi để “chặn lại”."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "thao",
          "say": "You know my name and card number... Yes, the code is...",
          "sub": "Anh biết cả tên, số thẻ của tôi… Vâng, mã là…",
          "phase": "a",
          "pose": "phone",
          "face": "worried"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "det",
          "say": "More money leaves her other account.",
          "sub": "Tài khoản thanh toán còn lại bị rút thêm một khoản.",
          "phase": "a"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "Thank you, I will call my bank myself.",
          "sub": "Cảm ơn, tôi sẽ tự gọi ngân hàng.",
          "phase": "b",
          "pose": "phone",
          "face": "stern"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "det",
          "say": "She hangs up and calls the number on the bank's official website.",
          "sub": "Cô cúp máy, tự gọi số trên trang web chính thức.",
          "phase": "b"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Knowing a few details proves nothing. Asking for the code is the clearest sign.",
          "sub": "Biết vài thông tin chẳng chứng minh gì. Xin mã mới là dấu hiệu rõ nhất.",
          "keys": [
            "Xin mã"
          ]
        }
      ],
      "ref": "p12,p13,p14"
    },
    {
      "id": "s10",
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
            "id": "g-rush",
            "t": "text",
            "text": "Sự hối thúc chính là mánh",
            "x": 2028,
            "y": 1650,
            "size": 50,
            "at": "l1:rush",
            "color": "coral",
            "hl": [
              {
                "text": "hối thúc",
                "at": "l1:rush"
              }
            ]
          },
          {
            "id": "g-rule",
            "t": "text",
            "text": "Ngân hàng thật không xin mã",
            "x": 2028,
            "y": 1750,
            "size": 56,
            "at": "l2:never",
            "color": "accent",
            "hl": [
              {
                "text": "không xin mã",
                "at": "l2:never asks"
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
          "say": "Scammers call right after you lose a card, when you're worried. The rush is the trick.",
          "sub": "Kẻ gian hay gọi đúng lúc bạn vừa mất thẻ, đang lo. Sự hối thúc chính là mánh.",
          "keys": [
            "Sự hối thúc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A real bank never asks you to read out that code.",
          "sub": "Ngân hàng thật không bao giờ xin mã của bạn.",
          "keys": [
            "không bao giờ xin mã"
          ]
        }
      ],
      "ref": "p12,p15"
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
            "zoom": 1.35,
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
            "text": "⑥ Trưa · Hết tiền?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:money"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "locked",
                "money-bag"
              ]
            },
            "at": "l1:noon",
            "caption": "Ngày 5 · két phòng",
            "icon": "locked"
          },
          {
            "id": "h-safe",
            "t": "text",
            "text": "Thẻ thứ hai, tiền trong két",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l2:safe",
            "color": "accent",
            "hl": [
              {
                "text": "trong két",
                "at": "l2:safe"
              }
            ]
          },
          {
            "id": "h-fam",
            "t": "text",
            "text": "Người thân chuyển: kênh chính thức",
            "x": 3996,
            "y": 1340,
            "size": 40,
            "at": "l3:family"
          },
          {
            "id": "h-how",
            "t": "text",
            "text": "Hỏi kỹ cách nhận ở đây",
            "x": 3996,
            "y": 1410,
            "size": 44,
            "at": "l3:collect",
            "color": "muted"
          },
          {
            "id": "h-pp",
            "t": "text",
            "text": "Vay người lạ, cầm hộ chiếu",
            "x": 3996,
            "y": 1500,
            "size": 46,
            "at": "l4:passport",
            "color": "coral"
          },
          {
            "id": "h-ppx",
            "t": "strike",
            "over": "h-pp",
            "at": "l5:worse"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Step four, noon. Is the money gone?",
          "sub": "Bước bốn, buổi trưa. Hết tiền rồi sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Second card and some cash, in the room safe. Still going!",
          "sub": "Thẻ thứ hai và ít tiền mặt trong két phòng. Vẫn đi tiếp!",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No backup? Ask family to send money through a bank or official transfer service. Ask how to collect it here.",
          "sub": "Không có? Nhờ người thân chuyển qua ngân hàng, dịch vụ chuyển tiền chính thức. Hỏi kỹ cách nhận ở đây."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "A man at the market offered a loan, if I leave my passport.",
          "sub": "Ông chú ở chợ bảo cho vay, nếu em để lại hộ chiếu.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Refuse. Losing your passport to a stranger is far worse than a few frugal days.",
          "sub": "Từ chối. Mất hộ chiếu vào tay người lạ còn lớn chuyện hơn vài ngày tiêu dè xẻn.",
          "keys": [
            "Từ chối"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s12",
      "module": "BRK-09",
      "data": {
        "kind": "Khó khăn thật",
        "title": "+84 981 84 84 84",
        "detail": "Tổng đài bảo hộ công dân, Cục Lãnh sự",
        "illus": "telephone-receiver",
        "around": [
          "classical-building",
          "sos-button"
        ],
        "icon": "phone"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Stuck? Plus eight four, nine eight one, eight four, eight four, eight four.",
          "sub": "Khó khăn thật? +84 981 84 84 84."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Or the embassy.",
          "sub": "Hoặc cơ quan đại diện."
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s13",
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
            "text": "⑦ Chiều · Ba lớp tiền",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:three"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
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
                  "pose": "thumb"
                }
              ],
              "props": [
                "purse",
                "locked",
                "mobile-phone"
              ]
            },
            "at": "l1:market",
            "caption": "Ngày 5 · trước khi ra chợ",
            "icon": "purse"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "① Ví: 1 thẻ, đủ hôm nay",
            "x": 5964,
            "y": 1250,
            "size": 46,
            "at": "l2:one card"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "② Két: thẻ 2, ít tiền mặt",
            "x": 5964,
            "y": 1330,
            "size": 46,
            "at": "l3:safe"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "③ App khoá + số trên giấy",
            "x": 5964,
            "y": 1410,
            "size": 46,
            "at": "l4:app"
          },
          {
            "id": "i-ok",
            "t": "text",
            "text": "Bị móc ví → khoá, đi tiếp",
            "x": 5964,
            "y": 1510,
            "size": 48,
            "at": "l5:picked",
            "color": "accent",
            "hl": [
              {
                "text": "đi tiếp",
                "at": "l5:carry on"
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
          "say": "Afternoon. Before a crowded market, Dũng splits his money into three layers.",
          "sub": "Buổi chiều. Trước khi ra chợ đông, Dũng chia tiền ba lớp.",
          "keys": [
            "ba lớp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "One: my pocket wallet. One card, enough cash for today.",
          "sub": "Một: ví bỏ túi. Một thẻ, đủ tiền mặt hôm nay.",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Two: a second card and some cash in the room safe, with my passport.",
          "sub": "Hai: thẻ thứ hai, ít tiền mặt trong két phòng, cùng hộ chiếu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Three: the freeze app, and the bank hotline on paper.",
          "sub": "Ba: ứng dụng khoá thẻ, và số đường dây nóng ghi giấy riêng.",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Wallet picked? Freeze, take the backup, carry on. Don't let the whole trip live in one wallet.",
          "sub": "Bị móc ví? Khoá thẻ, lấy thẻ dự phòng, đi tiếp. Đừng để cả chuyến đi nằm trong một chiếc ví.",
          "keys": [
            "một chiếc ví"
          ]
        }
      ],
      "ref": "p19,p20"
    },
    {
      "id": "s14",
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
            "id": "i-list",
            "t": "text",
            "text": "Ghi mọi thứ đã mất",
            "x": 5964,
            "y": 1630,
            "size": 48,
            "at": "l1:list",
            "hl": [
              {
                "text": "mọi thứ",
                "at": "l1:everything"
              }
            ]
          },
          {
            "id": "i-now",
            "t": "text",
            "text": "Cần ngay → hỏi làm lại ở đây",
            "x": 5964,
            "y": 1710,
            "size": 42,
            "at": "l2:need"
          },
          {
            "id": "i-home",
            "t": "text",
            "text": "Để sau → danh sách về nước",
            "x": 5964,
            "y": 1780,
            "size": 42,
            "at": "l2:wait",
            "color": "muted"
          },
          {
            "id": "i-work",
            "t": "text",
            "text": "Công tác: báo công ty sớm",
            "x": 6784,
            "y": 1780,
            "size": 42,
            "at": "l3:company",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Other cards in the wallet? List everything lost: licence, ID, insurance card, staff card.",
          "sub": "Giấy tờ khác trong ví? Ghi lại mọi thứ đã mất: bằng lái, căn cước, thẻ bảo hiểm, thẻ nhân viên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Need it on this trip? Ask how to replace it here. Can it wait? Put it on your list for home.",
          "sub": "Cần ngay thì hỏi cách làm lại ở đây. Để về nước được thì ghi vào danh sách việc cần làm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "On a work trip, tell your company early: frozen the company card, reported it, here's the report number.",
          "sub": "Đi công tác thì báo công ty sớm: đã khoá thẻ công ty, đã báo công an, gửi số biên bản."
        }
      ],
      "ref": "p21,p22"
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
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Ngày 5 · gần nửa đêm",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:midnight"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "purse",
                "locked",
                "alarm-clock"
              ]
            },
            "at": "l1:same room",
            "caption": "Cùng phòng ấy · một ngày sau",
            "icon": "locked"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Ví hằng ngày",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l3:daily"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Chỗ cất thứ hai",
            "x": 7932,
            "y": 1340,
            "size": 50,
            "at": "l3:second"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Lớp số: app + giấy",
            "x": 7932,
            "y": 1420,
            "size": 50,
            "at": "l3:digital",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Day five, almost midnight. Same room, same hour as last night.",
          "sub": "Ngày 5, gần nửa đêm. Cùng phòng, cùng giờ với đêm qua."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Card frozen, report in my email, backup in the safe. I can sleep.",
          "sub": "Thẻ đã khoá, biên bản trong email, thẻ dự phòng trong két. Ngủ được rồi.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For the rest of the trip: a daily wallet, a second hiding place, and a digital layer.",
          "sub": "Từ giờ đến hết chuyến: ví hằng ngày, chỗ cất thứ hai, và lớp số."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Troubles never come alone, our elders say. So Thảo keeps her three layers ready.",
          "sub": "Ông bà bảo “họa vô đơn chí”. Nên Thảo giữ sẵn ba lớp tiền.",
          "keys": [
            "họa vô đơn chí"
          ]
        }
      ],
      "ref": "p23"
    },
    {
      "id": "s16",
      "module": "BRK-04",
      "data": {
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Mất ví là mất tất cả",
        "right": "Mất một phần, vẫn đi tiếp",
        "wrongIllus": "money-with-wings",
        "rightIllus": "locked"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three layers won't stop thieves.",
          "sub": "Ba lớp không làm bạn ít bị trộm hơn."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "But losing everything becomes losing one part.",
          "sub": "Nhưng “mất tất cả” thành “mất một phần, vẫn đi tiếp”."
        }
      ],
      "ref": "p24"
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
          }
        ],
        "items": [
          {
            "id": "j-fee",
            "t": "text",
            "text": "Về nhà: hỏi phí dùng thẻ",
            "x": 7932,
            "y": 1550,
            "size": 46,
            "at": "l1:fees",
            "hl": [
              {
                "text": "phí dùng thẻ",
                "at": "l1:fees"
              }
            ]
          },
          {
            "id": "j-rule",
            "t": "text",
            "text": "Khoá trước, tìm sau",
            "x": 7932,
            "y": 1660,
            "size": 64,
            "at": "l2:freeze",
            "color": "accent",
            "hl": [
              {
                "text": "Khoá trước",
                "at": "l2:freeze first"
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
          "say": "Back home, ask your bank about fees for cards abroad, for next time.",
          "sub": "Về nước, hỏi ngân hàng phí dùng thẻ ở nước ngoài để chuẩn bị chuyến sau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Last night, Thảo nearly searched first. Tonight she knows: freeze first, search later.",
          "sub": "Đêm qua Thảo suýt đi tìm trước. Đêm nay thì thuộc lòng: khoá trước, tìm sau.",
          "keys": [
            "khoá trước, tìm sau"
          ]
        }
      ],
      "ref": "p24,p6"
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
            "ms": 1400
          },
          {
            "at": "l1:freeze",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:report",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:code",
            "fit": "G",
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
            "x": 4556,
            "y": 400,
            "at": "l1:freeze"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1650,
            "at": "l2:report"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2788,
            "y": 1750,
            "at": "l3:code"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; quy định, phí có thể thay đổi, hỏi ngân hàng của bạn.",
            "x": 7932,
            "y": 1825,
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
          "say": "So: freeze first, search later.",
          "sub": "Tóm lại: khoá trước, tìm sau.",
          "keys": [
            "khoá trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Whatever you lose, get a report.",
          "sub": "Mất gì cũng xin một tờ biên bản.",
          "keys": [
            "biên bản"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And a real bank never asks for your code.",
          "sub": "Và ngân hàng thật không bao giờ xin mã.",
          "keys": [
            "không bao giờ xin mã"
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
      "ref": "questions[0]",
      "data": {
        "q": "The caller knows your name and the last digits of your card, why is it still a scam?",
        "options": [
          "It is not a scam, because only real bank staff know those details",
          "Knowing a few details proves nothing, and a real bank never asks for codes",
          "It is a scam only because the caller speaks too fast on the phone"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "telephone-receiver",
        "why": "Dấu hiệu chắc chắn là xin mã xác thực."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The caller knows your name and the last digits of your card, why is it still a scam?",
          "sub": "Người gọi biết tên và mấy số cuối thẻ của bạn, vì sao vẫn là lừa đảo?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Knowing a few details proves nothing, and a real bank never asks for codes.",
          "sub": "Biết vài thông tin chẳng chứng minh gì, và ngân hàng thật không xin mã."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Scammers can get details anywhere. Asking for the code is the sure sign.",
          "sub": "Kẻ gian lấy thông tin từ nhiều nguồn. Xin mã mới là dấu hiệu chắc chắn."
        }
      ]
    },
    {
      "id": "s20",
      "module": "END-05",
      "ref": "outro",
      "data": {
        "text": "Còn thẻ chưa khoá? Khoá ngay",
        "sub": "Rồi làm 40 câu hỏi bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Any card still open? Freeze it now, then try the forty questions. Next: a cancelled flight.",
          "sub": "Còn thẻ chưa khoá? Khoá ngay, rồi làm bốn mươi câu hỏi. Bài sau: lỡ hoặc huỷ chuyến bay.",
          "face": "happy"
        }
      ]
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s15"
  }
};
