// milestone-payment-file--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "milestone-payment-file--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "epc-finance",
    "slug": "milestone-payment-file",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Hồ sơ thanh toán theo mốc gồm gì và khi nào được từ chối trả?",
    "series": "Dòng tiền và bảo đảm trong hợp đồng EPC — cho tài chính kế toán, trả đúng mốc và không để bảo lãnh nào hết hạn"
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
              "a-file"
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
            "id": "a-file",
            "t": "illus",
            "name": "open-file-folder",
            "x": 120,
            "y": 90,
            "size": 300,
            "at": 0
          },
          {
            "id": "a-lbl",
            "t": "text",
            "text": "Lệnh Thanh toán",
            "x": 450,
            "y": 140,
            "size": 64,
            "at": "l1:payment",
            "hl": [
              {
                "text": "Lệnh Thanh toán",
                "at": "l1:payment"
              }
            ]
          },
          {
            "id": "a-lbl2",
            "t": "text",
            "text": "Mốc: giao thiết bị tới cảng",
            "x": 450,
            "y": 230,
            "size": 44,
            "at": "l1:milestone",
            "color": "muted"
          },
          {
            "id": "a-two",
            "t": "text",
            "text": "Trả sớm? Trả muộn?",
            "x": 120,
            "y": 470,
            "size": 56,
            "at": "l3:early",
            "color": "coral",
            "hl": [
              {
                "text": "Trả muộn?",
                "at": "l3:late"
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
          "say": "A thin folder. A payment order for one milestone: main equipment delivered to port.",
          "sub": "Một tập hồ sơ mỏng. Lệnh Thanh toán cho một mốc: giao thiết bị chính tới cảng.",
          "keys": [
            "Lệnh Thanh toán"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It lands on a desk on the worst possible Monday.",
          "sub": "Nó hạ cánh xuống bàn đúng vào sáng thứ Hai tệ nhất."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pay too early, or reply too late? Both cost money.",
          "sub": "Trả quá sớm, hay trả lời quá muộn? Cả hai đều tốn tiền.",
          "keys": [
            "trả lời quá muộn"
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
            "x": 900,
            "y": 330,
            "w": 640,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "face": "worried",
                  "pose": "think"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "give",
                  "face": "happy"
                }
              ],
              "props": [
                "open-file-folder",
                "ledger"
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
            "caption": "Sáng thứ Hai · tuần khoá sổ quý",
            "icon": "ledger"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Chậm mà chắc”?",
            "x": 120,
            "y": 590,
            "size": 56,
            "at": "l5:steady",
            "color": "accent",
            "hl": [
              {
                "text": "Chậm mà chắc",
                "at": "l5:steady"
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
          "say": "Whose desk? Thảo's, the owner's finance officer. And it's quarter closing week.",
          "sub": "Bàn của ai? Của Thảo, chuyên viên tài chính bên Chủ đầu tư. Mà đang tuần khoá sổ quý."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Dũng, the owner's site engineer, bringing the folder over.",
          "sub": "Đây là Dũng, kỹ sư hiện trường bên Chủ đầu tư, mang tập hồ sơ sang.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "From the contractor. Payment order for the port milestone!",
          "sub": "Của nhà thầu đấy chị. Lệnh Thanh toán mốc giao tới cảng!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Closing week. I'll open it next week.",
          "sub": "Tuần khoá sổ mà. Để tuần sau chị mở.",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Slow and steady, she thinks. Let's fast forward one week and see.",
          "sub": "“Chậm mà chắc”, cô nghĩ vậy. Ta tua nhanh một tuần xem sao.",
          "keys": [
            "Chậm mà chắc"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "intro,p11"
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
            "text": "Gồm gì? Khi nào từ chối?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:need",
            "hl": [
              {
                "text": "Khi nào từ chối",
                "at": "l1:refused"
              }
            ]
          },
          {
            "id": "b-p0",
            "t": "box",
            "x": 2028,
            "y": 190,
            "w": 300,
            "h": 100,
            "at": "l2:milestone",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-p1",
            "t": "box",
            "x": 2358,
            "y": 190,
            "w": 300,
            "h": 100,
            "at": "l2:file",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-p2",
            "t": "box",
            "x": 2688,
            "y": 190,
            "w": 300,
            "h": 100,
            "at": "l2:reply",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-p3",
            "t": "box",
            "x": 3018,
            "y": 190,
            "w": 300,
            "h": 100,
            "at": "l3:hold",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-p4",
            "t": "box",
            "x": 3348,
            "y": 190,
            "w": 300,
            "h": 100,
            "at": "l3:wording",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-pt0",
            "t": "text",
            "text": "Mốc tốt",
            "x": 2053,
            "y": 212,
            "size": 42,
            "at": "l2:milestone+200"
          },
          {
            "id": "b-pt1",
            "t": "text",
            "text": "Hồ sơ",
            "x": 2383,
            "y": 212,
            "size": 42,
            "at": "l2:file+200"
          },
          {
            "id": "b-pt2",
            "t": "text",
            "text": "Thời hạn",
            "x": 2713,
            "y": 212,
            "size": 42,
            "at": "l2:reply+200"
          },
          {
            "id": "b-pt3",
            "t": "text",
            "text": "Giữ lại",
            "x": 3043,
            "y": 212,
            "size": 42,
            "at": "l3:hold+200"
          },
          {
            "id": "b-pt4",
            "t": "text",
            "text": "Lỗi câu chữ",
            "x": 3373,
            "y": 212,
            "size": 42,
            "at": "l3:wording+200"
          },
          {
            "id": "b-bone",
            "t": "text",
            "text": "Mốc = xương sống dòng tiền",
            "x": 2028,
            "y": 360,
            "size": 56,
            "at": "l4:backbone",
            "color": "accent",
            "hl": [
              {
                "text": "xương sống",
                "at": "l4:backbone"
              }
            ]
          },
          {
            "id": "b-ev",
            "t": "text",
            "text": "Bằng chứng: vận đơn, biên bản, COD",
            "x": 2028,
            "y": 460,
            "size": 44,
            "at": "l5:evidence"
          },
          {
            "id": "b-lev",
            "t": "text",
            "text": "Không trả trước giá trị chưa có",
            "x": 2028,
            "y": 545,
            "size": 44,
            "at": "l5:prepay",
            "color": "coral",
            "hl": [
              {
                "text": "chưa có",
                "at": "l5:created"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: khoản 5 Điều 4 Nghị định 210/2026/NĐ-CP",
            "x": 2028,
            "y": 748,
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
          "say": "So what does a milestone payment file need, and when can payment be refused?",
          "sub": "Vậy hồ sơ thanh toán theo mốc gồm gì, và khi nào được từ chối trả?",
          "keys": [
            "khi nào được từ chối trả"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five parts: a good milestone, the file, the reply deadline,",
          "sub": "Năm phần: mốc tốt, hồ sơ, thời hạn trả lời,"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "the right to hold back, and the wording traps.",
          "sub": "quyền giữ lại, và những lỗi câu chữ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Decree two ten, Article four: EPC payment follows key milestones. Milestones are the backbone of cash flow.",
          "sub": "Khoản 5 Điều 4 Nghị định 210/2026: EPC thanh toán gắn với các mốc chính. Mốc là xương sống của dòng tiền.",
          "keys": [
            "xương sống"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Tie each to evidence: bill of lading, installation record, test certificate, COD. Never prepay value not yet created.",
          "sub": "Mỗi mốc gắn bằng chứng: vận đơn, biên bản lắp đặt, chứng nhận chạy thử, xác nhận COD. Đừng trả trước phần giá trị chưa tạo ra."
        }
      ],
      "ref": "intro,p1,p2"
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
            "at": "l3",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tua nhanh · Tuần sau",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Meet"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 150,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "sam",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "envelope",
                "hourglass-done"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "caption": "Thứ Hai tuần sau · thư nhà thầu",
            "icon": "envelope"
          },
          {
            "id": "c-d",
            "t": "text",
            "text": "Hạn trả lời: đã qua",
            "x": 3996,
            "y": 170,
            "size": 52,
            "at": "l2:deadline",
            "color": "coral",
            "hl": [
              {
                "text": "đã qua",
                "at": "l2:passed"
              }
            ]
          },
          {
            "id": "c-acc",
            "t": "text",
            "text": "→ “coi như đã chấp nhận”",
            "x": 3996,
            "y": 260,
            "size": 46,
            "at": "l2:accepted"
          },
          {
            "id": "c-int",
            "t": "text",
            "text": "→ lãi chậm trả từ hạn",
            "x": 3996,
            "y": 340,
            "size": 46,
            "at": "l3:interest",
            "color": "coral",
            "hl": [
              {
                "text": "lãi chậm trả",
                "at": "l3:interest"
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
          "say": "One week later, an email. Meet Sam, from the EPC contractor.",
          "sub": "Một tuần sau, có thư. Đây là Sam, người của nhà thầu EPC.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Your reply deadline has passed. Our payment order is deemed accepted.",
          "sub": "Thời hạn trả lời đã qua. Lệnh Thanh toán của chúng tôi coi như đã được chấp nhận.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "And late payment interest runs from the deadline.",
          "sub": "Và lãi chậm trả tính từ ngày hết hạn."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s04",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Hai · tuần khoá sổ",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Để hồ sơ sang tuần sau mới mở",
          "why": "Hạn trả lời tính từ ngày nhận đủ hồ sơ; quá hạn, nhà thầu có thể coi hồ sơ đã được chấp nhận, tính lãi.",
          "rule": "Không đồng ý thì phải nói, và nói đúng hạn"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Closing week. The folder can wait.",
          "sub": "Tuần khoá sổ. Tập hồ sơ chờ được.",
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
          "say": "In many power plant EPC contracts, silence past the deadline can count as acceptance.",
          "sub": "Trong nhiều hợp đồng EPC nhà máy điện, im lặng quá hạn có thể bị coi như chấp nhận.",
          "keys": [
            "im lặng quá hạn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Làm lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "I'll log the receipt date now, and assign someone to reply on time.",
          "sub": "Chị ghi ngày nhận hồ sơ ngay, và giao người trả lời trước hạn.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. Disagree? Say so, and say it on time.",
          "sub": "Đúng. Không đồng ý thì phải nói, và nói đúng hạn.",
          "phase": "redo",
          "keys": [
            "nói đúng hạn"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p10,p11,p12"
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
            "id": "c-log",
            "t": "text",
            "text": "Ghi ngày nhận đủ hồ sơ",
            "x": 3996,
            "y": 450,
            "size": 50,
            "at": "l1:logs",
            "color": "accent",
            "hl": [
              {
                "text": "ngày nhận đủ",
                "at": "l1:receipt"
              }
            ]
          },
          {
            "id": "c-slow",
            "t": "text",
            "text": "Chậm trả lời ≠ giữ tiền an toàn",
            "x": 3996,
            "y": 540,
            "size": 44,
            "at": "l2:safe",
            "hl": [
              {
                "text": "≠ giữ tiền an toàn",
                "at": "l2:safe"
              }
            ]
          },
          {
            "id": "c-sus",
            "t": "text",
            "text": "Từ chối vô cớ → tạm ngừng",
            "x": 3996,
            "y": 630,
            "size": 38,
            "at": "l3:suspend",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, back to Monday. Thảo logs the receipt date.",
          "sub": "Vậy quay lại sáng thứ Hai. Thảo ghi ngày nhận hồ sơ.",
          "keys": [
            "ghi ngày nhận hồ sơ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Slow is not steady here. A late reply is no safe way to hold money.",
          "sub": "Ở đây chậm chẳng chắc. Chậm trả lời không phải cách giữ tiền an toàn.",
          "keys": [
            "chậm chẳng chắc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Refusing without reason, or not paying undisputed sums, may open the contractor's right to suspend, even terminate.",
          "sub": "Không xác nhận vô cớ, không trả khoản không tranh chấp, có thể mở quyền tạm ngừng, thậm chí chấm dứt của nhà thầu."
        }
      ],
      "ref": "p8,p12,p13"
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
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Hai · Mốc tốt",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:good"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
            "w": 780,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2:Meet",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "building-construction"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:Meet",
            "caption": "Công trường · biên bản lắp đặt",
            "icon": "memo"
          },
          {
            "id": "d-a",
            "t": "text",
            "text": "A: “phần lớn công tác lắp đặt”",
            "x": 5964,
            "y": 170,
            "size": 42,
            "at": "l1:most",
            "color": "coral"
          },
          {
            "id": "d-a2",
            "t": "text",
            "text": "→ cãi nhau “phần lớn” là bao",
            "x": 6004,
            "y": 245,
            "size": 38,
            "at": "l1:argues",
            "color": "muted"
          },
          {
            "id": "d-b",
            "t": "text",
            "text": "B: biên bản Đại diện CĐT ký",
            "x": 5964,
            "y": 340,
            "size": 42,
            "at": "l2:signed",
            "color": "accent"
          },
          {
            "id": "d-b2",
            "t": "text",
            "text": "→ kiểm chữ ký, tiền đi đúng hạn",
            "x": 6004,
            "y": 415,
            "size": 38,
            "at": "l4:signatures",
            "hl": [
              {
                "text": "đúng hạn",
                "at": "l4:time"
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
          "say": "Now, what makes a good milestone? Option A: most installation done, per the contractor's report. Then everyone argues what most means.",
          "sub": "Mốc thế nào là tốt? Cách A: “hoàn thành phần lớn lắp đặt” theo báo cáo nhà thầu. Rồi kỳ nào cũng cãi “phần lớn” là bao nhiêu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B: an installation record signed by the Owner's Representative. Meet Ms. Hoa, who signs it.",
          "sub": "Cách B: biên bản lắp đặt có chữ ký Đại diện Chủ đầu tư. Đây là cô Hoa, người ký biên bản ấy.",
          "keys": [
            "Đại diện Chủ đầu tư"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Signed and dated. Done!",
          "sub": "Ký rồi, có ngày rồi. Vậy nha!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Finance just checks the signatures, and the money goes on time.",
          "sub": "Kế toán chỉ cần kiểm đủ chữ ký, và khoản tiền đi đúng hạn."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 1200
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s07",
      "module": "BRK-04",
      "data": {
        "title": "Hai cách ghi mốc",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Hoàn thành phần lớn lắp đặt",
        "right": "Biên bản lắp đặt có chữ ký",
        "wrongIllus": "red-question-mark",
        "rightIllus": "memo"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Most installation done? Weeks of debate.",
          "sub": "“Phần lớn đã lắp”? Tranh luận hàng tuần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A signed record? Measurable, so money moves fast.",
          "sub": "Biên bản có chữ ký? Đo được thì tiền đi nhanh.",
          "keys": [
            "Đo được thì tiền đi nhanh"
          ]
        }
      ],
      "ref": "p3,p4"
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
            "text": "③ Hồ sơ gồm gì?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:file"
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 175,
            "w": 46,
            "h": 46,
            "at": "l1:form",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 157,
            "size": 58,
            "at": "l1:form+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Lệnh Thanh toán đúng mẫu",
            "x": 8000,
            "y": 165,
            "size": 40,
            "at": "l1:form+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 255,
            "w": 46,
            "h": 46,
            "at": "l1:evidence",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 237,
            "size": 58,
            "at": "l1:evidence+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Bằng chứng mốc đúng phụ lục",
            "x": 8000,
            "y": 245,
            "size": 40,
            "at": "l1:evidence+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 335,
            "w": 46,
            "h": 46,
            "at": "l2:progress",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 317,
            "size": 58,
            "at": "l2:progress+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Báo cáo tiến độ",
            "x": 8000,
            "y": 325,
            "size": 40,
            "at": "l2:progress+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 415,
            "w": 46,
            "h": 46,
            "at": "l2:lien",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 397,
            "size": 58,
            "at": "l2:lien+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Giải toả cầm giữ thầu phụ",
            "x": 8000,
            "y": 405,
            "size": 40,
            "at": "l2:lien+200"
          },
          {
            "id": "e-c4",
            "t": "box",
            "x": 7932,
            "y": 495,
            "w": 46,
            "h": 46,
            "at": "l3:quality",
            "stroke": 5
          },
          {
            "id": "e-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 477,
            "size": 58,
            "at": "l3:quality+600",
            "color": "accent"
          },
          {
            "id": "e-l4",
            "t": "text",
            "text": "Xác nhận chất lượng",
            "x": 8000,
            "y": 485,
            "size": 40,
            "at": "l3:quality+200"
          },
          {
            "id": "e-c5",
            "t": "box",
            "x": 7932,
            "y": 575,
            "w": 46,
            "h": 46,
            "at": "l3:invoice",
            "stroke": 5
          },
          {
            "id": "e-k5",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 557,
            "size": 58,
            "at": "l3:invoice+600",
            "color": "accent"
          },
          {
            "id": "e-l5",
            "t": "text",
            "text": "Hoá đơn hợp lệ",
            "x": 8000,
            "y": 565,
            "size": 40,
            "at": "l3:invoice+200"
          },
          {
            "id": "e-lock",
            "t": "illus",
            "name": "locked-with-key",
            "x": 8832,
            "y": 200,
            "size": 120,
            "at": "l4:lien"
          },
          {
            "id": "e-li1",
            "t": "text",
            "text": "Cầm giữ = thầu phụ chưa được trả",
            "x": 8832,
            "y": 350,
            "size": 40,
            "at": "l4:paid",
            "hl": [
              {
                "text": "chưa được trả",
                "at": "l4:paid"
              }
            ]
          },
          {
            "id": "e-li2",
            "t": "text",
            "text": "Chưa giải toả → được giữ lại",
            "x": 8832,
            "y": 430,
            "size": 44,
            "at": "l5:withhold",
            "color": "accent",
            "hl": [
              {
                "text": "được giữ lại",
                "at": "l5:withhold"
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
          "say": "Monday afternoon, the file itself. One: the payment order, in the contract's form. Two: milestone evidence, exactly as the appendix says.",
          "sub": "Chiều thứ Hai, mở hồ sơ. Một: Lệnh Thanh toán đúng mẫu. Hai: bằng chứng mốc đúng như phụ lục mốc yêu cầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three: a progress report. Four: subcontractor lien releases.",
          "sub": "Ba: báo cáo tiến độ. Bốn: giải toả quyền cầm giữ của thầu phụ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Five: quality confirmation. Six: a valid invoice.",
          "sub": "Năm: xác nhận chất lượng. Sáu: hoá đơn hợp lệ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A lien release confirms subcontractors and suppliers were paid for last period's work, so nobody holds the works hostage.",
          "sub": "Giải toả cầm giữ là xác nhận thầu phụ, nhà cung cấp đã được trả cho phần việc kỳ trước, để công trình không bị cầm giữ.",
          "keys": [
            "Giải toả cầm giữ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not released? The contract usually lets the owner withhold.",
          "sub": "Chưa giải toả? Hợp đồng thường cho chủ đầu tư giữ lại tiền.",
          "keys": [
            "giữ lại tiền"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "fit": "F",
            "ms": 900
          },
          {
            "at": "l2",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
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
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Ba · Mốc tới cảng",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Tuesday"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 900,
            "y": 1240,
            "w": 780,
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
                "ship",
                "receipt"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
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
            "at": "l1:Tuesday",
            "caption": "Thứ Ba · vận đơn trên bàn",
            "icon": "ship"
          },
          {
            "id": "f-b0",
            "t": "badge",
            "n": 1,
            "x": 90,
            "y": 1290,
            "at": "l2:appendix"
          },
          {
            "id": "f-s0",
            "t": "text",
            "text": "Đọc phụ lục mốc",
            "x": 140,
            "y": 1265,
            "size": 40,
            "at": "l2:appendix+200"
          },
          {
            "id": "f-b1",
            "t": "badge",
            "n": 2,
            "x": 90,
            "y": 1368,
            "at": "l2:lading"
          },
          {
            "id": "f-s1",
            "t": "text",
            "text": "Vận đơn ↔ danh mục",
            "x": 140,
            "y": 1343,
            "size": 40,
            "at": "l2:lading+200"
          },
          {
            "id": "f-b2",
            "t": "badge",
            "n": 3,
            "x": 90,
            "y": 1446,
            "at": "l3:lien"
          },
          {
            "id": "f-s2",
            "t": "text",
            "text": "Cầm giữ kỳ trước",
            "x": 140,
            "y": 1421,
            "size": 40,
            "at": "l3:lien+200"
          },
          {
            "id": "f-b3",
            "t": "badge",
            "n": 4,
            "x": 90,
            "y": 1524,
            "at": "l3:figures"
          },
          {
            "id": "f-s3",
            "t": "text",
            "text": "Số = chữ = phụ lục",
            "x": 140,
            "y": 1499,
            "size": 40,
            "at": "l3:figures+200"
          },
          {
            "id": "f-b4",
            "t": "badge",
            "n": 5,
            "x": 90,
            "y": 1602,
            "at": "l4:Representative"
          },
          {
            "id": "f-s4",
            "t": "text",
            "text": "Đại diện CĐT xác nhận",
            "x": 140,
            "y": 1577,
            "size": 40,
            "at": "l4:Representative+200"
          },
          {
            "id": "f-b5",
            "t": "badge",
            "n": 6,
            "x": 90,
            "y": 1680,
            "at": "l4:date"
          },
          {
            "id": "f-s5",
            "t": "text",
            "text": "Ghi ngày nhận đủ",
            "x": 140,
            "y": 1655,
            "size": 40,
            "at": "l4:date+200"
          },
          {
            "id": "f-key",
            "t": "text",
            "text": "Ngày nhận đủ = ngày bắt đầu đếm",
            "x": 60,
            "y": 1770,
            "size": 40,
            "at": "l5:counting",
            "color": "accent",
            "hl": [
              {
                "text": "bắt đầu đếm",
                "at": "l5:counting"
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
          "say": "Tuesday. The port milestone, checked step by step.",
          "sub": "Thứ Ba. Kiểm mốc giao tới cảng, từng bước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One, read the milestone appendix. Two, match the bill of lading to the equipment list.",
          "sub": "Một, đọc đúng điều kiện ở phụ lục mốc. Hai, đối chiếu vận đơn với danh mục thiết bị.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Three, last period's lien releases. Four, figures and words match the appendix.",
          "sub": "Ba, giải toả cầm giữ kỳ trước. Bốn, số bằng số, bằng chữ khớp phụ lục."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Five, the Owner's Representative confirms the milestone. Six, I record the date the file was complete.",
          "sub": "Năm, chuyển Đại diện Chủ đầu tư xác nhận mốc. Sáu, ghi ngày nhận đủ hồ sơ.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Because the day the file is complete is the day counting starts.",
          "sub": "Vì ngày nhận đủ hồ sơ là ngày bắt đầu đếm.",
          "keys": [
            "ngày bắt đầu đếm"
          ]
        }
      ],
      "ref": "p7,p8"
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
              "g-cl",
              "g-cl2"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "G",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Tư · Câu xác nhận",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Wednesday"
          },
          {
            "id": "g-doc",
            "t": "illus",
            "name": "page-with-curl",
            "x": 2028,
            "y": 1260,
            "size": 110,
            "at": "l2:obliged"
          },
          {
            "id": "g-cl",
            "t": "text",
            "text": "“Chưa phải trả… cho đến khi",
            "x": 2168,
            "y": 1265,
            "size": 46,
            "at": "l2:until",
            "color": "muted"
          },
          {
            "id": "g-cl2",
            "t": "text",
            "text": "xác nhận mốc bằng văn bản”",
            "x": 2168,
            "y": 1335,
            "size": 46,
            "at": "l2:writing",
            "color": "muted",
            "hl": [
              {
                "text": "bằng văn bản",
                "at": "l2:writing"
              }
            ]
          },
          {
            "id": "g-days",
            "t": "text",
            "text": "Xác nhận / nêu lý do: [ ] ngày",
            "x": 2028,
            "y": 1450,
            "size": 48,
            "at": "l3:reasons",
            "color": "accent",
            "hl": [
              {
                "text": "nêu lý do",
                "at": "l3:reasons"
              }
            ]
          },
          {
            "id": "g-bx1",
            "t": "box",
            "x": 2028,
            "y": 1560,
            "w": 760,
            "h": 110,
            "at": "l4:right",
            "stroke": 4
          },
          {
            "id": "g-r",
            "t": "text",
            "text": "Quyền: chưa trả khi chưa đạt",
            "x": 2053,
            "y": 1590,
            "size": 42,
            "at": "l4:right+200"
          },
          {
            "id": "g-bx2",
            "t": "box",
            "x": 2868,
            "y": 1560,
            "w": 760,
            "h": 110,
            "at": "l4:duty",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "g-d",
            "t": "text",
            "text": "Nghĩa vụ: trả lời đúng hạn",
            "x": 2893,
            "y": 1590,
            "size": 42,
            "at": "l4:duty+200",
            "color": "coral"
          },
          {
            "id": "g-key",
            "t": "text",
            "text": "Không đồng ý: nói, đúng hạn",
            "x": 2028,
            "y": 1740,
            "size": 50,
            "at": "l5:say",
            "color": "accent",
            "hl": [
              {
                "text": "đúng hạn",
                "at": "l5:time"
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
          "say": "Wednesday. Thảo reads the confirmation clause, word by word.",
          "sub": "Thứ Tư. Thảo đọc câu xác nhận, từng chữ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The owner is not obliged to pay until it confirms, in writing, that the milestone is achieved.",
          "sub": "Chủ đầu tư không có nghĩa vụ thanh toán cho đến khi xác nhận bằng văn bản rằng mốc đã đạt theo phụ lục."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And it must confirm, or give reasons, within a set number of days from receiving the full order.",
          "sub": "Và phải xác nhận, hoặc nêu lý do không xác nhận, trong [ ] ngày kể từ khi nhận đủ Lệnh Thanh toán.",
          "keys": [
            "nêu lý do"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One sentence, two faces: a right to wait, and a duty to answer on time.",
          "sub": "Một câu, hai mặt: quyền chưa trả khi mốc chưa đạt, và nghĩa vụ trả lời đúng hạn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Disagree? Say so, on time. Silence has a price.",
          "sub": "Không đồng ý thì nói, và nói đúng hạn. Im lặng cũng có giá.",
          "keys": [
            "Im lặng cũng có giá"
          ]
        }
      ],
      "ref": "p9,p10,p12"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Một phần nhỏ có vấn đề, giữ lại cả khoản?",
        "illus": "thinking-face"
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
          "say": "One small part has a problem. Hold back the whole payment?",
          "sub": "Một phần nhỏ có vấn đề. Giữ lại cả khoản?",
          "keys": [
            "Giữ lại cả khoản"
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
            "text": "⑥ Thứ Năm · Giữ lại bao nhiêu?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "point",
                  "face": "stern"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "warning",
                "balance-scale"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "dung",
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
            "at": "l1:defective",
            "caption": "Thứ Năm · một hạng mục lỗi",
            "icon": "warning"
          },
          {
            "id": "h-no",
            "t": "text",
            "text": "Từ chối: mốc chưa đạt, thiếu chứng",
            "x": 3996,
            "y": 1260,
            "size": 40,
            "at": "l4:contract"
          },
          {
            "id": "h-w",
            "t": "text",
            "text": "Giữ lại: khuyết tật, chậm COD",
            "x": 3996,
            "y": 1335,
            "size": 40,
            "at": "l4:Withholding"
          },
          {
            "id": "h-w2",
            "t": "text",
            "text": "nợ thầu phụ, số tranh chấp",
            "x": 4036,
            "y": 1405,
            "size": 38,
            "at": "l4:subcontractor",
            "color": "muted"
          },
          {
            "id": "h-rest",
            "t": "text",
            "text": "Phần không tranh chấp: trả đúng hạn",
            "x": 3996,
            "y": 1490,
            "size": 40,
            "at": "l5:undisputed",
            "color": "accent",
            "hl": [
              {
                "text": "trả đúng hạn",
                "at": "l5:time"
              }
            ]
          },
          {
            "id": "h-br",
            "t": "text",
            "text": "Giữ cả khoản → mình vi phạm",
            "x": 3996,
            "y": 1570,
            "size": 44,
            "at": "l5:breach",
            "color": "coral",
            "hl": [
              {
                "text": "mình vi phạm",
                "at": "l5:breach"
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
          "say": "Thursday. One item turns out defective.",
          "sub": "Thứ Năm. Một hạng mục bị phát hiện lỗi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Hold the whole payment, to be safe!",
          "sub": "Giữ lại cả khoản cho chắc chị ơi!",
          "face": "stern"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Only the part that matches the defect. Let me check the clause.",
          "sub": "Chỉ phần tương ứng với lỗi thôi. Để chị xem điều khoản.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Refusal needs a contract reason. Withholding covers defects, a late COD risk, subcontractor debts, or a disputed amount.",
          "sub": "Từ chối phải có lý do gắn hợp đồng. Giữ lại áp dụng khi có khuyết tật, nguy cơ chậm COD, nợ thầu phụ, hay số tiền tranh chấp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Pay the undisputed part on time. Hold everything for a small issue, and you become the party in breach.",
          "sub": "Phần không tranh chấp vẫn trả đúng hạn. Giữ cả khoản vì một phần nhỏ dễ biến mình thành bên vi phạm.",
          "keys": [
            "bên vi phạm"
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
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-bef",
            "t": "text",
            "text": "Trước: giữ bất kỳ khoản nào",
            "x": 3996,
            "y": 1660,
            "size": 40,
            "at": "l1:Before",
            "color": "muted"
          },
          {
            "id": "h-befx",
            "t": "strike",
            "over": "h-bef",
            "at": "l1:wide"
          },
          {
            "id": "h-aft",
            "t": "text",
            "text": "Sau: phần tương ứng, nêu rõ",
            "x": 3996,
            "y": 1720,
            "size": 44,
            "at": "l2:After",
            "color": "accent"
          },
          {
            "id": "h-key",
            "t": "text",
            "text": "Có lý do, số tiền, giới hạn",
            "x": 3996,
            "y": 1790,
            "size": 40,
            "at": "l3:reason",
            "hl": [
              {
                "text": "giới hạn",
                "at": "l3:limit"
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
          "say": "Before: the owner may withhold any amount, at its opinion. Too wide, disputed in every talk.",
          "sub": "Trước: “Chủ đầu tư được giữ lại bất kỳ khoản nào theo ý kiến của mình.” Quá rộng, dễ bị phản đối và tranh cãi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: only the part matching the defect, debt or dispute stated in the notice. The rest paid on time.",
          "sub": "Sau: chỉ giữ phần tương ứng khuyết tật, nợ thầu phụ, số tranh chấp nêu rõ trong thông báo; phần còn lại trả đúng hạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hold back with a reason, an amount, and a limit.",
          "sub": "Giữ lại có lý do, có số tiền, có giới hạn.",
          "keys": [
            "có giới hạn"
          ]
        }
      ],
      "ref": "p16,p17"
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
            "at": 150,
            "fit": "I",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Trả có phải chấp nhận?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:accepting"
          },
          {
            "id": "i-prov",
            "t": "text",
            "text": "Trả ≠ chấp nhận · chỉ tạm tính",
            "x": 5964,
            "y": 1260,
            "size": 48,
            "at": "l2:provisional",
            "color": "accent",
            "hl": [
              {
                "text": "tạm tính",
                "at": "l2:provisional"
              }
            ]
          },
          {
            "id": "i-def",
            "t": "text",
            "text": "→ vẫn đòi sửa khuyết tật",
            "x": 6004,
            "y": 1340,
            "size": 42,
            "at": "l2:defects"
          },
          {
            "id": "i-int",
            "t": "text",
            "text": "Lãi chậm trả: mức [ ], ngày tính",
            "x": 5964,
            "y": 1430,
            "size": 44,
            "at": "l3:interest",
            "hl": [
              {
                "text": "ngày tính",
                "at": "l3:start"
              }
            ]
          },
          {
            "id": "i-bl",
            "t": "text",
            "text": "Không ghi → Bộ luật Dân sự",
            "x": 6004,
            "y": 1505,
            "size": 40,
            "at": "l4:Civil",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday afternoon. Is paying the same as accepting the works?",
          "sub": "Chiều thứ Năm. Trả tiền có phải là chấp nhận công trình không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. A model clause says payment is not acceptance; every payment is provisional. So defects can still be claimed.",
          "sub": "Không. Câu mẫu: thanh toán không cấu thành chấp nhận Công trình; mọi khoản chỉ là tạm tính. Nhờ vậy vẫn đòi sửa khuyết tật được.",
          "keys": [
            "chỉ là tạm tính"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Late interest: the contract should state the rate and the start date, usually tied to the payment deadline.",
          "sub": "Lãi chậm trả: hợp đồng nên ghi mức lãi [ ] và ngày bắt đầu tính, thường gắn ngày hết thời hạn thanh toán."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not stated? The Civil Code covers late payment interest; check the current text.",
          "sub": "Không ghi? Bộ luật Dân sự có quy định về lãi chậm trả; kiểm văn bản hiện hành."
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s15",
      "module": "BRK-03",
      "data": {
        "value": 80,
        "suffix": "%",
        "label": "giá hợp đồng: thu hồi hết tạm ứng (đầu tư công, PPP)",
        "illus": "money-bag"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Public and PPP projects: the advance is fully recovered by...",
          "sub": "Dự án đầu tư công, PPP: tạm ứng phải thu hồi hết khi..."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Eighty percent of the contract price, paid.",
          "sub": "Thanh toán luỹ kế đạt 80% giá hợp đồng.",
          "keys": [
            "80%"
          ]
        }
      ],
      "ref": "p20"
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
          }
        ],
        "items": [
          {
            "id": "i-80",
            "t": "text",
            "text": "NĐ 210 Điều 12: 80% · công, PPP",
            "x": 5964,
            "y": 1600,
            "size": 42,
            "at": "l1:Twelve",
            "hl": [
              {
                "text": "80%",
                "at": "l1:eighty"
              }
            ]
          },
          {
            "id": "i-pr",
            "t": "text",
            "text": "Tư nhân: theo hợp đồng",
            "x": 5964,
            "y": 1670,
            "size": 42,
            "at": "l2:Private",
            "color": "muted"
          },
          {
            "id": "i-key",
            "t": "text",
            "text": "Trả mốc = thu hồi tạm ứng",
            "x": 5964,
            "y": 1750,
            "size": 44,
            "at": "l3:recovery",
            "color": "accent",
            "hl": [
              {
                "text": "thu hồi tạm ứng",
                "at": "l3:recovery"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: Điều 12 Nghị định 210/2026/NĐ-CP",
            "x": 6804,
            "y": 1838,
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
          "say": "That is Decree two ten, Article twelve, for public investment and PPP: eighty percent.",
          "sub": "Đó là Điều 12 Nghị định 210/2026, cho đầu tư công và PPP: thu hồi hết khi đạt 80%."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Private projects aren't bound by it, but contracts usually recover the advance milestone by milestone.",
          "sub": "Vốn tư nhân không bị ràng buộc con số này, nhưng hợp đồng thường cũng ghi cách thu hồi tạm ứng qua từng mốc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So each milestone payment is also a recovery. Deduct the right share.",
          "sub": "Nên mỗi lần trả mốc là một lần thu hồi tạm ứng; trừ đúng phần.",
          "keys": [
            "một lần thu hồi tạm ứng"
          ]
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s17",
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
            "at": "l5",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Sáu · Lỗi câu chữ",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "point",
                  "face": "thinking"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "shrug",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "red-question-mark"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "sam",
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
            "at": "l2:Thảo",
            "caption": "Thứ Sáu · số và chữ lệch nhau",
            "icon": "red-question-mark"
          },
          {
            "id": "j-e1",
            "t": "text",
            "text": "Dẫn chiếu “Phụ lục 2” không có",
            "x": 7932,
            "y": 1260,
            "size": 40,
            "at": "l1:Appendix",
            "color": "coral"
          },
          {
            "id": "j-e2",
            "t": "text",
            "text": "Định nghĩa trỏ nhầm phụ lục",
            "x": 7932,
            "y": 1330,
            "size": 40,
            "at": "l1:points"
          },
          {
            "id": "j-e3",
            "t": "text",
            "text": "Số ≠ chữ · LC lệch · đợt trùng",
            "x": 7932,
            "y": 1400,
            "size": 40,
            "at": "l2:figures",
            "color": "coral"
          },
          {
            "id": "j-no",
            "t": "text",
            "text": "Trả số lớn cho êm",
            "x": 7932,
            "y": 1490,
            "size": 46,
            "at": "l3:larger",
            "color": "muted"
          },
          {
            "id": "j-nox",
            "t": "strike",
            "over": "j-no",
            "at": "l4:No"
          },
          {
            "id": "j-yes",
            "t": "text",
            "text": "Ghi nhận · hỏi pháp chế · sửa",
            "x": 7932,
            "y": 1570,
            "size": 38,
            "at": "l5:legal",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi pháp chế",
                "at": "l5:legal"
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
          "say": "Friday: wording traps. References to an Appendix two that doesn't exist, or a definition that points to the wrong appendix.",
          "sub": "Thứ Sáu: bẫy câu chữ. Dẫn chiếu “Phụ lục 2” không tồn tại, hay định nghĩa Lệnh Thanh toán trỏ nhầm phụ lục giá."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then Thảo spots one: figures and words differ. Others: letters of credit off by a digit, repeated instalment numbers, a wrong COD name.",
          "sub": "Rồi Thảo thấy một lỗi: số bằng số khác số bằng chữ. Còn có: thư tín dụng lệch một chữ số, đánh số đợt trùng, sai tên đơn vị xác nhận COD."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Simple. Pay the larger number, and keep everyone happy.",
          "sub": "Đơn giản thôi. Trả theo số lớn hơn cho êm chuyện.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "No. An unagreed number becomes a dispute at final account.",
          "sub": "Không. Trả theo con số chưa thống nhất dễ thành tranh chấp khi quyết toán.",
          "face": "neutral"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Record it, ask legal about interpretation rules, fix it in the next amendment. Two numbers, one dispute waiting.",
          "sub": "Ghi nhận chỗ lệch, hỏi pháp chế về quy tắc giải thích, sửa trong phụ lục gần nhất. Hai con số cho một khoản là một tranh chấp chờ sẵn.",
          "keys": [
            "tranh chấp chờ sẵn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 0
        }
      ],
      "ref": "p22,p23,p24,p25"
    },
    {
      "id": "s18",
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
            "at": "l1",
            "fit": [
              "j-file",
              "j-stamp"
            ],
            "zoom": 1.2,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-file",
            "t": "illus",
            "name": "open-file-folder",
            "x": 7932,
            "y": 1650,
            "size": 150,
            "at": "l1:folder"
          },
          {
            "id": "j-stamp",
            "t": "text",
            "text": "Nhận đủ: thứ Hai ✓",
            "x": 8112,
            "y": 1665,
            "size": 44,
            "at": "l1:logged",
            "color": "accent"
          },
          {
            "id": "j-stamp2",
            "t": "text",
            "text": "Trả phần không tranh chấp ✓",
            "x": 8112,
            "y": 1730,
            "size": 40,
            "at": "l2:undisputed"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Chậm mà chắc” → đúng hạn mới chắc",
            "x": 8772,
            "y": 1780,
            "size": 38,
            "at": "l3:steady",
            "color": "accent",
            "hl": [
              {
                "text": "đúng hạn mới chắc",
                "at": "l3:time"
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
          "say": "Friday evening, same desk, same folder. Logged on Monday. Confirmed on time.",
          "sub": "Tối thứ Sáu, vẫn bàn ấy, vẫn tập hồ sơ ấy. Ghi ngày nhận từ thứ Hai. Xác nhận đúng hạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Undisputed part paid, defect part held, with reasons.",
          "sub": "Phần không tranh chấp đã trả, phần lỗi giữ lại, có lý do.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Slow and steady? Here, steady means on time.",
          "sub": "“Chậm mà chắc”? Ở đây, đúng hạn mới chắc.",
          "keys": [
            "đúng hạn mới chắc"
          ]
        }
      ],
      "ref": "outro,p12"
    },
    {
      "id": "s19",
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
            "at": "l1:evidence",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:time",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:reason",
            "fit": "H",
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
            "x": 6724,
            "y": 520,
            "at": "l1:evidence"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 3588,
            "y": 1760,
            "at": "l2:time"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4756,
            "y": 1650,
            "at": "l3:reason"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài tham khảo chung; tình huống minh hoạ, không lấy từ hợp đồng hay dự án cụ thể. Việc cụ thể hỏi pháp chế, luật sư; kiểm văn bản hiện hành.",
            "x": 2028,
            "y": 690,
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
          "say": "So: a measurable milestone, tied to evidence, and a complete file.",
          "sub": "Tóm lại: mốc đo được, gắn bằng chứng, hồ sơ đủ.",
          "keys": [
            "mốc đo được"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Log the receipt date, and reply on time: confirm, or give reasons.",
          "sub": "Ghi ngày nhận đủ, trả lời đúng hạn: xác nhận, hoặc nêu lý do.",
          "keys": [
            "trả lời đúng hạn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hold back with a reason and a limit; pay the rest.",
          "sub": "Giữ lại có lý do, có giới hạn; phần còn lại vẫn trả.",
          "keys": [
            "có giới hạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "General reference only, not advice on any real contract. Check the current law.",
          "sub": "Bài để tham khảo chung, không phải tư vấn cho hợp đồng cụ thể. Nhớ kiểm văn bản hiện hành.",
          "keys": [
            "tham khảo chung"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p4,p17"
    },
    {
      "id": "s20",
      "module": "QUIZ-01",
      "data": {
        "q": "The payment file arrives during quarter closing week, how should finance handle it?",
        "options": [
          "Leave it until next week, because closing the quarter is always more important",
          "Return it unopened and ask the contractor to send it again next quarter",
          "Log the receipt date at once and assign someone to reply before the deadline"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "open-file-folder",
        "why": "Thời hạn trả lời tính từ ngày nhận đủ hồ sơ. Ghi ngày nhận ngay và giao người trả lời trước hạn: xác nhận, hoặc nêu lý do."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The payment file arrives during quarter closing week, how should finance handle it?",
          "sub": "Hồ sơ thanh toán về đúng tuần khóa sổ quý, tài chính nên xử lý thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Log the receipt date at once, and assign someone to reply before the deadline.",
          "sub": "Ghi ngày nhận ngay, giao người trả lời trước hạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Disagree? Say so, and say it on time.",
          "sub": "Không đồng ý thì phải nói, và nói đúng hạn."
        }
      ],
      "ref": "questions[17]"
    },
    {
      "id": "s21",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi viết danh sách bằng chứng cho mốc gần nhất"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, pick your next milestone and list the evidence it needs, before the file arrives.",
          "sub": "Hôm nay, chọn mốc gần nhất, viết ra danh sách bằng chứng cần có trước khi hồ sơ về."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi epc-finance, bài 2) theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): cận tập Lệnh Thanh toán mốc giao thiết bị tới cảng → kéo ra: bàn Thảo, sáng thứ Hai tuần khoá sổ quý, Dũng mang hồ sơ sang, Thảo định để tuần sau (“Chậm mà chắc”). Đét trái + bảng 10 ô theo tuần khoá sổ quý: tua nhanh tuần sau: thư Sam “coi như chấp nhận + lãi chậm trả” → “Khoan đã!” tua lại: ghi ngày nhận → ② mốc tốt Cách A/B, cô Hoa ký biên bản (BRK-04) → ③ hồ sơ gồm gì → ④ thứ Ba kiểm mốc tới cảng 6 bước → ⑤ thứ Tư câu xác nhận, quyền và nghĩa vụ → (BRK-07) ⑥ thứ Năm Dũng đòi giữ cả khoản, Thảo chỉ giữ phần lỗi, trước/sau câu giữ lại → ⑦ trả ≠ chấp nhận, lãi chậm trả, (BRK-03 80%) thu hồi tạm ứng → thứ Sáu lỗi câu chữ, Sam gợi ý trả số lớn, Thảo từ chối → tối thứ Sáu cùng tập hồ sơ đã có dấu ngày (khép vòng: “Chậm mà chắc” → đúng hạn mới chắc). Nhân vật theo w145/_series/epc-finance.md: Thảo, Dũng, Sam, cô Hoa (Bác Bình không xuất hiện). Số/điều chỉ từ bài: NĐ 210/2026 khoản 5 Điều 4, Điều 12, 80%; Bộ luật Dân sự (lãi chậm trả, không nêu điều). Ô trống [ ] giữ nguyên. Câu đố questions[17]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s18"
  }
};
