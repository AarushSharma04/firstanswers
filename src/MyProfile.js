import React, { useState } from "react";
import fire from "./fire";
import firebase from "firebase";
import FlatList from "flatlist-react";
import MultiPicker from "react-multi-picker";
import Moment from "react-moment";
import ButtonCheck from "./Components/ButtonCheck";
import moment from "moment";
import Fire from "./FirebaseMethods";
import AllTheQues from "./AllTheQues";
export default class AskQues extends React.Component {
  constructor(props) {
    super(props);
    // console.log("this is fire", fire.auth().currentUser);
    this.state = { user: {} };
    if (fire.auth().currentUser != null) {
      this.getUserData(fire.auth().currentUser.email).then((user) => {
        user = user;
      });
    }
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
        {fire.auth().currentUser != null && fire.auth().currentUser.email && (
          <section>
            <h2>hola</h2>
          </section>
        )}
        {fire.auth().currentUser == null && (
          <section>
            <h2>Logged out.</h2>
          </section>
        )}
      </section>
    );
  }
}
