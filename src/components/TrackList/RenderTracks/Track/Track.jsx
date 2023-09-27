import React, { useState } from 'react';
import { deley, load, runLoad } from '../../../Sceleton/loadStart';
import SceletonTrack from "../../../Sceleton/SceletonTrack";


const Track = (props) => {
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
        <div className="playlist__item">
        { loadState ? <SceletonTrack/> : <div className="playlist__track track">
          <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use href="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {props.name}
                <span className="track__title-span">{props.feat}</span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {props.autor}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {props.albom}
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use href="img/icon/sprite.svg#icon-like"></use>
            </svg>
                <span className="track__time-text">{props.time}</span>
          </div>
        </div>}
      </div>
    )
}

export default Track;