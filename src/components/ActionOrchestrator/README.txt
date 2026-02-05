
```

---

## 📄 7. README.txt (Documentation)
```
╔══════════════════════════════════════════════════════════════════╗
║          ACTION ORCHESTRATOR - HƯỚNG DẪN SỬ DỤNG                 ║
╚══════════════════════════════════════════════════════════════════╝

📋 MỤC LỤC
═══════════════════════════════════════════════════════════════════
1. GIỚI THIỆU
2. CẤU TRÚC THƯ MỤC
3. CÁCH SỬ DỤNG CƠ BẢN
4. CÁC LOẠI ACTION
   4.1. typingText
   4.2. countdown
   4.3. fadeIn / fadeOut
   4.4. zoom
   4.5. slide
   4.6. static
   4.7. actionCssClass / actionCssId
5. CSS OVERRIDES VÀ STYLING
6. TIMELINE VÀ FRAME CONTROL
7. THÊM ACTION MỚI
8. TROUBLESHOOTING

═══════════════════════════════════════════════════════════════════
1. GIỚI THIỆU
═══════════════════════════════════════════════════════════════════

ActionOrchestrator là file trung gian điều hành tất cả các actions
trong video Remotion. Thay vì truyền từng prop riêng lẻ, hệ thống
sử dụng data object thống nhất để dễ mở rộng.

Ưu điểm:
✅ Dễ thêm key mới mà không cần sửa file trung gian
✅ Code gọn gàng, dễ bảo trì
✅ Mỗi action là 1 file riêng, dễ debug
✅ CSS overrides tích lũy theo timeline

═══════════════════════════════════════════════════════════════════
2. CẤU TRÚC THƯ MỤC
═══════════════════════════════════════════════════════════════════

src/Components/ActionOrchestrator/
├── ActionOrchestrator.jsx       // File trung gian chính
├── README.txt                   // File này
├── actions/                     // Các action components
│   ├── TypingTextAction.jsx
│   ├── CountdownAction.jsx
│   ├── FadeInAction.jsx
│   ├── FadeOutAction.jsx
│   ├── ZoomAction.jsx
│   ├── SlideAction.jsx
│   └── StaticAction.jsx
├── utils/                       // Utilities
│   ├── cssOverrideManager.js   // Xử lý CSS
│   └── actionRegistry.js       // Registry mapping
└── components/                  // Shared components
    └── CountDown.jsx

═══════════════════════════════════════════════════════════════════
3. CÁCH SỬ DỤNG CƠ BẢN
═══════════════════════════════════════════════════════════════════

import ActionOrchestrator from "./Components/ActionOrchestrator/ActionOrchestrator";

const codeFrame = [
  {
    startFrame: 0,
    endFrame: 90,
    text: "Hello World",
    styleCss: { fontSize: "60px" },
    action: {
      cmd: "typingText",
      sound: true,
      typingSpeed: "auto"
    }
  }
];

<ActionOrchestrator codeFrame={codeFrame} textEnd="The End" />

═══════════════════════════════════════════════════════════════════
4. CÁC LOẠI ACTION
═══════════════════════════════════════════════════════════════════

────────────────────────────────────────────────────────────────────
4.1. typingText - Typing Animation
────────────────────────────────────────────────────────────────────

✅ VÍ DỤ 1: Typing text đơn giản
─────────────────────────────────
{
  startFrame: 0,
  endFrame: 90,
  text: "Hello World!",
  action: {
    cmd: "typingText",
    sound: true,           // Bật âm thanh typing
    noTyping: false,       // false = có hiệu ứng typing
    typingSpeed: "auto"    // "auto" | "slow" | "fast"
  }
}

✅ VÍ DỤ 2: Custom text trong action
─────────────────────────────────────
{
  startFrame: 0,
  endFrame: 90,
  action: {
    cmd: "typingText",
    text: "This text overrides item.text",  // ✅ Ưu tiên
    styleCss: {
      fontSize: "72px",
      color: "#FF0050"
    },
    sound: false
  }
}

