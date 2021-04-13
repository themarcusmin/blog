// const { createFilePath } = require("gatsby-source-filesystem")
// const path = require("path")

// exports.createPages = ({ actions, graphql }) => {
//     const { createPage } = actions

//     return new Promise((resolve, reject) => {
//         const blogPostTemplate = path.resolve("./src/templates/blogPost.js")

//         resolve(
//             graphql(
//                 `
//                     allMdx {
//                         edges {
//                             node {
//                                 frontmatter {
//                                     title
//                                 }
//                             }
//                         }
//                     }
//                 `
//             )
//         )
//     })


//     return graphql(`
//     {
//         allMdx (
//             sort: {order: DESC, fields: [frontmatter___date]}
//             filter: {frontmatter: {published: {eq: true}}}
//         ) {
//             nodes {
// 			    fields {
//                     slug
//                 }
//                 frontmatter {
//       	            title
//                 }
//             }
//         }
//     }
//     `).then((result) => {
//         if (result.errors) {
//             throw result.errors
//         }

//         const posts = result.data.AllMdx.nodes
//         posts.forEach((post, index) => {
//             const previous = index === post.length - 1 ? null : post[index + 1]
//             const next = index === 0 ? null : post[index - 1]
//             createPage({
//                 path: post.fields.slug,
//                 component: blogPostTemplate,
//                 context: {
//                     slug: post.fields.slug,
//                     previous,
//                     next
//                 }
//             })
//         })
//     })
// }

// exports.onCreateNode = 