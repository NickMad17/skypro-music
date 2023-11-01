import React, { useState } from "react";
import * as S from "../../App.styles";
import NavMenu from "../../components/NavMenu/NavMenu";
import TrackList from "../../components/TrackList/TrackList";
import SideBar from "../../components/SideBar/SideBar";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <S.Main>
        <NavMenu />
        <TrackList />
        <SideBar />
      </S.Main>
      <AudioPlayer />
      <Footer />
    </div>
  );
};

export default Main;