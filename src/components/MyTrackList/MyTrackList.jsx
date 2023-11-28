import React from "react";
import RenderMyTracks from "./RenderTracks/RenderMyTracks";
import * as S from "./MyList.styles";

const MyTrackList = () => {
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
      <S.CenterBlockTitle>Мои треки</S.CenterBlockTitle>
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
        <RenderMyTracks />
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  );
};

export default MyTrackList;
