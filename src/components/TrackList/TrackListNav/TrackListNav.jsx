import React, { useState } from "react";
import PopUp from "./Pop-up/Pop-up";
import * as S from "./TrackListNav.styles"
import { useActions } from "../../../hooks/useActions";

function TrackListNav() {
  const [btnState, setBtnState] = useState("");
  const {changeAuthor} = useActions()

  const switchSlide = (className) => {
    if (btnState !== className) {
      setBtnState(className);

    } else {
      setBtnState("");
    }
  };



  return (

    <S.CenterblockFilter >

      {btnState !== "" ? <PopUp name={btnState} setBtnState={setBtnState} /> : ""}
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <div onClick={() => {
        switchSlide("button-author")
      }}>
        {btnState === "button-author" ? <S.FilterBtnActive>исполнителю</S.FilterBtnActive> :
          <S.FilterBtn>исполнителю</S.FilterBtn>}
      </div>

      <div onClick={() => switchSlide("button-year")}>
        {btnState === "button-year" ?
          <S.FilterBtnActive>году выпуска</S.FilterBtnActive> : <S.FilterBtn>году выпуска</S.FilterBtn>}
      </div>

      <div onClick={() => switchSlide("button-genre")}>
        {btnState === "button-genre" ?
          <S.FilterBtnActive> жанру </S.FilterBtnActive> : <S.FilterBtn> жанру </S.FilterBtn>}
      </div>
    </S.CenterblockFilter>

  );
}

export default TrackListNav;