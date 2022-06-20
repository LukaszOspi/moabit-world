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
                text="Im offenen Telegram Kanal könnt ihr euch mit Leuten aus Moabit, 
                die Geflüchtete unterstützen und an Aktionen zur Überwindung von Gewalt sowie der Stärkung 
                von Demokratie und Miteinander interessiert sind, austauschen. Hier erfahrt ihr 
                immer das Neueste aus der Friedenskampagne Moabit.World"
              />
            </div>
            <div className="telegram-button">
              <Button url="https://t.me/moa_peace" text="Zur Telegram-Gruppe" />
            </div>
          </div>
        </div>

        <img className="handy" src={host} alt="Handy" />
      </div>
    </>
  );
};

export default Host;
