import * as S from "./CompilationRender.styles";
import SceletonTrack from "../../Sceleton/SceletonTrack";
import { useGetMyTracksQuery } from "../../../store/api/myTracks.api";
import Track from "../../TrackList/RenderTracks/Track/Track";
import { useParams } from "react-router-dom";

const CompilationRender = ({search, setSearch}) => {
  const params = useParams();


  const { data, isLoading, error } = useGetMyTracksQuery();


  !isLoading && localStorage.setItem("allTracks", JSON.stringify(data));


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

          if (track.name.toLowerCase().startsWith(search.toLowerCase()) || track.author.toLowerCase().startsWith(search.toLowerCase())){
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
};

export default CompilationRender;


