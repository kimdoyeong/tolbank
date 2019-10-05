import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { loadableReady } from "@loadable/component";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import "react-hot-loader/patch";
const root = document.getElementById("root");

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
if (process.env.NODE_ENV === "production") {
  loadableReady(() => {
    ReactDOM.hydrate(<Root />, root);
  });
} else {
  ReactDOM.render(<Root />, root);
}
