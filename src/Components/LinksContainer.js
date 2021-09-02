import React, { useState } from "react";
import "../App.css";

const LinksContainer = (props) => {
  return (
    <div className={props.container}>
      <a href={props.link} className={props.text}>
        {props.name}
      </a>
    </div>
  );
};

export default LinksContainer;
