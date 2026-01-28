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
  //chữ đè lên ảnh
  group1_1: group1_1,
  //text trên ảnh dưới
  group1_2: group1_2,
  //1 ô tả, liệt kê 3 thằng ở dưới
  group4_1: group4_1,
  //chữ ở giữa, 4 ảnh xung quanh
  group5_1: group5_1,
};
//lay OBJcss
//cach dung  ...getTextCSS(arr[0].textStyle),
function getTextCSS(style) {
  if (!style) return ObjCSS.textCSS["textCss_1"];

  const key = `textCss_${String(style)}`;
  return ObjCSS.textCSS[key] || {};
}
//cách dùng ...getImgCSS(arr[0].imgStyle),
function getImgCSS(style) {
  if (!style) return ObjCSS.imgCSS["imgCss_001"];

  const key = `imgCss_${String(style)}`;
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

//video tổng
let videoData01 = [];
DataFront.forEach((videoData) => {
  const bg_sound = {
    cmd: CMD_Fetch.soundPlayerAction,
    volume: 0.1,
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

  const end_sound = {
    code: "SOUNDCHUNG_SpaceSound",
    timeFixed: 0.5,
  };
  video.push(end_sound);
  videoData01.push(video);
});
console.log(JSON.stringify(keepOnlyActionsCodeTimeFixedStt(videoData01)));
export { videoData01 };

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
          inset: 0,
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
          animation: "zoomIn 1s ease-in-out forwards",
        },
      },
      //text container
      {
        cmd: CMD_Fetch.divAction,
        id: textContainer,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          position: "absolute",
          height: "30%",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
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
          fontSize: "80px",
          animation: "zoomIn 1s ease-in-out forwards",
        },
      },
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: arr[0].soundEffect,
      },
    ],
    code: arr[0].code,
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
        group: arr[0].group,
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
        group: arr[0].group,
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
          inset: 0,
          top: "3%",
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
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "25%",
          zIndex: 2,
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
          fontSize: "100px",
          animation: "zoomIn 1s ease-in-out forwards",
        },
      },
      // Image container (phía dưới)
      {
        cmd: CMD_Fetch.divAction,
        id: imageContainer,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          marginTop: "200px",
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          height: "40%",
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
          ...getImgCSS(arr[0].imgStyle),
          height: "500px",
          width: "500px",
          animation: "zoomIn 1s ease-in-out forwards",
        },
      },
    ],
    code: arr[0].code,
  };

  return [obj1];
}
function group4_1(arr) {
  const uid = `${arr[0].group}`;
  const BG001 = `BG001_${uid}`;
  const main = `main_${uid}`;
  const row1Div = `row1_${uid}`;
  const row2Div = `row2_${uid}`;
  const row3Div = `row3_${uid}`;
  const row4Div = `row4_${uid}`;
  const row5Div = `row5_${uid}`;

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
      //divcha
      {
        cmd: "divAction",
        id: main,
        group: arr[0].group,
        styleCss: {
          position: "absolute",
          inset: 0,
          top: "3%",
          display: "flex",
          flexDirection: "column",
          padding: "50px",
        },
      },
      // Div1
      {
        cmd: "divAction",
        id: row1Div,
        toID: main,
        group: arr[0].group,
        styleCss: {
          position: "relative",
          height: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        },
      },
      {
        cmd: CMD_Fetch.typingText,
        text: arr[0].text,
        group: arr[0].group,
        toID: row1Div,
        styleCss: {
          ...getTextCSS(arr[0].textStyle),
          fontSize: "80px",
        },
      },
      // Div2
      {
        cmd: "divAction",
        id: row2Div,
        toID: main,
        group: arr[0].group,
        styleCss: {
          position: "relative",
          height: "35%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        },
      },
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: row2Div,
        group: arr[0].group,
        img: arr[0].img,
        styleCss: {
          ...getImgCSS(arr[0].imgStyle),
          width: "450px",
          height: "450px",
          opacity: 0,
          animation: "zoomIn 0.8s ease-out forwards",
        },
      },
      // Div3
      {
        cmd: "divAction",
        id: row3Div,
        toID: main,
        group: arr[0].group,
        styleCss: {
          position: "relative",
          height: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        },
      },
      // div4
      {
        cmd: "divAction",
        id: row4Div,
        toID: main,
        group: arr[0].group,
        styleCss: {
          position: "relative",
          height: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        },
      },
      // Div5
      {
        cmd: "divAction",
        id: row5Div,
        toID: main,
        group: arr[0].group,
        styleCss: {
          position: "relative",
          height: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        },
      },
    ],
    code: arr[0].code,
  };

  const obj2 = {
    actions: [
      // Text arr[1] vào dòng 3
      {
        cmd: CMD_Fetch.typingText,
        text: arr[1].text,
        noTyping: true,
        group: arr[1].group,
        toID: row3Div,
        styleCss: {
          ...getTextCSS(arr[1].textStyle),
          fontSize: "60px",
          animation: "fadeInSlideLeft 1s ease-out forwards",
        },
      },
    ],
    code: arr[1].code,
  };

  const obj3 = {
    actions: [
      {
        cmd: CMD_Fetch.typingText,
        text: arr[2].text,
        noTyping: true,
        group: arr[2].group,
        toID: row4Div,
        styleCss: {
          ...getTextCSS(arr[2].textStyle),
          fontSize: "60px",
          animation: "fadeInSlideLeft 1s ease-out forwards",
        },
      },
    ],
    code: arr[2].code,
  };

  const obj4 = {
    actions: [
      // Text arr[3] vào dòng 5
      {
        cmd: CMD_Fetch.typingText,
        text: arr[3].text,
        noTyping: true,
        group: arr[3].group,
        toID: row5Div,
        styleCss: {
          ...getTextCSS(arr[3].textStyle),
          fontSize: "60px",
          animation: "fadeInSlideLeft 1s ease-out forwards",
        },
      },
    ],
    code: arr[3].code,
  };

  return [obj1, obj2, obj3, obj4];
}
function group5_1(arr) {
  const uid = `${arr[0].group}`;
  const BG001 = `BG001_${uid}`;
  const mainContainer = `main_${uid}`;
  const topLeftDiv = `topLeft_${uid}`;
  const topRightDiv = `topRight_${uid}`;
  const centerDiv = `center_${uid}`;
  const bottomLeftDiv = `bottomLeft_${uid}`;
  const bottomRightDiv = `bottomRight_${uid}`;

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
          inset: 0,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr auto 1fr",
          gap: "20px",
          padding: "40px",
        },
      },
      // Top Left Div
      {
        cmd: CMD_Fetch.divAction,
        id: topLeftDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          gridColumn: "1",
          gridRow: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        },
      },
      // Top Right Div
      {
        cmd: CMD_Fetch.divAction,
        id: topRightDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          gridColumn: "2",
          gridRow: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        },
      },
      // Center Div
      {
        cmd: CMD_Fetch.divAction,
        id: centerDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          gridColumn: "1/3",
          gridRow: "2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          zIndex: 2,
        },
      },
      {
        cmd: CMD_Fetch.typingText,
        text: arr[0].text,
        toID: centerDiv,
        group: arr[0].group,
        styleCss: {
          ...getTextCSS(arr[0].textStyle),
          fontSize: "100px",
        },
      },
      // Bottomleft Div
      {
        cmd: CMD_Fetch.divAction,
        id: bottomLeftDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          gridColumn: "1",
          gridRow: "3",
          display: "flex",
          flexDirection: "column", // 👈 ảnh trên – chữ dưới
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        },
      },
      //bottom right div
      {
        cmd: CMD_Fetch.divAction,
        id: bottomRightDiv,
        toID: mainContainer,
        group: arr[0].group,
        styleCss: {
          gridColumn: "2",
          gridRow: "3",
          display: "flex",
          flexDirection: "column", // 👈 ảnh trên – chữ dưới
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        },
      },
      // Sound effect
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: arr[0].soundEffect,
      },
    ],
    code: arr[0].code,
  };
  const obj2 = {
    actions: [
      //bg
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: topLeftDiv,
        img: arr[1].img,
        group: arr[1].group,
        styleCss: {
          ...getImgCSS(arr[1].imgStyle),
          width: "350px",
          height: "350px",
          opacity: 0,
          animation: "fadeInSlideLeft 0.8s ease-out forwards",
        },
      },
      {
        cmd: CMD_Fetch.soundPlayerAction,
        soundSource: arr[1].soundEffect,
      },
    ],
    code: arr[1].code,
  };
  const obj3 = {
    actions: [
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: topRightDiv,
        img: arr[2].img,
        group: arr[2].group,
        styleCss: {
          ...getImgCSS(arr[2].imgStyle),
          width: "350px",
          height: "350px",
          opacity: 0,
          animation: "fadeInSlideRight 0.8s ease-out forwards",
        },
      },
    ],
    code: arr[2].code,
  };
  const obj4 = {
    actions: [
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: bottomLeftDiv,
        img: arr[3].img,
        group: arr[2].group,
        styleCss: {
          ...getImgCSS(arr[3].imgStyle),
          order: "1",
          width: "350px",
          height: "350px",
          opacity: 0,
          animation: "fadeInSlideLeft 0.8s ease-out forwards",
        },
      },
    ],
    code: arr[3].code,
  };
  const obj5 = {
    actions: [
      {
        cmd: CMD_Fetch.imageViewActionToID,
        toID: bottomRightDiv,
        img: arr[4].img,
        group: arr[2].group,
        styleCss: {
          ...getImgCSS(arr[4].imgStyle),
          order: "1",
          width: "350px",
          height: "350px",
          opacity: 0,
          animation: "fadeInSlideRight 0.8s ease-out forwards",
        },
      },
    ],
    code: arr[4].code,
  };

  return [obj1, obj2, obj3, obj4, obj5];
}
