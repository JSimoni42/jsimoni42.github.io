import { FC } from "react";
import { SiteHelmet } from "./site-helmet";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Computer } from "../constants/siteConstants";

export const PageWrapper: FC = ({ children }) => {
  return (
    <>
      <SiteHelmet />
      <GlobalStyle />
      { children }
      <Footer>
        Computer ASCII Art Sourced From&nbsp;<a href={ Computer.credits }>asciiart.website</a>
      </Footer>
    </>
  );
};

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  a:link, a:visited {
    color: white;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: black;
    color: white;
    font-family: 'Roboto Mono', monospace;
  }

  div {
    box-sizing: border-box;
  }
`;
