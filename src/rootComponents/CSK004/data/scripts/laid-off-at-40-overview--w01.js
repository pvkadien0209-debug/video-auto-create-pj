// laid-off-at-40-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "laid-off-at-40-overview--w01",
  "unit": {
    "audience": "laid-off-at-40",
    "slug": "laid-off-at-40-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Vừa bị cắt giảm ở tuổi 40: làm gì trong ba mươi ngày đầu?",
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
              "a-obj"
            ],
            "move": "cut",
            "zoom": 1.6
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-obj",
            "t": "illus",
            "name": "page-facing-up",
            "x": 100,
            "y": 110,
            "size": 280,
            "at": 0
          },
          {
            "id": "a-t",
            "t": "text",
            "text": "Thông báo cắt giảm",
            "x": 420,
            "y": 140,
            "size": 64,
            "at": "l1:notice",
            "hl": [
              {
                "text": "cắt giảm",
                "at": "l1:layoff"
              }
            ]
          },
          {
            "id": "a-fold",
            "t": "text",
            "text": "gập đôi · còn ấm tay",
            "x": 420,
            "y": 240,
            "size": 48,
            "at": "l2:folded",
            "color": "muted"
          },
          {
            "id": "a-18",
            "t": "text",
            "text": "18 năm, gói trong 1 trang",
            "x": 420,
            "y": 330,
            "size": 52,
            "at": "l3:eighteen",
            "color": "coral",
            "hl": [
              {
                "text": "1 trang",
                "at": "l3:one page"
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
          "say": "One sheet of paper: a layoff notice.",
          "sub": "Một tờ giấy: thông báo cắt giảm.",
          "keys": [
            "thông báo cắt giảm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Folded in half, still warm from a nervous hand.",
          "sub": "Gập làm đôi, còn ấm hơi một bàn tay đang run."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Eighteen years of work, wrapped up in one page.",
          "sub": "Mười tám năm đi làm, gói gọn trong một trang.",
          "keys": [
            "Mười tám năm"
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
            "at": "l6",
            "fit": "A",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "a-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 920,
            "y": 130,
            "w": 720,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "sad"
                }
              ],
              "props": [
                "factory",
                "mobile-phone"
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
            "caption": "Ngày 1 · 9:00 · cổng nhà máy",
            "icon": "factory"
          },
          {
            "id": "a-sms",
            "t": "text",
            "text": "Thảo: “Trưa nay anh ăn gì?”",
            "x": 60,
            "y": 450,
            "size": 48,
            "at": "l4:lunch",
            "color": "accent",
            "hl": [
              {
                "text": "ăn gì",
                "at": "l4:lunch"
              }
            ]
          },
          {
            "id": "a-loan",
            "t": "text",
            "text": "Khoản vay nhà: vẫn đến hạn",
            "x": 60,
            "y": 540,
            "size": 44,
            "at": "l4:loan",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Ngã ở đâu, đứng dậy ở đó”",
            "x": 60,
            "y": 640,
            "size": 52,
            "at": "l6:fall",
            "color": "accent",
            "hl": [
              {
                "text": "đứng dậy",
                "at": "l6:stand up"
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
          "say": "Meet Dũng.",
          "sub": "Đây là Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Forty two, an accountant at a garment factory for eighteen years. This morning, his name was on the list.",
          "sub": "42 tuổi, kế toán nhà máy may mười tám năm. Sáng nay, tên anh nằm trong danh sách.",
          "keys": [
            "nằm trong danh sách"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "My head is empty. I don't even know where to walk.",
          "sub": "Đầu óc trống rỗng. Chẳng biết nên đi đâu nữa.",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "His phone buzzes. Thảo, his wife: what's for lunch? And the home loan is still due.",
          "sub": "Điện thoại rung. Thảo, vợ anh, hỏi trưa nay ăn gì. Còn khoản vay nhà vẫn đến hạn.",
          "keys": [
            "vẫn đến hạn"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: where you fall, there you stand up again.",
          "sub": "Ông bà dặn: “Ngã ở đâu, đứng dậy ở đó.”",
          "keys": [
            "Ngã ở đâu, đứng dậy ở đó"
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
            "text": "30 ngày đầu: làm gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:thirty",
            "hl": [
              {
                "text": "làm gì",
                "at": "l1:what"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Tìm ngay việc mới, bằng mọi giá",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:new job",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:Not"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Đứng vững, đi đúng hướng",
            "x": 2028,
            "y": 270,
            "size": 60,
            "at": "l3:stand firm",
            "color": "accent",
            "hl": [
              {
                "text": "Đứng vững",
                "at": "l3:stand firm"
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
          "say": "So, laid off at forty. What do you do in the first thirty days?",
          "sub": "Vậy bị cắt giảm ở tuổi 40, ba mươi ngày đầu nên làm gì?",
          "keys": [
            "ba mươi ngày đầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Most people think: grab a new job, any job, by next week.",
          "sub": "Nhiều người nghĩ: phải có việc mới ngay, việc gì cũng được, trong tuần tới."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not a job by Friday. Just stand firm, and start in the right direction.",
          "sub": "Không phải có việc trước thứ Sáu. Mà là đứng vững và bắt đầu đúng hướng.",
          "keys": [
            "đứng vững"
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
          }
        ],
        "items": [
          {
            "id": "b-5",
            "t": "text",
            "text": "5 chặng, theo thứ tự",
            "x": 2028,
            "y": 410,
            "size": 56,
            "at": "l1:Five",
            "hl": [
              {
                "text": "theo thứ tự",
                "at": "l1:in order"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 520,
            "w": 300,
            "h": 100,
            "at": "l1:papers",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2358,
            "y": 520,
            "w": 300,
            "h": 100,
            "at": "l1:family",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2688,
            "y": 520,
            "w": 300,
            "h": 100,
            "at": "l2:money",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 3018,
            "y": 520,
            "w": 300,
            "h": 100,
            "at": "l2:spirits",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3348,
            "y": 520,
            "w": 300,
            "h": 100,
            "at": "l2:search",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Giấy tờ",
            "x": 2058,
            "y": 540,
            "size": 44,
            "at": "l1:papers+200"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Gia đình",
            "x": 2388,
            "y": 540,
            "size": 44,
            "at": "l1:family+200"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Giữ tiền",
            "x": 2718,
            "y": 540,
            "size": 44,
            "at": "l2:money+200"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Tinh thần",
            "x": 3048,
            "y": 540,
            "size": 44,
            "at": "l2:spirits+200"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Tìm việc",
            "x": 3378,
            "y": 540,
            "size": 44,
            "at": "l2:search+200"
          },
          {
            "id": "b-bao",
            "t": "text",
            "text": "Bão cả thuyền, đâu lỗi người chèo",
            "x": 2028,
            "y": 670,
            "size": 40,
            "at": "l3:storm",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five stages, in order: papers and rights, then your family.",
          "sub": "Năm chặng, theo thứ tự: giấy tờ và quyền lợi, rồi gia đình.",
          "keys": [
            "Năm chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then your money, your spirits, and finally the job search.",
          "sub": "Rồi giữ tiền, giữ tinh thần, cuối cùng mới tìm việc lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Dũng's first thirty days. Calm down, this storm hit the whole boat.",
          "sub": "Cùng theo Dũng qua ba mươi ngày đầu. Bình tĩnh, cơn bão này đánh vào cả con thuyền."
        }
      ],
      "ref": "intro"
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
            "text": "① Ngày 1 · Vì sao nặng?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first stop"
          },
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
                  "face": "worried"
                }
              ],
              "props": [
                "hot-beverage",
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
            "at": "l1:cafe",
            "caption": "Ngày 1 · trưa · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Mất: thu nhập",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l3:income",
            "color": "coral"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "+ danh xưng, nhịp ngày",
            "x": 3996,
            "y": 245,
            "size": 44,
            "at": "l3:identity"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "+ đồng nghiệp, tự trọng",
            "x": 3996,
            "y": 315,
            "size": 44,
            "at": "l4:colleagues"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "+ cảm giác an toàn",
            "x": 3996,
            "y": 385,
            "size": 44,
            "at": "l4:safe"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: HelpGuide — Job Loss and Unemployment Stress",
            "x": 3996,
            "y": 460,
            "size": 26,
            "at": "l3",
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
          "say": "First stop: day one, noon, a corner cafe. Dũng hasn't told anyone yet.",
          "sub": "Chặng một: ngày đầu, buổi trưa, quán cà phê đầu ngõ. Dũng chưa kể với ai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Eighteen years. It feels like I lost much more than a salary.",
          "sub": "Mười tám năm. Sao thấy mất nhiều thứ hơn cái lương.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "He's right. HelpGuide says you lose income, plus your work identity and daily routine.",
          "sub": "Đúng vậy. HelpGuide nói ta mất thu nhập, mất cả danh xưng nghề nghiệp, nhịp sinh hoạt.",
          "keys": [
            "danh xưng nghề nghiệp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Colleagues, self esteem, and the feeling that your family is safe. All at once.",
          "sub": "Mất đồng nghiệp, lòng tự trọng, cảm giác gia đình an toàn. Cùng một lúc.",
          "keys": [
            "Cùng một lúc"
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-ad",
            "t": "text",
            "text": "Tin tuyển: chỉ 18–35 tuổi",
            "x": 3996,
            "y": 540,
            "size": 46,
            "at": "l1:eighteen",
            "color": "coral",
            "hl": [
              {
                "text": "18–35",
                "at": "l1:thirty five"
              }
            ]
          },
          {
            "id": "c-vov",
            "t": "text",
            "text": "Hơn 40: thấy kém cạnh tranh",
            "x": 3996,
            "y": 610,
            "size": 40,
            "at": "l2:forty"
          },
          {
            "id": "c-vov2",
            "t": "text",
            "text": "Gần 50: ngại ca đêm",
            "x": 3996,
            "y": 670,
            "size": 40,
            "at": "l2:fifty"
          },
          {
            "id": "c-src2",
            "t": "text",
            "text": "Nguồn: Sài Gòn Giải Phóng (29/02/2020); VOV (22/9/2023)",
            "x": 3996,
            "y": 732,
            "size": 26,
            "at": "l1",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-plan",
            "t": "text",
            "text": "Biết khó để lập kế hoạch",
            "x": 4856,
            "y": 665,
            "size": 40,
            "at": "l4:plan",
            "color": "accent",
            "hl": [
              {
                "text": "lập kế hoạch",
                "at": "l4:plan"
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
          "say": "And the market? Saigon Giải Phóng found many job ads only took people aged eighteen to thirty five.",
          "sub": "Còn thị trường? Báo Sài Gòn Giải Phóng thấy nhiều tin tuyển chỉ nhận người 18 đến 35 tuổi.",
          "keys": [
            "18 đến 35 tuổi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In a VOV story, a man over forty felt less competitive. One near fifty dreaded night shifts.",
          "sub": "Trong bài của VOV, người hơn 40 thấy mình kém cạnh tranh, người gần 50 ngại ca đêm, tăng ca dài."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "So it's harder for people like me. Great.",
          "sub": "Vậy là người như mình khó hơn. Hay thật.",
          "face": "sad",
          "pose": "shrug"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Knowing it's hard is for making a plan, not for giving up.",
          "sub": "Biết trước khó khăn là để lập kế hoạch, không phải để nản.",
          "keys": [
            "để lập kế hoạch"
          ]
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s06",
      "module": "BRK-04",
      "data": {
        "title": "Bị cắt giảm nghĩa là…",
        "wrong": "Mình làm kém nên bị loại",
        "right": "Chuyện của doanh nghiệp, không phải bản án",
        "wrongIllus": "pensive-face",
        "rightIllus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "They cut me. I'm not good enough.",
          "sub": "Họ cắt mình. Mình làm kém.",
          "face": "sad",
          "keys": [
            "Mình làm kém"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. It's the company's story, not a verdict on you.",
          "sub": "Không. Đó là chuyện doanh nghiệp, không phải bản án cho bạn.",
          "keys": [
            "không phải bản án"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p3,p4"
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
            "id": "c-ev",
            "t": "text",
            "text": "Tự trách? Tìm bằng chứng ngược",
            "x": 4856,
            "y": 722,
            "size": 34,
            "at": "l1:evidence",
            "hl": [
              {
                "text": "bằng chứng ngược",
                "at": "l1:opposite"
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
          "say": "HelpGuide's advice: challenge that self blame, and look for evidence of the opposite.",
          "sub": "HelpGuide khuyên: thách thức ý nghĩ tự trách đó, tìm bằng chứng ngược lại.",
          "keys": [
            "tìm bằng chứng ngược lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Call it a setback. Plenty of successful people fell, learned, and tried again.",
          "sub": "Hãy coi đó là một bước lùi. Nhiều người thành công từng vấp ngã, rồi học và thử lại.",
          "keys": [
            "một bước lùi"
          ]
        }
      ],
      "ref": "p3"
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
            "text": "② Ngày 2 · Giấy tờ",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:day two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 130,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "file-folder",
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
            "at": "l1:office",
            "caption": "Ngày 2 · phòng nhân sự",
            "icon": "file-folder"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Làm đủ 12 tháng trở lên",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "l3:twelve months",
            "hl": [
              {
                "text": "12 tháng",
                "at": "l3:twelve months"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Mất việc vì cơ cấu, kinh tế,",
            "x": 5964,
            "y": 245,
            "size": 40,
            "at": "l3:restructuring"
          },
          {
            "id": "d-2b",
            "t": "text",
            "text": "chia, tách, sáp nhập",
            "x": 6004,
            "y": 305,
            "size": 40,
            "at": "l3:merger"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "→ trợ cấp mất việc làm",
            "x": 5964,
            "y": 380,
            "size": 50,
            "at": "l4:allowance",
            "color": "accent",
            "hl": [
              {
                "text": "mất việc làm",
                "at": "l4:allowance"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật (12/6/2026) · Đ47 BLLĐ 2019",
            "x": 5964,
            "y": 460,
            "size": 26,
            "at": "l3",
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
          "say": "Second stop: day two, the HR office. A folder, and a lot of questions.",
          "sub": "Chặng hai: ngày thứ hai, phòng nhân sự. Một bìa hồ sơ và cả rổ câu hỏi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Before I sign anything, what am I actually entitled to?",
          "sub": "Trước khi ký gì, mình thực sự được hưởng những gì?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Worked regularly for twelve months or more, and lost the job from restructuring, economic reasons, or a merger?",
          "sub": "Làm thường xuyên từ đủ 12 tháng, mất việc vì đổi cơ cấu, lý do kinh tế, hay chia tách, sáp nhập?",
          "keys": [
            "từ đủ 12 tháng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then you get a job loss allowance.",
          "sub": "Thì được nhận trợ cấp mất việc làm.",
          "keys": [
            "trợ cấp mất việc làm"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s09",
      "module": "BRK-03",
      "data": {
        "value": 2,
        "suffix": " tháng",
        "label": "lương, ít nhất · mỗi năm làm 1 tháng",
        "illus": "money-bag"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One month's salary for each year worked.",
          "sub": "Mỗi năm làm việc được một tháng lương.",
          "keys": [
            "một tháng lương"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And never less than two months in total.",
          "sub": "Và tổng cộng ít nhất bằng hai tháng lương.",
          "keys": [
            "ít nhất bằng hai tháng lương"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p5"
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
            "id": "d-bh",
            "t": "text",
            "text": "Trừ phần đã đóng BHTN",
            "x": 6824,
            "y": 668,
            "size": 40,
            "at": "l1:subtracted",
            "color": "coral",
            "hl": [
              {
                "text": "Trừ",
                "at": "l1:subtracted"
              }
            ]
          },
          {
            "id": "d-09",
            "t": "text",
            "text": "trước 01/01/2009: vẫn có thể tính",
            "x": 6824,
            "y": 726,
            "size": 32,
            "at": "l2:two thousand nine"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 540,
            "w": 40,
            "h": 40,
            "at": "l3:decision",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 524,
            "size": 50,
            "at": "l3:decision+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Quyết định cho thôi việc",
            "x": 6026,
            "y": 530,
            "size": 34,
            "at": "l3:decision+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 598,
            "w": 40,
            "h": 40,
            "at": "l3:contract",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 582,
            "size": 50,
            "at": "l3:contract+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Hợp đồng, phụ lục",
            "x": 6026,
            "y": 588,
            "size": 34,
            "at": "l3:contract+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 656,
            "w": 40,
            "h": 40,
            "at": "l4:payslips",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 640,
            "size": 50,
            "at": "l4:payslips+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Phiếu lương 6 tháng",
            "x": 6026,
            "y": 646,
            "size": 34,
            "at": "l4:payslips+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 714,
            "w": 40,
            "h": 40,
            "at": "l4:insurance",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 698,
            "size": 50,
            "at": "l4:insurance+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Xác nhận đóng bảo hiểm",
            "x": 6026,
            "y": 704,
            "size": 34,
            "at": "l4:insurance+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "But the years you paid unemployment insurance are subtracted from the count.",
          "sub": "Nhưng thời gian đã đóng bảo hiểm thất nghiệp bị trừ ra khi tính.",
          "keys": [
            "bị trừ ra"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For long timers, years before it began, on January first, two thousand nine, may still count.",
          "sub": "Với người làm lâu năm, phần trước khi có bảo hiểm thất nghiệp, từ 01/01/2009, vẫn có thể được tính.",
          "keys": [
            "01/01/2009"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So first, collect your papers: the termination decision, your contract and annexes.",
          "sub": "Vậy việc đầu tiên: xin đủ giấy tờ. Quyết định cho thôi việc, hợp đồng và phụ lục.",
          "keys": [
            "xin đủ giấy tờ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Your last six payslips, and confirmation of your insurance time. Lesson one explains the maths.",
          "sub": "Phiếu lương sáu tháng gần nhất, xác nhận thời gian đóng bảo hiểm. Cách tính có ở bài một."
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Sáng ngày 3 · trước cửa nhà",
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
          "label": "Mặc sơ mi, ra quán cả ngày",
          "why": "Giấu chuyện mất việc thường làm mọi thứ tệ hơn, và tốn sức hơn nói ra.",
          "rule": "Nói với gia đình sớm"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Bye, honey. Off to work! I'll be home late.",
          "sub": "Anh đi làm đây em. Tối anh về muộn nhé!",
          "pose": "hold",
          "face": "happy",
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
          "say": "A work shirt and a cafe all day? Hiding usually makes things worse.",
          "sub": "Mặc sơ mi, ngồi quán cả ngày? Giấu thường làm mọi thứ tệ hơn.",
          "keys": [
            "Giấu thường làm mọi thứ tệ hơn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! The evening before.",
          "sub": "Tua lại! Tối hôm trước.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Thảo, I was laid off today. Can we look at the loan together?",
          "sub": "Em ơi, hôm nay anh bị cắt giảm. Mình cùng xem lại khoản vay nhé?",
          "phase": "redo",
          "face": "sad",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "thao",
          "say": "Okay. Sit down. We'll look at it together.",
          "sub": "Ừ. Anh ngồi đi. Mình cùng xem.",
          "phase": "redo",
          "face": "neutral"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p7,p8,p9"
    },
    {
      "id": "s12",
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
            "at": "l6",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Tối ngày 2 · Nói thật",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:evening"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 130,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "center"
                },
                {
                  "id": "bin",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4"
                }
              ],
              "props": [
                "couch-and-lamp"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "bin",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:evening",
            "caption": "Tối ngày 2 → cuối tuần · ở nhà",
            "icon": "couch-and-lamp"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Kể tiến độ tìm việc",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:progress"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Nói rõ người thân giúp gì",
            "x": 7932,
            "y": 240,
            "size": 46,
            "at": "l2:help"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Mời vợ/chồng nói nỗi lo",
            "x": 7932,
            "y": 310,
            "size": 46,
            "at": "l3:worries",
            "color": "accent",
            "hl": [
              {
                "text": "nỗi lo",
                "at": "l3:worries"
              }
            ]
          },
          {
            "id": "e-kid",
            "t": "text",
            "text": "Con: nói thật, bớt chuyện tiền",
            "x": 7932,
            "y": 420,
            "size": 44,
            "at": "l6:honest",
            "color": "coral",
            "hl": [
              {
                "text": "bớt chuyện tiền",
                "at": "l6:money"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: HelpGuide",
            "x": 7932,
            "y": 490,
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
          "say": "Third stop: the real version. That evening, Dũng tells Thảo, and they look at the loan together.",
          "sub": "Chặng ba: bản thật. Tối hôm đó, Dũng kể với Thảo, hai người cùng xem lại khoản vay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "HelpGuide says: share your search progress, and say clearly how family can help.",
          "sub": "HelpGuide khuyên: kể tiến độ tìm việc, nói rõ người thân giúp được gì.",
          "keys": [
            "kể tiến độ tìm việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Let your partner voice their worries, and invite their ideas.",
          "sub": "Để vợ hoặc chồng nói ra nỗi lo, và mời họ góp ý.",
          "keys": [
            "nói ra nỗi lo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "At the weekend, it's Bé Bin's turn, their nine year old son.",
          "sub": "Cuối tuần, đến lượt Bé Bin, con trai chín tuổi của hai người.",
          "keys": [
            "Bé Bin"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "bin",
          "say": "Dad, why are you home in the morning?",
          "sub": "Bố ơi, sao sáng nay bố ở nhà ạ?",
          "face": "surprised"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "With kids, be honest about what's happening, but don't load them with money talk.",
          "sub": "Với con, nói thật chuyện đang xảy ra, nhưng đừng đổ lên con chuyện tiền bạc.",
          "keys": [
            "nói thật"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p7,p8,p10"
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
          }
        ],
        "items": [
          {
            "id": "e-k",
            "t": "text",
            "text": "Giấu tốn sức hơn nói ra",
            "x": 7932,
            "y": 570,
            "size": 58,
            "at": "l1:hiding",
            "color": "accent",
            "hl": [
              {
                "text": "tốn sức hơn",
                "at": "l1:costs more"
              }
            ]
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "khó 1 buổi tối, nhẹ cả tháng",
            "x": 7932,
            "y": 660,
            "size": 44,
            "at": "l2:evening"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The takeaway: hiding a job loss costs more energy than telling.",
          "sub": "Rút ra: giấu chuyện mất việc tốn sức hơn nói ra.",
          "keys": [
            "tốn sức hơn nói ra"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Harder for one evening, lighter for the whole month after.",
          "sub": "Khó hơn trong một buổi tối, nhưng nhẹ hơn cả tháng sau.",
          "keys": [
            "nhẹ hơn cả tháng sau"
          ]
        }
      ],
      "ref": "p8,p9"
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
          },
          {
            "at": "l6",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Ngày 5 · Giữ tiền",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:kitchen"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "ledger",
                "spiral-calendar"
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
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:kitchen",
            "caption": "Ngày 5 · bàn bếp",
            "icon": "ledger"
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1260,
            "w": 40,
            "h": 40,
            "at": "l3:income",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1244,
            "size": 50,
            "at": "l3:income+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Mọi nguồn thu",
            "x": 122,
            "y": 1250,
            "size": 42,
            "at": "l3:income+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1332,
            "w": 40,
            "h": 40,
            "at": "l3:spending",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1316,
            "size": 50,
            "at": "l3:spending+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Ghi chi tiêu",
            "x": 122,
            "y": 1322,
            "size": 42,
            "at": "l3:spending+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1404,
            "w": 40,
            "h": 40,
            "at": "l4:due date",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1388,
            "size": 50,
            "at": "l4:due date+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Ngày đến hạn từng hoá đơn",
            "x": 122,
            "y": 1394,
            "size": 42,
            "at": "l4:due date+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1476,
            "w": 40,
            "h": 40,
            "at": "l4:combine",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1460,
            "size": 50,
            "at": "l4:combine+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Ghép thành bảng",
            "x": 122,
            "y": 1466,
            "size": 42,
            "at": "l4:combine+200"
          },
          {
            "id": "f-late",
            "t": "text",
            "text": "Trễ hạn → xấu điểm tín dụng",
            "x": 60,
            "y": 1560,
            "size": 42,
            "at": "l5:late",
            "color": "coral",
            "hl": [
              {
                "text": "điểm tín dụng",
                "at": "l5:credit"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: CFPB — Budgeting",
            "x": 60,
            "y": 1625,
            "size": 26,
            "at": "l3",
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
          "say": "Fourth stop: day five, the kitchen table. Thảo brings a notebook.",
          "sub": "Chặng bốn: ngày thứ năm, bàn bếp. Thảo mang ra một cuốn sổ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First, everything coming in. Second, everything going out.",
          "sub": "Thứ nhất, mọi khoản thu. Thứ hai, mọi khoản chi.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That's the CFPB's method: list all income, track your spending.",
          "sub": "Đó là cách của CFPB: liệt kê mọi nguồn thu, ghi lại chi tiêu.",
          "keys": [
            "liệt kê mọi nguồn thu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Note each bill's due date, then combine it all into one budget.",
          "sub": "Ghi ngày đến hạn từng hoá đơn, rồi ghép lại thành một bảng ngân sách.",
          "keys": [
            "ngày đến hạn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Update it when work changes. Late or missed payments can hurt your credit.",
          "sub": "Cập nhật khi công việc thay đổi. Trả trễ, bỏ lỡ kỳ thanh toán có thể làm xấu điểm tín dụng.",
          "keys": [
            "xấu điểm tín dụng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "And the home loan? I'll call the bank today, before we're late.",
          "sub": "Còn khoản vay nhà? Hôm nay anh gọi ngân hàng luôn, trước khi trễ hạn.",
          "pose": "phone"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Smart. Restructuring a repayment schedule needs the bank to agree, so ask early.",
          "sub": "Khôn đấy. Cơ cấu lại thời hạn trả nợ cần ngân hàng đồng ý, nên hỏi sớm.",
          "keys": [
            "hỏi sớm"
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
          }
        ],
        "items": [
          {
            "id": "f-cc",
            "t": "text",
            "text": "Cơ cấu lại = ngân hàng đồng ý",
            "x": 920,
            "y": 1755,
            "size": 40,
            "at": "l1:agrees",
            "color": "accent",
            "hl": [
              {
                "text": "đồng ý",
                "at": "l1:agrees"
              }
            ]
          },
          {
            "id": "f-cc2",
            "t": "text",
            "text": "điều chỉnh kỳ hạn, gia hạn nợ",
            "x": 920,
            "y": 1812,
            "size": 34,
            "at": "l1:extend"
          },
          {
            "id": "f-src2",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật (Thông tư 39/2016/TT-NHNN)",
            "x": 60,
            "y": 1690,
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
          "say": "It means the lender agrees to adjust your repayment term, or extend the debt.",
          "sub": "Nghĩa là tổ chức tín dụng đồng ý điều chỉnh kỳ hạn trả nợ hoặc gia hạn nợ.",
          "keys": [
            "đồng ý"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s16",
      "module": "BRK-07",
      "data": {
        "question": "Giấy tờ xong, tiền tạm ổn, sao vẫn mất ngủ?",
        "illus": "sleepy-face"
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
          "say": "Papers done, money roughly sorted. So why can't Dũng sleep?",
          "sub": "Giấy tờ xong, tiền tạm ổn. Sao Dũng vẫn mất ngủ?",
          "keys": [
            "mất ngủ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s17",
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Ngày 10 · Tinh thần",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:day ten"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2888,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "sunrise",
                "person-walking"
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
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Bình",
            "caption": "Ngày 10 · 6:00 · công viên",
            "icon": "sunrise"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Cho phép mình buồn",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l4:sad"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Viết ra cảm xúc",
            "x": 2028,
            "y": 1325,
            "size": 46,
            "at": "l4:write"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Giữ lịch như ngày đi làm",
            "x": 2028,
            "y": 1390,
            "size": 46,
            "at": "l5:workday",
            "color": "accent",
            "hl": [
              {
                "text": "như ngày đi làm",
                "at": "l5:workday"
              }
            ]
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Vận động, ngủ đủ",
            "x": 2028,
            "y": 1455,
            "size": 46,
            "at": "l5:sleep"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Tránh rượu, ăn quá đà",
            "x": 2028,
            "y": 1520,
            "size": 46,
            "at": "l6:drinking",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: day ten, six a.m. This is Uncle Bình, Dũng's retired chief accountant.",
          "sub": "Chặng năm: ngày thứ mười, sáu giờ sáng. Đây là Bác Bình, kế toán trưởng cũ của Dũng, đã nghỉ hưu.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I didn't want to call you, Uncle. I felt ashamed.",
          "sub": "Cháu ngại gọi bác. Thấy xấu hổ quá.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Slowly, son. Let's just walk, and you talk.",
          "sub": "Từ từ, mình cứ đi bộ, cháu cứ kể.",
          "pose": "explain",
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "HelpGuide's list: allow yourself to be sad, and write your feelings down.",
          "sub": "Lời khuyên của HelpGuide: cho phép mình buồn, viết ra cảm xúc.",
          "keys": [
            "cho phép mình buồn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Keep a workday routine, move your body, sleep enough.",
          "sub": "Giữ lịch sinh hoạt như ngày đi làm, vận động, ngủ đủ.",
          "keys": [
            "như ngày đi làm"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And skip the drinking or overeating as a way to cope.",
          "sub": "Và tránh dùng rượu hay ăn uống quá đà để giải toả."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
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
            "fit": "G",
            "move": "cut"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-who",
            "t": "text",
            "text": "WHO: 5 kỹ thuật, vài phút/ngày",
            "x": 2028,
            "y": 1630,
            "size": 40,
            "at": "l1:five",
            "hl": [
              {
                "text": "vài phút",
                "at": "l1:few minutes"
              }
            ]
          },
          {
            "id": "g-med",
            "t": "text",
            "text": "Trò chuyện = “liều thuốc tự nhiên”",
            "x": 2888,
            "y": 1755,
            "size": 40,
            "at": "l2:medicine",
            "color": "accent",
            "hl": [
              {
                "text": "liều thuốc tự nhiên",
                "at": "l2:medicine"
              }
            ]
          },
          {
            "id": "g-bur",
            "t": "text",
            "text": "Nhờ giúp ≠ gánh nặng",
            "x": 2888,
            "y": 1812,
            "size": 36,
            "at": "l4:burden",
            "hl": [
              {
                "text": "≠ gánh nặng",
                "at": "l4:burden"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: WHO — Doing What Matters in Times of Stress; HelpGuide",
            "x": 2028,
            "y": 1700,
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
          "say": "The WHO guide, Doing What Matters in Times of Stress, has five simple skills. A few minutes a day.",
          "sub": "Cẩm nang của WHO, Doing What Matters in Times of Stress, có năm kỹ thuật đơn giản, mỗi ngày vài phút.",
          "keys": [
            "mỗi ngày vài phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "HelpGuide calls talking with people a natural medicine against stress.",
          "sub": "HelpGuide gọi việc gặp gỡ, trò chuyện là liều thuốc tự nhiên chống căng thẳng.",
          "keys": [
            "liều thuốc tự nhiên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "I don't have answers. I just listen. And I'm glad you asked.",
          "sub": "Bác không có lời giải. Bác chỉ nghe thôi. Mà bác vui vì cháu gọi.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Asking for help doesn't make you a burden. Most people are glad to be trusted.",
          "sub": "Nhờ giúp không biến bạn thành gánh nặng. Phần lớn mọi người vui vì được tin tưởng.",
          "keys": [
            "không biến bạn thành gánh nặng"
          ]
        }
      ],
      "ref": "p13,p14"
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
          }
        ],
        "items": [
          {
            "id": "g-k",
            "t": "text",
            "text": "Gọi 1 người bạn = việc tìm việc",
            "x": 2028,
            "y": 1780,
            "size": 46,
            "at": "l1:friend",
            "color": "accent",
            "hl": [
              {
                "text": "việc tìm việc",
                "at": "l1:job search"
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
          "say": "The takeaway: calling a friend today is part of the job search, not a private matter.",
          "sub": "Rút ra: gọi cho một người bạn hôm nay là một việc tìm việc, không phải việc riêng.",
          "keys": [
            "một việc tìm việc"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s20",
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Ngày 20 · Tìm việc lại",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:day twenty"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "notebook"
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
            "at": "l1:desk",
            "caption": "Ngày 20 · 8:00 · góc làm việc ở nhà",
            "icon": "laptop"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Nhiều chỗ trống không đăng",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l2:advertised",
            "color": "coral",
            "hl": [
              {
                "text": "không đăng",
                "at": "l2:never"
              }
            ]
          },
          {
            "id": "h-1b",
            "t": "text",
            "text": "→ lấp qua người quen",
            "x": 4036,
            "y": 1330,
            "size": 44,
            "at": "l2:networks"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Liệt kê người quen theo nhóm",
            "x": 3996,
            "y": 1410,
            "size": 42,
            "at": "l4:group"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Giới thiệu bản thân 30 giây",
            "x": 3996,
            "y": 1480,
            "size": 46,
            "at": "l4:thirty",
            "color": "accent",
            "hl": [
              {
                "text": "30 giây",
                "at": "l4:thirty"
              }
            ]
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Nhờ giới thiệu, hẹn hỏi chuyện",
            "x": 3996,
            "y": 1550,
            "size": 42,
            "at": "l5:introductions"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: HelpGuide; MIT CAPD — How to network",
            "x": 3996,
            "y": 1620,
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
          "say": "Sixth stop: day twenty, eight a.m. Dũng's desk at home, same hours as the office.",
          "sub": "Chặng sáu: ngày thứ hai mươi, tám giờ sáng. Góc làm việc của Dũng ở nhà, giờ giấc như ở công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "HelpGuide says most openings are never advertised. They are filled through networks.",
          "sub": "HelpGuide nói phần lớn chỗ trống không đăng tuyển công khai, mà được lấp qua mạng lưới quen biết.",
          "keys": [
            "không đăng tuyển công khai"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Eighteen years of contacts, and I've never asked anyone for anything.",
          "sub": "Mười tám năm quen biết, chưa từng nhờ ai việc gì.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "MIT's career centre suggests: list contacts by group, and prepare a thirty second self introduction.",
          "sub": "Trung tâm hướng nghiệp MIT gợi ý: liệt kê người quen theo nhóm, chuẩn bị đoạn giới thiệu 30 giây.",
          "keys": [
            "giới thiệu 30 giây"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then ask for introductions, and meet people just to ask questions.",
          "sub": "Rồi nhờ giới thiệu, và gặp người ta chỉ để hỏi thông tin."
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s21",
      "module": "BRK-10",
      "data": {
        "quote": "Người trung niên có kinh nghiệm xử lý vấn đề, bình tĩnh, cẩn thận và tận tuỵ",
        "mark": "bình tĩnh, cẩn thận",
        "by": "Một người làm tuyển dụng (SGGP)",
        "illus": "handshake"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A recruiter: middle aged workers are calm, careful, dedicated.",
          "sub": "Nhà tuyển dụng: người trung niên bình tĩnh, cẩn thận, tận tuỵ.",
          "keys": [
            "bình tĩnh, cẩn thận"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Forty isn't a minus.",
          "sub": "Bốn mươi đâu phải dấu trừ."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s22",
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
            "id": "h-say",
            "t": "text",
            "text": "“Em là Dũng, 18 năm kế toán…”",
            "x": 4856,
            "y": 1755,
            "size": 38,
            "at": "l1:eighteen",
            "color": "accent"
          },
          {
            "id": "h-say2",
            "t": "text",
            "text": "mỗi tuần vài người quen",
            "x": 4856,
            "y": 1812,
            "size": 34,
            "at": "l2:each week"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Hi, I'm Dũng. Eighteen years in factory accounting, good with costs and audits.",
          "sub": "Chào anh, em là Dũng, mười tám năm kế toán nhà máy, mạnh về chi phí, kiểm toán.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A few contacts each week, and notes after every chat.",
          "sub": "Mỗi tuần vài người quen trong nghề, ghi chép sau mỗi buổi gặp."
        }
      ],
      "ref": "p18,p20"
    },
    {
      "id": "s23",
      "module": "BRK-08",
      "data": {
        "title": "Lịch 30 ngày của Dũng",
        "points": [
          {
            "label": "Ngày 1–3",
            "sub": "Giấy tờ, nói với vợ",
            "illus": "page-facing-up"
          },
          {
            "label": "Ngày 4–7",
            "sub": "Trợ cấp, thu chi, ngân hàng",
            "illus": "ledger"
          },
          {
            "label": "Ngày 8–14",
            "sub": "Giữ giờ, đi bộ, kỹ năng",
            "illus": "person-walking"
          },
          {
            "label": "Ngày 15–30",
            "sub": "Giới thiệu, gặp người quen",
            "illus": "handshake"
          }
        ],
        "current": 3
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Days one to three: papers and Thảo. Four to seven: benefits, budget, bank.",
          "sub": "Ngày 1–3: giấy tờ, nói với Thảo. Ngày 4–7: trợ cấp, thu chi, ngân hàng.",
          "keys": [
            "Ngày 1–3"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Eight to fourteen: routine and skills. Fifteen to thirty: reach out.",
          "sub": "Ngày 8–14: nếp ngày, kỹ năng. Ngày 15–30: gặp người quen.",
          "keys": [
            "Ngày 15–30"
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
      "id": "s24",
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
            "text": "Ngày 30 · Quán cũ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:day thirty"
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
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "hot-beverage",
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
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:day thirty",
            "caption": "Ngày 30 · trưa · quán cà phê cũ",
            "icon": "file-folder"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Tờ thông báo: trong bìa hồ sơ",
            "x": 5964,
            "y": 1260,
            "size": 42,
            "at": "l1:folder"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Lịch 30 ngày: dán tủ lạnh",
            "x": 5964,
            "y": 1330,
            "size": 42,
            "at": "l1:fridge"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Chưa có việc, nhưng đứng vững",
            "x": 5964,
            "y": 1420,
            "size": 48,
            "at": "l3:standing",
            "color": "accent",
            "hl": [
              {
                "text": "đứng vững",
                "at": "l3:standing"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Ngã ở đâu, đứng dậy ở đó”",
            "x": 5964,
            "y": 1540,
            "size": 52,
            "at": "l5:fall",
            "color": "accent",
            "hl": [
              {
                "text": "đứng dậy",
                "at": "l5:stand up"
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
          "say": "Day thirty. Same cafe, same noon. The notice now lives in a folder, the plan on the fridge.",
          "sub": "Ngày thứ ba mươi. Vẫn quán ấy, vẫn buổi trưa. Tờ thông báo nằm trong bìa hồ sơ, lịch dán trên tủ lạnh.",
          "keys": [
            "Vẫn quán ấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "His phone buzzes again. Thảo: what's for lunch?",
          "sub": "Điện thoại lại rung. Thảo hỏi: trưa nay anh ăn gì?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "No new job yet. But I'm standing, and I have two meetings next week.",
          "sub": "Chưa có việc mới. Nhưng anh đứng vững rồi, tuần sau có hai buổi hẹn.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Lunch at home with you, okay?",
          "sub": "Trưa nay anh về nhà ăn với em nhé.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Where you fall, there you stand up again. Thirty days don't need a job, just the right direction.",
          "sub": "“Ngã ở đâu, đứng dậy ở đó.” Ba mươi ngày đầu chưa cần có việc, chỉ cần đúng hướng.",
          "keys": [
            "chỉ cần đúng hướng"
          ]
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s25",
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
            "at": "l1:five",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "H",
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
            "text": "Năm việc · làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l5:this week"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7464,
            "y": 40,
            "at": "l2:papers"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1560,
            "y": 1130,
            "at": "l3:cash"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5496,
            "y": 1130,
            "at": "l4:people"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Xin đủ giấy tờ tuần này",
            "x": 7932,
            "y": 1270,
            "size": 50,
            "at": "l5:papers",
            "color": "accent",
            "hl": [
              {
                "text": "tuần này",
                "at": "l5:this week"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Viết lịch 30 ngày của bạn",
            "x": 7932,
            "y": 1350,
            "size": 50,
            "at": "l5:calendar"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Bài tiếp: thâm niên và quyền lợi",
            "x": 7932,
            "y": 1430,
            "size": 44,
            "at": "l6:Next"
          },
          {
            "id": "j-src",
            "t": "text",
            "text": "Bài để tham khảo; quy định có thể thay đổi — khi cần áp dụng, kiểm lại với cơ quan/chuyên gia. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1780,
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
          "say": "So, five things in the first thirty days.",
          "sub": "Tóm lại, năm việc trong ba mươi ngày đầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Keep your papers and your rights. Then tell your family the truth.",
          "sub": "Giữ giấy tờ và quyền lợi. Rồi nói thật với gia đình.",
          "keys": [
            "nói thật với gia đình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hold your cash flow, hold your spirits.",
          "sub": "Giữ dòng tiền, giữ tinh thần.",
          "keys": [
            "Giữ dòng tiền"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And start the search through people you know.",
          "sub": "Và bắt đầu tìm việc qua người quen.",
          "keys": [
            "qua người quen"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "This week: get all your papers, and write your own thirty day calendar.",
          "sub": "Việc làm ngay: xin đủ giấy tờ trong tuần này, viết lịch ba mươi ngày của riêng bạn.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: how long service affects your entitlements. Rules can change, so check before you act.",
          "sub": "Bài tiếp: thâm niên dài ảnh hưởng quyền lợi thế nào. Quy định có thể thay đổi, nhớ kiểm lại trước khi áp dụng.",
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
      "id": "s26",
      "module": "QUIZ-01",
      "data": {
        "q": "A friend says your layoff proves you were bad at work, what can you answer?",
        "options": [
          "You are right, so I will stop looking for work in my field from today",
          "The cut came from the company's situation, which was outside my personal control",
          "You must not talk to me again until I find a better paid position"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "balance-scale",
        "why": "Cắt giảm là chuyện của doanh nghiệp, không phải bản án cho năng lực."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A friend says your layoff proves you were bad at work, what can you answer?",
          "sub": "Một người bạn nói bị cắt giảm chứng tỏ bạn làm kém, bạn có thể đáp gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The cut came from the company's situation, which was outside my personal control.",
          "sub": "Đợt cắt giảm đến từ tình hình công ty, nằm ngoài tầm kiểm soát của mình."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A layoff is not a verdict on you.",
          "sub": "Cắt giảm không phải bản án cho bạn."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[7]"
    },
    {
      "id": "s27",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Ba mươi ngày đầu sau cắt giảm"
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
  "notes": "#145 bài MỚI (bài tổng chuỗi laid-off-at-40) theo hạt nhân (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): tờ thông báo cắt giảm gập đôi, cận vật rồi kéo ra thấy Dũng ở cổng nhà máy; vật trở lại ở kết (nằm trong bìa hồ sơ). Dòng thời gian: BA MƯƠI NGÀY ĐẦU của Dũng: ngày 1 cổng nhà máy (intro) → trưa quán cà phê, vì sao nặng hơn (p1, p2; BRK-04 tự trách p3, p4) → ngày 2 phòng nhân sự, trợ cấp mất việc làm (p5; BRK-03 “2 tháng lương”; p6 giấy tờ) → DLG “Khoan đã!” Cách A sơ mi ra quán (p8) → tối nói thật với Thảo, cuối tuần với Bé Bin (p7–p10) → ngày 5 bàn bếp, CFPB 4 bước, cơ cấu lại nợ (p11, p12) → BRK-07 rehook → ngày 10 công viên với Bác Bình (p13–p16) → ngày 20 tìm việc qua người quen, MIT 30 giây (p17; BRK-10 trích nhà tuyển dụng SGGP) → BRK-08 lịch 30 ngày (p18) → ngày 30 quán cũ, khép vòng tin nhắn “Trưa nay anh ăn gì?” (p19) → tóm tắt + lưu ý #133. Nhân vật theo w145/_series/laid-off-at-40.md: Dũng (= anh Hùng p8, p18), Thảo (= chị Hương), Bé Bin (hai con trong bài), Bác Bình (người biết lắng nghe p14). Chi tiết minh hoạ tự đặt, không phải số liệu: 42 tuổi, nhà máy may, “hai buổi hẹn tuần sau”. Số chỉ từ bài: 18 năm, 18–35 tuổi, hơn 40, gần 50, 12 tháng, 1 tháng lương/năm, ít nhất 2 tháng, 01/01/2009, 6 tháng, 4 bước CFPB, 5 kỹ thuật WHO, 30 giây, lịch ngày 1–3/4–7/8–14/15–30. Ca dao neo: “Ngã ở đâu, đứng dậy ở đó”. Câu đố questions[7].",
  "loop": {
    "open": "s01",
    "close": "s24"
  }
};
