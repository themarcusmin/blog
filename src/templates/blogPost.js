import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Container from "../components/container"

const BlogPost = (props) => {
    // const { body, frontmatter } = data.mdx
    // const { previous, next } = pageContext
    console.log(props)
    return (
        <Container>
            {/* {frontmatter.title}
            {frontmatter.date} */}
        </Container>
    )
}

export default BlogPost

// export const query = graphql`
//     query PostsBySlug ($slug: String!) {
//         mdx(fields: { slug: { eq: $slug}}) {
//             body
//             frontmatter {
//                 title
//                 date(formatString: "MMMM D YYYY")
//             }
//         }
//     }
// `