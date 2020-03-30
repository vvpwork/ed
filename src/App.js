import React from "react";
import Menu from "./components/BurgerMenu";
import { Switch, Route, Redirect } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import GraphicPage from "pages/GraphicPage";
import WebPage from "./pages/WebPage";
import ErrorPage from "./pages/ErrorPage";

import R from "./configs/routes";
import "./style/index.scss";

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path={R.HOME} component={HomePage} />
        <Route path={R.GRAPHIC} component={GraphicPage} />
        <Route path={R.WEB} component={WebPage} />
        <Route path={R.ERROR} component={ErrorPage} />
        <Redirect to={R.ERROR} />
      </Switch>
    </div>
  );
}

export default App;
