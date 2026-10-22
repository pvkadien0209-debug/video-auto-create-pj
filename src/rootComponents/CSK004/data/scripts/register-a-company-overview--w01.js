// register-a-company-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "register-a-company-overview--w01",
  "unit": {
    "audience": "founders-registering-a-company",
    "slug": "register-a-company-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Đăng ký thành lập doanh nghiệp lần đầu gồm những bước nào?",
    "series": "Thành lập công ty đúng ngay từ đầu — cho người lần đầu đăng ký doanh nghiệp ở Việt Nam"
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
            "id": "a-q",
            "t": "text",
            "text": "Khách đòi hoá đơn.",
            "x": 60,
            "y": 50,
            "size": 56,
            "at": "l1:invoice"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "Vậy bạn phải…?",
            "x": 60,
            "y": 125,
            "size": 56,
            "at": "l1:must",
            "hl": [
              {
                "text": "phải",
                "at": "l1:must"
              }
            ]
          },
          {
            "id": "a-ba",
            "t": "box",
            "x": 60,
            "y": 230,
            "w": 800,
            "h": 120,
            "at": "l2:A",
            "stroke": 5
          },
          {
            "id": "a-a",
            "t": "text",
            "text": "A · Lập công ty ngay",
            "x": 85,
            "y": 260,
            "size": 46,
            "at": "l2:A+200"
          },
          {
            "id": "a-bb",
            "t": "box",
            "x": 60,
            "y": 390,
            "w": 800,
            "h": 120,
            "at": "l2:B",
            "stroke": 5
          },
          {
            "id": "a-b",
            "t": "text",
            "text": "B · Chưa chắc phải lập",
            "x": 85,
            "y": 420,
            "size": 46,
            "at": "l2:B+200"
          },
          {
            "id": "a-g",
            "t": "text",
            "text": "Bạn chọn…?",
            "x": 60,
            "y": 560,
            "size": 56,
            "at": "l3:Pick",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A business customer wants a contract and an invoice. So you must do what?",
          "sub": "Một khách doanh nghiệp muốn ký hợp đồng và đòi hoá đơn. Vậy bạn phải làm gì?",
          "keys": [
            "đòi hoá đơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A: set up a company right now. B: not necessarily.",
          "sub": "A: lập công ty ngay. B: chưa chắc đã phải lập."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pick one. I'll wait.",
          "sub": "Chọn đi. Đét chờ."
        }
      ],
      "beats": {
        "after": 1200
      },
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
            "x": 920,
            "y": 130,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "hot-beverage",
                "receipt"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · quán của Cô Hoa",
            "icon": "hot-beverage"
          },
          {
            "id": "a-xa",
            "t": "strike",
            "over": "a-a",
            "at": "l5:wrong"
          },
          {
            "id": "a-rb",
            "t": "ring",
            "around": [
              "a-b"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l5:B"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Hộ ≥ 1 tỷ: hoá đơn có mã",
            "x": 920,
            "y": 630,
            "size": 36,
            "at": "l6:billion",
            "hl": [
              {
                "text": "1 tỷ",
                "at": "l6:billion"
              }
            ]
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "Nhỏ hơn: đăng ký, từng lần",
            "x": 920,
            "y": 690,
            "size": 32,
            "at": "l7:Smaller"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 03/7/2026",
            "x": 60,
            "y": 700,
            "size": 26,
            "at": "l6",
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
          "say": "Meet Thảo, a freelance bookkeeper for a few regular shops.",
          "sub": "Đây là Thảo, làm sổ sách kế toán tự do cho vài tiệm quen.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Cô Hoa, owner of a coffee chain. Her first business client.",
          "sub": "Còn đây là Cô Hoa, chủ chuỗi quán cà phê, khách doanh nghiệp đầu tiên của Thảo.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, let's sign a proper contract. Can you issue invoices? Right, tell me!",
          "sub": "Thảo ơi, ký hợp đồng đàng hoàng nhé. Em xuất hoá đơn được không? Rồi, nói cô nghe!",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Invoices? Then I need a company first, don't I?",
          "sub": "Hoá đơn ạ? Vậy em phải lập công ty trước, đúng không cô?",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A is wrong. The answer is B.",
          "sub": "A sai. Đáp án là B.",
          "keys": [
            "Đáp án là B"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Households earning one billion dong a year or more must use coded e-invoices.",
          "sub": "Hộ kinh doanh doanh thu từ 1 tỷ đồng một năm phải dùng hoá đơn điện tử có mã của cơ quan thuế.",
          "keys": [
            "1 tỷ đồng"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Smaller ones can register, or pay tax first and get an invoice each time.",
          "sub": "Hộ nhỏ hơn có thể đăng ký nếu đủ điều kiện, hoặc khai, nộp thuế trước rồi được cấp hoá đơn theo từng lần."
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
            "text": "Lập công ty: vì sao?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:all",
            "hl": [
              {
                "text": "vì sao",
                "at": "l1:all+300"
              }
            ]
          },
          {
            "id": "b-dn",
            "t": "text",
            "text": "Doanh nghiệp: tên riêng,",
            "x": 2028,
            "y": 170,
            "size": 46,
            "at": "l2:own name"
          },
          {
            "id": "b-dn2",
            "t": "text",
            "text": "tài sản, trụ sở",
            "x": 2068,
            "y": 235,
            "size": 46,
            "at": "l2:assets",
            "hl": [
              {
                "text": "trụ sở",
                "at": "l2:office"
              }
            ]
          },
          {
            "id": "b-hk",
            "t": "text",
            "text": "Hộ: thuế gọn hơn",
            "x": 2028,
            "y": 320,
            "size": 46,
            "at": "l3:simpler"
          },
          {
            "id": "b-hk2",
            "t": "text",
            "text": "nhưng chịu vô hạn",
            "x": 2068,
            "y": 385,
            "size": 46,
            "at": "l3:limit",
            "color": "coral",
            "hl": [
              {
                "text": "vô hạn",
                "at": "l3:limit"
              }
            ]
          },
          {
            "id": "b-w",
            "t": "text",
            "text": "Chọn doanh nghiệp khi:",
            "x": 2928,
            "y": 170,
            "size": 44,
            "at": "l4:choose"
          },
          {
            "id": "b-w1",
            "t": "text",
            "text": "• nhiều người góp vốn",
            "x": 2948,
            "y": 235,
            "size": 40,
            "at": "l4:several"
          },
          {
            "id": "b-w2",
            "t": "text",
            "text": "• định mở rộng, chi nhánh",
            "x": 2948,
            "y": 295,
            "size": 40,
            "at": "l4:branches"
          },
          {
            "id": "b-w3",
            "t": "text",
            "text": "• giới hạn trách nhiệm",
            "x": 2948,
            "y": 355,
            "size": 40,
            "at": "l4:limited",
            "hl": [
              {
                "text": "giới hạn",
                "at": "l4:limited"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 25/10/2023",
            "x": 2928,
            "y": 430,
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
          "say": "So why open a company at all?",
          "sub": "Vậy rốt cuộc lập công ty để làm gì?",
          "keys": [
            "để làm gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "An enterprise has its own name, assets and office, and is set up to do business.",
          "sub": "Doanh nghiệp là tổ chức có tên riêng, có tài sản, có trụ sở, được lập ra để kinh doanh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A household business has simpler tax, but the owner is liable without limit.",
          "sub": "Hộ kinh doanh thủ tục thuế đơn giản hơn, nhưng chủ hộ chịu trách nhiệm vô hạn bằng toàn bộ tài sản.",
          "keys": [
            "vô hạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Choose a company for several investors, branches, and liability limited to your capital.",
          "sub": "Chọn doanh nghiệp khi có nhiều người góp vốn, định mở rộng, mở chi nhánh, và muốn giới hạn trách nhiệm trong vốn góp.",
          "keys": [
            "giới hạn trách nhiệm"
          ]
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s03",
      "module": "BRK-04",
      "data": {
        "title": "Lý do lập công ty",
        "wrong": "Chỉ để xuất được hoá đơn",
        "right": "Vì kế hoạch kinh doanh của mình",
        "wrongIllus": "receipt",
        "rightIllus": "chart-increasing"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Opening a company just for invoices?",
          "sub": "Lập công ty chỉ vì tờ hoá đơn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Open it for your business plan.",
          "sub": "Hãy lập vì kế hoạch kinh doanh.",
          "keys": [
            "kế hoạch kinh doanh"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "fit": "B",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "b-plan",
            "t": "text",
            "text": "Thảo: muốn thuê người, mở rộng",
            "x": 2028,
            "y": 470,
            "size": 40,
            "at": "l1:hire"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: nộp một tờ",
            "x": 2928,
            "y": 470,
            "size": 40,
            "at": "l3:form",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:steps"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l3:five+300",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2353,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l3:five+560",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2678,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l3:five+820",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 3003,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l3:five+1080",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3328,
            "y": 600,
            "w": 300,
            "h": 100,
            "at": "l3:five+1340",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "1. Loại hình",
            "x": 2046,
            "y": 625,
            "size": 38,
            "at": "l3:five+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "2. Tên, ngành",
            "x": 2371,
            "y": 625,
            "size": 38,
            "at": "l3:five+680"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "3. Hồ sơ",
            "x": 2696,
            "y": 625,
            "size": 38,
            "at": "l3:five+940"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "4. Nộp",
            "x": 3021,
            "y": 625,
            "size": 38,
            "at": "l3:five+1200"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "5. Sau giấy",
            "x": 3346,
            "y": 625,
            "size": 38,
            "at": "l3:five+1460"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thảo wants to hire and grow, without betting her home. That's a reason.",
          "sub": "Thảo muốn thuê thêm người, mở rộng, mà không đem nhà mình ra đặt cược. Đó mới là lý do.",
          "keys": [
            "Đó mới là lý do"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Like our elders say: eat solid, dress lasting. Build it properly.",
          "sub": "Ông bà dặn: “Ăn chắc mặc bền.” Lập thì lập cho đàng hoàng.",
          "keys": [
            "Ăn chắc mặc bền"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not one form and done, but five steps. Thảo's first month, step by step.",
          "sub": "Không phải nộp một tờ là xong, mà là năm bước. Theo Thảo qua tháng đầu, từng bước một.",
          "keys": [
            "năm bước"
          ]
        }
      ],
      "ref": "p2,p4"
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
            "text": "① Tuần 1 · Chọn loại hình",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First step"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 130,
            "w": 720,
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
                "laptop",
                "page-facing-up"
              ]
            },
            "at": "l1:evening",
            "caption": "Tối thứ Ba · bàn làm việc ở nhà",
            "icon": "laptop"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Tư nhân: một chủ, vô hạn",
            "x": 3996,
            "y": 170,
            "size": 42,
            "at": "l3:private",
            "color": "coral"
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "mỗi người một doanh nghiệp",
            "x": 4036,
            "y": 230,
            "size": 34,
            "at": "l3:per person"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "TNHH một thành viên",
            "x": 3996,
            "y": 300,
            "size": 42,
            "at": "l4:single"
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "trong phạm vi vốn điều lệ",
            "x": 4036,
            "y": 360,
            "size": 34,
            "at": "l4:charter",
            "hl": [
              {
                "text": "vốn điều lệ",
                "at": "l4:charter capital"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "TNHH hai thành viên: 2–50",
            "x": 3996,
            "y": 430,
            "size": 42,
            "at": "l5:fifty",
            "hl": [
              {
                "text": "2–50",
                "at": "l5:fifty"
              }
            ]
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Cổ phần: ít nhất 3",
            "x": 3996,
            "y": 500,
            "size": 42,
            "at": "l5:three"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Hợp danh: ≥ 2, vô hạn",
            "x": 3996,
            "y": 570,
            "size": 42,
            "at": "l6:partnership"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật, công việc pháp lý",
            "x": 3996,
            "y": 700,
            "size": 26,
            "at": "l3",
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
          "say": "First step, week one. Tuesday evening, Thảo reads up on company types.",
          "sub": "Bước một, tuần đầu. Tối thứ Ba, Thảo ngồi đọc về các loại hình.",
          "keys": [
            "Bước một"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Five types? I just wanted invoices, not a menu!",
          "sub": "Năm loại hình? Em chỉ cần hoá đơn, đâu cần cả thực đơn!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Private enterprise: one owner, unlimited liability, only one per person.",
          "sub": "Doanh nghiệp tư nhân: một chủ, chịu trách nhiệm vô hạn. Mỗi người chỉ được lập một doanh nghiệp tư nhân.",
          "keys": [
            "vô hạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A single member limited company: one owner, liable within the charter capital.",
          "sub": "Công ty trách nhiệm hữu hạn một thành viên: một chủ, chịu trách nhiệm trong phạm vi vốn điều lệ.",
          "keys": [
            "vốn điều lệ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A multi member limited company has two to fifty members. A joint stock company needs at least three shareholders.",
          "sub": "Công ty hai thành viên trở lên có từ 2 đến 50 thành viên. Công ty cổ phần có tối thiểu 3 cổ đông."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And a partnership needs at least two general partners, people liable without limit.",
          "sub": "Công ty hợp danh có ít nhất 2 thành viên hợp danh là cá nhân, chịu trách nhiệm vô hạn."
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s06",
      "module": "BRK-06",
      "data": {
        "title": "Năm loại hình doanh nghiệp",
        "items": [
          {
            "illus": "bust-in-silhouette",
            "text": "Tư nhân"
          },
          {
            "illus": "shield",
            "text": "Một thành viên"
          },
          {
            "illus": "busts-in-silhouette",
            "text": "Hai thành viên"
          },
          {
            "illus": "chart-increasing",
            "text": "Cổ phần"
          },
          {
            "illus": "handshake",
            "text": "Hợp danh"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Private, single member, multi member, joint stock, partnership.",
          "sub": "Tư nhân, một thành viên, hai thành viên, cổ phần, hợp danh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five doors. Thảo needs only one.",
          "sub": "Năm cánh cửa. Thảo chỉ cần một.",
          "keys": [
            "chỉ cần một"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p5"
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
            "id": "c-min",
            "t": "text",
            "text": "Vốn tối thiểu chung: không",
            "x": 4856,
            "y": 630,
            "size": 34,
            "at": "l1:minimum",
            "hl": [
              {
                "text": "không",
                "at": "l1:no general"
              }
            ]
          },
          {
            "id": "c-min2",
            "t": "text",
            "text": "trừ ngành có vốn pháp định",
            "x": 4856,
            "y": 680,
            "size": 30,
            "at": "l1:legal capital",
            "color": "muted"
          },
          {
            "id": "c-r",
            "t": "ring",
            "around": [
              "c-2",
              "c-2b"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l3:single"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "There's no general minimum charter capital, except in lines that require legal capital.",
          "sub": "Hiện không có mức vốn điều lệ tối thiểu chung, trừ ngành nghề có vốn pháp định.",
          "keys": [
            "tối thiểu chung"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The harder question, how much to write, gets its own lesson.",
          "sub": "Câu khó hơn, ghi bao nhiêu và góp sao cho kịp hạn, có bài riêng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Just me, and my house stays out of it. A single member company, then.",
          "sub": "Chỉ mình em, và nhà em đứng ngoài chuyện này. Vậy là công ty một thành viên.",
          "face": "happy"
        }
      ],
      "ref": "p6"
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tuần 1 · Tên và ngành",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second step"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 130,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "name-badge",
                "carpentry-saw"
              ]
            },
            "at": "l2:Dũng",
            "caption": "Thứ Năm · Dũng khoe tên công ty",
            "icon": "name-badge"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Tên = loại hình + tên riêng",
            "x": 5964,
            "y": 170,
            "size": 44,
            "at": "l4:type",
            "hl": [
              {
                "text": "tên riêng",
                "at": "l4:own name"
              }
            ]
          },
          {
            "id": "d-n",
            "t": "text",
            "text": "“Công ty TNHH Gỗ Xanh Mới”",
            "x": 5964,
            "y": 260,
            "size": 42,
            "at": "l3:New",
            "color": "coral"
          },
          {
            "id": "d-o",
            "t": "text",
            "text": "đã có: “Gỗ Xanh”",
            "x": 6004,
            "y": 325,
            "size": 38,
            "at": "l3:already",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second step, same week: the name, the office and the business lines.",
          "sub": "Bước hai, cùng tuần: tên, trụ sở và ngành nghề.",
          "keys": [
            "Bước hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, Thảo's friend. An interior designer who works alone, and loves to look impressive.",
          "sub": "Đây là Dũng, bạn Thảo. Nhận thiết kế nội thất, làm một mình, và rất thích “cho oai”.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Mine is Gỗ Xanh Mới Company Limited! Gỗ Xanh was already taken, so I added New.",
          "sub": "Của tôi là “Công ty TNHH Gỗ Xanh Mới”! “Gỗ Xanh” có người lấy rồi, tôi thêm chữ “Mới”.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A Vietnamese company name has two parts: the type, then its own name.",
          "sub": "Tên tiếng Việt của doanh nghiệp gồm hai thành tố: loại hình và tên riêng.",
          "keys": [
            "loại hình và tên riêng"
          ]
        }
      ],
      "ref": "p7,p9"
    },
    {
      "id": "s09",
      "module": "BRK-12",
      "data": {
        "word": "Mới",
        "sub": "Chỉ khác bởi chữ “mới” → gây nhầm lẫn",
        "from": [
          700,
          280
        ],
        "others": [
          "Gỗ Xanh",
          "TNHH",
          "Công ty"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One little word. New.",
          "sub": "Một chữ nhỏ thôi. “Mới”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Under Article forty one, a name differing only by new is confusing.",
          "sub": "Theo Điều 41, tên riêng chỉ khác bởi chữ “mới” bị coi là gây nhầm lẫn.",
          "keys": [
            "gây nhầm lẫn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
          }
        ],
        "items": [
          {
            "id": "d-nx",
            "t": "strike",
            "over": "d-n",
            "at": "l1:refused"
          },
          {
            "id": "d-41",
            "t": "text",
            "text": "Điều 41 → dễ bị từ chối",
            "x": 5964,
            "y": 400,
            "size": 42,
            "at": "l1:refused",
            "color": "coral",
            "hl": [
              {
                "text": "từ chối",
                "at": "l1:refused"
              }
            ]
          },
          {
            "id": "d-37",
            "t": "text",
            "text": "Ý kiến cơ quan: quyết định cuối",
            "x": 5964,
            "y": 470,
            "size": 36,
            "at": "l2:final"
          },
          {
            "id": "d-37b",
            "t": "text",
            "text": "không đồng ý → khởi kiện",
            "x": 6004,
            "y": 525,
            "size": 34,
            "at": "l2:sue",
            "color": "muted"
          },
          {
            "id": "d-hq",
            "t": "text",
            "text": "Trụ sở: địa chỉ, số, email",
            "x": 6824,
            "y": 630,
            "size": 32,
            "at": "l3:email"
          },
          {
            "id": "d-36",
            "t": "text",
            "text": "Ngành cấp bốn · QĐ 36/2025",
            "x": 6824,
            "y": 680,
            "size": 32,
            "at": "l4:level four",
            "hl": [
              {
                "text": "cấp bốn",
                "at": "l4:level four"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Tra tên trước khi in danh thiếp",
            "x": 5964,
            "y": 610,
            "size": 38,
            "at": "l5:cards",
            "color": "accent",
            "hl": [
              {
                "text": "Tra tên trước",
                "at": "l5:Check"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Điều 37, 41 Luật Doanh nghiệp 2020",
            "x": 5964,
            "y": 705,
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
          "say": "So Dũng's name will most likely be refused.",
          "sub": "Vậy tên của Dũng nhiều khả năng bị từ chối.",
          "keys": [
            "bị từ chối"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The registry's word on names is final. Disagree? You can sue.",
          "sub": "Ý kiến của cơ quan đăng ký kinh doanh về tên là quyết định cuối cùng. Không đồng ý thì có thể khởi kiện."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The head office must be in Vietnam, with an address, a phone number and an email.",
          "sub": "Trụ sở chính phải đặt tại Việt Nam, có địa chỉ, số điện thoại và thư điện tử."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Business lines use level four codes, from Decision thirty six of twenty twenty five.",
          "sub": "Ngành nghề chọn theo ngành cấp bốn trong Quyết định 36/2025/QĐ-TTg.",
          "keys": [
            "ngành cấp bốn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Check the name before you print business cards. Don't let one little new send your file back.",
          "sub": "Tra tên trước khi in danh thiếp, đừng để một chữ “mới” làm hồ sơ bị trả lại.",
          "keys": [
            "Tra tên trước khi in danh thiếp"
          ]
        }
      ],
      "ref": "p7,p8,p10"
    },
    {
      "id": "s11",
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
            "text": "③ Tuần 2 · Đại diện, hồ sơ",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third step"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 130,
            "w": 720,
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
                "page-facing-up",
                "identification-card"
              ]
            },
            "at": "l1:week two",
            "caption": "Tuần 2 · Thảo soạn hồ sơ",
            "icon": "page-facing-up"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Người đại diện theo pháp luật",
            "x": 7932,
            "y": 170,
            "size": 40,
            "at": "l3:legal representative"
          },
          {
            "id": "e-1b",
            "t": "text",
            "text": "giao dịch, toà án, trọng tài",
            "x": 7972,
            "y": 230,
            "size": 34,
            "at": "l3:courts"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "≥ 1 người cư trú tại Việt Nam",
            "x": 7932,
            "y": 300,
            "size": 40,
            "at": "l4:resides",
            "color": "accent",
            "hl": [
              {
                "text": "cư trú",
                "at": "l4:resides"
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
          "say": "Third step, week two. Thảo puts the file together.",
          "sub": "Bước ba, tuần thứ hai. Thảo soạn bộ hồ sơ.",
          "keys": [
            "Bước ba"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Legal representative? That's me. I live here, so that box is easy.",
          "sub": "Người đại diện theo pháp luật? Là em. Em sống ở đây, ô này dễ.",
          "pose": "explain",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The legal representative acts for the company in transactions, and before courts and arbitrators.",
          "sub": "Người đại diện theo pháp luật thay doanh nghiệp thực hiện quyền, nghĩa vụ từ giao dịch, đứng trước trọng tài, toà án."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A company must always have at least one who resides in Vietnam. Its own lesson comes later.",
          "sub": "Doanh nghiệp phải luôn có ít nhất một người đại diện cư trú tại Việt Nam. Vai này có bài riêng.",
          "keys": [
            "cư trú tại Việt Nam"
          ]
        }
      ],
      "ref": "p11"
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
          }
        ],
        "items": [
          {
            "id": "e-h-c0",
            "t": "box",
            "x": 7932,
            "y": 380,
            "w": 40,
            "h": 40,
            "at": "l1:form",
            "stroke": 5
          },
          {
            "id": "e-h-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 364,
            "size": 50,
            "at": "l1:form+600",
            "color": "accent"
          },
          {
            "id": "e-h-l0",
            "t": "text",
            "text": "Giấy đề nghị · TT 68/2025",
            "x": 7994,
            "y": 370,
            "size": 34,
            "at": "l1:form+200"
          },
          {
            "id": "e-h-c1",
            "t": "box",
            "x": 7932,
            "y": 442,
            "w": 40,
            "h": 40,
            "at": "l1:charter",
            "stroke": 5
          },
          {
            "id": "e-h-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 426,
            "size": 50,
            "at": "l1:charter+600",
            "color": "accent"
          },
          {
            "id": "e-h-l1",
            "t": "text",
            "text": "Điều lệ công ty",
            "x": 7994,
            "y": 432,
            "size": 34,
            "at": "l1:charter+200"
          },
          {
            "id": "e-h-c2",
            "t": "box",
            "x": 7932,
            "y": 504,
            "w": 40,
            "h": 40,
            "at": "l1:member",
            "stroke": 5
          },
          {
            "id": "e-h-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 488,
            "size": 50,
            "at": "l1:member+600",
            "color": "accent"
          },
          {
            "id": "e-h-l2",
            "t": "text",
            "text": "Danh sách thành viên",
            "x": 7994,
            "y": 494,
            "size": 34,
            "at": "l1:member+200"
          },
          {
            "id": "e-h-c3",
            "t": "box",
            "x": 7932,
            "y": 566,
            "w": 40,
            "h": 40,
            "at": "l2:beneficial",
            "stroke": 5
          },
          {
            "id": "e-h-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 550,
            "size": 50,
            "at": "l2:beneficial+600",
            "color": "accent"
          },
          {
            "id": "e-h-l3",
            "t": "text",
            "text": "Chủ sở hữu hưởng lợi",
            "x": 7994,
            "y": 556,
            "size": 34,
            "at": "l2:beneficial+200"
          },
          {
            "id": "e-h-c4",
            "t": "box",
            "x": 7932,
            "y": 628,
            "w": 40,
            "h": 40,
            "at": "l2:papers",
            "stroke": 5
          },
          {
            "id": "e-h-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 612,
            "size": 50,
            "at": "l2:papers+600",
            "color": "accent"
          },
          {
            "id": "e-h-l4",
            "t": "text",
            "text": "Giấy tờ pháp lý",
            "x": 7994,
            "y": 618,
            "size": 34,
            "at": "l2:papers+200"
          },
          {
            "id": "e-bo",
            "t": "text",
            "text": "Hưởng lợi: sở hữu thực tế",
            "x": 8792,
            "y": 630,
            "size": 32,
            "at": "l3:actually",
            "hl": [
              {
                "text": "sở hữu thực tế",
                "at": "l3:actually"
              }
            ]
          },
          {
            "id": "e-src2",
            "t": "text",
            "text": "Nguồn: TVPL dẫn Điều 12 LDN 2020; Luật 76/2025/QH15",
            "x": 8792,
            "y": 690,
            "size": 26,
            "at": "l3",
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
          "say": "The file: a request form under Circular sixty eight, the charter, and the member list.",
          "sub": "Hồ sơ gồm: giấy đề nghị theo mẫu kèm Thông tư 68/2025/TT-BTC, điều lệ, danh sách thành viên hoặc cổ đông."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Plus a list of beneficial owners, if any, and the legal papers of the people involved.",
          "sub": "Thêm danh sách chủ sở hữu hưởng lợi nếu có, và giấy tờ pháp lý của cá nhân, tổ chức liên quan.",
          "keys": [
            "chủ sở hữu hưởng lợi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A beneficial owner actually owns the capital or controls the company. New since July twenty twenty five.",
          "sub": "Đó là cá nhân sở hữu thực tế vốn điều lệ hoặc có quyền chi phối; Luật 76/2025/QH15 bổ sung, hiệu lực từ 01/7/2025."
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Phải photo cả xấp giấy tờ tuỳ thân?",
        "illus": "identification-card"
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
          "say": "Must you photocopy a whole stack of ID papers?",
          "sub": "Phải photo cả xấp giấy tờ tuỳ thân sao?",
          "keys": [
            "cả xấp"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s14",
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
            "id": "e-id",
            "t": "text",
            "text": "Có số định danh: khỏi bản sao",
            "x": 7932,
            "y": 690,
            "size": 36,
            "at": "l1:identification",
            "color": "accent",
            "hl": [
              {
                "text": "khỏi bản sao",
                "at": "l1:skip"
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
          "say": "Not always. If you declare your personal identification number, you skip copies of your papers.",
          "sub": "Không hẳn. Đã kê khai số định danh cá nhân thì hồ sơ không cần kèm bản sao giấy tờ pháp lý của người đó.",
          "keys": [
            "số định danh cá nhân"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Type it exactly. A file is like a hotpot: one wrong item, back to the kitchen.",
          "sub": "Kê khai số định danh cho chính xác. Hồ sơ như nồi lẩu: sai một món là bị dọn về bếp.",
          "keys": [
            "cho chính xác"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s15",
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
            "text": "④ Nộp và chờ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth step"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "laptop",
                "hourglass-not-done"
              ]
            },
            "at": "l1:Monday",
            "caption": "Thứ Hai tuần 3 · nộp trực tuyến",
            "icon": "laptop"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Cơ quan đăng ký cấp tỉnh",
            "x": 60,
            "y": 1260,
            "size": 42,
            "at": "l3:provincial"
          },
          {
            "id": "f-1b",
            "t": "text",
            "text": "nơi đặt trụ sở chính",
            "x": 100,
            "y": 1320,
            "size": 36,
            "at": "l3:head office"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Công bố: cùng lúc khi nộp",
            "x": 60,
            "y": 1390,
            "size": 40,
            "at": "l4:publish",
            "hl": [
              {
                "text": "cùng lúc",
                "at": "l4:same time"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Nhờ người nộp: uỷ quyền",
            "x": 920,
            "y": 1720,
            "size": 30,
            "at": "l5:written"
          },
          {
            "id": "f-3b",
            "t": "text",
            "text": "không cần công chứng",
            "x": 920,
            "y": 1762,
            "size": 30,
            "at": "l5:notarisation",
            "color": "accent",
            "hl": [
              {
                "text": "không cần công chứng",
                "at": "l5:notarisation"
              }
            ]
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "Hai bên xác thực điện tử",
            "x": 920,
            "y": 1804,
            "size": 30,
            "at": "l6:electronically",
            "hl": [
              {
                "text": "xác thực điện tử",
                "at": "l6:electronically"
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
          "say": "Fourth step: Monday of week three. Submission day.",
          "sub": "Bước bốn: thứ Hai tuần thứ ba. Ngày nộp hồ sơ.",
          "keys": [
            "Bước bốn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I'm filing mine anyway. Want me to submit yours too?",
          "sub": "Tiện tôi nộp của tôi, nộp giùm bà luôn nhé?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Files go to the provincial registration office where the head office is.",
          "sub": "Hồ sơ nộp cho cơ quan đăng ký kinh doanh cấp tỉnh nơi đặt trụ sở chính."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "You publish the registration details at the same time as you submit.",
          "sub": "Việc công bố nội dung đăng ký làm cùng lúc với nộp hồ sơ.",
          "keys": [
            "cùng lúc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Dũng may submit for her with a written authorisation. No notarisation needed.",
          "sub": "Nhờ một cá nhân nộp thì chỉ cần văn bản uỷ quyền, không cần công chứng hay chứng thực.",
          "keys": [
            "không cần công chứng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "An organisation needs more papers. Both sides authenticate electronically.",
          "sub": "Uỷ quyền cho tổ chức thì cần thêm hợp đồng, giấy giới thiệu. Hai bên đều xác thực điện tử."
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s16",
      "module": "BRK-03",
      "data": {
        "value": 3,
        "suffix": " ngày",
        "label": "làm việc từ khi hồ sơ hợp lệ · Hà Nội: 2",
        "illus": "hourglass-not-done"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "How long is the wait?",
          "sub": "Chờ bao lâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three working days. Hanoi: two.",
          "sub": "Ba ngày làm việc. Hà Nội: hai ngày.",
          "keys": [
            "Ba ngày làm việc"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s17",
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
              "f-c-l0",
              "f-c-l4"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l7",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-c-c0",
            "t": "box",
            "x": 60,
            "y": 1480,
            "w": 40,
            "h": 40,
            "at": "l2",
            "stroke": 5
          },
          {
            "id": "f-c-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1464,
            "size": 50,
            "at": "l2+600",
            "color": "accent"
          },
          {
            "id": "f-c-l0",
            "t": "text",
            "text": "Loại hình + vốn cam kết",
            "x": 122,
            "y": 1470,
            "size": 34,
            "at": "l2+200"
          },
          {
            "id": "f-c-c1",
            "t": "box",
            "x": 60,
            "y": 1542,
            "w": 40,
            "h": 40,
            "at": "l3",
            "stroke": 5
          },
          {
            "id": "f-c-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1526,
            "size": 50,
            "at": "l3+600",
            "color": "accent"
          },
          {
            "id": "f-c-l1",
            "t": "text",
            "text": "Tra tên + mã cấp bốn",
            "x": 122,
            "y": 1532,
            "size": 34,
            "at": "l3+200"
          },
          {
            "id": "f-c-c2",
            "t": "box",
            "x": 60,
            "y": 1604,
            "w": 40,
            "h": 40,
            "at": "l4",
            "stroke": 5
          },
          {
            "id": "f-c-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1588,
            "size": 50,
            "at": "l4+600",
            "color": "accent"
          },
          {
            "id": "f-c-l2",
            "t": "text",
            "text": "Đề nghị, điều lệ, định danh",
            "x": 122,
            "y": 1594,
            "size": 34,
            "at": "l4+200"
          },
          {
            "id": "f-c-c3",
            "t": "box",
            "x": 60,
            "y": 1666,
            "w": 40,
            "h": 40,
            "at": "l5",
            "stroke": 5
          },
          {
            "id": "f-c-k3",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1650,
            "size": 50,
            "at": "l5+600",
            "color": "accent"
          },
          {
            "id": "f-c-l3",
            "t": "text",
            "text": "Nộp + công bố cùng lúc",
            "x": 122,
            "y": 1656,
            "size": 34,
            "at": "l5+200"
          },
          {
            "id": "f-c-c4",
            "t": "box",
            "x": 60,
            "y": 1728,
            "w": 40,
            "h": 40,
            "at": "l6",
            "stroke": 5
          },
          {
            "id": "f-c-k4",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1712,
            "size": 50,
            "at": "l6+600",
            "color": "accent"
          },
          {
            "id": "f-c-l4",
            "t": "text",
            "text": "Lịch theo dõi 3 ngày",
            "x": 122,
            "y": 1718,
            "size": 34,
            "at": "l6+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thảo's checklist, ticked before she pressed submit.",
          "sub": "Danh sách kiểm Thảo đánh dấu trước khi bấm nộp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One: the type, and the committed capital.",
          "sub": "Một: chọn loại hình, ghi số vốn cam kết.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Two: name checked, level four code.",
          "sub": "Hai: tra tên, chọn mã ngành cấp bốn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Three: form, charter, owners list, ID number.",
          "sub": "Ba: giấy đề nghị, điều lệ, danh sách chủ sở hữu hưởng lợi nếu có, kê khai số định danh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Four: submit and publish together.",
          "sub": "Bốn: nộp trên hệ thống, đăng ký công bố cùng lúc."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Five: follow up within three working days.",
          "sub": "Năm: ghi lịch theo dõi kết quả trong 3 ngày làm việc.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "A checklist saves you filing twice.",
          "sub": "Danh sách kiểm theo bước giúp khỏi nộp đi nộp lại.",
          "keys": [
            "khỏi nộp đi nộp lại"
          ]
        }
      ],
      "ref": "p17,p18"
    },
    {
      "id": "s18",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Năm · Dũng vừa có giấy",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Có giấy là mời khách ký ngay",
          "why": "Chưa đăng ký hoá đơn điện tử, chưa có tài khoản công ty: khách hỏi là phải hẹn lại.",
          "rule": "Xong hoá đơn, tài khoản rồi mới mời khách"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Certificate's here! Calling every client: sign with my company today!",
          "sub": "Có giấy rồi! Gọi hết khách cũ: ký với công ty tôi ngay hôm nay!",
          "pose": "phone",
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
          "say": "They'll ask: invoice how, and pay into which account? You have neither yet.",
          "sub": "Khách sẽ hỏi: xuất hoá đơn thế nào, chuyển tiền vào đâu? Cả hai bạn đều chưa có.",
          "keys": [
            "chuyển tiền vào đâu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "E-invoices registered, company account opened. Now I call.",
          "sub": "Đăng ký hoá đơn điện tử, mở tài khoản công ty xong. Giờ mới gọi.",
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
      "ref": "p21,p22"
    },
    {
      "id": "s19",
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
            "text": "⑤ Có giấy · làm gì ngay?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth step"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2888,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "scroll",
                "bank"
              ]
            },
            "at": "l1:certificate",
            "caption": "Thứ Năm tuần 3 · nhận giấy chứng nhận",
            "icon": "scroll"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "Biển hiệu: tên đúng như giấy",
            "x": 2028,
            "y": 1260,
            "size": 40,
            "at": "l3:signboard",
            "hl": [
              {
                "text": "đúng như giấy",
                "at": "l3:exactly"
              }
            ]
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "chữ nước ngoài ≤ 3/4",
            "x": 2068,
            "y": 1320,
            "size": 36,
            "at": "l4:three quarters",
            "color": "coral"
          },
          {
            "id": "g-c-c0",
            "t": "box",
            "x": 2028,
            "y": 1410,
            "w": 40,
            "h": 40,
            "at": "l5:initial",
            "stroke": 5
          },
          {
            "id": "g-c-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1394,
            "size": 50,
            "at": "l5:initial+600",
            "color": "accent"
          },
          {
            "id": "g-c-l0",
            "t": "text",
            "text": "Khai thuế ban đầu",
            "x": 2090,
            "y": 1400,
            "size": 36,
            "at": "l5:initial+200"
          },
          {
            "id": "g-c-c1",
            "t": "box",
            "x": 2028,
            "y": 1480,
            "w": 40,
            "h": 40,
            "at": "l5:accounts",
            "stroke": 5
          },
          {
            "id": "g-c-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1464,
            "size": 50,
            "at": "l5:accounts+600",
            "color": "accent"
          },
          {
            "id": "g-c-l1",
            "t": "text",
            "text": "Người phụ trách kế toán",
            "x": 2090,
            "y": 1470,
            "size": 36,
            "at": "l5:accounts+200"
          },
          {
            "id": "g-c-c2",
            "t": "box",
            "x": 2028,
            "y": 1550,
            "w": 40,
            "h": 40,
            "at": "l6:invoices",
            "stroke": 5
          },
          {
            "id": "g-c-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1534,
            "size": 50,
            "at": "l6:invoices+600",
            "color": "accent"
          },
          {
            "id": "g-c-l2",
            "t": "text",
            "text": "Đăng ký hoá đơn điện tử",
            "x": 2090,
            "y": 1540,
            "size": 36,
            "at": "l6:invoices+200"
          },
          {
            "id": "g-c-c3",
            "t": "box",
            "x": 2028,
            "y": 1620,
            "w": 40,
            "h": 40,
            "at": "l6:bank",
            "stroke": 5
          },
          {
            "id": "g-c-k3",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1604,
            "size": 50,
            "at": "l6:bank+600",
            "color": "accent"
          },
          {
            "id": "g-c-l3",
            "t": "text",
            "text": "Mở tài khoản ngân hàng",
            "x": 2090,
            "y": 1610,
            "size": 36,
            "at": "l6:bank+200"
          },
          {
            "id": "g-l",
            "t": "text",
            "text": "Có người lao động: thêm bảo hiểm",
            "x": 2028,
            "y": 1700,
            "size": 32,
            "at": "l7:Hiring",
            "color": "muted"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Hoá đơn, tài khoản trước · khách sau",
            "x": 2888,
            "y": 1730,
            "size": 34,
            "at": "l6:account+600",
            "color": "accent",
            "hl": [
              {
                "text": "trước",
                "at": "l6:account+900"
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
          "say": "Fifth step. Same Thursday, Thảo's certificate arrives too.",
          "sub": "Bước năm. Cùng thứ Năm ấy, giấy chứng nhận của Thảo cũng về.",
          "keys": [
            "Bước năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Not calling Cô Hoa yet. First, the boring list.",
          "sub": "Chưa gọi Cô Hoa vội. Làm danh sách chán ngắt trước đã.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Signboard: the name exactly as on the certificate, with address and phone.",
          "sub": "Treo biển hiệu ghi tên đúng như giấy chứng nhận, kèm địa chỉ và số điện thoại.",
          "keys": [
            "đúng như giấy chứng nhận"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Foreign words at most three quarters the size.",
          "sub": "Chữ nước ngoài không quá 3/4 cỡ chữ tiếng Việt."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Initial tax file: first tax filing, and someone in charge of accounts.",
          "sub": "Hồ sơ thuế ban đầu: khai thuế ban đầu, bổ nhiệm kế toán trưởng hoặc người phụ trách kế toán."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Then register e-invoices and open a bank account.",
          "sub": "Rồi đăng ký hoá đơn điện tử và mở tài khoản ngân hàng.",
          "keys": [
            "hoá đơn điện tử"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Hiring? Add labour papers and insurance.",
          "sub": "Khi có người lao động thì thêm hồ sơ lao động và đăng ký bảo hiểm lần đầu."
        }
      ],
      "ref": "p19,p22"
    },
    {
      "id": "s20",
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
            "text": "⑥ Ba mốc cần ghi lịch",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:dates"
          },
          {
            "id": "h-cal",
            "t": "illus",
            "name": "tear-off-calendar",
            "x": 3996,
            "y": 1260,
            "size": 110,
            "at": "l2:ninety"
          },
          {
            "id": "h-90",
            "t": "text",
            "text": "Góp đủ vốn: 90 ngày",
            "x": 4126,
            "y": 1275,
            "size": 50,
            "at": "l2:ninety",
            "color": "accent",
            "hl": [
              {
                "text": "90 ngày",
                "at": "l2:ninety days"
              }
            ]
          },
          {
            "id": "h-90b",
            "t": "text",
            "text": "từ ngày cấp giấy · Điều 75",
            "x": 4146,
            "y": 1345,
            "size": 34,
            "at": "l2:Article"
          },
          {
            "id": "h-fee",
            "t": "illus",
            "name": "coin",
            "x": 3996,
            "y": 1420,
            "size": 100,
            "at": "l3:licence"
          },
          {
            "id": "h-mb",
            "t": "text",
            "text": "Lệ phí môn bài: hết thu",
            "x": 4126,
            "y": 1435,
            "size": 46,
            "at": "l3:ended",
            "hl": [
              {
                "text": "hết thu",
                "at": "l3:ended"
              }
            ]
          },
          {
            "id": "h-mb2",
            "t": "text",
            "text": "từ 01/01/2026 · NQ 198/2025",
            "x": 4146,
            "y": 1500,
            "size": 34,
            "at": "l3:January"
          },
          {
            "id": "h-inv",
            "t": "illus",
            "name": "receipt",
            "x": 3996,
            "y": 1570,
            "size": 100,
            "at": "l4:Invoices"
          },
          {
            "id": "h-254",
            "t": "text",
            "text": "Hoá đơn: NĐ 254/2026",
            "x": 4126,
            "y": 1585,
            "size": 46,
            "at": "l4:two five four"
          },
          {
            "id": "h-254b",
            "t": "text",
            "text": "hiệu lực 01/7/2026",
            "x": 4146,
            "y": 1650,
            "size": 34,
            "at": "l4:July"
          },
          {
            "id": "h-254c",
            "t": "text",
            "text": "thay NĐ 123/2020, 70/2025",
            "x": 4146,
            "y": 1700,
            "size": 34,
            "at": "l4:replaces",
            "color": "muted"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật; Điều 75 Luật Doanh nghiệp 2020",
            "x": 3996,
            "y": 1795,
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
          "say": "Now three dates for the calendar.",
          "sub": "Giờ là ba mốc cần ghi vào lịch."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Capital must be paid within ninety days of the certificate. Article seventy five.",
          "sub": "Vốn đã cam kết phải góp đủ trong 90 ngày kể từ ngày cấp giấy chứng nhận, theo Điều 75 với công ty một thành viên.",
          "keys": [
            "90 ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The business licence fee ended from January twenty twenty six, under Resolution one nine eight.",
          "sub": "Về phí: việc thu lệ phí môn bài chấm dứt từ 01/01/2026 theo Nghị quyết 198/2025/QH15.",
          "keys": [
            "chấm dứt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Invoices: Decree two five four of twenty twenty six, from July first, replaces the old decrees.",
          "sub": "Hoá đơn: Nghị định 254/2026/NĐ-CP hiệu lực từ 01/7/2026, thay Nghị định 123/2020 và 70/2025."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Moving old clients across has an order, and its own lesson.",
          "sub": "Chuyển khách và hợp đồng cũ sang công ty cần làm theo thứ tự, có bài riêng."
        }
      ],
      "ref": "p20,p23"
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
            "text": "Cuối tháng · cùng quán",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:month"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "cafe",
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
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "hot-beverage",
                "receipt"
              ]
            },
            "at": "l1:month",
            "caption": "Cuối tháng · quán của Cô Hoa",
            "icon": "hot-beverage"
          },
          {
            "id": "i-q",
            "t": "text",
            "text": "“Xuất hoá đơn được không?”",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l2:invoices",
            "color": "muted"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Hoá đơn điện tử công ty",
            "x": 5964,
            "y": 1350,
            "size": 44,
            "at": "l3:electronic",
            "color": "accent"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Tiền vào tài khoản công ty",
            "x": 5964,
            "y": 1430,
            "size": 44,
            "at": "l3:account",
            "hl": [
              {
                "text": "tài khoản công ty",
                "at": "l3:company account"
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
          "say": "End of the month. Same café, same table, same question.",
          "sub": "Cuối tháng. Vẫn quán ấy, bàn ấy, câu hỏi ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "So, Thảo. Can you issue invoices now?",
          "sub": "Sao, Thảo. Giờ xuất hoá đơn được chưa?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Electronic invoices from my company. Please pay into the company account.",
          "sub": "Hoá đơn điện tử của công ty em. Cô chuyển khoản vào tài khoản công ty nhé.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Right, done! Sign here.",
          "sub": "Rồi, vậy nha! Ký đây.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Same question as the first day. This time the company was the plan, not the panic.",
          "sub": "Cùng câu hỏi ngày đầu. Lần này công ty là kế hoạch, không phải chữa cháy.",
          "keys": [
            "không phải chữa cháy"
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
      "ref": "p22"
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
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2:type",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l5:end",
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Năm bước · việc làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5496,
            "y": 40,
            "at": "l2:type+600"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7464,
            "y": 40,
            "at": "l3:name"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1560,
            "y": 1130,
            "at": "l4:submit"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 3528,
            "y": 1130,
            "at": "l5:invoices"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Viết loại hình mình nghiêng về",
            "x": 7932,
            "y": 1270,
            "size": 44,
            "at": "l6:type",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Ba việc trước khách đầu tiên",
            "x": 7932,
            "y": 1350,
            "size": 44,
            "at": "l6:three"
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài tiếp: loại hình cho 3 năm",
            "x": 7932,
            "y": 1450,
            "size": 36,
            "at": "l7:Next",
            "color": "muted"
          },
          {
            "id": "j-note",
            "t": "text",
            "text": "Bài để tham khảo, không phải tư vấn vụ việc cụ thể. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1720,
            "size": 28,
            "at": "l7",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-note2",
            "t": "text",
            "text": "Quy định về đăng ký doanh nghiệp có thể đã được sửa đổi: kiểm văn bản mới nhất trước khi nộp.",
            "x": 7932,
            "y": 1770,
            "size": 28,
            "at": "l7",
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
          "say": "So, registering a company is five steps.",
          "sub": "Tóm lại, đăng ký doanh nghiệp đi qua năm bước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: choose the type, for your plan, not just for invoices.",
          "sub": "Một: chọn loại hình, theo kế hoạch, không chỉ vì hoá đơn.",
          "keys": [
            "theo kế hoạch"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: name, office, business lines.",
          "sub": "Hai: tên, trụ sở, ngành nghề."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three, four: the file, then submit and wait three working days.",
          "sub": "Ba, bốn: hồ sơ, rồi nộp và chờ ba ngày làm việc.",
          "keys": [
            "ba ngày làm việc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Five: invoices and account before clients sign.",
          "sub": "Năm: xong hoá đơn, tài khoản rồi mới mời khách ký.",
          "keys": [
            "rồi mới mời khách ký"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Today: write the type you lean towards, and three jobs before your first client.",
          "sub": "Việc làm ngay: viết ra loại hình đang nghiêng về, và ba việc phải xong trước khách đầu tiên.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Next: a type for three years. Rules may have changed, so check the latest text before filing.",
          "sub": "Bài tiếp: chọn loại hình theo kế hoạch ba năm. Quy định về đăng ký doanh nghiệp có thể đã sửa đổi, kiểm văn bản mới nhất trước khi nộp.",
          "keys": [
            "kiểm văn bản mới nhất"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s23",
      "module": "QUIZ-01",
      "data": {
        "q": "How long does the registry normally take to decide on a valid file?",
        "options": [
          "Three full months, because every file is checked by several ministries",
          "Three working days from receiving a valid file, according to the article",
          "Exactly one year, since companies are only approved every January"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "hourglass-not-done",
        "why": "Ba ngày làm việc kể từ khi nhận hồ sơ hợp lệ; Hà Nội rút còn hai ngày."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "How long does the registry normally take to decide on a valid file?",
          "sub": "Cơ quan đăng ký thường mất bao lâu để xử lý hồ sơ hợp lệ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Three working days from receiving a valid file, according to the article.",
          "sub": "Ba ngày làm việc kể từ khi nhận hồ sơ hợp lệ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Hanoi has cut it to two. Then the boring list begins.",
          "sub": "Hà Nội rút còn hai ngày. Sau đó là danh sách việc chán ngắt."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[25]"
    },
    {
      "id": "s24",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Đăng ký doanh nghiệp lần đầu"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ ngay bên dưới.",
          "face": "happy"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-21",
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21: câu hỏi để đoán sai (khách đòi hoá đơn → A lập công ty ngay / B chưa chắc; p3). Đét đứng trái + bảng trắng 10 ô theo THÁNG ĐẦU THẢO LẬP CÔNG TY: thứ Hai Cô Hoa hỏi hoá đơn (p3) → vì sao lập (p1, p2; BRK-04 p4) → năm bước → tuần 1 loại hình (p5; BRK-06 năm loại hình; p6) → tên, trụ sở, ngành, Dũng “Gỗ Xanh Mới” (p7, p8; BRK-12 chữ “Mới” p9; p10) → tuần 2 đại diện, hồ sơ (p11, p12; BRK-07 p13; p14) → nộp, uỷ quyền nộp (p15, p16; BRK-03 3 ngày làm việc; danh sách kiểm p17, p18) → “Khoan đã!” Dũng vội mời khách (vai “anh Hải” p21, p22) → việc ngay sau giấy (p19) → ba mốc: 90 ngày, môn bài, NĐ 254/2026 (p20, p23) → cuối tháng ký với Cô Hoa (khép vòng). Nhân vật: Thảo, Cô Hoa, Dũng. Mọi điều luật, mốc lấy từ bài; lưu ý chung #133 ở ô J.",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
