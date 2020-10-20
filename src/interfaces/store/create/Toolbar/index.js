import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import styles from "./styles";
import Progression from "./Stepper";

class InterfaceToolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appName: "Stores",
      section: "Create New Store",
      controllers: []
    };
  }

  render() {
    let { props, state } = this,
      { appName, section } = state,
      { classes } = props;

    return (
      <Toolbar className={clsx(classes.root)}>
        <Typography className={clsx(classes.interfaceName)} component="h2">
          {section}
        </Typography>
        <Progression />
      </Toolbar>
    );
  }
}

export default withStyles(styles)(InterfaceToolbar);
