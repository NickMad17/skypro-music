import React from "react";
import { useState } from "react";
import Navigation from "./Navigation/Navigation";
import * as S from "./NavMenu.styles";

const NavMenu = () => {
  const [click, setClicks] = useState(false);

  const addNavigation = () => {
    setClicks(() => (click === true ? false : true));
  };

  return (<S.MainMav>
      <S.NavLogo>
        <S.LogoImage src="./img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={addNavigation}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {click ? <Navigation /> : ""}
    </S.MainMav>);
};

export default NavMenu;
