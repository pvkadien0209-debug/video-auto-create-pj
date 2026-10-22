// payroll-basics-for-cb-specialists--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "payroll-basics-for-cb-specialists--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "junior-payroll-specialists",
    "slug": "payroll-basics-for-cb-specialists",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Làm tiền lương, bảo hiểm: năm đầu cần nắm những gì?",
    "series": "Bảng lương không sai — tính lương, bảo hiểm, thuế cho chuyên viên C&B năm đầu"
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
              "a-file",
              "a-note"
            ],
            "zoom": 1.4,
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
            "id": "a-file",
            "t": "illus",
            "name": "ledger",
            "x": 80,
            "y": 120,
            "size": 230,
            "at": "l1:spreadsheet"
          },
          {
            "id": "a-rows",
            "t": "text",
            "text": "vài trăm dòng",
            "x": 340,
            "y": 170,
            "size": 60,
            "at": "l1:hundred",
            "color": "muted"
          },
          {
            "id": "a-pad",
            "t": "box",
            "x": 330,
            "y": 260,
            "w": 500,
            "h": 120,
            "at": "l1:sticky",
            "fill": "#ffe873",
            "stroke": 4
          },
          {
            "id": "a-note",
            "t": "text",
            "text": "“Mai chốt lương nhé”",
            "x": 350,
            "y": 285,
            "size": 52,
            "at": "l2:payroll",
            "hl": [
              {
                "text": "chốt lương",
                "at": "l2:close"
              }
            ]
          },
          {
            "id": "a-300",
            "t": "text",
            "text": "~300 người chờ",
            "x": 80,
            "y": 450,
            "size": 64,
            "at": "l3:three",
            "color": "accent",
            "hl": [
              {
                "text": "300 người",
                "at": "l3:three hundred"
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
          "say": "A spreadsheet with a few hundred rows. And on top, one yellow sticky note.",
          "sub": "Một tệp bảng tính vài trăm dòng. Trên đó, một mẩu giấy vàng.",
          "keys": [
            "mẩu giấy vàng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It says: we close payroll tomorrow.",
          "sub": "Ghi: “Mai chốt lương nhé.”",
          "keys": [
            "Mai chốt lương nhé"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "About three hundred workers, each waiting for one number. No pressure at all.",
          "sub": "Khoảng ba trăm công nhân, mỗi người chờ một con số. Không áp lực gì đâu.",
          "keys": [
            "mỗi người chờ một con số"
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
            "at": "l4",
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
            "id": "a-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "ledger",
                "memo"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
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
            "at": "l1",
            "caption": "Tháng Bảy · phòng nhân sự",
            "icon": "memo"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Sai một li, đi một dặm”",
            "x": 80,
            "y": 600,
            "size": 56,
            "at": "l6:hair",
            "color": "accent",
            "hl": [
              {
                "text": "đi một dặm",
                "at": "l6:mile"
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
          "say": "Meet Thảo, first month in C&B at a garment factory.",
          "sub": "Đây là Thảo, tháng đầu làm C&B ở một xưởng may.",
          "keys": [
            "tháng đầu làm C&B"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is cô Hoa, head of HR, author of the yellow note.",
          "sub": "Còn đây là cô Hoa, trưởng phòng nhân sự, tác giả mẩu giấy vàng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Tomorrow we close payroll. Okay?",
          "sub": "Mai chốt lương nhé. Rồi, vậy nha."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Okay! Um... close what? It's one file, right?",
          "sub": "Dạ! Ơ... chốt những gì ạ? Một tệp thôi mà?",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Off by a hair, off by a mile. In payroll, a mile of phone calls.",
          "sub": "“Sai một li, đi một dặm.” Với bảng lương, là một dặm cuộc gọi thắc mắc.",
          "keys": [
            "Sai một li, đi một dặm"
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
      "ref": "intro,p2"
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
            "text": "Năm đầu cần nắm gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:master",
            "hl": [
              {
                "text": "cần nắm gì",
                "at": "l1:master"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Một tệp Excel",
            "x": 2028,
            "y": 170,
            "size": 56,
            "at": "l2:Excel",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:flow"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Một dòng chảy dữ liệu",
            "x": 2608,
            "y": 170,
            "size": 56,
            "at": "l2:flow",
            "color": "accent",
            "hl": [
              {
                "text": "dòng chảy",
                "at": "l2:flow"
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
          "say": "So what must you master in your first year of payroll?",
          "sub": "Vậy năm đầu làm lương, cần nắm những gì?",
          "keys": [
            "cần nắm những gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not one Excel file. A flow of data, from timesheets to money in each account.",
          "sub": "Không phải một tệp Excel. Mà là một dòng chảy dữ liệu, từ chấm công đến tiền về tài khoản.",
          "keys": [
            "dòng chảy dữ liệu"
          ]
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
            "id": "b-f0",
            "t": "box",
            "x": 2028,
            "y": 290,
            "w": 385,
            "h": 100,
            "at": "l1:Timesheets",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-f1",
            "t": "box",
            "x": 2443,
            "y": 290,
            "w": 385,
            "h": 100,
            "at": "l1:allowances",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-f2",
            "t": "box",
            "x": 2858,
            "y": 290,
            "w": 385,
            "h": 100,
            "at": "l1:overtime",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-f3",
            "t": "box",
            "x": 3273,
            "y": 290,
            "w": 385,
            "h": 100,
            "at": "l1:insurance",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-f4",
            "t": "box",
            "x": 2028,
            "y": 430,
            "w": 385,
            "h": 100,
            "at": "l1:withheld",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-f5",
            "t": "box",
            "x": 2443,
            "y": 430,
            "w": 385,
            "h": 100,
            "at": "l2:take",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-f6",
            "t": "box",
            "x": 2858,
            "y": 430,
            "w": 385,
            "h": 100,
            "at": "l2:payslip",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-f7",
            "t": "box",
            "x": 3273,
            "y": 430,
            "w": 385,
            "h": 100,
            "at": "l2:reported",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-ft0",
            "t": "text",
            "text": "1. Chấm công",
            "x": 2048,
            "y": 312,
            "size": 36,
            "at": "l1:Timesheets+200"
          },
          {
            "id": "b-ft1",
            "t": "text",
            "text": "2. Lương, phụ cấp",
            "x": 2463,
            "y": 312,
            "size": 36,
            "at": "l1:allowances+200"
          },
          {
            "id": "b-ft2",
            "t": "text",
            "text": "3. Làm thêm giờ",
            "x": 2878,
            "y": 312,
            "size": 36,
            "at": "l1:overtime+200"
          },
          {
            "id": "b-ft3",
            "t": "text",
            "text": "4. Trừ bảo hiểm",
            "x": 3293,
            "y": 312,
            "size": 36,
            "at": "l1:insurance+200"
          },
          {
            "id": "b-ft4",
            "t": "text",
            "text": "5. Trừ thuế",
            "x": 2048,
            "y": 452,
            "size": 36,
            "at": "l1:withheld+200"
          },
          {
            "id": "b-ft5",
            "t": "text",
            "text": "6. Thực lĩnh",
            "x": 2463,
            "y": 452,
            "size": 36,
            "at": "l2:take+200"
          },
          {
            "id": "b-ft6",
            "t": "text",
            "text": "7. Chi trả, bảng kê",
            "x": 2878,
            "y": 452,
            "size": 36,
            "at": "l2:payslip+200"
          },
          {
            "id": "b-ft7",
            "t": "text",
            "text": "8. Nộp, báo tăng giảm",
            "x": 3293,
            "y": 452,
            "size": 36,
            "at": "l2:reported+200"
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "Sai đầu → sai đến cuối",
            "x": 2028,
            "y": 600,
            "size": 56,
            "at": "l3:Muddy",
            "color": "coral",
            "hl": [
              {
                "text": "sai đến cuối",
                "at": "l3:down"
              }
            ]
          },
          {
            "id": "b-m",
            "t": "text",
            "text": "Theo Thảo: tháng Bảy",
            "x": 2928,
            "y": 610,
            "size": 46,
            "at": "l4:July"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Timesheets, pay and allowances, overtime, insurance deducted, income tax withheld.",
          "sub": "Chấm công, lương và phụ cấp, làm thêm giờ, trừ bảo hiểm, khấu trừ thuế."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then take-home pay, payment with a payslip, insurance paid, and staff changes reported.",
          "sub": "Rồi ra thực lĩnh, chi trả kèm bảng kê, nộp bảo hiểm, báo tăng giảm lao động."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Each stage drinks from the one before. Muddy upstream, muddy all the way down.",
          "sub": "Chặng sau uống nước chặng trước. Đầu nguồn đục thì cuối dòng cũng đục.",
          "keys": [
            "Đầu nguồn đục"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Now, Thảo's first payroll month, July, stage by stage.",
          "sub": "Giờ theo Thảo qua tháng lương đầu tiên, tháng Bảy, từng chặng một.",
          "keys": [
            "tháng lương đầu tiên"
          ]
        }
      ],
      "ref": "p1,outro"
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
            "at": "l4",
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
            "text": "① Chiều ngày chốt · Chấm công",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stage",
            "hl": [
              {
                "text": "Chấm công",
                "at": "l1:timesheets"
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold"
                }
              ],
              "props": [
                "e-mail",
                "spiral-calendar"
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
            "at": "l1",
            "caption": "Chiều ngày chốt · email đến",
            "icon": "e-mail"
          },
          {
            "id": "c-mail",
            "t": "illus",
            "name": "incoming-envelope",
            "x": 3996,
            "y": 170,
            "size": 110,
            "at": "l1:email"
          },
          {
            "id": "c-in",
            "t": "text",
            "text": "Tổ trưởng gửi qua email",
            "x": 4126,
            "y": 195,
            "size": 46,
            "at": "l1:email+200"
          },
          {
            "id": "c-paste",
            "t": "text",
            "text": "Dán thẳng vào bảng lương?",
            "x": 3996,
            "y": 320,
            "size": 46,
            "at": "l4:Straight",
            "color": "muted"
          },
          {
            "id": "c-old",
            "t": "text",
            "text": "Tệp tháng Sáu!",
            "x": 3996,
            "y": 410,
            "size": 64,
            "at": "l5:June",
            "color": "coral",
            "hl": [
              {
                "text": "tháng Sáu",
                "at": "l5:June"
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
          "say": "Stage one: closing day, afternoon. Team leaders email their timesheets.",
          "sub": "Chặng một: chiều ngày chốt. Các tổ trưởng gửi bảng chấm công qua email.",
          "keys": [
            "bảng chấm công"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The sewing team's file lands last, in a hurry.",
          "sub": "Tệp của tổ may đến sau cùng, gửi vội."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Got it. Straight into the payroll. Done!",
          "sub": "Nhận rồi. Dán thẳng vào bảng lương. Xong!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Too fast. Look at the dates. That file is from June.",
          "sub": "Nhanh quá. Nhìn ngày tháng kìa. Tệp ấy là của tháng Sáu.",
          "keys": [
            "tháng Sáu"
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
      "ref": "p2"
    },
    {
      "id": "s05",
      "module": "BRK-01",
      "data": {
        "illus": "page-facing-up",
        "around": [
          "spiral-calendar",
          "warning"
        ],
        "label": "Sai ở đây!",
        "note": "Tệp chấm công của tháng trước"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Freeze. Right here.",
          "sub": "Dừng hình. Ngay đây."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Last month's timesheet, pasted without checking the dates.",
          "sub": "Tệp chấm công tháng trước, dán vào mà không so ngày tháng.",
          "keys": [
            "không so ngày tháng"
          ]
        }
      ],
      "ref": "p2"
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
            "id": "c-1",
            "t": "text",
            "text": "Cả tổ sai giờ làm thêm",
            "x": 3996,
            "y": 500,
            "size": 46,
            "at": "l1:whole"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Hàng chục câu hỏi",
            "x": 3996,
            "y": 570,
            "size": 46,
            "at": "l2:dozens",
            "color": "muted"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Kiểm đầu vào trước khi tính",
            "x": 3996,
            "y": 670,
            "size": 54,
            "at": "l3:check",
            "color": "accent",
            "hl": [
              {
                "text": "Kiểm đầu vào",
                "at": "l3:input"
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
          "say": "Pasted as is, the whole team would get the wrong overtime hours.",
          "sub": "Nếu dán nguyên như thế, cả tổ sẽ nhận sai số giờ làm thêm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And next morning, HR would get dozens of questions.",
          "sub": "Và sáng hôm sau, phòng nhân sự nhận hàng chục câu hỏi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lesson: check the input before you calculate. Errors at the start flow to the end.",
          "sub": "Rút ra: kiểm dữ liệu đầu vào trước khi tính, vì sai ở đầu sẽ chảy đến cuối.",
          "keys": [
            "kiểm dữ liệu đầu vào"
          ]
        }
      ],
      "ref": "p2,p3"
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
            "text": "② Tối · Lương và làm thêm",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:evening",
            "hl": [
              {
                "text": "làm thêm",
                "at": "l1:overtime"
              }
            ]
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
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
                "crescent-moon"
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
            "at": "l1",
            "caption": "Tối ngày chốt · còn mình Thảo",
            "icon": "crescent-moon"
          },
          {
            "id": "d-150",
            "t": "text",
            "text": "Ngày thường ≥ 150%",
            "x": 5964,
            "y": 160,
            "size": 52,
            "at": "l3:fifty",
            "hl": [
              {
                "text": "150%",
                "at": "l3:fifty"
              }
            ]
          },
          {
            "id": "d-200",
            "t": "text",
            "text": "Nghỉ hằng tuần ≥ 200%",
            "x": 5964,
            "y": 240,
            "size": 52,
            "at": "l4:Two"
          },
          {
            "id": "d-300",
            "t": "text",
            "text": "Lễ, Tết ≥ 300%",
            "x": 5964,
            "y": 320,
            "size": 52,
            "at": "l4:three",
            "color": "accent",
            "hl": [
              {
                "text": "300%",
                "at": "l4:three"
              }
            ]
          },
          {
            "id": "d-pay",
            "t": "text",
            "text": "Lương tháng: 1 hoặc 2 lần",
            "x": 5964,
            "y": 410,
            "size": 44,
            "at": "l5:once",
            "color": "muted"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Điều 97, 98 Bộ luật Lao động 2019",
            "x": 5964,
            "y": 480,
            "size": 24,
            "at": "l3+800",
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
          "say": "Stage two: that evening. Pay, allowances and overtime.",
          "sub": "Chặng hai: tối hôm đó. Lương, phụ cấp và làm thêm giờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Overtime on a weekday, on Sunday, on a holiday. Same rate, right?",
          "sub": "Làm thêm ngày thường, chủ nhật, ngày lễ. Cùng một mức hả?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not at all. Daytime overtime pays at least one hundred and fifty percent on normal days.",
          "sub": "Không hề. Làm thêm ban ngày được ít nhất 150% vào ngày thường.",
          "keys": [
            "150%"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two hundred on weekly rest days. Three hundred on public holidays and Tết.",
          "sub": "200% vào ngày nghỉ hằng tuần. 300% vào ngày lễ, Tết.",
          "keys": [
            "300%"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Monthly pay: once a month, or every half month.",
          "sub": "Lương tháng: một tháng một lần, hoặc nửa tháng một lần."
        }
      ],
      "ref": "p4"
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
            "at": "l1",
            "fit": [
              "d-r0",
              "d-r3"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-min",
            "t": "text",
            "text": "Sàn: lương tối thiểu vùng",
            "x": 5964,
            "y": 540,
            "size": 44,
            "at": "l1:floor",
            "hl": [
              {
                "text": "tối thiểu vùng",
                "at": "l1:minimum"
              }
            ]
          },
          {
            "id": "d-r0",
            "t": "text",
            "text": "Vùng I: 5.310.000 đ",
            "x": 5964,
            "y": 610,
            "size": 40,
            "at": "l1:five",
            "color": "accent"
          },
          {
            "id": "d-r1",
            "t": "text",
            "text": "Vùng II: 4.730.000 đ",
            "x": 6384,
            "y": 610,
            "size": 40,
            "at": "l2:two",
            "color": "ink"
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "Vùng III: 4.140.000 đ",
            "x": 5964,
            "y": 680,
            "size": 40,
            "at": "l2:three",
            "color": "ink"
          },
          {
            "id": "d-r3",
            "t": "text",
            "text": "Vùng IV: 3.700.000 đ",
            "x": 6384,
            "y": 680,
            "size": 40,
            "at": "l2:four",
            "color": "ink"
          },
          {
            "id": "d-br",
            "t": "text",
            "text": "Chi nhánh: nơi hoạt động",
            "x": 6804,
            "y": 700,
            "size": 40,
            "at": "l3:branch",
            "color": "coral",
            "hl": [
              {
                "text": "nơi hoạt động",
                "at": "l3:operates"
              }
            ]
          },
          {
            "id": "d-src2",
            "t": "text",
            "text": "Từ 01/01/2026 · Nghị định 293/2025/NĐ-CP",
            "x": 5964,
            "y": 745,
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
          "say": "Then a floor. From January 2026, the monthly minimum wage in region one is five million three hundred ten thousand dong.",
          "sub": "Rồi đến cái sàn. Từ 01/01/2026, lương tối thiểu tháng vùng I là 5.310.000 đồng.",
          "keys": [
            "5.310.000 đồng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Regions two, three and four step down, to three million seven hundred thousand.",
          "sub": "Vùng II, III, IV thấp dần, tới 3.700.000 đồng ở vùng IV."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A business uses its own region. A branch elsewhere uses the region where the branch operates.",
          "sub": "Doanh nghiệp ở vùng nào áp mức vùng đó; chi nhánh ở nơi khác áp mức nơi chi nhánh hoạt động.",
          "keys": [
            "nơi chi nhánh hoạt động"
          ]
        }
      ],
      "ref": "p5"
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
            "text": "③ Sáng hôm sau · Bảo hiểm",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:morning",
            "hl": [
              {
                "text": "Bảo hiểm",
                "at": "l1:insurance"
              }
            ]
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "shield",
                "clipboard"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Sáng hôm sau · bàn cô Hoa",
            "icon": "shield"
          },
          {
            "id": "e-nld",
            "t": "text",
            "text": "Người lao động: 10,5%",
            "x": 7932,
            "y": 160,
            "size": 52,
            "at": "l3:worker",
            "color": "accent",
            "hl": [
              {
                "text": "10,5%",
                "at": "l3:eight"
              }
            ]
          },
          {
            "id": "e-nld2",
            "t": "text",
            "text": "8 hưu, 1,5 y tế, 1 TN",
            "x": 7932,
            "y": 235,
            "size": 34,
            "at": "l3:retirement",
            "color": "muted"
          },
          {
            "id": "e-dn",
            "t": "text",
            "text": "Doanh nghiệp: 21,5%",
            "x": 7932,
            "y": 320,
            "size": 52,
            "at": "l4:company"
          },
          {
            "id": "e-dn2",
            "t": "text",
            "text": "14 hưu, 3 ốm đau, thai sản",
            "x": 7932,
            "y": 395,
            "size": 34,
            "at": "l4:fourteen",
            "color": "muted"
          },
          {
            "id": "e-dn3",
            "t": "text",
            "text": "0,5 TNLĐ, 3 y tế, 1 TN",
            "x": 7932,
            "y": 450,
            "size": 34,
            "at": "l5:three",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stage three: next morning. Compulsory insurance.",
          "sub": "Chặng ba: sáng hôm sau. Bảo hiểm bắt buộc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Worker ten and a half. Company twenty-one and a half. Don't swap them.",
          "sub": "Người lao động 10,5. Công ty 21,5. Đừng đảo nhé.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Worker: eight to retirement and survivors, one and a half health, one unemployment.",
          "sub": "Phần người lao động 10,5%: 8% hưu trí, tử tuất, 1,5% y tế, 1% thất nghiệp.",
          "keys": [
            "10,5%"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Company: fourteen retirement, three sickness and maternity, half a percent work accidents.",
          "sub": "Doanh nghiệp 21,5%: 14% hưu trí, 3% ốm đau, thai sản, 0,5% tai nạn lao động."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Plus three percent health and one percent unemployment.",
          "sub": "Cộng 3% y tế và 1% thất nghiệp."
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s10",
      "module": "BRK-03",
      "data": {
        "value": 32,
        "suffix": "%",
        "label": "tổng tỷ lệ đóng của hai bên",
        "illus": "shield"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Add both sides together.",
          "sub": "Cộng cả hai bên lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thirty-two percent of the insured salary.",
          "sub": "Là 32% tiền lương đóng.",
          "keys": [
            "32%"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p6"
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
            "at": "l5",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
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
            "id": "e-base",
            "t": "text",
            "text": "Lương đóng ≥ tối thiểu vùng",
            "x": 7932,
            "y": 540,
            "size": 42,
            "at": "l1:below",
            "hl": [
              {
                "text": "≥ tối thiểu vùng",
                "at": "l1:below"
              }
            ]
          },
          {
            "id": "e-cap",
            "t": "text",
            "text": "Trần BHXH, BHYT: 50,6 triệu",
            "x": 7932,
            "y": 610,
            "size": 42,
            "at": "l2:fifty",
            "color": "accent",
            "hl": [
              {
                "text": "50,6 triệu",
                "at": "l2:fifty"
              }
            ]
          },
          {
            "id": "e-cap2",
            "t": "text",
            "text": "Trần BHTN: 20 lần tối thiểu vùng",
            "x": 7932,
            "y": 680,
            "size": 36,
            "at": "l2:end"
          },
          {
            "id": "e-mid",
            "t": "text",
            "text": "01/7/2026: trần đổi giữa năm",
            "x": 8772,
            "y": 700,
            "size": 40,
            "at": "l4:mid",
            "color": "coral",
            "hl": [
              {
                "text": "đổi giữa năm",
                "at": "l4:mid"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Lương cơ sở 2,53 triệu (Nghị định 161/2026) × 20",
            "x": 7932,
            "y": 745,
            "size": 24,
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
          "say": "Insured salary: base pay, allowances, regular stable extras. Never below the regional minimum.",
          "sub": "Lương đóng gồm mức lương, phụ cấp lương, khoản bổ sung thường xuyên, ổn định; không thấp hơn tối thiểu vùng.",
          "keys": [
            "không thấp hơn tối thiểu vùng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The ceiling for social and health insurance: twenty times the base salary, so fifty point six million.",
          "sub": "Trần đóng BHXH, BHYT: 20 lần lương cơ sở, tức 50,6 triệu đồng.",
          "keys": [
            "50,6 triệu đồng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Did you know? The base salary of two point five three million began July first, 2026. The ceiling moved mid year.",
          "sub": "Bạn có biết: lương cơ sở 2,53 triệu áp dụng từ 01/7/2026, nên trần đổi ngay giữa năm.",
          "keys": [
            "trần đổi ngay giữa năm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "So a high earner may pay differently in July than in June. Same contract!",
          "sub": "Vậy người lương cao có thể đóng tháng Bảy khác tháng Sáu. Hợp đồng y nguyên!",
          "face": "surprised"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Lesson: when base or minimum wage changes, recheck the floor and ceiling columns.",
          "sub": "Rút ra: lương cơ sở hay tối thiểu vùng đổi thì kiểm lại cột sàn, cột trần.",
          "keys": [
            "cột sàn, cột trần"
          ]
        }
      ],
      "ref": "p7,p8,p9"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Bảo hiểm xong. Thuế tính trên cả lương à?",
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
          "say": "Insurance is done. So is tax charged on the whole salary?",
          "sub": "Bảo hiểm xong. Vậy thuế tính trên cả lương à?",
          "keys": [
            "thuế tính trên cả lương"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
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
            "text": "④ Trưa · Thuế thu nhập cá nhân",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stage",
            "hl": [
              {
                "text": "Thuế",
                "at": "l1:tax"
              }
            ]
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "receipt",
                "abacus"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Giờ trưa · máy tính và cơm hộp",
            "icon": "receipt"
          },
          {
            "id": "f-gt",
            "t": "text",
            "text": "Giảm trừ: 15,5 triệu/tháng",
            "x": 60,
            "y": 1250,
            "size": 46,
            "at": "l2:fifteen",
            "color": "accent",
            "hl": [
              {
                "text": "15,5 triệu",
                "at": "l2:fifteen"
              }
            ]
          },
          {
            "id": "f-pt",
            "t": "text",
            "text": "Người phụ thuộc: 6,2 triệu",
            "x": 60,
            "y": 1325,
            "size": 46,
            "at": "l2:dependant"
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "Biểu 5 bậc: 5% → 35%",
            "x": 60,
            "y": 1410,
            "size": 50,
            "at": "l3:five",
            "hl": [
              {
                "text": "5 bậc",
                "at": "l3:five brackets"
              }
            ]
          },
          {
            "id": "f-b1",
            "t": "text",
            "text": "Bậc 1: đến 10 triệu, 5%",
            "x": 60,
            "y": 1490,
            "size": 42,
            "at": "l4:ten",
            "color": "muted"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Nghị quyết 110/2025/UBTVQH15; Luật Thuế TNCN 2025",
            "x": 60,
            "y": 1560,
            "size": 24,
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
          "say": "Stage four: lunchtime. Personal income tax.",
          "sub": "Chặng bốn: giờ trưa. Thuế thu nhập cá nhân."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "From the 2026 tax period, the family deduction is fifteen point five million a month, plus six point two million per dependant.",
          "sub": "Từ kỳ tính thuế 2026, giảm trừ gia cảnh 15,5 triệu/tháng cho bản thân, 6,2 triệu cho mỗi người phụ thuộc.",
          "keys": [
            "15,5 triệu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The progressive table now has five brackets: five, ten, twenty, thirty, thirty-five percent.",
          "sub": "Biểu lũy tiến còn 5 bậc: 5%, 10%, 20%, 30%, 35%.",
          "keys": [
            "5 bậc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Bracket one, up to ten million, pays five percent.",
          "sub": "Bậc 1, đến 10 triệu, chịu 5%."
        }
      ],
      "ref": "p10"
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
            "id": "f-ex",
            "t": "text",
            "text": "Làm mẫu: lương 25 triệu",
            "x": 60,
            "y": 1620,
            "size": 42,
            "at": "l1:Huy",
            "color": "coral"
          },
          {
            "id": "f-s1",
            "t": "text",
            "text": "25 − 15,5 − 2,625 = 6,875",
            "x": 60,
            "y": 1690,
            "size": 42,
            "at": "l3:minus"
          },
          {
            "id": "f-s2",
            "t": "text",
            "text": "× 5% = 343.750 đ",
            "x": 60,
            "y": 1770,
            "size": 50,
            "at": "l4:times",
            "color": "accent",
            "hl": [
              {
                "text": "343.750 đ",
                "at": "l4:fifty"
              }
            ]
          },
          {
            "id": "f-dep",
            "t": "text",
            "text": "1 người phụ thuộc: ~33.750 đ",
            "x": 900,
            "y": 1790,
            "size": 36,
            "at": "l5:dependant"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Trừ trước, áp biểu sau",
            "x": 500,
            "y": 1770,
            "size": 44,
            "at": "l6:first",
            "color": "accent",
            "hl": [
              {
                "text": "Trừ trước",
                "at": "l6:first"
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
          "say": "Worked example: Huy earns twenty-five million, no dependants.",
          "sub": "Ví dụ trong bài: Huy lương 25 triệu, chưa có người phụ thuộc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Step one, insurance at ten point five percent: two point six two five million.",
          "sub": "Bước một, trừ bảo hiểm 10,5%: 2,625 triệu.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Step two, twenty-five minus fifteen point five minus that. Six point eight seven five million. Bracket one.",
          "sub": "Bước hai: 25 trừ 15,5 trừ 2,625, còn 6,875 triệu. Bậc 1."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Step three, times five percent: three hundred forty-three thousand, seven hundred fifty dong.",
          "sub": "Bước ba: nhân 5%, ra 343.750 đồng.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "With one dependant, tax falls to about thirty-three thousand seven hundred fifty dong.",
          "sub": "Có một người phụ thuộc: thuế còn khoảng 33.750 đồng."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Lesson: subtract insurance and deductions first, then apply the table.",
          "sub": "Rút ra: trừ bảo hiểm và giảm trừ trước, rồi mới áp biểu thuế.",
          "keys": [
            "trừ bảo hiểm và giảm trừ trước"
          ]
        }
      ],
      "ref": "p11,p12"
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
            "at": "l3:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 16:30 · Tự kiểm trước khi chốt",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:thirty",
            "hl": [
              {
                "text": "Tự kiểm",
                "at": "l1:director"
              }
            ]
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "alarm-clock",
                "printer"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l3:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "16:30 · hạn duyệt 17:00",
            "icon": "alarm-clock"
          },
          {
            "id": "g-clk",
            "t": "illus",
            "name": "five-oclock",
            "x": 2028,
            "y": 1250,
            "size": 110,
            "at": "l1:five"
          },
          {
            "id": "g-due",
            "t": "text",
            "text": "Giám đốc duyệt: 17:00",
            "x": 2158,
            "y": 1275,
            "size": 48,
            "at": "l1:five+200",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stage five: four thirty. The payroll must reach the director by five.",
          "sub": "Chặng năm: bốn rưỡi chiều. Bảng lương phải tới tay giám đốc trước năm giờ.",
          "keys": [
            "trước năm giờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Bác Bình, the factory director. Slow voice, sharp eyes.",
          "sub": "Đây là bác Bình, giám đốc xưởng. Giọng chậm, mắt tinh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. Bring it when it's right, not just when it's printed.",
          "sub": "Từ từ, mình xem lại đã. Đúng rồi hẵng mang, không phải in xong là mang.",
          "pose": "explain"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s16",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "16:55 · phòng nhân sự",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Công thức tháng trước đúng thì cứ in và gửi",
          "why": "Soát tổng và lọc dòng lạ mới thấy hai người đã nghỉ việc vẫn còn trong bảng.",
          "rule": "Soát tổng, soát dòng lạ rồi mới gửi"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Worked last month. Print, send, done!",
          "sub": "Tháng trước đúng rồi. In, gửi, xong!",
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
          "say": "Right formula, moved data. People join and leave.",
          "sub": "Công thức đúng, dữ liệu đã đổi. Người vào, người nghỉ.",
          "keys": [
            "dữ liệu đã đổi"
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
          "who": "thao",
          "say": "Total versus last month. Big gaps. Below the floor, over the ceiling.",
          "sub": "So tổng với tháng trước. Lọc dòng chênh lớn, dưới sàn, vượt trần.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Headcount versus leavers... Two leavers still here!",
          "sub": "Đối chiếu số người với danh sách tăng giảm... Hai người nghỉ vẫn còn trong bảng!",
          "phase": "redo",
          "face": "surprised"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. A few minutes of checking beats fixing after payday.",
          "sub": "Đúng. Vài phút soát rẻ hơn sửa sai sau ngày lương.",
          "phase": "redo",
          "keys": [
            "Vài phút soát"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p18,p19"
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
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1410,
            "w": 44,
            "h": 44,
            "at": "l1:total",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1396,
            "size": 56,
            "at": "l1:total+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Tổng so tháng trước",
            "x": 2094,
            "y": 1400,
            "size": 42,
            "at": "l1:total+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1480,
            "w": 44,
            "h": 44,
            "at": "l1:gaps",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1466,
            "size": 56,
            "at": "l1:gaps+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Dòng chênh lệch lớn",
            "x": 2094,
            "y": 1470,
            "size": 42,
            "at": "l1:gaps+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1550,
            "w": 44,
            "h": 44,
            "at": "l1:floor",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1536,
            "size": 56,
            "at": "l1:floor+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Dưới sàn, vượt trần",
            "x": 2094,
            "y": 1540,
            "size": 42,
            "at": "l1:floor+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1620,
            "w": 44,
            "h": 44,
            "at": "l1:leavers",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1606,
            "size": 56,
            "at": "l1:leavers+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Đối chiếu tăng, giảm",
            "x": 2094,
            "y": 1610,
            "size": 42,
            "at": "l1:leavers+200"
          },
          {
            "id": "g-h",
            "t": "text",
            "text": "Giữ gốc, ghi thay đổi",
            "x": 2028,
            "y": 1730,
            "size": 40,
            "at": "l2:timesheets",
            "hl": [
              {
                "text": "ghi thay đổi",
                "at": "l2:log"
              }
            ]
          },
          {
            "id": "g-s",
            "t": "text",
            "text": "Gửi bảng kê trước khi chi",
            "x": 2868,
            "y": 1790,
            "size": 40,
            "at": "l3:before",
            "color": "accent",
            "hl": [
              {
                "text": "trước khi chi",
                "at": "l3:before"
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
          "say": "Four checks: total, gaps, floor and ceiling, leavers. Every month, before it goes upstairs.",
          "sub": "Bốn bước soát: tổng, dòng chênh, sàn trần, người nghỉ. Tháng nào cũng soát trước khi trình.",
          "keys": [
            "Bốn bước soát"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two habits let others double check: keep the original timesheets, and log every change in the month.",
          "sub": "Hai thói quen để người khác kiểm chéo: giữ bảng chấm công gốc, ghi chú mọi thay đổi trong tháng.",
          "keys": [
            "kiểm chéo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And send pay statements before paying, with a place to report mistakes.",
          "sub": "Và gửi bảng kê trước khi chi, kèm một nơi để phản ánh sai sót."
        }
      ],
      "ref": "p19,p20"
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
            "at": "l5:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Ngày trả lương · Phiếu lương",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:payday",
            "hl": [
              {
                "text": "Phiếu lương",
                "at": "l1:statement"
              }
            ]
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "phone"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "receipt",
                "pushpin"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
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
                  "at": "l5:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Ngày trả lương · ở kho",
            "icon": "receipt"
          },
          {
            "id": "h-bk",
            "t": "text",
            "text": "Bảng kê mỗi lần trả",
            "x": 3996,
            "y": 1250,
            "size": 50,
            "at": "l1:statement",
            "color": "accent"
          },
          {
            "id": "h-bk2",
            "t": "text",
            "text": "lương · làm thêm · phụ cấp",
            "x": 3996,
            "y": 1325,
            "size": 40,
            "at": "l1:overtime"
          },
          {
            "id": "h-bk3",
            "t": "text",
            "text": "và từng khoản khấu trừ",
            "x": 3996,
            "y": 1385,
            "size": 40,
            "at": "l1:deductions",
            "color": "muted"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: khoản 3 Điều 95 Bộ luật Lao động 2019",
            "x": 3996,
            "y": 1450,
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
          "say": "Stage six: payday. Each payment needs a statement: pay, overtime, allowances, deductions.",
          "sub": "Chặng sáu: ngày trả lương. Mỗi lần trả phải có bảng kê: lương, làm thêm, phụ cấp, khấu trừ.",
          "keys": [
            "bảng kê"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Here comes Dũng from the warehouse team. He reads his payslip like a lottery ticket.",
          "sub": "Kia là Dũng, tổ kho. Anh soi phiếu lương như soi vé số.",
          "keys": [
            "soi vé số"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Chị Thảo, pay must be public now, right? Pin everyone's salary on the notice board!",
          "sub": "Chị Thảo, lương phải công khai mà? Dán lương từng người lên bảng tin đi!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Hmm. Is that what public means?",
          "sub": "Ừm. Công khai là vậy sao?",
          "face": "thinking"
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s19",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "Dán lương từng người lên bảng tin",
        "right": "Công bố thang lương, bảng lương: khung chung",
        "wrongIllus": "pushpin",
        "rightIllus": "clipboard"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Everyone's salary on the notice board?",
          "sub": "Dán lương từng người lên bảng tin?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. Only the pay scale and pay table: the shared frame.",
          "sub": "Không. Chỉ công bố thang lương, bảng lương: khung chung.",
          "keys": [
            "khung chung"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p16"
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
            "at": "l3",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
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
            "id": "h-pub",
            "t": "text",
            "text": "Công khai: thang, bảng lương",
            "x": 3996,
            "y": 1540,
            "size": 44,
            "at": "l1:posted",
            "hl": [
              {
                "text": "Công khai",
                "at": "l1:posted"
              }
            ]
          },
          {
            "id": "h-priv",
            "t": "text",
            "text": "Số từng người: theo hợp đồng",
            "x": 3996,
            "y": 1620,
            "size": 44,
            "at": "l2:contract",
            "color": "muted"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Khung chung · giữ kín từng số",
            "x": 3996,
            "y": 1730,
            "size": 50,
            "at": "l4:frame",
            "color": "accent",
            "hl": [
              {
                "text": "giữ kín",
                "at": "l4:private"
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
          "say": "Pay scales, pay tables and labour norms are posted at work before they apply.",
          "sub": "Thang lương, bảng lương, mức lao động phải công bố tại nơi làm việc trước khi thực hiện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each person's number? The law has no special secrecy rule. The contract and company rules decide.",
          "sub": "Còn con số từng người? Luật không có quy định riêng về bảo mật; theo hợp đồng và quy chế công ty."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "So I see the scale, not my team leader's salary. Fair enough.",
          "sub": "Vậy em xem được khung, không xem được lương tổ trưởng. Cũng công bằng.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lesson: publish the frame, keep each person's number private.",
          "sub": "Rút ra: công khai khung chung, giữ kín con số từng người.",
          "keys": [
            "giữ kín con số từng người"
          ]
        }
      ],
      "ref": "p15,p16,p17"
    },
    {
      "id": "s21",
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
            "text": "⑦ Cuối tháng · Tăng, giảm lao động",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:end",
            "hl": [
              {
                "text": "Tăng, giảm",
                "at": "l1:changes"
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
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "spiral-calendar",
                "bank"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Cuối tháng Bảy · lịch đỏ",
            "icon": "spiral-calendar"
          },
          {
            "id": "i-new",
            "t": "text",
            "text": "Người mới: 30 ngày",
            "x": 5964,
            "y": 1250,
            "size": 50,
            "at": "l3:thirty",
            "hl": [
              {
                "text": "30 ngày",
                "at": "l3:thirty"
              }
            ]
          },
          {
            "id": "i-out",
            "t": "text",
            "text": "Người nghỉ: 14 ngày làm việc",
            "x": 5964,
            "y": 1330,
            "size": 46,
            "at": "l4:fourteen",
            "color": "accent",
            "hl": [
              {
                "text": "14 ngày làm việc",
                "at": "l4:working"
              }
            ]
          },
          {
            "id": "i-out2",
            "t": "text",
            "text": "có trường hợp ≤ 30 ngày",
            "x": 6004,
            "y": 1400,
            "size": 36,
            "at": "l4:most",
            "color": "muted"
          },
          {
            "id": "i-pay",
            "t": "text",
            "text": "Tiền đóng: ngày cuối tháng",
            "x": 5964,
            "y": 1480,
            "size": 46,
            "at": "l5:last",
            "hl": [
              {
                "text": "ngày cuối tháng",
                "at": "l5:last"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: Điều 28 Luật BHXH 2024; Điều 48 Bộ luật Lao động",
            "x": 5964,
            "y": 1550,
            "size": 24,
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
          "say": "Stage seven: end of the month. Insurance money and staff changes.",
          "sub": "Chặng bảy: cuối tháng. Nộp tiền bảo hiểm và báo tăng giảm lao động."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Two people left this month. Report them, and every new joiner too.",
          "sub": "Tháng này hai người nghỉ. Báo giảm, và báo tăng đủ người mới nhé.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A new employee under compulsory insurance: file within thirty days.",
          "sub": "Người mới thuộc diện bảo hiểm bắt buộc: nộp hồ sơ trong 30 ngày.",
          "keys": [
            "30 ngày"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A leaver: confirm insured time within fourteen working days, thirty at most in some cases.",
          "sub": "Người nghỉ: báo giảm, xác nhận thời gian đóng trong 14 ngày làm việc; có trường hợp kéo dài, không quá 30 ngày.",
          "keys": [
            "14 ngày làm việc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And the monthly money goes in no later than the last day of the month.",
          "sub": "Tiền đóng hằng tháng chuyển chậm nhất vào ngày cuối tháng.",
          "keys": [
            "ngày cuối tháng"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s22",
      "module": "BRK-08",
      "data": {
        "title": "Ba mốc cần nhớ",
        "points": [
          {
            "label": "30 ngày",
            "sub": "Hồ sơ người mới",
            "illus": "inbox-tray"
          },
          {
            "label": "14 ngày làm việc",
            "sub": "Báo giảm người nghỉ",
            "illus": "outbox-tray"
          },
          {
            "label": "Cuối tháng",
            "sub": "Chuyển tiền đóng",
            "illus": "bank"
          }
        ],
        "current": 2
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thirty days for new joiners. Fourteen working days for leavers.",
          "sub": "30 ngày cho người mới. 14 ngày làm việc cho người nghỉ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And the last day of every month for the money.",
          "sub": "Và ngày cuối mỗi tháng cho tiền đóng.",
          "keys": [
            "ngày cuối mỗi tháng"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s23",
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
            "id": "i-law",
            "t": "illus",
            "name": "classical-building",
            "x": 5964,
            "y": 1630,
            "size": 110,
            "at": "l1:amended"
          },
          {
            "id": "i-am",
            "t": "text",
            "text": "Bộ luật Lao động đang sửa",
            "x": 6094,
            "y": 1635,
            "size": 44,
            "at": "l1:amended",
            "color": "coral"
          },
          {
            "id": "i-ss",
            "t": "text",
            "text": "Kỳ họp 17/10–21/11/2026",
            "x": 6094,
            "y": 1705,
            "size": 38,
            "at": "l1:October",
            "color": "muted"
          },
          {
            "id": "i-re",
            "t": "text",
            "text": "Sau kỳ họp: kiểm lại",
            "x": 6804,
            "y": 1770,
            "size": 50,
            "at": "l2:recheck",
            "color": "accent",
            "hl": [
              {
                "text": "kiểm lại",
                "at": "l2:recheck"
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
          "say": "Note: the Labour Code is being amended at the Assembly session, October seventeenth to November twenty-first.",
          "sub": "Thêm một lưu ý: Bộ luật Lao động đang được sửa ở kỳ họp Quốc hội 17/10–21/11/2026."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Afterwards, recheck the pay and termination deadlines in this series.",
          "sub": "Sau kỳ họp, nên kiểm lại các mốc về tiền lương và chấm dứt hợp đồng trong chuỗi.",
          "keys": [
            "kiểm lại"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s24",
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
            "text": "Cuối tháng Tám · vẫn mẩu giấy ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:August"
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
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right"
                }
              ],
              "props": [
                "ledger",
                "memo"
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
            "at": "l1",
            "caption": "Cuối tháng Tám · phòng nhân sự",
            "icon": "memo"
          },
          {
            "id": "j-pad",
            "t": "box",
            "x": 7932,
            "y": 1260,
            "w": 500,
            "h": 110,
            "at": "l2:payroll",
            "fill": "#ffe873",
            "stroke": 4
          },
          {
            "id": "j-note",
            "t": "text",
            "text": "“Mai chốt lương nhé”",
            "x": 7952,
            "y": 1282,
            "size": 50,
            "at": "l2:payroll"
          },
          {
            "id": "j-ok",
            "t": "text",
            "text": "Dòng chảy đã vẽ ✓",
            "x": 7932,
            "y": 1430,
            "size": 50,
            "at": "l3:drawn",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Sai một li…” → soát từng li",
            "x": 7932,
            "y": 1540,
            "size": 50,
            "at": "l4:hair",
            "color": "accent",
            "hl": [
              {
                "text": "soát từng li",
                "at": "l4:every"
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
          "say": "End of August. Same desk, same yellow sticky note.",
          "sub": "Cuối tháng Tám. Vẫn bàn ấy, vẫn mẩu giấy vàng ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Tomorrow we close payroll. Okay?",
          "sub": "Mai chốt lương nhé."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Okay. Flow drawn, dates checked, totals compared, leavers out!",
          "sub": "Dạ. Dòng chảy đã vẽ, ngày tháng đã so, tổng đã soát, người nghỉ đã gạch!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Off by a hair, off by a mile. Now Thảo checks every hair.",
          "sub": "“Sai một li, đi một dặm.” Giờ Thảo soát từng li.",
          "keys": [
            "soát từng li"
          ]
        }
      ],
      "ref": "outro"
    },
    {
      "id": "s25",
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
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 660,
            "at": "l1+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8632,
            "y": 600,
            "at": "l2+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 720,
            "y": 1650,
            "at": "l3+400"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 2728,
            "y": 1420,
            "at": "l4+400"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo học; quy định có thể đổi, khi áp dụng hãy kiểm lại với cơ quan/chuyên gia. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1780,
            "size": 28,
            "at": "l5:end",
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
          "say": "So: payroll is a flow. Check the input first.",
          "sub": "Tóm lại: bảng lương là dòng chảy. Kiểm đầu vào trước.",
          "keys": [
            "Kiểm đầu vào trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Insurance: a floor and a ceiling.",
          "sub": "Bảo hiểm: có sàn, có trần."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Tax: insurance and deductions first, then the five brackets.",
          "sub": "Thuế: trừ bảo hiểm, giảm trừ trước, rồi áp 5 bậc."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And a few minutes of checking before you send.",
          "sub": "Và vài phút soát trước khi gửi.",
          "keys": [
            "vài phút soát"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "For learning only. Rules change, so check with the authorities or an expert.",
          "sub": "Bài để học. Quy định có thể đổi, hãy kiểm lại với cơ quan, chuyên gia."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s26",
      "module": "QUIZ-01",
      "data": {
        "q": "Why does an error at the start of the payroll flow matter so much?",
        "options": [
          "Errors at the start vanish automatically once the tax stage is reached",
          "Each later stage uses data from the stage before, so the error spreads",
          "Only the first stage is ever reviewed, so later stages never matter"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "droplet",
        "why": "Mỗi chặng dùng dữ liệu của chặng trước, nên sai ở đầu sẽ chảy đến cuối."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why does an error at the start of the payroll flow matter so much?",
          "sub": "Vì sao sai sót ở đầu dòng chảy bảng lương lại nghiêm trọng?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Each stage uses data from the one before.",
          "sub": "Mỗi chặng dùng dữ liệu của chặng trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Muddy upstream, muddy all the way down.",
          "sub": "Đầu nguồn đục thì cuối dòng cũng đục."
        }
      ],
      "ref": "questions[1]"
    },
    {
      "id": "s27",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi vẽ dòng chảy lương ở công ty bạn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, draw your company's payroll flow on one page: who sends what, and by when.",
          "sub": "Tối nay, vẽ dòng chảy dữ liệu lương ở công ty bạn trên một trang giấy: ai gửi gì, hạn nào."
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
  "notes": "#145 bài MỚI (bài tổng chuỗi junior-payroll-specialists) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): cận tệp bảng tính vài trăm dòng + mẩu giấy vàng “Mai chốt lương nhé”, máy kéo ra thấy Thảo và cô Hoa; mẩu giấy trở lại ở kết. Dòng thời gian: THÁNG LƯƠNG ĐẦU TIÊN của Thảo (tháng Bảy): ① chiều ngày chốt (chấm công, tổ may gửi nhầm tệp tháng Sáu p2) → ② tối (làm thêm 150/200/300%, tối thiểu vùng) → ③ sáng hôm sau (bảo hiểm 10,5/21,5/32%, trần 50,6 triệu) → ④ trưa (thuế, làm mẫu 25 triệu) → ⑤ 16:30 tự kiểm + “Khoan đã!” 16:55 (p18) → ⑥ ngày trả lương (bảng kê, Dũng hiểu lầm công khai p16) → ⑦ cuối tháng (30 ngày / 14 ngày làm việc / ngày cuối tháng, luật đang sửa p14) → cuối tháng Tám khép vòng. Nhân vật theo w145/_series/junior-payroll-specialists.md: Thảo (= Hà p2, Quân p18), cô Hoa, Dũng, Bác Bình; Huy (p11) chỉ nhắc tên. Số chỉ từ bài. Ngắt nhịp: BRK-01 s05, BRK-03 s10 (32%), BRK-07 s12, DLG-01 s16, BRK-04 s19, BRK-08 s22. Tục ngữ “Sai một li, đi một dặm” (mở + khép vòng). Lưu ý chung (#133) ở cảnh tóm tắt. Câu đố questions[1].",
  "loop": {
    "open": "s01",
    "close": "s24"
  }
};
