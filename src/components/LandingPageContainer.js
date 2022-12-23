import React from "react";
import LandingPage from "./LandingPage";
import Info from "./Info";
import Links from "./Links";
import Angebote from "./Angebote";
import Host from "./Host";
import Footer from "./Footer";
import EventCarousel from "./EventCarousel";
import Enemies from "./Enemies";
import Bar from "./Bar";
import Veranstaltung from "./Veranstaltung";

import "./styles.css";

//This is supposed to be an animation for landing page elements in the future
/*
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  FadeOut,
  FadeIn,
} from "react-scroll-motion";
*/

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
