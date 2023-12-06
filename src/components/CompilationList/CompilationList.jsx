import React, { useState } from "react";
import CompilationRender from "./RenderTracks/CompilationRender";
import * as S from "./CompilationList.styles";

const CompilationList = () => {
  const [search, setSearch] = useState("")
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
          onChange={(e) => setSearch(e.target.value)}
        />
      </S.CenterBlockSearch>
      <S.CenterBlockTitle>Мои треки</S.CenterBlockTitle>
      <S.CenterBlockContent>
        {search
          &&
          <S.ContentBoxFilter>
            <S.ContentFilterReset>Контекст:
            </S.ContentFilterReset>
            <S.ContentFilter onClick={
              () => setSearch("")
            }>
              {search}
              <S.ContentImgBox>
                <S.ContentImg src="img/icon/x.svg" />
              </S.ContentImgBox>
            </S.ContentFilter>
          </S.ContentBoxFilter>
        }
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
        <CompilationRender search={search} setSearch={setSearch}/>
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  );
};

export default CompilationList;
