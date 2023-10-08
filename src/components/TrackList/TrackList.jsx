import React from "react";
import RenderTracks from "./RenderTracks/RenderTracks";
import TrackListNav from "./TrackListNav/TrackListNav";
import * as S from "./TrackList.styles"


const TrackList = () => {
  return (
    <S.MainCenterBlock>
      <S.CenterBlockSearch>
        <S.SearchSvg>
          <use href="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.CenterBlockSearch>
      <S.CenterBlockTitle>Треки</S.CenterBlockTitle>
      <TrackListNav />
      <S.CenterBlockContent>
        <S.ContentTitle>
          <S.PlayListTitleCol width={447}>Трек</S.PlayListTitleCol>
          <S.PlayListTitleCol width={321}>ИСПОЛНИТЕЛЬ</S.PlayListTitleCol>
          <S.PlayListTitleCol width={245}>АЛЬБОМ</S.PlayListTitleCol>
          <S.PlayListTitleCol width={60} align={"end"}>
            <S.PlayListTitleSvg alt="time">
              <use href="img/icon/sprite.svg#icon-watch"></use>
            </S.PlayListTitleSvg>
          </S.PlayListTitleCol>
        </S.ContentTitle>
        <RenderTracks />
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  );
};

export default TrackList;
