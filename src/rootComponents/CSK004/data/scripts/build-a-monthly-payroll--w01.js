// build-a-monthly-payroll--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "build-a-monthly-payroll--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "junior-payroll-specialists",
    "slug": "build-a-monthly-payroll",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Lập bảng lương tháng gồm những cột, những bước nào?",
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
            "fit": "A",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "a-q",
            "t": "text",
            "text": "Làm thêm chủ nhật?",
            "x": 60,
            "y": 110,
            "size": 90,
            "at": "l1:Sunday",
            "hl": [
              {
                "text": "chủ nhật",
                "at": "l1:Sunday"
              }
            ]
          },
          {
            "id": "a-o1",
            "t": "box",
            "x": 80,
            "y": 290,
            "w": 320,
            "h": 170,
            "at": "l2:fifty",
            "stroke": 6
          },
          {
            "id": "a-o1t",
            "t": "text",
            "text": "150%",
            "x": 110,
            "y": 310,
            "size": 100,
            "at": "l2:fifty+200"
          },
          {
            "id": "a-o2",
            "t": "box",
            "x": 470,
            "y": 290,
            "w": 320,
            "h": 170,
            "at": "l2:two",
            "stroke": 6
          },
          {
            "id": "a-o2t",
            "t": "text",
            "text": "200%",
            "x": 500,
            "y": 310,
            "size": 100,
            "at": "l2:two+200"
          },
          {
            "id": "a-g",
            "t": "text",
            "text": "Đoán đi…",
            "x": 80,
            "y": 500,
            "size": 56,
            "at": "l3:Guess",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Quick quiz. One hour of overtime on a Sunday, your weekly rest day.",
          "sub": "Đố nhanh. Một giờ làm thêm vào chủ nhật, ngày nghỉ hằng tuần.",
          "keys": [
            "chủ nhật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Is the minimum one hundred and fifty percent, or two hundred?",
          "sub": "Tối thiểu là 150%, hay 200%?",
          "keys": [
            "150%, hay 200%"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Guess. Most new payroll staff pick the first.",
          "sub": "Đoán đi. Phần lớn người mới làm lương chọn số đầu."
        }
      ],
      "beats": {
        "after": 1500
      },
      "ref": "p10"
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
          }
        ],
        "items": [
          {
            "id": "a-x",
            "t": "strike",
            "over": "a-o1t",
            "at": "l1:Two"
          },
          {
            "id": "a-r",
            "t": "ring",
            "around": [
              "a-o2t"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l1:Two"
          },
          {
            "id": "a-why",
            "t": "text",
            "text": "150% là ngày thường",
            "x": 80,
            "y": 590,
            "size": 50,
            "at": "l1:normal",
            "color": "coral",
            "hl": [
              {
                "text": "ngày thường",
                "at": "l1:normal"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Rõ như ban ngày”",
            "x": 80,
            "y": 680,
            "size": 56,
            "at": "l3:daylight",
            "color": "accent",
            "hl": [
              {
                "text": "ban ngày",
                "at": "l3:daylight"
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
          "say": "Two hundred. One hundred fifty is for normal working days.",
          "sub": "200%. Còn 150% là của ngày thường.",
          "keys": [
            "200%"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Mix those two up in one column, and the payslip lies politely.",
          "sub": "Gộp hai loại ấy vào một cột, phiếu lương sẽ nói dối rất lịch sự.",
          "keys": [
            "nói dối rất lịch sự"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A good payroll should be clear as daylight. Even for night shifts.",
          "sub": "Bảng lương tốt phải “rõ như ban ngày”. Kể cả với ca đêm.",
          "keys": [
            "rõ như ban ngày"
          ]
        }
      ],
      "ref": "p10,intro"
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
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "phone"
                }
              ],
              "props": [
                "receipt",
                "ledger"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Tháng Tám · phòng nhân sự",
            "icon": "ledger"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo, C&B at a garment factory, now on her second payroll month: August.",
          "sub": "Đây là Thảo, C&B ở một xưởng may, đang làm tháng lương thứ hai: tháng Tám.",
          "keys": [
            "tháng lương thứ hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Dũng, from the warehouse team. He reads his payslip like a lottery ticket.",
          "sub": "Còn đây là Dũng, tổ kho. Anh soi phiếu lương như soi vé số."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Chị Thảo, last month's Sunday overtime looks short. I counted twice!",
          "sub": "Chị Thảo, giờ làm chủ nhật tháng trước hình như thiếu. Em đếm hai lần rồi!",
          "face": "surprised",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So this month, Thảo rebuilds the payroll properly. Column by column.",
          "sub": "Nên tháng này, Thảo lập lại bảng lương cho đàng hoàng. Từng cột một.",
          "keys": [
            "Từng cột một"
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
      "ref": "p4,p18"
    },
    {
      "id": "s03",
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
            "text": "Cột nào, bước nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:columns",
            "hl": [
              {
                "text": "Cột nào",
                "at": "l1:columns"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Chỉ cần ra thực lĩnh",
            "x": 2028,
            "y": 170,
            "size": 48,
            "at": "l2:spits",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:But"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Ai nhìn cũng hiểu số từ đâu",
            "x": 2028,
            "y": 250,
            "size": 48,
            "at": "l2:understand",
            "color": "accent",
            "hl": [
              {
                "text": "số từ đâu",
                "at": "l2:where"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: khoản 3 Điều 95 Bộ luật Lao động 2019",
            "x": 2028,
            "y": 330,
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
          "say": "So which columns and which steps make a monthly payroll?",
          "sub": "Vậy bảng lương tháng gồm những cột nào, bước nào?",
          "keys": [
            "những cột nào, bước nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a sheet that just spits out take-home pay. But one where anyone can understand where each number comes from.",
          "sub": "Không phải bảng chỉ ra số thực lĩnh. Mà là bảng ai nhìn cũng hiểu từng số từ đâu ra.",
          "keys": [
            "từng số từ đâu ra"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The Labour Code asks for a pay statement each payday: pay, overtime, allowances, deductions.",
          "sub": "Bộ luật Lao động yêu cầu mỗi lần trả lương có bảng kê: lương, làm thêm, phụ cấp, khấu trừ."
        }
      ],
      "ref": "intro,p1"
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
            "id": "b-g",
            "t": "text",
            "text": "5 nhóm cột",
            "x": 2028,
            "y": 410,
            "size": 50,
            "at": "l1:Five",
            "hl": [
              {
                "text": "5 nhóm cột",
                "at": "l1:Five"
              }
            ]
          },
          {
            "id": "b-g0",
            "t": "box",
            "x": 2028,
            "y": 480,
            "w": 300,
            "h": 90,
            "at": "l1:staff",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-g1",
            "t": "box",
            "x": 2358,
            "y": 480,
            "w": 300,
            "h": 90,
            "at": "l1:attendance",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-g2",
            "t": "box",
            "x": 2688,
            "y": 480,
            "w": 300,
            "h": 90,
            "at": "l1:income",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-g3",
            "t": "box",
            "x": 3018,
            "y": 480,
            "w": 300,
            "h": 90,
            "at": "l1:deductions",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-g4",
            "t": "box",
            "x": 3348,
            "y": 480,
            "w": 300,
            "h": 90,
            "at": "l1:take",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-gt0",
            "t": "text",
            "text": "Nhân viên",
            "x": 2053,
            "y": 498,
            "size": 40,
            "at": "l1:staff+200"
          },
          {
            "id": "b-gt1",
            "t": "text",
            "text": "Chấm công",
            "x": 2383,
            "y": 498,
            "size": 40,
            "at": "l1:attendance+200"
          },
          {
            "id": "b-gt2",
            "t": "text",
            "text": "Thu nhập",
            "x": 2713,
            "y": 498,
            "size": 40,
            "at": "l1:income+200"
          },
          {
            "id": "b-gt3",
            "t": "text",
            "text": "Khấu trừ",
            "x": 3043,
            "y": 498,
            "size": 40,
            "at": "l1:deductions+200"
          },
          {
            "id": "b-gt4",
            "t": "text",
            "text": "Thực lĩnh",
            "x": 3373,
            "y": 498,
            "size": 40,
            "at": "l1:take+200"
          },
          {
            "id": "b-br",
            "t": "text",
            "text": "+ nơi làm việc, loại hợp đồng",
            "x": 2028,
            "y": 610,
            "size": 40,
            "at": "l2:workplace",
            "hl": [
              {
                "text": "nơi làm việc",
                "at": "l2:workplace"
              }
            ]
          },
          {
            "id": "b-ot",
            "t": "text",
            "text": "+ giờ làm thêm tách theo loại ngày",
            "x": 2028,
            "y": 680,
            "size": 40,
            "at": "l3:split",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five column groups: staff details, attendance, income, deductions, take-home pay.",
          "sub": "Năm nhóm cột: thông tin nhân viên, chấm công, thu nhập, khấu trừ, thực lĩnh.",
          "keys": [
            "Năm nhóm cột"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Staff details need the workplace and contract type. They decide the minimum wage and the tax method.",
          "sub": "Thông tin nhân viên cần nơi làm việc và loại hợp đồng: chúng quyết định mức tối thiểu vùng và cách khấu trừ thuế.",
          "keys": [
            "nơi làm việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Attendance needs overtime split by type of day, and night hours apart. Each pays differently.",
          "sub": "Chấm công cần tách giờ làm thêm theo loại ngày, giờ làm đêm riêng. Mỗi loại một mức trả."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then five steps, one weekday each. Monday first.",
          "sub": "Rồi năm bước, mỗi ngày một bước. Bắt đầu thứ Hai."
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
            "text": "① Thứ Hai · Chốt chấm công",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Monday",
            "hl": [
              {
                "text": "Chốt chấm công",
                "at": "l1:lock"
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
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
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
            "caption": "Thứ Hai · tệp chấm công tháng Tám",
            "icon": "page-facing-up"
          },
          {
            "id": "c-moon",
            "t": "illus",
            "name": "crescent-moon",
            "x": 3996,
            "y": 160,
            "size": 90,
            "at": "l2:Night"
          },
          {
            "id": "c-n",
            "t": "text",
            "text": "Làm đêm: 22:00 → 6:00",
            "x": 4106,
            "y": 175,
            "size": 50,
            "at": "l2:ten",
            "hl": [
              {
                "text": "22:00 → 6:00",
                "at": "l2:six"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Làm thêm: 3 cột theo ngày",
            "x": 3996,
            "y": 270,
            "size": 46,
            "at": "l3:three"
          },
          {
            "id": "c-tax",
            "t": "text",
            "text": "Lưu kỹ: chứng từ miễn thuế",
            "x": 3996,
            "y": 350,
            "size": 44,
            "at": "l4:proof",
            "color": "accent",
            "hl": [
              {
                "text": "miễn thuế",
                "at": "l4:exempt"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Điều 106 Bộ luật Lao động 2019",
            "x": 3996,
            "y": 420,
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
          "say": "Step one, Monday: lock the attendance data.",
          "sub": "Bước một, thứ Hai: chốt dữ liệu chấm công.",
          "keys": [
            "chốt dữ liệu chấm công"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Night work runs from ten in the evening to six the next morning.",
          "sub": "Làm việc ban đêm tính từ 22 giờ hôm trước đến 6 giờ sáng hôm sau."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Overtime gets three separate records: normal days, weekly rest days, public holidays and Tết.",
          "sub": "Giờ làm thêm ghi riêng ba loại: ngày thường, ngày nghỉ hằng tuần, ngày lễ, Tết."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And from 2026, these sheets are proof that overtime pay is tax exempt. So I keep them safe.",
          "sub": "Từ năm 2026, bảng chấm công còn là chứng từ chứng minh lương làm thêm được miễn thuế. Phải lưu kỹ.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then she opens the warehouse sheet. One column. Called simply: overtime hours.",
          "sub": "Rồi cô mở bảng chấm công của kho. Chỉ một cột. Tên gọn lỏn: giờ tăng ca."
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s06",
      "module": "BRK-12",
      "data": {
        "word": "giờ tăng ca",
        "sub": "Một cột gộp cả giờ ngày thường lẫn chủ nhật",
        "from": [
          620,
          360
        ],
        "others": [
          "Dũng",
          "kho",
          "tháng Bảy"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Overtime hours.",
          "sub": "Giờ tăng ca."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One column mixing weekday and Sunday hours.",
          "sub": "Một cột gộp cả giờ ngày thường lẫn chủ nhật.",
          "keys": [
            "gộp"
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
            "fit": "C",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "c-one",
            "t": "text",
            "text": "Một mức 150% cho cả cột",
            "x": 3996,
            "y": 500,
            "size": 44,
            "at": "l1:rate",
            "color": "coral"
          },
          {
            "id": "c-low",
            "t": "text",
            "text": "→ người làm chủ nhật bị thiếu",
            "x": 3996,
            "y": 570,
            "size": 40,
            "at": "l2:Sunday",
            "color": "muted"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Tách ngay từ chấm công",
            "x": 3996,
            "y": 670,
            "size": 56,
            "at": "l3:Split",
            "color": "accent",
            "hl": [
              {
                "text": "Tách ngay",
                "at": "l3:Split"
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
          "say": "Last month, Thảo applied one rate to that whole column: one hundred fifty percent.",
          "sub": "Tháng trước, Thảo áp một mức cho cả cột: 150%."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So everyone who worked Sunday got less than they counted. Hello, Dũng.",
          "sub": "Thế là ai làm chủ nhật cũng thấy phiếu lương thấp hơn họ tính. Chào Dũng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lesson: split overtime by type of day right in the attendance sheet. Don't merge, then guess.",
          "sub": "Rút ra: tách giờ làm thêm theo loại ngày ngay từ bảng chấm công, đừng gộp rồi đoán.",
          "keys": [
            "đừng gộp rồi đoán"
          ]
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s08",
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
            "at": "l5",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Ba · Tối thiểu vùng",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday",
            "hl": [
              {
                "text": "Tối thiểu vùng",
                "at": "l1:minimum"
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
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4",
                  "pose": "hold"
                }
              ],
              "props": [
                "world-map",
                "factory"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l5:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l4",
            "caption": "Thứ Ba · bàn cô Hoa",
            "icon": "world-map"
          },
          {
            "id": "d-h1",
            "t": "text",
            "text": "tháng (đ) · giờ (đ)",
            "x": 6204,
            "y": 150,
            "size": 34,
            "at": "l2:region",
            "color": "muted"
          },
          {
            "id": "d-r0",
            "t": "text",
            "text": "Vùng I",
            "x": 5964,
            "y": 200,
            "size": 42,
            "at": "l2:region",
            "color": "accent"
          },
          {
            "id": "d-m0",
            "t": "text",
            "text": "5.310.000 · 25.500",
            "x": 6204,
            "y": 200,
            "size": 42,
            "at": "l2:region+200",
            "color": "accent"
          },
          {
            "id": "d-r1",
            "t": "text",
            "text": "Vùng II",
            "x": 5964,
            "y": 266,
            "size": 42,
            "at": "l3:two",
            "color": "ink"
          },
          {
            "id": "d-m1",
            "t": "text",
            "text": "4.730.000 · 22.700",
            "x": 6204,
            "y": 266,
            "size": 42,
            "at": "l3:two+200",
            "color": "ink"
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "Vùng III",
            "x": 5964,
            "y": 332,
            "size": 42,
            "at": "l3:three",
            "color": "ink"
          },
          {
            "id": "d-m2",
            "t": "text",
            "text": "4.140.000 · 19.900",
            "x": 6204,
            "y": 332,
            "size": 42,
            "at": "l3:three+200",
            "color": "ink"
          },
          {
            "id": "d-r3",
            "t": "text",
            "text": "Vùng IV",
            "x": 5964,
            "y": 398,
            "size": 42,
            "at": "l3:four",
            "color": "ink"
          },
          {
            "id": "d-m3",
            "t": "text",
            "text": "3.700.000 · 17.800",
            "x": 6204,
            "y": 398,
            "size": 42,
            "at": "l3:four+200",
            "color": "ink"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Từ 01/01/2026 · Nghị định 293/2025/NĐ-CP · Điều 91",
            "x": 5964,
            "y": 480,
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
          "say": "Step two, Tuesday: pay, allowances, and the regional minimum wage.",
          "sub": "Bước hai, thứ Ba: lương, phụ cấp, và đối chiếu lương tối thiểu vùng.",
          "keys": [
            "lương tối thiểu vùng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "From January 2026, region one: five million three hundred ten thousand a month, twenty-five thousand five hundred an hour.",
          "sub": "Từ 01/01/2026, vùng I: 5.310.000 đồng/tháng, 25.500 đồng/giờ.",
          "keys": [
            "5.310.000 đồng/tháng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Regions two, three and four step down, to seventeen thousand eight hundred an hour.",
          "sub": "Vùng II, III, IV thấp dần, tới 17.800 đồng/giờ ở vùng IV."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It's the lowest pay for the simplest work in normal conditions. Cô Hoa, head of HR, has a twist.",
          "sub": "Đó là mức thấp nhất cho việc giản đơn nhất, điều kiện bình thường. Cô Hoa, trưởng phòng nhân sự, có câu đố."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Our head office is in region one. The packing workshop is in region three. Which rate?",
          "sub": "Trụ sở mình ở vùng I. Xưởng đóng gói ở vùng III. Áp mức nào?",
          "pose": "explain"
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 1800
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Trụ sở vùng I, xưởng ở vùng III: áp mức vùng nào?",
        "illus": "factory"
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
          "say": "Head office in region one, workshop in region three. Which minimum?",
          "sub": "Trụ sở vùng I, xưởng ở vùng III: áp mức vùng nào?",
          "keys": [
            "áp mức vùng nào"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s10",
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
            "id": "d-ans",
            "t": "text",
            "text": "Xưởng → mức vùng III",
            "x": 5964,
            "y": 550,
            "size": 52,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "vùng III",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "d-kcn",
            "t": "text",
            "text": "KCN nhiều địa bàn: mức cao nhất",
            "x": 5964,
            "y": 630,
            "size": 38,
            "at": "l2:highest"
          },
          {
            "id": "d-ren",
            "t": "text",
            "text": "Đổi tên, chia tách: tạm mức cũ",
            "x": 5964,
            "y": 690,
            "size": 38,
            "at": "l3:renamed",
            "color": "muted"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Theo nơi hoạt động",
            "x": 6804,
            "y": 700,
            "size": 46,
            "at": "l4:operates",
            "color": "coral",
            "hl": [
              {
                "text": "nơi hoạt động",
                "at": "l4:operates"
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
          "say": "Region three, where the workshop operates. Thảo adds a workplace column so formulas pick it.",
          "sub": "Vùng III, nơi xưởng hoạt động. Thảo thêm cột nơi làm việc để công thức tự lấy đúng mức.",
          "keys": [
            "Vùng III"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A firm in an industrial zone over several rates uses the highest one.",
          "sub": "Doanh nghiệp trong khu công nghiệp nằm trên nhiều địa bàn khác mức thì áp mức cao nhất."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "An area renamed or split keeps its old rate until the government decides.",
          "sub": "Địa bàn đổi tên hoặc chia tách tạm áp mức cũ cho đến khi Chính phủ quy định mới."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lesson: the minimum follows where the unit operates, not the head office address.",
          "sub": "Rút ra: mức tối thiểu đi theo nơi đơn vị hoạt động, không theo địa chỉ trụ sở.",
          "keys": [
            "nơi đơn vị hoạt động"
          ]
        }
      ],
      "ref": "p7,p8,p9"
    },
    {
      "id": "s11",
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
            "text": "③ Thứ Tư · Làm thêm, làm đêm",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday",
            "hl": [
              {
                "text": "làm đêm",
                "at": "l1:night"
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
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
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
                "abacus",
                "package"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Tư · ở kho",
            "icon": "package"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Ngày thường ≥ 150%",
            "x": 7932,
            "y": 160,
            "size": 48,
            "at": "l2:normal"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Nghỉ hằng tuần ≥ 200%",
            "x": 7932,
            "y": 230,
            "size": 48,
            "at": "l2:rest",
            "hl": [
              {
                "text": "200%",
                "at": "l2:two"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Lễ, Tết ≥ 300%",
            "x": 7932,
            "y": 300,
            "size": 48,
            "at": "l2:holidays"
          },
          {
            "id": "e-n",
            "t": "text",
            "text": "Làm đêm ≥ 130%",
            "x": 7932,
            "y": 380,
            "size": 48,
            "at": "l3:thirty",
            "color": "accent",
            "hl": [
              {
                "text": "130%",
                "at": "l3:thirty"
              }
            ]
          },
          {
            "id": "e-n2",
            "t": "text",
            "text": "Thêm giờ ban đêm: +30% +20%",
            "x": 7932,
            "y": 455,
            "size": 40,
            "at": "l3:plus",
            "color": "muted"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Điều 98 BLLĐ; Điều 55, 57 NĐ 145/2020",
            "x": 7932,
            "y": 515,
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
          "say": "Step three, Wednesday: overtime and night work.",
          "sub": "Bước ba, thứ Tư: làm thêm và làm đêm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Daytime overtime: at least one fifty on normal days, two hundred on rest days, three hundred on holidays.",
          "sub": "Làm thêm ban ngày: ít nhất 150% ngày thường, 200% ngày nghỉ hằng tuần, 300% ngày lễ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Night work: at least one hundred thirty percent. Overtime at night: plus thirty, plus twenty percent more.",
          "sub": "Làm đêm: ít nhất 130%. Làm thêm ban đêm: cộng thêm ít nhất 30% và 20% nữa.",
          "keys": [
            "ít nhất 130%"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "My normal hour is forty thousand dong. So what's my Sunday hour worth?",
          "sub": "Giờ thường của em 40.000 đồng. Vậy giờ chủ nhật đáng bao nhiêu?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Thảo works it out, right there between the boxes.",
          "sub": "Thảo tính luôn, ngay giữa đống thùng hàng."
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s12",
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
            "at": "l1",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-b",
            "t": "text",
            "text": "Đơn giá 40.000 đ/giờ",
            "x": 8772,
            "y": 700,
            "size": 40,
            "at": "l1:sixty",
            "color": "muted"
          },
          {
            "id": "e-x0",
            "t": "text",
            "text": "Ngày thường: 60.000 đ",
            "x": 7932,
            "y": 575,
            "size": 42,
            "at": "l1:sixty",
            "color": "ink"
          },
          {
            "id": "e-x1",
            "t": "text",
            "text": "Chủ nhật: 80.000 đ",
            "x": 7932,
            "y": 637,
            "size": 42,
            "at": "l2:eighty",
            "color": "accent"
          },
          {
            "id": "e-x2",
            "t": "text",
            "text": "Ngày lễ: 120.000 đ",
            "x": 7932,
            "y": 699,
            "size": 42,
            "at": "l3:twenty",
            "color": "ink"
          },
          {
            "id": "e-r",
            "t": "ring",
            "around": [
              "e-x0",
              "e-x1",
              "e-x2"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l4:column"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Weekday overtime, at least one fifty percent: sixty thousand.",
          "sub": "Làm thêm ngày thường, ít nhất 150%: 60.000 đồng.",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Sunday, at least two hundred: eighty thousand.",
          "sub": "Chủ nhật, ít nhất 200%: 80.000 đồng.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Holiday, at least three hundred: one hundred twenty thousand.",
          "sub": "Ngày lễ, ít nhất 300%: 120.000 đồng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then multiply each rate by the hours in its own column, and add. One column per type of hour.",
          "sub": "Rồi nhân từng mức với số giờ ở đúng cột, cộng lại. Mỗi loại giờ một cột, mỗi cột một hệ số.",
          "keys": [
            "Mỗi loại giờ một cột"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s13",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Năm · điện thoại từ kho",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Làm hỏng máy thì trừ hết lương tháng",
          "why": "Khấu trừ để bồi thường không quá 30% tiền lương thực trả hằng tháng.",
          "rule": "Khấu trừ bồi thường có trần: 30%"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "The warehouse manager says: he broke the taping machine, deduct his whole month.",
          "sub": "Quản lý kho bảo: cậu ấy làm hỏng máy dán thùng, trừ hết lương tháng này.",
          "pose": "phone",
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
          "say": "A whole month? Then what does he eat, cardboard?",
          "sub": "Trừ hết cả tháng? Rồi cậu ấy ăn gì, ăn thùng các-tông à?",
          "keys": [
            "ăn thùng các-tông"
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
          "say": "Damage deductions can't exceed thirty percent of monthly pay. I'll check the cap first.",
          "sub": "Khấu trừ bồi thường không quá 30% lương thực trả hằng tháng. Em kiểm trần trước.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Check the cap before typing the number.",
          "sub": "Đúng. Kiểm trần trước khi nhập số.",
          "phase": "redo",
          "keys": [
            "Kiểm trần trước"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p13,p14"
    },
    {
      "id": "s14",
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
            "at": "l3",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
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
            "text": "④ Thứ Năm · Khấu trừ, thực lĩnh",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday",
            "hl": [
              {
                "text": "Khấu trừ",
                "at": "l1:deductions"
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
                  "pose": "think"
                }
              ],
              "props": [
                "wrench",
                "receipt"
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
            "caption": "Thứ Năm · sau cuộc gọi",
            "icon": "wrench"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Tổng thu nhập − BH − thuế",
            "x": 60,
            "y": 1250,
            "size": 46,
            "at": "l1:insurance"
          },
          {
            "id": "f-30",
            "t": "text",
            "text": "Bồi thường ≤ 30% lương/tháng",
            "x": 60,
            "y": 1340,
            "size": 46,
            "at": "l2:thirty",
            "color": "accent",
            "hl": [
              {
                "text": "≤ 30%",
                "at": "l2:thirty"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Sơ suất: tối đa 3 tháng lương",
            "x": 60,
            "y": 1430,
            "size": 40,
            "at": "l3:three",
            "color": "coral"
          },
          {
            "id": "f-3b",
            "t": "text",
            "text": "thiệt hại ≤ 10 tháng tối thiểu vùng",
            "x": 60,
            "y": 1495,
            "size": 34,
            "at": "l3:ten",
            "color": "muted"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "→ trừ dần hằng tháng",
            "x": 60,
            "y": 1555,
            "size": 40,
            "at": "l4:gradually",
            "hl": [
              {
                "text": "trừ dần",
                "at": "l4:gradually"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Điều 102 Bộ luật Lao động 2019",
            "x": 60,
            "y": 1620,
            "size": 24,
            "at": "l2",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Kiểm trần trước khi nhập số",
            "x": 60,
            "y": 1730,
            "size": 52,
            "at": "l5:cap",
            "color": "accent",
            "hl": [
              {
                "text": "Kiểm trần",
                "at": "l5:cap"
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
          "say": "Step four, Thursday: deductions. From total income, subtract the worker's insurance and income tax.",
          "sub": "Bước bốn, thứ Năm: khấu trừ. Từ tổng thu nhập, trừ bảo hiểm phần người lao động và thuế thu nhập cá nhân."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For damaged property or overused materials, the deduction stays under thirty percent of monthly pay.",
          "sub": "Làm hư hỏng tài sản, tiêu hao vật tư quá định mức: khấu trừ không quá 30% tiền lương thực trả hằng tháng.",
          "keys": [
            "không quá 30%"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Minor careless damage, worth up to ten months of minimum wage? At most three months of pay.",
          "sub": "Thiệt hại không nghiêm trọng do sơ suất, không quá 10 tháng lương tối thiểu vùng: bồi thường tối đa 3 tháng lương."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And it's deducted gradually, month by month.",
          "sub": "Và được khấu trừ dần hằng tháng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Lesson: compensation deductions have a cap. Check the cap first.",
          "sub": "Rút ra: khấu trừ bồi thường có trần, hãy kiểm trần trước khi nhập số.",
          "keys": [
            "kiểm trần trước khi nhập số"
          ]
        }
      ],
      "ref": "p13,p14,p15"
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
            "at": "l2",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
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
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Sáu · Đối chiếu, chi trả",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday",
            "hl": [
              {
                "text": "chi trả",
                "at": "l1:pay"
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
                "envelope"
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
            "caption": "Thứ Sáu · trước ngày trả lương",
            "icon": "spiral-calendar"
          },
          {
            "id": "g-m",
            "t": "text",
            "text": "Lương tháng: 1 hoặc 2 lần",
            "x": 2028,
            "y": 1250,
            "size": 46,
            "at": "l3:month"
          },
          {
            "id": "g-h",
            "t": "text",
            "text": "Giờ, ngày, tuần: gộp ≤ 15 ngày",
            "x": 2028,
            "y": 1330,
            "size": 42,
            "at": "l4:fifteen",
            "hl": [
              {
                "text": "≤ 15 ngày",
                "at": "l4:fifteen"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Điều 97 Bộ luật Lao động 2019",
            "x": 2028,
            "y": 1400,
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
          "say": "Step five, Friday: reconcile, then pay on time.",
          "sub": "Bước năm, thứ Sáu: đối chiếu rồi chi trả đúng hạn.",
          "keys": [
            "chi trả đúng hạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Pay on the agreed day. No excuses.",
          "sub": "Trả đúng ngày đã hẹn. Không lý do.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Monthly pay goes out once a month, or once every half month.",
          "sub": "Lương tháng trả một tháng một lần hoặc nửa tháng một lần."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hourly, daily or weekly pay can be grouped, but never more than fifteen days apart.",
          "sub": "Lương theo giờ, ngày, tuần có thể gộp lại nhưng không quá 15 ngày."
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s16",
      "module": "BRK-11",
      "data": {
        "title": "3 điều về trả chậm",
        "items": [
          "Chậm từ 15 ngày: đền tiền lãi",
          "Bất khả kháng: chậm tối đa 30 ngày",
          "Lãi theo tiền gửi kỳ hạn 1 tháng"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three: interest at the one-month deposit rate.",
          "sub": "Ba: lãi theo tiền gửi kỳ hạn 1 tháng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: force majeure, thirty days late at most.",
          "sub": "Hai: bất khả kháng, chậm tối đa 30 ngày."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: fifteen days late or more, pay interest.",
          "sub": "Một: chậm từ 15 ngày, phải đền tiền lãi.",
          "keys": [
            "đền tiền lãi"
          ]
        }
      ],
      "ref": "p16"
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
            "y": 1510,
            "w": 44,
            "h": 44,
            "at": "l1:before",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1496,
            "size": 56,
            "at": "l1:before+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Gửi bảng kê trước khi chi",
            "x": 2094,
            "y": 1500,
            "size": 40,
            "at": "l1:before+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1590,
            "w": 44,
            "h": 44,
            "at": "l1:report",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1576,
            "size": 56,
            "at": "l1:report+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Có chỗ phản ánh sai sót",
            "x": 2094,
            "y": 1580,
            "size": 40,
            "at": "l1:report+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1670,
            "w": 44,
            "h": 44,
            "at": "l2:night",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1656,
            "size": 56,
            "at": "l2:night+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Ghi lương đêm, từng khoản trừ",
            "x": 2094,
            "y": 1660,
            "size": 40,
            "at": "l2:night+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before the money moves, send the statement so staff can check it and report mistakes.",
          "sub": "Trước khi chi, gửi bảng kê để người lao động kiểm tra và phản ánh sai sót.",
          "keys": [
            "phản ánh sai sót"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Show pay, overtime, night pay, and the reason and amount of each deduction.",
          "sub": "Ghi lương, lương làm thêm, lương làm đêm, nội dung và số tiền từng khoản khấu trừ."
        }
      ],
      "ref": "p17"
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
            "text": "⑥ Ngày trả lương · Phiếu lương",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Payday",
            "hl": [
              {
                "text": "Phiếu lương",
                "at": "l1:payslip"
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
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "receipt",
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "dung",
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
            "caption": "Ngày trả lương · ở kho",
            "icon": "receipt"
          },
          {
            "id": "h-old",
            "t": "box",
            "x": 3996,
            "y": 1260,
            "w": 600,
            "h": 110,
            "at": "l2:line",
            "stroke": 5,
            "color": "muted"
          },
          {
            "id": "h-oldt",
            "t": "text",
            "text": "Thực lĩnh: …",
            "x": 4026,
            "y": 1285,
            "size": 54,
            "at": "l2:line+200",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Payday. Remember Dũng's old payslip?",
          "sub": "Ngày trả lương. Nhớ phiếu lương cũ của Dũng chứ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "One line: take-home pay. Why is it lower? I had to message HR.",
          "sub": "Đúng một dòng: thực lĩnh. Sao ít hơn? Em phải nhắn hỏi phòng nhân sự.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Now look at this month's.",
          "sub": "Giờ nhìn phiếu tháng này."
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s19",
      "module": "BRK-04",
      "data": {
        "title": "Phiếu lương",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Chỉ một dòng: Thực lĩnh",
        "right": "Lương, phụ cấp, làm thêm từng loại, làm đêm, khấu trừ, thực lĩnh",
        "wrongIllus": "red-question-mark",
        "rightIllus": "receipt"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before: one mysterious line.",
          "sub": "Trước: một dòng bí ẩn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: every item, then take-home pay at the bottom.",
          "sub": "Sau: đủ từng khoản, thực lĩnh nằm cuối.",
          "keys": [
            "đủ từng khoản"
          ]
        }
      ],
      "ref": "p18"
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
            "at": "l2",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
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
            "id": "h-oldx",
            "t": "strike",
            "over": "h-oldt",
            "at": "l1:contract"
          },
          {
            "id": "h-n1",
            "t": "text",
            "text": "Lương hợp đồng · phụ cấp",
            "x": 3996,
            "y": 1420,
            "size": 40,
            "at": "l1:contract"
          },
          {
            "id": "h-n2",
            "t": "text",
            "text": "Làm thêm từng loại · làm đêm",
            "x": 3996,
            "y": 1485,
            "size": 40,
            "at": "l1:overtime"
          },
          {
            "id": "h-n3",
            "t": "text",
            "text": "Bảo hiểm · thuế · khoản trừ khác",
            "x": 3996,
            "y": 1550,
            "size": 40,
            "at": "l1:tax"
          },
          {
            "id": "h-n4",
            "t": "text",
            "text": "→ Thực lĩnh",
            "x": 3996,
            "y": 1615,
            "size": 46,
            "at": "l1:then",
            "color": "accent"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Ghi đủ: tự trả lời một nửa",
            "x": 3996,
            "y": 1740,
            "size": 52,
            "at": "l3:half",
            "color": "accent",
            "hl": [
              {
                "text": "một nửa",
                "at": "l3:half"
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
          "say": "Contract pay, allowances, overtime by type, night hours, insurance, tax, other deductions, then take-home.",
          "sub": "Lương hợp đồng, phụ cấp, làm thêm từng loại ngày, giờ làm đêm, bảo hiểm, thuế, khoản trừ khác, rồi mới thực lĩnh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Oh. Fewer overtime hours this month. Fine, my fault, not the sheet's.",
          "sub": "À. Tháng này em ít giờ làm thêm hơn. Lỗi tại em, không phải tại bảng.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lesson: a complete payslip answers half the questions on its own.",
          "sub": "Rút ra: phiếu lương ghi đủ từng khoản thì câu hỏi tự trả lời được một nửa.",
          "keys": [
            "tự trả lời được một nửa"
          ]
        }
      ],
      "ref": "p18,p19"
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
            "text": "⑦ Tối hôm đó · Nhìn lại",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:five"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "ledger",
                "shield"
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
            "caption": "Tối ngày trả lương · phòng nhân sự",
            "icon": "ledger"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l1:attendance",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1246,
            "size": 56,
            "at": "l1:attendance+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Chấm công tách loại ngày",
            "x": 6030,
            "y": 1250,
            "size": 40,
            "at": "l1:attendance+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1335,
            "w": 44,
            "h": 44,
            "at": "l1:minimum",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1321,
            "size": 56,
            "at": "l1:minimum+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Đối chiếu tối thiểu vùng",
            "x": 6030,
            "y": 1325,
            "size": 40,
            "at": "l1:minimum+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1410,
            "w": 44,
            "h": 44,
            "at": "l1:overtime",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1396,
            "size": 56,
            "at": "l1:overtime+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Làm thêm, làm đêm từng cột",
            "x": 6030,
            "y": 1400,
            "size": 40,
            "at": "l1:overtime+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1485,
            "w": 44,
            "h": 44,
            "at": "l1:deductions",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1471,
            "size": 56,
            "at": "l1:deductions+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Khấu trừ có trần",
            "x": 6030,
            "y": 1475,
            "size": 40,
            "at": "l1:deductions+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1560,
            "w": 44,
            "h": 44,
            "at": "l1:statement",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1546,
            "size": 56,
            "at": "l1:statement+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Bảng kê trước khi chi",
            "x": 6030,
            "y": 1550,
            "size": 40,
            "at": "l1:statement+200"
          },
          {
            "id": "i-next",
            "t": "text",
            "text": "Kế tiếp: cột bảo hiểm",
            "x": 6804,
            "y": 1790,
            "size": 46,
            "at": "l3:insurance",
            "color": "coral",
            "hl": [
              {
                "text": "cột bảo hiểm",
                "at": "l3:insurance"
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
          "say": "That evening, five steps ticked: attendance, minimum wage, overtime, deductions, statement.",
          "sub": "Tối hôm đó, năm bước đã tick: chấm công, tối thiểu vùng, làm thêm, khấu trừ, bảng kê."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Good. Next month, the hard one: insurance.",
          "sub": "Tốt. Tháng sau, cột khó: bảo hiểm.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Right. With columns and steps in place, the next hard part is the insurance column.",
          "sub": "Đúng. Đủ cột, đủ bước rồi, phần khó tiếp theo là cột bảo hiểm.",
          "keys": [
            "cột bảo hiểm"
          ]
        }
      ],
      "ref": "p20,outro"
    },
    {
      "id": "s22",
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
            "text": "Vẫn ở kho · vẫn câu hỏi ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:warehouse"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
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
                  "pose": "hold"
                }
              ],
              "props": [
                "receipt",
                "package"
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
            "caption": "Vẫn ở kho · phiếu lương mới",
            "icon": "receipt"
          },
          {
            "id": "j-q",
            "t": "text",
            "text": "Chủ nhật?",
            "x": 7932,
            "y": 1260,
            "size": 60,
            "at": "l2:Sunday"
          },
          {
            "id": "j-a",
            "t": "text",
            "text": "≥ 200%",
            "x": 8252,
            "y": 1250,
            "size": 80,
            "at": "l2:two",
            "color": "accent",
            "hl": [
              {
                "text": "200%",
                "at": "l2:two"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Rõ như ban ngày”",
            "x": 7932,
            "y": 1420,
            "size": 60,
            "at": "l4:daylight",
            "color": "accent",
            "hl": [
              {
                "text": "ban ngày",
                "at": "l4:daylight"
              }
            ]
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "… kể cả ca đêm",
            "x": 7972,
            "y": 1520,
            "size": 48,
            "at": "l4:night",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Back at the warehouse. Same question as the start.",
          "sub": "Trở lại kho. Vẫn câu hỏi lúc đầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Sunday overtime: two hundred percent. And it's right there, on its own line!",
          "sub": "Làm thêm chủ nhật: 200%. Mà nằm riêng một dòng, thấy ngay!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "One column per type of hour. No more guessing.",
          "sub": "Mỗi loại giờ một cột. Hết đoán mò.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Clear as daylight. Even the night hours.",
          "sub": "Rõ như ban ngày. Kể cả giờ làm đêm.",
          "keys": [
            "Rõ như ban ngày"
          ]
        }
      ],
      "ref": "p5,p12"
    },
    {
      "id": "s23",
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
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "F",
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
            "y": 560,
            "at": "l1+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6664,
            "y": 560,
            "at": "l2+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 8632,
            "y": 580,
            "at": "l3+400"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 760,
            "y": 1690,
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
          "say": "So: split overtime by type of day, right in the attendance sheet.",
          "sub": "Tóm lại: tách giờ làm thêm theo loại ngày ngay từ bảng chấm công.",
          "keys": [
            "tách giờ làm thêm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The minimum wage follows where the unit operates.",
          "sub": "Mức tối thiểu theo nơi đơn vị hoạt động."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One column per type of hour, one rate per column.",
          "sub": "Mỗi loại giờ một cột, mỗi cột một hệ số."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Deductions have a cap. And the payslip shows every item.",
          "sub": "Khấu trừ có trần. Phiếu lương ghi đủ từng khoản.",
          "keys": [
            "Khấu trừ có trần"
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
      "id": "s24",
      "module": "QUIZ-01",
      "data": {
        "q": "Why should overtime by type of day be kept in separate columns?",
        "options": [
          "Each type of day has a different minimum overtime rate to apply",
          "Tax offices only accept files with exactly ten overtime columns",
          "Separate columns make the file look longer and more impressive"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "card-index-dividers",
        "why": "Mỗi loại ngày có mức trả làm thêm tối thiểu khác nhau, nên mỗi loại một cột."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why should overtime by type of day be kept in separate columns?",
          "sub": "Vì sao nên tách giờ làm thêm theo loại ngày thành các cột riêng?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Each type of day has its own minimum rate.",
          "sub": "Mỗi loại ngày có mức tối thiểu riêng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "So, one column per type of day.",
          "sub": "Nên mỗi loại ngày một cột."
        }
      ],
      "ref": "questions[3]"
    },
    {
      "id": "s25",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi đánh dấu cột nào còn gộp nhiều loại giờ"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Open your company's payroll and mark every column that still mixes types of hours.",
          "sub": "Mở bảng lương công ty bạn, đánh dấu cột nào còn gộp nhiều loại giờ."
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
  "notes": "#145 bài MỚI (bài 2 chuỗi junior-payroll-specialists) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21 (câu hỏi để đoán sai): “Làm thêm chủ nhật: 150% hay 200%?” lặng 1,5 s rồi lật (200%; 150% là ngày thường). Dòng thời gian: MỘT TUẦN LẬP LƯƠNG THÁNG TÁM của Thảo: ① thứ Hai chốt chấm công (cột “giờ tăng ca” gộp, BRK-12; = Ngọc p4) → ② thứ Ba tối thiểu vùng (câu đố cô Hoa trụ sở vùng I / xưởng vùng III p8, BRK-07) → ③ thứ Tư làm thêm, làm đêm (Dũng 40.000 đ/giờ = Tùng p11) → “Khoan đã!” thứ Năm (trừ hết lương vì hỏng máy p14) → ④ khấu trừ, trần 30% → ⑤ thứ Sáu chi trả đúng hạn (BRK-11 trả chậm p16) → ⑥ ngày trả lương: phiếu trước – sau (BRK-04, = Tùng p18) → ⑦ tối hôm đó nhìn lại + bài kế (p20) → ở kho khép vòng câu đố. Nhân vật: Thảo, Dũng, cô Hoa; quản lý kho chỉ nhắc qua điện thoại. Số chỉ từ bài. Tục ngữ “Rõ như ban ngày” (kể cả ca đêm). Lưu ý chung (#133) ở cảnh tóm tắt. Câu đố questions[3].",
  "loop": {
    "open": "s02",
    "close": "s22"
  }
};
