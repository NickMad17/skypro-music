import { bindActionCreators } from "@reduxjs/toolkit";
import { actions as trackAction} from "../store/slices/tracks/audioPlayer.slice";
import { actions as FiltersActions} from "../store/slices/tracks/Filters";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

const rootActions = {
  ...trackAction,
  ...FiltersActions
}
export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() =>
    bindActionCreators(rootActions, dispatch), [dispatch]
  )
}