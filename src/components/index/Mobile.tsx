import React, {
  FC,
  HTMLAttributes,
  useState,
  useEffect,
  RefObject,
} from "react"
import styled from "styled-components"
import { Index, AudioUrls } from "../../constants/siteConstants"
import { RecordPlayer } from "../RecordPlayer"

export const MobileIndex: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setIsPlayingMusic(true)
    }, 3000)
  }, [])

  const keepPlaying = (ref: HTMLAudioElement | null) => {
    if (ref) {
      ref.addEventListener("ended", () => {
        const nextIndex = (currentSongIndex + 1) % AudioUrls.length
        setCurrentSongIndex(nextIndex)
      })
    }
  }

  const currentSong = AudioUrls[currentSongIndex]

  return (
    <HeaderContainer className={className ?? ""}>
      <Header>{Index.mobileHeaderName}</Header>
      <RecordPlayerContainer>
        <StyledRecordPlayer isArmRotating={isPlayingMusic} />
        {isPlayingMusic && (
          <HiddenAudio src={currentSong} autoPlay={true} ref={keepPlaying} />
        )}
      </RecordPlayerContainer>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  text-align: center;
`

const Header = styled.pre`
  margin: 0;
  padding: 0;
  display: inline-block;
  max-width: 100%;
`

const StyledRecordPlayer = styled(RecordPlayer)`
  margin-top: 20px;
`

const RecordPlayerContainer = styled.div``

const HiddenAudio = styled.audio``
