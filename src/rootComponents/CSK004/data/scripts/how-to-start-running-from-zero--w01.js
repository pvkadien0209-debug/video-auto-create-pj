// Kịch bản video W lần 3 (#110) — "Bắt đầu chạy bộ từ con số không" · chuỗi "Chạy bộ cho người mới". Mở rộng đủ ý (#110).
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-start-running-from-zero--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "new-runners",
    "slug": "how-to-start-running-from-zero",
    "door": "ky-nang",
    "level": "B1",
    "title": "Bắt đầu chạy bộ từ con số không",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo HAI THÁNG ĐẦU của Dũng (tối CN tuần 0 → thứ Hai tuần 1 → thứ Tư tuần 1 → tuần 3 → tuần 4 → tuần 6 → tuần 7 → tối CN tuần 8). Nhân vật (w145/_series/new-runners.md): Dũng (chính: anh Tùng p8, người thứ hai p13, người đi công tác p23, người mới chạy nhóm p22), Bác Bình (hàng xóm, nói lời khuyên p1), Thảo (người thứ nhất p13; uống thuốc giảm đau p18), Sam (câu hỏi dựng để Dũng nói câu mẫu p22). Số liệu chỉ lấy từ bài: 20–30 phút, 3 buổi/tuần, 5′ + 1′/2′ × 4–6, 30 giây, 400 m, 10 ngày, 5 km. Ngắt nhịp: BRK-02 (p9), BRK-07 rehook, BRK-08 dòng thời gian, BRK-04 Sai/Đúng (p23). Khép vòng: giày trong tủ (tuần 0) → giày cạnh cửa (tuần 8), ca dao “Đi đâu mà vội mà vàng”. Bản cũ (W lần 3, #110): w145/bak/how-to-start-running-from-zero--w01.js.",
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
            "text": "20–30 phút",
            "x": 60,
            "y": 130,
            "size": 150,
            "at": "l1:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "20–30 phút",
                "at": "l1:minutes"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "mỗi buổi · 3 buổi một tuần",
            "x": 70,
            "y": 360,
            "size": 56,
            "at": "l1:three"
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: phải khoẻ sẵn mới chạy?",
            "x": 70,
            "y": 470,
            "size": 50,
            "at": "l2:fit",
            "color": "muted"
          },
          {
            "id": "a-mx",
            "t": "strike",
            "over": "a-myth",
            "at": "l2:wrong"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Theo bài học; tham khảo NHS Couch to 5K (3 buổi/tuần), WHO 2020",
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
          "say": "Twenty to thirty minutes, three times a week. That is how running starts from zero.",
          "sub": "Hai mươi đến ba mươi phút, ba buổi một tuần. Chạy bộ từ con số không bắt đầu như thế.",
          "keys": [
            "ba buổi một tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet we believe you must be fit before you can run. That's the wrong way round.",
          "sub": "Vậy mà ta cứ tưởng phải khoẻ sẵn mới chạy được. Ngược hẳn rồi.",
          "keys": [
            "Ngược hẳn rồi"
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "stand"
                }
              ],
              "props": [
                "running-shoe",
                "spiral-calendar"
              ]
            },
            "at": "l1",
            "caption": "Tối Chủ nhật · tuần 0",
            "icon": "running-shoe"
          },
          {
            "id": "a-x3",
            "t": "text",
            "text": "“Tuần này mình chạy!” × 3",
            "x": 70,
            "y": 570,
            "size": 50,
            "at": "l4:third",
            "color": "coral",
            "hl": [
              {
                "text": "× 3",
                "at": "l4:third"
              }
            ]
          },
          {
            "id": "a-tu",
            "t": "text",
            "text": "Giày vẫn ngủ trong tủ",
            "x": 900,
            "y": 660,
            "size": 46,
            "at": "l4:cupboard",
            "color": "muted"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Nói một tấc đến trời”",
            "x": 70,
            "y": 640,
            "size": 50,
            "at": "l5:inch",
            "color": "accent",
            "hl": [
              {
                "text": "một tấc đến trời",
                "at": "l5:sky"
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
          "say": "Meet Dũng.",
          "sub": "Đây là Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twenty-two, new at a warehouse job, never been for a run.",
          "sub": "Hai mươi hai tuổi, mới đi làm ở kho, chưa chạy bộ buổi nào.",
          "keys": [
            "chưa chạy bộ buổi nào"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "This week I'll start running. For real this time!",
          "sub": "Tuần này mình bắt đầu chạy. Lần này là thật!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That's his third 'this week'. His old shoes are still asleep in the cupboard.",
          "sub": "Đây là lần “tuần này” thứ ba. Đôi giày cũ vẫn ngủ yên trong tủ.",
          "keys": [
            "lần “tuần này” thứ ba"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders call it talking one inch from the sky.",
          "sub": "Ông bà gọi là “nói một tấc đến trời”.",
          "keys": [
            "một tấc đến trời"
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
            "text": "Bắt đầu từ số 0 thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:zero",
            "hl": [
              {
                "text": "từ số 0",
                "at": "l1:zero+300"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: chạy nhanh, chạy xa",
            "x": 2028,
            "y": 170,
            "size": 54,
            "at": "l2:fast",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:complaint"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: chạy chậm, xen đi bộ",
            "x": 2028,
            "y": 260,
            "size": 58,
            "at": "l3:mixing",
            "color": "accent",
            "hl": [
              {
                "text": "chạy chậm",
                "at": "l3:slow"
              }
            ]
          },
          {
            "id": "b-add",
            "t": "text",
            "text": "… và tăng từng chút một",
            "x": 2068,
            "y": 350,
            "size": 52,
            "at": "l3:little"
          },
          {
            "id": "b-cm",
            "t": "text",
            "text": "“Chậm mà chắc”",
            "x": 3068,
            "y": 300,
            "size": 72,
            "at": "l4:steady",
            "color": "accent",
            "hl": [
              {
                "text": "Chậm mà chắc",
                "at": "l4:steady"
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
          "say": "So how do you start running from absolute zero?",
          "sub": "Vậy bắt đầu chạy bộ từ con số không thế nào?",
          "keys": [
            "từ con số không"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not fast and far until your lungs file a complaint.",
          "sub": "Không phải chạy nhanh, chạy xa đến khi phổi nộp đơn khiếu nại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But by mixing walking with very slow running, and adding a little at a time.",
          "sub": "Mà là xen đi bộ với chạy thật chậm, và tăng từng chút một.",
          "keys": [
            "chạy thật chậm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Slow and steady. Ask the turtle.",
          "sub": "Chậm mà chắc. Cứ hỏi chú rùa.",
          "keys": [
            "Chậm mà chắc"
          ]
        }
      ],
      "ref": "intro,p5"
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
            "text": "2 tháng đầu của Dũng",
            "x": 2028,
            "y": 530,
            "size": 56,
            "at": "l1:two months",
            "hl": [
              {
                "text": "2 tháng đầu",
                "at": "l1:two months"
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
            "at": "l1:week+400",
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
            "at": "l1:week+650",
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
            "at": "l1:week+900",
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
            "at": "l1:week+1150",
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
            "at": "l1:week+1400",
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
            "at": "l1:week+1650",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Tuần 0",
            "x": 2053,
            "y": 628,
            "size": 46,
            "at": "l1:week+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Tuần 1",
            "x": 2323,
            "y": 628,
            "size": 46,
            "at": "l1:week+770"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Tuần 3",
            "x": 2593,
            "y": 628,
            "size": 46,
            "at": "l1:week+1020"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Tuần 4",
            "x": 2863,
            "y": 628,
            "size": 46,
            "at": "l1:week+1270"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Tuần 6",
            "x": 3133,
            "y": 628,
            "size": 46,
            "at": "l1:week+1520"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Tuần 7",
            "x": 3403,
            "y": 628,
            "size": 46,
            "at": "l1:week+1770"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Dũng's first two months, week by week. Lace up.",
          "sub": "Ta theo Dũng qua hai tháng đầu, từng tuần một. Buộc dây giày vào.",
          "keys": [
            "hai tháng đầu"
          ]
        }
      ],
      "ref": "intro,p20"
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
            "at": "l4:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tối CN · Chuẩn bị",
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "walk",
                  "at": "l2"
                }
              ],
              "props": [
                "running-shoe"
              ]
            },
            "at": "l1:shoes",
            "caption": "Tối Chủ nhật · Bác Bình ghé chơi",
            "icon": "house"
          },
          {
            "id": "c-gear",
            "t": "text",
            "text": "Đồng hồ xịn, đồ chuyên dụng",
            "x": 3996,
            "y": 160,
            "size": 46,
            "at": "l3:watch",
            "color": "muted"
          },
          {
            "id": "c-gx",
            "t": "strike",
            "over": "c-gear",
            "at": "l4:three things"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 270,
            "w": 50,
            "h": 50,
            "at": "l4:shoes",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 252,
            "size": 62,
            "at": "l4:shoes+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Giày vừa chân, êm",
            "x": 4071,
            "y": 262,
            "size": 46,
            "at": "l4:shoes+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 355,
            "w": 50,
            "h": 50,
            "at": "l4:route",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 337,
            "size": 62,
            "at": "l4:route+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Đường bằng phẳng, ít xe",
            "x": 4071,
            "y": 347,
            "size": 46,
            "at": "l4:route+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 440,
            "w": 50,
            "h": 50,
            "at": "l4:cool",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 422,
            "size": 62,
            "at": "l4:cool+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Giờ mát: sáng sớm, chiều tối",
            "x": 4071,
            "y": 432,
            "size": 46,
            "at": "l4:cool+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Sunday night. Dũng digs out his shoes.",
          "sub": "Chặng một: tối Chủ nhật. Dũng lôi đôi giày ra.",
          "keys": [
            "tối Chủ nhật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Bác Bình, the neighbour who runs around the lake at five every morning.",
          "sub": "Đây là Bác Bình, hàng xóm, năm giờ sáng nào cũng chạy quanh hồ.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Do I need a fancy watch? Special clothes?",
          "sub": "Cháu có cần đồng hồ xịn, quần áo chuyên dụng không bác?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Just three things: shoes that fit, a flat safe route like a park, and a cool hour.",
          "sub": "Chỉ ba thứ: giày vừa chân, cung đường bằng phẳng an toàn như công viên, một khung giờ mát.",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p1,p3"
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
            "id": "c-cal",
            "t": "illus",
            "name": "alarm-clock",
            "x": 3996,
            "y": 520,
            "size": 80,
            "at": "l1:calendar"
          },
          {
            "id": "c-3d",
            "t": "text",
            "text": "3 ngày cố định = 1 cuộc hẹn",
            "x": 4096,
            "y": 530,
            "size": 50,
            "at": "l1:fixed",
            "color": "accent",
            "hl": [
              {
                "text": "cuộc hẹn",
                "at": "l1:date"
              }
            ]
          },
          {
            "id": "c-doc",
            "t": "text",
            "text": "Hỏi bác sĩ trước nếu:",
            "x": 3996,
            "y": 620,
            "size": 48,
            "at": "l2:doctor",
            "color": "coral",
            "hl": [
              {
                "text": "Hỏi bác sĩ trước",
                "at": "l2:ask"
              }
            ]
          },
          {
            "id": "c-d1",
            "t": "text",
            "text": "tim mạch, huyết áp, tiểu đường, hen, mang thai",
            "x": 3996,
            "y": 690,
            "size": 32,
            "at": "l2:heart",
            "font": "base"
          },
          {
            "id": "c-d2",
            "t": "text",
            "text": "thừa cân, chấn thương cũ, lâu không vận động",
            "x": 4836,
            "y": 700,
            "size": 32,
            "at": "l3:weight",
            "font": "base"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Then three fixed days a week, in the calendar like a date.",
          "sub": "Rồi ba ngày cố định mỗi tuần, ghi vào lịch như một cuộc hẹn.",
          "keys": [
            "ba ngày cố định"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Heart disease, high blood pressure, diabetes, asthma, pregnancy? Ask a doctor first.",
          "sub": "Bệnh tim mạch, huyết áp cao, tiểu đường, hen suyễn, đang mang thai? Hỏi bác sĩ trước.",
          "keys": [
            "Hỏi bác sĩ trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Same for big extra weight, old joint injuries, or years without exercise. A check-up brings peace of mind.",
          "sub": "Thừa cân nhiều, chấn thương xương khớp cũ, nhiều năm không vận động cũng vậy. Khám ngắn một lần cho yên tâm.",
          "keys": [
            "Khám ngắn một lần"
          ]
        }
      ],
      "ref": "p2,p3"
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
            "at": "l3",
            "fit": "D",
            "ms": 700
          },
          {
            "at": "l5",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Hai tuần 1 · Buổi đầu",
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
              "set": "park",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "face": "worried",
                  "pose": "stand"
                }
              ],
              "props": [
                "sunrise"
              ]
            },
            "at": "l1:lake",
            "caption": "5:30 sáng · bờ hồ",
            "icon": "sunrise"
          },
          {
            "id": "d-look",
            "t": "text",
            "text": "Ai cũng nhìn mình?",
            "x": 5964,
            "y": 170,
            "size": 54,
            "at": "l3:relax",
            "color": "muted"
          },
          {
            "id": "d-lx",
            "t": "strike",
            "over": "d-look",
            "at": "l3:busy"
          },
          {
            "id": "d-busy",
            "t": "text",
            "text": "Họ bận lo hơi thở của họ",
            "x": 5964,
            "y": 260,
            "size": 50,
            "at": "l3:breathing",
            "color": "accent",
            "hl": [
              {
                "text": "hơi thở của họ",
                "at": "l3:breathing"
              }
            ]
          },
          {
            "id": "d-shy",
            "t": "text",
            "text": "Vẫn ngại: giờ vắng · quanh nhà · rủ người thân",
            "x": 5964,
            "y": 360,
            "size": 34,
            "at": "l4:shy",
            "font": "base"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Monday, five thirty, by the lake. Dũng's very first run.",
          "sub": "Chặng hai: thứ Hai, năm rưỡi sáng, bờ hồ. Buổi chạy đầu đời của Dũng.",
          "keys": [
            "Buổi chạy đầu đời"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Everyone's looking at me. I run like a penguin.",
          "sub": "Ai cũng nhìn mình. Mình chạy như chim cánh cụt.",
          "face": "worried",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Relax. Morning runners are busy with their own breathing.",
          "sub": "Yên tâm. Người chạy buổi sáng đều bận lo hơi thở của chính họ.",
          "keys": [
            "hơi thở của chính họ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Still shy? Quiet hours, your own block, or family along.",
          "sub": "Vẫn ngại? Chọn giờ vắng, chạy quanh khu nhà, hoặc rủ người thân đi cùng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "They all run so fast. Okay, let's go! I'll keep up!",
          "sub": "Ai cũng chạy vèo vèo. Ok, làm luôn! Mình bám theo!",
          "face": "happy",
          "pose": "point"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p4,p8"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "park",
        "label": "Bốn trăm mét sau",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "stand"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Lao theo tốc độ người khác",
          "why": "Bốn trăm mét đã chống gối thở hồng hộc, rồi kết luận sai: mình không hợp chạy bộ.",
          "rule": "Chạy chậm đến mức vẫn nói trọn một câu ngắn"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Four hundred metres... I can't... breathe...",
          "sub": "Mới bốn trăm mét… thở… không nổi…",
          "face": "worried",
          "pose": "shrug",
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
          "say": "That's their speed. Yours passes the talk test: you can still say one short sentence.",
          "sub": "Đó là tốc độ của họ. Của bạn là bài kiểm tra nói chuyện: chậm đến mức nói trọn một câu ngắn.",
          "keys": [
            "bài kiểm tra nói chuyện"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Single words only? Too fast. Barely above walking is fine.",
          "sub": "Chỉ nói được từng chữ là quá nhanh. Nhỉnh hơn đi bộ chút cũng được."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Slow jog... and look, I can still talk in full sentences!",
          "sub": "Chạy chậm… mà nhìn này, vẫn nói được thành câu!",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p5,p8"
    },
    {
      "id": "s09",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Chạy chậm không xấu, bỏ cuộc mới tiếc",
        "hl": "bỏ cuộc mới tiếc",
        "sub": "Anh Dũng suýt cất giày hai tháng chỉ vì một buổi vội"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Running slowly is not shameful.",
          "sub": "Chạy chậm không xấu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Giving up is the real loss.",
          "sub": "Bỏ cuộc mới tiếc.",
          "keys": [
            "Bỏ cuộc mới tiếc"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s10",
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
            "text": "③ Thứ Tư tuần 1 · Buổi mẫu",
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
              "set": "park",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "stand",
                  "face": "happy"
                }
              ],
              "props": [
                "stopwatch"
              ]
            },
            "at": "l1:Wednesday",
            "caption": "Thứ Tư · chạy xen đi bộ",
            "icon": "stopwatch"
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 170,
            "w": 50,
            "h": 50,
            "at": "l2:brisk",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 152,
            "size": 62,
            "at": "l2:brisk+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Đi bộ nhanh 5 phút",
            "x": 8007,
            "y": 162,
            "size": 46,
            "at": "l2:brisk+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 255,
            "w": 50,
            "h": 50,
            "at": "l3:one minute",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 237,
            "size": 62,
            "at": "l3:one minute+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Chạy chậm 1′ + đi bộ 2′",
            "x": 8007,
            "y": 247,
            "size": 46,
            "at": "l3:one minute+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 340,
            "w": 50,
            "h": 50,
            "at": "l3:repeat",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 322,
            "size": 62,
            "at": "l3:repeat+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Lặp lại 4–6 lần",
            "x": 8007,
            "y": 332,
            "size": 46,
            "at": "l3:repeat+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 425,
            "w": 50,
            "h": 50,
            "at": "l5:finish",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 407,
            "size": 62,
            "at": "l5:finish+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Đi bộ chậm 5′, giãn cơ nhẹ",
            "x": 8007,
            "y": 417,
            "size": 46,
            "at": "l5:finish+200"
          },
          {
            "id": "e-30",
            "t": "text",
            "text": "Quá sức → chạy 30 giây",
            "x": 7932,
            "y": 520,
            "size": 50,
            "at": "l6:thirty",
            "color": "coral",
            "hl": [
              {
                "text": "30 giây",
                "at": "l6:thirty"
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
          "say": "Third stop: Wednesday, the week-one sample session.",
          "sub": "Chặng ba: thứ Tư, buổi tập mẫu cho tuần đầu.",
          "keys": [
            "buổi tập mẫu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five minutes of brisk walking to warm the engine.",
          "sub": "Năm phút đi bộ nhanh để làm ấm máy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then one minute slow running, two minutes walking. Repeat four to six times.",
          "sub": "Rồi chạy chậm một phút, đi bộ hai phút. Lặp lại bốn đến sáu lần.",
          "keys": [
            "một phút",
            "hai phút"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Walking break... yes, please!",
          "sub": "Đến lượt đi bộ… tuyệt vời!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Finish with five minutes of slow walking and gentle stretches.",
          "sub": "Cuối cùng đi bộ chậm năm phút và giãn cơ nhẹ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Too hard? Cut each run to thirty seconds.",
          "sub": "Quá sức? Rút mỗi đoạn chạy xuống ba mươi giây.",
          "keys": [
            "ba mươi giây"
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
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-lung",
            "t": "illus",
            "name": "speech-balloon",
            "x": 7932,
            "y": 610,
            "size": 80,
            "at": "l1:breath"
          },
          {
            "id": "e-br",
            "t": "text",
            "text": "Thở: mũi + miệng · thả lỏng vai",
            "x": 8032,
            "y": 615,
            "size": 46,
            "at": "l2:naturally",
            "hl": [
              {
                "text": "thả lỏng vai",
                "at": "l2:loose"
              }
            ]
          },
          {
            "id": "e-out",
            "t": "text",
            "text": "Thở ra dài · hụt hơi → chậm lại",
            "x": 8032,
            "y": 690,
            "size": 44,
            "at": "l2:longer",
            "color": "accent",
            "hl": [
              {
                "text": "chậm lại",
                "at": "l3:slow down"
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
          "say": "Out of breath? Everyone passes that gate.",
          "sub": "Thở dốc? Ai cũng qua cửa ải này."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Breathe naturally, nose and mouth, shoulders loose, breathing out a little longer.",
          "sub": "Thở tự nhiên bằng cả mũi và miệng, thả lỏng vai, thở ra dài hơn chút.",
          "keys": [
            "thả lỏng vai"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Still gasping? Slow down. The lake isn't going anywhere.",
          "sub": "Vẫn hụt hơi? Chậm lại. Cái hồ có chạy mất đâu.",
          "keys": [
            "Chậm lại"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Thấy dễ rồi, sao không chạy cả bảy ngày?",
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
          "say": "If it feels easy now, why not run all seven days?",
          "sub": "Thấy dễ rồi, sao không chạy cả bảy ngày?",
          "keys": [
            "cả bảy ngày"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p13"
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
            "at": "a1",
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
            "text": "④ Tuần 3 · Hai kế hoạch",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:fourth"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "thao"
                },
                {
                  "id": "dung"
                }
              ],
              "left": {
                "label": "Thảo: bảy ngày",
                "ok": false
              },
              "right": {
                "label": "Dũng: ba buổi",
                "ok": true
              }
            },
            "at": "l1:Thảo",
            "caption": "Cùng bắt đầu một tuần",
            "icon": "spiral-calendar"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "Thảo: 7 ngày, ngày nào cũng cố",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "a1:seven",
            "color": "coral"
          },
          {
            "id": "f-a2",
            "t": "text",
            "text": "→ tuần 3 đau ống chân",
            "x": 100,
            "y": 1335,
            "size": 44,
            "at": "a2:shins",
            "color": "muted"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "Dũng: 3 buổi, xen ngày nghỉ",
            "x": 60,
            "y": 1430,
            "size": 46,
            "at": "b1:three",
            "color": "accent"
          },
          {
            "id": "f-b2",
            "t": "text",
            "text": "→ mỗi buổi nhẹ dần",
            "x": 100,
            "y": 1505,
            "size": 44,
            "at": "b2:lighter",
            "hl": [
              {
                "text": "nhẹ dần",
                "at": "b2:lighter"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "3 buổi đều > 7 buổi rồi bỏ",
            "x": 140,
            "y": 1610,
            "size": 56,
            "at": "l3:beat",
            "color": "accent",
            "hl": [
              {
                "text": "3 buổi đều",
                "at": "l3:steady"
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
          "say": "Fourth stop: week three. And this is Thảo, queen of plans, who started with Dũng.",
          "sub": "Chặng bốn: tuần thứ ba. Còn đây là Thảo, nữ hoàng lập kế hoạch, bắt đầu cùng tuần với Dũng.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "thao",
          "say": "Seven days a week, more minutes every day!",
          "sub": "Bảy ngày một tuần, ngày nào cũng cố thêm vài phút!",
          "phase": "a",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "thao",
          "say": "Week three. My shins ache, even on the stairs.",
          "sub": "Tuần thứ ba. Ống chân đau âm ỉ, xuống cầu thang cũng nhói.",
          "phase": "a",
          "face": "sad"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "Three runs a week, rest days between, a little more each week.",
          "sub": "Ba buổi một tuần, xen ngày nghỉ, mỗi tuần tăng một chút.",
          "phase": "b",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "dung",
          "say": "Still going. Every run feels lighter.",
          "sub": "Vẫn chạy đều. Buổi nào cũng nhẹ dần.",
          "phase": "b",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo needs almost a month off. Three steady runs beat seven and then quitting.",
          "sub": "Thảo phải nghỉ gần một tháng. Ba buổi đều đặn hơn bảy buổi rồi bỏ.",
          "keys": [
            "Ba buổi đều đặn"
          ]
        }
      ],
      "ref": "p13,p14"
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
            "id": "f-when",
            "t": "text",
            "text": "Tăng khi: thở ổn, hôm sau không mỏi lạ",
            "x": 60,
            "y": 1705,
            "size": 32,
            "at": "l1:easy",
            "font": "base",
            "hl": [
              {
                "text": "thở ổn",
                "at": "l1:easy"
              }
            ]
          },
          {
            "id": "f-how",
            "t": "text",
            "text": "+30 giây đến 1 phút · bớt đi bộ · +1 lượt",
            "x": 60,
            "y": 1755,
            "size": 32,
            "at": "l1:thirty",
            "font": "base"
          },
          {
            "id": "f-one",
            "t": "text",
            "text": "Mỗi lần chỉ đổi MỘT thứ",
            "x": 880,
            "y": 1790,
            "size": 46,
            "at": "l2:one change",
            "color": "accent",
            "hl": [
              {
                "text": "MỘT thứ",
                "at": "l2:one change"
              }
            ]
          },
          {
            "id": "f-wk",
            "t": "text",
            "text": "T2 · T4 · T7 chạy · 2 ngày squat, plank",
            "x": 60,
            "y": 1805,
            "size": 32,
            "at": "l3:Monday",
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
          "say": "Feels easy, and next day is fine? Add thirty seconds to a minute, walk less, or add a round.",
          "sub": "Buổi tập đã dễ, hôm sau không mỏi lạ thì tăng: thêm ba mươi giây đến một phút, bớt đi bộ, hoặc thêm một lượt.",
          "keys": [
            "đã dễ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But only one change at a time. Repeating a week twice is normal. Water drips, stone wears.",
          "sub": "Nhưng mỗi lần chỉ đổi một thứ. Lặp lại một tuần hai lần là bình thường. Nước chảy đá mòn.",
          "keys": [
            "chỉ đổi một thứ",
            "Nước chảy đá mòn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sample week: run-walk Monday, Wednesday, Saturday, two days of squats and planks.",
          "sub": "Lịch mẫu: chạy xen đi bộ thứ Hai, Tư, Bảy, hai ngày squat, plank.",
          "keys": []
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Other days, rest. That is when your body gets stronger. Not laziness.",
          "sub": "Còn lại nghỉ: đó là lúc cơ thể mạnh lên, không phải lười.",
          "keys": [
            "cơ thể mạnh lên"
          ]
        }
      ],
      "ref": "p10,p11,p12"
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
            "text": "⑤ Tuần 4 · Mỏi hay đau?",
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
              "set": "park",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "face": "worried",
                  "pose": "stand"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "sad",
                  "pose": "hold"
                }
              ]
            },
            "at": "l1:bench",
            "caption": "Ghế đá ven hồ",
            "icon": "face-with-head-bandage"
          },
          {
            "id": "g-sore",
            "t": "text",
            "text": "Mỏi lan toả, 1–2 ngày giảm",
            "x": 2028,
            "y": 1260,
            "size": 48,
            "at": "l3:fades"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "→ bình thường, nghỉ ngơi",
            "x": 2068,
            "y": 1340,
            "size": 46,
            "at": "l3:normal",
            "color": "accent",
            "hl": [
              {
                "text": "bình thường",
                "at": "l3:normal"
              }
            ]
          },
          {
            "id": "g-pill",
            "t": "text",
            "text": "Uống giảm đau để chạy tiếp",
            "x": 2028,
            "y": 1440,
            "size": 46,
            "at": "l5:painkiller",
            "color": "muted"
          },
          {
            "id": "g-px",
            "t": "strike",
            "over": "g-pill",
            "at": "l5:hides"
          },
          {
            "id": "g-hide",
            "t": "text",
            "text": "chỉ che tín hiệu",
            "x": 2068,
            "y": 1520,
            "size": 46,
            "at": "l5:signal",
            "color": "coral",
            "hl": [
              {
                "text": "che tín hiệu",
                "at": "l5:signal"
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
          "say": "Fifth stop: week four, a lakeside bench. Two kinds of pain.",
          "sub": "Chặng năm: tuần thứ tư, ghế đá ven hồ. Hai kiểu đau.",
          "keys": [
            "Hai kiểu đau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My thighs and calves feel sore all over. Should I worry?",
          "sub": "Đùi với bắp chân mỏi khắp cả. Có sao không nhỉ?",
          "face": "worried",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "General soreness that fades in a day or two is normal. Muscles grumbling.",
          "sub": "Mỏi lan toả, giảm sau một hai ngày là bình thường. Cơ đang càu nhàu thôi.",
          "keys": [
            "bình thường"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "My shin stabs in one spot. I'll take a painkiller and keep running.",
          "sub": "Ống chân em nhói một điểm. Uống viên giảm đau rồi chạy tiếp.",
          "face": "stern",
          "pose": "point"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "No! A painkiller only hides the signal. The injury can quietly get worse.",
          "sub": "Đừng! Thuốc giảm đau chỉ che tín hiệu, chấn thương có thể âm thầm nặng thêm.",
          "keys": [
            "chỉ che tín hiệu"
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
      "ref": "p15,p18"
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
            "at": "l4",
            "fit": [
              "g-sos"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l4:end",
            "fit": "G",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "g-sharp",
            "t": "text",
            "text": "Nhói 1 điểm, đổi dáng, kéo dài",
            "x": 2028,
            "y": 1610,
            "size": 46,
            "at": "l1:sharp",
            "color": "coral"
          },
          {
            "id": "g-doc",
            "t": "text",
            "text": "→ nghỉ chạy, đi khám",
            "x": 2068,
            "y": 1680,
            "size": 46,
            "at": "l1:doctor",
            "hl": [
              {
                "text": "đi khám",
                "at": "l1:doctor"
              }
            ]
          },
          {
            "id": "g-rule",
            "t": "text",
            "text": "Mỏi thì nghỉ, nhói thì khám",
            "x": 2848,
            "y": 1790,
            "size": 46,
            "at": "l3:rest",
            "color": "accent",
            "hl": [
              {
                "text": "nhói thì khám",
                "at": "l3:checked"
              }
            ]
          },
          {
            "id": "g-sos",
            "t": "text",
            "text": "Đau ngực · chóng mặt · khó thở · tim loạn → DỪNG",
            "x": 2028,
            "y": 1780,
            "size": 36,
            "at": "l4:chest",
            "color": "coral",
            "font": "base",
            "hl": [
              {
                "text": "DỪNG",
                "at": "l4:stop"
              }
            ]
          },
          {
            "id": "g-eat",
            "t": "text",
            "text": "Ăn: nhẹ trước · tinh bột + đạm sau",
            "x": 2028,
            "y": 1828,
            "size": 28,
            "at": "l5:snack",
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
          "say": "Sharp pain in one spot, a changed stride, pain for days? Stop running and see a doctor.",
          "sub": "Nhói một điểm, phải đổi dáng chạy, đau nhiều ngày? Nghỉ chạy và đi khám.",
          "keys": [
            "đi khám"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Running more won't make you used to it. Tired muscles, rest. A sharp spot, get checked.",
          "sub": "Chạy nhiều không làm quen được đâu. Mỏi thì nghỉ ngơi, nhói thì đi khám.",
          "keys": [
            "Mỏi thì nghỉ ngơi, nhói thì đi khám"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Chest pain, dizziness, strange breathlessness, an irregular heartbeat: stop now and get medical help.",
          "sub": "Đau tức ngực, chóng mặt, khó thở bất thường, tim đập loạn: dừng ngay, tìm trợ giúp y tế.",
          "keys": [
            "dừng ngay"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Food? A light snack before. After, water and a meal with carbs and protein.",
          "sub": "Còn ăn? Ăn nhẹ trước khi chạy. Sau đó uống nước, ăn bữa có tinh bột, chất đạm."
        }
      ],
      "ref": "p15,p16,p17,p18,p19"
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
            "at": "l5",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Tuần 6 · Nhóm chạy",
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
                  "id": "dung",
                  "side": "left",
                  "pose": "stand"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "walk",
                  "at": "l2"
                }
              ]
            },
            "at": "l1:group",
            "caption": "Sáng Chủ nhật · nhóm chạy ở hồ",
            "icon": "person-running"
          },
          {
            "id": "h-en",
            "t": "text",
            "text": "“I'm just starting out.”",
            "x": 3996,
            "y": 1260,
            "size": 54,
            "at": "l4:starting",
            "color": "accent",
            "hl": [
              {
                "text": "just starting out",
                "at": "l4:starting"
              }
            ]
          },
          {
            "id": "h-vi",
            "t": "text",
            "text": "= Tôi mới bắt đầu thôi",
            "x": 4036,
            "y": 1345,
            "size": 46,
            "at": "l4:out+300",
            "color": "muted"
          },
          {
            "id": "h-easy",
            "t": "text",
            "text": "easy run = chạy nhẹ, nói được",
            "x": 3996,
            "y": 1450,
            "size": 46,
            "at": "l5:easy run",
            "hl": [
              {
                "text": "easy run",
                "at": "l5:easy run"
              }
            ]
          },
          {
            "id": "h-most",
            "t": "text",
            "text": "→ phần lớn tuần tập",
            "x": 4036,
            "y": 1520,
            "size": 44,
            "at": "l5:most"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: week six, the weekend group at the lake.",
          "sub": "Chặng sáu: tuần thứ sáu, nhóm chạy cuối tuần ở hồ.",
          "keys": [
            "nhóm chạy cuối tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Sam, a runner from abroad, friendly as sunrise.",
          "sub": "Còn đây là Sam, bạn chạy người nước ngoài, thân thiện như nắng sớm.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Hi! How long have you been running?",
          "sub": "Chào anh! Anh chạy được bao lâu rồi?",
          "face": "happy",
          "pose": "wave",
          "to": "dung"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "I'm just starting out.",
          "sub": "Tôi mới bắt đầu thôi.",
          "face": "happy",
          "pose": "explain",
          "to": "sam"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "In running apps, easy run means talking pace: most of your week.",
          "sub": "Trong ứng dụng, “easy run” là chạy nhẹ vẫn nói chuyện được, chiếm phần lớn tuần tập.",
          "keys": [
            "easy run"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p22"
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
          }
        ],
        "items": [
          {
            "id": "h-mood",
            "t": "text",
            "text": "Đừng trông vào cảm hứng",
            "x": 3996,
            "y": 1600,
            "size": 50,
            "at": "l1:mood",
            "color": "coral",
            "hl": [
              {
                "text": "cảm hứng",
                "at": "l1:mood"
              }
            ]
          },
          {
            "id": "h-tips",
            "t": "text",
            "text": "mốc cố định · giày cạnh cửa · hôm lười: 10 phút",
            "x": 3996,
            "y": 1680,
            "size": 32,
            "at": "l2:Fix",
            "font": "base"
          },
          {
            "id": "h-5k",
            "t": "text",
            "text": "Chạy liền 20–30 phút → giải 5 km",
            "x": 3996,
            "y": 1740,
            "size": 48,
            "at": "l3:nonstop",
            "color": "accent",
            "hl": [
              {
                "text": "giải 5 km",
                "at": "l3:race"
              }
            ]
          },
          {
            "id": "h-walk",
            "t": "text",
            "text": "nhiều người về đích bằng chạy xen đi bộ",
            "x": 4816,
            "y": 1820,
            "size": 30,
            "at": "l3:finish",
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
          "say": "By now the excitement fades. It always does. Don't rely on mood.",
          "sub": "Tầm này sự hào hứng hết dần. Lúc nào cũng thế. Đừng trông vào cảm hứng.",
          "keys": [
            "Đừng trông vào cảm hứng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fix the time, leave your shoes by the door, and on lazy days promise just ten minutes.",
          "sub": "Gắn vào mốc cố định, để sẵn giày cạnh cửa, hôm lười chỉ hứa chạy mười phút.",
          "keys": [
            "mười phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Running twenty to thirty minutes nonstop? Aim for a 5K race. Many finish by run-walking.",
          "sub": "Chạy liền được hai mươi đến ba mươi phút? Nhắm một giải 5 km. Nhiều người về đích bằng chạy xen đi bộ.",
          "keys": [
            "giải 5 km"
          ]
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s20",
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
            "text": "⑦ Tuần 7 · Sau công tác",
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
              "set": "airport",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "point",
                  "face": "stern"
                }
              ],
              "props": [
                "running-shoe"
              ]
            },
            "at": "l1:trip",
            "caption": "Sau mười ngày công tác",
            "icon": "airplane"
          },
          {
            "id": "i-x2",
            "t": "text",
            "text": "A: chạy gấp đôi để bù?",
            "x": 5964,
            "y": 1260,
            "size": 48,
            "at": "l2:double",
            "color": "coral"
          },
          {
            "id": "i-w1",
            "t": "text",
            "text": "B: làm lại từ tuần 1?",
            "x": 5964,
            "y": 1340,
            "size": 48,
            "at": "l3:again",
            "color": "muted"
          },
          {
            "id": "i-sh",
            "t": "text",
            "text": "C: một buổi ngắn rồi tiếp?",
            "x": 5964,
            "y": 1420,
            "size": 48,
            "at": "l3:short",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: five steady weeks, then a ten-day work trip.",
          "sub": "Chặng bảy: chạy đều năm tuần thì đi công tác mười ngày.",
          "keys": [
            "mười ngày"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Ten days off! Tomorrow I'll run double to make up for it.",
          "sub": "Nghỉ mười ngày rồi! Mai chạy gấp đôi để bù.",
          "face": "stern",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Double? Week one again? Or one short run, then carry on?",
          "sub": "Gấp đôi? Làm lại từ tuần một? Hay một buổi ngắn rồi chạy tiếp?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p23"
    },
    {
      "id": "s21",
      "module": "BRK-04",
      "data": {
        "title": "Sau mười ngày nghỉ",
        "wrong": "Chạy gấp đôi để bù",
        "right": "Một buổi ngắn, nhẹ hơn mức cũ, rồi tiếp tục",
        "wrongIllus": "tired-face",
        "rightIllus": "person-running"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Running double? Too much, too soon.",
          "sub": "Chạy gấp đôi để bù? Dễ quá sức."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One short, easier run, then back to the plan.",
          "sub": "Một buổi ngắn, nhẹ hơn mức cũ, rồi tiếp tục như thường.",
          "keys": [
            "Một buổi ngắn"
          ]
        }
      ],
      "ref": "p23"
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
          }
        ],
        "items": [
          {
            "id": "i-x2x",
            "t": "strike",
            "over": "i-x2",
            "at": "l1:erase"
          },
          {
            "id": "i-w1x",
            "t": "strike",
            "over": "i-w1",
            "at": "l2:starting"
          },
          {
            "id": "i-ring",
            "t": "ring",
            "around": [
              "i-sh"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l2:months+300"
          },
          {
            "id": "i-rule",
            "t": "text",
            "text": "Đứt nhịp không sao,",
            "x": 5964,
            "y": 1560,
            "size": 58,
            "at": "l3:break"
          },
          {
            "id": "i-rule2",
            "t": "text",
            "text": "quay lại mới quan trọng",
            "x": 5964,
            "y": 1650,
            "size": 58,
            "at": "l3:coming",
            "color": "accent",
            "hl": [
              {
                "text": "quay lại",
                "at": "l3:coming back"
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
          "say": "Ten days off doesn't erase what you built.",
          "sub": "Mười ngày nghỉ không xoá hết những gì đã tập.",
          "keys": [
            "không xoá hết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But 'starting over is so tiring' turns one break into months.",
          "sub": "Còn nghĩ “bắt đầu lại mệt lắm” thì dễ bỏ luôn mấy tháng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A break is fine. Coming back is what matters.",
          "sub": "Đứt nhịp không sao, quay lại mới quan trọng.",
          "keys": [
            "quay lại mới quan trọng"
          ]
        }
      ],
      "ref": "p23,p24"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tối CN · tuần 8",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "running-shoe",
                "spiral-calendar"
              ]
            },
            "at": "l1:Sunday",
            "caption": "Tối Chủ nhật · tuần 8",
            "icon": "running-shoe"
          },
          {
            "id": "j-then",
            "t": "text",
            "text": "Tuần 0: giày trong tủ",
            "x": 7932,
            "y": 1260,
            "size": 48,
            "at": "l3:cupboard",
            "color": "muted"
          },
          {
            "id": "j-now",
            "t": "text",
            "text": "Tuần 8: giày cạnh cửa",
            "x": 7932,
            "y": 1340,
            "size": 54,
            "at": "l3:door",
            "color": "accent",
            "hl": [
              {
                "text": "cạnh cửa",
                "at": "l3:door"
              }
            ]
          },
          {
            "id": "j-v1",
            "t": "text",
            "text": "“Đi đâu mà vội mà vàng",
            "x": 7932,
            "y": 1450,
            "size": 46,
            "at": "l5:rush"
          },
          {
            "id": "j-v2",
            "t": "text",
            "text": "vấp phải đá, quàng phải dây”",
            "x": 7972,
            "y": 1520,
            "size": 46,
            "at": "l5:trip",
            "hl": [
              {
                "text": "vấp phải đá",
                "at": "l5:trip"
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
          "say": "Last stop: Sunday night, week eight.",
          "sub": "Chặng cuối: tối Chủ nhật, tuần thứ tám."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Three days in my calendar. Shoes by the door, tonight.",
          "sub": "Ba ngày đã ghi vào lịch. Tối nay để sẵn giày cạnh cửa.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The shoes moved from cupboard to door. He was never unfit for running. Just in a hurry.",
          "sub": "Đôi giày đã dời từ tủ ra cửa. Anh chưa bao giờ “không hợp chạy”, anh chỉ vội.",
          "keys": [
            "anh chỉ vội"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The folk verse warns: why rush, only to trip on stones and tangle in vines?",
          "sub": "Ca dao dặn rồi: “Đi đâu mà vội mà vàng, mà vấp phải đá mà quàng phải dây.”",
          "keys": [
            "Đi đâu mà vội mà vàng"
          ]
        }
      ],
      "ref": "outro"
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
          }
        ],
        "items": [
          {
            "id": "j-list",
            "t": "text",
            "text": "Lưu cho tháng đầu:",
            "x": 7932,
            "y": 1610,
            "size": 46,
            "at": "l1:checklist",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "bác sĩ (nếu cần) · giày vừa · 3 ngày cố định",
            "x": 7932,
            "y": 1675,
            "size": 32,
            "at": "l1:doctor",
            "font": "base"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "chậm, nói thành câu · mỗi lần tăng một thứ",
            "x": 7932,
            "y": 1730,
            "size": 32,
            "at": "l2:slow",
            "font": "base"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "nhói thì dừng · lỡ buổi thì quay lại nhẹ nhàng",
            "x": 7932,
            "y": 1785,
            "size": 32,
            "at": "l2:sharp",
            "font": "base"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "His month-one checklist: a doctor if needed, shoes that fit, three fixed days.",
          "sub": "Danh sách tháng đầu: hỏi bác sĩ nếu có bệnh lý, giày vừa chân, ba ngày cố định.",
          "keys": [
            "ba ngày cố định"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Slow enough to talk, one change at a time. Sharp pain, stop. Missed a run, come back gently.",
          "sub": "Chậm đến mức nói thành câu, mỗi lần tăng một thứ. Nhói thì dừng, lỡ buổi thì quay lại nhẹ nhàng.",
          "keys": [
            "quay lại nhẹ nhàng"
          ]
        }
      ],
      "ref": "p25"
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
            "x": 6604,
            "y": 260,
            "at": "l1:slow"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 40,
            "y": 1615,
            "at": "l2:steady"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6664,
            "y": 1650,
            "at": "l3:Sharp"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "i-rule2"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:come"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; có bệnh, chấn thương hoặc đau kéo dài, hỏi bác sĩ.",
            "x": 8772,
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
          "say": "So: run-walk, slow enough to talk.",
          "sub": "Tóm lại: chạy xen đi bộ, chậm đến mức nói được thành câu.",
          "keys": [
            "chậm đến mức nói được"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three steady days a week, one change at a time.",
          "sub": "Ba buổi đều đặn mỗi tuần, mỗi lần tăng một thứ.",
          "keys": [
            "Ba buổi đều đặn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sore? Rest. Sharp? Get checked. Missed a run? Just come back.",
          "sub": "Mỏi thì nghỉ, nhói thì khám, lỡ buổi thì cứ quay lại.",
          "keys": [
            "cứ quay lại"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p9,p14,p19,p24"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "ref": "questions[22]",
      "data": {
        "q": "Which is better for a beginner, three steady runs a week or seven runs then a break?",
        "options": [
          "Three steady runs a week, because regular training beats a burst followed by stopping",
          "Seven runs then a break, because hard weeks make you fit much more quickly",
          "They are the same, since only the total number of runs in a month matters"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Ba buổi đều đặn hơn bảy buổi rồi bỏ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which is better for a beginner, three steady runs a week or seven runs then a break?",
          "sub": "Với người mới, ba buổi đều đặn mỗi tuần hay bảy buổi rồi nghỉ hẳn thì tốt hơn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Three steady runs a week, because regular training beats a burst followed by stopping.",
          "sub": "Ba buổi đều đặn, vì tập đều hơn hẳn một đợt dồn dập rồi bỏ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Three steady runs beat seven runs and then quitting.",
          "sub": "Ba buổi đều đặn hơn bảy buổi rồi bỏ."
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
        "text": "Tối nay: để sẵn giày cạnh cửa",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Take it slow. Forty questions are waiting below.",
          "sub": "Cứ thong thả. Bốn mươi câu hỏi đang chờ bên dưới."
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
