import React, { HTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

type Props = HTMLAttributes<HTMLDivElement>;

export const PageFrame = forwardRef<HTMLDivElement, Props>(({ children, className }, ref) => {
  return (
    <FrameContainer className={ className ?? '' } ref={ ref }>
      { children }
    </FrameContainer>
  );
});

const FrameContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;
