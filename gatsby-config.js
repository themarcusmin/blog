const siteMetadata = {
    title: "Welcome to the corner of the Internet!",
    author: {
        name: 'minminoo',
    },
    description: 'Telling stories. One post at a time.',
    siteUrl: 'https://localhost:8000',
}

module.exports = {
    siteMetadata,
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