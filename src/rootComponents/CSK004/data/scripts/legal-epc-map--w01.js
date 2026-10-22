// legal-epc-map--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "legal-epc-map--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "epc-legal-counsel",
    "slug": "legal-epc-map",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Pháp chế cần nắm hợp đồng EPC theo bản đồ nào để không sót điều khoản?",
    "series": "Soạn và rà hợp đồng EPC từ hạt đến lá — cho pháp chế, viết câu đủ vế, dẫn chiếu đúng và giữ vững khi đàm phán"
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
  "anchor": {
    "type": "number",
    "value": "9",
    "ref": "p4"
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
            "id": "a-pg",
            "t": "text",
            "text": "Vài trăm trang",
            "x": 60,
            "y": 50,
            "size": 64,
            "at": "l1:hundred",
            "color": "muted"
          },
          {
            "id": "a-9",
            "t": "text",
            "text": "9",
            "x": 230,
            "y": 130,
            "size": 300,
            "at": "l2:nine",
            "color": "accent"
          },
          {
            "id": "a-9t",
            "t": "text",
            "text": "nhóm điều khoản",
            "x": 60,
            "y": 520,
            "size": 60,
            "at": "l2:families",
            "hl": [
              {
                "text": "nhóm",
                "at": "l2:families"
              }
            ]
          },
          {
            "id": "a-p1",
            "t": "text",
            "text": "Đọc từ trang 1?",
            "x": 60,
            "y": 615,
            "size": 50,
            "at": "l3:page one",
            "color": "muted"
          },
          {
            "id": "a-p1x",
            "t": "strike",
            "over": "a-p1",
            "at": "l3:lost"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A few hundred pages. One draft EPC contract for a power plant.",
          "sub": "Vài trăm trang. Một bản nháp hợp đồng EPC nhà máy điện.",
          "keys": [
            "Vài trăm trang"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And one number to hold it all: nine families of clauses.",
          "sub": "Và một con số để ôm trọn: chín nhóm điều khoản.",
          "keys": [
            "chín nhóm điều khoản"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Start at page one, and by page eighty you are lost.",
          "sub": "Đọc từ trang một, tới trang tám mươi là lạc."
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
            "x": 900,
            "y": 110,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "give",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "books"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "binh",
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
            "caption": "Sáng thứ Hai · nhận bản nháp",
            "icon": "books"
          },
          {
            "id": "a-wk",
            "t": "text",
            "text": "Tuần sau trình",
            "x": 900,
            "y": 675,
            "size": 44,
            "at": "l3:next week",
            "color": "coral",
            "hl": [
              {
                "text": "Tuần sau",
                "at": "l3:next week"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Ăn có nơi, chơi có chốn”",
            "x": 60,
            "y": 690,
            "size": 44,
            "at": "l5:place",
            "color": "accent",
            "hl": [
              {
                "text": "có chốn",
                "at": "l5:place"
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
          "say": "Meet Bác Bình, head of legal for the owner. Thirty years of contracts, his first EPC.",
          "sub": "Đây là Bác Bình, trưởng pháp chế bên Chủ đầu tư. Ba mươi năm soạn hợp đồng, lần đầu gặp EPC.",
          "keys": [
            "lần đầu gặp EPC"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Cô Hoa, head of the technical team, carrying the draft.",
          "sub": "Còn đây là Cô Hoa, trưởng ban kỹ thuật, ôm bản nháp tới.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "The board says: legal leads, collects every team's comments, presents next week. Okay, done!",
          "sub": "Ban giám đốc dặn: pháp chế làm đầu mối, gom ý kiến các phòng, tuần sau trình. Rồi, vậy nha!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. Where do I even start?",
          "sub": "Từ từ, mình xem lại đã. Bắt đầu từ đâu đây?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: a place to eat, a place to play. Every clause has its place.",
          "sub": "Ông bà dặn: “Ăn có nơi, chơi có chốn.” Điều khoản nào cũng có chỗ của nó.",
          "keys": [
            "Ăn có nơi, chơi có chốn"
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
            "text": "Bản đồ nào để không sót?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:map",
            "hl": [
              {
                "text": "không sót",
                "at": "l1:miss"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: đọc từ trang đầu",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:first page",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:fixed"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: một bản đồ cố định",
            "x": 2028,
            "y": 270,
            "size": 60,
            "at": "l2:fixed",
            "color": "accent",
            "hl": [
              {
                "text": "bản đồ cố định",
                "at": "l2:map"
              }
            ]
          },
          {
            "id": "b-p0",
            "t": "box",
            "x": 2028,
            "y": 420,
            "w": 380,
            "h": 110,
            "at": "l3:nine",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-p1",
            "t": "box",
            "x": 2438,
            "y": 420,
            "w": 380,
            "h": 110,
            "at": "l3:appendices",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-p2",
            "t": "box",
            "x": 2848,
            "y": 420,
            "w": 380,
            "h": 110,
            "at": "l3:Vietnamese",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-p3",
            "t": "box",
            "x": 3258,
            "y": 420,
            "w": 380,
            "h": 110,
            "at": "l3:four",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-pt0",
            "t": "text",
            "text": "① 9 nhóm",
            "x": 2048,
            "y": 448,
            "size": 42,
            "at": "l3:nine+200"
          },
          {
            "id": "b-pt1",
            "t": "text",
            "text": "② Phụ lục",
            "x": 2458,
            "y": 448,
            "size": 42,
            "at": "l3:appendices+200"
          },
          {
            "id": "b-pt2",
            "t": "text",
            "text": "③ Luật Việt Nam",
            "x": 2868,
            "y": 448,
            "size": 42,
            "at": "l3:Vietnamese+200"
          },
          {
            "id": "b-pt3",
            "t": "text",
            "text": "④ 4 sản phẩm",
            "x": 3278,
            "y": 448,
            "size": 42,
            "at": "l3:four+200"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Thứ Hai → thứ Hai tuần sau",
            "x": 2028,
            "y": 600,
            "size": 46,
            "at": "l3:week",
            "hl": [
              {
                "text": "thứ Hai tuần sau",
                "at": "l3:week"
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
          "say": "So which map lets legal counsel miss no clause?",
          "sub": "Vậy pháp chế đọc theo bản đồ nào để không sót điều khoản?",
          "keys": [
            "không sót điều khoản"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not from the first page. From a fixed map.",
          "sub": "Không phải đọc từ trang đầu, mà theo một bản đồ cố định.",
          "keys": [
            "bản đồ cố định"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Nine families, the appendices, Vietnamese law on top, and four products. One week.",
          "sub": "Chín nhóm, phụ lục, lớp luật Việt Nam đè lên, và bốn sản phẩm. Trong một tuần."
        }
      ],
      "ref": "intro,p23"
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
            "text": "① Thứ Hai · EPC là mua gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "c-e",
            "t": "text",
            "text": "E · thiết kế",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "l2:engineering"
          },
          {
            "id": "c-p",
            "t": "text",
            "text": "P · mua sắm",
            "x": 3996,
            "y": 250,
            "size": 54,
            "at": "l2:procurement"
          },
          {
            "id": "c-c",
            "t": "text",
            "text": "C · thi công",
            "x": 3996,
            "y": 330,
            "size": 54,
            "at": "l2:construction"
          },
          {
            "id": "c-fac",
            "t": "illus",
            "name": "factory",
            "x": 4406,
            "y": 190,
            "size": 160,
            "at": "l2:plant"
          },
          {
            "id": "c-res",
            "t": "text",
            "text": "Mua kết quả, không mua hạng mục",
            "x": 3996,
            "y": 450,
            "size": 50,
            "at": "l3:result",
            "color": "accent",
            "hl": [
              {
                "text": "kết quả",
                "at": "l3:result"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "1 đầu mối · trọn gói · hạn chắc",
            "x": 3996,
            "y": 545,
            "size": 44,
            "at": "l4:one party",
            "hl": [
              {
                "text": "1 đầu mối",
                "at": "l4:one party"
              }
            ]
          },
          {
            "id": "c-box",
            "t": "box",
            "x": 4836,
            "y": 160,
            "w": 770,
            "h": 420,
            "at": "l5:Decree",
            "stroke": 4
          },
          {
            "id": "c-nd",
            "t": "text",
            "text": "Nghị định 210: định nghĩa EPC",
            "x": 4866,
            "y": 190,
            "size": 40,
            "at": "l5:Decree",
            "hl": [
              {
                "text": "định nghĩa",
                "at": "l5:defines"
              }
            ]
          },
          {
            "id": "c-nd2",
            "t": "text",
            "text": "thiết kế → mua sắm → thi công",
            "x": 4866,
            "y": 260,
            "size": 38,
            "at": "l5:design"
          },
          {
            "id": "c-nd3",
            "t": "text",
            "text": "→ chạy thử → nghiệm thu → bàn giao",
            "x": 4866,
            "y": 320,
            "size": 38,
            "at": "l5:testing"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Nghị định 210/2026/NĐ-CP, Điều 6 (theo bài học)",
            "x": 3996,
            "y": 735,
            "size": 26,
            "at": "l5",
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
          "say": "First stop: Monday morning. What does an owner actually buy?",
          "sub": "Chặng một: sáng thứ Hai. Chủ đầu tư thật ra mua cái gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Engineering, procurement, construction. The contractor does it all, up to a plant that runs.",
          "sub": "Thiết kế, mua sắm, thi công. Nhà thầu làm trọn, tới khi bàn giao một nhà máy chạy được."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So the owner buys a result, not separate pieces.",
          "sub": "Nên chủ đầu tư mua kết quả, không mua từng hạng mục.",
          "keys": [
            "mua kết quả"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three pillars: one party responsible, a lump sum, a firm finish date.",
          "sub": "Ba trụ cột: một đầu mối chịu trách nhiệm, giá trọn gói, thời hạn hoàn thành chắc chắn.",
          "keys": [
            "một đầu mối"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Decree two ten defines it: from design and supply to building, testing, acceptance and handover.",
          "sub": "Nghị định 210/2026 định nghĩa: từ thiết kế, mua sắm, cung cấp thiết bị đến thi công, chạy thử, nghiệm thu, bàn giao."
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
            "id": "c-mod",
            "t": "text",
            "text": "EC · EP · PC · EPCM · tách gói",
            "x": 4866,
            "y": 400,
            "size": 36,
            "at": "l1:cousins",
            "color": "muted"
          },
          {
            "id": "c-ask",
            "t": "text",
            "text": "Hỏi mô hình trước câu chữ",
            "x": 4866,
            "y": 470,
            "size": 42,
            "at": "l2:model",
            "color": "coral",
            "hl": [
              {
                "text": "mô hình",
                "at": "l2:model"
              }
            ]
          },
          {
            "id": "c-ang",
            "t": "text",
            "text": "Góc pháp chế:",
            "x": 3996,
            "y": 630,
            "size": 44,
            "at": "l3:Legal"
          },
          {
            "id": "c-ang2",
            "t": "text",
            "text": "câu chữ · cấu trúc · liền mạch",
            "x": 4316,
            "y": 635,
            "size": 40,
            "at": "l3:wording",
            "color": "accent",
            "hl": [
              {
                "text": "liền mạch",
                "at": "l3:flow"
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
          "say": "It has cousins: EC, EP, PC, EPCM, split packages.",
          "sub": "EPC có họ hàng: EC, EP, PC, EPCM, EPC tách gói."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The model decides who carries design and interface risk. Ask the model before the words.",
          "sub": "Mô hình quyết định ai gánh rủi ro thiết kế, rủi ro giao diện. Hỏi mô hình trước khi đọc câu chữ.",
          "keys": [
            "Hỏi mô hình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Engineers own specs, finance owns cash. Legal owns wording, structure, legality and flow.",
          "sub": "Kỹ thuật lo thông số, tài chính lo tiền. Pháp chế lo câu chữ, cấu trúc, tính hợp pháp, tính liền mạch.",
          "keys": [
            "tính liền mạch"
          ]
        }
      ],
      "ref": "p2,p3"
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
            "text": "② Chiều thứ Hai · 9 nhóm",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second"
          },
          {
            "id": "d-f0",
            "t": "text",
            "text": "1. Khung",
            "x": 5964,
            "y": 160,
            "size": 44,
            "at": "l2:frame",
            "hl": [
              {
                "text": "1. Khung",
                "at": "l4:final"
              }
            ]
          },
          {
            "id": "d-f1",
            "t": "text",
            "text": "2. Làm gì",
            "x": 5964,
            "y": 246,
            "size": 44,
            "at": "l2:scope"
          },
          {
            "id": "d-f2",
            "t": "text",
            "text": "3. Tiền",
            "x": 5964,
            "y": 332,
            "size": 44,
            "at": "l2:money"
          },
          {
            "id": "d-f3",
            "t": "text",
            "text": "4. Môi trường",
            "x": 5964,
            "y": 418,
            "size": 44,
            "at": "l2:setting"
          },
          {
            "id": "d-f4",
            "t": "text",
            "text": "5. Thời gian, thay đổi",
            "x": 5964,
            "y": 504,
            "size": 44,
            "at": "l2:time"
          },
          {
            "id": "d-f5",
            "t": "text",
            "text": "6. Hoàn thành",
            "x": 6524,
            "y": 160,
            "size": 44,
            "at": "l3:completion"
          },
          {
            "id": "d-f6",
            "t": "text",
            "text": "7. Khi có sự cố",
            "x": 6524,
            "y": 246,
            "size": 44,
            "at": "l3:wrong",
            "hl": [
              {
                "text": "7. Khi có sự cố",
                "at": "l4:final"
              }
            ]
          },
          {
            "id": "d-f7",
            "t": "text",
            "text": "8. Bảo vệ, cam kết",
            "x": 6524,
            "y": 332,
            "size": 44,
            "at": "l3:protection"
          },
          {
            "id": "d-f8",
            "t": "text",
            "text": "9. Kết thúc",
            "x": 6524,
            "y": 418,
            "size": 44,
            "at": "l3:closing",
            "hl": [
              {
                "text": "9. Kết thúc",
                "at": "l4:final"
              }
            ]
          },
          {
            "id": "d-own",
            "t": "text",
            "text": "Pháp chế chịu trách nhiệm cuối",
            "x": 7074,
            "y": 170,
            "size": 34,
            "at": "l4:final",
            "color": "accent"
          },
          {
            "id": "d-own2",
            "t": "text",
            "text": "Khung · Sự cố · Kết thúc",
            "x": 7074,
            "y": 230,
            "size": 34,
            "at": "l4:disputes",
            "color": "accent"
          },
          {
            "id": "d-oth",
            "t": "text",
            "text": "Nhóm khác: kiểm câu, dẫn chiếu",
            "x": 7074,
            "y": 320,
            "size": 30,
            "at": "l5:other",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Monday afternoon. Real contracts are sorted by family, not by order of thought.",
          "sub": "Chặng hai: chiều thứ Hai. Hợp đồng thật sắp theo nhóm, không theo thứ tự nghĩ ra."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Nine families: the frame, the scope, the money, the setting, time and change.",
          "sub": "Chín nhóm: Khung, Làm gì, Tiền, Môi trường thực hiện, Thời gian và thay đổi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Completion, when things go wrong, protection and promises, and the closing clauses.",
          "sub": "Hoàn thành, Khi có sự cố, Bảo vệ và cam kết, và nhóm Kết thúc."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Legal usually drafts and has the final word on the frame, liability, termination and disputes.",
          "sub": "Thường thì pháp chế soạn và chịu trách nhiệm cuối ở nhóm Khung, phạt và trách nhiệm, chấm dứt và tranh chấp.",
          "keys": [
            "chịu trách nhiệm cuối"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "In the other families, experts write; legal checks the sentences, references and legality.",
          "sub": "Ở nhóm khác, phòng chuyên môn viết; pháp chế kiểm câu đủ vế, dẫn chiếu đúng, không trái luật."
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s06",
      "module": "BRK-06",
      "data": {
        "title": "Năm ô kiểm cho mọi nhóm",
        "items": [
          {
            "illus": "warning",
            "text": "Có vế hậu quả"
          },
          {
            "illus": "label",
            "text": "Định nghĩa đủ"
          },
          {
            "illus": "link",
            "text": "Dẫn chiếu đúng"
          },
          {
            "illus": "spiral-calendar",
            "text": "Hạn tính từ đâu"
          },
          {
            "illus": "stop-sign",
            "text": "Căn cứ chấm dứt"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Consequences. Definitions. References. Start dates. Termination grounds.",
          "sub": "Hậu quả. Định nghĩa. Dẫn chiếu. Mốc tính hạn. Căn cứ chấm dứt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five boxes to tick, in every family.",
          "sub": "Năm ô kiểm, nhóm nào cũng phải qua.",
          "keys": [
            "Năm ô kiểm"
          ]
        }
      ],
      "ref": "p6"
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
          }
        ],
        "items": [
          {
            "id": "d-ck",
            "t": "text",
            "text": "Nghĩa vụ nào cũng có hậu quả",
            "x": 7074,
            "y": 420,
            "size": 30,
            "at": "l1:consequence",
            "hl": [
              {
                "text": "hậu quả",
                "at": "l1:consequence"
              }
            ]
          },
          {
            "id": "d-ck2",
            "t": "text",
            "text": "Thời hạn: tính từ đâu",
            "x": 7074,
            "y": 480,
            "size": 30,
            "at": "l1:start"
          },
          {
            "id": "d-sk",
            "t": "text",
            "text": "Bài kỹ năng: câu đủ vế, shall",
            "x": 7074,
            "y": 600,
            "size": 28,
            "at": "l2:skill",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Every duty, a consequence. Every capital term, a definition. Every deadline, a start point.",
          "sub": "Mỗi nghĩa vụ có vế hậu quả. Mỗi thuật ngữ viết hoa có định nghĩa. Mỗi thời hạn ghi rõ tính từ đâu.",
          "keys": [
            "vế hậu quả"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two skill lessons help: the complete sentence, and shall, may, deemed.",
          "sub": "Hai bài kỹ năng giúp làm việc này: câu đủ vế, và shall, may, deemed."
        }
      ],
      "ref": "p6,p7"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Ba · Phụ lục nối đâu?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday"
          },
          {
            "id": "e-rd",
            "t": "text",
            "text": "Không đọc hết kỹ thuật, nhưng:",
            "x": 7932,
            "y": 160,
            "size": 42,
            "at": "l2:every"
          },
          {
            "id": "e-rd2",
            "t": "text",
            "text": "nói gì · nối đâu · vênh đâu",
            "x": 7932,
            "y": 225,
            "size": 44,
            "at": "l2:clash",
            "color": "accent",
            "hl": [
              {
                "text": "vênh đâu",
                "at": "l2:clash"
              }
            ]
          },
          {
            "id": "e-la0",
            "t": "text",
            "text": "Yêu cầu CĐT",
            "x": 7932,
            "y": 320,
            "size": 40,
            "at": "l3:requirements"
          },
          {
            "id": "e-ar0",
            "t": "arrow",
            "from": [
              8312,
              345
            ],
            "to": [
              8412,
              345
            ],
            "at": "l3:requirements+200"
          },
          {
            "id": "e-lb0",
            "t": "text",
            "text": "phạm vi, thử nghiệm",
            "x": 8432,
            "y": 320,
            "size": 40,
            "at": "l3:requirements+400",
            "color": "muted"
          },
          {
            "id": "e-la1",
            "t": "text",
            "text": "Tiến độ",
            "x": 7932,
            "y": 400,
            "size": 40,
            "at": "l3:schedule"
          },
          {
            "id": "e-ar1",
            "t": "arrow",
            "from": [
              8312,
              425
            ],
            "to": [
              8412,
              425
            ],
            "at": "l3:schedule+200"
          },
          {
            "id": "e-lb1",
            "t": "text",
            "text": "gia hạn",
            "x": 8432,
            "y": 400,
            "size": 40,
            "at": "l3:schedule+400",
            "color": "muted"
          },
          {
            "id": "e-la2",
            "t": "text",
            "text": "Mốc thanh toán",
            "x": 7932,
            "y": 480,
            "size": 40,
            "at": "l3:payment"
          },
          {
            "id": "e-ar2",
            "t": "arrow",
            "from": [
              8312,
              505
            ],
            "to": [
              8412,
              505
            ],
            "at": "l3:payment+200"
          },
          {
            "id": "e-lb2",
            "t": "text",
            "text": "bàn giao",
            "x": 8432,
            "y": 480,
            "size": 40,
            "at": "l3:payment+400",
            "color": "muted"
          },
          {
            "id": "e-la3",
            "t": "text",
            "text": "Hiệu suất",
            "x": 7932,
            "y": 560,
            "size": 40,
            "at": "l3:performance"
          },
          {
            "id": "e-ar3",
            "t": "arrow",
            "from": [
              8312,
              585
            ],
            "to": [
              8412,
              585
            ],
            "at": "l3:performance+200"
          },
          {
            "id": "e-lb3",
            "t": "text",
            "text": "phạt, trần",
            "x": 8432,
            "y": 560,
            "size": 40,
            "at": "l3:performance+400",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Tuesday. The appendices, most of the pages.",
          "sub": "Chặng ba: thứ Ba. Phụ lục, chiếm phần lớn số trang."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Legal need not read every technical line, but must know what each says, links to, and where it may clash.",
          "sub": "Pháp chế không cần đọc hết chi tiết kỹ thuật, nhưng phải biết mỗi phụ lục nói gì, nối với điều nào, chỗ nào hay vênh.",
          "keys": [
            "chỗ nào hay vênh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Requirements to scope and tests. Schedule to extensions. Payment to handover. Performance to damages and the cap.",
          "sub": "Yêu cầu nối phạm vi, thử nghiệm; tiến độ nối gia hạn; thanh toán nối bàn giao; hiệu suất nối phạt, trần."
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
            "fit": "E",
            "move": "cut"
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
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 150,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "electric-plug",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "binh",
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
            "caption": "Chiều thứ Ba · họp với nhà thầu",
            "icon": "electric-plug"
          },
          {
            "id": "e-c1",
            "t": "text",
            "text": "Yêu cầu CĐT: cáp tốt hơn",
            "x": 7932,
            "y": 650,
            "size": 36,
            "at": "l2:better"
          },
          {
            "id": "e-c2",
            "t": "text",
            "text": "Đề xuất NT: cáp rẻ hơn",
            "x": 7932,
            "y": 705,
            "size": 36,
            "at": "l2:cheaper",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tuesday afternoon, the first meeting with the contractor.",
          "sub": "Chiều thứ Ba, buổi họp đầu với nhà thầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Sam, the contractor's representative. Her proposal names a cheaper cable; the requirements, a better one.",
          "sub": "Đây là Sam, đại diện nhà thầu. Đề xuất ghi loại cáp rẻ hơn; Yêu cầu của chủ đầu tư ghi loại tốt hơn.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "My proposal was approved at signing.",
          "sub": "Đề xuất của tôi đã được chấp thuận khi ký.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. Which document wins? The contract never says.",
          "sub": "Từ từ, mình xem lại đã. Tài liệu nào thắng? Hợp đồng không nói.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "So now I must dig for a clause saying the highest requirement wins.",
          "sub": "Giờ mình phải lần tìm điều “yêu cầu cao nhất thắng” để cãi lại.",
          "keys": [
            "yêu cầu cao nhất thắng"
          ],
          "face": "sad"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p10"
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
            "id": "e-k",
            "t": "text",
            "text": "2 tài liệu, 1 việc → ai thắng?",
            "x": 8772,
            "y": 705,
            "size": 40,
            "at": "l3:who wins",
            "color": "accent",
            "hl": [
              {
                "text": "ai thắng",
                "at": "l3:who wins"
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
          "say": "Other usual clashes: an appendix saying sole remedy, while the body keeps damages.",
          "sub": "Chỗ vênh khác: phụ lục hiệu suất ghi “biện pháp duy nhất”, thân hợp đồng lại giữ quyền đòi bồi thường.",
          "keys": [
            "biện pháp duy nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A bond form with another rate. A listed appendix nobody signed.",
          "sub": "Mẫu bảo lãnh ghi tỷ lệ khác. Phụ lục có tên mà không có bản ký."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lesson: two documents on one matter need an order of who wins. Conflicts get their own lesson later.",
          "sub": "Rút ra: hai tài liệu cùng nói một việc thì phải có thứ tự ai thắng. Mâu thuẫn có bài riêng sau.",
          "keys": [
            "thứ tự ai thắng"
          ]
        }
      ],
      "ref": "p9,p11,p12"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Con số ghi “theo luật” có chắc là luật không?",
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
          "say": "When a draft says a number is the law, is it really?",
          "sub": "Con số ghi “theo luật” có chắc là luật không?",
          "keys": [
            "theo luật"
          ]
        }
      ],
      "ref": "p15"
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
            "zoom": 1.3,
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
            "text": "④ Thứ Tư · Luật đè lên",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Wednesday+400"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 1080,
            "y": 1240,
            "w": 600,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "binh",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "closed-book",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Wednesday",
            "caption": "Thứ Tư · đọc luật",
            "icon": "closed-book"
          },
          {
            "id": "f-lxd",
            "t": "text",
            "text": "Luật Xây dựng 135/2025",
            "x": 60,
            "y": 1250,
            "size": 50,
            "at": "l2:Construction"
          },
          {
            "id": "f-eff",
            "t": "text",
            "text": "hiệu lực 01/7/2026",
            "x": 60,
            "y": 1325,
            "size": 46,
            "at": "l2:July",
            "color": "accent",
            "hl": [
              {
                "text": "01/7/2026",
                "at": "l2:July"
              }
            ]
          },
          {
            "id": "f-d4",
            "t": "text",
            "text": "Điều 4: Luật chưa quy định →",
            "x": 60,
            "y": 1420,
            "size": 40,
            "at": "l3:silent"
          },
          {
            "id": "f-d4b",
            "t": "text",
            "text": "Đấu thầu · PPP · Dân sự",
            "x": 100,
            "y": 1485,
            "size": 40,
            "at": "l3:Civil",
            "hl": [
              {
                "text": "Dân sự",
                "at": "l3:Civil"
              }
            ]
          },
          {
            "id": "f-ltm",
            "t": "text",
            "text": "không nêu Luật Thương mại",
            "x": 100,
            "y": 1545,
            "size": 36,
            "at": "l4:Commercial",
            "color": "coral"
          },
          {
            "id": "f-d80",
            "t": "text",
            "text": "Điều 80: văn bản, tiếng Việt",
            "x": 60,
            "y": 1635,
            "size": 42,
            "at": "l5:writing",
            "hl": [
              {
                "text": "tiếng Việt",
                "at": "l5:Vietnamese"
              }
            ]
          },
          {
            "id": "f-d80b",
            "t": "text",
            "text": "bên nước ngoài: thêm ngôn ngữ",
            "x": 100,
            "y": 1700,
            "size": 32,
            "at": "l5:foreign",
            "color": "muted"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Luật Xây dựng 135/2025/QH15, khoản 2 Điều 4, Điều 80",
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
          "say": "Fourth stop: Wednesday. The Vietnamese law on top of any deal.",
          "sub": "Chặng bốn: thứ Tư. Lớp luật Việt Nam đè lên mọi thỏa thuận."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "The Construction Law, number one thirty five, in force from first July twenty twenty six.",
          "sub": "Luật Xây dựng số 135/2025/QH15, hiệu lực từ 01/7/2026.",
          "keys": [
            "01/7/2026"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Where it is silent on contracts: the Bidding Law, the PPP Law, the Civil Code.",
          "sub": "Nội dung hợp đồng Luật chưa quy định: áp dụng Luật Đấu thầu, Luật PPP, Bộ luật Dân sự."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Notice the gap: Article four does not name the Commercial Law.",
          "sub": "Để ý chỗ vắng: khoản 2 Điều 4 không nêu Luật Thương mại.",
          "keys": [
            "không nêu Luật Thương mại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Article eighty: in writing, in Vietnamese; with a foreign party, add another language.",
          "sub": "Điều 80: bằng văn bản, dùng tiếng Việt; có bên nước ngoài thì thỏa thuận thêm ngôn ngữ khác."
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
          }
        ],
        "items": [
          {
            "id": "f-nd",
            "t": "text",
            "text": "Nghị định 210/2026: tách hai phần",
            "x": 900,
            "y": 1780,
            "size": 38,
            "at": "l1:Decree",
            "hl": [
              {
                "text": "tách hai phần",
                "at": "l2:split"
              }
            ]
          },
          {
            "id": "f-nd1",
            "t": "text",
            "text": "chung · chỉ cho đầu tư công, PPP",
            "x": 60,
            "y": 1780,
            "size": 36,
            "at": "l2:public",
            "color": "coral"
          },
          {
            "id": "f-src2",
            "t": "text",
            "text": "Nghị định 210/2026/NĐ-CP: hiệu lực 01/7/2026; Điều 1, 33",
            "x": 900,
            "y": 1830,
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
          "say": "Decree two ten guides it, from the same day.",
          "sub": "Nghị định 210/2026/NĐ-CP hướng dẫn, hiệu lực cùng ngày."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Split it: rules for everyone, and rules only for public investment and PPP.",
          "sub": "Phải tách: phần áp dụng chung, và phần chỉ cho dự án đầu tư công, PPP.",
          "keys": [
            "phần áp dụng chung"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "And contracts signed before July have transition rules. So first: signing date, funding source.",
          "sub": "Hợp đồng ký trước 01/7/2026 có quy định chuyển tiếp. Vậy trước hết: ngày ký, nguồn vốn.",
          "keys": [
            "ngày ký, nguồn vốn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Meanwhile, meet Dũng, a young site engineer, sending his comments.",
          "sub": "Cùng lúc đó, đây là Dũng, kỹ sư hiện trường trẻ, đang gửi ý kiến.",
          "keys": [
            "Dũng"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Chiều thứ Tư · gom ý kiến",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chép số khu vực công, gọi là “theo luật”",
          "why": "Khoảng 2%–10% bảo đảm thực hiện chỉ cho dự án đầu tư công, PPP. Vốn tư nhân: các bên tự thỏa thuận.",
          "rule": "Hỏi con số áp cho nguồn vốn nào"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Performance security two to ten percent, like the decree. It's the law. Done!",
          "sub": "Bảo đảm thực hiện hai đến mười phần trăm, như nghị định. Theo luật mà. Ok, làm luôn!",
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
          "say": "Those figures are for public and PPP projects. This plant is privately funded.",
          "sub": "Mấy con số đó cho dự án đầu tư công, PPP. Nhà máy này vốn tư nhân.",
          "keys": [
            "vốn tư nhân"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Làm lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "First: which funding source is this number for?",
          "sub": "Trước hết: con số này áp cho nguồn vốn nào?",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. Ask whose money a number is for.",
          "sub": "Đúng. Hỏi con số áp cho nguồn vốn nào.",
          "phase": "redo",
          "keys": [
            "nguồn vốn nào"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p15,p16"
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
            "text": "Hiểu lầm: “Nghị định buộc mọi EPC”",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:myth"
          },
          {
            "id": "g-pub",
            "t": "text",
            "text": "Đầu tư công, PPP:",
            "x": 2028,
            "y": 1270,
            "size": 48,
            "at": "l2:public"
          },
          {
            "id": "g-pub2",
            "t": "text",
            "text": "mức tạm ứng · 2% – 10% bảo đảm",
            "x": 2068,
            "y": 1340,
            "size": 44,
            "at": "l2:ten",
            "hl": [
              {
                "text": "2% – 10%",
                "at": "l2:ten"
              }
            ]
          },
          {
            "id": "g-pri",
            "t": "text",
            "text": "Vốn tư nhân: tự thoả thuận",
            "x": 2028,
            "y": 1450,
            "size": 52,
            "at": "l3:private",
            "color": "accent",
            "hl": [
              {
                "text": "tự thoả thuận",
                "at": "l3:agree"
              }
            ]
          },
          {
            "id": "g-law",
            "t": "text",
            "text": "Ghi “theo luật”",
            "x": 2028,
            "y": 1560,
            "size": 48,
            "at": "l4:law",
            "color": "muted"
          },
          {
            "id": "g-lawx",
            "t": "strike",
            "over": "g-law",
            "at": "l4:wrong"
          },
          {
            "id": "g-tie",
            "t": "text",
            "text": "→ sai căn cứ + tự trói tay",
            "x": 2428,
            "y": 1560,
            "size": 46,
            "at": "l4:hands",
            "color": "coral",
            "hl": [
              {
                "text": "tự trói tay",
                "at": "l4:hands"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Nghị định 210/2026/NĐ-CP, Điều 1, 12, 13 (theo bài học)",
            "x": 2028,
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
          "say": "The myth: the decree forces one advance rate and one security rate on every EPC.",
          "sub": "Hiểu lầm: Nghị định buộc mọi hợp đồng EPC theo một mức tạm ứng, một mức bảo đảm cố định."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In fact the advance figures, and two to ten percent security, are for public and PPP projects.",
          "sub": "Thực ra các con số tạm ứng và khoảng 2% đến 10% bảo đảm thực hiện chỉ cho dự án đầu tư công, PPP."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "With private money, the parties agree the level.",
          "sub": "Với vốn tư nhân, các bên tự thỏa thuận mức.",
          "keys": [
            "tự thỏa thuận"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Calling it the law is wrong at the root, and ties your own hands at the table.",
          "sub": "Gọi là “theo luật” vừa sai căn cứ, vừa tự trói tay khi đàm phán.",
          "keys": [
            "tự trói tay"
          ]
        }
      ],
      "ref": "p15,p16"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑤ Thứ Năm · Mẫu Silver Book",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday"
          },
          {
            "id": "h-bk",
            "t": "illus",
            "name": "blue-book",
            "x": 3996,
            "y": 1250,
            "size": 130,
            "at": "l2:Silver"
          },
          {
            "id": "h-sb",
            "t": "text",
            "text": "EPC chìa khoá trao tay",
            "x": 4156,
            "y": 1260,
            "size": 46,
            "at": "l2:turnkey"
          },
          {
            "id": "h-ed",
            "t": "text",
            "text": "Bản 2017, tái bản 2022",
            "x": 4156,
            "y": 1335,
            "size": 42,
            "at": "l2:edition",
            "color": "muted"
          },
          {
            "id": "h-opt",
            "t": "text",
            "text": "tái bản: không bắt buộc",
            "x": 4156,
            "y": 1395,
            "size": 36,
            "at": "l2:optional",
            "color": "muted"
          },
          {
            "id": "h-21",
            "t": "text",
            "text": "21 điều",
            "x": 3996,
            "y": 1490,
            "size": 56,
            "at": "l3:twenty",
            "hl": [
              {
                "text": "21 điều",
                "at": "l3:twenty"
              }
            ]
          },
          {
            "id": "h-eng",
            "t": "text",
            "text": "Không có Kỹ sư",
            "x": 4296,
            "y": 1495,
            "size": 46,
            "at": "l3:Engineer",
            "color": "muted"
          },
          {
            "id": "h-engx",
            "t": "strike",
            "over": "h-eng",
            "at": "l3:Instead"
          },
          {
            "id": "h-rep",
            "t": "text",
            "text": "→ Đại diện chủ đầu tư",
            "x": 4296,
            "y": 1560,
            "size": 46,
            "at": "l3:representative",
            "color": "accent",
            "hl": [
              {
                "text": "Đại diện chủ đầu tư",
                "at": "l3:representative"
              }
            ]
          },
          {
            "id": "h-lay",
            "t": "box",
            "x": 4836,
            "y": 1250,
            "w": 770,
            "h": 330,
            "at": "l4:agreement",
            "stroke": 4
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Mẫu = thoả thuận",
            "x": 4866,
            "y": 1290,
            "size": 50,
            "at": "l4:agreement"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Luật Việt Nam = lớp bắt buộc",
            "x": 4866,
            "y": 1380,
            "size": 42,
            "at": "l4:mandatory",
            "color": "coral"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Va chạm → luật thắng",
            "x": 4866,
            "y": 1470,
            "size": 52,
            "at": "l5:wins",
            "color": "accent",
            "hl": [
              {
                "text": "luật thắng",
                "at": "l5:wins"
              }
            ]
          },
          {
            "id": "h-two",
            "t": "text",
            "text": "Hay va: song ngữ · phạt, trần",
            "x": 4866,
            "y": 1650,
            "size": 38,
            "at": "l5:bilingual",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Thursday. The form behind the draft.",
          "sub": "Chặng năm: thứ Năm. Mẫu đứng sau bản nháp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The Silver Book: a turnkey EPC form, edition twenty seventeen, reprint twenty twenty two, which is optional.",
          "sub": "Mẫu Silver Book: EPC chìa khóa trao tay, bản 2017, tái bản 2022; bản tái bản không bắt buộc dùng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Twenty one clauses, and no Engineer. Instead, the employer's representative.",
          "sub": "Bộ 2017 có 21 điều, không có Kỹ sư. Thay vào đó là Đại diện chủ đầu tư.",
          "keys": [
            "Đại diện chủ đầu tư"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But the form is only an agreement. Vietnamese law is the mandatory layer.",
          "sub": "Nhưng mẫu chỉ là thỏa thuận. Luật Việt Nam là lớp bắt buộc.",
          "keys": [
            "lớp bắt buộc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Where they meet, the law wins. Bilingual text and damages caps are the usual crashes.",
          "sub": "Câu mẫu chạm luật bắt buộc thì luật thắng. Hay va nhất: song ngữ, và phạt, trần trách nhiệm.",
          "keys": [
            "luật thắng"
          ]
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s17",
      "module": "BRK-10",
      "data": {
        "quote": "Mẫu nước ngoài là thỏa thuận; chạm luật bắt buộc thì luật thắng",
        "mark": "luật thắng",
        "by": "Rút ra từ bài học",
        "illus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A foreign form is an agreement. Meet mandatory law, and the law wins.",
          "sub": "Mẫu nước ngoài là thỏa thuận; chạm luật bắt buộc thì luật thắng.",
          "keys": [
            "luật thắng"
          ]
        }
      ],
      "ref": "p17"
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
            "text": "⑥ Thứ Sáu · 4 sản phẩm",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6984,
            "y": 1230,
            "w": 600,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "binh",
                  "side": "center",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "card-index",
                "file-folder"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Friday",
            "caption": "Thứ Sáu · bàn pháp chế",
            "icon": "card-index"
          },
          {
            "id": "i-no",
            "t": "text",
            "text": "Bản nháp nhiều comment",
            "x": 5964,
            "y": 1250,
            "size": 44,
            "at": "l2:comments",
            "color": "muted"
          },
          {
            "id": "i-nox",
            "t": "strike",
            "over": "i-no",
            "at": "l3:quite"
          },
          {
            "id": "i-p0",
            "t": "text",
            "text": "1. Bản hợp nhất",
            "x": 5964,
            "y": 1340,
            "size": 44,
            "at": "l3:consolidated"
          },
          {
            "id": "i-p1",
            "t": "text",
            "text": "2. 6 chỉ mục",
            "x": 6444,
            "y": 1340,
            "size": 44,
            "at": "l3:six",
            "hl": [
              {
                "text": "6 chỉ mục",
                "at": "l3:six"
              }
            ]
          },
          {
            "id": "i-p2",
            "t": "text",
            "text": "3. Issues list",
            "x": 5964,
            "y": 1420,
            "size": 44,
            "at": "l4:issues"
          },
          {
            "id": "i-p3",
            "t": "text",
            "text": "4. Cảnh báo rủi ro",
            "x": 6444,
            "y": 1420,
            "size": 44,
            "at": "l4:warning"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: Friday. What does legal deliver?",
          "sub": "Chặng sáu: thứ Sáu. Pháp chế giao ra cái gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "A draft full of comments. That's enough, isn't it?",
          "sub": "Một bản nháp đầy comment. Vậy là đủ rồi chứ nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not quite. Four products: a consolidated draft with one set of terms and numbers. Then six indexes.",
          "sub": "Chưa đâu. Bốn sản phẩm: bản hợp nhất đã thống nhất thuật ngữ, đánh số, dẫn chiếu. Rồi 6 chỉ mục.",
          "keys": [
            "Bốn sản phẩm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "An issues list of open points, and a risk warning for whoever initials the pages.",
          "sub": "Issues list ghi vấn đề còn mở, và cảnh báo rủi ro cho người ký nháy.",
          "keys": [
            "cảnh báo rủi ro"
          ]
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s19",
      "module": "BRK-05",
      "data": {
        "title": "Sáu chỉ mục",
        "points": [
          "Mục lục, định nghĩa, dẫn chiếu",
          "Thời hạn và mốc, tiền và bảo đảm",
          "Nghĩa vụ theo từng chủ thể"
        ],
        "illus": "card-index-dividers"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Six indexes, in three pairs.",
          "sub": "Sáu chỉ mục, chia ba cặp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Clauses, definitions, cross references.",
          "sub": "Mục lục điều khoản, định nghĩa, bản đồ dẫn chiếu.",
          "keys": [
            "bản đồ dẫn chiếu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Deadlines and milestones, money and security.",
          "sub": "Thời hạn và mốc, tiền và bảo đảm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Obligations by party.",
          "sub": "Nghĩa vụ theo chủ thể."
        }
      ],
      "ref": "p19"
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
            "at": "l2",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-row",
            "t": "text",
            "text": "Chỉ mục thời hạn · bàn giao",
            "x": 5964,
            "y": 1540,
            "size": 36,
            "at": "l1:row",
            "color": "muted"
          },
          {
            "id": "i-r0",
            "t": "box",
            "x": 5964,
            "y": 1690,
            "w": 310,
            "h": 70,
            "at": "l2:Event",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "i-r1",
            "t": "box",
            "x": 6294,
            "y": 1690,
            "w": 310,
            "h": 70,
            "at": "l2:Deadline",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "i-r2",
            "t": "box",
            "x": 6624,
            "y": 1690,
            "w": 310,
            "h": 70,
            "at": "l3:Counted",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "i-r3",
            "t": "box",
            "x": 6954,
            "y": 1690,
            "w": 310,
            "h": 70,
            "at": "l4:Who",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "i-r4",
            "t": "box",
            "x": 7284,
            "y": 1690,
            "w": 310,
            "h": 70,
            "at": "l5:late",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "i-h0",
            "t": "text",
            "text": "Sự kiện",
            "x": 5984,
            "y": 1702,
            "size": 36,
            "at": "l2:Event+200"
          },
          {
            "id": "i-h1",
            "t": "text",
            "text": "Thời hạn",
            "x": 6314,
            "y": 1702,
            "size": 36,
            "at": "l2:Deadline+200"
          },
          {
            "id": "i-h2",
            "t": "text",
            "text": "Tính từ",
            "x": 6644,
            "y": 1702,
            "size": 36,
            "at": "l3:Counted+200"
          },
          {
            "id": "i-h3",
            "t": "text",
            "text": "Ai làm",
            "x": 6974,
            "y": 1702,
            "size": 36,
            "at": "l4:Who+200"
          },
          {
            "id": "i-h4",
            "t": "text",
            "text": "Trễ thì sao",
            "x": 7304,
            "y": 1702,
            "size": 36,
            "at": "l5:late+200"
          },
          {
            "id": "i-from",
            "t": "text",
            "text": "từ ngày nhận hồ sơ",
            "x": 6294,
            "y": 1780,
            "size": 32,
            "at": "l3:receiving",
            "color": "accent",
            "hl": [
              {
                "text": "ngày nhận hồ sơ",
                "at": "l3:receiving"
              }
            ]
          },
          {
            "id": "i-bk",
            "t": "text",
            "text": "+ người dự phòng",
            "x": 6954,
            "y": 1780,
            "size": 32,
            "at": "l4:backup"
          },
          {
            "id": "i-late",
            "t": "text",
            "text": "coi như bàn giao?",
            "x": 7284,
            "y": 1780,
            "size": 30,
            "at": "l5:deemed",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Bác Bình tries one row of the deadline index, for handover.",
          "sub": "Bác Bình làm thử một dòng trong chỉ mục thời hạn, cho điều bàn giao."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Event: the contractor sends the handover file. Deadline: we answer within so many working days.",
          "sub": "Sự kiện: nhà thầu gửi hồ sơ đề nghị bàn giao. Thời hạn: chủ đầu tư trả lời trong [ ] ngày làm việc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Counted from receiving the file, not from any earlier notice.",
          "sub": "Tính từ ngày nhận hồ sơ, không phải từ ngày nhận thông báo trước.",
          "keys": [
            "ngày nhận hồ sơ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Who: the employer's representative, with a backup when away.",
          "sub": "Ai làm: Đại diện chủ đầu tư, có người dự phòng khi vắng.",
          "keys": [
            "người dự phòng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "If we are late, handover may be deemed done. Warranty starts, risk passes.",
          "sub": "Trễ thì sao: có thể coi bàn giao đã xảy ra, bắt đầu bảo hành, chuyển rủi ro.",
          "face": "surprised"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A deadline with no keeper is a deadline waiting to be missed.",
          "sub": "Thời hạn không có người giữ thì sớm muộn sẽ thành thời hạn bị lỡ.",
          "keys": [
            "không có người giữ"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "After every signed amendment, update all six indexes.",
          "sub": "Mỗi lần ký phụ lục sửa đổi, cập nhật lại 6 chỉ mục.",
          "keys": [
            "cập nhật lại 6 chỉ mục"
          ]
        }
      ],
      "ref": "p20,p21,p22"
    },
    {
      "id": "s21",
      "module": "BRK-08",
      "data": {
        "title": "Chín bài tiếp theo",
        "points": [
          {
            "label": "Bài 1",
            "sub": "Khung 8 tầng",
            "illus": "seedling"
          },
          {
            "label": "Bài 2–3",
            "sub": "Câu đủ vế, shall",
            "illus": "pencil"
          },
          {
            "label": "Bài 4–5",
            "sub": "Định nghĩa, song ngữ",
            "illus": "label"
          },
          {
            "label": "Bài 6–7",
            "sub": "Phạt, chấm dứt",
            "illus": "warning"
          },
          {
            "label": "Bài 8",
            "sub": "Bảy mâu thuẫn",
            "illus": "magnifying-glass-tilted-left"
          },
          {
            "label": "Bài 9",
            "sub": "Vai lead",
            "illus": "handshake"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Nine lessons ahead: the frame, then sentences, definitions, two languages.",
          "sub": "Chín bài tiếp: dựng khung, rèn câu, định nghĩa, song ngữ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then damages and termination, seven conflicts, and the lead role.",
          "sub": "Rồi phạt và chấm dứt, bảy loại mâu thuẫn, và vai lead.",
          "keys": [
            "vai lead"
          ]
        }
      ],
      "ref": "p23,p24"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Hai tuần sau · trình",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "explain",
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
                "world-map",
                "card-index"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Monday",
            "caption": "Sáng thứ Hai · phòng họp",
            "icon": "world-map"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1270,
            "w": 46,
            "h": 46,
            "at": "l2:family",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1252,
            "size": 58,
            "at": "l2:family+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Mỗi điều vào 1 nhóm",
            "x": 8000,
            "y": 1260,
            "size": 36,
            "at": "l2:family+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1360,
            "w": 46,
            "h": 46,
            "at": "l2:empty",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1342,
            "size": 58,
            "at": "l2:empty+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Nhóm trống: hỏi trước",
            "x": 8000,
            "y": 1350,
            "size": 36,
            "at": "l2:empty+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1450,
            "w": 46,
            "h": 46,
            "at": "l2:Document",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1432,
            "size": 58,
            "at": "l2:Document+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Issues: thứ tự ưu tiên",
            "x": 8000,
            "y": 1440,
            "size": 36,
            "at": "l2:Document+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1540,
            "w": 46,
            "h": 46,
            "at": "l2:number",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1522,
            "size": 58,
            "at": "l2:number+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Con số: nguồn vốn nào",
            "x": 8000,
            "y": 1530,
            "size": 36,
            "at": "l2:number+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Ăn có nơi, chơi có chốn”",
            "x": 7932,
            "y": 1650,
            "size": 46,
            "at": "l4:place",
            "color": "accent",
            "hl": [
              {
                "text": "có chốn",
                "at": "l4:place"
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
          "say": "Monday again, a week later. Same room, same thick draft.",
          "sub": "Lại sáng thứ Hai, một tuần sau. Vẫn phòng ấy, vẫn bản nháp dày ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Every clause in a family. Two empty ones to ask about. Document order first. Every number, checked.",
          "sub": "Mỗi điều vào một nhóm. Hai nhóm trống cần hỏi. Thứ tự ưu tiên lên đầu. Con số nào cũng đã hỏi nguồn vốn.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "A map, not a pile. Okay, done!",
          "sub": "Có bản đồ, không phải một chồng giấy. Rồi, vậy nha!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A place to eat, a place to play. Now every clause has its place.",
          "sub": "“Ăn có nơi, chơi có chốn.” Giờ điều khoản nào cũng có chốn.",
          "keys": [
            "Ăn có nơi, chơi có chốn"
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
      "ref": "outro,p16"
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
            "at": "l1:nine",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:law",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:four",
            "fit": "I",
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
            "x": 7484,
            "y": 40,
            "at": "l1:nine"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1580,
            "y": 1130,
            "at": "l2:law"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 7484,
            "y": 1130,
            "at": "l3:four"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Tham khảo chung; tình huống là minh hoạ, không lấy từ hợp đồng hay dự án cụ thể nào.",
            "x": 7932,
            "y": 1750,
            "size": 28,
            "at": "l4",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "z-note2",
            "t": "text",
            "text": "Việc cụ thể: đối chiếu văn bản hiện hành và hỏi luật sư.",
            "x": 7932,
            "y": 1795,
            "size": 28,
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
          "say": "So: read by a map. Nine families, appendices linked to each.",
          "sub": "Tóm lại: đọc theo bản đồ. Chín nhóm, phụ lục nối với từng nhóm.",
          "keys": [
            "đọc theo bản đồ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Vietnamese law sits on top. Ask the funding source before quoting a number.",
          "sub": "Luật Việt Nam đè lên thỏa thuận. Hỏi nguồn vốn trước khi viện dẫn con số.",
          "keys": [
            "Hỏi nguồn vốn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And deliver four products, not a pile of comments.",
          "sub": "Và giao bốn sản phẩm, không phải một chồng comment.",
          "keys": [
            "bốn sản phẩm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "General knowledge, illustrative story. For a real contract, check current law and ask a lawyer.",
          "sub": "Bài để tham khảo chung, tình huống là minh hoạ. Việc cụ thể, đối chiếu văn bản hiện hành và hỏi luật sư.",
          "keys": [
            "hỏi luật sư"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s24",
      "module": "QUIZ-01",
      "data": {
        "q": "A private project draft copies the public sector security range and calls it legal, what should counsel say?",
        "options": [
          "That range is the only lawful level, so no party may ever negotiate a different one",
          "That security is not allowed in private projects, so the clause must be deleted",
          "That range applies to public and PPP projects, so here the level is a negotiated choice"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "money-bag",
        "why": "Khoảng 2% đến 10% bảo đảm thực hiện trong Nghị định 210/2026/NĐ-CP chỉ áp cho dự án đầu tư công, PPP; vốn tư nhân thì các bên tự thỏa thuận."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A private project draft copies the public sector security range and calls it legal, what should counsel say?",
          "sub": "Bản nháp dự án tư nhân chép khoảng bảo đảm của khu vực công và gọi là theo luật, pháp chế nên nói gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "That range is for public and PPP projects. Here, the level is negotiated.",
          "sub": "Khoảng đó dành cho dự án đầu tư công, PPP. Ở đây, mức bảo đảm là thỏa thuận."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Ask whose money a number is for.",
          "sub": "Hỏi con số áp cho nguồn vốn nào."
        }
      ],
      "ref": "questions[18]"
    },
    {
      "id": "s25",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi xếp mục lục bản nháp vào 9 nhóm"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, list your draft's clauses and sort each into the nine families.",
          "sub": "Hôm nay, lập mục lục bản nháp, xếp mỗi điều vào một trong 9 nhóm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "An empty family is your first question. Then try the forty questions below.",
          "sub": "Nhóm nào trống là chỗ cần hỏi trước. Rồi thử bốn mươi câu hỏi bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-24: vật neo con số 9 (nhóm điều khoản) trên bản nháp vài trăm trang → sáng thứ Hai Cô Hoa giao bản nháp, Bác Bình “bắt đầu từ đâu?” → câu hỏi chính → 4 chặng. Đét trái + bảng 10 ô theo TUẦN ĐẦU Bác Bình làm đầu mối: thứ Hai EPC là mua gì → chiều thứ Hai 9 nhóm (BRK-06 năm ô kiểm) → thứ Ba phụ lục, Sam và chuyện loại cáp → (BRK-07) thứ Tư luật Việt Nam → “Khoan đã!” Dũng chép 2%–10% gọi là theo luật → hiểu lầm p15 → thứ Năm mẫu Silver Book (BRK-10) → thứ Sáu 4 sản phẩm (BRK-05 sáu chỉ mục), chỉ mục thời hạn → (BRK-08 lộ trình 9 bài) → thứ Hai tuần sau trình Cô Hoa (khép vòng “Ăn có nơi, chơi có chốn”). Nhân vật theo w145/_series/epc-legal-counsel.md. Không nêu tên người, pháp nhân, dự án, hợp đồng thật (không nêu tên tổ chức soạn mẫu, chỉ “mẫu Silver Book”). Số/điều chỉ từ bài: Luật 135/2025 (Đ4 k2, Đ80, hiệu lực 01/7/2026), NĐ 210/2026, 2%–10%, bản 2017/2022, 21 điều, 9 nhóm, 4 sản phẩm, 6 chỉ mục. Câu đố questions[18]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
