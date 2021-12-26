import React, { useState } from "react";
import FlatList from "flatlist-react";

import moment from "moment";
import { Link } from "react-router-dom";
import Footer from "./Components/Footer";

const AllTheQues = (props) => {
  console.log("this is is props", props);
  return (
    <section className="AllTheQues">
      <h1 className="ques-title">I changed code View Questions.</h1>

      <table className="table">
        <tr className="headers">
          <th>Question</th>
          <th className="hide">Tags</th>
          <th className="hideAgain">Author</th>
        </tr>
        <FlatList
          list={props.name}
          renderItem={(item) => (
            <tr className="questions-info">
              <td
                className="info-p"
                style={{
                  borderRight: "2px solid #00172f",
                  borderLeft: "2px solid #eee",
                }}
              >
                <Link
                  to={{
                    pathname: "/question/" + item.id,
                    state: {
                      hello: "Hello World",
                    },
                  }}
                >
                  <p>{item.projects.input} </p>
                </Link>
              </td>
              <td className="hide" style={{ borderRight: "2px solid #00172f" }}>
                {item.projects.tags != null && (
                  <p>
                    {item.projects.tags.toString().split(",").join("  |  ")}{" "}
                  </p>
                )}
              </td>
              <td
                className="hideAgain"
                style={{ borderRight: "2px solid #eee" }}
              >
                {item.projects.nameOfPerson}
              </td>
            </tr>
          )}
        />
      </table>
    </section>
  );
};

export default AllTheQues;
