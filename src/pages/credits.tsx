import React, { FC } from "react"
import { PageWrapper } from "../components/page-wrapper"
import { Computer, RecordPlayer } from "../constants/siteConstants"
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
        <a href="/">Go Home</a>
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
