// Kịch bản video W lần 3 (#110) — "Cách xử lý khi khách hàng nổi giận" · chuỗi "Phục vụ khách hàng và xử lý khiếu nại"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-handle-an-angry-customer--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "frontline-staff",
    "slug": "how-to-handle-an-angry-customer",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cách xử lý khi khách hàng nổi giận",
    "series": "Phục vụ khách hàng và xử lý khiếu nại"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo MỘT THỨ HAI SAU ĐỢT KHUYẾN MÃI của Dũng ở cửa hàng An Phát (8:00 tổng đài → 8:05 lần gọi thứ ba → 10:00 quầy bảo hành + “Khoan đã!” máy sấy → 13:00 kế hoạch khi không có quyền + chuyện tháng trước → 15:00 quầy thu ngân, gọi quản lý → 17:00 bị xúc phạm → 21:00 hết ca → vài ngày sau gọi lại cho Thảo). Mở: “Lần thứ 3” + ca dao “Một điều nhịn, chín điều lành”; khép: cùng tổng đài, lần này Dũng là người gọi, “nhịn để nghe, không phải để chịu chửi”. Nhân vật (luật đổi tên của chuỗi, w145/_series/frontline-staff.md): Dũng (nhân viên tổng đài p4, Sơn p9, Kha p14 thành chuyện tháng trước của Dũng, người bị xúc phạm p20), Thảo (chị khách máy sấy p9, chị khách bị tính tiền hai lần p18), Lan (nhân viên thu ngân p18), Cô Hoa (quản lý p18, trưởng ca p27). Anh khách gọi lần ba và người xúc phạm không lên hình. Cảnh ngắt nhịp: BRK-04 (câu đầu: đổ xăng / dập lửa p3), BRK-02 (rút ra p15), BRK-07 (rehook bị chửi p20). Câu đố: questions[10] (p11). Bản cũ (W lần 3, #110): w145/bak/how-to-handle-an-angry-customer--w01.js.",
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
            "text": "Lần thứ 3",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l1:third",
            "color": "accent",
            "hl": [
              {
                "text": "3",
                "at": "l1:third"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "vì cùng một hoá đơn sai",
            "x": 70,
            "y": 300,
            "size": 46,
            "at": "l1:bill"
          },
          {
            "id": "a-wr",
            "t": "text",
            "text": "Ta tưởng: “Anh bình tĩnh ạ”?",
            "x": 70,
            "y": 400,
            "size": 50,
            "at": "l2:calm",
            "color": "muted"
          },
          {
            "id": "a-wrx",
            "t": "strike",
            "over": "a-wr",
            "at": "l3:fuel"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The third call, about the same wrong bill. You can hear the steam through the phone.",
          "sub": "Cuộc gọi thứ ba, vì cùng một hoá đơn sai. Nghe được cả tiếng bốc khói qua điện thoại.",
          "keys": [
            "Cuộc gọi thứ ba"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Our reflex? Please calm down, sir.",
          "sub": "Phản xạ của ta? “Anh bình tĩnh ạ.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That's not water. That's fuel.",
          "sub": "Câu đó không phải nước. Là xăng.",
          "keys": [
            "Là xăng"
          ]
        }
      ],
      "ref": "intro,p4"
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
                }
              ],
              "props": [
                "telephone-receiver",
                "receipt"
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
            "at": "l1",
            "caption": "Thứ Hai 8:00 · sau đợt khuyến mãi",
            "icon": "telephone-receiver"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Một điều nhịn, chín điều lành”",
            "x": 60,
            "y": 520,
            "size": 48,
            "at": "l4:patience",
            "color": "accent",
            "hl": [
              {
                "text": "nhịn",
                "at": "l4:patience"
              }
            ]
          },
          {
            "id": "a-plan",
            "t": "text",
            "text": "Kế hoạch: nói trước, nghe sau",
            "x": 900,
            "y": 660,
            "size": 44,
            "at": "l5:talking",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, on the An Phát hotline. Monday, right after a big sale.",
          "sub": "Đây là Dũng, trực tổng đài An Phát. Thứ Hai, ngay sau đợt khuyến mãi lớn.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fast hands, faster mouth.",
          "sub": "Tay nhanh, miệng nhanh hơn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Angry customers? Easy. I'll just explain the rules fast.",
          "sub": "Khách giận á? Dễ. Em giải thích quy định thật nhanh là xong.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Grandma says: one moment of patience, nine moments of peace.",
          "sub": "Ông bà dặn: “Một điều nhịn, chín điều lành.”",
          "keys": [
            "Một điều nhịn, chín điều lành"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Dũng's version: one breath of talking, nine complaints.",
          "sub": "Bản của Dũng: một hơi nói, chín cái khiếu nại.",
          "keys": [
            "chín cái khiếu nại"
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
            "text": "Khách nổi giận: làm gì trước?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:angry",
            "hl": [
              {
                "text": "làm gì trước",
                "at": "l1:first"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Nghe hết",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:listen",
            "color": "accent"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Ghi nhận cảm xúc",
            "x": 2028,
            "y": 245,
            "size": 50,
            "at": "l2:feelings"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Nói rõ việc làm, lúc xong",
            "x": 2028,
            "y": 320,
            "size": 50,
            "at": "l2:what"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "④ Gọi người có quyền",
            "x": 2868,
            "y": 245,
            "size": 50,
            "at": "l3:power"
          },
          {
            "id": "b-5",
            "t": "text",
            "text": "⑤ Liên hệ lại",
            "x": 2868,
            "y": 320,
            "size": 50,
            "at": "l3:back",
            "color": "accent"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "6 chặng, 1 ngày của Dũng",
            "x": 2028,
            "y": 545,
            "size": 52,
            "at": "l4:six stops",
            "hl": [
              {
                "text": "1 ngày",
                "at": "l4:one day"
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
            "at": "l4:six stops+300",
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
            "at": "l4:six stops+450",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l4:six stops+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l4:six stops+750",
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
            "at": "l4:six stops+900",
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
            "at": "l4:six stops+1050",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "8:05",
            "x": 2078,
            "y": 628,
            "size": 48,
            "at": "l4:six stops+400"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "10:00",
            "x": 2333,
            "y": 628,
            "size": 48,
            "at": "l4:six stops+550"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "13:00",
            "x": 2603,
            "y": 628,
            "size": 48,
            "at": "l4:six stops+700"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "15:00",
            "x": 2873,
            "y": 628,
            "size": 48,
            "at": "l4:six stops+850"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "17:00",
            "x": 3143,
            "y": 628,
            "size": 48,
            "at": "l4:six stops+1000"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "21:00",
            "x": 3413,
            "y": 628,
            "size": 48,
            "at": "l4:six stops+1150"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, an angry customer. What do you do first?",
          "sub": "Vậy khách nổi giận, mình làm gì trước?",
          "keys": [
            "làm gì trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "There's a steady rhythm: listen fully, accept the feelings, say what you'll do and when.",
          "sub": "Có một nhịp khá chắc: nghe hết, ghi nhận cảm xúc, nói rõ việc sẽ làm và lúc nào xong.",
          "keys": [
            "nghe hết"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Call someone with power when needed. Then get back to them.",
          "sub": "Gọi người có quyền khi cần. Rồi liên hệ lại."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Let's follow one day of Dũng, in six stops.",
          "sub": "Theo Dũng qua một ngày, sáu chặng."
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
          },
          {
            "at": "l5",
            "fit": [
              "c-v"
            ],
            "zoom": 1.3,
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
            "text": "① 8:05 · Lần gọi thứ ba",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:stop one"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "telephone-receiver",
                "receipt"
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
                  "shot": "medium",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:stop one",
            "caption": "8:05 · tổng đài",
            "icon": "telephone-receiver"
          },
          {
            "id": "c-bad",
            "t": "text",
            "text": "Chen ngang: “bình tĩnh ạ”",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l3:snaps",
            "color": "coral"
          },
          {
            "id": "c-badx",
            "t": "strike",
            "over": "c-bad",
            "at": "l3:boss"
          },
          {
            "id": "c-good",
            "t": "text",
            "text": "Nghe hết + “em mở hoá đơn ngay”",
            "x": 3996,
            "y": 250,
            "size": 42,
            "at": "l6:heard",
            "color": "accent",
            "hl": [
              {
                "text": "ngay",
                "at": "l6:moving"
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
          "say": "Stop one, eight oh five. The man is two sentences in when Dũng cuts in.",
          "sub": "Chặng một, tám giờ năm. Anh khách vừa nói hai câu, Dũng đã chen vào."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Please calm down, sir. Let me explain.",
          "sub": "Anh bình tĩnh ạ, để em giải thích.",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "He snaps: get me your boss. Now!",
          "sub": "Đầu dây gắt lên: “Cho tôi gặp cấp trên. Ngay!”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind. This time, Dũng lets him finish.",
          "sub": "Tua lại. Lần này, Dũng để khách nói hết."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Sorry you had to call three times. I'm opening your bill now.",
          "sub": "Xin lỗi anh phải gọi đến lần thứ ba. Em mở hoá đơn ngay ạ.",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Now he feels heard, and the work is moving.",
          "sub": "Giờ khách thấy được nghe, và việc đang được làm.",
          "keys": [
            "được nghe"
          ]
        }
      ],
      "ref": "p4"
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
            "id": "c-1",
            "t": "text",
            "text": "Thở chậm, để khách nói hết",
            "x": 3996,
            "y": 340,
            "size": 46,
            "at": "l1:breath",
            "hl": [
              {
                "text": "nói hết",
                "at": "l1:finish"
              }
            ]
          },
          {
            "id": "c-n",
            "t": "text",
            "text": "Vừa nghe, vừa ghi:",
            "x": 3996,
            "y": 420,
            "size": 44,
            "at": "l2:notes"
          },
          {
            "id": "cn-c0",
            "t": "box",
            "x": 3996,
            "y": 495,
            "w": 44,
            "h": 44,
            "at": "l2:date",
            "stroke": 5
          },
          {
            "id": "cn-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 477,
            "size": 56,
            "at": "l2:date+600",
            "color": "accent"
          },
          {
            "id": "cn-l0",
            "t": "text",
            "text": "Ngày mua, mã đơn",
            "x": 4066,
            "y": 487,
            "size": 38,
            "at": "l2:date+200"
          },
          {
            "id": "cn-c1",
            "t": "box",
            "x": 3996,
            "y": 557,
            "w": 44,
            "h": 44,
            "at": "l2:product",
            "stroke": 5
          },
          {
            "id": "cn-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 539,
            "size": 56,
            "at": "l2:product+600",
            "color": "accent"
          },
          {
            "id": "cn-l1",
            "t": "text",
            "text": "Món gặp vấn đề",
            "x": 4066,
            "y": 549,
            "size": 38,
            "at": "l2:product+200"
          },
          {
            "id": "cn-c2",
            "t": "box",
            "x": 3996,
            "y": 619,
            "w": 44,
            "h": 44,
            "at": "l3:times",
            "stroke": 5
          },
          {
            "id": "cn-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 601,
            "size": 56,
            "at": "l3:times+600",
            "color": "accent"
          },
          {
            "id": "cn-l2",
            "t": "text",
            "text": "Đã liên hệ mấy lần",
            "x": 4066,
            "y": 611,
            "size": 38,
            "at": "l3:times+200"
          },
          {
            "id": "cn-c3",
            "t": "box",
            "x": 3996,
            "y": 681,
            "w": 44,
            "h": 44,
            "at": "l3:want",
            "stroke": 5
          },
          {
            "id": "cn-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 663,
            "size": 56,
            "at": "l3:want+600",
            "color": "accent"
          },
          {
            "id": "cn-l3",
            "t": "text",
            "text": "Khách muốn giải quyết sao",
            "x": 4066,
            "y": 673,
            "size": 38,
            "at": "l3:want+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First seconds: one slow breath, look at them, let them finish. Angry people need to let it out.",
          "sub": "Mấy giây đầu: thở chậm, nhìn khách, để khách nói hết. Người đang giận cần được xả trước.",
          "keys": [
            "để khách nói hết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Take notes as you listen: the date or order code, the product with the problem.",
          "sub": "Vừa nghe vừa ghi: ngày mua hoặc mã đơn, sản phẩm gặp vấn đề."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "How many times they've called, and what they want. They see they're taken seriously.",
          "sub": "Đã liên hệ mấy lần, khách muốn giải quyết thế nào. Khách thấy mình được xem trọng."
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s06",
      "module": "BRK-04",
      "data": {
        "title": "Câu đầu tiên khi khách to tiếng",
        "labels": [
          "Đổ xăng",
          "Dập lửa"
        ],
        "wrong": "“Anh bình tĩnh đi.” “Chị nói nhỏ thôi ạ.”",
        "right": "“Em đang nghe đây ạ, chị kể cụ thể giúp em nhé.”",
        "wrongIllus": "fire",
        "rightIllus": "ear"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Calm down. Speak quietly. Sounds like blame.",
          "sub": "“Bình tĩnh đi”, “nói nhỏ thôi”: nghe như trách."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Try: I'm listening. Tell me exactly what happened.",
          "sub": "Thay bằng: “Em đang nghe đây ạ, chị kể cụ thể nhé.”",
          "keys": [
            "Em đang nghe đây ạ"
          ]
        }
      ],
      "ref": "p3"
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
          }
        ],
        "items": [
          {
            "id": "c-k",
            "t": "text",
            "text": "Cho lý do để bình tĩnh",
            "x": 4836,
            "y": 690,
            "size": 46,
            "at": "l1:reason",
            "color": "accent",
            "hl": [
              {
                "text": "lý do",
                "at": "l1:reason"
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
          "say": "Don't tell customers to calm down. Give them a reason to.",
          "sub": "Đừng bảo khách bình tĩnh, hãy cho khách lý do để bình tĩnh.",
          "keys": [
            "lý do để bình tĩnh"
          ]
        }
      ],
      "ref": "p5"
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
            "text": "② 10:00 · Quầy bảo hành",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
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
                  "id": "dung",
                  "side": "left"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "walk",
                  "at": "l1",
                  "face": "stern"
                }
              ],
              "props": [
                "electric-plug",
                "wind-face"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:this is",
            "caption": "10:00 · quầy bảo hành",
            "icon": "electric-plug"
          },
          {
            "id": "d-box1",
            "t": "box",
            "x": 5964,
            "y": 160,
            "w": 370,
            "h": 210,
            "at": "l3:feelings",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "d-f",
            "t": "text",
            "text": "Cảm xúc",
            "x": 5994,
            "y": 170,
            "size": 50,
            "at": "l3:feelings",
            "color": "coral"
          },
          {
            "id": "d-f2",
            "t": "text",
            "text": "bực, lo,",
            "x": 5994,
            "y": 240,
            "size": 42,
            "at": "l3:upset"
          },
          {
            "id": "d-f3",
            "t": "text",
            "text": "bị coi thường",
            "x": 5994,
            "y": 295,
            "size": 42,
            "at": "l3:ignored"
          },
          {
            "id": "d-box2",
            "t": "box",
            "x": 6354,
            "y": 160,
            "w": 370,
            "h": 210,
            "at": "l3:facts",
            "stroke": 5
          },
          {
            "id": "d-s",
            "t": "text",
            "text": "Sự việc",
            "x": 6384,
            "y": 170,
            "size": 50,
            "at": "l3:facts"
          },
          {
            "id": "d-s2",
            "t": "text",
            "text": "hỏng, tính sai,",
            "x": 6384,
            "y": 240,
            "size": 42,
            "at": "l3:broken"
          },
          {
            "id": "d-s3",
            "t": "text",
            "text": "giao trễ",
            "x": 6384,
            "y": 295,
            "size": 42,
            "at": "l3:late"
          },
          {
            "id": "d-f4",
            "t": "text",
            "text": "→ ghi nhận ngay",
            "x": 5964,
            "y": 400,
            "size": 44,
            "at": "l4:accept",
            "color": "coral",
            "hl": [
              {
                "text": "ngay",
                "at": "l4:right away"
              }
            ]
          },
          {
            "id": "d-s4",
            "t": "text",
            "text": "→ kiểm tra rồi mới kết luận",
            "x": 5964,
            "y": 465,
            "size": 42,
            "at": "l4:check"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, ten a.m., the warranty counter. And this is Thảo, holding a hair dryer.",
          "sub": "Chặng hai, mười giờ, quầy bảo hành. Còn đây là Thảo, tay cầm máy sấy tóc.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Broken again! This is my second time here!",
          "sub": "Lại hỏng! Đây là lần thứ hai tôi mang tới!",
          "face": "stern"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Every complaint has two parts. Feelings: upset, worried, ignored. Facts: broken, wrong price, late.",
          "sub": "Khiếu nại nào cũng hai phần. Cảm xúc: bực, lo, bị coi thường. Sự việc: hỏng, tính sai, giao trễ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Accept the feelings right away. Check the facts before you conclude.",
          "sub": "Cảm xúc thì ghi nhận ngay. Sự việc thì kiểm tra rồi mới kết luận.",
          "keys": [
            "ghi nhận ngay"
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
      "ref": "p6"
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
          }
        ],
        "items": [
          {
            "id": "d-em",
            "t": "text",
            "text": "“Mất cả buổi chiều,",
            "x": 5964,
            "y": 560,
            "size": 40,
            "at": "l1:afternoon",
            "color": "accent"
          },
          {
            "id": "d-em2",
            "t": "text",
            "text": "máy vẫn hỏng thì ai cũng bực”",
            "x": 6004,
            "y": 620,
            "size": 40,
            "at": "l1:anyone",
            "color": "accent"
          },
          {
            "id": "d-no",
            "t": "text",
            "text": "≠ nhận lỗi",
            "x": 6324,
            "y": 560,
            "size": 40,
            "at": "l2:admitting",
            "color": "muted"
          },
          {
            "id": "d-why",
            "t": "text",
            "text": "Giải thích sớm = cãi lại",
            "x": 6804,
            "y": 680,
            "size": 42,
            "at": "l3:argument",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Like: I understand. A whole afternoon and it's still broken. Anyone would be upset.",
          "sub": "Như: “Em hiểu, mất cả buổi chiều mà máy vẫn hỏng thì ai cũng bực.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That's not admitting fault. It's just true.",
          "sub": "Đó không phải nhận lỗi. Chỉ là nói thật lòng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But explaining early, or repeating company rules? To an angry person, each line is an argument.",
          "sub": "Còn vội giải thích, nhắc mãi “quy định công ty”? Với người đang giận, mỗi câu là một câu cãi lại.",
          "keys": [
            "một câu cãi lại"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "shop",
        "label": "10:02 · quầy bảo hành",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "thao",
            "side": "right",
            "face": "stern"
          }
        ],
        "props": [
          "electric-plug",
          "wind-face"
        ],
        "verdict": {
          "ok": false,
          "label": "Đổ cho khách dùng sai",
          "why": "Chưa nghe hết đã giải thích, chưa kiểm tra đã kết luận; máy lỗi linh kiện thật.",
          "rule": "Chưa kiểm tra, chưa kết luận"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Our dryers are checked. You must have used it wrong.",
          "sub": "Máy bên em kiểm tra kỹ, chắc chị dùng sai cách.",
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
          "say": "She yells for the manager. And the part really was faulty.",
          "sub": "Chị gọi to “Quản lý đâu?”. Mà máy lỗi linh kiện thật.",
          "keys": [
            "lỗi linh kiện thật"
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
          "say": "I understand. Coming back twice is annoying.",
          "sub": "Em hiểu, phải mang tới lần thứ hai thì ai cũng bực.",
          "phase": "redo",
          "face": "neutral",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Technician checks it now. I'll call you before five today.",
          "sub": "Em báo kỹ thuật kiểm ngay, trước năm giờ chiều nay em gọi chị.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Hear it all before explaining. Check it all before concluding.",
          "sub": "Chưa nghe hết, chưa giải thích; chưa kiểm tra, chưa kết luận.",
          "phase": "redo",
          "keys": [
            "chưa kiểm tra, chưa kết luận"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p9,p10,p11"
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
            "at": "l5",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 13:00 · Không có quyền quyết",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:stop three"
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 180,
            "w": 44,
            "h": 44,
            "at": "l2:what",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 162,
            "size": 56,
            "at": "l2:what+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Làm gì",
            "x": 8002,
            "y": 172,
            "size": 46,
            "at": "l2:what+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 250,
            "w": 44,
            "h": 44,
            "at": "l2:who",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 232,
            "size": 56,
            "at": "l2:who+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Ai làm",
            "x": 8002,
            "y": 242,
            "size": 46,
            "at": "l2:who+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 320,
            "w": 44,
            "h": 44,
            "at": "l2:when",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 302,
            "size": 56,
            "at": "l2:when+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Bao giờ có câu trả lời",
            "x": 8002,
            "y": 312,
            "size": 46,
            "at": "l2:when+200"
          },
          {
            "id": "e-ch",
            "t": "text",
            "text": "Cho chọn: “đổi mới hay gửi sửa?”",
            "x": 7932,
            "y": 400,
            "size": 42,
            "at": "l3:choose",
            "hl": [
              {
                "text": "Cho chọn",
                "at": "l3:choose"
              }
            ]
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "Không hứa điều chưa chắc",
            "x": 7932,
            "y": 480,
            "size": 46,
            "at": "l4:promise",
            "color": "coral"
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
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "four-oclock"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l4:last month",
            "caption": "Tháng trước · quầy dịch vụ",
            "icon": "four-oclock"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, one p.m. Dũng can't approve a new dryer. Empty handed?",
          "sub": "Chặng ba, một giờ. Dũng không có quyền đổi máy. Tay trắng?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. A clear plan needs three things: what you'll do, who does it, and when they'll hear back.",
          "sub": "Không. Kế hoạch rõ chỉ cần ba điều: làm gì, ai làm, bao giờ khách có câu trả lời.",
          "keys": [
            "làm gì, ai làm, bao giờ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Options? Let them choose: new one, or repair? Choosing gives back control.",
          "sub": "Có vài hướng? Cho khách chọn: “Đổi mới hay gửi sửa ạ?” Được chọn, khách lấy lại quyền."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And never promise what you're not sure of. Dũng learned that last month.",
          "sub": "Và đừng hứa điều chưa chắc. Tháng trước Dũng đã học bài này."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Come back at four, sir. All fixed!",
          "sub": "Bốn giờ chiều anh qua lấy nhé, xong hết!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "He never asked the technician. At four, still no part. The customer filmed it.",
          "sub": "Chưa hỏi kỹ thuật. Bốn giờ, máy vẫn chờ linh kiện. Khách quay video.",
          "keys": [
            "quay video"
          ]
        }
      ],
      "ref": "p11,p12,p13,p14"
    },
    {
      "id": "s12",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Hứa cho xong, chuyện quay lại gấp đôi",
        "hl": "gấp đôi",
        "sub": "Không xong thì hai cơn giận cộng lại"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Promise to end it, and it comes back double.",
          "sub": "Hứa cho xong chuyện, chuyện quay lại gấp đôi.",
          "keys": [
            "gấp đôi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two angers, added up.",
          "sub": "Hai cơn giận cộng lại."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p13,p15"
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
            "at": "l6:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 15:00 · Gọi quản lý cho khéo",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:stop four"
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
                  "id": "lan",
                  "side": "left"
                },
                {
                  "id": "hoa",
                  "side": "center",
                  "enter": "walk",
                  "at": "l3"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "stern"
                }
              ],
              "props": [
                "glass-of-milk",
                "receipt"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:checkout",
            "caption": "15:00 · quầy thu ngân",
            "icon": "receipt"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "A: “Chờ quản lý nhé” rồi đi",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l3:walk off",
            "color": "coral"
          },
          {
            "id": "f-a2",
            "t": "text",
            "text": "→ khách kể lại, giận hơn",
            "x": 100,
            "y": 1330,
            "size": 40,
            "at": "l3:again",
            "color": "muted"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "B: kể tóm tắt trước mặt khách",
            "x": 60,
            "y": 1420,
            "size": 44,
            "at": "l4:right there",
            "color": "accent",
            "hl": [
              {
                "text": "trước mặt khách",
                "at": "l4:right there"
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
          "say": "Stop four, three p.m., the checkout. Poor Thảo again: charged twice for milk.",
          "sub": "Chặng bốn, ba giờ chiều, quầy thu ngân. Lại là Thảo: bị tính tiền sữa hai lần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "You charged me twice! Twice!",
          "sub": "Tính tôi hai lần! Hai lần đấy!",
          "face": "stern"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lan, at the till, could say: wait for the manager, and walk off. Thảo tells it all again, angrier.",
          "sub": "Lan ở quầy có thể nói “chị chờ quản lý nhé” rồi đi mất. Thảo phải kể lại, càng kể càng giận."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Instead, Lan stays, and briefs Cô Hoa, the store manager, right there.",
          "sub": "Thay vào đó, Lan đứng lại, báo ngay cho Cô Hoa, quản lý cửa hàng.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "She was charged twice for milk. I checked the receipt. She'd like the extra back.",
          "sub": "Chị này bị tính hai lần món sữa, em đã kiểm tra hoá đơn, chị muốn hoàn phần thừa.",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Confirmed. Refunding now.",
          "sub": "Ừ, cô xác nhận, hoàn ngay.",
          "face": "happy"
        }
      ],
      "ref": "p18"
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
          }
        ],
        "items": [
          {
            "id": "f-w",
            "t": "text",
            "text": "Gọi quản lý khi:",
            "x": 60,
            "y": 1510,
            "size": 46,
            "at": "l1:call",
            "hl": [
              {
                "text": "Gọi quản lý",
                "at": "l1:call"
              }
            ]
          },
          {
            "id": "fw-c0",
            "t": "box",
            "x": 60,
            "y": 1580,
            "w": 44,
            "h": 44,
            "at": "l1:beyond",
            "stroke": 5
          },
          {
            "id": "fw-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1562,
            "size": 56,
            "at": "l1:beyond+600",
            "color": "accent"
          },
          {
            "id": "fw-l0",
            "t": "text",
            "text": "Đòi vượt quyền của mình",
            "x": 130,
            "y": 1572,
            "size": 38,
            "at": "l1:beyond+200"
          },
          {
            "id": "fw-c1",
            "t": "box",
            "x": 60,
            "y": 1640,
            "w": 44,
            "h": 44,
            "at": "l2:twice",
            "stroke": 5
          },
          {
            "id": "fw-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1622,
            "size": 56,
            "at": "l2:twice+600",
            "color": "accent"
          },
          {
            "id": "fw-l1",
            "t": "text",
            "text": "Thử hai lần, khách vẫn không nghe",
            "x": 130,
            "y": 1632,
            "size": 38,
            "at": "l2:twice+200"
          },
          {
            "id": "fw-c2",
            "t": "box",
            "x": 60,
            "y": 1700,
            "w": 44,
            "h": 44,
            "at": "l2:threats",
            "stroke": 5
          },
          {
            "id": "fw-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1682,
            "size": 56,
            "at": "l2:threats+600",
            "color": "accent"
          },
          {
            "id": "fw-l2",
            "t": "text",
            "text": "Xúc phạm, đe doạ",
            "x": 130,
            "y": 1692,
            "size": 38,
            "at": "l2:threats+200"
          },
          {
            "id": "fw-c3",
            "t": "box",
            "x": 60,
            "y": 1760,
            "w": 44,
            "h": 44,
            "at": "l2:safety",
            "stroke": 5
          },
          {
            "id": "fw-k3",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1742,
            "size": 56,
            "at": "l2:safety+600",
            "color": "accent"
          },
          {
            "id": "fw-l3",
            "t": "text",
            "text": "Nguy cơ mất an toàn",
            "x": 130,
            "y": 1752,
            "size": 38,
            "at": "l2:safety+200"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Chuyển khách = chuyển cả chuyện",
            "x": 900,
            "y": 1780,
            "size": 40,
            "at": "l4:whole story",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Call the manager when they want something beyond your power, like a refund outside policy.",
          "sub": "Gọi quản lý khi khách đòi điều vượt quyền, như hoàn tiền ngoài chính sách."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Or you've tried twice and they won't listen, or there are insults, threats, or a safety risk.",
          "sub": "Hay đã thử hai lần mà khách không nghe, bị xúc phạm, đe doạ, hoặc có nguy cơ mất an toàn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Calling at the right time isn't losing. It's doing the job. Brief them: who, what, done, wanted.",
          "sub": "Gọi đúng lúc là làm đúng việc, không phải thua. Kể tóm tắt: ai, chuyện gì, đã làm gì, khách muốn gì."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hand over the customer, and the whole story too.",
          "sub": "Chuyển khách thì chuyển cả câu chuyện.",
          "keys": [
            "chuyển cả câu chuyện"
          ]
        }
      ],
      "ref": "p16,p17,p19"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Khách chửi thẳng mặt, có phải nhịn cho hết?",
        "illus": "face-with-symbols-on-mouth"
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
          "say": "And if they insult you? Endure it all?",
          "sub": "Khách chửi thẳng mặt, có phải nhịn cho hết?",
          "keys": [
            "nhịn cho hết"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p20"
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
            "text": "⑤ 17:00 · Bị xúc phạm",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:stop five"
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
                  "side": "center",
                  "pose": "phone",
                  "face": "stern"
                }
              ],
              "props": [
                "telephone-receiver",
                "shield"
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
                }
              ]
            },
            "at": "l1:caller",
            "caption": "17:00 · tổng đài",
            "icon": "shield"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Giữ giọng đều, giới hạn một lần",
            "x": 2028,
            "y": 1260,
            "size": 42,
            "at": "l3:once",
            "hl": [
              {
                "text": "một lần",
                "at": "l3:once"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Vẫn tiếp tục → mời quản lý",
            "x": 2028,
            "y": 1335,
            "size": 44,
            "at": "l4:manager"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Qua máy: hẹn gọi lại sau",
            "x": 2028,
            "y": 1405,
            "size": 44,
            "at": "l4:call back"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Nguy hiểm → rời quầy, báo bảo vệ",
            "x": 2028,
            "y": 1485,
            "size": 40,
            "at": "l5:unsafe",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, five p.m. A caller moves from complaining to insulting Dũng himself.",
          "sub": "Chặng năm, năm giờ chiều. Một người gọi chuyển từ phàn nàn sang xúc phạm chính Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I want to help you, but let's speak to each other with respect.",
          "sub": "Em muốn giúp anh, nhưng mình nói chuyện tôn trọng nhau nhé.",
          "face": "stern",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Respecting customers doesn't mean taking every insult. Even voice, one clear limit, once.",
          "sub": "Tôn trọng khách không có nghĩa chịu mọi lời lăng mạ. Giọng đều, đặt giới hạn một lần.",
          "keys": [
            "đặt giới hạn một lần"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Still going? Ask the manager to take over. On the phone, offer to call back when they're calmer.",
          "sub": "Vẫn tiếp tục? Mời quản lý tiếp nhận. Qua điện thoại, hẹn gọi lại khi khách bình tĩnh hơn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Feel unsafe? Leave the counter, and tell the person in charge or security.",
          "sub": "Thấy không an toàn? Rời quầy, báo người phụ trách hoặc bảo vệ."
        }
      ],
      "ref": "p20,p21"
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
          }
        ],
        "items": [
          {
            "id": "g-my",
            "t": "text",
            "text": "Khách chửi cũng phải im nghe hết",
            "x": 2028,
            "y": 1580,
            "size": 40,
            "at": "l1:silent",
            "color": "muted"
          },
          {
            "id": "g-myx",
            "t": "strike",
            "over": "g-my",
            "at": "l2:different"
          },
          {
            "id": "g-tr",
            "t": "text",
            "text": "Phàn nàn ≠ lăng mạ",
            "x": 2028,
            "y": 1655,
            "size": 52,
            "at": "l2:complaint",
            "color": "accent",
            "hl": [
              {
                "text": "≠ lăng mạ",
                "at": "l2:abuse"
              }
            ]
          },
          {
            "id": "g-ca",
            "t": "text",
            "text": "Nhịn để nghe, không để bị chửi",
            "x": 2028,
            "y": 1740,
            "size": 38,
            "at": "l4:patience"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Tôn trọng khách, và cả chính mình",
            "x": 2868,
            "y": 1780,
            "size": 38,
            "at": "l5:yourself",
            "color": "accent",
            "hl": [
              {
                "text": "chính mình",
                "at": "l5:yourself"
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
          "say": "New staff often think: stay silent through anything, or get a bad score.",
          "sub": "Người mới hay nghĩ: khách chửi gì cũng im nghe hết, kẻo bị chấm điểm thấp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But a complaint is different from abuse. Many shops have a procedure: warn once, then hand over.",
          "sub": "Nhưng phàn nàn khác với lăng mạ. Nhiều nơi có quy trình: nhắc một lần, rồi chuyển lên quản lý.",
          "keys": [
            "phàn nàn khác với lăng mạ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ten silent minutes don't stop them; they drain you. Ask about it in week one.",
          "sub": "Im lặng chịu mười phút không làm khách dừng, chỉ làm bạn kiệt sức. Hỏi quy trình từ tuần đầu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One moment of patience? Yes, patience to listen. Not to be abused.",
          "sub": "“Một điều nhịn”? Đúng, nhịn để nghe. Không phải để bị chửi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Respect the customer, and respect yourself.",
          "sub": "Tôn trọng khách, nhưng cũng tôn trọng chính mình.",
          "keys": [
            "tôn trọng chính mình"
          ]
        }
      ],
      "ref": "p22,p23"
    },
    {
      "id": "s18",
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 21:00 · Hết ca",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:stop six"
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
                  "id": "dung",
                  "side": "left",
                  "face": "sad"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain"
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
            "at": "l1:shift",
            "caption": "21:00 · sau ca làm",
            "icon": "hot-beverage"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Ghi vụ việc vào sổ, hệ thống",
            "x": 3996,
            "y": 1260,
            "size": 44,
            "at": "l1:logs"
          },
          {
            "id": "h-1b",
            "t": "text",
            "text": "→ bằng chứng làm đúng quy trình",
            "x": 4036,
            "y": 1330,
            "size": 38,
            "at": "l2:proves",
            "color": "muted"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Uống nước, đi lại, tâm sự",
            "x": 3996,
            "y": 1420,
            "size": 42,
            "at": "l2:water"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Lời nặng nhắm vào tình huống,",
            "x": 3996,
            "y": 1510,
            "size": 42,
            "at": "l4:situation",
            "color": "accent"
          },
          {
            "id": "h-3b",
            "t": "text",
            "text": "không nhắm vào bạn",
            "x": 4036,
            "y": 1575,
            "size": 42,
            "at": "l4:not you",
            "color": "accent",
            "hl": [
              {
                "text": "không nhắm vào bạn",
                "at": "l4:not you"
              }
            ]
          },
          {
            "id": "h-lead",
            "t": "text",
            "text": "Trưởng ca: nói rõ khi nào được gọi mình",
            "x": 3996,
            "y": 1690,
            "size": 30,
            "at": "l5:shift leaders",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, nine p.m., end of shift. Dũng logs every case, even the finished ones.",
          "sub": "Chặng sáu, chín giờ tối, hết ca. Dũng ghi lại từng vụ, kể cả vụ đã xong."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "If it goes higher, that log proves he followed procedure. Then water, a walk, a chat.",
          "sub": "Khách khiếu nại lên trên? Sổ là bằng chứng làm đúng quy trình. Rồi uống nước, đi lại, tâm sự."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Rough day, Dũng? Remember, you can call me, and you can set limits.",
          "sub": "Hôm nay mệt hả con? Nhớ nhé: cần thì gọi cô, và con được đặt giới hạn.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Harsh words usually target the situation, not you.",
          "sub": "Lời nặng của khách thường nhắm vào tình huống, không nhắm vào bạn.",
          "keys": [
            "không nhắm vào bạn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Shift leaders, do what Cô Hoa did: tell new staff when to call you. They'll stay much calmer.",
          "sub": "Trưởng ca: như Cô Hoa, nói rõ với người mới khi nào được gọi mình. Họ sẽ bình tĩnh hơn hẳn."
        }
      ],
      "ref": "p25,p26,p27"
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
            "text": "Vài ngày sau · tổng đài",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:dũng"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "telephone-receiver",
                "electric-plug"
              ],
              "camera": [
                {
                  "at": "l2",
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
            "at": "l1:call",
            "caption": "Vài ngày sau · cùng chiếc điện thoại ấy",
            "icon": "telephone-receiver"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Liên hệ lại sau vài ngày",
            "x": 5964,
            "y": 1260,
            "size": 48,
            "at": "l4:few days",
            "color": "accent"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "“bực” → “yên tâm”",
            "x": 5964,
            "y": 1340,
            "size": 56,
            "at": "l4:upset",
            "hl": [
              {
                "text": "yên tâm",
                "at": "l4:reassured"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Rất ít người làm bước này",
            "x": 5964,
            "y": 1430,
            "size": 44,
            "at": "l4:few people",
            "color": "muted"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Một điều nhịn, chín điều lành”",
            "x": 5964,
            "y": 1540,
            "size": 44,
            "at": "l6:patience",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Days later. Same hotline, same Dũng. This time, he makes the call.",
          "sub": "Vài ngày sau. Vẫn tổng đài ấy, vẫn Dũng ấy. Lần này, Dũng là người gọi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Hi Thảo, it's Dũng from An Phát. Is the dryer working okay?",
          "sub": "Chị Thảo ơi, em Dũng ở An Phát ạ. Máy sấy dùng ổn chưa chị?",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "On the line, Thảo laughs: yes, and thanks for calling!",
          "sub": "Đầu dây, Thảo cười: “Ổn rồi em, cảm ơn em đã gọi!”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Calling back after a few days turns upset into reassured. Very few people bother.",
          "sub": "Liên hệ lại sau vài ngày: “bực” thành “yên tâm”. Rất ít người làm.",
          "keys": [
            "“yên tâm”"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "One moment of patience, nine of peace. Dũng finally got the order right: listen first, talk after.",
          "sub": "“Một điều nhịn, chín điều lành.” Dũng đã đổi đúng thứ tự: nghe trước, nói sau.",
          "keys": [
            "nghe trước, nói sau"
          ]
        }
      ],
      "ref": "p24"
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
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "J",
            "ms": 800
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4716,
            "y": 600,
            "at": "l1:listen"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8572,
            "y": 260,
            "at": "l2:plan"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 780,
            "y": 1690,
            "at": "l3:hand over"
          },
          {
            "id": "j-t",
            "t": "text",
            "text": "Mang về ca làm",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l4"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Không để thắng một cuộc cãi,",
            "x": 7932,
            "y": 1290,
            "size": 52,
            "at": "l4:argument"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "mà để cả hai tới giải pháp",
            "x": 7932,
            "y": 1380,
            "size": 52,
            "at": "l4:solution",
            "color": "accent",
            "hl": [
              {
                "text": "giải pháp",
                "at": "l4:solution"
              }
            ]
          },
          {
            "id": "j-note",
            "t": "text",
            "text": "Quy trình xử lý khiếu nại, giới hạn với khách: hỏi nơi bạn làm.",
            "x": 7932,
            "y": 1790,
            "size": 28,
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
          "say": "So: listen fully, accept feelings, check before concluding.",
          "sub": "Tóm lại: nghe hết, ghi nhận cảm xúc, kiểm tra rồi mới kết luận.",
          "keys": [
            "nghe hết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Give a clear plan: what, who, when. Promise only what's sure.",
          "sub": "Đưa kế hoạch rõ: làm gì, ai làm, bao giờ. Chỉ hứa điều chắc chắn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hand over the whole story, and set limits calmly.",
          "sub": "Chuyển cả câu chuyện, và đặt giới hạn bình tĩnh."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "You're not there to win an argument, but to bring you both to a solution.",
          "sub": "Không phải để thắng một cuộc cãi, mà để đưa cả hai tới một giải pháp.",
          "keys": [
            "một giải pháp"
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
      "ref": "questions[10]",
      "data": {
        "q": "You cannot decide a refund yourself, how can you still give the customer a clear plan?",
        "options": [
          "Say what you will do, who will do it, and when they will hear back",
          "Promise a full refund now and hope your manager agrees with it later",
          "Tell them you have no power here and they should come back another day"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "clipboard",
        "why": "Có việc làm, người làm và mốc thời gian thì khách yên tâm, dù bạn không có quyền quyết."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You cannot decide a refund yourself, how can you still give the customer a clear plan?",
          "sub": "Bạn không tự quyết được hoàn tiền, làm sao vẫn đưa khách một kế hoạch rõ ràng?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Say what you will do, who will do it, and when they will hear back.",
          "sub": "Nói rõ bạn sẽ làm gì, ai làm, và bao giờ khách có câu trả lời."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Do not promise for your manager. That easily becomes a broken promise.",
          "sub": "Đừng hứa thay quản lý, dễ thành thất hứa."
        }
      ]
    },
    {
      "id": "s33",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi tình huống",
        "sub": "Nghe câu hỏi, chọn cách xử lý đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Write three opening lines for a shouting customer, and one line to set a limit. Read them aloud before your shift.",
          "sub": "Viết ba câu mở đầu khi khách to tiếng và một câu đặt giới hạn, đọc to trước ca làm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then, forty questions below!",
          "sub": "Rồi, bốn mươi câu hỏi bên dưới!"
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
