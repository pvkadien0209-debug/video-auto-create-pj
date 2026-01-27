// ✅ Import JSON trực tiếp
import DataFront from "./data_Front_001.json" with { type: "json" };
import { VideoPresets } from "../../components/ActionOrchestrator/utils/cssUtils/cssUltis.js";
import { ObjCSS } from "./objCSS.js";
import { CMD } from "../../components/ActionOrchestrator/utils/actionRegistry.js";
import {
  Sort0toN,
  anim,
  keepOnlyActionsCodeTimeFixedStt,
} from "../../components/ActionOrchestrator/utils/dataSupportFuntions.js";

const CMD_Fetch = CMD;

const handlerMap = {
  //1object
  //chữ đè lên ảnh
  group1_1: group1_1,
  //text trên ảnh dưới
  group1_2: group1_2,
  //hiển thị như 1 comment
  group1_comment: group1_comment,

  //2object
  //2 text, ảnh đẩy nhau
  group2_1: group2_1,

  //3object
  //liet ke
  group3_lietke: group3_lietke,
};

//lay OBJcss
//cach dung  ...getTextCSS(arr[0].textStyle),
function getTextCSS(style) {
  if (!style) return ObjCSS.textCSS["textCss_001"];

  const key =
    typeof style === "number"
      ? `textCss_${String(style).padStart(3, "0")}`
      : `textCss_${style}`;
  return ObjCSS.textCSS[key] || {};
}
//cách dùng ...getImgCSS(arr[0].imgStyle),
function getImgCSS(style) {
  if (!style) return ObjCSS.imgCSS["imgCss_001"];

  const key =
    typeof style === "number"
      ? `imgCss_${String(style).padStart(3, "0")}`
      : `imgCss_${style}`;
  return ObjCSS.imgCSS[key] || {};
}
//controller cho group
function handleItem(group) {
  const groupStr = String(group.length);
  const typeStr = String(group[0].mode);

  const key = `group${groupStr}_${typeStr}`;
  const handler = handlerMap[key];

  if (handler) {
    return handler(group);
  } else {
    console.warn("❌ Chưa có handler cho:", key);
    return group;
  }
}

//lõi
let videoData01 = [];

DataFront.forEach((videoData) => {
  const bg_sound = {
    cmd: CMD_Fetch.soundPlayerAction,
    ToEndFrame: true,
    soundSource: videoData[0].backgroundSound,
  };
  let video = [];
  let group = [];
  let flag = videoData[0].group;

  //them actions
  videoData.forEach((obj) => {
    if (obj.group === flag) {
      group.push(obj);
    } else {
      ///controller
      group = handleItem(group);
      for (let i = 0; i < group.length; i++) {
        video.push(group[i]);
      }
      group = [obj];
      flag = obj.group;
    }
  });
  //controller cuoi
  group = handleItem(group);
  for (let i = 0; i < group.length; i++) {
    video.push(group[i]);
  }

  // Thêm background sound
  if (video.length > 0 && video[0].actions) {
    video[0].actions.unshift(bg_sound);
  }

  videoData01.push(video);
});

console.log(JSON.stringify(keepOnlyActionsCodeTimeFixedStt(videoData01)));
export { videoData01 };

