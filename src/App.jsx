import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Footer from "./components/Footer/Footer";
import NavMenu from "./components/NavMenu/NavMenu";
import SideBar from "./components/SideBar/SideBar";
import TrackList from "./components/TrackList/TrackList";
import * as S from "./App.styles";

function App() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <TrackList />
          <SideBar />
        </S.Main>
        <AudioPlayer />
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
}

export default App;
