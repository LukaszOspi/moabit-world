import React from "react";
import "./Event.css";
import placeholder from "./../../assets/event.png";

const Event = (props) => {
  return (
    <div className="event">
      <button className="button-event" href={props.linkUrl}>
        <img
          className="picture"
          src={props.imageUrl || placeholder}
          alt="event"
          href={props.linkUrl}
        />
      </button>
      <div>
        <div className="event-wrapper">
          <div className="event-description">
            <div className="event-title">{props.title || "title"}</div>
            <div>
              {props.text}
              {props.linkUrl}
            </div>
            <div className="event-location">{props.location}</div>
            <div className="event-date">{props.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Event;
