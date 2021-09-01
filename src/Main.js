import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Login from "./Login.js";
import fire from "./fire";
import "./App.css";
import SignUp from "./SignUp.js";
export default function Main() {
  const handleLogout = () => {
    fire.auth().signOut();
  };
  console.log("this is currrr", fire.auth().currentUser);
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
            {fire.auth().currentUser == null && <Link to="/login">Login</Link>}
            {fire.auth().currentUser != null &&
              console.log("this is cut", fire.auth().currentUser) && (
                <h1>HEYYYYYY</h1>
              )}
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
