// Kịch bản video W lần 3 (#110) — "Cách chào khách và hỏi đúng nhu cầu của khách hàng" · chuỗi "Phục vụ khách hàng và xử lý khiếu nại"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-greet-customers-and-understand-their-needs--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "frontline-staff",
    "slug": "how-to-greet-customers-and-understand-their-needs",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cách chào khách và hỏi đúng nhu cầu của khách hàng",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo MỘT NGÀY THỨ BẢY của Lan ở cửa hàng tổng hợp An Phát (7:55 núi hàng → 8:30 khách vào không ai ngẩng lên → 9:30 Thảo quay lại quầy mỹ phẩm → 11:00 lời yêu cầu / nhu cầu thật → 14:00 “Khoan đã!” cái nồi → 14:05 nhắc lại → 16:00 áo cho cháu → 18:00 điện thoại, chat → 19:30 doanh số → 20:50 khép vòng). Mở: “1–2 giây” + “Lời chào cao hơn mâm cỗ”; khép: cùng núi hàng, Thảo quay lại, lần này Lan ngẩng lên chào. Nhân vật (luật đổi tên của chuỗi, w145/_series/frontline-staff.md): Lan (Thảo nhân viên giày p4, cô nhân viên mới p8), Thảo (người mẹ p4, chị khách mỹ phẩm p8; con trai chỉ nhắc qua lời), Bác Bình (bác mua nồi p14), Bà Tư (bà cụ mua áo cho cháu p19); Hưng (p24) kể bằng lời “một anh đồng nghiệp” để giữ 4 nhân vật có tên; câu mẫu nghe máy p21 giữ “Hoa Mai… Hạnh” trên bảng. Cảnh ngắt nhịp: BRK-01 (dừng hình p4), BRK-04 (câu đóng / câu mở p13), BRK-07 (rehook doanh số p23). Câu đố: questions[9] (p10). Bản cũ (W lần 3, #110): w145/bak/how-to-greet-customers-and-understand-their-needs--w01.js.",
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
            "text": "1–2 giây",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l1:one",
            "color": "accent",
            "hl": [
              {
                "text": "1–2 giây",
                "at": "l1:seconds"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "dừng tay, nhìn, chào",
            "x": 70,
            "y": 300,
            "size": 56,
            "at": "l1:pause"
          },
          {
            "id": "a-wr",
            "t": "text",
            "text": "Ta tưởng: chào = bỏ dở việc?",
            "x": 70,
            "y": 400,
            "size": 48,
            "at": "l2:dropping",
            "color": "muted"
          },
          {
            "id": "a-wrx",
            "t": "strike",
            "over": "a-wr",
            "at": "l3:no"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One or two seconds. That's how long it takes to pause, look up, and greet a customer.",
          "sub": "Một hai giây: đủ để dừng tay, ngẩng lên, chào khách.",
          "keys": [
            "Một hai giây"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet we think greeting means dropping everything and sprinting over.",
          "sub": "Vậy mà ta tưởng chào là phải bỏ hết việc, chạy ra.",
          "keys": [
            "bỏ hết việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No. Customers just need to know they've been seen.",
          "sub": "Không. Khách chỉ cần biết mình đã được nhìn thấy.",
          "keys": [
            "được nhìn thấy"
          ]
        }
      ],
      "ref": "intro,p1"
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
              "set": "shop",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "package",
                "sunrise"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "lan",
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
            "caption": "Thứ Bảy 7:55 · trước giờ mở cửa",
            "icon": "convenience-store"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Lời chào cao hơn mâm cỗ”",
            "x": 60,
            "y": 520,
            "size": 52,
            "at": "l4:greeting",
            "color": "accent",
            "hl": [
              {
                "text": "cao hơn mâm cỗ",
                "at": "l4:feast"
              }
            ]
          },
          {
            "id": "a-pile",
            "t": "text",
            "text": "Hôm nay: chào… bằng gáy?",
            "x": 900,
            "y": 660,
            "size": 44,
            "at": "l5:neck",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Lan, at An Phát, a busy general store.",
          "sub": "Đây là Lan, nhân viên cửa hàng tổng hợp An Phát."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Saturday rush, plus a mountain of stock to count.",
          "sub": "Thứ Bảy đông khách, kèm một núi hàng cần đếm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "So much to count. Customers can look around by themselves.",
          "sub": "Hàng nhiều quá. Khách cứ tự xem đã.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: a greeting is worth more than a feast.",
          "sub": "Ông bà dặn: “Lời chào cao hơn mâm cỗ.”",
          "keys": [
            "Lời chào cao hơn mâm cỗ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Today, Lan plans to greet with the back of her neck.",
          "sub": "Hôm nay Lan định chào khách… bằng gáy.",
          "keys": [
            "bằng gáy"
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
      "ref": "intro,p4"
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
            "text": "Chào sao cho khỏi gượng?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:greet",
            "hl": [
              {
                "text": "khỏi gượng",
                "at": "l1:awkward"
              }
            ]
          },
          {
            "id": "b-q2",
            "t": "text",
            "text": "Hỏi gì để khỏi đoán sai?",
            "x": 2028,
            "y": 140,
            "size": 60,
            "at": "l1:ask",
            "hl": [
              {
                "text": "đoán sai",
                "at": "l1:guessing"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Dừng tay, chào một câu",
            "x": 2028,
            "y": 250,
            "size": 46,
            "at": "l2:pause"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Đợi tín hiệu rồi lại gần",
            "x": 2028,
            "y": 315,
            "size": 46,
            "at": "l2:signal"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Hỏi: cho ai, để làm gì",
            "x": 2868,
            "y": 250,
            "size": 46,
            "at": "l3:who for",
            "hl": [
              {
                "text": "cho ai, để làm gì",
                "at": "l3:who for"
              }
            ]
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "④ Nhắc lại nhu cầu một câu",
            "x": 2868,
            "y": 315,
            "size": 46,
            "at": "l3:repeat"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "6 chặng, 1 ngày Thứ Bảy",
            "x": 2028,
            "y": 545,
            "size": 52,
            "at": "l5:six stops",
            "hl": [
              {
                "text": "Thứ Bảy",
                "at": "l5:saturday"
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
            "at": "l5:six stops+300",
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
            "at": "l5:six stops+450",
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
            "at": "l5:six stops+600",
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
            "at": "l5:six stops+750",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l5:six stops+900",
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
            "at": "l5:six stops+1050",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "8:30",
            "x": 2078,
            "y": 628,
            "size": 48,
            "at": "l5:six stops+400"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "9:30",
            "x": 2348,
            "y": 628,
            "size": 48,
            "at": "l5:six stops+550"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "11:00",
            "x": 2603,
            "y": 628,
            "size": 48,
            "at": "l5:six stops+700"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "14:00",
            "x": 2873,
            "y": 628,
            "size": 48,
            "at": "l5:six stops+850"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "16:00",
            "x": 3143,
            "y": 628,
            "size": 48,
            "at": "l5:six stops+1000"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "18:00",
            "x": 3413,
            "y": 628,
            "size": 48,
            "at": "l5:six stops+1150"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you greet without feeling awkward, and ask without guessing wrong?",
          "sub": "Vậy chào sao cho khỏi gượng, hỏi gì để khỏi đoán sai?",
          "keys": [
            "khỏi gượng",
            "khỏi đoán sai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Short answer: pause to greet, and wait for a signal before coming closer.",
          "sub": "Ngắn gọn: dừng tay chào, đợi tín hiệu rồi mới lại gần."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask who for and what for, then repeat the need in one sentence.",
          "sub": "Hỏi “cho ai, để làm gì”, rồi nhắc lại nhu cầu trong một câu.",
          "keys": [
            "cho ai, để làm gì"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Now, Lan's Saturday, in six stops.",
          "sub": "Giờ theo Lan qua ngày Thứ Bảy, sáu chặng."
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
            "text": "① 8:30 · Khách vào, ai ngẩng lên?",
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
              "set": "shop",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "walk",
                  "at": "l2"
                }
              ],
              "props": [
                "running-shoe",
                "package"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
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
            "at": "l1:counting",
            "caption": "8:30 · kệ giày trẻ em",
            "icon": "running-shoe"
          },
          {
            "id": "c-out",
            "t": "text",
            "text": "Không ai ngẩng → khách đi",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l4:leaves",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop, eight thirty. Lan is bent over, counting stock.",
          "sub": "Chặng một, tám rưỡi. Lan đang cúi đếm hàng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Thảo, with her little son, at the kids' shoe shelf.",
          "sub": "Còn đây là Thảo, dắt cậu con trai nhỏ đến kệ giày trẻ em.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Nobody's here, sweetie. Let's go.",
          "sub": "Không có ai con ạ. Mình đi thôi.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "They look around twice. Nobody looks up. Thảo quietly leaves.",
          "sub": "Nhìn quanh mấy lượt, không ai ngẩng lên. Thảo lặng lẽ đi ra."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s05",
      "module": "BRK-01",
      "data": {
        "illus": "package",
        "around": [
          "running-shoe",
          "eyes"
        ],
        "label": "Sai ở đây!",
        "note": "Cúi đếm hàng, không ngẩng lên chào"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Freeze. Lan isn't lazy.",
          "sub": "Dừng hình. Lan không lười."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "She just thought greeting meant dropping the stock.",
          "sub": "Lan chỉ nghĩ chào là phải bỏ dở việc."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "re-dia"
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
          }
        ],
        "items": [
          {
            "id": "c-1",
            "t": "text",
            "text": "Dừng 1–2 giây, nhìn, mỉm cười",
            "x": 3996,
            "y": 260,
            "size": 46,
            "at": "l1:pause"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "“Cứ xem thoải mái, cần gì",
            "x": 3996,
            "y": 345,
            "size": 44,
            "at": "l2:take your time"
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "em ở ngay đây ạ”",
            "x": 4036,
            "y": 405,
            "size": 44,
            "at": "l2:right here",
            "hl": [
              {
                "text": "ở ngay đây",
                "at": "l2:right here"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Đang bận khách: “Em ra ngay ạ”",
            "x": 3996,
            "y": 490,
            "size": 44,
            "at": "l3:with you"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Bận tay cũng được, đừng bận mắt",
            "x": 3996,
            "y": 640,
            "size": 50,
            "at": "l5:hands",
            "color": "accent",
            "hl": [
              {
                "text": "đừng bận mắt",
                "at": "l5:eyes"
              }
            ]
          },
          {
            "id": "c-cam",
            "t": "text",
            "text": "Hôm sau: quản lý xem camera",
            "x": 4836,
            "y": 680,
            "size": 40,
            "at": "l4:camera",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The fix: pause one or two seconds, look up, and smile. Stock in hand is fine.",
          "sub": "Cách sửa: dừng một hai giây, nhìn khách, mỉm cười. Tay cầm hàng cũng được."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then one short line that leaves them free: take your time, I'm right here.",
          "sub": "Rồi một câu trả quyền chọn: “Cứ xem thoải mái, cần gì em ở ngay đây ạ.”",
          "keys": [
            "Cứ xem thoải mái"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Serving someone else? Don't abandon them. Just turn: hello, I'll be with you shortly.",
          "sub": "Đang phục vụ người khác? Đừng bỏ dở. Chỉ cần quay sang: “Em ra với chị ngay ạ.”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next day, the manager checks the camera.",
          "sub": "Hôm sau, quản lý xem lại camera."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Busy hands are fine. Just don't have busy eyes.",
          "sub": "Bận tay cũng được, đừng bận mắt.",
          "keys": [
            "đừng bận mắt"
          ]
        }
      ],
      "ref": "p1,p2,p3,p4,p5"
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
            "at": "a1",
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
            "text": "② 9:30 · Lại gần lúc nào?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "lan",
                  "pose": "stand"
                },
                {
                  "id": "thao",
                  "pose": "stand"
                }
              ],
              "left": {
                "label": "Cách A: đi sát bên",
                "ok": false
              },
              "right": {
                "label": "Cách B: chờ tín hiệu",
                "ok": true
              }
            },
            "at": "l1:comes back",
            "caption": "9:30 · quầy mỹ phẩm",
            "icon": "lipstick"
          },
          {
            "id": "d-a",
            "t": "text",
            "text": "A: kè kè, giới thiệu một tràng",
            "x": 5964,
            "y": 170,
            "size": 44,
            "at": "l3:shadow",
            "color": "coral"
          },
          {
            "id": "d-b",
            "t": "text",
            "text": "B: chào, đứng chỗ khách thấy",
            "x": 5964,
            "y": 240,
            "size": 44,
            "at": "l3:waits",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, nine thirty. Thảo comes back alone, to cosmetics. Two versions of Lan.",
          "sub": "Chặng hai, chín rưỡi. Thảo quay lại quầy mỹ phẩm. Lan có hai bản."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "lan",
          "say": "This one's great! And this one! Our best seller!",
          "sub": "Loại này tốt lắm chị! Cả loại này! Bán chạy nhất!",
          "phase": "a",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "thao",
          "say": "Maybe another day.",
          "sub": "Thôi để hôm khác em ạ.",
          "phase": "a",
          "face": "worried"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "lan",
          "say": "Take your time. I'm right here.",
          "sub": "Chị cứ xem thoải mái, em ở ngay đây ạ.",
          "phase": "b",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "thao",
          "say": "Excuse me, is this one good for dry skin?",
          "sub": "Em ơi, loại này dùng cho da khô được không?",
          "phase": "b",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A is a shadow that sells. B waits where she's seen, and moves when Thảo holds an item.",
          "sub": "A là cái bóng biết chào hàng. B đứng chỗ khách thấy, chỉ lại gần khi chị cầm một món lên xem."
        }
      ],
      "ref": "p8"
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
          }
        ],
        "items": [
          {
            "id": "d-s",
            "t": "text",
            "text": "Tín hiệu để lại gần:",
            "x": 5964,
            "y": 330,
            "size": 46,
            "at": "l1:signals",
            "hl": [
              {
                "text": "Tín hiệu",
                "at": "l1:signals"
              }
            ]
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 410,
            "w": 44,
            "h": 44,
            "at": "l1:stop long",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 392,
            "size": 56,
            "at": "l1:stop long+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Dừng lâu ở một món",
            "x": 6034,
            "y": 402,
            "size": 40,
            "at": "l1:stop long+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 472,
            "w": 44,
            "h": 44,
            "at": "l1:label",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 454,
            "size": 56,
            "at": "l1:label+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Cầm lên xem nhãn, giá",
            "x": 6034,
            "y": 464,
            "size": 40,
            "at": "l1:label+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 534,
            "w": 44,
            "h": 44,
            "at": "l2:around",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 516,
            "size": 56,
            "at": "l2:around+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Nhìn quanh tìm người",
            "x": 6034,
            "y": 526,
            "size": 40,
            "at": "l2:around+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 596,
            "w": 44,
            "h": 44,
            "at": "l2:companion",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 578,
            "size": 56,
            "at": "l2:companion+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Quay sang hỏi người đi cùng",
            "x": 6034,
            "y": 588,
            "size": 40,
            "at": "l2:companion+200"
          },
          {
            "id": "d-fast",
            "t": "text",
            "text": "Đi vội, nghe máy → để tự xem",
            "x": 6804,
            "y": 680,
            "size": 38,
            "at": "l3:phone",
            "color": "muted"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Sẵn sàng, không kè kè",
            "x": 5964,
            "y": 690,
            "size": 52,
            "at": "l5:ready",
            "color": "accent",
            "hl": [
              {
                "text": "không kè kè",
                "at": "l5:glued"
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
          "say": "Signals: they stop long at one item, or pick it up to read the label and price.",
          "sub": "Tín hiệu: khách dừng lâu ở một món, hay cầm lên xem nhãn, xem giá.",
          "keys": [
            "Tín hiệu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "They look around for someone, or turn to ask their companion.",
          "sub": "Khách nhìn quanh tìm người, hay quay sang hỏi người đi cùng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Walking fast, or on the phone? Greet once, and let them look.",
          "sub": "Khách đi nhanh, đang nghe điện thoại? Chào một câu rồi để họ xem."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "I'll just look? Sure, call me anytime. Then step back, no sulking.",
          "sub": "“Để chị tự xem”? “Dạ vâng, cần gì chị cứ gọi em”, rồi lùi ra, không dỗi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Keen means always ready, not always glued.",
          "sub": "Nhiệt tình là luôn sẵn sàng, không phải luôn kè kè.",
          "keys": [
            "luôn sẵn sàng"
          ]
        }
      ],
      "ref": "p6,p7,p9"
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
            "text": "③ 11:00 · Khách cần gì thật?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:stop three"
          },
          {
            "id": "e-top",
            "t": "box",
            "x": 7932,
            "y": 160,
            "w": 760,
            "h": 110,
            "at": "l2:request",
            "stroke": 5
          },
          {
            "id": "e-top-t",
            "t": "text",
            "text": "Nói ra: “một cái túi to”",
            "x": 7962,
            "y": 180,
            "size": 46,
            "at": "l2:big bag"
          },
          {
            "id": "e-ar",
            "t": "arrow",
            "from": [
              8312,
              280
            ],
            "to": [
              8312,
              360
            ],
            "at": "l3:need"
          },
          {
            "id": "e-bot",
            "t": "box",
            "x": 7932,
            "y": 370,
            "w": 760,
            "h": 140,
            "at": "l3:need",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "e-bot-t",
            "t": "text",
            "text": "Cần thật: túi vừa laptop",
            "x": 7962,
            "y": 385,
            "size": 46,
            "at": "l3:laptop",
            "color": "accent"
          },
          {
            "id": "e-bot-t2",
            "t": "text",
            "text": "để đi làm",
            "x": 7962,
            "y": 445,
            "size": 46,
            "at": "l3:work",
            "color": "accent",
            "hl": [
              {
                "text": "đi làm",
                "at": "l3:work"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Gợi ý trúng = chạm lớp hai",
            "x": 7932,
            "y": 560,
            "size": 48,
            "at": "l4:second layer",
            "hl": [
              {
                "text": "lớp hai",
                "at": "l4:second layer"
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
          "say": "Stop three, eleven a.m. Lan is ready to ask. But ask what?",
          "sub": "Chặng ba, mười một giờ. Lan sẵn sàng hỏi. Nhưng hỏi gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What customers say is a request. Like: a big bag.",
          "sub": "Điều khách nói ra là lời yêu cầu, như “một cái túi to”.",
          "keys": [
            "lời yêu cầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "What they need is the real need: a bag that fits a laptop, for work.",
          "sub": "Điều khách cần là nhu cầu thật: túi đựng vừa máy tính để đi làm.",
          "keys": [
            "nhu cầu thật"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "You only suggest well when you reach that second layer.",
          "sub": "Chạm được lớp thứ hai, bạn mới gợi ý trúng."
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
          }
        ],
        "items": [
          {
            "id": "e-o",
            "t": "text",
            "text": "Hỏi mở:",
            "x": 8772,
            "y": 170,
            "size": 52,
            "at": "l1:open",
            "color": "accent"
          },
          {
            "id": "e-o1",
            "t": "text",
            "text": "“Dùng vào dịp nào ạ?”",
            "x": 8772,
            "y": 245,
            "size": 44,
            "at": "l1:occasion"
          },
          {
            "id": "e-o2",
            "t": "text",
            "text": "“Món này để tặng ai ạ?”",
            "x": 8772,
            "y": 310,
            "size": 44,
            "at": "l1:who is it for"
          },
          {
            "id": "e-o3",
            "t": "text",
            "text": "“Thường dùng thế nào ạ?”",
            "x": 8772,
            "y": 375,
            "size": 44,
            "at": "l1:usually"
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "Hỏi dồn, hỏi thu nhập",
            "x": 8772,
            "y": 465,
            "size": 44,
            "at": "l2:interrogate",
            "color": "muted"
          },
          {
            "id": "e-nox",
            "t": "strike",
            "over": "e-no",
            "at": "l2:income"
          },
          {
            "id": "e-price",
            "t": "text",
            "text": "“Chọn khoảng giá nào ạ?”",
            "x": 8772,
            "y": 550,
            "size": 46,
            "at": "l3:price range",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Open questions let them talk: what occasion? Who is it for? How do you usually use it?",
          "sub": "Câu hỏi mở cho khách tự kể: “Dùng vào dịp nào? Tặng ai? Thường dùng thế nào ạ?”",
          "keys": [
            "Câu hỏi mở"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two or three is enough. Don't interrogate, and never ask about income.",
          "sub": "Hai ba câu là đủ. Đừng hỏi dồn, đừng hỏi thu nhập."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For budget, ask softly: which price range should I look in?",
          "sub": "Muốn biết tầm giá, hỏi nhẹ: “Anh chị muốn chọn khoảng giá nào ạ?”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Stop four, two p.m. And this is Bác Bình, at the kitchenware shelf.",
          "sub": "Chặng bốn, hai giờ chiều. Còn đây là Bác Bình, ở quầy đồ gia dụng.",
          "keys": [
            "Bác Bình"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s11",
      "module": "BRK-04",
      "data": {
        "title": "Đầu cuộc trò chuyện",
        "labels": [
          "Câu đóng",
          "Câu mở"
        ],
        "wrong": "“Chị lấy màu đen hay màu xám ạ?”",
        "right": "“Chị định dùng vào dịp nào ạ?”",
        "wrongIllus": "handbag",
        "rightIllus": "speech-balloon"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Black or grey? Too early: they answer just to finish.",
          "sub": "Đen hay xám? Quá sớm: khách trả lời cho xong."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Open first. Save closed questions for the end.",
          "sub": "Mở trước. Câu đóng để dành lúc gần chọn xong.",
          "keys": [
            "Câu đóng"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "shop",
        "label": "14:00 · quầy đồ gia dụng",
        "actors": [
          {
            "id": "lan",
            "side": "left"
          },
          {
            "id": "binh",
            "side": "right",
            "pose": "hold"
          }
        ],
        "props": [
          "cooking"
        ],
        "verdict": {
          "ok": false,
          "label": "Giới thiệu ngay nồi to nhất",
          "why": "Mười phút sau mới biết bác sống một mình, chỉ cần nồi nhỏ nấu cháo.",
          "rule": "Hỏi trước một câu, đỡ giới thiệu sai cả buổi"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "binh",
          "say": "Which pot cooks fast, dear?",
          "sub": "Cái nồi nào nấu nhanh cháu?",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Our biggest pressure cooker! It cooks everything fast!",
          "sub": "Bác xem nồi áp suất to nhất, nấu gì cũng nhanh ạ!",
          "face": "happy",
          "pose": "explain",
          "stop": true
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern",
          "pose": "stop"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ten minutes later: he lives alone, and needs a small porridge pot.",
          "sub": "Mười phút sau mới biết: bác ở một mình, cần nồi nhỏ nấu cháo.",
          "keys": [
            "nồi nhỏ"
          ]
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
          "who": "lan",
          "say": "How many people, and what do you usually cook?",
          "sub": "Bác nấu cho mấy người, món gì ạ?",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "binh",
          "say": "Just me. Porridge in the morning.",
          "sub": "Có mình bác. Nấu cháo buổi sáng.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "One question first saves a whole wrong pitch.",
          "sub": "Hỏi trước một câu, đỡ giới thiệu sai cả buổi.",
          "phase": "redo",
          "keys": [
            "Hỏi trước một câu"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p14,p15"
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
            "text": "④ 14:05 · Nhắc lại rồi gợi ý",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:before"
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
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "binh",
                  "side": "right"
                }
              ],
              "props": [
                "cooking"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:repeats",
            "caption": "14:05 · quầy đồ gia dụng",
            "icon": "cooking"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Nhắc lại nhu cầu một câu",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l3:one sentence",
            "hl": [
              {
                "text": "một câu",
                "at": "l3:one sentence"
              }
            ]
          },
          {
            "id": "f-1b",
            "t": "text",
            "text": "→ sai thì khách sửa ngay",
            "x": 100,
            "y": 1330,
            "size": 42,
            "at": "l3:corrects"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "2–3 lựa chọn, kèm lý do",
            "x": 60,
            "y": 1420,
            "size": 44,
            "at": "l4:options",
            "color": "accent"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Quá nhiều món → khách rối",
            "x": 60,
            "y": 1495,
            "size": 42,
            "at": "l4:too many",
            "color": "muted"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Chưa chắc: “em hỏi quản lý ạ”",
            "x": 60,
            "y": 1585,
            "size": 44,
            "at": "l5:not sure"
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "Đoán bừa → khách quay lại đổi",
            "x": 60,
            "y": 1660,
            "size": 42,
            "at": "l5:guess",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before suggesting anything, Lan repeats the need.",
          "sub": "Trước khi gợi ý, Lan nhắc lại nhu cầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "So, a small pot, for one, for porridge in the morning. Right?",
          "sub": "Vậy là nồi nhỏ, cho một người, nấu cháo sáng, đúng không bác?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One sentence. If she got it wrong, he corrects her now, not at home.",
          "sub": "Một câu thôi. Hiểu sai thì khách sửa ngay, chứ không phải lúc về nhà mở túi.",
          "keys": [
            "sửa ngay"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then two or three options, each with one reason. Too many just confuses.",
          "sub": "Rồi hai ba lựa chọn, mỗi món một lý do. Đưa quá nhiều chỉ làm khách rối."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not sure? Say so, and ask the manager. A guess comes back as a return.",
          "sub": "Chưa chắc thì nói thật, hỏi quản lý rồi báo. Đoán bừa thì khách quay lại đổi trả.",
          "keys": [
            "nói thật"
          ]
        }
      ],
      "ref": "p16,p17,p18"
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
            "at": "l6",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 16:00 · Áo cho cháu",
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
              "set": "shop",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "tu",
                  "side": "right",
                  "enter": "walk",
                  "at": "l1"
                }
              ],
              "props": [
                "t-shirt"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "tu",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "tu",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:meet",
            "caption": "16:00 · quầy quần áo trẻ em",
            "icon": "t-shirt"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "① Nhắc lại: áo bé 5 tuổi",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l6:repeat+700"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "② Hỏi thêm: cao, gầy hay đầy?",
            "x": 2028,
            "y": 1335,
            "size": 44,
            "at": "l6:ask"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "③ Chọn theo chiều cao +1 nấc",
            "x": 2028,
            "y": 1410,
            "size": 44,
            "at": "l6:height",
            "hl": [
              {
                "text": "chiều cao",
                "at": "l6:height"
              }
            ]
          },
          {
            "id": "g-3b",
            "t": "text",
            "text": "giữ hoá đơn để đổi",
            "x": 2068,
            "y": 1480,
            "size": 40,
            "at": "l6:end",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, four p.m. Meet Bà Tư, a grandma on a mission.",
          "sub": "Chặng năm, bốn giờ chiều. Đây là Bà Tư, một bà nội đang đi “làm nhiệm vụ”.",
          "keys": [
            "Bà Tư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "tu",
          "say": "A shirt for my grandson, about five years old.",
          "sub": "Bà mua áo cho cháu, tầm năm tuổi.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "For a five year old. How tall is he? Slim, or chubby?",
          "sub": "Dạ, áo cho bé năm tuổi ạ. Bé cao chừng nào, gầy hay đầy đặn ạ?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "tu",
          "say": "Taller than the other kids his age.",
          "sub": "Cháu cao hơn bạn cùng tuổi.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Then we'll go by height, one size up. Please keep the receipt.",
          "sub": "Vậy mình chọn theo chiều cao, lớn một nấc. Bà giữ hoá đơn nhé.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Repeat, ask what age can't tell, then choose by height.",
          "sub": "Nhắc lại, hỏi điều tuổi chưa nói hết, rồi chọn theo chiều cao."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p19"
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
            "id": "g-x",
            "t": "text",
            "text": "Chỉ theo tuổi → áo chật vai",
            "x": 2028,
            "y": 1590,
            "size": 46,
            "at": "l1:age",
            "color": "coral"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Nhắc lại một câu,",
            "x": 2028,
            "y": 1690,
            "size": 54,
            "at": "l2:repeat",
            "color": "accent"
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "khách khỏi đi thêm một chuyến",
            "x": 2028,
            "y": 1765,
            "size": 44,
            "at": "l2:trip",
            "color": "accent",
            "hl": [
              {
                "text": "khỏi đi thêm",
                "at": "l2:trip"
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
          "say": "Go by age alone, and she's back tomorrow with a shirt tight at the shoulders.",
          "sub": "Chỉ chọn theo tuổi, rất có thể mai bà quay lại vì áo chật vai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Repeat once, and save the customer a trip.",
          "sub": "Nhắc lại một câu, khách khỏi đi thêm một chuyến.",
          "keys": [
            "khỏi đi thêm một chuyến"
          ]
        }
      ],
      "ref": "p19,p20"
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
            "text": "⑥ 18:00 · Điện thoại, tin nhắn",
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
              "set": "shop",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone",
                "speech-balloon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "lan",
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
            "caption": "18:00 · điện thoại và khung chat",
            "icon": "mobile-phone"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Câu đầu: tên cửa hàng + tên mình",
            "x": 3996,
            "y": 1260,
            "size": 42,
            "at": "l3:shop name+700"
          },
          {
            "id": "h-1b",
            "t": "text",
            "text": "Mẫu: “Hoa Mai xin nghe, em là Hạnh”",
            "x": 3996,
            "y": 1330,
            "size": 30,
            "at": "l3:shop name+1100",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Chat: xác nhận sớm một câu",
            "x": 3996,
            "y": 1420,
            "size": 44,
            "at": "l4:confirm"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Hỏi từng câu, không gửi một khối",
            "x": 3996,
            "y": 1490,
            "size": 42,
            "at": "l4:one question"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Hỏi số đo, mục đích, tầm giá",
            "x": 3996,
            "y": 1570,
            "size": 44,
            "at": "l5:size",
            "color": "accent",
            "hl": [
              {
                "text": "số đo",
                "at": "l5:size"
              }
            ]
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "→ đỡ đổi trả",
            "x": 4036,
            "y": 1640,
            "size": 44,
            "at": "l5:returns"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, six p.m. The phone rings while Lan answers chats.",
          "sub": "Chặng sáu, sáu giờ tối. Điện thoại reo khi Lan đang trả lời tin nhắn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "An Phát, Lan speaking. How can I help?",
          "sub": "An Phát xin nghe, em là Lan ạ. Em giúp gì được ạ?",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Shop name and your name first. They know they've called the right place, and relax.",
          "sub": "Câu đầu có tên cửa hàng và tên bạn: khách biết gọi đúng chỗ, bớt dè dặt.",
          "keys": [
            "tên cửa hàng và tên bạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "In chat: a quick line to confirm, then one question at a time.",
          "sub": "Tin nhắn: trả lời sớm một câu xác nhận, rồi hỏi từng câu một."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "They can't touch the item, so ask size, purpose and budget. Fewer returns later.",
          "sub": "Khách không cầm được hàng, nên hỏi số đo, mục đích, tầm giá để tránh đổi trả.",
          "keys": [
            "số đo, mục đích, tầm giá"
          ]
        }
      ],
      "ref": "p21,p22"
    },
    {
      "id": "s17",
      "module": "BRK-07",
      "data": {
        "question": "Thiếu doanh số, có nên gợi ý món đắt hơn?",
        "illus": "money-bag"
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
          "say": "Short on sales targets. Push the pricier item?",
          "sub": "Thiếu doanh số, có nên gợi ý món đắt hơn?",
          "keys": [
            "món đắt hơn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p23"
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
            "text": "19:30 · Bán đúng hay bán ép?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:evening"
          },
          {
            "id": "i-ok",
            "t": "text",
            "text": "Được: món tốt hơn, hợp nhu cầu",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l1:better",
            "color": "accent"
          },
          {
            "id": "i-ok2",
            "t": "text",
            "text": "và nói rõ vì sao",
            "x": 6004,
            "y": 1325,
            "size": 44,
            "at": "l1:why"
          },
          {
            "id": "i-st",
            "t": "text",
            "text": "Quầy điện máy, cuối tháng:",
            "x": 5964,
            "y": 1420,
            "size": 44,
            "at": "l2:appliance"
          },
          {
            "id": "i-st2",
            "t": "text",
            "text": "phòng nhỏ → máy lọc to nhất",
            "x": 6004,
            "y": 1485,
            "size": 42,
            "at": "l2:biggest",
            "color": "coral"
          },
          {
            "id": "i-st3",
            "t": "text",
            "text": "1 tuần sau: trả hàng",
            "x": 6004,
            "y": 1550,
            "size": 42,
            "at": "l3:week later",
            "color": "coral",
            "hl": [
              {
                "text": "trả hàng",
                "at": "l3:comes back"
              }
            ]
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Bán đúng thì khách quay lại,",
            "x": 5964,
            "y": 1650,
            "size": 46,
            "at": "l4:sell right",
            "color": "accent"
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "bán ép thì hàng quay lại",
            "x": 5964,
            "y": 1715,
            "size": 46,
            "at": "l4:push",
            "color": "accent",
            "hl": [
              {
                "text": "hàng quay lại",
                "at": "l4:goods"
              }
            ]
          },
          {
            "id": "i-lead",
            "t": "text",
            "text": "Trưởng ca: dán câu chào + 3 câu hỏi mở ở quầy",
            "x": 6804,
            "y": 1780,
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
          "say": "Evening, target nearly due. Suggest something better? Yes, if it fits the need, and you say why.",
          "sub": "Tối, sắp chốt doanh số. Gợi ý món tốt hơn? Được, nếu hợp nhu cầu và nói rõ vì sao."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "At the appliance counter, a colleague sells the biggest air purifier for a tiny bedroom.",
          "sub": "Quầy điện máy: anh đồng nghiệp bán máy lọc to nhất cho phòng ngủ nhỏ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A week later it comes back: too big, too loud at night. Sale lost, time lost.",
          "sub": "Một tuần sau chị trả: chiếm chỗ, kêu to ban đêm. Mất đơn, mất công."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sell right, and customers come back. Push, and the goods come back.",
          "sub": "Bán đúng thì khách quay lại, bán ép thì hàng quay lại.",
          "keys": [
            "hàng quay lại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Shift leaders: post a greeting and three open questions per best seller at the counter.",
          "sub": "Trưởng ca: dán ở quầy câu chào chung và ba câu hỏi mở cho mỗi nhóm hàng bán chạy."
        }
      ],
      "ref": "p23,p24,p25,p26"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "20:50 · Trước giờ đóng cửa",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:ten to nine"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "wave",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "walk",
                  "at": "l1"
                }
              ],
              "props": [
                "package",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
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
            "at": "l1:same mountain",
            "caption": "20:50 · vẫn núi hàng ấy",
            "icon": "package"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1270,
            "w": 44,
            "h": 44,
            "at": "l5:stop",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1252,
            "size": 56,
            "at": "l5:stop+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Dừng tay, nhìn, chào một câu",
            "x": 8002,
            "y": 1262,
            "size": 40,
            "at": "l5:stop+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1334,
            "w": 44,
            "h": 44,
            "at": "l5:signal",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1316,
            "size": 56,
            "at": "l5:signal+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Đợi tín hiệu rồi lại gần",
            "x": 8002,
            "y": 1326,
            "size": 40,
            "at": "l5:signal+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1398,
            "w": 44,
            "h": 44,
            "at": "l5:who for",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1380,
            "size": 56,
            "at": "l5:who for+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Hỏi “cho ai, để làm gì”",
            "x": 8002,
            "y": 1390,
            "size": 40,
            "at": "l5:who for+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1462,
            "w": 44,
            "h": 44,
            "at": "l6:repeat",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1444,
            "size": 56,
            "at": "l6:repeat+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Nhắc lại nhu cầu một câu",
            "x": 8002,
            "y": 1454,
            "size": 40,
            "at": "l6:repeat+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1526,
            "w": 44,
            "h": 44,
            "at": "l6:options",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1508,
            "size": 56,
            "at": "l6:options+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Gợi ý 2–3 món kèm lý do",
            "x": 8002,
            "y": 1518,
            "size": 40,
            "at": "l6:options+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Lời chào cao hơn mâm cỗ”",
            "x": 8772,
            "y": 1770,
            "size": 44,
            "at": "l4:feast",
            "color": "accent",
            "hl": [
              {
                "text": "Lời chào",
                "at": "l4:greeting"
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
          "say": "Ten to nine. Same mountain of stock. And Thảo walks in, with her son.",
          "sub": "Chín giờ kém mười. Vẫn núi hàng ấy. Và Thảo bước vào, dắt theo con trai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Good evening! Take your time, I'm right here.",
          "sub": "Em chào chị! Chị cứ xem thoải mái, em ở ngay đây ạ.",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Thanks! The kids' shoes, from this morning?",
          "sub": "Cảm ơn em! Cho chị xem giày trẻ em hồi sáng nhé?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A greeting is worth more than a feast. This time, Lan looked up.",
          "sub": "“Lời chào cao hơn mâm cỗ.” Lần này, Lan đã ngẩng lên.",
          "keys": [
            "Lan đã ngẩng lên"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Take this list: stop and greet, wait for a signal, ask who for and what for.",
          "sub": "Mang theo: dừng tay chào, đợi tín hiệu, hỏi “cho ai, để làm gì”."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Repeat the need in one sentence. Then two or three options, with reasons.",
          "sub": "Nhắc lại nhu cầu một câu, rồi gợi ý hai ba món kèm lý do."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p27,outro"
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
            "at": "l1:eyes",
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
            "x": 4716,
            "y": 700,
            "at": "l1:eyes"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8572,
            "y": 650,
            "at": "l2:request"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1690,
            "at": "l3:repeat"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "i-k",
              "i-k2"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:end+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: busy hands are fine, not busy eyes. Ready, never glued.",
          "sub": "Tóm lại: bận tay được, đừng bận mắt. Sẵn sàng, đừng kè kè.",
          "keys": [
            "đừng bận mắt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Find the real need behind the request, the part they don't say.",
          "sub": "Tìm nhu cầu thật sau lời yêu cầu, phần khách không nói ra.",
          "keys": [
            "nhu cầu thật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And repeat it in one sentence, before you suggest anything at all.",
          "sub": "Và nhắc lại trong một câu, trước khi gợi ý bất cứ thứ gì.",
          "keys": [
            "nhắc lại trong một câu"
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
      "ref": "questions[9]",
      "data": {
        "q": "A customer asks for a big bag, what should you find out first?",
        "options": [
          "Nothing more, just bring out the largest travel bags in the whole shop",
          "What they want to carry in it, so you know which kind of bag fits",
          "Which bag is the most expensive, so you can show that one to them first"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "handbag",
        "why": "Túi đựng máy tính đi làm khác hẳn túi du lịch. Hỏi khách định đựng gì để tìm ra nhu cầu thật."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A customer asks for a big bag, what should you find out first?",
          "sub": "Khách hỏi mua một cái túi to, bạn nên tìm hiểu điều gì trước?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "What they want to carry in it, so you know which kind of bag fits.",
          "sub": "Khách định đựng gì, để biết loại túi nào hợp."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Bringing out the biggest bag is a guess, and usually a wrong one.",
          "sub": "Mang ngay túi to nhất ra là đoán, và thường đoán sai."
        }
      ]
    },
    {
      "id": "s33",
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
          "say": "Pick three best sellers, write two open questions for each, and say them aloud before tomorrow's shift.",
          "sub": "Chọn ba món bán chạy, viết mỗi món hai câu hỏi mở, tập nói to trước ca mai."
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
