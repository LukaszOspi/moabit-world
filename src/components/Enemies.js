import React from "react";
import "./Enemies.css";
import birds from "./../assets/birds.png";

const Enemies = () => {
  return (
    <article className="article">
      <div>
        <img className="enemies" src={birds} alt="birds" />
      </div>
    </article>
  );
};

export default Enemies;
