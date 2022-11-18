import React from "react";
import "./styles-atoms.css";

const ImageResponsive = (props) => {
  return (
    <div>
      <img
        className="image-responsive"
        src={props.src}
        alt="Responsive"
        style={{
          maxWidth: props.maxwidth,
          padding: props.padding,
          width: props.width,
        }}
      />
    </div>
  );
};

export default ImageResponsive;
