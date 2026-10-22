// Kịch bản video W — "Một ngày bên trong một ngày: 16 giờ ngoài công sở là của bạn" · #126 (21/10/2026): bản "chỉnh sửa hoàn thiện" thử nghiệm duy nhất trước khi mở rộng.
// Mở bằng vật neo (HOOK-24), một nhân vật xuyên suốt, nối chương But/So, điểm giữa, kết quay về hình mở; máy quay, chuyển cảnh, tiếng động.
// Nghiên cứu: DetPro/research/2026-10-20-dung-video/README.md. Bản trước: a-day-within-a-day--w01.v3.js.txt (lưu trữ).
export default {
  "schema": "detpro.video-script/0.2",
  "id": "a-day-within-a-day--w01",
  "hook": "HOOK-24",
  "narrator": "det",
  "presenter": {
    "side": "left"
  },
  "loop": {
    "open": "s01",
    "close": "s25b"
  },
  "unit": {
    "audience": "office-workers-own-time",
    "slug": "a-day-within-a-day",
    "door": "ky-nang",
    "level": "B1",
    "title": "Một ngày bên trong một ngày: 16 giờ ngoài công sở là của bạn",
    "series": "Sống trọn 24 giờ — dùng giờ ngoài công sở cho chính mình"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#135 bản 5: Đét đứng bên trái + một tấm bảng trắng chung 10 ô (5 × 2) đi theo tuần của Thảo; cảnh nhân vật là khung ảnh dán trên bảng; tô vàng từ khoá đúng lúc đọc (hl trên bảng, keys ở phụ đề); bỏ thẻ chương toàn màn và dải tuần (chặng ghi ngay trên bảng); giữ toàn màn: Đét “Khoan đã!”, câu đố, kết. Bản 4: w130/a-day.v131.js.txt · bản trước nữa xem nhật ký #126–#134.",
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
            "id": "a-16",
            "t": "text",
            "text": "16 giờ",
            "x": 60,
            "y": 150,
            "size": 200,
            "at": "l1:sixteen",
            "color": "accent",
            "hl": [
              {
                "text": "16 giờ",
                "at": "l1:sixteen+500"
              }
            ]
          },
          {
            "id": "a-16b",
            "t": "text",
            "text": "sau giờ làm, mỗi ngày",
            "x": 70,
            "y": 400,
            "size": 56,
            "at": "l1:after work"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "Ta tưởng: 2 giờ?",
            "x": 70,
            "y": 500,
            "size": 52,
            "at": "l2:two",
            "color": "muted"
          },
          {
            "id": "a-2x",
            "t": "strike",
            "over": "a-2",
            "at": "l2:two+700"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Arnold Bennett, How to Live on 24 Hours a Day (1908), chương IV",
            "x": 60,
            "y": 720,
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
          "say": "Sixteen hours. That is how much time an office worker owns after work, says Arnold Bennett.",
          "sub": "Mười sáu giờ. Arnold Bennett bảo đó là quỹ thời gian người đi làm có sau giờ tan sở.",
          "keys": [
            "Mười sáu giờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Most of us think we own about... two.",
          "sub": "Còn ta cứ tưởng mình chỉ có... chừng hai.",
          "keys": [
            "chừng hai"
          ]
        }
      ],
      "ref": "p5"
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
                  "pose": "phone",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "closed-book"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "push"
                }
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Hai",
            "icon": "mobile-phone"
          },
          {
            "id": "a-10",
            "t": "text",
            "text": "10 phút → 23:00",
            "x": 920,
            "y": 650,
            "size": 56,
            "at": "l4:almost eleven",
            "hl": [
              {
                "text": "23:00",
                "at": "l4:eleven"
              }
            ]
          },
          {
            "id": "a-kieu",
            "t": "text",
            "text": "“Ngày xuân con én đưa thoi”",
            "x": 60,
            "y": 600,
            "size": 54,
            "at": "l6:spring",
            "color": "accent"
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
          "say": "Office worker by day, phone-scrolling champion by night. It is Monday night.",
          "sub": "Ngày đi làm, tối về thành vô địch lướt điện thoại. Hôm ấy là tối thứ Hai.",
          "keys": [
            "vô địch lướt điện thoại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Dinner's done. Just ten minutes on my phone.",
          "sub": "Ăn tối xong rồi. Lướt điện thoại mười phút thôi.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ten minutes, she said. Now it is almost eleven.",
          "sub": "Mười phút, cô bảo. Giờ đã gần mười một giờ.",
          "keys": [
            "gần mười một giờ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Oh no. And that book is still on the table.",
          "sub": "Ôi. Cuốn sách mua tháng trước vẫn nằm trên bàn.",
          "face": "worried"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Nguyen Du wrote: spring days fly like a swallow. Thảo's evenings fly even faster.",
          "sub": "Nguyễn Du viết: “Ngày xuân con én đưa thoi.” Buổi tối của Thảo còn bay nhanh hơn."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        },
        {
          "at": "l4",
          "to": "l4",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "p8"
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
            "text": "Ngày bên trong ngày là gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:within",
            "hl": [
              {
                "text": "bên trong",
                "at": "l1:within"
              }
            ]
          },
          {
            "id": "b-mis",
            "t": "text",
            "text": "Hết giờ làm = hết ngày",
            "x": 2028,
            "y": 160,
            "size": 56,
            "at": "l3:ends",
            "color": "muted"
          },
          {
            "id": "b-misx",
            "t": "strike",
            "over": "b-mis",
            "at": "l3:biggest"
          },
          {
            "id": "b-big",
            "t": "text",
            "text": "← “sai lầm lớn nhất”",
            "x": 2668,
            "y": 160,
            "size": 52,
            "at": "l3:biggest",
            "color": "coral"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: nhồi thêm việc",
            "x": 2028,
            "y": 270,
            "size": 52,
            "at": "l4:cramming",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:suitcase"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: tự chọn giờ của mình",
            "x": 2028,
            "y": 360,
            "size": 58,
            "at": "l5:yours",
            "color": "accent",
            "hl": [
              {
                "text": "tự chọn",
                "at": "l5:choosing"
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
          "say": "So what on earth is a day within a day?",
          "sub": "Vậy rốt cuộc “một ngày bên trong một ngày” là cái gì?",
          "keys": [
            "một ngày bên trong một ngày"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Bennett, a writer from more than a hundred years ago, starts with how we see the day.",
          "sub": "Bennett, ông nhà văn từ hơn trăm năm trước, mở đầu bằng cách ta nhìn một ngày."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "We think the day ends when work ends. He calls that the biggest mistake.",
          "sub": "Ta nghĩ hết giờ làm là hết ngày. Ông gọi đó là sai lầm lớn nhất.",
          "keys": [
            "sai lầm lớn nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Relax, it does not mean cramming more tasks into your evening, like stuffing a suitcase.",
          "sub": "Khoan hoảng. Nó không phải là nhồi thêm việc vào buổi tối, kiểu nhồi vali đến bung khoá."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "It means knowing those hours are yours, and choosing what to do with them.",
          "sub": "Mà là biết mấy giờ ấy là của mình, rồi tự chọn dùng vào đâu.",
          "keys": [
            "của mình",
            "tự chọn"
          ]
        }
      ],
      "ref": "p5,intro,p7"
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
            "id": "b-wk",
            "t": "text",
            "text": "6 chặng · 1 tuần của Thảo",
            "x": 2028,
            "y": 470,
            "size": 56,
            "at": "l1:six",
            "hl": [
              {
                "text": "1 tuần",
                "at": "l1:week"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 240,
            "h": 110,
            "at": "l2+0",
            "color": "muted",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 560,
            "w": 240,
            "h": 110,
            "at": "l2+260",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 560,
            "w": 240,
            "h": 110,
            "at": "l2+520",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 560,
            "w": 240,
            "h": 110,
            "at": "l2+780",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 560,
            "w": 240,
            "h": 110,
            "at": "l2+1040",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 560,
            "w": 240,
            "h": 110,
            "at": "l2+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 tối",
            "x": 2048,
            "y": 585,
            "size": 48,
            "at": "l2+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3 sáng",
            "x": 2318,
            "y": 585,
            "size": 48,
            "at": "l2+380"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T3 tối",
            "x": 2588,
            "y": 585,
            "size": 48,
            "at": "l2+640"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T4 sáng",
            "x": 2858,
            "y": 585,
            "size": 48,
            "at": "l2+900"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T4 tối",
            "x": 3128,
            "y": 585,
            "size": 48,
            "at": "l2+1160"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T5 17:00",
            "x": 3398,
            "y": 585,
            "size": 48,
            "at": "l2+1420"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "We will follow one week in Thảo's life, in six stops. Fasten your seatbelt.",
          "sub": "Mình đi theo một tuần của Thảo, qua sáu chặng. Thắt dây an toàn nhé.",
          "keys": [
            "một tuần của Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tuesday morning, Tuesday night, Wednesday morning, Wednesday night, and Thursday at five.",
          "sub": "Sáng thứ Ba, tối thứ Ba, sáng thứ Tư, tối thứ Tư, và năm giờ chiều thứ Năm."
        }
      ],
      "ref": "intro"
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
            "at": "l3",
            "fit": [
              "c-off"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l8",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Sáng thứ Ba: phần bị quên",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
          },
          {
            "id": "c-off",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l7",
                  "shot": "close",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l8",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:office",
            "caption": "Sáng thứ Ba · công ty",
            "icon": "office-building"
          },
          {
            "id": "c-w",
            "t": "text",
            "text": "Ở công ty: kể đủ 3 việc",
            "x": 3996,
            "y": 200,
            "size": 54,
            "at": "l8:office",
            "hl": [
              {
                "text": "3 việc",
                "at": "l8:full"
              }
            ]
          },
          {
            "id": "c-e",
            "t": "text",
            "text": "Sau giờ làm: “chẳng có gì”",
            "x": 3996,
            "y": 300,
            "size": 54,
            "at": "l8:evening",
            "color": "coral",
            "hl": [
              {
                "text": "“chẳng có gì”",
                "at": "l8:nothing"
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
          "say": "First stop: Tuesday morning, at the office.",
          "sub": "Chặng một: sáng thứ Ba, ở công ty.",
          "keys": [
            "sáng thứ Ba"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Dũng, the colleague at the next desk. A professional question-asker.",
          "sub": "Còn đây là Dũng, đồng nghiệp bàn bên, chuyên gia hỏi han."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Morning, Thảo! How was your day yesterday?",
          "sub": "Chào Thảo! Hôm qua của chị thế nào?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Busy! Two meetings, a new client, and a report for the boss.",
          "sub": "Bận lắm! Hai cuộc họp, một khách mới, thêm báo cáo cho sếp.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "And after work? What did you do?",
          "sub": "Thế còn sau giờ làm? Chị làm gì?"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "After work? Oh... nothing much. I just went home.",
          "sub": "Sau giờ làm á? Ờ... chẳng có gì. Về nhà thôi.",
          "face": "thinking"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Did you catch that?",
          "sub": "Nghe thấy không?"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "The office part gets a full report. The evening gets one word: nothing.",
          "sub": "Chuyện công ty kể đủ như báo cáo. Buổi tối chỉ được một chữ: chẳng có gì.",
          "keys": [
            "chẳng có gì"
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
      "ref": "p1"
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
            "id": "c-box",
            "t": "illus",
            "name": "takeout-box",
            "x": 4006,
            "y": 420,
            "size": 120,
            "at": "l1:leftovers"
          },
          {
            "id": "c-left",
            "t": "text",
            "text": "16 giờ = đồ ăn thừa?",
            "x": 4156,
            "y": 450,
            "size": 58,
            "at": "l1:sixteen",
            "hl": [
              {
                "text": "đồ ăn thừa",
                "at": "l1:leftovers"
              }
            ]
          },
          {
            "id": "c-plan",
            "t": "text",
            "text": "Không kế hoạch → ôi thiu",
            "x": 4006,
            "y": 580,
            "size": 48,
            "at": "l2:plans",
            "color": "muted",
            "hl": [
              {
                "text": "ôi thiu",
                "at": "l2:stale"
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
          "say": "Many of us treat work as the whole day, and the other sixteen hours as leftovers in the fridge.",
          "sub": "Nhiều người coi giờ làm là cả ngày, còn mười sáu giờ kia là đồ ăn thừa trong tủ lạnh.",
          "keys": [
            "đồ ăn thừa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And who makes plans for leftovers? Nobody. So they quietly go stale.",
          "sub": "Mà đồ thừa thì ai lên kế hoạch? Chẳng ai. Thế là nó cứ lặng lẽ... ôi thiu."
        }
      ],
      "ref": "p2"
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
          }
        ],
        "items": [
          {
            "id": "a-office",
            "t": "illus",
            "name": "office-building",
            "x": 6024,
            "y": 210,
            "size": 150,
            "at": "l1:office"
          },
          {
            "id": "a-t8",
            "t": "text",
            "text": "10h → 18h",
            "x": 6204,
            "y": 250,
            "size": 56,
            "at": "l1:ten"
          },
          {
            "id": "a-bar8",
            "t": "box",
            "x": 6204,
            "y": 360,
            "w": 400,
            "h": 90,
            "hatch": true,
            "at": "l1:eight"
          },
          {
            "id": "a-l8",
            "t": "text",
            "text": "8 giờ làm",
            "x": 6204,
            "y": 470,
            "size": 56,
            "at": "l1:hours"
          },
          {
            "id": "a-title",
            "t": "text",
            "text": "Ai hầu ai?",
            "x": 5984,
            "y": 40,
            "size": 96,
            "at": "l2:serving",
            "hl": [
              {
                "text": "Ai hầu ai?",
                "at": "l2:whom"
              }
            ]
          },
          {
            "id": "a-r8",
            "t": "ring",
            "around": [
              "a-bar8"
            ],
            "color": "accent",
            "at": "l2:those"
          },
          {
            "id": "a-house",
            "t": "illus",
            "name": "house",
            "x": 6784,
            "y": 190,
            "size": 150,
            "at": "l2:whom"
          },
          {
            "id": "a-bar16",
            "t": "box",
            "x": 6784,
            "y": 360,
            "w": 800,
            "h": 90,
            "at": "l2:whom+300"
          },
          {
            "id": "a-l16",
            "t": "text",
            "text": "16 giờ còn lại",
            "x": 6784,
            "y": 470,
            "size": 56,
            "at": "l2:whom+800"
          },
          {
            "id": "a-src",
            "t": "text",
            "font": "base",
            "text": "Nguồn: Arnold Bennett, How to Live on 24 Hours a Day (1908), chương IV",
            "x": 5984,
            "y": 715,
            "size": 30,
            "color": "muted",
            "enter": "fade",
            "at": "l1"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Try this. Bennett's office worker works from ten to six. Eight hours.",
          "sub": "Thử nghĩ nhé. Người nhân viên trong sách làm từ mười giờ đến sáu giờ: tám tiếng."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "If those eight are the real day, then who is serving whom here?",
          "sub": "Nếu tám tiếng ấy mới là ngày thật, thì ở đây ai đang hầu ai?"
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s07b",
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
            "id": "a-13",
            "t": "text",
            "text": "1/3",
            "x": 6364,
            "y": 560,
            "size": 72,
            "at": "l3:one third"
          },
          {
            "id": "a-23",
            "t": "text",
            "text": "2/3",
            "x": 7134,
            "y": 560,
            "size": 72,
            "color": "accent",
            "at": "l3:two thirds",
            "hl": [
              {
                "text": "2/3",
                "at": "l3:two thirds"
              }
            ]
          },
          {
            "id": "a-bow",
            "t": "illus",
            "name": "person-bowing",
            "flip": true,
            "x": 6639,
            "y": 530,
            "size": 130,
            "at": "l3:bowing"
          },
          {
            "id": "a-arw",
            "t": "arrow",
            "from": [
              6764,
              405
            ],
            "to": [
              6619,
              405
            ],
            "color": "accent",
            "at": "l3:bowing+500"
          },
          {
            "id": "a-left",
            "t": "text",
            "text": "phần thừa",
            "x": 6904,
            "y": 650,
            "size": 56,
            "color": "muted",
            "at": "l4:bigger"
          },
          {
            "id": "a-x",
            "t": "strike",
            "over": "a-left",
            "at": "l4:not"
          }
        ]
      },
      "lines": [
        {
          "id": "l3",
          "lang": "en",
          "say": "Two thirds of your life, bowing to one third. Like the big brother carrying the little one's school bag.",
          "sub": "Hai phần ba cuộc đời đi cúi đầu trước một phần ba. Như anh cả xách cặp cho em út."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So the bigger part of your day should not be the leftover.",
          "sub": "Vậy phần lớn của ngày không nên làm phần thừa.",
          "wait": 300
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s09a",
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
            "id": "b-title",
            "t": "text",
            "text": "Một ngày bên trong một ngày",
            "x": 7952,
            "y": 40,
            "size": 96,
            "at": "l1:day within a day"
          },
          {
            "id": "b-small",
            "t": "illus",
            "name": "house",
            "x": 8224,
            "y": 290,
            "size": 120,
            "at": "l1:little house"
          },
          {
            "id": "b-big",
            "t": "line",
            "pts": [
              [
                8134,
                470
              ],
              [
                8134,
                310
              ],
              [
                8284,
                200
              ],
              [
                8434,
                310
              ],
              [
                8434,
                470
              ],
              [
                8134,
                470
              ]
            ],
            "at": "l1:big house"
          }
        ]
      },
      "lines": [
        {
          "id": "l0",
          "lang": "en",
          "who": "det",
          "say": "Second stop. If work isn't the whole day, what on earth is the rest?",
          "sub": "Chặng hai. Giờ làm không phải cả ngày, vậy phần còn lại là cái gì?"
        },
        {
          "id": "l1",
          "lang": "en",
          "say": "Bennett gives it a funny name: a day within a day. Like a little house inside a big house.",
          "sub": "Bennett đặt cho nó một cái tên nghe vui: một ngày bên trong một ngày. Như căn nhà nhỏ nằm trong căn nhà lớn."
        }
      ],
      "ref": "p5,p6"
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
            "at": "l3:boss",
            "fit": [
              "b-16",
              "b-crown",
              "b-boss"
            ],
            "zoom": 1.25
          },
          {
            "at": "l4",
            "fit": "E"
          }
        ],
        "items": [
          {
            "id": "b-16",
            "t": "text",
            "text": "16 giờ",
            "x": 8904,
            "y": 215,
            "size": 84,
            "color": "accent",
            "at": "l2:sixteen"
          },
          {
            "id": "b-6",
            "t": "illus",
            "name": "six-oclock",
            "x": 8524,
            "y": 360,
            "size": 100,
            "at": "l2:six"
          },
          {
            "id": "b-6t",
            "t": "text",
            "text": "18h",
            "x": 8539,
            "y": 470,
            "size": 56,
            "at": "l2:six+300"
          },
          {
            "id": "b-line",
            "t": "arrow",
            "from": [
              8634,
              330
            ],
            "to": [
              9384,
              330
            ],
            "at": "l2:evening"
          },
          {
            "id": "b-10",
            "t": "illus",
            "name": "ten-oclock",
            "x": 9404,
            "y": 360,
            "size": 100,
            "at": "l2:ten"
          },
          {
            "id": "b-10t",
            "t": "text",
            "text": "10h",
            "x": 9419,
            "y": 470,
            "size": 56,
            "at": "l2:ten+300"
          },
          {
            "id": "b-crown",
            "t": "illus",
            "name": "crown",
            "x": 8974,
            "y": 355,
            "size": 110,
            "at": "l3:boss"
          },
          {
            "id": "b-boss",
            "t": "text",
            "text": "bạn là chủ",
            "x": 8924,
            "y": 475,
            "size": 56,
            "at": "l3:boss+400",
            "hl": [
              {
                "text": "bạn là chủ",
                "at": "l3:boss+500"
              }
            ]
          },
          {
            "id": "b-vn",
            "t": "arrow",
            "from": [
              8584,
              640
            ],
            "to": [
              9394,
              640
            ],
            "color": "muted",
            "at": "l4:vietnam"
          },
          {
            "id": "b-vnl",
            "t": "text",
            "text": "Ở Việt Nam: 14–15 giờ",
            "x": 8744,
            "y": 555,
            "size": 56,
            "at": "l4:fourteen"
          },
          {
            "id": "b-src",
            "t": "text",
            "font": "base",
            "text": "Nguồn: Arnold Bennett (1908), chương IV",
            "x": 9024,
            "y": 650,
            "size": 30,
            "color": "muted",
            "enter": "fade",
            "at": "l2"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "say": "For his worker, that is sixteen hours, from six in the evening to ten the next morning.",
          "sub": "Với người trong sách: mười sáu giờ, từ sáu giờ chiều đến mười giờ sáng mai."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "In those hours, you're nobody's employee. You're the boss. The director. The whole board.",
          "sub": "Trong khoảng ấy, bạn chẳng là nhân viên của ai. Bạn là chủ. Là giám đốc. Là nguyên cả hội đồng quản trị.",
          "keys": [
            "Bạn là chủ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "Work eight to five or six in Vietnam, with a lunch break? Maybe fourteen or fifteen hours.",
          "sub": "Làm tám giờ đến năm, sáu giờ, tính cả nghỉ trưa: có thể chỉ mười bốn, mười lăm giờ."
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s09b",
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
            "id": "b-moto",
            "t": "illus",
            "name": "motor-scooter",
            "enter": "hand-in",
            "x": 8444,
            "y": 560,
            "size": 120,
            "at": "l5:motorbike"
          },
          {
            "id": "b-start",
            "t": "text",
            "text": "ngày thứ hai bắt đầu",
            "x": 7974,
            "y": 690,
            "size": 52,
            "color": "accent",
            "at": "l5:second day"
          },
          {
            "id": "b-r6",
            "t": "ring",
            "around": [
              "b-6",
              "b-6t"
            ],
            "color": "accent",
            "at": "l5:starts"
          }
        ]
      },
      "lines": [
        {
          "id": "l5",
          "lang": "en",
          "say": "The number matters less than the view. Your second day starts the moment your motorbike rolls out of the office gate.",
          "sub": "Con số không quan trọng bằng cách nhìn: ngày thứ hai bắt đầu ngay khi bánh xe máy lăn ra khỏi cổng công ty.",
          "keys": [
            "ngày thứ hai bắt đầu"
          ]
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "ref": "p8,p9,p20",
      "data": {
        "set": "home",
        "label": "Tối thứ Ba · 18:30",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nghĩ “hôm nay xong rồi” sau giờ làm",
          "why": "Coi buổi tối là phần thừa thì không ai lên kế hoạch cho nó, và nó trôi đi.",
          "rule": "Coi buổi tối là đuôi của ngày thì nó sẽ bị cắt"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Six thirty. Home at last.",
          "sub": "Sáu rưỡi. Về đến nhà rồi.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Today is done. Nothing left but my phone.",
          "sub": "Hôm nay xong rồi. Giờ chỉ còn điện thoại thôi.",
          "pose": "shrug",
          "stop": true
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern",
          "pose": "stop"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Treat the evening as the tail of the day, and it gets cut off like a lizard's tail. Gone before you notice.",
          "sub": "Coi buổi tối là cái đuôi của ngày thì nó bị cắt như đuôi thằn lằn, rụng lúc nào không hay."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "thao",
          "say": "My second day starts now.",
          "sub": "Ngày thứ hai của mình bắt đầu.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "thao",
          "say": "Dinner, enough sleep. And eight to nine tonight is mine.",
          "sub": "Ăn tối, ngủ đủ giấc. Và tám đến chín giờ tối nay là của mình.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "chia-khoa"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      }
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
            "at": "l2",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
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
            "text": "③ Tối thứ Ba: mệt rồi?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:third"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "shrug"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "thao"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:evening",
            "caption": "Tối thứ Ba · nhà",
            "icon": "tired-face"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "“Tối học thêm → mai làm kém?”",
            "x": 60,
            "y": 1290,
            "size": 52,
            "at": "l3:worse",
            "color": "coral"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "Bennett: không.",
            "x": 60,
            "y": 1390,
            "size": 64,
            "at": "l4:no",
            "color": "accent",
            "hl": [
              {
                "text": "không",
                "at": "l4:no"
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
          "say": "Third stop: that same Tuesday evening. Thảo has a fair question.",
          "sub": "Chặng ba: vẫn tối thứ Ba ấy. Thảo có một câu hỏi rất thật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "A day within a day sounds nice.",
          "sub": "Một ngày bên trong một ngày nghe hay đấy.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "But after work I'm exhausted. If I study at night, won't I do worse tomorrow?",
          "sub": "Nhưng tan làm là mình kiệt sức. Tối học thêm thì mai làm kém đi thì sao?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Bennett's answer is no. Using your mind in the evening does not weaken you at work.",
          "sub": "Bennett trả lời: không. Dùng trí óc buổi tối không làm bạn yếu đi lúc làm việc.",
          "keys": [
            "không"
          ]
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
          }
        ],
        "items": [
          {
            "id": "f-l0",
            "t": "text",
            "text": "Tan làm, Thảo vẫn:",
            "x": 60,
            "y": 1500,
            "size": 52,
            "at": "l1:look"
          },
          {
            "id": "f-i1",
            "t": "illus",
            "name": "newspaper",
            "x": 70,
            "y": 1570,
            "size": 70,
            "at": "l2:news"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "đọc tin",
            "x": 150,
            "y": 1580,
            "size": 48,
            "at": "l2:news+200"
          },
          {
            "id": "f-i2",
            "t": "illus",
            "name": "speech-balloon",
            "x": 330,
            "y": 1570,
            "size": 70,
            "at": "l2:group chat"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "cãi nhau 1 tiếng",
            "x": 410,
            "y": 1580,
            "size": 48,
            "at": "l2:hour"
          },
          {
            "id": "f-i3",
            "t": "illus",
            "name": "soccer-ball",
            "x": 70,
            "y": 1660,
            "size": 70,
            "at": "l3:football"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "xem phân tích bóng đá",
            "x": 150,
            "y": 1670,
            "size": 48,
            "at": "l3:football+200"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "→ chỉ chưa có việc mình chọn",
            "x": 60,
            "y": 1760,
            "size": 50,
            "at": "l4:energy",
            "color": "accent",
            "hl": [
              {
                "text": "việc mình chọn",
                "at": "l4:chose"
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
          "say": "Now look at what our exhausted Thảo still manages after work.",
          "sub": "Giờ nhìn xem cô Thảo “kiệt sức” của chúng ta tan làm vẫn làm được gì."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She reads the news. She argues in a group chat for a whole hour, full of fighting spirit!",
          "sub": "Đọc tin tức. Cãi nhau trong nhóm chat nguyên một tiếng, khí thế bừng bừng!"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "She watches a long football analysis, as serious as a national coach.",
          "sub": "Xem phân tích trận bóng say sưa như huấn luyện viên đội tuyển."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Your mind still has energy. It just hasn't been given a job you chose.",
          "sub": "Đầu óc chưa cạn, chỉ chưa được giao một việc mình chọn.",
          "keys": [
            "một việc mình chọn"
          ]
        }
      ],
      "ref": "p10,p11"
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
            "at": "l1",
            "fit": [
              "f-c1",
              "f-c2"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-c0",
            "t": "illus",
            "name": "bed",
            "x": 880,
            "y": 1775,
            "size": 70,
            "at": "l1:exhausted"
          },
          {
            "id": "f-c1",
            "t": "text",
            "text": "Kiệt sức thật → nghỉ",
            "x": 960,
            "y": 1780,
            "size": 44,
            "at": "l1:sick",
            "hl": [
              {
                "text": "nghỉ",
                "at": "l1:rest"
              }
            ]
          },
          {
            "id": "f-c2",
            "t": "text",
            "text": "Tự quan sát vài tuần",
            "x": 880,
            "y": 1840,
            "size": 44,
            "at": "l2:differs",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Of course, some days you really are exhausted. A sick child, an urgent project. On those days, rest is right.",
          "sub": "Tất nhiên, có ngày kiệt sức thật: con ốm, dự án gấp. Những ngày ấy, nghỉ là đúng.",
          "keys": [
            "nghỉ là đúng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Energy differs from person to person. Watch yourself for a few weeks.",
          "sub": "Sức mỗi người khác nhau. Tự quan sát vài tuần."
        }
      ],
      "ref": "p12"
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
          },
          {
            "at": "a1",
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
            "text": "④ Sáng thứ Tư: trên xe buýt",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:wednesday"
          },
          {
            "id": "g-m",
            "t": "text",
            "text": "Thân lên xe, hồn còn trên giường",
            "x": 2028,
            "y": 1240,
            "size": 50,
            "at": "l1:body",
            "color": "muted"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
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
              "left": {
                "label": "Chuyến xe “chưa tính”",
                "ok": false
              },
              "right": {
                "label": "Ngày đã bắt đầu",
                "ok": true
              }
            },
            "at": "l2:same bus",
            "caption": "40 phút, cùng một chuyến",
            "icon": "bus"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "Dũng: “chuyến này chưa tính”",
            "x": 2028,
            "y": 1390,
            "size": 48,
            "at": "a1:count",
            "color": "coral"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "Thảo: ngày của mình đã bắt đầu",
            "x": 2028,
            "y": 1490,
            "size": 48,
            "at": "b1:podcast",
            "color": "accent",
            "hl": [
              {
                "text": "đã bắt đầu",
                "at": "l3:started"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Buổi sáng cũng là ngày của bạn",
            "x": 2028,
            "y": 1650,
            "size": 58,
            "at": "l4:morning",
            "hl": [
              {
                "text": "ngày của bạn",
                "at": "l4:your day"
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
          "say": "Fourth stop: Wednesday morning. Bennett saw people ride to work half asleep. Body on the bus, soul still in bed.",
          "sub": "Chặng bốn: sáng thứ Tư. Bennett thấy người ta đi làm mà mụ mị. Thân lên xe, hồn còn nằm trên giường."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Same bus, same forty minutes. Dũng on the left, Thảo on the right.",
          "sub": "Cùng một chuyến xe, cùng bốn mươi phút. Bên trái là Dũng, bên phải là Thảo."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "This ride doesn't count. Videos until my stop.",
          "sub": "Chuyến này chưa tính. Lướt video cho hết đường."
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "dung",
          "say": "At work already, and I still feel sluggish.",
          "sub": "Đến công ty rồi mà vẫn uể oải.",
          "face": "sad"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "I picked this podcast last night.",
          "sub": "Bài podcast này mình chọn từ tối qua.",
          "face": "happy"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "thao",
          "say": "Or I look out and think: what do I want tonight?",
          "sub": "Hoặc nhìn đường, nghĩ tối nay muốn làm gì cho mình.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Both arrive. But Thảo walks in with her own day already started.",
          "sub": "Cả hai cùng tới. Nhưng Thảo bước vào khi ngày của mình đã bắt đầu.",
          "keys": [
            "đã bắt đầu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The morning before work is still your day, not waiting time.",
          "sub": "Buổi sáng trước giờ làm vẫn là ngày của bạn, không phải giờ chờ.",
          "keys": [
            "ngày của bạn"
          ]
        }
      ],
      "ref": "p13,p14,p15,p16"
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
            "at": "l4:mine",
            "fit": [
              "c-e1",
              "c-mine",
              "c-89"
            ],
            "zoom": 1.5,
            "ms": 900
          },
          {
            "at": "l5",
            "fit": "H",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "c-title",
            "t": "text",
            "text": "⑤ Tối thứ Tư: cột giờ",
            "x": 4016,
            "y": 1120,
            "size": 96,
            "at": "l0:wednesday"
          },
          {
            "id": "c-sheet",
            "t": "box",
            "x": 4026,
            "y": 1330,
            "w": 1600,
            "h": 420,
            "color": "muted",
            "stroke": 4,
            "at": "l1:sheet"
          },
          {
            "id": "c-bar",
            "t": "box",
            "x": 4076,
            "y": 1470,
            "w": 1500,
            "h": 100,
            "at": "l1:column"
          },
          {
            "id": "c-t0",
            "t": "text",
            "text": "17:30",
            "x": 4026,
            "y": 1590,
            "size": 56,
            "at": "l1:half past five"
          },
          {
            "id": "c-t1",
            "t": "text",
            "text": "8:00",
            "x": 5511,
            "y": 1590,
            "size": 56,
            "at": "l1:eight"
          },
          {
            "id": "c-f1",
            "t": "box",
            "x": 4076,
            "y": 1470,
            "w": 78,
            "h": 100,
            "hatch": true,
            "at": "l2:ride home"
          },
          {
            "id": "c-i1",
            "t": "illus",
            "name": "motor-scooter",
            "x": 4065,
            "y": 1355,
            "size": 100,
            "at": "l2:ride home+300"
          },
          {
            "id": "c-f1b",
            "t": "box",
            "x": 5498,
            "y": 1470,
            "w": 78,
            "h": 100,
            "hatch": true,
            "at": "l2:ride home+600"
          },
          {
            "id": "c-f2",
            "t": "box",
            "x": 4154,
            "y": 1470,
            "w": 129,
            "h": 100,
            "hatch": true,
            "at": "l2:cooking"
          },
          {
            "id": "c-i2",
            "t": "illus",
            "name": "pot-of-food",
            "x": 4168,
            "y": 1355,
            "size": 100,
            "at": "l2:cooking+300"
          },
          {
            "id": "c-f3",
            "t": "box",
            "x": 4283,
            "y": 1470,
            "w": 52,
            "h": 100,
            "hatch": true,
            "at": "l2:bathing"
          },
          {
            "id": "c-i3",
            "t": "illus",
            "name": "bathtub",
            "x": 4271,
            "y": 1355,
            "size": 100,
            "at": "l2:bathing+300"
          },
          {
            "id": "c-f4",
            "t": "box",
            "x": 4593,
            "y": 1470,
            "w": 853,
            "h": 100,
            "hatch": true,
            "at": "l2:sleep"
          },
          {
            "id": "c-i4",
            "t": "illus",
            "name": "bed",
            "x": 4969,
            "y": 1355,
            "size": 100,
            "at": "l2:sleep+300"
          },
          {
            "id": "c-eyes",
            "t": "illus",
            "name": "eyes",
            "enter": "hand-in",
            "x": 4696,
            "y": 1620,
            "size": 100,
            "at": "l3:look"
          },
          {
            "id": "c-e1",
            "t": "ring",
            "x": 4335,
            "y": 1460,
            "w": 103,
            "h": 120,
            "dash": true,
            "color": "accent",
            "at": "l3:after dinner"
          },
          {
            "id": "c-e2",
            "t": "ring",
            "x": 4438,
            "y": 1460,
            "w": 155,
            "h": 120,
            "dash": true,
            "color": "accent",
            "at": "l3:before bed"
          },
          {
            "id": "c-e3",
            "t": "ring",
            "x": 5446,
            "y": 1460,
            "w": 52,
            "h": 120,
            "dash": true,
            "color": "accent",
            "at": "l3:morning minutes"
          },
          {
            "id": "c-mk",
            "t": "marker",
            "x": 4335,
            "y": 1470,
            "w": 103,
            "h": 100,
            "at": "l4:eight to nine"
          },
          {
            "id": "c-mine",
            "t": "text",
            "text": "của mình",
            "x": 4266,
            "y": 1590,
            "size": 56,
            "color": "accent",
            "at": "l4:mine",
            "hl": [
              {
                "text": "của mình",
                "at": "l4:mine"
              }
            ]
          },
          {
            "id": "c-89",
            "t": "text",
            "text": "20–21h",
            "x": 4306,
            "y": 1665,
            "size": 48,
            "at": "l4:nine"
          },
          {
            "id": "c-keep",
            "t": "box",
            "x": 4325,
            "y": 1458,
            "w": 123,
            "h": 124,
            "color": "accent",
            "stroke": 10,
            "at": "l5:protect"
          }
        ]
      },
      "lines": [
        {
          "id": "l0",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Wednesday night. How does Thảo find her own hours? Like a treasure hunt: she draws the map.",
          "sub": "Chặng năm: tối thứ Tư. Thảo tìm giờ của mình thế nào? Như đi tìm kho báu: vẽ bản đồ."
        },
        {
          "id": "l1",
          "lang": "en",
          "say": "That night, Thảo takes a sheet of paper. A column from half past five in the evening to eight in the morning.",
          "sub": "Tối ấy, Thảo lấy một tờ giấy, kẻ cột từ năm giờ rưỡi chiều đến tám giờ sáng."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Step one: shade the fixed parts. The ride home, cooking and dinner, bathing the kids, enough sleep.",
          "sub": "Bước một: tô khoảng cố định: đi đường, nấu ăn, tắm cho con, ngủ đủ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Step two: look at the empty parts. After dinner, before bed, a few morning minutes.",
          "sub": "Bước hai: nhìn khoảng chưa tô: sau bữa tối, trước khi ngủ, ít phút buổi sáng."
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "Step three: on one slot, write: mine. Eight to nine tonight, for example.",
          "sub": "Bước ba: viết “của mình” lên một quãng, ví dụ tám đến chín giờ tối.",
          "keys": [
            "của mình"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "In the first week, one slot is enough. You can only protect free time you can see.",
          "sub": "Tuần đầu, một quãng là đủ. Thấy được khoảng trống mới giữ được nó."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "giay-sot-soat",
          "offsetMs": 1500
        }
      ],
      "ref": "p17,p18"
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
          }
        ],
        "items": [
          {
            "id": "h-s1",
            "t": "text",
            "text": "Ngày riêng dài hơn tưởng",
            "x": 3996,
            "y": 1780,
            "size": 46,
            "at": "l1:surprise",
            "hl": [
              {
                "text": "dài hơn tưởng",
                "at": "l1:longer"
              }
            ]
          },
          {
            "id": "h-s2",
            "t": "text",
            "text": "Hết quãng? → rút ngắn một việc",
            "x": 3996,
            "y": 1730,
            "size": 46,
            "at": "l2:no free slot",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Many people get a surprise: their own day is longer than they thought, even with little kids climbing on their backs.",
          "sub": "Nhiều người ngạc nhiên: ngày riêng dài hơn họ tưởng, kể cả khi con nhỏ đang trèo lên lưng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Others find no free slot. Then first, shorten one fixed task. Don't blame yourself.",
          "sub": "Có người thấy không còn quãng nào. Khi đó, rút ngắn một việc cố định trước, đừng tự trách."
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s25",
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
            "text": "⑥ Chiều thứ Năm, 17:00",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
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
                  "id": "dung",
                  "side": "left"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
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
            "at": "l1:five",
            "caption": "17:00 · công ty",
            "icon": "office-building"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Ngày riêng ≠ coi nhẹ việc",
            "x": 6804,
            "y": 1790,
            "size": 46,
            "at": "l5:valuing",
            "color": "accent",
            "hl": [
              {
                "text": "≠ coi nhẹ việc",
                "at": "l5:lightly"
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
          "say": "Last stop: Thursday, five p.m. Thảo packs her bag.",
          "sub": "Chặng cuối: năm giờ chiều thứ Năm. Thảo xếp túi ra về."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Leaving right at five again? Caring about evenings sounds a bit lazy.",
          "sub": "Lại về đúng năm giờ à? Lo cho buổi tối nghe hơi lười đấy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I still finish all my work here.",
          "sub": "Việc ở công ty mình vẫn làm đủ mà.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I just choose what my free hours are for.",
          "sub": "Mình chỉ tự chọn giờ rảnh của mình dùng vào đâu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Valuing your own day doesn't mean taking your job lightly.",
          "sub": "Coi trọng ngày riêng không phải coi nhẹ công việc.",
          "keys": [
            "không phải coi nhẹ công việc"
          ]
        }
      ],
      "ref": "p22"
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
            "id": "d-off",
            "t": "illus",
            "name": "office-building",
            "x": 5964,
            "y": 1250,
            "size": 100,
            "at": "l1:leaves the office"
          },
          {
            "id": "d-a1",
            "t": "arrow",
            "from": [
              6079,
              1300
            ],
            "to": [
              6174,
              1300
            ],
            "at": "l1:office+300"
          },
          {
            "id": "d-q",
            "t": "text",
            "text": "“Ngày thứ hai của mình bắt đầu.”",
            "x": 5964,
            "y": 1380,
            "size": 50,
            "at": "l1:my second day",
            "hl": [
              {
                "text": "Ngày thứ hai",
                "at": "l1:starts now"
              }
            ]
          },
          {
            "id": "d-key",
            "t": "illus",
            "name": "key",
            "x": 5964,
            "y": 1490,
            "size": 110,
            "at": "l2:key"
          },
          {
            "id": "d-rest",
            "t": "text",
            "text": "phần còn lại",
            "x": 6094,
            "y": 1520,
            "size": 50,
            "at": "l2:rest of the day",
            "color": "muted"
          },
          {
            "id": "d-x",
            "t": "strike",
            "over": "d-rest",
            "at": "l2:into"
          },
          {
            "id": "d-a2",
            "t": "arrow",
            "from": [
              6384,
              1550
            ],
            "to": [
              6484,
              1550
            ],
            "at": "l2:into+200",
            "color": "accent"
          },
          {
            "id": "d-part",
            "t": "text",
            "text": "phần của mình",
            "x": 6504,
            "y": 1520,
            "size": 48,
            "at": "l2:her part",
            "color": "accent",
            "hl": [
              {
                "text": "phần của mình",
                "at": "l2:her part+300"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Thảo starts with one sentence when she leaves the office: My second day starts now.",
          "sub": "Thảo bắt đầu bằng một câu lúc rời công ty: “Ngày thứ hai của mình bắt đầu.”",
          "keys": [
            "Ngày thứ hai của mình bắt đầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "It sounds tiny. But like a key in a lock, it turns the evening from the rest of the day into her part.",
          "sub": "Nghe nhỏ xíu. Nhưng như chìa khoá tra vào ổ, nó xoay buổi tối từ “phần còn lại” thành “phần của mình”.",
          "keys": [
            "phần của mình"
          ]
        }
      ],
      "ref": "p20"
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
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tuần này của bạn",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:checklist"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1250,
            "w": 56,
            "h": 56,
            "stroke": 5,
            "at": "l1"
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1230,
            "size": 70,
            "color": "accent",
            "at": "l1+600"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Rời công sở = ngày mới",
            "x": 8012,
            "y": 1250,
            "size": 50,
            "at": "l1+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1360,
            "w": 56,
            "h": 56,
            "stroke": 5,
            "at": "l2"
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1340,
            "size": 70,
            "color": "accent",
            "at": "l2+600"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Chọn một quãng cho mình",
            "x": 8012,
            "y": 1360,
            "size": 50,
            "at": "l2+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1470,
            "w": 56,
            "h": 56,
            "stroke": 5,
            "at": "l3"
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1450,
            "size": 70,
            "color": "accent",
            "at": "l3+600"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Giữ giờ ngủ, bữa cơm gia đình",
            "x": 8012,
            "y": 1470,
            "size": 50,
            "at": "l3+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1580,
            "w": 56,
            "h": 56,
            "stroke": 5,
            "at": "l4"
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1560,
            "size": 70,
            "color": "accent",
            "at": "l4+600"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Cuối tuần nhìn lại",
            "x": 8012,
            "y": 1580,
            "size": 50,
            "at": "l4+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your checklist. See leaving work as the start of a new day.",
          "sub": "Danh sách tuần này. Coi lúc rời công sở là đầu ngày mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Choose one slot in your own day.",
          "sub": "Chọn một quãng trong ngày riêng cho mình."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Protect sleep and family meals. They are important parts of that day.",
          "sub": "Giữ giờ ngủ và bữa cơm gia đình: đó là phần quan trọng của ngày ấy."
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "At the weekend, look back at where your own day went.",
          "sub": "Cuối tuần, nhìn lại mình đã dùng ngày riêng vào đâu."
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s25b",
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
            "at": "l1",
            "fit": [
              "j-v"
            ],
            "zoom": 1.4,
            "ms": 800
          }
        ],
        "items": [
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "stand"
                }
              ],
              "props": [
                "open-book"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai tuần sau · 22:50",
            "icon": "open-book"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A week later. Monday night again, almost eleven. Same room, same Thảo.",
          "sub": "Một tuần sau. Lại tối thứ Hai, gần mười một giờ. Vẫn căn phòng ấy, vẫn cô Thảo ấy.",
          "who": "det"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "But look: the phone is face down, and the book is finally open. The swallow has slowed down.",
          "sub": "Nhưng nhìn kìa: điện thoại úp xuống, cuốn sách cuối cùng cũng được mở. Con én đã chịu bay chậm lại.",
          "who": "det"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "My evening went exactly where I chose.",
          "sub": "Buổi tối của mình đi đúng nơi mình chọn.",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "to": "l1",
          "key": "tich-tac-dai"
        },
        {
          "at": "l2",
          "key": "lat-sach",
          "offsetMs": 1300
        }
      ],
      "ref": "p20,p8"
    },
    {
      "id": "s26",
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
            "at": "l1:work hours",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:from leaving",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:draw",
            "fit": "H",
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
            "id": "f-1",
            "t": "badge",
            "n": 1,
            "x": 7004,
            "y": 40,
            "at": "l1:work hours"
          },
          {
            "id": "f-2",
            "t": "badge",
            "n": 2,
            "x": 9372,
            "y": 150,
            "at": "l2:from leaving"
          },
          {
            "id": "f-3",
            "t": "badge",
            "n": 3,
            "x": 5236,
            "y": 1120,
            "at": "l3:draw"
          },
          {
            "id": "f-r",
            "t": "ring",
            "around": [
              "c-keep"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:circle"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three things to remember. Work hours are not the whole day.",
          "sub": "Ba điều cần nhớ. Giờ làm không phải cả ngày.",
          "who": "det",
          "keys": [
            "không phải cả ngày"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "From leaving work to the next morning is your own day.",
          "sub": "Từ lúc tan làm đến sáng mai là ngày riêng của bạn.",
          "who": "det",
          "keys": [
            "ngày riêng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Draw your column, and circle one slot that is yours.",
          "sub": "Kẻ cột thời gian, khoanh một quãng là của mình.",
          "who": "det",
          "keys": [
            "một quãng"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s27",
      "module": "QUIZ-01",
      "ref": "questions[19]",
      "data": {
        "q": "After a long workday you still argue in a group chat for an hour, what does that show?",
        "options": [
          "You are completely exhausted, and arguing online is the only thing you can do",
          "Your mind still has energy, it just has not been given a job you chose",
          "Group chats are more important than any other activity in the evening"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "speech-balloon",
        "why": "Đầu óc chưa cạn, chỉ chưa được giao một việc do mình chọn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "After a long workday you still argue in a group chat for an hour, what does that show?",
          "sub": "Sau một ngày làm việc dài bạn vẫn tranh luận trong nhóm chat cả tiếng, điều đó cho thấy gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Your mind still has energy, it just has not been given a job you chose.",
          "sub": "Đầu óc vẫn còn sức, chỉ chưa được giao một việc mình chọn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Your mind isn't empty. It just needs a job you chose.",
          "sub": "Đầu óc chưa cạn, chỉ chưa được giao một việc do mình chọn."
        }
      ]
    },
    {
      "id": "s28",
      "module": "END-05",
      "ref": "outro",
      "data": {
        "text": "Tối nay: kẻ cột, khoanh một quãng",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, draw your column and circle one slot. Then try the forty questions!",
          "sub": "Tối nay kẻ cột, khoanh một quãng của mình. Rồi thử bốn mươi câu hỏi nhé!",
          "face": "laugh"
        }
      ]
    }
  ]
};
