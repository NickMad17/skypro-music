import React, { useEffect, useState } from "react";
import Track from "./Track/Track";
import * as S from "./RenderTracks.styles";
import SceletonTrack from "../../Sceleton/SceletonTrack";
import { useGetAllTracksQuery } from "../../../store/api/myTracks.api";
import { useFilters } from "../../../hooks/useFilters";

const RenderTracks = ({search, setSearch,}) => {
  let { data, isLoading, error } = useGetAllTracksQuery();
  const { filter  } = useFilters()
  const [yearsState, setYears] = useState("")

  useEffect(() => {
    setSearch(filter)
  }, [filter]);

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
          : data?.map((track) => {

            if(!search){
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
                  setSearch={setSearch}
                />
              );
            }

            if (track.name.toLowerCase().startsWith(search.toLowerCase()) ||
              track.author.toLowerCase().startsWith(search.toLowerCase()) ||
              track.album.toLowerCase().startsWith(search.toLowerCase()) ||
              track.release_date?.split("-")?.at(0).startsWith(search.toLowerCase()) ||
              track.genre.toLowerCase().startsWith(search.toLowerCase())){
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
                  setSearch={setSearch}
                />
              )
            }


          })
        }
      </S.ContentPlaylist>
    );
  }
export default RenderTracks;


