import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as trackReducer} from "./slices/tracks/tracks.slice"

const reducers = combineReducers({
  audioPlayer : trackReducer
})
export const store = configureStore({
  reducer: reducers
})