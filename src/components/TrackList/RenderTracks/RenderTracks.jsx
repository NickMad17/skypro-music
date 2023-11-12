import React, { useEffect, useState } from "react";
import Track from "./Track/Track";
import * as S from "./RenderTracks.styles";
import { getAllTracks } from "../../../API/api";
import SceletonTrack from "../../Sceleton/SceletonTrack";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/useActions";

const RenderTracks = () => {
  const { addTracks } = useActions();

  const [loading, isLoad] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [addNewError, setNewError] = useState("");

  const getTracks = async () => {
    try {
      isLoad(true);
      const allTracksData = await getAllTracks();
      await setTracks(allTracksData);
      await addTracks(allTracksData)
      isLoad(false);
    } catch (error) {
      isLoad(false);
      setNewError("Не удалось получить список треков");
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
              allTracks={tracks}
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
      <p style={{ color: "red" }}>{addNewError}</p>

    </S.ContentPlaylist>

  );
};

export default RenderTracks;


