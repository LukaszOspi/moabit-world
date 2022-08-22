import React from "react";
import "./ImageResponsive.css";

const ImageResponsive = (props) => {
  return (
    <div>
      <img
        className="image-responsive"
        src={props.src}
        alt="Image Responsive"
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
