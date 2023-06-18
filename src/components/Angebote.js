import React from "react";
import Button from "./atoms/Button";
import "./styles.css";
import TextBox from "./atoms/TextBox";
import fussball from "./../assets/fussball.png";

const Angebote = () => {
  return (
    <>
      <div className="angebote">
        <div className="angebote-text">
          <TextBox
            title="Aktiv werden im Kiez? Findet Angebote in Moabit."
            text=" Ihr habt Lust auf Töpfern, wollt im Chor singen oder sucht ein
          Beratungscafé? Sport, ein Friedensgebet und ein Sprachkurs würden
          euch helfen? Hier findet Ihr viele Orte und Angebote in Moabit."
          />
        </div>
        <div className="fussball">
          <Button url="/moafinder" text="MoaFinder" />
        </div>
        <img className="fussball-img" src={fussball} alt="Fussball" />
      </div>
    </>
  );
};

export default Angebote;
