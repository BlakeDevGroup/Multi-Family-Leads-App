import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Shell from "./components/Shell/Shell";
import Router from "./components/Routes/Routes";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // Purple
      main: "#6C63FF",
      contrastText: "#ffffff",
    },
    secondary: {
      // Orange
      main: "#FFB005",
    },
  },
  typography: {
    fontFamily: "Open Sans",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Shell view={<Router />} />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
