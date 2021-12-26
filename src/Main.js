import React, { useState, useEffect } from "react";
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
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogout = () => {
    console.log("here?");
    fire.auth().signOut();
    window.location.reload();
  };
  useEffect(() => {
    // Update the document title using the browser API
    getLoggedIn();
    // getUserData(fire.auth().currentUser.email);
    // if (fire.auth().currentUser != null) {
    // }
  }, []);
  const getLoggedIn = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("state = definitely signed in");
        setLoggedIn(true);
      } else {
        console.log("state = definitely signed out");
      }
    });
  };
  console.log("this is currrr", fire.auth().currentUser);
  return (
    <Router>
      <div>
        <nav>
          <div className="Elements">
            <Link to="/">Forums</Link>
            <Link to="scoreboard">Scoreboard</Link>
            <Link to="/Links">Links</Link>
            {loggedIn == false && <Link to="/signup">Sign Up</Link>}
            {loggedIn == false && <Link to="/login">Login</Link>}
            {/* <Link to="/myprofile">My Profile</Link> */}
            {loggedIn == true && (
              <button className="logout" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
          <div className="UserLinks"></div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/scoreboard" component={Scoreboard} />
          <Route path="/Links">
            <Links />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          {/* <Route path="/myprofile">
            <MyProfile />
          </Route> */}
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
