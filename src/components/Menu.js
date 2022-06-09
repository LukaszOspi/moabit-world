import React from "react";
import logo from "./../assets/logo.svg";

const Menu = (props) => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
      <div className="menu" style={{ color: props.color }}>
        <p>Über Uns</p>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <p>DE/EN</p>
      </div>
    </div>
  );
};

export default Menu;
