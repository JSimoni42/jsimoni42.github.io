import React, { FC } from "react"

import styled from "styled-components"
import { PageWrapper } from "../components/page-wrapper"
import { DesktopIndex } from "../components/index/Desktop"
import { MobileIndex } from "../components/index/Mobile"
import { MobileBreakpoint } from "../constants/siteConstants"

const IndexPage: FC = () => {
  return (
    <PageWrapper>
      <TerminalScreenFrame>
        <ResponsiveDesktopIndex />
        <ResponsiveMobileIndex />
      </TerminalScreenFrame>
    </PageWrapper>
  )
}

const TerminalScreenFrame = styled.div`
  display: flex;
  flex-direction: column;
`

const ResponsiveDesktopIndex = styled(DesktopIndex)`
  @media (max-width: ${MobileBreakpoint}) {
    display: none;
  }
`

const ResponsiveMobileIndex = styled(MobileIndex)`
  font-size: 8px;
  display: none;

  @media (max-width: ${MobileBreakpoint}) {
    display: inline-block;
  }
`

export default IndexPage
