import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../screens/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
        {/* <article className="articleContainer">
          <p>This is page 1 (home)</p>
        </article> */}
      </Route>
      <Route exact path="/page2">
        <article className="articleContainer">
          <p>This is page 2</p>
        </article>
      </Route>
    </Switch>
  );
};

export default Routes;
