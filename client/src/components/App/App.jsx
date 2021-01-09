import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../Navbar/navbar";
import Home from "../Home/home";
import Shorten from "../Shorten/shorten";
import About from "../About/about";
import Info from "../Info/info";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/shorten" component={Shorten} />
        <Route exact path="/URL" component={Info} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
