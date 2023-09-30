import React, { useState } from "react";
import Track from "./Track/Track";
import { listTrack } from "../obj";
import * as S from "./RenderTracks.styles"

const RenderTracks = () => {

  return (
    <S.StyledContentPlaylist>
        {listTrack.map((track, id) => {
          return (
            <Track
              key={id}
              name={track.name}
              autor={track.autor}
              albom={track.albom}
              time={track.time}
              feat={track.feat}
            />
          );
        })}
    </S.StyledContentPlaylist>

  );
};

export default RenderTracks;


