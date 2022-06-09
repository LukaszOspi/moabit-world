import React from "react";
import "./Links.css";
import LinkBox from "./LinkBox";

const Links = () => {
  return (
    <div className="info">
      <div className="kurzinfo">
        Kurzinfos und hilfreiche Links für Geflüchtete, Hosts und Supporters
      </div>
      <div className="mail">
        Hier sind Informationen darüber gesammelt, wie wir Menschen auf der
        Flucht in Berlin-Moabit helfen können. Es fehlt ein wichtiger Link?
        Schreib an: hi@moabit.world
      </div>
      <LinkBox
        imageURL="./../assets/logo.svg"
        linkURL="https://www.moabit.world"
        text="Moabit.world"
      />
    </div>
  );
};

export default Links;