✅ VÍ DỤ 3: Với âm thanh riêng
──────────────────────────────
{
  startFrame: 0,
  endFrame: 120,
  text: "Listen to this!",
  action: {
    cmd: "typingText",
    sound: true,
    otherSoundList: [
      {
        startFrame: 30,
        soundSource: "VocabDaily_hello",
        volume: 1
      }
    ]
  }
}

KEYS CÓ THỂ DÙNG:
─────────────────
- text: string               // Text hiển thị (override item.text)
- styleCss: object           // CSS inline cho action
- sound: boolean             // Bật/tắt âm typing
- noTyping: boolean          // true = hiện toàn bộ text ngay
- typingSpeed: string        // "auto" | "slow" | "fast"
- otherSoundList: array      // Danh sách âm thanh riêng

────────────────────────────────────────────────────────────────────
4.2. countdown - Countdown Timer
────────────────────────────────────────────────────────────────────

✅ VÍ DỤ 1: Countdown cơ bản (3-2-1)
────────────────────────────────────
{
  startFrame: 0,
  endFrame: 90,
  text: null,                // Không cần text
  action: {
    cmd: "countdown",
    countDownFrom: 3,        // Đếm từ 3
    colorTheme: "red",       // "red" | "blue" | "green" | "purple" | "orange"
    zIndex: 100
  }
}

✅ VÍ DỤ 2: Countdown 5 giây với theme xanh
───────────────────────────────────────────
{
  startFrame: 60,
  endFrame: 210,            // 150 frames = 5 giây @ 30fps
  action: {
    cmd: "countdown",
    countDownFrom: 5,
    colorTheme: "green",
    styleCss: {
      fontSize: "300px"     // Custom size
    }
  }
}

KEYS CÓ THỂ DÙNG:
─────────────────
- countDownFrom: number      // Số bắt đầu đếm
- colorTheme: string         // Màu sắc theme
- zIndex: number             // Z-index layer
- styleCss: object           // CSS override

────────────────────────────────────────────────────────────────────
4.3. fadeIn / fadeOut - Fade Effects
────────────────────────────────────────────────────────────────────

✅ VÍ DỤ 1: Fade In trong 1 giây
────────────────────────────────
{
  startFrame: 0,
  endFrame: 90,
  text: "Fade in slowly...",
  action: {
    cmd: "fadeIn",
    fadeDuration: 30,        // 30 frames = 1 giây @ 30fps
    styleCss: {
      fontSize: "48px"
    }
  }
}

✅ VÍ DỤ 2: Fade Out ở cuối
───────────────────────────
{
  startFrame: 60,
  endFrame: 150,
  text: "Disappearing...",
  action: {
    cmd: "fadeOut",
    fadeDuration: 30
  }
}

KEYS CÓ THỂ DÙNG:
─────────────────
- text: string               // Text hiển thị
- fadeDuration: number       // Thời gian fade (frames)
- styleCss: object           // CSS inline

────────────────────────────────────────────────────────────────────
4.4. zoom - Zoom Animation
────────────────────────────────────────────────────────────────────

✅ VÍ DỤ: Zoom in/out liên tục
──────────────────────────────
{
  startFrame: 0,
  endFrame: 120,
  text: "Zoom effect!",
  action: {
    cmd: "zoom",
    zoomAmount: 0.3,         // 30% scale variation
    styleCss: {
      fontSize: "64px"
    }
  }
}

KEYS CÓ THỂ DÙNG:
─────────────────
- text: string               // Text hiển thị
- zoomAmount: number         // Mức độ zoom (0.1 - 1.0)
- styleCss: object           // CSS inline

────────────────────────────────────────────────────────────────────
4.5. slide - Slide In Animation
────────────────────────────────────────────────────────────────────

✅ VÍ DỤ 1: Slide từ trái
──────────────────────────
{
  startFrame: 0,
  endFrame: 90,
  text: "Sliding in!",
  action: {
    cmd: "slide",
    direction: "left",       // "left" | "right" | "top" | "bottom"
    slideDuration: 30
  }
}

