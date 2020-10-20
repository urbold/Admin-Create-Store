import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../styles";
import clsx from "clsx";
import states from "datasets-us-states-abbr";

import {
  Stepper,
  Step,
  StepLabel,
  StepButton,
  StepContent,
  StepConnector,
  TextField,
  Collapse,
  Icon,
  MenuItem,
  FormControl,
  FormControlLabel,
  Switch
} from "@material-ui/core";

import {
  ContactSupport as ContactSupportIcon,
  Business as BusinessIcon,
  HeadsetMic as HeadsetMicIcon,
  People as PeopleIcon,
  Info as InfoIcon
} from "@material-ui/icons";

class ContactFieldSet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0
    };

    this.inputs = {};
  }

  render() {
    let { props, state } = this,
      { classes } = props,
      { activeStep } = state,
      { stepper, line, root, general, fieldMargin, fieldGutter } = classes;

    return (
      <div>
        <Stepper
          nonLinear
          orientation="vertical"
          connector={<StepConnector classes={{ line: line }} />}
          classes={{ vertical: root }}
          className={stepper}
          activeStep={activeStep}
        >
          <Step>
            <StepButton icon={<ContactSupportIcon />}>
              <StepLabel>Contact Us</StepLabel>
            </StepButton>
            <StepContent className={line}>
              <div className={clsx(fieldMargin)}>
                <TextField
                  className={clsx(general)}
                  label="Email Address"
                  required
                />
              </div>
              <div className={clsx(fieldMargin)}>
                <TextField className={clsx(general)} label="Phone" />
              </div>
              <div className={clsx(fieldMargin)}>
                <TextField
                  className={clsx(general)}
                  label="Street Address"
                  inputProps={props}
                />
                <TextField className={clsx(fieldGutter)} label="Unit" />
              </div>
              <div className={clsx(fieldMargin)}>
                <TextField
                  className={clsx(general)}
                  label="City"
                  inputProps={props}
                />
                <TextField
                  label="State"
                  select
                  inputProps={{ size: 5 }}
                  autoComplete
                  className={clsx(fieldGutter)}
                >
                  {states.map(state => (
                    <MenuItem>{state}</MenuItem>
                  ))}
                </TextField>
                <TextField label="Zipcode" />
              </div>
              <div className={clsx(fieldMargin)}>
                <FormControl component="fieldset">
                  <FormControlLabel
                    value="yes"
                    control={<Switch checked color="primary" />}
                    label="Enabled Contact Us Page"
                    labelPlacement="end"
                  />
                </FormControl>
              </div>
            </StepContent>
          </Step>
          <Step>
            <StepButton icon={<BusinessIcon />}>
              <StepLabel>Department Contacts (Optional)</StepLabel>
            </StepButton>
            <StepContent className={classes.line}>
              <Stepper
                nonLinear
                orientation="vertical"
                className={classes.stepper}
                connector={<StepConnector classes={{ line: classes.line }} />}
              >
                <Step>
                  <StepButton icon={<InfoIcon />}>
                    <StepLabel>General Information</StepLabel>
                  </StepButton>
                  <StepContent className={classes.line}>
                    <div className={clsx(classes.businessName)}>
                      <TextField
                        className={clsx(classes.general)}
                        label="Sender's Display Name"
                        inputProps={props}
                      />
                      <TextField
                        className={clsx(classes.general, "store-number")}
                        label="Email Address"
                        inputProps={props}
                      />
                    </div>
                    <div className={clsx(classes.slogan)}>
                      <TextField
                        className={clsx(classes.general)}
                        label="Phone"
                        inputProps={props}
                      />
                    </div>

                    <div className={clsx(classes.fieldMargin)}>
                      <TextField
                        className={clsx(classes.general)}
                        label="Street Address"
                        inputProps={props}
                      />
                      <TextField
                        className={clsx(classes.general, "store-number")}
                        label="Unit"
                      />
                    </div>
                    <div className={clsx(classes.fieldMargin)}>
                      <TextField
                        className={clsx(classes.general)}
                        label="City"
                        inputProps={props}
                      />
                      <TextField
                        className={clsx(classes.general, "store-number")}
                        label="State"
                        select
                        inputProps={{ size: 5 }}
                        autoComplete
                      >
                        {states.map(state => (
                          <MenuItem>{state}</MenuItem>
                        ))}
                      </TextField>
                      <TextField
                        className={clsx(classes.general, "store-number")}
                        label="Zipcode"
                      />
                    </div>
                    <div className={clsx(classes.slogan)}>
                      <TextField
                        className={clsx(classes.general)}
                        label="Attention"
                        inputProps={props}
                      />
                    </div>
                  </StepContent>
                </Step>
                <Step>
                  <StepButton icon={<HeadsetMicIcon />}>
                    <StepLabel>Customer Support</StepLabel>
                  </StepButton>
                  <StepContent className={classes.line}>
                    <div className={clsx(classes.businessName)}>
                      <TextField
                        className={clsx(classes.general)}
                        label="Sender's Display Name"
                        inputProps={props}
                      />
                      <TextField
                        className={clsx(classes.general, "store-number")}
                        label="Email Address"
                        inputProps={props}
                      />
                    </div>
                    <div className={clsx(classes.slogan)}>
                      <TextField
                        className={clsx(classes.general)}
                        label="Phone"
                        inputProps={props}
                      />
                    </div>

                    <Collapse in={true}>
                      <div className={clsx(classes.storeName)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Street Address"
                          inputProps={props}
                        />
                        <TextField
                          className={clsx(classes.general, "store-number")}
                          label="Unit"
                        />
                      </div>
                      <div className={clsx(classes.storeName)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="City"
                          inputProps={props}
                        />
                        <TextField
                          className={clsx(classes.general, "store-number")}
                          label="State"
                          select
                          inputProps={{ size: 5 }}
                          autoComplete
                        >
                          {states.map(state => (
                            <MenuItem>{state}</MenuItem>
                          ))}
                        </TextField>
                        <TextField
                          className={clsx(classes.general, "store-number")}
                          label="Zipcode"
                        />
                      </div>
                      <div className={clsx(classes.slogan)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Attention"
                          inputProps={props}
                        />
                      </div>
                    </Collapse>
                  </StepContent>
                </Step>
                <Step>
                  <StepButton
                    icon={<Icon className="fas fa-hand-holding-usd" />}
                  >
                    <StepLabel>Sales</StepLabel>
                  </StepButton>
                  <StepContent className={classes.line}>
                    <div className={clsx(classes.businessName)}>
                      <TextField
                        className={clsx(classes.general)}
                        label="Sender's Display Name"
                        inputProps={props}
                      />
                      <TextField
                        className={clsx(classes.general, "store-number")}
                        label="Email Address"
                        inputProps={props}
                      />
                    </div>
                    <div className={clsx(classes.slogan)}>
                      <TextField
                        className={clsx(classes.general)}
                        label="Phone"
                        inputProps={props}
                      />
                    </div>

                    <Collapse in={true}>
                      <div className={clsx(classes.storeName)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Street Address"
                          inputProps={props}
                        />
                        <TextField
                          className={clsx(classes.general, "store-number")}
                          label="Unit"
                        />
                      </div>
                      <div className={clsx(classes.storeName)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="City"
                          inputProps={props}
                        />
                        <TextField
                          className={clsx(classes.general, "store-number")}
                          label="State"
                          select
                          inputProps={{ size: 5 }}
                          autoComplete
                        >
                          {states.map(state => (
                            <MenuItem>{state}</MenuItem>
                          ))}
                        </TextField>
                        <TextField
                          className={clsx(classes.general, "store-number")}
                          label="Zipcode"
                        />
                      </div>
                      <div className={clsx(classes.slogan)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Attention Address"
                          inputProps={props}
                        />
                      </div>
                    </Collapse>
                  </StepContent>
                </Step>
                <Step>
                  <StepButton icon={<PeopleIcon />}>
                    <StepLabel>Investors</StepLabel>
                  </StepButton>
                  <StepContent className={classes.line}>
                    <div className={clsx(classes.businessName)}>
                      <TextField
                        className={clsx(classes.general)}
                        label="Sender's Display Name"
                        inputProps={props}
                      />
                      <TextField
                        className={clsx(classes.general, "store-number")}
                        label="Email Address"
                        inputProps={props}
                      />
                    </div>
                    <div className={clsx(classes.slogan)}>
                      <TextField
                        className={clsx(classes.general)}
                        label="Phone"
                        inputProps={props}
                      />
                    </div>

                    <Collapse in={true}>
                      <div className={clsx(classes.storeName)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Street Address"
                          inputProps={props}
                        />
                        <TextField
                          className={clsx(classes.general, "store-number")}
                          label="Unit"
                        />
                      </div>
                      <div className={clsx(classes.storeName)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="City"
                          inputProps={props}
                        />
                        <TextField
                          className={clsx(classes.general, "store-number")}
                          label="State"
                          select
                          inputProps={{ size: 5 }}
                          autoComplete
                        >
                          {states.map(state => (
                            <MenuItem>{state}</MenuItem>
                          ))}
                        </TextField>
                        <TextField
                          className={clsx(classes.general, "store-number")}
                          label="Zipcode"
                        />
                      </div>
                      <div className={clsx(classes.slogan)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Attention Address"
                          inputProps={props}
                        />
                      </div>
                    </Collapse>
                  </StepContent>
                </Step>
                <Step>
                  <StepButton
                    icon={
                      <Icon className="fas fa-balance-scale" fontSize="small" />
                    }
                  >
                    <StepLabel>Legal & Attorney</StepLabel>
                  </StepButton>
                  <StepContent className={classes.line}>
                    <div className={clsx(classes.businessName)}>
                      <TextField
                        className={clsx(classes.general)}
                        label="Sender's Display Name"
                        inputProps={props}
                      />
                      <TextField
                        className={clsx(classes.general, "store-number")}
                        label="Email Address"
                        inputProps={props}
                      />
                    </div>
                    <div className={clsx(classes.slogan)}>
                      <TextField
                        className={clsx(classes.general)}
                        label="Phone"
                        inputProps={props}
                      />
                    </div>

                    <Collapse in={true}>
                      <div className={clsx(classes.storeName)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Street Address"
                          inputProps={props}
                        />
                        <TextField
                          className={clsx(classes.general, "store-number")}
                          label="Unit"
                        />
                      </div>
                      <div className={clsx(classes.storeName)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="City"
                          inputProps={props}
                        />
                        <TextField
                          className={clsx(classes.general, "store-number")}
                          label="State"
                          select
                          inputProps={{ size: 5 }}
                          autoComplete
                        >
                          {states.map(state => (
                            <MenuItem>{state}</MenuItem>
                          ))}
                        </TextField>
                        <TextField
                          className={clsx(classes.general, "store-number")}
                          label="Zipcode"
                        />
                      </div>
                      <div className={clsx(classes.slogan)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Attention Address"
                          inputProps={props}
                        />
                      </div>
                    </Collapse>
                  </StepContent>
                </Step>
              </Stepper>
            </StepContent>
          </Step>
        </Stepper>
      </div>
    );
  }
}

export default withStyles(styles, ContactFieldSet);
