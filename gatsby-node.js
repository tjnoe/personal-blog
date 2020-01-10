const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const templateComponent = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
    query {
      allMdx(sort: {order: DESC, fields: frontmatter___date}) {
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
}