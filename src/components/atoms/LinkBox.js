import "./styles-atoms.css";

import React from "react";

const LinkBox = (props) => {
  return (
    <div className="outside-box">
      <div className="box">
        <a href={props.linkURL}>
          <div>
            <img className="pic" src={props.imageURL} alt="Link" />
          </div>
        </a>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default LinkBox;
