import React, { FC } from "react"

import styled from "styled-components";
import { PageWrapper } from "../components/page-wrapper";
import { PageFrame } from "../components/page-frame";
import { CursorRow } from "../components/CursorRow";

const IndexPage: FC = () => {
  return (
    <PageWrapper>
      <TerminalScreenFrame>
        <CursorRow text={ 'Hello, my name is Jim and Bob. Some call me JimBob' } startTyping={ true } />
      </TerminalScreenFrame>
    </PageWrapper>
  )
};

const TerminalScreenFrame = styled(PageFrame)`
  background-color: black;
`;

export default IndexPage
