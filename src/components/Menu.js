import React from "react";
import logo from "./../assets/logo.svg";
import "./styles.css";

const Menu = (props) => {
  return (
    <>
      <div className="menu">
        <div className="logo">
          <a href="https://moabit.world">
            <img
              className="logo-img"
              src={logo}
              alt="Logo"
              style={{ display: props.moafinder ? "none" : "block" }}
            />
          </a>
        </div>
        <div className="menu-desktop" style={{ color: props.color }}>
          <a
            style={{ color: props.colorDesktop, textDecoration: "none" }}
            href="/about"
          >
            ÜBER UNS
          </a>
          <div>
            <a
              style={{ color: props.colorDesktop, textDecoration: "none" }}
              href="/moafinder"
            >
              &nbsp; &nbsp; MoaFinder
            </a>
          </div>
          <div>
            &nbsp; &nbsp;
            <a
              style={{ color: props.colorDesktop, textDecoration: "none" }}
              href="/"
            >
              HOME
            </a>
          </div>
        </div>

        <div
          className="menu_mobile"
          style={{
            color: props.color ? props.color : "black",
            textDecoration: "none",
          }}
        >
          <div>
            <a style={{}} href="/about">
              ÜBER UNS
            </a>
          </div>
          <div>
            <a
              style={{
                color: props.color ? props.color : "black",
                textDecoration: "none",
              }}
              href="/moafinder"
            >
              MoaFinder
            </a>
          </div>
          <div>
            <a
              style={{
                color: props.color ? props.color : "black",
                textDecoration: "none",
              }}
              href="/"
            >
              HOME
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
