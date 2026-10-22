// Kịch bản video W lần 3 (#110) — "Cách giữ bình tĩnh khi cãi nhau hoặc bị nói nặng" · chuỗi "Xử lý xung đột và cuộc nói chuyện khó"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-stay-calm-in-an-argument--w01",
  "hook": "HOOK-06",
  "unit": {
    "audience": "people-in-conflict",
    "slug": "how-to-stay-calm-in-an-argument",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cách giữ bình tĩnh khi cãi nhau hoặc bị nói nặng",
    "series": "Xử lý xung đột và cuộc nói chuyện khó"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT NGÀY DÀI của Thảo (thứ Hai). Mở: 9:00 họp sáng, chị Hoa “Làm thế này thì lỗ”, mặt Thảo nóng bừng (neo: vài giây; ví von ấm nước sắp sôi) → ① 9:00 cơ thể báo động + 4 dấu hiệu (p1–p3) → ② 9:01 thở · hạ giọng · nhắc lại + “Khoan đã!” (p4–p8) → ③ 9:40 im lặng có phải thua, 3 lựa chọn (p9–p11) → ④ 12:00 Dũng bảo “bình tĩnh đi” + BRK-07 câu đố vợ chồng + BRK-10 dầu/nước (p12–p14) → ⑤ 15:00 đặt giới hạn qua điện thoại (p15–p16) → ⑥ 23:00 tin nhắn cho chị chồng + BRK-04 cách A/B + Dũng ghi một dòng (p17–p19, p23) → ⑦ 8:00 thứ Ba quay lại với chị Hoa + luyện thói quen + BRK-02 (p20–p24) → khép: 9:00 thứ Hai tuần sau, Thảo nhận ra tai nóng, nhắc lại ý. Nhân vật (3): Thảo, chị Hoa, Dũng (xem w145/_series/people-in-conflict.md); Đạt (p23) → Dũng ở quầy giao nhận; chồng/vợ (p13), chị chồng (p18), người gọi (p15) không lên hình. Bản cũ (W lần 3): w145/bak/how-to-stay-calm-in-an-argument--w01.js.",
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
            "text": "Vài giây",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l2:few seconds",
            "color": "accent",
            "hl": [
              {
                "text": "Vài giây",
                "at": "l2:few seconds"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "giữa câu bị chê và câu đáp",
            "x": 70,
            "y": 330,
            "size": 54,
            "at": "l2:between"
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: nóng tính là số phận",
            "x": 70,
            "y": 440,
            "size": 50,
            "at": "l3:fate",
            "color": "muted"
          },
          {
            "id": "a-mx",
            "t": "strike",
            "over": "a-myth",
            "at": "l3:end"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday, nine a.m. Someone is about to boil like a kettle.",
          "sub": "Thứ Hai, chín giờ sáng. Có người sắp sôi như ấm nước.",
          "keys": [
            "sắp sôi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This whole story fits in a few seconds, between the harsh words and the reply.",
          "sub": "Cả câu chuyện nằm gọn trong vài giây, giữa câu bị chê và câu đáp lại.",
          "keys": [
            "vài giây"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And no, a hot temper is not your fate.",
          "sub": "Và không, nóng tính không phải số phận."
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
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1:Hoa",
                  "pose": "cross"
                }
              ],
              "props": [
                "bar-chart",
                "memo"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "hoa"
                },
                {
                  "at": "l3",
                  "shot": "close",
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
            "at": "l1",
            "caption": "Thứ Hai 9:00 · họp sáng",
            "icon": "bar-chart"
          },
          {
            "id": "a-hot",
            "t": "text",
            "text": "Nói ra → to chuyện",
            "x": 70,
            "y": 540,
            "size": 46,
            "at": "l4:Speak",
            "color": "coral"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Im lặng → ấm ức",
            "x": 70,
            "y": 610,
            "size": 46,
            "at": "l4:quiet",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "This is Thảo, presenting her plan. And this is Ms Hoa, her manager.",
          "sub": "Đây là Thảo, đang trình bày kế hoạch. Còn đây là chị Hoa, trưởng phòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "This way we'll lose money. Did you calculate anything?",
          "sub": "Làm thế này thì lỗ, em có tính gì không đấy?",
          "face": "stern",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo's face burns. A reply is already on her tongue.",
          "sub": "Mặt Thảo nóng bừng. Câu đáp trả đã nằm sẵn đầu lưỡi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Speak, and it gets bigger. Stay quiet, and it hurts.",
          "sub": "Nói ra thì to chuyện. Im lặng thì ấm ức.",
          "keys": [
            "Im lặng thì ấm ức"
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
      "ref": "intro,p7"
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
            "text": "Phải chọn: nổ hay nín?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:explode",
            "hl": [
              {
                "text": "nổ hay nín",
                "at": "l1:explode"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải chọn!",
            "x": 2028,
            "y": 160,
            "size": 60,
            "at": "l1:choose",
            "color": "accent"
          },
          {
            "id": "b-c0",
            "t": "box",
            "x": 2028,
            "y": 290,
            "w": 46,
            "h": 46,
            "at": "l2:Notice",
            "stroke": 5
          },
          {
            "id": "b-k0",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 272,
            "size": 58,
            "at": "l2:Notice+600",
            "color": "accent"
          },
          {
            "id": "b-l0",
            "t": "text",
            "text": "Nhận ra cơn giận sớm",
            "x": 2098,
            "y": 280,
            "size": 50,
            "at": "l2:Notice+200"
          },
          {
            "id": "b-c1",
            "t": "box",
            "x": 2028,
            "y": 370,
            "w": 46,
            "h": 46,
            "at": "l2:breath",
            "stroke": 5
          },
          {
            "id": "b-k1",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 352,
            "size": 58,
            "at": "l2:breath+600",
            "color": "accent"
          },
          {
            "id": "b-l1",
            "t": "text",
            "text": "Thở ra một nhịp",
            "x": 2098,
            "y": 360,
            "size": 50,
            "at": "l2:breath+200"
          },
          {
            "id": "b-c2",
            "t": "box",
            "x": 2028,
            "y": 450,
            "w": 46,
            "h": 46,
            "at": "l3:choose",
            "stroke": 5
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 432,
            "size": 58,
            "at": "l3:choose+600",
            "color": "accent"
          },
          {
            "id": "b-l2",
            "t": "text",
            "text": "Tự chọn câu đáp",
            "x": 2098,
            "y": 440,
            "size": 50,
            "at": "l3:choose+200"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l4:seven stops+200",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2260,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l4:seven stops+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2492,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l4:seven stops+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2724,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l4:seven stops+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2956,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l4:seven stops+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3188,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l4:seven stops+1200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3420,
            "y": 610,
            "w": 212,
            "h": 90,
            "at": "l4:seven stops+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "9:00",
            "x": 2048,
            "y": 628,
            "size": 44,
            "at": "l4:seven stops+300"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "9:01",
            "x": 2280,
            "y": 628,
            "size": 44,
            "at": "l4:seven stops+500"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "9:40",
            "x": 2512,
            "y": 628,
            "size": 44,
            "at": "l4:seven stops+700"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "12:00",
            "x": 2744,
            "y": 628,
            "size": 44,
            "at": "l4:seven stops+900"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "15:00",
            "x": 2976,
            "y": 628,
            "size": 44,
            "at": "l4:seven stops+1100"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "23:00",
            "x": 3208,
            "y": 628,
            "size": 44,
            "at": "l4:seven stops+1300"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Sáng T3",
            "x": 3440,
            "y": 628,
            "size": 36,
            "at": "l4:seven stops+1500"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Explode, or stay silent? You don't have to choose.",
          "sub": "Nổ tung, hay nín thinh? Bạn không phải chọn một trong hai.",
          "keys": [
            "không phải chọn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Notice your anger early. Take one slow breath out.",
          "sub": "Nhận ra cơn giận sớm. Thở ra chậm một nhịp.",
          "keys": [
            "Nhận ra cơn giận sớm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then you choose the reply, not your reflex.",
          "sub": "Rồi tự mình chọn câu đáp, thay vì để phản xạ chọn giúp.",
          "keys": [
            "tự mình chọn câu đáp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One long day with Thảo, seven stops.",
          "sub": "Một ngày dài cùng Thảo, bảy chặng.",
          "keys": [
            "bảy chặng"
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
            "text": "① 9:00 · Cơ thể báo động",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-fire",
            "t": "illus",
            "name": "face-with-steam-from-nose",
            "x": 5186,
            "y": 140,
            "size": 230,
            "at": "l1:danger"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Tim nhanh · mặt nóng · giọng to",
            "x": 3996,
            "y": 160,
            "size": 48,
            "at": "l2:heart"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Phản xạ đánh trả: rất nhanh",
            "x": 3996,
            "y": 240,
            "size": 48,
            "at": "l3:reflex",
            "color": "coral",
            "hl": [
              {
                "text": "rất nhanh",
                "at": "l3:fast"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Suy nghĩ cân nhắc: chậm",
            "x": 3996,
            "y": 320,
            "size": 48,
            "at": "l3:thinking"
          },
          {
            "id": "c-sig",
            "t": "text",
            "text": "Cơn giận = tín hiệu, không phải lỗi",
            "x": 3996,
            "y": 420,
            "size": 44,
            "at": "l4:signal",
            "color": "accent",
            "hl": [
              {
                "text": "tín hiệu",
                "at": "l4:signal"
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
          "say": "Stop one, nine o'clock. Criticised in public, the body reacts as if in danger.",
          "sub": "Chặng một, chín giờ. Bị chê trước mặt người khác, cơ thể phản ứng như gặp nguy hiểm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Heart races, face burns, hands tighten, voice gets louder.",
          "sub": "Tim đập nhanh, mặt nóng, tay siết lại, giọng to lên."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Careful thinking slows down. The reflex to hit back, or walk off, is very fast.",
          "sub": "Suy nghĩ cân nhắc chậm đi. Phản xạ đánh trả hoặc bỏ đi lại rất nhanh.",
          "keys": [
            "Phản xạ đánh trả"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So go easy on yourself. Anger is not a fault. It's a signal.",
          "sub": "Nên đừng tự trách. Cơn giận không phải lỗi, nó là một tín hiệu.",
          "keys": [
            "một tín hiệu"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s04",
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
            "id": "c-c0",
            "t": "box",
            "x": 4836,
            "y": 430,
            "w": 46,
            "h": 46,
            "at": "l1:hot face",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4841,
            "y": 412,
            "size": 58,
            "at": "l1:hot face+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Mặt nóng, tai nóng",
            "x": 4906,
            "y": 420,
            "size": 42,
            "at": "l1:hot face+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 4836,
            "y": 502,
            "w": 46,
            "h": 46,
            "at": "l1:jaw",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4841,
            "y": 484,
            "size": 58,
            "at": "l1:jaw+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Nghiến răng, siết tay",
            "x": 4906,
            "y": 492,
            "size": 42,
            "at": "l1:jaw+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 4836,
            "y": 574,
            "w": 46,
            "h": 46,
            "at": "l2:faster",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4841,
            "y": 556,
            "size": 58,
            "at": "l2:faster+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Nói nhanh, to hơn",
            "x": 4906,
            "y": 564,
            "size": 42,
            "at": "l2:faster+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 4836,
            "y": 646,
            "w": 46,
            "h": 46,
            "at": "l2:interrupt",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4841,
            "y": 628,
            "size": 58,
            "at": "l2:interrupt+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Muốn ngắt lời ngay",
            "x": 4906,
            "y": 636,
            "size": 42,
            "at": "l2:interrupt+200"
          },
          {
            "id": "c-name",
            "t": "text",
            "text": "Gọi tên dấu hiệu = thêm vài giây",
            "x": 3996,
            "y": 520,
            "size": 42,
            "at": "l3:Name",
            "color": "accent",
            "hl": [
              {
                "text": "thêm vài giây",
                "at": "l3:few seconds"
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
          "say": "Know your own signs in advance. A hot face or ears. A tight jaw or fist.",
          "sub": "Hãy biết trước dấu hiệu của mình. Mặt nóng, tai nóng. Nghiến răng, siết tay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Talking faster and louder. Wanting to interrupt right now.",
          "sub": "Nói nhanh và to hơn. Muốn ngắt lời ngay."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Name the sign, and you win back a few seconds.",
          "sub": "Gọi được tên dấu hiệu là giành lại được vài giây.",
          "keys": [
            "giành lại được vài giây"
          ]
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 9:01 · Thở · hạ giọng · nhắc lại",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-ex",
            "t": "illus",
            "name": "face-exhaling",
            "x": 7154,
            "y": 140,
            "size": 220,
            "at": "l1:Breathe"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "1. Hít thường, thở ra dài hơn",
            "x": 5964,
            "y": 160,
            "size": 48,
            "at": "l1:longer",
            "hl": [
              {
                "text": "thở ra dài hơn",
                "at": "l1:longer"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "2. Nói chậm, nhỏ hơn một chút",
            "x": 5964,
            "y": 240,
            "size": 48,
            "at": "l2:Lower"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "3. “Ý chị là… phải không ạ?”",
            "x": 5964,
            "y": 320,
            "size": 48,
            "at": "l3:Repeat",
            "color": "accent",
            "hl": [
              {
                "text": "Ý chị là",
                "at": "l3:Repeat"
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
          "say": "Stop two, one minute later. Breathe in normally, breathe out longer. Once.",
          "sub": "Chặng hai, một phút sau. Hít vào bình thường, thở ra dài hơn. Một lần thôi.",
          "keys": [
            "thở ra dài hơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lower your voice. A slower voice calms your feelings, and it's hard to shout at a steady voice.",
          "sub": "Hạ giọng. Giọng chậm lại thì lòng cũng dịu, và khó ai gắt to trước một giọng nói đều."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Repeat their point in one sentence. It buys time, and brings the talk back to facts.",
          "sub": "Nhắc lại ý người kia trong một câu. Vừa câu giờ, vừa kéo câu chuyện về đúng sự việc.",
          "keys": [
            "Nhắc lại ý người kia"
          ]
        }
      ],
      "ref": "p4,p5,p6"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "Thứ Hai 9:01 · phòng họp",
        "actors": [
          {
            "id": "thao",
            "side": "left",
            "pose": "explain"
          },
          {
            "id": "hoa",
            "side": "right",
            "pose": "cross"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đáp trả ngay khi đang nóng",
          "why": "Chuyện số liệu thành chuyện thể diện, không ai bàn kế hoạch nữa.",
          "rule": "Thở ra một nhịp, gọi tên mối lo"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "I did! You haven't even read it all, and you're judging.",
          "sub": "Em tính kỹ rồi, chị chưa đọc hết đã chê.",
          "face": "stern",
          "pose": "point",
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
          "say": "Now numbers become a fight about face. Nobody discusses the plan anymore.",
          "sub": "Số liệu thành chuyện thể diện. Chẳng ai bàn kế hoạch nữa.",
          "keys": [
            "chuyện thể diện"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind. One slow breath out.",
          "sub": "Tua lại. Thở ra chậm một nhịp.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "You're worried about the costs, right? I'll send you the spreadsheet after the meeting.",
          "sub": "Dạ, chị lo phần chi phí phải không ạ? Em gửi chị bảng tính ngay sau họp.",
          "phase": "redo",
          "face": "neutral",
          "pose": "hold"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Good. Send it today.",
          "sub": "Được. Gửi chị trong hôm nay nhé.",
          "phase": "redo",
          "face": "thinking",
          "pose": "thumb"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p7"
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
            "text": "Gọi tên mối lo + hứa bằng chứng",
            "x": 5964,
            "y": 430,
            "size": 44,
            "at": "l1:worry"
          },
          {
            "id": "d-rule",
            "t": "text",
            "text": "1 nhịp thở, đổi 1 câu",
            "x": 5964,
            "y": 540,
            "size": 60,
            "at": "l2:One breath",
            "color": "accent",
            "hl": [
              {
                "text": "đổi 1 câu",
                "at": "l2:sentence"
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
          "say": "She named the boss's worry, and promised proof. The talk stays with the numbers.",
          "sub": "Cô gọi tên mối lo của sếp và hứa đưa bằng chứng. Cuộc bàn vẫn ở lại với con số."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One breath out can change one sentence.",
          "sub": "Thở ra một nhịp, đổi được một câu.",
          "keys": [
            "đổi được một câu"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 9:40 · Im lặng là thua?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "Bình tĩnh ≠ nuốt giận",
            "x": 7932,
            "y": 160,
            "size": 54,
            "at": "l1:swallowing",
            "color": "accent",
            "hl": [
              {
                "text": "≠ nuốt giận",
                "at": "l1:swallowing"
              }
            ]
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "1. Đáp ngắn, đúng vấn đề",
            "x": 7932,
            "y": 260,
            "size": 46,
            "at": "l2:briefly"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "2. Hẹn nói riêng",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "l2:privately"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "3. Xin thời gian xem lại",
            "x": 7932,
            "y": 400,
            "size": 46,
            "at": "l2:check"
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
                  "enter": "pop",
                  "at": "l3",
                  "pose": "phone"
                }
              ],
              "props": [
                "memo",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "thao"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3",
            "caption": "Thứ Hai 9:40 · sau họp",
            "icon": "memo"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, after the meeting. Is staying calm losing? No. Calm is not swallowing anger.",
          "sub": "Chặng ba, sau buổi họp. Bình tĩnh có phải chịu thua? Không. Bình tĩnh không phải nuốt giận.",
          "keys": [
            "không phải nuốt giận"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After the breath, three choices: answer briefly, talk privately, or ask for time to check.",
          "sub": "Sau nhịp thở, có ba lựa chọn: trả lời ngắn, hẹn nói riêng, hoặc xin thời gian kiểm tra lại.",
          "keys": [
            "ba lựa chọn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Let me check again, and get back to you this afternoon.",
          "sub": "Em xin xem lại rồi trả lời chị trong chiều nay ạ.",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Can we talk about this privately after the meeting?",
          "sub": "Chuyện này mình nói riêng sau buổi họp được không chị?",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Neither backs down. They move the talk to a cooler moment.",
          "sub": "Cả hai câu đều không lùi bước, chỉ dời cuộc nói chuyện sang lúc bớt nóng.",
          "keys": [
            "lúc bớt nóng"
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
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-feel",
            "t": "text",
            "text": "“Câu đó làm em hơi chạnh lòng”",
            "x": 7932,
            "y": 500,
            "size": 44,
            "at": "l1:hurt",
            "color": "accent",
            "hl": [
              {
                "text": "chạnh lòng",
                "at": "l1:hurt"
              }
            ]
          },
          {
            "id": "e-own",
            "t": "text",
            "text": "Nói bằng lời, không bằng giọng quát",
            "x": 8752,
            "y": 705,
            "size": 40,
            "at": "l2:words"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "You can still say how you feel: that comment hurt me a little.",
          "sub": "Bạn vẫn được nói ra cảm xúc: câu đó làm em hơi chạnh lòng.",
          "keys": [
            "hơi chạnh lòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In words, not by shouting. That shows you're in control of it.",
          "sub": "Bằng lời, không bằng giọng quát. Đó là dấu hiệu bạn đang làm chủ nó."
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
            "text": "④ 12:00 · “Bình tĩnh đi!”",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "stern"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1:Dũng",
                  "face": "happy"
                }
              ],
              "props": [
                "hot-beverage",
                "fire"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "Thứ Hai 12:00 · quán cơm",
            "icon": "fire"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Cười trừ → bị coi thường",
            "x": 60,
            "y": 1250,
            "size": 48,
            "at": "l5:Laughing",
            "color": "coral"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "“Bình tĩnh đi” → giận hơn",
            "x": 60,
            "y": 1330,
            "size": 48,
            "at": "l5:calm down",
            "color": "coral"
          },
          {
            "id": "f-ok",
            "t": "text",
            "text": "“Em thấy chuyện này quan trọng”",
            "x": 60,
            "y": 1430,
            "size": 44,
            "at": "l6:matters",
            "color": "accent",
            "hl": [
              {
                "text": "quan trọng",
                "at": "l6:matters"
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
          "say": "Stop four, lunch. Meet Dũng, her colleague from operations, quick with a joke.",
          "sub": "Chặng bốn, giờ trưa. Đây là Dũng, đồng nghiệp bên vận hành, nhanh mồm nhanh miệng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "She said it in front of everyone!",
          "sub": "Chị ấy nói thế trước mặt cả phòng!",
          "face": "stern",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Ha ha! Relax, chị. Calm down.",
          "sub": "Ha ha! Thôi mà chị. Bình tĩnh đi.",
          "face": "happy",
          "pose": "shrug"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Calm down? I am calm!",
          "sub": "Bình tĩnh á? Chị đang bình tĩnh đây!",
          "face": "stern",
          "pose": "point"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two habits to avoid. Laughing it off feels dismissive. Calm down usually adds anger.",
          "sub": "Hai phản ứng nên tránh. Cười trừ thì người kia thấy bị coi thường. Bảo “bình tĩnh đi” thường làm họ giận hơn."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Instead: I can see this matters to you.",
          "sub": "Thay vào đó: em thấy chuyện này quan trọng với chị.",
          "keys": [
            "quan trọng với chị"
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
      "ref": "p12"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "kicker": "Thử nghĩ xem…",
        "question": "Vợ nói to dần, chồng khoanh tay: “Em bình tĩnh đi”. Rồi sao?",
        "illus": "thinking-face"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A couple argue about money sent home.",
          "sub": "Hai vợ chồng cãi nhau về khoản tiền gửi về quê."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He crosses his arms: calm down. Then what?",
          "sub": "Chồng khoanh tay: em bình tĩnh đi. Rồi sao?",
          "keys": [
            "Rồi sao"
          ]
        }
      ],
      "ref": "p13"
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
            "id": "f-why",
            "t": "text",
            "text": "Bị chê vô lý, giọng chưa hạ",
            "x": 60,
            "y": 1530,
            "size": 42,
            "at": "l1:unreasonable"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "“Em lo nhất điều gì?”",
            "x": 60,
            "y": 1610,
            "size": 52,
            "at": "l2:worries",
            "color": "accent",
            "hl": [
              {
                "text": "lo nhất",
                "at": "l2:worries"
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
          "say": "She gets louder. She feels judged as unreasonable, and his voice hasn't come down.",
          "sub": "Vợ càng nói to. Cô thấy mình bị chê vô lý, trong khi giọng chồng vẫn chưa hạ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Better: slow down yourself, and ask: what worries you most about this money?",
          "sub": "Tốt hơn: tự mình nói chậm lại, và hỏi: em lo nhất điều gì trong khoản này?",
          "keys": [
            "em lo nhất điều gì"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s13",
      "module": "BRK-10",
      "data": {
        "quote": "Bảo người khác bình tĩnh là đổ thêm dầu, tự mình bình tĩnh mới là nước",
        "mark": "tự mình bình tĩnh",
        "by": "Rút ra",
        "illus": "droplet"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Telling others to calm down adds oil to the fire.",
          "sub": "Bảo người khác bình tĩnh là đổ thêm dầu vào lửa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Calming yourself is the water.",
          "sub": "Tự mình bình tĩnh mới là nước.",
          "keys": [
            "Tự mình bình tĩnh"
          ]
        }
      ],
      "ref": "p14"
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
            "text": "⑤ 15:00 · Đặt giới hạn",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
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
                  "side": "center",
                  "pose": "phone",
                  "face": "stern"
                }
              ],
              "props": [
                "telephone-receiver",
                "stop-sign"
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
            "at": "l1:phone",
            "caption": "Thứ Hai 15:00 · cuộc gọi khó",
            "icon": "telephone-receiver"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Nói một lần, rõ ràng",
            "x": 2028,
            "y": 1250,
            "size": 50,
            "at": "l1:once",
            "hl": [
              {
                "text": "một lần",
                "at": "l1:once"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Rời đi bình thường",
            "x": 2028,
            "y": 1330,
            "size": 50,
            "at": "l3:leave",
            "color": "accent"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Không đóng sầm cửa",
            "x": 2028,
            "y": 1405,
            "size": 46,
            "at": "l3:slamming",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, three p.m. A caller keeps insulting her on the phone. She can set a limit, once, clearly.",
          "sub": "Chặng năm, ba giờ chiều. Người gọi cứ xúc phạm qua điện thoại. Cô có quyền đặt giới hạn, một lần, rõ ràng.",
          "keys": [
            "đặt giới hạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I want to keep talking, but not like this. Let's talk again later.",
          "sub": "Em muốn nói tiếp, nhưng không phải theo cách này. Mình nói lại sau nhé.",
          "face": "stern",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then leave normally. No slamming the door.",
          "sub": "Rồi rời đi bình thường. Không đóng sầm cửa."
        }
      ],
      "ref": "p15"
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
            "id": "g-log",
            "t": "text",
            "text": "Lặp lại: ghi ngày, câu, nhân chứng",
            "x": 2028,
            "y": 1510,
            "size": 40,
            "at": "l1:dates"
          },
          {
            "id": "g-hr",
            "t": "text",
            "text": "→ báo quản lý / nhân sự",
            "x": 2028,
            "y": 1580,
            "size": 44,
            "at": "l1:HR"
          },
          {
            "id": "g-safe",
            "t": "text",
            "text": "Bị đe doạ: an toàn trước",
            "x": 2848,
            "y": 1795,
            "size": 40,
            "at": "l2:safety",
            "color": "coral",
            "hl": [
              {
                "text": "an toàn trước",
                "at": "l2:safety"
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
          "say": "If it keeps happening at work, note dates, words and witnesses. Then tell a manager or HR.",
          "sub": "Nếu lặp lại ở chỗ làm, ghi ngày giờ, câu nói, người chứng kiến, rồi báo quản lý hoặc nhân sự."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "At home, threats or violence? Your safety comes first. Move away, get trusted help, call the police if in danger.",
          "sub": "Ở nhà mà có đe doạ, động tay chân? An toàn của bạn đứng trước. Tránh ra chỗ khác, nhờ người tin cậy, gọi công an nếu nguy hiểm.",
          "keys": [
            "An toàn của bạn đứng trước"
          ]
        }
      ],
      "ref": "p16"
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
            "text": "⑥ 23:00 · Về nhà vẫn tức",
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "stern"
                }
              ],
              "props": [
                "mobile-phone",
                "crescent-moon"
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
            "at": "l1:eleven",
            "caption": "Thứ Hai 23:00 · điện thoại trong tay",
            "icon": "mobile-phone"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Chữ viết ở lại rất lâu",
            "x": 3996,
            "y": 1250,
            "size": 50,
            "at": "l3:stay",
            "hl": [
              {
                "text": "ở lại rất lâu",
                "at": "l3:long time"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Viết nháp: được · Gửi lúc giận: không",
            "x": 3996,
            "y": 1330,
            "size": 40,
            "at": "l3:draft"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, eleven p.m. At Sunday's family memorial, her sister-in-law made hurtful hints. Tonight it still stings.",
          "sub": "Chặng sáu, mười một giờ đêm. Ở bữa giỗ hôm Chủ nhật, chị chồng nói xa nói gần. Tối nay Thảo vẫn ấm ức."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'll tell her everything. Years of it.",
          "sub": "Mình sẽ kể hết. Bao nhiêu năm nay.",
          "face": "stern",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Careful. Written words stay a long time. A draft is fine. Sending in anger is not.",
          "sub": "Khoan. Chữ viết ở lại rất lâu. Viết nháp thì được. Gửi lúc đang giận thì không.",
          "keys": [
            "Chữ viết ở lại rất lâu"
          ]
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s17",
      "module": "BRK-04",
      "data": {
        "title": "Tin nhắn cho chị chồng",
        "wrong": "11 giờ đêm: tin dài kể hết mấy năm",
        "right": "Ngủ một đêm, nói riêng một câu ngắn",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrongIllus": "mobile-phone",
        "rightIllus": "sleeping-face"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A: a long midnight message. All judge the tone.",
          "sub": "A: tin dài lúc nửa đêm. Cả nhà chỉ bàn giọng điệu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "B: sleep on it. One short line.",
          "sub": "B: ngủ một đêm, nói riêng một câu ngắn.",
          "keys": [
            "nói riêng một câu ngắn"
          ]
        }
      ],
      "ref": "p18"
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
            "id": "h-focus",
            "t": "text",
            "text": "Trọng tâm: điều làm mình buồn",
            "x": 3996,
            "y": 1430,
            "size": 44,
            "at": "l1:hurt"
          },
          {
            "id": "h-rule",
            "t": "text",
            "text": "Giận thì viết nháp, nguội mới gửi",
            "x": 3996,
            "y": 1520,
            "size": 48,
            "at": "l2:draft",
            "color": "accent",
            "hl": [
              {
                "text": "nguội mới gửi",
                "at": "l2:cool down"
              }
            ]
          },
          {
            "id": "h-dung",
            "t": "illus",
            "name": "writing-hand",
            "x": 3996,
            "y": 1610,
            "size": 90,
            "at": "l3:Dũng"
          },
          {
            "id": "h-log",
            "t": "text",
            "text": "Dũng: mỗi tối 1 dòng",
            "x": 4106,
            "y": 1630,
            "size": 46,
            "at": "l3:one line",
            "hl": [
              {
                "text": "1 dòng",
                "at": "l3:one line"
              }
            ]
          },
          {
            "id": "h-log2",
            "t": "text",
            "text": "câu nóng · đã đáp · câu tốt hơn",
            "x": 4816,
            "y": 1795,
            "size": 40,
            "at": "l4:better"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "In B, the focus stays on what hurt, not on her anger.",
          "sub": "Ở cách B, trọng tâm vẫn là điều làm cô buồn, không phải cơn giận của cô."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Angry? Write a draft. Send it only after you cool down.",
          "sub": "Giận thì viết nháp, nguội rồi mới gửi.",
          "keys": [
            "nguội rồi mới gửi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Across town, Dũng writes one line too. He often snaps at difficult customers at the delivery desk.",
          "sub": "Cùng lúc, Dũng cũng ghi một dòng. Cậu hay nổi nóng với khách khó tính ở quầy giao nhận."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "What made me angry, what I said, and what would be better.",
          "sub": "Hôm nay câu nào làm mình nóng, mình đã đáp gì, và câu nào sẽ tốt hơn."
        }
      ],
      "ref": "p18,p19,p23"
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 8:00 thứ Ba · Quay lại",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "hot-beverage",
                "memo"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao"
                },
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Ms Hoa",
            "caption": "Thứ Ba 8:00 · bàn chị Hoa",
            "icon": "hot-beverage"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Bình tĩnh ≠ bỏ qua mãi mãi",
            "x": 5964,
            "y": 1250,
            "size": 48,
            "at": "l1:forever",
            "hl": [
              {
                "text": "bỏ qua mãi mãi",
                "at": "l1:forever"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Nguội rồi → câu mở nhẹ",
            "x": 5964,
            "y": 1330,
            "size": 48,
            "at": "l4:gently",
            "color": "accent",
            "hl": [
              {
                "text": "câu mở nhẹ",
                "at": "l4:gently"
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
          "say": "Stop seven, Tuesday morning. Staying calm doesn't mean letting it go forever. Thảo finds Ms Hoa.",
          "sub": "Chặng bảy, sáng thứ Ba. Bình tĩnh lúc đó không có nghĩa là bỏ qua mãi mãi. Thảo tìm chị Hoa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Yesterday that comment bothered me a bit. Could we talk about it again?",
          "sub": "Hôm qua em hơi khó chịu với câu đó, mình nói lại một chút được không chị?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Fair enough. I was too sharp. Your spreadsheet was good.",
          "sub": "Ừ, chị nói hơi gắt. Bảng tính của em ổn đấy.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Cooled down, she came back gently.",
          "sub": "Nguội rồi, cô quay lại vấn đề bằng một câu mở nhẹ.",
          "keys": [
            "câu mở nhẹ"
          ]
        }
      ],
      "ref": "p20"
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
            "id": "i-tend",
            "t": "text",
            "text": "Tính khí = xu hướng",
            "x": 5964,
            "y": 1430,
            "size": 50,
            "at": "l1:tendency"
          },
          {
            "id": "i-hab",
            "t": "text",
            "text": "Cách phản ứng = thói quen",
            "x": 5964,
            "y": 1510,
            "size": 50,
            "at": "l1:habit",
            "color": "accent",
            "hl": [
              {
                "text": "thói quen",
                "at": "l1:habit"
              }
            ]
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1605,
            "w": 46,
            "h": 46,
            "at": "l2:two",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1587,
            "size": 58,
            "at": "l2:two+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Ghi 2 dấu hiệu cơ thể",
            "x": 6034,
            "y": 1595,
            "size": 38,
            "at": "l2:two+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1667,
            "w": 46,
            "h": 46,
            "at": "l2:phone rings",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1649,
            "size": 58,
            "at": "l2:phone rings+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Thở ra dài khi điện thoại reo",
            "x": 6034,
            "y": 1657,
            "size": 38,
            "at": "l2:phone rings+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1729,
            "w": 46,
            "h": 46,
            "at": "l3:repeats",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 1711,
            "size": 58,
            "at": "l3:repeats+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Thuộc một câu nhắc lại ý",
            "x": 6034,
            "y": 1719,
            "size": 38,
            "at": "l3:repeats+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Hot-tempered since childhood? Temper is a tendency. How you react is a habit, and habits train.",
          "sub": "Nóng tính từ nhỏ? Tính khí là xu hướng. Cách phản ứng là thói quen, mà thói quen thì luyện được.",
          "keys": [
            "thói quen thì luyện được"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write down two body signs. Practise a long breath out each time your phone rings.",
          "sub": "Ghi lại hai dấu hiệu cơ thể. Tập thở ra dài mỗi khi điện thoại reo."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Learn one sentence that repeats someone's point. After each tense moment, ask: what would I say next time?",
          "sub": "Thuộc một câu nhắc lại ý người khác. Sau mỗi lần căng thẳng, tự hỏi: lần sau mình sẽ nói gì?"
        }
      ],
      "ref": "p21,p22"
    },
    {
      "id": "s21",
      "module": "BRK-02",
      "data": {
        "kicker": "Vài tuần sau",
        "title": "Nóng là tính, cách đáp là thói quen",
        "hl": "thói quen",
        "sub": "Tai nóng trước khi kịp nói: đủ để dừng một nhịp"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Weeks later, Dũng's ears warn him first.",
          "sub": "Vài tuần sau, tai Dũng nóng lên trước khi kịp nói."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Temper is nature. The reply is habit.",
          "sub": "Nóng tính là tính, cách đáp là thói quen.",
          "keys": [
            "cách đáp là thói quen"
          ]
        }
      ],
      "ref": "p23,p24"
    },
    {
      "id": "s22",
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
            "text": "Thứ Hai tuần sau · 9:00",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "point",
                  "face": "stern"
                }
              ],
              "props": [
                "bar-chart",
                "memo"
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
                  "shot": "close",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:same",
            "caption": "Thứ Hai · 9:00 · cùng phòng họp",
            "icon": "bar-chart"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Tai nóng → nhận ra ✓",
            "x": 7932,
            "y": 1270,
            "size": 54,
            "at": "l3:ears",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Thở ra → nhắc lại ý ✓",
            "x": 7932,
            "y": 1360,
            "size": 54,
            "at": "l4:page",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday again. Same room, same nine a.m. The kettle is back on.",
          "sub": "Lại thứ Hai. Vẫn phòng ấy, vẫn chín giờ ấy. Ấm nước lại được bắc lên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "This page again? These numbers look wrong.",
          "sub": "Lại trang này à? Số liệu trông sai sai.",
          "face": "stern",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo's ears get hot. She notices. One slow breath out.",
          "sub": "Tai Thảo nóng lên. Cô nhận ra. Thở ra chậm một nhịp.",
          "keys": [
            "Cô nhận ra"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "You mean the numbers on page three aren't right, is that it?",
          "sub": "Ý chị là số liệu ở trang ba chưa đúng, phải không ạ?",
          "face": "neutral",
          "pose": "hold"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The kettle never boils. She chose her reply herself.",
          "sub": "Ấm nước chẳng sôi. Cô tự chọn câu đáp của mình.",
          "keys": [
            "tự chọn câu đáp"
          ]
        }
      ],
      "ref": "outro,p6"
    },
    {
      "id": "s23",
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
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l4",
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
            "y": 420,
            "at": "l1:notice+500"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6664,
            "y": 150,
            "at": "l2:breathe+500"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6724,
            "y": 310,
            "at": "l3:repeat+500"
          },
          {
            "id": "z-s1",
            "t": "text",
            "text": "Tiếp theo: khi nào nên tạm dừng cuộc nói chuyện",
            "x": 7932,
            "y": 1560,
            "size": 32,
            "at": "l4:next+600",
            "font": "base"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; khi có đe doạ hay bạo lực, hãy tìm người tin cậy hoặc cơ quan chức năng.",
            "x": 7932,
            "y": 1810,
            "size": 26,
            "at": "l4:end",
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
          "say": "So: notice the sign.",
          "sub": "Tóm lại: nhận ra dấu hiệu.",
          "keys": [
            "nhận ra dấu hiệu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Breathe out once.",
          "sub": "Thở ra một nhịp.",
          "keys": [
            "Thở ra một nhịp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Repeat their point, then answer.",
          "sub": "Nhắc lại ý người kia, rồi mới đáp.",
          "keys": [
            "rồi mới đáp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sometimes a breath isn't enough. The next lesson: when to pause.",
          "sub": "Có lúc thở thôi chưa đủ. Bài tiếp theo: khi nào nên tạm dừng."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s33",
      "module": "QUIZ-01",
      "ref": "questions[29]",
      "data": {
        "q": "You say you have been short tempered since childhood, can this change?",
        "options": [
          "Only if you stop feeling angry completely, which takes many years of study",
          "Yes, your temper is a tendency, but how you react is a habit you can train",
          "No, people are born a certain way and nothing they practise will help"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "face-exhaling",
        "why": "Tính khí là xu hướng, cách phản ứng là thói quen luyện được."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You say you have been short tempered since childhood, can this change?",
          "sub": "Bạn nói mình nóng tính từ nhỏ, điều này có thay đổi được không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Yes, your temper is a tendency, but how you react is a habit you can train.",
          "sub": "Có. Tính khí là xu hướng, còn cách phản ứng là thói quen luyện được."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "You don't need to stop feeling angry. Just notice it a little earlier each time.",
          "sub": "Không cần hết giận, chỉ cần nhận ra sớm hơn mỗi lần một chút."
        }
      ]
    },
    {
      "id": "s34",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Giữ vài giây đầu tiên"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Take a breath, then try the forty questions below.",
          "sub": "Thở một nhịp, rồi thử bốn mươi câu hỏi bên dưới nhé."
        }
      ]
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
