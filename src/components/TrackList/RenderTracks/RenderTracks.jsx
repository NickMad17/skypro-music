import React, { useContext, useEffect, useState } from "react";
import Track from "./Track/Track";
import * as S from "./RenderTracks.styles";
import { getAllTracks } from "../../../API/api";
import { deley } from "../../Sceleton/loadStart";
import { Context } from "../../../context/context";
import SceletonTrack from "../../Sceleton/SceletonTrack";

const RenderTracks = () => {
  const { loadState } = useContext(Context);
  const { isLoad, loading } = loadState;
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    isLoad(true)
    getAllTracks().then((tracksData) => {
      setTracks(tracksData);
      isLoad(false);
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


