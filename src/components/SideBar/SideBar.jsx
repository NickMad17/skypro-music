import React, { useEffect, useState } from "react";
import Playlist from "./PlayList/PlayList";
import Sceleton from "../Sceleton/SceletonSideBar";
import { deley, load, runLoad } from "../Sceleton/loadStart";
import * as S from "./SideBar.styles"

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
        <S.SidebarPersonalName className="sidebar__personal-name">Maady</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use href="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          {loadState ? (
            <Sceleton height={150} weight={250} />
          ) : (
            <Playlist img="img/playlist01.png" />
          )}
          {loadState ? (
            <Sceleton height={150} weight={250} />
          ) : (
            <Playlist img="img/playlist02.png" />
          )}
          {loadState ? (
            <Sceleton height={150} weight={250} />
          ) : (
            <Playlist img="img/playlist03.png" />
          )}
        </S.SidebarList>
      </S.SidebarBlock>
    </ S.MainSidebar>
  );
};

export default SideBar;
