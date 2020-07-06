import React, { FC } from "react"

import styled from "styled-components";
import { PageWrapper } from "../components/page-wrapper";
import { CursorRow } from "../components/CursorRow";
import { Index } from "../constants/siteConstants";
import { AsciiComputer } from "../components/AsciiComputer";

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
          <IntroContainer>
            <AsciiComputer />
          </IntroContainer>
        </ContentContainer>
      </TerminalScreenFrame>
    </PageWrapper>
  )
};

const HeaderContainer = styled.div`
  margin-bottom: 20px;
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

export default IndexPage
