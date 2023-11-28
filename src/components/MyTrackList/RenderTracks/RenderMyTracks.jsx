import MyTrack from "./Track/MyTrack";
import * as S from "./RenderMyTracks.styles";
import SceletonTrack from "../../Sceleton/SceletonTrack";
import { useCreateMyTracksMutation, useGetMyTracksQuery } from "../../../store/api/myTracks.api";
import { useEffect } from "react";

const RenderMyTracks = () => {
  const { data, isLoading, error } = useGetMyTracksQuery();


  !isLoading && localStorage.setItem("allTracks", JSON.stringify(data));

  if (data?.length === 0) {
    return <S.Label>Тут пока пусто)</S.Label>
  }



  return (
    <S.ContentPlaylist>
      {error ? <p style={{ color: "red" }}>{error.status}</p> : isLoading ?
        <S.PlaylistSceleton>
          <SceletonTrack />
          <SceletonTrack />
          <SceletonTrack />
          <SceletonTrack />
          <SceletonTrack />
          <SceletonTrack />
          <SceletonTrack />
          <SceletonTrack />
          <SceletonTrack />
          <SceletonTrack />
          <SceletonTrack />
          <SceletonTrack />
          <SceletonTrack />
          <SceletonTrack />
          <SceletonTrack />
          <SceletonTrack />
        </S.PlaylistSceleton>
        : data.map((track) => {
          return (
            <MyTrack
              allTracks={data}
              key={track.id}
              id={track.id}
              name={track.name}
              author={track.author}
              album={track.album}
              time={track.duration_in_seconds}
              feat={track.feat}
            />
          );
        })
      }
    </S.ContentPlaylist>
  );
};

export default RenderMyTracks;


