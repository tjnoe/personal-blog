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
            image
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`)
    return
  }

  const { nodes, group } = result.data.allMdx

  nodes.forEach((post, index) => {
    createPage({
      path: post.frontmatter.path,
      component: templateComponent,
      context: {
        image: post.frontmatter.image
          ? `/${post.frontmatter.image.replace("/", "\\/")}/`
          : "",
        previous: index === 0 ? null : nodes[index - 1],
        next: index === nodes.length - 1 ? null : nodes[index + 1],
      },
    })
  })

  group.forEach(({ tag }) => {
    createPage({
      path: `/tags/${slugify(tag)}`,
      component: taggedPostsComponent,
      context: {
        tag: tag,
      },
    })
  })
}
