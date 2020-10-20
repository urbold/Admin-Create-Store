import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import AppBar from "./comps/Appbar";
import Interface from "./interfaces";
import "./styles.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { props, state } = this,
      { currentInterface } = state;

    return (
      <ThemeProvider theme={theme}>
        <AppBar />
        <Interface {...currentInterface} />
      </ThemeProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
