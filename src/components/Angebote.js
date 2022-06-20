import React from "react";
import Button from "./atoms/Button";
import "./Angebote.css";
import TextBox from "./atoms/TextBox";
import fussball from "./../assets/fussball.png";

const Angebote = () => {
  return (
    <>
      <div className="angebote">
        <TextBox
          title="Aktiv werden im Kiez? Findet Angebote in Moabit."
          text=" Ihr habt Lust auf Töpfern, wollt im Chor singen oder sucht ein
          Beratungscafé? Sport, ein Friedensgebet und ein Sprachkurs würden
          euch helfen? Hier findet Ihr viele Orte und Angebote in Moabit."
        />

        <div className="fussball">
          <Button url="https://www.moabit.world" text="Orte und Angebote" />
        </div>
        <img className="fussball-img" src={fussball} alt="Fussball" />
      </div>
    </>
  );
};

export default Angebote;
