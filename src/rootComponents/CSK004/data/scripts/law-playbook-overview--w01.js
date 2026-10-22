// law-playbook-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "law-playbook-overview--w01",
  "unit": {
    "audience": "law-contract-playbook",
    "slug": "law-playbook-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Vì sao phòng pháp chế cần bộ mẫu và sổ tay rà hợp đồng?",
    "series": "Bộ mẫu và sổ tay rà hợp đồng — cho trưởng phòng pháp chế, cả đội rà như một người"
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
            "id": "a-p1",
            "t": "illus",
            "name": "page-facing-up",
            "x": 80,
            "y": 90,
            "size": 150,
            "at": "l1:service"
          },
          {
            "id": "a-p2",
            "t": "illus",
            "name": "page-facing-up",
            "x": 420,
            "y": 90,
            "size": 150,
            "at": "l1:twins"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Bản 1 · trần = giá trị HĐ",
            "x": 60,
            "y": 300,
            "size": 46,
            "at": "l3:One accepts"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "Bản 2 · bỏ hẳn trần",
            "x": 60,
            "y": 380,
            "size": 46,
            "at": "l3:other",
            "color": "coral",
            "hl": [
              {
                "text": "bỏ hẳn trần",
                "at": "l3:no cap"
              }
            ]
          },
          {
            "id": "a-w",
            "t": "text",
            "text": "Cùng tuần · cùng điều trách nhiệm",
            "x": 60,
            "y": 245,
            "size": 34,
            "at": "l2:Same week",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two service contracts. Almost twins.",
          "sub": "Hai hợp đồng dịch vụ. Giống nhau như hai giọt nước.",
          "keys": [
            "hai giọt nước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Same week, same liability clause. Two reviewers, two opposite comments.",
          "sub": "Cùng một tuần, cùng điều khoản trách nhiệm. Hai người rà, hai góp ý ngược nhau.",
          "keys": [
            "hai góp ý ngược nhau"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One accepts a cap equal to the contract value. The other wants no cap at all.",
          "sub": "Một người nhận trần bằng giá trị hợp đồng. Người kia đòi bỏ hẳn trần.",
          "keys": [
            "bỏ hẳn trần"
          ]
        }
      ],
      "beats": {
        "after": 400
      },
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
            "x": 940,
            "y": 120,
            "w": 720,
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
                  "id": "lan",
                  "side": "right",
                  "pose": "give",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai 9:00 · phòng pháp chế",
            "icon": "office-building"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Công ty muốn gì?",
            "x": 60,
            "y": 470,
            "size": 52,
            "at": "l3:really want",
            "color": "coral",
            "hl": [
              {
                "text": "muốn gì",
                "at": "l3:really want"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Trống đánh xuôi, kèn thổi ngược”",
            "x": 60,
            "y": 580,
            "size": 50,
            "at": "l6:drum",
            "color": "accent",
            "hl": [
              {
                "text": "kèn thổi ngược",
                "at": "l6:trumpet"
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
          "say": "Meet Thảo, newly appointed head of legal, with a team of four.",
          "sub": "Đây là Thảo, vừa lên trưởng phòng pháp chế, đội có bốn người.",
          "keys": [
            "trưởng phòng pháp chế"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Lan from sales, holding both contracts.",
          "sub": "Còn đây là Lan bên kinh doanh, tay cầm cả hai bản."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Thảo, which one is right? What does the company really want?",
          "sub": "Chị Thảo ơi, bản nào đúng? Rốt cuộc công ty muốn gì?",
          "face": "thinking",
          "pose": "give"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Well... today, I'd say keep a cap.",
          "sub": "Thì... hôm nay chị thấy nên giữ trần.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "No document to point at. Just a feeling, on a Monday.",
          "sub": "Không có văn bản nào để chỉ. Chỉ có cảm nhận, của một sáng thứ Hai.",
          "keys": [
            "cảm nhận"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Our elders have a saying: the drum beats one way, the trumpet blows the other.",
          "sub": "Ông bà gọi cảnh này là: “Trống đánh xuôi, kèn thổi ngược.”",
          "keys": [
            "Trống đánh xuôi, kèn thổi ngược"
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
      "ref": "p4"
    },
    {
      "id": "s01b",
      "module": "BRK-03",
      "data": {
        "value": 4,
        "suffix": " kiểu",
        "label": "góp ý cho một điều khoản trách nhiệm",
        "illus": "speaking-head"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A team of four people.",
          "sub": "Đội pháp chế bốn người."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Can mean four kinds of comments on one liability clause.",
          "sub": "Có thể ra bốn kiểu góp ý cho một điều khoản trách nhiệm.",
          "keys": [
            "bốn kiểu góp ý"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "text": "Vì sao cần bộ mẫu, sổ tay?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:legal team",
            "hl": [
              {
                "text": "bộ mẫu, sổ tay",
                "at": "l1:templates"
              }
            ]
          },
          {
            "id": "b-n",
            "t": "text",
            "text": "Đội kém nên cần mẫu",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:weak",
            "color": "muted"
          },
          {
            "id": "b-nx",
            "t": "strike",
            "over": "b-n",
            "at": "l2:excellent"
          },
          {
            "id": "b-m",
            "t": "text",
            "text": "Không bản nhạc = tiếng ồn",
            "x": 2028,
            "y": 260,
            "size": 46,
            "at": "l3:score",
            "color": "coral",
            "hl": [
              {
                "text": "tiếng ồn",
                "at": "l3:noise"
              }
            ]
          },
          {
            "id": "b-y",
            "t": "text",
            "text": "Cả đội rà như một người",
            "x": 2028,
            "y": 370,
            "size": 60,
            "at": "l4:one person",
            "color": "accent",
            "hl": [
              {
                "text": "như một người",
                "at": "l4:one person"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Tuần đầu làm trưởng phòng · 7 chặng",
            "x": 2028,
            "y": 500,
            "size": 46,
            "at": "l5:first week"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 580,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+300",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2260,
            "y": 580,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+520",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2492,
            "y": 580,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+740",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2724,
            "y": 580,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+960",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2956,
            "y": 580,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+1180",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3188,
            "y": 580,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+1400",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3420,
            "y": 580,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+1620",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 sáng",
            "x": 2044,
            "y": 602,
            "size": 36,
            "at": "l5:seven stops+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T2 chiều",
            "x": 2276,
            "y": 602,
            "size": 36,
            "at": "l5:seven stops+640"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T3 tối",
            "x": 2508,
            "y": 602,
            "size": 36,
            "at": "l5:seven stops+860"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Thứ Tư",
            "x": 2740,
            "y": 602,
            "size": 36,
            "at": "l5:seven stops+1080"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Thứ Năm",
            "x": 2972,
            "y": 602,
            "size": 36,
            "at": "l5:seven stops+1300"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T6 sáng",
            "x": 3204,
            "y": 602,
            "size": 36,
            "at": "l5:seven stops+1520"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T6 chiều",
            "x": 3436,
            "y": 602,
            "size": 36,
            "at": "l5:seven stops+1740"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So why does a legal team need templates and a review playbook?",
          "sub": "Vậy vì sao phòng pháp chế cần bộ mẫu và sổ tay rà hợp đồng?",
          "keys": [
            "bộ mẫu và sổ tay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not because the team is weak. Each person may be excellent.",
          "sub": "Không phải vì đội kém. Từng người có thể rất giỏi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But four good players without a score still make noise, not music.",
          "sub": "Nhưng bốn tay chơi giỏi mà không có bản nhạc thì vẫn ra tiếng ồn.",
          "keys": [
            "không có bản nhạc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The goal: the whole team reviews like one person.",
          "sub": "Mục tiêu: cả đội rà như một người.",
          "keys": [
            "cả đội rà như một người"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Follow Thảo's first week as head, in seven stops.",
          "sub": "Theo Thảo qua tuần đầu làm trưởng phòng, bảy chặng.",
          "keys": [
            "bảy chặng"
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
            "text": "① T2 9:30 · Mất thời gian",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4876,
            "y": 120,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "page-facing-up",
                "hourglass-not-done"
              ]
            },
            "at": "l1:Meet",
            "caption": "Thứ Hai 9:30 · bàn Dũng",
            "icon": "hourglass-not-done"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Trần bao nhiêu thì nhận?",
            "x": 3996,
            "y": 170,
            "size": 44,
            "at": "l2:cap"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Luật nước ngoài: chịu không?",
            "x": 3996,
            "y": 240,
            "size": 44,
            "at": "l2:Foreign"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Phạt chậm tính sao?",
            "x": 3996,
            "y": 310,
            "size": 44,
            "at": "l2:penalties"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Mỗi lần rà = nghĩ lại từ đầu",
            "x": 3996,
            "y": 410,
            "size": 50,
            "at": "l3:from zero",
            "color": "accent",
            "hl": [
              {
                "text": "nghĩ lại từ đầu",
                "at": "l3:from zero"
              }
            ]
          },
          {
            "id": "c-d",
            "t": "text",
            "text": "Đội đã trả lời hàng chục lần",
            "x": 3996,
            "y": 500,
            "size": 46,
            "at": "l4:dozens",
            "color": "coral",
            "hl": [
              {
                "text": "hàng chục lần",
                "at": "l4:dozens"
              }
            ]
          },
          {
            "id": "c-r",
            "t": "text",
            "text": "Nấu mãi, chưa chép công thức",
            "x": 3996,
            "y": 600,
            "size": 40,
            "at": "l5:recipe",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Monday, nine thirty. Meet Dũng, a senior specialist on Thảo's team.",
          "sub": "Chặng một: chín rưỡi sáng thứ Hai. Đây là Dũng, chuyên viên lâu năm trong đội Thảo.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "What cap can we accept? Foreign law, yes or no? And late penalties?",
          "sub": "Trần trách nhiệm bao nhiêu thì nhận? Luật nước ngoài có chịu không? Phạt chậm tính sao?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Loss number one: time. With no standard wording, every review starts from zero.",
          "sub": "Cái mất thứ nhất: thời gian. Không có câu chữ chuẩn, mỗi lần rà là nghĩ lại từ đầu.",
          "keys": [
            "thời gian"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fast or slow, everyone re-answers questions the team has answered dozens of times.",
          "sub": "Người giỏi nghĩ nhanh, người mới nghĩ chậm, nhưng đều trả lời lại câu đội đã trả lời hàng chục lần.",
          "keys": [
            "hàng chục lần"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Like cooking the same dish daily, and never writing down the recipe.",
          "sub": "Như ngày nào cũng nấu một món mà chưa bao giờ chép công thức.",
          "keys": [
            "chép công thức"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1800
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② T2 15:00 · Mất nhất quán",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6844,
            "y": 120,
            "w": 720,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "handshake"
              ]
            },
            "at": "l1:Lan",
            "caption": "Thứ Hai 15:00 · Lan quay lại",
            "icon": "handshake"
          },
          {
            "id": "d-q1",
            "t": "text",
            "text": "Quý trước: nhận",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l2:Last quarter"
          },
          {
            "id": "d-q2",
            "t": "text",
            "text": "Quý này: từ chối",
            "x": 5964,
            "y": 245,
            "size": 50,
            "at": "l2:refused",
            "color": "coral"
          },
          {
            "id": "d-e",
            "t": "text",
            "text": "→ gửi người rà dễ tính",
            "x": 5964,
            "y": 340,
            "size": 46,
            "at": "l3:easy",
            "color": "coral",
            "hl": [
              {
                "text": "dễ tính",
                "at": "l3:easy"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Kinh doanh tự sửa rồi mới gửi",
            "x": 5964,
            "y": 430,
            "size": 44,
            "at": "l4:edits",
            "color": "muted"
          },
          {
            "id": "d-p",
            "t": "text",
            "text": "Đối tác đòi lại điều từng nhượng",
            "x": 5964,
            "y": 530,
            "size": 46,
            "at": "l5:partners",
            "color": "accent",
            "hl": [
              {
                "text": "từng nhượng",
                "at": "l5:conceded"
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
          "say": "Second stop: Monday, three p.m. Lan is back.",
          "sub": "Chặng hai: ba giờ chiều thứ Hai. Lan quay lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Last quarter, this same partner got that cap. Why is it refused now?",
          "sub": "Quý trước đúng đối tác này được nhận mức trần đó. Sao giờ lại bị từ chối?",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Next time, I'll just send it to the easy reviewer.",
          "sub": "Lần sau em gửi người rà dễ tính cho nhanh.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Loss number two: consistency. Sales picks the softest reviewer, or edits contracts before sending.",
          "sub": "Cái mất thứ hai: nhất quán. Kinh doanh chọn người rà dễ tính, hoặc tự sửa rồi mới gửi.",
          "keys": [
            "nhất quán"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And partners notice. They come back for exactly what was once conceded.",
          "sub": "Đối tác cũng nhận ra, và quay lại đòi đúng điều từng được nhượng.",
          "keys": [
            "từng được nhượng"
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
            "text": "③ T3 tối · Mất giao việc",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8812,
            "y": 120,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "sad"
                }
              ],
              "props": [
                "page-facing-up",
                "books"
              ]
            },
            "at": "l1:Tuesday",
            "caption": "Thứ Ba 21:00 · nhà Thảo",
            "icon": "books"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Không chuẩn → đọc lại mọi bản",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:read everything"
          },
          {
            "id": "e-h",
            "t": "illus",
            "name": "hourglass-done",
            "x": 7932,
            "y": 250,
            "size": 100,
            "at": "l3:bottleneck"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Đội càng đông → nút thắt",
            "x": 8052,
            "y": 275,
            "size": 50,
            "at": "l3:bigger",
            "color": "coral",
            "hl": [
              {
                "text": "nút thắt",
                "at": "l3:bottleneck"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "“Hợp đồng nằm lâu ở pháp chế”",
            "x": 7932,
            "y": 400,
            "size": 42,
            "at": "l4:complains",
            "color": "muted"
          },
          {
            "id": "e-bx",
            "t": "box",
            "x": 7922,
            "y": 490,
            "w": 830,
            "h": 170,
            "at": "l5:heads",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Chuẩn chỉ trong đầu từng người",
            "x": 7947,
            "y": 505,
            "size": 44,
            "at": "l5:heads+200"
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "→ mỗi bản rà một quyết định mới",
            "x": 7947,
            "y": 580,
            "size": 44,
            "at": "l5:decision",
            "color": "accent",
            "hl": [
              {
                "text": "quyết định mới",
                "at": "l5:decision"
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
          "say": "Third stop: Tuesday night. Thảo rereads every review her team wrote.",
          "sub": "Chặng ba: tối thứ Ba. Thảo đọc lại mọi bản rà của cả đội."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "No standard to check against. So I read everything, again.",
          "sub": "Không có chuẩn để đối chiếu, nên chị đọc lại tất cả.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Loss number three: delegation. The bigger the team, the tighter the bottleneck.",
          "sub": "Cái mất thứ ba: khả năng giao việc. Đội càng đông, trưởng phòng càng thành nút thắt.",
          "keys": [
            "nút thắt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And sales complains that contracts sit in legal forever.",
          "sub": "Và kinh doanh than hợp đồng nằm lâu ở pháp chế."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "When the standard lives only in people's heads, every review is a brand new decision.",
          "sub": "Khi chuẩn chỉ nằm trong đầu từng người, mỗi bản rà là một quyết định mới.",
          "keys": [
            "một quyết định mới"
          ]
        }
      ],
      "ref": "p3,p5"
    },
    {
      "id": "s06",
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
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Tư · Ba thành phần",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 940,
            "y": 1210,
            "w": 720,
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
                "clipboard"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:meets",
            "caption": "Thứ Tư · phòng họp Ban giám đốc",
            "icon": "clipboard"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "1 · Bộ mẫu: muốn ký gì",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l5:templates",
            "color": "accent",
            "hl": [
              {
                "text": "Bộ mẫu",
                "at": "l5:templates"
              }
            ]
          },
          {
            "id": "f-1b",
            "t": "text",
            "text": "câu chữ duyệt sẵn",
            "x": 100,
            "y": 1330,
            "size": 34,
            "at": "l5:Approved",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Wednesday. Thảo meets Cô Hoa, her former boss, now on the board of management.",
          "sub": "Chặng bốn: thứ Tư. Thảo gặp Cô Hoa, sếp cũ, nay ở Ban giám đốc.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, I want legal to speak with one voice. What do you need?",
          "sub": "Thảo, cô muốn pháp chế nói một giọng. Em cần gì?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Three things. Templates, a playbook, and a process.",
          "sub": "Ba thứ ạ. Bộ mẫu, sổ tay, và quy trình.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Right. Let's do it!",
          "sub": "Rồi, vậy nha!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One: templates. Approved wording that says what the company wants to sign, before talks begin.",
          "sub": "Một: bộ mẫu. Câu chữ đã duyệt, cho biết công ty muốn ký gì trước khi đàm phán.",
          "keys": [
            "bộ mẫu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1500
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s07",
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
            "id": "f-56",
            "t": "text",
            "text": "NĐ 56/2024: nhiệm vụ pháp chế DNNN",
            "x": 60,
            "y": 1390,
            "size": 36,
            "at": "l1:Decree",
            "hl": [
              {
                "text": "NĐ 56/2024",
                "at": "l1:Decree"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "2 · Sổ tay: chuẩn · lùi · dừng",
            "x": 60,
            "y": 1470,
            "size": 46,
            "at": "l3:playbook",
            "color": "accent",
            "hl": [
              {
                "text": "Sổ tay",
                "at": "l3:playbook"
              }
            ]
          },
          {
            "id": "f-2b",
            "t": "text",
            "text": "kèm lý do bằng lời dễ hiểu",
            "x": 100,
            "y": 1540,
            "size": 34,
            "at": "l3:plain",
            "color": "muted"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "3 · Quy trình: ai duyệt, ghi đâu",
            "x": 60,
            "y": 1610,
            "size": 46,
            "at": "l4:process",
            "color": "accent",
            "hl": [
              {
                "text": "Quy trình",
                "at": "l4:process"
              }
            ]
          },
          {
            "id": "f-x",
            "t": "text",
            "text": "Thiếu nó → tài liệu đọc thêm",
            "x": 940,
            "y": 1740,
            "size": 40,
            "at": "l5:reading",
            "color": "coral",
            "hl": [
              {
                "text": "đọc thêm",
                "at": "l5:reading"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: NĐ 56/2024/NĐ-CP sửa NĐ 55/2011/NĐ-CP",
            "x": 60,
            "y": 1805,
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
          "say": "Decree fifty six of 2024 lists drafting contract templates as a task of legal units in state enterprises.",
          "sub": "Nghị định 56/2024 ghi “soạn thảo các loại mẫu hợp đồng” là nhiệm vụ của tổ chức pháp chế ở doanh nghiệp nhà nước.",
          "keys": [
            "soạn thảo các loại mẫu hợp đồng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Private firms aren't bound by it, but can borrow the idea.",
          "sub": "Doanh nghiệp tư không bị buộc, nhưng có thể học cách phân việc này."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: the playbook. Standard positions, pre approved fallbacks, walk away points, and plain reasons.",
          "sub": "Hai: sổ tay vị trí đàm phán. Vị trí chuẩn, vị trí lùi duyệt sẵn, ngưỡng dừng, và lý do dễ hiểu.",
          "keys": [
            "sổ tay vị trí đàm phán"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: the process. Who uses which template, who approves deviations, where decisions are logged.",
          "sub": "Ba: quy trình. Ai dùng mẫu nào, ai duyệt sai lệch, quyết định ghi ở đâu.",
          "keys": [
            "quy trình"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Without escalation rules, templates and playbooks are just reading material.",
          "sub": "Không có quy tắc chuyển cấp, mẫu và sổ tay chỉ là tài liệu đọc thêm, ai thích thì dùng.",
          "keys": [
            "tài liệu đọc thêm"
          ]
        }
      ],
      "ref": "p6,p7,p8"
    },
    {
      "id": "s08",
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
            "text": "⑤ Thứ Năm · Mẫu thay người rà?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-b0",
            "t": "box",
            "x": 2028,
            "y": 1260,
            "w": 380,
            "h": 90,
            "at": "l2:four+200",
            "stroke": 4
          },
          {
            "id": "g-b1",
            "t": "box",
            "x": 2438,
            "y": 1260,
            "w": 380,
            "h": 90,
            "at": "l2:four+450",
            "stroke": 4
          },
          {
            "id": "g-b2",
            "t": "box",
            "x": 2848,
            "y": 1260,
            "w": 380,
            "h": 90,
            "at": "l2:four+700",
            "stroke": 4
          },
          {
            "id": "g-b3",
            "t": "box",
            "x": 3258,
            "y": 1260,
            "w": 380,
            "h": 90,
            "at": "l2:four+950",
            "stroke": 4
          },
          {
            "id": "g-bt0",
            "t": "text",
            "text": "Bảo mật",
            "x": 2048,
            "y": 1280,
            "size": 38,
            "at": "l2:four+350"
          },
          {
            "id": "g-bt1",
            "t": "text",
            "text": "Chia sẻ dữ liệu",
            "x": 2458,
            "y": 1280,
            "size": 38,
            "at": "l2:four+600"
          },
          {
            "id": "g-bt2",
            "t": "text",
            "text": "Xử lý dữ liệu",
            "x": 2868,
            "y": 1280,
            "size": 38,
            "at": "l2:four+850"
          },
          {
            "id": "g-bt3",
            "t": "text",
            "text": "Khung dịch vụ",
            "x": 3278,
            "y": 1280,
            "size": 38,
            "at": "l2:four+1100"
          },
          {
            "id": "g-r",
            "t": "text",
            "text": "Có chuyên gia rà, nhưng:",
            "x": 2028,
            "y": 1400,
            "size": 44,
            "at": "l3:Experts"
          },
          {
            "id": "g-ref",
            "t": "text",
            "text": "điểm tham chiếu ≠ mẫu cố định",
            "x": 2028,
            "y": 1470,
            "size": 52,
            "at": "l3:reference",
            "color": "coral",
            "hl": [
              {
                "text": "điểm tham chiếu",
                "at": "l3:reference points"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Mẫu = điểm xuất phát chung",
            "x": 2028,
            "y": 1570,
            "size": 58,
            "at": "l4:starting",
            "color": "accent",
            "hl": [
              {
                "text": "điểm xuất phát chung",
                "at": "l4:starting line"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: thư viện chuẩn điều khoản của một hiệp hội quốc tế về hợp đồng",
            "x": 2028,
            "y": 1805,
            "size": 28,
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
          "say": "Fifth stop: Thursday. Can a template replace the reviewer?",
          "sub": "Chặng năm: thứ Năm. Mẫu có thay được người rà không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "An international contracting association built clause standards for four common agreement types.",
          "sub": "Một hiệp hội quốc tế về hợp đồng dựng chuẩn điều khoản cho bốn loại thoả thuận hay gặp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Experts reviewed them. Yet the association calls them reference points, not fixed templates.",
          "sub": "Có chuyên gia rà, nhưng họ nói rõ: đó là điểm tham chiếu, không phải mẫu cố định.",
          "keys": [
            "điểm tham chiếu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A good template doesn't replace the reviewer. It gives everyone a shared starting line.",
          "sub": "Mẫu tốt không thay người rà. Nó cho mọi người một điểm xuất phát chung.",
          "keys": [
            "điểm xuất phát chung"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Năm · bàn Dũng",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "thao",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Viết mẫu mơ hồ cho linh hoạt",
          "why": "Điều 404 BLDS 2015: nội dung bất lợi do bên soạn đưa vào được giải thích theo hướng có lợi cho bên kia.",
          "rule": "Viết kỹ một lần, dùng đúng trăm lần"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Our own template? Keep the wording loose. Flexible!",
          "sub": "Mẫu của mình mà, cứ viết rộng cho linh hoạt!",
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
          "say": "Article four oh four: unfavourable terms from the drafter are read for the other side.",
          "sub": "Điều 404 Bộ luật Dân sự: điều bất lợi do bên soạn đưa vào, giải thích có lợi cho bên kia.",
          "keys": [
            "có lợi cho bên kia"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And here, the drafter is us.",
          "sub": "Mà ở đây, bên soạn chính là mình."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Then I write it carefully, once. Vague words could turn against us.",
          "sub": "Vậy em viết kỹ một lần. Chữ mơ hồ có thể quay lại hại mình.",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p11"
    },
    {
      "id": "s10",
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
            "at": "l1",
            "fit": [
              "g-404",
              "g-w1",
              "g-w2"
            ],
            "zoom": 1.2,
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
            "id": "g-404",
            "t": "text",
            "text": "Điều 404 BLDS 2015",
            "x": 2908,
            "y": 1390,
            "size": 46,
            "at": "l1:carefully",
            "color": "coral"
          },
          {
            "id": "g-w1",
            "t": "text",
            "text": "Viết kỹ → đúng hàng trăm lần",
            "x": 2908,
            "y": 1470,
            "size": 40,
            "at": "l1:hundreds",
            "color": "accent",
            "hl": [
              {
                "text": "đúng hàng trăm lần",
                "at": "l1:right"
              }
            ]
          },
          {
            "id": "g-w2",
            "t": "text",
            "text": "Viết vội → sai hàng trăm lần",
            "x": 2908,
            "y": 1540,
            "size": 40,
            "at": "l2:hurry",
            "color": "coral"
          },
          {
            "id": "g-own",
            "t": "text",
            "text": "Câu chữ mẫu: việc trưởng phòng",
            "x": 2908,
            "y": 1650,
            "size": 40,
            "at": "l3:head",
            "hl": [
              {
                "text": "việc trưởng phòng",
                "at": "l3:belongs"
              }
            ]
          },
          {
            "id": "g-src2",
            "t": "text",
            "text": "Theo bài tổng hợp công khai về Điều 404 BLDS 2015",
            "x": 2908,
            "y": 1750,
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
          "say": "One line written carefully in a template is used right hundreds of times.",
          "sub": "Một câu viết kỹ một lần trong mẫu sẽ được dùng đúng hàng trăm lần.",
          "keys": [
            "hàng trăm lần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One line written in a hurry is repeated hundreds of times too.",
          "sub": "Một câu viết vội cũng bị lặp lại hàng trăm lần."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So wording quality belongs to the head, not to each person's taste.",
          "sub": "Nên chất lượng câu chữ là trách nhiệm của trưởng phòng, không để mỗi người tự sửa theo ý.",
          "keys": [
            "trách nhiệm của trưởng phòng"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s11",
      "module": "BRK-08",
      "data": {
        "title": "Lộ trình năm bài tiếp theo",
        "points": [
          {
            "label": "Chọn mẫu",
            "sub": "tần suất, rủi ro",
            "illus": "card-index-dividers"
          },
          {
            "label": "Viết sổ tay",
            "sub": "ba nấc mỗi điều",
            "illus": "notebook"
          },
          {
            "label": "Trao bớt việc",
            "sub": "mẫu rủi ro thấp",
            "illus": "handshake"
          },
          {
            "label": "Phê duyệt",
            "sub": "ma trận",
            "illus": "check-mark-button"
          },
          {
            "label": "Bảo trì",
            "sub": "luật thay đổi",
            "illus": "counterclockwise-arrows-button"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday morning, Thảo sketches the road ahead. Five stops, five lessons.",
          "sub": "Sáng thứ Sáu, Thảo phác con đường phía trước: năm chặng, năm bài.",
          "keys": [
            "năm chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Choose, write, delegate, approve, maintain.",
          "sub": "Chọn mẫu, viết sổ tay, trao bớt việc, phê duyệt, bảo trì."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p13,p14,p15"
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
            "at": "l1",
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
            "text": "⑥ T6 sáng · Lộ trình 5 chặng",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth stop"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4876,
            "y": 1210,
            "w": 720,
            "data": {
              "set": "office",
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
                "spiral-calendar"
              ]
            },
            "at": "l1",
            "caption": "Thứ Sáu 8:30 · kế hoạch một trang",
            "icon": "memo"
          },
          {
            "id": "h-0",
            "t": "text",
            "text": "1. Chọn mẫu: tần suất, rủi ro",
            "x": 3996,
            "y": 1260,
            "size": 38,
            "at": "l2:One"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "2. Sổ tay: 3 nấc, lý do",
            "x": 3996,
            "y": 1355,
            "size": 38,
            "at": "l3:Two",
            "color": "accent",
            "hl": [
              {
                "text": "3 nấc",
                "at": "l3:three levels"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "3. Rủi ro thấp: tự dùng",
            "x": 3996,
            "y": 1450,
            "size": 38,
            "at": "l4:Three"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "4. Phê duyệt: theo ma trận",
            "x": 3996,
            "y": 1545,
            "size": 38,
            "at": "l5:Four"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "5. Bảo trì: luật 2026",
            "x": 3996,
            "y": 1640,
            "size": 38,
            "at": "l6:Five"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Sixth stop, my plan on one page. Five steps, in this order.",
          "sub": "Chặng sáu, kế hoạch của chị trên một trang. Năm bước, theo thứ tự này.",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: choose templates by volume and risk, with version numbers and one owner each.",
          "sub": "Một: chọn mẫu theo tần suất và rủi ro, đánh số phiên bản, mỗi mẫu một người giữ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: write the playbook. Three levels per clause, a business reason, and who may concede.",
          "sub": "Hai: viết sổ tay, ba nấc cho mỗi điều khoản, kèm lý do kinh doanh và người được quyền nhượng.",
          "keys": [
            "ba nấc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: let sales use low risk templates, with locked forms, filling guides and random checks.",
          "sub": "Ba: để kinh doanh tự dùng mẫu rủi ro thấp, có mẫu khoá, hướng dẫn điền, kiểm tra ngẫu nhiên."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Four: an approval matrix, linking law and charter authority to internal limits and deviations.",
          "sub": "Bốn: ma trận phê duyệt, nối thẩm quyền theo luật và điều lệ với hạn mức nội bộ, mức sai lệch so với mẫu."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Five: maintenance, using this year's 2026 legal changes as examples.",
          "sub": "Năm: bảo trì, lấy chính các thay đổi năm 2026 làm ví dụ.",
          "keys": [
            "bảo trì"
          ]
        }
      ],
      "ref": "p13,p14,p15"
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
            "text": "⑦ T6 chiều · Bắt đầu từ đâu?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh stop"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6844,
            "y": 1210,
            "w": 720,
            "data": {
              "set": "office",
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
                  "pose": "explain"
                }
              ],
              "props": [
                "card-index-dividers"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "cut"
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
            "caption": "Thứ Sáu 15:00 · phòng pháp chế",
            "icon": "card-index-dividers"
          },
          {
            "id": "i-all",
            "t": "text",
            "text": "Làm hết mọi loại một lượt",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l2:Every",
            "color": "muted"
          },
          {
            "id": "i-allx",
            "t": "strike",
            "over": "i-all",
            "at": "l3:No"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "1–2 loại ký nhiều trước",
            "x": 5964,
            "y": 1340,
            "size": 40,
            "at": "l3:high volume",
            "color": "accent",
            "hl": [
              {
                "text": "1–2 loại ký nhiều",
                "at": "l3:high volume"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Bản sửa thật → điều hay sửa",
            "x": 5964,
            "y": 1425,
            "size": 40,
            "at": "l4:redlines",
            "hl": [
              {
                "text": "điều hay sửa",
                "at": "l4:changed most"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Dữ liệu của đội > người nói to",
            "x": 5964,
            "y": 1510,
            "size": 44,
            "at": "l5:loudest",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: Friday afternoon. The team is busy. Where to start?",
          "sub": "Chặng bảy: chiều thứ Sáu. Đội còn bận thì bắt đầu từ đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Ok, let's do it! Every contract type, all at once!",
          "sub": "Ok, làm luôn! Làm hết mọi loại hợp đồng một lượt!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "No. One or two high volume types first, like NDAs or service frameworks.",
          "sub": "Không. Một hai loại ký nhiều trước, như thoả thuận bảo mật hay hợp đồng khung dịch vụ.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then study real redlines and outcomes to find the clauses changed most.",
          "sub": "Rồi xem lại các bản đã sửa và kết quả đàm phán thật, tìm điều khoản hay bị sửa nhất.",
          "keys": [
            "hay bị sửa nhất"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Data from your own team, not the loudest voice in the meeting.",
          "sub": "Dựa trên dữ liệu của chính đội, không phải người nói to nhất trong cuộc họp.",
          "keys": [
            "người nói to nhất"
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
            "fit": "I",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "i-s",
            "t": "text",
            "text": "Tự phục vụ: rủi ro thấp",
            "x": 5964,
            "y": 1610,
            "size": 40,
            "at": "l1:self service",
            "hl": [
              {
                "text": "Tự phục vụ",
                "at": "l1:self service"
              }
            ]
          },
          {
            "id": "i-s2",
            "t": "text",
            "text": "Pháp chế dồn sức cho HĐ khó",
            "x": 5964,
            "y": 1690,
            "size": 44,
            "at": "l2:hard",
            "color": "accent",
            "hl": [
              {
                "text": "HĐ khó",
                "at": "l2:hard"
              }
            ]
          },
          {
            "id": "i-s3",
            "t": "text",
            "text": "Một mẫu tốt, bớt việc lặp",
            "x": 5964,
            "y": 1750,
            "size": 40,
            "at": "l3:common",
            "color": "accent"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: các hướng dẫn công khai về sổ tay hợp đồng, mô hình tự phục vụ",
            "x": 5964,
            "y": 1818,
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
          "say": "A self service model works the same way: low legal risk, high volume, stable terms.",
          "sub": "Một mô hình tự phục vụ cũng vậy: rủi ro pháp lý thấp, số lượng lớn, điều khoản ít biến động."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Those go self service, and legal saves its energy for the hard contracts.",
          "sub": "Loại đó cho tự phục vụ, còn pháp chế dồn sức cho hợp đồng khó.",
          "keys": [
            "dồn sức cho hợp đồng khó"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One good template for your most common contract already removes most of the repeat work.",
          "sub": "Một mẫu tốt cho loại ký nhiều nhất đã giảm được phần lớn việc lặp lại.",
          "keys": [
            "phần lớn việc lặp lại"
          ]
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s15",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "Soạn xong bộ mẫu là xong việc",
        "right": "Bộ mẫu là việc định kỳ, có người giữ",
        "wrongIllus": "party-popper",
        "rightIllus": "counterclockwise-arrows-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Templates done, job done?",
          "sub": "Soạn xong bộ mẫu là xong việc?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. Templates are recurring work, with an owner.",
          "sub": "Không. Bộ mẫu là việc định kỳ, có người giữ.",
          "keys": [
            "việc định kỳ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p18"
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
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Vì sao phải rà lại?",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Laws"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Luật, rủi ro, đối tác: đều đổi",
            "x": 7932,
            "y": 1260,
            "size": 40,
            "at": "l1:partners"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "1 năm không cập nhật → hại > lợi",
            "x": 7932,
            "y": 1340,
            "size": 44,
            "at": "l2:harm",
            "color": "coral",
            "hl": [
              {
                "text": "hại > lợi",
                "at": "l2:harm"
              }
            ]
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Rà theo quý · luật đổi → rà ngay",
            "x": 7932,
            "y": 1430,
            "size": 46,
            "at": "l3:quarter",
            "color": "accent",
            "hl": [
              {
                "text": "Rà theo quý",
                "at": "l3:quarter"
              }
            ]
          },
          {
            "id": "j-bx",
            "t": "box",
            "x": 7922,
            "y": 1530,
            "w": 840,
            "h": 120,
            "at": "l4:owner",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "j-k",
            "t": "text",
            "text": "Việc định kỳ, có chủ sở hữu",
            "x": 7947,
            "y": 1555,
            "size": 52,
            "at": "l4:owner+200",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Laws change, risk appetite changes, and partners learn new ways to ask.",
          "sub": "Luật thay đổi, khẩu vị rủi ro thay đổi, đối tác học được cách đòi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A playbook untouched for a year may do more harm than good.",
          "sub": "Sổ tay một năm không cập nhật có lẽ đang gây hại nhiều hơn có lợi.",
          "keys": [
            "gây hại nhiều hơn có lợi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So review it every quarter, and right away when the law changes.",
          "sub": "Nên rà lại theo quý, và rà ngay khi pháp luật thay đổi.",
          "keys": [
            "theo quý"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Recurring work with an owner, not a one time project.",
          "sub": "Việc định kỳ có chủ sở hữu, không phải dự án làm một lần.",
          "keys": [
            "không phải dự án làm một lần"
          ]
        }
      ],
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
            "fit": "J",
            "move": "cut"
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
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8812,
            "y": 1210,
            "w": 720,
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
                  "id": "lan",
                  "side": "right",
                  "pose": "give"
                }
              ],
              "props": [
                "page-facing-up",
                "memo"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
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
            "caption": "Thứ Hai tuần sau · 9:00",
            "icon": "office-building"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Trống, kèn: cùng một bản nhạc",
            "x": 7932,
            "y": 1700,
            "size": 46,
            "at": "l4:score",
            "color": "accent",
            "hl": [
              {
                "text": "cùng một bản nhạc",
                "at": "l4:same score"
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
          "say": "Next Monday. Nine a.m. Same desk, and Lan with a third contract.",
          "sub": "Thứ Hai tuần sau. Chín giờ sáng. Vẫn bàn ấy, Lan mang bản hợp đồng thứ ba."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Same question, Thảo. What does the company want?",
          "sub": "Vẫn câu hỏi cũ, chị ơi. Công ty muốn gì ạ?",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "This month the answer goes on paper: a first template, an owner, and a log of decisions.",
          "sub": "Tháng này câu trả lời sẽ nằm trên giấy: mẫu đầu tiên, người giữ mẫu, sổ ghi quyết định.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The drum and the trumpet, finally playing from the same score.",
          "sub": "“Trống đánh xuôi, kèn thổi ngược”? Lần này trống kèn cùng một bản nhạc.",
          "keys": [
            "cùng một bản nhạc"
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
      "ref": "p4,p19"
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
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "I",
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
            "x": 9432,
            "y": 40,
            "at": "l1:time"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1560,
            "y": 1130,
            "at": "l2:process"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 7464,
            "y": 1130,
            "at": "l3:Start"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "e-k2"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l1:consistency"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức nghề tham khảo, không phải tư vấn cho hợp đồng cụ thể. Nhân vật là minh hoạ; đối chiếu văn bản mới nhất.",
            "x": 2028,
            "y": 715,
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
          "say": "So: one person, one style costs time, consistency, and delegation. Every review becomes a new decision.",
          "sub": "Tóm lại: mỗi người một kiểu thì mất thời gian, mất nhất quán, mất giao việc. Bản rà nào cũng là quyết định mới.",
          "keys": [
            "mỗi người một kiểu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Templates, a playbook and a process fix those three.",
          "sub": "Bộ mẫu, sổ tay và quy trình gỡ ba cái mất đó.",
          "keys": [
            "Bộ mẫu, sổ tay và quy trình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Start small, with your most common contract, and give it an owner.",
          "sub": "Bắt đầu nhỏ, với loại hợp đồng ký nhiều nhất, và giao cho một người giữ.",
          "keys": [
            "Bắt đầu nhỏ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "General professional knowledge only, not advice on a specific contract. Check the latest texts.",
          "sub": "Kiến thức nghề tham khảo, không phải tư vấn cho hợp đồng cụ thể. Đối chiếu văn bản mới nhất."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next: which templates should you standardise first?",
          "sub": "Bài tiếp theo: chọn những mẫu hợp đồng nào để chuẩn hoá trước?"
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s19",
      "module": "QUIZ-01",
      "data": {
        "q": "Thao wants to stop each review from being a new decision, what must she do first?",
        "options": [
          "Write the team's positions down so that every reviewer applies the same standard",
          "Review every contract herself so that only one opinion is ever given to sales",
          "Tell the business team to stop asking questions about the liability cap"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "hourglass-done",
        "why": "Ghi vị trí của đội ra giấy để ai rà cũng theo một chuẩn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Thao wants to stop each review from being a new decision, what must she do first?",
          "sub": "Chị Thảo muốn mỗi bản rà không còn là một quyết định mới, trước hết phải làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Write the team's positions down so that every reviewer applies the same standard.",
          "sub": "Ghi vị trí của đội ra văn bản, để ai rà cũng theo cùng một chuẩn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "While the standard lives only in heads, each review is a new decision.",
          "sub": "Còn khi chuẩn chỉ nằm trong đầu từng người, mỗi bản rà là một quyết định mới."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[34]"
    },
    {
      "id": "s20",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Cả đội rà như một người"
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
  "hook": "HOOK-23",
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23: đồ vật — hai bản hợp đồng dịch vụ gần giống nhau, hai góp ý ngược nhau về trần trách nhiệm (p4). Đét đứng trái + bảng trắng 10 ô theo TUẦN ĐẦU Thảo làm trưởng phòng: T2 9:00 Lan mang hai bản (BRK-03 “4 kiểu góp ý”, intro) → T2 9:30 mất thời gian (p1, Dũng) → T2 15:00 mất nhất quán (p2, Lan) → T3 tối mất giao việc (p3, p5) → T4 Cô Hoa (Ban giám đốc), ba thành phần (p6–p8, NĐ 56/2024) → T5 điểm tham chiếu (p9, p10) + “Khoan đã!” Điều 404 BLDS (p11, p12) → T6 sáng BRK-08 lộ trình năm bài (p13–p15) → T6 chiều bắt đầu từ đâu (p16, p17) + BRK-04 hiểu lầm (p18, p19) → T2 tuần sau cùng bàn (khép vòng “Trống đánh xuôi, kèn thổi ngược”). Nhân vật: Thảo (chính), Lan (kinh doanh, đóng vai anh Tuấn p4), Dũng, Cô Hoa. Không nêu tên doanh nghiệp/tổ chức tư nhân có thật: Ironclad, TermScout → “hướng dẫn công khai”; WorldCC → “một hiệp hội quốc tế về hợp đồng”. Lưu ý chung #133 ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s17"
  }
};
