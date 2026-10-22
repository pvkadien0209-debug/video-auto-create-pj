// Kịch bản video W lần 3 (#110) — "Quản lý tiền bố mẹ gửi hằng tháng khi học xa nhà" · chuỗi "Chuẩn bị vào đại học xa nhà"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "manage-monthly-allowance--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "first-year-students-living-away",
    "slug": "manage-monthly-allowance",
    "door": "ky-nang",
    "level": "B1",
    "title": "Quản lý tiền bố mẹ gửi hằng tháng khi học xa nhà",
    "series": "Chuẩn bị vào đại học xa nhà"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô theo MỘT THÁNG TIỀN của Dũng (sáng mùng 1 tiền về → tuần 1 tối ghi chép → Chủ nhật đọc lại → tuần 2 ‘trả sau’ + lời rủ → giữa tháng Lan hỏi vay → tối đó Lan hụt tiền → sáng mùng 1 tháng sau). Nhân vật theo w145/_series/first-year-students-living-away.md: Dũng (gộp Ngọc p4, Tâm p8, người được hỏi vay p21–p22), Lan (Thảo p19, người rủ đi chơi p12, người hỏi vay), Bác Bình được gọi (‘Dad, here's how I spent this month’, lời trung lập theo p25); mẹ Lan không lên hình. Số liệu: chỉ số của bài (4 ngăn, 1–2 phút, 3 ngày, tháng thứ ba); không dùng % lãi. Cảnh ngắt nhịp: BRK-07 s08 (tiền đi đâu, p7), BRK-04 s13 (Tưởng/Thật: trả sau, p14), DLG s21 (vay app, p17–p20). Khép vòng: sáng mùng 1 ‘Ting ting!’ → sáng mùng 1 tháng sau; ‘Tích tiểu thành đại’ → tiêu vặt thành đại → thành tiền để dành. Câu đố giữ questions[27]. Bản cũ (W lần 3, #110): w145/bak/manage-monthly-allowance--w01.js.",
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
            "text": "4 ngăn",
            "x": 60,
            "y": 120,
            "size": 150,
            "at": "l1:Four",
            "color": "accent",
            "hl": [
              {
                "text": "4 ngăn",
                "at": "l1:parts"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "tiền tháng đủ đến cuối tháng",
            "x": 70,
            "y": 330,
            "size": 54,
            "at": "l1:last"
          },
          {
            "id": "a-math",
            "t": "text",
            "text": "Ta tưởng: phải giỏi toán?",
            "x": 70,
            "y": 430,
            "size": 52,
            "at": "l2:genius",
            "color": "muted"
          },
          {
            "id": "a-mathx",
            "t": "strike",
            "over": "a-math",
            "at": "l2:Nope"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Four parts. That's all it takes to make your monthly allowance last the month.",
          "sub": "Bốn ngăn. Chỉ cần thế, tiền bố mẹ gửi đủ dùng đến cuối tháng.",
          "keys": [
            "Bốn ngăn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "You think you need to be a maths genius? Nope.",
          "sub": "Tưởng phải giỏi toán mới giữ được tiền? Không cần.",
          "keys": [
            "Không cần"
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "money-bag",
                "sunrise"
              ]
            },
            "at": "l1",
            "caption": "Sáng mùng 1 · phòng trọ",
            "icon": "money-bag"
          },
          {
            "id": "a-wk",
            "t": "text",
            "text": "Tuần đầu dư, tuần cuối đếm",
            "x": 900,
            "y": 690,
            "size": 46,
            "at": "l3:Week one",
            "color": "coral",
            "hl": [
              {
                "text": "tuần cuối đếm",
                "at": "l3:counting"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Tích tiểu thành đại”",
            "x": 60,
            "y": 560,
            "size": 58,
            "at": "l4:little",
            "color": "accent",
            "hl": [
              {
                "text": "thành đại",
                "at": "l4:lot"
              }
            ]
          },
          {
            "id": "a-tv",
            "t": "text",
            "text": "Tiêu vặt cũng… thành đại",
            "x": 60,
            "y": 660,
            "size": 50,
            "at": "l4:spending",
            "hl": [
              {
                "text": "thành đại",
                "at": "l4:spending"
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
          "say": "Meet Dũng. The first of the month, morning. Ding!",
          "sub": "Đây là Dũng. Sáng mùng một. Ting ting!"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Money's in! I'm rich! Milk tea for the whole floor!",
          "sub": "Tiền về rồi! Giàu rồi! Trà sữa cả dãy trọ!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Week one, a millionaire. Last week, counting every coin. Sound familiar?",
          "sub": "Tuần đầu như đại gia, tuần cuối đếm từng đồng. Nghe quen không?",
          "keys": [
            "tuần cuối đếm từng đồng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Grandparents say: little by little, a lot. It works for spending too.",
          "sub": "Ông bà dặn: “Tích tiểu thành đại.” Tiêu vặt cũng... thành đại.",
          "keys": [
            "Tích tiểu thành đại"
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
            "text": "Tiền tháng sao cho đủ?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:last",
            "hl": [
              {
                "text": "đủ",
                "at": "l1:last"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: nhịn, giỏi toán",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:starving",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:Five"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: 5 thói quen nhỏ",
            "x": 2028,
            "y": 260,
            "size": 60,
            "at": "l2:Five",
            "color": "accent",
            "hl": [
              {
                "text": "5 thói quen",
                "at": "l2:habits"
              }
            ]
          },
          {
            "id": "b-h0",
            "t": "box",
            "x": 2028,
            "y": 420,
            "w": 300,
            "h": 90,
            "at": "l3:Split",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-h1",
            "t": "box",
            "x": 2358,
            "y": 420,
            "w": 300,
            "h": 90,
            "at": "l3:week",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-h2",
            "t": "box",
            "x": 2688,
            "y": 420,
            "w": 300,
            "h": 90,
            "at": "l3:notes",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-h3",
            "t": "box",
            "x": 3018,
            "y": 420,
            "w": 300,
            "h": 90,
            "at": "l3:slow",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-h4",
            "t": "box",
            "x": 3348,
            "y": 420,
            "w": 300,
            "h": 90,
            "at": "l3:call",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-ht0",
            "t": "text",
            "text": "Tách ngay",
            "x": 2052,
            "y": 436,
            "size": 46,
            "at": "l3:Split+200"
          },
          {
            "id": "b-ht1",
            "t": "text",
            "text": "Chia tuần",
            "x": 2382,
            "y": 436,
            "size": 46,
            "at": "l3:week+200"
          },
          {
            "id": "b-ht2",
            "t": "text",
            "text": "Ghi mỗi tối",
            "x": 2712,
            "y": 436,
            "size": 46,
            "at": "l3:notes+200"
          },
          {
            "id": "b-ht3",
            "t": "text",
            "text": "Chậm lại",
            "x": 3042,
            "y": 436,
            "size": 46,
            "at": "l3:slow+200"
          },
          {
            "id": "b-ht4",
            "t": "text",
            "text": "Báo sớm",
            "x": 3372,
            "y": 436,
            "size": 46,
            "at": "l3:call+200"
          },
          {
            "id": "b-go",
            "t": "text",
            "text": "Theo Dũng trọn một tháng",
            "x": 2028,
            "y": 600,
            "size": 52,
            "at": "l4:month",
            "hl": [
              {
                "text": "trọn một tháng",
                "at": "l4:month"
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
          "say": "So how do you make the monthly money last?",
          "sub": "Vậy làm sao để tiền tháng đủ dùng?",
          "keys": [
            "đủ dùng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not by starving, not by genius maths. Five small habits.",
          "sub": "Không phải nhịn, không phải giỏi toán. Mà là năm thói quen nhỏ.",
          "keys": [
            "năm thói quen nhỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Split it the day it arrives, food by the week, notes every night, slow down on extras, call home early.",
          "sub": "Tách tiền ngay khi nhận, chia tiền ăn theo tuần, ghi chép mỗi tối, chậm lại trước món ngoài kế hoạch, báo bố mẹ sớm khi thiếu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Dũng through one whole month.",
          "sub": "Cùng theo Dũng qua trọn một tháng."
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Mùng 1 · Tách tiền nhà",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:same"
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
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "envelope",
                "money-bag"
              ]
            },
            "at": "l1:dong",
            "caption": "Sáng mùng 1 · trước khi tiêu",
            "icon": "envelope"
          },
          {
            "id": "c-fix",
            "t": "text",
            "text": "Phòng, điện nước, mạng, xe → tách",
            "x": 3996,
            "y": 170,
            "size": 44,
            "at": "l2:Rent",
            "hl": [
              {
                "text": "tách",
                "at": "l2:left"
              }
            ]
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 270,
            "w": 46,
            "h": 46,
            "at": "l4:fixed",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 252,
            "size": 58,
            "at": "l4:fixed+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Cố định",
            "x": 4064,
            "y": 260,
            "size": 44,
            "at": "l4:fixed+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 338,
            "w": 46,
            "h": 46,
            "at": "l4:food",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 320,
            "size": 58,
            "at": "l4:food+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Ăn uống: chia tuần",
            "x": 4064,
            "y": 328,
            "size": 44,
            "at": "l4:food+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 406,
            "w": 46,
            "h": 46,
            "at": "l4:study",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 388,
            "size": 58,
            "at": "l4:study+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Học tập: sách, in",
            "x": 4064,
            "y": 396,
            "size": 44,
            "at": "l4:study+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 474,
            "w": 46,
            "h": 46,
            "at": "l4:emergency",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 456,
            "size": 58,
            "at": "l4:emergency+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Dự phòng: ốm, hỏng đồ",
            "x": 4064,
            "y": 464,
            "size": 44,
            "at": "l4:emergency+200"
          },
          {
            "id": "c-env",
            "t": "text",
            "text": "Phong bì · tài khoản phụ · ghi chú",
            "x": 4836,
            "y": 690,
            "size": 40,
            "at": "l5:Envelopes",
            "color": "accent",
            "hl": [
              {
                "text": "tài khoản phụ",
                "at": "l5:side"
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
          "say": "Stop one, same morning. Before spending a single dong, take out the fixed costs.",
          "sub": "Chặng một, ngay sáng đó. Trước khi tiêu đồng nào, tách các khoản cố định ra trước.",
          "keys": [
            "tách các khoản cố định"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Rent, power and water, internet, parking, the bus pass. What's left is your real spending money.",
          "sub": "Tiền phòng, điện nước, mạng, gửi xe, vé xe tháng. Phần còn lại mới là tiền thật sự được tiêu.",
          "keys": [
            "Phần còn lại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Okay. Rent goes into a side account. Cô Hoa gets paid in full, on time.",
          "sub": "Được. Tiền phòng chuyển sang tài khoản phụ. Cô Hoa nhận đủ, đúng hạn.",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then four parts: fixed, food split by week, study, and emergency, only for sickness or breakages.",
          "sub": "Rồi bốn ngăn: cố định; ăn uống, chia theo tuần; học tập; dự phòng, chỉ dùng khi ốm, hỏng đồ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Envelopes, a side account, a phone note. Anything, as long as they're separate.",
          "sub": "Phong bì, tài khoản phụ, ghi chú điện thoại. Gì cũng được, miễn tách rõ."
        }
      ],
      "ref": "p1,p2,p4"
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
            "id": "c-fun",
            "t": "text",
            "text": "Đi chơi: phần nhỏ sau ăn uống",
            "x": 3996,
            "y": 560,
            "size": 44,
            "at": "l1:Fun"
          },
          {
            "id": "c-rule",
            "t": "text",
            "text": "Tiền về, tách tiền nhà ngay",
            "x": 3996,
            "y": 650,
            "size": 58,
            "at": "l2:arrives",
            "color": "accent",
            "hl": [
              {
                "text": "tách tiền nhà ngay",
                "at": "l2:housing"
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
          "say": "Fun money? A small slice from what's left after food, so you know when it's gone.",
          "sub": "Đi chơi? Tách thêm một phần nhỏ từ phần còn lại sau ăn uống, để biết khi nào đã hết."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Money arrives, split off the housing money at once.",
          "sub": "Tiền về tay, tách tiền nhà ra ngay.",
          "keys": [
            "tách tiền nhà ra ngay"
          ]
        }
      ],
      "ref": "p2,p5"
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
            "at": "l4",
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
            "text": "② Tuần 1 · Tối, ghi chép",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:week one"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "crescent-moon",
                "spiral-notepad"
              ]
            },
            "at": "l3:night",
            "caption": "Tuần 1 · mỗi tối",
            "icon": "spiral-notepad"
          },
          {
            "id": "d-w0",
            "t": "box",
            "x": 5964,
            "y": 170,
            "w": 170,
            "h": 80,
            "at": "l1:weekly+0",
            "stroke": 4
          },
          {
            "id": "d-w1",
            "t": "box",
            "x": 6154,
            "y": 170,
            "w": 170,
            "h": 80,
            "at": "l1:weekly+250",
            "stroke": 4
          },
          {
            "id": "d-w2",
            "t": "box",
            "x": 6344,
            "y": 170,
            "w": 170,
            "h": 80,
            "at": "l1:weekly+500",
            "stroke": 4
          },
          {
            "id": "d-w3",
            "t": "box",
            "x": 6534,
            "y": 170,
            "w": 170,
            "h": 80,
            "at": "l1:weekly+750",
            "stroke": 4
          },
          {
            "id": "d-wt0",
            "t": "text",
            "text": "T1",
            "x": 6014,
            "y": 180,
            "size": 50,
            "at": "l1:weekly+150"
          },
          {
            "id": "d-wt1",
            "t": "text",
            "text": "T2",
            "x": 6204,
            "y": 180,
            "size": 50,
            "at": "l1:weekly+400"
          },
          {
            "id": "d-wt2",
            "t": "text",
            "text": "T3",
            "x": 6394,
            "y": 180,
            "size": 50,
            "at": "l1:weekly+650"
          },
          {
            "id": "d-wt3",
            "t": "text",
            "text": "T4",
            "x": 6584,
            "y": 180,
            "size": 50,
            "at": "l1:weekly+900"
          },
          {
            "id": "d-roll",
            "t": "text",
            "text": "Dư → tuần sau / dự phòng",
            "x": 5964,
            "y": 300,
            "size": 46,
            "at": "l2:Left",
            "hl": [
              {
                "text": "tuần sau",
                "at": "l2:next week"
              }
            ]
          },
          {
            "id": "d-over",
            "t": "text",
            "text": "Lố → tuần sau bớt",
            "x": 5964,
            "y": 375,
            "size": 46,
            "at": "l2:Overspent",
            "color": "coral"
          },
          {
            "id": "d-note",
            "t": "text",
            "text": "1–2 phút mỗi tối: ghi lại",
            "x": 5964,
            "y": 470,
            "size": 46,
            "at": "l3:Every night",
            "color": "accent",
            "hl": [
              {
                "text": "mỗi tối",
                "at": "l3:night"
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
          "say": "Stop two, week one. Food money splits into equal weekly parts, not one big monthly pile.",
          "sub": "Chặng hai, tuần một. Tiền ăn chia đều theo tuần, không để cả tháng một cục.",
          "keys": [
            "chia đều theo tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Left over on Sunday? Roll it to next week, or to emergencies. Overspent? Next week, trim.",
          "sub": "Cuối tuần còn dư: dồn sang tuần sau hoặc dự phòng. Tiêu lố: tuần sau biết bớt."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Every night, one or two minutes: what did I spend, how much. A phone note will do.",
          "sub": "Mỗi tối một hai phút ghi: hôm nay tiêu gì, bao nhiêu. Ghi chú điện thoại là đủ.",
          "keys": [
            "Mỗi tối một hai phút"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Lunch rice. Milk tea. A delivery fee... again?",
          "sub": "Cơm trưa. Trà sữa. Phí giao hàng... lại nữa?",
          "face": "thinking"
        }
      ],
      "ref": "p3,p6"
    },
    {
      "id": "s08",
      "module": "BRK-07",
      "data": {
        "question": "Chẳng mua gì lớn. Tiền đi đâu?",
        "illus": "money-with-wings"
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
          "say": "No big buys. So where did the money go?",
          "sub": "Chẳng mua gì lớn. Vậy tiền đi đâu?"
        }
      ],
      "ref": "p7"
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
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Chủ nhật · Đọc lại",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Sunday"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "bubble-tea",
                "takeout-box"
              ]
            },
            "at": "l1:rereads",
            "caption": "Cuối tuần 1 · đọc lại ghi chép",
            "icon": "bubble-tea"
          },
          {
            "id": "e-need",
            "t": "text",
            "text": "Cần ✓   Muốn ?",
            "x": 7932,
            "y": 170,
            "size": 54,
            "at": "l1:need",
            "hl": [
              {
                "text": "Muốn ?",
                "at": "l1:want"
              }
            ]
          },
          {
            "id": "e-bt",
            "t": "illus",
            "name": "bubble-tea",
            "x": 7932,
            "y": 260,
            "size": 80,
            "at": "l2:drink"
          },
          {
            "id": "e-tk",
            "t": "illus",
            "name": "takeout-box",
            "x": 8032,
            "y": 260,
            "size": 80,
            "at": "l2:deliveries"
          },
          {
            "id": "e-more",
            "t": "text",
            "text": "> tiền cơm!",
            "x": 8142,
            "y": 270,
            "size": 54,
            "at": "l3:more",
            "color": "coral"
          },
          {
            "id": "e-leak",
            "t": "text",
            "text": "Rò rỉ: nước, phí giao, ăn vặt",
            "x": 7932,
            "y": 380,
            "size": 46,
            "at": "l4:leaks",
            "hl": [
              {
                "text": "Rò rỉ",
                "at": "l4:leaks"
              }
            ]
          },
          {
            "id": "e-fix",
            "t": "text",
            "text": "Nước để cuối tuần · tự mua cơm",
            "x": 7932,
            "y": 460,
            "size": 44,
            "at": "l5:weekends",
            "color": "accent"
          },
          {
            "id": "e-rule",
            "t": "text",
            "text": "Ghi thì thấy, thấy thì sửa",
            "x": 8772,
            "y": 690,
            "size": 52,
            "at": "l6:Write",
            "color": "accent",
            "hl": [
              {
                "text": "thấy thì sửa",
                "at": "l6:fix"
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
          "say": "Stop three: Sunday. Dũng rereads his notes and marks each one: need, or just want.",
          "sub": "Chặng ba: Chủ nhật. Dũng đọc lại ghi chép, đánh dấu: khoản nào cần, khoản nào chỉ là muốn.",
          "keys": [
            "cần",
            "muốn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Main meals are cheap rice. But a drink every day, and deliveries because I was lazy...",
          "sub": "Bữa chính toàn cơm bình dân. Mà ngày nào cũng một ly nước, lại gọi đồ giao vì lười...",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Together they cost more than my rice!",
          "sub": "Cộng lại còn nhiều hơn tiền cơm!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Money rarely goes in one big hit. It leaks through small repeats: drinks, delivery fees, snacks.",
          "sub": "Tiền ít khi mất vì một khoản lớn, mà rò rỉ qua món nhỏ lặp lại: đồ uống, phí giao hàng, ăn vặt.",
          "keys": [
            "rò rỉ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Dũng doesn't quit. Drinks on weekends only, and he walks to buy his own rice. Next week: money left.",
          "sub": "Dũng không bỏ hẳn: đồ uống để cuối tuần, tự đi mua cơm. Tuần sau đã dư."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Write it, see it. See it, fix it.",
          "sub": "Ghi thì thấy, thấy thì sửa.",
          "keys": [
            "Ghi thì thấy, thấy thì sửa"
          ]
        }
      ],
      "ref": "p7,p8,p9"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Tuần 2 · “Trả sau” mời gọi",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:shopping"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "headphone",
                "coat"
              ]
            },
            "at": "l1:whispers",
            "caption": "Tuần 2 · ứng dụng mua sắm",
            "icon": "headphone"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Giày → tai nghe → áo khoác",
            "x": 60,
            "y": 1260,
            "size": 48,
            "at": "l2:Shoes"
          },
          {
            "id": "f-st",
            "t": "text",
            "text": "Tháng thứ 3: chồng lên nhau",
            "x": 60,
            "y": 1340,
            "size": 46,
            "at": "l3:stack",
            "color": "coral",
            "hl": [
              {
                "text": "chồng lên nhau",
                "at": "l3:stack"
              }
            ]
          },
          {
            "id": "f-eq",
            "t": "text",
            "text": "≈ tiền ăn cả tháng + phí trễ hạn",
            "x": 60,
            "y": 1415,
            "size": 42,
            "at": "l3:food",
            "color": "coral"
          },
          {
            "id": "f-mi",
            "t": "text",
            "text": "→ tuần mì gói",
            "x": 60,
            "y": 1490,
            "size": 50,
            "at": "l4:noodle"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, week two. A shopping app whispers: shoes now, pay later, a little each month.",
          "sub": "Chặng bốn, tuần hai. Ứng dụng mua sắm thì thầm: giày ngay, trả sau, mỗi tháng một ít."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Shoes, then headphones, then a jacket. Each one's tiny!",
          "sub": "Giày, rồi tai nghe, rồi áo khoác. Khoản nào cũng nhỏ xíu!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "By month three they stack up, close to a whole month of food, plus late fees if you slip.",
          "sub": "Đến tháng thứ ba, chúng chồng lên nhau, gần bằng tiền ăn cả tháng, có khi thêm phí trễ hạn.",
          "keys": [
            "chồng lên nhau"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the last week of the month becomes instant-noodle week.",
          "sub": "Và tuần cuối tháng thành tuần mì gói."
        }
      ],
      "ref": "p11,p13"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Trả sau",
        "labels": [
          "Tưởng",
          "Thật"
        ],
        "wrong": "Mỗi tháng một ít, nhẹ tênh",
        "right": "Trả sau vẫn là trả, lúc mình đã quên",
        "wrongIllus": "feather",
        "rightIllus": "money-with-wings"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Pay later, a little a month. Easy?",
          "sub": "Trả sau, mỗi tháng một ít. Nhẹ tênh?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Pay later is still paying, just after you forget.",
          "sub": "Trả sau vẫn là trả, chỉ là trả lúc mình đã quên.",
          "keys": [
            "Trả sau vẫn là trả"
          ]
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
            "id": "f-q",
            "t": "text",
            "text": "Cần, hay chỉ đang thích?",
            "x": 60,
            "y": 1580,
            "size": 50,
            "at": "l1:need",
            "hl": [
              {
                "text": "chỉ đang thích",
                "at": "l1:like"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Đợi 3 ngày: còn muốn không?",
            "x": 60,
            "y": 1660,
            "size": 50,
            "at": "l1:three days",
            "color": "accent",
            "hl": [
              {
                "text": "Đợi 3 ngày",
                "at": "l1:three days"
              }
            ]
          },
          {
            "id": "f-add",
            "t": "text",
            "text": "Cộng hết khoản trả sau",
            "x": 60,
            "y": 1750,
            "size": 48,
            "at": "l2:add"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before any unplanned buy, ask: do I need it, or just like it? Will I still want it in three days?",
          "sub": "Trước món ngoài kế hoạch, hỏi: cần hay chỉ đang thích? Đợi ba ngày nữa còn muốn không?",
          "keys": [
            "Đợi ba ngày"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Many items drop off the list. And before the next pay-later click, add up every pay-later bill.",
          "sub": "Nhiều món tự rơi khỏi danh sách. Trước khi bấm trả sau tiếp, cộng mọi khoản trả sau vào bảng chi."
        }
      ],
      "ref": "p10,p13"
    },
    {
      "id": "s16",
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
          },
          {
            "at": "l4",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
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
            "text": "⑤ Tuần 2 · Lời rủ đi chơi",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:same week"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "left"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "wave",
                  "face": "happy"
                }
              ],
              "props": [
                "microphone"
              ]
            },
            "at": "l1:Lan",
            "caption": "Tuần 2 · ở trường",
            "icon": "microphone"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "Đi chơi với bạn mới: nên",
            "x": 2028,
            "y": 1260,
            "size": 48,
            "at": "l3:Going"
          },
          {
            "id": "g-no",
            "t": "text",
            "text": "Không cần lần nào cũng gật",
            "x": 2028,
            "y": 1340,
            "size": 48,
            "at": "l3:every time",
            "color": "coral",
            "hl": [
              {
                "text": "lần nào cũng gật",
                "at": "l3:every time"
              }
            ]
          },
          {
            "id": "g-line",
            "t": "text",
            "text": "“Hết phần đi chơi, tuần sau nhé”",
            "x": 2028,
            "y": 1440,
            "size": 46,
            "at": "l4:fun money",
            "color": "accent"
          },
          {
            "id": "g-fr",
            "t": "text",
            "text": "Bạn tốt sẽ hiểu",
            "x": 2868,
            "y": 1780,
            "size": 50,
            "at": "l5:understand",
            "hl": [
              {
                "text": "sẽ hiểu",
                "at": "l5:understand"
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
          "say": "Stop five, same week. And this is Lan, his classmate, queen of weekend plans.",
          "sub": "Chặng năm, cùng tuần. Còn đây là Lan, bạn cùng khoa, nữ hoàng kế hoạch cuối tuần.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Hotpot and karaoke tonight? Everyone's going!",
          "sub": "Tối nay lẩu với karaoke nhé? Cả lớp đi đấy!",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Going out with new friends is good. But you don't have to say yes every time.",
          "sub": "Đi ăn, đi chơi với bạn mới là nên. Nhưng không cần lần nào cũng nhận lời.",
          "keys": [
            "không cần lần nào cũng nhận lời"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "I've used up my fun money this week. Next weekend, okay?",
          "sub": "Tuần này mình hết phần tiền đi chơi rồi, cuối tuần sau mình đi nhé.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Good friends understand.",
          "sub": "Bạn tốt sẽ hiểu."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p12"
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
            "at": "l5",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Giữa tháng · Lan hỏi vay",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:mid-month"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "left"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "props": [
                "money-with-wings"
              ]
            },
            "at": "l1:fun money",
            "caption": "Giữa tháng · ở trường",
            "icon": "money-with-wings"
          },
          {
            "id": "h-rule",
            "t": "text",
            "text": "Cho vay: mất vẫn sống ổn",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l3:lend",
            "hl": [
              {
                "text": "vẫn sống ổn",
                "at": "l3:live"
              }
            ]
          },
          {
            "id": "h-no",
            "t": "text",
            "text": "Tiền phòng, dự phòng: không đụng",
            "x": 3996,
            "y": 1340,
            "size": 46,
            "at": "l3:rent",
            "color": "coral"
          },
          {
            "id": "h-say",
            "t": "text",
            "text": "“Mình chia sẵn từng khoản rồi”",
            "x": 3996,
            "y": 1430,
            "size": 46,
            "at": "l4:split",
            "color": "accent"
          },
          {
            "id": "h-txt",
            "t": "text",
            "text": "Cho vay: nhắn số tiền, ngày trả",
            "x": 4836,
            "y": 1780,
            "size": 42,
            "at": "l5:text"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: mid-month. Lan's fun money said yes to everything.",
          "sub": "Chặng sáu: giữa tháng. Tiền đi chơi của Lan thì lần nào cũng gật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Dũng, could you lend me some money? Your rent money, maybe?",
          "sub": "Dũng ơi, cho mình vay ít tiền? Tiền phòng của cậu chẳng hạn?",
          "face": "worried",
          "to": "dung"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Only lend what you could live without if it never comes back. Never your rent or emergency money.",
          "sub": "Chỉ cho vay số mà nếu không được trả, bạn vẫn sống ổn. Không lấy tiền phòng, tiền dự phòng.",
          "keys": [
            "vẫn sống ổn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "My money's split for this month, so I can't lend. Hope you understand.",
          "sub": "Tháng này mình chia sẵn tiền từng khoản rồi, không cho vay được, thông cảm cho mình nhé.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "If you do lend, text the amount and the payback date, so you both remember.",
          "sub": "Nếu cho vay, nhắn lại số tiền và ngày hẹn trả để cả hai cùng nhớ."
        }
      ],
      "ref": "p21,p22"
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
            "at": "l3",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Tối hôm đó · Lan hụt tiền",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:night"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "crescent-moon",
                "mobile-phone"
              ]
            },
            "at": "l1:room",
            "caption": "Tối giữa tháng · phòng Lan",
            "icon": "crescent-moon"
          },
          {
            "id": "i-calc",
            "t": "text",
            "text": "Còn tiền ÷ còn ngày = mỗi ngày",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l3:days left",
            "color": "accent",
            "hl": [
              {
                "text": "mỗi ngày",
                "at": "l3:per day"
              }
            ]
          },
          {
            "id": "i-calm",
            "t": "text",
            "text": "Có con số → bớt hoảng",
            "x": 5964,
            "y": 1345,
            "size": 48,
            "at": "l4:panic"
          },
          {
            "id": "i-cut",
            "t": "text",
            "text": "Cắt: đồ uống, đồ giao, mua sắm",
            "x": 5964,
            "y": 1430,
            "size": 44,
            "at": "l5:Cut",
            "color": "coral"
          },
          {
            "id": "i-keep",
            "t": "text",
            "text": "Giữ bữa no · tự nấu vài bữa",
            "x": 5964,
            "y": 1510,
            "size": 44,
            "at": "l5:meals",
            "hl": [
              {
                "text": "tự nấu",
                "at": "l5:cook"
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
          "say": "Stop seven: that night, in Lan's room.",
          "sub": "Chặng bảy: tối hôm đó, phòng của Lan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Mid-month and my wallet's empty. Call Mum? So embarrassing...",
          "sub": "Mới giữa tháng mà ví trống trơn. Gọi mẹ? Ngại lắm...",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First, calm maths: days left, money left, how much per day.",
          "sub": "Trước hết, bình tĩnh tính: còn mấy ngày, còn bao nhiêu tiền, mỗi ngày tiêu được bao nhiêu.",
          "keys": [
            "mỗi ngày tiêu được bao nhiêu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A real number stops the panic and shows where to cut.",
          "sub": "Con số cụ thể giúp bớt hoảng và biết cắt ở đâu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Cut drinks, deliveries, shopping first. Keep proper meals, and cook a few simple ones.",
          "sub": "Cắt trước đồ uống, đồ giao, mua sắm; giữ bữa ăn đủ no, tự nấu vài bữa đơn giản."
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s21",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Tối giữa tháng của Lan",
        "actors": [
          {
            "id": "lan",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Vay qua app chỉ cần ảnh căn cước",
          "why": "Lãi, phí rất nặng; có nơi đòi nợ bằng cách làm phiền người quen của bạn.",
          "rule": "Ngại một cuộc gọi, khổ cả một mùa"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Still short. Oh, this app lends with just an ID photo. Easy!",
          "sub": "Vẫn thiếu. Ơ, app này cho vay, chỉ cần chụp căn cước. Dễ ghê!",
          "face": "happy",
          "pose": "phone",
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
          "say": "Easy loans, heavy fees. One student owed far more; collectors texted her class.",
          "sub": "Vay dễ, phí nặng. Có bạn đến hạn nợ phình to, người đòi nợ nhắn cả lớp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Thử lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Mum, I overspent on going out; I'm short for food. Next month I'll keep that separate.",
          "sub": "Mẹ ơi, tháng này con tiêu lố phần đi chơi, còn thiếu một ít tiền ăn. Tháng sau con sẽ để riêng phần này ạ.",
          "phase": "redo",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Shy of one call, sorry all season.",
          "sub": "Ngại một cuộc gọi, khổ cả một mùa.",
          "phase": "redo",
          "keys": [
            "Ngại một cuộc gọi"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p17,p18,p19,p20"
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
            "at": "l4",
            "fit": [
              "j-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "⑧ Mùng 1 tháng sau · Nhìn lại",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:first"
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
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "sunrise",
                "spiral-notepad"
              ]
            },
            "at": "l1:Ding",
            "caption": "Sáng mùng 1 tháng sau · phòng trọ",
            "icon": "sunrise"
          },
          {
            "id": "j-cmp",
            "t": "text",
            "text": "Từng ngăn: tiêu thật ↔ dự tính",
            "x": 7932,
            "y": 1260,
            "size": 44,
            "at": "l1:part by part"
          },
          {
            "id": "j-adj",
            "t": "text",
            "text": "Lố / dư → chỉnh tháng sau",
            "x": 7932,
            "y": 1340,
            "size": 48,
            "at": "l2:Adjust",
            "hl": [
              {
                "text": "chỉnh tháng sau",
                "at": "l2:Adjust"
              }
            ]
          },
          {
            "id": "j-left",
            "t": "text",
            "text": "Dư: dự phòng + sách kỳ sau",
            "x": 7932,
            "y": 1420,
            "size": 46,
            "at": "l3:emergencies",
            "color": "accent"
          },
          {
            "id": "j-tell",
            "t": "text",
            "text": "Kể bố mẹ: để yên tâm",
            "x": 8772,
            "y": 1780,
            "size": 46,
            "at": "l5:peace",
            "hl": [
              {
                "text": "yên tâm",
                "at": "l5:peace"
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
          "say": "Last stop: the first of the month again. Ding! But first, Dũng looks back, part by part.",
          "sub": "Chặng cuối: lại sáng mùng một. Ting ting! Nhưng trước hết, Dũng nhìn lại từng ngăn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Over here, under there? Adjust next month's numbers to real life.",
          "sub": "Ngăn nào lố, ngăn nào dư? Chỉnh con số tháng sau cho sát thực tế.",
          "keys": [
            "sát thực tế"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Money left? Not one big reward dinner. Some to emergencies, some for next semester's books.",
          "sub": "Tiền dư đừng tiêu hết cho một bữa thưởng. Một phần vào dự phòng, một phần cho sách vở đầu học kỳ sau.",
          "keys": [
            "đừng tiêu hết cho một bữa thưởng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Dad, here's how I spent this month.",
          "sub": "Bố ơi, tháng này con tiêu thế này ạ.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not a report, just peace of mind. Next time he's short, his parents trust him more.",
          "sub": "Không phải báo cáo, mà để bố mẹ yên tâm. Lần sau con cần thêm, bố mẹ cũng dễ tin hơn."
        }
      ],
      "ref": "p23,p24,p25"
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
          }
        ],
        "items": [
          {
            "id": "j-par",
            "t": "text",
            "text": "Phụ huynh: gửi ngày cố định",
            "x": 7932,
            "y": 1540,
            "size": 46,
            "at": "l1:fixed day",
            "hl": [
              {
                "text": "ngày cố định",
                "at": "l1:fixed day"
              }
            ]
          },
          {
            "id": "j-ask",
            "t": "text",
            "text": "Con thiếu: hỏi “chỉnh thế nào?”",
            "x": 7932,
            "y": 1620,
            "size": 44,
            "at": "l2:adjust"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Tích tiểu” → tiền để dành",
            "x": 7932,
            "y": 1730,
            "size": 56,
            "at": "l3:savings",
            "color": "accent",
            "hl": [
              {
                "text": "tiền để dành",
                "at": "l3:savings"
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
          "say": "Parents: send money on a fixed day, and avoid random extra top-ups.",
          "sub": "Phụ huynh: gửi tiền vào một ngày cố định, hạn chế gửi thêm lẻ tẻ không lý do.",
          "keys": [
            "ngày cố định"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "When your child is short, ask how they'll adjust, not just scold or just send more.",
          "sub": "Khi con báo thiếu, hỏi con định chỉnh thế nào, thay vì chỉ trách hoặc chỉ gửi thêm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Little by little, a lot. Now Dũng's little things add up to savings.",
          "sub": "“Tích tiểu thành đại.” Giờ cái “tiểu” của Dũng thành... tiền để dành.",
          "keys": [
            "tiền để dành"
          ]
        }
      ],
      "ref": "p26"
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
            "at": "l1:split",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:Write",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:call",
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
            "x": 4716,
            "y": 640,
            "at": "l1:split"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8652,
            "y": 470,
            "at": "l2:Write"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6684,
            "y": 1340,
            "at": "l3:call"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Thông tin chung, không phải tư vấn tài chính; bị đe doạ khi đòi nợ, báo công an.",
            "x": 5964,
            "y": 1845,
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
          "say": "So: the day money arrives, split off the housing money first.",
          "sub": "Tóm lại: tiền về, tách tiền nhà ra trước.",
          "keys": [
            "tách tiền nhà"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write it, see it, fix it. And pay later is still paying.",
          "sub": "Ghi thì thấy, thấy thì sửa. Trả sau vẫn là trả."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Short of money? Call home early, not a loan app.",
          "sub": "Hụt tiền? Gọi về sớm, đừng gọi app vay.",
          "keys": [
            "Gọi về sớm"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "ref": "questions[27]",
      "data": {
        "q": "An online app offers a fast loan with just a photo of your ID, what should you do?",
        "options": [
          "Borrow a small amount first, to see if the app is honest before borrowing more",
          "Avoid it, because easy loans like this often come with very heavy fees",
          "Take it, since paying it back next month will be simple with your allowance"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "identification-card",
        "why": "Vay chỉ cần ảnh căn cước thường kèm lãi, phí rất nặng."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "An online app offers a fast loan with just a photo of your ID, what should you do?",
          "sub": "Một ứng dụng trên mạng cho vay nhanh chỉ cần ảnh căn cước, bạn nên làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Avoid it, because easy loans like this often come with very heavy fees.",
          "sub": "Tránh xa, vì vay dễ thế thường kèm phí rất nặng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "If you're short, talk to your family before borrowing from strangers.",
          "sub": "Thiếu tiền thì nói với gia đình trước, đừng vay người lạ."
        }
      ]
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Nghe tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Open a phone note, make four money parts, and write your first cost tonight.",
          "sub": "Mở ghi chú điện thoại, tạo bốn ngăn tiền, ghi khoản chi đầu tiên tối nay."
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
  "loop": {
    "open": "s01",
    "close": "s23"
  }
};
