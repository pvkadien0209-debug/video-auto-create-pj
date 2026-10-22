// Kịch bản video W lần 3 (#110) — "Việt Nam có những di sản thế giới nào?" · chuỗi "Di sản và du lịch Việt Nam"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "world-heritage-sites-in-vietnam--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "heritage-travellers",
    "slug": "world-heritage-sites-in-vietnam",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Việt Nam có những di sản thế giới nào?",
    "series": "Di sản và du lịch Việt Nam"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT NĂM ĐI CHƠI của nhà Thảo (tối tháng Giêng lập kế hoạch → Th.2 họp nhà → Th.3 Huế với Sam → Th.4 miền Trung, “Khoan đã!” ở Mỹ Sơn, tối ở Hội An → Th.7 Hạ Long → Th.8 hang Tràng An → Th.10 ba dòng → tối tháng Chạp). Nhân vật (giữ theo w145/_series/heritage-travellers.md): Thảo (người lên lịch), Sam (đồng nghiệp nước ngoài), bà Tư (bà nội), bé Bin (cháu). Cảnh ngắt nhịp: BRK-04 (Đừng nói / Hãy nói Nhã nhạc), BRK-07 (rehook trước chuyến miền Trung), BRK-06 (montage mỗi nơi một câu chuyện). Số liệu chỉ từ bài: 9 di sản (6/2/1), 1993 Huế, 2025 Yên Tử (nguồn UNESCO). Khép vòng: “Đi một ngày đàng, học một sàng khôn” → “kể được một sàng chuyện”. Bản cũ: w145/bak/world-heritage-sites-in-vietnam--w01.js.",
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
            "text": "9",
            "x": 80,
            "y": 60,
            "size": 260,
            "at": "l1:nine",
            "color": "accent",
            "hl": [
              {
                "text": "9",
                "at": "l1:sites"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "di sản thế giới",
            "x": 260,
            "y": 150,
            "size": 64,
            "at": "l1:World"
          },
          {
            "id": "a-all",
            "t": "text",
            "text": "Ta tưởng: 9 nơi, 1 chuyến?",
            "x": 70,
            "y": 380,
            "size": 54,
            "at": "l2:all",
            "color": "muted"
          },
          {
            "id": "a-allx",
            "t": "strike",
            "over": "a-all",
            "at": "l2:wheels+300"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: UNESCO, trang Việt Nam",
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
          "say": "Nine. Vietnam has nine World Heritage Sites.",
          "sub": "Chín. Việt Nam có chín di sản thế giới.",
          "keys": [
            "chín di sản thế giới"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Some families plan all nine in one trip. A pilgrimage on wheels.",
          "sub": "Có nhà định đi cả chín trong một chuyến. Hành hương trên bánh xe.",
          "keys": [
            "cả chín trong một chuyến"
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
              "set": "home",
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
                "world-map",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Tối tháng Giêng · ở nhà",
            "icon": "world-map"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đi một ngày đàng,",
            "x": 60,
            "y": 480,
            "size": 56,
            "at": "l3:travel",
            "color": "accent"
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "học một sàng khôn”",
            "x": 100,
            "y": 560,
            "size": 56,
            "at": "l3:basket",
            "color": "accent",
            "hl": [
              {
                "text": "một sàng khôn",
                "at": "l3:wisdom"
              }
            ]
          },
          {
            "id": "a-back",
            "t": "text",
            "text": "→ một sàng… đau lưng",
            "x": 100,
            "y": 650,
            "size": 46,
            "at": "l4:back",
            "color": "coral",
            "hl": [
              {
                "text": "đau lưng",
                "at": "l4:back"
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
          "say": "Meet Thảo, the family trip planner, a woman with a list for everything.",
          "sub": "Đây là Thảo, người lên lịch cho cả nhà, việc gì cũng có danh sách.",
          "keys": [
            "người lên lịch cho cả nhà"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First: all nine sites. Second: in one long trip this summer!",
          "sub": "Thứ nhất: đủ chín di sản. Thứ hai: trong một chuyến dài hè này!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents said: travel one day, and gain a basket of wisdom.",
          "sub": "Ông bà dặn: “Đi một ngày đàng, học một sàng khôn.”",
          "keys": [
            "học một sàng khôn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Nine days nonstop? That's a basket of back pain.",
          "sub": "Chín ngày liền một mạch? Học một sàng… đau lưng.",
          "keys": [
            "đau lưng"
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
            "text": "Đi đâu? Kể gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:story",
            "hl": [
              {
                "text": "Kể gì",
                "at": "l1:story+300"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: tick đủ 9",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:ticking",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:boxes"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: 1 cụm, 1 chuyện",
            "x": 2028,
            "y": 260,
            "size": 52,
            "at": "l3:region",
            "color": "accent",
            "hl": [
              {
                "text": "1 chuyện",
                "at": "l3:story"
              }
            ]
          },
          {
            "id": "b-def",
            "t": "text",
            "text": "Giá trị nổi bật với nhân loại",
            "x": 2028,
            "y": 380,
            "size": 48,
            "at": "l4:outstanding",
            "hl": [
              {
                "text": "Giá trị nổi bật",
                "at": "l4:value"
              }
            ]
          },
          {
            "id": "b-plan",
            "t": "text",
            "text": "+ kế hoạch bảo vệ lâu dài",
            "x": 2028,
            "y": 460,
            "size": 46,
            "at": "l5:plan",
            "color": "accent",
            "hl": [
              {
                "text": "bảo vệ lâu dài",
                "at": "l5:protect"
              }
            ]
          },
          {
            "id": "b-pretty",
            "t": "text",
            "text": "≠ chỉ đẹp, đông khách",
            "x": 2028,
            "y": 540,
            "size": 44,
            "at": "l5:beauty",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So which sites are they, and what story goes with each?",
          "sub": "Vậy đó là những nơi nào, và mỗi nơi kể chuyện gì?",
          "keys": [
            "mỗi nơi kể chuyện gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The goal is not ticking nine boxes.",
          "sub": "Mục tiêu không phải tick đủ chín ô."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It's one region at a time, and one story for each place.",
          "sub": "Mà là mỗi lần một cụm vùng, mỗi nơi một câu chuyện.",
          "keys": [
            "mỗi nơi một câu chuyện"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "UNESCO lists a World Heritage Site for outstanding value to all humanity.",
          "sub": "UNESCO ghi danh di sản thế giới vì giá trị nổi bật với cả nhân loại.",
          "keys": [
            "giá trị nổi bật"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not for beauty or crowds. Each must prove it, and plan to protect it long term.",
          "sub": "Không vì đẹp hay đông khách. Phải chứng minh giá trị, có kế hoạch bảo vệ lâu dài.",
          "keys": [
            "bảo vệ lâu dài"
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
            "id": "b-g1",
            "t": "text",
            "text": "Văn hóa · 6",
            "x": 2908,
            "y": 165,
            "size": 52,
            "at": "l1:cultural",
            "color": "accent"
          },
          {
            "id": "b-g1a",
            "t": "text",
            "text": "Huế · Hội An · Mỹ Sơn",
            "x": 2928,
            "y": 230,
            "size": 40,
            "at": "l2:Hue"
          },
          {
            "id": "b-g1b",
            "t": "text",
            "text": "Thăng Long · nhà Hồ · Yên Tử",
            "x": 2928,
            "y": 280,
            "size": 40,
            "at": "l2:Thang"
          },
          {
            "id": "b-g2",
            "t": "text",
            "text": "Thiên nhiên · 2",
            "x": 2908,
            "y": 345,
            "size": 52,
            "at": "l1:natural",
            "color": "accent"
          },
          {
            "id": "b-g2a",
            "t": "text",
            "text": "Hạ Long – Cát Bà · Phong Nha",
            "x": 2928,
            "y": 410,
            "size": 40,
            "at": "l3:Ha"
          },
          {
            "id": "b-g3",
            "t": "text",
            "text": "Hỗn hợp · 1: Tràng An",
            "x": 2908,
            "y": 470,
            "size": 52,
            "at": "l3:mixed",
            "color": "accent",
            "hl": [
              {
                "text": "Tràng An",
                "at": "l3:Trang"
              }
            ]
          },
          {
            "id": "b-y",
            "t": "text",
            "text": "1993: Huế · 2025: Yên Tử",
            "x": 2908,
            "y": 545,
            "size": 40,
            "at": "l4:first",
            "hl": [
              {
                "text": "1993",
                "at": "l4:ninety"
              },
              {
                "text": "2025",
                "at": "l4:twenty"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Danh sách có thể đổi: xem UNESCO",
            "x": 2908,
            "y": 600,
            "size": 26,
            "at": "l4:change",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 650,
            "w": 240,
            "h": 90,
            "at": "l5:year+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 650,
            "w": 240,
            "h": 90,
            "at": "l5:year+550",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 650,
            "w": 240,
            "h": 90,
            "at": "l5:year+800",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 650,
            "w": 240,
            "h": 90,
            "at": "l5:year+1050",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 650,
            "w": 240,
            "h": 90,
            "at": "l5:year+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 650,
            "w": 240,
            "h": 90,
            "at": "l5:year+1550",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Th.2",
            "x": 2068,
            "y": 663,
            "size": 48,
            "at": "l5:year+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Th.3",
            "x": 2338,
            "y": 663,
            "size": 48,
            "at": "l5:year+670"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Th.4",
            "x": 2608,
            "y": 663,
            "size": 48,
            "at": "l5:year+920"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Th.7",
            "x": 2878,
            "y": 663,
            "size": 48,
            "at": "l5:year+1170"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Th.8",
            "x": 3148,
            "y": 663,
            "size": 48,
            "at": "l5:year+1420"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Th.10",
            "x": 3418,
            "y": 663,
            "size": 48,
            "at": "l5:year+1670"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three groups: cultural, made by people. Natural, made by nature. And mixed, with both.",
          "sub": "Ba nhóm: văn hóa do con người, thiên nhiên do đất trời, và hỗn hợp có cả hai.",
          "keys": [
            "Ba nhóm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Six cultural: Hue, Hoi An, My Son, Thang Long, the Ho Dynasty Citadel, and Yen Tu.",
          "sub": "Sáu văn hóa: Huế, Hội An, Mỹ Sơn, Thăng Long, Thành nhà Hồ, Yên Tử."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two natural: Ha Long with Cat Ba, and Phong Nha. One mixed: Trang An.",
          "sub": "Hai thiên nhiên: Hạ Long – Cát Bà, Phong Nha – Kẻ Bàng. Một hỗn hợp: Tràng An.",
          "keys": [
            "Một hỗn hợp: Tràng An"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hue came first, in nineteen ninety three; Yen Tu newest, in twenty twenty five. Lists can change.",
          "sub": "Huế đầu tiên, năm 1993; Yên Tử mới nhất, năm 2025. Danh sách có thể đổi, xem UNESCO.",
          "keys": [
            "1993",
            "2025"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Now follow Thảo's year of trips, in six stops.",
          "sub": "Giờ theo nhà Thảo qua một năm đi chơi, sáu chặng.",
          "keys": [
            "một năm đi chơi"
          ]
        }
      ],
      "ref": "p2,p3,p4"
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
            "at": "l6",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Th.2 · Họp cả nhà",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:February"
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
                  "id": "tu",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "bin",
                  "side": "center",
                  "enter": "pop",
                  "at": "l4"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "world-map"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "tu",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "bin",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:meeting",
            "caption": "Tháng Hai · trước khi đặt vé",
            "icon": "people-hugging"
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "Nghỉ? Tìm hiểu? Vận động?",
            "x": 3996,
            "y": 170,
            "size": 52,
            "at": "l1:rest",
            "color": "accent",
            "hl": [
              {
                "text": "Nghỉ?",
                "at": "l1:rest"
              },
              {
                "text": "Vận động?",
                "at": "l1:active"
              }
            ]
          },
          {
            "id": "c-tu",
            "t": "text",
            "text": "Bà: ít bậc thang",
            "x": 3996,
            "y": 270,
            "size": 48,
            "at": "l3:steps"
          },
          {
            "id": "c-bin",
            "t": "text",
            "text": "Bin: thuyền qua hang!",
            "x": 3996,
            "y": 350,
            "size": 48,
            "at": "l5:boat"
          },
          {
            "id": "c-ans",
            "t": "text",
            "text": "→ câu trả lời chọn nơi",
            "x": 3996,
            "y": 440,
            "size": 48,
            "at": "l6:place",
            "hl": [
              {
                "text": "chọn nơi",
                "at": "l6:choose"
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
          "say": "First stop, February: a family meeting. One question: rest, learn, or be active?",
          "sub": "Chặng một, tháng Hai: họp cả nhà. Một câu hỏi: nghỉ ngơi, tìm hiểu hay vận động?",
          "keys": [
            "nghỉ ngơi, tìm hiểu hay vận động"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Bà Tư, Thảo's grandma, who counts stairs like enemies.",
          "sub": "Đây là bà Tư, bà nội Thảo, đếm bậc thang như đếm kẻ thù."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "Rest, please. And not too many steps.",
          "sub": "Bà muốn nghỉ ngơi. Đừng nhiều bậc thang nhé.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And Bé Bin, nine, Thảo's nephew, a question machine.",
          "sub": "Còn đây là bé Bin, chín tuổi, cháu Thảo, cỗ máy đặt câu hỏi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "bin",
          "say": "I want a boat through a cave!",
          "sub": "Cháu muốn đi thuyền qua hang!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The answers choose the place for you.",
          "sub": "Câu trả lời sẽ chọn giúp nơi nên đi.",
          "keys": [
            "chọn giúp nơi nên đi"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        },
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p16,p17"
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
            "id": "c-k1",
            "t": "text",
            "text": "Trẻ nhỏ: thuyền, phố đi bộ",
            "x": 3996,
            "y": 540,
            "size": 42,
            "at": "l1:children",
            "hl": [
              {
                "text": "Trẻ nhỏ",
                "at": "l1:children"
              }
            ]
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "Người già: ít bậc, nghỉ trưa",
            "x": 3996,
            "y": 600,
            "size": 42,
            "at": "l2:older",
            "hl": [
              {
                "text": "nghỉ trưa",
                "at": "l2:rest"
              }
            ]
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "Nhóm khoẻ: hỏi kỹ độ khó",
            "x": 3996,
            "y": 660,
            "size": 42,
            "at": "l3:Fit",
            "hl": [
              {
                "text": "hỏi kỹ độ khó",
                "at": "l3:hard"
              }
            ]
          },
          {
            "id": "c-off",
            "t": "text",
            "text": "Giờ, vé: xem trang chính thức",
            "x": 4836,
            "y": 700,
            "size": 34,
            "at": "l4:official",
            "color": "coral",
            "hl": [
              {
                "text": "trang chính thức",
                "at": "l4:official"
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
          "say": "Small children: the Trang An boat, Hoi An's walking streets, a cave with a ready path.",
          "sub": "Có trẻ nhỏ: thuyền Tràng An, phố đi bộ Hội An, hang có lối đi sẵn.",
          "keys": [
            "Có trẻ nhỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Older people: fewer steps, and a rest in the middle of the day.",
          "sub": "Người lớn tuổi: ít bậc thang, nghỉ giữa buổi.",
          "keys": [
            "nghỉ giữa buổi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fit friends: cave tours with streams and jungle. Ask how hard first.",
          "sub": "Nhóm bạn khoẻ: tour hang lội suối, đi rừng. Hỏi kỹ độ khó trước.",
          "keys": [
            "Hỏi kỹ độ khó"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hours and tickets change. Check official information near the date.",
          "sub": "Giờ, vé thay đổi. Xem thông tin chính thức gần ngày đi.",
          "keys": [
            "thông tin chính thức"
          ]
        }
      ],
      "ref": "p16,p18"
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
            "text": "② Th.3 · Huế với Sam",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:March"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "heritage",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "japanese-castle",
                "musical-notes"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sam",
            "caption": "Tháng Ba · Đại Nội Huế",
            "icon": "japanese-castle"
          },
          {
            "id": "d-th",
            "t": "text",
            "text": "“Nhã nhạc: di sản thế giới!”",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "l2:court",
            "color": "coral"
          },
          {
            "id": "d-sam",
            "t": "text",
            "text": "Sam: âm nhạc là địa điểm?",
            "x": 5964,
            "y": 260,
            "size": 46,
            "at": "l3:places",
            "hl": [
              {
                "text": "địa điểm?",
                "at": "l3:places"
              }
            ]
          },
          {
            "id": "d-list",
            "t": "text",
            "text": "Di sản thế giới = địa điểm",
            "x": 5964,
            "y": 370,
            "size": 52,
            "at": "l4:places",
            "color": "accent",
            "hl": [
              {
                "text": "địa điểm",
                "at": "l4:places"
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
          "say": "Second stop, March: Hue. This is Sam, Thảo's colleague from abroad, a walking question mark.",
          "sub": "Chặng hai, tháng Ba: Huế. Đây là Sam, đồng nghiệp nước ngoài của Thảo, một dấu hỏi biết đi.",
          "keys": [
            "dấu hỏi biết đi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Hue and its court music are both World Heritage Sites!",
          "sub": "Cố đô Huế và Nhã nhạc đều là di sản thế giới đấy!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Music? How can music be on a list of places?",
          "sub": "Âm nhạc à? Sao âm nhạc vào danh sách địa điểm được?",
          "face": "thinking",
          "pose": "shrug"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sam has a point. The World Heritage list is for places: citadels, old towns, bays.",
          "sub": "Sam nói có lý. Danh sách di sản thế giới dành cho địa điểm: kinh thành, phố cổ, vịnh.",
          "keys": [
            "dành cho địa điểm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1500
        }
      ],
      "ref": "p5,p7"
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
            "id": "d-n1",
            "t": "text",
            "text": "Phi vật thể: Nhã nhạc, Quan họ",
            "x": 5964,
            "y": 470,
            "size": 42,
            "at": "l1:intangible",
            "hl": [
              {
                "text": "Phi vật thể",
                "at": "l1:intangible"
              }
            ]
          },
          {
            "id": "d-n1b",
            "t": "text",
            "text": "Ca trù, Cồng chiêng",
            "x": 6004,
            "y": 530,
            "size": 42,
            "at": "l1:gongs"
          },
          {
            "id": "d-n2",
            "t": "text",
            "text": "Tư liệu: Mộc bản triều Nguyễn",
            "x": 5964,
            "y": 600,
            "size": 42,
            "at": "l2:documentary"
          },
          {
            "id": "d-n3",
            "t": "text",
            "text": "Địa chất toàn cầu: Đồng Văn",
            "x": 5964,
            "y": 670,
            "size": 42,
            "at": "l2:geopark"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Court music is living heritage. With Quan Ho, Ca Tru and the gongs, it's intangible heritage.",
          "sub": "Nhã nhạc là di sản sống. Cùng Quan họ, Ca trù, Cồng chiêng: di sản văn hóa phi vật thể.",
          "keys": [
            "phi vật thể"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The Nguyen woodblocks are documentary heritage. Dong Van is a global geopark.",
          "sub": "Mộc bản triều Nguyễn là di sản tư liệu. Cao nguyên đá Đồng Văn là công viên địa chất toàn cầu."
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s09",
      "module": "BRK-04",
      "data": {
        "title": "Nói sao cho đúng?",
        "labels": [
          "Đừng nói",
          "Hãy nói"
        ],
        "wrong": "Nhã nhạc là di sản thế giới",
        "right": "Nhã nhạc là di sản phi vật thể",
        "wrongIllus": "cross-mark",
        "rightIllus": "musical-notes"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Don't call court music a World Heritage Site.",
          "sub": "Đừng gọi Nhã nhạc là di sản thế giới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Say UNESCO lists it as intangible heritage.",
          "sub": "Hãy nói: UNESCO ghi danh là di sản phi vật thể.",
          "keys": [
            "di sản phi vật thể"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p6"
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
            "at": "l1",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-ok",
            "t": "text",
            "text": "Gọi đúng tên → người nghe tin",
            "x": 6804,
            "y": 700,
            "size": 40,
            "at": "l2:title",
            "color": "accent",
            "hl": [
              {
                "text": "người nghe tin",
                "at": "l2:trust"
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
          "say": "Hue is a World Heritage Site. Its court music is intangible heritage.",
          "sub": "Cố đô Huế là di sản thế giới. Nhã nhạc là di sản phi vật thể.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Use the right title, and people trust the rest of your story.",
          "sub": "Gọi đúng tên danh hiệu, người nghe mới tin phần còn lại.",
          "keys": [
            "Gọi đúng tên danh hiệu"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Ba nơi trong ba ngày: được hay mất?",
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
          "say": "Three places in three days. Gain more, or lose more?",
          "sub": "Ba nơi trong ba ngày: được nhiều, hay mất nhiều?",
          "keys": [
            "được nhiều, hay mất nhiều"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s12",
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
            "text": "③ Th.4 · Miền Trung 3 ngày",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:April"
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
                  "id": "thao",
                  "side": "right"
                },
                {
                  "id": "tu",
                  "side": "left"
                }
              ],
              "left": {
                "label": "Ba nơi, ba ngày",
                "ok": false
              },
              "right": {
                "label": "Một cụm gần nhau",
                "ok": true
              }
            },
            "at": "l1:versions",
            "caption": "Cùng ba ngày, hai cách đi",
            "icon": "automobile"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "A: Huế, Hội An, Phong Nha",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "a1:Hue",
            "color": "coral"
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "→ ngồi xe hơn ngồi ngắm",
            "x": 7972,
            "y": 245,
            "size": 42,
            "at": "a2:car",
            "color": "muted"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "B: Hội An + Mỹ Sơn",
            "x": 7932,
            "y": 335,
            "size": 46,
            "at": "b1:Hoi",
            "color": "accent"
          },
          {
            "id": "e-b2",
            "t": "text",
            "text": "→ còn sức, còn nhớ",
            "x": 7972,
            "y": 410,
            "size": 42,
            "at": "b2:story",
            "hl": [
              {
                "text": "còn nhớ",
                "at": "b2:story"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Ít nơi mà hiểu",
            "x": 7932,
            "y": 500,
            "size": 56,
            "at": "l4:Fewer",
            "color": "accent",
            "hl": [
              {
                "text": "mà hiểu",
                "at": "l4:understand"
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
          "say": "Third stop, April: three days in central Vietnam, Bà Tư included. Two versions.",
          "sub": "Chặng ba, tháng Tư: ba ngày miền Trung, có cả bà Tư. Hai phiên bản.",
          "keys": [
            "ba ngày miền Trung"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "thao",
          "say": "Hue this morning, Hoi An this afternoon, the caves tomorrow!",
          "sub": "Sáng Huế, chiều Hội An, mai vào hang Phong Nha!",
          "phase": "a",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "tu",
          "say": "More time in the car than looking. Which place was which, dear?",
          "sub": "Ngồi xe nhiều hơn ngồi ngắm. Nơi nào ra nơi nào hả cháu?",
          "phase": "a",
          "face": "sad"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "Just Hoi An and My Son this time, Grandma. Slowly.",
          "sub": "Lần này chỉ Hội An với Mỹ Sơn thôi bà. Đi chậm.",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "tu",
          "say": "Good. Time to hear each story. Phong Nha next trip.",
          "sub": "Ừ, có thời gian nghe chuyện từng nơi. Phong Nha để chuyến sau.",
          "phase": "b",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fewer places you understand beat many places that wear you out.",
          "sub": "Ít nơi mà hiểu, hơn nhiều nơi mà mệt.",
          "keys": [
            "Ít nơi mà hiểu"
          ]
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
          }
        ],
        "items": [
          {
            "id": "e-m1",
            "t": "text",
            "text": "Huế, Hội An, Mỹ Sơn: gần",
            "x": 7932,
            "y": 590,
            "size": 40,
            "at": "l1:close",
            "hl": [
              {
                "text": "gần",
                "at": "l1:close"
              }
            ]
          },
          {
            "id": "e-m2",
            "t": "text",
            "text": "Phong Nha: một ngày riêng",
            "x": 7932,
            "y": 645,
            "size": 40,
            "at": "l2:Phong",
            "color": "coral",
            "hl": [
              {
                "text": "một ngày riêng",
                "at": "l2:own"
              }
            ]
          },
          {
            "id": "e-m3",
            "t": "text",
            "text": "Thành nhà Hồ: ghé dọc đường",
            "x": 7932,
            "y": 700,
            "size": 40,
            "at": "l3:Ho"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Hue, Hoi An and My Son sit close together. Read each lesson first.",
          "sub": "Huế, Hội An, Mỹ Sơn khá gần nhau. Đọc trước bài của từng nơi.",
          "keys": [
            "khá gần nhau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Phong Nha is further north and needs its own day. Each cave suits a different fitness.",
          "sub": "Phong Nha xa hơn về phía bắc, cần một ngày riêng, mỗi hang hợp một kiểu sức khoẻ.",
          "keys": [
            "một ngày riêng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The Ho Dynasty Citadel in Thanh Hoa fits a road trip between north and centre.",
          "sub": "Thành nhà Hồ ở Thanh Hóa hợp để ghé khi đi đường bộ Bắc – Trung."
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "heritage",
        "label": "Tháng Tư · Mỹ Sơn",
        "actors": [
          {
            "id": "sam",
            "side": "left"
          },
          {
            "id": "thao",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đoán cho xong",
          "why": "Nghe trôi chảy nhưng sai, mà khách có thể kể lại cho người khác.",
          "rule": "Không chắc thì hẹn tra, đừng đoán cho xong"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "Who are these towers for?",
          "sub": "Các tháp này thờ ai vậy?",
          "face": "thinking",
          "pose": "point"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "It's a Buddhist temple, I think.",
          "sub": "Ờ… chắc là chùa thờ Phật.",
          "face": "thinking",
          "pose": "shrug",
          "stop": true
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Smooth, but wrong. And Sam may repeat it back home.",
          "sub": "Trôi chảy nhưng sai. Mà Sam còn kể lại khi về nước.",
          "keys": [
            "Trôi chảy nhưng sai"
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
          "say": "I'm not sure, let me check. Here: they mainly honour Shiva, a Hindu god.",
          "sub": "Mình không chắc, để mình tra. Đây: các tháp chủ yếu thờ thần Shiva của đạo Hindu.",
          "phase": "redo",
          "pose": "phone",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "sam",
          "say": "Shiva! I'll remember that.",
          "sub": "Thần Shiva! Tôi sẽ nhớ chuyện này.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Not sure? Offer to check. Don't guess just to finish.",
          "sub": "Không chắc thì hẹn tra, đừng đoán cho xong.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "hẹn tra"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p24,p25"
    },
    {
      "id": "s15",
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
            "text": "④ Th.4 · Hội An: 4 câu",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Hoi"
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
                  "id": "sam",
                  "side": "left"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "sailboat",
                "red-paper-lantern"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:evening",
            "caption": "Tối hôm ấy · phố cổ Hội An",
            "icon": "sailboat"
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1270,
            "w": 50,
            "h": 50,
            "at": "l4:what",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1252,
            "size": 62,
            "at": "l4:what+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Đây là gì",
            "x": 135,
            "y": 1262,
            "size": 46,
            "at": "l4:what+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1355,
            "w": 50,
            "h": 50,
            "at": "l4:matters",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1337,
            "size": 62,
            "at": "l4:matters+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Vì sao quan trọng",
            "x": 135,
            "y": 1347,
            "size": 46,
            "at": "l4:matters+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1440,
            "w": 50,
            "h": 50,
            "at": "l4:story",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1422,
            "size": 62,
            "at": "l4:story+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Một câu chuyện",
            "x": 135,
            "y": 1432,
            "size": 46,
            "at": "l4:story+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1525,
            "w": 50,
            "h": 50,
            "at": "l4:do",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1507,
            "size": 62,
            "at": "l4:do+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Nên làm gì",
            "x": 135,
            "y": 1517,
            "size": 46,
            "at": "l4:do+200"
          },
          {
            "id": "f-ex",
            "t": "text",
            "text": "“This is Hoi An, a trading port.”",
            "x": 60,
            "y": 1630,
            "size": 36,
            "at": "l2:This",
            "color": "accent",
            "font": "base"
          },
          {
            "id": "f-bf",
            "t": "text",
            "text": "Đoán cho xong",
            "x": 60,
            "y": 1720,
            "size": 46,
            "at": "l5:guessing",
            "color": "muted"
          },
          {
            "id": "f-bfx",
            "t": "strike",
            "over": "f-bf",
            "at": "l5:guessing+400"
          },
          {
            "id": "f-rule",
            "t": "text",
            "text": "→ hẹn tra",
            "x": 420,
            "y": 1720,
            "size": 52,
            "at": "l5:check",
            "color": "accent",
            "hl": [
              {
                "text": "hẹn tra",
                "at": "l5:check"
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
          "say": "That evening in Hoi An, Thảo tries a simple frame.",
          "sub": "Tối hôm ấy ở Hội An, Thảo thử một khung đơn giản."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "This is Hoi An, an old trading port. Ships came here from many countries.",
          "sub": "Đây là Hội An, một thương cảng xưa. Tàu nhiều nước từng cập bến ở đây.",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "A port? So that's why the houses look so mixed!",
          "sub": "Thương cảng à? Thảo nào nhà cửa trông pha trộn thế!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four sentences: what it is, why it matters, one story, what to do.",
          "sub": "Bốn câu: là gì, vì sao quan trọng, một câu chuyện, nên làm gì.",
          "keys": [
            "Bốn câu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And no guessing. An honest check keeps their trust.",
          "sub": "Và đừng đoán. Hẹn tra thật thà mới giữ được lòng tin.",
          "keys": [
            "giữ được lòng tin"
          ]
        }
      ],
      "ref": "p23,p25"
    },
    {
      "id": "s17",
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
            "text": "⑤ Th.7 · Tàu ở Hạ Long",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:July"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "heritage",
              "actors": [
                {
                  "id": "bin",
                  "side": "left",
                  "face": "surprised"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "sailboat",
                "mountain",
                "water-wave"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "bin",
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
            "at": "l1:Bay",
            "caption": "Tháng Bảy · Vịnh Hạ Long",
            "icon": "sailboat"
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "“Sao đảo không chìm?”",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:sink",
            "color": "coral"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "Đảo không nổi: đảo là núi",
            "x": 2028,
            "y": 1350,
            "size": 50,
            "at": "l3:mountains",
            "color": "accent",
            "hl": [
              {
                "text": "đảo là núi",
                "at": "l3:mountains"
              }
            ]
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Mưa bào đá → núi dựng",
            "x": 2028,
            "y": 1440,
            "size": 44,
            "at": "l4:rain"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Biển dâng → còn đỉnh",
            "x": 2028,
            "y": 1510,
            "size": 44,
            "at": "l4:sea"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Đọc 10 phút, trả lời cả chuyến",
            "x": 2028,
            "y": 1600,
            "size": 40,
            "at": "l5:ten",
            "hl": [
              {
                "text": "trả lời cả chuyến",
                "at": "l5:answer"
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
          "say": "Fifth stop, July: Ha Long Bay. Bin is on question duty.",
          "sub": "Chặng năm, tháng Bảy: Vịnh Hạ Long. Bin đang “trực” hỏi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Aunt Thảo, why don't the islands sink?",
          "sub": "Cô Thảo ơi, sao đảo không bị chìm ạ?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Islands don't float, Bin. They're mountains. Only the foot is under the sea.",
          "sub": "Đảo không nổi đâu Bin. Đảo là núi, chỉ có chân núi nằm dưới biển.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rain wore the limestone into steep mountains. Then the sea rose, and only the peaks stayed up.",
          "sub": "Mưa bào đá vôi thành núi dựng đứng. Rồi biển dâng, chỉ còn đỉnh núi nhô lên thành đảo.",
          "keys": [
            "đỉnh núi nhô lên thành đảo"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Ten minutes of reading, and you can answer your child all trip.",
          "sub": "Đọc mười phút trước khi đi, trả lời được con cả chuyến.",
          "keys": [
            "trả lời được con cả chuyến"
          ]
        }
      ],
      "ref": "p20,p21"
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
          }
        ],
        "items": [
          {
            "id": "g-n1",
            "t": "text",
            "text": "Hà Nội: Thăng Long",
            "x": 2028,
            "y": 1680,
            "size": 40,
            "at": "l1:Hanoi",
            "hl": [
              {
                "text": "Thăng Long",
                "at": "l1:Thang"
              }
            ]
          },
          {
            "id": "g-n2",
            "t": "text",
            "text": "Ninh Bình: Tràng An",
            "x": 2028,
            "y": 1735,
            "size": 40,
            "at": "l2:Ninh",
            "hl": [
              {
                "text": "Tràng An",
                "at": "l2:Trang"
              }
            ]
          },
          {
            "id": "g-n3",
            "t": "text",
            "text": "Quảng Ninh: Hạ Long, Yên Tử",
            "x": 2028,
            "y": 1790,
            "size": 40,
            "at": "l3:Quang"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The north fits together too. Hanoi: Thang Long, many dynasties on one piece of land.",
          "sub": "Miền Bắc cũng ghép được. Hà Nội: Hoàng thành Thăng Long, nhiều triều đại xây chồng trên một khu đất.",
          "keys": [
            "Miền Bắc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ninh Binh: Trang An, the mixed site, with flooded valleys, ancient caves and Hoa Lu.",
          "sub": "Ninh Bình: Tràng An, di sản hỗn hợp: thung lũng ngập nước, hang người xưa, cố đô Hoa Lư."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Quang Ninh: Ha Long with Cat Ba, and Mount Yen Tu of the Truc Lam Zen school.",
          "sub": "Quảng Ninh: Hạ Long cùng Cát Bà, và núi Yên Tử gắn với thiền phái Trúc Lâm."
        }
      ],
      "ref": "p9,p10,p11"
    },
    {
      "id": "s19",
      "module": "BRK-06",
      "data": {
        "title": "Mỗi nơi một câu chuyện",
        "items": [
          {
            "illus": "dragon",
            "text": "Rồng đáp xuống"
          },
          {
            "illus": "dragon-face",
            "text": "Rồng bay lên"
          },
          {
            "illus": "sailboat",
            "text": "Thương cảng Hội An"
          },
          {
            "illus": "brick",
            "text": "Gạch ghép khít"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Dragons down, dragons up, a port, perfect bricks.",
          "sub": "Rồng đáp xuống, rồng bay lên, thương cảng, gạch ghép khít."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One story beats ten numbers.",
          "sub": "Một câu chuyện nhớ hơn mười con số.",
          "keys": [
            "Một câu chuyện"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s20",
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
            "text": "⑥ Th.8 · Hang Tràng An",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:August"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "heritage",
              "actors": [
                {
                  "id": "bin",
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "rock",
                "canoe"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "bin",
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
            "at": "l1:cave",
            "caption": "Tháng Tám · thuyền vào hang",
            "icon": "canoe"
          },
          {
            "id": "h-bin",
            "t": "text",
            "text": "“Cháu lấy hòn đá về!”",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l2:stone",
            "color": "coral"
          },
          {
            "id": "h-all",
            "t": "text",
            "text": "Ai cũng lấy → hang mất dần",
            "x": 3996,
            "y": 1350,
            "size": 44,
            "at": "l3:every",
            "hl": [
              {
                "text": "hang mất dần",
                "at": "l3:disappear"
              }
            ]
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1470,
            "w": 50,
            "h": 50,
            "at": "l5:touch",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1452,
            "size": 62,
            "at": "l5:touch+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Không chạm, không trèo",
            "x": 4071,
            "y": 1462,
            "size": 42,
            "at": "l5:touch+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1560,
            "w": 50,
            "h": 50,
            "at": "l5:stalactites",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1542,
            "size": 62,
            "at": "l5:stalactites+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Không bẻ thạch nhũ",
            "x": 4071,
            "y": 1552,
            "size": 42,
            "at": "l5:stalactites+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1650,
            "w": 50,
            "h": 50,
            "at": "l6:Cover",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1632,
            "size": 62,
            "at": "l6:Cover+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Kín đáo nơi thờ tự",
            "x": 4071,
            "y": 1642,
            "size": 42,
            "at": "l6:Cover+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1740,
            "w": 50,
            "h": 50,
            "at": "l6:rubbish",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1722,
            "size": 62,
            "at": "l6:rubbish+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Mang rác theo người",
            "x": 4071,
            "y": 1732,
            "size": 42,
            "at": "l6:rubbish+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop, August: a cave at Trang An.",
          "sub": "Chặng sáu, tháng Tám: hang ở Tràng An."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "This stone is so pretty! Can I take it home?",
          "sub": "Hòn đá này đẹp quá! Cháu mang về được không ạ?",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "If every visitor took one, Bin, the cave would slowly disappear.",
          "sub": "Nếu ai cũng lấy một hòn, Bin ạ, hang sẽ mất dần.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Caves grow slower than Bà Tư climbs stairs. Leave it there.",
          "sub": "Hang lớn còn chậm hơn bà Tư leo cầu thang. Cứ để nó ở đó."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "At every site: don't touch or climb monuments, don't break stalactites or take stones.",
          "sub": "Ở mọi di sản: không chạm, không trèo di tích, không bẻ thạch nhũ, không mang đá về.",
          "keys": [
            "không mang đá về"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Cover up at places of worship, and take your rubbish with you.",
          "sub": "Ăn mặc kín đáo ở nơi thờ tự, mang rác theo người.",
          "keys": [
            "mang rác theo người"
          ]
        }
      ],
      "ref": "p26"
    },
    {
      "id": "s22",
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
            "text": "⑦ Th.10 · Ba dòng mỗi nơi",
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
                "bookmark"
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
            "caption": "Tháng Mười · trên xe về",
            "icon": "mobile-phone"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1270,
            "w": 50,
            "h": 50,
            "at": "l1:What",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1252,
            "size": 62,
            "at": "l1:What+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Là gì",
            "x": 6039,
            "y": 1262,
            "size": 50,
            "at": "l1:What+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1365,
            "w": 50,
            "h": 50,
            "at": "l1:special",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1347,
            "size": 62,
            "at": "l1:special+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Vì sao đặc biệt",
            "x": 6039,
            "y": 1357,
            "size": 50,
            "at": "l1:special+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1460,
            "w": 50,
            "h": 50,
            "at": "l1:story",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1442,
            "size": 62,
            "at": "l1:story+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Một chuyện để kể",
            "x": 6039,
            "y": 1452,
            "size": 50,
            "at": "l1:story+200"
          },
          {
            "id": "i-car",
            "t": "text",
            "text": "Mở ra xem lúc ngồi xe",
            "x": 5964,
            "y": 1570,
            "size": 48,
            "at": "l2:car",
            "hl": [
              {
                "text": "ngồi xe",
                "at": "l2:car"
              }
            ]
          },
          {
            "id": "i-map",
            "t": "text",
            "text": "Lưu bài này làm mục lục",
            "x": 5964,
            "y": 1670,
            "size": 52,
            "at": "l3:map",
            "color": "accent",
            "hl": [
              {
                "text": "mục lục",
                "at": "l3:map"
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
          "say": "October, my phone notes. Three lines each: what it is, why it's special, one story.",
          "sub": "Tháng Mười, ghi chú trong máy. Mỗi nơi ba dòng: là gì, vì sao đặc biệt, một chuyện để kể.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She reads them in the car. That's enough.",
          "sub": "Mở ra xem lúc ngồi xe là đủ.",
          "keys": [
            "ngồi xe"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Save this lesson as a map. Before each trip, read ten minutes.",
          "sub": "Lưu bài này làm mục lục: trước mỗi chuyến, đọc mười phút.",
          "keys": [
            "mục lục"
          ]
        }
      ],
      "ref": "p22,p27"
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
            "text": "Tối tháng Chạp · bản đồ cũ",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:December"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "tu",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "world-map",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "tu",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:map",
            "caption": "Tối tháng Chạp · ở nhà",
            "icon": "world-map"
          },
          {
            "id": "j-9",
            "t": "text",
            "text": "9 nơi, 1 chuyến",
            "x": 7932,
            "y": 1270,
            "size": 56,
            "at": "l2:nine",
            "color": "muted"
          },
          {
            "id": "j-9x",
            "t": "strike",
            "over": "j-9",
            "at": "l2:trip+200"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "1 cụm · mỗi nơi 1 chuyện",
            "x": 7932,
            "y": 1360,
            "size": 54,
            "at": "l2:region",
            "color": "accent",
            "hl": [
              {
                "text": "mỗi nơi 1 chuyện",
                "at": "l2:story"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Đi một ngày đàng,",
            "x": 7932,
            "y": 1510,
            "size": 54,
            "at": "l4:travel",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "kể một sàng chuyện”",
            "x": 7972,
            "y": 1590,
            "size": 54,
            "at": "l4:stories",
            "color": "accent",
            "hl": [
              {
                "text": "một sàng chuyện",
                "at": "l4:stories"
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
          "say": "December. Same table, same map, same Thảo.",
          "sub": "Tháng Chạp. Vẫn bàn ấy, tấm bản đồ ấy, vẫn Thảo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Not nine places in one trip. One region at a time, one story for each place.",
          "sub": "Không phải chín nơi một chuyến. Mỗi lần một cụm, mỗi nơi một câu chuyện.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "Next year, Yen Tu? Slowly, dear.",
          "sub": "Sang năm đi Yên Tử nhé? Từ từ thôi cháu.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Travel one day, gain a basket of wisdom. This time, a basket of stories too.",
          "sub": "“Đi một ngày đàng, học một sàng khôn.” Lần này kể được cả một sàng chuyện.",
          "keys": [
            "một sàng chuyện"
          ]
        }
      ],
      "ref": "outro"
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
            "at": "l1:groups",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:region",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:story",
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
            "y": 160,
            "at": "l1:groups"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8392,
            "y": 500,
            "at": "l2:region"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2758,
            "y": 1690,
            "at": "l3:story"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "e-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l2:understand"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: nine sites in three groups, with Trang An the only mixed one.",
          "sub": "Tóm lại: chín di sản, ba nhóm; Tràng An là hỗn hợp duy nhất.",
          "keys": [
            "chín di sản, ba nhóm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Pick one region for your companions. Fewer places you understand.",
          "sub": "Chọn một cụm hợp người đi cùng. Ít nơi mà hiểu.",
          "keys": [
            "Ít nơi mà hiểu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And one story for each place. Not sure? Offer to check.",
          "sub": "Mỗi nơi một câu chuyện. Không chắc thì hẹn tra.",
          "keys": [
            "một câu chuyện"
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
      "ref": "questions[1]",
      "data": {
        "q": "What are the three groups of World Heritage Sites?",
        "options": [
          "Cultural sites, natural sites, and mixed sites that have both kinds of value",
          "Northern sites, central sites, and southern sites, depending on where they are located",
          "Old sites, new sites, and sites that are still waiting for their final decision"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "classical-building",
        "why": "Văn hóa, thiên nhiên và hỗn hợp. Chia theo vùng chỉ để lên lịch."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What are the three groups of World Heritage Sites?",
          "sub": "Di sản thế giới được chia thành ba nhóm nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Cultural sites, natural sites, and mixed sites that have both kinds of value.",
          "sub": "Văn hóa, thiên nhiên, và hỗn hợp có cả hai giá trị."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Regions only help you plan. They're not how UNESCO groups sites.",
          "sub": "Vùng miền chỉ giúp lên lịch, không phải cách UNESCO phân loại."
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
        "text": "Chọn di sản gần nhà nhất",
        "sub": "Viết ba dòng, rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Choose the heritage site nearest you, and write your three lines. Then try the forty questions below.",
          "sub": "Chọn di sản gần nhà nhất, viết ba dòng của nó. Rồi thử bốn mươi câu bên dưới nhé."
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
