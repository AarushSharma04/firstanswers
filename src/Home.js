import React, { useState } from "react";
import AskQues from "./AskQues.js";
import { Link } from "react-router-dom";
import AllTheQues from "./AllTheQues.js";
const Home = () => {
  return (
    <section className="home">
      {/* <button onClick={handleLogout}>Logout</button> */}
      
      <AskQues />

    </section>
  );
};

export default Home;
