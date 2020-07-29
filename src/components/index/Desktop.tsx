import React, { FC, HTMLAttributes } from "react"
import styled from "styled-components"
import { Index } from "../../constants/siteConstants"
import { CursorRow } from "../CursorRow"
import { AsciiComputer } from "../AsciiComputer"
import { AutoplayVideos } from "../AutoplayVideos"

export const DesktopIndex: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <div className={className ?? ""}>
      <HeaderContainer>
        <Header>{Index.headerName}</Header>
      </HeaderContainer>
      <ContentContainer>
        <IntroContainer>
          <CursorRow text={Index.intro} startTyping={true} />
        </IntroContainer>
        <ComputerContainer>
          <AsciiComputer>
            <ComputerContent />
          </AsciiComputer>
        </ComputerContainer>
      </ContentContainer>
    </div>
  )
}

const HeaderContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`

const ComputerContent = styled(AutoplayVideos)`
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
`;

const DashedContainer = styled.div`
  border: 5px dashed white;
  padding: 15px;
  flex-grow: 1;
  width: 45%;
`;

const IntroContainer = styled(DashedContainer)`
  margin-right: 25px;
`

const ComputerContainer = styled(DashedContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`
