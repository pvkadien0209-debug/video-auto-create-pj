// Kịch bản video W lần 3 (#110) — "Cần tìm hiểu gì về công ty trước khi đi phỏng vấn?" · chuỗi "Chuẩn bị phỏng vấn xin việc"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "research-the-company-before-interview--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "job-seekers",
    "slug": "research-the-company-before-interview",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cần tìm hiểu gì về công ty trước khi đi phỏng vấn?",
    "series": "Chuẩn bị phỏng vấn xin việc"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô (5 × 2) đi theo BỐN NGÀY CHUẨN BỊ của Thảo (T2 20:00 nhận lịch → T2 nhìn trước buổi hội đồng, hỏi gặp ai → T3 tối năm câu, nguồn → T3 khuya tin đồn, “Khoan đã!” tập trước gương → T4 sáng một trang → T4 tối hai buổi tối, câu chuyện thật → T5 sáng “Bạn biết gì về chúng tôi?” → T5 tối lương, trang phục, hội đồng → T6 9:00 khép vòng cùng bàn dài). Nhân vật: Thảo (chính, gộp Khuê p5, “bạn” p9/p14/p17), cô Hoa (nhân sự, chỉ câu trung lập), bác Bình (trưởng phòng trong hội đồng p5). Ca dao neo: “Biết người biết ta, trăm trận trăm thắng” → khép “… và biết mình chọn ai” (p23). Cảnh ngắt nhịp: BRK-07 (rehook tin đồn), BRK-04 (Cách A/B p14), BRK-05 (nhắc nhanh). Số chỉ lấy từ bài: ba bốn ngày, năm câu, một trang, ba phần một phút, năm sáu câu hỏi / hỏi hai ba. Bản cũ: w145/bak/research-the-company-before-interview--w01.js.",
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
            "id": "a-q",
            "t": "text",
            "text": "“Bạn biết gì về",
            "x": 60,
            "y": 110,
            "size": 100,
            "at": "l1:what",
            "color": "accent"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "công ty chúng tôi?”",
            "x": 60,
            "y": 240,
            "size": 100,
            "at": "l1:company",
            "color": "accent",
            "hl": [
              {
                "text": "chúng tôi",
                "at": "l1:our"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "Gần như buổi nào cũng hỏi",
            "x": 70,
            "y": 400,
            "size": 52,
            "at": "l1:almost"
          },
          {
            "id": "a-web",
            "t": "text",
            "text": "Ta tưởng: thuộc cả trang web?",
            "x": 70,
            "y": 500,
            "size": 50,
            "at": "l2:memorise",
            "color": "muted"
          },
          {
            "id": "a-webx",
            "t": "strike",
            "over": "a-web",
            "at": "l3:need"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "What do you know about our company? Almost every interview asks it.",
          "sub": "“Bạn biết gì về công ty chúng tôi?” Buổi phỏng vấn nào cũng gần như chắc chắn hỏi.",
          "keys": [
            "Bạn biết gì về công ty chúng tôi?"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So we panic and memorise their whole website, like before finals.",
          "sub": "Thế là ta hoảng, học thuộc cả trang web như đêm trước kỳ thi.",
          "keys": [
            "học thuộc cả trang web"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Relax. You don't need it all.",
          "sub": "Bình tĩnh. Không cần thuộc hết đâu.",
          "keys": [
            "Không cần thuộc hết"
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
            "y": 110,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "mobile-phone"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai 20:00 · cuộc gọi hẹn lịch",
            "icon": "mobile-phone"
          },
          {
            "id": "a-4",
            "t": "text",
            "text": "Còn 4 ngày",
            "x": 920,
            "y": 650,
            "size": 56,
            "at": "l6:four",
            "color": "coral",
            "hl": [
              {
                "text": "4 ngày",
                "at": "l6:days"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Biết người biết ta,",
            "x": 60,
            "y": 600,
            "size": 52,
            "at": "l7:know",
            "color": "accent",
            "hl": [
              {
                "text": "Biết người",
                "at": "l7:know"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "trăm trận trăm thắng”",
            "x": 60,
            "y": 670,
            "size": 52,
            "at": "l7:battle",
            "color": "accent"
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
          "say": "Super tidy, numbers everything. Monday, eight p.m., her phone rings.",
          "sub": "Ngăn nắp, việc gì cũng đánh số. Tám giờ tối thứ Hai, điện thoại reo.",
          "keys": [
            "Tám giờ tối thứ Hai"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Cô Hoa, from HR.",
          "sub": "Còn đây là cô Hoa, bên nhân sự."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Your interview is on Friday at nine.",
          "sub": "Em phỏng vấn lúc chín giờ sáng thứ Sáu nhé.",
          "face": "neutral"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Great, thank you! See you then.",
          "sub": "Dạ vâng, em cảm ơn! Hẹn gặp cô ạ.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Four days left. Thảo hangs up, and forgets one tiny question.",
          "sub": "Còn bốn ngày. Thảo cúp máy, và quên một câu hỏi bé tí.",
          "keys": [
            "quên một câu hỏi"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: know them, know yourself, win every battle.",
          "sub": "Ông bà dặn: “Biết người biết ta, trăm trận trăm thắng.”",
          "keys": [
            "Biết người biết ta"
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
      "ref": "intro,p1"
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
            "text": "Cần tìm hiểu những gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:research",
            "hl": [
              {
                "text": "những gì",
                "at": "l1:what"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: thuộc hết",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:everything",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:specifically"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: đủ để nói cụ thể",
            "x": 2028,
            "y": 260,
            "size": 56,
            "at": "l2:specifically",
            "color": "accent",
            "hl": [
              {
                "text": "nói cụ thể",
                "at": "l2:specifically"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Công ty làm gì, cho ai",
            "x": 2908,
            "y": 160,
            "size": 46,
            "at": "l3:does"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Vị trí cần gì ở mình",
            "x": 2908,
            "y": 225,
            "size": 46,
            "at": "l3:job"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Vài câu chuyện thật",
            "x": 2908,
            "y": 290,
            "size": 46,
            "at": "l3:stories",
            "hl": [
              {
                "text": "chuyện thật",
                "at": "l3:stories"
              }
            ]
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "④ Mức lương thị trường",
            "x": 2908,
            "y": 355,
            "size": 46,
            "at": "l3:pay"
          },
          {
            "id": "b-5",
            "t": "text",
            "text": "⑤ Phong cách nơi đó",
            "x": 2908,
            "y": 420,
            "size": 46,
            "at": "l3:style"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what should you research before an interview?",
          "sub": "Vậy trước buổi phỏng vấn cần tìm hiểu những gì?",
          "keys": [
            "những gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not everything. Just enough to talk specifically.",
          "sub": "Không phải mọi thứ. Chỉ cần đủ để nói chuyện cụ thể.",
          "keys": [
            "nói chuyện cụ thể"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "What the company does, for whom. What the job needs. Your true stories. The pay. The style.",
          "sub": "Công ty làm gì, cho ai. Vị trí cần gì. Câu chuyện thật của bạn. Mức lương. Phong cách nơi đó.",
          "keys": [
            "Câu chuyện thật"
          ]
        }
      ],
      "ref": "intro,p7"
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
            "id": "b-cram",
            "t": "text",
            "text": "Dồn đêm cuối",
            "x": 2028,
            "y": 350,
            "size": 50,
            "at": "l1:cram",
            "color": "muted"
          },
          {
            "id": "b-cramx",
            "t": "strike",
            "over": "b-cram",
            "at": "l1:short"
          },
          {
            "id": "b-split",
            "t": "text",
            "text": "→ vài buổi ngắn",
            "x": 2388,
            "y": 350,
            "size": 50,
            "at": "l1:short",
            "hl": [
              {
                "text": "vài buổi ngắn",
                "at": "l1:sessions"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 520,
            "w": 300,
            "h": 90,
            "at": "l3:Friday+0",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2358,
            "y": 520,
            "w": 300,
            "h": 90,
            "at": "l3:Friday+250",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2688,
            "y": 520,
            "w": 300,
            "h": 90,
            "at": "l3:Friday+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 3018,
            "y": 520,
            "w": 300,
            "h": 90,
            "at": "l3:Friday+750",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3348,
            "y": 520,
            "w": 300,
            "h": 90,
            "at": "l3:Friday+1000",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 20:00",
            "x": 2048,
            "y": 535,
            "size": 44,
            "at": "l3:Friday+100"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Thứ Ba",
            "x": 2378,
            "y": 535,
            "size": 44,
            "at": "l3:Friday+350"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Thứ Tư",
            "x": 2708,
            "y": 535,
            "size": 44,
            "at": "l3:Friday+600"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Thứ Năm",
            "x": 3038,
            "y": 535,
            "size": 44,
            "at": "l3:Friday+850"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T6 9:00",
            "x": 3368,
            "y": 535,
            "size": 44,
            "at": "l3:Friday+1100"
          },
          {
            "id": "b-ds0",
            "t": "text",
            "text": "nhận lịch",
            "x": 2048,
            "y": 640,
            "size": 36,
            "at": "l2:one",
            "color": "muted"
          },
          {
            "id": "b-ds1",
            "t": "text",
            "text": "công ty",
            "x": 2378,
            "y": 640,
            "size": 36,
            "at": "l2:one",
            "color": "muted"
          },
          {
            "id": "b-ds2",
            "t": "text",
            "text": "vị trí",
            "x": 2708,
            "y": 640,
            "size": 36,
            "at": "l2:two",
            "color": "muted"
          },
          {
            "id": "b-ds3",
            "t": "text",
            "text": "lương, áo",
            "x": 3038,
            "y": 640,
            "size": 36,
            "at": "l2:Last",
            "color": "muted"
          },
          {
            "id": "b-ds4",
            "t": "text",
            "text": "phỏng vấn",
            "x": 3368,
            "y": 640,
            "size": 36,
            "at": "l2:Last",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Don't cram the last night. Short sessions let facts link to your stories.",
          "sub": "Đừng dồn đêm cuối. Chia vài buổi ngắn, để đầu óc kịp nối thông tin với câu chuyện của bạn.",
          "keys": [
            "vài buổi ngắn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Day one: the company. Day two: job, stories, pay. Last day: clothes, questions.",
          "sub": "Ngày đầu: công ty. Ngày hai: vị trí, câu chuyện, lương. Ngày cuối: trang phục, câu hỏi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo, from Monday night to Friday morning.",
          "sub": "Giờ theo chân Thảo, từ tối thứ Hai đến sáng thứ Sáu.",
          "keys": [
            "tối thứ Hai đến sáng thứ Sáu"
          ]
        }
      ],
      "ref": "p3,p4"
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
            "at": "l3",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai · Sẽ gặp ai?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:peek"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "walk",
                  "from": "left",
                  "at": "l2"
                },
                {
                  "id": "binh",
                  "side": "center",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l3"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l1:Friday",
            "caption": "Nhìn trước: thứ Sáu 9:00",
            "icon": "office-building"
          },
          {
            "id": "c-th",
            "t": "text",
            "text": "Tưởng: 1 chị nhân sự",
            "x": 3996,
            "y": 170,
            "size": 48,
            "at": "l2:expects",
            "color": "muted"
          },
          {
            "id": "c-thx",
            "t": "strike",
            "over": "c-th",
            "at": "l2:Instead"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Thật: 4 người, bàn dài",
            "x": 3996,
            "y": 250,
            "size": 52,
            "at": "l2:four",
            "color": "coral",
            "hl": [
              {
                "text": "4 người",
                "at": "l2:people"
              }
            ]
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "In đúng 1 bản hồ sơ",
            "x": 3996,
            "y": 330,
            "size": 48,
            "at": "l4:one",
            "color": "coral"
          },
          {
            "id": "c-lost",
            "t": "text",
            "text": "→ mất bình tĩnh cả buổi",
            "x": 3996,
            "y": 410,
            "size": 48,
            "at": "l6:calm",
            "hl": [
              {
                "text": "mất bình tĩnh",
                "at": "l6:calm"
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
          "say": "First stop: Monday night. Peek at Friday, if she does nothing.",
          "sub": "Chặng một: tối thứ Hai. Thử nhìn trước sáng thứ Sáu nếu Thảo không làm gì.",
          "keys": [
            "nhìn trước sáng thứ Sáu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She expects one HR chat. Instead: four people behind a long table.",
          "sub": "Cô tưởng chỉ gặp một chị nhân sự. Bước vào: bốn người sau bàn dài.",
          "keys": [
            "bốn người"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One is Bác Bình, the department head.",
          "sub": "Một người là bác Bình, trưởng phòng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Sorry, I only printed one copy of my CV.",
          "sub": "Dạ, em chỉ in đúng một bản hồ sơ ạ.",
          "face": "worried",
          "pose": "give"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "Let's begin with a technical question.",
          "sub": "Mình bắt đầu bằng một câu hỏi chuyên môn nhé.",
          "face": "neutral"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Thảo loses her calm for the whole interview.",
          "sub": "Thảo mất bình tĩnh suốt cả buổi.",
          "keys": [
            "mất bình tĩnh"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p5"
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
            "id": "c-ask",
            "t": "text",
            "text": "Hỏi lại: gặp ai? bao lâu?",
            "x": 3996,
            "y": 500,
            "size": 50,
            "at": "l2:who",
            "color": "accent",
            "hl": [
              {
                "text": "gặp ai?",
                "at": "l2:who"
              }
            ]
          },
          {
            "id": "c-ask2",
            "t": "text",
            "text": "trực tiếp hay trực tuyến?",
            "x": 3996,
            "y": 570,
            "size": 44,
            "at": "l3:online",
            "color": "muted"
          },
          {
            "id": "c-rule",
            "t": "text",
            "text": "Biết gặp ai, chuẩn bị đúng người",
            "x": 3996,
            "y": 680,
            "size": 50,
            "at": "l3:right",
            "hl": [
              {
                "text": "đúng người",
                "at": "l3:people"
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
          "say": "Back to Monday. The fix: one message, same day.",
          "sub": "Quay về tối thứ Hai. Cách chữa: một tin nhắn, gửi ngay trong ngày."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I confirm the time. May I ask who will be there, and how long it takes?",
          "sub": "Em xin xác nhận lịch hẹn. Cô cho em hỏi buổi phỏng vấn gồm những ai, kéo dài bao lâu ạ?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In person or online, too. Know who you'll meet, and you prepare for the right people.",
          "sub": "Hỏi cả trực tiếp hay trực tuyến. Biết trước gặp ai, chuẩn bị mới đúng người.",
          "keys": [
            "chuẩn bị mới đúng người"
          ]
        }
      ],
      "ref": "p1,p6"
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
            "id": "c-save",
            "t": "text",
            "text": "Lưu bản mô tả + ngày nộp",
            "x": 4836,
            "y": 690,
            "size": 44,
            "at": "l1:saves",
            "hl": [
              {
                "text": "Lưu",
                "at": "l1:saves"
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
          "say": "Same night, she saves the job ad, with company name and date. Ads vanish when they expire.",
          "sub": "Ngay tối đó, cô lưu bản mô tả công việc, kèm tên công ty và ngày nộp. Tin hay bị gỡ khi hết hạn.",
          "keys": [
            "lưu bản mô tả công việc"
          ]
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
            "text": "② Thứ Ba tối · Năm câu",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:laptop"
          },
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think"
                }
              ],
              "props": [
                "laptop",
                "books"
              ]
            },
            "at": "l1:opens",
            "caption": "Thứ Ba 20:00 · ở nhà",
            "icon": "laptop"
          },
          {
            "id": "d-all",
            "t": "text",
            "text": "Đọc hết lịch sử, giải thưởng…",
            "x": 5964,
            "y": 160,
            "size": 44,
            "at": "l2:history",
            "color": "muted"
          },
          {
            "id": "d-allx",
            "t": "strike",
            "over": "d-all",
            "at": "l3:five"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 250,
            "w": 46,
            "h": 46,
            "at": "l4:sell",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 232,
            "size": 58,
            "at": "l4:sell+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Công ty bán gì",
            "x": 6034,
            "y": 242,
            "size": 42,
            "at": "l4:sell+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 322,
            "w": 46,
            "h": 46,
            "at": "l4:customers",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 304,
            "size": 58,
            "at": "l4:customers+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Khách hàng chính là ai",
            "x": 6034,
            "y": 314,
            "size": 42,
            "at": "l4:customers+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 394,
            "w": 46,
            "h": 46,
            "at": "l4:news",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 376,
            "size": 58,
            "at": "l4:news+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Gần đây có tin gì",
            "x": 6034,
            "y": 386,
            "size": 42,
            "at": "l4:news+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 466,
            "w": 46,
            "h": 46,
            "at": "l4:rivals",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 448,
            "size": 58,
            "at": "l4:rivals+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Đối thủ là ai",
            "x": 6034,
            "y": 458,
            "size": 42,
            "at": "l4:rivals+200"
          },
          {
            "id": "d-c4",
            "t": "box",
            "x": 5964,
            "y": 538,
            "w": 46,
            "h": 46,
            "at": "l4:work",
            "stroke": 5
          },
          {
            "id": "d-k4",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 520,
            "size": 58,
            "at": "l4:work+600",
            "color": "accent"
          },
          {
            "id": "d-l4",
            "t": "text",
            "text": "Người ở đó làm kiểu nào",
            "x": 6034,
            "y": 530,
            "size": 42,
            "at": "l4:work+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Tuesday evening. Thảo opens her laptop to read everything.",
          "sub": "Chặng hai: tối thứ Ba. Thảo mở máy tính, định đọc tất tần tật.",
          "keys": [
            "tối thứ Ba"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First, their history. Second, every award. Third...",
          "sub": "Thứ nhất, lịch sử công ty. Thứ hai, mọi giải thưởng. Thứ ba...",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Slow down. Just answer five questions.",
          "sub": "Từ từ. Chỉ cần trả lời năm câu.",
          "keys": [
            "năm câu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "What they sell, main customers, recent news, rivals, how people work there. Specifics, not empty praise.",
          "sub": "Bán gì, khách chính là ai, tin gần đây, đối thủ, người ở đó làm việc kiểu nào. Để nói cụ thể, không khen chung chung."
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
            "id": "d-off",
            "t": "text",
            "text": "Ưu tiên: nguồn chính thức",
            "x": 6804,
            "y": 690,
            "size": 44,
            "at": "l1:official",
            "color": "accent",
            "hl": [
              {
                "text": "nguồn chính thức",
                "at": "l1:official"
              }
            ]
          },
          {
            "id": "d-rev",
            "t": "text",
            "text": "Đánh giá, diễn đàn: món phụ",
            "x": 5964,
            "y": 640,
            "size": 44,
            "at": "l2:side",
            "color": "coral",
            "hl": [
              {
                "text": "món phụ",
                "at": "l2:dish"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "web, trang công ty, báo chính thống, dữ liệu đăng ký doanh nghiệp",
            "x": 6804,
            "y": 745,
            "size": 24,
            "at": "l1:records",
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
          "say": "Where to look? Official sources first: the company's own pages, mainstream news, state business records.",
          "sub": "Tìm ở đâu? Ưu tiên nguồn chính thức: trang của công ty, báo chính thống, dữ liệu đăng ký doanh nghiệp.",
          "keys": [
            "nguồn chính thức"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Reviews and forums are personal feelings: a side dish, not the main course.",
          "sub": "Trang đánh giá, diễn đàn là cảm nhận riêng: món ăn kèm, không phải món chính.",
          "keys": [
            "Món ăn kèm"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Diễn đàn bảo công ty hay chậm lương. Hỏi thẳng không?",
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
          "say": "A forum says they pay late. Should she ask straight out?",
          "sub": "Diễn đàn bảo công ty hay chậm lương. Có nên hỏi thẳng không?",
          "keys": [
            "hỏi thẳng"
          ]
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
            "text": "③ Thứ Ba khuya · Tin đồn",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:forum",
            "hl": [
              {
                "text": "Tin đồn",
                "at": "l1:post"
              }
            ]
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "mobile-phone",
                "crescent-moon"
              ]
            },
            "at": "l1:midnight",
            "caption": "Thứ Ba 23:30 · đọc diễn đàn",
            "icon": "crescent-moon"
          },
          {
            "id": "e-rum",
            "t": "text",
            "text": "“Công ty hay chậm lương”",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l2:late",
            "color": "coral"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "— 1 bài trên diễn đàn",
            "x": 7972,
            "y": 245,
            "size": 40,
            "at": "l2:Someone",
            "color": "muted"
          },
          {
            "id": "e-mir",
            "t": "text",
            "text": "Tập hỏi trước gương…",
            "x": 7932,
            "y": 340,
            "size": 46,
            "at": "l3:mirror"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Tuesday, near midnight. A forum post.",
          "sub": "Chặng ba: thứ Ba, gần nửa đêm. Thảo lướt trúng một bài trên diễn đàn.",
          "keys": [
            "một bài trên diễn đàn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Someone says they often pay salaries late! I'll ask them on Friday.",
          "sub": "Có người bảo công ty hay trả lương muộn! Thứ Sáu mình hỏi thẳng luôn.",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "She even rehearses it in the mirror.",
          "sub": "Cô còn tập câu hỏi trước gương."
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Thứ Ba 23:40 · tập trước gương",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nhắc lại tin đồn như lời buộc tội",
          "why": "Người phỏng vấn khựng lại, phải phòng thủ; tin lại chưa kiểm.",
          "rule": "Hỏi đúng điều cần biết, bằng câu bình thường"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "I heard you often pay salaries late. Is that true?",
          "sub": "Em nghe nói bên mình hay trả lương muộn, có đúng không ạ?",
          "pose": "point",
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
          "say": "That's a rumour, said like an accusation. The interviewer freezes and gets defensive.",
          "sub": "Đó là tin đồn, nói như lời buộc tội. Người phỏng vấn khựng lại, phải phòng thủ.",
          "keys": [
            "lời buộc tội"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Thử lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "When in the month are salaries usually paid?",
          "sub": "Lương bên mình thường trả vào thời điểm nào trong tháng ạ?",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Same need, a normal question. And check two sources before you speak.",
          "sub": "Vẫn đúng điều cần biết, bằng câu bình thường. Và kiểm hai nguồn rồi mới nói.",
          "phase": "redo",
          "keys": [
            "kiểm hai nguồn rồi mới nói"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p9,p10"
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
            "text": "④ Thứ Tư sáng · Một trang",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:squeezes",
            "hl": [
              {
                "text": "Một trang",
                "at": "l1:page"
              }
            ]
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "hot-beverage",
                "memo"
              ]
            },
            "at": "l1:coffee",
            "caption": "Thứ Tư 7:30 · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "f-page",
            "t": "box",
            "x": 60,
            "y": 1240,
            "w": 700,
            "h": 330,
            "at": "l2:One",
            "stroke": 5
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "1 câu: công ty làm gì",
            "x": 90,
            "y": 1260,
            "size": 44,
            "at": "l2:One"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "2 điểm mình ấn tượng",
            "x": 90,
            "y": 1330,
            "size": 44,
            "at": "l2:Two"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "1 tin gần đây",
            "x": 90,
            "y": 1400,
            "size": 44,
            "at": "l2:recent"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "2 câu muốn hỏi",
            "x": 90,
            "y": 1470,
            "size": 44,
            "at": "l2:questions"
          },
          {
            "id": "f-fold",
            "t": "text",
            "text": "Thứ Sáu: đọc 1 lần, gấp lại",
            "x": 60,
            "y": 1610,
            "size": 42,
            "at": "l3:folds",
            "color": "accent",
            "hl": [
              {
                "text": "gấp lại",
                "at": "l3:folds"
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
          "say": "Fourth stop: Wednesday morning, coffee in hand. She squeezes it all onto one page.",
          "sub": "Chặng bốn: sáng thứ Tư, tay cầm ly cà phê. Thảo gom tất cả vào một trang giấy.",
          "keys": [
            "một trang giấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One line on what they do. Two things I like. One recent news item. Two questions.",
          "sub": "Một câu công ty làm gì. Hai điểm ấn tượng. Một tin gần đây. Hai câu muốn hỏi.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Friday, she reads it once and folds it. A legal cheat sheet.",
          "sub": "Sáng thứ Sáu đọc lại một lần rồi gấp lại. Phao thi hợp pháp hẳn hoi.",
          "keys": [
            "Phao thi hợp pháp"
          ]
        }
      ],
      "ref": "p11"
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
            "id": "f-jd",
            "t": "text",
            "text": "Bản mô tả = đề cương ôn thi",
            "x": 60,
            "y": 1700,
            "size": 52,
            "at": "l1:outline",
            "color": "accent",
            "hl": [
              {
                "text": "đề cương ôn thi",
                "at": "l1:outline"
              }
            ]
          },
          {
            "id": "f-jd2",
            "t": "text",
            "text": "việc đầu · từ lặp · bắt buộc",
            "x": 60,
            "y": 1780,
            "size": 38,
            "at": "l1:repeated",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Then the job description, read like an exam outline: first tasks, repeated words, must-haves and nice-to-haves.",
          "sub": "Rồi đọc bản mô tả công việc như đề cương ôn thi: việc ghi đầu, từ lặp lại, yêu cầu bắt buộc và ưu tiên.",
          "keys": [
            "đề cương ôn thi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That's exactly what they'll ask.",
          "sub": "Đó chính là những gì họ sẽ hỏi.",
          "keys": [
            "họ sẽ hỏi"
          ]
        }
      ],
      "ref": "p12"
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
            "at": "l3",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Tư tối · Hai buổi tối",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:coordinator"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "delivery-truck",
                "newspaper"
              ]
            },
            "at": "l1:job",
            "caption": "Thứ Tư 20:00 · vị trí điều phối đơn hàng",
            "icon": "delivery-truck"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A: đọc lịch sử, giải thưởng",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l2:history",
            "color": "muted"
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "Hỏi: “Kể lần xử lý đơn trễ”",
            "x": 2028,
            "y": 1350,
            "size": 42,
            "at": "l3:delivery",
            "color": "coral"
          },
          {
            "id": "g-ans",
            "t": "text",
            "text": "→ “Em luôn cẩn thận”",
            "x": 2068,
            "y": 1420,
            "size": 46,
            "at": "l4:careful",
            "color": "coral",
            "hl": [
              {
                "text": "luôn cẩn thận",
                "at": "l4:careful"
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
          "say": "Fifth stop: Wednesday evening. Order coordinator job, two evenings left.",
          "sub": "Chặng năm: tối thứ Tư. Vị trí điều phối đơn hàng. Còn hai buổi tối.",
          "keys": [
            "hai buổi tối"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Plan A: read all their history and awards. Feels safe.",
          "sub": "Cách A: đọc hết lịch sử với giải thưởng. Nghe chắc ăn.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then they ask: tell me about a late delivery you handled.",
          "sub": "Rồi họ hỏi: kể một lần bạn xử lý đơn hàng giao trễ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Plan A Thảo can only say: I'm always careful. Though it happens weekly!",
          "sub": "Thảo bản A chỉ nói được: “em luôn cẩn thận”. Dù tuần nào cũng gặp chuyện đó!",
          "keys": [
            "em luôn cẩn thận"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s16",
      "module": "BRK-04",
      "data": {
        "title": "Hai buổi tối chuẩn bị",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Hai tối đọc lịch sử, giải thưởng",
        "right": "Một tối cho công ty, một tối dò bản mô tả",
        "wrongIllus": "newspaper",
        "rightIllus": "memo"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Plan A: two evenings of history.",
          "sub": "Cách A: hai tối đọc lịch sử.",
          "keys": [
            "Cách A"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Plan B: one for the company, one for the job description.",
          "sub": "Cách B: một tối cho công ty, một tối dò bản mô tả.",
          "keys": [
            "Cách B"
          ]
        }
      ],
      "ref": "p14"
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
            "id": "g-b",
            "t": "text",
            "text": "B: mỗi dòng chính, 1 chuyện thật",
            "x": 2028,
            "y": 1510,
            "size": 44,
            "at": "l1:story",
            "color": "accent",
            "hl": [
              {
                "text": "1 chuyện thật",
                "at": "l1:story"
              }
            ]
          },
          {
            "id": "g-star",
            "t": "text",
            "text": "tình huống · nhiệm vụ · hành động · kết quả",
            "x": 2028,
            "y": 1585,
            "size": 26,
            "at": "l1:situation",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "g-pr",
            "t": "text",
            "text": "Có kết quả = bằng chứng",
            "x": 2028,
            "y": 1660,
            "size": 48,
            "at": "l2:proof",
            "hl": [
              {
                "text": "bằng chứng",
                "at": "l2:proof"
              }
            ]
          },
          {
            "id": "g-r1",
            "t": "text",
            "text": "Hiểu công ty để mở lời,",
            "x": 2028,
            "y": 1740,
            "size": 44,
            "at": "l3:company",
            "color": "accent"
          },
          {
            "id": "g-r2",
            "t": "text",
            "text": "hiểu vị trí để được nhận",
            "x": 2028,
            "y": 1800,
            "size": 44,
            "at": "l3:hired",
            "color": "accent",
            "hl": [
              {
                "text": "để được nhận",
                "at": "l3:hired"
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
          "say": "Plan B: for each key line, one true story. Situation, task, action, result.",
          "sub": "Cách B: mỗi dòng quan trọng, một câu chuyện thật. Tình huống, nhiệm vụ, hành động, kết quả.",
          "keys": [
            "một câu chuyện thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A story with a result is proof. Anyone can say: I'm careful.",
          "sub": "Chuyện có kết quả là bằng chứng. Còn “em cẩn thận” thì ai cũng nói được.",
          "keys": [
            "bằng chứng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Know the company to open the talk. Know the job to get hired.",
          "sub": "Hiểu công ty để mở lời, hiểu vị trí để được nhận.",
          "keys": [
            "hiểu vị trí để được nhận"
          ]
        }
      ],
      "ref": "p13,p15"
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
            "text": "⑥ Thứ Năm · Câu chắc gặp",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:rehearses"
          },
          {
            "id": "h-q",
            "t": "text",
            "text": "“Bạn biết gì về chúng tôi?”",
            "x": 3996,
            "y": 1610,
            "size": 48,
            "at": "l1:big",
            "color": "accent"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone"
              ]
            },
            "at": "l1:big",
            "caption": "Thứ Năm 7:00 · tập nói",
            "icon": "speech-balloon"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "① Làm gì, cho ai",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l2:whom"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "② 1 điểm cụ thể",
            "x": 3996,
            "y": 1340,
            "size": 48,
            "at": "l2:detail"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "③ Gắn với mình ra sao",
            "x": 3996,
            "y": 1420,
            "size": 48,
            "at": "l2:links",
            "hl": [
              {
                "text": "Gắn với mình",
                "at": "l2:links"
              }
            ]
          },
          {
            "id": "h-min",
            "t": "text",
            "text": "≈ 1 phút",
            "x": 3996,
            "y": 1510,
            "size": 56,
            "at": "l2:minute",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: Thursday morning. She rehearses the big one.",
          "sub": "Chặng sáu: sáng thứ Năm. Thảo tập câu “trùm cuối”.",
          "keys": [
            "câu “trùm cuối”"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three parts: what they do for whom, one detail, how it links to you. A minute. Want more? They'll ask.",
          "sub": "Ba phần: làm gì cho ai, một điểm cụ thể, gắn với bạn ra sao. Một phút. Muốn nghe thêm, họ sẽ hỏi.",
          "keys": [
            "Ba phần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "From my research, you make sales software for small shops.",
          "sub": "Theo em tìm hiểu, công ty làm phần mềm bán hàng cho cửa hàng nhỏ.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I noticed your new end-of-day report. I did sales reports nightly at my old job.",
          "sub": "Em chú ý tính năng báo cáo cuối ngày vừa ra mắt. Ở chỗ cũ, tối nào em cũng làm báo cáo doanh thu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Her own words, not their About page. They know it like a mum knows her cooking.",
          "sub": "Lời của chính cô, không đọc lại trang Giới thiệu. Họ thuộc trang đó như mẹ thuộc món mẹ nấu.",
          "keys": [
            "Lời của chính cô"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s20",
      "module": "BRK-05",
      "data": {
        "title": "Đến đây, Thảo đã có",
        "points": [
          "Hỏi trước sẽ gặp ai",
          "Một trang về công ty",
          "Chuyện thật cho mỗi yêu cầu"
        ],
        "illus": "clipboard"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Recap. She asked who she'll meet.",
          "sub": "Nhắc nhanh. Đã hỏi trước sẽ gặp ai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One page on the company.",
          "sub": "Một trang về công ty."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A true story per key line.",
          "sub": "Chuyện thật cho mỗi yêu cầu chính."
        }
      ],
      "ref": "p11,p13"
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
            "at": "l4",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Năm tối · Lương, áo",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:pay"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "money-bag",
                "womans-clothes"
              ]
            },
            "at": "l1:Thursday",
            "caption": "Thứ Năm 19:00 · chuẩn bị cuối",
            "icon": "womans-clothes"
          },
          {
            "id": "i-pay",
            "t": "text",
            "text": "Lương: hỏi bất ngờ",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l2:salary",
            "color": "coral",
            "hl": [
              {
                "text": "bất ngờ",
                "at": "l2:nowhere"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "tin cùng vị trí · báo cáo ngành · người trong nghề",
            "x": 5964,
            "y": 1335,
            "size": 26,
            "at": "l2:ads",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "i-rng",
            "t": "text",
            "text": "→ 1 khoảng, trước hay sau thuế?",
            "x": 5964,
            "y": 1390,
            "size": 44,
            "at": "l2:range",
            "color": "accent",
            "hl": [
              {
                "text": "1 khoảng",
                "at": "l2:range"
              }
            ]
          },
          {
            "id": "i-dress",
            "t": "text",
            "text": "Áo: trang trọng hơn 1 bậc",
            "x": 5964,
            "y": 1490,
            "size": 50,
            "at": "l3:formal",
            "hl": [
              {
                "text": "hơn 1 bậc",
                "at": "l3:level"
              }
            ]
          },
          {
            "id": "i-hr",
            "t": "text",
            "text": "Hoặc hỏi thẳng nhân sự",
            "x": 5964,
            "y": 1570,
            "size": 42,
            "at": "l4:HR",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: Thursday evening. Pay and clothes.",
          "sub": "Chặng bảy: tối thứ Năm. Lương và trang phục."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Salary questions jump out of nowhere. Check similar ads, salary reports, insiders. Prepare a range.",
          "sub": "Câu hỏi lương hay nhảy ra bất ngờ. Xem tin cùng vị trí, báo cáo lương, hỏi người trong nghề. Chuẩn bị một khoảng.",
          "keys": [
            "một khoảng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Say if it's before or after tax. Clothes: one level more formal than the staff.",
          "sub": "Nói rõ trước hay sau thuế, bảo hiểm. Trang phục: trang trọng hơn một bậc so với nhân viên ở đó.",
          "keys": [
            "trang trọng hơn một bậc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Their office photos look smart. I'll also ask HR about dress advice.",
          "sub": "Ảnh văn phòng trông khá chỉn chu. Mình hỏi thêm nhân sự về trang phục.",
          "face": "happy"
        }
      ],
      "ref": "p18,p19"
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
          }
        ],
        "items": [
          {
            "id": "i-pn",
            "t": "text",
            "text": "Hội đồng: ai quan tâm gì?",
            "x": 5964,
            "y": 1660,
            "size": 48,
            "at": "l1:panel",
            "hl": [
              {
                "text": "ai quan tâm gì",
                "at": "l1:cares"
              }
            ]
          },
          {
            "id": "i-pn2",
            "t": "text",
            "text": "nhân sự: thái độ · quản lý: việc · chuyên gia: sâu",
            "x": 5964,
            "y": 1730,
            "size": 26,
            "at": "l2:expert",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "i-eye",
            "t": "text",
            "text": "Nhìn người hỏi, rồi nhìn cả bàn",
            "x": 5964,
            "y": 1780,
            "size": 42,
            "at": "l2:everyone",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "It's a panel, so she guesses what each person cares about.",
          "sub": "Biết trước là hội đồng, cô đoán mỗi người quan tâm điều gì.",
          "keys": [
            "mỗi người quan tâm điều gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "HR: attitude and fit. Manager: can you do it. Expert: depth. Look at the asker, then everyone.",
          "sub": "Nhân sự: thái độ, sự phù hợp. Quản lý: làm được việc chưa. Chuyên gia: hỏi sâu. Nhìn người hỏi, rồi nhìn cả bàn.",
          "keys": [
            "Nhìn người hỏi"
          ]
        }
      ],
      "ref": "p20"
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
          },
          {
            "at": 150,
            "fit": "J",
            "ms": 900
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
            "id": "j-t",
            "t": "text",
            "text": "Thứ Sáu · 9:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:route"
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
                  "enter": "walk",
                  "from": "left",
                  "at": "l2",
                  "face": "happy"
                },
                {
                  "id": "binh",
                  "side": "center",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l2:Friday",
            "caption": "Thứ Sáu 9:00 · vẫn bàn dài ấy",
            "icon": "office-building"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Tối qua: không học thêm",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l1:cramming",
            "color": "muted"
          },
          {
            "id": "j-n2",
            "t": "text",
            "text": "xác nhận giờ · xếp giấy tờ · thử đường · ngủ sớm",
            "x": 7932,
            "y": 1325,
            "size": 26,
            "at": "l1:route",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "j-cv",
            "t": "text",
            "text": "4 bản hồ sơ ✓",
            "x": 7932,
            "y": 1410,
            "size": 56,
            "at": "l3:four",
            "color": "accent",
            "hl": [
              {
                "text": "4 bản",
                "at": "l3:copies"
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
          "say": "Thursday night: no cramming. Confirm, pack, test the route, sleep early.",
          "sub": "Tối thứ Năm: không học thêm. Xác nhận giờ, xếp giấy tờ, thử đường, ngủ sớm.",
          "keys": [
            "không học thêm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Friday, nine a.m. Same long table, same four people.",
          "sub": "Thứ Sáu, chín giờ sáng. Vẫn bàn dài ấy, vẫn bốn người ấy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Good morning. I brought four copies of my CV.",
          "sub": "Em chào cô, chào bác. Em mang bốn bản hồ sơ ạ.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "What do you know about our company?",
          "sub": "Em biết gì về công ty chúng tôi?",
          "face": "neutral"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "This time Thảo smiles. One minute, three parts, her own words.",
          "sub": "Lần này Thảo mỉm cười. Một phút, ba phần, lời của chính mình.",
          "keys": [
            "lời của chính mình"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "to": "l2",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "p22,p16"
    },
    {
      "id": "s24",
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
            "at": "l2",
            "fit": [
              "j-v"
            ],
            "zoom": 1.3,
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
            "id": "j-q",
            "t": "text",
            "text": "Cuối buổi: chuẩn bị 5–6, hỏi 2–3",
            "x": 7932,
            "y": 1520,
            "size": 44,
            "at": "l3:five",
            "hl": [
              {
                "text": "hỏi 2–3",
                "at": "l3:three"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Biết người biết ta…",
            "x": 7932,
            "y": 1650,
            "size": 50,
            "at": "l4:know",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "… và biết mình chọn ai”",
            "x": 7932,
            "y": 1730,
            "size": 54,
            "at": "l4:choice",
            "color": "accent",
            "hl": [
              {
                "text": "mình chọn ai",
                "at": "l4:choice"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Do you have any questions for us?",
          "sub": "Em có câu hỏi gì cho chúng tôi không?",
          "face": "neutral"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Yes. How are new people guided in this team?",
          "sub": "Dạ có. Người mới ở nhóm mình được hướng dẫn thế nào ạ?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "She prepared five or six. Some got answered, so she asks two or three.",
          "sub": "Cô chuẩn bị năm sáu câu. Vài câu đã được trả lời, nên chỉ hỏi hai ba câu.",
          "keys": [
            "năm sáu câu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Research also shows if this place suits her. Know them, know yourself, know your choice.",
          "sub": "Tìm hiểu kỹ còn giúp cô biết nơi này có hợp không. Biết người, biết ta, biết mình đang chọn ai.",
          "keys": [
            "biết mình đang chọn ai"
          ]
        }
      ],
      "ref": "p21,p23"
    },
    {
      "id": "s25",
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
            "at": "l1:meet",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:company",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:stories",
            "fit": "G",
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
            "x": 4636,
            "y": 500,
            "at": "l1:meet+600"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6604,
            "y": 250,
            "at": "l2:company+600"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1510,
            "at": "l3:stories+600"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Hai chiều: bạn cũng đang chọn công ty.",
            "x": 7932,
            "y": 1830,
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
          "say": "So: confirm the same day, ask who you'll meet, save the job ad.",
          "sub": "Tóm lại: xác nhận trong ngày, hỏi gặp ai, lưu bản mô tả.",
          "keys": [
            "hỏi gặp ai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Answer five questions about the company, from checked sources.",
          "sub": "Trả lời năm câu về công ty, từ nguồn đã kiểm.",
          "keys": [
            "nguồn đã kiểm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then true stories, a pay range, clothes, questions. Copy the list to your phone.",
          "sub": "Rồi chuyện thật, khoảng lương, trang phục, câu hỏi. Chép danh sách ấy vào điện thoại.",
          "keys": [
            "Chép danh sách"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p24"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "ref": "questions[14]",
      "data": {
        "q": "What is the easy rule for information you find online before an interview?",
        "options": [
          "Believe the newest post, because recent comments are always the most correct",
          "Mention it right away, because interviewers like candidates who know company secrets",
          "Check it in a second source before you mention it to anyone"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "magnifying-glass-tilted-left",
        "why": "Tin trên mạng có thể cũ, sai hoặc chỉ là cảm xúc của một người."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the easy rule for information you find online before an interview?",
          "sub": "Quy tắc dễ nhớ cho thông tin tìm được trên mạng trước phỏng vấn là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Check it in a second source before you mention it to anyone.",
          "sub": "Kiểm thêm một nguồn nữa trước khi nhắc với ai."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Online posts can be old, wrong, or one person's feelings.",
          "sub": "Tin trên mạng có thể cũ, sai, hoặc chỉ là cảm xúc một người."
        }
      ]
    },
    {
      "id": "s32",
      "module": "QUIZ-01",
      "ref": "questions[35]",
      "data": {
        "q": "How many questions should you prepare for the end of the interview?",
        "options": [
          "As many as possible, and ask all of them even if time is short",
          "Five or six, because some will be answered during the talk, then ask two or three",
          "Just one, since asking more than one question annoys every interviewer"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "red-question-mark",
        "why": "Một số câu được trả lời ngay trong buổi, nên cần chuẩn bị dư."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "How many questions should you prepare for the end of the interview?",
          "sub": "Nên chuẩn bị bao nhiêu câu để hỏi cuối buổi phỏng vấn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Five or six, because some will be answered during the talk, then ask two or three.",
          "sub": "Năm sáu câu, vì vài câu được trả lời trong buổi, rồi hỏi hai ba câu."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Two or three at the end is just right.",
          "sub": "Cuối buổi hỏi hai ba câu là vừa."
        }
      ]
    },
    {
      "id": "s33",
      "module": "END-05",
      "data": {
        "text": "Tối nay: chép danh sách vào điện thoại",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s04",
    "close": "s23"
  }
};
