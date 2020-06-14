import React, { FC, HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';

export const PageFrame: FC<HtmlHTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
  return (
    <FrameContainer className={ className ?? '' }>
      { children }
    </FrameContainer>
  );
};

const FrameContainer = styled.div`
  width: 100%;
  height: 100vh;
  border: thick black solid;
`;
