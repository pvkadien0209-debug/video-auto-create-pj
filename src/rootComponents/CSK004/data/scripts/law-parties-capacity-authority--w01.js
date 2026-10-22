// law-parties-capacity-authority--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "law-parties-capacity-authority--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "law-contract-first-review",
    "slug": "law-parties-capacity-authority",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Bên ký có đủ tư cách và đúng thẩm quyền ký không?",
    "series": "Rà hợp đồng mua bán đầu tiên — cho pháp chế mới vào nghề, biết đọc theo thứ tự nào và hỏi lại đúng chỗ"
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
              "a-pg",
              "a-seal"
            ],
            "zoom": 1.3,
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-pg",
            "t": "box",
            "x": 60,
            "y": 60,
            "w": 760,
            "h": 560,
            "at": "l1:page",
            "stroke": 5
          },
          {
            "id": "a-h",
            "t": "text",
            "text": "TRANG KÝ",
            "x": 100,
            "y": 90,
            "size": 50,
            "at": "l1:page"
          },
          {
            "id": "a-b",
            "t": "text",
            "text": "Đại diện bên bán:",
            "x": 100,
            "y": 200,
            "size": 40,
            "at": "l1:seller"
          },
          {
            "id": "a-n",
            "t": "text",
            "text": "………… (chức danh)",
            "x": 100,
            "y": 260,
            "size": 40,
            "at": "l1:seller+400",
            "color": "muted"
          },
          {
            "id": "a-seal",
            "t": "ring",
            "around": [
              "a-n"
            ],
            "color": "coral",
            "stroke": 12,
            "at": "l2:seal"
          },
          {
            "id": "a-red",
            "t": "text",
            "text": "DẤU ĐỎ",
            "x": 480,
            "y": 400,
            "size": 64,
            "at": "l2:red",
            "color": "coral",
            "hl": [
              {
                "text": "DẤU ĐỎ",
                "at": "l2:red"
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
          "say": "One signature page. The seller's representative, a title, and a blank for the name.",
          "sub": "Một trang ký. Đại diện bên bán, một chức danh, và chỗ trống chờ tên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And in the corner, a big round red seal. Very official. Very red.",
          "sub": "Góc trang, một con dấu đỏ tròn to. Rất trang trọng. Rất đỏ.",
          "keys": [
            "con dấu đỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Let's pull back and see who is admiring it.",
          "sub": "Lùi ra xem ai đang ngắm nó nhé."
        }
      ],
      "ref": "p3"
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
            "y": 60,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "e-mail"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
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
            "caption": "Thứ Tư · 8:00 · hai ngày trước buổi ký",
            "icon": "page-facing-up"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Danh có chính",
            "x": 880,
            "y": 610,
            "size": 50,
            "at": "l5:name",
            "color": "accent"
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "thì ngôn mới thuận”",
            "x": 1200,
            "y": 680,
            "size": 50,
            "at": "l5:words",
            "color": "accent",
            "hl": [
              {
                "text": "ngôn mới thuận",
                "at": "l5:words"
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
          "say": "It's Dũng, from sales. He holds the supplier relationship, and he loves that seal.",
          "sub": "Là anh Dũng bên kinh doanh, người giữ quan hệ với bên bán. Và anh rất mê con dấu ấy.",
          "keys": [
            "anh Dũng bên kinh doanh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next to him, Thảo, our new legal officer, reading pass one: the parties.",
          "sub": "Bên cạnh là Thảo, pháp chế mới, đang đọc lượt một: chủ thể.",
          "keys": [
            "lượt một: chủ thể"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Red seal, company name, all there. Signing is Thursday. We're safe, right?",
          "sub": "Dấu đỏ, tên công ty, đủ cả. Thứ Năm ký. Chắc ăn rồi nhỉ?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "A seal shows the company. It doesn't show who may sign, or for how much.",
          "sub": "Con dấu cho biết công ty nào. Nó không cho biết ai được ký, ký tới bao nhiêu.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The old saying goes: a proper name makes proper words. Here, a proper signer makes a binding contract.",
          "sub": "Người xưa nói: “Danh có chính thì ngôn mới thuận.” Ở đây: người ký có quyền thì hợp đồng mới chắc.",
          "keys": [
            "Danh có chính thì ngôn mới thuận"
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
            "text": "Bên ký có đủ quyền ký?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:signer",
            "hl": [
              {
                "text": "đủ quyền",
                "at": "l1:authority"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: đọc giá, đọc hàng trước",
            "x": 2028,
            "y": 160,
            "size": 46,
            "at": "l2:price",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:first"
          },
          {
            "id": "b-n0",
            "t": "badge",
            "n": 1,
            "x": 2058,
            "y": 290,
            "at": "l3:exist"
          },
          {
            "id": "b-c0",
            "t": "text",
            "text": "Tồn tại hợp pháp?",
            "x": 2108,
            "y": 265,
            "size": 46,
            "at": "l3:exist+200"
          },
          {
            "id": "b-n1",
            "t": "badge",
            "n": 2,
            "x": 2058,
            "y": 370,
            "at": "l3:who"
          },
          {
            "id": "b-c1",
            "t": "text",
            "text": "Người ký là ai?",
            "x": 2108,
            "y": 345,
            "size": 46,
            "at": "l3:who+200"
          },
          {
            "id": "b-n2",
            "t": "badge",
            "n": 3,
            "x": 2058,
            "y": 450,
            "at": "l3:what right"
          },
          {
            "id": "b-c2",
            "t": "text",
            "text": "Ký theo quyền nào?",
            "x": 2108,
            "y": 425,
            "size": 46,
            "at": "l3:what right+200"
          },
          {
            "id": "b-n3",
            "t": "badge",
            "n": 4,
            "x": 2058,
            "y": 530,
            "at": "l4:scope"
          },
          {
            "id": "b-c3",
            "t": "text",
            "text": "Phạm vi, thời hạn?",
            "x": 2108,
            "y": 505,
            "size": 46,
            "at": "l4:scope+200"
          },
          {
            "id": "b-n4",
            "t": "badge",
            "n": 5,
            "x": 2058,
            "y": 610,
            "at": "l4:approval"
          },
          {
            "id": "b-c4",
            "t": "text",
            "text": "Cần cấp trên duyệt?",
            "x": 2108,
            "y": 585,
            "size": 46,
            "at": "l4:approval+200"
          },
          {
            "id": "b-why",
            "t": "text",
            "text": "Người ký không đủ quyền",
            "x": 2948,
            "y": 300,
            "size": 50,
            "at": "l5:lacks",
            "color": "coral"
          },
          {
            "id": "b-why2",
            "t": "text",
            "text": "→ điều khoản đẹp mất chỗ dựa",
            "x": 2948,
            "y": 380,
            "size": 44,
            "at": "l5:beautiful",
            "hl": [
              {
                "text": "mất chỗ dựa",
                "at": "l5:footing"
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
          "say": "So: does the signer have the capacity and authority to sign?",
          "sub": "Vậy: bên ký có đủ tư cách và đúng thẩm quyền ký không?",
          "keys": [
            "đúng thẩm quyền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not price first, not goods first. Parties first.",
          "sub": "Không đọc giá hay hàng trước. Chủ thể trước.",
          "keys": [
            "Chủ thể trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Does the other company exist lawfully? Who signs? Under what right?",
          "sub": "Công ty bên kia có tồn tại hợp pháp không? Ai ký? Ký theo quyền nào?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "What scope and term? And does their board or shareholders need to give approval?",
          "sub": "Phạm vi, thời hạn ra sao? Có cần cấp trên của họ chấp thuận không?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "If the signer lacks authority, the excess may not bind them, and every beautiful clause loses its footing.",
          "sub": "Nếu người ký không đủ quyền, phần vượt có thể không ràng buộc bên kia, và mọi điều khoản đẹp phía sau mất chỗ dựa.",
          "keys": [
            "mất chỗ dựa"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-04",
      "data": {
        "title": "Con dấu và giấy uỷ quyền",
        "wrong": "Có dấu đỏ là hợp đồng chắc chắn ràng buộc",
        "right": "Kiểm người ký: loại hợp đồng, giá trị, ngày ký",
        "wrongIllus": "red-envelope",
        "rightIllus": "identification-card"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Myth: a red seal means it surely binds.",
          "sub": "Hiểu lầm: có dấu đỏ là chắc chắn ràng buộc.",
          "keys": [
            "Hiểu lầm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Truth: a red stamp cannot replace a power of attorney.",
          "sub": "Thật ra: dấu đỏ không thay được giấy uỷ quyền.",
          "keys": [
            "dấu đỏ không thay được giấy uỷ quyền"
          ]
        }
      ],
      "ref": "p3,p4"
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
            "text": "① 9:00 · Pháp nhân bên kia",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "c-86",
            "t": "text",
            "text": "Điều 86: năng lực pháp luật",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l2:capacity",
            "hl": [
              {
                "text": "năng lực pháp luật",
                "at": "l2:capacity"
              }
            ]
          },
          {
            "id": "c-86b",
            "t": "text",
            "text": "không bị hạn chế, trừ luật khác",
            "x": 4036,
            "y": 245,
            "size": 42,
            "at": "l2:limited",
            "color": "muted"
          },
          {
            "id": "c-on",
            "t": "text",
            "text": "Có: khi ghi vào sổ đăng ký",
            "x": 3996,
            "y": 330,
            "size": 46,
            "at": "l3:register",
            "color": "accent",
            "hl": [
              {
                "text": "sổ đăng ký",
                "at": "l3:register"
              }
            ]
          },
          {
            "id": "c-off",
            "t": "text",
            "text": "Hết: khi pháp nhân chấm dứt",
            "x": 3996,
            "y": 400,
            "size": 46,
            "at": "l3:ends"
          },
          {
            "id": "c-i",
            "t": "illus",
            "name": "magnifying-glass-tilted-left",
            "x": 5236,
            "y": 160,
            "size": 200,
            "at": "l4:compare"
          },
          {
            "id": "c-cmp",
            "t": "text",
            "text": "Đối chiếu đăng ký công khai:",
            "x": 4916,
            "y": 400,
            "size": 44,
            "at": "l4:compare"
          },
          {
            "id": "c-cmp2",
            "t": "text",
            "text": "tên đủ · mã số · trụ sở",
            "x": 4956,
            "y": 470,
            "size": 44,
            "at": "l4:code",
            "color": "accent",
            "hl": [
              {
                "text": "mã số",
                "at": "l4:code"
              }
            ]
          },
          {
            "id": "c-err",
            "t": "text",
            "text": "Sai một chữ: rắc rối về sau",
            "x": 3996,
            "y": 560,
            "size": 44,
            "at": "l5:letter",
            "color": "coral",
            "hl": [
              {
                "text": "Sai một chữ",
                "at": "l5:letter"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Bộ luật Dân sự 2015, Điều 86",
            "x": 3996,
            "y": 720,
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
          "say": "Nine a.m. Check one: does the company on the other side legally exist?",
          "sub": "Chín giờ. Việc một: công ty bên kia có tồn tại hợp pháp không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article eighty-six: a company's legal capacity is not limited, unless the Code or another law says so.",
          "sub": "Điều 86: năng lực pháp luật dân sự của pháp nhân không bị hạn chế, trừ khi Bộ luật hoặc luật khác quy định khác.",
          "keys": [
            "không bị hạn chế"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It starts at set up, or at entry in the register, and ends when the company ends.",
          "sub": "Có từ khi thành lập, hoặc khi ghi vào sổ đăng ký; chấm dứt khi pháp nhân chấm dứt.",
          "keys": [
            "ghi vào sổ đăng ký"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "So I compare the full name, company code and head office with the public registration data.",
          "sub": "Vậy em đối chiếu tên đầy đủ, mã số doanh nghiệp, trụ sở với thông tin đăng ký công khai.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One wrong letter today, and invoices, claims or lawsuits get messy tomorrow.",
          "sub": "Sai một chữ hôm nay, mai đòi tiền, xuất hoá đơn hay khởi kiện đều rắc rối.",
          "keys": [
            "Sai một chữ"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "text": "② 10:00 · Ai đại diện?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:ten"
          },
          {
            "id": "d-137",
            "t": "text",
            "text": "Điều 137: đại diện theo pháp luật",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "l2:lists",
            "hl": [
              {
                "text": "theo pháp luật",
                "at": "l2:lists"
              }
            ]
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "• theo điều lệ",
            "x": 6004,
            "y": 245,
            "size": 44,
            "at": "l2:charter"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "• theo quy định pháp luật",
            "x": 6004,
            "y": 310,
            "size": 44,
            "at": "l2:law"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "• Toà án chỉ định",
            "x": 6004,
            "y": 375,
            "size": 44,
            "at": "l2:court"
          },
          {
            "id": "d-many",
            "t": "text",
            "text": "Nhiều người, mỗi người một phạm vi",
            "x": 5964,
            "y": 460,
            "size": 40,
            "at": "l2:court+900",
            "color": "muted"
          },
          {
            "id": "d-title",
            "t": "text",
            "text": "“Trưởng phòng kinh doanh”",
            "x": 6884,
            "y": 200,
            "size": 48,
            "at": "l4:sales manager",
            "color": "coral"
          },
          {
            "id": "d-title2",
            "t": "text",
            "text": "“Phó giám đốc” · “GĐ chi nhánh”",
            "x": 6884,
            "y": 275,
            "size": 42,
            "at": "l4:deputy",
            "color": "coral"
          },
          {
            "id": "d-chk",
            "t": "text",
            "text": "Chức danh chưa đủ",
            "x": 6884,
            "y": 380,
            "size": 56,
            "at": "l5:title",
            "color": "accent",
            "hl": [
              {
                "text": "chưa đủ",
                "at": "l5:not enough"
              }
            ]
          },
          {
            "id": "d-cmp",
            "t": "text",
            "text": "So tên với điều lệ, đăng ký",
            "x": 6884,
            "y": 470,
            "size": 42,
            "at": "l5:compare"
          },
          {
            "id": "d-no",
            "t": "text",
            "text": "Không trùng → ký theo uỷ quyền",
            "x": 6884,
            "y": 545,
            "size": 42,
            "at": "l6:match",
            "hl": [
              {
                "text": "uỷ quyền",
                "at": "l6:authorisation"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Bộ luật Dân sự 2015, Điều 137, 140, 141",
            "x": 5964,
            "y": 720,
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
          "say": "Ten a.m. Check two: who is the company's legal representative?",
          "sub": "Mười giờ. Việc hai: ai là người đại diện theo pháp luật của công ty bên kia?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article one thirty-seven lists them: named in the charter, set by law, or appointed by a court. There can be several.",
          "sub": "Điều 137 liệt kê: người do điều lệ chỉ định, người có thẩm quyền theo pháp luật, người do Toà án chỉ định. Có thể nhiều người."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "The page says: sales manager. Not deputy director, not branch director either.",
          "sub": "Trang ký ghi: trưởng phòng kinh doanh. Không phải phó giám đốc, cũng không phải giám đốc chi nhánh.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A title on the page is not enough. Compare the name with the charter and the registration.",
          "sub": "Chức danh trên trang ký chưa đủ. So tên người ký với điều lệ và thông tin đăng ký.",
          "keys": [
            "chưa đủ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "No match? Then that person must sign under an authorisation.",
          "sub": "Không trùng? Người đó phải ký theo uỷ quyền.",
          "keys": [
            "ký theo uỷ quyền"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "text": "③ 14:00 · Giấy uỷ quyền",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:two"
          },
          {
            "id": "e-138",
            "t": "text",
            "text": "Điều 138: pháp nhân uỷ quyền",
            "x": 7932,
            "y": 165,
            "size": 42,
            "at": "l2:allows"
          },
          {
            "id": "e-141",
            "t": "text",
            "text": "Khoản 4 Điều 141: báo phạm vi",
            "x": 7932,
            "y": 225,
            "size": 42,
            "at": "l2:inform",
            "hl": [
              {
                "text": "báo phạm vi",
                "at": "l2:inform"
              }
            ]
          },
          {
            "id": "e-140",
            "t": "text",
            "text": "Điều 140: không rõ hạn → 01 năm",
            "x": 7932,
            "y": 285,
            "size": 42,
            "at": "l3:one year",
            "color": "coral",
            "hl": [
              {
                "text": "01 năm",
                "at": "l3:one year"
              }
            ]
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 375,
            "w": 44,
            "h": 44,
            "at": "l4:grants",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 355,
            "size": 56,
            "at": "l4:grants+500",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Ai uỷ quyền? Có là ĐDTPL?",
            "x": 7992,
            "y": 370,
            "size": 38,
            "at": "l4:grants+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 447,
            "w": 44,
            "h": 44,
            "at": "l4:receives",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 427,
            "size": 56,
            "at": "l4:receives+500",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Ai được uỷ quyền? Đúng người ký?",
            "x": 7992,
            "y": 442,
            "size": 38,
            "at": "l4:receives+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 519,
            "w": 44,
            "h": 44,
            "at": "l5:scope",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 499,
            "size": 56,
            "at": "l5:scope+500",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Phạm vi: loại, giá trị tối đa",
            "x": 7992,
            "y": 514,
            "size": 38,
            "at": "l5:scope+200",
            "color": "coral"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 591,
            "w": 44,
            "h": 44,
            "at": "l5:term",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 571,
            "size": 56,
            "at": "l5:term+500",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Thời hạn còn vào ngày ký?",
            "x": 7992,
            "y": 586,
            "size": 38,
            "at": "l5:term+200"
          },
          {
            "id": "e-c4",
            "t": "box",
            "x": 7932,
            "y": 663,
            "w": 44,
            "h": 44,
            "at": "l5:delegate",
            "stroke": 5
          },
          {
            "id": "e-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 643,
            "size": 56,
            "at": "l5:delegate+500",
            "color": "accent"
          },
          {
            "id": "e-l4",
            "t": "text",
            "text": "Được uỷ quyền lại không?",
            "x": 7992,
            "y": 658,
            "size": 38,
            "at": "l5:delegate+200"
          },
          {
            "id": "e-i",
            "t": "illus",
            "name": "page-with-curl",
            "x": 9172,
            "y": 200,
            "size": 240,
            "at": "l2:allows"
          },
          {
            "id": "e-end",
            "t": "text",
            "text": "Hết hạn, xong việc, đơn phương",
            "x": 8812,
            "y": 500,
            "size": 36,
            "at": "l3:ends",
            "color": "muted"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Bộ luật Dân sự 2015, Điều 138, 140, 141",
            "x": 8812,
            "y": 720,
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
          "say": "Two p.m. The sales manager will sign under a power of attorney. What must it show?",
          "sub": "Hai giờ chiều. Trưởng phòng kinh doanh bên bán sẽ ký theo uỷ quyền. Giấy ấy cần có gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article one thirty-eight allows it. And the representative must inform you of their scope.",
          "sub": "Điều 138 cho phép pháp nhân uỷ quyền. Khoản 4 Điều 141: người đại diện phải thông báo phạm vi cho bên giao dịch.",
          "keys": [
            "thông báo phạm vi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No term, no specific deal? Article one forty: one year. It ends on expiry, job done, or withdrawal.",
          "sub": "Không ghi hạn, không gắn việc cụ thể? Điều 140: 01 năm. Hết khi hết hạn, xong việc, hay đơn phương chấm dứt.",
          "keys": [
            "01 năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "My checklist. Who grants it, and is that the legal representative? Who receives it, the same signer?",
          "sub": "Bảng kiểm của em. Ai uỷ quyền, có phải đại diện theo pháp luật? Ai được uỷ quyền, có đúng người ký?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Scope: contract type, maximum value, counterparty. Term still valid on signing day. Can they delegate again?",
          "sub": "Phạm vi: loại hợp đồng, giá trị tối đa, đối tác. Thời hạn còn vào ngày ký. Có được uỷ quyền lại không?"
        }
      ],
      "ref": "p7,p8,p9"
    },
    {
      "id": "s07",
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 15:00 · Dòng giá trị tối đa",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:three"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1210,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "face": "surprised"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "page-with-curl",
                "mobile-phone"
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
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:three",
            "caption": "15:00 · đọc tới dòng cuối",
            "icon": "page-with-curl"
          },
          {
            "id": "f-lim",
            "t": "text",
            "text": "Giấy: chỉ dưới mức X",
            "x": 60,
            "y": 1270,
            "size": 50,
            "at": "l2:below"
          },
          {
            "id": "f-hd",
            "t": "text",
            "text": "Hợp đồng này: trên mức X",
            "x": 60,
            "y": 1350,
            "size": 50,
            "at": "l2:above",
            "color": "coral",
            "hl": [
              {
                "text": "trên mức X",
                "at": "l2:above"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Đọc tới dòng giá trị tối đa",
            "x": 60,
            "y": 1470,
            "size": 46,
            "at": "l5:value",
            "color": "accent",
            "hl": [
              {
                "text": "giá trị tối đa",
                "at": "l5:value"
              }
            ]
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "mới gọi là đọc giấy uỷ quyền",
            "x": 60,
            "y": 1540,
            "size": 42,
            "at": "l5:read"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three p.m. The seller's power of attorney for their sales manager arrives. Thảo reads to the last line.",
          "sub": "Ba giờ. Giấy uỷ quyền cho trưởng phòng kinh doanh bên bán đến. Thảo đọc tới dòng cuối."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "It only covers contracts below a certain value. Ours is above it!",
          "sub": "Giấy chỉ cho ký hợp đồng dưới một mức giá trị. Hợp đồng mình cao hơn mức đó!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Really? I'll message them right now.",
          "sub": "Thật à? Anh nhắn bên bán ngay.",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Legal usually asks through sales, who hold the relationship, not the partner directly.",
          "sub": "Pháp chế thường không liên hệ thẳng đối tác, mà hỏi qua phòng kinh doanh, người đang giữ quan hệ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "You haven't read a power of attorney until you've read its maximum value.",
          "sub": "Đọc đến dòng giá trị tối đa mới gọi là đọc giấy uỷ quyền.",
          "keys": [
            "dòng giá trị tối đa"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p18,p19,p20"
    },
    {
      "id": "s08",
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
              "f-msg",
              "f-msg2"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-msg",
            "t": "text",
            "text": "Câu hỏi ngắn, nói rõ vì sao:",
            "x": 60,
            "y": 1650,
            "size": 42,
            "at": "l1:please",
            "hl": [
              {
                "text": "vì sao",
                "at": "l2:why"
              }
            ]
          },
          {
            "id": "f-msg2",
            "t": "text",
            "text": "“Gửi bản chụp giấy uỷ quyền,",
            "x": 60,
            "y": 1715,
            "size": 36,
            "at": "l1:copy"
          },
          {
            "id": "f-msg3",
            "t": "text",
            "text": "phạm vi, thời hạn, làm phụ lục.”",
            "x": 60,
            "y": 1770,
            "size": 36,
            "at": "l1:annex",
            "hl": [
              {
                "text": "phụ lục",
                "at": "l1:annex"
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
          "say": "Dũng, please ask the seller for a copy of the signer's authorisation, with scope and term, so we can attach it as an annex.",
          "sub": "Anh Dũng nhờ bên bán gửi bản chụp giấy uỷ quyền của người ký, có phạm vi và thời hạn, để mình đính kèm làm phụ lục ạ.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Short, specific, and it says why. Partners answer that kind of message fast.",
          "sub": "Ngắn, rõ giấy gì, nói vì sao cần. Kiểu tin nhắn này đối tác trả lời nhanh.",
          "keys": [
            "nói vì sao cần"
          ]
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Lỡ ký với người vượt quyền thì sao?",
        "illus": "broken-chain"
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
          "say": "What if someone had signed beyond their authority?",
          "sub": "Lỡ ký với người vượt quyền thì chuyện gì xảy ra?",
          "keys": [
            "vượt quyền"
          ]
        }
      ],
      "ref": "p16"
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
            "text": "⑤ 16:00 · Vượt quyền thì sao?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:four"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1210,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone"
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
                "mobile-phone",
                "balance-scale"
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
            "at": "l1:calls",
            "caption": "16:00 · Bác Bình gọi lại",
            "icon": "mobile-phone"
          },
          {
            "id": "g-143",
            "t": "text",
            "text": "Điều 143: phần vượt",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:excess"
          },
          {
            "id": "g-143b",
            "t": "text",
            "text": "→ không ràng buộc công ty",
            "x": 2068,
            "y": 1335,
            "size": 46,
            "at": "l2:bind",
            "color": "coral",
            "hl": [
              {
                "text": "không ràng buộc",
                "at": "l2:bind"
              }
            ]
          },
          {
            "id": "g-ex",
            "t": "text",
            "text": "trừ: đồng ý, biết mà im, lỗi",
            "x": 2068,
            "y": 1410,
            "size": 38,
            "at": "l3:unless",
            "color": "muted"
          },
          {
            "id": "g-own",
            "t": "text",
            "text": "Người ký tự chịu phần vượt",
            "x": 2028,
            "y": 1490,
            "size": 44,
            "at": "l4:personally"
          },
          {
            "id": "g-own2",
            "t": "text",
            "text": "trừ khi bên kia biết mà ký",
            "x": 2068,
            "y": 1555,
            "size": 38,
            "at": "l4:knew",
            "color": "muted"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Bộ luật Dân sự 2015, Điều 142, 143",
            "x": 2028,
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
          "say": "Four p.m. Uncle Bình calls, a veteran lawyer and an old friend of Cô Hoa.",
          "sub": "Bốn giờ. Bác Bình gọi lại, luật sư lâu năm, người quen của Cô Hoa.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Article one forty-three: a deal beyond the scope does not bind the company for the excess part.",
          "sub": "Điều 143: giao dịch vượt phạm vi đại diện không ràng buộc công ty đối với phần vượt.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Unless the company agreed, knew and did not object in time, or was at fault.",
          "sub": "Trừ khi công ty đồng ý, biết mà không phản đối trong thời gian hợp lý, hoặc có lỗi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then the signer must perform the excess personally, unless the other side knew or should have known.",
          "sub": "Khi đó người ký tự thực hiện phần vượt với bên kia, trừ khi bên kia biết hoặc phải biết mà vẫn giao dịch."
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
      "id": "s11",
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
            "at": "l1",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
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
            "id": "g-can",
            "t": "text",
            "text": "Bên giao dịch: huỷ + đòi bồi thường",
            "x": 2028,
            "y": 1635,
            "size": 40,
            "at": "l1:cancel",
            "hl": [
              {
                "text": "đòi bồi thường",
                "at": "l1:damages"
              }
            ]
          },
          {
            "id": "g-lose",
            "t": "text",
            "text": "Mất quyền nếu biết mà vẫn ký",
            "x": 2028,
            "y": 1700,
            "size": 44,
            "at": "l2:loses",
            "color": "coral",
            "hl": [
              {
                "text": "biết mà vẫn ký",
                "at": "l2:still"
              }
            ]
          },
          {
            "id": "g-142",
            "t": "text",
            "text": "Điều 142: không có quyền, tương tự",
            "x": 2848,
            "y": 1750,
            "size": 38,
            "at": "l2:no authority"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Đã cầm giấy → khó nói “không biết”",
            "x": 2028,
            "y": 1752,
            "size": 40,
            "at": "l3:know",
            "color": "accent",
            "hl": [
              {
                "text": "không biết",
                "at": "l3:know"
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
          "say": "The other side may cancel the excess or the whole deal, and claim damages.",
          "sub": "Bên giao dịch được đơn phương chấm dứt hoặc huỷ phần vượt hay toàn bộ, và đòi bồi thường."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "But it loses that right if it knew, or should have known, and still signed. Article one forty-two is similar when there's no authority at all.",
          "sub": "Nhưng mất quyền ấy nếu biết hoặc phải biết mà vẫn ký. Điều 142 tương tự cho người không có quyền đại diện.",
          "keys": [
            "biết hoặc phải biết mà vẫn ký"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In plain words: once legal has the paper in hand, it's hard to say we didn't know.",
          "sub": "Nói nôm na: pháp chế đã được đưa giấy uỷ quyền mà không đọc thì khó nói mình “không biết”.",
          "keys": [
            "khó nói mình “không biết”"
          ]
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Tư · 17:00 · Dũng ghé bàn",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Ký trước, giấy uỷ quyền bổ sung sau",
          "why": "Quyền ký thành câu hỏi mở, và bên mình đã biết thiếu giấy mà vẫn ký.",
          "rule": "Giấy uỷ quyền đến trước, chữ ký đến sau"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The new power of attorney comes after signing. Let's just sign!",
          "sub": "Giấy uỷ quyền mới gửi sau khi ký. Cứ ký trước cho kịp!",
          "pose": "thumb",
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
          "say": "Then authority is an open question, and we knew the paper was missing.",
          "sub": "Vậy quyền ký thành câu hỏi mở, mà mình biết thiếu giấy vẫn ký.",
          "keys": [
            "biết thiếu giấy vẫn ký"
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
          "say": "Okay. I ask for a scan before signing, or their legal representative signs.",
          "sub": "Ok. Anh xin bản chụp trước giờ ký, hoặc để người đại diện theo pháp luật ký.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Maybe a few hours late, but authority is proven before any money moves.",
          "sub": "Chậm vài giờ, nhưng quyền ký được chứng minh trước khi chuyển tiền.",
          "phase": "redo",
          "keys": [
            "trước khi chuyển tiền"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p21,p22"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Năm 9:00 · Giấy mới",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday"
          },
          {
            "id": "h-b0",
            "t": "badge",
            "n": 1,
            "x": 4026,
            "y": 1290,
            "at": "l2:copy"
          },
          {
            "id": "h-s0",
            "t": "text",
            "text": "Xin bản chụp giấy uỷ quyền",
            "x": 4076,
            "y": 1265,
            "size": 42,
            "at": "l2:copy+200"
          },
          {
            "id": "h-b1",
            "t": "badge",
            "n": 2,
            "x": 4026,
            "y": 1375,
            "at": "l2:director"
          },
          {
            "id": "h-s1",
            "t": "text",
            "text": "Người uỷ quyền = ĐDTPL?",
            "x": 4076,
            "y": 1350,
            "size": 42,
            "at": "l2:director+200"
          },
          {
            "id": "h-b2",
            "t": "badge",
            "n": 3,
            "x": 4026,
            "y": 1460,
            "at": "l3:scope"
          },
          {
            "id": "h-s2",
            "t": "text",
            "text": "Phạm vi: mua bán hàng hoá",
            "x": 4076,
            "y": 1435,
            "size": 42,
            "at": "l3:scope+200"
          },
          {
            "id": "h-b3",
            "t": "badge",
            "n": 4,
            "x": 4026,
            "y": 1545,
            "at": "l3:compare"
          },
          {
            "id": "h-s3",
            "t": "text",
            "text": "So giá trị với mức tối đa",
            "x": 4076,
            "y": 1520,
            "size": 42,
            "at": "l3:compare+200",
            "color": "coral"
          },
          {
            "id": "h-b4",
            "t": "badge",
            "n": 5,
            "x": 4026,
            "y": 1630,
            "at": "l4:term"
          },
          {
            "id": "h-s4",
            "t": "text",
            "text": "Thời hạn → ghi số, ngày giấy",
            "x": 4076,
            "y": 1605,
            "size": 42,
            "at": "l4:term+200"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Ai uỷ quyền, uỷ cho ai,",
            "x": 4916,
            "y": 1290,
            "size": 48,
            "at": "l5:who",
            "color": "accent"
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "việc gì, bao nhiêu,",
            "x": 4916,
            "y": 1360,
            "size": 48,
            "at": "l5:what"
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "đến bao giờ",
            "x": 4916,
            "y": 1430,
            "size": 48,
            "at": "l5:until",
            "color": "accent",
            "hl": [
              {
                "text": "đến bao giờ",
                "at": "l5:until"
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
          "say": "Thursday, nine a.m. A new power of attorney arrives, now for their deputy director.",
          "sub": "Thứ Năm, chín giờ. Giấy uỷ quyền mới đến, lần này cho phó giám đốc bên bán."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Step one, the copy. Step two, the grantor is the director, the legal representative in the register.",
          "sub": "Bước một, bản chụp. Bước hai, người uỷ quyền là giám đốc, trùng người đại diện theo pháp luật trong đăng ký.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Three, scope: sign sale of goods contracts, with a maximum. Four, compare our value with it.",
          "sub": "Ba, phạm vi: ký hợp đồng mua bán hàng hoá, có ghi giá trị tối đa. Bốn, so giá trị hợp đồng với mức đó."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Five, the term runs past signing day. I note its number and date in the parties block.",
          "sub": "Năm, thời hạn còn sau ngày ký. Em ghi số, ngày của giấy vào phần thông tin các bên.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Who grants, to whom, for what, how much, until when.",
          "sub": "Ai uỷ quyền, uỷ cho ai, việc gì, bao nhiêu, đến bao giờ.",
          "keys": [
            "đến bao giờ"
          ]
        }
      ],
      "ref": "p10,p11"
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
          },
          {
            "at": "l1",
            "fit": [
              "h-bf",
              "h-af"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "H",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "h-bf",
            "t": "text",
            "text": "Trước: “Ông [ ] – Phó Giám đốc”",
            "x": 4916,
            "y": 1530,
            "size": 38,
            "at": "l1:Before",
            "color": "muted"
          },
          {
            "id": "h-bfx",
            "t": "strike",
            "over": "h-bf",
            "at": "l2:After"
          },
          {
            "id": "h-af",
            "t": "text",
            "text": "Sau: + theo Giấy uỷ quyền số [ ],",
            "x": 4916,
            "y": 1600,
            "size": 36,
            "at": "l2:After",
            "color": "accent"
          },
          {
            "id": "h-af2",
            "t": "text",
            "text": "ngày [ ], phạm vi [ ], hạn [ ]",
            "x": 4916,
            "y": 1655,
            "size": 36,
            "at": "l2:scope"
          },
          {
            "id": "h-af3",
            "t": "text",
            "text": "+ bản sao là phụ lục",
            "x": 4916,
            "y": 1710,
            "size": 40,
            "at": "l2:annex",
            "hl": [
              {
                "text": "phụ lục",
                "at": "l2:annex"
              }
            ]
          },
          {
            "id": "h-key",
            "t": "text",
            "text": "Ghi nguồn quyền cạnh tên người ký",
            "x": 3996,
            "y": 1730,
            "size": 40,
            "at": "l4:source",
            "color": "accent",
            "hl": [
              {
                "text": "nguồn quyền",
                "at": "l4:source"
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
          "say": "Before: Mister blank, deputy director. That's all.",
          "sub": "Trước: “Đại diện: Ông [ ] – Phó Giám đốc.” Hết."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: under power of attorney number, date, from the director, with scope and term. A copy is an annex.",
          "sub": "Sau: thêm “theo Giấy uỷ quyền số [ ] ngày [ ] của Giám đốc [ ], phạm vi [ ], thời hạn đến [ ]; bản sao là phụ lục”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Write the source of authority right next to the signer's name.",
          "sub": "Ghi nguồn quyền ngay cạnh tên người ký.",
          "keys": [
            "nguồn quyền"
          ]
        }
      ],
      "ref": "p12,p13"
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
            "text": "⑦ 11:00 · Cần cấp trên duyệt?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:eleven"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1210,
            "w": 800,
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
                  "side": "right"
                }
              ],
              "props": [
                "bar-chart",
                "busts-in-silhouette"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:Cô Hoa",
            "caption": "11:00 · phòng Cô Hoa",
            "icon": "busts-in-silhouette"
          },
          {
            "id": "i-35",
            "t": "text",
            "text": "Công ty cổ phần:",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l3:joint stock"
          },
          {
            "id": "i-35b",
            "t": "text",
            "text": "từ 35% tổng tài sản",
            "x": 5964,
            "y": 1335,
            "size": 56,
            "at": "l3:thirty-five",
            "color": "coral",
            "hl": [
              {
                "text": "35%",
                "at": "l3:thirty-five"
              }
            ]
          },
          {
            "id": "i-35c",
            "t": "text",
            "text": "→ Đại hội đồng cổ đông",
            "x": 6004,
            "y": 1420,
            "size": 44,
            "at": "l3:shareholders"
          },
          {
            "id": "i-hd",
            "t": "text",
            "text": "HĐQT: nhiều hợp đồng lớn",
            "x": 5964,
            "y": 1500,
            "size": 42,
            "at": "l4:board"
          },
          {
            "id": "i-167",
            "t": "text",
            "text": "Điều 167: người có liên quan",
            "x": 5964,
            "y": 1580,
            "size": 42,
            "at": "l5:related"
          },
          {
            "id": "i-167b",
            "t": "text",
            "text": "→ ký sai có thể vô hiệu",
            "x": 6004,
            "y": 1645,
            "size": 40,
            "at": "l5:void",
            "color": "coral",
            "hl": [
              {
                "text": "vô hiệu",
                "at": "l5:void"
              }
            ]
          },
          {
            "id": "i-25",
            "t": "text",
            "text": "Luật sửa 2025: kiểm điều lệ",
            "x": 5964,
            "y": 1720,
            "size": 38,
            "at": "l6:twenty twenty-five",
            "color": "accent"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Luật Doanh nghiệp 2020, khoản 2 Điều 138, Điều 167 · các bài phân tích công khai",
            "x": 5964,
            "y": 1810,
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
          "say": "Eleven a.m. Cô Hoa, head of legal, asks the big question.",
          "sub": "Mười một giờ. Cô Hoa, trưởng phòng pháp chế, hỏi câu hỏi lớn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Big deal for them? Did their board or shareholders have to approve it?",
          "sub": "Hợp đồng lớn với họ không? Có cần Hội đồng quản trị hay cổ đông bên ấy chấp thuận không em?",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For a joint stock company, deals from thirty-five percent of total assets go to the shareholders' meeting, unless the charter differs.",
          "sub": "Với công ty cổ phần, khoản 2 Điều 138 Luật Doanh nghiệp: đầu tư, bán tài sản từ 35% tổng giá trị tài sản trở lên do Đại hội đồng cổ đông quyết, trừ khi điều lệ khác.",
          "keys": [
            "35% tổng giá trị tài sản"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Public analyses add: the board passes many large contracts.",
          "sub": "Theo các bài phân tích, Hội đồng quản trị thông qua nhiều hợp đồng giá trị lớn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Deals with related parties, like a major shareholder, need approval under Article one sixty-seven, or a court may void them.",
          "sub": "Hợp đồng với người có liên quan, như cổ đông lớn, cần chấp thuận theo Điều 167; ký sai, Toà án có thể tuyên vô hiệu.",
          "keys": [
            "người có liên quan"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Other company types differ, and the law changed in twenty twenty-five. Check the charter first.",
          "sub": "Loại hình khác có ngưỡng khác, luật đã sửa năm 2025: kiểm điều lệ, văn bản hiện hành trước."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p14,p15"
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
            "text": "⑧ Thứ Năm 14:00 · Ký",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:signature"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1210,
            "w": 800,
            "data": {
              "set": "meeting",
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
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "paperclip",
                "handshake"
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
                  "shot": "E-SHOT-06",
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
            "at": "l1:signature",
            "caption": "Thứ Năm · 14:00 · cùng trang ký",
            "icon": "handshake"
          },
          {
            "id": "j-pg",
            "t": "box",
            "x": 7932,
            "y": 1260,
            "w": 700,
            "h": 300,
            "at": "l2:Same",
            "stroke": 5
          },
          {
            "id": "j-red",
            "t": "text",
            "text": "DẤU ĐỎ",
            "x": 7972,
            "y": 1290,
            "size": 56,
            "at": "l2:seal",
            "color": "coral"
          },
          {
            "id": "j-poa",
            "t": "text",
            "text": "+ giấy uỷ quyền (phụ lục)",
            "x": 7972,
            "y": 1390,
            "size": 44,
            "at": "l2:clipped",
            "color": "accent",
            "hl": [
              {
                "text": "giấy uỷ quyền",
                "at": "l2:clipped"
              }
            ]
          },
          {
            "id": "j-clip",
            "t": "illus",
            "name": "paperclip",
            "x": 8492,
            "y": 1450,
            "size": 100,
            "at": "l2:clipped"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Danh có chính",
            "x": 7932,
            "y": 1630,
            "size": 50,
            "at": "l4:proper",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "thì ngôn mới thuận”",
            "x": 7932,
            "y": 1700,
            "size": 50,
            "at": "l4:words",
            "color": "accent",
            "hl": [
              {
                "text": "ngôn mới thuận",
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
          "say": "Thursday, two p.m. The same signature page from Wednesday morning.",
          "sub": "Thứ Năm, hai giờ chiều. Vẫn trang ký sáng thứ Tư."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Same red seal. But now the power of attorney is clipped behind it, as an annex.",
          "sub": "Vẫn dấu đỏ ấy. Nhưng giờ giấy uỷ quyền kẹp phía sau, làm phụ lục.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Okay, the seal is still pretty. But the paper does the real work.",
          "sub": "Ừ, con dấu vẫn đẹp. Nhưng tờ giấy mới là thứ gánh việc.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A proper name makes proper words. A proper signer makes a contract that holds.",
          "sub": "“Danh có chính thì ngôn mới thuận.” Người ký có quyền, hợp đồng mới đứng vững.",
          "keys": [
            "Danh có chính thì ngôn mới thuận"
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
      "ref": "p4,p13"
    },
    {
      "id": "s17",
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
            "at": "l1:title",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:maximum",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:first",
            "fit": "H",
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
            "x": 7524,
            "y": 20,
            "at": "l1:title+900"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1620,
            "y": 1110,
            "at": "l2:maximum+900"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5556,
            "y": 1110,
            "at": "l3:first+900"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Tham khảo, không phải tư vấn vụ việc cụ thể. Nhân vật minh hoạ. Luật Doanh nghiệp đã sửa; đối chiếu văn bản mới nhất.",
            "x": 3996,
            "y": 640,
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
          "say": "So: a seal or a title is not enough. Find the legal representative, or the authorisation.",
          "sub": "Tóm lại: dấu đỏ hay chức danh chưa đủ. Tìm người đại diện theo pháp luật, hoặc giấy uỷ quyền.",
          "keys": [
            "chưa đủ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read the power of attorney down to its maximum value and its term.",
          "sub": "Đọc giấy uỷ quyền tới dòng giá trị tối đa và thời hạn.",
          "keys": [
            "giá trị tối đa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The authorisation comes first, the signature after, and its source sits next to the name.",
          "sub": "Giấy uỷ quyền đến trước, chữ ký đến sau, và nguồn quyền ghi ngay cạnh tên.",
          "keys": [
            "Giấy uỷ quyền đến trước"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s18",
      "module": "QUIZ-01",
      "data": {
        "q": "The seller promises to send the authorisation after signing, what is the safer choice?",
        "options": [
          "Report the risk and ask for a scanned copy by email before signing",
          "Sign now and forget about the document because it is only paperwork",
          "Cancel the whole deal at once without telling the sales team why"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "page-with-curl",
        "why": "Báo rủi ro một dòng và xin bản chụp qua email trước giờ ký: quyền ký được chứng minh trước khi chuyển tiền."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The seller promises to send the authorisation after signing, what is the safer choice?",
          "sub": "Bên bán hứa gửi giấy uỷ quyền sau khi ký, lựa chọn nào an toàn hơn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Report the risk and get the scanned copy before signing.",
          "sub": "Báo rủi ro và xin bản chụp trước giờ ký."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Paper first, signature after.",
          "sub": "Giấy đến trước, chữ ký đến sau."
        }
      ],
      "ref": "questions[34]"
    },
    {
      "id": "s19",
      "module": "END-05",
      "data": {
        "text": "Giấy đến trước, chữ ký đến sau",
        "sub": "Bài sau: hợp đồng giao kết từ lúc nào?"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Do it now: for the contract on your desk, write each signer, their source of authority, and its term.",
          "sub": "Việc làm ngay: với hợp đồng trên bàn, ghi người ký mỗi bên, nguồn quyền ký và thời hạn.",
          "keys": [
            "nguồn quyền ký"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next: when is a contract formed, the quote, the order, or the signature? Now, the forty questions below.",
          "sub": "Bài sau: hợp đồng giao kết từ lúc nào, báo giá, đơn hàng hay chữ ký? Giờ thử bốn mươi câu hỏi bên dưới nhé."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "General professional knowledge, not advice for a specific case. Check the latest texts.",
          "sub": "Kiến thức nghề tham khảo, không phải tư vấn cho vụ việc cụ thể. Đối chiếu văn bản mới nhất."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi law-contract-first-review, bài 1) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): trang ký có dấu đỏ tròn (cận rồi kéo ra thấy Dũng, Thảo) → trở lại ở ô J, kẹp giấy uỷ quyền làm phụ lục. Dòng thời gian: HAI NGÀY TRƯỚC BUỔI KÝ hợp đồng mua vật tư (thứ Tư 8:00 trang ký p3 → 9:00 pháp nhân p1, p2 → 10:00 người đại diện p5, p6 → 14:00 giấy uỷ quyền cần gì p7–p9 → 15:00 giấy của trưởng phòng kinh doanh bên bán vượt mức p18–p20 → 16:00 Bác Bình gọi: Điều 142, 143 p16, p17 → 17:00 “Khoan đã!” ký trước giấy sau p21, p22 → thứ Năm 9:00 giấy mới cho phó giám đốc, làm mẫu p10, p11 + trước–sau p12, p13 → 11:00 Cô Hoa: 35%, Điều 167 p14, p15 → 14:00 ký, khép vòng). Nhân vật theo w145/_series/law-contract-first-review.md: Thảo (chính), Dũng (kinh doanh), Bác Bình (luật sư bên ngoài), Cô Hoa. Không nêu tên hãng luật (“các bài phân tích công khai”). Điều luật chỉ từ bài: BLDS Điều 86, 137, 138, 140 (01 năm), 141 (khoản 4), 142, 143; LDN 2020 khoản 2 Điều 138 (35%), Điều 167, sửa 2025. Cảnh ngắt nhịp: BRK-04 s03 (dấu đỏ p3), BRK-07 s09, DLG s12. Câu trích “Danh có chính thì ngôn mới thuận” mở/khép vòng. Câu đố questions[34]. Lưu ý chung (#133) ở tóm tắt + END.",
  "loop": {
    "open": "s01",
    "close": "s16"
  }
};
