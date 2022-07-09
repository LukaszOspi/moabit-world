import React from "react";
import "./Event.css";
import placeholder from "./../../assets/event.png";

const Event = () => {
  return (
    <div className="event">
      <div>
        <img className="picture" src={placeholder} alt="event" />
      </div>
      <div>
        <div className="event-wrapper">
          <div className="event-description">
            <div>Titel der Veranstaltung</div>
            <div>
              Text fur die Veranstaltung Text fur die Veranstaltung Text fur die
              Veranstaltung Text fur die Veranstaltung
            </div>
            <div>Ort: Berlin</div>
            <div>Datum/Zeit:</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
