import React from "react";
import "./Event.css";
import placeholder from "./../../assets/event.png";

const Event = (props) => {
  return (
    <div className="event">
      <a
        className="button-event"
        href={props.linkUrl || "https://www.moabit.world"}
      >
        <img
          className="picture"
          src={props.imageUrl || placeholder}
          alt="event"
          url={props.linkUrl}
        />
      </a>
      <div>
        <div className="event-wrapper">
          <div className="event-description">
            <div className="event-title">{props.title || "title"}</div>
            <div>{props.text}</div>
            <a href={props.locationUrl}>
              <div className="event-location">Ort: {props.location}</div>
            </a>

            <div className="event-date">{props.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Event;
