import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Shell from "./components/Shell/Shell";
import Router from "./components/Routes/Routes";

import reportWebVitals from "./reportWebVitals";
import { Grommet } from "grommet";
import AuthService from "./common/auth/AuthService";
import store from "./store";
import { Provider } from "react-redux";
import NoteApi from "./core/notes/Note.api";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // Purple
      main: "#3D3E93",
    },
    secondary: {
      // Orange
      main: "#FFB005",
    },
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
