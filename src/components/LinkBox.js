import "./LinkBox.css";

import React from "react";

const LinkBox = (props) => {
  return (
    <a href={props.linkURL}>
      <div className="box">
        <div className="pic">
          <img src={props.imageURL} alt="Link" />
        </div>
        <div className="text">{props.text}</div>
      </div>
    </a>
  );
};

export default LinkBox;