✅ VÍ DỤ 2: Slide từ trên xuống
───────────────────────────────
{
  startFrame: 30,
  endFrame: 90,
  text: "Coming from top!",
  action: {
    cmd: "slide",
    direction: "top",
    slideDuration: 20
  }
}

KEYS CÓ THỂ DÙNG:
─────────────────
- text: string               // Text hiển thị
- direction: string          // Hướng slide
- slideDuration: number      // Thời gian slide (frames)
- styleCss: object           // CSS inline

────────────────────────────────────────────────────────────────────
4.6. static - Static Display
────────────────────────────────────────────────────────────────────

✅ VÍ DỤ: Hiển thị tĩnh không animation
────────────────────────────────────────
{
  startFrame: 0,
  endFrame: 60,
  text: "Static text",
  action: {
    cmd: "static",
    styleCss: {
      fontSize: "48px",
      color: "#FFD700"
    }
  }
}

────────────────────────────────────────────────────────────────────
4.7. actionCssClass / actionCssId - CSS Overrides
────────────────────────────────────────────────────────────────────

✅ VÍ DỤ 1: Ẩn element theo ID
──────────────────────────────
{
  startFrame: 90,
  endFrame: 90,
  action: {
    cmd: "actionCssId",
    toID: "textA001",        // Target ID
    cssMode: "replace",      // "replace" | "add"
    css: {
      display: "none"        // Ẩn element
    }
  }
}

✅ VÍ DỤ 2: Đổi màu theo Class
──────────────────────────────
{
  startFrame: 60,
  endFrame: 60,
  action: {
    cmd: "actionCssClass",
    toClass: "highlight",    // Target class
    cssMode: "add",          // Merge với CSS hiện tại
    css: {
      color: "#FF0050",
      fontWeight: "bold"
    }
  }
}

✅ VÍ DỤ 3: Kết hợp với ClassMark/IDMark
────────────────────────────────────────
// Bước 1: Đánh dấu element
{
  startFrame: 0,
  endFrame: 120,
  text: "Target element",
  ClassMark: "myElement",    // ✅ Đánh dấu class
  IDMark: "element001",      // ✅ Đánh dấu ID
  action: {
    cmd: "typingText"
  }
}

// Bước 2: Thay đổi CSS sau đó
{
  startFrame: 90,
  endFrame: 90,
  action: {
    cmd: "actionCssId",
    toID: "element001",      // ✅ Target ID đã đánh dấu
    css: {
      transform: "scale(1.5)",
      color: "#00FF00"
    }
  }
}

KEYS CÓ THỂ DÙNG:
─────────────────
- toID: string               // Target element ID
- toClass: string            // Target element class
- cssMode: string            // "replace" | "add"
- css: object                // CSS properties

LƯU Ý QUAN TRỌNG:
─────────────────
- actionCssClass/actionCssId KHÔNG render element
- Chỉ thay đổi CSS của elements khác
- CSS overrides tích lũy theo timeline
- Action sau ghi đè action trước

═══════════════════════════════════════════════════════════════════
5. CSS OVERRIDES VÀ STYLING
═══════════════════════════════════════════════════════════════════

THỨ TỰ ƯU TIÊN CSS (từ thấp đến cao):
──────────────────────────────────────
1. defaultTextStyle            (Từ ActionOrchestrator)
2. item.styleCss               (CSS ở cấp item)
3. action.styleCss             (CSS ở cấp action)
4. action.css                  (Inline CSS trong action)
5. CSS Override by Class       (Từ actionCssClass)
6. CSS Override by ID          (Từ actionCssId) ← CAO NHẤT

✅ VÍ DỤ: Styling đa cấp
────────────────────────
{
  startFrame: 0,
  endFrame: 120,
  text: "Styled text",
  styleCss: {                // Item-level CSS
    fontSize: "48px",
    color: "white"
  },
  ClassMark: "textBox",      // Đánh dấu để override sau
  action: {
    cmd: "typingText",
    styleCss: {              // Action-level CSS (ghi đè item)
      fontSize: "64px",      // ✅ Override
      fontWeight: "bold"     // ✅ Thêm mới
    }
  }
}

