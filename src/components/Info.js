import React from "react";
import "./Info.css";
import vogel from "./../assets/vogel.png";

const Info = () => {
  return (
    <div>
      <div className="beschreibung">
        <div>
          Moabit.World ist eine Friedenskampagne, in der wir in Moabit lokale
          Lösungsansätze für globale Probleme finden und entwickeln, um weltweit
          Gewalt zu überwinden und ein demokratisches Miteinander zu
          unterstützen.
        </div>
        <div>
          Moabit.World ist auch eine Vernetzungs-plattform für Menschen auf der
          Flucht und Unterstützende hier vor Ort, die auf dieser Website
          Informationen zum Ankommen und Leben in Moabit finden können.
        </div>
      </div>
      <div>
        <img className="vogel" src={vogel} alt="Vogel" />
      </div>
    </div>
  );
};

export default Info;
