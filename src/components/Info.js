import React from "react";
import "./Info.css";
import vogel from "./../assets/vogel.png";

const Info = () => {
  return (
    <>
      <div className="info">
        <p>
          Moabit.World ist eine Friedenskampagne, in der wir in Moabit lokale
          Lösungsansätze für globale Probleme finden und entwickeln, um weltweit
          Gewalt zu überwinden und ein demokratisches Miteinander zu
          unterstützen.
        </p>
        <p>
          Moabit.World ist auch eine Vernetzungs-plattform für Menschen auf der
          Flucht und Unterstützende hier vor Ort, die auf dieser Website
          Informationen zum Ankommen und Leben in Moabit finden können.
        </p>
      </div>
      <div className="info">
        <img src={vogel} alt="Vogel" />
      </div>
    </>
  );
};

export default Info;
