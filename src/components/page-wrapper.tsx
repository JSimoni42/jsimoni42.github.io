import { FC } from "react"
import { SiteHelmet } from "./site-helmet"
import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Computer, MobileBreakpoint } from "../constants/siteConstants"

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
    font-size: 0.75vw;

    @media (max-width: ${MobileBreakpoint}) {
      font-size: 1vh;
    }
  }
`
