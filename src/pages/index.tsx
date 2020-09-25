import React, { FC, useLayoutEffect } from "react"

import styled from "styled-components"
import { PageWrapper } from "../components/page-wrapper"
import { DesktopIndex } from "../components/index/Desktop"
import { MobileIndex } from "../components/index/Mobile"
import { MobileBreakpoint } from "../constants/siteConstants"
import { Link } from "gatsby"
import { ResponsiveBreakpoint } from "../components/ResponsiveBreakpoint"

const IndexPage: FC = () => {
  return (
    <>
      <PageWrapper>
        <TerminalScreenFrame>
          <ResponsiveBreakpoint
            desktopView={ <DesktopIndex /> }
            mobileView={ <ResponsiveMobileIndex /> }
            breakpoint={ parseInt(MobileBreakpoint) }
          />
        </TerminalScreenFrame>
      </PageWrapper>
      <Footer>
        <Link to="/credits">Give credit where credit is due</Link>
      </Footer>
    </>
  )
}

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
  }
`

const TerminalScreenFrame = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`

const ResponsiveMobileIndex = styled(MobileIndex)`
  font-size: 8px;
`

export default IndexPage
