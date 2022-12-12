import React from "react";
import "./styles.css";
import ImageResponsive from "./atoms/ImageResponsive";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Button from "./atoms/Button";
import friedensarbeit from "./../assets/friedensarbeit.svg";
import menschen_flucht from "./../assets/menschen_flucht.svg";
import vernetzung from "./../assets/vernetzung.svg";
import gewaltfreiheit from "./../assets/gewaltfreiheit.svg";
import raum_diskurs from "./../assets/raum_diskurs.svg";
import lokales_handeln from "./../assets/lokales_handeln.svg";
import vogel_rose from "./../assets/vogel_rose.png";
import uberuns from "./../assets/uberuns.png";
import ArchiveCarousel from "./ArchiveCarousel";

const About = () => {
  return (
    <>
      <LandingPage />
      <div className="about-mobile">
        <ImageResponsive src={friedensarbeit} maxwidth="600px" padding="20px" />
        <ImageResponsive
          src={menschen_flucht}
          maxwidth="600px"
          padding="20px"
        />
        <ImageResponsive src={vernetzung} maxwidth="600px" padding="20px" />
        <ImageResponsive src={gewaltfreiheit} maxwidth="600px" padding="20px" />
        <ImageResponsive src={raum_diskurs} maxwidth="600px" padding="20px" />
        <ImageResponsive
          src={lokales_handeln}
          maxwidth="600px"
          padding="20px"
        />
      </div>
      <div className="about-desktop">
        <ImageResponsive src={uberuns} maxwidth="1400px" />
      </div>
      <ArchiveCarousel />
      <ImageResponsive src={vogel_rose} width="100%" maxwidth="1400px" />
      <Footer />
    </>
  );
};

export default About;
