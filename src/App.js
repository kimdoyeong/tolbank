import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/index.css";
import { hot } from "react-hot-loader/root";

import pages from "./pages";

function App() {
  return (
    <Switch>
      {pages.map(d => (
        <Route key={d.path} {...d} />
      ))}
    </Switch>
  );
}

export default hot(App);
