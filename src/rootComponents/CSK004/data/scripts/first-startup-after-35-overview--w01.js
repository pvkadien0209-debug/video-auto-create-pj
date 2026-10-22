// first-startup-after-35-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "first-startup-after-35-overview--w01",
  "hook": "HOOK-20",
  "unit": {
    "audience": "first-time-founders-after-35",
    "slug": "first-startup-after-35-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Khởi nghiệp lần đầu sau mười năm đi làm nên đi theo thứ tự nào?",
    "series": "Khởi nghiệp lần đầu khi đã có gia đình — cho người rời công sở để làm chủ"
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
            "id": "a-ans",
            "t": "text",
            "text": "Khách trước,",
            "x": 60,
            "y": 110,
            "size": 120,
            "at": "l1:Customers",
            "color": "accent",
            "hl": [
              {
                "text": "Khách trước",
                "at": "l1:first"
              }
            ]
          },
          {
            "id": "a-ans2",
            "t": "text",
            "text": "giấy tờ sau.",
            "x": 60,
            "y": 260,
            "size": 120,
            "at": "l1:paperwork",
            "hl": [
              {
                "text": "giấy tờ sau",
                "at": "l1:later"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Nghe dễ… mà hay làm ngược",
            "x": 70,
            "y": 450,
            "size": 50,
            "at": "l2:backwards",
            "color": "coral",
            "hl": [
              {
                "text": "làm ngược",
                "at": "l2:backwards"
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
          "say": "Customers first, paperwork later. That's the answer, before you even ask.",
          "sub": "Khách trước, giấy tờ sau. Đáp án đây, trước cả khi bạn hỏi.",
          "keys": [
            "Khách trước, giấy tờ sau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sounds simple. Yet it's so easy to do it backwards.",
          "sub": "Nghe đơn giản. Vậy mà rất dễ làm ngược.",
          "keys": [
            "làm ngược"
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
            "at": "l5",
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
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "artist-palette",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1",
            "caption": "Tối thứ Sáu · tháng Một · ở nhà",
            "icon": "crescent-moon"
          },
          {
            "id": "a-logo",
            "t": "text",
            "text": "logo? văn phòng?",
            "x": 900,
            "y": 650,
            "size": 46,
            "at": "l3:logo",
            "color": "coral",
            "hl": [
              {
                "text": "logo",
                "at": "l3:logo"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Chưa học bò đã lo học chạy”",
            "x": 60,
            "y": 590,
            "size": 48,
            "at": "l5:crawl",
            "color": "accent",
            "hl": [
              {
                "text": "học bò",
                "at": "l5:crawl"
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
          "say": "Thirty-seven, an accountant for ten years. A family, small savings, and one idea that keeps coming back.",
          "sub": "37 tuổi, kế toán mười năm. Có gia đình, ít tiền để dành, một ý tưởng cứ quay lại.",
          "keys": [
            "kế toán mười năm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Bookkeeping for small shops in our ward! First, a logo. Then a little office?",
          "sub": "Làm dịch vụ ghi sổ cho các hộ kinh doanh trong phường! Trước hết là logo. Rồi thuê văn phòng nhỏ?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "But what if we lose all our savings?",
          "sub": "Nhưng lỡ mất hết tiền tiết kiệm thì sao?",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders call this learning to run before you can crawl.",
          "sub": "Ông bà gọi là: “Chưa học bò đã lo học chạy.”",
          "keys": [
            "Chưa học bò đã lo học chạy"
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
            "text": "Đi theo thứ tự nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:order",
            "hl": [
              {
                "text": "thứ tự",
                "at": "l1:order"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Giấy phép, văn phòng, logo",
            "x": 2028,
            "y": 160,
            "size": 54,
            "at": "l2:licence",
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
            "text": "Khách → thử rẻ → tiền",
            "x": 2028,
            "y": 255,
            "size": 60,
            "at": "l2:customers",
            "color": "accent",
            "hl": [
              {
                "text": "Khách",
                "at": "l2:customers"
              }
            ]
          },
          {
            "id": "b-fam",
            "t": "text",
            "text": "Giới hạn rủi ro gia đình",
            "x": 2028,
            "y": 355,
            "size": 52,
            "at": "l3:limit",
            "hl": [
              {
                "text": "rủi ro",
                "at": "l3:risk"
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
          "say": "So after ten years at work, in what order should you start your first business?",
          "sub": "Vậy sau mười năm đi làm, khởi nghiệp lần đầu nên đi theo thứ tự nào?",
          "keys": [
            "thứ tự nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not licence, office and logo first. But customers, a cheap test, and the money.",
          "sub": "Không phải giấy phép, văn phòng, logo trước. Mà là khách, phép thử rẻ, và chuyện tiền.",
          "keys": [
            "phép thử rẻ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And limit the risk to your family from day one.",
          "sub": "Và giới hạn rủi ro cho gia đình ngay từ đầu.",
          "keys": [
            "giới hạn rủi ro"
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
            "id": "b-6",
            "t": "text",
            "text": "6 bước",
            "x": 2028,
            "y": 470,
            "size": 60,
            "at": "l1:Six",
            "hl": [
              {
                "text": "6 bước",
                "at": "l1:Six"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 580,
            "w": 250,
            "h": 100,
            "at": "l1:problem",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2303,
            "y": 580,
            "w": 250,
            "h": 100,
            "at": "l1:test",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2578,
            "y": 580,
            "w": 250,
            "h": 100,
            "at": "l1:one-page",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2853,
            "y": 580,
            "w": 250,
            "h": 100,
            "at": "l2:money",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3128,
            "y": 580,
            "w": 250,
            "h": 100,
            "at": "l2:job",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3403,
            "y": 580,
            "w": 250,
            "h": 100,
            "at": "l2:milestones",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Vấn đề",
            "x": 2048,
            "y": 600,
            "size": 40,
            "at": "l1:problem+200"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Thử rẻ",
            "x": 2323,
            "y": 600,
            "size": 40,
            "at": "l1:test+200"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Một trang",
            "x": 2598,
            "y": 600,
            "size": 40,
            "at": "l1:one-page+200"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Vốn",
            "x": 2873,
            "y": 600,
            "size": 40,
            "at": "l2:money+200"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Nghỉ việc?",
            "x": 3148,
            "y": 600,
            "size": 40,
            "at": "l2:job+200"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Mốc năm",
            "x": 3423,
            "y": 600,
            "size": 40,
            "at": "l2:milestones+200"
          },
          {
            "id": "b-gt",
            "t": "text",
            "text": "Giấy tờ: có ghế, không ghế đầu",
            "x": 2668,
            "y": 470,
            "size": 44,
            "at": "l3:seat",
            "color": "coral",
            "hl": [
              {
                "text": "không ghế đầu",
                "at": "l3:front"
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
          "say": "Six steps: find a problem people pay for, test it cheaply, draw a one-page model.",
          "sub": "Sáu bước: tìm vấn đề khách trả tiền, thử thật rẻ, vẽ mô hình một trang.",
          "keys": [
            "Sáu bước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then plan the money, decide about your job, and set first-year milestones.",
          "sub": "Rồi tính vốn, quyết chuyện nghỉ việc, và đặt mốc cho năm đầu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Paperwork? It has a seat too. Just not the front one.",
          "sub": "Giấy tờ? Cũng có ghế, chỉ không phải ghế đầu.",
          "keys": [
            "không phải ghế đầu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Six months of Thảo, starting from that Friday night.",
          "sub": "Sáu tháng của Thảo, bắt đầu từ tối thứ Sáu ấy."
        }
      ],
      "ref": "p17"
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
            "text": "Tháng 1 · SBA: bốn chặng",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:January",
            "hl": [
              {
                "text": "bốn chặng",
                "at": "l2:Four"
              }
            ]
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
                  "pose": "think",
                  "face": "surprised"
                }
              ],
              "props": [
                "laptop",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:opens",
            "caption": "Tối thứ Hai · đọc hướng dẫn SBA",
            "icon": "laptop"
          },
          {
            "id": "c-s0",
            "t": "text",
            "text": "① Lập kế hoạch",
            "x": 3996,
            "y": 160,
            "size": 50,
            "at": "l3:Plan",
            "color": "accent"
          },
          {
            "id": "c-s1",
            "t": "text",
            "text": "② Khởi sự",
            "x": 3996,
            "y": 240,
            "size": 50,
            "at": "l3:launch"
          },
          {
            "id": "c-s2",
            "t": "text",
            "text": "③ Quản lý",
            "x": 3996,
            "y": 320,
            "size": 50,
            "at": "l3:manage"
          },
          {
            "id": "c-s3",
            "t": "text",
            "text": "④ Phát triển",
            "x": 3996,
            "y": 400,
            "size": 50,
            "at": "l3:grow"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: U.S. SBA, 10 steps to start your business",
            "x": 3996,
            "y": 720,
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
          "who": "det",
          "say": "January. Thảo opens the guide of the US Small Business Administration, the SBA.",
          "sub": "Tháng Một. Thảo mở hướng dẫn của Cục Quản lý Doanh nghiệp nhỏ Hoa Kỳ, gọi tắt SBA.",
          "keys": [
            "SBA"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Four stages? I thought you just register and open!",
          "sub": "Bốn chặng à? Mình tưởng chỉ đăng ký rồi mở thôi chứ!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Plan, launch, manage, grow. And look what sits inside planning.",
          "sub": "Lập kế hoạch, khởi sự, quản lý, phát triển. Và xem chặng đầu chứa gì.",
          "keys": [
            "Lập kế hoạch"
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
          }
        ],
        "items": [
          {
            "id": "c-p1",
            "t": "text",
            "text": "khách, chi phí, vốn",
            "x": 4366,
            "y": 170,
            "size": 34,
            "at": "l1:research",
            "color": "accent"
          },
          {
            "id": "c-p2",
            "t": "text",
            "text": "đăng ký, giấy phép",
            "x": 4266,
            "y": 250,
            "size": 34,
            "at": "l2:registration",
            "color": "muted"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Giấy tờ đứng sau",
            "x": 3996,
            "y": 500,
            "size": 64,
            "at": "l3:paperwork",
            "color": "accent",
            "hl": [
              {
                "text": "đứng sau",
                "at": "l3:behind"
              }
            ]
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "hiểu khách + tính tiền",
            "x": 3996,
            "y": 600,
            "size": 46,
            "at": "l3:customers"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Planning means market research, a business plan, startup costs and funding.",
          "sub": "Lập kế hoạch gồm: nghiên cứu thị trường, viết kế hoạch, tính chi phí khởi sự, tìm vốn.",
          "keys": [
            "nghiên cứu thị trường"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Location, name, registration, licences, bank account, insurance: those wait for launching.",
          "sub": "Địa điểm, tên, đăng ký, giấy phép, tài khoản, bảo hiểm: chờ tới chặng khởi sự."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In other words, paperwork stands behind knowing customers and counting money.",
          "sub": "Nói cách khác, giấy tờ đứng sau việc hiểu khách và tính tiền.",
          "keys": [
            "giấy tờ đứng sau"
          ]
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s06",
      "module": "BRK-10",
      "data": {
        "quote": "Thị trường trước, sản xuất sau",
        "mark": "Thị trường trước",
        "by": "Chris Guillebeau, The $100 Startup",
        "illus": "open-book"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Chris Guillebeau calls it: market before manufacturing.",
          "sub": "Chris Guillebeau gọi là: “Thị trường trước, sản xuất sau.”",
          "keys": [
            "Thị trường trước, sản xuất sau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Prove people will buy. Then build.",
          "sub": "Chứng minh có người mua, rồi mới làm."
        }
      ],
      "ref": "p2"
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
            "text": "Tháng 1 · Bán trước khi viết",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:example",
            "hl": [
              {
                "text": "Bán trước",
                "at": "l2:before"
              }
            ]
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "face": "surprised",
                  "pose": "think"
                }
              ],
              "props": [
                "newspaper",
                "laptop"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3",
            "caption": "Cùng tối · Thảo đọc tiếp",
            "icon": "newspaper"
          },
          {
            "id": "d-np",
            "t": "illus",
            "name": "newspaper",
            "x": 5964,
            "y": 150,
            "size": 110,
            "at": "l2:magazine"
          },
          {
            "id": "d-ad",
            "t": "text",
            "text": "Quảng cáo trước",
            "x": 6094,
            "y": 170,
            "size": 52,
            "at": "l2:ad"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "→ 2 người đặt mua",
            "x": 6094,
            "y": 250,
            "size": 50,
            "at": "l2:Two",
            "color": "accent",
            "hl": [
              {
                "text": "2 người",
                "at": "l2:Two"
              }
            ]
          },
          {
            "id": "d-30",
            "t": "text",
            "text": "Chờ 30 ngày + hoàn tiền",
            "x": 5964,
            "y": 360,
            "size": 50,
            "at": "l4:thirty",
            "hl": [
              {
                "text": "30 ngày",
                "at": "l4:thirty"
              }
            ]
          },
          {
            "id": "d-done",
            "t": "text",
            "text": "Viết xong trong tháng",
            "x": 5964,
            "y": 450,
            "size": 50,
            "at": "l4:finished",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "His example: a friend selling an in-depth guide for the luxury car trade.",
          "sub": "Ví dụ: một người bạn muốn bán cuốn hướng dẫn chuyên sâu về xe hơi cao cấp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He placed a magazine ad before writing it. Two people ordered.",
          "sub": "Anh đăng quảng cáo trên tạp chí trước khi viết. Có hai người đặt mua.",
          "keys": [
            "trước khi viết"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Selling a book that doesn't exist yet? That's bold.",
          "sub": "Bán cuốn sách còn chưa có? Liều thật đấy.",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not quite. They waited thirty days, with a refund option. He finished that month.",
          "sub": "Không hẳn. Họ chờ ba mươi ngày, có quyền hoàn tiền. Anh viết xong ngay tháng đó.",
          "keys": [
            "ba mươi ngày"
          ]
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s08",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "Có giấy phép, văn phòng, logo rồi mới hỏi khách",
        "right": "Hỏi khách trước: chẳng cần văn phòng",
        "wrongIllus": "office-building",
        "rightIllus": "speech-balloon"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Licence, office and logo before asking anyone?",
          "sub": "Giấy phép, văn phòng, logo xong mới hỏi khách?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. Talking to customers needs no office.",
          "sub": "Không. Trò chuyện với khách chẳng cần văn phòng.",
          "keys": [
            "chẳng cần văn phòng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p3"
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
            "at": "l4",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-ask",
            "t": "text",
            "text": "Hỏi: đang xử lý thế nào?",
            "x": 5964,
            "y": 530,
            "size": 46,
            "at": "l1:solve"
          },
          {
            "id": "d-pre",
            "t": "text",
            "text": "Mời đặt trước gói nhỏ",
            "x": 5964,
            "y": 595,
            "size": 46,
            "at": "l1:pre-order",
            "hl": [
              {
                "text": "đặt trước",
                "at": "l1:pre-order"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Đừng bỏ giấy tờ",
            "x": 5964,
            "y": 665,
            "size": 56,
            "at": "l3:never",
            "color": "accent",
            "hl": [
              {
                "text": "Đừng bỏ",
                "at": "l3:never skip"
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
          "say": "Ask how they solve the problem today, or invite them to pre-order a small package.",
          "sub": "Hỏi họ đang xử lý vấn đề thế nào, hay mời đặt trước một gói nhỏ.",
          "keys": [
            "đặt trước một gói nhỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The rule: customers first, paperwork later. But never skip the paperwork.",
          "sub": "Rút ra: hỏi khách trước, giấy tờ sau, nhưng đừng bỏ giấy tờ.",
          "keys": [
            "đừng bỏ giấy tờ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "So the logo goes into the drawer. For now.",
          "sub": "Vậy logo vào ngăn kéo. Tạm thời.",
          "face": "happy"
        }
      ],
      "ref": "p3,p4"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "Tháng 2 · Bước 1: Vấn đề",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:February",
            "hl": [
              {
                "text": "Vấn đề",
                "at": "l1:problem"
              }
            ]
          },
          {
            "id": "e-c1",
            "t": "text",
            "text": "Kỹ năng",
            "x": 7992,
            "y": 300,
            "size": 54,
            "at": "l3:skill",
            "color": "accent"
          },
          {
            "id": "e-cx",
            "t": "text",
            "text": "∩",
            "x": 8272,
            "y": 290,
            "size": 70,
            "at": "l3:and"
          },
          {
            "id": "e-c2",
            "t": "text",
            "text": "Khách chịu trả",
            "x": 8352,
            "y": 300,
            "size": 54,
            "at": "l3:pay",
            "color": "accent"
          },
          {
            "id": "e-r1",
            "t": "box",
            "x": 7952,
            "y": 260,
            "w": 300,
            "h": 140,
            "at": "l3:circles",
            "stroke": 4
          },
          {
            "id": "e-r2",
            "t": "box",
            "x": 8332,
            "y": 260,
            "w": 370,
            "h": 140,
            "at": "l3:circles+300",
            "stroke": 4
          },
          {
            "id": "e-q",
            "t": "text",
            "text": "Đã có ai nhờ bạn chưa?",
            "x": 7932,
            "y": 460,
            "size": 56,
            "at": "l4:asked",
            "color": "coral",
            "hl": [
              {
                "text": "nhờ bạn",
                "at": "l4:asked"
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
          "say": "February. Step one: find a problem customers will pay to solve.",
          "sub": "Tháng Hai. Bước một: tìm vấn đề khách sẵn lòng trả tiền.",
          "keys": [
            "Bước một"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Guillebeau draws two circles: your skill or passion, and what people will pay for.",
          "sub": "Guillebeau vẽ hai vòng tròn: kỹ năng hay đam mê của bạn, và điều người khác chịu trả tiền.",
          "keys": [
            "hai vòng tròn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Start with one question: has anyone ever asked you for help with this?",
          "sub": "Bắt đầu bằng một câu: đã có ai từng nhờ bạn giúp việc này chưa?",
          "keys": [
            "đã có ai từng nhờ"
          ]
        }
      ],
      "ref": "p5"
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
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "ledger",
                "steaming-bowl"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Hoa",
            "caption": "Quán ăn đầu hẻm · trưa Chủ nhật",
            "icon": "steaming-bowl"
          },
          {
            "id": "e-sig",
            "t": "text",
            "text": "Hỏi mãi = tín hiệu",
            "x": 7932,
            "y": 570,
            "size": 56,
            "at": "l3:signal",
            "color": "accent",
            "hl": [
              {
                "text": "tín hiệu",
                "at": "l3:signal"
              }
            ]
          },
          {
            "id": "e-nx",
            "t": "text",
            "text": "→ bài: tìm vấn đề khách trả tiền",
            "x": 7932,
            "y": 670,
            "size": 38,
            "at": "l3:end",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thảo thinks of Cô Hoa, who runs the food stall at the top of the alley.",
          "sub": "Thảo nghĩ ngay tới cô Hoa, chủ quán ăn đầu hẻm.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, how do I keep my sales book again? And when is the tax filing due?",
          "sub": "Thảo ơi, sổ bán hàng ghi sao ấy nhỉ? Mà hạn kê khai là bao giờ?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "She keeps asking. That's not small talk. That's a signal.",
          "sub": "Cô cứ hỏi mãi. Đó không phải chuyện phiếm, mà là tín hiệu.",
          "keys": [
            "tín hiệu"
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
      "ref": "p5"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "Tháng 3 · Bước 2: Thử rẻ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:March",
            "hl": [
              {
                "text": "Thử rẻ",
                "at": "l1:cheaply"
              }
            ]
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "① Hỏi 10 người đúng khách",
            "x": 60,
            "y": 1250,
            "size": 48,
            "at": "l2:ten",
            "hl": [
              {
                "text": "10 người",
                "at": "l2:ten"
              }
            ]
          },
          {
            "id": "f-1b",
            "t": "text",
            "text": "đang xử lý sao? trả bao nhiêu?",
            "x": 110,
            "y": 1315,
            "size": 38,
            "at": "l3:handle",
            "color": "muted"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "② Gợi ý tìm kiếm, từ khoá",
            "x": 60,
            "y": 1390,
            "size": 48,
            "at": "l4:search"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "③ Mời mua trước, giá thật",
            "x": 60,
            "y": 1470,
            "size": 52,
            "at": "l5:pre-order",
            "color": "accent",
            "hl": [
              {
                "text": "giá thật",
                "at": "l5:real price"
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
          "say": "March. Step two: test it, really cheaply.",
          "sub": "Tháng Ba. Bước hai: thử, thật rẻ.",
          "keys": [
            "thật rẻ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three cheap moves. One: ask ten people who fit your customer.",
          "sub": "Ba việc ít tốn tiền. Một: hỏi mười người đúng chân dung khách.",
          "keys": [
            "mười người"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "How do they handle it now, and what would they pay for better?",
          "sub": "Họ đang xử lý thế nào, và sẽ trả bao nhiêu cho cách tốt hơn?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two: check search suggestions and free keyword tools.",
          "sub": "Hai: xem gợi ý tìm kiếm, công cụ từ khoá miễn phí."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Three: invite a pre-order for a small package, at a real price.",
          "sub": "Ba: mời mua trước một gói nhỏ, giá thật.",
          "keys": [
            "giá thật"
          ]
        }
      ],
      "ref": "p6"
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
            "at": "l1",
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
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "ledger",
                "receipt"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Quán cô Hoa · cuối tháng Ba",
            "icon": "receipt"
          },
          {
            "id": "f-12",
            "t": "text",
            "text": "Thử: nhiều nhất 1–2 tuần",
            "x": 60,
            "y": 1590,
            "size": 52,
            "at": "l3:week",
            "color": "accent",
            "hl": [
              {
                "text": "1–2 tuần",
                "at": "l3:two"
              }
            ]
          },
          {
            "id": "f-nx",
            "t": "text",
            "text": "→ bài: thử ý tưởng ít tiền nhất",
            "x": 60,
            "y": 1690,
            "size": 38,
            "at": "l3:end",
            "color": "muted"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Guillebeau, How to Test Your Business Idea",
            "x": 60,
            "y": 1810,
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
          "say": "Cô Hoa, a monthly bookkeeping package, real price. Will you be my first?",
          "sub": "Cô Hoa ơi, gói ghi sổ hằng tháng, giá thật. Cô làm khách đầu tiên nhé?",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "If it saves me the headache, sure. Deal!",
          "sub": "Đỡ đau đầu là được. Rồi, vậy nha!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "How long should a test take? A week or two at most, says Guillebeau.",
          "sub": "Thử bao lâu? Guillebeau bảo: nhiều nhất một hai tuần.",
          "keys": [
            "một hai tuần"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "Có khách rồi. Giờ viết kế hoạch thật dày cho chắc?",
        "illus": "books"
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
          "say": "A paying customer! Now a thick business plan, just to be safe?",
          "sub": "Có khách trả tiền rồi! Giờ viết kế hoạch thật dày cho chắc?",
          "keys": [
            "thật dày"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p7"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "Tháng 4 · Bước 3: Một trang",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:April",
            "hl": [
              {
                "text": "Một trang",
                "at": "l1:one page"
              }
            ]
          },
          {
            "id": "g-tr",
            "t": "text",
            "text": "Truyền thống: hàng chục trang",
            "x": 2028,
            "y": 1250,
            "size": 46,
            "at": "l2:Traditional",
            "color": "muted"
          },
          {
            "id": "g-bank",
            "t": "text",
            "text": "ngân hàng, nhà đầu tư cần",
            "x": 2068,
            "y": 1315,
            "size": 36,
            "at": "l2:banks",
            "color": "muted"
          },
          {
            "id": "g-ln",
            "t": "text",
            "text": "Tinh gọn: 1 trang, ~1 giờ",
            "x": 2028,
            "y": 1390,
            "size": 52,
            "at": "l3:lean",
            "color": "accent",
            "hl": [
              {
                "text": "1 trang",
                "at": "l3:one page"
              }
            ]
          },
          {
            "id": "g-b0",
            "t": "box",
            "x": 2868,
            "y": 1250,
            "w": 240,
            "h": 120,
            "at": "l3:nine+0",
            "stroke": 4
          },
          {
            "id": "g-bt0",
            "t": "text",
            "text": "Khách",
            "x": 2888,
            "y": 1285,
            "size": 36,
            "at": "l3:nine+100"
          },
          {
            "id": "g-b1",
            "t": "box",
            "x": 3128,
            "y": 1250,
            "w": 240,
            "h": 120,
            "at": "l3:nine+150",
            "stroke": 4
          },
          {
            "id": "g-bt1",
            "t": "text",
            "text": "Giá trị",
            "x": 3148,
            "y": 1285,
            "size": 36,
            "at": "l3:nine+250"
          },
          {
            "id": "g-b2",
            "t": "box",
            "x": 3388,
            "y": 1250,
            "w": 240,
            "h": 120,
            "at": "l3:nine+300",
            "stroke": 4
          },
          {
            "id": "g-bt2",
            "t": "text",
            "text": "Kênh",
            "x": 3408,
            "y": 1285,
            "size": 36,
            "at": "l3:nine+400"
          },
          {
            "id": "g-b3",
            "t": "box",
            "x": 2868,
            "y": 1390,
            "w": 240,
            "h": 120,
            "at": "l3:nine+450",
            "stroke": 4
          },
          {
            "id": "g-bt3",
            "t": "text",
            "text": "Doanh thu",
            "x": 2888,
            "y": 1425,
            "size": 36,
            "at": "l3:nine+550"
          },
          {
            "id": "g-b4",
            "t": "box",
            "x": 3128,
            "y": 1390,
            "w": 240,
            "h": 120,
            "at": "l3:nine+600",
            "stroke": 4
          },
          {
            "id": "g-bt4",
            "t": "text",
            "text": "Chi phí",
            "x": 3148,
            "y": 1425,
            "size": 36,
            "at": "l3:nine+700"
          },
          {
            "id": "g-b5",
            "t": "box",
            "x": 3388,
            "y": 1390,
            "w": 240,
            "h": 120,
            "at": "l3:nine+750",
            "stroke": 4
          },
          {
            "id": "g-bt5",
            "t": "text",
            "text": "…",
            "x": 3408,
            "y": 1425,
            "size": 36,
            "at": "l3:nine+850"
          },
          {
            "id": "g-b6",
            "t": "box",
            "x": 2868,
            "y": 1530,
            "w": 240,
            "h": 120,
            "at": "l3:nine+900",
            "stroke": 4
          },
          {
            "id": "g-bt6",
            "t": "text",
            "text": "…",
            "x": 2888,
            "y": 1565,
            "size": 36,
            "at": "l3:nine+1000"
          },
          {
            "id": "g-b7",
            "t": "box",
            "x": 3128,
            "y": 1530,
            "w": 240,
            "h": 120,
            "at": "l3:nine+1050",
            "stroke": 4
          },
          {
            "id": "g-bt7",
            "t": "text",
            "text": "…",
            "x": 3148,
            "y": 1565,
            "size": 36,
            "at": "l3:nine+1150"
          },
          {
            "id": "g-b8",
            "t": "box",
            "x": 3388,
            "y": 1530,
            "w": 240,
            "h": 120,
            "at": "l3:nine+1200",
            "stroke": 4
          },
          {
            "id": "g-bt8",
            "t": "text",
            "text": "…",
            "x": 3408,
            "y": 1565,
            "size": 36,
            "at": "l3:nine+1300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "April. Step three: a business model on one page.",
          "sub": "Tháng Tư. Bước ba: mô hình kinh doanh trên một trang.",
          "keys": [
            "một trang"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "SBA: a traditional plan runs dozens of pages, often for banks and investors.",
          "sub": "SBA: kế hoạch truyền thống dài hàng chục trang, thường cho ngân hàng, nhà đầu tư.",
          "keys": [
            "hàng chục trang"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A lean plan: one page, about an hour, nine boxes like customers, value, channels, revenue, costs.",
          "sub": "Tinh gọn: một trang, chừng một giờ, chín ô: khách, giá trị, kênh, doanh thu, chi phí...",
          "keys": [
            "chín ô"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "But Thảo, being Thảo...",
          "sub": "Nhưng Thảo vẫn là Thảo..."
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s16",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Tháng Tư · nhiều tuần liền",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Viết kế hoạch dày khi chưa hỏi hộ nào",
          "why": "Nhiều trang về thị trường, nhưng chưa biết ai sẽ trả tiền.",
          "rule": "Một trang, mang đi hỏi khách, sửa theo điều nghe được"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Week after week, page after page about the market!",
          "sub": "Tuần này qua tuần khác, trang nối trang về thị trường!",
          "face": "happy",
          "pose": "hold",
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
          "say": "Many pages, still no idea who will pay.",
          "sub": "Nhiều trang, mà chưa biết ai sẽ trả tiền.",
          "keys": [
            "ai sẽ trả tiền"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "One page, one evening. Then I show it to a few shop owners I know.",
          "sub": "Một trang, một buổi tối. Rồi mang đi hỏi vài chủ hộ quen.",
          "phase": "redo",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Short, but every box has evidence. A full plan only if a bank loan comes.",
          "sub": "Ngắn, nhưng ô nào cũng có bằng chứng. Cần vay mới viết bản đầy đủ.",
          "phase": "redo",
          "keys": [
            "ô nào cũng có bằng chứng"
          ]
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
            "id": "g-k",
            "t": "text",
            "text": "1 trang kiểm bằng khách",
            "x": 2028,
            "y": 1630,
            "size": 58,
            "at": "l1:checked",
            "color": "accent",
            "hl": [
              {
                "text": "kiểm bằng khách",
                "at": "l1:real customers"
              }
            ]
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "> 10 trang viết một mình",
            "x": 2028,
            "y": 1720,
            "size": 50,
            "at": "l1:ten",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One page checked with real customers beats ten pages written alone.",
          "sub": "Một trang được kiểm bằng khách thật đáng giá hơn mười trang viết một mình.",
          "keys": [
            "khách thật"
          ]
        }
      ],
      "ref": "p9"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "Tháng 5 · Bước 4: Vốn",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:May",
            "hl": [
              {
                "text": "Vốn",
                "at": "l1:money"
              }
            ]
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Một lần: thiết bị, logo, giấy phép",
            "x": 3996,
            "y": 1250,
            "size": 42,
            "at": "l2:One-time"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Hằng tháng: lương, thuê, điện nước",
            "x": 3996,
            "y": 1320,
            "size": 42,
            "at": "l3:Monthly"
          },
          {
            "id": "h-y",
            "t": "text",
            "text": "Dự trù ≥ 1 năm (lý tưởng 5)",
            "x": 3996,
            "y": 1400,
            "size": 50,
            "at": "l4:least",
            "color": "accent",
            "hl": [
              {
                "text": "≥ 1 năm",
                "at": "l4:one year"
              }
            ]
          },
          {
            "id": "h-10",
            "t": "text",
            "text": "+ khoảng 10% phát sinh",
            "x": 3996,
            "y": 1480,
            "size": 50,
            "at": "l4:ten",
            "hl": [
              {
                "text": "10%",
                "at": "l4:percent"
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
          "say": "May. Step four: money, and the family's risk.",
          "sub": "Tháng Năm. Bước bốn: tiền vốn, và rủi ro của cả nhà.",
          "keys": [
            "rủi ro của cả nhà"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "SBA splits costs in two. One-time: equipment, logo design, licences, fees.",
          "sub": "SBA chia chi phí làm hai nhóm. Một lần: thiết bị lớn, thiết kế logo, giấy phép, lệ phí."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Monthly: salaries, rent, utilities.",
          "sub": "Hằng tháng: lương, tiền thuê, điện nước."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Budget at least one year of monthly costs, ideally five, plus about ten percent.",
          "sub": "Dự trù ít nhất một năm chi phí hằng tháng, lý tưởng năm năm, cộng khoảng 10%.",
          "keys": [
            "ít nhất một năm"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s19",
      "module": "BRK-03",
      "data": {
        "value": 10,
        "suffix": "%",
        "label": "cộng thêm cho khoản phát sinh (SBA)",
        "illus": "ring-buoy"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Remember the cushion number.",
          "sub": "Nhớ con số đệm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "About ten percent extra, for whatever you forgot.",
          "sub": "Thêm khoảng mười phần trăm, cho những khoản quên tính.",
          "keys": [
            "mười phần trăm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p10"
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
          },
          {
            "at": "l4",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
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
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "hot-beverage",
                "wrench"
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
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
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
            "at": "l1:coffee",
            "caption": "Sáng thứ Bảy · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "h-self",
            "t": "text",
            "text": "Tự bỏ vốn: toàn quyền",
            "x": 3996,
            "y": 1560,
            "size": 46,
            "at": "l3:control"
          },
          {
            "id": "h-risk",
            "t": "text",
            "text": "… và toàn bộ rủi ro",
            "x": 4036,
            "y": 1625,
            "size": 46,
            "at": "l3:risk",
            "color": "coral",
            "hl": [
              {
                "text": "toàn bộ rủi ro",
                "at": "l3:all the risk"
              }
            ]
          },
          {
            "id": "h-sc",
            "t": "text",
            "text": "Bước 5 · SCORE: vừa làm vừa thử",
            "x": 3996,
            "y": 1710,
            "size": 42,
            "at": "l5:SCORE",
            "color": "accent",
            "hl": [
              {
                "text": "vừa làm vừa thử",
                "at": "l5:employed"
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
          "say": "Saturday coffee. Meet Dũng, Thảo's old classmate, a maintenance engineer with his own idea.",
          "sub": "Cà phê sáng thứ Bảy. Còn đây là Dũng, bạn học cũ của Thảo, kỹ sư bảo trì, cũng có ý tưởng riêng.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Self-funding is the best! Nobody tells me what to do.",
          "sub": "Tự bỏ vốn là nhất! Chẳng ai bảo mình phải làm gì.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Full control, yes. But you carry all the risk. Spend only what you can bear.",
          "sub": "Toàn quyền, đúng. Nhưng gánh toàn bộ rủi ro. Chỉ chi mức mình chịu được.",
          "keys": [
            "toàn bộ rủi ro"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "And I'm quitting next week. Okay, done!",
          "sub": "Còn anh, tuần sau nghỉ việc luôn. Ok, xong!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Step five: SCORE says building while employed keeps your salary and stability.",
          "sub": "Bước năm: SCORE nói vừa đi làm vừa khởi nghiệp giúp giữ lương, giữ ổn định.",
          "keys": [
            "giữ lương"
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
      "ref": "p10,p11"
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
            "at": "l3:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-45",
            "t": "text",
            "text": "Nghỉ: báo trước, ví dụ 45 ngày",
            "x": 3996,
            "y": 1780,
            "size": 42,
            "at": "l2:forty-five",
            "color": "coral",
            "hl": [
              {
                "text": "45 ngày",
                "at": "l2:forty-five"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: SBA · SCORE · Thư viện Pháp luật (BLLĐ 2019)",
            "x": 4836,
            "y": 1810,
            "size": 24,
            "at": "l1",
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
          "say": "And if you resign? Under the 2019 Labour Code, no reason needed, but notice is.",
          "sub": "Còn nếu nghỉ? Theo Bộ luật Lao động 2019, không cần nêu lý do, nhưng phải báo trước.",
          "keys": [
            "phải báo trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For example, forty-five days on an open-ended contract.",
          "sub": "Ví dụ: 45 ngày với hợp đồng không xác định thời hạn.",
          "keys": [
            "45 ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Forty-five days? So next week was a bit optimistic.",
          "sub": "45 ngày? Vậy “tuần sau” hơi lạc quan rồi.",
          "face": "surprised"
        }
      ],
      "ref": "p11"
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
            "at": "l4",
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
            "text": "Tháng 6 · Giờ mới giấy tờ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:June",
            "hl": [
              {
                "text": "giấy tờ",
                "at": "l1:paperwork"
              }
            ]
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "page-facing-up",
                "balance-scale"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
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
            "at": "l1",
            "caption": "Tối thứ Tư · đọc luật",
            "icon": "balance-scale"
          },
          {
            "id": "i-hkd",
            "t": "text",
            "text": "Hộ KD: toàn bộ tài sản",
            "x": 5964,
            "y": 1250,
            "size": 50,
            "at": "l2:household",
            "color": "coral",
            "hl": [
              {
                "text": "toàn bộ tài sản",
                "at": "l2:all"
              }
            ]
          },
          {
            "id": "i-dn",
            "t": "text",
            "text": "Công ty: trong vốn đã góp",
            "x": 5964,
            "y": 1335,
            "size": 50,
            "at": "l3:Limited",
            "hl": [
              {
                "text": "vốn đã góp",
                "at": "l3:capital"
              }
            ]
          },
          {
            "id": "i-hk2",
            "t": "text",
            "text": "Hộ: nhỏ, đơn giản",
            "x": 5964,
            "y": 1430,
            "size": 44,
            "at": "l5:small",
            "color": "muted"
          },
          {
            "id": "i-dn2",
            "t": "text",
            "text": "DN: chặt, chi nhánh, gọi vốn",
            "x": 5964,
            "y": 1490,
            "size": 44,
            "at": "l5:branches",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "June. Thảo has paying customers. Now, paperwork: a household business, or a company?",
          "sub": "Tháng Sáu. Thảo đã có khách trả tiền. Giờ mới đến giấy tờ: hộ kinh doanh hay doanh nghiệp?",
          "keys": [
            "hộ kinh doanh hay doanh nghiệp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A household business is liable with all the owners' assets.",
          "sub": "Hộ kinh doanh chịu trách nhiệm bằng toàn bộ tài sản của người đăng ký.",
          "keys": [
            "toàn bộ tài sản"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Limited and joint stock companies, only within the capital contributed.",
          "sub": "Công ty TNHH, công ty cổ phần: chỉ trong phạm vi vốn đã góp.",
          "keys": [
            "phạm vi vốn đã góp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "With two kids, I read 'all assets' twice.",
          "sub": "Có hai con, cụm “toàn bộ tài sản” mình đọc hai lần.",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Households suit small, simple work. Companies suit branches and investors.",
          "sub": "Hộ hợp quy mô nhỏ, đơn giản. Doanh nghiệp hợp mở chi nhánh, gọi đầu tư."
        }
      ],
      "ref": "p12"
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
          }
        ],
        "items": [
          {
            "id": "i-reg",
            "t": "text",
            "text": "Từ 24/7/2026: nộp ở cấp xã",
            "x": 5964,
            "y": 1580,
            "size": 46,
            "at": "l1:commune",
            "hl": [
              {
                "text": "cấp xã",
                "at": "l1:commune"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "03 ngày làm việc",
            "x": 5964,
            "y": 1660,
            "size": 56,
            "at": "l2:three",
            "color": "accent",
            "hl": [
              {
                "text": "03 ngày",
                "at": "l2:three working days"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật, QĐ 1995/QĐ-BTC",
            "x": 6804,
            "y": 1828,
            "size": 24,
            "at": "l1",
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
          "say": "From twenty-four July, twenty twenty-six, households register at the commune-level office.",
          "sub": "Đăng ký hộ kinh doanh từ 24/7/2026: nộp ở cơ quan đăng ký kinh doanh cấp xã.",
          "keys": [
            "cấp xã"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In person, by post or online, in three working days.",
          "sub": "Trực tiếp, bưu chính hay qua mạng, trong 03 ngày làm việc.",
          "keys": [
            "03 ngày làm việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That quick. So know your customers first.",
          "sub": "Nhanh vậy, nên cứ biết khách trước đã."
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s24",
      "module": "BRK-03",
      "data": {
        "from": 100,
        "value": 500,
        "suffix": " triệu",
        "label": "doanh thu năm trở xuống: không thuế TNCN, GTGT",
        "illus": "money-bag"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The old line: one hundred million a year.",
          "sub": "Ngưỡng cũ: 100 triệu một năm.",
          "keys": [
            "100 triệu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "From twenty twenty-six: five hundred million.",
          "sub": "Từ 2026: 500 triệu.",
          "keys": [
            "500 triệu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s25",
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
            "at": "l3:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-tax",
            "t": "text",
            "text": "Từ 2026: bỏ thuế khoán, môn bài",
            "x": 5964,
            "y": 1740,
            "size": 42,
            "at": "l1:presumptive",
            "hl": [
              {
                "text": "bỏ thuế khoán",
                "at": "l1:presumptive"
              }
            ]
          },
          {
            "id": "i-rec",
            "t": "text",
            "text": "Ghi doanh thu từ khách đầu",
            "x": 5964,
            "y": 1802,
            "size": 40,
            "at": "l2:record",
            "color": "accent",
            "hl": [
              {
                "text": "Ghi doanh thu",
                "at": "l2:record revenue"
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
          "say": "Below it, no income tax or VAT. Presumptive tax and the licence fee end too.",
          "sub": "Dưới mức đó: không thuế TNCN, GTGT. Bỏ cả thuế khoán và lệ phí môn bài.",
          "keys": [
            "Bỏ cả thuế khoán"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The line counts yearly revenue. So record revenue from your very first customer.",
          "sub": "Ngưỡng tính theo doanh thu cả năm, nên hãy ghi doanh thu ngay từ khách đầu tiên.",
          "keys": [
            "ghi doanh thu ngay từ khách đầu tiên"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Cô Hoa. Line number one, in my red notebook.",
          "sub": "Cô Hoa. Dòng số một, trong cuốn sổ đỏ.",
          "face": "happy"
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s26",
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
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Bước 6 · Mốc năm đầu",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Step six",
            "hl": [
              {
                "text": "Mốc",
                "at": "l1:milestones"
              }
            ]
          },
          {
            "id": "j-be",
            "t": "text",
            "text": "Hoà vốn: thu = chi",
            "x": 7932,
            "y": 1250,
            "size": 56,
            "at": "l2:equals",
            "color": "accent",
            "hl": [
              {
                "text": "thu = chi",
                "at": "l2:equals"
              }
            ]
          },
          {
            "id": "j-why",
            "t": "text",
            "text": "định giá · chỉ tiêu",
            "x": 7932,
            "y": 1335,
            "size": 38,
            "at": "l3:prices",
            "color": "muted"
          },
          {
            "id": "j-num",
            "t": "text",
            "text": "Quyết bằng số, không cảm xúc",
            "x": 7932,
            "y": 1400,
            "size": 46,
            "at": "l3:facts",
            "hl": [
              {
                "text": "bằng số",
                "at": "l3:facts"
              }
            ]
          },
          {
            "id": "j-go",
            "t": "text",
            "text": "Đi tiếp · thu hẹp · dừng",
            "x": 7932,
            "y": 1490,
            "size": 52,
            "at": "l4:scale",
            "color": "coral",
            "hl": [
              {
                "text": "dừng",
                "at": "l4:stop"
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
          "say": "Step six: first-year milestones. Start with the break-even point.",
          "sub": "Bước sáu: mốc cho năm đầu. Bắt đầu từ điểm hoà vốn.",
          "keys": [
            "điểm hoà vốn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Total revenue equals total cost. No loss, no profit.",
          "sub": "Tổng doanh thu bằng tổng chi phí. Không lỗ, không lãi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "SBA says it helps with prices, sales targets and deciding with facts.",
          "sub": "SBA nói nó giúp định giá, đặt chỉ tiêu, quyết bằng số liệu thay vì cảm xúc.",
          "keys": [
            "số liệu thay vì cảm xúc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Write a few milestones in advance: when to go on, scale down, or stop.",
          "sub": "Viết sẵn vài mốc: lúc nào đi tiếp, thu hẹp, hay dừng.",
          "keys": [
            "thu hẹp, hay dừng"
          ]
        }
      ],
      "ref": "p16"
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
            "at": "l3",
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
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "bin",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "ledger",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Sáu · tháng Sáu · cùng cái bàn",
            "icon": "crescent-moon"
          },
          {
            "id": "j-nb",
            "t": "illus",
            "name": "ledger",
            "x": 7932,
            "y": 1560,
            "size": 110,
            "at": "l4:notebook"
          },
          {
            "id": "j-nbt",
            "t": "text",
            "text": "Sổ đỏ: khách thật",
            "x": 8062,
            "y": 1580,
            "size": 50,
            "at": "l4:notebook+200",
            "hl": [
              {
                "text": "khách thật",
                "at": "l4:real customers"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Bò trước, chạy sau",
            "x": 7932,
            "y": 1710,
            "size": 60,
            "at": "l5:crawled",
            "color": "accent",
            "hl": [
              {
                "text": "Bò trước",
                "at": "l5:crawled"
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
          "say": "Friday night, June. Same desk as in January.",
          "sub": "Tối thứ Sáu, tháng Sáu. Vẫn cái bàn tháng Một."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Bé Bin, Thảo's son, nine years old and full of questions.",
          "sub": "Còn đây là Bé Bin, con trai Thảo, chín tuổi, chuyên gia hỏi “Sao vậy ạ?”.",
          "keys": [
            "Bé Bin"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "bin",
          "say": "Mum, where's the pretty logo?",
          "sub": "Mẹ ơi, cái logo đẹp đâu rồi ạ?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "In the drawer. This red notebook has real customers in it.",
          "sub": "Trong ngăn kéo con ạ. Cuốn sổ đỏ này mới có khách thật.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Run before you crawl? Thảo crawled first: customers, a cheap test, one page, the money.",
          "sub": "“Chưa học bò đã lo học chạy”? Thảo bò trước: khách, thử rẻ, một trang, tiền.",
          "keys": [
            "Thảo bò trước"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Now she can run.",
          "sub": "Giờ thì chạy được rồi."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "outro"
    },
    {
      "id": "s28",
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
            "ms": 1200
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
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "I",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 6544,
            "y": 650,
            "at": "l1+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 720,
            "y": 1590,
            "at": "l2+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1400,
            "at": "l3+400"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 6464,
            "y": 1670,
            "at": "l4+400"
          },
          {
            "id": "z-src",
            "t": "text",
            "text": "Bài để tham khảo; quy định có thể thay đổi, cần thì hỏi cơ quan/chuyên gia. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 24,
            "at": "l5:end",
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
          "say": "So: customers first, paperwork later. But never skip it.",
          "sub": "Tóm lại: khách trước, giấy tờ sau, nhưng đừng bỏ.",
          "keys": [
            "khách trước, giấy tờ sau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Test cheaply, in a week or two.",
          "sub": "Thử rẻ, trong một hai tuần.",
          "keys": [
            "Thử rẻ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Budget a year plus ten percent, and limit the family's risk.",
          "sub": "Dự trù một năm, cộng 10%, giới hạn rủi ro cho gia đình.",
          "keys": [
            "giới hạn rủi ro"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Record revenue from customer number one.",
          "sub": "Ghi doanh thu từ khách số một."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next video: spotting a problem customers will pay to solve.",
          "sub": "Bài sau: nhận ra vấn đề khách sẵn lòng trả tiền."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p17,outro"
    },
    {
      "id": "s29",
      "module": "QUIZ-01",
      "data": {
        "q": "Your friend says you must design a logo before asking anyone, what is a better reply?",
        "options": [
          "Agree, and spend the savings on branding before checking any customer need",
          "Talk to possible customers first, then do the paperwork once someone will pay",
          "Skip customers entirely and wait until the business is officially registered"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "artist-palette",
        "why": "Hỏi khách trước; có người trả tiền rồi mới làm giấy tờ, logo."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your friend says you must design a logo before asking anyone, what is a better reply?",
          "sub": "Bạn của bạn nói phải thiết kế logo trước khi hỏi ai, câu đáp nào tốt hơn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Talk to possible customers first. Paperwork comes once someone will pay.",
          "sub": "Hỏi khách trước. Có người trả tiền rồi mới làm giấy tờ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "The logo can wait in the drawer.",
          "sub": "Logo cứ chờ trong ngăn kéo."
        }
      ],
      "ref": "questions[7]"
    },
    {
      "id": "s30",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi viết ra ba người từng nhờ bạn giúp"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, write down three people who once asked you for help at work.",
          "sub": "Tối nay, viết ra ba người từng nhờ bạn giúp một việc trong nghề."
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
  "notes": "#145 bài MỚI (bài tổng chuỗi first-time-founders-after-35) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-20 (đáp án trước): “Khách trước, giấy tờ sau.” rồi “nghe dễ mà hay làm ngược”. Dòng thời gian: SÁU THÁNG của Thảo (tối thứ Sáu tháng 1 đang ngắm logo → T1 SBA bốn chặng → T1 bán trước khi viết + hiểu lầm → T2 bước 1, cô Hoa hỏi cách ghi sổ → T3 bước 2 thử rẻ, cô Hoa nhận gói → T4 bước 3 một trang + “Khoan đã!” kế hoạch dày → T5 vốn + Dũng tự bỏ vốn, đòi nghỉ tuần sau → T6 hộ KD/DN, 03 ngày, thuế → bước 6 hoà vốn → tối thứ Sáu tháng 6, cùng cái bàn: logo trong ngăn kéo, sổ đỏ có khách thật). Nhân vật theo w145/_series/first-time-founders-after-35.md: Thảo (= chị Mai p8, 37 tuổi, kế toán 10 năm), cô Hoa (chủ hộ quán ăn, khách đầu tiên — minh hoạ cho p3, p5, p6), Dũng (bạn học cũ, kỹ sư bảo trì; minh hoạ tự bỏ vốn p10 và chuyện nghỉ việc p11), Bé Bin. Số chỉ từ bài: 4 chặng SBA, 2 người đặt, 30 ngày, 10 người, 1–2 tuần, 1 trang/1 giờ/9 ô, ≥ 1 năm (lý tưởng 5) + ~10%, 45 ngày (BLLĐ 2019), 24/7/2026, 03 ngày làm việc, 100 → 500 triệu, 2026. Ngắt nhịp: BRK-10 s06 (trích Guillebeau p2), BRK-04 s08 (hiểu lầm p3), BRK-07 s14 (rehook kế hoạch dày), BRK-03 s19 (10% p10), BRK-03 s24 (100 → 500 triệu p14), DLG-01 s16 (p8 cách A → B). Tục ngữ: “Chưa học bò đã lo học chạy” (mở) → “bò trước, chạy sau” (khép). Lưu ý chung (#133) ở cảnh tóm tắt. Câu đố questions[7].",
  "loop": {
    "open": "s01",
    "close": "s27"
  }
};
