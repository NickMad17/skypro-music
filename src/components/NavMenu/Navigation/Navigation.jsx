import React, { useContext } from "react";
import * as S from "./Navigation.styles";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/user_context";
import { useActions } from "../../../hooks/useActions";

const Navigation = () => {
  const { setUser } = useContext(UserContext);

  const {changeName} = useActions()
  const {clear} = useActions()

  return (
    <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
            <S.MenuLink to="/" onClick={() => {
              // changeName("Треки")
            }}>
              Главное
            </S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
            <S.MenuLink to="/my-playlist" onClick={() => {
              // changeName("Мои треки")
            }}>
              Мой плейлист
            </S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
            <S.MenuLink to="/login" onClick={() => {
              setUser(null);
              clear()
              localStorage.removeItem("user");
            }}>
              Выйти
            </S.MenuLink>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  );
};

export default Navigation;