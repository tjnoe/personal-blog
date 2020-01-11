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
    <div style={{ position: `relative` }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        style={{ 
          margin: `0 auto`,
          maxWidth: `700px`,
          padding: `0 ${rhythm(2)}`,
        }}
      >{children}</main>
      <footer style={{ fontSize: `0.75rem`, textAlign: `center`}}>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> for #100DaysOfGatsby
      </footer>
    </div>
  )
}

export default Layout