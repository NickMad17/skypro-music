import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackList: [],
  randomList: [],
  trackPlay: null,
  shuffle: false,
  play: null
};

export const tracksSlice = createSlice({
  name: "audioPlayer",
  initialState,
  reducers: {
    addTracks: ({ trackList, shuffle, randomList }, { payload: data }) => {
      trackList.push(...data);
    },

    addRandomTracks: ({ shuffle, randomList }, { payload: data }) => {
      for (let i = data.length - 1; i > 0; i--) {
        let tmp = data[i];
        let rnd = Math.floor(Math.random() * (i + 1));

        data[i] = data[rnd];
        data[rnd] = tmp;
      }
      randomList.push(...data);
    },

    addTrackPlay: (state, { payload: trackId }) => {
      return {
        ...state,
        trackPlay: trackId
      };
    },

    nextTrack: (state) => {

      if (!state.shuffle) {
        const end = state.trackList.at(-1).id;
        const start = state.trackList.at(0).id;
        const nextTrack = state.trackPlay + 1;
        if (nextTrack <= end) {
          return {
            ...state,
            trackPlay: nextTrack
          };
        } else {
          return {
            ...state,
            trackPlay: start
          };
        }
      } else {
        const start = state.randomList.at(0).id;
        const lastInd = state.randomList.length - 1
        let myIndex
        state.randomList.forEach((track,index) => {
          if (track.id === state.trackPlay ) {
            myIndex = index
          }
        });
        if (myIndex < lastInd){
          const nextTrack = state.randomList.at(myIndex+1).id
          return {
            ...state,
            trackPlay: nextTrack
          }
        } else {
          return {
            ...state,
            trackPlay: start
          }
        }
      }
    },

    setShuffle: (state,  { payload: flag }) => {
      return {
        ...state,
        shuffle: flag
      }
    },

    setPlaying: (state, { payload: flag }) => {
      return {
        ...state,
        play: flag
      };
    },

    prevTrack: (state) => {

      if (!state.shuffle) {
        const end = state.trackList.at(-1).id;
        const start = state.trackList.at(0).id;

        const prevTrack = state.trackPlay - 1;
        if (prevTrack >= start) {
          return {
            ...state,
            trackPlay: prevTrack
          };
        } else {
          return {
            ...state,
            trackPlay: end
          };
        }
      } else {
        const end = state.randomList.at(-1).id;
        const start = state.randomList.at(0).id;
        let myIndex
        state.randomList.forEach((track,index) => {
          if (track.id === state.trackPlay ) {
            myIndex = index
          }
        });
        if (myIndex > 0){
          const prevTrack = state.randomList.at(myIndex-1).id
          return {
            ...state,
            trackPlay: prevTrack
          }
        } else {
          return {
            ...state,
            trackPlay: end
          }
        }
      }
    },
    
    clear: (state) => {
      return {
        ...state,
        trackList: [],
        randomList: [],
        trackPlay: null,
        shuffle: false,
        play: null
      }
    }
  }
});

export const { actions, reducer } = tracksSlice;