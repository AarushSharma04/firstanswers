import React, { useState } from "react";
import FlatList from "flatlist-react";

import moment from "moment";
import { Link } from "react-router-dom";

const AllTheQues = (props) => {
  return (
    <section className="AllTheQues">
      <FlatList
        list={props.name}
        renderItem={(item) => (
          <li>
            {item.projects.input} {moment(item.projects.time).fromNow()}{" "}
            {item.projects.nameOfPerson}
            {item.projects.tags}
          </li>
        )}
      />

      <h1>Hey??</h1>
    </section>
  );
};

export default AllTheQues;