// CSS Override sau đó
{
  startFrame: 60,
  endFrame: 60,
  action: {
    cmd: "actionCssClass",
    toClass: "textBox",
    css: {
      color: "#FF0050",      // ✅ Override màu
      fontSize: "80px"       // ✅ Override size lần nữa
    }
  }
}

═══════════════════════════════════════════════════════════════════
6. TIMELINE VÀ FRAME CONTROL
═══════════════════════════════════════════════════════════════════

MỖI ACTION CÓ CÁC FRAME CONTROLS:
──────────────────────────────────
- ToEndFrame: boolean          // Kéo dài đến cuối video
- ChangeStartFrame: number     // Offset từ item.startFrame
- ChangeEndFrame: number       // Offset từ item.endFrame

✅ VÍ DỤ 1: Action kéo dài đến hết video
────────────────────────────────────────
{
  startFrame: 60,
  endFrame: 120,              // Item kết thúc frame 120
  action: {
    cmd: "static",
    ToEndFrame: true,         // ✅ Nhưng action chạy đến hết
    text: "Always visible"
  }
}

✅ VÍ DỤ 2: Delay action start
──────────────────────────────
{
  startFrame: 0,
  endFrame: 90,
  action: {
    cmd: "fadeIn",
    ChangeStartFrame: 30,     // ✅ Bắt đầu sau item 30 frames (frame 30)
    text: "Delayed start"
  }
}

✅ VÍ DỤ 3: Kết thúc sớm
────────────────────────
{
  startFrame: 0,
  endFrame: 120,
  action: {
    cmd: "typingText",
    ChangeEndFrame: -30,      // ✅ Kết thúc sớm 30 frames (frame 90)
    text: "Early end"
  }
}

═══════════════════════════════════════════════════════════════════
7. THÊM ACTION MỚI
═══════════════════════════════════════════════════════════════════

BƯỚC 1: Tạo Action Component
─────────────────────────────
// src/Components/ActionOrchestrator/actions/MyNewAction.jsx

import React from "react";
import { mergeStyles } from "../utils/cssOverrideManager";

function MyNewAction({ data }) {
  const {
    action,
    item,
    frame,
    actionStartFrame,
    actionEndFrame,
    cssOverrides,
    defaultTextStyle,
    className,
    id,
  } = data;

  // ✅ Implement logic của bạn ở đây
  
  return (
    <div
      className={className}
      id={id}
      style={mergeStyles(action, item, defaultTextStyle, className, id, cssOverrides)}
    >
      {action.text || item.text}
    </div>
  );
}

export default MyNewAction;

BƯỚC 2: Đăng ký trong actionRegistry.js
────────────────────────────────────────
import MyNewAction from "../actions/MyNewAction";

export const ACTION_REGISTRY = {
  // ... existing actions
  myNewCmd: MyNewAction,  // ✅ Thêm vào đây
};

BƯỚC 3: Sử dụng
───────────────
{
  startFrame: 0,
  endFrame: 90,
  action: {
    cmd: "myNewCmd",      // ✅ Sử dụng ngay
    text: "New action!",
    // ... custom keys của bạn
  }
}

═══════════════════════════════════════════════════════════════════
8. TROUBLESHOOTING
═══════════════════════════════════════════════════════════════════

❌ LỖI: "Unknown action cmd"
─────────────────────────────
→ Check actionRegistry.js đã import và đăng ký chưa
→ Kiểm tra typo trong action.cmd

❌ LỖI: CSS không apply
────────────────────────
→ Check thứ tự ưu tiên CSS (ID > Class > action.css)
→ Kiểm tra ClassMark/IDMark đã đúng chưa
→ Log cssOverrides để debug

❌ LỖI: Action không hiển thị
──────────────────────────────
→ Check frame range (startFrame < endFrame)
→ Kiểm tra ToEndFrame/ChangeStartFrame logic
→ Console.log activeActions để debug

