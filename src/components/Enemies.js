import React from "react";
import "./styles.css";
import birds from "./../assets/birds.png";
import enemiesBcg from "./../assets/enemies_bcg.png";
import TextBox from "./atoms/TextBox";
import Button from "./atoms/Button";

const Enemies = () => {
  return (
    <>
      <div className="enemies-container">
        <div className="birds-container">
          <div className="enemies-bird">
            <img className="bird" src={birds} alt="Birds" />
          </div>
          <div className="enemies-content-big">
            <TextBox
              className="textbox-big"
              color="white"
              title="We refuse to be enemies"
              text="Friedenskampagne und Vernetzungsplattform - die Moabit.World erkunden"
            />
            <Button url="/about" text="Erfahrt mehr" />
          </div>
          <div className="enemies-content-small"></div>
        </div>
        <div className="enemies-bcg">
          <img className="background" src={enemiesBcg} alt="Background"></img>
        </div>
      </div>
    </>
  );
};

export default Enemies;
