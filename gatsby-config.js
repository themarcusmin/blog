const siteMetadata = {
    title: "doubleOG",
    author: {
        name: 'doubleOG',
    },
    description: 'Telling stories. One post at a time.',
    siteUrl: 'https://localhost:8000',
}

module.exports = {
    siteMetadata,
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `doubleOG`,
                short_name: `dOG`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: `public/static/android-chrome-512x512.png`
            },
        },
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