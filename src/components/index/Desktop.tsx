import React, { FC, HTMLAttributes } from "react"
import styled from "styled-components"
import { Index } from "../../constants/siteConstants"
import { AsciiComputer } from "../AsciiComputer"
import { CursorRowGroup } from "../CursorRowGroup"
import MountainBiking from "../MountainBiking"

export const DesktopIndex: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const [ finishTypingIntro, setFinishTypingIntro ] = React.useState(false)

  return (
    <DesktopContent className={className ?? ""}>
      <HeaderContainer>
        <Header>{Index.headerName}</Header>
      </HeaderContainer>
      <ContentContainer>
        <BioContainer onDoubleClick={() => setFinishTypingIntro(true)}>
          <CursorRowGroup contentItems={Index.intro} finishTyping={finishTypingIntro} />
        </BioContainer>
        <ComputerContainer>
          <AsciiComputer>
            <ComputerContent />
          </AsciiComputer>
        </ComputerContainer>
      </ContentContainer>
    </DesktopContent>
  )
}

const DesktopContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`

const HeaderContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`

const ComputerContent = styled(MountainBiking)`
  width: 100%;
  height: 100%;
`

const Header = styled.pre`
  color: white;
  margin: 0;
  padding: 0;
  display: inline-block;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-grow: 0;
`

const DashedContainer = styled.div`
  border: 5px dashed white;
  padding: 15px;
  flex-grow: 1;
  width: 45%;
`

const BioContainer = styled(DashedContainer)`
  margin-right: 25px;
  display: grid;
  grid-row-gap: 15px;
`

const ComputerContainer = styled(DashedContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`
