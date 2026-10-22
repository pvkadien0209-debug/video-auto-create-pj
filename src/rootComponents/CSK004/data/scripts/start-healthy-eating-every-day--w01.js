// Kịch bản video W lần 3 (#110) — "Ăn lành mạnh mỗi ngày bắt đầu từ đâu?" · chuỗi "Ăn uống lành mạnh hằng ngày"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "start-healthy-eating-every-day--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "healthy-eaters",
    "slug": "start-healthy-eating-every-day",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Ăn lành mạnh mỗi ngày bắt đầu từ đâu?",
    "series": "Ăn uống lành mạnh hằng ngày"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit #144: Đét đứng trái + bảng trắng 10 ô đi theo MỘT TUẦN của Thảo (thứ Hai 8:00 kế hoạch “đổi hết” → trưa thứ Hai quầy cơm → trưa thứ Ba chén nước chấm → chiều thứ Tư Dũng bỏ cơm, “Khoan đã!” → sáng thứ Năm nước cam → tối thứ Năm họp muộn, kế hoạch sụp → chiều thứ Sáu đọc nhãn → trưa thứ Bảy mâm cơm bà Tư → thứ Hai tuần sau bữa sáng + mỗi tuần một thói quen). Nhân vật (chuỗi healthy-eaters, w145/_series): Thảo (chính, 🔀 p21, ⚖️ p3), Dũng (❓ p11), cô Hoa (quầy cơm p6), bà Tư (mâm cơm nhà p3). Số liệu: 9,4 g muối/ngày (STEPS 2015, Bộ Y tế), dưới 5 g (WHO), đường tự do (WHO 2015). Ngắt nhịp: BRK-12 “9,4 g”, BRK-07 rehook, BRK-04 Cách A/B, BRK-11 danh sách mang theo. Khép vòng: thứ Hai “cách mạng” → thứ Hai “chậm mà chắc”. Bản cũ (W lần 3, #110): w145/bak/start-healthy-eating-every-day--w01.js.",
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
            "text": "5 bước nhỏ",
            "x": 60,
            "y": 120,
            "size": 150,
            "at": "l1:five",
            "color": "accent",
            "hl": [
              {
                "text": "5 bước nhỏ",
                "at": "l1:small steps"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "để ăn lành mạnh mỗi ngày",
            "x": 70,
            "y": 330,
            "size": 56,
            "at": "l1:healthy"
          },
          {
            "id": "a-kieng",
            "t": "text",
            "text": "Ta tưởng: ăn kiêng, bỏ cơm?",
            "x": 70,
            "y": 450,
            "size": 54,
            "at": "l2:strict",
            "color": "muted"
          },
          {
            "id": "a-kx",
            "t": "strike",
            "over": "a-kieng",
            "at": "l2:goodbye+400"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five small steps. That is all it takes to eat healthy every day.",
          "sub": "Năm bước nhỏ. Chỉ vậy thôi là đủ để ăn lành mạnh mỗi ngày.",
          "keys": [
            "Năm bước nhỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet we think healthy eating means strict diets, and saying goodbye to rice forever.",
          "sub": "Vậy mà ta cứ tưởng ăn lành mạnh là ăn kiêng khắt khe, chia tay cơm trắng mãi mãi.",
          "keys": [
            "ăn kiêng khắt khe"
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "alarm-clock",
                "leafy-green"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · 8:00 · văn phòng",
            "icon": "office-building"
          },
          {
            "id": "a-plan",
            "t": "text",
            "text": "Bỏ cơm, cà phê, tự nấu hết",
            "x": 60,
            "y": 560,
            "size": 48,
            "at": "l3:white rice",
            "color": "coral",
            "hl": [
              {
                "text": "tự nấu hết",
                "at": "l3:cook every meal"
              }
            ]
          },
          {
            "id": "a-cm",
            "t": "text",
            "text": "Cách mạng trước bữa sáng",
            "x": 60,
            "y": 650,
            "size": 54,
            "at": "l4:revolution",
            "color": "accent",
            "hl": [
              {
                "text": "Cách mạng",
                "at": "l4:revolution"
              }
            ]
          },
          {
            "id": "a-hl",
            "t": "text",
            "text": "trụ được mấy ngày?",
            "x": 900,
            "y": 690,
            "size": 50,
            "at": "l4:how long",
            "hl": [
              {
                "text": "mấy ngày",
                "at": "l4:how long"
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
          "say": "Office worker, loyal fan of every food video online.",
          "sub": "Dân văn phòng, tín đồ trung thành của mọi video ăn uống trên mạng.",
          "keys": [
            "tín đồ trung thành"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Monday, eight a.m. From today: no white rice, no coffee, no eating out. I cook every meal!",
          "sub": "Tám giờ sáng thứ Hai. Từ hôm nay: bỏ cơm trắng, bỏ cà phê, bỏ ăn hàng. Tự nấu cả ba bữa!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A whole revolution before breakfast. Let's see how long it lasts.",
          "sub": "Cả một cuộc cách mạng trước bữa sáng. Để xem trụ được bao lâu.",
          "keys": [
            "cuộc cách mạng"
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
      "ref": "p21"
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
            "at": "l1:every day",
            "hl": [
              {
                "text": "từ đâu",
                "at": "l1:every day"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Hôm nay: tinh bột = thủ phạm",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:villain",
            "color": "coral",
            "hl": [
              {
                "text": "thủ phạm",
                "at": "l2:villain"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Tuần sau: hạt nhập = thần dược",
            "x": 2028,
            "y": 250,
            "size": 50,
            "at": "l2:miracle",
            "color": "coral",
            "hl": [
              {
                "text": "thần dược",
                "at": "l2:miracle"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "→ rối, bỏ cuộc",
            "x": 2068,
            "y": 330,
            "size": 50,
            "at": "l2:miracle+800",
            "color": "muted"
          },
          {
            "id": "b-who",
            "t": "text",
            "text": "WHO: ổn định nhiều năm",
            "x": 2908,
            "y": 170,
            "size": 52,
            "at": "l4:steady",
            "hl": [
              {
                "text": "ổn định",
                "at": "l4:steady"
              }
            ]
          },
          {
            "id": "b-w1",
            "t": "text",
            "text": "• ăn đa dạng, nhiều rau quả",
            "x": 2908,
            "y": 250,
            "size": 46,
            "at": "l4:variety"
          },
          {
            "id": "b-w2",
            "t": "text",
            "text": "• ít muối, ít đường thêm",
            "x": 2908,
            "y": 315,
            "size": 46,
            "at": "l5:salt"
          },
          {
            "id": "b-w3",
            "t": "text",
            "text": "• ưu tiên chất béo tốt",
            "x": 2908,
            "y": 380,
            "size": 46,
            "at": "l5:good fats"
          },
          {
            "id": "b-nen",
            "t": "text",
            "text": "Không giật gân, nhưng là nền",
            "x": 2908,
            "y": 460,
            "size": 46,
            "at": "l5:exciting",
            "color": "accent",
            "hl": [
              {
                "text": "là nền",
                "at": "l5:base"
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
          "say": "So where do you really start eating healthy every day?",
          "sub": "Vậy ăn lành mạnh mỗi ngày, rốt cuộc bắt đầu từ đâu?",
          "keys": [
            "bắt đầu từ đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Online, today rice is the villain, next week some imported seed is a miracle. People just give up.",
          "sub": "Trên mạng, hôm nay tinh bột là thủ phạm, tuần sau hạt nhập khẩu là thần dược. Nghe mãi, người ta bỏ cuộc.",
          "keys": [
            "thủ phạm",
            "thần dược"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Yet WHO advice stays steady: variety, lots of vegetables and fruit.",
          "sub": "Trong khi đó, khuyến nghị của WHO ổn định nhiều năm: ăn đa dạng, nhiều rau và trái cây.",
          "keys": [
            "ổn định nhiều năm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Little salt and sugar, good fats. Not exciting, but it is our base.",
          "sub": "Ít muối, ít đường thêm vào, ưu tiên chất béo tốt. Không giật gân, nhưng là nền của cả chuỗi.",
          "keys": [
            "Không giật gân"
          ]
        }
      ],
      "ref": "intro,p1,p2"
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
            "id": "b-no",
            "t": "text",
            "text": "Không phải: một món thần kỳ",
            "x": 2028,
            "y": 530,
            "size": 48,
            "at": "l1:magic",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l1:five"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: 5 bước nhỏ, lần lượt",
            "x": 2868,
            "y": 530,
            "size": 50,
            "at": "l1:five",
            "color": "accent",
            "hl": [
              {
                "text": "lần lượt",
                "at": "l1:after another"
              }
            ]
          },
          {
            "id": "b-s0",
            "t": "box",
            "x": 2028,
            "y": 620,
            "w": 300,
            "h": 100,
            "at": "l2:plate",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-s1",
            "t": "box",
            "x": 2358,
            "y": 620,
            "w": 300,
            "h": 100,
            "at": "l2:nutrients",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s2",
            "t": "box",
            "x": 2688,
            "y": 620,
            "w": 300,
            "h": 100,
            "at": "l2:water",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s3",
            "t": "box",
            "x": 3018,
            "y": 620,
            "w": 300,
            "h": 100,
            "at": "l3:labels",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s4",
            "t": "box",
            "x": 3348,
            "y": 620,
            "w": 300,
            "h": 100,
            "at": "l3:breakfast",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "1. Đĩa ăn",
            "x": 2048,
            "y": 635,
            "size": 46,
            "at": "l2:plate+200"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "2. 3 nhóm chất",
            "x": 2378,
            "y": 635,
            "size": 46,
            "at": "l2:nutrients+200"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "3. Nước",
            "x": 2708,
            "y": 635,
            "size": 46,
            "at": "l2:water+200"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "4. Nhãn",
            "x": 3038,
            "y": 635,
            "size": 46,
            "at": "l3:labels+200"
          },
          {
            "id": "b-st4",
            "t": "text",
            "text": "5. Bữa sáng",
            "x": 3368,
            "y": 635,
            "size": 46,
            "at": "l3:breakfast+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So not a magic food. Just five small steps, one after another.",
          "sub": "Vậy không phải một món thần kỳ, mà là năm bước nhỏ, lần lượt từng bước.",
          "keys": [
            "năm bước nhỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Look at your plate. Know the three main nutrients. Drink enough water.",
          "sub": "Nhìn đĩa ăn. Hiểu ba nhóm chất chính. Uống đủ nước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Read the labels. And rethink breakfast.",
          "sub": "Đọc nhãn. Rồi sắp lại bữa sáng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo for one week. Aprons on.",
          "sub": "Ta theo Thảo một tuần, thứ Hai tới thứ Hai. Đeo tạp dề vào nhé.",
          "keys": [
            "một tuần"
          ]
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Trưa thứ Hai · Đĩa ăn",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:left"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "cooked-rice",
                "leafy-green",
                "fish"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "thao"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "hoa"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-01"
                }
              ]
            },
            "at": "l1:home cooked",
            "caption": "12:00 · quầy cơm gần công ty",
            "icon": "cook"
          },
          {
            "id": "c-quen",
            "t": "text",
            "text": "Hộp cơm tự nấu… quên ở nhà",
            "x": 3996,
            "y": 160,
            "size": 46,
            "at": "l1:left",
            "color": "muted"
          },
          {
            "id": "c-half",
            "t": "box",
            "x": 3996,
            "y": 250,
            "w": 340,
            "h": 300,
            "at": "l5:half",
            "color": "accent",
            "stroke": 5
          },
          {
            "id": "c-ht",
            "t": "text",
            "text": "½ rau, trái cây",
            "x": 4016,
            "y": 370,
            "size": 44,
            "at": "l5:half+200"
          },
          {
            "id": "c-q1",
            "t": "box",
            "x": 4356,
            "y": 250,
            "w": 340,
            "h": 145,
            "at": "l5:starch",
            "stroke": 5
          },
          {
            "id": "c-q1t",
            "t": "text",
            "text": "¼ tinh bột",
            "x": 4386,
            "y": 290,
            "size": 44,
            "at": "l5:starch+200"
          },
          {
            "id": "c-q2",
            "t": "box",
            "x": 4356,
            "y": 405,
            "w": 340,
            "h": 145,
            "at": "l5:protein",
            "stroke": 5
          },
          {
            "id": "c-q2t",
            "t": "text",
            "text": "¼ chất đạm",
            "x": 4386,
            "y": 445,
            "size": 44,
            "at": "l5:protein+200"
          },
          {
            "id": "c-mat",
            "t": "text",
            "text": "Không cân đo: nhìn bằng mắt",
            "x": 3996,
            "y": 580,
            "size": 46,
            "at": "l7:any number",
            "hl": [
              {
                "text": "nhìn bằng mắt",
                "at": "l7:any number"
              }
            ]
          },
          {
            "id": "c-ca",
            "t": "text",
            "text": "“Cơm không rau như đau không thuốc”",
            "x": 3996,
            "y": 690,
            "size": 52,
            "at": "l8:without vegetables",
            "color": "accent",
            "hl": [
              {
                "text": "không rau",
                "at": "l8:without vegetables"
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
          "say": "Monday noon. The home cooked lunch? Left at home.",
          "sub": "Trưa thứ Hai. Hộp cơm tự nấu? Nằm quên ở nhà.",
          "keys": [
            "nằm quên ở nhà"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So, the rice stall. This is Cô Hoa, the owner.",
          "sub": "Vậy là ra quầy cơm. Đây là cô Hoa, chủ quầy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Vegetables first, please. Then the fish, a little rice, and a bowl of soup.",
          "sub": "Cô cho cháu rau trước, rồi cá, cơm vừa thôi, thêm bát canh.",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Here you are.",
          "sub": "Của cháu đây.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Step one, the plate model: half vegetables and fruit, a quarter starch, a quarter protein.",
          "sub": "Bước một, mô hình đĩa ăn: nửa đĩa rau và trái cây, một phần tư tinh bột, một phần tư chất đạm.",
          "keys": [
            "mô hình đĩa ăn"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "No scales. At a rice stall, ordering vegetables first beats any number.",
          "sub": "Không cần cân đo. Ở quầy cơm, gọi rau trước giúp hơn mọi con số.",
          "keys": [
            "gọi rau trước"
          ]
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "As grandma says: rice without vegetables is like sickness without medicine.",
          "sub": "Ông bà dặn: “Ăn cơm không rau như đau không thuốc.”",
          "keys": [
            "Ăn cơm không rau"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p5,p6"
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
            "at": "l5",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Trưa thứ Ba · Muối",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "salt",
                "steaming-bowl"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "E-MOVE-01"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-01"
                }
              ]
            },
            "at": "l2:this is",
            "caption": "12:00 · ăn trưa cùng Dũng",
            "icon": "salt"
          },
          {
            "id": "d-num",
            "t": "text",
            "text": "9,4 g muối / ngày",
            "x": 5964,
            "y": 160,
            "size": 84,
            "at": "l5:nine",
            "color": "coral",
            "hl": [
              {
                "text": "9,4 g",
                "at": "l5:point four"
              }
            ]
          },
          {
            "id": "d-who",
            "t": "text",
            "text": "≈ gấp đôi · WHO: dưới 5 g",
            "x": 5964,
            "y": 290,
            "size": 50,
            "at": "l6:double",
            "hl": [
              {
                "text": "dưới 5 g",
                "at": "l6:under five"
              }
            ]
          },
          {
            "id": "d-tron",
            "t": "text",
            "text": "Trốn: nước mắm, bột canh, hạt nêm,",
            "x": 5964,
            "y": 390,
            "size": 46,
            "at": "l7:fish sauce"
          },
          {
            "id": "d-tron2",
            "t": "text",
            "text": "chén chấm, mì gói, giò chả",
            "x": 5964,
            "y": 455,
            "size": 46,
            "at": "l7:dipping"
          },
          {
            "id": "d-do",
            "t": "text",
            "text": "→ chén nhỏ, nếm trước khi chấm",
            "x": 5964,
            "y": 560,
            "size": 50,
            "at": "l8:small bowl",
            "color": "accent",
            "hl": [
              {
                "text": "nếm trước",
                "at": "l8:taste"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: điều tra STEPS 2015 (Bộ Y tế), người trưởng thành; WHO khuyến nghị dưới 5 g muối/ngày",
            "x": 5964,
            "y": 715,
            "size": 28,
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
          "say": "Tuesday lunch. Thảo has company.",
          "sub": "Trưa thứ Ba. Thảo có bạn ăn cùng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Dũng, her desk neighbour, iced coffee fan and fish sauce champion.",
          "sub": "Đây là Dũng, bàn bên Thảo, fan cà phê sữa đá, vô địch rưới nước mắm.",
          "keys": [
            "vô địch rưới nước mắm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Everything tastes better with a big bowl of fish sauce!",
          "sub": "Món gì chấm ngập nước mắm cũng ngon hơn!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Hidden passenger: salt. Adults in Vietnam eat about nine point four grams a day.",
          "sub": "Hành khách giấu mặt: muối. Người lớn ở Việt Nam ăn trung bình khoảng 9,4 gam mỗi ngày.",
          "keys": [
            "9,4 gam"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Nearly double what WHO advises: under five grams.",
          "sub": "Gần gấp đôi mức WHO khuyên: dưới 5 gam.",
          "keys": [
            "dưới 5 gam"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "It hides in fish sauce, seasoning, dipping bowls, instant noodles.",
          "sub": "Nó trốn trong nước mắm, bột canh, hạt nêm, chén nước chấm, mì gói, giò chả."
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "So pour sauce into a small bowl, and taste before you dip.",
          "sub": "Vậy rót nước chấm ra chén nhỏ, nếm món trước rồi hãy chấm.",
          "keys": [
            "chén nhỏ"
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
      "ref": "p7"
    },
    {
      "id": "s06",
      "module": "BRK-12",
      "data": {
        "word": "9,4 g",
        "sub": "Muối hay trốn trong chén nước chấm và gói gia vị",
        "from": [
          520,
          330
        ],
        "others": [
          "dưới 5 g",
          "nước mắm",
          "chén nhỏ"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Nine point four grams.",
          "sub": "Chín phẩy bốn gam."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Salt hides in the dipping bowl and the seasoning packets.",
          "sub": "Muối trong bữa Việt hay trốn trong chén nước chấm và gói gia vị.",
          "keys": [
            "chén nước chấm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh",
          "offsetMs": 400
        }
      ],
      "ref": "p7,p8"
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
            "text": "③ Chiều thứ Tư · Ba nhóm chất",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:wednesday"
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
                  "face": "sad",
                  "pose": "shrug"
                }
              ],
              "props": [
                "sleeping-face",
                "pot-of-food"
              ]
            },
            "at": "l1:yawning",
            "caption": "15:00 · Dũng ngáp dài",
            "icon": "sleeping-face"
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "2 tuần không cơm",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l2:no rice",
            "color": "coral"
          },
          {
            "id": "e-met",
            "t": "text",
            "text": "→ chiều mệt · cuối tuần lẩu, bún",
            "x": 7932,
            "y": 240,
            "size": 44,
            "at": "l3:hotpot",
            "color": "muted",
            "hl": [
              {
                "text": "lẩu, bún",
                "at": "l3:hotpot"
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
          "say": "Wednesday afternoon. Dũng is yawning like a hippo.",
          "sub": "Chiều thứ Tư. Dũng ngáp như hà mã.",
          "keys": [
            "ngáp như hà mã"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Two weeks with no rice at all. But I'm so tired every afternoon.",
          "sub": "Hai tuần bỏ hẳn cơm. Mà chiều nào cũng mệt rũ.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Never mind. This weekend, a huge hotpot with lots of noodles!",
          "sub": "Kệ. Cuối tuần này làm một bữa lẩu thật no, thật nhiều bún!",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "15:00 · giờ giải lao",
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
          "label": "Bỏ hẳn cơm để giảm cân",
          "why": "Chiều mệt, khó tập trung, cuối tuần lại ăn bù; cân nặng tuỳ tổng lượng ăn vào và tiêu hao cả tuần.",
          "rule": "Bớt cho vừa thì bền, cấm hẳn thì dễ ăn bù"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "No rice, then a giant hotpot. Smart, right?",
          "sub": "Nhịn cơm, rồi một nồi lẩu khổng lồ. Khôn nhỉ?",
          "pose": "thumb",
          "stop": true,
          "react": {
            "thao": "worried"
          }
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
          "say": "Not the rice. The problem is banning a whole group. Weight depends on your total, all week.",
          "sub": "Vấn đề không ở bát cơm, mà ở cách bỏ hẳn một nhóm chất. Cân nặng tuỳ tổng lượng cả tuần.",
          "keys": [
            "bỏ hẳn một nhóm chất"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Less white rice, some brown rice, more vegetables.",
          "sub": "Bớt cơm trắng, trộn gạo lứt, thêm rau.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Cut back and it lasts. Ban it, and you binge.",
          "sub": "Bớt cho vừa thì bền, cấm hẳn thì dễ ăn bù.",
          "phase": "redo",
          "keys": [
            "Bớt cho vừa thì bền"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p11,p12"
    },
    {
      "id": "s09",
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
            "id": "e-c1",
            "t": "text",
            "text": "Tinh bột → nhiên liệu não, cơ",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "l2:starch",
            "hl": [
              {
                "text": "nhiên liệu",
                "at": "l2:main fuel"
              }
            ]
          },
          {
            "id": "e-c2",
            "t": "text",
            "text": "Đạm → xây và sửa cơ thể",
            "x": 7932,
            "y": 400,
            "size": 46,
            "at": "l3:protein"
          },
          {
            "id": "e-c3",
            "t": "text",
            "text": "Béo → hấp thu A, D, E, K",
            "x": 7932,
            "y": 470,
            "size": 46,
            "at": "l3:fat"
          },
          {
            "id": "e-ene",
            "t": "text",
            "text": "Không chất nào là kẻ thù",
            "x": 7932,
            "y": 570,
            "size": 58,
            "at": "l5:enemy",
            "color": "accent",
            "hl": [
              {
                "text": "kẻ thù",
                "at": "l5:enemy"
              }
            ]
          },
          {
            "id": "e-ok",
            "t": "text",
            "text": "Ưu tiên: gạo lứt, khoai, đậu, cá, thịt nạc, dầu thực vật",
            "x": 7932,
            "y": 690,
            "size": 34,
            "at": "l6:brown rice",
            "font": "base"
          },
          {
            "id": "e-bad",
            "t": "text",
            "text": "Hạn chế: đường thêm, thịt chế biến, dầu chiên lại",
            "x": 7932,
            "y": 735,
            "size": 30,
            "at": "l7:limit",
            "font": "base",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Step two, the plate's three parts. Starch is the main fuel for brain and muscles.",
          "sub": "Bước hai, ba phần trên đĩa. Tinh bột là nhiên liệu chính cho não và cơ.",
          "keys": [
            "nhiên liệu chính"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Protein builds and repairs the body. Fat helps absorb vitamins A, D, E and K.",
          "sub": "Đạm xây và sửa chữa cơ thể. Béo giúp hấp thu vitamin tan trong dầu A, D, E, K."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "All three are needed. None of them is the enemy.",
          "sub": "Cả ba đều cần. Không chất nào là kẻ thù.",
          "keys": [
            "Không chất nào là kẻ thù"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Watch source and amount: brown rice, beans, fish, vegetable oil.",
          "sub": "Để ý nguồn và lượng: gạo lứt, khoai, đậu, cá, thịt nạc, dầu thực vật.",
          "keys": [
            "nguồn và lượng"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Limit added sugar, processed meat, reused frying oil.",
          "sub": "Hạn chế đường thêm vào, thịt chế biến sẵn, dầu chiên đi chiên lại."
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
            "text": "④ Sáng thứ Năm · Đồ uống",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:empty"
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
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "tangerine",
                "beverage-box",
                "potable-water"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "E-MOVE-01"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-01"
                }
              ]
            },
            "at": "l1:huge",
            "caption": "10:00 · cốc nước cam to",
            "icon": "tangerine"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Không có 1 con số chung",
            "x": 60,
            "y": 1250,
            "size": 46,
            "at": "l4:single number"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Uống đều · nghe khát · nhìn màu",
            "x": 60,
            "y": 1330,
            "size": 46,
            "at": "l4:steadily",
            "hl": [
              {
                "text": "nhìn màu",
                "at": "l4:urine"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "vàng nhạt → ổn",
            "x": 100,
            "y": 1405,
            "size": 46,
            "at": "l4:pale",
            "color": "accent"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Nước lọc là chính",
            "x": 60,
            "y": 1490,
            "size": 56,
            "at": "l5:plain water",
            "color": "accent",
            "hl": [
              {
                "text": "Nước lọc",
                "at": "l5:plain water"
              }
            ]
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "Trà sữa, nước ngọt ≠ nước",
            "x": 60,
            "y": 1580,
            "size": 46,
            "at": "l5:milk tea",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday. Thảo's water bottle: empty. Beside it, a huge orange juice.",
          "sub": "Sáng thứ Năm. Chai nước của Thảo trống trơn. Bên cạnh: một cốc nước cam to.",
          "keys": [
            "cốc nước cam to"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Juice is fruit, so it's healthy. Five oranges in one glass!",
          "sub": "Nước ép là trái cây mà, lành chứ. Năm quả cam trong một cốc!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Step three: drinks. The step everybody forgets.",
          "sub": "Bước ba: đồ uống. Bước ai cũng quên.",
          "keys": [
            "đồ uống"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No single number fits all. Drink steadily, listen to thirst, check your urine: pale yellow is good.",
          "sub": "Không có một con số cho mọi người. Uống đều, nghe cơn khát, nhìn màu nước tiểu: vàng nhạt là tốt.",
          "keys": [
            "vàng nhạt"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Plain water first; unsweetened tea, soup and milk help. Milk tea and soft drinks can't replace it.",
          "sub": "Nước lọc là chính; trà không đường, canh, sữa cũng góp phần. Trà sữa, nước ngọt không thay được nước.",
          "keys": [
            "Nước lọc là chính"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s11",
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
            "at": "l3",
            "fit": [
              "f-nhai"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l3:end",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-tu",
            "t": "text",
            "text": "WHO: nước ép = đường tự do",
            "x": 60,
            "y": 1670,
            "size": 44,
            "at": "l1:free sugar",
            "color": "coral",
            "hl": [
              {
                "text": "đường tự do",
                "at": "l1:free sugar"
              }
            ]
          },
          {
            "id": "f-xo",
            "t": "text",
            "text": "Ép: bỏ chất xơ, đường vào nhanh",
            "x": 900,
            "y": 1780,
            "size": 40,
            "at": "l2:fibre"
          },
          {
            "id": "f-nhai",
            "t": "text",
            "text": "Trái cây để nhai, đừng uống",
            "x": 60,
            "y": 1770,
            "size": 48,
            "at": "l3:chewing",
            "color": "accent",
            "hl": [
              {
                "text": "để nhai",
                "at": "l3:chewing"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: WHO, hướng dẫn về đường 2015",
            "x": 60,
            "y": 1830,
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
          "say": "And that juice? WHO counts the sugar in juice and honey as free sugar, like soft drinks.",
          "sub": "Còn cốc nước ép? WHO xếp đường trong nước ép và mật ong vào nhóm đường tự do, cùng nước ngọt.",
          "keys": [
            "đường tự do"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Juicing leaves most of the fibre behind, and the sugar rushes in faster.",
          "sub": "Khi ép, phần lớn chất xơ bị bỏ lại, còn đường vào cơ thể nhanh hơn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "An orange is for chewing, not just for drinking.",
          "sub": "Trái cây nên để nhai, đừng chỉ để uống.",
          "keys": [
            "để nhai"
          ]
        }
      ],
      "ref": "p15,p16"
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
            "text": "⑤ Tối thứ Năm · Họp muộn",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:late meeting"
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
                  "id": "thao",
                  "side": "center",
                  "face": "sad",
                  "pose": "phone"
                }
              ],
              "props": [
                "french-fries",
                "takeout-box",
                "nine-oclock"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-07",
                  "on": "thao",
                  "move": "E-MOVE-09"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-01"
                }
              ]
            },
            "at": "l1:thursday",
            "caption": "19:30 · vừa tan họp",
            "icon": "takeout-box"
          },
          {
            "id": "g-box",
            "t": "illus",
            "name": "takeout-box",
            "x": 2028,
            "y": 1260,
            "size": 120,
            "at": "l2:fried"
          },
          {
            "id": "g-fr",
            "t": "text",
            "text": "Gọi đồ chiên",
            "x": 2168,
            "y": 1290,
            "size": 56,
            "at": "l2:fried",
            "color": "coral"
          },
          {
            "id": "g-fail",
            "t": "text",
            "text": "“Hỏng rồi, bỏ luôn!”",
            "x": 2028,
            "y": 1410,
            "size": 60,
            "at": "l2:failed",
            "color": "coral",
            "hl": [
              {
                "text": "bỏ luôn",
                "at": "l2:quit"
              }
            ]
          },
          {
            "id": "g-ab",
            "t": "text",
            "text": "Đổi hết một lúc → 4 ngày",
            "x": 2028,
            "y": 1530,
            "size": 50,
            "at": "l3:four days",
            "hl": [
              {
                "text": "4 ngày",
                "at": "l3:four days"
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
          "say": "Thursday night. A late meeting, and Thảo is starving.",
          "sub": "Tối thứ Năm. Họp muộn, Thảo đói meo.",
          "keys": [
            "đói meo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I ordered fried food. I've failed. That's it, I quit the whole plan!",
          "sub": "Mình gọi đồ chiên rồi. Hỏng rồi. Thôi, bỏ luôn cả kế hoạch!",
          "face": "sad",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Change everything at once, and the revolution lasts four days.",
          "sub": "Đổi hết một lúc, cuộc cách mạng trụ được bốn ngày.",
          "keys": [
            "bốn ngày"
          ]
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Một bữa đồ chiên là hỏng cả kế hoạch?",
        "illus": "french-fries"
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
          "say": "Does one fried dinner really ruin the whole plan?",
          "sub": "Một bữa đồ chiên mà hỏng cả kế hoạch thật sao?",
          "keys": [
            "hỏng cả kế hoạch"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ]
    },
    {
      "id": "s14",
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
            "id": "g-no",
            "t": "text",
            "text": "Một bữa lệch ≠ hỏng cả tuần",
            "x": 2028,
            "y": 1630,
            "size": 50,
            "at": "l1:one meal",
            "hl": [
              {
                "text": "≠ hỏng",
                "at": "l1:ruin"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Mỗi tuần một thói quen",
            "x": 2028,
            "y": 1750,
            "size": 60,
            "at": "l2:one habit",
            "color": "accent",
            "hl": [
              {
                "text": "một thói quen",
                "at": "l2:one habit"
              }
            ]
          },
          {
            "id": "g-x",
            "t": "text",
            "text": "đi chậm mà đi xa",
            "x": 2868,
            "y": 1780,
            "size": 54,
            "at": "l3:slowly",
            "hl": [
              {
                "text": "đi xa",
                "at": "l3:far"
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
          "say": "No. One meal does not ruin a week. The trap was changing everything at once.",
          "sub": "Không. Một bữa không làm hỏng cả tuần. Cái bẫy là đổi hết một lúc.",
          "keys": [
            "đổi hết một lúc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The fix is smaller: one habit each week.",
          "sub": "Cách sửa nhỏ hơn nhiều: mỗi tuần một thói quen.",
          "keys": [
            "mỗi tuần một thói quen"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Go slowly, and you go far.",
          "sub": "Đi chậm mà đi xa.",
          "keys": [
            "Đi chậm mà đi xa"
          ]
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
            "text": "⑥ Chiều thứ Sáu · Đọc nhãn",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "cookie",
                "label",
                "magnifying-glass-tilted-left"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-01"
                }
              ]
            },
            "at": "l1:convenience store",
            "caption": "17:30 · cửa hàng tiện lợi",
            "icon": "shopping-cart"
          },
          {
            "id": "h-front",
            "t": "text",
            "text": "Mặt trước: “ít béo”, “không đường”",
            "x": 3996,
            "y": 1250,
            "size": 44,
            "at": "l2:low fat",
            "color": "muted"
          },
          {
            "id": "h-back",
            "t": "text",
            "text": "→ lật mặt sau mới đáng tin",
            "x": 3996,
            "y": 1330,
            "size": 50,
            "at": "l3:back",
            "color": "accent",
            "hl": [
              {
                "text": "mặt sau",
                "at": "l3:back"
              }
            ]
          },
          {
            "id": "h-o0",
            "t": "text",
            "text": "1. Khẩu phần",
            "x": 3996,
            "y": 1430,
            "size": 46,
            "at": "l4:serving"
          },
          {
            "id": "h-o1",
            "t": "text",
            "text": "2. Năng lượng",
            "x": 3996,
            "y": 1500,
            "size": 46,
            "at": "l4:energy"
          },
          {
            "id": "h-o2",
            "t": "text",
            "text": "3. Natri",
            "x": 3996,
            "y": 1570,
            "size": 46,
            "at": "l4:sodium"
          },
          {
            "id": "h-o3",
            "t": "text",
            "text": "4. Đường thêm",
            "x": 4386,
            "y": 1430,
            "size": 46,
            "at": "l5:added sugar"
          },
          {
            "id": "h-o4",
            "t": "text",
            "text": "5. Chất béo, %DV",
            "x": 4386,
            "y": 1500,
            "size": 46,
            "at": "l5:fat"
          },
          {
            "id": "h-o5",
            "t": "text",
            "text": "6. Thành phần, dị ứng",
            "x": 4386,
            "y": 1570,
            "size": 46,
            "at": "l5:ingredients"
          },
          {
            "id": "h-mg",
            "t": "illus",
            "name": "magnifying-glass-tilted-left",
            "x": 3996,
            "y": 1690,
            "size": 100,
            "at": "l4:serving"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Khẩu phần trước tiên!",
            "x": 4116,
            "y": 1715,
            "size": 52,
            "at": "l4:first",
            "hl": [
              {
                "text": "trước tiên",
                "at": "l4:first"
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
          "say": "Friday evening, the convenience store.",
          "sub": "Chiều thứ Sáu, cửa hàng tiện lợi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Low fat! No sugar! These big words sound so healthy.",
          "sub": "Ít béo! Không đường! Mấy chữ to này nghe lành ghê.",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Step four: front words don't tell everything. Turn it over. Trust the back.",
          "sub": "Bước bốn: chữ to mặt trước không nói hết. Lật mặt sau, đó mới đáng tin.",
          "keys": [
            "Lật mặt sau"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Read in order: serving size first, then energy, then sodium.",
          "sub": "Đọc theo thứ tự: khẩu phần trước tiên, rồi năng lượng, natri.",
          "keys": [
            "khẩu phần trước tiên"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then added sugar, fat, daily value, and last, ingredients and allergies.",
          "sub": "Rồi đường thêm vào, chất béo, %DV, cuối cùng là thành phần và dòng dị ứng."
        }
      ],
      "ref": "p17,p18"
    },
    {
      "id": "s16",
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
            "at": "l3",
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
            "text": "⑦ Trưa thứ Bảy · Mâm cơm nhà",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:saturday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "tu",
                  "side": "left",
                  "pose": "hold",
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
                "pot-of-food",
                "leafy-green",
                "fish",
                "shopping-bags"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "thao"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "tu"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-09"
                }
              ]
            },
            "at": "l1:lunch",
            "caption": "11:30 · nhà Dũng",
            "icon": "pot-of-food"
          },
          {
            "id": "i-dat",
            "t": "text",
            "text": "Salad nhập, hạt chia, bột “siêu…”",
            "x": 5964,
            "y": 1250,
            "size": 44,
            "at": "l3:salad",
            "color": "muted"
          },
          {
            "id": "i-datx",
            "t": "strike",
            "over": "i-dat",
            "at": "l5:already"
          },
          {
            "id": "i-mam",
            "t": "text",
            "text": "Mâm Việt đã có thứ cần nhất",
            "x": 5964,
            "y": 1340,
            "size": 50,
            "at": "l5:already",
            "color": "accent",
            "hl": [
              {
                "text": "thứ cần nhất",
                "at": "l5:most"
              }
            ]
          },
          {
            "id": "i-chinh",
            "t": "text",
            "text": "Chỉ chỉnh lượng:",
            "x": 5964,
            "y": 1440,
            "size": 50,
            "at": "l6:amounts"
          },
          {
            "id": "i-c1",
            "t": "text",
            "text": "+ một đĩa rau",
            "x": 6004,
            "y": 1510,
            "size": 46,
            "at": "l6:greens"
          },
          {
            "id": "i-c2",
            "t": "text",
            "text": "− một chén nước chấm",
            "x": 6004,
            "y": 1575,
            "size": 46,
            "at": "l6:dipping"
          },
          {
            "id": "i-c3",
            "t": "text",
            "text": "trà sữa → trà không đường",
            "x": 6004,
            "y": 1640,
            "size": 46,
            "at": "l6:unsweetened"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Mâm nhà, không phải giỏ đắt tiền",
            "x": 5964,
            "y": 1780,
            "size": 50,
            "at": "l7:family table",
            "hl": [
              {
                "text": "Mâm nhà",
                "at": "l7:family table"
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
          "say": "Saturday lunch at Dũng's house. Thảo brings a shopping bag.",
          "sub": "Trưa thứ Bảy ở nhà Dũng. Thảo xách theo một túi đồ.",
          "keys": [
            "một túi đồ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Bà Tư, Dũng's grandma, and the chef of the house.",
          "sub": "Đây là bà Tư, bà nội Dũng, đầu bếp chính của nhà.",
          "keys": [
            "bà Tư"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "For healthy eating I bought imported salad, chia seeds, superfood powder. So expensive!",
          "sub": "Muốn ăn lành mạnh, cháu mua salad nhập, hạt chia, bột siêu thực phẩm. Đắt ơi là đắt!",
          "face": "thinking",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "tu",
          "say": "Sit down, dear. Boiled greens, leaf soup, braised fish, tofu with tomato.",
          "sub": "Ngồi xuống cháu. Rau muống luộc, canh rau ngót, cá kho, đậu sốt cà chua đây.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "This tray already has what you need most.",
          "sub": "Mâm này đã có sẵn thứ cần nhất: rau, canh, cá, đậu phụ, trái cây sau bữa.",
          "keys": [
            "thứ cần nhất"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Just adjust amounts: more greens, less dipping sauce, unsweetened tea.",
          "sub": "Thường chỉ cần chỉnh lượng: thêm đĩa rau, bớt chén nước chấm, đổi trà sữa thành trà không đường.",
          "keys": [
            "chỉnh lượng"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "No extra cost. It starts at the family table, not in a pricey basket.",
          "sub": "Không tốn thêm, có khi còn rẻ hơn. Bắt đầu từ mâm nhà, không phải giỏ hàng đắt tiền.",
          "keys": [
            "mâm nhà"
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
      "ref": "p3,p4"
    },
    {
      "id": "s17",
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
            "text": "Thứ Hai tuần sau · 7:30",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:next monday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
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
                "baguette-bread",
                "egg",
                "cucumber"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "E-MOVE-01"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-01"
                }
              ]
            },
            "at": "l1:next monday",
            "caption": "Thứ Hai tuần sau · văn phòng",
            "icon": "baguette-bread"
          },
          {
            "id": "j-bm",
            "t": "text",
            "text": "Bánh mì trứng + dưa leo",
            "x": 7932,
            "y": 1250,
            "size": 50,
            "at": "l2:egg",
            "hl": [
              {
                "text": "dưa leo",
                "at": "l2:cucumber"
              }
            ]
          },
          {
            "id": "j-toi",
            "t": "text",
            "text": "→ chuẩn bị từ tối qua",
            "x": 7972,
            "y": 1320,
            "size": 46,
            "at": "l2:last night",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Cả ngày ăn tốt mới quyết định",
            "x": 7932,
            "y": 1400,
            "size": 46,
            "at": "l3:whole day",
            "hl": [
              {
                "text": "Cả ngày",
                "at": "l3:whole day"
              }
            ]
          },
          {
            "id": "j-ne",
            "t": "text",
            "text": "Nên ăn sáng đều:",
            "x": 7932,
            "y": 1480,
            "size": 46,
            "at": "l4:kids"
          },
          {
            "id": "j-ne2",
            "t": "text",
            "text": "trẻ em, lao động nặng, dùng insulin",
            "x": 7952,
            "y": 1540,
            "size": 42,
            "at": "l5:insulin"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next Monday, seven thirty. Same Thảo, different plan.",
          "sub": "Thứ Hai tuần sau, bảy rưỡi. Vẫn Thảo ấy, nhưng kế hoạch khác hẳn.",
          "keys": [
            "kế hoạch khác hẳn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Step five: egg bread roll with cucumber, packed last night. Five minutes!",
          "sub": "Bước năm: bánh mì trứng thêm dưa leo. Chuẩn bị từ tối qua. Năm phút!",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Breakfast helps, but it's no magic meal. For healthy adults, the whole day decides.",
          "sub": "Ăn sáng có ích, nhưng không phải bữa thần kỳ. Với người lớn khoẻ mạnh, cả ngày ăn uống mới quyết định.",
          "keys": [
            "cả ngày ăn uống"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Kids, heavy workers, anyone dizzy when hungry: eat breakfast regularly.",
          "sub": "Trẻ em, lao động nặng, người dễ chóng mặt khi đói: nên ăn sáng đều đặn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "On insulin or other medicine? Ask your doctor before changing meal times.",
          "sub": "Dùng insulin hay thuốc khác? Muốn đổi giờ ăn, hỏi bác sĩ trước.",
          "keys": [
            "Hỏi bác sĩ trước"
          ]
        }
      ],
      "ref": "p19,p20"
    },
    {
      "id": "s18",
      "module": "BRK-04",
      "data": {
        "title": "Hai cách bắt đầu",
        "wrong": "Thứ Hai đổi hết một lúc",
        "right": "Mỗi tuần chỉ một thói quen nhỏ",
        "wrongIllus": "french-fries",
        "rightIllus": "seedling",
        "labels": [
          "Cách A",
          "Cách B"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Plan A: change it all Monday, quit Thursday.",
          "sub": "Cách A: thứ Hai đổi hết, thứ Năm bỏ cuộc."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Plan B: one small habit a week.",
          "sub": "Cách B: mỗi tuần một thói quen nhỏ.",
          "keys": [
            "một thói quen nhỏ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
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
            "fit": "J",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": [
              "j-v2"
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
            "id": "j-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "left"
                }
              ],
              "props": [
                "potable-water",
                "leafy-green"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-10",
                  "on": "thao"
                },
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "dung"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-09"
                }
              ]
            },
            "at": "l1",
            "caption": "8:00 · cùng giờ, khác cách",
            "icon": "seedling"
          },
          {
            "id": "j-w1",
            "t": "text",
            "text": "Tuần này: gọi rau trước",
            "x": 7932,
            "y": 1620,
            "size": 46,
            "at": "l1:vegetables first",
            "color": "accent"
          },
          {
            "id": "j-w2",
            "t": "text",
            "text": "Tuần sau: chai nước trên bàn",
            "x": 7932,
            "y": 1690,
            "size": 46,
            "at": "l2:water bottle"
          },
          {
            "id": "j-cc",
            "t": "text",
            "text": "“Chậm mà chắc”",
            "x": 8772,
            "y": 1780,
            "size": 56,
            "at": "l4:slow",
            "color": "accent",
            "hl": [
              {
                "text": "chắc",
                "at": "l4:steady"
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
          "say": "This week, just one habit: vegetables first at the rice stall.",
          "sub": "Tuần này một việc thôi: gọi rau trước ở quầy cơm.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "And next week, a water bottle on your desk?",
          "sub": "Tuần sau thêm chai nước trên bàn nhé?",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A few weeks later, it's routine, no effort needed.",
          "sub": "Vài tuần sau, những việc đó thành nếp mà không cần cố.",
          "keys": [
            "thành nếp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Last Monday, a revolution. This Monday, slow and steady.",
          "sub": "Thứ Hai trước: cách mạng. Thứ Hai này: “chậm mà chắc”.",
          "keys": [
            "chậm mà chắc"
          ]
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
            "fit": "J",
            "move": "cut"
          },
          {
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:plate",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:ban",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:one habit",
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
            "x": 3996,
            "y": 250,
            "at": "l1:plate"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8572,
            "y": 560,
            "at": "l2:ban"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1740,
            "at": "l3:one habit"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "g-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:one habit+400"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: look at your plate, half of it vegetables. Your eyes are the scale.",
          "sub": "Tóm lại: nhìn đĩa ăn, rau khoảng một nửa. Mắt chính là cái cân.",
          "keys": [
            "rau khoảng một nửa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Don't ban any group. Pick good sources and sensible amounts.",
          "sub": "Không cấm hẳn nhóm chất nào. Chọn nguồn tốt, lượng vừa.",
          "keys": [
            "Không cấm hẳn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And add one habit a week, not five at once.",
          "sub": "Và mỗi tuần thêm một thói quen, đừng năm cái một lúc.",
          "keys": [
            "mỗi tuần thêm một thói quen"
          ]
        }
      ],
      "beats": {
        "after": 400
      },
      "ref": "p23,outro"
    },
    {
      "id": "s21",
      "module": "BRK-11",
      "data": {
        "title": "Danh sách mang theo",
        "items": [
          "Rau đã nửa đĩa chưa?",
          "Lật mặt sau bao bì",
          "Bữa sáng làm từ tối"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three: breakfast the night before.",
          "sub": "Ba: bữa sáng làm từ tối."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two: flip the pack.",
          "sub": "Hai: lật mặt sau bao bì."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "One: half the plate, vegetables.",
          "sub": "Một: rau đã nửa đĩa chưa?",
          "keys": [
            "nửa đĩa"
          ]
        }
      ],
      "ref": "p23"
    },
    {
      "id": "s22",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "all",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": "J",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức phổ thông; có bệnh, mang thai: hỏi bác sĩ.",
            "x": 7932,
            "y": 1790,
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
          "say": "Every body is different. Diabetes, high blood pressure, kidney disease, pregnancy, timed medicines? Ask a doctor or dietitian.",
          "sub": "Mỗi cơ thể một khác. Có tiểu đường, tăng huyết áp, bệnh thận, mang thai, dùng thuốc cần ăn đúng giờ: hỏi bác sĩ hoặc chuyên gia dinh dưỡng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Same for weight loss or long tiredness without a reason.",
          "sub": "Cả khi sụt cân, mệt mỏi kéo dài không rõ lý do."
        }
      ],
      "beats": {
        "after": 500
      },
      "ref": "p24"
    },
    {
      "id": "s33",
      "module": "QUIZ-01",
      "ref": "questions[6]",
      "data": {
        "q": "What does the plate model suggest for a balanced meal?",
        "options": [
          "About half vegetables and fruit, a quarter starch, and a quarter protein foods",
          "About half meat, a quarter rice, and only a small spoon of vegetables",
          "Only fruit for lunch and only protein for dinner, never mixed together on one plate"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "fork-and-knife-with-plate",
        "why": "Nửa đĩa rau quả, một phần tư tinh bột, một phần tư đạm."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What does the plate model suggest for a balanced meal?",
          "sub": "Mô hình đĩa ăn gợi ý một bữa cân bằng thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "About half vegetables and fruit, a quarter starch, and a quarter protein foods.",
          "sub": "Nửa đĩa rau quả, một phần tư tinh bột, một phần tư đạm."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "No scale needed, just look.",
          "sub": "Không cần cân đo, chỉ cần nhìn bằng mắt."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s34",
      "module": "END-05",
      "data": {
        "text": "Tuần này: gọi rau trước",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "This week, order vegetables first. Then try the forty questions below.",
          "sub": "Tuần này: gọi rau trước. Rồi thử bốn mươi câu bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
