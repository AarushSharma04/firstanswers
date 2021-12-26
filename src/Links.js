import React, { useState } from "react";
import AskQues from "./AskQues.js";
import { Link } from "react-router-dom";
import AllTheQues from "./AllTheQues.js";
import Main from "./Main.js";
import Footer from "./Components/Footer.js";
import LinksContainer from "./Components/LinksContainer.js";
const Links = () => {
  return (
    <section className="links">
      <h1>Important Links.</h1>
      <p className="important-i">
        Here are some important links and resources that will ensure your team
        stays successful throughout the season.
      </p>

      <div className="links-container">
        <LinksContainer
          name="FTC Discord"
          container="border-rebeccapurple"
          link="https://discord.gg/first-tech-challenge"
          text="white"
        />
        <LinksContainer
          name="Game Manual 0"
          container="border-orange"
          link="https://gm0.org/en/latest/"
          text="white"
        />
        <LinksContainer
          name="FTC Forums"
          container="border-lightgrey"
          link="https://ftcforum.firstinspires.org/"
          text="white3"
        />
        <LinksContainer
          name="FTC Reddit"
          container="border-darkorange"
          link="https://www.reddit.com/r/FTC/"
          text="white"
        />
        <LinksContainer
          name="SDP-SI Belt Calculator"
          container="border-lightblue"
          link="https://sdp-si.com/eStore/CenterDistanceDesigner"
          text="white"
        />
        <LinksContainer
          name="FTC Rendering in Fusion 360"
          container="border-white"
          link="https://renders360.gitbook.io/ftc-rendering-in-fusion-360/"
          text="white"
        />
        <LinksContainer
          name="FTC Java Docs"
          container="border-indigo"
          link="https://ftctechnh.github.io/ftc_app/doc/javadoc/index.html"
          text="white"
        />
        <LinksContainer
          name="LearnRoadRunner"
          container="border-darkblue"
          link="https://learnroadrunner.com/"
          text="white"
        />
      </div>
    </section>
  );
};

export default Links;
