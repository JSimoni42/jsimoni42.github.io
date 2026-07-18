import React, { FC } from "react"
import styled from "styled-components"
import { PageWrapper } from "../components/page-wrapper"
import { RESUME, MobileBreakpoint } from "../constants/siteConstants"
import { resumeHtml } from "../generated/resume"

const Resume: FC = () => {
  return (
    <PageWrapper>
      <PageContainer>
        <NavRow>
          <a href="/">Go Home</a>
          <a target="_blank" href={RESUME}>
            Download PDF
          </a>
        </NavRow>
        <ResumeContent dangerouslySetInnerHTML={{ __html: resumeHtml }} />
      </PageContainer>
    </PageWrapper>
  )
}

const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`

const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const ResumeContent = styled.div`
  a {
    color: white;
  }

  hr {
    border: none;
    border-top: 1px dashed white;
    margin: 15px 0;
  }

  ul {
    margin: 0 0 16px;
    padding-left: 20px;
  }

  li {
    margin-bottom: 6px;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0 0 8px;
  }

  #content {
    display: grid;
    grid-template-columns: 260px 1fr;
    grid-template-areas: "personal experience";
    column-gap: 30px;
    align-items: start;

    @media (max-width: ${MobileBreakpoint}) {
      grid-template-columns: 1fr;
      grid-template-areas: "personal" "experience";
      row-gap: 30px;
    }
  }

  #personal-section {
    grid-area: personal;
    border: 5px dashed white;
    padding: 15px;
  }

  #experience-section {
    grid-area: experience;
  }

  #experience-section h3 {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px dashed white;
  }

  #experience-section h3:first-of-type {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
  }
`

export default Resume
