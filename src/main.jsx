import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import AboutPage from "./AboutPage";
import PokemonCardPage from "./PokemonCardPage";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/evolutions/:id">
          <AboutPage />
        </Route>
        <Route exact path="/pokemon/:id/base-stats">
          <PokemonCardPage type="base-stats" />
        </Route>
        <Route exact path="*">
          <p>not found</p>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
