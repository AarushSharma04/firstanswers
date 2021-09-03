import React, { useState, useEffect } from "react";
import fire from "./fire";
import FlatList from "flatlist-react";
const OneQues = (props) => {
  const [project, setProject] = useState({});
  const [textInput, setTextInput] = useState("");
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [allAnswers, setAllAnswers] = useState({});
  useEffect(() => {
    // Update the document title using the browser API
    getProjData();
    getLoggedIn();
    getAnswers();
    // getUserData(fire.auth().currentUser.email);
    // if (fire.auth().currentUser != null) {
    // }
  }, []);
  const getLoggedIn = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        getUserData(fire.auth().currentUser.email);
      } else {
       setUser({"name": "Anonymous Hedgehog"})
      }
    });
  };
  const getUserData = (email) => {
    console.log("am i actually being called?");

    fire
      .firestore()
      .collection("users")
      .where("email", "==", email)
      .get()
      .then(function (querySnapshot) {
        //TODO MAKE THIS HANDLE THE CASE WHEN THERE ARE NO DOCUMENTS. IF YOU ARE ERRORING USING THIS METHOD, THAT MIGHT BE THE CAUSE.
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log("hellooo");
          setUser(doc.data());
        });
        // doc.data() is never undefined for query doc snapshots
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  };
  const getAnswers = () => {
    let allAnswers = [];

    const db = fire.firestore();

    const onReceive = (querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        console.log("this is doc", doc.data());
        allAnswers.push({
          ans: doc.data().ans,
          name: doc.data().name,
          email: doc.data().email,
        });
        // doc.data() is never undefined for query doc snapshots
      });
      // setData = everyone;
      setAllAnswers(allAnswers);
    };
    db.collection("posts")
      .doc(window.location.pathname.substring(10))
      .collection("answers")
      .orderBy("timestamp", "desc")
      .limit(50)
      .get()
      .then(onReceive.bind(this));
  };
  const getProjData = () => {
    return new Promise((res, rej) => {
      fire
        .firestore()
        .collection("posts")
        .doc(window.location.pathname.substring(10))
        .get()
        .then(function (querySnapshot) {
          console.log("this is query", querySnapshot.data());
          setProject(querySnapshot.data());
        })
        .catch(function (error) {
          rej("Error getting documents: ", error);
        });
    });
  };
  const handleAnswer = () => {
    if (textInput != "") {
      fire
        .firestore()
        .collection("posts")
        .doc(window.location.pathname.substring(10))
        .collection("answers")
        .add({
          name: user.name,
          ans: textInput,
          timestamp: new Date().getTime(),
        })
        // .then(function (querySnapshot) {
        //   var allAnswers = [];
        //   console.log("this is  answers", querySnapshot.data().answers);

        //   if (querySnapshot.data().answers != undefined) {
        //     allAnswers = querySnapshot.data().answers;
        //   }
        //   allAnswers.push({
        //     name: user.name,
        //     ans: textInput,
        //     timestamp: new Date().getTime(),
        //   });
        //   fire
        //     .firestore()
        //     .collection("posts")
        //     .doc(window.location.pathname.substring(10))
        //     .update({ answers: allAnswers });
        // })
        .then(() => {
          setTextInput("");
          getAnswers();
        });
    }
  };
  return (
    <section className="hero">
      {project != null && <h1>{project.input}</h1>}
      <input
        onChange={(e) => setTextInput(e.target.value)}
        placeholder="Answer Here..."
        type="text"
        value={textInput}
        name="YourQuestion"
        className="mainQ"
      />
      <button onClick={handleAnswer}></button>
      <FlatList
        list={allAnswers}
        renderItem={(item) => (
          <h1>
            {item.name}
            {item.ans}
          </h1>
        )}
      />
    </section>
  );
};

export default OneQues;
