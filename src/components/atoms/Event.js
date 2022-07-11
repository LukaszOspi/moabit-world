import React from "react";
import "./Event.css";
import placeholder from "./../../assets/event.png";

const Event = (props) => {
  return (
    <div className="event">
      <a href={props.linkUrl}>
        <img
          className="picture"
          src={props.imageUrl || placeholder}
          alt="event"
        />
      </a>
      <div>
        <div className="event-wrapper">
          <div className="event-description">
            <div>{props.title || "title"}</div>
            <div>{props.text}</div>
            <div>{props.location}</div>
            <div>{props.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Event;