❌ LỖI: Render nhiều actions cùng lúc
──────────────────────────────────────
→ Đây là tính năng, không phải bug!
→ Dùng zIndex để control layer order
→ Dùng CSS overrides để ẩn/hiện elements

═══════════════════════════════════════════════════════════════════

📞 HỖ TRỢ:
- Check console logs để debug
- Xem ví dụ trong các action files
- Test với simple cases trước

═══════════════════════════════════════════════════════════════════

# 🎬 VIDEO SEEK - HƯỚNG DẪN CHI TIẾT

## 📖 TỔNG QUAN

Feature này cho phép bạn:
- ✅ Chọn đoạn cụ thể trong video để phát (không cần cắt video riêng)
- ✅ Dễ dàng edit và thử nghiệm các đoạn khác nhau
- ✅ Tiết kiệm dung lượng (không cần tạo nhiều file video)
- ✅ Vẫn chạy mượt, không giật

---

## 🎯 PROPS MỚI

### videoStartFrom
**Type:** `number` (giây)  
**Default:** `0`  
**Mô tả:** Vị trí bắt đầu trong video

### videoDuration
**Type:** `number | null` (giây)  
**Default:** `null`  
**Mô tả:** Độ dài muốn lấy từ videoStartFrom
- `null` = phát đến hết video
- `15` = chỉ lấy 15 giây

---

## 💡 CÁC TRƯỜNG HỢP SỬ DỤNG

### 1. Lấy Đoạn Giữa Video

**Tình huống:** Video dài 5 phút, chỉ muốn lấy đoạn từ 1:30 đến 2:00 (30 giây)

```javascript
{
  cmd: "videoView",
  video: "long_interview.mp4",
  videoStartFrom: 90,      // ⭐ 1:30 = 90 giây
  videoDuration: 30,       // ⭐ Lấy 30 giây (90s → 120s)
  loop: false,
  sound: true
}
```

**Timeline:**
```
Video file: [0s ──────── 90s ▶️▶️▶️ 120s ──────── 300s]
                         ↑           ↑
                    Start here    End here
Play: [90s → 120s] (30 giây)
```

---

### 2. Lấy Từ Giây X Đến Hết Video

**Tình huống:** Chỉ muốn bỏ phần intro, lấy từ giây 15 đến hết

```javascript
{
  cmd: "videoView",
  video: "video_with_intro.mp4",
  videoStartFrom: 15,      // ⭐ Bỏ 15 giây đầu
  videoDuration: null,     // ⭐ null = phát đến hết
  loop: true,
  sound: true
}
```

**Timeline:**
```
Video file: [0s ──────── 15s ▶️▶️▶️▶️▶️▶️▶️▶️▶️▶️▶️ End]
                         ↑
                    Start here
Play: [15s → End]
```

---

### 3. Lấy Nhiều Đoạn Từ Cùng 1 Video

**Tình huống:** Video dài 10 phút, muốn lấy 3 đoạn khác nhau cho 3 scenes

```javascript
const codeFrame = [
  // Scene 1: Giây 30-45
  {
    startFrame: 0,
    endFrame: 450,  // 15 giây × 30fps = 450 frames
    actions: [
      {
        cmd: "videoView",
        video: "full_video.mp4",
        videoStartFrom: 30,
        videoDuration: 15,
        sound: true
      }
    ]
  },
  
  // Scene 2: Giây 120-150
  {
    startFrame: 450,
    endFrame: 1350,  // 30 giây × 30fps = 900 frames
    actions: [
      {
        cmd: "videoView",
        video: "full_video.mp4",
        videoStartFrom: 120,
        videoDuration: 30,
        sound: true
      }
    ]
  },
  
  // Scene 3: Giây 300-330
  {
    startFrame: 1350,
    endFrame: 2250,  // 30 giây × 30fps = 900 frames
    actions: [
      {
        cmd: "videoView",
        video: "full_video.mp4",
        videoStartFrom: 300,
        videoDuration: 30,
        sound: true
      }
    ]
  }
];
```

**Lợi ích:**
- ✅ Chỉ cần 1 file video gốc
- ✅ Dễ dàng thay đổi timing
- ✅ Không cần cắt video thành nhiều file nhỏ

