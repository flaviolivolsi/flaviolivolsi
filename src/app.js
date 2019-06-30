import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Terminal from "./components/terminal";
import Where from "./components/where";

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Terminal} />
      <Route path="/whereami" exact component={Where} />
    </div>
  </Router>
);

export default App;
