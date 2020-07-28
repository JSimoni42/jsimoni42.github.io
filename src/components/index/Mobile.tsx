import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { Index, RecordPlayer } from "../../constants/siteConstants";

export const MobileIndex: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <HeaderContainer className={ className ?? '' }>
      <Header>
        { Index.mobileHeaderName }
      </Header>
      <div>
        <RecordPlayerContainer>
          { RecordPlayer.player }
        </RecordPlayerContainer>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  text-align: center;
`;

const Header = styled.pre`
  margin: 0;
  padding: 0;
  display: inline-block;
  max-width: 100%;
`;

const RecordPlayerContainer = styled.pre``;
