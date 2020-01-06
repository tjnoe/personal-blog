import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPost = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div>
        <h1>{frontmatter.title}</h1>
        <h2 
          style={{ 
            fontSize: `0.75rem`, 
            color: `#bbb`,
            marginTop: `0` 
          }}
        >{frontmatter.date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default BlogPost