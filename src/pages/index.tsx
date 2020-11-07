import React, { FC, useLayoutEffect } from "react"

import styled from "styled-components"
import { PageWrapper } from "../components/page-wrapper"
import { DesktopIndex } from "../components/index/Desktop"
import { MobileIndex } from "../components/index/Mobile"
import {
  EMAILME,
  GALAKSIJA_ARTICLE,
  MobileBreakpoint,
  RESUME,
} from "../constants/siteConstants"
import { Link } from "gatsby"
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
        <div>
          <a target="_blank" href={RESUME}>
            Read an awesome resume
          </a>
        </div>
        <div>
          <a target="_blank" href={GALAKSIJA_ARTICLE}>
            Learn about programs on the radio
          </a>
        </div>
        <Link to="/credits">Give credit where credit is due</Link>
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
