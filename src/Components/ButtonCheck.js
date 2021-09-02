import React, { useState } from "react";
import "../App.css";

const ButtonCheck = (props) => {
  return (
    <div className="button-check">
      <input
        type="checkbox"
        id="YourCheckbox"
        checked={this.state.checked.includes(props.name)}
        onChange={() => this.handleChange("programming")}
        // onChange={console.log(document.getElementById("YourCheckbox").checked)}
        name="YourQuestion"
      ></input>
      <h1>Programming</h1>
    </div>
  );
};

export default ButtonCheck;
