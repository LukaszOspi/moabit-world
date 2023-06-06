import React from "react";
import MoafinderSearch from "./molecules/MoafinderSearch";

import Footer from "./Footer";
import Menu from "./Menu";

const Moafinder = () => {
  return (
    <>
      <div className="intro intro-moafinder">
        <Menu color="white" />
        <div className="zusammen">
          <div style={{ color: "#7CB92C" }}>MoaFinder</div>
        </div>
      </div>
      <MoafinderSearch />
      <Footer />
    </>
  );
};

export default Moafinder;