---

### 4. Kết Hợp Với Loop

**Tình huống:** Loop một đoạn cụ thể trong video làm background

```javascript
{
  cmd: "videoView",
  video: "nature_10min.mp4",
  videoStartFrom: 180,     // ⭐ Từ giây 3:00
  videoDuration: 30,       // ⭐ Chỉ lấy 30 giây
  loop: true,              // ⭐ Loop đoạn 30 giây này
  sound: false,
  ToEndFrame: true,
  styleCss: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    opacity: 0.5
  }
}
```

**Kết quả:**
- Video chỉ phát đoạn 180s-210s
- Loop lại đoạn này liên tục
- Tạo background động mượt mà

---

### 5. Tạo Highlight Reel

**Tình huống:** Tạo video tóm tắt từ video dài với nhiều highlights

```javascript
const highlights = [
  { start: 45,  duration: 10 },   // Highlight 1: 45s-55s
  { start: 120, duration: 15 },   // Highlight 2: 2:00-2:15
  { start: 300, duration: 20 },   // Highlight 3: 5:00-5:20
  { start: 480, duration: 12 },   // Highlight 4: 8:00-8:12
];

const codeFrame = highlights.map((h, i) => {
  const framesPerSecond = 30;
  const startFrame = i === 0 ? 0 : 
    highlights.slice(0, i).reduce((sum, x) => sum + (x.duration * framesPerSecond), 0);
  const endFrame = startFrame + (h.duration * framesPerSecond);
  
  return {
    startFrame,
    endFrame,
    actions: [
      {
        cmd: "videoView",
        video: "full_match.mp4",
        videoStartFrom: h.start,
        videoDuration: h.duration,
        sound: true
      },
      {
        cmd: "typingText",
        text: `Highlight ${i + 1}`,
        delay: 10,
        styleCss: "typingText.heroTitle"
      }
    ]
  };
});
```

**Output:**
```
Clip 1: [0:45  - 0:55 ] → frames 0-300
Clip 2: [2:00  - 2:15 ] → frames 300-750
Clip 3: [5:00  - 5:20 ] → frames 750-1350
Clip 4: [8:00  - 8:12 ] → frames 1350-1710
```

---

## 🎨 WORKFLOW EDITING

### Bước 1: Xác Định Đoạn Cần Lấy

**Mở video trong player và note thời gian:**

```
00:00 - Intro (skip)
00:15 - Hook begins ⭐
00:45 - Hook ends
00:45 - Main content
02:30 - Highlight moment ⭐
02:50 - End of highlight
05:00 - Outro (skip)
```

### Bước 2: Convert Sang Giây

```
00:15 → 15 giây
00:45 → 45 giây
02:30 → 150 giây
02:50 → 170 giây
```

### Bước 3: Code Actions

```javascript
const codeFrame = [
  // Hook (15s - 45s)
  {
    startFrame: 0,
    endFrame: 900,  // 30 giây × 30fps
    actions: [
      {
        cmd: "videoView",
        video: "main_video.mp4",
        videoStartFrom: 15,
        videoDuration: 30,
        sound: true
      }
    ]
  },
  
  // Highlight (150s - 170s)
  {
    startFrame: 900,
    endFrame: 1500,  // 20 giây × 30fps
    actions: [
      {
        cmd: "videoView",
        video: "main_video.mp4",
        videoStartFrom: 150,
        videoDuration: 20,
        sound: true
      }
    ]
  }
];
```

### Bước 4: Test & Adjust

```javascript
// Thử nghiệm với timing khác nhau
{
  videoStartFrom: 150,
  videoDuration: 20  // Nếu quá dài → giảm xuống 15
}

// Hoặc bắt đầu sớm hơn
{
  videoStartFrom: 145,  // Thử bắt đầu sớm 5 giây
  videoDuration: 20
}
```

---

## 🧮 HELPER: TÍNH TOÁN TIMING

### Convert MM:SS sang giây

