import React, { Component } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import StepConnector from "@material-ui/core/StepConnector";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";
import countries from "@datasets/country-list";
import currencies from "currenci";
import languages from "google-tts-languages";
import StoreName from "./General/StoreName";
import Contact from "./General/Contact";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

import {
  Store as StoreIcon,
  Phone as PhoneIcon,
  Public as DomainIcon,
  Place as PlaceIcon,
  BarChart as BarChartIcon,
  Language as LanguageIcon,
  NoEncryption as NoEncryptionIcon,
  Https as HttpsIcon,
  AccessTime as AccessTimeIcon,
  AttachMoney as AttachMoneyIcon,
  Settings as SettingsIcon,
  Timer as TimerIcon,
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  CheckBox as CheckBoxIcon
} from "@material-ui/icons";

class CreateStoreForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      complete: false
    };

    this.form = React.createRef();
  }

  getSteps() {
    return [
      "Store Name & Slogan",
      "Contact Information",
      "Domain Settings",
      "Locale Settings"
    ];
  }
  getContent(step) {
    switch (step) {
      case 0:
        return <StoreName inputs={this.props.inputs} />;
      case 1:
        return <Contact inputs={this.props.inputs} />;
      case 2:
        return (
          <Stepper
            nonLinear
            orientation="vertical"
            className={classes.stepper}
            activeStep={0}
            connector={<StepConnector classes={{ line: classes.line }} />}
          >
            <Step>
              <StepButton icon={<LanguageIcon />}>
                <StepLabel>Domain Name</StepLabel>
              </StepButton>
              <StepContent className={classes.line}>
                <Stepper
                  nonLinear
                  className={classes.stepper}
                  orientation="vertical"
                  connector={<StepConnector classes={{ line: classes.line }} />}
                  activeStep={0}
                >
                  <Step>
                    <StepButton icon={<NoEncryptionIcon />}>
                      <StepLabel>Base URLs</StepLabel>
                    </StepButton>
                    <StepContent className={classes.line}>
                      <div className={clsx(classes.slogan)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Domain Name"
                          inputProps={props}
                          helperText="E.g. http://www.exampale.com/"
                          required
                        />
                      </div>
                      <div className={clsx(classes.slogan)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Base Link URL"
                          inputProps={props}
                          helperText="E.g. http://www.exampale.com/assets"
                        />
                      </div>
                      <div className={clsx(classes.slogan)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Base Static Files URL"
                          inputProps={props}
                          helperText="E.g. http://www.exampale.com/cdn"
                        />
                      </div>
                      <div className={clsx(classes.slogan)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Base Media Files URL"
                          inputProps={props}
                          helperText="E.g. http://www.exampale.com/cdn-catalog"
                        />
                      </div>
                    </StepContent>
                  </Step>
                  <Step>
                    <StepButton icon={<HttpsIcon />}>
                      <StepLabel>Secure Base URLs (Optional)</StepLabel>
                    </StepButton>
                    <StepContent className={classes.line}>
                      <div className={clsx(classes.slogan)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Secure Domain Name"
                          inputProps={props}
                          helperText="E.g. http://www.exampale.com/"
                          required
                        />
                      </div>
                      <div className={clsx(classes.slogan)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Secure Base Link URL"
                          inputProps={props}
                          helperText="E.g. http://www.exampale.com/assets"
                        />
                      </div>
                      <div className={clsx(classes.slogan)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Secure Base Static Files URL"
                          inputProps={props}
                          helperText="E.g. http://www.exampale.com/cdn"
                        />
                      </div>
                      <div className={clsx(classes.slogan)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Secure Base Media Files URL"
                          inputProps={props}
                          helperText="E.g. http://www.exampale.com/cdn-catalog-assets"
                        />
                      </div>
                      <FormControl component="fieldset">
                        <FormControlLabel
                          value="yes"
                          control={<Switch checked color="primary" />}
                          label="Use Secure URLs on Storefront"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="yes"
                          control={<Switch checked color="primary" />}
                          label="Use Secure URLs in Admin"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Switch color="primary" />}
                          label="Enable HTTP Strict Transport Security (HSTS)"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Switch color="primary" />}
                          label="Upgrade Insecure Requests"
                          labelPlacement="end"
                        />
                      </FormControl>
                    </StepContent>
                  </Step>
                  <Step>
                    <StepButton
                      icon={
                        <Icon
                          className={clsx("fas fa-cookie-bite")}
                          fontSize="small"
                        />
                      }
                    >
                      <StepLabel>Default Cookies Settings (Optional)</StepLabel>
                    </StepButton>
                    <StepContent>
                      <div className={clsx(classes.slogan)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Cookie Domain"
                          inputProps={props}
                          helperText="E.g. http://www.exampale.com/"
                        />
                      </div>
                      <div className={clsx(classes.slogan)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Cookie Path"
                          inputProps={props}
                          value="/"
                          helperText="E.g. /products"
                        />
                      </div>
                      <div className={clsx(classes.slogan)}>
                        <TextField
                          className={clsx(classes.general)}
                          label="Cookie Lifetime"
                          value={3600}
                          inputProps={props}
                          placeholder="E.g. 3600"
                          helperText="In Milliseconds"
                        />
                      </div>
                      <FormControl component="fieldset">
                        <FormControlLabel
                          value="yes"
                          control={<Switch defaultChecked color="primary" />}
                          label="Use HTTP Only"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Switch checked color="primary" />}
                          label="Cookie Restriction Mode"
                          labelPlacement="end"
                        />
                      </FormControl>
                    </StepContent>
                  </Step>
                </Stepper>
              </StepContent>
            </Step>
            <Step>
              <StepButton icon={<SettingsIcon />}>
                <StepLabel>URL Options</StepLabel>
              </StepButton>
              <StepContent>
                <div>
                  <FormControl component="fieldset">
                    <FormControlLabel
                      value="yes"
                      control={<Switch checked color="primary" />}
                      label="Use Web Server Rewrites"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Switch color="primary" />}
                      label="Session Validate REMOTE_ADDR"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Switch color="primary" />}
                      label="Session Validate HTTP_VIA"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Switch color="primary" />}
                      label="Session Validate HTTP_x_FORWARDED_FOR"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Switch color="primary" />}
                      label="Session Validate  HTTP_USER_AGENT"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Switch color="primary" />}
                      label="Use SID on Frontend"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="yes"
                      control={<Switch color="primary" />}
                      label="Redirect to CMS-page if Cookies are Disabled"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="yes"
                      control={<Switch color="primary" />}
                      label="Show Notice if JavaScript is Disabled"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Switch color="primary" />}
                      label="Show Notice if Local Storage is Disabled"
                      labelPlacement="end"
                    />
                  </FormControl>
                </div>
              </StepContent>
            </Step>
          </Stepper>
        );
      case 3:
        return (
          <Stepper
            nonLinear
            orientation="vertical"
            className={clsx(classes.stepper)}
            connector={<StepConnector classes={{ line: classes.line }} />}
            activeStep={0}
          >
            <Step>
              <StepButton icon={<AccessTimeIcon />}>
                <StepLabel>Country & Timezones</StepLabel>
              </StepButton>
              <StepContent className={clsx(classes.line)}>
                <div>
                  <TextField
                    className={clsx(classes.general, classes.storeName)}
                    label="Select Country*"
                    inputProps={{ size: 50, list: "countries" }}
                    helperText="E.g. United States"
                  />
                </div>
                <div>
                  <TextField
                    className={clsx(classes.general, classes.storeName)}
                    label="Select Timezone*"
                    inputProps={{ size: 50, list: "timezone-ids" }}
                    helperText="E.g. America/Chicago"
                  />
                </div>
                <div className={classes.fieldMargin}>
                  <div>
                    <TextField
                      label="Select Allowed Countries"
                      value={["System Default"]}
                      select
                      disabled
                      SelectProps={{
                        multiple: true,
                        classes: { selectMenu: clsx(classes.selection) },
                        renderValue: value => {
                          if (
                            Array.isArray(value) &&
                            value.length === 1 &&
                            value[0] === "System Default"
                          ) {
                            return <p>{value[0]}</p>;
                          } else {
                            return (
                              <ul>
                                {value.map(v => (
                                  <li>{v}</li>
                                ))}
                              </ul>
                            );
                          }
                        }
                      }}
                      inputProps={props}
                    >
                      {countries.getNames().map(country => (
                        <MenuItem key={country}>{country}</MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <FormControlLabel
                      value="yes"
                      control={
                        <Checkbox
                          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                          color="primary"
                          checked
                        />
                      }
                      label={
                        <Typography variant="caption">
                          Use System Default
                        </Typography>
                      }
                      labelPlacement="end"
                    />
                  </div>
                </div>
                <div className={classes.fieldMargin}>
                  <div>
                    <TextField
                      label="Select European Union Countries"
                      value={["System Default"]}
                      select
                      disabled
                      SelectProps={{
                        multiple: true,
                        classes: { selectMenu: clsx(classes.selection) },
                        renderValue: value => {
                          if (
                            Array.isArray(value) &&
                            value.length === 1 &&
                            value[0] === "System Default"
                          ) {
                            return <p>{value[0]}</p>;
                          } else {
                            return (
                              <ul>
                                {value.map(v => (
                                  <li>{v}</li>
                                ))}
                              </ul>
                            );
                          }
                        }
                      }}
                      inputProps={props}
                    >
                      {countries.getNames().map(country => (
                        <MenuItem key={country}>{country}</MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <FormControlLabel
                      value="yes"
                      control={
                        <Checkbox
                          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                          color="primary"
                          checked
                        />
                      }
                      label={
                        <Typography variant="caption">
                          Use System Default
                        </Typography>
                      }
                      labelPlacement="end"
                    />
                  </div>
                </div>
                <div className={classes.fieldMargin}>
                  <div>
                    <TextField
                      label="Select Countries with Optional Postal Code"
                      value={["System Default"]}
                      select
                      disabled
                      SelectProps={{
                        multiple: true,
                        classes: { selectMenu: clsx(classes.selection) },
                        renderValue: value => {
                          if (
                            Array.isArray(value) &&
                            value.length === 1 &&
                            value[0] === "System Default"
                          ) {
                            return <p>{value[0]}</p>;
                          } else {
                            return (
                              <ul>
                                {value.map(v => (
                                  <li>{v}</li>
                                ))}
                              </ul>
                            );
                          }
                        }
                      }}
                      inputProps={props}
                    >
                      {countries.getNames().map(country => (
                        <MenuItem key={country}>{country}</MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <FormControlLabel
                      value="yes"
                      control={
                        <Checkbox
                          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                          color="primary"
                          checked
                        />
                      }
                      label={
                        <Typography variant="caption">
                          Use System Default
                        </Typography>
                      }
                      labelPlacement="end"
                    />
                  </div>
                </div>
                <div className={classes.fieldMargin}>
                  <div>
                    <TextField
                      label="Select Top Destination Countries"
                      value={[]}
                      select
                      SelectProps={{
                        multiple: true,
                        classes: { selectMenu: clsx(classes.selection) },
                        renderValue: value => {
                          if (Array.isArray(value) && value.length >= 1) {
                            return (
                              <ul>
                                {value.map(v => (
                                  <li>{v}</li>
                                ))}
                              </ul>
                            );
                          }
                        }
                      }}
                      inputProps={props}
                    >
                      {countries.getNames().map(country => (
                        <MenuItem key={country}>{country}</MenuItem>
                      ))}
                    </TextField>
                  </div>
                </div>
                <div className={classes.fieldMargin}>
                  <div>
                    <TextField
                      label="Select Countries for Required State"
                      value={["System Default"]}
                      select
                      disabled
                      SelectProps={{
                        multiple: true,
                        classes: { selectMenu: clsx(classes.selection) },
                        renderValue: value => {
                          if (
                            Array.isArray(value) &&
                            value.length === 1 &&
                            value[0] === "System Default"
                          ) {
                            return <p>{value[0]}</p>;
                          } else {
                            return (
                              <ul>
                                {value.map(v => (
                                  <li>{v}</li>
                                ))}
                              </ul>
                            );
                          }
                        }
                      }}
                      inputProps={props}
                    >
                      {countries.getNames().map(country => (
                        <MenuItem key={country}>{country}</MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <FormControlLabel
                      value="yes"
                      control={
                        <Checkbox
                          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                          checkedIcon={<CheckBoxIcon fontSize="small" />}
                          color="primary"
                          checked
                        />
                      }
                      label={
                        <Typography variant="caption">
                          Use System Default
                        </Typography>
                      }
                      labelPlacement="end"
                    />
                  </div>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepButton icon={<LanguageIcon />}>
                <StepLabel>Languages</StepLabel>
              </StepButton>
              <StepContent className={clsx(classes.line)}>
                <div className={clsx(classes.fieldMargin)}>
                  <TextField
                    label="Select Language*"
                    value={languages.findByCode("en-US").name}
                    select
                    SelectProps={{
                      classes: { selectMenu: clsx(classes.selection) },
                      renderValue: value => <p>{value}</p>
                    }}
                    inputProps={props}
                  >
                    {languages.map(lang => (
                      <MenuItem key={lang.name}>{lang.name}</MenuItem>
                    ))}
                  </TextField>
                </div>
                <div>
                  <TextField
                    label="Select Supported Languages"
                    value={[languages.findByCode("en-US").name]}
                    select
                    multiple
                    SelectProps={{
                      classes: { selectMenu: clsx(classes.selection) },
                      renderValue: value => {
                        if (
                          Array.isArray(value) &&
                          value.length === 1 &&
                          value[0] === "System Default"
                        ) {
                          return <p>{value[0]}</p>;
                        } else {
                          return (
                            <ul>
                              {value.map(v => (
                                <li key={v}>{v}</li>
                              ))}
                            </ul>
                          );
                        }
                      }
                    }}
                    inputProps={props}
                  >
                    {languages.map(lang => (
                      <MenuItem key={lang.name}>{lang.name}</MenuItem>
                    ))}
                  </TextField>
                </div>
              </StepContent>
            </Step>
            <Step>
              <StepButton icon={<AttachMoneyIcon />}>
                <StepLabel>Currency Exchange</StepLabel>
              </StepButton>
              <StepContent className={clsx(classes.line)}>
                <div className={clsx(classes.fieldMargin)}>
                  <TextField
                    label="Select Base Currency*"
                    value={`${currencies.list[0].name} (${
                      currencies.list[0].code
                    })`}
                    select
                    SelectProps={{
                      classes: { selectMenu: clsx(classes.selection) },
                      renderValue: value => <p>{value}</p>
                    }}
                    inputProps={props}
                  >
                    {currencies.list.map(({ name, code }) => (
                      <MenuItem key={code}>{`${code} - ${name}`}</MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className={clsx(classes.fieldMargin)}>
                  <TextField
                    label="Default Display Currency*"
                    value={`${currencies.list[0].name} (${
                      currencies.list[0].code
                    })`}
                    select
                    SelectProps={{
                      classes: { selectMenu: clsx(classes.selection) },
                      renderValue: value => <p>{value}</p>
                    }}
                    inputProps={props}
                  >
                    {currencies.list.map(({ name, code }) => (
                      <MenuItem key={code}>{`${code} - ${name}`}</MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className={clsx(classes.fieldMargin)}>
                  <TextField
                    label="Select Allowed Currencies"
                    value={[
                      `${currencies.list[0].name} (${currencies.list[0].code})`
                    ]}
                    select
                    multiple
                    SelectProps={{
                      classes: { selectMenu: clsx(classes.selection) },
                      renderValue: value => {
                        if (Array.isArray(value) && value.length === 1) {
                          return <p>{value[0]}</p>;
                        } else {
                          return (
                            <ul>
                              {value.map(v => (
                                <li key={v}>{v}</li>
                              ))}
                            </ul>
                          );
                        }
                      }
                    }}
                    inputProps={props}
                  >
                    {currencies.list.map(({ name, code, symbol }) => (
                      <MenuItem key={code}>{`${code} - ${name}`}</MenuItem>
                    ))}
                  </TextField>
                </div>

                <div>
                  <div
                    className={clsx(
                      classes.fieldMargin,
                      classes.exchangeHeader
                    )}
                  >
                    <TimerIcon fontSize="small" />
                    <Typography
                      component="span"
                      className={clsx(classes.fieldGutter, "button")}
                      color="primary"
                    >
                      Scheduled Import Settings
                    </Typography>
                  </div>
                  <Collapse in={true}>
                    <div className={clsx(classes.fieldMargin)}>
                      <FormControlLabel
                        value="yes"
                        control={<Switch checked color="primary" />}
                        label="Enable Currency Exchange Services"
                        labelPlacement="end"
                      />
                    </div>

                    <div className={clsx(classes.fieldMargin)}>
                      <TextField
                        label="Select Service"
                        value="Webservicex"
                        select
                        SelectProps={{
                          classes: { selectMenu: clsx(classes.selection) },
                          renderValue: value => <p>{value}</p>
                        }}
                        inputProps={props}
                      >
                        {["Webservicex", "Yahoo Finance", "Fixer.io"].map(
                          service => (
                            <MenuItem key={service}>{service}</MenuItem>
                          )
                        )}
                      </TextField>
                    </div>
                    <div className={clsx(classes.fieldMargin)}>
                      <TextField
                        label="Schedule Start Time"
                        helperText="Military Time"
                        value="02:00"
                        InputProps={{
                          inputComponent: TimeMaskInput
                        }}
                      />
                      <TextField
                        label="Select Import Frequency"
                        value="Daily"
                        select
                        className={clsx(classes.fieldGutter)}
                        SelectProps={{
                          classes: { selectMenu: clsx(classes.frequency) },
                          renderValue: value => <p>{value}</p>
                        }}
                      >
                        {["Daily", "Weekly", "Monthly"].map(service => (
                          <MenuItem key={service}>{service}</MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <div className={clsx(classes.fieldMargin)}>
                      <TextField
                        label="Connection Timeout"
                        helperText="In Seconds"
                        value={1000}
                      />
                    </div>
                  </Collapse>
                </div>
              </StepContent>
            </Step>
          </Stepper>
        );
      default:
        return "Unknown step";
    }
  }

  next() {
    this.setState(({ activeStep }) => ({ activeStep: activeStep + 1 }));
  }
  back() {
    this.setState(({ activeStep }) => ({ activeStep: activeStep - 1 }));
  }
  reset() {
    this.setState(({ activeStep }) => ({ activeStep: 0 }));
  }

  activeStep(step) {
    return () => {
      this.setState({ activeStep: step });
    };
  }
  render() {
    let { state, props } = this,
      { activeStep } = state,
      { classes } = props,
      { root } = classes;

    const getIcon = step => {
      switch (step) {
        case "Store Name & Slogan":
          return <StoreIcon fontSize="small" />;
        case "Contact Information":
          return <PhoneIcon fontSize="small" />;
        case "Domain Settings":
          return <DomainIcon fontSize="small" />;
        case "Locale Settings":
          return <PlaceIcon fontSize="small" />;
        case "Report Settings":
          return <BarChartIcon fontSize="small" />;
        default:
          return null;
      }
    };

    return (
      <form id="create-store" name="create-store" ref={this.form}>
        <Stepper
          nonLinear
          activeStep={activeStep}
          orientation="vertical"
          className={classes.root}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton icon={getIcon(label)} onClick={handleStep(index)}>
                {label}
              </StepButton>
              <StepContent>
                {getStepContent(activeStep)}
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </form>
    );
  }
}

export default withStyles(styles, CreateStoreForm);
