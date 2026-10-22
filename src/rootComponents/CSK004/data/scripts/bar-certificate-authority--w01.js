// bar-certificate-authority--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-certificate-authority--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "bar-practising-certificate",
    "slug": "bar-certificate-authority",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Sau phân cấp năm 2025, ai cấp chứng chỉ và hồ sơ đi qua đâu?",
    "series": "Xin chứng chỉ hành nghề luật sư sau khi đạt kiểm tra — hồ sơ, thẩm quyền mới và khi bị từ chối"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
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
            "text": "01/7/2025",
            "x": 60,
            "y": 100,
            "size": 160,
            "at": "l1:July",
            "color": "accent",
            "hl": [
              {
                "text": "01/7/2025",
                "at": "l1:twenty-five"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "chữ ký về tỉnh",
            "x": 70,
            "y": 320,
            "size": 60,
            "at": "l1:signature",
            "hl": [
              {
                "text": "về tỉnh",
                "at": "l1:provinces"
              }
            ]
          },
          {
            "id": "a-myth",
            "t": "text",
            "text": "Truyền miệng: “nộp qua Đoàn”",
            "x": 70,
            "y": 440,
            "size": 50,
            "at": "l2:mouth",
            "color": "muted"
          },
          {
            "id": "a-mythx",
            "t": "strike",
            "over": "a-myth",
            "at": "l3:really"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Điều 9 NĐ 121/2025/NĐ-CP",
            "x": 60,
            "y": 735,
            "size": 26,
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
          "say": "July first, twenty twenty-five. A quiet date that moved one signature from the ministry to the provinces.",
          "sub": "Ngày 01/7/2025. Một ngày lặng lẽ, chuyển một chữ ký từ Bộ về các tỉnh.",
          "keys": [
            "về các tỉnh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But word of mouth still says: submit through the bar association.",
          "sub": "Nhưng truyền miệng vẫn bảo: nộp qua Đoàn luật sư.",
          "keys": [
            "nộp qua Đoàn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So who really signs now, and where does your file travel?",
          "sub": "Vậy thực sự giờ ai ký, và hồ sơ đi qua đâu?",
          "keys": [
            "ai ký"
          ]
        }
      ],
      "ref": "intro,p3,p5"
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
            "module": "SCENE-03",
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "receipt",
                "classical-building"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "caption": "Ngày nộp · trước cửa Sở Tư pháp",
            "icon": "receipt"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "“Hồ sơ đi đâu tiếp?”",
            "x": 900,
            "y": 690,
            "size": 46,
            "at": "l3:where",
            "color": "coral",
            "hl": [
              {
                "text": "đi đâu",
                "at": "l3:where"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Nhập gia tuỳ tục”",
            "x": 70,
            "y": 560,
            "size": 58,
            "at": "l4:house",
            "color": "accent",
            "hl": [
              {
                "text": "tuỳ tục",
                "at": "l4:customs"
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
          "say": "She passed the probation test, and just handed in her file at the justice department where she trained.",
          "sub": "Cô đã đạt kiểm tra tập sự, vừa nộp hồ sơ ở Sở Tư pháp nơi mình tập sự.",
          "keys": [
            "Sở Tư pháp nơi mình tập sự"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Receipt in hand! Now where does my file go, and when do I hear back?",
          "sub": "Biên nhận trong tay! Giờ hồ sơ đi đâu, bao giờ có tin?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: enter a house, follow its customs. Here, the house is a province.",
          "sub": "Ông bà dặn: “Nhập gia tuỳ tục.” Ở đây, nhà chính là… tỉnh.",
          "keys": [
            "Nhập gia tuỳ tục"
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
      "ref": "intro,p7"
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
            "text": "Ai ký? Hồ sơ đi qua đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:signs",
            "hl": [
              {
                "text": "Ai ký",
                "at": "l1:signs"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: Đoàn → Sở → Bộ",
            "x": 2028,
            "y": 170,
            "size": 54,
            "at": "l2:bar",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:But"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: Sở → Chủ tịch tỉnh",
            "x": 2028,
            "y": 260,
            "size": 60,
            "at": "l3:chair",
            "color": "accent",
            "hl": [
              {
                "text": "Chủ tịch tỉnh",
                "at": "l3:chair"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "badge",
            "n": 1,
            "x": 2068,
            "y": 440,
            "at": "l4:who"
          },
          {
            "id": "b-1t",
            "t": "text",
            "text": "Ai làm gì",
            "x": 2143,
            "y": 415,
            "size": 50,
            "at": "l4:who+200"
          },
          {
            "id": "b-2",
            "t": "badge",
            "n": 2,
            "x": 2068,
            "y": 530,
            "at": "l4:long"
          },
          {
            "id": "b-2t",
            "t": "text",
            "text": "Mất bao lâu",
            "x": 2143,
            "y": 505,
            "size": 50,
            "at": "l4:long+200"
          },
          {
            "id": "b-3",
            "t": "badge",
            "n": 3,
            "x": 2068,
            "y": 620,
            "at": "l4:bar"
          },
          {
            "id": "b-3t",
            "t": "text",
            "text": "Đoàn luật sư ở chặng nào",
            "x": 2143,
            "y": 595,
            "size": 50,
            "at": "l4:bar+200",
            "hl": [
              {
                "text": "chặng nào",
                "at": "l4:stands"
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
          "say": "So, after the change, who signs the certificate, and what path does the file take?",
          "sub": "Vậy sau phân cấp, ai ký chứng chỉ, hồ sơ đi đường nào?",
          "keys": [
            "ai ký"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not this: bar association, justice department, then the ministry.",
          "sub": "Không phải: Đoàn luật sư, Sở Tư pháp, rồi Bộ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But this: the justice department, then the provincial chair.",
          "sub": "Mà là: Sở Tư pháp, rồi Chủ tịch Uỷ ban nhân dân cấp tỉnh.",
          "keys": [
            "Chủ tịch Uỷ ban nhân dân cấp tỉnh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three things to watch: who does what, how long it takes, and where the bar association stands.",
          "sub": "Ba điều cần xem: ai làm gì, mất bao lâu, và Đoàn luật sư đứng ở chặng nào.",
          "keys": [
            "Ba điều"
          ]
        }
      ],
      "ref": "intro,p19"
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
            "text": "① Chiều ngày nộp · Đường cũ",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:afternoon"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "hot-beverage",
                "scroll"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:coffee",
            "caption": "Chiều ngày nộp · cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "c-17",
            "t": "text",
            "text": "Khoản 2 Điều 17 (VBHN 03):",
            "x": 3996,
            "y": 170,
            "size": 44,
            "at": "l4:Article"
          },
          {
            "id": "c-b0",
            "t": "box",
            "x": 3996,
            "y": 250,
            "w": 760,
            "h": 100,
            "at": "l4:board",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "c-bt0",
            "t": "text",
            "text": "Đoàn: 7 ngày làm việc",
            "x": 4021,
            "y": 272,
            "size": 44,
            "at": "l4:board+200"
          },
          {
            "id": "c-b1",
            "t": "box",
            "x": 3996,
            "y": 370,
            "w": 760,
            "h": 100,
            "at": "l4:department",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "c-bt1",
            "t": "text",
            "text": "Sở: 7 ngày làm việc",
            "x": 4021,
            "y": 392,
            "size": 44,
            "at": "l4:department+200"
          },
          {
            "id": "c-b2",
            "t": "box",
            "x": 3996,
            "y": 490,
            "w": 760,
            "h": 100,
            "at": "l5:minister",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "c-bt2",
            "t": "text",
            "text": "Bộ trưởng: 20 ngày",
            "x": 4021,
            "y": 512,
            "size": 44,
            "at": "l5:minister+200"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Luật Luật sư, văn bản hợp nhất 03/VBHN-VPQH",
            "x": 3996,
            "y": 735,
            "size": 26,
            "at": "l4",
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
          "say": "First stop: that afternoon, coffee with someone who knows the old road.",
          "sub": "Chặng một: chiều hôm ấy, cà phê với người thuộc con đường cũ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Uncle Bình, Thảo's uncle, a lawyer for decades, with a memory like a filing cabinet.",
          "sub": "Đây là Bác Bình, bác ruột Thảo, làm luật sư mấy chục năm, trí nhớ như tủ hồ sơ.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "In my day, the bar board took my file. Then it went up, step by step, to the minister.",
          "sub": "Thời bác, Ban chủ nhiệm Đoàn nhận hồ sơ. Rồi chuyển dần lên tới Bộ trưởng.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article seventeen's old path: the bar board forwards in seven working days. The justice department checks in seven more.",
          "sub": "Đường cũ ở khoản 2 Điều 17: Đoàn chuyển trong bảy ngày làm việc. Sở kiểm tra thêm bảy ngày làm việc."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then the minister of justice decides within twenty days of a complete, valid file.",
          "sub": "Rồi Bộ trưởng Bộ Tư pháp quyết định trong hai mươi ngày kể từ khi nhận đủ hồ sơ hợp lệ.",
          "keys": [
            "hai mươi ngày"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
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
            "id": "c-3",
            "t": "text",
            "text": "3 cửa, quyết ở trung ương",
            "x": 4836,
            "y": 690,
            "size": 40,
            "at": "l1:three",
            "hl": [
              {
                "text": "3 cửa",
                "at": "l1:three"
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
          "say": "Three offices in a row, and the decision at the centre.",
          "sub": "Ba cơ quan nối tiếp, người quyết định ở trung ương.",
          "keys": [
            "Ba cơ quan nối tiếp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Many seniors walked it, so their advice still says: go through the bar.",
          "sub": "Nhiều người đi trước đã đi đường này, nên lời khuyên truyền miệng vẫn là “nộp qua Đoàn”.",
          "keys": [
            "nộp qua Đoàn"
          ]
        }
      ],
      "ref": "p2"
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
            "at": "l2:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tối ngày nộp · Dũng gọi",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:evening"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
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
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:Dũng",
            "caption": "Tối ngày nộp · gọi video từ quê",
            "icon": "mobile-phone"
          },
          {
            "id": "d-hn",
            "t": "text",
            "text": "“Gửi ra Bộ, Hà Nội!”",
            "x": 5964,
            "y": 170,
            "size": 54,
            "at": "l2:Hanoi",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: that evening, a video call. This is Dũng, Thảo's classmate from probation, now back in his home province.",
          "sub": "Chặng hai: tối hôm ấy, gọi video. Đây là Dũng, bạn cùng khoá tập sự của Thảo, đang ở quê.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Easy! I'll post mine straight to the ministry in Hanoi. The minister signs, right?",
          "sub": "Dễ mà! Em gửi thẳng ra Bộ ở Hà Nội. Bộ trưởng ký mà, đúng không?",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 2200
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "online",
        "label": "Tối ngày nộp · gửi nhầm cửa",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Gửi hồ sơ ra Bộ ở Hà Nội",
          "why": "Từ 01/7/2025, Chủ tịch UBND cấp tỉnh quyết định; hồ sơ dừng ở Sở Tư pháp của tỉnh.",
          "rule": "Quyền ký về tỉnh, đường hồ sơ ngắn lại"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Ministry address, express post. Done!",
          "sub": "Địa chỉ Bộ, chuyển phát nhanh. Xong!",
          "pose": "thumb",
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
          "say": "Since July twenty twenty-five, the provincial chair decides. The file stops in the province.",
          "sub": "Từ 01/7/2025, Chủ tịch tỉnh quyết định. Hồ sơ dừng ở tỉnh.",
          "keys": [
            "Chủ tịch tỉnh quyết định"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Làm lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Okay. The justice department where I trained.",
          "sub": "Rồi. Sở Tư pháp nơi em tập sự.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. The power to sign moved to the province, and the path got shorter.",
          "sub": "Đúng. Quyền ký đã về tỉnh, đường hồ sơ cũng ngắn lại.",
          "phase": "redo",
          "keys": [
            "Quyền ký đã về tỉnh"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p5,p6"
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
            "at": "l1",
            "fit": [
              "d-121",
              "d-9",
              "d-11"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-121",
            "t": "text",
            "text": "NĐ 121/2025: ban hành 11/6/2025",
            "x": 5964,
            "y": 260,
            "size": 46,
            "at": "l1:June",
            "hl": [
              {
                "text": "11/6/2025",
                "at": "l1:June"
              }
            ]
          },
          {
            "id": "d-9",
            "t": "text",
            "text": "Điều 9: cấp → Chủ tịch tỉnh",
            "x": 5964,
            "y": 340,
            "size": 46,
            "at": "l2:Article",
            "color": "accent",
            "hl": [
              {
                "text": "Chủ tịch tỉnh",
                "at": "l2:chair"
              }
            ]
          },
          {
            "id": "d-11",
            "t": "text",
            "text": "Điều 11: cấp lại → cũng tỉnh",
            "x": 5964,
            "y": 420,
            "size": 46,
            "at": "l2:Reissuing"
          },
          {
            "id": "d-chk",
            "t": "text",
            "text": "Thẩm tra: pháp luật, đạo đức",
            "x": 5964,
            "y": 510,
            "size": 44,
            "at": "l3:moral"
          },
          {
            "id": "d-vi",
            "t": "text",
            "text": "Phát hiện, xử lý vi phạm",
            "x": 5964,
            "y": 590,
            "size": 44,
            "at": "l4:violations",
            "hl": [
              {
                "text": "vi phạm",
                "at": "l4:violations"
              }
            ]
          },
          {
            "id": "d-new",
            "t": "text",
            "text": "Bài 4/2026: vẫn là mới nhất",
            "x": 6804,
            "y": 690,
            "size": 40,
            "at": "l5:April",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Decree one twenty-one was issued on June eleventh, twenty twenty-five.",
          "sub": "Nghị định 121/2025 ban hành ngày 11/6/2025."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article nine gives granting to the provincial chair. Reissuing too, under Article eleven.",
          "sub": "Điều 9 giao việc cấp cho Chủ tịch tỉnh. Cấp lại cũng vậy, theo Điều 11.",
          "keys": [
            "Chủ tịch tỉnh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The chair also leads the check on respect for the constitution, the law, and moral character.",
          "sub": "Chủ tịch tỉnh còn chủ trì thẩm tra việc tuân thủ Hiến pháp, pháp luật và phẩm chất đạo đức."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And must detect and handle violations, or ask others to, under Article two-a.",
          "sub": "Và có trách nhiệm phát hiện, xử lý hoặc đề nghị xử lý vi phạm, theo Điều 2a.",
          "keys": [
            "vi phạm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "An April twenty twenty-six article still cites this power as the latest.",
          "sub": "Một bài tháng 4/2026 trên Thư viện Pháp luật vẫn dẫn thẩm quyền này là mới nhất."
        }
      ],
      "ref": "p3,p4,p5"
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
            "text": "③ Tuần đầu · Ở Sở Tư pháp",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:week"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "hold"
                }
              ],
              "props": [
                "file-folder",
                "magnifying-glass-tilted-left"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:file",
            "caption": "Tuần đầu · bàn tiếp nhận của Sở",
            "icon": "file-folder"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Đạt kiểm tra → Sở nơi tập sự",
            "x": 7932,
            "y": 170,
            "size": 44,
            "at": "l2:trained"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Miễn tập sự → Sở nơi thường trú",
            "x": 7932,
            "y": 250,
            "size": 44,
            "at": "l2:exempt",
            "color": "muted"
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "5 ngày làm việc",
            "x": 7932,
            "y": 350,
            "size": 70,
            "at": "l3:five",
            "color": "accent",
            "hl": [
              {
                "text": "5 ngày làm việc",
                "at": "l3:working"
              }
            ]
          },
          {
            "id": "e-v2",
            "t": "text",
            "text": "kiểm tra, xác minh khi cần",
            "x": 7932,
            "y": 460,
            "size": 44,
            "at": "l3:verifies"
          },
          {
            "id": "e-up",
            "t": "text",
            "text": "→ văn bản đề nghị + hồ sơ",
            "x": 7932,
            "y": 540,
            "size": 44,
            "at": "l4:proposal",
            "hl": [
              {
                "text": "văn bản đề nghị",
                "at": "l4:proposal"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Mục I Phụ lục III NĐ 121/2025, theo các bài hướng dẫn",
            "x": 7932,
            "y": 735,
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
          "say": "Third stop: the first week. Thảo's file sits at the receiving desk of the justice department.",
          "sub": "Chặng ba: tuần đầu. Hồ sơ của Thảo nằm ở bàn tiếp nhận của Sở Tư pháp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Passed the test? The department where you trained. Exempt? The one where you permanently live.",
          "sub": "Đạt kiểm tra thì nộp ở Sở nơi tập sự. Được miễn tập sự thì ở Sở nơi thường trú."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The department checks it in five working days from a complete, valid file, and verifies when needed.",
          "sub": "Sở kiểm tra trong năm ngày làm việc kể từ khi nhận đủ hồ sơ hợp lệ, xác minh khi cần.",
          "keys": [
            "năm ngày làm việc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then it sends a written proposal, with the file, up to the provincial chair.",
          "sub": "Rồi có văn bản đề nghị, kèm hồ sơ, gửi Chủ tịch Uỷ ban nhân dân cấp tỉnh.",
          "keys": [
            "văn bản đề nghị"
          ]
        }
      ],
      "ref": "p7"
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
            "fit": "F",
            "ms": 900
          },
          {
            "at": "l3",
            "fit": [
              "f-lltp",
              "f-res"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Tuần sau · Trên bàn tỉnh",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:desk"
          },
          {
            "id": "f-ic",
            "t": "illus",
            "name": "classical-building",
            "x": 1350,
            "y": 1250,
            "size": 240,
            "at": "l1:desk"
          },
          {
            "id": "f-10",
            "t": "text",
            "text": "10 ngày làm việc",
            "x": 60,
            "y": 1260,
            "size": 70,
            "at": "l2:ten",
            "color": "accent",
            "hl": [
              {
                "text": "10 ngày làm việc",
                "at": "l2:working"
              }
            ]
          },
          {
            "id": "f-dec",
            "t": "text",
            "text": "cấp hoặc từ chối",
            "x": 60,
            "y": 1370,
            "size": 48,
            "at": "l2:refuses"
          },
          {
            "id": "f-lltp",
            "t": "text",
            "text": "LLTP: 3 ngày, không tính",
            "x": 60,
            "y": 1460,
            "size": 46,
            "at": "l3:three",
            "color": "muted",
            "hl": [
              {
                "text": "không tính",
                "at": "l3:counted"
              }
            ]
          },
          {
            "id": "f-res",
            "t": "text",
            "text": "Kết quả: tại Sở hoặc bưu chính",
            "x": 60,
            "y": 1540,
            "size": 44,
            "at": "l4:post"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Tạp chí Luật sư Việt Nam — mốc tính khi Sở nhận đủ hồ sơ hợp lệ",
            "x": 60,
            "y": 1825,
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
          "say": "Fourth stop: the next week, the file lands on the provincial chair's desk.",
          "sub": "Chặng bốn: tuần sau, hồ sơ lên bàn Chủ tịch tỉnh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The chair grants or refuses within ten working days, counted from when the department got a complete, valid file.",
          "sub": "Chủ tịch tỉnh cấp hoặc từ chối trong mười ngày làm việc, tính từ khi Sở nhận đủ hồ sơ hợp lệ.",
          "keys": [
            "mười ngày làm việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The record agency's three working days are not counted.",
          "sub": "Ba ngày làm việc của cơ quan lý lịch tư pháp không tính vào thời hạn.",
          "keys": [
            "không tính"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Results come at the department where you submitted, or by post.",
          "sub": "Kết quả nhận tại Sở Tư pháp nơi nộp, hoặc qua bưu chính."
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s10",
      "module": "BRK-12",
      "data": {
        "word": "hồ sơ hợp lệ",
        "sub": "Mốc thời hạn chỉ chạy khi hồ sơ đủ và đúng",
        "from": [
          1150,
          520
        ],
        "others": [
          "10 ngày",
          "Sở",
          "tỉnh"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two little words: valid file.",
          "sub": "Hai chữ nhỏ: hồ sơ hợp lệ.",
          "keys": [
            "hồ sơ hợp lệ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The clock only starts when the file is complete and correct.",
          "sub": "Mốc thời hạn chỉ chạy khi hồ sơ đủ và đúng."
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-sup",
            "t": "text",
            "text": "Thiếu, lệch → Sở hướng dẫn bổ sung",
            "x": 60,
            "y": 1630,
            "size": 42,
            "at": "l1:supplement",
            "color": "coral",
            "hl": [
              {
                "text": "bổ sung",
                "at": "l1:supplement"
              }
            ]
          },
          {
            "id": "f-ask",
            "t": "text",
            "text": "Cách đếm ở tỉnh mình → hỏi Sở",
            "x": 60,
            "y": 1710,
            "size": 42,
            "at": "l2:ask",
            "hl": [
              {
                "text": "hỏi Sở",
                "at": "l2:ask"
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
          "say": "Missing papers or mismatched details? The department guides you to supplement, and the clock waits.",
          "sub": "Thiếu giấy hay thông tin chưa thống nhất? Sở hướng dẫn bổ sung, đồng hồ đứng chờ.",
          "keys": [
            "bổ sung"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "How your province counts the days exactly? Ask when you submit. Enter a house, follow its customs.",
          "sub": "Tỉnh mình đếm ngày cụ thể thế nào? Hỏi Sở khi nộp. Nhập gia tuỳ tục.",
          "keys": [
            "Hỏi Sở khi nộp"
          ]
        }
      ],
      "ref": "p9"
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
            "text": "⑤ Tối ngày nộp · Bảng theo dõi",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:table"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-calendar",
                "clipboard"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:table",
            "caption": "Tối ngày nộp · bảng bốn dòng",
            "icon": "clipboard"
          },
          {
            "id": "g-b0",
            "t": "badge",
            "n": 1,
            "x": 2058,
            "y": 1290,
            "at": "l2:date"
          },
          {
            "id": "g-s0",
            "t": "text",
            "text": "Ngày nộp + giữ biên nhận",
            "x": 2108,
            "y": 1265,
            "size": 40,
            "at": "l2:date+200"
          },
          {
            "id": "g-b1",
            "t": "badge",
            "n": 2,
            "x": 2058,
            "y": 1390,
            "at": "l3:confirmed"
          },
          {
            "id": "g-s1",
            "t": "text",
            "text": "Ngày Sở xác nhận đủ",
            "x": 2108,
            "y": 1365,
            "size": 40,
            "at": "l3:confirmed+200",
            "color": "coral"
          },
          {
            "id": "g-b2",
            "t": "badge",
            "n": 3,
            "x": 2058,
            "y": 1490,
            "at": "l4:five"
          },
          {
            "id": "g-s2",
            "t": "text",
            "text": "Mốc 5 + 10 ngày, trừ nghỉ",
            "x": 2108,
            "y": 1465,
            "size": 40,
            "at": "l4:five+200"
          },
          {
            "id": "g-b3",
            "t": "badge",
            "n": 4,
            "x": 2058,
            "y": 1590,
            "at": "l5:phone"
          },
          {
            "id": "g-s3",
            "t": "text",
            "text": "Số điện thoại một cửa",
            "x": 2108,
            "y": 1565,
            "size": 40,
            "at": "l5:phone+200"
          },
          {
            "id": "g-key",
            "t": "text",
            "text": "Mốc chạy từ hồ sơ hợp lệ",
            "x": 2028,
            "y": 1700,
            "size": 50,
            "at": "l6:valid",
            "color": "accent",
            "hl": [
              {
                "text": "hồ sơ hợp lệ",
                "at": "l6:valid"
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
          "say": "Fifth stop, back to that first evening: Thảo draws a small tracking table.",
          "sub": "Chặng năm, quay về tối ngày nộp: Thảo kẻ một bảng theo dõi nhỏ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One: the submission date, and keep the receipt.",
          "sub": "Một: ngày nộp, giữ giấy biên nhận.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Two: the date the office confirmed my file complete. The deadlines count from that.",
          "sub": "Hai: ngày Sở xác nhận hồ sơ đã đủ. Mốc tính từ ngày đó."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Three: five working days, then ten. Minus the days off.",
          "sub": "Ba: năm ngày làm việc, rồi mười ngày. Nhớ trừ ngày nghỉ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Four: the one-stop desk's phone number, for when a date passes.",
          "sub": "Bốn: số điện thoại bộ phận một cửa, để hỏi khi quá mốc."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The clock runs from a valid file, not from the day you hand it in.",
          "sub": "Mốc thời hạn chạy từ hồ sơ hợp lệ, không chạy từ ngày nộp.",
          "keys": [
            "không chạy từ ngày nộp"
          ]
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Quá mốc trên bảng mà vẫn chưa có tin?",
        "illus": "hourglass-not-done"
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
          "say": "What if the date passes, and still no news?",
          "sub": "Nếu quá mốc mà vẫn chưa có tin thì sao?",
          "keys": [
            "chưa có tin"
          ]
        }
      ],
      "ref": "p16"
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
            "text": "⑥ Quá mốc · Gọi một cửa",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:passed"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "phone",
                  "face": "thinking"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
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
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
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
            "at": "l1:passed",
            "caption": "Quá mốc trên bảng · gọi Sở",
            "icon": "telephone-receiver"
          },
          {
            "id": "h-num",
            "t": "text",
            "text": "Hỏi bằng số biên nhận",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l3:number",
            "hl": [
              {
                "text": "số biên nhận",
                "at": "l3:number"
              }
            ]
          },
          {
            "id": "h-wait",
            "t": "text",
            "text": "Chờ thông tin lý lịch tư pháp",
            "x": 3996,
            "y": 1350,
            "size": 46,
            "at": "l4:record",
            "color": "coral"
          },
          {
            "id": "h-nc",
            "t": "text",
            "text": "→ phần này không tính",
            "x": 3996,
            "y": 1430,
            "size": 46,
            "at": "l4:counted",
            "hl": [
              {
                "text": "không tính",
                "at": "l4:counted"
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
          "say": "Sixth stop: the date on Thảo's table has passed. Silence.",
          "sub": "Chặng sáu: mốc trên bảng của Thảo đã qua. Im ắng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "On the line, Lan, an officer at the department's one-stop desk.",
          "sub": "Đầu dây là Lan, cán bộ bộ phận một cửa của Sở.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Hello, I'm checking on my certificate file. My receipt number is right here.",
          "sub": "Chào chị, em hỏi hồ sơ cấp chứng chỉ. Em đọc số biên nhận ạ.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Found it. It's waiting for judicial record information, and that time isn't counted.",
          "sub": "Thấy rồi. Hồ sơ đang chờ thông tin lý lịch tư pháp, phần thời gian đó không tính.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Ask with your receipt number, and judge the answer against your deadlines.",
          "sub": "Hỏi bằng số biên nhận, nghe câu trả lời bằng mốc thời hạn.",
          "keys": [
            "nghe câu trả lời bằng mốc thời hạn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p16,p17"
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
          }
        ],
        "items": [
          {
            "id": "h-two",
            "t": "text",
            "text": "Hai khả năng:",
            "x": 3996,
            "y": 1540,
            "size": 48,
            "at": "l1:two"
          },
          {
            "id": "h-ok",
            "t": "text",
            "text": "✓ Quyết định cấp chứng chỉ",
            "x": 3996,
            "y": 1615,
            "size": 44,
            "at": "l1:granting",
            "color": "accent"
          },
          {
            "id": "h-no",
            "t": "text",
            "text": "✗ Từ chối, nêu rõ lý do",
            "x": 3996,
            "y": 1690,
            "size": 44,
            "at": "l1:refusal",
            "color": "coral"
          },
          {
            "id": "h-17",
            "t": "text",
            "text": "→ khiếu nại, khiếu kiện",
            "x": 3996,
            "y": 1765,
            "size": 44,
            "at": "l2:complain",
            "hl": [
              {
                "text": "khiếu nại, khiếu kiện",
                "at": "l2:complain"
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
          "say": "When the letter comes, two possibilities: a decision granting it, or a refusal with clear reasons.",
          "sub": "Khi có văn bản, hai khả năng: quyết định cấp chứng chỉ, hoặc văn bản từ chối nêu rõ lý do."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "If refused, Article seventeen gives you the right to complain or to sue.",
          "sub": "Bị từ chối thì khoản 3 Điều 17 cho quyền khiếu nại, khiếu kiện.",
          "keys": [
            "khiếu nại, khiếu kiện"
          ]
        }
      ],
      "ref": "p18"
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
            "at": "l3",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Có chứng chỉ · Đoàn nào?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:bar"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:Dũng",
            "caption": "Sau khi có chứng chỉ · Dũng gọi",
            "icon": "world-map"
          },
          {
            "id": "i-no",
            "t": "text",
            "text": "Mới: Đoàn không chuyển hồ sơ",
            "x": 5964,
            "y": 1260,
            "size": 36,
            "at": "l3:forwarding",
            "color": "muted"
          },
          {
            "id": "i-20",
            "t": "text",
            "text": "Điều 20: hành nghề nơi có Đoàn",
            "x": 5964,
            "y": 1340,
            "size": 44,
            "at": "l4:practise",
            "color": "accent",
            "hl": [
              {
                "text": "nơi có Đoàn",
                "at": "l4:based"
              }
            ]
          },
          {
            "id": "i-sub",
            "t": "text",
            "text": "Chứng chỉ: Sở nơi tập sự",
            "x": 5964,
            "y": 1430,
            "size": 46,
            "at": "l5:trained"
          },
          {
            "id": "i-doan",
            "t": "text",
            "text": "Đoàn: tỉnh quê, nơi hành nghề",
            "x": 5964,
            "y": 1510,
            "size": 46,
            "at": "l5:home",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: certificate in hand, the bar question. Dũng calls again.",
          "sub": "Chặng bảy: có chứng chỉ rồi, đến chuyện Đoàn. Dũng gọi lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I trained in one province, but I want to practise back home. Which bar do I join?",
          "sub": "Em tập sự một tỉnh, mà muốn về quê hành nghề. Gia nhập Đoàn nào?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First, the new guides no longer mention the bar board forwarding your certificate file.",
          "sub": "Trước hết, các bài hướng dẫn mới không còn nhắc bước Đoàn chuyển hồ sơ cấp chứng chỉ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The bar's big role comes later. Article twenty: you join one, and practise where it is based.",
          "sub": "Vai trò lớn của Đoàn ở chặng sau. Điều 20: gia nhập một Đoàn và hành nghề tại địa phương có Đoàn đó.",
          "keys": [
            "hành nghề tại địa phương có Đoàn đó"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So Dũng's certificate file went where he trained. His bar is the one at home, where he will practise.",
          "sub": "Vậy hồ sơ chứng chỉ của Dũng nộp ở Sở nơi tập sự. Còn Đoàn thì chọn ở quê, nơi sẽ hành nghề."
        }
      ],
      "ref": "p12,p14"
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
            "id": "i-7",
            "t": "text",
            "text": "Đoàn xét: 7 ngày làm việc",
            "x": 5964,
            "y": 1600,
            "size": 38,
            "at": "l1:seven",
            "hl": [
              {
                "text": "7 ngày làm việc",
                "at": "l1:seven"
              }
            ]
          },
          {
            "id": "i-x",
            "t": "text",
            "text": "Từ chối: khoản 4 Điều 17",
            "x": 5964,
            "y": 1665,
            "size": 38,
            "at": "l1:refuses",
            "color": "muted"
          },
          {
            "id": "i-card",
            "t": "text",
            "text": "Liên đoàn cấp Thẻ: ≤ 20 ngày",
            "x": 5964,
            "y": 1730,
            "size": 44,
            "at": "l2:twenty",
            "hl": [
              {
                "text": "≤ 20 ngày",
                "at": "l2:twenty"
              }
            ]
          },
          {
            "id": "i-key",
            "t": "text",
            "text": "Tập sự → cửa nộp · hành nghề → Đoàn",
            "x": 6784,
            "y": 1790,
            "size": 36,
            "at": "l3:decides",
            "color": "accent",
            "hl": [
              {
                "text": "hành nghề → Đoàn",
                "at": "l3:practice"
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
          "say": "The bar board decides in seven working days, and refuses anyone in the clause four groups.",
          "sub": "Ban chủ nhiệm Đoàn quyết định trong bảy ngày làm việc, từ chối người thuộc khoản 4 Điều 17."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then the Vietnam Bar Federation issues the lawyer card, within twenty days at most.",
          "sub": "Rồi Liên đoàn Luật sư Việt Nam cấp Thẻ luật sư, không quá hai mươi ngày.",
          "keys": [
            "không quá hai mươi ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Your training place decides the door. Your practice place decides the bar.",
          "sub": "Nơi tập sự quyết định cửa nộp, nơi hành nghề quyết định Đoàn.",
          "keys": [
            "nơi hành nghề quyết định Đoàn"
          ]
        }
      ],
      "ref": "p13,p15"
    },
    {
      "id": "s18",
      "module": "BRK-04",
      "data": {
        "title": "Bảng nhớ nhanh",
        "labels": [
          "Cũ",
          "Mới"
        ],
        "wrong": "Đoàn → Sở → Bộ trưởng: 7 + 7 + 20 ngày",
        "right": "Sở nơi tập sự → Chủ tịch tỉnh: 5 + 10 ngày",
        "wrongIllus": "scroll",
        "rightIllus": "classical-building"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Old: bar, department, minister. Seven, seven, twenty.",
          "sub": "Cũ: Đoàn, Sở, Bộ trưởng. Bảy, bảy, hai mươi.",
          "keys": [
            "Cũ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "New: department, provincial chair. Five, then ten working days.",
          "sub": "Mới: Sở, Chủ tịch tỉnh. Năm, rồi mười ngày làm việc.",
          "keys": [
            "Mới"
          ]
        }
      ],
      "ref": "p19"
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
            "text": "Một tối · Có tin từ Sở",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:room"
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
                  "id": "thao",
                  "side": "left",
                  "face": "happy",
                  "pose": "phone"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "scroll",
                "clipboard"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:evening",
            "caption": "Một tối · cả nhà",
            "icon": "scroll"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1265,
            "w": 46,
            "h": 46,
            "at": "l2:department",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1247,
            "size": 58,
            "at": "l2:department+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Biết Sở nơi tập sự",
            "x": 8000,
            "y": 1255,
            "size": 38,
            "at": "l2:department+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1345,
            "w": 46,
            "h": 46,
            "at": "l2:receipt",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1327,
            "size": 58,
            "at": "l2:receipt+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Biên nhận + ngày đủ hồ sơ",
            "x": 8000,
            "y": 1335,
            "size": 38,
            "at": "l2:receipt+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1425,
            "w": 46,
            "h": 46,
            "at": "l2:days",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1407,
            "size": 58,
            "at": "l2:days+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Mốc đã trừ ngày nghỉ",
            "x": 8000,
            "y": 1415,
            "size": 38,
            "at": "l2:days+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1505,
            "w": 46,
            "h": 46,
            "at": "l2:collect",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1487,
            "size": 58,
            "at": "l2:collect+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Nhận tại Sở hay bưu chính",
            "x": 8000,
            "y": 1495,
            "size": 38,
            "at": "l2:collect+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1585,
            "w": 46,
            "h": 46,
            "at": "l3:bar",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1567,
            "size": 58,
            "at": "l3:bar+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Đoàn ở địa phương nào",
            "x": 8000,
            "y": 1575,
            "size": 38,
            "at": "l3:bar+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Nộp tỉnh nào, hỏi Sở ấy",
            "x": 7932,
            "y": 1690,
            "size": 50,
            "at": "l4:customs",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi Sở ấy",
                "at": "l4:ask"
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
          "say": "One evening, the same living room. A message from the justice department.",
          "sub": "Một tối, vẫn phòng khách ấy. Tin nhắn từ Sở Tư pháp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Result's ready! Right department, receipt kept, days counted, I'll collect it in person.",
          "sub": "Có kết quả rồi! Đúng Sở, giữ biên nhận, đếm đúng ngày, em lên Sở nhận trực tiếp.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Your road is shorter than mine was. Now, which bar?",
          "sub": "Đường của con ngắn hơn đường của bác. Giờ thì, Đoàn nào?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Enter a house, follow its customs. Submit in a province, ask that department.",
          "sub": "“Nhập gia tuỳ tục”: nộp ở tỉnh nào, hỏi Sở tỉnh ấy.",
          "keys": [
            "hỏi Sở tỉnh ấy"
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
      "ref": "p20"
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
            "at": "l1:chair",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:valid",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:bar",
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
            "x": 6684,
            "y": 360,
            "at": "l1:chair"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 2748,
            "y": 1730,
            "at": "l2:valid"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6684,
            "y": 1360,
            "at": "l3:joining"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức nghề, không phải tư vấn vụ việc cụ thể; nhân vật là minh hoạ. Luật đang sửa đổi, kiểm thủ tục tại Sở.",
            "x": 7932,
            "y": 1825,
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
          "say": "So: since July twenty twenty-five, the provincial chair decides, after the justice department checks.",
          "sub": "Tóm lại: từ 01/7/2025, Chủ tịch tỉnh quyết định, sau khi Sở Tư pháp kiểm tra.",
          "keys": [
            "Chủ tịch tỉnh quyết định"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five plus ten working days, counted from a valid file.",
          "sub": "Năm cộng mười ngày làm việc, tính từ hồ sơ hợp lệ.",
          "keys": [
            "hồ sơ hợp lệ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The bar waits at the joining stage. And the law is being amended, so recheck the procedure.",
          "sub": "Đoàn luật sư chờ ở chặng gia nhập. Luật đang sửa đổi, nhớ kiểm lại thủ tục.",
          "keys": [
            "chặng gia nhập"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s21",
      "module": "QUIZ-01",
      "data": {
        "q": "When does the deadline actually start running?",
        "options": [
          "When the department has received a complete and valid file",
          "When the applicant passes the probation test several months earlier",
          "When the applicant first downloads the form from the internet"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "hourglass-not-done",
        "why": "Mốc thời hạn chỉ bắt đầu khi Sở Tư pháp nhận đủ hồ sơ hợp lệ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "When does the deadline actually start running?",
          "sub": "Mốc thời hạn thực sự bắt đầu chạy khi nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "When the department has received a complete and valid file.",
          "sub": "Khi Sở Tư pháp đã nhận đủ hồ sơ hợp lệ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Not from the day you hand it in.",
          "sub": "Không phải từ ngày nộp."
        }
      ],
      "ref": "questions[15]"
    },
    {
      "id": "s22",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi kẻ bảng theo dõi bốn dòng cho hồ sơ"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, draw your four-line tracking table.",
          "sub": "Hôm nay, kẻ bảng theo dõi bốn dòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-24 (vật neo: ngày 01/7/2025 → chữ ký về tỉnh). Bảng 10 ô theo HÀNH TRÌNH BỘ HỒ SƠ của Thảo: ngày nộp → chiều cà phê Bác Bình kể đường cũ (7 + 7 + 20) → tối Dũng định gửi ra Bộ (“Khoan đã!”) + NĐ 121/2025 → tuần đầu ở Sở (5 ngày) → tuần sau Chủ tịch tỉnh (10 ngày, BRK-12 “hồ sơ hợp lệ”) → bảng theo dõi 4 dòng → quá mốc gọi một cửa (Lan) → hai khả năng → Dũng chọn Đoàn ở quê → BRK-04 bảng nhớ nhanh cũ/mới → một tối có tin, khép vòng “Nhập gia tuỳ tục”. Nhân vật theo w145/_series/bar-practising-certificate.md: Thảo (p10, p16), Bác Bình (đường cũ p1–p2), Dũng (p14), Lan (cán bộ một cửa p16). Số/điều chỉ từ bài: khoản 2, 3, 4 Điều 17, Điều 20, Điều 2a Luật Luật sư; NĐ 121/2025 ngày 11/6/2025, Điều 9, 11, 01/7/2025; 7/7/20 ngày; 5 + 10 ngày làm việc; 3 ngày LLTP; 7 ngày làm việc; ≤ 20 ngày cấp Thẻ; bài 4/2026, 8/2025. BRK: s10 BRK-12, s13 BRK-07, s18 BRK-04; DLG s06. Câu đố questions[15]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