```javascript
function timeToSeconds(time) {
  // Input: "02:30" or "2:30"
  const [minutes, seconds] = time.split(':').map(Number);
  return minutes * 60 + seconds;
}

// Usage:
const start = timeToSeconds("02:30");  // 150
const end = timeToSeconds("02:50");    // 170
const duration = end - start;          // 20

{
  videoStartFrom: start,
  videoDuration: duration
}
```

### Convert giây sang MM:SS

```javascript
function secondsToTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Usage:
console.log(secondsToTime(150));  // "02:30"
console.log(secondsToTime(170));  // "02:50"
```

### Tính số frames cần thiết

```javascript
function secondsToFrames(seconds, fps = 30) {
  return seconds * fps;
}

// Usage:
const duration = 20;  // giây
const frames = secondsToFrames(duration);  // 600 frames

{
  startFrame: 0,
  endFrame: frames,  // 600
  actions: [...]
}
```

---

## ⚠️ LƯU Ý QUAN TRỌNG

### 1. videoStartFrom phải STATIC

✅ **ĐÚNG:**
```javascript
{
  videoStartFrom: 30  // ⭐ Giá trị cố định
}
```

❌ **SAI:**
```javascript
{
  videoStartFrom: frame / 30  // ❌ Thay đổi theo frame → GIẠ́T!
}
```

### 2. videoDuration vs Action Duration

```javascript
// Video duration: Độ dài đoạn video muốn lấy
// Action duration: Độ dài action trong timeline

{
  startFrame: 0,
  endFrame: 600,  // ⭐ Action chạy 600 frames (20 giây)
  actions: [
    {
      cmd: "videoView",
      videoStartFrom: 30,
      videoDuration: 20  // ⭐ Lấy 20 giây video
    }
  ]
}

// ✅ videoDuration phải <= action duration
// ❌ Nếu videoDuration > action duration → video bị cắt đứt
```

### 3. Loop với videoDuration

```javascript
// ✅ Loop chỉ đoạn đã chọn
{
  videoStartFrom: 60,
  videoDuration: 15,
  loop: true
}

// Behavior: Phát 60s-75s, rồi loop lại từ 60s
```

### 4. Kiểm tra độ dài video gốc

```bash
# Kiểm tra độ dài video trước khi code
ffprobe -v error -show_entries format=duration \
  -of default=noprint_wrappers=1:nokey=1 video.mp4

# Output: 300.5 (giây)
```

```javascript
// ❌ Lỗi: videoStartFrom vượt quá độ dài video
{
  videoStartFrom: 400,  // Video chỉ dài 300 giây!
  videoDuration: 20
}

// ✅ Đúng
{
  videoStartFrom: 280,  // < 300
  videoDuration: 20
}
```

---

## 🐛 TROUBLESHOOTING

### Video không phát

**Nguyên nhân 1:** videoStartFrom vượt quá độ dài video
```javascript
// Video dài 180 giây
{
  videoStartFrom: 200  // ❌ > 180
}
```
**Fix:** Kiểm tra độ dài video

---

**Nguyên nhân 2:** videoDuration quá lớn
```javascript
// Video chỉ còn 20 giây từ start position
{
  videoStartFrom: 160,   // Video dài 180s
  videoDuration: 30      // ❌ 160 + 30 = 190 > 180
}
```
**Fix:** Giảm videoDuration

---

### Video vẫn bị giật

**Nguyên nhân:** videoStartFrom không phải static value

❌ **SAI:**
```javascript
const VideoComponent = () => {
  const currentFrame = useCurrentFrame();
  return (
    <VideoView
      videoStartFrom={currentFrame / 30}  // ❌ Thay đổi!
    />
  );
};
```

✅ **ĐÚNG:**
```javascript
const VideoComponent = () => {
  const staticStart = 30;  // ⭐ Giá trị cố định
  return (
    <VideoView
      videoStartFrom={staticStart}
    />
  );
};
```

---

### Audio không sync

**Nguyên nhân:** videoDuration và action duration không khớp

