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
import Ortstermin from "./Ortstermin";
import TextBox from "./atoms/TextBox";
import ImageResponsive from "./atoms/ImageResponsive";
import festival_img from "./../assets/moabit_festival.jpg";
import "./styles.css";

const LandingPageContainer = () => {
  return (
    <div className="landing-page">
      <LandingPage />

      <TextBox
        title="MOA MOA - KIEZ FEIERN.  ZUKUNFT FORMEN."
        text="21 Tage Festival in Moabit"
      />

      <TextBox
        text="Im September 2026 wollen wir 21 Tage in allen Winkeln Moabits unseren Kiez feiern und an zentralen Höhepunkten unsere Zukunft formen. 
Wir erkunden im dezentralen Teil des MOA MOA Festivals, was Moabit kann und im zentralen Teil, wie Moabit sein könnte."
      />

      <TextBox
        text={`Alle Moabiter:innen können mitmachen. Durch Gespräche auf unseren Plätzen und Straßen und durch eine Online-Umfrage habt ihr schon dem Festival für Moabit den Namen gegeben und viele weitere Anregungen eingebracht. 
Durch den dezentralen Ansatz und einen Vorbereitungsprozess mit digitalen Partizipationsmöglichkeiten soll MOA MOA ganz zu Eurem Festival werden. 
Traditionell ist im September viel los in Moabit. MOA MOA soll als Dach für Aktionen und Veranstaltungen fungieren, die ihr eh schon plant. 
Wir möchten Euch aber auch dazu einladen, spielerische, künstlerische und politische Formate an den Start zu bringen, die unseren Kiez feiern und zeigen, was in Moabit geht.`}
      />

      <TextBox
        text={`Auf dieser Seite werden wir euch auf dem Laufenden halten. Hier werdet ihr im Herbst 2025 auch Mitmach-Möglichkeiten finden.

MOA MOA needs MONEY – kennt ihr reiche Menschen, Firmen oder Organisationen, deren Herz für 21 schlägt? Dann connectet uns!`}
      />

      <TextBox
        text={`MOA MOA ist ein Festival für alle Moabiter:innen.

Die Initiative kommt von KiezMachen, WeKeez, JMD Moabit und Refo Moabit.

Das Team wird wachsen und wir freuen uns auf einen kreativen Prozess mit Euch!

Kontakt: festival@moabit.world`}
      />

      <ImageResponsive src={festival_img} maxwidth="400px" padding="20px" />
      <Footer />
    </div>
  );
};

export default LandingPageContainer;
