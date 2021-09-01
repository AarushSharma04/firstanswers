import React, { useState } from "react";
import "../App.css";

const ButtonCheck = (props) => {
  return (
    <div className="button-check">
      <input type="checkbox" name="YourQuestion"></input>
      <h1>{props.name}</h1>
    </div>
  );
};

export default ButtonCheck;
