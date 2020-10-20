export default theme => ({
  root: {
    width: 320
  },
  card: {
    //width: "100%"
  },
  cardMedia: {
    width: 320,
    height: 240,
    margin: [[0, "auto"]]
  },
  actionButton: {},
  actionLabel: {
    marginRight: "0.5em"
  },
  actionArea: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  subheader: {
    display: "flex",
    alignItems: "center"
  },
  title: {
    ...theme.typography.subtitle1,
    fontWeight: 600
  },
  subtitle: {
    ...theme.typography.subtitle2
  },
  activeStatusIndictor: {
    marginRight: "0.8rem",
    backgroundColor: "green"
  },
  inactiveStatusIndictor: {
    marginRight: "0.8rem",
    backgroundColor: "red"
  }
});
