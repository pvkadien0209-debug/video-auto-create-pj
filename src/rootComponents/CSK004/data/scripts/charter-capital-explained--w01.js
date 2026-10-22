// charter-capital-explained--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "charter-capital-explained--w01",
  "unit": {
    "audience": "founders-registering-a-company",
    "slug": "charter-capital-explained",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Vốn điều lệ là gì, ghi bao nhiêu cho hợp lý?",
    "series": "Thành lập công ty đúng ngay từ đầu — cho người lần đầu đăng ký doanh nghiệp ở Việt Nam"
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
              "a-box",
              "a-lb"
            ],
            "move": "cut",
            "zoom": 1.6
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 1400
          }
        ],
        "items": [
          {
            "id": "a-lb",
            "t": "text",
            "text": "Vốn điều lệ:",
            "x": 60,
            "y": 120,
            "size": 72,
            "at": "l1:Charter"
          },
          {
            "id": "a-box",
            "t": "box",
            "x": 520,
            "y": 110,
            "w": 340,
            "h": 100,
            "at": "l1:box",
            "stroke": 5
          },
          {
            "id": "a-d",
            "t": "text",
            "text": "đồng",
            "x": 880,
            "y": 125,
            "size": 64,
            "at": "l1:dong"
          },
          {
            "id": "a-pen",
            "t": "illus",
            "name": "fountain-pen",
            "x": 700,
            "y": 230,
            "size": 110,
            "at": "l2:pen"
          },
          {
            "id": "a-lo",
            "t": "text",
            "text": "Thấp: sợ khách coi thường",
            "x": 60,
            "y": 380,
            "size": 44,
            "at": "l3:low",
            "color": "muted"
          },
          {
            "id": "a-hi",
            "t": "text",
            "text": "Cao: sợ góp không nổi",
            "x": 60,
            "y": 460,
            "size": 44,
            "at": "l3:high",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Charter capital, blank box, dong.",
          "sub": "Vốn điều lệ: ô trống, đồng.",
          "keys": [
            "ô trống"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A pen hovers over it. For twenty minutes now.",
          "sub": "Cây bút lơ lửng trên đó. Hai mươi phút rồi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Write it low, clients may look down. Write it high, can you ever pay?",
          "sub": "Ghi thấp, sợ khách coi thường. Ghi cao, sợ góp không nổi.",
          "keys": [
            "sợ góp không nổi"
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
            "at": "l2",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
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
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "worried",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "fountain-pen",
                "page-facing-up"
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Hai · Dũng điền giấy đề nghị",
            "icon": "fountain-pen"
          },
          {
            "id": "a-k",
            "t": "text",
            "text": "Ô khó nhất của tờ đơn",
            "x": 60,
            "y": 580,
            "size": 50,
            "at": "l4:hardest",
            "color": "accent",
            "hl": [
              {
                "text": "khó nhất",
                "at": "l4:hardest"
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
          "say": "The pen belongs to Dũng, our interior designer, now filling in his single member company form.",
          "sub": "Cây bút ấy của Dũng, anh thiết kế nội thất, đang điền giấy đề nghị lập công ty một thành viên.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Type, done. Name, done. Capital? A big number looks serious. A small one looks safe.",
          "sub": "Loại hình, xong. Tên, xong. Vốn? Số to trông đàng hoàng. Số nhỏ trông an toàn.",
          "face": "worried",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Thảo said, write what I can pay. But how much is that?",
          "sub": "Thảo dặn ghi số góp nổi. Mà góp nổi là bao nhiêu?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The hardest box on the form. Let's open it up.",
          "sub": "Ô khó nhất của tờ đơn. Mở nó ra xem nào.",
          "keys": [
            "Ô khó nhất"
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
            "text": "Vốn điều lệ là gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:charter",
            "hl": [
              {
                "text": "là gì",
                "at": "l1:really"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Tổng tài sản cam kết góp",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:commits",
            "color": "accent",
            "hl": [
              {
                "text": "cam kết góp",
                "at": "l2:commits"
              }
            ]
          },
          {
            "id": "b-1b",
            "t": "text",
            "text": "ghi trong điều lệ · Điều 75",
            "x": 2068,
            "y": 245,
            "size": 38,
            "at": "l2:charter"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Hai thành viên: tương tự · Điều 47",
            "x": 2028,
            "y": 315,
            "size": 38,
            "at": "l3:forty seven"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Lời hứa, chưa phải tiền",
            "x": 2028,
            "y": 400,
            "size": 52,
            "at": "l4:promise",
            "color": "coral",
            "hl": [
              {
                "text": "Lời hứa",
                "at": "l4:promise"
              }
            ]
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Không có mức tối thiểu chung",
            "x": 2928,
            "y": 170,
            "size": 40,
            "at": "l5:minimum"
          },
          {
            "id": "b-4b",
            "t": "text",
            "text": "trừ ngành có vốn pháp định",
            "x": 2948,
            "y": 235,
            "size": 36,
            "at": "l5:legal capital",
            "color": "muted"
          },
          {
            "id": "b-5",
            "t": "text",
            "text": "Tư nhân: kê khai vốn đầu tư",
            "x": 2928,
            "y": 310,
            "size": 36,
            "at": "l6:private"
          },
          {
            "id": "b-5b",
            "t": "text",
            "text": "đồng, ngoại tệ, vàng, tài sản",
            "x": 2948,
            "y": 365,
            "size": 32,
            "at": "l6:gold"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Điều 47, 75 Luật Doanh nghiệp 2020 (Hệ thống Pháp luật)",
            "x": 2028,
            "y": 470,
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
          "say": "So what is charter capital, really?",
          "sub": "Vậy vốn điều lệ thật ra là gì?",
          "keys": [
            "thật ra là gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Under Article seventy five, it's the total value of assets the owner commits to contribute, written in the company charter.",
          "sub": "Theo Điều 75, vốn điều lệ công ty một thành viên là tổng giá trị tài sản chủ sở hữu cam kết góp, ghi trong điều lệ.",
          "keys": [
            "cam kết góp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article forty seven says the same for multi member companies.",
          "sub": "Điều 47 nêu tương tự với công ty hai thành viên trở lên."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "At registration, it's a promise, not money already in the bank.",
          "sub": "Lúc đăng ký, con số ấy là lời cam kết, chưa phải tiền đã nằm trong tài khoản.",
          "keys": [
            "lời cam kết"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "There's no general minimum, except lines that require legal capital.",
          "sub": "Không có mức vốn điều lệ tối thiểu chung, trừ ngành nghề có vốn pháp định."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A private enterprise owner instead declares investment capital: dong, foreign currency, gold, other assets.",
          "sub": "Riêng chủ doanh nghiệp tư nhân tự kê khai vốn đầu tư, chia theo tiền đồng, ngoại tệ, vàng, tài sản khác."
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s03",
      "module": "BRK-04",
      "data": {
        "title": "Trước khi nộp hồ sơ",
        "wrong": "Phải có đủ tiền trong tài khoản",
        "right": "Có 90 ngày sau khi cấp giấy để góp đủ",
        "wrongIllus": "bank",
        "rightIllus": "tear-off-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Full amount in the bank before filing?",
          "sub": "Phải có đủ tiền trong tài khoản mới được nộp?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. Ninety days after the certificate.",
          "sub": "Không. Có 90 ngày sau khi cấp giấy.",
          "keys": [
            "90 ngày"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p3"
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
          }
        ],
        "items": [
          {
            "id": "b-k",
            "t": "text",
            "text": "Lời hứa có hạn chót",
            "x": 2028,
            "y": 580,
            "size": 64,
            "at": "l1:deadline",
            "color": "accent",
            "hl": [
              {
                "text": "hạn chót",
                "at": "l1:deadline"
              }
            ]
          },
          {
            "id": "b-ca",
            "t": "text",
            "text": "“Đã hứa thì giữ lấy lời”",
            "x": 2928,
            "y": 590,
            "size": 44,
            "at": "l2:promise"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Charter capital is a promise with a deadline, not a balance to prove first.",
          "sub": "Vốn điều lệ là lời hứa có hạn chót, không phải số dư phải chứng minh trước.",
          "keys": [
            "lời hứa có hạn chót"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "As the folk song goes: once you promise, keep your word.",
          "sub": "Như câu hát: “Đã hứa thì giữ lấy lời.”",
          "keys": [
            "giữ lấy lời"
          ]
        }
      ],
      "ref": "p4"
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
            "text": "① Góp bằng gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4856,
            "y": 130,
            "w": 720,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "pointL",
                  "face": "happy"
                }
              ],
              "props": [
                "motor-scooter",
                "laptop"
              ]
            },
            "at": "l1:Tuesday",
            "caption": "Thứ Ba · trước cửa nhà Dũng",
            "icon": "motor-scooter"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Đồng Việt Nam, ngoại tệ, vàng",
            "x": 3996,
            "y": 170,
            "size": 40,
            "at": "l3:dong"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Quyền sử dụng đất",
            "x": 3996,
            "y": 235,
            "size": 40,
            "at": "l3:land"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Sở hữu trí tuệ, công nghệ",
            "x": 3996,
            "y": 300,
            "size": 40,
            "at": "l3:intellectual"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Tài sản định giá được",
            "x": 3996,
            "y": 365,
            "size": 40,
            "at": "l3:valued"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Chỉ chủ sở hữu hợp pháp",
            "x": 3996,
            "y": 450,
            "size": 46,
            "at": "l4:lawful",
            "color": "coral",
            "hl": [
              {
                "text": "hợp pháp",
                "at": "l4:lawful"
              }
            ]
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "Xe của bố",
            "x": 4036,
            "y": 520,
            "size": 44,
            "at": "l5:dad",
            "color": "muted"
          },
          {
            "id": "c-6x",
            "t": "strike",
            "over": "c-6",
            "at": "l5:his"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Điều 34 Luật Doanh nghiệp 2020",
            "x": 3996,
            "y": 705,
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
          "say": "First stop, Tuesday. What can Dũng pay with?",
          "sub": "Chặng một, thứ Ba. Dũng góp bằng gì được?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My motorbike and my laptop! The bike's in my dad's name, but same thing, right?",
          "sub": "Xe máy với laptop! Xe đứng tên bố, nhưng cũng như nhau, đúng không?",
          "face": "happy",
          "pose": "pointL"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article thirty four lists dong, convertible currency, gold, land use rights, intellectual property, technology, and anything valued in dong.",
          "sub": "Điều 34 liệt kê: Đồng Việt Nam, ngoại tệ tự do chuyển đổi, vàng, quyền sử dụng đất, sở hữu trí tuệ, công nghệ, tài sản định giá được bằng Đồng Việt Nam."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But only the lawful owner, or lawful user, may contribute an asset.",
          "sub": "Nhưng chỉ người là chủ sở hữu hợp pháp hoặc có quyền sử dụng hợp pháp mới được dùng tài sản đó góp vốn.",
          "keys": [
            "chủ sở hữu hợp pháp"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Dad's motorbike isn't his to give. Not the same thing at all.",
          "sub": "Xe của bố thì không phải của Dũng để góp. Chẳng như nhau chút nào.",
          "keys": [
            "Chẳng như nhau"
          ]
        }
      ],
      "ref": "p5"
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
          }
        ],
        "items": [
          {
            "id": "c-7",
            "t": "text",
            "text": "Góp xe, đất: làm giấy chuyển tên",
            "x": 4856,
            "y": 630,
            "size": 32,
            "at": "l1:transferring",
            "hl": [
              {
                "text": "chuyển tên",
                "at": "l1:transferring"
              }
            ]
          },
          {
            "id": "c-8",
            "t": "text",
            "text": "đừng chờ tuần cuối",
            "x": 4856,
            "y": 680,
            "size": 32,
            "at": "l2:week",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Paying with a vehicle or land means transferring it to the company: ownership papers, registration fee, valuation, records.",
          "sub": "Góp bằng xe hay đất là phải chuyển tài sản sang công ty: đăng ký chuyển quyền, khai lệ phí trước bạ, định giá, lập chứng từ góp vốn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So count the paperwork time. Don't wait for the last week.",
          "sub": "Nên tính cả thời gian làm giấy tờ chuyển tên, đừng chờ tới tuần cuối.",
          "keys": [
            "đừng chờ tới tuần cuối"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "text": "② Đổi loại tài sản góp?",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "thinking",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "printer",
                "busts-in-silhouette"
              ]
            },
            "at": "l1:Lan",
            "caption": "Thứ Tư · xưởng in của Lan",
            "icon": "printer"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Cam kết tiền → góp máy in?",
            "x": 5964,
            "y": 170,
            "size": 44,
            "at": "l2:printer"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Cần > 50% thành viên còn lại",
            "x": 5964,
            "y": 250,
            "size": 44,
            "at": "l3:half",
            "color": "accent",
            "hl": [
              {
                "text": "> 50%",
                "at": "l3:half"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Vận chuyển, chuyển quyền",
            "x": 5964,
            "y": 340,
            "size": 42,
            "at": "l4:transport"
          },
          {
            "id": "d-3b",
            "t": "text",
            "text": "không tính vào 90 ngày",
            "x": 6004,
            "y": 405,
            "size": 40,
            "at": "l4:count",
            "color": "accent",
            "hl": [
              {
                "text": "không tính",
                "at": "l4:count"
              }
            ]
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Trong 90 ngày: quyền theo cam kết",
            "x": 5964,
            "y": 480,
            "size": 36,
            "at": "l5:meantime"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 30/3/2023; Điều 34",
            "x": 5964,
            "y": 705,
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
          "say": "Second stop, Wednesday. Meet Lan, who runs a print shop with two partners.",
          "sub": "Chặng hai, thứ Tư. Đây là Lan, cùng hai người bạn mở xưởng in.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "One partner promised cash, but now wants to bring a printer instead. Allowed?",
          "sub": "Một bạn cam kết góp tiền, giờ muốn góp máy in thay. Được không chị?",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In a multi member company, a different asset type needs more than half of the remaining members.",
          "sub": "Ở công ty hai thành viên trở lên, góp loại tài sản khác loại đã cam kết cần trên 50% số thành viên còn lại tán thành.",
          "keys": [
            "trên 50%"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Time to transport, import or transfer an asset doesn't count toward the ninety days.",
          "sub": "Thời gian vận chuyển, nhập khẩu, làm thủ tục chuyển quyền sở hữu không tính vào hạn 90 ngày.",
          "keys": [
            "không tính vào hạn 90 ngày"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "In the meantime, each person has rights and duties matching what they committed.",
          "sub": "Trong thời hạn này, người góp có quyền và nghĩa vụ tương ứng với phần vốn đã cam kết."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 400
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
            "at": "l6",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Lịch 90 ngày của Thảo",
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
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "tear-off-calendar",
                "receipt"
              ]
            },
            "at": "l1:Thảo",
            "caption": "Thứ Năm · văn phòng Thảo",
            "icon": "tear-off-calendar"
          },
          {
            "id": "e-c-c0",
            "t": "box",
            "x": 7932,
            "y": 180,
            "w": 40,
            "h": 40,
            "at": "l2:ninetieth",
            "stroke": 5
          },
          {
            "id": "e-c-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 164,
            "size": 50,
            "at": "l2:ninetieth+600",
            "color": "accent"
          },
          {
            "id": "e-c-l0",
            "t": "text",
            "text": "Nhận giấy: đánh dấu ngày 90",
            "x": 7994,
            "y": 170,
            "size": 38,
            "at": "l2:ninetieth+200"
          },
          {
            "id": "e-c-c1",
            "t": "box",
            "x": 7932,
            "y": 270,
            "w": 40,
            "h": 40,
            "at": "l3:transfer",
            "stroke": 5
          },
          {
            "id": "e-c-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 254,
            "size": 50,
            "at": "l3:transfer+600",
            "color": "accent"
          },
          {
            "id": "e-c-l1",
            "t": "text",
            "text": "Mỗi lần chuyển: ghi nội dung",
            "x": 7994,
            "y": 260,
            "size": 38,
            "at": "l3:transfer+200"
          },
          {
            "id": "e-c-c2",
            "t": "box",
            "x": 7932,
            "y": 360,
            "w": 40,
            "h": 40,
            "at": "l4:weeks",
            "stroke": 5
          },
          {
            "id": "e-c-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 344,
            "size": 50,
            "at": "l4:weeks+600",
            "color": "accent"
          },
          {
            "id": "e-c-l2",
            "t": "text",
            "text": "Trước hạn 2 tuần: cộng lại",
            "x": 7994,
            "y": 350,
            "size": 38,
            "at": "l4:weeks+200"
          },
          {
            "id": "e-c-c3",
            "t": "box",
            "x": 7932,
            "y": 450,
            "w": 40,
            "h": 40,
            "at": "l5:short",
            "stroke": 5
          },
          {
            "id": "e-c-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 434,
            "size": 50,
            "at": "l5:short+600",
            "color": "accent"
          },
          {
            "id": "e-c-l3",
            "t": "text",
            "text": "Thiếu: ghi mốc 30 ngày",
            "x": 7994,
            "y": 440,
            "size": 38,
            "at": "l5:short+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop, Thursday. Meet Thảo, Dũng's friend, an accountant. She shows him her own company calendar.",
          "sub": "Chặng ba, thứ Năm. Đây là Thảo, bạn Dũng, làm kế toán. Cô cho Dũng xem cuốn lịch từ hồi lập công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Day I got my certificate, I marked day ninety. The ninetieth day, in red.",
          "sub": "Ngày nhận giấy chứng nhận, chị đánh dấu ngày thứ 90. Tô đỏ hẳn hoi.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Every capital transfer, a clear message, and I keep the receipt.",
          "sub": "Mỗi lần chuyển tiền góp vốn, ghi rõ nội dung chuyển khoản, lưu chứng từ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Two weeks before the deadline, I add it all up.",
          "sub": "Trước hạn hai tuần, cộng lại số đã góp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Still short? Mark thirty more days, to register a lower capital.",
          "sub": "Nếu chưa đủ, ghi tiếp mốc 30 ngày để đăng ký giảm vốn về số thực góp.",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "A calendar with homework. Very you.",
          "sub": "Lịch mà cũng có bài tập về nhà. Đúng kiểu chị.",
          "face": "happy"
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s09",
      "module": "BRK-11",
      "data": {
        "title": "2 mốc cần nhớ",
        "items": [
          "Ngày thứ 90: góp đủ",
          "30 ngày sau: điều chỉnh nếu thiếu"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two: thirty days after, to adjust if short.",
          "sub": "Hai: 30 ngày sau đó để điều chỉnh nếu thiếu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: day ninety, to pay in full.",
          "sub": "Một: ngày thứ 90 để góp đủ.",
          "keys": [
            "ngày thứ 90"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p12"
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
            "at": 150,
            "fit": "F",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Hết 90 ngày, còn thiếu?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "Một thành viên · Điều 75",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l2:single",
            "color": "accent"
          },
          {
            "id": "f-a1",
            "t": "text",
            "text": "30 ngày: về số thực góp",
            "x": 100,
            "y": 1330,
            "size": 36,
            "at": "l2:thirty",
            "hl": [
              {
                "text": "30 ngày",
                "at": "l2:thirty days"
              }
            ]
          },
          {
            "id": "f-a2",
            "t": "text",
            "text": "Trước đó: chịu theo vốn cam kết",
            "x": 100,
            "y": 1390,
            "size": 36,
            "at": "l3:committed"
          },
          {
            "id": "f-a3",
            "t": "text",
            "text": "Thiệt hại: chịu cả tài sản riêng",
            "x": 100,
            "y": 1450,
            "size": 36,
            "at": "l4:damage",
            "color": "coral"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "Hai thành viên · Điều 47",
            "x": 960,
            "y": 1260,
            "size": 46,
            "at": "l5:multi",
            "color": "accent"
          },
          {
            "id": "f-b1",
            "t": "text",
            "text": "Chưa góp: hết là thành viên",
            "x": 980,
            "y": 1330,
            "size": 36,
            "at": "l5:nothing",
            "color": "coral",
            "hl": [
              {
                "text": "hết là thành viên",
                "at": "l5:stops"
              }
            ]
          },
          {
            "id": "f-b2",
            "t": "text",
            "text": "Góp một phần: quyền theo phần",
            "x": 980,
            "y": 1390,
            "size": 36,
            "at": "l6:part"
          },
          {
            "id": "f-b3",
            "t": "text",
            "text": "Phần thiếu: hội đồng chào bán",
            "x": 980,
            "y": 1450,
            "size": 36,
            "at": "l6:council"
          },
          {
            "id": "f-b4",
            "t": "text",
            "text": "Đăng ký thay đổi: 30 ngày",
            "x": 980,
            "y": 1510,
            "size": 36,
            "at": "l7:thirty"
          },
          {
            "id": "f-b5",
            "t": "text",
            "text": "Góp đủ: giấy chứng nhận phần vốn",
            "x": 980,
            "y": 1570,
            "size": 34,
            "at": "l7:certificate"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Điều 47, 75 Luật Doanh nghiệp 2020",
            "x": 60,
            "y": 1795,
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
          "say": "Fourth stop: day ninety arrives, and the money is short. Now what?",
          "sub": "Chặng bốn: ngày thứ 90 tới mà vẫn thiếu. Giờ sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Single member company: within thirty days, register the capital down to what was actually paid.",
          "sub": "Công ty một thành viên: trong 30 ngày kể từ hạn chót, đăng ký thay đổi vốn điều lệ bằng số đã thực góp.",
          "keys": [
            "số đã thực góp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Until then, the owner is liable in proportion to the committed capital.",
          "sub": "Trước ngày đăng ký thay đổi, chủ sở hữu vẫn chịu trách nhiệm tương ứng với phần vốn đã cam kết."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And for damage from late or short payment, liable with all personal assets.",
          "sub": "Còn thiệt hại do không góp, góp thiếu, góp trễ thì chịu bằng toàn bộ tài sản của mình.",
          "keys": [
            "toàn bộ tài sản"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Multi member company: a member who paid nothing stops being a member, automatically.",
          "sub": "Công ty hai thành viên: ai chưa góp vốn thì đương nhiên không còn là thành viên.",
          "keys": [
            "không còn là thành viên"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Pay part, get rights for that part. The unpaid part is offered as the members' council decides.",
          "sub": "Góp một phần thì có quyền tương ứng phần đã góp; phần chưa góp được chào bán theo quyết định hội đồng thành viên."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "The company registers the change within thirty days, and issues a certificate to members who paid in full.",
          "sub": "Công ty đăng ký thay đổi trong 30 ngày, và cấp giấy chứng nhận phần vốn góp khi thành viên góp đủ."
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Tối thứ Năm · ô vốn",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "thumb"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Ghi thật cao cho khách tin",
          "why": "Ngày thứ 90 chỉ góp được một phần; để nguyên số cũ có thể bị coi là kê khai khống.",
          "rule": "Thiếu thì trong 30 ngày đăng ký giảm vốn"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Thirty days, ninety days, fine. I'll still write it huge. Clients trust big numbers!",
          "sub": "Ba mươi ngày, chín mươi ngày, biết rồi. Nhưng tôi vẫn ghi thật to. Khách tin số to!",
          "pose": "thumb",
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
          "say": "Day ninety, you've paid a small part. Leave the old number, and it may count as false declaration.",
          "sub": "Ngày thứ 90, bạn góp được một phần nhỏ. Để nguyên số cũ, có thể bị coi là kê khai khống.",
          "keys": [
            "kê khai khống"
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
          "say": "If I'm short, I register the lower figure within thirty days.",
          "sub": "Nếu thiếu, trong 30 ngày tôi đăng ký giảm về số đã góp.",
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
      "ref": "p14"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Ghi quá cao: rủi ro gì?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Kê khai khống vốn điều lệ:",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l2:false",
            "color": "coral",
            "hl": [
              {
                "text": "Kê khai khống",
                "at": "l2:false"
              }
            ]
          },
          {
            "id": "g-1a",
            "t": "text",
            "text": "• góp thiếu mà không điều chỉnh",
            "x": 2068,
            "y": 1335,
            "size": 38,
            "at": "l2:adjusting"
          },
          {
            "id": "g-1b",
            "t": "text",
            "text": "• cố ý định giá tài sản sai",
            "x": 2068,
            "y": 1395,
            "size": 38,
            "at": "l3:valuing"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "+ trách nhiệm cá nhân · Điều 75",
            "x": 2028,
            "y": 1470,
            "size": 42,
            "at": "l4:personal"
          },
          {
            "id": "g-ic",
            "t": "illus",
            "name": "bullseye",
            "x": 2028,
            "y": 1550,
            "size": 100,
            "at": "l4:target"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Số đẹp trên giấy ≠ đáng rủi ro",
            "x": 2148,
            "y": 1570,
            "size": 44,
            "at": "l5:paper",
            "color": "accent",
            "hl": [
              {
                "text": "≠ đáng rủi ro",
                "at": "l5:worth"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Luật 76/2025/QH15 (Thư viện Pháp luật)",
            "x": 2028,
            "y": 1795,
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
          "say": "Fifth stop: so what's the risk of writing too high?",
          "sub": "Chặng năm: ghi quá cao thì rủi ro gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Under Law seventy six, false declaration includes not paying registered capital without adjusting it.",
          "sub": "Theo Luật 76/2025/QH15, kê khai khống vốn điều lệ gồm việc không góp đủ số đã đăng ký mà không điều chỉnh.",
          "keys": [
            "kê khai khống vốn điều lệ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Or deliberately valuing contributed assets at the wrong value.",
          "sub": "Hoặc cố ý định giá tài sản góp vốn sai giá trị."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Add the owner's personal liability under Article seventy five, and a big number becomes your own target.",
          "sub": "Cộng thêm trách nhiệm cá nhân theo Điều 75, con số cao mà không góp nổi thành tấm bia ngắm chính bạn.",
          "keys": [
            "tấm bia ngắm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A nice number on paper isn't worth that risk.",
          "sub": "Con số đẹp trên giấy không đáng bằng rủi ro phải gánh.",
          "keys": [
            "không đáng bằng rủi ro"
          ]
        }
      ],
      "ref": "p13,p15"
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
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Ghi quá thấp: ổn không?",
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
              "set": "shop",
              "actors": [
                {
                  "id": "binh",
                  "side": "center",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "coin",
                "abacus"
              ]
            },
            "at": "l1:Uncle",
            "caption": "Thứ Sáu · tiệm tạp hoá Bác Bình",
            "icon": "coin"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "≤ 10 tỷ: 2.000.000 đ/năm",
            "x": 3996,
            "y": 1260,
            "size": 44,
            "at": "l3:two million",
            "hl": [
              {
                "text": "2.000.000 đ",
                "at": "l3:two million"
              }
            ]
          },
          {
            "id": "h-1b",
            "t": "text",
            "text": "NĐ 139/2016 · môn bài",
            "x": 4036,
            "y": 1330,
            "size": 36,
            "at": "l3:Decree",
            "color": "muted"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Hết thu từ 01/01/2026",
            "x": 3996,
            "y": 1400,
            "size": 44,
            "at": "l4:ended",
            "color": "accent",
            "hl": [
              {
                "text": "Hết thu",
                "at": "l4:ended"
              }
            ]
          },
          {
            "id": "h-2b",
            "t": "text",
            "text": "NQ 198/2025/QH15",
            "x": 4036,
            "y": 1465,
            "size": 36,
            "at": "l4:Resolution",
            "color": "muted"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Có vốn pháp định: phải đạt",
            "x": 3996,
            "y": 1540,
            "size": 42,
            "at": "l5:legal capital",
            "color": "coral"
          },
          {
            "id": "h-3b",
            "t": "text",
            "text": "nhiều ngành: mức cao nhất",
            "x": 4036,
            "y": 1605,
            "size": 36,
            "at": "l5:highest"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Vốn = phạm vi bạn cam kết",
            "x": 3996,
            "y": 1680,
            "size": 44,
            "at": "l6:scope",
            "hl": [
              {
                "text": "phạm vi",
                "at": "l6:scope"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 03/12/2025",
            "x": 3996,
            "y": 1795,
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
          "say": "Sixth stop, Friday. And writing too low? Uncle Bình, the grocery owner, remembers the old trick.",
          "sub": "Chặng sáu, thứ Sáu. Còn ghi quá thấp? Bác Bình, chủ tiệm tạp hoá, nhớ một mẹo cũ.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "My friends wrote tiny capital, to pay less licence fee. Slowly, let's check that still works.",
          "sub": "Bạn bác ngày trước ghi vốn thật thấp cho đỡ tiền môn bài. Từ từ, xem còn đúng không đã.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Under Decree one three nine of twenty sixteen, capital up to ten billion paid two million dong a year.",
          "sub": "Theo Nghị định 139/2016/NĐ-CP, tổ chức vốn điều lệ từ 10 tỷ đồng trở xuống nộp 2.000.000 đồng một năm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But collecting that fee ended from January twenty twenty six, under Resolution one nine eight. The trick is gone.",
          "sub": "Nhưng việc thu lệ phí môn bài chấm dứt từ 01/01/2026 theo Nghị quyết 198/2025/QH15. Mẹo ấy hết tác dụng.",
          "keys": [
            "hết tác dụng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "If your line needs legal capital, you must reach it. Several such lines? Meet the highest.",
          "sub": "Ngành cần vốn pháp định thì phải đạt mức đó; kinh doanh nhiều ngành như vậy thì đáp ứng mức cao nhất."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "For a single member company, the capital is also the scope you commit to the company's obligations.",
          "sub": "Với công ty một thành viên, vốn điều lệ cũng là phạm vi bạn cam kết với các nghĩa vụ của công ty.",
          "keys": [
            "phạm vi bạn cam kết"
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
      "ref": "p16,p17"
    },
    {
      "id": "s14",
      "module": "BRK-04",
      "data": {
        "title": "Hai cách Thảo từng cân nhắc",
        "labels": [
          "Cách B",
          "Cách A"
        ],
        "wrong": "Ghi gấp nhiều lần cho “ra dáng”",
        "right": "Ghi số chắc góp được trong 90 ngày",
        "wrongIllus": "money-with-wings",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thảo's option B: many times her cash, for show.",
          "sub": "Cách B của Thảo: ghi gấp nhiều lần cho ra dáng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option A: what she could surely pay.",
          "sub": "Cách A: số chắc chắn góp được.",
          "keys": [
            "chắc chắn góp được"
          ]
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
      "id": "s15",
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
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Tối thứ Sáu · ô vốn",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "fountain-pen",
                "page-facing-up"
              ]
            },
            "at": "l1:Friday",
            "caption": "Tối thứ Sáu · cùng bàn, cùng cây bút",
            "icon": "fountain-pen"
          },
          {
            "id": "i-a",
            "t": "text",
            "text": "A: sau này cần thì tăng vốn",
            "x": 5964,
            "y": 1260,
            "size": 40,
            "at": "l1:increase",
            "color": "accent"
          },
          {
            "id": "i-b",
            "t": "text",
            "text": "B: dễ giảm vốn, kê khai khống",
            "x": 5964,
            "y": 1325,
            "size": 36,
            "at": "l2:reduction",
            "color": "coral"
          },
          {
            "id": "i-q1",
            "t": "text",
            "text": "1. Ngành có vốn pháp định?",
            "x": 5964,
            "y": 1420,
            "size": 42,
            "at": "l3:legal"
          },
          {
            "id": "i-q2",
            "t": "text",
            "text": "2. 90 ngày góp được bao nhiêu?",
            "x": 5964,
            "y": 1490,
            "size": 38,
            "at": "l3:ninety"
          },
          {
            "id": "i-q3",
            "t": "text",
            "text": "3. Có cần chuyển tên tài sản?",
            "x": 5964,
            "y": 1560,
            "size": 42,
            "at": "l4:transfer"
          },
          {
            "id": "i-lb",
            "t": "text",
            "text": "Vốn điều lệ: số thật",
            "x": 5964,
            "y": 1680,
            "size": 56,
            "at": "l6:real",
            "color": "accent",
            "hl": [
              {
                "text": "số thật",
                "at": "l6:real"
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
          "say": "Friday night. Thảo picked A: write what you can pay, and increase it later if needed.",
          "sub": "Tối thứ Sáu. Thảo đã chọn cách A: ghi số góp được, sau này cần thì tăng vốn.",
          "keys": [
            "cách A"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "B leads to a forced reduction, or false declaration.",
          "sub": "Cách B dễ dẫn tới phải đăng ký giảm vốn, hoặc bị coi là kê khai khống."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Before the box, three questions. Does my line need legal capital? What can I surely pay in ninety days?",
          "sub": "Trước khi điền ô vốn, ba câu: ngành có vốn pháp định không? Chắc góp được bao nhiêu trong 90 ngày?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And do my assets need time to transfer?",
          "sub": "Và có cần thời gian chuyển tên tài sản không?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "No legal capital. My own laptop, my savings. That's my number.",
          "sub": "Không có vốn pháp định. Laptop của tôi, tiền tiết kiệm của tôi. Đó là con số của tôi.",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Same box, same pen. This time, a real number.",
          "sub": "Vẫn ô ấy, vẫn cây bút ấy. Lần này là một con số thật.",
          "keys": [
            "con số thật"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Write what you can really pay, and grow it when the work needs more.",
          "sub": "Ghi số bạn góp được thật, và tăng dần khi công việc cần thêm vốn.",
          "keys": [
            "tăng dần"
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
      "ref": "p18,p19,p20"
    },
    {
      "id": "s16",
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
            "at": "l2:promise",
            "fit": "B",
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
            "at": "l4:end",
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Vốn điều lệ · việc làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 3528,
            "y": 40,
            "at": "l2:deadline"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 40,
            "at": "l3:thirty"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3528,
            "y": 1130,
            "at": "l4:pay"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Số chắc góp trong 90 ngày",
            "x": 7932,
            "y": 1270,
            "size": 44,
            "at": "l5:ninety",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Loại tài sản sẽ góp",
            "x": 7932,
            "y": 1345,
            "size": 44,
            "at": "l5:asset"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Hai mốc ngày cần theo dõi",
            "x": 7932,
            "y": 1420,
            "size": 44,
            "at": "l5:dates"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: đặt tên, chọn ngành",
            "x": 7932,
            "y": 1520,
            "size": 38,
            "at": "l6:Next",
            "color": "muted"
          },
          {
            "id": "j-note",
            "t": "text",
            "text": "Bài để tham khảo, không phải tư vấn vụ việc cụ thể. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1720,
            "size": 28,
            "at": "l6",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-note2",
            "t": "text",
            "text": "Quy định về đăng ký doanh nghiệp có thể đã được sửa đổi: kiểm văn bản mới nhất trước khi nộp.",
            "x": 7932,
            "y": 1770,
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
          "say": "So: charter capital, in three lines.",
          "sub": "Tóm lại: vốn điều lệ, gói trong ba dòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: a promise with a deadline, no general minimum.",
          "sub": "Một: lời hứa có hạn chót, không có mức tối thiểu chung.",
          "keys": [
            "lời hứa có hạn chót"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: day ninety to pay, then thirty days to adjust if short.",
          "sub": "Hai: ngày thứ 90 để góp đủ, rồi 30 ngày để điều chỉnh nếu thiếu.",
          "keys": [
            "30 ngày"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: write what you can really pay.",
          "sub": "Ba: ghi số bạn góp được thật."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Today: write the amount you can surely pay in ninety days, the asset type, and your two dates.",
          "sub": "Việc làm ngay: ghi ra số vốn chắc góp được trong 90 ngày, loại tài sản sẽ góp, và hai mốc ngày cần theo dõi.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: naming your company and choosing business lines. Rules may have changed, so check the latest text before filing.",
          "sub": "Bài tiếp: đặt tên công ty và chọn ngành nghề. Quy định về đăng ký doanh nghiệp có thể đã sửa đổi, kiểm văn bản mới nhất trước khi nộp.",
          "keys": [
            "kiểm văn bản mới nhất"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s17",
      "module": "QUIZ-01",
      "data": {
        "q": "What two dates does the takeaway ask you to remember?",
        "options": [
          "Day one to open a bank account, then day two to hire staff",
          "The founder's birthday and the date of the company's first party",
          "Day ninety to pay in full, then thirty days to adjust if short"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "tear-off-calendar",
        "why": "Ngày thứ 90 để góp đủ, rồi 30 ngày để đăng ký điều chỉnh nếu thiếu."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What two dates does the takeaway ask you to remember?",
          "sub": "Câu Rút ra nhắc nhớ hai mốc nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Day ninety to pay in full, then thirty days to adjust if short.",
          "sub": "Ngày thứ 90 để góp đủ, rồi 30 ngày để điều chỉnh nếu thiếu."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Thảo's red pen agrees.",
          "sub": "Cây bút đỏ của Thảo đồng ý."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[20]"
    },
    {
      "id": "s18",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Vốn điều lệ ghi bao nhiêu cho hợp lý"
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
  "hook": "HOOK-23",
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23: đồ vật kể chuyện — ô “Vốn điều lệ: ……… đồng” còn trống, cây bút lơ lửng (intro) → kéo ra thấy Dũng điền giấy đề nghị. Đét đứng trái + bảng trắng 10 ô theo HÀNH TRÌNH CỦA Ô VỐN TRONG MỘT TUẦN: vốn điều lệ là gì (p1, p2; BRK-04 p3; p4) → thứ Ba góp bằng gì, xe đứng tên bố (p5; p7, p8) → thứ Tư nhóm Lan muốn góp máy in thay tiền (p6) → thứ Năm lịch 90 ngày của Thảo (vai “Lan” p11; BRK-11 hai mốc p12) → hết 90 ngày còn thiếu (p9, p10) → “Khoan đã!” Dũng ghi cao (vai “Minh” p14) → ghi quá cao (p13, p15) → thứ Sáu ghi quá thấp, Bác Bình nhớ mẹo môn bài (p16, p17) → BRK-04 hai cách của Thảo (p18) → tối thứ Sáu Dũng điền số thật (p19, p20; khép vòng cùng ô, cùng bút). Nhân vật: Dũng, Lan, Thảo, Bác Bình. Mọi điều luật, mốc lấy từ bài; lưu ý chung #133 ở ô J.",
  "loop": {
    "open": "s01",
    "close": "s15"
  }
};