//group 1 object
function group1_1(arr) {
  const uid = `${arr[0].group}`;

  const BG001 = `BG001_${uid}`;
  const mainContainer = `main_${uid}`;
  const textContainer = `textCont_${uid}`;

  const obj1 = {
    actions: [
      // Background
      {
        cmd: "divAction",
        id: BG001,
        ToEndFrame: true,
        styleCss: {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: BG001,
        ToEndFrame: true,
        zIndex: 0,
        img: arr[0].backgroundIMG,
        styleCss: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
      // Main container
      {
        cmd: CMD_Fetch.divAction,
        id: mainContainer,
        group: arr[0].group,
        styleCss: {
          position: "absolute",
          inset: 0, // top:0 left:0 right:0 bottom:0
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      //img
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: mainContainer,
        img: arr[0].img,
        styleCss: {
          ...getImgCSS(arr[0].imgStyle),
          position: "absolute",
        },
      },
      //text container
      {
        cmd: CMD_Fetch.divAction,
        id: textContainer,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          position: "relative",
          height: "750px",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
        },
      },
      {
        cmd: CMD_Fetch.typingText,
        text: arr[0].text,
        toID: textContainer,
        noTyping: true,
        group: arr[0].group,
        styleCss: {
          ...getTextCSS(arr[0].textStyle),
          fontSize: arr[0].textSize,
        },
      },

      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: arr[0].soundEffect,
      },
    ],
    code: arr[0].code,
    timeFixed: 3,
  };

  return [obj1];
}
function group1_2(arr) {
  const uid = `${arr[0].group}`;

  const BG001 = `BG001_${uid}`;
  const mainContainer = `main_${uid}`;
  const textContainer = `textCont_${uid}`;
  const imageContainer = `imgCont_${uid}`;

  const obj1 = {
    actions: [
      // Background
      {
        cmd: "divAction",
        id: BG001,
        ToEndFrame: true,
        styleCss: {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: BG001,
        ToEndFrame: true,
        img: arr[0].backgroundIMG,
        styleCss: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
      // Main container
      {
        cmd: CMD_Fetch.divAction,
        id: mainContainer,
        group: arr[0].group,
        styleCss: {
          position: "absolute",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "50px",
        },
      },

      // Text container (phía trên)
      {
        cmd: CMD_Fetch.divAction,
        id: textContainer,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "30%",
          width: "100%",
        },
      },

      {
        cmd: CMD_Fetch.typingText,
        text: arr[0].text,
        toID: textContainer,
        group: arr[0].group,

        noTyping: true,
        styleCss: {
          fontSize: arr[0].textSize,
          fontWeight: 800,
          color: "yellow",
          textAlign: "center",
          textTransform: "uppercase",
          WebkitTextStroke: "4px black",
          textShadow: "0 0 30px rgba(255,255,0,0.5)",
          letterSpacing: "3px",
        },
      },

      // Sound khi text xuất hiện
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: arr[0].soundEffect,
      },

      // Image container (phía dưới)
      {
        cmd: CMD_Fetch.divAction,
        id: imageContainer,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "70%",
          width: "100%",
        },
      },

      // Image với hiệu ứng to dần
      {
        cmd: CMD_Fetch.imageViewActionToID,
        img: arr[0].img,
        toID: imageContainer,
        group: arr[0].group,
        styleCss: {
          width: "700px",
          height: "700px",
          maxWidth: "90%",
          maxHeight: "90%",
          objectFit: "contain",
          borderRadius: "20px",
          animation: "scaleUp 0.7s ease-out forwards",
        },
      },
    ],
    code: arr[0].code,
    timeFixed: 4,
  };

  return [obj1];
}
function group1_comment(arr) {
  const uid = `${arr[0].group}`;

  const BG001 = `BG001_${uid}`;
  const mainContainer = `main_${uid}`;
  const textContainer = `textCont_${uid}`;
  const chatHeader = `chatHeader_${uid}`;

  const obj1 = {
    actions: [
      // Background
      {
        cmd: "divAction",
        id: BG001,
        ToEndFrame: true,
        styleCss: {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: BG001,
        img: arr[0].backgroundIMG,
        styleCss: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
      // Main container
      {
        cmd: CMD_Fetch.divAction,
        id: mainContainer,
        group: arr[0].group,
        styleCss: {
          position: "absolute",
          inset: 0, // top:0 left:0 right:0 bottom:0
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      //text container
      {
        cmd: CMD_Fetch.divAction,
        id: textContainer,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          position: "relative",
          height: "750px",
          maxWidth: "1000px",
          width: "100%",
          padding: "32px",

          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",

          borderRadius: "32px",
          background: "#ffffff",
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",

          zIndex: 2,
        },
      },
      //chat header
      {
        cmd: CMD_Fetch.divAction,
        id: chatHeader,
        toID: textContainer,
        group: arr[0].group,
        styleCss: {
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "24px",
        },
      },
      //avatar
      {
        cmd: CMD_Fetch.divAction,
        toID: chatHeader,
        group: arr[0].group,
        styleCss: {
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          objectFit: "cover",
          flexShrink: 0,
          backgroundColor: "red",
        },
      },
      {
        cmd: CMD_Fetch.typingText,
        text: "@nguoidung_tiktok",
        toID: chatHeader,
        group: arr[0].group,
        noTyping: true,
        styleCss: {
          fontSize: "40px",
          fontWeight: 500,
          color: "rgba(0,0,0,0.45)",
          marginLeft: "24px",
        },
      },
      //noi dung
      {
        cmd: CMD_Fetch.divAction,
        id: `${textContainer}_body`,
        toID: textContainer,
        group: arr[0].group,
        styleCss: {
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "left",
          padding: "0 12px",
        },
      },
      {
        cmd: CMD_Fetch.typingText,
        text: arr[0].text,
        toID: `${textContainer}_body`,
        group: arr[0].group,
        styleCss: {
          ...getTextCSS(arr[0].textStyle),
          fontSize: arr[0].textSize,
          color: "#111",
          lineHeight: 1.6,
        },
      },
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: "SOUNDCHUNG_tiktokTypingSoundCapcut",
      },
    ],
    code: arr[0].code,
    timeFixed: 3,
  };

  return [obj1];
}

//group 2 object
function group2_1(arr) {
  const uid = `${arr[0].group}`;

  const BG001 = `BG001_${uid}`;
  const div1 = `div1_${uid}`;
  const divA = `divA_${uid}`;
  const divB = `divB_${uid}`;
  const divC = `divC_${uid}`;
  const divD = `divD_${uid}`;
  const textId = `text_${uid}`;

  const obj_001 = {
    actions: [
      {
        cmd: "divAction",
        id: BG001,
        ToEndFrame: true,
        styleCss: {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: BG001,
        ToEndFrame: true,
        img: arr[0].backgroundIMG,
        styleCss: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        id: div1,
        group: arr[0].group,
        styleCss: {
          position: "absolute",
          height: "100%",
          width: "100%",
          padding: "50px",
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        id: divA,
        toID: div1,
        group: arr[0].group,
        styleCss: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40%",
          width: "100%",
        },
      },
      {
        cmd: CMD_Fetch.typingText,
        text: arr[0].text,
        id: textId,
        toID: divA,
        group: arr[0].group,
        styleCss: ObjCSS.CSStypingText001,
        // {
        //   fontSize: "96px",
        //   fontWeight: 800,
        //   letterSpacing: "2px",
        //   lineHeight: "1.1",
        //   textTransform: "uppercase",
        //   WebkitTextStroke: "3px #fff",
        //   textShadow: "0 0 20px rgba(255,255,255,0.4)",
        //   animation: "bounceIn 0.5s ease-out forwards",
        // },
      },
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: "soundEffect_bublepop",
      },
      {
        cmd: CMD_Fetch.divAction,
        id: divB,
        toID: div1,
        group: arr[0].group,
        styleCss: {
          display: "flex", // ⭐
          flexDirection: "row", // ⭐ mặc định
          gap: "20px", // optional
          height: "40%",
          padding: "50px",
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        id: divC,
        toID: divB,
        group: arr[0].group,
        styleCss: {
          flexBasis: "100%",
          flexShrink: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        img: arr[0].img,
        toID: divC,
        group: arr[0].group,
        styleCss: {
          width: "600px",
          height: "600px",
          maxWidth: "100%",
          maxHeight: "100%",
          borderRadius: "20%",
        },
      },
      {
        cmd: CMD_Fetch.divAction,
        id: divD,
        toID: divB,
        group: arr[0].group,
        styleCss: {
          height: "auto",
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },

      {
        cmd: CMD_Fetch.imageViewActionToID,
        img: arr[1].img,
        toID: divD,
        group: arr[0].group,
        styleCss: {
          width: "600px",
          height: "600px",
          maxWidth: "100%",
          maxHeight: "100%",
        },
      },
    ],
    code: arr[0].code,
    timeFixed: 2,
  };
  const obj_002 = {
    actions: [
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: "soundEffect_flippage",
      },
      {
        cmd: CMD_Fetch.actionCssId,
        toID: textId,
        mode: "replace",
        css: {
          display: "none",
        },
      },
      {
        cmd: CMD_Fetch.typingText,
        text: arr[1].text,
        toID: divA,
        delay: 15,
        group: arr[0].group,
        styleCss: {
          textAlign: "center",
          fontSize: "60px",
          fontWeight: 700,
          WebkitTextStroke: "2px yellow",
          color: "#fff",
        },
      },

      {
        cmd: CMD_Fetch.actionCssId,
        toID: divC,
        mode: "add",
        css: {
          animation: "collapseWidth 1s ease-in-out forwards",
        },
      },
    ],
    code: arr[1].code,
    timeFixed: 5,
  };
  let finalSet = [];
  finalSet.push(obj_001);
  finalSet.push(obj_002);
  return finalSet;
}
//group 3 object
function group3_lietke(arr) {
  const uid = `${arr[0].group}`;

  const BG001 = `BG001_${uid}`;
  const mainDiv = `mainDiv_${uid}`;

  // Div cho arr[0]
  const div0 = `div0_${uid}`;
  const div0Img = `div0Img_${uid}`;
  const div0Text = `div0Text_${uid}`;

  // Div cho arr[1]
  const div1 = `div1_${uid}`;
  const div1Img = `div1Img_${uid}`;
  const div1Text = `div1Text_${uid}`;

  // Div cho arr[2]
  const div2 = `div2_${uid}`;
  const div2Img = `div2Img_${uid}`;
  const div2Text = `div2Text_${uid}`;

  const obj_001 = {
    actions: [
      //divBG
      {
        cmd: "divAction",
        id: BG001,
        ToEndFrame: true,
        styleCss: {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      //add BG
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: BG001,
        ToEndFrame: true,
        img: arr[0].backgroundIMG,
        styleCss: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        },
      },
      // Main
      {
        cmd: CMD_Fetch.divAction,
        id: mainDiv,
        group: arr[0].group,
        ToEndFrame: true,
        styleCss: {
          position: "absolute",
          height: "100%",
          width: "100%",
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          justifyContent: "flex-start",
          alignItems: "center",
        },
      },
      //div 0
      {
        cmd: CMD_Fetch.divAction,
        id: div0,
        toID: mainDiv,
        group: arr[0].group,
        styleCss: {
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          width: "100%",
          height: "30%",
          alignItems: "center",
        },
      },
      // Ảnh bên trái
      {
        cmd: CMD_Fetch.divAction,
        id: div0Img,
        toID: div0,
        group: arr[0].group,
        styleCss: {
          flexBasis: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        img: arr[0].img,
        toID: div0Img,
        group: arr[0].group,
        styleCss: {
          width: "400px",
          height: "400px",
          maxWidth: "100%",
          maxHeight: "100%",
          borderRadius: "25px",
          animation: "fadeInSlideUp 1s ease-in-out forwards",
        },
      },
      // Chữ bên phải
      {
        cmd: CMD_Fetch.divAction,
        id: div0Text,
        toID: div0,
        group: arr[0].group,
        styleCss: {
          flexBasis: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      {
        cmd: CMD_Fetch.typingText,
        text: arr[0].text,
        toID: div0Text,
        group: arr[0].group,
        noTyping: true,
        styleCss: {
          fontSize: arr[0].textSize || "50px",
          fontWeight: 700,
          color: "#fff",
          textAlign: "center",
          WebkitTextStroke: "2px #000",
          animation: "fadeInSlideUp 1s ease-in-out forwards",
        },
      },
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: arr[0].soundEffect,
      },
      // ===== DIV 1 (arr[1]): Chữ trái - Ảnh phải - ẨN =====
      {
        cmd: CMD_Fetch.divAction,
        id: div1,
        toID: mainDiv,
        group: arr[0].group,
        styleCss: {
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          width: "100%",
          height: "30%",
          alignItems: "center",
        },
      },
      // Chữ bên trái
      {
        cmd: CMD_Fetch.divAction,
        id: div1Text,
        toID: div1,
        group: arr[0].group,
        styleCss: {
          flexBasis: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      // Ảnh bên phải
      {
        cmd: CMD_Fetch.divAction,
        id: div1Img,
        toID: div1,
        group: arr[0].group,
        styleCss: {
          flexBasis: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      // ===== DIV 2 (arr[2]): Ảnh trái - Chữ phải - ẨN =====
      {
        cmd: CMD_Fetch.divAction,
        id: div2,
        toID: mainDiv,
        group: arr[0].group,
        ToEndFrame: true,
        styleCss: {
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          width: "100%",
          height: "30%",
          alignItems: "center",
        },
      },
      // Ảnh bên trái
      {
        cmd: CMD_Fetch.divAction,
        id: div2Img,
        toID: div2,
        group: arr[0].group,
        styleCss: {
          flexBasis: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      // Chữ bên phải
      {
        cmd: CMD_Fetch.divAction,
        id: div2Text,
        toID: div2,
        group: arr[0].group,
        styleCss: {
          flexBasis: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
    ],
    code: arr[0].code,
    timeFixed: 3,
  };

  const obj_002 = {
    actions: [
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: arr[1].soundEffect,
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        img: arr[1].img,
        toID: div1Img,
        group: arr[0].group,
        styleCss: {
          width: "400px",
          height: "400px",
          maxWidth: "100%",
          maxHeight: "100%",
          borderRadius: "15px",
          animation: "fadeInSlideUp 1s ease-in-out forwards",
        },
      },
      {
        cmd: CMD_Fetch.typingText,
        text: arr[1].text,
        toID: div1Text,
        noTyping: true,
        group: arr[0].group,
        styleCss: {
          fontSize: arr[1].textSize || "50px",
          fontWeight: 700,
          color: "#fff",
          textAlign: "center",
          WebkitTextStroke: "2px #000",
          animation: "fadeInSlideUp 1s ease-in-out forwards",
        },
      },
    ],
    code: arr[1].code,
    timeFixed: 3,
  };

  const obj_003 = {
    actions: [
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: arr[2].soundEffect,
      },
      {
        cmd: CMD_Fetch.typingText,
        text: arr[2].text,
        toID: div2Text,
        group: arr[0].group,
        noTyping: true,
        styleCss: {
          fontSize: arr[2].textSize || "50px",
          fontWeight: 700,
          color: "#fff",
          textAlign: "center",
          WebkitTextStroke: "2px #000",
          animation: "fadeInSlideUp 1s ease-in-out forwards",
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        img: arr[2].img,
        toID: div2Img,
        group: arr[0].group,
        styleCss: {
          width: "400px",
          height: "400px",
          maxWidth: "100%",
          maxHeight: "100%",
          borderRadius: "15px",
          animation: "fadeInSlideUp 1s ease-in-out forwards",
        },
      },
    ],
    code: arr[2].code,
    timeFixed: 3,
  };

  let finalSet = [];
  finalSet.push(obj_001);
  finalSet.push(obj_002);
  finalSet.push(obj_003);
  return finalSet;
}
