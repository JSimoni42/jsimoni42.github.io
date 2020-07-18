import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { Index } from "../../constants/siteConstants";

export const MobileIndex: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <HeaderContainer className={ className ?? '' }>
      <Header>
        { Index.mobileHeaderName }
      </Header>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
`;

const Header = styled.pre`
  color: white;
  margin: 0;
  padding: 0;
  display: inline-block;
  max-width: 100%;
`;
