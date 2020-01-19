import React from "react"
import slugify from "slugify"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const PostPreview = ({ post }) => (
  <div
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
      {post.frontmatter.tags.map(tag => (
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
)

export default PostPreview
