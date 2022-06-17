import React from "react";
import "./Datenschutz.css";
import TriangleTitle from "./atoms/TriangleTitle";
import Footer from "./Footer";
import Menu from "./Menu";
import datenschutz from "./../assets/datenschutz.png";

const Datenschutz = () => {
  return (
    <div>
      <Menu />
      <div className="datenschutz">
        <TriangleTitle title="Datenschutz" />
      </div>
      <div>
        <img className="datenschutz-img" src={datenschutz} alt="datenschutz" />
      </div>
      <Footer />
    </div>
  );
};

export default Datenschutz;
