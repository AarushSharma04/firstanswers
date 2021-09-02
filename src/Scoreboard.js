import React, { useState } from "react";
import AskQues from "./AskQues.js";
import { Link } from "react-router-dom";
import AllTheQues from "./AllTheQues.js";
import Main from "./Main.js";
import Footer from "./Components/Footer.js";
const Scoreboard = () => {
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
        <tr>
          <td className="border-light-l border-dark-r">#1</td>
          <td className="border-dark-r">Cooper</td>
          <td className="border-dark-r">24</td>
          <td className="border-light-r">72</td>
        </tr>
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
        </tr>
      </table>

      <Footer />
    </section>
  );
};

export default Scoreboard;
