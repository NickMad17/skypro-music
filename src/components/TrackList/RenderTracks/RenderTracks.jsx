import React, { useContext, useEffect, useState } from "react";
import Track from "./Track/Track";
import * as S from "./RenderTracks.styles";
import { getAllTracks } from "../../../API/api";
import SceletonTrack from "../../Sceleton/SceletonTrack";

const RenderTracks = () => {
  const [loading, isLoad] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [addNewError, setNewError] = useState("")

  const getTracks = async () => {
    try {
      isLoad(true);
      const allTracksData = await getAllTracks();
      await setTracks(allTracksData);
      isLoad(false);
    } catch (error) {
      isLoad(false);
      setNewError("Не удалось получить список треков")
    }
  };

  useEffect(() => {
    getTracks();

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
      <p style={{color: "red"}}>{addNewError}</p>

    </S.ContentPlaylist>

  );
};

export default RenderTracks;


