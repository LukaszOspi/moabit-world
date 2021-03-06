import React from "react";
import logo from "./../assets/logo.svg";
import "./Menu.css";

const Menu = (props) => {
  return (
    <>
      <div className="menu">
        <div className="logo">
          <img className="logo-img" src={logo} alt="Logo" />
        </div>
        <div className="menu_desktop" style={{ color: props.color }}>
          <a
            style={{ color: props.color, textDecoration: "none" }}
            href="/impressum"
          >
            ÜBER UNS
          </a>

          <div>DE/EN</div>
        </div>

        <div className="menu_mobile" style={{ color: props.color }}>
          <div>
            <a
              style={{ color: "black", textDecoration: "none" }}
              href="/impressum"
            >
              ÜBER UNS
            </a>
          </div>
          <div>
            <a style={{ color: "black", textDecoration: "none" }} href="/about">
              DE/EN
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
