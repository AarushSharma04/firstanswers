import React, { useState, useEffect } from "react";
import fire from "./fire";

const OneQues = (props) => {
  const [project, setProject] = useState({});
  useEffect(() => {
    // Update the document title using the browser API
    getUserData();
  }, []);

  const getUserData = () => {
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

  return (
    <section className="hero">
      {project != null && <h1>{project.input}</h1>}
    </section>
  );
};

export default OneQues;
