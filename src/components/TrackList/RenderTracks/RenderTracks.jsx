import React, { useContext, useEffect, useState } from "react";
import Track from "./Track/Track";
import { listTrack } from "../obj";
import * as S from "./RenderTracks.styles";
import { getAllTracks } from "../../../API/api";
import { deley } from "../../Sceleton/loadStart";
import { Context } from "../../../context/context";
import SceletonTrack from "../../Sceleton/SceletonTrack";
import { PlaylistItem } from "./RenderTracks.styles";

const RenderTracks = () => {
  const { loadState } = useContext(Context);
  const { isLoad, loading } = loadState;
  const [tracks, setTracks] = useState([]);
  useEffect(() => {

    getAllTracks().then((tracksData) => {
      setTracks(tracksData);
      isLoad(!loading);
    });
  }, []);
  return (
    <S.ContentPlaylist>

      {loading ?
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
        : tracks.map((track) => {
          return (
            <Track
              key={track.id}
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

export default RenderTracks;


