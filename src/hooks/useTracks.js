import { useSelector } from "react-redux";

export const useTrackId  = () => {
  const {trackPlay} = useSelector(state => state.audioPlayer)
  return trackPlay
}

export const usePlayPause = () => {
  const {play} = useSelector(state => state.audioPlayer)
  return play
}

export const useShuffle = () => {
  const {shuffle} = useSelector(state => state.audioPlayer)
  return shuffle
}

export const useListName = () => {
  const name = useSelector(state => state.changelist.name)
  return name
}