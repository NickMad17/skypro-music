import React, { useContext, useEffect, useState } from "react";
import SceletonPlayList from "../Sceleton/SceletonPlayList";
import ThisTrack from "./ThisTrack/ThisTrack";
import * as S from "./AudioPlayer.styles";
import { getTrackOnId } from "../../API/api";
import { Context } from "../../context/context";

const AudioPlayer = () => {
  const { trackPlay } = useContext(Context);
  const { trackId } = trackPlay;
  const [loading, isLoad] = useState(null);
  const [thisTrackPlay, setThisTrack] = useState(null);
  const getTrack = async () => {
    try {
      isLoad(true);
      const trackData = await getTrackOnId( trackId );
      await setThisTrack(trackData);
      isLoad(false);
    } catch (error) {
      isLoad(false);
    }
  };

  useEffect(() => {
    getTrack();
  }, [trackId]);


  return (<>
    {
      thisTrackPlay ? <S.Bar>
          <S.BarContent>
            <S.BarPlayerProgress></S.BarPlayerProgress>
            <S.BarPlayerBlock>
              <S.BarPlayer>
                <S.PlayerControls>
                  <S.BtnPrev>
                    <S.BtnPrevSvg alt="prev">
                      <use href="img/icon/sprite.svg#icon-prev"></use>
                    </S.BtnPrevSvg>
                  </S.BtnPrev>
                  <S.BtnPlay>
                    <S.BtnPlaySvg alt="play">
                      <use href="img/icon/sprite.svg#icon-play"></use>
                    </S.BtnPlaySvg>
                  </S.BtnPlay>
                  <S.BtnNext>
                    <S.BtnNextSvg alt="next">
                      <use href="img/icon/sprite.svg#icon-next"></use>
                    </S.BtnNextSvg>
                  </S.BtnNext>
                  <S.BtnRepeat>
                    <S.BtnRepeatSvg alt="repeat">
                      <use href="img/icon/sprite.svg#icon-repeat"></use>
                    </S.BtnRepeatSvg>
                  </S.BtnRepeat>
                  <S.BtnShuffle>
                    <S.BtnShuffleSvg alt="shuffle">
                      <use href="img/icon/sprite.svg#icon-shuffle"></use>
                    </S.BtnShuffleSvg>
                  </S.BtnShuffle>
                </S.PlayerControls>

                <S.PlayerTrackPlay>
                  <S.Contain>
                    {loading ? <SceletonPlayList /> : <ThisTrack thisTrackPlay={thisTrackPlay}/>}
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
                    <S.VolumeProgressLine
                      type="range"
                      name="range"
                    />
                  </S.VolumeProgress>
                </S.VolumeContent>
              </S.BarVolumeBlock>
            </S.BarPlayerBlock>
          </S.BarContent>
        </S.Bar>
        :
        ""
    }
    </>
  );
};

export default AudioPlayer;
