import React, { useState } from "react";
import fire from "./fire";
const AskQues = () => {
  const [textInput, setTextInput] = useState("");
  const handleQuestion = () => {
    fire.firestore().collection("posts").add({
      input: textInput,
      nameOfPerson: fire.auth().currentUser.email,
    });
  };
  return (
    <section className="hero">
      <h2>Welcome</h2>
      <input
        onChange={(e) => setTextInput(e.target.value)}
        placeholder="Start typing your question"
        type="text"
        name="YourQuestion"
      />
      <button onClick={handleQuestion}></button>
    </section>
  );
};

export default AskQues;
