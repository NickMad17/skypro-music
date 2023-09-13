import React from "react";
import Track from "./Track";

const RenderTracks = () => {
  // Вместо обьекта в будущем будет апи
  const listTrack = [
    {
      id: 1,
      name: "Guilt",
      autor: "Nero",
      albom: "Welcome Reality",
      time: "4:44",
    },
    {
      id: 2,
      name: "Elektro",
      autor: "Dynoro, Outwork, Mr. Gee",
      albom: "Elektro",
      time: "2:22",
    },
    {
      id: 3,
      name: "I’m Fire",
      autor: "Ali Bakgor",
      albom: "I’m Fire",
      time: "2: 22",
    },
    {
      id: 4,
      name: "Non Stop",
      feat: "(Remix)",
      autor: "Стоункат, Psychopath",
      albom: "Non Stop",
      time: "4:12",
    },
    {
      id: 5,
      name: "Run Run (feat. AR/CO)",
      feat: "(feat. AR/CO)",
      autor: "Jaded, Will Clarke, AR/CO",
      albom: "Run Run",
      time: "2:54",
    },
  ];

  return (
    <div className="content__playlist playlist">
      {/* ____________________________________________________________ */}

      {listTrack.map((track) => {
        console.log(track);
        return (
          <Track
            key={track.id}
            name={track.name}
            autor={track.autor}
            albom={track.albom}
            time={track.time}
            feat={track.feat}
          />
        );
      })}
      {/* 
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use href="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Run Run
                    <span className="track__title-span">(feat. AR/CO)</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Jaded, Will Clarke, AR/CO
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Run Run
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use href="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">2:54</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use href="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Eyes on Fire
                    <span className="track__title-span">(Zeds Dead Remix)</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Blue Foundation, Zeds Dead
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Eyes on Fire
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use href="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">5:20</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use href="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Mucho Bien
                    <span className="track__title-span">
                      (Hi Profile Remix)
                    </span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  HYBIT, Mr. Black, Offer Nissim, Hi Profile
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Mucho Bien
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use href="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">3:41</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use href="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Knives n Cherries
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Captivating
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use href="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use href="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Knives n Cherries
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Captivating
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use href="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use href="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Knives n Cherries
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Captivating
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use href="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use href="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Knives n Cherries
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Captivating
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use href="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use href="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Knives n Cherries
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Captivating
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use href="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use href="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Knives n Cherries
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Captivating
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use href="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use href="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Knives n Cherries
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Captivating
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use href="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use href="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    How Deep Is Your Love
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Calvin Harris, Disciples
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  How Deep Is Your Love
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use href="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">3:32</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use href="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Morena <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Tom Boxer
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Soundz Made in Romania
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use href="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text">3:36</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use href="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    <span className="track__title-span"></span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://"></a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://"></a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use href="img/icon/sprite.svg#icon-like"></use>
                </svg>
                <span className="track__time-text"></span>
              </div>
            </div>
          </div> */}
    </div>
  );
};

export default RenderTracks;
