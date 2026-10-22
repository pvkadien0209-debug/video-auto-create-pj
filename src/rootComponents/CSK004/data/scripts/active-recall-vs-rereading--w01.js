// Kịch bản video W lần 3 (#110) — "Đọc đi đọc lại vẫn quên? Cách học chủ động nhớ lại hiệu quả hơn" · chuỗi "Tự học và học cách học". Mở rộng đủ ý (#110).
export default {
  "schema": "detpro.video-script/0.2",
  "id": "active-recall-vs-rereading--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "adult-self-learners",
    "slug": "active-recall-vs-rereading",
    "door": "ky-nang",
    "level": "B1",
    "title": "Đọc đi đọc lại vẫn quên? Cách học chủ động nhớ lại hiệu quả hơn",
    "series": "Tự học và học cách học"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN ÔN THI LẠI của Thảo (thứ Bảy thi trượt → tối Chủ nhật → tối thứ Hai → trưa thứ Ba → tối thứ Tư → thứ Năm → sáng/chiều thứ Sáu → sáng thứ Bảy thi lại, cùng phòng thi). Nhân vật (theo w145/_series/adult-self-learners.md): Thảo (kế toán, gộp chị Thu p4), Dũng (kỹ thuật viên bảo hành: bộ thẻ sản phẩm p18 trong cảnh “Khoan đã!”, đồng nghiệp được nhờ hỏi p22), Lan (nhân viên mới chăm sóc khách hàng, hai phiên bản tuần p23, SCENE-03 khung ảnh). Cảnh ngắt nhịp: BRK-04 Nhận ra/Nhớ lại (p3), BRK-10 “Let me try without looking.” (p10), BRK-07 rehook (p23). Tục ngữ mở/khép vòng: “Văn ôn võ luyện”. Thi lại sáng thứ Bảy là lời dựng cảnh khép vòng (bài không nêu kết quả, không nói đỗ). Bản cũ (W lần 3, #110): w145/bak/active-recall-vs-rereading--w01.js.",
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
            "text": "3 lần",
            "x": 60,
            "y": 130,
            "size": 200,
            "at": "l1:three times",
            "color": "accent",
            "hl": [
              {
                "text": "3 lần",
                "at": "l1:document"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "đọc, tô vàng gần hết trang",
            "x": 70,
            "y": 390,
            "size": 56,
            "at": "l1:highlight"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Hôm sau ai hỏi: ấp úng",
            "x": 70,
            "y": 490,
            "size": 54,
            "at": "l2:stammer",
            "color": "coral",
            "hl": [
              {
                "text": "ấp úng",
                "at": "l2:stammer"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Bài dựa trên: Dunlosky và cs. (2013) · Roediger & Karpicke (2006) · Kornell, Hays & Bjork (2009)",
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
          "say": "Three times. You read the document three times, and highlight almost every page.",
          "sub": "Ba lần. Đọc tài liệu ba lần, tô vàng gần hết trang.",
          "keys": [
            "Ba lần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next day, someone asks about it, and you stammer.",
          "sub": "Hôm sau có người hỏi lại thì ấp úng.",
          "keys": [
            "ấp úng"
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
              "set": "campus",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "memo",
                "pencil"
              ],
              "camera": [
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
            "caption": "Thứ Bảy · phòng thi",
            "icon": "memo"
          },
          {
            "id": "a-fail",
            "t": "text",
            "text": "Trượt · thiếu vài điểm",
            "x": 920,
            "y": 640,
            "size": 50,
            "at": "l4:failed",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Văn ôn võ luyện”",
            "x": 60,
            "y": 580,
            "size": 54,
            "at": "l5:practise it",
            "color": "accent",
            "hl": [
              {
                "text": "võ luyện",
                "at": "l5:practise it"
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
          "say": "Meet Thảo, our accountant, on her professional certificate exam day.",
          "sub": "Đây là Thảo, cô kế toán của chúng ta, trong ngày thi chứng chỉ nghiệp vụ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For months, after her kid fell asleep, she reread the textbook, highlighter in hand.",
          "sub": "Mấy tháng liền, tối nào con ngủ xong, cô cũng đọc lại giáo trình, bút tô vàng trong tay.",
          "keys": [
            "đọc lại giáo trình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "This looks familiar... but is it A, or B?",
          "sub": "Câu này quen quen… nhưng là A hay B nhỉ?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She failed by a few points. In months, she never once closed the book to answer a question.",
          "sub": "Cô trượt, thiếu vài điểm. Mấy tháng ôn, chưa buổi nào gập sách tự trả lời một câu.",
          "keys": [
            "chưa buổi nào gập sách"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: study it, then practise it. Thảo only studied... the highlighter.",
          "sub": "Ông bà dặn: “Văn ôn võ luyện.” Thảo thì chỉ ôn… cây bút tô vàng.",
          "keys": [
            "Văn ôn võ luyện"
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
            "text": "Đọc mãi vẫn quên, vì sao?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:forgetting",
            "hl": [
              {
                "text": "vẫn quên",
                "at": "l1:forgetting"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: trí nhớ kém",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:bad memory",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:rereading"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: mới chỉ quen mắt",
            "x": 2028,
            "y": 260,
            "size": 56,
            "at": "l2:familiar",
            "color": "accent",
            "hl": [
              {
                "text": "quen mắt",
                "at": "l2:familiar"
              }
            ]
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "Gập sách",
            "x": 2028,
            "y": 380,
            "size": 52,
            "at": "l3:close"
          },
          {
            "id": "b-a1",
            "t": "arrow",
            "from": [
              2258,
              410
            ],
            "to": [
              2348,
              410
            ],
            "at": "l3:pull"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "Tự nhớ ra",
            "x": 2368,
            "y": 380,
            "size": 52,
            "at": "l3:pull"
          },
          {
            "id": "b-a2",
            "t": "arrow",
            "from": [
              2618,
              410
            ],
            "to": [
              2708,
              410
            ],
            "at": "l3:check"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "Mở ra kiểm tra",
            "x": 2728,
            "y": 380,
            "size": 52,
            "at": "l3:check"
          },
          {
            "id": "b-name",
            "t": "text",
            "text": "= chủ động nhớ lại",
            "x": 3148,
            "y": 380,
            "size": 52,
            "at": "l4:active recall",
            "color": "accent",
            "hl": [
              {
                "text": "chủ động nhớ lại",
                "at": "l4:active recall"
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
          "say": "So why does reading again and again still leave us forgetting?",
          "sub": "Vậy vì sao đọc đi đọc lại mà vẫn quên?",
          "keys": [
            "vẫn quên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a bad memory. Rereading only makes the page look familiar.",
          "sub": "Không phải trí nhớ kém. Đọc lại chỉ làm trang giấy quen mắt.",
          "keys": [
            "quen mắt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "What works: close the book, pull it out of your own head, then open and check.",
          "sub": "Điều giúp nhớ: gập sách, tự lấy kiến thức ra từ đầu mình, rồi mới mở ra kiểm tra."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It's called active recall.",
          "sub": "Cách này gọi là chủ động nhớ lại.",
          "keys": [
            "chủ động nhớ lại"
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
          }
        ],
        "items": [
          {
            "id": "b-wk",
            "t": "text",
            "text": "7 chặng · tuần trước kỳ thi lại",
            "x": 2028,
            "y": 520,
            "size": 52,
            "at": "l1:seven stops",
            "hl": [
              {
                "text": "thi lại",
                "at": "l1:retake"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+0",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+260",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+520",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+780",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+1040",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+1560",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "CN tối",
            "x": 2050,
            "y": 628,
            "size": 44,
            "at": "l1:seven+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T2 tối",
            "x": 2285,
            "y": 628,
            "size": 44,
            "at": "l1:seven+380"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T3 trưa",
            "x": 2520,
            "y": 628,
            "size": 44,
            "at": "l1:seven+640"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T4 tối",
            "x": 2755,
            "y": 628,
            "size": 44,
            "at": "l1:seven+900"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T5",
            "x": 2990,
            "y": 628,
            "size": 44,
            "at": "l1:seven+1160"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T6 sáng",
            "x": 3225,
            "y": 628,
            "size": 44,
            "at": "l1:seven+1420"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T6 chiều",
            "x": 3460,
            "y": 628,
            "size": 44,
            "at": "l1:seven+1680"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo's week before the retake, in seven stops. Highlighters down.",
          "sub": "Mình theo Thảo một tuần trước kỳ thi lại, bảy chặng. Bỏ bút tô vàng xuống nhé.",
          "keys": [
            "một tuần trước kỳ thi lại"
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
            "text": "① Tối Chủ nhật · Đọc lần ba",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:third"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "open-book",
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
            "at": "l1:sunday",
            "caption": "Tối Chủ nhật · ở nhà",
            "icon": "open-book"
          },
          {
            "id": "c-fly",
            "t": "text",
            "text": "Mắt lướt nhanh, chữ nào cũng quen",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l3:eyes fly"
          },
          {
            "id": "c-fake",
            "t": "text",
            "text": "trôi chảy ≠ đã nhớ",
            "x": 3996,
            "y": 255,
            "size": 56,
            "at": "l3:smooth",
            "color": "coral",
            "hl": [
              {
                "text": "≠ đã nhớ",
                "at": "l3:fakes"
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
          "say": "First stop: Sunday night. Thảo opens the textbook, for the third time.",
          "sub": "Chặng một: tối Chủ nhật. Thảo mở giáo trình, lần đọc thứ ba."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Easy. I already know all of this.",
          "sub": "Dễ mà. Mình nhớ hết rồi.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Third reading, the eyes fly, every word familiar. That smooth feeling fakes understanding.",
          "sub": "Lần thứ ba, mắt lướt vèo vèo, chữ nào cũng quen. Cảm giác trôi chảy ấy dễ bị nhầm là đã hiểu, đã nhớ.",
          "keys": [
            "dễ bị nhầm là đã hiểu"
          ]
        }
      ],
      "ref": "p1"
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
            "id": "c-no",
            "t": "text",
            "text": "Lúc cần: không có trang giấy",
            "x": 3996,
            "y": 345,
            "size": 44,
            "at": "l1:no page",
            "hl": [
              {
                "text": "không có trang giấy",
                "at": "l1:no page"
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
          "say": "But when it counts, at an exam, a customer's question, a meeting, there's no page to look at.",
          "sub": "Nhưng lúc cần thật, khi thi, khi khách hỏi, khi họp, đâu có trang giấy nào để nhìn.",
          "keys": [
            "đâu có trang giấy nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Recognising it when you see it, and saying it from memory, are two different skills.",
          "sub": "Nhận ra khi thấy, và tự nói ra từ trí nhớ, là hai việc khác nhau.",
          "keys": [
            "hai việc khác nhau"
          ]
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s06b",
      "module": "BRK-04",
      "data": {
        "title": "Công việc đòi loại nào?",
        "labels": [
          "Nhận ra",
          "Nhớ lại"
        ],
        "wrong": "Đọc lại, xem slide, nhìn đoạn tô đậm",
        "right": "Gập sách viết ý chính, tự trả lời, giải thích",
        "wrongIllus": "eyes",
        "rightIllus": "brain"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Recognising: rereading, slides, highlights.",
          "sub": "Nhận ra: đọc lại, xem slide, nhìn đoạn tô đậm.",
          "keys": [
            "Nhận ra"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Recalling: close the book, answer, explain. Work needs this.",
          "sub": "Nhớ lại: gập sách, tự trả lời, giải thích. Việc thật cần loại này.",
          "keys": [
            "Nhớ lại"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "whoosh"
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
            "id": "c-tr",
            "t": "text",
            "text": "Muốn giỏi nhớ ra → tập nhớ ra",
            "x": 3996,
            "y": 445,
            "size": 48,
            "at": "l1:practising",
            "hl": [
              {
                "text": "tập nhớ ra",
                "at": "l1:practising recalling"
              }
            ]
          },
          {
            "id": "c-rut",
            "t": "text",
            "text": "Quen mặt chữ chưa phải là nhớ",
            "x": 4816,
            "y": 690,
            "size": 52,
            "at": "l2:familiar",
            "color": "accent",
            "hl": [
              {
                "text": "chưa phải là nhớ",
                "at": "l2:not memory"
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
          "say": "And you only get good at recalling by practising recalling.",
          "sub": "Và muốn giỏi nhớ ra thì phải tập đúng việc nhớ ra.",
          "keys": [
            "tập đúng việc nhớ ra"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo's months of reading? Familiar words are not memory yet.",
          "sub": "Mấy tháng đọc của Thảo? Quen mặt chữ chưa phải là nhớ.",
          "keys": [
            "Quen mặt chữ chưa phải là nhớ"
          ]
        }
      ],
      "ref": "p2,p3,p5"
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
            "at": "l5",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tối thứ Hai · Vòng nhớ lại",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6944,
            "y": 150,
            "w": 640,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "closed-book",
                "notebook"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:new loop",
            "caption": "Tối thứ Hai · ở nhà",
            "icon": "closed-book"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 170,
            "w": 50,
            "h": 50,
            "at": "l2:short part",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 152,
            "size": 62,
            "at": "l2:short part+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Đọc một đoạn ngắn",
            "x": 6039,
            "y": 162,
            "size": 44,
            "at": "l2:short part+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 258,
            "w": 50,
            "h": 50,
            "at": "l2:three key points",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 240,
            "size": 62,
            "at": "l2:three key points+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Gập lại, viết 3 ý chính",
            "x": 6039,
            "y": 250,
            "size": 44,
            "at": "l2:three key points+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 346,
            "w": 50,
            "h": 50,
            "at": "l5:compare",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 328,
            "size": 62,
            "at": "l5:compare+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Mở ra so, đánh dấu chỗ sai",
            "x": 6039,
            "y": 338,
            "size": 44,
            "at": "l5:compare+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 434,
            "w": 50,
            "h": 50,
            "at": "l5:question",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 416,
            "size": 62,
            "at": "l5:question+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Viết câu hỏi cho chỗ sai",
            "x": 6039,
            "y": 426,
            "size": 44,
            "at": "l5:question+200"
          },
          {
            "id": "d-c4",
            "t": "box",
            "x": 5964,
            "y": 522,
            "w": 50,
            "h": 50,
            "at": "l5:next day",
            "stroke": 5
          },
          {
            "id": "d-k4",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 504,
            "size": 62,
            "at": "l5:next day+600",
            "color": "accent"
          },
          {
            "id": "d-l4",
            "t": "text",
            "text": "Hôm sau: trả lời trước",
            "x": 6039,
            "y": 514,
            "size": 44,
            "at": "l5:next day+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Monday night. Thảo tries a new loop.",
          "sub": "Chặng hai: tối thứ Hai. Thảo thử một vòng học mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read one short part, fully focused. Close it. Write three key points, in her own words.",
          "sub": "Đọc một đoạn ngắn thật tập trung. Gập lại. Viết ra ba ý chính bằng lời của mình.",
          "keys": [
            "ba ý chính"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Open, compare... I missed one point. It becomes a question.",
          "sub": "Mở ra so… Sót một ý. Biến nó thành câu hỏi.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "After how many days does a customer need a receipt to exchange goods?",
          "sub": "Khách đổi hàng sau bao nhiêu ngày thì cần hoá đơn?",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Compare, mark what's missing, turn it into a question. Next day, answer those first.",
          "sub": "So, đánh dấu chỗ thiếu, biến thành câu hỏi. Hôm sau, trả lời các câu ấy trước khi học phần mới.",
          "keys": [
            "trả lời các câu ấy trước"
          ]
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
            "text": "③ Trưa thứ Ba · Kỹ năng",
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
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "bar-chart"
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
            "at": "l1:skills",
            "caption": "Trưa thứ Ba · văn phòng",
            "icon": "laptop"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Kỹ năng: tự làm, không nhìn",
            "x": 7932,
            "y": 170,
            "size": 48,
            "at": "l1:without the guide",
            "hl": [
              {
                "text": "không nhìn",
                "at": "l1:without the guide"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Bảng tính: tự lập lại công thức",
            "x": 7932,
            "y": 255,
            "size": 46,
            "at": "l3:same+900"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Tự giới thiệu: nói lại trước",
            "x": 7932,
            "y": 335,
            "size": 46,
            "at": "l3:introduction"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Tuesday lunch. For skills, recall means doing it without the guide.",
          "sub": "Chặng ba: trưa thứ Ba. Với kỹ năng, nhớ lại là tự làm mà không nhìn hướng dẫn.",
          "keys": [
            "không nhìn hướng dẫn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'll rebuild the spreadsheet formula myself, then check the guide.",
          "sub": "Tự lập lại công thức bảng tính, rồi mới xem hướng dẫn để sửa.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Same for your English self introduction: say it from memory first, then fix it.",
          "sub": "Đoạn tự giới thiệu tiếng Anh cũng vậy: tự nói lại trước, rồi mới sửa."
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
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-voc",
            "t": "text",
            "text": "Từ: che nghĩa → nói câu ví dụ",
            "x": 7932,
            "y": 450,
            "size": 46,
            "at": "l1:cover",
            "hl": [
              {
                "text": "che nghĩa",
                "at": "l1:cover the meaning"
              }
            ]
          },
          {
            "id": "e-list",
            "t": "text",
            "text": "Đọc cả danh sách từ trên xuống",
            "x": 7932,
            "y": 540,
            "size": 46,
            "at": "l2:whole list",
            "color": "muted"
          },
          {
            "id": "e-listx",
            "t": "strike",
            "over": "e-list",
            "at": "l2:receipt"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "New words? Cover the meaning, say an example sentence, then flip.",
          "sub": "Từ vựng? Che nghĩa, tự nói một câu ví dụ, rồi mới lật.",
          "keys": [
            "Che nghĩa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not reading the whole list top to bottom, like a shopping receipt.",
          "sub": "Đừng đọc cả danh sách từ trên xuống như đọc hoá đơn đi chợ."
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s11b",
      "module": "BRK-10",
      "data": {
        "quote": "Let me try without looking.",
        "mark": "without looking",
        "by": "Câu tự nhắc khi học một mình",
        "illus": "see-no-evil-monkey"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Studying alone? Tell yourself:",
          "sub": "Học một mình? Hãy tự nhắc:"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Let me try without looking.",
          "sub": "Để mình thử mà không nhìn.",
          "keys": [
            "không nhìn"
          ]
        }
      ],
      "ref": "p10"
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
            "text": "④ Tối thứ Tư · Thấy khó quá?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:hard"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "sad"
                }
              ],
              "props": [
                "page-facing-up",
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
            "at": "l1:wednesday",
            "caption": "Tối thứ Tư · trang giấy trắng",
            "icon": "page-facing-up"
          },
          {
            "id": "f-eff",
            "t": "text",
            "text": "Phải nghĩ một lúc = dấu hiệu tốt",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l3:good sign",
            "color": "accent",
            "hl": [
              {
                "text": "dấu hiệu tốt",
                "at": "l3:good sign"
              }
            ]
          },
          {
            "id": "f-blank",
            "t": "text",
            "text": "Trắng trơn? Đọc 1 lần, thử lại",
            "x": 60,
            "y": 1345,
            "size": 46,
            "at": "l4:blank"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Wednesday night. Recall feels hard.",
          "sub": "Chặng bốn: tối thứ Tư. Nhớ lại thấy khó quá."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I closed the book... and I remember nothing at all.",
          "sub": "Gập sách rồi… mà chẳng nhớ được gì.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Good news: needing a moment to think is a good sign. That effort makes memory stronger.",
          "sub": "Tin vui: phải nghĩ một lúc mới ra là dấu hiệu tốt. Chính nỗ lực ấy làm trí nhớ chắc hơn.",
          "keys": [
            "dấu hiệu tốt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Just keep it at your level. Totally blank? Read that part once more, then try again.",
          "sub": "Nhưng khó vừa sức thôi. Trắng trơn? Đọc lại đoạn đó một lần rồi thử lại."
        }
      ],
      "ref": "p11,p12"
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
            "id": "f-norm",
            "t": "text",
            "text": "Sai nhiều tuần đầu: bình thường",
            "x": 60,
            "y": 1440,
            "size": 46,
            "at": "l1:normal",
            "hl": [
              {
                "text": "bình thường",
                "at": "l1:normal"
              }
            ]
          },
          {
            "id": "f-res",
            "t": "text",
            "text": "Thử nhớ, xem đáp án > đọc lại",
            "x": 60,
            "y": 1530,
            "size": 44,
            "at": "l2:trying"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Kornell, Hays & Bjork (2009)",
            "x": 60,
            "y": 1595,
            "size": 28,
            "at": "l2",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-wrong",
            "t": "text",
            "text": "Câu sai → hôm sau hỏi lại",
            "x": 60,
            "y": 1660,
            "size": 48,
            "at": "l3:write down"
          },
          {
            "id": "f-rut",
            "t": "text",
            "text": "Khó vừa phải = đang học thật",
            "x": 880,
            "y": 1780,
            "size": 52,
            "at": "l3:real learning",
            "color": "accent",
            "hl": [
              {
                "text": "đang học thật",
                "at": "l3:real learning"
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
          "say": "Many mistakes in the first weeks? Normal. Self testing just exposes what you don't know yet.",
          "sub": "Sai nhiều trong những tuần đầu? Bình thường. Tự hỏi chỉ phơi ra chỗ mình chưa nhớ.",
          "keys": [
            "Bình thường"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Research shows: trying and failing, then seeing the answer, still beats just rereading.",
          "sub": "Nghiên cứu cho thấy: cố nhớ chưa ra rồi xem đáp án vẫn nhớ lâu hơn chỉ đọc lại.",
          "keys": [
            "nhớ lâu hơn chỉ đọc lại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So write down the misses, and ask them again tomorrow. A little hard means real learning.",
          "sub": "Vậy ghi lại câu sai, hôm sau hỏi lại. Thấy khó vừa phải là đang học thật.",
          "keys": [
            "Thấy khó vừa phải là đang học thật"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Meanwhile, at the warranty counter: meet Dũng, technician, with a deck of product cards.",
          "sub": "Cùng lúc ấy, ở quầy bảo hành: đây là Dũng, kỹ thuật viên, với bộ thẻ sản phẩm."
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s15",
      "module": "DLG-01",
      "data": {
        "set": "shop",
        "label": "Quầy bảo hành",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Lật thẻ khi chưa nghĩ ra",
          "why": "Lật ngay rồi gật gù “à, đúng rồi” thì bộ thẻ chỉ còn là đọc lại.",
          "rule": "Nói ra trước, lật thẻ sau"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "How does this washing machine's warranty work?",
          "sub": "Máy giặt này bảo hành thế nào nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I'll just flip it. Ah, right, I knew that!",
          "sub": "Lật xem luôn. À, đúng rồi, mình biết mà!",
          "face": "happy",
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
          "say": "Flipping before you try is just rereading in disguise.",
          "sub": "Lật trước khi thử thì vẫn chỉ là đọc lại đội lốt khác.",
          "keys": [
            "đọc lại đội lốt khác"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Cover the back. Say it out loud, even if I'm not sure. Now flip, and compare.",
          "sub": "Che mặt sau. Nói thành tiếng, dù chưa chắc. Giờ mới lật, so từng ý.",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Say it first, flip after.",
          "sub": "Nói ra trước, lật thẻ sau.",
          "phase": "redo",
          "keys": [
            "Nói ra trước, lật thẻ sau"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p16,p18"
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
            "text": "⑤ Thứ Năm · Hai chồng thẻ",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "card-index",
                "spiral-calendar"
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
            "at": "l1:two piles",
            "caption": "Thứ Năm · quầy bảo hành",
            "icon": "card-index"
          },
          {
            "id": "g-p1",
            "t": "text",
            "text": "Đúng, nhanh → vài ngày sau",
            "x": 2028,
            "y": 1260,
            "size": 48,
            "at": "l3:smart"
          },
          {
            "id": "g-p2",
            "t": "text",
            "text": "Sai, ngập ngừng → ngày mai",
            "x": 2028,
            "y": 1345,
            "size": 48,
            "at": "l3:smart+500",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Thursday. Dũng sorts his cards into two piles.",
          "sub": "Chặng năm: thứ Năm. Dũng chia thẻ thành hai chồng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Right and quick: in a few days. Wrong or slow: tomorrow's pile.",
          "sub": "Đúng và nhanh: vài ngày nữa ôn. Sai hoặc ngập ngừng: chồng ngày mai.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Smart. Now, three slips beginners make.",
          "sub": "Khôn đấy. Giờ đến ba chỗ người mới hay vấp."
        }
      ],
      "ref": "p18,p19"
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
            "id": "g-1",
            "t": "text",
            "text": "① Chờ vài phút rồi mới hỏi",
            "x": 2028,
            "y": 1450,
            "size": 46,
            "at": "l1:wait"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "② Nghĩ ≥ nửa phút, viết ra",
            "x": 2028,
            "y": 1540,
            "size": 46,
            "at": "l2:half a minute",
            "hl": [
              {
                "text": "nửa phút",
                "at": "l2:half a minute"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "③ Ưu tiên câu hay sai",
            "x": 2028,
            "y": 1630,
            "size": 46,
            "at": "l3:miss"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Câu đã thuộc: dễ chịu, vô ích",
            "x": 2848,
            "y": 1780,
            "size": 48,
            "at": "l3:comfy",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One: testing right after reading. The answer's still in front of your eyes. Wait a few minutes.",
          "sub": "Một: hỏi ngay khi vừa đọc xong, đáp án còn trước mắt. Chờ vài phút đã."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: peeking after two seconds. Think at least half a minute, write a guess, then look.",
          "sub": "Hai: xem đáp án sau hai giây. Cố nghĩ ít nhất nửa phút, viết ra dù chưa chắc, rồi mới xem.",
          "keys": [
            "ít nhất nửa phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: only asking what you know. Comfy, but useless. Spend time on the ones you miss.",
          "sub": "Ba: chỉ hỏi câu đã thuộc. Dễ chịu nhưng vô ích. Dành thời gian cho câu hay sai.",
          "keys": [
            "câu hay sai"
          ]
        }
      ],
      "ref": "p15,p16,p17"
    },
    {
      "id": "s17b",
      "module": "BRK-07",
      "data": {
        "question": "Đọc một lần rồi tự hỏi, có thắng đọc bốn lần?",
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
          "say": "Read once and test yourself, or read four times. Which wins?",
          "sub": "Đọc một lần rồi tự hỏi, hay đọc bốn lần. Cách nào thắng?",
          "keys": [
            "Cách nào thắng"
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
            "text": "⑥ Sáng thứ Sáu · Trước đào tạo",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:training"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
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
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "writing-hand",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "medium",
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
            "at": "l1:friday",
            "caption": "Sáng thứ Sáu · phòng đào tạo",
            "icon": "writing-hand"
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "5 phút viết từ trí nhớ",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l2:five minutes",
            "color": "accent",
            "hl": [
              {
                "text": "5 phút",
                "at": "l2:five minutes"
              }
            ]
          },
          {
            "id": "h-sl",
            "t": "text",
            "text": "rồi mới mở slide: phần đã quên",
            "x": 3996,
            "y": 1345,
            "size": 44,
            "at": "l2:slides"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: Friday morning, before the training session.",
          "sub": "Chặng sáu: sáng thứ Sáu, trước buổi đào tạo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo spends five minutes writing all she remembers from last time. Then opens the slides, just for the gaps.",
          "sub": "Thảo dành năm phút viết mọi thứ còn nhớ về buổi trước. Rồi mới mở slide, chỉ đọc kỹ phần đã quên.",
          "keys": [
            "năm phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Could you ask me three questions about this process? I want to see what I remember.",
          "sub": "Anh hỏi thử em ba câu về quy trình này được không? Em muốn xem mình nhớ đến đâu.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Sure. Notes closed first.",
          "sub": "Được chứ. Gập sổ lại đã.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A colleague asking questions: as close to real work as practice gets.",
          "sub": "Nhờ đồng nghiệp hỏi thử: luyện sát việc thật nhất rồi.",
          "keys": [
            "sát việc thật"
          ]
        }
      ],
      "ref": "p20,p22"
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
            "id": "h-15",
            "t": "text",
            "text": "Cùng 15 phút · biết rõ thiếu gì",
            "x": 3996,
            "y": 1450,
            "size": 48,
            "at": "l1:fifteen",
            "color": "accent",
            "hl": [
              {
                "text": "biết rõ thiếu gì",
                "at": "l1:exactly"
              }
            ]
          },
          {
            "id": "h-all",
            "t": "text",
            "text": "Xem slide từ đầu đến cuối",
            "x": 3996,
            "y": 1540,
            "size": 46,
            "at": "l2:start to end",
            "color": "muted"
          },
          {
            "id": "h-allx",
            "t": "strike",
            "over": "h-all",
            "at": "l2:calm"
          },
          {
            "id": "h-calm",
            "t": "text",
            "text": "chỉ mua cảm giác yên tâm",
            "x": 4816,
            "y": 1780,
            "size": 48,
            "at": "l2:calm",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Same fifteen minutes as reviewing the slides, but now she knows exactly what's missing.",
          "sub": "Cũng chừng mười lăm phút như xem lại slide, nhưng giờ biết rõ mình thiếu gì.",
          "keys": [
            "biết rõ mình thiếu gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Slides from start to end only buy you a warm, calm feeling.",
          "sub": "Xem slide từ đầu đến cuối chỉ mua được cảm giác yên tâm.",
          "keys": [
            "cảm giác yên tâm"
          ]
        }
      ],
      "ref": "p21"
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
            "at": "a1",
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
            "text": "⑦ Chiều thứ Sáu · Bài kiểm tra",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:afternoon"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan"
                }
              ],
              "left": {
                "label": "Cách A: đọc bốn lần",
                "ok": false
              },
              "right": {
                "label": "Cách B: tự hỏi",
                "ok": true
              }
            },
            "at": "l2:two versions",
            "caption": "Một tuần học quy trình khiếu nại",
            "icon": "office-building"
          },
          {
            "id": "i-a",
            "t": "text",
            "text": "A: đọc 4 lần, tô đậm",
            "x": 5964,
            "y": 1260,
            "size": 48,
            "at": "l3:test",
            "color": "coral"
          },
          {
            "id": "i-a2",
            "t": "text",
            "text": "→ quen, nhưng nghĩ lâu",
            "x": 6004,
            "y": 1335,
            "size": 44,
            "at": "l3:test+400",
            "color": "muted"
          },
          {
            "id": "i-b",
            "t": "text",
            "text": "B: đọc 1 lần, tự hỏi",
            "x": 5964,
            "y": 1415,
            "size": 46,
            "at": "l3:option b",
            "color": "accent"
          },
          {
            "id": "i-b2",
            "t": "text",
            "text": "→ trả lời gần hết",
            "x": 6004,
            "y": 1490,
            "size": 44,
            "at": "l3:almost all",
            "hl": [
              {
                "text": "gần hết",
                "at": "l3:almost all"
              }
            ]
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Đề hỏi kiểu gì, luyện kiểu đó",
            "x": 5964,
            "y": 1780,
            "size": 52,
            "at": "l4:practise",
            "color": "accent",
            "hl": [
              {
                "text": "luyện kiểu đó",
                "at": "l4:practise"
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
          "say": "Seventh stop: Friday afternoon. Meet Lan, new in customer care, with one week to learn the complaint process.",
          "sub": "Chặng bảy: chiều thứ Sáu. Đây là Lan, nhân viên mới phòng chăm sóc khách hàng, có một tuần để nắm quy trình khiếu nại.",
          "keys": [
            "một tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two versions of Lan's week.",
          "sub": "Hai phiên bản tuần của Lan."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "lan",
          "say": "I read it four times and highlighted the key lines. So familiar!",
          "sub": "Đọc bốn lần, tô đậm dòng quan trọng. Quen lắm rồi!",
          "phase": "a",
          "face": "happy"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "lan",
          "say": "But a situation question... I need ages to think.",
          "sub": "Nhưng gặp câu tình huống thì phải nghĩ lâu…",
          "phase": "a",
          "face": "worried"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "lan",
          "say": "I read each step once, made questions, and asked my family to test me.",
          "sub": "Đọc mỗi bước một lần, tự đặt câu hỏi, rồi nhờ người nhà hỏi thử.",
          "phase": "b",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "lan",
          "say": "A customer calls a third time about one fault? I know who gets it!",
          "sub": "Khách gọi lần ba về cùng một lỗi? Biết chuyển cho ai rồi!",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The Friday test used exactly those situation questions. Option B answered almost all.",
          "sub": "Bài kiểm tra thứ Sáu ra đúng kiểu tình huống. Cách B trả lời được gần hết.",
          "keys": [
            "Cách B trả lời được gần hết"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Practise the way you'll be asked.",
          "sub": "Đề hỏi kiểu gì, tự luyện kiểu đó.",
          "keys": [
            "Đề hỏi kiểu gì, tự luyện kiểu đó"
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
      "ref": "p23,p24"
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
          }
        ],
        "items": [
          {
            "id": "i-re",
            "t": "text",
            "text": "Đọc lại: chỉ chỗ vừa nhớ sai",
            "x": 5964,
            "y": 1570,
            "size": 46,
            "at": "l2:reread"
          },
          {
            "id": "i-hl",
            "t": "text",
            "text": "Chỉ tô phần không nhớ được",
            "x": 5964,
            "y": 1665,
            "size": 46,
            "at": "l3:highlight only",
            "hl": [
              {
                "text": "không nhớ được",
                "at": "l3:forgot"
              }
            ]
          },
          {
            "id": "i-all",
            "t": "text",
            "text": "Tô hết = chẳng gì nổi bật",
            "x": 6784,
            "y": 1780,
            "size": 46,
            "at": "l4:everything",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, ban rereading forever? No. One careful read is still needed to understand.",
          "sub": "Vậy cấm đọc lại vĩnh viễn? Không. Đọc kỹ một lần vẫn cần để hiểu.",
          "keys": [
            "Đọc kỹ một lần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Just don't make it your main review. Reread only where you just recalled wrong.",
          "sub": "Chỉ đừng lấy đọc lại làm cách ôn chính. Đọc lại đúng chỗ vừa nhớ sai."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Highlighting too: close, write the key idea in the margin, and highlight only what you forgot.",
          "sub": "Tô đậm cũng vậy: gập lại, viết ý chính ra lề, chỉ tô phần không nhớ được.",
          "keys": [
            "chỉ tô phần không nhớ được"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "When everything stands out, nothing stands out.",
          "sub": "Khi mọi thứ đều nổi bật thì chẳng có gì nổi bật.",
          "keys": [
            "chẳng có gì nổi bật"
          ]
        }
      ],
      "ref": "p25,p26"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Sáng thứ Bảy · Thi lại",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:saturday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "pencil"
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
            "at": "l1:same exam hall",
            "caption": "Thứ Bảy · cùng phòng thi",
            "icon": "memo"
          },
          {
            "id": "j-ok",
            "t": "text",
            "text": "Không chờ thấy quen: tự nói ra",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l3:proverb"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Văn ôn võ luyện”",
            "x": 7932,
            "y": 1350,
            "size": 56,
            "at": "l3:practise",
            "color": "accent",
            "hl": [
              {
                "text": "võ luyện",
                "at": "l3:practise"
              }
            ]
          },
          {
            "id": "j-now",
            "t": "text",
            "text": "Làm ngay: 5 phút viết lại",
            "x": 7932,
            "y": 1690,
            "size": 46,
            "at": "l4:five minutes",
            "color": "accent",
            "hl": [
              {
                "text": "5 phút",
                "at": "l4:five minutes"
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
          "say": "Saturday morning. The same exam hall, the same chair.",
          "sub": "Sáng thứ Bảy. Vẫn phòng thi ấy, vẫn chiếc ghế ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "A situation question. It doesn't need to look familiar. I've said this answer out loud before.",
          "sub": "Câu tình huống. Không cần thấy quen, câu này mình đã tự nói ra rồi.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Remember the proverb: study, then practise. This time Thảo practised recalling.",
          "sub": "Nhớ câu “Văn ôn võ luyện” chứ? Lần này Thảo không chỉ ôn, mà luyện nhớ ra.",
          "keys": [
            "luyện nhớ ra"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Your turn: before your next session, spend five minutes writing everything you remember.",
          "sub": "Đến lượt bạn: lần học tới, trước khi mở tài liệu, dành năm phút viết ra mọi thứ còn nhớ.",
          "keys": [
            "năm phút"
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
      "ref": "p4,p5,outro"
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
            "at": "l1:recognising",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:say it first",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:practise",
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
            "x": 5516,
            "y": 680,
            "at": "l1:recognising"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 2668,
            "y": 1250,
            "at": "l2:say it first"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6684,
            "y": 1770,
            "at": "l3:practise"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "i-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:asked"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: rereading trains recognising. Real life asks you to recall.",
          "sub": "Tóm lại: đọc lại là luyện nhận ra, còn việc thật đòi bạn tự nhớ ra.",
          "keys": [
            "tự nhớ ra"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Say it first, flip after.",
          "sub": "Nói ra trước, lật thẻ sau.",
          "keys": [
            "Nói ra trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And practise the way you'll be asked.",
          "sub": "Và đề hỏi kiểu gì, tự luyện kiểu đó.",
          "keys": [
            "tự luyện kiểu đó"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p5,p19,p24"
    },
    {
      "id": "s33",
      "module": "QUIZ-01",
      "ref": "questions[35]",
      "data": {
        "q": "Why did option B fit the final test so well?",
        "options": [
          "The test was very easy, so any way of studying would have worked fine",
          "A family member knew the company process and told them all the answers",
          "The test used situation questions, and they had practised answering exactly that kind"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "red-question-mark",
        "why": "Cách B tự luyện bằng câu hỏi tình huống, và đề cũng hỏi theo tình huống."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why did option B fit the final test so well?",
          "sub": "Vì sao cách B khớp với bài kiểm tra cuối tuần?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The test used situation questions, and they had practised answering exactly that kind.",
          "sub": "Đề hỏi tình huống, và họ đã luyện trả lời đúng kiểu đó."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "The answers still came from their own memory.",
          "sub": "Câu trả lời vẫn đến từ trí nhớ của chính họ."
        }
      ],
      "beats": {
        "after": 500
      }
    },
    {
      "id": "s34",
      "module": "END-05",
      "data": {
        "text": "Gập sách lại, thử bốn mươi câu",
        "sub": "Tự trả lời trước, rồi mới xem đáp án"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now close the book. Forty questions are waiting below.",
          "sub": "Giờ gập sách lại. Bốn mươi câu hỏi đang chờ bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
