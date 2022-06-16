import React from "react";
import "./TextBoxSmall.css";

const TextBoxSmall = (props) => {
  return (
    <>
      <div
        className="title-small"
        style={{
          color: props.color,
        }}
      >
        {props.title}
      </div>
      <div className="content-small" style={{ color: props.color }}>
        {props.text}
      </div>
    </>
  );
};

export default TextBoxSmall;
