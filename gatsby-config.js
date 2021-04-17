const siteMetadata = {
    title: "doubleOG",
    description: "Telling stories. One post at a time.",
    author: "doubleOG",
    siteUrl: `https://localhost:8000`,
    keywords: ["Gatsby Blog", "Gatsby MDX"]
}

module.exports = {
    siteMetadata,
    plugins: [
        // {
        //     resolve: `gatsby-plugin-google-gtag`,
        //     options: {
        //         trackingIds: [
        //             "GA-TRACKING_ID", // Google Analytics / GA
        //             "AW-CONVERSION_ID", // Google Ads / Adwords / AW
        //             "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        //         ],
        //     },
        // },
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
        `gatsby-plugin-postcss`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ]
}