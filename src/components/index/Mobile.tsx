import React, {
  FC,
  HTMLAttributes,
  useState,
  useEffect,
  RefObject,
} from "react"
import styled from "styled-components"
import { Index, AudioUrls } from "../../constants/siteConstants"
import { CursorRowGroup } from "../CursorRowGroup"
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

  const onRecordPlayerClick = () => {
    setIsPlayingMusic(!isPlayingMusic);
  };

  return (
    <MobileContainer className={ className ?? "" }>
      <HeaderContainer>
        <Header>{Index.mobileHeaderName}</Header>
        <RecordPlayerContainer>
          <StyledRecordPlayer isArmRotating={isPlayingMusic} onClick={ onRecordPlayerClick } />
          {isPlayingMusic && (
            <HiddenAudio src={currentSong} autoPlay={true} ref={keepPlaying} />
          )}
        </RecordPlayerContainer>
      </HeaderContainer>
      <BioContainer>
        <CursorRowGroup contentItems={ Index.intro } />
      </BioContainer>
    </MobileContainer>
  )
}

const MobileContainer = styled.div`
  display: grid;
  grid-row-gap: 40px;
  margin: 0 15px;
`

const BioContainer = styled.div`
  border: 5px dashed white;
  padding: 15px;
  display: grid;
  grid-row-gap: 10px;
  font-size: 0.9rem;
  min-height: 231px;
`;

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
