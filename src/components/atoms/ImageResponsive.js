import React from "react";
import "./ImageResponsive.css";

const ImageResponsive = (props) => {
  return (
    <div>
      <img
        className="image-responsive"
        src={props.src}
        alt="Image Responsive"
      />
    </div>
  );
};

export default ImageResponsive;
