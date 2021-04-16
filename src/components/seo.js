import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

const Seo = ({ description, keywords, title, siteUrl, author, extraTitle }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        keywords
                        siteUrl
                    }
                }
            }
        `
    )
    const metaKeywords = site.siteMetadata.keywords
    const metaDescription = description || site.siteMetadata.description
    const metaTitle = title || site.siteMetadata.title
    const metaAuthor = author || site.siteMetadata.author
    const metaUrl = siteUrl || site.siteMetadata.siteUrl

    return (
        <Helmet
            title={extraTitle ? `${extraTitle} | ${metaTitle}` : metaTitle}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: metaTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:url`,
                    content: metaUrl,
                },
                {
                    name: `twitter:creator`,
                    content: metaAuthor,
                },
                {
                    name: `twitter:title`,
                    content: metaTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(
                metaKeywords && metaKeywords.length > 0 ? {
                    name: "keywords",
                    content: metaKeywords.join(","),
                } : []
            )}
        />
    )
}

export default Seo