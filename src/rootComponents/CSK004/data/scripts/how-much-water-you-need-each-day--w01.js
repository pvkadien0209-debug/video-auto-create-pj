// Kịch bản video W lần 3 (#110) — "Uống bao nhiêu nước mỗi ngày là đủ?" · chuỗi "Ăn uống lành mạnh hằng ngày"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), hoạt hình + thẻ. Đủ ý để làm 40 câu, không giới hạn 3 phút.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-much-water-you-need-each-day--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "healthy-eaters",
    "slug": "how-much-water-you-need-each-day",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Uống bao nhiêu nước mỗi ngày là đủ?",
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
  "notes": "#143 dựng lại theo hạt nhân kịch bản (#136): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT NGÀY NẮNG NÓNG của Dũng (6:00 thức dậy → 6:15 → 9:00 → 12:00 → 15:00 “Khoan đã!” → 16:30 → 18:00 → 20:00 → sáng hôm sau 6:00). Nhân vật: Dũng (chính, gộp người uống toàn đồ ngọt p12, người đi công trình p17, người ngồi phòng lạnh p8), Thảo (thử thách bốn lít p21), bà Tư (người cao tuổi ít khát p16). Số liệu: 2 / 2,5 lít (EFSA), khoảng 20% từ thức ăn (Mayo Clinic), 8 cốc và 4 lít là ngộ nhận trong bài. Khép vòng: “Uống nước nhớ nguồn” → “nhớ… chai”. Bản cũ (W lần 3, #110): w143/bak/how-much-water-you-need-each-day--w01.js.",
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
            "text": "2 – 2,5 lít",
            "x": 60,
            "y": 130,
            "size": 150,
            "at": "l1:two",
            "color": "accent",
            "hl": [
              {
                "text": "2 – 2,5 lít",
                "at": "l1:half"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "nước mỗi ngày · nữ / nam",
            "x": 70,
            "y": 360,
            "size": 56,
            "at": "l1:women"
          },
          {
            "id": "a-8",
            "t": "text",
            "text": "Ta tưởng: 8 cốc, cấm cãi?",
            "x": 70,
            "y": 470,
            "size": 54,
            "at": "l2:eight",
            "color": "muted"
          },
          {
            "id": "a-8x",
            "t": "strike",
            "over": "a-8",
            "at": "l2:arguing+500"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: EFSA, giá trị tham chiếu về nước — người lớn, điều kiện bình thường, tính cả nước từ thức ăn",
            "x": 60,
            "y": 720,
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
          "say": "Two litres for women, two and a half for men. That is the daily water guide from EFSA, Europe's food safety agency.",
          "sub": "Hai lít với nữ, hai lít rưỡi với nam: mức nước mỗi ngày theo EFSA, cơ quan an toàn thực phẩm châu Âu.",
          "keys": [
            "Hai lít",
            "hai lít rưỡi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet we obey an iron rule: eight glasses a day, no arguing.",
          "sub": "Vậy mà ta vẫn tuân một luật thép: tám cốc mỗi ngày, cấm cãi.",
          "keys": [
            "tám cốc mỗi ngày"
          ]
        }
      ],
      "ref": "intro,p1"
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
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "home",
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
                "hot-beverage",
                "sunrise"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "6:00 sáng · trời đã nóng",
            "icon": "sunrise"
          },
          {
            "id": "a-6",
            "t": "illus",
            "name": "six-oclock",
            "x": 1560,
            "y": 660,
            "size": 80,
            "at": "l3:six"
          },
          {
            "id": "a-cf",
            "t": "text",
            "text": "Cà phê trước, nước… để sau",
            "x": 900,
            "y": 650,
            "size": 46,
            "at": "l3:water can wait",
            "color": "coral",
            "hl": [
              {
                "text": "để sau",
                "at": "l3:wait"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Uống nước nhớ nguồn”",
            "x": 60,
            "y": 580,
            "size": 56,
            "at": "l5:remember",
            "color": "accent",
            "hl": [
              {
                "text": "nhớ nguồn",
                "at": "l5:source"
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
          "say": "Meet Dũng.",
          "sub": "Đây là Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Office engineer, sometimes a site checker, always an iced coffee fan. Today is scorching.",
          "sub": "Kỹ sư văn phòng, thỉnh thoảng đi công trình, fan cứng cà phê sữa đá. Hôm nay trời nóng như rang.",
          "keys": [
            "fan cứng cà phê sữa đá"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Six a.m. and already hot. Iced milk coffee first, water can wait!",
          "sub": "Mới sáu giờ đã nóng. Cà phê sữa đá trước, nước lọc để sau!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: when you drink water, remember its source.",
          "sub": "Ông bà dặn: “Uống nước nhớ nguồn.”",
          "keys": [
            "Uống nước nhớ nguồn"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Dũng drinks coffee, and remembers... the coffee shop.",
          "sub": "Còn Dũng uống cà phê thì nhớ... quán.",
          "keys": [
            "nhớ... quán"
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
      "ref": "p12"
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
            "text": "Uống bao nhiêu là đủ?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:how much",
            "hl": [
              {
                "text": "bao nhiêu",
                "at": "l1:how much"
              }
            ]
          },
          {
            "id": "b-8",
            "t": "text",
            "text": "8 cốc = luật bắt buộc",
            "x": 2028,
            "y": 160,
            "size": 56,
            "at": "l2:eight glasses",
            "color": "muted"
          },
          {
            "id": "b-8x",
            "t": "strike",
            "over": "b-8",
            "at": "l2:science"
          },
          {
            "id": "b-rem",
            "t": "text",
            "text": "← chỉ là cách nhớ",
            "x": 2608,
            "y": 165,
            "size": 52,
            "at": "l3:sticky note",
            "color": "coral",
            "hl": [
              {
                "text": "cách nhớ",
                "at": "l3:sticky note"
              }
            ]
          },
          {
            "id": "b-dep",
            "t": "text",
            "text": "Tuỳ: ăn uống, thời tiết, vận động",
            "x": 2028,
            "y": 260,
            "size": 48,
            "at": "l3:depend"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: đếm đủ từng cốc",
            "x": 2028,
            "y": 360,
            "size": 52,
            "at": "l5:counting",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l5:teller"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: uống đều, đọc tín hiệu",
            "x": 2028,
            "y": 450,
            "size": 58,
            "at": "l5:steadily",
            "color": "accent",
            "hl": [
              {
                "text": "uống đều",
                "at": "l5:steadily"
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
          "say": "So how much water do you really need each day?",
          "sub": "Vậy rốt cuộc mỗi ngày cần bao nhiêu nước?",
          "keys": [
            "bao nhiêu nước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Eight glasses a day? Popular, but no strong science backs that exact number.",
          "sub": "Tám cốc mỗi ngày? Nổi tiếng, nhưng không có cơ sở khoa học chặt chẽ cho đúng con số ấy.",
          "keys": [
            "không có cơ sở khoa học chặt chẽ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Just a fridge sticky note. Real needs depend on food, weather and activity.",
          "sub": "Chỉ là cách nhớ, kiểu mẩu giấy dán tủ lạnh. Nhu cầu thật tuỳ thức ăn, thời tiết, vận động.",
          "keys": [
            "cách nhớ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So, not counting every glass like a bank teller. Just drinking steadily and reading your body.",
          "sub": "Vậy không phải đếm từng cốc như thủ quỹ, mà là uống đều và đọc tín hiệu cơ thể.",
          "keys": [
            "uống đều"
          ]
        }
      ],
      "ref": "p3"
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
            "id": "b-food",
            "t": "text",
            "text": "Gồm thức ăn: khoảng 20%",
            "x": 3048,
            "y": 215,
            "size": 46,
            "at": "l1:include",
            "hl": [
              {
                "text": "khoảng 20%",
                "at": "l1:twenty"
              }
            ]
          },
          {
            "id": "b-pot",
            "t": "illus",
            "name": "pot-of-food",
            "x": 2928,
            "y": 250,
            "size": 110,
            "at": "l2:soup"
          },
          {
            "id": "b-dua",
            "t": "text",
            "text": "“uống” bằng đũa",
            "x": 3068,
            "y": 290,
            "size": 52,
            "at": "l2:chopsticks",
            "color": "accent",
            "hl": [
              {
                "text": "bằng đũa",
                "at": "l2:chopsticks"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "6 chặng, 1 ngày nóng",
            "x": 2028,
            "y": 545,
            "size": 52,
            "at": "l3:six stops",
            "hl": [
              {
                "text": "1 ngày nóng",
                "at": "l3:scorching"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l3:six stops+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l3:six stops+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l3:six stops+1200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l3:six stops+1500",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l3:six stops+1800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l3:six stops+2100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "6:15",
            "x": 2068,
            "y": 628,
            "size": 48,
            "at": "l3:six stops+720"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "9:00",
            "x": 2338,
            "y": 628,
            "size": 48,
            "at": "l3:six stops+1020"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "12:00",
            "x": 2608,
            "y": 628,
            "size": 48,
            "at": "l3:six stops+1320"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "16:30",
            "x": 2878,
            "y": 628,
            "size": 48,
            "at": "l3:six stops+1620"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "18:00",
            "x": 3148,
            "y": 628,
            "size": 48,
            "at": "l3:six stops+1920"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "20:00",
            "x": 3418,
            "y": 628,
            "size": 48,
            "at": "l3:six stops+2220"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Mayo Clinic — thức ăn cung cấp khoảng 20% lượng nước",
            "x": 2868,
            "y": 400,
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
          "say": "And those two litres include water from food, usually about twenty percent.",
          "sub": "Mà hai lít ấy đã tính cả nước từ thức ăn, thường khoảng 20%.",
          "keys": [
            "khoảng 20%"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Vietnamese meals, full of soup, greens and fruit? We already drink with chopsticks.",
          "sub": "Bữa cơm Việt nhiều canh, rau, trái cây? Ta đã “uống” cả bằng đũa rồi.",
          "keys": [
            "bằng đũa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Now, one scorching day of Dũng, in six stops. Grab a hat.",
          "sub": "Giờ theo Dũng qua một ngày nắng nóng, sáu chặng. Đội mũ vào nhé.",
          "keys": [
            "một ngày nắng nóng"
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
            "text": "① 6:15 · Màu nước tiểu",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "face": "thinking",
                  "pose": "think"
                }
              ],
              "props": [
                "toilet"
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
            "at": "l1:bathroom",
            "caption": "6:15 · ở nhà",
            "icon": "toilet"
          },
          {
            "id": "c-pale",
            "t": "box",
            "x": 3996,
            "y": 160,
            "w": 130,
            "h": 80,
            "at": "l4:pale",
            "fill": "#f2d64b",
            "stroke": 4
          },
          {
            "id": "c-pt",
            "t": "text",
            "text": "vàng nhạt → ổn",
            "x": 4156,
            "y": 165,
            "size": 54,
            "at": "l4:pale+200",
            "hl": [
              {
                "text": "ổn",
                "at": "l4:good sign"
              }
            ]
          },
          {
            "id": "c-dark",
            "t": "box",
            "x": 3996,
            "y": 280,
            "w": 130,
            "h": 80,
            "at": "l4:dark",
            "fill": "#9a5a00",
            "hatch": true,
            "color": "#9a5a00",
            "stroke": 4
          },
          {
            "id": "c-dt",
            "t": "text",
            "text": "vàng sẫm → uống thêm",
            "x": 4156,
            "y": 285,
            "size": 54,
            "at": "l4:dark+200",
            "color": "coral",
            "hl": [
              {
                "text": "uống thêm",
                "at": "l4:drink more"
              }
            ]
          },
          {
            "id": "c-eye",
            "t": "illus",
            "name": "eyes",
            "x": 3996,
            "y": 390,
            "size": 90,
            "at": "l5:thirst"
          },
          {
            "id": "c-th",
            "t": "text",
            "text": "Trẻ khoẻ: nghe cơn khát",
            "x": 4106,
            "y": 405,
            "size": 48,
            "at": "l5:thirst+200",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: six fifteen. Dũng's first trip to the bathroom.",
          "sub": "Chặng một: sáu giờ mười lăm. Dũng ghé nhà vệ sinh lần đầu trong ngày.",
          "keys": [
            "sáu giờ mười lăm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Hmm. Pretty dark yellow this morning.",
          "sub": "Hừm. Sáng nay vàng sẫm ghê.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Don't laugh. It's the cheapest health test you own.",
          "sub": "Đừng cười. Đó là phép thử sức khoẻ rẻ nhất bạn có.",
          "keys": [
            "phép thử sức khoẻ rẻ nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Pale yellow is a good sign. Dark yellow, and fewer trips, means drink more.",
          "sub": "Vàng nhạt là dấu hiệu tốt. Vàng sẫm, ít đi tiểu: nên uống thêm.",
          "keys": [
            "Vàng nhạt",
            "uống thêm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Young and healthy? Your thirst works too.",
          "sub": "Người trẻ khoẻ thì cơn khát cũng đáng tin."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p5"
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
            "id": "c-loss",
            "t": "text",
            "text": "Mất nước: thở, mồ hôi, tiểu",
            "x": 3996,
            "y": 520,
            "size": 50,
            "at": "l2:sweat",
            "hl": [
              {
                "text": "thở",
                "at": "l1:breathing"
              }
            ]
          },
          {
            "id": "c-job",
            "t": "text",
            "text": "Nước = công ty giao hàng",
            "x": 3996,
            "y": 610,
            "size": 54,
            "at": "l3:delivery",
            "color": "accent",
            "hl": [
              {
                "text": "công ty giao hàng",
                "at": "l3:delivery company"
              }
            ]
          },
          {
            "id": "c-job2",
            "t": "text",
            "text": "làm mát, chở chất, dọn cặn",
            "x": 3996,
            "y": 700,
            "size": 40,
            "at": "l3:cools",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Why so dark? All night he lost water just breathing, like a kettle on low heat.",
          "sub": "Sao sẫm thế? Cả đêm anh mất nước chỉ qua hơi thở, như ấm nước để lửa liu riu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Every day we lose water through sweat, breath, urine and stool. So we refill steadily.",
          "sub": "Mỗi ngày ta mất nước qua mồ hôi, hơi thở, nước tiểu và phân, nên cần bù đều đặn.",
          "keys": [
            "bù đều đặn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Water cools you, carries nutrients, clears waste, oils joints, helps digestion. A delivery company in a glass.",
          "sub": "Nước làm mát, chở dinh dưỡng, dọn chất cặn, bôi trơn khớp, giúp tiêu hoá. Cả công ty giao hàng trong một cốc.",
          "keys": [
            "công ty giao hàng"
          ]
        }
      ],
      "ref": "p4"
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
            "text": "② 9:00 · Phòng máy lạnh",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "phone"
                }
              ],
              "props": [
                "potable-water",
                "alarm-clock"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "medium",
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
            "at": "l1:chilly office",
            "caption": "9:00 · văn phòng",
            "icon": "office-building"
          },
          {
            "id": "d-thao",
            "t": "text",
            "text": "Thảo: 4 lít “cho đẹp da”",
            "x": 5964,
            "y": 160,
            "size": 52,
            "at": "l3:four litres",
            "color": "coral",
            "hl": [
              {
                "text": "4 lít",
                "at": "l3:four litres"
              }
            ]
          },
          {
            "id": "d-dung",
            "t": "text",
            "text": "Dũng: “vài ngụm là đủ”",
            "x": 5964,
            "y": 250,
            "size": 52,
            "at": "l4:few sips",
            "color": "muted"
          },
          {
            "id": "d-cam",
            "t": "text",
            "text": "lạc đà ↔ xương rồng",
            "x": 6804,
            "y": 680,
            "size": 50,
            "at": "l5:camel",
            "hl": [
              {
                "text": "lạc đà",
                "at": "l5:camel"
              },
              {
                "text": "xương rồng",
                "at": "l5:cactus"
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
          "say": "Second stop: nine a.m., a chilly office.",
          "sub": "Chặng hai: chín giờ sáng, văn phòng máy lạnh mát rượi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Thảo, Dũng's desk neighbour, with a giant bottle.",
          "sub": "Còn đây là Thảo, bàn bên cạnh Dũng, kè kè chai nước khổng lồ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "A video says four litres a day for perfect skin. Alarm every thirty minutes!",
          "sub": "Video bảo mỗi ngày bốn lít là da đẹp. Báo thức mỗi nửa tiếng!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Me? A few sips is plenty. I don't sweat in here.",
          "sub": "Tôi á? Vài ngụm là đủ. Ngồi đây có đổ mồ hôi đâu.",
          "pose": "shrug"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A camel and a cactus at neighbouring desks. Camel first.",
          "sub": "Một lạc đà, một xương rồng, ngồi bàn sát nhau. Xét lạc đà trước.",
          "keys": [
            "lạc đà",
            "xương rồng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p21"
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
            "id": "d-out",
            "t": "text",
            "text": "Đủ rồi → phần thêm thải ra",
            "x": 5964,
            "y": 360,
            "size": 50,
            "at": "l1:extra",
            "hl": [
              {
                "text": "thải ra",
                "at": "l1:leaves"
              }
            ]
          },
          {
            "id": "d-wc",
            "t": "text",
            "text": "WC suốt, họp lơ mơ",
            "x": 5964,
            "y": 440,
            "size": 46,
            "at": "l1:toilet",
            "color": "muted"
          },
          {
            "id": "d-na",
            "t": "text",
            "text": "Uống dồn → hạ natri máu (hiếm)",
            "x": 5964,
            "y": 530,
            "size": 50,
            "at": "l3:huge",
            "color": "coral",
            "hl": [
              {
                "text": "hạ natri máu",
                "at": "l3:hyponatremia"
              }
            ]
          },
          {
            "id": "d-thx",
            "t": "strike",
            "over": "d-thao",
            "at": "l5:enough is enough"
          },
          {
            "id": "d-ok",
            "t": "text",
            "text": "Uống đều · đủ là đủ",
            "x": 5964,
            "y": 640,
            "size": 64,
            "at": "l5:steadily",
            "color": "accent",
            "hl": [
              {
                "text": "đủ là đủ",
                "at": "l5:enough is enough"
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
          "say": "Once you have enough, the extra mostly leaves. Hello toilet, goodbye focus, hello midnight trips.",
          "sub": "Đủ rồi thì phần thêm thải ra. Chào nhà vệ sinh, tạm biệt tập trung, đêm dậy nhiều lần.",
          "keys": [
            "thải ra"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Rarely, a huge amount fast can dilute blood sodium: hyponatremia. Seen in long distance runners and online challenges.",
          "sub": "Hiếm gặp, nhưng uống dồn rất nhiều có thể làm loãng natri máu: hạ natri máu. Gặp ở người chạy đường dài, thử thách trên mạng.",
          "keys": [
            "hạ natri máu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So drink steadily through the day, not all at once. Enough is enough.",
          "sub": "Vậy hãy uống đều trong ngày, đừng dồn một lúc. Đủ là đủ.",
          "keys": [
            "Đủ là đủ"
          ]
        }
      ],
      "ref": "p19,p20,p21,p22"
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
            "at": "a1",
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
            "text": "③ 12:00 · Công trình giữa trưa",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:noon"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center"
                }
              ],
              "left": {
                "label": "Một cốc cà phê",
                "ok": false
              },
              "right": {
                "label": "Chai nước theo người",
                "ok": true
              }
            },
            "at": "l2:two",
            "caption": "Cùng một buổi khảo sát",
            "icon": "construction"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "A: cà phê, khát mới uống",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "a1:coffee",
            "color": "coral"
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "→ chóng mặt, xin nước",
            "x": 7972,
            "y": 250,
            "size": 46,
            "at": "a2:dizzy",
            "color": "muted"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "B: chai nước, ngụm sau mỗi khu",
            "x": 7932,
            "y": 340,
            "size": 48,
            "at": "b1:bottle",
            "color": "accent"
          },
          {
            "id": "e-b2",
            "t": "text",
            "text": "→ vẫn tỉnh táo",
            "x": 7972,
            "y": 420,
            "size": 46,
            "at": "b2:clear",
            "hl": [
              {
                "text": "tỉnh táo",
                "at": "b2:clear"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Nóng → chai nước theo người",
            "x": 8752,
            "y": 690,
            "size": 52,
            "at": "l4:hotter",
            "hl": [
              {
                "text": "theo người",
                "at": "l4:closer"
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
          "say": "Third stop: high noon, a site check under a sun grilling like street skewers.",
          "sub": "Chặng ba: giữa trưa, đi khảo sát công trình dưới cái nắng nướng như xiên thịt vỉa hè.",
          "keys": [
            "giữa trưa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two versions of Dũng.",
          "sub": "Hai phiên bản của Dũng."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "A site check at noon. Just a coffee. I'll drink when I'm thirsty.",
          "sub": "Khảo sát giữa trưa. Mang cốc cà phê thôi, khát rồi tính.",
          "phase": "a",
          "face": "happy"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "dung",
          "say": "So hot... I feel dizzy. Can I have some water?",
          "sub": "Nóng quá… chóng mặt rồi. Cho tôi xin ngụm nước.",
          "phase": "a",
          "face": "sad"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "A water bottle in my bag. A few sips after each area, even before I'm thirsty.",
          "sub": "Chai nước trong túi, xong mỗi khu uống vài ngụm, kể cả chưa khát.",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "dung",
          "say": "All done, and my head is still clear!",
          "sub": "Xong buổi mà đầu óc vẫn tỉnh táo!",
          "phase": "b",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Small sips replace sweat bit by bit. The hotter the day, the closer your bottle.",
          "sub": "Từng ngụm bù dần mồ hôi. Trời càng nóng, chai nước càng phải theo người.",
          "keys": [
            "chai nước càng phải theo người"
          ]
        }
      ],
      "ref": "p17,p18"
    },
    {
      "id": "s11",
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
            "id": "e-more",
            "t": "text",
            "text": "Uống thêm khi:",
            "x": 7932,
            "y": 500,
            "size": 52,
            "at": "l1:drink more",
            "hl": [
              {
                "text": "Uống thêm",
                "at": "l1:drink more"
              }
            ]
          },
          {
            "id": "e-m1",
            "t": "text",
            "text": "• nóng ẩm, làm ngoài trời",
            "x": 7932,
            "y": 570,
            "size": 46,
            "at": "l1:hot"
          },
          {
            "id": "e-m2",
            "t": "text",
            "text": "• vận động, ra mồ hôi",
            "x": 7932,
            "y": 635,
            "size": 46,
            "at": "l2:exercise"
          },
          {
            "id": "e-m3",
            "t": "text",
            "text": "• sốt, tiêu chảy, nôn",
            "x": 7932,
            "y": 688,
            "size": 46,
            "at": "l3:fever"
          },
          {
            "id": "e-m4",
            "t": "text",
            "text": "Mang thai, cho con bú: hỏi bác sĩ sản khoa",
            "x": 7932,
            "y": 748,
            "size": 26,
            "at": "l3:pregnant",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "When to drink more? One: hot, humid weather, especially outdoor work.",
          "sub": "Khi nào cần uống thêm? Một: trời nóng ẩm, nhất là làm ngoài trời.",
          "keys": [
            "uống thêm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: exercise and heavy sweat.",
          "sub": "Hai: vận động, ra nhiều mồ hôi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: fever, diarrhoea or vomiting. Pregnant or breastfeeding? Ask your doctor.",
          "sub": "Ba: sốt, tiêu chảy hoặc nôn. Mang thai, cho con bú thì hỏi bác sĩ sản khoa."
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "15:00 · phòng máy lạnh",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Không đổ mồ hôi thì khỏi uống",
          "why": "Vẫn mất nước qua hơi thở, nước tiểu; phòng lạnh lại khô. Cuối ngày dễ đau đầu, khó tập trung.",
          "rule": "Phòng lạnh không khát, nhưng người vẫn cần nước"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Back in the cool office. No sweat in here, so no need to drink.",
          "sub": "Về phòng lạnh rồi. Có đổ mồ hôi đâu, cần gì uống.",
          "pose": "cross",
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
          "say": "You still lose water breathing and peeing, and that air is dry as rice paper.",
          "sub": "Vẫn mất nước qua hơi thở, nước tiểu, mà không khí máy lạnh khô như bánh tráng.",
          "keys": [
            "khô như bánh tráng"
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
          "say": "Bottle on my desk. Sips after each task.",
          "sub": "Chai nước trên bàn. Xong mỗi việc, vài ngụm.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. A cool room hides thirst, but the body still needs water.",
          "sub": "Đúng. Phòng lạnh không khát, nhưng người vẫn cần nước.",
          "phase": "redo",
          "keys": [
            "người vẫn cần nước"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p8,p9"
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
            "text": "④ 16:30 · Đèn báo thiếu nước",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:four thirty",
            "hl": [
              {
                "text": "Đèn báo",
                "at": "l1:warning lights"
              }
            ]
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
                  "id": "dung",
                  "side": "center",
                  "face": "sad"
                }
              ],
              "props": [
                "face-with-head-bandage"
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
            "at": "l1:rewind",
            "caption": "16:30 · nếu không tua lại",
            "icon": "face-with-head-bandage"
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1260,
            "w": 50,
            "h": 50,
            "at": "l3:thirst",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1242,
            "size": 62,
            "at": "l3:thirst+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Khát, khô miệng, môi khô",
            "x": 135,
            "y": 1252,
            "size": 46,
            "at": "l3:thirst+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1345,
            "w": 50,
            "h": 50,
            "at": "l3:dark",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1327,
            "size": 62,
            "at": "l3:dark+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Nước tiểu sẫm, ít đi tiểu",
            "x": 135,
            "y": 1337,
            "size": 46,
            "at": "l3:dark+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1430,
            "w": 50,
            "h": 50,
            "at": "l3:tired",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1412,
            "size": 62,
            "at": "l3:tired+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Mệt, đau đầu, khó tập trung",
            "x": 135,
            "y": 1422,
            "size": 46,
            "at": "l3:tired+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1515,
            "w": 50,
            "h": 50,
            "at": "l3:dizzy",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1497,
            "size": 62,
            "at": "l3:dizzy+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Đứng lên chóng mặt",
            "x": 135,
            "y": 1507,
            "size": 46,
            "at": "l3:dizzy+200"
          },
          {
            "id": "f-do",
            "t": "text",
            "text": "→ uống nước, nghỉ một chút",
            "x": 60,
            "y": 1610,
            "size": 50,
            "at": "l5:drink some water",
            "color": "accent",
            "hl": [
              {
                "text": "nghỉ một chút",
                "at": "l5:rest"
              }
            ]
          },
          {
            "id": "f-pl",
            "t": "text",
            "text": "Không phải ốm: cây thiếu tưới",
            "x": 60,
            "y": 1690,
            "size": 46,
            "at": "l5:sick",
            "hl": [
              {
                "text": "cây thiếu tưới",
                "at": "l5:thirsty plant"
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
          "say": "Fourth stop: four thirty. Without that rewind, Dũng's warning lights would flash.",
          "sub": "Chặng bốn: bốn rưỡi chiều. Nếu không tua lại, đèn báo của Dũng sẽ nhấp nháy.",
          "keys": [
            "đèn báo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My head hurts, my mouth is dry, and I can't focus. Am I getting sick?",
          "sub": "Đầu đau, miệng khô, chẳng tập trung nổi. Mình sắp ốm à?",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thirst and dry lips. Dark urine, fewer trips. Tired, headache, no focus. Dizzy when standing up.",
          "sub": "Khát, khô môi. Nước tiểu sẫm, ít đi tiểu. Mệt, đau đầu, khó tập trung. Đứng lên chóng mặt."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then drink some water and rest a little. Not sick, just a thirsty plant.",
          "sub": "Khi đó uống nước, nghỉ một chút. Chẳng ốm đâu, chỉ là cái cây thiếu tưới.",
          "keys": [
            "nghỉ một chút",
            "cái cây thiếu tưới"
          ]
        }
      ],
      "ref": "p6,p8"
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
          },
          {
            "at": "l1",
            "fit": [
              "f-sos",
              "f-go"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-sos",
            "t": "text",
            "text": "Lú lẫn · tim nhanh · ngất",
            "x": 60,
            "y": 1780,
            "size": 48,
            "at": "l1:confusion",
            "color": "coral"
          },
          {
            "id": "f-go",
            "t": "text",
            "text": "Lâu không tiểu → khám ngay",
            "x": 900,
            "y": 1780,
            "size": 48,
            "at": "l1:no urine",
            "color": "coral",
            "hl": [
              {
                "text": "khám ngay",
                "at": "l2:right away"
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
          "say": "But some signs mean go now: confusion, a racing heart, fainting, no urine for hours.",
          "sub": "Nhưng có dấu hiệu là phải đi ngay: lú lẫn, tim đập nhanh, ngất, nhiều giờ không đi tiểu.",
          "keys": [
            "phải đi ngay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then see a doctor right away, especially for children and older people.",
          "sub": "Khi đó đi khám ngay, nhất là với trẻ em và người cao tuổi.",
          "keys": [
            "đi khám ngay"
          ]
        }
      ],
      "ref": "p7"
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
          },
          {
            "at": "l6",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 18:00 · Đếm đồ uống",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:six"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "thumb"
                }
              ],
              "props": [
                "hot-beverage",
                "bubble-tea",
                "beer-mug",
                "potable-water"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": "l1:counts",
            "caption": "18:00 · quán nước sau giờ làm",
            "icon": "beer-mug"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Sáng: cà phê sữa đá",
            "x": 2028,
            "y": 1250,
            "size": 48,
            "at": "l2:iced"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Trưa: trà sữa",
            "x": 2028,
            "y": 1315,
            "size": 48,
            "at": "l2:milk tea"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Chiều: nước tăng lực",
            "x": 2028,
            "y": 1380,
            "size": 48,
            "at": "l2:energy"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Tối: vài lon bia",
            "x": 2028,
            "y": 1445,
            "size": 48,
            "at": "l2:beers"
          },
          {
            "id": "g-4x",
            "t": "strike",
            "over": "g-4",
            "at": "l4:hydrate"
          },
          {
            "id": "g-w",
            "t": "text",
            "text": "Nước lọc: gần như không",
            "x": 2028,
            "y": 1530,
            "size": 54,
            "at": "l4:plain water",
            "color": "coral",
            "hl": [
              {
                "text": "gần như không",
                "at": "l4:almost no"
              }
            ]
          },
          {
            "id": "g-sw",
            "t": "text",
            "text": "+1 cốc nước lọc mỗi đồ ngọt",
            "x": 2868,
            "y": 1780,
            "size": 44,
            "at": "l6:every sweet drink",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: six p.m. Dũng proudly counts his drinks.",
          "sub": "Chặng năm: sáu giờ chiều. Dũng tự hào đếm lại đồ uống hôm nay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Iced coffee, milk tea at lunch, an energy drink, and now a few beers. I drink so much!",
          "sub": "Cà phê sữa đá, trưa trà sữa, chiều nước tăng lực, giờ vài lon bia. Uống nhiều ghê!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It looks like a lot. But is it enough water?",
          "sub": "Trông thì nhiều. Nhưng đã đủ nước chưa?",
          "keys": [
            "đủ nước chưa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not really. Almost no plain water, lots of sugar. And beer doesn't hydrate, it just sends you to pee.",
          "sub": "Chưa hẳn. Gần như không có nước lọc, lại nhiều đường. Bia không bù nước, chỉ khiến đi tiểu nhiều hơn.",
          "keys": [
            "Gần như không có nước lọc"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Fine. Every sweet drink comes with a glass of water. And fewer energy drinks.",
          "sub": "Được rồi. Mỗi đồ uống ngọt kèm một cốc nước lọc. Bớt dần nước tăng lực.",
          "face": "thinking"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p11,p12"
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
          }
        ],
        "items": [
          {
            "id": "g-ok",
            "t": "text",
            "text": "Có tính: trà không đường, canh, sữa",
            "x": 2028,
            "y": 1620,
            "size": 44,
            "at": "l1:count",
            "hl": [
              {
                "text": "Có tính",
                "at": "l1:all count"
              }
            ]
          },
          {
            "id": "g-no",
            "t": "text",
            "text": "Không thay nước lọc: đồ ngọt",
            "x": 2028,
            "y": 1690,
            "size": 44,
            "at": "l2:replace",
            "color": "muted"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Uống nhiều ≠ uống đúng",
            "x": 2028,
            "y": 1770,
            "size": 58,
            "at": "l3:a lot",
            "color": "accent",
            "hl": [
              {
                "text": "≠ uống đúng",
                "at": "l3:drinking right"
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
          "say": "Good news: unsweetened tea, soup and milk all count. Moderate coffee and tea too.",
          "sub": "Tin vui: trà không đường, nước canh, sữa đều được tính. Cà phê, trà vừa phải cũng tính.",
          "keys": [
            "đều được tính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But sugary soft drinks, milk tea and energy drinks can't replace plain water.",
          "sub": "Nhưng nước ngọt, trà sữa, nước tăng lực nhiều đường, không thay được nước lọc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Drinking a lot is not always drinking right. Plain water stays the star.",
          "sub": "Rút ra: uống nhiều chưa chắc đã là uống đúng. Nước lọc vẫn là vai chính.",
          "keys": [
            "uống đúng"
          ]
        }
      ],
      "ref": "p10,p11,p13"
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
            "text": "⑥ 20:00 · Bà Tư không khát",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:eight"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "tu",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "potable-water"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "tu",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": "l1:home",
            "caption": "20:00 · ở nhà",
            "icon": "old-woman"
          },
          {
            "id": "h-old",
            "t": "text",
            "text": "Người già: ít thấy khát",
            "x": 3996,
            "y": 1260,
            "size": 52,
            "at": "l3:older people",
            "hl": [
              {
                "text": "ít thấy khát",
                "at": "l3:less thirsty"
              }
            ]
          },
          {
            "id": "h-cup",
            "t": "text",
            "text": "→ cốc nước cạnh ghế, nhắc đều",
            "x": 3996,
            "y": 1350,
            "size": 48,
            "at": "l4:cup",
            "color": "accent",
            "hl": [
              {
                "text": "nhắc đều",
                "at": "l4:remind"
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
          "say": "Sixth stop: eight p.m., home. Meet Bà Tư, Dũng's grandma, queen of the TV remote.",
          "sub": "Chặng sáu: tám giờ tối, ở nhà. Còn đây là bà Tư, bà nội Dũng, nữ hoàng giữ điều khiển ti vi.",
          "keys": [
            "bà Tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "tu",
          "say": "Water? I haven't felt thirsty all day, dear.",
          "sub": "Nước á? Cả ngày nay bà có thấy khát đâu cháu.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That is the trap. Older people often feel less thirsty, so they drink too little without noticing.",
          "sub": "Đó là cái bẫy. Người cao tuổi thường ít thấy khát, nên dễ uống thiếu mà không biết.",
          "keys": [
            "ít thấy khát"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Then I'll put a cup by your chair, Grandma, and remind you through the day.",
          "sub": "Vậy cháu để sẵn cốc nước cạnh ghế bà, nhắc bà uống đều trong ngày nhé.",
          "face": "happy",
          "pose": "give"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p16"
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
          }
        ],
        "items": [
          {
            "id": "h-dia",
            "t": "text",
            "text": "Sốt, tiêu chảy: mất điện giải",
            "x": 3996,
            "y": 1470,
            "size": 46,
            "at": "l1:fever",
            "hl": [
              {
                "text": "điện giải",
                "at": "l1:electrolytes"
              }
            ]
          },
          {
            "id": "h-ask",
            "t": "text",
            "text": "Trẻ, người già: hỏi y tế",
            "x": 3996,
            "y": 1550,
            "size": 50,
            "at": "l2:children",
            "hl": [
              {
                "text": "hỏi y tế",
                "at": "l2:health worker"
              }
            ]
          },
          {
            "id": "h-net",
            "t": "text",
            "text": "Tự pha theo mạng",
            "x": 3996,
            "y": 1635,
            "size": 46,
            "at": "l2:internet",
            "color": "muted"
          },
          {
            "id": "h-netx",
            "t": "strike",
            "over": "h-net",
            "at": "l2:recipes"
          },
          {
            "id": "h-doc",
            "t": "text",
            "text": "Tim, thận, gan: theo bác sĩ",
            "x": 3996,
            "y": 1740,
            "size": 50,
            "at": "l3:heart",
            "color": "coral",
            "hl": [
              {
                "text": "theo bác sĩ",
                "at": "l3:follow your doctor"
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
          "say": "With fever or diarrhoea, the body loses water and electrolytes.",
          "sub": "Còn khi ai bị sốt, tiêu chảy, cơ thể mất cả nước lẫn chất điện giải."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For children and older people, ask a health worker about rehydration solution. No internet recipes.",
          "sub": "Với trẻ nhỏ, người cao tuổi: hỏi nhân viên y tế về dung dịch bù nước, đừng tự pha theo mạng.",
          "keys": [
            "hỏi nhân viên y tế"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And with heart, kidney or liver disease, or a fluid limit, follow your doctor, not a video.",
          "sub": "Bệnh tim, thận, gan, hay đang bị hạn chế dịch: làm theo bác sĩ, đừng theo video.",
          "keys": [
            "làm theo bác sĩ"
          ]
        }
      ],
      "ref": "p15,p24"
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
            "zoom": 1.3,
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
            "text": "Tối nay: 4 thói quen",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:habits",
            "hl": [
              {
                "text": "4 thói quen",
                "at": "l1:four tiny habits"
              }
            ]
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
                  "id": "dung",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "potable-water",
                "watermelon",
                "tangerine"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:bed",
            "caption": "22:00 · chuẩn bị cho mai",
            "icon": "potable-water"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1270,
            "w": 50,
            "h": 50,
            "at": "l2",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1252,
            "size": 62,
            "at": "l2+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Chai nước ở bàn, trong túi",
            "x": 6039,
            "y": 1262,
            "size": 50,
            "at": "l2+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1390,
            "w": 50,
            "h": 50,
            "at": "l3",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1372,
            "size": 62,
            "at": "l3+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "1 cốc khi dậy, mỗi bữa",
            "x": 6039,
            "y": 1382,
            "size": 50,
            "at": "l3+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1510,
            "w": 50,
            "h": 50,
            "at": "l4",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1492,
            "size": 62,
            "at": "l4+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Canh, dưa hấu, cam, bưởi",
            "x": 6039,
            "y": 1502,
            "size": 50,
            "at": "l4+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1630,
            "w": 50,
            "h": 50,
            "at": "l5",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1612,
            "size": 62,
            "at": "l5+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Đồ ngọt + 1 cốc nước lọc",
            "x": 6039,
            "y": 1622,
            "size": 50,
            "at": "l5+200"
          },
          {
            "id": "i-vs",
            "t": "text",
            "text": "vệ sĩ của trà sữa",
            "x": 6804,
            "y": 1780,
            "size": 50,
            "at": "l5:bodyguard",
            "color": "accent",
            "hl": [
              {
                "text": "vệ sĩ",
                "at": "l5:bodyguard"
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
          "say": "Before bed, Dũng plans four tiny habits.",
          "sub": "Trước khi ngủ, Dũng lên bốn thói quen nhỏ.",
          "keys": [
            "Bốn thói quen"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "One: a bottle on my desk, and in my bag when I go out.",
          "sub": "Một: chai nước trên bàn, ra ngoài thì bỏ túi.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Two: a glass when I wake up, and one with each meal.",
          "sub": "Hai: một cốc khi thức dậy, một cốc mỗi bữa."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Three: more soup and juicy fruit. Watermelon, oranges, pomelo.",
          "sub": "Ba: thêm canh và trái cây mọng nước. Dưa hấu, cam, bưởi.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And four: every sweet drink brings a glass of plain water as its bodyguard.",
          "sub": "Và bốn: mỗi đồ uống ngọt đi kèm một cốc nước lọc làm vệ sĩ.",
          "keys": [
            "vệ sĩ"
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
            "text": "Sáng hôm sau · 6:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:next morning"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "potable-water",
                "sunrise"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
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
            "at": "l1:six",
            "caption": "Sáng hôm sau · 6:00",
            "icon": "sunrise"
          },
          {
            "id": "j-6",
            "t": "illus",
            "name": "six-oclock",
            "x": 7932,
            "y": 1250,
            "size": 110,
            "at": "l1:six"
          },
          {
            "id": "j-g",
            "t": "text",
            "text": "Nước lọc trước, cà phê sau",
            "x": 7932,
            "y": 1390,
            "size": 52,
            "at": "l2:glass",
            "hl": [
              {
                "text": "Nước lọc trước",
                "at": "l2:water first"
              }
            ]
          },
          {
            "id": "j-p",
            "t": "text",
            "text": "Vàng nhạt ✓",
            "x": 7932,
            "y": 1490,
            "size": 60,
            "at": "l3:pale",
            "color": "accent",
            "hl": [
              {
                "text": "Vàng nhạt",
                "at": "l3:pale yellow"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Uống nước nhớ… chai”",
            "x": 7932,
            "y": 1610,
            "size": 58,
            "at": "l4:remember",
            "color": "accent",
            "hl": [
              {
                "text": "chai",
                "at": "l4:bottle"
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
          "say": "Next morning. Six a.m. Same heat, same Dũng.",
          "sub": "Sáng hôm sau. Sáu giờ. Vẫn nắng ấy, vẫn Dũng ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "A glass of water first. Then my coffee.",
          "sub": "Một cốc nước lọc trước. Rồi mới cà phê.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "And look at that. Pale yellow!",
          "sub": "Và nhìn kìa. Vàng nhạt!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "When you drink water, remember its source. This time Dũng also remembers his bottle.",
          "sub": "“Uống nước nhớ nguồn.” Lần này Dũng nhớ cả... chai nước.",
          "keys": [
            "chai nước"
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
      "ref": "p5,p23"
    },
    {
      "id": "s21",
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
            "at": "l1:colour",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:hot",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:plain water",
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
            "x": 4636,
            "y": 170,
            "at": "l1:colour"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8572,
            "y": 500,
            "at": "l2:hot"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1770,
            "at": "l3:plain water"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "g-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:enough"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; có bệnh hoặc đang điều trị, hỏi bác sĩ.",
            "x": 7932,
            "y": 1810,
            "size": 30,
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
          "say": "So: about two to two and a half litres, food included. Watch the colour, not the cups.",
          "sub": "Tóm lại: khoảng 2 đến 2,5 lít, tính cả thức ăn. Nhìn màu, đừng đếm cốc.",
          "keys": [
            "Nhìn màu, đừng đếm cốc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Drink more when it's hot, when you sweat, or when you're sick.",
          "sub": "Uống thêm khi trời nóng, khi ra mồ hôi, hay khi ốm.",
          "keys": [
            "Uống thêm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And make plain water the main drink. Enough is enough.",
          "sub": "Và để nước lọc làm vai chính. Đủ là đủ.",
          "keys": [
            "nước lọc làm vai chính"
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
      "ref": "questions[27]",
      "data": {
        "q": "What is the difference between pale yellow and dark yellow urine?",
        "options": [
          "Dark yellow is healthier, because it shows the body is saving water well",
          "Pale yellow usually means you are drinking enough, dark yellow means drink more",
          "Color means nothing, since it only depends on the light in the room"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "eyes",
        "why": "Vàng nhạt thường là đủ nước; vàng sẫm, ít đi tiểu là lúc nên uống thêm."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the difference between pale yellow and dark yellow urine?",
          "sub": "Nước tiểu vàng nhạt và vàng sẫm khác nhau thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Pale yellow usually means you are drinking enough, dark yellow means drink more.",
          "sub": "Vàng nhạt thường là đủ nước, vàng sẫm là nên uống thêm."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "It is the easiest way to keep track.",
          "sub": "Đây là cách theo dõi dễ nhất."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: một chai nước trên bàn",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Put a bottle of water on your desk today. Then try the forty questions below.",
          "sub": "Hôm nay đặt một chai nước lên bàn. Rồi thử bốn mươi câu bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
