import { bindActionCreators } from "@reduxjs/toolkit";
import { actions as trackAction} from "../store/slices/tracks/tracks.slice";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

const rootActions = {
  ...trackAction
}
export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() =>
    bindActionCreators(rootActions, dispatch), [dispatch]
  )
}