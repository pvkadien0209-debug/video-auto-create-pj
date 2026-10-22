// long-tenure-layoff-entitlements--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "long-tenure-layoff-entitlements--w01",
  "unit": {
    "audience": "laid-off-at-40",
    "slug": "long-tenure-layoff-entitlements",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Làm 15–20 năm ở một nơi rồi bị cắt giảm: thâm niên dài ảnh hưởng quyền lợi thế nào?",
    "series": "Mất việc ở tuổi 40: ba mươi ngày đầu — cho người vừa bị cắt giảm, đứng dậy có kế hoạch"
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
              "a-num"
            ],
            "zoom": 1.3,
            "move": "cut"
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-num",
            "t": "text",
            "text": "01/01/2009",
            "x": 60,
            "y": 90,
            "size": 160,
            "at": "l1:January",
            "color": "accent",
            "hl": [
              {
                "text": "2009",
                "at": "l1:nine"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "bảo hiểm thất nghiệp bắt đầu",
            "x": 70,
            "y": 320,
            "size": 52,
            "at": "l2:unemployment"
          },
          {
            "id": "a-det",
            "t": "text",
            "text": "Nhưng có một chi tiết…",
            "x": 70,
            "y": 420,
            "size": 54,
            "at": "l3:detail",
            "color": "coral",
            "hl": [
              {
                "text": "một chi tiết",
                "at": "l3:detail"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật — Nghị định 127/2008/NĐ-CP",
            "x": 70,
            "y": 520,
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
          "say": "January first, two thousand nine.",
          "sub": "Ngày 01/01/2009.",
          "keys": [
            "01/01/2009"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The day unemployment insurance began in Vietnam, under Decree one two seven.",
          "sub": "Ngày bảo hiểm thất nghiệp bắt đầu áp dụng, theo Nghị định 127/2008/NĐ-CP.",
          "keys": [
            "bảo hiểm thất nghiệp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "If you joined your company before that day, there is one detail you should know.",
          "sub": "Nếu bạn vào công ty trước ngày ấy, có một chi tiết bạn nên biết.",
          "keys": [
            "một chi tiết"
          ]
        }
      ],
      "ref": "p8"
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
            "x": 920,
            "y": 130,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l3",
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
            "caption": "Ngày 1 · 10:00 · quán cà phê đầu ngõ",
            "icon": "page-facing-up"
          },
          {
            "id": "a-w",
            "t": "text",
            "text": "“18 năm = 18 tháng lương?”",
            "x": 60,
            "y": 600,
            "size": 50,
            "at": "l3:eighteen months",
            "color": "muted"
          },
          {
            "id": "a-wx",
            "t": "strike",
            "over": "a-w",
            "at": "l5:Not quite"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Nói có sách, mách có chứng”",
            "x": 920,
            "y": 680,
            "size": 44,
            "at": "l6:books",
            "color": "accent",
            "hl": [
              {
                "text": "mách có chứng",
                "at": "l6:prove"
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
          "say": "Meet Dũng, forty two, a garment factory accountant since before two thousand nine.",
          "sub": "Đây là Dũng, 42 tuổi, kế toán nhà máy may từ trước năm 2009.",
          "keys": [
            "từ trước năm 2009"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Nearly twenty years in one place. This morning, a layoff notice.",
          "sub": "Gần hai mươi năm ở một nơi. Sáng nay, một tờ thông báo cắt giảm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Eighteen years. So eighteen months of salary, right? But this figure is much smaller!",
          "sub": "Mười tám năm. Vậy là mười tám tháng lương chứ? Sao con số này nhỏ hơn hẳn!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Is the company cheating me, or am I counting wrong?",
          "sub": "Công ty tính sai, hay mình tính sai?",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not quite either. Long service doesn't turn into a long allowance by itself.",
          "sub": "Chưa hẳn cả hai. Thâm niên dài không tự động thành khoản trợ cấp dài.",
          "keys": [
            "không tự động"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: speak with books, prove with papers. Today, Dũng checks with papers.",
          "sub": "Ông bà dặn: “Nói có sách, mách có chứng.” Hôm nay Dũng kiểm bằng giấy tờ.",
          "keys": [
            "Nói có sách, mách có chứng"
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
            "text": "Thâm niên dài: tính sao?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:long service",
            "hl": [
              {
                "text": "tính sao",
                "at": "l1:count"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Thuộc khoản trợ cấp nào",
            "x": 2028,
            "y": 180,
            "size": 48,
            "at": "l2:which"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Công thức, làm tròn năm",
            "x": 2028,
            "y": 260,
            "size": 48,
            "at": "l3:formula"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Mốc 2009 chia đôi thâm niên",
            "x": 2028,
            "y": 340,
            "size": 48,
            "at": "l4:splits",
            "color": "accent",
            "hl": [
              {
                "text": "chia đôi",
                "at": "l4:splits"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Hai ngày với tờ thông báo",
            "x": 2028,
            "y": 460,
            "size": 44,
            "at": "l5:two days"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:two days+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:two days+750",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:two days+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:two days+1250",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:two days+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 560,
            "w": 250,
            "h": 90,
            "at": "l5:two days+1750",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "10:00",
            "x": 2053,
            "y": 580,
            "size": 40,
            "at": "l5:two days+620"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "13:00",
            "x": 2323,
            "y": 580,
            "size": 40,
            "at": "l5:two days+870"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "15:00",
            "x": 2593,
            "y": 580,
            "size": 40,
            "at": "l5:two days+1120"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "17:00",
            "x": 2863,
            "y": 580,
            "size": 40,
            "at": "l5:two days+1370"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Ngày 2",
            "x": 3133,
            "y": 580,
            "size": 40,
            "at": "l5:two days+1620"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Chiều 2",
            "x": 3403,
            "y": 580,
            "size": 40,
            "at": "l5:two days+1870"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how does long service really count when you're laid off?",
          "sub": "Vậy khi bị cắt giảm, thâm niên dài thực sự được tính thế nào?",
          "keys": [
            "thâm niên dài"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three things. One: which allowance you fall under.",
          "sub": "Ba điều. Một: bạn thuộc khoản trợ cấp nào.",
          "keys": [
            "khoản trợ cấp nào"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: the formula, and how the years are rounded.",
          "sub": "Hai: công thức, và cách làm tròn năm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: why that date in two thousand nine splits your service in two.",
          "sub": "Ba: vì sao mốc năm 2009 chia thâm niên làm hai.",
          "keys": [
            "chia thâm niên làm hai"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Dũng through two days with that notice. It's general guidance, not personal advice.",
          "sub": "Cùng theo Dũng qua hai ngày với tờ thông báo. Bài ở mức tổng quan, không thay tư vấn riêng."
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
            "text": "① 13:00 · Lý do trên giấy",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:one p.m."
          },
          {
            "id": "c-0",
            "t": "text",
            "text": "Trợ cấp mất việc làm",
            "x": 3996,
            "y": 170,
            "size": 56,
            "at": "l2:job loss allowance",
            "color": "accent",
            "hl": [
              {
                "text": "mất việc làm",
                "at": "l2:job loss"
              }
            ]
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Điều 47 Bộ luật Lao động 2019",
            "x": 3996,
            "y": 255,
            "size": 44,
            "at": "l2:Article"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Làm thường xuyên đủ 12 tháng",
            "x": 3996,
            "y": 330,
            "size": 44,
            "at": "l3:twelve",
            "hl": [
              {
                "text": "12 tháng",
                "at": "l3:twelve"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "A: cơ cấu, công nghệ, kinh tế",
            "x": 3996,
            "y": 410,
            "size": 40,
            "at": "l4:structure"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "B: chia, tách, sáp nhập, bán…",
            "x": 3996,
            "y": 480,
            "size": 40,
            "at": "l5:merger"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật (cập nhật 12/6/2026)",
            "x": 3996,
            "y": 560,
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
          "say": "First stop: one p.m. Dũng finally reads the reason printed on the paper.",
          "sub": "Chặng một: một giờ chiều. Dũng mới chịu đọc dòng lý do in trên tờ giấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Under Article forty seven of the Labour Code twenty nineteen, there's the job loss allowance, paid by the employer.",
          "sub": "Theo Điều 47 Bộ luật Lao động 2019, có trợ cấp mất việc làm, do người sử dụng lao động trả.",
          "keys": [
            "trợ cấp mất việc làm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Condition: twelve months or more of regular work.",
          "sub": "Điều kiện: đã làm việc thường xuyên từ đủ 12 tháng.",
          "keys": [
            "từ đủ 12 tháng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the reason: changes in structure or technology, or economic reasons.",
          "sub": "Và lý do: thay đổi cơ cấu, công nghệ, hoặc vì lý do kinh tế."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Or a split, merger, sale, lease, or change of ownership of the company.",
          "sub": "Hoặc chia, tách, hợp nhất, sáp nhập, bán, cho thuê, chuyển đổi loại hình, chuyển nhượng quyền sở hữu."
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
            "fit": "C",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 130,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "magnifying-glass-tilted-left"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Ngày 1 · 13:00 · vẫn ở quán",
            "icon": "magnifying-glass-tilted-left"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Lý do trên giấy quyết định khoản",
            "x": 4856,
            "y": 668,
            "size": 36,
            "at": "l2:decides",
            "hl": [
              {
                "text": "quyết định khoản",
                "at": "l2:decides"
              }
            ]
          },
          {
            "id": "c-law",
            "t": "text",
            "text": "BLLĐ đang sửa: kỳ họp 17/10–21/11/2026",
            "x": 3996,
            "y": 650,
            "size": 36,
            "at": "l3:amended",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Restructuring. That's the reason they wrote.",
          "sub": "Thay đổi cơ cấu. Họ ghi lý do vậy.",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Good. Long timers usually meet the time rule. The written reason decides which allowance applies.",
          "sub": "Tốt. Người làm lâu thường đủ điều kiện thời gian. Chính lý do trên giấy quyết định bạn thuộc khoản nào.",
          "keys": [
            "lý do trên giấy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One note: the Labour Code is being amended this session, October seventeen to November twenty one, twenty twenty six. Check again after.",
          "sub": "Lưu ý: Bộ luật Lao động đang được sửa ở kỳ họp 17/10–21/11/2026. Kiểm lại sau kỳ họp.",
          "keys": [
            "Kiểm lại sau kỳ họp"
          ]
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
            "at": 150,
            "fit": "D",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 15:00 · Công thức",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:three p.m."
          },
          {
            "id": "d-f",
            "t": "text",
            "text": "Trợ cấp = số năm tính × lương",
            "x": 5964,
            "y": 175,
            "size": 52,
            "at": "l2:times",
            "color": "accent",
            "hl": [
              {
                "text": "× lương",
                "at": "l2:salary"
              }
            ]
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Mỗi năm: 1 tháng lương",
            "x": 5964,
            "y": 265,
            "size": 46,
            "at": "l3:each year"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Ít nhất: 2 tháng lương",
            "x": 5964,
            "y": 335,
            "size": 46,
            "at": "l3:two months",
            "color": "coral",
            "hl": [
              {
                "text": "Ít nhất",
                "at": "l3:at least"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Lương = bình quân 6 tháng liền kề",
            "x": 5964,
            "y": 420,
            "size": 42,
            "at": "l4:average",
            "hl": [
              {
                "text": "6 tháng",
                "at": "l4:six months"
              }
            ]
          },
          {
            "id": "d-3b",
            "t": "text",
            "text": "nhiều hợp đồng: lấy hợp đồng cuối",
            "x": 6004,
            "y": 490,
            "size": 36,
            "at": "l5:several"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: three p.m. A pen, a napkin, and the formula.",
          "sub": "Chặng hai: ba giờ chiều. Một cây bút, một tờ khăn giấy, và công thức."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The allowance equals the counted working time, times the monthly salary used.",
          "sub": "Mức trợ cấp bằng thời gian làm việc tính trợ cấp nhân với tiền lương tháng tính trợ cấp.",
          "keys": [
            "nhân với tiền lương"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One month for each year, but at least two months in total.",
          "sub": "Cứ mỗi năm một tháng lương, nhưng tổng ít nhất bằng hai tháng.",
          "keys": [
            "ít nhất bằng hai tháng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The salary is the contract average of the six months right before the job loss.",
          "sub": "Tiền lương là bình quân sáu tháng liền kề theo hợp đồng trước khi mất việc.",
          "keys": [
            "bình quân sáu tháng liền kề"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Worked under several contracts in a row? Take the six months before the last one ended.",
          "sub": "Làm nhiều hợp đồng kế tiếp? Lấy sáu tháng trước khi chấm dứt hợp đồng cuối cùng."
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s06",
      "module": "BRK-03",
      "data": {
        "value": 6,
        "suffix": " tháng",
        "label": "≤ 6 tháng lẻ: nửa năm · trên 6: một năm",
        "illus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Leftover months? Six or fewer count as half a year.",
          "sub": "Có tháng lẻ? Từ sáu tháng trở xuống tính nửa năm.",
          "keys": [
            "nửa năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "More than six count as a full year.",
          "sub": "Trên sáu tháng tính một năm.",
          "keys": [
            "một năm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
          }
        ],
        "items": [
          {
            "id": "d-w",
            "t": "text",
            "text": "Cũng được tính:",
            "x": 6864,
            "y": 175,
            "size": 50,
            "at": "l1:also count",
            "color": "accent"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 6864,
            "y": 265,
            "w": 40,
            "h": 40,
            "at": "l2:probation",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 6868,
            "y": 249,
            "size": 50,
            "at": "l2:probation+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Thử việc",
            "x": 6926,
            "y": 255,
            "size": 40,
            "at": "l2:probation+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 6864,
            "y": 340,
            "w": 40,
            "h": 40,
            "at": "l2:training",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 6868,
            "y": 324,
            "size": 50,
            "at": "l2:training+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Được cử đi học",
            "x": 6926,
            "y": 330,
            "size": 40,
            "at": "l2:training+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 6864,
            "y": 415,
            "w": 40,
            "h": 40,
            "at": "l3:maternity",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 6868,
            "y": 399,
            "size": 50,
            "at": "l3:maternity+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Ốm đau, thai sản",
            "x": 6926,
            "y": 405,
            "size": 40,
            "at": "l3:maternity+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 6864,
            "y": 490,
            "w": 40,
            "h": 40,
            "at": "l3:accident",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 6868,
            "y": 474,
            "size": 50,
            "at": "l3:accident+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Tai nạn, bệnh nghề nghiệp",
            "x": 6926,
            "y": 480,
            "size": 40,
            "at": "l3:accident+200"
          },
          {
            "id": "d-c4",
            "t": "box",
            "x": 6864,
            "y": 565,
            "w": 40,
            "h": 40,
            "at": "l4:suspended",
            "stroke": 5
          },
          {
            "id": "d-k4",
            "t": "text",
            "text": "✓",
            "x": 6868,
            "y": 549,
            "size": 50,
            "at": "l4:suspended+600",
            "color": "accent"
          },
          {
            "id": "d-l4",
            "t": "text",
            "text": "Ngừng việc, tạm đình chỉ",
            "x": 6926,
            "y": 555,
            "size": 40,
            "at": "l4:suspended+200"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Dò lại quãng thử việc, đi học",
            "x": 5964,
            "y": 640,
            "size": 44,
            "at": "l5:recheck",
            "hl": [
              {
                "text": "Dò lại",
                "at": "l5:recheck"
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
          "say": "And actual working time isn't just days at your desk. These also count.",
          "sub": "Thời gian làm việc thực tế không chỉ là ngày ngồi ở bàn. Những quãng này cũng được tính.",
          "keys": [
            "cũng được tính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Probation, and training the company sent you to.",
          "sub": "Thử việc, thời gian được cử đi học."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sick or maternity leave under social insurance, paid leave after a work accident or occupational disease.",
          "sub": "Nghỉ ốm đau, thai sản theo bảo hiểm xã hội, nghỉ điều trị tai nạn lao động, bệnh nghề nghiệp được trả lương."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Stoppages that weren't your fault, and time you were suspended.",
          "sub": "Ngừng việc không do lỗi người lao động, thời gian bị tạm đình chỉ công việc."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So long timers, recheck probation, training and maternity stretches.",
          "sub": "Nên người làm lâu năm hãy dò lại cả quãng thử việc, đi học, nghỉ thai sản.",
          "keys": [
            "dò lại"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "text": "③ 17:00 · Vì sao ngắn?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:five p.m."
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Tổng thời gian làm thực tế",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:total"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "− thời gian đã đóng BHTN",
            "x": 7932,
            "y": 245,
            "size": 46,
            "at": "l2:minus",
            "color": "coral",
            "hl": [
              {
                "text": "đã đóng BHTN",
                "at": "l2:insurance"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "− thời gian đã nhận trợ cấp trước",
            "x": 7932,
            "y": 320,
            "size": 42,
            "at": "l3:already paid"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "→ phần đó chuyển sang quỹ BHTN",
            "x": 7932,
            "y": 400,
            "size": 44,
            "at": "l4:fund",
            "color": "accent",
            "hl": [
              {
                "text": "quỹ BHTN",
                "at": "l4:fund"
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
          "say": "Third stop: five p.m. Why can the counted time be so short?",
          "sub": "Chặng ba: năm giờ chiều. Vì sao phần được tính lại ngắn thế?",
          "keys": [
            "ngắn thế"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Start from your total actual working time, minus the time you paid unemployment insurance.",
          "sub": "Lấy tổng thời gian làm việc thực tế, trừ thời gian đã tham gia bảo hiểm thất nghiệp.",
          "keys": [
            "trừ thời gian đã tham gia bảo hiểm thất nghiệp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Minus any time you were already paid a severance or job loss allowance.",
          "sub": "Trừ cả thời gian đã được chi trả trợ cấp thôi việc, trợ cấp mất việc làm trước đó."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Why? Those insured years moved your rights to the unemployment insurance fund.",
          "sub": "Vì sao? Những năm đã đóng bảo hiểm thất nghiệp thì quyền lợi chuyển sang quỹ bảo hiểm thất nghiệp.",
          "keys": [
            "chuyển sang quỹ"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s09",
      "module": "BRK-08",
      "data": {
        "title": "Thâm niên của Dũng, chia hai",
        "points": [
          {
            "label": "Trước 2009",
            "sub": "Công ty trả trợ cấp",
            "illus": "factory"
          },
          {
            "label": "01/01/2009",
            "sub": "Bắt đầu BHTN",
            "illus": "spiral-calendar"
          },
          {
            "label": "2009 → nay",
            "sub": "Quỹ BHTN chi trả",
            "illus": "shield"
          }
        ],
        "current": 1
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before two thousand nine: the company pays the allowance, if you qualify.",
          "sub": "Trước 2009: công ty trả trợ cấp, nếu đủ điều kiện.",
          "keys": [
            "công ty trả trợ cấp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: the unemployment insurance fund takes over.",
          "sub": "Sau đó: quỹ bảo hiểm thất nghiệp lo.",
          "keys": [
            "quỹ bảo hiểm thất nghiệp"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p8,p10"
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
            "at": "l1",
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
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 130,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
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
            "caption": "Ngày 1 · 17:00 · quán vãn khách",
            "icon": "mobile-phone"
          },
          {
            "id": "e-q",
            "t": "text",
            "text": "Thử nghĩ xem: đủ 20 năm?",
            "x": 7932,
            "y": 500,
            "size": 46,
            "at": "l2:Think",
            "color": "coral"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "Không hẳn: chủ yếu phần trước 2009",
            "x": 7932,
            "y": 580,
            "size": 40,
            "at": "l4:mainly",
            "hl": [
              {
                "text": "trước 2009",
                "at": "l4:before"
              }
            ]
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "Bù lại: trợ cấp thất nghiệp",
            "x": 8792,
            "y": 668,
            "size": 32,
            "at": "l5:benefits",
            "color": "accent",
            "hl": [
              {
                "text": "trợ cấp thất nghiệp",
                "at": "l5:benefits"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật (hỏi đáp, 16/3/2023)",
            "x": 7932,
            "y": 660,
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
          "who": "dung",
          "say": "The company paid my unemployment insurance every year since it started. So I get nearly twenty years?",
          "sub": "Từ khi có bảo hiểm thất nghiệp, năm nào công ty cũng đóng. Vậy mình được tính gần hai mươi năm?",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Think about it. Is he right?",
          "sub": "Thử nghĩ xem. Anh nói đúng không?",
          "keys": [
            "Thử nghĩ xem"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Nearly twenty years, insured every year since two thousand nine.",
          "sub": "Gần hai mươi năm, năm nào cũng đóng từ 2009.",
          "wait": 1200
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not quite. The insured years are subtracted, so the allowance mainly covers the years before two thousand nine.",
          "sub": "Không hẳn. Phần đã đóng bị trừ ra, nên trợ cấp mất việc làm chủ yếu tính cho mấy năm trước 2009.",
          "keys": [
            "chủ yếu tính cho mấy năm trước 2009"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "In return, those insured years are his basis to claim unemployment benefits.",
          "sub": "Bù lại, phần đã đóng là căn cứ để anh xin hưởng trợ cấp thất nghiệp.",
          "keys": [
            "Bù lại"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Con số của công ty: đúng hay sai?",
        "illus": "magnifying-glass-tilted-left"
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
          "say": "Is the company's figure right or wrong? Time to check.",
          "sub": "Con số của công ty đúng hay sai? Đến lúc đối chiếu.",
          "keys": [
            "đúng hay sai"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p11"
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
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Ngày 2 · Bốn bước",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:canteen"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "file-folder",
                "teacup-without-handle"
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
            "at": "l1:canteen",
            "caption": "Ngày 2 · 8:00 · căng tin nhà máy",
            "icon": "file-folder"
          },
          {
            "id": "f-p",
            "t": "text",
            "text": "Giấy tờ cần:",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l3:papers",
            "color": "accent"
          },
          {
            "id": "f-p1",
            "t": "text",
            "text": "Hợp đồng đầu tiên + phụ lục",
            "x": 60,
            "y": 1330,
            "size": 40,
            "at": "l3:first contract"
          },
          {
            "id": "f-p2",
            "t": "text",
            "text": "Phiếu lương 6 tháng gần nhất",
            "x": 60,
            "y": 1395,
            "size": 40,
            "at": "l3:payslips"
          },
          {
            "id": "f-p3",
            "t": "text",
            "text": "Xác nhận thời gian đóng BHTN",
            "x": 60,
            "y": 1460,
            "size": 40,
            "at": "l4:confirmation"
          },
          {
            "id": "f-p4",
            "t": "text",
            "text": "Giấy trợ cấp thôi việc cũ",
            "x": 60,
            "y": 1525,
            "size": 36,
            "at": "l5:severance",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: day two, eight a.m., the factory canteen. Meet Cô Hoa, sewing team leader, cut in the same wave.",
          "sub": "Chặng bốn: ngày hai, tám giờ sáng, căng tin nhà máy. Đây là Cô Hoa, tổ trưởng tổ may, bị cắt cùng đợt.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "I joined before the insurance, too. I've already checked mine. Four steps, okay?",
          "sub": "Cô cũng vào làm trước khi có bảo hiểm. Cô tính xong rồi. Bốn bước, vậy nha!",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First, the papers: your first contract and annexes, your last six payslips.",
          "sub": "Trước hết, giấy tờ: hợp đồng đầu tiên và các phụ lục, phiếu lương sáu tháng gần nhất.",
          "keys": [
            "hợp đồng đầu tiên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And confirmation of your unemployment insurance time.",
          "sub": "Và xác nhận thời gian đóng bảo hiểm thất nghiệp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Got a severance payment when you switched contracts? Find those papers too. That part is subtracted.",
          "sub": "Từng nhận trợ cấp thôi việc khi chuyển hợp đồng? Tìm lại giấy lần đó, vì phần đã nhận sẽ bị trừ.",
          "keys": [
            "sẽ bị trừ"
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
      "ref": "p11"
    },
    {
      "id": "s13",
      "module": "BRK-05",
      "data": {
        "title": "Bốn bước của Cô Hoa",
        "points": [
          "Ghi ngày vào làm, ngày đóng BHTN",
          "Lấy khoảng giữa, trừ phần đã nhận, làm tròn",
          "Nhân lương bình quân, so với thông báo"
        ],
        "illus": "abacus"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "One, two: your start date, then the insurance start date.",
          "sub": "Một, hai: ngày vào làm, ngày đóng bảo hiểm thất nghiệp.",
          "keys": [
            "ngày vào làm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Three: the gap, minus past payments, rounded.",
          "sub": "Ba: khoảng giữa, trừ phần đã nhận, làm tròn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Four: times the average. Compare!",
          "sub": "Bốn: nhân lương bình quân, so với thông báo!",
          "keys": [
            "so với thông báo"
          ]
        }
      ],
      "ref": "p12"
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
          }
        ],
        "items": [
          {
            "id": "f-k",
            "t": "text",
            "text": "Tự tính trước → nói chuyện rõ hơn",
            "x": 920,
            "y": 1758,
            "size": 36,
            "at": "l1:clearer",
            "color": "accent",
            "hl": [
              {
                "text": "rõ hơn",
                "at": "l1:clearer"
              }
            ]
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "với phòng nhân sự",
            "x": 960,
            "y": 1812,
            "size": 34,
            "at": "l1:HR"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Do the maths first with your own papers. Then the talk with HR gets much clearer.",
          "sub": "Tự tính trước bằng giấy tờ của mình, thì cuộc nói chuyện với phòng nhân sự rõ ràng hơn nhiều.",
          "keys": [
            "rõ ràng hơn nhiều"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s15",
      "module": "BRK-04",
      "data": {
        "title": "Đã đóng BHTN thì…",
        "wrong": "Công ty hết nghĩa vụ, không trả gì",
        "right": "Chỉ trừ phần đã đóng, phần còn lại vẫn trả",
        "wrongIllus": "money-with-wings",
        "rightIllus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Insurance paid, nothing owed? Wrong.",
          "sub": "Đã đóng bảo hiểm là hết nợ? Sai.",
          "keys": [
            "Sai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Only that time is subtracted. The rest is still owed.",
          "sub": "Chỉ trừ phần đã đóng. Phần còn lại vẫn phải trả.",
          "keys": [
            "vẫn phải trả"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-fine",
            "t": "text",
            "text": "Không trả: cá nhân 1–20 triệu",
            "x": 60,
            "y": 1630,
            "size": 42,
            "at": "l1:million",
            "color": "coral",
            "hl": [
              {
                "text": "1–20 triệu",
                "at": "l1:twenty million"
              }
            ]
          },
          {
            "id": "f-fine2",
            "t": "text",
            "text": "tổ chức: gấp hai lần",
            "x": 100,
            "y": 1700,
            "size": 38,
            "at": "l2:double"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật, dẫn Nghị định 12/2022/NĐ-CP",
            "x": 60,
            "y": 1760,
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
          "say": "The summary cites Decree twelve of twenty twenty two: an individual employer who doesn't pay faces one to twenty million dong.",
          "sub": "Bài tổng hợp dẫn Nghị định 12/2022/NĐ-CP: cá nhân không trả trợ cấp có thể bị phạt từ 1 đến 20 triệu đồng.",
          "keys": [
            "từ 1 đến 20 triệu đồng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Depending on how many workers. An organisation pays double.",
          "sub": "Tuỳ số người lao động bị vi phạm. Tổ chức bị phạt gấp hai lần."
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s17",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Ngày 2 · 10:00 · căng tin",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "hoa",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Rút BHXH một lần ngay tuần đầu",
          "why": "Phải sau 12 tháng không đóng mới đủ điều kiện, mà đây là quyết định lớn.",
          "rule": "Tháng đầu là lúc tìm hiểu, chưa phải lúc quyết định"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Seventeen years of social insurance. I'll withdraw it all as a lump sum this week!",
          "sub": "Mười bảy năm bảo hiểm xã hội. Tuần này anh làm hồ sơ rút một lần luôn!",
          "pose": "cross",
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
          "say": "You must wait twelve months without paying anyway. Why rush a big decision?",
          "sub": "Dù sao cũng phải chờ đủ 12 tháng không đóng. Vội gì một quyết định lớn?",
          "keys": [
            "chờ đủ 12 tháng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Làm lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Ask about the conditions first, Dũng. Keep the book, focus on finding work.",
          "sub": "Hỏi rõ điều kiện trước đã Dũng. Để sổ đó, tập trung tìm việc.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Right. I'll decide later, with more information.",
          "sub": "Ừ. Có thêm thông tin rồi tính.",
          "phase": "redo",
          "face": "happy"
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
      "id": "s18",
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
            "text": "⑤ 10:00 · Sổ bảo hiểm",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:book"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Rút một lần · Điều 70",
            "x": 2028,
            "y": 1260,
            "size": 40,
            "at": "l2:Article"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "tham gia trước 01/7/2025",
            "x": 2068,
            "y": 1330,
            "size": 44,
            "at": "l2:before",
            "color": "accent",
            "hl": [
              {
                "text": "trước 01/7/2025",
                "at": "l2:July"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "sau 12 tháng không đóng",
            "x": 2068,
            "y": 1400,
            "size": 44,
            "at": "l3:twelve"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "chưa đủ 20 năm đóng",
            "x": 2068,
            "y": 1470,
            "size": 44,
            "at": "l3:twenty"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Tham gia từ 01/7/2025: không có",
            "x": 2028,
            "y": 1550,
            "size": 40,
            "at": "l4:from",
            "color": "coral"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật (2026), Điều 70 Luật BHXH 2024",
            "x": 2028,
            "y": 1620,
            "size": 26,
            "at": "l2",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Tháng đầu: tìm hiểu, chưa quyết",
            "x": 2028,
            "y": 1730,
            "size": 50,
            "at": "l5:learning",
            "color": "accent",
            "hl": [
              {
                "text": "chưa quyết",
                "at": "l5:deciding"
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
          "say": "Fifth stop: the social insurance book. Many think of a quick lump sum.",
          "sub": "Chặng năm: cuốn sổ bảo hiểm xã hội. Nhiều người nghĩ ngay đến chuyện rút một lần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Under Article seventy of the twenty twenty four law: if you joined before July first, twenty twenty five.",
          "sub": "Theo Điều 70 Luật Bảo hiểm xã hội 2024: người tham gia trước 01/7/2025.",
          "keys": [
            "trước 01/7/2025"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "After twelve months paying neither compulsory nor voluntary insurance, with under twenty years in total.",
          "sub": "Sau 12 tháng không đóng cả bắt buộc lẫn tự nguyện, và tổng thời gian đóng chưa đủ 20 năm.",
          "keys": [
            "chưa đủ 20 năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Joined from July twenty twenty five? That option doesn't exist.",
          "sub": "Bắt đầu tham gia từ 01/7/2025? Không có trường hợp này."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So the first month is for learning, not deciding.",
          "sub": "Vậy tháng đầu sau cắt giảm là lúc tìm hiểu, chưa phải lúc quyết định.",
          "keys": [
            "chưa phải lúc quyết định"
          ]
        }
      ],
      "ref": "p16,p18"
    },
    {
      "id": "s19",
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
            "text": "⑥ 14:00 · Hỏi lại nhân sự",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:two p.m."
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "give",
                  "face": "neutral"
                }
              ],
              "props": [
                "envelope",
                "file-folder"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:HR",
            "caption": "Ngày 2 · 14:00 · phòng nhân sự",
            "icon": "envelope"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Chênh lệch? Hỏi bằng văn bản",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l3:writing",
            "color": "accent",
            "hl": [
              {
                "text": "bằng văn bản",
                "at": "l3:writing"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Giữ bản sao mọi giấy tờ",
            "x": 3996,
            "y": 1340,
            "size": 46,
            "at": "l3:copies"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Hồ sơ trợ cấp thất nghiệp:",
            "x": 3996,
            "y": 1430,
            "size": 42,
            "at": "l4:unemployment"
          },
          {
            "id": "h-3b",
            "t": "text",
            "text": "xem bài riêng (có hạn chót)",
            "x": 4036,
            "y": 1495,
            "size": 38,
            "at": "l4:lesson"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: two p.m., the HR office. Dũng's figure and the company's don't match.",
          "sub": "Chặng sáu: hai giờ chiều, phòng nhân sự. Con số Dũng tự tính chênh với của công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Could you tell me in writing how you counted my years? Here are my papers.",
          "sub": "Chị cho em xin văn bản giải thích cách tính số năm của em nhé. Giấy tờ của em đây.",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Exactly. Ask in writing if there's a gap, and keep copies of everything.",
          "sub": "Đúng vậy. Chênh lệch thì hỏi bằng văn bản, và giữ bản sao mọi giấy tờ.",
          "keys": [
            "hỏi bằng văn bản"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Unemployment benefits have their own lesson, with documents, place and deadline.",
          "sub": "Hồ sơ hưởng trợ cấp thất nghiệp có bài riêng: hồ sơ, nơi nộp và thời hạn."
        }
      ],
      "ref": "p19"
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
            "at": "l2",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Ngày 2 · 17:00 · Quán cũ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:same cafe"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "file-folder",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l2",
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
            "at": "l1:same cafe",
            "caption": "Ngày 2 · 17:00 · quán cà phê đầu ngõ",
            "icon": "file-folder"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Trước 2009 → công ty trả",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l2:before"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Sau 2009 → trợ cấp thất nghiệp",
            "x": 5964,
            "y": 1335,
            "size": 42,
            "at": "l2:after"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Bìa hồ sơ “Quyền lợi” ✓",
            "x": 5964,
            "y": 1420,
            "size": 46,
            "at": "l3:folder",
            "color": "accent"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Nói có sách, mách có chứng”",
            "x": 5964,
            "y": 1530,
            "size": 50,
            "at": "l4:books",
            "color": "accent",
            "hl": [
              {
                "text": "có chứng",
                "at": "l4:prove"
              }
            ]
          },
          {
            "id": "i-next",
            "t": "text",
            "text": "Tối nay: nói với gia đình",
            "x": 5964,
            "y": 1650,
            "size": 46,
            "at": "l5:tonight",
            "color": "coral",
            "hl": [
              {
                "text": "nói với gia đình",
                "at": "l5:family"
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
          "say": "Five p.m., day two. Same cafe, same table. The notice now sits in a green folder.",
          "sub": "Năm giờ chiều ngày hai. Vẫn quán ấy, vẫn bàn ấy. Tờ thông báo giờ nằm trong bìa hồ sơ xanh.",
          "keys": [
            "Vẫn quán ấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Before two thousand nine, the company pays. After, I claim unemployment benefits. Now I get it.",
          "sub": "Trước 2009, công ty trả. Sau 2009, mình xin trợ cấp thất nghiệp. Giờ thì hiểu rồi.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Every paper in one folder. Nothing missing.",
          "sub": "Giấy tờ đủ cả trong một bìa. Không thiếu tờ nào."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Speak with books, prove with papers. This time, Dũng has both.",
          "sub": "“Nói có sách, mách có chứng.” Lần này Dũng có đủ cả hai.",
          "keys": [
            "có đủ cả hai"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And tonight, a harder conversation waits at home: telling his family.",
          "sub": "Còn tối nay, một cuộc nói chuyện khó hơn đang chờ ở nhà: nói với gia đình.",
          "keys": [
            "nói với gia đình"
          ]
        }
      ],
      "ref": "p10,p19"
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
            "at": "l1:three",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2",
            "fit": "C",
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
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Ba điều · làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l5:Today"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5496,
            "y": 40,
            "at": "l2:reason"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 40,
            "at": "l3:subtracted"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1560,
            "y": 1130,
            "at": "l4:papers"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Gom 3 loại giấy tờ",
            "x": 7932,
            "y": 1270,
            "size": 50,
            "at": "l5:gather",
            "color": "accent",
            "hl": [
              {
                "text": "3 loại",
                "at": "l5:three"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Tự tính theo 4 bước",
            "x": 7932,
            "y": 1350,
            "size": 50,
            "at": "l5:four steps"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Bài tiếp: nói với vợ chồng, con",
            "x": 7932,
            "y": 1430,
            "size": 44,
            "at": "l6:Next"
          },
          {
            "id": "j-src",
            "t": "text",
            "text": "Bài để tham khảo, không thay tư vấn riêng; quy định có thể thay đổi — khi cần áp dụng, kiểm lại với cơ quan/chuyên gia. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1770,
            "size": 26,
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
          "say": "So, three things.",
          "sub": "Tóm lại, ba điều."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: the reason on your papers decides your allowance.",
          "sub": "Một: lý do trên giấy tờ quyết định khoản trợ cấp.",
          "keys": [
            "lý do trên giấy tờ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: insured years are subtracted. Years before two thousand nine, plus probation, training, maternity, need rechecking.",
          "sub": "Hai: phần đã đóng bảo hiểm thất nghiệp bị trừ; phần trước 2009, thử việc, đi học, thai sản cần dò lại.",
          "keys": [
            "cần dò lại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: check with your own papers before you argue.",
          "sub": "Ba: đối chiếu bằng giấy tờ của mình trước khi trao đổi.",
          "keys": [
            "giấy tờ của mình"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Today: gather three kinds of papers, and do the four steps.",
          "sub": "Việc làm ngay: gom ba loại giấy tờ, tự tính theo bốn bước.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: telling your family. Rules may change, so check before you act.",
          "sub": "Bài tiếp: nói với gia đình. Quy định có thể thay đổi, nhớ kiểm lại trước khi áp dụng.",
          "keys": [
            "kiểm lại trước khi áp dụng"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s22",
      "module": "QUIZ-01",
      "data": {
        "q": "You joined the company in two thousand five, which part of your service may the employer still pay for?",
        "options": [
          "None of it, because workers who joined early lose every right",
          "Only the final month, because earlier years are counted by the bank",
          "The years before unemployment insurance began, if you meet the conditions"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Phần trước 01/01/2009 không có BHTN nên công ty vẫn có thể phải trả."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You joined the company in two thousand five, which part of your service may the employer still pay for?",
          "sub": "Bạn vào công ty năm 2005, phần thâm niên nào công ty có thể vẫn phải trả trợ cấp?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The years before unemployment insurance began, if you meet the conditions.",
          "sub": "Những năm trước khi có bảo hiểm thất nghiệp, nếu đủ điều kiện."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Two thousand nine splits your service in two.",
          "sub": "Mốc 2009 chia thâm niên làm hai."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[35]"
    },
    {
      "id": "s23",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Thâm niên dài và quyền lợi khi bị cắt giảm"
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
  "hook": "HOOK-24",
  "anchor": {
    "type": "date",
    "value": "01/01/2009",
    "ref": "p8"
  },
  "notes": "#145 bài MỚI (bài 1 chuỗi laid-off-at-40) theo hạt nhân (#136) + biến thể edit (#144). HOOK-24 (vật neo NGÀY “01/01/2009”, p8) → “có một chi tiết” → Dũng nghĩ sai “18 năm = 18 tháng lương” → “Vậy thực sự tính thế nào?” → 3 ý. Dòng thời gian: HAI NGÀY ĐẦU với tờ thông báo: ngày 1 10:00 quán cà phê (intro) → 13:00 lý do trên giấy, Điều 47, BLLĐ đang sửa (p1, p2) → 15:00 công thức, lương bình quân 6 tháng (p3, p4; BRK-03 quy tắc 6 tháng lẻ; p5, p6) → 17:00 trừ BHTN (p7; BRK-08 mốc 2009 p8, p10; “Thử nghĩ xem” p9) → BRK-07 rehook → ngày 2 8:00 căng tin, Cô Hoa (= chị Lan p12) giấy tờ + 4 bước (p11–p13; BRK-05), BRK-04 hiểu lầm + mức phạt NĐ 12/2022 (p14, p15) → DLG “Khoan đã!” rút BHXH một lần (Cách A/B p17) → BHXH Điều 70 (p16, p18) → 14:00 phòng nhân sự, hỏi bằng văn bản (p19) → 17:00 quán cũ khép vòng, nối sang bài nói với gia đình → tóm tắt + lưu ý #133. Nhân vật theo w145/_series/laid-off-at-40.md: Dũng (= anh Hùng p9, anh Dũng p17), Cô Hoa (= chị Lan p12). Chi tiết minh hoạ tự đặt, không phải số liệu: 42 tuổi, nhà máy may, căng tin, bìa hồ sơ xanh; KHÔNG nêu số tiền trợ cấp cụ thể. Số chỉ từ bài: 01/01/2009, NĐ 127/2008, Điều 47 BLLĐ 2019, 12 tháng, 17/10–21/11/2026, 1 tháng/năm, ít nhất 2 tháng, 6 tháng, gần 20 năm, 1–20 triệu, gấp 2, NĐ 12/2022, Điều 70 Luật BHXH 2024, 01/7/2025, 20 năm, 17 năm. Ca dao neo: “Nói có sách, mách có chứng”. Câu đố questions[35].",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
