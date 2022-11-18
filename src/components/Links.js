import React from "react";
import "./styles.css";
import LinkBox from "./atoms/LinkBox";
import TextBox from "./atoms/TextBox";
import moabit from "./../assets/moabit_hilft.png";
import krisenchat from "./../assets/krisenchat.png";
import berlin from "./../assets/berlin.png";

const Links = () => {
  return (
    <div className="info">
      <TextBox
        title="Kurzinfos und hilfreiche Links für Geflüchtete, Hosts und Supporters"
        text="Hier sind Informationen darüber gesammelt, wie wir Menschen auf der
        Flucht in Berlin-Moabit helfen können. Es fehlt ein wichtiger Link?
        Schreib an: hi@moabit.world"
      ></TextBox>

      <div className="links">
        <LinkBox
          imageURL={moabit}
          linkURL="https://www.moabit-hilft.com/"
          text="Hier findet Ihr eine Sammlung wichtiger Infos und weiterführender Links für Geflüchtete aus der Ukraine. "
        />
        <LinkBox
          imageURL={berlin}
          linkURL="https://www.berlin.de/ukraine/"
          text="Angekommene aus der Ukraine finden hier eine Übersicht der Stadt Berlin, die über alle organisa-torischen Fragen informiert."
        />
        <LinkBox
          imageURL={krisenchat}
          linkURL="https://krisenchat.de/"
          text="Kinder und Jugendliche können sich Soforthilfe in einem Chat oder auch Ratschläge zu
           verschiedenen Themen holen."
        />
      </div>
    </div>
  );
};

export default Links;
