// Kịch bản video W lần 3 (#110) — "Quần thể danh thắng Tràng An" · chuỗi "Di sản và du lịch Việt Nam"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "trang-an-landscape-complex--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "heritage-travellers",
    "slug": "trang-an-landscape-complex",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Quần thể danh thắng Tràng An",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT CUỐI TUẦN HAI NGÀY của nhà Thảo ở Ninh Bình (21:00 tối thứ Sáu → T7 7:30 bến thuyền → 9:00 hang thấp “Khoan đã!” → 10:00 cửa hang → 14:00 Hoa Lư → CN hang Múa → 21:00 tối Chủ nhật). Nhân vật (w145/_series/heritage-travellers.md): Thảo (lên lịch), bác Bình (bác ruột, muốn cả ngày ở Bái Đính, thích nghe chuyện ở Hoa Lư), bà Tư (bà nội, ngại bậc thang, hang Múa), bé Bin (cháu, đứng dậy quay video, hỏi người xưa). Cảnh ngắt nhịp: BRK-04 (Bái Đính: tưởng / thật ra), BRK-07 (rehook vỏ ốc biển), BRK-09 (lower-third Hoa Lư 968–1010). Số liệu chỉ từ bài: 1 di sản hỗn hợp, ~30.000 năm, 2014, 968, 1010. Khép vòng: “Non xanh nước biếc” → “và vỏ ốc người xưa”. Bản cũ: w145/bak/trang-an-landscape-complex--w01.js.",
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
            "text": "1",
            "x": 90,
            "y": 50,
            "size": 260,
            "at": "l1:one",
            "color": "accent",
            "hl": [
              {
                "text": "1",
                "at": "l1:mixed"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "di sản hỗn hợp duy nhất",
            "x": 250,
            "y": 150,
            "size": 58,
            "at": "l1:exactly"
          },
          {
            "id": "a-bd",
            "t": "text",
            "text": "Ta tưởng: đến Bái Đính là xong?",
            "x": 70,
            "y": 380,
            "size": 50,
            "at": "l2:Bai",
            "color": "muted"
          },
          {
            "id": "a-bdx",
            "t": "strike",
            "over": "a-bd",
            "at": "l2:done+300"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: UNESCO, Quần thể Tràng An (2014)",
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
          "say": "One. Vietnam has exactly one mixed World Heritage Site: Trang An.",
          "sub": "Một. Việt Nam có đúng một di sản thế giới hỗn hợp: Tràng An.",
          "keys": [
            "đúng một di sản thế giới hỗn hợp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet many families visit Bai Dinh pagoda, take a selfie, and call it done.",
          "sub": "Vậy mà nhiều nhà ghé chùa Bái Đính, chụp tấm ảnh, rồi coi như xong.",
          "keys": [
            "coi như xong"
          ]
        }
      ],
      "ref": "intro,p6"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "mobile-phone",
                "canoe"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "binh",
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
            "caption": "21:00 tối thứ Sáu · ở nhà",
            "icon": "mobile-phone"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Non xanh nước biếc”",
            "x": 60,
            "y": 490,
            "size": 56,
            "at": "l5:green",
            "color": "accent",
            "hl": [
              {
                "text": "Non xanh",
                "at": "l5:green"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "… mà chụp mỗi cổng chùa",
            "x": 90,
            "y": 575,
            "size": 46,
            "at": "l5:gate",
            "color": "coral",
            "hl": [
              {
                "text": "cổng chùa",
                "at": "l5:gate"
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
          "say": "Friday, nine p.m. Meet Thảo, the family trip planner, phone in hand.",
          "sub": "Tối thứ Sáu, chín giờ. Đây là Thảo, người lên lịch cho cả nhà, điện thoại trên tay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Ninh Binh this weekend! Trang An, Tam Coc, Hoa Lu, Bai Dinh. Which is the heritage site?",
          "sub": "Cuối tuần về Ninh Bình! Tràng An, Tam Cốc, Hoa Lư, Bái Đính. Chỗ nào là di sản thế giới?",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Enter Uncle Bình, Thảo's uncle, slow, warm, and very sure.",
          "sub": "Bác Bình xuất hiện, bác ruột Thảo, chậm rãi, ấm áp, và rất chắc chắn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Easy. A whole day at Bai Dinh. Then we've seen the heritage!",
          "sub": "Dễ mà. Cả ngày ở chùa Bái Đính. Thế là thăm di sản rồi!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Green mountains, blue water, as we say. And Uncle Bình plans to photograph one pagoda gate.",
          "sub": "Người ta khen “non xanh nước biếc”. Còn bác Bình định chụp mỗi cổng chùa.",
          "keys": [
            "non xanh nước biếc"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
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
            "text": "Vì sao hỗn hợp? Đi đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:mixed",
            "hl": [
              {
                "text": "hỗn hợp?",
                "at": "l1:mixed+200"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Núi đá vôi ngập nước",
            "x": 2028,
            "y": 180,
            "size": 50,
            "at": "l2:limestone",
            "hl": [
              {
                "text": "Núi đá vôi",
                "at": "l2:limestone"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "+ hang người xưa (~30.000 năm)",
            "x": 2028,
            "y": 265,
            "size": 46,
            "at": "l3:caves",
            "hl": [
              {
                "text": "~30.000 năm",
                "at": "l3:thousand"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "+ cố đô Hoa Lư",
            "x": 2028,
            "y": 350,
            "size": 50,
            "at": "l4:capital",
            "hl": [
              {
                "text": "cố đô Hoa Lư",
                "at": "l4:Hoa"
              }
            ]
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "Thiên nhiên + văn hóa",
            "x": 2028,
            "y": 450,
            "size": 56,
            "at": "l5:both",
            "color": "accent",
            "hl": [
              {
                "text": "+ văn hóa",
                "at": "l5:both"
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
          "say": "So why is Trang An mixed, and where should you go first?",
          "sub": "Vậy vì sao Tràng An là di sản hỗn hợp, và nên đi đâu trước?",
          "keys": [
            "vì sao Tràng An là di sản hỗn hợp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Most sites are listed for culture or nature. Trang An has both: rare inland limestone scenery.",
          "sub": "Phần lớn di sản được công nhận vì văn hóa hoặc thiên nhiên. Tràng An có cả hai: cảnh quan karst đá vôi trong đất liền hiếm có."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Caves showing people lived and adapted here for about thirty thousand years.",
          "sub": "Hang cho thấy con người đã sống, thích nghi ở đây khoảng ba mươi nghìn năm.",
          "keys": [
            "ba mươi nghìn năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the old capital, Hoa Lu.",
          "sub": "Và cố đô Hoa Lư."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Beautiful mountains, ancient people, a first capital. Three together, nature and culture both.",
          "sub": "Núi đẹp, người xưa, kinh đô đầu tiên. Ba thứ cộng lại: cả thiên nhiên lẫn văn hóa.",
          "keys": [
            "cả thiên nhiên lẫn văn hóa"
          ]
        }
      ],
      "ref": "p1,p3"
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
            "id": "b-y",
            "t": "text",
            "text": "UNESCO 2014 · đầu tiên ở ĐNA",
            "x": 2908,
            "y": 170,
            "size": 40,
            "at": "l1:twenty",
            "hl": [
              {
                "text": "2014",
                "at": "l1:twenty"
              }
            ]
          },
          {
            "id": "b-p",
            "t": "text",
            "text": "Ba phần:",
            "x": 2908,
            "y": 245,
            "size": 46,
            "at": "l2:three",
            "color": "accent"
          },
          {
            "id": "b-p1",
            "t": "text",
            "text": "Tràng An – Tam Cốc – Bích Động",
            "x": 2928,
            "y": 305,
            "size": 36,
            "at": "l2:Tam"
          },
          {
            "id": "b-p2",
            "t": "text",
            "text": "Cố đô Hoa Lư",
            "x": 2928,
            "y": 355,
            "size": 36,
            "at": "l2:capital"
          },
          {
            "id": "b-p3",
            "t": "text",
            "text": "Rừng đặc dụng Hoa Lư",
            "x": 2928,
            "y": 405,
            "size": 36,
            "at": "l2:forest"
          },
          {
            "id": "b-1d",
            "t": "text",
            "text": "1 thuyền + nửa ngày Hoa Lư",
            "x": 2908,
            "y": 480,
            "size": 40,
            "at": "l3:boat",
            "color": "accent",
            "hl": [
              {
                "text": "nửa ngày Hoa Lư",
                "at": "l3:half"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l4:weekend+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2358,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l4:weekend+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2688,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l4:weekend+900",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 3018,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l4:weekend+1200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3348,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l4:weekend+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T6 21:00",
            "x": 2053,
            "y": 618,
            "size": 44,
            "at": "l4:weekend+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T7 7:30",
            "x": 2383,
            "y": 618,
            "size": 44,
            "at": "l4:weekend+720"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T7 10:00",
            "x": 2713,
            "y": 618,
            "size": 44,
            "at": "l4:weekend+1020"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T7 14:00",
            "x": 3043,
            "y": 618,
            "size": 44,
            "at": "l4:weekend+1320"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "CN 5:30",
            "x": 3373,
            "y": 618,
            "size": 44,
            "at": "l4:weekend+1620"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "UNESCO listed it in twenty fourteen, the first mixed site in Southeast Asia.",
          "sub": "UNESCO ghi danh năm 2014, di sản hỗn hợp đầu tiên của Đông Nam Á.",
          "keys": [
            "2014"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three linked parts: Trang An, Tam Coc and Bich Dong scenery, the old capital Hoa Lu, and Hoa Lu forest.",
          "sub": "Ba phần gắn với nhau: danh thắng Tràng An – Tam Cốc – Bích Động, cố đô Hoa Lư, rừng đặc dụng Hoa Lư."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One boat trip plus half a day in Hoa Lu touches all three.",
          "sub": "Một chuyến thuyền cộng nửa ngày ở Hoa Lư là chạm đủ cả ba.",
          "keys": [
            "nửa ngày ở Hoa Lư"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Now, the family's weekend, in five stops.",
          "sub": "Giờ theo cả nhà qua một cuối tuần, năm chặng.",
          "keys": [
            "một cuối tuần"
          ]
        }
      ],
      "ref": "p2,intro"
    },
    {
      "id": "s04",
      "module": "BRK-04",
      "data": {
        "title": "Bái Đính là di sản?",
        "labels": [
          "Tưởng",
          "Thật ra"
        ],
        "wrong": "Cả ngày ở chùa Bái Đính",
        "right": "Thuyền qua hang và Hoa Lư trước",
        "wrongIllus": "place-of-worship",
        "rightIllus": "canoe"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "All day at Bai Dinh? A pilgrimage spot nearby.",
          "sub": "Cả ngày ở Bái Đính? Đó là điểm hành hương nổi tiếng lân cận."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The heritage: boat, caves, Hoa Lu.",
          "sub": "Di sản nằm ở thuyền, hang và Hoa Lư.",
          "keys": [
            "thuyền, hang và Hoa Lư"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
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
            "text": "① T6 21:00 · Xếp lịch",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:pagoda"
          },
          {
            "id": "c-km",
            "t": "text",
            "text": "Thuyền + đền vua Đinh: vài km",
            "x": 3996,
            "y": 170,
            "size": 44,
            "at": "l1:kilometres",
            "hl": [
              {
                "text": "vài km",
                "at": "l1:kilometres"
              }
            ]
          },
          {
            "id": "c-h",
            "t": "text",
            "text": "Sáng: thuyền · Chiều: Hoa Lư",
            "x": 3996,
            "y": 260,
            "size": 46,
            "at": "l2:morning",
            "color": "accent",
            "hl": [
              {
                "text": "Hoa Lư",
                "at": "l2:Hoa"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Nổi tiếng ≠ di sản",
            "x": 3996,
            "y": 460,
            "size": 64,
            "at": "l3:Famous",
            "color": "accent",
            "hl": [
              {
                "text": "≠ di sản",
                "at": "l3:heritage"
              }
            ]
          },
          {
            "id": "c-ask",
            "t": "text",
            "text": "→ hỏi rõ trước khi đi",
            "x": 4056,
            "y": 560,
            "size": 50,
            "at": "l3:check",
            "hl": [
              {
                "text": "hỏi rõ",
                "at": "l3:check"
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
          "say": "Many families spend all day at the pagoda, while the boat and King Dinh's temple are a few kilometres away.",
          "sub": "Nhiều nhà ở cả ngày trong chùa, trong khi tuyến thuyền và đền vua Đinh chỉ cách vài cây số."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Then boat in the morning, Hoa Lu after lunch. Put those first.",
          "sub": "Vậy sáng đi thuyền, chiều Hoa Lư. Xếp hai chỗ đó trước.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Famous doesn't always mean heritage. Check before you go.",
          "sub": "Nổi tiếng chưa chắc là di sản, hỏi rõ trước khi đi.",
          "keys": [
            "Nổi tiếng chưa chắc là di sản"
          ]
        }
      ],
      "ref": "p5,p6,p7"
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
            "text": "② T7 7:30 · Bến thuyền",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Saturday"
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
                  "id": "tu",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "bin",
                  "side": "center",
                  "pose": "phone",
                  "enter": "pop",
                  "at": "l2:Bin"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "canoe",
                "sheaf-of-rice"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "tu",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:pier",
            "caption": "7:30 sáng thứ Bảy · bến thuyền",
            "icon": "canoe"
          },
          {
            "id": "d-ta",
            "t": "text",
            "text": "Tràng An: hang xuyên thủy, đền",
            "x": 5964,
            "y": 170,
            "size": 42,
            "at": "l4:caves",
            "hl": [
              {
                "text": "hang xuyên thủy",
                "at": "l4:through"
              }
            ]
          },
          {
            "id": "d-tc",
            "t": "text",
            "text": "Tam Cốc: sông Ngô Đồng, lúa",
            "x": 5964,
            "y": 250,
            "size": 42,
            "at": "l5:Tam",
            "hl": [
              {
                "text": "lúa",
                "at": "l5:rice"
              }
            ]
          },
          {
            "id": "d-ch",
            "t": "text",
            "text": "3 hang lớn · chèo bằng chân",
            "x": 5964,
            "y": 320,
            "size": 40,
            "at": "l5:feet",
            "color": "coral",
            "hl": [
              {
                "text": "chèo bằng chân",
                "at": "l5:feet"
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
          "say": "Saturday, seven thirty, at the pier.",
          "sub": "Thứ Bảy, bảy rưỡi, ở bến thuyền."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Bà Tư, Thảo's grandma, who rates trips by stairs. And Bé Bin, nine, Thảo's nephew, phone ready.",
          "sub": "Đây là bà Tư, bà nội Thảo, chấm điểm chuyến đi theo số bậc thang. Và bé Bin, chín tuổi, cháu Thảo, điện thoại sẵn sàng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "Boats? Good, no stairs. But do I see caves, or rice fields?",
          "sub": "Đi thuyền à? Tốt, khỏi leo. Nhưng ngắm hang hay ngắm lúa đây?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The Trang An route goes through many through caves, right across a mountain, and stops at valley temples.",
          "sub": "Tuyến Tràng An qua nhiều hang xuyên thủy, thông sang bên kia núi, và ghé các đền phủ giữa thung lũng.",
          "keys": [
            "hang xuyên thủy"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Tam Coc follows the Ngo Dong river through rice fields and three big caves. Some rowers use their feet!",
          "sub": "Tam Cốc đi dọc sông Ngô Đồng giữa đồng lúa, qua ba hang lớn. Có người chèo bằng chân!",
          "keys": [
            "chèo bằng chân"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 420,
            "w": 50,
            "h": 50,
            "at": "l1:life",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 402,
            "size": 62,
            "at": "l1:life+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Áo phao suốt chuyến",
            "x": 6039,
            "y": 412,
            "size": 42,
            "at": "l1:life+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 505,
            "w": 50,
            "h": 50,
            "at": "l2:hands",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 487,
            "size": 62,
            "at": "l2:hands+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Tay trong thuyền",
            "x": 6039,
            "y": 497,
            "size": 42,
            "at": "l2:hands+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 590,
            "w": 50,
            "h": 50,
            "at": "l2:Duck",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 572,
            "size": 62,
            "at": "l2:Duck+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Cúi khi người lái nhắc",
            "x": 6039,
            "y": 582,
            "size": 42,
            "at": "l2:Duck+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 675,
            "w": 50,
            "h": 50,
            "at": "l3:stand",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 657,
            "size": 62,
            "at": "l3:stand+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Không đứng, không thả rác",
            "x": 6039,
            "y": 667,
            "size": 42,
            "at": "l3:stand+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before boarding: wear your life jacket the whole trip.",
          "sub": "Trước khi lên thuyền: mặc áo phao suốt chuyến.",
          "keys": [
            "áo phao suốt chuyến"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Keep your hands inside. Duck when the rower tells you: many caves are very low.",
          "sub": "Giữ tay trong thuyền. Cúi người khi người lái nhắc, vì nhiều hang rất thấp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Don't stand up, and don't drop rubbish in the water.",
          "sub": "Không đứng dậy giữa thuyền, không thả rác xuống nước."
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "heritage",
        "label": "9:00 · trong một hang thấp",
        "actors": [
          {
            "id": "bin",
            "side": "left"
          },
          {
            "id": "thao",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đứng dậy giữa thuyền quay video",
          "why": "Thuyền chao mạnh, trần hang thấp dễ va đầu, người lái phải hô lớn.",
          "rule": "Trên thuyền qua hang, ngồi yên mới ngắm được trọn"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "bin",
          "say": "Wow, look at the wall! I'll stand up and film it!",
          "sub": "Oa, vách hang đẹp quá! Cháu đứng dậy quay nhé!",
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
          "face": "stern"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The boat rocks, and that ceiling is very close to Bin's head.",
          "sub": "Thuyền chao, mà trần hang thì sát đầu Bin.",
          "keys": [
            "trần hang thì sát đầu"
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
          "say": "Sit, Bin. Raise the phone, and duck when the rower says.",
          "sub": "Ngồi yên nào Bin. Giơ máy lên, cúi khi người lái nhắc.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "bin",
          "say": "My video isn't shaky at all!",
          "sub": "Video của cháu chẳng rung tí nào!",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "On a boat through caves, sit still, and you see it all.",
          "sub": "Trên thuyền qua hang, ngồi yên mới ngắm được trọn.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "ngồi yên mới ngắm được trọn"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p10,p11"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Hang giữa đất liền, sao có vỏ ốc biển?",
        "illus": "spiral-shell"
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
          "say": "Caves far inland, full of sea shells. How?",
          "sub": "Hang sâu trong đất liền, lại đầy vỏ sinh vật biển. Sao vậy?",
          "keys": [
            "vỏ sinh vật biển"
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
            "text": "③ T7 10:00 · Cửa hang",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:ten"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
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
                "spiral-shell",
                "fire"
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
            "caption": "10:00 · trước cửa hang",
            "icon": "spiral-shell"
          },
          {
            "id": "e-hg",
            "t": "text",
            "text": "Hang Trống · Mòi · Bói",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l4:Trong",
            "hl": [
              {
                "text": "Hang Trống",
                "at": "l4:Trong"
              }
            ]
          },
          {
            "id": "e-f",
            "t": "text",
            "text": "Công cụ đá · bếp lửa",
            "x": 7932,
            "y": 245,
            "size": 44,
            "at": "l4:tools"
          },
          {
            "id": "e-f2",
            "t": "text",
            "text": "Xương thú · vỏ ốc đã ăn",
            "x": 7932,
            "y": 315,
            "size": 44,
            "at": "l4:shells",
            "hl": [
              {
                "text": "vỏ ốc",
                "at": "l4:shells"
              }
            ]
          },
          {
            "id": "e-nk",
            "t": "text",
            "text": "Lớp đất = cuốn nhật ký",
            "x": 7932,
            "y": 420,
            "size": 52,
            "at": "l5:diary",
            "color": "accent",
            "hl": [
              {
                "text": "cuốn nhật ký",
                "at": "l5:diary"
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
          "say": "Ten a.m., at a cave mouth. Bin is back on question duty.",
          "sub": "Mười giờ, trước một cửa hang. Bin lại “trực” hỏi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Did people really live in caves like this?",
          "sub": "Người xưa sống trong hang thế này thật ạ?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Yes. They left their tools, fireplaces and leftovers.",
          "sub": "Thật. Họ để lại công cụ, bếp lửa và đồ ăn thừa.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "In Trong, Moi and Boi caves, archaeologists found stone tools, fireplaces, animal bones and eaten shells.",
          "sub": "Ở hang Trống, hang Mòi, hang Bói, khảo cổ tìm thấy công cụ đá, bếp lửa, xương động vật, vỏ ốc người xưa ăn rồi bỏ lại."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The soil layers are like a diary, written by people who forgot to tidy up.",
          "sub": "Các lớp đất như cuốn nhật ký, viết bởi những người quên dọn dẹp.",
          "keys": [
            "cuốn nhật ký"
          ]
        }
      ],
      "ref": "p12,p13"
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
            "id": "e-up",
            "t": "text",
            "text": "Biển tiến → bắt ốc, bắt cá",
            "x": 7932,
            "y": 530,
            "size": 44,
            "at": "l1:sea",
            "color": "accent",
            "hl": [
              {
                "text": "bắt ốc, bắt cá",
                "at": "l1:snails"
              }
            ]
          },
          {
            "id": "e-dn",
            "t": "text",
            "text": "Biển lùi → săn bắt, hái lượm",
            "x": 7932,
            "y": 600,
            "size": 44,
            "at": "l2:back",
            "hl": [
              {
                "text": "săn bắt, hái lượm",
                "at": "l2:hunted"
              }
            ]
          },
          {
            "id": "e-wall",
            "t": "text",
            "text": "Vách hang: ngấn nước biển cổ",
            "x": 7932,
            "y": 670,
            "size": 40,
            "at": "l3:marks",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "When sea levels were much higher, the sea came close. People caught snails and fish, even sea animals.",
          "sub": "Khi mực nước biển dâng cao, biển tiến vào gần. Người trong hang bắt ốc, bắt cá, cả sinh vật biển.",
          "keys": [
            "biển tiến vào gần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "When the sea went back, they hunted and gathered in the forest. They adapted to a changing climate.",
          "sub": "Khi biển rút, họ chuyển sang săn bắt, hái lượm trong rừng: thích nghi với khí hậu thay đổi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "From the boat, watch some cave walls: old sea level marks and sea shells. The sea was once much closer.",
          "sub": "Ngồi thuyền, để ý vách hang: có ngấn nước biển cổ, vỏ sinh vật biển. Biển từng gần hơn nhiều.",
          "keys": [
            "Biển từng gần hơn nhiều"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One shell in a cave tells the story of the sea coming and going.",
          "sub": "Một vỏ ốc trong hang kể cả chuyện biển tiến biển lùi.",
          "keys": [
            "biển tiến biển lùi"
          ]
        }
      ],
      "ref": "p8,p13,p14,p15"
    },
    {
      "id": "s12",
      "module": "BRK-09",
      "data": {
        "kind": "Địa điểm",
        "title": "Cố đô Hoa Lư, 968–1010",
        "detail": "Núi đá bao quanh như vòng thành",
        "illus": "classical-building",
        "around": [
          "mountain",
          "crown"
        ],
        "icon": "map-pin"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Afternoon. Next stop: the old capital.",
          "sub": "Buổi chiều. Điểm tiếp theo: cố đô."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Hoa Lu, ringed by limestone walls.",
          "sub": "Hoa Lư, có núi đá bao quanh như vòng thành.",
          "keys": [
            "vòng thành"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p16"
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
            "at": "l4",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ T7 14:00 · Cố đô Hoa Lư",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:two"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "heritage",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "classical-building",
                "crown"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
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
            "at": "l1:Hoa",
            "caption": "14:00 · cố đô Hoa Lư",
            "icon": "classical-building"
          },
          {
            "id": "f-968",
            "t": "text",
            "text": "968: Đinh Bộ Lĩnh lên ngôi",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l2:sixty",
            "hl": [
              {
                "text": "968",
                "at": "l2:sixty"
              }
            ]
          },
          {
            "id": "f-dcv",
            "t": "text",
            "text": "Đại Cồ Việt · dẹp 12 sứ quân",
            "x": 60,
            "y": 1335,
            "size": 40,
            "at": "l2:Dai"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Đinh → Tiền Lê → đầu Lý",
            "x": 60,
            "y": 1420,
            "size": 46,
            "at": "l3:Early",
            "color": "accent"
          },
          {
            "id": "f-1010",
            "t": "text",
            "text": "1010: dời ra Thăng Long",
            "x": 60,
            "y": 1500,
            "size": 44,
            "at": "l5:ten",
            "hl": [
              {
                "text": "Thăng Long",
                "at": "l5:Thang"
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
          "say": "Two p.m., Hoa Lu. Uncle Bình finally gets his stories.",
          "sub": "Hai giờ chiều, Hoa Lư. Bác Bình cuối cùng cũng được nghe chuyện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In nine sixty eight, Dinh Bo Linh ended the war of the twelve lords, became emperor, and named the country Dai Co Viet.",
          "sub": "Năm 968, Đinh Bộ Lĩnh dẹp loạn mười hai sứ quân, lên ngôi hoàng đế, đặt tên nước Đại Cồ Việt.",
          "keys": [
            "Đại Cồ Việt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hoa Lu was capital of the Dinh, the Early Le, and the first years of the Ly.",
          "sub": "Hoa Lư là kinh đô nhà Đinh, nhà Tiền Lê và những năm đầu nhà Lý."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Mountains for walls. Who needs bricks?",
          "sub": "Núi làm tường thành. Cần gì gạch nữa!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then in ten ten, Ly Cong Uan moved to Dai La and named it Thang Long. That's another lesson.",
          "sub": "Rồi năm 1010, Lý Công Uẩn dời đô ra Đại La, đặt tên Thăng Long. Đó là bài khác.",
          "keys": [
            "Thăng Long"
          ]
        }
      ],
      "ref": "p16,p17"
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
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1590,
            "w": 50,
            "h": 50,
            "at": "l1:Dinh",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1572,
            "size": 62,
            "at": "l1:Dinh+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Đền vua Đinh Tiên Hoàng",
            "x": 135,
            "y": 1582,
            "size": 40,
            "at": "l1:Dinh+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1670,
            "w": 50,
            "h": 50,
            "at": "l1:Hanh",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1652,
            "size": 62,
            "at": "l1:Hanh+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Đền vua Lê Đại Hành",
            "x": 135,
            "y": 1662,
            "size": 40,
            "at": "l1:Hanh+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1750,
            "w": 50,
            "h": 50,
            "at": "l2:Ma",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1732,
            "size": 62,
            "at": "l2:Ma+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Núi Mã Yên, lăng vua Đinh",
            "x": 135,
            "y": 1742,
            "size": 40,
            "at": "l2:Ma+200"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "Nơi thờ tự: kín đáo, nói khẽ",
            "x": 900,
            "y": 1790,
            "size": 34,
            "at": "l3:worship",
            "color": "coral",
            "hl": [
              {
                "text": "nói khẽ",
                "at": "l3:softly"
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
          "say": "See King Dinh Tien Hoang's temple with carved wood, and King Le Dai Hanh's, who led the fight against the Song.",
          "sub": "Xem đền vua Đinh Tiên Hoàng, kiến trúc gỗ chạm khắc, và đền vua Lê Đại Hành, người chống quân Tống."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Ma Yen mountain, with King Dinh's tomb on top.",
          "sub": "Và núi Mã Yên, có lăng vua Đinh trên đỉnh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The temples are still places of worship. Dress modestly, and speak softly.",
          "sub": "Đền vẫn là nơi thờ tự: ăn mặc kín đáo, nói khẽ.",
          "keys": [
            "nói khẽ"
          ]
        }
      ],
      "ref": "p18"
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
            "text": "⑤ CN · Hang Múa",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "tu",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "left": {
                "label": "Giữa trưa, cho kịp lịch",
                "ok": false
              },
              "right": {
                "label": "Sáng sớm, trời mát",
                "ok": true
              }
            },
            "at": "l1:versions",
            "caption": "Chủ nhật · hang Múa, hai cách leo",
            "icon": "mountain"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A: trưa hè → choáng, quay xuống",
            "x": 2028,
            "y": 1260,
            "size": 42,
            "at": "a2:dizzy",
            "color": "coral"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: sáng sớm → mát, ảnh đẹp",
            "x": 2028,
            "y": 1350,
            "size": 42,
            "at": "b2:cooler",
            "color": "accent"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "→ còn sức lên đỉnh",
            "x": 2068,
            "y": 1420,
            "size": 42,
            "at": "b2:top",
            "hl": [
              {
                "text": "lên đỉnh",
                "at": "b2:top"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Leo lúc mát, đừng leo theo lịch",
            "x": 2028,
            "y": 1530,
            "size": 46,
            "at": "l4:cool",
            "color": "accent",
            "hl": [
              {
                "text": "đừng leo theo lịch",
                "at": "l4:schedule"
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
          "say": "Sunday: Mua cave, hundreds of steep stone steps, mostly in the sun. Two versions.",
          "sub": "Chủ nhật: hang Múa, hàng trăm bậc đá dốc, phần lớn phơi nắng. Hai phiên bản.",
          "keys": [
            "hàng trăm bậc đá dốc"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "thao",
          "say": "Let's climb now, at noon, to keep to the plan!",
          "sub": "Mình leo luôn giữa trưa cho kịp lịch nhé!",
          "phase": "a",
          "pose": "point",
          "face": "happy"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "tu",
          "say": "Too hot, dear. I'm dizzy. Let's go back down.",
          "sub": "Nắng quá cháu ơi. Bà choáng rồi. Mình quay xuống thôi.",
          "phase": "a",
          "face": "sad"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "Let's climb at five thirty tomorrow, while it's cool.",
          "sub": "Năm rưỡi sáng mai mình leo, lúc trời mát bà nhé.",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "tu",
          "say": "Cooler air, softer light, and I made it to the top!",
          "sub": "Trời mát, nắng xiên đẹp, bà lên tới đỉnh rồi!",
          "phase": "b",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Climb stone stairs when it's cool, not because your schedule says so.",
          "sub": "Bậc đá nên leo lúc trời mát, đừng leo theo lịch.",
          "keys": [
            "đừng leo theo lịch"
          ]
        }
      ],
      "ref": "p21,p22"
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
            "id": "g-v1",
            "t": "text",
            "text": "Đỉnh: toàn cảnh lúa và sông",
            "x": 2028,
            "y": 1650,
            "size": 40,
            "at": "l1:view"
          },
          {
            "id": "g-v2",
            "t": "text",
            "text": "Đạp xe làng quanh Tam Cốc",
            "x": 2028,
            "y": 1710,
            "size": 40,
            "at": "l2:Cycling"
          },
          {
            "id": "g-v3",
            "t": "text",
            "text": "Ảnh lúa chín: hỏi mùa vụ trước",
            "x": 2028,
            "y": 1770,
            "size": 40,
            "at": "l2:harvest",
            "hl": [
              {
                "text": "mùa vụ",
                "at": "l2:harvest"
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
          "say": "From the top: the whole view of rice fields and river.",
          "sub": "Từ đỉnh nhìn toàn cảnh đồng lúa và sông."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Cycling around Tam Coc and Bich Dong shows village life. Want golden rice photos? Learn the harvest season first.",
          "sub": "Đạp xe quanh Tam Cốc – Bích Động để thấy nhịp sống thôn quê. Muốn ảnh lúa chín, tìm hiểu mùa vụ trước.",
          "keys": [
            "mùa vụ"
          ]
        }
      ],
      "ref": "p20"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Lịch vừa sức",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:boat"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "1 chuyến thuyền: vài giờ",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l1:hours",
            "hl": [
              {
                "text": "vài giờ",
                "at": "l1:hours"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "+ Hoa Lư, Tam Cốc, hang Múa",
            "x": 3996,
            "y": 1350,
            "size": 46,
            "at": "l2:Hoa"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "→ 1 đến 2 ngày",
            "x": 4036,
            "y": 1430,
            "size": 60,
            "at": "l2:days",
            "color": "accent",
            "hl": [
              {
                "text": "1 đến 2 ngày",
                "at": "l2:two"
              }
            ]
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Vé, tuyến, giờ chạy: ban quản lý",
            "x": 3996,
            "y": 1550,
            "size": 44,
            "at": "l3:managers"
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "→ xem thông tin chính thức",
            "x": 4036,
            "y": 1620,
            "size": 44,
            "at": "l3:official",
            "color": "coral",
            "hl": [
              {
                "text": "chính thức",
                "at": "l3:official"
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
          "say": "Planning tip: one boat trip already takes a few hours.",
          "sub": "Mẹo xếp lịch: một chuyến thuyền đã mất vài giờ.",
          "keys": [
            "vài giờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Add Hoa Lu, Tam Coc and Mua cave, and plan one to two days.",
          "sub": "Thêm Hoa Lư, Tam Cốc, hang Múa thì dành một đến hai ngày.",
          "keys": [
            "một đến hai ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Tickets, routes and boat times come from the site managers. Check official information near your date.",
          "sub": "Giá vé, tuyến, giờ chạy do ban quản lý quy định; xem thông tin chính thức gần ngày đi.",
          "keys": [
            "thông tin chính thức"
          ]
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
            "text": "Một câu để kể",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:sentence"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Núi đẹp",
            "x": 5964,
            "y": 1290,
            "size": 64,
            "at": "l2:mountains",
            "color": "accent"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "+ người xưa trong hang",
            "x": 5964,
            "y": 1390,
            "size": 56,
            "at": "l2:ancient"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "+ kinh đô đầu tiên",
            "x": 5964,
            "y": 1490,
            "size": 56,
            "at": "l2:capital"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "= Tràng An đặc biệt",
            "x": 5964,
            "y": 1610,
            "size": 64,
            "at": "l3:special",
            "color": "accent",
            "hl": [
              {
                "text": "đặc biệt",
                "at": "l3:special"
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
          "say": "One sentence to tell your family on the drive.",
          "sub": "Một câu để kể với cả nhà trên xe."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Here are beautiful mountains, ancient people who lived in caves, and the first capital of a central state.",
          "sub": "Ở đây vừa có núi đẹp, vừa có người xưa sống trong hang, vừa có kinh đô đầu tiên của nhà nước tập quyền."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "All three together. That's what makes Trang An special.",
          "sub": "Ba thứ ấy cộng lại nên Tràng An mới đặc biệt.",
          "keys": [
            "Tràng An mới đặc biệt"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s19",
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
            "text": "21:00 tối Chủ nhật",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:home"
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
                  "id": "binh",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "spiral-shell"
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
            "at": "l1:chat",
            "caption": "21:00 tối Chủ nhật · ở nhà",
            "icon": "mobile-phone"
          },
          {
            "id": "j-no",
            "t": "text",
            "text": "Cả ngày Bái Đính",
            "x": 7932,
            "y": 1270,
            "size": 54,
            "at": "l2:Bai",
            "color": "muted"
          },
          {
            "id": "j-nox",
            "t": "strike",
            "over": "j-no",
            "at": "l2:nearby"
          },
          {
            "id": "j-yes",
            "t": "text",
            "text": "Thuyền qua hang + Hoa Lư",
            "x": 7932,
            "y": 1360,
            "size": 52,
            "at": "l2:boat",
            "color": "accent",
            "hl": [
              {
                "text": "Hoa Lư",
                "at": "l2:Hoa"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Non xanh nước biếc”",
            "x": 7932,
            "y": 1510,
            "size": 56,
            "at": "l3:green",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "… và vỏ ốc người xưa",
            "x": 7962,
            "y": 1595,
            "size": 50,
            "at": "l3:shells",
            "color": "accent",
            "hl": [
              {
                "text": "vỏ ốc người xưa",
                "at": "l3:shells"
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
          "say": "Sunday, nine p.m. Back home, back in the family chat.",
          "sub": "Tối Chủ nhật, chín giờ. Về nhà, lại vào nhóm chat cả nhà."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Note for next time: Bai Dinh is nearby, but the heritage is the boat, the caves and Hoa Lu.",
          "sub": "Ghi lại cho lần sau: Bái Đính ở gần thôi, di sản là thuyền, hang và Hoa Lư.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Green mountains, blue water. And this time, a few ancient snail shells for the story.",
          "sub": "“Non xanh nước biếc.” Lần này, câu chuyện còn có thêm vỏ ốc người xưa.",
          "keys": [
            "vỏ ốc người xưa"
          ]
        }
      ],
      "ref": "outro"
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
            "at": "l1",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3",
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
            "x": 2668,
            "y": 450,
            "at": "l1:culture"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 4636,
            "y": 460,
            "at": "l2:boat"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2748,
            "y": 1530,
            "at": "l3:cool"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Vé, tuyến, giờ chạy do ban quản lý quy định; xem trước khi đi.",
            "x": 7932,
            "y": 1810,
            "size": 28,
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
          "say": "So: Trang An is mixed, nature and culture, the only one in Vietnam.",
          "sub": "Tóm lại: Tràng An là di sản hỗn hợp, thiên nhiên và văn hóa, duy nhất ở Việt Nam.",
          "keys": [
            "duy nhất ở Việt Nam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Put the boat and Hoa Lu first. Sit still in the caves.",
          "sub": "Xếp thuyền và Hoa Lư lên trước. Qua hang thì ngồi yên.",
          "keys": [
            "ngồi yên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And climb Mua cave when it's cool.",
          "sub": "Và leo hang Múa lúc trời mát.",
          "keys": [
            "lúc trời mát"
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
      "ref": "questions[23]",
      "data": {
        "q": "Why are sea shells found in caves that are now far from the sea?",
        "options": [
          "The sea once came close to this area when sea levels were much higher",
          "Birds carried the shells inland and dropped them inside the dark caves",
          "Modern tourists left the shells there after eating at nearby restaurants"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "spiral-shell",
        "why": "Thời mực nước biển dâng cao, biển từng tiến vào gần vùng này."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why are sea shells found in caves that are now far from the sea?",
          "sub": "Vì sao trong hang nay xa biển lại có vỏ sinh vật biển?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The sea once came close to this area when sea levels were much higher.",
          "sub": "Biển từng tiến vào gần vùng này, khi mực nước biển dâng cao."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Thuyền qua hang hay giữa đồng lúa?",
        "sub": "Hỏi cả nhà, rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Ask your family: boat through caves, or boat through rice fields? Then try the forty questions below.",
          "sub": "Hỏi cả nhà: thuyền qua hang hay thuyền giữa đồng lúa? Rồi thử bốn mươi câu bên dưới nhé."
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
