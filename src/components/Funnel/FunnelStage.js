import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import ArrowDownBold from 'mdi-react/ArrowDownwardIcon';

// @material-ui/icons

// core components
import styles from "assets/jss/material-dashboard-react/components/funnelStageStyle.js";

const useStyles = makeStyles(styles);

export default function FunnelStage(props) {
  const classes = useStyles();
  const { className, title, value, percentage } = props;
  const width = {
    width: percentage + "%"
  }

  return (
    <div className={classes.stage}>
      <div className={classes.title}>{title}</div>
      <div className={classes.value}>
         <div className={classes.block}>
            <ArrowDownBold className={classes.mdi} />
            <div className={classes.bg} style={width}></div>
            <h2 class={classes.value}>{value}</h2>
         </div>
      </div>
      <div className={classes.percentage}>{percentage}%</div>
   </div>
  );
}

FunnelStage.propTypes = {
  className: PropTypes.string,
  title: PropTypes.number,
  value: PropTypes.number,
  percentage: PropTypes.number,
};
