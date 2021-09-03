import React, { useState } from "react";
import fire from "./fire";

export default class AskQues extends React.Component {
  constructor(props) {
    super(props);
    // console.log("this is fire", fire.auth().currentUser);
    var s = false;
    this.state = { user: {}, signedIn: s };
    if (fire.auth().currentUser != null) {
      this.getUserData(fire.auth().currentUser.email).then((user) => {
        user = user;
      });
    }

    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("state = definitely signed in");
        this.setState({ signedIn: true });
      } else {
        console.log("state = definitely signed out");
      }
    });
  }

  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      console.log("this is user", user);
      if (user) {
        this.setState({ user: user });
      } else {
      }
    });
  };
  getUserData = (email) => {
    console.log("am i actually being called?");
    return new Promise((res, rej) => {
      fire
        .firestore()
        .collection("users")
        .where("email", "==", email)
        .get()
        .then(function (querySnapshot) {
          //TODO MAKE THIS HANDLE THE CASE WHEN THERE ARE NO DOCUMENTS. IF YOU ARE ERRORING USING THIS METHOD, THAT MIGHT BE THE CAUSE.
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots

            res({ id: doc.id, user: doc.data() });
          });
        })
        .catch(function (error) {
          rej("Error getting documents: ", error);
        });
    });
  };

  render() {
    return (
      <section className="hero">
        {this.state.signedIn==true && (
          <section>
            <h1>{fire.auth().currentUser.email}</h1>
          </section>
        )}
        {this.state.signedIn == false && (
          <section>
            <h2>Logged out.</h2>
          </section>
        )}
      </section>
    );
  }
}
