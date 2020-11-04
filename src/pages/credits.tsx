import React, { FC } from "react"
import { PageFrame } from "../components/page-frame"
import { PageWrapper } from "../components/page-wrapper"
import {
  Computer,
  NATIONAL_ARCHIVES,
  RecordPlayer,
} from "../constants/siteConstants"
import { Link } from "gatsby"
import styled from "styled-components"

const Credit: FC = () => {
  return (
    <PageWrapper>
      <PageContainer>
        <div>
          Computer ASCII Art Sourced From&nbsp;
          <a href={Computer.credits}>asciiart.website</a>
        </div>
        <div>
          ASCII Record Player Sourced from&nbsp;
          <a href={RecordPlayer.credits}>ascii.co.uk</a>
        </div>
        <div>
          All video and audio footage comes from&nbsp;
          <a href={NATIONAL_ARCHIVES}>the national archives</a>
        </div>
        <Link to="/">Go Home</Link>
      </PageContainer>
    </PageWrapper>
  )
}

const PageContainer = styled.div`
  display: grid;
  padding: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 50px);
`

export default Credit
