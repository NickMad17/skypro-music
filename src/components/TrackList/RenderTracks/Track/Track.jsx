import React, { useEffect, useState } from "react";
import * as S from "./Track.styles";
import { useActions } from "../../../../hooks/useActions";
import { usePlayPause, useTrackId } from "../../../../hooks/useTracks";
import {
  useCreateMyTracksMutation,
  useDeleteMyTracksMutation,
} from "../../../../store/api/myTracks.api";

const timeTrack = (time) => {
  let min = Math.floor(time / 60);
  let sec = time % 60;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;
  return `${min}:${sec}`;
};

const Track = ({ allTracks, name, author, album, time, feat, id , stared_user, setSearch}) => {
  const { addTrackPlay, addRandomTracks, addTracks, setPlaying } = useActions();
  const activeTrack = useTrackId();
  const pause = usePlayPause();
  const [createTrack] = useCreateMyTracksMutation();
  const [isLike, setLike] = useState(false);


  useEffect(() => {
    stared_user?.forEach(user => {
      if(user?.email === JSON.parse(localStorage.getItem("user"))?.userData?.email){
        setLike(true)
      }
    })
  }, [stared_user]);

  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            {activeTrack === id && <S.TrackActive pause={pause} />}
            <S.Pause onClick={() => {
              if (activeTrack === id) {
                setPlaying(!pause);
              } else {
                addTracks(allTracks);
                addTrackPlay(id);
                addRandomTracks(allTracks);
              }

            }}>
              {activeTrack === id && pause ?
                <svg style={{
                  position: "absolute",
                  left: "18px",
                  bottom: "26px"
                }} width="15" height="19" viewBox="0 0 15 19" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <rect width="5" height="19" fill="#D9D9D9" />
                  <rect x="10" width="5" height="19" fill="#D9D9D9" />
                </svg>
                :
                <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10.5093L-1.01012e-06 0.982997L-1.84293e-06 20.0356L15 10.5093Z" fill="#D9D9D9" />
                </svg>

              }
            </S.Pause>
            <S.TrackTitleSvg alt="music">
              <use href="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <S.TrackTitleLink onClick={() => {
              addTracks(allTracks);
              addTrackPlay(id);
              addRandomTracks(allTracks);
            }}>
              {name}
              <S.TrackTitleSpan>{feat}</S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink onClick={() => {
            setSearch(author)
          }}>
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
            createTrack({
              id,
              state: !isLike
            })
            setLike(!isLike);
          }}>
            {isLike ?
              <use style={{ fill: "#fff" }} href="img/icon/sprite.svg#icon-like"></use>
              :
              <use href="img/icon/sprite.svg#icon-like"></use>
            }
          </S.TrackTimeSvg>
          <S.TrackTimeText>{timeTrack(time)}</S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
};

export default Track;