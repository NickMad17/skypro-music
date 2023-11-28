import React from "react";
import * as S from "./Pop-up.styles";
import { useAllTracks } from "../../../../hooks/useTracks";


function PopUp({ name }) {
  const data = useAllTracks();

  const newDataDate =  data.map(track => {
    const date = track.release_date?.split("-");
    return (isNaN(date) && date !== undefined) && date[0]
  })
  const setDate = new Set(newDataDate);
  const dataDate = [...setDate]

  const newDataGenre =  data.map(track => {
    return track.genre
  })

  const setGenre = new Set(newDataGenre)
  const dataGenre = [...setGenre]
  if (name === "button-author") {
    return (

      <S.PopUp left={100}>
        <S.PopUpContainer>
          {data.map((track) => {
            return track.author !== "-" && <S.PopUpText key={track.id}>{track.author}</S.PopUpText>;
          })}
        </S.PopUpContainer>
      </S.PopUp>
    );
  } else if (name === "button-year") {
    return (
      <S.PopUp left={250}>
        <S.PopUpContainer>
          {dataDate.map((date, id) => {
            return date && <S.PopUpText key={id}>{date}</S.PopUpText>;
          })}
        </S.PopUpContainer>
      </S.PopUp>
    );
  } else if (name === "button-genre") {
    return (
      <S.PopUp left={400}>
        <S.PopUpContainer>
          {dataGenre.map((gemre, id) => {
            return gemre && <S.PopUpText key={id}>{gemre}</S.PopUpText>
          })}
        </S.PopUpContainer>
      </S.PopUp>
    );
  }

}

export default PopUp;