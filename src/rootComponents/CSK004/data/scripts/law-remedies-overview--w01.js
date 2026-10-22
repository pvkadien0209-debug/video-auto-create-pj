// law-remedies-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "law-remedies-overview--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "law-contract-remedies",
    "slug": "law-remedies-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Đối tác vi phạm hợp đồng thì công ty có những quyền gì?",
    "series": "Khi đối tác vi phạm — phạt, bồi thường, bất khả kháng và hoàn cảnh thay đổi cho người làm pháp chế"
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
            "fit": [
              "a-doc",
              "a-quote"
            ],
            "move": "cut",
            "zoom": 1.25
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "a-doc",
            "t": "illus",
            "name": "page-facing-up",
            "x": 80,
            "y": 60,
            "size": 260,
            "at": "l1"
          },
          {
            "id": "a-quote",
            "t": "text",
            "text": "“chịu trách nhiệm",
            "x": 380,
            "y": 80,
            "size": 60,
            "at": "l1:page",
            "hl": [
              {
                "text": "chịu trách nhiệm",
                "at": "l2:liability"
              }
            ]
          },
          {
            "id": "a-quote2",
            "t": "text",
            "text": "theo quy định pháp luật”",
            "x": 380,
            "y": 160,
            "size": 60,
            "at": "l2:law",
            "hl": [
              {
                "text": "theo quy định pháp luật",
                "at": "l2:law"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Phạt được bao nhiêu?",
            "x": 80,
            "y": 380,
            "size": 72,
            "at": "l3:how much",
            "color": "coral",
            "hl": [
              {
                "text": "bao nhiêu",
                "at": "l3:how much"
              }
            ]
          },
          {
            "id": "a-zero",
            "t": "text",
            "text": "Tiền phạt: chưa có căn cứ",
            "x": 80,
            "y": 500,
            "size": 56,
            "at": "l4:nothing",
            "color": "accent"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Theo Luật Thương mại 2005 (Chương VII) và Bộ luật Dân sự 2015",
            "x": 80,
            "y": 720,
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
          "say": "This is a supply contract. Page seven holds one lonely sentence.",
          "sub": "Đây là một hợp đồng mua nguyên liệu. Trang bảy có đúng một câu cô đơn.",
          "keys": [
            "một câu cô đơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The breaching party shall bear liability under the law.",
          "sub": "“Bên vi phạm phải chịu trách nhiệm theo quy định pháp luật.”",
          "keys": [
            "theo quy định pháp luật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Today the boss asks: how much can we fine them?",
          "sub": "Hôm nay sếp hỏi: phạt được bao nhiêu?",
          "keys": [
            "phạt được bao nhiêu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And this sentence answers: nothing you can count.",
          "sub": "Và câu này trả lời: chưa có con số nào để đòi.",
          "keys": [
            "chưa có con số nào"
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
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "page-facing-up",
                "hot-beverage"
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
            "caption": "8:00 thứ Hai · phòng pháp chế",
            "icon": "page-facing-up"
          },
          {
            "id": "a-anger",
            "t": "text",
            "text": "Giận quá mất khôn",
            "x": 80,
            "y": 600,
            "size": 56,
            "at": "l5:anger",
            "color": "coral",
            "hl": [
              {
                "text": "mất khôn",
                "at": "l5:anger"
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
          "say": "Meet Thảo. Four years in legal, tidy tables, a pen behind her ear.",
          "sub": "Đây là Thảo. Pháp chế bốn năm, bảng biểu ngăn nắp, bút luôn giắt tai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Cô Hoa, head of legal, carrying a question from the board.",
          "sub": "Còn đây là Cô Hoa, trưởng phòng pháp chế, mang câu hỏi từ Ban giám đốc xuống."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Batch two arrived late. The line stopped. How much can we fine them?",
          "sub": "Đợt hai giao chậm, dây chuyền phải dừng. Phạt được bao nhiêu? Rồi, vậy nha!",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Let me check on paper first, Cô.",
          "sub": "Để em tính trên giấy đã, cô.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The proverb says: anger makes you lose your wits. So Thảo opens the law first.",
          "sub": "Tục ngữ có câu: giận quá mất khôn. Nên Thảo mở luật trước.",
          "keys": [
            "giận quá mất khôn"
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
            "text": "Đối tác vi phạm: quyền gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:rights",
            "hl": [
              {
                "text": "quyền gì",
                "at": "l1:rights"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: phạt bao nhiêu",
            "x": 2028,
            "y": 150,
            "size": 46,
            "at": "l2:not",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:but"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: chọn đúng đồ nghề",
            "x": 2788,
            "y": 150,
            "size": 50,
            "at": "l2:toolbox",
            "color": "accent",
            "hl": [
              {
                "text": "đúng đồ nghề",
                "at": "l2:toolbox"
              }
            ]
          },
          {
            "id": "b-s0",
            "t": "text",
            "text": "1. Buộc thực hiện đúng",
            "x": 2028,
            "y": 250,
            "size": 46,
            "at": "l3:perform"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "2. Phạt vi phạm",
            "x": 2848,
            "y": 250,
            "size": 46,
            "at": "l3:penalty"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "3. Bồi thường thiệt hại",
            "x": 2028,
            "y": 325,
            "size": 46,
            "at": "l3:damages"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "4. Tạm ngừng",
            "x": 2848,
            "y": 325,
            "size": 46,
            "at": "l4:suspend"
          },
          {
            "id": "b-s4",
            "t": "text",
            "text": "5. Đình chỉ",
            "x": 2028,
            "y": 400,
            "size": 46,
            "at": "l4:stop"
          },
          {
            "id": "b-s5",
            "t": "text",
            "text": "6. Huỷ bỏ",
            "x": 2848,
            "y": 400,
            "size": 46,
            "at": "l4:cancel"
          },
          {
            "id": "b-other",
            "t": "text",
            "text": "+ biện pháp khác các bên thoả thuận",
            "x": 2028,
            "y": 500,
            "size": 42,
            "at": "l5:other",
            "color": "accent",
            "hl": [
              {
                "text": "các bên thoả thuận",
                "at": "l5:agree"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Luật Thương mại 2005, Điều 292",
            "x": 2028,
            "y": 570,
            "size": 28,
            "at": "l3",
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
          "say": "So the real question: when a partner breaches, what rights does your company have?",
          "sub": "Vậy câu hỏi thật là: đối tác vi phạm thì công ty có những quyền gì?",
          "keys": [
            "những quyền gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not how much to fine. But which tool to pick from the toolbox.",
          "sub": "Không phải phạt bao nhiêu. Mà là chọn đúng món trong hộp đồ nghề.",
          "keys": [
            "hộp đồ nghề"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article two nine two lists them: perform properly, penalty, damages.",
          "sub": "Điều 292 Luật Thương mại liệt kê: buộc thực hiện đúng, phạt vi phạm, bồi thường thiệt hại."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then suspend, stop, or cancel the contract.",
          "sub": "Rồi tạm ngừng, đình chỉ, huỷ bỏ hợp đồng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Plus other measures you agree, if they respect basic principles of the law.",
          "sub": "Cộng biện pháp khác các bên thoả thuận, miễn không trái nguyên tắc cơ bản của pháp luật.",
          "keys": [
            "các bên thoả thuận"
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
          },
          {
            "at": 150,
            "fit": [
              "b-g1",
              "b-g2"
            ],
            "zoom": 1.05,
            "ms": 800
          },
          {
            "at": "l4:end",
            "fit": "B",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "b-g1",
            "t": "box",
            "x": 2028,
            "y": 600,
            "w": 760,
            "h": 140,
            "at": "l1:keep",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "b-g1t",
            "t": "text",
            "text": "Giữ hợp đồng: 1 · 2 · 3",
            "x": 2058,
            "y": 620,
            "size": 48,
            "at": "l1:keep+200",
            "hl": [
              {
                "text": "Giữ hợp đồng",
                "at": "l1:keep"
              }
            ]
          },
          {
            "id": "b-g2",
            "t": "box",
            "x": 2848,
            "y": 600,
            "w": 780,
            "h": 140,
            "at": "l2:end",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "b-g2t",
            "t": "text",
            "text": "Dừng, xoá: 4 · 5 · 6",
            "x": 2878,
            "y": 620,
            "size": 48,
            "at": "l2:end+200",
            "color": "coral"
          },
          {
            "id": "b-293",
            "t": "text",
            "text": "Không cơ bản → cấm 4 · 5 · 6",
            "x": 2058,
            "y": 690,
            "size": 32,
            "at": "l4:minor",
            "hl": [
              {
                "text": "Không cơ bản",
                "at": "l4:minor"
              }
            ]
          },
          {
            "id": "b-293src",
            "t": "text",
            "text": "Điều 293",
            "x": 3468,
            "y": 690,
            "size": 28,
            "at": "l4",
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
          "say": "Two groups. One, two, three keep the contract alive.",
          "sub": "Hai nhóm. Món một, hai, ba giữ hợp đồng tiếp tục.",
          "keys": [
            "giữ hợp đồng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Four, five, six end it, or wipe it out. Much heavier.",
          "sub": "Món bốn, năm, sáu dừng hoặc xoá hợp đồng. Nặng hơn hẳn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So Article two nine three puts up a fence.",
          "sub": "Nên Điều 293 dựng một hàng rào."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "For a minor breach, no suspending, stopping or cancelling, unless agreed otherwise.",
          "sub": "Vi phạm không cơ bản thì không được tạm ngừng, đình chỉ, huỷ bỏ, trừ khi có thoả thuận khác.",
          "keys": [
            "Vi phạm không cơ bản"
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 9:00 · Buộc thực hiện đúng",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "pose": "phone"
                },
                {
                  "id": "lan",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "package",
                "delivery-truck"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:calls",
            "caption": "9:00 · gọi nhà cung cấp",
            "icon": "telephone-receiver"
          },
          {
            "id": "c-297",
            "t": "text",
            "text": "Giao đủ · sửa lỗi · giao thay",
            "x": 3996,
            "y": 170,
            "size": 44,
            "at": "l4:deliver",
            "hl": [
              {
                "text": "Giao đủ",
                "at": "l4:deliver"
              }
            ]
          },
          {
            "id": "c-cost",
            "t": "text",
            "text": "chi phí: bên vi phạm chịu",
            "x": 3996,
            "y": 240,
            "size": 42,
            "at": "l4:cost",
            "color": "muted"
          },
          {
            "id": "c-299",
            "t": "text",
            "text": "Trong lúc chờ: vẫn đòi",
            "x": 3996,
            "y": 330,
            "size": 46,
            "at": "l5:meanwhile"
          },
          {
            "id": "c-299b",
            "t": "text",
            "text": "phạt + bồi thường",
            "x": 3996,
            "y": 395,
            "size": 52,
            "at": "l5:penalty",
            "color": "accent",
            "hl": [
              {
                "text": "phạt + bồi thường",
                "at": "l5:penalty"
              }
            ]
          },
          {
            "id": "c-299c",
            "t": "text",
            "text": "Quá hạn → chế tài khác",
            "x": 3996,
            "y": 480,
            "size": 36,
            "at": "l6:deadline",
            "color": "coral"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Luật Thương mại 2005, Điều 297, 299",
            "x": 3996,
            "y": 560,
            "size": 28,
            "at": "l5",
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
          "say": "Stop one, nine o'clock. Thảo calls the supplier.",
          "sub": "Chặng một, chín giờ. Thảo gọi nhà cung cấp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Lan, their sales rep. Polite, smooth, always on the other side of the table.",
          "sub": "Đây là Lan, đại diện kinh doanh bên bán. Lịch sự, trơn tru, luôn ngồi phía bên kia bàn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Sorry, chị Thảo. We can deliver the rest next week.",
          "sub": "Em xin lỗi chị Thảo. Phần còn lại tuần sau bên em giao ạ.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That's tool one, Article two nine seven: deliver in full, fix defects, or replace, at their cost.",
          "sub": "Đó là món một, Điều 297: giao đủ, khắc phục khuyết tật, giao hàng thay thế; bên vi phạm chịu chi phí."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Meanwhile, Article two nine nine: you can still claim penalty and damages.",
          "sub": "Trong lúc chờ, Điều 299: vẫn được đòi phạt và bồi thường.",
          "keys": [
            "phạt và bồi thường"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Other tools wait, until the set deadline passes with nothing delivered.",
          "sub": "Chế tài khác thì chờ, đến khi hết thời hạn đã ấn định mà bên kia vẫn không giao."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s05",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "Đối tác vi phạm là bên mình được phạt",
        "right": "Chỉ phạt khi hợp đồng có thoả thuận phạt",
        "wrongIllus": "money-bag",
        "rightIllus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "They breached, so we fine them? A myth.",
          "sub": "Họ vi phạm là mình được phạt? Hiểu lầm."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Article three hundred: only if the contract agrees a penalty.",
          "sub": "Điều 300: chỉ khi hợp đồng có thoả thuận phạt.",
          "keys": [
            "có thoả thuận phạt"
          ]
        }
      ],
      "ref": "p4"
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
            "fit": [
              "c-lone",
              "c-rule"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-lone",
            "t": "text",
            "text": "“theo quy định pháp luật”",
            "x": 3996,
            "y": 600,
            "size": 44,
            "at": "l1:sentence",
            "color": "muted"
          },
          {
            "id": "c-lonex",
            "t": "strike",
            "over": "c-lone",
            "at": "l1:no rate"
          },
          {
            "id": "c-only",
            "t": "text",
            "text": "→ chỉ còn đòi bồi thường",
            "x": 3996,
            "y": 655,
            "size": 40,
            "at": "l2:only",
            "hl": [
              {
                "text": "bồi thường",
                "at": "l2:damages"
              }
            ]
          },
          {
            "id": "c-prove",
            "t": "text",
            "text": "phải chứng minh thiệt hại",
            "x": 3996,
            "y": 710,
            "size": 36,
            "at": "l3:prove",
            "color": "coral"
          },
          {
            "id": "c-rule",
            "t": "text",
            "text": "Không điều phạt, không tiền phạt",
            "x": 4836,
            "y": 700,
            "size": 38,
            "at": "l4:no penalty",
            "color": "accent",
            "hl": [
              {
                "text": "không tiền phạt",
                "at": "l4:nothing"
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
          "say": "Back to page seven. That sentence sets no rate, so it's not a penalty clause.",
          "sub": "Quay lại trang bảy. Câu ấy không nêu mức phạt nào, nên không phải thoả thuận phạt.",
          "keys": [
            "không phải thoả thuận phạt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Without one, only damages remain.",
          "sub": "Không có điều phạt thì chỉ còn đường đòi bồi thường."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And damages mean you must prove the loss.",
          "sub": "Mà bồi thường thì phải chứng minh thiệt hại.",
          "keys": [
            "chứng minh thiệt hại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No penalty clause written, no penalty money to claim. Nothing.",
          "sub": "Không viết điều phạt thì không có tiền phạt để đòi.",
          "keys": [
            "không có tiền phạt để đòi"
          ]
        }
      ],
      "ref": "p4,p5"
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
            "at": "l3",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 10:30 · Luật nào áp dụng?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:ten"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "balance-scale",
                "notebook"
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
            "at": "l1:which",
            "caption": "10:30 · bàn Thảo",
            "icon": "balance-scale"
          },
          {
            "id": "d-blds",
            "t": "text",
            "text": "Bộ luật Dân sự: luật chung",
            "x": 5964,
            "y": 160,
            "size": 46,
            "at": "l3:general"
          },
          {
            "id": "d-ltm",
            "t": "text",
            "text": "Luật Thương mại: áp trước",
            "x": 5964,
            "y": 230,
            "size": 46,
            "at": "l3:first",
            "color": "accent",
            "hl": [
              {
                "text": "áp trước",
                "at": "l3:first"
              }
            ]
          },
          {
            "id": "d-gap",
            "t": "text",
            "text": "BLDS chỉ lấp chỗ trống",
            "x": 5964,
            "y": 300,
            "size": 40,
            "at": "l4:gaps",
            "color": "muted"
          },
          {
            "id": "d-clash",
            "t": "text",
            "text": "Va nhất: mức phạt",
            "x": 5964,
            "y": 390,
            "size": 56,
            "at": "l5:penalty",
            "color": "coral",
            "hl": [
              {
                "text": "mức phạt",
                "at": "l5:penalty"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "LTM 2005, Điều 4 (theo bài phân tích công khai)",
            "x": 5964,
            "y": 470,
            "size": 26,
            "at": "l3",
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
          "say": "Stop two, ten thirty. Which law runs this contract?",
          "sub": "Chặng hai, mười giờ rưỡi. Luật nào điều chỉnh hợp đồng này?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Civil Code or Commercial Law? Both talk about contracts.",
          "sub": "Bộ luật Dân sự hay Luật Thương mại? Hai luật đều nói về hợp đồng.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The Civil Code is the general law. For trade, the Commercial Law applies first.",
          "sub": "Bộ luật Dân sự là luật chung. Hoạt động thương mại thì Luật Thương mại áp dụng trước.",
          "keys": [
            "áp dụng trước"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The Civil Code only fills the gaps.",
          "sub": "Bộ luật Dân sự chỉ dùng khi Luật Thương mại không quy định."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Where they clash hardest? The penalty level.",
          "sub": "Chỗ hai luật va nhau nhiều nhất? Mức phạt.",
          "keys": [
            "Mức phạt"
          ]
        }
      ],
      "ref": "p6"
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
            "fit": [
              "d-418",
              "d-86"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l3:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-418",
            "t": "text",
            "text": "BLDS: mức phạt do thoả thuận",
            "x": 5964,
            "y": 560,
            "size": 38,
            "at": "l1:agree",
            "hl": [
              {
                "text": "thoả thuận",
                "at": "l1:agree"
              }
            ]
          },
          {
            "id": "d-301",
            "t": "text",
            "text": "LTM: tối đa 8% phần vi phạm",
            "x": 5964,
            "y": 620,
            "size": 44,
            "at": "l2:eight",
            "color": "accent",
            "hl": [
              {
                "text": "8%",
                "at": "l2:eight"
              }
            ]
          },
          {
            "id": "d-86",
            "t": "text",
            "text": "Xây dựng: 12%, đầu tư công, PPP",
            "x": 5964,
            "y": 680,
            "size": 38,
            "at": "l3:twelve",
            "color": "coral",
            "hl": [
              {
                "text": "12%",
                "at": "l3:twelve"
              }
            ]
          },
          {
            "id": "d-src2",
            "t": "text",
            "text": "BLDS 2015, khoản 2 Điều 418 · LTM, Điều 301 · Luật Xây dựng 2025, Điều 86",
            "x": 5964,
            "y": 735,
            "size": 24,
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
          "say": "Civil Code, Article four one eight: the parties agree the penalty, unless another law says otherwise.",
          "sub": "Khoản 2 Điều 418 Bộ luật Dân sự: mức phạt do các bên thoả thuận, trừ khi luật liên quan quy định khác.",
          "keys": [
            "các bên thoả thuận"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Commercial Law, Article three oh one: at most eight percent of the breached part.",
          "sub": "Điều 301 Luật Thương mại: không quá 8% giá trị phần nghĩa vụ bị vi phạm.",
          "keys": [
            "8%"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Construction contracts: twelve percent, but only for public investment and PPP works.",
          "sub": "Hợp đồng xây dựng: Điều 86 Luật Xây dựng 2025, trần 12% chỉ cho dự án đầu tư công, dự án PPP.",
          "keys": [
            "12%"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s09",
      "module": "BRK-03",
      "data": {
        "value": 8,
        "suffix": "%",
        "label": "trần phạt Điều 301, tính trên phần nghĩa vụ bị vi phạm",
        "illus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One number every in-house lawyer remembers.",
          "sub": "Một con số pháp chế nào cũng nhớ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Eight percent. For now.",
          "sub": "Tám phần trăm. Tạm thời là vậy.",
          "keys": [
            "Tám phần trăm"
          ]
        }
      ],
      "ref": "p7"
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
            "at": "l4",
            "fit": [
              "e-news",
              "e-chk"
            ],
            "zoom": 1.1,
            "ms": 800
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
            "text": "③ 11:00 · Phạt rồi, còn bồi thường?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:eleven"
          },
          {
            "id": "e-blds",
            "t": "text",
            "text": "BLDS: chỉ thoả thuận phạt",
            "x": 7932,
            "y": 160,
            "size": 46,
            "at": "l2:only"
          },
          {
            "id": "e-blds2",
            "t": "text",
            "text": "→ chỉ chịu phạt",
            "x": 7992,
            "y": 225,
            "size": 46,
            "at": "l2:just",
            "color": "muted"
          },
          {
            "id": "e-ltm",
            "t": "text",
            "text": "LTM: có thoả thuận phạt",
            "x": 8752,
            "y": 160,
            "size": 46,
            "at": "l3:commercial"
          },
          {
            "id": "e-ltm2",
            "t": "text",
            "text": "→ phạt + bồi thường",
            "x": 8812,
            "y": 225,
            "size": 46,
            "at": "l3:both",
            "color": "accent",
            "hl": [
              {
                "text": "phạt + bồi thường",
                "at": "l3:both"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "BLDS 2015, khoản 3 Điều 418 · LTM 2005, Điều 307",
            "x": 7932,
            "y": 300,
            "size": 26,
            "at": "l2",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-cb",
            "t": "illus",
            "name": "classical-building",
            "x": 7932,
            "y": 380,
            "size": 150,
            "at": "l4:Assembly"
          },
          {
            "id": "e-news",
            "t": "text",
            "text": "Dự thảo: bỏ chương chế tài",
            "x": 8112,
            "y": 380,
            "size": 44,
            "at": "l4:remove",
            "color": "coral"
          },
          {
            "id": "e-news2",
            "t": "text",
            "text": "và bỏ trần 8%",
            "x": 8112,
            "y": 440,
            "size": 44,
            "at": "l4:cap",
            "color": "coral",
            "hl": [
              {
                "text": "bỏ trần 8%",
                "at": "l4:cap"
              }
            ]
          },
          {
            "id": "e-kh",
            "t": "text",
            "text": "Kỳ họp 17/10 – 21/11/2026",
            "x": 8112,
            "y": 510,
            "size": 40,
            "at": "l4:October"
          },
          {
            "id": "e-chk",
            "t": "text",
            "text": "Chưa thông qua: kiểm lại sau",
            "x": 8112,
            "y": 580,
            "size": 56,
            "at": "l5:check",
            "color": "accent",
            "hl": [
              {
                "text": "kiểm lại",
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
          "say": "Stop three, eleven o'clock. If you fine them, can you also claim damages?",
          "sub": "Chặng ba, mười một giờ. Đã phạt rồi, còn đòi bồi thường được không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Civil Code: agree only a penalty, and the breaching side just pays the penalty.",
          "sub": "Khoản 3 Điều 418 Bộ luật Dân sự: chỉ thoả thuận phạt thì bên vi phạm chỉ chịu phạt."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Commercial Law, Article three oh seven: with a penalty clause, you get both.",
          "sub": "Điều 307 Luật Thương mại: đã có thoả thuận phạt thì được áp dụng cả phạt và bồi thường.",
          "keys": [
            "cả phạt và bồi thường"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Twist: a draft law would remove the chapter and the cap. The Assembly sits October seventeen to November twenty-one.",
          "sub": "Khúc quanh: dự án luật sửa đổi có nội dung bỏ chương chế tài và trần 8%, đang được Quốc hội xem xét tại kỳ họp 17/10 đến 21/11/2026."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not passed yet. Check again after the session.",
          "sub": "Chưa thông qua khi viết bài. Cần kiểm lại sau kỳ họp.",
          "keys": [
            "kiểm lại sau kỳ họp"
          ]
        }
      ],
      "ref": "p8,p9"
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 13:30 · Nếu hợp đồng ghi 12%?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:thirty"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "page-facing-up",
                "balance-scale"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "lan",
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
            "at": "l1:meeting",
            "caption": "13:30 · phòng họp",
            "icon": "balance-scale"
          },
          {
            "id": "f-12",
            "t": "text",
            "text": "Hợp đồng ghi: 12%",
            "x": 60,
            "y": 1260,
            "size": 56,
            "at": "l1:twelve"
          },
          {
            "id": "f-8",
            "t": "text",
            "text": "Lan: tối đa 8%",
            "x": 60,
            "y": 1350,
            "size": 56,
            "at": "l2:eight",
            "color": "coral"
          },
          {
            "id": "f-who",
            "t": "text",
            "text": "Ai có lý hơn?",
            "x": 60,
            "y": 1450,
            "size": 60,
            "at": "l3:who",
            "hl": [
              {
                "text": "Ai có lý",
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
          "say": "Stop four, one thirty, a meeting with Lan. Thảo asks: what if the contract had said twelve percent?",
          "sub": "Chặng bốn, một rưỡi chiều, họp với Lan. Thảo hỏi thử: nếu hợp đồng ghi phạt 12% thì sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Then we'd still pay eight percent at most, chị.",
          "sub": "Thì bên em cũng chỉ chịu tối đa 8% thôi chị.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Who's right? Let me check on paper first.",
          "sub": "Ai có lý hơn đây? Để em tính trên giấy đã.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two businesses trading goods: usually commercial, so Article three oh one gets cited.",
          "sub": "Hai doanh nghiệp mua bán hàng để kinh doanh thường là hoạt động thương mại, nên Điều 301 hay được viện dẫn."
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s12",
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
              "f-cut",
              "f-ask"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-void",
            "t": "text",
            "text": "Vô hiệu cả điều phạt?",
            "x": 60,
            "y": 1560,
            "size": 46,
            "at": "l1:void",
            "color": "muted"
          },
          {
            "id": "f-voidx",
            "t": "strike",
            "over": "f-void",
            "at": "l1:only"
          },
          {
            "id": "f-cut",
            "t": "text",
            "text": "Chỉ bỏ phần vượt 8%",
            "x": 60,
            "y": 1630,
            "size": 56,
            "at": "l1:above",
            "color": "accent",
            "hl": [
              {
                "text": "phần vượt 8%",
                "at": "l1:above"
              }
            ]
          },
          {
            "id": "f-lan",
            "t": "text",
            "text": "→ Lan có cơ sở hơn",
            "x": 60,
            "y": 1710,
            "size": 40,
            "at": "l2:stronger"
          },
          {
            "id": "f-ask",
            "t": "text",
            "text": "Trước khi viết mức phạt: luật nào?",
            "x": 60,
            "y": 1780,
            "size": 42,
            "at": "l3:which law",
            "color": "coral",
            "hl": [
              {
                "text": "luật nào",
                "at": "l3:which law"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Theo các bài phân tích công khai về thực tiễn giải quyết tranh chấp",
            "x": 60,
            "y": 1830,
            "size": 24,
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
          "say": "Dispute bodies usually don't void the whole clause. They only refuse the part above eight percent.",
          "sub": "Cơ quan giải quyết tranh chấp thường không tuyên vô hiệu toàn bộ, chỉ không công nhận phần vượt 8%.",
          "keys": [
            "phần vượt 8%"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So Lan has the stronger case, while the law stays unchanged.",
          "sub": "Vậy phía Lan có cơ sở hơn, khi luật chưa sửa."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Before writing any rate, ask: which law governs this contract?",
          "sub": "Trước khi viết mức phạt, hãy hỏi: luật nào điều chỉnh hợp đồng này?",
          "keys": [
            "luật nào điều chỉnh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Back at the office waits Dũng, Thảo's desk mate. Five years in legal, zero patience.",
          "sub": "Về phòng, Dũng đang chờ. Đồng nghiệp ngồi cạnh Thảo, pháp chế năm năm, kiên nhẫn bằng không."
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s13",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "14:30 · phòng pháp chế",
        "actors": [
          {
            "id": "dung",
            "side": "left",
            "pose": "explain"
          },
          {
            "id": "thao",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Gửi ngay thông báo huỷ hợp đồng",
          "why": "Phải chứng minh vi phạm cơ bản; huỷ sai căn cứ thì chính mình thành bên vi phạm.",
          "rule": "Đòi giao bù, bảo lưu quyền đòi tiền"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "They're late? Send a cancellation notice now. Okay, let's go!",
          "sub": "Giao chậm hả? Gửi luôn thông báo huỷ hợp đồng. Ok, làm luôn!",
          "face": "happy",
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
          "say": "Cancel without a proven fundamental breach, and you become the breaching party.",
          "sub": "Huỷ mà không chứng minh được vi phạm cơ bản thì chính mình thành bên vi phạm.",
          "keys": [
            "chính mình thành bên vi phạm"
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
          "say": "We need these goods. Demand delivery by a reasonable deadline, and reserve our claims.",
          "sub": "Mình cần hàng. Đòi giao bù trong thời hạn hợp lý, bảo lưu quyền đòi phạt, bồi thường.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Goods kept, claims alive, more grounds if they fail again.",
          "sub": "Giữ được hàng, quyền đòi tiền còn nguyên, thêm căn cứ nếu họ lại không giao.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "quyền đòi tiền còn nguyên"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p14"
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
            "at": "l4:end",
            "fit": [
              "g-n2",
              "g-c2"
            ],
            "zoom": 1.15,
            "ms": 800
          },
          {
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 15:00 · Công ty cần gì?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:three",
            "hl": [
              {
                "text": "cần gì",
                "at": "l1:need"
              }
            ]
          },
          {
            "id": "g-tb",
            "t": "illus",
            "name": "toolbox",
            "x": 3168,
            "y": 1110,
            "size": 170,
            "at": "l1:need"
          },
          {
            "id": "g-n0",
            "t": "text",
            "text": "Cần hàng",
            "x": 2028,
            "y": 1260,
            "size": 56,
            "at": "l2:goods",
            "color": "accent"
          },
          {
            "id": "g-c0",
            "t": "text",
            "text": "→ buộc thực hiện đúng + gia hạn",
            "x": 2488,
            "y": 1272,
            "size": 44,
            "at": "l2:goods+400"
          },
          {
            "id": "g-n1",
            "t": "text",
            "text": "Cần tiền bù",
            "x": 2028,
            "y": 1410,
            "size": 56,
            "at": "l3:money",
            "color": "accent"
          },
          {
            "id": "g-c1",
            "t": "text",
            "text": "→ phạt (nếu có) · bồi thường",
            "x": 2488,
            "y": 1422,
            "size": 44,
            "at": "l3:money+400"
          },
          {
            "id": "g-n2",
            "t": "text",
            "text": "Cần thoát",
            "x": 2028,
            "y": 1560,
            "size": 56,
            "at": "l4:out",
            "color": "coral"
          },
          {
            "id": "g-c2",
            "t": "text",
            "text": "→ tạm ngừng · đình chỉ · huỷ",
            "x": 2488,
            "y": 1572,
            "size": 44,
            "at": "l4:out+400"
          },
          {
            "id": "g-cond",
            "t": "text",
            "text": "cần vi phạm cơ bản",
            "x": 2488,
            "y": 1645,
            "size": 40,
            "at": "l5:fundamental",
            "color": "coral"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "LTM 2005, Điều 297, 298, 308, 310, 312",
            "x": 2968,
            "y": 1690,
            "size": 26,
            "at": "l2",
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
          "say": "Stop five, three o'clock. Start with one question: what does the company need?",
          "sub": "Chặng năm, ba giờ chiều. Bắt đầu từ một câu hỏi: công ty cần gì?",
          "keys": [
            "công ty cần gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Need the goods? Specific performance, plus a reasonable extension.",
          "sub": "Cần hàng: buộc thực hiện đúng, gia hạn một thời gian hợp lý."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Need money back? A penalty if agreed, damages if you can prove loss.",
          "sub": "Cần tiền bù: phạt nếu có thoả thuận, bồi thường nếu chứng minh được thiệt hại."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Need out? Suspend, stop or cancel.",
          "sub": "Cần thoát khỏi đối tác: tạm ngừng, đình chỉ hoặc huỷ bỏ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "But those need a fundamental breach, or a trigger both sides agreed.",
          "sub": "Nhưng phải có vi phạm cơ bản, hoặc hành vi các bên đã thoả thuận là điều kiện.",
          "keys": [
            "vi phạm cơ bản"
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
            "fit": "G",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": [
              "g-316",
              "g-428"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l3",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-316",
            "t": "text",
            "text": "Đi cùng nhau: vẫn đòi bồi thường",
            "x": 2028,
            "y": 1740,
            "size": 38,
            "at": "l1:together",
            "hl": [
              {
                "text": "đòi bồi thường",
                "at": "l1:damages"
              }
            ]
          },
          {
            "id": "g-428",
            "t": "text",
            "text": "Sai căn cứ → thành bên vi phạm",
            "x": 2028,
            "y": 1795,
            "size": 38,
            "at": "l2:wrong",
            "color": "coral"
          },
          {
            "id": "g-calm",
            "t": "text",
            "text": "Theo việc cần, không theo giận",
            "x": 2968,
            "y": 1740,
            "size": 36,
            "at": "l3:anger",
            "color": "accent",
            "hl": [
              {
                "text": "không theo giận",
                "at": "l3:anger"
              }
            ]
          },
          {
            "id": "g-src2",
            "t": "text",
            "text": "LTM, Điều 316 · BLDS, khoản 5 Điều 428",
            "x": 2968,
            "y": 1810,
            "size": 24,
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
          "say": "Tools can travel together. Article three one six: using one doesn't cost you damages.",
          "sub": "Các chế tài đi cùng nhau được. Điều 316: dùng chế tài khác vẫn không mất quyền đòi bồi thường.",
          "keys": [
            "không mất quyền đòi bồi thường"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But under the Civil Code, ending a contract on the wrong grounds makes you the breaching party.",
          "sub": "Nhưng theo khoản 5 Điều 428 Bộ luật Dân sự, đơn phương chấm dứt không đúng căn cứ thì thành bên vi phạm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Choose by what the company needs, not by anger.",
          "sub": "Chọn chế tài theo điều công ty cần, không theo cơn giận.",
          "keys": [
            "không theo cơn giận"
          ]
        }
      ],
      "ref": "p13,p15"
    },
    {
      "id": "s16",
      "module": "BRK-07",
      "data": {
        "question": "Đối tác nói “bất khả kháng” thì sao?",
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
          "say": "What if the partner says: force majeure?",
          "sub": "Nếu đối tác nói: bất khả kháng thì sao?",
          "keys": [
            "bất khả kháng"
          ]
        }
      ],
      "ref": "p16"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 16:00 · Khi nào được miễn?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:four"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "pose": "phone"
                },
                {
                  "id": "lan",
                  "pose": "think"
                }
              ],
              "props": [
                "warning",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "lan",
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
            "at": "l1:calls",
            "caption": "16:00 · Lan gọi lại",
            "icon": "telephone-receiver"
          },
          {
            "id": "h-294",
            "t": "text",
            "text": "Miễn trách nhiệm khi:",
            "x": 3996,
            "y": 1250,
            "size": 48,
            "at": "l4:exemptions"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "• các bên đã thoả thuận",
            "x": 3996,
            "y": 1315,
            "size": 40,
            "at": "l4:agreed"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "• sự kiện bất khả kháng",
            "x": 3996,
            "y": 1370,
            "size": 40,
            "at": "l4:force",
            "hl": [
              {
                "text": "bất khả kháng",
                "at": "l4:force"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "• lỗi hoàn toàn của bên kia",
            "x": 3996,
            "y": 1425,
            "size": 40,
            "at": "l5:entirely"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "• quyết định nhà nước không biết trước",
            "x": 3996,
            "y": 1480,
            "size": 36,
            "at": "l5:state"
          },
          {
            "id": "h-who",
            "t": "text",
            "text": "Bên vi phạm phải chứng minh",
            "x": 3996,
            "y": 1560,
            "size": 46,
            "at": "l6:burden",
            "color": "accent",
            "hl": [
              {
                "text": "phải chứng minh",
                "at": "l6:burden"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Luật Thương mại 2005, Điều 294",
            "x": 3996,
            "y": 1630,
            "size": 26,
            "at": "l4",
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
          "say": "Stop six, four o'clock. Lan calls back.",
          "sub": "Chặng sáu, bốn giờ chiều. Lan gọi lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Chị Thảo, if it were force majeure, we'd be exempt, right?",
          "sub": "Chị Thảo, nếu là bất khả kháng thì bên em được miễn, đúng không chị?",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Possibly. But you'd have to prove it.",
          "sub": "Có thể. Nhưng bên em phải chứng minh.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article two nine four lists exemptions: cases both sides agreed, and force majeure.",
          "sub": "Điều 294 nêu các trường hợp miễn trách: trường hợp các bên đã thoả thuận, sự kiện bất khả kháng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A breach caused entirely by the other side, or a state decision nobody could foresee at signing.",
          "sub": "Vi phạm hoàn toàn do lỗi bên kia, hoặc do thực hiện quyết định của cơ quan nhà nước mà không thể biết khi giao kết."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And the breaching party carries the burden of proof.",
          "sub": "Và bên vi phạm có nghĩa vụ chứng minh.",
          "keys": [
            "nghĩa vụ chứng minh"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 500
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
            "fit": "H",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": [
              "h-420",
              "h-keep"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-420",
            "t": "text",
            "text": "Hoàn cảnh thay đổi cơ bản:",
            "x": 3996,
            "y": 1680,
            "size": 44,
            "at": "l1:circumstances",
            "color": "coral"
          },
          {
            "id": "h-420b",
            "t": "text",
            "text": "vẫn làm được, nhưng quá bất lợi",
            "x": 3996,
            "y": 1735,
            "size": 38,
            "at": "l1:unfair"
          },
          {
            "id": "h-keep",
            "t": "text",
            "text": "Đàm phán lại, vẫn thực hiện",
            "x": 3996,
            "y": 1790,
            "size": 40,
            "at": "l2:keeps",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn thực hiện",
                "at": "l2:keeps"
              }
            ]
          },
          {
            "id": "h-src2",
            "t": "text",
            "text": "Bộ luật Dân sự 2015, Điều 420",
            "x": 4836,
            "y": 1825,
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
          "say": "A fundamental change of circumstances is different: still possible, just very unfair to one side.",
          "sub": "Hoàn cảnh thay đổi cơ bản theo Điều 420 là chuyện khác: hợp đồng vẫn làm được, nhưng quá bất lợi cho một bên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That side may ask to renegotiate. Meanwhile, everyone keeps performing.",
          "sub": "Bên đó được yêu cầu đàm phán lại, còn trong lúc đó các bên vẫn phải tiếp tục thực hiện.",
          "keys": [
            "vẫn phải tiếp tục thực hiện"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Both get their own lessons later in the series.",
          "sub": "Hai chuyện này có bài riêng trong chuỗi."
        }
      ],
      "ref": "p17"
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
            "at": "l5",
            "fit": [
              "i-gap",
              "i-row"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l6",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 17:00 · Bảng chế tài",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:five",
            "hl": [
              {
                "text": "Bảng chế tài",
                "at": "l1:table"
              }
            ]
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1250,
            "w": 310,
            "h": 90,
            "at": "l2:breach",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "i-ct0",
            "t": "text",
            "text": "Vi phạm",
            "x": 5984,
            "y": 1265,
            "size": 42,
            "at": "l2:breach+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 6294,
            "y": 1250,
            "w": 310,
            "h": 90,
            "at": "l2:remedy",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "i-ct1",
            "t": "text",
            "text": "Chế tài",
            "x": 6314,
            "y": 1265,
            "size": 42,
            "at": "l2:remedy+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 6624,
            "y": 1250,
            "w": 310,
            "h": 90,
            "at": "l3:ground",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "i-ct2",
            "t": "text",
            "text": "Căn cứ",
            "x": 6644,
            "y": 1265,
            "size": 42,
            "at": "l3:ground+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 6954,
            "y": 1250,
            "w": 310,
            "h": 90,
            "at": "l3:rate",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "i-ct3",
            "t": "text",
            "text": "Mức [ ]%",
            "x": 6974,
            "y": 1265,
            "size": 42,
            "at": "l3:rate+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 7284,
            "y": 1250,
            "w": 310,
            "h": 90,
            "at": "l4:notice",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "i-ct4",
            "t": "text",
            "text": "Thông báo",
            "x": 7304,
            "y": 1265,
            "size": 42,
            "at": "l4:notice+200"
          },
          {
            "id": "i-row",
            "t": "text",
            "text": "chậm · thiếu · sai chất lượng · chậm trả",
            "x": 5964,
            "y": 1380,
            "size": 34,
            "at": "l2:late",
            "color": "muted"
          },
          {
            "id": "i-chk",
            "t": "text",
            "text": "kiểm với trần đang áp dụng",
            "x": 6954,
            "y": 1360,
            "size": 30,
            "at": "l3:cap",
            "color": "coral"
          },
          {
            "id": "i-who",
            "t": "text",
            "text": "ai gửi · bao lâu · hình thức",
            "x": 6954,
            "y": 1420,
            "size": 30,
            "at": "l4:who"
          },
          {
            "id": "i-gap",
            "t": "box",
            "x": 5964,
            "y": 1510,
            "w": 330,
            "h": 110,
            "at": "l5:empty",
            "stroke": 6,
            "color": "coral"
          },
          {
            "id": "i-gapt",
            "t": "text",
            "text": "ô trống?",
            "x": 6004,
            "y": 1530,
            "size": 52,
            "at": "l5:empty+200",
            "color": "coral"
          },
          {
            "id": "i-gapr",
            "t": "text",
            "text": "= chỗ hợp đồng đang viết lỏng",
            "x": 6334,
            "y": 1540,
            "size": 48,
            "at": "l5:loose",
            "hl": [
              {
                "text": "viết lỏng",
                "at": "l5:loose"
              }
            ]
          },
          {
            "id": "i-rule",
            "t": "text",
            "text": "Mỗi vi phạm: đủ một dòng",
            "x": 5964,
            "y": 1690,
            "size": 56,
            "at": "l6:row",
            "color": "accent",
            "hl": [
              {
                "text": "đủ một dòng",
                "at": "l6:row"
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
          "say": "Stop seven, five o'clock. Thảo builds a remedies table.",
          "sub": "Chặng bảy, năm giờ chiều. Thảo dựng bảng chế tài."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Column one, each breach: late, short, poor quality, late payment. Column two, the remedy.",
          "sub": "Cột vi phạm: giao chậm, giao thiếu, sai chất lượng, chậm thanh toán. Cột chế tài muốn dùng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then the legal ground, and the rate, checked against the current cap.",
          "sub": "Rồi cột căn cứ: điều khoản và điều luật. Cột mức phạt, kiểm với trần đang áp dụng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Last, the notice: who sends it, how fast, in what form.",
          "sub": "Cuối cùng cột thông báo: ai gửi, trong bao lâu, bằng hình thức nào."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Any empty cell shows where the contract is loose.",
          "sub": "Ô nào trống là chỗ hợp đồng đang viết lỏng.",
          "face": "thinking",
          "keys": [
            "viết lỏng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Every breach needs a full row: remedy, ground, rate, notice.",
          "sub": "Mỗi vi phạm cần một dòng đủ chế tài, căn cứ, mức và thông báo.",
          "keys": [
            "một dòng đủ"
          ]
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s20",
      "module": "BRK-08",
      "data": {
        "title": "Chuỗi bài đi đâu tiếp?",
        "current": 0,
        "points": [
          {
            "label": "Soạn",
            "sub": "Trần 8% · bồi thường",
            "illus": "memo"
          },
          {
            "label": "Ngoài tầm tay",
            "sub": "Bất khả kháng · đàm phán lại",
            "illus": "warning"
          },
          {
            "label": "Hành động",
            "sub": "Huỷ · thư đòi · thời hạn",
            "illus": "stop-sign"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Next, drafting: the cap, damages, both together.",
          "sub": "Tiếp theo, chặng soạn: trần 8%, bồi thường, phạt cộng bồi thường."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Then risks beyond control.",
          "sub": "Rồi rủi ro ngoài tầm tay: bất khả kháng, hoàn cảnh thay đổi."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Then action, where deadlines decide if a right survives.",
          "sub": "Rồi hành động, nơi thời hạn quyết định quyền còn hay mất.",
          "keys": [
            "quyền còn hay mất"
          ]
        }
      ],
      "ref": "p18,p19"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "17:30 · Cùng trang bảy ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:same"
          },
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
                  "id": "thao",
                  "side": "left",
                  "pose": "give",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "page-facing-up",
                "clipboard"
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
                  "shot": "E-SHOT-10",
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
            "at": "l1:same",
            "caption": "17:30 · phòng pháp chế",
            "icon": "clipboard"
          },
          {
            "id": "j-q",
            "t": "text",
            "text": "Phạt được bao nhiêu?",
            "x": 7932,
            "y": 1260,
            "size": 56,
            "at": "l4:how much",
            "color": "muted"
          },
          {
            "id": "j-qx",
            "t": "strike",
            "over": "j-q",
            "at": "l4:but"
          },
          {
            "id": "j-a",
            "t": "text",
            "text": "Cần gì → chọn món nào",
            "x": 7932,
            "y": 1350,
            "size": 60,
            "at": "l4:need",
            "color": "accent",
            "hl": [
              {
                "text": "chọn món nào",
                "at": "l4:which"
              }
            ]
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Mẫu mới: điều phạt có mức",
            "x": 7932,
            "y": 1460,
            "size": 46,
            "at": "l3:rate",
            "hl": [
              {
                "text": "có mức",
                "at": "l3:rate"
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
          "say": "Five thirty. Same office, same page seven, now with a table clipped on top.",
          "sub": "Năm rưỡi chiều. Vẫn phòng ấy, vẫn trang bảy ấy, giờ kẹp thêm một bảng chế tài."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Cô, no penalty this time. We demand delivery, reserve our claims, and prove the loss.",
          "sub": "Cô ơi, lần này không có tiền phạt. Mình đòi giao bù, bảo lưu quyền, và chứng minh thiệt hại.",
          "face": "happy",
          "to": "hoa"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "And the new template gets a penalty clause with a rate. Okay!",
          "sub": "Còn mẫu hợp đồng mới phải có điều phạt ghi rõ mức. Rồi, vậy nha!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "How much to fine? But first: what do we need, and which tool fits. Anger loses, the table wins.",
          "sub": "Phạt được bao nhiêu? Trước hết: cần gì, chọn món nào. Giận quá mất khôn, bảng chế tài mới khôn.",
          "keys": [
            "chọn món nào"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
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
            "at": "l1",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "D",
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
            "x": 5496,
            "y": 30,
            "at": "l1"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7464,
            "y": 30,
            "at": "l2"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3528,
            "y": 1120,
            "at": "l3"
          },
          {
            "id": "z-src-note",
            "t": "text",
            "text": "Kiến thức nghề tham khảo, không phải tư vấn cho vụ việc cụ thể. Luật Thương mại đang sửa đổi; kiểm lại sau kỳ họp.",
            "x": 7932,
            "y": 1790,
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
          "say": "Step back. No penalty clause, no penalty.",
          "sub": "Lùi lại. Không có thoả thuận phạt thì không có tiền phạt.",
          "keys": [
            "không có tiền phạt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Check which law first: eight percent, or what the parties agree.",
          "sub": "Hỏi luật nào trước: trần 8%, hay mức do các bên thoả thuận.",
          "keys": [
            "luật nào trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And pick the tool by need, not by anger.",
          "sub": "Và chọn chế tài theo điều công ty cần, không theo cơn giận.",
          "keys": [
            "không theo cơn giận"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p5,p11,p15"
    },
    {
      "id": "s23",
      "module": "QUIZ-01",
      "data": {
        "q": "Why is a sentence saying the breaching party bears liability under law not a penalty clause?",
        "options": [
          "It is written in Vietnamese, and penalty clauses must always be in English",
          "It mentions the law, which automatically cancels any penalty the parties agreed",
          "It sets no agreed sum or rate, so there is no penalty to claim"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "page-facing-up",
        "why": "Câu “chịu trách nhiệm theo quy định pháp luật” không nêu mức phạt nào, nên không phải thoả thuận phạt theo Điều 300."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why is a sentence saying the breaching party bears liability under law not a penalty clause?",
          "sub": "Vì sao câu “bên vi phạm chịu trách nhiệm theo quy định pháp luật” không phải điều phạt?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "It sets no agreed sum or rate, so there is no penalty to claim.",
          "sub": "Vì nó không nêu số tiền hay tỷ lệ nào, nên không có tiền phạt để đòi."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Article three hundred: a penalty needs an agreement.",
          "sub": "Điều 300: phạt cần có thoả thuận."
        }
      ],
      "beats": {
        "after": 800
      },
      "ref": "questions[8]"
    },
    {
      "id": "s24",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: dựng bảng chế tài cho hợp đồng vừa bị giao chậm",
        "sub": "Bài sau: trần phạt 8% tính trên cái gì?"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, take the late contract, build the table, and mark every empty cell.",
          "sub": "Hôm nay, lấy hợp đồng vừa bị giao chậm, dựng bảng chế tài và đánh dấu mọi ô trống.",
          "face": "laugh",
          "keys": [
            "đánh dấu mọi ô trống"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "General knowledge, not advice for your case. The Commercial Law is being amended; check after the session.",
          "sub": "Kiến thức nghề tham khảo, không phải tư vấn cho vụ việc cụ thể. Luật Thương mại đang sửa đổi, kiểm lại sau kỳ họp."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI, dựng theo hạt nhân #136 + biến thể #144 (bang-trang-kit). HOOK-23 đồ vật: trang bảy hợp đồng với câu “chịu trách nhiệm theo quy định pháp luật” (intro, p4) → trở lại ở khép vòng kẹp bảng chế tài. Dòng thời gian: MỘT NGÀY THỨ HAI đợt hai giao chậm — A 8:00 Cô Hoa hỏi “phạt được bao nhiêu?”, B câu hỏi chính + Điều 292 sáu món + hai nhóm, Điều 293 (p1–p2), C ① 9:00 gọi Lan: buộc thực hiện đúng (p3) + BRK-04 hiểu lầm phạt (p4–p5), D ② 10:30 luật nào (p6–p7) + BRK-03 8%, E ③ 11:00 phạt + bồi thường, luật đang sửa (p8–p9), F ④ 13:30 Lan “chỉ chịu 8%” (p10–p11), Khoan đã! 14:30 Dũng huỷ ngay → Cách B (p14), G ⑤ 15:00 công ty cần gì (p12–p13, p15), BRK-07 rehook, H ⑥ 16:00 Lan hỏi bất khả kháng: Điều 294, Điều 420 (p16–p17), I ⑦ 17:00 bảng chế tài (p20–p21), BRK-08 lộ trình chuỗi (p18–p19), J 17:30 khép vòng. Nhân vật theo w145/_series/law-contract-remedies.md (Thảo, Cô Hoa, Dũng, Lan — 4 người). Không nêu tên hãng luật/tạp chí: “theo các bài phân tích công khai”. Số/điều chỉ từ bài: LTM Điều 4, 292, 293, 294, 297, 298, 299, 300, 301, 307, 308, 310, 312, 316; BLDS Điều 418 (k2, k3), 420, 428 (k5); Luật Xây dựng 2025 Điều 86 (12%); kỳ họp 17/10–21/11/2026. Lưu ý chung (#133) ở tóm tắt + END. Câu đố questions[8].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
