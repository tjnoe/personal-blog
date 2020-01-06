import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
import { rhythm } from '../utils/typography'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
        }
      }
    }  
  `)

  return (
    <div
      style={{ 
        margin: `0 auto`,
        maxWidth: `700px`,
        padding: `${rhythm(2)}`,
        paddingTop: `${rhythm(1.5)}`
      }}
      >
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer style={{ fontSize: `0.75rem` }}>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> for #100DaysOfGatsby
      </footer>
    </div>
  )
}

export default Layout