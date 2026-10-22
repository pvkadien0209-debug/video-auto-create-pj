// Kịch bản video W lần 3 (#110) — "Chọn mặt hàng và nguồn hàng khi mới bắt đầu" · chuỗi "Bán hàng online cho người mới"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "choose-products-and-suppliers--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "online-sellers",
    "slug": "choose-products-and-suppliers",
    "door": "ky-nang",
    "level": "B1",
    "title": "Chọn mặt hàng và nguồn hàng khi mới bắt đầu",
    "series": "Bán hàng online cho người mới"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo MỘT THÁNG CHỌN MÓN MỚI của Lan (tối thứ Hai → cả tuần thắp thử nến → thứ Bảy đăng thử → sáng Chủ nhật chợ đầu mối → tối Chủ nhật → tuần 2 hàng mẫu → tuần 3 → tối thứ Hai tháng sau). Nhân vật (w145/_series/online-sellers.md): Lan (chính: “bạn” p1, p5, p7, p19, p26), Dũng (Nam p22; “bạn” nhập trăm ốp p10), Cô Hoa (chủ sạp, các nguồn p12, câu hỏi nhà cung cấp p14–p15), Thảo (Vy, nguồn son rẻ p17; bản cũ để Lan, đổi sang Thảo để Lan giữ mạch nến). Số liệu chỉ lấy từ bài (năm món, cả trăm chiếc, hai chục đơn, một giờ, hai tiếng). Ngắt nhịp: BRK-04 (p10), BRK-06 (p12), BRK-07 rehook (p16), BRK-02 (p18), BRK-10 (p21), BRK-11 (p26–p28). Khoan đã: Thảo chuyển hết tiền (p17). Mở/khép: “Thấy người ta ăn khoai, cũng vác mai đi đào” → trồng thử một luống trước. Bản cũ: w145/bak/choose-products-and-suppliers--w01.js.",
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
            "text": "100 chiếc ốp",
            "x": 60,
            "y": 130,
            "size": 150,
            "at": "l1:hundred",
            "color": "accent",
            "hl": [
              {
                "text": "100 chiếc ốp",
                "at": "l1:cases"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "đặt thật: đếm trên ngón tay",
            "x": 70,
            "y": 350,
            "size": 54,
            "at": "l2:fingers",
            "color": "coral"
          },
          {
            "id": "a-ca1",
            "t": "text",
            "text": "“Thấy người ta ăn khoai,",
            "x": 70,
            "y": 450,
            "size": 50,
            "at": "l3:potatoes",
            "color": "muted"
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "cũng vác mai đi đào”",
            "x": 110,
            "y": 520,
            "size": 50,
            "at": "l3:dig",
            "color": "muted",
            "hl": [
              {
                "text": "vác mai đi đào",
                "at": "l3:dig"
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
          "say": "A hundred phone cases, ordered in one excited evening.",
          "sub": "Một trăm chiếc ốp điện thoại, nhập trong một tối hào hứng.",
          "keys": [
            "Một trăm chiếc ốp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A month later, real buyers? Count them on your fingers.",
          "sub": "Một tháng sau, người đặt thật đếm trên đầu ngón tay.",
          "keys": [
            "đếm trên đầu ngón tay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "As they say: see others eat sweet potatoes, grab a hoe and dig.",
          "sub": "Đúng là “thấy người ta ăn khoai, cũng vác mai đi đào”.",
          "keys": [
            "vác mai đi đào"
          ]
        }
      ],
      "ref": "p10"
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
            "at": "l3:end",
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
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "handbag",
                "package"
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Hai · phòng trọ của Lan",
            "icon": "package"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Bán gì? Tin ai?",
            "x": 70,
            "y": 630,
            "size": 60,
            "at": "l3:trust",
            "color": "accent",
            "hl": [
              {
                "text": "Tin ai?",
                "at": "l3:trust"
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
          "say": "Meet Lan, owner of a tiny online shop.",
          "sub": "Đây là Lan, chủ một shop online nhỏ xíu.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Those hundred cases belong to her neighbour. Lan doesn't want a box like that.",
          "sub": "Trăm chiếc ốp kia là của anh hàng xóm. Lan không muốn có cái thùng như thế."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "I want a new product. But what do I sell, and who can I trust?",
          "sub": "Em muốn bán thêm món mới. Mà bán gì, tin nguồn nào đây?",
          "face": "worried",
          "pose": "think"
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
            "text": "Bán gì, tin nguồn nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:sell",
            "hl": [
              {
                "text": "tin nguồn nào",
                "at": "l1:trust"
              }
            ]
          },
          {
            "id": "b-c0",
            "t": "box",
            "x": 2028,
            "y": 190,
            "w": 50,
            "h": 50,
            "at": "l2:know",
            "stroke": 5
          },
          {
            "id": "b-k0",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 172,
            "size": 62,
            "at": "l2:know+600",
            "color": "accent"
          },
          {
            "id": "b-l0",
            "t": "text",
            "text": "Món mình hiểu",
            "x": 2103,
            "y": 182,
            "size": 44,
            "at": "l2:know+200"
          },
          {
            "id": "b-c1",
            "t": "box",
            "x": 2028,
            "y": 262,
            "w": 50,
            "h": 50,
            "at": "l2:real",
            "stroke": 5
          },
          {
            "id": "b-k1",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 244,
            "size": 62,
            "at": "l2:real+600",
            "color": "accent"
          },
          {
            "id": "b-l1",
            "t": "text",
            "text": "Thử người mua thật",
            "x": 2103,
            "y": 254,
            "size": 44,
            "at": "l2:real+200"
          },
          {
            "id": "b-c2",
            "t": "box",
            "x": 2028,
            "y": 334,
            "w": 50,
            "h": 50,
            "at": "l3:samples",
            "stroke": 5
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 316,
            "size": 62,
            "at": "l3:samples+600",
            "color": "accent"
          },
          {
            "id": "b-l2",
            "t": "text",
            "text": "Đặt mẫu trước, sỉ sau",
            "x": 2103,
            "y": 326,
            "size": 44,
            "at": "l3:samples+200"
          },
          {
            "id": "b-c3",
            "t": "box",
            "x": 2028,
            "y": 406,
            "w": 50,
            "h": 50,
            "at": "l3:batch",
            "stroke": 5
          },
          {
            "id": "b-k3",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 388,
            "size": 62,
            "at": "l3:batch+600",
            "color": "accent"
          },
          {
            "id": "b-l3",
            "t": "text",
            "text": "Kiểm từng lô",
            "x": 2103,
            "y": 398,
            "size": 44,
            "at": "l3:batch+200"
          },
          {
            "id": "b-c4",
            "t": "box",
            "x": 2028,
            "y": 478,
            "w": 50,
            "h": 50,
            "at": "l3:record",
            "stroke": 5
          },
          {
            "id": "b-k4",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 460,
            "size": 62,
            "at": "l3:record+600",
            "color": "accent"
          },
          {
            "id": "b-l4",
            "t": "text",
            "text": "Trả tiền có dấu vết",
            "x": 2103,
            "y": 470,
            "size": 44,
            "at": "l3:record+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what should you sell, and who can you trust?",
          "sub": "Vậy bán món gì, tin nguồn nào?",
          "keys": [
            "tin nguồn nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Start with what you know, and test whether real people will buy.",
          "sub": "Bắt đầu từ món mình hiểu, và thử xem có người mua thật không.",
          "keys": [
            "món mình hiểu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Samples before wholesale, check every batch, and pay in a way that leaves a record.",
          "sub": "Đặt mẫu trước khi đặt sỉ, kiểm từng lô, trả tiền theo cách có dấu vết.",
          "keys": [
            "Đặt mẫu trước"
          ]
        }
      ],
      "ref": "intro"
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
            "id": "b-wk",
            "t": "text",
            "text": "Một tháng chọn hàng của Lan",
            "x": 2028,
            "y": 545,
            "size": 52,
            "at": "l1:month",
            "hl": [
              {
                "text": "Một tháng",
                "at": "l1:month"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2008,
            "y": 620,
            "w": 225,
            "h": 90,
            "at": "l1:follow+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2248,
            "y": 620,
            "w": 225,
            "h": 90,
            "at": "l1:follow+480",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2488,
            "y": 620,
            "w": 225,
            "h": 90,
            "at": "l1:follow+660",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2728,
            "y": 620,
            "w": 225,
            "h": 90,
            "at": "l1:follow+840",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 620,
            "w": 225,
            "h": 90,
            "at": "l1:follow+1020",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3208,
            "y": 620,
            "w": 225,
            "h": 90,
            "at": "l1:follow+1200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3448,
            "y": 620,
            "w": 225,
            "h": 90,
            "at": "l1:follow+1380",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Thứ Hai",
            "x": 2023,
            "y": 638,
            "size": 36,
            "at": "l1:follow+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Cả tuần",
            "x": 2263,
            "y": 638,
            "size": 36,
            "at": "l1:follow+600"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Thứ Bảy",
            "x": 2503,
            "y": 638,
            "size": 36,
            "at": "l1:follow+780"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Chủ nhật",
            "x": 2743,
            "y": 638,
            "size": 36,
            "at": "l1:follow+960"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Tuần 2",
            "x": 2983,
            "y": 638,
            "size": 36,
            "at": "l1:follow+1140"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Tuần 3",
            "x": 3223,
            "y": 638,
            "size": 36,
            "at": "l1:follow+1320"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Tháng sau",
            "x": 3463,
            "y": 638,
            "size": 36,
            "at": "l1:follow+1500"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Lan for one month, from not sure to buying more stock.",
          "sub": "Ta theo Lan một tháng, từ lúc phân vân đến lúc nhập thêm hàng.",
          "keys": [
            "một tháng"
          ]
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
            "text": "① Thứ Hai · Món mình hiểu",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "notebook",
                "pencil"
              ]
            },
            "at": "l1:writes",
            "caption": "Tối thứ Hai · danh sách năm món",
            "icon": "notebook"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Năm món mình hiểu nhất",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l1:five"
          },
          {
            "id": "c-why",
            "t": "text",
            "text": "hiểu → tư vấn được → khách tin",
            "x": 3996,
            "y": 245,
            "size": 40,
            "at": "l3:advise",
            "color": "accent",
            "hl": [
              {
                "text": "khách tin",
                "at": "l3:trust"
              }
            ]
          },
          {
            "id": "c-grp",
            "t": "text",
            "text": "“Đồ ăn vặt”: quá rộng",
            "x": 3996,
            "y": 320,
            "size": 42,
            "at": "l4:snacks",
            "color": "coral"
          },
          {
            "id": "c-grp2",
            "t": "text",
            "text": "Ăn vặt lành mạnh, dân văn phòng",
            "x": 3996,
            "y": 390,
            "size": 42,
            "at": "l4:healthy",
            "color": "accent",
            "hl": [
              {
                "text": "dân văn phòng",
                "at": "l4:office"
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
          "say": "First stop: Monday night. Lan writes down the five things she knows best.",
          "sub": "Chặng một: tối thứ Hai. Lan viết ra năm món mình hiểu rõ nhất.",
          "keys": [
            "năm món"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Things I use every day. Things friends ask about: where did you buy that?",
          "sub": "Thứ em dùng hằng ngày. Thứ bạn bè hay hỏi: mua ở đâu vậy?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Know it, and you can advise. Advise well, and buyers trust you.",
          "sub": "Hiểu món thì tư vấn được, tư vấn được thì khách tin.",
          "keys": [
            "khách tin"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then a small, clear group: healthy snacks for office workers beats just snacks. You'll know where to post.",
          "sub": "Rồi chọn nhóm khách nhỏ, rõ: “ăn vặt lành mạnh cho dân văn phòng” dễ tìm khách hơn “đồ ăn vặt”, và biết đăng ở đâu.",
          "keys": [
            "nhóm khách nhỏ, rõ"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "at": "l4",
            "fit": [
              "c-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 490,
            "w": 50,
            "h": 50,
            "at": "l1:asked",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 472,
            "size": 62,
            "at": "l1:asked+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Có người thật hỏi mua?",
            "x": 4071,
            "y": 482,
            "size": 36,
            "at": "l1:asked+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 562,
            "w": 50,
            "h": 50,
            "at": "l1:season",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 544,
            "size": 62,
            "at": "l1:season+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Quanh năm hay theo mùa?",
            "x": 4071,
            "y": 554,
            "size": 36,
            "at": "l1:season+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 634,
            "w": 50,
            "h": 50,
            "at": "l2:expire",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 616,
            "size": 62,
            "at": "l2:expire+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Có hạn dùng?",
            "x": 4071,
            "y": 626,
            "size": 36,
            "at": "l2:expire+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 706,
            "w": 50,
            "h": 50,
            "at": "l2:supplier",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 688,
            "size": 62,
            "at": "l2:supplier+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Một hay nhiều nguồn?",
            "x": 4071,
            "y": 698,
            "size": 36,
            "at": "l2:supplier+200"
          },
          {
            "id": "c-law",
            "t": "text",
            "text": "Mỹ phẩm, thực phẩm: quy định chặt",
            "x": 4816,
            "y": 700,
            "size": 34,
            "at": "l3:Food",
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
          "say": "Before choosing, ask: have real people asked to buy it? All year, or one season?",
          "sub": "Trước khi chọn, hỏi: đã có người thật hỏi mua chưa? Bán quanh năm hay theo mùa?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Does it expire? One supplier, or many?",
          "sub": "Có hạn dùng không? Một nơi cung cấp hay nhiều nơi?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Food, cosmetics, medicine, baby goods, electricals: stricter rules. Check official sources before buying.",
          "sub": "Thực phẩm, mỹ phẩm, thuốc, đồ trẻ nhỏ, hàng điện: quy định chặt hơn. Tìm hiểu từ nguồn chính thức trước khi nhập.",
          "keys": [
            "nguồn chính thức"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Lipstick is cosmetics, too many rules for now. Scented candles, then!",
          "sub": "Son là mỹ phẩm, giờ chưa kham nổi. Vậy thử nến thơm!",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "ref": "p3,p4"
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
            "text": "② Cả tuần · Thắp thử",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "candle",
                "stopwatch"
              ]
            },
            "at": "l1:week",
            "caption": "Cả tuần · nhà khoa học nến",
            "icon": "candle"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "① Thắp hết một cây: mấy tiếng?",
            "x": 5964,
            "y": 170,
            "size": 42,
            "at": "l2:burn"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "② Khói đen? Mùi đậm? Phòng nồng?",
            "x": 5964,
            "y": 250,
            "size": 42,
            "at": "l3:smoke",
            "hl": [
              {
                "text": "Khói đen?",
                "at": "l3:smoke"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "③ Viết câu trả lời sẵn",
            "x": 5964,
            "y": 330,
            "size": 46,
            "at": "l4:ready",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: all week. Lan turns into a candle scientist.",
          "sub": "Chặng hai: cả tuần. Lan hoá nhà khoa học nến.",
          "keys": [
            "nhà khoa học nến"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Step one: burn one to the end, and note how many hours.",
          "sub": "Bước một: thắp thử một cây đến hết, ghi lại cháy mấy tiếng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Step two: black smoke? Strong smell? After an hour, is the room stuffy?",
          "sub": "Bước hai: khói có đen không? Mùi đậm hay nhẹ? Sau một giờ phòng có nồng không?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Step three, my ready answer: it burns this long, light smell, no black smoke.",
          "sub": "Bước ba, câu trả lời sẵn: “Nến cháy khoảng chừng này, mùi nhẹ, không khói đen ạ.”",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "ref": "p5"
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
            "id": "d-fast",
            "t": "text",
            "text": "Khách hỏi → trả lời ngay",
            "x": 5964,
            "y": 440,
            "size": 44,
            "at": "l1:asks"
          },
          {
            "id": "d-no",
            "t": "text",
            "text": "khỏi để khách chờ tới tối",
            "x": 6004,
            "y": 510,
            "size": 40,
            "at": "l1:waiting",
            "color": "muted"
          },
          {
            "id": "d-r1",
            "t": "text",
            "text": "Mình dùng thử trước,",
            "x": 5964,
            "y": 600,
            "size": 54,
            "at": "l2:yourself",
            "color": "accent"
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "khách mới tin sau",
            "x": 5964,
            "y": 670,
            "size": 54,
            "at": "l2:trust",
            "color": "accent",
            "hl": [
              {
                "text": "khách mới tin sau",
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
          "who": "det",
          "say": "Now when a buyer asks, Lan answers at once from her own use. No buyer waiting till evening.",
          "sub": "Giờ khách hỏi, Lan trả lời ngay bằng trải nghiệm của mình, khỏi nhắn hỏi nhà cung cấp rồi để khách chờ tới tối."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Try it yourself first. Then buyers trust you.",
          "sub": "Mình dùng thử trước, khách mới tin sau.",
          "keys": [
            "Mình dùng thử trước"
          ]
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s11",
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
            "text": "③ Thứ Bảy · Người mua thật?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third"
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
                  "id": "lan",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "walk",
                  "at": "l3",
                  "pose": "hold"
                }
              ],
              "props": [
                "candle",
                "package"
              ]
            },
            "at": "l1:posts",
            "caption": "Thứ Bảy · đăng thử, số lượng có hạn",
            "icon": "candle"
          },
          {
            "id": "e-sig",
            "t": "text",
            "text": "“Đặt thế nào? Ship bao nhiêu?”",
            "x": 7932,
            "y": 170,
            "size": 44,
            "at": "l2:order",
            "color": "accent",
            "hl": [
              {
                "text": "Đặt thế nào?",
                "at": "l2:order"
              }
            ]
          },
          {
            "id": "e-like",
            "t": "text",
            "text": "Lượt thích: chưa phải đơn",
            "x": 7932,
            "y": 255,
            "size": 44,
            "at": "l2:Likes",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Saturday. Lan posts a few sample candles: limited stock.",
          "sub": "Chặng ba: thứ Bảy. Lan đăng thử vài cây nến mẫu, ghi “số lượng có hạn”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Real buying signals: how do I order, how much is shipping, which are left? Likes? Not yet.",
          "sub": "Tín hiệu mua thật: đặt thế nào, phí ship bao nhiêu, còn loại nào? Lượt thích thì chưa.",
          "keys": [
            "Tín hiệu mua thật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And here's Dũng, the neighbour. Motto: send now, think later. Owner of the hundred cases.",
          "sub": "Đây là Dũng, anh hàng xóm. Phương châm: gửi luôn, tính sau. Chủ nhân trăm chiếc ốp.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "So many likes! So cute, they said. So I ordered a hundred, right away!",
          "sub": "Bao nhiêu lượt thích! Ai cũng khen xinh. Nên anh nhập luôn cả trăm!",
          "face": "happy",
          "pose": "hold"
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p7,p10"
    },
    {
      "id": "s12",
      "module": "BRK-04",
      "data": {
        "title": "Mẫu ốp được nhiều lượt thích",
        "wrong": "Nhập ngay cả trăm chiếc: tồn cả thùng",
        "right": "Nhập vài chiếc, đếm người đặt và chuyển tiền",
        "wrongIllus": "red-heart",
        "rightIllus": "package"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A hundred at once: a box of leftovers.",
          "sub": "Nhập cả trăm một lúc: tồn cả thùng.",
          "keys": [
            "tồn cả thùng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A few first: twenty orders? Buy about twenty.",
          "sub": "Nhập vài chiếc: hai chục người đặt thì nhập thêm chừng ấy.",
          "keys": [
            "chừng ấy"
          ]
        }
      ],
      "ref": "p10"
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
            "id": "e-r1",
            "t": "text",
            "text": "Lượt thích là lời khen,",
            "x": 7932,
            "y": 345,
            "size": 50,
            "at": "l1:Likes"
          },
          {
            "id": "e-r2",
            "t": "text",
            "text": "lượt hỏi đặt mới là đơn",
            "x": 7932,
            "y": 415,
            "size": 50,
            "at": "l1:orders",
            "color": "accent",
            "hl": [
              {
                "text": "mới là đơn",
                "at": "l1:orders"
              }
            ]
          },
          {
            "id": "e-ask",
            "t": "text",
            "text": "“Giá vầy, bạn mua không?”",
            "x": 7932,
            "y": 505,
            "size": 42,
            "at": "l2:price"
          },
          {
            "id": "e-sea",
            "t": "text",
            "text": "Hàng mùa: hết mùa là đứng",
            "x": 7932,
            "y": 590,
            "size": 42,
            "at": "l3:Seasonal",
            "color": "coral"
          },
          {
            "id": "e-sea2",
            "t": "text",
            "text": "→ tính trước: bán hết bao lâu?",
            "x": 7972,
            "y": 660,
            "size": 38,
            "at": "l3:Plan"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Likes are compliments. Questions about ordering are orders.",
          "sub": "Lượt thích là lời khen, lượt hỏi đặt mới là đơn.",
          "keys": [
            "lượt hỏi đặt mới là đơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask your group: at about this price, would you buy it, and why? Answers shape your descriptions.",
          "sub": "Hỏi thẳng nhóm khách: “Giá khoảng như vầy, bạn có mua không, mua để làm gì?” Câu trả lời giúp viết mô tả trúng ý.",
          "keys": [
            "mua để làm gì"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Seasonal goods, like warm jackets or Tết goods, stop after the season. Plan your sell-out time.",
          "sub": "Hàng mùa như áo ấm, đồ Tết bán nhanh trong mùa, hết mùa gần như đứng hẳn. Tính trước cần bán hết trong bao lâu.",
          "keys": [
            "Tính trước"
          ]
        }
      ],
      "ref": "p11,p8,p9"
    },
    {
      "id": "s14",
      "module": "BRK-06",
      "data": {
        "title": "Tìm nguồn hàng ở đâu?",
        "items": [
          {
            "illus": "convenience-store",
            "text": "Chợ đầu mối"
          },
          {
            "illus": "factory",
            "text": "Xưởng nhỏ"
          },
          {
            "illus": "page-facing-up",
            "text": "Nhà phân phối"
          },
          {
            "illus": "yarn",
            "text": "Hàng thủ công"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Markets, workshops, distributors, handmade makers.",
          "sub": "Chợ đầu mối, xưởng nhỏ, nhà phân phối, người làm thủ công."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So where do you find a supplier?",
          "sub": "Vậy tìm nguồn hàng ở đâu?",
          "keys": [
            "nguồn hàng"
          ]
        }
      ],
      "ref": "p12"
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
            "text": "④ Chủ nhật · Chợ đầu mối",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth"
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
                  "id": "lan",
                  "side": "left",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "candle",
                "package"
              ]
            },
            "at": "l1:market",
            "caption": "Sáng Chủ nhật · sạp Cô Hoa",
            "icon": "shopping-bags"
          },
          {
            "id": "f-m",
            "t": "text",
            "text": "Chợ: xem tận tay",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l3:touch",
            "hl": [
              {
                "text": "tận tay",
                "at": "l3:touch"
              }
            ]
          },
          {
            "id": "f-w",
            "t": "text",
            "text": "Xưởng: rẻ khi đặt nhiều",
            "x": 60,
            "y": 1335,
            "size": 42,
            "at": "l3:Workshops"
          },
          {
            "id": "f-d",
            "t": "text",
            "text": "Nhà phân phối: giấy tờ rõ",
            "x": 60,
            "y": 1410,
            "size": 42,
            "at": "l4:papers"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Sunday morning, the wholesale market.",
          "sub": "Chặng bốn: sáng Chủ nhật, chợ đầu mối."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Cô Hoa, a stall owner who has seen every trend come and go.",
          "sub": "Đây là Cô Hoa, chủ sạp đã thấy đủ mọi mốt đến rồi đi.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Here you see and touch the goods, child. Workshops give good prices for big orders.",
          "sub": "Ở chợ thì con xem tận tay. Còn xưởng thì giá tốt khi đặt nhiều.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And official distributors have clear papers.",
          "sub": "Còn nhà phân phối chính thức có giấy tờ rõ ràng."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p12"
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
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
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
            "id": "f-q1",
            "t": "text",
            "text": "“Đơn tối thiểu bao nhiêu ạ?”",
            "x": 60,
            "y": 1500,
            "size": 38,
            "at": "l1:Minimum"
          },
          {
            "id": "f-q2",
            "t": "text",
            "text": "“Hàng lỗi đổi thế nào ạ?”",
            "x": 60,
            "y": 1560,
            "size": 38,
            "at": "l1:faulty"
          },
          {
            "id": "f-q3",
            "t": "text",
            "text": "“Có hoá đơn, giấy tờ không ạ?”",
            "x": 60,
            "y": 1620,
            "size": 38,
            "at": "l1:Invoices"
          },
          {
            "id": "f-q4",
            "t": "text",
            "text": "“Đặt sỉ bao lâu có hàng ạ?”",
            "x": 60,
            "y": 1680,
            "size": 38,
            "at": "l1:delivery"
          },
          {
            "id": "f-on",
            "t": "text",
            "text": "Nguồn online: địa chỉ, gọi video",
            "x": 60,
            "y": 1770,
            "size": 42,
            "at": "l3:address",
            "color": "accent",
            "hl": [
              {
                "text": "gọi video",
                "at": "l3:video"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Minimum order? How do you exchange faulty goods? Invoices or origin papers? How long for delivery?",
          "sub": "Đơn tối thiểu bao nhiêu ạ? Hàng lỗi đổi thế nào ạ? Có hoá đơn, giấy tờ nguồn gốc không ạ? Đặt sỉ bao lâu có hàng ạ?",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Good questions. A real supplier answers them clearly, and lets you order samples first.",
          "sub": "Hỏi vậy là khôn. Nguồn đàng hoàng thì trả lời rõ, và cho con đặt mẫu trước.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Supplier only online? Ask the warehouse address, video call to see real goods, ask past buyers.",
          "sub": "Nguồn chỉ quen qua mạng? Hỏi địa chỉ kho, gọi video xem hàng thật, hỏi người từng lấy hàng.",
          "keys": [
            "gọi video xem hàng thật"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A nice profile is easy to fake.",
          "sub": "Trang cá nhân đẹp thì dễ làm giả lắm."
        }
      ],
      "ref": "p13,p14,p15"
    },
    {
      "id": "s17",
      "module": "BRK-07",
      "data": {
        "question": "Rẻ hơn hẳn mọi nơi: món hời hay cái bẫy?",
        "illus": "money-with-wings"
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
          "say": "Far cheaper than everywhere else. Bargain, or trap?",
          "sub": "Rẻ hơn hẳn mọi nơi: món hời hay cái bẫy?",
          "keys": [
            "món hời hay cái bẫy"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
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
            "text": "⑤ Tối Chủ nhật · Son giá rẻ",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth"
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
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "lipstick",
                "mobile-phone"
              ]
            },
            "at": "l1:Thảo",
            "caption": "Tối Chủ nhật · một nhóm trên mạng",
            "icon": "lipstick"
          },
          {
            "id": "g-cheap",
            "t": "text",
            "text": "Rẻ hơn hẳn mọi nơi",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:cheaper",
            "color": "coral"
          },
          {
            "id": "g-why",
            "t": "text",
            "text": "lỗi, tồn lâu, giả, nguồn ảo",
            "x": 2028,
            "y": 1345,
            "size": 42,
            "at": "l3:faulty",
            "hl": [
              {
                "text": "nguồn ảo",
                "at": "l3:exist"
              }
            ]
          },
          {
            "id": "g-fake",
            "t": "text",
            "text": "Hàng nhái: dễ bị khoá shop",
            "x": 2028,
            "y": 1430,
            "size": 38,
            "at": "l4:Copies",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Sunday night. This is Thảo, Lan's friend, who sells handmade goods after work.",
          "sub": "Chặng năm: tối Chủ nhật. Đây là Thảo, bạn của Lan, bán đồ handmade sau giờ làm.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In an online group, she finds lipsticks far cheaper than anywhere else.",
          "sub": "Trong một nhóm trên mạng, Thảo thấy nguồn son rẻ hơn hẳn mọi nơi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "There's usually a reason: faulty, old stock, fakes, or a supplier who doesn't exist.",
          "sub": "Thường có lý do: hàng lỗi, tồn lâu, hàng giả, hoặc nhà cung cấp không có thật.",
          "keys": [
            "không có thật"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Copies of famous brands can mean legal trouble, and a locked shop.",
          "sub": "Hàng nhái thương hiệu còn có thể gây rắc rối pháp lý, bị khoá gian hàng."
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s19",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Tối Chủ nhật · nhóm trên mạng",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chuyển trước toàn bộ tiền cho nguồn lạ",
          "why": "Hàng về sai màu, vài thỏi quá hạn; hỏi đổi thì bị chặn liên lạc.",
          "rule": "Lần đầu đặt mẫu, lần sau mới đặt sỉ"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Lovely photos, and the seller pushes: this price is only for today!",
          "sub": "Ảnh đẹp lung linh, người bán giục: “giá này chỉ trong hôm nay”!",
          "keys": [
            "chỉ trong hôm nay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Only today? Okay, I'll send the full amount now!",
          "sub": "Chỉ hôm nay á? Thôi chuyển hết tiền luôn!",
          "face": "happy",
          "pose": "phone",
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
          "say": "Wrong colours, some past their date. She asks to swap, and gets blocked.",
          "sub": "Hàng về sai màu, vài thỏi quá hạn. Hỏi đổi thì bị chặn liên lạc.",
          "keys": [
            "bị chặn liên lạc"
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
          "say": "Where's your shop? Can I order a few samples first?",
          "sub": "Cửa hàng bên mình ở đâu ạ? Cho em đặt vài thỏi mẫu trước nhé?",
          "phase": "redo",
          "face": "thinking",
          "pose": "phone"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p17"
    },
    {
      "id": "s20",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Lần đầu đặt mẫu",
        "hl": "đặt mẫu",
        "sub": "Lần sau mới đặt sỉ"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Samples the first time.",
          "sub": "Lần đầu đặt mẫu,"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wholesale only the next time.",
          "sub": "lần sau mới đặt sỉ.",
          "keys": [
            "lần sau mới đặt sỉ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s21",
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
            "at": "l3",
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
            "text": "⑥ Tuần 2 · Hàng mẫu về",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "package",
                "candle"
              ]
            },
            "at": "l1:arrive",
            "caption": "Tuần 2 · hộp nến mẫu",
            "icon": "package"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1270,
            "w": 50,
            "h": 50,
            "at": "l2:colour",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1252,
            "size": 62,
            "at": "l2:colour+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Đúng màu, size, chất liệu",
            "x": 4071,
            "y": 1262,
            "size": 40,
            "at": "l2:colour+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1345,
            "w": 50,
            "h": 50,
            "at": "l2:Labels",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1327,
            "size": 62,
            "at": "l2:Labels+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Nhãn, hạn dùng, hướng dẫn",
            "x": 4071,
            "y": 1337,
            "size": 40,
            "at": "l2:Labels+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1420,
            "w": 50,
            "h": 50,
            "at": "l2:glue",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1402,
            "size": 62,
            "at": "l2:glue+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Mối dán chắc, không mùi lạ",
            "x": 4071,
            "y": 1412,
            "size": 40,
            "at": "l2:glue+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1495,
            "w": 50,
            "h": 50,
            "at": "l2:Packaging",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1477,
            "size": 62,
            "at": "l2:Packaging+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Bao bì chịu được đường giao",
            "x": 4071,
            "y": 1487,
            "size": 40,
            "at": "l2:Packaging+200"
          },
          {
            "id": "h-picky",
            "t": "text",
            "text": "Dùng thử như khách khó tính",
            "x": 3996,
            "y": 1610,
            "size": 44,
            "at": "l3:pickiest",
            "color": "accent",
            "hl": [
              {
                "text": "khách khó tính",
                "at": "l3:pickiest"
              }
            ]
          },
          {
            "id": "h-note",
            "t": "text",
            "text": "Ghi tốt, chưa tốt → mô tả",
            "x": 3996,
            "y": 1690,
            "size": 42,
            "at": "l4:Note"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: week two. Lan's samples arrive.",
          "sub": "Chặng sáu: tuần hai. Hàng mẫu của Lan về."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Right colour, size and material? Labels, expiry, instructions? Strong glue, no strange smell? Packaging that survives delivery?",
          "sub": "Đúng màu, size, chất liệu? Có nhãn, hạn dùng, hướng dẫn? Mối dán chắc, không mùi lạ? Bao bì chịu được đường giao?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Now I use them like the pickiest buyer, for days.",
          "sub": "Giờ em dùng thử như khách khó tính nhất, vài ngày liền.",
          "face": "thinking",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Some problems only show after days. Note the good and the bad: your honest description later.",
          "sub": "Có lỗi dùng vài ngày mới lộ. Ghi điểm tốt, điểm chưa tốt: đó là mô tả trung thực sau này.",
          "keys": [
            "mô tả trung thực"
          ]
        }
      ],
      "ref": "p19,p20"
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
            "text": "⑦ Tuần 3 · Lô thứ hai",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "t-shirt",
                "package"
              ]
            },
            "at": "l1:Dũng",
            "caption": "Tuần 3 · thùng áo lô hai",
            "icon": "t-shirt"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Lô đầu: áo dày, khách khen",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l1:thick"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Lô hai: không mở thùng",
            "x": 5964,
            "y": 1340,
            "size": 44,
            "at": "l2:straight",
            "color": "coral"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "→ mỏng hơn, giặt là bai cổ",
            "x": 6004,
            "y": 1420,
            "size": 40,
            "at": "l3:thinner",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: week three. Dũng's workshop T-shirts: first batch thick, buyers loved it.",
          "sub": "Chặng bảy: tuần ba. Dũng giờ bán áo thun của một xưởng nhỏ. Lô đầu dày dặn, khách khen nhiều."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Second batch, busiest week ever. Same workshop, same shirts. Straight to the buyers!",
          "sub": "Lô hai về đúng tuần bận nhất. Cùng xưởng, cùng áo. Gửi thẳng cho khách!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Days later, complaints: thinner than before, collars stretched after one wash.",
          "sub": "Vài ngày sau, tin phàn nàn tới tấp: áo mỏng hơn, giặt một lần đã bai cổ.",
          "keys": [
            "bai cổ"
          ]
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s23",
      "module": "BRK-10",
      "data": {
        "quote": "Mẫu tốt chưa chắc lô sau cũng tốt",
        "mark": "lô sau",
        "by": "Bài học của Dũng",
        "illus": "t-shirt"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A good sample doesn't promise a good next batch.",
          "sub": "Mẫu tốt chưa chắc lô sau cũng tốt.",
          "keys": [
            "lô sau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dũng, the hard way.",
          "sub": "Dũng học bằng cách khó nhất."
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s24",
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
            "id": "i-rule",
            "t": "text",
            "text": "Lô nào về, lô ấy kiểm",
            "x": 5964,
            "y": 1520,
            "size": 54,
            "at": "l1:Every",
            "color": "accent",
            "hl": [
              {
                "text": "lô ấy kiểm",
                "at": "l1:check"
              }
            ]
          },
          {
            "id": "i-pay",
            "t": "text",
            "text": "Chuyển khoản đúng tên, ghi rõ",
            "x": 5964,
            "y": 1610,
            "size": 42,
            "at": "l2:transfer"
          },
          {
            "id": "i-msg",
            "t": "text",
            "text": "Lưu tin nhắn thoả thuận",
            "x": 5964,
            "y": 1680,
            "size": 42,
            "at": "l3:messages"
          },
          {
            "id": "i-inv",
            "t": "text",
            "text": "Hoá đơn, phiếu giao mỗi lần",
            "x": 5964,
            "y": 1750,
            "size": 42,
            "at": "l3:invoice",
            "color": "accent",
            "hl": [
              {
                "text": "mỗi lần",
                "at": "l3:time"
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
          "say": "Every batch that arrives is a batch you check. Open a few at random, before buyers do.",
          "sub": "Lô nào về, lô ấy kiểm. Mở kiểm ngẫu nhiên vài món trước khi khách làm thay.",
          "keys": [
            "Lô nào về, lô ấy kiểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And pay with a trail: a transfer to the seller's or shop's own account, with a clear note.",
          "sub": "Và trả tiền có dấu vết: chuyển khoản vào tài khoản đúng tên người bán hoặc cửa hàng, ghi nội dung rõ.",
          "keys": [
            "có dấu vết"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Save messages on price and quantity. Get an invoice or delivery note every time, for origin questions.",
          "sub": "Lưu tin nhắn về giá, số lượng, đổi hàng lỗi. Mỗi lần nhập, xin hoá đơn hoặc phiếu giao: để trả lời khách hỏi nguồn gốc, đối chiếu khi thiếu hàng."
        }
      ],
      "ref": "p21,p23,p24,p25"
    },
    {
      "id": "s25",
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
            "text": "Tháng sau · Nhập thêm",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:month"
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
                  "id": "lan",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "candle",
                "package"
              ]
            },
            "at": "l1:Monday",
            "caption": "Tối thứ Hai · một tháng sau",
            "icon": "candle"
          },
          {
            "id": "j-step",
            "t": "text",
            "text": "Bán đều → tăng từng bước",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l3:Step",
            "color": "accent",
            "hl": [
              {
                "text": "từng bước",
                "at": "l3:Step"
              }
            ]
          },
          {
            "id": "j-chk",
            "t": "text",
            "text": "Kịp bán rồi mới tăng tiếp",
            "x": 7932,
            "y": 1340,
            "size": 42,
            "at": "l3:keep"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last stop: a Monday night, one month later. Lan's candles sell steadily.",
          "sub": "Chặng cuối: một tối thứ Hai, một tháng sau. Nến của Lan bán đều."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "So do I double the order now?",
          "sub": "Vậy giờ em nhập gấp đôi luôn nhé?",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Step by step. Raise it a little, check sales keep up, then raise again.",
          "sub": "Tăng từng bước. Tăng một chút, xem tốc độ bán có theo kịp, rồi mới tăng tiếp.",
          "keys": [
            "Tăng từng bước"
          ]
        }
      ],
      "ref": "p26"
    },
    {
      "id": "s26",
      "module": "BRK-11",
      "data": {
        "title": "3 điều khi nhập thêm",
        "items": [
          "Tăng từng bước",
          "Có một nguồn dự phòng",
          "Ưu tiên nguồn gần, giao tận nơi"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three: a source near you.",
          "sub": "Ba: nguồn gần, giao tận nơi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: a backup supplier.",
          "sub": "Hai: một nguồn dự phòng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: step by step.",
          "sub": "Một: tăng từng bước.",
          "keys": [
            "tăng từng bước"
          ]
        }
      ],
      "ref": "p26,p27,p28"
    },
    {
      "id": "s27",
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
            "at": "l3",
            "fit": [
              "j-v"
            ],
            "zoom": 1.3,
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
            "id": "j-bk",
            "t": "text",
            "text": "Nguồn dự phòng: khỏi hết hàng lâu",
            "x": 7932,
            "y": 1430,
            "size": 40,
            "at": "l1:backup"
          },
          {
            "id": "j-near",
            "t": "text",
            "text": "Rẻ chút mà mất hai tiếng?",
            "x": 7932,
            "y": 1510,
            "size": 44,
            "at": "l2:hours",
            "color": "coral"
          },
          {
            "id": "j-near2",
            "t": "text",
            "text": "→ thường không đáng",
            "x": 7972,
            "y": 1580,
            "size": 42,
            "at": "l2:worth",
            "color": "muted"
          },
          {
            "id": "j-20",
            "t": "text",
            "text": "20 đơn → nhập chừng 20",
            "x": 7932,
            "y": 1670,
            "size": 46,
            "at": "l3:twenty",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Vác mai đi đào”?",
            "x": 8752,
            "y": 1780,
            "size": 44,
            "at": "l4:potatoes",
            "color": "muted"
          },
          {
            "id": "j-cax",
            "t": "strike",
            "over": "j-ca",
            "at": "l4:plant"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "→ trồng thử một luống",
            "x": 7932,
            "y": 1760,
            "size": 48,
            "at": "l4:row",
            "color": "accent",
            "hl": [
              {
                "text": "một luống",
                "at": "l4:row"
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
          "say": "Keep a backup supplier for your best seller, so you're never sold out for long.",
          "sub": "Món bán chạy nên có ít nhất một nguồn dự phòng, để khỏi báo khách “hết hàng” quá lâu.",
          "keys": [
            "nguồn dự phòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Selling after work? A bit cheaper, but two hours of pickup every night? Usually not worth it.",
          "sub": "Bán ngoài giờ làm? Rẻ hơn chút mà tối nào cũng mất hai tiếng đi lấy hàng thì thường không đáng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "And me? A new case design, twenty orders. So I bought about twenty. Almost no leftovers!",
          "sub": "Còn anh? Mẫu ốp mới, hai chục đơn. Anh nhập chừng hai chục. Gần như không tồn!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "See others eat sweet potatoes? Fine. Just plant one small row first.",
          "sub": "Thấy người ta ăn khoai? Được thôi. Cứ trồng thử một luống trước đã.",
          "keys": [
            "trồng thử một luống"
          ]
        }
      ],
      "ref": "p27,p28,outro"
    },
    {
      "id": "s28",
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
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3",
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
            "x": 6604,
            "y": 440,
            "at": "l1:yourself"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8632,
            "y": 345,
            "at": "l2:orders"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6604,
            "y": 1340,
            "at": "l3:check"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "i-rule"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:batch"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; hàng có quy định riêng, hãy xem hướng dẫn chính thức.",
            "x": 7932,
            "y": 1845,
            "size": 22,
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
          "say": "So: try it yourself first.",
          "sub": "Tóm lại: mình dùng thử trước.",
          "keys": [
            "dùng thử trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Likes are compliments. Orders are orders.",
          "sub": "Lượt thích là lời khen, lượt hỏi đặt mới là đơn.",
          "keys": [
            "mới là đơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Samples first, then check every batch.",
          "sub": "Đặt mẫu trước, và lô nào về, lô ấy kiểm.",
          "keys": [
            "lô ấy kiểm"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p6,p11,p23"
    },
    {
      "id": "s37",
      "module": "QUIZ-01",
      "ref": "questions[20]",
      "data": {
        "q": "The first sample was great, what should you do when the next batch arrives?",
        "options": [
          "Send them straight to buyers, since the sample already proved the quality is good",
          "Check only the box on top, because all boxes come from the same place",
          "Open and check a few random items before you post them for sale"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "package",
        "why": "Mẫu tốt chưa chắc lô sau cũng tốt. Kiểm ngẫu nhiên vài món mỗi lần nhập."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The first sample was great, what should you do when the next batch arrives?",
          "sub": "Hàng mẫu đầu rất tốt, khi lô tiếp theo về bạn nên làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Open and check a few random items before you post them for sale.",
          "sub": "Mở kiểm ngẫu nhiên vài món trước khi đăng bán."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A good sample does not promise a good next batch. Check early, before buyers do.",
          "sub": "Mẫu tốt chưa chắc lô sau tốt. Kiểm sớm, trước khi đến tay khách."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s38",
      "module": "END-05",
      "data": {
        "text": "Đúng món, đúng nguồn",
        "sub": "Bốn mươi câu hỏi đang chờ bạn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "List five things you know well. Then try the forty questions below!",
          "sub": "Viết ra năm món bạn hiểu rõ nhất. Rồi thử bốn mươi câu bên dưới nhé!"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s25"
  }
};
