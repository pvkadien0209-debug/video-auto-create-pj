// b2-grammar-range--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "b2-grammar-range--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "b2-grammar-for-exam-takers",
    "slug": "b2-grammar-range",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Giám khảo nói 'thiếu đa dạng cấu trúc' nghĩa là gì và cần thêm cấu trúc nào?",
    "series": "Ngữ pháp B2 để viết và nói ăn điểm — cho người nhắm VSTEP bậc 4, IELTS 6.0"
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
            "id": "a-num",
            "t": "text",
            "text": "4 tiêu chí",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l1:Four",
            "color": "accent",
            "hl": [
              {
                "text": "4",
                "at": "l1:Four"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "mỗi tiêu chí: band 0 – 9",
            "x": 70,
            "y": 330,
            "size": 54,
            "at": "l1:zero"
          },
          {
            "id": "a-gr",
            "t": "text",
            "text": "1 trong 4: ngữ pháp",
            "x": 70,
            "y": 430,
            "size": 54,
            "at": "l2:grammar",
            "hl": [
              {
                "text": "ngữ pháp",
                "at": "l2:grammar"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: IDP, IELTS.org — mô tả công khai phần Nói, Viết IELTS",
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
          "say": "Four criteria, each given a band from zero to nine. That's how IELTS Speaking is scored.",
          "sub": "Bốn tiêu chí, mỗi tiêu chí một band từ 0 đến 9. Phần Nói IELTS được chấm như vậy.",
          "keys": [
            "Bốn tiêu chí"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fluency, vocabulary, pronunciation. And one of the four is all about grammar.",
          "sub": "Trôi chảy, vốn từ, phát âm. Và một trong bốn là ngữ pháp.",
          "keys": [
            "ngữ pháp"
          ]
        }
      ],
      "ref": "p1"
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
            "y": 110,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "memo",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "lan",
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
            "caption": "Thứ Hai 19:00 · bài viết thử",
            "icon": "memo"
          },
          {
            "id": "a-cm",
            "t": "text",
            "text": "“Grammar: limited range”",
            "x": 60,
            "y": 530,
            "size": 54,
            "at": "l2:comment",
            "color": "coral",
            "hl": [
              {
                "text": "limited range",
                "at": "l3:limited"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Văn hay chẳng luận đặt dài”",
            "x": 60,
            "y": 640,
            "size": 50,
            "at": "l5:length",
            "color": "accent",
            "hl": [
              {
                "text": "chẳng luận đặt dài",
                "at": "l5:length"
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
          "say": "Meet Lan, a third-year student. She needs B2 to graduate.",
          "sub": "Đây là Lan, sinh viên năm ba. Lan cần B2 để tốt nghiệp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Monday, seven p.m. Her mock essay comes back with one comment.",
          "sub": "Thứ Hai, bảy giờ tối. Bài viết thử trả về với đúng một dòng nhận xét.",
          "keys": [
            "một dòng nhận xét"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Enough ideas, no stumbling... and still, a limited range of structures?",
          "sub": "Đủ ý, không ngắc ngứ… mà vẫn “thiếu đa dạng cấu trúc”?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Like a cook who only boils. Clean, safe, and every dish tastes the same.",
          "sub": "Như đầu bếp chỉ biết luộc. Sạch, an toàn, mà món nào cũng một vị.",
          "keys": [
            "chỉ biết luộc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our saying goes: a good essay isn't judged by its length. Nor by fancy words.",
          "sub": "Ông bà nói: “Văn hay chẳng luận đặt dài.” Cũng chẳng luận chữ kêu.",
          "keys": [
            "Văn hay chẳng luận đặt dài"
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
            "text": "“Thiếu đa dạng” là gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:limited",
            "hl": [
              {
                "text": "đa dạng",
                "at": "l1:range"
              }
            ]
          },
          {
            "id": "b-n",
            "t": "text",
            "text": "Grammatical range and accuracy",
            "x": 2028,
            "y": 165,
            "size": 52,
            "at": "l3:name",
            "hl": [
              {
                "text": "range",
                "at": "l3:Range"
              },
              {
                "text": "accuracy",
                "at": "l3:Accuracy"
              }
            ]
          },
          {
            "id": "b-r",
            "t": "text",
            "text": "range = đa dạng · accuracy = chính xác",
            "x": 2028,
            "y": 250,
            "size": 46,
            "at": "l3:Range"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Hai mặt của MỘT tiêu chí",
            "x": 2028,
            "y": 330,
            "size": 50,
            "at": "l3:one",
            "color": "accent",
            "hl": [
              {
                "text": "MỘT tiêu chí",
                "at": "l3:one"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: nhồi câu khó",
            "x": 2928,
            "y": 170,
            "size": 50,
            "at": "l4:stuffing",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:types"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: nhiều kiểu câu đúng",
            "x": 2928,
            "y": 255,
            "size": 52,
            "at": "l4:types",
            "color": "accent",
            "hl": [
              {
                "text": "nhiều kiểu câu đúng",
                "at": "l4:correct"
              }
            ]
          },
          {
            "id": "b-yes2",
            "t": "text",
            "text": "… cho đúng việc",
            "x": 2968,
            "y": 330,
            "size": 50,
            "at": "l4:job"
          },
          {
            "id": "b-v",
            "t": "text",
            "text": "VSTEP Viết, Nói: người chấm",
            "x": 2028,
            "y": 430,
            "size": 46,
            "at": "l5:people"
          },
          {
            "id": "b-v2",
            "t": "text",
            "text": "→ lấy mô tả IELTS làm mốc",
            "x": 2068,
            "y": 500,
            "size": 44,
            "at": "l5:guide",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what does a limited range of grammar really mean?",
          "sub": "Vậy rốt cuộc “thiếu đa dạng cấu trúc” nghĩa là gì?",
          "keys": [
            "thiếu đa dạng cấu trúc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The name: grammatical range and accuracy. Range is variety. Accuracy is being correct. IDP treats them as one criterion, not two scores.",
          "sub": "Tên tiêu chí: grammatical range and accuracy. Range là đa dạng, accuracy là chính xác. IDP coi đó là hai mặt của một tiêu chí, không chấm tách rời.",
          "keys": [
            "một tiêu chí"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not stuffing in hard sentences, but many sentence types, all correct, each doing its job.",
          "sub": "Vậy không phải nhồi câu khó, mà là nhiều kiểu câu, câu nào cũng đúng, đúng việc.",
          "keys": [
            "nhiều kiểu câu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "VSTEP writing and speaking are marked by people too. We use IELTS's public descriptions as a guide.",
          "sub": "VSTEP phần Viết, Nói cũng do người chấm. Ta lấy mô tả công khai của IELTS làm mốc tham khảo."
        }
      ],
      "ref": "p2,p3"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Một tuần của Lan",
        "points": [
          {
            "label": "Thứ Hai",
            "sub": "Đọc nhận xét",
            "illus": "memo"
          },
          {
            "label": "Thứ Ba",
            "sub": "Lỗi quen",
            "illus": "magnifying-glass-tilted-left"
          },
          {
            "label": "Thứ Tư",
            "sub": "Sáu nhóm B2",
            "illus": "books"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Chọn ít, luyện chắc",
            "illus": "bullseye"
          },
          {
            "label": "Thứ Bảy",
            "sub": "Soát hai lượt",
            "illus": "check-mark-button"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One week, five stops.",
          "sub": "Một tuần, năm chặng.",
          "keys": [
            "Một tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Let's walk it with Lan.",
          "sub": "Cùng Lan đi hết tuần ấy."
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
            "text": "① Thứ Hai 19:30 · Một nhịp lặp",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Câu đơn + and, but, because",
            "x": 3996,
            "y": 165,
            "size": 50,
            "at": "l2:joined",
            "hl": [
              {
                "text": "and, but, because",
                "at": "l2:because"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Hiện tại đơn · quá khứ đơn",
            "x": 3996,
            "y": 245,
            "size": 50,
            "at": "l2:past simple"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Câu nào cũng đúng…",
            "x": 3996,
            "y": 325,
            "size": 50,
            "at": "l2:correct"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "… cả bài một nhịp: tùng, tùng, tùng",
            "x": 3996,
            "y": 400,
            "size": 48,
            "at": "l3:drum",
            "color": "coral",
            "hl": [
              {
                "text": "một nhịp",
                "at": "l3:one drum"
              }
            ]
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "IDP: xen câu đơn + câu phức",
            "x": 4896,
            "y": 170,
            "size": 50,
            "at": "l4:mix",
            "color": "accent",
            "hl": [
              {
                "text": "xen",
                "at": "l4:mix"
              }
            ]
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "Điểm cao: nhiều cấu trúc phức,",
            "x": 4896,
            "y": 250,
            "size": 46,
            "at": "l5:higher"
          },
          {
            "id": "c-7",
            "t": "text",
            "text": "dùng chính xác",
            "x": 4936,
            "y": 320,
            "size": 52,
            "at": "l5:accurately",
            "color": "accent",
            "hl": [
              {
                "text": "chính xác",
                "at": "l5:accurately"
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
          "say": "Stop one, Monday night. Lan reads her essay aloud.",
          "sub": "Chặng một, tối thứ Hai. Lan đọc to bài của mình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Simple sentences joined by and, but, because. Present simple, past simple. Every sentence correct.",
          "sub": "Câu đơn nối bằng and, but, because. Hiện tại đơn, quá khứ đơn. Câu nào cũng đúng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But the whole essay beats one drum. Boom, boom, boom.",
          "sub": "Nhưng cả bài gõ đúng một nhịp trống: tùng, tùng, tùng.",
          "keys": [
            "một nhịp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "IDP's advice: mix simple and complex sentences.",
          "sub": "Lời khuyên của IDP: dùng xen kẽ câu đơn và câu phức.",
          "keys": [
            "xen kẽ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "To score higher, show you can use a range of complex structures accurately.",
          "sub": "Muốn điểm cao hơn, phải cho thấy mình dùng chính xác được nhiều cấu trúc phức.",
          "keys": [
            "dùng chính xác"
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
            "fit": "C",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "c-sh",
            "t": "text",
            "text": "22:00 · “mẹo”: 5 câu đảo ngữ",
            "x": 3996,
            "y": 510,
            "size": 48,
            "at": "l1:shortcut",
            "color": "coral",
            "hl": [
              {
                "text": "5 câu đảo ngữ",
                "at": "l1:five"
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
          "say": "Ten p.m., a shortcut online: memorise five fancy inversions, paste them everywhere.",
          "sub": "Mười giờ đêm, Lan tìm được “mẹo” trên mạng: học thuộc năm câu đảo ngữ thật kêu, bài nào cũng chèn.",
          "keys": [
            "học thuộc năm câu đảo ngữ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tuesday evening, class. Meet Sam, the native-speaker teacher who wrote that comment.",
          "sub": "Tối thứ Ba, ở lớp. Đây là Sam, cô giáo bản ngữ đã viết dòng nhận xét ấy.",
          "keys": [
            "Sam"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "Thứ Ba 18:00 · lớp luyện thi",
        "actors": [
          {
            "id": "lan",
            "side": "left"
          },
          {
            "id": "sam",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chèn câu đảo ngữ học thuộc",
          "why": "Sai trợ động từ: không thêm điểm đa dạng, còn bị tính là lỗi.",
          "rule": "Cấu trúc phức chỉ được tính khi dùng đúng"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "Lan, tell me one good thing about online learning.",
          "sub": "Lan, nói một điểm hay của học trực tuyến xem nào.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Not only online learning is cheap, but it is also flexible.",
          "sub": "Not only online learning is cheap, but it is also flexible.",
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
          "say": "Wrong auxiliary: no extra range, just one more error.",
          "sub": "Sai trợ động từ: không thêm điểm đa dạng, chỉ thêm một lỗi.",
          "keys": [
            "thêm một lỗi"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "lan",
          "say": "Online learning is not only cheap but also flexible.",
          "sub": "Online learning is not only cheap but also flexible.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Correct and on topic. That counts.",
          "sub": "Đúng và đúng đề. Vậy mới được tính.",
          "phase": "redo",
          "keys": [
            "mới được tính"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "id": "c-w",
            "t": "text",
            "text": "Not only online learning is cheap",
            "x": 4896,
            "y": 430,
            "size": 40,
            "at": "l2:memorised",
            "color": "muted"
          },
          {
            "id": "c-wx",
            "t": "strike",
            "over": "c-w",
            "at": "l2:copied"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Đa dạng = nhiều kiểu câu dùng ĐÚNG",
            "x": 3996,
            "y": 620,
            "size": 56,
            "at": "l2:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "dùng ĐÚNG",
                "at": "l2:correctly"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And memorised lines that miss the topic look copied. Takeaway: range means many sentence types used correctly.",
          "sub": "Câu học thuộc lạc đề dễ lộ là chép sẵn. Rút ra: đa dạng là có nhiều kiểu câu dùng đúng, không phải có vài câu khó.",
          "keys": [
            "nhiều kiểu câu dùng đúng"
          ]
        }
      ],
      "ref": "p5,p6"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Ba 21:00 · Lỗi quen trước",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Ghi lại lỗi hay mắc",
            "x": 5964,
            "y": 165,
            "size": 52,
            "at": "l2:note",
            "hl": [
              {
                "text": "lỗi hay mắc",
                "at": "l2:again"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "mạo từ · giới từ · chủ–vị",
            "x": 5964,
            "y": 245,
            "size": 46,
            "at": "l3:Articles"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "→ soát riêng những lỗi đó",
            "x": 6004,
            "y": 315,
            "size": 46,
            "at": "l3:just those",
            "color": "accent"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Câu đơn sai → lỗi nhân lên",
            "x": 5964,
            "y": 400,
            "size": 46,
            "at": "l4:multiply",
            "color": "coral",
            "hl": [
              {
                "text": "nhân lên",
                "at": "l4:multiply"
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
          "say": "Stop two, Tuesday night. Why must accuracy come first?",
          "sub": "Chặng hai, tối thứ Ba. Vì sao chính xác phải đi trước?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "IDP suggests a very practical habit: note the mistakes you make again and again.",
          "sub": "IDP gợi ý một việc rất thực tế: ghi lại những lỗi mình hay mắc.",
          "keys": [
            "ghi lại những lỗi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Articles, prepositions, verbs that don't agree with the subject. Then check just those.",
          "sub": "Mạo từ, giới từ, động từ không hợp chủ ngữ. Rồi soát riêng những lỗi đó."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "If simple sentences still have wrong articles, complex ones only multiply the errors.",
          "sub": "Câu đơn còn sai mạo từ thì thêm câu phức chỉ làm số lỗi tăng theo.",
          "keys": [
            "số lỗi tăng theo"
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
            "fit": "D",
            "move": "cut"
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
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
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
            "at": "l1:opens",
            "caption": "Thứ Ba 21:00 · ba bài đã chữa",
            "icon": "memo"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 490,
            "w": 44,
            "h": 44,
            "at": "l1:count",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 472,
            "size": 56,
            "at": "l1:count+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "(1) đếm lỗi lặp lại",
            "x": 6029,
            "y": 482,
            "size": 38,
            "at": "l1:count+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 560,
            "w": 44,
            "h": 44,
            "at": "l3:top",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 542,
            "size": 56,
            "at": "l3:top+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "(2) ghi 2 lỗi lên nháp",
            "x": 6029,
            "y": 552,
            "size": 38,
            "at": "l3:top+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 630,
            "w": 44,
            "h": 44,
            "at": "l4:read",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 612,
            "size": 56,
            "at": "l4:read+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "(3) soát riêng 2 lỗi",
            "x": 6029,
            "y": 622,
            "size": 38,
            "at": "l4:read+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 700,
            "w": 44,
            "h": 44,
            "at": "l5:one new",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 682,
            "size": 56,
            "at": "l5:one new+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "(4) sạch: +1 cấu trúc/tuần",
            "x": 6029,
            "y": 692,
            "size": 38,
            "at": "l5:one new+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Lan opens three corrected essays. Step one: count the repeat offenders.",
          "sub": "Lan mở ba bài đã chữa. Bước một: đếm những lỗi “tái phạm”.",
          "keys": [
            "đếm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Missing s after he and she. And the, the, the, in all the wrong places!",
          "sub": "Sót s sau he, she. Và the, the, the, đặt sai chỗ khắp nơi!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Step two: write those two at the top of every draft.",
          "sub": "Bước hai: ghi hai lỗi đó lên đầu trang nháp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Step three: after writing, I read once, just for those two.",
          "sub": "Bước ba: viết xong, mình đọc lại một lượt chỉ để soát hai lỗi này.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Step four: once they're gone, add one new structure a week.",
          "sub": "Bước bốn: sạch hai lỗi quen rồi mới thêm một cấu trúc mới mỗi tuần.",
          "keys": [
            "một cấu trúc mới mỗi tuần"
          ]
        }
      ],
      "ref": "p8"
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
            "id": "d-k",
            "t": "text",
            "text": "Lỗi quen trước, cấu trúc sau",
            "x": 6804,
            "y": 700,
            "size": 44,
            "at": "l1:Fix",
            "color": "accent",
            "hl": [
              {
                "text": "Lỗi quen trước",
                "at": "l1:first"
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
          "say": "Takeaway: fix your usual mistakes first, then add new structures.",
          "sub": "Rút ra: sửa lỗi quen trước, rồi mới thêm cấu trúc mới.",
          "keys": [
            "sửa lỗi quen trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sharpen the knife before you buy a new pan.",
          "sub": "Mài dao cho sắc đã, rồi hẵng sắm chảo mới."
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Vậy thêm cấu trúc nào thì đáng?",
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
          "say": "So which new structures are actually worth adding?",
          "sub": "Vậy thêm cấu trúc nào thì đáng?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s12",
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
            "text": "③ Thứ Tư · Sáu nhóm B2",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three",
            "hl": [
              {
                "text": "Sáu nhóm",
                "at": "l2:six"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: British Council LearnEnglish, ngữ pháp B1–B2",
            "x": 7932,
            "y": 125,
            "size": 28,
            "at": "l1:British",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-g0",
            "t": "text",
            "text": "1. Tương lai chính xác hơn",
            "x": 7932,
            "y": 175,
            "size": 46,
            "at": "l3:future"
          },
          {
            "id": "e-g1",
            "t": "text",
            "text": "2. Suy đoán hiện tại",
            "x": 7932,
            "y": 257,
            "size": 46,
            "at": "l3:present"
          },
          {
            "id": "e-g2",
            "t": "text",
            "text": "3. Suy đoán quá khứ",
            "x": 7932,
            "y": 339,
            "size": 46,
            "at": "l3:past"
          },
          {
            "id": "e-g3",
            "t": "text",
            "text": "4. Điều kiện hỗn hợp",
            "x": 7932,
            "y": 421,
            "size": 46,
            "at": "l4:mixed"
          },
          {
            "id": "e-g4",
            "t": "text",
            "text": "5. Động từ tường thuật",
            "x": 7932,
            "y": 503,
            "size": 46,
            "at": "l4:reporting"
          },
          {
            "id": "e-g5",
            "t": "text",
            "text": "6. Đảo ngữ, câu chẻ",
            "x": 7932,
            "y": 585,
            "size": 46,
            "at": "l4:inversion",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, Wednesday. British Council's B1 to B2 grammar list shows where to grow.",
          "sub": "Chặng ba, thứ Tư. Mục ngữ pháp B1–B2 của British Council có đủ những điểm nên mở rộng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This series picks six groups, the most useful in exam writing and speaking.",
          "sub": "Chuỗi này chọn sáu nhóm hay dùng nhất trong bài viết và bài nói thi cử.",
          "keys": [
            "sáu nhóm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: the future, more precisely. Two and three: guessing about the present, and about the past.",
          "sub": "Một: nói về tương lai chính xác hơn. Hai và ba: suy đoán về hiện tại và về quá khứ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four: mixed conditionals. Five: reporting verbs. Six: inversion and cleft sentences, for emphasis.",
          "sub": "Bốn: câu điều kiện hỗn hợp. Năm: động từ tường thuật. Sáu: đảo ngữ, câu chẻ để nhấn mạnh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Six tools in the box. Not sixty.",
          "sub": "Sáu món đồ nghề trong hộp. Không phải sáu mươi.",
          "keys": [
            "Không phải sáu mươi"
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
          }
        ],
        "items": [
          {
            "id": "e-n0",
            "t": "text",
            "text": "→ đang dở / đã xong",
            "x": 8772,
            "y": 182,
            "size": 40,
            "at": "l1:progress",
            "color": "accent"
          },
          {
            "id": "e-n1",
            "t": "text",
            "text": "→ thay maybe, I think",
            "x": 8772,
            "y": 264,
            "size": 40,
            "at": "l2:maybe",
            "color": "accent"
          },
          {
            "id": "e-n2",
            "t": "text",
            "text": "→ tách khỏi should have",
            "x": 8772,
            "y": 346,
            "size": 40,
            "at": "l3:should have",
            "color": "accent"
          },
          {
            "id": "e-n3",
            "t": "text",
            "text": "→ nối quá khứ – hiện tại",
            "x": 8772,
            "y": 428,
            "size": 40,
            "at": "l4:past",
            "color": "accent"
          },
          {
            "id": "e-n4",
            "t": "text",
            "text": "→ khỏi lặp said",
            "x": 8772,
            "y": 510,
            "size": 40,
            "at": "l4:said",
            "color": "accent"
          },
          {
            "id": "e-n5",
            "t": "text",
            "text": "→ C1: dùng vừa phải",
            "x": 8772,
            "y": 592,
            "size": 40,
            "at": "l5:C1",
            "color": "coral",
            "hl": [
              {
                "text": "C1",
                "at": "l5:C1"
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
          "say": "Future forms say more than plain will: in progress at a time, or done before a point.",
          "sub": "Hai dạng tương lai nói rõ hơn will đơn: đang dở tại một lúc, hay đã xong trước một mốc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Must be, might be, can't be show how sure you are, instead of maybe and I think.",
          "sub": "Must be, might be, can't be nói mức chắc chắn, thay cho lặp maybe và I think.",
          "keys": [
            "mức chắc chắn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Must have, might have take that guessing into the past, apart from should have.",
          "sub": "Must have, might have đưa phép đoán về quá khứ, tách khỏi should have."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Mixed conditionals link past and present. Reporting verbs quote others without repeating said.",
          "sub": "Điều kiện hỗn hợp nối quá khứ với hiện tại. Động từ tường thuật giúp trích ý mà không lặp said."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Inversion and cleft sentences? British Council files them under C1. So, a light touch.",
          "sub": "Đảo ngữ, câu chẻ? British Council xếp vào ngữ pháp C1. Nên dùng vừa phải.",
          "keys": [
            "dùng vừa phải"
          ]
        }
      ],
      "ref": "p13,p14,p15,p16"
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
            "text": "④ Thứ Năm · Cấp độ là gì?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "English Grammar Profile (Cambridge)",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l2:Profile",
            "hl": [
              {
                "text": "English Grammar Profile",
                "at": "l2:Profile"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "dựa trên bài thi thật",
            "x": 60,
            "y": 1340,
            "size": 46,
            "at": "l2:Corpus"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "cấu trúc nào ↔ cấp nào",
            "x": 60,
            "y": 1415,
            "size": 46,
            "at": "l2:levels"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "B2: nói tương lai thành thạo",
            "x": 60,
            "y": 1505,
            "size": 50,
            "at": "l3:future",
            "color": "accent",
            "hl": [
              {
                "text": "thành thạo",
                "at": "l3:competently"
              }
            ]
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "Không phải: cấu trúc lạ",
            "x": 60,
            "y": 1595,
            "size": 48,
            "at": "l4:stranger",
            "color": "muted"
          },
          {
            "id": "f-5x",
            "t": "strike",
            "over": "f-5",
            "at": "l4:familiar"
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "Mà là: dùng chắc cấu trúc quen",
            "x": 60,
            "y": 1675,
            "size": 50,
            "at": "l4:surely",
            "color": "accent",
            "hl": [
              {
                "text": "dùng chắc",
                "at": "l4:surely"
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
          "say": "Stop four, Thursday. Did you know Cambridge maps grammar?",
          "sub": "Chặng bốn, thứ Năm. Bạn có biết Cambridge “vẽ bản đồ” ngữ pháp theo từng cấp?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The English Grammar Profile uses real exam papers, the Cambridge Learner Corpus, to map structures to CEFR levels.",
          "sub": "English Grammar Profile dựa trên kho bài thi thật, Cambridge Learner Corpus, để mô tả cấu trúc nào dùng được ở cấp nào.",
          "keys": [
            "bài thi thật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One example: at B2, learners use a range of ways to talk about the future, competently.",
          "sub": "Một ví dụ: ở B2, người học dùng thành thạo các cách nói về tương lai.",
          "keys": [
            "thành thạo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So B2 isn't stranger structures. It's familiar ones, used surely, in more ways.",
          "sub": "Vậy B2 không phải cấu trúc lạ, mà là dùng chắc cấu trúc quen theo nhiều cách hơn. Cấp độ đo bằng độ chắc.",
          "keys": [
            "dùng chắc"
          ]
        }
      ],
      "ref": "p11,p12"
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
            "at": "l3",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Sáu · Học hết hay chọn?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "props": [
                "hot-beverage",
                "books"
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
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Thảo",
            "caption": "Thứ Sáu 20:00 · quán cạnh trường",
            "icon": "hot-beverage"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "IELTS 6.0 · còn 2 tuần",
            "x": 2028,
            "y": 1260,
            "size": 52,
            "at": "l2:two weeks",
            "color": "coral",
            "hl": [
              {
                "text": "2 tuần",
                "at": "l2:two weeks"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Học hết 6 nhóm một lượt?",
            "x": 2028,
            "y": 1345,
            "size": 48,
            "at": "l3:all six",
            "color": "muted"
          },
          {
            "id": "g-2x",
            "t": "strike",
            "over": "g-2",
            "at": "l5:Pick"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Chọn 2–3 cấu trúc gần đề",
            "x": 2028,
            "y": 1435,
            "size": 50,
            "at": "l5:closest",
            "color": "accent",
            "hl": [
              {
                "text": "2–3",
                "at": "l5:two or three"
              }
            ]
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Nói: suy đoán",
            "x": 2068,
            "y": 1510,
            "size": 46,
            "at": "l5:speaking"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Luận: điều kiện hỗn hợp",
            "x": 2068,
            "y": 1580,
            "size": 46,
            "at": "l5:essay"
          },
          {
            "id": "g-6",
            "t": "text",
            "text": "Phức chỉ được tính khi đúng",
            "x": 2028,
            "y": 1665,
            "size": 46,
            "at": "l6:accurate",
            "hl": [
              {
                "text": "khi đúng",
                "at": "l6:accurate"
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
          "say": "Stop five, Friday, the café by school. Meet Thảo, an office worker in Lan's evening class.",
          "sub": "Chặng năm, tối thứ Sáu, quán cạnh trường. Đây là Thảo, nhân viên văn phòng học cùng lớp tối với Lan.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She's aiming for IELTS six point zero, and the test is two weeks away.",
          "sub": "Thảo nhắm IELTS 6.0, và chỉ còn hai tuần là thi.",
          "keys": [
            "hai tuần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Two weeks. Should I learn all six groups at once?",
          "sub": "Hai tuần. Mình có nên học hết sáu nhóm một lượt?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Or pick a few, and practise them really hard?",
          "sub": "Hay chọn vài cái rồi luyện thật kỹ?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Pick two or three closest to the tasks. Deduction for speaking, mixed conditionals for the essay.",
          "sub": "Chọn hai, ba cấu trúc gần dạng đề nhất: suy đoán cho phần Nói, điều kiện hỗn hợp cho bài luận.",
          "keys": [
            "hai, ba cấu trúc"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Practise until they come out right, naturally. Complex structures only count when accurate.",
          "sub": "Luyện đến khi dùng đúng tự nhiên. Cấu trúc phức chỉ được ghi nhận khi chính xác."
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s16",
      "module": "BRK-10",
      "data": {
        "quote": "Ít cấu trúc mà dùng chắc tốt hơn nhiều cấu trúc dùng ẩu",
        "mark": "dùng chắc",
        "by": "Rút ra cho Thảo",
        "illus": "bullseye"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A few structures used surely beat many used sloppily.",
          "sub": "Ít cấu trúc mà dùng chắc tốt hơn nhiều cấu trúc dùng ẩu.",
          "keys": [
            "dùng chắc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Learning wide but using wrong helps nobody.",
          "sub": "Học rộng mà dùng sai thì chẳng giúp gì."
        }
      ],
      "ref": "p17,p18"
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
            "at": "l1:end",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Bảy 9:00 · Soát hai lượt",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "medium",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:rewrites",
            "caption": "Thứ Bảy 9:00 · viết lại đoạn kết",
            "icon": "pencil"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Lượt 1: chính xác",
            "x": 3996,
            "y": 1260,
            "size": 52,
            "at": "l2:accuracy",
            "color": "accent",
            "hl": [
              {
                "text": "chính xác",
                "at": "l2:accuracy"
              }
            ]
          },
          {
            "id": "h-1b",
            "t": "text",
            "text": "lỗi quen · thì · mạo từ · giới từ",
            "x": 4036,
            "y": 1335,
            "size": 40,
            "at": "l2:tenses"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Lượt 2: đa dạng",
            "x": 3996,
            "y": 1410,
            "size": 52,
            "at": "l3:range",
            "color": "accent",
            "hl": [
              {
                "text": "đa dạng",
                "at": "l3:range"
              }
            ]
          },
          {
            "id": "h-2b",
            "t": "text",
            "text": "có đoạn nào toàn câu đơn + and?",
            "x": 4036,
            "y": 1485,
            "size": 40,
            "at": "l3:paragraph"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, Saturday. Lan rewrites her conclusion, then reads it twice.",
          "sub": "Chặng sáu, sáng thứ Bảy. Lan viết lại đoạn kết bài luận, rồi đọc lại hai lượt.",
          "keys": [
            "hai lượt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read one checks accuracy: her usual mistakes, verb tenses, articles, prepositions.",
          "sub": "Lượt một soát độ chính xác: lỗi quen, thì của động từ, mạo từ, giới từ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Read two checks range: which sentence types? Any paragraph of only simple sentences joined by and?",
          "sub": "Lượt hai soát độ đa dạng: có những kiểu câu nào, có đoạn nào toàn câu đơn nối bằng and không?"
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s18",
      "module": "BRK-04",
      "data": {
        "title": "Đoạn kết của Lan",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "I think… Maybe… I think schools must prepare",
        "right": "Many universities will have moved courses online",
        "wrongIllus": "red-question-mark",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: I think… maybe… I think.",
          "sub": "Trước: I think… maybe… I think."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: many universities will have moved courses online.",
          "sub": "Sau: many universities will have moved courses online.",
          "keys": [
            "will have moved"
          ]
        }
      ],
      "ref": "p20"
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
            "id": "h-s",
            "t": "text",
            "text": "… schools that have not prepared might struggle",
            "x": 3996,
            "y": 1560,
            "size": 36,
            "at": "l1:struggle",
            "hl": [
              {
                "text": "might",
                "at": "l1:might"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Khuôn lặp → cấu trúc đúng việc",
            "x": 3996,
            "y": 1630,
            "size": 40,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "cấu trúc đúng việc",
                "at": "l3:fits"
              }
            ]
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1705,
            "w": 44,
            "h": 44,
            "at": "l4:mistakes",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1687,
            "size": 56,
            "at": "l4:mistakes+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "lỗi quen · tương lai ngoài will",
            "x": 4061,
            "y": 1697,
            "size": 34,
            "at": "l4:mistakes+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1765,
            "w": 44,
            "h": 44,
            "at": "l4:guess",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1747,
            "size": 56,
            "at": "l4:guess+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "suy đoán thay maybe",
            "x": 4061,
            "y": 1757,
            "size": 34,
            "at": "l4:guess+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1825,
            "w": 44,
            "h": 44,
            "at": "l4:memorised",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1807,
            "size": 56,
            "at": "l4:memorised+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "không câu học thuộc lạc đề",
            "x": 4061,
            "y": 1817,
            "size": 34,
            "at": "l4:memorised+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "And so schools that have not prepared might struggle.",
          "sub": "So schools that have not prepared might struggle.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Future perfect and might, each in the right place. Two I thinks and one maybe, gone.",
          "sub": "Tương lai hoàn thành và might, mỗi thứ đúng chỗ, thay hai lần I think và một lần maybe.",
          "keys": [
            "đúng chỗ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: swap a repeated pattern for a structure that fits the job.",
          "sub": "Rút ra: nâng cấp câu là thay khuôn lặp bằng cấu trúc đúng việc.",
          "keys": [
            "cấu trúc đúng việc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Last, tick the boxes: usual mistakes, a future beyond will, a guess, nothing memorised.",
          "sub": "Cuối cùng đánh dấu: đã soát lỗi quen, có tương lai ngoài will, có câu suy đoán, không câu học thuộc lạc đề."
        }
      ],
      "ref": "p20,p21,p22"
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
            "text": "Thứ Hai sau · 19:00",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:desk"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "laptop"
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
            "at": "l1:Monday",
            "caption": "Thứ Hai sau 19:00 · cùng bàn ấy",
            "icon": "memo"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "… will have moved … online",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l2:moved",
            "color": "accent",
            "hl": [
              {
                "text": "will have moved",
                "at": "l2:moved"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "0 câu đảo ngữ học thuộc",
            "x": 5964,
            "y": 1350,
            "size": 48,
            "at": "l3:inversions",
            "color": "muted"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Lỗi quen sạch · cấu trúc dùng đúng",
            "x": 5964,
            "y": 1430,
            "size": 44,
            "at": "l3:old mistakes"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Văn hay chẳng luận đặt dài”",
            "x": 5964,
            "y": 1550,
            "size": 54,
            "at": "l4:length",
            "color": "accent",
            "hl": [
              {
                "text": "chẳng luận đặt dài",
                "at": "l4:length"
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
          "say": "Next Monday, seven p.m. Same desk, same lamp, same Lan.",
          "sub": "Thứ Hai tuần sau, bảy giờ tối. Vẫn bàn ấy, đèn ấy, Lan ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "By the end of this decade, many universities will have moved part of their courses online.",
          "sub": "By the end of this decade, many universities will have moved part of their courses online.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No memorised inversions. Two old mistakes gone, one new structure, used right.",
          "sub": "Không câu đảo ngữ học thuộc nào. Hai lỗi quen sạch bóng, một cấu trúc mới, dùng đúng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A good essay isn't judged by its length. It's judged by the right sentence in the right place.",
          "sub": "“Văn hay chẳng luận đặt dài.” Văn hay luận ở câu đúng, đặt đúng chỗ.",
          "keys": [
            "câu đúng, đặt đúng chỗ"
          ]
        }
      ],
      "ref": "p20"
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
            "at": "l1:end",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "H",
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
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: đúng trước, đa dạng sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:invitation"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Làm ngay: 2 lỗi + 1 cấu trúc",
            "x": 7932,
            "y": 1290,
            "size": 50,
            "at": "l5:Try",
            "hl": [
              {
                "text": "2 lỗi + 1 cấu trúc",
                "at": "l5:two"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "→ một đoạn ngắn có cả hai",
            "x": 7972,
            "y": 1370,
            "size": 46,
            "at": "l5:paragraph"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: will be doing",
            "x": 7932,
            "y": 1470,
            "size": 50,
            "at": "l6:Next",
            "color": "accent"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 6664,
            "y": 170,
            "at": "l2:usual"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 40,
            "at": "l3:few"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1260,
            "at": "l4:twice"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; cách chấm từng kỳ thi có thể thay đổi — kiểm lại trên trang chính thức. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 28,
            "at": "l6:end",
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
          "say": "So, a limited range is an invitation: more sentence types, each one correct.",
          "sub": "Tóm lại, lời chê “thiếu đa dạng” là lời mời dùng thêm kiểu câu, miễn câu nào cũng đúng.",
          "keys": [
            "câu nào cũng đúng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Accuracy first: fix your usual mistakes.",
          "sub": "Chính xác trước: sửa lỗi quen."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then a few B2 structures, used surely.",
          "sub": "Rồi vài cấu trúc B2, dùng thật chắc."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Check twice before you submit: accuracy, then range.",
          "sub": "Soát hai lượt trước khi nộp: chính xác, rồi đa dạng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: pick two usual mistakes and one new structure. Write a short paragraph with both.",
          "sub": "Làm ngay: chọn hai lỗi quen và một cấu trúc mới, viết một đoạn ngắn có cả hai.",
          "keys": [
            "hai lỗi quen"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next up: will be doing and will have done.",
          "sub": "Bài tiếp theo: will be doing và will have done.",
          "keys": [
            "will be doing"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "A friend memorises fancy inversions for every essay, what is the risk?",
        "options": [
          "There is no risk because memorised sentences are never noticed",
          "Examiners always give a higher band to any sentence that sounds difficult",
          "A wrong or off topic inversion adds an error instead of extra range"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "scroll",
        "why": "Cấu trúc phức chỉ được tính khi dùng đúng. Câu đảo ngữ sai hoặc lạc đề vừa bị tính là lỗi vừa dễ lộ là câu chép sẵn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A friend memorises fancy inversions for every essay, what is the risk?",
          "sub": "Một người bạn học thuộc câu đảo ngữ kêu để chèn vào mọi bài, rủi ro là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A wrong or off topic inversion adds an error instead of extra range.",
          "sub": "Câu đảo ngữ sai hoặc lạc đề thêm một lỗi, không thêm điểm đa dạng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Complex structures only count when they're used correctly.",
          "sub": "Cấu trúc phức chỉ được tính khi dùng đúng."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[10]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Bạn đã xem xong. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two usual mistakes, one new structure, one paragraph. Then try the forty questions below.",
          "sub": "Hai lỗi quen, một cấu trúc mới, một đoạn văn. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT TUẦN ÔN THI của Lan (Thứ Hai 19:00 đọc nhận xét “limited range” → Thứ Ba lớp “Khoan đã!” đảo ngữ học thuộc → Thứ Ba 21:00 lỗi quen → Thứ Tư sáu nhóm → Thứ Năm English Grammar Profile → Thứ Sáu Thảo hỏi học hết hay chọn → Thứ Bảy soát hai lượt → Thứ Hai sau 19:00 khép vòng). Neo mở: “4 tiêu chí, band 0–9” (IDP). Nhân vật: Lan (Linh trong bài), Sam (giáo viên chấm), Thảo (Tuấn trong bài) — w145/_series/b2-grammar-for-exam-takers.md. Cảnh ngắt nhịp: BRK-08 (một tuần), BRK-07 (rehook), BRK-10 (rút ra cho Thảo), BRK-04 (trước–sau đoạn kết). Ca dao: “Văn hay chẳng luận đặt dài”. Câu đố questions[10].",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
