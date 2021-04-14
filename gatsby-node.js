
const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allMdx(filter: {frontmatter: {published: {eq: true}}}) {
                edges {
                    node {
                        id
                        slug
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    const posts = result.data.allMdx.edges

    posts.forEach(({ node }, index) => {
        createPage({
            path: `/blog/${node.slug}`,
            component: path.resolve(`./src/templates/blogPost.js`),
            context: { id: node.id },
        })
    })
}

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === "Mdx") {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: "slug",
            node,
            value: `/blog${value}`,
        })
    }
}