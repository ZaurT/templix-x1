import {
  blackColor,
  whiteColor,
  hexToRgb
} from "assets/jss/material-dashboard-react.js";

const funnelStageStyle = {
  stage: {
    display: "table-row",
    "&:last-child svg": {
      display: "none"
    }
  },
  title: {
    fontSize: "12px",
    verticalAlign: "middle",
    padding: "0 10px",
    color: "#8e8e8e",
    display: "table-cell"
  },
  value: {
    display: "table-cell",
    width: "100%",
    textAlign: "center",
    fontSize: "21px"
  },
  block: {
    width: "100%",
    height: "100%",
    position: "relative",
    padding: "13px 0px",
    display: "flex",
    display: "-webkit-flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  bg: {
    content: '""',
    position: "absolute",
    borderRadius: "2px",
    width: "100%",
    height: "100%",
    left: "0",
    right: "0",
    top: "0",
    margin: "0 auto",
    zIndex: "0",
    background: "#6da9d4",
    opacity: "0.3333333333333333"
  },
  percentage: {
    fontSize: "12px",
    verticalAlign: "middle",
    padding: "0 10px",
    display: "table-cell",
    color: "#000"
  },
  mdi: {
    position: "absolute",
    bottom: "-18px",
    left: "50%",
    fontSize: "31px",
    transform: "translateX(-50%)",
    color: "rgba(255, 255, 255, 0.78)",
    zIndex: "9999",
    opacity: "1",
    width: "35px !important",
    height: "35px !important",
    "&:before": {
        content: '"\F046"',
        display: "inline-block",
        font: "normal normal normal 24px/1 Material Design Icons",
        fontSize: "inherit",
        textRendering: "auto",
        lineHeight: "inherit",
        transform: "translate(0, 0)",
    }
  }, 
};

export default funnelStageStyle;
