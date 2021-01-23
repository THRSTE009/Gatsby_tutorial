//  Tutorial 7 Programmatically Create pages from data.

// The function below will be called by Gatsby whenever a new node is created or updated.
// exports.onCreateNode = ({ node }) => {
//     console.log(`Node created of type "${node.internal.type}"`)
//   }

//  Use markdown file name to create the page 'slug' aka path.
//  E.g. 'pandas-and-bananas.md' will become '/pandas-and-bananas/'.

//  Use the getNode() helper to traverse the "node graph" to its parent 'File' node 
//  in order to get the file name from the MarkdownRemark node.

// exports.onCreateNode = ({ node, getNode }) => {
//     if (node.internal.type === `MarkdownRemark`) 
//     {
//         const fileNode = getNode(node.parent)
//         console.log(`\n`, fileNode.relativePath)    //  It logs to the Command console not browser console.
//     }
//   }

//  1. Query data with GraphQL
// This function handles finding the parent File node along with creating the slug.
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    //createNodeField creates additional fields on nodes created by other plugins.
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

//  2. Map the query results to pages.
//  Creating pages using the createPages API which Gatsby calls so plugins can add pages.
//  And logging out the result of the query.
exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions
    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    // console.log(JSON.stringify(result, null, 4))
    
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
  }