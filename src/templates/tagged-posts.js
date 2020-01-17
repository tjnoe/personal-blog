import React from "react"
import slugify from "slugify"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

const TaggedPostsPage = ({
  data: {
    allMdx: { nodes },
  },
  pageContext,
}) => {
  const posts = nodes.map(post => (
    <div
      key={post.id}
      style={{
        marginBottom: `${rhythm(1)}`,
      }}
    >
      <Link
        to={post.frontmatter.path}
        style={{
          textDecoration: `none`,
          color: `inherit`,
        }}
      >
        <h4
          style={{
            margin: `${rhythm(1 / 4)} 0`,
          }}
        >
          {post.frontmatter.title}{" "}
          <span
            style={{
              color: `#bbb`,
            }}
          >
            - {post.frontmatter.date}
          </span>
        </h4>
        <p style={{ margin: 0 }}>{post.excerpt}</p>
      </Link>
      <div style={{ fontSize: `0.75rem` }}>
        {post.frontmatter.tags.split(", ").map(tag => (
          <Link
            key={tag}
            to={`/tags/${slugify(tag)}`}
            style={{ display: `inline-block`, marginRight: `0.25rem` }}
          >
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  ))

  return (
    <Layout>
      <h1>Posts tagged "{pageContext.tag}"</h1>
      <div>{posts}</div>
    </Layout>
  )
}

export default TaggedPostsPage
export const postsQuery = graphql`
  query($tagRegex: String!) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { tags: { regex: $tagRegex } } }
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
