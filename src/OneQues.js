import React, { useState, useEffect } from "react";
import fire from "./fire";
import FlatList from "flatlist-react";
import { FaArrowAltCircleUp } from "react-icons/fa";
const OneQues = (props) => {
  const [project, setProject] = useState({});
  const [textInput, setTextInput] = useState("");
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState();
  const [allAnswers, setAllAnswers] = useState({});
  const [id, setID] = useState("");

  useEffect(() => {
    // Update the document title using the browser API

    getProjData();
    getLoggedIn();
    // if (loggedIn != "undefined") {
    //   getAnswers();
    // }
    console.log("User.email", user.email);
    // getUserData(fire.auth().currentUser.email);
    // if (fire.auth().currentUser != null) {
    // }
  }, []);

  const getLoggedIn = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        getUserData(fire.auth().currentUser.email);
        setLoggedIn(true);
        getAnswers(true);
      } else {
        setUser({ name: "Anonymous Hedgehog", email: "undefined" });
        setLoggedIn(false);
        getAnswers(false);
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
          console.log("hellooo", doc.id);
          setUser(doc.data());
          setID(doc.id);
        });
        // doc.data() is never undefined for query doc snapshots
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  };
  const upvoteDownvote = (email, points) => {
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
          console.log("hellooo", doc.id);
          incrementPoints(points, doc.data(), doc.id, 0);
        });
        // doc.data() is never undefined for query doc snapshots
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  };

  const getAnswers = (torf) => {
    let allAnswers = [];

    const db = fire.firestore();

    const onReceive = (querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        var c = "white";
        if (
          torf &&
          doc.data().upvotes.indexOf(fire.auth().currentUser.email) >= 0
        ) {
          c = "#fa5039";
        }
        console.log("this is id", doc.id);
        allAnswers.push({
          id: doc.id,
          ans: doc.data().ans,
          name: doc.data().name,
          email: doc.data().email,
          upvotes: doc.data().upvotes,
          downvotes: doc.data().downvotes,
          color: c,
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
  const incrementPoints = (num, user, id, incrementQues) => {
    console.log("This is user and id", user, id);
    if (loggedIn) {
      // getUserData(user.email);
      console.log("this is quesAns", user.quesAns);
      if (user.email != "none") {
        fire
          .firestore()
          .collection("users")
          .doc(id)
          .update({
            points: user.points + num,
            quesAns: incrementQues + user.quesAns,
          });
      }
    }
  };
  // const setColorOfSpecificAnswer = (i) => {
  //   const index = allAnswers.findIndex((x) => x.id === i.id);
  //   const temp = allAnswers[index];
  //   temp.color = "blue";
  //   allAnswers[index] = temp;
  //   console.log("aai", allAnswers[index]);
  // };
  const handleUpvote = (i) => {
    console.log("this is p", i);
    if (i.upvotes.indexOf(fire.auth().currentUser.email) == -1) {
      // setColorOfSpecificAnswer(i);
      var newArr = i.upvotes;
      newArr.push(fire.auth().currentUser.email);
      console.log("this is ppushed");
      fire
        .firestore()
        .collection("posts")
        .doc(window.location.pathname.substring(10))
        .collection("answers")
        .doc(i.id)
        .update({
          upvotes: newArr,
        })
        .then(() => {
          getAnswers(true);
          upvoteDownvote(i.email, 5);
        });
    } else if (i.upvotes.indexOf(fire.auth().currentUser.email >= 0)) {
      var newArr = i.upvotes;
      newArr = newArr.filter((item) => item !== fire.auth().currentUser.email);

      console.log("this is ppushed");
      fire
        .firestore()
        .collection("posts")
        .doc(window.location.pathname.substring(10))
        .collection("answers")
        .doc(i.id)
        .update({
          upvotes: newArr,
        })
        .then(() => {
          getAnswers();
          upvoteDownvote(i.email, -5);
        });
    }
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
          upvotes: [" "],
          email: user.email,
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
          incrementPoints(7, user, id, 1);
          setTextInput("");
          getAnswers();
        });
    }
  };
  const tx = document.getElementsByTagName("textarea");
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute(
      "style",
      "height:" + (tx[i].scrollHeight + 5) + "px;overflow-y:hidden;"
    );
    tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + 5 + "px";
  }

  return (
    <section className="qa-container">
      <div className="question-container">
        {project != null && (
          <h1 className="question-info">
            Question from {project.nameOfPerson}
          </h1>
        )}
        {project != null && <h1 className="question">{project.input}</h1>}
        {project.tags != null && (
          <p className="tags">
            <span>Tags: </span>
            {project.tags.toString().split(",").join(" | ")}
          </p>
        )}
      </div>
      <div className="answer-container">
        <textarea
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Start typing..."
          type="text"
          value={textInput}
          name="YourQuestion"
          className="answer-input"
        />
        <button className="button-submit" onClick={handleAnswer}>
          Submit
        </button>
        {allAnswers.length > 0 && (
          <FlatList
            list={allAnswers}
            renderItem={(item) => (
              <div className="inner-container">
                {user.email != "undefined" && (
                  <div className="upvote-container">
                    <button
                      style={{
                        border: 0,
                        backgroundColor: "transparent",

                        transition: ".4s",
                      }}
                      onClick={() => handleUpvote(item)}
                    >
                      <FaArrowAltCircleUp color={"white"} size={40} />
                      <h1 style={{ color: item.color, marginTop: -6 }}>
                        {item.upvotes.length - 1}
                      </h1>
                    </button>
                  </div>
                )}
                {user.email == "undefined" && (
                  <div className="upvote-container">
                    <button
                      style={{
                        // border: "2px"(item.color),
                        border: 0,
                        backgroundColor: "transparent",

                        transition: ".4s",
                      }}
                      onClick={() => alert("Log in to vote!")}
                    >
                      <FaArrowAltCircleUp size={40} />
                      <h1 style={{ marginTop: -6 }}>
                        {item.upvotes.length - 1}
                      </h1>
                    </button>
                  </div>
                )}
                <div className="content-container">
                  <p className="answer-details">{item.name}</p>
                  <p className="answer-answer">{item.ans}</p>
                </div>
              </div>
            )}
          />
        )}
      </div>
    </section>
  );
};

export default OneQues;
