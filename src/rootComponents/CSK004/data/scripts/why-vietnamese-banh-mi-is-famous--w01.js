// Kịch bản video W lần 3 (#110) — "Bánh mì Việt Nam nổi tiếng thế giới vì sao?" · chuỗi "Món Việt nổi tiếng thế giới"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "why-vietnamese-banh-mi-is-famous--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "vietnamese-food-lovers",
    "slug": "why-vietnamese-banh-mi-is-famous",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Bánh mì Việt Nam nổi tiếng thế giới vì sao?",
    "series": "Món Việt nổi tiếng thế giới"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN Ở QUẦY BÁNH MÌ CÔ HOA (7:00 T2 “because it's delicious?” → T2 khách đối tác kiêng gluten + “Khoan đã!” bột gạo → T3 trong ổ có gì → T4 gọi nhân → T5 ổ bánh trong cốp xe → T6 bữa sáng hai cách → T7 Sam tập kể, mỗi vùng một kiểu → tối CN ghi chú → 7:00 T2 tuần sau). Nhân vật (w145/_series/vietnamese-food-lovers.md): Thảo (“bạn” p5, p18), Sam (người bạn nước ngoài ở mở bài, p18; hỏi hộ vị khách đối tác kiêng gluten p5 — khách không lên hình, không tên), cô Hoa (người bán, câu ngắn; ở lần tua lại DLG nói “bột mì là chính” đúng p5). Cảnh ngắt nhịp: BRK-08 (baguette Pháp → tay người Việt → sau 1975 → 2011), BRK-04 (Sai/Đúng: tinh bột xấu → sửa cái nhân), BRK-07 (rehook: phần ngọt nhất bữa sáng). Số chỉ từ bài: 2011 (QĐND), 1975. Khép vòng: “Ăn quả nhớ kẻ trồng cây” → ăn bánh nhớ hỏi người bán. Lưu ý chung cuối bài (#133). Bản cũ: w145/bak/why-vietnamese-banh-mi-is-famous--w01.js.",
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
            "text": "2011",
            "x": 70,
            "y": 60,
            "size": 230,
            "at": "l1:Twenty",
            "color": "accent",
            "hl": [
              {
                "text": "2011",
                "at": "l1:eleven"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "“banh mi” vào từ điển Oxford",
            "x": 80,
            "y": 365,
            "size": 52,
            "at": "l1:Oxford",
            "hl": [
              {
                "text": "từ điển Oxford",
                "at": "l1:Dictionary"
              }
            ]
          },
          {
            "id": "a-del",
            "t": "text",
            "text": "Ta tưởng: chỉ vì ngon?",
            "x": 70,
            "y": 470,
            "size": 52,
            "at": "l2:delicious",
            "color": "muted"
          },
          {
            "id": "a-delx",
            "t": "strike",
            "over": "a-del",
            "at": "l2:crust"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: QĐND, 2011",
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
          "say": "Twenty eleven. “Banh mi” enters the Oxford English Dictionary. A sandwich, in the big book.",
          "sub": "Năm 2011, “banh mi” vào Từ điển tiếng Anh Oxford. Một ổ bánh, vào hẳn sách to.",
          "keys": [
            "Từ điển tiếng Anh Oxford"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Why? Just because it's delicious? That's only the crust of the answer.",
          "sub": "Vì sao? Chỉ vì ngon à? Đó mới là… lớp vỏ của câu trả lời.",
          "keys": [
            "lớp vỏ của câu trả lời"
          ]
        }
      ],
      "ref": "p3,intro"
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
              "set": "shop",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "sam",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                }
              ],
              "props": [
                "baguette-bread",
                "seven-oclock"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "7:00 thứ Hai · quầy bánh mì cô Hoa",
            "icon": "baguette-bread"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Ăn quả nhớ kẻ trồng cây”",
            "x": 60,
            "y": 560,
            "size": 52,
            "at": "l5:fruit",
            "color": "accent",
            "hl": [
              {
                "text": "kẻ trồng cây",
                "at": "l5:planted"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "→ ai “trồng” ổ bánh này?",
            "x": 100,
            "y": 650,
            "size": 44,
            "at": "l6:loaf",
            "color": "coral",
            "hl": [
              {
                "text": "ổ bánh",
                "at": "l6:loaf"
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
          "say": "Meet Thảo, and Sam, her colleague from abroad, at a banh mi stall, seven a.m.",
          "sub": "Đây là Thảo, và Sam, đồng nghiệp nước ngoài, ở quầy bánh mì lúc bảy giờ sáng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Cô Hoa, the stall owner, queen of the bread knife.",
          "sub": "Còn đây là cô Hoa, chủ quầy, nữ hoàng con dao xẻ bánh.",
          "keys": [
            "nữ hoàng con dao xẻ bánh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Mmm! Why is banh mi so famous?",
          "sub": "Ừm! Sao bánh mì nổi tiếng thế?",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Because... it's delicious?",
          "sub": "Vì… nó ngon?",
          "face": "thinking",
          "pose": "shrug"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: when you eat the fruit, remember who planted the tree.",
          "sub": "Ông bà dặn: “Ăn quả nhớ kẻ trồng cây.”",
          "keys": [
            "Ăn quả nhớ kẻ trồng cây"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "So who planted this loaf? Let's dig in.",
          "sub": "Vậy ai “trồng” ra ổ bánh này? Đào thử xem."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        },
        {
          "at": "l2",
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
            "text": "Vì sao cả thế giới nhắc tên?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:sandwich",
            "hl": [
              {
                "text": "nhắc tên",
                "at": "l1:know"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Vỏ mỏng giòn, ruột xốp nhẹ",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:crust",
            "color": "accent",
            "hl": [
              {
                "text": "Vỏ mỏng giòn",
                "at": "l2:crispy"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Nhân béo, mặn, chua, cay, thơm",
            "x": 2028,
            "y": 255,
            "size": 46,
            "at": "l3:rich"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Rẻ, nhanh, cầm tay đi được",
            "x": 2028,
            "y": 335,
            "size": 50,
            "at": "l4:cheap",
            "color": "accent",
            "hl": [
              {
                "text": "cầm tay đi được",
                "at": "l4:walks"
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
          "say": "So why does the whole world know one sandwich?",
          "sub": "Vậy vì sao cả thế giới biết tên một ổ bánh mì?",
          "keys": [
            "cả thế giới biết tên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A rare combo. A thin, crispy crust and a light, airy inside.",
          "sub": "Một sự kết hợp hiếm có. Vỏ mỏng giòn, ruột xốp nhẹ.",
          "keys": [
            "Vỏ mỏng giòn, ruột xốp nhẹ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fillings rich and salty sweet, sour and crunchy from pickles, fragrant with coriander and chilli.",
          "sub": "Nhân vừa béo, mặn ngọt, chua giòn nhờ đồ chua, thơm rau mùi, ớt."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And it's cheap, quick, and it walks with you.",
          "sub": "Lại rẻ, làm nhanh, cầm tay đi được.",
          "keys": [
            "cầm tay đi được"
          ]
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Ổ bánh đi vòng quanh thế giới",
        "points": [
          {
            "label": "Thời thuộc địa",
            "sub": "Pháp đưa baguette vào",
            "illus": "baguette-bread"
          },
          {
            "label": "Tay người Việt",
            "sub": "Ổ ngắn, vỏ mỏng, nhồi nhân",
            "illus": "sandwich"
          },
          {
            "label": "Sau 1975",
            "sub": "Tiệm bánh ở nước ngoài",
            "illus": "airplane"
          },
          {
            "label": "2011",
            "sub": "Vào từ điển Oxford",
            "illus": "open-book"
          }
        ],
        "current": 3
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A French baguette, then a Vietnamese makeover.",
          "sub": "Baguette Pháp, rồi được người Việt “lột xác”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Abroad after 1975, Oxford in 2011.",
          "sub": "Ra nước ngoài sau 1975, vào Oxford năm 2011.",
          "keys": [
            "vào Oxford năm 2011"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p2,p3"
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
          }
        ],
        "items": [
          {
            "id": "b-fr",
            "t": "text",
            "text": "Pháp: ổ baguette dài",
            "x": 2928,
            "y": 170,
            "size": 48,
            "at": "l1:French"
          },
          {
            "id": "b-vn",
            "t": "text",
            "text": "Việt: ổ ngắn, vỏ mỏng",
            "x": 2928,
            "y": 245,
            "size": 48,
            "at": "l2:shorter",
            "color": "accent",
            "hl": [
              {
                "text": "vỏ mỏng",
                "at": "l2:thinner"
              }
            ]
          },
          {
            "id": "b-me",
            "t": "text",
            "text": "→ thành một bữa trọn vẹn",
            "x": 2958,
            "y": 320,
            "size": 42,
            "at": "l2:meal",
            "hl": [
              {
                "text": "bữa trọn vẹn",
                "at": "l2:full meal"
              }
            ]
          },
          {
            "id": "b-75",
            "t": "text",
            "text": "Sau 1975: tiệm ở nước ngoài",
            "x": 2928,
            "y": 400,
            "size": 42,
            "at": "l3:after"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Một tuần ở quầy cô Hoa",
            "x": 2028,
            "y": 545,
            "size": 50,
            "at": "l4:week",
            "hl": [
              {
                "text": "Một tuần",
                "at": "l4:week"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 640,
            "w": 240,
            "h": 90,
            "at": "l4:stops+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 640,
            "w": 240,
            "h": 90,
            "at": "l4:stops+550",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 640,
            "w": 240,
            "h": 90,
            "at": "l4:stops+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 640,
            "w": 240,
            "h": 90,
            "at": "l4:stops+1050",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 640,
            "w": 240,
            "h": 90,
            "at": "l4:stops+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 640,
            "w": 240,
            "h": 90,
            "at": "l4:stops+1550",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2",
            "x": 2098,
            "y": 653,
            "size": 48,
            "at": "l4:stops+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3",
            "x": 2368,
            "y": 653,
            "size": 48,
            "at": "l4:stops+670"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T4",
            "x": 2638,
            "y": 653,
            "size": 48,
            "at": "l4:stops+920"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T5",
            "x": 2908,
            "y": 653,
            "size": 48,
            "at": "l4:stops+1170"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T6",
            "x": 3178,
            "y": 653,
            "size": 48,
            "at": "l4:stops+1420"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T7",
            "x": 3448,
            "y": 653,
            "size": 48,
            "at": "l4:stops+1670"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The French brought the long baguette in colonial times.",
          "sub": "Người Pháp đưa ổ baguette dài vào thời thuộc địa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Vietnamese bakers made it shorter, with a thinner crust, then stuffed it into a full meal.",
          "sub": "Người Việt làm ổ ngắn hơn, vỏ mỏng hơn, rồi nhồi nhân thành một bữa ăn trọn vẹn.",
          "keys": [
            "bữa ăn trọn vẹn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "After 1975, Vietnamese bakeries abroad won over the locals, one loaf at a time.",
          "sub": "Sau 1975, tiệm bánh mì của người Việt ở nước ngoài chinh phục người bản xứ, từng ổ một."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Now, one week at Cô Hoa's stall, in six stops.",
          "sub": "Giờ theo một tuần ở quầy cô Hoa, sáu chặng.",
          "keys": [
            "một tuần ở quầy cô Hoa"
          ]
        }
      ],
      "ref": "p2,p3"
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
            "text": "① T2 · Khách kiêng gluten",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:partner"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "phone",
                  "face": "thinking"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "baguette-bread",
                "sheaf-of-rice"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:question",
            "caption": "Thứ Hai · mua bánh cho đối tác",
            "icon": "sheaf-of-rice"
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "“Kiêng gluten, ăn được không?”",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l2:gluten",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Monday. Sam is buying breakfast for a visiting partner, and has a question.",
          "sub": "Chặng một: thứ Hai. Sam mua bữa sáng cho một vị khách đối tác, và có một câu hỏi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Our partner can't eat gluten. Is this bread okay for her?",
          "sub": "Vị khách của mình phải kiêng gluten. Bánh này cô ấy ăn được không?",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo has heard something. Something about rice flour.",
          "sub": "Thảo từng nghe một điều. Điều gì đó về bột gạo."
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "shop",
        "label": "Thứ Hai · quầy cô Hoa",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "sam",
            "side": "center"
          },
          {
            "id": "hoa",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đoán “bột gạo nên ăn được”",
          "why": "Phần lớn lò bánh dùng bột mì là chính, mà bột mì có gluten; nhân, nước tương cũng có thể có thứ khách cần kiêng.",
          "rule": "Khách có kiêng, hỏi người bán, đừng đoán"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "It's rice flour, so it's light. She'll be fine!",
          "sub": "Bột gạo nên nhẹ lắm. Cô ấy ăn được!",
          "face": "happy",
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
          "say": "Most bakeries mainly use wheat flour, and wheat has gluten.",
          "sub": "Phần lớn lò bánh dùng bột mì là chính, mà bột mì có gluten.",
          "keys": [
            "bột mì có gluten"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Cô Hoa, our guest avoids gluten. What's in the bread and filling?",
          "sub": "Cô Hoa ơi, khách cháu kiêng gluten. Bánh với nhân có gì ạ?",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Mostly wheat flour, dear. And soy sauce in the filling.",
          "sub": "Bột mì là chính cháu ạ. Nhân có cả nước tương.",
          "phase": "redo",
          "pose": "hold"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "The one who makes the food knows best.",
          "sub": "Người làm ra món ăn là người biết rõ nhất.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "biết rõ nhất"
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
      "id": "s07",
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
            "id": "c-my",
            "t": "text",
            "text": "Ruột xốp nhờ bột gạo",
            "x": 3996,
            "y": 270,
            "size": 48,
            "at": "l1:rice",
            "color": "muted"
          },
          {
            "id": "c-myx",
            "t": "strike",
            "over": "c-my",
            "at": "l1:wheat"
          },
          {
            "id": "c-wh",
            "t": "text",
            "text": "Chủ yếu bột mì",
            "x": 3996,
            "y": 355,
            "size": 56,
            "at": "l1:wheat",
            "color": "accent",
            "hl": [
              {
                "text": "bột mì",
                "at": "l1:wheat"
              }
            ]
          },
          {
            "id": "c-how",
            "t": "text",
            "text": "Xốp nhờ công thức, ủ, nướng",
            "x": 3996,
            "y": 440,
            "size": 44,
            "at": "l2:recipe"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Khách kiêng: hỏi người bán",
            "x": 3996,
            "y": 540,
            "size": 54,
            "at": "l3:seller",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi người bán",
                "at": "l3:seller"
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
          "say": "Many believe banh mi is soft because of rice flour. Mostly, it's wheat flour.",
          "sub": "Nhiều người tin ruột bánh xốp nhờ bột gạo. Thực ra chủ yếu là bột mì.",
          "keys": [
            "chủ yếu là bột mì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The softness comes from the recipe, the rising, and the baking.",
          "sub": "Độ xốp nhờ công thức, cách ủ và nướng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So if a guest avoids something, ask the seller. Don't guess.",
          "sub": "Vậy khách có kiêng, hỏi người bán, đừng đoán.",
          "keys": [
            "hỏi người bán, đừng đoán"
          ]
        }
      ],
      "ref": "p4,p6"
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② T3 · Trong ổ có gì?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:detective"
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
                  "id": "sam",
                  "side": "left",
                  "face": "surprised",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "sandwich",
                "egg"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:loaf",
            "caption": "Thứ Ba · bữa sáng ở công ty",
            "icon": "sandwich"
          },
          {
            "id": "d-bo",
            "t": "text",
            "text": "“Bơ” = sốt trứng",
            "x": 5964,
            "y": 170,
            "size": 56,
            "at": "l3:egg",
            "color": "accent",
            "hl": [
              {
                "text": "sốt trứng",
                "at": "l3:egg sauce"
              }
            ]
          },
          {
            "id": "d-nb",
            "t": "text",
            "text": "không phải butter",
            "x": 6004,
            "y": 255,
            "size": 44,
            "at": "l3:butter",
            "color": "coral"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Pa tê gan, thịt nguội, chả lụa",
            "x": 5964,
            "y": 345,
            "size": 42,
            "at": "l4:pâté"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "xá xíu hoặc thịt nướng",
            "x": 6004,
            "y": 405,
            "size": 40,
            "at": "l4:grilled"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Đồ chua cà rốt, củ cải",
            "x": 5964,
            "y": 470,
            "size": 42,
            "at": "l5:pickled"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "dưa leo, rau mùi, ớt, nước tương",
            "x": 6004,
            "y": 530,
            "size": 38,
            "at": "l5:cucumber"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Tuesday. Sam opens his loaf like a detective.",
          "sub": "Chặng hai: thứ Ba. Sam mở ổ bánh ra soi như thám tử.",
          "keys": [
            "như thám tử"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "This butter tastes... like mayonnaise?",
          "sub": "“Bơ” này vị… giống mayonnaise?",
          "face": "surprised",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "It's an egg sauce, not butter. We just call it bơ.",
          "sub": "Đó là sốt trứng, không phải butter. Bọn mình gọi là “bơ” thôi.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A classic has liver pâté, cold cuts or Vietnamese pork roll, char siu or grilled pork.",
          "sub": "Ổ truyền thống có pa tê gan, thịt nguội hoặc chả lụa, xá xíu hoặc thịt nướng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Plus pickled carrot and daikon, cucumber, coriander, onion, chilli, and a few drops of soy sauce.",
          "sub": "Thêm đồ chua cà rốt, củ cải, dưa leo, rau mùi, hành, ớt, vài giọt nước tương.",
          "keys": [
            "đồ chua cà rốt, củ cải"
          ]
        }
      ],
      "ref": "p7"
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
            "id": "d-m",
            "t": "text",
            "text": "Tinh bột · đạm · béo · rau ít",
            "x": 5964,
            "y": 620,
            "size": 42,
            "at": "l1:starch",
            "hl": [
              {
                "text": "rau ít",
                "at": "l2:smallest"
              }
            ]
          },
          {
            "id": "d-s",
            "t": "text",
            "text": "Muối: thịt nguội, chả, pa tê",
            "x": 6804,
            "y": 700,
            "size": 42,
            "at": "l2:salt",
            "color": "coral",
            "hl": [
              {
                "text": "Muối",
                "at": "l2:salt"
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
          "say": "As a meal: the bread is starch, meat and egg are protein, pâté and egg sauce are fat.",
          "sub": "Nhìn theo bữa ăn: vỏ bánh là tinh bột; thịt, trứng là đạm; pa tê, bơ là chất béo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Vegetables are the smallest part. Most salt hides in cold cuts, pork roll, pâté and soy sauce.",
          "sub": "Rau thường ít nhất. Muối nằm nhiều ở thịt nguội, chả, pa tê và nước tương.",
          "keys": [
            "Rau thường ít nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Processed meat is high in salt and fat; health groups advise less. So not all cold cuts, every day.",
          "sub": "Thịt chế biến sẵn nhiều muối, chất béo, y tế khuyên hạn chế. Đừng ngày nào cũng toàn thịt nguội.",
          "keys": [
            "y tế khuyên hạn chế"
          ]
        }
      ],
      "ref": "p8,p9"
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
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ T4 · Gọi nhân",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:orders"
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
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "baguette-bread",
                "cucumber"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
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
            "at": "l1:pro",
            "caption": "Thứ Tư · quầy cô Hoa",
            "icon": "baguette-bread"
          },
          {
            "id": "e-sp",
            "t": "text",
            "text": "Sam: ổ đặc biệt",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:special"
          },
          {
            "id": "e-me",
            "t": "text",
            "text": "Ít pa tê, ít bơ, nhiều rau",
            "x": 7932,
            "y": 245,
            "size": 46,
            "at": "l2:less",
            "color": "accent",
            "hl": [
              {
                "text": "nhiều rau",
                "at": "l2:vegetables"
              }
            ]
          },
          {
            "id": "e-ns",
            "t": "text",
            "text": "Không lấy nước tương",
            "x": 7932,
            "y": 325,
            "size": 46,
            "at": "l3:soy"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Làm từng ổ → chiều được",
            "x": 7932,
            "y": 415,
            "size": 48,
            "at": "l5:one by one",
            "hl": [
              {
                "text": "chiều được",
                "at": "l5:usually"
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
          "say": "Third stop: Wednesday. Thảo orders for two, like a pro.",
          "sub": "Chặng ba: thứ Tư. Thảo gọi cho hai người, chuyên nghiệp ra phết.",
          "keys": [
            "chuyên nghiệp ra phết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "A special for Sam to taste. Mine with less pâté, less egg sauce, more vegetables and pickles!",
          "sub": "Một ổ đặc biệt cho Sam nếm. Của cháu ít pa tê, ít bơ, nhiều rau với đồ chua!",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "And no soy sauce for me, please.",
          "sub": "Cháu không lấy nước tương ạ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Sure, dear.",
          "sub": "Được cháu.",
          "pose": "hold",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Each loaf is made one by one, so sellers can usually do it.",
          "sub": "Bánh mì làm theo từng ổ, nên người bán thường chiều được.",
          "keys": [
            "làm theo từng ổ"
          ]
        }
      ],
      "ref": "p12"
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
            "id": "e-cl",
            "t": "text",
            "text": "Đặc biệt: béo, mặn, cổ điển",
            "x": 7932,
            "y": 520,
            "size": 42,
            "at": "l1:special"
          },
          {
            "id": "e-li",
            "t": "text",
            "text": "Trứng, thịt nướng + rau: nhẹ",
            "x": 7932,
            "y": 580,
            "size": 42,
            "at": "l1:Egg",
            "color": "accent"
          },
          {
            "id": "e-d",
            "t": "text",
            "text": "Mỗi ngày một nhân",
            "x": 7932,
            "y": 650,
            "size": 46,
            "at": "l2:day",
            "hl": [
              {
                "text": "Mỗi ngày",
                "at": "l2:a day"
              }
            ]
          },
          {
            "id": "e-ch",
            "t": "text",
            "text": "Chay: vẫn hỏi pa tê, nước tương",
            "x": 8772,
            "y": 700,
            "size": 38,
            "at": "l3:Vegetarian",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The special: rich, salty, classic. Egg or grilled pork with extra greens: lighter, still filling.",
          "sub": "Ổ đặc biệt: béo, mặn, đúng vị cổ điển. Trứng hay thịt nướng thêm rau: gọn hơn mà vẫn no."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fried egg, grilled pork, shredded chicken, tofu and mushroom. A long stay guest can try one a day.",
          "sub": "Trứng ốp la, thịt nướng, gà xé, đậu phụ nấm. Khách ở lâu thử mỗi ngày một kiểu.",
          "keys": [
            "mỗi ngày một kiểu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Vegetarian? Still ask about pâté and soy sauce. Pan banh mi is oily: a weekend treat.",
          "sub": "Khách ăn chay vẫn nên hỏi về pa tê, nước tương. Bánh mì chảo nhiều dầu: để dành cuối tuần."
        }
      ],
      "ref": "p10,p11,p13"
    },
    {
      "id": "s12",
      "module": "BRK-04",
      "data": {
        "title": "Bánh mì là “tinh bột xấu”?",
        "labels": [
          "Sai",
          "Đúng"
        ],
        "wrong": "Bỏ hẳn ổ bánh cho khỏi béo",
        "right": "Đừng bỏ cả ổ, hãy sửa cái nhân",
        "wrongIllus": "cross-mark",
        "rightIllus": "sandwich"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Banh mi is bad carbs, so skip it?",
          "sub": "Bánh mì là tinh bột xấu, nên bỏ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Don't drop the loaf. Change the filling.",
          "sub": "Đừng bỏ cả ổ bánh, hãy sửa cái nhân.",
          "keys": [
            "sửa cái nhân"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p14,p15"
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
            "text": "④ T5 · Ổ bánh trong cốp xe",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:dawn"
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
                  "pose": "give"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "sad",
                  "pose": "hold"
                }
              ],
              "props": [
                "baguette-bread",
                "motor-scooter"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sam",
            "caption": "Thứ Năm · đầu giờ chiều",
            "icon": "motor-scooter"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Ổ 1: ăn ngay ✓",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l1:now",
            "color": "accent"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Ổ 2: cốp xe đến trưa",
            "x": 60,
            "y": 1340,
            "size": 50,
            "at": "l2:scooter",
            "color": "coral",
            "hl": [
              {
                "text": "cốp xe",
                "at": "l2:scooter"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "→ vỏ mềm, nhân nằm chỗ nóng",
            "x": 100,
            "y": 1420,
            "size": 40,
            "at": "l4:softens",
            "color": "muted"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Mua lúc nào, ăn lúc đó",
            "x": 60,
            "y": 1520,
            "size": 56,
            "at": "l5:buy",
            "color": "accent",
            "hl": [
              {
                "text": "ăn lúc đó",
                "at": "l5:eat it"
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
          "say": "Fourth stop: Thursday. At dawn, Thảo buys two pâté banh mi: one for now, one for Sam.",
          "sub": "Chặng bốn: thứ Năm. Sáng sớm Thảo mua hai ổ pa tê: một ổ ăn ngay, một ổ cho Sam."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The second spends the morning in her scooter seat. A small sauna.",
          "sub": "Ổ thứ hai nằm trong cốp xe cả buổi. Một phòng xông hơi mini.",
          "keys": [
            "phòng xông hơi mini"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Hmm. The crust is soft now.",
          "sub": "Ừm. Vỏ mềm mất rồi.",
          "face": "sad",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The crust is crispiest just baked; moisture from the filling softens it. And pâté hates warm hours.",
          "sub": "Vỏ giòn nhất khi vừa nướng; để lâu, hơi nước từ nhân làm vỏ mềm. Pa tê cũng không nên nằm chỗ ấm nhiều giờ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Buy your banh mi when you eat it, and eat it when you buy it.",
          "sub": "Bánh mì mua lúc nào, ăn ngay lúc đó.",
          "keys": [
            "ăn ngay lúc đó"
          ]
        }
      ],
      "ref": "p17,p18,p19"
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
            "id": "f-g",
            "t": "text",
            "text": "Tủ kính che bụi · kẹp, găng tay",
            "x": 60,
            "y": 1650,
            "size": 40,
            "at": "l1:glass",
            "hl": [
              {
                "text": "Tủ kính",
                "at": "l1:glass"
              }
            ]
          },
          {
            "id": "f-h",
            "t": "text",
            "text": "Nhân không phơi nắng",
            "x": 60,
            "y": 1715,
            "size": 40,
            "at": "l2:sun"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "Rau, đồ chua có nắp",
            "x": 60,
            "y": 1780,
            "size": 40,
            "at": "l2:covered"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Picking a stall? A glass case against dust, tongs or gloves for the fillings.",
          "sub": "Chọn quầy: có tủ kính che bụi, người bán dùng kẹp hoặc găng tay khi gắp nhân.",
          "keys": [
            "tủ kính che bụi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meat and pâté not sitting in the sun. Greens and pickles in covered boxes.",
          "sub": "Thịt, pa tê không phơi nắng cả buổi. Rau, đồ chua để trong hộp có nắp."
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Phần ngọt nhất của bữa sáng là gì?",
        "illus": "cup-with-straw"
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
          "say": "The sweetest part of a banh mi breakfast? Not the bread.",
          "sub": "Phần ngọt nhất của bữa sáng bánh mì? Không phải ổ bánh.",
          "keys": [
            "Không phải ổ bánh"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p23"
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
            "at": "a1",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ T6 · Bữa sáng vội",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:rushed"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "sam",
                  "side": "center"
                }
              ],
              "left": {
                "label": "Đặc biệt + trà sữa lớn",
                "ok": false
              },
              "right": {
                "label": "Trứng + dưa leo + trà",
                "ok": true
              }
            },
            "at": "l1:versions",
            "caption": "Thứ Sáu · mua vội trước giờ làm",
            "icon": "cup-with-straw"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A: trà sữa ngọt nhất bữa",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l4:sweetest",
            "color": "coral"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "rau gần như không có",
            "x": 2068,
            "y": 1335,
            "size": 40,
            "at": "l4:greens",
            "color": "muted"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: vẫn nhanh, vẫn no, nhẹ hơn",
            "x": 2028,
            "y": 1420,
            "size": 44,
            "at": "l4:lighter",
            "color": "accent",
            "hl": [
              {
                "text": "nhẹ hơn",
                "at": "l4:lighter"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Nhìn cả ổ lẫn cốc",
            "x": 2028,
            "y": 1520,
            "size": 56,
            "at": "l5:cup",
            "color": "accent",
            "hl": [
              {
                "text": "cả ổ lẫn cốc",
                "at": "l5:cup"
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
          "say": "Fifth stop: Friday, a rushed breakfast. Two versions.",
          "sub": "Chặng năm: thứ Sáu, bữa sáng mua vội. Hai phiên bản.",
          "keys": [
            "Hai phiên bản"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "sam",
          "say": "A special banh mi, and the biggest milk tea, please!",
          "sub": "Một ổ đặc biệt, với cốc trà sữa to nhất nhé!",
          "phase": "a",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "sam",
          "say": "Egg banh mi, extra cucumber, and iced tea, no sugar.",
          "sub": "Bánh mì trứng, thêm dưa leo, với trà đá không đường.",
          "phase": "b",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "In A, the milk tea is the sweetest part, with almost no greens. B is just as quick and full, but lighter.",
          "sub": "Bản A: trà sữa là phần ngọt nhất, rau gần như không có. Bản B vẫn nhanh, vẫn no, mà nhẹ hơn hẳn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Look at the loaf, and at the cup next to it.",
          "sub": "Nhìn cả ổ bánh lẫn cốc nước đi kèm.",
          "keys": [
            "cả ổ bánh lẫn cốc nước"
          ]
        }
      ],
      "ref": "p23,p24"
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
            "id": "g-cf",
            "t": "text",
            "text": "Cà phê sữa đá: thử, nhưng ngọt",
            "x": 2028,
            "y": 1630,
            "size": 40,
            "at": "l1:coffee"
          },
          {
            "id": "g-fr",
            "t": "text",
            "text": "+ dưa leo, chuối, sữa chua",
            "x": 2028,
            "y": 1695,
            "size": 40,
            "at": "l2:banana"
          },
          {
            "id": "g-sh",
            "t": "text",
            "text": "Ổ to? Chọn nhỏ, chia đôi",
            "x": 2028,
            "y": 1760,
            "size": 44,
            "at": "l3:share",
            "color": "accent",
            "hl": [
              {
                "text": "chia đôi",
                "at": "l3:share"
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
          "say": "Iced milk coffee is worth a try, but condensed milk makes it sweet.",
          "sub": "Cà phê sữa đá đáng thử cho biết, nhưng sữa đặc làm nó khá ngọt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Few greens? Ask for extra cucumber and herbs, or add a banana or plain yogurt.",
          "sub": "Ít rau? Xin thêm dưa leo, rau thơm, hoặc kèm quả chuối, hộp sữa chua không đường."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Too big? Pick a small one, or share. Comfortably full beats finishing it all.",
          "sub": "Ổ to quá? Chọn ổ nhỏ, hoặc chia đôi. Ăn vừa no dễ chịu hơn cố ăn cho hết.",
          "keys": [
            "chia đôi"
          ]
        }
      ],
      "ref": "p20,p21,p22"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ T7 · Sam tập kể",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:practises"
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
                  "id": "sam",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "world-map",
                "baguette-bread"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:trip",
            "caption": "Thứ Bảy · lên kế hoạch đi chơi",
            "icon": "world-map"
          },
          {
            "id": "h-l",
            "t": "text",
            "text": "Baguette Pháp, nhân Việt",
            "x": 3996,
            "y": 1260,
            "size": 56,
            "at": "l2:French",
            "color": "accent",
            "hl": [
              {
                "text": "nhân Việt",
                "at": "l2:Vietnamese way"
              }
            ]
          },
          {
            "id": "h-hp",
            "t": "text",
            "text": "Hải Phòng: bánh mì que",
            "x": 3996,
            "y": 1370,
            "size": 46,
            "at": "l4:Hai"
          },
          {
            "id": "h-dl",
            "t": "text",
            "text": "Đà Lạt: xíu mại",
            "x": 3996,
            "y": 1440,
            "size": 46,
            "at": "l4:Da"
          },
          {
            "id": "h-ha",
            "t": "text",
            "text": "Hội An: nổi tiếng với khách",
            "x": 3996,
            "y": 1510,
            "size": 46,
            "at": "l4:Hoi"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Mỗi tỉnh thử một ổ",
            "x": 3996,
            "y": 1610,
            "size": 54,
            "at": "l5:town",
            "color": "accent",
            "hl": [
              {
                "text": "một ổ",
                "at": "l5:loaf"
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
          "say": "Sixth stop: Saturday. Sam plans a trip, and practises his banh mi story.",
          "sub": "Chặng sáu: thứ Bảy. Sam lên kế hoạch đi chơi, và tập kể chuyện bánh mì."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Banh mi began as a French baguette, filled the Vietnamese way: pâté, meat, pickles, herbs.",
          "sub": "Bánh mì gốc từ baguette Pháp, người Việt nhồi nhân: pa tê, thịt, đồ chua, rau thơm.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Perfect! And each region has its own. Light eaters: egg, chicken or tofu.",
          "sub": "Chuẩn! Mà mỗi vùng một kiểu. Ai muốn nhẹ thì nhân trứng, gà, đậu phụ.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hai Phong: small stick bread with pâté and chilli sauce. Da Lat: meatballs. Hoi An: famous with tourists.",
          "sub": "Hải Phòng: bánh mì que, pa tê, tương ớt. Đà Lạt: xíu mại. Hội An: nổi tiếng với khách du lịch."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One local loaf per town: a tasty way to meet a new place.",
          "sub": "Mỗi tỉnh thử một ổ: cách làm quen nơi mới thật ngon.",
          "keys": [
            "Mỗi tỉnh thử một ổ"
          ]
        }
      ],
      "ref": "p25,p26"
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
            "text": "⑦ Tối CN · Mang theo",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:list"
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
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone",
                "baguette-bread"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Tối Chủ nhật · ghi vào điện thoại",
            "icon": "mobile-phone"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1270,
            "w": 50,
            "h": 50,
            "at": "l2:French",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1252,
            "size": 62,
            "at": "l2:French+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Baguette Pháp, nhân Việt",
            "x": 6039,
            "y": 1262,
            "size": 42,
            "at": "l2:French+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1365,
            "w": 50,
            "h": 50,
            "at": "l2:egg",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1347,
            "size": 62,
            "at": "l2:egg+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "“Bơ” là sốt trứng",
            "x": 6039,
            "y": 1357,
            "size": 42,
            "at": "l2:egg+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1460,
            "w": 50,
            "h": 50,
            "at": "l3:Ask",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1442,
            "size": 62,
            "at": "l3:Ask+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Khách kiêng: hỏi người bán",
            "x": 6039,
            "y": 1452,
            "size": 42,
            "at": "l3:Ask+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1555,
            "w": 50,
            "h": 50,
            "at": "l3:Light",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1537,
            "size": 62,
            "at": "l3:Light+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Nhân nhẹ, đồ uống ít đường",
            "x": 6039,
            "y": 1547,
            "size": 42,
            "at": "l3:Light+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1650,
            "w": 50,
            "h": 50,
            "at": "l4:Buy",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1632,
            "size": 62,
            "at": "l4:Buy+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Mua đủ, ăn ngay, quán sạch",
            "x": 6039,
            "y": 1642,
            "size": 42,
            "at": "l4:Buy+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "My banh mi list, before Monday.",
          "sub": "Danh sách bánh mì của mình, trước sáng thứ Hai.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "French baguette, Vietnamese fillings. The butter is egg sauce.",
          "sub": "Baguette Pháp, nhân Việt. “Bơ” là sốt trứng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask the seller about restrictions. Light fillings, low sugar drinks.",
          "sub": "Khách kiêng thì hỏi người bán. Nhân nhẹ, đồ uống ít đường.",
          "keys": [
            "hỏi người bán"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Buy what you'll eat, eat it fresh, at a clean stall with covered fillings.",
          "sub": "Mua đủ ăn, ăn ngay, ở quán sạch có che đậy nhân."
        }
      ],
      "ref": "p27"
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
            "text": "7:00 · thứ Hai tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:stall"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "center",
                  "face": "happy",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "baguette-bread",
                "seven-oclock"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:seven",
            "caption": "7:00 thứ Hai · vẫn quầy cô Hoa",
            "icon": "baguette-bread"
          },
          {
            "id": "j-old",
            "t": "text",
            "text": "“Because it's delicious?”",
            "x": 7932,
            "y": 1270,
            "size": 44,
            "at": "l2:famous",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "j-oldx",
            "t": "strike",
            "over": "j-old",
            "at": "l3:French"
          },
          {
            "id": "j-new",
            "t": "text",
            "text": "Gốc Pháp, vỏ giòn, nhân đủ vị",
            "x": 7932,
            "y": 1360,
            "size": 46,
            "at": "l3:crispy",
            "color": "accent",
            "hl": [
              {
                "text": "vỏ giòn",
                "at": "l3:crispy"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Ăn quả nhớ kẻ trồng cây”",
            "x": 7932,
            "y": 1490,
            "size": 50,
            "at": "l4:fruit",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "ăn bánh nhớ… hỏi người bán",
            "x": 7972,
            "y": 1570,
            "size": 46,
            "at": "l4:baker",
            "color": "coral",
            "hl": [
              {
                "text": "hỏi người bán",
                "at": "l4:ask"
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
          "say": "Next Monday, seven a.m. Same stall, same Sam, same crispy crust.",
          "sub": "Thứ Hai tuần sau, bảy giờ sáng. Vẫn quầy ấy, vẫn Sam ấy, vẫn lớp vỏ giòn ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "So, Thảo. Why is banh mi so famous?",
          "sub": "Nào Thảo. Sao bánh mì nổi tiếng thế?",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "It began as a French baguette. We made the crust thin and crispy, the filling rich, sour and fresh. Cheap, and portable.",
          "sub": "Gốc từ baguette Pháp. Người Việt làm vỏ mỏng giòn, nhân béo, chua, thơm. Rẻ, cầm tay đi được.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Eat the fruit, remember who planted the tree. Eat the loaf, remember the baker, and ask her.",
          "sub": "“Ăn quả nhớ kẻ trồng cây.” Ăn bánh thì nhớ người làm bánh, và nhớ hỏi người bán.",
          "keys": [
            "nhớ hỏi người bán"
          ]
        }
      ],
      "ref": "outro"
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
            "at": "l1:crust",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:seller",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3:fresh",
            "fit": "F",
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
            "x": 2728,
            "y": 180,
            "at": "l1:crust"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 4696,
            "y": 560,
            "at": "l2:seller"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 760,
            "y": 1530,
            "at": "l3:fresh"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "c-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l2:guess"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; dị ứng, ăn kiêng vì bệnh: hỏi bác sĩ.",
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
          "say": "So: a French loaf with a Vietnamese crust, rich fillings, cheap, and in Oxford since 2011.",
          "sub": "Tóm lại: ổ bánh gốc Pháp, vỏ kiểu Việt, nhân đủ vị, rẻ, vào Oxford từ 2011.",
          "keys": [
            "vỏ kiểu Việt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Guest avoids something? Ask the seller, don't guess.",
          "sub": "Khách có kiêng? Hỏi người bán, đừng đoán.",
          "keys": [
            "Hỏi người bán, đừng đoán"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fix the filling, watch the drink, and eat it fresh.",
          "sub": "Sửa cái nhân, để ý cốc nước, và ăn khi còn giòn.",
          "keys": [
            "ăn khi còn giòn"
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
      "ref": "questions[6]",
      "data": {
        "q": "What is the butter in a Vietnamese banh mi usually made of?",
        "options": [
          "It is fresh avocado, mashed and spread inside the bread every morning",
          "It is usually a rich egg and oil sauce, similar to mayonnaise",
          "It is real dairy butter imported from France for each sandwich"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "egg",
        "why": "“Bơ” thường là sốt trứng và dầu, giống mayonnaise, không phải butter."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the butter in a Vietnamese banh mi usually made of?",
          "sub": "“Bơ” trong bánh mì Việt thường được làm từ gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "It is usually a rich egg and oil sauce, similar to mayonnaise.",
          "sub": "Thường là một loại sốt trứng và dầu, giống mayonnaise."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Tell guests it's an egg sauce, not butter, so they aren't surprised.",
          "sub": "Nói với khách đó là sốt trứng, không phải butter, để khỏi bất ngờ."
        }
      ]
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Tập nói to câu giới thiệu bánh mì",
        "sub": "Rồi làm bốn mươi câu bên dưới · bài sau: Ba miền"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới."
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
