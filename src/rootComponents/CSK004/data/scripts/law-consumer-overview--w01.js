// law-consumer-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "law-consumer-overview--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "law-consumer-contracts",
    "slug": "law-consumer-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Hợp đồng với người tiêu dùng khác hợp đồng giữa hai doanh nghiệp ở đâu?",
    "series": "Bán cho người tiêu dùng đúng luật — hợp đồng theo mẫu và điều kiện giao dịch chung cho pháp chế bán lẻ"
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
            "id": "a-q",
            "t": "text",
            "text": "Khách bấm “Tôi đồng ý”",
            "x": 60,
            "y": 50,
            "size": 64,
            "at": "l1:clicked",
            "hl": [
              {
                "text": "Tôi đồng ý",
                "at": "l1:agree"
              }
            ]
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "→ điều nào cũng ràng buộc?",
            "x": 60,
            "y": 145,
            "size": 54,
            "at": "l1:every"
          },
          {
            "id": "a-by",
            "t": "box",
            "x": 60,
            "y": 250,
            "w": 330,
            "h": 120,
            "at": "l2:Yes",
            "stroke": 5
          },
          {
            "id": "a-yt",
            "t": "text",
            "text": "Có",
            "x": 170,
            "y": 270,
            "size": 64,
            "at": "l2:Yes+200"
          },
          {
            "id": "a-bn",
            "t": "box",
            "x": 450,
            "y": 250,
            "w": 330,
            "h": 120,
            "at": "l2:No",
            "stroke": 5
          },
          {
            "id": "a-nt",
            "t": "text",
            "text": "Không",
            "x": 520,
            "y": 270,
            "size": 64,
            "at": "l2:No+200"
          },
          {
            "id": "a-yx",
            "t": "strike",
            "over": "a-yt",
            "at": "l4:No"
          },
          {
            "id": "a-nr",
            "t": "ring",
            "around": [
              "a-nt"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l4:No"
          },
          {
            "id": "a-15",
            "t": "text",
            "text": "15 nhóm điều khoản bị cấm",
            "x": 60,
            "y": 430,
            "size": 48,
            "at": "l4:fifteen",
            "color": "coral",
            "hl": [
              {
                "text": "15 nhóm",
                "at": "l4:fifteen"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Luật BVQLNTD 2023 (19/2023/QH15), Điều 10, 25",
            "x": 60,
            "y": 720,
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
          "say": "A customer clicked I agree. So every single term now binds her. Right?",
          "sub": "Khách đã bấm “Tôi đồng ý”. Vậy điều khoản nào cũng ràng buộc khách. Đúng không?",
          "keys": [
            "Tôi đồng ý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yes, or no? Take a guess.",
          "sub": "Có, hay không? Bạn đoán thử."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Freedom of contract, people say. A click is a click.",
          "sub": "Người ta bảo: tự do hợp đồng. Bấm là bấm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No. The law lists fifteen groups of banned terms, and Article ten makes writing them a prohibited act.",
          "sub": "Không. Luật liệt kê 15 nhóm điều khoản không được phép quy định, và Điều 10 coi việc đưa vào là hành vi bị nghiêm cấm.",
          "keys": [
            "15 nhóm điều khoản"
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
            "at": "l4",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
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
            "y": 40,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "thinking"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "1 giờ chiều thứ Hai · bàn Lan",
            "icon": "page-facing-up"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Giấy trắng mực đen”",
            "x": 900,
            "y": 640,
            "size": 52,
            "at": "l6:black",
            "color": "accent",
            "hl": [
              {
                "text": "mực đen",
                "at": "l6:black"
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
          "say": "Meet Lan, legal counsel at a retail group. One o'clock, Monday afternoon.",
          "sub": "Đây là Lan, pháp chế một tập đoàn bán lẻ. Một giờ chiều thứ Hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She looks after an electronics chain. The group also runs an e-wallet.",
          "sub": "Cô lo chuỗi điện máy. Tập đoàn còn có một ví điện tử."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Dũng, product lead of that e-wallet. Fast. Very fast.",
          "sub": "Còn đây là Dũng, trưởng nhóm sản phẩm của ví. Nhanh. Rất nhanh.",
          "keys": [
            "trưởng nhóm sản phẩm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "New terms of use for the wallet. We launch tomorrow. Just a quick look, okay?",
          "sub": "Điều khoản sử dụng mới của ví. Mai ra mắt. Em xem lướt giúp anh nhé?",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "One afternoon. Let me write that down first.",
          "sub": "Một buổi chiều. Để em ghi lại đã.",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "White paper, black ink, our elders say. What is written stays. So who carries the risk?",
          "sub": "Ông bà nói: “Giấy trắng mực đen.” Viết ra là còn đó. Vậy ai gánh rủi ro?",
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
      "ref": "intro,p20"
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
            "text": "Khác B2B ở đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:differ",
            "hl": [
              {
                "text": "Khác",
                "at": "l1:differ"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: chỉ khác tên",
            "x": 2028,
            "y": 150,
            "size": 48,
            "at": "l2:name",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:but"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: một bên soạn sẵn",
            "x": 2028,
            "y": 230,
            "size": 54,
            "at": "l2:drafts",
            "color": "accent",
            "hl": [
              {
                "text": "soạn sẵn",
                "at": "l2:drafts"
              }
            ]
          },
          {
            "id": "b-who",
            "t": "text",
            "text": "Người tiêu dùng là ai?",
            "x": 2028,
            "y": 340,
            "size": 52,
            "at": "l3:who",
            "hl": [
              {
                "text": "là ai",
                "at": "l3:who"
              }
            ]
          },
          {
            "id": "b-w1",
            "t": "text",
            "text": "Cá nhân, gia đình, tổ chức",
            "x": 2028,
            "y": 420,
            "size": 44,
            "at": "l3:individuals"
          },
          {
            "id": "b-w2",
            "t": "text",
            "text": "mua để dùng, sinh hoạt",
            "x": 2028,
            "y": 480,
            "size": 44,
            "at": "l3:daily"
          },
          {
            "id": "b-w3",
            "t": "text",
            "text": "không để kinh doanh",
            "x": 2028,
            "y": 540,
            "size": 48,
            "at": "l3:commercial",
            "color": "coral",
            "hl": [
              {
                "text": "không",
                "at": "l3:not"
              }
            ]
          },
          {
            "id": "b-tv",
            "t": "illus",
            "name": "laptop",
            "x": 2948,
            "y": 200,
            "size": 150,
            "at": "l4:laptops"
          },
          {
            "id": "b-shop",
            "t": "text",
            "text": "Mua máy để bán lại",
            "x": 2868,
            "y": 380,
            "size": 46,
            "at": "l4:resell"
          },
          {
            "id": "b-shop2",
            "t": "text",
            "text": "→ không phải NTD",
            "x": 2908,
            "y": 445,
            "size": 46,
            "at": "l4:not",
            "color": "coral"
          },
          {
            "id": "b-ask",
            "t": "text",
            "text": "Khách là ai? Mua làm gì?",
            "x": 2868,
            "y": 560,
            "size": 46,
            "at": "l5:what for",
            "color": "accent",
            "hl": [
              {
                "text": "Mua làm gì?",
                "at": "l5:what for"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Luật BVQLNTD 2023 (19/2023/QH15), Điều 3",
            "x": 2028,
            "y": 720,
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
          "say": "So how does a consumer contract differ from a contract between two businesses?",
          "sub": "Vậy hợp đồng với người tiêu dùng khác hợp đồng giữa hai doanh nghiệp ở đâu?",
          "keys": [
            "khác hợp đồng giữa hai doanh nghiệp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not just the name, but who drafts it. Businesses negotiate. With consumers, the seller drafts everything.",
          "sub": "Không chỉ khác tên, mà khác người soạn. Doanh nghiệp đàm phán từng điều; với người tiêu dùng, bên bán soạn sẵn.",
          "keys": [
            "bên bán soạn sẵn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First, who is a consumer? Individuals, families, organisations buying for daily use, not for commercial purposes.",
          "sub": "Trước hết, người tiêu dùng là ai? Cá nhân, gia đình, cơ quan, tổ chức mua để sinh hoạt, tiêu dùng, không nhằm mục đích thương mại.",
          "keys": [
            "không nhằm mục đích thương mại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A shop buying laptops to resell? Not a consumer in that deal.",
          "sub": "Cửa hàng mua máy tính để bán lại? Không phải người tiêu dùng trong giao dịch đó."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So question zero for any document: who is the customer, and what for?",
          "sub": "Vậy câu hỏi số không cho mọi văn bản: khách là ai, mua để làm gì?",
          "keys": [
            "mua để làm gì"
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
            "text": "① 1 rưỡi · Cán cân",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:half past"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 110,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "lan",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "mobile-phone",
                "balance-scale"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:calls",
            "caption": "1 rưỡi · Bác Bình gọi",
            "icon": "balance-scale"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Một bên soạn, dùng nhiều lần",
            "x": 3996,
            "y": 170,
            "size": 42,
            "at": "l3:drafted"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Bên kia: nhận hoặc bỏ cả gói",
            "x": 3996,
            "y": 240,
            "size": 42,
            "at": "l3:accepts",
            "color": "coral",
            "hl": [
              {
                "text": "cả gói",
                "at": "l3:whole"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Người soạn có lợi thế",
            "x": 3996,
            "y": 330,
            "size": 46,
            "at": "l4:advantage"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "→ luật cân lại",
            "x": 4036,
            "y": 400,
            "size": 54,
            "at": "l4:rebalances",
            "color": "accent",
            "hl": [
              {
                "text": "cân lại",
                "at": "l4:rebalances"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Điều 406 BLDS 2015 · theo Tạp chí Công Thương",
            "x": 3996,
            "y": 720,
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
          "say": "Half past one. Uncle Bình calls, Lan's uncle, a lawyer for decades.",
          "sub": "Một rưỡi. Bác Bình gọi, bác ruột Lan, làm luật sư mấy chục năm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. Read the law first. Who holds the pen here?",
          "sub": "Từ từ, đọc điều luật đã. Ở đây ai cầm bút?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "General terms are drafted by one side, used again and again. The other side accepts the whole package, or walks away.",
          "sub": "Điều kiện giao dịch chung do một bên soạn sẵn, dùng nhiều lần. Bên kia chỉ nhận cả gói, hoặc bỏ đi.",
          "keys": [
            "nhận cả gói"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The drafter has the information advantage. So the law rebalances, with duties on the drafter.",
          "sub": "Người soạn có lợi thế thông tin và câu chữ. Nên luật cân lại, đặt nghĩa vụ lên bên soạn.",
          "keys": [
            "luật cân lại"
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
          }
        ],
        "items": [
          {
            "id": "c-t3",
            "t": "text",
            "text": "Ba quả cân:",
            "x": 3996,
            "y": 490,
            "size": 48,
            "at": "l1:three",
            "hl": [
              {
                "text": "Ba quả cân",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "c-w1",
            "t": "text",
            "text": "• rõ, dễ hiểu, tiếng Việt",
            "x": 3996,
            "y": 550,
            "size": 40,
            "at": "l1:clear"
          },
          {
            "id": "c-w2",
            "t": "text",
            "text": "• nhiều bản → bản lợi cho khách",
            "x": 3996,
            "y": 605,
            "size": 40,
            "at": "l2:versions"
          },
          {
            "id": "c-w3",
            "t": "text",
            "text": "• hiểu khác → theo hướng có lợi",
            "x": 3996,
            "y": 660,
            "size": 40,
            "at": "l3:differently",
            "color": "accent",
            "hl": [
              {
                "text": "có lợi",
                "at": "l3:favour"
              }
            ]
          },
          {
            "id": "c-new",
            "t": "text",
            "text": "2023: cả điều kiện chung",
            "x": 4836,
            "y": 650,
            "size": 44,
            "at": "l4:twenty twenty-three",
            "color": "coral"
          },
          {
            "id": "c-src2",
            "t": "text",
            "text": "Luật BVQLNTD 2023 (19/2023/QH15), Điều 23, 24 · Bộ Công Thương",
            "x": 4836,
            "y": 720,
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
          "say": "Three weights on the scale. One: clear, easy wording, in Vietnamese.",
          "sub": "Ba quả cân. Một: nội dung rõ ràng, dễ hiểu, dùng tiếng Việt.",
          "keys": [
            "Ba quả cân"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: several language versions? The one more favourable to the consumer applies.",
          "sub": "Hai: nhiều bản ngôn ngữ khác nhau? Áp dụng bản có lợi hơn cho người tiêu dùng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: understood differently? Read it in the consumer's favour.",
          "sub": "Ba: hai bên hiểu khác nhau? Giải thích theo hướng có lợi cho người tiêu dùng.",
          "keys": [
            "có lợi cho người tiêu dùng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And since the twenty twenty-three law, that rule covers general terms too, not only contracts.",
          "sub": "Và từ Luật 2023, quy tắc ấy áp cả cho điều kiện giao dịch chung, không chỉ hợp đồng."
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s06",
      "module": "BRK-04",
      "data": {
        "title": "Nút “Tôi đồng ý”",
        "wrong": "Đã bấm thì điều nào cũng ràng buộc",
        "right": "Bấm chỉ mở cửa, không hợp thức hoá điều trái luật",
        "wrongIllus": "check-box-with-check",
        "rightIllus": "prohibited"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Clicked, so every term binds?",
          "sub": "Đã bấm thì điều nào cũng ràng buộc?",
          "keys": [
            "điều nào cũng ràng buộc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. A click opens the door. It never cleans an unlawful term.",
          "sub": "Không. Cú bấm chỉ mở cửa, không hợp thức hoá điều khoản trái luật.",
          "keys": [
            "chỉ mở cửa"
          ]
        }
      ],
      "ref": "p4,p5"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 2 giờ · Gọi đúng tên",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:two"
          },
          {
            "id": "d-sub",
            "t": "text",
            "text": "Ba khái niệm, BLDS định nghĩa",
            "x": 5964,
            "y": 140,
            "size": 40,
            "at": "l2:Civil",
            "color": "muted"
          },
          {
            "id": "d-b0",
            "t": "box",
            "x": 5964,
            "y": 220,
            "w": 510,
            "h": 330,
            "at": "l3:website",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "d-a0",
            "t": "text",
            "text": "Điều khoản sử dụng web",
            "x": 5994,
            "y": 250,
            "size": 40,
            "at": "l3:website+200"
          },
          {
            "id": "d-n0",
            "t": "text",
            "text": "→ ĐK giao dịch chung",
            "x": 5994,
            "y": 340,
            "size": 40,
            "at": "l3:website+900",
            "color": "accent"
          },
          {
            "id": "d-c0",
            "t": "text",
            "text": "ghi ngày áp dụng",
            "x": 5994,
            "y": 440,
            "size": 38,
            "at": "l3:website+1500",
            "color": "muted"
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 6514,
            "y": 220,
            "w": 510,
            "h": 330,
            "at": "l4:instalment",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "d-a1",
            "t": "text",
            "text": "HĐ mua trả góp",
            "x": 6544,
            "y": 250,
            "size": 40,
            "at": "l4:instalment+200"
          },
          {
            "id": "d-n1",
            "t": "text",
            "text": "→ HĐ theo mẫu",
            "x": 6544,
            "y": 340,
            "size": 40,
            "at": "l4:instalment+900",
            "color": "coral"
          },
          {
            "id": "d-c1",
            "t": "text",
            "text": "soát đủ 12 nhóm",
            "x": 6544,
            "y": 440,
            "size": 38,
            "at": "l4:instalment+1500",
            "color": "muted"
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 7064,
            "y": 220,
            "w": 510,
            "h": 330,
            "at": "l5:warranty",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "d-a2",
            "t": "text",
            "text": "Chính sách bảo hành",
            "x": 7094,
            "y": 250,
            "size": 40,
            "at": "l5:warranty+200"
          },
          {
            "id": "d-n2",
            "t": "text",
            "text": "→ ĐK giao dịch chung",
            "x": 7094,
            "y": 340,
            "size": 40,
            "at": "l5:warranty+900",
            "color": "accent"
          },
          {
            "id": "d-c2",
            "t": "text",
            "text": "đăng chung mọi đơn",
            "x": 7094,
            "y": 440,
            "size": 38,
            "at": "l5:warranty+1500",
            "color": "muted"
          },
          {
            "id": "d-key",
            "t": "text",
            "text": "Gọi đúng tên → biết phải làm gì",
            "x": 5964,
            "y": 610,
            "size": 52,
            "at": "l6:name",
            "color": "accent",
            "hl": [
              {
                "text": "Gọi đúng tên",
                "at": "l6:name"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Luật BVQLNTD 2023 (19/2023/QH15), Điều 23 · theo Tạp chí Công Thương",
            "x": 5964,
            "y": 720,
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
          "say": "Two o'clock. Lan opens the website and names every document.",
          "sub": "Hai giờ. Lan mở website, gọi tên từng văn bản."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The law uses three ideas. For two of them, it points back to the Civil Code.",
          "sub": "Luật dùng ba khái niệm. Hai khái niệm theo mẫu và chung thì dẫn chiếu Bộ luật Dân sự."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "One: website terms of use. For every customer, no one signs. General terms. Write the start date.",
          "sub": "Một: điều khoản sử dụng website. Áp cho mọi khách, không ký riêng. Điều kiện giao dịch chung, ghi thời điểm áp dụng.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Two: the printed instalment contract, signed with each buyer. A standard form contract.",
          "sub": "Hai: hợp đồng mua trả góp in sẵn, ký với từng khách. Hợp đồng theo mẫu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Three: the warranty policy, posted for every order. General terms again.",
          "sub": "Ba: chính sách bảo hành đăng chung cho mọi đơn. Lại là điều kiện giao dịch chung."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Name the document first. Then you know what to do with it.",
          "sub": "Gọi đúng tên văn bản trước, rồi mới biết phải làm gì với nó.",
          "keys": [
            "Gọi đúng tên văn bản"
          ]
        }
      ],
      "ref": "p6,p8,p9"
    },
    {
      "id": "s08",
      "module": "BRK-03",
      "data": {
        "value": 12,
        "suffix": " nhóm",
        "label": "nội dung cơ bản của hợp đồng theo mẫu",
        "illus": "clipboard"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And the instalment contract needs a checklist.",
          "sub": "Còn hợp đồng trả góp thì cần một danh mục soát."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twelve groups of basic content, clause three of Article twenty-three.",
          "sub": "Mười hai nhóm nội dung cơ bản, theo khoản 3 Điều 23.",
          "keys": [
            "Mười hai nhóm"
          ]
        }
      ],
      "ref": "p7"
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
            "text": "③ 3 giờ · Công khai khi nào?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:three"
          },
          {
            "id": "e-h1",
            "t": "text",
            "text": "HĐ theo mẫu",
            "x": 7932,
            "y": 160,
            "size": 52,
            "at": "l2:standard",
            "color": "accent"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Trước khi ký, đặt cọc, trả trước",
            "x": 7932,
            "y": 235,
            "size": 40,
            "at": "l2:deposit"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Niêm yết ở trụ sở, cửa hàng",
            "x": 7932,
            "y": 290,
            "size": 40,
            "at": "l3:premises"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Đăng web, ứng dụng",
            "x": 7932,
            "y": 345,
            "size": 40,
            "at": "l3:website"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Cho thời gian đọc · lưu bản ký",
            "x": 7932,
            "y": 400,
            "size": 40,
            "at": "l4:time"
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "Mất bản: sao trong 07 ngày LV",
            "x": 7932,
            "y": 455,
            "size": 40,
            "at": "l4:seven",
            "color": "coral",
            "hl": [
              {
                "text": "07 ngày",
                "at": "l4:seven"
              }
            ]
          },
          {
            "id": "e-h2",
            "t": "text",
            "text": "ĐK giao dịch chung",
            "x": 8772,
            "y": 160,
            "size": 52,
            "at": "l5:general",
            "color": "accent"
          },
          {
            "id": "e-6",
            "t": "text",
            "text": "Ghi rõ ngày bắt đầu áp dụng",
            "x": 8772,
            "y": 235,
            "size": 40,
            "at": "l5:start"
          },
          {
            "id": "e-7",
            "t": "text",
            "text": "Chỉ ràng buộc khi công khai",
            "x": 8772,
            "y": 290,
            "size": 40,
            "at": "l5:only",
            "color": "coral",
            "hl": [
              {
                "text": "công khai",
                "at": "l5:public"
              }
            ]
          },
          {
            "id": "e-7b",
            "t": "text",
            "text": "TRƯỚC giao dịch",
            "x": 8812,
            "y": 345,
            "size": 44,
            "at": "l5:before",
            "color": "coral"
          },
          {
            "id": "e-8",
            "t": "text",
            "text": "Bán từ xa: đổi trả, khiếu nại",
            "x": 8772,
            "y": 430,
            "size": 40,
            "at": "l6:distance"
          },
          {
            "id": "e-key",
            "t": "text",
            "text": "Chưa công khai = chưa ràng buộc",
            "x": 7932,
            "y": 580,
            "size": 52,
            "at": "l7:invisible",
            "color": "accent",
            "hl": [
              {
                "text": "chưa ràng buộc",
                "at": "l7:bind"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Luật BVQLNTD 2023 (19/2023/QH15), Điều 26, 27, 37",
            "x": 7932,
            "y": 720,
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
          "say": "Three o'clock. Naming done. Now, when must each one be public?",
          "sub": "Ba giờ. Gọi tên xong. Giờ: mỗi loại phải công khai khi nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A standard form contract: before the customer signs, or pays any deposit or advance.",
          "sub": "Hợp đồng theo mẫu: công khai trước khi khách giao kết, hoặc trước khi đặt cọc, thanh toán trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Posted in plain sight at the premises, and on the website or app.",
          "sub": "Niêm yết chỗ dễ nhìn ở trụ sở, cửa hàng, và đăng web, ứng dụng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Give reasonable time to read, keep the signed copy, and if she loses hers, a copy within seven working days.",
          "sub": "Cho khách thời gian hợp lý để đọc, lưu bản đã ký, và nếu khách làm mất thì cấp bản sao trong 07 ngày làm việc.",
          "keys": [
            "07 ngày làm việc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "General terms must state their start date, and bind the consumer only if made public before the deal.",
          "sub": "Điều kiện giao dịch chung phải ghi rõ thời điểm áp dụng, và chỉ ràng buộc khách khi đã công khai trước khi giao dịch.",
          "keys": [
            "công khai trước khi giao dịch"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Selling at a distance? Add return conditions and the complaint process.",
          "sub": "Bán hàng từ xa? Thêm điều kiện, quy trình đổi trả và quy trình khiếu nại."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "An invisible term is a term that does not bind.",
          "sub": "Điều khoản khách không được thấy trước thì chưa ràng buộc khách.",
          "keys": [
            "chưa ràng buộc khách"
          ]
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Công khai rồi, nhưng khách đọc nổi không?",
        "illus": "magnifying-glass-tilted-left"
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
          "say": "Posted, yes. But can the customer actually read it?",
          "sub": "Công khai rồi. Nhưng khách đọc nổi không?",
          "keys": [
            "đọc nổi không"
          ]
        }
      ],
      "ref": "p12"
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
            "at": "l3",
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
            "text": "④ 3 rưỡi · Chữ đọc nổi",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:half past"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "tu",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold",
                  "face": "thinking"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "props": [
                "television",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "tu",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:store",
            "caption": "3 rưỡi · cửa hàng điện máy",
            "icon": "television"
          },
          {
            "id": "f-12",
            "t": "text",
            "text": "Giấy: cỡ chữ ≥ 12",
            "x": 60,
            "y": 1260,
            "size": 56,
            "at": "l4:twelve",
            "color": "accent",
            "hl": [
              {
                "text": "≥ 12",
                "at": "l4:twelve"
              }
            ]
          },
          {
            "id": "f-tnr",
            "t": "text",
            "text": "Times New Roman/tương đương",
            "x": 60,
            "y": 1340,
            "size": 38,
            "at": "l4:Times"
          },
          {
            "id": "f-c",
            "t": "text",
            "text": "Tương phản, bố cục rõ",
            "x": 60,
            "y": 1395,
            "size": 44,
            "at": "l5:contrast"
          },
          {
            "id": "f-grey",
            "t": "text",
            "text": "chữ xám nhạt chân trang",
            "x": 60,
            "y": 1465,
            "size": 40,
            "at": "l6:grey",
            "color": "muted"
          },
          {
            "id": "f-greyx",
            "t": "strike",
            "over": "f-grey",
            "at": "l6:avoid"
          },
          {
            "id": "f-key",
            "t": "text",
            "text": "Không đọc được → khó bảo vệ",
            "x": 60,
            "y": 1535,
            "size": 44,
            "at": "l7:defend",
            "color": "coral",
            "hl": [
              {
                "text": "khó bảo vệ",
                "at": "l7:defend"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "NĐ 55/2024/NĐ-CP, Điều 6",
            "x": 60,
            "y": 1810,
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
          "say": "Half past three. Lan walks down to the store floor.",
          "sub": "Ba rưỡi. Lan xuống cửa hàng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Bà Tư, a regular customer, buying a TV on instalments.",
          "sub": "Đây là bà Tư, khách quen, đang mua ti vi trả góp.",
          "keys": [
            "bà Tư"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "tu",
          "say": "Child, these letters are tiny and grey. Where do I sign?",
          "sub": "Con ơi, chữ gì mà bé tí lại xám xịt. Bà ký vào đâu đây?",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Decree fifty-five: on paper, font size at least twelve, Times New Roman or similar.",
          "sub": "Nghị định 55: giao kết bằng giấy thì cỡ chữ nhỏ nhất là 12, phông Times New Roman hoặc tương đương.",
          "keys": [
            "cỡ chữ nhỏ nhất là 12"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Text and background must contrast. A clear layout, easy to follow.",
          "sub": "Màu chữ và màu nền tương phản. Bố cục rõ ràng, dễ theo dõi."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Light grey fine print at the bottom of the page? Avoid it.",
          "sub": "Dòng chữ nhỏ xám nhạt dưới chân trang? Cần tránh."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "A term the customer cannot read can hardly defend the one who wrote it.",
          "sub": "Điều khoản khách không đọc được thì khó bảo vệ được người soạn.",
          "keys": [
            "khó bảo vệ được người soạn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p12,p13"
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
            "id": "f-vul",
            "t": "text",
            "text": "Nhóm được bảo vệ thêm:",
            "x": 60,
            "y": 1620,
            "size": 42,
            "at": "l1:protects",
            "hl": [
              {
                "text": "bảo vệ thêm",
                "at": "l1:more"
              }
            ]
          },
          {
            "id": "f-vul2",
            "t": "text",
            "text": "cao tuổi, khuyết tật, trẻ em…",
            "x": 60,
            "y": 1680,
            "size": 38,
            "at": "l1:older"
          },
          {
            "id": "f-vul3",
            "t": "text",
            "text": "Không từ chối vì ngôn ngữ",
            "x": 60,
            "y": 1740,
            "size": 38,
            "at": "l3:refusing",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And Bà Tư belongs to a group the law protects more: older people, disabled people, children, ethnic minorities.",
          "sub": "Và bà Tư thuộc nhóm được bảo vệ thêm: người cao tuổi, người khuyết tật, trẻ em, người dân tộc thiểu số.",
          "keys": [
            "được bảo vệ thêm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Let me read it with you, Bà. Slowly. And we'll print a bigger copy.",
          "sub": "Con đọc cùng bà nhé. Từ từ. Rồi con in bản chữ to hơn.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No refusing them over language, script or custom. And the business publishes its policy for them.",
          "sub": "Không được từ chối vì khác biệt ngôn ngữ, chữ viết, phong tục, và phải công khai chính sách bảo vệ nhóm khách này."
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "4 rưỡi · phòng họp ví",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đồng ý tất cả mới được dùng ví",
          "why": "Điều 25 cấm buộc khách đồng ý cho thu thập, dùng thông tin như điều kiện giao kết.",
          "rule": "Dữ liệu: khách được chọn"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Data screen? Easy. One box: accept all data uses to continue. Clean design!",
          "sub": "Màn hình dữ liệu à? Dễ. Một ô: đồng ý mọi mục đích dùng dữ liệu để tiếp tục. Gọn đẹp!",
          "pose": "explain",
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
          "say": "Article twenty-five bans forcing data consent as a condition of the contract.",
          "sub": "Điều 25 cấm điều khoản buộc khách đồng ý cho thu thập, sử dụng thông tin như một điều kiện để giao kết.",
          "keys": [
            "như một điều kiện để giao kết"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Fine. Notify first, get consent, and let users choose sharing and ads separately.",
          "sub": "Được rồi. Thông báo trước, xin xác nhận đồng ý, và cho khách chọn riêng phần chia sẻ, quảng cáo.",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. The customer chooses the scope.",
          "sub": "Đúng. Khách được chọn phạm vi.",
          "phase": "redo",
          "keys": [
            "Khách được chọn phạm vi"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "text": "⑤ Dữ liệu và KOL",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:data"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1270,
            "w": 46,
            "h": 46,
            "at": "l1:notify",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1252,
            "size": 58,
            "at": "l1:notify+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Thông báo trước",
            "x": 2098,
            "y": 1262,
            "size": 44,
            "at": "l1:notify+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1355,
            "w": 46,
            "h": 46,
            "at": "l1:confirmed",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1337,
            "size": 58,
            "at": "l1:confirmed+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Khách xác nhận đồng ý",
            "x": 2098,
            "y": 1347,
            "size": 44,
            "at": "l1:confirmed+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1440,
            "w": 46,
            "h": 46,
            "at": "l2:scope",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1422,
            "size": 58,
            "at": "l2:scope+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Chọn phạm vi chia sẻ",
            "x": 2098,
            "y": 1432,
            "size": 44,
            "at": "l2:scope+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1525,
            "w": 46,
            "h": 46,
            "at": "l2:advertising",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2033,
            "y": 1507,
            "size": 58,
            "at": "l2:advertising+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Chọn bên thứ ba, quảng cáo",
            "x": 2098,
            "y": 1517,
            "size": 44,
            "at": "l2:advertising+200"
          },
          {
            "id": "g-ban",
            "t": "text",
            "text": "Cấm: “đồng ý hết mới dùng”",
            "x": 2028,
            "y": 1630,
            "size": 44,
            "at": "l3:accept",
            "color": "coral",
            "hl": [
              {
                "text": "đồng ý hết",
                "at": "l3:accept"
              }
            ]
          },
          {
            "id": "g-mic",
            "t": "illus",
            "name": "studio-microphone",
            "x": 2968,
            "y": 1260,
            "size": 140,
            "at": "l4:influencers"
          },
          {
            "id": "g-kol",
            "t": "text",
            "text": "Người có ảnh hưởng:",
            "x": 2968,
            "y": 1430,
            "size": 44,
            "at": "l4:influencers"
          },
          {
            "id": "g-kol2",
            "t": "text",
            "text": "công khai tài trợ trước",
            "x": 2968,
            "y": 1490,
            "size": 44,
            "at": "l4:sponsorship",
            "color": "accent",
            "hl": [
              {
                "text": "công khai",
                "at": "l4:disclose"
              }
            ]
          },
          {
            "id": "g-kol3",
            "t": "text",
            "text": "tách tài trợ / ý kiến riêng",
            "x": 2968,
            "y": 1550,
            "size": 38,
            "at": "l5:independent",
            "color": "muted"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Luật BVQLNTD 2023 (19/2023/QH15), Điều 17, 18, 25 · theo Tạp chí Công Thương",
            "x": 2028,
            "y": 1810,
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
          "say": "So the data rules, Articles seventeen and eighteen: notify the customer, and get confirmed consent.",
          "sub": "Vậy luật về dữ liệu, Điều 17 và 18: thông báo cho khách, và được khách xác nhận đồng ý.",
          "keys": [
            "xác nhận đồng ý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She chooses the scope, and whether it goes to third parties or advertising.",
          "sub": "Khách được chọn phạm vi chia sẻ, có cho chuyển bên thứ ba, dùng quảng cáo hay không."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That accept all to continue box? Review it early, unless a law says otherwise.",
          "sub": "Câu “đồng ý tất cả để tiếp tục” vì vậy là điểm phải rà sớm, trừ khi pháp luật có quy định khác.",
          "keys": [
            "phải rà sớm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Working with influencers? Disclose the sponsorship, money or other benefits, in advance.",
          "sub": "Hợp tác với người có ảnh hưởng? Công khai trước khoản tài trợ tài chính hay lợi ích khác dành cho họ.",
          "keys": [
            "Công khai trước"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So viewers can tell a paid promotion from an independent opinion.",
          "sub": "Để người xem phân biệt nội dung có tài trợ với ý kiến độc lập."
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
            "text": "⑥ 5 giờ · Bốn câu hỏi",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:five",
            "hl": [
              {
                "text": "Bốn câu hỏi",
                "at": "l1:four questions"
              }
            ]
          },
          {
            "id": "h-b0",
            "t": "badge",
            "n": 1,
            "x": 4026,
            "y": 1290,
            "at": "l2:registered"
          },
          {
            "id": "h-q0",
            "t": "text",
            "text": "Có phải đăng ký không?",
            "x": 4076,
            "y": 1265,
            "size": 46,
            "at": "l2:registered+200"
          },
          {
            "id": "h-b1",
            "t": "badge",
            "n": 2,
            "x": 4026,
            "y": 1385,
            "at": "l3:banned"
          },
          {
            "id": "h-q1",
            "t": "text",
            "text": "Có điều khoản bị cấm không?",
            "x": 4076,
            "y": 1360,
            "size": 46,
            "at": "l3:banned+200",
            "color": "coral"
          },
          {
            "id": "h-b2",
            "t": "badge",
            "n": 3,
            "x": 4026,
            "y": 1480,
            "at": "l4:returns"
          },
          {
            "id": "h-q2",
            "t": "text",
            "text": "Đổi trả, bảo hành đủ, dễ hiểu?",
            "x": 4076,
            "y": 1455,
            "size": 46,
            "at": "l4:returns+200"
          },
          {
            "id": "h-b3",
            "t": "badge",
            "n": 4,
            "x": 4026,
            "y": 1575,
            "at": "l5:complains"
          },
          {
            "id": "h-q3",
            "t": "text",
            "text": "Khiếu nại: đúng hạn, giữ hồ sơ?",
            "x": 4076,
            "y": 1550,
            "size": 46,
            "at": "l5:complains+200"
          },
          {
            "id": "h-1a",
            "t": "text",
            "text": "SP dùng nhiều, thường xuyên, lâu dài",
            "x": 4936,
            "y": 1290,
            "size": 32,
            "at": "l2:long term",
            "color": "muted"
          },
          {
            "id": "h-2a",
            "t": "text",
            "text": "Cơ quan yêu cầu huỷ, sửa",
            "x": 4936,
            "y": 1385,
            "size": 34,
            "at": "l3:anytime"
          },
          {
            "id": "h-2b",
            "t": "text",
            "text": "BẤT CỨ LÚC NÀO phát hiện",
            "x": 4936,
            "y": 1435,
            "size": 34,
            "at": "l3:anytime+300",
            "color": "coral",
            "hl": [
              {
                "text": "BẤT CỨ LÚC NÀO",
                "at": "l3:anytime"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Luật BVQLNTD 2023 (19/2023/QH15), Điều 28 · NĐ 55/2024/NĐ-CP, Điều 15",
            "x": 3996,
            "y": 1810,
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
          "say": "Five o'clock. Lan turns everything into four questions for each document.",
          "sub": "Năm giờ. Lan gom tất cả thành bốn câu hỏi cho mỗi văn bản.",
          "keys": [
            "bốn câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: must it be registered first? Products used by many people, regularly, with direct, long term impact.",
          "sub": "Một: có phải đăng ký trước khi dùng không? Tiêu chí: nhiều người dùng thường xuyên, tác động trực tiếp, lâu dài, kèm danh mục."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: any banned terms? Regulators can demand changes anytime they find one, not just at registration.",
          "sub": "Hai: có điều khoản bị cấm không? Cơ quan có thể yêu cầu huỷ, sửa bất cứ lúc nào phát hiện, không chỉ lúc đăng ký.",
          "keys": [
            "bất cứ lúc nào phát hiện"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: do the returns and warranty policies say enough, in plain words?",
          "sub": "Ba: chính sách đổi trả, bảo hành có đủ nội dung luật đòi, đọc có hiểu không?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Four: when a customer complains or posts online, does the process meet deadlines and keep records?",
          "sub": "Bốn: khách khiếu nại hay đăng mạng xã hội, quy trình có đúng thời hạn và giữ được hồ sơ không?"
        }
      ],
      "ref": "p17,p18,p19"
    },
    {
      "id": "s17",
      "module": "BRK-04",
      "data": {
        "title": "Một buổi chiều của Lan",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Đọc dàn trải từ trang đầu tới trang cuối",
        "right": "Hỏi bốn câu theo thứ tự, ghi rủi ro còn mở",
        "wrongIllus": "open-book",
        "rightIllus": "clipboard"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Option A: read everything, run out of time.",
          "sub": "Cách A: đọc dàn trải, rồi hết giờ.",
          "keys": [
            "Cách A"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B: four questions, in order.",
          "sub": "Cách B: hỏi bốn câu, đúng thứ tự.",
          "keys": [
            "đúng thứ tự"
          ]
        }
      ],
      "ref": "p20,p21"
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
            "at": "l1",
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
            "text": "⑦ 5 rưỡi · Trả lời Dũng",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:four"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "surprised"
                }
              ],
              "props": [
                "clipboard",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "5 rưỡi · phòng họp ví",
            "icon": "clipboard"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Đăng ký? → kiểm danh mục",
            "x": 5964,
            "y": 1260,
            "size": 42,
            "at": "l1:Registration"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Tự đổi phí, dữ liệu → rà",
            "x": 5964,
            "y": 1325,
            "size": 42,
            "at": "l1:fee",
            "color": "coral",
            "hl": [
              {
                "text": "Tự đổi phí",
                "at": "l1:fee"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Ngày áp dụng, công khai?",
            "x": 5964,
            "y": 1390,
            "size": 42,
            "at": "l2:date"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Quy trình khiếu nại đã đăng?",
            "x": 5964,
            "y": 1455,
            "size": 42,
            "at": "l2:complaints"
          },
          {
            "id": "i-open",
            "t": "text",
            "text": "Chưa trả lời = rủi ro còn mở",
            "x": 5964,
            "y": 1540,
            "size": 46,
            "at": "l2:open",
            "color": "accent",
            "hl": [
              {
                "text": "rủi ro còn mở",
                "at": "l2:open"
              }
            ]
          },
          {
            "id": "i-road",
            "t": "text",
            "text": "Chuỗi: thủ tục → câu chữ → vận hành",
            "x": 6784,
            "y": 1730,
            "size": 38,
            "at": "l5:procedure",
            "hl": [
              {
                "text": "thủ tục",
                "at": "l5:procedure"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Dũng, four answers. Registration, check the list. Banned terms, I flag the fee change clause and the data clause.",
          "sub": "Anh Dũng, bốn câu. Đăng ký: kiểm danh mục. Điều khoản cấm: em đánh dấu điều tự đổi phí và điều về dữ liệu.",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Start date and publication, still missing. Complaints process, not posted. Those stay as open risks.",
          "sub": "Ngày áp dụng và công khai: còn thiếu. Quy trình khiếu nại: chưa đăng. Câu nào chưa trả lời, em ghi là rủi ro còn mở.",
          "keys": [
            "rủi ro còn mở"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "So... not tomorrow?",
          "sub": "Vậy là... mai chưa ra mắt à?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not until the open risks close. Better a day late than a term cancelled.",
          "sub": "Chưa, khi rủi ro còn mở. Trễ một ngày còn hơn bị yêu cầu huỷ điều khoản.",
          "keys": [
            "Trễ một ngày"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And the series follows the same road: procedure, then wording, then daily operations.",
          "sub": "Chuỗi bài cũng đi đúng đường ấy: từ thủ tục, đến câu chữ, rồi đến vận hành.",
          "keys": [
            "thủ tục, đến câu chữ"
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
      "ref": "p20,p22"
    },
    {
      "id": "s19",
      "module": "BRK-08",
      "data": {
        "title": "Chuỗi bài đi theo lộ trình",
        "points": [
          {
            "label": "Bài 1",
            "sub": "Văn bản nào phải đăng ký",
            "illus": "card-file-box"
          },
          {
            "label": "Bài 2",
            "sub": "Điều khoản không được phép",
            "illus": "prohibited"
          },
          {
            "label": "Bài 3",
            "sub": "Đổi trả, bảo hành",
            "illus": "receipt"
          },
          {
            "label": "Bài 4",
            "sub": "Khiếu nại đến khởi kiện",
            "illus": "balance-scale"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Lesson one: registration. Lesson two: banned terms and rewrites.",
          "sub": "Bài 1: đăng ký. Bài 2: điều khoản không được phép, cách viết lại.",
          "keys": [
            "Bài 1: đăng ký"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three: returns and warranty. Four: complaints, all the way to court.",
          "sub": "Bài 3: đổi trả, bảo hành. Bài 4: khiếu nại, hoà giải, khởi kiện."
        }
      ],
      "ref": "p22"
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
            "text": "6 giờ · Bảng rà của Lan",
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
            "y": 1200,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "face": "happy",
                  "pose": "thumb"
                }
              ],
              "props": [
                "clipboard",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:six",
            "caption": "6 giờ chiều · cùng bàn lúc 1 giờ",
            "icon": "clipboard"
          },
          {
            "id": "j-c1",
            "t": "text",
            "text": "Văn bản · tên gọi",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l2:list"
          },
          {
            "id": "j-c2",
            "t": "text",
            "text": "ngày áp dụng · nơi công khai",
            "x": 7932,
            "y": 1330,
            "size": 42,
            "at": "l2:date"
          },
          {
            "id": "j-k",
            "t": "text",
            "text": "Người cầm bút cầm rủi ro",
            "x": 7932,
            "y": 1430,
            "size": 50,
            "at": "l3:pen",
            "color": "coral",
            "hl": [
              {
                "text": "cầm rủi ro",
                "at": "l3:risk"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Giấy trắng mực đen”",
            "x": 7932,
            "y": 1540,
            "size": 58,
            "at": "l3:black",
            "color": "accent",
            "hl": [
              {
                "text": "mực đen",
                "at": "l3:black"
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
          "say": "Six o'clock. Same desk as one o'clock.",
          "sub": "Sáu giờ. Vẫn chiếc bàn lúc một giờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Tomorrow: list every document customers see, name it, add its start date and where it is posted.",
          "sub": "Mai em làm: liệt kê mọi văn bản khách thấy, gọi đúng tên, ghi ngày áp dụng và nơi công khai.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "White paper, black ink. Whoever holds the pen holds the risk.",
          "sub": "“Giấy trắng mực đen.” Ai cầm bút thì cầm luôn rủi ro.",
          "keys": [
            "cầm luôn rủi ro"
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
      "ref": "outro"
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
            "at": "l1:drafts",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:public",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:four",
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
            "x": 5556,
            "y": 20,
            "at": "l1:drafts"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9492,
            "y": 20,
            "at": "l2:public"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5556,
            "y": 1110,
            "at": "l3:four"
          },
          {
            "id": "z-src",
            "t": "text",
            "text": "Bài để tham khảo, không phải tư vấn cho vụ việc cụ thể. Nhân vật là minh hoạ. Quy định có thể thay đổi — kiểm lại với cơ quan/chuyên gia.",
            "x": 7932,
            "y": 1810,
            "size": 24,
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
          "say": "So: one side drafts, the other accepts. The law puts the weight on the drafter.",
          "sub": "Tóm lại: một bên soạn, bên kia chấp nhận, nên luật đặt gánh nặng lên người soạn.",
          "keys": [
            "gánh nặng lên người soạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Name each document, make it readable, and make it public before the deal.",
          "sub": "Gọi đúng tên, viết cho đọc được, và công khai trước khi giao dịch.",
          "keys": [
            "công khai trước khi giao dịch"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Short on time? Ask the four questions, in order.",
          "sub": "Thiếu thời gian? Hỏi bốn câu, đúng thứ tự.",
          "keys": [
            "bốn câu, đúng thứ tự"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p5"
    },
    {
      "id": "s22",
      "module": "QUIZ-01",
      "data": {
        "q": "Does clicking I agree make every term binding on the consumer?",
        "options": [
          "No, prohibited terms remain unlawful and unclear wording is read in the consumer's favour",
          "Yes, because a click is stronger evidence than a handwritten signature",
          "Yes, as long as the retailer keeps a screenshot of the click for ten years"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "check-box-with-check",
        "why": "Cú bấm chỉ mở cửa giao dịch; điều khoản bị cấm vẫn trái luật, câu mập mờ đọc theo hướng có lợi cho khách."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Does clicking I agree make every term binding on the consumer?",
          "sub": "Khách bấm “Tôi đồng ý” có làm mọi điều khoản ràng buộc khách không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. Prohibited terms stay unlawful, and unclear wording is read in the consumer's favour.",
          "sub": "Không. Điều khoản bị cấm vẫn trái luật, câu mập mờ đọc theo hướng có lợi cho khách."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A click opens the door. It does not clean the terms.",
          "sub": "Cú bấm mở cửa, không rửa sạch điều khoản."
        }
      ],
      "ref": "questions[6]"
    },
    {
      "id": "s23",
      "module": "END-05",
      "data": {
        "text": "Gọi đúng tên mọi văn bản",
        "sub": "Bài sau: hợp đồng theo mẫu nào phải đăng ký"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, list every document your customers see, and name each one.",
          "sub": "Tối nay, liệt kê mọi văn bản khách thấy, gọi đúng tên từng cái.",
          "keys": [
            "gọi đúng tên từng cái"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next: which standard forms must be registered. Now, the forty questions below.",
          "sub": "Bài sau: hợp đồng theo mẫu nào phải đăng ký. Giờ thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (bài tổng chuỗi law-consumer-contracts) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21 (đoán sai): “Khách đã bấm Tôi đồng ý → điều nào cũng ràng buộc?” Có/Không → Không, 15 nhóm điều khoản bị cấm (p4). Dòng thời gian: một chiều thứ Hai của Lan (1 giờ Dũng gửi điều khoản ví “mai ra mắt” → 1 rưỡi Bác Bình gọi: cán cân p2–p3 → BRK-04 nút đồng ý p4–p5 → 2 giờ gọi tên ba văn bản p6–p9 + BRK-03 12 nhóm p7 → 3 giờ công khai p10–p11 → BRK-07 → 3 rưỡi cửa hàng: Bà Tư, chữ nhỏ p12–p14 → 4 rưỡi “Khoan đã!” đồng ý tất cả p15 → dữ liệu, KOL p15–p16 → 5 giờ bốn câu hỏi p17–p19 → BRK-04 Cách A/B p20–p21 → 5 rưỡi Lan trả lời Dũng (đóng vai anh Minh p20) + BRK-08 lộ trình p22 → 6 giờ bảng rà). Nhân vật theo w145/_series/law-consumer-contracts.md: Lan (chính, đóng chị Lan p8 + anh Minh p20), Dũng (sản phẩm ví), Bác Bình (luật sư), Bà Tư (khách lớn tuổi). Số, điều chỉ từ bài: Điều 3, 10, 17, 18, 23 (12 nhóm), 24, 25, 26 (07 ngày làm việc), 27, 28, 37 Luật 19/2023/QH15; Điều 6 (cỡ chữ 12), 15 NĐ 55/2024; Điều 406 BLDS. Câu trích “Giấy trắng mực đen” mở/khép vòng. Câu đố questions[6]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
