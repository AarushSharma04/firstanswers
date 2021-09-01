import React, { useState } from "react";
import fire from "./fire";
import firebase from "firebase";
import FlatList from "flatlist-react";
import Moment from "react-moment";
import moment from "moment";
import Fire from "./FirebaseMethods";
export default class AskQues extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textInput: "", everyone: [], setData: [] };
    this.fillUsers();
  }
  // getUserData = async (email) => {
  //   return new Promise((res, rej) => {
  //     fire.firestore
  //       .collection("users")
  //       .where("email", "==", email)
  //       .get()
  //       .then(function (querySnapshot) {
  //         //TODO MAKE THIS HANDLE THE CASE WHEN THERE ARE NO DOCUMENTS. IF YOU ARE ERRORING USING THIS METHOD, THAT MIGHT BE THE CAUSE.
  //         querySnapshot.forEach(function (doc) {
  //           // doc.data() is never undefined for query doc snapshots

  //           res({ id: doc.id, user: doc.data() });
  //         });
  //       })
  //       .catch(function (error) {
  //         rej("Error getting documents: ", error);
  //       });
  //   });
  // };
  getUserData = (email) => {
    console.log("am i actually being called?");
    return new Promise((res, rej) => {
      fire
        .firestore()
        .collection("users")
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

  handleQuestion = () => {
    this.getUserData().then((user) => {
      console.log("this is user", user);
      var currUserEmail = "";
      if (fire.auth().currentUser != null) {
        currUserEmail = fire.auth().currentUser.email;
      }
      fire
        .firestore()
        .collection("posts")
        .add({
          input: this.state.textInput,
          nameOfPerson: user.user.Name,
          time: new Date().getTime(),
        })
        .then(() => {
          this.setState({ textInput: "" });
        });
    });
  };

  fillUsers = () => {
    let everyone = [];

    const db = firebase.firestore();

    const onReceive = (querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        everyone.push({ projects: doc.data(), id: doc.id });
        // doc.data() is never undefined for query doc snapshots
      });
      // setData = everyone;
      this.setState({ everyone });
    };
    db.collection("posts")
      .orderBy("time", "desc")
      .get()
      .then(onReceive.bind(this));
  };
  render() {
    console.log("everyone4", this.state.everyone);
    return (
      <section className="hero">
        <h2>FIRSTAnswers</h2>
        <input
          onChange={(e) => this.setState({ textInput: e.target.value })}
          placeholder="Start typing your question"
          type="text"
          name="YourQuestion"
          value={this.state.textInput}
        />
        <button onClick={this.handleQuestion}>
          <h1>submit</h1>
        </button>

        <section className="viewingQuesPart"></section>
        <h1>hello</h1>
        <FlatList
          list={this.state.everyone}
          renderItem={(item) => (
            <li>
              {item.projects.input} {moment(item.projects.time).fromNow()} {item.projects.nameOfPerson}
            </li>
          )}
        />
      </section>
    );
  }
}
