import React, { useContext } from "react";
import * as S from "./Navigation.styles";
import { Link } from "react-router-dom";
import { Context } from "../../../context/context";
import { UserContext } from "../../../context/user_context";

const Navigation = () => {
  const {setTrackId} = useContext(Context);
  const {setUser}  = useContext(UserContext)
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
            setTrackId(null)
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