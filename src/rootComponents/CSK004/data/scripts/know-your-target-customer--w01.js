// know-your-target-customer--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "know-your-target-customer--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "junior-marketers",
    "slug": "know-your-target-customer",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Xác định khách hàng mục tiêu thế nào cho cụ thể?",
    "series": "Marketing có số liệu — lên kế hoạch và đo hiệu quả cho người mới"
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
            "at": "l1",
            "fit": [
              "a-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
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
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "lotion-bottle",
                "money-bag"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-05",
                  "on": "lan",
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
            "caption": "Thứ Hai · ngân sách nhỏ",
            "icon": "lotion-bottle"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Ai mua nhiều hơn?",
            "x": 60,
            "y": 110,
            "size": 60,
            "at": "l2:more buyers",
            "hl": [
              {
                "text": "nhiều hơn",
                "at": "l2:more buyers"
              }
            ]
          },
          {
            "id": "a-bA",
            "t": "box",
            "x": 60,
            "y": 220,
            "w": 760,
            "h": 100,
            "at": "l2:Wide",
            "stroke": 5
          },
          {
            "id": "a-A",
            "t": "text",
            "text": "A. Rộng: mọi phụ nữ",
            "x": 85,
            "y": 238,
            "size": 46,
            "at": "l2:Wide+200"
          },
          {
            "id": "a-bB",
            "t": "box",
            "x": 60,
            "y": 350,
            "w": 760,
            "h": 100,
            "at": "l2:narrow",
            "stroke": 5
          },
          {
            "id": "a-B",
            "t": "text",
            "text": "B. Hẹp: da dầu, thích kem nhẹ",
            "x": 85,
            "y": 368,
            "size": 42,
            "at": "l2:narrow+200"
          },
          {
            "id": "a-Ax",
            "t": "strike",
            "over": "a-A",
            "at": "l4:everyone"
          },
          {
            "id": "a-Br",
            "t": "ring",
            "around": [
              "a-B"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l4:B"
          },
          {
            "id": "a-k",
            "t": "text",
            "text": "Nói với tất cả = không ai",
            "x": 60,
            "y": 520,
            "size": 52,
            "at": "l5:no one",
            "color": "accent",
            "hl": [
              {
                "text": "không ai",
                "at": "l5:no one"
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
          "say": "Meet Lan again, our new marketer at a small cosmetics brand. One small budget.",
          "sub": "Lại là Lan, nhân viên marketing mới của hãng mỹ phẩm nhỏ. Một ngân sách nhỏ.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wide, all adult women? Or narrow, oily skin wanting a light cream? Which gets more buyers?",
          "sub": "Rộng: mọi phụ nữ trưởng thành? Hay hẹp: người da dầu muốn kem mỏng nhẹ? Bên nào nhiều người mua hơn?",
          "keys": [
            "Bên nào nhiều người mua hơn?"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Take a second. Guess.",
          "sub": "Dừng một giây. Đoán đi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Most pick A: more people, more buyers. But everyone is the trap. It's B.",
          "sub": "Phần đông chọn A: đông người thì đông khách. Nhưng mọi người chính là cái bẫy. Đáp án là B.",
          "keys": [
            "cái bẫy"
          ],
          "wait": 1500
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Speak to everyone, and you speak to no one.",
          "sub": "Nói với tất cả là không nói với ai.",
          "keys": [
            "không nói với ai"
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
      "ref": "intro,p2,p3"
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
            "at": 150,
            "fit": "B",
            "ms": 900
          },
          {
            "at": "l4",
            "fit": [
              "b-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "B",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "b-q",
            "t": "text",
            "text": "Khách mục tiêu: cụ thể cỡ nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:target customer",
            "hl": [
              {
                "text": "cụ thể",
                "at": "l1:specifically"
              }
            ]
          },
          {
            "id": "b-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "explain"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "lotion-bottle",
                "memo"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3",
            "caption": "Thứ Hai · giao việc",
            "icon": "memo"
          },
          {
            "id": "b-ca",
            "t": "text",
            "text": "“Biết người biết ta”",
            "x": 2028,
            "y": 170,
            "size": 56,
            "at": "l2:know",
            "color": "accent",
            "hl": [
              {
                "text": "Biết người",
                "at": "l2:know them"
              }
            ]
          },
          {
            "id": "b-ca2",
            "t": "text",
            "text": "trăm trận trăm thắng",
            "x": 2068,
            "y": 250,
            "size": 46,
            "at": "l2:battles",
            "color": "muted"
          },
          {
            "id": "b-all",
            "t": "text",
            "text": "Khách: “mọi người có da”",
            "x": 2028,
            "y": 380,
            "size": 50,
            "at": "l5:skin",
            "color": "coral",
            "hl": [
              {
                "text": "mọi người",
                "at": "l5:Everyone"
              }
            ]
          },
          {
            "id": "b-vague",
            "t": "text",
            "text": "= chữ mơ hồ nhất",
            "x": 2068,
            "y": 460,
            "size": 46,
            "at": "l6:vaguest",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you define your target customer, specifically?",
          "sub": "Vậy xác định khách hàng mục tiêu thế nào cho cụ thể?",
          "keys": [
            "cho cụ thể"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Old advice: know them, know yourself, win a hundred battles.",
          "sub": "Người xưa dạy: “Biết người biết ta, trăm trận trăm thắng.”",
          "keys": [
            "Biết người biết ta"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Monday. Chị Thảo, Lan's team leader, hands her a new job.",
          "sub": "Thứ Hai. Chị Thảo, trưởng nhóm của Lan, giao một việc mới.",
          "keys": [
            "Chị Thảo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Lan, plan the campaign for our oily skin cream. Who is the customer?",
          "sub": "Lan, em lên kế hoạch cho dòng kem dưỡng da dầu nhé. Khách là ai?",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Easy! Everyone who has skin!",
          "sub": "Dễ ạ! Mọi người có da!",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Everyone. The vaguest word in any marketing plan.",
          "sub": "Mọi người. Chữ mơ hồ nhất trong mọi bản kế hoạch.",
          "keys": [
            "Chữ mơ hồ nhất"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 700
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
            "text": "① Thứ Hai · Phân khúc là gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Segmentation",
            "hl": [
              {
                "text": "Phân khúc",
                "at": "l1:Segmentation"
              }
            ]
          },
          {
            "id": "c-def",
            "t": "text",
            "text": "Nhóm nhỏ · cùng nhu cầu",
            "x": 3996,
            "y": 160,
            "size": 54,
            "at": "l1:smaller",
            "color": "accent",
            "hl": [
              {
                "text": "cùng nhu cầu",
                "at": "l1:shared needs"
              }
            ]
          },
          {
            "id": "c-re",
            "t": "text",
            "text": "Phản ứng giống nhau",
            "x": 3996,
            "y": 250,
            "size": 50,
            "at": "l1:react"
          },
          {
            "id": "c-mon",
            "t": "text",
            "text": "Lợi 1: tiêu tiền hiệu quả",
            "x": 3996,
            "y": 340,
            "size": 50,
            "at": "l2:spend",
            "hl": [
              {
                "text": "hiệu quả",
                "at": "l2:wisely"
              }
            ]
          },
          {
            "id": "c-saw",
            "t": "illus",
            "name": "carpentry-saw",
            "x": 4836,
            "y": 170,
            "size": 110,
            "at": "l3:woodworking"
          },
          {
            "id": "c-mag",
            "t": "text",
            "text": "Tạp chí nghề mộc",
            "x": 4976,
            "y": 190,
            "size": 50,
            "at": "l3:magazine",
            "color": "accent"
          },
          {
            "id": "c-gen",
            "t": "text",
            "text": "Tạp chí đại chúng",
            "x": 4976,
            "y": 280,
            "size": 46,
            "at": "l4:general",
            "color": "muted"
          },
          {
            "id": "c-genx",
            "t": "strike",
            "over": "c-gen",
            "at": "l4:general+600"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: OpenStax, Principles of Marketing, mục 5.1",
            "x": 3996,
            "y": 720,
            "size": 26,
            "at": "l1:market",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Segmentation, says OpenStax, splits the market into smaller groups with shared needs, who react alike.",
          "sub": "Theo OpenStax, phân khúc là chia thị trường thành những nhóm nhỏ hơn, có nhu cầu chung, dễ phản ứng giống nhau.",
          "keys": [
            "phân khúc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "First win: you spend wisely. A small budget talks to the right people, not to all.",
          "sub": "Lợi ích đầu tiên: tiêu tiền hiệu quả. Ngân sách hạn chế thì nói với đúng người, không nói với tất cả.",
          "keys": [
            "tiêu tiền hiệu quả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The textbook's example: a woodworking tool maker gets more from a woodworking magazine.",
          "sub": "Ví dụ trong giáo trình: hãng dụng cụ nghề mộc được nhiều hơn khi quảng cáo trên tạp chí nghề mộc."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "More than from a general magazine. Fewer readers, but every one holds a saw.",
          "sub": "Hơn hẳn tạp chí đại chúng. Ít độc giả hơn, nhưng ai cũng cầm cưa.",
          "keys": [
            "ai cũng cầm cưa"
          ]
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s03",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "Nhắm càng rộng, càng nhiều người mua",
        "right": "Nói với tất cả là không nói với ai",
        "wrongIllus": "megaphone",
        "rightIllus": "bullseye"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The myth: aim wider, sell more.",
          "sub": "Hiểu lầm: nhắm càng rộng, càng nhiều người mua.",
          "keys": [
            "nhắm càng rộng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The truth: speak to everyone, and you speak to no one.",
          "sub": "Sự thật: nói với tất cả là không nói với ai.",
          "keys": [
            "không nói với ai"
          ]
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
            "fit": "C",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "c-msg",
            "t": "text",
            "text": "Viết cho “mọi phụ nữ”",
            "x": 3996,
            "y": 450,
            "size": 50,
            "at": "l1:all adult women",
            "color": "muted"
          },
          {
            "id": "c-msg2",
            "t": "text",
            "text": "→ chung chung, không ai thấy mình",
            "x": 4036,
            "y": 530,
            "size": 40,
            "at": "l1:generic",
            "hl": [
              {
                "text": "không ai thấy mình",
                "at": "l1:about them"
              }
            ]
          },
          {
            "id": "c-stay",
            "t": "text",
            "text": "Thấy hợp → ở lại, giới thiệu",
            "x": 3996,
            "y": 620,
            "size": 44,
            "at": "l2:stay",
            "color": "accent"
          },
          {
            "id": "c-thin",
            "t": "text",
            "text": "Tiền rải rộng: mỗi nhóm một chút",
            "x": 4836,
            "y": 450,
            "size": 44,
            "at": "l3:spread",
            "color": "coral",
            "hl": [
              {
                "text": "một chút",
                "at": "l3:a little"
              }
            ]
          },
          {
            "id": "c-salt",
            "t": "illus",
            "name": "salt",
            "x": 4836,
            "y": 530,
            "size": 80,
            "at": "l3:Salt"
          },
          {
            "id": "c-soup",
            "t": "text",
            "text": "muối bỏ bể",
            "x": 4936,
            "y": 545,
            "size": 52,
            "at": "l3:sea",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Write for all adult women, and the message turns so generic nobody feels it's about them.",
          "sub": "Viết cho “mọi phụ nữ trưởng thành”, thông điệp chung chung đến mức không ai thấy nó nói về mình.",
          "keys": [
            "không ai thấy nó nói về mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Customers who feel a product fits them tend to stay, and tell their friends.",
          "sub": "Khách thấy sản phẩm hợp với mình thì dễ ở lại và giới thiệu cho người khác."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And a small budget spread wide? Each group gets a little. Salt tossed into the sea.",
          "sub": "Còn ngân sách nhỏ rải rộng? Mỗi nhóm nhận một chút, như muối bỏ bể.",
          "keys": [
            "muối bỏ bể"
          ]
        }
      ],
      "ref": "p2"
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
            "text": "② Thứ Ba · Ở đâu? Ai?",
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
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "world-map",
                "beach-with-umbrella"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Ba · bốn cách chia",
            "icon": "world-map"
          },
          {
            "id": "d-pin",
            "t": "illus",
            "name": "round-pushpin",
            "x": 5964,
            "y": 160,
            "size": 70,
            "at": "l1:where"
          },
          {
            "id": "d-w",
            "t": "text",
            "text": "Ở đâu: vùng, mùa, ngôn ngữ",
            "x": 6054,
            "y": 170,
            "size": 46,
            "at": "l1:where+200",
            "hl": [
              {
                "text": "Ở đâu",
                "at": "l1:where"
              }
            ]
          },
          {
            "id": "d-beach",
            "t": "illus",
            "name": "beach-with-umbrella",
            "x": 5964,
            "y": 250,
            "size": 70,
            "at": "l2:Beachwear"
          },
          {
            "id": "d-bw",
            "t": "text",
            "text": "Đồ đi biển: mùa hè, nơi ấm",
            "x": 6054,
            "y": 260,
            "size": 44,
            "at": "l2:summer"
          },
          {
            "id": "d-lang",
            "t": "text",
            "text": "Vùng khác tiếng → đổi tiếng",
            "x": 6054,
            "y": 330,
            "size": 44,
            "at": "l2:language",
            "color": "muted"
          },
          {
            "id": "d-who",
            "t": "illus",
            "name": "busts-in-silhouette",
            "x": 5964,
            "y": 410,
            "size": 70,
            "at": "l3:who"
          },
          {
            "id": "d-wh",
            "t": "text",
            "text": "Ai: tuổi, thu nhập, nghề",
            "x": 6054,
            "y": 420,
            "size": 46,
            "at": "l3:who+200",
            "hl": [
              {
                "text": "Ai",
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
          "say": "Tuesday: four ways to split. One, by place. It answers where: region, climate, season, language, density.",
          "sub": "Thứ Ba: bốn cách chia. Một, theo nơi chốn, trả lời “ở đâu”: khu vực, khí hậu, mùa, ngôn ngữ, mật độ dân cư."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Beachwear sells more in summer and warm places. A new language region needs ads in that language.",
          "sub": "Đồ đi biển bán chạy vào mùa hè, nơi ấm. Vào vùng nói tiếng khác thì quảng cáo phải đổi tiếng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two, by traits. It answers who: gender, income, age, education, job, family.",
          "sub": "Hai, theo đặc điểm, trả lời “ai”: giới tính, thu nhập, tuổi, học vấn, nghề nghiệp, cấu trúc gia đình."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "So my customers are city people. Students, and young office workers!",
          "sub": "Vậy khách của em ở thành phố. Sinh viên và người mới đi làm!",
          "face": "happy"
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s06",
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
            "id": "d-feel",
            "t": "text",
            "text": "Tuổi “cảm thấy” > tuổi thật",
            "x": 5964,
            "y": 520,
            "size": 50,
            "at": "l1:feel",
            "color": "accent",
            "hl": [
              {
                "text": "cảm thấy",
                "at": "l1:feel"
              }
            ]
          },
          {
            "id": "d-stg",
            "t": "text",
            "text": "Chia theo giai đoạn: dễ định kiến",
            "x": 5964,
            "y": 610,
            "size": 40,
            "at": "l2:life stage",
            "color": "coral"
          },
          {
            "id": "d-50",
            "t": "text",
            "text": "Tóc bạc, lòng vẫn hai mươi",
            "x": 6804,
            "y": 690,
            "size": 46,
            "at": "l1:twenty",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Note: the age people feel can matter more than their real age. Grey hair, heart of twenty.",
          "sub": "Lưu ý: tuổi người ta cảm thấy đôi khi quan trọng hơn tuổi thật. Tóc bạc mà lòng vẫn hai mươi.",
          "keys": [
            "tuổi người ta cảm thấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And splitting by life stage easily slides into stereotypes.",
          "sub": "Còn chia theo giai đoạn cuộc sống thì dễ rơi vào định kiến.",
          "keys": [
            "định kiến"
          ]
        }
      ],
      "ref": "p5"
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
          },
          {
            "at": "l5",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "Thứ Ba · Dùng thế nào? Vì sao?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Three"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "point",
                  "face": "surprised"
                }
              ],
              "props": [
                "lotion-bottle",
                "droplet"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l5:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Chiều thứ Ba · cùng bàn",
            "icon": "droplet"
          },
          {
            "id": "e-how",
            "t": "text",
            "text": "Dùng thế nào: lợi ích, dịp",
            "x": 7932,
            "y": 160,
            "size": 40,
            "at": "l1:how",
            "hl": [
              {
                "text": "Dùng thế nào",
                "at": "l1:how they use"
              }
            ]
          },
          {
            "id": "e-b0",
            "t": "illus",
            "name": "sparkles",
            "x": 7932,
            "y": 230,
            "size": 56,
            "at": "l2:whitening"
          },
          {
            "id": "e-bt0",
            "t": "text",
            "text": "Trắng răng",
            "x": 8007,
            "y": 235,
            "size": 44,
            "at": "l2:whitening+200"
          },
          {
            "id": "e-b1",
            "t": "illus",
            "name": "tooth",
            "x": 7932,
            "y": 300,
            "size": 56,
            "at": "l2:tartar"
          },
          {
            "id": "e-bt1",
            "t": "text",
            "text": "Chống cao răng",
            "x": 8007,
            "y": 305,
            "size": 44,
            "at": "l2:tartar+200"
          },
          {
            "id": "e-b2",
            "t": "illus",
            "name": "toothbrush",
            "x": 7932,
            "y": 370,
            "size": 56,
            "at": "l2:cavities"
          },
          {
            "id": "e-bt2",
            "t": "text",
            "text": "Ngừa sâu răng",
            "x": 8007,
            "y": 375,
            "size": 44,
            "at": "l2:cavities+200"
          },
          {
            "id": "e-why",
            "t": "text",
            "text": "Vì sao: lối sống, giá trị",
            "x": 7932,
            "y": 460,
            "size": 46,
            "at": "l3:why",
            "hl": [
              {
                "text": "Vì sao",
                "at": "l3:why"
              }
            ]
          },
          {
            "id": "e-eco",
            "t": "text",
            "text": "vd. quan tâm môi trường",
            "x": 7972,
            "y": 530,
            "size": 40,
            "at": "l3:environment",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three, by behaviour. It answers how they use it: benefit sought, occasion, usage, loyalty.",
          "sub": "Ba, theo hành vi, trả lời “dùng thế nào”: lợi ích tìm kiếm, dịp mua, mức sử dụng, mức trung thành."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Toothpaste buyers may want whitening, tartar control, or fewer cavities. Each group gets its own product.",
          "sub": "Người mua kem đánh răng có thể muốn trắng răng, chống cao răng, hoặc ngừa sâu răng. Mỗi nhóm một sản phẩm riêng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Four, by mind. It answers why: lifestyle, personality, values, like people who care about the environment.",
          "sub": "Bốn, theo tâm lý, trả lời “vì sao”: lối sống, tính cách, giá trị, chẳng hạn nhóm quan tâm môi trường."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "You can mix ways. Splitting by benefit links straight to the message: say what they want.",
          "sub": "Có thể kết hợp nhiều cách. Chia theo lợi ích thì nối thẳng sang thông điệp: khách muốn gì, nói đúng điều đó.",
          "keys": [
            "nối thẳng sang thông điệp"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Benefit! Oily skin wants a light cream that never feels greasy.",
          "sub": "Lợi ích! Da dầu muốn kem mỏng nhẹ, không bết.",
          "face": "surprised"
        }
      ],
      "ref": "p6,p7"
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
          }
        ],
        "items": [
          {
            "id": "e-st",
            "t": "text",
            "text": "Tránh định kiến: giới, tuổi",
            "x": 8772,
            "y": 690,
            "size": 46,
            "at": "l1:stereotypes",
            "color": "coral",
            "hl": [
              {
                "text": "định kiến",
                "at": "l1:stereotypes"
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
          "say": "Whatever the way, avoid stereotypes about gender, age or background.",
          "sub": "Dù chia cách nào, hãy tránh định kiến về giới, tuổi hay xuất thân.",
          "keys": [
            "tránh định kiến"
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
            "text": "③ Thứ Tư · Nhóm nào đáng nhắm?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Wednesday",
            "hl": [
              {
                "text": "đáng nhắm",
                "at": "l1:worth"
              }
            ]
          },
          {
            "id": "f-a0",
            "t": "text",
            "text": "A",
            "x": 60,
            "y": 1240,
            "size": 80,
            "at": "l2:Accessible",
            "color": "accent"
          },
          {
            "id": "f-at0",
            "t": "text",
            "text": "Tiếp cận được",
            "x": 150,
            "y": 1260,
            "size": 48,
            "at": "l2:Accessible+300"
          },
          {
            "id": "f-a1",
            "t": "text",
            "text": "D",
            "x": 60,
            "y": 1345,
            "size": 80,
            "at": "l2:Differentiable",
            "color": "accent"
          },
          {
            "id": "f-at1",
            "t": "text",
            "text": "Khác biệt rõ",
            "x": 150,
            "y": 1365,
            "size": 48,
            "at": "l2:Differentiable+300"
          },
          {
            "id": "f-a2",
            "t": "text",
            "text": "A",
            "x": 60,
            "y": 1450,
            "size": 80,
            "at": "l3:Actionable",
            "color": "accent"
          },
          {
            "id": "f-at2",
            "t": "text",
            "text": "Hành động được",
            "x": 150,
            "y": 1470,
            "size": 48,
            "at": "l3:Actionable+300"
          },
          {
            "id": "f-a3",
            "t": "text",
            "text": "M",
            "x": 60,
            "y": 1555,
            "size": 80,
            "at": "l3:Measurable",
            "color": "accent"
          },
          {
            "id": "f-at3",
            "t": "text",
            "text": "Đo được quy mô",
            "x": 150,
            "y": 1575,
            "size": 48,
            "at": "l3:Measurable+300"
          },
          {
            "id": "f-a4",
            "t": "text",
            "text": "S",
            "x": 60,
            "y": 1660,
            "size": 80,
            "at": "l4:Substantial",
            "color": "accent"
          },
          {
            "id": "f-at4",
            "t": "text",
            "text": "Đủ lớn",
            "x": 150,
            "y": 1680,
            "size": 48,
            "at": "l4:Substantial+300"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: OpenStax, mục 5.4 Essential Factors in Effective Market Segmentation",
            "x": 60,
            "y": 1810,
            "size": 26,
            "at": "l2",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "f-n1",
            "t": "text",
            "text": "với tới bằng kênh vừa sức",
            "x": 600,
            "y": 1265,
            "size": 36,
            "at": "l2:affordable",
            "color": "muted"
          },
          {
            "id": "f-n3",
            "t": "text",
            "text": "có lãi, đo được kết quả",
            "x": 600,
            "y": 1475,
            "size": 36,
            "at": "l3:profitable",
            "color": "muted"
          },
          {
            "id": "f-n5",
            "t": "text",
            "text": "đáng bỏ nguồn lực",
            "x": 600,
            "y": 1685,
            "size": 36,
            "at": "l4:resources",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wednesday. Not every group is worth chasing. OpenStax gives five tests: ADAMS.",
          "sub": "Thứ Tư. Không phải nhóm nào cũng đáng theo đuổi. OpenStax đưa năm tiêu chí: ADAMS.",
          "keys": [
            "ADAMS"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Accessible: reachable at an affordable cost, through channels you can use. Differentiable: clearly different from others.",
          "sub": "Tiếp cận được, với chi phí vừa sức qua kênh mình dùng được. Khác biệt rõ với các nhóm khác.",
          "keys": [
            "Tiếp cận được"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Actionable: you can build a profitable plan and measure it. Measurable: you can size it in sales or customers.",
          "sub": "Hành động được: thiết kế được chiến lược có lãi, đo được kết quả. Đo được quy mô theo doanh số hay số khách."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Substantial: big enough to deserve your resources.",
          "sub": "Và đủ lớn để đáng bỏ nguồn lực.",
          "keys": [
            "đủ lớn"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s10",
      "module": "BRK-07",
      "data": {
        "question": "Một nhóm đông, sôi nổi, mê đúng món mình bán. Sai ở đâu?",
        "illus": "shortcake"
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
          "say": "A huge, lively group that loves exactly what you sell. What could go wrong?",
          "sub": "Một nhóm đông, sôi nổi, mê đúng món mình bán. Sai ở đâu được?",
          "keys": [
            "Sai ở đâu được?"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s11",
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
          },
          {
            "at": "l5",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "Tối thứ Tư · Tiệm bánh cô Hoa",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:way home"
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
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "shortcake",
                "delivery-truck"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Tư · tiệm bánh đầu ngõ",
            "icon": "shortcake"
          },
          {
            "id": "g-grp",
            "t": "text",
            "text": "Hội mê bánh ít đường",
            "x": 2028,
            "y": 1250,
            "size": 50,
            "at": "l2:low-sugar"
          },
          {
            "id": "g-all",
            "t": "text",
            "text": "khắp cả nước",
            "x": 2068,
            "y": 1330,
            "size": 46,
            "at": "l2:nationwide",
            "color": "coral",
            "hl": [
              {
                "text": "cả nước",
                "at": "l2:nationwide"
              }
            ]
          },
          {
            "id": "g-dl",
            "t": "text",
            "text": "Giao hàng: 1 quận",
            "x": 2028,
            "y": 1420,
            "size": 54,
            "at": "l4:one district",
            "color": "accent",
            "hl": [
              {
                "text": "1 quận",
                "at": "l4:one district"
              }
            ]
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "Vướng tiêu chí nào?",
            "x": 2028,
            "y": 1520,
            "size": 52,
            "at": "l4:Which",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wednesday evening, on the way home. Meet Cô Hoa, who runs the low-sugar bakery by Lan's lane.",
          "sub": "Tối thứ Tư, trên đường về. Đây là cô Hoa, chủ tiệm bánh ít đường đầu ngõ trọ của Lan.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Lan, look! A huge online group of low-sugar cake fans, nationwide. I'll target them all!",
          "sub": "Lan xem này! Cả một hội mê bánh ít đường trên mạng, khắp cả nước. Cô nhắm hết!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lively, big, loves her cakes. A marketer's dream?",
          "sub": "Sôi nổi, đông, mê đúng bánh của cô. Giấc mơ của dân marketing?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One detail: the bakery only delivers within one district. Which test does this group fail?",
          "sub": "Một chi tiết: tiệm chỉ giao trong một quận. Nhóm này vướng tiêu chí nào?",
          "keys": [
            "chỉ giao trong một quận"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Accessible! Most of them live outside your delivery area, Cô.",
          "sub": "Tiếp cận được ạ! Phần lớn họ ở ngoài vùng cô giao hàng.",
          "face": "surprised",
          "pose": "point",
          "wait": 800
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Exactly. Big enough, maybe, but she can't serve them at a sensible cost.",
          "sub": "Chính xác. Có thể đủ lớn, nhưng tiệm không phục vụ được với chi phí hợp lý.",
          "keys": [
            "chi phí hợp lý"
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
            "fit": "G",
            "move": "cut"
          },
          {
            "at": "l2",
            "fit": [
              "g-v2"
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
            "id": "g-v2",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "shortcake",
                "delivery-truck"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
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
            "caption": "Cùng tối · thu hẹp nhóm",
            "icon": "shortcake"
          },
          {
            "id": "g-allx",
            "t": "strike",
            "over": "g-all",
            "at": "l1:narrow"
          },
          {
            "id": "g-new",
            "t": "text",
            "text": "Mê bánh ít đường, trong vùng giao",
            "x": 2028,
            "y": 1630,
            "size": 42,
            "at": "l1:inside",
            "color": "accent",
            "hl": [
              {
                "text": "trong vùng giao",
                "at": "l1:inside"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Đẹp mấy, không với tới: vô ích",
            "x": 2028,
            "y": 1730,
            "size": 46,
            "at": "l3:reach",
            "hl": [
              {
                "text": "không với tới",
                "at": "l3:reach"
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
          "say": "So narrow it down: low-sugar fans who live inside the delivery area.",
          "sub": "Vậy thu hẹp lại: người mê bánh ít đường sống trong vùng giao hàng.",
          "keys": [
            "trong vùng giao hàng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Fine, my own district first. Fewer fans, but they get warm cakes!",
          "sub": "Được, quận nhà trước. Ít người hơn, nhưng bánh tới tay còn ấm!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "However pretty a group looks, it's useless if you can't reach it.",
          "sub": "Nhóm khách đẹp đến đâu cũng vô ích nếu mình không với tới.",
          "keys": [
            "không với tới"
          ]
        }
      ],
      "ref": "p9,p10"
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
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "④ Thứ Năm · Chân dung khách",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday",
            "hl": [
              {
                "text": "Chân dung",
                "at": "l1:persona"
              }
            ]
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "identification-card",
                "lotion-bottle"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l5:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Năm · trang “Chị Da Dầu”",
            "icon": "identification-card"
          },
          {
            "id": "h-1p",
            "t": "text",
            "text": "1 trang · có hình · 3–8 chân dung",
            "x": 3996,
            "y": 1250,
            "size": 40,
            "at": "l1:one page",
            "hl": [
              {
                "text": "1 trang",
                "at": "l1:one page"
              }
            ]
          },
          {
            "id": "h-s0",
            "t": "text",
            "text": "1. Lợi ích: da dầu, kem nhẹ",
            "x": 3996,
            "y": 1340,
            "size": 40,
            "at": "l2:benefit"
          },
          {
            "id": "h-s1",
            "t": "text",
            "text": "2. Đặc điểm: sinh viên, đi làm",
            "x": 3996,
            "y": 1420,
            "size": 40,
            "at": "l3:students"
          },
          {
            "id": "h-s2",
            "t": "text",
            "text": "3. Lo: hàng quảng cáo quá lời",
            "x": 3996,
            "y": 1500,
            "size": 40,
            "at": "l4:worry"
          },
          {
            "id": "h-s3",
            "t": "text",
            "text": "4. Nơi tìm tin: video, bình luận",
            "x": 3996,
            "y": 1580,
            "size": 40,
            "at": "l5:Where",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday: the persona. OpenStax calls it a one page profile, with a picture, of the ideal customer. Three to eight per business.",
          "sub": "Thứ Năm: chân dung khách. OpenStax gọi đó là hồ sơ một trang, có hình, về khách lý tưởng. Mỗi doanh nghiệp ba đến tám chân dung.",
          "keys": [
            "hồ sơ một trang"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Step one, the benefit: oily skin, wants a light cream, never greasy.",
          "sub": "Bước một, lợi ích: da dầu, muốn kem mỏng nhẹ, không bết.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Step two, traits: students and young office workers in the city.",
          "sub": "Bước hai, đặc điểm: sinh viên và người mới đi làm ở thành phố."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Three: wants neat skin under work makeup. Her worry: buying something over-advertised.",
          "sub": "Ba: muốn da gọn gàng khi trang điểm đi làm. Lo ngại: mua phải hàng quảng cáo quá lời."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Four: Where she looks. Product videos, comments, and asking friends.",
          "sub": "Bốn: nơi tìm thông tin. Video giới thiệu sản phẩm, bình luận, hỏi bạn bè.",
          "pose": "point"
        }
      ],
      "ref": "p11,p12"
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
          }
        ],
        "items": [
          {
            "id": "h-one",
            "t": "text",
            "text": "Nhỏ: bắt đầu 1 chân dung chính",
            "x": 3996,
            "y": 1680,
            "size": 42,
            "at": "l1:single",
            "color": "muted"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Cả nhóm thấy cùng 1 người",
            "x": 4836,
            "y": 1780,
            "size": 50,
            "at": "l2:same person",
            "color": "accent",
            "hl": [
              {
                "text": "cùng 1 người",
                "at": "l2:same person"
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
          "say": "A small campaign can start with a single main persona. Lan names hers Chị Da Dầu.",
          "sub": "Chiến dịch nhỏ có thể bắt đầu từ một chân dung chính. Lan đặt tên cho nó: “Chị Da Dầu”.",
          "keys": [
            "Chị Da Dầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A good persona makes the whole team picture the same person.",
          "sub": "Chân dung tốt khiến cả nhóm nghĩ về cùng một người.",
          "keys": [
            "cùng một người"
          ]
        }
      ],
      "ref": "p11,p13"
    },
    {
      "id": "s15",
      "module": "BRK-08",
      "data": {
        "title": "Năm bước khi khách mua",
        "current": 4,
        "points": [
          {
            "label": "Nhận ra nhu cầu",
            "sub": "thấy khoảng trống",
            "illus": "light-bulb"
          },
          {
            "label": "Tìm thông tin",
            "sub": "mạng, bạn bè, cửa hàng",
            "illus": "magnifying-glass-tilted-left"
          },
          {
            "label": "So sánh",
            "sub": "giá, chất lượng, tiện",
            "illus": "balance-scale"
          },
          {
            "label": "Quyết định mua",
            "sub": "",
            "illus": "shopping-cart"
          },
          {
            "label": "Đánh giá sau mua",
            "sub": "hay bị quên",
            "illus": "thinking-face"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday: the buying journey. Need, search, compare, buy.",
          "sub": "Thứ Sáu: hành trình mua. Nhận ra nhu cầu, tìm thông tin, so sánh, quyết định mua."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And the step everyone forgets: judging it after the purchase.",
          "sub": "Và bước hay bị quên: đánh giá sau khi mua.",
          "keys": [
            "đánh giá sau khi mua"
          ]
        }
      ],
      "ref": "p14"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑤ Thứ Sáu · Khách đi 5 bước",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:gap",
            "hl": [
              {
                "text": "5 bước",
                "at": "l1:gap"
              }
            ]
          },
          {
            "id": "i-gap",
            "t": "text",
            "text": "Nhu cầu = khoảng trống",
            "x": 5964,
            "y": 1250,
            "size": 52,
            "at": "l1:gap",
            "color": "accent",
            "hl": [
              {
                "text": "khoảng trống",
                "at": "l1:gap"
              }
            ]
          },
          {
            "id": "i-bread",
            "t": "illus",
            "name": "bread",
            "x": 5964,
            "y": 1330,
            "size": 70,
            "at": "l2:smell"
          },
          {
            "id": "i-in",
            "t": "text",
            "text": "Trong: đói · Ngoài: mùi bánh",
            "x": 6054,
            "y": 1340,
            "size": 44,
            "at": "l2:hunger"
          },
          {
            "id": "i-sk",
            "t": "text",
            "text": "Món rẻ: bỏ qua tìm hiểu",
            "x": 5964,
            "y": 1430,
            "size": 46,
            "at": "l3:cheap",
            "color": "muted"
          },
          {
            "id": "i-pk",
            "t": "text",
            "text": "Một gói thuộc tính",
            "x": 5964,
            "y": 1510,
            "size": 48,
            "at": "l4:bundle",
            "hl": [
              {
                "text": "gói thuộc tính",
                "at": "l4:bundle"
              }
            ]
          },
          {
            "id": "i-c1",
            "t": "text",
            "text": "Mới tìm hiểu → bài giải thích",
            "x": 6804,
            "y": 1250,
            "size": 42,
            "at": "l5:explainer"
          },
          {
            "id": "i-c2",
            "t": "text",
            "text": "Đang cân nhắc → bảng so sánh",
            "x": 6804,
            "y": 1330,
            "size": 42,
            "at": "l5:comparison",
            "color": "accent",
            "hl": [
              {
                "text": "bảng so sánh",
                "at": "l5:comparison"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: OpenStax, mục 3.3 The Consumer Purchasing Decision Process",
            "x": 5964,
            "y": 1810,
            "size": 26,
            "at": "l1",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A need appears when customers see a gap between where they are and what they want.",
          "sub": "Nhu cầu nảy sinh khi khách thấy khoảng cách giữa hiện tại và điều họ mong muốn.",
          "keys": [
            "khoảng cách"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The trigger can be inside, like hunger, or outside, like the smell of fresh bread.",
          "sub": "Tác nhân có thể từ bên trong, như cơn đói, hoặc bên ngoài, như mùi bánh nướng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "They search online, ask friends, or touch it in a shop. For cheap, low-risk items, they may skip this.",
          "sub": "Khách tra mạng, hỏi bạn bè, hoặc đến cửa hàng xem tận tay. Món rẻ, ít rủi ro thì có thể bỏ qua."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Comparing, they see a product as a bundle: price, quality, convenience.",
          "sub": "Khi so sánh, khách nhìn sản phẩm như một gói thuộc tính: giá, chất lượng, sự tiện lợi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Know the step, pick the content: an explainer for new searchers, a comparison for those weighing up.",
          "sub": "Biết khách ở bước nào thì chọn nội dung: bài giải thích cho người mới tìm hiểu, bảng so sánh cho người đang cân nhắc.",
          "keys": [
            "bảng so sánh"
          ]
        }
      ],
      "ref": "p14,p15"
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
          }
        ],
        "items": [
          {
            "id": "i-sat",
            "t": "text",
            "text": "Đạt kỳ vọng → hài lòng",
            "x": 6804,
            "y": 1430,
            "size": 46,
            "at": "l1:meets",
            "color": "accent"
          },
          {
            "id": "i-dis",
            "t": "text",
            "text": "Không đạt → thất vọng",
            "x": 6804,
            "y": 1510,
            "size": 46,
            "at": "l1:disappointed",
            "color": "coral"
          },
          {
            "id": "i-dbt",
            "t": "text",
            "text": "“Mình chọn đúng chưa?”",
            "x": 6804,
            "y": 1590,
            "size": 46,
            "at": "l2:right choice",
            "color": "muted"
          },
          {
            "id": "i-over",
            "t": "text",
            "text": "Hứa quá → kỳ vọng hụt",
            "x": 6804,
            "y": 1680,
            "size": 48,
            "at": "l3:Overpromising",
            "color": "coral",
            "hl": [
              {
                "text": "Hứa quá",
                "at": "l3:Overpromising"
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
          "say": "Last step: customers are happy when it meets or beats what they expected, disappointed when it doesn't.",
          "sub": "Bước cuối: khách hài lòng khi sản phẩm đạt hoặc vượt kỳ vọng, thất vọng khi không đạt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Some even wonder: did I make the right choice?",
          "sub": "Có người còn băn khoăn: mình chọn đúng chưa?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Overpromising ads plant expectations the product can't meet.",
          "sub": "Quảng cáo hứa quá sẽ gieo kỳ vọng mà sản phẩm không đáp ứng nổi.",
          "keys": [
            "hứa quá"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s18",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Chiều thứ Sáu · câu quảng cáo",
        "actors": [
          {
            "id": "lan",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“Kem dưỡng thần kỳ, da đẹp hoàn hảo sau một đêm”",
          "why": "Hứa điều khó đạt, khách dùng xong dễ thất vọng.",
          "rule": "Nói đúng lợi ích nhóm khách tìm"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Ad line: miracle cream, perfect skin overnight!",
          "sub": "Câu quảng cáo: kem dưỡng thần kỳ, da đẹp hoàn hảo chỉ sau một đêm!",
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
          "say": "Promise the moon, deliver a cream, and Chị Da Dầu feels cheated.",
          "sub": "Hứa cả mặt trăng mà giao một hũ kem, “Chị Da Dầu” sẽ thấy bị lừa.",
          "keys": [
            "thấy bị lừa"
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
          "who": "lan",
          "say": "A light cream for oily skin. Absorbs fast, never greasy under makeup.",
          "sub": "Kem dưỡng mỏng nhẹ cho da dầu, thấm nhanh, không bết khi trang điểm.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Promise enough to sell, deliver enough to bring them back.",
          "sub": "Đúng. Hứa vừa đủ để khách mua, làm đủ để khách quay lại.",
          "phase": "redo",
          "keys": [
            "Hứa vừa đủ"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p17,p18"
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
          }
        ],
        "items": [
          {
            "id": "i-b4",
            "t": "text",
            "text": "Trước: “thần kỳ, sau 1 đêm”",
            "x": 5964,
            "y": 1590,
            "size": 44,
            "at": "l1:miracle",
            "color": "muted"
          },
          {
            "id": "i-b4x",
            "t": "strike",
            "over": "i-b4",
            "at": "l1:hard"
          },
          {
            "id": "i-af",
            "t": "text",
            "text": "Sau: “mỏng nhẹ, không bết”",
            "x": 5964,
            "y": 1670,
            "size": 48,
            "at": "l2:light",
            "color": "accent",
            "hl": [
              {
                "text": "không bết",
                "at": "l2:greasy"
              }
            ]
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Kỳ vọng ≈ trải nghiệm",
            "x": 6804,
            "y": 1780,
            "size": 50,
            "at": "l2:closer",
            "hl": [
              {
                "text": "≈",
                "at": "l2:closer"
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
          "say": "The miracle line promises what's hard to reach, so users get let down.",
          "sub": "Câu “thần kỳ” hứa điều khó đạt, nên khách dễ thất vọng sau khi dùng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The light, never greasy line says the exact benefit oily skin wants. Expectation and experience sit closer.",
          "sub": "Câu “mỏng nhẹ, không bết” nói đúng lợi ích da dầu tìm. Kỳ vọng và trải nghiệm gần nhau hơn.",
          "keys": [
            "gần nhau hơn"
          ]
        }
      ],
      "ref": "p17"
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
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Hai sau · Hỏi trước, đoán sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:research",
            "hl": [
              {
                "text": "Hỏi trước",
                "at": "l1:budget"
              }
            ]
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l2:comments",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 1246,
            "size": 56,
            "at": "l2:comments+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Đọc bình luận, đánh giá",
            "x": 7998,
            "y": 1250,
            "size": 42,
            "at": "l2:comments+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1340,
            "w": 44,
            "h": 44,
            "at": "l2:asked",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 1326,
            "size": 56,
            "at": "l2:asked+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Ghi câu khách hỏi nhiều",
            "x": 7998,
            "y": 1330,
            "size": 42,
            "at": "l2:asked+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1420,
            "w": 44,
            "h": 44,
            "at": "l3:sales",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 1406,
            "size": 56,
            "at": "l3:sales+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Hỏi đồng nghiệp bán hàng",
            "x": 7998,
            "y": 1410,
            "size": 42,
            "at": "l3:sales+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1500,
            "w": 44,
            "h": 44,
            "at": "l3:chat",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 1486,
            "size": 56,
            "at": "l3:chat+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Nói chuyện vài khách đã mua",
            "x": 7998,
            "y": 1490,
            "size": 42,
            "at": "l3:chat+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1580,
            "w": 44,
            "h": 44,
            "at": "l3:fix",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 1566,
            "size": 56,
            "at": "l3:fix+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Đối chiếu, sửa chân dung",
            "x": 7998,
            "y": 1570,
            "size": 42,
            "at": "l3:fix+200"
          },
          {
            "id": "j-src",
            "t": "text",
            "text": "Nguồn: OpenStax, mục 5.1 · mạng xã hội cho thấy khách đang nghĩ gì",
            "x": 7932,
            "y": 1630,
            "size": 26,
            "at": "l1:Social",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next Monday. No research budget? Social media shows fast what customers think.",
          "sub": "Thứ Hai tuần sau. Không có ngân sách nghiên cứu? Mạng xã hội cho thấy rất nhanh khách đang nghĩ gì.",
          "keys": [
            "khách đang nghĩ gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Start with what you have. Read comments and reviews, yours and rivals'. Note the most asked questions.",
          "sub": "Bắt đầu từ cái đã có: đọc bình luận, đánh giá, của mình và đối thủ. Ghi lại câu khách hỏi nhiều nhất."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask sales colleagues about complaints. Chat with a few buyers. Then fix the persona.",
          "sub": "Hỏi đồng nghiệp bán hàng khách hay phàn nàn gì. Nói chuyện với vài khách đã mua. Rồi sửa chân dung.",
          "keys": [
            "sửa chân dung"
          ]
        }
      ],
      "ref": "p19,p20"
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
          },
          {
            "at": "l4",
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
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "phone",
                  "face": "surprised"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4",
                  "pose": "explain"
                }
              ],
              "props": [
                "incoming-envelope",
                "lotion-bottle"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai sau · tin nhắn hỏi hàng",
            "icon": "incoming-envelope"
          },
          {
            "id": "j-pk",
            "t": "text",
            "text": "Đoán: thích bao bì đẹp",
            "x": 8772,
            "y": 1780,
            "size": 44,
            "at": "l1:packaging",
            "color": "muted"
          },
          {
            "id": "j-pkx",
            "t": "strike",
            "over": "j-pk",
            "at": "l2:greasy"
          },
          {
            "id": "j-gr",
            "t": "text",
            "text": "Hỏi nhiều nhất: “có bết không?”",
            "x": 7932,
            "y": 1690,
            "size": 40,
            "at": "l2:greasy",
            "color": "coral",
            "hl": [
              {
                "text": "có bết không",
                "at": "l2:greasy"
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
          "say": "One line in Lan's persona was only her guess: customers buy for the pretty packaging.",
          "sub": "Một dòng trong chân dung của Lan chỉ là cô tự đoán: khách mua vì bao bì đẹp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Wait. The most asked question in our messages: will it feel greasy under makeup?",
          "sub": "Ơ. Câu hỏi lặp lại nhiều nhất trong tin nhắn là: kem có bết khi trang điểm không?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So she fixes the persona, and puts never greasy at the top of every post.",
          "sub": "Cô sửa lại chân dung, và đưa ý “không bết” lên đầu bài đăng.",
          "keys": [
            "không bết"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "So, Lan. Who is the customer?",
          "sub": "Vậy Lan, khách là ai?",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Chị Da Dầu. Oily skin, city student or new worker, wants light, never greasy. One page.",
          "sub": "“Chị Da Dầu”: da dầu, sinh viên hay mới đi làm ở thành phố, muốn kem nhẹ, không bết. Một trang.",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Know them, know yourself. Ask customers before you guess them.",
          "sub": "“Biết người biết ta.” Hỏi khách trước khi đoán khách.",
          "keys": [
            "Hỏi khách trước khi đoán khách"
          ]
        }
      ],
      "ref": "p21,p22"
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
            "ms": 1200
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
            "y": 170,
            "at": "l1+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 520,
            "y": 1250,
            "at": "l2+900"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1250,
            "at": "l3+900"
          },
          {
            "id": "z-src",
            "t": "text",
            "text": "Bài để tham khảo; tính năng nền tảng có thể thay đổi, cần thì kiểm lại. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1835,
            "size": 24,
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
          "say": "So: a target customer is a group with shared needs.",
          "sub": "Tóm lại: khách hàng mục tiêu là một nhóm có nhu cầu chung.",
          "keys": [
            "nhu cầu chung"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One you can reach, and big enough to matter.",
          "sub": "Với tới được, và đủ lớn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Written on one persona page, checked against real messages.",
          "sub": "Được viết thành một trang chân dung, đối chiếu với tin nhắn thật."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next video: turning that persona into goals and metrics.",
          "sub": "Bài sau: biến chân dung thành mục tiêu và chỉ số."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p23,outro"
    },
    {
      "id": "s23",
      "module": "QUIZ-01",
      "data": {
        "q": "What does accessible mean in the ADAMS criteria?",
        "options": [
          "The segment lives near the office so staff can visit customers on foot",
          "The segment has already bought from the company at least several times",
          "The company can reach the segment at an affordable cost through usable channels"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "shortcake",
        "why": "Tiếp cận được: với tới nhóm đó với chi phí vừa sức, qua kênh mình dùng được."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What does accessible mean in the ADAMS criteria?",
          "sub": "Tiếp cận được trong tiêu chí ADAMS nghĩa là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Reachable at an affordable cost, through channels you can use.",
          "sub": "Với tới được với chi phí vừa sức, qua kênh mình dùng được."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Remember Cô Hoa's bakery.",
          "sub": "Nhớ tiệm bánh cô Hoa nhé."
        }
      ],
      "ref": "questions[14]"
    },
    {
      "id": "s24",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi đọc mười tin nhắn hỏi hàng gần nhất"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now, read your last ten customer messages. Note the three most repeated questions, then write your main persona.",
          "sub": "Giờ, đọc lại mười tin nhắn hỏi hàng gần nhất. Ghi ba câu hỏi lặp lại nhiều nhất, rồi viết chân dung khách chính."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi junior-marketers, bài 1) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21 (câu hỏi để đoán sai): cùng ngân sách nhỏ, nhắm rộng (mọi phụ nữ) hay hẹp (da dầu muốn kem mỏng nhẹ) thì nhiều người mua hơn? → lặng 1,5 s → lật: B (p2, p3). Dòng thời gian: MỘT TUẦN của Lan (thứ Hai chị Thảo giao kế hoạch kem dưỡng da dầu, “khách: mọi người có da” → phân khúc → thứ Ba bốn cách chia → thứ Tư ADAMS, tối ghé tiệm bánh cô Hoa (p9) → thứ Năm chân dung “Chị Da Dầu” (p12) → thứ Sáu hành trình mua + “Khoan đã!” câu quảng cáo thần kỳ (p17) → thứ Hai sau đọc tin nhắn hỏi hàng (p21), chị Thảo hỏi lại “Khách là ai?”). Đổi tên theo w145/_series/junior-marketers.md: Trang → Lan; Huy (marketing tiệm bánh) → cô Hoa, chủ tiệm bánh ít đường tự làm marketing. Ngắt nhịp: BRK-04 s03 (hiểu lầm p2), BRK-07 s10 (rehook trước p9), BRK-08 s15 (năm bước mua p14), DLG-01 s18. Tục ngữ: “Biết người biết ta, trăm trận trăm thắng” (mở s01, khép s21). Ví von: muối bỏ bể, ai cũng cầm cưa. Lưu ý chung (#133) ở cảnh tóm tắt. Câu đố questions[14].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
