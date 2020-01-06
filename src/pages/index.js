import React from 'react'
import { Link, graphql } from 'gatsby'
import { rhythm } from '../utils/typography'
import Layout from '../components/layout'

const IndexPage = ({ 
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges.map(({ node }) => (
    <div key={node.id}>
      <Link
        to={node.frontmatter.path}
        style={{ 
          textDecoration: `none`,
          color: `inherit`,
        }}
      >
        <h4
          style={{
            margin: `${rhythm(1 / 4)} 0`
          }}
        >
          {node.frontmatter.title}{" "}
          <span 
            style={{ 
              color: `#bbb` 
            }}
          >- {node.frontmatter.date}</span>
        </h4>
        <p>{node.excerpt}</p>
      </Link>
    </div>
  ))

  return (
    <Layout>
      <h1>Latest Posts</h1>
      <div>
        {posts}
      </div>
    </Layout>
  )
}

export default IndexPage
export const postsQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt(pruneLength: 250)
          id
        }
      }
    }
  }
`
