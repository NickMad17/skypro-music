import React, { useContext } from "react";
import * as S from "./Navigation.styles";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/user_context";
import { useActions } from "../../../hooks/useActions";

const Navigation = () => {
  const { setUser } = useContext(UserContext);

  const {clear} = useActions()
  return (
    <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <S.MenuLink href="#">
            Главное
          </S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <Link to="/favorites">
            <S.MenuLink>
              Мой плейлист
            </S.MenuLink>
          </Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link to="/login" onClick={() => {
            setUser(null);
            clear()
            localStorage.removeItem("user");
          }}>
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