// Kịch bản video W lần 3 (#110) — "Bữa ăn cân bằng gồm những gì?" · chuỗi "Ăn uống lành mạnh hằng ngày"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "what-is-a-balanced-meal--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "healthy-eaters",
    "slug": "what-is-a-balanced-meal",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Bữa ăn cân bằng gồm những gì?",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit #144: Đét đứng trái + bảng trắng 10 ô đi theo MỘT NGÀY THỨ TƯ (7:00 Dũng gọi phở “thêm bánh, khỏi rau” → 7:15 món một bát → 11:45 quầy cơm, “Khoan đã!” → 12:10 chọn món, nước chấm → 13:00 Thảo trà sữa → 15:00 Thảo đặt cơm cho nhóm → 19:00 bữa tối bù bữa nhà Thảo → 21:30 chế độ khắt khe trên mạng → sáng thứ Năm 7:00 vẫn quán phở ấy). Nhân vật (chuỗi healthy-eaters, w145/_series): Dũng (🔀 p8, món một bát p10), Thảo (❓ p17, 🧪 p12, ⚖️ p23), cô Hoa (quầy cơm), bác Bình (bố Thảo, bữa tối p19). Số liệu: ½ · ¼ · ¼ (mô hình đĩa ăn), dưới 5 g muối ≈ 1 thìa cà phê (WHO). Ngắt nhịp: BRK-01 “Thiếu rau!”, BRK-07 rehook trà sữa, BRK-08 dòng thời gian một thứ Tư, BRK-06 montage chế độ khắt khe. Khép vòng: quán phở 7:00, rau từ “đồ trang trí” → “vai chính”. Bản cũ (W lần 3, #110): w145/bak/what-is-a-balanced-meal--w01.js.",
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
            "text": "½ · ¼ · ¼",
            "x": 60,
            "y": 110,
            "size": 160,
            "at": "l1:half",
            "color": "accent",
            "hl": [
              {
                "text": "½",
                "at": "l1:vegetables"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "rau quả · tinh bột · chất đạm",
            "x": 70,
            "y": 330,
            "size": 56,
            "at": "l1:quarter"
          },
          {
            "id": "a-kieng",
            "t": "text",
            "text": "Ta tưởng: phải ăn kiêng khắt khe?",
            "x": 70,
            "y": 450,
            "size": 52,
            "at": "l2:skip",
            "color": "muted"
          },
          {
            "id": "a-kx",
            "t": "strike",
            "over": "a-kieng",
            "at": "l2:juice+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Half the plate vegetables, a quarter rice, a quarter protein. That is a balanced meal.",
          "sub": "Nửa đĩa rau, một phần tư cơm, một phần tư đạm. Thế là một bữa ăn cân bằng.",
          "keys": [
            "Nửa đĩa rau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But online they say: skip rice, eat only meat, or drink only juice.",
          "sub": "Còn trên mạng thì bảo: bỏ cơm, ăn toàn thịt, hay chỉ uống nước ép.",
          "keys": [
            "bỏ cơm, ăn toàn thịt"
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
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "point"
                }
              ],
              "props": [
                "steaming-bowl",
                "chopsticks"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "E-MOVE-01"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-01"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Tư · 7:00 · quán phở",
            "icon": "steaming-bowl"
          },
          {
            "id": "a-o",
            "t": "text",
            "text": "“Thêm bánh, khỏi rau!”",
            "x": 60,
            "y": 560,
            "size": 54,
            "at": "l3:extra noodles",
            "color": "coral",
            "hl": [
              {
                "text": "khỏi rau",
                "at": "l3:no herbs"
              }
            ]
          },
          {
            "id": "a-tt",
            "t": "text",
            "text": "rau = đồ trang trí?",
            "x": 60,
            "y": 660,
            "size": 54,
            "at": "l4:decoration",
            "hl": [
              {
                "text": "đồ trang trí",
                "at": "l4:decoration"
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
          "say": "Engineer, iced coffee fan, and a man who eats breakfast in five minutes flat.",
          "sub": "Kỹ sư, fan cà phê sữa đá, ăn sáng nhanh như chớp.",
          "keys": [
            "nhanh như chớp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Wednesday, seven a.m. A big bowl, extra noodles, no herbs please!",
          "sub": "Bảy giờ sáng thứ Tư. Một bát phở to, thêm bánh, khỏi rau nhé!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Herbs? For Dũng, they are just decoration.",
          "sub": "Rau thơm á? Với Dũng, rau chỉ là đồ trang trí.",
          "keys": [
            "đồ trang trí"
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
      "ref": "p10"
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
            "text": "Bữa cân bằng gồm gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:balanced",
            "hl": [
              {
                "text": "cân bằng",
                "at": "l1:balanced"
              }
            ]
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Bốn nhóm:",
            "x": 2028,
            "y": 160,
            "size": 54,
            "at": "l2:four groups",
            "hl": [
              {
                "text": "Bốn nhóm",
                "at": "l2:four groups"
              }
            ]
          },
          {
            "id": "b-g1",
            "t": "text",
            "text": "• rau và trái cây",
            "x": 2048,
            "y": 240,
            "size": 46,
            "at": "l2:vegetables"
          },
          {
            "id": "b-g2",
            "t": "text",
            "text": "• tinh bột: cơm, bún, khoai",
            "x": 2048,
            "y": 305,
            "size": 46,
            "at": "l2:starch"
          },
          {
            "id": "b-g3",
            "t": "text",
            "text": "• đạm: cá, thịt, trứng, đậu phụ",
            "x": 2048,
            "y": 370,
            "size": 46,
            "at": "l2:protein"
          },
          {
            "id": "b-g4",
            "t": "text",
            "text": "• chút chất béo tốt",
            "x": 2048,
            "y": 435,
            "size": 46,
            "at": "l2:good fat"
          },
          {
            "id": "b-nh",
            "t": "text",
            "text": "Nguyên hạt · nước lọc đi kèm",
            "x": 2028,
            "y": 530,
            "size": 42,
            "at": "l3:whole grains",
            "hl": [
              {
                "text": "nước lọc",
                "at": "l3:plain water"
              }
            ]
          },
          {
            "id": "b-p-h",
            "t": "box",
            "x": 2948,
            "y": 170,
            "w": 300,
            "h": 280,
            "at": "l4:half",
            "color": "accent",
            "stroke": 5
          },
          {
            "id": "b-p-ht",
            "t": "text",
            "text": "½ rau quả",
            "x": 2978,
            "y": 280,
            "size": 46,
            "at": "l4:half+200"
          },
          {
            "id": "b-p-a",
            "t": "box",
            "x": 3268,
            "y": 170,
            "w": 300,
            "h": 130,
            "at": "l4:starch",
            "stroke": 5
          },
          {
            "id": "b-p-at",
            "t": "text",
            "text": "¼ tinh bột",
            "x": 3293,
            "y": 205,
            "size": 44,
            "at": "l4:starch+200"
          },
          {
            "id": "b-p-b",
            "t": "box",
            "x": 3268,
            "y": 320,
            "w": 300,
            "h": 130,
            "at": "l4:protein",
            "stroke": 5
          },
          {
            "id": "b-p-bt",
            "t": "text",
            "text": "¼ chất đạm",
            "x": 3293,
            "y": 355,
            "size": 44,
            "at": "l4:protein+200"
          },
          {
            "id": "b-mat",
            "t": "text",
            "text": "Không cân: nhìn bằng mắt",
            "x": 2948,
            "y": 480,
            "size": 50,
            "at": "l5:eyes",
            "color": "accent",
            "hl": [
              {
                "text": "nhìn bằng mắt",
                "at": "l5:eyes"
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
          "say": "So what goes into a balanced meal, really?",
          "sub": "Vậy rốt cuộc bữa ăn cân bằng gồm những gì?",
          "keys": [
            "bữa ăn cân bằng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Four groups: vegetables and fruit, starch like rice or noodles, protein foods, and a little good fat.",
          "sub": "Bốn nhóm: rau và trái cây; tinh bột như cơm, bún; thực phẩm giàu đạm; một ít chất béo tốt.",
          "keys": [
            "Bốn nhóm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Whole grains when you can, and plain water is the best drink.",
          "sub": "Ưu tiên ngũ cốc nguyên hạt khi có thể; nước lọc là đồ uống đi kèm tốt nhất.",
          "keys": [
            "nước lọc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The plate model: half vegetables and fruit, a quarter starch, a quarter protein.",
          "sub": "Mô hình đĩa ăn: nửa rau và trái cây, một phần tư tinh bột, một phần tư đạm.",
          "keys": [
            "Mô hình đĩa ăn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "No scales. Just your eyes.",
          "sub": "Không cần cân. Ước bằng mắt."
        }
      ],
      "ref": "p1,p2"
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
            "text": "Không món nào đủ mọi chất",
            "x": 2028,
            "y": 600,
            "size": 50,
            "at": "l1:everything",
            "color": "coral",
            "hl": [
              {
                "text": "đủ mọi chất",
                "at": "l1:everything"
              }
            ]
          },
          {
            "id": "b-dd",
            "t": "text",
            "text": "→ ăn đa dạng (WHO)",
            "x": 2068,
            "y": 680,
            "size": 46,
            "at": "l2:variety"
          },
          {
            "id": "b-viet",
            "t": "text",
            "text": "Mâm Việt: gần chuẩn rồi!",
            "x": 2868,
            "y": 600,
            "size": 54,
            "at": "l3:close",
            "color": "accent",
            "hl": [
              {
                "text": "gần chuẩn",
                "at": "l3:close"
              }
            ]
          },
          {
            "id": "b-fix",
            "t": "text",
            "text": "+ thêm rau · − bớt mặn",
            "x": 2908,
            "y": 685,
            "size": 48,
            "at": "l4:add"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "No single food has everything. Rice gives energy, fish and meat protein, vegetables vitamins and fibre.",
          "sub": "Không thực phẩm nào đủ mọi chất. Cơm cho năng lượng, cá thịt cho đạm, rau quả cho vitamin, chất xơ.",
          "keys": [
            "Không thực phẩm nào đủ mọi chất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So WHO advises variety: many vegetables, little salt, little sugar.",
          "sub": "Nên WHO khuyên ăn đa dạng: nhiều rau quả, ít muối, ít đường.",
          "keys": [
            "ăn đa dạng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Good news: a Vietnamese tray with rice, a main dish, greens and soup is already close.",
          "sub": "Tin vui: mâm cơm Việt có cơm, món mặn, rau, canh vốn đã gần mô hình này.",
          "keys": [
            "đã gần mô hình này"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Usually you just add greens and cut salt. Now, one Wednesday with Dũng.",
          "sub": "Thường chỉ cần thêm rau, bớt mặn. Giờ, theo Dũng qua một ngày thứ Tư."
        }
      ],
      "ref": "p3,p4"
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 7:15 · Món một bát",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:noodles"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Phở, bún, mì:",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "l2:one bowl"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "nhiều tinh bột, ít rau",
            "x": 3996,
            "y": 250,
            "size": 54,
            "at": "l2:lots of starch",
            "color": "coral",
            "hl": [
              {
                "text": "ít rau",
                "at": "l2:few vegetables"
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
          "say": "Seven fifteen. That bowl is mostly noodles.",
          "sub": "Bảy giờ mười lăm. Bát ấy gần như toàn bánh phở."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One bowl dishes often have lots of starch and few vegetables.",
          "sub": "Món một bát thường nhiều tinh bột, ít rau.",
          "keys": [
            "nhiều tinh bột, ít rau"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s05",
      "module": "BRK-01",
      "data": {
        "illus": "steaming-bowl",
        "around": [
          "chopsticks",
          "leafy-green"
        ],
        "label": "Thiếu rau!",
        "note": "Thêm rau sống, giá, rau thơm"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Stop right there.",
          "sub": "Dừng lại đã."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Add fresh herbs and bean sprouts.",
          "sub": "Thêm rau sống, giá, rau thơm.",
          "keys": [
            "rau sống, giá, rau thơm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "re-dia"
        }
      ],
      "ref": "p10"
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
            "at": "l1",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
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
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "point",
                  "face": "happy"
                }
              ],
              "props": [
                "steaming-bowl",
                "leafy-green"
              ]
            },
            "at": "l1",
            "caption": "7:15 · gọi lại",
            "icon": "leafy-green"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Ít bánh, nhiều rau, bò nạc",
            "x": 3996,
            "y": 350,
            "size": 50,
            "at": "l1:fewer noodles",
            "color": "accent"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "= chia lại bát, không nhịn",
            "x": 3996,
            "y": 430,
            "size": 50,
            "at": "l2:rebalancing",
            "hl": [
              {
                "text": "chia lại",
                "at": "l2:rebalancing"
              }
            ]
          },
          {
            "id": "c-mi",
            "t": "text",
            "text": "Mì gói vội: bột + muối + béo",
            "x": 3996,
            "y": 560,
            "size": 46,
            "at": "l3:instant",
            "color": "coral"
          },
          {
            "id": "c-bun",
            "t": "text",
            "text": "Bún cá + rau: đủ ba phần",
            "x": 3996,
            "y": 640,
            "size": 50,
            "at": "l4:fish",
            "color": "accent"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Cùng một bát, khác xa nhau",
            "x": 4836,
            "y": 690,
            "size": 52,
            "at": "l4:worlds apart",
            "hl": [
              {
                "text": "khác xa",
                "at": "l4:worlds apart"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Okay. Fewer noodles, more herbs and sprouts, lean beef, please.",
          "sub": "Thôi được. Cho cháu ít bánh, nhiều rau, giá, thịt bò nạc nhé.",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That is rebalancing the bowl, not starving.",
          "sub": "Đó là chia lại phần trong bát, không phải nhịn ăn.",
          "keys": [
            "chia lại phần trong bát"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A rushed instant noodle is nearly all starch, salt and fat.",
          "sub": "Bát mì gói ăn vội gần như chỉ có tinh bột, muối và chất béo."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A fish noodle soup with greens has starch, protein and vegetables. Same bowl, worlds apart.",
          "sub": "Bát bún cá kèm rau có đủ tinh bột, đạm, rau. Cùng một bát, khác xa nhau.",
          "keys": [
            "khác xa nhau"
          ]
        }
      ],
      "ref": "p10,p11"
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
            "at": "l3:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 11:45 · Quầy cơm",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:rice stall"
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "point"
                }
              ],
              "props": [
                "cooked-rice",
                "poultry-leg",
                "egg"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "dung"
                }
              ]
            },
            "at": "l1:rice stall",
            "caption": "11:45 · quầy cơm gần công ty",
            "icon": "cook"
          },
          {
            "id": "d-o",
            "t": "text",
            "text": "Sườn chiên, trứng chiên, đầy cơm",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "l3:fried ribs",
            "color": "coral"
          },
          {
            "id": "d-o2",
            "t": "text",
            "text": "“Rau để tối ăn ở nhà”",
            "x": 5964,
            "y": 250,
            "size": 46,
            "at": "l3:tonight",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Eleven forty five. The rice stall near the office.",
          "sub": "Mười một giờ bốn lăm. Quầy cơm gần công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Cô Hoa, the owner, fastest ladle in the district.",
          "sub": "Đây là cô Hoa, chủ quầy, cái muôi nhanh nhất quận.",
          "keys": [
            "cái muôi nhanh nhất quận"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Fried ribs, a fried egg, lots of rice. Vegetables? Tonight, at home!",
          "sub": "Sườn chiên, trứng chiên, nhiều cơm. Rau á? Tối về nhà ăn!",
          "face": "happy",
          "pose": "point"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "11:45 · quầy cơm",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "hoa",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Toàn món chiên, hẹn rau để tối",
          "why": "Tối mệt lại gọi đồ ăn nhanh; cả tuần gần như không bữa nào có rau, người nặng nề, khó tiêu.",
          "rule": "Gọi rau trước, gọi thịt sau"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Vegetables can wait. I'll eat them at home tonight.",
          "sub": "Rau chờ được. Tối mình ăn ở nhà.",
          "pose": "thumb",
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
          "say": "Tonight you're tired and order fast food. A whole week, almost no vegetables. You feel heavy.",
          "sub": "Tối mệt lại gọi đồ ăn nhanh. Cả tuần gần như không có rau, người nặng nề, khó tiêu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Vegetables first, please. Then braised fish, a little rice, and soup.",
          "sub": "Cô cho cháu rau trước, rồi cá kho, ít cơm, thêm bát canh.",
          "phase": "redo",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Sure. Here you are.",
          "sub": "Ừ, của cháu đây.",
          "phase": "redo",
          "face": "happy",
          "pose": "give"
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
      "id": "s09",
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
            "id": "d-s0",
            "t": "box",
            "x": 5964,
            "y": 360,
            "w": 180,
            "h": 90,
            "at": "l1:vegetables",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "d-st0",
            "t": "text",
            "text": "1 Rau",
            "x": 5979,
            "y": 375,
            "size": 40,
            "at": "l1:vegetables+200"
          },
          {
            "id": "d-s1",
            "t": "box",
            "x": 6164,
            "y": 360,
            "w": 180,
            "h": 90,
            "at": "l1:protein",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "d-st1",
            "t": "text",
            "text": "2 Đạm",
            "x": 6179,
            "y": 375,
            "size": 40,
            "at": "l1:protein+200"
          },
          {
            "id": "d-s2",
            "t": "box",
            "x": 6364,
            "y": 360,
            "w": 180,
            "h": 90,
            "at": "l1:rice",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "d-st2",
            "t": "text",
            "text": "3 Cơm vừa",
            "x": 6379,
            "y": 375,
            "size": 40,
            "at": "l1:rice+200"
          },
          {
            "id": "d-s3",
            "t": "box",
            "x": 6564,
            "y": 360,
            "w": 180,
            "h": 90,
            "at": "l1:soup",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "d-st3",
            "t": "text",
            "text": "4 Canh",
            "x": 6579,
            "y": 375,
            "size": 40,
            "at": "l1:soup+200"
          },
          {
            "id": "d-why",
            "t": "text",
            "text": "Rau trước → thịt không lấp đĩa",
            "x": 5964,
            "y": 490,
            "size": 44,
            "at": "l2:fill"
          },
          {
            "id": "d-cau",
            "t": "text",
            "text": "“Nhiều rau, ít cơm ạ”",
            "x": 5964,
            "y": 570,
            "size": 52,
            "at": "l3:more vegetables",
            "color": "accent"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Gọi rau trước, gọi thịt sau",
            "x": 5964,
            "y": 690,
            "size": 60,
            "at": "l4:first",
            "color": "accent",
            "hl": [
              {
                "text": "Gọi rau trước",
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
          "say": "The trick is the order: vegetables, then protein, moderate rice, and soup if there is one.",
          "sub": "Mẹo là thứ tự: rau trước, rồi món đạm, cơm vừa phải, thêm bát canh nếu có.",
          "keys": [
            "thứ tự"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Greens first, so two or three meats can't fill the whole plate.",
          "sub": "Chọn rau trước để đĩa không bị lấp bằng hai ba món thịt."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Don't be shy: sellers hear more vegetables, less rice all day.",
          "sub": "Đừng ngại: người bán quen nghe “nhiều rau, ít cơm” lắm rồi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Vegetables first, meat second.",
          "sub": "Gọi rau trước, gọi thịt sau.",
          "keys": [
            "Gọi rau trước, gọi thịt sau"
          ]
        }
      ],
      "ref": "p5,p6,p9"
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
            "at": "l4",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 12:10 · Chọn món, chọn chấm",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:choosing"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "fish",
                "salt",
                "teacup-without-handle"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-07",
                  "on": "dung",
                  "move": "E-MOVE-09"
                }
              ]
            },
            "at": "l1:choosing",
            "caption": "12:10 · bàn ăn trưa",
            "icon": "fish"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Đạm luân phiên: cá, gà,",
            "x": 7932,
            "y": 160,
            "size": 46,
            "at": "l1:rotate",
            "hl": [
              {
                "text": "luân phiên",
                "at": "l1:rotate"
              }
            ]
          },
          {
            "id": "e-1b",
            "t": "text",
            "text": "trứng, đậu phụ, thịt nạc",
            "x": 7952,
            "y": 225,
            "size": 46,
            "at": "l1:tofu"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Luộc, hấp, kho, canh > chiên",
            "x": 7932,
            "y": 310,
            "size": 46,
            "at": "l2:boiled"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Hạn chế lạp xưởng, xúc xích",
            "x": 7932,
            "y": 395,
            "size": 46,
            "at": "l3:sausage",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Twelve ten, choosing dishes. Rotate your protein: fish, chicken, eggs, tofu, lean meat.",
          "sub": "Mười hai giờ mười, chọn món. Đạm luân phiên: cá, gà, trứng, đậu phụ, thịt nạc.",
          "keys": [
            "Đạm luân phiên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each brings different nutrients. Boiled, steamed, braised and soups beat deep fried.",
          "sub": "Mỗi nguồn mang dưỡng chất khác nhau. Luộc, hấp, kho, canh hơn món chiên ngập dầu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Go easy on Chinese sausage and hot dogs. Usually very salty.",
          "sub": "Hạn chế lạp xưởng, xúc xích: thường nhiều muối."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "And the fish sauce? That doesn't count, right?",
          "sub": "Còn nước mắm? Cái đó đâu có tính, nhỉ?",
          "face": "thinking",
          "pose": "shrug"
        }
      ],
      "ref": "p7"
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
            "id": "e-yes",
            "t": "text",
            "text": "Có tính! Mắm, xì dầu = muối",
            "x": 7932,
            "y": 480,
            "size": 50,
            "at": "l1:it counts",
            "color": "coral",
            "hl": [
              {
                "text": "Có tính",
                "at": "l1:it counts"
              }
            ]
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "WHO: dưới 5 g ≈ 1 thìa",
            "x": 7932,
            "y": 570,
            "size": 42,
            "at": "l2:five grams",
            "hl": [
              {
                "text": "dưới 5 g",
                "at": "l2:under five"
              }
            ]
          },
          {
            "id": "e-cn",
            "t": "text",
            "text": "Chén riêng · nếm trước · chấm nhẹ",
            "x": 7932,
            "y": 690,
            "size": 48,
            "at": "l3:small bowl",
            "color": "accent",
            "hl": [
              {
                "text": "nếm trước",
                "at": "l3:taste"
              }
            ]
          },
          {
            "id": "e-pha",
            "t": "text",
            "text": "Mắm pha chanh, tỏi, ớt: đỡ mặn",
            "x": 8772,
            "y": 690,
            "size": 40,
            "at": "l4:lime"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: WHO, khuyến nghị muối cho người lớn",
            "x": 8772,
            "y": 745,
            "size": 24,
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
          "say": "Oh, it counts. Fish sauce and soy sauce bring salt, natural or not.",
          "sub": "Có tính chứ. Nước mắm, xì dầu đều mang muối vào bữa, dù là nguyên liệu tự nhiên.",
          "keys": [
            "Có tính chứ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "WHO advises adults under five grams of salt a day, about one teaspoon, sauces included.",
          "sub": "WHO khuyên người lớn dưới 5 gam muối mỗi ngày, khoảng một thìa cà phê, tính cả nước chấm.",
          "keys": [
            "dưới 5 gam muối"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So pour it into a small bowl, taste the food first, then dip lightly.",
          "sub": "Vậy rót ra chén nhỏ riêng, nếm món trước rồi chấm nhẹ.",
          "keys": [
            "nếm món trước"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fish sauce with lime, garlic and chilli: rich taste, less salt per dip.",
          "sub": "Nước mắm pha chanh, tỏi, ớt vẫn đậm vị mà mỗi lần chấm ít mặn hơn."
        }
      ],
      "ref": "p14,p15"
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
            "text": "④ 13:00 · Cốc trà sữa",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:one p m"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "point",
                  "face": "happy"
                }
              ],
              "props": [
                "bubble-tea",
                "leafy-green"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "E-MOVE-01"
                },
                {
                  "at": "l3:end",
                  "shot": "E-SHOT-01"
                }
              ]
            },
            "at": "l2:this is",
            "caption": "13:00 · quán trà sữa",
            "icon": "bubble-tea"
          },
          {
            "id": "f-gl",
            "t": "text",
            "text": "Trưa: gạo lứt + rau luộc ✓",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l2:brown rice"
          },
          {
            "id": "f-bt",
            "t": "illus",
            "name": "bubble-tea",
            "x": 60,
            "y": 1350,
            "size": 110,
            "at": "l3:milk tea"
          },
          {
            "id": "f-ts",
            "t": "text",
            "text": "+ trà sữa lớn, đủ thạch",
            "x": 190,
            "y": 1380,
            "size": 46,
            "at": "l3:jellies",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One p m. Dũng's desk neighbour heads for her reward.",
          "sub": "Một giờ chiều. Cô bạn bàn bên Dũng đi lĩnh “phần thưởng”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Thảo, brown rice queen. Every lunch: brown rice and boiled greens.",
          "sub": "Đây là Thảo, nữ hoàng gạo lứt. Trưa nào cũng cơm gạo lứt, rau luộc.",
          "keys": [
            "nữ hoàng gạo lứt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "And now, a large milk tea with all the jellies, please!",
          "sub": "Giờ thì một cốc trà sữa lớn, đủ loại thạch nhé!",
          "face": "happy",
          "pose": "point"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Đĩa đã cân bằng, cả bữa đã cân bằng chưa?",
        "illus": "bubble-tea"
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
          "say": "The plate is balanced. But is the whole lunch?",
          "sub": "Đĩa thì cân bằng. Nhưng cả bữa trưa thì sao?",
          "keys": [
            "cả bữa trưa"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p17"
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
            "id": "f-no",
            "t": "text",
            "text": "Chưa: thêm đường, thêm thạch",
            "x": 60,
            "y": 1510,
            "size": 50,
            "at": "l1:not yet",
            "color": "coral",
            "hl": [
              {
                "text": "thêm đường",
                "at": "l1:sugar"
              }
            ]
          },
          {
            "id": "f-qua",
            "t": "text",
            "text": "Nguyên quả > nước ép (giữ chất xơ)",
            "x": 60,
            "y": 1600,
            "size": 44,
            "at": "l2:whole fruit"
          },
          {
            "id": "f-doi",
            "t": "text",
            "text": "→ nước lọc, trà không đường",
            "x": 60,
            "y": 1680,
            "size": 50,
            "at": "l3:plain water",
            "color": "accent"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Cốc nước cũng phải nhẹ",
            "x": 60,
            "y": 1780,
            "size": 56,
            "at": "l4:light",
            "color": "accent",
            "hl": [
              {
                "text": "phải nhẹ",
                "at": "l4:light"
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
          "say": "Not yet. Milk tea with jellies brings lots of added sugar, like soft drinks and bottled juice.",
          "sub": "Chưa. Trà sữa thêm thạch mang vào lượng đường không nhỏ. Nước ngọt, nước ép đóng chai cũng vậy.",
          "keys": [
            "lượng đường không nhỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Whole fruit keeps its fibre, so it beats juice.",
          "sub": "Trái cây nguyên quả giữ được chất xơ, nên tốt hơn nước ép."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Switch to plain water or unsweetened tea. Save milk tea for friends.",
          "sub": "Đổi sang nước lọc hoặc trà không đường. Trà sữa để dịp gặp bạn bè."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "If the plate is balanced, keep the cup light too.",
          "sub": "Đĩa đã cân bằng, cốc nước cũng phải nhẹ.",
          "keys": [
            "cốc nước cũng phải nhẹ"
          ]
        }
      ],
      "ref": "p16,p17,p18"
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
            "at": "l3",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 15:00 · Đặt cơm cho nhóm",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:three"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "label": "Đặt cơm cho nhóm",
              "actor": {
                "id": "thao",
                "side": "right"
              },
              "contact": {
                "name": "Quán cơm",
                "illus": "cook"
              },
              "messages": [
                {
                  "from": "me",
                  "text": "Mai cho em năm suất mì xào bò ạ.",
                  "at": "l3"
                },
                {
                  "from": "me",
                  "text": "Thêm một hộp rau luộc chung.",
                  "at": "l4"
                },
                {
                  "from": "me",
                  "text": "Hai suất ghi “ít cơm, nhiều rau”.",
                  "at": "l5"
                }
              ]
            },
            "at": "l1:lunch",
            "caption": "15:00 · đặt cho ngày mai",
            "icon": "takeout-box"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1260,
            "w": 50,
            "h": 50,
            "at": "l3",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 1242,
            "size": 62,
            "at": "l3+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Món chính như thường",
            "x": 2103,
            "y": 1252,
            "size": 46,
            "at": "l3+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1355,
            "w": 50,
            "h": 50,
            "at": "l4",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 1337,
            "size": 62,
            "at": "l4+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "+ 1 hộp rau chung",
            "x": 2103,
            "y": 1347,
            "size": 46,
            "at": "l4+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1450,
            "w": 50,
            "h": 50,
            "at": "l5",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 1432,
            "size": 62,
            "at": "l5+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Ghi “ít cơm, nhiều rau”",
            "x": 2103,
            "y": 1442,
            "size": 46,
            "at": "l5+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1545,
            "w": 50,
            "h": 50,
            "at": "l6:rotate",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 1527,
            "size": 62,
            "at": "l6:rotate+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Lần sau đổi món chính",
            "x": 2103,
            "y": 1537,
            "size": 46,
            "at": "l6:rotate+200"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Đặt chung thì thêm hộp rau chung",
            "x": 2028,
            "y": 1690,
            "size": 46,
            "at": "l7:shared box",
            "color": "accent",
            "hl": [
              {
                "text": "hộp rau chung",
                "at": "l7:shared box"
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
          "say": "Three p m. Thảo orders tomorrow's lunch for a team of five.",
          "sub": "Ba giờ chiều. Thảo đặt cơm trưa mai cho nhóm năm người."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Five beef stir fried noodles, please.",
          "sub": "Cho em năm suất mì xào bò ạ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Plus one shared box of boiled vegetables.",
          "sub": "Thêm một hộp rau luộc chung."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "And two of them: less rice, more vegetables.",
          "sub": "Hai suất ghi giúp em “ít cơm, nhiều rau”.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next time, rotate the main dish: noodles this week, fish noodle soup next.",
          "sub": "Lần sau đổi món chính theo lượt: tuần này mì xào, tuần sau bún cá."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "No extra time, and the team feels less sluggish. Order together? Add a shared box.",
          "sub": "Không mất thêm thời gian, cả nhóm đỡ uể oải. Đặt chung thì thêm hộp rau chung.",
          "keys": [
            "hộp rau chung"
          ]
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s16",
      "module": "BRK-08",
      "data": {
        "title": "Một thứ Tư",
        "points": [
          {
            "label": "7:15",
            "sub": "Bát phở",
            "illus": "steaming-bowl"
          },
          {
            "label": "11:45",
            "sub": "Quầy cơm",
            "illus": "cooked-rice"
          },
          {
            "label": "13:00",
            "sub": "Trà sữa",
            "illus": "bubble-tea"
          },
          {
            "label": "15:00",
            "sub": "Đặt cơm",
            "illus": "takeout-box"
          },
          {
            "label": "19:00",
            "sub": "Bữa tối",
            "illus": "pot-of-food"
          }
        ],
        "current": 4
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Breakfast, lunch, a drink, an order.",
          "sub": "Bữa sáng, bữa trưa, cốc nước, đặt cơm."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "And now, dinner.",
          "sub": "Giờ đến bữa tối."
        }
      ]
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 19:00 · Bữa tối bù bữa",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:dinner"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "pot-of-food",
                "fish",
                "leafy-green"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "binh"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09"
                }
              ]
            },
            "at": "l1:dad",
            "caption": "19:00 · nhà Thảo",
            "icon": "pot-of-food"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Trưa ít rau → tối thêm rau",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l2:more greens"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Trưa nhiều thịt → tối cá, đậu",
            "x": 3996,
            "y": 1340,
            "size": 48,
            "at": "l3:fish and tofu"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Tính theo cả ngày, cả tuần",
            "x": 3996,
            "y": 1440,
            "size": 54,
            "at": "l4:whole day",
            "color": "accent",
            "hl": [
              {
                "text": "cả ngày, cả tuần",
                "at": "l4:whole day"
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
          "say": "Seven p m, dinner at Thảo's. This is Bác Bình, her dad.",
          "sub": "Bảy giờ tối, bữa cơm nhà Thảo. Đây là bác Bình, bố Thảo.",
          "keys": [
            "bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Lunch had few vegetables for the team. Tonight, more greens.",
          "sub": "Trưa nhóm ăn ít rau. Tối nay mình ăn thêm rau.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "And I had meat at noon, so let's have fish and tofu.",
          "sub": "Trưa bố ăn nhiều thịt rồi, tối mình ăn cá với đậu phụ.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Balance counts over the whole day and week, not each meal. No stress over one meal.",
          "sub": "Cân bằng tính theo cả ngày, cả tuần, không phải từng bữa. Một bữa chưa ổn, đừng căng thẳng.",
          "keys": [
            "cả ngày, cả tuần"
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
      "ref": "p19"
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
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1530,
            "w": 50,
            "h": 50,
            "at": "l1:rice",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1512,
            "size": 62,
            "at": "l1:rice+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Cơm, trộn ít gạo lứt",
            "x": 4071,
            "y": 1522,
            "size": 40,
            "at": "l1:rice+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1600,
            "w": 50,
            "h": 50,
            "at": "l1:braised fish",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1582,
            "size": 62,
            "at": "l1:braised fish+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Đạm: cá kho, đậu sốt cà",
            "x": 4071,
            "y": 1592,
            "size": 40,
            "at": "l1:braised fish+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1670,
            "w": 50,
            "h": 50,
            "at": "l2:morning glory",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1652,
            "size": 62,
            "at": "l2:morning glory+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Rau: muống luộc, cải xào",
            "x": 4071,
            "y": 1662,
            "size": 40,
            "at": "l2:morning glory+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1740,
            "w": 50,
            "h": 50,
            "at": "l2:soup",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1722,
            "size": 62,
            "at": "l2:soup+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Canh · trái cây tráng miệng",
            "x": 4071,
            "y": 1732,
            "size": 40,
            "at": "l2:soup+200"
          },
          {
            "id": "h-ty",
            "t": "text",
            "text": "Tự xới theo tỉ lệ đĩa",
            "x": 4836,
            "y": 1780,
            "size": 44,
            "at": "l3:half",
            "hl": [
              {
                "text": "Tự xới",
                "at": "l3:serves"
              }
            ]
          },
          {
            "id": "h-nhai",
            "t": "text",
            "text": "Ăn chậm, nhai kỹ",
            "x": 4836,
            "y": 1835,
            "size": 34,
            "at": "l4:slowly",
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
          "say": "A balanced dinner tray: rice with some brown rice, braised fish or tofu with tomato.",
          "sub": "Mâm tối cân bằng: cơm trộn ít gạo lứt, cá kho hay đậu phụ sốt cà chua.",
          "keys": [
            "Mâm tối cân bằng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Boiled morning glory or garlic greens, a bowl of soup, fruit for dessert.",
          "sub": "Rau muống luộc hay cải xào tỏi, một bát canh, trái cây tráng miệng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Everyone serves their own bowl: half greens, a quarter rice, a quarter protein.",
          "sub": "Mỗi người tự xới theo tỉ lệ: nửa rau, một phần tư cơm, một phần tư đạm.",
          "keys": [
            "tự xới"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Eat slowly and chew well, to notice when you're full. Chew your food, weigh your words.",
          "sub": "Ăn chậm, nhai kỹ để kịp biết khi nào đã no. “Ăn có nhai, nói có nghĩ.”",
          "keys": [
            "Ăn có nhai"
          ]
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s19",
      "module": "BRK-06",
      "data": {
        "title": "Thực đơn trên mạng tuần này",
        "items": [
          {
            "illus": "cooked-rice",
            "text": "Bỏ tinh bột"
          },
          {
            "illus": "cut-of-meat",
            "text": "Toàn thịt"
          },
          {
            "illus": "beverage-box",
            "text": "Chỉ nước ép"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "No carbs, all meat, only juice.",
          "sub": "Bỏ tinh bột, toàn thịt, chỉ nước ép."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Thảo's feed tonight.",
          "sub": "Bảng tin của Thảo tối nay."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "at": "l1",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 21:30 · Chế độ khắt khe?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l2:strict"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "beverage-box"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "thao"
                },
                {
                  "at": "l2",
                  "shot": "E-SHOT-01"
                }
              ]
            },
            "at": "l1",
            "caption": "21:30 · lướt điện thoại",
            "icon": "mobile-phone"
          },
          {
            "id": "i-n",
            "t": "text",
            "text": "Đổi theo mạng → vài hôm, bỏ",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l2:few days",
            "color": "coral"
          },
          {
            "id": "i-c",
            "t": "text",
            "text": "Không cần bỏ hẳn cơm trắng",
            "x": 5964,
            "y": 1350,
            "size": 46,
            "at": "l3:white rice"
          },
          {
            "id": "i-v2",
            "t": "text",
            "text": "lượng vừa + đủ rau, đạm",
            "x": 5984,
            "y": 1420,
            "size": 46,
            "at": "l3:amounts",
            "hl": [
              {
                "text": "lượng vừa",
                "at": "l3:amounts"
              }
            ]
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "1 thói quen: rau đã nửa đĩa?",
            "x": 5964,
            "y": 1520,
            "size": 48,
            "at": "l4:one small habit",
            "color": "accent",
            "hl": [
              {
                "text": "nửa đĩa",
                "at": "l4:half"
              }
            ]
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Giữ một thói quen > mười mẹo",
            "x": 5964,
            "y": 1780,
            "size": 54,
            "at": "l5:dropped",
            "color": "accent",
            "hl": [
              {
                "text": "Giữ một thói quen",
                "at": "l5:keep"
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
          "say": "Last week no carbs, this week only meat, next week only juice!",
          "sub": "Tuần trước bỏ tinh bột, tuần này toàn thịt, tuần sau chỉ uống nước ép!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Strict diets like these last a few days. Then you quit, more confused.",
          "sub": "Chế độ khắt khe kiểu này giữ được vài hôm, rồi mệt, bỏ, càng rối.",
          "keys": [
            "vài hôm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No need to drop white rice. Sensible amounts, with enough greens and protein.",
          "sub": "Không cần bỏ hẳn cơm trắng. Lượng vừa phải, đi kèm đủ rau và đạm.",
          "keys": [
            "Lượng vừa phải"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Instead, one small habit: at every meal, is half the plate vegetables?",
          "sub": "Thay vào đó, một thói quen nhỏ: mỗi bữa nhìn xem rau đã khoảng nửa đĩa chưa.",
          "keys": [
            "một thói quen nhỏ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One habit you keep beats ten tips you dropped.",
          "sub": "Một thói quen giữ được, hơn mười lời khuyên bỏ dở.",
          "keys": [
            "Một thói quen giữ được"
          ]
        }
      ],
      "ref": "p22,p23,p24"
    },
    {
      "id": "s21",
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
            "id": "i-chay",
            "t": "text",
            "text": "Ăn chay: đạm từ đậu, hạt",
            "x": 5964,
            "y": 1620,
            "size": 44,
            "at": "l1:vegetarian",
            "hl": [
              {
                "text": "đậu, hạt",
                "at": "l1:tofu"
              }
            ]
          },
          {
            "id": "i-bs",
            "t": "text",
            "text": "Tiểu đường, thận, tim, mang thai: hỏi bác sĩ",
            "x": 5964,
            "y": 1700,
            "size": 32,
            "at": "l2:diabetes",
            "font": "base",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Vegetarian? You can still eat balanced, with protein from beans, tofu and nuts.",
          "sub": "Ăn chay? Vẫn cân bằng được, với đạm từ đậu, đậu phụ, các loại hạt.",
          "keys": [
            "Vẫn cân bằng được"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "With diabetes, kidney or heart disease, pregnancy or a special diet, ask a doctor or dietitian.",
          "sub": "Có tiểu đường, bệnh thận, tim mạch, mang thai hay cần chế độ đặc biệt: hỏi bác sĩ hoặc chuyên gia dinh dưỡng."
        }
      ],
      "ref": "p25"
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
            "text": "Sáng thứ Năm · 7:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "point",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "steaming-bowl",
                "leafy-green"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "dung"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "thao"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09"
                }
              ]
            },
            "at": "l1:same",
            "caption": "Thứ Năm · 7:00 · vẫn quán phở ấy",
            "icon": "steaming-bowl"
          },
          {
            "id": "j-o",
            "t": "text",
            "text": "“Ít bánh, nhiều rau!”",
            "x": 7932,
            "y": 1260,
            "size": 54,
            "at": "l2:fewer noodles",
            "color": "accent",
            "hl": [
              {
                "text": "nhiều rau",
                "at": "l2:more herbs"
              }
            ]
          },
          {
            "id": "j-tt",
            "t": "text",
            "text": "rau: từ trang trí → vai chính",
            "x": 7932,
            "y": 1360,
            "size": 46,
            "at": "l4:star",
            "hl": [
              {
                "text": "vai chính",
                "at": "l4:star"
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
          "say": "Thursday, seven a.m. Same phở stall, same Dũng. Thảo joins him.",
          "sub": "Bảy giờ sáng thứ Năm. Vẫn quán phở ấy, vẫn Dũng ấy. Hôm nay có Thảo đi cùng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Fewer noodles, more herbs, please. Without being asked!",
          "sub": "Ít bánh, nhiều rau nhé. Chẳng cần ai nhắc!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "And plain tea for me. No jellies.",
          "sub": "Còn em trà không đường. Không thạch.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Yesterday herbs were decoration. Today they are the star.",
          "sub": "Hôm qua rau là đồ trang trí. Hôm nay rau là vai chính.",
          "keys": [
            "vai chính"
          ]
        }
      ],
      "ref": "p10,outro"
    },
    {
      "id": "s23",
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
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1430,
            "w": 50,
            "h": 50,
            "at": "l1:half",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1412,
            "size": 62,
            "at": "l1:half+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Rau đã nửa đĩa chưa?",
            "x": 8007,
            "y": 1422,
            "size": 40,
            "at": "l1:half+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1512,
            "w": 50,
            "h": 50,
            "at": "l1:palm",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1494,
            "size": 62,
            "at": "l1:palm+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Đạm cỡ lòng bàn tay",
            "x": 8007,
            "y": 1504,
            "size": 40,
            "at": "l1:palm+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1594,
            "w": 50,
            "h": 50,
            "at": "l2:boiled",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1576,
            "size": 62,
            "at": "l2:boiled+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Luộc, hấp, kho > chiên",
            "x": 8007,
            "y": 1586,
            "size": 40,
            "at": "l2:boiled+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1676,
            "w": 50,
            "h": 50,
            "at": "l2:own bowl",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1658,
            "size": 62,
            "at": "l2:own bowl+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Chấm ra chén riêng",
            "x": 8007,
            "y": 1668,
            "size": 40,
            "at": "l2:own bowl+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1758,
            "w": 50,
            "h": 50,
            "at": "l3:unsweetened",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1740,
            "size": 62,
            "at": "l3:unsweetened+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Đồ uống không đường",
            "x": 8007,
            "y": 1750,
            "size": 40,
            "at": "l3:unsweetened+200"
          },
          {
            "id": "j-bu",
            "t": "text",
            "text": "Trưa lệch thì tối bù",
            "x": 8772,
            "y": 1780,
            "size": 50,
            "at": "l3:dinner",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Take this to every meal: half the plate vegetables, a palm sized portion of protein, moderate rice.",
          "sub": "Mang theo mỗi bữa: rau khoảng nửa đĩa, đạm cỡ lòng bàn tay, cơm bún vừa phải.",
          "keys": [
            "đạm cỡ lòng bàn tay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Boiled, steamed, braised over fried. Sauce in its own bowl.",
          "sub": "Luộc, hấp, kho hơn chiên. Nước chấm ra chén riêng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Unsweetened drinks. And if lunch slips, dinner makes up.",
          "sub": "Đồ uống không đường. Trưa lệch thì tối bù.",
          "keys": [
            "Trưa lệch thì tối bù"
          ]
        }
      ],
      "ref": "p26"
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
          },
          {
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:plate",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:vegetables first",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:whole day",
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
            "x": 2868,
            "y": 160,
            "at": "l1:plate"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6864,
            "y": 690,
            "at": "l2:vegetables first"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1430,
            "at": "l3:whole day"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "d-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l2:vegetables first+400"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức phổ thông; có bệnh, mang thai: hỏi bác sĩ.",
            "x": 7932,
            "y": 1835,
            "size": 24,
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
          "say": "So: just look at the plate. No need to give up Vietnamese food or weigh every gram.",
          "sub": "Tóm lại: chỉ cần nhìn đĩa. Không cần bỏ món Việt quen, không cần cân từng gam.",
          "keys": [
            "nhìn đĩa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Order vegetables first. Less salt, less sugar.",
          "sub": "Gọi rau trước. Bớt mặn, bớt ngọt.",
          "keys": [
            "Gọi rau trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And look at the whole day, not each meal.",
          "sub": "Và nhìn cả ngày, thay vì từng bữa.",
          "keys": [
            "nhìn cả ngày"
          ]
        }
      ],
      "beats": {
        "after": 500
      },
      "ref": "outro"
    },
    {
      "id": "s32",
      "module": "QUIZ-01",
      "ref": "questions[29]",
      "data": {
        "q": "Which quick check can you do at every meal?",
        "options": [
          "Count every calorie with a calculator before you take the first bite",
          "Check that your plate has more meat than anyone else at the table",
          "Look at your plate and see if vegetables fill about half of it"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "fork-and-knife-with-plate",
        "why": "Câu hỏi nhanh nhất: rau đã khoảng nửa đĩa chưa?"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which quick check can you do at every meal?",
          "sub": "Bạn có thể tự kiểm nhanh điều gì ở mỗi bữa ăn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Look at your plate and see if vegetables fill about half of it.",
          "sub": "Nhìn đĩa xem rau đã khoảng một nửa chưa."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Add a palm of protein and moderate rice, and you're close to balanced.",
          "sub": "Thêm đạm cỡ lòng bàn tay, cơm vừa phải là gần cân bằng rồi."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s33",
      "module": "END-05",
      "data": {
        "text": "Trưa nay: gọi rau trước",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today at lunch, order vegetables before meat. Then try the forty questions below.",
          "sub": "Trưa nay, gọi rau trước khi gọi thịt. Rồi thử bốn mươi câu bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
