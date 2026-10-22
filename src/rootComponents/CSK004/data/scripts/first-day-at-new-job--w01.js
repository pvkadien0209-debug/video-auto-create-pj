// Kịch bản video W lần 3 (#110) — "Ngày làm việc đầu tiên: chuẩn bị và cư xử thế nào?" · chuỗi "Ba tháng đầu ở chỗ làm mới"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "first-day-at-new-job--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "new-employees",
    "slug": "first-day-at-new-job",
    "door": "ky-nang",
    "level": "B1",
    "title": "Ngày làm việc đầu tiên: chuẩn bị và cư xử thế nào?",
    "series": "Ba tháng đầu ở chỗ làm mới"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#143 dựng lại theo hạt nhân #136 (bang-trang-kit): Đét đứng trái + một bảng trắng 10 ô đi theo ngày đầu đi làm của Thảo — A mở (Hơn 10 cái tên, tối Chủ nhật), B câu hỏi chính (chấm gì? Tiên học lễ…) + 7 chặng, C ① tối Chủ nhật xếp túi (p1–p4), D ② 7:45 sớm 15 phút (p5–p8), E ③ 8:00 chào cả nhóm, nhớ tên (p9–p11), F ④ 10:00 chưa có việc (p14–p19), G ⑤ 12:00 ăn trưa (p23–p24), Khoan đã! 14:00 máy in quên tên (p12–p13, toàn màn), H ⑥ 15:00 phần mềm cũ (p20–p22), I ⑦ 17:00 trước khi về (p25, p27), J tối thứ Hai xem sổ (p26) khép vòng với tối Chủ nhật. Đổi tên: Ngọc/Quyên/Thanh → Thảo; Khang → Thảo; trưởng nhóm/người hướng dẫn/chị trưởng phòng → Cô Hoa; Dũng = đồng nghiệp bàn bên; chị Hằng chỉ nhắc tên. Câu đố questions[24]. Bản trước (W lần 3, #110): w143/bak/first-day-at-new-job--w01.js.",
  "narrator": "det",
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
            "id": "a-10",
            "t": "text",
            "text": "Hơn 10 cái tên",
            "x": 60,
            "y": 130,
            "size": 130,
            "at": "l1:ten",
            "color": "accent",
            "hl": [
              {
                "text": "10 cái tên",
                "at": "l1:names"
              }
            ]
          },
          {
            "id": "a-10b",
            "t": "text",
            "text": "chỉ trong một buổi sáng",
            "x": 70,
            "y": 320,
            "size": 56,
            "at": "l1:one single morning"
          },
          {
            "id": "a-all",
            "t": "text",
            "text": "Ta tưởng: nhớ hết?",
            "x": 70,
            "y": 420,
            "size": 52,
            "at": "l2:remember",
            "color": "muted"
          },
          {
            "id": "a-allx",
            "t": "strike",
            "over": "a-all",
            "at": "l3:nobody"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Theo bài “Ngày làm việc đầu tiên” · nguồn: SHRM (Maurer), Bauer 2010, MIT Sloan",
            "x": 60,
            "y": 724,
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
          "say": "More than ten new names, in one single morning. Welcome to day one.",
          "sub": "Hơn mười cái tên mới, chỉ trong một buổi sáng. Chào mừng ngày đầu đi làm.",
          "keys": [
            "Hơn mười cái tên mới"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "We think: easy, I'll remember them all.",
          "sub": "Còn ta thì nghĩ: dễ ợt, mình nhớ hết."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Spoiler: nobody does. Not without a little trick.",
          "sub": "Nói trước: chẳng ai nhớ hết đâu. Trừ khi có mẹo.",
          "keys": [
            "có mẹo"
          ]
        }
      ],
      "ref": "intro,p12"
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
            "at": "l2",
            "fit": [
              "a-thao"
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
            "id": "a-thao",
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
                  "pose": "think",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "t-shirt",
                "alarm-clock"
              ]
            },
            "at": "l1",
            "caption": "Tối Chủ nhật · phòng trọ",
            "icon": "crescent-moon"
          },
          {
            "id": "a-mai",
            "t": "text",
            "text": "Mai: ngày đầu đi làm",
            "x": 920,
            "y": 650,
            "size": 50,
            "at": "l2:tomorrow",
            "hl": [
              {
                "text": "ngày đầu",
                "at": "l2:first day"
              }
            ]
          },
          {
            "id": "a-nan",
            "t": "text",
            "text": "“Vạn sự khởi đầu nan”",
            "x": 60,
            "y": 540,
            "size": 56,
            "at": "l5:beginning",
            "color": "accent",
            "hl": [
              {
                "text": "khởi đầu nan",
                "at": "l5:hard"
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
          "who": "thao",
          "say": "Tomorrow is my first day at a new office. What do I wear? What time? Who do I meet?",
          "sub": "Mai là ngày đầu mình đi làm chỗ mới. Mặc gì đây? Mấy giờ đi? Gặp ai?",
          "face": "worried",
          "keys": [
            "ngày đầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sunday night, and her head is a busy market.",
          "sub": "Tối Chủ nhật, đầu cô như cái chợ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "What if I just sit there all day like a plant?",
          "sub": "Lỡ cả ngày ngồi im như chậu cây thì sao?",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents said: every beginning is hard. Less hard, if you know the rules.",
          "sub": "Ông bà nói: “Vạn sự khởi đầu nan.” Biết luật chơi thì bớt nan.",
          "keys": [
            "luật chơi"
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
            "text": "Ngày đầu, người ta chấm gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:judge",
            "hl": [
              {
                "text": "chấm gì",
                "at": "l1:judge+300"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: làm được bao nhiêu",
            "x": 2028,
            "y": 160,
            "size": 52,
            "at": "l2:not",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:nobody"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là:",
            "x": 2028,
            "y": 250,
            "size": 56,
            "at": "l3:three",
            "color": "accent"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① đến đúng giờ",
            "x": 2058,
            "y": 330,
            "size": 54,
            "at": "l3:on time",
            "hl": [
              {
                "text": "đúng giờ",
                "at": "l3:on time+200"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② chào hỏi tử tế",
            "x": 2058,
            "y": 410,
            "size": 54,
            "at": "l3:greeted",
            "hl": [
              {
                "text": "tử tế",
                "at": "l3:kindly"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ chịu nghe, chịu ghi",
            "x": 2058,
            "y": 490,
            "size": 54,
            "at": "l4:listened",
            "hl": [
              {
                "text": "chịu ghi",
                "at": "l4:notebook"
              }
            ]
          },
          {
            "id": "b-le",
            "t": "text",
            "text": "“Tiên học lễ, hậu học văn”",
            "x": 2848,
            "y": 250,
            "size": 56,
            "at": "l5:manners",
            "color": "accent",
            "hl": [
              {
                "text": "Tiên học lễ",
                "at": "l5:first"
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
          "say": "So, on day one, what do people actually judge you on?",
          "sub": "Vậy ngày đầu, người ta thực ra chấm bạn ở điểm nào?",
          "keys": [
            "chấm bạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not how much work you finish. Nobody expects you to save the company.",
          "sub": "Không phải làm được bao nhiêu việc. Chẳng ai mong bạn cứu cả công ty.",
          "keys": [
            "Không phải làm được bao nhiêu việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "They remember three things: you came on time, you greeted people kindly.",
          "sub": "Họ nhớ ba điều. Bạn đến đúng giờ. Bạn chào hỏi tử tế.",
          "keys": [
            "đúng giờ",
            "tử tế"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And you listened, with your notebook open.",
          "sub": "Và bạn chịu nghe, chịu ghi.",
          "keys": [
            "chịu nghe, chịu ghi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "As school gates say: manners first, knowledge later.",
          "sub": "Cổng trường mình viết sẵn rồi: “Tiên học lễ, hậu học văn.”"
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
          }
        ],
        "items": [
          {
            "id": "b-day",
            "t": "text",
            "text": "7 chặng · trọn ngày đầu",
            "x": 2028,
            "y": 575,
            "size": 48,
            "at": "l1:seven stops",
            "hl": [
              {
                "text": "trọn ngày đầu",
                "at": "l1:whole"
              }
            ]
          },
          {
            "id": "b-s0",
            "t": "box",
            "x": 2028,
            "y": 650,
            "w": 210,
            "h": 96,
            "at": "l2+0",
            "color": "muted",
            "stroke": 4
          },
          {
            "id": "b-s1",
            "t": "box",
            "x": 2260,
            "y": 650,
            "w": 210,
            "h": 96,
            "at": "l2+330",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s2",
            "t": "box",
            "x": 2492,
            "y": 650,
            "w": 210,
            "h": 96,
            "at": "l2+660",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s3",
            "t": "box",
            "x": 2724,
            "y": 650,
            "w": 210,
            "h": 96,
            "at": "l2+990",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s4",
            "t": "box",
            "x": 2956,
            "y": 650,
            "w": 210,
            "h": 96,
            "at": "l2+1320",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s5",
            "t": "box",
            "x": 3188,
            "y": 650,
            "w": 210,
            "h": 96,
            "at": "l2+1650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-s6",
            "t": "box",
            "x": 3420,
            "y": 650,
            "w": 210,
            "h": 96,
            "at": "l2+1980",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "Tối CN",
            "x": 2050,
            "y": 668,
            "size": 44,
            "at": "l2+120"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "7:45",
            "x": 2282,
            "y": 668,
            "size": 44,
            "at": "l2+450"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "8:00",
            "x": 2514,
            "y": 668,
            "size": 44,
            "at": "l2+780"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "10:00",
            "x": 2746,
            "y": 668,
            "size": 44,
            "at": "l2+1110"
          },
          {
            "id": "b-st4",
            "t": "text",
            "text": "12:00",
            "x": 2978,
            "y": 668,
            "size": 44,
            "at": "l2+1440"
          },
          {
            "id": "b-st5",
            "t": "text",
            "text": "15:00",
            "x": 3210,
            "y": 668,
            "size": 44,
            "at": "l2+1770"
          },
          {
            "id": "b-st6",
            "t": "text",
            "text": "17:00",
            "x": 3442,
            "y": 668,
            "size": 44,
            "at": "l2+2100"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "We follow Thảo's whole first day, in seven stops. Seatbelts on.",
          "sub": "Mình theo Thảo trọn ngày đầu, qua bảy chặng. Thắt dây an toàn nhé.",
          "keys": [
            "bảy chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sunday night, then seven forty-five, eight, ten, noon, three and five.",
          "sub": "Tối Chủ nhật, rồi bảy giờ bốn lăm, tám giờ, mười giờ, trưa, ba giờ và năm giờ chiều."
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
            "zoom": 1.2,
            "ms": 700
          },
          {
            "at": "l4:clothes",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tối Chủ nhật: xếp túi",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:sunday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "backpack",
                "notebook"
              ]
            },
            "at": "l1:packing",
            "caption": "Tối Chủ nhật · xếp túi",
            "icon": "backpack"
          },
          {
            "id": "c-b0",
            "t": "box",
            "x": 3996,
            "y": 160,
            "w": 44,
            "h": 44,
            "at": "l2:papers",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 138,
            "size": 58,
            "at": "l2:papers+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Giấy tờ nhân sự dặn",
            "x": 4066,
            "y": 150,
            "size": 46,
            "at": "l2:papers+200"
          },
          {
            "id": "c-b1",
            "t": "box",
            "x": 3996,
            "y": 238,
            "w": 44,
            "h": 44,
            "at": "l2:notebook",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 216,
            "size": 58,
            "at": "l2:notebook+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Sổ, bút, điện thoại sạc đầy",
            "x": 4066,
            "y": 228,
            "size": 46,
            "at": "l2:notebook+200"
          },
          {
            "id": "c-b2",
            "t": "box",
            "x": 3996,
            "y": 316,
            "w": 44,
            "h": 44,
            "at": "l3:name",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 294,
            "size": 58,
            "at": "l3:name+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Tên, số người đón",
            "x": 4066,
            "y": 306,
            "size": 46,
            "at": "l3:name+200"
          },
          {
            "id": "c-b3",
            "t": "box",
            "x": 3996,
            "y": 394,
            "w": 44,
            "h": 44,
            "at": "l3:building",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 372,
            "size": 58,
            "at": "l3:building+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Toà nhà, tầng, chỗ gửi xe",
            "x": 4066,
            "y": 384,
            "size": 46,
            "at": "l3:building+200"
          },
          {
            "id": "c-b4",
            "t": "box",
            "x": 3996,
            "y": 472,
            "w": 44,
            "h": 44,
            "at": "l4:clothes",
            "stroke": 5
          },
          {
            "id": "c-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 450,
            "size": 58,
            "at": "l4:clothes+600",
            "color": "accent"
          },
          {
            "id": "c-l4",
            "t": "text",
            "text": "Quần áo chọn sẵn",
            "x": 4066,
            "y": 462,
            "size": 46,
            "at": "l4:clothes+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Sunday night. Thảo stops worrying and starts packing.",
          "sub": "Chặng một: tối Chủ nhật. Thảo thôi lo, bắt đầu xếp túi.",
          "keys": [
            "xếp túi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The papers HR asked for. A notebook, a pen, my phone fully charged.",
          "sub": "Giấy tờ nhân sự dặn. Sổ, bút, điện thoại sạc đầy.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "The name and number of my contact. The building, the floor, the parking spot.",
          "sub": "Tên, số người đón. Toà nhà, tầng, chỗ gửi xe."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And my clothes, chosen tonight. Not at six tomorrow, in a panic.",
          "sub": "Và quần áo chọn từ tối nay, chứ không phải sáu giờ sáng mai cuống cuồng.",
          "face": "happy",
          "keys": [
            "chọn từ tối nay"
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
            "at": "l1",
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
            "id": "c-ask",
            "t": "text",
            "text": "Hỏi trước: giờ, người, giấy tờ",
            "x": 3996,
            "y": 560,
            "size": 50,
            "at": "l3:what time",
            "color": "accent",
            "hl": [
              {
                "text": "giờ, người, giấy tờ",
                "at": "l3:papers"
              }
            ]
          },
          {
            "id": "c-wear",
            "t": "text",
            "text": "Mặc: gọn hơn mọi người chút",
            "x": 3996,
            "y": 630,
            "size": 46,
            "at": "l4:neater",
            "hl": [
              {
                "text": "gọn hơn",
                "at": "l4:neater+200"
              }
            ]
          },
          {
            "id": "c-bed",
            "t": "illus",
            "name": "bed",
            "x": 3996,
            "y": 690,
            "size": 70,
            "at": "l5:sleep"
          },
          {
            "id": "c-sleep",
            "t": "text",
            "text": "Ngủ sớm",
            "x": 4086,
            "y": 700,
            "size": 48,
            "at": "l5:sleep+300",
            "hl": [
              {
                "text": "Ngủ sớm",
                "at": "l5:early"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Nobody told me the time. I'll ask HR today, one day before.",
          "sub": "Chưa ai dặn mấy giờ đến. Hỏi nhân sự ngay hôm nay, trước một ngày.",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Hello, I'm Thảo, the new staff member starting on Monday morning.",
          "sub": "Chào chị, em là Thảo, nhân viên mới bắt đầu sáng thứ Hai.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "What time should I arrive, who should I meet, and what papers should I bring?",
          "sub": "Em nên đến lúc mấy giờ, gặp ai và cần mang giấy tờ gì ạ?",
          "keys": [
            "mấy giờ",
            "giấy tờ gì"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Clothes? Ask HR, or copy the interview day. Just a little neater than everyone.",
          "sub": "Quần áo? Hỏi nhân sự, hoặc nhớ hôm phỏng vấn. Gọn hơn mọi người một chút.",
          "face": "thinking",
          "keys": [
            "Gọn hơn mọi người một chút"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then sleep early. Names and passwords tomorrow, and sleepy brains drop them.",
          "sub": "Rồi ngủ sớm. Mai toàn tên người, mật khẩu; não buồn ngủ là rơi rụng hết.",
          "keys": [
            "ngủ sớm"
          ]
        }
      ],
      "ref": "p2,p3,p4"
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
            "at": "l7",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 7:45: sớm 15 phút",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:seven forty five",
            "hl": [
              {
                "text": "sớm 15 phút",
                "at": "l1:fifteen"
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
              "set": "street",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "stand"
                }
              ],
              "props": [
                "motor-scooter"
              ]
            },
            "at": "l1:gate",
            "caption": "Sáng thứ Hai · 7:45",
            "icon": "motor-scooter"
          },
          {
            "id": "d-i1",
            "t": "illus",
            "name": "motor-scooter",
            "x": 5964,
            "y": 150,
            "size": 80,
            "at": "l3:rode"
          },
          {
            "id": "d-s1",
            "t": "text",
            "text": "Chạy thử đúng giờ cao điểm",
            "x": 6064,
            "y": 160,
            "size": 46,
            "at": "l3:rush hour"
          },
          {
            "id": "d-s2",
            "t": "text",
            "text": "Hỏi chỗ gửi xe",
            "x": 6064,
            "y": 240,
            "size": 46,
            "at": "l4:park"
          },
          {
            "id": "d-s3",
            "t": "text",
            "text": "Cộng giờ tắc, báo thức sớm",
            "x": 6064,
            "y": 320,
            "size": 46,
            "at": "l4:alarm"
          },
          {
            "id": "d-early",
            "t": "text",
            "text": "Quá sớm: cửa chưa mở",
            "x": 6064,
            "y": 400,
            "size": 44,
            "at": "l5:too early",
            "color": "coral"
          },
          {
            "id": "d-rule",
            "t": "text",
            "text": "Thử đường trước → đến sớm",
            "x": 5964,
            "y": 480,
            "size": 56,
            "at": "l7:test",
            "color": "accent",
            "hl": [
              {
                "text": "đến sớm",
                "at": "l7:early"
              }
            ]
          },
          {
            "id": "d-late",
            "t": "text",
            "text": "Trễ? Nhắn trước, kèm giờ đến",
            "x": 5964,
            "y": 570,
            "size": 50,
            "at": "l6:late",
            "hl": [
              {
                "text": "Nhắn trước",
                "at": "l6:message"
              }
            ]
          },
          {
            "id": "d-msg",
            "t": "text",
            "text": "“…em sẽ đến khoảng 8:15 ạ”",
            "x": 5984,
            "y": 645,
            "size": 44,
            "at": "l6:eight fifteen",
            "color": "muted"
          },
          {
            "id": "d-ninja",
            "t": "text",
            "text": "Báo trước > lặng lẽ đến muộn",
            "x": 5964,
            "y": 710,
            "size": 44,
            "at": "l8:telling",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: seven forty five. Thảo is at the gate, fifteen minutes early.",
          "sub": "Chặng hai: bảy giờ bốn lăm. Thảo đã ở cổng, sớm mười lăm phút.",
          "keys": [
            "sớm mười lăm phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Luck? No. Ask her.",
          "sub": "Hên à? Không. Hỏi cô ấy xem."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "The map said fifteen minutes. So I rode it once before, at rush hour. One crossroad, total jam.",
          "sub": "Bản đồ báo mười lăm phút. Mình chạy thử một lần đúng giờ cao điểm. Một ngã tư, tắc cứng.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "So I asked where to park, added time for the jam, and set an earlier alarm.",
          "sub": "Thế là hỏi chỗ gửi xe, cộng giờ tắc, đặt báo thức sớm hơn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Not too early, though. Doors closed, and my contact would feel awkward.",
          "sub": "Nhưng không sớm quá: cửa chưa mở, người đón lại bối rối.",
          "keys": [
            "không sớm quá"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "And if I'm ever late, I message first: sorry, traffic is bad, I'll arrive around eight fifteen.",
          "sub": "Lỡ trễ thì nhắn trước: “Em xin lỗi chị, đường đang tắc, em sẽ đến khoảng tám giờ mười lăm ạ.”",
          "keys": [
            "nhắn trước"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Rule of this stop: test the route before, arrive early on the day.",
          "sub": "Luật chặng này: đi thử hôm trước, đến sớm hôm sau.",
          "keys": [
            "đến sớm hôm sau"
          ]
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Telling first beats sneaking in late like a failed ninja.",
          "sub": "Báo trước hơn lặng lẽ đến muộn kiểu ninja trượt.",
          "keys": [
            "Báo trước"
          ]
        }
      ],
      "ref": "p5,p6,p7,p8"
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
          },
          {
            "at": "l3",
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
            "text": "③ 8:00: chào cả nhóm",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:eight"
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
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "stand"
                }
              ]
            },
            "at": "l1:team",
            "caption": "8:00 · văn phòng",
            "icon": "waving-hand"
          },
          {
            "id": "e-bow",
            "t": "illus",
            "name": "person-bowing",
            "x": 8552,
            "y": 140,
            "size": 110,
            "at": "l4:hello"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Giới thiệu = 3 ý",
            "x": 7932,
            "y": 160,
            "size": 58,
            "at": "l5:three",
            "hl": [
              {
                "text": "3 ý",
                "at": "l5:three"
              }
            ]
          },
          {
            "id": "e-3b",
            "t": "text",
            "text": "tên, bộ phận, việc làm",
            "x": 7932,
            "y": 245,
            "size": 50,
            "at": "l5:team"
          },
          {
            "id": "e-moi",
            "t": "text",
            "text": "“Lời chào cao hơn mâm cỗ”",
            "x": 7932,
            "y": 340,
            "size": 52,
            "at": "l6:greeting",
            "color": "accent",
            "hl": [
              {
                "text": "Lời chào",
                "at": "l6:greeting+200"
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
          "say": "Third stop: eight sharp. Meet the team.",
          "sub": "Chặng ba: đúng tám giờ. Ra mắt cả nhóm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Cô Hoa, team leader and Thảo's guide. Warm heart, zero free time.",
          "sub": "Đây là cô Hoa, trưởng nhóm, người hướng dẫn Thảo. Tốt bụng, nhưng bận tối mặt.",
          "keys": [
            "người hướng dẫn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Everyone, this is Thảo. She starts with us today.",
          "sub": "Cả nhà ơi, đây là Thảo, hôm nay bắt đầu làm với mình.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Hello everyone, I'm Thảo. I've just joined the content team. I hope you'll guide me.",
          "sub": "Em chào anh chị, em là Thảo, mới vào nhóm nội dung. Mong anh chị chỉ bảo thêm ạ.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Name, team, job. Three pieces, one breath, easy to remember.",
          "sub": "Tên, bộ phận, việc làm. Ba ý, một hơi, dễ nhớ.",
          "keys": [
            "Tên, bộ phận, việc làm"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents also said: a greeting is worth more than a feast.",
          "sub": "Ông bà cũng dạy: “Lời chào cao hơn mâm cỗ.”"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p9"
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
            "at": "l2",
            "fit": [
              "e-n1",
              "e-n2",
              "e-n3"
            ],
            "zoom": 1.2,
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
            "id": "e-n1",
            "t": "text",
            "text": "① nhắc lại tên ngay",
            "x": 7932,
            "y": 450,
            "size": 48,
            "at": "l2:repeat",
            "hl": [
              {
                "text": "nhắc lại",
                "at": "l2:repeat+200"
              }
            ]
          },
          {
            "id": "e-n2",
            "t": "text",
            "text": "② ghi sổ: tên, việc, chỗ ngồi",
            "x": 7932,
            "y": 525,
            "size": 48,
            "at": "l3:write",
            "hl": [
              {
                "text": "ghi sổ",
                "at": "l3:down"
              }
            ]
          },
          {
            "id": "e-n3",
            "t": "text",
            "text": "③ lần sau gọi đúng tên",
            "x": 7932,
            "y": 600,
            "size": 48,
            "at": "l4:next time"
          },
          {
            "id": "e-xh",
            "t": "text",
            "text": "Xưng hô: nghe rồi làm theo",
            "x": 7932,
            "y": 690,
            "size": 44,
            "at": "l5:copy",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: repeat it at once. Hello, Ms Hằng.",
          "sub": "Một: nhắc lại tên ngay. “Dạ em chào chị Hằng.”",
          "keys": [
            "nhắc lại tên ngay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: write it down. Name, job, desk.",
          "sub": "Hai: ghi vào sổ. Tên, làm gì, ngồi đâu.",
          "keys": [
            "ghi vào sổ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: use it next time. They'll remember you back.",
          "sub": "Ba: lần gặp sau gọi đúng tên. Người ta nhớ lại bạn ngay."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Addressing people? Copy the others. Unsure? Say anh or chị, call yourself em.",
          "sub": "Xưng hô? Nghe mọi người gọi nhau rồi làm theo. Chưa rõ thì gọi “anh”, “chị”, xưng “em”."
        }
      ],
      "ref": "p10,p11"
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
            "at": 150,
            "fit": "F",
            "ms": 900
          },
          {
            "at": "l1b",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "F",
            "ms": 700
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
            "text": "④ 10:00: chưa có việc",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:fourth"
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
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "laptop"
              ]
            },
            "at": "l1:ten",
            "caption": "10:00 · chờ tài khoản",
            "icon": "hourglass-not-done"
          },
          {
            "id": "f-clock",
            "t": "illus",
            "name": "ten-oclock",
            "x": 60,
            "y": 1230,
            "size": 90,
            "at": "l2:paperwork"
          },
          {
            "id": "f-wait",
            "t": "text",
            "text": "Ngồi chờ = bình thường",
            "x": 170,
            "y": 1245,
            "size": 54,
            "at": "l2:waiting",
            "hl": [
              {
                "text": "bình thường",
                "at": "l2:normal"
              }
            ]
          },
          {
            "id": "f-eyes",
            "t": "illus",
            "name": "eyes",
            "x": 60,
            "y": 1345,
            "size": 80,
            "at": "l3:passers"
          },
          {
            "id": "f-see",
            "t": "text",
            "text": "Thấy điện thoại, không thấy lý do",
            "x": 170,
            "y": 1355,
            "size": 44,
            "at": "l3:phone",
            "color": "coral"
          },
          {
            "id": "f-call",
            "t": "text",
            "text": "Gọi riêng: ra ngoài, nói ngắn",
            "x": 170,
            "y": 1425,
            "size": 40,
            "at": "l3:private call",
            "color": "muted"
          },
          {
            "id": "f-learn",
            "t": "text",
            "text": "Chưa có việc? Tự tìm việc học",
            "x": 60,
            "y": 1510,
            "size": 52,
            "at": "l6:no task",
            "color": "accent",
            "hl": [
              {
                "text": "Tự tìm việc học",
                "at": "l6:learn"
              }
            ]
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "Hỏi luôn:",
            "x": 60,
            "y": 1610,
            "size": 48,
            "at": "l5:hours"
          },
          {
            "id": "f-5a",
            "t": "text",
            "text": "giờ làm, nghỉ trưa, xin nghỉ",
            "x": 90,
            "y": 1680,
            "size": 44,
            "at": "l5:hours+300"
          },
          {
            "id": "f-5b",
            "t": "text",
            "text": "quản lý, kênh nhóm, bảo mật",
            "x": 90,
            "y": 1750,
            "size": 44,
            "at": "l5:manager"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: ten o'clock.",
          "sub": "Chặng bốn: mười giờ."
        },
        {
          "id": "l1b",
          "lang": "en",
          "who": "thao",
          "say": "A computer, yes. An account, no. Tasks, none.",
          "sub": "Máy tính: có. Tài khoản: chưa. Việc: chưa.",
          "face": "worried"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Day one is mostly paperwork. Waiting is normal. Nobody forgot you.",
          "sub": "Ngày đầu chủ yếu là thủ tục. Ngồi chờ là bình thường, không ai quên bạn.",
          "keys": [
            "Ngồi chờ là bình thường"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Careful: passers-by see the phone, not the reason. Private call? Step outside, keep it short.",
          "sub": "Nhưng coi chừng: người đi ngang chỉ thấy điện thoại, không thấy lý do. Gọi riêng thì ra ngoài, nói ngắn.",
          "keys": [
            "không thấy lý do"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Cô Hoa, while I wait for my account, which documents should I read first?",
          "sub": "Cô ơi, trong lúc chờ tài khoản, cô muốn em đọc trước tài liệu nào ạ?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "The process guide. And write down our hours, leave rules, your manager, the team channel, and security rules.",
          "sub": "Tài liệu quy trình. Ghi luôn giờ làm, cách xin nghỉ, quản lý trực tiếp, kênh nhóm và quy định bảo mật.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "So she reads, and notes her questions. No task yet? Find something to learn.",
          "sub": "Thế là cô đọc, ghi câu muốn hỏi. Chưa có việc giao? Tự tìm việc học.",
          "keys": [
            "Tự tìm việc học"
          ]
        }
      ],
      "ref": "p14,p15,p16,p17,p18,p19"
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
            "ms": 600
          },
          {
            "at": "l5",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 600
          },
          {
            "at": "l7",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 12:00: giờ ăn trưa",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:noon"
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
                  "id": "dung",
                  "side": "right",
                  "pose": "stand",
                  "enter": "pop",
                  "at": "l2"
                }
              ]
            },
            "at": "l1:stomachs",
            "caption": "12:00 · văn phòng",
            "icon": "fork-and-knife-with-plate"
          },
          {
            "id": "g-pot",
            "t": "illus",
            "name": "pot-of-food",
            "x": 2028,
            "y": 1240,
            "size": 90,
            "at": "l1:rumble"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Được rủ → đi",
            "x": 2138,
            "y": 1250,
            "size": 54,
            "at": "l4:invited"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Không ai rủ → hỏi",
            "x": 2138,
            "y": 1330,
            "size": 54,
            "at": "l4:not invited",
            "hl": [
              {
                "text": "hỏi",
                "at": "l4:ask"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Không rủ ≠ bị ghét",
            "x": 2138,
            "y": 1415,
            "size": 48,
            "at": "l5:nothing personal",
            "color": "muted"
          },
          {
            "id": "g-no",
            "t": "text",
            "text": "Ngày đầu, đừng:",
            "x": 2028,
            "y": 1520,
            "size": 52,
            "at": "l5:tip"
          },
          {
            "id": "g-n1",
            "t": "text",
            "text": "✗ hỏi lương người khác",
            "x": 2058,
            "y": 1590,
            "size": 46,
            "at": "l5:salaries",
            "color": "coral"
          },
          {
            "id": "g-n2",
            "t": "text",
            "text": "✗ kể xấu chỗ cũ",
            "x": 2058,
            "y": 1650,
            "size": 46,
            "at": "l6:old company",
            "color": "coral"
          },
          {
            "id": "g-n3",
            "t": "text",
            "text": "✗ chuyện quá riêng tư",
            "x": 2058,
            "y": 1710,
            "size": 46,
            "at": "l7:private",
            "color": "coral"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "Dễ chịu, đáng tin > thú vị",
            "x": 2028,
            "y": 1785,
            "size": 50,
            "at": "l7:pleasant",
            "color": "accent",
            "hl": [
              {
                "text": "Dễ chịu, đáng tin",
                "at": "l7:trustworthy"
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
          "say": "Fifth stop: noon. Stomachs rumble louder than the printer.",
          "sub": "Chặng năm: mười hai giờ trưa. Bụng réo còn to hơn máy in."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Dũng, from the next desk. Fast talker, even faster eater.",
          "sub": "Còn đây là Dũng, ngồi bàn bên. Nói nhanh, ăn còn nhanh hơn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Where do you usually have lunch? Can I join you?",
          "sub": "Mọi người hay ăn trưa ở đâu ạ, em đi cùng được không?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Invited? Go. Not invited? Ask, like Thảo.",
          "sub": "Được rủ thì đi. Không ai rủ thì hỏi, như Thảo.",
          "keys": [
            "Không ai rủ thì hỏi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Sure! Some days we eat alone, nothing personal. Tip: never ask about salaries here.",
          "sub": "Đi luôn! Có hôm ai nấy ăn riêng, không phải ghét ai đâu. Mách nhỏ: đừng hỏi lương ai nhé.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "And don't trash your old company. The walls have ears.",
          "sub": "Cũng đừng kể xấu chỗ cũ. Tường có tai đấy."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Nor very private stories. On day one, pleasant and trustworthy beats interesting.",
          "sub": "Cả chuyện quá riêng tư cũng thế. Ngày đầu, “dễ chịu, đáng tin” hơn “thú vị”.",
          "keys": [
            "dễ chịu, đáng tin"
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
      "ref": "p23,p24"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "14:00 · máy in báo lỗi",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Gật đầu chào mà không ghi",
          "why": "Chiều quên tên, phải hỏi người bên cạnh ngay lúc chị ấy nghe thấy.",
          "rule": "Nghe tên thì nhắc, gặp người thì ghi"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Two o'clock. Printer error. The admin lady can fix it...",
          "sub": "Hai giờ. Máy in báo lỗi. Chị hành chính sửa được...",
          "face": "worried"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Psst, Dũng. What's her name again?",
          "sub": "Ê Dũng, chị kia tên gì ấy nhỉ?",
          "face": "worried",
          "pose": "point",
          "to": "dung",
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
          "say": "She can hear you. And the mistake was this morning: zero notes.",
          "sub": "Chị ấy nghe thấy đấy. Mà lỗi từ sáng nay: không ghi chữ nào.",
          "keys": [
            "không ghi chữ nào"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind to eight o'clock!",
          "sub": "Tua lại tám giờ sáng!",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Hello, Ms Hằng. Admin, corner desk. Written.",
          "sub": "Dạ em chào chị Hằng. Hành chính, góc phòng. Ghi xong.",
          "phase": "redo",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Hear a name, repeat it. Meet a person, write it down.",
          "sub": "Nghe tên thì nhắc, gặp người thì ghi.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "Nghe tên thì nhắc, gặp người thì ghi"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p12,p13,p10"
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
          },
          {
            "at": 150,
            "fit": "H",
            "ms": 900
          },
          {
            "at": "a1",
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
            "text": "⑥ 15:00: phần mềm “cũ”",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:three"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao"
                },
                {
                  "id": "hoa",
                  "pose": "hold"
                }
              ],
              "left": {
                "label": "Trước: so sánh",
                "ok": false
              },
              "right": {
                "label": "Sau: hỏi vì sao",
                "ok": true
              }
            },
            "at": "l2:two ways",
            "caption": "15:00 · hai cách mở lời",
            "icon": "speech-balloon"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "Trước: “chỗ cũ nhanh hơn”",
            "x": 3996,
            "y": 1250,
            "size": 48,
            "at": "a1:faster",
            "color": "coral"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "Sau: “vì sao chọn nó?”",
            "x": 3996,
            "y": 1335,
            "size": 48,
            "at": "b1:why",
            "color": "accent",
            "hl": [
              {
                "text": "vì sao",
                "at": "b1:why+200"
              }
            ]
          },
          {
            "id": "h-c",
            "t": "text",
            "text": "Người chọn… đứng ngay đó!",
            "x": 3996,
            "y": 1425,
            "size": 50,
            "at": "l3:standing",
            "hl": [
              {
                "text": "đứng ngay đó",
                "at": "l3:right there"
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
          "say": "Sixth stop: three o'clock. The team uses an old management tool.",
          "sub": "Chặng sáu: ba giờ chiều. Nhóm đang dùng một phần mềm quản lý cũ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two ways to open her mouth. Left first.",
          "sub": "Hai cách mở lời. Bên trái trước."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "thao",
          "say": "My old team used a different tool. It was much faster.",
          "sub": "Bên em trước dùng loại khác, nhanh hơn nhiều.",
          "phase": "a"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "hoa",
          "say": "Oh. I see.",
          "sub": "Ồ. Vậy à.",
          "phase": "a",
          "face": "neutral"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "I see we use this tool. Could you tell me why we chose it?",
          "sub": "Em thấy bên mình dùng phần mềm này, cô kể em nghe vì sao chọn nó được không ạ?",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "hoa",
          "say": "Sure. I chose it myself. Our client needs strong security.",
          "sub": "Được chứ. Chính cô chọn đấy, vì khách hàng yêu cầu bảo mật.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Plot twist: the person who chose it was standing right there.",
          "sub": "Cú lừa: người chọn phần mềm đứng ngay đó.",
          "keys": [
            "đứng ngay đó"
          ]
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s16",
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
            "id": "h-i",
            "t": "illus",
            "name": "speech-balloon",
            "x": 3996,
            "y": 1520,
            "size": 80,
            "at": "l1:listen"
          },
          {
            "id": "h-l",
            "t": "text",
            "text": "Nghe nhiều hơn nói",
            "x": 4096,
            "y": 1530,
            "size": 58,
            "at": "l1:listen+200",
            "hl": [
              {
                "text": "Nghe nhiều",
                "at": "l1:more"
              }
            ]
          },
          {
            "id": "h-hand",
            "t": "text",
            "text": "“Sao còn làm tay vậy?”",
            "x": 3996,
            "y": 1625,
            "size": 50,
            "at": "l2:by hand",
            "color": "muted"
          },
          {
            "id": "h-handx",
            "t": "strike",
            "over": "h-hand",
            "at": "l2:know why"
          },
          {
            "id": "h-rule",
            "t": "text",
            "text": "Hỏi vì sao trước, góp ý sau",
            "x": 3996,
            "y": 1730,
            "size": 58,
            "at": "l3:ask why",
            "color": "accent",
            "hl": [
              {
                "text": "góp ý sau",
                "at": "l3:later"
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
          "say": "So on day one: listen more than you talk.",
          "sub": "Vậy ngày đầu: nghe nhiều hơn nói.",
          "keys": [
            "nghe nhiều hơn nói"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Skip lines like: why is this done by hand? You don't know why yet.",
          "sub": "Đừng buông câu kiểu “sao chỗ này còn làm tay vậy”. Bạn chưa biết lý do đằng sau."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask why first, suggest later. Then your ideas hit the target.",
          "sub": "Hỏi vì sao trước, góp ý sau. Hiểu rồi, góp ý mới trúng chỗ.",
          "keys": [
            "Hỏi vì sao trước, góp ý sau"
          ]
        }
      ],
      "ref": "p20,p22"
    },
    {
      "id": "s17",
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
            "at": "l6",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 17:00: trước khi về",
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
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right"
                }
              ]
            },
            "at": "l1:five",
            "caption": "17:00 · trước khi về",
            "icon": "door"
          },
          {
            "id": "i-q",
            "t": "text",
            "text": "“Mai em bắt đầu từ đâu ạ?”",
            "x": 5964,
            "y": 1250,
            "size": 50,
            "at": "l2:tomorrow",
            "hl": [
              {
                "text": "bắt đầu từ đâu",
                "at": "l2:start with"
              }
            ]
          },
          {
            "id": "i-a",
            "t": "text",
            "text": "→ chủ động + khỏi ngồi chờ",
            "x": 5964,
            "y": 1340,
            "size": 50,
            "at": "l4:proactive",
            "color": "accent",
            "hl": [
              {
                "text": "chủ động",
                "at": "l4:proactive"
              }
            ]
          },
          {
            "id": "i-home",
            "t": "illus",
            "name": "house",
            "x": 5964,
            "y": 1460,
            "size": 80,
            "at": "l5:lost"
          },
          {
            "id": "i-lost",
            "t": "text",
            "text": "Lạc lõng ngày đầu?",
            "x": 6064,
            "y": 1470,
            "size": 56,
            "at": "l5:lost+200"
          },
          {
            "id": "i-ok",
            "t": "text",
            "text": "→ bình thường, cần vài tuần",
            "x": 5964,
            "y": 1560,
            "size": 52,
            "at": "l6:normal",
            "color": "accent",
            "hl": [
              {
                "text": "vài tuần",
                "at": "l6:few weeks"
              }
            ]
          },
          {
            "id": "i-not",
            "t": "text",
            "text": "“Mình không hợp” sau 1 ngày",
            "x": 5964,
            "y": 1660,
            "size": 50,
            "at": "l7:judging",
            "color": "muted"
          },
          {
            "id": "i-notx",
            "t": "strike",
            "over": "i-not",
            "at": "l7:one day"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: five o'clock, and one last question.",
          "sub": "Chặng bảy: năm giờ chiều, thêm một câu hỏi cuối."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Thank you for today. What should I start with tomorrow?",
          "sub": "Em cảm ơn cô hôm nay. Ngày mai em nên bắt đầu từ việc gì ạ?",
          "face": "happy",
          "keys": [
            "Ngày mai em nên bắt đầu từ việc gì"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Good question. See me at eight, and you'll get your first task.",
          "sub": "Hỏi hay đấy. Tám giờ mai gặp cô, nhận việc đầu tiên.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One question, two wins: she looks proactive, and won't sit waiting tomorrow.",
          "sub": "Một câu, hai cái lợi: trông chủ động, mai khỏi ngồi chờ.",
          "keys": [
            "chủ động"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Honestly, I feel a bit lost. Everyone knows everything. I know the printer.",
          "sub": "Nói thật, em thấy hơi lạc lõng. Ai cũng rành mọi thứ, em chỉ rành cái máy in.",
          "face": "sad"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "That's normal. Most new people need a few weeks to feel at home.",
          "sub": "Bình thường mà. Người mới phần lớn cần vài tuần mới quen.",
          "face": "happy",
          "keys": [
            "vài tuần"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Judging a job after one day is judging a movie by its opening credits.",
          "sub": "Kết luận “mình không hợp” sau một ngày, khác gì chấm phim khi mới chạy chữ mở đầu."
        }
      ],
      "ref": "p25,p27"
    },
    {
      "id": "s19",
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
            "zoom": 1.4,
            "ms": 800
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
            "text": "Tối thứ Hai: 10 phút xem sổ",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:monday",
            "hl": [
              {
                "text": "10 phút",
                "at": "l2:ten minutes"
              }
            ]
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
                  "pose": "think"
                }
              ],
              "props": [
                "notebook",
                "open-book"
              ]
            },
            "at": "l1:same room",
            "caption": "Tối thứ Hai · phòng trọ",
            "icon": "notebook"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "tên, câu hỏi, việc mai",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l3:names"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Không xem → mai quên một nửa",
            "x": 7932,
            "y": 1345,
            "size": 48,
            "at": "l3:skip",
            "color": "coral",
            "hl": [
              {
                "text": "một nửa",
                "at": "l3:half"
              }
            ]
          },
          {
            "id": "j-nan",
            "t": "text",
            "text": "Khởi đầu nan… bớt nan rồi",
            "x": 7932,
            "y": 1470,
            "size": 54,
            "at": "l5:hard",
            "color": "accent",
            "hl": [
              {
                "text": "bớt nan",
                "at": "l5:not that"
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
          "say": "Monday night. Same room as last night, same Thảo.",
          "sub": "Tối thứ Hai. Vẫn căn phòng tối qua, vẫn cô Thảo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "No market in my head tonight. Just my notebook, and ten minutes.",
          "sub": "Tối nay đầu hết họp chợ. Chỉ có cuốn sổ, và mười phút.",
          "face": "happy",
          "keys": [
            "mười phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Names, questions, tomorrow's task. Skip this, and by morning half is gone.",
          "sub": "Tên người, câu cần hỏi, việc mai. Không xem lại thì sáng mai quên một nửa.",
          "keys": [
            "quên một nửa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Ms Hằng, admin, corner desk. Dũng, lunch expert. Cô Hoa, eight o'clock.",
          "sub": "Chị Hằng, hành chính, góc phòng. Dũng, chuyên gia ăn trưa. Cô Hoa, tám giờ mai.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Every beginning is hard, they said. Hers was just not that hard.",
          "sub": "“Vạn sự khởi đầu nan”, đúng. Nhưng khởi đầu của Thảo... cũng không nan lắm."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Ten names, all remembered. Well, almost.",
          "sub": "Chục cái tên, nhớ hết. À, gần hết.",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "to": "l1",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "p26"
    },
    {
      "id": "s20",
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
            "at": "l2:test",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:hear",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4:no task",
            "fit": "F",
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
            "x": 7464,
            "y": 30,
            "at": "l2:test"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "d-rule"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l2:early"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 30,
            "at": "l3:hear"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1560,
            "y": 1120,
            "at": "l4:no task"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Step back: Thảo's whole first day.",
          "sub": "Lùi lại xem trọn ngày đầu của Thảo.",
          "keys": [
            "trọn ngày đầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: test the route the day before, arrive early the next day.",
          "sub": "Một: đi thử hôm trước, đến sớm hôm sau.",
          "keys": [
            "đến sớm hôm sau"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: hear a name, repeat it. Meet a person, write it down.",
          "sub": "Hai: nghe tên thì nhắc, gặp người thì ghi.",
          "keys": [
            "gặp người thì ghi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: no task yet? Find something to learn.",
          "sub": "Ba: chưa có việc giao, tự tìm việc học.",
          "keys": [
            "tự tìm việc học"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p7,p13,p19,p22"
    },
    {
      "id": "s21",
      "module": "QUIZ-01",
      "ref": "questions[24]",
      "data": {
        "q": "What should you ask your guide before leaving on the first day?",
        "options": [
          "Ask nothing and leave quickly, so you do not disturb their evening",
          "Ask what you should start with tomorrow, so you know where to begin",
          "Ask when you will get your first pay rise, to show you are ambitious"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "door",
        "why": "Hỏi việc ngày mai cho thấy bạn chủ động, sáng hôm sau không phải ngồi chờ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What should you ask your guide before leaving on the first day?",
          "sub": "Trước khi ra về ngày đầu, bạn nên hỏi người hướng dẫn điều gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Ask what you should start with tomorrow, so you know where to begin.",
          "sub": "Hỏi ngày mai nên bắt đầu từ việc gì, để biết chỗ bắt đầu."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "It shows you take action, and you will not sit waiting the next morning.",
          "sub": "Câu này cho thấy bạn chủ động, sáng hôm sau khỏi ngồi chờ."
        }
      ],
      "beats": {
        "after": 800
      }
    },
    {
      "id": "s22",
      "module": "END-05",
      "data": {
        "text": "Tối nay: nhắn hỏi giờ, người, giấy tờ",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, send that message. Then try the forty questions below!",
          "sub": "Tối nay gửi tin nhắn hỏi trước. Rồi thử bốn mươi câu hỏi bên dưới nhé!",
          "face": "laugh"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
