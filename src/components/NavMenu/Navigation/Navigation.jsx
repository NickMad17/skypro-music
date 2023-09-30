import React from "react";
import * as S from "./Navigation.styles";
import { Link } from "react-router-dom";
import { removeUser } from "../../../localStorage/localStorage";

const Navigation = () => {
  return (
    <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <S.MenuLink href="#">
            Главное
          </S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <Link to="/my_playlist">
            <S.MenuLink>
              Мой плейлист
            </S.MenuLink>
          </Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link to="/login" onClick={() => removeUser()}>
            <S.MenuLink>
              Выйти
            </S.MenuLink>
          </Link>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  );
};

export default Navigation;