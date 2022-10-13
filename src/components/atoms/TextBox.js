import React from "react";
import "./styles-atoms.css";

const TextBox = (props) => {
  return (
    <>
      <div
        className="title"
        style={{
          color: props.color,
        }}
      >
        {props.title}
      </div>
      <div className="content" style={{ color: props.color }}>
        {props.text}
      </div>
    </>
  );
};

export default TextBox;
