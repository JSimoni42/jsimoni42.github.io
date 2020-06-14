import React, { FC } from "react"

import { PageFrame } from "../components/page-frame";
import styled from "styled-components";
import { PageWrapper } from "../components/page-wrapper";

const IndexPage: FC = () => {
  return (
    <PageWrapper>
      <IndexContainer>
        <ContentPage>
          Neat! First page
        </ContentPage>
        <PageFrame>
          Wow! Second page
        </PageFrame>
      </IndexContainer>
    </PageWrapper>
  )
};

const ContentPage = styled(PageFrame)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default IndexPage
