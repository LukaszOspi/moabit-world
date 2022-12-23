import React from "react";
import "./styles.css";
import logo from "./../assets/moabit_world_white.png";
import facebook from "./../assets/facebook.png";
import telegram from "././../assets/telegram.png";
import insta from "././../assets/insta.png";
import cefo from "./../assets/cefo.png";
import logosFooter from "./../assets/logos_footer.jpg";

const Footer = () => {
  return (
    <div>
      <div className="unterstutzer">
        <div>
          <div
            style={{
              textAlign: "center",
              fontSize: "3vh",
              fontWeight: "bold",
            }}
          >
            Unsere Unterstützer
          </div>
        </div>
        <img
          className="unterstutzer"
          src={logosFooter}
          alt="Logos Unterstuetzer"
        />
      </div>
      <div>
        <div className="footer">
          <div className="footerLeft">
            <div>
              <a href="https://moabit.world">
                <img className="image" src={logo} alt="logo" />
              </a>
            </div>
            <div>
              <a href="/impressum">Impressum</a> |
              <a href="/datenschutz"> Datenschutz</a>
            </div>
          </div>
          <div className="footerRight">
            <span>
              <h2>Schreibt uns</h2>{" "}
              <a href="mailto:hi@moabit.world"> hi@moabit.world</a>
            </span>
            <div className="socialButtons">
              <a href="https://t.me/moa_peace">
                <img src={telegram} alt="telegram" />
              </a>
              <a href="https://www.instagram.com/refomoabit/?hl=enm">
                <img src={insta} alt="instagram" />
              </a>
              <a href="https://www.facebook.com/RefoMoabit">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://www.refo-moabit.de/">
                <img src={cefo} alt="REFO" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
