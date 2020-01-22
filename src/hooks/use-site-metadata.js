import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
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

  return data.site.siteMetadata
}

export default useSiteMetadata
