import { useEffect, useState } from "react";
import { styled } from "styled-components";

export const StyledProgressInput = styled.input`
  --progress-height: 6px;
  --progress-color: #b672ff;
  --progress-color: ${({ customType }) => customType === "volume" ? "#fff": "#b672ff" };
  border-radius: ${({borderRadius}) => `${borderRadius}px` || 'none'};

  --progress-bg-color: #2e2e2e;

  margin: 0;
  width: 100%;
  background: #000;
  height: var(--progress-height);
  -webkit-appearance: none;
  cursor: pointer;
  background: transparent;
  position: relative;
  overflow: hidden;
  transition: height 0.3s;

  &:hover {
    height: 10px;
    --progress-height: 10px;
  }

  &::-webkit-slider-runnable-track {
    position: relative;
    height: var(--progress-height);
    background: var(--progress-bg-color);
  }

  &::-webkit-slider-thumb {
    --thumb-height: 1px;
    --thumb-width: 1px;
    position: relative;
    -webkit-appearance: none;
    width: var(--thumb-width, var(--thumb-height));
    box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0 100vmax var(--progress-color);
  }

  &::-webkit-slider-runnable-track {
    background: var(--progress-bg-color);
  }

  /* FF */

  &::-moz-range-track {
    width: 100%;
    height: var(--progress-height);
    background: var(--progress-bg-color);
    border: none;
    border-radius: 0px;
  }

  &::-moz-range-thumb {
    border: none;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: transparent;
  }

  &::-moz-range-progress {
    background-color: var(--progress-color);
    height: var(--progress-height);
  }
`;

function ProgressBar({typeProgressBar, nowRange, setNowRange, duration , audioRef , borderRadius}) {

  return (
    <StyledProgressInput
      type="range"
      customType={typeProgressBar}
      min={0}
      max={duration}
      value={nowRange}
      step={0.01}
      borderRadius={borderRadius}
      onChange={(event) => {
        if(typeProgressBar === 'track'){
          const newTime = audioRef.current.currentTime = event.target.value
          setNowRange(newTime);
        } else if (typeProgressBar === 'volume') {
          const newVolume= audioRef.current.volume = event.target.value
          setNowRange(newVolume);
        }
      }
      }
    />
  );
}

export default ProgressBar;

