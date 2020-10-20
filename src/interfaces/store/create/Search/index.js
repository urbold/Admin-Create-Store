import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { TextField } from "@material-ui/core";

class FindStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  search(e) {}
  toggleActive(e) {}
  render() {
    let { props } = this,
      { classes, label, variant } = props;

    let InputProps = {
      size: 50
    };

    let inputClass = {
      classes: { input: classes.input }
    };
    let labelClass = {
      className: classes.label,
      classes: { outlined: classes.label }
      //variant: "outlined"
    };
    return (
      <div className={classes.root}>
        <TextField
          label={label}
          variant={variant}
          inputProps={InputProps}
          InputProps={inputClass}
          InputLabelProps={labelClass}
          margin="dense"
          placeholder="E.g. Acme Company or 12345"
        />
      </div>
    );
  }
}

export default withStyles(styles)(FindStore);
