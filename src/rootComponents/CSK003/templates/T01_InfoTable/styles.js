// T01_InfoTable/styles.js — STYLE MẶC ĐỊNH theo mã mục. Lệnh "CSK003.T01.SUBJECT: chữ 60px" → sửa ở đây.

export const C = {
  paper: "#F5F2EA",
  navy: "#0F2A4A",
  navySoft: "#1F3F66",
  gold: "#C9A227",
  ink: "#1B2733",
  inkSoft: "#34404D",
  rowAlt: "#E9E4D8",
  line: "#D6CFBF",
  noticeBg: "#FFF3D1",
  noticeBar: "#D98E04",
};

export const STYLES = {
  ROOT: {
    backgroundColor: C.paper,
    fontFamily: "'Be Vietnam Pro', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    color: C.ink,
    overflow: "hidden",
  },

  // Vùng nội dung (có padding) — tự thu nhỏ nếu chữ quá dài
  FRAME: {
    position: "absolute",
    inset: 0,
    padding: "44px 48px",
    display: "flex",
    flexDirection: "column",
  },

  SUBJECT: {
    position: "relative",
    backgroundColor: C.navy,
    color: "white",
    fontSize: 52,
    fontWeight: 800,
    lineHeight: 1.18,
    textTransform: "uppercase",
    padding: "28px 34px 30px",
    borderRadius: 20,
    borderBottom: `10px solid ${C.gold}`,
    boxShadow: "0 8px 20px rgba(15,42,74,0.25)",
  },

  DETAIL: {
    position: "relative",
    marginTop: 26,
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 1.45,
    color: C.inkSoft,
    textAlign: "justify",
    whiteSpace: "pre-line",
    padding: "0 6px",
  },

  SUBJECT_TABLE: {
    position: "relative",
    marginTop: 26,
    fontSize: 34,
    fontWeight: 800,
    lineHeight: 1.25,
    color: C.navy,
    paddingLeft: 20,
    borderLeft: `10px solid ${C.gold}`,
  },

  TABLE: {
    position: "relative",
    marginTop: 18,
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    borderRadius: 16,
    overflow: "hidden",
    border: `2px solid ${C.navy}`,
    backgroundColor: "white",
    tableLayout: "fixed",
  },
  TH: {
    backgroundColor: C.navy,
    color: "white",
    fontSize: 24,
    fontWeight: 800,
    lineHeight: 1.25,
    textAlign: "left",
    padding: "14px 14px",
    verticalAlign: "middle",
  },
  TD: {
    fontSize: 23,
    fontWeight: 500,
    lineHeight: 1.3,
    color: C.ink,
    padding: "11px 14px",
    verticalAlign: "top",
    borderTop: `1px solid ${C.line}`,
  },
  TD_FIRST: { fontWeight: 800, color: C.navy }, // cột đầu tiên nhấn mạnh
  ROW_ALT: { backgroundColor: C.rowAlt },

  NOTICE: {
    position: "relative",
    marginTop: 24,
    backgroundColor: C.noticeBg,
    borderLeft: `12px solid ${C.noticeBar}`,
    borderRadius: 14,
    padding: "18px 24px 20px",
    fontSize: 27,
    fontWeight: 600,
    lineHeight: 1.4,
    color: C.ink,
    whiteSpace: "pre-line",
  },
  NOTICE_LABEL: {
    display: "inline-block",
    backgroundColor: C.noticeBar,
    color: "white",
    fontSize: 22,
    fontWeight: 800,
    letterSpacing: 2,
    padding: "4px 14px",
    borderRadius: 8,
    marginBottom: 10,
  },
};
