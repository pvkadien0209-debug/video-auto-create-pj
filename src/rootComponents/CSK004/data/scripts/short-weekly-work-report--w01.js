// Kịch bản video W lần 3 (#110) — "Báo cáo công việc hằng tuần ngắn gọn, đủ ý" · chuỗi "Báo cáo và thuyết trình trước sếp"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
export default {
  "schema": "detpro.video-script/0.2",
  "id": "short-weekly-work-report--w01",
  "hook": "HOOK-04",
  "unit": {
    "audience": "presenting-to-managers",
    "slug": "short-weekly-work-report",
    "door": "ky-nang",
    "level": "B1",
    "title": "Báo cáo công việc hằng tuần ngắn gọn, đủ ý",
    "series": "Báo cáo và thuyết trình trước sếp"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN VIẾT LẠI BÁO CÁO của Dũng (Thứ Sáu 16:00 gửi một trang rưỡi → hai tuần sau lùi ra mắt → Thứ Hai 9:00 sếp đọc để làm gì → 18:00 ghi chú hai phút → Thứ Ba khung bốn phần → Thứ Tư viết kết quả → chiều Thứ Tư Thảo → Thứ Năm “Khoan đã!” lời nhờ → Thứ Sáu 9:00 giao ban → 16:00 gửi). Nhân vật (3, theo w145/_series/presenting-to-managers.md): Dũng (gộp Tùng p11, Lộc p20, người viết báo cáo p13–p15, p25–p26), Thảo (Nhung p6, Giang p16), Cô Hoa (sếp “anh” → “chị”). Số liệu chỉ lấy từ bài: một trang rưỡi, nửa trang, hai tuần (p11), hai phút mỗi ngày (p4), bốn phần (p8), nhắc hai lần, trước thứ Tư (p18), hai tuần nhập liệu (p20), vài phút trên điện thoại (p22); Ngắt nhịp: BRK-03 (hai phút), BRK-04 Trước/Sau (báo cáo của Thảo p16), BRK-07 (báo cáo bằng lời). Khép vòng: bàn Dũng Thứ Sáu 16:00 — một trang rưỡi không ai đọc hết (s01) → bản đọc vài phút, sếp quyết ngay (s24). Bản cũ: w145/bak/short-weekly-work-report--w01.js.",
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
            "text": "1,5 trang",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l1:half",
            "color": "accent",
            "hl": [
              {
                "text": "1,5 trang",
                "at": "l1:pages"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "báo cáo tuần · chiều thứ Sáu",
            "x": 70,
            "y": 320,
            "size": 50,
            "at": "l1:report"
          },
          {
            "id": "a-th",
            "t": "text",
            "text": "Ta tưởng: càng dài càng rõ?",
            "x": 70,
            "y": 420,
            "size": 54,
            "at": "l2:longer",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One and a half pages. A weekly report, Friday afternoon.",
          "sub": "Một trang rưỡi. Một bản báo cáo tuần, chiều thứ Sáu.",
          "keys": [
            "Một trang rưỡi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The longer it is, the clearer the boss sees. Right?",
          "sub": "Càng dài, sếp càng nắm rõ. Đúng không?",
          "keys": [
            "Càng dài, sếp càng nắm rõ"
          ]
        }
      ],
      "ref": "intro,p11"
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
          },
          {
            "at": "l6",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
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
                  "side": "left",
                  "face": "happy",
                  "pose": "thumb",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "walk",
                  "at": "l4",
                  "pose": "phone"
                }
              ],
              "props": [
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Sáu 16:00 · bàn Dũng",
            "icon": "page-facing-up"
          },
          {
            "id": "a-line",
            "t": "text",
            "text": "“Thiết kế chưa gửi file” → gần cuối",
            "x": 70,
            "y": 520,
            "size": 42,
            "at": "l3:bottom",
            "color": "muted",
            "hl": [
              {
                "text": "gần cuối",
                "at": "l3:bottom"
              }
            ]
          },
          {
            "id": "a-half",
            "t": "text",
            "text": "Sếp đọc nửa trang → đi họp",
            "x": 70,
            "y": 600,
            "size": 46,
            "at": "l4:half",
            "color": "coral"
          },
          {
            "id": "a-thx",
            "t": "strike",
            "over": "a-th",
            "at": "l7:nobody"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, the tech guy, proudly hitting send.",
          "sub": "Đây là Dũng, dân kỹ thuật, đang hãnh diện bấm gửi.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "One and a half pages! The longer, the better.",
          "sub": "Một trang rưỡi! Càng dài càng tốt.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The line 'design hasn't sent the files' sits near the bottom.",
          "sub": "Dòng “phòng thiết kế chưa gửi file” nằm gần cuối."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Cô Hoa, his manager, reads half a page on her phone, then gets called into a meeting.",
          "sub": "Cô Hoa, trưởng phòng, đọc nửa trang trên điện thoại thì bị gọi đi họp.",
          "keys": [
            "nửa trang"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two weeks later, the launch slips.",
          "sub": "Hai tuần sau, ngày ra mắt phải lùi."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "The launch is late. Why didn't you tell me?",
          "sub": "Ra mắt phải lùi. Sao em không báo?",
          "face": "stern"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "He did. In the one place nobody read.",
          "sub": "Có báo đấy. Ở đúng chỗ không ai đọc tới.",
          "keys": [
            "chỗ không ai đọc tới"
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
      "ref": "p11"
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
            "text": "Báo cáo tuần: ngắn mà đủ?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:short",
            "hl": [
              {
                "text": "ngắn mà đủ",
                "at": "l1:complete"
              }
            ]
          },
          {
            "id": "b-n0",
            "t": "text",
            "text": "1.",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:Done",
            "color": "accent"
          },
          {
            "id": "b-t0",
            "t": "text",
            "text": "Đã xong + kết quả",
            "x": 2088,
            "y": 170,
            "size": 50,
            "at": "l2:Done+200"
          },
          {
            "id": "b-n1",
            "t": "text",
            "text": "2.",
            "x": 2028,
            "y": 240,
            "size": 50,
            "at": "l2:progress",
            "color": "accent"
          },
          {
            "id": "b-t1",
            "t": "text",
            "text": "Đang làm",
            "x": 2088,
            "y": 240,
            "size": 50,
            "at": "l2:progress+200"
          },
          {
            "id": "b-n2",
            "t": "text",
            "text": "3.",
            "x": 2028,
            "y": 310,
            "size": 50,
            "at": "l3:Stuck",
            "color": "accent"
          },
          {
            "id": "b-t2",
            "t": "text",
            "text": "Vướng, cần giúp",
            "x": 2088,
            "y": 310,
            "size": 50,
            "at": "l3:Stuck+200"
          },
          {
            "id": "b-n3",
            "t": "text",
            "text": "4.",
            "x": 2028,
            "y": 380,
            "size": 50,
            "at": "l3:plan",
            "color": "accent"
          },
          {
            "id": "b-t3",
            "t": "text",
            "text": "Kế hoạch tuần tới",
            "x": 2088,
            "y": 380,
            "size": 50,
            "at": "l3:plan+200"
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "Mỗi phần vài dòng · gấp lên đầu",
            "x": 2028,
            "y": 460,
            "size": 46,
            "at": "l4:few lines",
            "color": "accent",
            "hl": [
              {
                "text": "gấp lên đầu",
                "at": "l4:top"
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
          "say": "So how do you write a weekly report that's short and complete?",
          "sub": "Vậy viết báo cáo tuần thế nào cho ngắn gọn mà đủ ý?",
          "keys": [
            "ngắn gọn mà đủ ý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Done, with results. In progress.",
          "sub": "Việc đã xong, kèm kết quả. Việc đang làm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Stuck, where you need help. And next week's plan.",
          "sub": "Chỗ vướng cần sếp giúp. Và kế hoạch tuần tới."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A few lines each, urgent things on top.",
          "sub": "Mỗi phần vài dòng, việc gấp đặt lên đầu.",
          "keys": [
            "việc gấp đặt lên đầu"
          ]
        }
      ],
      "ref": "intro,p8"
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
            "text": "Tuần của Dũng · 7 chặng",
            "x": 2028,
            "y": 550,
            "size": 48,
            "at": "l1:week",
            "hl": [
              {
                "text": "7 chặng",
                "at": "l1:seven stops"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 625,
            "w": 210,
            "h": 90,
            "at": "l1:seven stops+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2258,
            "y": 625,
            "w": 210,
            "h": 90,
            "at": "l1:seven stops+620",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2488,
            "y": 625,
            "w": 210,
            "h": 90,
            "at": "l1:seven stops+840",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2718,
            "y": 625,
            "w": 210,
            "h": 90,
            "at": "l1:seven stops+1060",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2948,
            "y": 625,
            "w": 210,
            "h": 90,
            "at": "l1:seven stops+1280",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3178,
            "y": 625,
            "w": 210,
            "h": 90,
            "at": "l1:seven stops+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3408,
            "y": 625,
            "w": 210,
            "h": 90,
            "at": "l1:seven stops+1720",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 9h",
            "x": 2048,
            "y": 645,
            "size": 38,
            "at": "l1:seven stops+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T2 18h",
            "x": 2278,
            "y": 645,
            "size": 38,
            "at": "l1:seven stops+740"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T3",
            "x": 2508,
            "y": 645,
            "size": 38,
            "at": "l1:seven stops+960"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T4",
            "x": 2738,
            "y": 645,
            "size": 38,
            "at": "l1:seven stops+1180"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T5",
            "x": 2968,
            "y": 645,
            "size": 38,
            "at": "l1:seven stops+1400"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T6 9h",
            "x": 3198,
            "y": 645,
            "size": 38,
            "at": "l1:seven stops+1620"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T6 16h",
            "x": 3428,
            "y": 645,
            "size": 38,
            "at": "l1:seven stops+1840"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Dũng's next week, seven stops, to Friday afternoon.",
          "sub": "Ta theo tuần kế tiếp của Dũng: bảy chặng, tới chiều thứ Sáu.",
          "keys": [
            "bảy chặng"
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
            "at": "l2",
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
            "text": "① Thứ Hai 9:00 · Để làm gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First"
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "sad"
                }
              ],
              "props": [
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Monday",
            "caption": "Thứ Hai 9:00 · bàn cô Hoa",
            "icon": "mobile-phone"
          },
          {
            "id": "c-busy",
            "t": "text",
            "text": "Chứng minh mình bận",
            "x": 3996,
            "y": 165,
            "size": 50,
            "at": "l1:busy",
            "color": "muted"
          },
          {
            "id": "c-busyx",
            "t": "strike",
            "over": "c-busy",
            "at": "l2:read"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "• Việc có ổn không?",
            "x": 4016,
            "y": 250,
            "size": 50,
            "at": "l2:okay",
            "color": "accent"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "• Có gì cần chị làm?",
            "x": 4016,
            "y": 330,
            "size": 50,
            "at": "l2:need me",
            "color": "accent",
            "hl": [
              {
                "text": "cần chị làm",
                "at": "l2:need me"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "• Tuần tới đi tới đâu?",
            "x": 4016,
            "y": 410,
            "size": 50,
            "at": "l3:next week",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Monday morning. A weekly report isn't proof that you're busy.",
          "sub": "Chặng một: sáng thứ Hai. Báo cáo tuần không phải để chứng minh bạn bận.",
          "keys": [
            "chứng minh bạn bận"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "I read it in one quick look, to know: is it okay? Do you need me?",
          "sub": "Chị đọc lướt một lần để biết: việc có ổn không? Có gì cần chị làm không?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "And where will it be next week? Plus what I report upward.",
          "sub": "Và tuần tới đi tới đâu? Cộng thêm điều chị báo cáo lên trên."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Skip it or write it sloppily, and a small snag grows quietly, like a crack in a dyke.",
          "sub": "Bỏ qua hay viết qua loa, chỗ vướng nhỏ lớn dần mà không ai biết, như vết nứt chân đê.",
          "keys": [
            "chỗ vướng nhỏ lớn dần"
          ]
        }
      ],
      "ref": "p1,p2,p3"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Hai 18:00 · Một dòng",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second"
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
                  "pose": "phone"
                }
              ],
              "props": [
                "memo",
                "mobile-phone"
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
            "at": "l1:end",
            "caption": "Thứ Hai 18:00 · trước khi về",
            "icon": "memo"
          },
          {
            "id": "d-n",
            "t": "text",
            "text": "Ghi chú cố định: “Nhật ký tuần”",
            "x": 5964,
            "y": 170,
            "size": 44,
            "at": "l1:note",
            "hl": [
              {
                "text": "Nhật ký tuần",
                "at": "l2:Weekly Log"
              }
            ]
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "• Hôm nay xong gì?",
            "x": 5984,
            "y": 255,
            "size": 50,
            "at": "l2:done",
            "color": "accent"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "• Vướng gì?",
            "x": 5984,
            "y": 335,
            "size": 50,
            "at": "l2:stuck",
            "color": "accent"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "+ quyết định nhỏ trong cuộc gọi",
            "x": 5964,
            "y": 430,
            "size": 42,
            "at": "l3:calls",
            "color": "muted"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "+ việc nhận giúp phòng khác",
            "x": 5964,
            "y": 495,
            "size": 42,
            "at": "l3:favours",
            "color": "muted"
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "+ rủi ro mới nhận ra",
            "x": 5964,
            "y": 560,
            "size": 42,
            "at": "l3:risks",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Monday, end of the day. Dũng opens one fixed note.",
          "sub": "Chặng hai: cuối ngày thứ Hai. Dũng mở một ghi chú cố định."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Weekly Log. What got done today, and where am I stuck?",
          "sub": "Nhật ký tuần. Hôm nay xong gì, và vướng gì?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Add the easy-to-forget stuff: small decisions on calls, favours for other teams, new risks.",
          "sub": "Ghi cả thứ dễ quên: quyết định nhỏ trong cuộc gọi, việc nhận giúp phòng khác, rủi ro mới nhận ra.",
          "keys": [
            "thứ dễ quên"
          ]
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s08",
      "module": "BRK-03",
      "data": {
        "value": 2,
        "suffix": " phút",
        "label": "mỗi cuối ngày · cuối tuần chỉ việc chọn lọc",
        "illus": "stopwatch"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "How long does it take? Two minutes a day.",
          "sub": "Mất bao lâu? Hai phút mỗi ngày."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "On Friday you just choose. No digging through memory.",
          "sub": "Cuối tuần chỉ việc chọn lọc, khỏi lục trí nhớ.",
          "keys": [
            "chỉ việc chọn lọc"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p4"
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
            "id": "d-th",
            "t": "text",
            "text": "Thảo: quên khiếu nại đã xử lý",
            "x": 5964,
            "y": 640,
            "size": 44,
            "at": "l1:complaint",
            "color": "coral"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Mỗi ngày một dòng",
            "x": 5964,
            "y": 715,
            "size": 50,
            "at": "l3:line",
            "color": "accent",
            "hl": [
              {
                "text": "một dòng",
                "at": "l3:light"
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
          "say": "Thảo, his teammate, once forgot a tough customer complaint she had solved.",
          "sub": "Thảo, đồng nghiệp của anh, từng quên ghi một khiếu nại khó của khách mà cô đã xử lý xong."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The boss heard the praise elsewhere: you did that? Why wasn't it in your report?",
          "sub": "Sếp nghe khách khen ở cuộc họp khác: việc này em làm à, sao không thấy trong báo cáo?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A line a day keeps Friday light.",
          "sub": "Mỗi ngày ghi một dòng, cuối tuần nhẹ lòng.",
          "keys": [
            "cuối tuần nhẹ lòng"
          ]
        }
      ],
      "ref": "p6,p7"
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
            "text": "③ Thứ Ba · Thứ tự",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "think"
                }
              ],
              "props": [
                "clipboard",
                "laptop"
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
            "at": "l1:Tuesday",
            "caption": "Thứ Ba · dựng khung",
            "icon": "clipboard"
          },
          {
            "id": "e-time",
            "t": "text",
            "text": "Theo thời gian: T2 → T6",
            "x": 7932,
            "y": 165,
            "size": 48,
            "at": "l2:Monday",
            "color": "muted"
          },
          {
            "id": "e-timex",
            "t": "strike",
            "over": "e-time",
            "at": "l3:boss needs"
          },
          {
            "id": "e-need",
            "t": "text",
            "text": "Theo mức sếp cần",
            "x": 7932,
            "y": 250,
            "size": 54,
            "at": "l3:boss needs",
            "color": "accent",
            "hl": [
              {
                "text": "sếp cần",
                "at": "l3:boss needs"
              }
            ]
          },
          {
            "id": "e-dec",
            "t": "text",
            "text": "Cần quyết → dòng đầu tiên",
            "x": 7932,
            "y": 340,
            "size": 50,
            "at": "l4:first line",
            "color": "coral",
            "hl": [
              {
                "text": "dòng đầu tiên",
                "at": "l4:first line"
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
          "say": "Third stop: Tuesday. Dũng builds the frame for Friday.",
          "sub": "Chặng ba: thứ Ba. Dũng dựng khung cho bản thứ Sáu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I'll go in order: Monday, Tuesday, Wednesday…",
          "sub": "Em viết theo thứ tự: thứ Hai, thứ Ba, thứ Tư…",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Order by what the boss needs, not by the calendar.",
          "sub": "Xếp theo mức sếp cần, không theo lịch.",
          "keys": [
            "theo mức sếp cần"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Something she must decide? First line, even before what's done.",
          "sub": "Có việc cần sếp quyết? Lên dòng đầu tiên, trước cả việc đã xong.",
          "keys": [
            "dòng đầu tiên"
          ]
        }
      ],
      "ref": "p8,p9"
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
            "id": "e-same",
            "t": "text",
            "text": "Cùng một khung mỗi tuần",
            "x": 7932,
            "y": 450,
            "size": 50,
            "at": "l1:same",
            "hl": [
              {
                "text": "Cùng một khung",
                "at": "l1:same frame"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Gấp lên đầu, đừng giấu dưới sâu",
            "x": 7932,
            "y": 560,
            "size": 52,
            "at": "l2:top",
            "color": "accent",
            "hl": [
              {
                "text": "đừng giấu dưới sâu",
                "at": "l2:bury"
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
          "say": "Keep the same frame every week. The boss knows where to look, and you stop reinventing.",
          "sub": "Giữ cùng một khung mỗi tuần. Sếp quen chỗ nên đọc nhanh, mình cũng đỡ nghĩ cách trình bày.",
          "keys": [
            "cùng một khung"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Urgent on top. Don't bury it deep, like the design delay.",
          "sub": "Việc gấp lên đầu, đừng giấu dưới sâu như dòng thiết kế chậm.",
          "keys": [
            "đừng giấu dưới sâu"
          ]
        }
      ],
      "ref": "p10,p11,p12"
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
            "text": "④ Thứ Tư · Kết quả",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "telephone-receiver",
                "laptop"
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
            "at": "l1:Wednesday",
            "caption": "Thứ Tư · viết từng dòng",
            "icon": "telephone-receiver"
          },
          {
            "id": "f-act",
            "t": "text",
            "text": "Gọi điện cho khách nhiều lần",
            "x": 60,
            "y": 1255,
            "size": 46,
            "at": "l2:Called",
            "color": "muted"
          },
          {
            "id": "f-actx",
            "t": "strike",
            "over": "f-act",
            "at": "l3:busy"
          },
          {
            "id": "f-res",
            "t": "text",
            "text": "Đã chốt giao hàng: thứ Ba tới",
            "x": 60,
            "y": 1340,
            "size": 46,
            "at": "l4:agreed",
            "color": "accent",
            "hl": [
              {
                "text": "Đã chốt",
                "at": "l4:agreed"
              }
            ]
          },
          {
            "id": "f-pr",
            "t": "text",
            "text": "Đang làm: tới đâu + khi nào xong",
            "x": 60,
            "y": 1435,
            "size": 44,
            "at": "l5:how far"
          },
          {
            "id": "f-vg",
            "t": "text",
            "text": "“Đang xử lý”, “sắp xong”",
            "x": 60,
            "y": 1515,
            "size": 46,
            "at": "l5:almost",
            "color": "muted"
          },
          {
            "id": "f-vgx",
            "t": "strike",
            "over": "f-vg",
            "at": "l5:almost+500"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Wednesday. Dũng writes his first line.",
          "sub": "Chặng bốn: thứ Tư. Dũng viết dòng đầu tiên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Called the customer several times.",
          "sub": "Gọi điện cho khách nhiều lần.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That only says you were busy.",
          "sub": "Câu đó chỉ nói bạn bận."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Then: agreed the delivery date with the customer, next Tuesday.",
          "sub": "Vậy: đã chốt lịch giao hàng với khách, giao thứ Ba tới.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Work in progress? Say how far, and when it's done. Not 'handling it' or 'almost done'.",
          "sub": "Việc đang làm: ghi rõ tới đâu, khi nào xong. Tránh “đang xử lý”, “sắp xong”.",
          "keys": [
            "tới đâu, khi nào xong"
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
            "id": "f-1l",
            "t": "text",
            "text": "Mỗi dòng 1 việc",
            "x": 60,
            "y": 1620,
            "size": 50,
            "at": "l1:One task",
            "hl": [
              {
                "text": "1 việc",
                "at": "l1:One task"
              }
            ]
          },
          {
            "id": "f-ask",
            "t": "text",
            "text": "Quá trình? Sếp muốn sẽ hỏi",
            "x": 60,
            "y": 1700,
            "size": 46,
            "at": "l2:ask",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One task per line, starting with a verb or a result.",
          "sub": "Mỗi dòng một việc, bắt đầu bằng động từ hoặc kết quả.",
          "keys": [
            "Mỗi dòng một việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Skip the backstory. If she wants it, she'll ask.",
          "sub": "Bỏ kể lể quá trình. Sếp muốn biết sẽ hỏi."
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s15",
      "module": "BRK-04",
      "data": {
        "title": "Báo cáo tuần của Thảo",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Họp nhóm. Làm việc với đối tác. Xử lý email.",
        "right": "Đã thống nhất giá với đối tác, chờ ký thứ Năm.",
        "wrongIllus": "busts-in-silhouette",
        "rightIllus": "handshake"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thảo's old report: meetings, partners, emails.",
          "sub": "Báo cáo cũ của Thảo: họp, đối tác, email."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Her new one: price agreed, signing Thursday.",
          "sub": "Bản mới: đã thống nhất giá, chờ ký thứ Năm.",
          "keys": [
            "chờ ký thứ Năm"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Tư chiều · Thảo",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth"
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
                  "face": "happy",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "give"
                }
              ],
              "props": [
                "handshake"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Thảo",
            "caption": "Vài tuần sau khi viết kiểu mới",
            "icon": "handshake"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "Bản trước: chỉ kể việc bận",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l2:before",
            "color": "muted"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "Bản sau: kết quả + bước tiếp",
            "x": 2028,
            "y": 1345,
            "size": 46,
            "at": "l2:after",
            "color": "accent",
            "hl": [
              {
                "text": "bước tiếp",
                "at": "l2:next step"
              }
            ]
          },
          {
            "id": "g-big",
            "t": "text",
            "text": "→ được giao việc lớn hơn",
            "x": 2068,
            "y": 1435,
            "size": 48,
            "at": "l4:bigger",
            "hl": [
              {
                "text": "việc lớn hơn",
                "at": "l4:bigger"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Kể kết quả, đừng kể việc bận",
            "x": 2028,
            "y": 1560,
            "size": 52,
            "at": "l5:Results",
            "color": "accent",
            "hl": [
              {
                "text": "đừng kể việc bận",
                "at": "l5:not busyness"
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
          "say": "Fifth stop: Wednesday afternoon. Thảo has written this way for a few weeks.",
          "sub": "Chặng năm: chiều thứ Tư. Thảo đã viết kiểu mới được vài tuần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before, she did plenty, but the boss couldn't tell what was finished. After: one line, result and next step.",
          "sub": "Trước kia cô làm rất nhiều, nhưng sếp không biết tuần đó có gì xong. Bản sau: một dòng, kết quả và bước tiếp theo."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, I'd like you to lead the new supplier contract.",
          "sub": "Thảo, chị muốn em phụ trách hợp đồng nhà cung cấp mới.",
          "pose": "give"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Clear reports, bigger jobs.",
          "sub": "Báo cáo rõ, việc giao lớn hơn.",
          "keys": [
            "việc giao lớn hơn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Results, not busyness.",
          "sub": "Kể kết quả, đừng kể việc bận.",
          "keys": [
            "Kể kết quả"
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
      "ref": "p16,p17"
    },
    {
      "id": "s18",
      "module": "DLG-01",
      "ref": "p20,p21",
      "data": {
        "set": "office",
        "label": "Thứ Năm 10:00 · nhập liệu",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nhờ “thêm hỗ trợ” chung chung",
          "why": "Sếp đọc nhiều lần nhưng không biết hỗ trợ gì, từ ai, nên không làm gì.",
          "rule": "Nhờ mơ hồ thì chờ mãi, nhờ cụ thể thì có ngay"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "I need help with data entry. The usual line will do.",
          "sub": "Mình cần người giúp nhập liệu. Ghi như mọi tuần thôi.",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "We need more support from related teams.",
          "sub": "Cần thêm hỗ trợ từ các bộ phận liên quan.",
          "pose": "phone",
          "stop": true
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "What support? From whom? She can't act on that.",
          "sub": "Hỗ trợ gì, từ ai? Sếp đọc xong không biết làm gì.",
          "pose": "point"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại nhé!",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Could you ask HR to lend us one data entry person for two weeks?",
          "sub": "Chị xin phòng nhân sự cho mượn một bạn nhập liệu trong hai tuần được không ạ?",
          "phase": "redo",
          "pose": "phone",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "say": "What, which team, how long. Same-day reply.",
          "sub": "Cần gì, từ phòng nào, bao lâu. Cô Hoa trả lời ngay trong ngày.",
          "phase": "redo",
          "who": "det",
          "keys": [
            "trả lời ngay trong ngày"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      }
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
            "at": 150,
            "fit": "H",
            "ms": 900
          },
          {
            "at": "l1:Sixth",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Năm · Lời nhờ",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth"
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
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "check-mark-button"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "medium",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:request",
            "caption": "Thứ Năm 10:30 · viết lại lời nhờ",
            "icon": "mobile-phone"
          },
          {
            "id": "h-h",
            "t": "text",
            "text": "Lời nhờ có 3 phần:",
            "x": 3996,
            "y": 1255,
            "size": 50,
            "at": "l1:three",
            "hl": [
              {
                "text": "3 phần",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "• Vướng ở đâu",
            "x": 4016,
            "y": 1335,
            "size": 50,
            "at": "l2:stuck",
            "color": "accent"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "• Đã thử gì",
            "x": 4016,
            "y": 1410,
            "size": 50,
            "at": "l2:tried",
            "color": "accent"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "• Cần sếp làm gì, trước khi nào",
            "x": 4016,
            "y": 1485,
            "size": 44,
            "at": "l2:by when",
            "color": "accent",
            "hl": [
              {
                "text": "trước khi nào",
                "at": "l2:by when"
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
          "say": "Sixth stop: Thursday. A good request has three parts.",
          "sub": "Chặng sáu: thứ Năm. Một lời nhờ tốt có ba phần.",
          "keys": [
            "ba phần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Where you're stuck, what you've tried, and exactly what the boss should do, by when.",
          "sub": "Vướng ở đâu, bạn đã thử gì, và bạn cần sếp làm đúng việc gì, trước khi nào.",
          "keys": [
            "trước khi nào"
          ]
        }
      ],
      "ref": "p18"
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
          }
        ],
        "items": [
          {
            "id": "h-ex",
            "t": "text",
            "text": "“Đã nhắc kế toán 2 lần…”",
            "x": 3996,
            "y": 1580,
            "size": 40,
            "at": "l1:twice",
            "color": "muted"
          },
          {
            "id": "h-early",
            "t": "text",
            "text": "Ghi vướng sớm → sếp kịp giúp",
            "x": 3996,
            "y": 1665,
            "size": 46,
            "at": "l2:Early",
            "hl": [
              {
                "text": "kịp giúp",
                "at": "l2:help"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Nhờ cụ thể thì có ngay",
            "x": 3996,
            "y": 1760,
            "size": 52,
            "at": "l3:Vague",
            "color": "accent",
            "hl": [
              {
                "text": "cụ thể",
                "at": "l3:specific"
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
          "say": "Like: accounting hasn't approved the printing cost, I've reminded them twice. Could you message their head before Wednesday?",
          "sub": "Ví dụ: phòng kế toán chưa duyệt chi phí in ấn, em đã nhắc hai lần. Chị nhắn giúp trưởng phòng trước thứ Tư được không ạ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Don't hide problems. Early, the boss can help. Late, you're both stuck.",
          "sub": "Đừng ngại ghi vướng mắc. Biết sớm thì sếp giúp được; biết muộn thì cả hai cùng khó.",
          "keys": [
            "Biết sớm thì sếp giúp được"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Vague requests wait forever. Specific ones get answered.",
          "sub": "Nhờ mơ hồ thì chờ mãi, nhờ cụ thể thì có ngay.",
          "keys": [
            "nhờ cụ thể thì có ngay"
          ]
        }
      ],
      "ref": "p18,p19,p21"
    },
    {
      "id": "s21",
      "module": "BRK-07",
      "data": {
        "question": "Còn khi phải báo cáo bằng lời trong họp?",
        "illus": "speaking-head"
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
          "say": "What about reporting out loud, in the team meeting?",
          "sub": "Còn khi phải báo cáo bằng lời trong họp giao ban?",
          "keys": [
            "bằng lời"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p25"
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Sáu 9:00 · Nói",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
            "at": "l1:meeting",
            "caption": "Thứ Sáu 9:00 · họp giao ban",
            "icon": "speaking-head"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "1. Tình hình chung",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l1:status",
            "color": "accent"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "2. Việc cần quyết",
            "x": 5964,
            "y": 1340,
            "size": 50,
            "at": "l1:decision",
            "color": "accent"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "3. Tuần tới",
            "x": 5964,
            "y": 1420,
            "size": 50,
            "at": "l1:next week",
            "color": "accent"
          },
          {
            "id": "i-done",
            "t": "text",
            "text": "Việc xong, suôn sẻ: nhắc tên",
            "x": 5964,
            "y": 1520,
            "size": 44,
            "at": "l4:name",
            "color": "muted"
          },
          {
            "id": "i-ear",
            "t": "text",
            "text": "Tai cần ít ý hơn mắt",
            "x": 5964,
            "y": 1610,
            "size": 54,
            "at": "l5:fewer",
            "color": "accent",
            "hl": [
              {
                "text": "ít ý hơn",
                "at": "l5:fewer points"
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
          "say": "Seventh stop: Friday's team meeting. A few minutes each: overall status, a decision needed, then next week.",
          "sub": "Chặng bảy: họp giao ban thứ Sáu. Mỗi người vài phút: tình hình chung, việc cần quyết, rồi tuần tới.",
          "keys": [
            "việc cần quyết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "This week my part is on track. I need one decision from you: the launch date.",
          "sub": "Tuần này phần của em đúng tiến độ, có một việc cần chị quyết là chọn ngày ra mắt.",
          "pose": "explain",
          "to": "hoa"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Next week, I'll finish the test version.",
          "sub": "Tuần tới em hoàn thành bản thử.",
          "face": "happy",
          "to": "hoa"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Finished, smooth work? Just name it. Never read the written report word for word.",
          "sub": "Việc đã xong, suôn sẻ chỉ cần nhắc tên. Đừng đọc nguyên văn báo cáo viết."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Ears need fewer points than eyes.",
          "sub": "Người nghe bằng tai cần ít ý hơn người đọc bằng mắt.",
          "keys": [
            "ít ý hơn"
          ]
        }
      ],
      "ref": "p25,p26,p27"
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
          },
          {
            "at": "l5",
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
            "text": "⑧ Thứ Sáu 16:00 · Gửi",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Last"
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
                  "id": "dung",
                  "side": "left",
                  "face": "happy",
                  "pose": "phone"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "phone",
                  "enter": "walk",
                  "at": "l4"
                }
              ],
              "props": [
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
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
            "at": "l1:desk",
            "caption": "Thứ Sáu 16:00 · cùng bàn tuần trước",
            "icon": "mobile-phone"
          },
          {
            "id": "j-ph",
            "t": "text",
            "text": "Đọc vài phút trên điện thoại",
            "x": 7932,
            "y": 1255,
            "size": 46,
            "at": "l2:phone",
            "color": "accent",
            "hl": [
              {
                "text": "vài phút",
                "at": "l2:minutes"
              }
            ]
          },
          {
            "id": "j-tt",
            "t": "text",
            "text": "“Báo cáo tuần · nhóm kho · tuần 2”",
            "x": 7932,
            "y": 1340,
            "size": 40,
            "at": "l3:title",
            "color": "muted"
          },
          {
            "id": "j-same",
            "t": "text",
            "text": "Cùng ngày, cùng giờ",
            "x": 7932,
            "y": 1420,
            "size": 48,
            "at": "l3:same day",
            "hl": [
              {
                "text": "cùng giờ",
                "at": "l3:same time"
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
          "say": "Last stop: Friday, four p.m. Same desk as last week.",
          "sub": "Chặng cuối: bốn giờ chiều thứ Sáu. Vẫn cái bàn tuần trước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This time, the report reads in a few minutes on a phone. Longer usually means backstory or repeats.",
          "sub": "Lần này, báo cáo đọc vài phút trên điện thoại là xong. Dài hơn thường là đang kể quá trình hoặc lặp lại.",
          "keys": [
            "vài phút trên điện thoại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sent on the same day, same time, with a title that's easy to find.",
          "sub": "Gửi cùng một ngày, cùng khung giờ, tiêu đề dễ tìm lại.",
          "keys": [
            "cùng khung giờ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Cô Hoa reads it in the lift.",
          "sub": "Cô Hoa đọc nó trong thang máy."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Launch date: we keep the original one. Clear report.",
          "sub": "Ngày ra mắt: giữ ngày cũ nhé. Báo cáo rõ đấy.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Last week, a page and a half nobody finished. This week, a decision in minutes.",
          "sub": "Tuần trước, một trang rưỡi không ai đọc hết. Tuần này, vài phút đã có quyết định.",
          "keys": [
            "vài phút đã có quyết định"
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
      "ref": "p22,p23"
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
          }
        ],
        "items": [
          {
            "id": "j-tpl",
            "t": "text",
            "text": "Có mẫu công ty → theo mẫu",
            "x": 7932,
            "y": 1520,
            "size": 44,
            "at": "l1:template",
            "color": "muted"
          },
          {
            "id": "j-fb",
            "t": "text",
            "text": "Góp ý → trả lời trong ngày",
            "x": 7932,
            "y": 1600,
            "size": 46,
            "at": "l2:feedback",
            "hl": [
              {
                "text": "trong ngày",
                "at": "l2:same day"
              }
            ]
          },
          {
            "id": "j-plan",
            "t": "text",
            "text": "Kế hoạch tuần trước ↔ đã xong",
            "x": 7932,
            "y": 1690,
            "size": 46,
            "at": "l3:plan",
            "color": "accent",
            "hl": [
              {
                "text": "↔ đã xong",
                "at": "l3:done"
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
          "say": "Company template? Use it, with results and urgent things on top inside its boxes.",
          "sub": "Công ty có mẫu riêng? Cứ theo mẫu, nhưng viết kết quả, việc gấp lên đầu ngay trong các ô."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Feedback? Reply the same day, and mention it next week: as you suggested, I shortened the cost part.",
          "sub": "Sếp góp ý? Trả lời trong ngày, tuần sau nhắc lại: theo góp ý của chị, em đã rút gọn phần chi phí."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And check last week's plan against this week's done. Nothing quietly disappears.",
          "sub": "Và đối chiếu kế hoạch tuần trước với việc đã xong tuần này. Không việc nào lặng lẽ biến mất.",
          "keys": [
            "lặng lẽ biến mất"
          ]
        }
      ],
      "ref": "p24,p28,p29"
    },
    {
      "id": "s27",
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
            "at": "l1:note",
            "fit": "D",
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
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7504,
            "y": 40,
            "at": "l1:note+600"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 40,
            "at": "l2:Urgent+900"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1600,
            "y": 1130,
            "at": "l3:Write+900"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: a daily note, two minutes.",
          "sub": "Tóm lại: ghi chú mỗi ngày, hai phút.",
          "keys": [
            "ghi chú mỗi ngày"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Urgent things and decisions on top.",
          "sub": "Việc gấp, việc cần quyết lên đầu.",
          "keys": [
            "lên đầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Write results, not activities, and requests that say what, who, by when.",
          "sub": "Viết kết quả, không viết hoạt động; lời nhờ rõ việc gì, ai làm, trước khi nào.",
          "keys": [
            "Viết kết quả"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Short doesn't mean missing things. It means what your boss needs.",
          "sub": "Ngắn không có nghĩa là thiếu, mà là đúng thứ sếp cần.",
          "keys": [
            "đúng thứ sếp cần"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p30,outro"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "ref": "questions[16]",
      "data": {
        "q": "You called a customer several times this week, how should you write it?",
        "options": [
          "Write how many calls you made, so the boss sees how hard you tried",
          "Leave it out, because phone calls are too small to include in a report",
          "Write what was agreed, for example the delivery date the customer finally confirmed"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "telephone-receiver",
        "why": "Số cuộc gọi chỉ cho thấy bạn bận, kết quả mới cho thấy bạn làm được gì."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You called a customer several times this week, how should you write it?",
          "sub": "Tuần này bạn gọi cho khách nhiều lần, nên ghi vào báo cáo thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Write what was agreed, for example the delivery date the customer finally confirmed.",
          "sub": "Ghi điều đã chốt, ví dụ ngày giao hàng khách đã xác nhận."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "The number of calls only shows you were busy. The result shows what you did.",
          "sub": "Số cuộc gọi chỉ cho thấy bạn bận, kết quả mới cho thấy bạn làm được gì."
        }
      ]
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Tối nay: tạo “Nhật ký tuần”",
        "sub": "Viết dòng đầu tiên, rồi làm bốn mươi câu"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, start a note called Weekly Log and write your first line. Then try the forty questions below!",
          "sub": "Tối nay, tạo ghi chú “Nhật ký tuần” và viết dòng đầu tiên. Rồi thử bốn mươi câu bên dưới nhé!"
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
