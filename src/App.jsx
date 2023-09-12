import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";
import TrackList from "./components/TrackList";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Navigation />
          <TrackList/>
          <SideBar/>
        </main>
        <AudioPlayer />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
