// claims-as-pricing--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "claims-as-pricing--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "epc-contractor-side",
    "slug": "claims-as-pricing",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Nhà thầu dùng khiếu nại để bù giá như thế nào?",
    "series": "Nhìn hợp đồng EPC qua mắt nhà thầu — cho người đàm phán phía chủ đầu tư, đoán trước điểm họ đòi và đáp đúng câu chữ"
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
            "fit": [
              "a-q1",
              "a-y",
              "a-n"
            ],
            "zoom": 1.25,
            "move": "cut"
          },
          {
            "at": "l4",
            "fit": "A",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "a-q1",
            "t": "text",
            "text": "Đổi tên “phạt chậm”",
            "x": 60,
            "y": 60,
            "size": 60,
            "at": "l1:rename"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "→ “bồi thường định trước”",
            "x": 60,
            "y": 140,
            "size": 52,
            "at": "l1:agreed",
            "color": "accent"
          },
          {
            "id": "a-q3",
            "t": "text",
            "text": "là thoát trần phạt?",
            "x": 60,
            "y": 215,
            "size": 52,
            "at": "l1:cap",
            "hl": [
              {
                "text": "thoát trần phạt",
                "at": "l1:escape"
              }
            ]
          },
          {
            "id": "a-yb",
            "t": "box",
            "x": 60,
            "y": 310,
            "w": 300,
            "h": 100,
            "at": "l2:Yes",
            "stroke": 5
          },
          {
            "id": "a-y",
            "t": "text",
            "text": "Có",
            "x": 160,
            "y": 325,
            "size": 60,
            "at": "l2:Yes"
          },
          {
            "id": "a-nb",
            "t": "box",
            "x": 420,
            "y": 310,
            "w": 380,
            "h": 100,
            "at": "l2:sure",
            "stroke": 5
          },
          {
            "id": "a-n",
            "t": "text",
            "text": "Chưa chắc",
            "x": 450,
            "y": 325,
            "size": 60,
            "at": "l2:sure"
          },
          {
            "id": "a-yx",
            "t": "strike",
            "over": "a-y",
            "at": "l3:Not"
          },
          {
            "id": "a-ring",
            "t": "ring",
            "around": [
              "a-nb"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:Not"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "You rename delay penalties as pre agreed compensation. Do you escape the penalty cap?",
          "sub": "Bạn đổi tên “phạt chậm” thành “bồi thường định trước”. Vậy là thoát trần phạt?",
          "keys": [
            "thoát trần phạt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yes? Or not for sure? Take a second.",
          "sub": "Có? Hay chưa chắc? Đoán thử một giây."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not for sure. The name helps a bit. The rest is held by something else.",
          "sub": "Chưa chắc. Tên gọi giúp một phần. Phần còn lại do thứ khác giữ.",
          "keys": [
            "Chưa chắc"
          ],
          "wait": 1500
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hold that thought. Let's see whose inbox this is.",
          "sub": "Giữ câu hỏi đó lại. Xem hộp thư này của ai nhé."
        }
      ],
      "ref": "p4"
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
            "x": 880,
            "y": 40,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "worried"
                }
              ],
              "props": [
                "incoming-envelope",
                "e-mail"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "at": "l1",
            "caption": "Thứ Hai 8:00 · sáu tháng sau ngày ký",
            "icon": "incoming-envelope"
          },
          {
            "id": "a-in",
            "t": "text",
            "text": "Hộp thư: khiếu nại, khiếu nại…",
            "x": 60,
            "y": 470,
            "size": 46,
            "at": "l2:claim",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Lời nói chẳng mất tiền mua”",
            "x": 60,
            "y": 580,
            "size": 50,
            "at": "l4:Words",
            "color": "accent",
            "hl": [
              {
                "text": "chẳng mất tiền mua",
                "at": "l4:cost"
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
          "say": "This is Thảo, the owner's in-house lawyer. Six months after signing, the site is running late.",
          "sub": "Đây là Thảo, pháp chế phía chủ đầu tư. Sáu tháng sau ngày ký, công trường đang chậm.",
          "keys": [
            "công trường đang chậm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Monday, eight a.m. Damages grow daily, and her inbox fills with claim notices.",
          "sub": "Tám giờ sáng thứ Hai. Tiền phạt tăng từng ngày, hộp thư dồn dập thông báo khiếu nại.",
          "keys": [
            "thông báo khiếu nại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Firstly, why so many claims? Secondly, is this a trick, or a price?",
          "sub": "Thứ nhất, sao nhiều khiếu nại thế? Thứ hai, đây là mánh, hay là giá?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders say words cost nothing. On a construction site, some words cost a crane.",
          "sub": "Ông bà dặn: “Lời nói chẳng mất tiền mua.” Ở công trường, có câu nói tốn cả tiền thuê cẩu.",
          "keys": [
            "Lời nói chẳng mất tiền mua"
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
            "text": "Khiếu nại bù giá thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:claims",
            "hl": [
              {
                "text": "bù giá",
                "at": "l1:price"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: trò gian",
            "x": 2028,
            "y": 160,
            "size": 52,
            "at": "l2:trick",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:tool"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: công cụ bù giá",
            "x": 2028,
            "y": 245,
            "size": 60,
            "at": "l2:tool",
            "color": "accent",
            "hl": [
              {
                "text": "công cụ bù giá",
                "at": "l2:pricing"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "+1 ngày gia hạn = −1 ngày phạt",
            "x": 2028,
            "y": 345,
            "size": 50,
            "at": "l3:extension",
            "hl": [
              {
                "text": "−1 ngày phạt",
                "at": "l3:damages"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "+ chi phí kéo dài → vào giá",
            "x": 2028,
            "y": 425,
            "size": 50,
            "at": "l4:prolongation",
            "color": "coral"
          },
          {
            "id": "b-dd",
            "t": "text",
            "text": "Phạt chậm: theo ngày, có trần,",
            "x": 2928,
            "y": 170,
            "size": 40,
            "at": "l5:capped"
          },
          {
            "id": "b-dd2",
            "t": "text",
            "text": "trừ thanh toán, rút bảo lãnh",
            "x": 2928,
            "y": 230,
            "size": 40,
            "at": "l5:guarantee",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do contractors use claims to win back price?",
          "sub": "Vậy nhà thầu dùng khiếu nại để bù giá thế nào?",
          "keys": [
            "bù giá"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a dirty trick. A legal pricing tool, when the contract leaves a door open.",
          "sub": "Không phải trò gian. Là công cụ bù giá hợp pháp, khi hợp đồng để cửa.",
          "keys": [
            "công cụ bù giá"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Each day of extension is one day without damages.",
          "sub": "Mỗi ngày được gia hạn là một ngày không bị phạt.",
          "keys": [
            "một ngày không bị phạt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Each approved prolongation cost is money added to the lump sum.",
          "sub": "Mỗi khoản chi phí kéo dài được duyệt là tiền cộng thêm vào giá trọn gói."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Damages run by the day, capped, deducted from payments or the guarantee.",
          "sub": "Phạt chậm tính theo ngày, có trần, trừ vào thanh toán hoặc rút bảo lãnh."
        }
      ],
      "ref": "intro,p1"
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
            "id": "b-dr",
            "t": "text",
            "text": "Giá trọn gói chỉ đổi qua:",
            "x": 2028,
            "y": 520,
            "size": 44,
            "at": "l1:doors"
          },
          {
            "id": "b-d1",
            "t": "text",
            "text": "Thay đổi · thay đổi pháp luật · điều chỉnh giá",
            "x": 2028,
            "y": 580,
            "size": 34,
            "at": "l1:variations",
            "font": "base"
          },
          {
            "id": "b-key",
            "t": "illus",
            "name": "old-key",
            "x": 2968,
            "y": 480,
            "size": 110,
            "at": "l2:key"
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "khiếu nại = chìa khoá",
            "x": 3098,
            "y": 500,
            "size": 46,
            "at": "l2:key",
            "color": "accent",
            "hl": [
              {
                "text": "chìa khoá",
                "at": "l2:key"
              }
            ]
          },
          {
            "id": "b-dy0",
            "t": "box",
            "x": 2028,
            "y": 640,
            "w": 210,
            "h": 80,
            "at": "l3:week+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dy1",
            "t": "box",
            "x": 2263,
            "y": 640,
            "w": 210,
            "h": 80,
            "at": "l3:week+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dy2",
            "t": "box",
            "x": 2498,
            "y": 640,
            "w": 210,
            "h": 80,
            "at": "l3:week+700",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dy3",
            "t": "box",
            "x": 2733,
            "y": 640,
            "w": 210,
            "h": 80,
            "at": "l3:week+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dy4",
            "t": "box",
            "x": 2968,
            "y": 640,
            "w": 210,
            "h": 80,
            "at": "l3:week+1100",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dy5",
            "t": "box",
            "x": 3203,
            "y": 640,
            "w": 210,
            "h": 80,
            "at": "l3:week+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dy6",
            "t": "box",
            "x": 3438,
            "y": 640,
            "w": 210,
            "h": 80,
            "at": "l3:week+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2",
            "x": 2088,
            "y": 650,
            "size": 46,
            "at": "l3:week+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3",
            "x": 2323,
            "y": 650,
            "size": 46,
            "at": "l3:week+620"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T4",
            "x": 2558,
            "y": 650,
            "size": 46,
            "at": "l3:week+820"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T5",
            "x": 2793,
            "y": 650,
            "size": 46,
            "at": "l3:week+1020"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T6",
            "x": 3028,
            "y": 650,
            "size": 46,
            "at": "l3:week+1220"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T7",
            "x": 3263,
            "y": 650,
            "size": 46,
            "at": "l3:week+1420"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "CN",
            "x": 3498,
            "y": 650,
            "size": 46,
            "at": "l3:week+1620"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A lump sum changes only through set doors: variations, change in law, and agreed price adjustment.",
          "sub": "Giá trọn gói chỉ đổi qua vài cửa đã định: Thay đổi, thay đổi pháp luật, cơ chế điều chỉnh giá đã thoả thuận."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So the contractor tries to widen those doors. A claim is the key to every one.",
          "sub": "Nên nhà thầu tìm cách mở rộng các cửa này, và khiếu nại là chìa khoá của mọi cửa.",
          "keys": [
            "chìa khoá của mọi cửa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One week of Thảo's inbox, day by day.",
          "sub": "Một tuần hộp thư của Thảo, từng ngày một.",
          "keys": [
            "Một tuần"
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
            "text": "① Thứ Hai · Đánh vào khoản phạt",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 110,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "balance-scale",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Bình",
            "caption": "Thứ Hai 10:00 · Bác Bình gọi",
            "icon": "balance-scale"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "BTĐT = một dạng phạt?",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l2:penalty",
            "color": "coral"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "→ tư nhân: nguy cơ trần 8%",
            "x": 3996,
            "y": 250,
            "size": 46,
            "at": "l3:eight",
            "hl": [
              {
                "text": "trần 8%",
                "at": "l3:eight"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Luật XD 2025: cho phép",
            "x": 3996,
            "y": 340,
            "size": 44,
            "at": "l4:allows"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "mức thiệt hại định trước",
            "x": 3996,
            "y": 400,
            "size": 44,
            "at": "l4:pre",
            "color": "accent"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "thực tiễn còn cần kiểm",
            "x": 3996,
            "y": 460,
            "size": 40,
            "at": "l4:checking",
            "color": "muted"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Luật Xây dựng 135/2025/QH15, Điều 86",
            "x": 3996,
            "y": 728,
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
          "say": "Monday. Thảo calls Mr Bình, head of the owner's legal team.",
          "sub": "Thứ Hai. Thảo gọi Bác Bình, trưởng pháp chế chủ đầu tư.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Slowly. The contractor can attack the damages clause itself, calling it a penalty in disguise.",
          "sub": "Từ từ. Nhà thầu có thể tấn công chính khoản phạt, bảo nó là một dạng phạt vi phạm.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Then on a private project, the eight percent cap of the Commercial Law may bite.",
          "sub": "Khi đó dự án vốn tư nhân có rủi ro bị áp trần 8% theo Luật Thương mại.",
          "keys": [
            "trần 8%"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The 2025 Construction Law allows pre agreed damage amounts. But practice still needs checking.",
          "sub": "Luật Xây dựng 2025 cho phép tính bồi thường theo mức thiệt hại định trước, nhưng thực tiễn còn cần kiểm.",
          "keys": [
            "thực tiễn còn cần kiểm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
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
            "id": "c-w",
            "t": "text",
            "text": "“bị phạt [ ] đồng mỗi ngày”",
            "x": 3996,
            "y": 560,
            "size": 42,
            "at": "l1:fined",
            "font": "base",
            "color": "coral"
          },
          {
            "id": "c-wx",
            "t": "strike",
            "over": "c-w",
            "at": "l1:penalty"
          },
          {
            "id": "c-c1",
            "t": "text",
            "text": "Bảng tính: điện mất/ngày + lãi vay",
            "x": 3996,
            "y": 620,
            "size": 40,
            "at": "l2:revenue",
            "color": "accent"
          },
          {
            "id": "c-c2",
            "t": "text",
            "text": "Vượt mức tối đa = bồi thường thoả thuận",
            "x": 3996,
            "y": 676,
            "size": 30,
            "at": "l3:excess",
            "font": "base"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Tên giúp, bảng tính giữ",
            "x": 4836,
            "y": 690,
            "size": 46,
            "at": "l4:calculation",
            "color": "accent",
            "hl": [
              {
                "text": "bảng tính giữ",
                "at": "l4:calculation"
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
          "say": "Wording like the contractor shall be fined a set sum per day still reads as a penalty.",
          "sub": "Câu chữ “bị phạt [ ] đồng mỗi ngày” vẫn dễ bị coi là phạt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Safer: structure it as pre agreed damages, and keep the calculation. Lost power revenue per day, loan interest.",
          "sub": "An toàn hơn: cấu trúc như bồi thường định trước, lưu bảng tính căn cứ như doanh thu điện mất theo ngày, lãi vay.",
          "keys": [
            "lưu bảng tính căn cứ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "And state that any excess over the legal maximum penalty is pre agreed compensation. Legal team checks it all.",
          "sub": "Và ghi rõ phần vượt mức phạt tối đa theo luật là bồi thường thoả thuận trước. Nhóm pháp lý kiểm tất cả."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So, our opening question: the name helps a bit, the calculation holds the rest.",
          "sub": "Vậy câu hỏi mở đầu: tên gọi giúp một phần, bảng tính căn cứ giữ phần còn lại.",
          "keys": [
            "bảng tính căn cứ giữ phần còn lại"
          ]
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
            "text": "② Thứ Ba · Chuỗi thông báo",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday"
          },
          {
            "id": "d-b0",
            "t": "box",
            "x": 5964,
            "y": 180,
            "w": 300,
            "h": 110,
            "at": "l2:event",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "d-c0",
            "t": "text",
            "text": "Sự kiện",
            "x": 5984,
            "y": 205,
            "size": 40,
            "at": "l2:event+200"
          },
          {
            "id": "d-a0",
            "t": "arrow",
            "from": [
              6264,
              235
            ],
            "to": [
              6294,
              235
            ],
            "at": "l2:first"
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 6294,
            "y": 180,
            "w": 300,
            "h": 110,
            "at": "l2:first",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "d-c1",
            "t": "text",
            "text": "Thông báo ban đầu",
            "x": 6314,
            "y": 205,
            "size": 32,
            "at": "l2:first+200"
          },
          {
            "id": "d-a1",
            "t": "arrow",
            "from": [
              6594,
              235
            ],
            "to": [
              6624,
              235
            ],
            "at": "l2:detailed"
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 6624,
            "y": 180,
            "w": 300,
            "h": 110,
            "at": "l2:detailed",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "d-c2",
            "t": "text",
            "text": "Thông báo chi tiết",
            "x": 6644,
            "y": 205,
            "size": 32,
            "at": "l2:detailed+200"
          },
          {
            "id": "d-a2",
            "t": "arrow",
            "from": [
              6924,
              235
            ],
            "to": [
              6954,
              235
            ],
            "at": "l3:regular"
          },
          {
            "id": "d-b3",
            "t": "box",
            "x": 6954,
            "y": 180,
            "w": 300,
            "h": 110,
            "at": "l3:regular",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "d-c3",
            "t": "text",
            "text": "Báo định kỳ",
            "x": 6974,
            "y": 205,
            "size": 32,
            "at": "l3:regular+200"
          },
          {
            "id": "d-a3",
            "t": "arrow",
            "from": [
              7254,
              235
            ],
            "to": [
              7284,
              235
            ],
            "at": "l3:decides"
          },
          {
            "id": "d-b4",
            "t": "box",
            "x": 7284,
            "y": 180,
            "w": 300,
            "h": 110,
            "at": "l3:decides",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "d-c4",
            "t": "text",
            "text": "CĐT quyết định",
            "x": 7304,
            "y": 205,
            "size": 32,
            "at": "l3:decides+200"
          },
          {
            "id": "d-r",
            "t": "text",
            "text": "→ gia hạn, chi phí, hoặc cả hai",
            "x": 5964,
            "y": 330,
            "size": 46,
            "at": "l3:both"
          },
          {
            "id": "d-m",
            "t": "text",
            "text": "Thiếu một mắt xích → yếu",
            "x": 5964,
            "y": 410,
            "size": 52,
            "at": "l4:link",
            "color": "coral",
            "hl": [
              {
                "text": "mắt xích",
                "at": "l4:link"
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
          "say": "Tuesday. A claim runs in a chain.",
          "sub": "Thứ Ba. Khiếu nại đi theo một chuỗi.",
          "keys": [
            "một chuỗi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "An event. A first notice within set days. Then a detailed notice within set days.",
          "sub": "Xảy ra sự kiện. Thông báo ban đầu trong [ ] ngày. Rồi thông báo chi tiết trong [ ] ngày."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Regular updates if it continues, then the owner decides. Time, money, or both.",
          "sub": "Báo định kỳ nếu sự kiện kéo dài, rồi chủ đầu tư quyết. Gia hạn, chi phí, hoặc cả hai."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Miss one link, and the claim gets weaker.",
          "sub": "Thiếu một mắt xích, khiếu nại yếu đi.",
          "keys": [
            "Thiếu một mắt xích"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s07",
      "module": "BRK-03",
      "data": {
        "value": 28,
        "suffix": " ngày",
        "label": "để gửi thông báo khiếu nại theo bộ mẫu quốc tế 2017",
        "illus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The 2017 international model suite sets a clock.",
          "sub": "Bộ mẫu hợp đồng quốc tế 2017 đặt một chiếc đồng hồ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twenty eight days to give notice of a claim.",
          "sub": "Hai mươi tám ngày để gửi thông báo khiếu nại.",
          "keys": [
            "Hai mươi tám ngày"
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
          }
        ],
        "items": [
          {
            "id": "d-28",
            "t": "text",
            "text": "28 ngày: quá hạn mất quyền",
            "x": 5964,
            "y": 500,
            "size": 40,
            "at": "l1:lost"
          },
          {
            "id": "d-84",
            "t": "text",
            "text": "84 ngày: khiếu nại chi tiết",
            "x": 5964,
            "y": 560,
            "size": 40,
            "at": "l1:eighty",
            "hl": [
              {
                "text": "84 ngày",
                "at": "l1:eighty"
              }
            ]
          },
          {
            "id": "d-wv",
            "t": "text",
            "text": "có cơ chế xem xét miễn trễ hạn",
            "x": 5964,
            "y": 620,
            "size": 34,
            "at": "l2:excused",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Hạn thông báo = cò súng",
            "x": 6864,
            "y": 520,
            "size": 52,
            "at": "l3:trigger",
            "color": "accent",
            "hl": [
              {
                "text": "cò súng",
                "at": "l3:trigger"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Theo bài phân tích bộ mẫu hợp đồng quốc tế 2017; số điều khoản cần đối chiếu bản chính thức",
            "x": 5964,
            "y": 722,
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
          "say": "Miss it, and the right is lost. A second bar: no detailed claim within eighty four days has consequences too.",
          "sub": "Quá hạn thì mất quyền. Mốc thứ hai: không nộp khiếu nại chi tiết trong 84 ngày cũng có hậu quả.",
          "keys": [
            "84 ngày"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The suite also lets late notices be excused for good reason. Check the official text.",
          "sub": "Bộ mẫu cũng cho xem xét miễn hậu quả trễ hạn khi có lý do. Cần đối chiếu bản chính thức."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The notice deadline is the trigger of every claim.",
          "sub": "Hạn thông báo là cò súng của mọi khiếu nại.",
          "keys": [
            "cò súng"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "text": "③ Thứ Tư · Khiếu nại muộn",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 110,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "incoming-envelope",
                "hourglass-not-done"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sam",
            "caption": "Thứ Tư · Sam gửi khiếu nại",
            "icon": "incoming-envelope"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "VN: không chắc tôn trọng tuyệt đối",
            "x": 7932,
            "y": 170,
            "size": 40,
            "at": "l3:courts"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "điều mất quyền khi quá hạn",
            "x": 7932,
            "y": 230,
            "size": 40,
            "at": "l3:strictly",
            "color": "coral"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "kiểm thực tiễn, thời hiệu",
            "x": 7932,
            "y": 290,
            "size": 36,
            "at": "l3:limitation",
            "color": "muted"
          },
          {
            "id": "e-r",
            "t": "text",
            "text": "Chủ đầu tư nên:",
            "x": 7932,
            "y": 380,
            "size": 46,
            "at": "l4:reply",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wednesday. Sam, the contractor's lead negotiator, sends a claim. Weeks late.",
          "sub": "Thứ Tư. Sam, trưởng nhóm đàm phán của nhà thầu, gửi một khiếu nại. Trễ vài tuần.",
          "keys": [
            "Trễ vài tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Late? Maybe. We'll send it anyway. The tribunal decides, not the clock.",
          "sub": "Trễ à? Có thể. Cứ gửi. Trọng tài quyết, chứ đâu phải cái đồng hồ.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sam has a point. Vietnamese courts and arbitrators may not strictly enforce time bars. Check practice and limitation periods.",
          "sub": "Có lý đấy. Ở Việt Nam, toà án, trọng tài có thể không tôn trọng tuyệt đối điều mất quyền khi quá hạn; thực tiễn, thời hiệu cần kiểm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So the owner should reply properly.",
          "sub": "Vậy chủ đầu tư nên trả lời cho đúng cách."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 800
        }
      ],
      "ref": "p9"
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
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 450,
            "w": 40,
            "h": 40,
            "at": "l1:writing",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 440,
            "size": 50,
            "at": "l1:writing+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Trả lời bằng văn bản",
            "x": 7996,
            "y": 446,
            "size": 40,
            "at": "l1:writing+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 520,
            "w": 40,
            "h": 40,
            "at": "l1:ground",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 510,
            "size": 50,
            "at": "l1:ground+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Nêu căn cứ quá hạn",
            "x": 7996,
            "y": 516,
            "size": 40,
            "at": "l1:ground+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 590,
            "w": 40,
            "h": 40,
            "at": "l2:diary",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 580,
            "size": 50,
            "at": "l2:diary+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Tự lưu: thời tiết, nhật ký",
            "x": 7996,
            "y": 586,
            "size": 40,
            "at": "l2:diary+200"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Dữ liệu của mình, lời của mình",
            "x": 8772,
            "y": 680,
            "size": 42,
            "at": "l3:own",
            "color": "accent",
            "hl": [
              {
                "text": "của mình",
                "at": "l3:own"
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
          "say": "In writing, citing the late notice as a ground.",
          "sub": "Bằng văn bản, nêu rõ căn cứ quá hạn.",
          "keys": [
            "Bằng văn bản"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And keep its own records: weather data, the site diary.",
          "sub": "Và tự lưu dữ liệu: thời tiết, nhật ký công trường.",
          "keys": [
            "nhật ký công trường"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Your own data tells your own story.",
          "sub": "Dữ liệu của mình mới kể được chuyện của mình."
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
            "text": "④ Thứ Năm · Mốc bị bỏ ngỏ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday",
            "hl": [
              {
                "text": "bỏ ngỏ",
                "at": "l1:large"
              }
            ]
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "CĐT gây chậm + không gia hạn",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l2:causes"
          },
          {
            "id": "f-a1",
            "t": "arrow",
            "from": [
              80,
              1325
            ],
            "to": [
              80,
              1375
            ],
            "at": "l2:extension"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "mốc hoàn thành bỏ ngỏ",
            "x": 60,
            "y": 1380,
            "size": 50,
            "at": "l2:large",
            "color": "coral"
          },
          {
            "id": "f-a2",
            "t": "arrow",
            "from": [
              80,
              1445
            ],
            "to": [
              80,
              1495
            ],
            "at": "l3:basis"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "mất căn cứ phạt, chỉ còn “thời gian hợp lý”",
            "x": 60,
            "y": 1500,
            "size": 34,
            "at": "l3:reasonable",
            "font": "base"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Gia hạn bảo vệ cả CĐT",
            "x": 960,
            "y": 1260,
            "size": 46,
            "at": "l4:protect",
            "color": "accent",
            "hl": [
              {
                "text": "bảo vệ cả CĐT",
                "at": "l4:protect"
              }
            ]
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "• danh mục gồm lỗi CĐT",
            "x": 960,
            "y": 1340,
            "size": 40,
            "at": "l5:faults"
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "• CĐT tự gia hạn được",
            "x": 960,
            "y": 1400,
            "size": 40,
            "at": "l5:itself"
          },
          {
            "id": "f-7",
            "t": "text",
            "text": "→ phạt tính từ mốc mới",
            "x": 960,
            "y": 1470,
            "size": 44,
            "at": "l5:new",
            "hl": [
              {
                "text": "mốc mới",
                "at": "l5:new"
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
          "say": "Thursday. The contractor's strongest argument: time at large.",
          "sub": "Thứ Năm. Lập luận mạnh nhất của nhà thầu: mốc bị bỏ ngỏ, “time at large”.",
          "keys": [
            "mốc bị bỏ ngỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "By the prevention principle, if the owner causes delay with no extension, the completion date may be set at large.",
          "sub": "Theo nguyên tắc ngăn cản, nếu chủ đầu tư gây chậm mà không gia hạn, mốc hoàn thành có thể bị coi là bỏ ngỏ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then the owner loses its basis for damages. Only a reasonable time is left. The best eraser a contractor has.",
          "sub": "Khi đó chủ đầu tư mất căn cứ tính phạt, chỉ còn đòi hoàn thành trong “thời gian hợp lý”. Cục tẩy phạt tốt nhất của nhà thầu.",
          "keys": [
            "Cục tẩy phạt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sounds backwards, but extensions protect the owner too.",
          "sub": "Nghe ngược đời, nhưng gia hạn bảo vệ cả chủ đầu tư.",
          "keys": [
            "bảo vệ cả chủ đầu tư"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "List owner faults as extension causes, and let the owner extend by itself. Damages then run from the new date.",
          "sub": "Danh mục gia hạn gồm cả lỗi của chủ đầu tư, chủ đầu tư được tự gia hạn. Khi đó phạt vẫn tính từ mốc mới."
        }
      ],
      "ref": "p10,p11"
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
            "at": "l1",
            "fit": [
              "f-b",
              "f-a"
            ],
            "zoom": 1.1,
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
            "id": "f-bl",
            "t": "text",
            "text": "Trước:",
            "x": 60,
            "y": 1580,
            "size": 34,
            "at": "l1:Before",
            "color": "muted"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "“chưa gia hạn, đang tranh chấp… có thể làm CĐT mất quyền tự gia hạn”",
            "x": 180,
            "y": 1582,
            "size": 30,
            "at": "l1:lose",
            "font": "base",
            "color": "coral"
          },
          {
            "id": "f-bx",
            "t": "strike",
            "over": "f-b",
            "at": "l2:After"
          },
          {
            "id": "f-al",
            "t": "text",
            "text": "Sau:",
            "x": 60,
            "y": 1650,
            "size": 34,
            "at": "l2:After",
            "color": "muted"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "“…không làm Ngày Hoàn thành Bắt buộc bị bỏ ngỏ, không ngăn CĐT gia hạn sau đó”",
            "x": 180,
            "y": 1652,
            "size": 30,
            "at": "l2:not",
            "font": "base"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Gia hạn đúng lúc = giữ quyền phạt",
            "x": 60,
            "y": 1740,
            "size": 48,
            "at": "l3:right",
            "color": "accent",
            "hl": [
              {
                "text": "giữ quyền phạt",
                "at": "l3:keeps"
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
          "say": "Before: not extending, or a dispute on extension, may make the owner lose its later right to extend.",
          "sub": "Trước: việc chủ đầu tư chưa gia hạn hoặc đang tranh chấp về gia hạn có thể làm chủ đầu tư mất quyền tự gia hạn sau này."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: it does not set the date at large, and does not stop the owner extending later.",
          "sub": "Sau: điều đó không làm ngày hoàn thành bắt buộc bị bỏ ngỏ, và không ngăn chủ đầu tư gia hạn sau đó.",
          "keys": [
            "không làm ngày hoàn thành bắt buộc bị bỏ ngỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One opens the road, the other closes it. Timely extension keeps the right to damages.",
          "sub": "Bản trước tự mở đường, bản sau đóng lại. Gia hạn đúng lúc là giữ quyền phạt.",
          "keys": [
            "Gia hạn đúng lúc là giữ quyền phạt"
          ]
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Một câu nói miệng có thành hoá đơn?",
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
          "say": "Can one spoken sentence become an invoice?",
          "sub": "Một câu nói miệng có thành hoá đơn không?",
          "keys": [
            "câu nói miệng"
          ]
        }
      ],
      "ref": "p15"
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
            "text": "⑤ Thứ Sáu · Tăng tốc ngầm",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "memo",
                "construction"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
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
            "at": "l2:Dũng",
            "caption": "Bốn tháng trước · họp công trường",
            "icon": "memo"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Khiếu nại chi phí tăng tốc",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l1:acceleration",
            "color": "coral"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "kèm biên bản họp",
            "x": 2028,
            "y": 1325,
            "size": 44,
            "at": "l1:minutes"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "“Cứ giữ mốc cũ.”",
            "x": 2028,
            "y": 1410,
            "size": 54,
            "at": "l3:Keep",
            "color": "accent",
            "hl": [
              {
                "text": "giữ mốc cũ",
                "at": "l3:old"
              }
            ]
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "→ tăng ca, thuê thêm cẩu",
            "x": 2028,
            "y": 1500,
            "size": 44,
            "at": "l4:crane"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday. An acceleration cost claim arrives, with meeting minutes attached.",
          "sub": "Thứ Sáu. Một khiếu nại chi phí tăng tốc gửi tới, kèm biên bản họp.",
          "keys": [
            "chi phí tăng tốc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Rewind four months. Dũng, the owner's young site engineer, at a site meeting. Sam asks for time, the site was handed over late.",
          "sub": "Tua lại bốn tháng. Dũng, kỹ sư hiện trường trẻ phía chủ đầu tư, họp công trường. Sam xin gia hạn vì giao mặt bằng muộn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Keep the old date. Just keep the old date!",
          "sub": "Cứ giữ mốc cũ. Giữ mốc cũ là được!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So the contractor added shifts and hired another crane. Now it wants paying.",
          "sub": "Thế là nhà thầu tăng ca, thuê thêm cẩu. Giờ họ đòi tiền.",
          "keys": [
            "thuê thêm cẩu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s15",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "Họp công trường · bốn tháng trước",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Từ chối gia hạn mà đòi giữ mốc",
          "why": "Từ chối gia hạn có cơ sở mà vẫn đòi giữ mốc là đang đặt hàng tăng tốc, nhà thầu sẽ đòi tiền.",
          "rule": "Gia hạn, hoặc chỉ thị tăng tốc bằng văn bản"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "No extension. Keep the old date.",
          "sub": "Không gia hạn. Cứ giữ mốc cũ.",
          "pose": "cross",
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
          "say": "Refusing a fair extension but demanding the old date is ordering acceleration.",
          "sub": "Không gia hạn mà đòi giữ mốc là đang đặt hàng tăng tốc.",
          "keys": [
            "đặt hàng tăng tốc"
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
          "who": "dung",
          "say": "We'll review the extension in writing. Any acceleration only by written instruction.",
          "sub": "Gia hạn thì xem xét bằng văn bản. Tăng tốc chỉ khi có chỉ thị bằng văn bản.",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Words cost nothing. Here, they cost a crane.",
          "sub": "Lời nói chẳng mất tiền mua. Ở đây, mất cả tiền cẩu.",
          "phase": "redo",
          "keys": [
            "mất cả tiền cẩu"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p15,p16"
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
          }
        ],
        "items": [
          {
            "id": "g-w",
            "t": "text",
            "text": "Tăng tốc: chỉ thị văn bản",
            "x": 2028,
            "y": 1610,
            "size": 42,
            "at": "l1:written",
            "hl": [
              {
                "text": "chỉ thị văn bản",
                "at": "l1:instruction"
              }
            ]
          },
          {
            "id": "g-own",
            "t": "text",
            "text": "Tự chậm, tự đuổi: không trả",
            "x": 2028,
            "y": 1680,
            "size": 42,
            "at": "l2:own",
            "color": "muted"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Không gia hạn + giữ mốc = đặt tăng tốc",
            "x": 2028,
            "y": 1760,
            "size": 34,
            "at": "l3:ordering",
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
          "say": "The owner may pay for acceleration instead of extending. But only by written instruction.",
          "sub": "Chủ đầu tư có thể trả tiền tăng tốc thay vì gia hạn, nhưng phải ra chỉ thị bằng văn bản.",
          "keys": [
            "chỉ thị bằng văn bản"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And when the contractor catches up on its own delay, that is not paid acceleration.",
          "sub": "Còn khi nhà thầu tự chậm rồi tự đẩy nhanh, đó không phải tăng tốc được trả tiền."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No extension plus the old date is ordering acceleration.",
          "sub": "Không gia hạn mà đòi giữ mốc là đang đặt hàng tăng tốc."
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
            "text": "⑥ Thứ Bảy · Chậm đồng thời",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday"
          },
          {
            "id": "h-c",
            "t": "box",
            "x": 3996,
            "y": 1260,
            "w": 700,
            "h": 90,
            "at": "l2:contractor",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "h-c1",
            "t": "text",
            "text": "Nguyên nhân do nhà thầu",
            "x": 4026,
            "y": 1278,
            "size": 42,
            "at": "l2:contractor+200"
          },
          {
            "id": "h-o",
            "t": "box",
            "x": 3996,
            "y": 1380,
            "w": 700,
            "h": 90,
            "at": "l2:owner",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "h-o1",
            "t": "text",
            "text": "Nguyên nhân do CĐT",
            "x": 4026,
            "y": 1398,
            "size": 42,
            "at": "l2:owner+200",
            "color": "coral"
          },
          {
            "id": "h-w",
            "t": "text",
            "text": "Nhà thầu muốn: thời gian + tiền",
            "x": 3996,
            "y": 1510,
            "size": 42,
            "at": "l3:both"
          },
          {
            "id": "h-ch",
            "t": "text",
            "text": "Chọn rõ một cách:",
            "x": 4836,
            "y": 1260,
            "size": 46,
            "at": "l4:choose",
            "color": "accent"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "• gia hạn, không kèm tiền",
            "x": 4836,
            "y": 1335,
            "size": 40,
            "at": "l4:money"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "• chia theo tỷ lệ",
            "x": 4836,
            "y": 1395,
            "size": 40,
            "at": "l4:split"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "• CĐT “có thể xem xét”",
            "x": 4836,
            "y": 1455,
            "size": 40,
            "at": "l4:discretion"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Saturday. Two causes at once.",
          "sub": "Thứ Bảy. Hai nguyên nhân cùng lúc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Concurrent delay: one caused by the contractor, one by the owner, at the same time.",
          "sub": "Chậm đồng thời: một nguyên nhân do nhà thầu, một do chủ đầu tư, xảy ra cùng lúc.",
          "keys": [
            "Chậm đồng thời"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The contractor wants both time and money.",
          "sub": "Nhà thầu muốn cả gia hạn lẫn chi phí."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The contract should choose: time without money, a split, or owner discretion. The 2017 suite also follows the contract.",
          "sub": "Hợp đồng nên chọn rõ: gia hạn không kèm tiền, chia theo tỷ lệ, hoặc chủ đầu tư “có thể xem xét”. Bộ mẫu 2017 cũng xử lý theo quy tắc ghi trong hợp đồng."
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s18",
      "module": "BRK-04",
      "data": {
        "title": "Chậm đồng thời",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Hợp đồng im lặng, cãi theo thông lệ",
        "right": "Ghi trước: gia hạn, không có chi phí",
        "wrongIllus": "crossed-swords",
        "rightIllus": "memo"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Option A: silence. Endless argument by custom.",
          "sub": "Cách A: im lặng. Cãi nhau theo thông lệ, kéo dài.",
          "keys": [
            "Cách A"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B: time, no money, written in advance.",
          "sub": "Cách B: ghi trước, gia hạn không có chi phí.",
          "keys": [
            "Cách B"
          ]
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
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-q",
            "t": "text",
            "text": "Còn cãi một câu: có đồng thời",
            "x": 3996,
            "y": 1610,
            "size": 42,
            "at": "l1:question"
          },
          {
            "id": "h-q2",
            "t": "text",
            "text": "trên đường găng không?",
            "x": 3996,
            "y": 1670,
            "size": 42,
            "at": "l1:path",
            "hl": [
              {
                "text": "đường găng",
                "at": "l1:path"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Viết trước luật chơi",
            "x": 4836,
            "y": 1650,
            "size": 56,
            "at": "l2:rules",
            "color": "accent",
            "hl": [
              {
                "text": "luật chơi",
                "at": "l2:rules"
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
          "say": "With option B, only one question is left: were the causes really concurrent on the critical path?",
          "sub": "Với cách B, chỉ còn cãi một câu: hai nguyên nhân có thật sự đồng thời trên đường găng không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write the rules of the game first, and argue much less later.",
          "sub": "Viết trước luật chơi, đỡ cãi về sau.",
          "keys": [
            "Viết trước luật chơi"
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
            "text": "⑦ Chủ nhật · Ba lớp phòng thủ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6984,
            "y": 1200,
            "w": 600,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "shield"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sunday",
            "caption": "Chủ nhật · Thảo soạn câu",
            "icon": "shield"
          },
          {
            "id": "i-b1",
            "t": "badge",
            "n": 1,
            "x": 5994,
            "y": 1290,
            "at": "l2:first"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Điều kiện tiên quyết:",
            "x": 6069,
            "y": 1268,
            "size": 46,
            "at": "l2:first",
            "color": "accent"
          },
          {
            "id": "i-1a",
            "t": "text",
            "text": "(a) báo đúng hạn (b) đường găng (c) giảm thiểu",
            "x": 6069,
            "y": 1330,
            "size": 30,
            "at": "l2:notices",
            "font": "base"
          },
          {
            "id": "i-1b",
            "t": "text",
            "text": "cần tiến độ gốc được duyệt",
            "x": 6069,
            "y": 1380,
            "size": 34,
            "at": "l3:baseline",
            "color": "muted"
          },
          {
            "id": "i-b2",
            "t": "badge",
            "n": 2,
            "x": 5994,
            "y": 1480,
            "at": "l4:sole"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Quyền duy nhất:",
            "x": 6069,
            "y": 1458,
            "size": 46,
            "at": "l4:sole",
            "color": "accent"
          },
          {
            "id": "i-2a",
            "t": "text",
            "text": "gia hạn + chi phí trực tiếp, không lợi nhuận",
            "x": 6069,
            "y": 1520,
            "size": 30,
            "at": "l4:profit",
            "font": "base"
          },
          {
            "id": "i-b3",
            "t": "badge",
            "n": 3,
            "x": 5994,
            "y": 1630,
            "at": "l5:discipline"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Kỷ luật chỉ thị:",
            "x": 6069,
            "y": 1608,
            "size": 46,
            "at": "l5:discipline",
            "color": "accent"
          },
          {
            "id": "i-3a",
            "t": "text",
            "text": "văn bản · có thẩm quyền · ghi rõ là Thay đổi",
            "x": 6069,
            "y": 1670,
            "size": 30,
            "at": "l5:named",
            "font": "base"
          },
          {
            "id": "i-3b",
            "t": "text",
            "text": "giới hạn uỷ quyền đại diện CĐT",
            "x": 6069,
            "y": 1720,
            "size": 34,
            "at": "l6:authority",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Sunday homework. Thirdly, how do we defend? In three layers.",
          "sub": "Bài tập Chủ nhật. Thứ ba, phòng thủ thế nào? Ba lớp.",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First layer, conditions precedent: notices on time, delay on the current critical path, reasonable mitigation.",
          "sub": "Lớp một, điều kiện tiên quyết: không gia hạn trừ khi đã thông báo đúng hạn, chứng minh trên đường găng hiện hành, đã nỗ lực giảm thiểu.",
          "keys": [
            "điều kiện tiên quyết"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A critical path means something only with an approved baseline schedule, updated regularly.",
          "sub": "Đường găng chỉ có nghĩa khi có tiến độ gốc được duyệt và cập nhật đều."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Second, sole entitlement: time and direct cost are the only remedy, even for owner delay. No profit in prolongation.",
          "sub": "Lớp hai, quyền duy nhất: gia hạn và chi phí trực tiếp là quyền duy nhất, kể cả khi chủ đầu tư gây chậm; chi phí kéo dài không gồm lợi nhuận.",
          "keys": [
            "quyền duy nhất"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Third, instruction discipline: no variation unless written, from someone authorised, and named a variation.",
          "sub": "Lớp ba, kỷ luật chỉ thị: không là Thay đổi nếu không bằng văn bản, do người có thẩm quyền, ghi rõ là Thay đổi.",
          "keys": [
            "kỷ luật chỉ thị"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And limit the representative's authority, so one spoken sentence never becomes a variation.",
          "sub": "Và giới hạn uỷ quyền đại diện chủ đầu tư, để một câu nói miệng không thành khoản phát sinh."
        }
      ],
      "ref": "p20,p21,p22"
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
            "at": "l3",
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
            "text": "Thứ Hai sau · 8:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:eight"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1240,
            "w": 40,
            "h": 40,
            "at": "l1:faults",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1230,
            "size": 50,
            "at": "l1:faults+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Danh mục gồm lỗi CĐT",
            "x": 7996,
            "y": 1236,
            "size": 32,
            "at": "l1:faults+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1298,
            "w": 40,
            "h": 40,
            "at": "l1:extend",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1288,
            "size": 50,
            "at": "l1:extend+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "CĐT tự gia hạn",
            "x": 7996,
            "y": 1294,
            "size": 32,
            "at": "l1:extend+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1356,
            "w": 40,
            "h": 40,
            "at": "l1:large",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1346,
            "size": 50,
            "at": "l1:large+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Câu chống bỏ ngỏ",
            "x": 7996,
            "y": 1352,
            "size": 32,
            "at": "l1:large+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1414,
            "w": 40,
            "h": 40,
            "at": "l1:conditions",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1404,
            "size": 50,
            "at": "l1:conditions+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Điều kiện tiên quyết",
            "x": 7996,
            "y": 1410,
            "size": 32,
            "at": "l1:conditions+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1472,
            "w": 40,
            "h": 40,
            "at": "l2:sole",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1462,
            "size": 50,
            "at": "l2:sole+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Câu quyền duy nhất",
            "x": 7996,
            "y": 1468,
            "size": 32,
            "at": "l2:sole+200"
          },
          {
            "id": "j-c5",
            "t": "box",
            "x": 7932,
            "y": 1530,
            "w": 40,
            "h": 40,
            "at": "l2:concurrent",
            "stroke": 5
          },
          {
            "id": "j-k5",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1520,
            "size": 50,
            "at": "l2:concurrent+600",
            "color": "accent"
          },
          {
            "id": "j-l5",
            "t": "text",
            "text": "Quy tắc chậm đồng thời",
            "x": 7996,
            "y": 1526,
            "size": 32,
            "at": "l2:concurrent+200"
          },
          {
            "id": "j-c6",
            "t": "box",
            "x": 7932,
            "y": 1588,
            "w": 40,
            "h": 40,
            "at": "l2:acceleration",
            "stroke": 5
          },
          {
            "id": "j-k6",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1578,
            "size": 50,
            "at": "l2:acceleration+600",
            "color": "accent"
          },
          {
            "id": "j-l6",
            "t": "text",
            "text": "Tăng tốc: chỉ thị văn bản",
            "x": 7996,
            "y": 1584,
            "size": 32,
            "at": "l2:acceleration+200"
          },
          {
            "id": "j-c7",
            "t": "box",
            "x": 7932,
            "y": 1646,
            "w": 40,
            "h": 40,
            "at": "l2:diary",
            "stroke": 5
          },
          {
            "id": "j-k7",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1636,
            "size": 50,
            "at": "l2:diary+600",
            "color": "accent"
          },
          {
            "id": "j-l7",
            "t": "text",
            "text": "Nhật ký, dữ liệu thời tiết",
            "x": 7996,
            "y": 1642,
            "size": 32,
            "at": "l2:diary+200"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "face": "happy",
                  "pose": "thumb"
                }
              ],
              "props": [
                "incoming-envelope",
                "clipboard"
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
            "at": "l3:inbox",
            "caption": "Thứ Hai sau 8:00 · cùng hộp thư",
            "icon": "incoming-envelope"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Lời nói chẳng mất tiền mua”",
            "x": 8752,
            "y": 1730,
            "size": 40,
            "at": "l4:Words",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Next Monday, eight a.m. My checklist: owner faults listed, owner may extend, no time at large, conditions precedent.",
          "sub": "Tám giờ sáng thứ Hai tuần sau. Danh sách của em: gồm lỗi chủ đầu tư, tự gia hạn, chống bỏ ngỏ, điều kiện tiên quyết.",
          "keys": [
            "Danh sách của em"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Sole entitlement, a concurrent delay rule, acceleration only in writing, and a site diary with weather data.",
          "sub": "Câu quyền duy nhất, quy tắc chậm đồng thời, tăng tốc chỉ theo chỉ thị văn bản, nhật ký và dữ liệu thời tiết."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Same inbox, same claims. But now each one gets a written answer, on time.",
          "sub": "Vẫn hộp thư ấy, vẫn khiếu nại ấy. Nhưng giờ mỗi cái đều có trả lời bằng văn bản, đúng hạn.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Words cost nothing, they say. In a contract, write them down.",
          "sub": "“Lời nói chẳng mất tiền mua.” Trong hợp đồng, hãy viết ra giấy.",
          "keys": [
            "hãy viết ra giấy"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p23,outro"
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
            "at": "l1:calculation",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:date",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:writing",
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
            "x": 5556,
            "y": 20,
            "at": "l1:calculation"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1620,
            "y": 1110,
            "at": "l2:date"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3588,
            "y": 1110,
            "at": "l3:writing"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức chung, không phải tư vấn cho hợp đồng cụ thể; nhân vật, dự án là minh hoạ; câu chữ cần luật sư kiểm.",
            "x": 7932,
            "y": 1812,
            "size": 28,
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
          "say": "So: a claim is a pricing tool. The name helps, the calculation protects.",
          "sub": "Tóm lại: khiếu nại là công cụ bù giá. Tên gọi giúp, bảng tính giữ.",
          "keys": [
            "công cụ bù giá"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Extend on time to keep the completion date, and your damages.",
          "sub": "Gia hạn đúng lúc để giữ mốc, giữ quyền phạt.",
          "keys": [
            "Gia hạn đúng lúc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And put every instruction in writing.",
          "sub": "Và mọi chỉ thị đều bằng văn bản.",
          "keys": [
            "bằng văn bản"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s23",
      "module": "QUIZ-01",
      "data": {
        "q": "The contractor asks for more time after a late site handover, what should the owner's representative avoid?",
        "options": [
          "Saying keep the old date without either extending time or instructing acceleration",
          "Answering in writing within the period set in the extension clause",
          "Asking the contractor to show the delay on the current critical path"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "speech-balloon",
        "why": "Nói “cứ giữ mốc cũ” mà không gia hạn, không chỉ thị tăng tốc là mở đường cho khiếu nại tăng tốc."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The contractor asks for more time after a late site handover, what should the owner's representative avoid?",
          "sub": "Nhà thầu xin gia hạn sau khi chủ đầu tư giao mặt bằng muộn, đại diện chủ đầu tư nên tránh điều gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Avoid saying keep the old date without extending time or instructing acceleration.",
          "sub": "Tránh nói “giữ mốc cũ” khi không gia hạn, cũng không chỉ thị tăng tốc."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Words cost a crane.",
          "sub": "Lời nói tốn cả tiền cẩu."
        }
      ],
      "ref": "questions[26]"
    },
    {
      "id": "s24",
      "module": "END-05",
      "data": {
        "text": "Rà điều gia hạn theo tám ô",
        "sub": "Hợp đồng đang đàm phán · bài sau: tạm ngừng, chấm dứt"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, check the extension clause you are negotiating against the eight item list.",
          "sub": "Hôm nay, rà điều gia hạn của hợp đồng đang đàm phán theo danh sách tám ô.",
          "keys": [
            "danh sách tám ô"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next: when the owner pays late, can the contractor suspend or terminate? Now, forty questions below.",
          "sub": "Bài sau: chủ đầu tư chậm trả thì nhà thầu tạm ngừng, chấm dứt ra sao. Giờ thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (đào sâu 2 chuỗi epc-contractor-side) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21 (đoán sai): “Đổi tên phạt chậm thành bồi thường định trước là thoát trần phạt?” Có / Chưa chắc, lặng 1,5 s, lật → trả lời đủ ở s05 (bảng tính căn cứ p4–p5). Dòng thời gian: sáu tháng sau ngày ký, một tuần hộp thư của Thảo (thứ Hai 8:00 khiếu nại dồn về → thứ Hai Bác Bình: tấn công khoản phạt, 8%, Luật XD 2025 p3–p5 → thứ Ba chuỗi thông báo p6, BRK-03 28 ngày, 84 ngày p7–p8 → thứ Tư khiếu nại muộn của Sam p9 → thứ Năm time at large, trước–sau p10–p13 → BRK-07 → thứ Sáu khiếu nại tăng tốc, tua lại bốn tháng: Dũng “Cứ giữ mốc cũ” + “Khoan đã!” p14–p16 → thứ Bảy chậm đồng thời, BRK-04 Cách A/B p17–p19 → Chủ nhật ba lớp phòng thủ p20–p22 → thứ Hai sau 8:00 cùng hộp thư, danh sách tám ô p23). Nhân vật theo w145/_series/epc-contractor-side.md: Thảo, Bác Bình, Sam, Dũng. Không nêu tên tổ chức soạn mẫu (FIDIC 2017 → “bộ mẫu hợp đồng quốc tế 2017”). Số chỉ từ bài: 8%, 28 ngày, 84 ngày, Luật XD 2025 Điều 86. Câu trích “Lời nói chẳng mất tiền mua” mở/khép vòng + DLG. Câu đố questions[26]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
