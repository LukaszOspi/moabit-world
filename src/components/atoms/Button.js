import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div style={{ padding: props.padding }}>
      <a href={props.url} className="button">
        <div>{props.text}</div>
      </a>
    </div>
  );
};

export default Button;
