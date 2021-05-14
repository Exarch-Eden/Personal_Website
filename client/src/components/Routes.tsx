import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../screens/Home";
import Error from "../screens/Error";
import About from "../screens/About";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/404">
        <Error errorCode={404} errorMessage="Page not found" />
      </Route>
      <Redirect to="/404" />
    </Switch>
  );
};

export default Routes;
