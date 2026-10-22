// Kịch bản video W lần 3 (#110) — "Giao việc rõ ràng và theo dõi mà không soi mói" · chuỗi "Lần đầu làm trưởng nhóm"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "delegate-clearly-and-follow-up--w01",
  "hook": "HOOK-06",
  "unit": {
    "audience": "first-time-team-leaders",
    "slug": "delegate-clearly-and-follow-up",
    "door": "ky-nang",
    "level": "B1",
    "title": "Giao việc rõ ràng và theo dõi mà không soi mói",
    "series": "Lần đầu làm trưởng nhóm"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN GIAO VIỆC của Thảo sau lần nghỉ ốm ôm việc khách (mở: khách gọi, Dũng và Lan đứng hình) → thứ Hai chọn việc gì giao (BRK-02 “Một người ôm, cả nhóm treo”) → giao bản tổng hợp cho Dũng (“Khoan đã!” DLG, Trước/Sau p9) → năm ô, tóm lại, ghi nhóm chat → chọn người cho bản thiết kế (Lan) → thứ Ba xem nháp (BRK-04 Cách A/B) → thứ Năm tối chưa đạt, không lặng lẽ làm lại → thứ Sáu xong việc (BRK-11 3 việc sau khi xong) → chiều thứ Sáu khách lại gọi khi Thảo vắng, lần này nhóm trả lời được (khép vòng). Nhân vật (chuỗi w145/_series/first-time-team-leaders.md): Thảo (“bạn/anh” p9, p17, p21; Vy p3), Dũng (người nhận bản tổng hợp p9, p17), Lan (người làm bản thiết kế p21), cô Hoa chỉ được nhắc (“sếp”). Câu khép vòng: “Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao”. Bản cũ (W lần 3, #110): w145/bak/delegate-clearly-and-follow-up--w01.js.",
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
            "id": "a-n",
            "t": "text",
            "text": "Nghỉ ốm gần một tuần",
            "x": 60,
            "y": 150,
            "size": 84,
            "at": "l1:almost a week",
            "color": "accent",
            "hl": [
              {
                "text": "gần một tuần",
                "at": "l1:almost a week"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Tài liệu ở đâu? Đã hứa gì?",
            "x": 70,
            "y": 300,
            "size": 54,
            "at": "l2:where"
          },
          {
            "id": "a-x",
            "t": "text",
            "text": "“Mình nắm rõ nhất”",
            "x": 70,
            "y": 400,
            "size": 56,
            "at": "l3:knows it best",
            "color": "muted"
          },
          {
            "id": "a-xx",
            "t": "strike",
            "over": "a-x",
            "at": "l3:froze"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thảo was sick for almost a week. Then the client called.",
          "sub": "Thảo ốm, nghỉ gần một tuần. Đúng lúc ấy khách gọi.",
          "keys": [
            "gần một tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Where are the files? What did she promise? Nobody on the team knew.",
          "sub": "Tài liệu để đâu? Thảo đã hứa gì với khách? Cả nhóm không ai biết."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "She kept all client work because she knows it best. And the whole team froze.",
          "sub": "Cô ôm hết việc với khách vì “mình nắm rõ nhất”. Và cả nhóm đứng hình.",
          "keys": [
            "cả nhóm đứng hình"
          ]
        }
      ],
      "ref": "intro,p3"
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
            "y": 140,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone",
                  "face": "worried",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "worried",
                  "pose": "shrug"
                }
              ],
              "props": [
                "telephone-receiver"
              ]
            },
            "at": "l1",
            "caption": "Thứ Năm · khi Thảo nghỉ ốm",
            "icon": "telephone-receiver"
          },
          {
            "id": "a-k",
            "t": "text",
            "text": "Một người ôm, cả nhóm treo",
            "x": 60,
            "y": 520,
            "size": 58,
            "at": "l4:holds",
            "color": "coral",
            "hl": [
              {
                "text": "cả nhóm treo",
                "at": "l4:hangs"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Một cây làm chẳng nên non”",
            "x": 60,
            "y": 630,
            "size": 52,
            "at": "l5:One tree",
            "color": "accent",
            "hl": [
              {
                "text": "chẳng nên non",
                "at": "l5:mountain"
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
          "say": "Meet Dũng and Lan, Thảo's team, staring at a ringing phone.",
          "sub": "Đây là Dũng và Lan, nhóm của Thảo, đang nhìn chiếc điện thoại reo.",
          "keys": [
            "Dũng và Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Yes, the progress... let me check and call you back.",
          "sub": "Dạ, tiến độ ạ… để em kiểm tra rồi gọi lại sau ạ.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Don't look at me. Thảo has everything.",
          "sub": "Đừng nhìn em. Chị Thảo giữ hết mà.",
          "face": "worried",
          "pose": "shrug"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The client complained to the boss. One person holds it, the whole team hangs.",
          "sub": "Khách phàn nàn lên sếp. Một người ôm, cả nhóm treo.",
          "keys": [
            "Một người ôm, cả nhóm treo"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "As the folk song says: one tree alone can't make a mountain.",
          "sub": "Ca dao đã dạy: “Một cây làm chẳng nên non.”",
          "keys": [
            "Một cây làm chẳng nên non"
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
      "ref": "p3,p4"
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
            "text": "Giao việc mà không soi mói?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:delegate",
            "hl": [
              {
                "text": "không soi mói",
                "at": "l1:micromanaging"
              }
            ]
          },
          {
            "id": "b-n1",
            "t": "text",
            "text": "Giao xong rồi quên",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:forget",
            "color": "muted"
          },
          {
            "id": "b-n2",
            "t": "text",
            "text": "Đứng sau lưng từng giờ",
            "x": 2028,
            "y": 240,
            "size": 50,
            "at": "l2:every hour",
            "color": "muted"
          },
          {
            "id": "b-n1x",
            "t": "strike",
            "over": "b-n1",
            "at": "l3:middle"
          },
          {
            "id": "b-n2x",
            "t": "strike",
            "over": "b-n2",
            "at": "l3:middle+300"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Chọn việc · Nói rõ đích",
            "x": 2028,
            "y": 340,
            "size": 50,
            "at": "l3:right task",
            "hl": [
              {
                "text": "Nói rõ đích",
                "at": "l3:target"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Hẹn ngày xem · Không làm lại",
            "x": 2028,
            "y": 410,
            "size": 50,
            "at": "l4:check date",
            "hl": [
              {
                "text": "Không làm lại",
                "at": "l4:redo"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 250,
            "h": 90,
            "at": "l5:first week+400",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2303,
            "y": 610,
            "w": 250,
            "h": 90,
            "at": "l5:first week+650",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2578,
            "y": 610,
            "w": 250,
            "h": 90,
            "at": "l5:first week+900",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2853,
            "y": 610,
            "w": 250,
            "h": 90,
            "at": "l5:first week+1150",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3128,
            "y": 610,
            "w": 250,
            "h": 90,
            "at": "l5:first week+1400",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3403,
            "y": 610,
            "w": 250,
            "h": 90,
            "at": "l5:first week+1650",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Chọn việc",
            "x": 2043,
            "y": 630,
            "size": 38,
            "at": "l5:first week+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Giao",
            "x": 2318,
            "y": 630,
            "size": 38,
            "at": "l5:first week+770"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Chọn người",
            "x": 2593,
            "y": 630,
            "size": 38,
            "at": "l5:first week+1020"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Xem nháp",
            "x": 2868,
            "y": 630,
            "size": 38,
            "at": "l5:first week+1270"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Chưa đạt",
            "x": 3143,
            "y": 630,
            "size": 38,
            "at": "l5:first week+1520"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Xong việc",
            "x": 3418,
            "y": 630,
            "size": 38,
            "at": "l5:first week+1770"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you delegate clearly, and follow up without micromanaging?",
          "sub": "Vậy giao việc thế nào cho rõ, và theo dõi mà không soi mói?",
          "keys": [
            "không soi mói"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not hand it over and forget. Not stand behind them every hour.",
          "sub": "Không phải giao xong rồi quên. Cũng không phải đứng sau lưng từng giờ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "There's a middle way: pick the right task, say the target clearly,",
          "sub": "Có cách ở giữa: chọn đúng việc để giao, nói rõ kết quả cần có,",
          "keys": [
            "cách ở giữa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "set a check date, ask to unblock, not blame, and never redo in silence.",
          "sub": "hẹn sẵn ngày xem lại, hỏi để gỡ vướng chứ không bắt lỗi, và không lặng lẽ làm lại."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo's first week back, in six stops.",
          "sub": "Giờ theo Thảo qua tuần đầu đi làm lại, sáu chặng.",
          "keys": [
            "sáu chặng"
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
            "text": "① Thứ Hai · Giao việc gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 140,
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
                "clipboard",
                "laptop"
              ]
            },
            "at": "l1:Monday",
            "caption": "Thứ Hai · Thảo đi làm lại",
            "icon": "clipboard"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Lần đầu giao: chậm hơn tự làm",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l3:first time",
            "color": "muted"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Lần ba, lần bốn: họ làm được",
            "x": 3996,
            "y": 245,
            "size": 46,
            "at": "l3:third",
            "hl": [
              {
                "text": "họ làm được",
                "at": "l3:can do it"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "→ mình rảnh cho việc trưởng nhóm",
            "x": 4026,
            "y": 320,
            "size": 42,
            "at": "l4:only a leader",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Monday. Thảo is back, and has learned her lesson. Well, almost.",
          "sub": "Chặng một: thứ Hai. Thảo đi làm lại, đã thấm bài học. À, gần thấm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "But explaining takes longer than doing it myself!",
          "sub": "Nhưng giải thích còn lâu hơn tự làm!",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The first time, yes: explain, wait, give feedback. By the third or fourth time, they can do it.",
          "sub": "Lần đầu thì đúng: phải giải thích, phải chờ, phải góp ý. Nhưng đến lần thứ ba, thứ tư, người kia đã làm được.",
          "keys": [
            "người kia đã làm được"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And you get time for work only a leader can do.",
          "sub": "Còn bạn có thời gian cho những việc chỉ trưởng nhóm làm được.",
          "keys": [
            "chỉ trưởng nhóm làm được"
          ]
        }
      ],
      "ref": "p1"
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
            "id": "c-g",
            "t": "text",
            "text": "Giao: lặp lại, học được, giúp lớn",
            "x": 3996,
            "y": 430,
            "size": 42,
            "at": "l1:repeat",
            "hl": [
              {
                "text": "Giao",
                "at": "l1:Delegate"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Giữ: đánh giá, chuyện nhạy cảm",
            "x": 3996,
            "y": 500,
            "size": 42,
            "at": "l2:Keep",
            "color": "coral",
            "hl": [
              {
                "text": "Giữ",
                "at": "l2:Keep"
              }
            ]
          },
          {
            "id": "c-2p",
            "t": "text",
            "text": "Việc khách: ít nhất 2 người biết",
            "x": 3996,
            "y": 590,
            "size": 46,
            "at": "l3:two people",
            "color": "accent",
            "hl": [
              {
                "text": "ít nhất 2 người",
                "at": "l3:at least two"
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
          "say": "Delegate tasks that repeat, that others can learn, that help them grow.",
          "sub": "Nên giao việc lặp lại, việc người khác học được, việc giúp họ lớn lên.",
          "keys": [
            "giúp họ lớn lên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Keep what needs the leader: reviewing members, or someone's sensitive issue.",
          "sub": "Nên giữ việc cần đúng vai trưởng nhóm: đánh giá thành viên, chuyện nhạy cảm của một người.",
          "keys": [
            "đúng vai trưởng nhóm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And client work? At least two people should know where files are, and what was promised.",
          "sub": "Còn việc với khách? Ít nhất hai người cùng biết tài liệu ở đâu và đã hứa gì với khách.",
          "keys": [
            "Ít nhất hai người"
          ]
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s05",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Một người ôm, cả nhóm treo",
        "hl": "cả nhóm treo",
        "sub": "Việc quan trọng: ít nhất hai người cùng biết"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One person holds it all.",
          "sub": "Một người ôm hết việc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The whole team hangs.",
          "sub": "Cả nhóm treo.",
          "keys": [
            "Cả nhóm treo"
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
      "id": "s06",
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
            "text": "② Thứ Hai trưa · Giao cho rõ",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 140,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "Thứ Hai trưa · họp trực tuyến",
            "icon": "laptop"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Bản tổng hợp khách hàng",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l1:customer summary",
            "hl": [
              {
                "text": "tổng hợp khách hàng",
                "at": "l1:customer summary"
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
          "say": "Second stop: Monday noon. Thảo hands Dũng the customer summary.",
          "sub": "Chặng hai: trưa thứ Hai. Thảo giao cho Dũng bản tổng hợp khách hàng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Watch closely.",
          "sub": "Xem kỹ nhé."
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "ref": "p9,p10",
      "data": {
        "set": "online",
        "label": "Thứ Hai trưa · giao việc",
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
          "label": "Giao việc mà không nói cái đích",
          "why": "Người nhận phải đoán, nộp bảng rất dài, mất ba ngày công."
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Can you make the customer summary for me?",
          "sub": "Cậu làm giúp mình bản tổng hợp khách hàng nhé.",
          "pose": "explain",
          "stop": true
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Looks like what? For what? By when? Dũng guesses, and burns three days on a giant table.",
          "sub": "Trông thế nào? Để làm gì? Khi nào cần? Dũng phải đoán, rồi mất ba ngày công làm một bảng rất dài."
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
          "who": "thao",
          "say": "One page, three points: new customers, lost customers, and why.",
          "sub": "Một trang, ba ý: khách mới, khách bỏ đi và lý do.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "For the boss, Friday morning. Send it Thursday afternoon.",
          "sub": "Để mình trình sếp sáng thứ Sáu. Chiều thứ Năm gửi mình nhé.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Clear target, no wrong roads.",
          "sub": "Nói rõ cái đích, đỡ chạy sai đường.",
          "phase": "redo",
          "face": "happy",
          "keys": [
            "Nói rõ cái đích"
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
            "id": "d-5",
            "t": "text",
            "text": "Năm ô của một lời giao:",
            "x": 5964,
            "y": 250,
            "size": 48,
            "at": "l1:five boxes",
            "hl": [
              {
                "text": "Năm ô",
                "at": "l1:five boxes"
              }
            ]
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 330,
            "w": 44,
            "h": 44,
            "at": "l2:looks like",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 314,
            "size": 56,
            "at": "l2:looks like+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Kết quả trông thế nào",
            "x": 6029,
            "y": 320,
            "size": 40,
            "at": "l2:looks like+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 400,
            "w": 44,
            "h": 44,
            "at": "l2:deadline",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 384,
            "size": 56,
            "at": "l2:deadline+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Hạn chót",
            "x": 6029,
            "y": 390,
            "size": 40,
            "at": "l2:deadline+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 470,
            "w": 44,
            "h": 44,
            "at": "l2:why",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 454,
            "size": 56,
            "at": "l2:why+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Vì sao quan trọng",
            "x": 6029,
            "y": 460,
            "size": 40,
            "at": "l2:why+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 540,
            "w": 44,
            "h": 44,
            "at": "l3:help",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 524,
            "size": 56,
            "at": "l3:help+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Ai hỗ trợ, tài liệu đâu",
            "x": 6029,
            "y": 530,
            "size": 40,
            "at": "l3:help+200"
          },
          {
            "id": "d-c4",
            "t": "box",
            "x": 5964,
            "y": 610,
            "w": 44,
            "h": 44,
            "at": "l3:midway",
            "stroke": 5
          },
          {
            "id": "d-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 594,
            "size": 56,
            "at": "l3:midway+600",
            "color": "accent"
          },
          {
            "id": "d-l4",
            "t": "text",
            "text": "Khi nào xem giữa chừng",
            "x": 6029,
            "y": 600,
            "size": 40,
            "at": "l3:midway+200"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Nói rõ cái đích, đỡ chạy sai đường",
            "x": 6784,
            "y": 700,
            "size": 40,
            "at": "l4:target",
            "font": "base",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thảo's fix covers five boxes.",
          "sub": "Bản sửa của Thảo đủ năm ô.",
          "keys": [
            "năm ô"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What the result looks like. The deadline. And why it matters.",
          "sub": "Kết quả trông thế nào. Hạn chót. Vì sao việc này quan trọng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Who can help, where the files are, and when you check midway. Miss one box, and they guess.",
          "sub": "Ai hỗ trợ, tài liệu ở đâu, khi nào xem lại giữa chừng. Thiếu một ô là thêm một chỗ để đoán.",
          "keys": [
            "thêm một chỗ để đoán"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Five boxes, one clear target.",
          "sub": "Năm ô, một cái đích rõ ràng.",
          "keys": [
            "cái đích rõ ràng"
          ]
        }
      ],
      "ref": "p5,p10"
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
            "text": "③ Cuối buổi giao · Tóm lại",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:At the end"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 140,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain"
                }
              ]
            },
            "at": "l1:At the end",
            "caption": "Cuối buổi giao",
            "icon": "speech-balloon"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "“Tóm lại giúp mình nhé”",
            "x": 7932,
            "y": 170,
            "size": 52,
            "at": "l1:sum it up",
            "color": "accent"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Thử lời giao, không thử trí nhớ",
            "x": 7932,
            "y": 250,
            "size": 42,
            "at": "l3:tests",
            "hl": [
              {
                "text": "lời giao",
                "at": "l3:your words"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Ghi vào nhóm chat: ai, gì, hạn",
            "x": 7932,
            "y": 340,
            "size": 44,
            "at": "l4:group chat",
            "hl": [
              {
                "text": "nhóm chat",
                "at": "l4:group chat"
              }
            ]
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Kinh nghiệm: nói đích, tự chọn cách",
            "x": 7932,
            "y": 450,
            "size": 42,
            "at": "l5:experienced"
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "Người mới: chỉ cách, cho bản mẫu",
            "x": 7932,
            "y": 520,
            "size": 42,
            "at": "l5:new",
            "hl": [
              {
                "text": "bản mẫu",
                "at": "l5:sample"
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
          "say": "At the end, Thảo adds one line: could you sum it up in your own words?",
          "sub": "Cuối buổi, Thảo thêm một câu: “Cậu tóm lại giúp mình xem mình nói đã rõ chưa nhé.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "One page, three points, Thursday afternoon, for Friday's meeting.",
          "sub": "Một trang, ba ý, chiều thứ Năm, để kịp họp sáng thứ Sáu.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That tests your words, not their memory.",
          "sub": "Câu đó kiểm tra lời giao của bạn, không phải trí nhớ của người kia.",
          "keys": [
            "kiểm tra lời giao"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then post it in the group chat: who, what, by when. Hallway talk fades; writing stays.",
          "sub": "Rồi ghi vào nhóm chat: ai làm, làm gì, hạn nào. Lời nói hành lang dễ quên, chữ viết thì cả hai cùng nhìn.",
          "keys": [
            "nhóm chat"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Experienced? Give the result, they choose how. New? Show steps and an old sample.",
          "sub": "Người có kinh nghiệm: nói kết quả, để họ tự chọn cách. Người mới: chỉ cụ thể hơn, cho xem bản mẫu cũ."
        }
      ],
      "ref": "p6,p7,p8"
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Hai chiều · Giao cho ai?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1230,
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
                  "id": "lan",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "spiral-calendar"
              ]
            },
            "at": "l1:client design",
            "caption": "Thứ Hai chiều · bàn Lan",
            "icon": "spiral-calendar"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Cân: khả năng + việc đang có",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l1:weighs",
            "hl": [
              {
                "text": "việc đang có",
                "at": "l1:workload"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Hỏi trước: “Nhận thêm có kịp?”",
            "x": 60,
            "y": 1335,
            "size": 46,
            "at": "l2:this week"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: the client design. Thảo weighs two things: skill, and current workload.",
          "sub": "Chặng bốn: bản thiết kế gửi khách. Thảo cân hai thứ: khả năng hiện tại và khối lượng việc đang có."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Lan, what's on your plate this week? Can you take this on in time?",
          "sub": "Lan ơi, tuần này em đang có những việc gì? Nhận thêm việc này có kịp không?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "I can, if someone helps with the colours. I want to learn design.",
          "sub": "Kịp ạ, nếu có người hỗ trợ phần màu. Em muốn học thêm thiết kế.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Someone who wants to grow? Give a task a bit above their level, with support.",
          "sub": "Người muốn phát triển? Giao việc cao hơn khả năng một chút, kèm hỗ trợ.",
          "keys": [
            "cao hơn khả năng một chút"
          ]
        }
      ],
      "ref": "p11,p12"
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
          }
        ],
        "items": [
          {
            "id": "f-3",
            "t": "text",
            "text": "Toàn việc dễ → người giỏi chán",
            "x": 60,
            "y": 1470,
            "size": 44,
            "at": "l1:easy",
            "color": "muted"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "Quá sức, bỏ mặc → mất tự tin",
            "x": 60,
            "y": 1540,
            "size": 42,
            "at": "l1:too hard",
            "color": "coral"
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "Đừng dồn việc khó cho một người",
            "x": 60,
            "y": 1630,
            "size": 46,
            "at": "l2:pile",
            "color": "accent",
            "hl": [
              {
                "text": "một người",
                "at": "l2:most trusted"
              }
            ]
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "→ quá tải trong im lặng",
            "x": 90,
            "y": 1700,
            "size": 42,
            "at": "l2:silently",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Only easy tasks? Strong people get bored. Too hard with no help? They lose confidence.",
          "sub": "Giao toàn việc dễ thì người giỏi chán. Giao việc quá sức mà không ai hỗ trợ thì mất tự tin.",
          "keys": [
            "người giỏi chán"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And don't pile every hard job on your most trusted person. They overload silently, and others never grow.",
          "sub": "Và đừng dồn hết việc khó cho người đáng tin nhất. Họ quá tải trong im lặng, người khác không có cơ hội lớn lên.",
          "keys": [
            "quá tải trong im lặng"
          ]
        }
      ],
      "ref": "p12,p13"
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
            "text": "⑤ Thứ Ba · Xem bản nháp",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "give"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l1:Tuesday",
            "caption": "Thứ Ba · điểm hẹn đã thống nhất",
            "icon": "page-facing-up"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Hẹn sẵn ngày xem lúc giao",
            "x": 2028,
            "y": 1260,
            "size": 48,
            "at": "l2:agreed",
            "hl": [
              {
                "text": "Hẹn sẵn",
                "at": "l2:agreed"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "“Sao chưa xong?”",
            "x": 2028,
            "y": 1360,
            "size": 52,
            "at": "l4:Why isn't",
            "color": "muted"
          },
          {
            "id": "g-2x",
            "t": "strike",
            "over": "g-2",
            "at": "l4:different"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "“Mình gỡ giúp được gì?”",
            "x": 2028,
            "y": 1440,
            "size": 52,
            "at": "l3:unblock",
            "color": "accent",
            "hl": [
              {
                "text": "gỡ giúp",
                "at": "l3:unblock"
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
          "say": "Fifth stop: Tuesday. Draft day, agreed right when the task was given.",
          "sub": "Chặng năm: thứ Ba. Ngày xem bản nháp, đã hẹn ngay lúc giao việc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "With a date agreed, no daily is it done yet. And Dũng knows when his work gets seen.",
          "sub": "Có hẹn rồi thì khỏi hỏi “xong chưa” mỗi ngày, còn Dũng biết lúc nào việc mình được xem.",
          "keys": [
            "khỏi hỏi “xong chưa” mỗi ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Looks good so far. Is there anything I can help unblock?",
          "sub": "Đang ổn đấy. Có chỗ nào mình gỡ giúp được không?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ask about blockers, not to catch mistakes. Why isn't it done, sounds very different.",
          "sub": "Hỏi về chỗ vướng, không hỏi để bắt lỗi. “Sao chưa xong?” nghe khác hẳn “Có chỗ nào mình gỡ giúp được không?”."
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Theo dõi bản báo cáo",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Sáng hỏi, chiều hỏi, sửa từng chữ",
        "right": "Hẹn hai lần xem nháp, giữa chừng để yên",
        "wrongIllus": "eyes",
        "rightIllus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Way A: check morning and night.",
          "sub": "Cách A: sáng hỏi, chiều hỏi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Way B: two check dates, then trust.",
          "sub": "Cách B: hẹn hai lần, giữa chừng thì tin.",
          "keys": [
            "hẹn hai lần"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p17"
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
          }
        ],
        "items": [
          {
            "id": "g-A",
            "t": "text",
            "text": "A: “Cậu làm luôn đi cho nhanh”",
            "x": 2028,
            "y": 1540,
            "size": 42,
            "at": "l1:just do it",
            "color": "coral"
          },
          {
            "id": "g-B",
            "t": "text",
            "text": "B: góp ý kịp, được tin",
            "x": 2028,
            "y": 1605,
            "size": 42,
            "at": "l2:trusted",
            "hl": [
              {
                "text": "được tin",
                "at": "l2:trusted"
              }
            ]
          },
          {
            "id": "g-m",
            "t": "text",
            "text": "Mới: hẹn sớm, dày · Cũ: tự báo",
            "x": 2028,
            "y": 1680,
            "size": 42,
            "at": "l3:new person"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Hẹn rõ ngày xem, khỏi hỏi từng giờ",
            "x": 2848,
            "y": 1790,
            "size": 40,
            "at": "l4:clear day",
            "font": "base",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Way A, editing his file mid-work, ends with: you should just do it yourself.",
          "sub": "Cách A, mở tệp sửa từng chữ khi người kia đang làm, kết thúc bằng câu: “Cậu cứ làm luôn đi cho nhanh.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Way B: Tuesday and Thursday drafts, quiet in between. You still give feedback, and he feels trusted.",
          "sub": "Cách B: xem nháp thứ Ba và thứ Năm, giữa hai lần để yên. Vẫn kịp góp ý, còn người làm thấy được tin.",
          "keys": [
            "được tin"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "New person or task? Check earlier, more often. Experienced? Let them report. Watching everyone the same is the problem.",
          "sub": "Người mới, việc mới: hẹn sớm và dày hơn. Người có kinh nghiệm: để họ tự báo. Theo sát mọi người như nhau mới là vấn đề."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Set a clear day to check, and you won't need to ask every hour.",
          "sub": "Hẹn rõ ngày xem, khỏi hỏi từng giờ.",
          "keys": [
            "Hẹn rõ ngày xem"
          ]
        }
      ],
      "ref": "p16,p17,p18"
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
            "text": "⑥ Thứ Năm tối · Chưa đạt",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth stop"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "face": "worried",
                  "pose": "think"
                }
              ],
              "props": [
                "laptop",
                "crescent-moon"
              ]
            },
            "at": "l1:Thursday",
            "caption": "Thứ Năm · 19:00, tối nay gửi khách",
            "icon": "crescent-moon"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Mình đã giao rõ chưa?",
            "x": 3996,
            "y": 1260,
            "size": 54,
            "at": "l3:delegate clearly",
            "color": "accent",
            "hl": [
              {
                "text": "giao rõ chưa",
                "at": "l3:delegate clearly"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Lặng lẽ sửa hết rồi gửi",
            "x": 3996,
            "y": 1360,
            "size": 48,
            "at": "l2:fix it all",
            "color": "muted"
          },
          {
            "id": "h-2x",
            "t": "strike",
            "over": "h-2",
            "at": "l4:replaced"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: Thursday evening. Lan's client design isn't good enough, and it goes out tonight.",
          "sub": "Chặng sáu: tối thứ Năm. Bản thiết kế của Lan chưa đạt, mà tối nay phải gửi khách."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'll just fix it all myself and send it. No need to say anything.",
          "sub": "Thôi, mình tự sửa hết rồi gửi luôn. Khỏi nói gì.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First, ask yourself: did I delegate clearly? Often the brief was thin, not the person.",
          "sub": "Trước tiên tự hỏi: mình đã giao rõ chưa? Nhiều khi lệch vì lời giao thiếu, không phải vì người làm kém.",
          "keys": [
            "mình đã giao rõ chưa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The client may be happy. But tomorrow Lan sees her work replaced, without a word.",
          "sub": "Khách có thể hài lòng. Nhưng sáng mai Lan thấy bản mình bị thay mà không ai nói một lời."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next time she works half-hearted. You'll fix it anyway, right?",
          "sub": "Lần sau cô ấy làm cầm chừng: “đằng nào chị cũng sửa”.",
          "keys": [
            "làm cầm chừng"
          ]
        }
      ],
      "ref": "p19,p20,p21"
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
            "at": "l2",
            "fit": [
              "h-v2"
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
            "id": "h-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1230,
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
                  "id": "lan",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop"
              ]
            },
            "at": "l1:Rewind",
            "caption": "Tua lại · ngồi cùng Lan",
            "icon": "laptop"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Còn giờ: ngồi cùng, chỉ chỗ lệch",
            "x": 3996,
            "y": 1490,
            "size": 44,
            "at": "l1:time",
            "hl": [
              {
                "text": "chỉ chỗ lệch",
                "at": "l2:colours"
              }
            ]
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Gấp quá: chỉnh, rồi nhắn ngay",
            "x": 3996,
            "y": 1560,
            "size": 44,
            "at": "l4:urgent",
            "color": "muted"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Lặng lẽ làm lại, người làm buông tay",
            "x": 3996,
            "y": 1650,
            "size": 40,
            "at": "l5:silence",
            "font": "base",
            "color": "accent"
          },
          {
            "id": "h-msg",
            "t": "text",
            "text": "“Mai mình ngồi xem lại nhé”",
            "x": 4816,
            "y": 1790,
            "size": 44,
            "at": "l4:look together",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Rewind. If there's still time, sit together and compare it with what you agreed.",
          "sub": "Tua lại. Còn thời gian thì ngồi cùng, so với kết quả đã thống nhất."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The colours miss what we agreed. Can you fix them before eight?",
          "sub": "Phần màu chưa đúng như đã thống nhất. Em sửa trước tám giờ được không?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "I see it now. I'll fix it.",
          "sub": "Em thấy rồi ạ. Em sửa ngay.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Truly urgent and you fixed it yourself? Message: last night I adjusted the colours, let's look together tomorrow.",
          "sub": "Gấp quá phải tự chỉnh? Nhắn: “Tối qua gấp quá chị chỉnh phần màu, mai mình ngồi xem lại nhé.”",
          "keys": [
            "mai mình ngồi xem lại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Redo it in silence, and people give up.",
          "sub": "Lặng lẽ làm lại, người làm buông tay.",
          "keys": [
            "Lặng lẽ làm lại, người làm buông tay"
          ]
        }
      ],
      "ref": "p20,p21,p22"
    },
    {
      "id": "s17",
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
            "text": "⑦ Thứ Sáu · Xong việc",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh stop"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1230,
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
                "bar-chart"
              ]
            },
            "at": "l1:Friday",
            "caption": "Thứ Sáu · sau buổi trình sếp",
            "icon": "bar-chart"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "“ok”",
            "x": 5964,
            "y": 1260,
            "size": 60,
            "at": "l3:okay",
            "color": "muted"
          },
          {
            "id": "i-1x",
            "t": "strike",
            "over": "i-1",
            "at": "l3:okay+400"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Cảm ơn: tốt gì, giúp gì",
            "x": 5964,
            "y": 1350,
            "size": 50,
            "at": "l3:Specific",
            "color": "accent",
            "hl": [
              {
                "text": "tốt gì",
                "at": "l3:went well"
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
          "say": "Seventh stop: Friday. The summary went to the boss.",
          "sub": "Chặng bảy: thứ Sáu. Bản tổng hợp đã lên bàn sếp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Your summary was short and on point. The boss approved it right away.",
          "sub": "Bản tóm tắt của cậu ngắn và đúng ý, sếp duyệt ngay.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Specific thanks: what went well, and what it helped. Much heavier than okay.",
          "sub": "Cảm ơn cụ thể: điều gì làm tốt, giúp được gì. Nặng ký hơn hẳn một chữ “ok”.",
          "keys": [
            "Cảm ơn cụ thể"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Next time I give you a task like this, what should I explain more clearly?",
          "sub": "Lần sau giao việc kiểu này, có gì mình nên nói rõ hơn không?",
          "face": "thinking"
        }
      ],
      "ref": "p23,p24"
    },
    {
      "id": "s18",
      "module": "BRK-11",
      "data": {
        "title": "3 việc sau khi xong",
        "items": [
          "Cảm ơn cụ thể",
          "Hỏi lại cách giao",
          "Nêu tên với sếp"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three: name them to the boss.",
          "sub": "Ba: nêu tên người làm với sếp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: ask how to brief better.",
          "sub": "Hai: hỏi lại cách giao."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: thank them specifically.",
          "sub": "Một: cảm ơn cụ thể.",
          "keys": [
            "cảm ơn cụ thể"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p23,p24,p25"
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
          }
        ],
        "items": [
          {
            "id": "i-3",
            "t": "text",
            "text": "Hỏi lại → lời giao tốt dần",
            "x": 5964,
            "y": 1490,
            "size": 46,
            "at": "l1:better",
            "hl": [
              {
                "text": "tốt dần",
                "at": "l1:better"
              }
            ]
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Báo sếp: nêu tên người làm",
            "x": 5964,
            "y": 1570,
            "size": 46,
            "at": "l2:name",
            "color": "accent",
            "hl": [
              {
                "text": "nêu tên",
                "at": "l2:name"
              }
            ]
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "→ lần sau nhận việc khó hơn",
            "x": 5994,
            "y": 1645,
            "size": 42,
            "at": "l2:harder",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "That quick question makes your briefs better every time.",
          "sub": "Câu hỏi ngắn ấy giúp lời giao của bạn tốt dần lên sau mỗi lần.",
          "keys": [
            "tốt dần lên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And when reporting up, name who did it. Credited people take on harder work next time.",
          "sub": "Và khi báo cáo lên sếp, nêu tên người đã làm. Người được ghi công sẽ sẵn lòng nhận việc khó hơn.",
          "keys": [
            "nêu tên người đã làm"
          ]
        }
      ],
      "ref": "p24,p25"
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
            "text": "Chiều thứ Sáu · Khách lại gọi",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday afternoon"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1230,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "happy",
                  "pose": "thumb"
                }
              ],
              "props": [
                "telephone-receiver"
              ]
            },
            "at": "l1:phone",
            "caption": "Chiều thứ Sáu · Thảo đi gặp khách khác",
            "icon": "telephone-receiver"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Tài liệu: thư mục chung",
            "x": 7932,
            "y": 1260,
            "size": 48,
            "at": "l2:shared folder",
            "hl": [
              {
                "text": "thư mục chung",
                "at": "l2:shared folder"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Đã hứa: ghi trong nhóm chat",
            "x": 7932,
            "y": 1335,
            "size": 48,
            "at": "l2:promised"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“…ba cây chụm lại”",
            "x": 7932,
            "y": 1470,
            "size": 46,
            "at": "l4:three trees",
            "color": "accent",
            "hl": [
              {
                "text": "ba cây chụm lại",
                "at": "l4:three trees"
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
          "say": "Friday afternoon. Thảo is out with another client. The phone rings again.",
          "sub": "Chiều thứ Sáu. Thảo đi gặp khách khác. Điện thoại lại reo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Yes, the files are in our shared folder. And she promised you the update on Monday.",
          "sub": "Dạ, tài liệu ở thư mục chung. Chị Thảo đã hứa gửi anh bản cập nhật vào thứ Hai ạ.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Same phone, same client. This time, nobody freezes.",
          "sub": "Vẫn chiếc điện thoại ấy, vẫn vị khách ấy. Lần này, không ai đứng hình.",
          "keys": [
            "không ai đứng hình"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One tree can't make a mountain. Three trees together make a high one.",
          "sub": "“Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao.”",
          "keys": [
            "ba cây chụm lại"
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
      "ref": "p2,p4"
    },
    {
      "id": "s21",
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
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "H",
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
            "x": 7464,
            "y": 40,
            "at": "l1:target"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 3528,
            "y": 1130,
            "at": "l2:date"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5496,
            "y": 1130,
            "at": "l3:fix"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "g-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l2:date+400"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, delegating well: say the target clearly.",
          "sub": "Tóm lại, giao việc giỏi là nói rõ cái đích.",
          "keys": [
            "nói rõ cái đích"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Set the check date in advance.",
          "sub": "Hẹn sẵn ngày xem.",
          "keys": [
            "Hẹn sẵn ngày xem"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And let them fix their own work.",
          "sub": "Và để người làm tự sửa.",
          "keys": [
            "tự sửa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "This week: pick one task you're hugging, and hand it over with the five boxes. Next lesson: short team meetings.",
          "sub": "Việc làm ngay: chọn một việc bạn đang ôm, giao đi trong tuần này theo năm ô. Bài tiếp: họp nhóm ngắn mà hiệu quả.",
          "keys": [
            "Việc làm ngay"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s32",
      "module": "QUIZ-01",
      "ref": "questions[22]",
      "data": {
        "q": "Which way of following up keeps the leader informed without hovering?",
        "options": [
          "Set two clear check dates for drafts and trust the team between those dates",
          "Stop checking completely and hope the team finishes everything on time",
          "Take over all the tasks yourself, so you do not have to worry anymore"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Hai điểm hẹn rõ: góp ý kịp mà không đứng sau lưng ai."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which way of following up keeps the leader informed without hovering?",
          "sub": "Cách theo dõi nào giúp trưởng nhóm nắm việc mà không đứng sau lưng?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Set two clear check dates for drafts and trust the team between those dates.",
          "sub": "Hẹn hai lần xem bản nháp, giữa hai lần thì tin nhóm."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Two clear dates give you time for feedback, without standing behind anyone.",
          "sub": "Hai điểm hẹn rõ: góp ý kịp mà không đứng sau lưng ai."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s33",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Giao việc và theo dõi"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ.",
          "face": "happy"
        }
      ]
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
