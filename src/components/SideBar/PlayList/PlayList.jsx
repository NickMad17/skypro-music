import React from "react";
import * as S from "./PlayList.styles";

const Playlist = (props) => {
  return (
    <S.SidebarItem>
      <S.SidebarLink href="#">
        <S.SidebarImg
          src={props.img}
          alt="day's playlist"
        />
      </S.SidebarLink>
    </S.SidebarItem>
  );
};

export default Playlist;