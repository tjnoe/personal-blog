import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostPreview from "../components/post-preview"
import SEO from "../components/seo"

const TaggedPostsPage = ({
  data: {
    allMdx: { nodes },
  },
  pageContext,
}) => {
  const posts = nodes.map(post => <PostPreview key={post.id} post={post} />)

  return (
    <Layout>
      <SEO />
      <h1>Posts tagged "{pageContext.tag}"</h1>
      {posts}
    </Layout>
  )
}

export default TaggedPostsPage
export const postsQuery = graphql`
  query($tag: String!) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
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
