import React from "react";
import "./LandingPage.css";
import logo from "./../assets/logo.svg";

const LandingPage = () => {
  return (
    <>
      <div className="intro">
        <div className="logo">
          <img src={logo} alt="Logo" />

          <div className="menu">
            <p>Über Uns</p>
            <p>DE/EN</p>
          </div>
        </div>
        <h1>Zusammen sind wir stark fuer den Frieden.</h1>
      </div>
    </>
  );
};

export default LandingPage;
