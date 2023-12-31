import React, { useContext, useEffect, useState } from "react";
import Playlist from "./PlayList/PlayList";
import Sceleton from "../Sceleton/SceletonSideBar";
import { deley, load, runLoad } from "../Sceleton/loadStart";
import * as S from "./SideBar.styles";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user_context";
import { Context } from "../../context/context";
import { useActions } from "../../hooks/useActions";

const SideBar = () => {
  const { setUser, user } = useContext(UserContext);

  const {clear} = useActions()
  const [loadState, getLoad] = useState(load);

  const preLoad = () => {
    setTimeout(() => {
      runLoad(load);
      getLoad(() => {
        loadState ? loadState : !loadState;
      });
    }, deley);
  };


  preLoad();

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName className="sidebar__personal-name">{user.userData.username}</S.SidebarPersonalName>
        <S.SidebarIcon>
          <Link to="/login" onClick={() => {
            clear()
            setUser(null);
            localStorage.removeItem("user");
          }}>
            <svg alt="profile">
              <use href="img/icon/sprite.svg#logout"></use>
            </svg>
          </Link>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <Link to="/category/1">
            {loadState ? (
              <Sceleton height={150} weight={250} />
            ) : (
              <Playlist img="img/playlist01.png" />
            )}
          </Link>
          <Link to="/category/2">
            {loadState ? (
              <Sceleton height={150} weight={250} />
            ) : (
              <Playlist img="img/playlist02.png" />
            )}
          </Link>
          <Link to="/category/3">
            {loadState ? (
              <Sceleton height={150} weight={250} />
            ) : (
              <Playlist img="img/playlist03.png" />
            )}
          </Link>
        </S.SidebarList>
      </S.SidebarBlock>
    </ S.MainSidebar>
  );
};

export default SideBar;
