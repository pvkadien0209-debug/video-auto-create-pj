// Kịch bản video W lần 3 (#110) — "Vệ sinh và an toàn thực phẩm cơ bản cho quán nhỏ" · chuỗi "Giữ khách cho cửa hàng nhỏ"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "basic-food-hygiene-small-shop--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "small-shop-owners",
    "slug": "basic-food-hygiene-small-shop",
    "door": "ky-nang",
    "level": "B1",
    "title": "Vệ sinh và an toàn thực phẩm cơ bản cho quán nhỏ",
    "series": "Giữ khách cho cửa hàng nhỏ"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô theo MỘT NGÀY của quán cô Hoa (5:00 nhận hàng → 5:30 tủ lạnh → 6:00 Lan tới ca → 7:00 bán bún, tay và tiền → 10:00 sơ chế, thớt → 11:00 nồi canh → 15:00 hết đá sạch → 20:00 tin nhắn đau bụng → 5:00 sáng hôm sau). Nhân vật theo w145/_series/small-shop-owners.md: Cô Hoa (gộp Tuấn p9, Thu p12, Khoa p16, Nhàn p21), Dũng (người giao cá, p2), Lan (người phụ bị tiêu chảy, p19), Bác Bình (khách gọi trà đá p16, khách báo đau bụng p28). Khách mới trong hàng (p21) kể không tên (vai thao, không gọi tên). Hàng xôi (p21) chuyển thành bán bún, bốc rau bằng tay; chuyện thớt chung (p12) kể là chuyện ‘năm ngoái’ của quán. Số liệu chỉ từ bài: khoảng 30 bát, chưa tới 20 phút (p9), 10 phút (p16). Cảnh ngắt nhịp: BRK-01 s11 (dừng hình thớt chung, p12), BRK-03 s14 (30 bát, p9), DLG s18 (cãi khách báo đau bụng, p28). Khép vòng: ‘Ăn chín, uống sôi’ → ‘thớt nào việc nấy’; 5:00 sáng ở bếp mở và khép. Lưu ý chung cuối bài (#133). Câu đố giữ questions[7]. Bản cũ (W lần 3, #110): w145/bak/basic-food-hygiene-small-shop--w01.js.",
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
            "text": "1 khách",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l1:one",
            "color": "accent",
            "hl": [
              {
                "text": "1 khách",
                "at": "l1:stomach"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "đau bụng → cả xóm biết",
            "x": 70,
            "y": 320,
            "size": 54,
            "at": "l1:street",
            "hl": [
              {
                "text": "cả xóm biết",
                "at": "l1:knows"
              }
            ]
          },
          {
            "id": "a-big",
            "t": "text",
            "text": "Ta tưởng: sạch = bếp to, đồ đắt?",
            "x": 70,
            "y": 430,
            "size": 48,
            "at": "l2:big kitchen",
            "color": "muted"
          },
          {
            "id": "a-bigx",
            "t": "strike",
            "over": "a-big",
            "at": "l3:habits"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One customer with a stomach ache, and the whole street knows by lunch.",
          "sub": "Một khách đau bụng, trưa đó cả xóm biết.",
          "keys": [
            "cả xóm biết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "We think a clean shop needs a big kitchen and expensive gear.",
          "sub": "Ta tưởng quán sạch phải bếp to, đồ đắt."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not at all. Just a few small habits, every day.",
          "sub": "Không đâu. Chỉ vài thói quen nhỏ, mỗi ngày.",
          "keys": [
            "vài thói quen nhỏ"
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
              "set": "kitchen",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "sunrise",
                "steaming-bowl"
              ]
            },
            "at": "l1",
            "caption": "5:00 sáng · bếp quán cô Hoa",
            "icon": "sunrise"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Ăn chín, uống sôi”",
            "x": 70,
            "y": 560,
            "size": 60,
            "at": "l3:cooked",
            "color": "accent",
            "hl": [
              {
                "text": "Ăn chín, uống sôi",
                "at": "l3:boiled"
              }
            ]
          },
          {
            "id": "a-more",
            "t": "text",
            "text": "+ vài dòng cho quán ăn",
            "x": 900,
            "y": 670,
            "size": 46,
            "at": "l4:lines",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Cô Hoa. Five a.m., and her small eatery is waking up.",
          "sub": "Đây là cô Hoa. Năm giờ sáng, quán nhỏ của cô thức dậy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Bún in the morning, rice at lunch, iced tea all day. Let's go!",
          "sub": "Sáng bún, trưa cơm, cả ngày trà đá. Bắt đầu thôi!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Grandma's rule: eat it cooked, drink it boiled.",
          "sub": "Ông bà dặn: “Ăn chín, uống sôi.”",
          "keys": [
            "Ăn chín, uống sôi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Wise. But a shop needs a few more lines.",
          "sub": "Đúng. Nhưng quán ăn cần thêm vài dòng."
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
            "text": "Quán nhỏ giữ sạch thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:safe",
            "hl": [
              {
                "text": "giữ sạch",
                "at": "l1:safe"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Nguyên liệu rõ nguồn",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:sources"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Giữ lạnh đúng cách",
            "x": 2028,
            "y": 235,
            "size": 50,
            "at": "l2:cold"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Tách sống – chín",
            "x": 2028,
            "y": 310,
            "size": 50,
            "at": "l2:raw",
            "hl": [
              {
                "text": "sống – chín",
                "at": "l2:apart"
              }
            ]
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "④ Rửa tay đúng lúc",
            "x": 2868,
            "y": 160,
            "size": 50,
            "at": "l3:hands"
          },
          {
            "id": "b-5",
            "t": "text",
            "text": "⑤ Dọn quán mỗi ngày",
            "x": 2868,
            "y": 235,
            "size": 50,
            "at": "l3:clean"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how does a small shop keep food safe?",
          "sub": "Vậy quán nhỏ giữ đồ ăn an toàn thế nào?",
          "keys": [
            "an toàn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five habits. Clear sources. Proper cold. Raw and cooked kept apart.",
          "sub": "Năm thói quen: nguồn rõ, giữ lạnh đúng, tách sống chín."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hands washed at the right times. And a clean shop, every day.",
          "sub": "Rửa tay đúng lúc. Dọn quán mỗi ngày."
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
            "id": "b-pp",
            "t": "text",
            "text": "Giấy tờ → hỏi phường, xã",
            "x": 2868,
            "y": 320,
            "size": 44,
            "at": "l1:papers",
            "color": "muted"
          },
          {
            "id": "b-day",
            "t": "text",
            "text": "8 chặng, một ngày của quán",
            "x": 2028,
            "y": 520,
            "size": 52,
            "at": "l2:full day",
            "hl": [
              {
                "text": "một ngày",
                "at": "l2:full day"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 190,
            "h": 90,
            "at": "l2:follow+0",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2234,
            "y": 610,
            "w": 190,
            "h": 90,
            "at": "l2:follow+260",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2440,
            "y": 610,
            "w": 190,
            "h": 90,
            "at": "l2:follow+520",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2646,
            "y": 610,
            "w": 190,
            "h": 90,
            "at": "l2:follow+780",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2852,
            "y": 610,
            "w": 190,
            "h": 90,
            "at": "l2:follow+1040",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3058,
            "y": 610,
            "w": 190,
            "h": 90,
            "at": "l2:follow+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3264,
            "y": 610,
            "w": 190,
            "h": 90,
            "at": "l2:follow+1560",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3470,
            "y": 610,
            "w": 190,
            "h": 90,
            "at": "l2:follow+1820",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "5:00",
            "x": 2048,
            "y": 628,
            "size": 44,
            "at": "l2:follow+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "5:30",
            "x": 2254,
            "y": 628,
            "size": 44,
            "at": "l2:follow+380"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "6:00",
            "x": 2460,
            "y": 628,
            "size": 44,
            "at": "l2:follow+640"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "7:00",
            "x": 2666,
            "y": 628,
            "size": 44,
            "at": "l2:follow+900"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "10:00",
            "x": 2872,
            "y": 628,
            "size": 44,
            "at": "l2:follow+1160"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "11:00",
            "x": 3078,
            "y": 628,
            "size": 44,
            "at": "l2:follow+1420"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "15:00",
            "x": 3284,
            "y": 628,
            "size": 44,
            "at": "l2:follow+1680"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "20:00",
            "x": 3490,
            "y": 628,
            "size": 44,
            "at": "l2:follow+1940"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Papers? They differ by shop type and size. Ask your ward office what you need.",
          "sub": "Giấy tờ? Tuỳ loại hình, quy mô: hỏi phường, xã.",
          "keys": [
            "hỏi phường, xã"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Now let's follow one full day, five a.m. to the next morning.",
          "sub": "Giờ theo trọn một ngày, năm giờ sáng tới sáng hôm sau.",
          "keys": [
            "trọn một ngày"
          ]
        }
      ],
      "ref": "p27"
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
            "text": "① 5:00 · Nhận hàng",
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
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "walk",
                  "at": "l1",
                  "pose": "give"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "stand"
                }
              ],
              "props": [
                "fish",
                "receipt"
              ]
            },
            "at": "l1:meet",
            "caption": "5:00 · hàng tới",
            "icon": "fish"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 170,
            "w": 46,
            "h": 46,
            "at": "l4:fresh",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 152,
            "size": 58,
            "at": "l4:fresh+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Thịt cá tươi, không nhớt",
            "x": 4064,
            "y": 160,
            "size": 44,
            "at": "l4:fresh+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 242,
            "w": 46,
            "h": 46,
            "at": "l4:greens",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 224,
            "size": 58,
            "at": "l4:greens+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Rau không dập úng",
            "x": 4064,
            "y": 232,
            "size": 44,
            "at": "l4:greens+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 314,
            "w": 46,
            "h": 46,
            "at": "l5:packs",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 296,
            "size": 58,
            "at": "l5:packs+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Đồ gói còn hạn",
            "x": 4064,
            "y": 304,
            "size": 44,
            "at": "l5:packs+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 386,
            "w": 46,
            "h": 46,
            "at": "l5:frozen",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 368,
            "size": 58,
            "at": "l5:frozen+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Đồ đông còn cứng",
            "x": 4064,
            "y": 376,
            "size": 44,
            "at": "l5:frozen+200"
          },
          {
            "id": "c-ret",
            "t": "text",
            "text": "Không ổn → đổi ngay",
            "x": 3996,
            "y": 470,
            "size": 50,
            "at": "l5:return",
            "color": "accent",
            "hl": [
              {
                "text": "đổi ngay",
                "at": "l5:return"
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
          "say": "First stop: five a.m. Meet Dũng, the fish delivery guy, always rushing.",
          "sub": "Chặng một: năm giờ. Đây là Dũng, người giao cá. Lúc nào cũng vội."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Your frozen fish, Cô Hoa! Sign here, I'm off!",
          "sub": "Cá đông lạnh của cô đây! Ký nhé, cháu đi đây!",
          "pose": "give",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Wait. It's soft and wet. Bring me a properly frozen batch.",
          "sub": "Khoan. Cá mềm, ướt rồi. Đổi cô lô còn đông cứng.",
          "face": "stern",
          "pose": "stop"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Check at the door. Meat and fish fresh, not slimy. Greens not bruised.",
          "sub": "Kiểm ngay lúc nhận: thịt cá tươi, không nhớt. Rau không dập."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Packs in date. Frozen food still hard. If not, return it then and there.",
          "sub": "Đồ gói còn hạn. Đồ đông còn cứng. Không ổn thì đổi ngay.",
          "keys": [
            "đổi ngay"
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
      "ref": "p2"
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
            "zoom": 1.3,
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
            "id": "c-rc",
            "t": "text",
            "text": "Giữ hoá đơn, nhớ nơi mua",
            "x": 3996,
            "y": 550,
            "size": 46,
            "at": "l2:seller",
            "hl": [
              {
                "text": "nơi mua",
                "at": "l2:address"
              }
            ]
          },
          {
            "id": "c-ch",
            "t": "text",
            "text": "Rẻ bất thường → hỏi nguồn",
            "x": 3996,
            "y": 620,
            "size": 46,
            "at": "l3:cheap",
            "color": "coral"
          },
          {
            "id": "c-fr",
            "t": "text",
            "text": "Về tới: cất lạnh ngay",
            "x": 3996,
            "y": 690,
            "size": 50,
            "at": "l4:fridge",
            "color": "accent",
            "hl": [
              {
                "text": "cất lạnh ngay",
                "at": "l4:straight"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "And the receipt, please. I keep one for every delivery.",
          "sub": "Cho cô xin hoá đơn. Lần nhập nào cô cũng giữ.",
          "pose": "hold"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Regular seller, clear address. If trouble comes, she knows where that batch came from.",
          "sub": "Mua chỗ quen, địa chỉ rõ. Có chuyện là biết lô hàng từ đâu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Suspiciously cheap meat? Ask where it's from. Savings never pay for food poisoning.",
          "sub": "Rẻ bất thường? Hỏi kỹ nguồn. Chút tiền không bù nổi một ca ngộ độc.",
          "keys": [
            "Hỏi kỹ nguồn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And fresh goods go straight into the fridge, not on the floor while you serve.",
          "sub": "Đồ tươi về là cất lạnh ngay, đừng để dưới sàn.",
          "keys": [
            "cất lạnh ngay"
          ]
        }
      ],
      "ref": "p1,p3,p4"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 5:30 · Tủ lạnh và kho",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:second stop"
          },
          {
            "id": "d-up",
            "t": "box",
            "x": 5964,
            "y": 160,
            "w": 440,
            "h": 250,
            "at": "l1:house",
            "stroke": 6
          },
          {
            "id": "d-dn",
            "t": "box",
            "x": 5964,
            "y": 430,
            "w": 440,
            "h": 250,
            "at": "l1:house+400",
            "stroke": 6
          },
          {
            "id": "d-upt",
            "t": "text",
            "text": "Trên: đồ chín",
            "x": 5994,
            "y": 190,
            "size": 46,
            "at": "l2:upstairs",
            "color": "accent"
          },
          {
            "id": "d-rice",
            "t": "illus",
            "name": "cooked-rice",
            "x": 6244,
            "y": 280,
            "size": 110,
            "at": "l2:upstairs+300"
          },
          {
            "id": "d-dnt",
            "t": "text",
            "text": "Dưới: thịt cá sống",
            "x": 5994,
            "y": 460,
            "size": 46,
            "at": "l2:downstairs",
            "color": "coral"
          },
          {
            "id": "d-meat",
            "t": "illus",
            "name": "cut-of-meat",
            "x": 6244,
            "y": 550,
            "size": 110,
            "at": "l2:downstairs+300"
          },
          {
            "id": "d-cov",
            "t": "text",
            "text": "Tất cả đậy kín",
            "x": 6464,
            "y": 190,
            "size": 52,
            "at": "l2:covered",
            "hl": [
              {
                "text": "đậy kín",
                "at": "l2:covered"
              }
            ]
          },
          {
            "id": "d-drip",
            "t": "text",
            "text": "nước sống không nhỏ xuống chín",
            "x": 6464,
            "y": 270,
            "size": 40,
            "at": "l3:drip",
            "color": "muted"
          },
          {
            "id": "d-lab",
            "t": "text",
            "text": "Nhãn ngày: cũ trước, mới sau",
            "x": 6464,
            "y": 360,
            "size": 48,
            "at": "l4:label",
            "hl": [
              {
                "text": "Nhãn ngày",
                "at": "l4:label"
              }
            ]
          },
          {
            "id": "d-full",
            "t": "text",
            "text": "Đừng nhồi chật",
            "x": 6464,
            "y": 440,
            "size": 48,
            "at": "l4:stuff"
          },
          {
            "id": "d-chem",
            "t": "text",
            "text": "Hoá chất: chỗ riêng, nhãn rõ",
            "x": 6464,
            "y": 530,
            "size": 48,
            "at": "l5:soap",
            "color": "accent"
          },
          {
            "id": "d-bot",
            "t": "text",
            "text": "Đựng chai nước cũ",
            "x": 6464,
            "y": 610,
            "size": 48,
            "at": "l5:old water",
            "color": "muted"
          },
          {
            "id": "d-botx",
            "t": "strike",
            "over": "d-bot",
            "at": "l5:never+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: five thirty, the fridge. Think of it as a two-storey house.",
          "sub": "Chặng hai: năm rưỡi, tủ lạnh. Coi nó như nhà hai tầng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Upstairs: cooked and ready-to-eat food. Downstairs: raw meat and fish. Everything covered.",
          "sub": "Tầng trên: đồ chín, đồ ăn ngay. Tầng dưới: thịt cá sống. Đậy kín hết.",
          "keys": [
            "Đậy kín"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then raw juice can't drip onto cooked food.",
          "sub": "Nước đồ sống không nhỏ xuống đồ chín."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A date label on every box, old first. And don't stuff it: cold air needs room.",
          "sub": "Nhãn ngày mỗi hộp, cũ trước. Đừng nhồi chật: hơi lạnh cần chỗ.",
          "keys": [
            "Nhãn ngày"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Dish soap and bug spray: their own place, labelled. Never in an old water bottle.",
          "sub": "Nước rửa chén, thuốc côn trùng: chỗ riêng, nhãn rõ. Không đựng chai nước cũ."
        }
      ],
      "ref": "p5,p6,p7"
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
            "text": "③ 6:00 · Lan tới ca",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third stop"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "face": "worried"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "stand"
                }
              ],
              "props": [
                "soap"
              ]
            },
            "at": "l1:meet",
            "caption": "6:00 · Lan xanh mặt",
            "icon": "soap"
          },
          {
            "id": "e-sick",
            "t": "text",
            "text": "Tiêu chảy, nôn, sốt → nghỉ bếp",
            "x": 7932,
            "y": 160,
            "size": 46,
            "at": "l4:stove",
            "color": "coral",
            "hl": [
              {
                "text": "nghỉ bếp",
                "at": "l4:owner"
              }
            ]
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 270,
            "w": 46,
            "h": 46,
            "at": "l5:soap",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 252,
            "size": 58,
            "at": "l5:soap+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Xà phòng trước khi nấu",
            "x": 8000,
            "y": 260,
            "size": 42,
            "at": "l5:soap+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 350,
            "w": 46,
            "h": 46,
            "at": "l5:again",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 332,
            "size": 58,
            "at": "l5:again+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Lại: sau WC, đồ sống, rác, tiền",
            "x": 8000,
            "y": 340,
            "size": 42,
            "at": "l5:again+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 430,
            "w": 46,
            "h": 46,
            "at": "l6:hair",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 412,
            "size": 58,
            "at": "l6:hair+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Buộc tóc, tạp dề sạch",
            "x": 8000,
            "y": 420,
            "size": 42,
            "at": "l6:hair+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 510,
            "w": 46,
            "h": 46,
            "at": "l6:cut",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 492,
            "size": 58,
            "at": "l6:cut+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Tay đứt: băng kín, đeo găng",
            "x": 8000,
            "y": 500,
            "size": 42,
            "at": "l6:cut+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: six a.m. Meet Lan, the young helper. Pale today.",
          "sub": "Chặng ba: sáu giờ. Đây là Lan, cô bé phụ quán. Hôm nay xanh mặt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "I've had diarrhoea since dawn. But we're so busy today...",
          "sub": "Cháu bị tiêu chảy từ sáng. Mà hôm nay đông quá…",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Then no stove for you today. I'll find someone else to cook.",
          "sub": "Vậy hôm nay cháu đừng đứng bếp. Cô nhờ người khác.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Diarrhoea, vomiting or fever? Stay off the stove, even if you're the owner.",
          "sub": "Tiêu chảy, nôn, sốt: nghỉ bếp, kể cả chủ quán.",
          "keys": [
            "nghỉ bếp"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Everyone else: soap before cooking. Again after the toilet, raw meat, rubbish, money.",
          "sub": "Người đứng bếp: xà phòng trước khi nấu. Rửa lại sau vệ sinh, đồ sống, rác, tiền."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Hair tied, clean apron. A cut on your hand? Bandage it, wear a glove.",
          "sub": "Buộc tóc, tạp dề sạch. Tay đứt thì băng kín, đeo găng."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p18,p19"
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
            "at": "l5",
            "fit": "F",
            "ms": 700
          },
          {
            "at": "l6",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 7:00 · Tay và tiền",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:fourth stop"
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
                  "side": "left",
                  "enter": "walk",
                  "at": "l3"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "give"
                }
              ],
              "props": [
                "steaming-bowl",
                "money-bag"
              ]
            },
            "at": "l1:rush",
            "caption": "7:00 · giờ cao điểm",
            "icon": "money-bag"
          },
          {
            "id": "f-x",
            "t": "text",
            "text": "Tay vừa đếm tiền → bốc rau",
            "x": 60,
            "y": 1250,
            "size": 46,
            "at": "l3:counting",
            "color": "coral"
          },
          {
            "id": "f-go",
            "t": "text",
            "text": "Khách mới: lặng lẽ quay xe",
            "x": 60,
            "y": 1330,
            "size": 46,
            "at": "l4:quietly",
            "color": "muted",
            "hl": [
              {
                "text": "lặng lẽ quay xe",
                "at": "l4:quietly"
              }
            ]
          },
          {
            "id": "f-ok",
            "t": "text",
            "text": "Kẹp · găng · giấy",
            "x": 60,
            "y": 1430,
            "size": 56,
            "at": "l5:tongs",
            "color": "accent"
          },
          {
            "id": "f-oh",
            "t": "text",
            "text": "tay kia lo tiền",
            "x": 100,
            "y": 1510,
            "size": 46,
            "at": "l5:other"
          },
          {
            "id": "f-rule",
            "t": "text",
            "text": "Tay cầm tiền, đừng cầm đồ ăn",
            "x": 60,
            "y": 1630,
            "size": 50,
            "at": "l7:money",
            "color": "accent",
            "hl": [
              {
                "text": "đừng cầm đồ ăn",
                "at": "l7:never"
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
          "say": "Fourth stop: the seven a.m. rush. Cô Hoa serves bún and takes money, alone.",
          "sub": "Chặng bốn: bảy giờ, cao điểm. Cô Hoa vừa bán bún vừa thu tiền, một mình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Here's your change. Next! I'll grab the herbs with this hand.",
          "sub": "Tiền thối đây ạ. Người kế! Bốc rau bằng tay này luôn.",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A new customer in line watches that hand. A second ago, it was counting notes.",
          "sub": "Một chị khách mới nhìn bàn tay ấy: vừa đếm xấp tiền lẻ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She says nothing, and quietly rides to the stall next door.",
          "sub": "Chị không nói gì, lặng lẽ quay xe sang hàng bên.",
          "keys": [
            "lặng lẽ quay xe"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Alone? Tongs, a glove or paper for food. The other hand takes money.",
          "sub": "Bán một mình? Kẹp, găng hay giấy cho đồ ăn, tay kia lo tiền."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Tongs for the herbs. This hand is for money.",
          "sub": "Kẹp để gắp rau. Tay này lo tiền.",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "A hand that holds money never holds the food.",
          "sub": "Tay cầm tiền thì đừng cầm đồ ăn.",
          "keys": [
            "đừng cầm đồ ăn"
          ]
        }
      ],
      "ref": "p20,p21,p22"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 10:00 · Sơ chế",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:fifth stop"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "cut-of-meat",
                "cucumber",
                "kitchen-knife"
              ]
            },
            "at": "l1:prep",
            "caption": "10:00 · sơ chế cơm trưa",
            "icon": "kitchen-knife"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: ten a.m. Lunch prep: pork ribs for broken rice, plus cucumber and tomato.",
          "sub": "Chặng năm: mười giờ. Sơ chế cơm tấm: sườn, dưa leo, cà chua."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Raw ribs, done. Quick wipe, and now the cucumbers. Same board.",
          "sub": "Chặt sườn sống xong. Lau sơ, thái luôn dưa leo. Cùng thớt.",
          "pose": "explain"
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s11",
      "module": "BRK-01",
      "data": {
        "illus": "kitchen-knife",
        "around": [
          "cut-of-meat",
          "cucumber"
        ],
        "label": "Sai ở đây!",
        "note": "Một thớt cho cả sống lẫn rau ăn sống"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Freeze! Cucumbers never meet the fire.",
          "sub": "Dừng! Dưa leo đâu có qua lửa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Germs from raw ribs ride straight onto the plate.",
          "sub": "Vi khuẩn từ sườn sống đi thẳng vào đĩa.",
          "keys": [
            "đi thẳng vào đĩa"
          ]
        }
      ],
      "ref": "p12"
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
            "at": "l3",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
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
            "id": "g-2x",
            "t": "text",
            "text": "2 khách quen đau bụng",
            "x": 2028,
            "y": 1250,
            "size": 46,
            "at": "l1:regulars",
            "color": "coral"
          },
          {
            "id": "g-red",
            "t": "box",
            "x": 2028,
            "y": 1330,
            "w": 330,
            "h": 130,
            "at": "l2:two sets",
            "color": "coral",
            "stroke": 6
          },
          {
            "id": "g-redt",
            "t": "text",
            "text": "SỐNG",
            "x": 2118,
            "y": 1360,
            "size": 56,
            "at": "l2:two sets+300",
            "color": "coral"
          },
          {
            "id": "g-grn",
            "t": "box",
            "x": 2398,
            "y": 1330,
            "w": 330,
            "h": 130,
            "at": "l2:two sets+500",
            "color": "accent",
            "stroke": 6
          },
          {
            "id": "g-grnt",
            "t": "text",
            "text": "CHÍN",
            "x": 2488,
            "y": 1360,
            "size": 56,
            "at": "l2:two sets+800",
            "color": "accent"
          },
          {
            "id": "g-tape",
            "t": "text",
            "text": "bếp nhỏ: màu, băng keo",
            "x": 2028,
            "y": 1490,
            "size": 42,
            "at": "l2:tape",
            "color": "muted"
          },
          {
            "id": "g-rule",
            "t": "text",
            "text": "Sống một thớt, chín một thớt",
            "x": 2028,
            "y": 1570,
            "size": 52,
            "at": "l4:raw",
            "color": "accent",
            "hl": [
              {
                "text": "Sống một thớt",
                "at": "l4:raw"
              }
            ]
          },
          {
            "id": "g-wash",
            "t": "text",
            "text": "Rau sống: rửa từng lá, vòi chảy",
            "x": 2028,
            "y": 1670,
            "size": 44,
            "at": "l5:leaf"
          },
          {
            "id": "g-ck",
            "t": "text",
            "text": "Gà, thịt xay: chín tới giữa",
            "x": 2028,
            "y": 1750,
            "size": 44,
            "at": "l6:chicken",
            "hl": [
              {
                "text": "chín tới giữa",
                "at": "l6:through"
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
          "say": "Last year, this sent two regulars home sick. The only uncooked thing: side vegetables.",
          "sub": "Năm ngoái, đúng vậy, hai khách quen đau bụng. Thứ duy nhất không qua lửa: rau ăn kèm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So: two sets of boards and knives. Tiny kitchen? Mark them with colour or tape.",
          "sub": "Nên: hai bộ thớt dao riêng. Bếp nhỏ thì đánh dấu màu, băng keo."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Red board for raw. Green board for cooked food and fresh greens.",
          "sub": "Thớt đỏ đồ sống. Thớt xanh đồ chín, rau sống.",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One board for raw, one board for cooked.",
          "sub": "Sống một thớt, chín một thớt.",
          "keys": [
            "Sống một thớt"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Greens eaten raw? Wash them leaf by leaf, under running water.",
          "sub": "Rau ăn sống: rửa từng lá dưới vòi nước chảy."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Chicken and minced meat: cooked right through. No pink, no red juice.",
          "sub": "Gà, thịt xay: chín tới giữa, hết hồng, hết nước đỏ.",
          "keys": [
            "chín tới giữa"
          ]
        }
      ],
      "ref": "p11,p12,p13,p14"
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
            "at": "l3",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 11:00 · Nồi canh",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sixth stop"
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
                  "id": "hoa",
                  "side": "center",
                  "pose": "think"
                }
              ],
              "props": [
                "pot-of-food",
                "ledger"
              ]
            },
            "at": "l1:pot",
            "caption": "11:00 · bếp quán",
            "icon": "pot-of-food"
          },
          {
            "id": "h-old",
            "t": "text",
            "text": "Trước: một nồi khổng lồ",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l1:giant",
            "color": "muted"
          },
          {
            "id": "h-old2",
            "t": "text",
            "text": "hâm đi hâm lại cả chiều",
            "x": 4026,
            "y": 1320,
            "size": 42,
            "at": "l2:again",
            "color": "coral"
          },
          {
            "id": "h-oldx",
            "t": "strike",
            "over": "h-old",
            "at": "l3:notebook"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: eleven a.m. Cô Hoa used to cook one giant pot of soup, just to be safe.",
          "sub": "Chặng sáu: mười một giờ. Cô Hoa từng nấu một nồi canh khổng lồ cho chắc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Leftovers sat on the stove all afternoon, reheated again and again.",
          "sub": "Đồ dư nằm bếp cả chiều, hâm đi hâm lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Now I check my notebook first.",
          "sub": "Giờ cô xem sổ trước đã.",
          "pose": "think"
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s14",
      "module": "BRK-03",
      "data": {
        "value": 30,
        "suffix": " bát",
        "label": "canh bán buổi trưa, theo sổ",
        "illus": "ledger"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Her notebook says lunch usually sells about...",
          "sub": "Sổ ghi: trưa thường bán khoảng…"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thirty bowls. So the first pot is just that size.",
          "sub": "Ba mươi bát. Đợt đầu nấu chừng ấy.",
          "keys": [
            "Ba mươi bát"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s15",
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
            "id": "h-1",
            "t": "text",
            "text": "1. Sổ: ~30 bát → đợt đầu",
            "x": 3996,
            "y": 1410,
            "size": 46,
            "at": "l1:busier"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "2. Đông: nồi nhỏ, < 20 phút",
            "x": 3996,
            "y": 1480,
            "size": 46,
            "at": "l1:small extra",
            "hl": [
              {
                "text": "< 20 phút",
                "at": "l1:twenty"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "3. Dư: hộp nhỏ, nguội, nhãn, tủ",
            "x": 3996,
            "y": 1550,
            "size": 46,
            "at": "l2:leftovers"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "4. Tối: hâm phần sắp bán",
            "x": 3996,
            "y": 1620,
            "size": 46,
            "at": "l3:evening"
          },
          {
            "id": "h-boil",
            "t": "text",
            "text": "sôi đều",
            "x": 4576,
            "y": 1620,
            "size": 46,
            "at": "l3:boiling",
            "color": "coral"
          },
          {
            "id": "h-rule",
            "t": "text",
            "text": "Vừa đủ bán, dư cất lạnh ngay",
            "x": 3996,
            "y": 1730,
            "size": 50,
            "at": "l4:just enough",
            "color": "accent",
            "hl": [
              {
                "text": "cất lạnh ngay",
                "at": "l4:chill"
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
          "say": "Busier near noon? A small extra pot, ready in under twenty minutes.",
          "sub": "Gần trưa đông? Thêm nồi nhỏ, chưa tới hai mươi phút."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After lunch, leftovers go into small boxes. Cool a little, date label, fridge.",
          "sub": "Hết giờ: múc hộp nhỏ, nguội bớt, dán nhãn, cất tủ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In the evening, reheat only what she'll sell, boiling hot all through.",
          "sub": "Tối: chỉ hâm phần sắp bán, đun sôi đều.",
          "keys": [
            "chỉ hâm phần sắp bán"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Cook just enough to sell. Chill the rest right away.",
          "sub": "Nấu vừa đủ bán, dư thì cất lạnh ngay.",
          "keys": [
            "cất lạnh ngay"
          ]
        }
      ],
      "ref": "p8,p9,p10"
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
            "text": "⑦ 15:00 · Hết đá sạch",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:seventh stop"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "hoa"
                },
                {
                  "id": "binh"
                }
              ],
              "left": {
                "label": "Cách A: đá ướp bia",
                "ok": false
              },
              "right": {
                "label": "Cách B: báo khách chờ",
                "ok": true
              }
            },
            "at": "l1:regular",
            "caption": "15:00 · trước quán",
            "icon": "ice"
          },
          {
            "id": "i-a",
            "t": "text",
            "text": "A: đá thùng ướp bia",
            "x": 5964,
            "y": 1250,
            "size": 50,
            "at": "a1:beer",
            "color": "coral"
          },
          {
            "id": "i-b",
            "t": "text",
            "text": "B: “mười phút nữa có”",
            "x": 5964,
            "y": 1330,
            "size": 50,
            "at": "b1:ten",
            "color": "accent"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Đá uống: thùng riêng, có nắp",
            "x": 5964,
            "y": 1430,
            "size": 44,
            "at": "l3:own"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Xúc muỗng, không bốc tay",
            "x": 5964,
            "y": 1495,
            "size": 44,
            "at": "l3:scoop"
          },
          {
            "id": "i-rule",
            "t": "text",
            "text": "Đá uống ≠ đá ướp",
            "x": 5964,
            "y": 1570,
            "size": 56,
            "at": "l4:never",
            "color": "accent",
            "hl": [
              {
                "text": "≠ đá ướp",
                "at": "l4:chilling"
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
          "say": "Seventh stop: three p.m. Bác Bình, a regular, drops by. The clean ice is gone.",
          "sub": "Chặng bảy: ba giờ chiều. Bác Bình, khách quen, ghé. Mà đá sạch hết rồi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "One iced tea, please!",
          "sub": "Cho bác một trà đá!",
          "pose": "wave"
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "hoa",
          "say": "I'll just use the ice from the beer box.",
          "sub": "Thôi, xúc tạm đá thùng ướp bia.",
          "phase": "a",
          "pose": "give"
        },
        {
          "id": "a2",
          "lang": "en",
          "say": "That ice touched dusty bottles. One photo in the street group, and a month of bad name.",
          "sub": "Đá đã chạm vỏ chai bẩn. Một tấm ảnh lên nhóm khu phố, mang tiếng cả tháng.",
          "phase": "a"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "hoa",
          "say": "Iced tea is out for ten minutes. Some hot tea while you wait?",
          "sub": "Trà đá tạm hết, mười phút nữa có. Bác uống trà nóng nhé?",
          "phase": "b",
          "pose": "explain",
          "react": {
            "binh": "happy"
          }
        },
        {
          "id": "b2",
          "lang": "en",
          "say": "Someone runs to buy clean ice. A few glasses lost, trust kept.",
          "sub": "Người nhà đi mua đá sạch. Mất vài ly, giữ lòng tin.",
          "phase": "b"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Drinking ice: clean, its own lidded box, a scoop, never hands.",
          "sub": "Đá uống: sạch, thùng riêng có nắp, xúc muỗng. Đá ướp: thùng khác."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Drinking ice never shares a box with chilling ice.",
          "sub": "Đá để uống, không chung thùng đá để ướp.",
          "keys": [
            "không chung thùng"
          ]
        }
      ],
      "ref": "p15,p16,p17"
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
            "at": "l1",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
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
            "id": "i-see",
            "t": "text",
            "text": "Khách thấy: đũa, bàn, chai chấm, WC",
            "x": 5964,
            "y": 1670,
            "size": 42,
            "at": "l2:chopsticks"
          },
          {
            "id": "i-cl",
            "t": "text",
            "text": "Khăn bàn ≠ khăn bếp, phơi khô",
            "x": 5964,
            "y": 1750,
            "size": 42,
            "at": "l3:cloth",
            "hl": [
              {
                "text": "phơi khô",
                "at": "l3:dried"
              }
            ]
          },
          {
            "id": "i-trust",
            "t": "text",
            "text": "chỗ thấy sạch → tin chỗ không thấy",
            "x": 6804,
            "y": 1790,
            "size": 38,
            "at": "l2:trusted",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "binh",
          "say": "Clean table, clean chopsticks. Then the kitchen must be clean too.",
          "sub": "Bàn sạch, đũa sạch. Chắc bếp cũng sạch.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Customers see chopsticks, tables, sauce bottles, toilets. Clean there, trusted everywhere.",
          "sub": "Khách thấy đũa, bàn, chai chấm, WC. Chỗ thấy sạch thì tin cả chỗ không thấy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Table cloth, kitchen cloth, separate, dried daily. A damp cloth is a germ hotel.",
          "sub": "Khăn bàn riêng, khăn bếp riêng, giặt phơi khô mỗi ngày. Khăn ẩm là khách sạn vi khuẩn."
        }
      ],
      "ref": "p25,p26"
    },
    {
      "id": "s18",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "20:00 · tin nhắn",
        "actors": [
          {
            "id": "hoa",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Cãi ngay: “Bếp cháu sạch bong!”",
          "why": "Khách thấy bị nghi ngờ, mình mất luôn manh mối để tìm lỗi.",
          "rule": "Bình tĩnh hỏi, ghi lại, đừng cãi"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Eight p.m. A message from Bác Bình: stomach ache since lunch.",
          "sub": "Tám giờ tối. Bác Bình nhắn: đau bụng từ trưa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "My kitchen is spotless! You must have eaten something else!",
          "sub": "Bếp cháu sạch bong! Chắc bác ăn gì khác!",
          "face": "stern",
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
          "say": "Argue first, and you lose the customer and the clue.",
          "sub": "Cãi trước là mất khách, mất luôn manh mối.",
          "keys": [
            "mất luôn manh mối"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Calm, ask, write it down.",
          "sub": "Tua lại! Bình tĩnh, hỏi, ghi lại.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Sorry, Bác. What did you eat, and when? High fever, lots of vomiting? See a doctor soon.",
          "sub": "Cháu xin lỗi. Bác ăn món gì, mấy giờ? Sốt cao, nôn nhiều thì đi khám sớm nhé.",
          "phase": "redo",
          "face": "neutral"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p28"
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
            "at": "l5",
            "fit": [
              "j-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "5:00 sáng hôm sau",
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
              "set": "kitchen",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "point",
                  "face": "happy"
                }
              ],
              "props": [
                "sunrise",
                "kitchen-knife"
              ]
            },
            "at": "l1:same kitchen",
            "caption": "5:00 · sáng hôm sau",
            "icon": "sunrise"
          },
          {
            "id": "j-ck",
            "t": "text",
            "text": "Kiểm lô hàng, tủ, cách làm",
            "x": 7932,
            "y": 1250,
            "size": 44,
            "at": "l2:batch"
          },
          {
            "id": "j-stop",
            "t": "text",
            "text": "Có vấn đề → ngừng bán món",
            "x": 7932,
            "y": 1315,
            "size": 44,
            "at": "l2:stop",
            "color": "coral"
          },
          {
            "id": "j-many",
            "t": "text",
            "text": "Nhiều người bị → báo y tế",
            "x": 7932,
            "y": 1380,
            "size": 44,
            "at": "l3:several",
            "color": "coral",
            "hl": [
              {
                "text": "báo y tế",
                "at": "l3:health"
              }
            ]
          },
          {
            "id": "j-cl",
            "t": "text",
            "text": "Tối qua: rửa thớt, dao, nồi",
            "x": 7932,
            "y": 1470,
            "size": 44,
            "at": "l4:washed"
          },
          {
            "id": "j-bin",
            "t": "text",
            "text": "Rác có nắp, bịt khe cửa",
            "x": 7932,
            "y": 1535,
            "size": 44,
            "at": "l4:bins",
            "hl": [
              {
                "text": "bịt khe cửa",
                "at": "l4:gaps"
              }
            ]
          },
          {
            "id": "j-lab",
            "t": "text",
            "text": "Nhãn mới: “sống” · “chín”",
            "x": 7932,
            "y": 1630,
            "size": 50,
            "at": "l5:labels",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“…thớt nào việc nấy”",
            "x": 7932,
            "y": 1740,
            "size": 54,
            "at": "l6:cooked",
            "color": "accent",
            "hl": [
              {
                "text": "thớt nào việc nấy",
                "at": "l6:board"
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
          "say": "Next morning, five a.m. Same kitchen, same Cô Hoa.",
          "sub": "Sáng hôm sau, năm giờ. Vẫn bếp ấy, cô Hoa ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Last night she checked the batch, fridge and recipe. A problem? Stop selling that dish.",
          "sub": "Tối qua cô kiểm lô hàng, tủ lạnh, cách làm. Có vấn đề thì ngừng bán món đó."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Several people sick after one meal? Call the local health office.",
          "sub": "Nhiều người cùng bị sau một bữa: báo y tế địa phương.",
          "keys": [
            "y tế địa phương"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then she cleaned: boards, knives, pots washed, bins emptied, gaps under the door sealed.",
          "sub": "Rồi dọn: rửa thớt, dao, nồi, đổ rác, bịt khe cửa chặn chuột gián."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "And two new labels: raw, and cooked.",
          "sub": "Và hai cái nhãn mới: sống, chín.",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Eat it cooked, drink it boiled. And in a shop: one board, one job.",
          "sub": "“Ăn chín, uống sôi.” Còn ở quán: thớt nào việc nấy.",
          "keys": [
            "thớt nào việc nấy"
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
      "ref": "p29,p23,p24,outro"
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
            "at": "l1:fridge",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:board",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:money",
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
            "x": 7404,
            "y": 200,
            "at": "l1:fridge"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 2728,
            "y": 1570,
            "at": "l2:board"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 760,
            "y": 1630,
            "at": "l3:money"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Thông tin chung để tham khảo; giấy tờ tuỳ nơi, có thể đổi — hỏi phường, xã. Khách có dấu hiệu nặng: đi khám.",
            "x": 7932,
            "y": 1835,
            "size": 26,
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
          "say": "So: clear sources, and the fridge as a two-storey house.",
          "sub": "Tóm lại: nguồn rõ, tủ lạnh như nhà hai tầng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One board for raw, one for cooked. Drinking ice in its own box.",
          "sub": "Thớt sống riêng, thớt chín riêng. Đá uống thùng riêng.",
          "keys": [
            "thùng riêng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hands on money stay off food. This afternoon, label your two boards.",
          "sub": "Tay cầm tiền không cầm đồ ăn. Chiều nay, dán nhãn hai thớt.",
          "keys": [
            "dán nhãn hai thớt"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s33",
      "module": "QUIZ-01",
      "ref": "questions[7]",
      "data": {
        "q": "What is wrong with keeping raw chicken above a tray of cooked rice?",
        "options": [
          "Nothing is wrong, because cold air stops any germs from moving between foods",
          "Juice from the raw chicken can drip down onto the rice that is eaten directly",
          "The only problem is that the rice may smell a little like chicken"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "poultry-leg",
        "why": "Nước thịt sống nhỏ xuống đồ chín. Đồ chín lên trên, đồ sống xuống dưới."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is wrong with keeping raw chicken above a tray of cooked rice?",
          "sub": "Để thịt gà sống phía trên khay cơm chín có gì sai?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Juice from the raw chicken can drip down onto the rice that is eaten directly.",
          "sub": "Nước thịt gà sống có thể nhỏ xuống cơm, mà cơm thì ăn ngay."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Cold air can't stop drips. Cooked food on top, raw food below, all covered.",
          "sub": "Hơi lạnh không ngăn được nước nhỏ. Đồ chín trên, đồ sống dưới."
        }
      ]
    },
    {
      "id": "s35",
      "module": "END-05",
      "data": {
        "text": "Chiều nay: dán nhãn “sống”, “chín”",
        "sub": "Rồi làm bốn mươi câu bên dưới"
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
    "close": "s19"
  }
};
