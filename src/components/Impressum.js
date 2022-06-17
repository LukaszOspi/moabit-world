import React from "react";
import "./Impressum.css";
import Footer from "./Footer";
import Menu from "./Menu";

import impressum from "./../assets/impressum.png";
import TriangleTitle from "./atoms/TriangleTitle";

const Impressum = () => {
  return (
    <div>
      <Menu />
      <div className="impressum">
        <TriangleTitle title="Impressum" />
        <div>
          <img
            className="impressum-img"
            style={{ paddingBottom: "146px" }}
            src={impressum}
            alt="impressum"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Impressum;
