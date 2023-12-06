import { useSelector } from "react-redux";

export const useFilters  = () => {
  const {filters} = useSelector(state => state)
  return filters
}