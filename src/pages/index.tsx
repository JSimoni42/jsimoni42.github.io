import React, { FC } from "react"

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
import { Link } from "react-router-dom"

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
        <FooterLink target="_blank" href={EMAILME}>
          <EmailIcon />
          Write me an e-mail
        </FooterLink>
        <FooterLink as={Link} to="/resume">
          <ResumeIcon />
          View my résumé
        </FooterLink>
      </Footer>
    </>
  )
}

const EmailIcon: FC = () => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="2" y="4" width="20" height="16" rx="1" />
    <path d="M2 6l10 8 10-8" />
  </Icon>
)

const ResumeIcon: FC = () => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M6 2h9l4 4v16H6z" />
    <path d="M15 2v4h4" />
    <path d="M9 12h6M9 16h6" />
  </Icon>
)

const Icon = styled.svg`
  width: 24px;
  height: 24px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 10px 0;

  @media (max-width: ${MobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`

const FooterLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
`

const TerminalScreenFrame = styled.div``

export default IndexPage
