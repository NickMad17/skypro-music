import styled from "styled-components";

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`;

export const BarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const BarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`;

export const BarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const BarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;

export const PlayerBtn = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
`;

export const BtnPrev = styled(PlayerBtn)`
  margin-right: 23px;
`;

export const BtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`;

export const BtnPlay = styled(PlayerBtn)`
  margin-right: 23px;
`;

export const BtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`;

export const BtnNext = styled(PlayerBtn)`
  margin-right: 28px;
  fill: #d9d9d9;

`;

export const BtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  stroke: #d9d9d9;
`;

export const BtnRepeat = styled(PlayerBtn)`
  margin-right: 24px;
`;

export const BtnRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: ${({ wtrue }) => wtrue ? "rgba(255, 255, 255, 0.94)" : "#696969"};

  &:hover {
    fill: transparent;
    stroke: ${({ wtrue }) => wtrue ? "rgba(255, 255, 255, 0.94)" : "#acacac"};
    cursor: pointer;
  }

  &:active {
    fill: #696969;
    stroke: #ffffff;
    ${({ wtrue }) => wtrue ? "#696969" : "#ffffff"}
    cursor: pointer;
  }
`;

export const BtnShuffle = styled(PlayerBtn)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const BtnShuffleSvg = styled(BtnRepeatSvg)`
    width: 19px;
    height: 12px;
    fill: transparent;
    stroke: ${({ wtrue }) => wtrue ? "rgba(255, 255, 255, 0.94)" : "#696969"};

    &:hover {
        fill: transparent;
        stroke: ${({ wtrue }) => wtrue ? "rgba(255, 255, 255, 0.94)" : "#acacac"};
        cursor: pointer;
    }

    &:active {
        fill: #696969;
        stroke: #ffffff;
        ${({ wtrue }) => wtrue ? "#696969" : "#ffffff"}
        cursor: pointer;
    }
`;

export const PlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`;

export const Contain = styled.div`

`;

export const BtnDisAndLike = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 30%;
`;

export const BtnLike = styled(PlayerBtn)`
  padding: 5px;
  margin-left: 10px;
`;

export const BtnLikeSvg = styled(BtnRepeatSvg)`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

export const BtnDislike = styled(PlayerBtn)`
  padding: 5px;
  margin-left: 28.5px;
`;

export const BtndislikeSvg = styled(BtnRepeatSvg)`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`;

export const BarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`;

export const VolumeContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`;

export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;

export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`;

export const VolumeProgress = styled.div`
  width: 109px;
`;
export const VolumeProgressLine = styled.input`
  width: 109px;
  cursor: pointer;
  background: #ad61ff;
`;


// export const  = styled.div``