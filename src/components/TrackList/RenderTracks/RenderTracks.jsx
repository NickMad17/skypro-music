import React, { useEffect, useState } from "react";
import Track from "./Track/Track";
import * as S from "./RenderTracks.styles";
import SceletonTrack from "../../Sceleton/SceletonTrack";
import { useGetAllTracksQuery } from "../../../store/api/myTracks.api";

const RenderTracks = () => {
  const { data, isLoading, error } = useGetAllTracksQuery();



    return (
      <S.ContentPlaylist>
        {error ? <p style={{ color: "red" }}>{error.status}</p>: isLoading ?
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
              <Track
                allTracks={data}
                key={track.id}
                id={track.id}
                name={track.name}
                author={track.author}
                album={track.album}
                time={track.duration_in_seconds}
                feat={track.feat}
                stared_user={track.stared_user}
              />
            );
          })
        }
      </S.ContentPlaylist>
    );
  }
export default RenderTracks;


