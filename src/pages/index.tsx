import React, { FC, useLayoutEffect } from "react"

import styled from "styled-components"
import { PageWrapper } from "../components/page-wrapper"
import { DesktopIndex } from "../components/index/Desktop"
import { MobileIndex } from "../components/index/Mobile"
import {
  EMAILME,
  GALAKSIJA_ARTICLE,
  MobileBreakpoint,
} from "../constants/siteConstants"
import { ResponsiveBreakpoint } from "../components/ResponsiveBreakpoint"

const IndexPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <TerminalScreenFrame>
          <ResponsiveBreakpoint
            desktopView={<DesktopIndex />}
            mobileView={<MobileIndex />}
            breakpoint={parseInt(MobileBreakpoint)}
          />
        </TerminalScreenFrame>
      </PageWrapper>
      <Footer>
        <div>
          <a target="_blank" href={EMAILME}>
            Write me an e-mail
          </a>
        </div>
        <a href="/credits">Give credit where credit is due</a>
      </Footer>
    </>
  )
}

const Footer = styled.footer`
  display: grid;
  justify-content: center;
  margin: 10px 0;

  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
  }
`

const TerminalScreenFrame = styled.div``

export default IndexPage
