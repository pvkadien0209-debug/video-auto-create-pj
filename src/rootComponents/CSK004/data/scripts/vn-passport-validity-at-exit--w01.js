// vn-passport-validity-at-exit--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "vn-passport-validity-at-exit--w01",
  "unit": {
    "audience": "emigrants-passport-and-exit",
    "slug": "vn-passport-validity-at-exit",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Hộ chiếu còn bao lâu thì nên gia hạn trước khi đi?",
    "series": "Hộ chiếu và xuất cảnh trước ngày đi xa — cho người Việt sắp ra nước ngoài sống, làm việc dài hạn"
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
            "id": "a-6",
            "t": "text",
            "text": "6 tháng",
            "x": 60,
            "y": 110,
            "size": 200,
            "at": "l1:six months",
            "color": "accent",
            "hl": [
              {
                "text": "6 tháng",
                "at": "l1:six months+400"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "ai cũng nhắc, chẳng ai giống ai",
            "x": 70,
            "y": 370,
            "size": 44,
            "at": "l2:nobody"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Six months. Ask anyone about passports before a long trip, and this number pops up.",
          "sub": "Sáu tháng. Hỏi ai về hộ chiếu trước chuyến đi xa, con số này cũng bật ra.",
          "keys": [
            "Sáu tháng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But nobody agrees on what it means.",
          "sub": "Nhưng chẳng ai hiểu giống ai.",
          "keys": [
            "chẳng ai hiểu giống ai"
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
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "thumb",
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
                "blue-book"
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
            "caption": "Tối thứ Bảy · phòng khách",
            "icon": "house"
          },
          {
            "id": "a-r1",
            "t": "text",
            "text": "Dũng: “Luật bỏ rồi!”",
            "x": 70,
            "y": 450,
            "size": 46,
            "at": "l2:dropped"
          },
          {
            "id": "a-r2",
            "t": "text",
            "text": "Cô Hoa: “Thiếu là khỏi bay!”",
            "x": 70,
            "y": 520,
            "size": 46,
            "at": "l4:no flying",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Nước đến chân mới nhảy”",
            "x": 70,
            "y": 640,
            "size": 52,
            "at": "l5:water",
            "color": "accent",
            "hl": [
              {
                "text": "mới nhảy",
                "at": "l5:jump"
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
          "say": "Meet Dũng. Off to work abroad on a long contract. His passport: seven months left.",
          "sub": "Đây là Dũng. Sắp ra nước ngoài làm việc theo hợp đồng dài hạn. Hộ chiếu: còn bảy tháng.",
          "keys": [
            "còn bảy tháng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Relax! I read online, the law dropped the six-month rule!",
          "sub": "Yên tâm! Em đọc trên mạng, luật bỏ mốc sáu tháng rồi!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And Ms Hoa, his aunt, heard the exact opposite.",
          "sub": "Còn cô Hoa, cô của Dũng, lại nghe điều ngược hẳn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Under six months, no flying, son! Everyone says so.",
          "sub": "Thiếu sáu tháng là không bay được đâu con! Ai cũng nói vậy.",
          "pose": "point"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And Dũng's usual style? Wait till the water reaches his feet, then jump.",
          "sub": "Còn Dũng, xưa nay vẫn kiểu “nước đến chân mới nhảy”.",
          "keys": [
            "nước đến chân mới nhảy"
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
            "text": "Còn bao lâu thì làm mới?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:validity",
            "hl": [
              {
                "text": "bao lâu",
                "at": "l1:before"
              }
            ]
          },
          {
            "id": "b-d",
            "t": "text",
            "text": "6 tháng · tính từ ngày nào?",
            "x": 2028,
            "y": 160,
            "size": 60,
            "at": "l2:which day",
            "color": "coral",
            "hl": [
              {
                "text": "tính từ ngày nào",
                "at": "l2:which day"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Ai đúng: Dũng hay cô Hoa?",
            "x": 2028,
            "y": 270,
            "size": 48,
            "at": "l3:right",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:three"
          },
          {
            "id": "b-p0b",
            "t": "box",
            "x": 2028,
            "y": 400,
            "w": 520,
            "h": 120,
            "at": "l4:vietnamese law",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-p1b",
            "t": "box",
            "x": 2578,
            "y": 400,
            "w": 520,
            "h": 120,
            "at": "l4:airline",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-p2b",
            "t": "box",
            "x": 3128,
            "y": 400,
            "w": 520,
            "h": 120,
            "at": "l4:new one",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-p0",
            "t": "text",
            "text": "① Luật Việt Nam",
            "x": 2053,
            "y": 430,
            "size": 46,
            "at": "l4:vietnamese law+200"
          },
          {
            "id": "b-p1",
            "t": "text",
            "text": "② Nước đến, hãng bay",
            "x": 2603,
            "y": 430,
            "size": 46,
            "at": "l4:airline+200"
          },
          {
            "id": "b-p2",
            "t": "text",
            "text": "③ Khi nào làm mới",
            "x": 3153,
            "y": 430,
            "size": 46,
            "at": "l4:new one+200"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật, Hệ thống Pháp luật (bài giải đáp)",
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
          "say": "So how much validity should your passport have before you leave?",
          "sub": "Vậy hộ chiếu còn bao lâu thì nên làm mới trước khi đi?",
          "keys": [
            "còn bao lâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Here's the detail that matters: six months, counted from which day?",
          "sub": "Có một chi tiết đáng chú ý: sáu tháng, tính từ ngày nào?",
          "keys": [
            "tính từ ngày nào"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It's not about who's right. It's three separate questions.",
          "sub": "Không phải chuyện ai đúng ai sai, mà là ba câu hỏi tách bạch.",
          "keys": [
            "ba câu hỏi tách bạch"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Vietnamese law, the destination and airline, and when to get a new one.",
          "sub": "Luật Việt Nam, nước đến và hãng bay, và khi nào nên làm cuốn mới.",
          "keys": [
            "khi nào nên làm cuốn mới"
          ]
        }
      ],
      "ref": "intro,p8"
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
            "at": "l5:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Chủ nhật · Luật Việt Nam",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:sunday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 150,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "stand"
                }
              ],
              "props": [
                "laptop"
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
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:sunday",
            "caption": "Chủ nhật · phòng khách",
            "icon": "laptop"
          },
          {
            "id": "c-old",
            "t": "text",
            "text": "Luật 2019: còn đủ 6 tháng",
            "x": 3996,
            "y": 160,
            "size": 50,
            "at": "l2:six full months",
            "color": "muted"
          },
          {
            "id": "c-olds",
            "t": "text",
            "text": "điểm a khoản 1 Điều 33",
            "x": 3996,
            "y": 225,
            "size": 28,
            "at": "l2:point",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-oldx",
            "t": "strike",
            "over": "c-old",
            "at": "l4:rewrote"
          },
          {
            "id": "c-new",
            "t": "text",
            "text": "Sửa đổi 2023: còn hạn",
            "x": 3996,
            "y": 290,
            "size": 54,
            "at": "l4:intact",
            "color": "accent",
            "hl": [
              {
                "text": "còn hạn",
                "at": "l4:still valid"
              }
            ]
          },
          {
            "id": "c-news",
            "t": "text",
            "text": "giấy tờ còn nguyên vẹn, còn thời hạn sử dụng",
            "x": 3996,
            "y": 360,
            "size": 28,
            "at": "l4:intact",
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
          "say": "Sunday. Thảo, Dũng's cousin, fresh from getting her own new passport, opens the law.",
          "sub": "Chủ nhật. Thảo, chị họ Dũng, vừa làm xong cuốn mới, mở luật ra xem."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Point a, clause one, Article thirty-three, twenty nineteen: at least six full months.",
          "sub": "Điểm a khoản 1 Điều 33, luật năm 2019: còn hạn từ đủ 6 tháng trở lên.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That's why many people still remember six months as a Vietnamese rule.",
          "sub": "Vì vậy nhiều người vẫn nhớ “mốc 6 tháng” như một quy định của Việt Nam."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "But the twenty twenty-three amendment rewrote it: intact and still valid. No six months.",
          "sub": "Nhưng luật sửa đổi năm 2023 viết lại: còn nguyên vẹn, còn thời hạn sử dụng. Không có mốc 6 tháng.",
          "keys": [
            "còn thời hạn sử dụng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Told you so!",
          "sub": "Thấy chưa, em nói rồi mà!",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s04",
      "module": "BRK-04",
      "data": {
        "title": "Luật Việt Nam về hạn hộ chiếu",
        "labels": [
          "Trước",
          "Nay"
        ],
        "wrong": "Luật 2019: còn từ đủ 6 tháng",
        "right": "Sửa đổi 2023: còn nguyên vẹn, còn hạn",
        "wrongIllus": "spiral-calendar",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: six full months.",
          "sub": "Trước: đủ sáu tháng."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Now: intact and still valid.",
          "sub": "Nay: còn nguyên vẹn, còn hạn.",
          "keys": [
            "còn hạn"
          ]
        }
      ],
      "ref": "p1,p2"
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
              "c-final"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-u6",
            "t": "text",
            "text": "Dưới 6 tháng: vẫn ra được",
            "x": 3996,
            "y": 440,
            "size": 50,
            "at": "l1:under six",
            "hl": [
              {
                "text": "vẫn ra được",
                "at": "l1:still"
              }
            ]
          },
          {
            "id": "c-days",
            "t": "text",
            "text": "còn vài ngày vẫn có thể ra khỏi VN (HTPL)",
            "x": 3996,
            "y": 510,
            "size": 28,
            "at": "l2:few days",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-final",
            "t": "text",
            "text": "Quyết định cuối: nước đến, hãng bay",
            "x": 3996,
            "y": 580,
            "size": 44,
            "at": "l3:final",
            "color": "coral"
          },
          {
            "id": "c-take",
            "t": "text",
            "text": "Bỏ mốc ≠ “được đi”",
            "x": 4836,
            "y": 670,
            "size": 56,
            "at": "l4:free",
            "color": "accent",
            "hl": [
              {
                "text": "≠ “được đi”",
                "at": "l4:free to fly"
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
          "say": "So one legal Q and A site concludes: under six months, you can still exit, if the other conditions are met.",
          "sub": "Thư viện Pháp luật kết luận: còn hạn dưới 6 tháng vẫn có thể xuất cảnh, nếu đáp ứng các điều kiện còn lại.",
          "keys": [
            "vẫn có thể xuất cảnh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Another goes further: even a few days left can work for leaving Vietnam.",
          "sub": "Hệ thống Pháp luật còn viết: hộ chiếu chỉ còn vài ngày vẫn có thể dùng để xuất cảnh khỏi Việt Nam.",
          "keys": [
            "vài ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But it warns too: the final say belongs to the destination and the airline.",
          "sub": "Nhưng bài ấy cũng nhấn mạnh: quyết định cuối cùng phụ thuộc vào nước đến và hãng bay.",
          "keys": [
            "nước đến và hãng bay"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Six months left the law. Don't read that as free to fly.",
          "sub": "Mốc 6 tháng không còn trong luật Việt Nam, nhưng đừng vội coi đó là “được đi”.",
          "keys": [
            "“được đi”"
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
            "at": "l1",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Hai · Nước đến, hãng bay",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
            "w": 780,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone",
                "airplane"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
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
            "at": "l1:monday",
            "caption": "Thứ Hai · phòng Dũng",
            "icon": "airplane"
          },
          {
            "id": "d-6",
            "t": "text",
            "text": "Đa số nước: ≥ 6 tháng",
            "x": 5964,
            "y": 160,
            "size": 50,
            "at": "l2:most",
            "hl": [
              {
                "text": "≥ 6 tháng",
                "at": "l2:six months"
              }
            ]
          },
          {
            "id": "d-from",
            "t": "text",
            "text": "tính từ ngày nhập cảnh, hoặc ngày dự kiến rời nước đó",
            "x": 5964,
            "y": 225,
            "size": 28,
            "at": "l2:counted",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Một số nước: 3 tháng",
            "x": 5964,
            "y": 280,
            "size": 46,
            "at": "l3:three"
          },
          {
            "id": "d-x",
            "t": "text",
            "text": "Không đạt: bị từ chối",
            "x": 5964,
            "y": 360,
            "size": 50,
            "at": "l4:refused",
            "color": "coral",
            "hl": [
              {
                "text": "bị từ chối",
                "at": "l4:refused"
              }
            ]
          },
          {
            "id": "d-xs",
            "t": "text",
            "text": "từ chối thị thực, hoặc từ chối nhập cảnh ở sân bay",
            "x": 5964,
            "y": 425,
            "size": 28,
            "at": "l4:visa",
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
          "say": "Monday. Gate two: the destination and the airline.",
          "sub": "Thứ Hai. Cửa thứ hai: nước đến và hãng bay.",
          "keys": [
            "Cửa thứ hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Most countries want at least six months, counted from entry, or from the day you plan to leave.",
          "sub": "Đa số nước yêu cầu còn hạn ít nhất 6 tháng, tính từ ngày nhập cảnh hoặc từ ngày dự kiến rời nước đó.",
          "keys": [
            "ít nhất 6 tháng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Some countries accept three months.",
          "sub": "Một số nước chấp nhận 3 tháng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fall short, and you can be refused a visa, or refused entry right at the airport.",
          "sub": "Không đạt, có thể bị từ chối cấp thị thực, hoặc bị từ chối nhập cảnh ngay tại sân bay.",
          "keys": [
            "bị từ chối"
          ]
        }
      ],
      "ref": "p5"
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
            "at": "l3",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-air",
            "t": "text",
            "text": "Hãng bay: kiểm tra đầu tiên",
            "x": 5964,
            "y": 490,
            "size": 48,
            "at": "l1:first checkpoint",
            "hl": [
              {
                "text": "đầu tiên",
                "at": "l1:first"
              }
            ]
          },
          {
            "id": "d-air2",
            "t": "text",
            "text": "không cho lên máy bay dù đã qua xuất cảnh VN",
            "x": 5964,
            "y": 560,
            "size": 28,
            "at": "l2:board",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-half",
            "t": "text",
            "text": "Mỗi người đúng một nửa",
            "x": 6804,
            "y": 670,
            "size": 52,
            "at": "l4:half",
            "color": "accent",
            "hl": [
              {
                "text": "một nửa",
                "at": "l4:half"
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
          "say": "And the airline is usually the first checkpoint.",
          "sub": "Và hãng hàng không thường là nơi kiểm tra đầu tiên.",
          "keys": [
            "kiểm tra đầu tiên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It can refuse to board you, even after you pass Vietnamese exit control.",
          "sub": "Hãng có thể từ chối cho lên máy bay, dù khách đã qua thủ tục xuất cảnh của Việt Nam."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "So my aunt was half right?",
          "sub": "Vậy cô Hoa nói đúng một nửa à?",
          "face": "surprised"
        },
        {
          "id": "l3b",
          "lang": "en",
          "who": "det",
          "say": "Think of a club bouncer. Your exit stamp from Vietnam doesn't impress him one bit.",
          "sub": "Như anh bảo vệ cửa câu lạc bộ: dấu xuất cảnh Việt Nam chẳng làm anh ta nể chút nào."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Half each. Counting rules differ by country, so read your own destination's rules.",
          "sub": "Mỗi người đúng một nửa. Cách tính mỗi nước một khác, nên phải xem quy định của chính nước mình đến.",
          "keys": [
            "chính nước mình đến"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s08",
      "module": "BRK-07",
      "data": {
        "question": "Còn 7 tháng, mà ở lại nhiều năm: đủ không?",
        "illus": "hourglass-not-done"
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
          "say": "Seven months left, staying for years. Enough?",
          "sub": "Còn bảy tháng, mà ở lại nhiều năm. Đủ không?",
          "keys": [
            "Đủ không"
          ]
        }
      ],
      "ref": "p7"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Tính từ ngày nào?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:monday night"
          },
          {
            "id": "e-rule",
            "t": "text",
            "text": "Nước Dũng đến: 6 tháng tính từ ngày dự kiến rời",
            "x": 7932,
            "y": 150,
            "size": 30,
            "at": "l1:plans",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-ax",
            "t": "arrow",
            "from": [
              7932,
              330
            ],
            "to": [
              9532,
              330
            ],
            "at": "l3:draw"
          },
          {
            "id": "e-0",
            "t": "text",
            "text": "Hôm nay",
            "x": 7932,
            "y": 360,
            "size": 46,
            "at": "l3:today"
          },
          {
            "id": "e-7",
            "t": "text",
            "text": "7 tháng: hết hạn",
            "x": 8342,
            "y": 360,
            "size": 46,
            "at": "l3:seven",
            "color": "coral",
            "hl": [
              {
                "text": "hết hạn",
                "at": "l3:expires"
              }
            ]
          },
          {
            "id": "e-x",
            "t": "text",
            "text": "✗",
            "x": 8472,
            "y": 230,
            "size": 80,
            "at": "l3:expires",
            "color": "coral"
          },
          {
            "id": "e-gap",
            "t": "box",
            "x": 8732,
            "y": 300,
            "w": 380,
            "h": 60,
            "at": "l4:long before",
            "hatch": true,
            "color": "coral",
            "stroke": 3
          },
          {
            "id": "e-lv",
            "t": "text",
            "text": "Ngày dự kiến rời",
            "x": 9142,
            "y": 360,
            "size": 44,
            "at": "l4:departure"
          },
          {
            "id": "e-lv2",
            "t": "text",
            "text": "nhiều năm sau",
            "x": 9142,
            "y": 420,
            "size": 30,
            "at": "l4:years",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-need",
            "t": "text",
            "text": "Không đủ → làm mới trước",
            "x": 7932,
            "y": 500,
            "size": 56,
            "at": "l5:not enough",
            "color": "accent",
            "hl": [
              {
                "text": "làm mới trước",
                "at": "l5:new passport"
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
          "say": "Monday night. Dũng's destination counts six months from the day he plans to leave.",
          "sub": "Tối thứ Hai. Nước Dũng đến tính mốc 6 tháng từ ngày dự kiến rời nước đó."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And he plans to stay and work for years.",
          "sub": "Mà Dũng định ở lại làm việc nhiều năm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Let's draw it. Today. Seven months later, the passport expires.",
          "sub": "Vẽ ra nhé. Hôm nay. Bảy tháng sau, hộ chiếu hết hạn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "His planned departure? Years away. The passport ran out long before.",
          "sub": "Ngày dự kiến rời đi? Nhiều năm sau. Hộ chiếu đã hết hạn từ lâu.",
          "keys": [
            "hết hạn từ lâu"
          ]
        },
        {
          "id": "l4b",
          "lang": "en",
          "who": "det",
          "say": "Seven months sounded plenty. Here, it's a bus ticket for a journey of years.",
          "sub": "Bảy tháng nghe thì dài. Ở đây, nó như vé xe buýt cho hành trình nhiều năm."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not enough. He risks a visa refusal, so he needs a new passport before applying.",
          "sub": "Không đủ. Dễ bị từ chối thị thực, nên phải làm hộ chiếu mới trước khi nộp hồ sơ.",
          "keys": [
            "làm hộ chiếu mới trước"
          ]
        }
      ],
      "ref": "p7"
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
            "at": "l2",
            "fit": [
              "e-q2"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-q1",
            "t": "text",
            "text": "Còn bao nhiêu tháng?",
            "x": 7932,
            "y": 630,
            "size": 50,
            "at": "l1:how many",
            "color": "muted"
          },
          {
            "id": "e-q1x",
            "t": "strike",
            "over": "e-q1",
            "at": "l1:months+300"
          },
          {
            "id": "e-q2",
            "t": "text",
            "text": "6 tháng, tính từ ngày nào?",
            "x": 8692,
            "y": 630,
            "size": 56,
            "at": "l2:which day",
            "color": "accent",
            "hl": [
              {
                "text": "tính từ ngày nào",
                "at": "l2:which day"
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
          "say": "So don't just ask: how many months are left?",
          "sub": "Vậy đừng chỉ hỏi: còn bao nhiêu tháng?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask: six months, counted from which day?",
          "sub": "Hãy hỏi: mốc 6 tháng tính từ ngày nào?",
          "keys": [
            "tính từ ngày nào"
          ]
        }
      ],
      "ref": "p8"
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
            "at": "l2",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
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
            "text": "④ Thứ Ba · Làm mới sớm",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:tuesday"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "walk"
                }
              ],
              "props": [
                "blue-book"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
            "at": "l1:tuesday",
            "caption": "Thứ Ba · trên đường đi làm",
            "icon": "blue-book"
          },
          {
            "id": "f-u6",
            "t": "text",
            "text": "Còn dưới 6 tháng: làm mới",
            "x": 60,
            "y": 1250,
            "size": 50,
            "at": "l1:less than six",
            "hl": [
              {
                "text": "làm mới",
                "at": "l1:renew"
              }
            ]
          },
          {
            "id": "f-why",
            "t": "text",
            "text": "không đạt → hồ sơ thị thực dễ bị từ chối",
            "x": 60,
            "y": 1320,
            "size": 28,
            "at": "l2:visa file",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-ord",
            "t": "text",
            "text": "Hộ chiếu trước, thị thực sau",
            "x": 60,
            "y": 1380,
            "size": 48,
            "at": "l3:first",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tuesday. The articles advise: renew once less than six months remain.",
          "sub": "Thứ Ba. Hệ thống Pháp luật khuyên: làm thủ tục cấp đổi khi hộ chiếu còn hạn dưới 6 tháng.",
          "keys": [
            "dưới 6 tháng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Moving for years? Even more so. A weak passport can sink the whole visa file.",
          "sub": "Đi định cư, làm việc nhiều năm càng quan trọng: hộ chiếu không đạt có thể khiến hồ sơ thị thực bị từ chối."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "New passport first, visa file second, and you won't start again from scratch.",
          "sub": "Làm hộ chiếu mới trước khi nộp hồ sơ thị thực, khỏi phải làm lại từ đầu.",
          "keys": [
            "khỏi phải làm lại từ đầu"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Ba · định xin “gia hạn”",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "thumb"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Xin gia hạn thêm vài tháng cho kịp chuyến đi",
          "why": "Hộ chiếu phổ thông 10 năm, không được gia hạn; cần một cuốn mới, có hồ sơ và thời gian xử lý riêng.",
          "rule": "Không có đường tắt gia hạn vài tháng"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Easy fix. I'll pop into the immigration office and ask for a few extra months!",
          "sub": "Dễ ợt. Em ghé cơ quan xuất nhập cảnh xin gia hạn thêm vài tháng!",
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
          "say": "An ordinary passport runs ten years and cannot be extended.",
          "sub": "Hộ chiếu phổ thông có thời hạn 10 năm và không được gia hạn.",
          "keys": [
            "không được gia hạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "You need a new book, with its own file and processing time.",
          "sub": "Thứ cần là một cuốn mới, với hồ sơ và thời gian xử lý riêng."
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
          "say": "New passport, then. Starting with the paperwork.",
          "sub": "Vậy làm cuốn mới. Bắt đầu từ hồ sơ.",
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
      "ref": "p10"
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
          }
        ],
        "items": [
          {
            "id": "f-sc",
            "t": "text",
            "text": "“Gia hạn vài tháng”",
            "x": 60,
            "y": 1540,
            "size": 52,
            "at": "l1:shortcut",
            "color": "muted"
          },
          {
            "id": "f-scx",
            "t": "strike",
            "over": "f-sc",
            "at": "l1:few extra"
          },
          {
            "id": "f-take",
            "t": "text",
            "text": "Thêm hạn = cuốn mới",
            "x": 60,
            "y": 1650,
            "size": 64,
            "at": "l1:new book",
            "color": "accent",
            "hl": [
              {
                "text": "cuốn mới",
                "at": "l1:new book"
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
          "say": "There's no shortcut called a few extra months. More validity means a new book.",
          "sub": "Không có đường tắt “gia hạn vài tháng”; muốn có thêm thời hạn thì phải làm cuốn mới.",
          "keys": [
            "làm cuốn mới"
          ]
        }
      ],
      "ref": "p11"
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
            "at": "l4:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Tư · Ở đâu, bao lâu?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:wednesday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "hot-beverage"
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
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:wednesday",
            "caption": "Thứ Tư · quán nước",
            "icon": "hot-beverage"
          },
          {
            "id": "g-w",
            "t": "text",
            "text": "Lần 2: tỉnh thuận lợi / Bộ",
            "x": 2028,
            "y": 1250,
            "size": 48,
            "at": "l2:convenient"
          },
          {
            "id": "g-8",
            "t": "text",
            "text": "Tỉnh: 8 ngày làm việc",
            "x": 2028,
            "y": 1330,
            "size": 50,
            "at": "l3:eight",
            "color": "accent",
            "hl": [
              {
                "text": "8 ngày",
                "at": "l3:eight"
              }
            ]
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Bộ Công an: 5 ngày làm việc",
            "x": 2028,
            "y": 1405,
            "size": 46,
            "at": "l3:five"
          },
          {
            "id": "g-on",
            "t": "text",
            "text": "Trực tuyến: VNeID mức 2",
            "x": 2028,
            "y": 1485,
            "size": 46,
            "at": "l4:level two"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wednesday. Thảo, the freshly renewed expert, briefs Dũng.",
          "sub": "Thứ Tư. Thảo, “chuyên gia” vừa làm cuốn mới, phổ biến cho Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Second passport? Any convenient provincial office, or the Ministry's.",
          "sub": "Cuốn thứ hai à? Nộp ở Công an cấp tỉnh nơi thuận lợi, hoặc Bộ Công an.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Results in eight working days at the province, five at the Ministry.",
          "sub": "Trả kết quả: 8 ngày làm việc ở cấp tỉnh, 5 ngày làm việc ở Bộ Công an.",
          "keys": [
            "8 ngày làm việc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Online works too, with a level two VNeID account.",
          "sub": "Nộp trực tuyến cũng được, nếu có tài khoản định danh điện tử mức 2 trên VNeID.",
          "face": "happy"
        }
      ],
      "ref": "p12"
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
            "at": "l2",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "G",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "g-fee",
            "t": "text",
            "text": "Cấp mới: 200.000 đ",
            "x": 2028,
            "y": 1580,
            "size": 54,
            "at": "l1:two hundred",
            "hl": [
              {
                "text": "200.000 đ",
                "at": "l1:two hundred"
              }
            ]
          },
          {
            "id": "g-fs",
            "t": "text",
            "text": "TT 28/2026/TT-BTC, từ 01/4/2026",
            "x": 2028,
            "y": 1650,
            "size": 28,
            "at": "l1:april",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-10",
            "t": "text",
            "text": "Giảm 10% trực tuyến",
            "x": 2028,
            "y": 1710,
            "size": 48,
            "at": "l2:ten percent",
            "color": "muted"
          },
          {
            "id": "g-10x",
            "t": "strike",
            "over": "g-10",
            "at": "l3:until"
          },
          {
            "id": "g-31",
            "t": "text",
            "text": "chỉ đến hết 31/12/2025",
            "x": 2868,
            "y": 1770,
            "size": 46,
            "at": "l3:december",
            "color": "coral",
            "hl": [
              {
                "text": "31/12/2025",
                "at": "l3:december"
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
          "say": "The fee, from April twenty twenty-six: two hundred thousand dong per issue.",
          "sub": "Lệ phí từ 01/4/2026: cấp mới 200.000 đồng mỗi lần.",
          "keys": [
            "200.000 đồng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "And that ten percent online discount I saw?",
          "sub": "Còn vụ giảm 10% khi nộp trực tuyến em thấy trên mạng?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That old article itself says it ran only until December thirty-first, twenty twenty-five. Don't count on it.",
          "sub": "Chính bài đó ghi ưu đãi chỉ áp dụng đến hết 31/12/2025. Đừng tính vào chi phí bây giờ.",
          "keys": [
            "Đừng tính vào chi phí"
          ]
        }
      ],
      "ref": "p13"
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
            "at": "l3",
            "fit": "H",
            "ms": 700
          },
          {
            "at": "l5",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Năm · Lịch ngược",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "spiral-calendar",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": "l1:thursday",
            "caption": "Thứ Năm · phòng Dũng",
            "icon": "spiral-calendar"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "③ Ngày bay",
            "x": 3996,
            "y": 1250,
            "size": 50,
            "at": "l2:flight"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "② Hạn nộp hồ sơ thị thực",
            "x": 3996,
            "y": 1325,
            "size": 46,
            "at": "l2:visa"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "① Có hộ chiếu mới",
            "x": 3996,
            "y": 1400,
            "size": 50,
            "at": "l2:in hand",
            "color": "accent"
          },
          {
            "id": "h-8",
            "t": "text",
            "text": "← lùi 8 ngày làm việc",
            "x": 3996,
            "y": 1490,
            "size": 48,
            "at": "l3:eight",
            "hl": [
              {
                "text": "8 ngày làm việc",
                "at": "l3:eight working days"
              }
            ]
          },
          {
            "id": "h-dp",
            "t": "text",
            "text": "← + vài ngày dự phòng",
            "x": 3996,
            "y": 1565,
            "size": 46,
            "at": "l4:spare"
          },
          {
            "id": "h-day",
            "t": "text",
            "text": "= ngày nộp hồ sơ hộ chiếu",
            "x": 3996,
            "y": 1645,
            "size": 50,
            "at": "l5:filing",
            "color": "coral",
            "hl": [
              {
                "text": "ngày nộp hồ sơ",
                "at": "l5:filing day"
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
          "say": "Thursday. Dũng writes three dates, in reverse order.",
          "sub": "Thứ Năm. Dũng viết ba mốc, theo thứ tự ngược."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Flight day. Visa file deadline. New passport in hand.",
          "sub": "Ngày bay. Ngày phải nộp hồ sơ thị thực. Ngày cần có hộ chiếu mới trong tay.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "From that last date, he steps back eight working days for the provincial office.",
          "sub": "Từ mốc cuối, anh lùi thêm 8 ngày làm việc để Công an tỉnh xử lý hồ sơ.",
          "keys": [
            "8 ngày làm việc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Plus a few spare days, in case a photo or a detail needs fixing.",
          "sub": "Cộng vài ngày dự phòng, phòng khi ảnh hay thông tin cần sửa."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "And that's my passport filing day!",
          "sub": "Và đó là ngày em nộp hồ sơ hộ chiếu!",
          "face": "happy"
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s17",
      "module": "BRK-08",
      "data": {
        "title": "Lịch ngược từ ngày bay",
        "points": [
          {
            "label": "Nộp hồ sơ",
            "sub": "hộ chiếu mới",
            "illus": "page-facing-up"
          },
          {
            "label": "+8 ngày",
            "sub": "làm việc, cộng dự phòng",
            "illus": "hourglass-not-done"
          },
          {
            "label": "Có hộ chiếu",
            "sub": "cuốn mới trong tay",
            "illus": "blue-book"
          },
          {
            "label": "Hồ sơ thị thực",
            "sub": "nộp sau",
            "illus": "envelope"
          },
          {
            "label": "Ngày bay",
            "sub": "mốc gốc",
            "illus": "airplane-departure"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Filing, eight working days, passport, visa, flight.",
          "sub": "Nộp hồ sơ, tám ngày làm việc, hộ chiếu, thị thực, ngày bay."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Built backwards, read forwards.",
          "sub": "Lập từ cuối, đi từ đầu.",
          "keys": [
            "Lập từ cuối"
          ]
        }
      ],
      "ref": "p14"
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
            "id": "h-take",
            "t": "text",
            "text": "Lịch ngược → biết ngày nộp",
            "x": 3996,
            "y": 1740,
            "size": 54,
            "at": "l1:backwards",
            "color": "accent",
            "hl": [
              {
                "text": "biết ngày nộp",
                "at": "l1:exact day"
              }
            ]
          },
          {
            "id": "h-ca",
            "t": "text",
            "text": "Nước chưa đến chân, đã nhảy",
            "x": 4836,
            "y": 1760,
            "size": 46,
            "at": "l2:jumps",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Planning backwards from the flight tells you the exact day to file for your passport.",
          "sub": "Lập lịch ngược từ ngày bay giúp biết chính xác ngày nào phải nộp hồ sơ hộ chiếu.",
          "keys": [
            "Lập lịch ngược"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For once, Dũng jumps before the water reaches his feet.",
          "sub": "Lần này, nước chưa đến chân, Dũng đã nhảy."
        }
      ],
      "ref": "p15"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Sáu · Khi ở xa",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
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
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "globe-with-meridians"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:friday",
            "caption": "Thứ Sáu · phòng khách",
            "icon": "globe-with-meridians"
          },
          {
            "id": "i-ab",
            "t": "text",
            "text": "Từ lần 2: cơ quan đại diện",
            "x": 5964,
            "y": 1250,
            "size": 48,
            "at": "l3:mission",
            "hl": [
              {
                "text": "cơ quan đại diện",
                "at": "l3:mission"
              }
            ]
          },
          {
            "id": "i-ab2",
            "t": "text",
            "text": "ở nước ngoài, nơi thuận lợi · tờ khai TK02",
            "x": 5964,
            "y": 1315,
            "size": 28,
            "at": "l3:form",
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
          "say": "Friday. Ms Hoa worries even further ahead.",
          "sub": "Thứ Sáu. Cô Hoa lo xa hơn nữa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "And years later, over there, when the new one runs low?",
          "sub": "Thế vài năm nữa, ở bên ấy, cuốn mới cũng sắp hết hạn thì sao?",
          "face": "thinking"
        },
        {
          "id": "l2b",
          "lang": "en",
          "who": "dung",
          "say": "Auntie, I haven't even left yet!",
          "sub": "Cô ơi, con còn chưa đi mà!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then apply at a convenient Vietnamese mission abroad, with form TK two. The last lesson covers it.",
          "sub": "Khi đó đề nghị cấp tại cơ quan đại diện Việt Nam ở nước ngoài nơi thuận lợi, tờ khai TK02. Bài cuối chuỗi nói rõ.",
          "keys": [
            "cơ quan đại diện Việt Nam"
          ]
        }
      ],
      "ref": "p16"
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
          }
        ],
        "items": [
          {
            "id": "i-1",
            "t": "text",
            "text": "Còn hạn = điều kiện 1",
            "x": 5964,
            "y": 1410,
            "size": 50,
            "at": "l1:condition"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "+ thị thực / giấy cho nhập cảnh",
            "x": 5964,
            "y": 1490,
            "size": 44,
            "at": "l2:visa"
          },
          {
            "id": "i-2s",
            "t": "text",
            "text": "trừ khi được miễn thị thực",
            "x": 5964,
            "y": 1550,
            "size": 28,
            "at": "l2:exempt",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "+ không bị cấm, tạm hoãn",
            "x": 5964,
            "y": 1610,
            "size": 46,
            "at": "l3:suspension",
            "color": "coral",
            "hl": [
              {
                "text": "tạm hoãn",
                "at": "l3:suspension"
              }
            ]
          },
          {
            "id": "i-nx",
            "t": "text",
            "text": "→ bài kế tiếp",
            "x": 6804,
            "y": 1760,
            "size": 46,
            "at": "l3:next",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And a valid passport is only condition number one.",
          "sub": "Và hộ chiếu còn hạn mới chỉ là điều kiện đầu tiên.",
          "keys": [
            "điều kiện đầu tiên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "You also need a visa or entry papers, unless you're visa exempt.",
          "sub": "Còn cần thị thực hoặc giấy tờ cho nhập cảnh nước đến, trừ khi được miễn thị thực."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And you must not be banned, barred, or under exit suspension. That's the next lesson.",
          "sub": "Và không thuộc diện bị cấm, không được xuất cảnh hay bị tạm hoãn xuất cảnh. Đó là bài kế tiếp.",
          "keys": [
            "tạm hoãn xuất cảnh"
          ]
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s21",
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
            "at": "l5",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tối thứ Bảy tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:saturday"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-calendar",
                "blue-book"
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
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "dung",
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
            "caption": "Tối thứ Bảy tuần sau · phòng khách",
            "icon": "house"
          },
          {
            "id": "j-6",
            "t": "text",
            "text": "6 tháng",
            "x": 7932,
            "y": 1240,
            "size": 110,
            "at": "l1:same"
          },
          {
            "id": "j-r1",
            "t": "text",
            "text": "“Luật bỏ rồi”: đúng, cửa 1",
            "x": 7932,
            "y": 1390,
            "size": 44,
            "at": "l2:gate one",
            "hl": [
              {
                "text": "cửa 1",
                "at": "l2:gate one"
              }
            ]
          },
          {
            "id": "j-r2",
            "t": "text",
            "text": "“Thiếu là khỏi bay”: tuỳ nước đến",
            "x": 7932,
            "y": 1460,
            "size": 40,
            "at": "l3:depends",
            "hl": [
              {
                "text": "tuỳ nước đến",
                "at": "l3:depends"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Nước chưa đến chân, đã nhảy",
            "x": 7932,
            "y": 1570,
            "size": 50,
            "at": "l5:jumped",
            "color": "accent",
            "hl": [
              {
                "text": "đã nhảy",
                "at": "l5:jumped"
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
          "say": "Saturday night, a week later. Same living room, same six months.",
          "sub": "Tối thứ Bảy, một tuần sau. Vẫn phòng khách ấy, vẫn “sáu tháng” ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The law dropped six months. True! But that's only gate one.",
          "sub": "Luật bỏ mốc 6 tháng: đúng! Nhưng mới là cửa thứ nhất.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "And under six months, no flying? It depends on the destination and the airline.",
          "sub": "Còn thiếu 6 tháng là khỏi bay? Tuỳ nước đến và hãng bay.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Either way, my passport file goes in on Monday.",
          "sub": "Đằng nào thì thứ Hai em cũng nộp hồ sơ hộ chiếu.",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The water hasn't reached his feet, and Dũng has already jumped.",
          "sub": "Nước chưa đến chân, Dũng đã nhảy.",
          "keys": [
            "Dũng đã nhảy"
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
      "ref": "p4,p6"
    },
    {
      "id": "s22",
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
            "at": "l1:intact",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:airline",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:backwards",
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
            "x": 5536,
            "y": 20,
            "at": "l1:intact"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7504,
            "y": 20,
            "at": "l2:airline"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5536,
            "y": 1110,
            "at": "l3:backwards"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; quy định có thể thay đổi, kiểm lại với cơ quan có thẩm quyền. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1790,
            "size": 28,
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
          "say": "So: Vietnamese law only needs an intact, valid passport.",
          "sub": "Tóm lại: luật Việt Nam chỉ cần hộ chiếu còn nguyên vẹn, còn hạn.",
          "keys": [
            "còn nguyên vẹn, còn hạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Most destinations want at least six months, and the airline can say no.",
          "sub": "Đa số nước đến đòi còn ít nhất 6 tháng, và hãng bay có thể từ chối.",
          "keys": [
            "ít nhất 6 tháng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Going for years? Under six months, renew before the visa file. Plan backwards.",
          "sub": "Đi dài hạn: còn dưới 6 tháng thì làm mới trước khi nộp hồ sơ thị thực. Lập lịch ngược.",
          "keys": [
            "Lập lịch ngược"
          ]
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
        "q": "Which question does the lesson tell you to ask?",
        "options": [
          "From which date the six month period is counted by the destination",
          "How many stamps the passport has collected on earlier trips",
          "Which colour the newest passport cover will have next year"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Dòng Rút ra khuyên hỏi mốc 6 tháng tính từ ngày nào. Không chỉ hỏi còn bao nhiêu tháng."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which question does the lesson tell you to ask?",
          "sub": "Dòng Rút ra khuyên bạn hỏi câu nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Ask from which day the six months are counted.",
          "sub": "Hãy hỏi mốc 6 tháng tính từ ngày nào."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[18]"
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
          "say": "Right now: write your three dates backwards from your flight.",
          "sub": "Việc làm ngay: lập lịch ngược ba mốc từ ngày bay.",
          "keys": [
            "lập lịch ngược"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: who can be stopped from leaving. Now, forty questions below!",
          "sub": "Bài sau: những trường hợp nào bị tạm hoãn xuất cảnh. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-24 (vật neo rồi phân tích): “6 tháng” viết to → hai lời đồn ngược nhau (Dũng “luật bỏ rồi”, cô Hoa “thiếu là khỏi bay”, intro) → “Nhưng có một chi tiết: tính từ ngày nào?” → ba câu hỏi tách bạch. Dòng thời gian: MỘT TUẦN của Dũng (tối T7 → CN luật VN p1–p4 → T2 nước đến, hãng bay p5–p6 → tối T2 “tính từ ngày nào” p7–p8 → T3 làm mới sớm p9, “Khoan đã!” gia hạn vài tháng p10–p11 → T4 ở đâu, bao lâu, bao nhiêu p12–p13 → T5 lịch ngược p14–p15 → T6 cô Hoa hỏi khi ở xa, điều kiện còn lại p16–p17 → tối T7 tuần sau khép vòng). Đổi tên (w145/_series/emigrants-passport-and-exit.md): anh Minh và chị Ngọc → Dũng; Thảo (đã làm cuốn mới ở bài trước) giải thích luật và nơi nộp; cô Hoa = lời đồn “thiếu là khỏi bay”. Tục ngữ mở/khép: “Nước đến chân mới nhảy” → “Nước chưa đến chân, Dũng đã nhảy”. BRK: 04 (Trước/Nay Điều 33 p1–p2), 07 (rehook 7 tháng p7), 08 (lịch ngược p14). Số chỉ lấy từ bài: Đ33 điểm a khoản 1 (2019) đủ 6 tháng → sửa đổi 2023, ≥ 6 / 3 tháng, 7 tháng (ca anh Minh), 10 năm, 8/5 ngày làm việc, 200.000 đ (TT 28/2026, 01/4/2026), giảm 10% đến 31/12/2025, TK02. Câu đố questions[18].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
