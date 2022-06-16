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
        <div className="event-description">
          <div>Titel der Veranstaltung</div>
          <div>
            Titel der Veranstaltung Info-Text: Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium. Lorem ipsum dolor sit amet, onsectetuer
            adipiscing elit. Aenean commodo ligula. Ort: Datum/Zeit:
          </div>
          <div>Ort: Berlin</div>
          <div>Datum/Zeit:</div>
        </div>
      </div>
    </div>
  );
};

export default Event;
