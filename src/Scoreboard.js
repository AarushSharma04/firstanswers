import React, { useState, useEffect } from "react";
import AskQues from "./AskQues.js";
import { Link } from "react-router-dom";
import AllTheQues from "./AllTheQues.js";
import Main from "./Main.js";
import Footer from "./Components/Footer.js";
import FlatList from "flatlist-react";
import firebase from "firebase";
const Scoreboard = () => {
  const [allUsers, setUsers] = useState([]);
  useEffect(() => {
    // Update the document title using the browser API
    fillUsers();
    // getUserData(fire.auth().currentUser.email);
    // if (fire.auth().currentUser != null) {
    // }
  }, []);
  const fillUsers = () => {
    let everyone = [];

    const db = firebase.firestore();

    const onReceive = (querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        everyone.push({ projects: doc.data(), id: doc.id });
        // doc.data() is never undefined for query doc snapshots
      });
      // setData = everyone;
      setUsers(everyone);
      {
        console.log("this is everyone", everyone);
      }
    };
    db.collection("users")
      .orderBy("points", "desc")
      .limit(50)
      .get()
      .then(onReceive.bind(this));
  };
  return (
    <section className="scoreboard-container">
      <div className="scoreboard-info">
        <h1>Scoreboard.</h1>
        <p>View top ranked helpers of FIRST Answers.</p>
      </div>
      <table className="scoreboard">
        <tr>
          <th>
            <div>
              <div className="scoreboard-buttons">
                <button>&#8679;</button>
                <button>&#8681;</button>
              </div>
              <p>Rank</p>
            </div>
          </th>
          <th>
            <div>
              <div className="scoreboard-buttons">
                <button>&#8679;</button>
                <button>&#8681;</button>
              </div>
              <p>Username</p>
            </div>
          </th>
          <th>
            <div>
              <div className="scoreboard-buttons">
                <button>&#8679;</button>
                <button>&#8681;</button>
              </div>
              <p>Num. of answers</p>
            </div>
          </th>
          <th>
            <div>
              <div className="scoreboard-buttons">
                <button>&#8679;</button>
                <button>&#8681;</button>
              </div>
              <p>Total Upvotes</p>
            </div>
          </th>
        </tr>

        {/*
        <tr>
          <td className="border-light-l border-dark-r">#2</td>
          <td className="border-dark-r">Donbongo Daddy</td>
          <td className="border-dark-r">24</td>
          <td className="border-light-r">62</td>
        </tr>
        <tr>
          <td className="border-light-l border-dark-r">#3</td>
          <td className="border-dark-r">Pron</td>
          <td className="border-dark-r">13</td>
          <td className="border-light-r">53</td>
        </tr> */}

        <FlatList
          list={allUsers}
          className="scoreboard"
          renderItem={(item) => (
            <tr>
              <td className="border-light-l border-dark-r">#1</td>
              <td className="border-dark-r">{item.projects.name}</td>
              <td className="border-dark-r">{item.projects.quesAns}</td>
              <td className="border-light-r">{item.projects.points}</td>
            </tr>
          )}
        />
      </table>
      <Footer />
    </section>
  );
};

export default Scoreboard;
