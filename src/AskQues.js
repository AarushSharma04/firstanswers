import React, { useState } from "react";
import fire from "./fire";
import firebase from "firebase";
import FlatList from "flatlist-react";

import AllTheQues from "./AllTheQues";
export default class AskQues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      everyone: [],
      setData: [],
      checked: [],
    };
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
  incrementPoints = (num, user, id) => {
    if (user.email != "none") {
      fire
        .firestore()
        .collection("users")
        .doc(id)
        .update({
          points: user.user.points + num,
        });
    }
  };
  handleQuestion = () => {
    console.log("this.state.checked", this.state.checked);

    if (fire.auth().currentUser != null) {
      this.getUserData(fire.auth().currentUser.email).then((user) => {
        console.log("this is user", user);
        const tempArr = this.state.checked;
        var currUserEmail = "";
        if (fire.auth().currentUser != null) {
          currUserEmail = fire.auth().currentUser.email;
        }
        if (this.state.textInput.length < 30) {
          alert("Type something a bit longer!");
        } else if (this.state.textInput.length > 2000) {
          alert("Type something a bit shorter!");
        } else {
          fire
            .firestore()
            .collection("posts")
            .add({
              input: this.state.textInput,
              nameOfPerson: user.user.name,
              time: new Date().getTime(),
              tags: this.state.checked,
              teamOfPerson: user.user.teamName,
            })
            .then(() => {
              this.incrementPoints(5, user, user.id);
              this.setState({ textInput: "" });
              this.setState({ checked: [] });
              this.fillUsers();
            });
        }
      });
    } else {
      var currUserEmail = "";
      if (fire.auth().currentUser != null) {
        currUserEmail = fire.auth().currentUser.email;
      }
      if (this.state.textInput.length < 20) {
        alert("Type something a bit longer!");
      } else if (this.state.textInput.length > 2000) {
        alert("Type something a bit shorter!");
      } else {
        fire
          .firestore()
          .collection("posts")
          .add({
            input: this.state.textInput,
            nameOfPerson: "Anonymous Unicorn",
            time: new Date().getTime(),
            tags: this.state.checked,
            teamOfPerson: "Unknown",
          })
          .then(() => {
            this.setState({ textInput: "" });
            this.setState({ checked: [] });
            this.fillUsers();
          });
      }
    }
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
      .limit(50)
      .get()
      .then(onReceive.bind(this));
  };
  handleChange = (i) => {
    var tempArr = this.state.checked;
    console.log("helo?", tempArr);
    if (tempArr.includes(i)) {
      tempArr.splice(tempArr.indexOf(i), 1);
      console.log("helo1", tempArr);
    } else {
      tempArr.push(i);
      console.log("helo2", tempArr);
    }

    this.setState({ checked: tempArr });
  };

  render() {
    console.log("everyone4", this.state.everyone);

    return (
      <section className="hero">
        <h2>FIRST Answers.</h2>
        <div className="main-input-container">
          <input
            onChange={(e) => this.setState({ textInput: e.target.value })}
            placeholder="Ask Away..."
            type="text"
            value={this.state.textInput}
            name="YourQuestion"
            className="mainQ"
          />
          <button onClick={this.handleQuestion}></button>
        </div>
        <div className="button-container">
          <div className="button-check">
            <input
              type="checkbox"
              id="YourCheckbox"
              checked={this.state.checked.includes("programming")}
              onChange={() => this.handleChange("programming")}
              // onChange={console.log(document.getElementById("YourCheckbox").checked)}
              name="YourQuestion"
            ></input>
            <h1>Programming</h1>
          </div>
          <div className="button-check">
            <input
              type="checkbox"
              id="YourCheckbox"
              checked={this.state.checked.includes("mechanical")}
              onChange={() => this.handleChange("mechanical")}
              // onChange={console.log(document.getElementById("YourCheckbox").checked)}
              name="YourQuestion"
            ></input>
            <h1>Mechanical</h1>
          </div>
          <div className="button-check">
            <input
              type="checkbox"
              id="YourCheckbox"
              checked={this.state.checked.includes("team help")}
              onChange={() => this.handleChange("team help")}
              // onChange={console.log(document.getElementById("YourCheckbox").checked)}
              name="YourQuestion"
            ></input>
            <h1>Team help</h1>
          </div>
          <div className="button-check">
            <input
              type="checkbox"
              id="YourCheckbox"
              checked={this.state.checked.includes("Field/game")}
              onChange={() => this.handleChange("Field/game")}
              // onChange={console.log(document.getElementById("YourCheckbox").checked)}
              name="YourQuestion"
            ></input>
            <h1>Field/game</h1>
          </div>
          <div className="button-check">
            <input
              type="checkbox"
              id="YourCheckbox"
              checked={this.state.checked.includes("outreach")}
              onChange={() => this.handleChange("outreach")}
              // onChange={console.log(document.getElementById("YourCheckbox").checked)}
              name="YourQuestion"
            ></input>
            <h1>Outreach</h1>
          </div>
          <div className="button-check">
            <input
              type="checkbox"
              id="YourCheckbox"
              checked={this.state.checked.includes("fundraising")}
              onChange={() => this.handleChange("fundraising")}
              // onChange={console.log(document.getElementById("YourCheckbox").checked)}
              name="YourQuestion"
            ></input>
            <h1>Fundraising</h1>
          </div>
          <div className="button-check">
            <input
              type="checkbox"
              id="YourCheckbox"
              checked={this.state.checked.includes("team management")}
              onChange={() => this.handleChange("team management")}
              // onChange={console.log(document.getElementById("YourCheckbox").checked)}
              name="YourQuestion"
            ></input>
            <h1>Team management</h1>
          </div>
          <div className="button-check">
            <input
              type="checkbox"
              id="YourCheckbox"
              checked={this.state.checked.includes("resources")}
              onChange={() => this.handleChange("resources")}
              // onChange={console.log(document.getElementById("YourCheckbox").checked)}
              name="YourQuestion"
            ></input>
            <h1>Resources</h1>
          </div>
          {/* <ButtonCheck name="Programming" />

          <ButtonCheck name="Mechanical" /> */}
        </div>
        {/* <MultiPicker
          // data={data}
          // values={values}
          // onChange={this.onChange}
        /> */}
        {/* <ButtonFlex /> */}

        <AllTheQues name={this.state.everyone} />
      </section>
    );
  }
}
