import React from "react";
import LandingPage from "./LandingPage";
import TextBox from "./atoms/TextBox";
import Footer from "./Footer";

const ComingSoon = () => {
  return (
    <>
      <LandingPage />
      <TextBox
        title="Diese Seite wird in Kürze erstellt"
        text="Coming soon..."
      />
      <Footer />
    </>
  );
};

export default ComingSoon;
