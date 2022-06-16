import React from "react";
import "./Veranstaltung.css";
import TextBox from "./atoms/TextBox";

const Veranstaltung = () => {
  return (
    <div>
      <div className="veranstaltung">
        {" "}
        <div className="veranstaltung-left">
          <TextBox
            title="Aktuelle Treffpunkte zur Vernetzung in Moabit"
            text="Events und Treffs im Zusammenhang mit unserer Friedenskampagne Moabit.World entdeckt ihr hier. 
            Euer Event passt dazu? Schreib an: hi@moabit.world"
          />
        </div>
      </div>
    </div>
  );
};

export default Veranstaltung;
