// owner-retained-risks--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "owner-retained-risks--w01",
  "unit": {
    "audience": "epc-owner-executive",
    "slug": "owner-retained-risks",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Rủi ro nào chủ đầu tư vẫn phải gánh dù đã thuê EPC trọn gói?",
    "series": "Hợp đồng EPC trên bàn lãnh đạo — cho HĐQT và Ban Tổng Giám đốc, quyết đúng thẩm quyền và không im lặng sai lúc"
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
            "text": "Trọn gói rồi, ngồi chờ?",
            "x": 60,
            "y": 40,
            "size": 76,
            "at": "l1:sit back",
            "hl": [
              {
                "text": "ngồi chờ",
                "at": "l1:wait"
              }
            ]
          },
          {
            "id": "a-ab",
            "t": "box",
            "x": 60,
            "y": 180,
            "w": 760,
            "h": 110,
            "at": "l2:a",
            "stroke": 6
          },
          {
            "id": "a-at",
            "t": "text",
            "text": "A: Ngồi chờ nhận nhà máy",
            "x": 90,
            "y": 205,
            "size": 50,
            "at": "l2:a+200"
          },
          {
            "id": "a-bb",
            "t": "box",
            "x": 60,
            "y": 330,
            "w": 760,
            "h": 110,
            "at": "l2:b",
            "stroke": 6
          },
          {
            "id": "a-bt",
            "t": "text",
            "text": "B: Vẫn gánh vài rủi ro",
            "x": 90,
            "y": 355,
            "size": 50,
            "at": "l2:b+200"
          },
          {
            "id": "a-th",
            "t": "illus",
            "name": "thinking-face",
            "x": 870,
            "y": 230,
            "size": 150,
            "at": "l2:guess"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "You've signed a lump sum EPC. So can the owner just sit back and wait for the plant?",
          "sub": "Bạn đã ký EPC trọn gói. Vậy chủ đầu tư chỉ việc ngồi chờ nhận nhà máy?",
          "keys": [
            "ngồi chờ nhận nhà máy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A: yes, every risk is the contractor's. B: no, the owner still carries some. Your guess?",
          "sub": "A: đúng, mọi rủi ro là của nhà thầu. B: không, chủ đầu tư vẫn gánh vài rủi ro. Bạn đoán?"
        }
      ],
      "beats": {
        "after": 1500
      },
      "sfx": [
        {
          "at": "l2:end",
          "key": "tich-tac-dai"
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
            "at": "l2",
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
            "id": "a-ax",
            "t": "strike",
            "over": "a-at",
            "at": "l1:answer"
          },
          {
            "id": "a-br",
            "t": "ring",
            "around": [
              "a-bt"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l1:answer+400"
          },
          {
            "id": "a-5",
            "t": "text",
            "text": "= 5 rủi ro",
            "x": 60,
            "y": 455,
            "size": 56,
            "at": "l1:five risks",
            "color": "accent"
          },
          {
            "id": "a-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 900,
            "y": 110,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "think"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
                "notebook"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2",
            "caption": "Phòng họp HĐQT · sau phiên ký",
            "icon": "notebook"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Gậy ông đập lưng ông”",
            "x": 60,
            "y": 560,
            "size": 56,
            "at": "l6:stick",
            "color": "accent",
            "hl": [
              {
                "text": "lưng ông",
                "at": "l6:back"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "→ cái chậm của chính mình",
            "x": 60,
            "y": 660,
            "size": 46,
            "at": "l7:own delays"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Most people pick A. The answer is B. Five risks, in fact.",
          "sub": "Đa số chọn A. Đáp án là B. Đúng ra là năm rủi ro.",
          "keys": [
            "năm rủi ro"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Mr Bình, the chairman. He picked A too.",
          "sub": "Đây là bác Bình, Chủ tịch Hội đồng quản trị. Bác cũng chọn A.",
          "keys": [
            "Chủ tịch Hội đồng quản trị"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "We paid lump sum. Surely we just wait for the keys?",
          "sub": "Mình trả tiền trọn gói rồi. Chẳng lẽ không được ngồi chờ nhận chìa khóa?",
          "pose": "think"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And this is Thảo, board secretary, keeper of the risk log.",
          "sub": "Còn đây là Thảo, thư ký Hội đồng quản trị, người giữ sổ rủi ro.",
          "keys": [
            "sổ rủi ro"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "The owner's duties section is short, sir. That's why everyone skims it.",
          "sub": "Thưa bác, mục nghĩa vụ chủ đầu tư ngắn lắm. Nên ai cũng đọc lướt.",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Our elders had a saying: your own stick hits your own back.",
          "sub": "Ông bà có câu: “Gậy ông đập lưng ông.”",
          "keys": [
            "Gậy ông đập lưng ông"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "In EPC, the owner's own delays can hit the owner.",
          "sub": "Trong EPC, cái chậm của chủ đầu tư có thể quay lại đánh chính mình."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "intro,p1"
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
            "text": "Trọn gói, CĐT còn gánh gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:still carry",
            "hl": [
              {
                "text": "còn gánh gì",
                "at": "l1:still carry"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Việc mình gây chậm",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:own tasks"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Mất quyền phạt",
            "x": 2028,
            "y": 260,
            "size": 50,
            "at": "l2:losing",
            "color": "coral"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Thay đổi giữa chừng",
            "x": 2028,
            "y": 350,
            "size": 50,
            "at": "l3:changes"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "④ Thông tin mình cam kết",
            "x": 2868,
            "y": 170,
            "size": 50,
            "at": "l3:information"
          },
          {
            "id": "b-5",
            "t": "text",
            "text": "⑤ Nhà thầu vỡ: bảo lãnh",
            "x": 2868,
            "y": 260,
            "size": 46,
            "at": "l3:collapses",
            "color": "coral"
          },
          {
            "id": "b-log",
            "t": "text",
            "text": "Sổ rủi ro · 7 giai đoạn",
            "x": 2028,
            "y": 520,
            "size": 56,
            "at": "l4:stage by stage",
            "color": "accent",
            "hl": [
              {
                "text": "7 giai đoạn",
                "at": "l4:stage by stage"
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
          "say": "So which risks does the owner still carry after hiring a lump sum EPC contractor?",
          "sub": "Vậy rủi ro nào chủ đầu tư vẫn gánh dù đã thuê EPC trọn gói?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: its own tasks causing delay. Two: losing penalty rights when it delays.",
          "sub": "Một: việc của chính mình gây chậm. Hai: mất quyền phạt khi mình gây chậm.",
          "keys": [
            "mất quyền phạt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: changes midway. Four: information it vouches for. Five: if the contractor collapses, only bonds and insurance.",
          "sub": "Ba: thay đổi giữa chừng. Bốn: thông tin mình cam kết. Năm: nhà thầu vỡ thì chỉ còn bảo lãnh, bảo hiểm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo's risk log through the project, stage by stage.",
          "sub": "Theo sổ rủi ro của Thảo qua từng giai đoạn dự án.",
          "keys": [
            "từng giai đoạn"
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
            "text": "① Trước khi ký · Việc của CĐT",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:owner"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 150,
            "w": 780,
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
                "page-facing-up",
                "high-voltage"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
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
            "at": "l1:stage one",
            "caption": "Trước khi ký · mục nghĩa vụ CĐT",
            "icon": "page-facing-up"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 170,
            "w": 40,
            "h": 40,
            "at": "l2:site",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 152,
            "size": 52,
            "at": "l2:site+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Giao mặt bằng đúng hạn",
            "x": 4060,
            "y": 162,
            "size": 42,
            "at": "l2:site+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 242,
            "w": 40,
            "h": 40,
            "at": "l2:permits",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 224,
            "size": 52,
            "at": "l2:permits+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Giấy phép phần mình",
            "x": 4060,
            "y": 234,
            "size": 42,
            "at": "l2:permits+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 314,
            "w": 40,
            "h": 40,
            "at": "l2:paying",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 296,
            "size": 52,
            "at": "l2:paying+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Thanh toán đúng hạn",
            "x": 4060,
            "y": 306,
            "size": 42,
            "at": "l2:paying+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 386,
            "w": 40,
            "h": 40,
            "at": "l3:import",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 368,
            "size": 52,
            "at": "l3:import+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Ưu đãi thuế nhập khẩu",
            "x": 4060,
            "y": 378,
            "size": 42,
            "at": "l3:import+200"
          },
          {
            "id": "c-c4",
            "t": "box",
            "x": 3996,
            "y": 458,
            "w": 40,
            "h": 40,
            "at": "l3:grid connection",
            "stroke": 5
          },
          {
            "id": "c-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 440,
            "size": 52,
            "at": "l3:grid connection+600",
            "color": "accent"
          },
          {
            "id": "c-l4",
            "t": "text",
            "text": "Đấu nối, trạm (gói riêng)",
            "x": 4060,
            "y": 450,
            "size": 42,
            "at": "l3:grid connection+200"
          },
          {
            "id": "c-grid",
            "t": "text",
            "text": "Lưới = bên thứ ba",
            "x": 3996,
            "y": 540,
            "size": 50,
            "at": "l4:outside",
            "color": "coral",
            "hl": [
              {
                "text": "bên thứ ba",
                "at": "l4:outside"
              }
            ]
          },
          {
            "id": "c-ext",
            "t": "text",
            "text": "CĐT chậm → gia hạn + chi phí chờ",
            "x": 3996,
            "y": 690,
            "size": 44,
            "at": "l5:standby",
            "hl": [
              {
                "text": "chi phí chờ",
                "at": "l5:standby"
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
          "say": "Stage one, before signing. Thảo reads the owner's duties. Short, easy to skim.",
          "sub": "Giai đoạn một, trước khi ký. Thảo đọc mục nghĩa vụ chủ đầu tư. Ngắn, nên dễ đọc lướt.",
          "keys": [
            "dễ đọc lướt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The duties that delay most: handing over the site, the owner's permits, paying on time,",
          "sub": "Những nghĩa vụ hay gây chậm nhất: giao mặt bằng, xin giấy phép phần mình, thanh toán đúng hạn,"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "the import tax incentive, and the grid connection, if it's a separate package.",
          "sub": "lo ưu đãi thuế nhập khẩu của dự án, và phần đấu nối, trạm biến áp nếu là gói riêng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Grid connection is special: it depends on the power buyer and grid operator, outside the EPC.",
          "sub": "Đấu nối là rủi ro đặc thù: đóng điện, thử, công nhận COD phụ thuộc Bên mua điện, Đơn vị vận hành lưới, bên thứ ba ngoài EPC.",
          "keys": [
            "bên thứ ba"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Owner late here? The contractor usually gets more time, maybe standby costs too.",
          "sub": "Chủ đầu tư chậm phần này? Nhà thầu thường được gia hạn, có thể cả chi phí chờ.",
          "keys": [
            "chi phí chờ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Tax incentive lost over paperwork? The tax and customs delay may land on the owner.",
          "sub": "Ưu đãi thuế bị thu hồi do lỗi giấy tờ? Thuế và thời gian thông quan có thể quay về chủ đầu tư."
        }
      ],
      "ref": "p1,p2,p3"
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
            "at": 150,
            "fit": "D",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Bàn ký · Danh mục gia hạn",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:signing table"
          },
          {
            "id": "d-bf",
            "t": "text",
            "text": "Trước: “Đóng điện trạm trước ngày [ ]”",
            "x": 5964,
            "y": 170,
            "size": 44,
            "at": "l2:draft",
            "color": "muted"
          },
          {
            "id": "d-bfx",
            "t": "strike",
            "over": "d-bf",
            "at": "l3:general duty"
          },
          {
            "id": "d-bfw",
            "t": "text",
            "text": "→ nghĩa vụ chung: gia hạn khi nào?",
            "x": 6004,
            "y": 245,
            "size": 40,
            "at": "l3:nobody knows",
            "color": "coral"
          },
          {
            "id": "d-af",
            "t": "text",
            "text": "Sau: CĐT không đóng điện trước [ ]",
            "x": 5964,
            "y": 340,
            "size": 44,
            "at": "l4:names the event",
            "color": "accent"
          },
          {
            "id": "d-af1",
            "t": "text",
            "text": "• sự kiện",
            "x": 6004,
            "y": 415,
            "size": 42,
            "at": "l4:event"
          },
          {
            "id": "d-af2",
            "t": "text",
            "text": "• mốc (hoặc ngày thỏa thuận sau)",
            "x": 6004,
            "y": 475,
            "size": 42,
            "at": "l4:date"
          },
          {
            "id": "d-af3",
            "t": "text",
            "text": "• trừ phần do Nhà thầu gây ra",
            "x": 6004,
            "y": 535,
            "size": 42,
            "at": "l4:exception",
            "hl": [
              {
                "text": "trừ phần",
                "at": "l4:exception"
              }
            ]
          },
          {
            "id": "d-take",
            "t": "text",
            "text": "Sự kiện có ngày, có phần trừ",
            "x": 5964,
            "y": 650,
            "size": 46,
            "at": "l5:events",
            "color": "accent",
            "hl": [
              {
                "text": "có phần trừ",
                "at": "l5:exceptions"
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
          "say": "Stage two, the signing table. The list of grounds for extension.",
          "sub": "Giai đoạn hai, bàn ký. Danh mục nguyên nhân được gia hạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The draft says: the substation must be energised before a date. Sounds fine?",
          "sub": "Bản nháp ghi: việc đóng điện trạm biến áp phải hoàn thành trước ngày [ ]. Nghe ổn?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It reads like a general duty, so nobody knows when time is extended.",
          "sub": "Viết như một nghĩa vụ chung, nên không rõ khi nào nhà thầu được gia hạn.",
          "keys": [
            "không rõ khi nào"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The better version names the event, the date, and an exception for the contractor's own part.",
          "sub": "Bản sau nêu sự kiện, mốc, và phần trừ khi việc đó do Nhà thầu gây ra.",
          "keys": [
            "phần trừ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Lesson: write your own tasks as events, with dates and exceptions.",
          "sub": "Rút ra: việc của mình phải viết thành sự kiện có ngày, có phần trừ.",
          "keys": [
            "sự kiện có ngày"
          ]
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s05",
      "module": "BRK-07",
      "data": {
        "question": "Mình gây chậm, còn được phạt nhà thầu không?",
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
          "say": "If you cause the delay, can you still charge penalties?",
          "sub": "Mình gây chậm, còn được phạt nhà thầu không?",
          "keys": [
            "còn được phạt"
          ]
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
            "fit": "D",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "E",
            "ms": 900
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
            "at": "l4",
            "fit": "E",
            "ms": 700
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
            "at": "l6",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Mặt bằng · Chậm vị trí móng",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:site clearance"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 8772,
            "y": 150,
            "w": 780,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold",
                  "face": "worried"
                }
              ],
              "props": [
                "construction",
                "envelope"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:foundation",
            "caption": "Giải phóng mặt bằng · công trường",
            "icon": "construction"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Nhà thầu: thông báo đúng hạn",
            "x": 7932,
            "y": 170,
            "size": 44,
            "at": "l3:notice"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Vị trí trên đường găng",
            "x": 7932,
            "y": 240,
            "size": 44,
            "at": "l3:critical path",
            "hl": [
              {
                "text": "đường găng",
                "at": "l3:critical path"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Ban điều hành: im lặng",
            "x": 7932,
            "y": 310,
            "size": 44,
            "at": "l4:reply",
            "color": "coral"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Trễ mốc → thư đòi phạt",
            "x": 7932,
            "y": 380,
            "size": 44,
            "at": "l4:penalty letter"
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "“CĐT tự gây chậm: hết quyền phạt”",
            "x": 7932,
            "y": 460,
            "size": 40,
            "at": "l5:caused",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stage three, site clearance. The owner is late clearing one foundation spot.",
          "sub": "Giai đoạn ba, giải phóng mặt bằng. Chủ đầu tư chậm giao một vị trí móng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Sam, the contractor's commercial lead. Polite, and very good at notices.",
          "sub": "Đây là Sam, trưởng nhóm thương mại của nhà thầu. Lịch sự, và rất giỏi gửi thông báo.",
          "keys": [
            "rất giỏi gửi thông báo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Notice on time: that spot is on the critical path. We request an extension.",
          "sub": "Thông báo đúng hạn: vị trí đó nằm trên đường găng. Chúng tôi đề nghị gia hạn.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No reply from management. When the date slips, they send a penalty letter.",
          "sub": "Ban điều hành không trả lời. Đến khi trễ mốc thì gửi thư đòi phạt chậm."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "You caused the delay. You no longer have the right to penalise us.",
          "sub": "Chính chủ đầu tư gây chậm. Các vị không còn quyền phạt chúng tôi."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Your own stick, your own back.",
          "sub": "Gậy ông đập lưng ông.",
          "keys": [
            "Gậy ông đập lưng ông"
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
      "ref": "p8"
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
          }
        ],
        "items": [
          {
            "id": "e-pp",
            "t": "text",
            "text": "Nguyên tắc ngăn cản → mốc bỏ ngỏ",
            "x": 7932,
            "y": 690,
            "size": 44,
            "at": "l1:prevention",
            "color": "coral",
            "hl": [
              {
                "text": "mốc bỏ ngỏ",
                "at": "l1:left open"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Thực tiễn tòa, trọng tài VN: cần kiểm",
            "x": 8772,
            "y": 690,
            "size": 28,
            "at": "l2:practice",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-src2",
            "t": "text",
            "text": "NĐ 210/2026 Điều 18 · luật dân sự: lỗi bên có quyền",
            "x": 8772,
            "y": 730,
            "size": 28,
            "at": "l3:civil",
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
          "say": "International practice calls it the prevention principle. The completion date may be left open.",
          "sub": "Thông lệ quốc tế gọi là nguyên tắc ngăn cản. Mốc hoàn thành có thể bị coi là bỏ ngỏ.",
          "keys": [
            "nguyên tắc ngăn cản"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then no daily penalties, just completion in a reasonable time. Vietnamese practice needs checking.",
          "sub": "Khi đó mất căn cứ phạt theo ngày, chỉ còn đòi hoàn thành trong thời gian hợp lý. Thực tiễn Việt Nam cần kiểm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Civil law can also cut liability caused by the other side. Decree two ten wants risk duties spelled out.",
          "sub": "Luật dân sự cũng có quy định giảm, loại trừ trách nhiệm khi do lỗi bên có quyền. Nghị định 210/2026 yêu cầu thỏa thuận cụ thể trách nhiệm xử lý rủi ro."
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
            "text": "Giữ quyền phạt",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:extend"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Gia hạn đúng phần mình",
            "x": 60,
            "y": 1250,
            "size": 54,
            "at": "l1:your part",
            "color": "accent",
            "hl": [
              {
                "text": "đúng phần mình",
                "at": "l1:your part"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "• Danh mục gia hạn có việc CĐT",
            "x": 60,
            "y": 1350,
            "size": 42,
            "at": "l2:grounds"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "• Quyền CĐT tự gia hạn",
            "x": 60,
            "y": 1420,
            "size": 42,
            "at": "l2:own right"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "• Câu chống “bỏ ngỏ”",
            "x": 60,
            "y": 1490,
            "size": 42,
            "at": "l3:time at large",
            "hl": [
              {
                "text": "chống “bỏ ngỏ”",
                "at": "l3:time at large"
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
          "say": "Lesson: when you cause delay, extend time for your part, to keep penalties for the rest.",
          "sub": "Rút ra: mình gây chậm thì gia hạn đúng phần mình, để giữ quyền phạt phần còn lại.",
          "keys": [
            "gia hạn đúng phần mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two tools: owner delays listed as extension grounds, and the owner's own right to extend.",
          "sub": "Hai công cụ: danh mục gia hạn có cả việc chậm của chủ đầu tư, và quyền chủ đầu tư tự gia hạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Plus an anti time at large clause: a pending or disputed extension leaves no date open.",
          "sub": "Kèm câu chống “bỏ ngỏ”: chưa gia hạn hay đang tranh chấp gia hạn không làm mốc hoàn thành bị bỏ ngỏ.",
          "keys": [
            "chống “bỏ ngỏ”"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s09",
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
            "at": "l2",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t2",
            "t": "text",
            "text": "④ Giữa dự án · Đổi thiết bị",
            "x": 60,
            "y": 1590,
            "size": 50,
            "at": "l1:mid project"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 900,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "point"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "construction",
                "gear"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                }
              ]
            },
            "at": "l1:visits",
            "caption": "Giữa dự án · cô Hoa xuống công trường",
            "icon": "gear"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stage four, mid project. Ms Hoa, the CEO, visits the site. Decisive as ever.",
          "sub": "Giai đoạn bốn, giữa dự án. Cô Hoa, Tổng Giám đốc, xuống công trường. Dứt khoát như mọi khi.",
          "keys": [
            "Tổng Giám đốc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "I want a different type of auxiliary equipment. Faster to just say it here.",
          "sub": "Cô muốn đổi loại thiết bị phụ. Nói luôn ở đây cho nhanh.",
          "pose": "point"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "street",
        "label": "Giữa dự án · công trường",
        "actors": [
          {
            "id": "hoa",
            "side": "center",
            "pose": "point"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nói miệng với chỉ huy công trường",
          "why": "Nhà thầu làm theo, rồi khiếu nại chi phí và gia hạn, viện dẫn “tăng tốc ngầm” và chỉ thị của chủ đầu tư.",
          "rule": "Hỏi giá trước, ký văn bản sau"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Tell your site manager to switch it now. Right, that's it!",
          "sub": "Bảo chỉ huy công trường đổi luôn. Rồi, vậy nha!",
          "pose": "point",
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
          "say": "They follow it. Then a claim for cost and time arrives, citing implied acceleration.",
          "sub": "Nhà thầu làm theo, rồi gửi khiếu nại chi phí và gia hạn, viện dẫn “tăng tốc ngầm”.",
          "keys": [
            "tăng tốc ngầm"
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
          "who": "hoa",
          "say": "Send me a variation proposal with price and schedule impact. Then I sign in writing.",
          "sub": "Gửi cô đề xuất thay đổi có giá và ảnh hưởng tiến độ. Rồi cô ký chỉ thị bằng văn bản.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Weeks slower, but you know the cost before you decide.",
          "sub": "Chậm hơn vài tuần, nhưng biết cái giá trước khi quyết.",
          "phase": "redo",
          "keys": [
            "biết cái giá trước khi quyết"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p12,p13"
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
          }
        ],
        "items": [
          {
            "id": "f-vo",
            "t": "text",
            "text": "Đổi yêu cầu = mở cửa đòi tiền",
            "x": 60,
            "y": 1670,
            "size": 42,
            "at": "l1:door",
            "color": "coral"
          },
          {
            "id": "f-dd",
            "t": "text",
            "text": "Phát triển thiết kế ≠ Thay đổi",
            "x": 60,
            "y": 1730,
            "size": 42,
            "at": "l2:design development"
          },
          {
            "id": "f-gr",
            "t": "text",
            "text": "Quy chuẩn lưới “đóng băng” ngày ký?",
            "x": 900,
            "y": 1770,
            "size": 40,
            "at": "l3:frozen",
            "color": "coral",
            "hl": [
              {
                "text": "“đóng băng”",
                "at": "l3:frozen"
              }
            ]
          },
          {
            "id": "f-take",
            "t": "text",
            "text": "Hỏi giá trước, ký văn bản sau",
            "x": 60,
            "y": 1795,
            "size": 46,
            "at": "l4:price first",
            "color": "accent",
            "hl": [
              {
                "text": "Hỏi giá trước",
                "at": "l4:price first"
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
          "say": "Every owner change opens a door to money and time: new items, equipment, locations.",
          "sub": "Mỗi lần chủ đầu tư đổi yêu cầu là mở cửa đòi thêm tiền và thời gian: thêm hạng mục, đổi thiết bị, đổi vị trí."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Normal design development is not a variation.",
          "sub": "Phát triển thiết kế thông thường thì không phải Thay đổi.",
          "keys": [
            "không phải Thay đổi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Another door: grid rules missing from the owner's requirements, or grid codes frozen at signing.",
          "sub": "Một cửa khác: yêu cầu của Bên mua điện chưa vào Yêu cầu của chủ đầu tư, hay quy chuẩn lưới bị “đóng băng” ngày ký."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lesson: change your mind? Ask the price first, sign in writing after.",
          "sub": "Rút ra: đổi ý thì hỏi giá trước, ký văn bản sau.",
          "keys": [
            "hỏi giá trước, ký văn bản sau"
          ]
        }
      ],
      "ref": "p11,p13,p14"
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
            "text": "⑤ Đào móng · Dữ liệu cam kết",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:digging"
          },
          {
            "id": "g-ic",
            "t": "illus",
            "name": "building-construction",
            "x": 3418,
            "y": 1240,
            "size": 160,
            "at": "l1:digging"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "CĐT không bảo đảm thông tin…",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l2:guarantee"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "…trừ gian lận, phần mình nhận",
            "x": 2028,
            "y": 1335,
            "size": 46,
            "at": "l2:except",
            "color": "coral",
            "hl": [
              {
                "text": "phần mình nhận",
                "at": "l2:accepts"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "dữ liệu gió, ranh giới công trường",
            "x": 2028,
            "y": 1410,
            "size": 40,
            "at": "l2:wind data"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Lãnh đạo biết mình cam kết gì",
            "x": 2028,
            "y": 1490,
            "size": 50,
            "at": "l3:vouch",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stage five, digging foundations. Who answers for the data the owner supplied?",
          "sub": "Giai đoạn năm, đào móng. Dữ liệu chủ đầu tư cung cấp, sai thì ai chịu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Many contracts say the owner doesn't guarantee its data, except fraud and what it accepts, like wind data.",
          "sub": "Nhiều hợp đồng ghi chủ đầu tư không bảo đảm thông tin mình cung cấp, trừ gian lận và phần mình nhận, như dữ liệu gió."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Accepted data that's wrong is the owner's problem. Leaders should know which data they vouch for.",
          "sub": "Phần đã nhận mà sai thì chủ đầu tư chịu. Lãnh đạo nên biết mình đang cam kết những dữ liệu nào.",
          "keys": [
            "cam kết những dữ liệu nào"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Nền đất bất thường: ai chịu?",
        "wrong": "Mẫu Silver: nhà thầu chịu hết nền đất",
        "right": "Luật VN: có thể là hoàn cảnh thay đổi cơ bản",
        "wrongIllus": "page-facing-up",
        "rightIllus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Silver form: contractor takes ground risk?",
          "sub": "Mẫu Silver: nhà thầu chịu hết nền đất?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Our law may see a fundamental change.",
          "sub": "Luật VN: có thể là hoàn cảnh thay đổi cơ bản.",
          "keys": [
            "hoàn cảnh thay đổi cơ bản"
          ]
        }
      ],
      "ref": "p16"
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
          }
        ],
        "items": [
          {
            "id": "g-src",
            "t": "text",
            "text": "Luật Xây dựng 2025, Điều 13: địa chất bất thường không lường trước được",
            "x": 2028,
            "y": 1580,
            "size": 28,
            "at": "l1",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-cf",
            "t": "text",
            "text": "Mẫu Silver tại VN: dễ xung đột",
            "x": 2028,
            "y": 1635,
            "size": 44,
            "at": "l1:clash",
            "color": "coral",
            "hl": [
              {
                "text": "xung đột",
                "at": "l1:clash"
              }
            ]
          },
          {
            "id": "g-take",
            "t": "text",
            "text": "Nền đất: để luật sư đọc",
            "x": 2028,
            "y": 1770,
            "size": 40,
            "at": "l2:lawyer",
            "color": "accent",
            "hl": [
              {
                "text": "luật sư đọc",
                "at": "l2:lawyer"
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
          "say": "So a Silver Book contract signed in Vietnam may clash here. Get a lawyer's view, don't assume.",
          "sub": "Hợp đồng theo mẫu Silver ký tại Việt Nam có thể xung đột ở điểm này. Cần luật sư đánh giá, đừng mặc định."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lesson: underground risk needs a lawyer's reading, not a template's promise.",
          "sub": "Rút ra: rủi ro dưới lòng đất phải được luật sư đọc, không chỉ được mẫu hợp đồng hứa.",
          "keys": [
            "luật sư đọc"
          ]
        }
      ],
      "ref": "p16,p17"
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
            "at": "l4",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
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
            "text": "⑥ Nhà thầu vỡ · Bảo lãnh",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:insolvent"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "bank",
                "hourglass-done"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:advance",
            "caption": "Nhà thầu mất khả năng thanh toán",
            "icon": "bank"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Kiện tụng: chậm",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l2:lawsuits",
            "color": "muted"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Tiền thật: bảo lãnh ngân hàng",
            "x": 3996,
            "y": 1320,
            "size": 46,
            "at": "l2:reserve",
            "color": "accent",
            "hl": [
              {
                "text": "bảo lãnh ngân hàng",
                "at": "l2:guarantee"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Trả ngay khi yêu cầu",
            "x": 3996,
            "y": 1400,
            "size": 44,
            "at": "l3:on demand"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Không hủy ngang · không xét tranh chấp",
            "x": 3996,
            "y": 1470,
            "size": 38,
            "at": "l3:irrevocable"
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "Vì sao từ chối? Hết hạn!",
            "x": 3996,
            "y": 1560,
            "size": 50,
            "at": "l5:expired",
            "color": "coral",
            "hl": [
              {
                "text": "Hết hạn!",
                "at": "l5:expired"
              }
            ]
          },
          {
            "id": "h-6",
            "t": "text",
            "text": "Gia hạn trước [ ] ngày, không thì rút",
            "x": 3996,
            "y": 1780,
            "size": 44,
            "at": "l6:renewal"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stage six. The contractor takes the advance, then goes insolvent.",
          "sub": "Giai đoạn sáu. Nhà thầu nhận tạm ứng rồi mất khả năng thanh toán."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lawsuits are slow. The real reserve is the bank guarantee.",
          "sub": "Kiện tụng mất thời gian. Tiền dự phòng thật là bảo lãnh: ngân hàng cam kết trả thay.",
          "keys": [
            "Tiền dự phòng thật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Usually on demand and irrevocable: the bank pays when asked, no dispute review.",
          "sub": "Loại hay dùng: trả ngay khi yêu cầu, không hủy ngang. Ngân hàng trả khi chủ đầu tư đòi, không xét tranh chấp.",
          "keys": [
            "trả ngay khi yêu cầu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I called the advance payment guarantee. The bank refused!",
          "sub": "Em đã đòi bảo lãnh tạm ứng. Ngân hàng từ chối!",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Why? It had expired. The first term was short, and nobody tracked it.",
          "sub": "Vì sao? Bảo lãnh đã hết hạn. Thời hạn ban đầu ngắn, mà không ai theo dõi.",
          "keys": [
            "không ai theo dõi"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A good contract forces renewal before expiry, or the owner draws it all.",
          "sub": "Hợp đồng tốt bắt nhà thầu gia hạn trước hạn [ ] ngày làm việc; không thì chủ đầu tư rút toàn bộ, giữ tiền làm bảo đảm."
        }
      ],
      "ref": "p18,p20"
    },
    {
      "id": "s16",
      "module": "BRK-10",
      "data": {
        "quote": "Bảo lãnh chỉ là tiền khi còn hạn và có người theo dõi hạn",
        "mark": "còn hạn",
        "by": "Rút ra",
        "illus": "hourglass-not-done"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A guarantee is only cash while it's valid, and someone's watching the date.",
          "sub": "Bảo lãnh chỉ là tiền khi còn hạn và có người theo dõi hạn.",
          "keys": [
            "còn hạn"
          ]
        }
      ],
      "ref": "p21"
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
          }
        ],
        "items": [
          {
            "id": "h-src",
            "t": "text",
            "text": "NĐ 210/2026 Đ13: 2%–10% chỉ đầu tư công, PPP",
            "x": 3996,
            "y": 1640,
            "size": 28,
            "at": "l1",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "h-ask",
            "t": "text",
            "text": "Đủ chưa? Ngân hàng mạnh? Hạn?",
            "x": 3996,
            "y": 1690,
            "size": 40,
            "at": "l2:enough",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The two to ten percent security in Decree two ten is for public and PPP projects. Private ones negotiate.",
          "sub": "Mức bảo đảm 2%–10% ở Điều 13 Nghị định 210/2026 chỉ cho đầu tư công, PPP; vốn tư nhân tự thỏa thuận.",
          "keys": [
            "vốn tư nhân tự thỏa thuận"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask: are advance, performance and warranty bonds enough? Is the bank strong? Valid until when?",
          "sub": "Hỏi: bảo lãnh tạm ứng, thực hiện, bảo hành có đủ? Ngân hàng phát hành đủ mạnh? Hiệu lực đến khi nào?"
        }
      ],
      "ref": "p19"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Rà bảo hiểm · Lớp thứ hai",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:second"
          },
          {
            "id": "i-um",
            "t": "illus",
            "name": "umbrella",
            "x": 7354,
            "y": 1240,
            "size": 160,
            "at": "l1:safety net"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Bảo hiểm công trình: CĐT mua",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l2:owner"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "(hoặc giao nhà thầu mua)",
            "x": 5964,
            "y": 1330,
            "size": 40,
            "at": "l2:contractor",
            "color": "muted"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Luật Xây dựng 2025, Điều 10 · NĐ 67/2023 sửa bởi NĐ 220/2026, hiệu lực 01/7/2026",
            "x": 5964,
            "y": 1400,
            "size": 28,
            "at": "l3",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "DSU: bù doanh thu khi chậm",
            "x": 5964,
            "y": 1460,
            "size": 50,
            "at": "l4:start up",
            "color": "accent",
            "hl": [
              {
                "text": "bù doanh thu",
                "at": "l4:lost revenue"
              }
            ]
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "do sự cố được bảo hiểm",
            "x": 5964,
            "y": 1540,
            "size": 42,
            "at": "l4:insured"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stage seven. Insurance, the second safety net.",
          "sub": "Giai đoạn bảy. Bảo hiểm, lớp dự phòng thứ hai.",
          "keys": [
            "lớp dự phòng thứ hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The Construction Law has the owner buy construction insurance, or hand that to the contractor.",
          "sub": "Luật Xây dựng 2025 giao chủ đầu tư mua bảo hiểm công trình trong thời gian xây dựng, và cho phép giao nhà thầu mua."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Decree sixty-seven was amended by Decree two twenty, in force from the first of July.",
          "sub": "Nghị định 67/2023 đã được sửa bởi Nghị định 220/2026, hiệu lực 01/7/2026."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Delay in start up cover pays lost revenue when an insured event delays operation.",
          "sub": "Bảo hiểm chậm khởi động (DSU) bù doanh thu mất khi dự án chậm vận hành do sự cố được bảo hiểm.",
          "keys": [
            "chậm khởi động"
          ]
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s19",
      "module": "BRK-11",
      "data": {
        "title": "Sổ theo dõi của Thảo",
        "items": [
          "Ai mua bảo hiểm, ai được bảo hiểm?",
          "Bảo lãnh nào hết hạn khi nào?",
          "Ngân hàng phát hành là ai?",
          "Ai theo dõi hạn, báo trước bao lâu?"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Four: who tracks dates, how early?",
          "sub": "Bốn: ai theo dõi hạn, báo trước bao lâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Three: which bank issued it?",
          "sub": "Ba: ngân hàng phát hành là ai?"
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Two: which bond expires when?",
          "sub": "Hai: bảo lãnh nào hết hạn khi nào?"
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "One: who buys cover, who's insured?",
          "sub": "Một: ai mua bảo hiểm, ai được bảo hiểm?",
          "keys": [
            "ai được bảo hiểm"
          ]
        }
      ],
      "ref": "p23"
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
          }
        ],
        "items": [
          {
            "id": "i-lend",
            "t": "text",
            "text": "CĐT, bên vay: bảo hiểm bổ sung?",
            "x": 5964,
            "y": 1650,
            "size": 40,
            "at": "l1:additional"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And are the owner and lenders named as additional insureds? Lenders will ask.",
          "sub": "Và chủ đầu tư, bên cho vay có là người được bảo hiểm bổ sung không? Bên cho vay sẽ hỏi.",
          "keys": [
            "người được bảo hiểm bổ sung"
          ]
        }
      ],
      "ref": "p23"
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
            "at": "l5",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Trở lại phòng họp HĐQT",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:board room"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "notebook",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:board room",
            "caption": "Phòng họp HĐQT · cùng câu hỏi",
            "icon": "notebook"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Việc mình có ngày",
            "x": 7932,
            "y": 1250,
            "size": 42,
            "at": "l3:dated"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Gia hạn đúng phần",
            "x": 7932,
            "y": 1310,
            "size": 42,
            "at": "l3:fair"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Đổi ý bằng văn bản",
            "x": 7932,
            "y": 1370,
            "size": 42,
            "at": "l3:written"
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "Biết dữ liệu mình cam kết",
            "x": 7932,
            "y": 1430,
            "size": 42,
            "at": "l3:data"
          },
          {
            "id": "j-5",
            "t": "text",
            "text": "Theo dõi hạn bảo lãnh, bảo hiểm",
            "x": 7932,
            "y": 1490,
            "size": 40,
            "at": "l3:tracked"
          },
          {
            "id": "j-do",
            "t": "text",
            "text": "Liệt kê nghĩa vụ CĐT + hạn",
            "x": 7932,
            "y": 1570,
            "size": 44,
            "at": "l4:every owner duty",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Gậy ông… ghi vào lịch",
            "x": 7932,
            "y": 1660,
            "size": 52,
            "at": "l5:calendar",
            "color": "accent",
            "hl": [
              {
                "text": "ghi vào lịch",
                "at": "l5:calendar"
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
          "say": "Back to the board room, and the opening question.",
          "sub": "Trở lại phòng họp Hội đồng, với câu hỏi lúc đầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "So, lump sum, and we just wait?",
          "sub": "Vậy trọn gói rồi, mình cứ ngồi chờ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "No, sir. Five habits: dated duties, fair extensions, written changes, known data, tracked bonds.",
          "sub": "Dạ không. Năm thói quen: việc mình có ngày, gia hạn đúng phần, đổi ý bằng văn bản, biết dữ liệu mình cam kết, theo dõi hạn bảo lãnh, bảo hiểm.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Good. Have the project team list every owner duty with its deadline.",
          "sub": "Tốt. Bảo quản lý dự án liệt kê mọi nghĩa vụ của chủ đầu tư, kèm hạn.",
          "keys": [
            "kèm hạn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Your own stick hits your own back. Unless you put that stick on your calendar.",
          "sub": "“Gậy ông đập lưng ông.” Trừ khi ông ghi cây gậy ấy vào lịch.",
          "keys": [
            "ghi cây gậy ấy vào lịch"
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
            "at": "l1:duties",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:extend",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:bonds",
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
            "x": 7504,
            "y": 20,
            "at": "l1:duties+700"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1600,
            "y": 1110,
            "at": "l2:extend+700"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5536,
            "y": 1110,
            "at": "l3:bonds+700"
          },
          {
            "id": "z-src1",
            "t": "text",
            "text": "Bài để tham khảo chung, không phải tư vấn pháp lý; tình huống là minh hoạ, không lấy từ hợp đồng hay dự án cụ thể nào.",
            "x": 7932,
            "y": 1775,
            "size": 24,
            "at": "l3:end",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "z-src2",
            "t": "text",
            "text": "Trước mỗi quyết định, nhờ pháp chế kiểm văn bản hiện hành.",
            "x": 7932,
            "y": 1812,
            "size": 24,
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
          "say": "So: give your own duties dates. Lump sum is not a waiting room.",
          "sub": "Tóm lại: việc mình phải có ngày. Trọn gói không phải phòng chờ.",
          "keys": [
            "không phải phòng chờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Extend fairly to keep penalties, and change only in writing.",
          "sub": "Gia hạn đúng phần để giữ quyền phạt, đổi ý bằng văn bản."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Know your data, watch your bonds. General information only, not legal advice.",
          "sub": "Biết dữ liệu mình cam kết, canh hạn bảo lãnh. Bài là kiến thức chung, không phải tư vấn pháp lý.",
          "keys": [
            "canh hạn bảo lãnh"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "data": {
        "q": "The contractor collapses and the bank refuses the advance payment guarantee, why might that be?",
        "options": [
          "The bank always refuses the first call, so the owner must try again next month",
          "The guarantee had expired, because its first term was short and nobody tracked it",
          "The guarantee covered only design work, so it could never be called"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "hourglass-done",
        "why": "Trong bài thử nghĩ, bảo lãnh đã hết hạn vì thời hạn ban đầu ngắn và không ai theo dõi. Hợp đồng tốt bắt nhà thầu gia hạn trước hạn, nếu không thì chủ đầu tư được rút toàn bộ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The contractor collapses and the bank refuses the advance payment guarantee, why might that be?",
          "sub": "Nhà thầu sụp đổ và ngân hàng từ chối trả bảo lãnh tạm ứng, vì sao có thể như vậy?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "It had expired. The first term was short, and nobody tracked it.",
          "sub": "Bảo lãnh đã hết hạn: thời hạn ban đầu ngắn, không ai theo dõi."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[31]"
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Right now: ask the project team to list every owner duty, with its deadline.",
          "sub": "Việc làm ngay: yêu cầu quản lý dự án liệt kê mọi nghĩa vụ của chủ đầu tư, kèm hạn.",
          "keys": [
            "kèm hạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: who may approve this contract. Now, forty questions below!",
          "sub": "Bài sau: ai có quyền duyệt hợp đồng EPC này. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-21",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-21 (câu hỏi để đoán sai): “Trọn gói rồi, chủ đầu tư chỉ việc ngồi chờ?” A/B, lặng 1,5 s, lật: B — năm rủi ro; bác Bình cũng chọn A. Dòng thời gian: SỔ RỦI RO CỦA THẢO QUA BẢY GIAI ĐOẠN (① trước khi ký: nghĩa vụ CĐT p1–p3 → ② bàn ký: danh mục gia hạn trước/sau p4–p5 → ③ giải phóng mặt bằng: chậm vị trí móng, Sam “hết quyền phạt” p6–p8, công cụ giữ quyền phạt p9–p10 → ④ giữa dự án: “Khoan đã!” cô Hoa nói miệng đổi thiết bị p11–p14 → ⑤ đào móng: dữ liệu mình cam kết, Silver vs Điều 13 LXD p15–p17 → ⑥ nhà thầu vỡ: bảo lãnh hết hạn p18–p21 → ⑦ rà bảo hiểm p22–p23 → trở lại phòng họp HĐQT, cùng câu hỏi: khép vòng, outro). Nhân vật (w145/_series/epc-owner-executive.md): bác Bình (Chủ tịch), Thảo (thư ký HĐQT), Sam (nhà thầu), cô Hoa (Tổng Giám đốc). Tục ngữ mở/khép: “Gậy ông đập lưng ông” → “trừ khi ghi cây gậy vào lịch”. BRK: 07 (rehook mình gây chậm còn phạt?), 04 (nền đất Silver vs luật VN p16), 10 (bảo lãnh còn hạn p21), 11 (sổ theo dõi p23). Không tên dự án/công ty/ngân hàng/hãng luật/hợp đồng thật; mẫu FIDIC → “mẫu Silver Book”. Số chỉ lấy từ bài: NĐ 210/2026 Đ13 2%–10%, Đ18; LXD 2025 Đ10, Đ13; NĐ 67/2023, NĐ 220/2026, 01/7/2026; [ ] ngày. Câu đố questions[31].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
