import styled from "styled-components";

export const ContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
  max-height: 53.5vh;
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
