import React from "react";
import { listTrack } from "../../obj";
import * as S from "./Pop-up.styles"

function PopUp({ name }) {
  let newClassName = "";
  if (name === "button-author") {
    return (

      <S.PopUp left={100}>
        <S.PopUpContainer >
          {listTrack.map((track, id) => {
            return <S.PopUpText  key={id}>{track.autor}</S.PopUpText>;
          })}
        </S.PopUpContainer>
      </S.PopUp>
    );
  } else if (name === "button-year") {
    return (
      <S.PopUp left={250}>
        <S.PopUpContainer>
          {/*{listTrack.map((track, id) => {*/}
          {/*  return <a  key={id}>{track.autor}</a>;*/}
          {/*})}*/}
          <S.PopUpText >2020</S.PopUpText>
          <S.PopUpText >2010</S.PopUpText>
          <S.PopUpText >2000</S.PopUpText>
          <S.PopUpText >1990</S.PopUpText>
          <S.PopUpText >1990</S.PopUpText>
          <S.PopUpText >1990</S.PopUpText>
          <S.PopUpText >1990</S.PopUpText>
          <S.PopUpText >1990</S.PopUpText>
          <S.PopUpText >1990</S.PopUpText>
        </S.PopUpContainer>
      </S.PopUp>
    );
  } else if (name === "button-genre") {
    return (
      <S.PopUp left={400}>
        <S.PopUpContainer>
          {/*{listTrack.map((track, id) => {*/}
          {/*  return <a  key={id}>{track.autor}</a>;*/}
          {/*})}*/}
          <S.PopUpText >Поп</S.PopUpText>
          <S.PopUpText >Рок</S.PopUpText>
          <S.PopUpText >Альтернатива</S.PopUpText>
          <S.PopUpText >Реп</S.PopUpText>
          <S.PopUpText >Блюз</S.PopUpText>
          <S.PopUpText >Инди</S.PopUpText>
        </S.PopUpContainer>
      </S.PopUp>
    );
  }

}

export default PopUp;