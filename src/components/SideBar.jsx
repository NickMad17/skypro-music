import React from "react";
import Playlist from "./PlayList";

const SideBar = () => {
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
          <Playlist img="img/playlist01.png" />
          <Playlist img="img/playlist02.png" />
          <Playlist img="img/playlist03.png" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