```javascript
// ❌ Không khớp
{
  startFrame: 0,
  endFrame: 600,  // 20 giây
  actions: [
    {
      videoStartFrom: 30,
      videoDuration: 15  // ❌ Chỉ 15 giây
    }
  ]
}
```

**Fix:** Đảm bảo videoDuration khớp với action duration

---

## 📊 PERFORMANCE

### Tối ưu khi dùng nhiều đoạn

```javascript
// ❌ Không tối ưu: Load video nhiều lần
{
  startFrame: 0,
  endFrame: 300,
  actions: [
    { cmd: "videoView", video: "long.mp4", videoStartFrom: 30 }
  ]
},
{
  startFrame: 300,
  endFrame: 600,
  actions: [
    { cmd: "videoView", video: "long.mp4", videoStartFrom: 120 }
  ]
}

// ✅ Tối ưu: Preload video
// (Video được cache tự động sau lần load đầu)
```

### Giới hạn concurrent videos

```javascript
// ❌ Quá nhiều videos
{
  actions: [
    { cmd: "videoView", video: "v1.mp4", videoStartFrom: 0 },
    { cmd: "videoView", video: "v2.mp4", videoStartFrom: 30 },
    { cmd: "videoView", video: "v3.mp4", videoStartFrom: 60 },
  ]
}

// ✅ Max 2-3 videos
{
  actions: [
    { cmd: "videoView", video: "main.mp4", videoStartFrom: 60 },
    { cmd: "imageView", img: "overlay.png" },  // Dùng image thay video
  ]
}
```

---

## ✅ CHECKLIST

### Trước khi code:
- [ ] Xem video gốc, note thời gian quan trọng
- [ ] Convert thời gian sang giây
- [ ] Kiểm tra độ dài video (`ffprobe`)
- [ ] Tính toán videoDuration phù hợp

### Khi code:
- [ ] Dùng giá trị static cho videoStartFrom
- [ ] Đảm bảo videoStartFrom < video length
- [ ] Đảm bảo videoStartFrom + videoDuration ≤ video length
- [ ] videoDuration ≤ action duration (endFrame - startFrame)

### Sau khi code:
- [ ] Test video chạy mượt
- [ ] Test audio sync đúng
- [ ] Test loop (nếu có)
- [ ] Test export MP4

---

## 📚 EXAMPLES

### Example 1: Music Video Segments

```javascript
// Lấy 3 đoạn chorus từ bài hát 4 phút
const musicVideo = [
  {
    startFrame: 0,
    endFrame: 450,
    actions: [{
      cmd: "videoView",
      video: "full_song.mp4",
      videoStartFrom: 45,  // Chorus 1 at 0:45
      videoDuration: 15,
      sound: true
    }]
  },
  {
    startFrame: 450,
    endFrame: 900,
    actions: [{
      cmd: "videoView",
      video: "full_song.mp4",
      videoStartFrom: 120,  // Chorus 2 at 2:00
      videoDuration: 15,
      sound: true
    }]
  },
  {
    startFrame: 900,
    endFrame: 1350,
    actions: [{
      cmd: "videoView",
      video: "full_song.mp4",
      videoStartFrom: 195,  // Chorus 3 at 3:15
      videoDuration: 15,
      sound: true
    }]
  }
];
```

### Example 2: Tutorial Cuts

```javascript
// Cắt bỏ phần dài dòng trong tutorial
const tutorial = [
  // Intro (skip first 30 seconds)
  {
    startFrame: 0,
    endFrame: 300,
    actions: [{
      cmd: "videoView",
      video: "tutorial.mp4",
      videoStartFrom: 30,  // Skip intro
      videoDuration: 10,
      sound: true
    }]
  },
  // Main content (skip setup, go to important part)
  {
    startFrame: 300,
    endFrame: 1500,
    actions: [{
      cmd: "videoView",
      video: "tutorial.mp4",
      videoStartFrom: 180,  // Skip setup
      videoDuration: 40,
      sound: true
    }]
  }
];
```

---

**Kết luận:** Feature này giúp bạn edit video dễ dàng hơn mà không cần cắt video thành nhiều file nhỏ! 🎬✨