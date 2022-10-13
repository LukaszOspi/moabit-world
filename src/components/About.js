import React from "react";
import "./styles.css";
import ImageResponsive from "./atoms/ImageResponsive";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Button from "./atoms/Button";
import friedensarbeit from "./../assets/friedensarbeit.png";
import menschen_flucht from "./../assets/menschen_flucht.png";
import vernetzung from "./../assets/vernetzung.png";
import gewaltfreiheit from "./../assets/gewaltfreiheit.png";
import raum_diskurs from "./../assets/raum_diskurs.png";
import lokales_handeln from "./../assets/lokales_handeln.png";
import vogel_rose from "./../assets/vogel_rose.png";
import uberuns from "./../assets/uberuns.png";

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
      <Button
        url="/comingsoon"
        text="Zu unseren Projekten"
        padding="20px"
      ></Button>
      <ImageResponsive src={vogel_rose} width="100%" maxwidth="1400px" />
      <Footer />
    </>
  );
};

export default About;
