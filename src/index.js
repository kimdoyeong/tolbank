import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { loadableReady } from "@loadable/component";
import { BrowserRouter } from "react-router-dom";
const root = document.getElementById("root");

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
if (process.env.NODE_ENV === "production") {
  loadableReady(() => {
    ReactDOM.hydrate(<Root />, root);
  });
} else {
  ReactDOM.render(<Root />, root);
}
