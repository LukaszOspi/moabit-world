import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <a href={props.url} className="button">
      <div>{props.text}</div>
    </a>
  );
};

export default Button;
