// law-arbitration-clause--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "law-arbitration-clause--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "law-arbitration-inhouse",
    "slug": "law-arbitration-clause",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Viết điều khoản trọng tài thế nào để không bị vô hiệu?",
    "series": "Đi trọng tài thương mại từ điều khoản đến phán quyết — cho pháp chế doanh nghiệp theo Quy tắc VIAC 2026"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "presenter": {
    "side": "left"
  },
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
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
            "id": "a-cl",
            "t": "text",
            "text": "“Trọng tài hoặc toà án”",
            "x": 60,
            "y": 40,
            "size": 64,
            "at": "l1:arbitration",
            "hl": [
              {
                "text": "hoặc",
                "at": "l1:or"
              }
            ]
          },
          {
            "id": "a-b1",
            "t": "box",
            "x": 60,
            "y": 170,
            "w": 600,
            "h": 130,
            "at": "l2:safer",
            "stroke": 6
          },
          {
            "id": "a-safe",
            "t": "text",
            "text": "Chắc ăn?",
            "x": 110,
            "y": 180,
            "size": 90,
            "at": "l2:safer+200"
          },
          {
            "id": "a-b2",
            "t": "box",
            "x": 60,
            "y": 330,
            "w": 600,
            "h": 130,
            "at": "l2:riskier",
            "stroke": 6
          },
          {
            "id": "a-risk",
            "t": "text",
            "text": "Rủi ro?",
            "x": 110,
            "y": 340,
            "size": 90,
            "at": "l2:riskier+200",
            "color": "accent"
          },
          {
            "id": "a-safex",
            "t": "strike",
            "over": "a-safe",
            "at": "l3:Riskier"
          },
          {
            "id": "a-ring",
            "t": "ring",
            "around": [
              "a-risk"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:Riskier"
          },
          {
            "id": "a-why",
            "t": "text",
            "text": "Hai cửa → cãi nhau chọn cửa",
            "x": 60,
            "y": 500,
            "size": 48,
            "at": "l3:fight",
            "color": "coral",
            "hl": [
              {
                "text": "cãi nhau",
                "at": "l3:fight"
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
          "say": "One clause, two doors: arbitration, or the competent court.",
          "sub": "Một điều khoản, hai cửa: “trọng tài hoặc toà án có thẩm quyền”.",
          "keys": [
            "hai cửa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Quick guess. Is that safer, or riskier?",
          "sub": "Đoán nhanh: như vậy chắc ăn hơn, hay rủi ro hơn?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Riskier. Open two doors, and you first fight over which door.",
          "sub": "Rủi ro hơn. Mở hai cửa thì phải cãi nhau xem đi cửa nào trước.",
          "keys": [
            "cãi nhau xem đi cửa nào"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A clause is a few lines. One wrong word, and the case can go back to court.",
          "sub": "Điều khoản chỉ vài dòng; sai một chữ là vụ có thể quay về toà."
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
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "page-facing-up",
                "fountain-pen"
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
            "caption": "Chiều thứ Ba · 13:30",
            "icon": "page-facing-up"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "3 hợp đồng · 3 điều khoản",
            "x": 60,
            "y": 590,
            "size": 46,
            "at": "l2:three"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Giấy trắng mực đen”",
            "x": 60,
            "y": 670,
            "size": 54,
            "at": "l4:paper",
            "color": "accent",
            "hl": [
              {
                "text": "mực đen",
                "at": "l4:ink"
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
          "say": "Meet Thảo, in-house counsel, four years in legal.",
          "sub": "Đây là Thảo, pháp chế bốn năm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tuesday, one thirty. On her desk: three big contracts, their dispute clauses copied out.",
          "sub": "Chiều thứ Ba, một rưỡi. Trên bàn: ba hợp đồng lớn, điều khoản tranh chấp đã chép ra."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Distribution, equipment, services. Three clauses, one afternoon.",
          "sub": "Phân phối, thiết bị, dịch vụ. Ba điều khoản, một buổi chiều.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "As Grandma says: paper white, ink black. What's written, stands.",
          "sub": "Ông bà dặn: “Giấy trắng mực đen.” Đã viết là phải chịu.",
          "keys": [
            "Giấy trắng mực đen"
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
            "text": "Viết sao để không vô hiệu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:write",
            "hl": [
              {
                "text": "không vô hiệu",
                "at": "l1:void"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: để ngỏ mọi cửa",
            "x": 2028,
            "y": 160,
            "size": 52,
            "at": "l2:open",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:But"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: một cơ chế, đúng tên",
            "x": 2028,
            "y": 250,
            "size": 56,
            "at": "l2:one",
            "color": "accent",
            "hl": [
              {
                "text": "một cơ chế",
                "at": "l2:mechanism"
              }
            ]
          },
          {
            "id": "b-yes2",
            "t": "text",
            "text": "+ chốt đủ thông số",
            "x": 2068,
            "y": 330,
            "size": 50,
            "at": "l2:setting"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Hình thức · Vô hiệu",
            "x": 2028,
            "y": 420,
            "size": 44,
            "at": "l3:form"
          },
          {
            "id": "b-4b",
            "t": "text",
            "text": "Không thực hiện · Thông số",
            "x": 2028,
            "y": 480,
            "size": 44,
            "at": "l3:unworkable"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you write an arbitration clause that won't be held void?",
          "sub": "Vậy viết điều khoản trọng tài thế nào để không bị vô hiệu?",
          "keys": [
            "không bị vô hiệu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not by leaving every door open. But one mechanism, the right name, every setting fixed.",
          "sub": "Không phải để ngỏ mọi cửa. Mà là một cơ chế, đúng tên, chốt đủ thông số.",
          "keys": [
            "một cơ chế"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Four tests this afternoon: form, void grounds, unworkable clauses, settings.",
          "sub": "Bốn phép thử chiều nay: hình thức, vô hiệu, không thực hiện được, thông số."
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
            "fit": [
              "b-d0",
              "b-d6"
            ],
            "zoom": 1.05,
            "ms": 800
          },
          {
            "at": "l1:end",
            "fit": "B",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "b-day",
            "t": "text",
            "text": "Một chiều · 7 chặng",
            "x": 2028,
            "y": 530,
            "size": 50,
            "at": "l1:seven",
            "hl": [
              {
                "text": "7 chặng",
                "at": "l1:seven"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 205,
            "h": 90,
            "at": "l1:seven+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2258,
            "y": 610,
            "w": 205,
            "h": 90,
            "at": "l1:seven+850",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2488,
            "y": 610,
            "w": 205,
            "h": 90,
            "at": "l1:seven+1100",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2718,
            "y": 610,
            "w": 205,
            "h": 90,
            "at": "l1:seven+1350",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2948,
            "y": 610,
            "w": 205,
            "h": 90,
            "at": "l1:seven+1600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3178,
            "y": 610,
            "w": 205,
            "h": 90,
            "at": "l1:seven+1850",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3408,
            "y": 610,
            "w": 205,
            "h": 90,
            "at": "l1:seven+2100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "13:45",
            "x": 2048,
            "y": 625,
            "size": 44,
            "at": "l1:seven+720"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "14:15",
            "x": 2278,
            "y": 625,
            "size": 44,
            "at": "l1:seven+970"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "15:00",
            "x": 2508,
            "y": 625,
            "size": 44,
            "at": "l1:seven+1220"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "15:45",
            "x": 2738,
            "y": 625,
            "size": 44,
            "at": "l1:seven+1470"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "16:30",
            "x": 2968,
            "y": 625,
            "size": 44,
            "at": "l1:seven+1720"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "17:00",
            "x": 3198,
            "y": 625,
            "size": 44,
            "at": "l1:seven+1970"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "17:30",
            "x": 3428,
            "y": 625,
            "size": 44,
            "at": "l1:seven+2220"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One afternoon, seven stops. Pens ready.",
          "sub": "Một buổi chiều, bảy chặng. Cầm bút lên nào.",
          "keys": [
            "bảy chặng"
          ]
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 13:45 · Thoả thuận là gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:stop one"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "open-book",
                "envelope"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:agreement",
            "caption": "13:45 · bàn của Thảo",
            "icon": "open-book"
          },
          {
            "id": "c-d3",
            "t": "text",
            "text": "Giải quyết bằng trọng tài",
            "x": 3996,
            "y": 160,
            "size": 48,
            "at": "l2:settle"
          },
          {
            "id": "c-d3b",
            "t": "text",
            "text": "tranh chấp có thể / đã phát sinh",
            "x": 4026,
            "y": 230,
            "size": 40,
            "at": "l2:may"
          },
          {
            "id": "c-16",
            "t": "text",
            "text": "Điều khoản hoặc văn bản riêng",
            "x": 3996,
            "y": 310,
            "size": 46,
            "at": "l3:clause"
          },
          {
            "id": "c-vb",
            "t": "text",
            "text": "Bằng văn bản: kể cả email, fax",
            "x": 3996,
            "y": 395,
            "size": 46,
            "at": "l4:written",
            "color": "accent",
            "hl": [
              {
                "text": "email, fax",
                "at": "l4:emails"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Luật TTTM 2010: khoản 2 Điều 3 · Điều 16",
            "x": 3996,
            "y": 465,
            "size": 26,
            "at": "l2",
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
          "say": "Stop one, one forty-five. What is an arbitration agreement?",
          "sub": "Chặng một, 13:45. Thoả thuận trọng tài là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "An agreement to settle by arbitration a dispute that may arise, or already has.",
          "sub": "Khoản 2 Điều 3: thoả thuận giải quyết bằng trọng tài tranh chấp có thể hoặc đã phát sinh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A clause in the contract, or a separate document.",
          "sub": "Có thể là một điều khoản trong hợp đồng, hoặc một văn bản riêng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article sixteen: it must be written. Emails and faxes count.",
          "sub": "Điều 16: phải bằng văn bản; thư điện tử, fax cũng được coi là văn bản.",
          "keys": [
            "thư điện tử, fax"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "at": "l1",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-h1",
            "t": "text",
            "text": "HĐ 1: “qua điện thoại”",
            "x": 3996,
            "y": 540,
            "size": 36,
            "at": "l1:phone",
            "color": "coral"
          },
          {
            "id": "c-e1",
            "t": "text",
            "text": "Miệng, rải rác → lỗi hình thức",
            "x": 3996,
            "y": 600,
            "size": 44,
            "at": "l2:oral",
            "hl": [
              {
                "text": "lỗi hình thức",
                "at": "l2:form"
              }
            ]
          },
          {
            "id": "c-h2",
            "t": "text",
            "text": "HĐ 2: sáp nhập → kế thừa",
            "x": 3996,
            "y": 670,
            "size": 40,
            "at": "l3:merged",
            "color": "accent",
            "hl": [
              {
                "text": "kế thừa",
                "at": "l3:successor"
              }
            ]
          },
          {
            "id": "c-src5",
            "t": "text",
            "text": "Luật TTTM, Điều 5",
            "x": 3996,
            "y": 725,
            "size": 26,
            "at": "l3",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Contract one says: arbitration, as agreed by phone.",
          "sub": "Hợp đồng một ghi: “trọng tài như đã thống nhất qua điện thoại”.",
          "face": "surprised"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Oral only, or scattered with no clear consensus: a classic form error.",
          "sub": "Chỉ nói miệng, hoặc rải rác không thể hiện sự thống nhất: lỗi hình thức hay gặp.",
          "keys": [
            "lỗi hình thức"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Good news on contract two: the partner merged. The clause still binds the successor, Article five.",
          "sub": "Tin vui ở hợp đồng hai: đối tác sáp nhập. Thoả thuận vẫn ràng buộc tổ chức kế thừa, Điều 5.",
          "keys": [
            "tổ chức kế thừa"
          ]
        }
      ],
      "ref": "p2,p3"
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
            "text": "② 14:15 · Sáu cửa vô hiệu",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two",
            "hl": [
              {
                "text": "vô hiệu",
                "at": "l1:dies"
              }
            ]
          },
          {
            "id": "d-v0",
            "t": "text",
            "text": "1. Ngoài thẩm quyền trọng tài",
            "x": 5964,
            "y": 160,
            "size": 44,
            "at": "l2:Outside"
          },
          {
            "id": "d-v1",
            "t": "text",
            "text": "2. Người ký không thẩm quyền",
            "x": 6794,
            "y": 160,
            "size": 44,
            "at": "l2:signer",
            "color": "coral"
          },
          {
            "id": "d-v2",
            "t": "text",
            "text": "3. Không năng lực hành vi",
            "x": 5964,
            "y": 245,
            "size": 44,
            "at": "l2:capacity"
          },
          {
            "id": "d-v3",
            "t": "text",
            "text": "4. Sai hình thức (Điều 16)",
            "x": 6794,
            "y": 245,
            "size": 44,
            "at": "l3:Wrong"
          },
          {
            "id": "d-v4",
            "t": "text",
            "text": "5. Lừa dối, đe doạ, cưỡng ép",
            "x": 5964,
            "y": 330,
            "size": 44,
            "at": "l3:Fraud"
          },
          {
            "id": "d-v5",
            "t": "text",
            "text": "6. Vi phạm điều cấm",
            "x": 6794,
            "y": 330,
            "size": 44,
            "at": "l3:breach"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Luật TTTM 2010, Điều 18",
            "x": 5964,
            "y": 420,
            "size": 26,
            "at": "l1",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "d-17",
            "t": "text",
            "text": "Người tiêu dùng: vẫn được chọn",
            "x": 5964,
            "y": 480,
            "size": 44,
            "at": "l4:consumer",
            "hl": [
              {
                "text": "vẫn được chọn",
                "at": "l4:picks"
              }
            ]
          },
          {
            "id": "d-17s",
            "t": "text",
            "text": "Điều 17",
            "x": 6664,
            "y": 490,
            "size": 28,
            "at": "l4:seventeen",
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
          "say": "Stop two, two fifteen. Article eighteen: six ways a clause dies.",
          "sub": "Chặng hai, 14:15. Điều 18: sáu cách một thoả thuận trọng tài “chết”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Outside arbitration's scope. A signer without authority. Or without civil capacity.",
          "sub": "Tranh chấp ngoài thẩm quyền trọng tài. Người ký không có thẩm quyền. Hoặc không có năng lực hành vi dân sự."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wrong form. Fraud, threats or coercion. Or a breach of a legal prohibition.",
          "sub": "Sai hình thức. Bị lừa dối, đe doạ, cưỡng ép. Hoặc vi phạm điều cấm của luật."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Standard consumer contracts? The consumer still picks arbitration or court, Article seventeen.",
          "sub": "Hợp đồng mẫu với người tiêu dùng: người tiêu dùng vẫn được chọn trọng tài hay toà án.",
          "keys": [
            "vẫn được chọn"
          ]
        }
      ],
      "ref": "p4,p6"
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
            "at": "l2",
            "fit": [
              "d-vg"
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
            "id": "d-vg",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 260,
            "w": 760,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
                "writing-hand"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
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
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "14:30 · hợp đồng phân phối",
            "icon": "writing-hand"
          },
          {
            "id": "d-ti",
            "t": "text",
            "text": "Chức danh ≠ quyền ký",
            "x": 5964,
            "y": 570,
            "size": 50,
            "at": "l4:title",
            "color": "coral",
            "hl": [
              {
                "text": "≠ quyền ký",
                "at": "l4:authority"
              }
            ]
          },
          {
            "id": "d-ok",
            "t": "text",
            "text": "Biết mà im → có thể hiệu lực",
            "x": 5964,
            "y": 645,
            "size": 36,
            "at": "l4:object",
            "color": "accent"
          },
          {
            "id": "d-src2",
            "t": "text",
            "text": "khoản 2 Điều 3 Nghị quyết 01/2014/NQ-HĐTP",
            "x": 5964,
            "y": 700,
            "size": 26,
            "at": "l4:hold",
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
          "say": "Meet Dũng, Thảo's desk mate, five years in legal, always in a hurry.",
          "sub": "Đây là Dũng, ngồi cạnh Thảo, pháp chế năm năm, lúc nào cũng vội."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The distribution deal: their sales head signed, no power of attorney. Void, right?",
          "sub": "Hợp đồng phân phối: trưởng phòng kinh doanh bên kia ký, không giấy uỷ quyền. Vô hiệu nhỉ?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Not so fast. For two years they delivered goods and took our money.",
          "sub": "Khoan kết luận. Hai năm nay họ vẫn giao hàng, nhận tiền theo hợp đồng.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A title alone gives no authority. But if the real boss accepted, or knew and didn't object, it may hold.",
          "sub": "Chức danh không tự có quyền ký. Nhưng người có thẩm quyền đã chấp nhận, hoặc biết mà không phản đối, thì vẫn có thể có hiệu lực.",
          "keys": [
            "biết mà không phản đối"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "So I'll file every delivery note, and every email with their managers.",
          "sub": "Vậy em lưu hết chứng từ giao nhận, thư từ có lãnh đạo bên kia tham gia.",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p5,p7"
    },
    {
      "id": "s08",
      "module": "BRK-10",
      "data": {
        "quote": "Thẩm quyền người ký kiểm lúc ký thì rẻ, kiểm lúc kiện thì đắt",
        "mark": "kiểm lúc kiện thì đắt",
        "by": "Điều rút ra ở chặng hai",
        "illus": "fountain-pen"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Checking authority at signing is cheap. At suing, expensive.",
          "sub": "Kiểm thẩm quyền người ký lúc ký thì rẻ, lúc kiện thì đắt.",
          "keys": [
            "lúc kiện thì đắt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The lesson of stop two.",
          "sub": "Điều rút ra ở chặng hai."
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 15:00 · Không thực hiện được",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:stop three"
          },
          {
            "id": "e-def",
            "t": "text",
            "text": "Hợp lệ trên giấy, không chạy được",
            "x": 7932,
            "y": 160,
            "size": 46,
            "at": "l2:paper",
            "hl": [
              {
                "text": "không chạy được",
                "at": "l2:run"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Điều 4 Nghị quyết 01/2014/NQ-HĐTP",
            "x": 7932,
            "y": 225,
            "size": 26,
            "at": "l2",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "• Trung tâm chấm dứt, không kế thừa",
            "x": 7932,
            "y": 290,
            "size": 42,
            "at": "l3:closed"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "• Trọng tài viên không tham gia được",
            "x": 7932,
            "y": 360,
            "size": 42,
            "at": "l4:arbitrator"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "• Quy tắc trung tâm không cho dùng",
            "x": 7932,
            "y": 430,
            "size": 42,
            "at": "l4:rules"
          },
          {
            "id": "e-agr",
            "t": "text",
            "text": "… và các bên không thống nhất lại",
            "x": 7932,
            "y": 500,
            "size": 36,
            "at": "l4:replacement",
            "color": "muted"
          },
          {
            "id": "e-ill",
            "t": "illus",
            "name": "warning",
            "x": 9272,
            "y": 150,
            "size": 220,
            "at": "l2:run"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, three p.m. A different trap: unworkable.",
          "sub": "Chặng ba, 15:00. Một cái bẫy khác: “không thực hiện được”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Valid on paper, but it can't run. Resolution zero one, twenty fourteen lists the cases.",
          "sub": "Hợp lệ trên giấy nhưng không vận hành được. Điều 4 Nghị quyết 01/2014 nêu các trường hợp.",
          "keys": [
            "không vận hành được"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The chosen centre has closed, with no successor and no new centre agreed.",
          "sub": "Trung tâm đã chọn chấm dứt, không có tổ chức kế thừa, các bên không chọn được trung tâm khác."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The chosen arbitrator can't serve, with no replacement agreed. Or rules the centre doesn't allow.",
          "sub": "Trọng tài viên đã chọn không tham gia được, không thống nhất người thay. Hoặc quy tắc trung tâm không cho dùng."
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
            "fit": "E",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
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
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 260,
            "w": 760,
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
                "red-question-mark",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Contract",
            "caption": "15:10 · hợp đồng ba",
            "icon": "red-question-mark"
          },
          {
            "id": "e-h3",
            "t": "text",
            "text": "HĐ 3: “Trọng tài Việt Nam”?",
            "x": 7932,
            "y": 560,
            "size": 46,
            "at": "l1:Vietnam",
            "color": "coral"
          },
          {
            "id": "e-back",
            "t": "text",
            "text": "Sai tên → có thể về toà",
            "x": 7932,
            "y": 620,
            "size": 44,
            "at": "l2:court",
            "hl": [
              {
                "text": "về toà",
                "at": "l2:court"
              }
            ]
          },
          {
            "id": "e-full",
            "t": "text",
            "text": "“Trung tâm Trọng tài Quốc tế",
            "x": 7932,
            "y": 680,
            "size": 34,
            "at": "l3:full",
            "color": "accent"
          },
          {
            "id": "e-full2",
            "t": "text",
            "text": "Việt Nam (VIAC)”",
            "x": 7932,
            "y": 724,
            "size": 34,
            "at": "l3:International",
            "color": "accent",
            "hl": [
              {
                "text": "(VIAC)",
                "at": "l3:VIAC"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Contract three just says: Vietnam Arbitration. Which centre is that?",
          "sub": "Hợp đồng ba chỉ ghi: “Trọng tài Việt Nam”. Là trung tâm nào?",
          "face": "worried"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Public analyses put a wrong or unclear name here too. The case may return to court.",
          "sub": "Các bài phân tích xếp cả tên sai, không xác định được vào nhóm này; tranh chấp có thể quay về toà.",
          "keys": [
            "quay về toà"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So write it in full: Vietnam International Arbitration Centre, VIAC.",
          "sub": "Vậy ghi đầy đủ, chính xác: “Trung tâm Trọng tài Quốc tế Việt Nam (VIAC)”.",
          "keys": [
            "đầy đủ, chính xác"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "15:30 · phòng pháp chế",
        "actors": [
          {
            "id": "dung",
            "side": "left",
            "pose": "explain"
          },
          {
            "id": "thao",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Ghi “trọng tài hoặc toà án” cho chắc",
          "why": "Một bên nộp đơn ra trọng tài, bên kia lập luận hợp đồng cũng cho đi toà: tranh chấp thẩm quyền ngay bước đầu.",
          "rule": "Chỉ chọn một cơ chế, ghi rõ tên trung tâm và quy tắc"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Easy fix: arbitration or the competent court. Both doors open, totally safe. Okay, done!",
          "sub": "Dễ thôi: ghi “trọng tài hoặc toà án có thẩm quyền”. Mở cả hai cửa, chắc ăn. Ok, làm luôn!",
          "face": "happy",
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
          "say": "One side files in arbitration, the other says the contract allows court. A fight before the fight.",
          "sub": "Một bên nộp đơn ra trọng tài, bên kia bảo hợp đồng cũng cho đi toà. Cãi nhau trước cả khi cãi.",
          "keys": [
            "Cãi nhau trước cả khi cãi"
          ]
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
          "who": "dung",
          "say": "Then one mechanism only: VIAC, with its rules.",
          "sub": "Vậy chỉ một cơ chế: VIAC, kèm quy tắc tố tụng.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Open two doors, and you argue over which door.",
          "sub": "Để ngỏ hai cửa thì thường phải cãi nhau xem đi cửa nào.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "cãi nhau xem đi cửa nào"
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
            "text": "④ 15:45 · Ở đâu? Tiếng gì?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:stop four"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "wave",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "laptop",
                "globe-showing-asia-australia"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Sam",
            "caption": "15:45 · gọi video với Sam",
            "icon": "globe-showing-asia-australia"
          },
          {
            "id": "f-11",
            "t": "text",
            "text": "Địa điểm: các bên chọn",
            "x": 60,
            "y": 1250,
            "size": 48,
            "at": "l3:choose"
          },
          {
            "id": "f-11b",
            "t": "text",
            "text": "không chọn → Hội đồng quyết",
            "x": 90,
            "y": 1320,
            "size": 40,
            "at": "l3:silent",
            "color": "muted"
          },
          {
            "id": "f-vn",
            "t": "text",
            "text": "Ở Việt Nam → tuyên tại Việt Nam",
            "x": 60,
            "y": 1400,
            "size": 44,
            "at": "l4:rendered",
            "hl": [
              {
                "text": "tuyên tại Việt Nam",
                "at": "l4:rendered"
              }
            ]
          },
          {
            "id": "f-room",
            "t": "text",
            "text": "Địa điểm ≠ phòng họp",
            "x": 60,
            "y": 1480,
            "size": 52,
            "at": "l5:room",
            "color": "accent",
            "hl": [
              {
                "text": "≠ phòng họp",
                "at": "l5:room"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Luật TTTM: Điều 11 · khoản 8 Điều 3",
            "x": 60,
            "y": 1550,
            "size": 26,
            "at": "l4",
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
          "say": "Stop four, three forty-five. A video call with Sam, the foreign equipment supplier's representative.",
          "sub": "Chặng bốn, 15:45. Gọi video với Sam, đại diện nhà cung cấp thiết bị nước ngoài."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Where would we arbitrate? And in which language?",
          "sub": "Trọng tài ở đâu? Và dùng ngôn ngữ nào ạ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Venue: the parties choose, in or outside Vietnam. If silent, the tribunal decides.",
          "sub": "Địa điểm: các bên chọn, trong hay ngoài Việt Nam; không chọn thì Hội đồng quyết."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A venue in Vietnam means the award is rendered in Vietnam, wherever the tribunal meets.",
          "sub": "Địa điểm ở Việt Nam thì phán quyết coi như tuyên tại Việt Nam, dù Hội đồng họp ở đâu.",
          "keys": [
            "tuyên tại Việt Nam"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So the venue isn't the meeting room.",
          "sub": "Vậy địa điểm khác nơi tổ chức phiên họp.",
          "keys": [
            "khác nơi tổ chức phiên họp"
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
            "fit": "F",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": [
              "f-l1",
              "f-l2"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l3",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-l1",
            "t": "text",
            "text": "Thuần nội địa → tiếng Việt",
            "x": 60,
            "y": 1640,
            "size": 44,
            "at": "l1:Vietnamese"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Yếu tố / vốn nước ngoài → thoả thuận",
            "x": 60,
            "y": 1710,
            "size": 40,
            "at": "l2:foreign",
            "color": "accent",
            "hl": [
              {
                "text": "thoả thuận",
                "at": "l2:agree"
              }
            ]
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Điều 10",
            "x": 60,
            "y": 1770,
            "size": 28,
            "at": "l1",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "f-en",
            "t": "text",
            "text": "Sam: tiếng Anh, tại Việt Nam",
            "x": 900,
            "y": 1790,
            "size": 40,
            "at": "l3:English",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Language, Article ten. No foreign element, no foreign-invested party: Vietnamese.",
          "sub": "Ngôn ngữ, Điều 10: không có yếu tố nước ngoài, không bên nào có vốn nước ngoài: tiếng Việt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A foreign element or foreign-invested party: the language you agree. If silent, the tribunal decides.",
          "sub": "Có yếu tố nước ngoài hoặc doanh nghiệp vốn nước ngoài: ngôn ngữ các bên thoả thuận; không thì Hội đồng quyết."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Then let's write English, with a venue in Vietnam.",
          "sub": "Vậy ghi tiếng Anh, địa điểm ở Việt Nam nhé.",
          "face": "happy"
        }
      ],
      "ref": "p14"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 16:30 · Mấy người? Luật nào?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:stop five"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Không ghi → 3 trọng tài viên",
            "x": 2028,
            "y": 1250,
            "size": 48,
            "at": "l2:Silent",
            "hl": [
              {
                "text": "3 trọng tài viên",
                "at": "l2:Three"
              }
            ]
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Muốn 1 người: ghi rõ",
            "x": 2058,
            "y": 1325,
            "size": 44,
            "at": "l2:sole",
            "color": "accent"
          },
          {
            "id": "g-law",
            "t": "text",
            "text": "Luật áp dụng: câu riêng",
            "x": 2028,
            "y": 1410,
            "size": 48,
            "at": "l3:sentence",
            "hl": [
              {
                "text": "câu riêng",
                "at": "l3:sentence"
              }
            ]
          },
          {
            "id": "g-law2",
            "t": "text",
            "text": "nội địa → luật Việt Nam · có yếu tố nước ngoài → luật các bên chọn",
            "x": 2058,
            "y": 1485,
            "size": 28,
            "at": "l3:domestic",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Luật TTTM: Điều 39 · Điều 14",
            "x": 2058,
            "y": 1530,
            "size": 26,
            "at": "l2",
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
          "say": "Stop five, four thirty. How many arbitrators?",
          "sub": "Chặng năm, 16:30. Mấy trọng tài viên?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Silent? Three, Article thirty-nine. Want one sole arbitrator? Write it.",
          "sub": "Không ghi thì ba người (Điều 39). Muốn một trọng tài viên duy nhất thì phải ghi rõ.",
          "keys": [
            "phải ghi rõ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Governing law gets its own sentence: domestic means Vietnamese law; foreign means the law you choose.",
          "sub": "Luật áp dụng viết thành câu riêng: không có yếu tố nước ngoài thì luật Việt Nam; có thì luật các bên chọn (Điều 14).",
          "keys": [
            "câu riêng"
          ]
        }
      ],
      "ref": "p15"
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
            "at": "a1",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "dung",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "left": {
                "label": "Cách A: ba trọng tài viên",
                "ok": false
              },
              "right": {
                "label": "Cách B: một trọng tài viên",
                "ok": true
              }
            },
            "at": "l1:Cô Hoa",
            "caption": "16:40 · hợp đồng dịch vụ vừa phải",
            "icon": "busts-in-silhouette"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A: có tiếng nói, chậm, tốn",
            "x": 2028,
            "y": 1620,
            "size": 42,
            "at": "a2:slower",
            "color": "coral"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: nhanh, gọn, phải thống nhất",
            "x": 2028,
            "y": 1690,
            "size": 42,
            "at": "b2:Faster",
            "color": "accent"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Theo giá trị, không theo thói quen",
            "x": 2028,
            "y": 1770,
            "size": 44,
            "at": "l2:value",
            "hl": [
              {
                "text": "không theo thói quen",
                "at": "l2:habit"
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
          "say": "A modest service contract is next. And this is Cô Hoa, head of legal.",
          "sub": "Tiếp là hợp đồng dịch vụ giá trị vừa phải. Và đây là Cô Hoa, trưởng phòng pháp chế."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "Three arbitrators, as always. One each, then they pick a chair.",
          "sub": "Ba trọng tài viên như mọi khi. Mỗi bên chọn một, hai người bầu chủ tịch.",
          "phase": "a"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "hoa",
          "say": "More say, but slower to form, and higher fees.",
          "sub": "Có tiếng nói hơn, nhưng lập Hội đồng lâu hơn, thù lao cao hơn.",
          "phase": "a"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "Or one sole arbitrator?",
          "sub": "Hay một trọng tài viên duy nhất?",
          "phase": "b",
          "to": "hoa"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "hoa",
          "say": "Faster and cheaper. But we agree on one, or the centre appoints. Okay!",
          "sub": "Nhanh, gọn chi phí. Nhưng phải thống nhất một người, hoặc để trung tâm chỉ định. Rồi, vậy nha!",
          "phase": "b"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Match the number to value and complexity, not habit.",
          "sub": "Rút ra: số trọng tài viên theo giá trị và độ phức tạp, không theo thói quen.",
          "keys": [
            "không theo thói quen"
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
              "h-s0",
              "h-s3"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 17:00 · Câu mẫu",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:stop six"
          },
          {
            "id": "h-box",
            "t": "box",
            "x": 3976,
            "y": 1230,
            "w": 1000,
            "h": 600,
            "at": "l2:All",
            "stroke": 5
          },
          {
            "id": "h-s0",
            "t": "text",
            "text": "Mọi tranh chấp phát sinh từ",
            "x": 4016,
            "y": 1250,
            "size": 44,
            "at": "l2:All"
          },
          {
            "id": "h-s1",
            "t": "text",
            "text": "hoặc liên quan đến Hợp đồng",
            "x": 4016,
            "y": 1330,
            "size": 44,
            "at": "l2:relating",
            "hl": [
              {
                "text": "hoặc liên quan đến",
                "at": "l2:relating"
              }
            ]
          },
          {
            "id": "h-s2",
            "t": "text",
            "text": "→ trọng tài tại VIAC",
            "x": 4016,
            "y": 1410,
            "size": 44,
            "at": "l2:VIAC",
            "color": "accent",
            "hl": [
              {
                "text": "VIAC",
                "at": "l2:VIAC"
              }
            ]
          },
          {
            "id": "h-s3",
            "t": "text",
            "text": "theo Quy tắc tố tụng của VIAC",
            "x": 4016,
            "y": 1490,
            "size": 44,
            "at": "l2:rules"
          },
          {
            "id": "h-s4",
            "t": "text",
            "text": "Số trọng tài viên: [ ]",
            "x": 4016,
            "y": 1570,
            "size": 44,
            "at": "l3:arbitrators"
          },
          {
            "id": "h-s5",
            "t": "text",
            "text": "Địa điểm: [ ] · Ngôn ngữ: [ ]",
            "x": 4016,
            "y": 1650,
            "size": 44,
            "at": "l3:venue"
          },
          {
            "id": "h-s6",
            "t": "text",
            "text": "Luật áp dụng: [ ]",
            "x": 4016,
            "y": 1730,
            "size": 44,
            "at": "l3:law"
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓ đúng tên",
            "x": 5036,
            "y": 1290,
            "size": 46,
            "at": "l4:name",
            "color": "accent"
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓ một cơ chế",
            "x": 5036,
            "y": 1380,
            "size": 46,
            "at": "l4:mechanism",
            "color": "accent"
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓ phạm vi rộng",
            "x": 5036,
            "y": 1470,
            "size": 46,
            "at": "l4:scope",
            "color": "accent"
          },
          {
            "id": "h-k4",
            "t": "text",
            "text": "✓ chốt mặc định",
            "x": 5036,
            "y": 1560,
            "size": 46,
            "at": "l4:default",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, five p.m. Thảo writes the sample clause.",
          "sub": "Chặng sáu, 17:00. Thảo viết câu mẫu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "All disputes arising out of or relating to this contract go to arbitration at VIAC, under its rules.",
          "sub": "Mọi tranh chấp phát sinh từ hoặc liên quan đến Hợp đồng này giải quyết bằng trọng tài tại VIAC theo Quy tắc tố tụng của VIAC.",
          "keys": [
            "phát sinh từ hoặc liên quan đến"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Number of arbitrators, venue, language, governing law: blanks to fill.",
          "sub": "Số trọng tài viên, địa điểm, ngôn ngữ, luật áp dụng: ô trống để điền."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Right name, one mechanism, wide scope, every default fixed.",
          "sub": "Đúng tên, một cơ chế, phạm vi rộng, chốt các thông số luật để mặc định.",
          "keys": [
            "chốt các thông số"
          ]
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s17",
      "module": "BRK-04",
      "data": {
        "title": "Trước – sau",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“Trọng tài Việt Nam hoặc Toà án”",
        "right": "VIAC, theo Quy tắc VIAC, chốt đủ thông số",
        "wrongIllus": "red-question-mark",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: Vietnam Arbitration, or the court.",
          "sub": "Trước: “Trọng tài Việt Nam hoặc Toà án”."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: nobody has to guess.",
          "sub": "Sau: không ai phải đoán.",
          "keys": [
            "không ai phải đoán"
          ]
        }
      ],
      "ref": "p18,p19"
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
            "fit": [
              "h-g",
              "h-726"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l3:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-g",
            "t": "text",
            "text": "Không để ai phải đoán",
            "x": 5016,
            "y": 1660,
            "size": 44,
            "at": "l1:guessing",
            "color": "accent",
            "hl": [
              {
                "text": "phải đoán",
                "at": "l1:guessing"
              }
            ]
          },
          {
            "id": "h-gen",
            "t": "text",
            "text": "Dẫn chiếu chung Quy tắc VIAC",
            "x": 5016,
            "y": 1730,
            "size": 34,
            "at": "l2:general"
          },
          {
            "id": "h-726",
            "t": "text",
            "text": "Từ 01/7/2026: nói rõ rút gọn",
            "x": 5016,
            "y": 1790,
            "size": 34,
            "at": "l3:July",
            "color": "coral",
            "hl": [
              {
                "text": "rút gọn",
                "at": "l3:expedited"
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
          "say": "A good clause leaves nobody guessing.",
          "sub": "Điều khoản tốt là điều khoản không để ai phải đoán.",
          "keys": [
            "không để ai phải đoán"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tip: you may refer to the VIAC rules in general, instead of locking one version.",
          "sub": "Mẹo: có thể dẫn chiếu chung “Quy tắc tố tụng trọng tài của VIAC”, thay vì khoá một phiên bản."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For agreements from July first, twenty twenty-six, say whether the expedited procedure applies. Next lesson.",
          "sub": "Thoả thuận lập từ 01/7/2026: nói rõ áp dụng hay loại trừ thủ tục rút gọn. Đào sâu ở bài sau.",
          "keys": [
            "áp dụng hay loại trừ"
          ]
        }
      ],
      "ref": "p19,p20"
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
            "text": "⑦ 17:30 · Chín ô kiểm",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:stop seven",
            "hl": [
              {
                "text": "Chín ô",
                "at": "l1:nine-box"
              }
            ]
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 40,
            "h": 40,
            "at": "l2:Right",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5966,
            "y": 1242,
            "size": 50,
            "at": "l2:Right+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Tên trung tâm đúng",
            "x": 6024,
            "y": 1254,
            "size": 38,
            "at": "l2:Right+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 6524,
            "y": 1260,
            "w": 40,
            "h": 40,
            "at": "l2:One",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 6526,
            "y": 1242,
            "size": 50,
            "at": "l2:One+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Một cơ chế",
            "x": 6584,
            "y": 1254,
            "size": 38,
            "at": "l2:One+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 7084,
            "y": 1260,
            "w": 40,
            "h": 40,
            "at": "l2:arising",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 7086,
            "y": 1242,
            "size": 50,
            "at": "l2:arising+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Phát sinh / liên quan",
            "x": 7144,
            "y": 1254,
            "size": 38,
            "at": "l2:arising+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1340,
            "w": 40,
            "h": 40,
            "at": "l3:Arbitrators",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5966,
            "y": 1322,
            "size": 50,
            "at": "l3:Arbitrators+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Số trọng tài viên",
            "x": 6024,
            "y": 1334,
            "size": 38,
            "at": "l3:Arbitrators+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 6524,
            "y": 1340,
            "w": 40,
            "h": 40,
            "at": "l3:venue",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 6526,
            "y": 1322,
            "size": 50,
            "at": "l3:venue+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Địa điểm",
            "x": 6584,
            "y": 1334,
            "size": 38,
            "at": "l3:venue+200"
          },
          {
            "id": "i-c5",
            "t": "box",
            "x": 7084,
            "y": 1340,
            "w": 40,
            "h": 40,
            "at": "l3:language",
            "stroke": 5
          },
          {
            "id": "i-k5",
            "t": "text",
            "text": "✓",
            "x": 7086,
            "y": 1322,
            "size": 50,
            "at": "l3:language+600",
            "color": "accent"
          },
          {
            "id": "i-l5",
            "t": "text",
            "text": "Ngôn ngữ",
            "x": 7144,
            "y": 1334,
            "size": 38,
            "at": "l3:language+200"
          },
          {
            "id": "i-c6",
            "t": "box",
            "x": 5964,
            "y": 1420,
            "w": 40,
            "h": 40,
            "at": "l3:law",
            "stroke": 5
          },
          {
            "id": "i-k6",
            "t": "text",
            "text": "✓",
            "x": 5966,
            "y": 1402,
            "size": 50,
            "at": "l3:law+600",
            "color": "accent"
          },
          {
            "id": "i-l6",
            "t": "text",
            "text": "Luật áp dụng",
            "x": 6024,
            "y": 1414,
            "size": 38,
            "at": "l3:law+200"
          },
          {
            "id": "i-c7",
            "t": "box",
            "x": 6524,
            "y": 1420,
            "w": 40,
            "h": 40,
            "at": "l4:signer",
            "stroke": 5
          },
          {
            "id": "i-k7",
            "t": "text",
            "text": "✓",
            "x": 6526,
            "y": 1402,
            "size": 50,
            "at": "l4:signer+600",
            "color": "accent"
          },
          {
            "id": "i-l7",
            "t": "text",
            "text": "Người ký có quyền",
            "x": 6584,
            "y": 1414,
            "size": 38,
            "at": "l4:signer+200"
          },
          {
            "id": "i-c8",
            "t": "box",
            "x": 7084,
            "y": 1420,
            "w": 40,
            "h": 40,
            "at": "l4:linked",
            "stroke": 5
          },
          {
            "id": "i-k8",
            "t": "text",
            "text": "✓",
            "x": 7086,
            "y": 1402,
            "size": 50,
            "at": "l4:linked+600",
            "color": "accent"
          },
          {
            "id": "i-l8",
            "t": "text",
            "text": "HĐ liên quan khớp",
            "x": 7144,
            "y": 1414,
            "size": 38,
            "at": "l4:linked+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, five thirty. Thảo's nine-box checklist.",
          "sub": "Chặng bảy, 17:30. Danh sách kiểm chín ô của Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Right centre name. One mechanism, no court. Arising out of or relating to.",
          "sub": "Tên trung tâm đúng. Một cơ chế, không kèm toà. Phạm vi “phát sinh từ hoặc liên quan đến”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Arbitrators, venue, language, governing law.",
          "sub": "Số trọng tài viên, địa điểm, ngôn ngữ, luật áp dụng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "A signer with authority. And linked contracts with compatible clauses.",
          "sub": "Người ký có thẩm quyền. Hợp đồng liên quan dùng điều khoản tương thích.",
          "keys": [
            "điều khoản tương thích"
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
            "fit": "I",
            "move": "cut"
          },
          {
            "at": "l3",
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
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6904,
            "y": 1490,
            "w": 560,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "handshake",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1:old",
            "caption": "17:45 · hợp đồng cũ",
            "icon": "handshake"
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Đ5: lập cả sau tranh chấp",
            "x": 5964,
            "y": 1520,
            "size": 42,
            "at": "l2:after"
          },
          {
            "id": "i-ph",
            "t": "text",
            "text": "→ phụ lục sửa, khi còn vui vẻ",
            "x": 5964,
            "y": 1590,
            "size": 42,
            "at": "l3:annex",
            "color": "accent",
            "hl": [
              {
                "text": "phụ lục",
                "at": "l3:annex"
              }
            ]
          },
          {
            "id": "i-gop",
            "t": "text",
            "text": "Nhiều HĐ: cùng trung tâm, quy tắc",
            "x": 5964,
            "y": 1670,
            "size": 40,
            "at": "l5:Many"
          },
          {
            "id": "i-gop2",
            "t": "text",
            "text": "khớp ≠ chắc được gộp",
            "x": 5994,
            "y": 1740,
            "size": 40,
            "at": "l5:guarantee",
            "color": "coral",
            "hl": [
              {
                "text": "≠ chắc được gộp",
                "at": "l5:guarantee"
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
          "say": "And the old contracts already signed wrong?",
          "sub": "Còn hợp đồng cũ đã ký sai thì sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article five: an agreement can be made even after a dispute arises.",
          "sub": "Điều 5: thoả thuận trọng tài lập được cả sau khi tranh chấp phát sinh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "So we propose an annex fixing the clause now, while relations are good?",
          "sub": "Vậy mình đề nghị đối tác ký phụ lục sửa điều khoản ngay, khi quan hệ còn tốt?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Exactly. Don't wait for the day you sue.",
          "sub": "Chuẩn. Đừng chờ đến ngày khởi kiện mới tranh luận.",
          "keys": [
            "Đừng chờ đến ngày khởi kiện"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Many contracts in one project? Same centre, same rules. Matching helps consolidation, but doesn't guarantee it.",
          "sub": "Dự án nhiều hợp đồng: cùng trung tâm, cùng quy tắc. Không tương thích thì khó gộp vụ; tương thích cũng chưa chắc được gộp."
        }
      ],
      "ref": "p22,p23"
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
            "text": "18:00 · Hai cửa?",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:six"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "give",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "page-facing-up",
                "fountain-pen"
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
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:question",
            "caption": "18:00 · phòng Cô Hoa",
            "icon": "fountain-pen"
          },
          {
            "id": "j-safe",
            "t": "text",
            "text": "Chắc ăn?",
            "x": 7932,
            "y": 1260,
            "size": 70,
            "at": "l1:safer",
            "color": "muted"
          },
          {
            "id": "j-safex",
            "t": "strike",
            "over": "j-safe",
            "at": "l2:Riskier"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Một cửa · đúng tên · đủ thông số",
            "x": 7932,
            "y": 1370,
            "size": 42,
            "at": "l2:One",
            "color": "accent",
            "hl": [
              {
                "text": "Một cửa",
                "at": "l2:One"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Giấy trắng mực đen”",
            "x": 7932,
            "y": 1490,
            "size": 54,
            "at": "l4:Paper",
            "color": "accent",
            "hl": [
              {
                "text": "mực đen",
                "at": "l4:ink"
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
          "say": "Six p.m. Back to the question: two doors, safer or riskier?",
          "sub": "Sáu giờ chiều. Quay lại câu đố: hai cửa, chắc ăn hay rủi ro?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Riskier. One door, the right name, every setting written.",
          "sub": "Rủi ro. Một cửa, đúng tên, ghi đủ thông số.",
          "face": "happy",
          "to": "hoa"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Good. Annexes for contracts one and three by Friday. Okay!",
          "sub": "Tốt. Thứ Sáu trình phụ lục cho hợp đồng một và ba. Rồi, vậy nha!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Paper white, ink black. This time the ink says exactly one thing.",
          "sub": "Giấy trắng mực đen. Lần này mực chỉ nói đúng một điều.",
          "keys": [
            "đúng một điều"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "outro"
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
            "at": "l1",
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
            "x": 7504,
            "y": 30,
            "at": "l1"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 30,
            "at": "l2"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5536,
            "y": 1120,
            "at": "l3"
          },
          {
            "id": "z-src",
            "t": "text",
            "text": "Kiến thức nghề tham khảo, không phải tư vấn cho vụ việc cụ thể. Luật Trọng tài thương mại đang sửa đổi; đối chiếu văn bản mới nhất.",
            "x": 7932,
            "y": 1790,
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
          "say": "Step back. Check the signer when you sign.",
          "sub": "Lùi lại. Kiểm người ký ngay lúc ký.",
          "keys": [
            "Kiểm người ký"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write the centre's full, exact name.",
          "sub": "Ghi tên trung tâm đầy đủ, chính xác.",
          "keys": [
            "đầy đủ, chính xác"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One mechanism, wide scope, every setting fixed.",
          "sub": "Một cơ chế, phạm vi rộng, chốt đủ thông số.",
          "keys": [
            "Một cơ chế"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p5,p10,p18"
    },
    {
      "id": "s23",
      "module": "QUIZ-01",
      "data": {
        "q": "What is the main risk when a clause names arbitration or the competent court?",
        "options": [
          "It makes both forums hear the case at the same time in parallel",
          "It doubles the damages that the losing party has to pay",
          "It invites a fight over jurisdiction before the real dispute is heard"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "door",
        "why": "Câu để ngỏ hai đường dễ sinh tranh chấp thẩm quyền ngay bước đầu; nên chỉ chọn một cơ chế."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the main risk when a clause names arbitration or the competent court?",
          "sub": "Rủi ro chính khi điều khoản ghi trọng tài hoặc toà án là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "It invites a fight over jurisdiction before the real dispute is heard.",
          "sub": "Nó mở đường cho tranh chấp thẩm quyền trước khi vụ thật được xét."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Two doors, one argument first.",
          "sub": "Hai cửa, cãi nhau trước đã."
        }
      ],
      "beats": {
        "after": 800
      },
      "ref": "questions[14]"
    },
    {
      "id": "s24",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: chấm một hợp đồng theo chín ô",
        "sub": "Rồi đọc bài 2: Quy tắc VIAC 2026"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, score one live contract on the nine boxes, then read lesson two.",
          "sub": "Hôm nay lấy một hợp đồng đang hiệu lực, chấm theo chín ô, đánh dấu mục thiếu, rồi đọc bài 2.",
          "face": "laugh",
          "keys": [
            "chấm theo chín ô"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "General knowledge, not advice for your case. The law is changing; check the latest text.",
          "sub": "Kiến thức nghề tham khảo, không phải tư vấn cho vụ việc cụ thể. Luật đang sửa, hãy đối chiếu văn bản mới nhất."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI, dựng theo hạt nhân #136 + biến thể #144 (bang-trang-kit). HOOK-21: đoán sai “trọng tài hoặc toà án — chắc ăn hay rủi ro?” (p11), lật ngay, trả lời lại ở khép vòng. Dòng thời gian: MỘT CHIỀU THỨ BA Thảo chấm ba hợp đồng lớn nhất (việc làm ngay của bài tổng) — A 13:30, B câu hỏi + dải 7 chặng, C ① 13:45 thoả thuận là gì, hình thức, kế thừa (p1–p3), D ② 14:15 sáu cửa vô hiệu + người tiêu dùng (p4, p6) + Dũng: người ký không giấy uỷ quyền (p5, p7) + BRK-10 rút ra (p8), E ③ 15:00 không thực hiện được (p9) + tên trung tâm (p10), Khoan đã! 15:30 Dũng “trọng tài hoặc toà án” (p11–p12), F ④ 15:45 Sam: địa điểm, ngôn ngữ (p13–p14), G ⑤ 16:30 số trọng tài viên, luật áp dụng (p15) + hai cách (p16–p17), H ⑥ 17:00 câu mẫu (p18) + BRK-04 trước–sau + dẫn chiếu chung, rút gọn (p19–p20), I ⑦ 17:30 chín ô kiểm (p21) + phụ lục, nhiều hợp đồng (p22–p23), J 18:00 Cô Hoa (khép vòng “Giấy trắng mực đen”), tóm tắt. Nhân vật theo w145/_series/law-arbitration-inhouse.md: chị Hạnh (p7) → Thảo. Không nêu tên hãng luật trong nguồn bài (ghi “các bài phân tích”). Số/điều chỉ từ bài. Lưu ý chung (#133) ở tóm tắt + END. Câu đố questions[14].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
