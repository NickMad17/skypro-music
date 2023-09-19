import React from "react";
import { useState } from "react";
import Navigation from "./Navigation";


const NavMenu = () => {
  const [click, setClicks] = useState(false);

  const addNavigation = () => {
    setClicks(() => (click === true ? false : true));
  };

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="./img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger" onClick={addNavigation}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {click ? <Navigation/>: ""}
    </nav>
  );
};

export default NavMenu;
