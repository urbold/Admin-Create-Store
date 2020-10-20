export default theme => ({
  root: {
    position: "sticky",
    padding: theme.spacing.unit
  },
  interfaceName: {
    flexGrow: 2
  },
  filters: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 2
  },
  controls: {
    marginRight: theme.spacing(3),
    backgroundColor: "transparent"
  },
  filterLabel: {
    padding: [[0, theme.spacing(3)]]
  },
  search: {
    marginRight: theme.spacing(2)
  },
  connectorActive: {
    "& $connectorLine": {
      borderColor: theme.palette.secondary.main
    }
  },
  connectorCompleted: {
    "& $connectorLine": {
      borderColor: theme.palette.primary.main
    }
  },
  connectorDisabled: {
    "& $connectorLine": {
      borderColor: theme.palette.grey[100]
    }
  },
  connectorLine: {
    transition: theme.transitions.create("border-color")
  }
});
