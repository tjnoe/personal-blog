import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostPreview from "../components/post-preview"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  const posts = nodes.map(post => <PostPreview key={post.id} post={post} />)

  return (
    <Layout>
      <SEO />
      <h1>Latest Posts</h1>
      {posts}
    </Layout>
  )
}

export default IndexPage
export const postsQuery = graphql`
  query PostsQuery {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          path
          title
          date(formatString: "MMMM DD, YYYY")
          tags
        }
        excerpt(pruneLength: 250)
        id
      }
    }
  }
`
