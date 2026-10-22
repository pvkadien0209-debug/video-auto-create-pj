// Kịch bản video W lần 3 (#110) — "Góp ý cho đồng nghiệp mà không làm mất lòng" · chuỗi "Giao tiếp nơi công sở"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-give-feedback-to-a-colleague--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "office-communicators",
    "slug": "how-to-give-feedback-to-a-colleague",
    "door": "ky-nang",
    "level": "B1",
    "title": "Góp ý cho đồng nghiệp mà không làm mất lòng",
    "series": "Giao tiếp nơi công sở"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô đi theo MỘT TUẦN Thảo tập góp ý (Thứ Hai 22:00 ở lại sửa số liệu trễ của Dũng → Thứ Ba 9:00 → 14:00 → Thứ Tư 10:00 “Khoan đã!” → 10:05 → Thứ Năm 15:00 → Thứ Sáu 9:00 → Thứ Hai tuần sau 18:00 về đúng giờ, khép vòng). Nhân vật: Thảo (Kha p17, Bích p10, Giao p25, người góp ý p13/p19/p28), Dũng (Nhàn p17, người được góp ý, Đông p25), Bác Bình (anh Cường hơn mười tuổi p10, người lớn tuổi p27), Sam (p28). Cô Hoa (trưởng nhóm p25) chỉ được nhắc tên. Chuyện Tiến – chị Loan (p7) kể không tên ở BRK-08. Ngắt nhịp: BRK-08 ba tháng im lặng (p7), BRK-04 kẹp hai lời khen (p17–p18), BRK-01 báo thẳng sếp (p25). Tục ngữ mở/khép: “Sự thật mất lòng” → “chẳng cần mất lòng”. Bản cũ: w145/bak/how-to-give-feedback-to-a-colleague--w01.js.",
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
            "text": "22:00",
            "x": 60,
            "y": 100,
            "size": 170,
            "at": "l1:ten",
            "color": "accent",
            "hl": [
              {
                "text": "22:00",
                "at": "l1:ten p.m."
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "sửa số liệu trễ của người khác",
            "x": 70,
            "y": 330,
            "size": 50,
            "at": "l1:fixing"
          },
          {
            "id": "a-gold",
            "t": "text",
            "text": "Ta tưởng: im lặng là vàng?",
            "x": 70,
            "y": 440,
            "size": 54,
            "at": "l2:silence",
            "color": "muted"
          },
          {
            "id": "a-goldx",
            "t": "strike",
            "over": "a-gold",
            "at": "l2:overtime"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Ten p.m. Still at the office, fixing someone else's late numbers.",
          "sub": "Mười giờ đêm. Vẫn ngồi văn phòng, sửa số liệu trễ của người khác.",
          "keys": [
            "số liệu trễ của người khác"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "They say silence is golden. Here, silence is unpaid overtime.",
          "sub": "Người ta bảo im lặng là vàng. Ở đây, im lặng là giờ làm thêm không lương.",
          "keys": [
            "giờ làm thêm không lương"
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "face": "sad",
                  "pose": "think"
                }
              ],
              "props": [
                "crescent-moon",
                "bar-chart"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · 22:00",
            "icon": "crescent-moon"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Sự thật mất lòng”",
            "x": 60,
            "y": 560,
            "size": 64,
            "at": "l4:truth",
            "color": "accent",
            "hl": [
              {
                "text": "mất lòng",
                "at": "l4:hurts"
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
          "say": "Neat, organised, the office spreadsheet queen. Her desk neighbour Dũng sent his numbers late. Again.",
          "sub": "Ngăn nắp, nữ hoàng bảng tính. Dũng bàn bên lại gửi số liệu trễ. Lần nữa.",
          "keys": [
            "Lần nữa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "If I say something, he'll think I'm acting like the boss. We're equals.",
          "sub": "Nói ra, Dũng lại nghĩ mình ra vẻ sếp. Hai đứa ngang hàng mà.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the old saying warns: the truth hurts. So Thảo stays quiet, and stays late.",
          "sub": "Ông bà lại dặn: “Sự thật mất lòng.” Thế là Thảo im lặng, và ở lại muộn.",
          "keys": [
            "Sự thật mất lòng"
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
      "ref": "intro,p3"
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
            "text": "Góp ý mà không mất lòng?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:feedback",
            "hl": [
              {
                "text": "không mất lòng",
                "at": "l1:without"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: nói khéo cho qua",
            "x": 2028,
            "y": 170,
            "size": 44,
            "at": "l2:so softly",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:clear"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: rõ việc, trọn người",
            "x": 2028,
            "y": 260,
            "size": 58,
            "at": "l2:clear",
            "color": "accent",
            "hl": [
              {
                "text": "rõ việc, trọn người",
                "at": "l2:keeping"
              }
            ]
          },
          {
            "id": "b-h0",
            "t": "text",
            "text": "① Chọn đúng chuyện đáng nói",
            "x": 2888,
            "y": 160,
            "size": 48,
            "at": "l3:pick"
          },
          {
            "id": "b-h1",
            "t": "text",
            "text": "② Nói riêng, nói sớm",
            "x": 2888,
            "y": 240,
            "size": 48,
            "at": "l3:privately"
          },
          {
            "id": "b-h2",
            "t": "text",
            "text": "③ Kể việc + ảnh hưởng",
            "x": 2888,
            "y": 320,
            "size": 48,
            "at": "l4:action"
          },
          {
            "id": "b-h3",
            "t": "text",
            "text": "④ Hỏi ý, chốt cách làm",
            "x": 2888,
            "y": 400,
            "size": 48,
            "at": "l4:ask"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "1 tuần của Thảo · 7 chặng",
            "x": 2028,
            "y": 560,
            "size": 52,
            "at": "l5:week",
            "hl": [
              {
                "text": "7 chặng",
                "at": "l5:seven"
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
          "say": "So how do you give a colleague feedback without hurting the relationship?",
          "sub": "Vậy góp ý cho đồng nghiệp thế nào để không mất lòng?",
          "keys": [
            "không mất lòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not by saying it so softly nobody notices. By being clear on the task, and keeping the person.",
          "sub": "Không phải nói khéo đến mức chẳng ai nhận ra. Mà là nói rõ việc, giữ trọn người.",
          "keys": [
            "nói rõ việc, giữ trọn người"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pick what really matters. Say it privately and early.",
          "sub": "Chọn đúng chuyện đáng nói. Nói riêng, nói sớm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Describe the action and its impact. Then ask, and agree on next steps.",
          "sub": "Kể việc cụ thể và ảnh hưởng. Rồi hỏi ý, cùng chốt cách làm.",
          "keys": [
            "chốt cách làm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One week with Thảo, seven stops.",
          "sub": "Một tuần cùng Thảo, bảy chặng."
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
            "text": "① Thứ Hai 22:00 · Có đáng nói?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:stop one"
          },
          {
            "id": "c-q1",
            "t": "text",
            "text": "Ảnh hưởng thật: việc, khách, nhóm?",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l2:affect",
            "hl": [
              {
                "text": "Ảnh hưởng thật",
                "at": "l2:really"
              }
            ]
          },
          {
            "id": "c-q2",
            "t": "text",
            "text": "Mình có nên là người nói?",
            "x": 3996,
            "y": 250,
            "size": 46,
            "at": "l2:right person"
          },
          {
            "id": "c-q3",
            "t": "text",
            "text": "Có ví dụ cụ thể chưa?",
            "x": 3996,
            "y": 330,
            "size": 46,
            "at": "l2:example"
          },
          {
            "id": "c-hab",
            "t": "text",
            "text": "Khác thói quen: tên tệp, gọi điện",
            "x": 4816,
            "y": 170,
            "size": 42,
            "at": "l3:file names",
            "color": "muted"
          },
          {
            "id": "c-mis",
            "t": "text",
            "text": "Đáng nói: số sai, lỡ hạn",
            "x": 4816,
            "y": 250,
            "size": 42,
            "at": "l4:wrong numbers",
            "color": "coral",
            "hl": [
              {
                "text": "Đáng nói",
                "at": "l4:worth"
              }
            ]
          },
          {
            "id": "c-dung",
            "t": "text",
            "text": "Số liệu trễ → Thảo làm thay",
            "x": 4816,
            "y": 330,
            "size": 44,
            "at": "l4:cover",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: still Monday night. First, is it even worth saying?",
          "sub": "Chặng một: vẫn tối thứ Hai. Trước hết, chuyện này có đáng nói không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three questions. Does it really affect the work, the client, the team? Am I the right person? Do I have an example?",
          "sub": "Ba câu hỏi. Có ảnh hưởng thật đến việc, khách, cả nhóm? Mình có phải người nên nói? Đã có ví dụ chưa?",
          "keys": [
            "Ba câu hỏi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Different file names, or calls instead of texts? That's a habit, not a mistake.",
          "sub": "Đặt tên tệp khác, thích gọi điện hơn nhắn tin? Đó là khác thói quen, không phải lỗi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Wrong numbers to a client, missed deadlines others must cover? Worth saying. Thảo's case qualifies.",
          "sub": "Số gửi khách sai, lỡ hạn để người khác làm thay? Đáng nói. Chuyện của Thảo đủ điều kiện.",
          "keys": [
            "Đáng nói"
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
            "id": "c-peer",
            "t": "text",
            "text": "Ngang cấp? Vẫn nói, đừng ra lệnh",
            "x": 3996,
            "y": 440,
            "size": 48,
            "at": "l1:equals",
            "color": "accent",
            "hl": [
              {
                "text": "đừng ra lệnh",
                "at": "l1:orders"
              }
            ]
          },
          {
            "id": "c-we",
            "t": "text",
            "text": "“Mình làm sao để lần sau…?”",
            "x": 3996,
            "y": 520,
            "size": 46,
            "at": "l2:next time"
          },
          {
            "id": "c-sil",
            "t": "text",
            "text": "Im lặng → âm thầm sửa, bực",
            "x": 3996,
            "y": 610,
            "size": 46,
            "at": "l3:quietly",
            "color": "coral",
            "hl": [
              {
                "text": "Im lặng",
                "at": "l3:price"
              }
            ]
          },
          {
            "id": "c-gap",
            "t": "text",
            "text": "chuyện nhỏ → khoảng cách lớn",
            "x": 4816,
            "y": 685,
            "size": 46,
            "at": "l4:gap",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "But we're equals! Yes, so don't sound like you're giving orders. Make it a shared problem.",
          "sub": "Nhưng ngang hàng mà! Đúng, nên đừng nói như ra lệnh. Đặt vấn đề như việc chung.",
          "keys": [
            "đừng nói như ra lệnh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Like: how can we make sure this doesn't happen next time?",
          "sub": "Kiểu: “Mình làm sao để lần sau không bị vậy nữa nhỉ?”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Silence has a price. You quietly fix, quietly get annoyed, and they never know.",
          "sub": "Im lặng cũng có giá: âm thầm sửa, âm thầm bực, người kia chẳng hề biết.",
          "keys": [
            "Im lặng cũng có giá"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Over time, a small thing becomes a big gap.",
          "sub": "Lâu dần, chuyện nhỏ thành khoảng cách lớn."
        }
      ],
      "ref": "p3,p4"
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
            "text": "② Thứ Ba 9:00 · Riêng và sớm",
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "speech-balloon",
                "busts-in-silhouette"
              ]
            },
            "at": "l1:tuesday",
            "caption": "Thứ Ba · 9:00 · nhóm chat của phòng",
            "icon": "speech-balloon"
          },
          {
            "id": "d-grp",
            "t": "text",
            "text": "Nhắc trong nhóm chat chung",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l2:group",
            "color": "muted"
          },
          {
            "id": "d-grpx",
            "t": "strike",
            "over": "d-grp",
            "at": "l3:embarrassed"
          },
          {
            "id": "d-pr",
            "t": "text",
            "text": "Nói riêng: chỉ hai người",
            "x": 5964,
            "y": 255,
            "size": 52,
            "at": "l3:privately",
            "color": "accent",
            "hl": [
              {
                "text": "chỉ hai người",
                "at": "l3:privately"
              }
            ]
          },
          {
            "id": "d-face",
            "t": "text",
            "text": "Trước đám đông → chỉ lo tự vệ",
            "x": 5964,
            "y": 340,
            "size": 46,
            "at": "l3:defends"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: Tuesday morning. Thảo opens the team chat.",
          "sub": "Chặng hai: sáng thứ Ba. Thảo mở nhóm chat của phòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Maybe a little reminder here, in the group?",
          "sub": "Hay nhắc khéo một câu trong nhóm chung nhỉ?",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No. Say it privately. Corrected in public, anyone feels embarrassed, and only defends themselves.",
          "sub": "Đừng. Nói riêng thôi. Bị góp ý trước đám đông, ai cũng mất mặt và chỉ lo tự vệ.",
          "keys": [
            "Nói riêng"
          ]
        }
      ],
      "ref": "p5"
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
          }
        ],
        "items": [
          {
            "id": "d-early",
            "t": "text",
            "text": "Nói sớm: trong 1–2 ngày",
            "x": 5964,
            "y": 430,
            "size": 52,
            "at": "l1:early",
            "color": "accent",
            "hl": [
              {
                "text": "1–2 ngày",
                "at": "l1:two"
              }
            ]
          },
          {
            "id": "d-no",
            "t": "text",
            "text": "Tránh: họ chạy hạn, mình nóng",
            "x": 5964,
            "y": 515,
            "size": 42,
            "at": "l2:deadline",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And say it early, within a day or two, while you both remember.",
          "sub": "Và nói sớm, trong một hai ngày, khi cả hai còn nhớ rõ.",
          "keys": [
            "nói sớm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not when they're racing a deadline. Not while you're still boiling.",
          "sub": "Tránh lúc người kia đang chạy hạn, hay lúc mình còn đang sôi máu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Why early? Here's a story from another office.",
          "sub": "Sao phải sớm? Nghe chuyện ở một văn phòng khác nhé."
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s07",
      "module": "BRK-08",
      "data": {
        "title": "Ba tháng im lặng",
        "points": [
          {
            "label": "Tháng thứ nhất",
            "sub": "Số liệu trễ nửa ngày",
            "illus": "hourglass-not-done"
          },
          {
            "label": "Tháng thứ hai",
            "sub": "Im lặng, thức khuya làm bù",
            "illus": "crescent-moon"
          },
          {
            "label": "Tháng thứ ba",
            "sub": "“Lúc nào chị cũng trễ!”",
            "illus": "anger-symbol"
          },
          {
            "label": "Từ hôm ấy",
            "sub": "Chỉ còn nói qua email",
            "illus": "e-mail"
          }
        ],
        "current": 3
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three months of silence. Then one outburst.",
          "sub": "Ba tháng im lặng. Rồi một câu buột miệng giữa họp."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Since then, they only talk by email.",
          "sub": "Từ đó, hai người chỉ còn nói qua email.",
          "keys": [
            "chỉ còn nói qua email"
          ]
        }
      ],
      "ref": "p7"
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
            "id": "d-key",
            "t": "text",
            "text": "Nói sớm khi còn nhẹ",
            "x": 5964,
            "y": 610,
            "size": 60,
            "at": "l1:light",
            "color": "accent",
            "hl": [
              {
                "text": "còn nhẹ",
                "at": "l1:light"
              }
            ]
          },
          {
            "id": "d-key2",
            "t": "text",
            "text": "đừng đợi đến lúc đã đầy",
            "x": 6784,
            "y": 685,
            "size": 48,
            "at": "l1:full",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Speak early, while it's still light. Don't wait until the cup is full.",
          "sub": "Nói sớm khi còn nhẹ, đừng đợi đến lúc đã đầy.",
          "keys": [
            "Nói sớm khi còn nhẹ"
          ]
        }
      ],
      "ref": "p8"
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
            "text": "③ Thứ Ba 14:00 · Giọng, không chữ",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
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
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l1:bác bình",
            "caption": "Thứ Ba · 14:00 · bàn Bác Bình",
            "icon": "page-facing-up"
          },
          {
            "id": "e-txt",
            "t": "text",
            "text": "Nhắn: “Báo cáo nhiều lỗi quá”",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:text",
            "color": "muted"
          },
          {
            "id": "e-txtx",
            "t": "strike",
            "over": "e-txt",
            "at": "l2:lecture"
          },
          {
            "id": "e-walk",
            "t": "text",
            "text": "Sang bàn, chỉ đúng 3 số lệch",
            "x": 7932,
            "y": 250,
            "size": 46,
            "at": "l3:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 số lệch",
                "at": "l3:three"
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
          "say": "Stop three: Tuesday afternoon. Meet Bác Bình, the senior accountant, calm as a temple bell.",
          "sub": "Chặng ba: chiều thứ Ba. Đây là Bác Bình, kế toán lâu năm, điềm tĩnh như chuông chùa.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "His proposal to a client has a few wrong numbers. A text saying lots of mistakes reads like a lecture.",
          "sub": "Đề xuất bác gửi khách lệch vài con số. Nhắn “nhiều lỗi quá” thì dễ đọc thành lời dạy dỗ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Bác, I have one point to ask your view on. These three numbers don't match the spreadsheet.",
          "sub": "Em có một điểm muốn hỏi ý bác: ba chỗ này chưa khớp bảng tính, bác xem giúp em với?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Ah, let me check them again.",
          "sub": "À, để bác xem lại.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Older colleague? Respectful words, a questioning tone. Talk about the shared work, not age.",
          "sub": "Với người lớn tuổi hơn: xưng hô tôn trọng, giọng hỏi ý. Bàn việc chung, không bàn tuổi tác.",
          "keys": [
            "giọng hỏi ý"
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
      "ref": "p10,p27"
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
            "id": "e-voice",
            "t": "text",
            "text": "Tế nhị: gặp hoặc gọi",
            "x": 7932,
            "y": 335,
            "size": 52,
            "at": "l1:delicate",
            "color": "accent",
            "hl": [
              {
                "text": "gặp hoặc gọi",
                "at": "l1:call"
              }
            ]
          },
          {
            "id": "e-sms",
            "t": "text",
            "text": "Tin nhắn: chỉ nhắc chuyện nhỏ",
            "x": 7932,
            "y": 420,
            "size": 46,
            "at": "l2:small reminders"
          },
          {
            "id": "e-key",
            "t": "text",
            "text": "Nói bằng giọng, đừng bằng chữ",
            "x": 7932,
            "y": 510,
            "size": 52,
            "at": "l3:voice",
            "color": "accent",
            "hl": [
              {
                "text": "bằng giọng",
                "at": "l3:voice"
              }
            ]
          },
          {
            "id": "e-open",
            "t": "text",
            "text": "“Chiều nay em có 10 phút không?”",
            "x": 7932,
            "y": 610,
            "size": 44,
            "at": "l4:ten minutes"
          },
          {
            "id": "e-op2",
            "t": "text",
            "text": "báo trước, không làm hoảng",
            "x": 8752,
            "y": 685,
            "size": 44,
            "at": "l5:scaring",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Delicate things? Talk in person, or call. Texts have no voice and no face, so normal words sound harsh.",
          "sub": "Chuyện tế nhị thì gặp hoặc gọi. Tin nhắn không có giọng, không có nét mặt, câu thường cũng thành gay gắt.",
          "keys": [
            "gặp hoặc gọi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Texts are fine for small reminders.",
          "sub": "Tin nhắn chỉ hợp với lời nhắc nhỏ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For delicate things, use your voice, not written words.",
          "sub": "Chuyện tế nhị, nói bằng giọng chứ đừng bằng chữ.",
          "keys": [
            "nói bằng giọng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Dũng, do you have ten minutes this afternoon? About yesterday's client meeting.",
          "sub": "Dũng ơi, chiều nay em có mười phút không? Chị muốn bàn chút về buổi gặp khách hôm qua.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That opener signals a talk, without scaring anyone.",
          "sub": "Câu mở lời này báo trước có chuyện, mà không làm ai hoảng."
        }
      ],
      "ref": "p9,p11,p12"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Tư · 10:00 · mười phút",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Gán nhãn “làm ẩu”",
          "why": "Người nghe khó cãi một sự việc, nhưng rất dễ cãi một lời nhận xét về tính cách.",
          "rule": "Tình huống, hành vi, ảnh hưởng"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Stop four: Wednesday, ten a.m. The ten minutes begin.",
          "sub": "Chặng bốn: mười giờ sáng thứ Tư. Mười phút bắt đầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Dũng, you're so careless with numbers.",
          "sub": "Dũng này, em làm ẩu quá.",
          "face": "stern",
          "pose": "point",
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
          "say": "That's a label. People argue with labels.",
          "sub": "Đó là gán nhãn. Mà nhãn thì người ta cãi ngay."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Three steps.",
          "sub": "Tua lại! Ba bước.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "In Tuesday's client report, three numbers didn't match the spreadsheet.",
          "sub": "Báo cáo gửi khách hôm thứ Ba có ba chỗ số liệu không khớp bảng tính.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "thao",
          "say": "The client called, and the team spent half a day explaining.",
          "sub": "Khách gọi hỏi lại, nhóm mất nửa buổi giải thích.",
          "phase": "redo",
          "face": "neutral"
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
      "id": "s12",
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
            "at": "l1",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Tư 10:00 · Ba bước",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:label"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "bar-chart"
              ]
            },
            "at": "l1:three steps",
            "caption": "Thứ Tư · 10:00",
            "icon": "bar-chart"
          },
          {
            "id": "f-b1",
            "t": "box",
            "x": 60,
            "y": 1260,
            "w": 250,
            "h": 80,
            "at": "l2:situation",
            "stroke": 4
          },
          {
            "id": "f-s1",
            "t": "text",
            "text": "Tình huống",
            "x": 80,
            "y": 1270,
            "size": 44,
            "at": "l2:situation+200"
          },
          {
            "id": "f-b2",
            "t": "box",
            "x": 330,
            "y": 1260,
            "w": 230,
            "h": 80,
            "at": "l2:behaviour",
            "stroke": 4
          },
          {
            "id": "f-s2",
            "t": "text",
            "text": "Hành vi",
            "x": 365,
            "y": 1270,
            "size": 44,
            "at": "l2:behaviour+200"
          },
          {
            "id": "f-b3",
            "t": "box",
            "x": 580,
            "y": 1260,
            "w": 270,
            "h": 80,
            "at": "l2:impact",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "f-s3",
            "t": "text",
            "text": "Ảnh hưởng",
            "x": 605,
            "y": 1270,
            "size": 44,
            "at": "l2:impact+200"
          },
          {
            "id": "f-lab",
            "t": "text",
            "text": "“Em làm ẩu quá”",
            "x": 60,
            "y": 1380,
            "size": 52,
            "at": "l3:careless",
            "color": "muted"
          },
          {
            "id": "f-labx",
            "t": "strike",
            "over": "f-lab",
            "at": "l3:facts"
          },
          {
            "id": "f-fact",
            "t": "text",
            "text": "Sự việc khó cãi, nhãn dễ cãi",
            "x": 60,
            "y": 1460,
            "size": 48,
            "at": "l3:facts",
            "color": "accent",
            "hl": [
              {
                "text": "Sự việc khó cãi",
                "at": "l3:hardly"
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
          "say": "Three steps, no label.",
          "sub": "Ba bước, không gán nhãn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The situation: when and where. The behaviour anyone could see. The impact on the work.",
          "sub": "Tình huống: khi nào, ở đâu. Hành vi: điều ai cũng thấy. Ảnh hưởng: tác động ra sao.",
          "keys": [
            "Tình huống",
            "Hành vi",
            "Ảnh hưởng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Careless is a label. People can hardly argue with facts, but easily with labels.",
          "sub": "“Ẩu” là nhãn dán. Sự việc thì khó cãi, còn nhận xét tính cách thì rất dễ bị cãi.",
          "keys": [
            "Sự việc thì khó cãi"
          ]
        }
      ],
      "ref": "p13,p14"
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
            "id": "f-i",
            "t": "text",
            "text": "“Em thấy…”, “Em lo là…”",
            "x": 60,
            "y": 1540,
            "size": 50,
            "at": "l1:i see",
            "color": "accent"
          },
          {
            "id": "f-al",
            "t": "text",
            "text": "lúc nào cũng · không bao giờ",
            "x": 60,
            "y": 1620,
            "size": 48,
            "at": "l2:always",
            "color": "muted"
          },
          {
            "id": "f-alx",
            "t": "strike",
            "over": "f-al",
            "at": "l2:rarely"
          },
          {
            "id": "f-12",
            "t": "text",
            "text": "Mỗi lần chỉ 1–2 điểm",
            "x": 60,
            "y": 1705,
            "size": 54,
            "at": "l3:one or two",
            "color": "accent",
            "hl": [
              {
                "text": "1–2 điểm",
                "at": "l3:one or two"
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
          "say": "Speak from your own view: I see, I worry that.",
          "sub": "Nói từ góc nhìn của mình: “Em thấy…”, “Em lo là…”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Avoid always and never. They're rarely true, and the listener only argues back.",
          "sub": "Tránh “lúc nào cũng”, “không bao giờ”: hiếm khi đúng, người nghe chỉ lo phản bác.",
          "keys": [
            "hiếm khi đúng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One or two points at a time. A list of ten feels like a secret file on them.",
          "sub": "Mỗi lần một hai điểm. Kể cả chục chuyện, người nghe tưởng bạn lập hồ sơ theo dõi họ.",
          "keys": [
            "một hai điểm"
          ]
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s14",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "Kẹp góp ý giữa hai lời khen cho dễ nghe",
        "right": "Khen thật lòng, góp ý thẳng, đừng gói chung",
        "wrongIllus": "sandwich",
        "rightIllus": "speech-balloon"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Hide it between two compliments?",
          "sub": "Kẹp giữa hai lời khen cho dễ nghe?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The point sinks. Praise honestly, say it straight.",
          "sub": "Ý chính bị chìm. Khen thật lòng, góp ý thẳng.",
          "keys": [
            "Khen thật lòng, góp ý thẳng"
          ]
        }
      ],
      "ref": "p17,p18"
    },
    {
      "id": "s15",
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          },
          {
            "at": "l5",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
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
            "text": "⑤ Thứ Tư 10:05 · Hỏi ý",
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
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "sad",
                  "pose": "shrug"
                }
              ],
              "props": [
                "handshake"
              ]
            },
            "at": "l1:stop five",
            "caption": "Thứ Tư · 10:05",
            "icon": "handshake"
          },
          {
            "id": "g-ask",
            "t": "text",
            "text": "“Em thấy sao? Hôm đó gấp à?”",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l2:urgent",
            "color": "accent"
          },
          {
            "id": "g-why",
            "t": "text",
            "text": "nhiều việc · thiếu dữ liệu · hiểu khác",
            "x": 2028,
            "y": 1340,
            "size": 40,
            "at": "l4:too much",
            "color": "muted"
          },
          {
            "id": "g-deal",
            "t": "text",
            "text": "Thoả thuận: thêm 1 người soát số",
            "x": 2028,
            "y": 1420,
            "size": 46,
            "at": "l5:check",
            "color": "accent",
            "hl": [
              {
                "text": "Thoả thuận",
                "at": "l6:agreement"
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
          "say": "Stop five: five minutes later. Thảo stops talking, and asks.",
          "sub": "Chặng năm: năm phút sau. Thảo dừng nói, và hỏi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "What do you think? Was something urgent that day?",
          "sub": "Em thấy sao? Hôm đó có gì gấp quá không?",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Honestly, I've had too much work lately.",
          "sub": "Thật ra dạo này em ôm nhiều việc quá.",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "You may learn something new: too much work, missing data, or a different understanding.",
          "sub": "Có khi bạn biết điều chưa biết: ôm quá nhiều việc, thiếu dữ liệu, hay hiểu yêu cầu khác."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Next time, let's ask one more person to check the numbers before sending.",
          "sub": "Lần sau mình nhờ thêm một người soát số trước khi gửi khách nhé.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A clear agreement turns a complaint into a plan.",
          "sub": "Có thoả thuận cụ thể, lời phàn nàn mới thành việc làm.",
          "keys": [
            "thoả thuận cụ thể"
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
          }
        ],
        "items": [
          {
            "id": "g-calm",
            "t": "text",
            "text": "Bình tĩnh, đừng tranh để thắng",
            "x": 2028,
            "y": 1510,
            "size": 48,
            "at": "l1:win",
            "hl": [
              {
                "text": "đừng tranh để thắng",
                "at": "l1:win"
              }
            ]
          },
          {
            "id": "g-feel",
            "t": "text",
            "text": "“Em hiểu, nghe không dễ chịu”",
            "x": 2028,
            "y": 1590,
            "size": 44,
            "at": "l2:nice"
          },
          {
            "id": "g-tmr",
            "t": "text",
            "text": "Căng? “Mai mình bàn tiếp nhé”",
            "x": 2028,
            "y": 1665,
            "size": 46,
            "at": "l3:tomorrow",
            "color": "accent"
          },
          {
            "id": "g-norm",
            "t": "text",
            "text": "Sau đó: cư xử bình thường",
            "x": 2848,
            "y": 1775,
            "size": 46,
            "at": "l4:normally"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "If they explain too long, go quiet or get upset, stay calm. Don't fight to win.",
          "sub": "Họ giải thích dài, im lặng hay khó chịu? Giữ bình tĩnh, đừng tranh để thắng.",
          "keys": [
            "đừng tranh để thắng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The goal is better work, not proving you're right. Say: I know this isn't nice to hear.",
          "sub": "Mục tiêu là việc chung tốt hơn, không phải mình đúng. Ghi nhận: “Em hiểu nghe chuyện này không dễ chịu.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Too tense? Let's continue tomorrow.",
          "sub": "Căng quá thì: “Mình để mai bàn tiếp nhé.”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Afterwards, act normally.",
          "sub": "Sau buổi nói chuyện, cư xử bình thường."
        }
      ],
      "ref": "p21,p22"
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
            "text": "⑥ Thứ Năm 15:00 · Tiếng Anh",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "laptop"
              ]
            },
            "at": "l1:sam",
            "caption": "Thứ Năm · 15:00 · gọi video",
            "icon": "laptop"
          },
          {
            "id": "h-e1",
            "t": "text",
            "text": "Do you have a few minutes to talk?",
            "x": 3996,
            "y": 1265,
            "size": 36,
            "at": "l2:few minutes",
            "color": "accent",
            "font": "base"
          },
          {
            "id": "h-e2",
            "t": "text",
            "text": "I noticed that the numbers did not match.",
            "x": 3996,
            "y": 1340,
            "size": 34,
            "at": "l3:noticed",
            "color": "accent",
            "font": "base",
            "hl": [
              {
                "text": "I noticed",
                "at": "l3:noticed"
              }
            ]
          },
          {
            "id": "h-e3",
            "t": "text",
            "text": "What can we do differently next time?",
            "x": 3996,
            "y": 1415,
            "size": 34,
            "at": "l4:differently",
            "color": "accent",
            "font": "base"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: Thursday afternoon. And this is Sam, a partner abroad. Same three steps, in English.",
          "sub": "Chặng sáu: chiều thứ Năm. Còn đây là Sam, đối tác nước ngoài. Vẫn ba bước, bằng tiếng Anh.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Do you have a few minutes to talk?",
          "sub": "Anh có vài phút nói chuyện không?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I noticed that the numbers did not match.",
          "sub": "Em thấy các con số không khớp nhau."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "What can we do differently next time?",
          "sub": "Lần sau mình làm khác đi thế nào?",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "Good point. Let's check them together.",
          "sub": "Ý hay. Mình cùng kiểm tra nhé.",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1200
        }
      ],
      "ref": "p28"
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
            "text": "⑦ Thứ Sáu 9:00 · Vẫn vậy?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
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
                  "id": "dung",
                  "side": "right",
                  "face": "worried"
                }
              ],
              "props": [
                "clipboard"
              ]
            },
            "at": "l1:friday",
            "caption": "Thứ Sáu · 9:00",
            "icon": "clipboard"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Vẫn còn 2 chỗ lệch",
            "x": 5964,
            "y": 1260,
            "size": 52,
            "at": "l1:two",
            "color": "coral",
            "hl": [
              {
                "text": "2 chỗ lệch",
                "at": "l1:two"
              }
            ]
          },
          {
            "id": "i-re",
            "t": "text",
            "text": "Nhắc lại: ví dụ mới + hẹn cũ",
            "x": 5964,
            "y": 1345,
            "size": 48,
            "at": "l3:new example",
            "color": "accent",
            "hl": [
              {
                "text": "hẹn cũ",
                "at": "l3:old agreement"
              }
            ]
          },
          {
            "id": "i-tm",
            "t": "text",
            "text": "Đổi thói quen cần thời gian",
            "x": 5964,
            "y": 1430,
            "size": 46,
            "at": "l3:time"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven: Friday morning. Two numbers are still off.",
          "sub": "Chặng bảy: sáng thứ Sáu. Vẫn còn hai chỗ lệch."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Last week we agreed to check numbers before sending. Today two are still off.",
          "sub": "Tuần trước mình đã hẹn soát số trước khi gửi, hôm nay vẫn có hai chỗ lệch.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A new example, plus the old agreement. Habits can take time to change.",
          "sub": "Ví dụ mới, kèm thoả thuận cũ. Đổi thói quen có khi cần thêm thời gian."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Meanwhile Dũng has his own problem. Thảo keeps forgetting the order tracker.",
          "sub": "Trong khi đó Dũng cũng có chuyện: Thảo hay quên cập nhật bảng theo dõi đơn hàng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "I'll just tell Cô Hoa. Easier.",
          "sub": "Thôi mách cô Hoa cho nhanh.",
          "face": "worried"
        }
      ],
      "ref": "p23,p25"
    },
    {
      "id": "s19",
      "module": "BRK-01",
      "data": {
        "illus": "office-worker",
        "around": [
          "clipboard",
          "speech-balloon"
        ],
        "label": "Báo thẳng sếp?",
        "note": "Người kia đoán ra ai nói, phối hợp chậm hẳn",
        "tone": "bad"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Freeze! Straight to the boss?",
          "sub": "Dừng hình! Báo thẳng sếp?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "She'll guess who said it. Teamwork slows right down.",
          "sub": "Người kia đoán ra ai nói, phối hợp sau đó chậm hẳn.",
          "keys": [
            "chậm hẳn"
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
            "fit": "I",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "i-big",
            "t": "text",
            "text": "Vẫn ảnh hưởng lớn → trưởng nhóm",
            "x": 5964,
            "y": 1520,
            "size": 46,
            "at": "l1:still"
          },
          {
            "id": "i-tell",
            "t": "text",
            "text": "nhưng báo trước người trong cuộc",
            "x": 5964,
            "y": 1595,
            "size": 46,
            "at": "l1:first",
            "color": "accent"
          },
          {
            "id": "i-key",
            "t": "text",
            "text": "Người trong cuộc trước, sếp sau",
            "x": 5964,
            "y": 1690,
            "size": 54,
            "at": "l3:person first",
            "color": "accent",
            "hl": [
              {
                "text": "sếp sau",
                "at": "l3:boss later"
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
          "say": "Still a big problem? Talk to the leader, but tell your colleague first that you will.",
          "sub": "Vẫn ảnh hưởng lớn? Trao đổi với trưởng nhóm, nhưng báo trước với đồng nghiệp là mình sẽ làm vậy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Thảo, about the tracker. If it keeps happening, I'll raise it with Cô Hoa. Okay?",
          "sub": "Thảo này, chuyện bảng theo dõi. Nếu vẫn vậy, em sẽ trao đổi với cô Hoa nhé?",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Going over someone's head breaks trust, even when you're right. Person first, boss later.",
          "sub": "Báo thẳng lên trên mà người kia không biết thì mất lòng tin, dù mình có lý. Người trong cuộc trước, sếp sau.",
          "keys": [
            "Người trong cuộc trước, sếp sau"
          ]
        }
      ],
      "ref": "p24,p26"
    },
    {
      "id": "s21",
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
            "text": "Thứ Hai tuần sau · 18:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:monday"
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
                  "id": "thao",
                  "side": "left",
                  "face": "happy",
                  "pose": "thumb"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "sunset"
              ]
            },
            "at": "l1:monday",
            "caption": "Thứ Hai · 18:00 · tuần sau",
            "icon": "sunset"
          },
          {
            "id": "j-on",
            "t": "text",
            "text": "Số liệu đến đúng giờ ✓",
            "x": 7932,
            "y": 1260,
            "size": 52,
            "at": "l1:on time",
            "color": "accent"
          },
          {
            "id": "j-thx",
            "t": "text",
            "text": "Thấy thay đổi → ghi nhận ngay",
            "x": 7932,
            "y": 1345,
            "size": 48,
            "at": "l2:perfect",
            "hl": [
              {
                "text": "ghi nhận ngay",
                "at": "l3:thanks"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Sự thật… không cần mất lòng",
            "x": 7932,
            "y": 1440,
            "size": 52,
            "at": "l4:truth",
            "color": "accent",
            "hl": [
              {
                "text": "không cần mất lòng",
                "at": "l4:doesn't"
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
          "say": "Monday again, six p.m. The numbers came on time.",
          "sub": "Lại thứ Hai, sáu giờ chiều. Số liệu đến đúng giờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "This week's numbers were perfect. Thanks, Dũng!",
          "sub": "Số liệu tuần này chuẩn quá. Cảm ơn em nhé!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Thanks for telling me early, chị.",
          "sub": "Cảm ơn chị đã nói sớm.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The old saying: the truth hurts. Said early, privately, with facts, it doesn't have to.",
          "sub": "Ông bà bảo “Sự thật mất lòng.” Nói sớm, nói riêng, nói bằng sự việc thì chẳng cần mất lòng.",
          "keys": [
            "chẳng cần mất lòng"
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
      "ref": "p22,outro"
    },
    {
      "id": "s22",
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
            "at": "l1:example",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:impact",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l2:end",
            "fit": "J",
            "ms": 900
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
            "y": 440,
            "at": "l1:example"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 790,
            "y": 1700,
            "at": "l2:impact"
          },
          {
            "id": "z-c0",
            "t": "box",
            "x": 7932,
            "y": 1560,
            "w": 44,
            "h": 44,
            "at": "l3:boxes",
            "stroke": 5
          },
          {
            "id": "z-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1544,
            "size": 56,
            "at": "l3:boxes+500",
            "color": "accent"
          },
          {
            "id": "z-l0",
            "t": "text",
            "text": "Ảnh hưởng thật · có ví dụ",
            "x": 8002,
            "y": 1552,
            "size": 40,
            "at": "l3:boxes+150"
          },
          {
            "id": "z-c1",
            "t": "box",
            "x": 7932,
            "y": 1635,
            "w": 44,
            "h": 44,
            "at": "l3:checklist",
            "stroke": 5
          },
          {
            "id": "z-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1619,
            "size": 56,
            "at": "l3:checklist+500",
            "color": "accent"
          },
          {
            "id": "z-l1",
            "t": "text",
            "text": "Riêng, sớm · tình huống → ảnh hưởng",
            "x": 8002,
            "y": 1627,
            "size": 40,
            "at": "l3:checklist+150"
          },
          {
            "id": "z-c2",
            "t": "box",
            "x": 7932,
            "y": 1710,
            "w": 44,
            "h": 44,
            "at": "l3:feedback",
            "stroke": 5
          },
          {
            "id": "z-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1694,
            "size": 56,
            "at": "l3:feedback+500",
            "color": "accent"
          },
          {
            "id": "z-l2",
            "t": "text",
            "text": "Hỏi ý · chốt thoả thuận",
            "x": 8002,
            "y": 1702,
            "size": 40,
            "at": "l3:feedback+150"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: a real impact, a specific example, said privately and early.",
          "sub": "Tóm lại: có ảnh hưởng thật, có ví dụ cụ thể, nói riêng và nói sớm.",
          "keys": [
            "nói riêng và nói sớm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Situation, behaviour, impact. Then ask, and agree on one thing.",
          "sub": "Tình huống, hành vi, ảnh hưởng. Rồi hỏi ý, chốt một thoả thuận.",
          "keys": [
            "chốt một thoả thuận"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Six boxes. Your checklist before any feedback.",
          "sub": "Sáu ô vuông: danh sách trước mỗi lần góp ý."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p29"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "ref": "questions[16]",
      "data": {
        "q": "Why is describing an action better than calling someone careless?",
        "options": [
          "Labels are better, because they help people remember the problem much longer",
          "People can hardly argue with facts, but they easily argue with labels",
          "There is no difference, since both make the colleague feel exactly the same"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "bar-chart",
        "why": "Sự việc thì khó cãi, nhận xét tính cách thì dễ bị phản bác."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why is describing an action better than calling someone careless?",
          "sub": "Vì sao mô tả hành động tốt hơn gọi ai đó là cẩu thả?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "People can hardly argue with facts, but they easily argue with labels.",
          "sub": "Sự việc thì khó cãi, còn nhãn dán thì rất dễ bị cãi."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Labels also hurt, so the listener only defends himself.",
          "sub": "Gán nhãn còn làm tổn thương, người nghe chỉ lo tự vệ."
        }
      ]
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: viết ba câu góp ý",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Think of one thing you've been shy to say. Write it as situation, action, impact, plus one question.",
          "sub": "Nghĩ một chuyện đang ngại nói, viết ba câu tình huống, hành vi, ảnh hưởng và một câu hỏi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
