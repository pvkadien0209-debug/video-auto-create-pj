// law-third-party-guarantee--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "law-third-party-guarantee--w01",
  "unit": {
    "audience": "law-contract-security",
    "slug": "law-third-party-guarantee",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Bảo lãnh của công ty mẹ hoặc cá nhân: viết sao cho đòi được?",
    "series": "Giữ chắc khoản phải thu — biện pháp bảo đảm và bảo lãnh cho pháp chế doanh nghiệp"
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
            "at": "l3",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "alarm-clock"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai 8:00 · bàn Thảo",
            "icon": "page-facing-up"
          },
          {
            "id": "a-od",
            "t": "text",
            "text": "Khách quá hạn",
            "x": 60,
            "y": 160,
            "size": 64,
            "at": "l2:overdue",
            "color": "coral",
            "hl": [
              {
                "text": "quá hạn",
                "at": "l2:overdue"
              }
            ]
          },
          {
            "id": "a-pp",
            "t": "box",
            "x": 60,
            "y": 300,
            "w": 800,
            "h": 300,
            "at": "l3:Look",
            "stroke": 5
          },
          {
            "id": "a-pt",
            "t": "text",
            "text": "Bên Bảo Lãnh chỉ thực hiện",
            "x": 85,
            "y": 330,
            "size": 44,
            "at": "l3:guarantor"
          },
          {
            "id": "a-pt2",
            "t": "text",
            "text": "nghĩa vụ khi Bên Mua không…",
            "x": 85,
            "y": 400,
            "size": 44,
            "at": "l3:buyer"
          },
          {
            "id": "a-cut",
            "t": "text",
            "text": "✂",
            "x": 680,
            "y": 480,
            "size": 90,
            "at": "l3:end",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, sales director, waving a guarantee like a winning lottery ticket.",
          "sub": "Đây là Dũng, giám đốc kinh doanh, đang phe phẩy tờ bảo lãnh như tờ vé số trúng.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "His customer is overdue. Dũng is not worried at all.",
          "sub": "Khách của anh vừa quá hạn thanh toán. Dũng chẳng lo chút nào."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Relax! The parent company pays. Look: the guarantor performs only when the buyer is not...",
          "sub": "Yên tâm! Công ty mẹ trả. Đây này: Bên Bảo Lãnh chỉ thực hiện nghĩa vụ khi Bên Mua không…",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "intro,p10"
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
            "id": "b-q",
            "t": "text",
            "text": "Viết sao cho đòi được?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l4:claim",
            "hl": [
              {
                "text": "đòi được",
                "at": "l4:claim"
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "shrug",
                  "face": "surprised"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l1",
            "caption": "8:05 · Thảo đọc nốt",
            "icon": "page-facing-up"
          },
          {
            "id": "b-end",
            "t": "text",
            "text": "…không có khả năng thanh toán",
            "x": 2028,
            "y": 170,
            "size": 46,
            "at": "l2:able",
            "color": "coral",
            "hl": [
              {
                "text": "có khả năng",
                "at": "l2:able"
              }
            ]
          },
          {
            "id": "b-ne",
            "t": "text",
            "text": "không trả ≠ không thể trả",
            "x": 2028,
            "y": 270,
            "size": 56,
            "at": "l3:different",
            "color": "accent",
            "hl": [
              {
                "text": "≠",
                "at": "l3:different"
              }
            ]
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "“Chọn mặt gửi vàng”",
            "x": 2028,
            "y": 400,
            "size": 56,
            "at": "l5:gold",
            "color": "accent",
            "hl": [
              {
                "text": "gửi vàng",
                "at": "l5:gold"
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
          "say": "And this is Thảo, in house counsel, who always reads to the end of the sentence.",
          "sub": "Còn đây là Thảo, pháp chế, người luôn đọc đến hết câu.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "...when the buyer is not able to pay. Not when it is simply late.",
          "sub": "…khi Bên Mua không có khả năng thanh toán. Chứ không phải khi họ chỉ chậm trả.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A few small words. Two very different guarantees.",
          "sub": "Thêm mấy chữ thôi, đã thành hai bảo lãnh khác hẳn nhau.",
          "keys": [
            "hai bảo lãnh khác hẳn nhau"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So how do you draft a guarantee you can actually claim on?",
          "sub": "Vậy viết bảo lãnh thế nào để đòi được thật?",
          "keys": [
            "đòi được thật"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: pick the right face to trust with your gold.",
          "sub": "Ông bà dặn: “Chọn mặt gửi vàng.” Chọn đúng người, rồi viết đúng chữ.",
          "keys": [
            "Chọn mặt gửi vàng"
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
      "ref": "p10,p11"
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
          }
        ],
        "items": [
          {
            "id": "b-no",
            "t": "text",
            "text": "Chữ ký là yên",
            "x": 2028,
            "y": 500,
            "size": 42,
            "at": "l1:signature",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l1:safe"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Đúng người · đúng chữ",
            "x": 2368,
            "y": 495,
            "size": 46,
            "at": "l1:words",
            "color": "accent",
            "hl": [
              {
                "text": "đúng chữ",
                "at": "l1:words"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l2:seven stops+300",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2260,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l2:seven stops+520",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2492,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l2:seven stops+740",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2724,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l2:seven stops+960",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2956,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l2:seven stops+1180",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3188,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l2:seven stops+1400",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3420,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l2:seven stops+1620",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "8:30",
            "x": 2068,
            "y": 628,
            "size": 44,
            "at": "l2:seven stops+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "9:30",
            "x": 2300,
            "y": 628,
            "size": 44,
            "at": "l2:seven stops+640"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "11:00",
            "x": 2532,
            "y": 628,
            "size": 44,
            "at": "l2:seven stops+860"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "13:30",
            "x": 2764,
            "y": 628,
            "size": 44,
            "at": "l2:seven stops+1080"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "15:00",
            "x": 2996,
            "y": 628,
            "size": 44,
            "at": "l2:seven stops+1300"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "16:00",
            "x": 3228,
            "y": 628,
            "size": 44,
            "at": "l2:seven stops+1520"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "17:00",
            "x": 3460,
            "y": 628,
            "size": 44,
            "at": "l2:seven stops+1740"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Not a signature and you feel safe. The right guarantor, and the right words.",
          "sub": "Không phải có chữ ký là yên tâm. Mà là đúng người bảo lãnh, và đúng câu chữ.",
          "keys": [
            "đúng câu chữ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo audits the guarantee cabinet today, in seven stops.",
          "sub": "Hôm nay Thảo rà cả tủ bảo lãnh, bảy chặng, đến chiều.",
          "keys": [
            "bảy chặng"
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
            "text": "① 8:30 · Ai hứa với ai?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-me",
            "t": "box",
            "x": 3996,
            "y": 200,
            "w": 420,
            "h": 110,
            "at": "l2:your company",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "c-met",
            "t": "text",
            "text": "Công ty mình",
            "x": 4026,
            "y": 220,
            "size": 46,
            "at": "l2:your company+200"
          },
          {
            "id": "c-mes",
            "t": "text",
            "text": "bên nhận bảo lãnh",
            "x": 4026,
            "y": 320,
            "size": 34,
            "at": "l2:receives",
            "color": "muted"
          },
          {
            "id": "c-cu",
            "t": "box",
            "x": 4596,
            "y": 200,
            "w": 400,
            "h": 110,
            "at": "l2:customer",
            "stroke": 5
          },
          {
            "id": "c-cut",
            "t": "text",
            "text": "Khách hàng",
            "x": 4636,
            "y": 220,
            "size": 46,
            "at": "l2:customer+200"
          },
          {
            "id": "c-cus",
            "t": "text",
            "text": "bên được bảo lãnh",
            "x": 4626,
            "y": 320,
            "size": 34,
            "at": "l2:guaranteed",
            "color": "muted"
          },
          {
            "id": "c-pa",
            "t": "box",
            "x": 5176,
            "y": 200,
            "w": 420,
            "h": 110,
            "at": "l3:parent",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "c-pat",
            "t": "text",
            "text": "Công ty mẹ / chủ",
            "x": 5196,
            "y": 220,
            "size": 44,
            "at": "l3:parent+200"
          },
          {
            "id": "c-pas",
            "t": "text",
            "text": "bên bảo lãnh",
            "x": 5216,
            "y": 320,
            "size": 34,
            "at": "l3:guarantor",
            "color": "muted"
          },
          {
            "id": "c-ar",
            "t": "arrow",
            "from": [
              5176,
              250
            ],
            "to": [
              4416,
              250
            ],
            "at": "l3:promises",
            "color": "coral"
          },
          {
            "id": "c-335",
            "t": "text",
            "text": "Đ335: đến hạn không trả → trả thay",
            "x": 3996,
            "y": 420,
            "size": 44,
            "at": "l4:due",
            "hl": [
              {
                "text": "trả thay",
                "at": "l4:instead"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "BLDS 2015, Điều 335",
            "x": 3996,
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
          "say": "First stop: eight thirty. Article three thirty five. Who promises what, to whom?",
          "sub": "Chặng một: tám rưỡi. Điều 335. Ai hứa gì, với ai?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your company receives the guarantee. The customer is the one guaranteed.",
          "sub": "Công ty mình là bên nhận bảo lãnh. Khách hàng là bên được bảo lãnh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The parent company or the owner is the guarantor. It promises your company directly.",
          "sub": "Công ty mẹ hoặc chủ sở hữu là bên bảo lãnh. Họ hứa thẳng với công ty mình."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It will pay instead of the customer if, when due, the customer fails or pays wrongly.",
          "sub": "Họ sẽ thực hiện thay khách nếu đến hạn mà khách không thực hiện hoặc làm không đúng.",
          "keys": [
            "thực hiện thay"
          ]
        }
      ],
      "ref": "p1"
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
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4936,
            "y": 400,
            "w": 640,
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
                "writing-hand",
                "page-facing-up"
              ]
            },
            "at": "l1",
            "caption": "8:45 · hồ sơ thứ nhất",
            "icon": "writing-hand"
          },
          {
            "id": "c-sig",
            "t": "text",
            "text": "Chữ ký của chính bên bảo lãnh",
            "x": 3996,
            "y": 510,
            "size": 42,
            "at": "l2:signature",
            "color": "accent",
            "hl": [
              {
                "text": "chính bên bảo lãnh",
                "at": "l2:guarantor itself"
              }
            ]
          },
          {
            "id": "c-chr",
            "t": "text",
            "text": "Người ký đúng thẩm quyền điều lệ?",
            "x": 3996,
            "y": 580,
            "size": 40,
            "at": "l3:charter",
            "color": "coral"
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "Đ335.2: “không có khả năng” — cân nhắc",
            "x": 3996,
            "y": 650,
            "size": 36,
            "at": "l4:unable",
            "hl": [
              {
                "text": "cân nhắc",
                "at": "l4:carefully"
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
          "say": "File one: a promise buried in the sales contract. The parent never signed.",
          "sub": "Hồ sơ một: lời hứa nằm trong hợp đồng mua bán. Công ty mẹ chưa hề ký.",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A guarantee is an agreement, so it needs the signature of the guarantor itself.",
          "sub": "Bảo lãnh là thoả thuận, nên phải có chữ ký của chính bên bảo lãnh.",
          "keys": [
            "chính bên bảo lãnh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And if the guarantor is a company, check the signer's authority under its charter.",
          "sub": "Bên bảo lãnh là doanh nghiệp thì kiểm người ký có đúng thẩm quyền theo điều lệ không.",
          "keys": [
            "thẩm quyền theo điều lệ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Clause two allows the unable to pay version. Weigh it carefully: it narrows your claim.",
          "sub": "Khoản 2 Điều 335 cho thoả thuận kiểu “không có khả năng”. Cân nhắc kỹ, vì nó thu hẹp quyền đòi.",
          "keys": [
            "Cân nhắc kỹ"
          ]
        }
      ],
      "ref": "p2,p3"
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
            "text": "② 9:30 · Phạm vi",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-336",
            "t": "text",
            "text": "Đ336: một phần hoặc toàn bộ",
            "x": 5964,
            "y": 165,
            "size": 46,
            "at": "l1:part",
            "hl": [
              {
                "text": "toàn bộ",
                "at": "l1:whole"
              }
            ]
          },
          {
            "id": "d-def",
            "t": "text",
            "text": "Mặc định: lãi · phạt · bồi thường",
            "x": 5964,
            "y": 245,
            "size": 46,
            "at": "l2:interest",
            "color": "accent"
          },
          {
            "id": "d-def2",
            "t": "text",
            "text": "+ lãi trên tiền chậm trả",
            "x": 6004,
            "y": 315,
            "size": 40,
            "at": "l2:late"
          },
          {
            "id": "d-mort",
            "t": "text",
            "text": "Chủ: bảo lãnh + thế chấp riêng",
            "x": 5964,
            "y": 400,
            "size": 40,
            "at": "l3:mortgage",
            "hl": [
              {
                "text": "thế chấp",
                "at": "l3:mortgage"
              }
            ]
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Đ336.4: không phủ nợ sau khi",
            "x": 5964,
            "y": 490,
            "size": 42,
            "at": "l4:dies",
            "color": "coral"
          },
          {
            "id": "d-4b",
            "t": "text",
            "text": "bên bảo lãnh chết / chấm dứt",
            "x": 6004,
            "y": 555,
            "size": 36,
            "at": "l4:ceases",
            "color": "coral"
          },
          {
            "id": "d-cap",
            "t": "text",
            "text": "Ghi: hạn mức · thời hạn · đơn",
            "x": 5964,
            "y": 640,
            "size": 42,
            "at": "l5:cap",
            "color": "accent",
            "hl": [
              {
                "text": "hạn mức",
                "at": "l5:cap"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "BLDS 2015, Điều 336",
            "x": 5964,
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
          "say": "Second stop: nine thirty. Article three thirty six. Guarantee part of the debt, or the whole.",
          "sub": "Chặng hai: chín rưỡi. Điều 336: bảo lãnh một phần hoặc toàn bộ nghĩa vụ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Unless agreed otherwise, it covers interest, penalties, damages, and interest on late payment.",
          "sub": "Không thoả thuận khác thì gồm cả lãi trên nợ gốc, tiền phạt, bồi thường thiệt hại, lãi trên số tiền chậm trả.",
          "keys": [
            "lãi trên số tiền chậm trả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "An owner may even guarantee, and also mortgage a private asset for that guarantee.",
          "sub": "Chủ doanh nghiệp còn có thể vừa bảo lãnh, vừa thế chấp một tài sản riêng cho chính nghĩa vụ đó."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But clause four: no cover for debts arising after the guarantor dies, or the company ceases to exist.",
          "sub": "Nhưng khoản 4: không phủ nghĩa vụ phát sinh sau khi người bảo lãnh chết hoặc pháp nhân bảo lãnh chấm dứt tồn tại.",
          "keys": [
            "chấm dứt tồn tại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So write a cap, a term, the contracts covered, and keep watching the guarantor.",
          "sub": "Nên ghi rõ hạn mức tối đa, thời hạn, hợp đồng hay nhóm đơn được bảo lãnh, và theo dõi bên bảo lãnh.",
          "keys": [
            "hạn mức tối đa"
          ]
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s06",
      "module": "BRK-07",
      "data": {
        "question": "Nếu chính bên bảo lãnh biến mất thì sao?",
        "illus": "ghost"
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
          "say": "What if the guarantor itself disappears?",
          "sub": "Nếu chính bên bảo lãnh biến mất thì sao?",
          "keys": [
            "biến mất"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
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
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6964,
            "y": 140,
            "w": 580,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold",
                  "face": "worried"
                }
              ],
              "props": [
                "delivery-truck",
                "package"
              ]
            },
            "at": "l1",
            "caption": "10:00 · hồ sơ thứ hai",
            "icon": "delivery-truck"
          },
          {
            "id": "d-dis",
            "t": "text",
            "text": "Công ty mẹ giải thể giữa kỳ",
            "x": 6904,
            "y": 590,
            "size": 36,
            "at": "l1:dissolved",
            "color": "coral"
          },
          {
            "id": "d-out",
            "t": "text",
            "text": "Đơn giao sau đó: ngoài phạm vi",
            "x": 6904,
            "y": 645,
            "size": 36,
            "at": "l3:outside",
            "hl": [
              {
                "text": "ngoài phạm vi",
                "at": "l3:outside"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Bảo lãnh sống cùng bên bảo lãnh",
            "x": 6904,
            "y": 700,
            "size": 34,
            "at": "l4:lives",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "File two: the parent of a packaging customer was dissolved mid term.",
          "sub": "Hồ sơ hai: công ty mẹ của một khách làm bao bì đã giải thể giữa kỳ.",
          "face": "worried"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "So what? We still have a guarantee. My team kept shipping as usual.",
          "sub": "Thì sao? Mình vẫn có bảo lãnh mà. Đội anh vẫn giao hàng như cũ.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Orders shipped after the parent ceased to exist fall outside the guarantee.",
          "sub": "Các đơn giao sau khi công ty mẹ chấm dứt tồn tại nằm ngoài phạm vi bảo lãnh.",
          "keys": [
            "ngoài phạm vi bảo lãnh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A guarantee for future debt lives only as long as the guarantor. Watch it like a customer.",
          "sub": "Bảo lãnh cho nợ tương lai chỉ sống cùng bên bảo lãnh. Theo dõi họ như theo dõi khách hàng.",
          "keys": [
            "chỉ sống cùng bên bảo lãnh"
          ]
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
            "text": "③ 11:00 · Khi nào được đòi?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-339",
            "t": "text",
            "text": "Đ339: khách không trả / trả sai",
            "x": 7932,
            "y": 165,
            "size": 46,
            "at": "l1:fails",
            "hl": [
              {
                "text": "không trả",
                "at": "l1:fails"
              }
            ]
          },
          {
            "id": "e-339b",
            "t": "text",
            "text": "→ đòi bên bảo lãnh",
            "x": 7972,
            "y": 240,
            "size": 46,
            "at": "l1:demand",
            "color": "accent"
          },
          {
            "id": "e-due",
            "t": "text",
            "text": "Chưa đến hạn: chưa được đòi",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "l2:due",
            "color": "coral",
            "hl": [
              {
                "text": "Chưa đến hạn",
                "at": "l2:before"
              }
            ]
          },
          {
            "id": "e-342",
            "t": "text",
            "text": "Đ342: không trả → giá trị + bồi thường",
            "x": 7932,
            "y": 420,
            "size": 36,
            "at": "l3:refuses"
          },
          {
            "id": "e-340",
            "t": "text",
            "text": "Đ340: trả xong, đòi lại khách",
            "x": 7932,
            "y": 490,
            "size": 40,
            "at": "l4:back",
            "color": "muted"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "BLDS 2015, Điều 339, 340, 342",
            "x": 7932,
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
          "say": "Third stop: eleven a.m. Article three thirty nine. The customer fails, so you may demand from the guarantor.",
          "sub": "Chặng ba: mười một giờ. Điều 339: khách không thực hiện hoặc làm không đúng, được yêu cầu bên bảo lãnh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Unless you agreed on the inability version. And never before the debt is due.",
          "sub": "Trừ khi đã thoả thuận kiểu “không có khả năng”. Và không được đòi khi nghĩa vụ chưa đến hạn.",
          "keys": [
            "chưa đến hạn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "If the guarantor refuses, Article three forty two: claim the value, plus damages.",
          "sub": "Bên bảo lãnh không làm đúng? Điều 342: đòi giá trị nghĩa vụ bị vi phạm và bồi thường thiệt hại."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Once it pays, it claims back from the customer. That is their business, not yours.",
          "sub": "Trả thay xong, bên bảo lãnh đòi lại khách trong phạm vi đã trả, Điều 340. Chuyện đó giữa họ với nhau."
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "11:30 · bàn Dũng",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "thao",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Quá hạn là đòi ngay bên bảo lãnh",
          "why": "Câu chữ gắn với “không có khả năng thanh toán”. Khách vẫn hoạt động, chỉ chậm trả.",
          "rule": "Đọc kỹ điều kiện kích hoạt"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Overdue means pay up. I'm sending the demand to the parent today!",
          "sub": "Quá hạn là phải trả. Chiều nay anh gửi công ty mẹ luôn!",
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
          "say": "It says unable to pay. The customer is open, just balancing cash.",
          "sub": "Câu chữ ghi “không có khả năng thanh toán”. Khách vẫn mở cửa, chỉ đang cân đối tiền.",
          "keys": [
            "không có khả năng thanh toán"
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
          "say": "With this wording it's hard. We must show they can't pay, not just that they're late.",
          "sub": "Câu này thì khó. Phải cho thấy khách không thể trả, không chỉ chậm.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Next time: failing to pay when due.",
          "sub": "Lần sau: gắn với đến hạn mà không trả.",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p10"
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
          }
        ],
        "items": [
          {
            "id": "e-ba",
            "t": "box",
            "x": 8832,
            "y": 160,
            "w": 700,
            "h": 120,
            "at": "l1:Failing",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "“không thực hiện khi đến hạn”",
            "x": 8857,
            "y": 190,
            "size": 38,
            "at": "l1:Failing+200",
            "color": "accent"
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "→ đòi ngay khi quá hạn",
            "x": 8857,
            "y": 300,
            "size": 40,
            "at": "l1:overdue"
          },
          {
            "id": "e-bb",
            "t": "box",
            "x": 8832,
            "y": 380,
            "w": 700,
            "h": 120,
            "at": "l2:unable",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "“không có khả năng thực hiện”",
            "x": 8857,
            "y": 410,
            "size": 38,
            "at": "l2:unable+200",
            "color": "coral"
          },
          {
            "id": "e-b2",
            "t": "text",
            "text": "→ phải chứng minh không thể trả",
            "x": 8857,
            "y": 520,
            "size": 38,
            "at": "l2:prove"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Hai câu = hai bảo lãnh",
            "x": 7932,
            "y": 600,
            "size": 56,
            "at": "l3:two",
            "color": "accent",
            "hl": [
              {
                "text": "hai bảo lãnh",
                "at": "l3:guarantees"
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
          "say": "Failing to pay when due: you can claim the day it goes overdue.",
          "sub": "Gắn với “đến hạn mà không thực hiện”: quá hạn là đòi được ngay.",
          "keys": [
            "quá hạn là đòi được ngay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Unable to pay: you must prove the customer cannot, not just will not.",
          "sub": "Gắn với “không có khả năng”: phải cho thấy khách không thể trả, chứ không chỉ chậm trả."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Read the trigger first. Two wordings, two different guarantees.",
          "sub": "Đọc điều kiện kích hoạt trước tiên. Hai cách viết, hai bảo lãnh khác nhau.",
          "keys": [
            "Đọc điều kiện kích hoạt"
          ]
        }
      ],
      "ref": "p10,p11"
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
            "text": "④ 13:30 · Nợ ngược",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop",
            "hl": [
              {
                "text": "Nợ ngược",
                "at": "l2:owe"
              }
            ]
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "abacus",
                "money-bag"
              ]
            },
            "at": "l1:Hoa",
            "caption": "13:30 · Cô Hoa duyệt thư đòi",
            "icon": "abacus"
          },
          {
            "id": "f-339",
            "t": "text",
            "text": "Đ339.3: có quyền bù trừ",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l3:set off",
            "color": "coral",
            "hl": [
              {
                "text": "bù trừ",
                "at": "l3:set off"
              }
            ]
          },
          {
            "id": "f-339b",
            "t": "text",
            "text": "→ bên bảo lãnh được miễn",
            "x": 100,
            "y": 1335,
            "size": 44,
            "at": "l3:released"
          },
          {
            "id": "f-bon",
            "t": "text",
            "text": "thưởng doanh số chưa chi",
            "x": 60,
            "y": 1430,
            "size": 44,
            "at": "l2:bonus",
            "color": "muted"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Đối chiếu công nợ hai chiều",
            "x": 60,
            "y": 1540,
            "size": 50,
            "at": "l4:both ways",
            "color": "accent",
            "hl": [
              {
                "text": "hai chiều",
                "at": "l4:both ways"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "BLDS 2015, khoản 3 Điều 339",
            "x": 60,
            "y": 1810,
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
          "say": "Fourth stop: half past one. Cô Hoa, head of legal, reviews the demand letter.",
          "sub": "Chặng bốn: một rưỡi chiều. Cô Hoa, trưởng phòng pháp chế, duyệt thư yêu cầu.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Before we send it, Thảo: do we owe them anything? An unpaid sales bonus?",
          "sub": "Trước khi gửi, Thảo ơi: mình có đang nợ ngược họ không? Thưởng doanh số chưa chi chẳng hạn?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Clause three: if you can set off debts with the customer, the guarantor is released.",
          "sub": "Khoản 3 Điều 339: bên nhận bảo lãnh có quyền bù trừ với khách thì bên bảo lãnh được miễn.",
          "keys": [
            "được miễn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I'll check both ways with accounting first. Then we send.",
          "sub": "Em đối chiếu công nợ hai chiều với kế toán trước. Rồi mới gửi.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Right, let's do that!",
          "sub": "Rồi, vậy nha!",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1500
        }
      ],
      "ref": "p12,p13"
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
            "text": "⑤ 15:00 · Khi nào chấm dứt?",
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "give",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "stop"
                }
              ],
              "props": [
                "scissors",
                "page-facing-up"
              ]
            },
            "at": "l2",
            "caption": "15:00 · Dũng muốn đổi",
            "icon": "scissors"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1260,
            "w": 40,
            "h": 40,
            "at": "l1:ends",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1244,
            "size": 50,
            "at": "l1:ends+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Nghĩa vụ được bảo lãnh chấm dứt",
            "x": 2090,
            "y": 1250,
            "size": 38,
            "at": "l1:ends+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1335,
            "w": 40,
            "h": 40,
            "at": "l1:replaced",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1319,
            "size": 50,
            "at": "l1:replaced+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Huỷ bỏ / thay biện pháp khác",
            "x": 2090,
            "y": 1325,
            "size": 38,
            "at": "l1:replaced+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1410,
            "w": 40,
            "h": 40,
            "at": "l1:performs",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1394,
            "size": 50,
            "at": "l1:performs+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Bên bảo lãnh đã trả",
            "x": 2090,
            "y": 1400,
            "size": 38,
            "at": "l1:performs+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1485,
            "w": 40,
            "h": 40,
            "at": "l1:agree",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1469,
            "size": 50,
            "at": "l1:agree+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Theo thoả thuận",
            "x": 2090,
            "y": 1475,
            "size": 38,
            "at": "l1:agree+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: three p.m. Article three forty three: the debt ends, it's replaced, the guarantor performs, or the parties agree.",
          "sub": "Chặng năm: ba giờ chiều. Điều 343: nghĩa vụ chấm dứt, bảo lãnh bị huỷ hay thay bằng biện pháp khác, bên bảo lãnh đã trả, hoặc theo thoả thuận."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The customer offers a mortgage instead. I'll release the guarantee today!",
          "sub": "Khách đề nghị thế chấp thay cho bảo lãnh. Anh huỷ bảo lãnh luôn hôm nay!",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Not yet. The swap ends the old guarantee. Sign it only after the mortgage is signed and registered.",
          "sub": "Khoan. Đổi là bảo lãnh cũ chấm dứt. Chỉ ký văn bản thay thế khi thế chấp đã ký xong và đã đăng ký.",
          "pose": "stop"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Same with a new sales contract: get the guarantor's written confirmation of the new scope.",
          "sub": "Thanh lý hợp đồng cũ, ký hợp đồng mới cũng vậy: xin bên bảo lãnh xác nhận phạm vi mới bằng văn bản.",
          "keys": [
            "xác nhận phạm vi mới bằng văn bản"
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
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-k",
            "t": "text",
            "text": "Có mới rồi mới bỏ cũ",
            "x": 2028,
            "y": 1610,
            "size": 52,
            "at": "l1:new",
            "color": "accent",
            "hl": [
              {
                "text": "rồi mới bỏ",
                "at": "l1:before"
              }
            ]
          },
          {
            "id": "g-nd",
            "t": "text",
            "text": "Không mặc định “tự chuyển theo”",
            "x": 2028,
            "y": 1700,
            "size": 44,
            "at": "l2:automatically",
            "color": "coral"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "BLDS 2015, Điều 343",
            "x": 2028,
            "y": 1810,
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
          "say": "Hold the new rope before you let go of the old one.",
          "sub": "Nắm chắc dây mới rồi mới buông dây cũ.",
          "keys": [
            "rồi mới buông dây cũ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Never assume a guarantee moves automatically to a new contract.",
          "sub": "Đừng mặc định bảo lãnh tự chuyển theo hợp đồng mới."
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s14",
      "module": "BRK-05",
      "data": {
        "title": "Đến đây, Thảo đã rà",
        "points": [
          "Không trả ≠ không có khả năng trả",
          "Bảo lãnh sống cùng bên bảo lãnh",
          "Đối chiếu nợ hai chiều trước khi đòi"
        ],
        "illus": "clipboard"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Quick recap.",
          "sub": "Nhắc nhanh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Failing to pay is not being unable to pay.",
          "sub": "Không trả khác không có khả năng trả."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A guarantee lives with its guarantor.",
          "sub": "Bảo lãnh sống cùng bên bảo lãnh."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Check debts both ways before you claim.",
          "sub": "Đối chiếu nợ hai chiều trước khi đòi."
        }
      ],
      "ref": "p11,p7,p13"
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
            "text": "⑥ 16:00 · Thư bảo lãnh ngân hàng",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "bank",
                "envelope"
              ]
            },
            "at": "l1:Uncle",
            "caption": "16:00 · cà phê với Bác Bình",
            "icon": "bank"
          },
          {
            "id": "h-61",
            "t": "text",
            "text": "Thông tư 61/2024/TT-NHNN",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l3:Circular",
            "color": "accent",
            "hl": [
              {
                "text": "61/2024",
                "at": "l3:sixty one"
              }
            ]
          },
          {
            "id": "h-61b",
            "t": "text",
            "text": "hiệu lực 01/4/2025, thay TT 11/2022",
            "x": 3996,
            "y": 1330,
            "size": 38,
            "at": "l3:April"
          },
          {
            "id": "h-form",
            "t": "text",
            "text": "Thư bảo lãnh / hợp đồng bảo lãnh",
            "x": 3996,
            "y": 1410,
            "size": 40,
            "at": "l3:letter"
          },
          {
            "id": "h-hol",
            "t": "text",
            "text": "Hết hạn ngày lễ → ngày làm việc",
            "x": 3996,
            "y": 1490,
            "size": 36,
            "at": "l4:holiday",
            "color": "muted"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Theo các bài tổng hợp công khai về TT 61/2024",
            "x": 4856,
            "y": 1810,
            "size": 28,
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
          "say": "Sixth stop: four p.m. A new customer sends a bank guarantee. Thảo calls in Uncle Bình, a veteran lawyer.",
          "sub": "Chặng sáu: bốn giờ chiều. Khách mới gửi thư bảo lãnh ngân hàng. Thảo hẹn Bác Bình, luật sư lâu năm.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "A bank guarantee follows the Civil Code, plus the State Bank's own rules. Read the letter, not the logo.",
          "sub": "Bảo lãnh ngân hàng theo Bộ luật Dân sự, cộng quy định riêng của Ngân hàng Nhà nước. Đọc thư, đừng nhìn logo.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Circular sixty one of 2024, in force from April 2025, replaced Circular eleven. A letter, or a contract.",
          "sub": "Thông tư 61/2024/TT-NHNN, hiệu lực từ 01/4/2025, thay Thông tư 11/2022: phát hành bằng thư bảo lãnh hoặc hợp đồng bảo lãnh.",
          "keys": [
            "Thông tư 61/2024/TT-NHNN"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It states amount, currency, expiry, conditions and demand documents. Expiry on a holiday moves to the next working day.",
          "sub": "Cam kết ghi số tiền, đồng tiền, ngày hết hiệu lực, điều kiện, hồ sơ yêu cầu. Hết hạn trùng ngày nghỉ thì chuyển sang ngày làm việc kế tiếp."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1500
        }
      ],
      "ref": "p16,p17"
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
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1560,
            "w": 40,
            "h": 40,
            "at": "l1:named",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1544,
            "size": 50,
            "at": "l1:named+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Đúng tên công ty mình",
            "x": 4058,
            "y": 1550,
            "size": 32,
            "at": "l1:named+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1618,
            "w": 40,
            "h": 40,
            "at": "l1:amount",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1602,
            "size": 50,
            "at": "l1:amount+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Số tiền, đồng tiền khớp",
            "x": 4058,
            "y": 1608,
            "size": 32,
            "at": "l1:amount+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1676,
            "w": 40,
            "h": 40,
            "at": "l2:expiry",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1660,
            "size": 50,
            "at": "l2:expiry+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Hết hạn muộn hơn hạn trả",
            "x": 4058,
            "y": 1666,
            "size": 32,
            "at": "l2:expiry+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1734,
            "w": 40,
            "h": 40,
            "at": "l3:documents",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1718,
            "size": 50,
            "at": "l3:documents+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Hồ sơ đòi: tự lập được?",
            "x": 4058,
            "y": 1724,
            "size": 32,
            "at": "l3:documents+200"
          },
          {
            "id": "h-c4",
            "t": "box",
            "x": 3996,
            "y": 1792,
            "w": 40,
            "h": 40,
            "at": "l4:authenticity",
            "stroke": 5
          },
          {
            "id": "h-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1776,
            "size": 50,
            "at": "l4:authenticity+600",
            "color": "accent"
          },
          {
            "id": "h-l4",
            "t": "text",
            "text": "Kiểm tính xác thực",
            "x": 4058,
            "y": 1782,
            "size": 32,
            "at": "l4:authenticity+200"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Khớp từng điều kiện mới trả",
            "x": 4856,
            "y": 1730,
            "size": 40,
            "at": "l5:matches",
            "color": "accent",
            "hl": [
              {
                "text": "từng điều kiện",
                "at": "l5:every condition"
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
          "say": "Five checks. Is your company named right? Do amount and currency match the contract?",
          "sub": "Năm bước. Tên bên nhận đúng tên công ty mình chưa? Số tiền, đồng tiền, nghĩa vụ có khớp hợp đồng?",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Does the expiry fall well after the last payment date, with time to send a demand?",
          "sub": "Ngày hết hiệu lực có muộn hơn hạn thanh toán cuối một khoảng đủ để gửi yêu cầu không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Read the demand documents. Is there any paper you can't produce yourself?",
          "sub": "Đọc danh mục hồ sơ yêu cầu: có giấy nào mình không tự lập được không?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Five: check authenticity, the way the letter says.",
          "sub": "Năm: kiểm tính xác thực theo cách ghi trong thư."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A bank pays only when your demand matches every condition in the letter.",
          "sub": "Thư bảo lãnh ngân hàng chỉ trả khi yêu cầu khớp từng điều kiện ghi trong thư.",
          "keys": [
            "khớp từng điều kiện"
          ]
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s17",
      "module": "BRK-04",
      "data": {
        "title": "Câu bảo lãnh",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“Công ty mẹ cam kết hỗ trợ Bên Mua thanh toán”",
        "right": "“Bên Bảo Lãnh thực hiện thay khi đến hạn mà không trả”",
        "wrongIllus": "thinking-face",
        "rightIllus": "writing-hand"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before: the parent will support the buyer.",
          "sub": "Trước: công ty mẹ cam kết “hỗ trợ” Bên Mua."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: the guarantor pays instead, if the buyer fails when due.",
          "sub": "Sau: Bên Bảo Lãnh thực hiện thay, nếu đến hạn Bên Mua không thực hiện.",
          "keys": [
            "thực hiện thay"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p20"
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
            "text": "⑦ 17:00 · Câu đủ vế",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "happy"
                }
              ],
              "props": [
                "writing-hand",
                "fountain-pen"
              ]
            },
            "at": "l1:pen",
            "caption": "17:00 · Thảo viết lại",
            "icon": "fountain-pen"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 40,
            "h": 40,
            "at": "l2:Who",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1244,
            "size": 50,
            "at": "l2:Who+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Ai trả thay",
            "x": 6026,
            "y": 1250,
            "size": 40,
            "at": "l2:Who+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1340,
            "w": 40,
            "h": 40,
            "at": "l2:what",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1324,
            "size": 50,
            "at": "l2:what+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Trả cái gì: gốc, lãi, phạt",
            "x": 6026,
            "y": 1330,
            "size": 40,
            "at": "l2:what+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1420,
            "w": 40,
            "h": 40,
            "at": "l3:maximum",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1404,
            "size": 50,
            "at": "l3:maximum+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Tối đa bao nhiêu",
            "x": 6026,
            "y": 1410,
            "size": 40,
            "at": "l3:maximum+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1500,
            "w": 40,
            "h": 40,
            "at": "l3:trigger",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1484,
            "size": 50,
            "at": "l3:trigger+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Khi nào kích hoạt",
            "x": 6026,
            "y": 1490,
            "size": 40,
            "at": "l3:trigger+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1580,
            "w": 40,
            "h": 40,
            "at": "l4:deadline",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1564,
            "size": 50,
            "at": "l4:deadline+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Hạn trả: [ ] ngày làm việc",
            "x": 6026,
            "y": 1570,
            "size": 40,
            "at": "l4:deadline+200"
          },
          {
            "id": "i-sup",
            "t": "text",
            "text": "“hỗ trợ”: ai? bao nhiêu? khi nào?",
            "x": 5964,
            "y": 1690,
            "size": 42,
            "at": "l5:support",
            "color": "coral",
            "hl": [
              {
                "text": "“hỗ trợ”",
                "at": "l5:support"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Bám Điều 335, 336 BLDS 2015",
            "x": 6824,
            "y": 1810,
            "size": 28,
            "at": "l5",
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
          "say": "Seventh stop: five p.m. Thảo picks up her pen.",
          "sub": "Chặng bảy: năm giờ chiều. Thảo cầm bút viết lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Who pays instead: the guarantor. And what: principal, late interest, penalties, damages.",
          "sub": "Ai trả thay: Bên Bảo Lãnh. Trả gì: nợ gốc, lãi chậm trả, tiền phạt, bồi thường thiệt hại.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "The maximum total, the period, and the trigger: due and unpaid, or paid wrongly.",
          "sub": "Tổng cộng tối đa bao nhiêu, trong thời gian nào, và khi nào kích hoạt: đến hạn mà không thực hiện hoặc làm không đúng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And a deadline: pay within so many working days of our written demand.",
          "sub": "Và hạn trả: thanh toán trong ngần ấy ngày làm việc kể từ khi nhận văn bản yêu cầu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Support says nothing about who, how much, or when. The new one follows Articles three thirty five and six.",
          "sub": "Chữ “hỗ trợ” không nói ai trả, bao nhiêu, khi nào. Câu mới bám Điều 335 và 336.",
          "keys": [
            "ai trả, bao nhiêu, khi nào"
          ]
        }
      ],
      "ref": "p20,p21,p22"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "17:30 · Vẫn bàn ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Same desk"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "sunset"
              ]
            },
            "at": "l1",
            "caption": "17:30 · Dũng đọc lại",
            "icon": "sunset"
          },
          {
            "id": "j-q",
            "t": "text",
            "text": "“…khi Bên Mua không thực hiện",
            "x": 7932,
            "y": 1270,
            "size": 42,
            "at": "l2:fails"
          },
          {
            "id": "j-q2",
            "t": "text",
            "text": "khi đến hạn.”",
            "x": 7972,
            "y": 1340,
            "size": 42,
            "at": "l2:due"
          },
          {
            "id": "j-ok",
            "t": "text",
            "text": "Đọc hết câu ✓",
            "x": 7932,
            "y": 1450,
            "size": 56,
            "at": "l3:end",
            "color": "accent",
            "hl": [
              {
                "text": "hết câu",
                "at": "l3:end"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Chọn mặt… rồi viết chữ”",
            "x": 7932,
            "y": 1570,
            "size": 52,
            "at": "l4:gold",
            "color": "accent",
            "hl": [
              {
                "text": "viết chữ",
                "at": "l4:words"
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
          "say": "Same desk, same day, half past five. Dũng reads the new guarantee aloud.",
          "sub": "Vẫn bàn ấy, năm rưỡi chiều. Dũng đọc to tờ bảo lãnh mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The guarantor performs instead if the buyer fails to pay when due. Wow, the whole sentence!",
          "sub": "Bên Bảo Lãnh thực hiện thay nếu đến hạn Bên Mua không thực hiện. Ồ, trọn cả câu!",
          "face": "surprised",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "This time, read to the end.",
          "sub": "Lần này, đọc đến hết câu nhé.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Pick the right face for your gold. Then put it in the right words.",
          "sub": "“Chọn mặt gửi vàng.” Rồi gửi bằng đúng câu chữ.",
          "keys": [
            "Chọn mặt gửi vàng"
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
      "ref": "p21"
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
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "I",
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
            "x": 9432,
            "y": 40,
            "at": "l1:trigger"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7464,
            "y": 40,
            "at": "l2:scope"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 7464,
            "y": 1130,
            "at": "l3:sentence"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "e-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l1:trigger+400"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo, không phải tư vấn cho vụ việc cụ thể. Nhân vật là minh hoạ.",
            "x": 2028,
            "y": 690,
            "size": 28,
            "at": "l4",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "z-note2",
            "t": "text",
            "text": "Quy định có thể thay đổi — kiểm lại với cơ quan/chuyên gia.",
            "x": 2028,
            "y": 732,
            "size": 28,
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
          "say": "So: read the trigger first. Failing to pay and being unable to pay are different.",
          "sub": "Tóm lại: đọc điều kiện kích hoạt trước. Không trả và không có khả năng trả là hai chuyện.",
          "keys": [
            "điều kiện kích hoạt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write the scope and cap, and watch the guarantor all term.",
          "sub": "Ghi rõ phạm vi, hạn mức, và theo dõi bên bảo lãnh suốt thời hạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A full sentence: who, what, how much, when, and by when.",
          "sub": "Câu đủ vế: ai trả thay, trả gì, tối đa bao nhiêu, khi nào kích hoạt, hạn trả.",
          "keys": [
            "Câu đủ vế"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Today: check every guarantee you hold on four points. Next: pledge or mortgage.",
          "sub": "Việc làm ngay: kiểm các bảo lãnh đang giữ theo bốn điểm: kích hoạt, phạm vi, thời hạn, tình trạng bên bảo lãnh. Bài sau: cầm cố hay thế chấp.",
          "keys": [
            "Việc làm ngay"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s21",
      "module": "QUIZ-01",
      "data": {
        "q": "A draft guarantee arrives from the guarantor, what do you read first?",
        "options": [
          "The trigger condition that decides when you may claim payment",
          "The guarantor's marketing slogan printed at the top of the document",
          "The font and layout chosen for the signature block at the end"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "magnifying-glass-tilted-left",
        "why": "Điều kiện kích hoạt quyết định khi nào được đòi."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A draft guarantee arrives from the guarantor, what do you read first?",
          "sub": "Bản nháp bảo lãnh do bên bảo lãnh gửi tới, bạn đọc gì trước?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The trigger condition that decides when you may claim payment.",
          "sub": "Điều kiện kích hoạt, vì nó quyết định khi nào được đòi."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Failing to pay and being unable to pay make two different guarantees.",
          "sub": "“Không trả” và “không có khả năng trả” là hai bảo lãnh khác nhau."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[21]"
    },
    {
      "id": "s22",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Bảo lãnh viết sao cho đòi được"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ ngay bên dưới.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For learning only, not advice on a specific case. Rules change, so check the latest.",
          "sub": "Bài để tham khảo, không phải tư vấn cho vụ việc cụ thể. Quy định có thể thay đổi, hãy kiểm lại."
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-22",
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-22: câu thoại bị cắt — Dũng đọc “…chỉ thực hiện nghĩa vụ khi Bên Mua không…” (✂), Thảo đọc nốt “…có khả năng thanh toán” ở s01 (< 60 s). Đét đứng trái + bảng trắng 10 ô theo MỘT NGÀY THỨ HAI Thảo rà tủ bảo lãnh: 8:30 ai hứa với ai (p1–p3) → 9:30 phạm vi, Đ336.4 (p4, p5), BRK-07 “bên bảo lãnh biến mất?”, hồ sơ công ty mẹ giải thể (p6, p7, Thảo đóng vai chị Lan, Dũng là đội kinh doanh vẫn giao hàng) → 11:00 khi nào được đòi (p8, p9), “Khoan đã!” Dũng đòi ngay khi quá hạn (p10), hai câu = hai bảo lãnh (p11) → 13:30 Cô Hoa hỏi nợ ngược, bù trừ (p12, p13) → 15:00 chấm dứt, đổi biện pháp (p14, p15), BRK-05 nhắc nhanh → 16:00 Bác Bình, thư bảo lãnh ngân hàng, Thông tư 61/2024 (p16–p19) → BRK-04 Trước/Sau + 17:00 câu đủ vế (p20–p22) → 17:30 Dũng đọc trọn câu mới (khép vòng “Chọn mặt gửi vàng”). Nguồn bài ghi tên một trang tra cứu → trên bảng ghi “các bài tổng hợp công khai”. Lưu ý chung #133 ở tóm tắt + END.",
  "loop": {
    "open": "s00",
    "close": "s19"
  }
};
