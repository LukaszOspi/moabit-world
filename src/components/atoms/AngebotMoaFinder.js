import React from "react";
import "./styles-atoms.css";

const AngebotMoaFinder = (props) => {
  const images = props.images || [];

  return (
    <>
      <div className="offer-wrapper">
        <div>
          <div className="title-stripe">
            {props.title}
            <div>{props.subtitle}</div>
          </div>
          <div>
            <div className="offer-left">
              <div>{props.text}</div>
              <br />
              <br />
              <div>{props.moreinfo}</div>
              <br />
              <br />
              {images.length > 0 && (
                <div>
                  {images.slice(0, 3).map((image, index) => (
                    <img
                      key={index}
                      className="offer-image"
                      src={image}
                      alt="moafinder-image"
                    />
                  ))}
                </div>
              )}
              <br />
              <br />
              <div style={{ fontWeight: "700" }}>
                <div>
                  {props.address}
                  <br />
                  <br />
                </div>
                <div>
                  {props.time}
                  <br />
                  <br />
                </div>
                <div>
                  {props.contact}
                  {props.ID}
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="offer-right">{props.hashtags}</div>
        </div>
      </div>
    </>
  );
};

export default AngebotMoaFinder;
