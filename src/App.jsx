import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Footer from "./components/Footer/Footer";
import NavMenu from "./components/NavMenu/NavMenu";
import SideBar from "./components/SideBar/SideBar";
import TrackList from "./components/TrackList/TrackList";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <TrackList />
          <SideBar />
        </main>
        <AudioPlayer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
