// Kịch bản video W lần 3 (#110) — "Chất đạm, chất béo, tinh bột: hiểu đúng" · chuỗi "Ăn uống lành mạnh hằng ngày"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "protein-fat-and-carbohydrates-explained--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "healthy-eaters",
    "slug": "protein-fat-and-carbohydrates-explained",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Chất đạm, chất béo, tinh bột: hiểu đúng",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit #144: Đét đứng trái + bảng trắng 10 ô đi theo TUẦN ĐẦU ĐI TẬP của Dũng (thứ Hai 18:30 sân tập “ăn thật nhiều đạm, cho cơm nghỉ hưu” → tối thứ Hai bữa toàn đạm (câu treo) → tối thứ Ba nhà Thảo, bác Bình bỏ cơm, “Khoan đã!” → tinh bột, chất xơ → thứ Tư sân tập: trả lời câu treo, đạm → trưa thứ Năm hộp cơm không dầu của Thảo, chất béo → tối thứ Sáu mâm cơm bà Tư, ba chất phối hợp → sáng thứ Bảy siêu thị, bánh “không đường” → Chủ nhật 18:30 sân tập “cơm đã đi làm lại”). Nhân vật (chuỗi healthy-eaters, w145/_series): Dũng (❓ p12), bác Bình (⚖️ p3), Thảo (🔀 p17), bà Tư (p19, p22–p23). Số liệu: 4 / 4 / 9 kcal mỗi gam (BDA), đường tự do dưới 10% năng lượng (WHO). Ngắt nhịp: BRK-07 câu treo, BRK-04 Cách A/B hộp cơm, BRK-12 “không đường”. Bản cũ (W lần 3, #110): w145/bak/protein-fat-and-carbohydrates-explained--w01.js.",
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
            "text": "4 · 4 · 9",
            "x": 60,
            "y": 110,
            "size": 160,
            "at": "l1:four",
            "color": "accent",
            "hl": [
              {
                "text": "9",
                "at": "l1:nine"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "kcal mỗi gam: đạm · tinh bột · béo",
            "x": 70,
            "y": 330,
            "size": 52,
            "at": "l1:gram"
          },
          {
            "id": "a-x",
            "t": "text",
            "text": "Ta tưởng: có chất là thủ phạm?",
            "x": 70,
            "y": 450,
            "size": 50,
            "at": "l2:villain",
            "color": "muted"
          },
          {
            "id": "a-xx",
            "t": "strike",
            "over": "a-x",
            "at": "l2:enemy+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Four, four, nine. Calories per gram of protein, carbs and fat.",
          "sub": "Bốn, bốn, chín. Số kcal trong mỗi gam đạm, tinh bột và chất béo.",
          "keys": [
            "Bốn, bốn, chín"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet online, one of them is always the villain: starch today, fat tomorrow. Pick your enemy!",
          "sub": "Vậy mà trên mạng, luôn có một chất là thủ phạm: nay tinh bột, mai chất béo. Chọn kẻ thù đi!",
          "keys": [
            "thủ phạm"
          ]
        }
      ],
      "ref": "p1,p2"
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
              "set": "park",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "person-lifting-weights",
                "flexed-biceps"
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
            "caption": "Thứ Hai · 18:30 · sân tập công viên",
            "icon": "person-lifting-weights"
          },
          {
            "id": "a-d",
            "t": "text",
            "text": "“Ăn thật nhiều đạm!”",
            "x": 60,
            "y": 560,
            "size": 56,
            "at": "l3:protein",
            "color": "coral",
            "hl": [
              {
                "text": "thật nhiều đạm",
                "at": "l3:lots of protein"
              }
            ]
          },
          {
            "id": "a-c",
            "t": "text",
            "text": "cơm, rau: cho nghỉ",
            "x": 60,
            "y": 660,
            "size": 52,
            "at": "l3:rice",
            "color": "muted"
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
          "say": "Engineer, iced coffee fan, and as of today, proud gym member.",
          "sub": "Kỹ sư, fan cà phê sữa đá, và từ hôm nay, hội viên phòng tập.",
          "keys": [
            "hội viên phòng tập"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Day one! My friends say: eat lots of protein. Rice and vegetables can retire.",
          "sub": "Ngày đầu tiên! Bạn bảo phải ăn thật nhiều đạm. Cơm với rau cho nghỉ hưu.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rice, retired after one workout. Bold.",
          "sub": "Cho cơm nghỉ hưu sau đúng một buổi tập. Liều thật.",
          "keys": [
            "nghỉ hưu"
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
            "text": "Chất nào mới đáng sợ?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:scary",
            "hl": [
              {
                "text": "đáng sợ",
                "at": "l1:scary"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Đạm (protein) · 4 kcal/g",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:protein"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Bột đường (carbohydrate) · 4 kcal/g",
            "x": 2028,
            "y": 250,
            "size": 50,
            "at": "l2:carbohydrate"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Béo (lipid) · 9 kcal/g",
            "x": 2028,
            "y": 330,
            "size": 50,
            "at": "l3:nine",
            "color": "coral",
            "hl": [
              {
                "text": "9 kcal",
                "at": "l3:nine"
              }
            ]
          },
          {
            "id": "b-x2",
            "t": "text",
            "text": "≈ gấp đôi",
            "x": 2608,
            "y": 330,
            "size": 50,
            "at": "l3:double",
            "color": "coral"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: chất nào xấu?",
            "x": 2908,
            "y": 170,
            "size": 50,
            "at": "l4:which",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l5:good"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: nguồn nào tốt,",
            "x": 2908,
            "y": 260,
            "size": 56,
            "at": "l5:good",
            "color": "accent",
            "hl": [
              {
                "text": "nguồn nào tốt",
                "at": "l5:good"
              }
            ]
          },
          {
            "id": "b-yes2",
            "t": "text",
            "text": "ăn bao nhiêu?",
            "x": 2948,
            "y": 345,
            "size": 56,
            "at": "l5:how much",
            "color": "accent",
            "hl": [
              {
                "text": "bao nhiêu",
                "at": "l5:how much"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Tuần đầu đi tập: 7 ngày",
            "x": 2028,
            "y": 600,
            "size": 46,
            "at": "l6:first week"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 670,
            "w": 200,
            "h": 80,
            "at": "l6:first week+500",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2258,
            "y": 670,
            "w": 200,
            "h": 80,
            "at": "l6:first week+750",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2488,
            "y": 670,
            "w": 200,
            "h": 80,
            "at": "l6:first week+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2718,
            "y": 670,
            "w": 200,
            "h": 80,
            "at": "l6:first week+1250",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2948,
            "y": 670,
            "w": 200,
            "h": 80,
            "at": "l6:first week+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3178,
            "y": 670,
            "w": 200,
            "h": 80,
            "at": "l6:first week+1750",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3408,
            "y": 670,
            "w": 200,
            "h": 80,
            "at": "l6:first week+2000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2",
            "x": 2088,
            "y": 680,
            "size": 46,
            "at": "l6:first week+620"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3",
            "x": 2318,
            "y": 680,
            "size": 46,
            "at": "l6:first week+870"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T4",
            "x": 2548,
            "y": 680,
            "size": 46,
            "at": "l6:first week+1120"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T5",
            "x": 2778,
            "y": 680,
            "size": 46,
            "at": "l6:first week+1370"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T6",
            "x": 3008,
            "y": 680,
            "size": 46,
            "at": "l6:first week+1620"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T7",
            "x": 3238,
            "y": 680,
            "size": 46,
            "at": "l6:first week+1870"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "CN",
            "x": 3468,
            "y": 680,
            "size": 46,
            "at": "l6:first week+2120"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So which one is truly scary?",
          "sub": "Vậy chất nào mới thật sự đáng sợ?",
          "keys": [
            "đáng sợ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Protein and carbohydrate give the body energy: about four kilocalories per gram.",
          "sub": "Đạm và bột đường cho cơ thể năng lượng: mỗi gam khoảng 4 kcal."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fat gives about nine. Nearly double.",
          "sub": "Chất béo khoảng 9, gần gấp đôi.",
          "keys": [
            "gần gấp đôi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But asking which one is bad is the wrong question.",
          "sub": "Nhưng hỏi chất nào xấu là hỏi sai.",
          "keys": [
            "hỏi sai"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Ask instead: which source is good, and how much?",
          "sub": "Hãy hỏi: nguồn nào tốt, ăn bao nhiêu?",
          "keys": [
            "nguồn nào tốt, ăn bao nhiêu"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Dũng's first week of training. Water bottle ready.",
          "sub": "Ta theo tuần đầu đi tập của Dũng. Chuẩn bị chai nước.",
          "keys": [
            "tuần đầu đi tập"
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
            "text": "① Tối thứ Hai · Toàn đạm",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
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
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "poultry-leg",
                "glass-of-milk",
                "flexed-biceps"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-07",
                  "on": "dung",
                  "move": "E-MOVE-09"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-01"
                }
              ]
            },
            "at": "l1:dinner",
            "caption": "20:00 · phòng trọ của Dũng",
            "icon": "poultry-leg"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "3 miếng ức gà",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "l2:three"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "+ bột đạm",
            "x": 3996,
            "y": 260,
            "size": 54,
            "at": "l2:shake"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "cơm, rau: gần như 0",
            "x": 3996,
            "y": 350,
            "size": 54,
            "at": "l2:no rice",
            "color": "coral",
            "hl": [
              {
                "text": "gần như 0",
                "at": "l2:no rice"
              }
            ]
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "Cơ to nhanh hơn?",
            "x": 3996,
            "y": 480,
            "size": 64,
            "at": "l3:faster",
            "color": "accent",
            "hl": [
              {
                "text": "nhanh hơn",
                "at": "l3:faster"
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
          "say": "Monday night. Dũng's dinner looks like a chicken farm.",
          "sub": "Tối thứ Hai. Bữa tối của Dũng trông như trại gà.",
          "keys": [
            "trại gà"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Three chicken breasts, a protein shake, no rice, no greens. Muscles, here I come!",
          "sub": "Ba miếng ức gà, một cốc bột đạm, không cơm, không rau. Cơ bắp ơi, anh tới đây!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Will his muscles grow faster? Hold that thought until Wednesday.",
          "sub": "Ăn vậy cơ có to nhanh hơn không? Giữ câu hỏi đó tới thứ Tư nhé.",
          "keys": [
            "to nhanh hơn"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s04",
      "module": "BRK-07",
      "data": {
        "question": "Ăn đạm thật nhiều, cơ có to nhanh hơn?",
        "illus": "flexed-biceps"
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
          "say": "More protein, faster muscles. Is that true?",
          "sub": "Ăn đạm thật nhiều, cơ to nhanh hơn. Có thật không?",
          "keys": [
            "Có thật không"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p12"
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
            "text": "② Tối thứ Ba · Bỏ cơm?",
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
              "set": "kitchen",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "cross",
                  "face": "stern"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "cooked-rice",
                "prohibited"
              ],
              "camera": [
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
            "at": "l1:dinner",
            "caption": "19:00 · nhà Thảo, Dũng ăn ké",
            "icon": "cooked-rice"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "“Tinh bột gây béo!”",
            "x": 5964,
            "y": 170,
            "size": 56,
            "at": "l3:starch",
            "color": "coral"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "bỏ hẳn cơm, bún",
            "x": 5964,
            "y": 270,
            "size": 52,
            "at": "l3:noodles",
            "color": "muted"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Người bỏ cơm, người bỏ rau",
            "x": 5964,
            "y": 380,
            "size": 42,
            "at": "l4:no greens",
            "hl": [
              {
                "text": "bỏ rau",
                "at": "l4:no greens"
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
          "say": "Tuesday night. Thảo invites Dũng to family dinner.",
          "sub": "Tối thứ Ba. Thảo mời Dũng về nhà ăn cơm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Bác Bình, Thảo's dad, and he has news.",
          "sub": "Đây là bác Bình, bố Thảo, và bác có tin nóng.",
          "keys": [
            "bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Starch makes you fat. No more rice or noodles for me!",
          "sub": "Tinh bột gây béo. Bác bỏ hẳn cơm, bún!",
          "face": "stern",
          "pose": "cross"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One man with no rice, one with no greens. What a table.",
          "sub": "Một người bỏ cơm, một người bỏ rau. Mâm cơm hay ghê.",
          "keys": [
            "Mâm cơm hay ghê"
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
      "ref": "p3"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "kitchen",
        "label": "19:00 · nhà Thảo",
        "actors": [
          {
            "id": "binh",
            "side": "left"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Bỏ hẳn cơm, bún cho khoẻ",
          "why": "Tinh bột là nhiên liệu chính cho não và cơ; bỏ hẳn dễ mệt, khó tập trung, rồi cuối tuần ăn bù.",
          "rule": "Không chất nào là kẻ thù, chỉ có nguồn tốt và lượng vừa"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "binh",
          "say": "From now on, not one grain of rice!",
          "sub": "Từ giờ, một hạt cơm bác cũng không ăn!",
          "face": "stern",
          "pose": "cross",
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
          "say": "Starch fuels brain and muscles. Ban it, you get tired, then binge at the weekend.",
          "sub": "Tinh bột là nhiên liệu chính cho não và cơ. Bỏ hẳn thì mệt, cuối tuần lại ăn bù cả nồi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Weight follows total energy, not one nutrient. Rewind!",
          "sub": "Cân nặng tuỳ tổng năng lượng, không phải một chất. Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "Fine. A bit less white rice, plus whole grains and more vegetables.",
          "sub": "Thôi được. Bớt chút cơm trắng, thêm ngũ cốc nguyên hạt và rau.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "None of them is the enemy. Good sources, sensible amounts.",
          "sub": "Không chất nào là kẻ thù. Chỉ có nguồn tốt và lượng vừa.",
          "phase": "redo",
          "keys": [
            "Không chất nào là kẻ thù"
          ]
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
            "text": "③ Tinh bột: có nên sợ cơm?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:afraid"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Nhiên liệu chính: não và cơ",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l1:main fuel",
            "hl": [
              {
                "text": "Nhiên liệu chính",
                "at": "l1:main fuel"
              }
            ]
          },
          {
            "id": "e-g1",
            "t": "text",
            "text": "• tinh bột: gạo, bún, bánh mì, khoai",
            "x": 7932,
            "y": 250,
            "size": 40,
            "at": "l2:starch"
          },
          {
            "id": "e-g2",
            "t": "text",
            "text": "• đường: trái cây, sữa, bánh kẹo",
            "x": 7932,
            "y": 310,
            "size": 40,
            "at": "l2:sugars"
          },
          {
            "id": "e-g3",
            "t": "text",
            "text": "• chất xơ: rau, đậu, nguyên hạt",
            "x": 7932,
            "y": 370,
            "size": 40,
            "at": "l3:fibre",
            "color": "accent"
          },
          {
            "id": "e-xo",
            "t": "text",
            "text": "Xơ: không tiêu hoá, mà no lâu",
            "x": 8812,
            "y": 160,
            "size": 46,
            "at": "l3:full longer",
            "hl": [
              {
                "text": "no lâu",
                "at": "l3:full longer"
              }
            ]
          },
          {
            "id": "e-ok",
            "t": "text",
            "text": "Ưu tiên: gạo lứt, yến mạch,",
            "x": 8812,
            "y": 260,
            "size": 46,
            "at": "l4:brown rice",
            "color": "accent"
          },
          {
            "id": "e-ok2",
            "t": "text",
            "text": "khoai lang, ngô, đậu",
            "x": 8852,
            "y": 325,
            "size": 46,
            "at": "l4:corn",
            "color": "accent"
          },
          {
            "id": "e-bad",
            "t": "text",
            "text": "Hạn chế: nước ngọt, trà sữa",
            "x": 8812,
            "y": 410,
            "size": 46,
            "at": "l5:soft drinks",
            "color": "coral"
          },
          {
            "id": "e-who",
            "t": "text",
            "text": "WHO: đường tự do < 10% năng lượng",
            "x": 8812,
            "y": 490,
            "size": 42,
            "at": "l5:ten",
            "hl": [
              {
                "text": "< 10%",
                "at": "l5:ten"
              }
            ]
          },
          {
            "id": "e-sw",
            "t": "text",
            "text": "Trộn gạo lứt vào nồi cơm",
            "x": 7932,
            "y": 560,
            "size": 50,
            "at": "l6:mix",
            "color": "accent",
            "hl": [
              {
                "text": "Trộn gạo lứt",
                "at": "l6:mix"
              }
            ]
          },
          {
            "id": "e-sw2",
            "t": "text",
            "text": "Bánh ngọt chiều → khoai lang, chuối",
            "x": 7932,
            "y": 650,
            "size": 46,
            "at": "l6:sweet potato"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: WHO, Healthy diet; NHS, Starchy foods",
            "x": 8812,
            "y": 580,
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
          "say": "So, should we be afraid of rice? Starch is the main fuel for daily life, brain and muscles.",
          "sub": "Vậy có nên sợ cơm? Tinh bột là nhiên liệu chính cho hoạt động hằng ngày, nhất là não và cơ.",
          "keys": [
            "nhiên liệu chính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Carbs include starch in rice, noodles, bread and potatoes, plus sugars in fruit, milk and sweets.",
          "sub": "Bột đường gồm tinh bột trong gạo, bún, phở, bánh mì, khoai; đường trong trái cây, sữa, bánh kẹo."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And fibre. We barely digest it, but it helps digestion and keeps you full longer.",
          "sub": "Và chất xơ. Cơ thể gần như không tiêu hoá nó, nhưng nó giúp tiêu hoá tốt, no lâu.",
          "keys": [
            "no lâu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Choose brown rice, oats, sweet potato, corn and beans.",
          "sub": "Ưu tiên gạo lứt, yến mạch, khoai lang, ngô, đậu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Limit added sugar in soft drinks and milk tea. WHO says free sugars under ten percent of energy.",
          "sub": "Hạn chế đường thêm trong nước ngọt, trà sữa. WHO khuyên đường tự do dưới 10% năng lượng.",
          "keys": [
            "dưới 10%"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Easy swaps: mix brown rice into the pot, and trade the afternoon cake for a sweet potato or banana.",
          "sub": "Đổi dễ: trộn gạo lứt vào nồi cơm, thay bánh ngọt buổi chiều bằng củ khoai lang hay quả chuối.",
          "keys": [
            "trộn gạo lứt"
          ]
        }
      ],
      "ref": "p5,p6,p7,p8"
    },
    {
      "id": "s07b",
      "module": "BRK-05",
      "data": {
        "title": "Đến đây, mình đã biết",
        "points": [
          "Không chất nào là kẻ thù",
          "Tinh bột là nhiên liệu chính",
          "Chất xơ giúp no lâu"
        ],
        "illus": "light-bulb"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Quick recap. No nutrient is the enemy.",
          "sub": "Nhắc nhanh: không chất nào là kẻ thù."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Starch is the main fuel.",
          "sub": "Tinh bột là nhiên liệu chính."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Fibre keeps you full.",
          "sub": "Chất xơ giúp no lâu."
        }
      ],
      "ref": "p4,p5,p6"
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
            "text": "④ Thứ Tư · Đạm: càng nhiều?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:wednesday"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "face": "sad",
                  "pose": "shrug"
                }
              ],
              "props": [
                "person-lifting-weights",
                "tired-face"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-01"
                }
              ]
            },
            "at": "l1:wednesday",
            "caption": "Thứ Tư · 18:30 · sân tập",
            "icon": "tired-face"
          },
          {
            "id": "f-d",
            "t": "text",
            "text": "Đầy bụng, khó đi ngoài, hụt sức",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l2:bloated",
            "color": "coral"
          },
          {
            "id": "f-no",
            "t": "text",
            "text": "Không chắc! Đạm dư không thành cơ",
            "x": 60,
            "y": 1360,
            "size": 46,
            "at": "l3:body uses",
            "color": "accent",
            "hl": [
              {
                "text": "không thành cơ",
                "at": "l3:muscle"
              }
            ]
          },
          {
            "id": "f-why",
            "t": "text",
            "text": "Bỏ cơm, rau: thiếu xơ, thiếu sức",
            "x": 60,
            "y": 1450,
            "size": 46,
            "at": "l4:fibre"
          },
          {
            "id": "f-sp",
            "t": "text",
            "text": "Bột đạm bổ sung: hỏi chuyên gia",
            "x": 60,
            "y": 1540,
            "size": 44,
            "at": "l4:supplements",
            "hl": [
              {
                "text": "hỏi chuyên gia",
                "at": "l4:expert"
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
          "say": "Wednesday at the gym. Remember Monday's question? Here is Dũng's answer, in person.",
          "sub": "Thứ Tư ở sân tập. Nhớ câu hỏi hôm thứ Hai? Câu trả lời đây, bằng xương bằng thịt.",
          "keys": [
            "bằng xương bằng thịt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I'm bloated, I can't go to the toilet, and I have no energy to lift.",
          "sub": "Bụng đầy, khó đi ngoài, mà chẳng còn sức nâng tạ.",
          "face": "sad",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not really faster. The body uses only enough protein. Extra doesn't turn into muscle.",
          "sub": "Không chắc nhanh hơn. Cơ thể chỉ dùng lượng đạm vừa đủ, phần dư không tự thành cơ.",
          "keys": [
            "phần dư không tự thành cơ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No rice or greens means little fibre and little fuel. Want supplements? Ask an expert first.",
          "sub": "Bỏ cơm, rau thì thiếu chất xơ, thiếu năng lượng để tập. Muốn dùng bột đạm, hỏi chuyên gia trước."
        }
      ],
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-job",
            "t": "text",
            "text": "Đạm: xây, sửa cơ, da, tóc, móng",
            "x": 60,
            "y": 1630,
            "size": 44,
            "at": "l1:builds",
            "hl": [
              {
                "text": "xây, sửa",
                "at": "l1:repairs"
              }
            ]
          },
          {
            "id": "f-aa",
            "t": "text",
            "text": "axit amin thiết yếu: phải ăn vào",
            "x": 60,
            "y": 1700,
            "size": 40,
            "at": "l2:amino"
          },
          {
            "id": "f-src2",
            "t": "text",
            "text": "Động vật: cá, thịt, trứng, sữa",
            "x": 900,
            "y": 1775,
            "size": 34,
            "at": "l3:fish"
          },
          {
            "id": "f-src3",
            "t": "text",
            "text": "Thực vật: đậu phụ, đậu, lạc, vừng",
            "x": 900,
            "y": 1818,
            "size": 34,
            "at": "l3:tofu"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Đạm đủ thì khoẻ, dồn thì mệt",
            "x": 60,
            "y": 1790,
            "size": 50,
            "at": "l5:piled",
            "color": "accent",
            "hl": [
              {
                "text": "dồn thì mệt",
                "at": "l5:piled"
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
          "say": "Protein builds and repairs muscle, skin, hair and nails, and makes enzymes, hormones and antibodies.",
          "sub": "Đạm xây và sửa cơ, da, tóc, móng; tạo enzyme, hormone, kháng thể.",
          "keys": [
            "xây và sửa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Some amino acids the body can't make, so they must come from food.",
          "sub": "Có những axit amin cơ thể không tự tạo, phải lấy từ thức ăn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sources: fish, meat, eggs, milk, or tofu, beans, peanuts and sesame. Vegetarians mix beans and grains.",
          "sub": "Nguồn: cá, thịt, trứng, sữa; hoặc đậu phụ, các loại đậu, lạc, vừng. Ăn chay thì kết hợp đậu và ngũ cốc."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Kidney disease? Be careful with protein and follow your doctor.",
          "sub": "Người bệnh thận: thận trọng với lượng đạm, làm theo bác sĩ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Enough protein makes you strong. Piled up protein makes you tired.",
          "sub": "Đạm đủ thì khoẻ, đạm dồn thì mệt.",
          "keys": [
            "Đạm đủ thì khoẻ"
          ]
        }
      ],
      "ref": "p9,p10,p11,p13"
    },
    {
      "id": "s10",
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
            "text": "⑤ Trưa thứ Năm · Chất béo",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
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
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "left"
                }
              ],
              "props": [
                "bento-box",
                "takeout-box"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-09"
                }
              ]
            },
            "at": "l1:thursday",
            "caption": "12:00 · bàn làm việc",
            "icon": "bento-box"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "Luộc hết, không giọt dầu",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:boiled",
            "color": "coral"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "+ sữa chua “ít béo”",
            "x": 2028,
            "y": 1330,
            "size": 50,
            "at": "l2:low fat",
            "color": "coral"
          },
          {
            "id": "g-job",
            "t": "text",
            "text": "Béo: hấp thu A, D, E, K",
            "x": 2028,
            "y": 1410,
            "size": 46,
            "at": "l3:vitamins",
            "hl": [
              {
                "text": "A, D, E, K",
                "at": "l3:vitamins"
              }
            ]
          },
          {
            "id": "g-job2",
            "t": "text",
            "text": "tế bào, năng lượng dự trữ",
            "x": 2028,
            "y": 1480,
            "size": 40,
            "at": "l3:cells"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday lunch. Dũng's desk neighbour Thảo opens a very proud lunchbox.",
          "sub": "Trưa thứ Năm. Thảo, cô bạn bàn bên Dũng, mở hộp cơm đầy tự hào.",
          "keys": [
            "đầy tự hào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Everything boiled, not one drop of oil, and low fat yogurt. I fear fat!",
          "sub": "Luộc hết, không một giọt dầu, thêm sữa chua ít béo. Tớ sợ béo lắm!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But fat helps absorb vitamins A, D, E and K, builds cells, and stores energy.",
          "sub": "Nhưng chất béo giúp hấp thu vitamin A, D, E, K, cấu tạo tế bào, làm năng lượng dự trữ."
        }
      ],
      "ref": "p14,p17"
    },
    {
      "id": "s11",
      "module": "BRK-04",
      "data": {
        "title": "Hộp cơm của Thảo",
        "wrong": "Không giọt dầu, sữa chua “ít béo”",
        "right": "Rau xào chút dầu, cá, vài hạt lạc",
        "wrongIllus": "anxious-face-with-sweat",
        "rightIllus": "fish",
        "labels": [
          "Cách A",
          "Cách B"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Plan A: no oil, low fat everything.",
          "sub": "Cách A: không dầu, cái gì cũng ít béo."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Plan B: a little oil, fish, a few peanuts.",
          "sub": "Cách B: chút dầu, cá, vài hạt lạc.",
          "keys": [
            "chút dầu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s12",
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
            "at": "l4",
            "fit": [
              "g-3"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l5",
            "fit": "G",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "g-sc",
            "t": "text",
            "text": "A: nhạt, khó hấp thu vitamin",
            "x": 2868,
            "y": 1775,
            "size": 36,
            "at": "l1:bland",
            "color": "muted"
          },
          {
            "id": "g-sc2",
            "t": "text",
            "text": "sữa chua ít béo: nhiều đường?",
            "x": 2868,
            "y": 1818,
            "size": 36,
            "at": "l1:yogurt",
            "color": "coral"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Không bão hoà: dầu, cá béo, hạt → ưu tiên",
            "x": 2028,
            "y": 1560,
            "size": 34,
            "at": "l3:unsaturated",
            "font": "base",
            "color": "accent"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Bão hoà: mỡ, bơ, nước cốt dừa → hạn chế",
            "x": 2028,
            "y": 1610,
            "size": 34,
            "at": "l3:saturated",
            "font": "base"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Chuyển hoá: bơ cứng, bánh quy → tránh",
            "x": 2028,
            "y": 1660,
            "size": 34,
            "at": "l4:trans",
            "font": "base",
            "color": "coral"
          },
          {
            "id": "g-tip",
            "t": "text",
            "text": "Luộc, hấp, kho; không dùng lại dầu chiên",
            "x": 2028,
            "y": 1710,
            "size": 30,
            "at": "l5:reuse",
            "font": "base"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Sợ béo quá hoá ra ăn ngọt",
            "x": 2028,
            "y": 1780,
            "size": 56,
            "at": "l6:sweets",
            "color": "accent",
            "hl": [
              {
                "text": "ăn ngọt",
                "at": "l6:sweets"
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
          "say": "Plan A tastes bland, and some low fat yogurt hides quite a lot of added sugar.",
          "sub": "Cách A nhạt, khó hấp thu vitamin; sữa chua ít béo có khi thêm khá nhiều đường."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Plan B tastes better, with good fat, and fewer sugar cravings at night.",
          "sub": "Cách B ngon hơn, có chất béo tốt, tối cũng ít thèm ngọt hơn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Prefer unsaturated fat: vegetable oils, oily fish, nuts. Limit saturated: lard, butter, coconut cream.",
          "sub": "Ưu tiên béo không bão hoà: dầu thực vật, cá béo, các loại hạt. Hạn chế bão hoà: mỡ, bơ, nước cốt dừa."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Avoid trans fat: hard margarine, some biscuits, factory fried food. It's linked to heart disease.",
          "sub": "Tránh béo chuyển hoá: bơ thực vật cứng, một số bánh quy, đồ chiên công nghiệp; liên quan bệnh tim mạch.",
          "keys": [
            "Tránh béo chuyển hoá"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "At home: boil, steam, braise, grill. Never reuse frying oil again and again.",
          "sub": "Ở bếp: luộc, hấp, kho, nướng; không dùng lại dầu đã chiên nhiều lần."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Fear fat too much, and you end up eating sweets.",
          "sub": "Sợ béo quá hoá ra ăn ngọt.",
          "keys": [
            "Sợ béo quá hoá ra ăn ngọt"
          ]
        }
      ],
      "ref": "p15,p16,p17,p18"
    },
    {
      "id": "s13",
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
            "text": "⑥ Tối thứ Sáu · Mâm cơm",
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
              "set": "home",
              "actors": [
                {
                  "id": "tu",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "cooked-rice",
                "fish",
                "leafy-green"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "tu"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-09"
                }
              ]
            },
            "at": "l1:friday",
            "caption": "19:00 · nhà Dũng",
            "icon": "pot-of-food"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Cơm → tinh bột",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l3:rice"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Cá kho → đạm + béo",
            "x": 3996,
            "y": 1340,
            "size": 50,
            "at": "l3:fish"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Rau luộc → chất xơ",
            "x": 3996,
            "y": 1420,
            "size": 50,
            "at": "l3:greens"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Dầu xào rau → béo",
            "x": 3996,
            "y": 1500,
            "size": 50,
            "at": "l3:oil"
          },
          {
            "id": "h-no",
            "t": "text",
            "text": "Ăn kèm → tinh bột hấp thu chậm",
            "x": 3996,
            "y": 1600,
            "size": 44,
            "at": "l4:slower",
            "hl": [
              {
                "text": "chậm",
                "at": "l4:slower"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Đa dạng > một món đơn lẻ",
            "x": 3996,
            "y": 1780,
            "size": 56,
            "at": "l5:variety",
            "color": "accent",
            "hl": [
              {
                "text": "Đa dạng",
                "at": "l5:variety"
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
          "say": "Friday night at home. This is Bà Tư, Dũng's grandma, head chef and rice defender.",
          "sub": "Tối thứ Sáu ở nhà. Đây là bà Tư, bà nội Dũng, bếp trưởng kiêm người bảo vệ nồi cơm.",
          "keys": [
            "người bảo vệ nồi cơm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "tu",
          "say": "Rice, braised fish, boiled greens. Eat, my boy. Chicken alone won't make you strong.",
          "sub": "Cơm, cá kho, rau luộc. Ăn đi cháu. Toàn ức gà thì khoẻ sao được.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Grandma's tray has all three: rice for starch, fish for protein and fat, greens for fibre, oil in the stir fry.",
          "sub": "Mâm bà có đủ ba: cơm là tinh bột, cá kho là đạm và béo, rau là chất xơ, chút dầu xào rau là béo."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Eaten together, starch is absorbed slower, so you stay full longer than with plain rice alone.",
          "sub": "Ăn kèm đạm, béo, chất xơ, tinh bột hấp thu chậm hơn, no lâu hơn một bát cơm trắng không.",
          "keys": [
            "no lâu hơn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That's why variety beats a single food.",
          "sub": "Vì thế bữa đa dạng thường tốt hơn một món đơn lẻ.",
          "keys": [
            "đa dạng"
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
            "text": "⑦ Sáng thứ Bảy · “Không đường”",
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
              "set": "shop",
              "actors": [
                {
                  "id": "tu",
                  "side": "left",
                  "pose": "give",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "point"
                }
              ],
              "props": [
                "cookie",
                "shopping-cart"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "tu"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "dung"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09"
                }
              ]
            },
            "at": "l1:saturday",
            "caption": "9:00 · siêu thị",
            "icon": "shopping-cart"
          },
          {
            "id": "i-kd",
            "t": "text",
            "text": "không đường",
            "x": 5964,
            "y": 1260,
            "size": 80,
            "at": "l2:sugar free",
            "color": "coral"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "→ vẫn bột và dầu",
            "x": 5964,
            "y": 1380,
            "size": 50,
            "at": "l3:flour"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1490,
            "w": 50,
            "h": 50,
            "at": "l4:turn",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1472,
            "size": 62,
            "at": "l4:turn+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Lật mặt sau",
            "x": 6039,
            "y": 1482,
            "size": 40,
            "at": "l4:turn+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1570,
            "w": 50,
            "h": 50,
            "at": "l4:serving",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1552,
            "size": 62,
            "at": "l4:serving+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Khẩu phần: gói nhỏ hay cả hộp?",
            "x": 6039,
            "y": 1562,
            "size": 40,
            "at": "l4:serving+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1650,
            "w": 50,
            "h": 50,
            "at": "l5:energy",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1632,
            "size": 62,
            "at": "l5:energy+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Năng lượng, béo, tinh bột",
            "x": 6039,
            "y": 1642,
            "size": 40,
            "at": "l5:energy+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1730,
            "w": 50,
            "h": 50,
            "at": "l5:decide",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1712,
            "size": 62,
            "at": "l5:decide+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Ăn bao nhiêu: như bánh thường",
            "x": 6039,
            "y": 1722,
            "size": 40,
            "at": "l5:decide+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Saturday morning, supermarket. Grandma finds a treasure.",
          "sub": "Sáng thứ Bảy, siêu thị. Bà nội tìm được báu vật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "tu",
          "say": "Sugar free biscuits! I can eat as many as I like.",
          "sub": "Bánh quy không đường! Ăn bao nhiêu cũng được.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Let's turn it over first, Grandma. They're still made of flour and oil.",
          "sub": "Bà lật mặt sau xem đã. Bánh vẫn làm từ bột và dầu ạ.",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Turn the pack over, skip the big front words. Check the serving: one small pack, or the whole box?",
          "sub": "Lật mặt sau, đừng dừng ở chữ to mặt trước. Xem khẩu phần: một gói nhỏ hay cả hộp?",
          "keys": [
            "Xem khẩu phần"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then energy, fat and starch. Often barely lower than normal biscuits. Then decide how much to eat.",
          "sub": "Rồi năng lượng, chất béo, tinh bột: có khi chẳng thấp hơn bánh thường là mấy. Rồi quyết định ăn bao nhiêu."
        }
      ],
      "ref": "p22,p23"
    },
    {
      "id": "s15",
      "module": "BRK-12",
      "data": {
        "word": "không đường",
        "sub": "Không đường, không có nghĩa là không giới hạn",
        "from": [
          470,
          360
        ],
        "others": [
          "bột",
          "dầu",
          "khẩu phần"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Sugar free.",
          "sub": "Không đường."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Sugar free does not mean no limit.",
          "sub": "Không đường, không có nghĩa là không giới hạn.",
          "keys": [
            "không giới hạn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh",
          "offsetMs": 300
        }
      ],
      "ref": "p24"
    },
    {
      "id": "s16",
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
            "id": "i-myth",
            "t": "text",
            "text": "“Ăn tinh bột gây béo”",
            "x": 6804,
            "y": 1780,
            "size": 48,
            "at": "l1:makes you fat",
            "color": "muted"
          },
          {
            "id": "i-mythx",
            "t": "strike",
            "over": "i-myth",
            "at": "l1:total"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Same with that internet line, starch makes you fat. Weight follows total energy in and out.",
          "sub": "Câu “ăn tinh bột gây béo” cũng vậy: cân nặng theo tổng năng lượng ăn vào và tiêu hao.",
          "keys": [
            "tổng năng lượng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The amount and the type of starch are what matter.",
          "sub": "Lượng và loại tinh bột mới là điều đáng để ý."
        }
      ],
      "ref": "p21"
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
            "text": "Chủ nhật · 18:30 · sân tập",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:sunday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "bento-box",
                "flexed-biceps"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "E-MOVE-01"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-01"
                }
              ]
            },
            "at": "l1:sunday",
            "caption": "Chủ nhật · cùng sân tập, khác hộp cơm",
            "icon": "bento-box"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1260,
            "w": 50,
            "h": 50,
            "at": "l3:palm",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1242,
            "size": 62,
            "at": "l3:palm+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Đạm cỡ lòng bàn tay",
            "x": 8007,
            "y": 1252,
            "size": 44,
            "at": "l3:palm+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1345,
            "w": 50,
            "h": 50,
            "at": "l3:vegetables",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1327,
            "size": 62,
            "at": "l3:vegetables+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Rau nhiều nhất",
            "x": 8007,
            "y": 1337,
            "size": 44,
            "at": "l3:vegetables+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1430,
            "w": 50,
            "h": 50,
            "at": "l4:moderate",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1412,
            "size": 62,
            "at": "l4:moderate+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Tinh bột vừa, nguyên hạt",
            "x": 8007,
            "y": 1422,
            "size": 44,
            "at": "l4:moderate+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1515,
            "w": 50,
            "h": 50,
            "at": "l4:oil",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1497,
            "size": 62,
            "at": "l4:oil+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Dầu mỡ vừa đủ nấu",
            "x": 8007,
            "y": 1507,
            "size": 44,
            "at": "l4:oil+200"
          },
          {
            "id": "j-k",
            "t": "text",
            "text": "Cơm đã đi làm lại!",
            "x": 7932,
            "y": 1620,
            "size": 54,
            "at": "l5:back to work",
            "color": "accent",
            "hl": [
              {
                "text": "đi làm lại",
                "at": "l5:back to work"
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
          "say": "Sunday, six thirty. Same gym, same Dũng. A different lunchbox.",
          "sub": "Chủ nhật, sáu rưỡi. Vẫn sân tập ấy, vẫn Dũng ấy. Hộp cơm thì khác.",
          "keys": [
            "Hộp cơm thì khác"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Rice, fish, plenty of greens. And I can lift again!",
          "sub": "Cơm, cá, nhiều rau. Và mình lại nâng tạ được rồi!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No gram counting: a palm sized piece of protein each meal, vegetables the biggest part.",
          "sub": "Không cần đếm gam: mỗi bữa một phần đạm cỡ lòng bàn tay, rau chiếm nhiều nhất.",
          "keys": [
            "cỡ lòng bàn tay"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Moderate starch, whole grain first, and just enough oil to cook.",
          "sub": "Tinh bột vừa phải, ưu tiên nguyên hạt, dầu mỡ vừa đủ nấu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Monday, rice retired. Sunday, rice is back to work.",
          "sub": "Thứ Hai, cơm bị cho nghỉ hưu. Chủ nhật, cơm đã đi làm lại.",
          "keys": [
            "cơm đã đi làm lại"
          ]
        }
      ],
      "ref": "p25"
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
            "at": "l1:enemy",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:enough",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:sweets",
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
            "x": 2828,
            "y": 260,
            "at": "l1:enemy"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 700,
            "y": 1780,
            "at": "l2:enough"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1780,
            "at": "l3:sweets"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "g-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:sweets+300"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Vận động viên, mang thai, người cao tuổi, có bệnh: nhờ bác sĩ tư vấn riêng.",
            "x": 7932,
            "y": 1790,
            "size": 26,
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
          "say": "So: no nutrient is the enemy. Ask about source and amount.",
          "sub": "Tóm lại: không chất nào là kẻ thù. Hãy hỏi nguồn và lượng.",
          "keys": [
            "không chất nào là kẻ thù"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Protein: enough, not piled up.",
          "sub": "Đạm: đủ, không dồn.",
          "keys": [
            "đủ, không dồn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fat: good kinds, not zero, or you swap it for sweets.",
          "sub": "Béo: chọn loại tốt, đừng về không, kẻo lại đổi sang ăn ngọt.",
          "keys": [
            "chọn loại tốt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Athletes, pregnant women, older people, or diabetes, gout, kidney disease? Ask a doctor or dietitian.",
          "sub": "Vận động viên, phụ nữ mang thai, người cao tuổi, người có tiểu đường, gout, bệnh thận: hỏi bác sĩ hoặc chuyên gia dinh dưỡng."
        }
      ],
      "beats": {
        "after": 500
      },
      "ref": "p26,outro"
    },
    {
      "id": "s32",
      "module": "QUIZ-01",
      "ref": "questions[22]",
      "data": {
        "q": "In a meal of rice, braised fish and boiled greens, where do the nutrients come from?",
        "options": [
          "Only the fish has nutrients, the rice and vegetables are just for taste",
          "Rice gives carbohydrates, fish gives protein and fat, and greens give fiber",
          "The greens give all the protein, while the fish gives only fiber"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "bento-box",
        "why": "Cơm là tinh bột, cá kho là đạm và béo, rau luộc là chất xơ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In a meal of rice, braised fish and boiled greens, where do the nutrients come from?",
          "sub": "Bữa có cơm, cá kho, rau luộc: các chất đến từ đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Rice gives carbohydrates, fish gives protein and fat, and greens give fiber.",
          "sub": "Cơm cho tinh bột, cá cho đạm và béo, rau cho chất xơ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A typical Vietnamese meal already has all three.",
          "sub": "Bữa cơm Việt điển hình đã có đủ cả ba."
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
        "text": "Bốn mươi câu về đạm, béo, tinh bột",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "At your next meal, point out the protein, fat and starch on your plate.",
          "sub": "Bữa tới, chỉ ra đâu là đạm, béo, tinh bột trên đĩa nhé."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s17"
  }
};
