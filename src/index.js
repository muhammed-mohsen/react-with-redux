import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import createStore from "./store/createStore";
import { Provider } from "react-redux";
import { watchAgeUp } from "./store/saga/saga";

const { store, configureSagaMiddleware } = createStore();
configureSagaMiddleware().run(watchAgeUp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
