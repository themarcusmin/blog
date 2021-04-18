const path = require("path")
const _ = require("lodash")

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
            tagsGroup: allMdx {
                group(field: frontmatter___tags) {
                    fieldValue
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    const posts = result.data.allMdx.edges

    // Create Page for each blog post
    posts.forEach(({ node }, index) => {
        createPage({
            path: `/blog/${node.slug}`,
            component: path.resolve(`./src/templates/blogPost.js`),
            context: { id: node.id },
        })
    })

    const tags = result.data.tagsGroup.group

    // Create Page for each tags
    tags.forEach(tag => {
        createPage({
            path: `/tags/${tag.fieldValue}`,
            component: path.resolve(`./src/templates/tags.js`),
            context: { tag: tag.fieldValue },
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

// Fix bug for react@17 => ReferenceError: React is not defined
exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPlugin({
        name: '@babel/plugin-transform-react-jsx',
        options: {
            runtime: 'automatic',
        },
    });
};