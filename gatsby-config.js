module.exports = {
    siteMetadata: {
        title: 'my-blog',
        author: {
            name: 'minminoo',
            summary: 'A CS student',
        },
        description: 'A blog for my rant',
        siteUrl: 'https://localhost:8000',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: ['.mdx', '.md'],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/posts/`,
                name: `post`,
            }
        },
        'gatsby-plugin-postcss',
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ]
}