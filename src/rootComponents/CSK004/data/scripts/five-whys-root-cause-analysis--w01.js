// Kịch bản video W lần 3 (#110) — "Phương pháp 5 Why" · chuỗi "Giải quyết vấn đề và ra quyết định"
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "five-whys-root-cause-analysis--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "workplace-problem-solvers",
    "slug": "five-whys-root-cause-analysis",
    "door": "ky-nang",
    "level": "B1",
    "title": "Phương pháp 5 Why là gì và áp dụng thế nào để tìm nguyên nhân gốc?",
    "series": "Giải quyết vấn đề và ra quyết định"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN ở kho của Dũng rồi MỘT THÁNG SAU (T2 7:30 máy đóng gói dừng lần thứ tư → ① T2 8:00 gom tổ, chuyện đi muộn → ② T2 9:00 chuỗi 5 Why máy đóng gói → ③ T3 Thảo hoá đơn gửi nhầm + “Khoan đã!” dừng ở một cái tên → ④ T4 máy in nhãn “chắc là giấy” (A/B) → ⑤ T5 Lan, hoàn tiền lâu, hai nhánh → ⑥ T6 soát chuỗi, giao lịch tra dầu → ⑦ T6 16:00 báo Cô Hoa → ⑧ một tháng sau T2 7:30 ngày nhìn lại). Nhân vật (mạch chủ đề w145/_series/workplace-problem-solvers.md): Dũng (tổ máy đóng gói p8, Nghĩa p17, người đi muộn p6, người báo sếp p26), Thảo (Hằng p13), Lan (Yến p20), Cô Hoa (sếp p26). Cảnh ngắt nhịp: BRK-06 montage chữa cháy (p1), BRK-04 “Ai làm sai?” / “Điều gì khiến nó xảy ra được?” (p11), BRK-07 “hai đáp án, chọn một cho gọn?” (p19), BRK-05 nhắc nhanh “đừng dừng ở…” (p22). Khép vòng: “Nhổ cỏ phải nhổ tận gốc” → một tháng sau ra vườn xem lại. Bản cũ (W lần 3, #112): w145/bak/five-whys-root-cause-analysis--w01.js.",
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
            "text": "3 lần sửa",
            "x": 60,
            "y": 120,
            "size": 150,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 lần",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "3 lần quay lại",
            "x": 70,
            "y": 330,
            "size": 60,
            "at": "l1:came back",
            "hl": [
              {
                "text": "quay lại",
                "at": "l1:came back"
              }
            ]
          },
          {
            "id": "a-x",
            "t": "text",
            "text": "Ta tưởng: sửa vậy là xong?",
            "x": 70,
            "y": 450,
            "size": 52,
            "at": "l2:wrong",
            "color": "muted"
          },
          {
            "id": "a-xx",
            "t": "strike",
            "over": "a-x",
            "at": "l2:on top"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three fixes. And three times, the same problem came back.",
          "sub": "Ba lần sửa. Và ba lần, sự cố cũ quay lại.",
          "keys": [
            "Ba lần sửa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "You did nothing wrong. You only fixed the part on top.",
          "sub": "Bạn không làm sai. Bạn mới sửa phần nổi.",
          "keys": [
            "phần nổi"
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
            "x": 900,
            "y": 120,
            "w": 720,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "shrug",
                  "face": "worried"
                }
              ],
              "props": [
                "gear",
                "high-voltage"
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
            "caption": "Thứ Hai 7:30 · xưởng đóng gói",
            "icon": "gear"
          },
          {
            "id": "a-fire",
            "t": "text",
            "text": "Thay cầu chì = chữa cháy",
            "x": 60,
            "y": 560,
            "size": 46,
            "at": "l4:firefighting",
            "color": "coral",
            "hl": [
              {
                "text": "chữa cháy",
                "at": "l4:firefighting"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Nhổ cỏ phải nhổ tận gốc”",
            "x": 60,
            "y": 665,
            "size": 56,
            "at": "l5:weeds",
            "color": "accent",
            "hl": [
              {
                "text": "tận gốc",
                "at": "l5:root"
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
          "say": "Meet Dũng, the warehouse guy at a small snack company.",
          "sub": "Đây là Dũng, lo kho ở một công ty bánh kẹo nhỏ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Monday, seven thirty. The packing machine stops mid-shift. Again.",
          "sub": "Thứ Hai, bảy rưỡi. Máy đóng gói dừng giữa ca. Lại nữa."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "The leader changed the fuse. Fourth time! Okay, back to work.",
          "sub": "Anh tổ trưởng lại thay cầu chì. Lần thứ tư! Thôi, làm tiếp.",
          "face": "worried",
          "pose": "shrug"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A new fuse stops today's damage. That's firefighting. Needed, but not the end.",
          "sub": "Thay cầu chì chặn thiệt hại hôm nay, gọi là chữa cháy. Cần, nhưng chưa phải xong.",
          "keys": [
            "chữa cháy"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "As we say: pull weeds out by the root.",
          "sub": "Ông bà dặn: “Nhổ cỏ phải nhổ tận gốc.”",
          "keys": [
            "nhổ tận gốc"
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
      "ref": "p1,intro"
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
            "text": "5 Why: hỏi đến tận gốc",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:five whys",
            "hl": [
              {
                "text": "tận gốc",
                "at": "l1:root cause"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Tại sao? → trả lời",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:ask why"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Tại sao nữa? → dữ kiện",
            "x": 2028,
            "y": 235,
            "size": 50,
            "at": "l2:that answer"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Dừng: gốc nhóm đổi được",
            "x": 2028,
            "y": 310,
            "size": 50,
            "at": "l3:change",
            "color": "accent",
            "hl": [
              {
                "text": "nhóm đổi được",
                "at": "l3:team can change"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Chữa cháy là xong",
            "x": 2028,
            "y": 400,
            "size": 50,
            "at": "l4:done",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:done+300"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Chặn hôm nay + tìm vì sao lặp",
            "x": 2028,
            "y": 475,
            "size": 46,
            "at": "l4:both",
            "color": "accent",
            "hl": [
              {
                "text": "tìm vì sao lặp",
                "at": "l4:repeats"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 580,
            "w": 180,
            "h": 90,
            "at": "l5:week+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2233,
            "y": 580,
            "w": 180,
            "h": 90,
            "at": "l5:week+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2438,
            "y": 580,
            "w": 180,
            "h": 90,
            "at": "l5:week+700",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2643,
            "y": 580,
            "w": 180,
            "h": 90,
            "at": "l5:week+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2848,
            "y": 580,
            "w": 180,
            "h": 90,
            "at": "l5:week+1100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3053,
            "y": 580,
            "w": 180,
            "h": 90,
            "at": "l5:week+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3258,
            "y": 580,
            "w": 180,
            "h": 90,
            "at": "l5:week+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3463,
            "y": 580,
            "w": 180,
            "h": 90,
            "at": "l5:week+1700",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 8:00",
            "x": 2043,
            "y": 598,
            "size": 38,
            "at": "l5:week+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T2 9:00",
            "x": 2248,
            "y": 598,
            "size": 38,
            "at": "l5:week+620"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T3",
            "x": 2453,
            "y": 598,
            "size": 38,
            "at": "l5:week+820"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T4",
            "x": 2658,
            "y": 598,
            "size": 38,
            "at": "l5:week+1020"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T5",
            "x": 2863,
            "y": 598,
            "size": 38,
            "at": "l5:week+1220"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T6",
            "x": 3068,
            "y": 598,
            "size": 38,
            "at": "l5:week+1420"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T6 16:00",
            "x": 3273,
            "y": 598,
            "size": 38,
            "at": "l5:week+1620"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "+1 tháng",
            "x": 3478,
            "y": 598,
            "size": 38,
            "at": "l5:week+1820"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what is five whys, and how does it find the root cause?",
          "sub": "Vậy 5 Why là gì, tìm nguyên nhân gốc thế nào?",
          "keys": [
            "nguyên nhân gốc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask why it happened. Then ask why about that answer.",
          "sub": "Hỏi vì sao sự cố xảy ra. Rồi hỏi tại sao với chính câu trả lời vừa có."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Each step stands on facts, until a cause your team can change.",
          "sub": "Mỗi tầng dựa trên dữ kiện, tới khi gặp nguyên nhân nhóm đổi được.",
          "keys": [
            "nhóm đổi được"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Firefighting isn't wrong. Calling it done is. Do both: stop the damage, then find why it repeats.",
          "sub": "Chữa cháy không sai. Sai là coi chữa cháy là xong. Làm cả hai: chặn thiệt hại, rồi tìm vì sao nó lặp.",
          "keys": [
            "coi chữa cháy là xong"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One week with Dũng, then one month later.",
          "sub": "Theo Dũng một tuần, rồi một tháng sau."
        }
      ],
      "ref": "intro,p2,p4"
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
            "text": "① T2 8:00 · Gom tổ lại",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 120,
            "w": 720,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "neutral"
                }
              ],
              "props": [
                "gear",
                "memo"
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
            "at": "l1:team",
            "caption": "Thứ Hai 8:00 · cả tổ đóng gói",
            "icon": "busts-in-silhouette"
          },
          {
            "id": "c-say",
            "t": "text",
            "text": "“Xử lý tạm xong rồi…",
            "x": 3996,
            "y": 160,
            "size": 46,
            "at": "l2:handled"
          },
          {
            "id": "c-say2",
            "t": "text",
            "text": "giờ tìm vì sao lặp lại”",
            "x": 4026,
            "y": 230,
            "size": 46,
            "at": "l2:coming back",
            "color": "accent",
            "hl": [
              {
                "text": "vì sao lặp lại",
                "at": "l2:coming back"
              }
            ]
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "“5” = đừng dừng sớm",
            "x": 3996,
            "y": 320,
            "size": 48,
            "at": "l4:reminder"
          },
          {
            "id": "c-35",
            "t": "text",
            "text": "có khi 3 lần, có khi hơn",
            "x": 4026,
            "y": 390,
            "size": 40,
            "at": "l4:three",
            "color": "muted"
          },
          {
            "id": "c-stop",
            "t": "text",
            "text": "Dừng: khó quay lại + tự làm được",
            "x": 3996,
            "y": 470,
            "size": 40,
            "at": "l5:rarely",
            "hl": [
              {
                "text": "tự làm được",
                "at": "l5:can do"
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
          "say": "First stop: eight a.m. Dũng gathers the team with one sentence.",
          "sub": "Chặng một: tám giờ. Dũng gom cả tổ lại bằng một câu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "We've handled it for now. Now let's find out why it keeps coming back.",
          "sub": "Mình đã xử lý tạm xong, giờ mình tìm xem vì sao nó cứ lặp lại nhé.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No blame in it. It just moves the team from firefighting to roots.",
          "sub": "Câu này không trách ai, chỉ kéo cả nhóm từ chữa cháy sang tìm gốc.",
          "keys": [
            "không trách ai"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Five is only a reminder not to stop early. Sometimes three is enough, sometimes more.",
          "sub": "Con số năm chỉ nhắc đừng dừng sớm. Có khi ba lần đã chạm gốc, có khi cần hơn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Stop when fixing it means it rarely returns, and your team can do it.",
          "sub": "Dừng đúng khi sửa điều đó thì sự cố khó quay lại, và nhóm tự làm được.",
          "keys": [
            "nhóm tự làm được"
          ]
        }
      ],
      "ref": "p3,p5"
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
          },
          {
            "at": "l2",
            "fit": [
              "c-ph",
              "c-fix"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3:end",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-ph",
            "t": "illus",
            "name": "mobile-phone",
            "x": 3996,
            "y": 560,
            "size": 70,
            "at": "l2:phone"
          },
          {
            "id": "c-lt",
            "t": "text",
            "text": "Muộn ← mệt ← điện thoại khuya",
            "x": 4086,
            "y": 570,
            "size": 42,
            "at": "l2:late"
          },
          {
            "id": "c-al",
            "t": "text",
            "text": "Thêm báo thức",
            "x": 3996,
            "y": 650,
            "size": 44,
            "at": "l3:alarm",
            "color": "muted"
          },
          {
            "id": "c-alx",
            "t": "strike",
            "over": "c-al",
            "at": "l3:alarm+400"
          },
          {
            "id": "c-fix",
            "t": "text",
            "text": "Điện thoại ra ngoài phòng ngủ",
            "x": 3996,
            "y": 712,
            "size": 42,
            "at": "l3:outside",
            "color": "accent",
            "hl": [
              {
                "text": "ra ngoài",
                "at": "l3:outside"
              }
            ]
          },
          {
            "id": "c-pen",
            "t": "text",
            "text": "Chỉ cần giấy bút",
            "x": 4836,
            "y": 690,
            "size": 46,
            "at": "l1:pen",
            "hl": [
              {
                "text": "giấy bút",
                "at": "l1:pen"
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
          "say": "No software needed. Paper, a pen, and the people doing the work.",
          "sub": "Không cần phần mềm. Chỉ cần giấy bút và người trực tiếp làm việc đó.",
          "keys": [
            "giấy bút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It works at home too. Dũng was late today. Why? Tired. Why? Phone until late.",
          "sub": "Dùng cả cho chuyện riêng. Sáng nay Dũng đến muộn. Vì sao? Dậy mệt. Vì sao? Xem điện thoại tới khuya."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "So, no extra alarm. My phone sleeps outside the bedroom.",
          "sub": "Vậy không đặt thêm báo thức. Điện thoại ngủ ngoài phòng ngủ.",
          "face": "happy"
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s04b",
      "module": "BRK-06",
      "data": {
        "title": "Chữa cháy: cần, nhưng chưa xong",
        "items": [
          {
            "illus": "high-voltage",
            "text": "Thay cầu chì"
          },
          {
            "illus": "package",
            "text": "Gửi lại hàng"
          },
          {
            "illus": "folded-hands",
            "text": "Xin lỗi khách"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "New fuse, resent goods, a sorry.",
          "sub": "Thay cầu chì, gửi lại hàng, xin lỗi khách."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "All firefighting. Now, the roots.",
          "sub": "Toàn là chữa cháy. Giờ xuống gốc.",
          "keys": [
            "chữa cháy"
          ]
        }
      ],
      "ref": "p1"
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
            "text": "② T2 9:00 · Hỏi từng bước",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:second stop"
          },
          {
            "id": "d-s1",
            "t": "text",
            "text": "1. Một câu: “dừng 3 lần/tuần”",
            "x": 5964,
            "y": 160,
            "size": 42,
            "at": "l1:sentence",
            "hl": [
              {
                "text": "Một câu",
                "at": "l1:sentence"
              }
            ]
          },
          {
            "id": "d-s2",
            "t": "text",
            "text": "2. Hỏi → ghi ngay bên dưới",
            "x": 5964,
            "y": 230,
            "size": 42,
            "at": "l2:write"
          },
          {
            "id": "d-s3",
            "t": "text",
            "text": "3. Kiểm: tận nơi, sổ ghi",
            "x": 5964,
            "y": 300,
            "size": 42,
            "at": "l3:check",
            "color": "accent",
            "hl": [
              {
                "text": "tận nơi",
                "at": "l3:look"
              }
            ]
          },
          {
            "id": "d-s4",
            "t": "text",
            "text": "4. Hỏi tiếp · 5. Dừng",
            "x": 5964,
            "y": 370,
            "size": 42,
            "at": "l3:again"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: nine a.m. Step one: one sentence. This week, the packing machine stopped three times.",
          "sub": "Chặng hai: chín giờ. Bước một: viết thành một câu. “Tuần này máy đóng gói dừng ba lần.”",
          "keys": [
            "một câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask why, and write the answer right below.",
          "sub": "Hỏi tại sao, ghi câu trả lời ngay bên dưới."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Check it: go and look, read the logbook. Then ask again, and stop where the team can act.",
          "sub": "Kiểm tra: xem tận nơi, xem sổ ghi chép. Rồi hỏi tiếp, dừng ở điều nhóm làm được."
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s06",
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
            "at": "l1",
            "fit": [
              "d-c0",
              "d-c4"
            ],
            "zoom": 1.1,
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
            "id": "d-c0",
            "t": "text",
            "text": "1. Cầu chì cháy",
            "x": 6824,
            "y": 150,
            "size": 44,
            "at": "l1:fuse"
          },
          {
            "id": "d-c1",
            "t": "text",
            "text": "2. Động cơ quá tải",
            "x": 6854,
            "y": 222,
            "size": 44,
            "at": "l1:motor"
          },
          {
            "id": "d-c2",
            "t": "text",
            "text": "3. Ổ trục khô dầu",
            "x": 6884,
            "y": 294,
            "size": 44,
            "at": "l2:dry"
          },
          {
            "id": "d-c3",
            "t": "text",
            "text": "4. Mấy tháng không tra",
            "x": 6914,
            "y": 366,
            "size": 44,
            "at": "l2:months"
          },
          {
            "id": "d-c4",
            "t": "text",
            "text": "5. Lịch không giao lại",
            "x": 6944,
            "y": 438,
            "size": 44,
            "at": "l3:handed",
            "color": "accent",
            "hl": [
              {
                "text": "Lịch không giao lại",
                "at": "l3:handed"
              }
            ]
          },
          {
            "id": "d-ar",
            "t": "arrow",
            "from": [
              7564,
              170
            ],
            "to": [
              7564,
              480
            ],
            "at": "l4:everyone sees"
          },
          {
            "id": "d-see",
            "t": "text",
            "text": "ai cũng thấy → ít ai để ý",
            "x": 6824,
            "y": 530,
            "size": 40,
            "at": "l4:few notice",
            "color": "muted",
            "hl": [
              {
                "text": "ít ai để ý",
                "at": "l4:few notice"
              }
            ]
          },
          {
            "id": "d-deep",
            "t": "text",
            "text": "Càng sâu: càng rẻ, càng bền",
            "x": 5964,
            "y": 470,
            "size": 46,
            "at": "l5:deeper",
            "color": "accent",
            "hl": [
              {
                "text": "càng bền",
                "at": "l5:lasting"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Chữa cháy để chạy tiếp,",
            "x": 5964,
            "y": 600,
            "size": 46,
            "at": "l6:fire"
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "hỏi tại sao để khỏi cháy lại",
            "x": 5964,
            "y": 670,
            "size": 46,
            "at": "l6:ask why",
            "color": "accent",
            "hl": [
              {
                "text": "khỏi cháy lại",
                "at": "l6:burn again"
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
          "say": "The team asks. Why did it stop? The fuse burned. Why? The motor was overloaded.",
          "sub": "Cả tổ ngồi lại. Vì sao máy dừng? Cầu chì cháy. Vì sao cháy? Động cơ quá tải."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Why? The bearing ran dry. Why? Nobody oiled it for months.",
          "sub": "Vì sao quá tải? Ổ trục khô dầu. Vì sao khô? Mấy tháng không ai tra."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Why? Its keeper moved to another team, and the schedule was never handed over.",
          "sub": "Vì sao? Người phụ trách cũ chuyển bộ phận, lịch bảo dưỡng không được giao lại.",
          "keys": [
            "không được giao lại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Each why steps down, from what everyone sees to what few notice.",
          "sub": "Mỗi câu hỏi đi một bước, từ thứ ai cũng thấy xuống thứ ít ai để ý.",
          "keys": [
            "ít ai để ý"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The deeper you go, the cheaper and more lasting the fix.",
          "sub": "Càng xuống sâu, cách sửa thường càng rẻ và càng bền.",
          "keys": [
            "càng rẻ và càng bền"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Fight the fire to keep running. Ask why, so it won't burn again.",
          "sub": "Chữa cháy để chạy tiếp, hỏi tại sao để khỏi cháy lại.",
          "keys": [
            "khỏi cháy lại"
          ]
        }
      ],
      "ref": "p8,p9,p10"
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
            "zoom": 1.3,
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
            "text": "③ Thứ Ba · Hoá đơn gửi nhầm",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third stop"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 120,
            "w": 720,
            "data": {
              "set": "office",
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
                "receipt",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
            "at": "l1:invoice",
            "caption": "Thứ Ba · nhóm xuất hoá đơn",
            "icon": "receipt"
          },
          {
            "id": "e-q1",
            "t": "text",
            "text": "Ai làm sai? → thủ phạm",
            "x": 7932,
            "y": 160,
            "size": 46,
            "at": "l3:who",
            "color": "coral"
          },
          {
            "id": "e-q2",
            "t": "text",
            "text": "Vì đâu xảy ra được? → điều kiện",
            "x": 7932,
            "y": 235,
            "size": 42,
            "at": "l3:allowed",
            "color": "accent",
            "hl": [
              {
                "text": "điều kiện",
                "at": "l3:allowed"
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
          "say": "Third stop: Tuesday. Meet Thảo, who leads the invoice team.",
          "sub": "Chặng ba: thứ Ba. Đây là Thảo, phụ trách nhóm xuất hoá đơn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A customer just got another customer's invoice.",
          "sub": "Một khách vừa nhận nhầm hoá đơn của khách khác."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Watch her first why. Who did it wrong, or what allowed it?",
          "sub": "Để ý câu tại sao đầu tiên của cô. Ai làm sai, hay điều gì khiến nó xảy ra được?",
          "keys": [
            "điều gì khiến nó xảy ra được"
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
      "ref": "p11,p13"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Ba hoá đơn nhầm",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "stand"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Dừng ở “do bạn ấy nhập nhầm”",
          "why": "Tháng sau một bạn khác nhầm y hệt, vì chỗ hở trong quy trình vẫn còn.",
          "rule": "Dừng ở một cái tên là dừng quá sớm"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Why the wrong invoice? Someone typed it wrong. Be more careful, please!",
          "sub": "Vì sao gửi nhầm? Do bạn ấy nhập nhầm. Cẩn thận hơn nhé!",
          "face": "stern",
          "pose": "explain",
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
          "say": "Stop at a name, and next month someone else makes the same mistake. Rewind!",
          "sub": "Dừng ở một cái tên, tháng sau một bạn khác nhầm y hệt. Tua lại!",
          "phase": "redo",
          "keys": [
            "Dừng ở một cái tên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Why could this mistake happen? Let me open the customer list.",
          "sub": "Vì sao việc nhầm lại xảy ra được? Mở danh sách khách xem nào.",
          "phase": "redo",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Two customers, same name, side by side, and no code!",
          "sub": "Hai khách trùng tên nằm sát nhau, không có mã phân biệt!",
          "phase": "redo",
          "face": "surprised",
          "pose": "point"
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
            "id": "e-hide",
            "t": "text",
            "text": "Sợ bị gọi tên → giấu chi tiết",
            "x": 7932,
            "y": 330,
            "size": 42,
            "at": "l1:afraid",
            "color": "coral"
          },
          {
            "id": "e-forgot",
            "t": "text",
            "text": "“Bạn ấy quên” → vì sao quên được?",
            "x": 7932,
            "y": 410,
            "size": 40,
            "at": "l2:forgot"
          },
          {
            "id": "e-gap",
            "t": "text",
            "text": "→ thiếu bước nhắc, bước kiểm",
            "x": 7962,
            "y": 480,
            "size": 42,
            "at": "l2:reminder",
            "color": "accent",
            "hl": [
              {
                "text": "bước nhắc",
                "at": "l2:reminder"
              }
            ]
          },
          {
            "id": "e-rule",
            "t": "text",
            "text": "Tìm chỗ hở, không tìm người",
            "x": 7932,
            "y": 690,
            "size": 40,
            "at": "l3:gaps",
            "color": "accent",
            "hl": [
              {
                "text": "Tìm chỗ hở",
                "at": "l3:gaps"
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
          "say": "People afraid of being named hide details, the very ones you need most.",
          "sub": "Sợ bị gọi tên, người ta giấu chi tiết, đúng thứ bạn cần nhất.",
          "keys": [
            "giấu chi tiết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Chain ends at she forgot? Ask once more: why could forgetting happen? Usually, a missing reminder or check.",
          "sub": "Chuỗi dừng ở “bạn ấy quên”? Hỏi thêm: vì sao quên lại xảy ra được? Thường là thiếu bước nhắc, bước kiểm.",
          "keys": [
            "thiếu bước nhắc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Invite the people who do the work, and say the rule first: we look for gaps, not culprits.",
          "sub": "Mời người trực tiếp làm ngồi cùng, nói trước luật chơi: tìm chỗ quy trình hở, không tìm người có lỗi.",
          "keys": [
            "tìm chỗ quy trình hở"
          ]
        }
      ],
      "ref": "p11,p12,p15"
    },
    {
      "id": "s10",
      "module": "BRK-04",
      "data": {
        "title": "Câu tại sao đầu tiên",
        "wrong": "Ai làm sai?",
        "right": "Điều gì khiến nó xảy ra được?",
        "wrongIllus": "pouting-face",
        "rightIllus": "magnifying-glass-tilted-left"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Not: who did it wrong?",
          "sub": "Đừng hỏi: “Ai làm sai?”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But: what let it happen?",
          "sub": "Mà hỏi: “Điều gì khiến nó xảy ra được?”",
          "keys": [
            "xảy ra được"
          ]
        }
      ],
      "ref": "p11"
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
            "at": "a1",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "b3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Tư · “Chắc là…”",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "n1:fourth stop"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 900,
            "y": 1210,
            "w": 720,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "pose": "stand"
                }
              ],
              "props": [
                "printer",
                "label"
              ],
              "left": {
                "label": "A: “chắc là giấy”",
                "ok": false
              },
              "right": {
                "label": "B: ra xem tận nơi",
                "ok": true
              }
            },
            "at": "n1:printer",
            "caption": "Thứ Tư · máy in nhãn ở kho",
            "icon": "printer"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "A: mua giấy đắt → vẫn lệch",
            "x": 60,
            "y": 1250,
            "size": 44,
            "at": "a2:still",
            "color": "coral"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "B: “cần kiểm tra” → ra xem",
            "x": 60,
            "y": 1330,
            "size": 44,
            "at": "b1:checking",
            "color": "accent"
          },
          {
            "id": "f-b2",
            "t": "text",
            "text": "→ thanh dẫn giấy lỏng",
            "x": 90,
            "y": 1400,
            "size": 44,
            "at": "b2:loose",
            "hl": [
              {
                "text": "thanh dẫn giấy lỏng",
                "at": "b2:loose"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "n1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Wednesday. Dũng's label printer keeps printing crooked.",
          "sub": "Chặng bốn: thứ Tư. Máy in nhãn ở kho của Dũng cứ in lệch."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "Why? Probably the cheap paper. Order the expensive kind!",
          "sub": "Vì sao? Chắc là do giấy rẻ. Đặt giấy đắt hơn!",
          "phase": "a",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "det",
          "say": "New paper arrives. The labels are still crooked.",
          "sub": "Giấy mới về. Nhãn vẫn lệch.",
          "phase": "a"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "Probably the paper, but I'll write: needs checking. Let me look first.",
          "sub": "Chắc do giấy, nhưng ghi “cần kiểm tra”. Ra xem máy đã.",
          "phase": "b",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "dung",
          "say": "The paper guide is loose, ever since we moved the printer!",
          "sub": "Thanh dẫn giấy lỏng, từ lần chuyển máy sang bàn mới!",
          "phase": "b",
          "face": "surprised",
          "pose": "point"
        },
        {
          "id": "b3",
          "lang": "en",
          "who": "det",
          "say": "Tighten it, and the labels print straight.",
          "sub": "Siết lại thanh dẫn, nhãn in thẳng ngay.",
          "phase": "b",
          "keys": [
            "nhãn in thẳng"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
      "ref": "p17"
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
            "id": "f-f",
            "t": "text",
            "text": "Mỗi tầng: dữ kiện, không đoán",
            "x": 60,
            "y": 1500,
            "size": 44,
            "at": "l1:fact",
            "hl": [
              {
                "text": "dữ kiện",
                "at": "l1:fact"
              }
            ]
          },
          {
            "id": "f-w",
            "t": "text",
            "text": "1 tầng đoán sai → cả chuỗi sai",
            "x": 60,
            "y": 1580,
            "size": 42,
            "at": "l2:wrong",
            "color": "coral"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "“Chắc là” → kiểm trước",
            "x": 60,
            "y": 1690,
            "size": 54,
            "at": "l3:probably",
            "color": "accent",
            "hl": [
              {
                "text": "kiểm trước",
                "at": "l3:checked"
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
          "say": "Every answer needs a fact, not a guess. Not sure? Write: needs checking, and go and look.",
          "sub": "Mỗi câu trả lời phải dựa trên dữ kiện. Chưa chắc? Ghi “cần kiểm tra”, đi xem tận nơi.",
          "keys": [
            "dữ kiện"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One wrong guess drags every level below it the wrong way.",
          "sub": "Một tầng đoán sai kéo cả chuỗi phía dưới sai theo."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Every probably gets checked before the next why.",
          "sub": "Chữ “chắc là” phải đi kiểm trước khi hỏi tiếp.",
          "keys": [
            "chắc là"
          ]
        }
      ],
      "ref": "p16,p18"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Một câu tại sao, hai đáp án: chọn một cho gọn?",
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
          "say": "One why, two true answers. Just pick one?",
          "sub": "Một câu tại sao, hai đáp án đều đúng. Chọn một cho gọn?",
          "keys": [
            "Chọn một cho gọn"
          ]
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
            "text": "⑤ Thứ Năm · Hai nhánh",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:fifth stop"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1210,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "money-with-wings",
                "telephone-receiver"
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
            "at": "l1:Lan",
            "caption": "Thứ Năm · khách chờ hoàn tiền",
            "icon": "money-with-wings"
          },
          {
            "id": "g-root",
            "t": "text",
            "text": "Hoàn tiền lâu",
            "x": 2228,
            "y": 1250,
            "size": 54,
            "at": "l1:refunds",
            "color": "coral"
          },
          {
            "id": "g-a1",
            "t": "arrow",
            "from": [
              2348,
              1320
            ],
            "to": [
              2168,
              1410
            ],
            "at": "l2:forms"
          },
          {
            "id": "g-a2",
            "t": "arrow",
            "from": [
              2428,
              1320
            ],
            "to": [
              2608,
              1410
            ],
            "at": "l2:approver"
          },
          {
            "id": "g-n1",
            "t": "text",
            "text": "Hồ sơ thiếu",
            "x": 2028,
            "y": 1420,
            "size": 44,
            "at": "l2:forms"
          },
          {
            "id": "g-n2",
            "t": "text",
            "text": "Người duyệt vắng",
            "x": 2488,
            "y": 1420,
            "size": 44,
            "at": "l2:approver"
          },
          {
            "id": "g-f1",
            "t": "text",
            "text": "→ sửa biểu mẫu",
            "x": 2028,
            "y": 1500,
            "size": 40,
            "at": "l4:fix the form",
            "color": "accent"
          },
          {
            "id": "g-f2",
            "t": "text",
            "text": "→ người duyệt thay",
            "x": 2488,
            "y": 1500,
            "size": 40,
            "at": "l4:backup",
            "color": "accent"
          },
          {
            "id": "g-half",
            "t": "text",
            "text": "Chỉ sửa 1 nhánh: giảm rồi đứng",
            "x": 2028,
            "y": 1590,
            "size": 42,
            "at": "l3:stalls",
            "color": "muted"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "2 đáp án → đi cả 2 nhánh",
            "x": 2028,
            "y": 1770,
            "size": 50,
            "at": "l5:both",
            "color": "accent",
            "hl": [
              {
                "text": "cả 2 nhánh",
                "at": "l5:both branches"
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
          "say": "Fifth stop: Thursday. Lan from sales hears it every day: refunds take too long.",
          "sub": "Chặng năm: thứ Năm. Lan bên bán hàng ngày nào cũng nghe: hoàn tiền lâu quá."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Why so slow? Two answers. Forms miss information and bounce back. And the approver often travels.",
          "sub": "Vì sao chậm? Hai đáp án: hồ sơ thiếu thông tin bị trả lại. Và người duyệt hay đi công tác.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fix only the form? The wait drops a little, then stalls. The approver branch is untouched.",
          "sub": "Chỉ sửa biểu mẫu? Thời gian chờ giảm một phần rồi đứng im. Nhánh người duyệt vẫn nguyên."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Each branch gets its own action: fix the form, and add a backup approver.",
          "sub": "Mỗi nhánh một hành động: sửa biểu mẫu, và cử người duyệt thay khi người chính vắng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One why, two answers? Follow both branches.",
          "sub": "Một câu tại sao có hai đáp án thì đi cả hai nhánh.",
          "keys": [
            "đi cả hai nhánh"
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
      "ref": "p19,p20,p21"
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
          },
          {
            "at": 150,
            "fit": "H",
            "ms": 900
          },
          {
            "at": "l4",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Sáu · Soát chuỗi, giao việc",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sixth stop"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1210,
            "w": 720,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "point",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-calendar",
                "oil-drum"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3:owner",
            "caption": "Thứ Sáu · lịch dán cạnh máy",
            "icon": "spiral-calendar"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Câu cuối: nhóm làm được?",
            "x": 3996,
            "y": 1250,
            "size": 44,
            "at": "l1:act"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Mỗi tầng: dữ kiện hay “chắc là”?",
            "x": 3996,
            "y": 1320,
            "size": 42,
            "at": "l2:fact"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Có đổ lỗi một người?",
            "x": 3996,
            "y": 1390,
            "size": 44,
            "at": "l2:blamed"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Có nhánh nào bị quên?",
            "x": 3996,
            "y": 1460,
            "size": 44,
            "at": "l2:forgotten"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "1 hành động · 1 người · 1 hạn",
            "x": 3996,
            "y": 1560,
            "size": 46,
            "at": "l3:action",
            "color": "accent",
            "hl": [
              {
                "text": "1 người",
                "at": "l3:owner"
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
          "say": "Sixth stop: Friday. Before acting, check the chain. Can the team act on the last answer?",
          "sub": "Chặng sáu: thứ Sáu. Trước khi làm, soát chuỗi. Câu trả lời cuối có phải điều nhóm làm được?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A fact at every level, or just probably? Anyone blamed? Any branch forgotten?",
          "sub": "Mỗi tầng có dữ kiện, hay chỉ “chắc là”? Có ai bị đổ lỗi? Có nhánh nào bị quên?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then the root gets one action, one owner, one deadline.",
          "sub": "Rồi đặt cho gốc một hành động, một người phụ trách, một hạn chót.",
          "keys": [
            "một người phụ trách"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "The oil schedule goes to one person, posted by the machine, with the checker's name.",
          "sub": "Lịch tra dầu giao cho một người, dán cạnh máy, ghi tên người kiểm.",
          "face": "happy"
        }
      ],
      "ref": "p22,p23"
    },
    {
      "id": "s15b",
      "module": "BRK-05",
      "data": {
        "title": "Đến đây, đừng dừng ở",
        "points": [
          "Một cái tên, chữ “chắc là”",
          "Nhánh đầu tiên"
        ],
        "illus": "stop-sign"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Don't stop at a name, or a probably.",
          "sub": "Đừng dừng ở một cái tên, hay chữ “chắc là”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Or at the first branch.",
          "sub": "Hay ở nhánh đầu tiên.",
          "keys": [
            "nhánh đầu tiên"
          ]
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s16",
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
            "text": "⑦ T6 16:00 · Báo Cô Hoa",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:seventh stop"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1210,
            "w": 720,
            "data": {
              "set": "office",
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
              "props": [
                "memo"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Cô Hoa",
            "caption": "Thứ Sáu 16:00 · phòng Cô Hoa",
            "icon": "memo"
          },
          {
            "id": "i-o",
            "t": "text",
            "text": "Sự cố → các tầng → gốc → việc",
            "x": 5964,
            "y": 1250,
            "size": 42,
            "at": "l1:problem",
            "color": "accent",
            "hl": [
              {
                "text": "gốc",
                "at": "l1:root"
              }
            ]
          },
          {
            "id": "i-cx",
            "t": "text",
            "text": "Nhiều nguyên nhân đan xen?",
            "x": 5964,
            "y": 1510,
            "size": 44,
            "at": "l5:tangled",
            "color": "coral"
          },
          {
            "id": "i-data",
            "t": "text",
            "text": "→ thêm số liệu, hỏi chuyên môn",
            "x": 5994,
            "y": 1580,
            "size": 40,
            "at": "l5:data",
            "hl": [
              {
                "text": "hỏi chuyên môn",
                "at": "l5:experts"
              }
            ]
          },
          {
            "id": "i-one",
            "t": "text",
            "text": "Đừng ép vào một chuỗi",
            "x": 5964,
            "y": 1660,
            "size": 44,
            "at": "l6:squeeze",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: four p.m. Dũng reports to Cô Hoa in chain order: problem, whys, root, action.",
          "sub": "Chặng bảy: bốn giờ chiều. Dũng báo Cô Hoa theo chuỗi: sự cố, các tầng, gốc, hành động.",
          "keys": [
            "theo chuỗi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The machine stopped because the bearing ran dry. The root: nobody was given the maintenance schedule.",
          "sub": "Máy dừng vì ổ trục khô dầu, gốc là lịch bảo dưỡng chưa giao lại cho ai.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I suggest the morning shift leader takes the oil schedule, posted by the machine. We check again in a month.",
          "sub": "Em đề xuất giao lịch tra dầu cho anh tổ trưởng ca sáng, dán cạnh máy, và kiểm lại sau một tháng ạ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Clear. Go ahead.",
          "sub": "Rõ rồi. Làm đi em.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Many causes tangled together? Five whys may not be enough. Get more data, ask experts.",
          "sub": "Nhiều nguyên nhân đan xen? 5 Why có thể chưa đủ. Thu thêm số liệu, hỏi người có chuyên môn."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Don't squeeze everything into one chain.",
          "sub": "Đừng cố ép mọi thứ vào một chuỗi."
        }
      ],
      "ref": "p25,p26"
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
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "⑧ Một tháng sau · Nhìn lại",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:seven"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1210,
            "w": 720,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "gear",
                "spiral-calendar"
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
                },
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": "l1:Monday",
            "caption": "Một tháng sau · thứ Hai 7:30",
            "icon": "spiral-calendar"
          },
          {
            "id": "j-rv",
            "t": "text",
            "text": "Hẹn ngày nhìn lại: còn lặp?",
            "x": 7932,
            "y": 1250,
            "size": 44,
            "at": "l3:review",
            "hl": [
              {
                "text": "còn lặp",
                "at": "l3:repeating"
              }
            ]
          },
          {
            "id": "j-no",
            "t": "text",
            "text": "Còn → gốc chưa đúng / nhánh khác",
            "x": 7932,
            "y": 1330,
            "size": 40,
            "at": "l3:wrong root",
            "color": "coral"
          },
          {
            "id": "j-ag",
            "t": "text",
            "text": "→ quay lại hỏi tiếp",
            "x": 7962,
            "y": 1400,
            "size": 44,
            "at": "l3:ask again",
            "color": "accent"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Nhổ cỏ nhổ tận gốc”",
            "x": 7932,
            "y": 1510,
            "size": 52,
            "at": "l5:weeds",
            "color": "accent",
            "hl": [
              {
                "text": "tận gốc",
                "at": "l5:root"
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
          "say": "One month later. Monday, seven thirty. Same machine, same shift.",
          "sub": "Một tháng sau. Thứ Hai, bảy rưỡi. Vẫn cái máy ấy, ca ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Review day. Has it come back? Let's read the log first.",
          "sub": "Hôm nay nhìn lại. Sự cố còn quay lại không? Xem sổ ghi trước đã.",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That's the last step: a review date. Still repeating? Wrong root, or another branch. Ask again.",
          "sub": "Đó là bước cuối: hẹn ngày nhìn lại. Còn lặp? Gốc chưa đúng hoặc còn nhánh khác. Hỏi tiếp.",
          "keys": [
            "hẹn ngày nhìn lại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "And my phone? Still sleeping outside the bedroom.",
          "sub": "Còn điện thoại? Vẫn ngủ ngoài phòng ngủ.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Pull weeds out by the root, then check the garden a month later.",
          "sub": "“Nhổ cỏ phải nhổ tận gốc”, rồi một tháng sau ra vườn xem lại.",
          "keys": [
            "nhổ tận gốc"
          ]
        }
      ],
      "ref": "p24"
    },
    {
      "id": "s18",
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
            "at": "l1:fuse",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l1:name",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2:branch",
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
            "x": 7404,
            "y": 440,
            "at": "l1:fuse"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8672,
            "y": 400,
            "at": "l1:name"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2768,
            "y": 1770,
            "at": "l2:branch"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Asking why is easy. The hard part: don't stop at the fuse, or at a name.",
          "sub": "Hỏi tại sao không khó. Khó là đừng dừng ở cầu chì, hay ở một cái tên.",
          "keys": [
            "đừng dừng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Or at a probably, or at the first branch.",
          "sub": "Hay ở chữ “chắc là”, hay ở nhánh đầu tiên."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Firefight when needed, then keep asking. Next up: more ways to fix, not just one.",
          "sub": "Chữa cháy khi cần, rồi hỏi tiếp. Bài sau: nghĩ ra nhiều cách xử lý, thay vì một.",
          "keys": [
            "hỏi tiếp"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s35",
      "module": "QUIZ-01",
      "ref": "questions[23]",
      "data": {
        "q": "In the label printer story, why did buying more expensive paper not help?",
        "options": [
          "The expensive paper was still too cheap, and an even better paper was needed",
          "Labels are always a little crooked, so nothing could have fixed the problem",
          "The real cause was a loose paper guide, found only when someone checked the machine"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "printer",
        "why": "Câu “chắc là do giấy rẻ” chưa ai kiểm. Ra xem tận nơi mới thấy thanh dẫn giấy bị lỏng."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In the label printer story, why did buying more expensive paper not help?",
          "sub": "Trong chuyện máy in nhãn, vì sao mua giấy đắt hơn không giúp gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The real cause was a loose paper guide, found only when someone checked the machine.",
          "sub": "Gốc là thanh dẫn giấy bị lỏng, chỉ thấy khi có người ra xem tận nơi."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s36",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: một chuỗi tại sao trên giấy",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, pick one small repeating problem, and write its whys, one fact each. Then, forty questions!",
          "sub": "Hôm nay, chọn một sự cố nhỏ hay lặp, viết chuỗi tại sao, mỗi tầng một dữ kiện. Rồi làm bốn mươi câu nhé!"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s17"
  }
};
