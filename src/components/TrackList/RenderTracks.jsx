import React, { useState } from "react";
import Track from "./Track";
import { listTrack } from "./obj";

const RenderTracks = () => {

  return (
    <div className="content__playlist playlist">
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
    </div>

  );
};

export default RenderTracks;


