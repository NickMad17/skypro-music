import React from "react"
import ContentLoader from "react-content-loader"

const SceletonTrack = (props) => (
  <ContentLoader 
    speed={2}
    width={1107}
    height={51}
    viewBox="0 0 1107 51"
    backgroundColor="#181818"
    foregroundColor="#454545"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="51" height="51" /> 
    <rect x="65" y="16" rx="0" ry="0" width="356" height="19" /> 
    <rect x="481" y="16" rx="0" ry="0" width="271" height="19" /> 
    <rect x="802" y="16" rx="0" ry="0" width="305" height="19" />
  </ContentLoader>
)

export default SceletonTrack