import React, { useState } from "react";
import { deley, load, runLoad } from "../../../Sceleton/loadStart";
import SceletonTrack from "../../../Sceleton/SceletonTrack";
import * as S from "./Track.styles"

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
    <S.PlaylistItem>
      {loadState ? <SceletonTrack /> : <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use href="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <S.TrackTitleLink href="http://">
              {props.name}
              <S.TrackTitleSpan>{props.feat}</S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href="http://">
            {props.autor}
          </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="http://">
            {props.albom}
          </S.TrackAlbumLink>
        </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackTimeSvg alt="time">
            <use href="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{props.time}</S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>}
    </S.PlaylistItem>
  );
};

export default Track;