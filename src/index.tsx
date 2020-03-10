import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./store/MovieSearchStore";
import { configure } from "mobx";
import { MovieSearchStoreContext } from "./context/BookSearchStoreContext";

ReactDOM.render(
  <MovieSearchStoreContext.Provider value={store}>
    <App />
  </MovieSearchStoreContext.Provider>,
  document.getElementById("root")
);

configure({ enforceActions: "always" });
