import React from "react"
import Header from "./header"
import { rhythm } from "../utils/typography"
import useSiteMetadata from "../hooks/use-site-metadata"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <div style={{ position: `relative` }}>
      <Header siteTitle={title} />
      <main
        style={{
          margin: `0 auto`,
          maxWidth: `700px`,
          padding: `0 ${rhythm(2)}`,
        }}
      >
        {children}
      </main>
      <footer style={{ fontSize: `0.75rem`, textAlign: `center` }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> for #100DaysOfGatsby
      </footer>
    </div>
  )
}

export default Layout
