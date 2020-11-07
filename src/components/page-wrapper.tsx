import { FC } from "react"
import { SiteHelmet } from "./site-helmet"
import React from "react"
import { createGlobalStyle } from "styled-components"
import { MobileBreakpoint } from "../constants/siteConstants"

export const PageWrapper: FC = ({ children }) => {
  return (
    <>
      <SiteHelmet />
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

    @media (max-width: ${MobileBreakpoint}) {
      font-size: 1vh;
    }
  }
`
