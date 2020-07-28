import React, { FC, HTMLAttributes, useState } from "react"
import { VideoURLs } from "../constants/siteConstants"

type Props = HTMLAttributes<HTMLVideoElement>

export const AutoplayVideos: FC<Props> = ({ className }) => {
  const [currentVideoSrcIndex, setCurrentVideoSrcIndex] = useState(0)

  const rotateVideo = (video: HTMLVideoElement | null) => {
    if (video) {
      video.addEventListener("ended", () => {
        const nextIndex = (currentVideoSrcIndex + 1) % VideoURLs.length
        setCurrentVideoSrcIndex(nextIndex)
      })
    }
  }

  return (
    <video
      ref={rotateVideo}
      autoPlay={true}
      muted={true}
      className={className}
      src={VideoURLs[currentVideoSrcIndex]}
    />
  )
}
