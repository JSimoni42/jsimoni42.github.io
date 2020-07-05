import React, { FC } from "react"

import { PageFrame } from "../components/page-frame";
import styled from "styled-components";
import { PageWrapper } from "../components/page-wrapper";
import { useObserveViewportIntersection } from "../viewport-intersection/useObserveViewportIntersection";
import { useOnIntersection } from "../viewport-intersection/useOnIntersection";
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby";

const IndexPage: FC = () => {
  const secondPageIntersectionRef = useObserveViewportIntersection<HTMLDivElement>();

  useOnIntersection(([ entry ]) => {
    if (entry.isIntersecting) {
      console.log(entry);
    }
  });

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "take-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <PageWrapper>
      <IndexContainer>
        <ContentPage>
          <img src='https://d1onj8fhbqbvm7.cloudfront.net/IMG_20200613_181347.jpg' />
        </ContentPage>
        <ContentPage ref={ secondPageIntersectionRef }>
          Wow! Second page
        </ContentPage>
        <ContentPage>
          Golly, Gee! A third page!
        </ContentPage>
      </IndexContainer>
    </PageWrapper>
  )
};

const SplashImage = styled(Img)`
  width: 120%;
  max-height: 100vh;
`;

const ContentPage = styled(PageFrame)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default IndexPage
