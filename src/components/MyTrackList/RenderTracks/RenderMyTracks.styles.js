import styled, { keyframes } from "styled-components";

export const ContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
  max-height: 70vh; 
  padding-bottom: 150px;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const PlaylistSceleton = styled.div`
  width: 20px;
  display: block;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const margin = keyframes`
  0%{
    color: #fff;
  }
  50% {
    margin-left: 50%;
    color: #181818;
  }
  100% {
    margin-left: 200px;
    color: #fff;
  }
`

export const Label= styled.p `
  font-size: 30px;
  margin-left: 200px;
  animation: ${margin} 4s linear infinite;
`


