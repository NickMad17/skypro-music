import React from "react";
import * as S from "./Pop-up.styles";
import { useGetAllTracksQuery } from "../../../../store/api/myTracks.api";



function PopUp({ name }) {
  const { data, error } = useGetAllTracksQuery();

  const newDataDate = data?.map(track => {
    const date = track.release_date?.split("-");
    return (isNaN(date) && date !== undefined) && date[0];
  });
  const newDataAuthor = data?.map(track => {
    const author = track.author;
    return (isNaN(author) && author !== undefined && author !== "-") && author;
  });
  const setAuthor = new Set(newDataAuthor);
  const authorData = [...setAuthor];
  const setDate = new Set(newDataDate);
  const dataDate = [...setDate].sort((a, b) => b - a);

  const newDataGenre = data?.map(track => {
    return track.genre;
  });

  const setGenre = new Set(newDataGenre);
  const dataGenre = [...setGenre];
  if (error) {
    return (
      <S.PopUp left={name === "button-author" ? 100: name === "button-year" ? 250 : name === "button-genre" ? 400 : 0
      }>
        <p style={{ color: "red" }}>{error.error}</p>
      </S.PopUp>
    );
  }
  if (name === "button-author") {
    return (

      <S.PopUp left={100}>
        <S.PopUpContainer>
          {authorData.map((author, index) => {
            return author && <S.PopUpText key={index}>{author}</S.PopUpText>;
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
            return gemre && <S.PopUpText key={id}>{gemre}</S.PopUpText>;
          })}
        </S.PopUpContainer>
      </S.PopUp>
    );
  }

}

export default PopUp;