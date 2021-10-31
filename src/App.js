import logo from "./logo.svg";
import "./App.css";
import fire from "./fire";
import Login from "./Login";
import Home from "./Home";
import Main from "./Main.js";
import React, { useState, useEffect } from "react";
function App() {
  document.title = "FIRST Answers";
  return (
    <div className="App">
      {/* {user ? (
        <Hero handleLogout={handleLogout} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSignUp={handleSignUp}
          handleLogin={handleLogin}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        /> */}
      {/* )} */}
      {/* <Hero handleLogout={handleLogout} /> */}

      <Main />
    </div>
  );
}

export default App;
