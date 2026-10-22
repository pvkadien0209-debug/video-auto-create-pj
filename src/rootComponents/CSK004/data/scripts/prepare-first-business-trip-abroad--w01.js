// Kịch bản video W lần 3 (#110) — "Lần đầu đi công tác nước ngoài cần chuẩn bị những gì?" · chuỗi "Lần đầu đi công tác nước ngoài"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý cho 40 câu hỏi của bài.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "prepare-first-business-trip-abroad--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "first-business-trip-abroad",
    "slug": "prepare-first-business-trip-abroad",
    "door": "ky-nang",
    "level": "B1",
    "title": "Lần đầu đi công tác nước ngoài cần chuẩn bị những gì?",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô đi theo CHUYẾN CÔNG TÁC ĐẦU TIÊN của Thảo (Thứ Hai 9:00 được cử → vài tuần trước → tuần cuối → ngày 1 hoãn chuyến → ngày 2 họp với Sam “Khoan đã!” tua về Thứ Hai → về nước → Thứ Hai tuần sau 9:00). Nhân vật (mạch chuỗi w145/_series): Thảo (chính, gộp Hạnh p4 và Diệp p19), Dũng (Khang p9; khép vòng p25 được cử lần sau), Cô Hoa (sếp, p25), Sam (đối tác p4). Ca dao mở/khép: “Đi một ngày đàng, học một sàng khôn” → sàng khôn = cuốn sổ. Cảnh ngắt nhịp: BRK-07 (rehook “đi làm quen”), BRK-08 (dòng thời gian, vào năm ngày ở nước bạn), BRK-04 (Cách A/B hoá đơn p23). Số chỉ lấy từ bài: 10 ngày, một tuần, hai tiếng, 10 phút, ba dòng, năm ngày. Bản cũ (W lần 3, #110): w145/bak/prepare-first-business-trip-abroad--w01.js.",
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
            "text": "“Đi một ngày đàng",
            "x": 60,
            "y": 120,
            "size": 96,
            "at": "l1:travel"
          },
          {
            "id": "a-cd2",
            "t": "text",
            "text": "học một sàng khôn”",
            "x": 140,
            "y": 250,
            "size": 96,
            "at": "l1:basket",
            "color": "accent",
            "hl": [
              {
                "text": "một sàng khôn",
                "at": "l1:wisdom"
              }
            ]
          },
          {
            "id": "a-luck",
            "t": "text",
            "text": "Chuyến đầu suôn sẻ = nhờ may?",
            "x": 60,
            "y": 440,
            "size": 54,
            "at": "l2:luck",
            "color": "muted"
          },
          {
            "id": "a-luckx",
            "t": "strike",
            "over": "a-luck",
            "at": "l2:luck+700"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "An old saying: travel one day on the road, and you bring home a basket of wisdom.",
          "sub": "Ông bà dặn: “Đi một ngày đàng, học một sàng khôn.”",
          "keys": [
            "học một sàng khôn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But your first business trip abroad? Many think it runs on luck.",
          "sub": "Còn chuyến công tác nước ngoài đầu tiên? Nhiều người nghĩ suôn sẻ là nhờ may.",
          "keys": [
            "nhờ may"
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
            "at": "l5:end",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "stand"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "hold"
                }
              ],
              "props": [
                "spiral-calendar"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · 9:00 · văn phòng",
            "icon": "office-building"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Giấy tờ? Họp? Hoá đơn?",
            "x": 60,
            "y": 560,
            "size": 54,
            "at": "l5:papers",
            "color": "coral",
            "hl": [
              {
                "text": "Hoá đơn?",
                "at": "l5:receipts"
              }
            ]
          },
          {
            "id": "a-mat",
            "t": "text",
            "text": "… lỡ làm mất mặt công ty?",
            "x": 60,
            "y": 650,
            "size": 46,
            "at": "l5:embarrass",
            "color": "muted"
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
          "say": "Purple blazer, glasses, notebook glued to her hand.",
          "sub": "Blazer tím, kính cận, sổ tay không rời tay.",
          "keys": [
            "sổ tay không rời tay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Cô Hoa, her manager, steady as a rice cooker.",
          "sub": "Còn đây là Cô Hoa, trưởng phòng, vững như nồi cơm điện đời cũ.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, next month you fly abroad to meet our supplier.",
          "sub": "Thảo ơi, tháng sau em bay ra nước ngoài gặp nhà cung cấp nhé.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Me? Abroad? Papers, meetings, receipts... What if I embarrass the company?",
          "sub": "Em ạ? Nước ngoài ạ? Giấy tờ, họp hành, hoá đơn… lỡ em làm mất mặt công ty thì sao?",
          "face": "surprised"
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
            "text": "Cần chuẩn bị những gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:prepare",
            "hl": [
              {
                "text": "những gì",
                "at": "l1:trip"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: cầu may",
            "x": 2028,
            "y": 150,
            "size": 54,
            "at": "l2:luck",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:envelope"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: 5 việc",
            "x": 2608,
            "y": 150,
            "size": 58,
            "at": "l2:five",
            "color": "accent",
            "hl": [
              {
                "text": "5 việc",
                "at": "l2:five things"
              }
            ]
          },
          {
            "id": "b-f0",
            "t": "text",
            "text": "1. Hỏi rõ mục tiêu",
            "x": 2048,
            "y": 250,
            "size": 48,
            "at": "l4:goal"
          },
          {
            "id": "b-f1",
            "t": "text",
            "text": "2. Lo giấy tờ sớm",
            "x": 2568,
            "y": 250,
            "size": 48,
            "at": "l4:documents"
          },
          {
            "id": "b-f2",
            "t": "text",
            "text": "3. Tìm hiểu đối tác",
            "x": 2048,
            "y": 330,
            "size": 48,
            "at": "l4:partner"
          },
          {
            "id": "b-f3",
            "t": "text",
            "text": "4. Chuẩn bị kỹ buổi họp",
            "x": 2568,
            "y": 330,
            "size": 48,
            "at": "l5:meeting"
          },
          {
            "id": "b-f4",
            "t": "text",
            "text": "5. Giữ đủ hoá đơn",
            "x": 2048,
            "y": 410,
            "size": 48,
            "at": "l5:receipt"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what should you prepare for your first business trip abroad?",
          "sub": "Vậy lần đầu đi công tác nước ngoài, cần chuẩn bị những gì?",
          "keys": [
            "chuẩn bị những gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not luck, not a lucky envelope in your wallet. Just five things.",
          "sub": "Không phải cầu may, chẳng phải bao lì xì trong ví. Chỉ là năm việc.",
          "keys": [
            "Không phải cầu may",
            "năm việc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ask about the goal. Sort out documents early. Research the partner.",
          "sub": "Hỏi rõ mục tiêu. Lo giấy tờ sớm. Tìm hiểu đối tác."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Prepare well for the meeting. And keep every receipt.",
          "sub": "Chuẩn bị kỹ cho buổi họp. Và giữ đủ hoá đơn."
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
            "id": "b-map",
            "t": "text",
            "text": "Bản đồ cả chuỗi",
            "x": 2028,
            "y": 500,
            "size": 50,
            "at": "l1:map",
            "hl": [
              {
                "text": "Bản đồ",
                "at": "l1:map"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 600,
            "w": 215,
            "h": 90,
            "at": "l2:seven+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 600,
            "w": 215,
            "h": 90,
            "at": "l2:seven+780",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 600,
            "w": 215,
            "h": 90,
            "at": "l2:seven+1060",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 600,
            "w": 215,
            "h": 90,
            "at": "l2:seven+1340",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 600,
            "w": 215,
            "h": 90,
            "at": "l2:seven+1620",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 600,
            "w": 215,
            "h": 90,
            "at": "l2:seven+1900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 600,
            "w": 215,
            "h": 90,
            "at": "l2:seven+2180",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Thứ Hai",
            "x": 2046,
            "y": 616,
            "size": 40,
            "at": "l2:seven+620"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Vài tuần",
            "x": 2281,
            "y": 616,
            "size": 40,
            "at": "l2:seven+900"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Tuần cuối",
            "x": 2516,
            "y": 616,
            "size": 40,
            "at": "l2:seven+1180"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Ngày 1",
            "x": 2751,
            "y": 616,
            "size": 40,
            "at": "l2:seven+1460"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Ngày 2",
            "x": 2986,
            "y": 616,
            "size": 40,
            "at": "l2:seven+1740"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Về nước",
            "x": 3221,
            "y": 616,
            "size": 40,
            "at": "l2:seven+2020"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Thứ Hai",
            "x": 3456,
            "y": 616,
            "size": 40,
            "at": "l2:seven+2300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "This is the map of our whole series, from being chosen to reporting back.",
          "sub": "Video này là bản đồ của cả chuỗi: từ lúc được cử đến khi về báo cáo.",
          "keys": [
            "bản đồ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "We follow Thảo through seven stops. Fasten your seatbelt.",
          "sub": "Ta theo Thảo qua bảy chặng. Thắt dây an toàn vào nhé.",
          "keys": [
            "bảy chặng"
          ]
        }
      ],
      "ref": "intro,outro"
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
            "at": "l4",
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
            "text": "① Thứ Hai · Đi để làm gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first stop",
            "hl": [
              {
                "text": "Đi để làm gì?",
                "at": "l1:for"
              }
            ]
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
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "hoa",
                  "side": "right"
                }
              ],
              "props": [
                "bullseye"
              ]
            },
            "at": "l1:Monday",
            "caption": "Thứ Hai · 9:15",
            "icon": "bullseye"
          },
          {
            "id": "c-g1",
            "t": "text",
            "text": "• Ký một thoả thuận?",
            "x": 3996,
            "y": 160,
            "size": 50,
            "at": "l2:sign"
          },
          {
            "id": "c-g2",
            "t": "text",
            "text": "• Tìm hiểu một sản phẩm?",
            "x": 3996,
            "y": 235,
            "size": 50,
            "at": "l2:product"
          },
          {
            "id": "c-g3",
            "t": "text",
            "text": "• Chỉ mở đầu quan hệ?",
            "x": 3996,
            "y": 310,
            "size": 50,
            "at": "l2:relationship"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Biết mục tiêu → biết chuẩn bị gì",
            "x": 3996,
            "y": 410,
            "size": 48,
            "at": "l3:goal",
            "color": "accent",
            "hl": [
              {
                "text": "Biết mục tiêu",
                "at": "l3:know the goal"
              }
            ]
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "… và về báo cáo gì",
            "x": 4036,
            "y": 480,
            "size": 44,
            "at": "l3:report",
            "color": "muted"
          },
          {
            "id": "c-gs",
            "t": "text",
            "text": "Thảo: “đi làm quen thôi”",
            "x": 3996,
            "y": 600,
            "size": 52,
            "at": "l4:get to know",
            "color": "coral"
          },
          {
            "id": "c-gsr",
            "t": "ring",
            "around": [
              "c-gs"
            ],
            "color": "coral",
            "stroke": 7,
            "at": "l5:asking"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: still Monday. Before tickets or suitcases, one question. What is this trip for?",
          "sub": "Chặng một: vẫn sáng thứ Hai. Trước vé, trước vali, một câu hỏi: chuyến này để làm gì?",
          "keys": [
            "để làm gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "To sign a deal? To learn about a product? Or just to start a relationship?",
          "sub": "Ký một thoả thuận? Tìm hiểu một sản phẩm? Hay chỉ mở đầu mối quan hệ?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Know the goal, and you know what to prepare, and what to report back.",
          "sub": "Biết mục tiêu mới biết chuẩn bị gì, và khi về báo cáo gì.",
          "keys": [
            "Biết mục tiêu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "No need to ask. It's just to get to know them, I'm sure!",
          "sub": "Khỏi hỏi. Chắc chỉ là đi làm quen thôi!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "She guessed instead of asking. Remember that, it comes back.",
          "sub": "Cô ấy đoán chứ không hỏi. Nhớ chi tiết này, lát nữa nó quay lại đấy.",
          "keys": [
            "đoán chứ không hỏi"
          ]
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
      "module": "BRK-07",
      "data": {
        "question": "Chỉ đi làm quen thì có gì mà hỏng?",
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
          "say": "If it's just a friendly visit, what could go wrong?",
          "sub": "Chỉ đi làm quen thì có gì mà hỏng?",
          "keys": [
            "có gì mà hỏng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p4"
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
            "at": "l5",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Vài tuần trước · Giấy tờ",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:second stop"
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
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "envelope",
                "tear-off-calendar"
              ]
            },
            "at": "l1:Dũng",
            "caption": "Năm ngoái · chuyến của Dũng",
            "icon": "envelope"
          },
          {
            "id": "d-10",
            "t": "text",
            "text": "Nộp hồ sơ: còn 10 ngày",
            "x": 5964,
            "y": 160,
            "size": 52,
            "at": "l3:ten",
            "color": "coral",
            "hl": [
              {
                "text": "10 ngày",
                "at": "l3:ten days"
              }
            ]
          },
          {
            "id": "d-post",
            "t": "text",
            "text": "Thư mời gốc: bưu điện, cả tuần",
            "x": 5964,
            "y": 245,
            "size": 46,
            "at": "l4:post"
          },
          {
            "id": "d-cost",
            "t": "text",
            "text": "→ đổi vé, tốn thêm tiền",
            "x": 5964,
            "y": 325,
            "size": 48,
            "at": "l5:changed",
            "color": "muted"
          },
          {
            "id": "d-rule",
            "t": "text",
            "text": "Giấy tờ lo đầu tiên",
            "x": 5964,
            "y": 410,
            "size": 64,
            "at": "l6:documents",
            "color": "accent",
            "hl": [
              {
                "text": "lo đầu tiên",
                "at": "l6:first"
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
          "say": "Second stop: weeks before the flight. Thảo asks Dũng, her desk neighbour.",
          "sub": "Chặng hai: vài tuần trước chuyến bay. Thảo hỏi Dũng, bàn bên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tall, quick, and he has tripped over everything once.",
          "sub": "Cao, nhanh nhảu, và đã vấp đủ thứ một lần.",
          "keys": [
            "vấp đủ thứ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Business visa? I thought it was as quick as a tourist one. I applied ten days before.",
          "sub": "Thị thực công tác á? Anh tưởng nhanh như đi du lịch. Còn mười ngày mới nộp hồ sơ.",
          "face": "neutral",
          "pose": "shrug"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Then they wanted the original invitation letter, by post. That took a whole week!",
          "sub": "Rồi họ cần thư mời bản gốc, gửi bưu điện. Mất nguyên một tuần!",
          "face": "sad"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "He flew, but changed tickets, paid extra, and the team sweated till the end.",
          "sub": "Vẫn kịp đi, nhưng phải đổi vé, tốn thêm tiền, cả đoàn hồi hộp đến ngày cuối.",
          "keys": [
            "đổi vé, tốn thêm tiền"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Lesson: documents first, never at the last minute.",
          "sub": "Rút ra: Giấy tờ lo đầu tiên, đừng để đến phút cuối.",
          "keys": [
            "Giấy tờ lo đầu tiên"
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
      "ref": "p9,p10"
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
          }
        ],
        "items": [
          {
            "id": "d-why",
            "t": "text",
            "text": "Vì: phụ thuộc người khác",
            "x": 5964,
            "y": 515,
            "size": 48,
            "at": "l1:depend",
            "hl": [
              {
                "text": "người khác",
                "at": "l1:other people"
              }
            ]
          },
          {
            "id": "d-c1",
            "t": "text",
            "text": "Hộ chiếu còn hạn bao lâu?",
            "x": 5964,
            "y": 590,
            "size": 42,
            "at": "l2:passport"
          },
          {
            "id": "d-c2",
            "t": "text",
            "text": "Có cần thị thực? Thư mời?",
            "x": 5964,
            "y": 650,
            "size": 42,
            "at": "l2:visa"
          },
          {
            "id": "d-c3",
            "t": "text",
            "text": "Xác nhận của công ty?",
            "x": 5964,
            "y": 710,
            "size": 42,
            "at": "l2:company"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Trang chính thức ĐSQ + hành chính",
            "x": 6784,
            "y": 690,
            "size": 44,
            "at": "l3:official",
            "color": "accent",
            "hl": [
              {
                "text": "Trang chính thức",
                "at": "l3:official"
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
          "say": "Why first? Because papers depend on other people: partners, embassies, even the post office.",
          "sub": "Vì sao trước tiên? Vì giấy tờ phụ thuộc người khác: đối tác, đại sứ quán, cả bưu điện.",
          "keys": [
            "phụ thuộc người khác"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Check how long your passport is valid, whether you need a visa, an invitation, a company letter.",
          "sub": "Kiểm tra hộ chiếu còn hạn bao lâu, có cần thị thực, thư mời, giấy xác nhận của công ty không."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Every country differs, so read the official embassy site and ask your admin team.",
          "sub": "Mỗi nước một quy định: xem trang chính thức của đại sứ quán, lãnh sự quán, và hỏi bộ phận hành chính.",
          "keys": [
            "trang chính thức"
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
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "② Song song · Đối tác, kế toán",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:while"
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
                "globe-with-meridians",
                "receipt"
              ]
            },
            "at": "l1:homework",
            "caption": "Vài tuần trước · bàn của Thảo",
            "icon": "globe-with-meridians"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Công ty họ làm gì?",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l2:company"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Người sẽ gặp: vai trò gì?",
            "x": 7932,
            "y": 240,
            "size": 50,
            "at": "l2:role"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Cách làm việc: khác gì mình?",
            "x": 7932,
            "y": 320,
            "size": 50,
            "at": "l3:differ",
            "hl": [
              {
                "text": "khác gì mình?",
                "at": "l3:differ"
              }
            ]
          },
          {
            "id": "e-acc",
            "t": "text",
            "text": "Hỏi kế toán:",
            "x": 7932,
            "y": 430,
            "size": 52,
            "at": "l4:pay",
            "color": "coral"
          },
          {
            "id": "e-a1",
            "t": "text",
            "text": "công ty trả gì, mình ứng gì,",
            "x": 7962,
            "y": 505,
            "size": 44,
            "at": "l4:company pay"
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "cần hoá đơn loại nào",
            "x": 7962,
            "y": 565,
            "size": 44,
            "at": "l4:receipts"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "While the papers travel, Thảo does her homework on the partner.",
          "sub": "Trong lúc chờ giấy tờ, Thảo làm bài tập về đối tác."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What does their company do? What role does each person she will meet play?",
          "sub": "Công ty họ làm gì? Người cô sẽ gặp giữ vai trò gì?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And how does work in their country differ from ours?",
          "sub": "Và cách làm việc ở nước họ khác mình ở đâu?",
          "keys": [
            "khác mình ở đâu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Accounting? What does the company pay, what do I pay first, and which receipts do you need?",
          "sub": "Chị kế toán ơi, khoản nào công ty trả, khoản nào em tự ứng, cần loại hoá đơn nào ạ?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One question now beats learning at home that your receipts don't count.",
          "sub": "Hỏi trước một câu, đỡ hơn về nhà mới biết hoá đơn không hợp lệ.",
          "keys": [
            "Hỏi trước một câu"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "at": "l3",
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
            "text": "③ Tuần cuối · Tập trước buổi họp",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:last week"
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
                  "pose": "explain"
                }
              ],
              "props": [
                "luggage",
                "necktie",
                "page-facing-up"
              ]
            },
            "at": "l1:evening",
            "caption": "Tuần cuối · tập ở nhà",
            "icon": "luggage"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Mặc gì? Chào sao? Danh thiếp?",
            "x": 60,
            "y": 1250,
            "size": 46,
            "at": "l2:wear"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Xin chương trình họp trước",
            "x": 60,
            "y": 1320,
            "size": 46,
            "at": "l3:agenda",
            "hl": [
              {
                "text": "chương trình họp",
                "at": "l3:agenda"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "3 ý chính cần nói",
            "x": 60,
            "y": 1390,
            "size": 50,
            "at": "l3:three",
            "color": "accent"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Câu tiếng Anh lúc nghe không kịp",
            "x": 60,
            "y": 1462,
            "size": 40,
            "at": "l3:English"
          },
          {
            "id": "f-g",
            "t": "text",
            "text": "Quà, bữa mời: ai lo, ngân sách?",
            "x": 60,
            "y": 1530,
            "size": 42,
            "at": "l5:gift",
            "color": "coral",
            "hl": [
              {
                "text": "ai lo",
                "at": "l5:who"
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
          "say": "Third stop: the last week. Every evening, Thảo rehearses her first meeting.",
          "sub": "Chặng ba: tuần cuối. Tối nào Thảo cũng tập trước buổi gặp đầu tiên.",
          "keys": [
            "tập trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What to wear, how to greet, how to give a business card. Not sure? Ask.",
          "sub": "Mặc gì, chào thế nào, trao danh thiếp ra sao. Chưa rõ thì hỏi người từng đi hoặc đầu mối bên họ.",
          "keys": [
            "Chưa rõ thì hỏi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I asked for the agenda. Three key points, and a few English lines for when I can't keep up.",
          "sub": "Em đã xin chương trình họp. Ba ý chính, và vài câu tiếng Anh cho lúc nghe không kịp.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Like: could you say that again more slowly, please?",
          "sub": "Ví dụ: “Anh chị nói lại chậm hơn giúp tôi được không?”",
          "keys": [
            "nói lại chậm hơn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Gifts or a dinner for the partner? Ask first who handles it, what gift, what budget.",
          "sub": "Có lệ tặng quà, mời cơm đối tác? Hỏi trước ai lo, quà gì, ngân sách bao nhiêu.",
          "keys": [
            "ai lo, quà gì"
          ]
        }
      ],
      "ref": "p11,p12,p13"
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
            "at": "l1",
            "fit": [
              "f-l0",
              "f-l3"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1625,
            "w": 36,
            "h": 36,
            "at": "l1:printed",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1607,
            "size": 48,
            "at": "l1:printed+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Giấy tờ, vé, phòng: in + điện thoại",
            "x": 116,
            "y": 1617,
            "size": 36,
            "at": "l1:printed+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1683,
            "w": 36,
            "h": 36,
            "at": "l1:cards",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1665,
            "size": 48,
            "at": "l1:cards+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Danh thiếp đủ dùng",
            "x": 116,
            "y": 1675,
            "size": 36,
            "at": "l1:cards+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1741,
            "w": 36,
            "h": 36,
            "at": "l2:charger",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1723,
            "size": 48,
            "at": "l2:charger+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Tài liệu, sạc, ổ chuyển đổi",
            "x": 116,
            "y": 1733,
            "size": 36,
            "at": "l2:charger+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1799,
            "w": 36,
            "h": 36,
            "at": "l2:spare",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1781,
            "size": 48,
            "at": "l2:spare+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Bộ đồ họp dự phòng xách tay",
            "x": 116,
            "y": 1791,
            "size": 36,
            "at": "l2:spare+200"
          },
          {
            "id": "fm-c0",
            "t": "box",
            "x": 880,
            "y": 1780,
            "w": 40,
            "h": 40,
            "at": "l2:medicine",
            "stroke": 5
          },
          {
            "id": "fm-k0",
            "t": "text",
            "text": "✓",
            "x": 884,
            "y": 1762,
            "size": 52,
            "at": "l2:medicine+600",
            "color": "accent"
          },
          {
            "id": "fm-l0",
            "t": "text",
            "text": "Thuốc kèm đơn",
            "x": 940,
            "y": 1772,
            "size": 40,
            "at": "l2:medicine+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Packing: passport, visa, tickets, booking, printed and on your phone. Plenty of business cards.",
          "sub": "Danh sách hành lý: hộ chiếu, thị thực, vé, đặt phòng, cả bản in lẫn trên điện thoại. Danh thiếp đủ dùng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meeting papers, charger, adapter, a spare outfit in your carry-on, medicine with its prescription.",
          "sub": "Tài liệu họp, máy tính, sạc, ổ chuyển đổi, bộ đồ họp dự phòng trong hành lý xách tay, thuốc kèm đơn.",
          "keys": [
            "bộ đồ họp dự phòng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lose your suitcase, keep your dignity.",
          "sub": "Mất vali thì mất, phong độ vẫn còn.",
          "keys": [
            "phong độ vẫn còn"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s12",
      "module": "BRK-08",
      "data": {
        "title": "Chuyến đi của Thảo",
        "current": 3,
        "points": [
          {
            "label": "Thứ Hai",
            "sub": "Được cử",
            "illus": "office-building"
          },
          {
            "label": "Vài tuần trước",
            "sub": "Giấy tờ, đối tác",
            "illus": "passport-control"
          },
          {
            "label": "Tuần cuối",
            "sub": "Tập buổi họp",
            "illus": "luggage"
          },
          {
            "label": "Ở nước bạn",
            "sub": "Năm ngày",
            "illus": "airplane-arrival"
          },
          {
            "label": "Về nước",
            "sub": "Báo cáo",
            "illus": "memo"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Chosen, papers, rehearsal. Done.",
          "sub": "Được cử, giấy tờ, tập dượt. Xong."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Now, five days abroad.",
          "sub": "Giờ là năm ngày ở nước bạn.",
          "keys": [
            "năm ngày"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p16"
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
            "at": "l3",
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
            "text": "④ Ngày 1 · Chuyến bay hoãn",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "airport",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "airplane-departure",
                "mobile-phone"
              ]
            },
            "at": "l1:airport",
            "caption": "Ngày 1 · sân bay",
            "icon": "airplane-departure"
          },
          {
            "id": "g-ch",
            "t": "text",
            "text": "Hẹn trước: kênh, giờ, người trực",
            "x": 2028,
            "y": 1250,
            "size": 44,
            "at": "l2:channel",
            "hl": [
              {
                "text": "người trực",
                "at": "l2:duty"
              }
            ]
          },
          {
            "id": "g-tz",
            "t": "text",
            "text": "vì lệch múi giờ",
            "x": 2068,
            "y": 1320,
            "size": 40,
            "at": "l2:duty+400",
            "color": "muted"
          },
          {
            "id": "g-m1",
            "t": "text",
            "text": "Chuyện gì xảy ra",
            "x": 2028,
            "y": 1420,
            "size": 50,
            "at": "l4:happened",
            "color": "coral"
          },
          {
            "id": "g-m2",
            "t": "text",
            "text": "Mình đã làm gì",
            "x": 2028,
            "y": 1500,
            "size": 50,
            "at": "l4:did"
          },
          {
            "id": "g-m3",
            "t": "text",
            "text": "Bước tiếp theo",
            "x": 2028,
            "y": 1580,
            "size": 50,
            "at": "l4:next",
            "color": "accent"
          },
          {
            "id": "g-calm",
            "t": "text",
            "text": "Không phải lỗi: bình tĩnh, báo ngay",
            "x": 2028,
            "y": 1680,
            "size": 42,
            "at": "l5:fault",
            "hl": [
              {
                "text": "bình tĩnh",
                "at": "l5:calm"
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
          "say": "Fourth stop: day one, the airport. Her flight is delayed.",
          "sub": "Chặng bốn: ngày một, ở sân bay. Chuyến bay bị hoãn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Luckily she agreed with Cô Hoa beforehand: which channel, what time, who's on duty.",
          "sub": "May mà trước khi đi đã thống nhất với Cô Hoa: báo qua kênh nào, giờ nào, ai trực khi gấp. Lệch múi giờ mà.",
          "keys": [
            "ai trực"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "My flight is delayed, about two hours late. I've moved the partner meeting to the afternoon. I'll update you.",
          "sub": "Chuyến bay của em bị hoãn, đến muộn khoảng hai tiếng. Em đã báo đối tác dời buổi gặp sang chiều, em sẽ cập nhật tiếp ạ.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One message, three answers: what happened, what she did, what comes next.",
          "sub": "Một tin nhắn, đủ ba ý: chuyện gì xảy ra, mình đã làm gì, bước tiếp theo là gì.",
          "keys": [
            "đủ ba ý"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Delays, lost bags, illness: not your fault. Stay calm, tell the right people, keep the papers.",
          "sub": "Chậm chuyến, lạc hành lý, ốm: không phải lỗi của bạn. Bình tĩnh, báo ngay người cần biết, giữ giấy tờ.",
          "keys": [
            "không phải lỗi của bạn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p15,p16,p17"
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
          }
        ],
        "items": [
          {
            "id": "g-10",
            "t": "text",
            "text": "Mỗi tối: 10 phút ghi lại",
            "x": 2028,
            "y": 1770,
            "size": 54,
            "at": "l1:ten minutes",
            "color": "accent",
            "hl": [
              {
                "text": "10 phút",
                "at": "l1:ten minutes"
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
          "say": "Every night, ten minutes before sleep: notes, receipt photos, a short update home.",
          "sub": "Mỗi tối, mười phút trước khi ngủ: ghi việc đã bàn, chụp hoá đơn, gửi tin cập nhật về công ty.",
          "keys": [
            "mười phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wait until the end of the trip, and details are forgotten, receipts crumpled.",
          "sub": "Dồn đến cuối chuyến thì chi tiết đã quên, hoá đơn đã nhàu.",
          "keys": [
            "hoá đơn đã nhàu"
          ]
        }
      ],
      "ref": "p18"
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
            "at": "l2",
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
            "text": "⑤ Ngày 2 · Họp với Sam",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:day two"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l1:Sam",
            "caption": "Ngày 2 · phòng họp đối tác",
            "icon": "handshake"
          },
          {
            "id": "h-p",
            "t": "text",
            "text": "Bảng giá mới: hỏi ý kiến ngay",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l2:price list"
          },
          {
            "id": "h-u",
            "t": "text",
            "text": "Thảo: “Ừm… vâng”",
            "x": 3996,
            "y": 1340,
            "size": 54,
            "at": "l3:Um",
            "color": "coral"
          },
          {
            "id": "h-y",
            "t": "text",
            "text": "→ đối tác hiểu: đồng ý",
            "x": 3996,
            "y": 1430,
            "size": 50,
            "at": "l4:yes",
            "hl": [
              {
                "text": "đồng ý",
                "at": "l4:yes"
              }
            ]
          },
          {
            "id": "h-e",
            "t": "text",
            "text": "→ sếp gửi email đính chính",
            "x": 3996,
            "y": 1510,
            "size": 48,
            "at": "l4:correction",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: day two. Meet Sam, the supplier, sharp and friendly.",
          "sub": "Chặng năm: ngày hai. Đây là Sam, bên nhà cung cấp, sắc sảo mà thân thiện.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Here is our new price list. What do you think?",
          "sub": "Đây là bảng giá mới của chúng tôi. Chị thấy sao?",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Um... yes, I see.",
          "sub": "Dạ… vâng, tôi hiểu rồi.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thảo had no idea what prices were acceptable. Sam heard yes. Back home, a correction email.",
          "sub": "Thảo không biết công ty chấp nhận mức nào. Sam hiểu là đồng ý. Về nước, sếp phải gửi email đính chính.",
          "keys": [
            "email đính chính"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s16",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Tua lại: Thứ Hai, 9:15",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "hoa",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Coi chuyến đi chỉ là “đi làm quen”",
          "why": "Không biết mục tiêu và mình được quyết đến đâu, thì gặp câu hỏi khó chỉ biết ậm ừ.",
          "rule": "Hỏi rõ trước khi đi, đỡ đính chính khi về"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "It's just to get to know them, right?",
          "sub": "Chắc chỉ là đi làm quen thôi ạ?",
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
          "say": "Rewind to Monday. This time, ask.",
          "sub": "Tua lại thứ Hai. Lần này, hỏi.",
          "phase": "redo"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "What do you hope I bring back? How much can I decide, and what must I check with you?",
          "sub": "Chuyến này chị mong em mang về điều gì? Em được quyết đến đâu, việc gì phải hỏi lại công ty ạ?",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Good questions. Prices are mine to approve. Bring them back to me.",
          "sub": "Hỏi hay đấy. Giá thì chị duyệt, em cứ mang về cho chị.",
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
      "ref": "p2,p4"
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
            "id": "h-k",
            "t": "text",
            "text": "Hỏi rõ trước khi đi",
            "x": 3996,
            "y": 1610,
            "size": 62,
            "at": "l1:ask",
            "color": "accent",
            "hl": [
              {
                "text": "trước khi đi",
                "at": "l1:before you go"
              }
            ]
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "đỡ phải đính chính khi về",
            "x": 4036,
            "y": 1695,
            "size": 48,
            "at": "l1:corrections"
          },
          {
            "id": "h-n1",
            "t": "text",
            "text": "Ghi riêng: mục tiêu, trưởng đoàn,",
            "x": 3996,
            "y": 1770,
            "size": 38,
            "at": "l2:goal",
            "color": "muted"
          },
          {
            "id": "h-n2",
            "t": "text",
            "text": "ngân sách, người liên hệ",
            "x": 4036,
            "y": 1818,
            "size": 38,
            "at": "l2:budget",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Ask before you go, and you won't send corrections when you're back.",
          "sub": "Rút ra: Hỏi rõ trước khi đi, đỡ phải đính chính khi về.",
          "keys": [
            "Hỏi rõ trước khi đi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One note: the goal, who leads, the budget and rules, the partner's contact.",
          "sub": "Ghi một ghi chú riêng: mục tiêu, người đi cùng, trưởng đoàn, ngân sách và quy định chi phí, người liên hệ bên đối tác.",
          "keys": [
            "một ghi chú riêng"
          ]
        }
      ],
      "ref": "p3,p5"
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
            "text": "⑥ Về nước · Chốt việc",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:sixth stop"
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
                  "pose": "explain"
                }
              ],
              "props": [
                "envelope-with-arrow",
                "receipt",
                "memo"
              ]
            },
            "at": "l1:home",
            "caption": "Tuần đầu sau khi về",
            "icon": "envelope-with-arrow"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1270,
            "w": 44,
            "h": 44,
            "at": "l2:thank",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1252,
            "size": 56,
            "at": "l2:thank+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Email cảm ơn + tóm tắt",
            "x": 6028,
            "y": 1262,
            "size": 46,
            "at": "l2:thank+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1360,
            "w": 44,
            "h": 44,
            "at": "l2:report",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1342,
            "size": 56,
            "at": "l2:report+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Báo cáo ngắn cho sếp",
            "x": 6028,
            "y": 1352,
            "size": 46,
            "at": "l2:report+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1450,
            "w": 44,
            "h": 44,
            "at": "l2:promise",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1432,
            "size": 56,
            "at": "l2:promise+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Theo dõi từng việc đã hứa",
            "x": 6028,
            "y": 1442,
            "size": 46,
            "at": "l2:promise+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1540,
            "w": 44,
            "h": 44,
            "at": "l3:expense",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1522,
            "size": 56,
            "at": "l3:expense+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Nộp hồ sơ thanh toán",
            "x": 6028,
            "y": 1532,
            "size": 46,
            "at": "l3:expense+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: back home. A trip is only done when what was discussed gets done.",
          "sub": "Chặng sáu: về nước. Chuyến đi chỉ thật sự xong khi những gì đã bàn được làm tiếp.",
          "keys": [
            "chỉ thật sự xong"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "This week: a thank you email with a summary for Sam, a short report, and I track every promise.",
          "sub": "Tuần này: email cảm ơn kèm tóm tắt cho Sam, báo cáo ngắn cho sếp, và theo dõi từng việc đã hứa.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the expense claim, while receipts are complete and memory fresh. Wait, and you may pay yourself.",
          "sub": "Và hồ sơ thanh toán, khi hoá đơn còn đủ, trí nhớ còn mới. Để lâu, dễ phải tự chịu khoản đã ứng.",
          "keys": [
            "trí nhớ còn mới"
          ]
        }
      ],
      "ref": "p21,p22"
    },
    {
      "id": "s19",
      "module": "BRK-04",
      "data": {
        "title": "Hoá đơn sau chuyến đi",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Cuối tháng sau mới nộp: hoá đơn mờ, tự bù",
        "right": "Chụp ngay khi nhận, nộp trong tuần đầu",
        "wrongIllus": "receipt",
        "rightIllus": "camera-with-flash"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Option A: next month. Faded receipts, you pay.",
          "sub": "Cách A: cuối tháng sau mới nộp. Hoá đơn mờ, tự bù.",
          "keys": [
            "tự bù"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B: snap receipts, submit week one.",
          "sub": "Cách B: chụp ngay khi nhận, nộp trong tuần đầu.",
          "keys": [
            "chụp ngay khi nhận"
          ]
        }
      ],
      "ref": "p23"
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
            "id": "i-ph",
            "t": "text",
            "text": "Giấy có mờ, ảnh vẫn rõ",
            "x": 5964,
            "y": 1650,
            "size": 54,
            "at": "l1:photos",
            "hl": [
              {
                "text": "ảnh vẫn rõ",
                "at": "l1:clear"
              }
            ]
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Chốt việc khi còn nhớ",
            "x": 5964,
            "y": 1750,
            "size": 60,
            "at": "l2:wrap",
            "color": "accent",
            "hl": [
              {
                "text": "khi còn nhớ",
                "at": "l2:remember"
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
          "say": "Thermal paper fades like an old lottery ticket, but photos stay clear. Approved, no drama.",
          "sub": "Giấy in nhiệt có mờ như tờ vé số cũ, ảnh vẫn rõ. Hồ sơ duyệt gọn, không kịch tính.",
          "keys": [
            "ảnh vẫn rõ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Once home, wrap things up while you still remember.",
          "sub": "Rút ra: Về đến nơi, chốt việc ngay khi còn nhớ.",
          "keys": [
            "chốt việc ngay khi còn nhớ"
          ]
        }
      ],
      "ref": "p23,p24"
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
            "at": "l6",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Hai tuần sau · 9:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold"
                }
              ],
              "props": [
                "notebook",
                "spiral-calendar"
              ]
            },
            "at": "l1:Monday",
            "caption": "Thứ Hai tuần sau · 9:00",
            "icon": "office-building"
          },
          {
            "id": "j-m",
            "t": "text",
            "text": "Sếp cử người đi lần đầu:",
            "x": 7932,
            "y": 1250,
            "size": 46,
            "at": "l2:manager",
            "color": "muted"
          },
          {
            "id": "j-m1",
            "t": "text",
            "text": "mục tiêu · quyền quyết định",
            "x": 7952,
            "y": 1330,
            "size": 48,
            "at": "l3:goal"
          },
          {
            "id": "j-m2",
            "t": "text",
            "text": "quy định chi phí · người trực",
            "x": 7952,
            "y": 1410,
            "size": 48,
            "at": "l4:expense"
          },
          {
            "id": "j-cd",
            "t": "text",
            "text": "“Đi một ngày đàng,",
            "x": 7932,
            "y": 1560,
            "size": 58,
            "at": "l6:road"
          },
          {
            "id": "j-cd2",
            "t": "text",
            "text": "mang về… một sổ tay”",
            "x": 7972,
            "y": 1650,
            "size": 58,
            "at": "l6:notebook",
            "color": "accent",
            "hl": [
              {
                "text": "một sổ tay",
                "at": "l6:notebook"
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
          "say": "Next Monday, nine a.m. Same desk.",
          "sub": "Thứ Hai tuần sau, chín giờ sáng. Vẫn bàn ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Now Dũng is chosen, and Cô Hoa gives the short talk every manager should.",
          "sub": "Lần này Dũng được cử, và Cô Hoa nói một buổi ngắn mà sếp nào cũng nên nói.",
          "keys": [
            "một buổi ngắn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Dũng, here is the goal, and here is what you can decide yourself.",
          "sub": "Dũng, đây là mục tiêu, và đây là việc em được tự quyết.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "These are the expense rules, and this is who to call when it's urgent.",
          "sub": "Đây là quy định chi phí, và đây là người trực khi có việc gấp.",
          "pose": "give"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "And my notebook. Three lines every evening.",
          "sub": "Còn đây là sổ của em. Mỗi tối ba dòng.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Travel one day on the road, bring home a basket of wisdom. Thảo's basket? A notebook.",
          "sub": "“Đi một ngày đàng, học một sàng khôn.” Sàng khôn của Thảo là... một cuốn sổ.",
          "keys": [
            "một cuốn sổ"
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
      "ref": "p25,p19,p20"
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
            "at": "l1:ask",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l2:documents",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "G",
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
            "x": 4696,
            "y": 1610,
            "at": "l1:ask"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6664,
            "y": 410,
            "at": "l2:documents"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2688,
            "y": 1750,
            "at": "l3:written"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "i-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:home"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Quy định thị thực, hải quan, chi phí tuỳ từng nước và từng công ty; luôn kiểm tra nguồn chính thức.",
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
          "say": "So: ask before you go, and you won't correct things later.",
          "sub": "Tóm lại: hỏi rõ trước khi đi, đỡ đính chính khi về.",
          "keys": [
            "hỏi rõ trước khi đi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Documents first, never last minute.",
          "sub": "Giấy tờ lo đầu tiên, đừng để phút cuối.",
          "keys": [
            "Giấy tờ lo đầu tiên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Today's work, written tonight. And back home, close it while you remember.",
          "sub": "Việc hôm nay, ghi ngay tối nay. Về đến nơi, chốt việc khi còn nhớ.",
          "keys": [
            "ghi ngay tối nay"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p5,p10,p20,p24"
    },
    {
      "id": "s34",
      "module": "QUIZ-01",
      "ref": "questions[0]",
      "data": {
        "q": "You have just been chosen for a business trip abroad, what should you do first?",
        "options": [
          "Start packing your suitcase, because details about the meetings will come later anyway",
          "Book the cheapest flight at once, before prices go up and the boss changes plans",
          "Ask your manager what the trip should achieve and what you can decide yourself"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "airplane-departure",
        "why": "Biết mục tiêu chuyến đi thì mới biết cần chuẩn bị gì và khi về báo cáo gì."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You have just been chosen for a business trip abroad, what should you do first?",
          "sub": "Bạn vừa được cử đi công tác nước ngoài, việc đầu tiên nên làm là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Ask your manager what the trip should achieve and what you can decide yourself.",
          "sub": "Hỏi sếp chuyến đi cần đạt gì, bạn được tự quyết gì."
        }
      ],
      "beats": {
        "after": 500
      }
    },
    {
      "id": "s35",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: mở một ghi chú mang tên chuyến đi",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ.",
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
