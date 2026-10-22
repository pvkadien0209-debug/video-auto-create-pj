// contractor-risk-fears--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "contractor-risk-fears--w01",
  "hook": "HOOK-22",
  "unit": {
    "audience": "epc-contractor-side",
    "slug": "contractor-risk-fears",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Rủi ro nào nhà thầu sợ nhất và đẩy về chủ đầu tư bằng câu chữ nào?",
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
              "a-v"
            ],
            "zoom": 1.35,
            "move": "cut"
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
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "pen",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": 0,
            "caption": "9:00 thứ Tư · phụ lục tiến độ",
            "icon": "pen"
          },
          {
            "id": "a-note",
            "t": "text",
            "text": "Ghi chú: “dựa trên mốc tạm của CĐT;",
            "x": 60,
            "y": 140,
            "size": 40,
            "at": "l2:Note",
            "font": "base"
          },
          {
            "id": "a-note2",
            "t": "text",
            "text": "nếu khác thì…”",
            "x": 60,
            "y": 200,
            "size": 40,
            "at": "l2:then",
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
          "say": "Meet Dũng, the owner's young site engineer. Pen in hand, schedule appendix on the desk.",
          "sub": "Đây là Dũng, kỹ sư hiện trường trẻ phía chủ đầu tư. Bút trong tay, phụ lục tiến độ trên bàn.",
          "keys": [
            "phụ lục tiến độ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Note: the schedule relies on the owner's provisional dates. If they change, then...",
          "sub": "Ghi chú: tiến độ dựa trên mốc tạm của chủ đầu tư. Nếu khác thì...",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hold that pen.",
          "sub": "Khoan, giữ cây bút lại đã.",
          "keys": [
            "giữ cây bút"
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
      "ref": "p18"
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
            "text": "Nhà thầu sợ gì nhất?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:fear",
            "hl": [
              {
                "text": "sợ gì nhất",
                "at": "l1:most"
              }
            ]
          },
          {
            "id": "b-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 30,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "explain"
                }
              ],
              "props": [
                "pen",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
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
            "at": "l3:Thảo",
            "caption": "9:05 · Thảo giữ cây bút",
            "icon": "pen"
          },
          {
            "id": "b-a1",
            "t": "text",
            "text": "Rủi ro ngoài tầm tay",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:control",
            "color": "accent",
            "hl": [
              {
                "text": "ngoài tầm tay",
                "at": "l2:control"
              }
            ]
          },
          {
            "id": "b-a2",
            "t": "text",
            "text": "đẩy bằng: ngoại lệ, ghi chú,",
            "x": 2028,
            "y": 250,
            "size": 44,
            "at": "l2:exceptions"
          },
          {
            "id": "b-a3",
            "t": "text",
            "text": "ngày đóng băng",
            "x": 2028,
            "y": 310,
            "size": 44,
            "at": "l2:frozen",
            "color": "coral"
          },
          {
            "id": "b-end",
            "t": "text",
            "text": "“…sẽ điều chỉnh tương ứng”",
            "x": 2028,
            "y": 410,
            "size": 44,
            "at": "l4:adjusted",
            "font": "base",
            "color": "coral",
            "hl": [
              {
                "text": "điều chỉnh tương ứng",
                "at": "l4:adjusted"
              }
            ]
          },
          {
            "id": "b-kim",
            "t": "text",
            "text": "“Cái kim trong bọc…”",
            "x": 2028,
            "y": 500,
            "size": 52,
            "at": "l6:needle",
            "color": "accent",
            "hl": [
              {
                "text": "Cái kim",
                "at": "l6:needle"
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
          "say": "Which risks does an EPC contractor fear most, and which words push them back to the owner?",
          "sub": "Nhà thầu EPC sợ rủi ro nào nhất, và đẩy về chủ đầu tư bằng câu chữ nào?",
          "keys": [
            "sợ rủi ro nào nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Short answer: risks outside its control, pushed back with exceptions, notes and frozen dates.",
          "sub": "Trả lời ngắn: rủi ro ngoài tầm tay, đẩy về bằng ngoại lệ, ghi chú và ngày đóng băng.",
          "keys": [
            "ngoài tầm tay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Thảo, the owner's in-house lawyer, at the next desk.",
          "sub": "Còn đây là Thảo, pháp chế phía chủ đầu tư, bàn bên cạnh.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "If they change, the schedule will be adjusted accordingly. Looks harmless. Sign?",
          "sub": "Nếu khác, tiến độ sẽ điều chỉnh tương ứng. Trông vô hại mà. Ký nhé?",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Not yet. Firstly, which fears is this note covering?",
          "sub": "Chưa. Thứ nhất, ghi chú này đang che nỗi sợ nào?",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A needle in a bag pokes out sooner or later. We will see where.",
          "sub": "“Cái kim trong bọc lâu ngày cũng lòi ra.” Lát nữa ta xem nó lòi ra ở đâu.",
          "keys": [
            "Cái kim trong bọc"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "intro,p18"
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
            "id": "b-w0",
            "t": "badge",
            "n": 1,
            "x": 2058,
            "y": 612,
            "at": "l2:shift"
          },
          {
            "id": "b-wa0",
            "t": "text",
            "text": "Đẩy về CĐT",
            "x": 2133,
            "y": 605,
            "size": 40,
            "at": "l2:shift+200",
            "color": "coral"
          },
          {
            "id": "b-wb0",
            "t": "text",
            "text": "bằng câu chữ",
            "x": 2133,
            "y": 668,
            "size": 28,
            "at": "l2:shift+400",
            "color": "muted"
          },
          {
            "id": "b-w1",
            "t": "badge",
            "n": 2,
            "x": 2618,
            "y": 612,
            "at": "l2:share"
          },
          {
            "id": "b-wa1",
            "t": "text",
            "text": "Chia bớt",
            "x": 2693,
            "y": 605,
            "size": 40,
            "at": "l2:share+200"
          },
          {
            "id": "b-wb1",
            "t": "text",
            "text": "gia hạn, điều chỉnh giá",
            "x": 2693,
            "y": 668,
            "size": 28,
            "at": "l2:share+400",
            "color": "muted"
          },
          {
            "id": "b-w2",
            "t": "badge",
            "n": 3,
            "x": 3178,
            "y": 612,
            "at": "l2:keep"
          },
          {
            "id": "b-wa2",
            "t": "text",
            "text": "Giữ lại",
            "x": 3253,
            "y": 605,
            "size": 40,
            "at": "l2:keep+200"
          },
          {
            "id": "b-wb2",
            "t": "text",
            "text": "cộng dự phòng",
            "x": 3253,
            "y": 668,
            "size": 28,
            "at": "l2:keep+400",
            "color": "muted"
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "9:30",
            "x": 2028,
            "y": 725,
            "size": 30,
            "at": "l3:seven+300",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "10:30",
            "x": 2263,
            "y": 725,
            "size": 30,
            "at": "l3:seven+500",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "11:00",
            "x": 2498,
            "y": 725,
            "size": 30,
            "at": "l3:seven+700",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "14:00",
            "x": 2733,
            "y": 725,
            "size": 30,
            "at": "l3:seven+900",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "b-st4",
            "t": "text",
            "text": "15:00",
            "x": 2968,
            "y": 725,
            "size": 30,
            "at": "l3:seven+1100",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "b-st5",
            "t": "text",
            "text": "16:00",
            "x": 3203,
            "y": 725,
            "size": 30,
            "at": "l3:seven+1300",
            "font": "base",
            "color": "ink"
          },
          {
            "id": "b-st6",
            "t": "text",
            "text": "16:45",
            "x": 3438,
            "y": 725,
            "size": 30,
            "at": "l3:seven+1500",
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
          "say": "Design, equipment, installation: contractors price those every day. Risks outside their hands are different.",
          "sub": "Thiết kế, thiết bị, lắp đặt: nhà thầu quen định giá. Rủi ro nằm ngoài tay mình mới đáng sợ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For each one, three moves: shift it to the owner, share it through relief, or keep it and price it.",
          "sub": "Với mỗi rủi ro, có ba cách: đẩy về chủ đầu tư, chia bớt qua gia hạn hay điều chỉnh giá, hoặc giữ lại và cộng dự phòng.",
          "keys": [
            "ba cách"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Reading a markup means spotting which move each edit makes. Seven stops, one Wednesday.",
          "sub": "Đọc bản sửa là tìm xem từng chỗ đang dùng cách nào. Bảy chặng, một ngày thứ Tư.",
          "keys": [
            "dùng cách nào"
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
            "fit": "C",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 9:30 · Đất dưới móng",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "c-m",
            "t": "text",
            "text": "Mẫu quốc tế chìa khoá trao tay:",
            "x": 3996,
            "y": 160,
            "size": 42,
            "at": "l2:model"
          },
          {
            "id": "c-m2",
            "t": "text",
            "text": "nhà thầu chịu điều không lường trước",
            "x": 3996,
            "y": 220,
            "size": 40,
            "at": "l2:unforeseeable",
            "color": "coral"
          },
          {
            "id": "c-m3",
            "t": "text",
            "text": "tự khảo sát, “coi như đã biết”",
            "x": 3996,
            "y": 290,
            "size": 40,
            "at": "l3:surveys"
          },
          {
            "id": "c-d",
            "t": "text",
            "text": "Cửa nhỏ nhà thầu mở:",
            "x": 3996,
            "y": 390,
            "size": 46,
            "at": "l4:doors",
            "color": "accent",
            "hl": [
              {
                "text": "Cửa nhỏ",
                "at": "l4:doors"
              }
            ]
          },
          {
            "id": "c-d1",
            "t": "text",
            "text": "• nới vùng vật nổ CĐT bảo đảm",
            "x": 3996,
            "y": 460,
            "size": 40,
            "at": "l4:explosive"
          },
          {
            "id": "c-d2",
            "t": "text",
            "text": "• “trừ trường hợp tại Điều [ ]”",
            "x": 3996,
            "y": 525,
            "size": 40,
            "at": "l5:except",
            "font": "base"
          },
          {
            "id": "c-d3",
            "t": "text",
            "text": "Chỉ kích thước, không bản vẽ",
            "x": 3996,
            "y": 600,
            "size": 36,
            "at": "l5:drawing",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: nine thirty. The ground under the foundations.",
          "sub": "Chặng một: chín rưỡi. Đất dưới móng.",
          "keys": [
            "Đất dưới móng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The international turnkey model puts unforeseeable difficulties on the contractor. No price change for them.",
          "sub": "Mẫu hợp đồng chìa khoá trao tay quốc tế để nhà thầu chịu khó khăn không lường trước, giá không điều chỉnh vì lý do này."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The contractor surveys the site itself, and is deemed to have all the risk information.",
          "sub": "Nhà thầu tự khảo sát địa hình, địa chất, thuỷ văn, và được coi là đã có mọi thông tin rủi ro."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So it doesn't fight the rule. It opens small doors: a wider explosive clearance zone the owner guarantees.",
          "sub": "Nên nhà thầu không đòi bỏ nguyên tắc, mà mở cửa nhỏ: nới rộng vùng vật nổ còn sót mà chủ đầu tư bảo đảm.",
          "keys": [
            "mở cửa nhỏ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And more events under except as provided in Article blank. A zone with only sizes, no drawing, invites a boundary fight.",
          "sub": "Và thêm sự kiện vào ngoại lệ “trừ trường hợp quy định tại Điều [ ]”. Vùng chỉ có kích thước, không bản vẽ, dễ cãi ranh giới.",
          "keys": [
            "dễ cãi ranh giới"
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
            "fit": "C",
            "move": "cut"
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
            "at": "l6",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4876,
            "y": 110,
            "w": 700,
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
                  "at": "l3",
                  "pose": "explain"
                }
              ],
              "props": [
                "rock",
                "balance-scale"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3:Bình",
            "caption": "9:45 · Bác Bình gọi",
            "icon": "telephone-receiver"
          },
          {
            "id": "c-13",
            "t": "text",
            "text": "Luật XD 2025, Điều 13:",
            "x": 4836,
            "y": 615,
            "size": 34,
            "at": "l4:Article",
            "color": "accent"
          },
          {
            "id": "c-13b",
            "t": "text",
            "text": "địa chất bất thường → hoàn cảnh thay đổi cơ bản",
            "x": 4836,
            "y": 662,
            "size": 28,
            "at": "l4:fundamental",
            "font": "base"
          },
          {
            "id": "c-420",
            "t": "text",
            "text": "BLDS Điều 420: đàm phán lại, vẫn thực hiện",
            "x": 4836,
            "y": 705,
            "size": 28,
            "at": "l5:renegotiate",
            "font": "base"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Easy. Our draft says the contractor carries everything. Ground risk, closed.",
          "sub": "Dễ mà. Dự thảo mình ghi nhà thầu chịu hết. Rủi ro địa chất, đóng.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Secondly, does Vietnamese law agree? I'll ask Mr Bình.",
          "sub": "Thứ hai, luật Việt Nam có đồng ý không? Em hỏi Bác Bình.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Mr Bình, head of the owner's legal team, picks up on the first ring.",
          "sub": "Bác Bình, trưởng pháp chế chủ đầu tư, nhấc máy ngay hồi chuông đầu.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Slowly. Article thirteen of the 2025 Construction Law: unforeseeable abnormal geology is a fundamental change of circumstances.",
          "sub": "Từ từ. Điều 13 Luật Xây dựng 2025: địa chất bất thường không lường trước là hoàn cảnh thay đổi cơ bản.",
          "face": "thinking",
          "keys": [
            "hoàn cảnh thay đổi cơ bản"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "Under Article four twenty of the Civil Code, the affected side may ask to renegotiate, and must keep performing meanwhile.",
          "sub": "Theo Điều 420 Bộ luật Dân sự, khi đủ điều kiện, bên bị ảnh hưởng được yêu cầu đàm phán lại, trong lúc đó vẫn phải thực hiện nghĩa vụ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "binh",
          "say": "No deal? A court may end or amend the contract. So have a lawyer check that clause.",
          "sub": "Không thoả thuận được thì có thể yêu cầu Toà án chấm dứt hoặc sửa hợp đồng. Nên nhờ luật sư xem câu đó.",
          "keys": [
            "nhờ luật sư xem"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s05",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Chịu hết vẫn phải qua cửa luật",
        "hl": "cửa luật",
        "sub": "Câu “nhà thầu chịu hết” không tự đứng một mình"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Carries everything? Still has to pass the law.",
          "sub": "Chịu hết? Vẫn phải qua cửa luật.",
          "keys": [
            "qua cửa luật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That line never stands alone.",
          "sub": "Câu ấy không tự đứng một mình."
        }
      ],
      "ref": "p6"
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
            "at": "l2",
            "fit": [
              "d-c1",
              "d-c3"
            ],
            "zoom": 1.15,
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
            "text": "② 10:30 · Câu giữ rủi ro",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:ten"
          },
          {
            "id": "d-c1",
            "t": "text",
            "text": "“Nhà thầu được coi là đã thu thập mọi thông tin cần thiết về rủi ro…",
            "x": 5964,
            "y": 160,
            "size": 38,
            "at": "l2:deemed",
            "font": "base"
          },
          {
            "id": "d-c2",
            "t": "text",
            "text": "và không được điều chỉnh Giá Hợp đồng hay gia hạn vì bất kỳ Điều kiện Công trường nào,",
            "x": 5964,
            "y": 220,
            "size": 38,
            "at": "l2:adjustment",
            "font": "base"
          },
          {
            "id": "d-c3",
            "t": "text",
            "text": "trừ trường hợp được quy định rõ tại Điều [ ].”",
            "x": 5964,
            "y": 280,
            "size": 38,
            "at": "l3:expressly",
            "font": "base",
            "hl": [
              {
                "text": "quy định rõ",
                "at": "l3:expressly"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Ngoại lệ đóng: liệt kê rõ",
            "x": 5964,
            "y": 380,
            "size": 52,
            "at": "l3:closed",
            "color": "accent",
            "hl": [
              {
                "text": "liệt kê rõ",
                "at": "l3:named"
              }
            ]
          },
          {
            "id": "d-i",
            "t": "illus",
            "name": "page-facing-up",
            "x": 5964,
            "y": 470,
            "size": 120,
            "at": "l4:drawing"
          },
          {
            "id": "d-dr",
            "t": "text",
            "text": "+ bản vẽ vùng vật nổ đính kèm",
            "x": 6104,
            "y": 500,
            "size": 46,
            "at": "l4:drawing+200",
            "hl": [
              {
                "text": "bản vẽ",
                "at": "l4:drawing"
              }
            ]
          },
          {
            "id": "d-why",
            "t": "text",
            "text": "ranh giới hết chỗ cãi",
            "x": 6104,
            "y": 570,
            "size": 40,
            "at": "l4:argue",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: ten thirty. The owner's usual wording.",
          "sub": "Chặng hai: mười rưỡi. Câu chủ đầu tư thường dùng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The contractor is deemed to have all necessary risk information, with no price adjustment or extension for any site condition.",
          "sub": "Nhà thầu được coi là đã thu thập mọi thông tin cần thiết về rủi ro, không được điều chỉnh giá hay gia hạn vì bất kỳ điều kiện công trường nào."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Except where expressly stated in Article blank. A closed exception: the doors are named.",
          "sub": "Trừ trường hợp được quy định rõ tại Điều [ ]. Ngoại lệ đóng: cửa nào cũng được gọi tên.",
          "keys": [
            "Ngoại lệ đóng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Plus a drawing of the explosive clearance zone, attached. Nothing left to argue about.",
          "sub": "Kèm bản vẽ vùng vật nổ đính vào hợp đồng. Hết chỗ cãi ranh giới.",
          "keys": [
            "bản vẽ vùng vật nổ"
          ]
        }
      ],
      "ref": "p7"
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
            "at": "l4",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
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
            "text": "③ 11:00 · Dữ liệu ai chịu?",
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
                  "at": "l3",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "bar-chart"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3:Sam",
            "caption": "11:00 · Sam gọi tới",
            "icon": "laptop"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Nghiêng về CĐT:",
            "x": 7932,
            "y": 165,
            "size": 46,
            "at": "l1:favours",
            "color": "accent"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "chỉ để tham khảo, không bảo đảm",
            "x": 7932,
            "y": 230,
            "size": 38,
            "at": "l1:reference"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "trừ gian lận, phần CĐT nhận",
            "x": 7932,
            "y": 290,
            "size": 38,
            "at": "l2:fraud"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "(dữ liệu gió, ranh giới)",
            "x": 7932,
            "y": 345,
            "size": 34,
            "at": "l2:wind",
            "color": "muted"
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "Yêu cầu CĐT: “như thể tự soạn”",
            "x": 7932,
            "y": 420,
            "size": 40,
            "at": "l2:drafted",
            "color": "coral",
            "hl": [
              {
                "text": "như thể tự soạn",
                "at": "l2:drafted"
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
          "say": "Third stop: eleven a.m. A clause that favours the owner calls its data for reference only.",
          "sub": "Chặng ba: mười một giờ. Hợp đồng nghiêng về chủ đầu tư ghi thông tin chủ đầu tư cung cấp chỉ để tham khảo.",
          "keys": [
            "chỉ để tham khảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Except fraud, and parts the owner takes on, like wind data. The contractor warrants the requirements as if it drafted them.",
          "sub": "Trừ gian lận và phần chủ đầu tư nhận, như dữ liệu gió. Nhà thầu bảo đảm Yêu cầu của chủ đầu tư “như thể tự soạn”.",
          "keys": [
            "như thể tự soạn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then Sam calls, the contractor's lead negotiator. Polite, and very direct.",
          "sub": "Rồi Sam gọi tới, trưởng nhóm đàm phán của nhà thầu. Lịch sự, và rất thẳng.",
          "keys": [
            "trưởng nhóm đàm phán"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Small request. Add except survey data provided by the owner. That's fair, isn't it?",
          "sub": "Xin một chút thôi. Thêm “trừ dữ liệu khảo sát do chủ đầu tư cung cấp”. Công bằng mà, phải không?",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Watch the push back: a long list of owner responsibilities, or an appendix that names nothing.",
          "sub": "Để ý cách đẩy lại: danh sách dài phần chủ đầu tư “chịu trách nhiệm”, hoặc dẫn sang phụ lục chẳng chỉ rõ gì.",
          "keys": [
            "chẳng chỉ rõ gì"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "11:20 · Dũng gật đầu thay",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đồng ý câu chung “trừ dữ liệu khảo sát”",
          "why": "Mọi báo cáo khảo sát trong hồ sơ mời thầu, kể cả bản cũ, thành rủi ro của chủ đầu tư.",
          "rule": "Nhận theo danh sách, không theo câu chung"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Sounds fair. Exclude all our survey data. Done!",
          "sub": "Nghe công bằng. Trừ hết dữ liệu khảo sát của mình. Xong!",
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
          "say": "Every survey report in the tender, even the old ones, just became the owner's risk.",
          "sub": "Mọi báo cáo khảo sát trong hồ sơ mời thầu, kể cả bản cũ, vừa thành rủi ro của chủ đầu tư.",
          "keys": [
            "kể cả bản cũ"
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
          "say": "Okay. An appendix lists the exact data we accept. The rest stays reference only.",
          "sub": "Rồi. Phụ lục liệt kê đúng bộ dữ liệu mình nhận. Phần còn lại vẫn chỉ để tham khảo.",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Accept by list, never by a general phrase.",
          "sub": "Nhận trách nhiệm theo danh sách, đừng nhận theo câu chung.",
          "phase": "redo",
          "keys": [
            "theo danh sách"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p10,p11"
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
            "id": "e-A",
            "t": "text",
            "text": "A: câu chung → gánh cả bản cũ",
            "x": 7932,
            "y": 600,
            "size": 38,
            "at": "l1:general",
            "color": "coral"
          },
          {
            "id": "e-B",
            "t": "text",
            "text": "B: phụ lục liệt kê dữ liệu",
            "x": 7932,
            "y": 660,
            "size": 38,
            "at": "l2:list",
            "color": "accent",
            "hl": [
              {
                "text": "liệt kê",
                "at": "l2:list"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Biết chính xác mình gánh gì",
            "x": 8772,
            "y": 690,
            "size": 44,
            "at": "l2:exactly",
            "hl": [
              {
                "text": "chính xác",
                "at": "l2:exactly"
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
          "say": "Option A, the general phrase, hands the owner every old report.",
          "sub": "Cách A, câu chung, trao cho chủ đầu tư mọi báo cáo cũ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B, a precise list: the contractor gets its exception, and the owner knows exactly what it carries.",
          "sub": "Cách B, danh sách chính xác: nhà thầu có ngoại lệ, còn chủ đầu tư biết chính xác mình gánh gì.",
          "keys": [
            "biết chính xác mình gánh gì"
          ]
        }
      ],
      "ref": "p10,p11"
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
            "text": "④ 14:00 · Luật ra sau ngày ký",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Change"
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1265,
            "w": 40,
            "h": 40,
            "at": "l2:complies",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1255,
            "size": 50,
            "at": "l2:complies+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Nhà thầu tuân thủ",
            "x": 124,
            "y": 1261,
            "size": 42,
            "at": "l2:complies+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1335,
            "w": 40,
            "h": 40,
            "at": "l2:notifies",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1325,
            "size": 50,
            "at": "l2:notifies+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Thông báo trong [ ] ngày",
            "x": 124,
            "y": 1331,
            "size": 42,
            "at": "l2:notifies+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1405,
            "w": 40,
            "h": 40,
            "at": "l2:decides",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1395,
            "size": 50,
            "at": "l2:decides+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "CĐT quyết có cần Thay đổi",
            "x": 124,
            "y": 1401,
            "size": 42,
            "at": "l2:decides+200"
          },
          {
            "id": "f-grid",
            "t": "text",
            "text": "Nhà máy điện: chỗ nhạy nhất",
            "x": 60,
            "y": 1490,
            "size": 44,
            "at": "l3:power"
          },
          {
            "id": "f-grid2",
            "t": "text",
            "text": "= quy chuẩn lưới",
            "x": 60,
            "y": 1550,
            "size": 52,
            "at": "l3:grid",
            "color": "coral",
            "hl": [
              {
                "text": "quy chuẩn lưới",
                "at": "l3:grid"
              }
            ]
          },
          {
            "id": "f-210",
            "t": "text",
            "text": "NĐ 210/2026, Điều 18:",
            "x": 960,
            "y": 1265,
            "size": 44,
            "at": "l4:Decree",
            "color": "accent"
          },
          {
            "id": "f-210a",
            "t": "text",
            "text": "• thoả thuận trách nhiệm rủi ro",
            "x": 960,
            "y": 1335,
            "size": 38,
            "at": "l4:agree"
          },
          {
            "id": "f-210b",
            "t": "text",
            "text": "• báo bằng văn bản, đề xuất",
            "x": 960,
            "y": 1395,
            "size": 38,
            "at": "l4:writing"
          },
          {
            "id": "f-210c",
            "t": "text",
            "text": "• biến động giá bất thường",
            "x": 960,
            "y": 1455,
            "size": 38,
            "at": "l5:abnormal"
          },
          {
            "id": "f-210d",
            "t": "text",
            "text": "→ đánh giá, sửa hợp đồng",
            "x": 1000,
            "y": 1510,
            "size": 38,
            "at": "l5:amend",
            "color": "muted"
          },
          {
            "id": "f-ts",
            "t": "text",
            "text": "Vốn tư nhân, ký trước 01/7/2026:",
            "x": 960,
            "y": 1610,
            "size": 40,
            "at": "l6:private",
            "color": "coral"
          },
          {
            "id": "f-ts2",
            "t": "text",
            "text": "chỉ áp khi hai bên thoả thuận",
            "x": 960,
            "y": 1670,
            "size": 40,
            "at": "l6:agree",
            "hl": [
              {
                "text": "thoả thuận",
                "at": "l6:agree"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nghị định 210/2026/NĐ-CP, Điều 18 (rủi ro) và Điều 33 (chuyển tiếp)",
            "x": 60,
            "y": 1812,
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
          "say": "Fourth stop: two p.m. Change in law, a door to both money and time.",
          "sub": "Chặng bốn: hai giờ chiều. Thay đổi pháp luật, cửa đòi cả tiền lẫn thời gian.",
          "keys": [
            "Thay đổi pháp luật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The usual clause: the contractor complies, notifies within set days, and the owner decides on a variation.",
          "sub": "Điều khoản thường có: nhà thầu tuân thủ, thông báo trong [ ] ngày, chủ đầu tư quyết có cần Thay đổi không."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For a power plant, the sensitive spot is the grid code.",
          "sub": "Với nhà máy điện, chỗ nhạy nhất là quy chuẩn lưới.",
          "keys": [
            "quy chuẩn lưới"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Decree two ten, Article eighteen: agree who handles each risk. The affected party notifies in writing and proposes a solution.",
          "sub": "Điều 18 Nghị định 210/2026: các bên thoả thuận cụ thể trách nhiệm xử lý rủi ro; bên bị ảnh hưởng báo bằng văn bản, đề xuất phương án."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Abnormal price swings beyond forecast? Assess the impact and amend the contract.",
          "sub": "Biến động giá bất thường vượt khả năng dự báo thì đánh giá tác động, sửa đổi hợp đồng."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "But private contracts signed before July first, twenty twenty six, follow it only if the parties agree.",
          "sub": "Nhưng hợp đồng vốn tư nhân ký trước 01/7/2026 chỉ theo nghị định này khi các bên thoả thuận áp dụng.",
          "keys": [
            "khi các bên thoả thuận áp dụng"
          ]
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Đóng băng một quy chuẩn thì có gì nguy?",
        "illus": "snowflake"
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
          "say": "What harm can freezing one grid code do?",
          "sub": "Đóng băng một quy chuẩn thì có gì nguy?",
          "keys": [
            "Đóng băng"
          ]
        }
      ],
      "ref": "p15"
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
              "g-b"
            ],
            "zoom": 1.2,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "G",
            "ms": 700
          },
          {
            "at": "l4",
            "fit": [
              "g-a1",
              "g-a2"
            ],
            "zoom": 1.15,
            "ms": 700
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
            "text": "⑤ 15:00 · Quy chuẩn lưới",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:three"
          },
          {
            "id": "g-bl",
            "t": "text",
            "text": "Trước",
            "x": 2028,
            "y": 1240,
            "size": 36,
            "at": "l2:Before",
            "color": "muted"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "“Nhà máy tuân thủ Quy chuẩn Lưới có hiệu lực tại Ngày Ký.”",
            "x": 2028,
            "y": 1285,
            "size": 38,
            "at": "l2:effect",
            "font": "base"
          },
          {
            "id": "g-bx",
            "t": "text",
            "text": "→ mọi thông tư mới = phát sinh",
            "x": 2028,
            "y": 1350,
            "size": 42,
            "at": "l3:circular",
            "color": "coral",
            "hl": [
              {
                "text": "phát sinh",
                "at": "l3:claim"
              }
            ]
          },
          {
            "id": "g-al",
            "t": "text",
            "text": "Sau",
            "x": 2028,
            "y": 1440,
            "size": 36,
            "at": "l4:After",
            "color": "muted"
          },
          {
            "id": "g-a1",
            "t": "text",
            "text": "“…mọi quy định về lưới đã ban hành trước Ngày [ ]",
            "x": 2028,
            "y": 1485,
            "size": 38,
            "at": "l4:issued",
            "font": "base"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "được coi là đã nằm trong Giá Hợp đồng và Tiến độ.”",
            "x": 2028,
            "y": 1540,
            "size": 38,
            "at": "l4:price",
            "font": "base",
            "hl": [
              {
                "text": "đã nằm trong Giá",
                "at": "l4:already"
              }
            ]
          },
          {
            "id": "g-ax",
            "t": "text",
            "text": "→ chỉ quy định sau mốc mới tính",
            "x": 2028,
            "y": 1610,
            "size": 40,
            "at": "l5:after",
            "color": "accent"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Đóng băng = mở cửa phát sinh",
            "x": 2028,
            "y": 1710,
            "size": 56,
            "at": "l6:Freezing",
            "color": "accent",
            "hl": [
              {
                "text": "mở cửa",
                "at": "l6:opens"
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
          "say": "Fifth stop: three p.m. The technical appendix.",
          "sub": "Chặng năm: ba giờ chiều. Phụ lục kỹ thuật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before: the plant complies with the grid code in effect at signing.",
          "sub": "Trước: nhà máy tuân thủ quy chuẩn lưới có hiệu lực tại ngày ký."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So every new grid circular after signing becomes a chance to claim.",
          "sub": "Vậy mọi thông tư lưới mới sau ngày ký đều thành cơ hội phát sinh.",
          "keys": [
            "cơ hội phát sinh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "After: grid rules issued before a set date are treated as already in the price and schedule.",
          "sub": "Sau: mọi quy định về lưới ban hành trước một mốc được coi là đã nằm trong giá và tiến độ.",
          "keys": [
            "đã nằm trong giá và tiến độ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Only rules issued after that date go into the change in law route.",
          "sub": "Chỉ quy định ra sau mốc đó mới đi vào cơ chế thay đổi pháp luật."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Freezing the code at a date opens the door to claims. A freezer that leaks.",
          "sub": "Đóng băng quy chuẩn là mở cửa cho phát sinh. Tủ đá mà rỉ nước.",
          "keys": [
            "mở cửa cho phát sinh"
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
          },
          {
            "at": 150,
            "fit": "H",
            "ms": 900
          },
          {
            "at": "l3",
            "fit": [
              "h-w",
              "h-r"
            ],
            "zoom": 1.15,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 16:00 · Lưới: bên thứ ba",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:four"
          },
          {
            "id": "h-i",
            "t": "illus",
            "name": "high-voltage",
            "x": 5386,
            "y": 1240,
            "size": 200,
            "at": "l1:third"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Đóng điện, đấu nối, vận hành TM",
            "x": 3996,
            "y": 1250,
            "size": 42,
            "at": "l1:energising"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "phụ thuộc Bên mua điện, Đơn vị vận hành lưới",
            "x": 3996,
            "y": 1310,
            "size": 34,
            "at": "l1:buyer",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Muốn: gia hạn + chi phí chờ",
            "x": 3996,
            "y": 1380,
            "size": 42,
            "at": "l2:waiting",
            "color": "coral"
          },
          {
            "id": "h-w",
            "t": "text",
            "text": "Mơ hồ: “việc đóng điện TBA phải hoàn thành trước ngày [ ]”",
            "x": 3996,
            "y": 1470,
            "size": 36,
            "at": "l3:must",
            "font": "base"
          },
          {
            "id": "h-wx",
            "t": "strike",
            "over": "h-w",
            "at": "l3:when"
          },
          {
            "id": "h-r",
            "t": "text",
            "text": "Rõ: “việc CĐT không hoàn thành đóng điện TBA trước ngày [ ],",
            "x": 3996,
            "y": 1540,
            "size": 36,
            "at": "l4:failure",
            "font": "base"
          },
          {
            "id": "h-r2",
            "t": "text",
            "text": "trừ trường hợp và trong phạm vi do Nhà thầu gây ra”",
            "x": 3996,
            "y": 1595,
            "size": 36,
            "at": "l4:extent",
            "font": "base",
            "hl": [
              {
                "text": "do Nhà thầu gây ra",
                "at": "l4:caused"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Là sự kiện, không là nghĩa vụ",
            "x": 3996,
            "y": 1690,
            "size": 46,
            "at": "l5:event",
            "color": "accent",
            "hl": [
              {
                "text": "sự kiện",
                "at": "l5:event"
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
          "say": "Sixth stop: four p.m. The grid is a third party. Energising, connection, commercial operation depend on the power buyer and grid operator.",
          "sub": "Chặng sáu: bốn giờ chiều. Lưới là bên thứ ba: đóng điện, đấu nối, vận hành thương mại phụ thuộc Bên mua điện và Đơn vị vận hành lưới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The contractor wants every substation delay as an extension event with waiting costs. Sometimes even deemed completion.",
          "sub": "Nhà thầu muốn mọi chậm ở trạm biến áp đều là sự kiện gia hạn có chi phí chờ, đôi khi cả “coi như hoàn thành”.",
          "keys": [
            "chi phí chờ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A common slip: substation energising must be completed before a date. A duty. But when does the contractor get time?",
          "sub": "Lỗi hay gặp: “việc đóng điện trạm biến áp phải hoàn thành trước ngày [ ]”. Đọc như nghĩa vụ, chẳng biết khi nào được gia hạn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Clearer: the owner's failure to energise before the date, except to the extent caused by the contractor.",
          "sub": "Rõ hơn: việc chủ đầu tư không hoàn thành đóng điện trước ngày [ ], trừ trường hợp và trong phạm vi do nhà thầu gây ra.",
          "keys": [
            "do nhà thầu gây ra"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Write it as an event, not a duty.",
          "sub": "Viết thành sự kiện, đừng viết thành nghĩa vụ.",
          "keys": [
            "sự kiện"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s14",
      "module": "BRK-08",
      "data": {
        "title": "Đét tua nhanh: nếu đã ký",
        "points": [
          {
            "label": "Ký lướt",
            "sub": "ghi chú lọt vào",
            "illus": "pen"
          },
          {
            "label": "Mốc CĐT dời",
            "sub": "vài tuần",
            "illus": "spiral-calendar"
          },
          {
            "label": "Xin gia hạn",
            "sub": "ngày đổi ngày",
            "illus": "incoming-envelope"
          },
          {
            "label": "Không đường găng",
            "sub": "chỉ viện ghi chú",
            "illus": "warning"
          }
        ],
        "current": 3
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fast forward: signed without reading. Months later, an owner milestone slips a few weeks.",
          "sub": "Tua nhanh: ký lướt. Vài tháng sau, một mốc của chủ đầu tư dời vài tuần.",
          "keys": [
            "Tua nhanh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The contractor claims day for day, citing the note. No critical path analysis.",
          "sub": "Nhà thầu xin gia hạn ngày đổi ngày, viện ghi chú, không phân tích đường găng.",
          "keys": [
            "ngày đổi ngày"
          ]
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
            "at": "l1",
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
            "text": "⑦ 16:45 · Cây kim lòi ra",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:note"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "face": "surprised"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "pen",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:note",
            "caption": "16:45 · trở lại cây bút",
            "icon": "pen"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Một dòng ghi chú = một điều khoản",
            "x": 5964,
            "y": 1260,
            "size": 42,
            "at": "l3:note",
            "color": "accent",
            "hl": [
              {
                "text": "một điều khoản",
                "at": "l3:clause"
              }
            ]
          },
          {
            "id": "i-g",
            "t": "text",
            "text": "Câu giữ:",
            "x": 5964,
            "y": 1350,
            "size": 46,
            "at": "l4:wording",
            "color": "accent"
          },
          {
            "id": "i-g1",
            "t": "text",
            "text": "ghi chú không tạo quyền gia hạn",
            "x": 5964,
            "y": 1410,
            "size": 36,
            "at": "l4:create"
          },
          {
            "id": "i-g2",
            "t": "text",
            "text": "chỉ gia hạn khi: báo đúng hạn,",
            "x": 5964,
            "y": 1465,
            "size": 36,
            "at": "l5:notice"
          },
          {
            "id": "i-g3",
            "t": "text",
            "text": "đường găng hiện hành, giảm thiểu",
            "x": 5964,
            "y": 1520,
            "size": 36,
            "at": "l5:critical",
            "hl": [
              {
                "text": "đường găng",
                "at": "l5:critical"
              }
            ]
          },
          {
            "id": "i-g4",
            "t": "text",
            "text": "đấu nối, bán điện ≠ vận hành TM",
            "x": 5964,
            "y": 1590,
            "size": 36,
            "at": "l6:sales",
            "color": "coral"
          },
          {
            "id": "i-g5",
            "t": "text",
            "text": "≠ bàn giao",
            "x": 5964,
            "y": 1645,
            "size": 36,
            "at": "l6:handover",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "So that one note could cost us weeks of delay damages?",
          "sub": "Vậy một dòng ghi chú có thể làm mình mất mấy tuần tiền phạt chậm?",
          "face": "surprised"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Yes. Thirdly, it needs a counter sentence before anyone signs.",
          "sub": "Đúng. Thứ ba, phải có câu đối trọng trước khi ai ký.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A single schedule note works just like a clause. There's our needle.",
          "sub": "Một dòng ghi chú cũng là một điều khoản. Cây kim lòi ra rồi đó.",
          "keys": [
            "Một dòng ghi chú cũng là một điều khoản"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The owner's wording: notes in the schedule do not create any right to an extension.",
          "sub": "Câu giữ của chủ đầu tư: ghi chú trong tiến độ không tự tạo quyền gia hạn.",
          "keys": [
            "không tự tạo quyền gia hạn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Extensions only with timely notice, delay on the current critical path, and mitigation.",
          "sub": "Chỉ gia hạn khi đã thông báo đúng hạn, chứng minh chậm trên đường găng hiện hành và đã nỗ lực giảm thiểu."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Plus: connection or power sales are not commercial operation or handover.",
          "sub": "Kèm câu: việc đấu nối hay bán điện không cấu thành vận hành thương mại hay bàn giao.",
          "keys": [
            "không cấu thành vận hành thương mại"
          ]
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
            "at": "l4",
            "fit": [
              "j-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "17:30 · Cùng cây bút",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Five"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1255,
            "w": 40,
            "h": 40,
            "at": "l1:closed",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1245,
            "size": 50,
            "at": "l1:closed+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Ngoại lệ đóng + bản vẽ vật nổ",
            "x": 7996,
            "y": 1251,
            "size": 34,
            "at": "l1:closed+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1319,
            "w": 40,
            "h": 40,
            "at": "l1:data",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1309,
            "size": 50,
            "at": "l1:data+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Phụ lục dữ liệu CĐT chịu",
            "x": 7996,
            "y": 1315,
            "size": 34,
            "at": "l1:data+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1383,
            "w": 40,
            "h": 40,
            "at": "l2:drafted",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1373,
            "size": 50,
            "at": "l2:drafted+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "“Như thể tự soạn”",
            "x": 7996,
            "y": 1379,
            "size": 34,
            "at": "l2:drafted+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1447,
            "w": 40,
            "h": 40,
            "at": "l2:grid",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1437,
            "size": 50,
            "at": "l2:grid+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Lưới cũ nằm trong giá",
            "x": 7996,
            "y": 1443,
            "size": 34,
            "at": "l2:grid+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1511,
            "w": 40,
            "h": 40,
            "at": "l3:failure",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1501,
            "size": 50,
            "at": "l3:failure+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Sự kiện “CĐT không hoàn thành”",
            "x": 7996,
            "y": 1507,
            "size": 34,
            "at": "l3:failure+200"
          },
          {
            "id": "j-c5",
            "t": "box",
            "x": 7932,
            "y": 1575,
            "w": 40,
            "h": 40,
            "at": "l3:notes",
            "stroke": 5
          },
          {
            "id": "j-k5",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1565,
            "size": 50,
            "at": "l3:notes+600",
            "color": "accent"
          },
          {
            "id": "j-l5",
            "t": "text",
            "text": "Ghi chú không tạo gia hạn",
            "x": 7996,
            "y": 1571,
            "size": 34,
            "at": "l3:notes+200"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "pen",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l4:pen",
            "caption": "17:30 · cùng phụ lục, cùng ghi chú",
            "icon": "pen"
          },
          {
            "id": "j-p",
            "t": "text",
            "text": "Rủi ro mình kiểm soát:",
            "x": 7932,
            "y": 1660,
            "size": 40,
            "at": "l5:control",
            "color": "accent"
          },
          {
            "id": "j-p2",
            "t": "text",
            "text": "nhận có điều kiện, rẻ hơn",
            "x": 7932,
            "y": 1715,
            "size": 38,
            "at": "l5:cheaper",
            "hl": [
              {
                "text": "rẻ hơn",
                "at": "l5:cheaper"
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
          "say": "Five thirty. Thảo's ready list: closed exceptions with the drawing, an appendix of owner data.",
          "sub": "Năm rưỡi chiều. Danh sách của Thảo: ngoại lệ đóng kèm bản vẽ, phụ lục dữ liệu chủ đầu tư chịu.",
          "keys": [
            "Danh sách của Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Requirements warranted as if drafted, old grid rules in the price.",
          "sub": "Bảo đảm Yêu cầu “như thể tự soạn”, quy định lưới đã ban hành nằm trong giá."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Extension events as owner failure, and schedule notes that create no extension.",
          "sub": "Sự kiện gia hạn dạng “chủ đầu tư không hoàn thành”, và ghi chú tiến độ không tạo quyền gia hạn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Same pen, same note. Now with one more sentence underneath. Then I sign.",
          "sub": "Vẫn cây bút ấy, vẫn ghi chú ấy. Giờ có thêm một câu bên dưới. Rồi mới ký.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And price check: a risk you control better, like your own energising date, may be cheaper to accept with conditions.",
          "sub": "Và nhớ giá: rủi ro mình kiểm soát tốt hơn, như mốc đóng điện của chính mình, nhận có điều kiện đôi khi rẻ hơn.",
          "keys": [
            "nhận có điều kiện"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p21,p22"
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
            "at": "l1:law",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:list",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:note",
            "fit": "I",
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
            "at": "l1:law"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9492,
            "y": 20,
            "at": "l2:list"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 7524,
            "y": 1110,
            "at": "l3:note"
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
          "say": "So: even carries everything must pass the law.",
          "sub": "Tóm lại: câu “nhà thầu chịu hết” vẫn phải qua cửa luật.",
          "keys": [
            "qua cửa luật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Accept data by list, and never freeze the grid code without a date rule.",
          "sub": "Nhận dữ liệu theo danh sách, đừng đóng băng quy chuẩn lưới mà không có mốc.",
          "keys": [
            "theo danh sách"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And a single schedule note is a clause. Read it before the pen moves.",
          "sub": "Và một dòng ghi chú tiến độ cũng là điều khoản. Đọc trước khi đặt bút.",
          "keys": [
            "Đọc trước khi đặt bút"
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
        "q": "A contractor schedule note says dates depend on provisional owner milestones, what should you do before signing?",
        "options": [
          "Add wording that schedule notes create no right to an extension of time",
          "Sign quickly, since notes in appendices are only comments for the site team",
          "Ask the contractor to move the note into an email instead of the appendix"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "pen",
        "why": "Trước khi ký, thêm câu: ghi chú trong tiến độ không tạo quyền gia hạn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A contractor schedule note says dates depend on provisional owner milestones, what should you do before signing?",
          "sub": "Ghi chú trong tiến độ của nhà thầu nói các mốc phụ thuộc mốc tạm của chủ đầu tư, bạn nên làm gì trước khi ký?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Add wording that schedule notes create no right to an extension.",
          "sub": "Thêm câu: ghi chú tiến độ không tạo quyền gia hạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "One note, one clause.",
          "sub": "Một dòng ghi chú, một điều khoản."
        }
      ],
      "ref": "questions[32]"
    },
    {
      "id": "s19",
      "module": "END-05",
      "data": {
        "text": "Tìm mọi ghi chú, mọi ngày đóng băng",
        "sub": "Phụ lục tiến độ, kỹ thuật · bài sau: khiếu nại để bù giá"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, search the schedule and technical appendices for every note and every freeze date.",
          "sub": "Hôm nay, tìm trong phụ lục tiến độ và phụ lục kỹ thuật mọi ghi chú, mọi ngày đóng băng.",
          "keys": [
            "mọi ghi chú, mọi ngày đóng băng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next: how contractors use claims to win back price. Now, forty questions below.",
          "sub": "Bài sau: nhà thầu dùng khiếu nại để bù giá. Giờ thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (đào sâu 1 chuỗi epc-contractor-side) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-22 (câu thoại bị cắt): Dũng cầm bút đọc ghi chú phụ lục tiến độ “…dựa trên mốc tạm của chủ đầu tư. Nếu khác thì…” → Đét “giữ cây bút” → câu nói trọn ở s01 (< 90 s); “Cái kim trong bọc lâu ngày cũng lòi ra” gài ở s01, gọi lại ở ô I (Đét tua nhanh BRK-08: ký lướt → mốc dời → xin gia hạn ngày đổi ngày p18). Dòng thời gian: một thứ Tư (9:00 bút → 9:30 đất dưới móng p3–p5 + Bác Bình gọi → BRK-02 p6 → 10:30 câu giữ rủi ro p7 → 11:00 dữ liệu ai chịu p8–p9, Sam xin ngoại lệ, “Khoan đã!” p10–p11 → 14:00 thay đổi pháp luật, NĐ 210 Điều 18, 01/7/2026 p12–p13 → BRK-07 → 15:00 quy chuẩn lưới trước–sau p14–p15 → 16:00 lưới bên thứ ba p16–p17 → 16:45 cây kim lòi ra, câu giữ p18–p20 → 17:30 danh sách p21 + cái giá p22, cùng bút, cùng ghi chú). Nhân vật theo w145/_series/epc-contractor-side.md: Dũng, Thảo, Bác Bình, Sam. Không nêu tên mẫu hợp đồng/tổ chức soạn mẫu (Silver Book → “mẫu hợp đồng chìa khoá trao tay quốc tế”). Câu đố questions[32]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s00",
    "close": "s16"
  }
};
