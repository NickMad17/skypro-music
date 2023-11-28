import { bindActionCreators } from "@reduxjs/toolkit";
import { actions as trackAction} from "../store/slices/tracks/audioPlayer.slice";
import { actions as listAction} from "../store/slices/tracks/TrackListName.slice";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

const rootActions = {
  ...trackAction,
  ...listAction
}
export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() =>
    bindActionCreators(rootActions, dispatch), [dispatch]
  )
}