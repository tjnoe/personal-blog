const path = require(`path`)
const slugify = require(`slugify`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const templateComponent = path.resolve(`src/templates/blog-post.js`)
  const taggedPostsComponent = path.resolve(`src/templates/tagged-posts.js`)
  const result = await graphql(`
    query {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          frontmatter {
            path
            tags
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`)
    return
  }

  const tags = new Set()

  result.data.allMdx.nodes.forEach(post => {
    createPage({
      path: post.frontmatter.path,
      component: templateComponent,
      context: {},
    })

    post.frontmatter.tags.split(", ").forEach(tag => {
      tags.add(tag)
    })
  })

  tags.forEach(tag => {
    createPage({
      path: `/tags/${slugify(tag)}`,
      component: taggedPostsComponent,
      context: {
        tag: tag,
        tagRegex: `/${tag}/`,
      },
    })
  })
}
