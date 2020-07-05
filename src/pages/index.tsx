import React, { FC } from "react"

import styled, { keyframes } from "styled-components";
import { PageWrapper } from "../components/page-wrapper";
import { PageFrame } from "../components/page-frame";

const IndexPage: FC = () => {
  return (
    <PageWrapper>
      <TerminalScreenFrame>
        <CursorRow />
        <CursorRow>
          <Cursor />
        </CursorRow>
      </TerminalScreenFrame>
    </PageWrapper>
  )
};

const CursorRow = styled.div`
  height: 1em;
`;

const Blinking = keyframes`
  from {
    background-color: white;
  }

  to {
    background-color: black;
  }
`;

const Cursor = styled.div`
  display: inline-block;
  background-color: white;
  height: 1em;
  width: 10px;
  animation: ${Blinking} 1s linear infinite;
`;

const TerminalScreenFrame = styled(PageFrame)`
  background-color: black;
`;

export default IndexPage
