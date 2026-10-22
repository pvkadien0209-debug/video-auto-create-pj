// Kịch bản video W lần 3 (#110) — "Lịch trình công tác và giấy tờ cần chuẩn bị" · chuỗi "Lần đầu đi công tác nước ngoài"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý cho 40 câu hỏi của bài.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "business-trip-schedule-and-documents--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "first-business-trip-abroad",
    "slug": "business-trip-schedule-and-documents",
    "door": "ky-nang",
    "level": "B1",
    "title": "Lịch trình công tác và giấy tờ cần chuẩn bị",
    "series": "Lần đầu đi công tác nước ngoài"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng 10 ô. Mở giữa chuyện (Thảo ở quầy nhập cảnh Seoul, bị hỏi làm gì/ở đâu/bao lâu) → tua lại ngày được cử → 8 chặng (hộ chiếu, thư mời, vé-phòng, lịch, khoảng đệm, việc nhỏ, tối trước bay, cửa khẩu) → khép vòng ở đúng quầy ấy với câu mẫu p20. Nhân vật (mạch chuỗi w145/_series): Thảo (chính; người viết lịch Seoul p14, bạn ở p16), Dũng (Hiếu p5 thư mời thiếu chữ đệm; Lộc p22 hết pin — kể bằng BRK-01), Cô Hoa (sếp p24/p27), nhân viên cửa khẩu dùng hình Sam (không gọi tên Sam, để khỏi lẫn với đối tác). Tục ngữ mở/khép: “Sai một li, đi một dặm” → “soát từng li”. “Khoan đã!” (DLG) ở dòng lịch 7:00 giờ VN (p14). Cảnh ngắt nhịp: BRK-04 (Cách A/B ba buổi gặp p16), BRK-01 (điện thoại hết pin p22). Số chỉ lấy từ bài: 1 chữ đệm, 1 tuần, 9:00 Seoul / 7:00 VN, phòng 12A, 2 tiếng, nửa tiếng, gấp đôi, 5 ngày. Bản cũ (W lần 3, #110): w145/bak/business-trip-schedule-and-documents--w01.js.",
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
            "id": "a-cd1",
            "t": "text",
            "text": "“Sai một li,",
            "x": 60,
            "y": 110,
            "size": 100,
            "at": "l1:miss"
          },
          {
            "id": "a-cd2",
            "t": "text",
            "text": "đi một dặm”",
            "x": 180,
            "y": 240,
            "size": 100,
            "at": "l1:mile",
            "color": "accent",
            "hl": [
              {
                "text": "đi một dặm",
                "at": "l1:extra mile"
              }
            ]
          },
          {
            "id": "a-num",
            "t": "text",
            "text": "Thiếu 1 chữ đệm = +1 tuần",
            "x": 60,
            "y": 430,
            "size": 60,
            "at": "l2:middle",
            "color": "coral",
            "hl": [
              {
                "text": "+1 tuần",
                "at": "l2:week"
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
          "say": "An old proverb: miss by a hair, and you walk an extra mile.",
          "sub": "Tục ngữ có câu: “Sai một li, đi một dặm.”",
          "keys": [
            "Sai một li, đi một dặm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "With travel papers, one missing middle name can cost a whole extra week.",
          "sub": "Với giấy tờ công tác, thiếu đúng một chữ đệm có thể tốn thêm nguyên một tuần.",
          "keys": [
            "một chữ đệm"
          ]
        }
      ],
      "ref": "p5,p6"
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
              "set": "airport",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "stand"
                }
              ],
              "props": [
                "passport-control"
              ]
            },
            "at": "l1",
            "caption": "Seoul · quầy nhập cảnh",
            "icon": "passport-control"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Làm gì? Ở đâu? Bao lâu?",
            "x": 60,
            "y": 570,
            "size": 56,
            "at": "l3:why",
            "color": "coral"
          },
          {
            "id": "a-rw",
            "t": "text",
            "text": "⏪ tua lại: ngày được cử",
            "x": 60,
            "y": 670,
            "size": 48,
            "at": "l4:rewind",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo. Purple blazer, first business trip, at immigration in Seoul.",
          "sub": "Đây là Thảo. Blazer tím, chuyến công tác đầu tiên, đang đứng ở quầy nhập cảnh Seoul."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is the officer, eyebrows already halfway up.",
          "sub": "Còn đây là chị nhân viên cửa khẩu, lông mày đã nhướn lên một nửa.",
          "keys": [
            "lông mày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Why are you here, where will you stay, and for how long?",
          "sub": "Chị đến đây làm gì, ở đâu, và bao lâu?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Will her papers say what her mouth says? Let's rewind to the day she was chosen.",
          "sub": "Giấy tờ có nói cùng một câu với miệng cô không? Tua lại ngày cô được cử nào.",
          "keys": [
            "Tua lại"
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
      "ref": "p20"
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
            "text": "Giấy tờ, lịch trình: không sót?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:plan",
            "hl": [
              {
                "text": "không sót?",
                "at": "l1:slip"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "1. Tra nguồn chính thức ngay",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l3:official",
            "hl": [
              {
                "text": "nguồn chính thức",
                "at": "l3:official"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "2. Lịch giờ địa phương, có đệm",
            "x": 2028,
            "y": 260,
            "size": 50,
            "at": "l4:local",
            "hl": [
              {
                "text": "có đệm",
                "at": "l4:buffers"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "3. Mỗi giấy tờ: hai nơi",
            "x": 2028,
            "y": 350,
            "size": 50,
            "at": "l5:two",
            "hl": [
              {
                "text": "hai nơi",
                "at": "l5:two places"
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
          "say": "So how do you plan your trip schedule and documents without a single slip?",
          "sub": "Vậy làm lịch trình và giấy tờ công tác thế nào để không sót một li?",
          "keys": [
            "không sót một li"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Most paper trouble is avoidable with three habits.",
          "sub": "Hầu hết rắc rối giấy tờ đều tránh được nhờ ba thói quen.",
          "keys": [
            "ba thói quen"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Check official sources the day you're chosen.",
          "sub": "Tra yêu cầu từ nguồn chính thức ngay khi được cử."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Plan in local time, with buffers.",
          "sub": "Làm lịch trình theo giờ địa phương, có khoảng đệm."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And keep every key paper in two places.",
          "sub": "Và giữ mỗi giấy tờ quan trọng ở hai nơi."
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
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 190,
            "h": 90,
            "at": "l1:Eight+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2233,
            "y": 560,
            "w": 190,
            "h": 90,
            "at": "l1:Eight+660",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2438,
            "y": 560,
            "w": 190,
            "h": 90,
            "at": "l1:Eight+920",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2643,
            "y": 560,
            "w": 190,
            "h": 90,
            "at": "l1:Eight+1180",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2848,
            "y": 560,
            "w": 190,
            "h": 90,
            "at": "l1:Eight+1440",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3053,
            "y": 560,
            "w": 190,
            "h": 90,
            "at": "l1:Eight+1700",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3258,
            "y": 560,
            "w": 190,
            "h": 90,
            "at": "l1:Eight+1960",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3463,
            "y": 560,
            "w": 190,
            "h": 90,
            "at": "l1:Eight+2220",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Hộ chiếu",
            "x": 2040,
            "y": 580,
            "size": 34,
            "at": "l1:Eight+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Thư mời",
            "x": 2245,
            "y": 580,
            "size": 34,
            "at": "l1:Eight+780"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Vé, phòng",
            "x": 2450,
            "y": 580,
            "size": 34,
            "at": "l1:Eight+1040"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Lịch",
            "x": 2655,
            "y": 580,
            "size": 34,
            "at": "l1:Eight+1300"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Đệm",
            "x": 2860,
            "y": 580,
            "size": 34,
            "at": "l1:Eight+1560"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Việc nhỏ",
            "x": 3065,
            "y": 580,
            "size": 34,
            "at": "l1:Eight+1820"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Xếp giấy",
            "x": 3270,
            "y": 580,
            "size": 34,
            "at": "l1:Eight+2080"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "Cửa khẩu",
            "x": 3475,
            "y": 580,
            "size": 34,
            "at": "l1:Eight+2340"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Eight stops, from the day she's chosen to that counter. Passports out.",
          "sub": "Tám chặng, từ ngày được cử đến cái quầy kia. Lấy hộ chiếu ra nào.",
          "keys": [
            "Tám chặng"
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
            "text": "① Ngày được cử · Hộ chiếu",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
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
                  "pose": "hold"
                }
              ],
              "props": [
                "passport-control",
                "spiral-calendar"
              ]
            },
            "at": "l1:passport",
            "caption": "Ngày được cử · bàn làm việc",
            "icon": "passport-control"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Ngày hết hạn ✓",
            "x": 3996,
            "y": 160,
            "size": 54,
            "at": "l2:Expiry"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Trang còn trống ✓",
            "x": 3996,
            "y": 240,
            "size": 54,
            "at": "l2:Blank"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Còn hạn sau ngày đến / đi",
            "x": 3996,
            "y": 330,
            "size": 46,
            "at": "l3:valid",
            "hl": [
              {
                "text": "Còn hạn",
                "at": "l3:valid"
              }
            ]
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Làm lại: mất thời gian",
            "x": 3996,
            "y": 405,
            "size": 46,
            "at": "l4:renewal",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: the day she's chosen. Before anything, Thảo opens her passport.",
          "sub": "Chặng một: ngày được cử. Việc đầu tiên, Thảo mở hộ chiếu ra xem."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Expiry date, okay. Blank pages, okay. Phew!",
          "sub": "Ngày hết hạn, ổn. Trang trống, ổn. Phù!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Many countries want it valid a while after arrival or departure, some want blank pages.",
          "sub": "Nhiều nước yêu cầu hộ chiếu còn hạn một khoảng sau ngày nhập cảnh hoặc rời đi, có nơi cần trang trống để đóng dấu.",
          "keys": [
            "còn hạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A renewal takes time. Find out now, not at the airport.",
          "sub": "Làm lại hộ chiếu cần thời gian, nên biết ngay từ đầu, đừng để ra sân bay mới biết."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
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
            "id": "c-v1",
            "t": "text",
            "text": "Công tác ≠ du lịch",
            "x": 3996,
            "y": 480,
            "size": 62,
            "at": "l1:two",
            "color": "accent",
            "hl": [
              {
                "text": "≠",
                "at": "l1:different"
              }
            ]
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 585,
            "w": 40,
            "h": 40,
            "at": "l3:invitation",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 567,
            "size": 52,
            "at": "l3:invitation+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Thư mời đối tác",
            "x": 4056,
            "y": 577,
            "size": 36,
            "at": "l3:invitation+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 647,
            "w": 40,
            "h": 40,
            "at": "l3:company",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 629,
            "size": 52,
            "at": "l3:company+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Giấy cử đi · ảnh quy cách",
            "x": 4056,
            "y": 639,
            "size": 36,
            "at": "l3:company+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 709,
            "w": 40,
            "h": 40,
            "at": "l3:proof",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 691,
            "size": 52,
            "at": "l3:proof+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Tài chính, đặt phòng (nếu cần)",
            "x": 4056,
            "y": 701,
            "size": 36,
            "at": "l3:proof+200"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Hỏi hành chính + trang ĐSQ",
            "x": 4816,
            "y": 690,
            "size": 46,
            "at": "l4:admin",
            "hl": [
              {
                "text": "trang ĐSQ",
                "at": "l4:embassy"
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
          "say": "Next, the visa. In many countries, business and tourist visas are two different things.",
          "sub": "Tiếp theo: thị thực. Ở nhiều nước, thị thực công tác và du lịch là hai loại khác nhau.",
          "keys": [
            "hai loại khác nhau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meetings, fairs, training usually need the business kind. Wrong type, trouble at the border.",
          "sub": "Gặp đối tác, dự hội chợ, đào tạo thường cần đúng loại công tác. Dùng sai loại dễ gặp rắc rối khi nhập cảnh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Often asked: an invitation, a company letter, proper photos, sometimes proof of funds or booking.",
          "sub": "Hay gặp: thư mời, giấy cử đi công tác, ảnh đúng quy cách, có khi cần chứng minh tài chính hoặc đặt phòng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The real list depends on the country. Ask your admin team and read the embassy's official site.",
          "sub": "Danh sách thật tuỳ từng nước: hỏi bộ phận hành chính, đọc trang chính thức của đại sứ quán, lãnh sự quán.",
          "keys": [
            "trang chính thức"
          ]
        }
      ],
      "ref": "p2,p3"
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
            "at": "l4",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thư mời · Tên từng chữ",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-l",
            "t": "text",
            "text": "Họ tên · ngày đến · mục đích",
            "x": 5964,
            "y": 160,
            "size": 50,
            "at": "l2:Full name",
            "hl": [
              {
                "text": "Họ tên",
                "at": "l2:passport"
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "give"
                }
              ],
              "props": [
                "envelope",
                "cross-mark"
              ]
            },
            "at": "l3:Dũng",
            "caption": "Năm ngoái · thư mời của Dũng",
            "icon": "envelope"
          },
          {
            "id": "d-x",
            "t": "text",
            "text": "Thiếu 1 chữ đệm",
            "x": 5964,
            "y": 260,
            "size": 58,
            "at": "l4:middle",
            "color": "coral"
          },
          {
            "id": "d-w",
            "t": "text",
            "text": "→ soạn, ký, gửi lại: +1 tuần",
            "x": 5964,
            "y": 350,
            "size": 46,
            "at": "l5:signature",
            "hl": [
              {
                "text": "+1 tuần",
                "at": "l5:week"
              }
            ]
          },
          {
            "id": "d-f",
            "t": "text",
            "text": "→ lịch bay dời theo",
            "x": 5964,
            "y": 425,
            "size": 46,
            "at": "l5:flight",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: the invitation letter. The partner writes it, so tell them early what to include.",
          "sub": "Chặng hai: thư mời. Thư thường do đối tác soạn, nên báo sớm cho họ những gì cần ghi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Full name exactly as in your passport, arrival date, purpose of the trip.",
          "sub": "Họ tên đúng như hộ chiếu, ngày đến, mục đích chuyến đi.",
          "keys": [
            "đúng như hộ chiếu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Dũng, her desk neighbour, learned this the hard way.",
          "sub": "Dũng, bàn bên, đã học bài này theo cách đau nhất."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "The letter looked fine, so I submitted it. Sent back! One middle name was missing.",
          "sub": "Thư trông đủ rồi, anh nộp luôn. Bị trả về! Thiếu đúng một chữ đệm.",
          "face": "sad",
          "pose": "shrug"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "New letter, new signature, new delivery. One extra week, and his flight moved too.",
          "sub": "Đối tác soạn lại, ký lại, gửi lại. Mất thêm một tuần, lịch bay cũng dời theo.",
          "keys": [
            "Mất thêm một tuần"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p4,p5"
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
            "at": "l2",
            "fit": [
              "d-em"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-em",
            "t": "text",
            "text": "“…as shown in my passport?”",
            "x": 5964,
            "y": 530,
            "size": 42,
            "at": "l2:Could",
            "color": "ink",
            "hl": [
              {
                "text": "as shown in my passport",
                "at": "l2:shown"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Tên = hộ chiếu, từng chữ",
            "x": 5964,
            "y": 640,
            "size": 62,
            "at": "l3:letter",
            "color": "accent",
            "hl": [
              {
                "text": "từng chữ",
                "at": "l3:letter by letter"
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
          "say": "So Thảo's email to the partner asks, politely:",
          "sub": "Thế nên email Thảo gửi đối tác viết lịch sự thế này:"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Could you please send an invitation letter with my full name as shown in my passport?",
          "sub": "“Anh chị vui lòng gửi thư mời ghi đầy đủ họ tên của tôi đúng như trong hộ chiếu được không?”",
          "keys": [
            "đúng như trong hộ chiếu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lesson: every name on every paper matches the passport, letter by letter.",
          "sub": "Rút ra: Tên trên giấy nào cũng phải giống hộ chiếu từng chữ.",
          "keys": [
            "giống hộ chiếu từng chữ"
          ]
        }
      ],
      "ref": "p4,p6"
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
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Vé và khách sạn",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "airplane-departure",
                "hotel"
              ]
            },
            "at": "l1:tickets",
            "caption": "Đặt vé · bàn của Thảo",
            "icon": "airplane-departure"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Công ty đặt hay tự đặt?",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l1:book"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Hạng vé, hạng phòng, hoá đơn",
            "x": 7932,
            "y": 240,
            "size": 46,
            "at": "l2:class",
            "hl": [
              {
                "text": "hoá đơn",
                "at": "l2:receipts"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Tên = hộ chiếu · đúng sân bay",
            "x": 7932,
            "y": 320,
            "size": 46,
            "at": "l3:Name"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Bay đêm → đến hôm sau",
            "x": 7932,
            "y": 400,
            "size": 52,
            "at": "l3:overnight",
            "color": "coral",
            "hl": [
              {
                "text": "đến hôm sau",
                "at": "l3:next day"
              }
            ]
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "KS gần nơi họp, gần xe",
            "x": 7932,
            "y": 490,
            "size": 50,
            "at": "l4:Hotel",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three: tickets and hotel. Does the company book, or do you book and claim later?",
          "sub": "Chặng ba: vé và khách sạn. Hỏi trước: công ty đặt giúp, hay mình tự đặt rồi thanh toán sau?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Booking yourself? Ask the rules on ticket class, room class and receipts, or you pay the excess.",
          "sub": "Tự đặt thì hỏi quy định hạng vé, hạng phòng, loại hoá đơn, kẻo phải tự chịu khoản vượt mức.",
          "keys": [
            "tự chịu khoản vượt mức"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Name matches my passport. Right airports. Local times... wait, this overnight flight lands the next day!",
          "sub": "Tên trùng hộ chiếu. Đúng sân bay. Giờ địa phương… ơ, chuyến bay đêm này hạ cánh vào ngày hôm sau!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hotel near the meeting or easy transport, even if pricier. Two bus changes before a meeting? Tired already.",
          "sub": "Khách sạn gần nơi họp hoặc gần xe thuận tiện, dù đắt hơn chút. Sáng đổi hai chuyến xe mới tới họp thì mệt từ đầu.",
          "keys": [
            "mệt từ đầu"
          ]
        }
      ],
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
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-6",
            "t": "text",
            "text": "Đọc điều kiện đổi, huỷ",
            "x": 7932,
            "y": 590,
            "size": 50,
            "at": "l1:change"
          },
          {
            "id": "e-7",
            "t": "text",
            "text": "Vé rẻ không đổi → đắt nhất",
            "x": 7932,
            "y": 680,
            "size": 56,
            "at": "l2:cheap",
            "color": "accent",
            "hl": [
              {
                "text": "đắt nhất",
                "at": "l2:most expensive"
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
          "say": "Read the change and cancel rules. Business plans shift like rush hour.",
          "sub": "Và đọc điều kiện đổi, huỷ. Lịch công tác hay đổi như giao thông giờ tan tầm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A cheap ticket you can't change becomes the most expensive one when the partner moves the date.",
          "sub": "Vé rẻ không đổi được có thể thành vé đắt nhất khi đối tác dời lịch.",
          "keys": [
            "vé đắt nhất"
          ]
        }
      ],
      "ref": "p10"
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
            "at": "l2:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Lịch trình · Giờ nào?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
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
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "spiral-calendar",
                "alarm-clock"
              ]
            },
            "at": "l1:schedule",
            "caption": "Tuần trước bay · làm lịch",
            "icon": "spiral-calendar"
          },
          {
            "id": "f-old",
            "t": "text",
            "text": "Thứ Ba 7:00 – họp đối tác",
            "x": 60,
            "y": 1260,
            "size": 54,
            "at": "l2:Tuesday"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: the schedule. Thảo writes the very first line.",
          "sub": "Chặng bốn: lịch trình. Thảo viết dòng đầu tiên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Tuesday, seven a.m., meeting with the partner. Vietnam time, easy to remember.",
          "sub": "Thứ Ba, 7:00, họp với đối tác. Ghi giờ Việt Nam cho dễ nhớ.",
          "face": "happy"
        }
      ],
      "ref": "p11,p14"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Lịch trình · dòng đầu tiên",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "explain"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Ghi giờ Việt Nam cho dễ nhớ",
          "why": "Đến nơi quên đổi, đến khi phòng họp còn khoá, ngồi chờ hai tiếng, mệt từ trước khi họp.",
          "rule": "Họp ở đâu, ghi giờ ở đó"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Tuesday, seven, Vietnam time. Done!",
          "sub": "Thứ Ba, bảy giờ, giờ Việt Nam. Xong!",
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
          "say": "In Seoul she'll read seven as local time, find a locked room, wait two hours.",
          "sub": "Đến Seoul quên đổi, cô tưởng họp 7 giờ sáng giờ Seoul, đến khi phòng còn khoá, ngồi chờ hai tiếng ở sảnh vắng.",
          "keys": [
            "chờ hai tiếng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind. Write the time where it happens.",
          "sub": "Tua lại. Ghi giờ theo nơi diễn ra.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Tuesday, nine a.m. Seoul time, seven Vietnam time. Partner meeting, room twelve A.",
          "sub": "Thứ Ba 9:00 giờ Seoul (7:00 giờ Việt Nam): họp với đối tác, phòng 12A.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "One glance, and she knows when to leave.",
          "sub": "Nhìn lịch là biết ngay phải đi lúc nào.",
          "phase": "redo",
          "keys": [
            "biết ngay phải đi lúc nào"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p14"
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
            "id": "f-oldx",
            "t": "strike",
            "over": "f-old",
            "at": "l1:Lesson"
          },
          {
            "id": "f-new",
            "t": "text",
            "text": "Thứ Ba 9:00 giờ Seoul",
            "x": 60,
            "y": 1350,
            "size": 56,
            "at": "l1:meet",
            "color": "accent"
          },
          {
            "id": "f-new2",
            "t": "text",
            "text": "(7:00 giờ VN) · phòng 12A",
            "x": 100,
            "y": 1430,
            "size": 46,
            "at": "l1:Vietnam"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Họp ở đâu, ghi giờ ở đó",
            "x": 60,
            "y": 1530,
            "size": 58,
            "at": "l1:write",
            "hl": [
              {
                "text": "ghi giờ ở đó",
                "at": "l1:their time"
              }
            ]
          },
          {
            "id": "f-d1",
            "t": "text",
            "text": "Ngày đầu sau bay dài:",
            "x": 60,
            "y": 1650,
            "size": 46,
            "at": "l2:long flight",
            "color": "coral"
          },
          {
            "id": "f-d2",
            "t": "text",
            "text": "đừng xếp buổi quan trọng nhất",
            "x": 100,
            "y": 1720,
            "size": 44,
            "at": "l2:important"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: CDC Yellow Book — lệch múi giờ",
            "x": 880,
            "y": 1790,
            "size": 28,
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
          "say": "Lesson: meet there, write their time. For the office, add Vietnam time.",
          "sub": "Rút ra: Họp ở đâu, ghi giờ ở đó. Gửi lịch về công ty thì ghi thêm giờ Việt Nam bên cạnh.",
          "keys": [
            "Họp ở đâu, ghi giờ ở đó"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And after a long flight, keep your most important meeting off day one.",
          "sub": "Và sau chuyến bay dài, nếu được, đừng xếp buổi họp quan trọng nhất vào ngày đầu.",
          "keys": [
            "quan trọng nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Jet lag makes you less sharp than you think.",
          "sub": "Lệch múi giờ làm bạn kém tập trung hơn bạn nghĩ.",
          "keys": [
            "kém tập trung hơn bạn nghĩ"
          ]
        }
      ],
      "ref": "p11,p13,p15"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Khoảng đệm · Ba buổi gặp",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five",
            "hl": [
              {
                "text": "Khoảng đệm",
                "at": "l1:buffer"
              }
            ]
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Đi lại · thang máy · lễ tân · nghỉ",
            "x": 2028,
            "y": 1240,
            "size": 44,
            "at": "l1:lifts",
            "color": "muted"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Lịch kín: đẹp trên giấy",
            "x": 2028,
            "y": 1315,
            "size": 50,
            "at": "l2:packed"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "1 buổi kéo dài → cả ngày đổ",
            "x": 2868,
            "y": 1315,
            "size": 46,
            "at": "l2:runs",
            "color": "coral",
            "hl": [
              {
                "text": "cả ngày đổ",
                "at": "l2:dominoes"
              }
            ]
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "Cách A: cách 30 phút",
            "x": 2028,
            "y": 1420,
            "size": 46,
            "at": "l5:half",
            "color": "coral"
          },
          {
            "id": "ga-b0",
            "t": "box",
            "x": 2028,
            "y": 1490,
            "w": 300,
            "h": 80,
            "at": "l5:apart+0",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "ga-t0",
            "t": "text",
            "text": "Gặp 1",
            "x": 2098,
            "y": 1502,
            "size": 44,
            "at": "l5:apart+150"
          },
          {
            "id": "ga-b1",
            "t": "box",
            "x": 2368,
            "y": 1490,
            "w": 300,
            "h": 80,
            "at": "l5:apart+350",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "ga-t1",
            "t": "text",
            "text": "Gặp 2",
            "x": 2438,
            "y": 1502,
            "size": 44,
            "at": "l5:apart+500"
          },
          {
            "id": "ga-b2",
            "t": "box",
            "x": 2708,
            "y": 1490,
            "w": 300,
            "h": 80,
            "at": "l5:apart+700",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "ga-t2",
            "t": "text",
            "text": "Gặp 3",
            "x": 2778,
            "y": 1502,
            "size": 44,
            "at": "l5:apart+850"
          },
          {
            "id": "g-ax",
            "t": "strike",
            "over": "ga-t2",
            "at": "l6:gone"
          },
          {
            "id": "g-al",
            "t": "text",
            "text": "đến muộn, bỏ buổi 3",
            "x": 3048,
            "y": 1502,
            "size": 42,
            "at": "l6:late",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: the buffer. Leave room for travel, lifts, signing in at reception, and a short rest.",
          "sub": "Chặng năm: khoảng đệm. Chừa chỗ cho đi lại, chờ thang máy, đăng ký ở lễ tân, và nghỉ một chút.",
          "keys": [
            "khoảng đệm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A packed day looks heroic on paper. One meeting runs long, and it falls like dominoes.",
          "sub": "Lịch kín mít trông rất hiệu quả trên giấy. Một buổi họp kéo dài là cả ngày đổ theo như domino.",
          "keys": [
            "cả ngày đổ theo"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Three meetings, three corners of town. Option A: half an hour apart, the map looks close.",
          "sub": "Ba buổi gặp, ba đầu thành phố. Cách A: mỗi buổi cách nhau nửa tiếng, vì bản đồ trông rất gần."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The first runs over, traffic jams, she's late for the second, and the third is gone.",
          "sub": "Buổi đầu kéo dài, đường lại tắc, đến buổi hai muộn, phải bỏ hẳn buổi ba."
        }
      ],
      "ref": "p12,p16"
    },
    {
      "id": "s14",
      "module": "BRK-04",
      "data": {
        "title": "Ba buổi gặp, một ngày",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Cách nhau nửa tiếng vì bản đồ trông gần",
        "right": "Hỏi thời gian đi thật, để đệm gấp đôi",
        "wrongIllus": "world-map",
        "rightIllus": "stopwatch"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Option A trusts the map.",
          "sub": "Cách A tin bản đồ.",
          "keys": [
            "tin bản đồ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B asks real travel time, then doubles the buffer.",
          "sub": "Cách B hỏi thời gian đi thật, rồi để đệm gấp đôi.",
          "keys": [
            "đệm gấp đôi"
          ]
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
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-b",
            "t": "text",
            "text": "Cách B: đệm gấp đôi",
            "x": 2028,
            "y": 1610,
            "size": 50,
            "at": "l1:reception",
            "color": "accent"
          },
          {
            "id": "gb-b0",
            "t": "box",
            "x": 2028,
            "y": 1680,
            "w": 300,
            "h": 80,
            "at": "l2:runs+0",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "gb-t0",
            "t": "text",
            "text": "Gặp 1",
            "x": 2098,
            "y": 1692,
            "size": 44,
            "at": "l2:runs+150"
          },
          {
            "id": "gb-b1",
            "t": "box",
            "x": 2608,
            "y": 1680,
            "w": 300,
            "h": 80,
            "at": "l2:runs+350",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "gb-t1",
            "t": "text",
            "text": "Gặp 2",
            "x": 2678,
            "y": 1692,
            "size": 44,
            "at": "l2:runs+500"
          },
          {
            "id": "gb-b2",
            "t": "box",
            "x": 3188,
            "y": 1680,
            "w": 300,
            "h": 80,
            "at": "l2:runs+700",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "gb-t2",
            "t": "text",
            "text": "Gặp 3",
            "x": 3258,
            "y": 1692,
            "size": 44,
            "at": "l2:runs+850"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Lịch có chỗ thở",
            "x": 2028,
            "y": 1780,
            "size": 62,
            "at": "l3:breathe",
            "hl": [
              {
                "text": "chỗ thở",
                "at": "l3:breathe"
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
          "say": "So ask reception or the partner how long it really takes at that hour, then double the gap.",
          "sub": "Hỏi lễ tân hoặc đối tác thời gian đi thật vào giờ đó, rồi để khoảng đệm rộng gấp đôi.",
          "keys": [
            "rộng gấp đôi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The first runs over? No problem. All three, on time.",
          "sub": "Buổi đầu có kéo dài cũng không sao, cả ba buổi đều kịp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A schedule that can breathe makes the day run smooth.",
          "sub": "Rút ra: Lịch có chỗ thở, ngày mới chạy trơn.",
          "keys": [
            "Lịch có chỗ thở"
          ]
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
            "at": "l6",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Tuần cuối · Việc nhỏ dễ quên",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
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
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
                "credit-card"
              ]
            },
            "at": "l1:door",
            "caption": "Tuần cuối · phòng Cô Hoa",
            "icon": "page-facing-up"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Bảo hiểm: chi trả gì, gọi ai?",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l3:insure",
            "hl": [
              {
                "text": "gọi ai?",
                "at": "l3:call"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Lưu số HĐ: máy + giấy",
            "x": 3996,
            "y": 1330,
            "size": 48,
            "at": "l4:policy"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Sếp đưa danh sách giấy tờ",
            "x": 3996,
            "y": 1420,
            "size": 46,
            "at": "l5:list",
            "color": "accent"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Giao rõ ai làm gì",
            "x": 3996,
            "y": 1495,
            "size": 46,
            "at": "l5:Admin"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: the last week, small things that bite. Thảo knocks on a door.",
          "sub": "Chặng sáu: tuần cuối, những việc nhỏ hay quên. Thảo gõ cửa một căn phòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Cô Hoa, her manager, steady as a rice cooker.",
          "sub": "Cô Hoa, trưởng phòng, vững như nồi cơm điện.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Does the company insure this trip? What does it cover, and who do I call?",
          "sub": "Công ty có mua bảo hiểm cho chuyến này không ạ? Chi trả những gì, cần thì gọi ai ạ?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Yes. Save the policy number and contact, on your phone and on paper.",
          "sub": "Có. Em lưu số hợp đồng và cách liên hệ, cả trong điện thoại lẫn trên giấy.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Here's the usual document list for that country. Admin handles the letter, you book flights.",
          "sub": "Đây là danh sách giấy tờ công ty hay cần cho nước đó. Hành chính lo thư mời, em đặt vé.",
          "pose": "give",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Managers, do this. First-timers don't know who to ask.",
          "sub": "Sếp nào cũng nên làm vậy: người đi lần đầu thường không biết nên hỏi ai.",
          "keys": [
            "không biết nên hỏi ai"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p24,p27"
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
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1590,
            "w": 40,
            "h": 40,
            "at": "l1:card",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1572,
            "size": 52,
            "at": "l1:card+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Thẻ dùng được ở nước ngoài?",
            "x": 4056,
            "y": 1582,
            "size": 38,
            "at": "l1:card+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1648,
            "w": 40,
            "h": 40,
            "at": "l1:cash",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1630,
            "size": 52,
            "at": "l1:cash+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Ít tiền mặt địa phương",
            "x": 4056,
            "y": 1640,
            "size": 38,
            "at": "l1:cash+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1706,
            "w": 40,
            "h": 40,
            "at": "l1:mobile",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1688,
            "size": 52,
            "at": "l1:mobile+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Mạng di động",
            "x": 4056,
            "y": 1698,
            "size": 38,
            "at": "l1:mobile+200"
          },
          {
            "id": "h-s",
            "t": "text",
            "text": "Gửi lịch: sếp · công ty · gia đình",
            "x": 4816,
            "y": 1780,
            "size": 40,
            "at": "l2:Send",
            "color": "accent",
            "hl": [
              {
                "text": "gia đình",
                "at": "l2:family"
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
          "say": "Ask the bank if your card works abroad, carry a little local cash, and sort out mobile data.",
          "sub": "Hỏi ngân hàng thẻ có dùng được ở nước ngoài không, mang ít tiền mặt địa phương, tìm cách dùng mạng di động."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Send the itinerary to your boss, the office and family. If trouble comes, they know where to look.",
          "sub": "Gửi lịch trình (chuyến bay, khách sạn, nơi họp) cho sếp, người phụ trách ở công ty và gia đình. Có chuyện, người ở nhà biết tìm bạn từ đâu.",
          "keys": [
            "gia đình"
          ]
        }
      ],
      "ref": "p25,p26"
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Tối trước bay · Hai nơi",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop seven"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
                "mobile-phone",
                "luggage"
              ]
            },
            "at": "l1:night",
            "caption": "Tối trước bay · ở nhà",
            "icon": "luggage"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Hộ chiếu, thị thực, vé, phòng",
            "x": 5964,
            "y": 1250,
            "size": 44,
            "at": "l2:Passport"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Thư mời, giấy cử đi, lịch trình",
            "x": 5964,
            "y": 1320,
            "size": 44,
            "at": "l2:invitation"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Bảo hiểm · bằng lái phù hợp",
            "x": 5964,
            "y": 1390,
            "size": 44,
            "at": "l2:insurance"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Bản in + bản chụp",
            "x": 5964,
            "y": 1480,
            "size": 56,
            "at": "l3:Printed",
            "color": "accent",
            "hl": [
              {
                "text": "+",
                "at": "l3:photos"
              }
            ]
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Bản sao hộ chiếu để riêng",
            "x": 5964,
            "y": 1565,
            "size": 46,
            "at": "l3:copy"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven: the night before. Thảo lays out her papers like a wedding feast.",
          "sub": "Chặng bảy: tối trước khi bay. Thảo bày giấy tờ ra như mâm cỗ cưới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Passport, visa, tickets, booking, invitation, company letter, itinerary, insurance, a licence if driving.",
          "sub": "Hộ chiếu, thị thực, vé, đặt phòng, thư mời, giấy cử đi, lịch trình có địa chỉ, bảo hiểm, bằng lái nếu định lái xe."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Printed copies in my carry-on, photos on my phone, and a passport copy kept apart.",
          "sub": "Bản in trong túi xách tay, bản chụp trong điện thoại, và một bản sao hộ chiếu để riêng.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Samples, brochures, equipment? Ask about customs first. Medicine stays in its box, with the prescription.",
          "sub": "Mang hàng mẫu, tài liệu in nhiều, thiết bị? Hỏi trước quy định hải quan. Thuốc để trong vỏ gốc, kèm đơn thuốc.",
          "keys": [
            "vỏ gốc"
          ]
        }
      ],
      "ref": "p18,p19,p21"
    },
    {
      "id": "s19",
      "module": "BRK-01",
      "data": {
        "illus": "low-battery",
        "around": [
          "mobile-phone",
          "passport-control"
        ],
        "label": "Hết pin!",
        "note": "Vé, phòng, thư mời: chỉ nằm trong email"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Dũng, last year: no printouts. Stop right there.",
          "sub": "Dũng năm ngoái: không in gì. Dừng lại đã.",
          "keys": [
            "không in gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Everything in email. Battery dead at the desk.",
          "sub": "Mọi thứ trong email. Hết pin ngay ở quầy.",
          "keys": [
            "Hết pin"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "re-dia"
        }
      ],
      "ref": "p22"
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
            "id": "i-d",
            "t": "text",
            "text": "Dũng: đứng chờ, sạc nhờ",
            "x": 5964,
            "y": 1660,
            "size": 46,
            "at": "l1:waited",
            "color": "coral"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Túi một bản, máy một bản",
            "x": 5964,
            "y": 1760,
            "size": 58,
            "at": "l2:bag",
            "color": "accent",
            "hl": [
              {
                "text": "Túi một bản",
                "at": "l2:bag"
              },
              {
                "text": "máy một bản",
                "at": "l2:phone"
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
          "say": "He waited aside for ages, borrowed a charger, then opened his invitation.",
          "sub": "Dũng phải đứng sang một bên chờ khá lâu, sạc nhờ một lúc mới mở lại được thư mời."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lesson: one copy in the bag, one in the phone.",
          "sub": "Rút ra: Một bản trong túi, một bản trong máy.",
          "keys": [
            "Một bản trong túi, một bản trong máy"
          ]
        }
      ],
      "ref": "p22,p23"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "⑧ Seoul · Quầy nhập cảnh",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Back"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "airport",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "give"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "stand"
                }
              ],
              "props": [
                "passport-control"
              ]
            },
            "at": "l1:counter",
            "caption": "Seoul · quầy nhập cảnh",
            "icon": "passport-control"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Ngắn · thật · khớp giấy tờ",
            "x": 7932,
            "y": 1260,
            "size": 56,
            "at": "l4:true",
            "color": "accent",
            "hl": [
              {
                "text": "khớp giấy tờ",
                "at": "l4:matching"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Thư mời, đặt phòng: cầm sẵn",
            "x": 7932,
            "y": 1350,
            "size": 46,
            "at": "l4:Invitation"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "“Sai một li…”",
            "x": 7932,
            "y": 1470,
            "size": 60,
            "at": "l5:hair",
            "color": "muted"
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "→ soát từng li",
            "x": 7992,
            "y": 1560,
            "size": 64,
            "at": "l5:checked",
            "color": "accent",
            "hl": [
              {
                "text": "từng li",
                "at": "l5:every hair"
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
          "say": "Back to that counter. Same eyebrows.",
          "sub": "Trở lại quầy ấy. Vẫn cặp lông mày ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Why are you here, where will you stay, and for how long?",
          "sub": "Chị đến đây làm gì, ở đâu, và bao lâu?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I am here for a business meeting with my partner company. I will stay for five days.",
          "sub": "Tôi đến họp với công ty đối tác. Tôi sẽ ở lại năm ngày.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Short, true, matching her papers. Invitation and booking ready in hand.",
          "sub": "Ngắn, thật, khớp giấy tờ. Thư mời và xác nhận đặt phòng cầm sẵn trong tay.",
          "keys": [
            "Ngắn, thật, khớp giấy tờ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Miss by a hair, walk a mile. Thảo checked every hair.",
          "sub": "“Sai một li, đi một dặm.” Thảo thì soát từng li.",
          "keys": [
            "soát từng li"
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
      "ref": "p20"
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
            "x": 6664,
            "y": 640,
            "at": "l1:name"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 720,
            "y": 1530,
            "at": "l2:write"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6684,
            "y": 1480,
            "at": "l3:copy"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Quy định thị thực, hải quan, thuốc tuỳ từng nước; luôn kiểm tra trang chính thức.",
            "x": 7932,
            "y": 1810,
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
          "say": "So: every name matches the passport, letter by letter.",
          "sub": "Tóm lại: tên trên mọi giấy tờ giống hộ chiếu từng chữ.",
          "keys": [
            "giống hộ chiếu từng chữ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet there, write their time, and leave room to breathe.",
          "sub": "Họp ở đâu, ghi giờ ở đó, và chừa chỗ thở.",
          "keys": [
            "ghi giờ ở đó"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One copy in the bag, one in the phone. Then fly easy.",
          "sub": "Một bản trong túi, một bản trong máy. Rồi yên tâm bay.",
          "keys": [
            "Một bản trong túi"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p6,p15,p23"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "ref": "questions[22]",
      "data": {
        "q": "An immigration officer asks why you are visiting, how should you answer?",
        "options": [
          "Briefly and truthfully, matching your documents, with your invitation letter easy to reach",
          "Give a long story about your company, so the officer sees you are important",
          "Say you are a tourist, because business answers always lead to more questions"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "passport-control",
        "why": "Câu trả lời ngắn, thật, khớp giấy tờ giúp thủ tục nhanh gọn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "An immigration officer asks why you are visiting, how should you answer?",
          "sub": "Nhân viên cửa khẩu hỏi bạn đến để làm gì, nên trả lời thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Briefly and truthfully, matching your documents, with your invitation letter easy to reach.",
          "sub": "Ngắn, thật, khớp với giấy tờ, thư mời để chỗ dễ lấy."
        }
      ],
      "beats": {
        "after": 500
      }
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: mở hộ chiếu xem ngày hết hạn",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới.",
          "face": "happy"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
