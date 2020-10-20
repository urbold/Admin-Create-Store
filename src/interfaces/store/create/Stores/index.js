import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import styles from "./styles";
import Card from "./Card";
import clsx from "clsx";

class Stores extends Component {
  render() {
    let { state, props } = this,
      { classes, stores } = props;

    return <List className={clsx(classes.root)}>{stores.map(Card)}</List>;
  }
}

export default withStyles(styles)(Stores);
