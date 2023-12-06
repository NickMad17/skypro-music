import React from "react";
import * as S from "../../App.styles";
import NavMenu from "../NavMenu/NavMenu";
import TrackList from "../TrackList/TrackList";
import SideBar from "../SideBar/SideBar";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function PageLayout() {
  return (
    <div>
      <S.MainBox>
        <NavMenu />
        <Outlet/>
        <SideBar />
      </S.MainBox>
      <AudioPlayer />
    </div>
  );
}

export default PageLayout;