import React, { FC } from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useObserveViewportIntersection } from "../viewport-intersection/useObserveViewportIntersection";

const IndexPage: FC = () => {
  const ref = useObserveViewportIntersection<HTMLDivElement>();

  return (
    <Layout>
      <div ref={ ref }>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div id="wenis" style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </div>
    </Layout>
  )
};

export default IndexPage
