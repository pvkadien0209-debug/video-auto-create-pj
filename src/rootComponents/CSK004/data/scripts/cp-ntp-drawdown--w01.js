// cp-ntp-drawdown--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "cp-ntp-drawdown--w01",
  "unit": {
    "audience": "epc-lender",
    "slug": "cp-ntp-drawdown",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Điều kiện tiên quyết và lệnh khởi công gắn với giải ngân thế nào?",
    "series": "Hợp đồng EPC dưới mắt bên cho vay — cho ngân hàng và bên tài trợ, biết dự án có trả nợ được và giữ quyền can thiệp"
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
              "a-v"
            ],
            "move": "cut",
            "zoom": 1.35
          },
          {
            "at": "l4",
            "fit": "A",
            "ms": 900
          },
          {
            "at": "l5",
            "fit": [
              "a-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l7",
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
            "y": 90,
            "w": 780,
            "data": {
              "set": "meeting",
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
                  "at": "l5",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "fountain-pen"
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
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Ngày ký · phòng họp ba bên",
            "icon": "fountain-pen"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Đã ký: hợp đồng EPC ✓",
            "x": 60,
            "y": 130,
            "size": 50,
            "at": "l2:EPC"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "Đã ký: hợp đồng vay ✓",
            "x": 60,
            "y": 210,
            "size": 50,
            "at": "l2:Loan"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "Mai máy xúc vào, và…",
            "x": 60,
            "y": 330,
            "size": 56,
            "at": "l3:diggers",
            "color": "coral"
          },
          {
            "id": "a-4",
            "t": "text",
            "text": "…?",
            "x": 60,
            "y": 420,
            "size": 90,
            "at": "l4:Hold",
            "color": "accent"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đầu xuôi đuôi lọt”",
            "x": 900,
            "y": 612,
            "size": 48,
            "at": "l7:head",
            "color": "accent",
            "hl": [
              {
                "text": "Đầu xuôi",
                "at": "l7:head"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "đầu = điều kiện tiên quyết",
            "x": 900,
            "y": 685,
            "size": 40,
            "at": "l8:conditions"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Signing day. Meet Dũng, the owner's financing officer, pen still warm.",
          "sub": "Ngày ký. Đây là Dũng, chuyên viên thu xếp vốn bên Chủ đầu tư, bút còn ấm tay.",
          "keys": [
            "Ngày ký"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "EPC contract signed. Loan agreement signed!",
          "sub": "Hợp đồng EPC ký rồi. Hợp đồng vay ký rồi!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Tomorrow the diggers roll in, and we...",
          "sub": "Mai máy xúc vào, và mình…",
          "face": "happy",
          "stop": true
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hold that sentence. We'll finish it in a minute.",
          "sub": "Giữ câu ấy lại. Một phút nữa ta nói nốt.",
          "keys": [
            "Giữ câu ấy lại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Beside him, Thảo, the bank's analyst. List maker, as always.",
          "sub": "Bên cạnh là Thảo, chuyên viên thẩm định của ngân hàng. Vẫn mê lập danh sách.",
          "keys": [
            "chuyên viên thẩm định"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "First, the money isn't out yet. Second, the site hasn't started.",
          "sub": "Thứ nhất, tiền chưa giải ngân. Thứ hai, công trường chưa khởi công.",
          "face": "thinking"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: if the head goes through smoothly, the tail follows.",
          "sub": "Ông bà dặn: “Đầu xuôi đuôi lọt.”",
          "keys": [
            "Đầu xuôi đuôi lọt"
          ]
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "In a loan, the head is the conditions precedent.",
          "sub": "Với khoản vay, cái đầu là điều kiện tiên quyết.",
          "keys": [
            "điều kiện tiên quyết"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        },
        {
          "at": "l5",
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
            "text": "Khi nào được khởi công?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:start",
            "hl": [
              {
                "text": "khởi công",
                "at": "l1:start"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: ký xong là chạy",
            "x": 2028,
            "y": 150,
            "size": 50,
            "at": "l2:Not",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:signing"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: CP khớp giải ngân",
            "x": 2028,
            "y": 240,
            "size": 58,
            "at": "l3:match",
            "color": "accent",
            "hl": [
              {
                "text": "khớp giải ngân",
                "at": "l3:drawdown"
              }
            ]
          },
          {
            "id": "b-yes2",
            "t": "text",
            "text": "và không ai còn quyền rút",
            "x": 2028,
            "y": 320,
            "size": 46,
            "at": "l4:walk away",
            "hl": [
              {
                "text": "quyền rút",
                "at": "l4:walk away"
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
          "say": "So the real question: when may the site start, from a lender's view?",
          "sub": "Vậy câu hỏi thật: dưới mắt bên cho vay, khi nào công trường được khởi công?",
          "keys": [
            "khi nào công trường được khởi công"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not the moment after signing.",
          "sub": "Không phải ngay sau khi ký."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But when the EPC conditions match drawdown, so work starts only when money is ready.",
          "sub": "Mà là khi điều kiện của hợp đồng EPC khớp với điều kiện giải ngân, để chỉ khởi công khi vốn đã sẵn.",
          "keys": [
            "khớp với điều kiện giải ngân"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And no one still holds a right to walk away over a passed deadline.",
          "sub": "Và không ai còn giữ quyền chấm dứt vì một thời hạn đã qua.",
          "keys": [
            "thời hạn đã qua"
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
            "at": "l1",
            "fit": [
              "b-full"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "B",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "b-full",
            "t": "text",
            "text": "“Mai máy xúc vào, khởi công!”",
            "x": 2868,
            "y": 140,
            "size": 40,
            "at": "l1:diggers",
            "color": "coral"
          },
          {
            "id": "b-fullx",
            "t": "strike",
            "over": "b-full",
            "at": "l2:Not yet"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Ngày ký → [CP] → NTP → COD",
            "x": 2868,
            "y": 230,
            "size": 44,
            "at": "l2:signing",
            "hl": [
              {
                "text": "NTP",
                "at": "l3:notice"
              }
            ]
          },
          {
            "id": "b-2b",
            "t": "text",
            "text": "tiến độ tới COD tính từ NTP; CĐT có thể miễn một số CP",
            "x": 2868,
            "y": 310,
            "size": 28,
            "at": "l3:counted",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Một mùa thu xếp vốn, 7 chặng",
            "x": 2028,
            "y": 470,
            "size": 46,
            "at": "l4:seven",
            "hl": [
              {
                "text": "7 chặng",
                "at": "l4:seven"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l4:seven+400",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l4:seven+650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l4:seven+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l4:seven+1150",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l4:seven+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l4:seven+1650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l4:seven+1900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Danh sách CP",
            "x": 2040,
            "y": 585,
            "size": 28,
            "at": "l4:seven+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Bảng 3 cột",
            "x": 2275,
            "y": 585,
            "size": 28,
            "at": "l4:seven+770"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Tạm ứng",
            "x": 2510,
            "y": 585,
            "size": 28,
            "at": "l4:seven+1020"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Hạn NTP",
            "x": 2745,
            "y": 585,
            "size": 28,
            "at": "l4:seven+1270"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Bằng chứng vốn",
            "x": 2980,
            "y": 585,
            "size": 28,
            "at": "l4:seven+1520"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Quyền miễn",
            "x": 3215,
            "y": 585,
            "size": 28,
            "at": "l4:seven+1770"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Phụ lục",
            "x": 3450,
            "y": 585,
            "size": 28,
            "at": "l4:seven+2020"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Okay, the full sentence: tomorrow the diggers roll in, and we start the site!",
          "sub": "Rồi, nói trọn đây: mai máy xúc vào, và mình khởi công!",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not yet. An EPC contract keeps two dates apart: signing and commencement.",
          "sub": "Chưa đâu. Hợp đồng EPC tách hai mốc: ngày ký và ngày khởi công.",
          "keys": [
            "ngày ký và ngày khởi công"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Between them sit conditions precedent. Once met, the owner issues the notice to proceed, NTP, and the schedule to COD is counted from it.",
          "sub": "Giữa hai mốc là điều kiện tiên quyết. Đủ CP thì Chủ đầu tư phát Thông báo khởi công, NTP; tiến độ tới COD tính từ NTP.",
          "keys": [
            "tính từ NTP"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One financing season, seven stops.",
          "sub": "Một mùa thu xếp vốn, bảy chặng.",
          "keys": [
            "bảy chặng"
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
            "zoom": 1.3,
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
            "text": "① Hôm sau · Danh sách CP",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:next day"
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
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "clipboard",
                "pen"
              ],
              "camera": [
                {
                  "at": "l2",
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
            "at": "l1:next day",
            "caption": "Hôm sau · bàn của Thảo",
            "icon": "clipboard"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 160,
            "w": 44,
            "h": 44,
            "at": "l2:guarantees",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 142,
            "size": 56,
            "at": "l2:guarantees+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Bảo lãnh tạm ứng, thực hiện",
            "x": 4066,
            "y": 152,
            "size": 38,
            "at": "l2:guarantees+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 235,
            "w": 44,
            "h": 44,
            "at": "l2:insurance",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 217,
            "size": 56,
            "at": "l2:insurance+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Bằng chứng bảo hiểm",
            "x": 4066,
            "y": 227,
            "size": 38,
            "at": "l2:insurance+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 310,
            "w": 44,
            "h": 44,
            "at": "l3:permits",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 292,
            "size": 56,
            "at": "l3:permits+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Giấy phép, phép thi công",
            "x": 4066,
            "y": 302,
            "size": 38,
            "at": "l3:permits+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 385,
            "w": 44,
            "h": 44,
            "at": "l3:legal",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 367,
            "size": 56,
            "at": "l3:legal+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Ý kiến pháp lý",
            "x": 4066,
            "y": 377,
            "size": 38,
            "at": "l3:legal+200"
          },
          {
            "id": "c-c4",
            "t": "box",
            "x": 3996,
            "y": 460,
            "w": 44,
            "h": 44,
            "at": "l3:advance",
            "stroke": 5
          },
          {
            "id": "c-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 442,
            "size": 56,
            "at": "l3:advance+600",
            "color": "accent"
          },
          {
            "id": "c-l4",
            "t": "text",
            "text": "Tạm ứng đã trả",
            "x": 4066,
            "y": 452,
            "size": 38,
            "at": "l3:advance+200"
          },
          {
            "id": "c-c5",
            "t": "box",
            "x": 3996,
            "y": 535,
            "w": 44,
            "h": 44,
            "at": "l4:clearing",
            "stroke": 5
          },
          {
            "id": "c-k5",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 517,
            "size": 56,
            "at": "l4:clearing+600",
            "color": "accent"
          },
          {
            "id": "c-l5",
            "t": "text",
            "text": "Mặt bằng, rà bom mìn",
            "x": 4066,
            "y": 527,
            "size": 38,
            "at": "l4:clearing+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, the next day. Thảo reads the CP list.",
          "sub": "Chặng một, hôm sau. Thảo đọc danh sách CP."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Advance and performance guarantees from the contractor. Evidence of insurance.",
          "sub": "Bảo lãnh tạm ứng, bảo lãnh thực hiện của Nhà thầu. Bằng chứng bảo hiểm.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "The contractor's permits and the building permit. A legal opinion. The advance paid.",
          "sub": "Giấy phép phần Nhà thầu, giấy phép thi công. Ý kiến pháp lý. Tạm ứng đã trả."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sometimes site prep too, like clearing old bombs and mines, if the contract asks.",
          "sub": "Có khi cả chuẩn bị mặt bằng như rà phá bom mìn, nếu hợp đồng yêu cầu."
        }
      ],
      "ref": "p2"
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
            "at": "l1",
            "fit": [
              "c-gun",
              "c-g1"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-gun",
            "t": "illus",
            "name": "water-pistol",
            "x": 3996,
            "y": 620,
            "size": 100,
            "at": "l1:trigger"
          },
          {
            "id": "c-g1",
            "t": "text",
            "text": "NTP = cò súng",
            "x": 4116,
            "y": 630,
            "size": 56,
            "at": "l1:trigger",
            "color": "accent",
            "hl": [
              {
                "text": "cò súng",
                "at": "l1:trigger"
              }
            ]
          },
          {
            "id": "c-g2",
            "t": "text",
            "text": "huy động · nợ thanh toán · tiến độ chạy",
            "x": 4836,
            "y": 690,
            "size": 32,
            "at": "l2:mobilises",
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
          "say": "For the lender, the NTP is the trigger.",
          "sub": "Với bên cho vay, NTP là cò súng.",
          "keys": [
            "cò súng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "From that day the contractor mobilises, the owner starts owing payments, and the clock runs to COD.",
          "sub": "Từ ngày đó Nhà thầu huy động, Chủ đầu tư bắt đầu nợ các đợt thanh toán, tiến độ chạy về mốc COD."
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s06",
      "module": "BRK-03",
      "data": {
        "from": 7,
        "value": 14,
        "suffix": " ngày",
        "label": "báo trước ngày khởi công, mẫu quốc tế 2017",
        "illus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One international form, twenty seventeen edition:",
          "sub": "Một mẫu hợp đồng quốc tế, bản 2017:"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "notice of commencement, up from seven to fourteen days.",
          "sub": "báo trước ngày khởi công, từ 7 lên 14 ngày.",
          "keys": [
            "từ 7 lên 14 ngày"
          ]
        }
      ],
      "ref": "p3"
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
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "D",
            "ms": 700
          },
          {
            "at": "l6",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
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
            "text": "② Tuần sau · Bảng ba cột",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:week"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
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
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l6",
                  "pose": "thumb"
                }
              ],
              "props": [
                "bar-chart",
                "page-facing-up"
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
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:week",
            "caption": "Tuần sau · phòng tài trợ dự án",
            "icon": "bar-chart"
          },
          {
            "id": "d-h1",
            "t": "text",
            "text": "CP của EPC",
            "x": 5964,
            "y": 150,
            "size": 36,
            "at": "l2:EPC",
            "color": "muted"
          },
          {
            "id": "d-h2",
            "t": "text",
            "text": "ĐK giải ngân",
            "x": 6234,
            "y": 150,
            "size": 36,
            "at": "l2:drawdown",
            "color": "muted"
          },
          {
            "id": "d-h3",
            "t": "text",
            "text": "Ai lo",
            "x": 6524,
            "y": 150,
            "size": 36,
            "at": "l2:responsible",
            "color": "muted"
          },
          {
            "id": "d-ln",
            "t": "line",
            "pts": [
              [
                5964,
                205
              ],
              [
                6764,
                205
              ]
            ],
            "at": "l2:responsible"
          },
          {
            "id": "d-r1",
            "t": "text",
            "text": "BL tạm ứng",
            "x": 5964,
            "y": 230,
            "size": 36,
            "at": "l3:advance"
          },
          {
            "id": "d-r1b",
            "t": "text",
            "text": "bản sao",
            "x": 6234,
            "y": 230,
            "size": 36,
            "at": "l3:copy"
          },
          {
            "id": "d-r1c",
            "t": "text",
            "text": "khớp ✓",
            "x": 6524,
            "y": 230,
            "size": 36,
            "at": "l3:match",
            "color": "accent"
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "Giấy phép NT",
            "x": 5964,
            "y": 300,
            "size": 36,
            "at": "l4:permits"
          },
          {
            "id": "d-r2b",
            "t": "text",
            "text": "+ phần CĐT",
            "x": 6234,
            "y": 300,
            "size": 36,
            "at": "l4:adds",
            "color": "coral"
          },
          {
            "id": "d-r2c",
            "t": "text",
            "text": "thêm",
            "x": 6524,
            "y": 300,
            "size": 36,
            "at": "l4:adds"
          },
          {
            "id": "d-r3",
            "t": "text",
            "text": "Ý kiến PL",
            "x": 5964,
            "y": 370,
            "size": 36,
            "at": "l5:legal"
          },
          {
            "id": "d-r3b",
            "t": "text",
            "text": "cùng đòi",
            "x": 6234,
            "y": 370,
            "size": 36,
            "at": "l5:Both"
          },
          {
            "id": "d-r3c",
            "t": "text",
            "text": "ai cấp?",
            "x": 6524,
            "y": 370,
            "size": 36,
            "at": "l5:who",
            "color": "coral"
          },
          {
            "id": "d-empty",
            "t": "text",
            "text": "Ô trống = câu hỏi gửi CĐT",
            "x": 5964,
            "y": 470,
            "size": 44,
            "at": "l6:empty",
            "hl": [
              {
                "text": "câu hỏi",
                "at": "l7:question"
              }
            ]
          },
          {
            "id": "d-take",
            "t": "text",
            "text": "Ô trống nào cũng là rủi ro",
            "x": 5964,
            "y": 560,
            "size": 48,
            "at": "l7:risk",
            "color": "accent",
            "hl": [
              {
                "text": "rủi ro",
                "at": "l7:risk"
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
          "say": "Stop two, the week after. The risk: CPs not tied to drawdown, so work starts before the money.",
          "sub": "Chặng hai, tuần sau. Rủi ro: CP không gắn với giải ngân, công trường khởi công khi vốn chưa sẵn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Three columns: EPC conditions, drawdown conditions, who is responsible.",
          "sub": "Ba cột: CP của hợp đồng EPC, điều kiện giải ngân, người chịu trách nhiệm.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Advance guarantee: due before the advance; the loan wants a copy. Match.",
          "sub": "Bảo lãnh tạm ứng: nộp trước khi nhận tạm ứng; điều kiện giải ngân đòi bản sao. Khớp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Permits: the EPC only covers the contractor's. So she adds the owner's to drawdown.",
          "sub": "Giấy phép: hợp đồng EPC chỉ ghi phần Nhà thầu. Thảo thêm phần Chủ đầu tư vào điều kiện giải ngân."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Legal opinion: both want one. Write who gives it, on what.",
          "sub": "Ý kiến pháp lý: hai bên cùng đòi. Ghi rõ ai cấp, về điều gì."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "And an empty cell?",
          "sub": "Còn ô trống thì sao?",
          "pose": "point"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "A question for the owner. Put the lists side by side: every empty cell is a risk.",
          "sub": "Là một câu hỏi gửi Chủ đầu tư. Đặt hai danh sách cạnh nhau: ô trống nào cũng là rủi ro.",
          "keys": [
            "ô trống nào cũng là rủi ro"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l6",
          "key": "pop",
          "offsetMs": 100
        }
      ],
      "ref": "p4,p5,p6"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "Cuối tháng · bàn chuyện tạm ứng",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Cứ lấy số của nghị định cho tạm ứng",
          "why": "Các con số tạm ứng trong NĐ 210/2026 chỉ áp cho dự án đầu tư công, PPP; vốn tư nhân tự thỏa thuận.",
          "rule": "Vốn tư nhân: tự thỏa thuận, kiểm văn bản hiện hành"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Decree two-ten says advances up to thirty percent. Let's just copy that!",
          "sub": "Nghị định 210 ghi tạm ứng tối đa 30%. Cứ thế mà chép!",
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
          "say": "Those figures apply only to public investment and PPP projects.",
          "sub": "Các con số ấy chỉ áp cho dự án đầu tư công, PPP.",
          "keys": [
            "chỉ áp cho dự án đầu tư công, PPP"
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
          "say": "Private project: we agree our own terms, and check current rules first.",
          "sub": "Dự án tư nhân: tự thỏa thuận, và kiểm văn bản hiện hành trước.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "zoom": 1.3,
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
            "text": "③ Cuối tháng · Tạm ứng",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:month"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 150,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "money-bag"
              ],
              "camera": [
                {
                  "at": "l3",
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
            "at": "l1:month",
            "caption": "Cuối tháng · phòng họp",
            "icon": "money-bag"
          },
          {
            "id": "e-def",
            "t": "text",
            "text": "Tạm ứng: ứng trước, không lãi",
            "x": 7932,
            "y": 150,
            "size": 44,
            "at": "l1:advance",
            "hl": [
              {
                "text": "không lãi",
                "at": "l1:interest-free"
              }
            ]
          },
          {
            "id": "e-nd",
            "t": "text",
            "text": "NĐ 210: tối đa 30%, EPC tối thiểu 10%,",
            "x": 7932,
            "y": 215,
            "size": 28,
            "at": "l2:thirty",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-nd2",
            "t": "text",
            "text": "bảo lãnh khi trên 1 tỷ — chỉ đầu tư công, PPP",
            "x": 7932,
            "y": 255,
            "size": 28,
            "at": "l2:billion",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 330,
            "w": 44,
            "h": 44,
            "at": "l3:before",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 312,
            "size": 56,
            "at": "l3:before+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Bảo lãnh trước khi tiền đi",
            "x": 8002,
            "y": 322,
            "size": 40,
            "at": "l3:before+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 415,
            "w": 44,
            "h": 44,
            "at": "l4:shrinks",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 397,
            "size": 56,
            "at": "l4:shrinks+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Giảm dần theo mức thu hồi",
            "x": 8002,
            "y": 407,
            "size": 40,
            "at": "l4:shrinks+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 500,
            "w": 44,
            "h": 44,
            "at": "l4:extended",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 482,
            "size": 56,
            "at": "l4:extended+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Gia hạn nếu chưa thu hồi hết",
            "x": 8002,
            "y": 492,
            "size": 40,
            "at": "l4:extended+200"
          },
          {
            "id": "e-net",
            "t": "text",
            "text": "thiếu 1 = không lưới đỡ",
            "x": 7932,
            "y": 610,
            "size": 48,
            "at": "l5:net",
            "color": "coral",
            "hl": [
              {
                "text": "không lưới đỡ",
                "at": "l5:no safety net"
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
          "say": "Stop three, end of the month. An advance is money the owner pays up front, interest-free.",
          "sub": "Chặng ba, cuối tháng. Tạm ứng là tiền Chủ đầu tư ứng trước cho Nhà thầu, không lãi.",
          "keys": [
            "không lãi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The decree's thirty, ten and one billion figures? Public and PPP only.",
          "sub": "Các con số 30%, 10%, 1 tỷ đồng của nghị định? Chỉ cho đầu tư công, PPP."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "What I need to see: the advance guarantee exists before money leaves the project account.",
          "sub": "Em cần thấy: bảo lãnh tạm ứng có trước khi tiền rời tài khoản dự án.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "It shrinks as the advance is recovered, and gets extended if recovery isn't done.",
          "sub": "Giá trị giảm dần theo mức đã thu hồi, và phải gia hạn nếu chưa thu hồi hết."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Miss one, and the advance is a trapeze act with no safety net.",
          "sub": "Thiếu một trong ba, khoản tạm ứng thành màn đu dây không lưới đỡ.",
          "keys": [
            "không lưới đỡ"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s10",
      "module": "BRK-07",
      "data": {
        "question": "Hạn phát NTP qua rồi, chưa ai sửa: sao nữa?",
        "illus": "hourglass-done"
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
          "say": "The NTP deadline passes and nobody fixes it. Then what?",
          "sub": "Hạn phát NTP qua rồi mà chưa ai sửa. Rồi sao?",
          "keys": [
            "chưa ai sửa"
          ]
        }
      ],
      "ref": "p9,p11"
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
              "f-q1",
              "f-q2"
            ],
            "zoom": 1.15,
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
            "text": "④ Hạn phát NTP",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:deadline"
          },
          {
            "id": "f-q1",
            "t": "text",
            "text": "“Nếu NTP chưa phát hành trong vòng [ ] Ngày",
            "x": 60,
            "y": 1250,
            "size": 40,
            "at": "l2:not issued",
            "font": "base"
          },
          {
            "id": "f-q2",
            "t": "text",
            "text": "kể từ Ngày Ký, mỗi Bên có quyền chấm dứt…”",
            "x": 60,
            "y": 1310,
            "size": 40,
            "at": "l2:either party",
            "font": "base",
            "hl": [
              {
                "text": "mỗi Bên có quyền chấm dứt",
                "at": "l2:terminate"
              }
            ]
          },
          {
            "id": "f-q3",
            "t": "text",
            "text": "…và CĐT hoàn trả mọi Bảo đảm của Nhà thầu",
            "x": 60,
            "y": 1370,
            "size": 30,
            "at": "l2:returns",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-sb",
            "t": "box",
            "x": 60,
            "y": 1470,
            "w": 760,
            "h": 150,
            "at": "l3:short",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "f-s1",
            "t": "text",
            "text": "Hạn ngắn hơn lịch vốn",
            "x": 90,
            "y": 1485,
            "size": 44,
            "at": "l3:short",
            "color": "coral"
          },
          {
            "id": "f-s2",
            "t": "text",
            "text": "→ Nhà thầu được rút, đàm phán lại",
            "x": 90,
            "y": 1550,
            "size": 36,
            "at": "l3:walk"
          },
          {
            "id": "f-lb",
            "t": "box",
            "x": 900,
            "y": 1470,
            "w": 760,
            "h": 150,
            "at": "l4:matches",
            "color": "accent",
            "stroke": 5
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Hạn khớp lịch vốn",
            "x": 930,
            "y": 1485,
            "size": 44,
            "at": "l4:matches",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "→ giữ Nhà thầu đã thẩm định",
            "x": 930,
            "y": 1550,
            "size": 36,
            "at": "l4:keeps"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: the NTP deadline. EPC contracts often let either side terminate if no NTP comes in time.",
          "sub": "Chặng bốn: hạn phát NTP. Hợp đồng EPC thường cho mỗi bên quyền chấm dứt nếu NTP không phát đúng hạn.",
          "keys": [
            "quyền chấm dứt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A model line: if the notice is not issued within so many days of signing, either party may terminate, and the owner returns all security.",
          "sub": "Câu mẫu: nếu Thông báo Khởi công chưa phát hành trong [ ] ngày kể từ Ngày Ký, mỗi Bên có quyền chấm dứt, Chủ đầu tư hoàn trả mọi Bảo đảm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two faces. Too short for the financing timetable, and the contractor can walk, then renegotiate price and schedule.",
          "sub": "Hai mặt. Hạn quá ngắn so với lịch thu xếp vốn: Nhà thầu có quyền rút, giá và tiến độ có thể phải đàm phán lại.",
          "keys": [
            "có quyền rút"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A deadline that matches the timetable keeps the contractor the lender already checked.",
          "sub": "Hạn khớp lịch thu xếp vốn thì giữ được Nhà thầu bên cho vay đã thẩm định.",
          "keys": [
            "giữ được Nhà thầu"
          ]
        }
      ],
      "ref": "p9,p10"
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
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tháng sau · Lá thư",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:month later"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "give"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "surprised"
                }
              ],
              "props": [
                "envelope",
                "chart-increasing"
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
            "at": "l1:month later",
            "caption": "Tháng sau · thư của Nhà thầu",
            "icon": "envelope"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Hạn NTP qua, không ai sửa",
            "x": 2028,
            "y": 1240,
            "size": 44,
            "at": "l1:passed"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Giá thiết bị tăng ↑",
            "x": 2028,
            "y": 1320,
            "size": 44,
            "at": "l2:prices",
            "color": "coral"
          },
          {
            "id": "g-env",
            "t": "illus",
            "name": "envelope",
            "x": 2028,
            "y": 1400,
            "size": 100,
            "at": "l3:notice"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Thông báo chấm dứt",
            "x": 2148,
            "y": 1415,
            "size": 48,
            "at": "l3:termination",
            "color": "coral",
            "hl": [
              {
                "text": "chấm dứt",
                "at": "l3:termination"
              }
            ]
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "+ ký lại, giá mới",
            "x": 2148,
            "y": 1485,
            "size": 40,
            "at": "l3:new price"
          },
          {
            "id": "g-take",
            "t": "text",
            "text": "Chưa khóa = quyền vẫn còn",
            "x": 2028,
            "y": 1610,
            "size": 52,
            "at": "l5:locked",
            "color": "accent",
            "hl": [
              {
                "text": "quyền vẫn còn",
                "at": "l5:still there"
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
          "say": "Stop five, a month later. The NTP deadline passed while a permit was pending. Nobody amended anything.",
          "sub": "Chặng năm, tháng sau. Hạn phát NTP qua trong lúc hồ sơ vay chờ một giấy phép. Không ai sửa hợp đồng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then equipment prices rise. Sam, the contractor's commercial manager, arrives with a letter.",
          "sub": "Rồi giá thiết bị tăng. Sam, đại diện thương mại của Nhà thầu, mang đến một lá thư.",
          "keys": [
            "giá thiết bị tăng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "A notice of termination, under the old clause. And an offer to re-sign at the new price.",
          "sub": "Thông báo chấm dứt, theo đúng điều khoản cũ. Kèm đề nghị ký lại với giá mới.",
          "pose": "give"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "But we've been working normally for weeks!",
          "sub": "Nhưng hai bên vẫn làm việc bình thường mấy tuần nay mà!",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A passed deadline that nobody locked? The right to terminate is still there.",
          "sub": "Thời hạn đã qua mà chưa khóa, quyền chấm dứt vẫn còn đó.",
          "keys": [
            "quyền chấm dứt vẫn còn đó"
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
      "ref": "p11,p12"
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
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "H",
            "ms": 700
          },
          {
            "at": "l5",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Bằng chứng thu xếp vốn",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:proof"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right"
                },
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
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
                  "shot": "E-SHOT-05",
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
            "at": "l1:proof",
            "caption": "Họp trực tuyến ba bên",
            "icon": "laptop"
          },
          {
            "id": "h-law",
            "t": "text",
            "text": "Luật XD 2025: được đòi chứng minh vốn",
            "x": 3996,
            "y": 1240,
            "size": 28,
            "at": "l1:Construction",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Không chứng minh → ngừng, chấm dứt",
            "x": 3996,
            "y": 1290,
            "size": 38,
            "at": "l2:suspend",
            "color": "coral"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "“theo yêu cầu hợp lý”",
            "x": 3996,
            "y": 1370,
            "size": 44,
            "at": "l3:reasonably",
            "hl": [
              {
                "text": "hợp lý",
                "at": "l3:reasonably"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Có HĐ vay, vẫn đòi thư NH",
            "x": 3996,
            "y": 1440,
            "size": 38,
            "at": "l3:letter"
          },
          {
            "id": "h-who",
            "t": "text",
            "text": "Ai sửa? CĐT + bên cho vay",
            "x": 3996,
            "y": 1530,
            "size": 44,
            "at": "l5:owner",
            "color": "accent"
          },
          {
            "id": "h-when",
            "t": "text",
            "text": "trước khi ký, hoặc qua phụ lục",
            "x": 3996,
            "y": 1595,
            "size": 36,
            "at": "l5:before"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: proof of financing. The Construction Law twenty twenty-five lets a contractor ask for it, except in public investment.",
          "sub": "Chặng sáu: bằng chứng thu xếp vốn. Luật Xây dựng 2025 cho bên nhận thầu quyền yêu cầu chứng minh, trừ đầu tư công.",
          "keys": [
            "bằng chứng thu xếp vốn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Many EPC contracts go further: no proof, no letter of credit, no advance, and the contractor may suspend or terminate.",
          "sub": "Nhiều hợp đồng đi xa hơn: không chứng minh vốn, không mở thư tín dụng, không tạm ứng thì Nhà thầu được ngừng hoặc chấm dứt."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Your clause says proof as we reasonably request. The loan isn't enough. We want a bank letter.",
          "sub": "Điều khoản ghi “theo yêu cầu hợp lý của Nhà thầu”. Hợp đồng vay chưa đủ. Chúng tôi muốn thư của ngân hàng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Who should fix this fog, and when?",
          "sub": "Ai nên xử lý khoảng mơ hồ này, và khi nào?",
          "keys": [
            "khoảng mơ hồ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "The owner and us, the lender. Before signing, or by amendment.",
          "sub": "Chủ đầu tư cùng bên cho vay. Trước khi ký, hoặc qua phụ lục.",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Say ahead what confirmation the bank will give, so it never becomes a surprise exit.",
          "sub": "Biết trước mình sẵn sàng xác nhận gì, để cam kết này không thành căn cứ chấm dứt ngoài ý muốn."
        }
      ],
      "ref": "p13,p14,p15"
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
            "at": "l2",
            "fit": [
              "h-take"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "H",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "h-list",
            "t": "text",
            "text": "Loại bằng chứng · thời hạn · hậu quả",
            "x": 3996,
            "y": 1690,
            "size": 38,
            "at": "l1:types",
            "hl": [
              {
                "text": "thời hạn",
                "at": "l1:deadline"
              }
            ]
          },
          {
            "id": "h-take",
            "t": "text",
            "text": "Mình định nghĩa, đừng để NT",
            "x": 3996,
            "y": 1780,
            "size": 48,
            "at": "l2:define",
            "color": "accent",
            "hl": [
              {
                "text": "định nghĩa",
                "at": "l2:define"
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
          "say": "The wording should list the types of proof, the deadline, and the consequence.",
          "sub": "Câu chữ nên liệt kê loại bằng chứng, thời hạn nộp và hậu quả.",
          "keys": [
            "loại bằng chứng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: define proof of financing yourself. Don't let the contractor define it.",
          "sub": "Rút ra: bằng chứng vốn phải được định nghĩa, đừng để Nhà thầu tự định nghĩa.",
          "keys": [
            "đừng để Nhà thầu tự định nghĩa"
          ]
        }
      ],
      "ref": "p15,p16"
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
              "i-a",
              "i-f"
            ],
            "zoom": 1.15,
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
            "text": "⑦ Quyền miễn CP",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:waive"
          },
          {
            "id": "i-s",
            "t": "text",
            "text": "“miễn CP tại điểm (a) đến (e)”",
            "x": 5964,
            "y": 1250,
            "size": 44,
            "at": "l1:points",
            "font": "base"
          },
          {
            "id": "i-p0",
            "t": "text",
            "text": "(a)",
            "x": 5964,
            "y": 1350,
            "size": 48,
            "at": "l2:inserted+0"
          },
          {
            "id": "i-p1",
            "t": "text",
            "text": "(b)",
            "x": 6114,
            "y": 1350,
            "size": 48,
            "at": "l2:inserted+150"
          },
          {
            "id": "i-p2",
            "t": "text",
            "text": "(c)",
            "x": 6264,
            "y": 1350,
            "size": 48,
            "at": "l2:inserted+300"
          },
          {
            "id": "i-p3",
            "t": "text",
            "text": "(d)",
            "x": 6414,
            "y": 1350,
            "size": 48,
            "at": "l2:inserted+450"
          },
          {
            "id": "i-p4",
            "t": "text",
            "text": "(e)",
            "x": 6564,
            "y": 1350,
            "size": 48,
            "at": "l2:inserted+600"
          },
          {
            "id": "i-a",
            "t": "text",
            "text": "(f) ← chèn thêm",
            "x": 6714,
            "y": 1350,
            "size": 48,
            "at": "l2:inserted",
            "color": "coral"
          },
          {
            "id": "i-f",
            "t": "text",
            "text": "điểm quan trọng rơi vào vùng miễn",
            "x": 5964,
            "y": 1440,
            "size": 40,
            "at": "l2:slips",
            "color": "coral",
            "hl": [
              {
                "text": "vùng miễn",
                "at": "l2:waivable"
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
          "say": "Stop seven: the waiver. A typical line: the owner may waive CPs in points a to e.",
          "sub": "Chặng bảy: quyền miễn. Câu hay gặp: Chủ đầu tư được miễn CP tại điểm (a) đến (e).",
          "keys": [
            "quyền miễn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But someone inserted a point, and the numbering shifted. Now a key condition slips into the waivable zone.",
          "sub": "Nhưng danh sách đã chèn thêm một điểm, số lệch. Một điều kiện quan trọng rơi vào vùng được miễn.",
          "keys": [
            "vùng được miễn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Nobody notices. Like a moved fence post in the dark.",
          "sub": "Mà không ai để ý. Như cọc rào bị dời trong đêm."
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s16",
      "module": "BRK-04",
      "data": {
        "title": "Câu miễn CP",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "CĐT có thể miễn bất kỳ điều kiện nào",
        "right": "Gọi tên điểm được miễn, có bên cho vay chấp thuận",
        "wrongIllus": "unlocked",
        "rightIllus": "locked-with-key"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: waive any condition.",
          "sub": "Trước: miễn bất kỳ điều kiện nào."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: named points, with lender consent.",
          "sub": "Sau: gọi tên điểm, có bên cho vay chấp thuận.",
          "keys": [
            "gọi tên điểm"
          ]
        }
      ],
      "ref": "p18"
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
            "at": "l2",
            "fit": [
              "i-take"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "I",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "i-keep",
            "t": "text",
            "text": "Không miễn: BL tạm ứng, BL thực hiện, bảo hiểm",
            "x": 5964,
            "y": 1560,
            "size": 30,
            "at": "l1:keeps",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "i-take",
            "t": "text",
            "text": "Quyền miễn: gọi tên từng điểm",
            "x": 5964,
            "y": 1650,
            "size": 52,
            "at": "l2:name",
            "color": "accent",
            "hl": [
              {
                "text": "gọi tên từng điểm",
                "at": "l2:name"
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
          "say": "The old version let the owner alone drop the safety net. The new one keeps the conditions that protect the loan.",
          "sub": "Bản trước cho Chủ đầu tư một mình bỏ lưới an toàn. Bản sau giữ lại các điều kiện bảo vệ khoản vay.",
          "keys": [
            "bảo vệ khoản vay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: a waiver right must name each point.",
          "sub": "Rút ra: quyền miễn CP phải gọi tên từng điểm.",
          "keys": [
            "gọi tên từng điểm"
          ]
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s18",
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          },
          {
            "at": "l5",
            "fit": [
              "j-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Ngày ký phụ lục · giải ngân",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:amendment"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "give",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "page-facing-up",
                "fountain-pen"
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
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:amendment",
            "caption": "Cùng phòng họp · ngày ký phụ lục",
            "icon": "fountain-pen"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1250,
            "w": 44,
            "h": 44,
            "at": "l2:status",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1232,
            "size": 56,
            "at": "l2:status+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Tình trạng công việc",
            "x": 8002,
            "y": 1242,
            "size": 38,
            "at": "l2:status+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1330,
            "w": 44,
            "h": 44,
            "at": "l2:used up",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1312,
            "size": 56,
            "at": "l2:used up+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Hạn đã qua: “đã dùng hết”",
            "x": 8002,
            "y": 1322,
            "size": 38,
            "at": "l2:used up+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1410,
            "w": 44,
            "h": 44,
            "at": "l2:extended",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1392,
            "size": 56,
            "at": "l2:extended+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Bảo đảm phải gia hạn",
            "x": 8002,
            "y": 1402,
            "size": 38,
            "at": "l2:extended+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1490,
            "w": 44,
            "h": 44,
            "at": "l4:two-way",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1472,
            "size": 56,
            "at": "l4:two-way+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Miễn trừ hai chiều, có danh sách",
            "x": 8002,
            "y": 1482,
            "size": 38,
            "at": "l4:two-way+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Đầu xuôi → đuôi lọt",
            "x": 7932,
            "y": 1610,
            "size": 56,
            "at": "l6:head",
            "color": "accent",
            "hl": [
              {
                "text": "đuôi lọt",
                "at": "l6:tail"
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
          "say": "Signing day again, same room. This time, an amendment before drawdown.",
          "sub": "Lại một ngày ký, cùng phòng họp. Lần này là phụ lục sửa đổi trước giải ngân.",
          "keys": [
            "phụ lục sửa đổi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "A transition section: work status, passed deadlines treated as used up, security extended.",
          "sub": "Mục ghi nhận và chuyển tiếp: tình trạng công việc, thời hạn đã qua coi như “đã dùng hết”, bảo đảm phải gia hạn.",
          "keys": [
            "đã dùng hết"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "We keep our claims for the late NTP and the late letter of credit.",
          "sub": "Chúng tôi giữ quyền đòi tiền cho việc NTP chậm và thư tín dụng chậm.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The usual fix: a limited two-way waiver, with a list of specific events. An open old claim is a cost missing from the model.",
          "sub": "Cách thường thấy: miễn trừ hai chiều có giới hạn, kèm danh sách sự kiện. Khiếu nại cũ còn mở là khoản chi chưa có trong mô hình tài chính."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "And now the full sentence: the NTP is out, the money is ready, and we start!",
          "sub": "Và giờ nói trọn câu: NTP đã phát, vốn đã sẵn, và mình khởi công!",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The head went through smoothly. So the tail follows.",
          "sub": "Đầu đã xuôi, thì đuôi sẽ lọt.",
          "keys": [
            "đuôi sẽ lọt"
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
      "ref": "p20,p21"
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
            "at": "l1:columns",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:advance",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:lock",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l4:end",
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
            "at": "l1:columns+900"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 20,
            "at": "l2:advance+900"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3568,
            "y": 1110,
            "at": "l3:lock+900"
          },
          {
            "id": "z-src",
            "t": "text",
            "text": "Luật Điện lực 2024: NTP bám mốc GCN đầu tư",
            "x": 7932,
            "y": 1702,
            "size": 28,
            "at": "l4:Electricity",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung, không phải tư vấn pháp lý; tình huống là minh hoạ, không lấy từ hợp đồng hay dự án cụ thể nào.",
            "x": 7932,
            "y": 1790,
            "size": 28,
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
          "say": "So: put the EPC CPs and drawdown conditions in three columns, side by side.",
          "sub": "Tóm lại: đặt CP của hợp đồng EPC và điều kiện giải ngân vào bảng ba cột, cạnh nhau.",
          "keys": [
            "bảng ba cột"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No advance leaves without its guarantee.",
          "sub": "Tiền tạm ứng không rời tài khoản khi chưa có bảo lãnh.",
          "keys": [
            "chưa có bảo lãnh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And lock every passed deadline in the amendment.",
          "sub": "Và khóa mọi thời hạn đã qua trong phụ lục.",
          "keys": [
            "khóa mọi thời hạn đã qua"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Under the Electricity Law twenty twenty-four, the NTP and schedule also follow the milestones in the investment certificate. Check current rules for permits.",
          "sub": "Theo Luật Điện lực 2024, ngày NTP và tiến độ còn phải bám mốc trong Giấy chứng nhận đăng ký đầu tư; giấy phép cụ thể cần kiểm văn bản hiện hành."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p22,outro"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "data": {
        "q": "The deadline for the notice passed and nobody amended the contract, what did the contractor later do?",
        "options": [
          "It asked the lender to take over the project and pay its staff directly",
          "It forgot the deadline forever and finished the plant at a lower price",
          "When equipment prices rose, it terminated under the old clause and asked for a new price"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "envelope",
        "why": "Trong tình huống, thời hạn qua đi mà không ai sửa hợp đồng. Khi giá thiết bị tăng, Nhà thầu dùng đúng điều khoản cũ để chấm dứt và đề nghị ký lại với giá mới."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The deadline for the notice passed and nobody amended the contract, what did the contractor later do?",
          "sub": "Thời hạn phát NTP đã qua và không ai sửa hợp đồng, sau đó Nhà thầu làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A passed deadline that nobody locked still gives a right to terminate.",
          "sub": "Thời hạn đã qua mà chưa khóa, quyền chấm dứt vẫn còn đó."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[17]"
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
          "say": "Right now: build the three-column table for your project.",
          "sub": "Việc làm ngay: lập bảng ba cột cho dự án của bạn.",
          "keys": [
            "bảng ba cột"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next: delay damages and the cap. Now, forty questions below!",
          "sub": "Bài sau: phạt chậm và trần. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-22",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-22 (câu thoại bị cắt): ngày ký, Dũng “Mai máy xúc vào, và mình…” → nói trọn ở s03 (≈ 60 s) rồi Đét gạch; nói trọn lần nữa ở khép vòng s18 (“NTP đã phát, vốn đã sẵn, và mình khởi công!”). Dòng thời gian: MÙA THU XẾP VỐN (ngày ký → ① hôm sau CP p2, NTP cò súng p3, BRK-03 7→14 ngày → ② tuần sau bảng ba cột p4–p6 → ③ cuối tháng tạm ứng, “Khoan đã!” Dũng chép số NĐ 210 p7, ba điều p8 → ④ hạn phát NTP p9–p10 → ⑤ tháng sau thư chấm dứt của Sam p11–p12 → ⑥ bằng chứng thu xếp vốn p13–p16 → ⑦ quyền miễn CP p17–p19, BRK-04 Trước/Sau → ngày ký phụ lục cùng phòng họp p20–p21 → tóm tắt + p22). Nhân vật: w145/_series/epc-lender.md (Thảo, Dũng, Sam, cô Hoa). Tình huống p11 (Chủ đầu tư ký hạn NTP ngắn, Nhà thầu gửi thông báo chấm dứt) gán cho Sam/Dũng. Mẫu hợp đồng quốc tế bản 2017 (bài nêu tên) → nói chung; không nêu tên hãng luật. Tục ngữ mở/khép: “Đầu xuôi đuôi lọt”. BRK: 03 (7 → 14 ngày p3), 07 (rehook hạn NTP), 04 (Trước/Sau câu miễn p18). Số chỉ lấy từ bài: 7/14 ngày, NĐ 210/2026 30%/10%/1 tỷ (chỉ đầu tư công, PPP), Luật Xây dựng 2025, Luật Điện lực 2024. Câu đố questions[17].",
  "loop": {
    "open": "s00",
    "close": "s18"
  }
};
