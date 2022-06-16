import React from "react";
import "./LandingPage.css";
import Menu from "./Menu";

const LandingPage = () => {
  return (
    <>
      <div className="intro">
        <Menu color="white" />
        <div className="zusammen">
          <div>Zusammen sind wir stark für den Frieden.</div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
