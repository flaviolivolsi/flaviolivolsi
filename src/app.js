import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Terminal from "./components/terminal";
import Where from "./components/where";
import "./styles/main.scss";

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Terminal} />
      <Route path="/whereami" component={Where} />
    </div>
  </Router>
);

export default App;
