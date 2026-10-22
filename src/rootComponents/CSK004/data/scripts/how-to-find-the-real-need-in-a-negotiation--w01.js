// Kịch bản video W lần 3 (#110) — "Cách tìm ra nhu cầu thật của đối phương khi đàm phán" · chuỗi "Thương lượng ở chỗ làm"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý cho 40 câu hỏi của bài.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-find-the-real-need-in-a-negotiation--w01",
  "hook": "HOOK-03",
  "unit": {
    "audience": "everyday-negotiators",
    "slug": "how-to-find-the-real-need-in-a-negotiation",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cách tìm ra nhu cầu thật của đối phương khi đàm phán",
    "series": "Thương lượng ở chỗ làm"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng trắng 10 ô đi theo MỘT NGÀY THỨ HAI của Thảo (mua hàng cho quán của Cô Hoa; xem w145/_series/everyday-negotiators.md). Mở 7:30: tin nhắn “Phải tăng giá thôi” của Bác Bình, cà phê nguội máu nóng → B tảng băng lập trường/lợi ích (p1–p3) → ① 8:00 đoán trước (p4–p6) → ② 9:00 nghe–nhắc lại–hỏi vì sao–thêm một tầng, ký 2 năm giữ giá (p7–p10, p9) → ③ 10:30 Dũng đặt in tờ rơi ở cùng xưởng (Sơn → Dũng, chủ xưởng in → Bác Bình) + “Khoan đã!” ba câu “sao” (p11–p14) → ④ 11:30 tóm tắt + 2 phương án + BRK-04 Đức (p15–p18) → ⑤ 14:00 nói ưu tiên, giữ giới hạn + Trâm + BRK-02 (p19–p22) → ⑥ 16:00 Cô Hoa không nói lý do, Thảo đưa 2 phương án (p23–p24, đổi ví dụ người bán thành Thảo chuyển 2 phương án của xưởng cho sếp) → ⑦ 17:30 sáu bước (p25) → khép 7:30 thứ Ba, cà phê vẫn nóng. Đức (p17), Trâm (p21) chỉ kể. Bản cũ: w145/bak/how-to-find-the-real-need-in-a-negotiation--w01.js.",
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
            "id": "a-q",
            "t": "text",
            "text": "“Phải tăng giá thôi”",
            "x": 60,
            "y": 110,
            "size": 110,
            "at": "l1:price",
            "color": "accent",
            "hl": [
              {
                "text": "tăng giá",
                "at": "l1:go up"
              }
            ]
          },
          {
            "id": "a-two",
            "t": "text",
            "text": "Cãi tiếp? Hay chịu thua?",
            "x": 70,
            "y": 320,
            "size": 58,
            "at": "l2:argue"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday, seven thirty. One message: the price has to go up.",
          "sub": "Thứ Hai, bảy rưỡi sáng. Một tin nhắn: phải tăng giá thôi.",
          "keys": [
            "phải tăng giá thôi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two roads appear at once: argue back, or give in.",
          "sub": "Hai con đường hiện ra ngay: cãi lại, hoặc chịu thua."
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
            "at": "l2",
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
              "set": "cafe",
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
                "mobile-phone",
                "hot-beverage"
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
            "caption": "Thứ Hai 7:30 · quầy quán",
            "icon": "mobile-phone"
          },
          {
            "id": "a-cold",
            "t": "text",
            "text": "Cà phê nguội, máu nóng",
            "x": 70,
            "y": 450,
            "size": 54,
            "at": "l3:cold",
            "color": "coral",
            "hl": [
              {
                "text": "máu nóng",
                "at": "l3:hot"
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
          "say": "Meet Thảo, who buys supplies for Cô Hoa's café. The message is from Bác Bình, her packaging supplier.",
          "sub": "Đây là Thảo, phụ trách mua hàng cho quán của Cô Hoa. Tin nhắn đến từ Bác Bình, nhà cung cấp bao bì."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Raise the price? Then I'll just switch suppliers!",
          "sub": "Tăng giá á? Vậy em đổi nhà cung cấp luôn!",
          "face": "stern",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Her coffee goes cold, and her blood gets hot.",
          "sub": "Cà phê thì nguội, còn máu thì nóng.",
          "keys": [
            "máu thì nóng"
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
      "ref": "intro,p9"
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
            "text": "Đòi con số: cãi hay nhường?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:number",
            "hl": [
              {
                "text": "cãi hay nhường",
                "at": "l1:give in"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Đường thứ ba: hỏi “vì sao”",
            "x": 2028,
            "y": 160,
            "size": 58,
            "at": "l2:third",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi “vì sao”",
                "at": "l2:why"
              }
            ]
          },
          {
            "id": "b-top",
            "t": "text",
            "text": "Phần nổi: lập trường (đòi gì)",
            "x": 2028,
            "y": 280,
            "size": 50,
            "at": "l3:tip",
            "hl": [
              {
                "text": "lập trường",
                "at": "l3:position"
              }
            ]
          },
          {
            "id": "b-sea",
            "t": "box",
            "x": 2008,
            "y": 360,
            "w": 1640,
            "h": 12,
            "at": "l4:below",
            "fill": "#7fb3d5",
            "stroke": 2
          },
          {
            "id": "b-low",
            "t": "text",
            "text": "Phần chìm: lợi ích (vì sao đòi)",
            "x": 2028,
            "y": 420,
            "size": 50,
            "at": "l4:interest",
            "color": "accent",
            "hl": [
              {
                "text": "lợi ích",
                "at": "l4:interest"
              }
            ]
          },
          {
            "id": "b-ex1",
            "t": "text",
            "text": "“Tôi muốn giảm giá”",
            "x": 2968,
            "y": 280,
            "size": 44,
            "at": "l5:discount",
            "color": "muted"
          },
          {
            "id": "b-ex2",
            "t": "text",
            "text": "“Tôi sợ vượt ngân sách”",
            "x": 2968,
            "y": 420,
            "size": 44,
            "at": "l5:budget",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So when someone asks for a number, must you fight, or give in?",
          "sub": "Vậy khi người ta đòi một con số, mình chỉ còn cãi hay nhường?",
          "keys": [
            "cãi hay nhường"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. There's a third road: ask why.",
          "sub": "Không. Còn đường thứ ba: hỏi vì sao.",
          "keys": [
            "hỏi vì sao"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "What they ask for is the tip of the iceberg. We call it a position.",
          "sub": "Điều họ đòi là phần nổi của tảng băng. Gọi là lập trường.",
          "keys": [
            "lập trường"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Below the water is why they ask. That's the interest.",
          "sub": "Phần chìm bên dưới là lý do họ đòi. Đó là lợi ích.",
          "keys": [
            "lợi ích"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "'I want a discount' is a position. 'I fear going over budget' is an interest.",
          "sub": "“Tôi muốn giảm giá” là lập trường. “Tôi sợ vượt ngân sách tháng này” là lợi ích."
        }
      ],
      "ref": "intro,p1"
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
            "id": "b-clash",
            "t": "text",
            "text": "Lập trường chọi; lợi ích ghép",
            "x": 2028,
            "y": 520,
            "size": 44,
            "at": "l1:clash"
          },
          {
            "id": "b-mix",
            "t": "text",
            "text": "Cần tiền nhanh + trả 2 lần",
            "x": 2028,
            "y": 590,
            "size": 40,
            "at": "l2:fast",
            "color": "accent",
            "hl": [
              {
                "text": "trả 2 lần",
                "at": "l2:twice"
              }
            ]
          },
          {
            "id": "b-test",
            "t": "text",
            "text": "Tự kiểm: nói được “vì sao” chưa?",
            "x": 2028,
            "y": 680,
            "size": 44,
            "at": "l3:test",
            "color": "coral",
            "hl": [
              {
                "text": "“vì sao”",
                "at": "l3:why"
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
          "say": "Positions clash: one wants high, one wants low. Interests rarely clash completely.",
          "sub": "Lập trường hay đối đầu: bên muốn cao, bên muốn thấp. Lợi ích hiếm khi chọi nhau hoàn toàn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The seller needs cash fast, the buyer wants to pay twice. Put them together: a deal.",
          "sub": "Người bán cần tiền nhanh, người mua cần trả làm hai lần. Ghép lại là thành phương án.",
          "keys": [
            "Ghép lại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Quick test: if you know what they want, but not why, you've only seen the tip.",
          "sub": "Tự kiểm: biết họ muốn gì mà không nói được vì sao, là mới thấy phần nổi.",
          "keys": [
            "mới thấy phần nổi"
          ]
        }
      ],
      "ref": "p2,p3"
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
            "text": "① 8:00 · Đoán trước khi gặp",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:breath"
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
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "notebook",
                "memo"
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
            "at": "l1:breath",
            "caption": "8:00 · phòng sau quán",
            "icon": "notebook"
          },
          {
            "id": "c-one",
            "t": "text",
            "text": "Chỉ chuẩn bị: con số mình muốn",
            "x": 3996,
            "y": 160,
            "size": 42,
            "at": "l3:number",
            "color": "muted"
          },
          {
            "id": "c-onex",
            "t": "strike",
            "over": "c-one",
            "at": "l3:guesses"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 270,
            "w": 46,
            "h": 46,
            "at": "l4:worried",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 252,
            "size": 58,
            "at": "l4:worried+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Họ lo: tiền, thời gian, rủi ro?",
            "x": 4066,
            "y": 260,
            "size": 40,
            "at": "l4:worried+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 350,
            "w": 46,
            "h": 46,
            "at": "l4:urgent",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 332,
            "size": 58,
            "at": "l4:urgent+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Điều gì gấp với họ?",
            "x": 4066,
            "y": 340,
            "size": 40,
            "at": "l4:urgent+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 430,
            "w": 46,
            "h": 46,
            "at": "l5:avoid",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 412,
            "size": 58,
            "at": "l5:avoid+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Họ sợ chuyện gì?",
            "x": 4066,
            "y": 420,
            "size": 40,
            "at": "l5:avoid+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 510,
            "w": 46,
            "h": 46,
            "at": "l5:cheap",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 492,
            "size": 58,
            "at": "l5:cheap+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Mình cho được gì, ít tốn?",
            "x": 4066,
            "y": 500,
            "size": 40,
            "at": "l5:cheap+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, eight a.m. Thảo takes a breath, and opens her notebook.",
          "sub": "Chặng một, tám giờ sáng. Thảo hít một hơi, mở sổ ra.",
          "keys": [
            "mở sổ ra"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Meeting at nine. What could make Bác Bình raise prices?",
          "sub": "Chín giờ gặp. Điều gì khiến Bác Bình tăng giá nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Most people prepare one thing: their number. Thảo also prepares guesses about his reasons.",
          "sub": "Nhiều người chỉ chuẩn bị đúng một thứ: con số mình muốn. Thảo chuẩn bị thêm phỏng đoán về lý do của bác.",
          "keys": [
            "phỏng đoán"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Is he worried about money, time, risk, or his boss? What's urgent for him?",
          "sub": "Bác lo tiền, thời gian, rủi ro, hay bị cấp trên trách? Điều gì gấp với bác?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "What does he want to avoid? And what can she give that's cheap for her?",
          "sub": "Bác không muốn chuyện gì xảy ra? Và mình cho được thứ gì ít tốn?"
        }
      ],
      "ref": "p4,p5"
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
            "id": "c-q",
            "t": "text",
            "text": "Phỏng đoán → để có câu hỏi",
            "x": 3996,
            "y": 600,
            "size": 46,
            "at": "l1:questions",
            "color": "accent",
            "hl": [
              {
                "text": "câu hỏi",
                "at": "l1:questions"
              }
            ]
          },
          {
            "id": "c-no",
            "t": "text",
            "text": "Không phải kết luận",
            "x": 4836,
            "y": 705,
            "size": 40,
            "at": "l2:truth",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "These are guesses to find questions, not conclusions.",
          "sub": "Đây chỉ là phỏng đoán để có câu hỏi, không phải kết luận.",
          "keys": [
            "để có câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Treat a guess as truth, and you'll answer a worry they never had. Like bringing an umbrella to a drought.",
          "sub": "Coi phỏng đoán là sự thật, bạn sẽ đi trả lời một nỗi lo họ không hề có. Như mang ô đi giữa mùa hạn.",
          "keys": [
            "mang ô đi giữa mùa hạn"
          ]
        }
      ],
      "ref": "p6"
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
            "at": "l2",
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
          },
          {
            "at": "l6",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l8",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 9:00 · Hỏi “vì sao”",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Bác Bình"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "package",
                "spiral-calendar"
              ]
            },
            "at": "l1:Bác Bình",
            "caption": "9:00 · xưởng bao bì",
            "icon": "package"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "1. Nghe hết, đừng ngắt",
            "x": 5964,
            "y": 160,
            "size": 50,
            "at": "l4:listens"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "2. Nhắc lại bằng lời mình",
            "x": 5964,
            "y": 240,
            "size": 50,
            "at": "l5:repeats"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "3. Hỏi vì sao",
            "x": 5964,
            "y": 320,
            "size": 50,
            "at": "l5:why",
            "color": "accent",
            "hl": [
              {
                "text": "vì sao",
                "at": "l5:why"
              }
            ]
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "4. Hỏi thêm một tầng",
            "x": 5964,
            "y": 400,
            "size": 50,
            "at": "l8:layer",
            "hl": [
              {
                "text": "một tầng",
                "at": "l8:layer"
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
          "say": "Stop two, nine a.m., at the workshop of Bác Bình. Punctual as a rooster, for ten years.",
          "sub": "Chặng hai, chín giờ, xưởng của Bác Bình. Giao hàng đúng hẹn như gà gáy.",
          "keys": [
            "đúng hẹn như gà gáy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Renewal time, Thảo. I need a higher price this year.",
          "sub": "Đến kỳ ký lại rồi cháu. Năm nay bác cần tăng giá.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "So you'd like a higher price from the new contract, right?",
          "sub": "Vậy bác muốn tăng giá từ hợp đồng mới, đúng không ạ?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "See? She listens to the end. No cutting in, no instant no.",
          "sub": "Thấy chưa? Cô nghe hết. Không ngắt lời, không phản bác ngay.",
          "keys": [
            "nghe hết"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "She repeats it in her own words, then asks why, with an open question.",
          "sub": "Cô nhắc lại bằng lời của mình, rồi hỏi lý do bằng câu mở.",
          "keys": [
            "câu mở"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "May I ask why it matters so much this year?",
          "sub": "Năm nay chuyện này quan trọng với bác vì sao ạ?",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "binh",
          "say": "Last year a big client left. My workshop ran half empty for two months.",
          "sub": "Năm trước một khách lớn bỏ ngang. Xưởng bác chạy cầm chừng hai tháng.",
          "face": "sad"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Then one more layer: what happens if that comes again? He fears losing income twice.",
          "sub": "Rồi hỏi thêm một tầng: nếu lặp lại thì sao? Bác sợ mất thu nhập lần nữa.",
          "keys": [
            "thêm một tầng"
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
      "ref": "p7,p8,p9"
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
              "d-v"
            ],
            "zoom": 1.3,
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
            "id": "d-bad",
            "t": "text",
            "text": "“Tăng thì em chuyển!”",
            "x": 5964,
            "y": 520,
            "size": 50,
            "at": "l1:switch",
            "color": "muted"
          },
          {
            "id": "d-badx",
            "t": "strike",
            "over": "d-bad",
            "at": "l1:go ahead"
          },
          {
            "id": "d-2y",
            "t": "text",
            "text": "→ ký 2 năm, giữ giá",
            "x": 5964,
            "y": 600,
            "size": 54,
            "at": "l3:worry",
            "color": "accent",
            "hl": [
              {
                "text": "ký 2 năm",
                "at": "l3:worry"
              }
            ]
          },
          {
            "id": "d-rule",
            "t": "text",
            "text": "Hỏi “vì sao” trước, “không” sau",
            "x": 6804,
            "y": 705,
            "size": 40,
            "at": "l4:say no",
            "color": "accent",
            "hl": [
              {
                "text": "“không” sau",
                "at": "l4:no later"
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
          "say": "Her seven-thirty reflex, 'then I'll switch', would get one reply: go ahead.",
          "sub": "Phản xạ lúc bảy rưỡi, “tăng thì em chuyển”, chỉ nhận được một câu: vậy cứ chuyển.",
          "keys": [
            "vậy cứ chuyển"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "What if we sign for two years, at today's price?",
          "sub": "Hay mình ký hai năm, giữ giá như hiện tại hả bác?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two years, same price: aimed right at his worry.",
          "sub": "Ký hai năm giữ giá: trúng ngay nỗi lo của bác.",
          "keys": [
            "trúng ngay nỗi lo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ask why first, say no later.",
          "sub": "Rút ra: hỏi vì sao trước, nói không sau.",
          "keys": [
            "hỏi vì sao trước, nói không sau"
          ]
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
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 10:30 · Hỏi, không chất vấn",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:flyers"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "page-facing-up",
                "printer"
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
            "at": "l1:flyers",
            "caption": "10:30 · đặt in tờ rơi",
            "icon": "printer"
          },
          {
            "id": "e-rush",
            "t": "text",
            "text": "“Sao phải gấp thế?”",
            "x": 7932,
            "y": 160,
            "size": 52,
            "at": "l3:rush",
            "color": "coral"
          },
          {
            "id": "e-pad",
            "t": "text",
            "text": "+ “Em hỏi để hiểu thôi ạ”",
            "x": 7932,
            "y": 250,
            "size": 48,
            "at": "l4:understand",
            "color": "accent",
            "hl": [
              {
                "text": "để hiểu",
                "at": "l4:understand"
              }
            ]
          },
          {
            "id": "e-alt",
            "t": "text",
            "text": "“Điều gì khiến ngày đó quan trọng?”",
            "x": 7932,
            "y": 340,
            "size": 40,
            "at": "l4:important"
          },
          {
            "id": "e-ack",
            "t": "text",
            "text": "Xen câu ghi nhận, đừng hỏi dồn",
            "x": 7932,
            "y": 430,
            "size": 44,
            "at": "l5:worry",
            "hl": [
              {
                "text": "câu ghi nhận",
                "at": "l5:worry"
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
          "say": "Stop three, ten thirty. Meet Dũng, Thảo's colleague. Cô Hoa sends him to order promo flyers from the same workshop.",
          "sub": "Chặng ba, mười rưỡi. Đây là Dũng, đồng nghiệp của Thảo. Cô Hoa giao cậu đặt in tờ rơi khuyến mãi ở cùng xưởng ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Bác Bình's quote is high. Let me ask why. How hard can it be?",
          "sub": "Báo giá của Bác Bình cao quá. Hỏi vì sao thôi, khó gì đâu.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Careful. 'Why the rush?' can sound like blame.",
          "sub": "Cẩn thận. “Sao phải gấp thế?” dễ nghe như trách móc.",
          "keys": [
            "trách móc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Add a cushion: I'm only asking to understand. Or: what makes that date important to you?",
          "sub": "Thêm phần đệm: “Em hỏi để hiểu rõ hơn thôi ạ.” Hoặc: “Điều gì khiến ngày đó quan trọng với anh?”",
          "keys": [
            "phần đệm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And mix in acknowledgement: I see, that's a real worry. It costs seconds, and lowers their guard.",
          "sub": "Và xen câu ghi nhận: “Em hiểu, chuyện đó đúng là đáng lo.” Mất vài giây, mà người kia bớt phòng thủ.",
          "keys": [
            "bớt phòng thủ"
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
      "ref": "p11,p12"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "shop",
        "label": "10:30 · xưởng in",
        "actors": [
          {
            "id": "dung",
            "side": "left",
            "pose": "cross"
          },
          {
            "id": "binh",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Ba câu “sao” liền nhau",
          "why": "Nghe như trách, chủ xưởng chỉ đáp gọn: “Giá vậy đó cháu.”",
          "rule": "Hỏi để hiểu, đừng hỏi để bắt bẻ"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Why so expensive? Why is the other shop cheaper? Why a deposit?",
          "sub": "Sao đắt vậy? Sao bên kia rẻ hơn? Sao phải đặt cọc?",
          "face": "stern",
          "pose": "cross",
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
          "say": "Three whys in a row. He'll just say: that's the price.",
          "sub": "Ba câu “sao” liền nhau. Bác chỉ đáp gọn: giá vậy đó cháu.",
          "keys": [
            "giá vậy đó"
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
          "say": "I'm just asking to understand. Which part makes the price high?",
          "sub": "Cháu hỏi để hiểu thôi, phần nào làm giá cao vậy bác?",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "binh",
          "say": "The paper. A thinner one would fit your budget.",
          "sub": "Do loại giấy. Đổi giấy mỏng hơn là vừa ngân sách cháu.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Ask to understand, not to catch them out.",
          "sub": "Hỏi để hiểu, đừng hỏi để bắt bẻ.",
          "phase": "redo",
          "keys": [
            "Hỏi để hiểu"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p13,p14"
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
            "text": "④ 11:30 · Thành phương án",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Thảo"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "package",
                "handshake"
              ]
            },
            "at": "l1:Thảo",
            "caption": "11:30 · trước khi về",
            "icon": "handshake"
          },
          {
            "id": "f-sum",
            "t": "text",
            "text": "Tóm lại + hỏi xác nhận",
            "x": 60,
            "y": 1250,
            "size": 50,
            "at": "l3:sum up",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi xác nhận",
                "at": "l3:confirm"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Ít nhất 2 cách đáp ứng:",
            "x": 60,
            "y": 1350,
            "size": 48,
            "at": "l4:two ways",
            "hl": [
              {
                "text": "2 cách",
                "at": "l4:two ways"
              }
            ]
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "• giao trước một phần",
            "x": 80,
            "y": 1425,
            "size": 44,
            "at": "l4:part"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "• đổi lịch thanh toán",
            "x": 80,
            "y": 1490,
            "size": 44,
            "at": "l4:payment"
          },
          {
            "id": "f-c",
            "t": "text",
            "text": "• bớt một hạng mục",
            "x": 80,
            "y": 1555,
            "size": 44,
            "at": "l4:item"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, eleven thirty. Before leaving, Thảo checks she heard right.",
          "sub": "Chặng bốn, mười một rưỡi. Trước khi về, Thảo kiểm lại xem mình nghe đúng chưa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "So what matters most to you is steady orders, not a bigger price. Is that right?",
          "sub": "Tức là điều quan trọng nhất với bác là đơn hàng đều, chứ không phải giá cao hơn, đúng không ạ?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sum up, and confirm. If they nod, you have a place to start.",
          "sub": "Tóm lại, hỏi xác nhận. Họ gật là bạn có chỗ để bắt đầu.",
          "keys": [
            "hỏi xác nhận"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Before the number, find two ways or more: deliver part first, change payment dates, drop an item.",
          "sub": "Trước khi quay lại con số, nghĩ ít nhất hai cách: giao trước một phần, đổi lịch thanh toán, bớt một hạng mục.",
          "keys": [
            "ít nhất hai cách"
          ]
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s12",
      "module": "BRK-04",
      "data": {
        "title": "Đức bán đồ gỗ, khách đòi giảm sâu",
        "wrong": "Nhường chỗ họ đòi: giảm giá sâu",
        "right": "Chỗ họ cần: trả tiền sau khi bán hết",
        "labels": [
          "Đức làm",
          "Khách cần"
        ],
        "wrongIllus": "money-with-wings",
        "rightIllus": "handshake"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Đức cut his price deep, and lost his profit.",
          "sub": "Đức gật giảm giá sâu, về tính lại gần như hết lãi.",
          "keys": [
            "hết lãi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The client only needed to pay after selling.",
          "sub": "Khách chỉ cần được trả tiền sau khi bán hết hàng.",
          "keys": [
            "trả tiền sau khi bán hết hàng"
          ]
        }
      ],
      "ref": "p17"
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
            "id": "f-rule",
            "t": "text",
            "text": "Nhường chỗ cần, không chỗ đòi",
            "x": 60,
            "y": 1670,
            "size": 42,
            "at": "l1:need",
            "color": "accent",
            "hl": [
              {
                "text": "chỗ cần",
                "at": "l1:need"
              }
            ]
          },
          {
            "id": "f-pain",
            "t": "text",
            "text": "Nhiều phương án → giữ chỗ đau",
            "x": 900,
            "y": 1795,
            "size": 40,
            "at": "l2:options"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Give where they truly need it, not where they ask.",
          "sub": "Rút ra: nhường đúng chỗ họ cần, đừng nhường chỗ họ đòi.",
          "keys": [
            "chỗ họ cần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "With more options, you don't have to give up the spot that hurts you most.",
          "sub": "Có nhiều phương án thì không phải nhường đúng chỗ đau nhất của mình."
        }
      ],
      "ref": "p18,p16"
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
            "at": "l3",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 14:00 · Nói nhu cầu của mình",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:own"
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
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "memo",
                "locked"
              ]
            },
            "at": "l1:own",
            "caption": "14:00 · bác ghé quán",
            "icon": "telephone-receiver"
          },
          {
            "id": "g-yes",
            "t": "text",
            "text": "Nói: điều mình ưu tiên",
            "x": 2028,
            "y": 1250,
            "size": 50,
            "at": "l3:priority",
            "color": "accent",
            "hl": [
              {
                "text": "ưu tiên",
                "at": "l3:priority"
              }
            ]
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "Giữ riêng: mức thấp nhất",
            "x": 2028,
            "y": 1340,
            "size": 48,
            "at": "l4:lowest",
            "color": "coral"
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "Giữ riêng: phương án dự phòng",
            "x": 2028,
            "y": 1420,
            "size": 46,
            "at": "l4:backup",
            "color": "coral"
          },
          {
            "id": "g-why",
            "t": "text",
            "text": "Lộ giới hạn → mất chỗ lùi",
            "x": 2028,
            "y": 1510,
            "size": 46,
            "at": "l5:room",
            "hl": [
              {
                "text": "mất chỗ lùi",
                "at": "l5:room"
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
          "say": "Stop five, two p.m. Should Thảo share her own needs?",
          "sub": "Chặng năm, hai giờ chiều. Thảo có nên nói ra nhu cầu của mình không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Honestly, I need long-term stability more than the lowest price.",
          "sub": "Nói thật, bên cháu cần ổn định lâu dài hơn là giá rẻ nhất.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Yes, but selectively. If only one side shares, the other feels it's unfair. So share your priority.",
          "sub": "Có, nhưng chọn lọc. Chỉ một bên chia sẻ thì bên kia thấy không công bằng. Nên nói điều mình ưu tiên.",
          "keys": [
            "chọn lọc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Keep two things: your lowest level, and your backup plan.",
          "sub": "Giữ riêng hai thứ: mức thấp nhất bạn chấp nhận, và phương án dự phòng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Show your final limit, and you lose your room to step back. Mention a backup only if it's real.",
          "sub": "Nói ra giới hạn cuối là mất chỗ lùi. Phương án dự phòng chỉ nhắc khi nó có thật và mạnh.",
          "keys": [
            "mất chỗ lùi"
          ]
        }
      ],
      "ref": "p19,p20"
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
            "id": "g-tram",
            "t": "text",
            "text": "Trâm: khách sạn ↔ hội trường",
            "x": 2028,
            "y": 1610,
            "size": 44,
            "at": "l1:hotel",
            "color": "muted"
          },
          {
            "id": "g-fear",
            "t": "text",
            "text": "“Điều gì làm anh ngại nhất?”",
            "x": 2028,
            "y": 1690,
            "size": 44,
            "at": "l2:worries",
            "color": "accent"
          },
          {
            "id": "g-deal",
            "t": "text",
            "text": "Hội trường + chỉ đường + xe đưa đón",
            "x": 2028,
            "y": 1770,
            "size": 40,
            "at": "l3:shuttle",
            "hl": [
              {
                "text": "xe đưa đón",
                "at": "l3:shuttle"
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
          "say": "Like Trâm in marketing. Her partner wanted a city hotel. She wanted the company hall. Days of tug of war.",
          "sub": "Như Trâm ở phòng marketing. Đối tác muốn khách sạn trung tâm, Trâm muốn hội trường công ty. Kéo co mấy buổi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then she asked: what worries you most? Guests getting lost, and few showing up.",
          "sub": "Rồi Trâm hỏi: “Điều gì làm anh ngại nhất?” Hoá ra anh sợ khách khó tìm, đến ít thì mang tiếng.",
          "keys": [
            "Điều gì làm anh ngại nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Deal: the company hall, with signs and a shuttle from downtown.",
          "sub": "Chốt: hội trường công ty, kèm bảng chỉ đường và xe đưa đón từ trung tâm."
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s16",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Chốt được nhờ hiểu nỗi lo",
        "hl": "nỗi lo",
        "sub": "Hỏi điều họ ngại nhất"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "They argued about the place.",
          "sub": "Cãi nhau về địa điểm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "They agreed thanks to the worry.",
          "sub": "Thoả thuận nhờ nỗi lo.",
          "keys": [
            "nhờ nỗi lo"
          ]
        }
      ],
      "ref": "p22"
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
            "at": "l2",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 16:00 · Không chịu nói lý do",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:boss"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "cross"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "hourglass-not-done",
                "package"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:boss",
            "caption": "16:00 · quầy quán",
            "icon": "hourglass-not-done"
          },
          {
            "id": "h-no",
            "t": "text",
            "text": "Đừng ép hỏi",
            "x": 3996,
            "y": 1250,
            "size": 54,
            "at": "l5:push",
            "color": "coral"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "A: giá cũ, giao sau 2 tuần",
            "x": 3996,
            "y": 1350,
            "size": 46,
            "at": "l3:old price"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: giao ngay, giá mới",
            "x": 3996,
            "y": 1430,
            "size": 46,
            "at": "l3:right away"
          },
          {
            "id": "h-pick",
            "t": "text",
            "text": "Chọn B → thời gian > tiền",
            "x": 3996,
            "y": 1530,
            "size": 50,
            "at": "l5:time",
            "color": "accent",
            "hl": [
              {
                "text": "thời gian > tiền",
                "at": "l5:time matters"
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
          "say": "Stop six, four p.m. Meet Cô Hoa, the boss, who never explains.",
          "sub": "Chặng sáu, bốn giờ chiều. Đây là Cô Hoa, sếp của Thảo, nổi tiếng không giải thích.",
          "keys": [
            "không giải thích"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Cups must be here this week. Don't ask why.",
          "sub": "Ly phải về trong tuần này. Đừng hỏi vì sao.",
          "pose": "cross"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Two ways: old price, delivered in two weeks. Or right away, at the new price. Which suits you?",
          "sub": "Có hai cách: giá cũ nhưng giao sau hai tuần, hoặc giao ngay với giá mới. Cô thấy cách nào hợp hơn?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Right away, of course.",
          "sub": "Giao ngay chứ.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Don't push. Offer options. Her choice says time matters more than money.",
          "sub": "Đừng ép. Đưa phương án. Lựa chọn của cô cho thấy thời gian quan trọng hơn tiền.",
          "keys": [
            "thời gian quan trọng hơn tiền"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p23,p24"
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
            "at": "l1",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 17:30 · Sáu bước vào sổ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:notebook"
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
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "notebook",
                "check-mark-button"
              ]
            },
            "at": "l1:notebook",
            "caption": "17:30 · cuối ngày",
            "icon": "notebook"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 46,
            "h": 46,
            "at": "l2:Listen",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1242,
            "size": 58,
            "at": "l2:Listen+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Nghe hết",
            "x": 6034,
            "y": 1250,
            "size": 44,
            "at": "l2:Listen+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1345,
            "w": 46,
            "h": 46,
            "at": "l2:repeat",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1327,
            "size": 58,
            "at": "l2:repeat+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Nhắc lại",
            "x": 6034,
            "y": 1335,
            "size": 44,
            "at": "l2:repeat+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1430,
            "w": 46,
            "h": 46,
            "at": "l2:softly",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1412,
            "size": 58,
            "at": "l2:softly+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Hỏi vì sao thật mềm",
            "x": 6034,
            "y": 1420,
            "size": 44,
            "at": "l2:softly+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1515,
            "w": 46,
            "h": 46,
            "at": "l3:Sum up",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1497,
            "size": 58,
            "at": "l3:Sum up+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Tóm tắt, hỏi xác nhận",
            "x": 6034,
            "y": 1505,
            "size": 44,
            "at": "l3:Sum up+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1600,
            "w": 46,
            "h": 46,
            "at": "l3:options",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1582,
            "size": 58,
            "at": "l3:options+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Nghĩ ít nhất 2 phương án",
            "x": 6034,
            "y": 1590,
            "size": 44,
            "at": "l3:options+200"
          },
          {
            "id": "i-c5",
            "t": "box",
            "x": 5964,
            "y": 1685,
            "w": 46,
            "h": 46,
            "at": "l4:priority",
            "stroke": 5
          },
          {
            "id": "i-k5",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1667,
            "size": 58,
            "at": "l4:priority+600",
            "color": "accent"
          },
          {
            "id": "i-l5",
            "t": "text",
            "text": "Nói ưu tiên, giữ giới hạn",
            "x": 6034,
            "y": 1675,
            "size": 44,
            "at": "l4:priority+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, five thirty. Thảo writes her day into her notebook.",
          "sub": "Chặng bảy, năm rưỡi chiều. Thảo ghi lại cả ngày vào sổ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Listen to the end. Repeat it. Ask why, softly.",
          "sub": "Nghe hết. Nhắc lại. Hỏi vì sao thật mềm.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Sum up and confirm. Think of two options or more.",
          "sub": "Tóm tắt, hỏi xác nhận. Nghĩ ít nhất hai phương án."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And share your priority, but keep your limit.",
          "sub": "Và nói ưu tiên của mình, nhưng giữ riêng giới hạn.",
          "keys": [
            "giữ riêng giới hạn"
          ]
        }
      ],
      "ref": "p25"
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
            "text": "Thứ Ba · 7:30",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Tuesday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "hot-beverage"
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
            "at": "l1:Tuesday",
            "caption": "Thứ Ba 7:30 · quầy quán",
            "icon": "mobile-phone"
          },
          {
            "id": "j-m",
            "t": "text",
            "text": "“Ký 2 năm, giữ giá nhé cháu”",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l2:two years",
            "color": "accent",
            "hl": [
              {
                "text": "Ký 2 năm",
                "at": "l2:two years"
              }
            ]
          },
          {
            "id": "j-c",
            "t": "text",
            "text": "Cà phê vẫn nóng ✓",
            "x": 7932,
            "y": 1370,
            "size": 56,
            "at": "l3:still hot",
            "hl": [
              {
                "text": "vẫn nóng",
                "at": "l3:still hot"
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
          "say": "Tuesday, seven thirty. Same counter, same coffee. Another message from Bác Bình.",
          "sub": "Thứ Ba, bảy rưỡi. Vẫn quầy ấy, vẫn ly cà phê ấy. Lại tin nhắn của Bác Bình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Two years, same price. Deal!",
          "sub": "Ký hai năm, giữ giá. Chốt!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "This time her coffee is still hot. And so is the deal.",
          "sub": "Lần này cà phê vẫn nóng. Thoả thuận cũng nóng hổi.",
          "keys": [
            "vẫn nóng"
          ]
        }
      ],
      "ref": "p9"
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
            "at": "l1:demand",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:why",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:need",
            "fit": "F",
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
            "x": 2868,
            "y": 420,
            "at": "l1:numbers"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6604,
            "y": 320,
            "at": "l2:why+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 800,
            "y": 1670,
            "at": "l3:need+400"
          },
          {
            "id": "z-next",
            "t": "text",
            "text": "Bài sau: BATNA, điểm dừng",
            "x": 7932,
            "y": 1510,
            "size": 46,
            "at": "l4:walk away",
            "hl": [
              {
                "text": "điểm dừng",
                "at": "l4:walk away"
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
          "say": "So: the real need hides behind the demand, not in the numbers.",
          "sub": "Tóm lại: nhu cầu thật nằm sau lời đòi hỏi, không nằm ở con số.",
          "keys": [
            "nhu cầu thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask why, listen well, then propose.",
          "sub": "Hỏi vì sao, nghe kỹ, rồi mới đề xuất.",
          "keys": [
            "Hỏi vì sao"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And give where they truly need it. Fewer useless gifts, fewer regrets.",
          "sub": "Và nhường đúng chỗ họ cần. Ít nhường vô ích, ít phải tiếc.",
          "keys": [
            "nhường đúng chỗ họ cần"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next: where you walk away. Your BATNA.",
          "sub": "Bài sau: biết mình dừng ở đâu, với BATNA."
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
      "ref": "questions[7]",
      "data": {
        "q": "A buyer says the goods must arrive before a certain date, what is a good next question?",
        "options": [
          "Ask them to accept a later date, since every deadline has some extra space",
          "Ask why that date matters to them and what happens if it is late",
          "Ask nothing, just promise the date and hope the delivery goes smoothly"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Hỏi lý do để thấy nhu cầu thật, hỏi thêm một tầng để biết mức quan trọng."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A buyer says the goods must arrive before a certain date, what is a good next question?",
          "sub": "Người mua nói hàng phải về trước một ngày nhất định, câu hỏi tiếp theo nên là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Ask why that date matters to them and what happens if it is late.",
          "sub": "Hỏi vì sao ngày đó quan trọng, và trễ thì ảnh hưởng thế nào."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "The reason shows the real need. One more layer shows how much it matters.",
          "sub": "Lý do cho thấy nhu cầu thật, hỏi thêm một tầng để biết mức quan trọng."
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
        "text": "Bốn mươi câu để tập tìm nhu cầu thật",
        "sub": "Nghe câu hỏi tiếng Anh, chọn cách hỏi đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next time you want to say no, first ask: what matters most to you here? Then try the forty questions!",
          "sub": "Lần tới muốn từ chối, hỏi trước: “Điều gì quan trọng nhất với anh chị?” Rồi làm bốn mươi câu bên dưới nhé!",
          "face": "happy"
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
