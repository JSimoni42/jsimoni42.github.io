import { FC } from "react";
import { SiteHelmet } from "./site-helmet";
import React from "react";
import { createGlobalStyle } from "styled-components";

export const PageWrapper: FC = ({ children }) => {
  return (
    <>
      <SiteHelmet />
      <GlobalStyle />
      { children }
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: black;
    color: white;
  }

  div {
    box-sizing: border-box;
  }
`;
