import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const SEO = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
          titleTemplate
          twitterUsername
        }
      }
    }
  `)

  const metadata = data.site.siteMetadata

  return (
    <>
      <Helmet title={metadata.title} titleTemplate={metadata.titleTemplate}>
        <meta name="description" content={metadata.description} />
        <meta name="og:description" content={metadata.description} />
        <meta name="og:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:creator" content={metadata.twitterUsername} />
      </Helmet>
    </>
  )
}

export default SEO
