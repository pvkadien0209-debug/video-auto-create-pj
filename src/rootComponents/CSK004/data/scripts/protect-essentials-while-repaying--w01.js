// protect-essentials-while-repaying--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "protect-essentials-while-repaying--w01",
  "unit": {
    "audience": "families-in-debt-trouble",
    "slug": "protect-essentials-while-repaying",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Vừa trả nợ vừa giữ tiền học, tiền ăn của con: chia ngân sách ra sao?",
    "series": "Gỡ nợ mà giữ được nhà — cho gia đình có con nhỏ đang gánh nhiều khoản vay"
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
          }
        ],
        "items": [
          {
            "id": "a-p1",
            "t": "text",
            "text": "Lương về chia đủ ba ngăn",
            "x": 60,
            "y": 90,
            "size": 80,
            "at": "l1:salary",
            "color": "accent",
            "hl": [
              {
                "text": "ba ngăn",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "a-p2",
            "t": "text",
            "text": "Con ăn con học,",
            "x": 100,
            "y": 220,
            "size": 72,
            "at": "l2:food"
          },
          {
            "id": "a-p3",
            "t": "text",
            "text": "nợ nần theo sau",
            "x": 160,
            "y": 320,
            "size": 72,
            "at": "l2:debts",
            "hl": [
              {
                "text": "theo sau",
                "at": "l2:after"
              }
            ]
          },
          {
            "id": "a-p4",
            "t": "text",
            "text": "(thơ cóc tự chế, không phải luật)",
            "x": 60,
            "y": 440,
            "size": 38,
            "at": "l3:homemade",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "When the salary comes, split it into three.",
          "sub": "“Lương về chia đủ ba ngăn,”",
          "keys": [
            "ba ngăn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Kids' food and school first, debts come after.",
          "sub": "“Con ăn con học, nợ nần theo sau.”",
          "keys": [
            "Con ăn con học"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A homemade rhyme, not a law. But it holds up surprisingly well.",
          "sub": "Thơ cóc tự chế, không phải luật. Nhưng hoá ra khá vững."
        }
      ],
      "beats": {
        "after": 400
      },
      "ref": "p1"
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
            "at": "l6",
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone",
                  "face": "worried",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "money-bag",
                "mobile-phone",
                "school"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "thao",
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
            "caption": "Ngày lương về · ở nhà",
            "icon": "money-bag"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Dồn hết cho nợ → con thiệt",
            "x": 60,
            "y": 540,
            "size": 44,
            "at": "l4:debts first",
            "color": "coral"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "Giữ lại → sợ trễ hạn",
            "x": 60,
            "y": 610,
            "size": 44,
            "at": "l5:late",
            "color": "muted"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Liệu cơm gắp mắm”",
            "x": 920,
            "y": 650,
            "size": 50,
            "at": "l6:rice",
            "color": "accent",
            "hl": [
              {
                "text": "Liệu cơm",
                "at": "l6:rice"
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
          "say": "Meet Thảo, the family's chief accountant. Unpaid.",
          "sub": "Đây là Thảo, kế toán trưởng của gia đình. Không lương.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Dũng, her husband, who prefers not to open the banking app.",
          "sub": "Và Dũng, chồng Thảo, người ngại mở app ngân hàng.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Payday. The money is barely warm, and three or four payments are due. Bin's school fees too.",
          "sub": "Lương vừa về, tiền chưa kịp ấm đã ba bốn khoản đến hạn. Còn học phí của Bin nữa.",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Then pay all the debts first. Done!",
          "sub": "Thì trả hết nợ trước. Xong!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "And Bin eats what? But if I hold back, we're late.",
          "sub": "Rồi Bin ăn gì? Mà giữ lại thì sợ trễ hạn.",
          "face": "worried"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: check the rice before you take the fish sauce.",
          "sub": "Ông bà dặn: “Liệu cơm gắp mắm.”",
          "keys": [
            "Liệu cơm gắp mắm"
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
      "module": "BRK-02",
      "data": {
        "kicker": "Ý chính",
        "title": "Ba ngăn cho một đồng lương",
        "hl": "Ba ngăn",
        "sub": "Thiết yếu · trả nợ cố định · phần còn lại"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three compartments for one salary.",
          "sub": "Ba ngăn cho một đồng lương.",
          "keys": [
            "Ba ngăn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Essentials, fixed payments, everything else.",
          "sub": "Thiết yếu, trả nợ cố định, phần còn lại."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "text": "Trả nợ mà vẫn giữ phần con?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:question",
            "hl": [
              {
                "text": "giữ phần con",
                "at": "l1:protect"
              }
            ]
          },
          {
            "id": "b-x0",
            "t": "box",
            "x": 2028,
            "y": 180,
            "w": 520,
            "h": 200,
            "at": "l3:One",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "b-xt0",
            "t": "text",
            "text": "1 · Thiết yếu",
            "x": 2058,
            "y": 200,
            "size": 50,
            "at": "l3:One+300",
            "color": "accent"
          },
          {
            "id": "b-xs0",
            "t": "text",
            "text": "cả nhà, của con",
            "x": 2058,
            "y": 290,
            "size": 42,
            "at": "l3:One+600",
            "color": "muted"
          },
          {
            "id": "b-x1",
            "t": "box",
            "x": 2588,
            "y": 180,
            "w": 520,
            "h": 200,
            "at": "l4:Two",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "b-xt1",
            "t": "text",
            "text": "2 · Trả nợ cố định",
            "x": 2618,
            "y": 200,
            "size": 50,
            "at": "l4:Two+300"
          },
          {
            "id": "b-xs1",
            "t": "text",
            "text": "đúng hạn",
            "x": 2618,
            "y": 290,
            "size": 42,
            "at": "l4:Two+600",
            "color": "muted"
          },
          {
            "id": "b-x2",
            "t": "box",
            "x": 3148,
            "y": 180,
            "w": 520,
            "h": 200,
            "at": "l5:Three",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "b-xt2",
            "t": "text",
            "text": "3 · Phần còn lại",
            "x": 3178,
            "y": 200,
            "size": 50,
            "at": "l5:Three+300",
            "color": "coral"
          },
          {
            "id": "b-xs2",
            "t": "text",
            "text": "chỗ cắt",
            "x": 3178,
            "y": 290,
            "size": 42,
            "at": "l5:Three+600",
            "color": "muted"
          },
          {
            "id": "b-cut",
            "t": "text",
            "text": "Cắt ngăn 3, dồn lên trên",
            "x": 2028,
            "y": 440,
            "size": 48,
            "at": "l5:cut",
            "hl": [
              {
                "text": "Cắt ngăn 3",
                "at": "l5:cut"
              }
            ]
          },
          {
            "id": "b-nx",
            "t": "text",
            "text": "Lập ngân sách bốn bước: chuỗi khác",
            "x": 2028,
            "y": 560,
            "size": 38,
            "at": "l6:four",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So the question: how do you repay debts and still protect the kids' food and school money?",
          "sub": "Vậy câu hỏi: trả nợ thế nào mà vẫn giữ được tiền ăn, tiền học của con?",
          "keys": [
            "giữ được tiền ăn, tiền học"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Split each month's income into three compartments, in order.",
          "sub": "Chia tiền vào mỗi tháng thành ba ngăn, theo thứ tự.",
          "keys": [
            "ba ngăn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: essentials for the whole family and the kids.",
          "sub": "Ngăn một: chi thiết yếu của cả nhà và của con."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two: fixed debt payments, paid on time.",
          "sub": "Ngăn hai: các khoản trả nợ cố định, trả đúng hạn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Three: everything else. That's where you cut, to feed the first two.",
          "sub": "Ngăn ba: phần còn lại, nơi cắt bớt để dồn sang hai ngăn trên.",
          "keys": [
            "nơi cắt bớt"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Budgeting from scratch in four steps is in another series. Here: kids, and many loans at once.",
          "sub": "Lập ngân sách bốn bước từ đầu đã có ở chuỗi khác. Bài này: chia ngăn khi có con nhỏ, nhiều khoản vay."
        }
      ],
      "ref": "p1,p2"
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
            "at": "l4",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
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
            "id": "c-t",
            "t": "text",
            "text": "① Tối ngày lương · Ngăn một",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 130,
            "w": 720,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "steaming-bowl",
                "pill",
                "school"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:payday",
            "caption": "Tối ngày lương · bàn bếp",
            "icon": "steaming-bowl"
          },
          {
            "id": "c-0",
            "t": "text",
            "text": "Thiết yếu = sinh hoạt thông thường",
            "x": 3996,
            "y": 170,
            "size": 42,
            "at": "l2:ordinary",
            "hl": [
              {
                "text": "sinh hoạt thông thường",
                "at": "l2:ordinary"
              }
            ]
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 260,
            "w": 40,
            "h": 40,
            "at": "l4:Food",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 244,
            "size": 50,
            "at": "l4:Food+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Tiền ăn",
            "x": 4058,
            "y": 250,
            "size": 42,
            "at": "l4:Food+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 322,
            "w": 40,
            "h": 40,
            "at": "l4:clothes",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 306,
            "size": 50,
            "at": "l4:clothes+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Quần áo cần thiết",
            "x": 4058,
            "y": 312,
            "size": 42,
            "at": "l4:clothes+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 384,
            "w": 40,
            "h": 40,
            "at": "l4:rent",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 368,
            "size": 50,
            "at": "l4:rent+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Tiền nhà, điện nước",
            "x": 4058,
            "y": 374,
            "size": 42,
            "at": "l4:rent+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 446,
            "w": 40,
            "h": 40,
            "at": "l4:school",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 430,
            "size": 50,
            "at": "l4:school+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Học phí",
            "x": 4058,
            "y": 436,
            "size": 42,
            "at": "l4:school+200"
          },
          {
            "id": "c-c4",
            "t": "box",
            "x": 3996,
            "y": 508,
            "w": 40,
            "h": 40,
            "at": "l4:medicine",
            "stroke": 5
          },
          {
            "id": "c-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 492,
            "size": 50,
            "at": "l4:medicine+600",
            "color": "accent"
          },
          {
            "id": "c-l4",
            "t": "text",
            "text": "Thuốc men của con",
            "x": 4058,
            "y": 498,
            "size": 42,
            "at": "l4:medicine+200"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 06/12/2022 (nợ trong hôn nhân)",
            "x": 4856,
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
          "say": "First stop: payday evening. What exactly counts as essential?",
          "sub": "Chặng một: tối ngày lương. Thế nào là thiết yếu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A legal article on debt in marriage defines it: ordinary needs for food, clothing, housing, study and medical care.",
          "sub": "Một bài của Thư viện Pháp luật giải thích: nhu cầu sinh hoạt thông thường về ăn, mặc, ở, học tập, khám chữa bệnh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A legal term, but also a handy list for compartment one.",
          "sub": "Đó là cách gọi trong luật, nhưng cũng là danh sách dễ dùng cho ngăn một.",
          "keys": [
            "danh sách dễ dùng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Food, necessary clothes, rent and utilities, school fees, Bin's medicine.",
          "sub": "Tiền ăn, quần áo cần thiết, tiền nhà, điện nước, học phí, thuốc men của Bin.",
          "pose": "explain"
        }
      ],
      "ref": "p3"
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
          }
        ],
        "items": [
          {
            "id": "c-n",
            "t": "text",
            "text": "Cần: bữa ăn đủ chất",
            "x": 3996,
            "y": 600,
            "size": 46,
            "at": "l2:nourishing",
            "color": "accent",
            "hl": [
              {
                "text": "Cần",
                "at": "l2:need"
              }
            ]
          },
          {
            "id": "c-w",
            "t": "text",
            "text": "Muốn: ăn vặt mỗi tối",
            "x": 3996,
            "y": 675,
            "size": 46,
            "at": "l2:snacks",
            "color": "coral",
            "hl": [
              {
                "text": "Muốn",
                "at": "l2:want"
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
          "say": "Putting it first doesn't mean spending without limit. Each item has a need and a want.",
          "sub": "Đặt trước không có nghĩa chi bao nhiêu cũng được. Mỗi mục có phần cần và phần muốn.",
          "keys": [
            "phần cần và phần muốn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A nourishing meal is a need. Takeaway snacks every evening are a want.",
          "sub": "Bữa ăn đủ chất là cần. Đồ ăn vặt mua mang về mỗi tối là muốn."
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
            "fit": "D",
            "ms": 900
          },
          {
            "at": "l5",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Cùng tối · Lập ngăn một",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 130,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "bin",
                  "side": "right",
                  "face": "happy",
                  "enter": "pop",
                  "at": "l4"
                }
              ],
              "props": [
                "bubble-tea",
                "teddy-bear",
                "memo"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:builds",
            "caption": "Cùng tối · phòng khách",
            "icon": "bubble-tea"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 180,
            "w": 40,
            "h": 40,
            "at": "l2:Step one",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 164,
            "size": 50,
            "at": "l2:Step one+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Ghi các mục",
            "x": 6026,
            "y": 170,
            "size": 42,
            "at": "l2:Step one+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 255,
            "w": 40,
            "h": 40,
            "at": "l3:Step two",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 239,
            "size": 50,
            "at": "l3:Step two+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Số tháng trước: sao kê, sổ chợ",
            "x": 6026,
            "y": 245,
            "size": 42,
            "at": "l3:Step two+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 330,
            "w": 40,
            "h": 40,
            "at": "l6:Step three",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 314,
            "size": 50,
            "at": "l6:Step three+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Gạch phần muốn",
            "x": 6026,
            "y": 320,
            "size": 42,
            "at": "l6:Step three+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 405,
            "w": 40,
            "h": 40,
            "at": "l7:Step four",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 389,
            "size": 50,
            "at": "l7:Step four+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Chuyển sang tài khoản riêng",
            "x": 6026,
            "y": 395,
            "size": 42,
            "at": "l7:Step four+200"
          },
          {
            "id": "d-bt",
            "t": "text",
            "text": "“Trà sữa cũng là ăn?”",
            "x": 6824,
            "y": 650,
            "size": 46,
            "at": "l5:bubble tea",
            "color": "coral"
          },
          {
            "id": "d-btx",
            "t": "strike",
            "over": "d-bt",
            "at": "l6:cross"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: the same night. Thảo builds compartment one for next month.",
          "sub": "Chặng hai: cùng tối. Thảo lập ngăn một cho tháng tới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Step one: list food, clothes, housing, study and health.",
          "sub": "Bước một: ghi các mục ăn, mặc, ở, học tập, khám chữa bệnh.",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Step two: last month's amounts, from bank statements and my market notebook.",
          "sub": "Bước hai: điền số tiền tháng trước, lấy từ sao kê và sổ chợ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Enter Bé Bin, her son, ambassador of bubble tea.",
          "sub": "Bé Bin bước vào, con trai Thảo, đại sứ trà sữa.",
          "keys": [
            "Bé Bin"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "bin",
          "say": "Mom, bubble tea is food, right? Put it in the food box!",
          "sub": "Mẹ ơi, trà sữa cũng là ăn mà? Cho vào ngăn ăn đi mẹ!",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Step three: cross out the wants. Bubble tea, new toys. Sorry, sweetie.",
          "sub": "Bước ba: gạch phần muốn. Trà sữa, đồ chơi mới. Xin lỗi con nhé.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "thao",
          "say": "Step four: on payday, move the rest into a separate account.",
          "sub": "Bước bốn: ngày lương về, chuyển số còn lại sang một tài khoản riêng.",
          "keys": [
            "tài khoản riêng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 400
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
          }
        ],
        "items": [
          {
            "id": "d-k",
            "t": "text",
            "text": "Tách ngay ngày lương về",
            "x": 5964,
            "y": 520,
            "size": 52,
            "at": "l1:Separate",
            "color": "accent",
            "hl": [
              {
                "text": "ngay ngày lương",
                "at": "l1:payday"
              }
            ]
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "= để phần cơm cho con",
            "x": 6004,
            "y": 600,
            "size": 48,
            "at": "l2:setting aside",
            "hl": [
              {
                "text": "phần cơm",
                "at": "l2:rice"
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
          "say": "Separate it on payday, and a surprise due date can't touch the kids.",
          "sub": "Tách tiền thiết yếu ngay ngày lương về, khoản nợ đến hạn bất ngờ không đụng được tới con.",
          "keys": [
            "ngay ngày lương về"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Like setting aside the kids' rice before the guests arrive.",
          "sub": "Như để phần cơm cho con trước khi khách tới.",
          "keys": [
            "để phần cơm cho con"
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
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Tuần đầu · Ngăn hai",
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "shrug",
                  "face": "happy"
                }
              ],
              "props": [
                "credit-card",
                "alarm-clock"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:first week",
            "caption": "Tuần đầu · chỗ làm của Dũng",
            "icon": "alarm-clock"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Nhà, xe, vay tiêu dùng, thẻ",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l1:home"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "“Trễ chút, thêm tí lãi”",
            "x": 7932,
            "y": 250,
            "size": 46,
            "at": "l2:wait",
            "color": "muted"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Lãi chậm trả: tối đa 10%/năm",
            "x": 7932,
            "y": 340,
            "size": 44,
            "at": "l4:ten percent",
            "color": "coral",
            "hl": [
              {
                "text": "10%/năm",
                "at": "l4:ten percent"
              }
            ]
          },
          {
            "id": "e-3b",
            "t": "text",
            "text": "trên số lãi chậm trả",
            "x": 7972,
            "y": 410,
            "size": 38,
            "at": "l4:unpaid",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: the first week. Compartment two: home and car instalments, the consumer loan, the card.",
          "sub": "Chặng ba: tuần đầu. Ngăn hai: trả góp nhà, xe, vay tiêu dùng, dư nợ thẻ trong tháng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The car instalment can wait a little, right? It's just a bit of interest.",
          "sub": "Kỳ trả góp xe để trễ chút được mà? Chỉ thêm tí lãi thôi.",
          "face": "happy",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Let's ask a legal article on overdue loans. It cites Circular thirty nine of twenty sixteen.",
          "sub": "Hỏi thử bài của Thư viện Pháp luật về nợ quá hạn, dẫn Thông tư 39/2016/TT-NHNN."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Interest not paid on time? Late interest, up to ten percent a year on that unpaid interest.",
          "sub": "Không trả lãi đúng hạn? Phải trả lãi chậm trả, tối đa 10%/năm trên số lãi chậm trả.",
          "keys": [
            "10%/năm"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s09",
      "module": "BRK-03",
      "data": {
        "value": 150,
        "suffix": "%",
        "label": "lãi trong hạn: mức tối đa cho nợ gốc quá hạn",
        "illus": "chart-increasing"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And overdue principal?",
          "sub": "Còn nợ gốc quá hạn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Up to one fifty percent of the normal rate.",
          "sub": "Lãi tới 150% lãi trong hạn.",
          "keys": [
            "150%"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
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
            "fit": "E",
            "move": "cut"
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
            "at": "l3:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-4",
            "t": "text",
            "text": "Gốc quá hạn: lãi tới 150%",
            "x": 7932,
            "y": 490,
            "size": 46,
            "at": "l1:penalty",
            "color": "coral"
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "+ tiền phạt + xử lý tài sản",
            "x": 7972,
            "y": 560,
            "size": 42,
            "at": "l2:collateral"
          },
          {
            "id": "e-2x",
            "t": "strike",
            "over": "e-2",
            "at": "l1:penalty+600"
          },
          {
            "id": "e-ok",
            "t": "text",
            "text": "Kỳ xe: đúng ngày ✓",
            "x": 8792,
            "y": 650,
            "size": 48,
            "at": "l3:dot",
            "color": "accent",
            "hl": [
              {
                "text": "đúng ngày",
                "at": "l3:dot"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 21/12/2023 (TT 39/2016/TT-NHNN)",
            "x": 7932,
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
          "say": "Penalty clause in the contract? Then a penalty too, on top of principal and interest.",
          "sub": "Hợp đồng có thoả thuận phạt vi phạm? Trả thêm tiền phạt, ngoài gốc và lãi.",
          "keys": [
            "tiền phạt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And with a secured loan left unpaid, the collateral may be dealt with.",
          "sub": "Khoản vay có tài sản bảo đảm mà không trả, tài sản có thể bị xử lý.",
          "keys": [
            "có thể bị xử lý"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Okay, okay. The car gets paid on the dot.",
          "sub": "Thôi được. Kỳ xe trả đúng ngày.",
          "face": "worried"
        }
      ],
      "ref": "p8"
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
            "text": "④ Giữa tháng · Bạn có biết?",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "bar-chart",
                "identification-card"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:lunch",
            "caption": "Giữa tháng · giờ nghỉ trưa",
            "icon": "bar-chart"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "CIC: Trung tâm Thông tin tín dụng",
            "x": 60,
            "y": 1260,
            "size": 42,
            "at": "l2:Centre"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "cập nhật hằng tháng",
            "x": 100,
            "y": 1330,
            "size": 46,
            "at": "l2:every month",
            "color": "accent",
            "hl": [
              {
                "text": "hằng tháng",
                "at": "l2:every month"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Tự xem báo cáo trên trang CIC",
            "x": 60,
            "y": 1420,
            "size": 44,
            "at": "l3:register"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Trễ hạn = tốn tiền + dấu vết",
            "x": 60,
            "y": 1520,
            "size": 48,
            "at": "l5:trace",
            "color": "coral",
            "hl": [
              {
                "text": "dấu vết",
                "at": "l5:trace"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 28/03/2024",
            "x": 60,
            "y": 1810,
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
          "say": "Fourth stop: mid month, Thảo's lunch break. Did you know?",
          "sub": "Chặng bốn: giữa tháng, giờ nghỉ trưa của Thảo. Bạn có biết?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "CIC, the National Credit Information Centre, stores credit data and updates repayment records every month.",
          "sub": "CIC, Trung tâm Thông tin tín dụng Quốc gia, lưu thông tin tín dụng, cập nhật tình hình vay trả hằng tháng.",
          "keys": [
            "hằng tháng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "So I can register on the CIC website and see my own report? No more guessing!",
          "sub": "Vậy em đăng ký tài khoản trên trang CIC là tự xem được báo cáo của mình? Khỏi đoán!",
          "face": "surprised",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Exactly. Instead of guessing how you're recorded, read it yourself.",
          "sub": "Đúng. Thay vì đoán mình bị ghi nhận thế nào, tự đọc lấy.",
          "keys": [
            "tự đọc lấy"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Every late payment costs money and leaves a trace. Keep compartment two on the dot.",
          "sub": "Mỗi lần trễ hạn vừa tốn tiền vừa để lại dấu vết. Ngăn hai phải đúng ngày.",
          "keys": [
            "để lại dấu vết"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Tuần ba · ngân sách hụt",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Trễ vài kỳ cũng không sao",
          "why": "Lãi quá hạn tới 150%, có thể bị phạt, xử lý tài sản; CIC ghi nhận hằng tháng.",
          "rule": "Gọi bên cho vay trước kỳ đến hạn"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Essentials plus debts are more than we earn. Fine, we miss a few payments. A little interest, no big deal.",
          "sub": "Ngăn một cộng ngăn hai vượt tiền vào. Thôi, trễ vài kỳ, thêm tí lãi, có sao đâu.",
          "pose": "shrug",
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
          "say": "Up to one fifty percent, maybe penalties, maybe the collateral. And CIC writes it down monthly.",
          "sub": "Lãi tới 150%, có thể bị phạt, bị xử lý tài sản. Và CIC ghi lại hằng tháng.",
          "keys": [
            "CIC ghi lại hằng tháng"
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
          "who": "dung",
          "say": "Then I call the bank. Before the due date.",
          "sub": "Vậy anh gọi ngân hàng. Trước kỳ đến hạn.",
          "phase": "redo",
          "face": "happy",
          "pose": "phone"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p12"
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
            "at": "l6",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tuần ba · Hỏi ngân hàng sớm",
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "bank",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:bank",
            "caption": "Tuần ba · ngân hàng",
            "icon": "bank"
          },
          {
            "id": "g-0",
            "t": "text",
            "text": "Ngăn 1 + Ngăn 2 > tiền vào",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l3:more than",
            "color": "coral"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Cơ cấu lại thời hạn trả nợ",
            "x": 2028,
            "y": 1345,
            "size": 46,
            "at": "l6:restructuring",
            "color": "accent",
            "hl": [
              {
                "text": "Cơ cấu lại",
                "at": "l6:restructuring"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "1. Điều chỉnh kỳ hạn",
            "x": 2028,
            "y": 1425,
            "size": 44,
            "at": "l4:adjust"
          },
          {
            "id": "g-2b",
            "t": "text",
            "text": "kéo dài một kỳ, hạn vay giữ",
            "x": 2068,
            "y": 1490,
            "size": 36,
            "at": "l4:loan term",
            "color": "muted"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "2. Gia hạn nợ",
            "x": 2028,
            "y": 1550,
            "size": 44,
            "at": "l5:extend"
          },
          {
            "id": "g-3b",
            "t": "text",
            "text": "vượt thời hạn cho vay",
            "x": 2068,
            "y": 1615,
            "size": 36,
            "at": "l5:beyond",
            "color": "muted"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Cần ngân hàng chấp thuận",
            "x": 2028,
            "y": 1680,
            "size": 44,
            "at": "l5:approval",
            "color": "coral",
            "hl": [
              {
                "text": "chấp thuận",
                "at": "l5:approval"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Gọi trước hạn: rẻ hơn",
            "x": 2028,
            "y": 1770,
            "size": 46,
            "at": "l7:before",
            "color": "accent",
            "hl": [
              {
                "text": "rẻ hơn",
                "at": "l7:far less"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 25/02/2023 (khoản 10 Điều 2 TT 39/2016/TT-NHNN)",
            "x": 2888,
            "y": 1790,
            "size": 26,
            "at": "l6",
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
          "say": "Fifth stop: week three. Dũng goes to the bank before the due date.",
          "sub": "Chặng năm: tuần thứ ba. Dũng ra ngân hàng trước kỳ đến hạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Cô Hoa, the loan officer. Brisk, kind, allergic to excuses.",
          "sub": "Đây là Cô Hoa, cán bộ tín dụng. Dứt khoát, tốt bụng, dị ứng với lý do.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Our essentials plus our debts are more than we earn. What can we do?",
          "sub": "Thiết yếu cộng tiền trả nợ đã vượt tiền vào. Nhà cháu làm sao đây cô?",
          "face": "worried",
          "pose": "hold"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Option one: adjust the repayment period. One instalment gets longer, the loan term stays the same.",
          "sub": "Cách một: điều chỉnh kỳ hạn trả nợ. Kéo dài thời gian trả một kỳ, thời hạn cho vay không đổi.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Option two: extend the debt beyond the agreed term. Both need the bank's approval. Right, done!",
          "sub": "Cách hai: gia hạn nợ, vượt thời hạn cho vay đã thoả thuận. Cả hai cần ngân hàng chấp thuận. Rồi, vậy nha!",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "That's restructuring the repayment term. The bank decides, so ask early, and ask about conditions and papers.",
          "sub": "Đó là cơ cấu lại thời hạn trả nợ. Ngân hàng quyết, nên hỏi sớm, hỏi rõ điều kiện, giấy tờ.",
          "keys": [
            "hỏi sớm"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Calling before the due date costs far less than calling after you're late.",
          "sub": "Gọi bên cho vay trước kỳ đến hạn rẻ hơn nhiều so với để trễ rồi mới tính.",
          "keys": [
            "rẻ hơn nhiều"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p11,p13"
    },
    {
      "id": "s14",
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
            "at": "l4:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Cuối tuần · Ngăn ba",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth stop"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "handbag",
                "credit-card",
                "television"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:weekend",
            "caption": "Cuối tuần · thiếu tiền trả thẻ",
            "icon": "credit-card"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Ăn ngoài, mua sắm, gói phim",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l2:Eating out"
          },
          {
            "id": "h-1b",
            "t": "text",
            "text": "nâng cấp điện thoại, quà cáp",
            "x": 4036,
            "y": 1330,
            "size": 40,
            "at": "l2:upgrades",
            "color": "muted"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "A: bớt chợ, nghỉ lớp vẽ",
            "x": 3996,
            "y": 1420,
            "size": 46,
            "at": "l3:market",
            "color": "coral"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: giữ ngăn 1, cắt ngăn 3",
            "x": 3996,
            "y": 1500,
            "size": 46,
            "at": "l4:keep",
            "color": "accent",
            "hl": [
              {
                "text": "cắt ngăn 3",
                "at": "l4:pause"
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
          "say": "Sixth stop: the weekend. The card payment is still short. Time for compartment three.",
          "sub": "Chặng sáu: cuối tuần. Kỳ trả thẻ tháng này vẫn thiếu. Đến lượt ngăn ba."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Eating out, shopping, streaming plans, phone upgrades, gifts. Cut here first.",
          "sub": "Ăn ngoài, mua sắm, gói xem phim, nâng cấp điện thoại, quà cáp. Cắt ở đây trước.",
          "keys": [
            "Cắt ở đây trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Or we cut the market money and stop Bin's drawing class. Pay the card big!",
          "sub": "Hay bớt tiền chợ, cho Bin nghỉ lớp vẽ. Dồn trả thẻ thật nhiều!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Or we keep compartment one, pause subscriptions and eating out, and ask the bank to stretch the consumer loan.",
          "sub": "Hoặc giữ nguyên ngăn một, tạm dừng gói dịch vụ, ăn ngoài, và hỏi ngân hàng giãn kỳ khoản vay tiêu dùng.",
          "pose": "hold"
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s15",
      "module": "BRK-04",
      "data": {
        "title": "Thiếu tiền trả thẻ",
        "wrong": "Bớt tiền chợ, cho con nghỉ lớp năng khiếu",
        "right": "Giữ ngăn thiết yếu, cắt ngăn ba, hỏi giãn kỳ",
        "wrongIllus": "broken-heart",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Option A cuts the kids first.",
          "sub": "Cách A cắt phần của con trước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B cuts the extras, and asks the lender.",
          "sub": "Cách B cắt phần thêm, hỏi bên cho vay.",
          "keys": [
            "hỏi bên cho vay"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p15"
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
          }
        ],
        "items": [
          {
            "id": "h-k",
            "t": "text",
            "text": "Phần của con: đụng sau cùng",
            "x": 3996,
            "y": 1610,
            "size": 50,
            "at": "l1:Touch",
            "color": "accent",
            "hl": [
              {
                "text": "sau cùng",
                "at": "l1:nothing else"
              }
            ]
          },
          {
            "id": "h-min",
            "t": "text",
            "text": "Trả tối thiểu thẻ: bài khác",
            "x": 3996,
            "y": 1700,
            "size": 40,
            "at": "l2:minimum",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Cut compartment three and ask the lender first. Touch the kids' share only when nothing else is left.",
          "sub": "Cắt ngăn ba, hỏi bên cho vay trước. Chỉ đụng tới phần của con khi đã hết cách khác.",
          "keys": [
            "hết cách khác"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And paying only the card minimum? Another lesson shows how that drags the debt out.",
          "sub": "Còn chỉ trả tối thiểu thẻ làm dư nợ kéo dài ra sao: có bài riêng giải thích."
        }
      ],
      "ref": "p14,p16"
    },
    {
      "id": "s17",
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
          },
          {
            "at": "l4",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Chủ nhật · Công viên",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh stop"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "stand"
                },
                {
                  "id": "bin",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "props": [
                "teddy-bear",
                "deciduous-tree"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
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
            "at": "l1:park",
            "caption": "Chủ nhật · công viên",
            "icon": "teddy-bear"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Con không cần biết số nợ",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l3:numbers"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "nhưng cảm được căng thẳng",
            "x": 6004,
            "y": 1335,
            "size": 44,
            "at": "l3:stress",
            "color": "coral",
            "hl": [
              {
                "text": "căng thẳng",
                "at": "l3:stress"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "“Hết tiền rồi, đừng đòi!”",
            "x": 5964,
            "y": 1430,
            "size": 46,
            "at": "l4:out of money",
            "color": "muted"
          },
          {
            "id": "i-3x",
            "t": "strike",
            "over": "i-3",
            "at": "l5:Ouch"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: Sunday in the park, not the shopping mall.",
          "sub": "Chặng bảy: Chủ nhật ở công viên, không phải trung tâm thương mại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Mom, why don't we buy new toys anymore? Are we poor?",
          "sub": "Mẹ ơi, sao dạo này không mua đồ chơi mới? Nhà mình nghèo hả mẹ?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Kids don't need the numbers. But they feel the stress. Silence or sighing scares them more.",
          "sub": "Con không cần biết số nợ, nhưng cảm nhận được bố mẹ căng thẳng. Im lặng hay than thở càng làm con lo."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "We're out of money, stop asking for things!",
          "sub": "Nhà mình hết tiền rồi, đừng đòi gì nữa!",
          "face": "stern",
          "pose": "stop"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Ouch. Scary, and it tells Bin nothing about what stays safe.",
          "sub": "Ối. Nghe đáng sợ, mà chẳng cho Bin biết điều gì vẫn được giữ.",
          "keys": [
            "điều gì vẫn được giữ"
          ]
        }
      ],
      "ref": "p17,p18"
    },
    {
      "id": "s18",
      "module": "BRK-10",
      "data": {
        "quote": "Tiền ăn, tiền học của con, bố mẹ vẫn lo đủ",
        "mark": "vẫn lo đủ",
        "by": "Thảo, nói lại lần hai",
        "illus": "teddy-bear"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your food and school money, Mom and Dad still cover.",
          "sub": "“Tiền ăn, tiền học của con, bố mẹ vẫn lo đủ.”",
          "keys": [
            "vẫn lo đủ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo, take two.",
          "sub": "Thảo, nói lại lần hai."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p18"
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
            "at": "l1",
            "fit": [
              "i-v"
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
            "id": "i-4",
            "t": "text",
            "text": "Sự thật vừa đủ",
            "x": 5964,
            "y": 1540,
            "size": 48,
            "at": "l4:Short",
            "color": "accent"
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Phần của con vẫn giữ",
            "x": 5964,
            "y": 1615,
            "size": 46,
            "at": "l4:safe",
            "hl": [
              {
                "text": "vẫn giữ",
                "at": "l4:safe"
              }
            ]
          },
          {
            "id": "i-6",
            "t": "text",
            "text": "Rủ con cùng tham gia",
            "x": 5964,
            "y": 1690,
            "size": 46,
            "at": "l2:park"
          },
          {
            "id": "i-7",
            "t": "text",
            "text": "Không trút lo âu lên con",
            "x": 6824,
            "y": 1740,
            "size": 44,
            "at": "l4:worries",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "For a few months, we're saving to repay a loan Mom and Dad took.",
          "sub": "Mấy tháng tới nhà mình tiết kiệm hơn để trả một khoản bố mẹ đã vay.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "No new toys for now. Weekends, we all go to the park instead of the mall. Deal?",
          "sub": "Tạm thôi mua đồ chơi mới. Cuối tuần cả nhà đi công viên thay vì trung tâm thương mại nhé?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "bin",
          "say": "Deal! The park has ducks anyway.",
          "sub": "Chốt! Công viên còn có vịt nữa.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Short, true, and focused on what stays safe. Don't pour grown up worries onto kids.",
          "sub": "Ngắn, thật, nhấn vào điều vẫn được giữ. Đừng trút nỗi lo người lớn lên con.",
          "keys": [
            "Đừng trút nỗi lo người lớn lên con"
          ]
        }
      ],
      "ref": "p18,p19"
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
            "text": "Ngày lương tháng sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Payday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "money-bag",
                "mobile-phone",
                "memo"
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
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:phone",
            "caption": "Ngày lương tháng sau · ở nhà",
            "icon": "money-bag"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1270,
            "w": 40,
            "h": 40,
            "at": "l3:essentials",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1254,
            "size": 50,
            "at": "l3:essentials+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Thiết yếu đủ chưa?",
            "x": 7994,
            "y": 1260,
            "size": 44,
            "at": "l3:essentials+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1340,
            "w": 40,
            "h": 40,
            "at": "l3:paid",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1324,
            "size": 50,
            "at": "l3:paid+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Khoản nào đã trả?",
            "x": 7994,
            "y": 1330,
            "size": 44,
            "at": "l3:paid+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1410,
            "w": 40,
            "h": 40,
            "at": "l3:due",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1394,
            "size": 50,
            "at": "l3:due+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Khoản nào sắp hạn?",
            "x": 7994,
            "y": 1400,
            "size": 44,
            "at": "l3:due+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Lương về chia đủ ba ngăn”",
            "x": 7932,
            "y": 1490,
            "size": 46,
            "at": "l4:salary",
            "color": "accent",
            "hl": [
              {
                "text": "ba ngăn",
                "at": "l4:three"
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
          "say": "Payday again, next month. Same phone, same app.",
          "sub": "Lại ngày lương, tháng sau. Vẫn điện thoại ấy, vẫn app ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Compartment one first, straight to its own account. Then the payments.",
          "sub": "Ngăn một trước, chuyển thẳng sang tài khoản riêng. Rồi mới trả nợ.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Monthly meeting: essentials enough? What's paid? What's due next?",
          "sub": "Họp tháng: thiết yếu đủ chưa? Khoản nào đã trả? Khoản nào sắp đến hạn?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "When the salary comes, split it into three. Kids first, debts after. The rhyme holds.",
          "sub": "“Lương về chia đủ ba ngăn, con ăn con học, nợ nần theo sau.” Thơ cóc vẫn vững.",
          "keys": [
            "Thơ cóc vẫn vững"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "If stress drags on, sleepless nights, snapping at the kids, talk to a trusted relative, or a doctor.",
          "sub": "Nếu căng thẳng kéo dài, mất ngủ, hay cáu với con: nói với người thân tin cậy, hoặc tìm bác sĩ, chuyên gia tâm lý."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "to": "l1",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "p20,p21"
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
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2",
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
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5496,
            "y": 40,
            "at": "l2:Food"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 40,
            "at": "l3:Fixed"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3528,
            "y": 1130,
            "at": "l4:early"
          },
          {
            "id": "j-s1",
            "t": "text",
            "text": "Lương tới: tách thiết yếu trước",
            "x": 7932,
            "y": 1580,
            "size": 46,
            "at": "l5:payday",
            "color": "accent",
            "hl": [
              {
                "text": "tách thiết yếu",
                "at": "l5:essential money"
              }
            ]
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: bán xe, bán đất?",
            "x": 7932,
            "y": 1660,
            "size": 40,
            "at": "l6:Next",
            "color": "muted"
          },
          {
            "id": "j-note",
            "t": "text",
            "text": "Bài để tham khảo; quy định có thể thay đổi.",
            "x": 7932,
            "y": 1740,
            "size": 28,
            "at": "l6",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-note2",
            "t": "text",
            "text": "Khi cần, kiểm lại với cơ quan, chuyên gia. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1785,
            "size": 28,
            "at": "l6",
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
          "say": "So: three compartments.",
          "sub": "Tóm lại: ba ngăn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Food, clothing, housing, study, health care go first.",
          "sub": "Ăn, mặc, ở, học tập, khám chữa bệnh đặt trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fixed payments on time, because lateness costs interest, maybe penalties, and CIC records it.",
          "sub": "Trả nợ cố định đúng hạn, vì trễ là tốn lãi, có thể bị phạt, và CIC ghi nhận."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Everything else gets cut first. Too tight? Ask the lender early about adjusting or extending.",
          "sub": "Phần còn lại cắt trước. Quá sức thì hỏi sớm bên cho vay về điều chỉnh kỳ hạn hay gia hạn nợ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next payday: move the essential money to its own account before paying anything.",
          "sub": "Việc làm ngay: ngày lương tới, chuyển tiền thiết yếu sang tài khoản riêng trước khi trả bất kỳ khoản nào.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: should you sell the car or the land? Rules change, so check first.",
          "sub": "Bài tiếp: có nên bán xe, bán đất để trả nợ? Quy định có thể đổi, nhớ kiểm lại."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s22",
      "module": "QUIZ-01",
      "data": {
        "q": "How high can interest on overdue principal be?",
        "options": [
          "Up to one and a half times the normal interest rate of the loan",
          "Exactly the same as the normal rate, so lateness costs you nothing",
          "Up to ten times the normal rate, depending on the mood of the bank"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "chart-increasing",
        "why": "Lãi trên dư nợ gốc quá hạn không vượt quá 150% lãi suất cho vay trong hạn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "How high can interest on overdue principal be?",
          "sub": "Lãi trên dư nợ gốc quá hạn có thể cao tới mức nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Up to one and a half times the normal interest rate of the loan.",
          "sub": "Tới 150% lãi suất cho vay trong hạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "That is why compartment two stays on time.",
          "sub": "Vì thế ngăn hai phải giữ đúng hạn."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[12]"
    },
    {
      "id": "s23",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Giữ phần của con khi trả nợ"
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
  "hook": "HOOK-25",
  "notes": "#145 bài MỚI (bài 2 chuỗi Gỡ nợ mà giữ được nhà) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-25: thơ cóc “Lương về chia đủ ba ngăn / Con ăn con học, nợ nần theo sau” (p1) → ngày lương, Thảo – Dũng (intro, “Liệu cơm gắp mắm”) → BRK-02 ba ngăn → câu hỏi chính, ba ngăn (p1, p2). Bảng 10 ô theo MỘT CHU KỲ LƯƠNG: tối ngày lương ngăn một (p3, p4) → cùng tối Thảo làm mẫu bốn bước, Bé Bin đòi trà sữa (vai “chị Hương” p5, p6) → tuần đầu ngăn hai, Dũng muốn trễ kỳ xe (p7; BRK-03 150%; p8) → giữa tháng CIC (p9, p10) → “Khoan đã!” trễ vài kỳ không sao (p12) → tuần ba ngân hàng, Cô Hoa giải thích cơ cấu lại (p11, p13) → cuối tuần ngăn ba, Cách A/B (vai “anh Dũng, chị Hương” p14, p15; BRK-04; p16) → Chủ nhật công viên nói với Bin (p17; BRK-10 câu “sau” p18; p19) → ngày lương tháng sau họp tháng (p20, p21; khép vòng thơ cóc). Nhân vật: Thảo, Dũng, Bé Bin, Cô Hoa. Số liệu chỉ từ bài: 10%/năm, 150% (Thông tư 39/2016/TT-NHNN qua Thư viện Pháp luật). Lưu ý chung #133 ở ô J. Câu đố questions[12].",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
