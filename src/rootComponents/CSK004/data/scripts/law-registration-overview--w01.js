// law-registration-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "law-registration-overview--w01",
  "unit": {
    "audience": "law-corp-registration",
    "slug": "law-registration-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Thay đổi gì trong công ty thì phải đăng ký hoặc thông báo?",
    "series": "Đăng ký doanh nghiệp không bị trả hồ sơ — cho người làm thủ tục thay đổi và khai chủ sở hữu hưởng lợi"
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
              "a-paper",
              "a-h1"
            ],
            "move": "cut",
            "zoom": 1.5
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 1400
          }
        ],
        "items": [
          {
            "id": "a-paper",
            "t": "box",
            "x": 60,
            "y": 90,
            "w": 760,
            "h": 420,
            "at": "l1",
            "stroke": 5
          },
          {
            "id": "a-h1",
            "t": "text",
            "text": "THÔNG BÁO",
            "x": 120,
            "y": 120,
            "size": 72,
            "at": "l1:letter"
          },
          {
            "id": "a-h2",
            "t": "text",
            "text": "Sửa, bổ sung hồ sơ",
            "x": 120,
            "y": 220,
            "size": 56,
            "at": "l1:amend",
            "hl": [
              {
                "text": "Sửa, bổ sung",
                "at": "l1:amend"
              }
            ]
          },
          {
            "id": "a-h3",
            "t": "text",
            "text": "Hồ sơ: đổi trụ sở",
            "x": 120,
            "y": 310,
            "size": 46,
            "at": "l2:head office"
          },
          {
            "id": "a-h4",
            "t": "text",
            "text": "Lần 2",
            "x": 560,
            "y": 390,
            "size": 80,
            "at": "l2:Second",
            "color": "coral"
          },
          {
            "id": "a-ic",
            "t": "illus",
            "name": "page-facing-up",
            "x": 120,
            "y": 400,
            "size": 90,
            "at": "l2:Second"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A letter from the registry. Title: please amend and supplement your file.",
          "sub": "Một tờ thông báo từ cơ quan đăng ký: yêu cầu sửa, bổ sung hồ sơ.",
          "keys": [
            "sửa, bổ sung hồ sơ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Which file? Moving the head office. Which time? Second time.",
          "sub": "Hồ sơ gì? Đổi trụ sở. Lần thứ mấy? Lần thứ hai.",
          "keys": [
            "Lần thứ hai"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Same company, same address, same long sigh.",
          "sub": "Vẫn công ty ấy, địa chỉ ấy, tiếng thở dài ấy."
        }
      ],
      "beats": {
        "after": 300
      },
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
            "at": "l2",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think",
                  "face": "worried",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "page-facing-up",
                "alarm-clock"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · 8:30 · bàn pháp chế",
            "icon": "alarm-clock"
          },
          {
            "id": "a-two",
            "t": "text",
            "text": "Chưa 9 giờ: hai việc",
            "x": 60,
            "y": 560,
            "size": 46,
            "at": "l5:Two problems",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 60,
            "y": 650,
            "size": 56,
            "at": "l5:Take care",
            "color": "accent",
            "hl": [
              {
                "text": "Cẩn tắc",
                "at": "l5:care"
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
          "say": "The sigh belongs to Thảo, in-house legal for four years. Monday, eight thirty.",
          "sub": "Tiếng thở dài ấy của Thảo, pháp chế bốn năm. Sáng thứ Hai, tám rưỡi.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First, what exactly do they want fixed this time?",
          "sub": "Thứ nhất, lần này họ muốn sửa đúng chỗ nào?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then the director walks in. Cô Hoa, always in a hurry.",
          "sub": "Rồi giám đốc bước vào. Cô Hoa, lúc nào cũng vội.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, what is this beneficial owner thing? Sort it out this week, okay?",
          "sub": "Thảo, cái chủ sở hữu hưởng lợi là gì vậy em? Tuần này lo luôn nha!",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two problems before nine. Take care now, no regrets later.",
          "sub": "Chưa tới chín giờ đã hai việc. Như câu: “Cẩn tắc vô áy náy.”",
          "keys": [
            "Cẩn tắc vô áy náy"
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
            "text": "Đăng ký hay thông báo?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:registered",
            "hl": [
              {
                "text": "hay",
                "at": "l1:only"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Nộp đại, cầu may",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:file",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:pray"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Hỏi đường trước",
            "x": 2028,
            "y": 260,
            "size": 60,
            "at": "l3:ask",
            "color": "accent",
            "hl": [
              {
                "text": "Hỏi đường",
                "at": "l3:road"
              }
            ]
          },
          {
            "id": "b-own",
            "t": "text",
            "text": "mỗi thay đổi một lối",
            "x": 2068,
            "y": 350,
            "size": 44,
            "at": "l3:path"
          },
          {
            "id": "b-hg",
            "t": "illus",
            "name": "hourglass-not-done",
            "x": 2968,
            "y": 170,
            "size": 110,
            "at": "l4:clock"
          },
          {
            "id": "b-10",
            "t": "text",
            "text": "Phần lớn: 10 ngày",
            "x": 3098,
            "y": 190,
            "size": 56,
            "at": "l4:ten",
            "color": "coral",
            "hl": [
              {
                "text": "10 ngày",
                "at": "l4:ten days"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Một ngày thứ Hai, 7 chặng",
            "x": 2028,
            "y": 460,
            "size": 46,
            "at": "l5:seven stops"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 545,
            "w": 215,
            "h": 90,
            "at": "l5:seven stops+500",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 545,
            "w": 215,
            "h": 90,
            "at": "l5:seven stops+750",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 545,
            "w": 215,
            "h": 90,
            "at": "l5:seven stops+1000",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 545,
            "w": 215,
            "h": 90,
            "at": "l5:seven stops+1250",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 545,
            "w": 215,
            "h": 90,
            "at": "l5:seven stops+1500",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 545,
            "w": 215,
            "h": 90,
            "at": "l5:seven stops+1750",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 545,
            "w": 215,
            "h": 90,
            "at": "l5:seven stops+2000",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "9:00",
            "x": 2053,
            "y": 560,
            "size": 46,
            "at": "l5:seven stops+620"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "10:00",
            "x": 2288,
            "y": 560,
            "size": 46,
            "at": "l5:seven stops+870"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "11:00",
            "x": 2523,
            "y": 560,
            "size": 46,
            "at": "l5:seven stops+1120"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "14:00",
            "x": 2758,
            "y": 560,
            "size": 46,
            "at": "l5:seven stops+1370"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "15:00",
            "x": 2993,
            "y": 560,
            "size": 46,
            "at": "l5:seven stops+1620"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "16:00",
            "x": 3228,
            "y": 560,
            "size": 46,
            "at": "l5:seven stops+1870"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "17:00",
            "x": 3463,
            "y": 560,
            "size": 46,
            "at": "l5:seven stops+2120"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So which company changes must be registered, and which only notified?",
          "sub": "Vậy thay đổi nào trong công ty phải đăng ký, thay đổi nào chỉ cần thông báo?",
          "keys": [
            "đăng ký",
            "thông báo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not: file something and pray.",
          "sub": "Không phải nộp đại rồi cầu may."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But: ask the road first. Each change has its own path.",
          "sub": "Mà là hỏi đường trước. Mỗi thay đổi có lối đi riêng.",
          "keys": [
            "lối đi riêng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And for most of them, the clock reads the same: ten days.",
          "sub": "Và với phần lớn, đồng hồ giống nhau: 10 ngày.",
          "keys": [
            "10 ngày"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo's Monday, in seven stops.",
          "sub": "Theo chân Thảo qua một ngày thứ Hai, bảy chặng."
        }
      ],
      "ref": "p4"
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
          },
          {
            "at": "l7",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 9:00 · Đăng ký thay đổi",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 130,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                }
              ],
              "props": [
                "laptop",
                "file-folder"
              ]
            },
            "at": "l1:Dũng",
            "caption": "9:00 · Dũng ôm hồ sơ",
            "icon": "file-folder"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Đổi nội dung giấy chứng nhận",
            "x": 3996,
            "y": 170,
            "size": 40,
            "at": "l3:certificate"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "→ ĐĂNG KÝ · Điều 30",
            "x": 3996,
            "y": 240,
            "size": 50,
            "at": "l3:thirty",
            "color": "accent",
            "hl": [
              {
                "text": "ĐĂNG KÝ",
                "at": "l3:register"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Nộp trong 10 ngày",
            "x": 3996,
            "y": 330,
            "size": 46,
            "at": "l4:ten days",
            "hl": [
              {
                "text": "10 ngày",
                "at": "l4:ten days"
              }
            ]
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "03 ngày làm việc: cấp giấy",
            "x": 3996,
            "y": 410,
            "size": 44,
            "at": "l5:three working days"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Chưa hợp lệ: báo chỗ sửa",
            "x": 3996,
            "y": 490,
            "size": 44,
            "at": "l6:valid",
            "color": "coral"
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "Từ chối: nêu rõ lý do",
            "x": 3996,
            "y": 570,
            "size": 44,
            "at": "l6:Refused",
            "hl": [
              {
                "text": "lý do",
                "at": "l6:reasons"
              }
            ]
          },
          {
            "id": "c-7",
            "t": "text",
            "text": "Thông báo = việc cần sửa",
            "x": 4856,
            "y": 650,
            "size": 40,
            "at": "l7:to-do",
            "color": "accent",
            "hl": [
              {
                "text": "việc cần sửa",
                "at": "l7:to-do list"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Điều 30 Luật Doanh nghiệp 2020 (Hệ thống Pháp luật)",
            "x": 3996,
            "y": 705,
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
          "say": "First stop, nine a.m. Meet Dũng, the admin officer who clicks submit.",
          "sub": "Chặng một, chín giờ. Đây là Dũng, chuyên viên hành chính, người bấm nút nộp.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "New address, new director. Just paperwork, right? Ok, let's go!",
          "sub": "Đổi địa chỉ, đổi giám đốc. Giấy tờ cả thôi mà? Ok, làm luôn!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not quite. Changing what's on the certificate falls under Article thirty: you register it.",
          "sub": "Chưa hẳn. Đổi nội dung trên giấy chứng nhận thì theo Điều 30: phải đăng ký.",
          "keys": [
            "phải đăng ký"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Within ten days of the change, at the business registration office.",
          "sub": "Trong 10 ngày kể từ ngày có thay đổi, nộp Cơ quan đăng ký kinh doanh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The office checks it within three working days, then issues a new certificate.",
          "sub": "Cơ quan kiểm tra trong 03 ngày làm việc, rồi cấp giấy chứng nhận mới.",
          "keys": [
            "03 ngày làm việc"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Not valid? They list what to fix, in writing. Refused? They must give reasons.",
          "sub": "Chưa hợp lệ thì báo bằng văn bản chỗ cần sửa. Từ chối thì phải nêu rõ lý do.",
          "keys": [
            "nêu rõ lý do"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "thao",
          "say": "So the letter on my desk is a to-do list, not a verdict.",
          "sub": "Vậy tờ thông báo trên bàn là danh sách việc cần sửa, chưa phải bản án.",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s04",
      "module": "BRK-03",
      "data": {
        "value": 10,
        "suffix": " ngày",
        "label": "kể từ ngày có thay đổi",
        "illus": "hourglass-not-done"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "If you remember one number today.",
          "sub": "Hôm nay nhớ một con số thôi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ten days, counted from the day of the change.",
          "sub": "10 ngày, kể từ ngày có thay đổi.",
          "keys": [
            "10 ngày"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "at": 150,
            "fit": "D",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 10:00 · Thông báo thay đổi",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "• Ngành, nghề kinh doanh",
            "x": 5964,
            "y": 170,
            "size": 44,
            "at": "l2:Business lines"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "• Cổ đông sáng lập",
            "x": 5964,
            "y": 240,
            "size": 44,
            "at": "l2:Founding"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "• Cổ đông nước ngoài",
            "x": 5964,
            "y": 310,
            "size": 44,
            "at": "l2:foreign"
          },
          {
            "id": "d-3b",
            "t": "text",
            "text": "(cổ phần chưa niêm yết)",
            "x": 6004,
            "y": 370,
            "size": 32,
            "at": "l2:unlisted",
            "color": "muted"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "• Nội dung khác của hồ sơ",
            "x": 5964,
            "y": 430,
            "size": 44,
            "at": "l2:other"
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "→ THÔNG BÁO · 10 ngày",
            "x": 5964,
            "y": 520,
            "size": 50,
            "at": "l4:Also",
            "color": "accent",
            "hl": [
              {
                "text": "THÔNG BÁO",
                "at": "l4:ten"
              }
            ]
          },
          {
            "id": "d-6",
            "t": "text",
            "text": "người đại diện ghi tên, ký",
            "x": 6004,
            "y": 600,
            "size": 38,
            "at": "l4:signs"
          },
          {
            "id": "d-bx",
            "t": "box",
            "x": 6864,
            "y": 160,
            "w": 700,
            "h": 330,
            "at": "l5:court",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "d-c1",
            "t": "text",
            "text": "Theo bản án, trọng tài",
            "x": 6894,
            "y": 180,
            "size": 44,
            "at": "l5:court",
            "color": "coral"
          },
          {
            "id": "d-c2",
            "t": "text",
            "text": "Đăng ký: 15 ngày",
            "x": 6894,
            "y": 260,
            "size": 46,
            "at": "l5:fifteen",
            "hl": [
              {
                "text": "15 ngày",
                "at": "l5:fifteen"
              }
            ]
          },
          {
            "id": "d-c3",
            "t": "text",
            "text": "Thông báo: 10 ngày",
            "x": 6894,
            "y": 330,
            "size": 46,
            "at": "l5:ten"
          },
          {
            "id": "d-c4",
            "t": "text",
            "text": "kèm bản sao văn bản",
            "x": 6894,
            "y": 410,
            "size": 38,
            "at": "l6:copy",
            "color": "muted"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Điều 30, 31 Luật Doanh nghiệp 2020",
            "x": 5964,
            "y": 705,
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
          "say": "Second stop, ten a.m. Article thirty one handles the rest: you notify.",
          "sub": "Chặng hai, mười giờ. Điều 31 lo nhóm còn lại: thông báo.",
          "keys": [
            "thông báo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Business lines. Founding or foreign investor shareholders of an unlisted joint stock company. And other file content.",
          "sub": "Ngành, nghề kinh doanh. Cổ đông sáng lập, cổ đông nhà đầu tư nước ngoài của công ty cổ phần chưa niêm yết. Và nội dung khác."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Also ten days. The legal representative writes their name and signs. Three working days to review.",
          "sub": "Cũng 10 ngày. Người đại diện theo pháp luật ghi họ tên và ký. Cơ quan có 03 ngày làm việc.",
          "keys": [
            "Cũng 10 ngày"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Court or arbitral decision? Article thirty: fifteen days. Article thirty one: ten.",
          "sub": "Thay đổi theo bản án, quyết định toà án hay phán quyết trọng tài? Điều 30 cho 15 ngày, Điều 31 cho 10 ngày.",
          "keys": [
            "15 ngày"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Counted from when it takes effect. Attach a copy.",
          "sub": "Tính từ khi văn bản có hiệu lực, hồ sơ kèm bản sao văn bản đó."
        }
      ],
      "ref": "p2,p5"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "10:30 · bàn Dũng",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "thumb"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Ngành không in trên giấy, khỏi báo",
          "why": "Điều 49 NĐ 168/2025: nộp thông báo thay đổi kèm nghị quyết, quyết định.",
          "rule": "Hỏi “đăng ký hay thông báo” trước khi soạn"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "New business line approved! It's not printed on the certificate, so we just start selling.",
          "sub": "Duyệt ngành mới rồi! Giấy chứng nhận đâu có in ngành, cứ thế bán thôi.",
          "pose": "thumb",
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
          "say": "Decree one six eight, Article forty nine: file a change notice, with the resolution. The office updates the national database.",
          "sub": "Điều 49 Nghị định 168/2025: nộp thông báo thay đổi kèm nghị quyết, quyết định; cơ quan cập nhật Cơ sở dữ liệu quốc gia.",
          "keys": [
            "thông báo thay đổi"
          ]
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
          "say": "First I ask: register or notify? Then I draft the file.",
          "sub": "Hỏi trước: đăng ký hay thông báo? Rồi mới soạn hồ sơ.",
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
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 11:00 · Chủ sở hữu hưởng lợi",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 130,
            "w": 720,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "cross"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "busts-in-silhouette",
                "detective"
              ]
            },
            "at": "l1:question",
            "caption": "11:00 · phòng giám đốc",
            "icon": "detective"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Nghĩa vụ mới từ 01/7/2025",
            "x": 7932,
            "y": 170,
            "size": 44,
            "at": "l3:July",
            "color": "accent",
            "hl": [
              {
                "text": "01/7/2025",
                "at": "l3:twenty twenty five"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Luật 76/2025/QH15",
            "x": 7932,
            "y": 245,
            "size": 44,
            "at": "l4:seventy six"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Cá nhân sở hữu thực tế",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "l5:actually owns",
            "hl": [
              {
                "text": "thực tế",
                "at": "l5:actually"
              }
            ]
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "hoặc có quyền chi phối",
            "x": 7972,
            "y": 400,
            "size": 44,
            "at": "l5:control"
          },
          {
            "id": "e-ic",
            "t": "illus",
            "name": "identification-card",
            "x": 7932,
            "y": 480,
            "size": 90,
            "at": "l6:photo"
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "Ảnh thẻ ≠ người đứng sau",
            "x": 8042,
            "y": 495,
            "size": 44,
            "at": "l6:behind",
            "color": "coral",
            "hl": [
              {
                "text": "người đứng sau",
                "at": "l6:behind"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Luật 76/2025/QH15 (Thư viện Pháp luật)",
            "x": 7932,
            "y": 705,
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
          "say": "Third stop, eleven a.m. Back to Cô Hoa's question.",
          "sub": "Chặng ba, mười một giờ. Quay lại câu hỏi của Cô Hoa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "So, beneficial owners. That's just our shareholder list, isn't it?",
          "sub": "Rồi, chủ sở hữu hưởng lợi. Là danh sách cổ đông mình đó hả?",
          "pose": "cross"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "First, not always. It's a new duty, from July first, twenty twenty five.",
          "sub": "Thứ nhất, chưa chắc ạ. Đây là nghĩa vụ mới, từ 01/7/2025.",
          "keys": [
            "01/7/2025"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Law seventy six amended the Law on Enterprises and added this concept.",
          "sub": "Luật 76/2025/QH15 sửa đổi Luật Doanh nghiệp, bổ sung khái niệm này."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "An individual who actually owns the charter capital, or has the right to control the company.",
          "sub": "Cá nhân có quyền sở hữu trên thực tế vốn điều lệ, hoặc có quyền chi phối doanh nghiệp.",
          "keys": [
            "trên thực tế"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The shareholder list is the ID photo. The beneficial owner is the real person behind it.",
          "sub": "Danh sách cổ đông là tấm ảnh thẻ. Chủ sở hữu hưởng lợi là người thật đứng sau.",
          "keys": [
            "người thật đứng sau"
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
            "fit": "E",
            "move": "cut"
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
            "id": "e-6",
            "t": "text",
            "text": "Thu thập, cập nhật, lưu giữ",
            "x": 7932,
            "y": 600,
            "size": 40,
            "at": "l1:collect",
            "hl": [
              {
                "text": "lưu giữ",
                "at": "l1:keep"
              }
            ]
          },
          {
            "id": "e-7b",
            "t": "text",
            "text": "Lập trước 7/2025: bổ sung",
            "x": 8792,
            "y": 650,
            "size": 36,
            "at": "l2:next",
            "color": "accent"
          },
          {
            "id": "e-8",
            "t": "text",
            "text": "Đổi thông tin: 10 ngày",
            "x": 8792,
            "y": 700,
            "size": 36,
            "at": "l3:ten days",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Companies must collect, update and keep it, and provide it when authorities ask.",
          "sub": "Doanh nghiệp phải thu thập, cập nhật, lưu giữ thông tin này, cung cấp khi cơ quan có thẩm quyền yêu cầu.",
          "keys": [
            "lưu giữ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Founded before July twenty twenty five? Add it at your next change filing, or earlier if you like.",
          "sub": "Thành lập trước 01/7/2025? Bổ sung khi làm thủ tục thay đổi gần nhất, hoặc sớm hơn nếu muốn.",
          "keys": [
            "thủ tục thay đổi gần nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And when it changes, notify within ten days.",
          "sub": "Và khi thông tin này thay đổi, thông báo trong 10 ngày."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "So our office file is that next filing. Add it, okay?",
          "sub": "Vậy hồ sơ trụ sở là lần gần nhất đó. Bổ sung luôn nha!",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Fun fact: Decree two nine six amended Decree one six eight, applying from July twenty third, twenty twenty six.",
          "sub": "Bạn có biết: Nghị định 168/2025 đã được sửa bởi Nghị định 296/2026, áp dụng từ 23/7/2026.",
          "keys": [
            "23/7/2026"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "It spells out a twenty five percent threshold, and bans standing in someone else's name to contribute capital.",
          "sub": "Bản sửa nêu rõ ngưỡng 25%, và cấm đứng tên thay người khác để góp vốn.",
          "keys": [
            "ngưỡng 25%"
          ]
        }
      ],
      "ref": "p6,p7,p8"
    },
    {
      "id": "s09",
      "module": "BRK-04",
      "data": {
        "title": "Tài liệu hướng dẫn nội bộ",
        "labels": [
          "Sai",
          "Đúng"
        ],
        "wrong": "Soạn trước tháng 7/2026, cứ dùng tiếp",
        "right": "Rà lại theo Nghị định 296/2026",
        "wrongIllus": "page-with-curl",
        "rightIllus": "magnifying-glass-tilted-left"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "An internal guide from before July twenty twenty six?",
          "sub": "Hướng dẫn nội bộ soạn trước tháng 7/2026?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. Review it against Decree two nine six.",
          "sub": "Không. Rà lại theo Nghị định 296/2026.",
          "keys": [
            "Rà lại"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p9"
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
            "text": "④ 14:00 · Vốn điều lệ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "worried",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "tear-off-calendar",
                "money-bag"
              ]
            },
            "at": "l1:Lan",
            "caption": "14:00 · Lan gọi video",
            "icon": "money-bag"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Quá 90 ngày, góp một nửa",
            "x": 60,
            "y": 1250,
            "size": 44,
            "at": "l2:half",
            "color": "coral"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Điều 47: đăng ký thay đổi",
            "x": 60,
            "y": 1320,
            "size": 44,
            "at": "l3:forty seven"
          },
          {
            "id": "f-2b",
            "t": "text",
            "text": "vốn, tỷ lệ theo số đã góp",
            "x": 100,
            "y": 1380,
            "size": 40,
            "at": "l3:paid",
            "hl": [
              {
                "text": "số đã góp",
                "at": "l3:paid"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Trong 30 ngày",
            "x": 60,
            "y": 1445,
            "size": 54,
            "at": "l4:thirty",
            "color": "accent",
            "hl": [
              {
                "text": "30 ngày",
                "at": "l4:thirty days"
              }
            ]
          },
          {
            "id": "f-3b",
            "t": "text",
            "text": "từ ngày cuối phải góp đủ",
            "x": 100,
            "y": 1520,
            "size": 38,
            "at": "l4:last day"
          },
          {
            "id": "f-cal",
            "t": "illus",
            "name": "tear-off-calendar",
            "x": 60,
            "y": 1580,
            "size": 70,
            "at": "l6:mark"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Có giấy: ghi lịch hạn góp",
            "x": 150,
            "y": 1590,
            "size": 42,
            "at": "l6:deadline",
            "hl": [
              {
                "text": "ghi lịch",
                "at": "l6:mark"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Điều 47, 68 Luật Doanh nghiệp 2020",
            "x": 60,
            "y": 1795,
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
          "say": "Fourth stop, two p.m. Meet Lan, Thảo's old classmate, legal at a new three member company.",
          "sub": "Chặng bốn, hai giờ chiều. Đây là Lan, bạn học cũ của Thảo, pháp chế một công ty ba thành viên.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Ninety days since our certificate. One member paid only half. Do we have to do anything?",
          "sub": "Qua 90 ngày từ khi có giấy rồi. Một thành viên mới góp một nửa. Có phải làm gì không?",
          "face": "worried",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Yes. Under Article forty seven, register the capital and ratios by the amount paid.",
          "sub": "Có. Theo Điều 47, đăng ký thay đổi vốn điều lệ và tỷ lệ vốn góp theo số đã góp.",
          "keys": [
            "theo số đã góp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Within thirty days, from the last day to pay in full.",
          "sub": "Trong 30 ngày, kể từ ngày cuối cùng phải góp đủ.",
          "keys": [
            "30 ngày"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That member keeps rights matching what was actually paid.",
          "sub": "Thành viên đó có các quyền tương ứng phần vốn đã góp."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Lesson: the day you get the certificate, mark the contribution deadline.",
          "sub": "Rút ra: có giấy chứng nhận là ghi lịch hạn góp vốn ngay.",
          "keys": [
            "ghi lịch hạn góp vốn"
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
      "ref": "p11,p12"
    },
    {
      "id": "s11",
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
            "at": "l3",
            "fit": [
              "f-d1",
              "f-d2",
              "f-d3"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-d1",
            "t": "text",
            "text": "Giảm: hoàn trả (từ 02 năm)",
            "x": 920,
            "y": 1730,
            "size": 32,
            "at": "l3:refund"
          },
          {
            "id": "f-d2",
            "t": "text",
            "text": "mua lại phần vốn góp",
            "x": 960,
            "y": 1775,
            "size": 30,
            "at": "l3:buy back"
          },
          {
            "id": "f-d3",
            "t": "text",
            "text": "vốn không góp đủ",
            "x": 960,
            "y": 1815,
            "size": 30,
            "at": "l3:unpaid"
          },
          {
            "id": "f-n",
            "t": "text",
            "text": "Xong tăng, giảm: 10 ngày",
            "x": 60,
            "y": 1670,
            "size": 38,
            "at": "l4:ten days",
            "color": "accent"
          },
          {
            "id": "f-kk",
            "t": "text",
            "text": "Kê khai khống: bị cấm",
            "x": 60,
            "y": 1730,
            "size": 38,
            "at": "l5:overstated",
            "color": "coral",
            "hl": [
              {
                "text": "bị cấm",
                "at": "l5:banned"
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
          "say": "Article sixty eight, for multi member companies. Up: members contribute more, or new members join.",
          "sub": "Điều 68, công ty hai thành viên trở lên. Tăng vốn: thành viên góp thêm, hoặc nhận thành viên mới."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Down: refund members after two straight years in business, buy back a share, or unpaid capital.",
          "sub": "Giảm vốn: hoàn trả vốn khi đã kinh doanh liên tục từ 02 năm, mua lại phần vốn góp, hoặc vốn không góp đủ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Within ten days of paying it all, notify the office in writing.",
          "sub": "Trong 10 ngày kể từ khi thanh toán xong, thông báo bằng văn bản.",
          "keys": [
            "10 ngày"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And Law seventy six calls unpaid capital without adjustment overstated capital. A banned act.",
          "sub": "Luật 76/2025 coi góp không đủ mà không điều chỉnh là kê khai khống vốn điều lệ, hành vi bị cấm.",
          "keys": [
            "kê khai khống"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Paper capital can't hide an empty pocket.",
          "sub": "Vốn trên giấy không che được túi tiền thật.",
          "keys": [
            "túi tiền thật"
          ]
        }
      ],
      "ref": "p10,p13"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Đổi người đại diện: ai ký giấy đề nghị?",
        "illus": "fountain-pen"
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
          "say": "Changing the legal representative: who signs the form, the old one or the new one?",
          "sub": "Đổi người đại diện: ai ký giấy đề nghị, người cũ hay người mới?",
          "keys": [
            "ai ký giấy đề nghị"
          ]
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
          },
          {
            "at": "l8",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l8:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 15:00 · Người đại diện, trụ sở",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2888,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold",
                  "face": "thinking"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "file-folder",
                "office-building"
              ]
            },
            "at": "l1:Dũng",
            "caption": "15:00 · hai bộ hồ sơ kế tiếp",
            "icon": "office-building"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Điều 43: giấy đề nghị",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l3:forty three"
          },
          {
            "id": "g-1b",
            "t": "text",
            "text": "+ nghị quyết, quyết định",
            "x": 2068,
            "y": 1330,
            "size": 40,
            "at": "l3:resolution"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Người ký: Chủ tịch",
            "x": 2028,
            "y": 1410,
            "size": 48,
            "at": "l5:chair",
            "color": "accent",
            "hl": [
              {
                "text": "Chủ tịch",
                "at": "l5:chair"
              }
            ]
          },
          {
            "id": "g-2b",
            "t": "text",
            "text": "không nhất thiết người cũ",
            "x": 2068,
            "y": 1485,
            "size": 40,
            "at": "l5:necessarily",
            "color": "coral"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Điều 40: nơi trụ sở mới",
            "x": 2028,
            "y": 1570,
            "size": 44,
            "at": "l6:new office",
            "hl": [
              {
                "text": "trụ sở mới",
                "at": "l6:new office"
              }
            ]
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Đổi cơ quan thuế:",
            "x": 2028,
            "y": 1650,
            "size": 42,
            "at": "l7:tax office"
          },
          {
            "id": "g-4b",
            "t": "text",
            "text": "xong thủ tục thuế trước",
            "x": 2068,
            "y": 1715,
            "size": 40,
            "at": "l7:first",
            "color": "accent"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Điều 40, 43 Nghị định 168/2025/NĐ-CP",
            "x": 2028,
            "y": 1795,
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
          "say": "Fifth stop, three p.m. Dũng brings the next two files.",
          "sub": "Chặng năm, ba giờ chiều. Dũng ôm hai bộ hồ sơ kế tiếp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "New legal representative, new office. The old director has to sign, right?",
          "sub": "Đổi người đại diện, đổi trụ sở. Giám đốc cũ phải ký, đúng không?",
          "face": "thinking",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article forty three of Decree one six eight: an application, plus a resolution or decision.",
          "sub": "Điều 43 Nghị định 168/2025: giấy đề nghị, kèm nghị quyết, quyết định của cơ quan có thẩm quyền."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The signer is the chair, of the council, the company or the board. Not necessarily the old representative.",
          "sub": "Người ký là Chủ tịch Hội đồng thành viên, Chủ tịch công ty hoặc Chủ tịch Hội đồng quản trị, không nhất thiết người cũ.",
          "keys": [
            "không nhất thiết người cũ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Moving office, Article forty: file at the provincial office where the new office is.",
          "sub": "Đổi trụ sở theo Điều 40: nộp ở cơ quan đăng ký cấp tỉnh nơi đặt trụ sở mới.",
          "keys": [
            "trụ sở mới"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "If the move changes your tax office, finish the tax steps first.",
          "sub": "Nếu việc chuyển làm đổi cơ quan thuế quản lý, xong thủ tục thuế trước.",
          "keys": [
            "thủ tục thuế trước"
          ]
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "dung",
          "say": "Got it. Tax first, registration second.",
          "sub": "Rõ rồi. Thuế trước, đăng ký sau.",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s14",
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
            "text": "⑥ 16:00 · Nộp ở đâu?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth stop"
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
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "desktop-computer",
                "globe-with-meridians"
              ]
            },
            "at": "l1:portal",
            "caption": "16:00 · Dũng mở cổng nộp",
            "icon": "desktop-computer"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Cấp tỉnh, nơi trụ sở chính",
            "x": 3996,
            "y": 1260,
            "size": 44,
            "at": "l3:provincial"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Cổng thông tin quốc gia",
            "x": 3996,
            "y": 1340,
            "size": 46,
            "at": "l4:portal",
            "color": "accent",
            "hl": [
              {
                "text": "quốc gia",
                "at": "l4:national"
              }
            ]
          },
          {
            "id": "h-2b",
            "t": "text",
            "text": "kê khai → lệ phí → kết quả",
            "x": 4036,
            "y": 1415,
            "size": 38,
            "at": "l4:fees"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Giấy điện tử = bản giấy",
            "x": 3996,
            "y": 1495,
            "size": 44,
            "at": "l5:electronic"
          },
          {
            "id": "h-qr",
            "t": "illus",
            "name": "input-numbers",
            "x": 3996,
            "y": 1560,
            "size": 70,
            "at": "l5:QR"
          },
          {
            "id": "h-3b",
            "t": "text",
            "text": "có mã QR",
            "x": 4086,
            "y": 1570,
            "size": 40,
            "at": "l5:QR"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: tóm tắt Nghị định 296/2026/NĐ-CP (Hệ thống Pháp luật)",
            "x": 3996,
            "y": 1795,
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
          "say": "Sixth stop, four p.m. Dũng opens the portal, ready to resubmit the office file.",
          "sub": "Chặng sáu, bốn giờ chiều. Dũng mở cổng nộp, định nộp lại hồ sơ trụ sở.",
          "keys": [
            "nộp lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Wait, where exactly does this file go? And did they refuse us?",
          "sub": "Mà hồ sơ này nộp đúng ra là ở đâu? Họ từ chối mình rồi à?",
          "face": "worried",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Files go to the provincial registration office where the head office is.",
          "sub": "Hồ sơ nộp cơ quan đăng ký kinh doanh cấp tỉnh nơi đặt trụ sở chính."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Under Decree two nine six, it all runs on the national portal: filing, fees, results.",
          "sub": "Theo Nghị định 296/2026, từ kê khai, nộp lệ phí đến nhận kết quả đều trên Cổng thông tin quốc gia.",
          "keys": [
            "Cổng thông tin quốc gia"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The electronic certificate is worth the paper one, and carries a QR code.",
          "sub": "Giấy chứng nhận điện tử có giá trị như bản giấy, có mã QR."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
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
            "fit": "H",
            "move": "cut"
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
            "id": "h-4",
            "t": "text",
            "text": "Uỷ quyền: cả hai bên",
            "x": 4856,
            "y": 1740,
            "size": 38,
            "at": "l1:Both",
            "color": "coral",
            "hl": [
              {
                "text": "cả hai bên",
                "at": "l1:Both sides"
              }
            ]
          },
          {
            "id": "h-4b",
            "t": "text",
            "text": "VNeID mức 2 / chữ ký số",
            "x": 4856,
            "y": 1790,
            "size": 34,
            "at": "l1:VNeID"
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "Từ chối (Điều 59): đang giải thể,",
            "x": 3996,
            "y": 1660,
            "size": 34,
            "at": "l2:dissolved"
          },
          {
            "id": "h-5b",
            "t": "text",
            "text": "không hoạt động tại địa chỉ",
            "x": 3996,
            "y": 1705,
            "size": 34,
            "at": "l2:address"
          },
          {
            "id": "h-6",
            "t": "text",
            "text": "Phần lớn: chưa hợp lệ, sửa được",
            "x": 3996,
            "y": 1755,
            "size": 36,
            "at": "l3:fixed",
            "color": "accent",
            "hl": [
              {
                "text": "sửa được",
                "at": "l3:fixed"
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
          "say": "Authorising a change of representative, owner or founders? Both sides verify: VNeID level two or a public digital signature.",
          "sub": "Uỷ quyền đổi người đại diện, chủ sở hữu, cổ đông sáng lập? Cả hai bên xác thực VNeID mức 2 hoặc chữ ký số công cộng.",
          "keys": [
            "Cả hai bên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article fifty nine lists refusals, like a company being dissolved, or not operating at its registered address.",
          "sub": "Điều 59 Nghị định 168/2025 nêu trường hợp từ chối, như đang giải thể, hay “không hoạt động tại địa chỉ đã đăng ký”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But most returned files are simply not valid yet. They can be fixed.",
          "sub": "Nhưng phần lớn hồ sơ bị trả là do chưa hợp lệ, sửa được.",
          "keys": [
            "sửa được"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "So I fix it point by point, and file again. Not refused!",
          "sub": "Vậy sửa từng điểm họ nêu, rồi nộp lại. Chưa bị từ chối!",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "ref": "p16,p17"
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
          },
          {
            "at": 150,
            "fit": "I",
            "ms": 900
          },
          {
            "at": "l7",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l8",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 17:00 · Bảng theo dõi",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Last stop"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1220,
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
                  "id": "hoa",
                  "side": "right",
                  "pose": "thumb",
                  "enter": "pop",
                  "at": "l7"
                }
              ],
              "props": [
                "page-facing-up",
                "clipboard"
              ]
            },
            "at": "l1:desk",
            "caption": "17:00 · cùng bàn, cùng tờ thông báo",
            "icon": "clipboard"
          },
          {
            "id": "i-c-c0",
            "t": "box",
            "x": 5964,
            "y": 1270,
            "w": 40,
            "h": 40,
            "at": "l2:content",
            "stroke": 5
          },
          {
            "id": "i-c-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1254,
            "size": 50,
            "at": "l2:content+600",
            "color": "accent"
          },
          {
            "id": "i-c-l0",
            "t": "text",
            "text": "Nội dung, ngày, loại thủ tục",
            "x": 6026,
            "y": 1260,
            "size": 38,
            "at": "l2:content+200"
          },
          {
            "id": "i-c-c1",
            "t": "box",
            "x": 5964,
            "y": 1360,
            "w": 40,
            "h": 40,
            "at": "l3:ten days",
            "stroke": 5
          },
          {
            "id": "i-c-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1344,
            "size": 50,
            "at": "l3:ten days+600",
            "color": "accent"
          },
          {
            "id": "i-c-l1",
            "t": "text",
            "text": "Hạn: 10 ngày từ thay đổi",
            "x": 6026,
            "y": 1350,
            "size": 38,
            "at": "l3:ten days+200"
          },
          {
            "id": "i-c-c2",
            "t": "box",
            "x": 5964,
            "y": 1450,
            "w": 40,
            "h": 40,
            "at": "l4:threshold",
            "stroke": 5
          },
          {
            "id": "i-c-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1434,
            "size": 50,
            "at": "l4:threshold+600",
            "color": "accent"
          },
          {
            "id": "i-c-l2",
            "t": "text",
            "text": "Ai vượt ngưỡng hưởng lợi?",
            "x": 6026,
            "y": 1440,
            "size": 38,
            "at": "l4:threshold+200"
          },
          {
            "id": "i-c-c3",
            "t": "box",
            "x": 5964,
            "y": 1540,
            "w": 40,
            "h": 40,
            "at": "l5:signs",
            "stroke": 5
          },
          {
            "id": "i-c-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1524,
            "size": 50,
            "at": "l5:signs+600",
            "color": "accent"
          },
          {
            "id": "i-c-l3",
            "t": "text",
            "text": "Ai ký, ai xác thực?",
            "x": 6026,
            "y": 1530,
            "size": 38,
            "at": "l5:signs+200"
          },
          {
            "id": "i-c-c4",
            "t": "box",
            "x": 5964,
            "y": 1630,
            "w": 40,
            "h": 40,
            "at": "l6:file",
            "stroke": 5
          },
          {
            "id": "i-c-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1614,
            "size": 50,
            "at": "l6:file+600",
            "color": "accent"
          },
          {
            "id": "i-c-l4",
            "t": "text",
            "text": "Nộp, theo dõi 03 ngày",
            "x": 6026,
            "y": 1620,
            "size": 38,
            "at": "l6:file+200"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 5964,
            "y": 1730,
            "size": 48,
            "at": "l8:care",
            "color": "accent",
            "hl": [
              {
                "text": "vô áy náy",
                "at": "l8:regrets"
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
          "say": "Last stop, five p.m. Same desk, same letter. Thảo draws a table.",
          "sub": "Chặng cuối, năm giờ chiều. Vẫn bàn ấy, tờ thông báo ấy. Thảo kẻ một cái bảng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First, each change: its content, the date it happened, the type of procedure.",
          "sub": "Thứ nhất, từng thay đổi: nội dung, ngày có thay đổi, loại thủ tục.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Second, the deadline: ten days from the change.",
          "sub": "Thứ hai, hạn nộp: 10 ngày kể từ ngày có thay đổi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Third, did anyone just cross the beneficial owner threshold?",
          "sub": "Thứ ba, có ai vừa vượt ngưỡng chủ sở hữu hưởng lợi không?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Fourth, who signs the form, and who must verify online.",
          "sub": "Thứ tư, ai ký giấy đề nghị, ai phải xác thực điện tử."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Fifth, file it, and follow the result for three working days.",
          "sub": "Thứ năm, nộp và theo dõi kết quả trong 03 ngày làm việc."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "hoa",
          "say": "Add our capital increase and new director too. Right, we file this week!",
          "sub": "Ghi luôn tăng vốn, đổi giám đốc vào bảng. Rồi, tuần này nộp nha!",
          "pose": "thumb",
          "face": "happy"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Take care now, no regrets later. With one table, no change slips past ten days.",
          "sub": "Cẩn tắc vô áy náy. Một bảng theo dõi, không việc nào lọt quá mốc 10 ngày.",
          "keys": [
            "không việc nào lọt"
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
            "fit": "I",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "J",
            "ms": 900
          },
          {
            "at": "l2:drafting",
            "fit": "all",
            "ms": 1200
          },
          {
            "at": "l3",
            "fit": "C",
            "zoom": 0.8,
            "ms": 900
          },
          {
            "at": "l4",
            "fit": "E",
            "zoom": 0.8,
            "ms": 900
          },
          {
            "at": "l4:end",
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thay đổi · việc làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l2"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 3528,
            "y": 40,
            "at": "l2:notify"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 5496,
            "y": 40,
            "at": "l3:Two"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 9432,
            "y": 40,
            "at": "l4:owners"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Các thay đổi trong năm",
            "x": 7932,
            "y": 1270,
            "size": 44,
            "at": "l5:changes",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Loại thủ tục, người ký",
            "x": 7932,
            "y": 1345,
            "size": 44,
            "at": "l5:procedure"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Hạn nộp từng dòng",
            "x": 7932,
            "y": 1420,
            "size": 44,
            "at": "l5:deadline"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: chủ sở hữu hưởng lợi",
            "x": 7932,
            "y": 1520,
            "size": 38,
            "at": "l6:Next",
            "color": "muted"
          },
          {
            "id": "j-nx2",
            "t": "text",
            "text": "Lập mới: chuỗi thành lập",
            "x": 7932,
            "y": 1580,
            "size": 34,
            "at": "l6:setup",
            "color": "muted"
          },
          {
            "id": "j-note",
            "t": "text",
            "text": "Bài để tham khảo, không phải tư vấn vụ việc cụ thể. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1720,
            "size": 28,
            "at": "l7",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-note2",
            "t": "text",
            "text": "Quy định đăng ký doanh nghiệp có thể đã sửa đổi: kiểm văn bản mới nhất trước khi nộp.",
            "x": 7932,
            "y": 1770,
            "size": 28,
            "at": "l7",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So, one: before drafting, ask whether to register or notify.",
          "sub": "Tóm lại, một: trước khi soạn, hỏi đăng ký hay thông báo.",
          "keys": [
            "đăng ký hay thông báo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: most changes, ten days. Court ordered registration, fifteen.",
          "sub": "Hai: phần lớn thay đổi, 10 ngày. Đăng ký theo bản án, 15 ngày.",
          "keys": [
            "10 ngày"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: since July twenty twenty five, beneficial owners are on your list too.",
          "sub": "Ba: từ 01/7/2025, chủ sở hữu hưởng lợi cũng vào danh sách theo dõi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Today: list this year's expected changes, each with its procedure, signer and deadline.",
          "sub": "Việc làm ngay: lập bảng các thay đổi dự kiến trong năm, mỗi dòng có loại thủ tục, người ký, hạn nộp.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: beneficial owners. First registration? See the setup series.",
          "sub": "Bài tiếp: chủ sở hữu hưởng lợi. Đăng ký lần đầu? Xem chuỗi thành lập công ty."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Registration rules may have changed, so check the latest text before filing.",
          "sub": "Quy định đăng ký doanh nghiệp có thể đã sửa đổi, kiểm văn bản mới nhất trước khi nộp.",
          "keys": [
            "kiểm văn bản mới nhất"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p20"
    },
    {
      "id": "s18",
      "module": "QUIZ-01",
      "data": {
        "q": "What misconception about business lines does the article correct?",
        "options": [
          "That every new line requires the company to move its head office first",
          "That adding a line needs no notice because it is not printed on the certificate",
          "That business lines can only be changed once every ten years by a court order"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "page-facing-up",
        "why": "Ngành nghề không in trên giấy vẫn phải nộp thông báo thay đổi (Điều 49 NĐ 168/2025)."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What misconception about business lines does the article correct?",
          "sub": "Bài sửa hiểu lầm nào về ngành nghề kinh doanh?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "That adding a line needs no notice because it is not printed on the certificate.",
          "sub": "Rằng thêm ngành thì khỏi thông báo vì ngành không in trên giấy chứng nhận."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Dũng has rewound that one already.",
          "sub": "Dũng đã tua lại vụ này rồi."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[4]"
    },
    {
      "id": "s19",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Thay đổi gì thì đăng ký, gì thì thông báo"
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
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23: đồ vật kể chuyện — tờ “Thông báo sửa, bổ sung hồ sơ — lần 2” của hồ sơ đổi trụ sở (intro) → kéo ra thấy Thảo, Cô Hoa hỏi chủ sở hữu hưởng lợi. Đét đứng trái + bảng trắng 10 ô theo MỘT NGÀY THỨ HAI của Thảo: câu hỏi chính (p4) → 9:00 đăng ký thay đổi, Điều 30 (p1; BRK-03 10 ngày) → 10:00 thông báo, Điều 31 + bản án 15 ngày (p2, p5) → “Khoan đã!” Dũng thêm ngành cứ thế bán (p3, p4) → 11:00 chủ sở hữu hưởng lợi (p6, p7, p8; BRK-04 tài liệu cũ p9) → 14:00 Lan gọi về vốn, đóng vai chị Phương (p11, p12, p10, p13) → BRK-07 ai ký → 15:00 người đại diện, trụ sở (p14, p15) → 16:00 Dũng mở cổng: nộp ở đâu, vì sao bị trả (p16, p17) → 17:00 bảng năm bước, Thảo đóng vai Linh (p18, p19; khép vòng cùng bàn, cùng tờ thông báo, “Cẩn tắc vô áy náy”) → tóm tắt (outro, p20). Nhân vật: Thảo, Cô Hoa, Dũng, Lan. Mọi điều luật, mốc lấy từ bài; lưu ý chung #133 ở ô J.",
  "loop": {
    "open": "s01",
    "close": "s16"
  }
};
