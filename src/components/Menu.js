import React from "react";
import logo from "./../assets/logo.svg";
import "./styles.css";

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
            href="/about"
          >
            ÜBER UNS
          </a>

          <div>
            {" "}
            <a style={{ color: props.color, textDecoration: "none" }} href="/">
              HOME
            </a>
          </div>
        </div>

        <div className="menu_mobile" style={{ color: props.color }}>
          <div>
            <a style={{ color: "black", textDecoration: "none" }} href="/about">
              ÜBER UNS
            </a>
          </div>
          <div>
            <a style={{ color: "black", textDecoration: "none" }} href="/">
              HOME
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
