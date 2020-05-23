import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import FunnelStage from "components/Funnel/FunnelStage.js";

// @material-ui/icons

// core components
import styles from "assets/jss/material-dashboard-react/components/funnelStyle.js";

const useStyles = makeStyles(styles);

export default function Funnel(props) {
  const classes = useStyles();
  const { className, title, value, percentage } = props;

  return (
   <div className={classes.salesFunnel}>
    <FunnelStage title="Клиенты" value="347" percentage="100" />
    <FunnelStage title="Визиты" value="250" percentage="70" />
    <FunnelStage title="Продажи" value="170" percentage="50" />
  </div>
   
  );
}

Funnel.propTypes = {
  className: PropTypes.string,
  title: PropTypes.number,
  value: PropTypes.number,
  percentage: PropTypes.number,
};
