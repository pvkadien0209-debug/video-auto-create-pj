// us-family-immigration-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "us-family-immigration-overview--w01",
  "unit": {
    "audience": "family-sponsored-immigrants-to-us",
    "slug": "us-family-immigration-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Hồ sơ bảo lãnh đi Mỹ đã được duyệt: các bước tiếp theo là gì?",
    "series": "Từ hồ sơ được duyệt đến ngày phỏng vấn — cho người được bảo lãnh định cư Mỹ diện gia đình"
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
              "a-env"
            ],
            "zoom": 1.5,
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
            "id": "a-env",
            "t": "illus",
            "name": "envelope",
            "x": 120,
            "y": 120,
            "size": 260,
            "at": "l1:envelope"
          },
          {
            "id": "a-n",
            "t": "text",
            "text": "Thông báo chấp thuận",
            "x": 420,
            "y": 170,
            "size": 64,
            "at": "l1:approval",
            "color": "accent",
            "hl": [
              {
                "text": "chấp thuận",
                "at": "l1:approval"
              }
            ]
          },
          {
            "id": "a-n2",
            "t": "text",
            "text": "USCIS · đơn I-130",
            "x": 420,
            "y": 270,
            "size": 50,
            "at": "l2:petition"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One envelope from America. Inside, an approval notice.",
          "sub": "Một phong bì từ Mỹ. Bên trong: thông báo chấp thuận.",
          "keys": [
            "thông báo chấp thuận"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The family petition is approved. Everyone cheers. Then everyone asks: now what?",
          "sub": "Đơn bảo lãnh đã được duyệt. Cả nhà reo lên. Rồi cả nhà cùng hỏi: giờ làm gì?",
          "keys": [
            "giờ làm gì"
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
            "at": "l1",
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
            "y": 110,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "explain"
                }
              ],
              "props": [
                "envelope"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
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
            "caption": "Thứ Hai · phòng khách sau quán",
            "icon": "envelope"
          },
          {
            "id": "a-r1",
            "t": "text",
            "text": "Lan: “Tháng sau bay!”",
            "x": 70,
            "y": 400,
            "size": 48,
            "at": "l2:next month"
          },
          {
            "id": "a-r2",
            "t": "text",
            "text": "Cô Hoa: duyệt lâu rồi, vẫn chờ",
            "x": 70,
            "y": 470,
            "size": 40,
            "at": "l4:years",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đường dài mới biết ngựa hay”",
            "x": 70,
            "y": 600,
            "size": 46,
            "at": "l5:long road",
            "color": "accent",
            "hl": [
              {
                "text": "Đường dài",
                "at": "l5:long road"
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
          "say": "Meet Lan. Just married to a US citizen. This envelope is hers.",
          "sub": "Đây là Lan. Vừa cưới chồng là công dân Mỹ. Phong bì này của Lan.",
          "keys": [
            "công dân Mỹ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Approved! So I fly next month, right?",
          "sub": "Duyệt rồi! Vậy tháng sau con bay hả mẹ?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Ms Hoa, her mother. She runs a small rice shop in Saigon.",
          "sub": "Còn đây là cô Hoa, mẹ Lan, chủ quán cơm nhỏ ở Sài Gòn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "My brother's petition for me was approved years ago. Still no interview!",
          "sub": "Đơn anh Tâm bảo lãnh mẹ được duyệt từ mấy năm trước. Vẫn chưa có lịch phỏng vấn!",
          "pose": "point"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Same kind of paper, two very different roads. A long road shows the good horse.",
          "sub": "Cùng một loại giấy, hai con đường rất khác. “Đường dài mới biết ngựa hay.”",
          "keys": [
            "Đường dài mới biết ngựa hay"
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
            "text": "Được duyệt rồi, đi tiếp ra sao?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:next steps",
            "hl": [
              {
                "text": "đi tiếp",
                "at": "l1:next steps"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: sắp phỏng vấn",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:almost",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:first step"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: mới bước đầu",
            "x": 2028,
            "y": 260,
            "size": 60,
            "at": "l2:first step",
            "color": "accent",
            "hl": [
              {
                "text": "mới bước đầu",
                "at": "l2:first step"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Một tuần, sáu chặng",
            "x": 2028,
            "y": 420,
            "size": 50,
            "at": "l3:six stops",
            "hl": [
              {
                "text": "sáu chặng",
                "at": "l3:six stops"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 520,
            "w": 255,
            "h": 100,
            "at": "l3:six stops+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2303,
            "y": 520,
            "w": 255,
            "h": 100,
            "at": "l3:six stops+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2578,
            "y": 520,
            "w": 255,
            "h": 100,
            "at": "l3:six stops+1100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2853,
            "y": 520,
            "w": 255,
            "h": 100,
            "at": "l3:six stops+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3128,
            "y": 520,
            "w": 255,
            "h": 100,
            "at": "l3:six stops+1700",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3403,
            "y": 520,
            "w": 255,
            "h": 100,
            "at": "l3:six stops+2000",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "① NVC",
            "x": 2043,
            "y": 545,
            "size": 36,
            "at": "l3:six stops+620"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "② Hai nhóm",
            "x": 2318,
            "y": 545,
            "size": 36,
            "at": "l3:six stops+920"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "③ Giấy tờ",
            "x": 2593,
            "y": 545,
            "size": 36,
            "at": "l3:six stops+1220"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "④ Khám",
            "x": 2868,
            "y": 545,
            "size": 36,
            "at": "l3:six stops+1520"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "⑤ Phỏng vấn",
            "x": 3143,
            "y": 545,
            "size": 36,
            "at": "l3:six stops+1820"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "⑥ Bao đậu?",
            "x": 3418,
            "y": 545,
            "size": 36,
            "at": "l3:six stops+2120"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Bộ Ngoại giao Mỹ, NVC, Đại sứ quán Hoa Kỳ tại Việt Nam",
            "x": 2028,
            "y": 700,
            "size": 28,
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
          "say": "So, after approval, what are the next steps?",
          "sub": "Vậy đơn đã duyệt rồi, các bước tiếp theo là gì?",
          "keys": [
            "các bước tiếp theo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not: the interview is almost here. But: approval is only the first step.",
          "sub": "Không phải: sắp phỏng vấn rồi. Mà là: duyệt đơn mới là bước đầu.",
          "keys": [
            "mới là bước đầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Let's walk one week with this family, through six stops.",
          "sub": "Cùng nhà cô Hoa đi qua một tuần, sáu chặng.",
          "keys": [
            "sáu chặng"
          ]
        }
      ],
      "ref": "intro,p19"
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
            "text": "① Thứ Hai · Hồ sơ đi đâu?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Người thân ở Mỹ",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l2:relative"
          },
          {
            "id": "c-1s",
            "t": "text",
            "text": "công dân hoặc thường trú nhân nộp đơn I-130",
            "x": 3996,
            "y": 230,
            "size": 28,
            "at": "l2:citizen",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-a1",
            "t": "arrow",
            "from": [
              4416,
              190
            ],
            "to": [
              4556,
              190
            ],
            "at": "l3:agency"
          },
          {
            "id": "c-b2",
            "t": "box",
            "x": 4576,
            "y": 150,
            "w": 300,
            "h": 90,
            "at": "l3:agency",
            "stroke": 5
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "USCIS duyệt",
            "x": 4596,
            "y": 170,
            "size": 46,
            "at": "l3:agency+200"
          },
          {
            "id": "c-a2",
            "t": "arrow",
            "from": [
              4896,
              190
            ],
            "to": [
              5036,
              190
            ],
            "at": "l4:moves"
          },
          {
            "id": "c-b3",
            "t": "box",
            "x": 5056,
            "y": 150,
            "w": 520,
            "h": 90,
            "at": "l4:moves",
            "color": "accent",
            "stroke": 5
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "NVC: phòng chờ",
            "x": 5076,
            "y": 170,
            "size": 46,
            "at": "l4:moves+200",
            "hl": [
              {
                "text": "phòng chờ",
                "at": "l5:waiting room"
              }
            ]
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "thu lệ phí, giấy tờ · giữ hồ sơ tới khi có lịch",
            "x": 5056,
            "y": 260,
            "size": 28,
            "at": "l5:fees",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-pd",
            "t": "text",
            "text": "Ngày ưu tiên = ngày nộp đơn",
            "x": 3996,
            "y": 360,
            "size": 52,
            "at": "l6:priority date",
            "color": "accent",
            "hl": [
              {
                "text": "Ngày ưu tiên",
                "at": "l6:priority date"
              }
            ]
          },
          {
            "id": "c-pds",
            "t": "text",
            "text": "ghi trên thông báo chấp thuận của USCIS",
            "x": 3996,
            "y": 430,
            "size": 28,
            "at": "l6:notice",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-cn",
            "t": "text",
            "text": "NVC gửi thư + mã hồ sơ",
            "x": 3996,
            "y": 500,
            "size": 50,
            "at": "l7:case number",
            "hl": [
              {
                "text": "mã hồ sơ",
                "at": "l7:case number"
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
          "say": "Stop one, Monday. Where does the file go now?",
          "sub": "Chặng một, thứ Hai. Hồ sơ giờ đi đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A relative in America, a citizen or permanent resident, files form I-130.",
          "sub": "Người thân ở Mỹ, là công dân hoặc thường trú nhân, nộp đơn I-130."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First the immigration agency, USCIS, must approve it.",
          "sub": "Trước hết, Sở Di trú USCIS phải duyệt đơn.",
          "keys": [
            "USCIS phải duyệt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Only then the case moves to the National Visa Center, NVC.",
          "sub": "Duyệt rồi hồ sơ mới chuyển sang Trung tâm Thị thực Quốc gia, NVC."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "NVC collects fees and documents, and holds the file. Think of a waiting room.",
          "sub": "NVC thu lệ phí, giấy tờ và giữ hồ sơ đến khi xếp được lịch. Như một phòng chờ.",
          "keys": [
            "phòng chờ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The day your relative filed is your priority date. It's printed on the approval notice.",
          "sub": "Ngày người thân nộp đơn là ngày ưu tiên, in trên thông báo chấp thuận.",
          "keys": [
            "ngày ưu tiên"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "When NVC receives the case, it gives a case number and sends a letter.",
          "sub": "Nhận hồ sơ, NVC cấp mã hồ sơ và gửi thư hướng dẫn bước tiếp.",
          "keys": [
            "mã hồ sơ"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "zoom": 1.3,
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
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 330,
            "w": 600,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "closed-mailbox-with-lowered-flag"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "close",
                  "on": "lan",
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
            "caption": "Thứ Hai tối · hộp thư trống",
            "icon": "closed-mailbox-with-lowered-flag"
          },
          {
            "id": "c-slow",
            "t": "text",
            "text": "Thư NVC đến chậm: bình thường",
            "x": 3996,
            "y": 590,
            "size": 46,
            "at": "l3:later",
            "hl": [
              {
                "text": "bình thường",
                "at": "l3:normal"
              }
            ]
          },
          {
            "id": "c-take",
            "t": "text",
            "text": "Cất kỹ giấy chấp thuận",
            "x": 3996,
            "y": 670,
            "size": 56,
            "at": "l4:keep",
            "color": "accent",
            "hl": [
              {
                "text": "Cất kỹ",
                "at": "l4:keep"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "The notice came, but no letter from NVC. Is my file lost?",
          "sub": "Giấy chấp thuận về rồi, mà chưa thấy thư NVC. Hồ sơ con thất lạc rồi sao?",
          "face": "sad"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Calm down, Lan.",
          "sub": "Bình tĩnh, Lan."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "NVC's own FAQ says the petition often arrives later than your notice. That's normal.",
          "sub": "Chính phần hỏi đáp của NVC viết: đơn thường đến NVC chậm hơn thông báo. Chuyện thường gặp.",
          "keys": [
            "Chuyện thường gặp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So keep the approval notice safe, and wait for the case number before you worry.",
          "sub": "Vậy cất kỹ thông báo chấp thuận, chờ thư có mã hồ sơ rồi hãy lo.",
          "keys": [
            "cất kỹ thông báo chấp thuận"
          ]
        }
      ],
      "ref": "p3,p4"
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
            "text": "② Thứ Ba · Hai nhóm",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
            "w": 780,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up"
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
            "at": "l1:tuesday",
            "caption": "Thứ Ba · quán cơm, sau giờ đóng cửa",
            "icon": "pot-of-food"
          },
          {
            "id": "d-ir",
            "t": "text",
            "text": "Thân nhân trực hệ",
            "x": 5964,
            "y": 160,
            "size": 52,
            "at": "l3:immediate",
            "color": "accent",
            "hl": [
              {
                "text": "trực hệ",
                "at": "l3:immediate"
              }
            ]
          },
          {
            "id": "d-irs",
            "t": "text",
            "text": "vợ/chồng, con, cha mẹ của công dân Mỹ",
            "x": 5964,
            "y": 225,
            "size": 28,
            "at": "l3b:spouses",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-ir2",
            "t": "text",
            "text": "→ NVC làm tiếp ngay",
            "x": 5964,
            "y": 275,
            "size": 48,
            "at": "l4:right away",
            "hl": [
              {
                "text": "ngay",
                "at": "l4:right away"
              }
            ]
          },
          {
            "id": "d-pf",
            "t": "text",
            "text": "Diện ưu tiên gia đình",
            "x": 5964,
            "y": 370,
            "size": 52,
            "at": "l5:preference"
          },
          {
            "id": "d-pf2",
            "t": "text",
            "text": "→ chờ lịch chiếu khán",
            "x": 5964,
            "y": 440,
            "size": 48,
            "at": "l5:visa bulletin",
            "color": "coral",
            "hl": [
              {
                "text": "lịch chiếu khán",
                "at": "l5:visa bulletin"
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
          "say": "Stop two, Tuesday, at the rice shop after closing.",
          "sub": "Chặng hai, thứ Ba, ở quán cơm sau giờ đóng cửa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Why does my daughter get to go first?",
          "sub": "Sao con gái tôi lại được đi trước?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The embassy page sorts family visas into two groups. First, immediate relatives.",
          "sub": "Trang Đại sứ quán chia visa diện gia đình làm hai nhóm. Một: thân nhân trực hệ.",
          "keys": [
            "thân nhân trực hệ"
          ]
        },
        {
          "id": "l3b",
          "lang": "en",
          "who": "det",
          "say": "Spouses, children and parents of US citizens.",
          "sub": "Vợ hoặc chồng, con, cha mẹ của công dân Mỹ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "For them, NVC gets in touch to continue right away. Lan is in the fast lane.",
          "sub": "Với nhóm này, NVC liên hệ làm tiếp ngay. Lan đang ở làn ưu tiên.",
          "keys": [
            "làm tiếp ngay"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Second, family preference. Those depend on the priority date and the monthly visa bulletin.",
          "sub": "Hai: diện ưu tiên gia đình. Phụ thuộc ngày ưu tiên và ngày cắt trong lịch chiếu khán hằng tháng.",
          "keys": [
            "lịch chiếu khán"
          ]
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-cap",
            "t": "text",
            "text": "Quốc hội Mỹ giới hạn số visa",
            "x": 5964,
            "y": 540,
            "size": 48,
            "at": "l1:congress",
            "hl": [
              {
                "text": "giới hạn",
                "at": "l1:limits"
              }
            ]
          },
          {
            "id": "d-sib",
            "t": "text",
            "text": "Anh chị em: diện chờ",
            "x": 5964,
            "y": 620,
            "size": 50,
            "at": "l2:brother",
            "color": "coral"
          },
          {
            "id": "d-bank",
            "t": "text",
            "text": "như bảng gọi số ngân hàng",
            "x": 6804,
            "y": 680,
            "size": 46,
            "at": "l3:bank",
            "color": "accent",
            "hl": [
              {
                "text": "bảng gọi số",
                "at": "l3:number board"
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
          "say": "Congress limits the number of visas, so some categories move fast and some move slowly.",
          "sub": "Quốc hội Mỹ giới hạn số thị thực, nên có diện đi nhanh, có diện đi chậm.",
          "keys": [
            "giới hạn số thị thực"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ms Hoa, sponsored by her brother, is in a waiting category.",
          "sub": "Cô Hoa được anh trai bảo lãnh, thuộc diện phải chờ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Like the number board at a bank. You can't walk up until your number is called.",
          "sub": "Như bảng gọi số ở ngân hàng: chưa gọi tới số, chưa lên quầy được.",
          "keys": [
            "bảng gọi số"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s07",
      "module": "BRK-04",
      "data": {
        "title": "Đơn được duyệt nghĩa là…",
        "wrong": "Sắp có lịch phỏng vấn",
        "right": "Chưa đáo hạn thì NVC chỉ giữ hồ sơ",
        "wrongIllus": "spiral-calendar",
        "rightIllus": "file-cabinet"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Approved means an interview soon?",
          "sub": "Duyệt rồi là sắp phỏng vấn?",
          "keys": [
            "sắp phỏng vấn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Not until it's current. NVC just holds the file.",
          "sub": "Chưa đáo hạn, NVC chỉ giữ hồ sơ.",
          "keys": [
            "chỉ giữ hồ sơ"
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
            "at": "l2",
            "fit": [
              "d-take"
            ],
            "zoom": 1.2,
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
            "id": "d-take",
            "t": "text",
            "text": "Duyệt đơn = bước đầu",
            "x": 5964,
            "y": 700,
            "size": 54,
            "at": "l2:first step",
            "color": "accent",
            "hl": [
              {
                "text": "bước đầu",
                "at": "l2:first step"
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
          "say": "Without a visa number yet, NVC only confirms it got the petition, and waits until the case is current.",
          "sub": "Diện chưa có số thị thực: NVC chỉ xác nhận đã nhận đơn, giữ hồ sơ đến khi đáo hạn.",
          "keys": [
            "đáo hạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So approval is the first step. For preference cases, the priority date against the bulletin decides the timing.",
          "sub": "Vậy duyệt đơn mới là bước đầu. Với diện ưu tiên, ngày ưu tiên so với lịch chiếu khán quyết định thời điểm.",
          "keys": [
            "quyết định thời điểm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "How to read that bulletin, and what the letter C means? That's the next lesson.",
          "sub": "Đọc lịch thế nào, chữ “C” nghĩa là gì? Bài kế tiếp sẽ nói kỹ.",
          "keys": [
            "Bài kế tiếp"
          ]
        }
      ],
      "ref": "p6,p7,p8"
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
            "text": "③ Thứ Tư · Khi NVC gọi",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:wednesday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 150,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "e-mail"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:wednesday",
            "caption": "Thứ Tư · Lan gọi video từ nhà chồng",
            "icon": "e-mail"
          },
          {
            "id": "e-c1",
            "t": "text",
            "text": "Đóng phí trên CEAC",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l3:ceac",
            "hl": [
              {
                "text": "CEAC",
                "at": "l3:ceac"
              }
            ]
          },
          {
            "id": "e-c2",
            "t": "text",
            "text": "Bảo trợ tài chính",
            "x": 7932,
            "y": 250,
            "size": 50,
            "at": "l4:affidavit"
          },
          {
            "id": "e-c2s",
            "t": "text",
            "text": "Affidavit of Support",
            "x": 7932,
            "y": 315,
            "size": 30,
            "at": "l4:affidavit",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-c3",
            "t": "text",
            "text": "Đơn + giấy tờ hộ tịch",
            "x": 7932,
            "y": 370,
            "size": 50,
            "at": "l4:civil"
          },
          {
            "id": "e-fee",
            "t": "text",
            "text": "Mức phí: xem trang chính thức",
            "x": 7932,
            "y": 460,
            "size": 46,
            "at": "l5:fees",
            "color": "coral",
            "hl": [
              {
                "text": "trang chính thức",
                "at": "l5:fees page"
              }
            ]
          },
          {
            "id": "e-fees",
            "t": "text",
            "text": "Fees for Visa Services · có thể thay đổi",
            "x": 7932,
            "y": 525,
            "size": 28,
            "at": "l5:change",
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
          "say": "Stop three, Wednesday. Lan video-calls from her new home.",
          "sub": "Chặng ba, thứ Tư. Lan gọi video từ nhà chồng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Mom, NVC says I can begin! Begin what, exactly?",
          "sub": "Mẹ ơi, NVC báo con bắt đầu được rồi! Mà bắt đầu cái gì?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "When a visa is available, or will be within months, NVC says begin. First, pay fees on CEAC.",
          "sub": "Khi thị thực đã có hoặc sắp có trong vài tháng, NVC báo bắt đầu. Trước hết, đóng phí trên CEAC.",
          "keys": [
            "đóng phí trên CEAC"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then submit the affidavit of support, the application, and civil documents.",
          "sub": "Rồi nộp bản bảo trợ tài chính, đơn, và giấy tờ hộ tịch."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "How much? Check the official fees page. Amounts can change, so the lesson gives no number.",
          "sub": "Phí bao nhiêu? Xem trang lệ phí chính thức. Mức phí có thể đổi, nên bài không ghi con số.",
          "keys": [
            "không ghi con số"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s10",
      "module": "BRK-08",
      "data": {
        "title": "Các bước nối nhau",
        "points": [
          {
            "label": "Nộp đơn",
            "sub": "người thân ở Mỹ",
            "illus": "envelope"
          },
          {
            "label": "NVC xử lý",
            "sub": "giữ hồ sơ",
            "illus": "file-cabinet"
          },
          {
            "label": "Lệ phí",
            "sub": "trên CEAC",
            "illus": "credit-card"
          },
          {
            "label": "Giấy tờ",
            "sub": "bảo trợ, hộ tịch",
            "illus": "page-facing-up"
          },
          {
            "label": "Phỏng vấn",
            "sub": "rồi việc sau đó",
            "illus": "speech-balloon"
          }
        ],
        "current": 2
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Petition, NVC, fees, documents, interview.",
          "sub": "Nộp đơn, NVC xử lý, lệ phí, giấy tờ, phỏng vấn."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Each step opens the next one. Lan is here.",
          "sub": "Bước này mở cửa bước sau. Lan đang ở đây.",
          "keys": [
            "Lan đang ở đây"
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
          }
        ],
        "items": [
          {
            "id": "e-nx",
            "t": "text",
            "text": "Danh sách giấy tờ → bài NVC",
            "x": 7932,
            "y": 620,
            "size": 46,
            "at": "l1:list",
            "color": "muted"
          },
          {
            "id": "e-take",
            "t": "text",
            "text": "Mỗi bước mở cửa bước sau",
            "x": 8772,
            "y": 680,
            "size": 46,
            "at": "l2:opens",
            "color": "accent",
            "hl": [
              {
                "text": "mở cửa",
                "at": "l2:opens"
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
          "say": "The full document list has its own lesson: what to submit to the National Visa Center.",
          "sub": "Danh sách giấy tờ đầy đủ có bài riêng: nộp hồ sơ cho NVC gồm những gì.",
          "keys": [
            "có bài riêng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For now, remember: each step opens the door to the next.",
          "sub": "Giờ chỉ cần nhớ: bước này mở cửa cho bước sau.",
          "keys": [
            "mở cửa cho bước sau"
          ]
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
            "text": "④ Thứ Năm · Khám sức khoẻ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:health"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "walk"
                }
              ],
              "props": [
                "hospital",
                "syringe"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:thursday",
            "caption": "Thứ Năm · trên đường (minh hoạ)",
            "icon": "hospital"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Có ngày phỏng vấn rồi mới khám",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l3:after",
            "hl": [
              {
                "text": "rồi mới khám",
                "at": "l3:after"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Bác sĩ được chỉ định",
            "x": 60,
            "y": 1340,
            "size": 44,
            "at": "l3:designated",
            "color": "accent"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Khám + tiêm chủng",
            "x": 60,
            "y": 1420,
            "size": 50,
            "at": "l3:vaccinations"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Nơi khám: TP.HCM và Hà Nội",
            "x": 60,
            "y": 1500,
            "size": 46,
            "at": "l4:hanoi"
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "Phí trả thẳng cho nơi khám",
            "x": 60,
            "y": 1580,
            "size": 48,
            "at": "l5:directly",
            "color": "coral",
            "hl": [
              {
                "text": "trả thẳng",
                "at": "l5:directly"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: trang chuẩn bị phỏng vấn; gói hướng dẫn lịch hẹn 8/2026",
            "x": 60,
            "y": 1790,
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
          "say": "Stop four, Thursday. Lan wants to get her health check done early.",
          "sub": "Chặng bốn, thứ Năm. Lan muốn đi khám sức khoẻ cho xong sớm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Any clinic near home will do, right?",
          "sub": "Phòng khám nào gần nhà cũng được, phải không?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No. After you get an interview date, you see a doctor designated by the consulate, for the exam and vaccinations.",
          "sub": "Không. Có ngày phỏng vấn rồi, bạn mới đến bác sĩ do Tổng Lãnh sự quán chỉ định để khám và tiêm chủng.",
          "keys": [
            "bác sĩ do Tổng Lãnh sự quán chỉ định"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The August twenty twenty-six package lists places in Ho Chi Minh City and Hanoi.",
          "sub": "Gói hướng dẫn tháng 8/2026 liệt kê nơi khám ở TP.HCM và Hà Nội."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Exam, X-ray and test fees are paid directly to the clinic.",
          "sub": "Phí khám, chụp X-quang, xét nghiệm trả trực tiếp cho nơi khám.",
          "keys": [
            "trả trực tiếp cho nơi khám"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "What to bring, which vaccines? The medical lesson covers that.",
          "sub": "Mang gì, vắc-xin nào? Bài khám sức khoẻ nói kỹ."
        }
      ],
      "ref": "p11"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Sáu · Ngày phỏng vấn",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Tổng Lãnh sự quán TP.HCM",
            "x": 2028,
            "y": 1250,
            "size": 52,
            "at": "l2:consulate",
            "hl": [
              {
                "text": "TP.HCM",
                "at": "l2:ho chi minh"
              }
            ]
          },
          {
            "id": "g-1s",
            "t": "text",
            "text": "chỉ theo lịch hẹn · NVC xếp lịch cho hầu hết người xin",
            "x": 2028,
            "y": 1320,
            "size": 28,
            "at": "l2:appointment",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Đăng ký trước ≥ 5 ngày làm việc",
            "x": 2028,
            "y": 1380,
            "size": 48,
            "at": "l3:five",
            "color": "coral",
            "hl": [
              {
                "text": "≥ 5 ngày làm việc",
                "at": "l3:five working days"
              }
            ]
          },
          {
            "id": "g-5s",
            "t": "text",
            "text": "không đăng ký thì không được vào (gói hướng dẫn 8/2026)",
            "x": 2028,
            "y": 1450,
            "size": 28,
            "at": "l3:entry",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-vi",
            "t": "text",
            "text": "Phỏng vấn bằng tiếng Việt",
            "x": 2028,
            "y": 1510,
            "size": 50,
            "at": "l4:vietnamese",
            "color": "accent",
            "hl": [
              {
                "text": "tiếng Việt",
                "at": "l4:vietnamese"
              }
            ]
          },
          {
            "id": "g-h",
            "t": "text",
            "text": "Dành vài giờ cho cả buổi",
            "x": 2028,
            "y": 1590,
            "size": 46,
            "at": "l4:hours"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, Friday. The day that counts: the interview.",
          "sub": "Chặng năm, thứ Sáu. Ngày quan trọng nhất: buổi phỏng vấn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Immigrant interviews are held at the US Consulate General in Ho Chi Minh City, by appointment only.",
          "sub": "Phỏng vấn định cư diễn ra ở Tổng Lãnh sự quán Hoa Kỳ tại TP.HCM, chỉ theo lịch hẹn.",
          "keys": [
            "chỉ theo lịch hẹn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Register online at least five working days before. Otherwise, no entry.",
          "sub": "Phải đăng ký trực tuyến ít nhất 5 ngày làm việc trước, nếu không sẽ không được vào.",
          "keys": [
            "5 ngày làm việc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Good news for nervous English speakers: the interview is in Vietnamese. Plan a few hours.",
          "sub": "Tin vui cho người ngại tiếng Anh: phỏng vấn bằng tiếng Việt. Nên dành vài giờ cho cả buổi.",
          "keys": [
            "bằng tiếng Việt"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "online",
        "label": "Thứ Sáu · thư NVC để đó",
        "actors": [
          {
            "id": "lan",
            "side": "center",
            "pose": "shrug"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Thư NVC để đó, chuyển nhà chưa báo",
          "why": "Phải hành động trong một năm kể từ thông báo, nếu không đơn có thể bị tạm chấm dứt; đổi địa chỉ phải báo NVC.",
          "rule": "Thư nào cũng kèm việc cần làm"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Busy moving. The NVC letter can wait. My new address too.",
          "sub": "Bận dọn nhà. Thư NVC để sau, địa chỉ mới cũng thế.",
          "pose": "shrug",
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
          "say": "Act within one year of the notice, or the petition may be terminated.",
          "sub": "Phải làm trong một năm kể từ thông báo của NVC hay Lãnh sự quán, nếu không đơn có thể bị chấm dứt.",
          "keys": [
            "trong một năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And send the new address through NVC's Public Inquiry Form.",
          "sub": "Địa chỉ mới thì báo NVC qua Public Inquiry Form.",
          "keys": [
            "Public Inquiry Form"
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
          "who": "lan",
          "say": "Letter answered tonight. New address sent.",
          "sub": "Tối nay trả lời thư, gửi luôn địa chỉ mới.",
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
      "ref": "p13"
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
          }
        ],
        "items": [
          {
            "id": "g-1y",
            "t": "text",
            "text": "Quá 1 năm: có thể chấm dứt",
            "x": 2028,
            "y": 1670,
            "size": 44,
            "at": "l1:letter",
            "color": "coral"
          },
          {
            "id": "g-take",
            "t": "text",
            "text": "Thư nào cũng kèm việc cần làm",
            "x": 2028,
            "y": 1740,
            "size": 52,
            "at": "l1:task",
            "color": "accent",
            "hl": [
              {
                "text": "việc cần làm",
                "at": "l1:task"
              }
            ]
          },
          {
            "id": "g-nx",
            "t": "text",
            "text": "Giấy tờ mang theo → bài phỏng vấn",
            "x": 2968,
            "y": 1790,
            "size": 34,
            "at": "l2:interview lesson",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Every NVC letter comes with a task. Answer on time, and keep your contact details fresh.",
          "sub": "Thư nào của NVC cũng kèm việc cần làm. Trả lời đúng hạn, giữ thông tin liên lạc luôn mới.",
          "keys": [
            "kèm việc cần làm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Originals to bring, who may come in, how to answer? That's in the interview lesson.",
          "sub": "Bản gốc cần mang, ai được vào cùng, trả lời ra sao? Có trong bài phỏng vấn."
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
            "at": "l5",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Bảy · “Bao đậu”?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:saturday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4",
                  "pose": "think"
                }
              ],
              "props": [
                "mobile-phone",
                "money-with-wings"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
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
            "at": "l1:saturday",
            "caption": "Thứ Bảy · quán cơm",
            "icon": "mobile-phone"
          },
          {
            "id": "h-msg",
            "t": "text",
            "text": "“Chạy lịch phỏng vấn sớm”",
            "x": 3996,
            "y": 1250,
            "size": 48,
            "at": "l2:early",
            "color": "coral"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "A: trả tiền dịch vụ",
            "x": 3996,
            "y": 1350,
            "size": 50,
            "at": "l3:pay",
            "color": "muted"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: tự đọc hướng dẫn NVC",
            "x": 3996,
            "y": 1430,
            "size": 50,
            "at": "l3:read",
            "color": "accent"
          },
          {
            "id": "h-b2",
            "t": "text",
            "text": "nhờ người nhà kiểm lại giấy tờ",
            "x": 3996,
            "y": 1500,
            "size": 30,
            "at": "l3:family",
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
          "say": "Stop six, Saturday. A message pops up on Ms Hoa's phone.",
          "sub": "Chặng sáu, thứ Bảy. Điện thoại cô Hoa ting một tin nhắn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "A friend's contact can get me an early interview! Years of waiting, over!",
          "sub": "Người quen giới thiệu dịch vụ “chạy” lịch phỏng vấn sớm! Chờ mấy năm, nay xong!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two choices. A: pay the service. B: read NVC's guide yourself, and ask family to double-check the papers.",
          "sub": "Hai lựa chọn. A: trả tiền cho dịch vụ. B: tự đọc hướng dẫn của NVC, nhờ người nhà kiểm lại giấy tờ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Uncle Bình, a neighbour and regular here, puts down his tea.",
          "sub": "Bác Bình, hàng xóm, khách quen của quán, đặt ly trà xuống."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. Let's check that again.",
          "sub": "Từ từ, mình xem lại đã.",
          "pose": "point"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s17",
      "module": "BRK-10",
      "data": {
        "quote": "Công ty tư vấn không thể làm tăng cơ hội của bạn",
        "mark": "không thể làm tăng",
        "by": "Cảnh báo của Bộ Ngoại giao Mỹ",
        "illus": "warning"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Consultants cannot improve your chances.",
          "sub": "Công ty tư vấn không thể làm tăng cơ hội của bạn.",
          "keys": [
            "không thể làm tăng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The US State Department's fraud warning.",
          "sub": "Cảnh báo của Bộ Ngoại giao Mỹ."
        }
      ],
      "ref": "p16"
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
            "at": "l2",
            "fit": [
              "h-take"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "H",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "h-ax",
            "t": "strike",
            "over": "h-a",
            "at": "l1:never reaches"
          },
          {
            "id": "h-gov",
            "t": "text",
            "text": "Tiền đưa bên ngoài ≠ tiền cho chính phủ Mỹ",
            "x": 3996,
            "y": 1580,
            "size": 30,
            "at": "l1:non-government",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "h-take",
            "t": "text",
            "text": "Không ai mua được chỗ xếp hàng",
            "x": 3996,
            "y": 1650,
            "size": 50,
            "at": "l2:buy",
            "color": "accent",
            "hl": [
              {
                "text": "mua được chỗ",
                "at": "l2:buy a place"
              }
            ]
          },
          {
            "id": "h-fee",
            "t": "text",
            "text": "Lệ phí: chỉ qua kênh chính thức",
            "x": 3996,
            "y": 1740,
            "size": 48,
            "at": "l3:official",
            "hl": [
              {
                "text": "kênh chính thức",
                "at": "l3:official"
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
          "say": "And money paid to a non-government source never reaches the US government.",
          "sub": "Và tiền trả cho bên không phải chính phủ không đến được chính phủ Mỹ.",
          "keys": [
            "không đến được chính phủ Mỹ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Nobody can buy a place on the visa bulletin. It's a queue that sells no tickets.",
          "sub": "Không ai mua được chỗ trên lịch chiếu khán. Hàng này không bán vé chen.",
          "keys": [
            "Không ai mua được chỗ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fees go only through the official channels in your instructions. Ms Hoa picks B.",
          "sub": "Lệ phí chỉ nộp qua kênh chính thức ghi trong hướng dẫn. Cô Hoa chọn B.",
          "keys": [
            "kênh chính thức"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fake letters, fake websites? The scam lesson closes the series.",
          "sub": "Thư giả, trang web giả? Bài về lừa đảo ở cuối chuỗi."
        }
      ],
      "ref": "p17,p18"
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
          },
          {
            "at": "l5",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Chủ nhật · Dán lộ trình",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:sunday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "point",
                  "face": "happy"
                }
              ],
              "props": [
                "pushpin",
                "laptop"
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
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                }
              ]
            },
            "at": "l1:sunday",
            "caption": "Chủ nhật · phòng khách",
            "icon": "pushpin"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "1 · Đọc lịch chiếu khán",
            "x": 5964,
            "y": 1250,
            "size": 46,
            "at": "l3:bulletin"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "2 · Hồ sơ cho NVC",
            "x": 5964,
            "y": 1320,
            "size": 46,
            "at": "l3:nvc"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "3 · Khám sức khoẻ",
            "x": 5964,
            "y": 1390,
            "size": 46,
            "at": "l3:medical"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "4 · Phỏng vấn",
            "x": 5964,
            "y": 1460,
            "size": 46,
            "at": "l3:interview"
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "5 · Nhận ra lừa đảo",
            "x": 5964,
            "y": 1530,
            "size": 46,
            "at": "l3:scams",
            "color": "coral"
          },
          {
            "id": "i-w",
            "t": "text",
            "text": "Trước mỗi bước: mở lại",
            "x": 5964,
            "y": 1620,
            "size": 50,
            "at": "l4:before",
            "color": "accent",
            "hl": [
              {
                "text": "mở lại",
                "at": "l4:open"
              }
            ]
          },
          {
            "id": "i-ws",
            "t": "text",
            "text": "travel.state.gov · vn.usembassy.gov",
            "x": 5964,
            "y": 1680,
            "size": 30,
            "at": "l4:travel",
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
          "say": "Sunday. Ms Hoa pins the whole road on the fridge.",
          "sub": "Chủ nhật. Cô Hoa dán cả lộ trình lên tủ lạnh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "The series follows the order you'll meet things. Read it in order.",
          "sub": "Chuỗi bài đi đúng thứ tự mình sẽ gặp. Cứ đọc lần lượt.",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Visa bulletin, NVC documents, medical exam, interview, and finally, spotting scams.",
          "sub": "Lịch chiếu khán, hồ sơ NVC, khám sức khoẻ, phỏng vấn, và cuối cùng là nhận ra lừa đảo."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rules, forms, fees and clinics can change. Before each step, open travel.state.gov and the embassy site again.",
          "sub": "Quy trình, biểu mẫu, lệ phí, nơi khám có thể đổi. Trước mỗi bước, mở lại travel.state.gov và vn.usembassy.gov.",
          "keys": [
            "mở lại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Then I start with the bulletin. Where's my old notice?",
          "sub": "Vậy mẹ bắt đầu từ lịch chiếu khán. Tờ thông báo cũ của mẹ đâu rồi?",
          "face": "thinking"
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
            "text": "Thứ Hai tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "open-file-folder",
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
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:monday",
            "caption": "Thứ Hai tuần sau · phòng khách",
            "icon": "open-file-folder"
          },
          {
            "id": "j-env",
            "t": "illus",
            "name": "envelope",
            "x": 7932,
            "y": 1250,
            "size": 120,
            "at": "l1:envelopes"
          },
          {
            "id": "j-pd",
            "t": "text",
            "text": "Ngày ưu tiên: đã khoanh",
            "x": 8072,
            "y": 1270,
            "size": 48,
            "at": "l2:circled",
            "hl": [
              {
                "text": "đã khoanh",
                "at": "l2:circled"
              }
            ]
          },
          {
            "id": "j-r",
            "t": "ring",
            "around": [
              "j-pd"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l2:circled+300"
          },
          {
            "id": "j-l",
            "t": "text",
            "text": "Lan: đã trả lời NVC",
            "x": 7932,
            "y": 1420,
            "size": 48,
            "at": "l3:answered"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Đường dài, mà có bản đồ",
            "x": 7932,
            "y": 1560,
            "size": 52,
            "at": "l4:map",
            "color": "accent",
            "hl": [
              {
                "text": "có bản đồ",
                "at": "l4:map"
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
          "say": "Monday, one week later. The same envelopes, now inside a folder.",
          "sub": "Thứ Hai, một tuần sau. Vẫn những phong bì ấy, giờ nằm gọn trong bìa hồ sơ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "My priority date, circled. Next, I learn to read the bulletin.",
          "sub": "Ngày ưu tiên của mẹ, khoanh tròn rồi. Tiếp theo, mẹ học đọc lịch chiếu khán.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "And my NVC letter? Answered, address updated.",
          "sub": "Còn thư NVC của con? Trả lời rồi, địa chỉ cũng cập nhật rồi.",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A long road shows the good horse. This time, the horse has a map.",
          "sub": "Đường dài mới biết ngựa hay. Lần này, ngựa có cả bản đồ.",
          "keys": [
            "ngựa có cả bản đồ"
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
      "ref": "p2,p4"
    },
    {
      "id": "s21",
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
            "at": "l1:nvc",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:immediate",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:interview",
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
            "x": 5536,
            "y": 20,
            "at": "l1:nvc"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7504,
            "y": 20,
            "at": "l2:immediate"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3568,
            "y": 1110,
            "at": "l3:interview"
          },
          {
            "id": "z-src",
            "t": "text",
            "text": "Bài để tham khảo; quy trình, biểu mẫu, lệ phí có thể thay đổi, làm theo hướng dẫn chính thức của NVC và Tổng Lãnh sự quán Hoa Kỳ. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1780,
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
          "say": "So: once USCIS approves, the file goes to NVC.",
          "sub": "Tóm lại: USCIS duyệt xong, hồ sơ sang NVC.",
          "keys": [
            "hồ sơ sang NVC"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Immediate relatives continue right away. Preference cases wait for their priority date to be current.",
          "sub": "Thân nhân trực hệ làm tiếp ngay; diện ưu tiên chờ ngày ưu tiên đáo hạn.",
          "keys": [
            "chờ ngày ưu tiên đáo hạn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then fees, documents, the medical exam, and the interview in Ho Chi Minh City.",
          "sub": "Rồi đến lệ phí, giấy tờ, khám sức khoẻ và phỏng vấn tại TP.HCM."
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
        "q": "Can the visa center schedule an interview before the case becomes current?",
        "options": [
          "Yes, but only if a relative in America calls the consulate",
          "No, it cannot schedule an interview until the case is current",
          "Yes, it schedules anyone who sends a polite email asking for a date"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Trang Đại sứ quán nói NVC không thể xếp lịch khi hồ sơ chưa đáo hạn. Đơn được duyệt chưa có nghĩa là sắp phỏng vấn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Can the visa center schedule an interview before the case becomes current?",
          "sub": "NVC có xếp lịch phỏng vấn trước khi hồ sơ đáo hạn không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Remember the waiting room.",
          "sub": "Nhớ lại cái phòng chờ."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[10]"
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
          "say": "Right now: find the priority date on your approval notice.",
          "sub": "Việc làm ngay: tìm ngày ưu tiên trên thông báo chấp thuận.",
          "keys": [
            "tìm ngày ưu tiên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: reading the visa bulletin. Now, forty questions below!",
          "sub": "Bài sau: đọc lịch chiếu khán. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-23",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): phong bì thông báo chấp thuận USCIS của Lan → kéo ra thấy Lan (vợ công dân Mỹ, thân nhân trực hệ) và cô Hoa (F4, anh trai bảo lãnh, chờ nhiều năm); vật trở lại ở kết (phong bì trong bìa hồ sơ, ngày ưu tiên khoanh tròn). Dòng thời gian: MỘT TUẦN nhà cô Hoa (T2 hồ sơ đi đâu p1–p4 → T3 hai nhóm p5–p8 → T4 khi NVC gọi p9–p10 → T5 khám sức khoẻ p11 → T6 phỏng vấn TP.HCM p12, “Khoan đã!” Lan để thư NVC và chuyển nhà p13–p15 → T7 tin nhắn “bao đậu” A/B p16–p18 → CN dán lộ trình p19 → T2 tuần sau khép vòng). Đổi tên (w145/_series/family-sponsored-immigrants-to-us.md): chị Lan p13 → Lan; anh Hùng p16 (diện anh em) → cô Hoa; Bác Bình hàng xóm nhắc kiểm trang chính thức. Tục ngữ: “Đường dài mới biết ngựa hay” → “ngựa có cả bản đồ”. BRK: 04 (Sai/Đúng p6), 08 (các bước p9), 10 (trích cảnh báo Bộ Ngoại giao p16). Số/mốc chỉ lấy từ bài: I-130, 1 năm (p13), ≥ 5 ngày làm việc (p12), gói hướng dẫn 8/2026; không ghi lệ phí bằng số (bài không ghi). Câu đố questions[10].",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
