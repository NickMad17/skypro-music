import React from "react";
import * as S from "./ThisTrack.styles";

const ThisTrack = ({thisTrackPlay}) => {
  return (
    <S.TrackPlayContain>
      <S.TrackPlayImage>
        <S.TrackPlaySvg alt="music">
          <use href="img/icon/sprite.svg#icon-note"></use>
        </S.TrackPlaySvg>
      </S.TrackPlayImage>
      <S.TrackPlayAuthor>
        <S.TrackPlayAuthorLink>
          {thisTrackPlay.name}
        </S.TrackPlayAuthorLink>
      </S.TrackPlayAuthor>
      <S.TrackPlayAlbum>
        <S.TrackPlayAlbumLink >
          {thisTrackPlay.author}
        </S.TrackPlayAlbumLink>
      </S.TrackPlayAlbum>
    </S.TrackPlayContain>
  );
};

export default ThisTrack;