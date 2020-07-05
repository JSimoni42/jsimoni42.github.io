import React, { FC } from "react"

import styled from "styled-components";
import { PageWrapper } from "../components/page-wrapper";
import { PageFrame } from "../components/page-frame";
import { CursorRow } from "../components/CursorRow";
import { Index } from "../constants/siteConstants";

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
        </ContentContainer>
      </TerminalScreenFrame>
    </PageWrapper>
  )
};

const HeaderContainer = styled.div`
  height: 250px;
  margin-bottom: 20px;
`;

const Header = styled.pre`
  color: white;
  margin: 0;
`;

const TerminalScreenFrame = styled(PageFrame)`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-grow: 1;
`;

const IntroContainer = styled.div`
  border: 5px dashed white;
  padding: 15px;
  width: 50%;
  box-sizing: border-box;
`;

export default IndexPage
