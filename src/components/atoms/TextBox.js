import React from "react";
import "./TextBox.css";

const TextBox = (props) => {
  return (
    <>
      <div className="title">{props.title}</div>
      <div className="content">{props.text}</div>
    </>
  );
};

export default TextBox;
