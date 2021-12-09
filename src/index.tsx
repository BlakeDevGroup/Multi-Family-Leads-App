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

const auth = new AuthService();

auth.login("user", "users").then(function (result) {
  console.log(result);
});

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Shell view={<Router />} />
        </BrowserRouter>
      </Provider>
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
