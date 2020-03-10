import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import { store } from "./store/MovieSearchStore";
import { configure } from "mobx";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

configure({ enforceActions: "always" });
