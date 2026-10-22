// bar-exam-calendar--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-exam-calendar--w01",
  "unit": {
    "audience": "bar-exam-overview",
    "slug": "bar-exam-calendar",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Lịch một đợt kiểm tra: từ thông báo đến công bố kết quả",
    "series": "Kỳ kiểm tra kết quả tập sự từ A đến Z — cấu trúc, điều kiện, lịch và cách chấm"
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
            "id": "a-d",
            "t": "text",
            "text": "21/11/2026",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l1:november",
            "color": "accent"
          },
          {
            "id": "a-h",
            "t": "text",
            "text": "6 giờ 50 · bài viết 1",
            "x": 70,
            "y": 320,
            "size": 60,
            "at": "l1:six fifty",
            "hl": [
              {
                "text": "6 giờ 50",
                "at": "l1:six fifty"
              }
            ]
          },
          {
            "id": "a-dk",
            "t": "text",
            "text": "“dự kiến”",
            "x": 70,
            "y": 450,
            "size": 84,
            "at": "l3:planned",
            "color": "coral",
            "hl": [
              {
                "text": "dự kiến",
                "at": "l3:planned"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Thông báo 01/TB-HĐKT ngày 12/8/2026 · Tạp chí Luật sư Việt Nam",
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
          "say": "November twenty first, twenty twenty six. Six fifty in the morning.",
          "sub": "Ngày 21/11/2026. Sáu giờ năm mươi sáng.",
          "keys": [
            "Sáu giờ năm mươi sáng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That's when paper one of round two is listed. One hundred eighty minutes.",
          "sub": "Giờ ghi trong lịch cho bài viết thứ nhất đợt 2. Một trăm tám mươi phút."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But one small word sits in that headline: planned.",
          "sub": "Nhưng có một chữ nhỏ trong tiêu đề bài báo: “dự kiến”.",
          "keys": [
            "dự kiến"
          ]
        }
      ],
      "ref": "intro,p6"
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
            "at": "l3",
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
                  "pose": "phone"
                }
              ],
              "props": [
                "tear-off-calendar",
                "newspaper"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1",
            "caption": "Tối 13/8/2026 · thông báo vừa đăng",
            "icon": "tear-off-calendar"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 900,
            "y": 640,
            "size": 54,
            "at": "l3:careful",
            "color": "accent",
            "hl": [
              {
                "text": "Cẩn tắc",
                "at": "l3:careful"
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
          "say": "Meet Thảo, a trainee lawyer, the evening that notice hits the bar journal.",
          "sub": "Đây là Thảo, luật sư tập sự, vào tối thông báo ấy lên Tạp chí Luật sư Việt Nam."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Everyone asks: when's the exam, when's the list, when are results? Let me look.",
          "sub": "Ai cũng hỏi: bao giờ thi, bao giờ có danh sách, bao giờ có kết quả. Để mình tra.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Careful now, no regrets later. Thảo opens the original, not the group chat.",
          "sub": "“Cẩn tắc vô áy náy.” Thảo mở văn bản gốc, không mở nhóm chat.",
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
            "text": "Lịch thật nằm ở đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:real",
            "hl": [
              {
                "text": "Lịch thật",
                "at": "l1:real"
              }
            ]
          },
          {
            "id": "b-tt",
            "t": "text",
            "text": "Thông tư 10/2021 → khung thời hạn",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:circular"
          },
          {
            "id": "b-tb",
            "t": "text",
            "text": "Thông báo từng đợt → ngày cụ thể",
            "x": 2028,
            "y": 250,
            "size": 50,
            "at": "l2:notice",
            "color": "accent",
            "hl": [
              {
                "text": "ngày cụ thể",
                "at": "l2:exact"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: ngày cố định hằng năm",
            "x": 2028,
            "y": 350,
            "size": 46,
            "at": "l3:fixed",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:own"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So where is the real calendar of a round?",
          "sub": "Vậy lịch thật của một đợt kiểm tra nằm ở đâu?",
          "keys": [
            "lịch thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In two places. Circular ten sets the time limits. Each round's notice sets the exact days.",
          "sub": "Ở hai chỗ: Thông tư 10/2021/TT-BTP đặt khung thời hạn, thông báo của Hội đồng từng đợt ghi ngày cụ thể.",
          "keys": [
            "ngày cụ thể"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not a fixed date every year. Each round has its own.",
          "sub": "Không phải ngày cố định hằng năm. Đợt nào lịch nấy."
        }
      ],
      "ref": "intro,p2"
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
            "text": "7 chặng · tờ lịch của Thảo",
            "x": 2028,
            "y": 530,
            "size": 50,
            "at": "l1:seven stops",
            "hl": [
              {
                "text": "tờ lịch",
                "at": "l1:calendar"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+0",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+260",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+520",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+780",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+1040",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+1560",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "6 tháng",
            "x": 2043,
            "y": 632,
            "size": 40,
            "at": "l1:seven+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "30 ngày",
            "x": 2278,
            "y": 632,
            "size": 40,
            "at": "l1:seven+380"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "20/10",
            "x": 2513,
            "y": 632,
            "size": 40,
            "at": "l1:seven+640"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "21–22/11",
            "x": 2748,
            "y": 632,
            "size": 40,
            "at": "l1:seven+900"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Lịch ngược",
            "x": 2983,
            "y": 632,
            "size": 34,
            "at": "l1:seven+1160"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "15 + 15",
            "x": 3218,
            "y": 632,
            "size": 40,
            "at": "l1:seven+1420"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Theo dõi",
            "x": 3453,
            "y": 632,
            "size": 40,
            "at": "l1:seven+1680"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seven stops onto Thảo's calendar, from notice to results.",
          "sub": "Bảy chặng trên tờ lịch của Thảo, từ thông báo đến kết quả.",
          "keys": [
            "Bảy chặng"
          ]
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Ít nhất 6 tháng/lần",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first stop"
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "Khoản 1 Điều 18 Thông tư",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l1:article",
            "color": "muted"
          },
          {
            "id": "c-d1",
            "t": "text",
            "text": "Đợt 1/2026: 05, 06, 07/6",
            "x": 3996,
            "y": 250,
            "size": 50,
            "at": "l2:june"
          },
          {
            "id": "c-d2",
            "t": "text",
            "text": "Đợt 2/2026: 20, 21, 22/11",
            "x": 3996,
            "y": 330,
            "size": 50,
            "at": "l3:november",
            "color": "accent"
          },
          {
            "id": "c-dk",
            "t": "text",
            "text": "(dự kiến · TB 01/TB-HĐKT)",
            "x": 3996,
            "y": 405,
            "size": 40,
            "at": "l3:planned",
            "color": "coral",
            "hl": [
              {
                "text": "dự kiến",
                "at": "l3:planned"
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
          "say": "First stop: how often? Article eighteen, clause one: at least once every six months.",
          "sub": "Chặng một: bao lâu một đợt? Khoản 1 Điều 18: ít nhất 6 tháng tổ chức một lần.",
          "keys": [
            "ít nhất 6 tháng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twenty twenty six has two rounds. Round one ran June fifth to seventh.",
          "sub": "Năm 2026 có hai đợt. Đợt 1 diễn ra các ngày 05, 06, 07/6/2026."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Round two is planned for November twentieth to twenty second, by the notice of August twelfth.",
          "sub": "Đợt 2 dự kiến các ngày 20, 21, 22/11/2026, theo Thông báo 01/TB-HĐKT ngày 12/8/2026.",
          "keys": [
            "dự kiến"
          ]
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
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l1:end",
                  "shot": "close",
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
            "caption": "Quán cà phê · nhóm chat tập sự",
            "icon": "mobile-phone"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And here's Dũng, Thảo's training classmate, sure he already knows the date.",
          "sub": "Còn đây là Dũng, bạn cùng khoá tập sự của Thảo, đinh ninh đã biết ngày thi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He has never read a notice in his life. Proudly.",
          "sub": "Cả đời chưa đọc một thông báo nào. Mà còn tự hào."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Quán cà phê · nhóm chat",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Năm nào cũng đúng tháng đó, khỏi đọc thông báo",
          "why": "Thông tư chỉ đặt tần suất tối thiểu; ngày, giờ, địa điểm do Hội đồng từng đợt quyết định và thông báo.",
          "rule": "Lịch thật là thông báo của đợt mình dự"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "It's the same month every year. Why read the notice?",
          "sub": "Năm nào chẳng đúng tháng đó. Đọc thông báo làm gì?",
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
          "say": "The circular only sets a minimum. Each round's council sets the day, time and place.",
          "sub": "Thông tư chỉ đặt tần suất tối thiểu. Ngày, giờ, địa điểm do Hội đồng từng đợt quyết định.",
          "keys": [
            "Hội đồng từng đợt quyết định"
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
          "say": "Last year's timetable is a reference. The real one is my round's notice.",
          "sub": "Lịch năm trước chỉ để tham khảo. Lịch thật là thông báo của đợt mình dự.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Even the headline says planned, and the venue comes later.",
          "sub": "Ngay tiêu đề còn ghi “dự kiến”, địa điểm cụ thể còn chờ thông báo sau.",
          "phase": "redo",
          "keys": [
            "dự kiến"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p2,p3"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Ai quyết định lịch?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:second stop"
          },
          {
            "id": "d-hd",
            "t": "text",
            "text": "Hội đồng: 5–7 thành viên",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l1:five",
            "hl": [
              {
                "text": "5–7",
                "at": "l1:seven"
              }
            ]
          },
          {
            "id": "d-by",
            "t": "text",
            "text": "do Chủ tịch Liên đoàn lập",
            "x": 5964,
            "y": 245,
            "size": 42,
            "at": "l1:president",
            "color": "muted"
          },
          {
            "id": "d-ban",
            "t": "text",
            "text": "Các Ban: đề thi, coi, phách, chấm…",
            "x": 5964,
            "y": 320,
            "size": 42,
            "at": "l2:boards"
          },
          {
            "id": "d-gs",
            "t": "text",
            "text": "Ban Giám sát: 3–5 luật sư",
            "x": 5964,
            "y": 395,
            "size": 46,
            "at": "l3:supervisory"
          },
          {
            "id": "d-rel",
            "t": "text",
            "text": "Người thân thuộc: không tham gia",
            "x": 5964,
            "y": 470,
            "size": 46,
            "at": "l4:related",
            "color": "coral",
            "hl": [
              {
                "text": "không tham gia",
                "at": "l4:cannot"
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
          "say": "Second stop: who sets the dates? A council of five to seven, formed by the Federation president.",
          "sub": "Chặng hai: ai quyết định lịch? Hội đồng 5 đến 7 thành viên, do Chủ tịch Liên đoàn Luật sư Việt Nam lập."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Boards help it: questions, secretariat, invigilation, coding, written marking, oral marking, review.",
          "sub": "Giúp việc có các Ban: Đề thi, Thư ký, Coi thi, Phách, Chấm thi viết, Chấm thi thực hành, Phúc tra."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Plus a supervisory board of three to five lawyers.",
          "sub": "Ngoài ra có Ban Giám sát gồm 3 đến 5 luật sư."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Anyone closely related to a candidate cannot join the council or a board.",
          "sub": "Người có quan hệ thân thuộc với người dự kiểm tra không được tham gia Hội đồng hay các ban.",
          "keys": [
            "không được tham gia"
          ]
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s09",
      "module": "BRK-03",
      "data": {
        "value": 30,
        "suffix": " ngày",
        "label": "tối thiểu: Hội đồng báo các Đoàn trước ngày kiểm tra",
        "illus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Article twenty: the council tells the bars at least...",
          "sub": "Điều 20: Hội đồng báo cho các Đoàn luật sư chậm nhất…"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "...thirty days before the exam.",
          "sub": "…30 ngày trước ngày kiểm tra.",
          "keys": [
            "30 ngày"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
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
            "id": "d-btp",
            "t": "text",
            "text": "Bộ Tư pháp: 7 ngày làm việc",
            "x": 5964,
            "y": 560,
            "size": 42,
            "at": "l1:seven working"
          },
          {
            "id": "d-128",
            "t": "text",
            "text": "Đợt 2: ban hành 12/8 · đăng 13/8",
            "x": 5964,
            "y": 630,
            "size": 44,
            "at": "l2:august",
            "color": "accent",
            "hl": [
              {
                "text": "đăng 13/8",
                "at": "l2:next day"
              }
            ]
          },
          {
            "id": "d-som",
            "t": "text",
            "text": "Sớm hơn nhiều mức 30 ngày",
            "x": 6804,
            "y": 690,
            "size": 46,
            "at": "l3:earlier",
            "hl": [
              {
                "text": "Sớm hơn nhiều",
                "at": "l3:far earlier"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Điều 20 Thông tư 10/2021 · QĐ 125/QĐ-LĐLSVN",
            "x": 6804,
            "y": 640,
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
          "say": "Its decisions, rules, minutes and results go to the Ministry of Justice within seven working days.",
          "sub": "Quyết định, nội quy, biên bản, kết quả gửi Bộ Tư pháp trong 7 ngày làm việc kể từ ngày ban hành."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Round two's notice: issued August twelfth with Decision one twenty five, published the next day.",
          "sub": "Đợt 2: Thông báo 01/TB-HĐKT ban hành 12/8/2026, căn cứ Quyết định 125/QĐ-LĐLSVN cùng ngày, đăng báo ngày 13/8.",
          "keys": [
            "13/8"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That's far earlier than the thirty day minimum. Generous, for once.",
          "sub": "Sớm hơn nhiều so với mức tối thiểu. Hiếm khi hào phóng thế.",
          "keys": [
            "Sớm hơn nhiều"
          ]
        }
      ],
      "ref": "p5"
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
            "text": "③ Trước 20/10 · danh sách",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third stop"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "binh",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                }
              ],
              "props": [
                "clipboard",
                "telephone"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:meet",
            "caption": "Văn phòng Đoàn luật sư",
            "icon": "clipboard"
          },
          {
            "id": "e-hd",
            "t": "text",
            "text": "Hội đồng → các Đoàn",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l1:council"
          },
          {
            "id": "e-dd",
            "t": "text",
            "text": "đủ / không đủ điều kiện",
            "x": 7932,
            "y": 245,
            "size": 46,
            "at": "l1:eligible",
            "hl": [
              {
                "text": "không đủ",
                "at": "l1:not"
              }
            ]
          },
          {
            "id": "e-bn",
            "t": "text",
            "text": "Đoàn → báo lại người tập sự",
            "x": 7932,
            "y": 325,
            "size": 46,
            "at": "l2:trainees"
          },
          {
            "id": "e-2011",
            "t": "text",
            "text": "Thời gian tập sự: đến hết 20/11",
            "x": 7932,
            "y": 430,
            "size": 46,
            "at": "l4:counts",
            "color": "accent",
            "hl": [
              {
                "text": "hết 20/11",
                "at": "l4:twentieth"
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
          "say": "Third stop: the list. Before October twentieth, the council tells bars who's eligible, and who's not.",
          "sub": "Chặng ba: danh sách. Trước ngày 20/10/2026, Hội đồng báo các Đoàn danh sách người đủ và không đủ điều kiện.",
          "keys": [
            "Trước ngày 20/10/2026"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each bar then tells its trainees. Meet Bác Bình, at Thảo's bar office.",
          "sub": "Ban chủ nhiệm Đoàn báo lại cho người tập sự. Còn đây là bác Bình, ở văn phòng Đoàn của Thảo."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "The council's list has arrived. We'll tell each trainee.",
          "sub": "Danh sách của Hội đồng về rồi. Đoàn sẽ báo lại từng người.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And training time for this round counts to the end of November twentieth.",
          "sub": "Còn thời gian tập sự của đợt này được tính đến hết ngày 20/11/2026."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 1500
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s12",
      "module": "BRK-08",
      "data": {
        "title": "Đợt 2/2026 (dự kiến)",
        "current": 1,
        "points": [
          {
            "label": "Sáng 21/11",
            "sub": "6 giờ 50 · bài viết 1",
            "illus": "fountain-pen"
          },
          {
            "label": "Chiều 21/11",
            "sub": "13 giờ 30 · bài viết 2",
            "illus": "memo"
          },
          {
            "label": "Sáng 22/11",
            "sub": "từ 7 giờ · vấn đáp",
            "illus": "speaking-head"
          },
          {
            "label": "Chiều 22/11",
            "sub": "từ 13 giờ 30 · vấn đáp",
            "illus": "speaking-head"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Two papers on the twenty first.",
          "sub": "Ngày 21/11: hai bài viết, 6 giờ 50 và 13 giờ 30."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Orals on the twenty second.",
          "sub": "Ngày 22/11: vấn đáp, sáng và chiều.",
          "keys": [
            "vấn đáp"
          ]
        }
      ],
      "ref": "p6"
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
            "text": "④ 21–22/11 · hai ngày thi",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:fourth stop"
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
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "world-map",
                "tear-off-calendar"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:fourth stop",
            "caption": "Tối ở nhà · xem bản đồ",
            "icon": "world-map"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Sáng 21/11: bài 1 · chiều: bài 2",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l1:paper one"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "22/11: vấn đáp, sáng và chiều",
            "x": 60,
            "y": 1335,
            "size": 44,
            "at": "l1:oral"
          },
          {
            "id": "f-hn",
            "t": "text",
            "text": "Từ Huế trở ra → Hà Nội",
            "x": 60,
            "y": 1430,
            "size": 46,
            "at": "l3:hue",
            "hl": [
              {
                "text": "Hà Nội",
                "at": "l3:hanoi"
              }
            ]
          },
          {
            "id": "f-sg",
            "t": "text",
            "text": "Từ Đà Nẵng trở vào → TP.HCM",
            "x": 60,
            "y": 1505,
            "size": 46,
            "at": "l3:da nang"
          },
          {
            "id": "f-sau",
            "t": "text",
            "text": "Địa điểm, kinh phí: thông báo sau",
            "x": 60,
            "y": 1600,
            "size": 44,
            "at": "l4:venue",
            "color": "coral",
            "hl": [
              {
                "text": "thông báo sau",
                "at": "l4:later"
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
          "say": "Fourth stop: two exam days. Paper one and paper two on the twenty first, the oral on the twenty second.",
          "sub": "Chặng bốn: hai ngày thi. Ngày 21/11 hai bài viết, ngày 22/11 vấn đáp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "So where do I sit? Hanoi, or Ho Chi Minh City?",
          "sub": "Vậy mình thi ở đâu? Hà Nội hay Thành phố Hồ Chí Minh?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "From Hue northward, Hanoi. From Da Nang southward, Ho Chi Minh City.",
          "sub": "Từ Huế trở ra thi ở Hà Nội; từ Đà Nẵng trở vào thi ở Thành phố Hồ Chí Minh."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The exact venue, the fee and its deadline come later. So keep watching the council and your bar.",
          "sub": "Địa điểm cụ thể, mức đóng góp kinh phí và thời hạn nộp sẽ thông báo sau. Nên cứ theo dõi Hội đồng và Đoàn.",
          "keys": [
            "thông báo sau"
          ]
        }
      ],
      "ref": "p6,p7"
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
            "at": "l2",
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
            "text": "⑤ Lập lịch ngược",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:backwards"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
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
                "tear-off-calendar",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:fifth stop",
            "caption": "Thảo viết lịch ngược",
            "icon": "tear-off-calendar"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1270,
            "w": 46,
            "h": 46,
            "at": "l2:step one",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 1252,
            "size": 58,
            "at": "l2:step one+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Ghi mốc cứng: 20/10 · 20/11 · 21 · 22/11",
            "x": 2098,
            "y": 1262,
            "size": 36,
            "at": "l2:step one+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1365,
            "w": 46,
            "h": 46,
            "at": "l3:step two",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 1347,
            "size": 58,
            "at": "l3:step two+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Sau 20/10: hỏi Đoàn có tên chưa",
            "x": 2098,
            "y": 1357,
            "size": 36,
            "at": "l3:step two+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1460,
            "w": 46,
            "h": 46,
            "at": "l4:step three",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 1442,
            "size": 58,
            "at": "l4:step three+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Có địa điểm: ghi hạn nộp",
            "x": 2098,
            "y": 1452,
            "size": 36,
            "at": "l4:step three+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1555,
            "w": 46,
            "h": 46,
            "at": "l5:step four",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 1537,
            "size": 58,
            "at": "l5:step four+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Tuần trước: đọc nội quy, đồ mang",
            "x": 2098,
            "y": 1547,
            "size": 36,
            "at": "l5:step four+200"
          },
          {
            "id": "g-rut",
            "t": "text",
            "text": "Mỗi mốc = một việc",
            "x": 2868,
            "y": 1770,
            "size": 54,
            "at": "l6:task",
            "color": "accent",
            "hl": [
              {
                "text": "một việc",
                "at": "l6:one task"
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
          "say": "Fifth stop: Thảo builds her calendar backwards, from the morning of November twenty first.",
          "sub": "Chặng năm: Thảo lập lịch ngược từ sáng 21/11/2026."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Step one, the hard dates: the list, the cut off, two papers, the oral.",
          "sub": "Bước một, ghi mốc cứng: trước 20/10 có danh sách, hết 20/11 đủ thời gian, 21/11 bài viết, 22/11 vấn đáp.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Step two: right after October twentieth, ask my bar if my name is on the list.",
          "sub": "Bước hai: ngay sau 20/10, hỏi Đoàn tên mình có trong danh sách đủ điều kiện chưa."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Step three: when the venue and fee notice comes, write in the payment deadline.",
          "sub": "Bước ba: có thông báo địa điểm, mức đóng góp thì ghi hạn nộp vào lịch."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Step four: the week before, read the round's rules and pack what's allowed.",
          "sub": "Bước bốn: tuần trước ngày thi, đọc nội quy của đợt, chuẩn bị đồ được mang."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Every date carries one task. A calendar that works, not one you just admire.",
          "sub": "Mỗi mốc gắn một việc phải làm. Tờ lịch để làm việc, không phải để ngắm.",
          "keys": [
            "Mỗi mốc gắn một việc"
          ]
        }
      ],
      "ref": "p8,p9"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Sau ngày thi: 15 + 15",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sixth stop"
          },
          {
            "id": "h-15",
            "t": "text",
            "text": "Công bố: ≤ 15 ngày sau chấm",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l1:fifteen",
            "hl": [
              {
                "text": "15 ngày",
                "at": "l1:fifteen"
              }
            ]
          },
          {
            "id": "h-to",
            "t": "text",
            "text": "→ Sở Tư pháp, Đoàn luật sư",
            "x": 3996,
            "y": 1335,
            "size": 42,
            "at": "l2:justice",
            "color": "muted"
          },
          {
            "id": "h-pt",
            "t": "text",
            "text": "Phúc tra bài viết: 15 ngày",
            "x": 3996,
            "y": 1415,
            "size": 48,
            "at": "l3:review",
            "color": "accent",
            "hl": [
              {
                "text": "15 ngày",
                "at": "l3:fifteen"
              }
            ]
          },
          {
            "id": "h-vd",
            "t": "text",
            "text": "Vấn đáp: không phúc tra",
            "x": 3996,
            "y": 1490,
            "size": 46,
            "at": "l4:oral",
            "color": "coral"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Khoản 6 Điều 25, Điều 27 Thông tư 10/2021/TT-BTP",
            "x": 3996,
            "y": 1810,
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
          "say": "Sixth stop: after the exam. Within fifteen days of the end of marking, the council chair announces results.",
          "sub": "Chặng sáu: sau ngày thi. Trong 15 ngày kể từ ngày kết thúc chấm, Chủ tịch Hội đồng công bố kết quả.",
          "keys": [
            "15 ngày"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The provincial justice department and the bar are told too.",
          "sub": "Và thông báo cho Sở Tư pháp, Đoàn luật sư nơi có người tập sự."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Disagree with a written score? Send a review request within fifteen days of receiving it.",
          "sub": "Không đồng ý điểm bài viết? Làm đơn phúc tra gửi Chủ tịch Hội đồng trong 15 ngày kể từ ngày nhận kết quả.",
          "keys": [
            "đơn phúc tra"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The oral part cannot be reviewed.",
          "sub": "Phần thực hành không được phúc tra."
        }
      ],
      "ref": "p10"
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
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "newspaper",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:round one",
            "caption": "Nhìn lại đợt 1/2026",
            "icon": "newspaper"
          },
          {
            "id": "h-r1",
            "t": "text",
            "text": "Đợt 1: xong 07/6 → đăng 22/6",
            "x": 3996,
            "y": 1580,
            "size": 44,
            "at": "l1:june",
            "hl": [
              {
                "text": "22/6",
                "at": "l1:twenty second"
              }
            ]
          },
          {
            "id": "h-2t",
            "t": "text",
            "text": "2 tệp: phía Bắc · phía Nam",
            "x": 3996,
            "y": 1655,
            "size": 42,
            "at": "l2:two files",
            "color": "muted"
          },
          {
            "id": "h-137",
            "t": "text",
            "text": "Phúc tra: trước 13/7/2026",
            "x": 3996,
            "y": 1730,
            "size": 46,
            "at": "l3:july",
            "color": "coral",
            "hl": [
              {
                "text": "trước 13/7/2026",
                "at": "l3:july"
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
          "say": "Look back at round one. It ended June seventh; results hit the journal June twenty second, about two weeks later.",
          "sub": "Nhìn lại đợt 1: kết thúc 07/6, kết quả đăng Tạp chí Luật sư Việt Nam ngày 22/6/2026, khoảng hai tuần sau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Two files, north and south. Let me find mine.",
          "sub": "Hai tệp, phía Bắc và phía Nam. Để mình tìm tên.",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Notice fifty four set review requests before July thirteenth.",
          "sub": "Thông báo 54/TB-HĐKT ghi hạn nhận đơn phúc tra trước ngày 13/7/2026."
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s16b",
      "module": "BRK-10",
      "data": {
        "quote": "Đơn gửi sau thời gian đó là không hợp lệ",
        "mark": "không hợp lệ",
        "by": "Thông báo 54/TB-HĐKT, đợt 1/2026",
        "illus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "And the notice was blunt about late ones.",
          "sub": "Và thông báo nói thẳng về đơn gửi muộn."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Not valid.",
          "sub": "Không hợp lệ.",
          "keys": [
            "Không hợp lệ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p11"
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
          }
        ],
        "items": [
          {
            "id": "h-rut",
            "t": "text",
            "text": "Có kết quả = bắt đầu đếm",
            "x": 4836,
            "y": 1770,
            "size": 50,
            "at": "l1:starts",
            "color": "accent",
            "hl": [
              {
                "text": "bắt đầu đếm",
                "at": "l1:clock"
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
          "say": "The day results appear starts the review clock. Read yours that day, not next month.",
          "sub": "Ngày có kết quả là ngày bắt đầu đếm hạn phúc tra. Đọc ngay, đừng để qua mới đọc.",
          "keys": [
            "bắt đầu đếm hạn phúc tra"
          ]
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
            "fit": "H",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "I",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Theo dõi ở đâu?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:seventh"
          },
          {
            "id": "i-q",
            "t": "text",
            "text": "Hai người, cùng chờ đợt 2",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l1:both"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: two friends, one round. Dũng and Thảo both wait for round two.",
          "sub": "Chặng bảy: hai người bạn, một đợt thi. Dũng và Thảo cùng chờ đợt 2/2026."
        }
      ],
      "ref": "p13"
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
            "at": "a1",
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
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6784,
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
                "label": "Chờ Đoàn nhắn tin",
                "ok": false
              },
              "right": {
                "label": "Đọc thông báo gốc",
                "ok": true
              }
            },
            "at": "a1:wait",
            "caption": "Cách A · Cách B",
            "icon": "mobile-phone"
          },
          {
            "id": "i-a",
            "t": "text",
            "text": "A: tin muộn → lo vé sát ngày",
            "x": 5964,
            "y": 1360,
            "size": 42,
            "at": "l2:late",
            "color": "coral"
          },
          {
            "id": "i-b",
            "t": "text",
            "text": "B: đã có lịch → chỉ điền thêm",
            "x": 5964,
            "y": 1440,
            "size": 42,
            "at": "l3:fills",
            "color": "accent",
            "hl": [
              {
                "text": "điền thêm",
                "at": "l3:fills"
              }
            ]
          },
          {
            "id": "i-rut",
            "t": "text",
            "text": "Đọc gốc · Đoàn xác nhận",
            "x": 6804,
            "y": 1770,
            "size": 52,
            "at": "l4:confirm",
            "color": "accent",
            "hl": [
              {
                "text": "Đoàn xác nhận",
                "at": "l4:confirm"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "I'll wait for the bar to text me. They'll tell me everything.",
          "sub": "Chờ Đoàn nhắn tin thôi. Có gì Đoàn báo hết.",
          "phase": "a",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The venue and fee news arrives late. Dũng hunts tickets and rooms at the last minute.",
          "sub": "Tin địa điểm, mức đóng góp đến muộn. Dũng phải lo vé và chỗ ở sát ngày."
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "Original notice the day it was posted, dates in my calendar, and I ask my bar after October twentieth.",
          "sub": "Đọc thông báo gốc ngay khi đăng, ghi các mốc vào lịch, hỏi Đoàn sau 20/10.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "When the extra notice comes, Thảo just fills in the blank.",
          "sub": "Khi có thông báo bổ sung, Thảo chỉ cần điền thêm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Read the council's own text, then use your bar to confirm your part.",
          "sub": "Đọc văn bản gốc của Hội đồng, rồi dùng Đoàn để xác nhận phần của riêng mình.",
          "keys": [
            "xác nhận phần của riêng mình"
          ]
        }
      ],
      "ref": "p13,p14"
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
            "text": "Cùng bàn · tờ lịch kín mốc",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:same desk"
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
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "tear-off-calendar",
                "check-mark-button"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:same desk",
            "caption": "Tối ở nhà · tờ lịch đã kín",
            "icon": "tear-off-calendar"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1240,
            "w": 46,
            "h": 46,
            "at": "l3:number",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1222,
            "size": 58,
            "at": "l3:number+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Số hiệu, ngày thông báo",
            "x": 8002,
            "y": 1232,
            "size": 38,
            "at": "l3:number+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1320,
            "w": 46,
            "h": 46,
            "at": "l3:list",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1302,
            "size": 58,
            "at": "l3:list+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Mốc danh sách, tập sự, giờ thi",
            "x": 8002,
            "y": 1312,
            "size": 38,
            "at": "l3:list+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1400,
            "w": 46,
            "h": 46,
            "at": "l3:region",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1382,
            "size": 58,
            "at": "l3:region+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Khu vực của mình",
            "x": 8002,
            "y": 1392,
            "size": 38,
            "at": "l3:region+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1480,
            "w": 46,
            "h": 46,
            "at": "l4:blank",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1462,
            "size": 58,
            "at": "l4:blank+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Chỗ trống: hạn đóng góp",
            "x": 8002,
            "y": 1472,
            "size": 38,
            "at": "l4:blank+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1560,
            "w": 46,
            "h": 46,
            "at": "l4:results",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1542,
            "size": 58,
            "at": "l4:results+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Ngày kết quả + 15 ngày phúc tra",
            "x": 8002,
            "y": 1552,
            "size": 38,
            "at": "l4:results+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 7932,
            "y": 1690,
            "size": 50,
            "at": "l5:careful",
            "color": "accent",
            "hl": [
              {
                "text": "vô áy náy",
                "at": "l5:regrets"
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
          "say": "Back at the same desk, the same calendar. Now it's full of dates, with a few blanks.",
          "sub": "Trở lại chiếc bàn ấy, tờ lịch ấy. Giờ đã kín mốc, chừa vài ô trống."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Every blank waits for a notice. Nothing is a surprise.",
          "sub": "Ô trống nào cũng chờ một thông báo. Chẳng còn gì bất ngờ.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The notice number and date. The list, training cut off and exam times. Her region.",
          "sub": "Số hiệu và ngày ban hành thông báo. Mốc danh sách, mốc tập sự, giờ thi. Khu vực của mình."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A blank for the fee deadline. The expected results date, plus fifteen review days.",
          "sub": "Chỗ trống cho hạn nộp đóng góp. Ngày dự kiến có kết quả, cộng 15 ngày phúc tra.",
          "keys": [
            "cộng 15 ngày phúc tra"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Careful now, no regrets later.",
          "sub": "“Cẩn tắc vô áy náy.”",
          "keys": [
            "Cẩn tắc vô áy náy"
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
            "fit": "J",
            "move": "cut"
          },
          {
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:notice",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:exam",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:results",
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
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 6664,
            "y": 630,
            "at": "l1:notice"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1260,
            "at": "l2:exam"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1415,
            "at": "l3:review"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài là kiến thức nghề, không phải tư vấn cho vụ việc cụ thể. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 30,
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
          "say": "So: a round starts with the council's notice, at least thirty days ahead.",
          "sub": "Tóm lại: một đợt bắt đầu bằng thông báo của Hội đồng, trước ít nhất 30 ngày.",
          "keys": [
            "thông báo của Hội đồng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then the list, and the exam days.",
          "sub": "Rồi đến danh sách, và ngày thi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then results within fifteen days of marking, and fifteen days for review.",
          "sub": "Rồi công bố trong 15 ngày sau khi chấm xong, và 15 ngày phúc tra.",
          "keys": [
            "15 ngày phúc tra"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Do it now: open notice zero one, copy the dates, and mark what's still to be announced.",
          "sub": "Việc làm ngay: mở Thông báo 01/TB-HĐKT, chép các mốc vào lịch, đánh dấu chỗ còn chờ thông báo sau.",
          "keys": [
            "chép các mốc vào lịch"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next: exam room rules, what to bring and what's banned.",
          "sub": "Bài tiếp theo: Nội quy phòng thi, được mang gì, cấm gì."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "This is professional knowledge, not advice on any specific case.",
          "sub": "Bài là kiến thức nghề, không phải tư vấn cho vụ việc cụ thể."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s30",
      "module": "QUIZ-01",
      "data": {
        "q": "Are the assessment dates fixed by the circular every year?",
        "options": [
          "No, the circular sets a minimum frequency and each council sets the dates",
          "Yes, the circular names the exact days in both June and November",
          "Yes, but provinces may move the date by up to one month"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Thông tư chỉ đặt tần suất tối thiểu; ngày cụ thể do Hội đồng từng đợt quyết định."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Are the assessment dates fixed by the circular every year?",
          "sub": "Ngày kiểm tra có được Thông tư cố định hằng năm không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No, the circular sets a minimum frequency and each council sets the dates.",
          "sub": "Không, Thông tư chỉ đặt tần suất tối thiểu, Hội đồng từng đợt định ngày."
        }
      ],
      "beats": {
        "after": 500
      },
      "ref": "questions[4]"
    },
    {
      "id": "s31",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu về lịch một đợt kiểm tra",
        "sub": "Mỗi mốc gắn một việc"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Forty questions are below. Every date, one task.",
          "sub": "Bốn mươi câu hỏi ở bên dưới. Mỗi mốc, một việc."
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-24 (vật neo rồi phân tích): neo “21/11/2026 · 6 giờ 50” → chữ “dự kiến” trong tiêu đề (p2) → lịch thật ở đâu → không phải ngày cố định hằng năm. Dòng thời gian: lịch đợt 2/2026 trên tờ lịch của Thảo (tối 13/8 thông báo vừa đăng → ≥ 6 tháng → 30 ngày → trước 20/10 → 21–22/11 → lịch ngược → 15 + 15 → theo dõi → cùng bàn, tờ lịch kín mốc). Nhân vật (w145/_series/bar-exam-overview.md): Thảo (chính; cách B p13), Dũng (bạn cùng khoá; ngộ nhận ngày cố định p2 ở DLG; cách A p13), Bác Bình (văn phòng Đoàn: Đoàn báo lại danh sách p6). Cảnh ngắt nhịp: BRK-03 “30 ngày” (p5), BRK-08 giờ thi 21–22/11 (p6), BRK-10 trích “không hợp lệ” Thông báo 54 (p11). Mọi mốc lấy từ bài; đợt 2 luôn ghi “dự kiến”. Lưu ý chung #133 ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
