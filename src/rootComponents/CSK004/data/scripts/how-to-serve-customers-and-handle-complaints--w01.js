// Kịch bản video W lần 3 (#110, #112) — bài tổng "Phục vụ khách và xử lý khiếu nại cần nắm những gì?" · chuỗi "Phục vụ khách hàng và xử lý khiếu nại"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-serve-customers-and-handle-complaints--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "frontline-staff",
    "slug": "how-to-serve-customers-and-handle-complaints",
    "door": "ky-nang",
    "level": "B1",
    "title": "Phục vụ khách và xử lý khiếu nại cần nắm những gì?",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo TUẦN ĐẦU ĐI LÀM của Lan ở cửa hàng An Phát (Thứ Hai 8:55 → T2 9:30 chào khách → T3 14:00 khách gọi lần ba → T4 nói “không”, đổi trả + “Khoan đã!” ấm rỉ nước → T5 xin lỗi, giữ lời → T6 20:00 điện thoại, chat → T7 23:00 bài bóc phốt → CN 9:00 kiểm tra → Thứ Hai tuần sau). Mở: “Khách hàng là thượng đế” + ca dao “Lời nói chẳng mất tiền mua…”; khép: Lan chào Bác Bình đúng cách, “thượng đế cần được nghe, nói thật, giữ lời”. Nhân vật (luật đổi tên của chuỗi, w145/_series/frontline-staff.md): Lan (cô nhân viên mới p3, Thúy p18, bạn cùng ca p22), Thảo (chị khách mỹ phẩm p3, chị khách ấm đun nước p11), Dũng (nhân viên tổng đài p7, Bình nhân viên p11, người kiểm tra bài p22), Bác Bình (khách cuối, khép vòng). Ví dụ tiệm bánh p9, tiệm hoa p14 chỉ trên bảng / BRK-04. Cảnh ngắt nhịp: BRK-07 (rehook trước chặng 3), BRK-04 (tiệm hoa trước/sau), BRK-09 (Gneezy & Epley 2014), BRK-08 (bản đồ chuỗi p24). Câu đố: questions[6] (p5). Bản cũ (W lần 3, #110): w145/bak/how-to-serve-customers-and-handle-complaints--w01.js.",
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
            "id": "a-q1",
            "t": "text",
            "text": "“Khách hàng",
            "x": 60,
            "y": 100,
            "size": 100,
            "at": "l1:customer",
            "color": "accent"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "là thượng đế”",
            "x": 60,
            "y": 220,
            "size": 100,
            "at": "l1:king",
            "color": "accent",
            "hl": [
              {
                "text": "thượng đế",
                "at": "l1:king"
              }
            ]
          },
          {
            "id": "a-wr",
            "t": "text",
            "text": "Ta tưởng: luôn nói “có”?",
            "x": 70,
            "y": 370,
            "size": 50,
            "at": "l2:yes",
            "color": "muted"
          },
          {
            "id": "a-wrx",
            "t": "strike",
            "over": "a-wr",
            "at": "l3:test"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The customer is king. Every shop knows that by heart.",
          "sub": "“Khách hàng là thượng đế.” Cửa hàng nào cũng thuộc lòng.",
          "keys": [
            "Khách hàng là thượng đế"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So serving a king means yes to everything, with deep bows?",
          "sub": "Vậy phục vụ thượng đế là cái gì cũng “có”, kèm cúi rạp. Đúng không?",
          "keys": [
            "cái gì cũng “có”"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Let's test that for one whole week.",
          "sub": "Thử kiểm chứng trong trọn một tuần nhé."
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
              "set": "shop",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "lipstick",
                "bellhop-bell"
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
            "caption": "Thứ Hai 8:55 · ngày đầu đi làm",
            "icon": "convenience-store"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Lời nói chẳng mất tiền mua,",
            "x": 60,
            "y": 470,
            "size": 46,
            "at": "l4:words",
            "color": "accent"
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "lựa lời mà nói cho vừa…”",
            "x": 60,
            "y": 540,
            "size": 46,
            "at": "l4:choose",
            "color": "accent",
            "hl": [
              {
                "text": "lựa lời",
                "at": "l4:choose"
              }
            ]
          },
          {
            "id": "a-plan",
            "t": "text",
            "text": "Kế hoạch: kè kè + “dạ có”",
            "x": 900,
            "y": 660,
            "size": 44,
            "at": "l4:kindly",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Lan.",
          "sub": "Đây là Lan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "First week at An Phát, selling cosmetics and home goods.",
          "sub": "Tuần đầu đi làm ở An Phát, cửa hàng mỹ phẩm và đồ gia dụng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "I'll follow every customer, and say yes to everything!",
          "sub": "Khách nào em cũng theo sát, cái gì cũng “dạ có”!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Grandma says: words cost nothing, so choose them kindly.",
          "sub": "Ông bà dặn: “Lời nói chẳng mất tiền mua, lựa lời…”",
          "keys": [
            "Lời nói chẳng mất tiền mua"
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
            "text": "Tận tình mà vẫn giữ khách?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:serve",
            "hl": [
              {
                "text": "giữ khách",
                "at": "l1:keep"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: lúc nào cũng “có”",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l3:nodding",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:dog"
          },
          {
            "id": "b-y1",
            "t": "text",
            "text": "Mà là: nghe trước,",
            "x": 2028,
            "y": 270,
            "size": 58,
            "at": "l3:listening",
            "color": "accent",
            "hl": [
              {
                "text": "nghe trước",
                "at": "l3:listening"
              }
            ]
          },
          {
            "id": "b-y2",
            "t": "text",
            "text": "nói thật, giữ lời",
            "x": 2088,
            "y": 350,
            "size": 58,
            "at": "l3:truth",
            "color": "accent",
            "hl": [
              {
                "text": "giữ lời",
                "at": "l3:promises"
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
          "say": "So how do you serve well, and still keep the customer?",
          "sub": "Vậy phục vụ tận tình mà vẫn giữ được khách, bằng cách nào?",
          "keys": [
            "giữ được khách"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not by nodding like a dashboard dog, but by listening first, telling the truth, keeping promises.",
          "sub": "Không phải gật gù như chó taplô, mà là nghe trước, nói thật, và giữ lời.",
          "keys": [
            "nghe trước, nói thật, và giữ lời"
          ]
        }
      ],
      "ref": "intro,outro"
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
            "id": "b-r1",
            "t": "text",
            "text": "Chào, hỏi đúng nhu cầu",
            "x": 2868,
            "y": 160,
            "size": 46,
            "at": "l1:greet"
          },
          {
            "id": "b-r2",
            "t": "text",
            "text": "Nghe hết rồi mới giải thích",
            "x": 2868,
            "y": 225,
            "size": 46,
            "at": "l1:listen"
          },
          {
            "id": "b-r3",
            "t": "text",
            "text": "“Không” kèm một lối ra",
            "x": 2868,
            "y": 290,
            "size": 46,
            "at": "l1:way out",
            "hl": [
              {
                "text": "lối ra",
                "at": "l1:way out"
              }
            ]
          },
          {
            "id": "b-r4",
            "t": "text",
            "text": "Đổi trả công bằng",
            "x": 2868,
            "y": 355,
            "size": 46,
            "at": "l1:fairly"
          },
          {
            "id": "b-r5",
            "t": "text",
            "text": "Xin lỗi không “nhưng”",
            "x": 2868,
            "y": 420,
            "size": 46,
            "at": "l1:sorry"
          },
          {
            "id": "b-r6",
            "t": "text",
            "text": "Chỉ hứa điều đã kiểm tra",
            "x": 2868,
            "y": 485,
            "size": 46,
            "at": "l1:checked"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "6 chặng, 1 tuần của Lan",
            "x": 2028,
            "y": 545,
            "size": 52,
            "at": "l3:six stops",
            "hl": [
              {
                "text": "1 tuần",
                "at": "l3:first week"
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
            "at": "l3:six stops+300",
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
            "at": "l3:six stops+450",
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
            "at": "l3:six stops+600",
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
            "at": "l3:six stops+750",
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
            "at": "l3:six stops+900",
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
            "at": "l3:six stops+1050",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2",
            "x": 2098,
            "y": 628,
            "size": 48,
            "at": "l3:six stops+400"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3",
            "x": 2368,
            "y": 628,
            "size": 48,
            "at": "l3:six stops+550"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T4",
            "x": 2638,
            "y": 628,
            "size": 48,
            "at": "l3:six stops+700"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T5",
            "x": 2908,
            "y": 628,
            "size": 48,
            "at": "l3:six stops+850"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T6",
            "x": 3178,
            "y": 628,
            "size": 48,
            "at": "l3:six stops+1000"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T7–CN",
            "x": 3398,
            "y": 628,
            "size": 48,
            "at": "l3:six stops+1150"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Greet, ask the need, listen fully, say no with a way out, return fairly, sorry without but, promise only what's checked.",
          "sub": "Chào, hỏi nhu cầu, nghe hết, “không” kèm lối ra, đổi trả công bằng, xin lỗi không “nhưng”, hứa điều đã kiểm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Now, Lan's first week, in six stops.",
          "sub": "Giờ theo Lan qua tuần đầu đi làm, sáu chặng.",
          "keys": [
            "tuần đầu đi làm"
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
            "at": "a1",
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
            "text": "① Thứ Hai 9:30 · Chào khách",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
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
            "at": "l1:this is",
            "caption": "Thứ Hai 9:30 · quầy mỹ phẩm",
            "icon": "lipstick"
          },
          {
            "id": "c-a",
            "t": "text",
            "text": "A: kè kè, nói một tràng",
            "x": 3996,
            "y": 170,
            "size": 48,
            "at": "l4:shadow",
            "color": "coral"
          },
          {
            "id": "c-b",
            "t": "text",
            "text": "B: chào, đứng chỗ khách thấy",
            "x": 3996,
            "y": 245,
            "size": 46,
            "at": "l4:lighthouse",
            "color": "accent",
            "hl": [
              {
                "text": "khách thấy",
                "at": "l4:there"
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
          "say": "Stop one, Monday. This is Thảo, hunting for skincare. Two versions of Lan.",
          "sub": "Chặng một, Thứ Hai. Đây là Thảo, tìm đồ dưỡng da. Lan có hai bản.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "lan",
          "say": "This one's great! And this one, and this!",
          "sub": "Món này tốt lắm ạ! Cả món này, món này nữa!",
          "phase": "a",
          "face": "happy",
          "pose": "explain",
          "to": "thao"
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
          "sub": "Chị cứ xem thoải mái, cần gì em ở ngay đây ạ.",
          "phase": "b",
          "face": "happy",
          "pose": "wave",
          "to": "thao"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "thao",
          "say": "Excuse me, is this one good for dry skin?",
          "sub": "Em ơi, loại này dùng cho da khô được không?",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A: a shadow with a loudspeaker. B: a lighthouse, there but never chasing.",
          "sub": "A: cái bóng gắn loa. B: ngọn hải đăng, luôn ở đó, chẳng đuổi ai.",
          "keys": [
            "ngọn hải đăng"
          ]
        }
      ],
      "ref": "p3"
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
            "id": "c-sig",
            "t": "text",
            "text": "Tín hiệu: dừng lâu, nhìn quanh",
            "x": 3996,
            "y": 330,
            "size": 44,
            "at": "l1:signal"
          },
          {
            "id": "c-req",
            "t": "text",
            "text": "Lời yêu cầu ≠ nhu cầu thật",
            "x": 3996,
            "y": 410,
            "size": 50,
            "at": "l2:request",
            "color": "accent",
            "hl": [
              {
                "text": "nhu cầu thật",
                "at": "l2:real need"
              }
            ]
          },
          {
            "id": "c-ask",
            "t": "text",
            "text": "Hỏi mở, nhắc lại nhu cầu",
            "x": 3996,
            "y": 490,
            "size": 46,
            "at": "l3:open questions"
          },
          {
            "id": "c-rep",
            "t": "text",
            "text": "→ 2–3 lựa chọn kèm lý do",
            "x": 3996,
            "y": 565,
            "size": 46,
            "at": "l3:options"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Luôn sẵn sàng, không kè kè",
            "x": 3996,
            "y": 670,
            "size": 54,
            "at": "l4:ready",
            "color": "accent",
            "hl": [
              {
                "text": "sẵn sàng",
                "at": "l4:ready"
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
          "say": "Greet once, then wait for a signal: a long stop, or a look around.",
          "sub": "Chào một câu trả quyền chọn cho khách, rồi chờ tín hiệu: dừng lâu ở một món, hay nhìn quanh tìm người.",
          "keys": [
            "chờ tín hiệu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What they say is a request. What they need is the real need.",
          "sub": "Điều khách nói ra là lời yêu cầu; điều khách cần là nhu cầu thật.",
          "keys": [
            "nhu cầu thật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask open questions, repeat the need, then offer two or three options with reasons.",
          "sub": "Hỏi mở (“dùng dịp nào ạ?”), nhắc lại nhu cầu, rồi đưa 2–3 lựa chọn kèm lý do."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Keen means always ready, not always glued.",
          "sub": "Nhiệt tình là luôn sẵn sàng, không phải luôn kè kè.",
          "keys": [
            "luôn sẵn sàng"
          ]
        }
      ],
      "ref": "p1,p2,p4"
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
            "at": "l3",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Ba 14:00 · Gọi lần ba",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
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
                },
                {
                  "at": "l6",
                  "shot": "medium",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:meet",
            "caption": "Thứ Ba 14:00 · đường dây nóng",
            "icon": "telephone-receiver"
          },
          {
            "id": "d-bad",
            "t": "text",
            "text": "Trước: “Anh bình tĩnh ạ…”",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l4:snaps",
            "color": "coral"
          },
          {
            "id": "d-badx",
            "t": "strike",
            "over": "d-bad",
            "at": "l4:fire"
          },
          {
            "id": "d-good",
            "t": "text",
            "text": "Sau: xin lỗi + mở hoá đơn",
            "x": 5964,
            "y": 255,
            "size": 48,
            "at": "l7:heard",
            "color": "accent",
            "hl": [
              {
                "text": "mở hoá đơn",
                "at": "l7:heard"
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
          "say": "Stop two, Tuesday, the hotline. Meet Dũng: fast hands, faster mouth.",
          "sub": "Chặng hai, Thứ Ba, đường dây nóng. Đây là Dũng: tay nhanh, miệng nhanh hơn.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A man calls a third time about a wrong bill. Dũng cuts in.",
          "sub": "Một anh khách gọi lần thứ ba vì hoá đơn sai. Anh vừa nói hai câu, Dũng chen ngang."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Please calm down, sir. Let me explain.",
          "sub": "Anh bình tĩnh ạ, để em giải thích.",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "He snaps and demands a manager. Oil, meet fire.",
          "sub": "Anh khách gắt lên, đòi gặp cấp trên ngay. Dầu gặp lửa.",
          "keys": [
            "Dầu gặp lửa"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind.",
          "sub": "Tua lại."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Sorry you had to call three times. Opening your bill now.",
          "sub": "Xin lỗi anh phải gọi lần thứ ba. Em mở hoá đơn ngay ạ.",
          "pose": "phone"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Now he feels heard, and the work is moving.",
          "sub": "Giờ anh thấy mình được nghe, và việc đang được làm.",
          "keys": [
            "được nghe"
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
      "ref": "p7,p8"
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
            "id": "d-1",
            "t": "text",
            "text": "Thở chậm, để khách nói hết",
            "x": 5964,
            "y": 350,
            "size": 46,
            "at": "l1:breathe"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Cảm xúc: ghi nhận ngay",
            "x": 5964,
            "y": 420,
            "size": 46,
            "at": "l1:feelings",
            "hl": [
              {
                "text": "ghi nhận ngay",
                "at": "l1:feelings"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Sự việc: kiểm tra rồi kết luận",
            "x": 5964,
            "y": 490,
            "size": 44,
            "at": "l1:facts"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Kế hoạch: làm gì, ai, bao giờ",
            "x": 5964,
            "y": 570,
            "size": 46,
            "at": "l2:plan",
            "color": "accent"
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "Lăng mạ, vượt quyền → quản lý",
            "x": 6804,
            "y": 680,
            "size": 40,
            "at": "l3:manager",
            "color": "coral"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Cho khách lý do để bình tĩnh",
            "x": 5964,
            "y": 665,
            "size": 48,
            "at": "l4:reason",
            "color": "accent",
            "hl": [
              {
                "text": "lý do",
                "at": "l4:reason"
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
          "say": "Breathe, let them finish. Accept feelings now; check facts before concluding.",
          "sub": "Thở chậm, để khách nói hết. Cảm xúc ghi nhận ngay; sự việc kiểm tra rồi mới kết luận.",
          "keys": [
            "để khách nói hết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No power to decide? Still give a plan: what, who, and when.",
          "sub": "Không có quyền quyết vẫn có kế hoạch: làm gì, ai làm, bao giờ.",
          "keys": [
            "làm gì, ai làm, bao giờ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Insults or threats? Call the manager, and sum it up in front of them.",
          "sub": "Xúc phạm, đe doạ, vượt quyền? Gọi quản lý, kể tóm tắt trước mặt khách."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Don't tell customers to calm down. Give them a reason to.",
          "sub": "Đừng bảo khách bình tĩnh, hãy cho khách lý do để bình tĩnh.",
          "keys": [
            "lý do để bình tĩnh"
          ]
        }
      ],
      "ref": "p5,p6,p8"
    },
    {
      "id": "s10",
      "module": "BRK-07",
      "data": {
        "question": "Từ chối “thượng đế” mà vẫn giữ được khách?",
        "illus": "thinking-face"
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
          "say": "Can you say no to a king, and still keep him?",
          "sub": "Từ chối “thượng đế” mà vẫn giữ được khách?",
          "keys": [
            "vẫn giữ được khách"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p9"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Tư · “Không” và đổi trả",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:wednesday"
          },
          {
            "id": "e-x",
            "t": "text",
            "text": "Cụt lủn → khách đi",
            "x": 7932,
            "y": 170,
            "size": 48,
            "at": "l2:curt",
            "color": "coral"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Hiểu + lý do + lối ra",
            "x": 7932,
            "y": 250,
            "size": 56,
            "at": "l3:good no",
            "color": "accent",
            "hl": [
              {
                "text": "lối ra",
                "at": "l3:one thing"
              }
            ]
          },
          {
            "id": "e-cake",
            "t": "text",
            "text": "Tiệm bánh: “bánh đặt không kịp,",
            "x": 7932,
            "y": 345,
            "size": 42,
            "at": "l4:bakery"
          },
          {
            "id": "e-cake2",
            "t": "text",
            "text": "có bánh sẵn, viết chữ ngay”",
            "x": 7972,
            "y": 405,
            "size": 42,
            "at": "l4:ready one"
          },
          {
            "id": "e-boss",
            "t": "text",
            "text": "“Sếp em không cho”",
            "x": 7932,
            "y": 485,
            "size": 46,
            "at": "l5:boss",
            "color": "muted"
          },
          {
            "id": "e-bossx",
            "t": "strike",
            "over": "e-boss",
            "at": "l5:boss+500"
          },
          {
            "id": "e-all",
            "t": "text",
            "text": "“Áp dụng cho mọi khách”",
            "x": 7932,
            "y": 560,
            "size": 48,
            "at": "l5:every customer",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, Wednesday: the word no.",
          "sub": "Chặng ba: Thứ Tư. Một chữ nhỏ: “không”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "People rarely leave over a no. They leave over a curt no.",
          "sub": "Khách hiếm khi bỏ đi vì bị từ chối; họ bỏ đi vì bị từ chối cụt lủn.",
          "keys": [
            "cụt lủn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A good no: get the need, one reason, one thing you can do.",
          "sub": "Lời từ chối tốt: hiểu điều khách cần, một câu lý do, một phương án làm được.",
          "keys": [
            "một phương án làm được"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A bakery: no time to bake, but we can write on a ready one.",
          "sub": "Như tiệm bánh: “Bánh đặt thì không kịp, nhưng em có bánh làm sẵn, viết chữ ngay được ạ.”"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Say: we do this for every customer. Not: my boss says no.",
          "sub": "Và nói “bên em áp dụng như vậy cho mọi khách”, đừng đẩy sang “sếp em không cho”.",
          "keys": [
            "cho mọi khách"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Then Thảo comes back, holding a kettle.",
          "sub": "Rồi Thảo quay lại, tay cầm ấm đun nước."
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "shop",
        "label": "Thứ Tư 10:05 · mất hoá đơn",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "thao",
            "side": "right",
            "pose": "give"
          }
        ],
        "props": [
          "teapot"
        ],
        "verdict": {
          "ok": false,
          "label": "Không hoá đơn là từ chối luôn",
          "why": "Khách bực bỏ đi, trong khi tra số điện thoại là ra ngay đơn hàng.",
          "rule": "Hoá đơn có thể mất, giao dịch vẫn còn dấu"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "This kettle leaks. Five days old, and I lost the receipt.",
          "sub": "Ấm rỉ nước ở đáy. Mới mua năm ngày, chị mất hoá đơn rồi.",
          "face": "worried",
          "pose": "give"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "No receipt? Then there's nothing we can do.",
          "sub": "Không có hoá đơn thì bên em chịu ạ.",
          "pose": "cross",
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
          "say": "She'd leave for good. Yet her phone number finds the order.",
          "sub": "Chị sẽ bực, bỏ đi luôn. Trong khi tra số điện thoại là ra đơn.",
          "keys": [
            "tra số điện thoại là ra đơn"
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
          "who": "dung",
          "say": "Your phone number, please? I'll find the order.",
          "sub": "Chị cho em số điện thoại, em tìm đơn ạ.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Receipts get lost. Sales leave a trace.",
          "sub": "Hoá đơn có thể mất, giao dịch thì vẫn còn dấu.",
          "phase": "redo",
          "keys": [
            "giao dịch thì vẫn còn dấu"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p11,p12"
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
          }
        ],
        "items": [
          {
            "id": "e-r0",
            "t": "text",
            "text": "Đổi trả: nghe trước, quy định sau",
            "x": 8772,
            "y": 170,
            "size": 44,
            "at": "l1:listen"
          },
          {
            "id": "e-r1",
            "t": "text",
            "text": "① Lỗi, giao sai → bên bán chịu",
            "x": 8772,
            "y": 250,
            "size": 44,
            "at": "l2:faulty",
            "hl": [
              {
                "text": "bên bán chịu",
                "at": "l2:responsible"
              }
            ]
          },
          {
            "id": "e-r2",
            "t": "text",
            "text": "② Đổi ý → điều kiện cửa hàng",
            "x": 8772,
            "y": 325,
            "size": 44,
            "at": "l3:mind"
          },
          {
            "id": "e-r3",
            "t": "text",
            "text": "③ Nghi đã dùng → nói về hàng",
            "x": 8772,
            "y": 400,
            "size": 44,
            "at": "l4:used",
            "hl": [
              {
                "text": "nói về hàng",
                "at": "l4:item"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Tham khảo: Luật Bảo vệ quyền lợi người tiêu dùng 2023 (Điều 10)",
            "x": 8772,
            "y": 700,
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
          "say": "Returns: listen first, rules second, then three cases.",
          "sub": "Đổi trả: nghe trước, quy định sau, rồi chia ba trường hợp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Faulty or wrong item: the seller is responsible, and pays the costs.",
          "sub": "Hàng lỗi hoặc giao sai: bên bán chịu trách nhiệm và chịu chi phí phát sinh.",
          "keys": [
            "bên bán chịu trách nhiệm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Change of mind: the shop's exchange rules.",
          "sub": "Khách đổi ý: theo điều kiện đổi của cửa hàng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Suspect it was used? Talk about the item, not the person.",
          "sub": "Nghi khách đã dùng? Nói về món hàng, không nói về con người.",
          "keys": [
            "Nói về món hàng"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s14",
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
            "text": "④ Thứ Năm · Xin lỗi, giữ lời",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:warehouse"
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
                  "side": "center",
                  "face": "thinking",
                  "pose": "think"
                }
              ],
              "props": [
                "package"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:faces",
            "caption": "Thứ Năm · kho giao nhầm hàng",
            "icon": "package"
          },
          {
            "id": "f-us",
            "t": "text",
            "text": "Quầy, kho, người giao = “bên em”",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l3:us",
            "hl": [
              {
                "text": "“bên em”",
                "at": "l3:us"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Sai gì + nhận lỗi + cách sửa",
            "x": 60,
            "y": 1350,
            "size": 46,
            "at": "l4:what went wrong",
            "color": "accent"
          },
          {
            "id": "f-lim",
            "t": "text",
            "text": "Bù lớn hơn: hỏi quản lý",
            "x": 60,
            "y": 1435,
            "size": 44,
            "at": "l4:compensation"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, Thursday. The warehouse sent a wrong item. Lan faces the customer.",
          "sub": "Chặng bốn: Thứ Năm. Kho giao nhầm hàng cho khách, còn Lan đang đứng quầy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "The warehouse got it wrong. Why should I say sorry?",
          "sub": "Kho làm sai mà. Sao em phải xin lỗi?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "To customers, counter, warehouse and driver are all just us. Apologise for the shop.",
          "sub": "Với khách, quầy, kho, người giao đều là “bên em”. Xin lỗi thay cửa hàng.",
          "keys": [
            "“bên em”"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Say what went wrong, own it, fix it. Bigger compensation? Ask the manager.",
          "sub": "Nói điều đã sai, nhận lỗi, cách sửa. Bù đắp lớn hơn? Hỏi quản lý.",
          "keys": [
            "nhận lỗi"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s15",
      "module": "BRK-04",
      "data": {
        "title": "Tiệm hoa giao nhầm hoa đi viếng",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“Em xin lỗi nhưng hôm nay đơn nhiều quá ạ.”",
        "right": "“Em xin lỗi, bên em giao nhầm. Hoa trắng mới trong một giờ.”",
        "wrongIllus": "bouquet",
        "rightIllus": "white-flower"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: sorry, but we're busy.",
          "sub": "Trước: “Xin lỗi nhưng đơn nhiều quá ạ.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: our mistake. New flowers in an hour.",
          "sub": "Sau: “Bên em giao nhầm. Hoa mới trong một giờ.”",
          "keys": [
            "Bên em giao nhầm"
          ]
        }
      ],
      "ref": "p14"
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
            "id": "f-but",
            "t": "text",
            "text": "Sau “xin lỗi”, cấm “nhưng”",
            "x": 60,
            "y": 1620,
            "size": 54,
            "at": "l1:never",
            "color": "accent",
            "hl": [
              {
                "text": "cấm “nhưng”",
                "at": "l1:never"
              }
            ]
          },
          {
            "id": "f-sm",
            "t": "text",
            "text": "“Lát em gọi lại” = lời hứa",
            "x": 900,
            "y": 1770,
            "size": 42,
            "at": "l2:call you back",
            "color": "coral"
          },
          {
            "id": "f-p1",
            "t": "text",
            "text": "Kiểm tra rồi hứa, mốc có dư",
            "x": 60,
            "y": 1715,
            "size": 44,
            "at": "l2:check first"
          },
          {
            "id": "f-p2",
            "t": "text",
            "text": "Ghi lại, bàn giao, gọi đúng giờ",
            "x": 60,
            "y": 1785,
            "size": 42,
            "at": "l3:write"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "After sorry, never put but. It sounds like an excuse.",
          "sub": "Sau lời xin lỗi, đừng đặt chữ “nhưng”: nghe như bào chữa.",
          "keys": [
            "đừng đặt chữ “nhưng”"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "I'll call you back is a promise. Check first, give a clear time, with spare.",
          "sub": "“Lát em gọi lại” cũng là lời hứa. Kiểm tra trước, rồi hứa mốc cụ thể có dư một chút.",
          "keys": [
            "cũng là lời hứa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Write it down, hand it over, and call back on time, even with no news.",
          "sub": "Ghi lại, bàn giao ca sau, và gọi lại đúng giờ, dù chỉ để báo chưa có tin.",
          "keys": [
            "gọi lại đúng giờ"
          ]
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s17",
      "module": "BRK-09",
      "data": {
        "kind": "Nguồn",
        "title": "Gneezy & Epley, 2014",
        "detail": "Làm vượt lời hứa hầu như không được đánh giá cao hơn",
        "illus": "handshake",
        "around": [
          "alarm-clock",
          "package"
        ],
        "icon": "book-open"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Gneezy and Epley, twenty fourteen.",
          "sub": "Nghiên cứu của Gneezy và Epley, năm 2014."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Beating a promise barely beats keeping it.",
          "sub": "Làm vượt lời hứa chẳng được khen hơn giữ đúng lời.",
          "keys": [
            "giữ đúng lời"
          ]
        }
      ],
      "ref": "p16"
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
            "at": "l3",
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
            "text": "⑤ Thứ Sáu 20:00 · Điện thoại, chat",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
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
                  "at": "l3",
                  "shot": "medium",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:phone",
            "caption": "Thứ Sáu 20:00 · trực tổng đài",
            "icon": "mobile-phone"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Câu đầu: tên cửa hàng + tên mình",
            "x": 2028,
            "y": 1260,
            "size": 42,
            "at": "l6:names"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Mã đơn: đọc lại từng số",
            "x": 2028,
            "y": 1330,
            "size": 46,
            "at": "l6:numbers",
            "hl": [
              {
                "text": "từng số",
                "at": "l6:numbers"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Xin phép, nói chờ bao lâu",
            "x": 2028,
            "y": 1400,
            "size": 46,
            "at": "l6:how long"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, Friday night: phone and five chats.",
          "sub": "Chặng năm, tối Thứ Sáu: điện thoại và năm khung chat."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "An Phát shop, Lan speaking. How can I help?",
          "sub": "An Phát xin nghe, em là Lan. Em giúp gì được ạ?",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "I'll read your code back. Could you hold two minutes while I check?",
          "sub": "Em đọc lại mã đơn. Anh giữ máy hai phút để em kiểm tra nhé?",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "On the phone, silence is all they see. Names first, numbers back, and say how long.",
          "sub": "Qua điện thoại, khách chỉ thấy im lặng. Nói tên trước, đọc lại số, báo chờ bao lâu."
        }
      ],
      "ref": "p17"
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
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-c",
            "t": "text",
            "text": "Chat: xác nhận sớm, viết ngắn",
            "x": 2028,
            "y": 1490,
            "size": 44,
            "at": "l1:confirm"
          },
          {
            "id": "g-c2",
            "t": "text",
            "text": "Tin mẫu: sửa đúng tên, đúng chuyện",
            "x": 2028,
            "y": 1555,
            "size": 40,
            "at": "l1:ready made"
          },
          {
            "id": "g-msg",
            "t": "text",
            "text": "“Ai đây? Sao gửi địa chỉ?”",
            "x": 2028,
            "y": 1645,
            "size": 44,
            "at": "l3:who is this",
            "color": "coral"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Đọc tên khách rồi mới gửi",
            "x": 2028,
            "y": 1750,
            "size": 52,
            "at": "l5:read the name",
            "color": "accent",
            "hl": [
              {
                "text": "Đọc tên khách",
                "at": "l5:read the name"
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
          "say": "In chat: confirm fast, keep it short, fix ready made replies to fit.",
          "sub": "Tin nhắn: gửi sớm một câu xác nhận, viết ngắn, sửa tin soạn sẵn cho đúng tên, đúng chuyện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Rushing, Lan pastes one customer's address into another customer's chat.",
          "sub": "Đang vội, Lan dán địa chỉ của chị khách này vào khung chat của khách khác."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Reply: who is this? Why send me someone's address?",
          "sub": "Trả lời: “Ai đây? Sao gửi địa chỉ nhà người ta cho tôi?”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Oh no. Wrong chat!",
          "sub": "Chết rồi. Gửi nhầm khung chat!",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two customers to apologise to. Read the name before you press send.",
          "sub": "Cửa hàng phải xin lỗi cả hai người. Đọc tên khách trước khi bấm gửi.",
          "keys": [
            "Đọc tên khách trước khi bấm gửi"
          ]
        }
      ],
      "ref": "p17,p18,p19"
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
            "text": "⑥ Thứ Bảy 23:00 · Bị chê",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:saturday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone"
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
            "at": "l1:post",
            "caption": "Thứ Bảy 23:00 · bài trong hội nhóm",
            "icon": "crescent-moon"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Chụp lại, lưu đường dẫn",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l3:screenshot"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Báo quản lý ngay, cả ngoài giờ",
            "x": 3996,
            "y": 1330,
            "size": 44,
            "at": "l3:manager",
            "hl": [
              {
                "text": "ngay",
                "at": "l3:now"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Đừng cãi bằng tài khoản riêng",
            "x": 3996,
            "y": 1400,
            "size": 44,
            "at": "l4:own account",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, Saturday night. A post says An Phát staff shouted at a customer.",
          "sub": "Chặng sáu: mười một giờ đêm Thứ Bảy. Dũng thấy bài đăng: nhân viên An Phát quát khách."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Whoa. Should I jump in and argue?",
          "sub": "Ơ hay. Hay mình vào cãi luôn?",
          "face": "surprised",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Keyboard down, warrior. Screenshot, save the link, tell the manager now. Early hours spread fastest.",
          "sub": "Bỏ bàn phím xuống, chiến binh. Chụp lại, lưu đường dẫn, báo quản lý ngay: vài giờ đầu bài lan nhanh nhất.",
          "keys": [
            "báo quản lý ngay"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No comments from your own account.",
          "sub": "Và đừng bình luận bằng tài khoản cá nhân."
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
            "id": "h-r",
            "t": "text",
            "text": "Trả lời công khai, 3–5 câu:",
            "x": 3996,
            "y": 1490,
            "size": 44,
            "at": "l1:three"
          },
          {
            "id": "h-r1",
            "t": "text",
            "text": "cảm ơn, xin lỗi cụ thể",
            "x": 4036,
            "y": 1555,
            "size": 42,
            "at": "l2:thanks"
          },
          {
            "id": "h-r2",
            "t": "text",
            "text": "bước sẽ làm, mời nhắn riêng",
            "x": 4036,
            "y": 1615,
            "size": 42,
            "at": "l2:next step"
          },
          {
            "id": "h-priv",
            "t": "text",
            "text": "Mã đơn, bồi thường: nhắn riêng",
            "x": 3996,
            "y": 1690,
            "size": 42,
            "at": "l3:private",
            "hl": [
              {
                "text": "nhắn riêng",
                "at": "l3:private"
              }
            ]
          },
          {
            "id": "h-tm",
            "t": "text",
            "text": "Trang: 1 ngày · lan nhanh: vài giờ",
            "x": 3996,
            "y": 1760,
            "size": 40,
            "at": "l4:within hours"
          },
          {
            "id": "h-up",
            "t": "text",
            "text": "Xong → cập nhật một dòng",
            "x": 4836,
            "y": 1770,
            "size": 44,
            "at": "l4:update",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Hundreds will read your public reply. Check, then write three to five sentences.",
          "sub": "Trả lời công khai là để hàng trăm khách sau đọc. Kiểm tra, rồi viết ba đến năm câu.",
          "keys": [
            "hàng trăm khách sau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thanks, a specific sorry, next step, invite to message privately.",
          "sub": "Cảm ơn, xin lỗi cụ thể về trải nghiệm, bước sẽ làm, mời nhắn riêng.",
          "keys": [
            "mời nhắn riêng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Codes and compensation stay private. Never post personal details.",
          "sub": "Mã đơn, bồi thường: nhắn riêng. Không đưa thông tin cá nhân lên công khai.",
          "keys": [
            "thông tin cá nhân"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Reviews within a day, viral posts within hours, then a one line update.",
          "sub": "Đánh giá: trong một ngày. Bài lan nhanh: vài giờ. Xong thì cập nhật một dòng."
        }
      ],
      "ref": "p20,p21"
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
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "CN 9:00 · Kiểm tra rồi mới báo",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:sunday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "left"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "lan",
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
            "at": "l1:manager",
            "caption": "Chủ nhật 9:00 · trước giờ mở cửa",
            "icon": "magnifying-glass-tilted-left"
          },
          {
            "id": "i-no",
            "t": "text",
            "text": "“Làm gì có!” → báo “không có”",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l5:check",
            "color": "coral"
          },
          {
            "id": "i-nox",
            "t": "strike",
            "over": "i-no",
            "at": "l5:camera"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1370,
            "w": 46,
            "h": 46,
            "at": "l5:camera",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1352,
            "size": 58,
            "at": "l5:camera+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Xem camera",
            "x": 6034,
            "y": 1362,
            "size": 44,
            "at": "l5:camera+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1440,
            "w": 46,
            "h": 46,
            "at": "l5:others",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1422,
            "size": 58,
            "at": "l5:others+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Hỏi thêm người cùng ca",
            "x": 6034,
            "y": 1432,
            "size": 44,
            "at": "l5:others+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1510,
            "w": 46,
            "h": 46,
            "at": "l5:messages",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1492,
            "size": 58,
            "at": "l5:messages+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Đọc lại tin nhắn khách",
            "x": 6034,
            "y": 1502,
            "size": 44,
            "at": "l5:messages+200"
          },
          {
            "id": "i-2x",
            "t": "text",
            "text": "Vội phủ nhận → xin lỗi 2 lần",
            "x": 5964,
            "y": 1610,
            "size": 44,
            "at": "l6:twice",
            "color": "coral",
            "hl": [
              {
                "text": "2 lần",
                "at": "l6:twice"
              }
            ]
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Chưa kiểm tra, chưa nói “không”",
            "x": 5964,
            "y": 1710,
            "size": 50,
            "at": "l6:end",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sunday. The manager asks Dũng to check the post.",
          "sub": "Chủ nhật. Quản lý nhờ Dũng kiểm tra bài đăng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Lan, did anyone shout at a customer last night?",
          "sub": "Lan ơi, tối qua có ai quát khách không?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "No way!",
          "sub": "Làm gì có!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Great. I'll report it never happened.",
          "sub": "Ngon. Anh báo là không có chuyện đó.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One answer is not a check. Camera, others on the shift, messages. Then report.",
          "sub": "Một người trả lời chưa phải là kiểm tra. Xem camera, hỏi cả ca, đọc tin nhắn, rồi báo.",
          "keys": [
            "chưa phải là kiểm tra"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Deny too fast, and a video means apologising twice.",
          "sub": "Vội phủ nhận mà lộ video, là xin lỗi hai lần.",
          "keys": [
            "xin lỗi hai lần"
          ]
        }
      ],
      "ref": "p22,p23"
    },
    {
      "id": "s23",
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
            "text": "Thứ Hai tuần sau · 9:30",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:next monday"
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
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "walk",
                  "at": "l1"
                }
              ],
              "props": [
                "wrapped-gift"
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
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:same shop",
            "caption": "Thứ Hai tuần sau · 9:30",
            "icon": "convenience-store"
          },
          {
            "id": "j-g",
            "t": "text",
            "text": "Chào một câu, đứng chờ",
            "x": 7932,
            "y": 1260,
            "size": 48,
            "at": "l5:nothing"
          },
          {
            "id": "j-q",
            "t": "text",
            "text": "Hỏi mở: “dịp nào ạ?”",
            "x": 7932,
            "y": 1340,
            "size": 48,
            "at": "l5:chose"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Lựa lời mà nói…”",
            "x": 7932,
            "y": 1450,
            "size": 62,
            "at": "l5:well",
            "color": "accent",
            "hl": [
              {
                "text": "Lựa lời",
                "at": "l5:well"
              }
            ]
          },
          {
            "id": "j-king",
            "t": "text",
            "text": "Thượng đế: được nghe, nói thật",
            "x": 7932,
            "y": 1570,
            "size": 44,
            "at": "l6:listening"
          },
          {
            "id": "j-king2",
            "t": "text",
            "text": "và được giữ lời",
            "x": 7972,
            "y": 1635,
            "size": 44,
            "at": "l6:promises",
            "hl": [
              {
                "text": "giữ lời",
                "at": "l6:promises"
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
          "say": "Next Monday, same shop. Here's Bác Bình, a new customer.",
          "sub": "Thứ Hai tuần sau, vẫn cửa hàng ấy. Đây là Bác Bình, khách mới.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Good morning! Take your time, I'm right here.",
          "sub": "Em chào bác! Bác cứ xem thoải mái, em ở ngay đây ạ.",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Thanks. I need a gift, actually.",
          "sub": "Cảm ơn cháu. Bác đang cần một món quà.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Lovely! What's the occasion?",
          "sub": "Dạ, bác tặng dịp gì ạ?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Words cost nothing. This week, Lan chose them well.",
          "sub": "“Lời nói chẳng mất tiền mua.” Tuần này, Lan đã biết lựa.",
          "keys": [
            "Lan đã biết lựa"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The king never needed endless yeses. Just listening, truth, and kept promises.",
          "sub": "Thượng đế chưa bao giờ cần “có” mãi. Chỉ cần được nghe, được nói thật, được giữ lời.",
          "keys": [
            "được nghe, được nói thật, được giữ lời"
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
      "ref": "p1,p2,outro"
    },
    {
      "id": "s24",
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
            "at": "l1:greet",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:listen",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:sorry",
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
            "x": 4696,
            "y": 660,
            "at": "l1:greet"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6704,
            "y": 600,
            "at": "l2:listen"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 800,
            "y": 1610,
            "at": "l3:sorry"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "i-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:deny"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; đổi trả, dữ liệu khách: theo luật hiện hành và quy định cửa hàng.",
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
          "say": "So: greet, ask the need. Ready, never glued.",
          "sub": "Tóm lại: chào, hỏi nhu cầu. Sẵn sàng, đừng kè kè.",
          "keys": [
            "Sẵn sàng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Listen fully, and say no with a way out.",
          "sub": "Nghe hết; nói “không” kèm lối ra.",
          "keys": [
            "Nghe hết"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sorry without but, promise what's checked, check before you deny.",
          "sub": "Xin lỗi không “nhưng”, hứa điều đã kiểm, kiểm tra rồi mới phủ nhận.",
          "keys": [
            "kiểm tra rồi mới phủ nhận"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s25",
      "module": "BRK-08",
      "data": {
        "title": "Chuỗi bài: đi tiếp từ đâu?",
        "current": 0,
        "points": [
          {
            "label": "Chào, hỏi nhu cầu",
            "illus": "waving-hand"
          },
          {
            "label": "Khách nổi giận",
            "illus": "angry-face"
          },
          {
            "label": "Từ chối, đổi trả",
            "illus": "counterclockwise-arrows-button"
          },
          {
            "label": "Xin lỗi, giữ lời",
            "illus": "handshake"
          },
          {
            "label": "Điện thoại, tin nhắn",
            "illus": "mobile-phone"
          },
          {
            "label": "Bị chê trên mạng",
            "illus": "speech-balloon"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Lan's week is the map of this series.",
          "sub": "Tuần của Lan cũng là bản đồ cả chuỗi bài."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Start with the first hello.",
          "sub": "Bắt đầu từ lời chào đầu tiên.",
          "keys": [
            "lời chào đầu tiên"
          ]
        }
      ],
      "ref": "p24"
    },
    {
      "id": "s39",
      "module": "QUIZ-01",
      "ref": "questions[6]",
      "data": {
        "q": "A customer starts shouting at the counter, what should you do in the first seconds?",
        "options": [
          "Take a slow breath, look at them, and let them say everything first",
          "Interrupt quickly and explain the shop rules before the problem gets worse",
          "Tell them to calm down and speak more quietly in front of other people"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "angry-face",
        "why": "Người đang giận cần được xả trước. Bảo khách bình tĩnh nghe như trách khách."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A customer starts shouting at the counter, what should you do in the first seconds?",
          "sub": "Khách bắt đầu to tiếng ở quầy, mấy giây đầu bạn nên làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Take a slow breath, look at them, and let them say everything first.",
          "sub": "Thở chậm một hơi, nhìn khách, để khách nói hết trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Angry people need to let it out first. 'Calm down' sounds like blame, so they get louder.",
          "sub": "Người đang giận cần được xả trước. Bảo bình tĩnh nghe như trách, nên khách nói to hơn."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s40",
      "module": "END-05",
      "data": {
        "text": "Trước ca tới: 1 câu chào, 2 câu hỏi mở",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before your next shift, write one greeting and two open questions. Then try the forty questions below!",
          "sub": "Trước ca tới, viết một câu chào và hai câu hỏi mở. Rồi thử bốn mươi câu bên dưới nhé!"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s23"
  }
};
