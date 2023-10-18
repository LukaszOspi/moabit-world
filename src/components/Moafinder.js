import React from "react";
import MoafinderSearch from "./molecules/MoafinderSearch";

import Footer from "./Footer";
import Menu from "./Menu";

const Moafinder = () => {
  return (
    <>
      <div className="intro-moafinder">
        <Menu color="#7CB92C" colorDesktop="black" moafinder="true" />
      </div>
      <MoafinderSearch />
      <Footer />
    </>
  );
};

export default Moafinder;
