import "./App.css";
import React from "react";
import LandingPage from "./components/LandingPage";
import Info from "./components/Info";
import Links from "./components/Links";
import Angebote from "./components/Angebote";
import Host from "./components/Host";
import Footer from "./components/Footer";
import Event from "./components/atoms/Event";
import EventCarousel, { CarouselItem } from "./components/EventCarousel";
import Enemies from "./components/Enemies";
import Bar from "././components/Bar";
import Veranstaltung from "./components/Veranstaltung";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Info />
      <Links />
      <Angebote />
      <Host />
      <Veranstaltung />
      <EventCarousel>
        <CarouselItem>
          <Event />
        </CarouselItem>
        <CarouselItem>
          <Event />
        </CarouselItem>
      </EventCarousel>
      <Enemies />
      <Bar />
      <Footer />
    </div>
  );
}

export default App;
