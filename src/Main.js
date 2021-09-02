import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Login from "./Login.js";
import fire from "./fire";
import "./App.css";
import MyProfile from "./MyProfile.js";
import SignUp from "./SignUp.js";
import Scoreboard from "./Scoreboard.js";
import OneQues from "./OneQues.js";
import Links from "./Links.js";
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
            <Link to="/scoreboard">Scoreboard</Link>
            <Link to="/Links">Links</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/myprofile">My Profile</Link>
          </div>
          <div className="UserLinks"></div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/scoreboard">
            <Scoreboard />
          </Route>
          <Route path="/Links">
            <Links />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/myprofile">
            <MyProfile />
          </Route>
          <Route path="/question">
            <OneQues />
          </Route>
          <Route path="/">
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
