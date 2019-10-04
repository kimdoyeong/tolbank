import React from "react";
import { Route, Switch } from "react-router-dom";

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

export default App;
