import React from "react";
import "./styles.css";
import logoBird from "./../assets/rf-logo-footer.svg";
import facebook from "./../assets/facebook.svg";
import telegram from "././../assets/telegram.svg";
import insta from "././../assets/instagram.svg";
import refo from "./../assets/refo.svg";
import logoSponsors from "./../assets/Logos1.png";
import logoSponsorsMobile from "./../assets/Logos2.png";
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
            In Kooperation mit
          </div>
        </div>
        <img
          className="logos-desktop"
          src={logoSponsors}
          alt="Logos Unterstuetzer"
        />
        <img
          className="logos-mobile"
          src={logoSponsorsMobile}
          alt="Logos Unterstuetzer"
        />
      </div>
      <div>
        <div className="footer">
          <div className="footerLeft">
            <div>
              <a href="https://moabit.world">
                <img className="image" src={logoBird} alt="logo" />
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
                <img src={refo} alt="REFO" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
