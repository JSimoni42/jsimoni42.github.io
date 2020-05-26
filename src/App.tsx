import React, { FC } from "react";
import styled from "styled-components";

export const App: FC = () => {
  return <StyledHeader>Wenis</StyledHeader>;
};

const StyledHeader = styled.h1`
  height: 24px;
  background-color: black;
  color: white;
`;
