import React from "react";
import "./Host.css";
import TextBox from "./atoms/TextBox";
import Button from "./atoms/Button";
import host from "./../assets/host.png";

const Host = () => {
  return (
    <>
      <div className="host">
        <div>
          <div className="host-left">
            <div>
              <TextBox
                title="Werde Host und Supporter in Moabit"
                text="Im offenen Telegram-Kanal könnt ihr euch mit Leuten aus Moabit, die Geflüchtete unter-stützen und an Aktionen zur Überwindung von Gewalt sowie der Stärkung von Demokratie und Miteinander interessiert sind, aus-tauschen. Hier erfahrt ihr immer das Neueste a"
              />
            </div>
            <div className="telegram-button">
              <Button url="www.telegram.com" text="Zur Telegram-Gruppe" />
            </div>
          </div>
        </div>

        <img className="handy" src={host} alt="Handy" />
      </div>
    </>
  );
};

export default Host;
