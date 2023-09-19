import React, { useEffect, useState } from "react";
import Playlist from "./PlayList";
import Sceleton from "../Sceleton/SceletonSideBar";
import { deley, load, runLoad } from "../Sceleton/loadStart";

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
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Maady</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use href="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
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
        </div>
      </div>
    </div>
  );
};

export default SideBar;
