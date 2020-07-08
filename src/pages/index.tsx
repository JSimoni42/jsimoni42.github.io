import React, { FC } from "react"

import styled from "styled-components";
import { PageWrapper } from "../components/page-wrapper";
import { CursorRow } from "../components/CursorRow";
import { Index } from "../constants/siteConstants";
import { AsciiComputer } from "../components/AsciiComputer";
import { AutoplayVideos } from "../components/AutoplayVideos";

const IndexPage: FC = () => {
  return (
    <PageWrapper>
      <TerminalScreenFrame>
        <HeaderContainer>
          <Header>
            { Index.headerName }
          </Header>
        </HeaderContainer>
        <ContentContainer>
          <IntroContainer>
            <CursorRow text={ Index.intro } startTyping={ true } />
          </IntroContainer>
          <ComputerContainer>
            <AsciiComputer>
              <ComputerContent />
            </AsciiComputer>
          </ComputerContainer>
        </ContentContainer>
      </TerminalScreenFrame>
    </PageWrapper>
  )
};

const ComputerContent = styled(AutoplayVideos)`
  width: 100%;
  height: 100%;
`;

const HeaderContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const Header = styled.pre`
  color: white;
  margin: 0;
  padding: 0;
  display: inline-block;
`;

const TerminalScreenFrame = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-grow: 0;
`;

const IntroContainer = styled.div`
  border: 5px dashed white;
  padding: 15px;
  flex-grow: 1;
  width: 45%;
  margin-right: 25px;
`;

const ComputerContainer = styled(IntroContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default IndexPage
