// Kịch bản video W lần 3 (#110) — "Chọn giày chạy bộ phù hợp" · chuỗi "Chạy bộ cho người mới". Mở rộng đủ ý (#110).
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-choose-running-shoes--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "new-runners",
    "slug": "how-to-choose-running-shoes",
    "door": "ky-nang",
    "level": "B1",
    "title": "Chọn giày chạy bộ phù hợp",
    "series": "Chạy bộ cho người mới"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo CHUYẾN SẮM GIÀY của Thảo (tối thứ Hai lướt mạng → bờ hồ → trưa thứ Tư → thứ Bảy 17:00 ở cửa hàng → tối Chủ nhật → tuần sau → vài tháng sau → lại tối thứ Hai). Nhân vật (w145/_series/new-runners.md): Thảo (chính: chị Vy p15, người thấy giày rẻ p19), Dũng (giày đá bóng p2, lời dựng), Cô Hoa (người bán p15, chủ cửa hàng gần hồ), Bác Bình (anh Hoà làm mẫu p13; ghi sổ, hai đôi luân phiên p24). Số liệu chỉ lấy từ bài (một đầu ngón tay, nửa cỡ, ba/năm buổi, buổi chạy thứ ba, một tuần nghỉ); không nêu số km thay giày vì bài nói không có con số cố định. Ngắt nhịp: BRK-04 (p4), BRK-06 (p6, p7), BRK-02 (p16), BRK-07 rehook (p19), BRK-11 (p23). Khép vòng: “Giày dép còn có số” → số ấy ở bàn chân bạn. Bản cũ (W lần 3, #110): w145/bak/how-to-choose-running-shoes--w01.js.",
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
            "id": "a-num",
            "t": "text",
            "text": "1 đầu ngón tay",
            "x": 60,
            "y": 130,
            "size": 140,
            "at": "l1:thumb",
            "color": "accent",
            "hl": [
              {
                "text": "1 đầu ngón tay",
                "at": "l1:width"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "khoảng trống ở mũi giày",
            "x": 70,
            "y": 350,
            "size": 56,
            "at": "l1:gap"
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: đắt nhất = ít đau nhất?",
            "x": 70,
            "y": 460,
            "size": 50,
            "at": "l2:priciest",
            "color": "muted"
          },
          {
            "id": "a-mx",
            "t": "strike",
            "over": "a-myth",
            "at": "l2:fast"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: AOFAS, AAOS (cách thử giày); Clinghan và cs., BJSM 2008 (giá và độ êm)",
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
          "say": "One thumb's width. That's the gap you want at the tip of a running shoe.",
          "sub": "Một đầu ngón tay cái. Đó là khoảng trống nên có ở mũi giày chạy.",
          "keys": [
            "đầu ngón tay cái"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet we think the priciest pair means the least pain. Not so fast.",
          "sub": "Vậy mà ta cứ nghĩ đôi đắt nhất là đôi ít đau nhất. Khoan vội.",
          "keys": [
            "đôi đắt nhất"
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
            "at": "l3",
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
              "set": "room",
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
                "running-shoe"
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Hai · lướt xem giày",
            "icon": "mobile-phone"
          },
          {
            "id": "a-ds",
            "t": "text",
            "text": "Hàng chục mẫu, giá chênh xa",
            "x": 70,
            "y": 570,
            "size": 48,
            "at": "l3:dozens",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Giày dép còn có số”",
            "x": 70,
            "y": 645,
            "size": 52,
            "at": "l4:destiny",
            "color": "accent",
            "hl": [
              {
                "text": "có số",
                "at": "l4:destiny"
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
          "who": "det",
          "say": "Queen of plans, running three steady days a week again after sore shins.",
          "sub": "Nữ hoàng lập kế hoạch, đã chạy đều lại ba buổi một tuần sau một tháng đau ống chân.",
          "keys": [
            "ba buổi một tuần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Dozens of models, prices miles apart. What if I pick wrong and my feet hurt?",
          "sub": "Hàng chục mẫu, giá chênh nhau xa lắc. Chọn sai rồi đau chân thì sao?",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders say even shoes have their destiny. Tonight, Thảo is hunting hers.",
          "sub": "Ông bà bảo “giày dép còn có số”. Tối nay Thảo đi tìm số của mình.",
          "keys": [
            "giày dép còn có số"
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
            "text": "Chọn giày chạy thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:choose",
            "hl": [
              {
                "text": "thế nào",
                "at": "l1:shoes"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: đắt nhất, đẹp nhất",
            "x": 2028,
            "y": 165,
            "size": 52,
            "at": "l2:priciest",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:trendiest"
          },
          {
            "id": "b-c0",
            "t": "box",
            "x": 2028,
            "y": 270,
            "w": 50,
            "h": 50,
            "at": "l3:fits",
            "stroke": 5
          },
          {
            "id": "b-k0",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 252,
            "size": 62,
            "at": "l3:fits+600",
            "color": "accent"
          },
          {
            "id": "b-l0",
            "t": "text",
            "text": "Vừa chân, êm ngay khi thử",
            "x": 2103,
            "y": 262,
            "size": 44,
            "at": "l3:fits+200"
          },
          {
            "id": "b-c1",
            "t": "box",
            "x": 2028,
            "y": 345,
            "w": 50,
            "h": 50,
            "at": "l3:thumb",
            "stroke": 5
          },
          {
            "id": "b-k1",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 327,
            "size": 62,
            "at": "l3:thumb+600",
            "color": "accent"
          },
          {
            "id": "b-l1",
            "t": "text",
            "text": "Mũi giày chừa 1 ngón tay",
            "x": 2103,
            "y": 337,
            "size": 44,
            "at": "l3:thumb+200"
          },
          {
            "id": "b-c2",
            "t": "box",
            "x": 2028,
            "y": 420,
            "w": 50,
            "h": 50,
            "at": "l4:heel",
            "stroke": 5
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 402,
            "size": 62,
            "at": "l4:heel+600",
            "color": "accent"
          },
          {
            "id": "b-l2",
            "t": "text",
            "text": "Ôm gót chắc",
            "x": 2103,
            "y": 412,
            "size": 44,
            "at": "l4:heel+200"
          },
          {
            "id": "b-c3",
            "t": "box",
            "x": 2028,
            "y": 495,
            "w": 50,
            "h": 50,
            "at": "l4:roads",
            "stroke": 5
          },
          {
            "id": "b-k3",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 477,
            "size": 62,
            "at": "l4:roads+600",
            "color": "accent"
          },
          {
            "id": "b-l3",
            "t": "text",
            "text": "Hợp mặt đường bạn chạy",
            "x": 2103,
            "y": 487,
            "size": 44,
            "at": "l4:roads+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you choose the right running shoes?",
          "sub": "Vậy chọn giày chạy thế nào cho hợp?",
          "keys": [
            "chọn giày chạy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not the priciest. Not the trendiest.",
          "sub": "Không phải đôi đắt nhất. Không phải đôi đang thịnh hành."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But a pair that fits and feels comfortable right away, with a thumb's width at the tip,",
          "sub": "Mà là đôi vừa chân, thoải mái ngay khi thử, mũi giày còn khoảng một đầu ngón tay,",
          "keys": [
            "thoải mái ngay khi thử"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "a heel that holds firm, and a sole that suits your roads.",
          "sub": "gót ôm chắc, và hợp mặt đường bạn hay chạy.",
          "keys": [
            "gót ôm chắc"
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
            "id": "b-wk",
            "t": "text",
            "text": "Một chuyến sắm giày của Thảo",
            "x": 2028,
            "y": 545,
            "size": 52,
            "at": "l1:shoe hunt",
            "hl": [
              {
                "text": "sắm giày",
                "at": "l1:shoe hunt"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:follow+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:follow+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:follow+700",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:follow+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:follow+1100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l1:follow+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Thứ Ba",
            "x": 2048,
            "y": 630,
            "size": 42,
            "at": "l1:follow+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Thứ Tư",
            "x": 2318,
            "y": 630,
            "size": 42,
            "at": "l1:follow+620"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Thứ Bảy",
            "x": 2588,
            "y": 630,
            "size": 42,
            "at": "l1:follow+820"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Chủ nhật",
            "x": 2858,
            "y": 630,
            "size": 42,
            "at": "l1:follow+1020"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Tuần sau",
            "x": 3128,
            "y": 630,
            "size": 42,
            "at": "l1:follow+1220"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Vài tháng",
            "x": 3398,
            "y": 630,
            "size": 42,
            "at": "l1:follow+1420"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo's shoe hunt, step by step.",
          "sub": "Ta theo chuyến sắm giày của Thảo, từng chặng một.",
          "keys": [
            "chuyến sắm giày"
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
            "text": "① Thứ Ba · Cần giày riêng?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "walk",
                  "at": "l2"
                }
              ],
              "props": [
                "soccer-ball"
              ]
            },
            "at": "l1:lake",
            "caption": "Sáng thứ Ba · bờ hồ",
            "icon": "soccer-ball"
          },
          {
            "id": "c-few",
            "t": "text",
            "text": "Vài tuần đầu: giày êm, vừa chân",
            "x": 3996,
            "y": 170,
            "size": 44,
            "at": "l4:few weeks",
            "hl": [
              {
                "text": "giày êm",
                "at": "l4:comfy"
              }
            ]
          },
          {
            "id": "c-3x",
            "t": "text",
            "text": "Chạy đều 3 buổi/tuần: giày chạy riêng",
            "x": 3996,
            "y": 250,
            "size": 44,
            "at": "l5:three",
            "color": "accent",
            "hl": [
              {
                "text": "giày chạy riêng",
                "at": "l5:pair"
              }
            ]
          },
          {
            "id": "c-why",
            "t": "text",
            "text": "→ bước tới, lặp hàng nghìn lần",
            "x": 4036,
            "y": 325,
            "size": 42,
            "at": "l5:forward"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Tuesday morning by the lake. Does Thảo really need running shoes?",
          "sub": "Chặng một: sáng thứ Ba ở bờ hồ. Thảo có thật cần giày chạy riêng không?",
          "keys": [
            "giày chạy riêng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dũng jogs up. Yes, the Dũng who once ran like a penguin.",
          "sub": "Dũng chạy tới. Vâng, chính anh Dũng từng chạy như chim cánh cụt."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Shoes? I run in my football boots. Studs mean grip, right?",
          "sub": "Giày á? Anh chạy bằng giày đá bóng. Có đinh là bám, đúng không?",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Good news: a few weeks of run-walk? Comfy sports shoes that fit are enough.",
          "sub": "Tin vui: mới chạy xen đi bộ vài tuần thì giày thể thao êm, vừa chân là đủ.",
          "keys": [
            "giày thể thao êm, vừa chân"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Running three times a week? A running pair is built for that forward step, thousands of times.",
          "sub": "Chạy đều ba buổi một tuần? Giày chạy được làm cho bước tới lặp hàng nghìn lần mỗi buổi.",
          "keys": [
            "hàng nghìn lần"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
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
            "id": "c-bad",
            "t": "text",
            "text": "Đá bóng · đế cứng · vải mỏng",
            "x": 3996,
            "y": 430,
            "size": 44,
            "at": "l1:football",
            "color": "coral"
          },
          {
            "id": "c-bad2",
            "t": "text",
            "text": "→ không đủ êm, không ôm chân",
            "x": 4036,
            "y": 500,
            "size": 42,
            "at": "l1:cushion",
            "color": "muted"
          },
          {
            "id": "c-gym",
            "t": "text",
            "text": "Giày gym: bước ngang, nâng tạ",
            "x": 3996,
            "y": 575,
            "size": 44,
            "at": "l2:gym",
            "hl": [
              {
                "text": "bước ngang",
                "at": "l2:sideways"
              }
            ]
          },
          {
            "id": "c-not",
            "t": "text",
            "text": "Tăng vội, ngủ ít, bỏ ngày nghỉ",
            "x": 3996,
            "y": 660,
            "size": 44,
            "at": "l3:hope",
            "color": "coral",
            "hl": [
              {
                "text": "bỏ ngày nghỉ",
                "at": "l3:rest"
              }
            ]
          },
          {
            "id": "c-not2",
            "t": "text",
            "text": "→ hại chân không kém giày",
            "x": 4036,
            "y": 725,
            "size": 38,
            "at": "l3:matter",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Football boots, stiff fashion flats, thin canvas: not enough cushion or hold for regular running.",
          "sub": "Giày đá bóng, giày thời trang đế phẳng cứng, giày vải mỏng: không đủ êm, không đủ ôm chân để chạy đều."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Gym shoes suit sideways steps and lifting. Fine sometimes, not ideal for regular runs.",
          "sub": "Giày gym làm cho bước sang ngang và nâng tạ. Thỉnh thoảng thì được, chạy thường xuyên thì không lý tưởng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But don't put all your hope in shoes. Rushing, little sleep and no rest matter just as much.",
          "sub": "Nhưng đừng giao hết hy vọng cho đôi giày. Tăng tập vội, ngủ ít, bỏ ngày nghỉ cũng hại chân không kém.",
          "keys": [
            "đừng giao hết hy vọng"
          ]
        }
      ],
      "ref": "p2,p3"
    },
    {
      "id": "s07",
      "module": "BRK-04",
      "data": {
        "title": "Giày xịn thì khỏi lo đau?",
        "wrong": "Đôi đắt nhất, chạy năm buổi, buổi sau dài hơn",
        "right": "Đôi vừa chân, vừa túi, ba buổi một tuần, tăng từ từ",
        "wrongIllus": "money-with-wings",
        "rightIllus": "running-shoe"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Priciest pair, five runs a week? Heels still ache.",
          "sub": "Đôi đắt nhất, năm buổi một tuần? Gót vẫn buốt.",
          "keys": [
            "Gót vẫn buốt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fitting pair, three runs, slow build. Safer.",
          "sub": "Đôi vừa chân, ba buổi, tăng từ từ: an toàn hơn.",
          "keys": [
            "an toàn hơn"
          ]
        }
      ],
      "ref": "p4"
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
            "fit": [
              "c-rule"
            ],
            "zoom": 1.15,
            "ms": 700
          },
          {
            "at": "l1:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-rule",
            "t": "text",
            "text": "Đỡ bàn chân, không đỡ tập vội",
            "x": 4816,
            "y": 700,
            "size": 44,
            "at": "l1:feet",
            "color": "accent",
            "hl": [
              {
                "text": "không đỡ tập vội",
                "at": "l1:rushing"
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
          "say": "Good shoes support your feet. They can't support rushing. Tendons still need weeks to adapt.",
          "sub": "Giày tốt đỡ bàn chân, không đỡ được cách tập vội. Gân, cơ, xương vẫn cần nhiều tuần để quen.",
          "keys": [
            "không đỡ được cách tập vội"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s09",
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
            "text": "② Thứ Tư · Trước khi đi",
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
                "notebook"
              ]
            },
            "at": "l1:lunch",
            "caption": "Giờ nghỉ trưa · văn phòng",
            "icon": "notebook"
          },
          {
            "id": "d-road",
            "t": "text",
            "text": "Đường nhựa, công viên → giày đường nhựa",
            "x": 5964,
            "y": 170,
            "size": 40,
            "at": "l3:asphalt",
            "hl": [
              {
                "text": "giày đường nhựa",
                "at": "l3:road"
              }
            ]
          },
          {
            "id": "d-new",
            "t": "text",
            "text": "Người mới: một đôi tập hằng ngày",
            "x": 5964,
            "y": 245,
            "size": 42,
            "at": "l3:beginners",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Wednesday lunch. Thảo opens her notebook, of course.",
          "sub": "Chặng hai: trưa thứ Tư. Thảo mở sổ, tất nhiên rồi.",
          "keys": [
            "mở sổ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Question one: where do I actually run? The lake path. Asphalt.",
          "sub": "Câu một: mình chạy chủ yếu ở đâu? Đường quanh hồ. Đường nhựa.",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Asphalt, parks, stadiums: road shoes. Beginners usually need just one soft, durable daily pair.",
          "sub": "Đường nhựa, công viên, sân vận động: giày chạy đường nhựa. Người mới thường chỉ cần một đôi tập hằng ngày êm, bền.",
          "keys": [
            "một đôi tập hằng ngày"
          ]
        }
      ],
      "ref": "p6"
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
          }
        ],
        "items": [
          {
            "id": "d-stab",
            "t": "text",
            "text": "Ổn định: chân đổ vào trong nhiều",
            "x": 5964,
            "y": 335,
            "size": 42,
            "at": "l1:stability"
          },
          {
            "id": "d-feel",
            "t": "text",
            "text": "→ thử cả hai, chọn theo cảm giác",
            "x": 6004,
            "y": 405,
            "size": 40,
            "at": "l1:both",
            "color": "accent",
            "hl": [
              {
                "text": "theo cảm giác",
                "at": "l1:feel"
              }
            ]
          },
          {
            "id": "d-doc",
            "t": "text",
            "text": "Chân có vấn đề, đau kéo dài: hỏi bác sĩ",
            "x": 5964,
            "y": 480,
            "size": 34,
            "at": "l2:problems",
            "font": "base",
            "color": "coral"
          },
          {
            "id": "d-words",
            "t": "text",
            "text": "midsole đệm · outsole bám · drop · upper",
            "x": 5964,
            "y": 545,
            "size": 32,
            "at": "l3:midsole",
            "font": "base",
            "hl": [
              {
                "text": "midsole đệm",
                "at": "l3:midsole"
              }
            ]
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 620,
            "w": 50,
            "h": 50,
            "at": "l4:afternoon",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 602,
            "size": 62,
            "at": "l4:afternoon+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Đi chiều",
            "x": 6039,
            "y": 612,
            "size": 38,
            "at": "l4:afternoon+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 6224,
            "y": 620,
            "w": 50,
            "h": 50,
            "at": "l4:socks",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 6230,
            "y": 602,
            "size": 62,
            "at": "l4:socks+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Mang tất",
            "x": 6299,
            "y": 612,
            "size": 38,
            "at": "l4:socks+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 6484,
            "y": 620,
            "w": 50,
            "h": 50,
            "at": "l4:where",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 6490,
            "y": 602,
            "size": 62,
            "at": "l4:where+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Chạy đâu?",
            "x": 6559,
            "y": 612,
            "size": 38,
            "at": "l4:where+200"
          },
          {
            "id": "d-cash",
            "t": "text",
            "text": "Đặt trước mức tiền thoải mái",
            "x": 6784,
            "y": 700,
            "size": 40,
            "at": "l4:budget",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stability shoes add support if your feet roll inward a lot. Not sure? Try both, choose by feel.",
          "sub": "Giày ổn định đỡ thêm cho bàn chân đổ vào trong nhiều. Không chắc? Thử cả hai, chọn theo cảm giác.",
          "keys": [
            "chọn theo cảm giác"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Foot problems or lasting pain? Ask a doctor or physiotherapist first.",
          "sub": "Bàn chân có vấn đề hoặc đau kéo dài? Hỏi bác sĩ hoặc chuyên gia vật lý trị liệu trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "On the box: midsole is cushion, outsole is grip, drop is heel-to-toe height, the upper breathes.",
          "sub": "Chữ trên hộp: midsole là lớp đệm, outsole bám đường, drop là độ chênh gót mũi, upper nên thoáng.",
          "keys": [
            "midsole",
            "outsole"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Her list: an afternoon visit, running socks, where and how often she runs, and a budget.",
          "sub": "Danh sách: đi buổi chiều, mang tất hay chạy, nhớ chạy ở đâu, mấy buổi, và đặt trước mức tiền.",
          "keys": [
            "đi buổi chiều"
          ]
        }
      ],
      "ref": "p7,p8,p9"
    },
    {
      "id": "s12",
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
            "at": "l5:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Bảy 17:00 · Cửa hàng",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third"
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
                  "id": "thao",
                  "side": "left",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "running-shoe"
              ]
            },
            "at": "l1:shop",
            "caption": "17:00 · chân đã hơi nở",
            "icon": "running-shoe"
          },
          {
            "id": "e-col",
            "t": "text",
            "text": "Màu đẹp quá!",
            "x": 7932,
            "y": 170,
            "size": 56,
            "at": "l3:colour",
            "color": "coral"
          },
          {
            "id": "e-pin",
            "t": "text",
            "text": "… mà hơi cấn ở mu bàn chân",
            "x": 7932,
            "y": 260,
            "size": 46,
            "at": "l3:presses",
            "color": "muted",
            "hl": [
              {
                "text": "cấn",
                "at": "l3:presses"
              }
            ]
          },
          {
            "id": "e-st",
            "t": "text",
            "text": "“Đi vài hôm là giãn ra”",
            "x": 7932,
            "y": 350,
            "size": 50,
            "at": "l4:stretch",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Saturday, five p.m., as planned. The shop.",
          "sub": "Chặng ba: năm giờ chiều thứ Bảy, đúng kế hoạch. Vào cửa hàng.",
          "keys": [
            "năm giờ chiều"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Cô Hoa, the shop owner near the lake. Quick hands, quicker tongue.",
          "sub": "Đây là Cô Hoa, chủ cửa hàng gần hồ. Tay nhanh, miệng còn nhanh hơn.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Such a pretty colour! But it presses a little on top of my foot.",
          "sub": "Màu đẹp quá! Mà hơi cấn ở mu bàn chân.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Wear them a few days, dear. They'll stretch.",
          "sub": "Đi vài hôm là giãn ra thôi con.",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Okay, I'll take them!",
          "sub": "Vậy em lấy đôi này!",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s13",
      "module": "DLG-01",
      "data": {
        "set": "shop",
        "label": "Cửa hàng · 17:00",
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
          "label": "Mua đôi cấn chân vì “sẽ giãn ra”",
          "why": "Buổi chạy thứ ba, mu bàn chân phồng rộp, phải nghỉ một tuần, đôi giày nằm im góc tủ.",
          "rule": "Cấn lúc thử thì đau lúc chạy"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Pretty colour, a little pinch. I'll take them!",
          "sub": "Màu đẹp, hơi cấn chút. Em lấy!",
          "face": "happy",
          "pose": "thumb",
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
          "say": "Third run: blisters on top of the foot, a week off, shoes asleep in the cupboard.",
          "sub": "Buổi chạy thứ ba: mu bàn chân phồng rộp, nghỉ một tuần, đôi giày ngủ trong góc tủ.",
          "keys": [
            "phồng rộp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "It presses on top. Can I try a half size up, please?",
          "sub": "Chỗ mu hơi cấn. Cho em thử lớn hơn nửa cỡ được không ạ?",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Of course. Try this one, and walk around.",
          "sub": "Được chứ. Thử đôi này, đi lại xem.",
          "phase": "redo",
          "face": "happy",
          "pose": "give"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p15,p16,p11"
    },
    {
      "id": "s14",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Cấn lúc thử thì đau lúc chạy",
        "hl": "đau lúc chạy",
        "sub": "Đừng trông đôi giày giãn ra"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "If it pinches in the shop,",
          "sub": "Cấn lúc thử,"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "it hurts on the road. Don't count on stretching.",
          "sub": "thì đau lúc chạy. Đừng trông giày giãn ra.",
          "keys": [
            "đau lúc chạy"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
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
          },
          {
            "at": "l5",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
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
            "text": "④ Bác Bình làm mẫu",
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
              "set": "shop",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "walk",
                  "at": "l1",
                  "pose": "point"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "socks"
              ]
            },
            "at": "l1:Bình",
            "caption": "Cùng chiều · đôi giày tiếp theo",
            "icon": "socks"
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1260,
            "w": 50,
            "h": 50,
            "at": "l2:after work",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1242,
            "size": 62,
            "at": "l2:after work+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Sau giờ làm, chân đã nở",
            "x": 135,
            "y": 1252,
            "size": 42,
            "at": "l2:after work+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1345,
            "w": 50,
            "h": 50,
            "at": "l2:socks",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1327,
            "size": 62,
            "at": "l2:socks+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Mang tất chạy vẫn dùng",
            "x": 135,
            "y": 1337,
            "size": 42,
            "at": "l2:socks+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1430,
            "w": 50,
            "h": 50,
            "at": "l3:presses",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1412,
            "size": 62,
            "at": "l3:presses+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Ấn mũi giày: còn 1 ngón",
            "x": 135,
            "y": 1422,
            "size": 42,
            "at": "l3:presses+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1515,
            "w": 50,
            "h": 50,
            "at": "l4:jogging",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1497,
            "size": 62,
            "at": "l4:jogging+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Chạy thử: ngón có chạm?",
            "x": 135,
            "y": 1507,
            "size": 42,
            "at": "l4:jogging+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: same afternoon. Bác Bình comes for his next pair. Watch the master.",
          "sub": "Chặng bốn: cùng buổi chiều. Bác Bình ghé mua đôi tiếp theo. Xem cao thủ làm mẫu.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "I come after work, when my feet have swelled. And I bring my running socks.",
          "sub": "Bác đi sau giờ làm, lúc chân đã nở. Và mang theo đôi tất chạy vẫn dùng.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "He stands straight and presses the toe: about one thumb's width left.",
          "sub": "Bác đứng thẳng, ấn mũi giày: còn khoảng một đầu ngón tay.",
          "keys": [
            "một đầu ngón tay"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then a few jogging steps. Do the toes touch the front? No.",
          "sub": "Rồi chạy thử vài bước. Ngón chân có chạm mũi giày không? Không."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "Last pair, my toenails went black on the bridge downhill. Not this time.",
          "sub": "Đôi trước, xuống dốc cầu là móng chân thâm. Lần này thì không.",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-both",
            "t": "text",
            "text": "Thử hai chân, theo chân lớn hơn",
            "x": 60,
            "y": 1610,
            "size": 42,
            "at": "l1:both",
            "hl": [
              {
                "text": "chân lớn hơn",
                "at": "l1:bigger"
              }
            ]
          },
          {
            "id": "f-heel",
            "t": "text",
            "text": "Buộc vừa chặt · gót trượt? chỗ cọ?",
            "x": 60,
            "y": 1680,
            "size": 40,
            "at": "l2:lace"
          },
          {
            "id": "f-en",
            "t": "text",
            "text": "“Are these good for daily runs on the road?”",
            "x": 60,
            "y": 1750,
            "size": 34,
            "at": "l3:road",
            "font": "base",
            "color": "accent"
          },
          {
            "id": "f-size",
            "t": "text",
            "text": "Cỡ khác nhau giữa hãng, giữa mẫu",
            "x": 60,
            "y": 1810,
            "size": 32,
            "at": "l4:brands",
            "font": "base",
            "color": "coral"
          },
          {
            "id": "f-rule",
            "t": "text",
            "text": "Thử buổi chiều, mũi chừa một ngón",
            "x": 880,
            "y": 1790,
            "size": 40,
            "at": "l5:afternoon",
            "color": "accent",
            "hl": [
              {
                "text": "chừa một ngón",
                "at": "l5:thumb"
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
          "say": "Try both feet. Feet are rarely twins. Pick the size for the bigger one.",
          "sub": "Thử cả hai chân. Hai bàn chân hiếm khi sinh đôi. Chọn cỡ theo chân lớn hơn.",
          "keys": [
            "chân lớn hơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lace snugly, walk, jog a little. Does the heel slip? Anything rub or pinch?",
          "sub": "Buộc dây vừa chặt, đi lại, chạy nhẹ. Gót có trượt không? Chỗ nào cọ, cấn không?",
          "keys": [
            "Gót có trượt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Are these good for daily runs on the road?",
          "sub": "Đôi này có hợp chạy đường nhựa hằng ngày không ạ?",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sizes differ between brands, even models. Don't skip the try-on.",
          "sub": "Cỡ giày khác nhau giữa các hãng, cả giữa các mẫu. Đừng vì con số quen mà bỏ bước thử.",
          "keys": [
            "bỏ bước thử"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try shoes in the afternoon, and leave one thumb at the tip.",
          "sub": "Thử giày buổi chiều, mũi giày chừa một ngón.",
          "keys": [
            "Thử giày buổi chiều"
          ]
        }
      ],
      "ref": "p10,p11,p12,p14"
    },
    {
      "id": "s17",
      "module": "BRK-07",
      "data": {
        "question": "Rẻ hơn hẳn trên mạng, đặt luôn theo cỡ quen?",
        "illus": "mobile-phone"
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
          "say": "What if the same shoes are much cheaper online?",
          "sub": "Nếu trên mạng có đôi rẻ hơn hẳn thì sao?",
          "keys": [
            "rẻ hơn hẳn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p19"
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
            "text": "⑤ Chủ nhật · Đôi rẻ trên mạng",
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
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "mobile-phone"
              ]
            },
            "at": "l1:Sunday",
            "caption": "Tối Chủ nhật · đôi thứ hai?",
            "icon": "mobile-phone"
          },
          {
            "id": "g-cheap",
            "t": "text",
            "text": "Rẻ hẳn · chưa thử · không đổi trả",
            "x": 2028,
            "y": 1260,
            "size": 42,
            "at": "l2:cheaper",
            "color": "coral"
          },
          {
            "id": "g-stop",
            "t": "text",
            "text": "Rẻ bất thường → dừng lại",
            "x": 2028,
            "y": 1340,
            "size": 52,
            "at": "l3:strangely",
            "color": "accent",
            "hl": [
              {
                "text": "dừng lại",
                "at": "l3:stop"
              }
            ]
          },
          {
            "id": "g-fake",
            "t": "text",
            "text": "Hàng giả: đệm cứng, đế mau mòn",
            "x": 2028,
            "y": 1430,
            "size": 44,
            "at": "l4:fakes",
            "hl": [
              {
                "text": "đệm cứng",
                "at": "l4:hard"
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
          "say": "Fifth stop: Sunday night. Thảo eyes a second pair online.",
          "sub": "Chặng năm: tối Chủ nhật. Thảo ngắm một đôi thứ hai trên mạng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "So much cheaper than the shop! Never tried this model, and no word on returns.",
          "sub": "Rẻ hơn hẳn ở cửa hàng! Mẫu chưa thử, người bán không ghi gì về đổi trả.",
          "face": "surprised",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Strangely cheap is exactly when to stop and check.",
          "sub": "Rẻ bất thường chính là lúc nên dừng lại kiểm tra.",
          "keys": [
            "dừng lại kiểm tra"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fakes can look identical, with hard cushioning, fast-wearing soles, and almost no returns.",
          "sub": "Giày giả trông y hệt, nhưng đệm cứng, đế mau mòn, và gần như không đổi trả được.",
          "keys": [
            "đệm cứng, đế mau mòn"
          ]
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s19",
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
            "id": "g-ok",
            "t": "text",
            "text": "Mua online an toàn:",
            "x": 2028,
            "y": 1530,
            "size": 46,
            "at": "l1:Online",
            "color": "accent"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "mẫu đã thử · đo chân, bảng cỡ đúng hãng",
            "x": 2028,
            "y": 1600,
            "size": 34,
            "at": "l1:tried",
            "font": "base"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "nơi đổi trả rõ ràng · thử trong nhà trước",
            "x": 2028,
            "y": 1655,
            "size": 34,
            "at": "l2:returns",
            "font": "base"
          },
          {
            "id": "g-rule",
            "t": "text",
            "text": "Chưa thử chân → chọn nơi cho đổi",
            "x": 2028,
            "y": 1730,
            "size": 48,
            "at": "l3:exchange",
            "color": "accent",
            "hl": [
              {
                "text": "nơi cho đổi",
                "at": "l3:exchange"
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
          "say": "Online, pick a model you've tried, and check your foot length on that brand's chart.",
          "sub": "Mua online cho an toàn: ưu tiên mẫu đã thử hoặc đã dùng, đo chân, đối chiếu bảng cỡ của đúng hãng.",
          "keys": [
            "đúng hãng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A shop with clear returns. And test them indoors before any street run.",
          "sub": "Chọn nơi đổi trả rõ ràng. Và thử trong nhà trước khi chạy ngoài đường."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Then I'll try this model in a shop first, or buy where I can exchange the size.",
          "sub": "Vậy em thử mẫu này ở cửa hàng trước, hoặc chỉ mua ở nơi cho đổi cỡ.",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "ref": "p17,p20"
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
            "text": "⑥ Tuần sau · Giày mới",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sixth"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "stand",
                  "face": "happy"
                }
              ],
              "props": [
                "umbrella-with-rain-drops",
                "running-shoe"
              ]
            },
            "at": "l1:week",
            "caption": "Tuần sau · mưa lất phất",
            "icon": "umbrella-with-rain-drops"
          },
          {
            "id": "h-short",
            "t": "text",
            "text": "Vài buổi ngắn trước, rồi buổi dài",
            "x": 3996,
            "y": 1260,
            "size": 44,
            "at": "l3:short",
            "hl": [
              {
                "text": "buổi ngắn",
                "at": "l3:short"
              }
            ]
          },
          {
            "id": "h-race",
            "t": "text",
            "text": "Ngày đi giải: không giày mới tinh",
            "x": 3996,
            "y": 1345,
            "size": 44,
            "at": "l4:race",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: the next week. New shoes, first outing.",
          "sub": "Chặng sáu: tuần sau. Giày mới, lần đầu ra hồ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "So comfy! Let's do my long run in them right away!",
          "sub": "Êm quá! Chạy buổi dài luôn bằng đôi này!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Easy, queen. A few short runs first, then the long one.",
          "sub": "Từ từ nào nữ hoàng. Vài buổi ngắn trước, rồi mới buổi dài.",
          "keys": [
            "Vài buổi ngắn trước"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And never wear a pair you haven't run in on race day.",
          "sub": "Và đừng bao giờ mang đôi chưa từng chạy vào ngày đi giải.",
          "keys": [
            "ngày đi giải"
          ]
        }
      ],
      "ref": "p21"
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
            "id": "h-sock",
            "t": "text",
            "text": "Tất mỏng, thoáng, vừa → bớt phồng",
            "x": 3996,
            "y": 1450,
            "size": 42,
            "at": "l1:socks"
          },
          {
            "id": "h-wet",
            "t": "text",
            "text": "Giày ướt: rút lót, nhét giấy",
            "x": 3996,
            "y": 1540,
            "size": 44,
            "at": "l2:insoles",
            "color": "accent",
            "hl": [
              {
                "text": "nhét giấy",
                "at": "l2:paper"
              }
            ]
          },
          {
            "id": "h-sun",
            "t": "text",
            "text": "Phơi nắng gắt, hơ lửa",
            "x": 3996,
            "y": 1630,
            "size": 46,
            "at": "l3:sun",
            "color": "muted"
          },
          {
            "id": "h-sunx",
            "t": "strike",
            "over": "h-sun",
            "at": "l3:glue"
          },
          {
            "id": "h-glue",
            "t": "text",
            "text": "→ hỏng keo, hỏng đệm",
            "x": 4036,
            "y": 1710,
            "size": 44,
            "at": "l3:glue+200",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Socks matter too. Thin, breathable, well-fitting socks mean fewer blisters.",
          "sub": "Tất cũng quan trọng: tất mỏng, thoáng, vừa chân giúp bớt phồng rộp.",
          "keys": [
            "bớt phồng rộp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Soaked after rain? Take out the insoles, stuff them with paper, leave them somewhere airy.",
          "sub": "Ướt sau buổi mưa? Rút lót giày, nhét giấy vào, để chỗ thoáng gió.",
          "keys": [
            "nhét giấy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not in harsh sun or next to a heater. Glue and cushioning hate a barbecue.",
          "sub": "Đừng phơi nắng gắt hay hơ sát nguồn nóng. Keo và đệm ghét bị nướng.",
          "keys": [
            "Keo và đệm"
          ]
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s22",
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
            "at": "l3:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Vài tháng sau · Khi nào thay?",
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
              "set": "home",
              "actors": [
                {
                  "id": "binh",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "notebook",
                "running-shoe"
              ]
            },
            "at": "l1:months",
            "caption": "Nhà Bác Bình · cuốn sổ giày",
            "icon": "notebook"
          },
          {
            "id": "i-no",
            "t": "text",
            "text": "Không có số km cố định",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l1:fixed",
            "color": "muted"
          },
          {
            "id": "i-dep",
            "t": "text",
            "text": "tuỳ cân nặng, dáng chạy, mặt đường",
            "x": 5964,
            "y": 1340,
            "size": 40,
            "at": "l1:weight"
          },
          {
            "id": "i-log",
            "t": "text",
            "text": "Ghi ngày bắt đầu mỗi đôi",
            "x": 5964,
            "y": 1430,
            "size": 48,
            "at": "l2:write",
            "color": "accent",
            "hl": [
              {
                "text": "ngày bắt đầu",
                "at": "l2:start"
              }
            ]
          },
          {
            "id": "i-two",
            "t": "text",
            "text": "2 đôi luân phiên: kịp khô",
            "x": 5964,
            "y": 1520,
            "size": 48,
            "at": "l3:two pairs",
            "hl": [
              {
                "text": "kịp khô",
                "at": "l3:dries"
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
          "say": "Seventh stop: months later. When to replace? No fixed number: weight, stride, roads, materials.",
          "sub": "Chặng bảy: vài tháng sau. Khi nào thay giày? Không có con số cố định: tuỳ cân nặng, dáng chạy, mặt đường, chất liệu.",
          "keys": [
            "Không có con số cố định"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "I write down when I start each pair, and how much I run in it.",
          "sub": "Bác ghi lại ngày bắt đầu dùng mỗi đôi, và chạy với nó nhiều hay ít.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "And two pairs in turn, so each dries between runs. Handy in rainy season.",
          "sub": "Và hai đôi luân phiên để giày kịp khô giữa các buổi. Mùa mưa cảm ơn.",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "ref": "p23,p24"
    },
    {
      "id": "s23",
      "module": "BRK-11",
      "data": {
        "title": "3 dấu hiệu nên thay giày",
        "items": [
          "Chân mỏi, đau hơn dù không tăng tập",
          "Đế giữa nhăn sâu, ấn thấy xẹp",
          "Đế ngoài mòn rõ ở gót, mũi"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three: worn soles.",
          "sub": "Ba: đế ngoài mòn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: flat cushion.",
          "sub": "Hai: đệm xẹp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: sorer legs.",
          "sub": "Một: chân đau hơn.",
          "keys": [
            "chân đau hơn"
          ]
        }
      ],
      "ref": "p23"
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
            "text": "Lại một tối thứ Hai",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
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
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "running-shoe",
                "socks"
              ]
            },
            "at": "l1:phone",
            "caption": "Tối thứ Hai · vẫn trang giày ấy",
            "icon": "mobile-phone"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1260,
            "w": 50,
            "h": 50,
            "at": "l2:comfy",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1242,
            "size": 62,
            "at": "l2:comfy+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Vừa chân, êm ngay",
            "x": 8007,
            "y": 1252,
            "size": 46,
            "at": "l2:comfy+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1345,
            "w": 50,
            "h": 50,
            "at": "l2:thumb",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1327,
            "size": 62,
            "at": "l2:thumb+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Còn một ngón tay",
            "x": 8007,
            "y": 1337,
            "size": 46,
            "at": "l2:thumb+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1430,
            "w": 50,
            "h": 50,
            "at": "l2:heel",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1412,
            "size": 62,
            "at": "l2:heel+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Gót không trượt",
            "x": 8007,
            "y": 1422,
            "size": 46,
            "at": "l2:heel+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1515,
            "w": 50,
            "h": 50,
            "at": "l2:asphalt",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1497,
            "size": 62,
            "at": "l2:asphalt+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Hợp đường nhựa",
            "x": 8007,
            "y": 1507,
            "size": 46,
            "at": "l2:asphalt+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Giày dép còn có số”",
            "x": 7932,
            "y": 1630,
            "size": 52,
            "at": "l3:destiny",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "= số đo chân của bạn",
            "x": 7972,
            "y": 1710,
            "size": 50,
            "at": "l3:foot",
            "hl": [
              {
                "text": "chân của bạn",
                "at": "l3:foot"
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
          "say": "Back to a Monday night. Same phone, same shoe page.",
          "sub": "Lại một tối thứ Hai. Vẫn chiếc điện thoại, vẫn trang giày ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Comfy at once, one thumb at the tip, heel stays put, made for asphalt. Next!",
          "sub": "Êm ngay khi thử, mũi còn một ngón, gót không trượt, hợp đường nhựa. Tiếp!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Shoes do have their destiny. It's written in your own foot, not on the price tag.",
          "sub": "Giày dép đúng là “có số”. Số ấy ghi ở bàn chân bạn, không ở mác giá.",
          "keys": [
            "bàn chân bạn"
          ]
        }
      ],
      "ref": "outro"
    },
    {
      "id": "s25",
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
            "fit": "E",
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
            "x": 4726,
            "y": 690,
            "at": "l1:feet"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8572,
            "y": 260,
            "at": "l2:pinches"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2668,
            "y": 1340,
            "at": "l3:cheap"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "g-stop"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:check"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; bàn chân có vấn đề hoặc đau kéo dài, hỏi bác sĩ.",
            "x": 8752,
            "y": 1830,
            "size": 26,
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
          "say": "So: good shoes support your feet, not rushed training.",
          "sub": "Tóm lại: giày tốt đỡ bàn chân, không đỡ cách tập vội.",
          "keys": [
            "không đỡ cách tập vội"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Try in the afternoon. If it pinches now, it hurts later.",
          "sub": "Thử buổi chiều. Cấn lúc thử thì đau lúc chạy.",
          "keys": [
            "Cấn lúc thử"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And strangely cheap? Stop and check.",
          "sub": "Còn rẻ bất thường? Dừng lại kiểm tra.",
          "keys": [
            "Dừng lại kiểm tra"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p5,p14,p16,p20"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "ref": "questions[30]",
      "data": {
        "q": "You see unusually cheap running shoes online in a model you never tried, what should you do?",
        "options": [
          "Order your usual size right away before the low price disappears for good",
          "Stop and check, try that model in a shop, or buy where exchanges are allowed",
          "Order two sizes smaller, since shoes bought online always come out bigger"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "shopping-cart",
        "why": "Mỗi mẫu có dáng khác nhau, cùng số cỡ vẫn có thể chật."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You see unusually cheap running shoes online in a model you never tried, what should you do?",
          "sub": "Bạn thấy đôi giày chạy rẻ bất thường trên mạng, mẫu chưa từng thử, bạn nên làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Stop and check, try that model in a shop, or buy where exchanges are allowed.",
          "sub": "Dừng lại kiểm tra, thử mẫu đó ở cửa hàng, hoặc mua nơi cho đổi."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Every model has its own shape. The same size can still be tight.",
          "sub": "Mỗi mẫu một dáng, cùng số cỡ vẫn có thể chật."
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
        "text": "Chiều nay: mang tất chạy đi thử giày",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Try before you buy. Forty questions are waiting below.",
          "sub": "Thử trước rồi hãy mua. Bốn mươi câu hỏi đang chờ bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s24"
  }
};
