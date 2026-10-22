// career-change-after-35-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "career-change-after-35-overview--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "career-changers-over-35",
    "slug": "career-change-after-35-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Đổi nghề sau 35 tuổi nên đi qua những bước nào để khỏi liều?",
    "series": "Đổi nghề tuổi 35 mà không đánh cược cả nhà — cho người đi làm lâu năm muốn rẽ hướng"
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
              "a-obj"
            ],
            "move": "cut",
            "zoom": 1.6
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-obj",
            "t": "illus",
            "name": "page-facing-up",
            "x": 120,
            "y": 120,
            "size": 300,
            "at": 0
          },
          {
            "id": "a-t",
            "t": "text",
            "text": "Đơn xin nghỉ việc",
            "x": 470,
            "y": 150,
            "size": 64,
            "at": "l1:resignation",
            "hl": [
              {
                "text": "nghỉ việc",
                "at": "l1:letter"
              }
            ]
          },
          {
            "id": "a-sign",
            "t": "text",
            "text": "đã ký · chưa nộp",
            "x": 470,
            "y": 250,
            "size": 52,
            "at": "l1:signed",
            "color": "coral"
          },
          {
            "id": "a-ve",
            "t": "text",
            "text": "= vé một chiều, gập đôi",
            "x": 470,
            "y": 340,
            "size": 46,
            "at": "l2:ticket",
            "color": "muted"
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: chán thì nghỉ, tính sau?",
            "x": 60,
            "y": 470,
            "size": 48,
            "at": "l3:bored",
            "color": "muted"
          },
          {
            "id": "a-mythx",
            "t": "strike",
            "over": "a-myth",
            "at": "l3:later+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One sheet of paper: a resignation letter. Signed, but never handed in.",
          "sub": "Một tờ giấy: lá đơn xin nghỉ việc. Đã ký, nhưng chưa nộp.",
          "keys": [
            "lá đơn xin nghỉ việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It has waited in a drawer for weeks. A one-way ticket, folded in half.",
          "sub": "Nó nằm trong ngăn kéo mấy tuần rồi. Một tấm vé một chiều, gập làm đôi.",
          "keys": [
            "vé một chiều"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "We think: bored with your job? Quit first, figure it out later.",
          "sub": "Ta tưởng: chán nghề thì cứ nghỉ trước, tính sau.",
          "keys": [
            "nghỉ trước, tính sau"
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
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "crescent-moon"
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
            "at": "l1",
            "caption": "Tối Chủ nhật · tháng Một · ở nhà",
            "icon": "crescent-moon"
          },
          {
            "id": "a-lo",
            "t": "text",
            "text": "vay nhà · học phí con",
            "x": 900,
            "y": 650,
            "size": 46,
            "at": "l4:loan",
            "color": "coral",
            "hl": [
              {
                "text": "vay nhà",
                "at": "l4:loan"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Sông có khúc, người có lúc”",
            "x": 60,
            "y": 590,
            "size": 52,
            "at": "l5:rivers",
            "color": "accent",
            "hl": [
              {
                "text": "người có lúc",
                "at": "l5:people"
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
          "say": "Meet Thảo.",
          "sub": "Đây là Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thirty-seven, an accountant for twelve years. Two small kids, one home loan, zero free evenings.",
          "sub": "37 tuổi, kế toán mười hai năm. Hai con nhỏ, một khoản vay mua nhà, chẳng có buổi tối nào rảnh.",
          "keys": [
            "kế toán mười hai năm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I love teaching. Maybe I should just quit and open a maths class?",
          "sub": "Mình mê dạy học. Hay nghỉ quách, mở lớp kèm toán?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "But the home loan... and the kids' school fees...",
          "sub": "Nhưng còn khoản vay nhà... học phí của con...",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: rivers have bends, and people have their rough patches.",
          "sub": "Ông bà nói: “Sông có khúc, người có lúc.”",
          "keys": [
            "Sông có khúc, người có lúc"
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
      "ref": "intro,p9"
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
            "text": "Đổi nghề sau 35: đi bước nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:change",
            "hl": [
              {
                "text": "đi bước nào",
                "at": "l1:how"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Nghỉ trước, tính sau",
            "x": 2028,
            "y": 160,
            "size": 54,
            "at": "l2:quit first",
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
            "text": "Thử nhỏ trước, nghỉ sau",
            "x": 2668,
            "y": 160,
            "size": 58,
            "at": "l2:test small",
            "color": "accent",
            "hl": [
              {
                "text": "Thử nhỏ trước",
                "at": "l2:test small"
              }
            ]
          },
          {
            "id": "b-ok",
            "t": "text",
            "text": "khi dữ liệu “gật đầu”",
            "x": 2728,
            "y": 245,
            "size": 44,
            "at": "l2:data",
            "color": "muted"
          },
          {
            "id": "b-612",
            "t": "text",
            "text": "Chuyển trong 6–12 tháng, vẫn có lương",
            "x": 2028,
            "y": 340,
            "size": 50,
            "at": "l3:six",
            "hl": [
              {
                "text": "6–12 tháng",
                "at": "l3:twelve"
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
          "say": "So how do you change careers after thirty-five, without gambling your family's security?",
          "sub": "Vậy đổi nghề sau 35 tuổi thế nào để không đánh cược sự yên ổn của cả nhà?",
          "keys": [
            "không đánh cược"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not quit first, think later. But test small first, and quit only when the data says yes.",
          "sub": "Không phải nghỉ trước, tính sau. Mà là thử nhỏ trước, chỉ nghỉ khi dữ liệu gật đầu.",
          "keys": [
            "thử nhỏ trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The plan: a move in six to twelve months, while the salary keeps coming.",
          "sub": "Kế hoạch: chuyển trong sáu đến mười hai tháng, trong lúc lương vẫn về đều.",
          "keys": [
            "sáu đến mười hai tháng"
          ]
        }
      ],
      "ref": "intro,p17"
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
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 600,
            "w": 250,
            "h": 100,
            "at": "l1:know",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2303,
            "y": 600,
            "w": 250,
            "h": 100,
            "at": "l1:test",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2578,
            "y": 600,
            "w": 250,
            "h": 100,
            "at": "l1:three",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2853,
            "y": 600,
            "w": 250,
            "h": 100,
            "at": "l2:skills",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3128,
            "y": 600,
            "w": 250,
            "h": 100,
            "at": "l2:money",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3403,
            "y": 600,
            "w": 250,
            "h": 100,
            "at": "l2:family",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Hiểu mình",
            "x": 2048,
            "y": 618,
            "size": 40,
            "at": "l1:know+200"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Thử nghề",
            "x": 2323,
            "y": 618,
            "size": 40,
            "at": "l1:test+200"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "3 phương án",
            "x": 2598,
            "y": 618,
            "size": 40,
            "at": "l1:three+200"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Kỹ năng",
            "x": 2873,
            "y": 618,
            "size": 40,
            "at": "l2:skills+200"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Tiền bạc",
            "x": 3148,
            "y": 618,
            "size": 40,
            "at": "l2:money+200"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Người thân",
            "x": 3423,
            "y": 618,
            "size": 40,
            "at": "l2:family+200"
          },
          {
            "id": "b-6",
            "t": "text",
            "text": "6 chặng",
            "x": 2028,
            "y": 470,
            "size": 60,
            "at": "l1:Six",
            "hl": [
              {
                "text": "6 chặng",
                "at": "l1:Six"
              }
            ]
          },
          {
            "id": "b-da",
            "t": "text",
            "text": "“Dò đá qua sông”",
            "x": 2868,
            "y": 450,
            "size": 60,
            "at": "l3:stones",
            "color": "accent",
            "hl": [
              {
                "text": "Dò đá",
                "at": "l3:feeling"
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
          "say": "Six stages: know yourself, test the job, sketch three plans.",
          "sub": "Sáu chặng: hiểu mình, thử nghề, vẽ ba phương án.",
          "keys": [
            "Sáu chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Carry your old skills, plan the money, and bring your family along.",
          "sub": "Mang kỹ năng cũ theo, tính chuyện tiền, và rủ người thân cùng đi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Like crossing a river by feeling for stones. One stone, then the next.",
          "sub": "Kiểu “dò đá qua sông”: dò chắc một viên, rồi mới bước viên tiếp.",
          "keys": [
            "dò đá qua sông"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thảo's year, starting from that drawer.",
          "sub": "Một năm của Thảo, bắt đầu từ cái ngăn kéo ấy."
        }
      ],
      "ref": "intro,outro"
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
            "at": "l3",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "Tháng 1 · Vì sao chênh vênh?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:January",
            "hl": [
              {
                "text": "chênh vênh",
                "at": "l1:wobbly"
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
                  "face": "sad"
                }
              ],
              "props": [
                "bar-chart",
                "hot-beverage"
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
            "at": "l1:office",
            "caption": "Sáng thứ Hai · phòng kế toán",
            "icon": "bar-chart"
          },
          {
            "id": "c-age",
            "t": "text",
            "text": "33–40 tuổi",
            "x": 3996,
            "y": 150,
            "size": 84,
            "at": "l3:thirty-three",
            "color": "accent",
            "hl": [
              {
                "text": "33–40",
                "at": "l3:forty"
              }
            ]
          },
          {
            "id": "c-cr",
            "t": "text",
            "text": "khủng hoảng giữa sự nghiệp",
            "x": 3996,
            "y": 270,
            "size": 44,
            "at": "l3:crisis"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: CareerLink, 07/7/2026",
            "x": 3996,
            "y": 330,
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
          "say": "January, Monday morning at the office. Why does thirty-five feel so wobbly?",
          "sub": "Tháng Một, sáng thứ Hai ở công ty. Sao quanh tuổi 35 lại thấy chênh vênh?",
          "keys": [
            "chênh vênh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Twelve years of the same reports. My hands work, my brain sleeps.",
          "sub": "Mười hai năm vẫn những báo cáo ấy. Tay làm, đầu ngủ.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "CareerLink calls it a mid-career crisis, common between thirty-three and forty.",
          "sub": "CareerLink gọi đây là khủng hoảng giữa sự nghiệp, hay gặp ở khoảng 33 đến 40 tuổi.",
          "keys": [
            "khủng hoảng giữa sự nghiệp"
          ]
        }
      ],
      "ref": "p1"
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
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 390,
            "w": 44,
            "h": 44,
            "at": "l1:autopilot",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 376,
            "size": 44,
            "at": "l1:autopilot+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Làm theo quán tính",
            "x": 4062,
            "y": 380,
            "size": 38,
            "at": "l1:autopilot+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 448,
            "w": 44,
            "h": 44,
            "at": "l1:CV",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 434,
            "size": 44,
            "at": "l1:CV+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Ngại cập nhật hồ sơ",
            "x": 4062,
            "y": 438,
            "size": 38,
            "at": "l1:CV+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 506,
            "w": 44,
            "h": 44,
            "at": "l2:colleagues",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 492,
            "size": 44,
            "at": "l2:colleagues+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "So với đồng nghiệp cũ",
            "x": 4062,
            "y": 496,
            "size": 38,
            "at": "l2:colleagues+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 564,
            "w": 44,
            "h": 44,
            "at": "l2:dreading",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 550,
            "size": 44,
            "at": "l2:dreading+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Muốn nghỉ, sợ phỏng vấn lại",
            "x": 4062,
            "y": 554,
            "size": 38,
            "at": "l2:dreading+200"
          },
          {
            "id": "c-35",
            "t": "text",
            "text": "Ngoài 35: tin tuyển chuộng trẻ",
            "x": 3996,
            "y": 615,
            "size": 34,
            "at": "l3:prefer",
            "color": "muted"
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "> 6 tháng, mất ngủ → gặp chuyên gia",
            "x": 3996,
            "y": 680,
            "size": 40,
            "at": "l4:six months",
            "color": "coral",
            "hl": [
              {
                "text": "gặp chuyên gia",
                "at": "l4:psychologist"
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
          "say": "The signs are quiet: running on autopilot, learning nothing new, avoiding your own CV.",
          "sub": "Dấu hiệu thường âm ỉ: làm theo quán tính, không học thêm được gì, ngại cập nhật hồ sơ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Comparing yourself with promoted old colleagues. Wanting to quit, yet dreading interviews again.",
          "sub": "So mình với đồng nghiệp cũ đã thăng tiến. Vừa muốn nghỉ, vừa sợ đi phỏng vấn lại từ đầu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Why harder after thirty-five? Some job ads quietly prefer the young. Salaries are higher, family loads heavier.",
          "sub": "Sao ngoài 35 lại khó hơn? Nhiều tin tuyển dụng ngầm chuộng người trẻ. Lương đã cao, gánh nhà nặng hơn.",
          "keys": [
            "ngầm chuộng người trẻ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Stuck for over six months, losing sleep or focus? Talk to a psychologist or a career adviser.",
          "sub": "Bế tắc trên sáu tháng, ảnh hưởng giấc ngủ, công việc? Hãy gặp chuyên gia tâm lý hoặc chuyên viên hướng nghiệp.",
          "keys": [
            "chuyên gia tâm lý"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s06",
      "module": "BRK-09",
      "data": {
        "kind": "Nguồn",
        "title": "Ngân hàng Thế giới, 2019",
        "detail": "Sợ robot cướp hết việc? Phần lớn không có cơ sở",
        "illus": "robot",
        "around": [
          "globe-showing-asia-australia",
          "briefcase"
        ],
        "icon": "book-open"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Robots taking every job? The World Bank says: largely unfounded.",
          "sub": "Robot cướp hết việc? Ngân hàng Thế giới: phần lớn không có cơ sở.",
          "keys": [
            "không có cơ sở"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Technology creates new jobs too.",
          "sub": "Công nghệ cũng tạo ra việc mới."
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
            "text": "Tháng 1 · Nghỉ trước, tính sau?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:week",
            "hl": [
              {
                "text": "Nghỉ trước",
                "at": "l2:hand"
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up"
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
            "at": "l1:Dũng",
            "caption": "Cùng tuần · bàn ăn ở nhà",
            "icon": "page-facing-up"
          },
          {
            "id": "d-mai",
            "t": "text",
            "text": "Dũng: “Mai nộp luôn!”",
            "x": 5964,
            "y": 160,
            "size": 52,
            "at": "l2:tomorrow",
            "color": "coral"
          },
          {
            "id": "d-maix",
            "t": "strike",
            "over": "d-mai",
            "at": "l3:disagrees"
          },
          {
            "id": "d-an",
            "t": "text",
            "text": "Phân tích: nguyên nhân + phương án",
            "x": 5964,
            "y": 260,
            "size": 44,
            "at": "l3:analyse",
            "hl": [
              {
                "text": "nguyên nhân",
                "at": "l3:cause"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Mục tiêu 3 năm, không cả đời",
            "x": 5964,
            "y": 350,
            "size": 50,
            "at": "l4:three-year",
            "color": "accent",
            "hl": [
              {
                "text": "3 năm",
                "at": "l4:three-year"
              }
            ]
          },
          {
            "id": "d-fam",
            "t": "text",
            "text": "Có nhà, có nợ → quyết bằng số",
            "x": 5964,
            "y": 440,
            "size": 46,
            "at": "l5:emotion",
            "hl": [
              {
                "text": "quyết bằng số",
                "at": "l5:analysis"
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
          "say": "Same week, at home. Meet Dũng, Thảo's husband: buys first, reads the manual later.",
          "sub": "Cùng tuần ấy, ở nhà. Còn đây là Dũng, chồng Thảo: mua trước, đọc hướng dẫn sau.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Bored? Just hand it in tomorrow! Life is short!",
          "sub": "Chán thì mai nộp luôn! Đời có bao lâu!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "CareerLink disagrees: don't quit on a passing mood before you analyse the cause and the alternatives.",
          "sub": "CareerLink thì can: đừng nghỉ vì chán nhất thời khi chưa phân tích nguyên nhân và phương án thay thế.",
          "keys": [
            "chán nhất thời"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Aim for a three-year goal, not the rest of your life.",
          "sub": "Đặt mục tiêu ba năm, đừng nhìn cả quãng đời còn lại.",
          "keys": [
            "mục tiêu ba năm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "With a family and fixed costs, decide with analysis, not emotion.",
          "sub": "Có gia đình, có chi phí cố định thì rủi ro cao hơn: quyết bằng phân tích, đừng bằng cảm xúc.",
          "keys": [
            "phân tích"
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
      "ref": "p4"
    },
    {
      "id": "s08",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "Phải tìm ra đam mê rồi mới dám đổi nghề",
        "right": "Đam mê đến sau, nhờ thành thạo và gắn bó",
        "wrongIllus": "crystal-ball",
        "rightIllus": "seedling"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Find your passion first, then change?",
          "sub": "Phải tìm ra đam mê rồi mới dám đổi nghề?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. Passion usually comes after mastery.",
          "sub": "Không. Đam mê thường đến sau, nhờ thành thạo và gắn bó.",
          "keys": [
            "Đam mê thường đến sau"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
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
            "at": "l3",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-lives",
            "t": "text",
            "text": "Nhiều cuộc đời khả thi",
            "x": 5964,
            "y": 540,
            "size": 50,
            "at": "l1:many",
            "hl": [
              {
                "text": "Nhiều cuộc đời",
                "at": "l1:many possible"
              }
            ]
          },
          {
            "id": "d-step",
            "t": "text",
            "text": "Không chờ thật chắc → bước nhỏ",
            "x": 5964,
            "y": 630,
            "size": 50,
            "at": "l2:small steps",
            "color": "accent",
            "hl": [
              {
                "text": "bước nhỏ",
                "at": "l2:small steps"
              }
            ]
          },
          {
            "id": "d-back",
            "t": "text",
            "text": "Đơn: về lại ngăn kéo",
            "x": 5964,
            "y": 710,
            "size": 40,
            "at": "l3:drawer",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "That's Designing Your Life, from two Stanford teachers. We each have many possible lives, not one perfect plan.",
          "sub": "Đó là sách Designing Your Life của hai người dạy ở Stanford. Mỗi người có nhiều cuộc đời khả thi, không chỉ một kế hoạch hoàn hảo.",
          "keys": [
            "nhiều cuộc đời khả thi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So don't wait until you feel sure. Start with small steps, and learn more.",
          "sub": "Vậy đừng chờ thật chắc chắn mới bắt đầu. Hãy bắt đầu bằng những bước nhỏ để biết thêm.",
          "keys": [
            "những bước nhỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Small steps. Okay. The letter goes back in the drawer.",
          "sub": "Bước nhỏ. Được rồi. Lá đơn về lại ngăn kéo.",
          "face": "happy"
        }
      ],
      "ref": "p5,p6"
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
            "text": "Tháng 2 · Chặng 1: Hiểu mình",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:February",
            "hl": [
              {
                "text": "Hiểu mình",
                "at": "l1:know yourself"
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "notebook",
                "pen"
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
            "at": "l4",
            "caption": "Mỗi tối · cuốn nhật ký",
            "icon": "notebook"
          },
          {
            "id": "e-mit",
            "t": "text",
            "text": "MIT: 4 mảnh ghép",
            "x": 7932,
            "y": 150,
            "size": 52,
            "at": "l2:four",
            "hl": [
              {
                "text": "4 mảnh",
                "at": "l2:pieces"
              }
            ]
          },
          {
            "id": "e-f0",
            "t": "text",
            "text": "Giá trị",
            "x": 7932,
            "y": 240,
            "size": 48,
            "at": "l2:values",
            "color": "accent"
          },
          {
            "id": "e-g0",
            "t": "text",
            "text": "điều quan trọng",
            "x": 7932,
            "y": 300,
            "size": 32,
            "at": "l2:values+200",
            "color": "muted"
          },
          {
            "id": "e-f1",
            "t": "text",
            "text": "Sở thích",
            "x": 8332,
            "y": 240,
            "size": 48,
            "at": "l2:interests",
            "color": "accent"
          },
          {
            "id": "e-g1",
            "t": "text",
            "text": "điều yêu thích",
            "x": 8332,
            "y": 300,
            "size": 32,
            "at": "l2:interests+200",
            "color": "muted"
          },
          {
            "id": "e-f2",
            "t": "text",
            "text": "Tính cách",
            "x": 7932,
            "y": 360,
            "size": 48,
            "at": "l2:personality",
            "color": "accent"
          },
          {
            "id": "e-g2",
            "t": "text",
            "text": "điều tạo động lực",
            "x": 7932,
            "y": 420,
            "size": 32,
            "at": "l2:personality+200",
            "color": "muted"
          },
          {
            "id": "e-f3",
            "t": "text",
            "text": "Kỹ năng",
            "x": 8332,
            "y": 360,
            "size": 48,
            "at": "l2:skills",
            "color": "accent"
          },
          {
            "id": "e-g3",
            "t": "text",
            "text": "điều làm giỏi",
            "x": 8332,
            "y": 420,
            "size": 32,
            "at": "l2:skills+200",
            "color": "muted"
          },
          {
            "id": "e-log",
            "t": "text",
            "text": "Nhật ký: gắn bó + năng lượng",
            "x": 7932,
            "y": 520,
            "size": 46,
            "at": "l5:log",
            "hl": [
              {
                "text": "năng lượng",
                "at": "l4:energy"
              }
            ]
          },
          {
            "id": "e-next",
            "t": "text",
            "text": "→ bài “Biết mình thật sự muốn gì”",
            "x": 7932,
            "y": 600,
            "size": 38,
            "at": "l5:next",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "February. Stage one of the journey: know yourself.",
          "sub": "Tháng Hai. Chặng một của hành trình: hiểu mình.",
          "keys": [
            "hiểu mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "MIT's career centre splits it into four pieces: values, interests, personality and skills.",
          "sub": "Trung tâm hướng nghiệp MIT chia làm bốn mảnh: giá trị, sở thích, tính cách, kỹ năng.",
          "keys": [
            "bốn mảnh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Every night I list my tasks, and score my engagement and energy.",
          "sub": "Tối nào mình cũng ghi các việc trong ngày, chấm mức gắn bó và năng lượng.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That's the activity log from Designing Your Life. Our next video digs deeper.",
          "sub": "Đó là nhật ký hoạt động hằng ngày trong sách Designing Your Life. Bài tiếp theo đào sâu chặng này.",
          "keys": [
            "nhật ký hoạt động"
          ]
        }
      ],
      "ref": "p7"
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
            "at": "l4",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "Tháng 3–5 · Chặng 2: Thử nghề",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:March",
            "hl": [
              {
                "text": "Thử nghề",
                "at": "l1:test"
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
              "set": "campus",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "triangular-ruler",
                "books"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
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
            "at": "l3:Hoa",
            "caption": "Lớp dạy thêm đầu ngõ · tối thứ Ba",
            "icon": "triangular-ruler"
          },
          {
            "id": "f-bm",
            "t": "text",
            "text": "Làm bản mẫu:",
            "x": 60,
            "y": 1240,
            "size": 54,
            "at": "l2:prototyping",
            "hl": [
              {
                "text": "bản mẫu",
                "at": "l2:prototyping"
              }
            ]
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "• trò chuyện với người trong nghề",
            "x": 60,
            "y": 1320,
            "size": 40,
            "at": "l2:talk"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "• trải nghiệm thật",
            "x": 60,
            "y": 1380,
            "size": 40,
            "at": "l2:real"
          },
          {
            "id": "f-day",
            "t": "text",
            "text": "Hỏi “một ngày làm việc”",
            "x": 60,
            "y": 1470,
            "size": 46,
            "at": "l4:day",
            "color": "accent",
            "hl": [
              {
                "text": "một ngày",
                "at": "l4:day"
              }
            ]
          },
          {
            "id": "f-try",
            "t": "text",
            "text": "Dạy thử 2 tối/tuần, vài tháng",
            "x": 60,
            "y": 1560,
            "size": 46,
            "at": "l6:two evenings",
            "hl": [
              {
                "text": "Dạy thử",
                "at": "l6:trial"
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
          "say": "March to May. Stage two: test before you jump.",
          "sub": "Tháng Ba đến tháng Năm. Chặng hai: thử trước khi nhảy.",
          "keys": [
            "thử trước khi nhảy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The book calls it prototyping: talk to people in the job, then try real experience.",
          "sub": "Sách gọi là làm bản mẫu: trò chuyện với người đang làm nghề, rồi trải nghiệm thật.",
          "keys": [
            "làm bản mẫu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So Thảo visits Cô Hoa, the neighbour who has run a maths class for years.",
          "sub": "Thảo ghé cô Hoa, hàng xóm đầu ngõ, mở lớp dạy thêm toán đã nhiều năm.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Ask me about my whole day, not just the teaching part. That's where the surprises are.",
          "sub": "Hỏi cô về cả một ngày làm việc ấy, đừng chỉ hỏi chuyện đứng lớp. Bất ngờ nằm ở đó.",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Then Thảo takes trial classes, two evenings a week, for a few months.",
          "sub": "Rồi Thảo nhận dạy thử, hai buổi tối mỗi tuần, trong vài tháng.",
          "keys": [
            "dạy thử"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p8,p9"
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
          }
        ],
        "items": [
          {
            "id": "f-cl",
            "t": "text",
            "text": "Việc tự do, tình nguyện",
            "x": 60,
            "y": 1650,
            "size": 40,
            "at": "l1:freelance",
            "color": "muted"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Thử nhỏ: dữ liệu thật, rẻ",
            "x": 60,
            "y": 1730,
            "size": 50,
            "at": "l2:real data",
            "color": "accent",
            "hl": [
              {
                "text": "dữ liệu thật",
                "at": "l2:real data"
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
          "say": "CareerLink adds: freelance work, volunteer projects, or related tasks at your own company.",
          "sub": "CareerLink gợi ý thêm: nhận việc tự do, dự án tình nguyện, hoặc xin nhiệm vụ liên quan ngay ở công ty hiện tại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One small test gives you real data, far cheaper than one resignation letter.",
          "sub": "Một thử nghiệm nhỏ cho bạn dữ liệu thật, rẻ hơn nhiều so với một lá đơn nghỉ việc.",
          "keys": [
            "dữ liệu thật"
          ]
        }
      ],
      "ref": "p8,p10"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Thảo mê dạy thử rồi. Vậy nộp đơn được chưa?",
        "illus": "page-facing-up"
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
          "say": "Thảo loves her trial classes. So can she hand in that letter now?",
          "sub": "Thảo mê dạy thử rồi. Vậy nộp lá đơn được chưa?",
          "keys": [
            "nộp lá đơn"
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
            "at": 150,
            "fit": "G",
            "ms": 900
          },
          {
            "at": "l4",
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
            "text": "Tháng 6 · Chặng 3: Ba phương án",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:June",
            "hl": [
              {
                "text": "Ba phương án",
                "at": "l1:three"
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
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "notebook",
                "hot-beverage"
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
            "at": "l4",
            "caption": "Trưa thứ Bảy · quán cà phê",
            "icon": "notebook"
          },
          {
            "id": "g-p0",
            "t": "text",
            "text": "① Đường hiện tại",
            "x": 2028,
            "y": 1250,
            "size": 44,
            "at": "l2:One"
          },
          {
            "id": "g-q0",
            "t": "text",
            "text": "kế toán trưởng",
            "x": 2068,
            "y": 1305,
            "size": 36,
            "at": "l4:One",
            "color": "muted"
          },
          {
            "id": "g-p1",
            "t": "text",
            "text": "② Nếu đường cũ mất",
            "x": 2028,
            "y": 1365,
            "size": 44,
            "at": "l2:Two"
          },
          {
            "id": "g-q1",
            "t": "text",
            "text": "dạy kèm toán",
            "x": 2068,
            "y": 1420,
            "size": 36,
            "at": "l4:Two",
            "color": "muted"
          },
          {
            "id": "g-p2",
            "t": "text",
            "text": "③ Không lo tiền, hình ảnh",
            "x": 2028,
            "y": 1480,
            "size": 44,
            "at": "l3:Three"
          },
          {
            "id": "g-q2",
            "t": "text",
            "text": "tiệm sách + lớp",
            "x": 2068,
            "y": 1535,
            "size": 36,
            "at": "l4:Three",
            "color": "muted"
          },
          {
            "id": "g-sk",
            "t": "text",
            "text": "Bản phác, không phải bản vẽ cứng",
            "x": 2028,
            "y": 1610,
            "size": 44,
            "at": "l5:sketches",
            "color": "accent",
            "hl": [
              {
                "text": "Bản phác",
                "at": "l5:sketches"
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
          "say": "Not yet! June. Stage three: instead of betting on one choice, sketch three five-year plans.",
          "sub": "Chưa đâu! Tháng Sáu. Chặng ba: thay vì cược một lựa chọn, phác ba kế hoạch năm năm.",
          "keys": [
            "ba kế hoạch năm năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: your current road. Two: what you'd do if that road vanished.",
          "sub": "Một: tiếp tục con đường hiện tại. Hai: việc sẽ làm nếu con đường ấy biến mất."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: what you'd do if money and image didn't matter.",
          "sub": "Ba: việc sẽ làm nếu không phải bận tâm về tiền và hình ảnh."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "One: chief accountant. Two: maths tutor. Three: a little bookshop, with a class upstairs!",
          "sub": "Một: kế toán trưởng. Hai: dạy kèm toán. Ba: tiệm sách nhỏ, trên gác mở lớp!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "These are sketches to choose the next test, not rigid blueprints.",
          "sub": "Đó là bản phác để chọn điều cần thử tiếp, không phải bản thiết kế cứng.",
          "keys": [
            "bản phác"
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
          }
        ],
        "items": [
          {
            "id": "g-tr",
            "t": "text",
            "text": "Chặng 4: kỹ năng chuyển đổi",
            "x": 2028,
            "y": 1690,
            "size": 46,
            "at": "l1:transferable",
            "hl": [
              {
                "text": "chuyển đổi",
                "at": "l1:transferable"
              }
            ]
          },
          {
            "id": "g-tl",
            "t": "text",
            "text": "giao tiếp, nhóm, gỡ vấn đề",
            "x": 2028,
            "y": 1760,
            "size": 36,
            "at": "l2:communication",
            "color": "muted"
          },
          {
            "id": "g-kw",
            "t": "text",
            "text": "Chỉ ghi việc đã làm thật",
            "x": 2028,
            "y": 1810,
            "size": 38,
            "at": "l3:really",
            "color": "coral",
            "hl": [
              {
                "text": "đã làm thật",
                "at": "l3:really did"
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
          "say": "Stage four: which skills travel with you? CareerLink calls them transferable skills.",
          "sub": "Chặng bốn: kỹ năng nào mang theo được? CareerLink gọi là kỹ năng chuyển đổi.",
          "keys": [
            "kỹ năng chuyển đổi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Useful anywhere, so no restart from zero: communication, teamwork, problem solving, time management.",
          "sub": "Dùng được ở nhiều ngành, nên không phải học lại từ đầu: giao tiếp, làm việc nhóm, giải quyết vấn đề, quản lý thời gian."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Rewrite your old experience in the new job's keywords, but only for things you really did.",
          "sub": "Viết lại kinh nghiệm cũ bằng từ khoá của nghề mới, nhưng chỉ những việc mình thật sự đã làm.",
          "keys": [
            "thật sự đã làm"
          ]
        }
      ],
      "ref": "p12"
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
            "at": "l4",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "Tháng 7 · Chặng 5: Tiền",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:July",
            "hl": [
              {
                "text": "Tiền",
                "at": "l1:money"
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "laptop",
                "receipt"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l4",
            "caption": "Tối thứ Năm · bảng chi tiêu của nhà",
            "icon": "receipt"
          },
          {
            "id": "h-low",
            "t": "text",
            "text": "Lương đầu có thể thấp hơn",
            "x": 3996,
            "y": 1240,
            "size": 46,
            "at": "l2:less",
            "color": "coral"
          },
          {
            "id": "h-6",
            "t": "text",
            "text": "Quỹ ≥ 6 tháng sinh hoạt phí",
            "x": 3996,
            "y": 1315,
            "size": 50,
            "at": "l2:six months",
            "color": "accent",
            "hl": [
              {
                "text": "6 tháng",
                "at": "l2:six months"
              }
            ]
          },
          {
            "id": "h-cf",
            "t": "text",
            "text": "CFPB, 4 bước:",
            "x": 3996,
            "y": 1410,
            "size": 44,
            "at": "l3:four steps"
          },
          {
            "id": "h-c0",
            "t": "text",
            "text": "1. Liệt kê thu nhập",
            "x": 4016,
            "y": 1465,
            "size": 34,
            "at": "l3:income"
          },
          {
            "id": "h-c1",
            "t": "text",
            "text": "2. Theo dõi chi tiêu",
            "x": 4016,
            "y": 1513,
            "size": 34,
            "at": "l3:track"
          },
          {
            "id": "h-c2",
            "t": "text",
            "text": "3. Ghi lịch hoá đơn",
            "x": 4016,
            "y": 1561,
            "size": 34,
            "at": "l3:bills"
          },
          {
            "id": "h-c3",
            "t": "text",
            "text": "4. Ghép bảng ngân sách",
            "x": 4016,
            "y": 1609,
            "size": 34,
            "at": "l3:build"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "July. Stage five: money, usually the biggest worry.",
          "sub": "Tháng Bảy. Chặng năm: tiền, thường là nỗi lo lớn nhất.",
          "keys": [
            "nỗi lo lớn nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "CareerLink warns: you may earn less at first. Keep an emergency fund of at least six months' living costs.",
          "sub": "CareerLink nhắc: lúc đầu có thể nhận lương thấp hơn. Nên có quỹ dự phòng tối thiểu sáu tháng sinh hoạt phí.",
          "keys": [
            "sáu tháng sinh hoạt phí"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The US agency CFPB budgets in four steps: list income, track spending, map the bills, build the budget.",
          "sub": "Cơ quan CFPB của Hoa Kỳ lập ngân sách bốn bước: liệt kê thu nhập, theo dõi chi tiêu, ghi lịch hoá đơn, ghép thành ngân sách."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Our fund doesn't cover six months yet. Good thing that letter stayed in the drawer.",
          "sub": "Quỹ nhà mình chưa đủ sáu tháng. May mà lá đơn vẫn nằm trong ngăn kéo.",
          "face": "worried"
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s17",
      "module": "BRK-03",
      "data": {
        "value": 6,
        "suffix": " tháng",
        "label": "sinh hoạt phí: quỹ dự phòng tối thiểu trước khi quyết (CareerLink)",
        "illus": "ring-buoy"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Remember the lifebuoy number.",
          "sub": "Nhớ con số phao cứu sinh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Six months of living costs, saved before you decide.",
          "sub": "Sáu tháng sinh hoạt phí, gom đủ trước khi quyết.",
          "keys": [
            "Sáu tháng sinh hoạt phí"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p13"
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
          }
        ],
        "items": [
          {
            "id": "h-fam",
            "t": "text",
            "text": "Chặng 6: người thân",
            "x": 3996,
            "y": 1675,
            "size": 46,
            "at": "l1:family",
            "hl": [
              {
                "text": "người thân",
                "at": "l1:family"
              }
            ]
          },
          {
            "id": "h-team",
            "t": "text",
            "text": "Lập nhóm nhỏ người ủng hộ",
            "x": 3996,
            "y": 1740,
            "size": 36,
            "at": "l2:support team",
            "color": "muted"
          },
          {
            "id": "h-cfpb",
            "t": "text",
            "text": "CFPB: người cùng lập ngân sách",
            "x": 3996,
            "y": 1795,
            "size": 34,
            "at": "l2:budget"
          },
          {
            "id": "h-num",
            "t": "text",
            "text": "Số · mốc · điểm dừng",
            "x": 4996,
            "y": 1130,
            "size": 44,
            "at": "l3:numbers",
            "color": "accent",
            "hl": [
              {
                "text": "điểm dừng",
                "at": "l3:stop point"
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
          "say": "Stage six: family. The book says friends and family matter most when things get hard.",
          "sub": "Chặng sáu: người thân. Sách nhấn mạnh bạn bè, gia đình rất quan trọng lúc khó khăn.",
          "keys": [
            "người thân"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Build a small support team to review your tests. CFPB adds: someone to budget with.",
          "sub": "Lập nhóm nhỏ người ủng hộ để cùng xem lại các thử nghiệm. CFPB thêm: người cùng lập ngân sách, động viên lúc khó."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Family joins in more easily when they see numbers, dates, and a stop point. Dũng, though...",
          "sub": "Người thân dễ đồng hành hơn khi thấy con số, mốc thời gian, điểm dừng. Còn Dũng thì...",
          "keys": [
            "điểm dừng"
          ]
        }
      ],
      "ref": "p14,p16"
    },
    {
      "id": "s19",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Tối thứ Sáu · tháng Bảy",
        "actors": [
          {
            "id": "dung",
            "side": "left",
            "pose": "thumb"
          },
          {
            "id": "thao",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nộp đơn trước, nói với vợ sau",
          "why": "Người thân không biết nhà chịu rủi ro gì, cũng không biết đến lúc nào thì dừng.",
          "rule": "Cho người thân thấy con số, mốc và điểm dừng"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Next month I resign, then tell Thảo. Surprise!",
          "sub": "Tháng sau anh nộp đơn, xong mới nói với Thảo. Bất ngờ chưa!",
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
          "say": "Surprises are for birthdays, not budgets.",
          "sub": "Bất ngờ để dành cho sinh nhật, đừng cho ngân sách.",
          "keys": [
            "sinh nhật"
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
          "who": "dung",
          "say": "Thảo, let's check our spending sheet first. Evening classes, one small project.",
          "sub": "Thảo ơi, mình cùng xem bảng chi tiêu trước. Anh học thêm buổi tối, thử một dự án nhỏ.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Okay. A review date, and a stop point.",
          "sub": "Được. Hẹn ngày cùng xem lại, đặt luôn điểm dừng.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Slower. But now she knows the risk, and when to stop.",
          "sub": "Chậm hơn. Nhưng giờ chị biết nhà chịu rủi ro gì, và lúc nào thì dừng.",
          "phase": "redo",
          "keys": [
            "lúc nào thì dừng"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p15"
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
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Tháng 8 · Lộ trình trên tờ giấy",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:August",
            "hl": [
              {
                "text": "Lộ trình",
                "at": "l1:route"
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
              "set": "kitchen",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
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
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:sheet",
            "caption": "Tờ giấy dán tủ lạnh",
            "icon": "memo"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l2:log",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1246,
            "size": 50,
            "at": "l2:log+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Nhật ký công việc vài tuần",
            "x": 6030,
            "y": 1250,
            "size": 38,
            "at": "l2:log+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1324,
            "w": 44,
            "h": 44,
            "at": "l2:meet",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1310,
            "size": 50,
            "at": "l2:meet+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Gặp vài người đang dạy thêm",
            "x": 6030,
            "y": 1314,
            "size": 38,
            "at": "l2:meet+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1388,
            "w": 44,
            "h": 44,
            "at": "l3:trial",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1374,
            "size": 50,
            "at": "l3:trial+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Dạy thử buổi tối",
            "x": 6030,
            "y": 1378,
            "size": 38,
            "at": "l3:trial+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1452,
            "w": 44,
            "h": 44,
            "at": "l3:floor",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1438,
            "size": 50,
            "at": "l3:floor+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Chi phí sàn + số tháng quỹ",
            "x": 6030,
            "y": 1442,
            "size": 38,
            "at": "l3:floor+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1516,
            "w": 44,
            "h": 44,
            "at": "l4:sit",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1502,
            "size": 50,
            "at": "l4:sit+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Ngồi với Dũng, đặt mốc dừng",
            "x": 6030,
            "y": 1506,
            "size": 38,
            "at": "l4:sit+200"
          },
          {
            "id": "i-q",
            "t": "text",
            "text": "Mỗi bước: một câu hỏi",
            "x": 5964,
            "y": 1580,
            "size": 46,
            "at": "l5:question",
            "color": "accent",
            "hl": [
              {
                "text": "một câu hỏi",
                "at": "l5:question"
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
          "say": "August. Thảo writes the whole route on one sheet of paper.",
          "sub": "Tháng Tám. Thảo viết cả lộ trình lên một tờ giấy.",
          "keys": [
            "một tờ giấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One: log my work for a few weeks. Two: meet a few people who tutor.",
          "sub": "Một: ghi nhật ký công việc vài tuần. Hai: gặp vài người đang dạy thêm.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Three: trial evening classes. Four: our floor costs, and months of savings.",
          "sub": "Ba: dạy thử buổi tối. Bốn: tính chi phí sàn của nhà và số tháng quỹ đang có."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Five: sit with Dũng, review it all, and set our stop point.",
          "sub": "Năm: ngồi với anh Dũng xem lại mọi thứ, cùng đặt mốc dừng.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Each step has a question to answer, not just a task to tick.",
          "sub": "Mỗi bước có một câu hỏi cần trả lời, không chỉ là một việc phải làm.",
          "keys": [
            "một câu hỏi cần trả lời"
          ]
        }
      ],
      "ref": "p18"
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
          }
        ],
        "items": [
          {
            "id": "i-612",
            "t": "text",
            "text": "Thường 6–12 tháng",
            "x": 5964,
            "y": 1660,
            "size": 50,
            "at": "l1:six",
            "hl": [
              {
                "text": "6–12 tháng",
                "at": "l1:twelve"
              }
            ]
          },
          {
            "id": "i-ph",
            "t": "text",
            "text": "vừa đi làm, vừa thử",
            "x": 5964,
            "y": 1730,
            "size": 40,
            "at": "l2:still",
            "color": "muted"
          },
          {
            "id": "i-last",
            "t": "text",
            "text": "Đơn nghỉ: sau cùng",
            "x": 5964,
            "y": 1785,
            "size": 44,
            "at": "l4:letter",
            "color": "coral",
            "hl": [
              {
                "text": "sau cùng",
                "at": "l4:Only"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: CareerLink, CV ứng tuyển trái ngành (21/5/2026)",
            "x": 5964,
            "y": 1835,
            "size": 22,
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
          "say": "CareerLink concludes: a career switch usually takes six to twelve months.",
          "sub": "CareerLink kết luận: chuyển ngành thường cần sáu đến mười hai tháng.",
          "keys": [
            "sáu đến mười hai tháng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "First weeks: know yourself, sketch three plans. Middle months: test and learn, still at work.",
          "sub": "Vài tuần đầu: hiểu mình, phác ba phương án. Các tháng giữa: vừa đi làm vừa thử nghề, học thêm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Alongside: budget, build the fund, and talk with your family.",
          "sub": "Song song: lập ngân sách, gom quỹ dự phòng, nói chuyện với gia đình."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Only when the tests look good and the fund is full, do you think about the letter.",
          "sub": "Chỉ khi thử nghiệm cho tín hiệu tốt và quỹ đã đủ, mới tính đến chuyện nộp đơn.",
          "keys": [
            "quỹ đã đủ"
          ]
        }
      ],
      "ref": "p17"
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
            "text": "Tối Chủ nhật · tháng 12",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:December"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "bin",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "page-facing-up",
                "memo",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "bin",
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
            "at": "l1:drawer",
            "caption": "Vẫn ngăn kéo ấy",
            "icon": "crescent-moon"
          },
          {
            "id": "j-obj",
            "t": "illus",
            "name": "page-facing-up",
            "x": 7932,
            "y": 1250,
            "size": 130,
            "at": "l1:letter"
          },
          {
            "id": "j-o",
            "t": "text",
            "text": "Đơn: vẫn chưa nộp",
            "x": 8092,
            "y": 1270,
            "size": 50,
            "at": "l1:letter+300",
            "color": "muted"
          },
          {
            "id": "j-r",
            "t": "text",
            "text": "+ lộ trình nằm cạnh",
            "x": 8092,
            "y": 1350,
            "size": 50,
            "at": "l4:route",
            "color": "accent",
            "hl": [
              {
                "text": "lộ trình",
                "at": "l4:route"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Dò đá qua sông”",
            "x": 7932,
            "y": 1490,
            "size": 60,
            "at": "l5:stones",
            "color": "accent",
            "hl": [
              {
                "text": "Dò đá",
                "at": "l5:feeling"
              }
            ]
          },
          {
            "id": "j-k",
            "t": "text",
            "text": "Chuỗi thử nghiệm, không phải bước nhảy",
            "x": 7932,
            "y": 1610,
            "size": 42,
            "at": "l6:chain",
            "hl": [
              {
                "text": "không phải bước nhảy",
                "at": "l6:leap"
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
          "say": "Sunday night, December. Same drawer, same letter.",
          "sub": "Tối Chủ nhật, tháng Mười Hai. Vẫn ngăn kéo ấy, vẫn lá đơn ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Bé Bin, their son, nine years old and full of questions.",
          "sub": "Còn đây là Bé Bin, con trai lớn, chín tuổi, chuyên gia hỏi “Sao vậy ạ?”.",
          "keys": [
            "Bé Bin"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "bin",
          "say": "Mum, why is that paper still in the drawer?",
          "sub": "Mẹ ơi, sao tờ giấy đó vẫn nằm trong ngăn kéo ạ?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Because now it has a route beside it, and a review date with Dad.",
          "sub": "Vì giờ cạnh nó có lộ trình rồi con, và hẹn ngày cùng bố xem lại.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Cross the river by feeling for stones. Thảo's stones now have names.",
          "sub": "“Dò đá qua sông.” Giờ mỗi viên đá của Thảo đều có tên.",
          "keys": [
            "Dò đá qua sông"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A good route is a chain of tests with clear questions, not one leap.",
          "sub": "Lộ trình tốt là chuỗi thử nghiệm có câu hỏi rõ, không phải một bước nhảy.",
          "keys": [
            "không phải một bước nhảy"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p19,outro"
    },
    {
      "id": "s24",
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
            "at": "l4",
            "fit": "I",
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
            "x": 6684,
            "y": 340,
            "at": "l1+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 720,
            "y": 1730,
            "at": "l2+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4716,
            "y": 1315,
            "at": "l3+400"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 6524,
            "y": 1580,
            "at": "l4+400"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo; chuyện tiền bạc mỗi nhà một khác, cần thì hỏi chuyên gia. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 26,
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
          "say": "So: don't quit first.",
          "sub": "Tóm lại: đừng nghỉ trước.",
          "keys": [
            "đừng nghỉ trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Test small, and get real data.",
          "sub": "Thử nhỏ, lấy dữ liệu thật.",
          "keys": [
            "Thử nhỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Keep a six-month fund, and show your family the stop point.",
          "sub": "Giữ quỹ sáu tháng, cho người thân thấy điểm dừng.",
          "keys": [
            "quỹ sáu tháng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Write each step as a question.",
          "sub": "Mỗi bước viết thành một câu hỏi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next video: knowing what you really want.",
          "sub": "Bài sau: biết mình thật sự muốn gì."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p16,outro"
    },
    {
      "id": "s25",
      "module": "QUIZ-01",
      "data": {
        "q": "Your test results look weak and your fund is small, what does the roadmap suggest?",
        "options": [
          "Keep your job and continue testing until signals improve and savings are enough",
          "Resign anyway, since the roadmap says month twelve is always the exit",
          "Stop planning forever, since weak early results prove you cannot change"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "seedling",
        "why": "Giữ việc, thử tiếp tới khi tín hiệu tốt và quỹ đủ rồi mới tính nộp đơn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your test results look weak and your fund is small, what does the roadmap suggest?",
          "sub": "Kết quả thử nghiệm còn yếu và quỹ còn ít, lộ trình gợi ý gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Keep your job and keep testing, until the signals improve and the savings are enough.",
          "sub": "Giữ việc, thử tiếp, tới khi tín hiệu tốt hơn và quỹ đủ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "The letter always comes last.",
          "sub": "Lá đơn luôn đi sau cùng."
        }
      ],
      "ref": "questions[36]"
    },
    {
      "id": "s26",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi viết ra một câu hỏi lớn nhất về nghề mới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, write down your one biggest question about the new career.",
          "sub": "Tối nay, viết ra một câu hỏi lớn nhất của bạn về nghề mới."
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
  "notes": "#145 bài MỚI (bài tổng chuỗi career-changers-over-35) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): lá đơn nghỉ việc đã ký, chưa nộp, nằm trong ngăn kéo → kết lại đúng lá đơn ấy, nay có tờ lộ trình nằm cạnh. Dòng thời gian: MỘT NĂM của Thảo (tối CN tháng 1 → T1 công ty → T1 bàn bếp, Dũng “mai nộp luôn” → T2 hiểu mình → T3–5 dạy thử, cô Hoa → T6 ba phương án + kỹ năng → T7 tiền + người thân + “Khoan đã!” Dũng → T8 lộ trình trên tờ giấy → tối CN tháng 12). Nhân vật theo w145/_series/career-changers-over-35.md: Thảo (= chị Hạnh p9, p18, 37 tuổi, kế toán 12 năm), Dũng (chồng Thảo, gánh vai anh Tùng p15 cách A/B; mục tiêu riêng của Dũng là đào tạo nội bộ nên không nhắc “điều phối dự án”), Cô Hoa (người đang mở lớp, p9), Bé Bin. Số chỉ từ bài: 33–40 tuổi, > 6 tháng, 2019, 3 năm, 3 kế hoạch 5 năm, ≥ 6 tháng sinh hoạt phí, 4 bước CFPB, 6–12 tháng. Ngắt nhịp: BRK-09 s06 (nguồn Ngân hàng Thế giới p3), BRK-04 s08 (hiểu lầm đam mê p5), BRK-07 s13 (rehook “nộp đơn được chưa?”), BRK-03 s17 (6 tháng p13), DLG-01 s19 (p15). Tục ngữ: “Sông có khúc, người có lúc” (mở) + “Dò đá qua sông” (khép vòng). Lưu ý chung (#133) ở cảnh tóm tắt. Câu đố questions[36].",
  "loop": {
    "open": "s01",
    "close": "s23"
  }
};
