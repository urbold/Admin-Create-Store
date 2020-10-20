import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  ListItem,
  Typography,
  Menu,
  CardContent,
  MenuItem,
  Button,
  IconButton,
  Avatar,
  Badge
} from "@material-ui/core";

import { MoreVert } from "@material-ui/icons";
import clsx from "clsx";

class StoreCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      published: props.published,
      status: props.status,
      statusDate: props.statusDate
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(state => ({
      openMenu: !state.openMenu
    }));
  }

  componentDidMount() {}
  render() {
    let { state, props } = this,
      { classes, name, avatar, screenshot, description } = props,
      { openMenu, status } = state;

    const More = (
      <IconButton
        onClick={this.toggleMenu}
        ref={node => (this.menuButton = node)}
      >
        <MoreVert />
      </IconButton>
    );

    const MoreMenu = (
      <Menu
        anchorEl={this.menuButton}
        open={openMenu}
        onBackdropClick={this.toggleMenu}
      >
        <MenuItem>Clone Store</MenuItem>
        <MenuItem>Under Construction</MenuItem>
      </Menu>
    );

    let StoreStatus = (
      <Fragment>
        <Badge
          variant="dot"
          classes={{
            dot:
              status === "Launched"
                ? classes.activeStatusIndictor
                : classes.inactiveStatusIndictor
          }}
        />
        <Typography className={classes.subtitle} component="span">
          {status}
        </Typography>
      </Fragment>
    );
    return (
      <ListItem className={clsx(classes.root)}>
        <Card className={clsx(classes.card)}>
          <CardHeader
            avatar={<Avatar {...avatar} />}
            title={name}
            action={More}
            subheader={StoreStatus}
            classes={{ title: classes.title, subheader: classes.subheader }}
          />

          <CardMedia className={clsx(classes.cardMedia)} image={screenshot} />

          <CardContent>
            <Typography>{description}</Typography>
          </CardContent>

          <CardActions
            className={classes.actionArea}
            disableRipple
            disableTouchRipple
          >
            <div style={{ flexGrow: 2 }} />
            <Button className={classes.actionButton}>
              <span className={classes.actionLabel}>Settings</span>
            </Button>
          </CardActions>
        </Card>
        {MoreMenu}
      </ListItem>
    );
  }
}

const Styled = withStyles(styles)(StoreCard);

export default (store, i) => {
  let { url } = store;
  return <Styled key={url} {...store} />;
};
