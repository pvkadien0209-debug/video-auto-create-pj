// law-landlord-title-check--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "law-landlord-title-check--w01",
  "unit": {
    "audience": "law-commercial-lease",
    "slug": "law-landlord-title-check",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Kiểm tra bên cho thuê có quyền cho thuê không bằng giấy tờ nào?",
    "series": "Thuê văn phòng, nhà xưởng không bị động — hợp đồng thuê dài hạn cho pháp chế bên thuê"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "presenter": {
    "side": "left"
  },
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
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
          },
          {
            "at": 0,
            "fit": [
              "a-q"
            ],
            "zoom": 1.3,
            "ms": 0
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-q",
            "t": "text",
            "text": "“Pháp lý sạch”",
            "x": 60,
            "y": 90,
            "size": 120,
            "at": "l1:Clean",
            "color": "coral",
            "hl": [
              {
                "text": "Pháp lý sạch",
                "at": "l1:status"
              }
            ]
          },
          {
            "id": "a-cam",
            "t": "illus",
            "name": "camera-with-flash",
            "x": 960,
            "y": 100,
            "size": 130,
            "at": "l2:photo"
          },
          {
            "id": "a-ph",
            "t": "text",
            "text": "+ 1 ảnh chụp giấy chứng nhận",
            "x": 70,
            "y": 260,
            "size": 46,
            "at": "l2:certificate"
          },
          {
            "id": "a-ok",
            "t": "text",
            "text": "Thấy giấy là yên tâm?",
            "x": 70,
            "y": 350,
            "size": 50,
            "at": "l4:relax",
            "color": "muted"
          },
          {
            "id": "a-okx",
            "t": "strike",
            "over": "a-ok",
            "at": "l5:proves"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "Không phải 1 ảnh: 1 bộ giấy",
            "x": 70,
            "y": 440,
            "size": 50,
            "at": "l6:set",
            "color": "accent",
            "hl": [
              {
                "text": "1 bộ giấy",
                "at": "l6:set of papers"
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
          "say": "Clean legal status. Three words a landlord loves to send.",
          "sub": "“Pháp lý sạch.” Bốn chữ bên cho thuê rất thích gửi.",
          "keys": [
            "Pháp lý sạch"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "With a draft lease and a certificate photo.",
          "sub": "Kèm bản nháp hợp đồng và ảnh chụp giấy chứng nhận."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But one detail deserves a second look.",
          "sub": "Nhưng có một chi tiết đáng nhìn lại."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Most people see the certificate and relax.",
          "sub": "Phần đông thấy giấy chứng nhận là yên tâm.",
          "keys": [
            "yên tâm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So what really proves the right to lease?",
          "sub": "Vậy thực sự cái gì chứng minh quyền cho thuê?"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Not one photo. A set of papers, attached to the contract.",
          "sub": "Không phải một tấm ảnh, mà là một bộ giấy, gắn vào hợp đồng.",
          "keys": [
            "một bộ giấy"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
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
            "x": 920,
            "y": 130,
            "w": 720,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "camera-with-flash",
                "page-facing-up"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · tin nhắn từ bên cho thuê",
            "icon": "camera-with-flash"
          },
          {
            "id": "a-3q",
            "t": "text",
            "text": "Hỏi gì · đọc gì · viết gì",
            "x": 60,
            "y": 560,
            "size": 46,
            "at": "l5:ask",
            "hl": [
              {
                "text": "viết gì",
                "at": "l5:write"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 920,
            "y": 660,
            "size": 50,
            "at": "l6:care",
            "color": "accent",
            "hl": [
              {
                "text": "Cẩn tắc",
                "at": "l6:care"
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
          "say": "Meet Thảo, in-house counsel, four years in, at a service company.",
          "sub": "Đây là Thảo, pháp chế bốn năm ở một công ty dịch vụ.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Lan, who leases out the office building for its owner.",
          "sub": "Còn đây là Lan, phụ trách cho thuê của toà văn phòng.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Here's the certificate photo. Clean legal status, sign whenever you like!",
          "sub": "Ảnh giấy chứng nhận đây chị. Pháp lý sạch, chị ký lúc nào cũng được!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Thank you. Let me ask a few more questions first.",
          "sub": "Cảm ơn em. Để chị hỏi thêm vài câu đã.",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "This week: what to ask for, what to read, and how to write the warranty.",
          "sub": "Tuần này: xin giấy gì, đọc để thấy gì, và viết cam đoan ra sao.",
          "keys": [
            "viết cam đoan"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Take care first, and you'll have no regrets.",
          "sub": "“Cẩn tắc vô áy náy.”",
          "keys": [
            "Cẩn tắc vô áy náy"
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
          },
          {
            "at": "l3",
            "fit": [
              "b-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "B",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "b-q",
            "t": "text",
            "text": "Có quyền cho thuê không?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:right",
            "hl": [
              {
                "text": "quyền cho thuê",
                "at": "l1:right to lease"
              }
            ]
          },
          {
            "id": "b-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2888,
            "y": 130,
            "w": 720,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "money-bag",
                "page-facing-up"
              ]
            },
            "at": "l2",
            "caption": "Thứ Hai chiều · phòng họp",
            "icon": "money-bag"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Bên cho thuê bảo đảm",
            "x": 2028,
            "y": 170,
            "size": 46,
            "at": "l4:ensure"
          },
          {
            "id": "b-1b",
            "t": "text",
            "text": "dùng ổn định",
            "x": 2068,
            "y": 235,
            "size": 46,
            "at": "l4:stable",
            "color": "accent",
            "hl": [
              {
                "text": "ổn định",
                "at": "l4:stable"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Tranh chấp → chấm dứt + bồi thường",
            "x": 2028,
            "y": 320,
            "size": 40,
            "at": "l5:terminate"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Bộ luật Dân sự 2015 (Điều 478)",
            "x": 2028,
            "y": 700,
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
          "say": "So, which papers show the landlord really has the right to lease?",
          "sub": "Vậy giấy tờ nào cho thấy bên cho thuê thật sự có quyền cho thuê?",
          "keys": [
            "quyền cho thuê"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Same afternoon. Cô Hoa, Thảo's director, wants one thing first.",
          "sub": "Chiều cùng ngày. Cô Hoa, giám đốc của Thảo, chỉ muốn một chuyện trước.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Price first! Papers later.",
          "sub": "Bàn giá trước! Giấy tờ tính sau.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The Civil Code does make the landlord ensure stable use for the tenant.",
          "sub": "Bộ luật Dân sự đúng là buộc bên cho thuê bảo đảm cho bên thuê dùng ổn định.",
          "keys": [
            "dùng ổn định"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "If an ownership dispute breaks that, the tenant may terminate and claim damages.",
          "sub": "Tranh chấp quyền sở hữu làm hỏng điều đó thì bên thuê được chấm dứt và đòi bồi thường."
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
            "id": "b-3",
            "t": "text",
            "text": "Quyền ấy đến SAU chuyện xấu",
            "x": 2028,
            "y": 420,
            "size": 44,
            "at": "l1:after",
            "color": "coral",
            "hl": [
              {
                "text": "SAU",
                "at": "l1:after"
              }
            ]
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "địa chỉ · cải tạo · máy móc",
            "x": 2048,
            "y": 490,
            "size": 38,
            "at": "l2:moved",
            "color": "muted"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: giá trước",
            "x": 2028,
            "y": 560,
            "size": 40,
            "at": "l3:price",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:before"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: ai có quyền trước",
            "x": 2028,
            "y": 625,
            "size": 42,
            "at": "l3:who",
            "color": "accent",
            "hl": [
              {
                "text": "ai có quyền",
                "at": "l3:who"
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
          "say": "Sounds solid. But that right comes after the bad thing happens.",
          "sub": "Nghe chắc. Nhưng quyền đó đến sau khi chuyện xấu đã xảy ra.",
          "keys": [
            "sau khi chuyện xấu đã xảy ra"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "By then you've moved your address, fitted out, brought machines in, and now you sue.",
          "sub": "Lúc ấy công ty đã chuyển địa chỉ, đã cải tạo, đã đưa máy vào, giờ đi kiện đòi tiền."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So, not the price first. But who holds the right, before price, while you've lost nothing.",
          "sub": "Vậy không phải giá trước, mà là ai có quyền trước, khi công ty chưa mất gì.",
          "keys": [
            "ai có quyền trước"
          ]
        }
      ],
      "ref": "p2"
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
            "text": "① Thứ Ba · Điều kiện công trình",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 180,
            "w": 40,
            "h": 40,
            "at": "l2:certificate",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 164,
            "size": 50,
            "at": "l2:certificate+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Giấy chứng nhận / tương đương",
            "x": 4058,
            "y": 170,
            "size": 40,
            "at": "l2:certificate+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 260,
            "w": 40,
            "h": 40,
            "at": "l3:dispute",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 244,
            "size": 50,
            "at": "l3:dispute+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Không tranh chấp đang giải quyết",
            "x": 4058,
            "y": 250,
            "size": 40,
            "at": "l3:dispute+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 340,
            "w": 40,
            "h": 40,
            "at": "l4:seized",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 324,
            "size": 50,
            "at": "l4:seized+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Không bị kê biên",
            "x": 4058,
            "y": 330,
            "size": 40,
            "at": "l4:seized+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 420,
            "w": 40,
            "h": 40,
            "at": "l4:suspended",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 404,
            "size": 50,
            "at": "l4:suspended+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Không bị cấm, bị đình chỉ",
            "x": 4058,
            "y": 410,
            "size": 40,
            "at": "l4:suspended+200"
          },
          {
            "id": "c-c4",
            "t": "box",
            "x": 3996,
            "y": 500,
            "w": 40,
            "h": 40,
            "at": "l5:public",
            "stroke": 5
          },
          {
            "id": "c-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 484,
            "size": 50,
            "at": "l5:public+600",
            "color": "accent"
          },
          {
            "id": "c-l4",
            "t": "text",
            "text": "Đã công khai thông tin",
            "x": 4058,
            "y": 490,
            "size": 40,
            "at": "l5:public+200"
          },
          {
            "id": "c-j",
            "t": "text",
            "text": "Từng tranh chấp → án có hiệu lực",
            "x": 4896,
            "y": 260,
            "size": 36,
            "at": "l3:judgment",
            "hl": [
              {
                "text": "có hiệu lực",
                "at": "l3:effect"
              }
            ]
          },
          {
            "id": "c-ca",
            "t": "text",
            "text": "Năm cửa, đi đủ năm",
            "x": 4896,
            "y": 420,
            "size": 52,
            "at": "l5:five",
            "color": "accent",
            "hl": [
              {
                "text": "đủ năm",
                "at": "l5:all five"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật, phân tích Điều 14 Luật Kinh doanh bất động sản 2023",
            "x": 3996,
            "y": 700,
            "size": 26,
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
          "say": "First stop: Tuesday. Which conditions must a building meet to be leased?",
          "sub": "Chặng một: thứ Ba. Công trình đưa vào cho thuê phải đủ điều kiện gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Per Article 14 of the 2023 law: a certificate, or equivalent papers.",
          "sub": "Theo Điều 14 Luật Kinh doanh bất động sản 2023: có giấy chứng nhận, hoặc giấy tờ tương đương.",
          "keys": [
            "giấy chứng nhận"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No dispute being heard. An old dispute? Settled by a judgment or award that took effect.",
          "sub": "Không có tranh chấp đang giải quyết. Từng có thì phải xong bằng bản án, quyết định, phán quyết có hiệu lực.",
          "keys": [
            "có hiệu lực"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not seized for enforcement, not banned from trading, not suspended.",
          "sub": "Không bị kê biên để thi hành án, không bị cấm giao dịch, không bị đình chỉ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And information made public. Five doors, and you walk through all five.",
          "sub": "Và đã công khai thông tin. Năm cánh cửa, phải đi qua đủ năm.",
          "keys": [
            "đủ năm"
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
            "text": "② Thứ Ba chiều · Toà trong dự án",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:project"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 130,
            "w": 720,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "office-building",
                "building-construction"
              ]
            },
            "at": "l1",
            "caption": "Thứ Ba chiều · trước toà nhà",
            "icon": "office-building"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Dự án → điều kiện dày hơn",
            "x": 5964,
            "y": 170,
            "size": 44,
            "at": "l3:thicker",
            "color": "coral",
            "hl": [
              {
                "text": "dày hơn",
                "at": "l3:thicker"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "• nghiệm thu, đưa vào sử dụng",
            "x": 5984,
            "y": 250,
            "size": 38,
            "at": "l3:accepted"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "• xong nghĩa vụ tài chính đất",
            "x": 5984,
            "y": 310,
            "size": 38,
            "at": "l4:financial"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "• giấy chứng nhận phần đất",
            "x": 5984,
            "y": 370,
            "size": 38,
            "at": "l4:land under"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Same afternoon, Thảo visits the building. It sits inside a real estate project.",
          "sub": "Chiều thứ Ba, Thảo đến xem toà nhà. Toà nằm trong một dự án bất động sản."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Brand new, opened last month. The certificate is right here!",
          "sub": "Toà mới tinh chị ạ. Giấy chứng nhận đây rồi!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In a project, the conditions get thicker: papers showing the works were accepted and put into use.",
          "sub": "Trong dự án, điều kiện dày hơn: có giấy tờ nghiệm thu công trình đưa vào khai thác, sử dụng.",
          "keys": [
            "nghiệm thu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The developer finished its land financial duties, and holds a certificate for the land under the building.",
          "sub": "Chủ đầu tư đã xong nghĩa vụ tài chính về đất, và có giấy chứng nhận cho phần đất gắn với công trình."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "street",
        "label": "Thứ Ba · trước toà nhà",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "lan",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Thấy giấy chứng nhận là yên tâm",
          "why": "Toà có giấy vẫn có thể đang bị kê biên, có tranh chấp, hay chưa nghiệm thu.",
          "rule": "Giấy chứng nhận chỉ là điều kiện đầu tiên"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "A certificate, with the owner's name. Good, that settles it!",
          "sub": "Giấy chứng nhận, đúng tên chủ. Ổn rồi, xong!",
          "pose": "hold",
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
          "say": "Fast forward: the building is seized for a judgment. Your new sign hangs on a frozen asset.",
          "sub": "Tua nhanh: toà nhà bị kê biên thi hành án. Biển công ty mới treo trên một tài sản bị phong toả.",
          "keys": [
            "bị kê biên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "The certificate says who owns it. Now, may it be leased right now?",
          "sub": "Giấy chứng nhận cho biết ai là chủ. Còn giờ có được cho thuê không?",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "lan",
          "say": "Fair question. I'll send the other papers too.",
          "sub": "Hỏi vậy là phải. Em gửi thêm các giấy kia.",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "id": "d-who",
            "t": "text",
            "text": "Giấy chứng nhận → ai là chủ",
            "x": 5964,
            "y": 480,
            "size": 42,
            "at": "l1:who"
          },
          {
            "id": "d-now",
            "t": "text",
            "text": "Giấy khác → được thuê ngay?",
            "x": 5964,
            "y": 550,
            "size": 42,
            "at": "l1:right now",
            "color": "accent",
            "hl": [
              {
                "text": "ngay",
                "at": "l1:now"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Giấy là vé vào cổng",
            "x": 6824,
            "y": 660,
            "size": 44,
            "at": "l2:ticket",
            "color": "accent",
            "hl": [
              {
                "text": "vé vào cổng",
                "at": "l2:ticket"
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
          "say": "The certificate answers who owns it. The other papers answer: may it be leased right now?",
          "sub": "Giấy chứng nhận trả lời “ai là chủ”; các giấy khác mới trả lời “có được cho thuê ngay bây giờ không”.",
          "keys": [
            "ai là chủ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A certificate is the ticket at the gate, not the seat.",
          "sub": "Giấy chứng nhận là vé vào cổng, chưa phải chỗ ngồi.",
          "keys": [
            "vé vào cổng"
          ]
        }
      ],
      "ref": "p7"
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
            "at": "l3",
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
            "text": "③ Thứ Tư · Đất trả tiền hằng năm",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 130,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "hot-beverage",
                "factory"
              ]
            },
            "at": "l2",
            "caption": "Thứ Tư · cà phê với Bác Bình",
            "icon": "hot-beverage"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Được: cho thuê tài sản trên đất",
            "x": 7932,
            "y": 170,
            "size": 40,
            "at": "l4:assets",
            "color": "accent"
          },
          {
            "id": "e-1b",
            "t": "text",
            "text": "+ quyền thuê trong hợp đồng",
            "x": 7972,
            "y": 235,
            "size": 38,
            "at": "l4:lease rights"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Thế chấp, bán kèm quyền thuê",
            "x": 7932,
            "y": 310,
            "size": 40,
            "at": "l5:mortgage"
          },
          {
            "id": "e-2b",
            "t": "text",
            "text": "người mua thuê tiếp phần còn lại",
            "x": 7972,
            "y": 375,
            "size": 34,
            "at": "l5:remaining",
            "color": "muted"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật, phân tích Điều 34 Luật Đất đai 2024",
            "x": 7932,
            "y": 700,
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
          "say": "Third stop: Wednesday. Cô Hoa also wants a small warehouse on rented state land.",
          "sub": "Chặng ba: thứ Tư. Cô Hoa muốn thuê thêm một kho nhỏ, trên đất thuê của Nhà nước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So Thảo meets Uncle Bình, a lawyer for decades, and her old teacher.",
          "sub": "Thảo hẹn Bác Bình, luật sư mấy chục năm, thầy cũ của cô.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Slowly. First ask how the owner pays for the land.",
          "sub": "Từ từ. Hỏi trước chủ kho trả tiền thuê đất kiểu gì đã.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Paying yearly? Under the Land Law 2024, they may lease out their own assets on the land, and their lease rights.",
          "sub": "Trả tiền hằng năm? Theo Luật Đất đai 2024, họ được cho thuê tài sản của mình gắn liền với đất và quyền thuê.",
          "keys": [
            "cho thuê tài sản"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "They may mortgage them, or sell them with the lease; the buyer keeps the remaining term.",
          "sub": "Được thế chấp, được bán kèm quyền thuê; người mua thuê tiếp thời hạn còn lại."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p8"
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
          }
        ],
        "items": [
          {
            "id": "e-3",
            "t": "text",
            "text": "Thuê lại đất: khu có hạ tầng",
            "x": 7932,
            "y": 450,
            "size": 38,
            "at": "l1:infrastructure",
            "color": "coral",
            "hl": [
              {
                "text": "khu có hạ tầng",
                "at": "l1:only"
              }
            ]
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Ngoài khu: thuê xưởng, kho",
            "x": 7932,
            "y": 515,
            "size": 40,
            "at": "l2:Outside"
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "Gọi đúng tên đối tượng thuê",
            "x": 7932,
            "y": 580,
            "size": 40,
            "at": "l2:name",
            "color": "accent",
            "hl": [
              {
                "text": "đúng tên",
                "at": "l2:right name"
              }
            ]
          },
          {
            "id": "e-6",
            "t": "text",
            "text": "Sự nghiệp công: không bán, thế chấp",
            "x": 8792,
            "y": 620,
            "size": 34,
            "at": "l3:public service"
          },
          {
            "id": "e-7",
            "t": "text",
            "text": "→ xin đề án đã duyệt",
            "x": 8792,
            "y": 680,
            "size": 40,
            "at": "l4:approved",
            "color": "accent",
            "hl": [
              {
                "text": "đề án đã duyệt",
                "at": "l4:approved plan"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "binh",
          "say": "Subleasing the land itself? Only with built infrastructure, in industrial or high tech parks.",
          "sub": "Cho thuê lại chính đất? Chỉ đất đã xong hạ tầng trong khu, cụm công nghiệp, khu công nghệ cao.",
          "keys": [
            "Chỉ đất đã xong hạ tầng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Outside those, you lease the factory, warehouse or office, not the land. Call the thing by its right name.",
          "sub": "Ngoài các khu đó, thứ bạn thuê là xưởng, kho, văn phòng, không phải đất. Gọi đúng tên đối tượng thuê.",
          "keys": [
            "Gọi đúng tên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Did you know? A public service unit may lease its assets, but not sell or mortgage them.",
          "sub": "Bạn có biết: đơn vị sự nghiệp công lập được cho thuê tài sản, nhưng không được bán, thế chấp, góp vốn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Its leasing needs an approved plan for using public assets. So ask for that approved plan.",
          "sub": "Việc cho thuê cần đề án sử dụng tài sản công được duyệt. Gặp họ, hãy xin bản đề án đã duyệt.",
          "keys": [
            "đề án đã duyệt"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "How it holds the land, and what it is. That decides how far it may lease.",
          "sub": "Thuê đất kiểu gì, là loại tổ chức gì: hai câu ấy quyết định họ được cho thuê đến đâu.",
          "pose": "explain"
        }
      ],
      "ref": "p9,p10,p11"
    },
    {
      "id": "s10",
      "module": "BRK-07",
      "data": {
        "question": "Toà nhà đang vay ngân hàng: ký hay không?",
        "illus": "bank"
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
          "say": "What if the building is mortgaged to a bank?",
          "sub": "Nếu toà nhà đang thế chấp ngân hàng thì sao?",
          "keys": [
            "thế chấp ngân hàng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p12,p14"
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
            "text": "④ Thứ Năm · Đang thế chấp?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone",
                  "face": "thinking"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "shrug",
                  "face": "happy"
                }
              ],
              "props": [
                "bank",
                "envelope"
              ]
            },
            "at": "l1",
            "caption": "Thứ Năm · Thảo gọi Lan",
            "icon": "bank"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Được thế chấp khi đang cho thuê",
            "x": 60,
            "y": 1260,
            "size": 40,
            "at": "l3:mortgaged"
          },
          {
            "id": "f-1b",
            "t": "text",
            "text": "nhưng phải báo bên nhận thế chấp",
            "x": 100,
            "y": 1325,
            "size": 36,
            "at": "l3:informed",
            "color": "accent",
            "hl": [
              {
                "text": "phải báo",
                "at": "l3:must be informed"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Bị xử lý → thuê đến hết hạn",
            "x": 60,
            "y": 1400,
            "size": 40,
            "at": "l4:continues"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Không báo → có thể chấm dứt",
            "x": 60,
            "y": 1470,
            "size": 40,
            "at": "l5:not informed",
            "color": "coral",
            "hl": [
              {
                "text": "có thể chấm dứt",
                "at": "l5:end"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật, dẫn Điều 34 Nghị định 21/2021/NĐ-CP; Luật Nhà ở 2023 (khoản 2 Điều 182)",
            "x": 60,
            "y": 1790,
            "size": 26,
            "at": "l3",
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
          "say": "Fourth stop: Thursday. Thảo asks Lan about a mortgage.",
          "sub": "Chặng bốn: thứ Năm. Thảo hỏi Lan chuyện thế chấp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "The building has a bank loan, but it changes nothing for you!",
          "sub": "Toà nhà có vay ngân hàng, nhưng không ảnh hưởng gì đâu chị!",
          "face": "happy",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Per Decree twenty one of 2021, a leased asset may be mortgaged, but the mortgagee must be informed.",
          "sub": "Theo Nghị định 21/2021, vẫn được thế chấp tài sản đang cho thuê, nhưng phải báo bên nhận thế chấp.",
          "keys": [
            "phải báo bên nhận thế chấp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "If the asset is enforced, the tenant continues until the lease ends.",
          "sub": "Khi tài sản bị xử lý để trả nợ, bên thuê được thuê tiếp đến hết hạn hợp đồng.",
          "keys": [
            "thuê tiếp đến hết hạn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The catch: if the mortgagee was not informed, the lease may end on enforcement.",
          "sub": "Ngoại lệ: bên nhận thế chấp không được báo thì hợp đồng thuê có thể chấm dứt khi xử lý tài sản."
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s12",
      "module": "BRK-09",
      "data": {
        "kind": "Nguồn",
        "title": "Luật Nhà ở 2023, khoản 2 Điều 182",
        "detail": "Nhà ở bị xử lý: bên thuê thuê tiếp đến hết hạn",
        "illus": "house",
        "icon": "scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Housing Law 2023: same idea for homes.",
          "sub": "Luật Nhà ở 2023: cùng hướng với nhà ở.",
          "keys": [
            "Luật Nhà ở 2023"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Compare, but still check the mortgage file.",
          "sub": "Để đối chiếu, vẫn phải kiểm hồ sơ thế chấp."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p13"
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
            "at": "l1",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-4",
            "t": "text",
            "text": "Xin: văn bản đã báo ngân hàng",
            "x": 60,
            "y": 1560,
            "size": 40,
            "at": "l2:proof",
            "color": "accent",
            "hl": [
              {
                "text": "đã báo ngân hàng",
                "at": "l2:informed"
              }
            ]
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "Tốt nhất: ngân hàng xác nhận",
            "x": 80,
            "y": 1625,
            "size": 38,
            "at": "l2:confirms"
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "+ cam đoan, sai → chấm dứt, hoàn tiền",
            "x": 60,
            "y": 1690,
            "size": 36,
            "at": "l3:warranty"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Rủi ro: không chứng minh đã báo",
            "x": 920,
            "y": 1750,
            "size": 36,
            "at": "l4:prove",
            "color": "coral",
            "hl": [
              {
                "text": "không chứng minh",
                "at": "l4:prove"
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
          "say": "Then please send proof the bank knows about our lease.",
          "sub": "Vậy em gửi chị giấy cho thấy ngân hàng đã biết về hợp đồng thuê nhé.",
          "pose": "phone"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Right: written proof the mortgagee was informed. Best of all, the bank confirms it knows the lease.",
          "sub": "Đúng: văn bản cho thấy bên nhận thế chấp đã được báo, tốt nhất là ngân hàng xác nhận biết hợp đồng thuê.",
          "keys": [
            "ngân hàng xác nhận"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In the lease, a warranty that notice was given, with termination and a refund if it's false.",
          "sub": "Trong hợp đồng: câu cam đoan đã thông báo, kèm quyền chấm dứt và hoàn tiền nếu sai."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A mortgage alone isn't a reason to walk away. Failing to prove the bank was told is the real risk.",
          "sub": "“Có thế chấp” chưa phải lý do bỏ mặt bằng; “không chứng minh được đã báo ngân hàng” mới là rủi ro.",
          "keys": [
            "mới là rủi ro"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "text": "⑤ Thứ Sáu · Người thuê lại",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2888,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "explain",
                  "face": "neutral"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think",
                  "face": "surprised"
                }
              ],
              "props": [
                "office-building",
                "page-facing-up"
              ]
            },
            "at": "l1",
            "caption": "Thứ Sáu · gặp Lan",
            "icon": "office-building"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Thuê lại: chủ sở hữu đồng ý",
            "x": 2028,
            "y": 1260,
            "size": 42,
            "at": "l4:sublet",
            "color": "accent",
            "hl": [
              {
                "text": "đồng ý",
                "at": "l4:consents"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "→ văn bản đồng ý",
            "x": 2068,
            "y": 1330,
            "size": 40,
            "at": "l5:written"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "→ thời hạn hợp đồng gốc",
            "x": 2068,
            "y": 1395,
            "size": 40,
            "at": "l5:head lease",
            "hl": [
              {
                "text": "hợp đồng gốc",
                "at": "l5:head lease"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Bộ luật Dân sự 2015 (Điều 475)",
            "x": 2028,
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
          "say": "Fifth stop: Friday. Lan drops a small surprise.",
          "sub": "Chặng năm: thứ Sáu. Lan buông một bất ngờ nhỏ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Actually, my company leases the whole building, then sublets the floors.",
          "sub": "Thật ra công ty em thuê cả toà, rồi chia sàn cho thuê lại.",
          "face": "neutral",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "So you're not the owner. Then I need two more papers.",
          "sub": "Vậy em không phải chủ. Chị cần thêm hai loại giấy.",
          "face": "surprised",
          "pose": "think"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article 475 of the Civil Code: a tenant may sublet if the lessor consents.",
          "sub": "Điều 475 Bộ luật Dân sự: bên thuê được cho thuê lại nếu bên cho thuê đồng ý.",
          "keys": [
            "Điều 475"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So first, the owner's written consent. Then the head lease term. Nobody gives more than they hold.",
          "sub": "Vậy trước hết xem văn bản đồng ý của chủ sở hữu, rồi thời hạn hợp đồng gốc. Không ai trao được nhiều hơn mình có.",
          "keys": [
            "Không ai trao được nhiều hơn mình có"
          ]
        }
      ],
      "ref": "p16,p17"
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
          }
        ],
        "items": [
          {
            "id": "g-4",
            "t": "text",
            "text": "Gốc chấm dứt sớm?",
            "x": 2028,
            "y": 1510,
            "size": 46,
            "at": "l1:early",
            "color": "coral"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "→ ký thẳng với chủ, cùng điều kiện",
            "x": 2068,
            "y": 1585,
            "size": 38,
            "at": "l1:directly",
            "color": "accent",
            "hl": [
              {
                "text": "ký thẳng với chủ",
                "at": "l1:directly"
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
          "say": "And if the head lease ends early? Write an exit now: the right to sign directly with the owner, same terms.",
          "sub": "Hợp đồng gốc chấm dứt sớm thì sao? Viết sẵn lối thoát: quyền ký thẳng với chủ sở hữu theo cùng điều kiện.",
          "keys": [
            "ký thẳng với chủ sở hữu"
          ]
        }
      ],
      "ref": "p17"
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
            "text": "⑥ Thứ Sáu tối · Điều cam đoan",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:warranty"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "Trước: “có đầy đủ quyền cho thuê”",
            "x": 3996,
            "y": 1260,
            "size": 40,
            "at": "l2:full rights",
            "color": "muted"
          },
          {
            "id": "h-bx",
            "t": "strike",
            "over": "h-b",
            "at": "l2:end"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "Sau: cam đoan từng điểm",
            "x": 3996,
            "y": 1340,
            "size": 46,
            "at": "l3:point",
            "color": "accent",
            "hl": [
              {
                "text": "từng điểm",
                "at": "l3:point by point"
              }
            ]
          },
          {
            "id": "h-a1",
            "t": "text",
            "text": "(a) chủ sở hữu / được đồng ý",
            "x": 4026,
            "y": 1410,
            "size": 38,
            "at": "l3:owner"
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "(b) không tranh chấp, kê biên",
            "x": 4026,
            "y": 1470,
            "size": 38,
            "at": "l4:dispute"
          },
          {
            "id": "h-a3",
            "t": "text",
            "text": "(c) đã báo bên nhận thế chấp",
            "x": 4026,
            "y": 1530,
            "size": 38,
            "at": "l4:mortgagee"
          },
          {
            "id": "h-a4",
            "t": "text",
            "text": "Giấy tờ → Phụ lục",
            "x": 3996,
            "y": 1610,
            "size": 44,
            "at": "l5:appendix",
            "hl": [
              {
                "text": "Phụ lục",
                "at": "l5:appendix"
              }
            ]
          },
          {
            "id": "h-a5",
            "t": "text",
            "text": "Sai → chấm dứt, hoàn cọc, bồi thường",
            "x": 4856,
            "y": 1260,
            "size": 36,
            "at": "l6:false",
            "color": "coral"
          },
          {
            "id": "h-a6",
            "t": "text",
            "text": "phần cải tạo chưa khấu hao",
            "x": 4896,
            "y": 1320,
            "size": 34,
            "at": "l6:fitout",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday night, Thảo rewrites the warranty clause.",
          "sub": "Tối thứ Sáu, Thảo viết lại điều cam đoan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before: the landlord promises it has full rights to lease. Pretty words, hard to enforce.",
          "sub": "Trước: “Bên A cam kết có đầy đủ quyền cho thuê.” Lời đẹp, khó đòi.",
          "keys": [
            "khó đòi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "After: point by point. One, it owns the space, or the owner consented in writing.",
          "sub": "Sau: cam đoan từng điểm. Một, là chủ sở hữu, hoặc được chủ đồng ý cho thuê lại bằng văn bản.",
          "keys": [
            "từng điểm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two, no dispute, seizure or suspension. Three, any mortgagee told in writing.",
          "sub": "Hai, không tranh chấp, kê biên, đình chỉ. Ba, bên nhận thế chấp đã được báo bằng văn bản."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Copies of each paper go into an appendix before signing.",
          "sub": "Bản sao từng giấy nằm trong phụ lục, giao trước ngày ký.",
          "keys": [
            "phụ lục"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "False? Terminate, get deposit and prepaid rent back, plus unamortised fitout.",
          "sub": "Cam đoan sai: chấm dứt, hoàn cọc, tiền thuê trả trước, bồi thường cải tạo chưa khấu hao."
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s17",
      "module": "BRK-04",
      "data": {
        "title": "Điều cam đoan",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Cam kết chung: có đầy đủ quyền cho thuê",
        "right": "Từng điểm, kèm giấy tờ và hậu quả",
        "wrongIllus": "speech-balloon",
        "rightIllus": "clipboard"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A vague warranty is hard to claim on.",
          "sub": "Cam đoan chung chung thì khó đòi.",
          "keys": [
            "khó đòi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Points, papers, consequences. That one works.",
          "sub": "Từng điểm, có giấy, có hậu quả: mới dùng được.",
          "keys": [
            "mới dùng được"
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
            "text": "Thứ Bảy · Danh sách năm giấy",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "envelope",
                "clipboard"
              ]
            },
            "at": "l1",
            "caption": "Thứ Bảy · gửi danh sách cho Lan",
            "icon": "envelope"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1270,
            "w": 40,
            "h": 40,
            "at": "l2:certificate",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1254,
            "size": 50,
            "at": "l2:certificate+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Giấy chứng nhận / tương đương",
            "x": 6026,
            "y": 1260,
            "size": 36,
            "at": "l2:certificate+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1346,
            "w": 40,
            "h": 40,
            "at": "l2:acceptance",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1330,
            "size": 50,
            "at": "l2:acceptance+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Nghiệm thu, nếu trong dự án",
            "x": 6026,
            "y": 1336,
            "size": 36,
            "at": "l2:acceptance+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1422,
            "w": 40,
            "h": 40,
            "at": "l3:dispute",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1406,
            "size": 50,
            "at": "l3:dispute+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Không tranh chấp, kê biên; công khai",
            "x": 6026,
            "y": 1412,
            "size": 36,
            "at": "l3:dispute+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1498,
            "w": 40,
            "h": 40,
            "at": "l3:mortgage",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1482,
            "size": 50,
            "at": "l3:mortgage+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Thế chấp + văn bản đã báo",
            "x": 6026,
            "y": 1488,
            "size": 36,
            "at": "l3:mortgage+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1574,
            "w": 40,
            "h": 40,
            "at": "l4:sublease",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1558,
            "size": 50,
            "at": "l4:sublease+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Thuê lại: HĐ gốc + đồng ý",
            "x": 6026,
            "y": 1564,
            "size": 36,
            "at": "l4:sublease+200"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Mỗi giấy → phụ lục",
            "x": 5964,
            "y": 1670,
            "size": 46,
            "at": "l5:appendix",
            "color": "accent",
            "hl": [
              {
                "text": "phụ lục",
                "at": "l5:appendix"
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
          "say": "Saturday. Thảo sends Lan a list of five papers.",
          "sub": "Thứ Bảy. Thảo gửi Lan danh sách năm loại giấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One, the certificate or equivalent. Two, acceptance papers, if it's in a project.",
          "sub": "Một, giấy chứng nhận hoặc tương đương. Hai, giấy nghiệm thu nếu thuộc dự án.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Three, no dispute, no seizure, and public information. Four, mortgage details and the notice to the bank.",
          "sub": "Ba, xác nhận không tranh chấp, không kê biên, kèm thông tin đã công khai. Bốn, thông tin thế chấp và văn bản đã báo."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Five, for a sublease: the head lease and the owner's consent.",
          "sub": "Năm, nếu cho thuê lại: hợp đồng gốc và văn bản đồng ý của chủ sở hữu.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And each paper is listed in an appendix to the lease.",
          "sub": "Mỗi giấy được ghi vào phụ lục hợp đồng.",
          "keys": [
            "phụ lục hợp đồng"
          ]
        }
      ],
      "ref": "p20"
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
            "at": "l2",
            "fit": [
              "i-v2"
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
            "id": "i-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1610,
            "w": 420,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "give",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "handshake"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai sau · buổi đàm phán",
            "icon": "handshake"
          },
          {
            "id": "i-ph",
            "t": "text",
            "text": "Ảnh chụp qua tin nhắn",
            "x": 5964,
            "y": 1740,
            "size": 38,
            "at": "l3:photos",
            "color": "muted"
          },
          {
            "id": "i-phx",
            "t": "strike",
            "over": "i-ph",
            "at": "l3:protect"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Pháp lý sạch” — có giấy",
            "x": 5964,
            "y": 1795,
            "size": 40,
            "at": "l4:Clean",
            "color": "accent",
            "hl": [
              {
                "text": "có giấy",
                "at": "l4:papers"
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
          "say": "Next Monday. The negotiation. Same Lan, same smile.",
          "sub": "Thứ Hai tuần sau. Buổi đàm phán. Vẫn Lan, vẫn nụ cười ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Clean legal status. And this time, here's the whole file.",
          "sub": "Pháp lý sạch chị ạ. Lần này có đủ bộ hồ sơ đây.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Photos sent by text don't protect a company. Papers attached to the contract do.",
          "sub": "Ảnh chụp gửi qua tin nhắn không bảo vệ được công ty; giấy gắn vào hợp đồng mới bảo vệ.",
          "keys": [
            "giấy gắn vào hợp đồng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Clean legal status, at last with papers to prove it. Take care first, no regrets.",
          "sub": "“Pháp lý sạch”, giờ mới có giấy chứng minh. Cẩn tắc vô áy náy.",
          "keys": [
            "có giấy chứng minh"
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
      "ref": "p21,outro"
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
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2:certificate",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l6",
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Một bộ giấy · việc làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5496,
            "y": 40,
            "at": "l2:certificate+300"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 40,
            "at": "l3:landlord"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1560,
            "y": 1130,
            "at": "l4:mortgage+300"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 3528,
            "y": 1130,
            "at": "l5:sublease"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Hôm nay: gửi danh sách năm giấy",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l6:list",
            "color": "accent",
            "hl": [
              {
                "text": "năm giấy",
                "at": "l6:five"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "+ đưa điều cam đoan “sau” vào",
            "x": 7952,
            "y": 1340,
            "size": 42,
            "at": "l6:warranty"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: giá thuê, phí, tiền cọc",
            "x": 7932,
            "y": 1450,
            "size": 38,
            "at": "l7:Next",
            "color": "muted"
          },
          {
            "id": "j-note",
            "t": "text",
            "text": "Bài để tham khảo, không phải tư vấn vụ việc cụ thể. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1710,
            "size": 28,
            "at": "l7",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-note2",
            "t": "text",
            "text": "Quy định có thể thay đổi — kiểm lại với cơ quan, chuyên gia trước khi áp dụng.",
            "x": 7932,
            "y": 1760,
            "size": 28,
            "at": "l7",
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
          "say": "So, the right to lease is proven by a set of papers, not a slogan.",
          "sub": "Tóm lại, quyền cho thuê được chứng minh bằng một bộ giấy, không bằng một khẩu hiệu.",
          "keys": [
            "một bộ giấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The certificate, plus the conditions to trade.",
          "sub": "Giấy chứng nhận, cộng điều kiện đưa vào kinh doanh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "How the landlord holds the land.",
          "sub": "Bên cho thuê thuê đất theo hình thức nào."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The mortgage, and proof the bank was told.",
          "sub": "Thông tin thế chấp, và giấy đã báo ngân hàng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "For a sublease, the owner's consent.",
          "sub": "Nếu cho thuê lại, văn bản đồng ý của chủ sở hữu."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Today: send the five paper list, and put the new warranty in the draft.",
          "sub": "Việc làm ngay: gửi danh sách năm loại giấy, đưa điều cam đoan “sau” vào bản nháp.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Next: rent increases, service charges and the deposit. Rules change, so check first.",
          "sub": "Bài tiếp: giá thuê tăng, phí dịch vụ, tiền cọc. Quy định có thể đổi, kiểm lại trước."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p22"
    },
    {
      "id": "s21",
      "module": "QUIZ-01",
      "data": {
        "q": "According to the takeaway, what does the certificate answer and what does it not?",
        "options": [
          "It shows the market rent, not who must pay the electricity bills",
          "It shows the building's height, not how many floors are vacant",
          "It shows who owns the building, not whether it may be leased right now"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "page-facing-up",
        "why": "Giấy chứng nhận cho biết ai là chủ; các giấy khác mới cho biết có được cho thuê ngay không."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "According to the takeaway, what does the certificate answer and what does it not?",
          "sub": "Theo câu rút ra, giấy chứng nhận trả lời câu gì và không trả lời câu gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "It shows who owns the building, not whether it may be leased right now.",
          "sub": "Cho biết ai là chủ, chưa cho biết có được cho thuê ngay không."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "The other papers answer the rest.",
          "sub": "Các giấy khác trả lời phần còn lại."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[12]"
    },
    {
      "id": "s22",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Kiểm quyền cho thuê bằng giấy tờ"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ ngay bên dưới.",
          "face": "happy"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "anchor": {
    "type": "quote",
    "value": "pháp lý sạch",
    "ref": "intro"
  },
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-24: vật neo câu trích “pháp lý sạch” + ảnh chụp giấy chứng nhận → kết: buổi đàm phán, “pháp lý sạch” giờ có bộ giấy và phụ lục. Đét đứng trái + bảng trắng 10 ô theo TUẦN TRƯỚC BUỔI ĐÀM PHÁN của Thảo: thứ Hai tin nhắn của Lan (intro) → Cô Hoa “bàn giá trước” (p1, p2) → thứ Ba năm điều kiện (p3, p4) → toà trong dự án (p5; “Khoan đã!” thấy giấy là yên tâm p6; p7) → thứ Tư cà phê Bác Bình: đất trả tiền hằng năm, đơn vị sự nghiệp (p8–p11) → BRK-07 → thứ Năm thế chấp (p12; BRK-09 Luật Nhà ở p13; p14, p15) → thứ Sáu Lan là người thuê lại (p16, p17) → tối thứ Sáu điều cam đoan Trước/Sau (p18; BRK-04 p19) → thứ Bảy danh sách năm giấy (p20) → thứ Hai sau đàm phán (p21, khép vòng). Nhân vật: Thảo (vai “Ngọc”), Lan, Cô Hoa, Bác Bình. Mọi điều, mốc lấy từ bài; lưu ý chung #133 ở ô J.",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
