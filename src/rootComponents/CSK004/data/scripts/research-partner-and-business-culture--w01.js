// Kịch bản video W lần 3 (#110) — "Tìm hiểu đối tác và văn hoá làm việc của nước họ" · chuỗi "Lần đầu đi công tác nước ngoài"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý cho 40 câu hỏi của bài.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "research-partner-and-business-culture--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "first-business-trip-abroad",
    "slug": "research-partner-and-business-culture",
    "door": "ky-nang",
    "level": "B1",
    "title": "Tìm hiểu đối tác và văn hoá làm việc của nước họ",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng 10 ô. Mở giữa chuyện: buổi gặp hỏng của Thảo (p4: giới thiệu sản phẩm Sam từng từ chối vì giao trễ) → tua lại một tuần: Thứ Hai hỏi Cô Hoa (p1–p3, p27), Thứ Ba công ty họ (p6–p8), Thứ Tư ai là ai (p9–p11) → “Khoan đã!” buổi họp năm ngoái của Dũng (p12) → sơ đồ bàn họp (p13) → Thứ Năm văn hoá (p14–p17) → Thứ Sáu lịch lễ + một trang ghi chú (p18, p19, p25, p26) → bữa trưa với Sam (p20–p24) → khép vòng ở đúng phòng họp, Thảo chào mọi người và hỏi câu mẫu p8. Nhân vật (mạch chuỗi w145/_series): Thảo (chính, p4 là chính Thảo trong bài; “bạn” ở p23), Dũng (“bạn” ở p12), Cô Hoa (đồng nghiệp/quản lý p2, p26, p27), Sam (đối tác; chị trưởng phòng trẻ người quyết định ở p12). Uyên (p18) chỉ kể bằng chữ. Tục ngữ mở/khép: “Biết người biết ta, trăm trận trăm thắng” → “chưa biết thì hỏi”. Cảnh ngắt nhịp: BRK-02 (rút ra p5), BRK-07 (rehook cách nói “không” p16), BRK-04 (Cách A/B bữa trưa p23). Nguồn nhỏ trên bảng: Erin Meyer, HBR 2014. Bản cũ (W lần 3, #110): w145/bak/research-partner-and-business-culture--w01.js.",
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
            "text": "“Biết người biết ta,",
            "x": 60,
            "y": 110,
            "size": 92,
            "at": "l1:know",
            "hl": [
              {
                "text": "Biết người",
                "at": "l1:know them"
              }
            ]
          },
          {
            "id": "a-cd2",
            "t": "text",
            "text": "trăm trận trăm thắng”",
            "x": 160,
            "y": 235,
            "size": 92,
            "at": "l1:hundred",
            "color": "accent"
          },
          {
            "id": "a-web",
            "t": "text",
            "text": "Đọc web = biết người?",
            "x": 60,
            "y": 410,
            "size": 58,
            "at": "l2:website",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "An old saying: know them and know yourself, and you win a hundred battles out of a hundred.",
          "sub": "Ông bà có câu: “Biết người biết ta, trăm trận trăm thắng.”",
          "keys": [
            "Biết người biết ta"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But how well can a website help you know someone?",
          "sub": "Nhưng đọc một trang web thì “biết người” được bao nhiêu?",
          "keys": [
            "biết người"
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
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
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
                "page-facing-up"
              ]
            },
            "at": "l1",
            "caption": "Buổi gặp đầu tiên · phòng họp đối tác",
            "icon": "handshake"
          },
          {
            "id": "a-webx",
            "t": "strike",
            "over": "a-web",
            "at": "l4:declined"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Đọc kỹ web ✓ · hỏi đồng nghiệp ✗",
            "x": 60,
            "y": 520,
            "size": 44,
            "at": "l5:never",
            "color": "coral"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "⏪ tua lại một tuần",
            "x": 60,
            "y": 620,
            "size": 50,
            "at": "l5:rewind",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo. Purple blazer, first meeting abroad, and she read the partner's website very carefully.",
          "sub": "Đây là Thảo. Blazer tím, buổi gặp đầu tiên ở nước ngoài, trang web đối tác đọc rất kỹ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Sam, from the partner side, polite as a hotel lobby.",
          "sub": "Còn đây là Sam, bên đối tác, lịch sự như sảnh khách sạn.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Let me introduce our new product. I think it's perfect for you!",
          "sub": "Để tôi giới thiệu sản phẩm mới. Tôi nghĩ nó rất hợp với chị!",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Actually, we tested it last year, and declined. Late deliveries.",
          "sub": "Thật ra năm ngoái chúng tôi đã thử rồi, và từ chối. Giao hàng trễ.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Website read, colleague never asked. The rest of the meeting? Deliveries. Rewind one week.",
          "sub": "Đọc kỹ web, nhưng không hỏi đồng nghiệp. Phần còn lại của buổi gặp? Toàn chuyện giao hàng. Tua lại một tuần nào.",
          "keys": [
            "Tua lại một tuần"
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
      "ref": "p4"
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
            "text": "Tìm hiểu đối tác thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:research",
            "hl": [
              {
                "text": "thế nào?",
                "at": "l1:culture"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Học thuộc cả một nền văn hoá",
            "x": 2028,
            "y": 150,
            "size": 50,
            "at": "l1:memorising",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:face"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "1. Hỏi người từng làm với họ",
            "x": 2028,
            "y": 240,
            "size": 48,
            "at": "l3:Ask"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "2. Đọc thông tin chính thức",
            "x": 2028,
            "y": 315,
            "size": 48,
            "at": "l3:official",
            "hl": [
              {
                "text": "chính thức",
                "at": "l3:official"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "3. Nắm vài thói quen làm việc",
            "x": 2028,
            "y": 390,
            "size": 48,
            "at": "l4:habits"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "4. Chưa chắc thì hỏi",
            "x": 2028,
            "y": 465,
            "size": 52,
            "at": "l4:boldly",
            "color": "accent",
            "hl": [
              {
                "text": "thì hỏi",
                "at": "l4:ask"
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
          "say": "So how do you research a partner and their work culture, without memorising a whole country?",
          "sub": "Vậy tìm hiểu đối tác và văn hoá làm việc của họ thế nào, mà không phải học thuộc cả một nền văn hoá?",
          "keys": [
            "không phải học thuộc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The real fear is a slip that makes your company lose face.",
          "sub": "Nỗi lo thật là lỡ thất lễ, làm mất mặt công ty.",
          "keys": [
            "mất mặt công ty"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Four moves are enough. Ask people who've worked with them. Read official information.",
          "sub": "Chỉ cần bốn việc. Hỏi người từng làm việc với họ. Đọc kỹ thông tin chính thức.",
          "keys": [
            "bốn việc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Learn a few key work habits. And when unsure, boldly ask.",
          "sub": "Nắm vài thói quen làm việc chính. Và mạnh dạn hỏi khi chưa chắc.",
          "keys": [
            "mạnh dạn hỏi"
          ]
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
            "y": 590,
            "w": 215,
            "h": 90,
            "at": "l1:One+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 590,
            "w": 215,
            "h": 90,
            "at": "l1:One+680",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 590,
            "w": 215,
            "h": 90,
            "at": "l1:One+960",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 590,
            "w": 215,
            "h": 90,
            "at": "l1:One+1240",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 590,
            "w": 215,
            "h": 90,
            "at": "l1:One+1520",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 590,
            "w": 215,
            "h": 90,
            "at": "l1:One+1800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 590,
            "w": 215,
            "h": 90,
            "at": "l1:One+2080",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Thứ Hai",
            "x": 2044,
            "y": 608,
            "size": 40,
            "at": "l1:One+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Thứ Ba",
            "x": 2279,
            "y": 608,
            "size": 40,
            "at": "l1:One+800"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Thứ Tư",
            "x": 2514,
            "y": 608,
            "size": 40,
            "at": "l1:One+1080"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Thứ Năm",
            "x": 2749,
            "y": 608,
            "size": 40,
            "at": "l1:One+1360"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Thứ Sáu",
            "x": 2984,
            "y": 608,
            "size": 40,
            "at": "l1:One+1640"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Bữa trưa",
            "x": 3219,
            "y": 608,
            "size": 40,
            "at": "l1:One+1920"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Buổi họp",
            "x": 3454,
            "y": 608,
            "size": 40,
            "at": "l1:One+2200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One week of homework, then lunch and the meeting. Seven stops.",
          "sub": "Một tuần làm bài tập, rồi bữa trưa và buổi họp. Bảy chặng.",
          "keys": [
            "Bảy chặng"
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
            "at": "l4",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai · Hỏi người trong nhà",
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
                  "side": "left",
                  "pose": "think"
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
                "envelope",
                "page-facing-up"
              ]
            },
            "at": "l3:Cô Hoa",
            "caption": "Thứ Hai · phòng Cô Hoa",
            "icon": "speech-balloon"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Đồng nghiệp · email cũ · hợp đồng",
            "x": 3996,
            "y": 160,
            "size": 42,
            "at": "l2:Colleagues",
            "hl": [
              {
                "text": "Đồng nghiệp",
                "at": "l2:Colleagues"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "→ đã đến đâu, việc gì còn dở",
            "x": 4026,
            "y": 230,
            "size": 42,
            "at": "l2:unfinished",
            "color": "muted"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Hài lòng gì? Ngại gì?",
            "x": 3996,
            "y": 320,
            "size": 50,
            "at": "l4:pleased"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Chuyện cũ nào cần tránh?",
            "x": 3996,
            "y": 400,
            "size": 50,
            "at": "l4:old story",
            "color": "coral"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "SP mới: họ đã từ chối!",
            "x": 3996,
            "y": 490,
            "size": 54,
            "at": "l5:declined",
            "color": "accent",
            "hl": [
              {
                "text": "đã từ chối!",
                "at": "l5:declined"
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
          "say": "Stop one: Monday. The best source sits inside your own company.",
          "sub": "Chặng một: thứ Hai. Nguồn quý nhất nằm ngay trong công ty mình.",
          "keys": [
            "Nguồn quý nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Colleagues who've met them, old emails, contracts, minutes: how far things went, what's unfinished.",
          "sub": "Đồng nghiệp từng gặp họ, email cũ, hợp đồng, biên bản họp: hai bên đã đi đến đâu, việc gì còn dở."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So Thảo visits Cô Hoa, her manager, steady as a rice cooker.",
          "sub": "Thế là Thảo tìm Cô Hoa, trưởng phòng, vững như nồi cơm điện."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Last time, what pleased them, what bothered them? Any old story I should avoid?",
          "sub": "Lần trước điều gì làm họ hài lòng, điều gì làm họ ngại? Có chuyện cũ nào em nên tránh nhắc không ạ?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "One. Last year they tried our new product and declined it. Late deliveries.",
          "sub": "Có một chuyện. Năm ngoái họ thử sản phẩm mới của mình rồi từ chối, vì giao hàng trễ.",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "One sentence, and the whole awkward meeting disappears.",
          "sub": "Một câu nhắc, cả buổi gặp khó xử biến mất.",
          "keys": [
            "Một câu nhắc"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p1,p2,p4"
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
            "id": "c-7",
            "t": "text",
            "text": "Chưa ai biết? Hỏi người cùng nước",
            "x": 3996,
            "y": 620,
            "size": 44,
            "at": "l2:Nobody"
          },
          {
            "id": "c-8",
            "t": "text",
            "text": "Sếp: kể cả chuyện chưa vui",
            "x": 4816,
            "y": 690,
            "size": 46,
            "at": "l3:managers",
            "color": "accent",
            "hl": [
              {
                "text": "chuyện chưa vui",
                "at": "l3:unhappy"
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
          "say": "Nobody at your company knows them? Ask someone who's worked with firms from that country.",
          "sub": "Công ty chưa ai làm với đối tác này? Hỏi người từng làm với các công ty cùng nước: không giống hệt, nhưng biết nên chú ý gì."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And managers: share what you know, even the unhappy stories.",
          "sub": "Còn sếp: hãy kể cho nhân viên những gì mình biết, kể cả chuyện chưa vui.",
          "keys": [
            "chuyện chưa vui"
          ]
        }
      ],
      "ref": "p2,p3,p27"
    },
    {
      "id": "s06",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Đọc web để biết, hỏi người để hiểu",
        "hl": "hỏi người để hiểu",
        "sub": "Hỏi đồng nghiệp để hiểu họ"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Read the website to know them.",
          "sub": "Đọc trang web để biết họ.",
          "keys": [
            "để biết họ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask colleagues to understand them.",
          "sub": "Hỏi đồng nghiệp để hiểu họ.",
          "keys": [
            "để hiểu họ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
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
            "text": "② Thứ Ba · Công ty của họ",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "globe-with-meridians",
                "open-file-folder"
              ]
            },
            "at": "l1:Tuesday",
            "caption": "Thứ Ba · quán nước sau giờ làm",
            "icon": "open-file-folder"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 170,
            "w": 40,
            "h": 40,
            "at": "l2:sell",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 152,
            "size": 52,
            "at": "l2:sell+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Làm gì, bán cho ai, mạnh đâu",
            "x": 6024,
            "y": 162,
            "size": 40,
            "at": "l2:sell+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 242,
            "w": 40,
            "h": 40,
            "at": "l2:companies",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 224,
            "size": 52,
            "at": "l2:companies+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Quan hệ hai bên đã đến đâu",
            "x": 6024,
            "y": 234,
            "size": 40,
            "at": "l2:companies+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 314,
            "w": 40,
            "h": 40,
            "at": "l3:news",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 296,
            "size": 52,
            "at": "l3:news+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Tin mới trên trang của họ",
            "x": 6024,
            "y": 306,
            "size": 40,
            "at": "l3:news+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 386,
            "w": 40,
            "h": 40,
            "at": "l3:need",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 368,
            "size": 52,
            "at": "l3:need+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Họ cần gì, mình cần gì",
            "x": 6024,
            "y": 378,
            "size": 40,
            "at": "l3:need+200"
          },
          {
            "id": "d-ok",
            "t": "text",
            "text": "Nguồn chính thức > tin đồn",
            "x": 5964,
            "y": 480,
            "size": 54,
            "at": "l5:wrong",
            "color": "accent",
            "hl": [
              {
                "text": "> tin đồn",
                "at": "l5:meeting"
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
          "say": "Stop two: Tuesday, the partner company itself.",
          "sub": "Chặng hai: thứ Ba, tìm hiểu chính công ty đối tác."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What they do, who they sell to, their strengths, and how far our two companies have come.",
          "sub": "Họ làm gì, bán cho ai, mạnh ở đâu, quan hệ hai công ty đã đến đâu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Their recent news. What they need from us, what we need from them.",
          "sub": "Tin mới gần đây của họ. Họ cần gì ở mình, mình cần gì ở họ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Their own website, press releases, the company profile they sent. Not online rumours.",
          "sub": "Trang web công ty, thông cáo họ tự đăng, hồ sơ năng lực họ gửi. Không phải tin đồn trên mạng.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rumours can be old or wrong. Say one in a meeting, and the air turns awkward.",
          "sub": "Tin đồn có thể cũ hoặc sai, đem ra nói trong buổi gặp rất dễ khó xử.",
          "keys": [
            "rất dễ khó xử"
          ]
        }
      ],
      "ref": "p6,p7"
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
            "at": "l2",
            "fit": [
              "d-q"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-no",
            "t": "text",
            "text": "Không phải: bài kiểm tra về họ",
            "x": 5964,
            "y": 580,
            "size": 44,
            "at": "l1:quiz",
            "color": "muted"
          },
          {
            "id": "d-nox",
            "t": "strike",
            "over": "d-no",
            "at": "l1:questions"
          },
          {
            "id": "d-q",
            "t": "text",
            "text": "Mà là: câu hỏi đúng",
            "x": 5964,
            "y": 670,
            "size": 60,
            "at": "l1:right",
            "color": "accent",
            "hl": [
              {
                "text": "câu hỏi đúng",
                "at": "l1:right questions"
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
          "say": "But don't turn the meeting into a quiz about them. Research is for asking the right questions.",
          "sub": "Nhưng đừng biến buổi gặp thành bài kiểm tra kiến thức về họ. Tìm hiểu là để đặt câu hỏi đúng.",
          "keys": [
            "đặt câu hỏi đúng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Like: I saw you opened a new market. How does that affect this year's orders?",
          "sub": "Ví dụ: “Tôi thấy công ty anh chị vừa mở thêm thị trường mới, việc đó ảnh hưởng thế nào đến đơn hàng năm nay?”"
        }
      ],
      "ref": "p8"
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
            "text": "③ Thứ Tư · Ai là ai?",
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
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "stand"
                }
              ]
            },
            "at": "l1:Wednesday",
            "caption": "Thứ Tư · gọi video với Sam",
            "icon": "video-camera"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Danh sách dự họp + chức danh",
            "x": 7932,
            "y": 160,
            "size": 46,
            "at": "l1:list",
            "hl": [
              {
                "text": "chức danh",
                "at": "l1:titles"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Ai quyết · ai lo kỹ thuật",
            "x": 7932,
            "y": 240,
            "size": 46,
            "at": "l2:decides"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "· ai liên lạc hằng ngày",
            "x": 7932,
            "y": 310,
            "size": 46,
            "at": "l2:daily",
            "color": "muted"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Tên: cách viết, cách đọc",
            "x": 7932,
            "y": 400,
            "size": 50,
            "at": "l4:spelling"
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "Thứ tự họ – tên khác mình",
            "x": 7932,
            "y": 480,
            "size": 46,
            "at": "l4:order",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three: Wednesday. Who's who? Thảo asks for the attendee list with job titles.",
          "sub": "Chặng ba: thứ Tư. Ai là ai? Thảo xin danh sách người dự họp kèm chức danh.",
          "keys": [
            "danh sách người dự họp kèm chức danh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Who decides, who's technical, who's the daily contact. Then you know what to say to whom.",
          "sub": "Ai quyết định, ai lo kỹ thuật, ai giữ liên lạc hằng ngày: biết rồi mới biết nói gì với ai."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "One more thing. How should I address your director, to get it right?",
          "sub": "Thêm một điều: tôi nên gọi giám đốc bên chị thế nào cho đúng?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Write each name right: spelling and pronunciation. In many countries, name order differs from ours.",
          "sub": "Ghi đúng tên từng người: cách viết, cách đọc. Ở nhiều nước, thứ tự họ và tên khác Việt Nam.",
          "keys": [
            "thứ tự họ và tên"
          ]
        }
      ],
      "ref": "p9,p10"
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
          }
        ],
        "items": [
          {
            "id": "e-6",
            "t": "text",
            "text": "Quyết ngay / mang về bàn",
            "x": 7932,
            "y": 590,
            "size": 48,
            "at": "l1:decide"
          },
          {
            "id": "e-7",
            "t": "text",
            "text": "Chưa trả lời ≠ từ chối",
            "x": 7932,
            "y": 680,
            "size": 60,
            "at": "l2:answer",
            "color": "accent",
            "hl": [
              {
                "text": "≠ từ chối",
                "at": "l2:no"
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
          "say": "Some places decide right in the meeting. Elsewhere, people take it back to their boss or team.",
          "sub": "Có nơi quyết ngay trong buổi họp; có nơi người ngồi họp phải mang về bàn với cấp trên hay cả nhóm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So no answer today isn't necessarily a no.",
          "sub": "Nên đối tác chưa trả lời ngay chưa chắc là từ chối.",
          "keys": [
            "chưa chắc là từ chối"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Now meet Dũng, her desk neighbour, tall and very sure, at a meeting last year.",
          "sub": "Giờ là Dũng, bàn bên Thảo, cao, rất tự tin, ở một buổi họp năm ngoái.",
          "keys": [
            "Dũng"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "Năm ngoái · buổi họp của Dũng",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "sam",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đoán người lớn tuổi nhất là sếp",
          "why": "Người quyết định có thể ngồi ngay bên cạnh; bỏ qua họ, email sau đó sẽ dè dặt.",
          "rule": "Xin trước danh sách người dự họp kèm chức danh"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "The oldest man in the middle must be the boss. I'll talk only to him.",
          "sub": "Ông lớn tuổi ngồi giữa chắc là sếp. Mình chỉ nói với ông ấy.",
          "face": "happy",
          "pose": "think",
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
          "say": "The decision maker may be the young manager beside him. Friendly meeting, cautious email after.",
          "sub": "Người quyết định có thể là chị trưởng phòng trẻ bên cạnh. Họp vui vẻ, nhưng email sau đó dè dặt.",
          "keys": [
            "email sau đó dè dặt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Good morning, everyone. Thank you all for coming.",
          "sub": "Chào buổi sáng mọi người. Cảm ơn tất cả đã đến.",
          "phase": "redo",
          "face": "happy",
          "pose": "wave"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "fit": "E",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "F",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "Bàn họp · Ai quyết định?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:seat"
          },
          {
            "id": "f-tab",
            "t": "box",
            "x": 360,
            "y": 1390,
            "w": 1000,
            "h": 130,
            "at": "l1:table+300",
            "stroke": 5
          },
          {
            "id": "f-tl",
            "t": "text",
            "text": "bàn họp",
            "x": 760,
            "y": 1425,
            "size": 48,
            "at": "l1:table+600",
            "color": "muted"
          },
          {
            "id": "f-s1",
            "t": "box",
            "x": 560,
            "y": 1250,
            "w": 260,
            "h": 100,
            "at": "l2:older",
            "stroke": 4
          },
          {
            "id": "f-s1t",
            "t": "text",
            "text": "Ông lớn tuổi",
            "x": 580,
            "y": 1270,
            "size": 40,
            "at": "l2:older+200"
          },
          {
            "id": "f-s1r",
            "t": "text",
            "text": "= chuyên gia kỹ thuật",
            "x": 420,
            "y": 1560,
            "size": 44,
            "at": "l2:expert",
            "color": "muted"
          },
          {
            "id": "f-s2",
            "t": "box",
            "x": 900,
            "y": 1250,
            "w": 260,
            "h": 100,
            "at": "l2:young",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "f-s2t",
            "t": "text",
            "text": "Chị trưởng phòng",
            "x": 912,
            "y": 1272,
            "size": 36,
            "at": "l2:young+200"
          },
          {
            "id": "f-s2r",
            "t": "text",
            "text": "= người quyết định",
            "x": 900,
            "y": 1630,
            "size": 50,
            "at": "l2:decides",
            "color": "coral",
            "hl": [
              {
                "text": "người quyết định",
                "at": "l2:decides"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Đừng đoán, hỏi trước",
            "x": 60,
            "y": 1760,
            "size": 62,
            "at": "l3:guess",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi trước",
                "at": "l3:ask ahead"
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
          "say": "At the table, the middle seat doesn't tell you who decides.",
          "sub": "Ở bàn họp, ngồi giữa không nói lên ai là người quyết định."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Here the older man is the technical expert. The young manager beside him decides.",
          "sub": "Ở đây, ông lớn tuổi là chuyên gia kỹ thuật. Chị trưởng phòng trẻ bên cạnh mới là người quyết định."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lesson: don't guess who's the boss. Ask ahead, and greet everyone equally.",
          "sub": "Rút ra: Đừng đoán ai là sếp, hãy hỏi trước và tôn trọng mọi người như nhau.",
          "keys": [
            "Đừng đoán ai là sếp"
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
            "fit": "F",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "G",
            "ms": 900
          },
          {
            "at": "l4",
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
            "text": "④ Thứ Năm · Văn hoá làm việc",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
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
                  "pose": "think"
                }
              ],
              "props": [
                "open-book",
                "globe-with-meridians"
              ]
            },
            "at": "l1:Thursday",
            "caption": "Thứ Năm · tối ở nhà",
            "icon": "open-book"
          },
          {
            "id": "g-0",
            "t": "text",
            "text": "Danh sách nên / không nên",
            "x": 2028,
            "y": 1240,
            "size": 44,
            "at": "l1:lists",
            "color": "muted"
          },
          {
            "id": "g-0x",
            "t": "strike",
            "over": "g-0",
            "at": "l1:don'ts"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Đúng giờ đến đâu?",
            "x": 2028,
            "y": 1315,
            "size": 48,
            "at": "l2:punctuality"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Nói thẳng hay nói vòng?",
            "x": 2028,
            "y": 1385,
            "size": 48,
            "at": "l2:Direct",
            "hl": [
              {
                "text": "nói vòng?",
                "at": "l2:indirect"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Xưng hô: trang trọng / thân?",
            "x": 2028,
            "y": 1455,
            "size": 46,
            "at": "l3:Formal"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Quyết nhanh hay chậm?",
            "x": 2028,
            "y": 1525,
            "size": 48,
            "at": "l3:Fast"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Giờ làm · lễ · chào · kiêng kỵ",
            "x": 2028,
            "y": 1615,
            "size": 42,
            "at": "l4:Working",
            "color": "coral"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Tham khảo: Erin Meyer, HBR 2014 — 8 thang đo văn hoá làm việc",
            "x": 2848,
            "y": 1790,
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
          "say": "Stop four: Thursday, work culture. Skip the long lists of dos and don'ts.",
          "sub": "Chặng bốn: thứ Năm, văn hoá làm việc. Đừng học thuộc danh sách “nên và không nên”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Answer a few key questions. How much do they value punctuality? Direct or indirect?",
          "sub": "Hãy trả lời vài câu hỏi chính: họ coi trọng đúng giờ đến đâu? Nói thẳng hay nói vòng?",
          "keys": [
            "vài câu hỏi chính"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Formal or casual names? Fast or slow decisions?",
          "sub": "Xưng hô trang trọng hay thân mật? Quyết định nhanh hay chậm?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Working hours, holidays while I'm there, greetings, food and religious taboos, topics to avoid.",
          "sub": "Giờ làm, ngày lễ trong thời gian mình đến, cách chào, kiêng kỵ ăn uống và tôn giáo, chủ đề nên tránh.",
          "face": "thinking"
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "“Để chúng tôi xem lại” là có hay không?",
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
          "say": "When they say we'll look into it, is that yes or no?",
          "sub": "Khi họ nói “để chúng tôi xem lại”, là có hay không?",
          "keys": [
            "có hay không"
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
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-n1",
            "t": "text",
            "text": "“Không đồng ý” · “xem lại” · “hơi khó”",
            "x": 2028,
            "y": 1690,
            "size": 40,
            "at": "l1:disagree",
            "hl": [
              {
                "text": "“hơi khó”",
                "at": "l1:difficult"
              }
            ]
          },
          {
            "id": "g-n2",
            "t": "text",
            "text": "Đừng vội mừng, đừng phật lòng",
            "x": 2028,
            "y": 1760,
            "size": 46,
            "at": "l2:celebrate",
            "color": "accent"
          },
          {
            "id": "g-n3",
            "t": "text",
            "text": "Mạng xã hội: phóng đại",
            "x": 2028,
            "y": 1820,
            "size": 36,
            "at": "l3:Social",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Saying no differs. Some say we disagree. Others: we'll look into it, or it's a bit difficult.",
          "sub": "Cách nói “không” mỗi nơi một khác: có nơi nói thẳng “không đồng ý”, có nơi chỉ nói “để xem lại”, “việc này hơi khó”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So don't celebrate a vague answer, and don't be hurt by a direct no.",
          "sub": "Đừng vội mừng khi nghe câu lửng lơ, cũng đừng phật lòng khi bị từ chối thẳng.",
          "keys": [
            "Đừng vội mừng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Trust trade agencies, chambers of commerce, business guides, people who lived there. Social media exaggerates.",
          "sub": "Tin cơ quan xúc tiến thương mại, phòng thương mại, sách kinh doanh, người từng sống ở đó. Mạng xã hội hay phóng đại cho vui.",
          "keys": [
            "phóng đại cho vui"
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
            "text": "⑤ Thứ Sáu · Lịch lễ của họ",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
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
                  "side": "center",
                  "pose": "hold"
                }
              ],
              "props": [
                "spiral-calendar",
                "memo"
              ]
            },
            "at": "l1:Friday",
            "caption": "Thứ Sáu · trước khi chốt vé",
            "icon": "spiral-calendar"
          },
          {
            "id": "h-u",
            "t": "text",
            "text": "Chị Uyên: họp đúng kỳ nghỉ lớn",
            "x": 3996,
            "y": 1250,
            "size": 44,
            "at": "l3:Uyên",
            "color": "coral"
          },
          {
            "id": "h-u2",
            "t": "text",
            "text": "→ 1 nhân viên trẻ dự",
            "x": 4026,
            "y": 1325,
            "size": 44,
            "at": "l4:junior"
          },
          {
            "id": "h-u3",
            "t": "text",
            "text": "→ mất gần nửa giá trị",
            "x": 4026,
            "y": 1395,
            "size": 44,
            "at": "l4:Half",
            "color": "muted"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Xem lịch lễ trước, chốt vé sau",
            "x": 3996,
            "y": 1490,
            "size": 50,
            "at": "l5:holidays",
            "color": "accent",
            "hl": [
              {
                "text": "lịch lễ",
                "at": "l5:holidays"
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
          "say": "Stop five: Friday. Before the ticket is final, Thảo checks one thing.",
          "sub": "Chặng năm: thứ Sáu. Trước khi chốt vé, Thảo kiểm tra một điều."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Their public holidays. Any big one that week?",
          "sub": "Lịch nghỉ lễ của họ. Tuần đó có kỳ nghỉ lớn nào không?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A colleague, Uyên, once booked a meeting right in their big holiday.",
          "sub": "Chị Uyên, đồng nghiệp, từng đặt lịch họp đúng vào kỳ nghỉ lễ lớn của nước đối tác."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Only a junior came. Every key answer: after the holiday. Half the trip, wasted.",
          "sub": "Họ chỉ cử một nhân viên trẻ. Câu hỏi quan trọng nào cũng chờ sau kỳ nghỉ. Chuyến đi mất gần nửa giá trị.",
          "keys": [
            "mất gần nửa giá trị"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Lesson: check their holidays first, book tickets after.",
          "sub": "Rút ra: Chốt vé sau, xem lịch lễ của họ trước.",
          "keys": [
            "xem lịch lễ của họ trước"
          ]
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
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-p",
            "t": "text",
            "text": "Một trang ghi chú:",
            "x": 3996,
            "y": 1590,
            "size": 50,
            "at": "l1:page",
            "hl": [
              {
                "text": "Một trang",
                "at": "l1:one page"
              }
            ]
          },
          {
            "id": "h-p1",
            "t": "text",
            "text": "tên, chức danh · điều họ quan tâm",
            "x": 4026,
            "y": 1660,
            "size": 38,
            "at": "l1:names"
          },
          {
            "id": "h-p2",
            "t": "text",
            "text": "chuyện cũ · văn hoá · câu hỏi",
            "x": 4026,
            "y": 1715,
            "size": 38,
            "at": "l1:culture"
          },
          {
            "id": "h-p3",
            "t": "text",
            "text": "Đưa sếp xem: cả đoàn một giọng",
            "x": 4816,
            "y": 1780,
            "size": 42,
            "at": "l2:Cô Hoa",
            "color": "accent",
            "hl": [
              {
                "text": "một giọng",
                "at": "l2:voice"
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
          "say": "Then everything goes on one page: names and titles, interests, old stories, culture notes, three questions.",
          "sub": "Rồi gom tất cả vào một trang: tên và chức danh, điều họ quan tâm, chuyện cũ, vài lưu ý văn hoá, ba câu hỏi muốn hỏi.",
          "keys": [
            "một trang"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She shows Cô Hoa first, and rereads it on the way. One team, one voice.",
          "sub": "Đưa Cô Hoa xem trước, đọc lại trên đường đến buổi họp. Có khi sếp biết thêm một chi tiết, cả đoàn nói cùng một giọng.",
          "keys": [
            "cùng một giọng"
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
            "at": "l4:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑥ Bữa trưa · Sam hỏi chuyện nhà",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "bento-box"
              ]
            },
            "at": "l1:lunch",
            "caption": "Ngày đầu · bữa trưa",
            "icon": "bento-box"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Đã đọc: “họ kín đáo”",
            "x": 5964,
            "y": 1250,
            "size": 50,
            "at": "l2:reserved",
            "color": "muted"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Sam: gia đình? quê ở đâu?",
            "x": 5964,
            "y": 1335,
            "size": 48,
            "at": "l3:family",
            "color": "coral"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Cởi mở đáp cởi mở, hỏi lại",
            "x": 5964,
            "y": 1430,
            "size": 46,
            "at": "l4:yours",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi lại",
                "at": "l4:yours"
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
          "say": "Stop six: she's arrived. Lunch with Sam before the big meeting.",
          "sub": "Chặng sáu: đã đến nơi. Bữa trưa với Sam trước buổi họp chính."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo read online that people there are reserved, rarely talking about private life.",
          "sub": "Thảo đọc trên mạng rằng người nước ấy rất kín đáo, ít nói chuyện riêng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "So, Thảo, tell me about your family. Where's your hometown?",
          "sub": "Thảo này, kể tôi nghe về gia đình chị đi. Quê chị ở đâu?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "A big, noisy family, and a hometown proud of its food. And yours?",
          "sub": "Nhà tôi đông và ồn lắm, quê tôi thì tự hào về đồ ăn. Còn chị?",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "ref": "p23"
    },
    {
      "id": "s19",
      "module": "BRK-04",
      "data": {
        "title": "Bữa trưa với đối tác",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Bám điều đã đọc: trả lời cụt, kéo về công việc",
        "right": "Họ cởi mở thì đáp cởi mở, rồi hỏi lại",
        "wrongIllus": "open-book",
        "rightIllus": "speech-balloon"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Option A sticks to the book. Chat dies.",
          "sub": "Cách A bám theo sách. Câu chuyện tắt dần.",
          "keys": [
            "tắt dần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B opens up, and lunch warms up.",
          "sub": "Cách B cởi mở, bữa trưa ấm lên.",
          "keys": [
            "ấm lên"
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
            "id": "i-k",
            "t": "text",
            "text": "Sách: bản đồ · người: con đường",
            "x": 5964,
            "y": 1540,
            "size": 50,
            "at": "l1:map",
            "color": "accent",
            "hl": [
              {
                "text": "con đường",
                "at": "l1:road"
              }
            ]
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Đọc = xu hướng, không phải từng người",
            "x": 5964,
            "y": 1620,
            "size": 40,
            "at": "l2:trend",
            "color": "muted"
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Theo chủ nhà · không đùa văn hoá",
            "x": 5964,
            "y": 1690,
            "size": 44,
            "at": "l3:host"
          },
          {
            "id": "i-6",
            "t": "text",
            "text": "“…the right way, how do people usually do it here?”",
            "x": 5964,
            "y": 1780,
            "size": 34,
            "at": "l4:right way",
            "font": "base",
            "hl": [
              {
                "text": "the right way",
                "at": "l4:right way"
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
          "say": "Lesson: books give you the map, the person in front of you is the road.",
          "sub": "Rút ra: Sách cho bạn bản đồ, người trước mặt mới là con đường.",
          "keys": [
            "người trước mặt mới là con đường"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What you read is a trend, not a person. Many people studied or worked abroad.",
          "sub": "Điều bạn đọc chỉ là xu hướng chung, không phải từng người. Nhiều người đã du học, làm việc với nhiều nước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Follow the host: first names when invited, small talk when they start. Never joke about their culture.",
          "sub": "Làm theo chủ nhà: họ mời gọi tên riêng mới gọi, họ chuyện phiếm thì trò chuyện cùng. Đừng đùa về văn hoá của họ.",
          "keys": [
            "Đừng đùa về văn hoá"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Unsure? Ask: I want to do this the right way, how do people usually do it here?",
          "sub": "Chưa chắc thì hỏi: “Tôi muốn làm cho đúng cách, ở đây mọi người thường làm thế nào?”",
          "keys": [
            "làm cho đúng cách"
          ]
        }
      ],
      "ref": "p20,p21,p22,p24"
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
            "text": "⑦ Buổi họp · Lần này",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:meeting"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "stand"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l1:room",
            "caption": "Buổi họp · phòng họp đối tác",
            "icon": "handshake"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Chào mọi người như nhau",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l2:everyone"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Hỏi đúng: thị trường mới?",
            "x": 7932,
            "y": 1345,
            "size": 50,
            "at": "l2:market",
            "color": "accent",
            "hl": [
              {
                "text": "Hỏi đúng",
                "at": "l2:affect"
              }
            ]
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "“Biết người biết ta”",
            "x": 7932,
            "y": 1470,
            "size": 58,
            "at": "l4:know"
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "+ chưa biết thì hỏi",
            "x": 7992,
            "y": 1560,
            "size": 62,
            "at": "l4:ask",
            "color": "accent",
            "hl": [
              {
                "text": "thì hỏi",
                "at": "l4:ask"
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
          "say": "Last stop: the meeting room. Same table, same Sam, a different Thảo.",
          "sub": "Chặng cuối: phòng họp. Vẫn bàn ấy, vẫn Sam ấy, nhưng một Thảo khác."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Good morning, everyone. I saw you opened a new market. How does that affect this year's orders?",
          "sub": "Chào mọi người. Tôi thấy công ty vừa mở thêm thị trường mới, việc đó ảnh hưởng thế nào đến đơn hàng năm nay?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Good question! Let me show you our plan.",
          "sub": "Câu hỏi hay! Để tôi cho chị xem kế hoạch.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Know them, know yourself, ask when unsure. A hundred meetings, a hundred smiles.",
          "sub": "“Biết người biết ta”, chưa biết thì hỏi. Trăm buổi gặp, trăm nụ cười.",
          "keys": [
            "chưa biết thì hỏi"
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
      "ref": "p8,p13"
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
            "fit": "C",
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
            "x": 4696,
            "y": 490,
            "at": "l1:colleagues"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1500,
            "y": 1630,
            "at": "l2:boss"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6684,
            "y": 1540,
            "at": "l3:road"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: read to know them, ask colleagues to understand them.",
          "sub": "Tóm lại: đọc để biết họ, hỏi đồng nghiệp để hiểu họ.",
          "keys": [
            "hỏi đồng nghiệp để hiểu họ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Don't guess who's the boss. Ask ahead, respect everyone.",
          "sub": "Đừng đoán ai là sếp. Hỏi trước, tôn trọng mọi người.",
          "keys": [
            "Đừng đoán ai là sếp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Books are the map, the person in front of you is the road.",
          "sub": "Sách là bản đồ, người trước mặt mới là con đường.",
          "keys": [
            "con đường"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p5,p13,p24"
    },
    {
      "id": "s34",
      "module": "QUIZ-01",
      "ref": "questions[19]",
      "data": {
        "q": "A partner says this may be a little difficult, what might they really mean?",
        "options": [
          "It means they want a gift first, before they can say yes to anything",
          "It always means yes, so you can start the work right after the meeting",
          "In some cultures this is a polite way to say no, so ask more gently"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "thinking-face",
        "why": "Ở nhiều nơi, “việc này hơi khó” là cách tránh nói thẳng chữ “không”. Hãy hỏi tiếp nhẹ nhàng."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A partner says this may be a little difficult, what might they really mean?",
          "sub": "Đối tác nói việc này có lẽ hơi khó, họ có thể thật sự muốn nói gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "In some cultures this is a polite way to say no, so ask more gently.",
          "sub": "Ở vài nền văn hoá, đó là cách nói “không” lịch sự, nên hãy hỏi tiếp nhẹ nhàng."
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
        "text": "Hôm nay: hẹn đồng nghiệp mười phút hỏi chuyện",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now try the forty questions below.",
          "sub": "Giờ thử sức với bốn mươi câu hỏi bên dưới nhé.",
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
