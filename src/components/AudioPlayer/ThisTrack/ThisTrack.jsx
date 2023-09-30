import React from "react";
import * as S from "./ThisTrack.styles";

const ThisTrack = () => {
  return (
    <S.TrackPlayContain>
      <S.TrackPlayImage>
        <S.TrackPlaySvg alt="music">
          <use href="img/icon/sprite.svg#icon-note"></use>
        </S.TrackPlaySvg>
      </S.TrackPlayImage>
      <S.TrackPlayAuthor>
        <S.TrackPlayAuthorLink href="http://">
          Ты та...
        </S.TrackPlayAuthorLink>
      </S.TrackPlayAuthor>
      <S.TrackPlayAlbum>
        <S.TrackPlayAlbumLink href="http://">
          Баста
        </S.TrackPlayAlbumLink>
      </S.TrackPlayAlbum>
    </S.TrackPlayContain>
  );
};

export default ThisTrack;