import styled from "styled-components";

export const PopUp = styled.div`
  position: absolute ;
  top: 50px;
  left: ${({left}) => `${left}px`};
  padding: 34px;
  background: #313131;
  border-radius: 12px;
`

export const PopUpContainer = styled.div`
  max-height: 250px;
  min-width: 200px;
  z-index: 400;
  overflow-y: auto;
  background: #313131;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  padding-right: 24px;

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 20px;
    background: #4B4949;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 20px;
    background-clip: content-box;
  }
`

export const PopUpText = styled.a`
  color: #FFF;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  &:hover{
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`