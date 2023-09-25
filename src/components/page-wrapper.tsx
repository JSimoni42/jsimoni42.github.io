import { FC } from "react"
import React from "react"
import { createGlobalStyle } from "styled-components"
import { MobileBreakpoint } from "../constants/siteConstants"

export const PageWrapper: FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

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

  a:link, a:visited {
    color: white;
  }

  pre {
    font-size: 0.5vw;

    font-family: 'Courier';

    @media (max-width: ${MobileBreakpoint}) {
      font-size: 1vh;
    }
  }
`
