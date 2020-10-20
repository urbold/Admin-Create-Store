import React, { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import StoreInterface from "./store/create";
import styles from "./styles";

class Interface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeInterface: ""
    };
  }

  onInterfaceChange(newInterface) {
    return () => {
      this.setState(({ activeInterface }) => {
        return { activeInterface: newInterface };
      });
    };
  }

  render() {
    let { props, state } = this,
      { classes } = props,
      { activeInterface } = state,
      { content } = classes;

    return (
      <div className={clsx(content)}>
        <StoreInterface />
      </div>
    );
  }
}

export default withStyles(styles)(Interface);
