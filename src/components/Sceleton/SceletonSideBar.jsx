import React from "react"
import ContentLoader from "react-content-loader"

const SceletonSideBar = (props) => (
    <ContentLoader
        speed={2}
        width={props.width}
        height={props.height}
        viewBox="0 0 250 150"
        backgroundColor="#181818"
        foregroundColor="#454545"
        className={props.yourClass + " " + "sceleton"}
    >
    <rect className="sceleton-animation" width="100%" height="100%" />
  </ContentLoader>
)

export default SceletonSideBar