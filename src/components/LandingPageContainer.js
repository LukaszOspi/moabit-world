import React from "react";
import LandingPage from "./LandingPage";
import Info from "./Info";
import Links from "./Links";
import Angebote from "./Angebote";
import Host from "./Host";
import Footer from "./Footer";
import Ortstermin from "./Ortstermin";
import EventCarousel from "./EventCarousel";
import Enemies from "./Enemies";
import Bar from "./Bar";
import Veranstaltung from "./Veranstaltung";
import "./styles.css";

const LandingPageContainer = () => {
  return (
    <div className="landing-page">
      <LandingPage />
      <Info />
      <Links />
      <Veranstaltung />
      <EventCarousel />
      <Enemies />
      <Host />
      <Bar />
      <Angebote />

      <Footer />
    </div>
  );
};

export default LandingPageContainer;
