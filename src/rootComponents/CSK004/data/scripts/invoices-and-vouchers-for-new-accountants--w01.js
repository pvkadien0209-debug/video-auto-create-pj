// invoices-and-vouchers-for-new-accountants--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "invoices-and-vouchers-for-new-accountants--w01",
  "unit": {
    "audience": "junior-accountants-invoices",
    "slug": "invoices-and-vouchers-for-new-accountants",
    "door": "ky-nang",
    "level": "B1",
    "title": "Kế toán mới vào nghề: hoá đơn, chứng từ quan trọng thế nào?",
    "series": "Chứng từ không sai một dòng — hoá đơn điện tử cho kế toán năm đầu"
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
            "fit": [
              "a-r",
              "a-p"
            ],
            "zoom": 1.3,
            "move": "cut"
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 1400
          }
        ],
        "items": [
          {
            "id": "a-r",
            "t": "illus",
            "name": "receipt",
            "x": 80,
            "y": 130,
            "size": 190,
            "at": "l1:stack"
          },
          {
            "id": "a-p",
            "t": "illus",
            "name": "page-facing-up",
            "x": 300,
            "y": 150,
            "size": 170,
            "at": "l1:invoices"
          },
          {
            "id": "a-b",
            "t": "illus",
            "name": "bookmark-tabs",
            "x": 500,
            "y": 170,
            "size": 150,
            "at": "l1:receipts"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Hoá đơn · phiếu chi · biên lai",
            "x": 60,
            "y": 370,
            "size": 50,
            "at": "l1:crumpled"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "“Xem giúp cho chuẩn nhé”",
            "x": 60,
            "y": 460,
            "size": 56,
            "at": "l2:properly",
            "color": "accent",
            "hl": [
              {
                "text": "cho chuẩn",
                "at": "l2:properly"
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
          "say": "A stack of paper. Invoices, payment slips, a few crumpled receipts.",
          "sub": "Một xấp giấy. Hoá đơn, phiếu chi, vài tờ biên lai nhàu nhĩ.",
          "keys": [
            "Một xấp giấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "On top, a sticky note: please check these properly.",
          "sub": "Bên trên dán mẩu giấy: “Xem giúp cho chuẩn nhé.”",
          "keys": [
            "Xem giúp cho chuẩn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not a report. Just this stack.",
          "sub": "Không phải báo cáo. Chỉ là xấp giấy này."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 200
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
            "at": "l2",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
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
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "page-facing-up",
                "receipt"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · 8:00 · bàn kế toán",
            "icon": "receipt"
          },
          {
            "id": "a-w",
            "t": "text",
            "text": "“Toàn giấy thôi mà?”",
            "x": 60,
            "y": 560,
            "size": 50,
            "at": "l2:paper",
            "color": "muted"
          },
          {
            "id": "a-wx",
            "t": "strike",
            "over": "a-w",
            "at": "l3:birth"
          },
          {
            "id": "a-gk",
            "t": "text",
            "text": "= giấy khai sinh của con số",
            "x": 60,
            "y": 640,
            "size": 46,
            "at": "l3:birth",
            "color": "coral",
            "hl": [
              {
                "text": "giấy khai sinh",
                "at": "l3:birth certificate"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Giấy trắng mực đen”",
            "x": 960,
            "y": 650,
            "size": 56,
            "at": "l4:white",
            "color": "accent",
            "hl": [
              {
                "text": "Giấy trắng mực đen",
                "at": "l4:black ink"
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
          "say": "Meet Lan, a brand new accountant. First week, first desk, first stack.",
          "sub": "Đây là Lan, kế toán mới toanh. Tuần đầu, bàn đầu, xấp giấy đầu.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Just check them? Easy. They're only pieces of paper, right?",
          "sub": "Chỉ xem thôi ạ? Dễ mà. Toàn giấy thôi chứ gì?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Only paper? Each sheet is the birth certificate of a number in the books.",
          "sub": "Toàn giấy? Mỗi tờ là giấy khai sinh của một con số trên sổ.",
          "keys": [
            "giấy khai sinh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "White paper, black ink. Once written, you answer for it.",
          "sub": "“Giấy trắng mực đen.” Đã viết ra là phải chịu.",
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
            "text": "Hoá đơn, chứng từ: quan trọng sao?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:matter",
            "hl": [
              {
                "text": "quan trọng sao",
                "at": "l1:really matter"
              }
            ]
          },
          {
            "id": "b-p",
            "t": "text",
            "text": "Lời hứa: đúng quy định mới",
            "x": 2028,
            "y": 165,
            "size": 48,
            "at": "l2:promise",
            "hl": [
              {
                "text": "đúng quy định mới",
                "at": "l2:new rules"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Chứng từ hợp lệ",
            "x": 2028,
            "y": 250,
            "size": 44,
            "at": "l4:valid"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Kiểm hoá đơn",
            "x": 2028,
            "y": 315,
            "size": 44,
            "at": "l4:checking"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Sửa hoá đơn sai",
            "x": 2028,
            "y": 380,
            "size": 44,
            "at": "l4:fixing"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "④ Hoá đơn rủi ro",
            "x": 2868,
            "y": 250,
            "size": 44,
            "at": "l4:risks"
          },
          {
            "id": "b-5",
            "t": "text",
            "text": "⑤ Lưu trữ",
            "x": 2868,
            "y": 315,
            "size": 44,
            "at": "l4:storage"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Tuần làm việc đầu tiên của Lan",
            "x": 2028,
            "y": 470,
            "size": 46,
            "at": "l5:week",
            "hl": [
              {
                "text": "Tuần làm việc đầu tiên",
                "at": "l5:first week"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 570,
            "w": 250,
            "h": 90,
            "at": "l5:week+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 570,
            "w": 250,
            "h": 90,
            "at": "l5:week+750",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 570,
            "w": 250,
            "h": 90,
            "at": "l5:week+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 570,
            "w": 250,
            "h": 90,
            "at": "l5:week+1250",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 570,
            "w": 250,
            "h": 90,
            "at": "l5:week+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 570,
            "w": 250,
            "h": 90,
            "at": "l5:week+1750",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2",
            "x": 2058,
            "y": 588,
            "size": 44,
            "at": "l5:week+620"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3",
            "x": 2328,
            "y": 588,
            "size": 44,
            "at": "l5:week+870"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T4",
            "x": 2598,
            "y": 588,
            "size": 44,
            "at": "l5:week+1120"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T5",
            "x": 2868,
            "y": 588,
            "size": 44,
            "at": "l5:week+1370"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T6",
            "x": 3138,
            "y": 588,
            "size": 44,
            "at": "l5:week+1620"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T2 sau",
            "x": 3408,
            "y": 588,
            "size": 44,
            "at": "l5:week+1870"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how much do invoices and vouchers really matter for a new accountant?",
          "sub": "Vậy với kế toán mới, hoá đơn, chứng từ quan trọng đến đâu?",
          "keys": [
            "quan trọng đến đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This series makes one promise: check and store e-invoices and vouchers under the new rules.",
          "sub": "Chuỗi bài hứa: kiểm tra, lưu trữ hoá đơn điện tử, chứng từ đúng quy định mới.",
          "keys": [
            "đúng quy định mới"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Five stages: valid vouchers, checking, fixing, risks, storage.",
          "sub": "Năm chặng: chứng từ hợp lệ, kiểm hoá đơn, sửa sai, rủi ro, lưu trữ.",
          "keys": [
            "Năm chặng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "We'll walk them with Lan, through her first week at work.",
          "sub": "Ta đi cùng Lan, qua tuần làm việc đầu tiên.",
          "keys": [
            "tuần làm việc đầu tiên"
          ]
        }
      ],
      "ref": "intro,p2"
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
            "text": "① Thứ Hai chiều · Bằng chứng",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 130,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "ledger",
                "receipt"
              ]
            },
            "at": "l1:Thảo",
            "caption": "Thứ Hai · 14:00 · chị Thảo kèm Lan",
            "icon": "ledger"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Luật Kế toán 2015 · Điều 18",
            "x": 3996,
            "y": 165,
            "size": 48,
            "at": "l3:Accounting"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Mọi nghiệp vụ → chứng từ",
            "x": 3996,
            "y": 250,
            "size": 52,
            "at": "l3:every",
            "color": "accent",
            "hl": [
              {
                "text": "Mọi nghiệp vụ",
                "at": "l3:every economic"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Mỗi nghiệp vụ: lập một lần",
            "x": 3996,
            "y": 340,
            "size": 48,
            "at": "l4:once",
            "hl": [
              {
                "text": "một lần",
                "at": "l4:only once"
              }
            ]
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Không chứng từ: sổ vô căn cứ",
            "x": 3996,
            "y": 430,
            "size": 46,
            "at": "l5:nothing",
            "color": "coral"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: khoản 1 Điều 18 Luật Kế toán 2015 (88/2015/QH13)",
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
          "say": "First stop: Monday afternoon. Meet Thảo, the senior accountant who trains Lan.",
          "sub": "Chặng một: chiều thứ Hai. Đây là chị Thảo, kế toán tổng hợp, người kèm Lan.",
          "keys": [
            "chị Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Rule one, Lan. Every transaction needs a voucher. No voucher, no entry.",
          "sub": "Luật số một nhé Lan. Nghiệp vụ nào cũng cần chứng từ. Không chứng từ, không ghi sổ.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Accounting Law twenty fifteen, Article eighteen: every economic or financial transaction needs a voucher.",
          "sub": "Khoản 1 Điều 18 Luật Kế toán 2015: mọi nghiệp vụ kinh tế, tài chính đều phải lập chứng từ.",
          "keys": [
            "mọi nghiệp vụ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And each transaction gets a voucher only once. No twins.",
          "sub": "Mỗi nghiệp vụ chỉ lập chứng từ một lần. Không có sinh đôi.",
          "keys": [
            "một lần"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Without it, the number in the books has nothing to prove it.",
          "sub": "Không có chứng từ, con số trên sổ chẳng có gì chứng minh.",
          "keys": [
            "chẳng có gì chứng minh"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 700
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
            "id": "c-5",
            "t": "text",
            "text": "Điều 16: tên, số hiệu, ngày…",
            "x": 3996,
            "y": 540,
            "size": 46,
            "at": "l1:sixteen",
            "hl": [
              {
                "text": "Điều 16",
                "at": "l1:sixteen"
              }
            ]
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "… số tiền, chữ ký",
            "x": 4036,
            "y": 615,
            "size": 44,
            "at": "l1:amount"
          },
          {
            "id": "c-7",
            "t": "text",
            "text": "Điều 19: ai ký, ký thế nào",
            "x": 4896,
            "y": 640,
            "size": 46,
            "at": "l3:nineteen",
            "hl": [
              {
                "text": "ai ký",
                "at": "l3:who signs"
              }
            ]
          },
          {
            "id": "c-8",
            "t": "text",
            "text": "→ Bài 1: dò 7 mục",
            "x": 4896,
            "y": 710,
            "size": 44,
            "at": "l4:seven",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Article sixteen lists the main contents: from name, number and date, to amount and signatures.",
          "sub": "Khoản 1 Điều 16 liệt kê nội dung chủ yếu: từ tên, số hiệu, ngày lập đến số tiền, chữ ký.",
          "keys": [
            "nội dung chủ yếu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article nineteen says who signs, and how.",
          "sub": "Điều 19 quy định ai ký và ký thế nào.",
          "keys": [
            "ai ký"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The first deep lesson walks you through seven items, one by one.",
          "sub": "Bài đào sâu đầu tiên dắt bạn dò bảy mục, không sót mục nào.",
          "keys": [
            "bảy mục"
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
            "at": "l3",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Ba · Văn bản nào?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday",
            "hl": [
              {
                "text": "Văn bản nào",
                "at": "l3:which text"
              }
            ]
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
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "open-book"
              ]
            },
            "at": "l1:guide",
            "caption": "Thứ Ba · tài liệu tải trên mạng",
            "icon": "laptop"
          },
          {
            "id": "d-old",
            "t": "text",
            "text": "Tài liệu 2025: làm y nguyên?",
            "x": 5964,
            "y": 165,
            "size": 46,
            "at": "l2:exactly",
            "color": "muted"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "NĐ 254/2026 · từ 01/7/2026",
            "x": 5964,
            "y": 250,
            "size": 50,
            "at": "l4:Decree",
            "color": "accent",
            "hl": [
              {
                "text": "NĐ 254/2026",
                "at": "l4:two five four"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "NĐ 123/2020, NĐ 70/2025: hết",
            "x": 5964,
            "y": 335,
            "size": 44,
            "at": "l5:out",
            "color": "coral"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "TT 91/2026/TT-BTC: hướng dẫn",
            "x": 5964,
            "y": 410,
            "size": 44,
            "at": "l6:Circular"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật 03/7, 16/7/2026; Điều 43 NĐ 254",
            "x": 5964,
            "y": 725,
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
          "say": "Second stop: Tuesday. Lan finds an invoice guide online.",
          "sub": "Chặng hai: thứ Ba. Lan tải được tài liệu hướng dẫn hoá đơn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Perfect! A full invoice guide from twenty twenty five. I'll follow it exactly.",
          "sub": "Tuyệt! Hướng dẫn hoá đơn đầy đủ, viết năm 2025. Em làm theo y nguyên.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Careful. Invoice rules change fast. First, know which text you are reading.",
          "sub": "Cẩn thận. Quy định hoá đơn đổi nhanh. Trước hết, biết mình đang đọc văn bản nào.",
          "keys": [
            "văn bản nào"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Decree two five four of twenty twenty six, issued June thirtieth, applies from July first.",
          "sub": "Nghị định 254/2026/NĐ-CP, ban hành 30/6/2026, hiệu lực từ 01/7/2026.",
          "keys": [
            "Nghị định 254/2026/NĐ-CP"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "From that day, Decree one two three and Decree seventy are out.",
          "sub": "Từ cùng ngày, Nghị định 123/2020 và Nghị định 70/2025 hết hiệu lực.",
          "keys": [
            "hết hiệu lực"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Circular ninety one of twenty twenty six guides it, also from July first.",
          "sub": "Thông tư 91/2026/TT-BTC hướng dẫn, cũng áp dụng từ 01/7/2026."
        }
      ],
      "ref": "p3,p5"
    },
    {
      "id": "s06",
      "module": "BRK-08",
      "data": {
        "title": "Văn bản hoá đơn, đời nối đời",
        "points": [
          {
            "label": "NĐ 123/2020",
            "sub": "hết hiệu lực 01/7/2026",
            "illus": "page-facing-up"
          },
          {
            "label": "NĐ 70/2025",
            "sub": "hết hiệu lực 01/7/2026",
            "illus": "page-facing-up"
          },
          {
            "label": "NĐ 254/2026",
            "sub": "áp dụng từ 01/7/2026",
            "illus": "scroll"
          },
          {
            "label": "TT 91/2026",
            "sub": "hướng dẫn, từ 01/7/2026",
            "illus": "open-book"
          }
        ],
        "current": 2
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Twenty twenty, then twenty twenty five. Two decrees, one retirement day.",
          "sub": "2020, rồi 2025. Hai nghị định, chung một ngày nghỉ hưu.",
          "keys": [
            "chung một ngày nghỉ hưu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Now it's Decree two five four, with Circular ninety one beside it.",
          "sub": "Giờ là Nghị định 254, đi kèm Thông tư 91."
        }
      ],
      "sfx": [
        {
          "at": "l1",
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-4",
            "t": "text",
            "text": "Luật QLT 108/2025 · từ 01/7/2026",
            "x": 5964,
            "y": 485,
            "size": 44,
            "at": "l1:one oh eight",
            "hl": [
              {
                "text": "108/2025",
                "at": "l1:one oh eight"
              }
            ]
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "thay Luật QLT 38/2019",
            "x": 5964,
            "y": 640,
            "size": 40,
            "at": "l2:replaces"
          },
          {
            "id": "d-6",
            "t": "text",
            "text": "Khấu trừ đầu vào: Luật GTGT 48/2024",
            "x": 6864,
            "y": 640,
            "size": 40,
            "at": "l4:deduction"
          },
          {
            "id": "d-oldx",
            "t": "strike",
            "over": "d-old",
            "at": "l5:changed"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Nhìn ngày viết, văn bản gốc",
            "x": 6864,
            "y": 700,
            "size": 46,
            "at": "l6:date",
            "color": "accent",
            "hl": [
              {
                "text": "ngày viết",
                "at": "l6:date"
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
          "say": "At law level: the Tax Administration Law, number one oh eight, passed December tenth twenty twenty five.",
          "sub": "Tầng luật: Luật Quản lý thuế số 108/2025/QH15, thông qua ngày 10/12/2025.",
          "keys": [
            "108/2025/QH15"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "From July twenty twenty six, it replaces law thirty eight of twenty nineteen.",
          "sub": "Từ 01/7/2026, luật này thay Luật Quản lý thuế 38/2019/QH14."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Input VAT deduction conditions? The VAT Law, number forty eight of twenty twenty four.",
          "sub": "Điều kiện khấu trừ thuế đầu vào: Luật Thuế giá trị gia tăng 48/2024/QH15.",
          "keys": [
            "48/2024/QH15"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So Lan's old guide still explains ideas. But article numbers and forms have changed.",
          "sub": "Vậy tài liệu cũ vẫn giúp hiểu ý. Nhưng số điều, số mẫu đã khác.",
          "keys": [
            "số điều, số mẫu đã khác"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Before following any guide, look at its date and the text it relies on.",
          "sub": "Trước khi làm theo hướng dẫn nào, nhìn ngày viết và văn bản nó dựa vào.",
          "keys": [
            "nhìn ngày viết"
          ]
        }
      ],
      "ref": "p4,p5,p6"
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
            "text": "③ Thứ Tư · Hoá đơn đầu vào",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 130,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "give",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "printer",
                "package"
              ]
            },
            "at": "l1:Dũng",
            "caption": "Thứ Tư · Dũng ôm thùng mực in về",
            "icon": "printer"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Đầu vào: nhận khi mua",
            "x": 7932,
            "y": 165,
            "size": 50,
            "at": "l3:input",
            "color": "accent",
            "hl": [
              {
                "text": "Đầu vào",
                "at": "l3:input invoice"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Đầu ra: lập khi bán",
            "x": 7932,
            "y": 245,
            "size": 50,
            "at": "l4:output",
            "hl": [
              {
                "text": "Đầu ra",
                "at": "l4:output invoice"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Điều 9 NĐ 254: lập khi",
            "x": 7932,
            "y": 335,
            "size": 46,
            "at": "l5:Article nine"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "chuyển giao quyền sở hữu, sử dụng",
            "x": 7972,
            "y": 405,
            "size": 40,
            "at": "l5:ownership",
            "hl": [
              {
                "text": "quyền sở hữu",
                "at": "l5:ownership"
              }
            ]
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "dù đã thu tiền hay chưa",
            "x": 7972,
            "y": 470,
            "size": 40,
            "at": "l6:paid",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Wednesday. Meet Dũng from purchasing, back with a box of printer ink.",
          "sub": "Chặng ba: thứ Tư. Đây là Dũng, phòng mua hàng, vừa ôm thùng mực in về.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Lan! Here's the invoice. Book it right now, okay?",
          "sub": "Lan ơi! Hoá đơn đây. Ghi sổ luôn nhé!",
          "pose": "give",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First, two words. An input invoice is the one we receive when we buy.",
          "sub": "Trước hết, hai từ. Hoá đơn đầu vào: công ty nhận khi mua.",
          "keys": [
            "Hoá đơn đầu vào"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "An output invoice is the one we issue when we sell.",
          "sub": "Hoá đơn đầu ra: công ty lập khi bán.",
          "keys": [
            "Hoá đơn đầu ra"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Article nine of Decree two five four: a sales invoice is made when ownership or use passes to the buyer.",
          "sub": "Điều 9 Nghị định 254: hoá đơn bán hàng lập khi chuyển giao quyền sở hữu hoặc quyền sử dụng.",
          "keys": [
            "chuyển giao quyền sở hữu"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Whether it's been paid or not.",
          "sub": "Không phân biệt đã thu tiền hay chưa.",
          "keys": [
            "Không phân biệt"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Tư · bàn kế toán",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "lan",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đơn từ 5 triệu, trả tiền mặt cho nhanh",
          "why": "Hàng mua từ 5 triệu đồng trở lên cần chứng từ thanh toán không dùng tiền mặt mới được khấu trừ thuế đầu vào.",
          "rule": "Từ 5 triệu: chuyển khoản"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Oh, and I paid cash. The order was over five million, but cash is faster!",
          "sub": "À, em trả tiền mặt. Đơn hơn 5 triệu, nhưng tiền mặt cho nhanh!",
          "pose": "thumb",
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
          "say": "From five million dong, you need non cash payment proof to deduct input VAT.",
          "sub": "Từ 5 triệu đồng trở lên, cần chứng từ thanh toán không dùng tiền mặt mới được khấu trừ.",
          "keys": [
            "không dùng tiền mặt"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Làm lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Bank transfer this time, with a clear note. Lan gets the bank slip too.",
          "sub": "Lần này chuyển khoản, ghi rõ nội dung. Gửi Lan cả chứng từ ngân hàng.",
          "phase": "redo",
          "pose": "give",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Fast today, costly later. Transfer first, then relax.",
          "sub": "Nhanh hôm nay, thiệt về sau. Chuyển khoản trước, yên tâm sau.",
          "phase": "redo",
          "keys": [
            "Chuyển khoản trước"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p7,p16"
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
            "id": "e-6",
            "t": "text",
            "text": "Từ 5 triệu → chuyển khoản",
            "x": 7932,
            "y": 640,
            "size": 50,
            "at": "l1:five million",
            "color": "accent",
            "hl": [
              {
                "text": "5 triệu",
                "at": "l1:five million"
              }
            ]
          },
          {
            "id": "e-7",
            "t": "text",
            "text": "→ Bài 2: kiểm 5 bước, tra cứu",
            "x": 8832,
            "y": 660,
            "size": 44,
            "at": "l1:five steps",
            "hl": [
              {
                "text": "tra cứu",
                "at": "l1:lookup"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Điều 9 Nghị định 254/2026 (theo Thư viện Pháp luật, 12/7/2026); Luật Thuế GTGT 48/2024/QH15",
            "x": 7932,
            "y": 730,
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
          "say": "From five million, transfer. Then check the invoice in five steps, with a lookup on the tax system.",
          "sub": "Từ 5 triệu: chuyển khoản. Rồi kiểm hoá đơn năm bước, gồm tra cứu trên hệ thống thuế.",
          "keys": [
            "năm bước"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Hoá đơn về rồi. Nếu lập sai thì sao?",
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
          "say": "The invoice has arrived. But what if it was made wrong?",
          "sub": "Hoá đơn về rồi. Nhưng nếu lập sai thì sao?",
          "keys": [
            "lập sai"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p8"
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
            "text": "④ Thứ Năm · Hoá đơn lập sai",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Lan"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "magnifying-glass-tilted-left",
                "page-facing-up"
              ]
            },
            "at": "l1:spots",
            "caption": "Thứ Năm · hoá đơn mua vào",
            "icon": "magnifying-glass-tilted-left"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "Thiếu tên phường → huỷ?",
            "x": 60,
            "y": 1255,
            "size": 50,
            "at": "l3:ward",
            "color": "coral"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "Không. Chỉ sai tên, địa chỉ:",
            "x": 60,
            "y": 1350,
            "size": 48,
            "at": "l5:only",
            "hl": [
              {
                "text": "Không",
                "at": "l4"
              }
            ]
          },
          {
            "id": "f-a2",
            "t": "text",
            "text": "người bán thông báo",
            "x": 100,
            "y": 1430,
            "size": 46,
            "at": "l5:notice"
          },
          {
            "id": "f-a3",
            "t": "text",
            "text": "Mẫu 04/SS-HĐĐT",
            "x": 100,
            "y": 1510,
            "size": 56,
            "at": "l6:Form",
            "color": "accent",
            "hl": [
              {
                "text": "04/SS-HĐĐT",
                "at": "l6:zero four"
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
          "say": "Fourth stop: Thursday. Lan spots something odd on a purchase invoice.",
          "sub": "Chặng bốn: thứ Năm. Lan phát hiện điều lạ trên một hoá đơn mua vào."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Everything is right, except our address. The ward name is missing! Should they cancel it?",
          "sub": "Mọi thứ đúng hết, trừ địa chỉ: thiếu tên phường! Có phải bắt huỷ không ạ?",
          "face": "worried",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Think about it. Does a missing ward name need a brand new invoice?",
          "sub": "Thử nghĩ xem. Thiếu tên phường có cần lập hoá đơn mới không?",
          "keys": [
            "Thử nghĩ xem"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No.",
          "sub": "Không.",
          "wait": 1000
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Under the guide on Circular ninety one: wrong only in name or address, the seller just sends a notice.",
          "sub": "Theo hướng dẫn về Thông tư 91/2026: chỉ sai tên, địa chỉ thì người bán thông báo, không lập lại.",
          "keys": [
            "không lập lại"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "That's Form zero four, sent to the tax office.",
          "sub": "Đó là Mẫu 04/SS-HĐĐT, gửi cơ quan thuế.",
          "keys": [
            "Mẫu 04/SS-HĐĐT"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Hoá đơn chỉ sai địa chỉ",
        "wrong": "Bắt huỷ, lập hoá đơn mới",
        "right": "Người bán thông báo, gửi Mẫu 04/SS-HĐĐT",
        "wrongIllus": "wastebasket",
        "rightIllus": "envelope-with-arrow"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wrong address? Cancel and reissue? No.",
          "sub": "Sai địa chỉ mà bắt huỷ, lập mới? Sai.",
          "keys": [
            "huỷ, lập mới"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The seller just sends Form zero four.",
          "sub": "Người bán chỉ gửi Mẫu 04/SS-HĐĐT.",
          "keys": [
            "Mẫu 04/SS-HĐĐT"
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
            "id": "f-b",
            "t": "text",
            "text": "Sai MST, tiền, thuế suất, hàng:",
            "x": 60,
            "y": 1610,
            "size": 46,
            "at": "l1:tax code",
            "color": "coral"
          },
          {
            "id": "f-b2",
            "t": "text",
            "text": "điều chỉnh hoặc thay thế",
            "x": 100,
            "y": 1685,
            "size": 48,
            "at": "l1:adjusting",
            "color": "accent",
            "hl": [
              {
                "text": "điều chỉnh",
                "at": "l1:adjusting"
              }
            ]
          },
          {
            "id": "f-b3",
            "t": "text",
            "text": "+ văn bản thoả thuận",
            "x": 100,
            "y": 1755,
            "size": 42,
            "at": "l2:agreement"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Phân loại lỗi trước, sửa sau",
            "x": 960,
            "y": 1750,
            "size": 46,
            "at": "l3:Sort",
            "hl": [
              {
                "text": "Phân loại lỗi",
                "at": "l3:Sort"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: hướng dẫn xử lý hoá đơn sai sót theo Thông tư 91/2026/TT-BTC (Thư viện Pháp luật, 08/7/2026)",
            "x": 60,
            "y": 1825,
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
          "say": "But a wrong tax code, amount, tax rate, tax or goods? That needs an adjusting or replacement invoice.",
          "sub": "Còn sai mã số thuế, số tiền, thuế suất, tiền thuế, hàng hoá: lập hoá đơn điều chỉnh hoặc thay thế.",
          "keys": [
            "điều chỉnh hoặc thay thế"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Usually with a written agreement between the two sides.",
          "sub": "Thường kèm văn bản thoả thuận giữa hai bên."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Like a doctor: diagnose, then prescribe. Sort the error first, then pick the fix.",
          "sub": "Như bác sĩ: khám trước, kê đơn sau. Phân loại lỗi trước, chọn cách sửa sau.",
          "keys": [
            "Phân loại lỗi trước"
          ]
        }
      ],
      "ref": "p8,p10"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Sáu sáng · Rủi ro",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "ghost",
                "money-with-wings"
              ]
            },
            "at": "l1:supplier",
            "caption": "Thứ Sáu · 9:00 · nhà cung cấp lạ",
            "icon": "ghost"
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "“Ghi hoá đơn theo ý mình”",
            "x": 2028,
            "y": 1255,
            "size": 48,
            "at": "l2:any way",
            "color": "coral"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "NĐ 254: dùng hoá đơn",
            "x": 2028,
            "y": 1345,
            "size": 48,
            "at": "l4:Decree"
          },
          {
            "id": "g-1b",
            "t": "text",
            "text": "không hợp pháp",
            "x": 2068,
            "y": 1420,
            "size": 52,
            "at": "l4:illegal",
            "color": "accent",
            "hl": [
              {
                "text": "không hợp pháp",
                "at": "l4:illegal"
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
          "say": "Fifth stop: Friday morning. Dũng has found an amazing new supplier.",
          "sub": "Chặng năm: sáng thứ Sáu. Dũng tìm được nhà cung cấp mới “xịn”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Super cheap! Never heard of them, but they'll write the invoice any way we like!",
          "sub": "Rẻ cực! Chưa nghe tên bao giờ, mà họ còn ghi hoá đơn theo ý mình!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Any way we like? That sounds risky.",
          "sub": "Theo ý mình? Nghe rủi ro quá.",
          "face": "worried",
          "pose": "think"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lan's nose is sharp. Under Decree two five four, some uses of invoices are illegal.",
          "sub": "Lan thính mũi đấy. Theo Nghị định 254, có những cách dùng hoá đơn không hợp pháp.",
          "keys": [
            "không hợp pháp"
          ]
        }
      ],
      "ref": "p11"
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
          }
        ],
        "items": [
          {
            "id": "g-2",
            "t": "text",
            "text": "• Hoá đơn khống",
            "x": 2028,
            "y": 1510,
            "size": 48,
            "at": "l1:Fake",
            "hl": [
              {
                "text": "khống",
                "at": "l1:Fake"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "• Sai giá trị thực tế",
            "x": 2028,
            "y": 1585,
            "size": 48,
            "at": "l1:real value"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "• Tẩy xoá sai quy định",
            "x": 2028,
            "y": 1660,
            "size": 48,
            "at": "l1:erased"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Tra danh sách doanh nghiệp rủi ro",
            "x": 2928,
            "y": 1740,
            "size": 42,
            "at": "l4:list",
            "hl": [
              {
                "text": "doanh nghiệp rủi ro",
                "at": "l4:risky"
              }
            ]
          },
          {
            "id": "g-gh",
            "t": "illus",
            "name": "ghost",
            "x": 3568,
            "y": 1720,
            "size": 80,
            "at": "l5:ghost"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Đừng để nó vào sổ",
            "x": 2928,
            "y": 1805,
            "size": 48,
            "at": "l5:books",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fake invoices for deals that never happened, invoices hiding the real value, invoices erased against the rules.",
          "sub": "Hoá đơn khống, hoá đơn không đúng giá trị thực tế, hoá đơn tẩy xoá sai quy định.",
          "keys": [
            "Hoá đơn khống"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The tax office also has high risk criteria, and a list of risky or violating businesses to look up.",
          "sub": "Cơ quan thuế còn có tiêu chí rủi ro cao, danh sách doanh nghiệp rủi ro, vi phạm để tra.",
          "keys": [
            "danh sách doanh nghiệp rủi ro"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A risky invoice is a ghost at the dinner table. Don't let it into the books.",
          "sub": "Hoá đơn rủi ro như ma ngồi mâm cơm. Đừng để nó vào sổ.",
          "keys": [
            "Đừng để nó vào sổ"
          ]
        }
      ],
      "ref": "p11"
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
            "text": "⑥ Thứ Sáu chiều · Lưu trữ",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:afternoon"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 1220,
            "w": 720,
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
                  "pose": "hold"
                }
              ],
              "props": [
                "file-cabinet",
                "camera-with-flash"
              ]
            },
            "at": "l1:cabinet",
            "caption": "Thứ Sáu · 15:00 · tủ lưu trữ",
            "icon": "file-cabinet"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Điều 41: đầy đủ, an toàn",
            "x": 3996,
            "y": 1255,
            "size": 50,
            "at": "l3:forty one",
            "hl": [
              {
                "text": "đầy đủ, an toàn",
                "at": "l3:complete"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Vào lưu trữ trong 12 tháng",
            "x": 3996,
            "y": 1345,
            "size": 48,
            "at": "l4:twelve",
            "color": "accent",
            "hl": [
              {
                "text": "12 tháng",
                "at": "l4:twelve months"
              }
            ]
          },
          {
            "id": "h-2b",
            "t": "text",
            "text": "sau khi hết kỳ kế toán năm",
            "x": 4036,
            "y": 1420,
            "size": 42,
            "at": "l4:annual"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Điều 41 Luật Kế toán 2015",
            "x": 3996,
            "y": 1500,
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
          "say": "Sixth stop: Friday afternoon, at the archive cabinet.",
          "sub": "Chặng sáu: chiều thứ Sáu, bên tủ lưu trữ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Scan each voucher the day you record it. Future you will thank me.",
          "sub": "Ghi sổ ngày nào, quét chứng từ ngày đó. Sau này em sẽ cảm ơn chị.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article forty one of the Accounting Law: keep documents complete and safe.",
          "sub": "Điều 41 Luật Kế toán: tài liệu kế toán phải được bảo quản đầy đủ, an toàn.",
          "keys": [
            "đầy đủ, an toàn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Put them into storage within twelve months after the annual accounting period ends.",
          "sub": "Đưa vào lưu trữ trong 12 tháng kể từ khi kết thúc kỳ kế toán năm.",
          "keys": [
            "12 tháng"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s18",
      "module": "BRK-03",
      "data": {
        "value": 10,
        "suffix": " năm",
        "label": "tối thiểu, với chứng từ dùng trực tiếp ghi sổ",
        "illus": "file-cabinet"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And vouchers used directly for the books? How long do they stay?",
          "sub": "Còn chứng từ dùng trực tiếp ghi sổ, giữ bao lâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "At least ten years.",
          "sub": "Tối thiểu 10 năm.",
          "keys": [
            "10 năm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p12"
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
            "id": "h-3",
            "t": "text",
            "text": "Mất, huỷ hoại → biên bản",
            "x": 3996,
            "y": 1610,
            "size": 48,
            "at": "l1:record",
            "color": "coral",
            "hl": [
              {
                "text": "biên bản",
                "at": "l1:written record"
              }
            ]
          },
          {
            "id": "h-3b",
            "t": "text",
            "text": "+ bản sao chụp / xác nhận",
            "x": 4036,
            "y": 1685,
            "size": 42,
            "at": "l1:photocopies"
          },
          {
            "id": "h-cam",
            "t": "illus",
            "name": "camera-with-flash",
            "x": 3996,
            "y": 1750,
            "size": 80,
            "at": "l4:storage"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Lưu trữ từ ngày ghi sổ",
            "x": 4896,
            "y": 1770,
            "size": 44,
            "at": "l4:recording",
            "color": "accent",
            "hl": [
              {
                "text": "ngày ghi sổ",
                "at": "l4:day of recording"
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
          "say": "Clause two: lost or destroyed documents need a written record, with photocopies or a confirmation.",
          "sub": "Khoản 2: tài liệu bị mất, huỷ hoại phải có biên bản, kèm bản sao chụp hoặc bản xác nhận.",
          "keys": [
            "biên bản"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Good storage starts on the day of recording, not the day of inspection.",
          "sub": "Lưu trữ tốt bắt đầu từ ngày ghi sổ, không phải ngày kiểm tra.",
          "keys": [
            "bắt đầu từ ngày ghi sổ"
          ]
        }
      ],
      "ref": "p13,p14"
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
            "text": "⑦ 17:00 thứ Sáu · Phối hợp",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:five"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "cross",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "writing-hand",
                "receipt"
              ]
            },
            "at": "l1:director",
            "caption": "Thứ Sáu · 17:00 · phòng giám đốc",
            "icon": "office-building"
          },
          {
            "id": "i-q",
            "t": "text",
            "text": "Chứng từ: đâu chỉ kế toán",
            "x": 5964,
            "y": 1255,
            "size": 50,
            "at": "l3:alone",
            "color": "coral",
            "hl": [
              {
                "text": "đâu chỉ kế toán",
                "at": "l3:alone"
              }
            ]
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Mua hàng: hoá đơn, đơn hàng",
            "x": 5964,
            "y": 1345,
            "size": 44,
            "at": "l4:Purchasing"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Kho: phiếu nhập, xuất",
            "x": 5964,
            "y": 1415,
            "size": 44,
            "at": "l4:warehouse"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Duyệt chi: ký phiếu chi",
            "x": 5964,
            "y": 1485,
            "size": 44,
            "at": "l4:slips+600"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: Friday, five p.m. Meet Cô Hoa, the director who approves spending.",
          "sub": "Chặng bảy: năm giờ chiều thứ Sáu. Đây là cô Hoa, giám đốc, người duyệt chi.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Lan, why are papers always missing? Who makes all these vouchers anyway?",
          "sub": "Lan này, sao giấy tờ cứ thiếu hoài? Mà chứng từ ai làm ra vậy?",
          "face": "thinking",
          "pose": "cross"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Vouchers aren't made by accounting alone.",
          "sub": "Chứng từ đâu chỉ do kế toán tạo ra.",
          "keys": [
            "đâu chỉ do kế toán"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Purchasing brings input invoices and orders. The warehouse makes stock slips.",
          "sub": "Mua hàng mang về hoá đơn đầu vào, đơn hàng. Kho lập phiếu nhập, xuất."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s21",
      "module": "BRK-06",
      "data": {
        "title": "Một chứng từ, nhiều bàn tay",
        "items": [
          {
            "illus": "shopping-cart",
            "text": "Mua hàng"
          },
          {
            "illus": "package",
            "text": "Kho"
          },
          {
            "illus": "writing-hand",
            "text": "Người duyệt chi"
          },
          {
            "illus": "ledger",
            "text": "Kế toán"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Purchasing, warehouse, the approver who signs, accounting.",
          "sub": "Mua hàng, kho, người duyệt chi ký phiếu chi theo Điều 19, kế toán."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One voucher, many hands.",
          "sub": "Một chứng từ, nhiều bàn tay.",
          "keys": [
            "nhiều bàn tay"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p15"
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
            "at": "l3",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-k",
            "t": "text",
            "text": "Nói rõ: cần gì, khi nào",
            "x": 5964,
            "y": 1560,
            "size": 44,
            "at": "l1:clearly",
            "color": "accent",
            "hl": [
              {
                "text": "Nói rõ",
                "at": "l1:clearly"
              }
            ]
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1690,
            "w": 40,
            "h": 40,
            "at": "l4:name",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1674,
            "size": 50,
            "at": "l4:name+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Đúng tên, MST, địa chỉ",
            "x": 6026,
            "y": 1680,
            "size": 40,
            "at": "l4:name+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1752,
            "w": 40,
            "h": 40,
            "at": "l5:five",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1736,
            "size": 50,
            "at": "l5:five+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Từ 5 triệu: chuyển khoản",
            "x": 6026,
            "y": 1742,
            "size": 40,
            "at": "l5:five+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1814,
            "w": 40,
            "h": 40,
            "at": "l6:sign",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1798,
            "size": 50,
            "at": "l6:sign+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Điền đủ mới ký phiếu chi",
            "x": 6026,
            "y": 1804,
            "size": 40,
            "at": "l6:sign+200"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Danh sách rút từ các bài trong chuỗi",
            "x": 6864,
            "y": 1825,
            "size": 26,
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
          "say": "A good junior says clearly what papers she needs, and when. Not only after they go missing.",
          "sub": "Kế toán năm đầu làm tốt là nói rõ cần chứng từ gì, gửi lúc nào, thay vì chỉ nhắc khi đã thiếu.",
          "keys": [
            "nói rõ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Then I'll send every team a short list.",
          "sub": "Vậy em gửi các phòng một danh sách ngắn.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "One: invoices with our correct name, tax code and address.",
          "sub": "Một: hoá đơn ghi đúng tên, mã số thuế, địa chỉ công ty."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Two: purchases from five million, by bank transfer.",
          "sub": "Hai: khoản mua từ 5 triệu đồng trở lên nên chuyển khoản."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "lan",
          "say": "Three: sign a payment slip only when it's fully filled in.",
          "sub": "Ba: phiếu chi chỉ ký khi đã điền đủ nội dung."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "hoa",
          "say": "Good. Send it today. I'll back you up.",
          "sub": "Được. Gửi ngay hôm nay. Cô đứng sau em.",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "ref": "p15,p16"
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
            "text": "Thứ Hai tuần sau · 8:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
                "check-mark-button"
              ]
            },
            "at": "l1:desk",
            "caption": "Thứ Hai tuần sau · 8:00 · vẫn bàn ấy",
            "icon": "page-facing-up"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Đầu sổ: NĐ 254, TT 91",
            "x": 7932,
            "y": 1255,
            "size": 40,
            "at": "l2:page one",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Tra cứu trước · quét trong ngày",
            "x": 7932,
            "y": 1330,
            "size": 42,
            "at": "l2:Scan"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Giấy trắng mực đen”",
            "x": 7932,
            "y": 1420,
            "size": 56,
            "at": "l3:white",
            "color": "accent",
            "hl": [
              {
                "text": "mực đen",
                "at": "l3:ink"
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
          "say": "Next Monday, eight a.m. Same desk. A brand new stack.",
          "sub": "Thứ Hai tuần sau, tám giờ sáng. Vẫn bàn ấy. Một xấp giấy mới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Rule numbers on page one. Look up first. Scan on the day!",
          "sub": "Số hiệu văn bản ghi đầu sổ. Tra cứu trước. Quét trong ngày!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "White paper, black ink. Now Lan reads the ink before she trusts the paper.",
          "sub": "“Giấy trắng mực đen.” Giờ Lan đọc kỹ mực rồi mới tin tờ giấy.",
          "keys": [
            "Giấy trắng mực đen"
          ]
        }
      ],
      "ref": "outro"
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
            "at": "l1:So",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:evidence",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:store",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5496,
            "y": 40,
            "at": "l1:evidence"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7464,
            "y": 40,
            "at": "l2"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1560,
            "y": 1130,
            "at": "l3"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 5496,
            "y": 1130,
            "at": "l3:store"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Việc làm ngay: ghi số văn bản",
            "x": 7932,
            "y": 1520,
            "size": 44,
            "at": "l4:Today",
            "hl": [
              {
                "text": "Việc làm ngay",
                "at": "l4:Today"
              }
            ]
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "→ Bài 1: chứng từ hợp lệ",
            "x": 7932,
            "y": 1595,
            "size": 44,
            "at": "l4:valid"
          },
          {
            "id": "j-src1",
            "t": "text",
            "text": "Nhân vật là minh hoạ. Bài để tham khảo khi học.",
            "x": 7932,
            "y": 1750,
            "size": 26,
            "at": "l5",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-src2",
            "t": "text",
            "text": "Quy định có thể thay đổi — khi áp dụng, kiểm lại với cơ quan thuế hoặc chuyên gia.",
            "x": 7932,
            "y": 1790,
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
          "say": "So: every transaction gets one voucher. It is the evidence behind the books.",
          "sub": "Tóm lại: mỗi nghiệp vụ một chứng từ, là bằng chứng của sổ sách.",
          "keys": [
            "bằng chứng của sổ sách"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Know the rules in force: Decree two five four, from July twenty twenty six.",
          "sub": "Biết văn bản đang áp dụng: Nghị định 254/2026, từ 01/7/2026."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sort invoice errors before fixing them. And store from day one.",
          "sub": "Phân loại lỗi trước khi sửa. Và lưu trữ từ ngày đầu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Today: write the current rule numbers on page one of your notebook. Then start with valid vouchers.",
          "sub": "Việc làm ngay: ghi số hiệu văn bản đang áp dụng lên đầu sổ tay, rồi học bài chứng từ hợp lệ.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Characters are illustrations. Rules may change, so check with the tax office or an expert.",
          "sub": "Nhân vật là minh hoạ. Quy định có thể thay đổi, khi áp dụng hãy kiểm lại với cơ quan thuế hoặc chuyên gia.",
          "keys": [
            "kiểm lại"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s25",
      "module": "QUIZ-01",
      "data": {
        "q": "If only the address on an invoice is wrong, must a new invoice be issued?",
        "options": [
          "No, the seller sends a notice and does not need to reissue it",
          "Yes, the seller must cancel it and issue a fresh invoice",
          "Yes, and the buyer must also issue its own invoice in return"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "envelope-with-arrow",
        "why": "Chỉ sai địa chỉ: người bán thông báo, gửi Mẫu 04/SS-HĐĐT."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "If only the address on an invoice is wrong, must a new invoice be issued?",
          "sub": "Nếu hoá đơn chỉ sai địa chỉ, có phải lập hoá đơn mới không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No, the seller sends a notice and does not need to reissue it.",
          "sub": "Không, người bán gửi thông báo, không phải lập lại hoá đơn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Sort the error first, then choose the fix.",
          "sub": "Phân loại lỗi trước, chọn cách sửa sau."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[18]"
    },
    {
      "id": "s26",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Hoá đơn, chứng từ cho kế toán mới"
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
  "hook": "HOOK-23",
  "anchor": {
    "type": "object",
    "value": "xấp hoá đơn, phiếu chi “xem giúp cho chuẩn”",
    "ref": "intro"
  },
  "notes": "#145 bài MỚI (bài tổng, chuỗi junior-accountants-invoices) theo hạt nhân (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): cận xấp hoá đơn, phiếu chi “xem giúp cho chuẩn” (intro) → kéo ra thấy Lan → “Giấy trắng mực đen”. Dòng thời gian: TUẦN ĐẦU ĐI LÀM của Lan: T2 chiều chứng từ là bằng chứng (p1, p2) → T3 tài liệu 2025, văn bản đang áp dụng (p3–p6; BRK-08) → T4 hoá đơn đầu vào, Điều 9 (p7), “Khoan đã!” Dũng trả tiền mặt đơn từ 5 triệu → BRK-07 rehook → T5 thiếu tên phường, “Thử nghĩ xem”, Mẫu 04/SS-HĐĐT (p8–p10; BRK-04) → T6 sáng nhà cung cấp lạ, hoá đơn không hợp pháp (p11) → T6 chiều lưu trữ Điều 41, 12 tháng, 10 năm, biên bản (p12–p14; BRK-03) → 17:00 T6 cô Hoa, phối hợp phòng ban, danh sách ngắn (p15, p16; BRK-06) → T2 tuần sau khép vòng (outro) → tóm tắt + lưu ý #133. Nhân vật: Lan (chính), chị Thảo, Dũng, cô Hoa. Số chỉ từ bài: Điều 16, 18, 19, 41 Luật Kế toán 2015 (88/2015/QH13), NĐ 254/2026 (30/6/2026, 01/7/2026), NĐ 123/2020, NĐ 70/2025, TT 91/2026, Luật QLT 108/2025 (10/12/2025), 38/2019, Điều 26 (01/01/2026), Luật GTGT 48/2024, 5 triệu, Mẫu 04/SS-HĐĐT, 12 tháng, 10 năm. Câu đố questions[18].",
  "loop": {
    "open": "s01",
    "close": "s23"
  }
};
