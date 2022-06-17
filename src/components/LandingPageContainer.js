import React from "react";
import LandingPage from "./LandingPage";
import Info from "./Info";
import Links from "./Links";
import Angebote from "./Angebote";
import Host from "./Host";
import Footer from "./Footer";
import Event from "./atoms/Event";
import EventCarousel, { CarouselItem } from "./EventCarousel";
import Enemies from "./Enemies";
import Bar from "./Bar";
import Veranstaltung from "./Veranstaltung";

const LandingPageContainer = () => {
  return (
    <div>
      <LandingPage />
      <Info />
      <Links />
      <Angebote />
      <Host />
      <Veranstaltung />
      {/* <EventCarousel>
        <CarouselItem>
          <Event />
        </CarouselItem>
        <CarouselItem>
          <Event />
        </CarouselItem>
      </EventCarousel> */}
      <Enemies />
      <Bar />
      <Footer />
    </div>
  );
};

export default LandingPageContainer;
