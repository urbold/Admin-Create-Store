import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Toolbar from "./Toolbar";
import { Divider } from "@material-ui/core";
import clsx from "clsx";
import timezones from "tz-ids";
import countries from "@datasets/country-list";
import CreateStoreForm from "./Stepper";
/* function byUrl({ url }) {
  return (store, i, array) => {
    return store.url === url;
  };
} */

class StoreInterface extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        {
          name: "Malcolm Taylor",
          status: "Launched",
          statusDate: "May, 15th, 2019",
          description: "Men's International Suits",
          screenshot: "https://placeimg.com/320/240/any"
        },
        {
          name: "Juluis Stephan",
          status: "Under Construction",
          statusDate: "May, 15th, 2019",
          description: "Men's Designer Appeal",
          screenshot: "https://placeimg.com/320/240/any"
        },
        {
          name: "Leona Stones",
          status: "Launched",
          statusDate: "May, 15th, 2019",
          description: "Luxury Gemstones Jewlery",
          screenshot: "https://placeimg.com/320/240/any"
        },
        {
          name: "Reach Bold",
          status: "Permananetly Closed",
          statusDate: "May, 15th, 2019",
          description: "Digital Marketing Firm",
          screenshot: "https://placeimg.com/320/240/any"
        },
        {
          name: "Leona Stones",
          status: "Launched",
          statusDate: "May, 15th, 2019",
          description: "Luxury Gemstones Jewlery",
          screenshot: "https://placeimg.com/320/240/any"
        }
      ]
    };
  }

  async createStore(data) {
    return await this.props.createStore(data);
  }

  addStore(store) {}

  removeStore(store) {}

  render() {
    let { props } = this,
      { classes, Toolbar: InterfaceToolbar } = props;

    return (
      <div id="store-interface" className={clsx(classes.root)}>
        <datalist id="timezone-ids">
          {timezones.map(zone => (
            <option key={zone} value={zone} />
          ))}
        </datalist>
        <datalist id="countries">
          {countries.getNames().map(zone => (
            <option key={zone} value={zone} />
          ))}
        </datalist>
        <Toolbar />
        {/* <InterfaceToolbar /> */}
        <Divider />
      </div>
    );
  }
}

export default withStyles(styles)(StoreInterface);
