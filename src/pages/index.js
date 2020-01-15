import React from 'react'
import { Link, graphql } from 'gatsby'
import { rhythm } from '../utils/typography'
import Layout from '../components/layout'

const IndexPage = ({ 
  data: {
    allMdx: { nodes },
  },
}) => {
  const posts = nodes.map(post => (
    <div key={post.id}>
      <Link
        to={post.frontmatter.path}
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
          {post.frontmatter.title}{" "}
          <span 
            style={{ 
              color: `#bbb` 
            }}
          >- {post.frontmatter.date}</span>
        </h4>
        <p>{post.excerpt}</p>
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
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
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
`
