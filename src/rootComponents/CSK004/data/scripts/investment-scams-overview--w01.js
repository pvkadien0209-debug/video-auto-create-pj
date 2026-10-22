// investment-scams-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "investment-scams-overview--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "investment-scam-targets",
    "slug": "investment-scams-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Vì sao người cẩn thận vẫn mất tiền vào lừa đảo đầu tư?",
    "series": "Không mất tiền tích luỹ vì lừa đảo đầu tư — cho người 40+ nhận ra mời chào đa cấp, tiền ảo, sàn giả"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
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
      "id": "v00",
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
            "id": "a-q",
            "t": "text",
            "text": "Ai dễ bị lừa hơn?",
            "x": 60,
            "y": 80,
            "size": 76,
            "at": "l1:Who",
            "color": "accent",
            "hl": [
              {
                "text": "bị lừa",
                "at": "l1:lose"
              }
            ]
          },
          {
            "id": "a-ba",
            "t": "box",
            "x": 60,
            "y": 215,
            "w": 600,
            "h": 92,
            "at": "l2:naive",
            "stroke": 4
          },
          {
            "id": "a-a",
            "t": "text",
            "text": "A. Người nhẹ dạ",
            "x": 90,
            "y": 225,
            "size": 56,
            "at": "l2:naive+200"
          },
          {
            "id": "a-bb",
            "t": "box",
            "x": 60,
            "y": 335,
            "w": 600,
            "h": 92,
            "at": "l2:careful",
            "stroke": 4
          },
          {
            "id": "a-b",
            "t": "text",
            "text": "B. Người cẩn thận",
            "x": 90,
            "y": 345,
            "size": 56,
            "at": "l2:careful+200"
          },
          {
            "id": "a-ring",
            "t": "ring",
            "around": [
              "a-bb"
            ],
            "color": "coral",
            "stroke": 8,
            "at": "l4:careful"
          },
          {
            "id": "a-r",
            "t": "text",
            "text": "Kịch bản nhắm cả B",
            "x": 60,
            "y": 460,
            "size": 56,
            "at": "l4:scripts",
            "color": "coral",
            "hl": [
              {
                "text": "cả B",
                "at": "l4:careful"
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
          "say": "Quick guess. Who is more likely to lose savings to an investment scam?",
          "sub": "Đoán nhanh. Ai dễ mất tiền tích luỹ vì lừa đảo đầu tư hơn?",
          "keys": [
            "Đoán nhanh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A, the naive ones who know little. Or B, the careful ones?",
          "sub": "A: người nhẹ dạ, ít hiểu biết. Hay B: người cẩn thận?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Most of us pick A. It feels safe, doesn't it?",
          "sub": "Đa số chọn A. Nghe yên tâm, phải không?",
          "keys": [
            "Đa số chọn A"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But scam scripts are written to get past careful people too.",
          "sub": "Nhưng kịch bản lừa được soạn để vượt qua cả người cẩn thận.",
          "keys": [
            "vượt qua cả người cẩn thận"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "dem-nguoc",
          "offsetMs": 0
        }
      ],
      "ref": "intro,p5"
    },
    {
      "id": "v01",
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
              "set": "shop",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "money-bag"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Hai · tiệm tạp hoá",
            "icon": "convenience-store"
          },
          {
            "id": "a-msg",
            "t": "text",
            "text": "Chị Hằng: “lãi đều mỗi tháng”",
            "x": 60,
            "y": 575,
            "size": 44,
            "at": "l4:Hằng",
            "color": "muted"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Mất bò mới lo làm chuồng”",
            "x": 60,
            "y": 650,
            "size": 56,
            "at": "l5:barn",
            "color": "accent",
            "hl": [
              {
                "text": "làm chuồng",
                "at": "l5:barn"
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
          "say": "Meet Chị Hoa, fifty-one, who has run a corner shop for over twenty years.",
          "sub": "Đây là chị Hoa, năm mươi mốt tuổi, hơn hai chục năm giữ tiệm tạp hoá đầu ngõ.",
          "keys": [
            "chị Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Me, get scammed? I'm careful. I check every single banknote!",
          "sub": "Chị mà bị lừa á? Chị cẩn thận lắm. Tờ tiền nào cũng soi!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then, ting. Hằng, an old classmate: a project with steady monthly interest.",
          "sub": "Rồi “ting”. Chị Hằng, bạn học cũ: dự án “lãi đều mỗi tháng”."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: people fix the barn only after the cow is gone.",
          "sub": "Ông bà nói: “Mất bò mới lo làm chuồng.”",
          "keys": [
            "Mất bò mới lo làm chuồng"
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
          "at": "l4",
          "key": "ting",
          "offsetMs": 300
        }
      ],
      "ref": "intro"
    },
    {
      "id": "v02",
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
            "text": "Vì sao cẩn thận vẫn mất?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:careful",
            "hl": [
              {
                "text": "vẫn mất",
                "at": "l1:still lose"
              }
            ]
          },
          {
            "id": "b-big",
            "t": "text",
            "text": "Lớn cỡ nào?",
            "x": 2028,
            "y": 170,
            "size": 56,
            "at": "l2:big",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So why do careful people still lose money to investment scams?",
          "sub": "Vậy vì sao người cẩn thận vẫn mất tiền vào lừa đảo đầu tư?",
          "keys": [
            "người cẩn thận vẫn mất tiền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "First, how big is this? Bigger than any shop's cash drawer.",
          "sub": "Trước hết, chuyện này lớn cỡ nào? Lớn hơn mọi ngăn kéo đựng tiền."
        }
      ],
      "ref": "intro"
    },
    {
      "id": "v03",
      "module": "BRK-03",
      "data": {
        "value": 6000,
        "prefix": "> ",
        "suffix": " tỷ",
        "label": "tỷ đồng thiệt hại lừa đảo trực tuyến, 11 tháng 2025",
        "illus": "money-with-wings"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The police estimate online scam losses for eleven months of twenty twenty-five.",
          "sub": "Bộ Công an ước tính thiệt hại do lừa đảo trực tuyến trong 11 tháng năm 2025."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "More than six thousand billion dong.",
          "sub": "Hơn 6.000 tỷ đồng.",
          "keys": [
            "Hơn 6.000 tỷ đồng"
          ]
        }
      ],
      "ref": "p1"
    },
    {
      "id": "v04",
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
            "id": "b-60",
            "t": "text",
            "text": "Khảo sát 60.300 người dùng",
            "x": 2028,
            "y": 250,
            "size": 46,
            "at": "l1:survey"
          },
          {
            "id": "b-18",
            "t": "text",
            "text": "Nạn nhân: 0,45% → 0,18%",
            "x": 2028,
            "y": 325,
            "size": 46,
            "at": "l2:fell"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Mời lãi cao: đứng thứ 3",
            "x": 2028,
            "y": 400,
            "size": 50,
            "at": "l3:third",
            "color": "coral",
            "hl": [
              {
                "text": "thứ 3",
                "at": "l3:third"
              }
            ]
          },
          {
            "id": "b-88",
            "t": "text",
            "text": "88,05% bị chào mời",
            "x": 2868,
            "y": 170,
            "size": 46,
            "at": "l4:offered"
          },
          {
            "id": "b-32",
            "t": "text",
            "text": "Chỉ 32,12% báo cơ quan",
            "x": 2868,
            "y": 245,
            "size": 46,
            "at": "l5:authorities",
            "color": "coral"
          },
          {
            "id": "b-12",
            "t": "text",
            "text": "12,03% im lặng chịu mất",
            "x": 2868,
            "y": 320,
            "size": 46,
            "at": "l6:swallowed",
            "color": "muted"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Báo Điện tử Chính phủ (07/01/2026) — Bộ Công an; khảo sát Hiệp hội An ninh mạng quốc gia 2025",
            "x": 2028,
            "y": 735,
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
          "say": "A twenty twenty-five survey asked sixty thousand three hundred users.",
          "sub": "Khảo sát 2025 của Hiệp hội An ninh mạng quốc gia: 60.300 người dùng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Victims fell to about zero point one eight percent, from zero point four five.",
          "sub": "Tỷ lệ nạn nhân giảm còn khoảng 0,18%, từ 0,45% năm 2024.",
          "keys": [
            "0,18%"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "High return investment offers ranked third, after fake officials and fake prizes.",
          "sub": "Mời đầu tư lãi cao đứng thứ ba, sau giả danh cơ quan chức năng và trúng thưởng giả.",
          "keys": [
            "đứng thứ ba"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Eighty-eight point oh five percent had been offered services they never asked for.",
          "sub": "88,05% người dùng từng bị chào mời dịch vụ họ không hề yêu cầu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Only thirty-two point one two percent of victims told the authorities.",
          "sub": "Chỉ 32,12% nạn nhân báo cho cơ quan chức năng.",
          "keys": [
            "Chỉ 32,12%"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Twelve point oh three percent just swallowed the loss.",
          "sub": "12,03% chấp nhận mất, không làm gì."
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "v05",
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
            "text": "Không phải: bạn là ai",
            "x": 2028,
            "y": 480,
            "size": 50,
            "at": "l1:not",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l1:but"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: vụ lừa dựng thế nào",
            "x": 2028,
            "y": 545,
            "size": 54,
            "at": "l1:built",
            "color": "accent",
            "hl": [
              {
                "text": "dựng thế nào",
                "at": "l1:built"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 625,
            "w": 215,
            "h": 84,
            "at": "l2:seven+300",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 625,
            "w": 215,
            "h": 84,
            "at": "l2:seven+550",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 625,
            "w": 215,
            "h": 84,
            "at": "l2:seven+800",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 625,
            "w": 215,
            "h": 84,
            "at": "l2:seven+1050",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 625,
            "w": 215,
            "h": 84,
            "at": "l2:seven+1300",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 625,
            "w": 215,
            "h": 84,
            "at": "l2:seven+1550",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 625,
            "w": 215,
            "h": 84,
            "at": "l2:seven+1800",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T3",
            "x": 2053,
            "y": 637,
            "size": 44,
            "at": "l2:seven+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T4",
            "x": 2288,
            "y": 637,
            "size": 44,
            "at": "l2:seven+670"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T5",
            "x": 2523,
            "y": 637,
            "size": 44,
            "at": "l2:seven+920"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T6",
            "x": 2758,
            "y": 637,
            "size": 44,
            "at": "l2:seven+1170"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T7",
            "x": 2993,
            "y": 637,
            "size": 44,
            "at": "l2:seven+1420"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "CN",
            "x": 3228,
            "y": 637,
            "size": 44,
            "at": "l2:seven+1670"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "CN tối",
            "x": 3463,
            "y": 637,
            "size": 44,
            "at": "l2:seven+1920"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The answer is not who you are, but how the scam is built.",
          "sub": "Câu trả lời không nằm ở bạn là ai, mà ở cách vụ lừa được dựng.",
          "keys": [
            "cách vụ lừa được dựng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So let's follow Chị Hoa for one week, in seven stops.",
          "sub": "Vậy theo chị Hoa một tuần, bảy chặng.",
          "keys": [
            "một tuần, bảy chặng"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "v06",
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
            "text": "① Thứ Ba · Kịch bản",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday"
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
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "hot-beverage",
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:neighbour",
            "caption": "Thứ Ba · quán nước đầu ngõ",
            "icon": "hot-beverage"
          },
          {
            "id": "c-old",
            "t": "text",
            "text": "Bác Bình: từng mất tiền",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l4:careful",
            "color": "coral"
          },
          {
            "id": "c-luck",
            "t": "text",
            "text": "Không trông vào may rủi",
            "x": 3996,
            "y": 260,
            "size": 52,
            "at": "l5:luck",
            "color": "accent",
            "hl": [
              {
                "text": "may rủi",
                "at": "l5:luck"
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
          "say": "Stop one, Tuesday. Chị Hoa shows the message to her neighbour.",
          "sub": "Chặng một, thứ Ba. Chị Hoa đưa tin nhắn cho hàng xóm xem.",
          "keys": [
            "Chặng một"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Bác Bình, retired, famous on this street for being careful.",
          "sub": "Đây là bác Bình, đã nghỉ hưu, cẩn thận có tiếng cả ngõ.",
          "keys": [
            "bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Take it slow. Years ago, I lost money to a monthly interest project.",
          "sub": "Từ từ, mình xem lại đã. Năm xưa bác cũng mất tiền vào một dự án lãi tháng.",
          "pose": "explain",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Yes, me. Careful old Bình.",
          "sub": "Ừ, chính bác. Bác Bình cẩn thận đấy.",
          "face": "sad"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "How? Because scammers don't rely on luck.",
          "sub": "Sao lại thế? Vì kẻ gian không trông vào may rủi.",
          "keys": [
            "không trông vào may rủi"
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
      "ref": "p3"
    },
    {
      "id": "v07",
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
            "id": "c-box",
            "t": "illus",
            "name": "package",
            "x": 3996,
            "y": 340,
            "size": 100,
            "at": "l2:cartons"
          },
          {
            "id": "c-200",
            "t": "text",
            "text": "Hàng trăm sổ kịch bản",
            "x": 4116,
            "y": 360,
            "size": 52,
            "at": "l2:hundreds",
            "hl": [
              {
                "text": "sổ kịch bản",
                "at": "l2:script"
              }
            ]
          },
          {
            "id": "c-step",
            "t": "text",
            "text": "Tiếp cận → tin → cảm xúc → tiền",
            "x": 3996,
            "y": 460,
            "size": 46,
            "at": "l3:Approach"
          },
          {
            "id": "c-tv",
            "t": "text",
            "text": "Như phim truyền hình",
            "x": 3996,
            "y": 545,
            "size": 52,
            "at": "l4:drama",
            "color": "accent",
            "hl": [
              {
                "text": "phim truyền hình",
                "at": "l4:drama"
              }
            ]
          },
          {
            "id": "c-rich",
            "t": "text",
            "text": "Ảnh sang chảnh, “nhà đầu tư”",
            "x": 3996,
            "y": 640,
            "size": 46,
            "at": "l5:luxury",
            "color": "coral"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Báo Điện tử Chính phủ (15/7/2025) — đường dây lừa đảo đầu tư xuyên quốc gia",
            "x": 3996,
            "y": 735,
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
          "say": "In twenty twenty-five, police broke up a cross-border investment scam ring.",
          "sub": "Năm 2025, công an triệt phá một đường dây lừa đảo đầu tư xuyên quốc gia."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "They seized two cartons holding hundreds of script notebooks.",
          "sub": "Thu giữ hai thùng carton chứa hàng trăm sổ tay kịch bản.",
          "keys": [
            "hàng trăm sổ tay kịch bản"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Approach, build trust, play on feelings, take the money.",
          "sub": "Tiếp cận, gây lòng tin, thao túng cảm xúc, chiếm đoạt tài sản."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Pre-written, like a TV drama.",
          "sub": "Soạn sẵn, như phim truyền hình.",
          "keys": [
            "Soạn sẵn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Profiles flaunt luxury. Self-styled investors befriend you first, then invite.",
          "sub": "Tài khoản khoe sống sang, tự nhận nhà đầu tư, làm quen trước rồi mới mời.",
          "keys": [
            "làm quen trước"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "v08",
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
            "text": "② Thứ Tư · Trình tự",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:son",
            "caption": "Tối thứ Tư · gọi video",
            "icon": "mobile-phone"
          },
          {
            "id": "d-q",
            "t": "text",
            "text": "“Tháng nào cũng có lãi”",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l3:every month",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, Wednesday night. Chị Hoa video calls her son.",
          "sub": "Chặng hai, tối thứ Tư. Chị Hoa gọi video cho con trai.",
          "keys": [
            "Chặng hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, twenty-three, works in IT, practically lives on his phone.",
          "sub": "Đây là Dũng, hai mươi ba tuổi, làm IT, gần như sống trên điện thoại.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Hằng says she gets paid every month. So it's real, right?",
          "sub": "Cô Hằng bảo tháng nào cũng nhận lãi. Vậy là thật hả con?",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Mum, the police handbook describes exactly that. Let me show you.",
          "sub": "Mẹ ơi, cẩm nang của Bộ Công an tả đúng y vậy. Để con chỉ.",
          "pose": "explain"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p4,p13"
    },
    {
      "id": "v09",
      "module": "BRK-08",
      "data": {
        "title": "Trình tự quen thuộc",
        "points": [
          {
            "label": "Mở tài khoản",
            "sub": "được hướng dẫn",
            "illus": "mobile-phone"
          },
          {
            "label": "Thử nhỏ",
            "sub": "có lãi thật",
            "illus": "coin"
          },
          {
            "label": "Góp lớn",
            "sub": "được mời thêm",
            "illus": "money-bag"
          },
          {
            "label": "Muốn rút",
            "sub": "lỗi, đóng phí",
            "illus": "warning"
          },
          {
            "label": "Bị khoá",
            "sub": "cắt liên lạc",
            "illus": "locked"
          }
        ],
        "current": 4
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Open an account. Test a small sum, get real profit. Then invest more.",
          "sub": "Mở tài khoản. Thử số tiền nhỏ, có lãi thật. Rồi góp số lớn hơn."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Withdraw? System error, wrong transfer note, pay a fee. Then it's locked.",
          "sub": "Muốn rút? Lỗi hệ thống, sai nội dung, đóng thêm phí. Rồi bị khoá.",
          "keys": [
            "đóng thêm phí"
          ]
        }
      ],
      "ref": "p4"
    },
    {
      "id": "v10",
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
            "id": "d-bait",
            "t": "text",
            "text": "Lãi tháng đầu = mồi",
            "x": 5964,
            "y": 260,
            "size": 58,
            "at": "l1:bait",
            "color": "accent",
            "hl": [
              {
                "text": "mồi",
                "at": "l1:bait"
              }
            ]
          },
          {
            "id": "d-end",
            "t": "text",
            "text": "Sàn sập, cắt liên lạc",
            "x": 5964,
            "y": 350,
            "size": 50,
            "at": "l2:vanishes",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So the first month's profit is not proof. It's bait.",
          "sub": "Vậy lãi tháng đầu chưa phải bằng chứng. Đó là mồi.",
          "keys": [
            "Đó là mồi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then the platform vanishes, and the contact goes silent.",
          "sub": "Rồi sàn bị đánh sập, đối tượng cắt liên lạc."
        }
      ],
      "ref": "p4"
    },
    {
      "id": "v11",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "labels": [
          "Hiểu lầm",
          "Thật ra"
        ],
        "wrong": "Chỉ người nhẹ dạ mới bị lừa đầu tư",
        "right": "Kịch bản soạn để vượt qua cả sự cẩn thận",
        "wrongIllus": "see-no-evil-monkey",
        "rightIllus": "scroll"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Only naive people fall for investment scams?",
          "sub": "Chỉ người nhẹ dạ mới bị lừa đầu tư?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. The script is written to get past careful people.",
          "sub": "Không. Kịch bản được soạn để vượt qua cả sự cẩn thận.",
          "keys": [
            "vượt qua cả sự cẩn thận"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "v12",
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
            "id": "d-1",
            "t": "text",
            "text": "Lần thử đầu: lãi thật",
            "x": 5964,
            "y": 450,
            "size": 44,
            "at": "l1:test"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Giấy tờ: trông như thật",
            "x": 5964,
            "y": 515,
            "size": 44,
            "at": "l1:papers"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Người mời: bạn lâu năm",
            "x": 5964,
            "y": 580,
            "size": 44,
            "at": "l1:friend"
          },
          {
            "id": "d-gap",
            "t": "text",
            "text": "“Mình không dễ bị lừa” = chỗ hở",
            "x": 5964,
            "y": 655,
            "size": 44,
            "at": "l3:gap",
            "color": "coral",
            "hl": [
              {
                "text": "chỗ hở",
                "at": "l3:gap"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: cẩm nang Bộ Công an (BĐT Chính phủ 15/7/2024) · BĐT Chính phủ (20/3/2026)",
            "x": 5964,
            "y": 735,
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
          "say": "The first test pays real money. The papers look real. The inviter may be an old friend.",
          "sub": "Lần thử đầu có lãi thật, giấy tờ trông như thật, người mời có khi là bạn lâu năm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A government paper's book review says crooks exploit complacency and a lowered guard.",
          "sub": "Bài giới thiệu sách trên Báo Điện tử Chính phủ nói kẻ gian khai thác “tâm lý chủ quan, thiếu cảnh giác”.",
          "keys": [
            "tâm lý chủ quan, thiếu cảnh giác"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So that feeling, I'm not easy to fool, is exactly the gap.",
          "sub": "Nên cảm giác “mình không dễ bị lừa” chính là chỗ hở.",
          "keys": [
            "chính là chỗ hở"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "v13",
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
            "text": "③ Thứ Năm · Cho biết",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Thursday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "shop",
              "label": "Tin nhắn chị Hằng",
              "actor": {
                "id": "hoa",
                "side": "left"
              },
              "contact": {
                "name": "Chị Hằng (bạn cũ)",
                "illus": "woman"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Hoa ơi, chuyển thử ít thôi cho biết. Tháng đầu là có lãi liền!",
                  "at": "l2"
                }
              ]
            },
            "at": "l1:texts",
            "caption": "Thứ Năm · tin nhắn chị Hằng",
            "icon": "mobile-phone"
          },
          {
            "id": "e-ng",
            "t": "text",
            "text": "Bạn lâu năm → ngại từ chối",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l3:rude",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, Thursday. Hằng, Chị Hoa's old classmate, texts again.",
          "sub": "Chặng ba, thứ Năm. Chị Hằng, bạn học cũ của chị Hoa, lại nhắn.",
          "keys": [
            "Chặng ba"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Just send a little to try. You'll see profit in the first month!",
          "sub": "“Chuyển thử ít thôi cho biết. Tháng đầu là có lãi liền!”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "She's an old friend. Saying no feels so rude.",
          "sub": "Bạn lâu năm, từ chối thì ngại quá.",
          "face": "worried",
          "pose": "phone"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "ting",
          "offsetMs": 0
        }
      ],
      "ref": "p13"
    },
    {
      "id": "v14",
      "module": "DLG-01",
      "data": {
        "set": "shop",
        "label": "Thứ Năm · 21:00",
        "actors": [
          {
            "id": "hoa",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nể bạn, chuyển ít “cho biết”",
          "why": "Tháng đầu nhận lãi, yên tâm, rồi được mời góp thêm: đúng trình tự của kịch bản.",
          "rule": "Cần một cách kiểm tra làm mỗi lần"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Fine, just a little, so I don't upset her.",
          "sub": "Thôi, chuyển ít cho biết, khỏi mất lòng bạn.",
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
          "say": "First month, profit arrives. You relax. Then comes the invitation to add more.",
          "sub": "Tháng đầu nhận lãi, yên tâm, rồi được mời góp thêm. Đúng trình tự kịch bản.",
          "keys": [
            "được mời góp thêm"
          ]
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
          "who": "hoa",
          "say": "Not yet. I'll check first, then decide.",
          "sub": "Khoan. Để chị kiểm tra trước, rồi mới quyết.",
          "phase": "redo",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Being careful isn't enough. You need a check you do every time.",
          "sub": "Đúng. Cẩn thận thôi chưa đủ, cần một cách kiểm tra làm mỗi lần.",
          "phase": "redo",
          "keys": [
            "cách kiểm tra làm mỗi lần"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p13,p6"
    },
    {
      "id": "v15",
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
            "id": "e-no",
            "t": "text",
            "text": "Cẩn thận thôi: chưa đủ",
            "x": 7932,
            "y": 260,
            "size": 52,
            "at": "l1:enough"
          },
          {
            "id": "e-rt",
            "t": "text",
            "text": "Một quy trình, mỗi lần",
            "x": 7932,
            "y": 350,
            "size": 58,
            "at": "l2:routine",
            "color": "accent",
            "hl": [
              {
                "text": "mỗi lần",
                "at": "l2:every time"
              }
            ]
          },
          {
            "id": "e-who",
            "t": "text",
            "text": "dù người mời là ai",
            "x": 7932,
            "y": 440,
            "size": 52,
            "at": "l2:whoever",
            "hl": [
              {
                "text": "là ai",
                "at": "l2:whoever"
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
          "say": "Lesson one of the series: careful is not enough.",
          "sub": "Bài học đầu của cả chuỗi: cẩn thận thôi chưa đủ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One routine, every time, whoever is inviting. Even your oldest friend.",
          "sub": "Một quy trình, lần nào cũng làm, dù người mời là ai. Kể cả bạn thân nhất.",
          "keys": [
            "dù người mời là ai"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "v16",
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Sáu · Dấu hiệu",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1265,
            "w": 46,
            "h": 46,
            "at": "l2:returns",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1247,
            "size": 58,
            "at": "l2:returns+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Lãi cao, “chắc thắng”",
            "x": 130,
            "y": 1257,
            "size": 48,
            "at": "l2:returns+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1345,
            "w": 46,
            "h": 46,
            "at": "l2:pressure",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1327,
            "size": 58,
            "at": "l2:pressure+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Thúc chuyển tiền gấp",
            "x": 130,
            "y": 1337,
            "size": 48,
            "at": "l2:pressure+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1425,
            "w": 46,
            "h": 46,
            "at": "l3:Rewards",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1407,
            "size": 58,
            "at": "l3:Rewards+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Thưởng khi rủ người",
            "x": 130,
            "y": 1417,
            "size": 48,
            "at": "l3:Rewards+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1505,
            "w": 46,
            "h": 46,
            "at": "l3:fees",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1487,
            "size": 58,
            "at": "l3:fees+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Nộp phí mới cho rút",
            "x": 130,
            "y": 1497,
            "size": 48,
            "at": "l3:fees+200"
          },
          {
            "id": "f-20",
            "t": "text",
            "text": "20% số dư · trong 5 tiếng",
            "x": 880,
            "y": 1290,
            "size": 48,
            "at": "l4:twenty",
            "color": "coral",
            "hl": [
              {
                "text": "5 tiếng",
                "at": "l4:five hours"
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
          "say": "Stop four, Friday. What do police warnings keep repeating?",
          "sub": "Chặng bốn, thứ Sáu. Cảnh báo của công an cứ lặp lại điều gì?",
          "keys": [
            "Chặng bốn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "High returns, sure to win. Pressure to pay fast.",
          "sub": "Cam kết lãi cao, “chắc thắng”. Thúc ép chuyển tiền gấp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Rewards for bringing in people. And fees before you can withdraw.",
          "sub": "Được thưởng khi rủ thêm người. Và đòi nộp phí mới cho rút tiền."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hanoi police: one victim in twenty twenty-four had to pay twenty percent of the balance within five hours.",
          "sub": "Công an Hà Nội: năm 2024, một nạn nhân bị đòi nộp khoản bằng 20% số dư trong 5 tiếng mới được rút lãi.",
          "keys": [
            "20% số dư"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "v17",
      "module": "BRK-01",
      "data": {
        "illus": "coin",
        "around": [
          "chart-increasing",
          "money-with-wings"
        ],
        "label": "Lãi 24% mỗi ngày?!",
        "note": "Sàn vàng ảo, 2025: càng khó tin, càng phải dừng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Freeze. A fake gold trading platform, twenty twenty-five.",
          "sub": "Dừng hình. Một sàn giao dịch vàng ảo, năm 2025."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "It promised returns of up to twenty-four percent a day.",
          "sub": "Hứa lãi lên tới 24% mỗi ngày.",
          "keys": [
            "24% mỗi ngày"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "v18",
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
            "id": "f-un",
            "t": "text",
            "text": "Càng khó tin → càng dừng",
            "x": 60,
            "y": 1610,
            "size": 52,
            "at": "l1:unbelievable",
            "hl": [
              {
                "text": "càng dừng",
                "at": "l1:stop"
              }
            ]
          },
          {
            "id": "f-wk",
            "t": "text",
            "text": "“Suất chỉ tới cuối tuần”",
            "x": 880,
            "y": 1390,
            "size": 46,
            "at": "l2:weekend",
            "color": "coral"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Lãi cao + hối thúc = dừng",
            "x": 60,
            "y": 1700,
            "size": 58,
            "at": "l3:enough",
            "color": "accent",
            "hl": [
              {
                "text": "= dừng",
                "at": "l3:enough"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Công an Hà Nội (Cổng TTĐT Chính phủ – Thăng Long, 12/12/2024) · Báo Điện tử Chính phủ (15/7/2025)",
            "x": 60,
            "y": 1825,
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
          "say": "The more unbelievable the number, the more reason to stop and check before any transfer.",
          "sub": "Con số càng khó tin, càng là lý do dừng lại kiểm tra trước khi nghĩ tới chuyện chuyển tiền.",
          "keys": [
            "dừng lại kiểm tra"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "And Hằng says the spots only last until the weekend!",
          "sub": "Mà Hằng còn bảo suất chỉ còn tới cuối tuần!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "High promised returns plus a hurry. That alone is enough to stop.",
          "sub": "Lãi hứa quá cao cộng lời hối thúc. Thế là đủ để dừng tay.",
          "keys": [
            "đủ để dừng tay"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "v19",
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Bảy · Lãi từ đâu?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "memo",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Thảo",
            "caption": "Thứ Bảy · Thảo về nhà",
            "icon": "house"
          },
          {
            "id": "g-pz",
            "t": "text",
            "text": "Ponzi: người sau trả người trước",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l4:Ponzi",
            "color": "accent",
            "hl": [
              {
                "text": "người sau",
                "at": "l4:later"
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
          "say": "Stop five, Saturday. Meet Thảo, Chị Hoa's elder daughter, an accountant.",
          "sub": "Chặng năm, thứ Bảy. Đây là Thảo, con gái lớn chị Hoa, làm kế toán.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First question, Mum. Where does the interest come from?",
          "sub": "Thứ nhất, mẹ ơi: tiền lãi lấy từ đâu?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "From... the project. Hằng never said what it sells.",
          "sub": "Thì... từ dự án. Hằng chưa từng nói nó bán gì.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The police call one model Ponzi: borrow from the later ones to pay the earlier.",
          "sub": "Bộ Công an gọi một mô hình là Ponzi: “vay của người sau trả cho người trước”.",
          "keys": [
            "vay của người sau trả cho người trước"
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
      "ref": "p10"
    },
    {
      "id": "v20",
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
            "id": "g-new",
            "t": "text",
            "text": "Tiền người mới",
            "x": 2028,
            "y": 1350,
            "size": 48,
            "at": "l1:new"
          },
          {
            "id": "g-ar",
            "t": "arrow",
            "from": [
              2378,
              1380
            ],
            "to": [
              2488,
              1380
            ],
            "at": "l1:paid"
          },
          {
            "id": "g-old",
            "t": "text",
            "text": "lãi người cũ",
            "x": 2508,
            "y": 1350,
            "size": 48,
            "at": "l1:paid+200",
            "color": "coral"
          },
          {
            "id": "g-stand",
            "t": "text",
            "text": "Đứng được khi luôn có người mới",
            "x": 2028,
            "y": 1435,
            "size": 42,
            "at": "l2:newcomers",
            "hl": [
              {
                "text": "người mới",
                "at": "l2:newcomers"
              }
            ]
          },
          {
            "id": "g-mlm",
            "t": "text",
            "text": "Biến tướng: tiền ảo, ví điện tử",
            "x": 2028,
            "y": 1520,
            "size": 44,
            "at": "l3:crypto"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Bộ Công an (BĐT Chính phủ 14/11/2019) · Ủy ban Cạnh tranh Quốc gia (BĐT Chính phủ 28/02/2024)",
            "x": 2028,
            "y": 1825,
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
          "say": "Old investors' profits are paid with new investors' money.",
          "sub": "Lãi của người cũ được trả bằng tiền của người mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So it only stands while newcomers keep paying in.",
          "sub": "Nên mô hình chỉ đứng được khi luôn có người mới nộp tiền.",
          "keys": [
            "luôn có người mới nộp tiền"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The competition commission adds: disguised multi-level schemes keep growing, into finance projects, crypto, e-wallets.",
          "sub": "Ủy ban Cạnh tranh Quốc gia: đa cấp biến tướng ngày càng tăng, kéo góp tiền vào dự án tài chính, tiền ảo, ví điện tử."
        }
      ],
      "ref": "p10"
    },
    {
      "id": "v21",
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
            "at": "l1",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
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
            "id": "g-app",
            "t": "text",
            "text": "Sàn giả: lãi đẹp trên màn",
            "x": 2028,
            "y": 1605,
            "size": 46,
            "at": "l2:app",
            "color": "coral"
          },
          {
            "id": "g-tv",
            "t": "text",
            "text": "Rút → lỗi, thuế, phí",
            "x": 2028,
            "y": 1675,
            "size": 48,
            "at": "l3:error",
            "hl": [
              {
                "text": "thuế, phí",
                "at": "l3:tax"
              }
            ]
          },
          {
            "id": "g-scr",
            "t": "text",
            "text": "= tiền trong tivi",
            "x": 2028,
            "y": 1745,
            "size": 46,
            "at": "l3:screen",
            "color": "accent",
            "hl": [
              {
                "text": "tiền trong tivi",
                "at": "l3:screen"
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
          "say": "Second thing, Mum. There are fake trading apps too.",
          "sub": "Thứ hai, mẹ ơi, còn có cả sàn giả nữa.",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Police, twenty twenty-four: chat groups, fake experts, an app with lovely profits.",
          "sub": "Bộ Công an 2024: nhóm chat, “chuyên gia”, ứng dụng báo lãi rất đẹp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Withdraw, and there's an error, or a tax, or a fee. Money on a TV screen.",
          "sub": "Muốn rút thì báo lỗi, hoặc đòi nộp thuế, phí. Tiền trong tivi thôi.",
          "keys": [
            "Tiền trong tivi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And most of these groups run from abroad. Very hard to investigate.",
          "sub": "Phần lớn nhóm chat này ở nước ngoài, nên điều tra rất khó."
        }
      ],
      "ref": "p11"
    },
    {
      "id": "v22",
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
            "text": "⑥ Chủ nhật · 10 phút",
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
                  "id": "dung",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "mobile-phone",
                "memo"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
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
            "at": "l1:home",
            "caption": "Chủ nhật · Dũng về nhà",
            "icon": "mobile-phone"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1265,
            "w": 46,
            "h": 46,
            "at": "l2:Write",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1247,
            "size": 58,
            "at": "l2:Write+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Ghi lại lời mời",
            "x": 4066,
            "y": 1257,
            "size": 46,
            "at": "l2:Write+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1343,
            "w": 46,
            "h": 46,
            "at": "l2:licence",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1325,
            "size": 58,
            "at": "l2:licence+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Tra giấy phép",
            "x": 4066,
            "y": 1335,
            "size": 46,
            "at": "l2:licence+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1421,
            "w": 46,
            "h": 46,
            "at": "l2:Compare",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1403,
            "size": 58,
            "at": "l2:Compare+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "So dấu hiệu",
            "x": 4066,
            "y": 1413,
            "size": 46,
            "at": "l2:Compare+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1499,
            "w": 46,
            "h": 46,
            "at": "l2:third",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1481,
            "size": 58,
            "at": "l2:third+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Hỏi người thứ ba",
            "x": 4066,
            "y": 1491,
            "size": 46,
            "at": "l2:third+200"
          },
          {
            "id": "h-ok",
            "t": "text",
            "text": "Chỉ qua nền tảng được cấp phép",
            "x": 3996,
            "y": 1580,
            "size": 44,
            "at": "l4:licensed",
            "color": "accent",
            "hl": [
              {
                "text": "được cấp phép",
                "at": "l4:licensed"
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
          "say": "Stop six, Sunday. Dũng comes home with a ten-minute check.",
          "sub": "Chặng sáu, Chủ nhật. Dũng về nhà, mang theo bài kiểm tra mười phút.",
          "keys": [
            "mười phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Write down the offer. Check the licence. Compare the signs. Ask a third person.",
          "sub": "Ghi lại lời mời. Tra giấy phép. So dấu hiệu. Hỏi một người thứ ba.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Police advice: check several sources, like the State Securities Commission's official site.",
          "sub": "Công an khuyên: tra nhiều nguồn, nhất là trang của Ủy ban Chứng khoán Nhà nước."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And only invest through platforms licensed by the State.",
          "sub": "Và chỉ đầu tư qua nền tảng được Nhà nước cấp phép.",
          "keys": [
            "được Nhà nước cấp phép"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "v24",
      "module": "BRK-10",
      "data": {
        "quote": "Mình có nguyên tắc kiểm tra trước khi bỏ tiền",
        "mark": "kiểm tra trước",
        "by": "Chị Hoa, Chủ nhật",
        "illus": "memo"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "My rule: I check before I pay.",
          "sub": "Nguyên tắc của mình: kiểm tra trước khi bỏ tiền.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Said aloud, nobody feels doubted.",
          "sub": "Nói thành lời, chẳng ai bị nghi.",
          "keys": [
            "thành lời"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "v25",
      "module": "BRK-07",
      "data": {
        "question": "Người thân rủ, hoặc đã lỡ chuyển thì sao?",
        "illus": "thinking-face"
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
          "say": "What if the inviter is family, or the money is already gone?",
          "sub": "Nếu người rủ là người thân, hoặc đã lỡ chuyển tiền rồi thì sao?"
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "v26",
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Tối Chủ nhật · Người quen",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday night"
          },
          {
            "id": "i-hard",
            "t": "text",
            "text": "Người quen: khó nhất",
            "x": 5964,
            "y": 1260,
            "size": 56,
            "at": "l1:hardest",
            "color": "coral",
            "hl": [
              {
                "text": "khó nhất",
                "at": "l1:hardest"
              }
            ]
          },
          {
            "id": "i-tr",
            "t": "text",
            "text": "Từ chối = không tin nhau?",
            "x": 5964,
            "y": 1350,
            "size": 46,
            "at": "l2:trust",
            "color": "muted"
          },
          {
            "id": "i-trx",
            "t": "strike",
            "over": "i-tr",
            "at": "l3:rule"
          },
          {
            "id": "i-r1",
            "t": "text",
            "text": "Nói nguyên tắc, cùng kiểm tra",
            "x": 5964,
            "y": 1440,
            "size": 46,
            "at": "l3:rule",
            "color": "accent",
            "hl": [
              {
                "text": "cùng kiểm tra",
                "at": "l3:together"
              }
            ]
          },
          {
            "id": "i-r2",
            "t": "text",
            "text": "Không cho vay để “đầu tư”",
            "x": 5964,
            "y": 1520,
            "size": 46,
            "at": "l3:lend"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, Sunday night. Offers from people you know are the hardest.",
          "sub": "Chặng bảy, tối Chủ nhật. Lời mời từ người quen là phần khó nhất.",
          "keys": [
            "Chặng bảy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Because saying no can sound like, I don't trust you.",
          "sub": "Vì từ chối dễ bị hiểu là không tin nhau."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A later lesson: state your rule, lend nothing for investing, check together.",
          "sub": "Bài sau: nói nguyên tắc của mình, không cho vay để “đầu tư”, rủ nhau cùng kiểm tra.",
          "keys": [
            "cùng kiểm tra"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "v27",
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
            "id": "i-bank",
            "t": "text",
            "text": "Lỡ chuyển: gọi ngân hàng ngay",
            "x": 6784,
            "y": 1260,
            "size": 44,
            "at": "l1:bank",
            "color": "accent",
            "hl": [
              {
                "text": "ngân hàng ngay",
                "at": "l1:right away"
              }
            ]
          },
          {
            "id": "i-ser",
            "t": "text",
            "text": "→ chuỗi “Đã bị lừa thì làm gì”",
            "x": 6784,
            "y": 1340,
            "size": 40,
            "at": "l1:damage",
            "color": "muted"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "“Gỡ lại tiền” = cú lừa hai",
            "x": 6784,
            "y": 1430,
            "size": 46,
            "at": "l4:number two",
            "color": "coral",
            "hl": [
              {
                "text": "cú lừa hai",
                "at": "l4:number two"
              }
            ]
          },
          {
            "id": "i-inv",
            "t": "text",
            "text": "Đầu tư thật → chuỗi chứng khoán",
            "x": 6784,
            "y": 1520,
            "size": 42,
            "at": "l4:stocks"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: Báo Điện tử Chính phủ · Thư viện Pháp luật (07/12/2024)",
            "x": 5964,
            "y": 1825,
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
          "say": "Already transferred? Contact your bank or the authorities right away to limit the damage.",
          "sub": "Đã lỡ chuyển? Liên hệ ngay ngân hàng hoặc cơ quan chức năng để giảm thiệt hại.",
          "keys": [
            "Liên hệ ngay ngân hàng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Careful: scammers then invite victims to a new platform that promises to win it all back.",
          "sub": "Cẩn thận: kẻ gian còn mời nạn nhân sang sàn “mới”, hứa gỡ lại tiền.",
          "keys": [
            "hứa gỡ lại tiền"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That's scam number two. Want to invest for real? See our first-time stocks series.",
          "sub": "Đó là cú lừa thứ hai. Muốn đầu tư thật, xem chuỗi chứng khoán lần đầu.",
          "keys": [
            "cú lừa thứ hai"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "v28",
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
            "text": "Tối thứ Hai · tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "label": "Lại tin nhắn chị Hằng",
              "actor": {
                "id": "hoa",
                "side": "left"
              },
              "contact": {
                "name": "Chị Hằng (bạn cũ)",
                "illus": "woman"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Hoa ơi, chốt chưa? Suất sắp hết rồi đó!",
                  "at": "l2"
                },
                {
                  "from": "me",
                  "text": "Mình có nguyên tắc kiểm tra trước khi bỏ tiền. Gửi mình tên đơn vị nhé.",
                  "at": "l3"
                }
              ]
            },
            "at": "l1:Monday",
            "caption": "Tối thứ Hai · lại tiếng “ting”",
            "icon": "mobile-phone"
          },
          {
            "id": "j-box",
            "t": "box",
            "x": 7922,
            "y": 1255,
            "w": 640,
            "h": 110,
            "at": "l4:sticky",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "j-note",
            "t": "text",
            "text": "Kiểm trước, chuyển sau",
            "x": 7947,
            "y": 1270,
            "size": 60,
            "at": "l4:sticky+200",
            "color": "accent",
            "hl": [
              {
                "text": "Kiểm trước",
                "at": "l4:first"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Mất bò mới lo làm chuồng”",
            "x": 7932,
            "y": 1410,
            "size": 48,
            "at": "l4:barn",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday night again. Same shop, same ting.",
          "sub": "Lại tối thứ Hai. Vẫn tiệm ấy, vẫn tiếng “ting” ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Hoa, decided yet? The spots are almost gone!",
          "sub": "“Hoa ơi, chốt chưa? Suất sắp hết rồi đó!”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "I have a rule: I check before I put money in. Send me the company name.",
          "sub": "Mình có nguyên tắc kiểm tra trước khi bỏ tiền. Gửi mình tên đơn vị nhé.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fix the barn after the cow is gone? Chị Hoa built it first, with one sticky note.",
          "sub": "“Mất bò mới lo làm chuồng”? Chị Hoa làm chuồng trước, bằng một tờ giấy dán quầy.",
          "keys": [
            "làm chuồng trước"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "ting",
          "offsetMs": 900
        }
      ],
      "ref": "p14"
    },
    {
      "id": "v29",
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
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 360,
            "at": "l1:scripts"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 780,
            "y": 1700,
            "at": "l2:signs"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4716,
            "y": 1290,
            "at": "l3:check"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Nhân vật là minh hoạ; bài để tham khảo, quy định có thể thay đổi, kiểm lại với cơ quan/chuyên gia.",
            "x": 7932,
            "y": 1820,
            "size": 28,
            "at": "l4:end",
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
          "say": "Careful people still lose money, because scammers have scripts, fake papers, and sometimes your friends.",
          "sub": "Người cẩn thận vẫn mất tiền vì kẻ gian có kịch bản, có giấy tờ giả, có khi đi qua người quen.",
          "keys": [
            "có kịch bản"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So spot the signs. High returns plus a hurry means stop.",
          "sub": "Vậy hãy nhận dấu hiệu. Lãi cao cộng hối thúc là dừng.",
          "keys": [
            "nhận dấu hiệu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And check before you transfer, every time. A routine, not a mood.",
          "sub": "Và kiểm tra trước khi chuyển, lần nào cũng thế: một quy trình lặp lại.",
          "keys": [
            "quy trình lặp lại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Today, recall the last investment offer you got. Then test it in the next lesson.",
          "sub": "Việc làm ngay: nhớ lại lời mời đầu tư gần nhất bạn nhận, rồi mang nó sang bài sau để soi.",
          "keys": [
            "nhớ lại lời mời đầu tư gần nhất"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "v30",
      "module": "QUIZ-01",
      "data": {
        "q": "You feel too careful to be fooled, what does the article say about that feeling?",
        "options": [
          "That feeling proves you can skip checking any investment offer",
          "That sense of being safe is itself the gap scammers exploit",
          "That feeling means scammers will always choose someone else instead"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "thinking-face",
        "why": "Kẻ gian khai thác tâm lý chủ quan; cảm giác “mình không dễ bị lừa” chính là chỗ hở."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You feel too careful to be fooled, what does the article say about that feeling?",
          "sub": "Bạn thấy mình quá cẩn thận để bị lừa, bài viết nói gì về cảm giác đó?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "That feeling of being safe is the very gap scammers use.",
          "sub": "Cảm giác mình an toàn chính là chỗ hở kẻ gian lợi dụng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "So check every time, whoever is asking.",
          "sub": "Vậy lần nào cũng kiểm tra, dù ai mời."
        }
      ],
      "ref": "questions[13]"
    },
    {
      "id": "v31",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi soi lời mời bằng bài dấu hiệu"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next in the series: which signs show an investment offer is a scam?",
          "sub": "Bài tiếp theo của chuỗi: dấu hiệu nào cho thấy lời mời đầu tư là lừa đảo?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But first, try the forty questions below.",
          "sub": "Nhưng trước hết, thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi investment-scam-targets, bài 0 — tổng) dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-21: “Ai dễ mất tiền hơn: A người nhẹ dạ, B người cẩn thận?” — lật ở l4 (kịch bản soạn để vượt qua cả người cẩn thận, p5). Dòng thời gian: MỘT TUẦN của chị Hoa (tối T2 tin nhắn chị Hằng → T3 Bác Bình kể, kịch bản soạn sẵn → T4 Dũng chỉ trình tự + hiểu lầm → T5 “chuyển ít cho biết” + “Khoan đã!” → T6 dấu hiệu, lãi 24%/ngày → T7 Thảo “lãi lấy từ đâu”, Ponzi, sàn giả → CN kiểm tra 10 phút, Cách A/B → tối CN người quen, nếu lỡ chuyển → tối T2 sau trả lời bằng nguyên tắc). Nhân vật theo w145/_series/investment-scam-targets.md: chị Hoa (= chị Lan p13), Bác Bình, Dũng, Thảo; chị Hằng chỉ qua tin nhắn. Không nêu tên dự án/công ty. Số chỉ từ bài: >6.000 tỷ (11 tháng 2025), 60.300 người, 0,45%→0,18%, 88,05%, 32,12%, 12,03%, 20% số dư/5 tiếng, 24%/ngày. Ngắt nhịp: BRK-03 (6.000 tỷ), BRK-08 (trình tự p4), BRK-04 (hiểu lầm p5), DLG v14 (p13 cách A), BRK-01 (24%/ngày), BRK-10 (câu nguyên tắc p14), BRK-07 rehook (p15–16). Khép vòng: “Mất bò mới lo làm chuồng” → chị Hoa làm chuồng trước. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "v01",
    "close": "v28"
  }
};
