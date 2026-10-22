// Kịch bản video W lần 3 (#110) — "Định giá món, sản phẩm sao cho có lãi" · chuỗi "Giữ khách cho cửa hàng nhỏ"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "price-items-for-profit--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "small-shop-owners",
    "slug": "price-items-for-profit",
    "door": "ky-nang",
    "level": "B1",
    "title": "Định giá món, sản phẩm sao cho có lãi",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô theo MỘT THÁNG cô Hoa định giá lại cả quán (cuối tháng đếm tiền không dư → ngày 1 ly chè → ngày 2 cân một bát → ngày 3 chi phí cố định → tuần 2 đặt giá, bảng giá → tuần 3 sổ món, mời món kèm → tuần 4 thịt bò tăng → tháng sau khai trương góc cà phê → cuối tháng sau đếm lại). Nhân vật theo w145/_series/small-shop-owners.md: Cô Hoa (gộp Nga p3, Vân p16, Sơn p22, Hiển p27), Lan (người phụ cân đo p5, em gái phụ pha p27), Bác Bình (khách quen p18, p22); khách mới đọc bảng giá (p13) kể không tên (vai thao); bỏ Sam và Bà Tư của bản cũ (p21 cỡ nhỏ do Đét kể). Tiệm bánh p16 chuyển thành tủ chè; phở p22 thành bún bò (‘bún bò giờ toàn bún’ theo câu ‘phở giờ toàn bánh’). Số liệu chỉ từ ví dụ p3 (15.000, 7.000, 2.000, 1.000, 1.000, 11.000, 5 triệu ÷ 1.500 ly, 3.300, 14.300, 700 đồng), nguồn ghi nhỏ trên bảng. Cảnh ngắt nhịp: BRK-03 s06 (700 đ, p3), BRK-04 s11 (lấy công làm lời, p9), BRK-07 s16 (rehook thịt bò tăng, p19), DLG s19 (giảm nửa giá cả tuần, p27). Khép vòng: ‘Năng nhặt chặt bị’ → ‘năng tính, chặt lãi’; cuối tháng ở bàn nhà cô Hoa mở và khép. Lưu ý chung cuối bài (#133). Câu đố giữ questions[26]. Bản cũ (W lần 3, #110): w145/bak/price-items-for-profit--w01.js.",
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
            "text": "700 đ",
            "x": 60,
            "y": 110,
            "size": 160,
            "at": "l1:seven",
            "color": "accent",
            "hl": [
              {
                "text": "700 đ",
                "at": "l1:hundred"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "lãi một ly chè 15.000 đ",
            "x": 70,
            "y": 330,
            "size": 52,
            "at": "l1:fifteen"
          },
          {
            "id": "a-big",
            "t": "text",
            "text": "Ta tưởng: quán đông là lãi?",
            "x": 70,
            "y": 430,
            "size": 50,
            "at": "l2:busy",
            "color": "muted"
          },
          {
            "id": "a-bigx",
            "t": "strike",
            "over": "a-big",
            "at": "l3:only"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seven hundred dong. That's what one fifteen-thousand cup of sweet soup leaves.",
          "sub": "Bảy trăm đồng: phần lãi của một ly chè mười lăm nghìn.",
          "keys": [
            "Bảy trăm đồng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "We think a busy shop is a profitable shop.",
          "sub": "Ta tưởng quán đông là quán lãi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Busy, yes. Profitable only if the price counts every cost.",
          "sub": "Đông thì có. Lãi chỉ khi giá tính đủ chi phí.",
          "keys": [
            "tính đủ chi phí"
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
                  "id": "hoa",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "notebook",
                "money-bag"
              ]
            },
            "at": "l1",
            "caption": "Cuối tháng · đếm tiền",
            "icon": "money-bag"
          },
          {
            "id": "a-bk",
            "t": "text",
            "text": "cái xô thủng lỗ nhỏ",
            "x": 900,
            "y": 670,
            "size": 46,
            "at": "l4:bucket",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Năng nhặt chặt bị”",
            "x": 70,
            "y": 560,
            "size": 60,
            "at": "l5:crumbs",
            "color": "accent",
            "hl": [
              {
                "text": "Năng nhặt",
                "at": "l5:often"
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
          "say": "Meet Cô Hoa, owner of a busy little eatery.",
          "sub": "Đây là cô Hoa, chủ quán ăn nhỏ đông khách."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Busy from dawn to night, all month. So why is nothing left?",
          "sub": "Bận từ sáng tới tối cả tháng. Sao chẳng dư?",
          "face": "worried",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Usually it's not low sales. The price is missing some costs.",
          "sub": "Thường không phải bán ít, mà giá chưa tính đủ.",
          "keys": [
            "giá chưa tính đủ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Like a bucket with tiny holes. Always filling, never full.",
          "sub": "Như cái xô thủng lỗ nhỏ: đổ mãi không đầy."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Grandma says: pick up crumbs often, and the bag gets full.",
          "sub": "Ông bà dặn: “Năng nhặt chặt bị.”",
          "keys": [
            "Năng nhặt chặt bị"
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
            "text": "Đặt giá sao cho có lãi?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:price",
            "hl": [
              {
                "text": "có lãi",
                "at": "l1:money"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: rẻ hơn quán bên",
            "x": 2028,
            "y": 160,
            "size": 52,
            "at": "l2:cheaper",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:losing"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Giá vốn từng món",
            "x": 2028,
            "y": 260,
            "size": 50,
            "at": "l3:cost"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Chia chi phí cố định",
            "x": 2028,
            "y": 335,
            "size": 50,
            "at": "l3:fixed"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Cộng phần lãi",
            "x": 2868,
            "y": 260,
            "size": 50,
            "at": "l3:profit"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "④ Rồi mới nhìn quanh",
            "x": 2868,
            "y": 335,
            "size": 50,
            "at": "l3:look",
            "color": "accent",
            "hl": [
              {
                "text": "Rồi mới",
                "at": "l3:then"
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
          "say": "So how do you set a price that actually makes money?",
          "sub": "Vậy đặt giá thế nào cho thật sự có lãi?",
          "keys": [
            "có lãi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not by going cheaper than next door. Their rent may be lower, or they're losing too.",
          "sub": "Không phải rẻ hơn quán bên. Có khi họ thuê rẻ, hay chính họ đang lỗ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Four steps: each dish's cost, a share of fixed costs, your profit. Then look around.",
          "sub": "Bốn bước: giá vốn từng món, phần chi phí cố định, phần lãi. Rồi mới nhìn quanh."
        }
      ],
      "ref": "p1,intro"
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
            "id": "b-mo",
            "t": "text",
            "text": "Một tháng định giá lại cả quán",
            "x": 2028,
            "y": 520,
            "size": 50,
            "at": "l1:month",
            "hl": [
              {
                "text": "định giá lại",
                "at": "l1:pricing"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 222,
            "h": 90,
            "at": "l1:pricing+0",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2266,
            "y": 610,
            "w": 222,
            "h": 90,
            "at": "l1:pricing+260",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2504,
            "y": 610,
            "w": 222,
            "h": 90,
            "at": "l1:pricing+520",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2742,
            "y": 610,
            "w": 222,
            "h": 90,
            "at": "l1:pricing+780",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2980,
            "y": 610,
            "w": 222,
            "h": 90,
            "at": "l1:pricing+1040",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3218,
            "y": 610,
            "w": 222,
            "h": 90,
            "at": "l1:pricing+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3456,
            "y": 610,
            "w": 222,
            "h": 90,
            "at": "l1:pricing+1560",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Ngày 1",
            "x": 2048,
            "y": 628,
            "size": 40,
            "at": "l1:pricing+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Ngày 2",
            "x": 2286,
            "y": 628,
            "size": 40,
            "at": "l1:pricing+380"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Ngày 3",
            "x": 2524,
            "y": 628,
            "size": 40,
            "at": "l1:pricing+640"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Tuần 2",
            "x": 2762,
            "y": 628,
            "size": 40,
            "at": "l1:pricing+900"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Tuần 3",
            "x": 3000,
            "y": 628,
            "size": 40,
            "at": "l1:pricing+1160"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Tuần 4",
            "x": 3238,
            "y": 628,
            "size": 40,
            "at": "l1:pricing+1420"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Tháng sau",
            "x": 3476,
            "y": 628,
            "size": 40,
            "at": "l1:pricing+1680"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Cô Hoa through one month of re-pricing her whole shop.",
          "sub": "Theo cô Hoa qua một tháng định giá lại cả quán.",
          "keys": [
            "định giá lại"
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Ngày 1 · Một ly chè",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first stop"
          },
          {
            "id": "c-che",
            "t": "illus",
            "name": "shaved-ice",
            "x": 5436,
            "y": 30,
            "size": 120,
            "at": "l1:sweet"
          },
          {
            "id": "c-0",
            "t": "text",
            "text": "Định bán: 15.000 đ",
            "x": 3996,
            "y": 150,
            "size": 46,
            "at": "l1:fifteen",
            "color": "muted"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Nguyên liệu ≈ 7.000",
            "x": 3996,
            "y": 230,
            "size": 48,
            "at": "l2:ingredients"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Ly, đá, ống hút ≈ 2.000",
            "x": 3996,
            "y": 300,
            "size": 48,
            "at": "l2:cup"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Ga, điện, nước ≈ 1.000",
            "x": 3996,
            "y": 370,
            "size": 48,
            "at": "l3:gas"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Chè đổ đi ≈ 1.000",
            "x": 3996,
            "y": 440,
            "size": 48,
            "at": "l3:poured"
          },
          {
            "id": "c-sum",
            "t": "text",
            "text": "= 11.000 đ",
            "x": 3996,
            "y": 530,
            "size": 60,
            "at": "l3:eleven",
            "color": "accent"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Tiền nhà 5 triệu ÷ 1.500 ly",
            "x": 4836,
            "y": 230,
            "size": 46,
            "at": "l4:rent"
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "+ 3.300 đ / ly",
            "x": 4836,
            "y": 300,
            "size": 52,
            "at": "l4:three thousand"
          },
          {
            "id": "c-tot",
            "t": "text",
            "text": "Giá vốn ≈ 14.300 đ",
            "x": 4836,
            "y": 420,
            "size": 64,
            "at": "l5:total",
            "color": "coral",
            "hl": [
              {
                "text": "14.300 đ",
                "at": "l5:fourteen"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Ví dụ của bài (giả định) · cách tính theo SCORE",
            "x": 4836,
            "y": 720,
            "size": 26,
            "at": "l1:end",
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
          "say": "First stop, day one: sweet soup at fifteen thousand, like the shop opposite.",
          "sub": "Chặng một, ngày đầu. Cô định bán chè mười lăm nghìn, bằng quán đối diện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "First, one cup. Ingredients, about seven thousand. Cup, spoon, ice and straw, two thousand.",
          "sub": "Cộng thử một ly. Nguyên liệu bảy nghìn. Ly, muỗng, đá, ống hút hai nghìn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Gas, power, water, one thousand. Soup poured away at night, one thousand. Eleven thousand.",
          "sub": "Ga, điện, nước một nghìn. Chè đổ cuối ngày một nghìn. Mười một nghìn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Now rent. Say five million a month over fifteen hundred cups: about three thousand three hundred each.",
          "sub": "Tiền nhà: giả sử năm triệu, chia nghìn rưỡi ly, mỗi ly ba nghìn ba."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Total cost: about fourteen thousand three hundred dong.",
          "sub": "Giá vốn khoảng mười bốn nghìn ba.",
          "keys": [
            "mười bốn nghìn ba"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s06",
      "module": "BRK-03",
      "data": {
        "value": 700,
        "suffix": " đ",
        "label": "còn lại mỗi ly, chưa kể tiền công",
        "illus": "shaved-ice"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sell at fifteen thousand, and each cup leaves...",
          "sub": "Bán mười lăm nghìn, mỗi ly còn…"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "About seven hundred dong. Before her own pay.",
          "sub": "Khoảng bảy trăm đồng. Chưa kể tiền công.",
          "keys": [
            "bảy trăm đồng"
          ]
        }
      ],
      "ref": "p3"
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
            "id": "c-fg",
            "t": "text",
            "text": "Hay quên: ly, hộp, túi, ga…",
            "x": 4836,
            "y": 520,
            "size": 46,
            "at": "l1:forgotten",
            "color": "coral"
          },
          {
            "id": "c-rule",
            "t": "text",
            "text": "Tính đủ khoản nhỏ → biết lời lỗ",
            "x": 3996,
            "y": 640,
            "size": 52,
            "at": "l3:count",
            "color": "accent",
            "hl": [
              {
                "text": "biết lời lỗ",
                "at": "l3:profit"
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
          "say": "Forgotten costs are tiny and daily: cups, straws, boxes, bags, ice, gas, spices, soap.",
          "sub": "Hay quên nhất: ly, ống hút, hộp, túi, đá, ga, gia vị, nước rửa chén."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each one is small. A month of them is not.",
          "sub": "Từng thứ thì ít, cả tháng thì nhiều."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Count every small cost, and you'll know if you profit or lose.",
          "sub": "Tính đủ từng khoản nhỏ, mới biết lời hay lỗ.",
          "keys": [
            "lời hay lỗ"
          ]
        }
      ],
      "ref": "p2,p4"
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
            "text": "② Ngày 2 · Cân một bát",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:second stop"
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
                  "id": "lan",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "balance-scale",
                "steaming-bowl"
              ]
            },
            "at": "l1:scale",
            "caption": "Ngày 2 · bếp quán",
            "icon": "balance-scale"
          },
          {
            "id": "d-w",
            "t": "text",
            "text": "Cân: thịt · rau · nước dùng",
            "x": 5964,
            "y": 160,
            "size": 46,
            "at": "l2:weigh"
          },
          {
            "id": "d-r",
            "t": "text",
            "text": "→ số thật, không đoán",
            "x": 5994,
            "y": 235,
            "size": 46,
            "at": "l4:real",
            "color": "accent",
            "hl": [
              {
                "text": "số thật",
                "at": "l4:real"
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
          "say": "Second stop, day two: the scale. Meet Lan, the helper, notebook ready.",
          "sub": "Chặng hai, ngày hai: cái cân. Đây là Lan, cô bé phụ quán, sổ sẵn sàng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "One bowl. Weigh everything: the meat, the greens, the broth.",
          "sub": "Một bát. Cân hết: thịt, rau, nước dùng.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "I'll write down each amount and its price.",
          "sub": "Cháu ghi từng lượng và tiền ạ.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Add them up: the ingredient cost of one portion. A real number, not a guess.",
          "sub": "Cộng lại: giá vốn nguyên liệu một phần. Số thật, không đoán.",
          "keys": [
            "Số thật"
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
            "id": "d-loss",
            "t": "text",
            "text": "+ hao hụt: lá úa, mỡ, đầu cá",
            "x": 5964,
            "y": 320,
            "size": 44,
            "at": "l1:waste",
            "color": "coral",
            "hl": [
              {
                "text": "hao hụt",
                "at": "l1:waste"
              }
            ]
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 420,
            "w": 46,
            "h": 46,
            "at": "l3:main",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 402,
            "size": 58,
            "at": "l3:main+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Nguyên liệu chính",
            "x": 6032,
            "y": 410,
            "size": 40,
            "at": "l3:main+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 484,
            "w": 46,
            "h": 46,
            "at": "l3:greens",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 466,
            "size": 58,
            "at": "l3:greens+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Rau, gia vị, nước chấm",
            "x": 6032,
            "y": 474,
            "size": 40,
            "at": "l3:greens+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 548,
            "w": 46,
            "h": 46,
            "at": "l3:gas",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 530,
            "size": 58,
            "at": "l3:gas+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Ga, điện để nấu",
            "x": 6032,
            "y": 538,
            "size": 40,
            "at": "l3:gas+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 612,
            "w": 46,
            "h": 46,
            "at": "l3:disposables",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 594,
            "size": 58,
            "at": "l3:disposables+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Ly, hộp, túi, đũa",
            "x": 6032,
            "y": 602,
            "size": 40,
            "at": "l3:disposables+200"
          },
          {
            "id": "d-c4",
            "t": "box",
            "x": 5964,
            "y": 676,
            "w": 46,
            "h": 46,
            "at": "l3:waste",
            "stroke": 5
          },
          {
            "id": "d-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 658,
            "size": 58,
            "at": "l3:waste+600",
            "color": "accent"
          },
          {
            "id": "d-l4",
            "t": "text",
            "text": "Hao hụt, đồ ế",
            "x": 6032,
            "y": 666,
            "size": 40,
            "at": "l3:waste+200"
          },
          {
            "id": "d-no",
            "t": "text",
            "text": "chưa gồm tiền nhà, lương",
            "x": 6804,
            "y": 690,
            "size": 44,
            "at": "l4:rent",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Then waste: wilted leaves, trimmed fat, fish heads, unsold food.",
          "sub": "Rồi hao hụt: lá úa, mỡ lọc, đầu cá, đồ ế.",
          "keys": [
            "hao hụt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A kilo of meat, partly trimmed: the usable part costs more than you paid.",
          "sub": "Mua một ký, dùng phần lớn: phần dùng được đắt hơn giá mua."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So one dish's cost: main ingredients, greens and sauces, gas, disposables, and waste.",
          "sub": "Giá vốn một món: nguyên liệu chính, rau, gia vị, ga, đồ dùng một lần, hao hụt."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rent and wages? Not yet.",
          "sub": "Tiền nhà, lương? Chưa."
        }
      ],
      "ref": "p6,p7"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Ngày 3 · Chi phí cố định",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third stop"
          },
          {
            "id": "e-box",
            "t": "box",
            "x": 7932,
            "y": 160,
            "w": 760,
            "h": 230,
            "at": "l1:fixed",
            "stroke": 5
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Mặt bằng · điện nước",
            "x": 7962,
            "y": 185,
            "size": 48,
            "at": "l1:rent"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Lương · sửa chữa",
            "x": 7962,
            "y": 265,
            "size": 48,
            "at": "l1:wages"
          },
          {
            "id": "e-div",
            "t": "text",
            "text": "÷ số phần bán mỗi tháng",
            "x": 7932,
            "y": 420,
            "size": 50,
            "at": "l2:divide"
          },
          {
            "id": "e-eq",
            "t": "text",
            "text": "= phần mỗi bát phải gánh",
            "x": 7932,
            "y": 500,
            "size": 52,
            "at": "l3:carry",
            "color": "accent",
            "hl": [
              {
                "text": "phải gánh",
                "at": "l3:carry"
              }
            ]
          },
          {
            "id": "e-bowl",
            "t": "illus",
            "name": "steaming-bowl",
            "x": 8872,
            "y": 300,
            "size": 160,
            "at": "l3:carry+300"
          },
          {
            "id": "e-me",
            "t": "text",
            "text": "Công của mình?",
            "x": 8772,
            "y": 520,
            "size": 52,
            "at": "l4:own",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop, day three: fixed costs. Rent, power and water, staff wages, repairs.",
          "sub": "Chặng ba, ngày ba: chi phí cố định. Mặt bằng, điện nước, lương, sửa chữa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Add them up, then divide by the portions you usually sell each month.",
          "sub": "Cộng lại, chia cho số phần thường bán mỗi tháng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That's what each bowl must carry on its back.",
          "sub": "Ra phần mỗi bát phải gánh.",
          "keys": [
            "phải gánh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And your own work? Often priced at zero.",
          "sub": "Còn công của mình? Nhiều chủ quán tính bằng không."
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s11",
      "module": "BRK-04",
      "data": {
        "title": "Công của chủ quán",
        "wrong": "“Công mình thì khỏi tính”",
        "right": "Chừa tiền công cho chính mình",
        "wrongIllus": "face-with-spiral-eyes",
        "rightIllus": "money-bag"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your own work is free?",
          "sub": "Công mình thì khỏi tính?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then you burn out with nothing left. Pay yourself.",
          "sub": "Là “lấy công làm lời”, kiệt sức. Chừa tiền công.",
          "keys": [
            "lấy công làm lời"
          ]
        }
      ],
      "ref": "p9"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Tuần 2 · Đặt giá",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:fourth stop"
          },
          {
            "id": "f-l3",
            "t": "box",
            "x": 60,
            "y": 1250,
            "w": 520,
            "h": 80,
            "at": "l1:profit",
            "color": "accent",
            "stroke": 5
          },
          {
            "id": "f-l3t",
            "t": "text",
            "text": "Phần lãi",
            "x": 90,
            "y": 1260,
            "size": 46,
            "at": "l1:profit+200",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "box",
            "x": 60,
            "y": 1340,
            "w": 520,
            "h": 80,
            "at": "l1:fixed",
            "stroke": 5
          },
          {
            "id": "f-l2t",
            "t": "text",
            "text": "Phần chi phí cố định",
            "x": 90,
            "y": 1350,
            "size": 44,
            "at": "l1:fixed+200"
          },
          {
            "id": "f-l1",
            "t": "box",
            "x": 60,
            "y": 1430,
            "w": 520,
            "h": 80,
            "at": "l1:dish",
            "stroke": 5
          },
          {
            "id": "f-l1t",
            "t": "text",
            "text": "Giá vốn món",
            "x": 90,
            "y": 1440,
            "size": 46,
            "at": "l1:dish+200"
          },
          {
            "id": "f-eq",
            "t": "text",
            "text": "= giá bán",
            "x": 620,
            "y": 1350,
            "size": 60,
            "at": "l2:number",
            "color": "accent",
            "hl": [
              {
                "text": "giá bán",
                "at": "l2:first"
              }
            ]
          },
          {
            "id": "f-hi",
            "t": "text",
            "text": "Cao hơn quán bên? Đừng vội hạ",
            "x": 60,
            "y": 1560,
            "size": 44,
            "at": "l3:higher",
            "color": "coral"
          },
          {
            "id": "f-pay",
            "t": "text",
            "text": "Khách trả cho: ngon, đầy, sạch, nhanh",
            "x": 60,
            "y": 1635,
            "size": 42,
            "at": "l4:tastier"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop, week two. A price stacks three layers: dish cost, fixed share, profit.",
          "sub": "Chặng bốn, tuần hai. Giá bán chồng ba tầng: giá vốn, phần cố định, phần lãi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Work out that number first. Then glance around to adjust.",
          "sub": "Tính ra con số đó trước, rồi mới nhìn quanh để chỉnh.",
          "keys": [
            "con số đó trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Higher than next door? Don't rush to cut. What do customers pay for?",
          "sub": "Cao hơn quán bên? Đừng vội hạ. Khách trả tiền cho gì?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Tastier food, fuller bowls, clean cool seats, fast service. People pay for what they see.",
          "sub": "Ngon hơn, đầy đặn hơn, chỗ sạch mát, phục vụ nhanh. Thấy rõ thì trả thêm."
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s13",
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
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1420,
            "w": 640,
            "data": {
              "set": "cafe",
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
                  "pose": "stand"
                }
              ],
              "props": [
                "label",
                "steaming-bowl"
              ]
            },
            "at": "l3:board",
            "caption": "Tuần 2 · bảng giá mới",
            "icon": "label"
          },
          {
            "id": "f-sp",
            "t": "text",
            "text": "Cùng món, cùng lượng",
            "x": 60,
            "y": 1710,
            "size": 50,
            "at": "l1:same",
            "color": "accent",
            "hl": [
              {
                "text": "cùng lượng",
                "at": "l1:amount"
              }
            ]
          },
          {
            "id": "f-sp2",
            "t": "text",
            "text": "muỗng · cân · chén đong",
            "x": 90,
            "y": 1785,
            "size": 42,
            "at": "l1:spoon",
            "color": "muted"
          },
          {
            "id": "f-clr",
            "t": "text",
            "text": "Giá rõ, giá chẵn",
            "x": 900,
            "y": 1250,
            "size": 52,
            "at": "l5:clear",
            "hl": [
              {
                "text": "Giá rõ",
                "at": "l5:clear"
              }
            ]
          },
          {
            "id": "f-clr2",
            "t": "text",
            "text": "không sợ “chặt chém”",
            "x": 900,
            "y": 1325,
            "size": 44,
            "at": "l5:overcharged",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two more habits. Same dish, same amount: use a spoon, a scale or a measuring bowl.",
          "sub": "Thêm hai việc. Cùng món, cùng lượng: muỗng, cân, chén đong.",
          "keys": [
            "cùng lượng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Full one day, half the next? Customers feel cheated, your maths breaks.",
          "sub": "Lúc đầy lúc vơi: khách khó chịu, mình tính sai lãi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And a clear price board. Watch this new customer.",
          "sub": "Và bảng giá rõ ràng. Xem chị khách mới này."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Oh, prices on the board. Good, I'll try this one.",
          "sub": "Ồ, giá ghi rõ. Vậy cho em món này.",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Clear prices: nobody fears being overcharged. Round prices: faster change.",
          "sub": "Giá rõ: không ai sợ bị “chặt chém”. Giá chẵn: thối tiền nhanh."
        }
      ],
      "ref": "p12,p13"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tuần 3 · Món giữ, món bỏ",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "think"
                },
                {
                  "id": "binh",
                  "side": "left"
                }
              ],
              "props": [
                "shaved-ice",
                "custard",
                "egg"
              ]
            },
            "at": "l1:counter",
            "caption": "Tuần 3 · tủ chè",
            "icon": "shaved-ice"
          },
          {
            "id": "g-many",
            "t": "text",
            "text": "Rất nhiều loại chè",
            "x": 2028,
            "y": 1250,
            "size": 50,
            "at": "l1:many"
          },
          {
            "id": "g-out",
            "t": "text",
            "text": "loại hết sớm · loại bỏ đi",
            "x": 2058,
            "y": 1325,
            "size": 44,
            "at": "l2:sell out",
            "color": "coral"
          },
          {
            "id": "g-log",
            "t": "text",
            "text": "Ghi sổ từng loại → giữ loại chạy",
            "x": 2028,
            "y": 1410,
            "size": 44,
            "at": "l3:write",
            "color": "accent"
          },
          {
            "id": "g-slow",
            "t": "text",
            "text": "Món chậm → trữ thêm → hư",
            "x": 2028,
            "y": 1490,
            "size": 44,
            "at": "l5:slow"
          },
          {
            "id": "g-rule",
            "t": "text",
            "text": "Thực đơn gọn, tiền không rơi",
            "x": 2028,
            "y": 1580,
            "size": 50,
            "at": "l6:tidy",
            "color": "accent",
            "hl": [
              {
                "text": "tiền không rơi",
                "at": "l6:slipping"
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
          "say": "Fifth stop, week three. Her sweet soup counter has many kinds, to please everyone.",
          "sub": "Chặng năm, tuần ba. Tủ chè của cô có rất nhiều loại, chiều lòng mọi người."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Some sell out early. Others sit until night, then go in the bin.",
          "sub": "Vài loại hết sớm, mấy loại nằm tủ tới tối rồi bỏ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "From today, I write down how many of each kind I sell.",
          "sub": "Từ nay cô ghi sổ từng loại bán được bao nhiêu.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Soon only the best sellers stay. Much less waste, more money left.",
          "sub": "Rồi chỉ giữ loại bán chạy. Bỏ đi ít hẳn, dư nhiều hơn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Slow dishes need extra stock, which spoils. Short menu: less buying, less waste.",
          "sub": "Món chậm bắt trữ thêm, để lâu thì hư. Thực đơn gọn: nhập ít, ít đổ bỏ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A tidy menu, no money slipping away.",
          "sub": "Thực đơn gọn gàng, tiền không rơi rớt.",
          "keys": [
            "tiền không rơi rớt"
          ]
        }
      ],
      "ref": "p15,p16,p17"
    },
    {
      "id": "s15",
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
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-two",
            "t": "text",
            "text": "Bán chạy ≠ lãi nhiều",
            "x": 2028,
            "y": 1680,
            "size": 50,
            "at": "l1:sellers",
            "hl": [
              {
                "text": "≠ lãi nhiều",
                "at": "l1:earners"
              }
            ]
          },
          {
            "id": "g-egg",
            "t": "text",
            "text": "+ trứng, + trà đá: lãi tăng, giá giữ",
            "x": 2028,
            "y": 1770,
            "size": 42,
            "at": "l5:egg",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Each week, note best sellers and best earners. Not always the same dish.",
          "sub": "Mỗi tuần ghi: món bán chạy, món lãi nhiều. Không hẳn là một.",
          "keys": [
            "món lãi nhiều"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then she knows what to recommend. Like to Bác Bình, a regular.",
          "sub": "Biết vậy mới biết mời món nào. Như với bác Bình, khách quen."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Would you like a fried egg with that, Bác?",
          "sub": "Bác dùng thêm trứng ốp la không ạ?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Why not. And an iced tea.",
          "sub": "Ừ, thêm. Cho bác ly trà đá.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "An egg, an iced tea, a small snack: more profit, same prices.",
          "sub": "Thêm trứng, trà đá, món vặt: lãi tăng, giá giữ nguyên.",
          "keys": [
            "lãi tăng"
          ]
        }
      ],
      "ref": "p14,p18"
    },
    {
      "id": "s16",
      "module": "BRK-07",
      "data": {
        "question": "Giá đã tính đủ. Rồi một sáng, thịt bò tăng giá…",
        "illus": "cut-of-meat"
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
          "say": "Prices are set. Then one morning, beef gets more expensive.",
          "sub": "Giá đã tính đủ. Rồi một sáng, thịt bò tăng giá.",
          "keys": [
            "thịt bò tăng giá"
          ]
        }
      ],
      "ref": "p19"
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
            "at": "a1",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Tuần 4 · Thịt bò tăng",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sixth stop"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4936,
            "y": 1240,
            "w": 640,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "pose": "stand"
                },
                {
                  "id": "binh"
                }
              ],
              "left": {
                "label": "Bớt thịt, giữ giá",
                "ok": false
              },
              "right": {
                "label": "Báo trước, tăng vừa",
                "ok": true
              }
            },
            "at": "l1:two roads",
            "caption": "Tuần 4 · bún bò buổi sáng",
            "icon": "cut-of-meat"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "A: giữ giá, bớt thịt",
            "x": 3996,
            "y": 1250,
            "size": 50,
            "at": "a1:less",
            "color": "coral"
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "→ ảnh lên mạng, khách vắng",
            "x": 4026,
            "y": 1325,
            "size": 42,
            "at": "a3:photo",
            "color": "muted"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: báo trước, tăng vừa",
            "x": 3996,
            "y": 1410,
            "size": 50,
            "at": "b1:rise",
            "color": "accent"
          },
          {
            "id": "h-b2",
            "t": "text",
            "text": "→ phần đông vẫn ăn",
            "x": 4026,
            "y": 1485,
            "size": 42,
            "at": "b2:most"
          },
          {
            "id": "h-rule",
            "t": "text",
            "text": "Tăng giá thì nói thật",
            "x": 3996,
            "y": 1580,
            "size": 56,
            "at": "l2:honestly",
            "color": "accent",
            "hl": [
              {
                "text": "nói thật",
                "at": "l2:honestly"
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
          "say": "Sixth stop, week four. Beef costs more. Two roads.",
          "sub": "Chặng sáu, tuần bốn. Thịt bò tăng, cô Hoa thấy hai ngả."
        },
        {
          "id": "a1",
          "lang": "en",
          "say": "Road A: same price, quietly less beef in each bowl.",
          "sub": "Ngả A: giữ giá, lặng lẽ bớt thịt.",
          "phase": "a"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "binh",
          "say": "Bún bò these days is all noodles!",
          "sub": "Bún bò giờ toàn bún!",
          "phase": "a",
          "face": "stern",
          "pose": "phone"
        },
        {
          "id": "a3",
          "lang": "en",
          "say": "A photo goes online, customers drift away. She loses more than she saved.",
          "sub": "Ảnh lên mạng, khách vắng dần, mất hơn số tiết kiệm.",
          "phase": "a"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "hoa",
          "say": "Beef costs more, so prices rise a little next week. Thank you, Bác!",
          "sub": "Thịt tăng, tuần sau quán xin tăng chút. Cảm ơn bác!",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "say": "A few grumbles, but most keep eating. The bowl is the same.",
          "sub": "Vài người cằn nhằn, phần đông vẫn ăn: bát vẫn như cũ.",
          "phase": "b"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Raise prices honestly. Never shrink portions behind their backs.",
          "sub": "Tăng giá thì nói thật, đừng bớt phần lén lút.",
          "keys": [
            "đừng bớt phần lén lút"
          ]
        }
      ],
      "ref": "p22,p23"
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
            "id": "h-1",
            "t": "text",
            "text": "1. Tính lại giá vốn trước",
            "x": 3996,
            "y": 1660,
            "size": 46,
            "at": "l1:recalculate",
            "hl": [
              {
                "text": "Tính lại giá vốn",
                "at": "l1:recalculate"
              }
            ]
          },
          {
            "id": "h-sign",
            "t": "box",
            "x": 4836,
            "y": 1690,
            "w": 780,
            "h": 160,
            "at": "l3:ingredient",
            "stroke": 4
          },
          {
            "id": "h-s1",
            "t": "text",
            "text": "“Nguyên liệu tăng, tháng sau",
            "x": 4866,
            "y": 1702,
            "size": 40,
            "at": "l3:ingredient+300"
          },
          {
            "id": "h-s2",
            "t": "text",
            "text": "xin chỉnh giá vài món…”",
            "x": 4866,
            "y": 1772,
            "size": 40,
            "at": "l3:prices"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "2. Tăng vừa, báo trước",
            "x": 3996,
            "y": 1730,
            "size": 46,
            "at": "l2:small rise"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "3. Thêm cỡ nhỏ",
            "x": 3996,
            "y": 1800,
            "size": 46,
            "at": "l4:small size",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First, recalculate the cost: how short is each bowl? Don't raise by feeling.",
          "sub": "Trước hết tính lại giá vốn: mỗi bát thiếu bao nhiêu? Đừng tăng theo cảm giác.",
          "keys": [
            "tính lại giá vốn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then a small rise, with an honest sign, days ahead.",
          "sub": "Rồi tăng vừa phải, báo trước bằng tấm bảng nhỏ, lời thật lòng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ingredient costs have risen. Some prices change next month. Thank you for understanding.",
          "sub": "“Nguyên liệu tăng, tháng sau quán xin chỉnh giá vài món. Cảm ơn anh chị.”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Or add a small size, cheaper, while the regular bowl keeps its old portion.",
          "sub": "Hoặc thêm cỡ nhỏ giá thấp, cỡ thường giữ đúng lượng cũ."
        }
      ],
      "ref": "p19,p20,p21"
    },
    {
      "id": "s19",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Tháng sau · khai trương",
        "actors": [
          {
            "id": "hoa",
            "side": "right",
            "pose": "stand"
          },
          {
            "id": "lan",
            "side": "left"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Giảm nửa giá mọi món cả tuần",
          "why": "Đông nghẹt, pha vội, khách chờ lâu. Trả giá cũ thì quán vắng hẳn.",
          "rule": "Giảm giá kéo khách đến, chất lượng giữ khách ở"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Next month, Cô Hoa opens a coffee corner.",
          "sub": "Tháng sau, cô Hoa mở thêm góc cà phê."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Opening week! Everything half price, all week!",
          "sub": "Khai trương! Nửa giá mọi món cả tuần!",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "So many orders! Hurry, rush every drink!",
          "sub": "Đông quá! Nhanh lên, ly nào cũng vội đi!",
          "face": "worried",
          "pose": "point",
          "stop": true
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern",
          "pose": "stop"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Back to normal prices, it goes quiet. They came for cheap, and remember the wait.",
          "sub": "Trả giá cũ, quán vắng hẳn. Khách đến vì rẻ, chỉ nhớ chờ lâu.",
          "keys": [
            "chỉ nhớ chờ lâu"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Rewind! A small gift instead.",
          "sub": "Tua lại! Thay bằng món tặng nhỏ.",
          "phase": "redo"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "hoa",
          "say": "Opening week: a free iced tea with every coffee.",
          "sub": "Tuần khai trương: tặng ly trà đá kèm mỗi ly.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "text": "⑦ Tháng sau · Khuyến mãi",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:seventh stop"
          },
          {
            "id": "i-gift",
            "t": "illus",
            "name": "wrapped-gift",
            "x": 7354,
            "y": 1250,
            "size": 150,
            "at": "l5:gift"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Trước khi giảm, tính:",
            "x": 5964,
            "y": 1250,
            "size": 50,
            "at": "l1:before"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "• mỗi phần còn lãi bao nhiêu?",
            "x": 5994,
            "y": 1325,
            "size": 44,
            "at": "l1:left"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "• phải bán thêm bao nhiêu?",
            "x": 5994,
            "y": 1390,
            "size": 44,
            "at": "l1:extra"
          },
          {
            "id": "i-p",
            "t": "text",
            "text": "đông hơn mà nghèo đi",
            "x": 6804,
            "y": 1390,
            "size": 44,
            "at": "l2:poorer",
            "color": "coral"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Hạn rõ · mục đích rõ",
            "x": 5964,
            "y": 1490,
            "size": 50,
            "at": "l3:end date",
            "hl": [
              {
                "text": "mục đích rõ",
                "at": "l3:purpose"
              }
            ]
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Giảm mãi → giá cũ như tăng",
            "x": 5964,
            "y": 1570,
            "size": 46,
            "at": "l4:forever",
            "color": "coral"
          },
          {
            "id": "i-6",
            "t": "text",
            "text": "Tặng nhỏ: trà đá, tích điểm",
            "x": 5964,
            "y": 1650,
            "size": 46,
            "at": "l5:gift",
            "color": "accent"
          },
          {
            "id": "i-rule",
            "t": "text",
            "text": "Giảm giá kéo, chất lượng giữ",
            "x": 5964,
            "y": 1750,
            "size": 52,
            "at": "l6:quality",
            "color": "accent",
            "hl": [
              {
                "text": "chất lượng giữ",
                "at": "l6:keeps"
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
          "say": "Seventh stop. Before a discount: profit left per cup, and extra sales needed.",
          "sub": "Chặng bảy. Trước khi giảm: mỗi phần còn lãi bao nhiêu, phải bán thêm bao nhiêu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Many discounts make shops busier, and poorer.",
          "sub": "Nhiều đợt giảm giá: quán đông hơn, tiền ít đi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Promotions need an end date and a purpose: new customers, or stock near expiry.",
          "sub": "Khuyến mãi cần hạn rõ, mục đích rõ: mời khách mới thử, bán bớt hàng sắp hết hạn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Discount forever, and the old price feels like a price rise.",
          "sub": "Giảm mãi thì giá cũ thành như tăng giá."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Better a small gift: an iced tea, or loyalty points for regulars.",
          "sub": "Tặng thứ nhỏ: ly trà đá, tích điểm khách quen."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Discounts bring customers in. Quality keeps them.",
          "sub": "Giảm giá kéo khách đến, chất lượng giữ khách ở.",
          "keys": [
            "chất lượng giữ khách ở"
          ]
        }
      ],
      "ref": "p24,p25,p26,p28"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Cuối tháng sau · Đếm lại",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:end"
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
                  "id": "hoa",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "notebook",
                "money-bag"
              ]
            },
            "at": "l1:same table",
            "caption": "Cuối tháng sau · cùng cái bàn ấy",
            "icon": "notebook"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Đủ khoản nhỏ + tiền công",
            "x": 7932,
            "y": 1260,
            "size": 48,
            "at": "l2:counted"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "→ có dư!",
            "x": 7962,
            "y": 1340,
            "size": 60,
            "at": "l2:left",
            "color": "accent"
          },
          {
            "id": "j-g",
            "t": "text",
            "text": "Giá đúng:",
            "x": 7932,
            "y": 1450,
            "size": 52,
            "at": "l3:right price",
            "hl": [
              {
                "text": "Giá đúng",
                "at": "l3:right price"
              }
            ]
          },
          {
            "id": "j-g1",
            "t": "text",
            "text": "trả đủ · nuôi mình · đáng tiền",
            "x": 7962,
            "y": 1530,
            "size": 44,
            "at": "l3:feeds"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Năng tính, chặt lãi”",
            "x": 7932,
            "y": 1670,
            "size": 60,
            "at": "l4:count",
            "color": "accent",
            "hl": [
              {
                "text": "chặt lãi",
                "at": "l4:profit"
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
          "say": "End of the next month. Same table, same notebook.",
          "sub": "Cuối tháng sau. Vẫn bàn ấy, sổ ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Every small cost counted, my own pay too. And something is left!",
          "sub": "Tính đủ khoản nhỏ, cả tiền công. Và có dư!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The right price pays every cost, feeds you, and feels worth it to customers.",
          "sub": "Giá đúng: trả đủ chi phí, nuôi được mình, khách thấy đáng tiền.",
          "keys": [
            "Giá đúng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Pick up crumbs often, the bag gets full. Count costs often, the profit stays.",
          "sub": "“Năng nhặt chặt bị.” Năng tính đủ, chặt phần lãi.",
          "keys": [
            "chặt phần lãi"
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
            "at": "l1:small",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:fixed",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:honestly",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "J",
            "zoom": 0.8
          },
          {
            "at": "l4:end",
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
            "y": 540,
            "at": "l1:small"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 620,
            "y": 1250,
            "at": "l2:fixed"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1580,
            "at": "l3:honestly"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Ví dụ để tham khảo; số liệu trong bài là giả định — hãy tính theo chi phí thật của quán bạn.",
            "x": 7932,
            "y": 1835,
            "size": 26,
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
          "say": "So: count every small cost, even straws and ice.",
          "sub": "Tóm lại: tính đủ khoản nhỏ, cả ống hút, cục đá.",
          "keys": [
            "tính đủ khoản nhỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dish cost, fixed share, profit. Then look next door.",
          "sub": "Giá vốn, phần cố định, phần lãi. Rồi mới nhìn quán bên."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Raise prices honestly, never shrink portions.",
          "sub": "Tăng giá nói thật, không bớt phần."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Tonight, weigh one portion of your best seller, and compare with your price.",
          "sub": "Tối nay: cân một phần món bán chạy nhất, so với giá đang bán.",
          "keys": [
            "cân một phần"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s35",
      "module": "QUIZ-01",
      "ref": "questions[26]",
      "data": {
        "q": "Ingredient prices go up, what should you do first?",
        "options": [
          "Raise every price by a large amount straight away, just to be safe",
          "Wait and see, because prices always come back down within a week",
          "Recalculate the cost of each dish to see how much you are losing"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "abacus",
        "why": "Tính lại giá vốn để biết mỗi phần thiếu bao nhiêu, rồi tăng vừa đủ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Ingredient prices go up, what should you do first?",
          "sub": "Giá nguyên liệu tăng, việc đầu tiên bạn nên làm là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Recalculate the cost of each dish to see how much you are losing.",
          "sub": "Tính lại giá vốn từng món để biết mình đang thiếu bao nhiêu."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Then raise just enough. Big jumps by feeling can drive customers away.",
          "sub": "Rồi tăng vừa đủ. Tăng mạnh theo cảm giác dễ làm khách bỏ đi."
        }
      ]
    },
    {
      "id": "s36",
      "module": "END-05",
      "data": {
        "text": "Tối nay: cân một phần món chạy nhất",
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
    "close": "s21"
  }
};
