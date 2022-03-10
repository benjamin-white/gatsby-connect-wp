const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions

  return graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          slug
        }
      },
      allWpPage(filter: {status: {eq: "publish"}}) {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    result.data.allWpPost.nodes.forEach(node => 
      createPage({
        path: node.slug,
        component: require.resolve('./src/templates/post.js'),
        context: {
          slug: node.slug
        }
        // defer: true,
      })
    )
    result.data.allWpPage.nodes.forEach(node => 
      createPage({
        path: node.slug,
        component: require.resolve('./src/templates/page.js'),
        context: {
          slug: node.slug
        }
        // defer: true,
      })
    )
  })
}
