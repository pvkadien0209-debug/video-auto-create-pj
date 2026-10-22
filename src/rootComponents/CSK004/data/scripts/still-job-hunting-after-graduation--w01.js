// still-job-hunting-after-graduation--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "still-job-hunting-after-graduation--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "graduates-still-job-hunting",
    "slug": "still-job-hunting-after-graduation",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Ra trường mấy tháng chưa có việc: nhìn lại và bắt đầu lại từ đâu?",
    "series": "Chưa có việc không phải dấu chấm hết — kế hoạch 90 ngày cho người mới tốt nghiệp"
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
          },
          {
            "at": "l3",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "A",
            "ms": 600
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
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "laptop",
                "crescent-moon"
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
            "caption": "2:00 sáng · tháng thứ 5 sau tốt nghiệp",
            "icon": "crescent-moon"
          },
          {
            "id": "a-me",
            "t": "text",
            "text": "“Chỉ mình mình…”",
            "x": 60,
            "y": 120,
            "size": 64,
            "at": "l3:Except",
            "color": "coral"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Thất nghiệp tuổi 15–24?",
            "x": 60,
            "y": 250,
            "size": 56,
            "at": "l4:guess",
            "hl": [
              {
                "text": "15–24",
                "at": "l4:fifteen"
              }
            ]
          },
          {
            "id": "a-o1",
            "t": "text",
            "text": "A · ngang mức chung",
            "x": 60,
            "y": 350,
            "size": 52,
            "at": "l4:same"
          },
          {
            "id": "a-o2",
            "t": "text",
            "text": "B · gần gấp 4",
            "x": 60,
            "y": 440,
            "size": 52,
            "at": "l4:four",
            "color": "accent"
          },
          {
            "id": "a-th",
            "t": "illus",
            "name": "thinking-face",
            "x": 520,
            "y": 420,
            "size": 100,
            "at": "l4:higher"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two a.m. Meet Thảo.",
          "sub": "Hai giờ sáng. Đây là Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Accounting graduate, five months out, still no job. The laptop is warmer than her tea.",
          "sub": "Cử nhân kế toán, ra trường năm tháng, vẫn chưa có việc. Laptop còn nóng hơn cốc trà.",
          "keys": [
            "vẫn chưa có việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Everyone in my class has a job. Except me.",
          "sub": "Cả lớp ai cũng đi làm rồi. Trừ mình.",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Quick guess. Unemployment for ages fifteen to twenty-four: about the same as everyone, or nearly four times higher?",
          "sub": "Đoán nhanh: thất nghiệp tuổi 15 đến 24 ngang mức chung, hay cao gần gấp bốn?",
          "keys": [
            "ngang mức chung",
            "gần gấp bốn"
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
      "beats": {
        "after": 1500
      },
      "ref": "intro,p3"
    },
    {
      "id": "s01",
      "module": "BRK-03",
      "data": {
        "value": 8.87,
        "decimals": 2,
        "suffix": "%",
        "label": "thất nghiệp thanh niên 15–24, gần gấp bốn mức chung",
        "illus": "bar-chart"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The answer is B. Nearly four times.",
          "sub": "Đáp án là B: gần gấp bốn.",
          "keys": [
            "gần gấp bốn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Eight point eight seven percent, for ages fifteen to twenty-four.",
          "sub": "Tám phẩy tám bảy phần trăm, ở tuổi 15 đến 24.",
          "keys": [
            "Tám phẩy tám bảy phần trăm"
          ]
        }
      ],
      "ref": "p1"
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
          }
        ],
        "items": [
          {
            "id": "a-ring",
            "t": "ring",
            "around": [
              "a-o2"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l1"
          },
          {
            "id": "a-n1",
            "t": "text",
            "text": "2,22% · mọi độ tuổi",
            "x": 60,
            "y": 540,
            "size": 46,
            "at": "l1:two point",
            "hl": [
              {
                "text": "2,22%",
                "at": "l1:two point"
              }
            ]
          },
          {
            "id": "a-n2",
            "t": "text",
            "text": "8,87% · tuổi 15–24",
            "x": 60,
            "y": 615,
            "size": 52,
            "at": "l1:against",
            "color": "accent",
            "hl": [
              {
                "text": "8,87%",
                "at": "l2:nine months"
              }
            ]
          },
          {
            "id": "a-mex",
            "t": "strike",
            "over": "a-me",
            "at": "l3:alone"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Cục Thống kê, báo cáo quý III và 9 tháng năm 2026 (VietnamPlus, 3/10/2026)",
            "x": 60,
            "y": 720,
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
          "say": "Against two point two two percent for all working ages.",
          "sub": "So với 2,22% của mọi độ tuổi lao động.",
          "keys": [
            "2,22%"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That's from the statistics office, first nine months of twenty twenty-six.",
          "sub": "Số của Cục Thống kê, chín tháng đầu năm 2026."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So Thảo is not alone. Not even close.",
          "sub": "Vậy Thảo đâu có một mình. Còn lâu mới một mình.",
          "keys": [
            "đâu có một mình"
          ]
        }
      ],
      "ref": "p1,p3"
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
            "text": "Bắt đầu lại từ đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:start again",
            "hl": [
              {
                "text": "từ đâu",
                "at": "l1:where"
              }
            ]
          },
          {
            "id": "b-16",
            "t": "text",
            "text": "1,6 triệu thanh niên",
            "x": 2028,
            "y": 170,
            "size": 64,
            "at": "l2:million",
            "color": "accent",
            "hl": [
              {
                "text": "1,6 triệu",
                "at": "l2:million"
              }
            ]
          },
          {
            "id": "b-16s",
            "t": "text",
            "text": "không việc, không học",
            "x": 2028,
            "y": 260,
            "size": 46,
            "at": "l2:no study"
          },
          {
            "id": "b-11",
            "t": "text",
            "text": "hơn 11% · +195.000 trong một quý",
            "x": 2028,
            "y": 330,
            "size": 40,
            "at": "l3:eleven",
            "hl": [
              {
                "text": "+195.000",
                "at": "l3:ninety-five"
              }
            ]
          },
          {
            "id": "b-cap",
            "t": "illus",
            "name": "graduation-cap",
            "x": 2028,
            "y": 420,
            "size": 100,
            "at": "l4:graduated"
          },
          {
            "id": "b-why",
            "t": "text",
            "text": "Mùa tốt nghiệp: trường → chợ việc",
            "x": 2148,
            "y": 440,
            "size": 42,
            "at": "l4:graduated"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Cục Thống kê, quý III/2026 (VnExpress, 7/10/2026)",
            "x": 2028,
            "y": 720,
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
          "say": "So where does a graduate like Thảo start again?",
          "sub": "Vậy một cử nhân như Thảo bắt đầu lại từ đâu?",
          "keys": [
            "bắt đầu lại từ đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "First, the big picture. In quarter three, about one point six million young people had no job and no study.",
          "sub": "Trước hết, bức tranh lớn. Quý III, khoảng 1,6 triệu thanh niên không việc làm, không đi học.",
          "keys": [
            "1,6 triệu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "More than eleven percent of all youth, up over a hundred and ninety-five thousand in one quarter.",
          "sub": "Hơn 11% số thanh niên, tăng hơn 195.000 người chỉ trong một quý."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Why? Many have just graduated, moving from school into the job market.",
          "sub": "Vì sao? Nhiều người vừa tốt nghiệp, đang từ trường bước ra thị trường lao động."
        }
      ],
      "ref": "p2"
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
            "id": "b-lim",
            "t": "text",
            "text": "Không riêng cử nhân",
            "x": 2868,
            "y": 170,
            "size": 44,
            "at": "l2:graduates",
            "color": "muted"
          },
          {
            "id": "b-com",
            "t": "text",
            "text": "Khoảng trống: chuyện phổ biến",
            "x": 2868,
            "y": 245,
            "size": 44,
            "at": "l2:common",
            "hl": [
              {
                "text": "phổ biến",
                "at": "l2:common"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: mình học dở",
            "x": 2868,
            "y": 340,
            "size": 48,
            "at": "l3:badly",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:stage"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: một giai đoạn",
            "x": 2868,
            "y": 430,
            "size": 58,
            "at": "l4:stage",
            "color": "accent",
            "hl": [
              {
                "text": "một giai đoạn",
                "at": "l4:stage"
              }
            ]
          },
          {
            "id": "b-yes2",
            "t": "text",
            "text": "không phải bản án",
            "x": 2908,
            "y": 515,
            "size": 48,
            "at": "l4:sentence"
          },
          {
            "id": "b-ch",
            "t": "text",
            "text": "Đổi được: cách tìm",
            "x": 2868,
            "y": 610,
            "size": 50,
            "at": "l6:change",
            "color": "accent",
            "hl": [
              {
                "text": "cách tìm",
                "at": "l6:search"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "These figures aren't about graduates only. But they show one thing: the gap between diploma and first job is common at your age.",
          "sub": "Số liệu không nói riêng về cử nhân, nhưng cho thấy: khoảng trống giữa ngày nhận bằng và ngày nhận việc là chuyện phổ biến ở tuổi bạn.",
          "keys": [
            "chuyện phổ biến"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So it's not: I studied badly, I picked the wrong major.",
          "sub": "Vậy không phải: mình học dở, mình chọn sai ngành."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It's a stage. Not a sentence.",
          "sub": "Mà là: một giai đoạn, không phải một bản án.",
          "keys": [
            "một giai đoạn"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "No calls says more about how and when you apply than about your worth. What you can change is how you search.",
          "sub": "Chưa được gọi nói về cách nộp, thời điểm hơn là giá trị của bạn. Điều bạn đổi được là cách tìm.",
          "keys": [
            "cách tìm"
          ]
        }
      ],
      "ref": "p3,p4,p5"
    },
    {
      "id": "s05",
      "module": "BRK-06",
      "data": {
        "title": "Kế hoạch 90 ngày",
        "items": [
          {
            "illus": "alarm-clock",
            "text": "Giữ nhịp"
          },
          {
            "illus": "memo",
            "text": "Sửa cách tìm"
          },
          {
            "illus": "briefcase",
            "text": "Việc tạm"
          },
          {
            "illus": "books",
            "text": "Học đúng chỗ"
          },
          {
            "illus": "money-bag",
            "text": "Giữ tiền"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Keep your rhythm, fix your search, weigh a temp job, learn smart, guard money.",
          "sub": "Giữ nhịp, sửa cách tìm, cân nhắc việc tạm, học đúng chỗ, giữ tiền."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ninety days, five stops.",
          "sub": "Chín mươi ngày, năm chặng.",
          "keys": [
            "năm chặng"
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
      "id": "s06",
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
            "at": "l3",
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
            "text": "① Tối thứ Bảy · bữa cơm",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Saturday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "right",
                  "face": "worried"
                },
                {
                  "id": "tu",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "cooked-rice",
                "pot-of-food"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "tu",
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
            "at": "l1:dinner",
            "caption": "Tối thứ Bảy · bữa cơm họ hàng",
            "icon": "cooked-rice"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Lo đến từ 3 phía:",
            "x": 3996,
            "y": 170,
            "size": 52,
            "at": "l5:three",
            "hl": [
              {
                "text": "3 phía",
                "at": "l5:three sides"
              }
            ]
          },
          {
            "id": "c-i1",
            "t": "illus",
            "name": "money-bag",
            "x": 3996,
            "y": 260,
            "size": 80,
            "at": "l5:money"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Tiền tiêu hằng ngày",
            "x": 4096,
            "y": 275,
            "size": 44,
            "at": "l5:money"
          },
          {
            "id": "c-i2",
            "t": "illus",
            "name": "speech-balloon",
            "x": 3996,
            "y": 360,
            "size": 80,
            "at": "l5:questions"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Người nhà hỏi han",
            "x": 4096,
            "y": 375,
            "size": 44,
            "at": "l5:questions"
          },
          {
            "id": "c-i3",
            "t": "illus",
            "name": "mobile-phone",
            "x": 3996,
            "y": 460,
            "size": 80,
            "at": "l5:photos"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "So với ảnh bạn bè",
            "x": 4096,
            "y": 475,
            "size": 44,
            "at": "l5:photos"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "How did Thảo get here? Rewind six hours: Saturday dinner with relatives.",
          "sub": "Sao Thảo ra nông nỗi này? Tua lại sáu tiếng: bữa cơm họ hàng tối thứ Bảy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Bà Tư, a relative, world champion of the question nobody wants.",
          "sub": "Đây là bà Tư, bà họ, vô địch thế giới môn hỏi câu không ai muốn nghe.",
          "keys": [
            "bà Tư"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "Your classmate earns a nice salary now, I hear. And how much do you earn, dear?",
          "sub": "Nghe nói bạn cùng lớp cháu giờ lương cao lắm. Thế cháu lương bao nhiêu?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I'm... still looking, Grandma.",
          "sub": "Cháu… vẫn đang tìm bà ạ.",
          "face": "sad"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Worry arrives from three sides at once: daily money, questions from family, and friends' job photos.",
          "sub": "Nỗi lo đến cùng lúc từ ba phía: tiền tiêu hằng ngày, câu hỏi người nhà, ảnh nhận việc của bạn bè.",
          "keys": [
            "ba phía"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p6,p8"
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
            "id": "c-r1",
            "t": "text",
            "text": "Nhận đại việc đầu tiên",
            "x": 3996,
            "y": 545,
            "size": 44,
            "at": "l1:first job",
            "color": "coral"
          },
          {
            "id": "c-r2",
            "t": "text",
            "text": "hoặc bỏ hẳn việc tìm",
            "x": 3996,
            "y": 610,
            "size": 44,
            "at": "l1:give up",
            "color": "coral"
          },
          {
            "id": "c-ca",
            "t": "text",
            "text": "“Có công mài sắt…”",
            "x": 3996,
            "y": 690,
            "size": 46,
            "at": "l3:needle",
            "color": "accent",
            "hl": [
              {
                "text": "mài sắt",
                "at": "l3:grind"
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
          "say": "When anxiety runs high, we grab the first job just to have an answer. Or we give up searching.",
          "sub": "Khi lo quá, ta dễ nhận đại việc đầu tiên chỉ để có câu trả lời. Hoặc bỏ hẳn việc tìm.",
          "keys": [
            "nhận đại việc đầu tiên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: grind an iron bar long enough, and it becomes a needle.",
          "sub": "Ông bà dạy: “Có công mài sắt, có ngày nên kim.”",
          "keys": [
            "Có công mài sắt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thảo applies to everything till two a.m. Even night shift sales, far across town. A new bar each minute.",
          "sub": "Thảo nộp tất cả tới hai giờ sáng. Cả bán hàng ca đêm ở quận xa. Mỗi phút một thanh sắt mới.",
          "keys": [
            "Mỗi phút một thanh sắt mới"
          ]
        }
      ],
      "ref": "p6,p8"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Tuần sau · một số máy lạ",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nộp bừa lúc 2 giờ sáng",
          "why": "Sáng ra không nhớ đã nộp đâu; cuộc gọi đến cũng không biết của công ty nào.",
          "rule": "Kế hoạch cho nỗi lo một chỗ để đặt"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Hello? Sorry... which company are you calling from?",
          "sub": "A lô? Dạ xin lỗi… bên mình là công ty nào ạ?",
          "face": "worried",
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
          "say": "Panic applications: many sent, few remembered.",
          "sub": "Nộp lúc hoảng: gửi thì nhiều, nhớ được thì ít.",
          "keys": [
            "nhớ được thì ít"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Back to two a.m.",
          "sub": "Tua lại! Về lúc hai giờ sáng.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Laptop off. Tomorrow I write a plan: what each week, how to measure, when to review.",
          "sub": "Gập máy. Mai mình viết kế hoạch: mỗi tuần làm gì, đo bằng gì, khi nào xem lại.",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A plan won't stop the worry. It gives the worry a place to sit.",
          "sub": "Kế hoạch không bắt bạn hết lo. Nó cho nỗi lo một chỗ để ngồi.",
          "phase": "redo",
          "keys": [
            "một chỗ để ngồi"
          ]
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
      "id": "s09",
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
            "at": "l4:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tuần 1–2 · Ngày có khung",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:weeks one",
            "hl": [
              {
                "text": "có khung",
                "at": "l1:shape"
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
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "alarm-clock",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l3",
            "caption": "Sáng thứ Hai · tuần 1",
            "icon": "alarm-clock"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 170,
            "w": 44,
            "h": 44,
            "at": "l2:wake",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 156,
            "size": 56,
            "at": "l2:wake+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Giờ dậy",
            "x": 6030,
            "y": 160,
            "size": 46,
            "at": "l2:wake+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 242,
            "w": 44,
            "h": 44,
            "at": "l2:search",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 228,
            "size": 56,
            "at": "l2:search+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Giờ tìm việc",
            "x": 6030,
            "y": 232,
            "size": 46,
            "at": "l2:search+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 314,
            "w": 44,
            "h": 44,
            "at": "l2:move",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 300,
            "size": 56,
            "at": "l2:move+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Giờ vận động",
            "x": 6030,
            "y": 304,
            "size": 46,
            "at": "l2:move+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 386,
            "w": 44,
            "h": 44,
            "at": "l2:rest",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 372,
            "size": 56,
            "at": "l2:rest+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Giờ nghỉ",
            "x": 6030,
            "y": 376,
            "size": 46,
            "at": "l2:rest+200"
          },
          {
            "id": "d-pick",
            "t": "text",
            "text": "Chọn 2–3 vị trí nhắm tới",
            "x": 5964,
            "y": 480,
            "size": 46,
            "at": "l4:two or three",
            "color": "accent",
            "hl": [
              {
                "text": "2–3 vị trí",
                "at": "l4:two or three"
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
          "say": "Stop one, weeks one and two: give each day a shape.",
          "sub": "Chặng một, tuần một và hai: cho mỗi ngày một hình dạng.",
          "keys": [
            "một hình dạng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A time to wake, a time to search, a time to move, a time to rest.",
          "sub": "Giờ dậy, giờ tìm việc, giờ vận động, giờ nghỉ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Same wake-up time. Job search in the morning. A walk after lunch. Laptop closed at night.",
          "sub": "Dậy cùng một giờ. Sáng tìm việc. Chiều đi bộ. Tối gập máy.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And only two or three target roles. Not every ad in the city.",
          "sub": "Và chỉ hai, ba vị trí nhắm tới. Không phải mọi tin trong thành phố.",
          "keys": [
            "hai, ba vị trí"
          ]
        }
      ],
      "ref": "p10,p24"
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
            "id": "d-who",
            "t": "text",
            "text": "WHO: 5 kỹ năng ngắn",
            "x": 5964,
            "y": 555,
            "size": 50,
            "at": "l1:five",
            "color": "accent",
            "hl": [
              {
                "text": "5 kỹ năng",
                "at": "l1:five"
              }
            ]
          },
          {
            "id": "d-sk",
            "t": "text",
            "text": "neo hiện tại · gỡ ý nghĩ",
            "x": 5964,
            "y": 630,
            "size": 40,
            "at": "l2:grounding"
          },
          {
            "id": "d-min",
            "t": "text",
            "text": "vài phút mỗi ngày",
            "x": 5964,
            "y": 695,
            "size": 42,
            "at": "l3:few minutes",
            "hl": [
              {
                "text": "vài phút",
                "at": "l3:few minutes"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: WHO, Doing What Matters in Times of Stress",
            "x": 6804,
            "y": 720,
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
          "say": "The World Health Organization made an illustrated guide for stressful times, with five short skills.",
          "sub": "Tổ chức Y tế Thế giới có tài liệu minh hoạ cho lúc căng thẳng, dạy năm kỹ năng ngắn.",
          "keys": [
            "năm kỹ năng ngắn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Like grounding yourself, unhooking from hard thoughts, doing small things you value.",
          "sub": "Như neo mình vào hiện tại, gỡ khỏi ý nghĩ khó chịu, làm việc nhỏ theo điều mình coi trọng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A few minutes a day each. Sample schedules and dinner answers? That's our next video.",
          "sub": "Mỗi kỹ năng vài phút một ngày. Lịch mẫu và câu trả lời bữa cơm? Ở bài tiếp theo.",
          "keys": [
            "vài phút một ngày"
          ]
        }
      ],
      "ref": "p10,p11"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Tuần 3–6 · Sửa cách nộp",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:weeks three",
            "hl": [
              {
                "text": "cách nộp",
                "at": "l1:how"
              }
            ]
          },
          {
            "id": "e-n",
            "t": "text",
            "text": "Số lượng",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l1:how many",
            "color": "muted"
          },
          {
            "id": "e-nx",
            "t": "strike",
            "over": "e-n",
            "at": "l1:flyers"
          },
          {
            "id": "e-h",
            "t": "text",
            "text": "Cách nộp ✓",
            "x": 8272,
            "y": 160,
            "size": 56,
            "at": "l1:how",
            "color": "accent"
          },
          {
            "id": "e-few",
            "t": "text",
            "text": "Ít mà chuẩn: CV theo từng tin",
            "x": 7932,
            "y": 250,
            "size": 44,
            "at": "l3:tailored",
            "hl": [
              {
                "text": "theo từng tin",
                "at": "l3:tailored"
              }
            ]
          },
          {
            "id": "e-mit",
            "t": "text",
            "text": "MIT: bắt đầu từ người đã quen",
            "x": 7932,
            "y": 340,
            "size": 44,
            "at": "l4:already",
            "hl": [
              {
                "text": "người đã quen",
                "at": "l4:already know"
              }
            ]
          },
          {
            "id": "e-g",
            "t": "text",
            "text": "trường · thực tập · nhà · sở thích",
            "x": 7932,
            "y": 410,
            "size": 36,
            "at": "l4:school",
            "color": "muted"
          },
          {
            "id": "e-bk",
            "t": "text",
            "text": "Phỏng vấn thông tin: 20–30 phút",
            "x": 7932,
            "y": 500,
            "size": 44,
            "at": "l5:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "20–30 phút",
                "at": "l5:thirty minutes"
              }
            ]
          },
          {
            "id": "e-bk2",
            "t": "text",
            "text": "để hiểu nghề, không xin việc",
            "x": 7932,
            "y": 570,
            "size": 40,
            "at": "l5:learn"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: MIT CAPD, How to network; UC Berkeley Career Engagement",
            "x": 7932,
            "y": 720,
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
          "say": "Stop two, weeks three to six. No calls? Usually it's how you apply, not how many. Not flyers in the rain.",
          "sub": "Chặng hai, tuần ba đến sáu. Không ai gọi? Thường do cách nộp, không do số lượng. Đừng phát tờ rơi dưới mưa.",
          "keys": [
            "cách nộp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Send fewer, each CV tailored to the role. And talk to people who do the job.",
          "sub": "Nộp ít hơn, mỗi CV chỉnh theo từng vị trí. Và hỏi chuyện người đang làm nghề.",
          "keys": [
            "chỉnh theo từng vị trí"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "MIT's career centre: start with people you already know. School, internship, family, hobbies.",
          "sub": "Trung tâm Nghề nghiệp MIT: bắt đầu từ người đã quen. Trường học, nơi thực tập, gia đình, sở thích.",
          "keys": [
            "người đã quen"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Berkeley calls it an informational interview: twenty to thirty minutes to learn about a field. Not to ask for a job.",
          "sub": "Berkeley gọi là phỏng vấn thông tin: 20 đến 30 phút để tìm hiểu nghề, không phải xin việc.",
          "keys": [
            "phỏng vấn thông tin"
          ]
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s12",
      "module": "BRK-04",
      "data": {
        "title": "Tin nhắn gửi chị khoá trên",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Chị ơi công ty chị còn tuyển không, em gửi CV nhé",
        "right": "Chị dành 20 phút kể em nghe một ngày làm việc ạ?",
        "wrongIllus": "page-facing-up",
        "rightIllus": "hot-beverage"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before: is your company hiring? Here's my CV.",
          "sub": "Trước: công ty chị còn tuyển không, em gửi CV nhé."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: twenty minutes, tell me about your day?",
          "sub": "Sau: chị dành 20 phút kể em nghe một ngày làm việc?",
          "keys": [
            "20 phút"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p14"
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
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "label": "Tin nhắn sau khi sửa",
              "actor": {
                "id": "thao",
                "side": "left"
              },
              "contact": {
                "name": "Chị Lan (khoá trên, kiểm toán)",
                "illus": "woman-office-worker"
              },
              "messages": [
                {
                  "from": "me",
                  "text": "Em là Thảo, khoá sau chị ở khoa Kế toán. Em đang tìm hiểu nghề kiểm toán, chị có thể dành 20 phút kể em nghe một ngày làm việc của chị không ạ?",
                  "at": "l2"
                },
                {
                  "from": "them",
                  "text": "Được em, sáng thứ Bảy nhé!",
                  "at": "l5"
                }
              ]
            },
            "at": "l1",
            "caption": "Tuần 4 · gửi lúc 9:30 sáng",
            "icon": "mobile-phone"
          },
          {
            "id": "e-hire",
            "t": "text",
            "text": "Xin việc → dễ bị lờ",
            "x": 7932,
            "y": 640,
            "size": 40,
            "at": "l3:ignore",
            "color": "muted"
          },
          {
            "id": "e-adv",
            "t": "text",
            "text": "Xin lời khuyên → dễ được nghe",
            "x": 8732,
            "y": 690,
            "size": 40,
            "at": "l6:advice",
            "color": "accent",
            "hl": [
              {
                "text": "lời khuyên",
                "at": "l6:advice"
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
          "say": "Week four. Thảo writes to Lan, an older student from her faculty, now an auditor.",
          "sub": "Tuần bốn. Thảo nhắn chị Lan, chị khoá trên cùng khoa, giờ làm kiểm toán.",
          "keys": [
            "chị Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'm Thảo, from your faculty. I'm exploring auditing. Could you spare twenty minutes to tell me about your work day?",
          "sub": "Em là Thảo, khoá sau chị ở khoa Kế toán. Em đang tìm hiểu nghề kiểm toán, chị dành 20 phút kể em nghe một ngày làm việc nhé?",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The old one asks about hiring, which she rarely decides. Easy to ignore.",
          "sub": "Bản cũ hỏi chuyện tuyển dụng, điều chị ít khi tự quyết. Dễ bị lờ đi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The new one asks a small favour, with a clear time. Easy to say yes.",
          "sub": "Bản mới xin một việc nhỏ, rõ thời gian. Dễ nhận lời.",
          "keys": [
            "Dễ nhận lời"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Sure. Saturday morning?",
          "sub": "Được em, sáng thứ Bảy nhé!"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Asking for advice gets heard more easily than asking for a job.",
          "sub": "Xin lời khuyên thì dễ được nghe hơn xin việc.",
          "keys": [
            "Xin lời khuyên"
          ]
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "Tiền cạn dần: nhận việc tạm có phải là bỏ cuộc?",
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
          "say": "Savings shrinking. Is taking a temp job the same as giving up?",
          "sub": "Tiền cạn dần. Nhận việc tạm có phải là bỏ cuộc?",
          "keys": [
            "bỏ cuộc"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s15",
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
            "text": "④ Tuần 5–10 · Việc tạm",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:ten"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "worried"
                }
              ],
              "props": [
                "desktop-computer",
                "wrench"
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
            "caption": "Ca chiều · cửa hàng máy tính",
            "icon": "desktop-computer"
          },
          {
            "id": "f-no",
            "t": "text",
            "text": "Việc tạm = bỏ cuộc?",
            "x": 60,
            "y": 1260,
            "size": 52,
            "at": "l2:give up",
            "color": "muted"
          },
          {
            "id": "f-nox",
            "t": "strike",
            "over": "f-no",
            "at": "l3:Not at all"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "+ thu nhập",
            "x": 60,
            "y": 1360,
            "size": 48,
            "at": "l3:income"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "+ nhịp sinh hoạt",
            "x": 60,
            "y": 1435,
            "size": 48,
            "at": "l3:routine"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "+ kỹ năng chuyển đổi",
            "x": 60,
            "y": 1510,
            "size": 48,
            "at": "l3:transferable",
            "color": "accent",
            "hl": [
              {
                "text": "chuyển đổi",
                "at": "l3:transferable"
              }
            ]
          },
          {
            "id": "f-sk",
            "t": "text",
            "text": "giao tiếp · nhóm · thời gian",
            "x": 60,
            "y": 1600,
            "size": 38,
            "at": "l4:communication",
            "color": "muted"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Giữ giờ cho việc tìm chính",
            "x": 60,
            "y": 1700,
            "size": 50,
            "at": "l5:guard",
            "color": "accent",
            "hl": [
              {
                "text": "Giữ giờ",
                "at": "l5:mornings"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: UNC Charlotte University Career Center",
            "x": 900,
            "y": 1810,
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
          "say": "Stop three, weeks five to ten. Meet Dũng, Thảo's high school friend, IT graduate, four months without a job.",
          "sub": "Chặng ba, tuần năm đến mười. Đây là Dũng, bạn cấp ba của Thảo, cử nhân công nghệ thông tin, bốn tháng chưa có việc.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I took shifts at a computer shop. Did I just give up?",
          "sub": "Mình nhận ca ở cửa hàng máy tính. Vậy là mình bỏ cuộc rồi à?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not at all. A temp job brings income, a routine, and transferable skills.",
          "sub": "Không hề. Việc tạm cho bạn thu nhập, nhịp sinh hoạt, và kỹ năng chuyển đổi.",
          "keys": [
            "kỹ năng chuyển đổi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "UNC Charlotte's career centre means skills like communication, teamwork, problem solving and time management.",
          "sub": "Theo Trung tâm Nghề nghiệp UNC Charlotte: giao tiếp, làm việc nhóm, giải quyết vấn đề, quản lý thời gian."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Then I guard my mornings for the real job search.",
          "sub": "Vậy mình giữ buổi sáng cho việc tìm việc chính.",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 800
        }
      ],
      "ref": "p16"
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
            "text": "⑤ Học thêm · Đọc tin trước",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:learning",
            "hl": [
              {
                "text": "Đọc tin trước",
                "at": "l7:Read"
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "money-with-wings"
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
            "at": "l1:course",
            "caption": "Tối · quảng cáo khoá học",
            "icon": "money-with-wings"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A: đóng tiền trước",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l3:Way A",
            "color": "coral"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "→ tin tuyển hỏi kỹ năng khác",
            "x": 2058,
            "y": 1335,
            "size": 40,
            "at": "l3:other",
            "color": "muted"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: đọc tin → học miễn phí",
            "x": 2028,
            "y": 1430,
            "size": 50,
            "at": "l4:Way B",
            "color": "accent"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "→ dự án nhỏ đưa vào CV",
            "x": 2058,
            "y": 1505,
            "size": 40,
            "at": "l4:project"
          },
          {
            "id": "g-10",
            "t": "text",
            "text": "~10 tin · gạch chân chỗ lặp",
            "x": 2028,
            "y": 1610,
            "size": 40,
            "at": "l6:ten",
            "hl": [
              {
                "text": "~10 tin",
                "at": "l6:ten"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Đọc tin trước, mở ví sau",
            "x": 2028,
            "y": 1710,
            "size": 58,
            "at": "l7:wallet",
            "color": "accent",
            "hl": [
              {
                "text": "mở ví sau",
                "at": "l7:wallet"
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
          "say": "Stop four, learning. Dũng spots a pricey course: job guaranteed.",
          "sub": "Chặng bốn, học thêm. Dũng thấy quảng cáo: khoá học đắt tiền, “cam kết việc làm”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Job guaranteed! Ok, let's do it. Paying tonight!",
          "sub": "Cam kết việc làm! Ok, làm luôn. Tối nay đóng tiền!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Way A: he pays first, then finds his target ads mostly ask for other skills.",
          "sub": "Cách A: đóng tiền trước, rồi mới thấy tin tuyển dụng mình muốn chủ yếu hỏi kỹ năng khác."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Way B: ads first, the repeated skills learned for free, plus a small project for his CV.",
          "sub": "Cách B: đọc tin trước, học kỹ năng lặp lại bằng tài liệu miễn phí, thêm dự án nhỏ vào CV."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Slower start, but every study hour hits what employers ask for.",
          "sub": "Cách B chậm vài ngày đầu, nhưng mỗi giờ học đều trúng điều nhà tuyển dụng hỏi.",
          "keys": [
            "mỗi giờ học đều trúng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Fine. About ten ads first, underline what repeats, then choose.",
          "sub": "Thôi được. Đọc khoảng mười tin trước, gạch chân cái lặp lại, rồi mới chọn.",
          "face": "thinking"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Read the job ads first. Open your wallet second.",
          "sub": "Đọc tin tuyển dụng trước, mở ví sau.",
          "keys": [
            "mở ví sau"
          ]
        }
      ],
      "ref": "p17,p18,p19"
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
          },
          {
            "at": 150,
            "fit": "H",
            "ms": 900
          },
          {
            "at": "l2:end",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4b:police",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Suốt 90 ngày · Giữ tiền",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:ninety",
            "hl": [
              {
                "text": "Giữ tiền",
                "at": "l1:money"
              }
            ]
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "label": "Tin nhắn quảng cáo vay",
              "actor": {
                "id": "thao",
                "side": "left"
              },
              "contact": {
                "name": "“Vay nhanh, duyệt ngay”",
                "illus": "money-with-wings"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Duyệt vay siêu nhanh! Chỉ cần ảnh căn cước và cho phép truy cập danh bạ.",
                  "at": "l4"
                }
              ]
            },
            "at": "l2:end",
            "caption": "Tháng thứ 2 · tin nhắn lạ",
            "icon": "money-with-wings"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l2:income",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1246,
            "size": 56,
            "at": "l2:income+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Ghi mọi nguồn thu",
            "x": 4062,
            "y": 1250,
            "size": 46,
            "at": "l2:income+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1340,
            "w": 44,
            "h": 44,
            "at": "l2:week",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1326,
            "size": 56,
            "at": "l2:week+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Ghi chi từng tuần",
            "x": 4062,
            "y": 1330,
            "size": 46,
            "at": "l2:week+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1420,
            "w": 44,
            "h": 44,
            "at": "l2:due",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1406,
            "size": 56,
            "at": "l2:due+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Đánh dấu ngày đến hạn",
            "x": 4062,
            "y": 1410,
            "size": 46,
            "at": "l2:due+200"
          },
          {
            "id": "h-app",
            "t": "text",
            "text": "App vay: danh bạ · phạt nặng",
            "x": 3996,
            "y": 1540,
            "size": 44,
            "at": "l4b:contacts",
            "color": "coral",
            "hl": [
              {
                "text": "danh bạ",
                "at": "l4b:contacts"
              }
            ]
          },
          {
            "id": "h-app2",
            "t": "text",
            "text": "· gọi cho người thân",
            "x": 3996,
            "y": 1610,
            "size": 44,
            "at": "l4b:relatives",
            "color": "coral"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: CFPB (Hoa Kỳ); Công an TP Hải Phòng, cảnh báo 7/2022",
            "x": 3996,
            "y": 1810,
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
          "say": "Stop five, all ninety days: money. With no salary, every unplanned week can become a small debt.",
          "sub": "Chặng năm, suốt chín mươi ngày: giữ tiền. Chưa có lương, mỗi tuần không kế hoạch dễ thành một khoản nợ nhỏ.",
          "keys": [
            "một khoản nợ nhỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The CFPB suggests: list every income source, track spending one week at a time, and mark each bill's due date.",
          "sub": "CFPB gợi ý: ghi mọi nguồn thu, ghi chi tiêu từng tuần một, đánh dấu ngày đến hạn từng khoản."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Approved fast? Just my ID and my contacts?",
          "sub": "Duyệt nhanh? Chỉ cần căn cước và danh bạ?",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l4b",
          "lang": "en",
          "who": "det",
          "say": "Hai Phong police warned: such apps grab your contacts, charge heavy late fines, and call relatives to collect.",
          "sub": "Công an Hải Phòng từng cảnh báo: các ứng dụng này đòi danh bạ, phạt trả chậm rất nặng, gọi cho người thân để đòi nợ.",
          "keys": [
            "gọi cho người thân"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A loan that reads your phonebook? A debt collector holding your family's numbers.",
          "sub": "Khoản vay đòi đọc danh bạ? Là người đòi nợ cầm sẵn số cả nhà bạn."
        }
      ],
      "ref": "p20,p21"
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
          },
          {
            "at": "l3",
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
            "text": "⑦ Luật nói gì?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:forget"
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
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "classical-building"
              ],
              "camera": [
                {
                  "at": "l3",
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
            "at": "l3",
            "caption": "Trung tâm dịch vụ việc làm",
            "icon": "classical-building"
          },
          {
            "id": "i-law",
            "t": "text",
            "text": "Luật Việc làm 74/2025",
            "x": 5964,
            "y": 1255,
            "size": 50,
            "at": "l1:seventy-four",
            "hl": [
              {
                "text": "74/2025",
                "at": "l1:seventy-four"
              }
            ]
          },
          {
            "id": "i-eff",
            "t": "text",
            "text": "hiệu lực từ 1/1/2026",
            "x": 5964,
            "y": 1330,
            "size": 42,
            "at": "l1:January",
            "color": "muted"
          },
          {
            "id": "i-free",
            "t": "text",
            "text": "Miễn phí: tư vấn, giới thiệu việc",
            "x": 5964,
            "y": 1410,
            "size": 42,
            "at": "l2:free",
            "color": "accent",
            "hl": [
              {
                "text": "Miễn phí",
                "at": "l2:free"
              }
            ]
          },
          {
            "id": "i-ub",
            "t": "text",
            "text": "Trợ cấp thất nghiệp:",
            "x": 5964,
            "y": 1510,
            "size": 46,
            "at": "l5:benefit"
          },
          {
            "id": "i-12",
            "t": "text",
            "text": "đủ 12 tháng đóng trong 24 tháng",
            "x": 5964,
            "y": 1580,
            "size": 40,
            "at": "l5:twelve",
            "hl": [
              {
                "text": "12 tháng",
                "at": "l5:twelve"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "nộp hồ sơ trong 3 tháng",
            "x": 5964,
            "y": 1645,
            "size": 40,
            "at": "l5:three months"
          },
          {
            "id": "i-new",
            "t": "text",
            "text": "Mới ra trường: thường chưa đủ",
            "x": 5964,
            "y": 1720,
            "size": 44,
            "at": "l6:usually",
            "color": "coral",
            "hl": [
              {
                "text": "thường chưa đủ",
                "at": "l6:usually"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Luật Việc làm số 74/2025/QH15: khoản 2 Điều 4; Điều 38",
            "x": 6804,
            "y": 1810,
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
          "say": "A stop people forget: the Employment Law, number seventy-four, in force since January twenty twenty-six.",
          "sub": "Một chặng hay bị quên: Luật Việc làm số 74/2025, hiệu lực từ 1/1/2026."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It sets free job counselling, referral and labour market information through public employment services.",
          "sub": "Luật nêu chính sách tư vấn, giới thiệu việc làm miễn phí, thông tin thị trường lao động qua dịch vụ việc làm công.",
          "keys": [
            "miễn phí"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "So I can ask the city's employment centre about counselling and job fairs? For free?",
          "sub": "Vậy mình hỏi trung tâm dịch vụ việc làm thành phố về tư vấn, phiên giao dịch việc làm? Miễn phí ạ?",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Unemployment benefit is different: twelve months of contributions within twenty-four, and apply within three months.",
          "sub": "Trợ cấp thất nghiệp thì khác: phải đóng đủ 12 tháng trong 24 tháng, và nộp hồ sơ trong 3 tháng.",
          "keys": [
            "Trợ cấp thất nghiệp"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Fresh graduates who never paid in usually don't qualify. Rules may change: check with the centre.",
          "sub": "Người mới ra trường chưa từng đóng thì thường chưa đủ điều kiện. Văn bản có thể đổi, nên hỏi lại trung tâm.",
          "keys": [
            "thường chưa đủ điều kiện"
          ]
        }
      ],
      "ref": "p22,p23"
    },
    {
      "id": "s19",
      "module": "BRK-08",
      "data": {
        "title": "Lịch 90 ngày",
        "points": [
          {
            "label": "Tuần 1–2",
            "sub": "Lịch, chọn vị trí",
            "illus": "alarm-clock"
          },
          {
            "label": "Tuần 3–6",
            "sub": "Sửa CV, hẹn hỏi nghề",
            "illus": "memo"
          },
          {
            "label": "Tuần 5–10",
            "sub": "Việc tạm, học thêm",
            "illus": "briefcase"
          },
          {
            "label": "Suốt 90 ngày",
            "sub": "Ghi chi, xem lại",
            "illus": "spiral-calendar"
          }
        ],
        "current": 3
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Routine, tailored CVs, one or two chats a week.",
          "sub": "Lịch sinh hoạt, CV theo vị trí, một, hai cuộc hỏi nghề mỗi tuần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then a temp job, one missing skill. And review monthly.",
          "sub": "Rồi việc tạm, một kỹ năng còn thiếu. Và xem lại cuối mỗi tháng.",
          "keys": [
            "xem lại cuối mỗi tháng"
          ]
        }
      ],
      "ref": "p24"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Cuối tháng 1 · 22:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:month"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "spiral-calendar"
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
            "at": "l1:desk",
            "caption": "Cùng bàn ấy · 22:00, không phải 2:00",
            "icon": "laptop"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "2 vị trí nhắm tới ✓",
            "x": 7932,
            "y": 1255,
            "size": 46,
            "at": "l2:Two target"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "CV sửa theo từng tin ✓",
            "x": 7932,
            "y": 1330,
            "size": 46,
            "at": "l2:tailored"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Thứ Bảy: cà phê với chị Lan ✓",
            "x": 7932,
            "y": 1405,
            "size": 46,
            "at": "l2:Saturday"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Có công mài sắt…”",
            "x": 7932,
            "y": 1520,
            "size": 56,
            "at": "l3:grind",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "→ mài một thanh, đúng chỗ",
            "x": 7932,
            "y": 1600,
            "size": 48,
            "at": "l3:right side",
            "color": "accent",
            "hl": [
              {
                "text": "đúng chỗ",
                "at": "l3:right side"
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
          "say": "End of month one. Same desk, same laptop. Ten p.m., not two a.m.",
          "sub": "Cuối tháng thứ nhất. Vẫn cái bàn ấy, laptop ấy. Mười giờ tối, không phải hai giờ sáng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Two target roles. Tailored CVs. Coffee with Lan on Saturday. Laptop off.",
          "sub": "Hai vị trí nhắm tới. CV sửa theo từng tin. Thứ Bảy cà phê với chị Lan. Gập máy.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Grind the iron long enough, it becomes a needle. Thảo still grinds. One bar, on the right side.",
          "sub": "“Có công mài sắt, có ngày nên kim.” Thảo vẫn mài. Có điều mài một thanh, đúng chỗ.",
          "keys": [
            "đúng chỗ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "outro"
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
            "ms": 1200
          },
          {
            "at": "l1",
            "fit": "B",
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
            "x": 3468,
            "y": 450,
            "at": "l1+900"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6544,
            "y": 480,
            "at": "l2+900"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 8572,
            "y": 250,
            "at": "l3+900"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 2728,
            "y": 1710,
            "at": "l4+900"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; quy định có thể đổi, hỏi trung tâm dịch vụ việc làm nơi bạn ở.",
            "x": 7932,
            "y": 1805,
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
          "say": "So: no job yet is a stage, not a sentence.",
          "sub": "Tóm lại: chưa có việc là một giai đoạn, không phải bản án.",
          "keys": [
            "một giai đoạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Give each day a shape.",
          "sub": "Cho mỗi ngày một hình dạng.",
          "keys": [
            "một hình dạng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Apply fewer, tailor more, ask for advice.",
          "sub": "Nộp ít mà chuẩn, xin lời khuyên trước.",
          "keys": [
            "Nộp ít mà chuẩn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Read the ads first, open your wallet second.",
          "sub": "Đọc tin trước, mở ví sau.",
          "keys": [
            "mở ví sau"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Ninety days won't promise a job. They give you a method, your strength, and no debts.",
          "sub": "Ba tháng không hứa chắc có việc, nhưng giúp bạn tìm có phương pháp, giữ sức và không mắc nợ.",
          "keys": [
            "không mắc nợ"
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
        "q": "Which takeaway sums up the misunderstanding about months without a job?",
        "options": [
          "Without a job after graduation, your career is finished before it begins",
          "Having no job yet is a stage of life, not a final sentence",
          "Keep quiet about unemployment, because talking about it only makes it worse"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "seedling",
        "why": "Chưa có việc là một giai đoạn phổ biến ở tuổi trẻ, không phải lời phán xét về bạn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which takeaway sums up the misunderstanding about months without a job?",
          "sub": "Câu rút ra nào tóm lại hiểu lầm về những tháng chưa có việc?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A stage, not a final sentence.",
          "sub": "Một giai đoạn, không phải bản án."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "What you change is how you search.",
          "sub": "Điều bạn đổi được là cách tìm."
        }
      ],
      "ref": "questions[7]"
    },
    {
      "id": "s23",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi viết lịch cho tuần đầu tiên"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, write the schedule for your first week.",
          "sub": "Tối nay, viết lịch cho tuần đầu tiên của bạn."
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
  "notes": "#145 bài MỚI (bài tổng chuỗi graduates-still-job-hunting) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21 (câu hỏi để đoán sai): 2:00 sáng, Thảo nghĩ “chỉ mình mình” → Đét hỏi thất nghiệp tuổi 15–24 ngang mức chung hay gần gấp 4 → BRK-03 lật: 8,87% vs 2,22% (p1). Dòng thời gian: Thảo tháng thứ 5 sau tốt nghiệp — 2:00 sáng → tua lại bữa cơm họ hàng tối thứ Bảy (bà Tư hỏi lương bạn cùng lớp, p8) → “Khoan đã!” tuần sau cuộc gọi lạ, tua lại gập máy viết kế hoạch (p7, p9) → tuần 1–2 ngày có khung + WHO → tuần 3–6 sửa cách nộp + tin nhắn chị Lan (✍️ p14, “anh khoá trên” đổi thành chị Lan theo dàn nhân vật chuỗi) → tuần 5–10 việc tạm (Dũng, cửa hàng máy tính) → học thêm Cách A/B (🔀 p18) → giữ tiền + cảnh báo app vay → luật (74/2025, Điều 4, 38) → BRK-08 lịch 90 ngày (p24) → cuối tháng 1, 22:00, cùng bàn. Nhân vật: Thảo, Bà Tư, Dũng, chị Lan (qua tin nhắn). Chi tiết minh hoạ tự đặt (không phải số liệu): “sáu tiếng”, cửa hàng máy tính, “sáng thứ Bảy”, giờ gửi tin. Số chỉ từ bài: 2,22% · 8,87% · gần gấp 4 · 1,6 triệu · hơn 11% · hơn 195.000 · 5 tháng · 4 tháng · 5 kỹ năng WHO · 20–30 phút · 20 phút · ~10 tin · 12/24 tháng · 3 tháng · 1/1/2026 · 90 ngày, tuần 1–2/3–6/5–10. Ngắt nhịp: BRK-03 s01, BRK-06 s05, BRK-04 s12, BRK-07 s14, BRK-08 s19, DLG-01 s08. Câu neo: “Có công mài sắt, có ngày nên kim” → “mài một thanh, đúng chỗ”. Câu đố questions[7]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s00",
    "close": "s20"
  }
};
