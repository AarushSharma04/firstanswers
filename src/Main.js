import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Login from "./Login.js";

import "./App.css";
import SignUp from "./SignUp.js";
export default function Main() {
  return (
    <Router>
      <div>
        <nav>
          <div className="Elements">
            <Link to="/">Forums</Link>
            <Link to="/Scoreboard">Scoreboard</Link>
            <Link to="/Links">Links</Link>
          </div>
          <div className="UserLinks">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>

          <Route path="/Scoreboard">
            <Home />
          </Route>

          <Route path="/Links">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Users() {
  return <h2>Usessssrs</h2>;
}
