// Kịch bản video W lần 3 (#110) — "Khởi động và giãn cơ trước khi chạy" · chuỗi "Chạy bộ cho người mới". Mở rộng đủ ý (#110).
export default {
  "schema": "detpro.video-script/0.2",
  "id": "warm-up-and-stretching-before-running--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "new-runners",
    "slug": "warm-up-and-stretching-before-running",
    "door": "ky-nang",
    "level": "B1",
    "title": "Khởi động và giãn cơ trước khi chạy",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo MỘT BUỔI SÁNG Ở HỒ (4:55 cạnh cửa → 5:00 cổng → 5:03 bờ hồ “Khoan đã!” → 5:05 chuỗi 8 phút → 5:10 → 5:13 → 5:40 ghế đá → 5:45 giãn cơ → sáng hôm sau 4:55). Nhân vật (w145/_series/new-runners.md): Dũng (cách thứ nhất p4 — đổi từ anh Bình vì Bác Bình là người làm mẫu của chuỗi; anh Đức p14; nhún kéo p8), Bác Bình (cách thứ hai p4, dẫn chuỗi 8 phút và giãn tĩnh), Thảo (“bạn” cạnh ghế đá p19), Sam (người nói câu mẫu p26 trong video tiếng Anh). Số liệu chỉ lấy từ bài: 5–10 phút, 8 phút, 3 phút, ×10, 20–30 giây, 20 phút/10 phút (p14), 5 phút hạ nhịp. Ngắt nhịp: BRK-02 (p9), BRK-07 rehook (p19), BRK-10 trích “Căng dễ chịu thì giữ, thấy đau thì buông” (p23). Khép vòng: “Dục tốc bất đạt” → chậm mà chắc, lại còn ấm. Bản cũ (W lần 3, #110): w145/bak/warm-up-and-stretching-before-running--w01.js.",
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
            "text": "8 phút",
            "x": 60,
            "y": 120,
            "size": 170,
            "at": "l1:eight",
            "color": "accent",
            "hl": [
              {
                "text": "8 phút",
                "at": "l1:minutes"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "khởi động trước khi chạy",
            "x": 70,
            "y": 360,
            "size": 56,
            "at": "l1:warm"
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Ta tưởng: cúi gập, nhún thật mạnh?",
            "x": 70,
            "y": 470,
            "size": 50,
            "at": "l2:bounce",
            "color": "muted"
          },
          {
            "id": "a-mx",
            "t": "strike",
            "over": "a-myth",
            "at": "l2:retire"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: American Heart Association (khởi động 5–10 phút); Mayo Clinic; NHS Couch to 5K",
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
          "say": "Eight minutes. That's all a good warm-up before a run needs.",
          "sub": "Tám phút. Một lần khởi động tử tế trước khi chạy chỉ cần chừng ấy.",
          "keys": [
            "Tám phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not the old school routine: bend over and bounce to touch your toes. Time to retire it.",
          "sub": "Không phải bài thể dục ngày xưa: cúi gập, nhún nảy cho tay chạm mũi chân. Cho nghỉ hưu được rồi.",
          "keys": [
            "cúi gập, nhún nảy"
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "point",
                  "face": "happy"
                }
              ],
              "props": [
                "running-shoe",
                "alarm-clock"
              ]
            },
            "at": "l1",
            "caption": "4:55 sáng · cạnh cửa",
            "icon": "alarm-clock"
          },
          {
            "id": "a-gate",
            "t": "text",
            "text": "“Chạy nhanh từ cổng cho đỡ phí!”",
            "x": 70,
            "y": 570,
            "size": 46,
            "at": "l3:sprint",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Dục tốc bất đạt”",
            "x": 70,
            "y": 645,
            "size": 54,
            "at": "l4:haste",
            "color": "accent",
            "hl": [
              {
                "text": "bất đạt",
                "at": "l4:waste"
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
          "say": "Two months into running, shoes waiting by the door, and as always, a little late.",
          "sub": "Chạy bộ được hai tháng, giày để sẵn cạnh cửa, và như mọi khi, hơi muộn.",
          "keys": [
            "hơi muộn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "No time to warm up. I'll sprint from the gate and save five minutes!",
          "sub": "Không kịp khởi động. Chạy nhanh từ cổng cho đỡ phí năm phút!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders have a phrase for this: haste makes waste.",
          "sub": "Ông bà có câu cho vụ này: “Dục tốc bất đạt.”",
          "keys": [
            "Dục tốc bất đạt"
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
            "text": "Trước và sau khi chạy, làm gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:before",
            "hl": [
              {
                "text": "Trước và sau",
                "at": "l1:after"
              }
            ]
          },
          {
            "id": "b-before",
            "t": "text",
            "text": "Trước: đi bộ nhanh + giãn cơ động",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:before",
            "color": "accent",
            "hl": [
              {
                "text": "giãn cơ động",
                "at": "l2:dynamic"
              }
            ]
          },
          {
            "id": "b-dur",
            "t": "text",
            "text": "5–10 phút",
            "x": 2068,
            "y": 255,
            "size": 52,
            "at": "l2:five"
          },
          {
            "id": "b-after",
            "t": "text",
            "text": "Sau: giãn cơ tĩnh, giữ 20–30 giây",
            "x": 2028,
            "y": 345,
            "size": 50,
            "at": "l3:after",
            "hl": [
              {
                "text": "giãn cơ tĩnh",
                "at": "l3:static"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Một buổi sáng, sáu chặng",
            "x": 2028,
            "y": 545,
            "size": 52,
            "at": "l4:morning",
            "hl": [
              {
                "text": "sáu chặng",
                "at": "l4:six"
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
            "at": "l4:six+400",
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
            "at": "l4:six+620",
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
            "at": "l4:six+840",
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
            "at": "l4:six+1060",
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
            "at": "l4:six+1280",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l4:six+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "4:55",
            "x": 2083,
            "y": 628,
            "size": 48,
            "at": "l4:six+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "5:00",
            "x": 2353,
            "y": 628,
            "size": 48,
            "at": "l4:six+740"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "5:05",
            "x": 2623,
            "y": 628,
            "size": 48,
            "at": "l4:six+960"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "5:13",
            "x": 2893,
            "y": 628,
            "size": 48,
            "at": "l4:six+1180"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "5:40",
            "x": 3163,
            "y": 628,
            "size": 48,
            "at": "l4:six+1400"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "5:45",
            "x": 3433,
            "y": 628,
            "size": 48,
            "at": "l4:six+1620"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what should you do before and after a run?",
          "sub": "Vậy trước và sau khi chạy nên làm gì?",
          "keys": [
            "trước và sau khi chạy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before: five to ten minutes of brisk walking and dynamic stretches.",
          "sub": "Trước khi chạy: năm đến mười phút đi bộ nhanh và giãn cơ động.",
          "keys": [
            "giãn cơ động"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "After: static stretches, each held twenty to thirty seconds.",
          "sub": "Sau khi chạy: giãn cơ tĩnh, mỗi tư thế giữ hai mươi đến ba mươi giây.",
          "keys": [
            "giãn cơ tĩnh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Let's walk through one morning at the lake, six stops. Laces tied?",
          "sub": "Cùng đi qua một buổi sáng ở hồ, sáu chặng. Buộc dây giày chưa?"
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
            "at": "l3",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 5:00 · Cổng nhà",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung"
                },
                {
                  "id": "binh"
                }
              ],
              "left": {
                "label": "Chạy nhanh từ cổng",
                "ok": false
              },
              "right": {
                "label": "Đi bộ, xoay khớp",
                "ok": true
              }
            },
            "at": "l2:Bình",
            "caption": "5:00 · cùng một con ngõ",
            "icon": "house"
          },
          {
            "id": "c-a",
            "t": "text",
            "text": "Dũng: lao đi từ cổng",
            "x": 3996,
            "y": 170,
            "size": 48,
            "at": "a1:sprint",
            "color": "coral"
          },
          {
            "id": "c-a2",
            "t": "text",
            "text": "→ thở hồng hộc, muốn về",
            "x": 4036,
            "y": 250,
            "size": 44,
            "at": "a2:home",
            "color": "muted"
          },
          {
            "id": "c-b",
            "t": "text",
            "text": "Bác Bình: đi bộ, xoay khớp",
            "x": 3996,
            "y": 340,
            "size": 48,
            "at": "b1:walk",
            "color": "accent"
          },
          {
            "id": "c-b2",
            "t": "text",
            "text": "→ dễ chịu, chỉ thêm 5 phút",
            "x": 4036,
            "y": 420,
            "size": 44,
            "at": "b2:five",
            "hl": [
              {
                "text": "thêm 5 phút",
                "at": "b2:five"
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
          "say": "First stop: five a.m., the lane outside.",
          "sub": "Chặng một: năm giờ sáng, con ngõ trước nhà."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Bác Bình, the neighbour who has warmed up at this gate for years.",
          "sub": "Còn đây là Bác Bình, hàng xóm, năm nào cũng khởi động ở cổng này.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "Sprint from the gate! Five minutes in and I'm gasping. My calves are rock hard.",
          "sub": "Lao đi từ cổng! Mới năm phút đã thở hồng hộc. Bắp chân cứng như đá.",
          "phase": "a",
          "face": "worried"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "dung",
          "say": "All I can think about is going home.",
          "sub": "Trong đầu chỉ nghĩ đến chuyện quay về.",
          "phase": "a",
          "face": "sad"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "binh",
          "say": "Brisk walk, roll the joints for a few minutes, then a very slow jog.",
          "sub": "Đi bộ nhanh, xoay khớp vài phút, rồi chạy thật chậm.",
          "phase": "b",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "binh",
          "say": "The first minutes feel easy. My run is only about five minutes longer.",
          "sub": "Mấy phút đầu dễ chịu hẳn. Buổi chạy chỉ dài thêm chừng năm phút.",
          "phase": "b",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sprint-from-the-gate Dũng? Two weeks later, he starts switching off his alarm.",
          "sub": "Dũng “lao từ cổng”? Hai tuần sau bắt đầu tắt báo thức.",
          "keys": [
            "tắt báo thức"
          ]
        }
      ],
      "ref": "p4"
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
            "id": "c-low",
            "t": "text",
            "text": "Mới dậy: tim chậm, cơ khớp cứng",
            "x": 3996,
            "y": 520,
            "size": 46,
            "at": "l1:bed",
            "hl": [
              {
                "text": "cơ khớp cứng",
                "at": "l1:stiff"
              }
            ]
          },
          {
            "id": "c-up",
            "t": "text",
            "text": "Khởi động: tăng dần, “kiểm tra” thân",
            "x": 3996,
            "y": 600,
            "size": 44,
            "at": "l2:gradually",
            "color": "accent",
            "hl": [
              {
                "text": "tăng dần",
                "at": "l2:gradually"
              }
            ]
          },
          {
            "id": "c-rule",
            "t": "text",
            "text": "Ấm người trước, rồi hãy chạy",
            "x": 3996,
            "y": 685,
            "size": 52,
            "at": "l4:warm",
            "color": "accent",
            "hl": [
              {
                "text": "Ấm người trước",
                "at": "l4:warm"
              }
            ]
          },
          {
            "id": "c-busy",
            "t": "text",
            "text": "Bận? Chạy ngắn bớt, đừng bỏ khởi động",
            "x": 4816,
            "y": 705,
            "size": 34,
            "at": "l3:busy",
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
          "say": "Just out of bed or off your desk chair, your heart is slow and your joints are stiff.",
          "sub": "Vừa ngủ dậy hay ngồi cả ngày, nhịp tim còn thấp, cơ và khớp còn cứng.",
          "keys": [
            "cơ và khớp còn cứng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A warm-up raises heart rate and breathing gradually, warms muscles, and checks the body for anything odd.",
          "sub": "Khởi động đưa nhịp tim, nhịp thở lên từ từ, làm ấm cơ, và là lúc “kiểm tra” cơ thể.",
          "keys": [
            "lên từ từ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Busy? Five to ten minutes. Better a shorter run than no warm-up.",
          "sub": "Bận mấy cũng chỉ cần năm đến mười phút. Thà chạy ngắn đi còn hơn bỏ khởi động.",
          "keys": [
            "Thà chạy ngắn đi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Warm up first, then run.",
          "sub": "Ấm người trước, rồi hãy chạy.",
          "keys": [
            "Ấm người trước"
          ]
        }
      ],
      "ref": "p1,p2,p3,p5"
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
            "text": "② 5:03 · Động hay tĩnh?",
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
                  "pose": "stand",
                  "face": "stern"
                }
              ],
              "props": [
                "sunrise"
              ]
            },
            "at": "l1:lake",
            "caption": "5:03 · bờ hồ, trời se lạnh",
            "icon": "sunrise"
          },
          {
            "id": "d-dyn",
            "t": "text",
            "text": "Động: đá chân, xoay hông, nâng gối",
            "x": 5964,
            "y": 170,
            "size": 44,
            "at": "l3:dynamic",
            "color": "accent",
            "hl": [
              {
                "text": "Động",
                "at": "l3:dynamic"
              }
            ]
          },
          {
            "id": "d-dyn2",
            "t": "text",
            "text": "→ làm ấm, giống chạy: trước khi chạy",
            "x": 6004,
            "y": 250,
            "size": 40,
            "at": "l3:running"
          },
          {
            "id": "d-sta",
            "t": "text",
            "text": "Tĩnh: kéo căng, giữ 20–30 giây",
            "x": 5964,
            "y": 340,
            "size": 44,
            "at": "l4:static",
            "hl": [
              {
                "text": "Tĩnh",
                "at": "l4:static"
              }
            ]
          },
          {
            "id": "d-sta2",
            "t": "text",
            "text": "→ thả lỏng: sau chạy, buổi tối",
            "x": 6004,
            "y": 420,
            "size": 40,
            "at": "l4:evening"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: a few minutes later by the lake. Dũng decides to stretch, PE-class style.",
          "sub": "Chặng hai: vài phút sau ở bờ hồ. Dũng quyết định giãn cơ, kiểu giờ thể dục ngày xưa.",
          "keys": [
            "kiểu giờ thể dục ngày xưa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My teacher said: bend down and bounce till you touch your toes!",
          "sub": "Thầy thể dục dạy: cúi gập, nhún mạnh cho tay chạm mũi chân!",
          "face": "stern",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First, two kinds of stretching. Dynamic: leg swings, hip circles, knee lifts. Warm, and close to running.",
          "sub": "Trước hết, có hai kiểu. Giãn cơ động: đá chân, xoay hông, nâng gối. Làm ấm, gần với động tác chạy.",
          "keys": [
            "Giãn cơ động"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Static: stretch and hold still twenty to thirty seconds. Relaxing, for after the run or the evening.",
          "sub": "Giãn cơ tĩnh: kéo căng rồi giữ yên hai mươi đến ba mươi giây. Thả lỏng, hợp sau khi chạy hoặc buổi tối.",
          "keys": [
            "Giãn cơ tĩnh"
          ]
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "park",
        "label": "5:04 · cơ còn lạnh",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "stand"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Cúi gập, nhún nảy khi cơ còn lạnh",
          "why": "Kéo mạnh và nhún nảy lúc cơ còn lạnh dễ làm cơ căng quá mức, nhất là mặt sau đùi.",
          "rule": "Cơ còn lạnh thì làm ấm, đừng nhún kéo"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Bounce, bounce, touch the toes! Harder!",
          "sub": "Nhún, nhún, chạm mũi chân! Mạnh nữa!",
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
          "say": "Hard bouncing on cold muscles can overstretch them, especially the back of the thigh on chilly mornings.",
          "sub": "Nhún kéo mạnh khi cơ còn lạnh dễ làm cơ căng quá mức, nhất là mặt sau đùi, sáng trời lạnh.",
          "keys": [
            "mặt sau đùi"
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
          "who": "dung",
          "say": "Brisk walk first. Then gentle leg swings and hip circles.",
          "sub": "Đi bộ nhanh trước. Rồi đá chân nhẹ, xoay hông.",
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
      "ref": "p8"
    },
    {
      "id": "s07",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Cơ còn lạnh thì làm ấm",
        "hl": "làm ấm",
        "sub": "Đừng nhún kéo"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Cold muscles? Warm them up.",
          "sub": "Cơ còn lạnh thì làm ấm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Don't yank and bounce.",
          "sub": "Đừng nhún kéo.",
          "keys": [
            "Đừng nhún kéo"
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
            "at": "l1",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 5:05 · Chuỗi 8 phút",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l0:Third"
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
                  "id": "binh",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "stand"
                }
              ],
              "props": [
                "stopwatch"
              ]
            },
            "at": "l0:Bình",
            "caption": "5:05 · Bác Bình dẫn bài",
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
            "text": "Đi bộ nhanh 3 phút",
            "x": 8007,
            "y": 162,
            "size": 40,
            "at": "l2:brisk+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 250,
            "w": 50,
            "h": 50,
            "at": "l2:ankles",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 232,
            "size": 62,
            "at": "l2:ankles+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Xoay cổ chân, gối, hông, vai ×10",
            "x": 8007,
            "y": 242,
            "size": 40,
            "at": "l2:ankles+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 330,
            "w": 50,
            "h": 50,
            "at": "l3:tree",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 312,
            "size": 62,
            "at": "l3:tree+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Vịn cây, đá chân trước sau ×10",
            "x": 8007,
            "y": 322,
            "size": 40,
            "at": "l3:tree+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 410,
            "w": 50,
            "h": 50,
            "at": "l3:across",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 392,
            "size": 62,
            "at": "l3:across+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Đá chân ngang trước mặt ×10",
            "x": 8007,
            "y": 402,
            "size": 40,
            "at": "l3:across+200"
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 7932,
            "y": 500,
            "w": 50,
            "h": 50,
            "at": "l4:knee",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 482,
            "size": 62,
            "at": "l4:knee+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Nâng đùi 20–30 giây",
            "x": 8007,
            "y": 492,
            "size": 40,
            "at": "l4:knee+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 7932,
            "y": 580,
            "w": 50,
            "h": 50,
            "at": "l4:heel",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 562,
            "size": 62,
            "at": "l4:heel+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Gót chạm mông 20–30 giây",
            "x": 8007,
            "y": 572,
            "size": 40,
            "at": "l4:heel+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 7932,
            "y": 660,
            "w": 50,
            "h": 50,
            "at": "l4:lunges",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 642,
            "size": 62,
            "at": "l4:lunges+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Vài bước lunge, lưng thẳng",
            "x": 8007,
            "y": 652,
            "size": 40,
            "at": "l4:lunges+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l0",
          "lang": "en",
          "who": "det",
          "say": "Third stop: five oh five. Bác Bình takes charge.",
          "sub": "Chặng ba: năm giờ năm phút. Bác Bình cầm trịch."
        },
        {
          "id": "l1",
          "lang": "en",
          "who": "binh",
          "say": "Eight minutes, son. Follow me.",
          "sub": "Tám phút thôi cháu. Theo bác.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Brisk walk, three minutes, arms swinging. Then circle ankles, knees, hips, shoulders, about ten each.",
          "sub": "Đi bộ nhanh ba phút, đánh tay tự nhiên. Rồi xoay cổ chân, gối, hông, vai, mỗi chỗ chừng mười vòng.",
          "keys": [
            "ba phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hold a tree, swing a leg forward and back, ten each side. Then face the tree and swing across.",
          "sub": "Vịn cây, đá một chân ra trước, ra sau, mười lần mỗi bên. Rồi quay mặt vào cây, đá chân qua lại.",
          "keys": [
            "mười lần mỗi bên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Knee lifts and heel kicks, twenty to thirty seconds each. A few walking lunges, back straight.",
          "sub": "Nâng cao đùi, gót chạm mông, mỗi động tác hai mươi đến ba mươi giây. Vài bước lunge, lưng thẳng.",
          "keys": [
            "lưng thẳng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p10,p11"
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
          },
          {
            "at": 150,
            "fit": [
              "e-warm"
            ],
            "zoom": 1.15,
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
            "id": "e-warm",
            "t": "text",
            "text": "Ấm người, hơi tăng nhịp thở",
            "x": 8752,
            "y": 700,
            "size": 44,
            "at": "l1:warm",
            "color": "accent",
            "hl": [
              {
                "text": "Ấm người",
                "at": "l1:warm"
              }
            ]
          },
          {
            "id": "e-new",
            "t": "text",
            "text": "Người mới: đi bộ nhanh + chạy thật chậm",
            "x": 7932,
            "y": 740,
            "size": 30,
            "at": "l3:beginner",
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
          "say": "You should feel warm and breathe a bit faster. Not tired.",
          "sub": "Khởi động để ấm người, hơi tăng nhịp thở, không phải để mệt.",
          "keys": [
            "không phải để mệt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tired already? Next time, fewer repeats.",
          "sub": "Xong đã thấy mỏi? Lần sau bớt số lần lặp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For a beginner's run-walk, brisk walking then very slow running is already a decent warm-up.",
          "sub": "Với buổi chạy xen đi bộ của người mới, đi bộ nhanh rồi chạy thật chậm đã là khởi động khá tốt.",
          "keys": [
            "khởi động khá tốt"
          ]
        }
      ],
      "ref": "p12,p13"
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
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 5:10 · Video vận động viên",
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
              "set": "park",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "sad"
                }
              ],
              "props": [
                "mobile-phone"
              ]
            },
            "at": "l1:Dũng",
            "caption": "Dũng kể chuyện hôm qua",
            "icon": "mobile-phone"
          },
          {
            "id": "f-pro",
            "t": "text",
            "text": "20 phút: nhảy, đá cao, nước rút",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l2:twenty",
            "color": "coral"
          },
          {
            "id": "f-res",
            "t": "text",
            "text": "→ buổi chạy chính dừng sau 10 phút",
            "x": 100,
            "y": 1340,
            "size": 40,
            "at": "l2:ten",
            "color": "muted"
          },
          {
            "id": "f-rule",
            "t": "text",
            "text": "Ấm người, không phải kiệt sức",
            "x": 60,
            "y": 1430,
            "size": 50,
            "at": "l3:warm",
            "color": "accent",
            "hl": [
              {
                "text": "không phải kiệt sức",
                "at": "l3:wear"
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
          "say": "Fourth stop: while warming up, Dũng confesses about yesterday.",
          "sub": "Chặng bốn: đang khởi động, Dũng thú thật chuyện hôm qua."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I did a pro's video: twenty minutes of jumps, high kicks, sprints. My main run lasted ten minutes.",
          "sub": "Hôm qua em theo video vận động viên: hai mươi phút bật nhảy, đá cao, nước rút. Buổi chạy chính được mười phút.",
          "face": "sad",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A warm-up should warm you, not wear you out.",
          "sub": "Khởi động để ấm người, không phải để kiệt sức.",
          "keys": [
            "không phải để kiệt sức"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "at": "l2",
            "fit": [
              "f-v2"
            ],
            "zoom": 1.3,
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
            "id": "f-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "sam",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ]
            },
            "at": "l1:Sam",
            "caption": "Video tiếng Anh của Sam",
            "icon": "video-camera"
          },
          {
            "id": "f-en",
            "t": "text",
            "text": "warm up · cool down · leg swings",
            "x": 60,
            "y": 1530,
            "size": 42,
            "at": "l3:words",
            "font": "base",
            "hl": [
              {
                "text": "cool down",
                "at": "l3:cool"
              }
            ]
          },
          {
            "id": "f-hold",
            "t": "text",
            "text": "“Hold it for thirty seconds.”",
            "x": 60,
            "y": 1600,
            "size": 44,
            "at": "l2:hold",
            "color": "accent",
            "hl": [
              {
                "text": "thirty seconds",
                "at": "l2:thirty"
              }
            ]
          },
          {
            "id": "f-less",
            "t": "text",
            "text": "Lấy ý: bớt lần lặp, biên độ",
            "x": 60,
            "y": 1690,
            "size": 46,
            "at": "l4:fewer",
            "hl": [
              {
                "text": "bớt lần lặp",
                "at": "l4:fewer"
              }
            ]
          },
          {
            "id": "f-morn",
            "t": "text",
            "text": "Sáng sớm cứng hơn: thêm vài phút",
            "x": 60,
            "y": 1780,
            "size": 40,
            "at": "l5:mornings",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Some coaching videos are in English, like this one from Sam, a runner in the lake group.",
          "sub": "Nhiều video hướng dẫn bằng tiếng Anh, như video của Sam, bạn chạy trong nhóm ở hồ.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Hold it for thirty seconds.",
          "sub": "Giữ tư thế ba mươi giây.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Useful words: warm up, cool down, leg swings.",
          "sub": "Từ hay gặp: warm up là khởi động, cool down là hạ nhịp, leg swings là đá chân.",
          "keys": [
            "cool down"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Pro videos are longer and harder than you need. Take the ideas, use fewer reps and smaller moves.",
          "sub": "Video vận động viên dài và mạnh hơn mức người mới cần. Lấy ý tưởng, nhưng giảm số lần, giảm biên độ.",
          "keys": [
            "giảm số lần, giảm biên độ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Early mornings are stiffer: add a few minutes. Listen to your body, no plan fits every dawn.",
          "sub": "Sáng sớm người cứng hơn: thêm vài phút đi bộ, xoay khớp. Nghe cơ thể, không bài nào đúng cho mọi buổi sáng.",
          "keys": [
            "Nghe cơ thể"
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
      "ref": "p16,p26"
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
            "text": "⑤ 5:13 · Những phút đầu",
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
                  "side": "center",
                  "pose": "stand",
                  "face": "happy"
                }
              ],
              "props": [
                "sunrise"
              ]
            },
            "at": "l1:run",
            "caption": "5:13 · vào buổi chạy",
            "icon": "sunrise"
          },
          {
            "id": "g-slow",
            "t": "text",
            "text": "Vài phút đầu: rất chậm",
            "x": 2028,
            "y": 1260,
            "size": 52,
            "at": "l3:very slow",
            "color": "accent",
            "hl": [
              {
                "text": "rất chậm",
                "at": "l3:very slow"
              }
            ]
          },
          {
            "id": "g-then",
            "t": "text",
            "text": "→ rồi mới tốc độ thường",
            "x": 2068,
            "y": 1350,
            "size": 46,
            "at": "l3:normal"
          },
          {
            "id": "g-no",
            "t": "text",
            "text": "Nhanh ngay từ bước đầu",
            "x": 2028,
            "y": 1440,
            "size": 50,
            "at": "l4:fast",
            "color": "muted"
          },
          {
            "id": "g-nox",
            "t": "strike",
            "over": "g-no",
            "at": "l4:hurry"
          },
          {
            "id": "g-sw",
            "t": "illus",
            "name": "stopwatch",
            "x": 2028,
            "y": 1540,
            "size": 90,
            "at": "l4:hurry"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: five thirteen. Warm, and finally the run itself.",
          "sub": "Chặng năm: năm giờ mười ba. Đã ấm người, giờ mới vào buổi chạy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Okay. Nice and slow, like a sleepy turtle.",
          "sub": "Rồi. Chậm rãi thôi, như chú rùa còn ngái ngủ.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Exactly. A few very slow minutes first, then your normal pace.",
          "sub": "Chuẩn. Vài phút đầu rất chậm, rồi mới vào tốc độ bình thường.",
          "keys": [
            "rất chậm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The one thing to avoid: going fast from the first step, even in a hurry.",
          "sub": "Điều nên tránh nhất: chạy nhanh ngay từ những bước đầu, dù đang vội.",
          "keys": [
            "dù đang vội"
          ]
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Chạy xong, ghế đá ngay bên: ngồi luôn?",
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
          "say": "Run done, bench right there. Sit down at once?",
          "sub": "Chạy xong, ghế đá ngay bên. Ngồi luôn?",
          "keys": [
            "Ngồi luôn"
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
      "id": "s14",
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
            "text": "⑥ 5:40 · Ghế đá",
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
                  "face": "worried",
                  "enter": "pop",
                  "at": "l1"
                }
              ]
            },
            "at": "l1:Thảo",
            "caption": "5:40 · vòng hồ cuối cùng",
            "icon": "eyes"
          },
          {
            "id": "h-sit",
            "t": "text",
            "text": "Ngồi phịch xuống ngay",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l3:suddenly",
            "color": "muted"
          },
          {
            "id": "h-sx",
            "t": "strike",
            "over": "h-sit",
            "at": "l4:walk"
          },
          {
            "id": "h-dz",
            "t": "text",
            "text": "→ hơi choáng, bắp chân cứng",
            "x": 4036,
            "y": 1345,
            "size": 44,
            "at": "l3:dizzy",
            "color": "coral",
            "hl": [
              {
                "text": "choáng",
                "at": "l3:dizzy"
              }
            ]
          },
          {
            "id": "h-walk",
            "t": "text",
            "text": "Đi bộ chậm ~5 phút = hạ nhịp",
            "x": 3996,
            "y": 1440,
            "size": 48,
            "at": "l4:walk",
            "color": "accent",
            "hl": [
              {
                "text": "hạ nhịp",
                "at": "l4:cool"
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
          "say": "Sixth stop: five forty. This is Thảo, Dũng's running friend, just off her final lap.",
          "sub": "Chặng sáu: năm giờ bốn mươi. Đây là Thảo, bạn chạy của Dũng, vừa xong vòng hồ cuối.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Heart's still racing. That bench is calling my name!",
          "sub": "Tim vẫn đập nhanh. Cái ghế đá đang gọi tên em!",
          "face": "worried",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Stopping suddenly can make you a bit dizzy. Calves stiffen, and steps need a handrail.",
          "sub": "Dừng đột ngột có thể hơi choáng, bắp chân cứng lại, bước xuống bậc phải vịn tay.",
          "keys": [
            "hơi choáng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Walk slowly about five minutes, until heart and breath settle. That's the cool down.",
          "sub": "Đi bộ chậm chừng năm phút cho tim và hơi thở trở lại bình thường. Đó là hạ nhịp.",
          "keys": [
            "hạ nhịp"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Run done, then walk. The bench can wait.",
          "sub": "Chạy xong đi bộ, đừng vội ngồi. Ghế đá đợi được.",
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
      "ref": "p18,p19,p20"
    },
    {
      "id": "s15",
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
            "text": "⑦ 5:45 · Giãn cơ tĩnh",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l0:Seventh"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "stand"
                }
              ]
            },
            "at": "l0:tree",
            "caption": "5:45 · bên gốc cây",
            "icon": "sun"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 50,
            "h": 50,
            "at": "l2:calves",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1242,
            "size": 62,
            "at": "l2:calves+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Bắp chân: tay chống tường",
            "x": 6039,
            "y": 1252,
            "size": 40,
            "at": "l2:calves+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1345,
            "w": 50,
            "h": 50,
            "at": "l2:thigh",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1327,
            "size": 62,
            "at": "l2:thigh+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Đùi trước: kéo gót về mông",
            "x": 6039,
            "y": 1337,
            "size": 40,
            "at": "l2:thigh+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1430,
            "w": 50,
            "h": 50,
            "at": "l3:hamstrings",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1412,
            "size": 62,
            "at": "l3:hamstrings+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Đùi sau: gót lên bậc thấp",
            "x": 6039,
            "y": 1422,
            "size": 40,
            "at": "l3:hamstrings+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1515,
            "w": 50,
            "h": 50,
            "at": "l3:hips",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1497,
            "size": 62,
            "at": "l3:hips+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Hông, mông: nằm ngửa, vắt chân",
            "x": 6039,
            "y": 1507,
            "size": 40,
            "at": "l3:hips+200"
          },
          {
            "id": "i-hold",
            "t": "text",
            "text": "Mỗi tư thế 20–30 giây",
            "x": 5964,
            "y": 1620,
            "size": 50,
            "at": "l1:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "20–30 giây",
                "at": "l1:thirty"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l0",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: five forty-five, under a tree. Class is back in session.",
          "sub": "Chặng bảy: năm giờ bốn lăm, dưới gốc cây. Lớp học lại vào giờ."
        },
        {
          "id": "l1",
          "lang": "en",
          "who": "binh",
          "say": "Now the static stretches. Hold each one twenty to thirty seconds.",
          "sub": "Giờ mới giãn cơ tĩnh. Mỗi tư thế giữ hai mươi đến ba mươi giây.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Calves: hands on a wall, one leg back, heel down. Front thigh: pull your heel towards your bottom.",
          "sub": "Bắp chân: chống tay vào tường, một chân lùi, gót ép xuống. Đùi trước: kéo gót về phía mông.",
          "keys": [
            "Bắp chân",
            "Đùi trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hamstrings: heel on a low step, lean forward. Hips: lie down, ankle over knee, pull gently.",
          "sub": "Đùi sau: gót lên bậc thấp, hơi gập người. Hông, mông: nằm ngửa, vắt cổ chân lên gối, kéo nhẹ.",
          "keys": [
            "Đùi sau",
            "Hông, mông"
          ]
        }
      ],
      "ref": "p21,p22"
    },
    {
      "id": "s16",
      "module": "BRK-10",
      "data": {
        "quote": "Căng dễ chịu thì giữ, thấy đau thì buông",
        "mark": "thấy đau thì buông",
        "by": "Câu dễ nhớ của Bác Bình",
        "illus": "person-in-lotus-position"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Comfortable stretch, hold. Pain, let go.",
          "sub": "Căng dễ chịu thì giữ, thấy đau thì buông.",
          "keys": [
            "thấy đau thì buông"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Bác Bình's golden rule.",
          "sub": "Câu vàng của Bác Bình."
        }
      ],
      "ref": "p23"
    },
    {
      "id": "s17",
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
            "id": "i-br",
            "t": "text",
            "text": "Thở đều · không nín thở · không nhún",
            "x": 5964,
            "y": 1710,
            "size": 40,
            "at": "l1:breathe",
            "hl": [
              {
                "text": "không nhún",
                "at": "l1:bouncing"
              }
            ]
          },
          {
            "id": "i-wk",
            "t": "text",
            "text": "Dẻo dần qua nhiều tuần",
            "x": 6784,
            "y": 1795,
            "size": 42,
            "at": "l1:weeks",
            "color": "muted"
          },
          {
            "id": "i-sleep",
            "t": "text",
            "text": "Không xoá hết mỏi: ngủ, ăn, ngày nghỉ",
            "x": 5964,
            "y": 1790,
            "size": 32,
            "at": "l2:sleep",
            "font": "base",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Breathe evenly, no holding your breath, no bouncing. Flexibility grows over weeks, not one session.",
          "sub": "Thở đều, không nín thở, không nhún nảy. Độ dẻo tăng từ từ qua nhiều tuần, không phải một buổi.",
          "keys": [
            "không nhún nảy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And stretching won't erase all soreness. Sleep, good food and rest days matter just as much.",
          "sub": "Giãn cơ giúp thả lỏng, nhưng không xoá hết mỏi. Ngủ đủ, ăn hợp lý, ngày nghỉ cũng quan trọng.",
          "keys": [
            "không xoá hết mỏi"
          ]
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
            "text": "Sáng hôm sau · 4:55",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:next"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "sunrise",
                "running-shoe"
              ]
            },
            "at": "l1:gate",
            "caption": "4:55 · vẫn cổng ấy",
            "icon": "sunrise"
          },
          {
            "id": "j-w",
            "t": "text",
            "text": "Đi bộ nhanh từ cổng ✓",
            "x": 7932,
            "y": 1260,
            "size": 52,
            "at": "l2:walk",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Dục tốc bất đạt”",
            "x": 7932,
            "y": 1350,
            "size": 52,
            "at": "l3:haste"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "→ chậm mà… ấm",
            "x": 7972,
            "y": 1435,
            "size": 56,
            "at": "l3:warm",
            "color": "accent",
            "hl": [
              {
                "text": "ấm",
                "at": "l3:warm"
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
          "say": "Next morning. Four fifty-five. Same gate, same Dũng.",
          "sub": "Sáng hôm sau. Bốn giờ năm mươi lăm. Vẫn cổng ấy, vẫn Dũng ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Brisk walk from the gate first. Then I'll run.",
          "sub": "Đi bộ nhanh từ cổng trước. Rồi mới chạy.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Haste makes waste, but a warm start makes a run. Slow, steady, and warm.",
          "sub": "“Dục tốc bất đạt”. Giờ Dũng chậm mà chắc, lại còn… ấm.",
          "keys": [
            "chậm mà chắc"
          ]
        }
      ],
      "ref": "outro"
    },
    {
      "id": "s19",
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
            "id": "j-care",
            "t": "text",
            "text": "Chấn thương cũ, đau khớp, cột sống",
            "x": 7932,
            "y": 1550,
            "size": 44,
            "at": "l1:injury",
            "color": "coral"
          },
          {
            "id": "j-care2",
            "t": "text",
            "text": "→ bỏ động tác đau, hỏi bác sĩ",
            "x": 7972,
            "y": 1630,
            "size": 44,
            "at": "l1:skip",
            "hl": [
              {
                "text": "hỏi bác sĩ",
                "at": "l1:doctor"
              }
            ]
          },
          {
            "id": "j-no",
            "t": "text",
            "text": "Đau nhói, tăng dần: đừng giãn tiếp",
            "x": 7932,
            "y": 1720,
            "size": 40,
            "at": "l2:sharp",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Old injury, joint or spine trouble, or a move that hurts? Skip it, and ask a doctor or physiotherapist.",
          "sub": "Từng chấn thương, có vấn đề khớp hay cột sống, hoặc đau khi làm một động tác? Bỏ động tác đó, hỏi bác sĩ hoặc chuyên gia vật lý trị liệu.",
          "keys": [
            "hỏi bác sĩ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sharp, growing or lasting pain is not something to stretch away.",
          "sub": "Đau nhói, đau tăng dần hay kéo dài nhiều ngày không phải thứ để “giãn cho hết”.",
          "keys": [
            "giãn cho hết"
          ]
        }
      ],
      "ref": "p25"
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
            "fit": "H",
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
            "x": 4736,
            "y": 690,
            "at": "l1:warm"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8672,
            "y": 690,
            "at": "l2:dynamic"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1440,
            "at": "l3:walk"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "h-walk"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:sit"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; có chấn thương hoặc đau kéo dài, hỏi bác sĩ.",
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
          "say": "So: warm up first, five to ten minutes.",
          "sub": "Tóm lại: ấm người trước, năm đến mười phút.",
          "keys": [
            "ấm người trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Brisk walking and dynamic moves before. Static holds after.",
          "sub": "Trước khi chạy: đi bộ nhanh, giãn cơ động. Giãn tĩnh để sau.",
          "keys": [
            "giãn cơ động"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And when you finish, walk. Don't rush to sit.",
          "sub": "Chạy xong thì đi bộ, đừng vội ngồi.",
          "keys": [
            "đừng vội ngồi"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p5,p9,p20"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "ref": "questions[26]",
      "data": {
        "q": "You just finished your run and your heart is still racing, what should you do first?",
        "options": [
          "Run another fast lap, so your body forgets about the heavy feeling",
          "Walk slowly for a few minutes, letting your heart and breathing calm down",
          "Sit straight down on the nearest bench, since quick rest is the best rest"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "person-walking",
        "why": "Dừng đột ngột khi tim còn đập nhanh có thể gây choáng, bắp chân cứng lại."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You just finished your run and your heart is still racing, what should you do first?",
          "sub": "Bạn vừa chạy xong và tim vẫn đập nhanh, việc đầu tiên nên làm là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Walk slowly for a few minutes, letting your heart and breathing calm down.",
          "sub": "Đi bộ chậm vài phút cho tim và hơi thở lắng xuống."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Stopping suddenly can make you dizzy. Walk first, then stretch.",
          "sub": "Dừng đột ngột dễ choáng. Đi bộ trước, rồi mới giãn cơ."
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
        "text": "Buổi tới: thử trọn chuỗi 8 phút",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Warmed up? Forty questions are waiting below.",
          "sub": "Ấm người rồi chứ? Bốn mươi câu hỏi đang chờ bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s18"
  }
};
