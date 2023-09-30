import React, { useEffect, useState } from "react";
import Playlist from "./PlayList/PlayList";
import Sceleton from "../Sceleton/SceletonSideBar";
import { deley, load, runLoad } from "../Sceleton/loadStart";
import * as S from "./SideBar.styles";
import { Link } from "react-router-dom";
import { dataList } from "./PlayList/dataList";
import { getUserName, removeUser } from "../../localStorage/localStorage";

const SideBar = () => {
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
        <S.SidebarPersonalName className="sidebar__personal-name">{getUserName()}</S.SidebarPersonalName>
        <S.SidebarIcon>
          <Link to="/login" onClick={() => {
            removeUser();
          }}>
            <svg alt="profile">
              <use href="img/icon/sprite.svg#logout"></use>
            </svg>
          </Link>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <Link to="/playlist/1">
            {loadState ? (
              <Sceleton height={150} weight={250} />
            ) : (
              <Playlist img="img/playlist01.png" />
            )}
          </Link>
          <Link to="/playlist/2">
            {loadState ? (
              <Sceleton height={150} weight={250} />
            ) : (
              <Playlist img="img/playlist02.png" />
            )}
          </Link>
          <Link to="/playlist/3">
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
