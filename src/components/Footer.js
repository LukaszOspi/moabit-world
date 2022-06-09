import React from "react";
import "./Footer.css";
import logo from "./../assets/moabit_world_white.png";
import facebook from "./../assets/facebook.png";
import telegram from "././../assets/telegram.png";
import insta from "././../assets/insta.png";
import cefo from "./../assets/cefo.png";
import logosFooter from "./../assets/logos_footer.png";

const Footer = () => {
  return (
    <>
      <div className="unterstutzer">
        <div>
          <p
            style={{
              textAlign: "center",
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            Unsere Unterstuetzer
          </p>
        </div>
        <img src={logosFooter} alt="Logos Unterstuetzer" />
      </div>
      <div className="footer">
        <div className="footerLeft">
          <img src={logo} alt="logo" />
          <div>Impressum | Datenschutz </div>
        </div>

        <div className="footerRight">
          <p>
            Kommt vorbei Sommercafé auf dem Wiclefplatz, Wiclefstraße 32, 10551
            Berlin, Mo. bis Fr. 8-18 Uhr Schreibt uns hi@moabit.world
          </p>
          <div className="socialButtons">
            <a href="https://www.facebook.com">
              <img src={telegram} alt="facebook" />
            </a>
            <a href="https://www.facebook.com">
              <img src={insta} alt="facebook" />
            </a>
            <a href="https://www.facebook.com">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://www.facebook.com">
              <img src={cefo} alt="facebook" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
