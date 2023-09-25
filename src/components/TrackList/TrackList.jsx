import React from "react";
import RenderTracks from "./RenderTracks";
import TrackListNav from "./TrackListNav/TrackListNav";

const TrackList = () => {

  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use href="img/icon/sprite.svg#icon-search"></use>
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
        <TrackListNav/>
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use href="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
          <RenderTracks/>
      </div>
    </div>
  );
};

export default TrackList;
