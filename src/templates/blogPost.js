import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Helmet from "react-helmet"
import Container from "../components/container"

const shortcodes = { Link }

const BlogPost = ({ data: { mdx, site } }) => {
  const title = site.siteMetadata.title
  const postTitle = mdx.frontmatter.title
  return (
    <Container>
      <Helmet title={`${title} | ${postTitle}`} />
      <div>{mdx.frontmatter.date}</div>
      <div>{postTitle}</div>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Container>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM D YYYY")
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`