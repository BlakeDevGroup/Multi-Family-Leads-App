import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Shell from "./components/Shell/Shell";
import Router from "./components/Routes/Routes";

import reportWebVitals from "./reportWebVitals";
import { Grommet } from "grommet";

const theme = {
  global: {
    font: {
      family: "Roboto",
    },
    animation: {
      duration: ".5s",
    },
  },
};
ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <BrowserRouter>
        <Shell view={<Router />} />
      </BrowserRouter>
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
