import React from "react";
import bar from "./../assets/bar.png";
import "./styles.css";
import TextBox from "./atoms/TextBox";
import Button from "./atoms/Button";

const Bar = () => {
  return (
    <div className="bar">
      <div>
        <div className="bar-left">
          <div>
            <TextBox
              title="Die Online-Bar für digitalen Austausch"
              text="In unserer Moabiter Video-Call-Bar kannst du dich mit anderen verabreden oder selbst Online-Veranstaltungen durchführen. Erkunde auch gerne die gesamte digitale Moabit World."
            />
          </div>

          <Button
            url="https://play.workadventu.re/_/global/moabitworld.github.io/moabitworld2/map.json"
            text="Zur Online-Bar"
          />
        </div>
      </div>

      <img className="bar-img" src={bar} alt="Bar" />
    </div>
  );
};

export default Bar;
