import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogPost = ({ data, pageContext }) => {
  const { previous, next } = pageContext
  const { mdx, file } = data
  const { frontmatter, body } = mdx

  return (
    <Layout>
      <SEO />
      <div>
        <h1>{frontmatter.title}</h1>
        <h2
          style={{
            fontSize: `0.75rem`,
            color: `#bbb`,
            marginTop: `0`,
          }}
        >
          {frontmatter.date}
        </h2>
        <Img
          fluid={file.childImageSharp.fluid}
          alt={frontmatter.imageAlt}
          style={{ marginBottom: `1.5rem` }}
        />
        <MDXRenderer>{body}</MDXRenderer>
        <div
          style={{
            display: `flex`,
            justifyContent: `space-between`,
            flexDirection: previous ? `row` : `row-reverse`,
            marginBottom: `${rhythm(1)}`,
          }}
        >
          {previous && (
            <Link to={previous.frontmatter.path}>&larr; Previous Post</Link>
          )}{" "}
          {next && <Link to={next.frontmatter.path}>Next Post &rarr;</Link>}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!, $image: String) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        imageAlt
      }
    }
    file(relativePath: { regex: $image }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default BlogPost
