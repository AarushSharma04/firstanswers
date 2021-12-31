import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useHistory,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import fire from "./fire";
import firebase from "firebase";
const Login = (props) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [teamNumber, setTeamNumber] = useState("");
  const [teamName, setTeamName] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();
  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setName("");
    setTeamNumber("");
    setTeamName("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
    setNameError("");
  };
  const handleSignUp = () => {
    clearErrors();
    if (name.length > 2) {
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          fire
            .firestore()
            .collection("users")
            .add({
              name: name,
              email: email,
              teamNumber: teamNumber,
              teamName: teamName,
              quesAns: 0,
              points: 0,
            })
            .then(() => {
              history.push("./");
            })
            .catch((err) => {
              console.log("here??");

              switch (err.code) {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                  setEmailError(err.message);
                  break;
                case "auth/weak-password":
                  setPasswordError(err.message);
                  break;
              }
            });
        });
    } else {
      setNameError("Please enter your name!");
    }
  };
  const handleLogout = () => {
    fire.auth().signOut();
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);
  return (
    <section className="login">
      <div className="loginContainer">
        <label>Name</label>
        <input
          type="text"
          autoFocus
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="errorMsg">{nameError}</p>
        <label>Email</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>

        <label>Team Number</label>
        <input
          type="numbers"
          autoFocus
          required
          value={teamNumber}
          onChange={(e) => setTeamNumber(e.target.value)}
        />
        <label>Team Name</label>
        <input
          type="text"
          autoFocus
          required
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        {/* <p className="errorMsg">{emailError}</p> */}
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          <button className="signUpButt" onClick={handleSignUp}>
            Sign Up
          </button>

          <Link to="/login">
            <p>
              Have an account?
              <span onClick={() => setHasAccount(!hasAccount)}>Login</span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
