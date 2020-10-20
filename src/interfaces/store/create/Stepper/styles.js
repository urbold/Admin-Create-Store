let defaultMargin = 50,
  defaultInputSize = 50,
  inputProps = { size: defaultInputSize };

export default theme => {
  return {
    root: {
      backgroundColor: "transparent"
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    resetContainer: {
      padding: theme.spacing(3),
      backgroundColor: "transparent"
    },
    generel: {
      marginBottom: "1rem"
    },
    storeName: {
      marginBottom: defaultMargin
    },
    businessName: {
      marginBottom: defaultMargin
    },
    slogan: {
      marginBottom: defaultMargin
    },
    line: {
      border: "none"
    },
    stepper: {
      backgroundColor: "transparent"
    },
    switchList: {
      width: "50%"
    },
    selection: {
      width: 405,
      height: "auto"
    },
    exchangeHeader: {
      display: "flex",
      alignItems: "center",
      marginTop: 100,

      "& .button": {
        cursor: "pointer"
      }
    },
    frequency: {
      width: 195
    },
    fieldMargin: {
      marginBottom: defaultMargin
    },
    fieldGutter: {
      marginLeft: "1rem"
    },
    inputErrorTooltip: {},
    inputErrorTooltipHeader: {},
    inputErrorTooltipIcon: {},
    inputErrorMessage: {},
    inputErrorTooltipInput: {},
    inputErrorTooltipBody: {},
    inputError: {},
    inputErrorIcon: {},
    inputErrorType: {}
  };
};
