import React, { FC } from "react"
import { useRouteError } from "react-router-dom"
import styled from "styled-components"
import { PageWrapper } from "../components/page-wrapper"

interface RouteError {
  statusText?: string
  message?: string
}

const ErrorPage: FC = () => {
  const error = useRouteError() as RouteError

  return (
    <PageWrapper>
      <PageContainer>
        <Title>Whoops, that's not quite right</Title>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <a href="/">Return Home</a>
      </PageContainer>
    </PageWrapper>
  )
}

const Title = styled.h1`
  text-align: center;
`

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export default ErrorPage
