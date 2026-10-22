// T01_TipCard/styles.js — STYLE MẶC ĐỊNH theo từng mã mục (key = mã mục trong config.js).
// Lệnh kiểu "T01.HEAD: chữ 90px" → sửa STYLES.HEAD ở đây.

const TEXT_STROKE = {
  WebkitTextStroke: "1px black",
  textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
};

export const STYLES = {
  ROOT: {
    backgroundColor: "black",
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    lineHeight: 1.4,
    overflow: "hidden",
  },

  BG: {
    objectFit: "cover",
  },

  // CSK001: DIVND-css
  CARD: {
    position: "absolute",
    top: "15%",
    left: "5%",
    right: "5%",
    zIndex: 100,
    padding: 30,
    border: "2px solid green",
    borderRadius: 15,
  },

  // CSK001: DIVND001-css (backgroundImage được ghép trong index.jsx từ cardBgImage)
  HEAD: {
    position: "relative",
    fontSize: 80,
    color: "black",
    fontWeight: 700,
    lineHeight: 1.1,
    fontStyle: "italic",
    textAlign: "left",
    whiteSpace: "pre-line",
    padding: "2%",
    borderRadius: 15,
    border: "2px solid rgba(0, 0, 0, 0.25)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
  },

  // CSK001: DIVND002-css
  DETAIL: {
    position: "relative",
    margin: 40,
    minHeight: 750,
    fontSize: 50,
    color: "white",
    fontWeight: 700,
    lineHeight: 1.1,
    fontStyle: "italic",
    textAlign: "left",
    whiteSpace: "pre-line",
    padding: "7%",
    borderRadius: 15,
    border: "2px solid rgba(0, 0, 0, 0.25)",
    backgroundColor: "rgba(128, 128, 128, 0.7)",
  },

  // CSK001: DIVtext02-css
  FOOTER: {
    position: "absolute",
    top: "85%",
    left: 50,
    right: 50,
    bottom: 50,
    zIndex: 100,
    padding: "2%",
    fontSize: 50,
    color: "black",
    fontWeight: 500,
    lineHeight: 1.1,
    fontStyle: "italic",
    textAlign: "left",
    ...TEXT_STROKE,
    borderRadius: 15,
    backgroundColor: "white",
    border: "10px solid blue",
  },

  // CSK001: DIVB-logo-div-css (khung) + DIVB-logo-img-css (ảnh → LOGO_IMG)
  LOGO: {
    position: "absolute",
    top: "90%",
    left: 800,
    right: 0,
    bottom: 0,
    textAlign: "center",
    zIndex: 9999,
  },
  LOGO_IMG: { width: 150, borderRadius: "50%" },
};
