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
        <div className="title-text">
          <p style={{ color: "#ED7782" }}>{props.titlePink}</p>
          {props.title}
        </div>
      </div>
      <div className="content" style={{ color: props.color }}>
        <div className="content-text">{props.text}</div>
      </div>
    </>
  );
};

export default TextBox;
