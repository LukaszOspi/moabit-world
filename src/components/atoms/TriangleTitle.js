import React from "react";
import linie from "./../../assets/linie.png";
import "./TriangleTitle.css";

const TriangleTitle = (props) => {
  return (
    <>
      <div>
        <img className="triangle-linie" src={linie} alt="linie" />
      </div>
      <div className="triangle-title">{props.title}</div>
    </>
  );
};

export default TriangleTitle;
