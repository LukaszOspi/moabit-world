import React from "react";
import "./styles.css";
import Menu from "./Menu";

const LandingPage = () => {
  return (
    <>
      <div className="intro">
        <Menu colorDesktop="white" />
        <div className="zusammen">
          <div>Meine Mitte ist Moabit.</div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
