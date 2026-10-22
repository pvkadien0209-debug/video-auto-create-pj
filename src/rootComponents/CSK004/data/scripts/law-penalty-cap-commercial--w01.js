// law-penalty-cap-commercial--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "law-penalty-cap-commercial--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "law-contract-remedies",
    "slug": "law-penalty-cap-commercial",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Phạt vi phạm trong hợp đồng thương mại được đặt tối đa bao nhiêu?",
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
            "fit": "A",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "a-q",
            "t": "text",
            "text": "Trần 8%: tính trên cái gì?",
            "x": 60,
            "y": 40,
            "size": 64,
            "at": "l2:eight",
            "hl": [
              {
                "text": "cái gì",
                "at": "l2:what"
              }
            ]
          },
          {
            "id": "a-b1",
            "t": "box",
            "x": 60,
            "y": 160,
            "w": 700,
            "h": 130,
            "at": "l3:whole",
            "stroke": 6
          },
          {
            "id": "a-all",
            "t": "text",
            "text": "Cả hợp đồng?",
            "x": 110,
            "y": 170,
            "size": 84,
            "at": "l3:whole+200"
          },
          {
            "id": "a-b2",
            "t": "box",
            "x": 60,
            "y": 320,
            "w": 700,
            "h": 130,
            "at": "l3:batch",
            "stroke": 6
          },
          {
            "id": "a-one",
            "t": "text",
            "text": "Đợt bị chậm?",
            "x": 110,
            "y": 330,
            "size": 84,
            "at": "l3:batch+200",
            "color": "accent"
          },
          {
            "id": "a-allx",
            "t": "strike",
            "over": "a-all",
            "at": "l4:answer"
          },
          {
            "id": "a-ring",
            "t": "ring",
            "around": [
              "a-one"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l4:late batch"
          },
          {
            "id": "a-part",
            "t": "text",
            "text": "phần nghĩa vụ bị vi phạm",
            "x": 60,
            "y": 490,
            "size": 52,
            "at": "l5:part",
            "color": "accent",
            "hl": [
              {
                "text": "bị vi phạm",
                "at": "l5:breached"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Luật Thương mại 2005, Điều 301 · đang được sửa đổi, kiểm lại sau kỳ họp",
            "x": 60,
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
          "say": "You're in-house counsel. One delivery out of three arrives late.",
          "sub": "Bạn làm pháp chế. Hợp đồng ba đợt, một đợt giao chậm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Quick guess. The eight percent penalty cap counts on what?",
          "sub": "Đoán nhanh: trần phạt 8% tính trên cái gì?",
          "keys": [
            "tính trên cái gì"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The whole contract? Or just the late batch?",
          "sub": "Cả hợp đồng? Hay chỉ đợt bị chậm?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The answer: usually the late batch.",
          "sub": "Đáp án: thường là đợt bị chậm.",
          "keys": [
            "đợt bị chậm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The law says: the value of the part breached.",
          "sub": "Luật ghi: giá trị phần nghĩa vụ hợp đồng bị vi phạm.",
          "keys": [
            "phần nghĩa vụ hợp đồng bị vi phạm"
          ]
        }
      ],
      "ref": "intro,p4"
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
                  "id": "dung",
                  "side": "right",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "package",
                "abacus"
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
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "8:30 thứ Ba · phòng pháp chế",
            "icon": "abacus"
          },
          {
            "id": "a-greed",
            "t": "text",
            "text": "Tham thì thâm",
            "x": 60,
            "y": 600,
            "size": 60,
            "at": "l5:greed",
            "color": "coral",
            "hl": [
              {
                "text": "Tham thì thâm",
                "at": "l5:greed"
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
          "say": "Meet Thảo. Four years in legal, and today, a calculator on her desk.",
          "sub": "Đây là Thảo. Pháp chế bốn năm, hôm nay trên bàn có thêm cái máy tính."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Dũng, her desk mate. Five years in legal, very fast fingers.",
          "sub": "Còn đây là Dũng, ngồi cạnh, pháp chế năm năm, tay nhanh hơn não."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "The new supply contract needs a penalty. Write it big!",
          "sub": "Mẫu hợp đồng cung cấp mới cần điều phạt. Cứ ghi thật cao vào!",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Let me check on paper first.",
          "sub": "Để em tính trên giấy đã.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The proverb warns: greed bites back. Today, we see why.",
          "sub": "Tục ngữ có câu: tham thì thâm. Hôm nay xem vì sao.",
          "keys": [
            "tham thì thâm"
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
            "text": "Phạt tối đa bao nhiêu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:how high",
            "hl": [
              {
                "text": "tối đa",
                "at": "l1:how high"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không chỉ: con số bao nhiêu",
            "x": 2028,
            "y": 150,
            "size": 46,
            "at": "l2:not",
            "color": "muted"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà: tính ra được tiền",
            "x": 2788,
            "y": 150,
            "size": 50,
            "at": "l2:money",
            "color": "accent",
            "hl": [
              {
                "text": "tính ra được tiền",
                "at": "l2:money"
              }
            ]
          },
          {
            "id": "b-300",
            "t": "text",
            "text": "Điều 300: có thoả thuận mới phạt",
            "x": 2028,
            "y": 250,
            "size": 46,
            "at": "l3:agrees",
            "hl": [
              {
                "text": "có thoả thuận",
                "at": "l3:agrees"
              }
            ]
          },
          {
            "id": "b-294",
            "t": "text",
            "text": "trừ miễn trách (Điều 294)",
            "x": 2058,
            "y": 315,
            "size": 40,
            "at": "l3:exemption",
            "color": "muted"
          },
          {
            "id": "b-301",
            "t": "text",
            "text": "Điều 301: không quá 8%",
            "x": 2028,
            "y": 400,
            "size": 56,
            "at": "l4:eight",
            "color": "accent",
            "hl": [
              {
                "text": "không quá 8%",
                "at": "l4:eight"
              }
            ]
          },
          {
            "id": "b-301b",
            "t": "text",
            "text": "một hoặc tổng nhiều vi phạm",
            "x": 2058,
            "y": 475,
            "size": 38,
            "at": "l4:total"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Luật Thương mại 2005, Điều 294, 300, 301",
            "x": 2028,
            "y": 540,
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
          "say": "So the real question: how high can a penalty go?",
          "sub": "Vậy câu hỏi thật: phạt vi phạm được đặt tối đa bao nhiêu?",
          "keys": [
            "tối đa bao nhiêu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not just a number. A clause you can turn into money.",
          "sub": "Không chỉ một con số. Mà một điều khoản tính ra được tiền.",
          "keys": [
            "tính ra được tiền"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article three hundred: a penalty only if the contract agrees one, unless an exemption applies.",
          "sub": "Điều 300: chỉ phạt khi hợp đồng có thoả thuận, trừ các trường hợp miễn trách ở Điều 294.",
          "keys": [
            "có thoả thuận"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article three oh one: no more than eight percent, for one breach or the total of many.",
          "sub": "Điều 301: không quá 8%, cho một vi phạm hoặc tổng mức phạt nhiều vi phạm.",
          "keys": [
            "không quá 8%"
          ]
        }
      ],
      "ref": "p1,p2"
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
              "b-266",
              "b-266b"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l2:end",
            "fit": "B",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "b-ex",
            "t": "box",
            "x": 2028,
            "y": 580,
            "w": 1600,
            "h": 160,
            "at": "l1:exception",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "b-266",
            "t": "text",
            "text": "Ngoại lệ: Điều 266, giám định",
            "x": 2058,
            "y": 595,
            "size": 48,
            "at": "l1:inspection",
            "color": "coral",
            "hl": [
              {
                "text": "Điều 266",
                "at": "l1:two six six"
              }
            ]
          },
          {
            "id": "b-266b",
            "t": "text",
            "text": "tới mười lần thù lao dịch vụ",
            "x": 2058,
            "y": 665,
            "size": 44,
            "at": "l2:ten times",
            "hl": [
              {
                "text": "mười lần thù lao",
                "at": "l2:ten times"
              }
            ]
          },
          {
            "id": "b-src2",
            "t": "text",
            "text": "theo các bài phân tích công khai",
            "x": 3068,
            "y": 690,
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
          "say": "One exception the article names: Article two six six, inspection services.",
          "sub": "Ngoại lệ Điều 301 nêu: Điều 266, trách nhiệm của thương nhân kinh doanh dịch vụ giám định."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "There, analysts say, the penalty can reach ten times the service fee.",
          "sub": "Ở đó, theo các bài phân tích, mức phạt có thể tới mười lần thù lao dịch vụ.",
          "keys": [
            "mười lần thù lao"
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
            "text": "① 9:00 · Ghi 10% cho sợ?",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
                "money-bag"
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
            "at": "l1:Hoa",
            "caption": "9:00 · phòng họp",
            "icon": "money-bag"
          },
          {
            "id": "c-10",
            "t": "text",
            "text": "Ghi 10%",
            "x": 3996,
            "y": 170,
            "size": 64,
            "at": "l2:ten"
          },
          {
            "id": "c-ar",
            "t": "arrow",
            "from": [
              4266,
              210
            ],
            "to": [
              4436,
              210
            ],
            "at": "l4:back",
            "stroke": 6
          },
          {
            "id": "c-8",
            "t": "text",
            "text": "8%",
            "x": 4476,
            "y": 170,
            "size": 64,
            "at": "l4:back",
            "color": "accent",
            "hl": [
              {
                "text": "8%",
                "at": "l4:eight"
              }
            ]
          },
          {
            "id": "c-void",
            "t": "text",
            "text": "Mất trắng điều phạt?",
            "x": 3996,
            "y": 290,
            "size": 46,
            "at": "l3:lose",
            "color": "muted"
          },
          {
            "id": "c-voidx",
            "t": "strike",
            "over": "c-void",
            "at": "l4:usually"
          },
          {
            "id": "c-cut",
            "t": "text",
            "text": "Chỉ bỏ phần vượt",
            "x": 3996,
            "y": 370,
            "size": 56,
            "at": "l4:above",
            "color": "accent",
            "hl": [
              {
                "text": "phần vượt",
                "at": "l4:above"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Theo các bài phân tích công khai về thực tiễn xét xử",
            "x": 3996,
            "y": 450,
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
          "say": "Stop one, nine o'clock. Meet Cô Hoa, head of legal, with a bold idea.",
          "sub": "Chặng một, chín giờ. Đây là Cô Hoa, trưởng phòng pháp chế, đang có một ý tưởng táo bạo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Write ten percent. Scare them a little. Okay!",
          "sub": "Ghi hẳn 10% cho họ sợ. Rồi, vậy nha!",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Cô, then do we lose the whole clause?",
          "sub": "Cô ơi, vậy có mất trắng cả điều phạt không ạ?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Usually not. Dispute bodies only refuse the part above the cap. Ten comes back to eight.",
          "sub": "Thường không. Cơ quan giải quyết tranh chấp chỉ không công nhận phần vượt. Mười bị đưa về tám.",
          "keys": [
            "phần vượt"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s05",
      "module": "BRK-12",
      "data": {
        "word": "8% của gì?",
        "sub": "Hỏi “của gì” trước khi hỏi “có đủ không”",
        "from": [
          620,
          360
        ],
        "others": [
          "10%",
          "Điều 301",
          "phần vượt"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Eight percent of what?",
          "sub": "Tám phần trăm của cái gì?",
          "keys": [
            "của cái gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Ask that before asking if it's enough.",
          "sub": "Hỏi câu đó trước khi hỏi có đủ không."
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
          },
          {
            "at": 150,
            "fit": "D",
            "ms": 900
          },
          {
            "at": "l3",
            "fit": [
              "d-b2",
              "d-ar"
            ],
            "zoom": 1.1,
            "ms": 800
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
            "text": "② 10:00 · 8% của cái gì?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:ten"
          },
          {
            "id": "d-b0",
            "t": "box",
            "x": 5964,
            "y": 170,
            "w": 340,
            "h": 150,
            "at": "l2:three+0",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "d-bt0",
            "t": "text",
            "text": "Đợt 1",
            "x": 6024,
            "y": 200,
            "size": 60,
            "at": "l2:three+200",
            "color": "ink"
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 6344,
            "y": 170,
            "w": 340,
            "h": 150,
            "at": "l2:three+300",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "d-bt1",
            "t": "text",
            "text": "Đợt 2",
            "x": 6404,
            "y": 200,
            "size": 60,
            "at": "l2:three+500",
            "color": "coral"
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 6724,
            "y": 170,
            "w": 340,
            "h": 150,
            "at": "l2:three+600",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "d-bt2",
            "t": "text",
            "text": "Đợt 3",
            "x": 6784,
            "y": 200,
            "size": 60,
            "at": "l2:three+800",
            "color": "ink"
          },
          {
            "id": "d-ar",
            "t": "arrow",
            "from": [
              6514,
              440
            ],
            "to": [
              6514,
              330
            ],
            "at": "l3:only",
            "stroke": 6,
            "color": "coral"
          },
          {
            "id": "d-base",
            "t": "text",
            "text": "Cơ sở tính: giá trị đợt hai",
            "x": 6284,
            "y": 450,
            "size": 46,
            "at": "l3:value",
            "color": "accent",
            "hl": [
              {
                "text": "giá trị đợt hai",
                "at": "l3:value"
              }
            ]
          },
          {
            "id": "d-wrong",
            "t": "text",
            "text": "“8% giá trị hợp đồng”",
            "x": 5964,
            "y": 540,
            "size": 40,
            "at": "l4:whole",
            "color": "muted"
          },
          {
            "id": "d-risk",
            "t": "text",
            "text": "→ dễ bị tranh cãi",
            "x": 5964,
            "y": 600,
            "size": 46,
            "at": "l4:dispute",
            "color": "coral",
            "hl": [
              {
                "text": "dễ bị tranh cãi",
                "at": "l4:dispute"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Luật Thương mại 2005, Điều 301",
            "x": 5964,
            "y": 680,
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
          "say": "Stop two, ten o'clock. Thảo draws the contract on the board.",
          "sub": "Chặng hai, mười giờ. Thảo vẽ hợp đồng lên bảng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three batches. Only batch two came late.",
          "sub": "Ba đợt giao hàng. Chỉ đợt hai giao chậm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So the base is usually only the value of batch two, not the whole deal.",
          "sub": "Nên cơ sở tính thường chỉ là giá trị đợt hai, không phải cả hợp đồng.",
          "keys": [
            "giá trị đợt hai"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A clause saying eight percent of the whole contract, for any breach, invites a dispute.",
          "sub": "Điều khoản ghi “phạt 8% giá trị hợp đồng” cho mọi vi phạm vì vậy dễ bị tranh cãi.",
          "keys": [
            "dễ bị tranh cãi"
          ]
        }
      ],
      "ref": "p4"
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
            "fit": [
              "d-day",
              "d-capt"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l3",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-day",
            "t": "text",
            "text": "Phạt theo ngày chậm",
            "x": 6804,
            "y": 540,
            "size": 46,
            "at": "l2:daily"
          },
          {
            "id": "d-day2",
            "t": "text",
            "text": "kéo dài → tự vượt trần",
            "x": 6804,
            "y": 600,
            "size": 42,
            "at": "l2:runs",
            "color": "coral"
          },
          {
            "id": "d-capt",
            "t": "text",
            "text": "Cần câu chặn tổng",
            "x": 6804,
            "y": 670,
            "size": 50,
            "at": "l3:total",
            "color": "accent",
            "hl": [
              {
                "text": "chặn tổng",
                "at": "l3:total"
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
          "say": "The cap also covers the total. Many breaches, still eight percent of the breached part.",
          "sub": "Trần áp cả cho tổng: vi phạm nhiều lần, tổng mức phạt vẫn không quá 8% phần bị vi phạm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A daily penalty that runs on and on can climb over the cap by itself.",
          "sub": "Điều phạt theo ngày chậm, nếu việc chậm kéo dài, công thức sẽ tự vượt trần."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So add a sentence capping the total.",
          "sub": "Nên thêm một câu chặn tổng mức phạt.",
          "keys": [
            "chặn tổng mức phạt"
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
            "text": "③ 11:00 · Tính thử, không số thật",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:eleven"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "abacus",
                "memo"
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
            "at": "l1:eleven",
            "caption": "11:00 · bàn Thảo",
            "icon": "abacus"
          },
          {
            "id": "e-s0",
            "t": "text",
            "text": "1. Phần vi phạm: đợt hai",
            "x": 7932,
            "y": 160,
            "size": 42,
            "at": "l3:part",
            "color": "ink"
          },
          {
            "id": "e-s1",
            "t": "text",
            "text": "2. Mức: [ ]% mỗi tuần chậm",
            "x": 7932,
            "y": 235,
            "size": 42,
            "at": "l3:rate",
            "color": "ink"
          },
          {
            "id": "e-s2",
            "t": "text",
            "text": "3. Cộng dồn số tuần",
            "x": 7932,
            "y": 310,
            "size": 42,
            "at": "l4:add",
            "color": "ink"
          },
          {
            "id": "e-s3",
            "t": "text",
            "text": "4. So với 8% đợt hai",
            "x": 7932,
            "y": 385,
            "size": 42,
            "at": "l4:compare",
            "color": "coral"
          },
          {
            "id": "e-s4",
            "t": "text",
            "text": "5. Ghi phép tính vào thư",
            "x": 7932,
            "y": 460,
            "size": 42,
            "at": "l6:letter",
            "color": "ink"
          },
          {
            "id": "e-over",
            "t": "text",
            "text": "phần vượt: không đòi được tên “phạt”",
            "x": 7932,
            "y": 560,
            "size": 36,
            "at": "l5:above",
            "color": "coral"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "kèm điều khoản hợp đồng + Điều 301",
            "x": 7932,
            "y": 620,
            "size": 30,
            "at": "l6:clause",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, eleven o'clock. A practice calculation, no real figures.",
          "sub": "Chặng ba, mười một giờ. Tính thử, không dùng số thật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Batch two is worth blank dong. Let me check on paper first.",
          "sub": "Đợt hai trị giá [ ] đồng. Để em tính trên giấy đã.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Step one, the breached part: batch two. Step two, the agreed rate per week late.",
          "sub": "Bước một: phần bị vi phạm là đợt hai. Bước hai: áp mức thoả thuận [ ]% cho mỗi tuần chậm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Step three, add up the weeks. Step four, compare with eight percent of batch two.",
          "sub": "Bước ba: cộng dồn số tuần chậm. Bước bốn: so tổng với 8% giá trị đợt hai.",
          "keys": [
            "8% giá trị đợt hai"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Anything above can't be claimed as a penalty.",
          "sub": "Phần vượt không đòi được dưới tên tiền phạt."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Step five, put the sums in the claim letter, with the clause and Article three oh one.",
          "sub": "Bước năm: ghi phép tính vào thư đòi phạt, kèm điều khoản hợp đồng và Điều 301."
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
            "fit": [
              "e-flow"
            ],
            "zoom": 1.2,
            "ms": 800
          },
          {
            "at": "l1:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-flow",
            "t": "text",
            "text": "Phần vi phạm → mức → dừng ở trần",
            "x": 7932,
            "y": 690,
            "size": 44,
            "at": "l1:breached",
            "color": "accent",
            "hl": [
              {
                "text": "dừng ở trần",
                "at": "l1:stop"
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
          "say": "From the breached part, through the agreed rate, and stop at the cap.",
          "sub": "Phép tính phạt đi từ phần bị vi phạm, qua mức thoả thuận, rồi dừng ở trần.",
          "keys": [
            "dừng ở trần"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s10",
      "module": "BRK-07",
      "data": {
        "question": "Hợp đồng không phải thương mại thì trần ở đâu?",
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
          "say": "What if the contract isn't commercial at all?",
          "sub": "Nếu hợp đồng không phải thương mại thì trần ở đâu?",
          "keys": [
            "trần ở đâu"
          ]
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
            "text": "④ 12:00 · Dân sự, xây dựng",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:noon"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "hot-beverage",
                "balance-scale"
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
                  "shot": "E-SHOT-10",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:lunch",
            "caption": "12:00 · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "Thương mại hay không?",
            "x": 60,
            "y": 1250,
            "size": 56,
            "at": "l4:commercial",
            "color": "coral",
            "hl": [
              {
                "text": "Thương mại",
                "at": "l4:commercial"
              }
            ]
          },
          {
            "id": "f-ltm",
            "t": "text",
            "text": "Có → thường viện dẫn trần 8%",
            "x": 60,
            "y": 1340,
            "size": 44,
            "at": "l4:Commercial"
          },
          {
            "id": "f-blds",
            "t": "text",
            "text": "Dân sự thuần → theo thoả thuận",
            "x": 60,
            "y": 1410,
            "size": 44,
            "at": "l2:no cap",
            "color": "accent",
            "hl": [
              {
                "text": "theo thoả thuận",
                "at": "l2:agree"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Bộ luật Dân sự 2015, khoản 2 Điều 418",
            "x": 60,
            "y": 1480,
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
          "say": "Stop four, noon. Lunch with Uncle Bình, a veteran lawyer near the office.",
          "sub": "Chặng bốn, mười hai giờ trưa. Ăn trưa với Bác Bình, luật sư hành nghề lâu năm gần công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Easy now. The Civil Code sets no cap. The parties agree, unless another law says otherwise.",
          "sub": "Từ từ, mình xem lại đã. Bộ luật Dân sự không đặt trần: mức phạt do các bên thoả thuận, trừ khi luật liên quan quy định khác.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "So first ask: is this contract commercial?",
          "sub": "Nên câu hỏi then chốt: hợp đồng có thuộc hoạt động thương mại không?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Commercial? The eight percent cap usually gets cited. Purely civil? The agreed rate.",
          "sub": "Thuộc thương mại: thường viện dẫn trần 8%. Dân sự thuần tuý: mức phạt theo thoả thuận.",
          "keys": [
            "theo thoả thuận"
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
            "fit": "F",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": [
              "f-xd",
              "f-split"
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
            "id": "f-ic",
            "t": "illus",
            "name": "building-construction",
            "x": 60,
            "y": 1550,
            "size": 130,
            "at": "l1:construction"
          },
          {
            "id": "f-xd",
            "t": "text",
            "text": "Đầu tư công, PPP: tối đa 12%",
            "x": 210,
            "y": 1560,
            "size": 44,
            "at": "l1:twelve",
            "color": "accent",
            "hl": [
              {
                "text": "12%",
                "at": "l1:twelve"
              }
            ]
          },
          {
            "id": "f-pv",
            "t": "text",
            "text": "Vốn tư nhân: luật không đặt trần",
            "x": 210,
            "y": 1630,
            "size": 40,
            "at": "l2:private"
          },
          {
            "id": "f-split",
            "t": "text",
            "text": "Án cũ: cắt 8% lẫn nhận 10%",
            "x": 210,
            "y": 1700,
            "size": 38,
            "at": "l3:some",
            "color": "coral"
          },
          {
            "id": "f-src2",
            "t": "text",
            "text": "Luật Xây dựng 2025, Điều 86 · các bài phân tích công khai (2024)",
            "x": 210,
            "y": 1770,
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
          "who": "binh",
          "say": "Construction is different. Public investment and PPP works: twelve percent at most.",
          "sub": "Hợp đồng xây dựng có luật riêng. Điều 86 Luật Xây dựng 2025: dự án đầu tư công, PPP tối đa 12%.",
          "keys": [
            "tối đa 12%"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Private projects? The Construction Law sets no cap.",
          "sub": "Dự án vốn tư nhân thì Luật Xây dựng không đặt trần."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But past practice split: some judgments cut to eight percent, some accepted ten.",
          "sub": "Nhưng thực tiễn trước đây chưa thống nhất: có bản án cắt về 8%, có bản án chấp nhận 10%.",
          "keys": [
            "chưa thống nhất"
          ]
        }
      ],
      "ref": "p10"
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
            "at": "l4",
            "fit": [
              "g-418",
              "g-chk"
            ],
            "zoom": 1.1,
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
            "text": "⑤ 13:30 · Dự thảo bỏ trần",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:thirty",
            "hl": [
              {
                "text": "bỏ trần",
                "at": "l1:repeal"
              }
            ]
          },
          {
            "id": "g-cb",
            "t": "illus",
            "name": "classical-building",
            "x": 3418,
            "y": 1120,
            "size": 180,
            "at": "l1:draft"
          },
          {
            "id": "g-ch",
            "t": "text",
            "text": "Bãi bỏ Chương VII → bỏ trần 8%",
            "x": 2028,
            "y": 1250,
            "size": 46,
            "at": "l1:chapter",
            "color": "coral"
          },
          {
            "id": "g-why",
            "t": "text",
            "text": "Lý do: tự do ý chí",
            "x": 2028,
            "y": 1330,
            "size": 44,
            "at": "l2:freedom"
          },
          {
            "id": "g-why2",
            "t": "text",
            "text": "bớt can thiệp · tăng răn đe",
            "x": 2058,
            "y": 1390,
            "size": 40,
            "at": "l2:deterrence",
            "color": "muted"
          },
          {
            "id": "g-418",
            "t": "text",
            "text": "Nếu thông qua → Điều 418 BLDS",
            "x": 2028,
            "y": 1480,
            "size": 46,
            "at": "l3:passed",
            "color": "accent",
            "hl": [
              {
                "text": "Điều 418",
                "at": "l3:four one eight"
              }
            ]
          },
          {
            "id": "g-tl",
            "t": "text",
            "text": "Thảo luận tổ: 20/10/2026",
            "x": 2028,
            "y": 1560,
            "size": 42,
            "at": "l4:twenty"
          },
          {
            "id": "g-kh",
            "t": "text",
            "text": "Kỳ họp: 17/10 – 21/11/2026",
            "x": 2028,
            "y": 1620,
            "size": 42,
            "at": "l4:session"
          },
          {
            "id": "g-chk",
            "t": "text",
            "text": "Kiểm: biểu quyết · hiệu lực · chuyển tiếp",
            "x": 2028,
            "y": 1700,
            "size": 40,
            "at": "l5:vote",
            "color": "coral",
            "hl": [
              {
                "text": "chuyển tiếp",
                "at": "l5:transitional"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Dự án luật sửa đổi Luật Thương mại và ba luật khác (Bộ Công Thương chủ trì) · theo các bài báo công khai",
            "x": 2028,
            "y": 1780,
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
          "say": "Stop five, one thirty. A draft law would repeal Chapter seven, and with it, the cap.",
          "sub": "Chặng năm, một rưỡi chiều. Dự thảo luật sửa đổi có nội dung bãi bỏ Chương VII Luật Thương mại, tức bỏ trần 8%."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The reasons given: freedom of contract, less interference, more deterrence.",
          "sub": "Lý do được nêu: tôn trọng tự do ý chí, hạn chế can thiệp hành chính, tăng răn đe."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "If passed as drafted, commercial penalties would follow Article four one eight of the Civil Code.",
          "sub": "Nếu được thông qua như vậy, phạt vi phạm trong thương mại sẽ áp dụng trực tiếp Điều 418 Bộ luật Dân sự.",
          "keys": [
            "Điều 418"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Group discussion on October twentieth, inside the session from October seventeen to November twenty-one.",
          "sub": "Dự án được thảo luận tại tổ ngày 20/10/2026, trong kỳ họp từ 17/10 đến 21/11/2026."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "After the session, check the vote, the effective date, and transitional rules for older contracts.",
          "sub": "Sau kỳ họp, kiểm lại: kết quả biểu quyết, ngày hiệu lực, điều khoản chuyển tiếp cho hợp đồng ký trước.",
          "keys": [
            "điều khoản chuyển tiếp"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s14",
      "module": "BRK-09",
      "data": {
        "kind": "Nguồn",
        "title": "Nghị quyết 141/NQ-CP",
        "detail": "Chính phủ thông qua chính sách, 01/6/2026",
        "illus": "classical-building",
        "around": [
          "scroll",
          "spiral-calendar"
        ],
        "icon": "file-text"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The policy already has a government stamp.",
          "sub": "Chính sách này đã có dấu của Chính phủ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Resolution one four one, June first, twenty twenty-six.",
          "sub": "Nghị quyết 141/NQ-CP, ngày 01/6/2026.",
          "keys": [
            "Nghị quyết 141/NQ-CP"
          ]
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
            "text": "⑥ 14:30 · Ký giữa lúc luật sửa",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:two thirty"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "pose": "hold"
                }
              ],
              "left": {
                "label": "Cách A: ghi đúng 8%",
                "ok": true
              },
              "right": {
                "label": "Cách B: cao hơn + câu dự phòng",
                "ok": true
              }
            },
            "at": "l1:options",
            "caption": "14:30 · Thảo trình hai cách",
            "icon": "balance-scale"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "A: 8% — an toàn hôm nay",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "a1:eight"
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "luật bỏ trần → tự trói mình",
            "x": 4026,
            "y": 1325,
            "size": 38,
            "at": "a2:limited",
            "color": "coral"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: mức cao + câu dự phòng",
            "x": 3996,
            "y": 1420,
            "size": 42,
            "at": "b1:higher"
          },
          {
            "id": "h-b2",
            "t": "text",
            "text": "luật cũ → về trần; luật mới → giữ",
            "x": 4026,
            "y": 1485,
            "size": 38,
            "at": "b2:old",
            "color": "accent"
          },
          {
            "id": "h-dep",
            "t": "text",
            "text": "Tuỳ thương lượng, tuỳ luật ngày ký",
            "x": 3996,
            "y": 1580,
            "size": 42,
            "at": "l2:negotiation",
            "hl": [
              {
                "text": "luật ngày ký",
                "at": "l2:signing"
              }
            ]
          },
          {
            "id": "h-rule",
            "t": "text",
            "text": "Đứng vững hai phía ngày hiệu lực",
            "x": 3996,
            "y": 1670,
            "size": 44,
            "at": "l3:both",
            "color": "accent",
            "hl": [
              {
                "text": "hai phía",
                "at": "l3:both"
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
          "say": "Stop six, two thirty. A long supply contract, signed while the law is changing. Two options.",
          "sub": "Chặng sáu, hai rưỡi chiều. Ký hợp đồng cung cấp dài hạn giữa lúc luật đang sửa. Hai lựa chọn."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "thao",
          "say": "Option A: write eight percent. Safe under today's law.",
          "sub": "Cách A: ghi 8% cho khớp luật hiện hành. Hôm nay an toàn.",
          "phase": "a",
          "to": "hoa"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "thao",
          "say": "But if the cap goes, we've limited ourselves to a low rate.",
          "sub": "Nhưng nếu trần được bỏ, mình đã tự giới hạn ở mức thấp.",
          "phase": "a",
          "face": "worried"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "Option B: a higher rate, plus: if the law caps it, the legal maximum applies.",
          "sub": "Cách B: mức cao hơn, kèm câu “trường hợp pháp luật giới hạn, mức phạt là mức tối đa pháp luật cho phép”.",
          "phase": "b"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "hoa",
          "say": "Old law, it drops to the cap. New law, we may keep it. Okay!",
          "sub": "Luật cũ thì về trần, luật mới thì có cơ hội giữ. Rồi, vậy nha!",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Which fits depends on negotiation, and on the law in force at signing.",
          "sub": "Cách nào hợp tuỳ thương lượng và tuỳ văn bản hiện hành tại ngày ký.",
          "keys": [
            "tại ngày ký"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "While the law changes, write a clause that stands on both sides of the effective date.",
          "sub": "Luật đang sửa thì viết điều khoản đứng được ở cả hai phía của ngày hiệu lực.",
          "keys": [
            "cả hai phía của ngày hiệu lực"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s16",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "15:30 · bàn Dũng",
        "actors": [
          {
            "id": "dung",
            "side": "left",
            "pose": "give"
          },
          {
            "id": "thao",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“Chịu phạt theo quy định pháp luật”",
          "why": "Không có mức, không có cơ sở tính nên không ra được số tiền để đòi.",
          "rule": "Nêu vi phạm, cơ sở tính, nhịp tính, chặn tổng"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Template done: each party bears penalties under the law. Okay, let's go!",
          "sub": "Mẫu xong rồi: bên nào vi phạm thì chịu phạt theo quy định pháp luật. Ok, làm luôn!",
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
          "say": "No rate, no base. Nobody can calculate a single dong from it.",
          "sub": "Không mức, không cơ sở tính. Không ai tính ra được đồng nào.",
          "keys": [
            "Không mức, không cơ sở tính"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Late delivery: blank percent of the late goods per blank days, total capped.",
          "sub": "Giao chậm: phạt [ ]% giá trị phần hàng giao chậm cho mỗi [ ] ngày, có chặn tổng.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Now a reader can work out the money.",
          "sub": "Giờ người đọc tự tính ra được số tiền.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "tự tính ra được số tiền"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p16,p17"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 16:00 · Bốn câu của điều phạt",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:four",
            "hl": [
              {
                "text": "Bốn câu",
                "at": "l1:four"
              }
            ]
          },
          {
            "id": "i-q0",
            "t": "text",
            "text": "1. Phạt vi phạm nào?",
            "x": 5964,
            "y": 1250,
            "size": 46,
            "at": "l2:which",
            "color": "ink"
          },
          {
            "id": "i-q1",
            "t": "text",
            "text": "2. Tính trên giá trị nào?",
            "x": 5964,
            "y": 1325,
            "size": 46,
            "at": "l2:value",
            "color": "ink"
          },
          {
            "id": "i-q2",
            "t": "text",
            "text": "3. Mức bao nhiêu, chặn tổng đâu?",
            "x": 5964,
            "y": 1400,
            "size": 46,
            "at": "l3:rate",
            "color": "ink"
          },
          {
            "id": "i-q3",
            "t": "text",
            "text": "4. Quan hệ với bồi thường?",
            "x": 5964,
            "y": 1475,
            "size": 46,
            "at": "l4:damages",
            "color": "muted"
          },
          {
            "id": "i-next",
            "t": "text",
            "text": "→ bài 3 của chuỗi",
            "x": 6664,
            "y": 1475,
            "size": 38,
            "at": "l4:later",
            "color": "muted"
          },
          {
            "id": "i-after",
            "t": "box",
            "x": 5964,
            "y": 1560,
            "w": 1600,
            "h": 150,
            "at": "l5:after",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "i-after1",
            "t": "text",
            "text": "“Giao chậm: [ ]% phần hàng chậm",
            "x": 5994,
            "y": 1575,
            "size": 44,
            "at": "l5:after+200"
          },
          {
            "id": "i-after2",
            "t": "text",
            "text": "mỗi [ ] ngày; chặn tổng mức phạt”",
            "x": 5994,
            "y": 1640,
            "size": 36,
            "at": "l5:total"
          },
          {
            "id": "i-rule",
            "t": "text",
            "text": "Tính ra được tiền mới đòi được",
            "x": 5964,
            "y": 1750,
            "size": 50,
            "at": "l6:calculate",
            "color": "accent",
            "hl": [
              {
                "text": "Tính ra được tiền",
                "at": "l6:calculate"
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
          "say": "Stop seven, four o'clock. A solid penalty clause answers four questions.",
          "sub": "Chặng bảy, bốn giờ chiều. Một điều phạt chắc trả lời đủ bốn câu.",
          "keys": [
            "bốn câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Which breach? Calculated on which value?",
          "sub": "Phạt vi phạm nào? Tính trên giá trị nào?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "What rate, and where does the total stop?",
          "sub": "Mức bao nhiêu, và chặn tổng ở đâu?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And its link to damages: that comes later in the series.",
          "sub": "Và quan hệ với bồi thường: câu này thuộc bài thứ ba của chuỗi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The after version names the breach, the base, the rhythm, and the total cap.",
          "sub": "Bản “sau” nêu vi phạm, cơ sở tính, nhịp tính và chặn tổng."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A penalty clause only works if a reader can calculate the money.",
          "sub": "Điều phạt chỉ đòi được khi người đọc tự tính ra được số tiền.",
          "keys": [
            "tự tính ra được số tiền"
          ]
        }
      ],
      "ref": "p15,p16,p17"
    },
    {
      "id": "s18",
      "module": "BRK-11",
      "data": {
        "title": "Bảng kiểm điều phạt",
        "items": [
          "Có mức bằng số hoặc tỷ lệ",
          "Cơ sở: phần bị vi phạm",
          "Có câu chặn tổng",
          "Đã kiểm trần ngày ký",
          "Ghi chú: luật đang sửa"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Five: law changing.",
          "sub": "Năm: luật đang sửa."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Four: cap at signing.",
          "sub": "Bốn: trần ngày ký."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Three: total cap.",
          "sub": "Ba: chặn tổng."
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "Two: breached part.",
          "sub": "Hai: phần vi phạm."
        },
        {
          "id": "l5",
          "lang": "en",
          "say": "One: a rate.",
          "sub": "Một: có mức, tỷ lệ.",
          "keys": [
            "có mức"
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
            "text": "17:00 · Cùng bàn, cùng máy tính",
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
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "abacus",
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
            "at": "l1:same",
            "caption": "17:00 · phòng pháp chế",
            "icon": "clipboard"
          },
          {
            "id": "j-all",
            "t": "text",
            "text": "Cả hợp đồng?",
            "x": 7932,
            "y": 1260,
            "size": 64,
            "at": "l4:whole",
            "color": "muted"
          },
          {
            "id": "j-allx",
            "t": "strike",
            "over": "j-all",
            "at": "l4:or"
          },
          {
            "id": "j-one",
            "t": "text",
            "text": "Đợt hai, rồi dừng ở trần",
            "x": 7932,
            "y": 1360,
            "size": 56,
            "at": "l4:batch",
            "color": "accent",
            "hl": [
              {
                "text": "dừng ở trần",
                "at": "l4:stop"
              }
            ]
          },
          {
            "id": "j-greed",
            "t": "text",
            "text": "Tham thì thâm",
            "x": 7932,
            "y": 1470,
            "size": 56,
            "at": "l4:greed",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five o'clock. Same desk, same calculator.",
          "sub": "Năm giờ chiều. Vẫn bàn ấy, vẫn cái máy tính ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Batch two, the agreed rate, stopped at the cap. The new template is ready too.",
          "sub": "Đợt hai, mức thoả thuận, dừng ở trần. Mẫu mới cũng xong rồi.",
          "face": "happy",
          "to": "dung"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Fine, no more writing it big. Okay!",
          "sub": "Thôi, không ghi thật cao nữa. Ok!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The whole contract, or batch two? Batch two, and stop at the cap. Greed bites back.",
          "sub": "Cả hợp đồng hay đợt hai? Đợt hai, và dừng ở trần. Tham thì thâm.",
          "keys": [
            "Tham thì thâm"
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
            "fit": "D",
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
            "x": 7464,
            "y": 30,
            "at": "l1"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1560,
            "y": 1120,
            "at": "l2"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5496,
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
          "say": "Step back. Eight percent of the breached part, totals included.",
          "sub": "Lùi lại. 8% của phần bị vi phạm, kể cả tổng.",
          "keys": [
            "phần bị vi phạm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Commercial, civil or construction: check which first.",
          "sub": "Thương mại, dân sự hay xây dựng: hỏi trước.",
          "keys": [
            "hỏi trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And while the law changes, write for both sides of the date.",
          "sub": "Và khi luật đang sửa, viết cho cả hai phía ngày hiệu lực.",
          "keys": [
            "cả hai phía"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p5,p9,p14"
    },
    {
      "id": "s21",
      "module": "QUIZ-01",
      "data": {
        "q": "Only one of three deliveries is late, what is usually the base for the penalty?",
        "options": [
          "The value of all deliveries, because the contract is a single document",
          "The value of the next order, because the penalty applies to the future",
          "The value of the late delivery, not the value of the whole contract"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "package",
        "why": "Điều 301 lấy cơ sở là giá trị phần nghĩa vụ bị vi phạm; chỉ một đợt chậm thì thường tính trên giá trị đợt đó."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Only one of three deliveries is late. What is usually the base for the penalty?",
          "sub": "Chỉ một trong ba đợt giao chậm. Cơ sở tính phạt thường là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The value of the late delivery, not the value of the whole contract.",
          "sub": "Giá trị đợt giao chậm, không phải giá trị cả hợp đồng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Article three oh one: the part breached.",
          "sub": "Điều 301: phần nghĩa vụ bị vi phạm."
        }
      ],
      "beats": {
        "after": 800
      },
      "ref": "questions[8]"
    },
    {
      "id": "s22",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: tính thử điều phạt của hợp đồng vừa bị giao chậm",
        "sub": "Bài sau: đòi bồi thường phải chứng minh gì?"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, open your penalty clause, calculate it, and rewrite it like the after version.",
          "sub": "Hôm nay, mở điều phạt của hợp đồng vừa bị giao chậm, tính thử và sửa theo bản “sau”.",
          "face": "laugh",
          "keys": [
            "sửa theo bản “sau”"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "General knowledge, not advice for your case. The cap is being amended; check after the session.",
          "sub": "Kiến thức nghề tham khảo, không phải tư vấn cho vụ việc cụ thể. Trần 8% đang được sửa đổi, kiểm lại sau kỳ họp."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI, dựng theo hạt nhân #136 + biến thể #144 (bang-trang-kit). HOOK-21 đoán sai: “trần 8% tính trên cả hợp đồng hay đợt bị chậm?” (p4) → lật ngay, nhắc lại ở khép vòng. Dòng thời gian: MỘT NGÀY THỨ BA — A 8:30 Thảo, Dũng “ghi thật cao”, B câu hỏi chính + Điều 300, 301, 266 (p1–p2), C ① 9:00 Cô Hoa “ghi 10%” → chỉ bỏ phần vượt (p3) + BRK-12 “8% của gì?” (p5), D ② 10:00 ba đợt, cơ sở tính, chặn tổng (p4, p6), E ③ 11:00 làm mẫu tính phạt (p7–p8), BRK-07 rehook, F ④ 12:00 Bác Bình: dân sự, xây dựng (p9–p10), G ⑤ 13:30 dự thảo bỏ trần (p11–p12) + BRK-09 Nghị quyết 141/NQ-CP, H ⑥ 14:30 Cách A/B (p13–p14), Khoan đã! 15:30 mẫu của Dũng (p16–p17), I ⑦ 16:00 bốn câu + bản sau (p15–p17), BRK-11 bảng kiểm (p18), J 17:00 khép vòng, tóm tắt lùi xa. Nhân vật theo w145/_series/law-contract-remedies.md (Thảo, Dũng, Cô Hoa, Bác Bình). Không nêu tên hãng luật/tạp chí/báo: “các bài phân tích công khai”. Số/điều chỉ từ bài: LTM Điều 266, 294, 300, 301; BLDS khoản 2 Điều 418; Luật Xây dựng 2025 Điều 86 (12%); 10%/8%; Nghị quyết 141/NQ-CP 01/6/2026; 20/10/2026; kỳ họp 17/10–21/11/2026. Không số tiền thật (“[ ] đồng”). Lưu ý chung (#133) ở tóm tắt + END. Câu đố questions[8].",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
