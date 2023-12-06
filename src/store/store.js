import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as audioReducer } from "./slices/tracks/audioPlayer.slice";
import { reducer as listReducer } from "./slices/tracks/TrackListName.slice";
import { apiStore } from "./api/api.store";

const reducers = combineReducers({
  audioPlayer: audioReducer,
  changelist: listReducer,
  [apiStore.reducerPath]: apiStore.reducer
});
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiStore.middleware)
});