import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/use-site-metadata"

const SEO = () => {
  const {
    description,
    title,
    titleTemplate,
    twitterUsername,
  } = useSiteMetadata()

  return (
    <>
      <Helmet title={title} titleTemplate={titleTemplate}>
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:creator" content={twitterUsername} />
      </Helmet>
    </>
  )
}

export default SEO
