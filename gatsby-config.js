const siteMetadata = {
    title: "doubleOG",
    description: "Telling stories. One post at a time.",
    author: "doubleOG",
    siteUrl: `https://doubleog.gatsbyjs.io/`,
    keywords: ["Gatsby Blog", "Gatsby MDX"]
}

module.exports = {
    siteMetadata,
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    "G-0Q81MCQVXT", // Google Analytics / GA
                ],
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: true,
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `doubleOG`,
                short_name: `dOG`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: `src/images/android-chrome-512x512.png`
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
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://doubleog.gatsbyjs.io/',
                sitemap: 'https://doubleog.gatsbyjs.io/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-postcss`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ]
}