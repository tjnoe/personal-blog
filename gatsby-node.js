const path = require(`path`)
const slugify = require(`slugify`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const templateComponent = path.resolve(`src/templates/blog-post.js`)
  const taggedPostsComponent = path.resolve(`src/templates/tagged-posts.js`)
  const result = await graphql(`
    query {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
        nodes {
          frontmatter {
            path
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`)
    return
  }

  result.data.allMdx.nodes.forEach(post => {
    createPage({
      path: post.frontmatter.path,
      component: templateComponent,
      context: {},
    })
  })

  result.data.allMdx.group.forEach(({ tag }) => {
    createPage({
      path: `/tags/${slugify(tag)}`,
      component: taggedPostsComponent,
      context: {
        tag: tag,
      },
    })
  })
}
