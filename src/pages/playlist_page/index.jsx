import React from "react";
import { useParams } from "react-router-dom";
import * as S from "../../auxiliaryStyles/auxiliaryStyles"
import { dataList } from "../../components/SideBar/PlayList/dataList";
const PlaylistPage = () => {
  const params = useParams();

  const myList = dataList.find(list => list.id === Number(params.id));
  const text = `PlayList Page ${myList.id}`
  const name = `${myList.name}`
  return (
    <S.Center>
      <S.Text>
        <span style={{
          textAlign: 'center',
          color: '#ad61ff'
        }}>{text}</span>
        <span style={{
          textAlign: 'center'
        }} >{name}</span>
      </S.Text>
    </S.Center>
  );
};

export default PlaylistPage;