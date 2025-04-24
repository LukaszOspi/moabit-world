import React from "react";
import "./styles.css";
import vogel from "./../assets/vogel.png";

const Info = () => {
  return (
    <>
      <div className="vogel-mobile">
        <img class="vogel" src={vogel} alt="Vogel"></img>
      </div>
      <div className="beschreibung">
        <div>
        Under Construction: Der MoaFinder wird größer und besser. 
        Wir sind große Fans von unserem Kiez und allem was hier passiert. 
        Das wollen wir noch besser sichtbar machen. 
        Ab September 2026 findet ihr hier den neuen MoaFinder.
        </div>
        <div>
        Moabit.World wird eine interaktive Vernetzungsplattform für unseren Kiez. 
        Hier findet ihr in Zukunft Informationen zu Kampagnen, Aktionen und Mitmachformaten in unserem Kiez. 
        </div>
      </div>
      <div>
        <img className="vogel" src={vogel} alt="Vogel" />
      </div>
      </>
  );
};

export default Info;
