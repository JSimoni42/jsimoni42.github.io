/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from "react"
import { siteMetadata } from "../../constants/siteConstants"
import Header from "../header"

interface ComponentWithChildren {
  children: JSX.Element[] | JSX.Element
}

const Layout: FC<ComponentWithChildren> = ({ children }) => {
  return (
    <>
      <Header siteTitle={siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <main>{children}</main>
        </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
