import React from "react"
import slugify from "slugify"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const ReadPostLink = styled(Link)`
  display: block;
  text-decoration: none;
  background-image: none;
  transition: all 0.5s ease;
  text-shadow: none;

  &:hover {
    color: #fff;
    background-color: #ff7500;
    border-radius: 5px;
  }
`

const PostPreview = ({ post }) => (
  <div
    style={{
      marginBottom: `${rhythm(0.5)}`,
      paddingBottom: `${rhythm(0.5)}`,
      borderBottom: `1px solid #eaeaea`,
    }}
  >
    <ReadPostLink
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
    </ReadPostLink>
    <p style={{ margin: 0 }}>{post.excerpt}</p>
    <div style={{ fontSize: `0.75rem` }}>
      {post.frontmatter.tags.map(tag => (
        <Link
          key={tag}
          to={`/tags/${slugify(tag)}`}
          style={{ display: `inline-block`, margin: `0 0.25rem 0.5rem 0` }}
        >
          #{tag}
        </Link>
      ))}
    </div>
    <ReadPostLink to={post.frontmatter.path} style={{ textAlign: `center` }}>
      Read Post
    </ReadPostLink>
  </div>
)

export default PostPreview
