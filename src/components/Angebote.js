import React from "react";
import Button from "./atoms/Button";
import "./Angebote.css";
import fussball from "./../assets/fussball.png";
const Angebote = () => {
  return (
    <>
      <div className="angebote">
        <div>Aktiv werden im Kiez? Findet Angebote in Moabit.</div>
        <div>
          Ihr habt Lust auf Töpfern, wollt im Chor singen oder sucht ein
          Beratungscafé? Sport, ein Friedensgebet und ein Sprachkurse würden
          euch helfen? Hier findet Ihr viele Orte und Angebote in Moabit.{" "}
        </div>
      </div>
      <div className="fussball">
        <Button url="https://www.moabit.world" text="Orte und Angebote" />
        {/* <img src={fussball} alt="fussball" /> */}
      </div>
    </>
  );
};

export default Angebote;
