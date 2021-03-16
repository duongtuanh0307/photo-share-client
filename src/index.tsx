import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./styles/theme";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <App />
        </Router>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
