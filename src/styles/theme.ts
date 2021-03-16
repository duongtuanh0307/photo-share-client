import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", Helvetica, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: "#e60023",
      light: "#f72e4c",
      dark: "#c20320",
    },
    secondary: {
      main: "#efefef",
      light: "#c4c4c4",
    },
    error: {
      main: "#ed4956",
    },
    background: {
      default: "#fafafa",
      paper: "rgba(77,77,77,0.1)",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          boxSizing: "border-box",
          webkitBoxSizing: "border-box",
          mozBoxSizing: "border-box",
          fontSize: 16,
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: "unset",
        boxShadow: "none",
      },
      contained: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
        "&:focus": {
          boxShadow: "none",
        },
      },
    },
    MuiDialog: {
      paper: {
        borderRadius: 12,
        padding: "32px 16px",
        backgroundColor: "#fafafa",
      },
    },
    MuiInput: {
      root: {
        backgroundColor: "#fafafa",
        border: "1px solid #efefef",
        "&:hover": {
          backgroundColor: "#fafafa",
        },
        "&$focused": {
          backgroundColor: "#fafafa",
        },
      },
    },
  },
});

export default theme;
