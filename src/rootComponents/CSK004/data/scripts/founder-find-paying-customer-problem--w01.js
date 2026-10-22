// founder-find-paying-customer-problem--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "founder-find-paying-customer-problem--w01",
  "hook": "HOOK-22",
  "unit": {
    "audience": "first-time-founders-after-35",
    "slug": "founder-find-paying-customer-problem",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Mười năm trong ngành giúp mình nhìn ra vấn đề nào khách sẵn sàng trả tiền?",
    "series": "Khởi nghiệp lần đầu khi đã có gia đình — cho người rời công sở để làm chủ"
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
            "module": "SCENE-03",
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "binh",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone",
                "gear"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1",
            "caption": "Tối thứ Hai · xưởng bác Bình",
            "icon": "mobile-phone"
          },
          {
            "id": "a-cut",
            "t": "text",
            "text": "“Nhưng cái khổ là…”",
            "x": 60,
            "y": 150,
            "size": 72,
            "at": "l2:But",
            "color": "coral",
            "hl": [
              {
                "text": "Nhưng",
                "at": "l3:Hold"
              }
            ]
          },
          {
            "id": "a-val",
            "t": "text",
            "text": "= đáng giá hơn mọi ý tưởng",
            "x": 60,
            "y": 290,
            "size": 48,
            "at": "l3:worth",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday night. Dũng, a maintenance engineer, phones Bác Bình, who runs a small workshop.",
          "sub": "Tối thứ Hai. Dũng, kỹ sư bảo trì, gọi cho bác Bình, chủ một xưởng cơ khí nhỏ.",
          "keys": [
            "bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "My workshop already has a guy who fixes things. But the real headache is...",
          "sub": "Xưởng bác có người quen sửa rồi. Nhưng cái khổ là...",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Cut! Hold that 'but'. It's worth more than any idea Dũng had this week.",
          "sub": "Cắt! Giữ lấy chữ “nhưng” ấy. Nó đáng giá hơn mọi ý tưởng của Dũng tuần này.",
          "keys": [
            "chữ “nhưng”"
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
      "ref": "intro,p9"
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
          }
        ],
        "items": [
          {
            "id": "b-q",
            "t": "text",
            "text": "Vấn đề nào khách trả tiền?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:problems",
            "hl": [
              {
                "text": "trả tiền",
                "at": "l1:pay"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Điều mình thích",
            "x": 2028,
            "y": 160,
            "size": 54,
            "at": "l2:like",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:But"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Nỗi đau khách đã nhận",
            "x": 2028,
            "y": 250,
            "size": 58,
            "at": "l2:admit",
            "color": "accent",
            "hl": [
              {
                "text": "đã nhận",
                "at": "l2:admit"
              }
            ]
          },
          {
            "id": "b-ca",
            "t": "text",
            "text": "“Muốn biết phải hỏi”",
            "x": 2028,
            "y": 360,
            "size": 56,
            "at": "l3:ask",
            "color": "accent",
            "hl": [
              {
                "text": "phải hỏi",
                "at": "l3:ask"
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
          "say": "So from ten years in your industry, which problems will customers actually pay to solve?",
          "sub": "Vậy từ mười năm trong ngành, vấn đề nào khách thật sự chịu trả tiền?",
          "keys": [
            "chịu trả tiền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not the ones you like. But the ones customers admit, and already pay for.",
          "sub": "Không phải vấn đề mình thích. Mà là vấn đề khách đã tự nhận, và đang trả tiền.",
          "keys": [
            "đã tự nhận"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Our elders said it simply: if you want to know, ask.",
          "sub": "Ông bà nói gọn: “Muốn biết phải hỏi.”",
          "keys": [
            "Muốn biết phải hỏi"
          ]
        }
      ],
      "ref": "intro,p3"
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
            "at": "l2",
            "fit": [
              "b-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "B",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "b-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "notebook",
                "wrench"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1",
            "caption": "Tuần 1 · tối thứ Hai · ở nhà",
            "icon": "notebook"
          },
          {
            "id": "b-i0",
            "t": "illus",
            "name": "hot-beverage",
            "x": 2028,
            "y": 450,
            "size": 70,
            "at": "l2:coffee"
          },
          {
            "id": "b-it0",
            "t": "text",
            "text": "Quán cà phê",
            "x": 2118,
            "y": 455,
            "size": 48,
            "at": "l2:coffee+200"
          },
          {
            "id": "b-i1",
            "t": "illus",
            "name": "wrench",
            "x": 2028,
            "y": 545,
            "size": 70,
            "at": "l2:Maintenance"
          },
          {
            "id": "b-it1",
            "t": "text",
            "text": "Bảo trì xưởng nhỏ",
            "x": 2118,
            "y": 550,
            "size": 48,
            "at": "l2:Maintenance+200",
            "hl": [
              {
                "text": "Bảo trì xưởng nhỏ",
                "at": "l4:called"
              }
            ]
          },
          {
            "id": "b-i2",
            "t": "illus",
            "name": "mobile-phone",
            "x": 2028,
            "y": 640,
            "size": 70,
            "at": "l2:app"
          },
          {
            "id": "b-it2",
            "t": "text",
            "text": "Viết ứng dụng",
            "x": 2118,
            "y": 645,
            "size": 48,
            "at": "l2:app+200"
          },
          {
            "id": "b-pin",
            "t": "text",
            "text": "← có người nhờ!",
            "x": 2528,
            "y": 550,
            "size": 40,
            "at": "l4:called",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng. Forty, twelve years maintaining machines at a factory.",
          "sub": "Đây là Dũng. 40 tuổi, mười hai năm bảo trì máy ở một nhà máy.",
          "keys": [
            "mười hai năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Three ideas! A quiet coffee shop. Maintenance for small workshops. Or an app!",
          "sub": "Ba ý tưởng! Quán cà phê yên tĩnh. Bảo trì cho xưởng nhỏ. Hoặc viết ứng dụng!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Coffee, because he loves quiet. The app, which nobody has asked for.",
          "sub": "Cà phê vì anh thích yên tĩnh. Ứng dụng thì chưa ai hỏi tới."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And maintenance: a few workshop owners have called him for help. Remember that.",
          "sub": "Còn bảo trì: vài chủ xưởng quen từng gọi nhờ anh xem giúp. Nhớ chi tiết này.",
          "keys": [
            "gọi nhờ anh xem giúp"
          ]
        }
      ],
      "ref": "p5"
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
            "at": "l5",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "Tuần 1 · Ai cũng khen",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:dinner",
            "hl": [
              {
                "text": "khen",
                "at": "l3:loves"
              }
            ]
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
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
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
                "cooked-rice",
                "toolbox"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "tu",
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
                  "on": "dung",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Cùng tối · bữa cơm nhà",
            "icon": "cooked-rice"
          },
          {
            "id": "c-h",
            "t": "text",
            "text": "“Hay đấy, làm đi!” × 4",
            "x": 3996,
            "y": 160,
            "size": 52,
            "at": "l3:Everyone",
            "color": "muted"
          },
          {
            "id": "c-kit",
            "t": "text",
            "text": "Mua bộ đồ nghề xịn",
            "x": 3996,
            "y": 250,
            "size": 52,
            "at": "l4:tool kit",
            "color": "coral"
          },
          {
            "id": "c-kitx",
            "t": "strike",
            "over": "c-kit",
            "at": "l5:Before"
          },
          {
            "id": "c-ph",
            "t": "illus",
            "name": "telephone-receiver",
            "x": 3996,
            "y": 340,
            "size": 90,
            "at": "l5:calls"
          },
          {
            "id": "c-call",
            "t": "text",
            "text": "Gọi thử 1 chủ xưởng",
            "x": 4106,
            "y": 355,
            "size": 50,
            "at": "l5:calls+200",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Same night, at dinner. Meet Bà Tư, Dũng's mother and biggest fan.",
          "sub": "Cùng tối ấy, bữa cơm nhà. Còn đây là bà Tư, mẹ Dũng, fan cứng của con trai.",
          "keys": [
            "bà Tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "tu",
          "say": "Maintenance? Sounds great, son. Go for it!",
          "sub": "Bảo trì à? Hay đấy con. Làm đi!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "His wife agrees. Two close friends too. Everyone loves it.",
          "sub": "Vợ anh cũng nói thế. Hai bạn thân cũng vậy. Ai cũng khen."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Then tonight I buy that expensive tool kit. Okay, buy it!",
          "sub": "Vậy tối nay mua luôn bộ đồ nghề xịn. Ok, mua luôn!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Before paying, he calls one owner who once asked for help.",
          "sub": "Trước khi trả tiền, anh gọi thử một chủ xưởng từng nhờ mình."
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
      "id": "s04",
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
              "c-v2"
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
            "id": "c-v2",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "binh",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "mobile-phone",
                "gear"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
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
            "at": "l1",
            "caption": "21:00 · cuộc gọi, nói trọn",
            "icon": "mobile-phone"
          },
          {
            "id": "c-stop",
            "t": "text",
            "text": "Ngừng máy cả ngày chờ",
            "x": 3996,
            "y": 470,
            "size": 50,
            "at": "l2:whole day",
            "color": "coral",
            "hl": [
              {
                "text": "cả ngày",
                "at": "l2:whole day"
              }
            ]
          },
          {
            "id": "c-pre",
            "t": "text",
            "text": "Muốn kiểm tra trước",
            "x": 3996,
            "y": 550,
            "size": 54,
            "at": "l2:check",
            "color": "accent",
            "hl": [
              {
                "text": "kiểm tra trước",
                "at": "l2:check"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Khen ≠ khách kể",
            "x": 3996,
            "y": 650,
            "size": 56,
            "at": "l4:Stories",
            "hl": [
              {
                "text": "khách kể",
                "at": "l4:customers"
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
          "say": "My workshop already has a guy who fixes things. But the real headache is...",
          "sub": "Xưởng bác có người quen sửa rồi. Nhưng cái khổ là...",
          "pose": "phone"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "...when a machine breaks, it stops a whole day waiting. I want someone to check before it breaks.",
          "sub": "...máy hỏng là ngừng cả ngày chờ thợ. Bác muốn có người kiểm tra trước khi hỏng.",
          "keys": [
            "kiểm tra trước"
          ],
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "There it is. Not a compliment. A cost he already pays.",
          "sub": "Đó. Không phải lời khen, mà là cái giá ông đang trả.",
          "keys": [
            "cái giá ông đang trả"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Praise from family feels good. Stories from real customers tell you what to do.",
          "sub": "Lời khen người thân làm ta vui. Lời kể của khách thật mới cho biết nên làm gì.",
          "keys": [
            "khách thật"
          ]
        }
      ],
      "ref": "p9,p10"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "Tuần 1 · Hai vòng tròn",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:circles",
            "hl": [
              {
                "text": "Hai vòng tròn",
                "at": "l1:two circles"
              }
            ]
          },
          {
            "id": "d-r1",
            "t": "box",
            "x": 5964,
            "y": 160,
            "w": 330,
            "h": 130,
            "at": "l2:skill",
            "stroke": 4
          },
          {
            "id": "d-c1",
            "t": "text",
            "text": "Kỹ năng",
            "x": 6014,
            "y": 195,
            "size": 54,
            "at": "l2:skill+200",
            "color": "accent"
          },
          {
            "id": "d-cx",
            "t": "text",
            "text": "∩",
            "x": 6314,
            "y": 185,
            "size": 70,
            "at": "l2:overlap"
          },
          {
            "id": "d-r2",
            "t": "box",
            "x": 6374,
            "y": 160,
            "w": 360,
            "h": 130,
            "at": "l2:pay",
            "stroke": 4
          },
          {
            "id": "d-c2",
            "t": "text",
            "text": "Khách trả",
            "x": 6424,
            "y": 195,
            "size": 54,
            "at": "l2:pay+200",
            "color": "accent"
          },
          {
            "id": "d-pod",
            "t": "text",
            "text": "Podcast khoa học: khen, không ra tiền",
            "x": 5964,
            "y": 330,
            "size": 40,
            "at": "l3:podcast",
            "color": "muted"
          },
          {
            "id": "d-gg",
            "t": "text",
            "text": "Grammar Girl: đam mê + người cần",
            "x": 5964,
            "y": 395,
            "size": 44,
            "at": "l4:Grammar",
            "hl": [
              {
                "text": "người cần",
                "at": "l4:needed"
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
          "say": "Why does that call matter? Guillebeau draws two circles.",
          "sub": "Vì sao cuộc gọi ấy quan trọng? Guillebeau vẽ hai vòng tròn.",
          "keys": [
            "hai vòng tròn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your skill or passion, and what people will pay for. Business lives in the overlap.",
          "sub": "Kỹ năng hay đam mê của bạn, và điều người ta chịu trả tiền. Kinh doanh sống ở phần giao.",
          "keys": [
            "phần giao"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Mignon Fogarty's science podcast got praise, but made no money.",
          "sub": "Podcast khoa học của Mignon Fogarty được khen, nhưng không ra tiền."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Her Grammar Girl project worked: passion, plus people who needed it.",
          "sub": "Còn dự án Grammar Girl thành công: vừa đam mê, vừa có người cần.",
          "keys": [
            "có người cần"
          ]
        }
      ],
      "ref": "p1"
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
            "id": "d-i0",
            "t": "text",
            "text": "Cà phê: điều anh thích",
            "x": 5964,
            "y": 470,
            "size": 44,
            "at": "l2:Coffee",
            "color": "muted"
          },
          {
            "id": "d-i0x",
            "t": "strike",
            "over": "d-i0",
            "at": "l2:likes"
          },
          {
            "id": "d-i2",
            "t": "text",
            "text": "Ứng dụng: chưa ai hỏi",
            "x": 5964,
            "y": 535,
            "size": 44,
            "at": "l2:app",
            "color": "muted"
          },
          {
            "id": "d-i2x",
            "t": "strike",
            "over": "d-i2",
            "at": "l2:asking"
          },
          {
            "id": "d-i1",
            "t": "text",
            "text": "Bảo trì: ở phần giao ✓",
            "x": 5964,
            "y": 605,
            "size": 52,
            "at": "l3:Maintenance",
            "color": "accent",
            "hl": [
              {
                "text": "phần giao",
                "at": "l3:skill"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "“Anh xem giúp em cái này”",
            "x": 6804,
            "y": 470,
            "size": 56,
            "at": "l4:look",
            "color": "coral",
            "hl": [
              {
                "text": "xem giúp",
                "at": "l4:look"
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
          "say": "Now Dũng's three ideas. Which sits closest to the overlap?",
          "sub": "Giờ xét ba ý của Dũng. Ý nào gần phần giao nhất?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Coffee comes from what he likes. The app, from nobody asking.",
          "sub": "Cà phê đến từ điều anh thích. Ứng dụng thì chưa ai hỏi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Maintenance uses his skill, people came to him, and workshops already pay someone for it.",
          "sub": "Bảo trì dùng đúng kỹ năng, có người tự tìm đến, và xưởng vốn đang trả tiền cho người khác làm.",
          "keys": [
            "tự tìm đến"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Good ideas often begin with: could you take a look at this for me?",
          "sub": "Ý tưởng tốt thường bắt đầu từ câu: “Anh xem giúp em cái này.”",
          "keys": [
            "Anh xem giúp em cái này"
          ]
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s07",
      "module": "BRK-11",
      "data": {
        "title": "3 câu tự hỏi trước",
        "items": [
          "≥ 20 giờ mỗi tuần?",
          "Thích hướng dẫn người khác?",
          "Chịu nổi giấy tờ, chi tiết?"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three: can you stand the admin, not just the fun?",
          "sub": "Ba: chịu nổi giấy tờ, không chỉ phần vui?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: do you enjoy guiding others?",
          "sub": "Hai: có thích hướng dẫn người khác?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: twenty hours a week, not just spare time?",
          "sub": "Một: 20 giờ mỗi tuần, không chỉ lúc rảnh?",
          "keys": [
            "20 giờ mỗi tuần"
          ]
        }
      ],
      "ref": "p2"
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
            "at": "l2",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "spiral-calendar",
                "notebook"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l2:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Khuya · đếm giờ rảnh",
            "icon": "spiral-calendar"
          },
          {
            "id": "d-20",
            "t": "text",
            "text": "20 giờ/tuần: câu khó nhất",
            "x": 5964,
            "y": 690,
            "size": 46,
            "at": "l1:twenty",
            "color": "coral",
            "hl": [
              {
                "text": "20 giờ",
                "at": "l1:twenty"
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
          "say": "With a job and a family, the twenty-hour question is the hardest one.",
          "sub": "Đang đi làm, có gia đình: câu 20 giờ mỗi tuần là câu khó nhất.",
          "keys": [
            "câu khó nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Twenty hours... I'd better count my evenings and weekends first.",
          "sub": "Hai mươi giờ... Phải đếm lại các tối và cuối tuần đã.",
          "face": "thinking"
        }
      ],
      "ref": "p2"
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
            "text": "Tuần 1 · Nỗi đau đã nhận",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:pain",
            "hl": [
              {
                "text": "Nỗi đau",
                "at": "l1:pain"
              }
            ]
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "Tạo nhu cầu mới",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l1:invent",
            "color": "muted"
          },
          {
            "id": "e-nox",
            "t": "strike",
            "over": "e-no",
            "at": "l1:invent+400"
          },
          {
            "id": "e-pv",
            "t": "text",
            "text": "Giải đau > chiều ý thích",
            "x": 7932,
            "y": 245,
            "size": 52,
            "at": "l2:Pain",
            "color": "accent",
            "hl": [
              {
                "text": "Giải đau",
                "at": "l2:relief"
              }
            ]
          },
          {
            "id": "e-pp",
            "t": "illus",
            "name": "fork-and-knife-with-plate",
            "x": 7932,
            "y": 340,
            "size": 90,
            "at": "l3:Paleo"
          },
          {
            "id": "e-p1",
            "t": "text",
            "text": "Paleo Plan: gỡ rối thực đơn",
            "x": 8042,
            "y": 350,
            "size": 46,
            "at": "l3:Paleo+200"
          },
          {
            "id": "e-p2",
            "t": "text",
            "text": "3 tuần · 1.500 đô ra mắt",
            "x": 8042,
            "y": 420,
            "size": 46,
            "at": "l3:three",
            "hl": [
              {
                "text": "1.500 đô",
                "at": "l3:fifteen"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Guillebeau, How to Test Your Business Idea",
            "x": 7932,
            "y": 720,
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
          "say": "Guillebeau's advice: sell to a pain customers already admit. Don't invent a new demand.",
          "sub": "Lời khuyên của Guillebeau: bán cho nỗi đau khách đã thừa nhận, đừng cố tạo nhu cầu mới.",
          "keys": [
            "nỗi đau khách đã thừa nhận"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Pain relief usually works better than a product for a mere wish.",
          "sub": "Sản phẩm giải toả nỗi đau thường hiệu quả hơn sản phẩm chiều mong muốn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Paleo Plan removed the headache of planning meals. It launched in three weeks, with fifteen hundred dollars.",
          "sub": "Paleo Plan gỡ cho người dùng mớ rối lên thực đơn. Ra mắt sau ba tuần, với 1.500 đô la.",
          "keys": [
            "1.500 đô la"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s10",
      "module": "BRK-03",
      "data": {
        "value": 6000,
        "prefix": "> ",
        "suffix": " đô",
        "label": "doanh thu định kỳ mỗi tháng, chỉ khoảng 2 giờ/tuần (Paleo Plan)",
        "illus": "chart-increasing"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Later: over six thousand dollars a month, recurring.",
          "sub": "Sau đó: hơn 6.000 đô la doanh thu định kỳ mỗi tháng.",
          "keys": [
            "6.000 đô la"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For about two hours of work a week.",
          "sub": "Chỉ cần khoảng hai giờ mỗi tuần để duy trì.",
          "keys": [
            "hai giờ mỗi tuần"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p3"
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
            "id": "e-c0",
            "t": "box",
            "x": 8772,
            "y": 170,
            "w": 44,
            "h": 44,
            "at": "l1:asked",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 8777,
            "y": 156,
            "size": 56,
            "at": "l1:asked+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Có ai nhờ bạn chưa?",
            "x": 8838,
            "y": 160,
            "size": 46,
            "at": "l1:asked+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 8772,
            "y": 255,
            "w": 44,
            "h": 44,
            "at": "l2:enough",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 8777,
            "y": 241,
            "size": 56,
            "at": "l2:enough+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Đủ người chịu trả tiền?",
            "x": 8838,
            "y": 245,
            "size": 46,
            "at": "l2:enough+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 8772,
            "y": 340,
            "w": 44,
            "h": 44,
            "at": "l2:already",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 8777,
            "y": 326,
            "size": 56,
            "at": "l2:already+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Đã có ai phục vụ họ?",
            "x": 8838,
            "y": 330,
            "size": 46,
            "at": "l2:already+200"
          },
          {
            "id": "e-cp",
            "t": "text",
            "text": "Có đối thủ = dấu hiệu tốt",
            "x": 8772,
            "y": 450,
            "size": 50,
            "at": "l3:competitor",
            "color": "accent",
            "hl": [
              {
                "text": "dấu hiệu tốt",
                "at": "l3:good sign"
              }
            ]
          },
          {
            "id": "e-an",
            "t": "text",
            "text": "… nếu bạn có góc nhìn khác",
            "x": 8772,
            "y": 530,
            "size": 44,
            "at": "l4:angle",
            "hl": [
              {
                "text": "góc nhìn khác",
                "at": "l4:different angle"
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
          "say": "Then three market questions. Has anyone asked you for help?",
          "sub": "Rồi ba câu về thị trường. Đã có ai nhờ bạn chưa?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Will enough people pay for your expertise? Does anyone already serve these customers?",
          "sub": "Đủ người chịu trả tiền cho chuyên môn của bạn chưa? Đã có ai phục vụ nhóm khách này chưa?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Surprise: a competitor is a good sign. Money is already paid for that problem.",
          "sub": "Bất ngờ: có đối thủ là dấu hiệu tốt. Tiền đang được trả cho vấn đề đó.",
          "keys": [
            "dấu hiệu tốt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "As long as you bring a different angle.",
          "sub": "Miễn là bạn có một góc nhìn khác.",
          "keys": [
            "góc nhìn khác"
          ]
        }
      ],
      "ref": "p4"
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
            "text": "Tuần 2 · Nên hỏi ai?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Week",
            "hl": [
              {
                "text": "hỏi ai",
                "at": "l1:ask"
              }
            ]
          },
          {
            "id": "f-fam",
            "t": "text",
            "text": "Bạn bè, người thân",
            "x": 60,
            "y": 1250,
            "size": 52,
            "at": "l2:friends",
            "color": "muted"
          },
          {
            "id": "f-famx",
            "t": "strike",
            "over": "f-fam",
            "at": "l2:unreliable"
          },
          {
            "id": "f-per",
            "t": "text",
            "text": "Chân dung 1 người lợi nhất",
            "x": 60,
            "y": 1340,
            "size": 52,
            "at": "l3:persona",
            "color": "accent",
            "hl": [
              {
                "text": "Chân dung",
                "at": "l3:persona"
              }
            ]
          },
          {
            "id": "f-kr",
            "t": "text",
            "text": "Kris Murray: nhà trẻ nhỏ → chủ chuỗi",
            "x": 60,
            "y": 1440,
            "size": 42,
            "at": "l4:Kris"
          },
          {
            "id": "f-20k",
            "t": "text",
            "text": "> 20.000 đô/tháng",
            "x": 60,
            "y": 1520,
            "size": 56,
            "at": "l5:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "20.000 đô",
                "at": "l5:twenty thousand"
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
          "say": "Week two. So whom should Dũng ask?",
          "sub": "Tuần 2. Vậy Dũng nên hỏi ai?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Guillebeau warns: friends and family are unreliable judges of an idea.",
          "sub": "Guillebeau nhắc: góp ý của bạn bè, người thân thường không đáng tin để thẩm định ý tưởng.",
          "keys": [
            "không đáng tin"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Define a persona, the one person who benefits most. Then talk deeply with people like that.",
          "sub": "Xác định chân dung người hưởng lợi nhiều nhất, rồi trò chuyện thật kỹ với đúng kiểu người ấy.",
          "keys": [
            "chân dung"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Kris Murray grew her marketing service by moving from small childcare centres to owners of bigger chains.",
          "sub": "Kris Murray làm tiếp thị: đổi khách từ nhà trẻ nhỏ sang chủ chuỗi nhiều cơ sở, ngân sách lớn hơn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Over twenty thousand dollars a month.",
          "sub": "Hơn 20.000 đô la mỗi tháng.",
          "keys": [
            "20.000 đô la"
          ]
        }
      ],
      "ref": "p7"
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
            "at": "l4:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "gear",
                "notebook"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l4",
            "caption": "Tuần 2 · khu xưởng nhỏ",
            "icon": "gear"
          },
          {
            "id": "f-2nd",
            "t": "text",
            "text": "Thứ cấp: có sẵn, nhanh, chung",
            "x": 60,
            "y": 1610,
            "size": 42,
            "at": "l1:Secondary",
            "hl": [
              {
                "text": "Thứ cấp",
                "at": "l1:Secondary"
              }
            ]
          },
          {
            "id": "f-1st",
            "t": "text",
            "text": "Sơ cấp: tự hỏi, chi tiết, tốn",
            "x": 60,
            "y": 1690,
            "size": 42,
            "at": "l3:Primary",
            "color": "accent",
            "hl": [
              {
                "text": "Sơ cấp",
                "at": "l3:Primary"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: U.S. SBA, Market research and competitive analysis",
            "x": 60,
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
          "say": "The SBA splits research in two. Secondary uses existing data: quick, good for trends, population, income.",
          "sub": "SBA chia hai cách. Thứ cấp dùng dữ liệu có sẵn: nhanh, hợp hỏi xu hướng, dân số, thu nhập.",
          "keys": [
            "Thứ cấp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But it may not match your customers.",
          "sub": "Nhưng có thể không khớp nhóm khách của bạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Primary means asking directly: surveys, focus groups, in-depth interviews. Detailed, but slower, maybe costly.",
          "sub": "Sơ cấp là tự hỏi trực tiếp: khảo sát, nhóm thảo luận, phỏng vấn sâu. Chi tiết, nhưng tốn thời gian, có thể tốn tiền.",
          "keys": [
            "Sơ cấp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "My persona: a small workshop owner, like Bác Bình. I'll ask them directly.",
          "sub": "Chân dung khách của tôi: chủ xưởng nhỏ, như bác Bình. Tôi sẽ hỏi trực tiếp.",
          "pose": "explain"
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "Đúng người rồi. Nhưng hỏi gì để khách không chỉ khen cho vui?",
        "illus": "speech-balloon"
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
          "say": "Right people, fine. But what do you ask, so they don't just say nice things?",
          "sub": "Đúng người rồi. Nhưng hỏi gì để khách không chỉ khen cho vui?",
          "keys": [
            "khen cho vui"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p11"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "Tuần 2 · Hỏi câu gì?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday",
            "hl": [
              {
                "text": "Hỏi câu gì",
                "at": "l1:questions"
              }
            ]
          },
          {
            "id": "g-10",
            "t": "text",
            "text": "~10 người đúng chân dung",
            "x": 2028,
            "y": 1250,
            "size": 50,
            "at": "l2:ten",
            "hl": [
              {
                "text": "10 người",
                "at": "l2:ten"
              }
            ]
          },
          {
            "id": "g-how",
            "t": "text",
            "text": "đang làm gì · đang tốn gì",
            "x": 2028,
            "y": 1335,
            "size": 50,
            "at": "l3:do",
            "color": "accent",
            "hl": [
              {
                "text": "đang tốn gì",
                "at": "l3:spend"
              }
            ]
          },
          {
            "id": "g-op",
            "t": "text",
            "text": "Ý kiến về ý tưởng",
            "x": 2028,
            "y": 1425,
            "size": 48,
            "at": "l3:opinion",
            "color": "muted"
          },
          {
            "id": "g-opx",
            "t": "strike",
            "over": "g-op",
            "at": "l3:idea"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Week two, Thursday. Dũng visits Bác Bình's workshop with his questions.",
          "sub": "Tuần 2, thứ Năm. Dũng ghé xưởng bác Bình với mấy câu hỏi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The cheap test: ask about ten such people how they solve it now, and what they'd pay for better.",
          "sub": "Phép thử rẻ: hỏi khoảng mười người như vậy, họ đang xử lý thế nào, sẽ trả bao nhiêu cho cách tốt hơn.",
          "keys": [
            "mười người"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Focus on what they do and spend now, not their opinion of your idea.",
          "sub": "Trọng tâm là họ đang làm gì, đang tốn gì. Không phải ý kiến về ý tưởng của bạn.",
          "keys": [
            "đang làm gì, đang tốn gì"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s16",
      "module": "DLG-01",
      "data": {
        "set": "street",
        "label": "Thứ Năm · xưởng bác Bình",
        "actors": [
          {
            "id": "dung",
            "side": "left",
            "pose": "explain"
          },
          {
            "id": "binh",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“Bác thấy dịch vụ của cháu có hay không?”",
          "why": "Câu hỏi mời người nghe khen cho vui lòng, không kể chuyện thật.",
          "rule": "Hỏi lần gần nhất: xử lý sao, ngừng bao lâu, tốn gì"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Is my maintenance idea good? Would you use it?",
          "sub": "Bác thấy dịch vụ bảo trì của cháu hay không? Có dùng không?",
          "face": "happy",
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
          "say": "That invites a polite compliment, not facts.",
          "sub": "Câu đó mời người ta khen cho vui lòng.",
          "keys": [
            "khen cho vui lòng"
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
          "who": "dung",
          "say": "Last time a machine broke, what did you do? How long, and what did it cost?",
          "sub": "Lần gần nhất máy hỏng, bác xử lý sao, ngừng bao lâu, tốn những gì?",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "binh",
          "say": "Called my usual guy, and the machine stood still all day.",
          "sub": "Gọi người quen, máy nằm im cả ngày.",
          "phase": "redo",
          "face": "worried"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Now that's data.",
          "sub": "Giờ mới là dữ liệu.",
          "phase": "redo",
          "keys": [
            "dữ liệu"
          ]
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
      "id": "s17",
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
            "id": "g-bf",
            "t": "text",
            "text": "Trước: “có hay không?”",
            "x": 2028,
            "y": 1540,
            "size": 48,
            "at": "l1:like",
            "color": "muted"
          },
          {
            "id": "g-bfx",
            "t": "strike",
            "over": "g-bf",
            "at": "l1:idea"
          },
          {
            "id": "g-af",
            "t": "text",
            "text": "Sau: “lần gần nhất…?”",
            "x": 2028,
            "y": 1620,
            "size": 56,
            "at": "l1:happened",
            "color": "accent",
            "hl": [
              {
                "text": "lần gần nhất",
                "at": "l1:already happened"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Hỏi chuyện đã xảy ra",
            "x": 2868,
            "y": 1540,
            "size": 60,
            "at": "l1:Ask",
            "color": "accent",
            "hl": [
              {
                "text": "đã xảy ra",
                "at": "l1:happened"
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
          "say": "Ask about what already happened, not whether they like your idea.",
          "sub": "Hỏi chuyện đã xảy ra, đừng hỏi khách có thích ý tưởng của mình không.",
          "keys": [
            "chuyện đã xảy ra"
          ]
        }
      ],
      "ref": "p13"
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
            "text": "Tuần 3 · Đọc thị trường",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Week",
            "hl": [
              {
                "text": "thị trường",
                "at": "l1:learn"
              }
            ]
          },
          {
            "id": "h-s0",
            "t": "text",
            "text": "1. Nhu cầu",
            "x": 3996,
            "y": 1250,
            "size": 48,
            "at": "l2:Demand"
          },
          {
            "id": "h-s1",
            "t": "text",
            "text": "2. Quy mô",
            "x": 4396,
            "y": 1250,
            "size": 48,
            "at": "l2:size"
          },
          {
            "id": "h-s2",
            "t": "text",
            "text": "3. Kinh tế",
            "x": 3996,
            "y": 1325,
            "size": 48,
            "at": "l2:economy"
          },
          {
            "id": "h-s3",
            "t": "text",
            "text": "4. Vị trí",
            "x": 4396,
            "y": 1325,
            "size": 48,
            "at": "l2:location"
          },
          {
            "id": "h-s4",
            "t": "text",
            "text": "5. Bão hoà",
            "x": 3996,
            "y": 1400,
            "size": 48,
            "at": "l2:saturation",
            "color": "accent"
          },
          {
            "id": "h-s5",
            "t": "text",
            "text": "6. Giá",
            "x": 4396,
            "y": 1400,
            "size": 48,
            "at": "l2:price",
            "color": "accent"
          },
          {
            "id": "h-alt",
            "t": "text",
            "text": "Giá: khách trả cho lựa chọn khác",
            "x": 3996,
            "y": 1500,
            "size": 42,
            "at": "l3:alternatives",
            "hl": [
              {
                "text": "lựa chọn khác",
                "at": "l3:alternatives"
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
          "say": "Week three. The SBA lists what to learn about customers.",
          "sub": "Tuần 3. SBA liệt kê những điều cần biết về khách."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Demand, market size, the local economy, location, saturation, and price.",
          "sub": "Nhu cầu, quy mô thị trường, chỉ số kinh tế, vị trí, mức bão hoà, và giá."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Saturation: how many similar options exist. Price: what customers pay for the alternatives.",
          "sub": "Bão hoà: đã có bao nhiêu lựa chọn tương tự. Giá: khách đang trả bao nhiêu cho lựa chọn thay thế.",
          "keys": [
            "lựa chọn thay thế"
          ]
        }
      ],
      "ref": "p14"
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
            "at": "l3",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "surprised"
                }
              ],
              "props": [
                "telephone-receiver",
                "gear"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2",
            "caption": "Tuần 3 · trước cổng xưởng",
            "icon": "gear"
          },
          {
            "id": "h-cmp",
            "t": "text",
            "text": "Đối thủ: theo sản phẩm, nhóm khách",
            "x": 3996,
            "y": 1590,
            "size": 40,
            "at": "l1:competitors"
          },
          {
            "id": "h-ind",
            "t": "text",
            "text": "Gián tiếp: “gọi người quen”",
            "x": 3996,
            "y": 1670,
            "size": 50,
            "at": "l2:indirect",
            "color": "coral",
            "hl": [
              {
                "text": "Gián tiếp",
                "at": "l2:indirect"
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
          "say": "Then competitors: by product line and customer group, with strengths and weaknesses.",
          "sub": "Rồi đối thủ: theo dòng sản phẩm và nhóm khách, xem điểm mạnh, điểm yếu từng bên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Don't forget indirect ones. For Dũng, it's the habit of calling a friend when a machine breaks.",
          "sub": "Đừng quên đối thủ gián tiếp. Với Dũng, đó là thói quen gọi người quen tới sửa khi máy hỏng.",
          "keys": [
            "đối thủ gián tiếp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "So my rival isn't a company. It's 'call my usual guy'.",
          "sub": "Vậy đối thủ của tôi không phải công ty nào, mà là câu “gọi người quen”.",
          "face": "surprised"
        }
      ],
      "ref": "p15"
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
            "at": "l5:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Thứ Bảy · Bảng của Thảo",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday",
            "hl": [
              {
                "text": "Bảng",
                "at": "l2:table"
              }
            ]
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "notebook",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Thảo",
            "caption": "Sáng thứ Bảy · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "i-s0",
            "t": "text",
            "text": "1. Việc người ta từng nhờ",
            "x": 5964,
            "y": 1260,
            "size": 42,
            "at": "l3:One"
          },
          {
            "id": "i-s1",
            "t": "text",
            "text": "2. Ai nhờ · tự xử lý sao",
            "x": 5964,
            "y": 1340,
            "size": 42,
            "at": "l4:Two"
          },
          {
            "id": "i-s2",
            "t": "text",
            "text": "3. Đang trả ai · tốn giờ",
            "x": 5964,
            "y": 1420,
            "size": 42,
            "at": "l4:Three"
          },
          {
            "id": "i-s3",
            "t": "text",
            "text": "4. Đánh dấu: nhờ + trả + giỏi",
            "x": 5964,
            "y": 1500,
            "size": 42,
            "at": "l5:Four",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Saturday coffee. Meet Thảo, Dũng's old classmate, an accountant for ten years.",
          "sub": "Cà phê sáng thứ Bảy. Còn đây là Thảo, bạn học cũ của Dũng, kế toán mười năm.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I made a table to find my problem. Four steps.",
          "sub": "Mình lập một bảng tìm vấn đề. Bốn bước.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "One: everything people asked me. Shop owners asking how to keep books, or about filing deadlines.",
          "sub": "Một: mọi việc người ta từng nhờ. Chủ hộ hỏi cách ghi sổ, hỏi hạn kê khai."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Two: who asked, and how they cope now. Three: whom they pay, or the time they lose.",
          "sub": "Hai: ai nhờ, họ đang tự xử lý thế nào. Ba: họ trả tiền cho ai, hay tự làm mất thời gian."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Four: mark jobs people ask for, people pay for, and I do well.",
          "sub": "Bốn: đánh dấu việc vừa có người nhờ, vừa có người trả tiền, vừa đúng nghề mình.",
          "keys": [
            "vừa có người trả tiền"
          ],
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p16"
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
            "at": "l2",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-k",
            "t": "text",
            "text": "Đã nhờ · đã trả · làm tốt",
            "x": 5964,
            "y": 1630,
            "size": 54,
            "at": "l1:ask",
            "color": "accent",
            "hl": [
              {
                "text": "đã trả",
                "at": "l1:already pay"
              }
            ]
          },
          {
            "id": "i-3t",
            "t": "text",
            "text": "Dũng: đủ 3 dấu ✓✓✓",
            "x": 5964,
            "y": 1730,
            "size": 50,
            "at": "l2:ticks",
            "hl": [
              {
                "text": "3 dấu",
                "at": "l2:Three ticks"
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
          "say": "A problem worth chasing: people already ask, people already pay, and you do it well.",
          "sub": "Vấn đề đáng theo đuổi: đã có người nhờ, đã có người trả tiền, và bạn làm tốt.",
          "keys": [
            "đã có người nhờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Workshops ask me, they pay someone, and machines are my trade. Three ticks!",
          "sub": "Xưởng có nhờ, xưởng có trả tiền cho người khác, máy lại là nghề của tôi. Đủ ba dấu!",
          "face": "happy"
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s22",
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
            "text": "Trước khi thử: 3 câu nền",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:three",
            "hl": [
              {
                "text": "3 câu nền",
                "at": "l1:base questions"
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
            "at": "l2:clear",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 1246,
            "size": 56,
            "at": "l2:clear+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Sản phẩm, dịch vụ rõ?",
            "x": 7998,
            "y": 1250,
            "size": 46,
            "at": "l2:clear+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1340,
            "w": 44,
            "h": 44,
            "at": "l2:where",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 1326,
            "size": 56,
            "at": "l2:where+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Biết ai mua, ở đâu?",
            "x": 7998,
            "y": 1330,
            "size": 46,
            "at": "l2:where+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1420,
            "w": 44,
            "h": 44,
            "at": "l3:paid",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 1406,
            "size": 56,
            "at": "l3:paid+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Có cách nhận tiền?",
            "x": 7998,
            "y": 1410,
            "size": 46,
            "at": "l3:paid+200"
          },
          {
            "id": "j-no",
            "t": "text",
            "text": "Chưa rõ → làm rõ trước",
            "x": 7932,
            "y": 1510,
            "size": 48,
            "at": "l3:clarify",
            "color": "coral",
            "hl": [
              {
                "text": "làm rõ trước",
                "at": "l3:clarify first"
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
          "say": "Before any test, Guillebeau asks three base questions.",
          "sub": "Trước khi thử, Guillebeau đặt ba câu hỏi nền."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Is there a clear product or service? Do you know who buys, and where to find them?",
          "sub": "Có sản phẩm, dịch vụ rõ ràng chưa? Biết ai sẽ mua và tìm họ ở đâu chưa?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And can you get paid? If not, clarify first.",
          "sub": "Và có cách nhận tiền chưa? Chưa thì làm rõ trước.",
          "keys": [
            "cách nhận tiền"
          ]
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s23",
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
            "at": "l4",
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "toolbox",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
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
            "caption": "Tối thứ Hai · ba tuần sau",
            "icon": "mobile-phone"
          },
          {
            "id": "j-kit",
            "t": "text",
            "text": "Đồ nghề: chưa mua",
            "x": 7932,
            "y": 1610,
            "size": 48,
            "at": "l2:tool kit",
            "color": "muted"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Khách cũ thứ 3",
            "x": 7932,
            "y": 1680,
            "size": 48,
            "at": "l2:third",
            "hl": [
              {
                "text": "thứ 3",
                "at": "l2:third"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Muốn biết phải hỏi”",
            "x": 7932,
            "y": 1760,
            "size": 56,
            "at": "l4:ask",
            "color": "accent",
            "hl": [
              {
                "text": "phải hỏi",
                "at": "l4:ask"
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
          "say": "Monday night, three weeks later. Same phone, same hour.",
          "sub": "Tối thứ Hai, ba tuần sau. Vẫn chiếc điện thoại ấy, vẫn giờ ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The tool kit can wait. Tonight, I call my third old customer.",
          "sub": "Bộ đồ nghề cứ để đó. Tối nay gọi khách cũ thứ ba.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Hello! The last time a machine broke at your place, what happened?",
          "sub": "Alô! Lần gần nhất máy ở xưởng anh hỏng, chuyện gì đã xảy ra?",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "If you want to know, ask. And listen for the 'but'.",
          "sub": "“Muốn biết phải hỏi.” Rồi lắng nghe chữ “nhưng”.",
          "keys": [
            "Muốn biết phải hỏi"
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
            "ms": 1200
          },
          {
            "at": "l1",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "G",
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
            "x": 4536,
            "y": 650,
            "at": "l1+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8572,
            "y": 245,
            "at": "l2+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2668,
            "y": 1620,
            "at": "l3+400"
          },
          {
            "id": "z-src",
            "t": "text",
            "text": "Bài để tham khảo; quy định có thể thay đổi, cần thì hỏi cơ quan/chuyên gia. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1825,
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
          "say": "So: your ten years are a list of people to ask.",
          "sub": "Tóm lại: mười năm trong nghề là một danh sách người để hỏi.",
          "keys": [
            "danh sách người để hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Look for a pain they admit, and money they already spend.",
          "sub": "Tìm nỗi đau khách đã nhận, và tiền họ đang chi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask real customers what happened, not family what they think.",
          "sub": "Hỏi khách thật chuyện đã xảy ra, đừng hỏi người nhà nghĩ gì.",
          "keys": [
            "chuyện đã xảy ra"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next video: testing your idea with the least money.",
          "sub": "Bài sau: thử ý tưởng với ít tiền nhất."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p10,p17,outro"
    },
    {
      "id": "s25",
      "module": "QUIZ-01",
      "data": {
        "q": "You are about to ask, would you buy my service, what is a better question?",
        "options": [
          "Can you tell all your friends that my service is really excellent",
          "Do you agree that my service is better than anything else available",
          "What did you do the last time this problem happened, and what did it cost"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "speech-balloon",
        "why": "Hỏi chuyện đã xảy ra và cái giá đã trả, đừng hỏi khách có mua không."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You are about to ask, would you buy my service, what is a better question?",
          "sub": "Bạn sắp hỏi “anh có mua dịch vụ của em không”, câu nào tốt hơn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Ask what they did the last time the problem happened, and what it cost.",
          "sub": "Hỏi lần gần nhất họ xử lý thế nào, tốn những gì."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Facts beat polite promises.",
          "sub": "Sự thật hơn lời hứa xã giao."
        }
      ],
      "ref": "questions[29]"
    },
    {
      "id": "s26",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi liệt kê năm việc người ta từng nhờ bạn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, list five jobs people once asked you for. Pick one, and call three old customers.",
          "sub": "Tối nay, liệt kê năm việc người ta từng nhờ bạn. Chọn một, gọi ba khách cũ."
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
  "notes": "#145 bài MỚI (chuỗi first-time-founders-after-35, bài 1) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-22 (câu thoại bị cắt): bác Bình qua điện thoại “Xưởng bác có người quen sửa rồi. Nhưng cái khổ là…” → nói trọn ở s04 (“…máy hỏng là ngừng cả ngày chờ thợ, muốn có người kiểm tra trước”). Dòng thời gian: BA TUẦN của Dũng (tối thứ Hai tuần 1: ba ý tưởng, bữa cơm ai cũng khen, cuộc gọi → hai vòng tròn, ba câu tự hỏi, nỗi đau đã nhận → tuần 2 hỏi ai, thứ Năm ở xưởng + “Khoan đã!” câu hỏi mớm → tuần 3 đọc thị trường, đối thủ gián tiếp → thứ Bảy cà phê: bảng của Thảo → tối thứ Hai ba tuần sau, gọi khách cũ thứ ba). Đổi tên theo w145/_series/first-time-founders-after-35.md: anh Hùng → Dũng (40 tuổi, bảo trì máy 12 năm); chủ xưởng p9/p12 → bác Bình; vợ và hai bạn thân p9 → bà Tư (mẹ Dũng) lên hình + vợ, bạn thân kể; chị Mai p16 → Thảo. Số chỉ từ bài: 20 giờ/tuần, 3 tuần, 1.500 đô, > 6.000 đô/tháng, ~2 giờ/tuần, > 20.000 đô/tháng, ~10 người, 12 năm, 40 tuổi. Ngắt nhịp: BRK-11 s07 (ba câu tự hỏi p2), BRK-03 s10 (Paleo Plan p3), BRK-07 s14 (rehook “hỏi gì”), DLG-01 s16 (p12 trước – sau). Tục ngữ: “Muốn biết phải hỏi” (mở s01, khép s23). Lưu ý chung (#133) ở cảnh tóm tắt. Câu đố questions[29].",
  "loop": {
    "open": "s00",
    "close": "s23"
  }
};
