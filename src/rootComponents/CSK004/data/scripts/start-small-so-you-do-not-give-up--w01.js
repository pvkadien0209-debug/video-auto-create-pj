// Kịch bản video W lần 3 (#110) — "Bắt đầu nhỏ: vì sao hăng hái quá lại dễ bỏ cuộc" · chuỗi "Sống trọn 24 giờ — dùng giờ ngoài công sở cho chính mình"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); nhân vật hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "start-small-so-you-do-not-give-up--w01",
  "unit": {
    "audience": "office-workers-own-time",
    "slug": "start-small-so-you-do-not-give-up",
    "door": "ky-nang",
    "level": "B1",
    "title": "Bắt đầu nhỏ: vì sao hăng hái quá lại dễ bỏ cuộc",
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
            "id": "a-n",
            "t": "text",
            "text": "15 phút",
            "x": 60,
            "y": 130,
            "size": 200,
            "at": "l1:fifteen",
            "color": "accent",
            "hl": [
              {
                "text": "15 phút",
                "at": "l1:minutes"
              }
            ]
          },
          {
            "id": "a-nb",
            "t": "text",
            "text": "một việc · tuần đầu",
            "x": 70,
            "y": 380,
            "size": 56,
            "at": "l1:one task"
          },
          {
            "id": "a-big",
            "t": "text",
            "text": "Ta tưởng: càng to càng tốt?",
            "x": 70,
            "y": 480,
            "size": 50,
            "at": "l2:hour",
            "color": "muted"
          },
          {
            "id": "a-bigx",
            "t": "strike",
            "over": "a-big",
            "at": "l2:end"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Arnold Bennett, How to Live on 24 Hours a Day (1908), chương III, VI, XII",
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
          "say": "Fifteen minutes, one task. That's how a plan that lasts can begin.",
          "sub": "Mười lăm phút, một việc. Kế hoạch giữ được lâu có thể bắt đầu như thế.",
          "keys": [
            "Mười lăm phút, một việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet we start with an hour a night, and three new habits at once.",
          "sub": "Vậy mà ta toàn mở màn bằng một tiếng mỗi tối, ba thói quen mới cùng lúc.",
          "keys": [
            "ba thói quen mới cùng lúc"
          ]
        }
      ],
      "ref": "intro,p19"
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "enter": "pop",
                  "at": "l1",
                  "face": "happy"
                }
              ],
              "props": [
                "television",
                "alarm-clock"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "caption": "Chủ nhật, 22:00 · vừa xem video",
            "icon": "television"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "Gym + khoá tiếng Anh + 5:00",
            "x": 900,
            "y": 650,
            "size": 44,
            "at": "l3:gym",
            "color": "coral"
          },
          {
            "id": "a-cd",
            "t": "text",
            "text": "“Dục tốc bất đạt”",
            "x": 70,
            "y": 600,
            "size": 58,
            "at": "l4:haste",
            "color": "accent",
            "hl": [
              {
                "text": "bất đạt",
                "at": "l4:waste"
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
          "say": "Office worker, fast talker, and tonight, freshly inspired by a video. Sunday, ten p.m.",
          "sub": "Nhân viên văn phòng, nói nhanh như gió, tối nay vừa được một video truyền lửa. Mười giờ tối Chủ nhật.",
          "keys": [
            "truyền lửa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "This week: the gym, an online English course, and a five a.m. alarm! Let's go!",
          "sub": "Tuần này: phòng gym, khoá tiếng Anh trực tuyến, báo thức năm giờ sáng! Làm luôn!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our ancestors had a warning for this: haste makes waste.",
          "sub": "Ông bà mình có câu cho chuyện này: “Dục tốc bất đạt.”",
          "keys": [
            "Dục tốc bất đạt"
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
      "ref": "intro,p1"
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
            "text": "Vì sao hăng quá lại dễ bỏ?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:quit",
            "hl": [
              {
                "text": "dễ bỏ",
                "at": "l1:quit first"
              }
            ]
          },
          {
            "id": "b-i1",
            "t": "illus",
            "name": "television",
            "x": 2028,
            "y": 150,
            "size": 80,
            "at": "l2:video"
          },
          {
            "id": "b-i2",
            "t": "illus",
            "name": "party-popper",
            "x": 2138,
            "y": 150,
            "size": 80,
            "at": "l2:New Year"
          },
          {
            "id": "b-i3",
            "t": "illus",
            "name": "mobile-phone",
            "x": 2248,
            "y": 150,
            "size": 80,
            "at": "l2:friends"
          },
          {
            "id": "b-feel",
            "t": "text",
            "text": "Tính bằng cảm xúc, không bằng giờ",
            "x": 2028,
            "y": 270,
            "size": 48,
            "at": "l3:feelings",
            "hl": [
              {
                "text": "cảm xúc",
                "at": "l3:feelings"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: lười",
            "x": 2028,
            "y": 370,
            "size": 52,
            "at": "l4:flares",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:fast"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: hăng quá sức",
            "x": 2488,
            "y": 370,
            "size": 58,
            "at": "l4:fast",
            "color": "accent",
            "hl": [
              {
                "text": "hăng quá sức",
                "at": "l4:beware"
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
          "say": "So why do the most excited plans quit first?",
          "sub": "Vậy vì sao kế hoạch hăng nhất lại bỏ sớm nhất?",
          "keys": [
            "bỏ sớm nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Big plans are born in excitement: an inspiring video, New Year's Day, friends showing off.",
          "sub": "Kế hoạch lớn ra đời lúc đang hứng: sau video truyền cảm hứng, ngày đầu năm, khi thấy bạn bè khoe."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three new habits sound easy, because we count in feelings, not real hours.",
          "sub": "Ba việc mới nghe thật dễ, vì ta tính bằng cảm xúc chứ không bằng số giờ thật.",
          "keys": [
            "tính bằng cảm xúc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Bennett says enthusiasm flares fast and dies just as fast. Beware your own enthusiasm.",
          "sub": "Bennett nói nhiệt huyết bùng nhanh thì tắt cũng nhanh. Hãy coi chừng chính sự hăng hái của mình.",
          "keys": [
            "coi chừng"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "text": "2 tuần của Dũng",
            "x": 2028,
            "y": 470,
            "size": 52,
            "at": "l1:two weeks",
            "hl": [
              {
                "text": "2 tuần",
                "at": "l1:two weeks"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l1:two weeks+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2233,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l1:two weeks+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2438,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l1:two weeks+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2643,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l1:two weeks+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2848,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l1:two weeks+1200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3053,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l1:two weeks+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3258,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l1:two weeks+1600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3463,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l1:two weeks+1800",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "CN 22:00",
            "x": 2040,
            "y": 588,
            "size": 34,
            "at": "l1:two weeks+500"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T2–T6",
            "x": 2245,
            "y": 588,
            "size": 44,
            "at": "l1:two weeks+700"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "CN sau",
            "x": 2450,
            "y": 588,
            "size": 34,
            "at": "l1:two weeks+900"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T2 sáng",
            "x": 2655,
            "y": 588,
            "size": 34,
            "at": "l1:two weeks+1100"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T2 tối",
            "x": 2860,
            "y": 588,
            "size": 34,
            "at": "l1:two weeks+1300"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T3",
            "x": 3065,
            "y": 588,
            "size": 44,
            "at": "l1:two weeks+1500"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T4",
            "x": 3270,
            "y": 588,
            "size": 44,
            "at": "l1:two weeks+1700"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "CN 22:00",
            "x": 3475,
            "y": 588,
            "size": 34,
            "at": "l1:two weeks+1900"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Dũng for two weeks, from that sofa back to that sofa. Eight stops.",
          "sub": "Mình theo Dũng hai tuần, từ chiếc ghế ấy về lại chiếc ghế ấy. Tám chặng.",
          "keys": [
            "hai tuần"
          ]
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
            "id": "c-t",
            "t": "text",
            "text": "① T2 → T6 · Ba ngày anh hùng",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first"
          },
          {
            "id": "c-123",
            "t": "text",
            "text": "T2–T4: ✓✓✓ mỗi ngày",
            "x": 3996,
            "y": 170,
            "size": 52,
            "at": "l1:all three",
            "hl": [
              {
                "text": "✓✓✓",
                "at": "l1:hero"
              }
            ]
          },
          {
            "id": "c-thu",
            "t": "text",
            "text": "T5: tiếp khách về khuya",
            "x": 3996,
            "y": 260,
            "size": 50,
            "at": "l2:client",
            "color": "muted"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "stand",
                  "face": "sad"
                }
              ],
              "props": [
                "bed",
                "alarm-clock"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "at": "l3",
            "caption": "Thứ Sáu, 5:00",
            "icon": "alarm-clock"
          },
          {
            "id": "c-fri",
            "t": "text",
            "text": "T6: tắt báo thức",
            "x": 3996,
            "y": 350,
            "size": 50,
            "at": "l3:off",
            "color": "coral"
          },
          {
            "id": "c-cls",
            "t": "text",
            "text": "Tối: khoá học không mở",
            "x": 3996,
            "y": 440,
            "size": 50,
            "at": "l4:closed",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Monday to Wednesday. Gym, course, five a.m., all three, every day. A hero.",
          "sub": "Chặng một: thứ Hai tới thứ Tư. Gym, khoá học, dậy năm giờ, đủ cả ba mỗi ngày. Anh hùng.",
          "keys": [
            "Anh hùng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thursday, a client dinner runs late.",
          "sub": "Thứ Năm, buổi tiếp khách kéo tới khuya."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Friday, five a.m. Alarm off. Five more minutes.",
          "sub": "Năm giờ sáng thứ Sáu. Tắt báo thức. Năm phút nữa thôi.",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That night, the course stays closed.",
          "sub": "Tối ấy, khoá học vẫn đóng."
        }
      ],
      "ref": "p3"
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
            "text": "② CN sau · Thẻ gym còn hạn",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:second"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "sad"
                }
              ],
              "props": [
                "credit-card"
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
            "at": "l1:Sunday",
            "caption": "Chủ nhật tuần sau",
            "icon": "credit-card"
          },
          {
            "id": "d-0",
            "t": "text",
            "text": "Tuần 2: 0/3",
            "x": 5964,
            "y": 170,
            "size": 72,
            "at": "l1:stopped",
            "color": "coral"
          },
          {
            "id": "d-card",
            "t": "illus",
            "name": "credit-card",
            "x": 5964,
            "y": 280,
            "size": 80,
            "at": "l2:card"
          },
          {
            "id": "d-yr",
            "t": "text",
            "text": "thẻ gym: còn gần 1 năm",
            "x": 6064,
            "y": 295,
            "size": 46,
            "at": "l2:year"
          },
          {
            "id": "d-fire",
            "t": "illus",
            "name": "fire",
            "x": 5964,
            "y": 420,
            "size": 90,
            "at": "l3:kindling"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Hăng hái = mồi lửa",
            "x": 6074,
            "y": 430,
            "size": 56,
            "at": "l3:kindling",
            "color": "accent",
            "hl": [
              {
                "text": "mồi lửa",
                "at": "l3:kindling"
              }
            ]
          },
          {
            "id": "d-wood",
            "t": "illus",
            "name": "wood",
            "x": 5964,
            "y": 540,
            "size": 90,
            "at": "l3:firewood"
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "không phải củi",
            "x": 6074,
            "y": 555,
            "size": 54,
            "at": "l3:firewood",
            "hl": [
              {
                "text": "củi",
                "at": "l3:firewood"
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
          "say": "Second stop: the next Sunday. All three have stopped.",
          "sub": "Chặng hai: Chủ nhật tuần sau. Cả ba việc đều dừng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "And my gym card is still valid for almost a year.",
          "sub": "Mà thẻ gym của mình còn hạn gần một năm.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Enthusiasm is the kindling, not the firewood.",
          "sub": "Hăng hái là mồi lửa, không phải củi.",
          "keys": [
            "mồi lửa, không phải củi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Something slower and steadier has to keep the fire going.",
          "sub": "Phải có thứ chậm hơn, bền hơn giữ cho lửa cháy."
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Chủ nhật, 22:30",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Tại app chưa đúng, tìm app mới",
          "why": "Đổi công cụ chỉ là hoãn phần khó; mỗi lần làm lại, kế hoạch lại to hơn.",
          "rule": "Không có lối tắt, chỉ có bước đầu vừa chân"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "It's the app! A better app, and a bigger plan!",
          "sub": "Tại cái app! App xịn hơn, kế hoạch to hơn!",
          "face": "happy",
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
          "say": "Five note apps, three vocab apps, and a bigger plan every restart.",
          "sub": "Năm app ghi chú, ba app từ vựng, lần nào làm lại kế hoạch cũng to hơn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Changing tools just puts off the hard part.",
          "sub": "Đổi công cụ chỉ là hoãn phần khó.",
          "keys": [
            "hoãn phần khó"
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
          "who": "dung",
          "say": "No new app. One task small enough for a tired day.",
          "sub": "Không app mới. Một việc đủ nhỏ cho ngày mệt.",
          "phase": "redo",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "No shortcut. Only a first step that fits your stride.",
          "sub": "Không có lối tắt, chỉ có bước đầu vừa chân.",
          "phase": "redo",
          "keys": [
            "bước đầu vừa chân"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "sfx": [
        {
          "at": "l2",
          "key": "whoosh"
        }
      ],
      "ref": "p7,p8"
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
            "text": "③ T2 sáng · Có bí quyết không?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third"
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "Bí quyết: không có",
            "x": 7932,
            "y": 170,
            "size": 64,
            "at": "l2:no",
            "color": "coral",
            "hl": [
              {
                "text": "không có",
                "at": "l2:no"
              }
            ]
          },
          {
            "id": "e-hard",
            "t": "text",
            "text": "Con đường gian nan, biết trước",
            "x": 7932,
            "y": 280,
            "size": 48,
            "at": "l2:hard road"
          },
          {
            "id": "e-sw",
            "t": "illus",
            "name": "person-swimming",
            "x": 7932,
            "y": 380,
            "size": 110,
            "at": "l3:jump"
          },
          {
            "id": "e-jump",
            "t": "text",
            "text": "Chấp nhận → nhảy",
            "x": 8062,
            "y": 400,
            "size": 58,
            "at": "l3:jump",
            "color": "accent",
            "hl": [
              {
                "text": "nhảy",
                "at": "l3:jump"
              }
            ]
          },
          {
            "id": "e-cold",
            "t": "illus",
            "name": "cold-face",
            "x": 8772,
            "y": 380,
            "size": 110,
            "at": "l4:colder"
          },
          {
            "id": "e-edge",
            "t": "text",
            "text": "Đứng bờ càng lâu càng lạnh",
            "x": 8902,
            "y": 400,
            "size": 46,
            "at": "l4:edge"
          },
          {
            "id": "e-exp",
            "t": "text",
            "text": "Biết trước tối mệt, ngày muốn bỏ",
            "x": 7932,
            "y": 560,
            "size": 48,
            "at": "l5:tired",
            "hl": [
              {
                "text": "Biết trước",
                "at": "l5:expect"
              }
            ]
          },
          {
            "id": "e-sur",
            "t": "text",
            "text": "→ không bị bất ngờ",
            "x": 7932,
            "y": 640,
            "size": 48,
            "at": "l5:surprise",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Monday morning. Dũng asks the big question: is there a secret?",
          "sub": "Chặng ba: sáng thứ Hai. Dũng hỏi câu to tát: có bí quyết nào không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Bennett says no. Using time for yourself is a hard road. Know that from day one.",
          "sub": "Bennett nói không. Dùng thời gian cho mình là con đường gian nan. Biết điều đó ngay từ đầu.",
          "keys": [
            "con đường gian nan"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Accept the hard part, then jump, like into cold water.",
          "sub": "Chấp nhận cái khó, rồi nhảy, như nhảy xuống nước lạnh.",
          "keys": [
            "nước lạnh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The longer you stand on the edge thinking, the colder it feels.",
          "sub": "Càng đứng trên bờ cân nhắc lâu thì càng thấy lạnh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Expect tired nights and days you want to quit. Then they won't surprise you.",
          "sub": "Biết trước sẽ có tối mệt, có ngày muốn bỏ, thì khi chúng đến bạn không bị bất ngờ."
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
            "fit": "E",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "F",
            "ms": 900
          },
          {
            "at": "l5",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ T2 tối · Nhỏ đến mức nào?",
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "stand",
                  "face": "sad"
                }
              ],
              "props": [
                "headphone"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:exhausted",
            "caption": "Thứ Hai, 21:00 · mệt rã rời",
            "icon": "tired-face"
          },
          {
            "id": "f-less",
            "t": "text",
            "text": "Ít hơn mức nghĩ là làm được",
            "x": 60,
            "y": 1250,
            "size": 44,
            "at": "l2:less"
          },
          {
            "id": "f-win",
            "t": "text",
            "text": "Thắng nhỏ > thua to",
            "x": 60,
            "y": 1315,
            "size": 52,
            "at": "l3:small success",
            "color": "accent",
            "hl": [
              {
                "text": "Thắng nhỏ",
                "at": "l3:small success"
              }
            ]
          },
          {
            "id": "f-conf",
            "t": "text",
            "text": "thua → mất tự tin",
            "x": 520,
            "y": 1322,
            "size": 40,
            "at": "l3:confidence",
            "color": "coral"
          },
          {
            "id": "f-test",
            "t": "text",
            "text": "Phép thử: tối mệt nhất tuần?",
            "x": 60,
            "y": 1395,
            "size": 48,
            "at": "l4:most tired",
            "hl": [
              {
                "text": "tối mệt nhất",
                "at": "l4:most tired"
              }
            ]
          },
          {
            "id": "f-15",
            "t": "text",
            "text": "1 tiếng ✗ · 15 phút ✓",
            "x": 60,
            "y": 1475,
            "size": 52,
            "at": "l5:fifteen",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Monday night. Dũng is exhausted. Perfect test conditions.",
          "sub": "Chặng bốn: tối thứ Hai. Dũng mệt rã rời. Điều kiện thử nghiệm hoàn hảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Bennett says start with less than you think you can manage.",
          "sub": "Bennett khuyên bắt đầu ít hơn mức mình nghĩ là làm được."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A small success beats a big failure. Failure eats your confidence, and restarting gets very hard.",
          "sub": "Thành công nhỏ hơn thất bại lớn. Thất bại ăn mòn tự tin, rồi bắt đầu lại rất khó.",
          "keys": [
            "Thành công nhỏ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "An easy test: can you do it on the most tired evening of your week?",
          "sub": "Phép thử dễ dùng: làm được cả vào tối mệt nhất tuần không?",
          "keys": [
            "tối mệt nhất tuần"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Tonight? An hour of English, no way. Fifteen minutes, maybe.",
          "sub": "Tối nay á? Một tiếng tiếng Anh thì chịu. Mười lăm phút thì được.",
          "face": "thinking"
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s09",
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
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1590,
            "w": 36,
            "h": 36,
            "at": "l1:one task",
            "stroke": 4
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 63,
            "y": 1574,
            "size": 46,
            "at": "l1:one task+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "1 việc",
            "x": 110,
            "y": 1584,
            "size": 34,
            "at": "l1:one task+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 460,
            "y": 1590,
            "w": 36,
            "h": 36,
            "at": "l1:fixed",
            "stroke": 4
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 463,
            "y": 1574,
            "size": 46,
            "at": "l1:fixed+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "1 khung giờ cố định",
            "x": 510,
            "y": 1584,
            "size": 34,
            "at": "l1:fixed+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1665,
            "w": 36,
            "h": 36,
            "at": "l2:funny",
            "stroke": 4
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 63,
            "y": 1649,
            "size": 46,
            "at": "l2:funny+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "ngắn đến buồn cười",
            "x": 110,
            "y": 1659,
            "size": 34,
            "at": "l2:funny+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 460,
            "y": 1665,
            "w": 36,
            "h": 36,
            "at": "l2:nearest",
            "stroke": 4
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 463,
            "y": 1649,
            "size": 46,
            "at": "l2:nearest+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "ngày bắt đầu gần nhất",
            "x": 510,
            "y": 1659,
            "size": 34,
            "at": "l2:nearest+200"
          },
          {
            "id": "f-c4",
            "t": "box",
            "x": 60,
            "y": 1740,
            "w": 36,
            "h": 36,
            "at": "l2:tick",
            "stroke": 4
          },
          {
            "id": "f-k4",
            "t": "text",
            "text": "✓",
            "x": 63,
            "y": 1724,
            "size": 46,
            "at": "l2:tick+600",
            "color": "accent"
          },
          {
            "id": "f-l4",
            "t": "text",
            "text": "đánh dấu mỗi lần xong",
            "x": 110,
            "y": 1734,
            "size": 34,
            "at": "l2:tick+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: one task, not three. One fixed time.",
          "sub": "Vậy: một việc, không phải ba. Một khung giờ cố định."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A length so short it's a bit funny, the nearest start day, and a tick each time.",
          "sub": "Thời lượng ngắn đến hơi buồn cười, ngày bắt đầu gần nhất, và đánh dấu mỗi lần xong.",
          "keys": [
            "ngắn đến hơi buồn cười"
          ]
        }
      ],
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
            "text": "⑤ T3 · Thảo đọc lại sách",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:fifth"
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
                  "id": "dung",
                  "side": "left"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "open-book"
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
            "at": "l1:Thảo",
            "caption": "Thứ Ba · giờ nghỉ trưa",
            "icon": "open-book"
          },
          {
            "id": "g-plan",
            "t": "text",
            "text": "“1 cuốn/tuần, 1 tiếng/tối”",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l2:one book",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Tuesday. This is Thảo, Dũng's desk neighbour. She hasn't read a book in years.",
          "sub": "Chặng năm: thứ Ba. Đây là Thảo, bàn bên Dũng. Nhiều năm rồi chưa đọc cuốn sách nào."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'm reading again! One book a week, an hour every night.",
          "sub": "Mình đọc sách lại đây! Mỗi tuần một cuốn, tối nào cũng một tiếng.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sounds familiar. Let's run two versions.",
          "sub": "Nghe quen quen. Thử hai phiên bản nhé."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s11",
      "module": "BRK-04",
      "data": {
        "title": "Thảo đọc lại sách",
        "wrong": "1 tiếng mỗi tối → tuần 3 bỏ hẳn",
        "right": "15 phút sau bữa tối, 4 tối/tuần",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrongIllus": "sleeping-face",
        "rightIllus": "open-book"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A: three nights, then one, then none.",
          "sub": "A: ba tối, rồi một tối, rồi bỏ hẳn."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "B: fifteen minutes, four nights a week.",
          "sub": "B: mười lăm phút, bốn tối mỗi tuần.",
          "keys": [
            "mười lăm phút"
          ]
        }
      ],
      "ref": "p12"
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
          }
        ],
        "items": [
          {
            "id": "g-a",
            "t": "text",
            "text": "A: “mình không hợp đọc sách”",
            "x": 2028,
            "y": 1360,
            "size": 44,
            "at": "l1:not a reader",
            "color": "muted"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: nửa cuốn/tháng",
            "x": 2028,
            "y": 1430,
            "size": 44,
            "at": "l2:half"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "→ muốn đọc lâu hơn",
            "x": 2448,
            "y": 1430,
            "size": 44,
            "at": "l2:wants",
            "color": "accent"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Nhỏ mà đều thắng to mà đứt",
            "x": 2028,
            "y": 1560,
            "size": 56,
            "at": "l3:steady",
            "color": "accent",
            "hl": [
              {
                "text": "Nhỏ mà đều",
                "at": "l3:steady"
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
          "say": "Version A ends with: I'm just not a reader.",
          "sub": "Bản A kết bằng câu: “Chắc mình không hợp đọc sách.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Version B: half a book in a month, but reading has a place now, and she wants more.",
          "sub": "Bản B: một tháng mới nửa cuốn, nhưng việc đọc đã có chỗ, và cô bắt đầu muốn đọc lâu hơn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Small and steady beats big and broken.",
          "sub": "Nhỏ mà đều thắng to mà đứt.",
          "keys": [
            "Nhỏ mà đều"
          ]
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s13",
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ T4 · Giờ ở đâu ra?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sixth"
          },
          {
            "id": "h-s",
            "t": "text",
            "text": "7 + 7 + 2 = 16",
            "x": 3996,
            "y": 1260,
            "size": 84,
            "at": "l2:sixteen",
            "hl": [
              {
                "text": "16",
                "at": "l2:sixteen"
              }
            ]
          },
          {
            "id": "h-8",
            "t": "text",
            "text": "còn 8 giờ đi đâu?",
            "x": 3996,
            "y": 1380,
            "size": 60,
            "at": "l3:eight",
            "color": "coral",
            "hl": [
              {
                "text": "8 giờ",
                "at": "l3:eight"
              }
            ]
          },
          {
            "id": "h-g",
            "t": "text",
            "text": "lướt mạng · thêm 1 tập",
            "x": 3996,
            "y": 1480,
            "size": 42,
            "at": "l3:scrolling",
            "color": "muted"
          },
          {
            "id": "h-17",
            "t": "text",
            "text": "Làm 8 giờ: 17 → còn ~7",
            "x": 4836,
            "y": 1270,
            "size": 50,
            "at": "l4:eight hours"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Thiếu giờ được giao việc",
            "x": 4836,
            "y": 1380,
            "size": 56,
            "at": "l5:job",
            "color": "accent",
            "hl": [
              {
                "text": "được giao việc",
                "at": "l5:job"
              }
            ]
          },
          {
            "id": "h-cal",
            "t": "illus",
            "name": "spiral-calendar",
            "x": 4836,
            "y": 1500,
            "size": 90,
            "at": "l6:appointment"
          },
          {
            "id": "h-20",
            "t": "text",
            "text": "20 phút sau bữa tối = cuộc hẹn",
            "x": 4946,
            "y": 1520,
            "size": 44,
            "at": "l6:twenty",
            "hl": [
              {
                "text": "cuộc hẹn",
                "at": "l6:appointment"
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
          "say": "Sixth stop: Wednesday. Dũng asks: where does even fifteen minutes come from?",
          "sub": "Chặng sáu: thứ Tư. Dũng hỏi: đến mười lăm phút thì lấy ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Bennett's sum: work seven, sleep seven, two flexible hours for meals and travel. Sixteen.",
          "sub": "Phép tính của Bennett: làm bảy, ngủ bảy, hai giờ du di ăn uống, đi lại. Mười sáu.",
          "keys": [
            "Mười sáu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So where do the other eight go? Scrolling, one more episode, waiting for bedtime.",
          "sub": "Vậy tám giờ kia đi đâu? Lướt điện thoại, thêm một tập phim, ngồi chờ đến giờ ngủ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Work eight hours? Then seventeen, about seven left. Everyone differs, but almost everyone finds gaps.",
          "sub": "Làm tám tiếng? Thành mười bảy, còn chừng bảy. Mỗi người mỗi khác, nhưng ai cũng tìm ra vài khoảng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "You're not short of hours, just hours with a job.",
          "sub": "Không thiếu giờ, chỉ thiếu giờ được giao việc.",
          "keys": [
            "giờ được giao việc"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Week one: give one small slot a task, say twenty minutes after dinner, and keep it like an appointment.",
          "sub": "Tuần đầu: giao cho một khoảng nhỏ một việc, chẳng hạn hai mươi phút sau bữa tối, giữ như giữ cuộc hẹn.",
          "keys": [
            "giữ như giữ cuộc hẹn"
          ]
        }
      ],
      "ref": "p14,p15,p16"
    },
    {
      "id": "s14",
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
            "text": "⑦ Kế hoạch hai tuần",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:seventh"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "headphone",
                "tear-off-calendar"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:plan",
            "caption": "Lịch dán tủ lạnh",
            "icon": "tear-off-calendar"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "1. Nghe + nói theo 1 bài ngắn",
            "x": 5964,
            "y": 1260,
            "size": 42,
            "at": "l2:listen"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "2. Sau rửa bát: T2/T4/T6",
            "x": 5964,
            "y": 1330,
            "size": 42,
            "at": "l3:Monday"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "3. 15 phút, hẹn giờ",
            "x": 5964,
            "y": 1400,
            "size": 42,
            "at": "l3:fifteen",
            "hl": [
              {
                "text": "15 phút",
                "at": "l3:fifteen"
              }
            ]
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "4. ✓ lên lịch tủ lạnh",
            "x": 5964,
            "y": 1470,
            "size": 42,
            "at": "l4:tick"
          },
          {
            "id": "i-w2",
            "t": "text",
            "text": "Tuần 2: giữ nguyên",
            "x": 5964,
            "y": 1570,
            "size": 48,
            "at": "l5:same"
          },
          {
            "id": "i-20",
            "t": "text",
            "text": "Đủ 2 tuần → 20 phút",
            "x": 5964,
            "y": 1650,
            "size": 50,
            "at": "l5:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "20 phút",
                "at": "l5:twenty"
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
          "say": "Seventh stop: Dũng's new plan, for two weeks.",
          "sub": "Chặng bảy: kế hoạch mới của Dũng, cho hai tuần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "One task: listen to a short lesson and repeat it.",
          "sub": "Một việc: nghe một bài ngắn rồi nói theo.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Monday, Wednesday, Friday, right after the dishes. Fifteen minutes, timer on.",
          "sub": "Thứ Hai, thứ Tư, thứ Sáu, ngay sau khi rửa bát. Mười lăm phút, hẹn giờ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Each time, a tick on the calendar on the fridge.",
          "sub": "Mỗi lần xong, một dấu tích lên tờ lịch dán tủ lạnh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Week two stays the same, even if it feels easy. Two full weeks, then twenty minutes.",
          "sub": "Tuần hai giữ nguyên, kể cả khi thấy dễ. Đủ hai tuần mới lên hai mươi phút."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Grow after you've kept it, not to feel clever.",
          "sub": "Tăng sau khi đã giữ được, không tăng để thấy mình giỏi.",
          "keys": [
            "Tăng sau khi đã giữ được"
          ]
        }
      ],
      "ref": "p19,p20"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Lỡ một buổi là hỏng hết?",
        "illus": "broken-heart"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "But wait.",
          "sub": "Nhưng khoan."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Miss one session, and it's all ruined?",
          "sub": "Lỡ một buổi là hỏng hết sao?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
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
          }
        ],
        "items": [
          {
            "id": "i-x2",
            "t": "text",
            "text": "Lỡ 1 buổi → bù ×2",
            "x": 5964,
            "y": 1740,
            "size": 46,
            "at": "l2:double",
            "color": "muted"
          },
          {
            "id": "i-x2x",
            "t": "strike",
            "over": "i-x2",
            "at": "l3:usual"
          },
          {
            "id": "i-back",
            "t": "text",
            "text": "→ về đúng mức cũ",
            "x": 6424,
            "y": 1740,
            "size": 46,
            "at": "l3:usual",
            "color": "accent"
          },
          {
            "id": "i-fail",
            "t": "text",
            "text": "Thất bại = lấy cớ bỏ hết",
            "x": 6804,
            "y": 1790,
            "size": 40,
            "at": "l4:excuse",
            "color": "coral",
            "hl": [
              {
                "text": "lấy cớ",
                "at": "l4:excuse"
              }
            ]
          },
          {
            "id": "i-slow",
            "t": "text",
            "text": "Chậm đến buồn cười, nhưng đều",
            "x": 5964,
            "y": 1805,
            "size": 38,
            "at": "l6:slow",
            "hl": [
              {
                "text": "nhưng đều",
                "at": "l6:steady"
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
          "say": "Week two, Wednesday. A late meeting. Dũng misses one.",
          "sub": "Tuần hai, thứ Tư. Họp muộn. Dũng lỡ một buổi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Then Friday, thirty minutes. I'll double it!",
          "sub": "Vậy thứ Sáu ba mươi phút. Bù gấp đôi!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No doubling. Next session, back to the usual amount.",
          "sub": "Đừng bù gấp đôi. Buổi sau quay về đúng mức cũ.",
          "keys": [
            "đúng mức cũ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Missing one or two isn't failure. Failure is using one miss as an excuse to drop it all.",
          "sub": "Lỡ một hai buổi chưa phải thất bại. Thất bại là lấy một buổi lỡ làm cớ bỏ cả kế hoạch.",
          "keys": [
            "làm cớ bỏ cả kế hoạch"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Bennett calls early failure the biggest trap. Quit early, and you decide: I'm not that kind of person.",
          "sub": "Bennett gọi thất bại sớm là cái bẫy lớn nhất. Bỏ sớm, ta kết luận: mình không phải kiểu người đó."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "So go absurdly slow at first, but steady.",
          "sub": "Nên lúc đầu cứ chậm đến buồn cười, nhưng đều.",
          "keys": [
            "nhưng đều"
          ]
        }
      ],
      "ref": "p17,p18"
    },
    {
      "id": "s17",
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
            "at": "l1",
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
            "text": "⑧ CN 22:00 · Hai tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:last"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "television",
                "alarm-clock"
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
            "at": "l1:sofa",
            "caption": "Chủ nhật, 22:00 · lại một video",
            "icon": "television"
          },
          {
            "id": "j-6",
            "t": "text",
            "text": "6 dấu ✓, không lỡ… à, 1 lần",
            "x": 7932,
            "y": 1260,
            "size": 44,
            "at": "l2:ticks"
          },
          {
            "id": "j-q",
            "t": "text",
            "text": "Việc 1 thành nếp chưa?",
            "x": 7932,
            "y": 1350,
            "size": 50,
            "at": "l3:habit",
            "hl": [
              {
                "text": "thành nếp",
                "at": "l3:habit"
              }
            ]
          },
          {
            "id": "j-busy",
            "t": "text",
            "text": "Qua được tuần bận?",
            "x": 7932,
            "y": 1430,
            "size": 50,
            "at": "l3:busy"
          },
          {
            "id": "j-later",
            "t": "text",
            "text": "Gym → danh sách “để sau”",
            "x": 7932,
            "y": 1520,
            "size": 50,
            "at": "l4:later",
            "color": "accent",
            "hl": [
              {
                "text": "“để sau”",
                "at": "l4:later list"
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
          "say": "Last stop: Sunday, ten p.m., two weeks later. Same sofa, another inspiring video.",
          "sub": "Chặng cuối: mười giờ tối Chủ nhật, hai tuần sau. Vẫn chiếc ghế ấy, lại một video truyền lửa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My ticks look great! Now the gym again? This guy runs ten kilometres at five a.m.!",
          "sub": "Dấu tích đẹp quá! Giờ quay lại gym nhỉ? Anh này năm giờ sáng chạy mười cây số kìa!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First ask: is task one a habit yet? Does it survive a busy week?",
          "sub": "Hỏi trước đã: việc thứ nhất thành nếp chưa? Có qua được tuần bận không?",
          "keys": [
            "thành nếp chưa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Not yet. Gym goes on the later list. The idea just waits in line.",
          "sub": "Chưa. Gym vào danh sách “để sau”. Ý tưởng chỉ xếp hàng thôi.",
          "face": "thinking"
        }
      ],
      "ref": "p21"
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
          }
        ],
        "items": [
          {
            "id": "j-run",
            "t": "illus",
            "name": "person-running",
            "x": 7932,
            "y": 1620,
            "size": 80,
            "at": "l1:runner"
          },
          {
            "id": "j-cmp",
            "t": "text",
            "text": "So với tuần trước của mình",
            "x": 8032,
            "y": 1635,
            "size": 46,
            "at": "l1:last week",
            "hl": [
              {
                "text": "tuần trước",
                "at": "l1:last week"
              }
            ]
          },
          {
            "id": "j-cd",
            "t": "text",
            "text": "Dục tốc bất đạt → chậm mà chắc",
            "x": 7932,
            "y": 1750,
            "size": 50,
            "at": "l3:haste",
            "color": "accent",
            "hl": [
              {
                "text": "chậm mà chắc",
                "at": "l3:slow and steady"
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
          "say": "And that runner has a different life, health and hours. Compare this week with your last week.",
          "sub": "Còn anh chạy bộ kia có hoàn cảnh, sức khoẻ, giờ giấc khác. Hãy so tuần này với tuần trước của mình.",
          "keys": [
            "tuần trước của mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Enthusiasm isn't bad. Let it start you today, and let a small plan keep you going.",
          "sub": "Hăng hái không xấu. Để nó thúc bạn bắt đầu hôm nay, còn giữ nhịp thì giao cho một kế hoạch nhỏ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Haste makes waste. Slow and steady, and Dũng is still going.",
          "sub": "“Dục tốc bất đạt.” Chậm mà chắc, và Dũng vẫn đang đi.",
          "keys": [
            "Chậm mà chắc"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "to": "l3",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "p22,p23"
    },
    {
      "id": "s19",
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
            "at": "l1:hard",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2:tired",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:grow",
            "fit": "I",
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
            "x": 8572,
            "y": 170,
            "at": "l1:hard"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1530,
            "at": "l2:tired"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6604,
            "y": 1650,
            "at": "l3:grow"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: accept it will be hard, then jump.",
          "sub": "Tóm lại: chấp nhận sẽ khó, rồi nhảy.",
          "keys": [
            "chấp nhận sẽ khó"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Start small enough for your most tired evening.",
          "sub": "Bắt đầu đủ nhỏ cho tối mệt nhất.",
          "keys": [
            "tối mệt nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Keep it steady for a few weeks, then grow.",
          "sub": "Giữ đều vài tuần, rồi mới tăng.",
          "keys": [
            "rồi mới tăng"
          ]
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
      "ref": "questions[16]",
      "data": {
        "q": "What simple test tells you whether a first task is small enough?",
        "options": [
          "It looks impressive when you share it with your friends on social media",
          "You can still do it on the most tired evening of your week",
          "You can finish it in one weekend without any help from other people"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "straight-ruler",
        "why": "Làm được cả tối mệt nhất tuần thì đủ nhỏ để giữ lâu."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What simple test tells you whether a first task is small enough?",
          "sub": "Phép thử đơn giản nào cho biết việc đầu tiên đã đủ nhỏ chưa?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "You can still do it on the most tired evening of your week.",
          "sub": "Bạn vẫn làm được vào buổi tối mệt nhất tuần."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "If it works on your worst evening, it's small enough to last.",
          "sub": "Làm được cả tối mệt nhất tuần thì đủ nhỏ để giữ lâu."
        }
      ]
    },
    {
      "id": "s25",
      "module": "END-05",
      "ref": "outro",
      "data": {
        "text": "Một việc, mười lăm phút, tối nay",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, pick one task and fifteen minutes for tonight, and set a timer. Then try the forty questions!",
          "sub": "Hôm nay chọn một việc, mười lăm phút tối nay, đặt hẹn giờ. Rồi thử bốn mươi câu nhé!",
          "face": "laugh"
        }
      ]
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 (hạt nhân #136 + biến thể #144): Đét đứng trái + bảng trắng 10 ô theo HAI TUẦN của Dũng: CN 22:00 video truyền lửa, ba việc cùng lúc (A) → câu hỏi chính (B) → ① T2–T6 ba ngày anh hùng rồi gãy (C) → ② CN sau thẻ gym còn hạn (D) → “Khoan đã!” đổi app → ③ T2 sáng không bí quyết, nước lạnh (E) → ④ T2 tối phép thử tối mệt nhất + checklist (F) → ⑤ T3 Thảo đọc lại sách, BRK-04 Cách A/B (G) → ⑥ T4 phép tính 7+7+2=16 (H) → ⑦ kế hoạch hai tuần, BRK-07 “lỡ một buổi”, không bù gấp đôi (I) → ⑧ CN 22:00 hai tuần sau, danh sách “để sau” (J, khép vòng “Dục tốc bất đạt”). Đổi tên: Thịnh (p3) → Dũng; người đọc sách lại (p12) → Thảo; người làm mẫu (p19) → Dũng. Bản cũ: w145/bak/start-small-so-you-do-not-give-up--w01.js.",
  "loop": {
    "open": "s01",
    "close": "s17"
  }
};
