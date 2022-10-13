import React from "react";
import "./styles-atoms.css";

const Button = (props) => {
  return (
    <div style={{ padding: props.padding }}>
      <a href={props.url} className="button">
        <div>&nbsp;{props.text}&nbsp;</div>
      </a>
    </div>
  );
};

export default Button;
