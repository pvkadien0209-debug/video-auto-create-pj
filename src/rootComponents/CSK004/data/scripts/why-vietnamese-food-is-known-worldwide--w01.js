// Kịch bản video W lần 3 (#110) — "Vì sao món Việt được thế giới biết đến?" · chuỗi "Món Việt nổi tiếng thế giới"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "why-vietnamese-food-is-known-worldwide--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "vietnamese-food-lovers",
    "slug": "why-vietnamese-food-is-known-worldwide",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Vì sao món Việt được thế giới biết đến?",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo TUẦN ĐẦU CỦA SAM Ở HÀ NỘI (trưa T2 bát phở → T2 rau thơm → T3 nước mắm, cân bằng → T4 “Khoan đã!” món Thái → T5 bát phở đầu tiên ở quê Sam → T6 bún chả ghế nhựa → T7 bạn mới của Sam (hai cách) → CN nhà bác Bình → tối CN ghi chú → trưa T2 tuần sau). Nhân vật (w145/_series/vietnamese-food-lovers.md): Thảo (“bạn” trong bài), Sam (bạn nước ngoài / đồng nghiệp người Úc p8 / nhóm bạn p19 / khách nhăn mặt p23, không gắn quốc tịch), bác Bình (người kể chuyện “người phát minh phở” p21). Obama, Bourdain (p13) chỉ qua lời, không lên hình. Cảnh ngắt nhịp: BRK-07 (rehook “bát phở vượt đại dương”), BRK-08 (dòng thời gian Pháp thuộc → sau 1975 → quán nhỏ → khách du lịch), BRK-04 (Đừng nói / Hãy nói: vơ đũa cả nắm). Số chỉ từ bài: 2016 (CTV News), 1975, đầu thế kỷ 20. Khép vòng: “Có thực mới vực được đạo” → có cả bát phở lẫn câu chuyện. Bản cũ: w145/bak/why-vietnamese-food-is-known-worldwide--w01.js.",
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
            "text": "2016",
            "x": 70,
            "y": 60,
            "size": 230,
            "at": "l1:Twenty",
            "color": "accent",
            "hl": [
              {
                "text": "2016",
                "at": "l1:sixteen"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "Hà Nội · bún chả · ghế nhựa",
            "x": 80,
            "y": 330,
            "size": 56,
            "at": "l1:plastic"
          },
          {
            "id": "a-rank",
            "t": "text",
            "text": "Ta tưởng: nhờ bảng xếp hạng?",
            "x": 70,
            "y": 440,
            "size": 52,
            "at": "l2:ranking",
            "color": "muted"
          },
          {
            "id": "a-rankx",
            "t": "strike",
            "over": "a-rank",
            "at": "l2:thought"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: CTV News, 2016",
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
          "say": "Twenty sixteen, Hanoi. A US president eats bun cha on a plastic stool.",
          "sub": "Năm 2016, Hà Nội. Một tổng thống Mỹ ngồi ghế nhựa ăn bún chả.",
          "keys": [
            "ngồi ghế nhựa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So Vietnamese food got famous by winning some world ranking? Hold that thought.",
          "sub": "Vậy món Việt nổi tiếng nhờ đứng đầu bảng xếp hạng nào đó? Khoan kết luận.",
          "keys": [
            "bảng xếp hạng"
          ]
        }
      ],
      "ref": "intro,p13"
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
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "face": "happy"
                }
              ],
              "props": [
                "steaming-bowl"
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
            "caption": "Trưa thứ Hai · quán phở gần công ty",
            "icon": "steaming-bowl"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Có thực mới vực được đạo”",
            "x": 60,
            "y": 540,
            "size": 52,
            "at": "l5:eat",
            "color": "accent",
            "hl": [
              {
                "text": "vực được đạo",
                "at": "l5:way"
              }
            ]
          },
          {
            "id": "a-st",
            "t": "text",
            "text": "→ có chuyện mới “vực” được khách",
            "x": 100,
            "y": 630,
            "size": 42,
            "at": "l6:story",
            "color": "coral",
            "hl": [
              {
                "text": "có chuyện",
                "at": "l6:story"
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
          "say": "Meet Thảo, an office worker in Hanoi who eats Vietnamese food three times a day.",
          "sub": "Đây là Thảo, dân văn phòng Hà Nội, ngày ba bữa món Việt.",
          "keys": [
            "ngày ba bữa món Việt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Sam, her new colleague from abroad. Day one, bowl already empty.",
          "sub": "Còn đây là Sam, đồng nghiệp nước ngoài mới sang. Ngày đầu đã vét sạch bát phở.",
          "keys": [
            "vét sạch bát phở"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Why is Vietnamese food so popular?",
          "sub": "Sao món Việt nổi tiếng thế?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I eat it every day, but I've never thought about why!",
          "sub": "Ngày nào mình cũng ăn mà chưa từng nghĩ vì sao!",
          "face": "surprised",
          "pose": "shrug"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: first you eat, then you can follow the way.",
          "sub": "Ông bà dặn: “Có thực mới vực được đạo.”",
          "keys": [
            "Có thực mới vực được đạo"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Thảo has the food. Now she needs the story.",
          "sub": "Thảo có “thực” rồi. Giờ cần có chuyện để kể.",
          "keys": [
            "có chuyện để kể"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
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
            "text": "Vì sao thế giới biết món Việt?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:known",
            "hl": [
              {
                "text": "biết món Việt",
                "at": "l1:known"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Tươi, vị cân bằng",
            "x": 2028,
            "y": 170,
            "size": 56,
            "at": "l2:fresh",
            "color": "accent",
            "hl": [
              {
                "text": "cân bằng",
                "at": "l2:balanced"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Nhiều rau, hợp túi tiền",
            "x": 2028,
            "y": 250,
            "size": 56,
            "at": "l2:herbs",
            "color": "accent",
            "hl": [
              {
                "text": "hợp túi tiền",
                "at": "l2:wallet"
              }
            ]
          },
          {
            "id": "b-ox",
            "t": "text",
            "text": "Từ điển Oxford: phở, bánh mì",
            "x": 2028,
            "y": 345,
            "size": 46,
            "at": "l3:Oxford",
            "hl": [
              {
                "text": "Oxford",
                "at": "l3:Oxford"
              }
            ]
          },
          {
            "id": "b-fa",
            "t": "text",
            "text": "Quen tên: gỏi cuốn, bún chả",
            "x": 2028,
            "y": 415,
            "size": 42,
            "at": "l3:Goi",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So why is Vietnamese food known around the world?",
          "sub": "Vậy vì sao món Việt được thế giới biết đến?",
          "keys": [
            "được thế giới biết đến"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In one sentence: it tastes fresh and balanced, has lots of herbs, and is easy on the wallet.",
          "sub": "Một câu thôi: ăn thấy tươi, vị cân bằng, nhiều rau, lại hợp túi tiền.",
          "keys": [
            "tươi, vị cân bằng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pho and banh mi are in the Oxford English Dictionary. Goi cuon and bun cha sound familiar too.",
          "sub": "Phở và bánh mì đã vào từ điển tiếng Anh Oxford; gỏi cuốn, bún chả cũng quen với nhiều khách.",
          "keys": [
            "từ điển tiếng Anh Oxford"
          ]
        }
      ],
      "ref": "p1"
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
            "id": "b-rk",
            "t": "text",
            "text": "Đứng đầu bảng xếp hạng",
            "x": 2928,
            "y": 170,
            "size": 46,
            "at": "l1:ranking",
            "color": "muted"
          },
          {
            "id": "b-rkx",
            "t": "strike",
            "over": "b-rk",
            "at": "l1:taste"
          },
          {
            "id": "b-ls",
            "t": "text",
            "text": "Danh sách mạng: mỗi năm mỗi khác",
            "x": 2928,
            "y": 250,
            "size": 36,
            "at": "l2:lists",
            "color": "muted"
          },
          {
            "id": "b-tr",
            "t": "text",
            "text": "Kể điều có thật",
            "x": 2928,
            "y": 330,
            "size": 60,
            "at": "l3:true",
            "color": "accent",
            "hl": [
              {
                "text": "có thật",
                "at": "l3:true"
              }
            ]
          },
          {
            "id": "b-nb",
            "t": "text",
            "text": "đừng mượn bảng xếp hạng",
            "x": 2958,
            "y": 420,
            "size": 42,
            "at": "l3:borrow",
            "color": "coral"
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
            "text": "T5",
            "x": 2638,
            "y": 653,
            "size": 48,
            "at": "l4:stops+920"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T6",
            "x": 2908,
            "y": 653,
            "size": 48,
            "at": "l4:stops+1170"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T7",
            "x": 3178,
            "y": 653,
            "size": 48,
            "at": "l4:stops+1420"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "CN",
            "x": 3448,
            "y": 653,
            "size": 48,
            "at": "l4:stops+1670"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Tuần đầu của Sam",
            "x": 2028,
            "y": 545,
            "size": 50,
            "at": "l4:week",
            "hl": [
              {
                "text": "Tuần đầu",
                "at": "l4:first week"
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
          "say": "Not because it topped a ranking. There's no official ranking for taste.",
          "sub": "Không phải nhờ đứng đầu bảng xếp hạng. Ngon dở chẳng có bảng xếp hạng chính thức nào.",
          "keys": [
            "bảng xếp hạng chính thức"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Online lists are picked by each paper or site, and change yearly.",
          "sub": "Danh sách trên mạng do từng tờ báo, từng trang du lịch tự chọn, mỗi năm mỗi khác."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So tell what's true. Don't borrow a ranking.",
          "sub": "Vậy hãy kể điều có thật, đừng mượn bảng xếp hạng.",
          "keys": [
            "kể điều có thật"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Now, Sam's first week in six stops. Bring napkins.",
          "sub": "Giờ theo tuần đầu của Sam, sáu chặng. Nhớ mang giấy ăn.",
          "keys": [
            "tuần đầu của Sam"
          ]
        }
      ],
      "ref": "p3,p4"
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① T2 · Đĩa rau thơm",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Monday"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "surprised",
                  "pose": "shrug"
                }
              ],
              "props": [
                "herb",
                "steaming-bowl"
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
            "at": "l1:leaves",
            "caption": "Trưa thứ Hai · bát phở thứ hai",
            "icon": "herb"
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "“Đống lá này làm gì?”",
            "x": 3996,
            "y": 170,
            "size": 48,
            "at": "l2:leaves",
            "color": "coral"
          },
          {
            "id": "c-a",
            "t": "text",
            "text": "Thả vào bát, hoặc cuốn",
            "x": 3996,
            "y": 260,
            "size": 50,
            "at": "l3:Add",
            "hl": [
              {
                "text": "cuốn",
                "at": "l3:wrap"
              }
            ]
          },
          {
            "id": "c-h",
            "t": "text",
            "text": "Húng, tía tô, rau mùi, giá",
            "x": 3996,
            "y": 360,
            "size": 46,
            "at": "l4:Mint"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Điều 1: cảm giác “tươi”",
            "x": 3996,
            "y": 470,
            "size": 58,
            "at": "l5:fresh",
            "color": "accent",
            "hl": [
              {
                "text": "“tươi”",
                "at": "l5:fresh"
              }
            ]
          },
          {
            "id": "c-oil",
            "t": "text",
            "text": "khác hẳn món nhiều dầu mỡ",
            "x": 4036,
            "y": 560,
            "size": 42,
            "at": "l5:oily",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Monday lunch again. Sam's pho comes with a mountain of leaves.",
          "sub": "Chặng một: lại trưa thứ Hai. Bát phở của Sam kèm cả một ngọn núi lá.",
          "keys": [
            "ngọn núi lá"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "What do I do with all these leaves?",
          "sub": "Đống lá này tôi làm gì đây?",
          "face": "surprised",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Add them to your bowl, or wrap them with the food.",
          "sub": "Thả vào bát, hoặc cuốn cùng món ăn nhé.",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Mint, perilla, coriander, bean sprouts. Everyone builds their own bowl.",
          "sub": "Húng, tía tô, rau mùi, giá. Mỗi người tự “xây” bát của mình.",
          "keys": [
            "tự “xây” bát của mình"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "For many guests, this fresh feeling is unlike the oily food they know.",
          "sub": "Với nhiều khách, cảm giác “tươi” này khác hẳn những món nhiều dầu mỡ họ quen.",
          "keys": [
            "cảm giác “tươi”"
          ]
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
            "text": "② T3 · Bát nước mắm",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday"
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
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "surprised"
                }
              ],
              "props": [
                "fish",
                "lime",
                "hot-pepper"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:rules",
            "caption": "Trưa thứ Ba · cơm văn phòng",
            "icon": "fish"
          },
          {
            "id": "d-s",
            "t": "text",
            "text": "Mặn, chua, cay, ngọt",
            "x": 5964,
            "y": 170,
            "size": 56,
            "at": "l2:salty",
            "color": "coral"
          },
          {
            "id": "d-s2",
            "t": "text",
            "text": "cùng lúc",
            "x": 6464,
            "y": 175,
            "size": 50,
            "at": "l2:once",
            "color": "coral",
            "hl": [
              {
                "text": "cùng lúc",
                "at": "l2:once"
              }
            ]
          },
          {
            "id": "d-mix",
            "t": "text",
            "text": "+ chanh, tỏi, ớt, đường",
            "x": 5964,
            "y": 260,
            "size": 48,
            "at": "l3:lime"
          },
          {
            "id": "d-fs",
            "t": "text",
            "text": "Cá ủ với muối",
            "x": 5964,
            "y": 350,
            "size": 56,
            "at": "l4:fermented",
            "color": "accent",
            "hl": [
              {
                "text": "ủ với muối",
                "at": "l4:salt"
              }
            ]
          },
          {
            "id": "d-nm",
            "t": "text",
            "text": "Quên tên món, nhớ vị",
            "x": 5964,
            "y": 440,
            "size": 50,
            "at": "l5:forget",
            "hl": [
              {
                "text": "nhớ vị",
                "at": "l5:remember"
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
          "say": "Second stop: Tuesday. Sam meets the small bowl that rules every table: fish sauce.",
          "sub": "Chặng hai: thứ Ba. Sam gặp cái bát nhỏ “trị vì” mọi mâm cơm: nước mắm.",
          "keys": [
            "nước mắm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Strong smell, but wow. Salty, sour, spicy and sweet at once!",
          "sub": "Mùi mạnh thật, mà ôi. Vừa mặn, chua, cay, ngọt cùng lúc!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "That's fish sauce, mixed with lime, garlic, chilli and sugar.",
          "sub": "Nước mắm pha chanh, tỏi, ớt, đường đấy.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fish sauce is fish fermented with salt, for seasoning and for dips.",
          "sub": "Nước mắm làm từ cá ủ với muối, dùng để nêm và pha nước chấm.",
          "keys": [
            "cá ủ với muối"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Guests forget the dish's name, but remember this taste.",
          "sub": "Khách quên tên món, nhưng vẫn nhớ vị này.",
          "keys": [
            "nhớ vị này"
          ]
        }
      ],
      "ref": "p6"
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
          }
        ],
        "items": [
          {
            "id": "d-b",
            "t": "text",
            "text": "Điều 3: cân bằng",
            "x": 5964,
            "y": 520,
            "size": 56,
            "at": "l1:balance",
            "color": "accent",
            "hl": [
              {
                "text": "cân bằng",
                "at": "l1:balance"
              }
            ]
          },
          {
            "id": "d-b1",
            "t": "text",
            "text": "Đậm ↔ rau tươi · Chiên ↔ đồ chua",
            "x": 5964,
            "y": 600,
            "size": 40,
            "at": "l1:Fried"
          },
          {
            "id": "d-b2",
            "t": "text",
            "text": "Nước nóng ↔ chanh, ớt",
            "x": 5964,
            "y": 660,
            "size": 40,
            "at": "l2:Hot"
          },
          {
            "id": "d-lt",
            "t": "text",
            "text": "Món nước: nhẹ bụng",
            "x": 6804,
            "y": 700,
            "size": 50,
            "at": "l3:lighter",
            "color": "accent",
            "hl": [
              {
                "text": "nhẹ bụng",
                "at": "l3:lighter"
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
          "say": "Third thing guests remember: balance. Rich food with fresh greens, fried food with pickles.",
          "sub": "Điều thứ ba khách nhớ: cân bằng. Món đậm đi với rau tươi, món chiên đi với đồ chua.",
          "keys": [
            "cân bằng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Hot broth with lime and chilli. Tightrope walking, with chopsticks.",
          "sub": "Nước dùng nóng đi với chanh, ớt. Đi dây, mà cầm đũa."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And many dishes are noodle soups: pho, bun, hu tieu. Lighter than guests expect.",
          "sub": "Nhiều món là món nước: phở, bún, hủ tiếu. Nhẹ bụng hơn khách tưởng.",
          "keys": [
            "Nhẹ bụng hơn khách tưởng"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Tư · ở công ty",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "sam",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“Món mình ngon hơn!”",
          "why": "So hơn thua vừa thiếu lịch sự, vừa chẳng cho khách biết món Việt có gì.",
          "rule": "Nói món mình có gì, đừng nói món người kém gì"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "Vietnamese food and Thai food look similar. What's the difference?",
          "sub": "Món Việt với món Thái trông giống nhau. Khác ở đâu?",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Easy. Ours is better!",
          "sub": "Dễ mà. Món mình ngon hơn!",
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
          "say": "Winning isn't an answer. Say what your food has.",
          "sub": "Hơn thua không phải câu trả lời. Hãy nói món mình có gì.",
          "keys": [
            "món mình có gì"
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
          "who": "thao",
          "say": "Our dishes often come with fresh herbs and a fish sauce dip. Want to taste one?",
          "sub": "Món Việt hay ăn kèm rau thơm sống, chấm nước mắm pha. Nếm thử một món nhé?",
          "phase": "redo",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "True, polite, and now there's more to talk about.",
          "sub": "Vừa đúng, vừa lịch sự, lại mở ra chuyện để kể.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "vừa lịch sự"
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
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Bát phở vượt đại dương bằng cách nào?",
        "illus": "globe-showing-americas"
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
          "say": "How did a bowl of pho cross the oceans, without a passport?",
          "sub": "Bát phở vượt đại dương bằng cách nào, khi chẳng có hộ chiếu?",
          "keys": [
            "vượt đại dương"
          ]
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
            "text": "③ T5 · Bát phở đầu tiên",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Thursday"
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
                  "id": "sam",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "surprised"
                }
              ],
              "props": [
                "globe-showing-americas",
                "steaming-bowl"
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
            "at": "l1:confesses",
            "caption": "Thứ Năm · giờ nghỉ trưa",
            "icon": "globe-showing-americas"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Phở đầu tiên: phố người Việt",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:neighbourhood",
            "color": "coral",
            "hl": [
              {
                "text": "phố người Việt",
                "at": "l2:Vietnamese neighbourhood"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "trước khi đến Việt Nam",
            "x": 7972,
            "y": 250,
            "size": 44,
            "at": "l3:before",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Thursday. Sam confesses something.",
          "sub": "Chặng ba: thứ Năm. Sam thú thật một chuyện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "My first pho wasn't here. It was back home, in a Vietnamese neighbourhood.",
          "sub": "Bát phở đầu tiên của tôi không ở đây. Là ở quê nhà, trong một khu phố người Việt.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Really? Before Vietnam?",
          "sub": "Thật á? Trước cả khi sang Việt Nam?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sam is not alone. Many foreigners met pho that way.",
          "sub": "Sam không phải người duy nhất. Nhiều người nước ngoài biết phở y như thế.",
          "keys": [
            "biết phở y như thế"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s11",
      "module": "BRK-08",
      "data": {
        "title": "Món Việt đi ra thế giới",
        "points": [
          {
            "label": "Thời Pháp thuộc",
            "sub": "Người Việt sang Pháp",
            "illus": "globe-showing-europe-africa"
          },
          {
            "label": "Sau 1975",
            "sub": "Mỹ, Úc, Canada, Pháp",
            "illus": "airplane"
          },
          {
            "label": "Quán nhỏ",
            "sub": "Nấu cho cộng đồng",
            "illus": "steaming-bowl"
          },
          {
            "label": "Khách du lịch",
            "sub": "Ăn ngay tại chỗ",
            "illus": "world-map"
          }
        ],
        "current": 1
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "France first, then the big wave after 1975.",
          "sub": "Trước là nước Pháp, rồi làn sóng lớn sau 1975.",
          "keys": [
            "sau 1975"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then small shops, then tourists.",
          "sub": "Rồi quán nhỏ, rồi khách du lịch."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p10,p11,p12"
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
            "id": "e-fr",
            "t": "text",
            "text": "Pháp thuộc: Paris lâu đời nhất",
            "x": 7932,
            "y": 340,
            "size": 42,
            "at": "l1:Paris",
            "hl": [
              {
                "text": "Paris",
                "at": "l1:Paris"
              }
            ]
          },
          {
            "id": "e-75",
            "t": "text",
            "text": "Sau 1975: Mỹ, Úc, Canada, Pháp",
            "x": 7932,
            "y": 410,
            "size": 42,
            "at": "l2:after",
            "color": "accent",
            "hl": [
              {
                "text": "Sau 1975",
                "at": "l2:after"
              }
            ]
          },
          {
            "id": "e-sh",
            "t": "text",
            "text": "Quán phở, tiệm bánh mì nhỏ",
            "x": 7932,
            "y": 480,
            "size": 42,
            "at": "l3:shops"
          },
          {
            "id": "e-sh2",
            "t": "text",
            "text": "cộng đồng trước → bản xứ sau",
            "x": 7972,
            "y": 545,
            "size": 38,
            "at": "l3:locals",
            "color": "muted"
          },
          {
            "id": "e-lux",
            "t": "text",
            "text": "Nhà hàng sang trọng",
            "x": 7932,
            "y": 620,
            "size": 44,
            "at": "l4:luxury",
            "color": "muted"
          },
          {
            "id": "e-luxx",
            "t": "strike",
            "over": "e-lux",
            "at": "l4:luxury+400"
          },
          {
            "id": "e-ev",
            "t": "text",
            "text": "→ bữa ăn hằng ngày",
            "x": 7932,
            "y": 690,
            "size": 48,
            "at": "l4:everyday",
            "color": "accent",
            "hl": [
              {
                "text": "hằng ngày",
                "at": "l4:everyday"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Vietcetera · Saigoneer",
            "x": 8772,
            "y": 730,
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
          "say": "Since colonial times, Vietnamese people have lived in France. Paris has the oldest Vietnamese community in the West.",
          "sub": "Từ thời Pháp thuộc đã có người Việt sang Pháp; Paris có cộng đồng người Việt lâu đời nhất phương Tây.",
          "keys": [
            "lâu đời nhất phương Tây"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But the biggest wave came after 1975: America, Australia, Canada, France and more.",
          "sub": "Nhưng làn sóng lớn nhất đến sau 1975: Mỹ, Úc, Canada, Pháp và nhiều nước khác.",
          "keys": [
            "sau 1975"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "They opened small pho and banh mi shops, for their own community first, then for locals.",
          "sub": "Họ mở quán phở, tiệm bánh mì nhỏ, bán cho cộng đồng mình trước, rồi dần cho người bản xứ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not luxury restaurants. So the world met our food as a friendly, everyday meal.",
          "sub": "Không qua nhà hàng sang trọng. Nên thế giới biết món Việt như bữa ăn hằng ngày, gần gũi.",
          "keys": [
            "bữa ăn hằng ngày"
          ]
        }
      ],
      "ref": "p2,p10,p11"
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ T6 · Bún chả ghế nhựa",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:night"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "meat-on-bone",
                "beer-mug",
                "chair"
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
            "at": "l1:stools",
            "caption": "Tối thứ Sáu · quán vỉa hè",
            "icon": "meat-on-bone"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "“Tổng thống cũng ăn thế này?”",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l2:president",
            "color": "coral"
          },
          {
            "id": "f-ob",
            "t": "text",
            "text": "2016: Obama + Bourdain",
            "x": 60,
            "y": 1350,
            "size": 54,
            "at": "l3:Obama",
            "color": "accent",
            "hl": [
              {
                "text": "2016",
                "at": "l3:sixteen"
              }
            ]
          },
          {
            "id": "f-sh",
            "t": "text",
            "text": "Quay chương trình ẩm thực",
            "x": 60,
            "y": 1435,
            "size": 44,
            "at": "l4:Filming"
          },
          {
            "id": "f-pl",
            "t": "text",
            "text": "Quán bình dân, ghế thấp, bia",
            "x": 60,
            "y": 1505,
            "size": 44,
            "at": "l4:stools"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Nhớ vì bình dân",
            "x": 60,
            "y": 1600,
            "size": 60,
            "at": "l5:ordinary",
            "color": "accent",
            "hl": [
              {
                "text": "bình dân",
                "at": "l5:ordinary"
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
          "say": "Fourth stop: Friday night. Bun cha on plastic stools, knees close to the chin.",
          "sub": "Chặng bốn: tối thứ Sáu. Bún chả, ghế nhựa, đầu gối sát cằm.",
          "keys": [
            "đầu gối sát cằm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Wait, didn't a president eat bun cha like this?",
          "sub": "Khoan, hình như có tổng thống từng ăn bún chả thế này?",
          "face": "thinking",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Yes! Barack Obama, with Anthony Bourdain, in twenty sixteen.",
          "sub": "Đúng! Ông Barack Obama, cùng Anthony Bourdain, năm 2016.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Filming Bourdain's food show at a simple local place in Hanoi. Low stools, beer, bun cha.",
          "sub": "Ghi hình chương trình ẩm thực của Bourdain ở một quán bình dân Hà Nội. Ghế thấp, bia, bún chả."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Papers worldwide shared it. Remembered not for luxury, but for being so ordinary.",
          "sub": "Báo chí nhiều nước đăng lại. Được nhớ không vì sang, mà chính vì sự bình dân.",
          "keys": [
            "sự bình dân"
          ]
        }
      ],
      "ref": "p13"
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
            "id": "f-1",
            "t": "text",
            "text": "Hà Nội: bún chả",
            "x": 60,
            "y": 1690,
            "size": 42,
            "at": "l1:Hanoi"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Hội An: cao lầu",
            "x": 440,
            "y": 1690,
            "size": 42,
            "at": "l1:Hoi"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Sài Gòn: cơm tấm",
            "x": 60,
            "y": 1755,
            "size": 42,
            "at": "l1:Saigon"
          },
          {
            "id": "f-home",
            "t": "text",
            "text": "→ về nước kể lại",
            "x": 440,
            "y": 1755,
            "size": 42,
            "at": "l2:home",
            "color": "coral",
            "hl": [
              {
                "text": "kể lại",
                "at": "l2:stories"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: CTV News, 2016",
            "x": 900,
            "y": 1820,
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
          "say": "As tourists came, they ate it right there: bun cha in Hanoi, cao lau in Hoi An, com tam in Saigon.",
          "sub": "Khách du lịch đến, ăn ngay tại chỗ: bún chả Hà Nội, cao lầu Hội An, cơm tấm Sài Gòn.",
          "keys": [
            "ăn ngay tại chỗ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "They took the stories home. Famous again, from very ordinary meals.",
          "sub": "Họ về nước kể lại. Món Việt nổi tiếng thêm lần nữa, từ những bữa ăn rất đời thường.",
          "keys": [
            "rất đời thường"
          ]
        }
      ],
      "ref": "p12,p14"
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
            "text": "⑤ T7 · Bạn mới của Sam",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "right"
                },
                {
                  "id": "sam",
                  "side": "left"
                }
              ],
              "left": {
                "label": "Gửi link 10 món",
                "ok": false
              },
              "right": {
                "label": "Cùng ăn một bát",
                "ok": true
              }
            },
            "at": "l1:versions",
            "caption": "Thứ Bảy · bạn của Sam sang chơi",
            "icon": "people-hugging"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A: link “10 món phải thử”",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "a1:link",
            "color": "coral"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "→ khen lấy lệ, ăn món quen",
            "x": 2068,
            "y": 1335,
            "size": 40,
            "at": "l4:polite",
            "color": "muted"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: một bát + hai câu",
            "x": 2028,
            "y": 1420,
            "size": 48,
            "at": "b1:bowl",
            "color": "accent"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "→ nhớ tên, hỏi món tiếp",
            "x": 2068,
            "y": 1495,
            "size": 40,
            "at": "l4:next",
            "hl": [
              {
                "text": "hỏi món tiếp",
                "at": "l4:next"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Một món kể kỹ",
            "x": 2028,
            "y": 1590,
            "size": 58,
            "at": "l5:told well",
            "color": "accent",
            "hl": [
              {
                "text": "kể kỹ",
                "at": "l5:well"
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
          "say": "Fifth stop: Saturday. Sam's friends arrive, and Thảo wants to introduce Vietnamese food. Two versions.",
          "sub": "Chặng năm: thứ Bảy. Bạn của Sam sang chơi, Thảo muốn giới thiệu món Việt. Hai phiên bản.",
          "keys": [
            "Hai phiên bản"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "thao",
          "say": "Here's a link: ten dishes you must try. All Vietnamese food is delicious!",
          "sub": "Đây, link “mười món phải thử”. Món Việt món nào cũng ngon!",
          "phase": "a",
          "pose": "phone",
          "face": "happy"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "sam",
          "say": "Oh, nice. Thanks.",
          "sub": "Ồ, hay đấy. Cảm ơn.",
          "phase": "a",
          "face": "neutral"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "Let's share one bowl of pho. I'll tell you where it comes from, and how to add lime.",
          "sub": "Đi ăn một bát phở nhé. Mình kể gốc gác của nó, và chỉ cách nêm chanh.",
          "phase": "b",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "sam",
          "say": "Great story! What should we try next?",
          "sub": "Chuyện hay thật! Mai thử món gì tiếp?",
          "phase": "b",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The link gets a polite like. The bowl gets a story, and a next question.",
          "sub": "Đường link: khen lấy lệ, tối vẫn ăn món quen. Bát phở: nhớ chuyện, lại hỏi món tiếp.",
          "keys": [
            "hỏi món tiếp"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One dish told well beats ten dishes told in a hurry.",
          "sub": "Một món kể kỹ hơn mười món kể vội.",
          "keys": [
            "Một món kể kỹ"
          ]
        }
      ],
      "ref": "p19,p20"
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
            "id": "g-m1",
            "t": "text",
            "text": "Bài 1: Phở",
            "x": 2028,
            "y": 1690,
            "size": 46,
            "at": "l1:first",
            "hl": [
              {
                "text": "Phở",
                "at": "l1:pho"
              }
            ]
          },
          {
            "id": "g-m2",
            "t": "text",
            "text": "Bài 2: Bánh mì",
            "x": 2428,
            "y": 1690,
            "size": 46,
            "at": "l1:banh"
          },
          {
            "id": "g-m3",
            "t": "text",
            "text": "Bài 3: Ba miền",
            "x": 2028,
            "y": 1760,
            "size": 46,
            "at": "l2:regions"
          },
          {
            "id": "g-m4",
            "t": "text",
            "text": "Bài 4: Kể bằng tiếng Anh",
            "x": 2428,
            "y": 1760,
            "size": 42,
            "at": "l2:English"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "This series works the same way, one dish at a time: first pho, then banh mi.",
          "sub": "Chuỗi bài này cũng thế, từng món một: phở trước, rồi bánh mì.",
          "keys": [
            "từng món một"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then the three regions, and any dish in two English sentences.",
          "sub": "Rồi ba miền, và giới thiệu món nào cũng bằng hai câu tiếng Anh."
        }
      ],
      "ref": "p15,p16,p17,p18"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ CN · Nhà bác Bình",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
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
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "center"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "steaming-bowl"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Uncle",
            "caption": "Trưa Chủ nhật · nhà bác Bình",
            "icon": "house"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "“Một ông, đúng năm ấy!”",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l2:invented",
            "color": "coral"
          },
          {
            "id": "h-ok",
            "t": "text",
            "text": "Chắc: miền Bắc, đầu thế kỷ 20",
            "x": 3996,
            "y": 1360,
            "size": 42,
            "at": "l4:north",
            "color": "accent",
            "hl": [
              {
                "text": "miền Bắc",
                "at": "l4:north"
              }
            ]
          },
          {
            "id": "h-no",
            "t": "text",
            "text": "Chưa chắc: người nấu đầu tiên",
            "x": 3996,
            "y": 1435,
            "size": 42,
            "at": "l3:record",
            "color": "muted"
          },
          {
            "id": "h-may",
            "t": "text",
            "text": "→ thêm “có lẽ”",
            "x": 4036,
            "y": 1510,
            "size": 50,
            "at": "l5:maybe",
            "color": "accent",
            "hl": [
              {
                "text": "“có lẽ”",
                "at": "l5:maybe"
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
          "say": "Sixth stop: Sunday lunch with Uncle Bình, Thảo's uncle and self-declared pho expert.",
          "sub": "Chặng sáu: trưa Chủ nhật ở nhà bác Bình, bác ruột Thảo, “chuyên gia phở” tự phong.",
          "keys": [
            "“chuyên gia phở” tự phong"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Pho was invented by one cook, in one exact year. I'm sure of it!",
          "sub": "Phở do một ông đầu bếp nghĩ ra, đúng năm ấy. Bác chắc chắn!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Easy, Uncle. No record shows who cooked the first bowl.",
          "sub": "Bác ơi, từ từ. Chưa tài liệu nào ghi rõ ai nấu bát phở đầu tiên."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "What's widely accepted: pho formed in the north, around the early twentieth century.",
          "sub": "Điều được nhiều người thừa nhận: phở hình thành ở miền Bắc, khoảng đầu thế kỷ 20.",
          "keys": [
            "miền Bắc, khoảng đầu thế kỷ 20"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Say the sure part first. For the rest, add maybe, or people say.",
          "sub": "Nói điều chắc trước. Phần còn lại thêm “có lẽ”, “người ta kể rằng”.",
          "keys": [
            "“có lẽ”"
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
      "ref": "p21"
    },
    {
      "id": "s18",
      "module": "BRK-04",
      "data": {
        "title": "Đừng vơ đũa cả nắm",
        "labels": [
          "Đừng nói",
          "Hãy nói"
        ],
        "wrong": "Phở Việt Nam là như vậy",
        "right": "Ở miền Nam, phở thường nhiều rau hơn",
        "wrongIllus": "cross-mark",
        "rightIllus": "leafy-green"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Don't say: Vietnamese pho is like this.",
          "sub": "Đừng nói: phở Việt Nam là như vậy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Say: in the south, pho often comes with more herbs.",
          "sub": "Hãy nói: ở miền Nam, phở thường ăn với nhiều rau hơn.",
          "keys": [
            "ở miền Nam"
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
            "id": "h-reg",
            "t": "text",
            "text": "Mỗi miền nấu một kiểu",
            "x": 3996,
            "y": 1610,
            "size": 44,
            "at": "l1:region",
            "hl": [
              {
                "text": "Mỗi miền",
                "at": "l1:region"
              }
            ]
          },
          {
            "id": "h-mt",
            "t": "text",
            "text": "Mắm tôm: cười, mời nếm chút",
            "x": 3996,
            "y": 1690,
            "size": 46,
            "at": "l4:taste",
            "color": "accent",
            "hl": [
              {
                "text": "mời nếm chút",
                "at": "l4:arguing"
              }
            ]
          },
          {
            "id": "h-best",
            "t": "text",
            "text": "“Ngon nhất thế giới”",
            "x": 4836,
            "y": 1770,
            "size": 44,
            "at": "l5:best",
            "color": "muted"
          },
          {
            "id": "h-bestx",
            "t": "strike",
            "over": "h-best",
            "at": "l5:world+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Vietnamese food isn't only pho and banh mi. Each region cooks its own way.",
          "sub": "Món Việt không chỉ có phở, bánh mì. Cùng một món, mỗi miền nấu một kiểu.",
          "keys": [
            "mỗi miền nấu một kiểu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Whoa. What is that smell? It's very strong!",
          "sub": "Ối. Mùi gì thế? Mạnh quá!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Shrimp paste! Just try a tiny bit first.",
          "sub": "Mắm tôm đấy! Nếm chút xíu trước nhé.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Smile and invite a small taste, instead of arguing.",
          "sub": "Cười, và mời khách nếm từng chút, thay vì cố cãi.",
          "keys": [
            "nếm từng chút"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Be proud, but don't compete. Special beats “the best in the world”.",
          "sub": "Tự hào nhưng đừng so hơn thua. Khách muốn nghe điều đặc biệt, không phải “ngon nhất thế giới”.",
          "keys": [
            "điều đặc biệt"
          ]
        }
      ],
      "ref": "p22,p23"
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
            "text": "⑦ Tối CN · Mang theo",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
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
                "steaming-bowl"
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
            "at": "l2:reason",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1252,
            "size": 62,
            "at": "l2:reason+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Một câu: vì sao",
            "x": 6039,
            "y": 1262,
            "size": 42,
            "at": "l2:reason+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1365,
            "w": 50,
            "h": 50,
            "at": "l2:herbs",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1347,
            "size": 62,
            "at": "l2:herbs+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Rau thơm, nước mắm, cân bằng",
            "x": 6039,
            "y": 1357,
            "size": 42,
            "at": "l2:herbs+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1460,
            "w": 50,
            "h": 50,
            "at": "l3:True",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1442,
            "size": 62,
            "at": "l3:True+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Chuyện thật, thêm “có lẽ”",
            "x": 6039,
            "y": 1452,
            "size": 42,
            "at": "l3:True+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1555,
            "w": 50,
            "h": 50,
            "at": "l3:region",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1537,
            "size": 62,
            "at": "l3:region+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Nói theo miền",
            "x": 6039,
            "y": 1547,
            "size": 42,
            "at": "l3:region+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1650,
            "w": 50,
            "h": 50,
            "at": "l3:invite",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1632,
            "size": 62,
            "at": "l3:invite+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Mời nếm thử",
            "x": 6039,
            "y": 1642,
            "size": 42,
            "at": "l3:invite+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Sunday night notes, before Sam asks me again.",
          "sub": "Tối Chủ nhật, ghi lại trước khi Sam hỏi lần nữa.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One short reason. Three easy points: herbs, fish sauce, balance.",
          "sub": "Một câu ngắn vì sao. Ba điểm dễ nhớ: rau thơm, nước mắm, vị cân bằng.",
          "keys": [
            "Ba điểm dễ nhớ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "True stories, with maybe when unsure. Speak by region. And invite a taste.",
          "sub": "Chuyện có thật, thêm “có lẽ” khi chưa chắc. Nói theo miền. Và mời khách nếm thử."
        }
      ],
      "ref": "p24"
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
            "at": "l5",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Trưa thứ Hai tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:shop"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "steaming-bowl"
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
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:shop",
            "caption": "Trưa thứ Hai · vẫn quán phở ấy",
            "icon": "steaming-bowl"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Tươi, cân bằng, nhiều rau, rẻ",
            "x": 7932,
            "y": 1270,
            "size": 44,
            "at": "l3:fresh",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "+ người Việt mang đi khắp nơi",
            "x": 7932,
            "y": 1350,
            "size": 42,
            "at": "l3:carried",
            "hl": [
              {
                "text": "mang đi khắp nơi",
                "at": "l3:everywhere"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Có thực mới vực được đạo”",
            "x": 7932,
            "y": 1490,
            "size": 50,
            "at": "l5:eat",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "có chuyện mới giữ được khách",
            "x": 7972,
            "y": 1570,
            "size": 44,
            "at": "l5:story",
            "color": "coral",
            "hl": [
              {
                "text": "có chuyện",
                "at": "l5:story"
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
          "say": "Next Monday. Same pho shop, same Sam, same empty bowl.",
          "sub": "Thứ Hai tuần sau. Vẫn quán phở ấy, vẫn Sam, vẫn bát sạch trơn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "So, Thảo. Why is Vietnamese food so popular?",
          "sub": "Nào Thảo. Sao món Việt nổi tiếng thế?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "It's fresh, balanced, full of herbs and cheap. And our people carried it everywhere.",
          "sub": "Tươi, cân bằng, nhiều rau, lại rẻ. Và chính người Việt mang nó đi khắp nơi.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "First you eat, then you follow the way. Thảo now has both: the bowl, and the story.",
          "sub": "“Có thực mới vực được đạo.” Giờ Thảo có cả bát phở lẫn câu chuyện.",
          "keys": [
            "cả bát phở lẫn câu chuyện"
          ]
        }
      ],
      "ref": "outro"
    },
    {
      "id": "s22",
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
            "at": "l1:fresh",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:shops",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:one dish",
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
            "x": 2728,
            "y": 180,
            "at": "l1:fresh"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8632,
            "y": 480,
            "at": "l2:shops"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2588,
            "y": 1610,
            "at": "l3:one dish"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "b-tr"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l2:rankings"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: fresh, balanced, lots of herbs, fish sauce at the base, and easy on the wallet.",
          "sub": "Tóm lại: tươi, cân bằng, nhiều rau, nước mắm làm nền, giá bình dân.",
          "keys": [
            "nước mắm làm nền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Carried abroad by small shops and travellers' stories. Not by rankings.",
          "sub": "Ra thế giới nhờ quán nhỏ và chuyện kể của khách. Không nhờ bảng xếp hạng.",
          "keys": [
            "quán nhỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Tell one dish well, say what's sure, and invite a taste.",
          "sub": "Kể kỹ một món, nói điều chắc chắn, và mời khách nếm thử.",
          "keys": [
            "Kể kỹ một món"
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
      "ref": "questions[4]",
      "data": {
        "q": "Someone tells guests Vietnamese food is famous because it topped a world ranking, what is wrong?",
        "options": [
          "Nothing is wrong, since every ranking online is checked by world food experts",
          "There is no official ranking for taste, and online lists change every year",
          "The mistake is that rankings only include desserts, never main dishes"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "trophy",
        "why": "Không có bảng xếp hạng chính thức cho ngon dở; danh sách trên mạng mỗi năm mỗi khác."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Someone tells guests Vietnamese food is famous because it topped a world ranking, what is wrong?",
          "sub": "Có người bảo món Việt nổi tiếng vì đứng đầu bảng xếp hạng thế giới, sai ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "There is no official ranking for taste, and online lists change every year.",
          "sub": "Không có bảng xếp hạng chính thức cho ngon dở, danh sách trên mạng mỗi năm mỗi khác."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Share facts you can check instead: banh mi is in the Oxford English Dictionary.",
          "sub": "Hãy kể điều kiểm chứng được: “banh mi” đã vào từ điển Oxford."
        }
      ]
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Tập nói to: “Why is Vietnamese food so popular?”",
        "sub": "Rồi làm bốn mươi câu bên dưới · bài sau: Phở"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next stop: pho. But first, forty questions below.",
          "sub": "Bài sau là phở. Nhưng trước hết, bốn mươi câu hỏi bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
