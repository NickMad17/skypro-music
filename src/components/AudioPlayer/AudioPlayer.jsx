import React, { useContext, useEffect, useState, useRef } from "react";
import SceletonPlayList from "../Sceleton/SceletonPlayList";
import ThisTrack from "./ThisTrack/ThisTrack";
import * as S from "./AudioPlayer.styles";
import { getTrackOnId } from "../../API/api";
import ProgressBar from "./ProgressBar/ProgressBar";
import { usePlayPause, useShuffle, useTrackId } from "../../hooks/useTracks";
import { useActions } from "../../hooks/useActions";

const AudioPlayer = () => {
  const trackID = useTrackId();
  const isPlaying = usePlayPause();
  const { nextTrack, setPlaying, prevTrack, setShuffle } = useActions();
  const isShuffle = useShuffle()

  const [loading, isLoad] = useState(null);
  const [thisTrackPlay, setThisTrack] = useState(null);
  const [isCurrentTime, setCurrentTime] = useState(0);
  const [isDuration, setDuration] = useState(0);
  const [isCurrentVolume, setCurrentVolume] = useState(50);

  // audio tag states
  const audioRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(true);
  const [isLooping, setIsLooping] = useState(false);
  let [idStart, setIdStart] = useState();
  const [trackEnd, setTrackEnd] = useState(false);

  const getTrack = async () => {
    try {
      isLoad(true);
      const trackData = await getTrackOnId(trackID);
      await setThisTrack(trackData);
      isLoad(false);
    } catch (error) {
      isLoad(false);
    }
  };

  useEffect(() => {
    if (trackID) {
      setPlaying(true);
      setIdStart(trackID);
      getTrack();
      console.log(trackID, "hello");
    }
  }, [trackID]);

  useEffect(() => {
    trackID ?
      handleNextTrack() :
      "";
  }, [trackEnd]);

  const handleLoop = () => {
    audioRef.current.loop = "loop";
    console.log(audioRef.current.loop);
    setIsLooping(true);
  };

  const handleNoLoop = () => {
    audioRef.current.loop = "";
    setIsLooping(false);
  };

  const handleStart = () => {
    audioRef.current.play();
    setPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  const handleNextTrack = () => {
    nextTrack();
  };

  const handlePrevTrack = () => {
    prevTrack();
  };

  const handleShuffleTrue = () => {
    setShuffle(true)
  };

  const handleShuffleFalse = () => {
    setShuffle(false)
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  const toggleLoop = isLooping ? handleNoLoop : handleLoop;

  const toggleShuffle = () =>  isShuffle ? handleShuffleFalse() : handleShuffleTrue()

  const onPlaying = () => {

    let duration = audioRef.current.duration;
    let nowTime = audioRef.current.currentTime;
    setCurrentTime(nowTime);
    setDuration(duration);
  };

  const timeTrack = (time) => {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
    return `${min}:${sec}`;
  };

  if (!isNaN(isDuration) && isDuration === isCurrentTime && isCurrentTime !== 0) {
    setCurrentTime(0);
    setTrackEnd(!trackEnd);
  }

  return (
    <>
      {
        thisTrackPlay && (<>
          <audio ref={audioRef} src={thisTrackPlay.track_file} type="audio/mpeg" autoPlay={true}
                 onTimeUpdate={onPlaying}></audio>

          <p style={{
            color: "rgba(255,255,255,0.61)",
            position: "absolute",
            bottom: "83px",
            right: "15px"
          }}>{isDuration ? `${timeTrack(isCurrentTime)} / ${timeTrack(isDuration)}` : ""}</p>

          <S.Bar>
            <S.BarContent>
              <ProgressBar typeProgressBar="track" nowRange={isCurrentTime} setNowRange={setCurrentTime}
                           duration={isDuration} audioRef={audioRef} />
              <S.BarPlayerBlock>
                <S.BarPlayer>
                  <S.PlayerControls>
                    <S.BtnPrev onClick={handlePrevTrack}>
                      <S.BtnPrevSvg alt="prev">
                        <use href="img/icon/sprite.svg#icon-prev"></use>
                      </S.BtnPrevSvg>
                    </S.BtnPrev>
                    <S.BtnPlay onClick={togglePlay}>
                      <S.BtnPlaySvg alt="play">
                        {isPlaying ?
                          <svg width="15" height="19" viewBox="0 0 15 19" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <rect width="5" height="19" fill="#D9D9D9" />
                            <rect x="10" width="5" height="19" fill="#D9D9D9" />
                          </svg>
                          :
                          <use href="img/icon/sprite.svg#icon-play"></use>
                        }
                      </S.BtnPlaySvg>
                    </S.BtnPlay>
                    <S.BtnNext onClick={handleNextTrack}>
                      <S.BtnNextSvg alt="next">
                        <use href="img/icon/sprite.svg#icon-next"></use>
                      </S.BtnNextSvg>
                    </S.BtnNext>
                    <S.BtnRepeat onClick={toggleLoop}>
                      <S.BtnRepeatSvg wtrue={isLooping} alt="repeat">
                        <use href="img/icon/sprite.svg#icon-repeat"></use>
                      </S.BtnRepeatSvg>
                    </S.BtnRepeat>
                    <S.BtnShuffle onClick={toggleShuffle}>
                      <S.BtnShuffleSvg wtrue={isShuffle} alt="shuffle">
                        <use href="img/icon/sprite.svg#icon-shuffle"></use>
                      </S.BtnShuffleSvg>
                    </S.BtnShuffle>
                  </S.PlayerControls>

                  <S.PlayerTrackPlay>
                    <S.Contain>
                      {loading ? <SceletonPlayList /> : <ThisTrack thisTrackPlay={thisTrackPlay} />}
                    </S.Contain>

                    <S.BtnDisAndLike>
                      <S.BtnLike>
                        <S.BtnLikeSvg alt="like">
                          <use href="img/icon/sprite.svg#icon-like"></use>
                        </S.BtnLikeSvg>
                      </S.BtnLike>
                      <S.BtnDislike>
                        <S.BtndislikeSvg alt="dislike">
                          <use href="img/icon/sprite.svg#icon-dislike"></use>
                        </S.BtndislikeSvg>
                      </S.BtnDislike>
                    </S.BtnDisAndLike>
                  </S.PlayerTrackPlay>
                </S.BarPlayer>
                <S.BarVolumeBlock>

                  <S.VolumeContent>
                    <S.VolumeImage>
                      <S.VolumeSvg alt="volume">
                        <use href="img/icon/sprite.svg#icon-volume"></use>
                      </S.VolumeSvg>
                    </S.VolumeImage>
                    <S.VolumeProgress>
                      <ProgressBar typeProgressBar="volume" nowRange={isCurrentVolume} setNowRange={setCurrentVolume}
                                   duration={1} audioRef={audioRef} borderRadius={54} />
                    </S.VolumeProgress>
                  </S.VolumeContent>
                </S.BarVolumeBlock>
              </S.BarPlayerBlock>
            </S.BarContent>
          </S.Bar>
        </>)
      }
    </>
  );
};

export default AudioPlayer;
