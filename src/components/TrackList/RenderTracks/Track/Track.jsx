import React, { useContext, useState } from "react";
import * as S from "./Track.styles";
import { useSelector } from "react-redux";
import { useActions } from "../../../../hooks/useActions";
import { usePlayPause, useTrackId } from "../../../../hooks/useTracks";

const timeTrack = (time) => {
  let min = Math.floor(time / 60);
  let sec = time % 60;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;
  return `${min}:${sec}`;
};

const Track = ({ allTracks, name, author, album, time, feat, id }) => {
  const trackList = useSelector(state => state.tracks);
  const { addTrackPlay, addRandomTracks } = useActions();
  const activeTrack = useTrackId();
  const pause = usePlayPause();

  const [isLike, setLike] = useState(false);
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.Pause onClick={() => {
              addTrackPlay(id);
              addRandomTracks(allTracks);
            }}/>
            {activeTrack === id && <S.TrackActive pause={pause} />}
            <S.TrackTitleSvg alt="music">
              <use href="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <S.TrackTitleLink onClick={() => {
              addTrackPlay(id);
              addRandomTracks(allTracks);
            }}>
              {name}
              <S.TrackTitleSpan>{feat}</S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href="http://">
            {author}
          </S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="http://">
            {album}
          </S.TrackAlbumLink>
        </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackTimeSvg alt="time" onClick={() => {
            setLike(!isLike);
          }}>
            {isLike ?
              <use href="img/icon/sprite.svg#icon-like"></use>
              :
              <use href="img/icon/sprite.svg#icon-dislike"></use>}
          </S.TrackTimeSvg>
          <S.TrackTimeText>{timeTrack(time)}</S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
};

export default Track;